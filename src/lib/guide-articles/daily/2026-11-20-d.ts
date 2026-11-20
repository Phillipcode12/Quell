import type { Guide } from '@/lib/guide-types'
export const DAILY_20261120_D: Guide[] = [
  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-sarasota-fl:
   * - NOAA RCC ACIS StnData, SID SRQ (SARASOTA BRADENTON AP, elev 17 ft),
   *   1991-2020 monthly normals, saved at .daily-job/acis1120/SRQ.json and
   *   .daily-job/d/SRQ-mint.json: normal max Jan 72.5, Feb 74.9, Mar 78.2,
   *   Apr 82.5, May 87.5, Jun 90.0, Jul 91.1, Aug 91.5, Sep 90.2, Oct 86.3,
   *   Nov 80.0, Dec 75.2 F; normal min Jan 52.3, Jul 75.2, Aug 75.3 F;
   *   precip Jan 2.79, Feb 1.92, Mar 2.85, Apr 2.46, May 2.58, Jun 7.05,
   *   Jul 7.39, Aug 9.11, Sep 6.00, Oct 2.76, Nov 1.81, Dec 2.33 in
   *   (annual sum 49.05). Snowfall missing (M), left out.
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-sarasota-fl',
    title: 'Dry eye relief in Sarasota, Florida',
    description:
      'Sarasota gets most of its rain from June to September, then dries out. NOAA’s monthly normals, beach and AC tips, and what Quell’s label says.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Sarasota’s eyes face two different seasons. From June through September, NOAA’s normals for Sarasota Bradenton Airport show seven to nine inches of rain a month and highs near 91°F, so people live in air conditioning. From October to May, rain drops to around two or three inches a month and the breeze off the water does the drying. Aim vents away from your face, wear sunglasses on the sand, blink fully, and use a lubricating drop as its label directs.`,
      },
      { h: 'Sarasota’s year in NOAA’s numbers' },
      {
        p: `NOAA’s 1991–2020 climate normals for Sarasota Bradenton Airport, a station only about 17 feet above sea level between the two cities, add up to roughly 49 inches of precipitation a year. How that rain is spread out matters more for your eyes than the total:`,
      },
      {
        list: [
          `August is the wettest month at 9.11 inches, followed by July (7.39), June (7.05) and September (6.00).`,
          `November is the driest at 1.81 inches, with February close behind at 1.92.`,
          `Normal highs run from 72.5°F in January to 91.5°F in August.`,
          `Normal lows bottom out at 52.3°F in January and stay above 75°F through July and August.`,
        ],
      },
      {
        p: `Put simply, the four rainy months bring more than half the year’s water. The other eight are the stretch most visitors come for, and they’re the drier one.`,
      },
      { h: 'Why do my eyes feel dry in Sarasota if Florida is humid?' },
      {
        p: `Outdoor humidity is only part of the picture. Your tear film has a thin oil layer on top of a watery layer, and that oil slows evaporation between blinks. Moving air pulls moisture off the eye whether it comes from a sea breeze, a ceiling fan or a car vent. In a Sarasota summer most hours are spent indoors in cooled air, and air conditioning removes moisture from a room as it cools it. Sitting under a supply vent for a long afternoon can leave your eyes feeling gritty even when the parking lot outside is steaming.`,
      },
      { h: 'The dry season: November through May' },
      {
        p: `When the rains taper in October, the calendar fills with beach walks, outdoor dining, golf and fishing from the bridges and piers. Highs in the 70s and low 80s make long afternoons outdoors easy, and that’s exactly when wind and glare work on the eyes:`,
      },
      {
        list: [
          `Wear wraparound sunglasses on the beach. Pale sand and open water bounce light back up under ordinary frames, and wraparounds also block the breeze.`,
          `A brimmed hat cuts glare from above, which helps on a boat deck with no shade.`,
          `On a windy day, sit with the wind at your back rather than in your face.`,
          `Take a few slow, complete blinks when you come in from the sun. Squinting all afternoon tends to mean shallow blinks.`,
        ],
      },
      { h: 'Summer in the air conditioning' },
      {
        p: `June through September, normal highs stay at or above 90°F and the lows barely drop below 75°F, so the AC rarely shuts off. A few small changes add up across a long season:`,
      },
      {
        list: [
          `In the car, angle the dash vents toward your chest or the floor instead of your face.`,
          `At a desk, check where the ceiling register points and move your chair out of its stream.`,
          `Turn bedroom ceiling fans down to low at night, or point a pedestal fan away from the bed.`,
          `During long screen sessions, look away every so often and finish each blink. Screens reduce how often you blink, and a half blink doesn’t spread tears across the whole eye.`,
        ],
      },
      {
        p: `[Why are my eyes dry when it’s humid?](/guides/why-are-my-eyes-dry-when-it-is-humid) explains in more depth how a muggy climate and dry eyes go together.`,
      },
      { h: 'Seasonal residents and long drives south' },
      {
        p: `Plenty of Sarasota households arrive in the fall and leave in spring, often by a drive of a day or more. Hours behind the wheel with the vents running and your eyes fixed on the road are a reliable recipe for tired, dry eyes. Stop every couple of hours, step out of the car, and keep the bottle somewhere you can reach at a rest stop rather than in a hot trunk. If you fly instead, a {size} bottle fits easily in a quart bag of liquids.`,
      },
      { h: 'What Quell’s Drug Facts panel says' },
      {
        p: `Quell is a preservative-free lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its active ingredients are {actives}. Here are the panel’s main lines, quoted exactly:`,
      },
      {
        list: [
          `Uses: {uses}.`,
          `Directions: {directions}.`,
          `Warnings: {warnings}.`,
          `When using: {tip}.`,
          `Storage: {storage}.`,
        ],
      },
      {
        p: `That storage range matters in Sarasota. A car parked in a beach lot in August can get far hotter inside than any range on a label, so carry the bottle in a bag that comes inside with you. Also from the label: {milky}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in Sarasota' },
      {
        p: `We ship from Brentwood, Tennessee, to Sarasota, Bradenton, Venice, Lakewood Ranch and every other US address. Checkout works as a guest, buyers need to be 18 or older, shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking comes by email; no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery with nothing to send back. See the [Sarasota page](/eye-drops/sarasota-fl) and the [Florida page](/eye-drops/state/florida), or [order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor in Sarasota' },
      {
        p: `A lubricating drop is for ordinary dryness. The label is specific about when to stop: {stopUse} Pain, a change in vision, or dryness that keeps coming back in every season are reasons to book an eye exam, where an eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) is a quick reference.`,
      },
    ],
    faq: [
      {
        q: 'What is the rainiest month in Sarasota?',
        a: `August, at 9.11 inches in NOAA’s 1991–2020 normals for Sarasota Bradenton Airport. June through September together bring more than half of the roughly 49 inches the station gets in a normal year.`,
      },
      {
        q: 'What is the driest month in Sarasota, Florida?',
        a: `November, with a normal 1.81 inches at Sarasota Bradenton Airport. February is close behind at 1.92 inches, and most months from October to May stay under three inches.`,
      },
      {
        q: 'Why do my eyes get dry at the beach in Sarasota?',
        a: `Steady breeze off the water speeds evaporation from the tear film, and bright sand and water make you squint, which tends to shorten blinks. Wraparound sunglasses and a brimmed hat help with both.`,
      },
      {
        q: 'Can I get Quell shipped to a seasonal address in Sarasota?',
        a: `Yes. Enter the Sarasota address at checkout and the order ships there from Brentwood, Tennessee. Shipping is {shipping}, or free on {freeBottles} or more bottles, and no delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-joplin-mo:
   * - NOAA RCC ACIS StnData, SID JLN (JOPLIN REGIONAL AIRPORT, elev 972 ft),
   *   1991-2020 monthly normals, .daily-job/acis1120/JLN.json and
   *   .daily-job/d/JLN-mint.json: normal max Jan 44.8, Feb 50.0, Jul 90.3,
   *   Aug 90.0, Dec 47.8 F; normal min Jan 25.0, Feb 28.7, Dec 28.5, Jul 69.5 F;
   *   precip Jan 1.92, Feb 1.98, Mar 3.29, Apr 4.99, May 6.56, Jun 5.60,
   *   Jul 3.97, Aug 3.36, Sep 4.18, Oct 3.80, Nov 3.33, Dec 2.60 in
   *   (annual sum 45.58). Snowfall missing (M), left out.
   * - Not in relhum23.txt or wndspd23.txt: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-joplin-mo',
    title: 'Dry eye relief in Joplin, Missouri',
    description:
      'Joplin’s winters are its driest months and its January nights average 25°F. NOAA’s normals for the airport, plus heating, wind and screen tips for dry eyes.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `In Joplin, dry eyes tend to peak in winter. NOAA’s normals for Joplin Regional Airport put January lows at 25°F and January precipitation under two inches, the driest month of the year, so furnaces run for weeks in air that holds little water. Keep heat vents off your face, run a humidifier in the bedroom, blink fully at screens, and use a lubricating drop exactly as its label says.`,
      },
      { h: 'How Joplin’s weather runs through the year' },
      {
        p: `NOAA’s 1991–2020 climate normals for Joplin Regional Airport, at about 970 feet north of the city, describe a place with a wet spring and a lean winter:`,
      },
      {
        list: [
          `About 45.6 inches of precipitation in a normal year.`,
          `May is the wettest month at 6.56 inches, with June at 5.60 and April at 4.99.`,
          `January (1.92 inches) and February (1.98) are the driest, and December adds only 2.60.`,
          `Normal highs climb from 44.8°F in January to 90.3°F in July.`,
          `Normal lows sit near 25°F in January and about 28.5°F in December and February.`,
        ],
      },
      {
        p: `So the months when the house is shut tight and heated are also the months with the least rain and snow. That pairing is what makes a Joplin winter hard on the tear film.`,
      },
      { h: 'Winter: when the furnace does the drying' },
      {
        p: `Cold air holds very little moisture. When a furnace warms it to room temperature without adding water, its relative humidity drops sharply, and that dry indoor air pulls water off the surface of the eye between blinks. A few habits help through December, January and February:`,
      },
      {
        list: [
          `Notice where the floor or ceiling registers blow, and keep your favorite chair, your bed and your desk out of their path.`,
          `Run a cool-mist humidifier in the bedroom, cleaned as its maker directs.`,
          `Turn the thermostat down a few degrees at night. Less heating means less drying.`,
          `In the car, set the defroster to the windshield and keep the face vents closed or aimed low.`,
        ],
      },
      {
        p: `Our guide to [dry eyes from forced-air heat](/guides/dry-eyes-from-forced-air-heat) goes room by room through a heated house.`,
      },
      { h: 'Spring rain, summer heat' },
      {
        p: `From April through June, Joplin gets close to 17 inches of rain between them, and the outdoor air is rarely what dries your eyes. Wind is a different story on open ground. Working a yard, standing at a ballfield or riding with the windows down pushes air across the eye, and it evaporates the tear film faster. Sunglasses or clear safety glasses help as a windbreak.`,
      },
      {
        p: `July and August bring normal highs around 90°F, so most people move between hot parking lots and air-conditioned buildings. Air conditioning dries a room as it cools it. Point car and office vents away from your face, and take breaks from the screen if you spend the afternoon under a ceiling register.`,
      },
      { h: 'Long drives on the interstate' },
      {
        p: `Joplin sits close to where Missouri meets Kansas and Oklahoma, and errands, work and family visits often mean time on the highway. Highway driving is a quiet strain on the eyes. You stare ahead, you blink less, and the dash vents blow straight back at you. Stop every couple of hours, close your eyes for a minute at a rest area, and keep a bottle somewhere you can reach when parked, not in the glove box on a 90-degree afternoon.`,
      },
      { h: 'Screens at work and at home' },
      {
        p: `Office jobs, school and an evening phone all add up. Looking at a screen lowers how often you blink, and partial blinks don’t refresh the watery layer across the whole eye. Every so often, look at something across the room and close your eyes fully a few times. If you work from home in winter, put the monitor where the heat register doesn’t blow past your face. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why this matters.`,
      },
      { h: 'Reading Quell’s label' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists the active ingredients as {actives}, and gives its Uses as: {uses}.`,
      },
      {
        p: `The directions read: {directions}. While using it, the label adds: {tip}. It also warns: {warnings}. And one line to check every time you open the bottle: {doNotUse}. Everything on the carton is reproduced on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering to Joplin' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Joplin, Webb City, Carthage, Neosho and every other US address. There’s no account to create, buyers must be 18 or older, shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking arrives by email, but no delivery date is promised, so order before the bottle runs out. Unopened bottles can be refunded within {returnDays} days of delivery, and you keep them. The [Joplin page](/eye-drops/joplin-mo) and the [Missouri page](/eye-drops/state/missouri) have more.`,
      },
      { h: 'Signs to see an eye doctor' },
      {
        p: `Dry air explains a lot, but not everything. The label says: {stopUse} Dryness that comes back every winter and every summer, or that changes how well you see, is worth an exam. An eye doctor can find the cause and decide what to do. Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Joplin, Missouri?',
        a: `January, with a normal 1.92 inches of precipitation at Joplin Regional Airport in NOAA’s 1991–2020 normals. February is nearly as dry at 1.98 inches.`,
      },
      {
        q: 'How cold does it get in Joplin in winter?',
        a: `NOAA’s normals for Joplin Regional Airport put the average January low at 25°F and the average January high at 44.8°F. December and February lows both average a little above 28°F.`,
      },
      {
        q: 'Why are my eyes so dry in winter in Joplin?',
        a: `Furnaces warm cold outdoor air without adding moisture, so indoor air gets very dry, and Joplin’s coldest months are also its driest. Keeping vents off your face and running a bedroom humidifier both help.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-florence-al:
   * - NOAA RCC ACIS StnData, SID MSL (MUSCLE SHOALS AP, elev 544 ft),
   *   1991-2020 monthly normals, .daily-job/acis1120/MSL.json and
   *   .daily-job/d/MSL-mint.json: normal max Jan 52.4, Jul 91.6, Aug 91.2 F;
   *   normal min Jan 33.5, Jul 71.4 F; precip Jan 4.71, Feb 4.79, Mar 5.14,
   *   Apr 4.80, May 4.55, Jun 5.05, Jul 4.78, Aug 3.77, Sep 3.55, Oct 3.47,
   *   Nov 4.15, Dec 5.48 in (annual sum 54.24). Snowfall missing (M).
   * - Not in relhum23.txt or wndspd23.txt: no humidity or wind figure.
   * - Florence on the Tennessee River, and the bridge to Sheffield:
   *   https://florenceal.org/river-heritage-park/ and
   *   https://florenceal.org/florence-through-the-years/
   */
  {
    slug: 'dry-eye-relief-florence-al',
    title: 'Dry eye relief in Florence, Alabama',
    description:
      'Florence’s rain is spread across the year, yet dry eyes still happen. NOAA normals for the Muscle Shoals airport and what helps in each Shoals season.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Florence gets rain in every month, so dry eyes here usually come from indoor air and long hours of focus, not from the weather outside. NOAA’s normals for the Muscle Shoals airport, across the Tennessee River, show September and October as the driest months and July highs near 92°F. Point AC and heat vents away from your face, take screen breaks, wear sunglasses on the water, and use a lubricating drop as its label directs.`,
      },
      { h: 'The Shoals climate, from NOAA' },
      {
        p: `The closest long-running NOAA station is at the Muscle Shoals airport, about 544 feet above sea level on the south side of the river. Its 1991–2020 normals fit the whole Shoals area well enough:`,
      },
      {
        list: [
          `Roughly 54 inches of precipitation in a normal year.`,
          `December is the wettest month at 5.48 inches, with March at 5.14.`,
          `October (3.47 inches) and September (3.55) are the driest, followed by August at 3.77.`,
          `Normal highs reach 91.6°F in July and fall to 52.4°F in January.`,
          `The January low averages 33.5°F, just above freezing.`,
        ],
      },
      {
        p: `No month falls below three and a half inches. That evenness is why a Florence resident can feel dry-eyed in a place that rarely looks dry.`,
      },
      { h: 'Where the dryness actually comes from' },
      {
        p: `The tear film is three thin layers: mucus against the eye, water in the middle and oil on top. The oil layer slows evaporation, and blinking spreads a fresh coat with every lid stroke. Anything that moves air across the eye or slows your blinking lets the water layer thin out faster. In Florence that usually means:`,
      },
      {
        list: [
          `Air conditioning from late spring into October, when highs sit near 90°F.`,
          `Central heat from December through February, with nights near freezing.`,
          `Reading, sewing, gaming or working at a screen for hours, which lowers your blink rate.`,
          `Wind and glare on the Tennessee River on a day out on the water.`,
        ],
      },
      { h: 'Late summer and fall: the driest stretch' },
      {
        p: `August through October is when the rain gauge slows down, and it overlaps with the hottest weeks and the start of football and festival season. Long afternoons in bleachers or on a lawn chair put your eyes in sun and moving air for hours. Bring sunglasses with wide arms, sit with the breeze at your side rather than your face, and close your eyes for a few seconds now and then. Indoors, the AC is still running hard, so vent direction matters as much as it did in July.`,
      },
      { h: 'On the Tennessee River' },
      {
        p: `Fishing, boating and paddling bring three things together: steady wind off open water, glare from the surface, and long stretches of watching a line or the shoreline without much blinking. Wraparound sunglasses, polarized if you like, cut both wind and glare. A cap with a brim helps on a boat with no canopy. If you keep a bottle of drops in a tackle box or console, remember that a boat in full sun gets warm, and check the storage line below. [Dry eyes on a boat](/guides/dry-eyes-on-a-boat) has more for a day on the water.`,
      },
      { h: 'Winter in a heated house' },
      {
        p: `December is the wettest month here, and yet indoor air can still get dry once the heat runs every night. Warming chilly air lowers its relative humidity, so a bedroom humidifier and a slightly lower thermostat both help. Keep space heaters pointed at your feet, not your face, and don’t sit in the stream of a floor register while you read.`,
      },
      { h: 'What the Quell label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel names the active ingredients ({actives}) and the inactive ones ({inactives}). The Uses line reads: {uses}.`,
      },
      {
        list: [
          `Directions: {directions}.`,
          `When using: {tip}.`,
          `Do not use: {doNotUse}.`,
          `Storage: {storage}.`,
        ],
      },
      {
        p: `The warnings section says: {warnings}. See the whole panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in the Shoals' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Florence, Muscle Shoals, Sheffield, Tuscumbia and every other US address. Check out as a guest (buyers must be 18 or older). Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking comes by email; there’s no promised delivery date. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. Visit the [Florence page](/eye-drops/florence-al) or the [Alabama page](/eye-drops/state/alabama) for local details.`,
      },
      { h: 'When drops aren’t enough' },
      {
        p: `A lubricating drop is for everyday dryness, and the label sets the limit: {stopUse} If your eyes hurt, your vision changes, or the dryness keeps returning through every season, see an eye doctor, who can find the cause and decide what to do. Our list of [symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you judge.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Florence, Alabama?',
        a: `October, with a normal 3.47 inches at the Muscle Shoals airport in NOAA’s 1991–2020 normals. September is close at 3.55 inches. Every month averages more than three inches.`,
      },
      {
        q: 'How hot does it get in Florence, AL in the summer?',
        a: `NOAA’s normals for the Muscle Shoals airport put the average July high at 91.6°F and the August high at 91.2°F, with July lows around 71°F.`,
      },
      {
        q: 'Why are my eyes dry when it rains so much in the Shoals?',
        a: `Most dry-eye trouble here starts indoors. Air conditioning and winter heating both dry the air in a room, and long screen sessions cut down on blinking, whatever the rain gauge says outside.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-wausau-wi:
   * - NOAA RCC ACIS StnData, SID AUW (WAUSAU ASOS, elev 1201 ft), 1991-2020
   *   monthly normals, .daily-job/acis1120/AUW.json and
   *   .daily-job/d/AUW-mint.json: normal max Jan 22.8, Feb 27.4, Mar 39.6,
   *   Nov 40.4, Dec 27.9, Jul 80.3 F; normal min Jan 6.7, Feb 9.5, Dec 13.5,
   *   Jul 58.7 F; precip Jan 1.20, Feb 1.08, Jun 4.67 in (annual sum 33.91);
   *   snowfall Jan 14.8, Feb 12.7, Mar 8.3, Apr 6.5, Oct 0.9, Nov 6.5,
   *   Dec 14.4 in (annual sum 64.3).
   * - Not in relhum23.txt or wndspd23.txt: no humidity or wind figure.
   * - Wausau on the Wisconsin River: https://wausauwi.gov/about-wausau/history-of-wausau
   */
  {
    slug: 'dry-eye-relief-wausau-wi',
    title: 'Dry eye relief in Wausau, Wisconsin',
    description:
      'Wausau averages about 64 inches of snow and January highs near 23°F, so the heat runs for months. NOAA’s normals and practical dry eye relief for winter.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Dry eye relief in Wausau is mostly about surviving a long heating season. NOAA’s normals for the Wausau airport put January highs near 23°F and lows near 7°F, with about 64 inches of snow a year, so homes and offices run the heat from fall into spring. Humidify the bedroom, keep registers off your face, wear goggles or wraparound glasses in cold wind and snow glare, and use a lubricating drop as its label directs.`,
      },
      { h: 'Wausau’s winter, by the numbers' },
      {
        p: `NOAA’s 1991–2020 climate normals for the Wausau ASOS station, at about 1,200 feet, describe one of the longer cold seasons a Wisconsin city gets:`,
      },
      {
        list: [
          `Normal January high 22.8°F and low 6.7°F; February is barely warmer at 27.4°F and 9.5°F.`,
          `December’s normal high is 27.9°F, and November and March both top out near 40°F.`,
          `About 64 inches of snow a year, led by January (14.8 inches) and December (14.4), with 6.5 inches still falling in April.`,
          `February is the driest month by liquid precipitation, at 1.08 inches, and January brings 1.20.`,
          `July’s normal high is 80.3°F, and June is the wettest month at 4.67 inches.`,
        ],
      },
      {
        p: `With snow on the calendar from October into April, many households heat their homes for half the year.`,
      },
      { h: 'Why a Wausau house gets so dry inside' },
      {
        p: `Air at 7°F holds almost no water. Bring it inside and warm it to 68°F, and its relative humidity collapses, because warm air can hold far more moisture than cold air does. That dry air draws water from anything it touches, including the surface of your eyes between blinks. The fix isn’t complicated, but it takes all winter:`,
      },
      {
        list: [
          `Run a humidifier in the bedroom, and empty and clean it the way its maker says.`,
          `Lower the thermostat at night; the furnace runs less and dries less.`,
          `Rearrange so your bed, couch and desk aren’t in the path of a register or a space heater.`,
          `Watch for frost on the inside of windows. If it forms, the room is humid enough, so ease off the humidifier there.`,
        ],
      },
      {
        p: `[Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) covers settings and placement.`,
      },
      { h: 'Snow, sun and wind outside' },
      {
        p: `Fresh snow reflects sunlight back up at your face, and on a bright day after a storm you squint without noticing. Squinting usually means half blinks. Add a cold wind on an open field, a frozen lake or a ski hill, and the tear film dries faster still, often until your eyes water. Ski goggles or wraparound sunglasses block both the glare and the wind. A scarf or neck gaiter pulled up near your nose can also send your breath somewhere other than the inside of your glasses. Our guide to [protecting your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) has more ideas.`,
      },
      { h: 'Along the Wisconsin River in summer' },
      {
        p: `The Wisconsin River runs through the middle of Wausau, and summer pulls people onto it and the trails beside it. Normal highs around 80°F in July mean fewer AC hours than in southern cities, but paddling, fishing and biking still put wind and water glare in front of your eyes. Sunglasses with wide arms help, and so does a short break in the shade to blink fully. June is the wettest month, so summer here is rarely what dries your eyes.`,
      },
      { h: 'Shift work and long hours indoors' },
      {
        p: `Whether your shift is on a factory floor, in a warehouse, at a hospital or at a desk, eight hours in a heated building can be hard on the eyes, especially in front of a screen or a machine you have to watch closely. Close your eyes fully for a few seconds now and then, and look away from close work at regular intervals. Keep a bottle in your locker or bag at room temperature rather than in a car that sits at 10°F through an eight-hour shift.`,
      },
      { h: 'Quell’s label, in its own words' },
      {
        p: `Quell is a lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The panel lists {actives} as active ingredients, and its Uses line reads: {uses}.`,
      },
      {
        p: `Directions: {directions}. When using: {tip}. Storage: {storage}. That range rules out a winter glovebox, so carry the bottle in an inside pocket on cold days. The label also warns: {warnings}. The [Drug Facts page](/drug-facts) shows everything on the carton.`,
      },
      { h: 'Getting Quell in Wausau' },
      {
        p: `We ship from Brentwood, Tennessee, to Wausau, Schofield, Weston, Rothschild and anywhere else in the US. Checkout is as a guest for buyers 18 and older. Shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking comes by email; no delivery date is promised, and winter weather can slow packages, so reorder with time to spare. Unopened bottles can be refunded within {returnDays} days of delivery without returning them. See the [Wausau page](/eye-drops/wausau-wi) and the [Wisconsin page](/eye-drops/state/wisconsin).`,
      },
      { h: 'Seeing an eye doctor' },
      {
        p: `Dry winter air is a common cause of gritty eyes, but it isn’t the only one. The label says: {stopUse} If you have pain, blurry vision that doesn’t clear, or dryness that stays after spring arrives, see an eye doctor. They can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help.`,
      },
    ],
    faq: [
      {
        q: 'How much snow does Wausau get a year?',
        a: `About 64 inches in NOAA’s 1991–2020 normals for the Wausau ASOS station. January (14.8 inches) and December (14.4) get the most, and April still averages 6.5 inches.`,
      },
      {
        q: 'How cold is Wausau in January?',
        a: `NOAA’s normals put the average January high at 22.8°F and the average low at 6.7°F at the Wausau ASOS station. February is only slightly warmer.`,
      },
      {
        q: 'Why do my eyes burn in my house in Wausau in winter?',
        a: `Heating very cold outdoor air drops its relative humidity, and that dry air draws moisture off the eye. A bedroom humidifier, a lower night thermostat and keeping registers off your face all help. Burning that lasts or comes with pain is a reason to see an eye doctor.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-stillwater-ok:
   * - NOAA RCC ACIS StnData, SID SWO (STILLWATER REGIONAL AP, elev 961 ft),
   *   1991-2020 monthly normals, .daily-job/acis1120/SWO.json and
   *   .daily-job/d/SWO-mint.json: normal max Jan 50.7, Jun 89.6, Jul 95.4,
   *   Aug 95.0, Sep 86.7, Dec 52.3 F; normal min Jan 26.7, Jul 72.1 F;
   *   precip Jan 0.92, Feb 1.33, Mar 2.22, Apr 3.72, May 4.58, Jun 4.49,
   *   Jul 3.12, Aug 3.28, Sep 3.11, Oct 2.94, Nov 1.95, Dec 1.51 in
   *   (annual sum 33.17). Snowfall missing (M).
   * - Not in relhum23.txt or wndspd23.txt: no humidity or wind figure.
   * - Oklahoma State University's main campus is in Stillwater:
   *   https://catalog.okstate.edu/about/
   */
  {
    slug: 'dry-eye-relief-stillwater-ok',
    title: 'Dry eye relief in Stillwater, Oklahoma',
    description:
      'Stillwater’s July highs average 95°F and its January brings under an inch of rain. NOAA’s numbers and dry eye tips for campus, game days and the AC.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Stillwater dries the eyes from both ends of the year. NOAA’s normals for Stillwater Regional Airport show July and August highs around 95°F, which means months of air conditioning, and a January with just 0.92 inches of precipitation, when the heat runs in dry air. Keep vents off your face, wear sunglasses in open wind, take real screen breaks, and use a lubricating drop exactly as its label directs.`,
      },
      { h: 'Stillwater’s climate in NOAA’s records' },
      {
        p: `The 1991–2020 normals for Stillwater Regional Airport, about 961 feet above sea level on the north side of town, add up to roughly 33 inches of precipitation a year, and they lean hard toward spring and early summer:`,
      },
      {
        list: [
          `May (4.58 inches) and June (4.49) are the wettest months.`,
          `January is the driest at 0.92 inches, then December at 1.51 and February at 1.33.`,
          `July’s normal high is 95.4°F and August’s is 95.0°F; June and September both reach the upper 80s.`,
          `January’s normal high is 50.7°F, with lows near 26.7°F.`,
        ],
      },
      {
        p: `Winter here is short on moisture, and summer is long on heat. Each one dries the eyes in its own way.`,
      },
      { h: 'Summer heat and the AC' },
      {
        p: `When highs sit in the mid-90s for two months, people live indoors in cooled air, and air conditioning pulls moisture out of a room as it cools it. A car with the vents on high can be the driest spot of the day. Try these:`,
      },
      {
        list: [
          `Aim car vents at your chest or the floor rather than your face.`,
          `In an apartment or office, find the supply register and keep your face out of its stream.`,
          `Turn bedroom fans to low, or point them toward your feet.`,
          `Step outside or look out a window for a minute when you’ve been reading under a vent for an hour.`,
        ],
      },
      { h: 'Campus life and screen-heavy semesters' },
      {
        p: `Oklahoma State University’s main campus is in Stillwater, so a big share of the town is reading, writing and gaming on screens. People blink less while staring at a screen, and the blinks they do make are often partial, so the tear film breaks up before it gets refreshed. That gets worse in a heated library during December finals or an air-conditioned lab in August. Look across the room every so often, close your eyes fully a few times, and keep the screen a little below eye level so your lids cover more of the eye. [Dry eyes while studying for exams](/guides/dry-eyes-while-studying) has a full routine for long study days.`,
      },
      { h: 'Game days, wind and open sky' },
      {
        p: `Fall Saturdays mean hours outside in bleachers and on parking lots, often with a stiff wind across open ground and sun low in the sky. The tear film evaporates faster in moving air, and squinting into glare shortens your blinks. Sunglasses with wide arms do double duty as a windbreak. A cap shades your eyes from above. If you carry a bottle of drops in a bag, keep it out of a car parked in the sun, since a September afternoon in the upper 80s can push a parked car well past what the label allows.`,
      },
      { h: 'The dry winter months' },
      {
        p: `From December through February, Stillwater gets less than four inches of precipitation combined in NOAA’s normals, and the heat runs most nights. Cold air warmed indoors becomes very dry air. A bedroom humidifier, a slightly lower thermostat and a chair moved away from the register all help. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) goes into more detail.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its active ingredients are {actives}. These are the panel’s lines, word for word:`,
      },
      {
        list: [
          `Uses: {uses}.`,
          `Directions: {directions}.`,
          `When using: {tip}.`,
          `Do not use: {doNotUse}.`,
          `Storage: {storage}.`,
        ],
      },
      {
        p: `The warnings section reads: {warnings}. Our [Drug Facts page](/drug-facts) has the full panel.`,
      },
      { h: 'Ordering Quell to Stillwater' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Stillwater homes, apartments and campus mailing addresses, and to anywhere else in the US. Checkout is as a guest, and buyers need to be 18 or older. Shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking comes by email; no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery, with nothing to mail back. See the [Stillwater page](/eye-drops/stillwater-ok) and the [Oklahoma page](/eye-drops/state/oklahoma).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A drop helps with ordinary dryness. It isn’t meant to cover up something more. The label puts it this way: {stopUse} Pain, changes in vision, or dryness that keeps returning through both summer and winter are reasons to book an exam, where an eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) is a good place to check first.`,
      },
    ],
    faq: [
      {
        q: 'How hot does Stillwater, Oklahoma get in summer?',
        a: `NOAA’s 1991–2020 normals for Stillwater Regional Airport put the average July high at 95.4°F and the August high at 95.0°F. Lows in July average about 72°F.`,
      },
      {
        q: 'What is the driest month in Stillwater, OK?',
        a: `January, with a normal 0.92 inches of precipitation at Stillwater Regional Airport. December (1.51 inches) and February (1.33) are also among the driest.`,
      },
      {
        q: 'Why do my eyes get dry in my dorm room at OSU?',
        a: `Dorms run air conditioning in the hot months and heat in the cold ones, and both dry the air. Long screen sessions also slow your blinking. Keeping vents off your face and taking regular screen breaks both help.`,
      },
      {
        q: 'Can I ship Quell to a campus address in Stillwater?',
        a: `Yes. Enter the campus mailing address at checkout, including any box or room number your school uses. Orders ship from Brentwood, Tennessee, and buyers must be 18 or older.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-el-centro-ca:
   * - NOAA RCC ACIS StnData, SID IPL (IMPERIAL COUNTY AP, elev -55 ft),
   *   1991-2020 monthly normals, .daily-job/acis1120/IPL.json and
   *   .daily-job/d/IPL-mint.json: normal max Jan 70.5, Feb 73.7, Mar 80.1,
   *   Apr 86.3, May 94.3, Jun 103.5, Jul 107.8, Aug 107.7, Sep 102.2,
   *   Oct 90.4, Nov 78.3, Dec 68.7 F; normal min Jan 41.5, Jul 78.4,
   *   Aug 79.4, Dec 41.2 F; precip Jan 0.41, Feb 0.38, Mar 0.29, Apr 0.08,
   *   May 0.07, Jun 0.00, Jul 0.11, Aug 0.15, Sep 0.18, Oct 0.19, Nov 0.18,
   *   Dec 0.34 in (annual sum 2.38). Snowfall missing (M).
   * - Not in relhum23.txt or wndspd23.txt: no humidity or wind figure.
   * - Airport is county-owned, in Imperial, CA: https://airport.imperialcounty.org/
   */
  {
    slug: 'dry-eye-relief-el-centro-ca',
    title: 'Dry eye relief in El Centro, California',
    description:
      'El Centro’s weather station sits below sea level and records about 2.4 inches of rain a year. NOAA’s normals and what helps dry eyes in desert heat.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Rain barely reaches El Centro. NOAA’s normals for Imperial County Airport, just north of the city and about 55 feet below sea level, total only about 2.4 inches of rain a year, with July and August highs near 108°F. Dry eye relief here means managing desert air and constant cooling: shade your eyes outdoors, keep cooler and AC vents off your face, blink fully at screens, and use a lubricating drop as its label directs.`,
      },
      { h: 'Weather below sea level' },
      {
        p: `The NOAA station that stands in for El Centro is at the county-owned airport in Imperial, a few miles north. ACIS lists its elevation at about 55 feet below sea level, which is unusual for an official weather station anywhere in the country. Its 1991–2020 normals read like this:`,
      },
      {
        list: [
          `About 2.38 inches of precipitation in a normal year.`,
          `January is the wettest month at 0.41 inches; February brings 0.38 and December 0.34.`,
          `June’s normal is 0.00 inches, and April and May each average less than a tenth of an inch.`,
          `Normal highs reach 107.8°F in July and 107.7°F in August, and stay above 100°F from June through September.`,
          `Even the August low averages 79.4°F, so nights stay warm.`,
          `Winter is mild: a January high of 70.5°F and a low of 41.5°F.`,
        ],
      },
      { h: 'Why desert air pulls moisture from the eyes' },
      {
        p: `The tear film is mostly water, held in place by a thin oil layer on top and a mucus layer underneath. Water leaves faster when the surrounding air is dry and moving. With almost no rain for months at a time and highs over 100°F, the air in the Imperial Valley is hungry for water, and the surface of the eye is one of the places it finds it. Wind across open fields adds to the drying, and fine dust can make eyes feel scratchy.`,
      },
      { h: 'Summer: four months over 100 degrees' },
      {
        p: `From June through September, daily life runs on cooling. Some homes use evaporative coolers and many use refrigerated air conditioning, and vehicles blast air for every short trip. Whatever the system, it’s the air stream on your face that does the drying:`,
      },
      {
        list: [
          `Turn car vents toward your chest or the floor. The face vents are aimed right where your eyes are.`,
          `Sit where a ceiling register or cooler outlet isn’t blowing straight down on you.`,
          `If you work outdoors in the early morning to beat the heat, wear wraparound sunglasses or clear safety glasses against dust and wind.`,
          `Take a few slow, full blinks when you step inside from the glare. Squinting all morning tends to mean partial blinks.`,
        ],
      },
      { h: 'Field work, dust and glare' },
      {
        p: `Farm fields stretch around El Centro, and a lot of the valley’s work happens outside or in trucks crossing open country. Dust kicked up by equipment, wind across flat ground and sun bouncing off pale soil all reach the eyes. Sealed or wraparound eyewear keeps dust out better than ordinary glasses. If something gets in your eye, don’t rub it; rinse with clean water and see a clinician if it still feels like something is there.`,
      },
      { h: 'Winter is the comfortable season' },
      {
        p: `December and January highs near 70°F make for pleasant outdoor months, and the valley’s little rain falls mostly then. Even so, the air stays dry, and cool nights in the low 40s mean some homes switch on the heat for a while. Most people find that easier on the eyes than summer, but long screen sessions, heaters aimed at the face and windy afternoons can still bring on dryness.`,
      },
      { h: 'Keeping eye drops cool in Imperial County' },
      {
        p: `Heat is a real issue for anything you carry. Quell’s label gives its storage range as: {storage}. A car in an El Centro parking lot in July can get far hotter than that inside, and so can a truck cab or a toolbox in the sun. Keep the bottle in a bag that comes indoors with you, or in a lunch cooler with an ice pack wrapped in a towel so the bottle doesn’t freeze or sit against ice. Our guide on [how to store eye drops](/guides/how-to-store-eye-drops) has more.`,
      },
      { h: 'What the label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its active ingredients are {actives}. The Uses section reads: {uses}. The directions say: {directions}. While using it: {tip}.`,
      },
      {
        p: `The warnings read: {warnings}. And if the bottle has sat somewhere hot, this line is worth checking before you use it: {doNotUse}. For reference: {milky}. All of it is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering to El Centro' },
      {
        p: `Quell ships from Brentwood, Tennessee, to El Centro, Imperial, Brawley, Calexico, Holtville and every other US address. Checkout is as a guest for buyers 18 and older, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking arrives by email, and no delivery date is promised. In summer, bring the package inside soon after it arrives. Unopened bottles can be refunded within {returnDays} days of delivery with nothing to send back. See the [El Centro page](/eye-drops/el-centro-ca) and the [California page](/eye-drops/state/california).`,
      },
      { h: 'When to get your eyes checked' },
      {
        p: `Desert air explains a lot of dryness, but not all of it. The label says: {stopUse} Ongoing discomfort, pain or blurred vision deserve an eye exam. An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you decide.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does El Centro get a year?',
        a: `About 2.38 inches in NOAA’s 1991–2020 normals for Imperial County Airport, the station just north of El Centro. January is the wettest month at 0.41 inches, and June averages none.`,
      },
      {
        q: 'Is El Centro below sea level?',
        a: `The NOAA weather station that serves El Centro, at Imperial County Airport, is listed at about 55 feet below sea level in NOAA’s ACIS records. That is the elevation of the station, not of every street in the city.`,
      },
      {
        q: 'How hot is El Centro in July?',
        a: `NOAA’s normals put the average July high at 107.8°F at Imperial County Airport, with an average low of 78.4°F. August is nearly identical.`,
      },
      {
        q: 'Can I leave eye drops in my car in El Centro?',
        a: `Not in summer. Quell’s label gives a storage range ({storage}), and a parked car in the Imperial Valley heat can get much hotter inside. Carry the bottle with you instead.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-quincy-il:
   * - NOAA RCC ACIS StnData, SID UIN (QUINCY REGIONAL AIRPORT, elev 760 ft),
   *   1991-2020 monthly normals, .daily-job/acis1120/UIN.json and
   *   .daily-job/d/UIN-mint.json: normal max Jan 34.6, Feb 39.7, Jul 86.0,
   *   Aug 84.5, Dec 39.3 F; normal min Jan 18.6, Feb 22.7, Dec 23.9,
   *   Jul 66.5 F; precip Jan 1.57, Feb 1.77, Mar 2.29, Apr 3.98, May 4.55,
   *   Jun 4.50, Jul 3.49, Aug 3.93, Sep 3.09, Oct 3.05, Nov 2.41, Dec 1.80 in
   *   (annual sum 36.43). Snowfall missing (M).
   * - Not in relhum23.txt or wndspd23.txt: no humidity or wind figure.
   * - Quincy on the Mississippi; city barge dock stays open in winter:
   *   https://www.quincyil.gov/Government/City-Departments/Engineering/Barge-Dock
   */
  {
    slug: 'dry-eye-relief-quincy-il',
    title: 'Dry eye relief in Quincy, Illinois',
    description:
      'Quincy’s January nights average about 19°F and its winter months are its driest. NOAA’s normals for the airport and tips for dry eyes on the Mississippi.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Quincy’s hardest stretch for dry eyes runs from December through February. NOAA’s normals for Quincy Regional Airport show January lows near 19°F and less than two inches of precipitation in each of those months, so the heat runs constantly in dry air. Humidify where you sleep, keep heat registers away from your face, wear glasses against river wind, and use a lubricating drop exactly as its label says.`,
      },
      { h: 'What NOAA’s normals show for Quincy' },
      {
        p: `NOAA’s 1991–2020 climate normals for Quincy Regional Airport, about 760 feet above sea level and east of the city, total roughly 36.4 inches of precipitation a year:`,
      },
      {
        list: [
          `January is the driest month at 1.57 inches, February brings 1.77 and December 1.80.`,
          `May (4.55 inches) and June (4.50) are the wettest.`,
          `January’s normal high is 34.6°F and its low 18.6°F.`,
          `July peaks at a normal high of 86.0°F, with lows around 66.5°F.`,
        ],
      },
      {
        p: `Three cold, lean months back to back is the pattern to plan around.`,
      },
      { h: 'Inside a heated Quincy home' },
      {
        p: `When it’s 19°F outside and 68°F inside, the furnace has done a lot of warming and no moistening. The air that results is dry enough to pull water from wood floors, houseplants and the surface of your eyes. In an older house with drafty windows, the heat runs even more. Practical steps:`,
      },
      {
        list: [
          `Put a humidifier in the bedroom, since you spend the longest single stretch of time there.`,
          `Keep beds, recliners and desks away from registers and baseboard heaters.`,
          `Drop the thermostat at night, and use an extra blanket instead.`,
          `Use the defrost setting to keep the windshield clear, and keep the dash vents off your face.`,
        ],
      },
      {
        p: `[Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more detail on getting through a heated season.`,
      },
      { h: 'Wind off the Mississippi' },
      {
        p: `Quincy sits high above the Mississippi River, and the river shapes daily life here: walks along the riverfront, fishing and boating, and barge traffic that the city’s own dock serves even in winter. Open water lets wind travel a long way before it reaches you, and wind speeds evaporation from the eye. On a cold, blustery day the tear film can dry so fast that your eyes start to water, which is the eye’s reflex to dryness, not a sign that it’s wet enough. Wraparound sunglasses or safety glasses make a good windbreak, and a hat brim cuts glare off the water.`,
      },
      { h: 'Fields, harvest and work outdoors' },
      {
        p: `Much of the land around Quincy is farmed, and fall harvest puts people in cabs, on equipment and outside in dry, dusty air for long days. Dust and chaff can irritate the eyes, and staring at a row or a monitor in the cab lowers your blink rate. Close-fitting eyewear helps keep debris out. Take short breaks to close your eyes for a few seconds, and point the cab’s vents away from your face. [Dry eyes for farmers](/guides/dry-eyes-for-farmers) covers this work in more depth.`,
      },
      { h: 'Summer: AC and long screen days' },
      {
        p: `July highs in the mid-80s are moderate by Midwest standards, but offices, stores and cars still run air conditioning, and AC dries indoor air as it cools. Meanwhile, work and phones keep eyes on screens, where blinking slows. Every so often, look up at something far away and blink fully a few times.`,
      },
      { h: 'Quell’s label, word for word' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists {actives} as the active ingredients and gives these instructions and cautions:`,
      },
      {
        list: [
          `Uses: {uses}.`,
          `Directions: {directions}.`,
          `When using: {tip}.`,
          `Warnings: {warnings}.`,
          `Storage: {storage}.`,
        ],
      },
      {
        p: `A Quincy winter can leave a parked car well below the bottom of that storage range, so carry the bottle in a coat pocket rather than leaving it in the console. The whole panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Quincy' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Quincy and the surrounding towns on both sides of the river, and to every other US address. Check out as a guest; buyers need to be 18 or older. Shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking arrives by email. There’s no promised delivery date, and winter storms can slow any package, so order before you run out. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. See the [Quincy page](/eye-drops/quincy-il) and the [Illinois page](/eye-drops/state/illinois).`,
      },
      { h: 'When it’s more than dry air' },
      {
        p: `If dryness hangs on after the heat goes off in spring, or comes with pain or blurred vision, it’s time to see an eye doctor. The label says: {stopUse} An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you sort out what’s urgent.`,
      },
    ],
    faq: [
      {
        q: 'What is the coldest month in Quincy, Illinois?',
        a: `January. NOAA’s 1991–2020 normals for Quincy Regional Airport put its average high at 34.6°F and its average low at 18.6°F.`,
      },
      {
        q: 'What is the driest month in Quincy, IL?',
        a: `January, with a normal 1.57 inches of precipitation at Quincy Regional Airport. February (1.77 inches) and December (1.80) are close behind.`,
      },
      {
        q: 'Why do my eyes water in the wind by the Mississippi River?',
        a: `Wind across open water speeds evaporation from the tear film, and the eye often responds to that dryness by watering. Wraparound sunglasses that block the wind usually help more than wiping your eyes.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-kingman-az:
   * - NOAA RCC ACIS StnData, SID IGM (KINGMAN AIRPORT, elev 3423 ft),
   *   1991-2020 monthly normals, .daily-job/acis1120/IGM.json and
   *   .daily-job/d/IGM-mint.json: normal max Jan 57.4, Feb 60.6, Mar 67.4,
   *   Apr 74.8, May 84.9, Jun 95.1, Jul 98.7, Aug 97.2, Sep 90.9, Oct 78.9,
   *   Nov 66.1, Dec 55.7 F; normal min Jan 30.9, Jun 62.3, Jul 70.0,
   *   Dec 30.2 F; precip Jan 0.98, Feb 1.04, Mar 0.59, Apr 0.46, May 0.08,
   *   Jun 0.11, Jul 0.86, Aug 0.88, Sep 0.96, Oct 0.74, Nov 0.62,
   *   Dec 0.68 in (annual sum 8.00). Snowfall missing (M).
   * - Not in relhum23.txt or wndspd23.txt: no humidity or wind figure.
   * - Kingman on historic Route 66, centennial in 2026:
   *   https://www.blm.gov/blog/2026-05-20/celebrating-100-years-mother-road-us-route-66-northwestern-arizona
   *   https://www.nps.gov/places/kingman-commercial-historic-district.htm
   */
  {
    slug: 'dry-eye-relief-kingman-az',
    title: 'Dry eye relief in Kingman, Arizona',
    description:
      'Kingman sits near 3,400 feet with about 8 inches of rain a year and a bone-dry May and June. NOAA’s normals and dry eye tips for high desert living.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Kingman’s high desert air is dry nearly all year. NOAA’s normals for Kingman Airport, at about 3,400 feet, total only 8 inches of precipitation, with May and June averaging about a tenth of an inch combined and July highs near 99°F. For dry eye relief, wear wraparound sunglasses against sun and wind, keep vents off your face, blink fully during screen time, and use a lubricating drop as its label directs.`,
      },
      { h: 'Kingman’s climate, from NOAA' },
      {
        p: `NOAA’s 1991–2020 climate normals for Kingman Airport, about 3,423 feet above sea level, sketch a high desert with hot summers, cool winter nights and very little rain:`,
      },
      {
        list: [
          `About 8.00 inches of precipitation in a normal year.`,
          `May is the driest month at 0.08 inches, June brings 0.11 and April 0.46.`,
          `February (1.04 inches) and January (0.98) are the wettest, with a smaller bump in July through September (0.86 to 0.96).`,
          `Normal highs reach 98.7°F in July and drop to 55.7°F in December.`,
          `Normal lows fall to about 30°F in December and January.`,
        ],
      },
      { h: 'Why altitude and desert air both matter' },
      {
        p: `Two things in Kingman work on the tear film at once. The desert air holds little water, so the watery layer of the tear film evaporates faster between blinks. And at about 3,400 feet the sun is strong year round, which keeps people squinting outdoors, and squinting tends to cut blinks short. Wind across open country adds to both. [Dry air, wind and altitude](/guides/dry-air-wind-and-altitude) explains how these factors combine.`,
      },
      { h: 'Spring and early summer: the driest weeks' },
      {
        p: `April through June is the leanest stretch on NOAA’s chart, with barely more than half an inch of precipitation across all three months. Highs climb from the mid-70s to the mid-90s. That’s the time to be most deliberate:`,
      },
      {
        list: [
          `Wear wraparound sunglasses whenever you’re outside for long, including on a short hike or a drive with the windows down.`,
          `Keep a hat with a brim in the truck for errands in full sun.`,
          `Set the car’s vents to the floor or your chest. A face vent at full blast on a 95-degree afternoon dries the eyes fast.`,
          `When you come in from the sun, close your eyes for a few seconds and blink slowly a few times.`,
        ],
      },
      { h: 'Big swings between day and night' },
      {
        p: `In the high desert, the gap between afternoon and early morning is wide. In December and January, a normal day runs from about 30°F at dawn to the mid-50s by afternoon. That means many homes run the heat at night and the swamp cooler or AC in the afternoon during the shoulder seasons. Either way, indoor air ends up dry. A humidifier in the bedroom helps in winter, and moving your chair out of the path of the cooler or register helps in every season.`,
      },
      { h: 'Route 66 and long drives' },
      {
        p: `Kingman is a well-known stop on historic Route 66, which marked its 100th year in 2026, and plenty of residents drive long distances for work, shopping and family. Hours at the wheel mean staring ahead, blinking less, and sitting in the vents’ airflow. Stop every couple of hours, look at something far off, and rest your eyes for a minute. Keep your eye drops in the cab with you, not in a sun-baked glove box, and check the storage range below.`,
      },
      { h: 'Quell’s Drug Facts, quoted' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The panel lists {actives} as active ingredients and {inactives} as inactive ones. The Uses section reads: {uses}.`,
      },
      {
        list: [
          `Directions: {directions}.`,
          `When using: {tip}.`,
          `Warnings: {warnings}.`,
          `Storage: {storage}.`,
          `Do not use: {doNotUse}.`,
        ],
      },
      {
        p: `A parked car in a Kingman summer heats up well past that storage range, so bring the bottle inside with you. Our [Drug Facts page](/drug-facts) has the whole label.`,
      },
      { h: 'Ordering Quell to Kingman' },
      {
        p: `We ship from Brentwood, Tennessee, to Kingman, Golden Valley, Butler and every other US address. Checkout is as a guest for buyers 18 and older, shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking arrives by email, but no delivery date is promised. On hot days, bring a package in from the porch or mailbox soon after it arrives. Unopened bottles can be refunded within {returnDays} days of delivery, no return needed. The [Kingman page](/eye-drops/kingman-az) and the [Arizona page](/eye-drops/state/arizona) have more.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Desert dryness is common, but a drop isn’t a stand-in for an exam. The label says: {stopUse} If your eyes hurt, your vision changes, or the dryness keeps coming back no matter what you change, an eye doctor can find the cause and decide what to do. See our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Kingman, Arizona get?',
        a: `About 8 inches a year, according to NOAA’s 1991–2020 normals for Kingman Airport. February is the wettest month at 1.04 inches, and May is the driest at 0.08.`,
      },
      {
        q: 'What is the elevation of Kingman, AZ?',
        a: `NOAA’s ACIS records list the Kingman Airport weather station at about 3,423 feet above sea level. Elevation varies across the city and the surrounding hills.`,
      },
      {
        q: 'Why are my eyes so dry in Kingman?',
        a: `High desert air holds little moisture, strong sun keeps you squinting, and spring wind speeds evaporation from the tear film. Wraparound sunglasses, keeping vents off your face, and full blinks during screen time all help.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-poughkeepsie-ny:
   * - NOAA RCC ACIS StnData, SID POU (POUGHKEEPSIE/HUDSON VALLEY REGIONAL
   *   AIRPORT, elev 153 ft), 1991-2020 monthly normals,
   *   .daily-job/acis1120/POU.json and .daily-job/d/POU-mint.json: normal max
   *   Jan 36.0, Feb 38.9, Mar 47.9, Jul 84.8, Aug 82.8, Dec 40.5 F; normal
   *   min Jan 18.2, Feb 19.5, Mar 27.4, Dec 23.8, Jul 62.3 F; precip Jan 2.82,
   *   Feb 2.21, Mar 3.09, Apr 3.62, May 3.47, Jun 3.91, Jul 3.78, Aug 4.28,
   *   Sep 4.33, Oct 3.73, Nov 3.27, Dec 3.39 in (annual sum 41.90).
   *   Snowfall missing (M).
   * - Not in relhum23.txt or wndspd23.txt: no humidity or wind figure.
   * - Poughkeepsie on the Hudson River:
   *   https://dos.ny.gov/town-poughkeepsie-appendix-c-study-feasibility-providing-access-hudson-river-waterfront
   */
  {
    slug: 'dry-eye-relief-poughkeepsie-ny',
    title: 'Dry eye relief in Poughkeepsie, New York',
    description:
      'Poughkeepsie’s January and February nights average below 20°F, so the heat runs for months. NOAA’s normals and dry eye tips for the Hudson Valley.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `In Poughkeepsie, dry eyes usually trace back to indoor heat. NOAA’s normals for Hudson Valley Regional Airport put January and February lows near 18 to 20°F, and February is also the driest month, so homes, trains and offices run warm, dry air for much of the winter. Keep heat away from your face, add moisture where you sleep, take screen breaks, and use a lubricating drop exactly as its label says.`,
      },
      { h: 'The Hudson Valley’s weather, from NOAA' },
      {
        p: `NOAA’s 1991–2020 climate normals for Poughkeepsie/Hudson Valley Regional Airport, about 153 feet above sea level south of the city, total about 41.9 inches of precipitation a year, spread fairly evenly:`,
      },
      {
        list: [
          `February is the driest month at 2.21 inches; January brings 2.82.`,
          `September (4.33 inches) and August (4.28) are the wettest.`,
          `January’s normal high is 36.0°F and its low 18.2°F; February’s low is 19.5°F.`,
          `March nights still average about 27°F, so heating season runs long.`,
          `July peaks at a normal high of 84.8°F.`,
        ],
      },
      {
        p: `Outdoors, rain and snow come in every month. Indoors, from about November through March, the furnace or boiler sets the humidity, and it sets it low.`,
      },
      { h: 'Radiators, furnaces and dry rooms' },
      {
        p: `Heating air from below 20°F to a comfortable room temperature drops its relative humidity steeply. Whether your building has forced air, baseboard heat or old radiators, the result is the same dry room, and dry air pulls water off the eye between blinks. Apartments can be the worst, since you often can’t turn the heat down. What helps:`,
      },
      {
        list: [
          `A humidifier in the bedroom, cleaned regularly as its maker directs.`,
          `A bowl of water or a damp towel near a radiator if you can’t run a humidifier, which adds a little moisture.`,
          `Moving your bed and desk out of the path of hot air.`,
          `Cracking a window briefly if an overheated apartment won’t cool off, rather than sitting in the heat.`,
        ],
      },
      {
        p: `Our guide to [dry eyes from radiator heat](/guides/dry-eyes-from-radiator-heat) covers older buildings in detail.`,
      },
      { h: 'Commuting up and down the valley' },
      {
        p: `A lot of Poughkeepsie’s day happens in transit, whether by train or car. Train cars and buses are heated hard in winter and cooled hard in summer, and reading or scrolling for an hour slows your blinking. Look out the window at the river now and then, which gives your eyes a long-distance break. In the car, keep the vents off your face and use the defroster for the windshield instead.`,
      },
      { h: 'Wind on the Hudson' },
      {
        p: `The Hudson River is wide here, and wind travels a long way across open water before it reaches the waterfront. On a cold, breezy day, walking by the river can make your eyes sting and then water, which is the eye reacting to fast evaporation. Wraparound sunglasses or a hat with a brim help block wind and glare, and in winter, a scarf pulled up keeps your breath from fogging your glasses.`,
      },
      { h: 'Fall color, students and screen time' },
      {
        p: `Autumn in the Hudson Valley brings people outside for hikes and drives, and that’s usually easier on the eyes than winter. Indoors is another story. Students, office workers and anyone working from home spend long hours on screens, where people blink less and often only partway. Look across the room every so often and close your eyes fully a few times. [Screens and your tear film](/guides/screens-and-your-tear-film) explains the mechanics.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its active ingredients are {actives}. The Uses section reads: {uses}. The directions say: {directions}.`,
      },
      {
        p: `While using it, the label adds: {tip}. Its storage line reads: {storage}. In a Hudson Valley winter, that rules out a parked car, so keep the bottle in a bag or coat pocket. The warnings say: {warnings}. The full label is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Poughkeepsie' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Poughkeepsie, Hyde Park, Wappingers Falls and every other US address. There’s no account to make; buyers just need to be 18 or older. Shipping is {shipping}, and {freeBottles} or more bottles ship free. You’ll get tracking by email, but no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. See the [Poughkeepsie page](/eye-drops/poughkeepsie-ny) and the [New York page](/eye-drops/state/new-york).`,
      },
      { h: 'Knowing when to see an eye doctor' },
      {
        p: `Dryness that disappears when spring arrives was probably the heat. Dryness that doesn’t, or that comes with pain or a change in vision, deserves a look. The label says: {stopUse} An eye doctor can find the cause and decide what to do. Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists what to watch for.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Poughkeepsie get in winter?',
        a: `NOAA’s 1991–2020 normals for Hudson Valley Regional Airport put the average January low at 18.2°F and the February low at 19.5°F. January’s average high is 36.0°F.`,
      },
      {
        q: 'What is the driest month in Poughkeepsie, NY?',
        a: `February, with a normal 2.21 inches of precipitation at Hudson Valley Regional Airport. Precipitation is fairly even the rest of the year, peaking at 4.33 inches in September.`,
      },
      {
        q: 'Why are my eyes dry in my Poughkeepsie apartment in winter?',
        a: `Heating very cold outdoor air drops its humidity, and many apartments run the heat high with no way to turn it down. A bedroom humidifier and keeping your face away from radiators and vents both help.`,
      },
    ],
  },
  /*
   * Non-local, seasonal. Seeds run 2026-11-20: "christmas gifts for best
   * friend" (dropped: the phrase contains "best", which guides.test.ts bans),
   * "gifts for birdwatchers" (christmas gifts for birdwatchers, gifts for
   * beginning birders, gifts for backyard birdwatchers, gifts for avid birders).
   * Nearest existing: dry-eyes-when-birdwatching (using), christmas-gifts-for-a-hiker.
   */
  {
    slug: 'christmas-gifts-for-a-birdwatcher',
    title: 'Christmas gifts for a birdwatcher',
    description:
      'Christmas gift ideas for birdwatchers, from backyard feeder fans to dawn-patrol birders, including a small kit for the cold, windy mornings that tire the eyes.',
    category: 'seasonal',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Good Christmas gifts for a birdwatcher make the hobby easier or more comfortable: a binocular harness, a waterproof field notebook, a feeder or heated birdbath for the yard, hand warmers and a neck gaiter for cold dawns, and a lens cleaning kit. Birders also spend long, windy mornings staring through optics, so a small eye comfort kit with wraparound glasses and a bottle of lubricating eye drops fits right in.`,
      },
      { h: 'Gifts for backyard birdwatchers' },
      {
        p: `Plenty of birders never leave home to do it. They watch from the kitchen window and know every cardinal by its habits. For them, the yard is the gift:`,
      },
      {
        list: [
          `A heated birdbath, which gives birds open water when everything else is frozen.`,
          `A squirrel-resistant feeder, or a suet cage for winter woodpeckers.`,
          `A window feeder that brings birds close enough to watch without binoculars.`,
          `A regional field guide or a laminated quick-reference card for the window ledge.`,
          `A comfortable chair cushion for the spot where they sit and watch.`,
        ],
      },
      {
        p: `Backyard watching often happens through glass from a heated room, which keeps the observer warm but dry. Furnace heat lowers indoor humidity, and staring at a feeder for a long time slows blinking, much like a screen does. A small humidifier near their favorite chair is a quietly useful extra.`,
      },
      { h: 'Gifts for beginning birders' },
      {
        p: `New birders are still figuring out what they need, and a few basics make the first winter much more fun:`,
      },
      {
        list: [
          `A beginner-friendly field guide for their region.`,
          `A small, waterproof notebook and a pencil that writes in the cold.`,
          `A binocular harness that takes the weight off the neck.`,
          `A lens cleaning kit with a soft brush and microfiber cloth.`,
          `A membership in a local bird club or nature center, which often includes guided walks.`,
        ],
      },
      { h: 'Gifts for avid birders who head out at dawn' },
      {
        p: `Serious birders are out before sunrise, often in cold, wind and wet grass, and they stay out for hours. Comfort gear is welcome because they wear it out:`,
      },
      {
        list: [
          `Hand warmers, and thin gloves they can work binocular focus wheels in.`,
          `A neck gaiter and a wool hat with a brim.`,
          `Waterproof boots or warm boot liners.`,
          `A thermos that actually keeps coffee hot through a long morning.`,
          `A lightweight folding stool for hawk watches and long waits.`,
        ],
      },
      { h: 'An eye comfort kit for birders' },
      {
        p: `A birding morning is hard on the eyes. You hold binoculars or a scope steady and try not to blink while a bird is in view. You stand at a shoreline or ridge where the wind blows straight into your face. In winter, the air at dawn is cold and very dry. Each of those speeds evaporation from the tear film. A kit that answers those mornings could include:`,
      },
      {
        list: [
          `Clear wraparound glasses that block wind without darkening the low early light.`,
          `A microfiber cloth for glasses and binocular lenses.`,
          `A bottle of Quell, a preservative-free lubricating eye drop, sized at {size} so it fits in a jacket pocket.`,
          `A note suggesting they rest their eyes between birds.`,
        ],
      },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives its Uses as: {uses}. One thing to know before you give it: the warnings read {warnings}. That’s worth mentioning on the card, since a birder can be as fond of eggs at breakfast as anyone. [Dry eyes when birdwatching](/guides/dry-eyes-when-birdwatching) covers how birders can look after their eyes in the field.`,
      },
      { h: 'Carrying eye drops in the field' },
      {
        p: `Birders keep a lot in their pockets, and a small bottle of eye drops is easy to lose among them. A few practical points for the person you’re giving it to, all drawn from the label:`,
      },
      {
        list: [
          `Storage: {storage}. On a freezing dawn, an inside pocket keeps it closer to that range than a pack left in the car.`,
          `Directions: {directions}.`,
          `When using: {tip}. That matters outdoors, where it’s easy to brush the tip on a glove or a sleeve.`,
          `Also from the label: {milky}.`,
        ],
      },
      {
        p: `If they wear contact lenses or use other eye drops, the label doesn’t cover those, so they should ask their eye doctor or pharmacist. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Sending a birding gift by mail' },
      {
        p: `If your birder lives far away, you can check out as a guest and enter their US address for shipping. Quell ships from Brentwood, Tennessee. Shipping is {shipping}, and {freeBottles} or more bottles ship free. The tracking email comes to you. No delivery date is promised, so order well before the holiday rather than in the last few days. If the gift isn’t wanted, unopened bottles can be refunded within {returnDays} days of delivery with nothing to send back. [How to send Quell as a gift](/guides/sending-quell-as-a-gift) has the details.`,
      },
      { h: 'Experiences instead of things' },
      {
        p: `Birders often value a good morning more than any item. A guided walk with a local club, a day trip to a wildlife refuge during migration, or a promise to drive them to a spot they’ve wanted to visit can make the gift. Wrap a field notebook with the date written on the first page, and add a pocket-sized bottle of eye drops for the windy hours.`,
      },
    ],
    faq: [
      {
        q: 'What is a good Christmas gift for a birdwatcher?',
        a: `Something that makes their mornings easier: a binocular harness, a waterproof field notebook, a heated birdbath for the yard, or warm gear like hand warmers and a neck gaiter. A small eye comfort kit with wraparound glasses fits too.`,
      },
      {
        q: 'What should I get a beginner bird watcher?',
        a: `A regional field guide, a binocular harness, a lens cleaning kit and a waterproof notebook cover the basics. A membership in a local bird club adds guided walks with experienced birders.`,
      },
      {
        q: 'Are eye drops a good gift for someone who birds a lot?',
        a: `They can be, for someone who mentions tired or dry eyes after long mornings in the wind. Quell’s label cautions about egg and bird allergies, so check that first, and point them to an eye doctor if they mention pain or vision changes.`,
      },
    ],
  },
  /*
   * Non-local, seasonal. Seed run 2026-11-20: "christmas gifts for college
   * students" (completions: college kid, college freshman, college guys,
   * college girls, college dorm). Nearest existing: college-care-package-eye-drops,
   * shipping-eye-drops-to-a-college-dorm, dry-eyes-while-studying.
   */
  {
    slug: 'christmas-gifts-for-college-students',
    title: 'Christmas gifts for college students',
    description:
      'Christmas gifts for a college kid home on winter break: things that help with dry dorm air, long study nights and the trip back to campus in January.',
    category: 'seasonal',
    addedOn: '2026-11-20',
    body: [
      {
        p: `The most useful Christmas gifts for college students are the ones they’ll pack when they go back in January: a quiet desk lamp, noise-canceling headphones, a small humidifier for a dry dorm room, a refillable water bottle, warm slippers and a lubricating eye drop for screen-tired eyes. Practical gifts fit college life because the student has to buy everything else with their own money.`,
      },
      { h: 'Why practical gifts suit a college kid' },
      {
        p: `A student coming home for winter break has just finished a semester of living out of one small room. They know exactly what was missing, and they’ll often tell you if you ask. Things that tend to come up:`,
      },
      {
        list: [
          `“My room was freezing,” or the opposite, “the heat never turns off.”`,
          `“I couldn’t sleep with my roommate’s light on.”`,
          `“My eyes were killing me during finals.”`,
          `“I ran out of everything by November.”`,
        ],
      },
      {
        p: `Each complaint points to a gift: a heated throw, a sleep mask, a better lamp, or a box of refills for the things they use up.`,
      },
      { h: 'Gifts for the dorm room' },
      {
        p: `Dorms are small, shared and often heated or cooled by a system the student can’t control. These are useful in nearly any room:`,
      },
      {
        list: [
          `A compact cool-mist humidifier. Many dorms run dry in winter, since heating cold air lowers its humidity.`,
          `An LED desk lamp with a warm setting for late reading.`,
          `A mattress topper that turns a thin dorm mattress into a real bed.`,
          `A small fan for rooms that run hot, which they can point at their feet instead of their face.`,
          `A shower caddy and slip-on shoes for a shared bathroom.`,
        ],
      },
      {
        p: `Before buying anything that plugs in, it’s worth having them check the school’s housing rules, since many campuses limit appliances in rooms.`,
      },
      { h: 'Gifts for finals week and long study nights' },
      {
        p: `College means screens for hours: lecture slides, readings, papers and the phone on top. People blink less while concentrating on a screen, and the blinks they do make are often only partial, so the tear film breaks up faster. By finals week, plenty of students feel it as tired, gritty or dry eyes. A study kit could include:`,
      },
      {
        list: [
          `A laptop stand, which puts the screen at eye level and helps with posture.`,
          `Noise-canceling headphones for a loud library or hallway.`,
          `A timer, so they can take short breaks and look away from the screen.`,
          `A bottle of Quell, a preservative-free lubricating eye drop in a {size} bottle that fits in a backpack pocket.`,
        ],
      },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label’s Uses line reads: {uses}. Our guide to [dry eyes while studying for exams](/guides/dry-eyes-while-studying) has study habits worth passing along with the gift.`,
      },
      { h: 'What to tell them about the eye drops' },
      {
        p: `A student is an adult using the product on their own, so give them the label lines that matter, quoted from the Drug Facts panel:`,
      },
      {
        list: [
          `Directions: {directions}.`,
          `When using: {tip}. Shared bathrooms and backpacks are easy places to touch the tip to something.`,
          `Warnings: {warnings}.`,
          `Storage: {storage}. A car on a winter campus lot is too cold, and a sunny windowsill can get too warm.`,
        ],
      },
      {
        p: `The label doesn’t give directions for contact lenses or for use with other drops. If your student wears contacts, they should ask their eye doctor or pharmacist before using it. And if they mention eye pain or changes in vision, that’s for an eye doctor, not a drop. The rest of the panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Gifts for the trip back to campus' },
      {
        p: `January travel is its own small gift opportunity. A student flying back can use a quart-size bag of travel liquids, a neck pillow and a warm hoodie for a cold airplane. A student driving back can use a phone mount, a travel mug and sunglasses for winter glare. If they’re flying, a {size} bottle of eye drops fits easily with their other liquids. [Are eye drops TSA compliant?](/guides/are-eye-drops-tsa-compliant) covers the security line.`,
      },
      { h: 'Shipping a gift to campus instead' },
      {
        p: `Some families give a small gift at home and send a second package to campus in January, so it’s waiting when the student gets back. You can order Quell as a guest and ship it to any US address, including a campus mailing address. Orders ship from Brentwood, Tennessee; shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking goes to the email on the order. No delivery date is promised, and some campus mailrooms close over break, so time a January order for after the student is back. [Shipping eye drops to a college dorm](/guides/shipping-eye-drops-to-a-college-dorm) explains campus addresses.`,
      },
      {
        p: `Unopened bottles can be refunded within {returnDays} days of delivery without being sent back, which helps if the student already has a bottle.`,
      },
      { h: 'Low-cost gifts a student will use' },
      {
        p: `Not every gift needs to be big. A gift card for the coffee shop near their library, a roll of stamps and a few cards for writing home, a stocked first-aid pouch, a power strip with a long cord, or a bag of their favorite snacks can all go into a stocking. For more, see our guide to [a college care package with eye drops](/guides/college-care-package-eye-drops).`,
      },
    ],
    faq: [
      {
        q: 'What is a good Christmas gift for a college student?',
        a: `Something they’ll take back to campus in January: noise-canceling headphones, a desk lamp, a small humidifier for a dry dorm room, a laptop stand, or a study kit with a bottle of lubricating eye drops for long screen days.`,
      },
      {
        q: 'What should I get my college kid for Christmas?',
        a: `Ask what was missing last semester. Most students can name it right away, whether it’s better sleep, a quieter study space, warmer clothes or relief for tired eyes during finals.`,
      },
      {
        q: 'Can a college student use Quell without asking a doctor first?',
        a: `Quell is an over-the-counter lubricating drop, and adults can follow its label directions. Students who wear contacts or use other eye drops should ask an eye doctor or pharmacist first, since the label doesn’t cover those.`,
      },
    ],
  },
  /*
   * Non-local, seasonal. Seed run 2026-11-20: "christmas gifts for stargazer"
   * (christmas gifts for stargazers, good gifts for stargazers). Nearest
   * existing: dry-eyes-when-stargazing (using), christmas-gifts-for-a-photographer.
   */
  {
    slug: 'christmas-gifts-for-a-stargazer',
    title: 'Christmas gifts for a stargazer',
    description:
      'Christmas gifts for stargazers and amateur astronomers: red flashlights, star atlases, warm gear for cold nights, and an eye kit for long hours at the eyepiece.',
    category: 'seasonal',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Good Christmas gifts for stargazers make long, cold nights outside easier: a red flashlight that keeps night vision intact, a star atlas or planisphere, a reclining camp chair, heated gloves, a thermos, and a dew-resistant case for gear. Stargazers also stare through eyepieces in cold, dry air for hours, so a small kit with a bottle of lubricating eye drops is a thoughtful addition.`,
      },
      { h: 'Good gifts for stargazers who are just starting' },
      {
        p: `A new stargazer doesn’t need a telescope right away. A common route is learning the sky first with the naked eye and a pair of binoculars. Gifts that help with that:`,
      },
      {
        list: [
          `A planisphere, the rotating star wheel that shows what’s up on any date and hour.`,
          `A beginner’s star atlas or a guide to the constellations.`,
          `A red flashlight or headlamp with a red mode, which lets them read a chart without losing their dark-adapted eyes.`,
          `A membership in a local astronomy club, which usually comes with group observing nights.`,
        ],
      },
      { h: 'Gifts for the cold nights' },
      {
        p: `Winter skies are dark early and often clear, which is wonderful for observing and hard on the body. A stargazer may stand or sit still for hours in freezing air. Comfort gear makes the difference:`,
      },
      {
        list: [
          `Heated or thin-liner gloves that still let them turn focus knobs.`,
          `Insulated boots, since standing on cold ground drains heat fast.`,
          `A warm hat and a neck gaiter.`,
          `A reclining camp chair for looking straight up.`,
          `A thermos for hot drinks, and hand warmers for pockets.`,
        ],
      },
      { h: 'Why stargazing tires the eyes' },
      {
        p: `Looking through an eyepiece means holding one eye open and still, often while trying not to blink so you don’t lose a faint object. That slows blinking much the way a screen does. Add cold, dry winter air and a breeze across an open field, and the tear film on the observing eye thins quickly. Many observers come home with one eye that feels tired and dry. Cold wind can also make the eyes water, which blurs the view at the worst moment. [Dry eyes when stargazing](/guides/dry-eyes-when-stargazing) goes into observing habits that help.`,
      },
      { h: 'An eye comfort kit for an amateur astronomer' },
      {
        p: `Pair one of the comfort gifts above with a small kit for the eyes:`,
      },
      {
        list: [
          `A soft eyepatch, so the non-observing eye can stay relaxed rather than squeezed shut.`,
          `A microfiber cloth for glasses and eyepieces.`,
          `A note reminding them to look away and blink fully between objects.`,
          `A bottle of Quell, a preservative-free lubricating eye drop that holds {size}.`,
        ],
      },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives its Uses as: {uses}. The directions read: {directions}. Our [Drug Facts page](/drug-facts) has the full label.`,
      },
      { h: 'Using eye drops on an observing night' },
      {
        p: `A few label lines matter more under a night sky than at a bathroom sink:`,
      },
      {
        list: [
          `When using: {tip}. In the dark it’s easy to touch the tip to a glove or eyelash, so wash or wipe hands first and use a red light.`,
          `Storage: {storage}. A bottle left in a car or an equipment case on a winter night will get colder than that, so keep it in an inside pocket.`,
          `Do not use: {doNotUse}. Under a red light, colors are hard to judge, so check the bottle indoors before heading out.`,
          `Warnings: {warnings}.`,
        ],
      },
      {
        p: `A drop on the eye can make the view swim until you blink it in, so a planned break is a better moment for it than right before a careful look. If they wear contact lenses or use other drops, the label doesn’t cover that, and their eye doctor or pharmacist is the right person to ask.`,
      },
      { h: 'Gifts for the gear' },
      {
        p: `If your stargazer already owns a telescope, gear accessories make easy presents: a padded case, a sturdy tripod, an eyepiece set they’ve mentioned, or a dew shield that keeps moisture off the lens. Ask another club member or check their wish list, since equipment fits specific scopes.`,
      },
      { h: 'Shipping a stargazing gift' },
      {
        p: `Quell can ship straight to them. Order as a guest, enter their US address, and it ships from Brentwood, Tennessee. Shipping is {shipping}, or free on {freeBottles} or more bottles. The tracking email comes to you, and no delivery date is promised, so order early in December. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. See [how to send Quell as a gift](/guides/sending-quell-as-a-gift) for the steps.`,
      },
    ],
    faq: [
      {
        q: 'What is a good gift for a stargazer?',
        a: `A red flashlight, a planisphere or star atlas, a reclining camp chair and warm gear for cold nights. A small eye comfort kit with a soft eyepatch and lubricating eye drops suits long nights at the eyepiece.`,
      },
      {
        q: 'What should I buy a beginner stargazer instead of a telescope?',
        a: `A planisphere, a constellation guide, a red flashlight and a membership in a local astronomy club. Many observers learn the sky with their eyes and binoculars before buying a telescope.`,
      },
      {
        q: 'Why does a red flashlight help stargazers?',
        a: `Red light lets observers read charts and handle gear without washing out the dark adaptation their eyes built up. It also helps when putting in eye drops in the dark.`,
      },
    ],
  },
  /*
   * Non-local, using. Seed run 2026-11-20: "hotel front desk eyes" (no
   * completions). No front-desk guide in inventory. Nearest: dry-eyes-in-a-hotel-room,
   * dry-eyes-for-housekeepers-and-cleaners, dry-eyes-for-retail-workers,
   * christmas-gifts-for-a-night-shift-worker.
   */
  {
    slug: 'dry-eyes-for-hotel-front-desk-workers',
    title: 'Dry eyes for hotel front desk workers',
    description:
      'Front desk agents and night auditors spend long shifts at screens in lobbies with heavy airflow and bright light. How to keep tired, dry eyes comfortable.',
    category: 'using',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Hotel front desk work dries the eyes because you watch a screen while greeting guests, stand under lobby vents, and work under bright overhead light, often through late or night shifts. Blink fully between check-ins, move out of the direct path of entrance drafts and supply vents, rest your eyes on something far away, and use a lubricating drop as its label directs. See an eye doctor if dryness hangs on or hurts.`,
      },
      { h: 'Why the front desk is hard on your eyes' },
      {
        p: `The tear film is a thin coat of mucus, water and oil. Blinking spreads it, and the oil on top slows evaporation. A front desk shift works against all of that:`,
      },
      {
        list: [
          `The property system, key encoder and phone screen hold your gaze, and people blink less while reading a screen.`,
          `Lobbies are built for comfort for people passing through, which usually means strong heating or cooling and big supply vents.`,
          `Automatic doors open dozens of times an hour, letting gusts of hot or cold air blow across the desk.`,
          `Bright, decorative lighting and glossy surfaces cause glare and squinting.`,
          `Night audits and late check-ins come when you’re tired, and tired eyes blink less completely.`,
        ],
      },
      { h: 'Screens at check-in' },
      {
        p: `Most of a front desk agent’s job is split between a guest’s face and a screen. Searching for a reservation or processing a payment takes focused attention, and focus on a screen cuts blinking. A few habits help without slowing service:`,
      },
      {
        list: [
          `Blink fully, slowly and on purpose, each time you finish a check-in.`,
          `Lower the monitor slightly so you look a little down at it. Your lids then cover more of the eye.`,
          `Turn down screen brightness to match the lobby, so you aren’t squinting at a glowing screen in a dim room at night.`,
          `When the lobby is quiet, look out the windows or across the room to rest your focus.`,
        ],
      },
      { h: 'Drafts, doors and lobby air' },
      {
        p: `A lobby can feel pleasant to a guest walking through and still be a dry place to stand for eight hours. If you can, work at the end of the desk away from the doors, and ask maintenance whether a supply vent above the desk can be redirected. Air conditioning removes moisture from the air as it cools it, and winter heating lowers indoor humidity, so both seasons have their issues. Keep any desk fan aimed at your body, not your face.`,
      },
      { h: 'Night audit and late shifts' },
      {
        p: `Working the night desk means hours of reports and screens in a quiet building, often with the lights partly dimmed. Fatigue makes blinks shallower, and staying alert at 3 a.m. often means staring harder at the screen. Short breaks to close your eyes for a few seconds and a walk through the lobby help. If you sleep during the day, a dark, cool bedroom with a humidifier makes rest easier. [Christmas gifts for a night shift worker](/guides/christmas-gifts-for-a-night-shift-worker) has ideas a coworker might appreciate.`,
      },
      { h: 'Using eye drops on shift' },
      {
        p: `Quell is a lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses line reads: {uses}. The directions say: {directions}. Front desk work makes it easy to plan doses: one at the start of the shift, one at a mid-shift break and one after work.`,
      },
      {
        list: [
          `Step into the back office rather than putting drops in at the desk in front of guests.`,
          `Wash your hands first. You’ve handled cards, keys, cash and pens.`,
          `When using: {tip}.`,
          `Store it in your bag or locker, not by the window or on a heater. The label says: {storage}.`,
        ],
      },
      {
        p: `The warnings read: {warnings}. The full label is on our [Drug Facts page](/drug-facts). If you wear contact lenses at work, the label doesn’t cover that, so ask your eye doctor or pharmacist.`,
      },
      { h: 'After the shift' },
      {
        p: `Many front desk workers head home and pick up a phone right away. If your eyes are already tired, give them a few minutes of rest first: close them, or look out a window. If you commute by car, keep vents off your face. At home in winter, a bedroom humidifier helps. Our guide to [dry eyes in a hotel room](/guides/dry-eyes-in-a-hotel-room) has tips that apply to guest rooms you may recommend to guests, too.`,
      },
      { h: 'Ordering Quell' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, including a hotel if you want it waiting at work (check with your manager first). Checkout is as a guest; buyers must be 18 or older. Shipping is {shipping}, and {freeBottles} or more bottles ship free. No delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. [Order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If dryness comes with pain, vision changes or irritation that won’t go away, stop and get it looked at. The label says: {stopUse} An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for more.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working the front desk?',
        a: `You spend long stretches reading a screen, which slows blinking, while lobby vents and opening doors move dry air across the desk. Bright lights and late shifts add to it.`,
      },
      {
        q: 'Can I use eye drops at the front desk?',
        a: `Step into the back office if you can, wash your hands, and follow the label: {directions}. Keep the tip from touching anything, and store the bottle in your bag or locker.`,
      },
      {
        q: 'How can night auditors keep their eyes from feeling tired?',
        a: `Take short breaks to close your eyes and walk the lobby, lower your screen brightness to match the dim room, and blink fully between reports. A humidifier where you sleep during the day can help too.`,
      },
    ],
  },
  /*
   * Non-local, using. Seed run 2026-11-20: "dry cleaner eyes" and
   * "laundromat" (no job-related completions). No laundry or dry cleaning
   * guide in inventory. Nearest: dry-eyes-for-housekeepers-and-cleaners,
   * dry-eyes-for-factory-workers.
   */
  {
    slug: 'dry-eyes-for-laundry-and-dry-cleaning-workers',
    title: 'Dry eyes for laundry and dry cleaning workers',
    description:
      'Pressers, laundry attendants and dry cleaning staff work in heat, steam, lint and bright light. Why that tires the eyes and what helps through a shift.',
    category: 'using',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Laundry and dry cleaning work dries the eyes because the shop runs hot. Presses, tumblers and steam tunnels heat the air, lint floats around folding tables, and close inspection under bright light slows blinking. Wear safety glasses around presses and chemicals, keep a fan off your face, close your eyes for a few seconds between garments, and use a lubricating drop as its label directs. Pain or vision changes need an eye doctor.`,
      },
      { h: 'Heat, steam and dry air in the shop' },
      {
        p: `A busy plant or laundromat is full of machines whose whole job is to heat and dry things. That heat doesn’t stay inside the machines. Dryers vent warmth into the room, pressers throw off heat with every cycle, and steam bursts up from irons and finishing equipment. Steam feels moist for a moment, but the hot air it leaves behind can hold a great deal of water, and warm, moving air pulls moisture from the surface of the eye. Many workers describe their eyes as hot and gritty by the end of the day.`,
      },
      {
        list: [
          `Stand so press steam rises away from your face, not toward it.`,
          `If a fan is cooling your station, aim it at your chest or legs.`,
          `Step into a cooler part of the shop for a minute during breaks.`,
          `Wear safety glasses at the press. They catch steam bursts and stop drafts from reaching the eye.`,
        ],
      },
      { h: 'Lint and fibers in the air' },
      {
        p: `Shaking out, sorting and folding sends fine fibers into the air, especially near dryers and folding tables. Lint landing on the lid margin can make the eye feel scratchy, and the urge to rub it in makes things worse. A few habits help:`,
      },
      {
        list: [
          `Shake garments out below face height and away from you.`,
          `Clean lint screens and traps on the schedule your shop sets, since full traps push more fibers into the air.`,
          `If something gets in your eye, don’t rub. Blink, or rinse with clean water, and get help if it still feels like something is there.`,
          `Wash your hands before touching your face or eyes. Hands carry lint, detergent and cleaning products.`,
        ],
      },
      { h: 'Spotting, inspection and close work' },
      {
        p: `Spotting a stain, checking for missed spots, and inspecting a finished garment under a bright lamp all require close, steady attention. People blink less during that kind of focus, and partial blinks don’t spread a full fresh layer across the eye. Work in short bursts, and after each garment, look across the room and blink fully a couple of times. If the inspection light glares off white fabric, adjusting its angle reduces squinting.`,
      },
      { h: 'Cleaning chemicals and eye protection' },
      {
        p: `Dry cleaning and commercial laundry both use chemicals: solvents, spotting agents, detergents and bleach. Each product comes with its own instructions and safety data sheet, and your employer should show you where the eyewash station is and what protective equipment to wear. Follow those for any splash, and get help right away. A lubricating eye drop is not for rinsing out chemicals. If fumes make your eyes sting, tell your supervisor, since ventilation is the shop’s job, not something to cover up with drops.`,
      },
      { h: 'Using eye drops on shift' },
      {
        p: `Quell is a lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label’s Uses line reads: {uses}. The directions say: {directions}. That fits a shift well: before work, at lunch, and after you clock out.`,
      },
      {
        list: [
          `Wash your hands with soap and water first, and dry them on a clean towel.`,
          `Use drops away from the presses and machines, in a break room if you have one.`,
          `When using: {tip}.`,
          `Store the bottle in a locker or bag, not on a dryer or near a press. The label says: {storage}.`,
          `Do not use: {doNotUse}. A bottle left near a heat source is worth checking.`,
        ],
      },
      {
        p: `The warnings read: {warnings}. The whole panel is on our [Drug Facts page](/drug-facts). If you wear contact lenses at work, the label doesn’t cover them, so check with your eye doctor or pharmacist.`,
      },
      { h: 'Owners and attendants at self-service laundromats' },
      {
        p: `Laundromat attendants and owners face a slightly different mix. There’s less press steam, but a long wall of dryers keeps the room warm, and the work includes hours at a counter or folding station. In winter, cold air rushes in every time the door opens, then hits warm air from the dryers, so eyes go back and forth between the two. Sit or stand away from the door, and keep the counter fan off your face.`,
      },
      { h: 'Rest after work' },
      {
        p: `After a hot shift, give your eyes a few minutes before picking up a phone. Close them, or look at something far away. At home in winter, a humidifier in the bedroom helps, since heated indoor air is dry too. Our guide on [dry eyes for factory workers](/guides/dry-eyes-for-factory-workers) covers more about long shifts around machinery, and [dry eyes for housekeepers and cleaners](/guides/dry-eyes-for-housekeepers-and-cleaners) covers cleaning products.`,
      },
      { h: 'Ordering and when to see a doctor' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address. Checkout is as a guest, and buyers need to be 18 or older. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery with nothing to send back.`,
      },
      {
        p: `If your eyes hurt, your vision changes, or irritation keeps going after you’ve been away from the shop, stop and see someone. The label says: {stopUse} An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you decide.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes burn working in a dry cleaner?',
        a: `Heat from presses and tumblers dries the air, steam bursts and fans move it across your face, and close inspection slows blinking. Chemical fumes can also sting. Tell your supervisor about fumes, and see an eye doctor if burning lasts.`,
      },
      {
        q: 'Can lint from a laundry get in your eyes?',
        a: `Yes. Shaking out and folding sends fine fibers into the air, and they can land on the eyelid or eye. Blink or rinse with clean water rather than rubbing, and get help if it still feels like something is there.`,
      },
      {
        q: 'Should laundry workers wear safety glasses?',
        a: `Around presses, steam and chemicals, many shops require them, and they also block drafts from fans. Follow your employer’s rules and the product safety sheets for the chemicals you handle.`,
      },
    ],
  },
  /*
   * Non-local, using. Seed run 2026-11-20: "food truck" (completions were
   * local listings and business questions, none about eyes). No food truck
   * guide in inventory. Nearest: dry-eyes-for-line-cooks-and-chefs,
   * dry-eyes-for-bakers.
   */
  {
    slug: 'dry-eyes-for-food-truck-workers',
    title: 'Dry eyes for food truck workers',
    description:
      'A food truck packs a griddle, fryer and service window into a few feet. Why that dries the eyes, and how food truck cooks and window staff can stay comfortable.',
    category: 'using',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Food truck work dries the eyes because a griddle, fryer and steam table share a space a few feet wide, the hood pulls hot air past your face, and the service window lets in sun, wind and dust. Keep your face out of the hood’s airflow when you can, wear glasses at the fryer, rest your eyes during slow stretches, and use a lubricating drop as its label directs. Pain or vision changes need an eye doctor.`,
      },
      { h: 'A hot kitchen in a small box' },
      {
        p: `In a restaurant, the line has some room. In a truck, the flat-top, the fryer and the prep counter are within an arm’s reach, and there’s little space to step back from the heat. A hood fan or roof vent pulls air up and out constantly, drawing hot, dry air across the cook’s face on its way. Warm, moving air pulls water out of the tear film faster, and the oil layer on top can only slow that so much. Long event days stretch it out.`,
      },
      {
        list: [
          `When you’re not flipping or plating, take half a step back from the griddle.`,
          `Turn your face aside when you lift a basket from the fryer or open a steamer.`,
          `Wear glasses or safety glasses at the fryer to catch splatter and break up the hot air.`,
          `Use the slow minutes between rushes to close your eyes for a few seconds.`,
        ],
      },
      { h: 'Working the service window' },
      {
        p: `The person at the window has a different set of problems. They face outdoors, often into the sun, and they’re talking, reading orders and tapping a point-of-sale screen all at once. Wind can blow straight in through the window, carrying dust from a parking lot or a field at a festival. A cap with a brim cuts glare, and so does angling the payment screen away from the sun. Between customers, look off into the distance and blink fully.`,
      },
      { h: 'Generators, exhaust and smoke' },
      {
        p: `Many trucks run on a generator, and every lot or event has its own mix of vehicle exhaust and grill smoke. Fumes and smoke can make eyes sting and water. Park so the generator exhaust blows away from the window, and keep the kitchen ventilated so smoke goes up and out rather than collecting inside. If smoke from your own cooking keeps reaching the window, the hood may need cleaning.`,
      },
      { h: 'Summer heat and winter cold' },
      {
        p: `A truck in a summer parking lot gets hot even before the griddle is lit, and the air conditioning many trucks use to make service bearable blows dry air around the cab. In winter, the window staff deals with cold wind while the cook stands next to a heat source, and both are drying. Whatever the season, set any fan so it blows across your body instead of your face.`,
      },
      { h: 'Keeping eye drops on a truck' },
      {
        p: `A food truck is a poor place to store anything heat-sensitive. Quell’s label gives its storage range as: {storage}. A parked truck in summer can exceed that inside, and the shelf above the flat-top always will. Keep the bottle in your personal bag in the cab or in a cooler, wrapped in a cloth so it doesn’t sit directly on ice. Take it home at night. If it’s been somewhere too hot, check this line: {doNotUse}.`,
      },
      { h: 'Using drops during a service' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses line reads: {uses}. The directions say: {directions}. Plan the doses around the day: one before you open, one during the mid-afternoon lull, one after cleanup.`,
      },
      {
        list: [
          `Wash your hands well first. Hands that have touched raw food, oil or hot pepper should never go near your eyes.`,
          `Step to the cab or outside the truck, away from the cooking area and food.`,
          `When using: {tip}.`,
          `Put the bottle away before you go back to food prep.`,
        ],
      },
      {
        p: `The label warns: {warnings}. See every line on our [Drug Facts page](/drug-facts). If you wear contact lenses, the label doesn’t cover them, so ask your eye doctor or pharmacist.`,
      },
      { h: 'Long event days and festivals' },
      {
        p: `A festival or fair can mean twelve hours in a truck with no real break. Plan ahead: bring sunglasses for setup and teardown, keep a clean towel for your face, and take a few minutes away from the heat when another crew member can cover. After the event, rest your eyes before the drive home. If the drive is long, keep the vents off your face. For more on cooking heat, see [dry eyes for line cooks and chefs](/guides/dry-eyes-for-line-cooks-and-chefs).`,
      },
      { h: 'Ordering Quell' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, though a home address is easier than a truck that moves around. Check out as a guest; buyers need to be 18 or older. Shipping is {shipping}, and {freeBottles} or more bottles ship free. No delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. [Order on the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If hot oil or anything else hits your eye, get it rinsed and seen right away. For everyday dryness, the label sets the limit: {stopUse} An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes dry out working in a food truck?',
        a: `The griddle and fryer heat the air in a very small space, and the hood fan pulls that hot air past your face. Window staff also face sun, wind and dust, and everyone blinks less during a rush.`,
      },
      {
        q: 'Where should I keep eye drops in a food truck?',
        a: `In a personal bag in the cab or in a cooler, wrapped so it doesn’t touch ice, and never near the cooking line. Quell’s label gives a storage range ({storage}), and a parked truck can get hotter than that.`,
      },
      {
        q: 'Can generator exhaust irritate your eyes?',
        a: `Exhaust and smoke can make eyes sting and water. Park so the generator exhaust blows away from the service window, and keep the kitchen ventilated so smoke goes out rather than collecting inside.`,
      },
    ],
  },
  /*
   * Non-local, using. No dishwasher guide in inventory. Nearest:
   * dry-eyes-for-line-cooks-and-chefs (mentions dish pit steam in one
   * sentence), dry-eyes-for-housekeepers-and-cleaners.
   */
  {
    slug: 'dry-eyes-for-restaurant-dishwashers',
    title: 'Dry eyes for restaurant dishwashers',
    description:
      'Steam from the dish machine, sanitizer splash and long shifts in a hot dish pit are hard on the eyes. What restaurant dishwashers can do to stay comfortable.',
    category: 'using',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Restaurant dishwashers get dry, tired eyes from the dish pit’s mix of heat and steam: every time the machine opens, a hot cloud rolls out, then the air turns warm and dry again. Splashes of soapy or chemical water and long shifts add to it. Turn your face away when the door lifts, wear safety glasses, wash your hands before touching your eyes, and use a lubricating drop as its label directs.`,
      },
      { h: 'What the dish pit does to your eyes' },
      {
        p: `The tear film is three thin layers: mucus, water and oil. The oil on top slows evaporation, and blinking spreads a fresh coat. In a dish pit, several things work against it at once:`,
      },
      {
        list: [
          `Steam bursts when the machine opens, followed by hot, dry air as the steam rises and vents out.`,
          `The kitchen hood and pit exhaust keep air moving across your face.`,
          `Spray from a pre-rinse nozzle can bounce water mixed with food and soap toward your eyes.`,
          `Bright lights over a steel counter create glare and squinting.`,
          `Long, late shifts mean tired eyes that blink less completely.`,
        ],
      },
      { h: 'Steam from the dish machine' },
      {
        p: `A hot cloud of steam feels moist, but it can sting, and it isn’t helping your tear film. After it passes, the hot air that’s left keeps drying the eye. The easiest habit is the simplest: step back and turn your head when you lift the door or pull a rack, and give the steam a second to rise before you lean in. If your pit has an exhaust hood above the machine, keep it on and clean, so steam goes up instead of out at you.`,
      },
      { h: 'Splashes, sanitizer and eye protection' },
      {
        p: `Dish work means chemicals: detergent, rinse aid, sanitizer, delimer and degreaser. Each has its own label and safety data sheet, and many call for eye protection. Your manager should show you where the eyewash station is. Safety glasses are worth wearing even when they aren’t required, because they also stop spray from the rinse nozzle and break up drafts. If a chemical splashes in your eye, follow the product’s instructions and the kitchen’s eyewash procedure right away, and get medical help. A lubricating eye drop is not a rinse for chemicals.`,
      },
      { h: 'Handling the pre-rinse sprayer' },
      {
        p: `The pre-rinse nozzle sprays hard, and water ricochets off plates, pans and the bottom of the sink. Keep the nozzle low and angled away from you, rinse plates at the bottom of the sink rather than chest height, and use a splash guard if your station has one. Mist from the sprayer also carries soap and food particles, which can sting.`,
      },
      { h: 'Keep your hands away from your eyes' },
      {
        p: `In a dish pit your hands are wet, soapy and often covered in food residue or chemicals all shift long. That makes rubbing an itchy eye a bad idea. Use the back of a clean wrist, or better, step away, take off your gloves, and wash your hands with soap and water before touching your face. That rule matters even more before using eye drops.`,
      },
      { h: 'Using eye drops during a shift' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses section reads: {uses}. The directions say: {directions}. For a dishwasher, that might look like: one before your shift, one on your break, and one when you get home.`,
      },
      {
        list: [
          `Take off gloves and wash and dry your hands thoroughly first.`,
          `Step out of the kitchen, away from steam and spray.`,
          `When using: {tip}.`,
          `Keep the bottle in your locker or bag, not on a shelf over the dish machine. The label’s storage line reads: {storage}.`,
        ],
      },
      {
        p: `The warnings read: {warnings}. The full label is on our [Drug Facts page](/drug-facts). If you wear contact lenses at work, the label doesn’t cover them; ask your eye doctor or pharmacist.`,
      },
      { h: 'After the late shift' },
      {
        p: `Dish crews often close the kitchen and head home late, tired. Before scrolling your phone on the ride home, give your eyes a few minutes off. If you drive, point the vents at your chest. A humidifier in the bedroom helps in winter, when heated indoor air is dry. [Dry eyes for line cooks and chefs](/guides/dry-eyes-for-line-cooks-and-chefs) covers the hot line next to you, and [dry eyes for housekeepers and cleaners](/guides/dry-eyes-for-housekeepers-and-cleaners) covers more about cleaning chemicals.`,
      },
      { h: 'Ordering and seeing a doctor' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address. Check out as a guest; buyers must be 18 or older. Shipping is {shipping}, and {freeBottles} or more bottles ship free. No delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back.`,
      },
      {
        p: `Any chemical splash needs prompt attention. For everyday dryness, the label sets the limit: {stopUse} An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes hurt after a dishwashing shift?',
        a: `Steam bursts from the machine, hot dry air, spray from the rinse nozzle and long hours under bright lights all strain the eyes. If they actually hurt, or the pain lasts, see an eye doctor.`,
      },
      {
        q: 'Should dishwashers wear safety glasses?',
        a: `Many dish chemicals call for eye protection on their labels, and glasses also block spray from the pre-rinse nozzle. Follow your kitchen’s rules and each product’s safety data sheet.`,
      },
      {
        q: 'Is dish machine steam bad for your eyes?',
        a: `A hot burst can sting, and the hot air left behind dries the tear film. Step back and turn your head when you open the machine, and give the steam a second to rise.`,
      },
    ],
  },
  /*
   * Non-local, label. Grep of inventory 2026-11-20: no guide on "fl oz" or
   * the size line; nearest how-much-liquid-is-in-one-eye-drop (using) and
   * are-eye-drops-tsa-compliant. Size from the {size} token only. 1 US fl oz
   * = 29.5735 mL is a unit definition, used only to explain the conversion.
   */
  {
    slug: 'what-does-fl-oz-mean-on-eye-drops',
    title: 'What does fl oz mean on eye drops?',
    description:
      'Fl oz on an eye drop box means fluid ounces, a measure of volume, not weight. How to read the size line on Quell’s carton and what it doesn’t tell you.',
    category: 'label',
    addedOn: '2026-11-20',
    body: [
      {
        p: `“Fl oz” on an eye drop box stands for fluid ounces, a US unit of volume. It tells you how much liquid the bottle holds, not how much it weighs. Most labels print the same amount in milliliters (mL) beside it. Quell’s carton lists its size as {size}. That figure is the total in the bottle; how many doses you get from it depends on drop size, which the label doesn’t state.`,
      },
      { h: 'Fluid ounces vs. ounces' },
      {
        p: `An ounce on its own (oz) is a unit of weight. A fluid ounce (fl oz) is a unit of volume: how much space a liquid takes up. The two aren’t interchangeable, because liquids differ in how heavy they are for the same amount of space. On a bottle of eye drops, the “fl” is what tells you the number describes volume. That’s the useful measure for a liquid you dispense by the drop.`,
      },
      { h: 'Reading Quell’s size line' },
      {
        p: `Quell’s carton gives its size as {size}. That line has two parts:`,
      },
      {
        list: [
          `The fluid ounce figure, written with a leading decimal point, so it’s a third of a fluid ounce.`,
          `The milliliter figure in parentheses, which is the same amount in metric units.`,
        ],
      },
      {
        p: `A US fluid ounce is defined as about 29.57 milliliters, so a third of one rounds to the 10 milliliters shown. The two numbers on the label describe one amount of liquid, not two separate things.`,
      },
      { h: 'Why eye drop labels use both units' },
      {
        p: `Americans tend to think in ounces, while medicine and science work in milliliters. Printing both lets you compare bottles whichever way you’re used to. When you’re comparing two products, compare the milliliter figures if you can; whole numbers are easier to compare than decimals like .33 and .5.`,
      },
      { h: 'What the size line doesn’t tell you' },
      {
        p: `The fluid ounce figure is the volume in the bottle at the factory. It doesn’t tell you:`,
      },
      {
        list: [
          `How many drops the bottle holds. Drop size depends on the bottle tip, the liquid and how you squeeze, so no label can promise a count. Our guide to [how much liquid is in one eye drop](/guides/how-much-liquid-is-in-one-eye-drop) explains why.`,
          `How long a bottle will last you. That depends on how many drops end up in the eye and how many miss.`,
          `How long it stays usable once opened. The size line has nothing to do with that question.`,
          `How strong the product is. Strength is shown by the ingredient percentages in the active ingredients section, not by the size of the bottle.`,
        ],
      },
      { h: 'Is a third of a fluid ounce a small bottle?' },
      {
        p: `For an eye drop, it’s a common size. Each dose is a single drop, so a few milliliters goes a long way compared with, say, a bottle of cough syrup measured in tablespoons. Quell’s directions read: {directions}. At that rate, you can work out roughly how many drops you use in a week, though drop size still varies from bottle to bottle and from squeeze to squeeze.`,
      },
      { h: 'Fl oz and the airport liquids rule' },
      {
        p: `The size line matters most at airport security. TSA’s liquids rule for carry-on bags limits each container to 3.4 ounces (100 milliliters), and the containers go together in one quart-size bag. A {size} bottle is well under that limit. Keep it with your other liquids or follow the TSA officer’s instructions. [Are eye drops TSA compliant?](/guides/are-eye-drops-tsa-compliant) has more on flying.`,
      },
      { h: 'Where the size appears on the package' },
      {
        p: `On most eye drop cartons, the size appears on the front panel, usually near the bottom, along with the product name. The bottle itself often carries it too. Quell’s product listing shows the same figure, and our [Drug Facts page](/drug-facts) shows the rest of the label. If the label on a bottle and a website ever seem to disagree, the printed label is the one to follow; our guide [if the label and website ever differ](/guides/if-the-label-and-website-differ) explains why.`,
      },
      { h: 'Other lines that sit near the size' },
      {
        p: `Size is just one of several lines people check on a box. Three that often get read alongside it:`,
      },
      {
        list: [
          `What the liquid should look like: {milky}.`,
          `Storage: {storage}. The temperatures are given in both Celsius and Fahrenheit, the same two-unit habit as the size line.`,
          `Do not use: {doNotUse}.`,
        ],
      },
      { h: 'Buying by the bottle' },
      {
        p: `Quell is sold by the bottle, each holding {size}. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. You can [order from the home page](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'What does fl oz stand for on eye drops?',
        a: `Fluid ounces, a US measure of volume. It tells you how much liquid is in the bottle. Most labels also show the amount in milliliters.`,
      },
      {
        q: 'How many mL is .33 fl oz?',
        a: `About 10 milliliters. A US fluid ounce is about 29.57 milliliters, so a third of one rounds to 10, which is why Quell’s carton reads {size}.`,
      },
      {
        q: 'Is a fluid ounce the same as an ounce?',
        a: `No. An ounce measures weight, while a fluid ounce measures volume. Eye drop labels use fluid ounces because they describe how much liquid is in the bottle.`,
      },
      {
        q: 'How many drops are in a .33 fl oz bottle of eye drops?',
        a: `The label doesn’t say, because drop size depends on the bottle tip, the liquid and how you squeeze. The size line only gives the total volume in the bottle.`,
      },
    ],
  },
  /*
   * Non-local, label. Section heading as rendered in
   * src/components/DrugFactsPanel.tsx ("When Using This Product"), content
   * from {tip}. No guide titled on this heading in inventory; nearest:
   * do-not-touch-the-tip (short, 2026-11-03), the-warnings-section.
   */
  {
    slug: 'what-does-when-using-this-product-mean',
    title: 'What does “When using this product” mean?',
    description:
      '“When using this product” is the Drug Facts section for what to watch or do while you use a drug. What it means on an eye drop label, and Quell’s one line.',
    category: 'label',
    addedOn: '2026-11-20',
    body: [
      {
        p: `“When using this product” is a heading in the Warnings part of a Drug Facts label. It lists what to do, avoid or expect while you’re actually using the product, as opposed to before you start or when you should stop. On Quell’s panel it has a single line: {tip}. That’s a handling instruction meant to keep the contents of the bottle clean for every dose that follows.`,
      },
      { h: 'Where the section sits on the panel' },
      {
        p: `On Quell’s Drug Facts panel, the warning lines run in a fixed order, each with its own heading:`,
      },
      {
        list: [
          `Warnings, the general cautions.`,
          `Do Not Use, which covers situations where you shouldn’t start.`,
          `When Using This Product, which covers the moment of use.`,
          `Stop use and ask a doctor if, which covers signs that should end use.`,
          `Keep out of reach of children, with what to do if the product is swallowed.`,
        ],
      },
      {
        p: `Directions, Other Information and Inactive Ingredients follow. Reading the warning headings in order works like a timeline: before, during, and after. Our guide to [reading a Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label) walks the whole panel.`,
      },
      { h: 'What kinds of lines go in this section' },
      {
        p: `Across over-the-counter products in general, “When using this product” is where a label puts things you need to know in the moment. Depending on the product, that might be a side effect to expect, an activity to avoid while using it, or a handling step. For an eye drop, handling is the natural fit, since the risk is in how the bottle meets the eye.`,
      },
      { h: 'Quell’s line: {tip}' },
      {
        p: `Quell’s only entry in this section reads: {tip}. The word that carries the most weight is “any.” It covers more than the obvious countertop:`,
      },
      {
        list: [
          `Your eye itself, including the lashes and lid.`,
          `Your fingers, while you hold the bottle or pull down your lower lid.`,
          `A tissue, a towel or the inside of a pocket.`,
          `The cap’s open end, if you set it down carelessly.`,
        ],
      },
      {
        p: `The reason given is right in the sentence: to avoid contamination. Whatever the tip touches can be carried back into the bottle with the next drop. Quell is preservative-free, so clean handling is the only line of defense for what’s left in the bottle. [Why you should never touch the bottle tip](/guides/do-not-touch-the-tip) has a short list of surfaces people forget.`,
      },
      { h: 'Putting the instruction into practice' },
      {
        p: `Following this one line is mostly a matter of routine. A sequence that keeps the tip clear:`,
      },
      {
        list: [
          `Wash and dry your hands.`,
          `Take off the cap and set it down on its closed top.`,
          `Tilt your head back and pull your lower lid down gently with a clean finger.`,
          `Hold the bottle above the eye, close but not touching, and squeeze one drop.`,
          `Recap right away, before you put the bottle down.`,
        ],
      },
      {
        p: `If you have trouble aiming without touching, lying down or resting your hand on your forehead can steady it.`,
      },
      { h: 'If the tip touches something anyway' },
      {
        p: `It happens. The label doesn’t say what to do next, and when a label is silent, the right person to ask is a pharmacist. Don’t try to clean the tip with tissue, water or alcohol on your own, since that adds more contact. Before your next dose, also check the line from the Do Not Use section: {doNotUse}.`,
      },
      { h: 'How it differs from the other warning headings' },
      {
        p: `“When using this product” is easy to confuse with its neighbors. The difference is timing. Do Not Use is a gate you check before you open the bottle. Stop use and ask a doctor if is the point to end use and get help: {stopUse} When Using This Product is what you do while the bottle is open in your hand. Our guide to [do not use vs. stop use](/guides/do-not-use-vs-stop-use-on-a-drug-label) compares the before and after sections side by side.`,
      },
      { h: 'Why one line is enough for an eye drop' },
      {
        p: `Some products carry long When Using sections: drowsiness, sun sensitivity, activities to avoid. A lubricating eye drop has fewer moving parts. It goes on the surface of the eye, one drop at a time, from a bottle you’ll open many times. The thing most likely to go wrong in that moment is the bottle meeting something it shouldn’t, so that’s what the section addresses. A short section isn’t a sign that the label skipped something; it reflects what the product is.`,
      },
      { h: 'What the section doesn’t cover' },
      {
        p: `Quell’s When Using section is one line. It doesn’t address contact lenses, children or using it with other eye drops. Those aren’t covered anywhere on the panel, so ask your eye doctor or pharmacist about them. The full label is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'What does “when using this product” mean on a drug label?',
        a: `It’s the Drug Facts heading for things to do, avoid or expect while you’re using the product, as opposed to before starting or when to stop. On Quell’s label it holds one handling instruction about the bottle tip.`,
      },
      {
        q: 'What does “to avoid contamination” mean on eye drops?',
        a: `It means keeping anything from getting into the bottle that wasn’t there when it was sealed. Touching the tip to any surface, including your eye or fingers, can carry something back inside with the next drop.`,
      },
      {
        q: 'What should I do if my eye drop tip touched my eye?',
        a: `Quell’s label doesn’t say, so ask a pharmacist before your next dose. Don’t wipe the tip with tissue or alcohol yourself, and check the bottle for any change in color.`,
      },
    ],
  },
  /*
   * Non-local, label. Headings from src/components/DrugFactsPanel.tsx; lines
   * via {doNotUse}, {stopUse}, {warnings}, {tip}, {swallowed}. Nearest:
   * when-to-stop-using-eye-drops, do-not-use-if-the-color-changes,
   * the-warnings-section. No guide compares the two headings.
   */
  {
    slug: 'do-not-use-vs-stop-use-on-a-drug-label',
    title: 'Do not use vs. stop use on a drug label',
    description:
      '“Do not use” tells you when not to start a product; “stop use and ask a doctor” tells you when to quit and get help. How the two read on an eye drop label.',
    category: 'label',
    addedOn: '2026-11-20',
    body: [
      {
        p: `On a Drug Facts label, “Do not use” lists situations where you shouldn’t use the product at all, so you check it before each use. “Stop use and ask a doctor if” lists signs that appear after you’ve started, telling you to quit and get medical advice. Quell’s Do Not Use line reads: {doNotUse}. Its stop-use section names eye pain, vision changes, and irritation that continues or gets worse.`,
      },
      { h: 'Two headings, two moments' },
      {
        p: `The easiest way to keep them straight is timing:`,
      },
      {
        list: [
          `Do Not Use is a gate. If the condition is true, you don’t open the bottle.`,
          `Stop use and ask a doctor if is an exit. You were using the product, something changed, and now you stop and get advice.`,
        ],
      },
      {
        p: `One is about the product or your situation before you begin. The other is about what happens to you afterward.`,
      },
      { h: 'Quell’s Do Not Use line' },
      {
        p: `Quell’s Do Not Use section has one entry: {doNotUse}. Notice that it’s about the product, not the person. You check it by looking at the solution. For reference, the label also says: {milky}. A bottle that doesn’t look like that description is one not to use. [What “do not use if it changes color” means](/guides/do-not-use-if-the-color-changes) goes into that line in detail.`,
      },
      {
        p: `On other over-the-counter products, Do Not Use sections often name people instead, such as anyone with a particular allergy. Quell handles its allergy note differently, in the general Warnings line: {warnings}. The word “caution” there asks for care and judgment; it isn’t phrased as a flat prohibition.`,
      },
      { h: 'Quell’s stop-use section' },
      {
        p: `Quell’s panel heads this section “Stop use and ask a doctor if,” and lists two kinds of signs. The full guidance reads: {stopUse}`,
      },
      {
        list: [
          `Signs that call for stopping right away: eye pain and changes in your vision.`,
          `Signs that call for stopping because they hang on: continued irritation, or a condition that worsens or persists past the stated time.`,
        ],
      },
      {
        p: `Pain and vision changes have no waiting period. The time limit applies to the slower kind of problem. [When to stop using eye drops and see a doctor](/guides/when-to-stop-using-eye-drops) covers what to do once you reach that point.`,
      },
      { h: 'Why “ask a doctor” is part of the heading' },
      {
        p: `“Stop use” on its own would leave you without a next step. Adding “ask a doctor” tells you what to do instead of reaching for a different product or using more of the same one. If one of those signs appears, the answer isn’t another drop. An eye doctor can find the cause and decide what to do.`,
      },
      { h: 'The headings in between' },
      {
        p: `Two other headings sit between and around these on Quell’s panel, and both fit the same before-during-after pattern:`,
      },
      {
        list: [
          `When Using This Product, the during part: {tip}.`,
          `Keep out of reach of children, which covers an accident: {swallowed}.`,
        ],
      },
      {
        p: `Our guide to [what “When using this product” means](/guides/what-does-when-using-this-product-mean) explains that middle section.`,
      },
      { h: 'Do not use vs. ask a doctor before use' },
      {
        p: `Some over-the-counter labels have a third heading, “Ask a doctor before use if,” for situations that aren’t outright prohibitions but need a professional’s view first. Quell’s panel doesn’t include that heading. Even so, the label is silent on contact lenses, children and use with other eye drops, and those are fair questions for an eye doctor or pharmacist before you start.`,
      },
      { h: 'Why the wording is so direct' },
      {
        p: `Drug Facts headings are written so that someone glancing at a box in a store aisle or a medicine cabinet can find the answer fast. “Do not use” and “Stop use” both start with a verb, so the instruction comes first and the detail follows. That’s also why neither heading uses softer words like “consider” or “you may want to.” When a line on the panel tells you not to use or to stop, read it as an instruction, not a suggestion.`,
      },
      { h: 'A quick checklist from the label' },
      {
        list: [
          `Before each use: look at the solution and check the Do Not Use line.`,
          `While using: follow the When Using line about the tip.`,
          `Over the following days: watch for pain, vision changes or irritation that won’t settle.`,
          `If any of those appear: stop and ask a doctor.`,
        ],
      },
      {
        p: `The full panel, headings and all, is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'What is the difference between do not use and stop use on a label?',
        a: `“Do not use” lists situations where you shouldn’t start using the product at all. “Stop use and ask a doctor if” lists signs that show up after you’ve started and mean you should quit and get medical advice.`,
      },
      {
        q: 'What does “stop use and ask a doctor” mean?',
        a: `It means stop using the product and get advice from a doctor rather than switching products or using more. On Quell’s label, eye pain and vision changes are among the signs listed.`,
      },
      {
        q: 'Does Quell’s label have an “ask a doctor before use” section?',
        a: `No. Quell’s panel has Do Not Use, When Using This Product and Stop use and ask a doctor if, but no ask-before-use heading. Questions about contact lenses, children or other drops still belong with an eye doctor or pharmacist.`,
      },
    ],
  },
  /*
   * Non-local, label (the Directions line, via {directions}). No title on
   * this question in inventory; directions-section-eye-drop-label mentions
   * "each eye" in one list item; why-does-one-eye-feel-drier-than-the-other
   * (choosing) covers causes, not the label.
   */
  {
    slug: 'do-you-put-eye-drops-in-both-eyes',
    title: 'Do you put eye drops in both eyes?',
    description:
      'Quell’s directions say each eye. What that means if only one eye feels dry, which eye to do first, and when a one-sided problem needs an eye doctor.',
    category: 'label',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Follow the label. Quell’s directions read: {directions}. “In each eye” means both eyes get a drop at every use, even if only one feels dry at the time. The label doesn’t give a one-eye option. If only one eye bothers you, especially if it hurts or your vision changes, ask an eye doctor rather than changing how you use the drop.`,
      },
      { h: 'What “in each eye” means on Quell’s label' },
      {
        p: `The Directions line answers three questions: how much, how often and where. The where is “in each eye.” Read plainly, each time you use Quell, you put one drop in your right eye and one in your left. The label doesn’t say to use it only in the eye that feels worse, and it doesn’t offer a different routine for one eye. Our guide to [the Directions section](/guides/directions-section-eye-drop-label) explains how that line is put together.`,
      },
      { h: 'What if only one eye feels dry?' },
      {
        p: `It’s common to notice one eye more than the other. You might sleep facing a fan on one side, sit with a window or vent to one side at work, or drive with the sun on one side. Even then, both eyes are exposed to the same air most of the day. The label’s instruction doesn’t change with how each eye feels in the moment.`,
      },
      {
        p: `If one eye keeps feeling different from the other day after day, that’s worth an eye doctor’s look, not a change in how you use the drop. [Why does one eye feel drier than the other?](/guides/why-does-one-eye-feel-drier-than-the-other) covers everyday reasons it happens.`,
      },
      { h: 'Which eye first?' },
      {
        p: `The label doesn’t say, and it doesn’t matter for an ordinary lubricating drop. What helps is doing it the same way every time, so you don’t lose track of which eye you’ve done. Many people start with the right eye out of habit. A steady sequence for both eyes:`,
      },
      {
        list: [
          `Wash and dry your hands, and uncap the bottle.`,
          `Tilt your head back and look up.`,
          `Pull down the lower lid of the first eye to make a small pocket.`,
          `Hold the bottle above the eye without touching it, and squeeze one drop.`,
          `Close that eye gently for a moment.`,
          `Repeat with the second eye, then recap the bottle.`,
        ],
      },
      { h: 'Using one bottle for both eyes' },
      {
        p: `One bottle serves both of your eyes, and the When Using line is what keeps that clean: {tip}. If the tip brushes your lashes on the first eye, it can carry something to the second eye and back into the bottle. Keep the bottle a little above the eye rather than close enough to touch. Sharing a bottle with another person is a different matter; the label doesn’t address it, and it’s simpler for each person to have their own.`,
      },
      { h: 'If a drop misses one eye' },
      {
        p: `Missing is normal, especially at first. If the drop lands on your cheek or eyelid instead of the eye, it’s fine to try again with another drop in that eye. A miss isn’t a dose. If two drops go in at once, there’s no need to skip the other eye or the next dose; the eye can only hold so much, and the extra runs out.`,
      },
      { h: 'When a one-sided problem needs a doctor' },
      {
        p: `A difference between the eyes is often just about where the air hits you. But some signs mean you should stop and get checked. Quell’s label puts it this way: {stopUse} Pain in one eye, a change in vision in one eye, or one eye that keeps getting worse are all reasons to see an eye doctor, who can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for what can’t wait.`,
      },
      { h: 'Fitting both eyes into a busy day' },
      {
        p: `Two eyes three times a day sounds like a lot of steps, but it takes well under a minute each time once it’s routine. Tie each use to something you already do: after breakfast, after lunch, before bed. Keep the bottle where you’ll see it at those moments, and store it as the label says: {storage}. If you miss a time, just pick up at the next one; the label doesn’t ask you to double up.`,
      },
      { h: 'What the label leaves out' },
      {
        p: `Quell’s directions don’t cover contact lenses, children, or using Quell alongside other eye drops in one eye or both. For those, ask your eye doctor or pharmacist. The rest of the label, including {warnings}, is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Should I put eye drops in both eyes if only one is dry?',
        a: `Quell’s directions say to use it in each eye, so both eyes get a drop at each use. If one eye keeps feeling different, or it hurts, see an eye doctor rather than changing how you use the drop.`,
      },
      {
        q: 'Does it matter which eye you put drops in first?',
        a: `The label doesn’t say, and for a lubricating drop the order doesn’t matter. Doing it the same way every time helps you keep track of which eye you’ve done.`,
      },
      {
        q: 'Can you use the same bottle of eye drops for both eyes?',
        a: `Yes, one bottle serves both of your own eyes. Keep the tip from touching either eye, your lashes or your fingers, as the label instructs, and don’t share the bottle with anyone else.`,
      },
    ],
  },
  // END-D
]
