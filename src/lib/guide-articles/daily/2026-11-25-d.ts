import type { Guide } from '@/lib/guide-types'

export const DAILY_20261125_D: Guide[] = [
  /*
   * Sources checked 2026-11-25 for dry-eye-relief-marshall-tx:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991-2020 monthly
   *   normals for station USC00415618, MARSHALL, TX, elev 302 ft. Saved at
   *   .daily-job/acis1125/USC00415618.json.
   *   Normal max/min F: Jan 57.1/33.1, Mar 68.7/43.7, Jul 93.9/70.8,
   *   Aug 94.2/70.3, Nov 67.2/42.1, Dec 58.9/34.9.
   *   Precip in: Jan 4.20, Feb 3.98, Mar 5.07 (wettest), Apr 4.78, May 4.62,
   *   Jun 4.66, Jul 3.65, Aug 3.05 (driest), Sep 3.50, Oct 4.67, Nov 4.25,
   *   Dec 4.91; sum 51.34. Snow in: Jan 0.3, Feb 0.4, Mar 0.1, rest 0.0;
   *   sum 0.8.
   * Not in relhum23.txt or wndspd23.txt: no humidity or wind figures used.
   */
  {
    slug: 'dry-eye-relief-marshall-tx',
    title: 'Dry eye relief in Marshall, Texas',
    description:
      'Marshall gets about 51 inches of rain a year, yet August tops 94°F and winter heat runs on cold nights. NOAA’s numbers and everyday dry eye relief.',
    category: 'local',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Marshall is wet on paper, with about 51 inches of rain in a normal year, but dry eyes there usually come from indoor air: air conditioning through a long summer that peaks near 94°F in August, and heaters on winter nights that dip to about 33°F. Keep vents off your face, blink fully at screens, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Marshall’s weather in NOAA’s records' },
      {
        p: `NOAA’s 1991–2020 climate normals for the Marshall cooperative station, at about 300 feet above sea level, describe a place where rain is spread across the whole calendar and no month is truly dry:`,
      },
      {
        list: [
          `Normal yearly precipitation adds up to about 51.3 inches.`,
          `March is the wettest month at 5.07 inches, with December close behind at 4.91.`,
          `August is the driest at 3.05 inches, and it is also the hottest, with a normal high of 94.2°F.`,
          `January runs from a normal high of 57.1°F down to a low of 33.1°F.`,
          `Snow barely registers: under an inch for the whole year, spread across January, February and March.`,
        ],
      },
      {
        p: `Those numbers matter for your eyes because the outdoor air is rarely the problem on its own. The trouble starts when that air is cooled, heated or blown at your face for hours.`,
      },
      { h: 'If it rains this much, why do my eyes feel dry?' },
      {
        p: `Your tear film has three layers: an oily outer layer, a watery middle and a mucus layer against the eye. The oil slows evaporation, and every blink spreads a fresh coat. Wet weather outside doesn’t reach that film when you spend the day in a building with the air conditioning running, a truck with the vents on high, or a living room with the heat cycling. Moving air and conditioned air both pull moisture off the eye faster than still air does.`,
      },
      {
        p: `That’s why a Marshall resident can step out into a damp March afternoon and feel fine, then sit at a desk under a ceiling vent and feel gritty by three o’clock. The cause is the room, not the forecast.`,
      },
      { h: 'June through September: living inside the AC' },
      {
        p: `From June through September, NOAA’s normal highs at the Marshall station stay between about 88°F and 94°F, and July and August nights hold near 70°F. In practice that means air conditioning runs almost without a break at home, at work and in the car. A few changes make the cooled air easier on your eyes:`,
      },
      {
        list: [
          `Angle the dashboard vents toward your chest or the floor instead of your eyes, especially on longer drives.`,
          `Check where the ceiling register sits over your desk or recliner, and move the chair a few feet if it blows straight down at you.`,
          `Set the thermostat a couple of degrees warmer at night so the system cycles less over the bed.`,
          `Take short breaks from phones and screens every so often, and finish each blink rather than half-closing your eyes.`,
        ],
      },
      { h: 'Spring and fall: heat in the morning, AC by afternoon' },
      {
        p: `Marshall’s shoulder seasons have a wide daily range. In November the normal high is 67.2°F and the normal low is 42.1°F, a spread of about 25 degrees; March is similar, at 68.7°F and 43.7°F. Plenty of households run the heat at breakfast and the air conditioning by midafternoon, sometimes within a few hours of each other. Each switch brings a fresh blast of dry, moving air from the same vents.`,
      },
      {
        p: `If your eyes feel worse on those swing days, it often helps to let the house drift a little instead of chasing a single temperature. A sweater in the morning means one less heating cycle blowing across the kitchen table.`,
      },
      { h: 'Winter nights near freezing' },
      {
        p: `December and January lows at the station sit around 33°F to 35°F, cold enough that the heat runs most evenings. Heated air holds its moisture poorly once it warms, so bedrooms and dens feel drier than the rainy weather outside suggests. A small humidifier in the bedroom, a door kept shut so the room doesn’t share air with a forced-air return, and a chair moved away from the floor register all help. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) goes room by room.`,
      },
      {
        p: `Those cold nights also fall in December, the second-wettest month on the record, so a chilly, drizzly evening can still end with stinging eyes beside a space heater. Keep the heater pointed at your legs, not your face.`,
      },
      { h: 'Yard work, driving and long days on screens' },
      {
        p: `A normal Marshall day mixes outdoor and indoor air. Mowing and leaf blowing push dust and plant debris around, so wraparound sunglasses or safety glasses help keep grit out. Anything that feels stuck in the eye after a gentle rinse with clean water is a reason to see an eye doctor, not a reason to keep adding drops. Long drives toward Shreveport or Dallas mean hours of vent air and steady focus on the road, so plan a stop to rest your eyes. If you’re crossing into Louisiana often, our [Shreveport guide](/guides/dry-eye-relief-shreveport-la) covers the air on that side of the line.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses line reads: {uses}. The directions: {directions}. And to keep the bottle clean: {tip}.`,
      },
      {
        p: `The warnings section says: {warnings}. One more line covers appearance: {milky}. Storage reads: {storage}. A pickup left in a Marshall parking lot in August can climb well past that range, so carry the bottle with you instead of leaving it in the console. The whole panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in Marshall' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Marshall, Hallsville, Jefferson and every other US address. Checkout works as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking comes by email when the order ships, though no delivery date is promised, so reorder before you run low. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. The [Marshall page](/eye-drops/marshall-tx) and the [Texas page](/eye-drops/state/texas) have more local detail.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A drop is for everyday dryness. The label is clear about when to stop: {stopUse} Sudden pain, a change in vision, light sensitivity or something stuck in the eye all deserve prompt attention. An eye doctor can find the cause and decide what to do. Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Marshall, Texas?',
        a: `August, at 3.05 inches in NOAA’s 1991–2020 normals for the Marshall station. It is also the hottest month, with a normal high of 94.2°F, so air conditioning runs hard just as rainfall dips.`,
      },
      {
        q: 'Does Marshall, Texas get snow?',
        a: `Very little. NOAA’s normals for the Marshall station add up to under an inch a year, split across January, February and March. Cold, damp nights near freezing are far more common than snow.`,
      },
      {
        q: 'Why do my eyes feel dry indoors in East Texas?',
        a: `Air conditioning in summer and heating in winter both move dry air across the eye, which speeds evaporation from the tear film no matter how much rain falls outside. Redirecting vents and blinking fully at screens help.`,
      },
      {
        q: 'Can I get Quell shipped to Marshall, TX?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any US address, including Marshall and the towns around it, with guest checkout and email tracking. No delivery date is promised, so order before your bottle runs out.`,
      },
    ],
  },
  /*
   * Sources checked 2026-11-25 for dry-eye-relief-venice-fl:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991-2020 monthly
   *   normals for station USC00089176, VENICE, FL, elev 8 ft. Saved at
   *   .daily-job/acis1125/USC00089176.json.
   *   Normal max/min F: Jan 72.4/51.6, Feb 75.0/54.2, Jul 91.5/74.3,
   *   Aug 91.5/74.7, Nov 80.0/59.7, Dec 75.0/54.8.
   *   Precip in: Jan 2.68, Feb 2.00, Mar 2.97, Apr 2.47, May 3.25, Jun 7.81,
   *   Jul 7.39, Aug 8.34 (wettest), Sep 7.16, Oct 3.35, Nov 1.54 (driest),
   *   Dec 2.31; sum 51.27; Jun-Sep 30.70. Snow 0.0 every month.
   * Not in relhum23.txt or wndspd23.txt: no humidity or wind figures used.
   */
  {
    slug: 'dry-eye-relief-venice-fl',
    title: 'Dry eye relief in Venice, Florida',
    description:
      'November is Venice’s driest month at about 1.5 inches of rain, just as winter visitors arrive. NOAA’s numbers and practical dry eye relief on the Gulf.',
    category: 'local',
    addedOn: '2026-11-25',
    body: [
      {
        p: `In Venice, dry eyes tend to flare from November into spring. NOAA’s normals put November’s rain at about 1.5 inches, the lowest of the year, and Gulf breezes, low winter sun and air-conditioned rooms all speed evaporation from the tear film. Wear wraparound sunglasses outdoors, keep vents off your face, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'A year of Venice weather, from NOAA' },
      {
        p: `NOAA’s 1991–2020 climate normals for the Venice station, which sits about 8 feet above sea level, split the year into two very different halves:`,
      },
      {
        list: [
          `June through September bring about 30.7 of the year’s roughly 51.3 inches of rain, with August the wettest month at 8.34 inches.`,
          `November is the driest month at 1.54 inches, followed by February at 2.00 and December at 2.31.`,
          `July and August share a normal high of 91.5°F, with nights near 74°F.`,
          `January is the coolest month, running from a normal high of 72.4°F down to 51.6°F.`,
        ],
      },
      {
        p: `So the months most people picture as Florida’s nicest weather are also its driest. That lines up with when many people in Venice notice their eyes the most.`,
      },
      { h: 'Why November can be the hardest month' },
      {
        p: `Rain falls off sharply after October’s 3.35 inches, and November averages less than a fifth of August’s total. Cooler fronts bring clearer skies and brisker wind across the barrier beaches. At the same time the population grows as seasonal residents return and families visit for Thanksgiving, so houses that sat closed all summer open up with their air conditioning, fans and sometimes heat running for the first time in months. Each of those moves air across your eyes.`,
      },
      {
        p: `If you’re opening a seasonal home, run the system for a while before settling in, and check that bedroom ceiling fans aren’t set on high directly over the pillows. A fan that felt good in July can dry your eyes noticeably on a mild November night.`,
      },
      { h: 'Sunsets over the Gulf and low winter sun' },
      {
        p: `Venice faces the Gulf of Mexico, so evening walks, beach chairs and dinner tables point west into the setting sun. In winter that sun sits low for longer, and its glare off wet sand and open water makes people squint. Squinting narrows the eye and often cuts blinks short, which leaves the tear film to thin between blinks. Some habits that help:`,
      },
      {
        list: [
          `Wear wraparound sunglasses on the beach and on a fishing pier; they block glare and breeze together.`,
          `Turn your chair a little to the side of the sun rather than straight into it.`,
          `Every few minutes, close your eyes gently for a slow count of two.`,
          `Rinse salt spray off your face with clean water rather than rubbing your eyes with sandy hands.`,
        ],
      },
      { h: 'Boats, bikes and golf carts' },
      {
        p: `A lot of Venice life happens in the open air at a steady speed. A boat heading out into the Gulf, a bicycle on a waterfront path or a golf cart between holes all push wind into your face even on a calm day. The faster you move, the more air rushes past the eye. Glasses with side coverage or a brimmed hat cut that wind, and pausing in the shade between stretches gives your tear film a chance to recover. Watch for grit and sand kicked up on the beach paths too.`,
      },
      { h: 'The rainy season, indoors' },
      {
        p: `From June through September the outdoor air is warm and wet, with nights that stay in the low to mid 70s at the Venice station. Indoors is another story. Air conditioning runs nearly without a break, and cooling the air removes moisture from it. People who spend summer afternoons in a cold condo, a library or a doctor’s office often find their eyes feel drier than they did outside. Keeping vents angled away, taking regular screen breaks and blinking fully all help. Our neighboring [Sarasota guide](/guides/dry-eye-relief-sarasota-fl) has more on long summers in air conditioning.`,
      },
      { h: 'What the Quell label covers' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses line: {uses}. The directions read: {directions}. The panel also says: {tip}.`,
      },
      {
        p: `The warnings: {warnings}. Storage: {storage}. A beach bag in the sun or a car parked at the beach lot in July can run well above that upper limit, so tuck the bottle somewhere shaded and bring it inside afterward. Everything on the panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Venice' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Venice, Nokomis, Englewood and every other US address. If you split the year between homes, order to the address where you’ll be when it arrives; no delivery date is promised, so give yourself some room. Checkout works as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Unopened bottles can be refunded within {returnDays} days of delivery, and you keep them. The [Venice page](/eye-drops/venice-fl) and the [Florida page](/eye-drops/state/florida) have local details.`,
      },
      { h: 'When an eye doctor should take over' },
      {
        p: `Drops are for everyday dryness, not for everything an eye can do. The label’s stop-use line says it plainly: {stopUse} Sand or a fish scale stuck in the eye, sudden pain, or vision that changes need prompt care. An eye doctor can find the cause and decide what to do. Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Venice, Florida?',
        a: `November, with a normal 1.54 inches of rain in NOAA’s 1991–2020 records for the Venice station. February and December follow, at 2.00 and 2.31 inches.`,
      },
      {
        q: 'How hot does Venice, Florida get in summer?',
        a: `NOAA’s normals for the Venice station give July and August a normal high of 91.5°F, with nights that stay around 74°F. Air conditioning runs hard through those months, which is when many people notice indoor dryness.`,
      },
      {
        q: 'Why do my eyes get dry on the beach in Venice?',
        a: `Gulf breezes, low sun glare off the water and squinting all thin the tear film between blinks. Wraparound sunglasses, a hat, slow blinks and turning your chair away from the sun help.`,
      },
      {
        q: 'Does Quell ship to Venice, FL?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Venice and every other US address, with guest checkout and tracking by email. If you split the year between homes, use the address where you’ll be when the package arrives.`,
      },
    ],
  },
  /*
   * Sources checked 2026-11-25 for dry-eye-relief-lake-havasu-city-az:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991-2020 monthly
   *   normals for station USC00024761, LAKE HAVASU CITY, AZ, elev 449 ft.
   *   Saved at .daily-job/acis1125/USC00024761.json.
   *   Normal max/min F: Jan 65.2/42.7, Apr 85.8/57.7, May 95.2/66.9,
   *   Jun 105.1/75.5, Jul 109.3/82.7, Aug 108.1/82.3, Sep 101.9/74.5,
   *   Oct 89.1/61.6, Nov 74.9/50.0, Dec 63.8/41.8.
   *   Precip in: Jan 0.75 (wettest), Feb 0.61, Mar 0.48, Apr 0.16, May 0.03,
   *   Jun 0.01 (driest), Jul 0.26, Aug 0.38, Sep 0.36, Oct 0.28, Nov 0.30,
   *   Dec 0.54; sum 4.16. Snow 0.0 every month.
   * Not in relhum23.txt or wndspd23.txt: no humidity or wind figures used.
   */
  {
    slug: 'dry-eye-relief-lake-havasu-city-az',
    title: 'Dry eye relief in Lake Havasu City, Arizona',
    description:
      'Lake Havasu City gets about 4 inches of rain a year, and July highs top 109°F. NOAA’s numbers, plus dry eye tips for the lake, the heat and the AC.',
    category: 'local',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Lake Havasu City sits on a big lake in very dry country: NOAA’s normals give it about 4.2 inches of rain a year, with summer highs above 105°F from June through August. Desert air, wind on the water and air conditioning that rarely shuts off all pull moisture from the tear film. Shade your eyes, blink fully, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'The numbers behind the dryness' },
      {
        p: `NOAA’s 1991–2020 climate normals for the Lake Havasu City station, at about 450 feet above sea level, read like a desert almanac:`,
      },
      {
        list: [
          `Total precipitation is about 4.16 inches in a normal year.`,
          `June is the driest month at 0.01 inch, and May has only 0.03.`,
          `January is the wettest month, and it still averages just 0.75 inch.`,
          `July’s normal high is 109.3°F, and its normal low is 82.7°F.`,
          `December is the mildest month by day, with a normal high of 63.8°F and a low of 41.8°F.`,
        ],
      },
      {
        p: `The lake can make the place feel softer than it is. Open water doesn’t change how little rain falls on the town, and the air over the streets and the hills around them stays desert air most of the year.`,
      },
      { h: 'May and June: the driest stretch' },
      {
        p: `Together, May and June average four hundredths of an inch of rain at the station, while normal highs climb from about 95°F to 105°F. Evaporation from your eyes speeds up in hot, dry, moving air, and early summer delivers all three. If your eyes tend to sting in late spring, that’s the season to build habits before the worst of the heat:`,
      },
      {
        list: [
          `Plan outdoor errands, dog walks and yard work for early morning, when the station’s normal lows are still in the upper 60s to mid 70s.`,
          `Wear wraparound sunglasses even for short trips, since bright sun makes people squint and blink less fully.`,
          `Keep a hat with a brim in the car for parking lots and launch ramps.`,
          `Rest your eyes for a minute each time you come in from the heat, before picking up a phone.`,
        ],
      },
      { h: 'Nights that stay above 80' },
      {
        p: `July and August normal lows at the station sit near 82°F, so the house doesn’t get a cool break after sunset. Air conditioning runs through the night, and a bedroom with a vent or ceiling fan aimed at the bed can leave eyes scratchy by morning. Point vents toward the wall or the floor, set the fan to low or off once the room is cool, and keep the bedroom door closed so the room isn’t sitting in the main return’s airflow. Our page on [whether dry eyes are worse in summer or winter](/guides/are-dry-eyes-worse-in-summer-or-winter) explains why cooled rooms dry the eyes too.`,
      },
      { h: 'Out on the water: wind, spray and glare' },
      {
        p: `A boat moving across the lake turns even a still afternoon into a headwind, and the sun comes at you twice, from the sky and off the water. Dust from the shoreline and the launch lot rides along on your face and hands. People who spend whole weekends on the lake often find their eyes feel worse on Sunday night than they did on Friday. A few changes help:`,
      },
      {
        list: [
          `Choose sunglasses that wrap around the sides and stay put at speed.`,
          `Sit behind the windshield on the run out, not in the bow.`,
          `Take the shade breaks seriously: under a canopy or a cove wall, close your eyes for a slow count.`,
          `Rinse dust off your face with clean water before rubbing anything near your eyes.`,
        ],
      },
      {
        p: `If sand, a bug or anything else stays stuck in your eye after a gentle rinse, stop and get it looked at. That’s a job for an eye doctor or urgent care, not for more drops.`,
      },
      { h: 'Winter: mild days and a busier town' },
      {
        p: `From November through February, normal highs at the station run from the low 60s to the mid 70s, and nights drop into the low 40s. Those cool mornings are when many homes switch on the heat. Dry heated air indoors, then bright, low winter sun outdoors, can be a rough combination for the tear film. Keep the heat moderate, aim vents away from where you sit, and wear sunglasses on the golf course and on walks along the shore.`,
      },
      { h: 'Keeping the bottle out of the heat' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses: {uses}. Its directions: {directions}. Its storage line: {storage}. In a Lake Havasu summer, a car interior, a glove box or a boat’s dry box in the sun can easily run past that upper limit. Keep the bottle in an insulated bag or bring it inside with you, and check its appearance before use. The label’s do-not-use line reads: {doNotUse}. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Lake Havasu City' },
      {
        p: `We ship from Brentwood, Tennessee, to Lake Havasu City and every other US address. Checkout works as a guest, shipping is {shipping}, and {freeBottles} or more bottles ship free. Since summer porches get very hot, try to be home when the package is due, or ship to a workplace where it can sit indoors; our guide to [eye drops shipped in hot or cold weather](/guides/eye-drops-shipped-in-hot-or-cold-weather) covers what to check on arrival. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. See the [Lake Havasu City page](/eye-drops/lake-havasu-city-az) and the [Arizona page](/eye-drops/state/arizona) for local details, and our [Kingman guide](/guides/dry-eye-relief-kingman-az) for the higher country to the north.`,
      },
      { h: 'Signs to see an eye doctor' },
      {
        p: `Heat and sun can make eyes uncomfortable, but some symptoms aren’t about dryness. The label says: {stopUse} Pain, vision changes, strong sensitivity to light, or anything stuck in the eye deserve prompt care. An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for the full list.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Lake Havasu City get a year?',
        a: `About 4.16 inches in a normal year, according to NOAA’s 1991–2020 normals for the Lake Havasu City station. January is the wettest month at 0.75 inch, and June the driest at 0.01.`,
      },
      {
        q: 'How hot are summer nights in Lake Havasu City?',
        a: `NOAA’s normals give July a normal low of 82.7°F and August 82.3°F at the Lake Havasu City station. With nights that warm, air conditioning runs around the clock, so keep bedroom vents and fans off your face.`,
      },
      {
        q: 'Why do my eyes burn after a day on the lake?',
        a: `Wind from the boat’s speed, glare off the water, bright sun and dry desert air all thin the tear film. Wraparound sunglasses, shade breaks and full blinks help, and lasting pain or anything stuck in the eye needs an eye doctor.`,
      },
      {
        q: 'Can Quell be shipped to Lake Havasu City in the summer?',
        a: `Yes. Quell ships to Lake Havasu City from Brentwood, Tennessee. Its label gives a storage range topping out at 86°F, so bring the package inside promptly or have it delivered where it won’t sit in the sun.`,
      },
    ],
  },
  /*
   * Sources checked 2026-11-25 for dry-eye-relief-castle-rock-co:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991-2020 monthly
   *   normals for station USC00051401, CASTLE ROCK, CO, elev 6156 ft. Saved at
   *   .daily-job/acis1125/USC00051401.json.
   *   Normal max/min F: Jan 45.6/18.0, Feb 46.7/19.9, Mar 53.8/26.5,
   *   Apr 59.1/32.5, Jul 85.7/56.4, Aug 83.6/54.7, Oct 64.8/34.6,
   *   Nov 53.9/25.7, Dec 45.7/18.0.
   *   Precip in: Jan 0.55 (driest), Feb 0.70, Mar 1.54, Apr 2.08, May 1.97,
   *   Jun 2.20, Jul 2.32, Aug 2.52 (wettest), Sep 1.39, Oct 0.85, Nov 0.79,
   *   Dec 0.69; sum 17.60.
   *   Snow in: Jan 8.0, Feb 10.7, Mar 10.7, Apr 8.3, May 1.1, Jun-Aug 0.0,
   *   Sep 0.4, Oct 2.7, Nov 6.7, Dec 8.9; sum 57.5.
   * Not in relhum23.txt or wndspd23.txt: no humidity or wind figures used.
   */
  {
    slug: 'dry-eye-relief-castle-rock-co',
    title: 'Dry eye relief in Castle Rock, Colorado',
    description:
      'Castle Rock sits near 6,160 feet, gets about 57 inches of snow and only 17.6 inches of precipitation a year. NOAA’s numbers and dry eye relief by season.',
    category: 'local',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Castle Rock’s dry eye season is long. NOAA’s normals for the town’s station show about 17.6 inches of precipitation a year, January lows near 18°F, and snow possible from September into May. That means months of furnace heat indoors, car defrosters on cold mornings and bright sun on fresh snow. Aim vents away from your face, wear sunglasses outside, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'What NOAA’s Castle Rock station records' },
      {
        p: `The 1991–2020 climate normals for the Castle Rock station, at about 6,160 feet above sea level, add up to a year that is cold for a long stretch and light on moisture:`,
      },
      {
        list: [
          `About 17.6 inches of total precipitation in a normal year, rain and melted snow combined.`,
          `January is the driest month at 0.55 inch; August is the wettest at 2.52 inches.`,
          `Normal snowfall is about 57.5 inches, and February and March tie as the snowiest months at 10.7 inches each.`,
          `Snow shows up in the normals in every month from September through May.`,
          `January and December share a normal low of 18.0°F; July’s normal high is 85.7°F.`,
        ],
      },
      { h: 'Eight months of heating season' },
      {
        p: `With normal lows below freezing from November through March, and April’s normal low still only 32.5°F, Castle Rock homes run the heat for much of the year. Heating cold outdoor air without adding moisture makes it feel drier indoors, and forced-air systems push that air across rooms in steady bursts. Many people notice their eyes most in the morning, after a night of the furnace cycling over the bed.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom and keep it clean as its maker directs.`,
          `Close or redirect the register nearest your pillow, couch or desk.`,
          `Lower the thermostat a few degrees at night; a heavier blanket costs your eyes nothing.`,
          `Take short screen breaks on work-from-home days, and blink fully before the next email.`,
        ],
      },
      {
        p: `Our guide to [dry eyes from forced-air heat](/guides/dry-eyes-from-forced-air-heat) has more on furnaces and ductwork.`,
      },
      { h: 'Cold commutes and a blasting defroster' },
      {
        p: `A January morning at the station normally starts near 18°F. Scraping the windshield, then sitting in a car with the defroster on high, puts a stream of hot, dry air right at face level. On a drive north toward Denver or south toward Colorado Springs, that stream can run for most of an hour. Once the glass clears, move the airflow to the floor vents. Turn the dashboard vents so they don’t point at your eyes, and stop at a safe spot to rest them if they start to sting. If you also spend workdays up north, our [Denver guide](/guides/dry-eyes-in-denver) covers the city’s air.`,
      },
      { h: 'March snow and the glare that follows' },
      {
        p: `March is one of Castle Rock’s snowiest months, tied with February at a normal 10.7 inches, and April still averages 8.3. Spring storms often clear to bright sun, and fresh snow reflects that light back up under your hat brim. Squinting into glare narrows the eye and cuts blinks short, so the tear film thins faster between them. Wraparound sunglasses or goggles for shoveling, sledding with the family and walks on snowy trails help with both the glare and the wind. Our page on [dry eyes when shoveling snow](/guides/dry-eyes-when-shoveling-snow) has a short routine for snow days.`,
      },
      { h: 'Summer: wetter months, still dry air' },
      {
        p: `June through August bring the most precipitation of the year at the station, about 7 inches across the three months, with July highs near 86°F and nights that cool into the mid 50s. Air conditioning runs less than in hotter places, but a car on a summer afternoon, a gym, or an office kept cool still dries the eyes. Outdoors, sun and wind on open trails and ball fields add up over a long afternoon. Sunglasses and a brimmed hat do more for your eyes than people expect.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses line reads: {uses}. Directions: {directions}. Before using it, note the warnings: {warnings}.`,
      },
      {
        p: `Storage reads: {storage}. A car left out all night in a Castle Rock driveway in January can drop far below that lower limit, so keep the bottle in a coat pocket or bring it inside rather than leaving it in the console. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Castle Rock' },
      {
        p: `We ship from Brentwood, Tennessee, to Castle Rock, Sedalia, Larkspur and every other US address. Checkout works as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Winter storms can slow any package and no delivery date is promised, so order before the bottle runs low and bring the box in promptly on a cold day. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. The [Castle Rock page](/eye-drops/castle-rock-co) and the [Colorado page](/eye-drops/state/colorado) have local details.`,
      },
      { h: 'When to call an eye doctor' },
      {
        p: `Dryness from heated air and bright snow is common, but some symptoms point elsewhere. The label is direct: {stopUse} Sudden pain, blurred or changing vision, or something stuck in the eye that a gentle rinse doesn’t clear all need prompt attention. An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'How much snow does Castle Rock, Colorado get?',
        a: `About 57.5 inches in a normal year, according to NOAA’s 1991–2020 normals for the Castle Rock station. February and March are the snowiest months at 10.7 inches each.`,
      },
      {
        q: 'What is the elevation of Castle Rock, CO?',
        a: `NOAA lists the Castle Rock weather station at about 6,160 feet above sea level. At that height, winter nights are cold enough that heating runs for much of the year.`,
      },
      {
        q: 'Why do my eyes hurt driving to work on cold Colorado mornings?',
        a: `A defroster on high blows hot, dry air toward your face just as the eyes are adjusting to cold outdoor air. Once the windshield clears, switch airflow to the floor and turn dashboard vents away from your eyes.`,
      },
      {
        q: 'Can I order Quell to Castle Rock, Colorado?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Castle Rock and every other US address. Winter weather can slow delivery and no date is promised, so order before you run low.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-greenhouse-workers',
    title: 'Dry eyes for greenhouse workers',
    description:
      'Fans, heaters, grow lights, potting dust and cold walks between houses wear on the eyes. What greenhouse and nursery workers can do, shift by shift.',
    category: 'using',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Greenhouse work is hard on the eyes even though the air inside often feels damp. Circulation fans run constantly, heaters push warm air in winter, grow lights and glazing throw glare, and potting mix and plant debris drift around the benches. Then there’s the cold walk between houses. Point yourself out of the fan stream, wear eye protection your employer provides, use a lubricating drop as labeled, and see a doctor for anything in the eye.`,
      },
      { h: 'Why do my eyes get dry in a greenhouse?' },
      {
        p: `Your tear film has an oily outer layer, a watery middle and a mucus layer against the eye. The oil slows evaporation, and each blink spreads a fresh coat. Moving air pulls moisture off that film faster than still air does, and greenhouses are built around moving air: horizontal fans keep it circulating over the crop, exhaust fans pull heat out on sunny days, and unit heaters blow warm air in cold weather. Standing in one of those streams for an hour while transplanting can leave your eyes stinging even when the house feels humid.`,
      },
      {
        p: `Concentration adds to it. Sticking cuttings, sorting plugs or scouting leaves for pests means staring closely at small things, and people blink less when they focus hard. Fewer blinks mean the film has longer to thin between refreshes.`,
      },
      { h: 'Warm house, cold yard' },
      {
        p: `In winter the day swings back and forth. One minute you’re inside a heated house in shirtsleeves; the next you’re pushing a cart across a frozen yard into a sharp wind, then back into the heat. Each change hits the eyes. Cold wind speeds evaporation outdoors, and the heater’s blast at the door does the same on the way back in. Some habits that help:`,
      },
      {
        list: [
          `Keep a pair of wraparound safety glasses or sunglasses handy for the trips across the yard.`,
          `Pause a few steps inside the door, out of the heater’s direct throw, and blink slowly a few times.`,
          `Avoid standing in the doorway where outside air and heated air meet; it’s usually the windiest spot in the house.`,
          `Wipe fogged glasses with a clean cloth rather than pushing them up and rubbing your eyes.`,
        ],
      },
      { h: 'Fans, heaters and where you stand' },
      {
        p: `You can’t turn off the fans, but you can often choose your angle to them. Learn which way the airflow runs down each bay and face across it, not into it, when you work a bench for a long stretch. Unit heaters usually blow from high on a wall or post; set up potting stations and carts so that air isn’t landing on your face. If you run a backpack sprayer or a leaf blower to clean aisles, wear the eye protection your employer specifies, since those throw air and debris straight up.`,
      },
      { h: 'Grow lights and glare off the glazing' },
      {
        p: `Supplemental lighting on short winter days, bright sun through glass or poly, and white floors and benches all bounce light into your eyes. People squint in bright light, and a squint makes for short, incomplete blinks. Look away from fixtures when you’re working beneath them, use tinted or light-reducing eyewear if your employer allows it, and give your eyes a short break in a dimmer area, such as the head house or break room, every so often.`,
      },
      { h: 'Potting mix, pollen and plant debris' },
      {
        p: `Dry potting mix, perlite, peat and soil-less media make fine dust when they’re dumped, mixed or swept. Pollen and leaf bits float off flowering crops, and trimming leaves a haze of plant debris. All of that can make dry eyes feel scratchier. Wetting media slightly before mixing, sweeping gently instead of blowing, and washing your hands before touching your face all cut down on what reaches your eyes.`,
      },
      {
        p: `Something actually in the eye is different. Grit, perlite, a splinter of stem or sap that won’t rinse out with clean water needs an eye doctor or urgent care. If fertilizer, a pesticide or a cleaning product splashes into an eye, rinse right away as your workplace’s safety instructions direct and call Poison Control or get emergency care. Lubricating drops aren’t for any of that. Our page for [florists](/guides/dry-eyes-for-florists) covers the sap-and-thorn side of plant work.`,
      },
      { h: 'The holiday rush and long shifts' },
      {
        p: `For many growers, late fall is crunch time, with holiday crops to finish, sleeve, load and ship before Christmas. That can mean longer hours under the lights, more time at packing tables, and more trips in and out of the cold. On those weeks, plan eye breaks the way you plan water and lunch breaks: step away from the bench, look at something far off for a moment, and blink fully before going back.`,
      },
      { h: 'Using a lubricating drop on the job' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives this Uses line: {uses}. The directions say: {directions}. Three times across a shift usually lines up with the start of the day, lunch and a late break, but follow the label rather than a schedule from anyone else.`,
      },
      {
        list: [
          `Wash and dry your hands before using any drop; gloves that have handled soil, fertilizer or chemicals shouldn’t go near your eyes.`,
          `Follow the label’s tip warning: {tip}.`,
          `Mind the storage line, {storage}. A house on a sunny afternoon can run hotter than that, so keep the bottle in the break room or your locker, not on a bench or in a truck.`,
          `Read the caution on the panel before first use: {warnings}.`,
        ],
      },
      {
        p: `The label doesn’t cover contact lenses or using Quell alongside other eye drops, so ask your eye doctor or a pharmacist about those. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see a doctor instead' },
      {
        p: `Plant work brings irritants that drops can’t sort out. The label’s stop-use line reads: {stopUse} Add to that list anything stuck in the eye, any chemical splash, and pain that starts suddenly. An eye doctor can find the cause and decide what to do. Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs, and the [self-check](/self-check) can help you sort everyday dryness from something else; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes dry out in a humid greenhouse?',
        a: `Greenhouses rely on fans and heaters that keep air moving, and moving air speeds evaporation from the tear film even when the air feels damp. Close focus on small plants also cuts down on blinking.`,
      },
      {
        q: 'Can potting soil dust bother your eyes?',
        a: `Dry potting mix, perlite and peat can make fine dust that makes eyes feel gritty. Dampening media before mixing and washing hands before touching your face help, and anything stuck in the eye needs an eye doctor or urgent care.`,
      },
      {
        q: 'Where should greenhouse workers keep eye drops?',
        a: `Somewhere that stays within the label’s storage range, such as a break room or locker. A greenhouse bench on a sunny day or a parked truck can get warmer than the range the label allows.`,
      },
      {
        q: 'What should I do if fertilizer splashes in my eye?',
        a: `Rinse right away as your workplace’s safety instructions direct, then call Poison Control or get emergency care. A lubricating eye drop is not a substitute for rinsing or medical help after a chemical splash.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-tailors-and-seamstresses',
    title: 'Dry eyes for tailors and seamstresses',
    description:
      'Fine thread, dark fabric, bright task lamps, steam presses and wedding-season deadlines. How tailors and seamstresses can ease dry, tired eyes at work.',
    category: 'using',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Tailors and seamstresses get dry eyes mostly from close focus: threading needles, matching dark thread on dark cloth and hand-finishing hems all cut blinking down, while task lamps, pressing steam and a warm shop dry the tear film between blinks. Break up close work, set lights to the side, keep the iron’s heat off your face, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Why alterations work dries your eyes' },
      {
        p: `Each blink spreads the tear film’s oil, water and mucus layers across the eye, and the oil keeps the water from evaporating too quickly. When you focus on something small and close, your blink rate drops and many blinks don’t close all the way. An hour of hand-basting a lining, picking out a seam or setting a zipper by eye can pass with far fewer full blinks than usual. The film thins, the eyes start to sting or feel heavy, and the thread seems harder to see than it did in the morning.`,
      },
      {
        p: `A professional shop adds more: a steady flow of customers, the pressure of promised pickup dates, and work that rarely lets you look up. Our guide on [dry eyes when sewing or knitting](/guides/dry-eyes-when-sewing-or-knitting) covers home sewing; this one is about the full workday at the table and the machine.`,
      },
      { h: 'Dark thread, black wool and the eye strain of matching' },
      {
        p: `Navy on navy, charcoal on black, a black tuxedo stripe under a lamp: the hardest matching jobs are the darkest. Peering into low-contrast fabric makes people lean closer and hold their gaze longer, which is exactly what thins the tear film. A few changes help:`,
      },
      {
        list: [
          `Lay a light-colored cloth or card under dark fabric while threading or picking stitches, so the thread stands out.`,
          `Do the darkest, finest work earlier in the day, before your eyes have done hours of close focus.`,
          `Use a needle threader for fine needles instead of squinting through the eye of the needle.`,
          `After each seam, look across the shop for a slow count of five and blink fully a few times.`,
        ],
      },
      { h: 'Setting up task lights' },
      {
        p: `Bright light helps you see a stitch, but a lamp aimed at your face or bouncing off a shiny lining makes you squint. Squinting shortens blinks. Position machine lights and gooseneck lamps to the side of your work, below eye level, and angled down onto the fabric. Satin, sequins and metallic trims throw glare, so tilt the piece slightly or move the lamp until the reflection leaves your line of sight. If a magnifier lamp is part of your setup, look away from it between tasks instead of keeping your eyes on it for a whole job.`,
      },
      { h: 'Pressing, steam and the warm back room' },
      {
        p: `The pressing station brings heat and moving air right up to face height. Steam rising from a garment can feel soothing for a moment, but the dry heat from the iron, a steam press or a heated table blows across your face as you work, and the shop around it often runs warm. Keep your face back from the plate when you lift a press, turn your head away from the burst of steam, and avoid leaning over the iron while reading a tag or measurement. If the back room has a space heater in winter, point it at your legs.`,
      },
      {
        p: `Never use steam to rinse or warm your eyes. Burns from steam or a hot iron, or anything that gets into the eye, need prompt medical care.`,
      },
      { h: 'Fitting rooms, chalk and lint' },
      {
        p: `Chalk, lint and loose fibers float up when you mark hems, brush off a jacket or clip threads at the serger. These don’t usually cause dryness, but they can make dry eyes feel scratchier. Brush garments away from your face, empty and wipe the serger’s trimmings bin regularly, and wash your hands after handling chalk before touching your eyes or using drops. A fiber or bit of chalk that stays stuck after a gentle rinse with clean water needs an eye doctor, not more drops.`,
      },
      { h: 'Wedding season and holiday rush' },
      {
        p: `Most shops have their peaks: bridesmaid dresses and suits in spring and summer, prom alterations, and in November and December, holiday party clothes and hemming gifts. Those weeks bring longer hours at the machine and more hand finishing. Plan short eye breaks the way you plan pickups. Even standing up to greet a customer can be a reset: look up, blink fully, and give your eyes a moment before going back to the seam.`,
      },
      { h: 'What the Quell label covers' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel gives its Uses: {uses}. Its directions: {directions}. Many tailors fit those around opening, lunch and the late afternoon, when close work has added up.`,
      },
      {
        list: [
          `Wash chalk and lint off your hands first.`,
          `Keep the tip clean, as the panel says: {tip}.`,
          `Store the bottle away from the pressing station and the window in summer: {storage}.`,
          `Note the panel’s caution: {warnings}.`,
        ],
      },
      {
        p: `The label doesn’t cover contact lenses or using Quell with other eye drops; an eye doctor or pharmacist can answer those questions. The whole label is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When close work points to something else' },
      {
        p: `If you find yourself holding work farther away, or the thread blurs in a way blinking doesn’t fix, that’s worth an eye exam rather than more light or more drops. And the label’s stop-use line is clear: {stopUse} An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for the signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes burn after a day of alterations?',
        a: `Close, careful work like threading, hand-finishing and matching dark thread cuts down on full blinks, so the tear film thins. Heat from pressing and bright task lights add to it. Regular breaks to look up and blink help.`,
      },
      {
        q: 'How should a tailor position a sewing lamp?',
        a: `To the side of the work, below eye level and angled down onto the fabric, so light lands on the stitches instead of your face. Tilt shiny fabrics until the glare leaves your line of sight.`,
      },
      {
        q: 'Is steam from an iron bad for dry eyes?',
        a: `The steam itself passes quickly, but the iron, press and heated table push hot, dry air toward your face. Keep your head back when lifting a press and turn away from bursts of steam.`,
      },
      {
        q: 'Can I use eye drops at my sewing machine?',
        a: `Yes, if you follow the label: wash your hands first, keep the tip from touching anything, and use it as the directions say. Store the bottle away from the pressing station’s heat.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-phlebotomists',
    title: 'Dry eyes for phlebotomists',
    description:
      'Bright draw-station lights, tiny tube labels, dry building air and early rounds. Why phlebotomists’ eyes dry out, and what helps between patients.',
    category: 'using',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Phlebotomists’ eyes dry out because the job asks for intense, close focus under bright light in dry, climate-controlled buildings. Finding a vein, lining up a needle and reading small tube labels all cut blinking, while vents and masks move air across the eyes. Blink fully between patients, angle lights off your face, wash up before touching your eyes, use a lubricating drop as labeled, and see a doctor about any splash or pain.`,
      },
      { h: 'Why your eyes feel dry by the end of a draw shift' },
      {
        p: `The tear film is a thin coat of oil, water and mucus that each blink renews. The oil slows evaporation, and blinking is what keeps the whole film even. When your attention narrows to a point, such as a faint vein in the crook of an elbow, you blink less, and many blinks stop halfway. A string of patients can mean an hour or more of that kind of focus with only short gaps. Add the dry air most hospitals, clinics and labs keep, and the film has less time and less help to recover between blinks.`,
      },
      { h: 'Bright lights and small targets' },
      {
        p: `Draw stations are lit brightly for good reason, but a lamp shining toward your face, or light bouncing off a white tray, makes you squint, and squinting shortens blinks. Small print adds to the load: patient wristbands, requisitions and tube labels all need careful reading, often more than once, to match the right patient to the right tubes.`,
      },
      {
        list: [
          `Aim adjustable lights at the patient’s arm from the side, not from behind the arm toward you.`,
          `Hold labels at a comfortable reading distance and in good light, rather than leaning in to squint.`,
          `After each patient, look across the room for a moment and blink slowly two or three times.`,
          `If small print has started to look harder to read than it used to, book an eye exam rather than working around it.`,
        ],
      },
      { h: 'Hospital air, masks and early rounds' },
      {
        p: `Inpatient phlebotomists often start rounds in the early morning, walking floor to floor through heated or cooled hallways before the day shift is fully in. That air is usually dry. A mask that doesn’t sit snugly over the bridge of the nose can push each breath upward across the eyes, which dries them faster and fogs glasses. Pinch the mask’s nose wire to fit, and wear glasses or a face shield the way your workplace requires.`,
      },
      {
        p: `Short sleep before an early shift also tends to show up in the eyes. Many phlebotomists say their eyes feel worst in the first hour of rounds and again near the end. Our guide to [dry eyes on long nursing shifts](/guides/dry-eyes-on-long-nursing-shifts) covers more about hospital air across a long shift.`,
      },
      { h: 'Screens at the draw station' },
      {
        p: `Orders, labels and patient records live on screens, so a phlebotomist’s day moves back and forth between the computer and the patient. Screens slow blinking too. Set the monitor slightly below eye level so your eyes aren’t opened wide to look up at it, turn its brightness to match the room, and make a habit of a full blink each time you print a label.`,
      },
      { h: 'Mobile draws, donor centers and outpatient labs' },
      {
        p: `Not every phlebotomist works in a hospital. Mobile phlebotomists drive between homes and facilities, so car vents and winter defrosters become part of the workday; point them away from your face. Donor centers and outpatient labs can run long stretches of back-to-back patients with little time to look up. Whatever the setting, the fix is similar: short, deliberate breaks to look into the distance and blink, and keeping moving air off your face.`,
      },
      { h: 'A splash is not a dry eye' },
      {
        p: `Blood or any body fluid splashing into an eye is a workplace exposure, not a dryness problem. Rinse right away as your facility’s exposure protocol directs, report it to your supervisor, and get the medical follow-up the protocol calls for. Don’t use a lubricating drop in place of any of those steps. The same goes for a splash of disinfectant or cleaner: rinse and call Poison Control or seek care as your workplace instructs.`,
      },
      { h: 'Using a lubricating drop between patients' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses on the Drug Facts panel: {uses}. Its directions: {directions}. Many people place those doses before the shift, at a mid-shift break and toward the end of the day.`,
      },
      {
        list: [
          `Remove gloves and wash your hands before using any eye drop; never use one with gloves on.`,
          `Use drops in a break room or other area your workplace allows, not at the draw station.`,
          `Keep the bottle clean, as the label says: {tip}.`,
          `Store it as the panel directs: {storage}.`,
        ],
      },
      {
        p: `The panel’s caution reads: {warnings}. It doesn’t give directions for contact lenses or for using Quell with other eye drops, so ask an eye doctor or pharmacist about those. The complete label is on our [Drug Facts page](/drug-facts), and [dry eyes for operating room staff](/guides/dry-eyes-for-operating-room-staff) covers another bright, focused clinical setting.`,
      },
      { h: 'When to get your eyes checked' },
      {
        p: `Healthcare workers often put their own symptoms last. The label doesn’t leave room for that: {stopUse} An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for signs that shouldn’t wait until after your shift.`,
      },
    ],
    faq: [
      {
        q: 'Why do phlebotomists get dry eyes?',
        a: `Finding veins and reading small labels takes close focus, which cuts down on blinking. Bright lights, dry building air, screens and masks that push air upward all speed evaporation from the tear film.`,
      },
      {
        q: 'Can phlebotomists use eye drops at work?',
        a: `Yes, if your workplace allows it: remove gloves, wash your hands, and use the drop in a break area rather than at the draw station. Follow the label’s directions and storage line.`,
      },
      {
        q: 'What should a phlebotomist do if blood splashes in their eye?',
        a: `Handle it as a workplace exposure: rinse right away as your facility’s protocol directs, report it, and get the medical follow-up the protocol requires. A lubricating eye drop is not part of that response.`,
      },
      {
        q: 'Do masks make your eyes dry at work?',
        a: `A loose mask can send each breath up across the eyes, which dries them faster and fogs glasses. Pinching the nose wire for a snug fit usually helps.`,
      },
    ],
  },
  {
    slug: 'can-two-people-use-the-same-email-to-order',
    title: 'Can two people use the same email to order?',
    description:
      'A couple or household can share one email for eye drop orders, but receipts, tracking, order lookup and the reorder reminder all follow that address.',
    category: 'ordering',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Yes. Checkout doesn’t stop two people from ordering with the same email address, and many couples and households do. Just know that everything about each order follows that address: the receipt with prices, the shipping email, order lookup and the one reorder reminder. A second order with the same email can also cancel out the first order’s reminder. If you each want your own reminders and records, use separate emails.`,
      },
      { h: 'What goes to the email on an order' },
      {
        p: `When you check out as a guest, the email you type is how the shop reaches you about that order. For each paid order, that address receives:`,
      },
      {
        list: [
          `The confirmation email, with the order number, every item and price, the shipping charge or “Free,” the total and the shipping address.`,
          `The shipping email when the order leaves Brentwood, Tennessee, with tracking when a number is available.`,
          `One reorder reminder, timed to the number of bottles on the order.`,
        ],
      },
      {
        p: `The same address is also half of the key to the [track your order](/orders) page, which asks for the order number and the email used at checkout. Anyone with both can see that order’s items, prices and address.`,
      },
      { h: 'The reorder reminder catch' },
      {
        p: `This is the part shared inboxes most often trip over. The reminder goes out once per paid order, and not at all if someone has already ordered again with the same email. That rule exists so people don’t get nagged after they’ve reordered, but in a shared inbox it can backfire:`,
      },
      {
        list: [
          `You order two bottles for yourself in October.`,
          `Your spouse orders one bottle for themselves in November, using the same email.`,
          `Your reminder may never arrive, because the system sees a newer order from that address.`,
        ],
      },
      {
        p: `If you rely on the reminder, either use separate emails or keep your own note of when you’re likely to run low. The reminder is timed at about 35 days per bottle at the labeled dose; our guide on [when the reorder reminder comes](/guides/when-does-the-reorder-reminder-email-come) explains the math. The reminder greets you by the first name on the shipping address, so a shared inbox will at least show whose order it’s about.`,
      },
      { h: 'Sharing an email can be the simpler choice' },
      {
        p: `For some households, one address is exactly right. If one person handles all the ordering, pays the bills and keeps the records, a single inbox puts every receipt in one place. It also works well when you order for the whole household at once: one checkout, one confirmation, one shipping email. Our guide to [ordering eye drops for your household](/guides/ordering-eye-drops-for-your-household) covers that kind of order.`,
      },
      { h: 'When separate emails make more sense' },
      {
        list: [
          `You each want your own reorder reminder.`,
          `You pay with different cards, or one of you uses an HSA or FSA card and needs clean records for the plan.`,
          `One of you wants to send the other a gift without the confirmation, with its prices, landing in a shared inbox.`,
          `You want to look up your own orders without asking the other person which order number is whose.`,
        ],
      },
      {
        p: `Our page on [which email to use when ordering](/guides/which-email-to-use-when-ordering-eye-drops) has more on picking an address that will still work in a year.`,
      },
      { h: 'Sharing a computer or a browser' },
      {
        p: `A related surprise: checkout remembers your name, address, email and phone number in the browser on that device, not on the shop’s side. If two people order from the same laptop, the second person will see the first person’s details filled in. Change them before paying, or use the “Not you? Clear details” link that appears on the [cart](/cart) page when details have been filled in from an earlier visit. Card details are never saved on the site, so they aren’t part of that.`,
      },
      { h: 'One email, two people, two bottles' },
      {
        p: `However you set up the email, each person should have their own bottle. The bottle’s tip comes close to the eye, and the label says: {tip}. Give each person a bottle and mark them apart with initials or a strip of tape. Read the label’s caution for each of you before ordering: {warnings}. The directions are the same for everyone it covers: {directions}. The whole panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Refunds and calls on a shared order' },
      {
        p: `Each order is its own record, with its own refund window. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back, and the refund goes to whoever paid. When you call {phone} ({hours}) about an order, have the order number and the email used at checkout ready; with a shared email, also say whose name was on the shipping address, so the right order comes up quickly.`,
      },
    ],
    faq: [
      {
        q: 'Can my husband and I use the same email for online orders?',
        a: `On this site, yes. Each order’s receipt, shipping email and reorder reminder go to that shared address, and either of you can look up an order with its number and that email.`,
      },
      {
        q: 'Why didn’t I get my eye drop reorder reminder?',
        a: `One common reason is that someone ordered again with the same email; the reminder isn’t sent if a newer order from that address exists. It also only goes out once, and only for paid orders.`,
      },
      {
        q: 'Can someone see my order if we share an email?',
        a: `Yes. The confirmation email lists items, prices and the address, and anyone with the order number and the shared email can open that order on the order lookup page.`,
      },
      {
        q: 'Should couples use separate emails to order eye drops?',
        a: `If you each want your own reorder reminder, pay with different cards or plan to send each other gifts, separate emails keep things clearer. One shared address works well when one person handles all the ordering.`,
      },
    ],
  },
  /*
   * Source checked 2026-11-25 for can-i-use-my-hsa-if-i-switch-to-a-ppo:
   * - https://www.irs.gov/publications/p969 (for 2025 returns; local copy in
   *   .daily-job/d/p969.txt). Quoted points: "To be an eligible individual and
   *   qualify for an HSA contribution, you must meet the following
   *   requirements" (HDHP on the first day of the month, no other health
   *   coverage except what is permitted, not enrolled in Medicare, not a
   *   dependent); "You can receive tax-free distributions from your HSA to pay
   *   or be reimbursed for qualified medical expenses you incur after you
   *   establish the HSA"; non-qualified distributions are subject to income tax
   *   and may be subject to an additional 20% tax; "You don't have to make
   *   withdrawals from your HSA each year"; balances "are generally carried
   *   over to the next year"; the HSA is portable; contribution limits depend
   *   on the dates you become and cease to be eligible; last-month rule
   *   (December 1) and its testing period (through December 31 of the next
   *   year), failing which contributions are included in income plus a 10%
   *   additional tax. OTC medicine "whether or not prescribed" is stated in
   *   the FSA and HRA sections.
   */
  {
    slug: 'can-i-use-my-hsa-if-i-switch-to-a-ppo',
    title: 'Can I use my HSA if I switch to a PPO?',
    description:
      'Switching off a high-deductible plan stops new HSA contributions, not spending. What IRS Publication 969 says, and how it applies to OTC eye drops.',
    category: 'ordering',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Generally, yes. IRS Publication 969 ties the high-deductible plan requirement to contributing to an HSA, while tax-free withdrawals depend on spending the money on qualified medical expenses incurred after the account was opened. So after a switch to a PPO, the money already in your HSA can still pay for things like over-the-counter eye drops; you just can’t add new contributions for months you’re not eligible. Confirm details with your HSA custodian.`,
      },
      { h: 'Why the question comes up in November' },
      {
        p: `Open enrollment season is when many people compare a high-deductible health plan (HDHP) with a PPO or another plan for the coming year. If the PPO wins, people often worry that the HSA balance they built up will be stuck or lost. Publication 969 describes an HSA as portable: it stays with you, much as it does when you change employers. Our guide on [using your HSA after leaving a job](/guides/can-you-use-hsa-for-eye-drops-after-leaving-a-job) covers the job-change version of the same question.`,
      },
      { h: 'Contributing vs. spending: the two rules' },
      {
        p: `Publication 969 opens its eligibility list with the phrase “To be an eligible individual and qualify for an HSA contribution.” The requirements that follow are about putting money in:`,
      },
      {
        list: [
          `You’re covered by an HDHP on the first day of the month.`,
          `You have no other health coverage, apart from the kinds the publication permits.`,
          `You aren’t enrolled in Medicare.`,
          `No one else can claim you as a dependent on their tax return.`,
        ],
      },
      {
        p: `Spending is covered in a different section. There, the publication says you can receive tax-free distributions to pay or be reimbursed for qualified medical expenses you incur after you establish the HSA. It also says you don’t have to take withdrawals each year, and that money left at the end of a year generally carries over. Nothing in that section asks whether you still have an HDHP on the day you spend.`,
      },
      { h: 'Do OTC eye drops still count after the switch?' },
      {
        p: `Whether an expense qualifies depends on what it is, not which health plan you have that month. Since the CARES Act, the IRS has counted over-the-counter medicines as medical care without a prescription; Publication 969’s health FSA and HRA sections spell out over-the-counter medicine “whether or not prescribed.” Lubricating eye drops sold with a Drug Facts label are an over-the-counter medicine. [Why OTC eye drops count for HSA and FSA](/guides/why-otc-eye-drops-count-for-hsa-and-fsa) has the background.`,
      },
      {
        p: `If a withdrawal is used for something that isn’t a qualified medical expense, the publication says it’s subject to income tax and may face an additional 20 percent tax. Keeping order confirmations makes it easy to show what each purchase was.`,
      },
      { h: 'What changes when you leave the HDHP' },
      {
        p: `Contributions are where the switch matters. The publication says your contribution limit depends on the dates you become and stop being an eligible individual, so a partial year usually means a smaller limit. Payroll HSA deductions usually stop with the HDHP, but check that your employer’s system actually stops them.`,
      },
      {
        p: `There’s also a trap for people who used the last-month rule. Under that rule, someone eligible on December 1 (for most people) is considered eligible for the whole year. Publication 969 then requires them to stay eligible through a testing period ending December 31 of the following year. If you contributed the full year’s amount under that rule and then switch to a PPO during the testing period, the publication says part of those contributions becomes income, plus a 10 percent additional tax. If that might be you, talk to a tax professional before the switch.`,
      },
      { h: 'Before the new plan year starts' },
      {
        list: [
          `Check your current HSA balance and whether your custodian charges a fee once payroll contributions stop.`,
          `Find out whether your new plan comes with a health FSA. Publication 969 has rules about how a general-purpose health FSA affects HSA eligibility, which matters if you ever go back to an HDHP.`,
          `Keep the HSA debit card; it should keep working for qualified purchases unless your custodian tells you otherwise.`,
          `Save receipts for anything you buy with HSA money, in case you’re ever asked to show it was a qualified expense.`,
        ],
      },
      { h: 'Paying for Quell with HSA money' },
      {
        p: `Quell is a lubricating eye drop sold over the counter, with a Drug Facts label on the carton; you can read it on our [Drug Facts page](/drug-facts). An HSA debit card works at checkout like any other card. If you’d rather pay with a personal card and reimburse yourself from the HSA later, that works too. Shipping is {shipping} per order, or free on {freeBottles} or more bottles. Your confirmation email lists the items, prices and order date, which is the record most custodians want. Our guide on [keeping receipts for HSA eye drops](/guides/do-i-need-to-keep-receipts-for-hsa-eye-drops) explains what to save.`,
      },
      { h: 'What plan rules can change' },
      {
        p: `Publication 969 is the federal rulebook, but your HSA custodian runs the account and your employer runs the health plan. Card limits, fees, and how quickly reimbursements post vary. If something in this guide doesn’t match what your custodian or plan administrator tells you about your own account, follow them, and take tax questions to a tax professional. This page explains the rules; it isn’t tax advice.`,
      },
    ],
    faq: [
      {
        q: 'Can I still use my HSA if I no longer have a high-deductible plan?',
        a: `In general, yes. IRS Publication 969 frames the HDHP requirement around contributions, while tax-free withdrawals depend on paying for qualified medical expenses incurred after the HSA was opened. Check with your custodian about fees and card access.`,
      },
      {
        q: 'Can I keep contributing to my HSA after switching to a PPO?',
        a: `Not for months when you aren’t an eligible individual. Publication 969 requires HDHP coverage on the first day of the month, among other conditions, to contribute, so a switch usually lowers that year’s limit.`,
      },
      {
        q: 'Does the last-month rule matter if I change health plans?',
        a: `It can. If you contributed a full year’s amount under the last-month rule and then lose eligibility during the testing period, Publication 969 says part of the contributions becomes income plus a 10 percent additional tax.`,
      },
      {
        q: 'Can I buy eye drops with my HSA card after leaving an HDHP?',
        a: `Generally, yes, as long as the eye drops are a qualified medical expense and were bought after the HSA was established. Over-the-counter eye drops count without a prescription; keep the order confirmation as your receipt.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-an-adult-grandchild',
    title: 'Christmas gifts for an adult grandchild',
    description:
      'Gift ideas for grown grandkids in college, a first job or a first apartment, plus how to order online and ship it to them without a hitch.',
    category: 'seasonal',
    addedOn: '2026-11-25',
    body: [
      {
        p: `The gifts adult grandchildren tend to use are practical ones that fit the stage they’re in: a good desk lamp or a warm scarf for a student, sturdy sunglasses or a travel mug for someone starting a job, small comforts for a first apartment. If they mention dry eyes from screens or a heated dorm, a lubricating eye drop can be one useful piece of a gift, not the whole thing.`,
      },
      { h: 'Start with where they are in life' },
      {
        p: `“Adult grandchild” covers a lot of ground, from a 19-year-old in a dorm to a 35-year-old with kids of their own. The easiest way to choose is to think about what their days look like right now, then pick something that makes an ordinary part of the day a little easier. A few questions help:`,
      },
      {
        list: [
          `Where do they spend most of their waking hours: a classroom, an office, a truck, a hospital, outdoors?`,
          `Do they live somewhere with long winters, dry air or a lot of driving?`,
          `Have they moved recently, and is their place still half furnished?`,
          `What have they complained about lately, in a call or a text, that a small thing could fix?`,
        ],
      },
      { h: 'Ideas for a grandchild in college' },
      {
        p: `Students live in small rooms with heat they can’t control, study late on laptops, and walk across campus in all weather. Gifts that hold up:`,
      },
      {
        list: [
          `A desk lamp with an adjustable arm, so light falls on the page instead of in their eyes.`,
          `A small humidifier for a dorm room, if the school’s rules allow one.`,
          `Warm gloves, a hat and a scarf that can cover the face on windy walks.`,
          `A refillable water bottle and a sturdy backpack.`,
          `Prepaid groceries or a meal out when they’re home on break.`,
        ],
      },
      {
        p: `Timing matters with students. Many leave campus for winter break in December, so a package sent to a dorm can sit in a closed mailroom. Our guide to [shipping to a college student on winter break](/guides/shipping-eye-drops-to-a-college-student-on-winter-break) covers where to send it.`,
      },
      { h: 'Ideas for a first job or a new apartment' },
      {
        p: `A grandchild in their twenties may be working long hours on screens, commuting in the dark, or setting up a first place with very little in it. Useful gifts here are often things people don’t buy for themselves:`,
      },
      {
        list: [
          `An insulated travel mug or lunch bag for the commute.`,
          `Wraparound sunglasses for driving into a low winter sun.`,
          `A good set of kitchen knives, a cast-iron pan or a toolkit for a first apartment.`,
          `A throw blanket and a reading light for a living room that’s still bare.`,
          `A gift of your time: a standing monthly lunch, a phone call on Sundays, or help with a move.`,
        ],
      },
      { h: 'If they’ve mentioned dry eyes' },
      {
        p: `Lots of young adults spend their days on laptops and phones, and screens slow blinking, which lets the tear film evaporate between blinks. Heated dorms, dry offices and long drives add to it. If your grandchild has said their eyes feel dry or gritty at the end of the day, a bottle of lubricating drops tucked in with a lamp or a scarf can be a thoughtful touch.`,
      },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives its Uses as: {uses}. It comes as a {size} bottle, and the label notes its appearance: {milky}. Two cautions before you buy: ask first if they already use drops from their eye doctor, and read the label’s caution, which says: {warnings}. The full panel is on our [Drug Facts page](/drug-facts). Eye drops shouldn’t stand in for a checkup; if they mention pain or vision changes, encourage them to see an eye doctor.`,
      },
      { h: 'Ordering online and shipping to them' },
      {
        p: `Plenty of grandparents order gifts online now, and Quell’s checkout is short. A few tips specific to gifts:`,
      },
      {
        list: [
          `Use your own email address at checkout, so the confirmation with the prices comes to you.`,
          `Type your grandchild’s name and current address as the shipping address, and double-check apartment or unit numbers.`,
          `Know there’s no gift message or gift wrap option; if you want to include a card, ship it to yourself and pass it on.`,
          `When the shipping email arrives, you can forward it to them; it has tracking but no prices.`,
        ],
      },
      {
        p: `Shipping is {shipping}, or free on orders of {freeBottles} or more bottles, which can make sense if you’re sending one to each of several grandchildren at the same address. Christmas is Friday, December 25, and no delivery date is promised, so order early in December. Our guide on [sending Quell as a gift](/guides/sending-quell-as-a-gift) has more, and if you’d like help on the phone, call {phone} during {hours}.`,
      },
      { h: 'If the gift isn’t a fit' },
      {
        p: `Unopened bottles can be refunded within {returnDays} days of delivery, and the refund goes to whoever paid, which would be you. The bottles don’t need to be sent back. Opened bottles can’t be refunded. For more gift ideas by person, see [Christmas gifts for adult children](/guides/christmas-gifts-for-adult-children) and the rest of our [gifts and holidays guides](/guides/topic/seasonal).`,
      },
      { h: 'What matters more than the gift' },
      {
        p: `The gifts that get kept for years are often the ones tied to the person who gave them: a note in your handwriting, a family recipe written out, a photo from when they were small, a story about your first job or first apartment. Whatever you send, a few lines from you in the box or the card will probably outlast it.`,
      },
    ],
    faq: [
      {
        q: 'What do you get an adult grandchild for Christmas?',
        a: `Something practical for the stage they’re in: a desk lamp or warm winter gear for a student, a travel mug or sunglasses for a commuter, kitchen tools for a first apartment. A handwritten note makes almost any gift more personal.`,
      },
      {
        q: 'Is it OK to give a grown grandchild money for Christmas?',
        a: `Many adult grandchildren appreciate it, especially students and people setting up a first home. Pairing it with a short note about what you hope it helps with keeps it personal.`,
      },
      {
        q: 'Should I ship a gift to my grandchild’s dorm in December?',
        a: `Check their schedule first. Many students leave for winter break in December, and a package can sit in a closed mailroom. Shipping to where they’ll be for the holidays is usually safer.`,
      },
      {
        q: 'Are eye drops a thoughtful gift for a grandchild who studies a lot?',
        a: `They can be, as one part of a gift, if your grandchild has mentioned dry or gritty eyes from screens. Ask first if they already use drops from their eye doctor, and pair it with something like a desk lamp.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-cleaning-house-before-holiday-guests',
    title: 'Dry eyes cleaning house before holiday guests',
    description:
      'Dusting, vacuuming, cleaning sprays and a furnace running for hours can leave your eyes stinging before guests arrive. How to clean without the burn.',
    category: 'seasonal',
    addedOn: '2026-11-25',
    body: [
      {
        p: `The big clean before holiday guests stirs up dust, sends cleaning-product vapor into the air and keeps you staring at baseboards and grout for hours, usually with the heat running. All of that can leave eyes dry and stinging. Open a window while you use sprays, dust with a damp cloth, take breaks, wash your hands before touching your eyes, and get help right away if a product splashes into an eye.`,
      },
      { h: 'Why cleaning day is hard on your eyes' },
      {
        p: `Each blink spreads the tear film, a thin coat of oil, water and mucus, across the eye. Dry, moving air thins it, and dust and fumes make a thin film feel worse. Holiday cleaning stacks those together. The furnace is running because it’s cold out, the vacuum is blowing exhaust, dust is drifting off shelves that haven’t been touched since last year, and you’re focused hard on small spots, which cuts down on blinking. By the time the guest room is ready, your eyes can feel like you’ve been out in the wind.`,
      },
      { h: 'Dust: wipe it, don’t fling it' },
      {
        p: `Dry dusting and feather dusters lift dust into the air at eye level, where it settles back down on you. A few swaps keep more of it out of your eyes:`,
      },
      {
        list: [
          `Use a damp microfiber cloth instead of a dry duster, and fold it to a clean side often.`,
          `Work from the top of a room down, so dust from shelves lands on floors you haven’t vacuumed yet.`,
          `Turn ceiling fans off before cleaning the blades, and wipe them from a stable step stool with a cloth or pillowcase that catches the dust.`,
          `Empty the vacuum canister outdoors or into a bag held low, not at face height over the trash can.`,
          `Point the vacuum’s exhaust away from your face when you work around furniture.`,
        ],
      },
      { h: 'Boxes from the attic, basement and closet' },
      {
        p: `Decorations, extra bedding and the good dishes come out of storage this time of year, and so does the dust on their boxes. Carry boxes outside or to a garage to open them, shake out tablecloths and quilts outdoors with the wind at your back, and wash your hands before you rub your eyes. If you’re working in a dusty attic, glasses or safety glasses keep grit out better than nothing at all.`,
      },
      { h: 'Cleaning sprays and fumes' },
      {
        p: `Bathroom cleaners, oven cleaners and glass sprays can sting the eyes even when nothing lands in them, especially in a small, closed room. Read and follow each product’s label, which is the authority on ventilation and protection. A few general habits help:`,
      },
      {
        list: [
          `Open a window or run the bathroom fan while you use sprays.`,
          `Spray onto the cloth rather than into the air when you can.`,
          `Take a break outside or in another room if your eyes start to burn.`,
          `Use one product at a time, and never combine products unless the label says to.`,
        ],
      },
      {
        p: `A splash is an emergency, not a dry-eye moment. If a cleaning product gets into an eye, rinse it with clean water right away as the product’s label directs and call Poison Control or seek emergency care. Don’t reach for lubricating drops instead.`,
      },
      { h: 'Grout, baseboards and the tiny spots' },
      {
        p: `Scrubbing grout lines and wiping baseboards means long stretches of close, careful looking. People blink less during that kind of focus. Set a timer for every 20 minutes or so, stand up, look out a window at something far away and blink fully a few times. It also gives your back a rest.`,
      },
      { h: 'The guest room: dry for you, dry for them' },
      {
        p: `A guest room that’s been closed off is often the driest room in the house once the heat comes on for visitors. If you have a humidifier, clean it and set it up there a day ahead; if not, closing the register partway can keep the air from blowing straight across the bed. Our guide to [hosting houseguests in a heated house](/guides/hosting-thanksgiving-houseguests-in-a-heated-house) has more ideas for comfortable rooms.`,
      },
      { h: 'Using a lubricating drop after the cleaning' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives its Uses: {uses}. Its directions: {directions}. After a day of cleaning, wash your hands well, since cleaning residue on fingers shouldn’t go anywhere near the eye, and follow the label’s tip line: {tip}.`,
      },
      {
        p: `Keep the bottle out of the cleaning caddy and away from the products under the sink. Its storage line reads: {storage}. The panel’s caution reads: {warnings}. All of it is on our [Drug Facts page](/drug-facts). If you clean for a living rather than once a year, our guide for [housekeepers and cleaners](/guides/dry-eyes-for-housekeepers-and-cleaners) goes further.`,
      },
      { h: 'When the sting doesn’t fade' },
      {
        p: `Eyes that feel dry after a long cleaning day usually settle with rest. Some symptoms need more. The label’s stop-use line says: {stopUse} Something stuck in the eye, any chemical splash, or pain that starts suddenly needs prompt care. An eye doctor can find the cause and decide what to do. Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes burn when I clean the house?',
        a: `Dust in the air, vapor from cleaning sprays, a running furnace and long stretches of close focus all strain the tear film. Opening a window, dusting with a damp cloth and taking breaks usually help.`,
      },
      {
        q: 'Can dusting make your eyes dry?',
        a: `Dry dusting throws fine particles into the air at eye level, which can make dry eyes feel scratchier. A damp microfiber cloth catches dust instead of moving it around.`,
      },
      {
        q: 'What should I do if bathroom cleaner gets in my eye?',
        a: `Rinse the eye with clean water right away as the product’s label directs, then call Poison Control or seek emergency care. Lubricating eye drops are not a substitute for rinsing or medical help.`,
      },
      {
        q: 'How do I keep a guest room from feeling dry in winter?',
        a: `Set up a clean humidifier a day before guests arrive, and keep the heating register from blowing across the bed. Closing the door also keeps the room out of the main airflow.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-volunteering-at-a-holiday-meal',
    title: 'Dry eyes volunteering at a holiday meal',
    description:
      'Steam tables, hot ovens, dish machines and hours on your feet at a community dinner. How holiday meal volunteers can keep their eyes comfortable.',
    category: 'seasonal',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Volunteering at a Thanksgiving or Christmas community meal puts your eyes through a lot: blasts of oven heat, steam off serving pans and dish machines, a hall heated for a crowd, and hours of focus without much blinking. Stand back from heat and steam, take short breaks off the line, wash your hands before touching your eyes, and use a lubricating drop as labeled during a break, never at the serving table.`,
      },
      { h: 'Why a holiday kitchen dries your eyes' },
      {
        p: `The tear film relies on an oily top layer to slow evaporation and on regular blinking to keep it spread evenly. Heat speeds evaporation, and moving air does too. A busy church or community kitchen on Thanksgiving morning has both: ovens opened every few minutes, burners running, exhaust hoods pulling air past your face, and a hall warmed for hundreds of guests. Add the focus of portioning food quickly and evenly, and blinks get shorter and fewer. It’s common to finish a shift with eyes that feel hot and gritty.`,
      },
      { h: 'Oven doors and roasting pans' },
      {
        p: `Opening an oven full of turkeys releases a wall of dry heat at face height. It’s easy to lean right into it to check the pans. A few habits help:`,
      },
      {
        list: [
          `Step to the side of the oven before opening the door, and let the first rush of heat escape before you lean in.`,
          `Pull racks out toward you rather than putting your face into the oven.`,
          `Keep your head back when lifting foil from a roasting pan.`,
          `Let the volunteer with glasses or safety glasses handle the hottest jobs if your kitchen has a choice.`,
        ],
      },
      { h: 'Steam tables and the serving line' },
      {
        p: `On the serving line, the steam table sits right under your face for an hour or two at a stretch. Steam can feel soothing at first, but the hot air rising from the wells and lids, plus the warm room, keeps drying the eyes. Step back between guests, lift lids away from your face, and trade places with someone on drinks or desserts now and then. Bright overhead lights in many halls add glare off stainless steel, so look up and away from the pans for a moment every few minutes.`,
      },
      {
        p: `Food safety comes first on the line. Volunteers usually wear gloves and hairnets and aren’t supposed to touch their faces while serving. That’s good for your eyes too: rubbing them with fingers that have handled food or sanitizer can make irritation worse.`,
      },
      { h: 'The dish room and sanitizer buckets' },
      {
        p: `Dish machines throw out heavy steam each time the door opens, and the dish room is often the hottest corner of the kitchen. Stand to the side of the door as it lifts and let the steam clear before you reach in. Sanitizer buckets and cleaning sprays can sting if they splash. If a chemical gets into an eye, rinse right away as the kitchen’s safety posting or the product label directs, and call Poison Control or get medical help. A lubricating drop isn’t for that.`,
      },
      { h: 'Setup, cleanup and meal delivery' },
      {
        p: `Many holiday meals also need volunteers outside the kitchen. Early setup can mean unloading supplies in a cold parking lot, then coming into a hot building. Meal delivery means hours in a car with the heater running, reading addresses and phone screens between stops. Point the car’s vents away from your face, and take a moment at each stop to look up and blink before checking the next address. Cleanup at the end brings sweeping, stacking chairs and taking out trash, which raises dust in a tired room.`,
      },
      { h: 'Pacing a long volunteer shift' },
      {
        p: `Holiday meals often run longer than planned, and volunteers tend to skip breaks so no one is left short-handed. Tell your shift leader you’re stepping away for five minutes once an hour or so. Go somewhere cooler and quieter, look at something far away, blink fully, and get some fresh air if you can. You’ll serve more people with better eyes than without the break. If you’re also ringing a bell or greeting guests outdoors this season, our guide for [holiday bell ringers and volunteers](/guides/dry-eyes-for-holiday-bell-ringers-and-volunteers) covers the cold side.`,
      },
      { h: 'Using a lubricating drop on your break' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists its Uses: {uses}. Its directions: {directions}. Use it during a break, away from food, after taking off gloves and washing your hands.`,
      },
      {
        list: [
          `Keep the tip clean, as the panel says: {tip}.`,
          `Leave the bottle in a coat pocket or bag, not on a shelf near the ovens; the label’s storage line is {storage}.`,
          `Read the panel’s caution before first use: {warnings}.`,
        ],
      },
      {
        p: `The label doesn’t give directions for contact lenses or using Quell with other eye drops, so ask your eye doctor or pharmacist about those. The full panel is on the [Drug Facts page](/drug-facts). For your own kitchen at home, our page on [dry eyes when cooking holiday dinner](/guides/dry-eyes-when-cooking-holiday-dinner) has more.`,
      },
      { h: 'When to step off the line and get help' },
      {
        p: `A burn from steam or a hot pan, a splash of grease or chemicals, or anything stuck in the eye needs first aid and medical care, not drops. The label’s stop-use line also applies: {stopUse} An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for more.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes burn after serving at a soup kitchen?',
        a: `Oven heat, steam tables, dish machine steam and a warm, crowded hall all speed evaporation from the tear film, and focused work cuts down on blinking. Stepping back from heat and taking short breaks help.`,
      },
      {
        q: 'Can I use eye drops while volunteering in a kitchen?',
        a: `Yes, on a break and away from food. Take off your gloves, wash your hands, and follow the label’s directions, then wash again before going back to the line.`,
      },
      {
        q: 'Is steam from a steam table bad for your eyes?',
        a: `The steam passes quickly, but the hot air rising from the pans and the warm room keep drying the eyes. Step back between guests and lift lids away from your face.`,
      },
      {
        q: 'What should a volunteer do if sanitizer splashes in their eye?',
        a: `Rinse right away as the kitchen’s safety instructions or the product label direct, then call Poison Control or get medical help. Lubricating eye drops are not a substitute for rinsing.`,
      },
    ],
  },
  {
    slug: 'what-does-label-created-mean-on-tracking',
    title: 'What does “label created” mean on tracking?',
    description:
      '“Label created” means a shipping label exists but the carrier hasn’t scanned the box yet. What it means for an eye drop order, and when to call.',
    category: 'shipping',
    addedOn: '2026-11-25',
    body: [
      {
        p: `“Label created” on a tracking page means a shipping label has been printed and the carrier has the package’s details, but it hasn’t scanned the box yet. For a Quell order, it usually appears right after the shipping email, while the package waits for pickup or its first scan. Give it time; it normally changes once the carrier handles the box. If it hasn’t moved after several days, call {phone} with your order number.`,
      },
      { h: 'What “label created” actually tells you' },
      {
        p: `A tracking page is the carrier’s record of scans. Before the first scan, the only thing the carrier knows is what the shipper sent electronically when the label was made: the address, the weight and a tracking number. That’s the moment most carriers show as “label created,” “shipping label created” or “pre-shipment.” The wording differs by carrier, but the meaning is the same: the label exists, and the package isn’t in the carrier’s hands as far as their system shows.`,
      },
      {
        p: `It doesn’t mean the package is lost, and it doesn’t mean it’s sitting still. Packages are sometimes picked up in bulk and get their first scan later at a sorting facility, so a box can be moving while the page still says label created.`,
      },
      { h: 'How a Quell order gets to that point' },
      {
        list: [
          `You place the order, and the order page shows Paid. There’s no tracking number yet.`,
          `The order is packed by hand in Brentwood, Tennessee, and a shipping label is made.`,
          `The order is marked Shipped, and the shipping email goes out with the tracking number when one is available, plus a link to the carrier’s page for the carriers the shop recognizes.`,
          `The carrier picks the package up and scans it, and the tracking page moves past label created.`,
        ],
      },
      {
        p: `So if you click the link in your shipping email and see label created, you’re looking at the gap between steps three and four. Our page on [what your order status means](/guides/what-your-order-status-means) explains Paid and Shipped on this site’s side.`,
      },
      { h: 'How long it usually stays that way' },
      {
        p: `Often not long: the next scan may show up later that day or the next one. It can take longer around weekends, holidays and the busy weeks between Thanksgiving and New Year’s, when carriers move far more packages and scans can lag behind the boxes. Winter storms can slow pickups too. Because the site doesn’t promise a ship or delivery date, there’s no fixed point at which label created becomes a problem, but several days with no change is worth a call.`,
      },
      { h: 'Label created vs. other early statuses' },
      {
        p: `Carriers use different words, but the early steps tend to follow the same pattern:`,
      },
      {
        list: [
          `Label created or pre-shipment: the label exists; no scan yet.`,
          `Picked up, accepted or origin scan: the carrier has physically scanned the package.`,
          `In transit or departed: the package is moving between facilities.`,
          `Out for delivery: it’s on the local route.`,
          `Delivered: the carrier recorded a delivery at the address.`,
        ],
      },
      {
        p: `If your page jumps from label created straight to in transit, that’s normal too; the pickup scan may simply not have been recorded. For packages stuck at a later step, see [eye drop tracking not updating](/guides/eye-drop-tracking-not-updating).`,
      },
      { h: 'If there’s no tracking number at all' },
      {
        p: `Occasionally an order is marked shipped before a tracking number is available, so the shipping email says the order has shipped without a link. That isn’t the same as label created. The order has left us; there just isn’t a number to follow yet. You can still check status any time on the [track your order](/orders) page with your order number and the email you used at checkout.`,
      },
      { h: 'What to check while you wait' },
      {
        list: [
          `Read the shipping address in the shipping email. A wrong unit number or an old address is the problem most worth catching early.`,
          `Make sure you’re looking at the right order if you placed more than one; each has its own number and tracking.`,
          `If the package is a gift, let the recipient know it’s coming so they watch for it.`,
          `If you’re running low on drops, use what you have as the label directs, {directions}, rather than stretching it.`,
        ],
      },
      { h: 'When to call us' },
      {
        p: `If tracking still says label created after several days, call {phone} ({hours}) or reach us through the [contact page](/about#contact). Have your order number, the email used at checkout and the tracking number ready. We can tell you what we see on our side. Damaged, incorrect or broken-seal orders are replaced within {returnDays} days of delivery, and unopened bottles can be refunded in that window without sending them back. Our guide on [how to track your order](/guides/how-to-track-your-order) covers the rest.`,
      },
    ],
    faq: [
      {
        q: 'Does label created mean my package has shipped?',
        a: `It means a shipping label exists and the carrier has the package details, but the carrier hasn’t scanned it yet. For a Quell order, it usually shows right after the shipping email, before the first carrier scan.`,
      },
      {
        q: 'How long can tracking say label created?',
        a: `Usually a short time, until the carrier’s first scan. Weekends, holidays and the December rush can stretch it. If it hasn’t changed after several days, call with your order number.`,
      },
      {
        q: 'Can a package be moving if tracking still says label created?',
        a: `Yes. Some packages are picked up without an individual scan and get their first scan later at a sorting facility, so the box can be on its way while the page hasn’t caught up.`,
      },
      {
        q: 'What is the difference between pre-shipment and in transit?',
        a: `Pre-shipment means only the label information exists in the carrier’s system. In transit means the package has been scanned and is moving between the carrier’s facilities.`,
      },
    ],
  },
  {
    slug: 'parent-cant-use-the-eye-drops-i-sent',
    title: 'My parent can’t use the eye drops I sent. Now what?',
    description:
      'If a parent can’t or won’t use the Quell you sent, unopened bottles can be refunded to you within the window, with nothing mailed back. How it works.',
    category: 'returns',
    addedOn: '2026-11-25',
    body: [
      {
        p: `If you sent Quell to a parent and it turns out they can’t use it, any unopened bottles can be refunded within {returnDays} days of delivery to their address. The refund goes to you, the person who paid, and the bottles don’t need to be mailed back. Opened bottles can’t be refunded. Call {phone} ({hours}) with your order number and the email you used at checkout.`,
      },
      { h: 'Common reasons a parent can’t use the drops' },
      {
        p: `Families send eye drops to parents for good reasons, and sometimes the plan doesn’t work out. The usual reasons we hear:`,
      },
      {
        list: [
          `Their eye doctor already has them on a different drop, or told them not to add another one.`,
          `The label’s caution applies to them. Quell’s reads: {warnings}.`,
          `They find it hard to aim a drop or squeeze the bottle, especially with stiff hands or a tremor.`,
          `They live in a care community that manages residents’ medicines, and the staff need to approve anything new first.`,
          `They simply don’t want to change what they’re used to.`,
        ],
      },
      {
        p: `Each of those is a reason to leave a bottle sealed if it hasn’t been opened yet. A sealed bottle keeps the refund open; an opened one doesn’t.`,
      },
      { h: 'What can be refunded' },
      {
        p: `Our [terms](/terms) handle a gift order like any other order:`,
      },
      {
        list: [
          `Unopened bottles: the product price is refunded if we hear from you within {returnDays} days of delivery.`,
          `Nothing is mailed back. A bottle that has left our hands can’t be confirmed as stored the way its label requires, so it couldn’t be resold.`,
          `Opened bottles can’t be refunded, returned or resold.`,
          `Original shipping isn’t refunded.`,
        ],
      },
      {
        p: `The window is counted from delivery to the address on the order, which is your parent’s address in this case. If you’re not sure when it arrived, the shipping email’s tracking link shows the delivery date. Our guide on [when the refund window starts](/guides/when-does-the-eye-drop-refund-window-start) explains the timing.`,
      },
      { h: 'Who should call' },
      {
        p: `You, as the buyer, are the easiest person to handle it, because the order is tied to your email and your payment. Have the order number (it starts with Q- and is in your confirmation email), the email used at checkout and the number of unopened bottles ready. Your parent can call instead if that’s simpler, but they’ll need the same details, and the refund still goes back to the payment you used. Our page on [calling about an order for someone else](/guides/calling-about-an-eye-drop-order-for-someone-else) covers that situation.`,
      },
      { h: 'What happens to the bottles' },
      {
        p: `Since nothing is sent back, the unopened bottles stay where they are. Your parent can pass them to someone else in the household who wants them, or you can collect them on your next visit. If they keep a bottle, make sure whoever uses it reads the full label first. Every bottle should belong to one person; the label says: {tip}.`,
      },
      { h: 'If the problem is getting the drop in' },
      {
        p: `Sometimes a parent would like to use the drops but can’t manage the bottle. Before asking for a refund, it may help to look at technique together. Our guides on [putting in eye drops using a mirror](/guides/how-to-put-in-eye-drops-using-a-mirror) and [putting in eye drops without flinching](/guides/how-to-put-in-eye-drops-without-flinching) have practical steps, and a pharmacist can show them in person. If their hands make it impossible, a family member or caregiver can help, following the directions: {directions}. Our guide on [going over an eye drop label with an aging parent](/guides/going-over-an-eye-drop-label-with-an-aging-parent) helps with that conversation.`,
      },
      { h: 'If their eye doctor said no' },
      {
        p: `Follow the doctor. Don’t encourage a parent to use a drop their eye doctor has told them to skip, even to avoid wasting it. If they’ve already opened a bottle and been told to stop, it can’t be refunded, but their eyes matter more than the bottle. The label’s stop-use line also applies to anyone who has started using it: {stopUse}`,
      },
      { h: 'If the box arrived damaged or wrong' },
      {
        p: `That’s a different case. Damaged, incorrect or broken-seal orders are replaced within {returnDays} days of delivery. Ask your parent to keep the box and take a photo if anything looks wrong, then call us. The full Quell label is on our [Drug Facts page](/drug-facts) if you want to read it together before deciding.`,
      },
    ],
    faq: [
      {
        q: 'Can I get a refund on eye drops I sent to my mom?',
        a: `Yes, for unopened bottles, if you call within {returnDays} days of delivery to her address. The refund goes to you as the buyer, and nothing needs to be mailed back. Opened bottles can’t be refunded.`,
      },
      {
        q: 'Who gets the refund when I paid for my parent’s eye drops?',
        a: `The person who paid. A refund on unopened bottles goes back to the payment used for the order, even if the bottles were shipped to your parent.`,
      },
      {
        q: 'Does my parent have to mail the eye drops back to me or to you?',
        a: `No. Unopened bottles are refunded without being sent back, so they can stay at your parent’s home or go to someone else in the household who wants them.`,
      },
      {
        q: 'What if my dad opened the eye drops but can’t use them?',
        a: `An opened bottle can’t be refunded. If the trouble is aiming the drop, a pharmacist or family member may be able to help; if his eye doctor said not to use it, he should follow that advice.`,
      },
    ],
  },
  {
    slug: 'what-eye-drops-are-good-for-dry-eyes',
    title: 'What eye drops are good for dry eyes?',
    description:
      'For everyday dryness, look for a lubricating eye drop whose Uses line names dryness. How to read the label, and when a drop isn’t the right answer.',
    category: 'choosing',
    addedOn: '2026-11-25',
    body: [
      {
        p: `For everyday dry eyes, the drops to look for are lubricating eye drops: over-the-counter drops whose Drug Facts label lists a lubricant or emollient as the purpose and names dryness in its Uses line. Beyond that, compare what each label lists, such as preservatives and inactive ingredients, and how often its directions say to use it. Dryness that comes with pain, vision changes or a lasting problem is a job for an eye doctor, not a drop.`,
      },
      { h: 'Start with the Uses line, not the front of the box' },
      {
        p: `The front of an eye drop box is marketing space. The Drug Facts panel on the back or side is the part every over-the-counter drop must print in the same format, and its Uses line says what the product is for. If you’re shopping for dryness, that’s the first line to read. A drop whose Uses line names dryness is built for the job you have in mind; one whose Uses line is about something else is a different kind of product, even if it sits on the same shelf.`,
      },
      {
        p: `Quell’s Uses line, for example, reads: {uses}. Our guide to [the Uses section](/guides/the-uses-section) explains how that part of the label works on any drop.`,
      },
      { h: 'Check the Purpose column next' },
      {
        p: `Right above Uses, the panel lists each active ingredient with a purpose beside it. Lubricating drops typically list purposes such as lubricant, emollient, demulcent or protectant. Those words tell you the drop is meant to coat and moisten the eye’s surface. Quell lists three actives, {actives}, with purposes of lubricant and emollient. [What Purpose means on a Drug Facts label](/guides/what-does-purpose-mean-on-a-drug-facts-label) goes through each term.`,
      },
      { h: 'Things worth comparing between lubricating drops' },
      {
        p: `Once you’ve narrowed it to drops labeled for dryness, these are the differences you can actually read on the box:`,
      },
      {
        list: [
          `Preservatives. Multi-dose bottles may contain a preservative, and some people who use drops several times a day prefer preservative-free products. The inactive ingredients list is where preservatives show up.`,
          `How often to use it. The Directions line sets the schedule. Some labels say “as needed,” others give a set number of drops per day. Quell’s says: {directions}.`,
          `Which layer of the tear film it’s built around. The tear film has oil, water and mucus layers. Some drops focus on adding moisture; others, like Quell, are designed to reinforce the tear film’s oil layer to help reduce moisture loss.`,
          `Warnings that apply to you. Read the warnings for anything about allergies or ingredients you avoid. Quell’s, for instance, says: {warnings}.`,
          `Appearance. Clear drops and milky drops are both common. Quell’s label says: {milky}.`,
          `Bottle size and format, such as a multi-dose bottle or single-use vials.`,
        ],
      },
      { h: 'What “good” can and can’t mean' },
      {
        p: `No label can tell you which drop will feel right for your eyes, and no honest seller can either. Two people with dry eyes can have very different reasons for it: one stares at screens in a heated office, another drives with the vents blowing, a third has a cause an eye doctor needs to find. A drop that’s a good match for one may do little for another. Reading labels narrows the field; trying a drop as directed, and paying attention to how your eyes feel, does the rest. If a drop stings, blurs your vision for a long time or seems to make things worse, stop and ask a pharmacist or eye doctor.`,
      },
      { h: 'Habits that help whichever drop you choose' },
      {
        list: [
          `Look away from screens regularly and finish each blink rather than half-closing your eyes.`,
          `Keep car vents, ceiling fans and heaters from blowing at your face.`,
          `Run a humidifier in rooms where you spend long hours in winter.`,
          `Wear wraparound sunglasses in wind and bright sun.`,
          `Keep the bottle clean; Quell’s label says: {tip}.`,
        ],
      },
      { h: 'When eye drops aren’t the answer' },
      {
        p: `A lubricating drop is for ordinary dryness. Some symptoms point somewhere else, and the label is clear about them: {stopUse} Something stuck in the eye, a chemical splash, sudden pain or a change in vision also need prompt care. An eye doctor can find the cause and decide what to do. Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs, and the label doesn’t give directions for contact lenses or for combining drops, so ask your eye doctor or pharmacist about those.`,
      },
      { h: 'Where Quell fits' },
      {
        p: `Quell is a preservative-free lubricating eye drop sold online, shipped from Brentwood, Tennessee, to US addresses. Its full label is on our [Drug Facts page](/drug-facts). If you’re weighing it against other options, our guide on [how to know which eye drops to use](/guides/how-do-i-know-which-eye-drops-to-use) walks through the decision step by step.`,
      },
    ],
    faq: [
      {
        q: 'What kind of eye drops are for dry eyes?',
        a: `Lubricating eye drops, sometimes called artificial tears. Their Drug Facts label lists a purpose such as lubricant or emollient and names dryness in the Uses line.`,
      },
      {
        q: 'What should I look for on an eye drop label for dry eyes?',
        a: `Read the Uses line for dryness, the Purpose column for words like lubricant or emollient, the inactive ingredients for preservatives, the directions for how often to use it, and the warnings for anything that applies to you.`,
      },
      {
        q: 'Are milky eye drops good for dry eyes?',
        a: `Milky and clear drops are both common among lubricating eye drops. Appearance alone doesn’t tell you what a drop is for; the Uses line and the Purpose column on the Drug Facts label do.`,
      },
      {
        q: 'When should I see a doctor instead of buying eye drops?',
        a: `If you have eye pain, vision changes, something stuck in the eye, a chemical splash, or irritation that continues or worsens, see an eye doctor rather than trying more drops.`,
      },
    ],
  },
  {
    slug: 'which-eye-drops-are-gentle-enough-for-daily-use',
    title: 'Which eye drops are gentle enough for daily use?',
    description:
      '“Gentle” isn’t a label term, so no box can promise it. What you can check instead: preservatives, ingredients, directions and warnings for daily use.',
    category: 'choosing',
    addedOn: '2026-11-25',
    body: [
      {
        p: `No eye drop label uses the word “gentle” as a promise, so the honest answer is to check what the label does say. For daily use, look for a lubricating drop whose directions allow a daily schedule, read the inactive ingredients for preservatives and anything you react to, and read the warnings. Then use it as directed and notice how your eyes feel. If a drop stings or irritation continues, stop and ask a pharmacist or eye doctor.`,
      },
      { h: 'Why “gentle” is hard to pin down' },
      {
        p: `When people ask for a gentle eye drop, they usually mean one of three things: a drop that doesn’t sting, one that won’t bother their eyes when used every day, or one without ingredients they’ve heard can irritate. None of those can be promised for everyone, because eyes differ. A drop one person barely notices may sting for someone else. What you can do is narrow the field to drops whose labels fit the way you plan to use them.`,
      },
      { h: 'What to read on the label for everyday use' },
      {
        list: [
          `Uses. For daily dryness, look for a drop whose Uses line names dryness. Quell’s reads: {uses}.`,
          `Directions. This line tells you how often the drop is meant to be used. If you plan to use drops every day, choose one whose directions describe a daily schedule, and follow it. Quell’s directions: {directions}.`,
          `Inactive ingredients. Preservatives, if any, appear here. Some people who use drops several times a day prefer preservative-free products for that reason. This list is also where you’ll spot an ingredient you already know you react to.`,
          `Warnings. Look for allergy cautions and anything else that applies to you. Quell’s warnings section says: {warnings}.`,
          `Do not use and stop use lines. These tell you when not to start and when to quit.`,
        ],
      },
      {
        p: `Our guide on [eye drops for sensitive eyes](/guides/eye-drops-for-sensitive-eyes) goes further into ingredient lists, and [is it okay to use eye drops every day?](/guides/is-it-okay-to-use-eye-drops-every-day) covers daily routines.`,
      },
      { h: 'Preservatives and daily use' },
      {
        p: `Multi-dose bottles need some way to stay clean once opened. Many use a preservative; others are made preservative-free and rely on careful handling and packaging. Quell contains no preservatives, and the site explains that preservatives such as benzalkonium chloride are a common source of irritation for people using drops several times a day. That’s one reason preservative-free drops come up so often in conversations about everyday use. It doesn’t promise comfort, and a preservative-free bottle still has to be kept clean: the label says {tip}.`,
      },
      { h: 'Signs a drop isn’t agreeing with you' },
      {
        p: `A drop that suits you should make your eyes feel more comfortable, not less. Brief blurring right after a drop is common with lubricating drops, especially thicker or milky ones. Other signs are reasons to stop:`,
      },
      {
        list: [
          `Stinging or burning that doesn’t fade within a moment or two.`,
          `Itching, swelling or irritation that starts after you begin the drop.`,
          `Discomfort that builds over several days of use instead of easing.`,
          `Anything the label’s stop-use line names: {stopUse}`,
        ],
      },
      {
        p: `If any of those happen, stop using the drop and talk to a pharmacist or eye doctor. Bring the box, so they can see the full ingredient list.`,
      },
      { h: 'How to try a new drop sensibly' },
      {
        list: [
          `Read the whole Drug Facts panel before the first drop, including the warnings.`,
          `Check that the seal is intact and the drop looks the way the label describes. Quell’s label says: {milky}.`,
          `Use it exactly as the directions say, not more often.`,
          `Give it a few days of regular use, noting how your eyes feel in the morning and the evening.`,
          `Change one thing at a time. If you also adjust a humidifier, screen habits or a new pair of glasses that week, it’s hard to tell what helped.`,
        ],
      },
      {
        p: `If you already use another eye drop, the label doesn’t cover using Quell alongside it; ask your pharmacist or eye doctor. The same goes for contact lens wearers.`,
      },
      { h: 'What else makes daily drops easier on your eyes' },
      {
        p: `Daily comfort comes from more than the bottle. Clean hands, a clean tip and a cap put back right away matter. So does storing drops as the label says; Quell’s storage line is {storage}. And cutting down on what dries your eyes in the first place, such as vents blowing at your face, long unbroken screen sessions and wind, means you lean less on drops. The full Quell label is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to ask a professional' },
      {
        p: `If you need drops every day and still feel dry, that’s worth an eye exam. An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) shows which signs shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'What are the gentlest eye drops for daily use?',
        a: `No label can promise gentleness for everyone. Look for a lubricating drop whose directions describe a daily schedule, check the inactive ingredients for preservatives and anything you react to, and stop if it stings or irritates.`,
      },
      {
        q: 'Are preservative-free eye drops gentler?',
        a: `Some people who use drops several times a day prefer them, because preservatives can irritate. Preservative-free doesn’t promise comfort, and the bottle still needs a clean tip and careful handling.`,
      },
      {
        q: 'How do I know if eye drops are irritating my eyes?',
        a: `Stinging that lingers, new itching or swelling, or discomfort that builds over days are signs to stop. Brief blurring right after a lubricating drop is common; lasting irritation is a reason to ask a pharmacist or eye doctor.`,
      },
      {
        q: 'Is it OK to try a new eye drop every day for a week?',
        a: `If the label’s directions describe a daily schedule, use it exactly that way for several days and note how your eyes feel. Stop and ask a pharmacist or eye doctor if irritation continues.`,
      },
    ],
  },
  {
    slug: 'what-eye-drops-can-i-buy-at-the-store-for-dry-eyes',
    title: 'What eye drops can I buy at the store for dry eyes?',
    description:
      'Any store’s eye care aisle carries lubricating drops for dryness alongside products for other jobs. How to find the right section and read a box there.',
    category: 'choosing',
    addedOn: '2026-11-25',
    body: [
      {
        p: `At a drugstore, grocery store or big-box pharmacy, the eye drops for dry eyes are the lubricating drops, often labeled “lubricant eye drops” or “artificial tears.” They sit in the eye care aisle next to products made for other jobs, so turn each box over and read its Drug Facts panel: the Uses line should name dryness. If you’re unsure, the pharmacist at the counter can help you compare labels.`,
      },
      { h: 'How the eye care aisle is usually laid out' },
      {
        p: `Stores arrange shelves differently, but the eye care aisle usually holds a few kinds of products side by side. Knowing which is which saves time:`,
      },
      {
        list: [
          `Lubricating eye drops for dryness, in multi-dose bottles or boxes of single-use vials. These are the ones this guide is about.`,
          `Thicker gels and ointments, also aimed at dryness, which some people use at a different time of day.`,
          `Drops with a different purpose on the label, such as drops for itching. Their Uses line tells you what they’re for.`,
          `Eye washes, which are for rinsing the eye rather than for regular use like a drop.`,
          `Contact lens solutions and lens products, which are their own category. Questions about lenses belong with your eye doctor.`,
        ],
      },
      {
        p: `Our guide on [eye drops vs. eye gel](/guides/eye-drops-vs-eye-gel) covers the difference between the first two groups.`,
      },
      { h: 'Reading a box in the aisle' },
      {
        p: `Fronts of boxes are crowded with large type. The Drug Facts panel on the back or side is the reliable part, and it follows the same order on every over-the-counter drop. In a couple of minutes you can check:`,
      },
      {
        list: [
          `Active ingredients and Purpose: words like lubricant, emollient or demulcent mean the drop is meant to coat and moisten.`,
          `Uses: look for dryness. Quell’s, for comparison, reads: {uses}.`,
          `Warnings: anything about allergies or ingredients you avoid.`,
          `Directions: how often the label says to use it.`,
          `Inactive ingredients: where preservatives appear, if the drop has any.`,
          `The expiration date and lot number, usually printed on the end flap.`,
        ],
      },
      {
        p: `Before you leave the store, check that the box and the bottle’s seal are intact. A box that looks opened or a seal that’s already broken is a reason to pick a different one. Our guide on [how to read an eye drop Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label) goes section by section.`,
      },
      { h: 'Store brand or name brand?' },
      {
        p: `Many stores sell their own lubricating drops beside the name brands. Comparing them is a label exercise, not a guess: line up the active ingredients, the inactive ingredients and the directions. If those match closely, the main differences may be price and packaging. If they don’t, they’re different products. Our page on [store-brand vs. name-brand eye drops](/guides/store-brand-vs-name-brand-eye-drops) walks through that comparison.`,
      },
      { h: 'Ask the pharmacist' },
      {
        p: `The pharmacy counter is usually a few steps from the eye care aisle, and pharmacists answer questions about over-the-counter drops all the time. They’re the right person to ask if you take other medicines, already use another eye drop, wear contact lenses, or want help choosing for an older parent. Bring the box you’re considering so they can read the same label you are.`,
      },
      { h: 'Is Quell sold in stores?' },
      {
        p: `No. Quell is sold online through this site and ships from Brentwood, Tennessee, to US addresses, so you won’t find it in the eye care aisle. It’s a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss, with three active ingredients ({actives}). Its directions read: {directions}. You can read the whole panel on our [Drug Facts page](/drug-facts) the same way you’d read a box in a store. Shipping is {shipping}, or free on {freeBottles} or more bottles; no delivery date is promised, so a store is the quicker option if you need a drop today. Our comparison of [buying eye drops online vs. in a store](/guides/buying-eye-drops-online-vs-in-store) covers the tradeoffs.`,
      },
      { h: 'After you buy' },
      {
        list: [
          `Read the full panel again at home, including the warnings, before the first drop.`,
          `Wash your hands, and keep the tip from touching anything.`,
          `Store the bottle as its label says, away from a hot car or a cold windowsill.`,
          `Use it as directed for a few days and notice how your eyes feel.`,
        ],
      },
      { h: 'When the store isn’t the right stop' },
      {
        p: `Some eye problems don’t belong in the eye care aisle at all. Pain, a sudden change in vision, something stuck in the eye, a chemical splash, or irritation that keeps going need an eye doctor or urgent care. Quell’s label puts it this way: {stopUse} An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for more.`,
      },
    ],
    faq: [
      {
        q: 'Where are dry eye drops in a drugstore?',
        a: `In the eye care aisle, usually near the pharmacy counter. Look for boxes labeled lubricant eye drops or artificial tears, and confirm on the Drug Facts panel that the Uses line names dryness.`,
      },
      {
        q: 'Can I buy lubricating eye drops without seeing a pharmacist?',
        a: `Yes. Lubricating eye drops are sold over the counter on open shelves. A pharmacist is still a good person to ask if you take other medicines, use other eye drops or wear contacts.`,
      },
      {
        q: 'Is a store-brand lubricating eye drop worth trying?',
        a: `It can be. Line up its active ingredients, inactive ingredients and directions against the name brand’s Drug Facts panel; if they closely match, the main differences may be price and packaging.`,
      },
      {
        q: 'Can I find Quell eye drops at a pharmacy?',
        a: `No. Quell is sold online through this site and ships from Brentwood, Tennessee, to US addresses. If you need a drop the same afternoon, a local store is faster.`,
      },
    ],
  },
  {
    slug: 'are-there-plant-oils-in-quell',
    title: 'Are there plant oils in Quell eye drops?',
    description:
      'Quell’s label names two oils, light mineral oil and emu oil, and no plant oil such as flaxseed or sesame. How to read the panel for oils.',
    category: 'formula',
    addedOn: '2026-11-25',
    body: [
      {
        p: `No plant oil is named on Quell’s Drug Facts panel. The two oils it lists are light mineral oil, an active ingredient, and emu oil, an inactive one. Oils like flaxseed, sesame, olive, coconut or soybean don’t appear in either ingredient list. A few inactive ingredients are made from fatty acids, and the label doesn’t say where those were sourced, so ask a pharmacist if a specific source matters to you.`,
      },
      { h: 'Why people ask about plant oils' },
      {
        p: `Searches for oil in eye drops turn up a long list of names: flaxseed oil, sesame oil, MCT oil, castor oil, mineral oil. People asking whether a drop contains a plant oil usually have one of three reasons. Some have a seed or nut allergy and want to avoid a particular plant. Some follow a plant-based diet and want to know which way an ingredient leans. Some have read that one oil or another is used in eye products and want to know what they’re buying. All three come down to the same thing: reading the panel.`,
      },
      { h: 'The two oils Quell does list' },
      {
        p: `The panel’s active ingredients are {actives}. Light mineral oil is the oil among them, with the purpose Emollient. Mineral oil is refined from petroleum, not pressed from a plant, and “light” names the thinner grade. Our page on [light mineral oil in eye drops](/guides/light-mineral-oil-in-eye-drops) explains it.`,
      },
      {
        p: `Emu oil is on the inactive list, and it comes from an animal, the emu. The carton’s emu oil panel describes it this way: {emuOil} That’s the oil most connected to Quell’s design, which is meant to reinforce the tear film’s oil layer to help reduce moisture loss. [Emu oil in eye drops](/guides/emu-oil-in-eye-drops) covers it in detail.`,
      },
      { h: 'The full inactive list, read for oils' },
      {
        p: `Quell’s inactive ingredients are {inactives}. Going down that list with oils in mind:`,
      },
      {
        list: [
          `Emu oil is the only inactive ingredient with “oil” in its name.`,
          `Glyceryl laurate and glyceryl undecylenate are each made from glycerin and a fatty acid. Fatty acids can come from more than one kind of source, and the label doesn’t state which was used.`,
          `Manuka honey is a honey, not an oil.`,
          `The rest, such as sterile water, Dead Sea salt and tromethamine, aren’t oils.`,
        ],
      },
      {
        p: `If a particular source matters to you, for an allergy or a dietary reason, that’s a question for a pharmacist, who can help you weigh it, and you can also call us at {phone} ({hours}) with label questions. Our ingredient pages on [glyceryl laurate](/guides/glyceryl-laurate-in-eye-drops) and [glyceryl undecylenate](/guides/glyceryl-undecylenate-in-eye-drops) say more about each.`,
      },
      { h: 'How to check any eye drop for plant oils' },
      {
        list: [
          `Turn to the Drug Facts panel on the carton.`,
          `Read the active ingredients and their purposes. An oil used as an active is named there.`,
          `Read the inactive ingredients all the way down. Plant oils are usually named with the plant: flaxseed oil, sesame oil, olive oil and so on.`,
          `Watch for ingredients made from fatty acids, whose source the label may not state.`,
          `Read the warnings for any allergy caution.`,
        ],
      },
      { h: 'Allergies: read the caution that is there' },
      {
        p: `Quell doesn’t name a plant oil, but it does carry an allergy caution of its own. The warnings section reads: {warnings}. If you have a seed, nut or plant allergy, the absence of a plant oil from the list is useful to know, but it isn’t medical clearance; talk to your doctor or pharmacist before the first drop. Our guide to [egg or bird allergies and Quell](/guides/egg-or-bird-allergy-and-quell) covers the caution the label does print.`,
      },
      { h: 'Plant-based and vegan questions' },
      {
        p: `Because emu oil comes from an animal and manuka honey comes from bees, Quell isn’t a vegan product, whatever its other ingredients are. Our page on [whether Quell is vegan](/guides/is-quell-vegan) goes into that.`,
      },
      { h: 'What the oils mean for the bottle in your hand' },
      {
        p: `Drops that contain oil often look cloudy or milky rather than clear. Quell’s label says: {milky}. A change from that appearance matters more than the look itself: {doNotUse}. Use it as directed, {directions}, and if your eyes hurt or your vision changes, the label says: {stopUse} The whole panel is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Does Quell contain flaxseed or sesame oil?',
        a: `No. Neither appears on Quell’s Drug Facts panel. The only oils it lists are light mineral oil, an active ingredient, and emu oil, an inactive ingredient.`,
      },
      {
        q: 'Is the oil in Quell plant-based?',
        a: `No. Light mineral oil is refined from petroleum, and emu oil comes from the emu, a bird. No plant oil is named on the label.`,
      },
      {
        q: 'Can I use Quell if I have a seed or nut allergy?',
        a: `Quell’s label doesn’t name a seed or nut oil, but that isn’t medical clearance. Ask your doctor or pharmacist before using it, and read the label’s caution for people with egg or bird allergies.`,
      },
      {
        q: 'How do I find out where an eye drop ingredient comes from?',
        a: `The Drug Facts panel names ingredients but often not their sources. A pharmacist can help you weigh an ingredient, and you can ask the company that distributes the drop.`,
      },
    ],
  },
  {
    slug: 'is-there-milk-in-milky-eye-drops',
    title: 'Is there milk in milky eye drops?',
    description:
      '“Milky” describes how some eye drops look, not what’s in them. Quell lists no milk or dairy ingredient. Where its milky brown color comes from.',
    category: 'formula',
    addedOn: '2026-11-25',
    body: [
      {
        p: `No. “Milky” describes how some eye drops look, not a milk ingredient. Quell’s label says {milky}, and the site explains the color comes from its natural oil-based ingredients. Neither its active nor its inactive ingredient list includes milk or any dairy product. If you have a specific allergy, read the full Drug Facts panel, including its egg and bird caution, and ask your doctor or pharmacist before using it.`,
      },
      { h: 'Why some eye drops look like milk' },
      {
        p: `Water-based drops with nothing oily in them tend to look clear, like water. When a drop contains oils dispersed through water, the tiny oil droplets scatter light, and the liquid looks cloudy or milky, the same way oil and vinegar look cloudy after you shake a salad dressing. That’s why drops built around the tear film’s oil layer are often milky. Our page on [what emulsion eye drops are](/guides/what-are-emulsion-eye-drops) explains the idea in more detail.`,
      },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and it contains oils, so a milky look is expected. The site adds this note beside the buy button: {appearance}`,
      },
      { h: 'What’s actually in Quell' },
      {
        p: `The Drug Facts panel lists two groups of ingredients. The active ingredients are {actives}. The {inactiveCount} inactive ingredients are {inactives}. Every ingredient in the product appears in one of those two lists, and milk, cream, whey, casein and lactose aren’t in either. The full panel is on our [Drug Facts page](/drug-facts), and [the Quell ingredients list](/guides/quell-eye-drops-ingredients-list) goes through each one.`,
      },
      { h: 'Where the brown comes from' },
      {
        p: `Quell isn’t just milky; its label says milky brown. The site attributes the color to its natural oil-based ingredients. Some of the inactive ingredients come from natural sources, including emu oil and manuka honey. Our guide on [why Quell is milky brown](/guides/why-is-quell-milky-brown) covers the color question from the bottle’s side, including what to expect the first time you open one.`,
      },
      { h: 'Dairy-free isn’t the same as allergy-free' },
      {
        p: `People who ask about milk are often thinking about a food allergy or sensitivity. Quell lists no dairy ingredient, but it does carry a different allergy caution. The warnings section reads: {warnings}. Emu oil comes from a bird, which is one reason people read that caution carefully. Our page on [egg or bird allergies and Quell](/guides/egg-or-bird-allergy-and-quell) explains what the caution says and who should talk to a doctor first.`,
      },
      {
        p: `Honey is also on the list, as manuka honey. If you have any allergy and aren’t sure how an ingredient relates to it, ask your doctor or pharmacist before the first drop and bring the label with you.`,
      },
      { h: 'Is Quell vegan or plant-based?' },
      {
        p: `No. Even without dairy, Quell includes emu oil, an animal-derived ingredient, and manuka honey, which comes from bees. Our guide on [whether Quell is vegan](/guides/is-quell-vegan) goes into that.`,
      },
      { h: 'When a milky drop shouldn’t look milky' },
      {
        p: `“Milky” describes the normal appearance. A change from that appearance is a different matter. The label’s do-not-use line reads: {doNotUse}. If a bottle looks noticeably different from how it looked when it arrived, such as a different color or something floating in it, don’t use it, and call {phone} ({hours}) if it arrived that way. Damaged, incorrect or broken-seal orders are replaced within {returnDays} days of delivery. Our page on [what “do not use if it changes color” means](/guides/do-not-use-if-the-color-changes) covers this.`,
      },
      { h: 'Don’t use kitchen milk as an eye drop' },
      {
        p: `Searches for “milk eye drops” sometimes come from home remedies. Milk from the fridge isn’t made or packaged for the eye, so don’t put it in your eyes. Use only products labeled for the eye, as directed, and keep the bottle’s tip clean so the drop stays as it was made. Quell’s directions read: {directions}. And if your eyes hurt or your vision changes, the label is clear: {stopUse} An eye doctor can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'Do milky eye drops have milk in them?',
        a: `No. Milky describes the look of drops that contain oils dispersed in water. Quell’s ingredient lists include no milk or dairy product.`,
      },
      {
        q: 'Is Quell dairy-free?',
        a: `Quell’s active and inactive ingredient lists contain no milk, lactose, whey or casein. It does carry a caution for people with egg or bird allergies, so read the full warnings before use.`,
      },
      {
        q: 'Why are Quell eye drops milky brown?',
        a: `Its label says the product appears as a milky brown solution, and the site attributes the color to its natural oil-based ingredients. That appearance is normal; a change from it is a reason not to use the bottle.`,
      },
      {
        q: 'Can I use milk as an eye drop?',
        a: `No. Milk from the kitchen isn’t made or packaged for use in the eye. Use only products labeled for the eye, and see an eye doctor if your eyes hurt or your vision changes.`,
      },
    ],
  },
  {
    slug: 'how-to-pronounce-eye-drop-label-ingredients',
    title: 'How to pronounce the ingredients on an eye drop label',
    description:
      'Glycerol, polysorbate, tromethamine, undecylenate: a plain sound-it-out guide to the ingredient names on Quell’s label, for calls and pharmacy visits.',
    category: 'label',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Most eye drop ingredient names are easier to say once you split them into parts. On Quell’s label, glycerol is said GLISS-er-ol, polysorbate is pol-ee-SOR-bate, and tromethamine is troh-METH-uh-meen. Nobody at a pharmacy counter expects perfect pronunciation, though. If a name won’t come out right, spell it, read it off the box, or show the pharmacist the Drug Facts panel itself.`,
      },
      { h: 'Why it helps to be able to say them' },
      {
        p: `People mostly need these names out loud in a few situations: asking a pharmacist whether a drop fits with something else they use, telling a doctor what they’ve been putting in their eyes, checking an ingredient they react to, or reading a label to a parent over the phone. Being able to say the word, even roughly, makes those conversations quicker. Being able to show the label makes them exact. Our guide to [taking your eye drop label to a doctor visit](/guides/taking-your-eye-drop-label-to-a-doctor-visit) covers the second part.`,
      },
      { h: 'The three active ingredients' },
      {
        p: `Quell’s label lists its active ingredients as {actives}. Here’s a sound-it-out version of each name:`,
      },
      {
        list: [
          `Glycerol: GLISS-er-ol. It’s closely related in name to glycerin (GLISS-er-in), which is how many people know it.`,
          `Polysorbate 80: pol-ee-SOR-bate, followed by “eighty.”`,
          `Light mineral oil: said just as it looks. “Light” refers to the grade of the oil.`,
        ],
      },
      {
        p: `The numbers in parentheses after each name are strengths. When you read them aloud, say the number and “percent.” Our page on [what the percentages on eye drop labels mean](/guides/what-the-percentages-on-the-label-mean) explains them.`,
      },
      { h: 'The inactive ingredients, one by one' },
      {
        p: `The inactive list on Quell’s carton reads: {inactives}. Several of those names are long, so it helps to take them in chunks:`,
      },
      {
        list: [
          `Caprylyl glycol: KAP-rih-lil GLY-kol.`,
          `Dead Sea salt (sodium chloride): said as written; sodium chloride is SOH-dee-um KLOR-ide.`,
          `Emu oil: EE-myoo oil.`,
          `Glyceryl laurate: GLISS-er-il LOR-ate.`,
          `Glyceryl undecylenate: GLISS-er-il, then undecylenate in pieces: un-dess-ih-LEN-ate.`,
          `Manuka honey: MAH-noo-kah honey.`,
          `Sterile water: said as written.`,
          `Tromethamine: troh-METH-uh-meen.`,
        ],
      },
      {
        p: `The other names on the list are said syllable by syllable, the way they’re printed. When you need to be exact, especially with names that look alike, spell the word letter by letter or read it straight from the label rather than relying on how it sounds.`,
      },
      { h: 'Other label words people trip over' },
      {
        list: [
          `Emollient: ee-MOL-yent. It’s the Purpose listed for light mineral oil.`,
          `Lubricant: LOO-brih-kant. The Purpose listed for glycerol and polysorbate 80.`,
          `Ophthalmic: off-THAL-mik. A word for anything to do with the eye.`,
          `Demulcent: dee-MUL-sent. A term you may see on other drops’ labels.`,
        ],
      },
      {
        p: `Our [eye drop label glossary](/guides/eye-drop-label-glossary) defines these and other terms, and [what does ophthalmic mean?](/guides/what-does-ophthalmic-mean) goes deeper into that one word.`,
      },
      { h: 'Names that look alike' },
      {
        p: `Several of Quell’s ingredients share a first word or a root, which is where mix-ups happen on the phone. Glycerol, glyceryl laurate and glyceryl undecylenate all begin with the same sound, so say the whole name and the second word every time. Caprylyl glycol ends in “glycol,” which sounds close to “glycerol” when said quickly. Polysorbate 80 always carries its number. Saying the full name, then spelling the part that could be confused, saves a second call.`,
      },
      { h: 'Saying it right matters less than reading it right' },
      {
        p: `Pronunciation is about being understood. Accuracy comes from the printed label. When you call about an ingredient, or ask whether something you’re allergic to is in a drop, read the name exactly as the panel prints it, and spell it if there’s any doubt. The same goes for the warnings. Quell’s reads: {warnings}. If any part of that applies to you, say so plainly when you ask.`,
      },
      { h: 'Reading the label to someone else' },
      {
        p: `If you’re reading a label aloud to an older parent or a friend with poor eyesight, slow down at the long names and read the whole panel, not just the ingredients. The directions are short: {directions}. The storage line: {storage}. And the stop-use line is the one they most need to hear: {stopUse} Our guide on [reading an eye drop label as a caregiver](/guides/reading-an-eye-drop-label-as-a-caregiver) has more on helping someone else.`,
      },
      { h: 'Where to find the full label' },
      {
        p: `The whole Quell panel, with every name spelled out, is on our [Drug Facts page](/drug-facts), where you can zoom in or read it aloud with your device’s screen reader. For questions about the product or an order, call {phone} ({hours}). For medical questions, such as whether an ingredient is right for you, ask your pharmacist or eye doctor.`,
      },
    ],
    faq: [
      {
        q: 'How do you pronounce glycerol?',
        a: `GLISS-er-ol. It’s closely related in name to glycerin, said GLISS-er-in, which is the form many people already know.`,
      },
      {
        q: 'How do you say polysorbate 80?',
        a: `pol-ee-SOR-bate, followed by “eighty.” On Quell’s label it’s one of the three active ingredients, with the purpose Lubricant.`,
      },
      {
        q: 'How do you pronounce tromethamine?',
        a: `troh-METH-uh-meen. It’s one of the inactive ingredients on Quell’s Drug Facts panel.`,
      },
      {
        q: 'What if I can’t pronounce an ingredient when I ask the pharmacist?',
        a: `Spell it, read it off the box, or simply hand over the carton. Pharmacists read Drug Facts panels all the time and care more about the exact name than how it sounds.`,
      },
    ],
  },
]
