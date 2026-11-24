import type { Guide } from '@/lib/guide-types'
export const DAILY_20261124_D: Guide[] = [
  /*
   * Sources checked 2026-11-24 for dry-eye-relief-nacogdoches-tx:
   * - NOAA Regional Climate Centers ACIS, 1991-2020 monthly normals, station
   *   NACOGDOCHES (GHCN USC00416177, cooperative station), elev 435 ft.
   *   Raw JSON: .daily-job/acis1124/USC00416177.json
   *   (annual precip 49.94 in by summing months; Dec 4.78 wettest, Jul 2.88
   *   driest; normal max Jun 89.0, Jul 92.6, Aug 93.3, Sep 87.8 F; normal min
   *   Jan 36.4, Dec 37.5, Jul 73.7 F; snowfall Jan 0.1 in, every other month
   *   0.0)
   * No humidity or wind numbers: the station is not in relhum23 or wndspd23.
   */
  {
    slug: 'dry-eye-relief-nacogdoches-tx',
    title: 'Dry eye relief in Nacogdoches, Texas',
    description:
      'Nacogdoches gets about 50 inches of rain a year, yet eyes still dry out under the AC and the winter heater. NOAA’s numbers and steps that help.',
    category: 'local',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Nacogdoches gets close to 50 inches of rain in a normal year, so dry eyes here usually start indoors. Air conditioning runs from late spring into fall, when afternoon highs sit near or above 90°F, and heaters run through winter mornings in the 30s. Keep vents off your face, blink fully at screens, use a lubricating drop exactly as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'What the Nacogdoches weather station records' },
      {
        p: `NOAA’s 1991–2020 climate normals for the Nacogdoches cooperative station, as published through the National Weather Service’s NOWData, come from a site at about 435 feet. The monthly figures describe a wet, warm year with very few dry spells:`,
      },
      {
        list: [
          `About 49.9 inches of precipitation in a normal year, with every month but July above 3.5 inches.`,
          `December is the wettest month at 4.78 inches. July is the driest at 2.88.`,
          `Normal highs reach 89.0°F in June, 92.6°F in July and 93.3°F in August, and September still averages 87.8°F.`,
          `January’s normal low is 36.4°F and December’s is 37.5°F.`,
          `Normal snowfall is a tenth of an inch in January and zero in every other month.`,
        ],
      },
      {
        p: `Those numbers matter for your eyes in a roundabout way. Wet, warm air outdoors is easy on the tear film. The trouble is how much of an East Texas year people spend sealed inside against that warmth, or against a raw winter morning.`,
      },
      { h: 'Rain in every month, dry air indoors' },
      {
        p: `Your tear film has three layers: an oily outer layer, a watery middle and a mucus layer against the eye. The oil slows evaporation from the water beneath it, and each full blink spreads a fresh coat. Air that has been cooled or heated by a machine tends to be drier than the air outside, and dry or moving air pulls moisture from the eye faster. So a house in Nacogdoches can feel parched in a month when the station logs more than four inches of rain.`,
      },
      {
        p: `That’s why the advice here leans on rooms, cars and desks rather than the forecast. A soggy December weekend spent in a heated living room is a bigger strain on your eyes than a damp walk outside.`,
      },
      { h: 'Four months of air conditioning' },
      {
        p: `From June through September, normal highs sit between about 88°F and 93°F, and July nights bottom out near 74°F. The gap between the day’s high and low is the smallest of the year in early summer, about 18 degrees in June, so the air never really cools off and the AC rarely gets a break. Cold, dry air blowing steadily across your face is one of the most common reasons eyes feel gritty by evening.`,
      },
      {
        list: [
          `Point car vents at your chest or the windshield, not your eyes, on errands and longer drives out of town.`,
          `Turn the bedroom ceiling fan down or off if you wake with eyes that feel stuck or scratchy.`,
          `Move a desk chair so the supply vent isn’t blowing across your face.`,
          `On a mild morning, open the windows for an hour and give the AC a rest.`,
        ],
      },
      { h: 'Winter mornings in the 30s' },
      {
        p: `December and January lows average in the mid to upper 30s, while afternoons climb near 60°F. That swing of more than 20 degrees means many homes run the heat early and shut it off by lunch. A space heater aimed at your legs at the breakfast table, or a car heater on full for a cold commute, dries the surface of the eye the same way the summer AC does.`,
      },
      {
        p: `Turn the car heat toward the floor once the windshield clears. Keep space heaters out of your line of sight, and lower the thermostat a few degrees at night. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) goes through furnaces, heat pumps and humidifiers in more detail.`,
      },
      { h: 'Fall yard work and leaf season' },
      {
        p: `October highs average 78.2°F and November 67.8°F, which makes fall the season for raking, mowing the last of the grass and clearing brush. Leaf blowers and mowers throw fine debris at eye level, and a breezy afternoon spent working outside dries the eyes even when the air isn’t especially dry.`,
      },
      {
        list: [
          `Wear wraparound sunglasses or safety glasses while blowing leaves or running a string trimmer.`,
          `Work with the wind at your back so debris blows away from your face.`,
          `Take short breaks and blink slowly a few times before heading back out.`,
          `If grit, a twig or anything else gets into your eye, don’t reach for drops. Have it looked at by an eye doctor or urgent care.`,
        ],
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists these Uses: {uses}. The directions read: {directions}. The active ingredients are {actives}.`,
      },
      {
        p: `The panel also carries this caution: {warnings}. For storage it says: {storage}. A truck cab parked in an August lot gets far hotter than that range, so keep the bottle in a bag you carry inside. And one more line from the label: {tip}. The whole panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Nacogdoches' },
      {
        p: `We ship from Brentwood, Tennessee, to Nacogdoches and to every other US address. You can check out as a guest, shipping is {shipping} on smaller orders, and {freeBottles} or more bottles ship free. A tracking email follows once your order ships, though we don’t promise a delivery date, so reorder before you run low. If you change your mind about an unopened bottle, it can be refunded within {returnDays} days of delivery, and you keep it. The [Nacogdoches page](/eye-drops/nacogdoches-tx) and the [Texas page](/eye-drops/state/texas) cover local ordering, and our [Lufkin guide](/guides/dry-eye-relief-lufkin-tx) covers the timber country just to the south.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A lubricating drop can ease dryness. It can’t tell you why your eyes are dry, and only an eye doctor can find the cause and decide what to do. The label is specific about when to stop: {stopUse}`,
      },
      {
        p: `Make an appointment sooner if one eye hurts, your vision blurs and doesn’t clear when you blink, light suddenly bothers you, or something got into the eye. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) explains each, and the [dry eye self-check](/self-check) can help you describe what you’re feeling, though it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Nacogdoches get a year?',
        a: 'About 49.9 inches in a normal year, according to NOAA’s 1991–2020 normals for the Nacogdoches cooperative station. December is the wettest month at 4.78 inches and July the driest at 2.88.',
      },
      {
        q: 'Why do my eyes feel dry in Nacogdoches if it’s so humid?',
        a: 'Most of the drying happens indoors. Air conditioning from June through September and heaters on winter mornings blow dry air across your face, and screens lower your blink rate, so the tear film evaporates faster than the weather outside would suggest.',
      },
      {
        q: 'Does it snow in Nacogdoches?',
        a: 'Hardly. NOAA’s normals for the Nacogdoches station list a tenth of an inch of snow in January and none in any other month. Winter there is more about chilly mornings in the mid 30s and the heaters that come with them.',
      },
      {
        q: 'Can I get Quell delivered in Nacogdoches?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to any US address, including Nacogdoches. Shipping is {shipping} below {freeBottles} bottles and free at {freeBottles} or more, and a tracking email follows when the order ships.',
      },
    ],
  },
  /*
   * Sources checked 2026-11-24 for dry-eye-relief-sierra-vista-az:
   * - NOAA Regional Climate Centers ACIS, 1991-2020 monthly normals, station
   *   SIERRA VISTA (GHCN USC00027880, cooperative station), elev 4606 ft.
   *   Raw JSON: .daily-job/acis1124/USC00027880.json
   *   (annual precip 13.01 in by summing months; Apr 0.25, May 0.20 driest;
   *   Mar-May 0.93 together; Jul 3.53 and Aug 3.31 = 6.84, more than half the
   *   year; normal max Jun 93.9 (hottest), Jul 91.5, Dec 61.6, Jan 61.3 F;
   *   normal min Jan 29.5, Dec 29.5, Feb 32.6, Jun 59.6 F; high minus low about
   *   34-35 F in Apr-Jun, 28.0 in Aug; snowfall Jan 0.4 in, other months 0.0)
   * No humidity or wind numbers: the station is not in relhum23 or wndspd23.
   */
  {
    slug: 'dry-eye-relief-sierra-vista-az',
    title: 'Dry eye relief in Sierra Vista, Arizona',
    description:
      'At 4,600 feet, Sierra Vista sees about 13 inches of rain a year and almost none in April and May. What that does to your eyes, and what helps.',
    category: 'local',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Sierra Vista sits at about 4,600 feet and gets roughly 13 inches of precipitation a year, more than half of it in July and August. Spring is the dry stretch: April and May together bring less than half an inch. Shield your eyes from sun and wind outdoors, keep heaters and coolers off your face indoors, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Sierra Vista’s climate in NOAA’s normals' },
      {
        p: `NOAA’s 1991–2020 climate normals for the Sierra Vista cooperative station, at an elevation of about 4,606 feet, show a high-desert year with two distinct moods: a long, dry run from fall through June, and a short summer wet season.`,
      },
      {
        list: [
          `About 13.0 inches of precipitation in a normal year.`,
          `April averages 0.25 inch and May 0.20, the two driest months. March through May together come to less than an inch.`,
          `July (3.53 inches) and August (3.31) bring more than half of the year’s total between them.`,
          `June is the hottest month, with a normal high of 93.9°F, ahead of July at 91.5°F.`,
          `December and January lows both average 29.5°F, below freezing, while their afternoons reach about 61°F.`,
          `Normal snowfall is 0.4 inch in January and zero in the other months.`,
        ],
      },
      { h: 'Why spring is hard on eyes here' },
      {
        p: `The air holding the least water and the year’s warmest days before the rains arrive land in the same stretch, from April into June. Your tear film relies on a thin oily outer layer to slow evaporation of the water beneath it, and dry, moving air speeds that evaporation up. A May afternoon at this elevation, after weeks with almost no rain, can leave eyes stinging after an hour of yard work or a walk in the open.`,
      },
      {
        list: [
          `Plan outdoor chores and long walks for early morning, before the afternoon warms and any breeze picks up.`,
          `Wear wraparound sunglasses. They cut glare off pale ground and block some of the wind.`,
          `Pause in the shade for a few slow, complete blinks rather than rubbing your eyes.`,
          `Keep a hat with a brim in the car for errands and ball fields.`,
        ],
      },
      { h: 'Big daily swings at altitude' },
      {
        p: `Thin, dry air warms fast in the sun and cools fast after dark. In April, May and June the gap between the normal high and the normal low runs about 34 to 35 degrees, and even in winter it stays above 30. That means a cold morning commute with the car heater on, a warm afternoon with the AC running, and a chilly evening by a heater, all in one day. Each of those blowers aims dry air at the face.`,
      },
      {
        p: `Set the car’s vents toward your chest or the windshield, and switch to recirculate once the cabin is comfortable. At home, notice where you sit in relation to the heater or the cooler’s outlet; moving a chair a few feet can make a difference by evening.`,
      },
      { h: 'The summer storm season' },
      {
        p: `By July the pattern flips. Rainfall jumps from about half an inch in June to more than three and a half inches, and the daily swing narrows to about 28 degrees in August as clouds and moisture move in. Arizonans call this the monsoon. It brings welcome relief from the spring dryness, but storm fronts can push gusts and dust ahead of the rain. If you’re caught outside as a storm builds, turn your back to the wind and protect your eyes with glasses until it passes.`,
      },
      {
        p: `If dust or grit does get into an eye and won’t blink out, skip the drops and see an eye doctor or urgent care. A lubricating drop isn’t meant for something lodged in the eye.`,
      },
      { h: 'Freezing nights and indoor heat' },
      {
        p: `Many people picture southern Arizona as warm all winter, but Sierra Vista’s December and January lows average below freezing. Furnaces, heat pumps and space heaters run in the evenings and early mornings, and warming cold air without adding moisture leaves it drier still. A bedroom humidifier, a lower thermostat at night, and keeping a space heater pointed at your feet rather than your face all help. Our guide to [dry eyes from cold air](/guides/dry-eyes-from-cold-air) covers the outdoor side of winter.`,
      },
      { h: 'Using Quell in the high desert' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives the Uses as: {uses}. Directions: {directions}. Before each use, keep this line in mind: {tip}.`,
      },
      {
        p: `The storage line reads: {storage}. A car parked in the sun in June runs well past that, so carry the bottle in a bag rather than the glove box. The panel’s caution reads: {warnings}. The label also says: {doNotUse}. So check the color before each use, and know what normal looks like: {milky}. Everything is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Sierra Vista' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Sierra Vista, Huachuca City and anywhere else in the United States. Guest checkout works fine, shipping is {shipping} on one or two bottles, and orders of {freeBottles} or more ship free. You’ll get tracking by email, but no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. See the [Sierra Vista page](/eye-drops/sierra-vista-az) and the [Arizona page](/eye-drops/state/arizona) for local details, and our [Tucson guide](/guides/dry-eyes-in-tucson) for the low-desert city to the northwest.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Drops can ease the feeling of dryness, but they can’t explain it. An eye doctor can find the cause and decide what to do. Quell’s label sets out when to stop: {stopUse}`,
      },
      {
        p: `Don’t wait for a routine visit if you have eye pain, vision that stays blurry, sudden sensitivity to light, or something stuck in the eye. Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Sierra Vista, Arizona?',
        a: 'May, at 0.20 inch of precipitation in NOAA’s 1991–2020 normals for the Sierra Vista station, followed closely by April at 0.25. March through May together average less than an inch.',
      },
      {
        q: 'How much rain does Sierra Vista get in the monsoon?',
        a: 'NOAA’s normals for the Sierra Vista station list 3.53 inches in July and 3.31 in August. Those two months bring more than half of the roughly 13 inches the station records in a normal year.',
      },
      {
        q: 'Does it freeze in Sierra Vista in winter?',
        a: 'Often at night. The normal low for both December and January at the Sierra Vista station is 29.5°F, though afternoons in those months average about 61°F. That swing keeps heaters running mornings and evenings.',
      },
      {
        q: 'Does Quell ship to Sierra Vista?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to any US address, Sierra Vista included. Checkout works as a guest, and a tracking email arrives once the order is on its way.',
      },
    ],
  },
  /*
   * Sources checked 2026-11-24 for dry-eye-relief-paso-robles-ca:
   * - NOAA Regional Climate Centers ACIS, 1991-2020 monthly normals, station
   *   PASO ROBLES MUNICIPAL AP (GHCN USW00093209), elev 820 ft.
   *   Raw JSON: .daily-job/acis1124/USW00093209.json
   *   (annual precip 12.15 in by summing months; Jan 2.74, Feb 2.48, Mar 2.42,
   *   Dec 1.98 = 9.62 of 12.15; Jun 0.04, Jul 0.08, Aug 0.01, Sep 0.06 = 0.19;
   *   normal max Aug 94.0, Jul 93.2, Sep 90.1, Dec 60.3 F; normal min Aug
   *   53.2, Jul 53.6, Dec 33.4, Jan 35.1 F; high minus low Aug 40.8, Sep 40.2,
   *   Jul 39.6, Dec 26.9 F; snowfall 0.0 every month)
   * No humidity or wind numbers: the station is not in relhum23 or wndspd23.
   */
  {
    slug: 'dry-eye-relief-paso-robles-ca',
    title: 'Dry eye relief in Paso Robles, California',
    description:
      'Paso Robles summers swing about 40 degrees from dawn to afternoon with almost no rain. NOAA’s airport numbers and how to keep your eyes comfortable.',
    category: 'local',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Paso Robles summers are rainless and full of swings: at the airport, a normal August day runs from about 53°F at dawn to 94°F in the afternoon, and June through September together average less than a fifth of an inch of rain. For dry eyes, wear wraparound sunglasses outdoors, keep the car’s AC and heater off your face, blink fully at screens, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Paso Robles in NOAA’s numbers' },
      {
        p: `NOAA’s 1991–2020 climate normals for Paso Robles Municipal Airport, at about 820 feet, describe an inland valley that gets a winter’s worth of rain and then almost nothing for months:`,
      },
      {
        list: [
          `About 12.2 inches of precipitation in a normal year.`,
          `December through March bring about 9.6 inches of that, led by January at 2.74.`,
          `June, July, August and September total 0.19 inch combined. August averages a hundredth of an inch.`,
          `Normal highs reach 93.2°F in July, 94.0°F in August and 90.1°F in September.`,
          `Normal lows stay in the low 50s even in midsummer, and fall to 33.4°F in December.`,
        ],
      },
      { h: 'A 40-degree day' },
      {
        p: `The number that sets Paso Robles apart in these records is the daily range. In August the normal high and low are 40.8 degrees apart, and July and September are close behind. You might scrape a cold windshield at 6 a.m., drive with the heater on, and need the AC by early afternoon. Each change of season inside the car puts a vent’s worth of dry, moving air on your face.`,
      },
      {
        list: [
          `Aim vents at your chest or the glass, never straight at your eyes.`,
          `Use recirculate once the cabin is comfortable so the fan can slow down.`,
          `Dress in layers so you aren’t cranking the heat in the morning and the AC by lunch to make up for one outfit.`,
          `Keep sunglasses in the car for the late-day drive west into the sun.`,
        ],
      },
      { h: 'Four months with almost no rain' },
      {
        p: `From June through September the station averages less than a fifth of an inch of rain in total. Dry ground, dry grass and long, hot afternoons mean the air near your face carries little moisture and plenty of fine dust whenever a breeze kicks up or a truck rolls down a gravel road. Your tear film relies on its oily outer layer to slow evaporation, and dry, moving air works against it.`,
      },
      {
        p: `Outdoor work and play are easier on the eyes early in the day, before the afternoon heat builds. If you’re out in the heat of the afternoon, take regular breaks in the shade and blink slowly and fully a few times. If dust or a speck gets into your eye and doesn’t wash out with normal tears, have an eye doctor or urgent care check it rather than reaching for drops.`,
      },
      { h: 'Evenings outside, mornings indoors' },
      {
        p: `Those cool summer nights pull a lot of life outdoors: a patio dinner, a concert on the lawn, a walk downtown after the heat breaks. A breeze at dusk feels good but dries the eyes, and a propane patio heater or fire pit aimed at the table adds heat and smoke. Sit upwind of fire pits and away from the heater’s face. Then, back inside, the house may have been closed up and cooled since morning; open windows early the next morning to let in fresh, cool air before switching the AC back on.`,
      },
      { h: 'The wet months, and the heater' },
      {
        p: `Winter is when Paso Robles gets its rain, and December nights average just above freezing. Outdoors, the air is damper than at any other time of year. Indoors is another matter: furnaces and space heaters warm the cold air without adding moisture, and many people spend more hours at screens when the weather keeps them in. Keep heaters pointed at your feet, try a humidifier in the bedroom, and look away from the screen every so often. Our [screens and your tear film](/guides/screens-and-your-tear-film) guide explains why blinking slows when you focus.`,
      },
      { h: 'Quell and its label' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Uses, from its Drug Facts panel: {uses}. Directions: {directions}. Active ingredients: {actives}.`,
      },
      {
        p: `The storage line matters here, because a summer car interior or a sunny windowsill can easily pass it: {storage}. Keep the bottle in a cool cupboard or a bag you carry with you. The label also says: {warnings}. The [Drug Facts page](/drug-facts) has the full panel.`,
      },
      { h: 'Getting Quell in Paso Robles' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Paso Robles, Templeton, Atascadero and the rest of the country. There’s no account to create, shipping is {shipping} for one or two bottles, and {freeBottles} or more ship free. Tracking comes by email after the order ships; we don’t promise a delivery date. An unopened bottle can be refunded within {returnDays} days of delivery, and you don’t have to return it. The [Paso Robles page](/eye-drops/paso-robles-ca) and the [California page](/eye-drops/state/california) have more, and the [San Luis Obispo guide](/guides/dry-eye-relief-san-luis-obispo) covers the coast side of the county.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay dry despite these habits, an eye doctor can find the cause and decide what to do. Quell’s label is clear about when to stop: {stopUse}`,
      },
      {
        p: `Go sooner for pain, light sensitivity, vision that doesn’t clear with blinking, or anything that got into the eye. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) explains what each one means for timing.`,
      },
    ],
    faq: [
      {
        q: 'How much does the temperature drop at night in Paso Robles?',
        a: 'In August, NOAA’s normals for Paso Robles Municipal Airport put the high at 94.0°F and the low at 53.2°F, about a 41-degree drop. July and September swing nearly as much.',
      },
      {
        q: 'How much rain does Paso Robles get in summer?',
        a: 'Almost none. June through September total 0.19 inch combined in NOAA’s 1991–2020 normals for the airport, and August averages just 0.01 inch. Most of the year’s roughly 12 inches falls from December through March.',
      },
      {
        q: 'Why do my eyes feel dry in Paso Robles?',
        a: 'Long rainless summers, dusty breezes, and a daily temperature swing that has the car heater and the AC both blowing on your face within a few hours all speed evaporation from the tear film. Winter heaters do the same indoors.',
      },
      {
        q: 'Can I order Quell to Paso Robles?',
        a: 'Yes. Quell ships to any US address from Brentwood, Tennessee, including Paso Robles. You can check out as a guest, and you’ll get a tracking email once it ships.',
      },
    ],
  },
  /*
   * Sources checked 2026-11-24 for dry-eye-relief-durham-nc:
   * - NOAA Regional Climate Centers ACIS, 1991-2020 monthly normals, station
   *   DURHAM (GHCN USC00312515, cooperative station), elev 400 ft.
   *   Raw JSON: .daily-job/acis1124/USC00312515.json
   *   (annual precip 48.57 in by summing months; Jun 5.24, Aug 5.23 wettest;
   *   Feb 2.91 driest, Oct 3.35, Dec 3.34; normal max Jan 48.9, Jul 87.0 F;
   *   normal min Jan 27.9, Feb 30.3, Dec 32.2, Jul 68.8 F; snowfall missing,
   *   left out)
   * No humidity or wind numbers: the station is not in relhum23 or wndspd23.
   */
  {
    slug: 'dry-eye-relief-durham-nc',
    title: 'Dry eye relief in Durham, North Carolina',
    description:
      'Durham’s January nights average below freezing and February is its driest month. NOAA’s numbers, and what helps eyes through heat and AC season.',
    category: 'local',
    addedOn: '2026-11-24',
    body: [
      {
        p: `In Durham, dry eyes tend to follow the thermostat. January and February nights average at or below freezing, so the heat runs for months, and summer’s muggy highs in the upper 80s keep the AC on from June into September. Keep vents and heaters off your face, blink fully during screen work, use a lubricating drop as its label directs, and see an eye doctor for pain or changes in vision.`,
      },
      { h: 'Durham’s weather in the NOAA record' },
      {
        p: `NOAA’s 1991–2020 climate normals for the Durham cooperative station, about 400 feet above sea level, show a four-season Piedmont climate with steady precipitation and real winter cold:`,
      },
      {
        list: [
          `About 48.6 inches of precipitation in a normal year.`,
          `June (5.24 inches) and August (5.23) are the wettest months.`,
          `February is the driest at 2.91 inches, and October and December each average under 3.4.`,
          `January’s normal low is 27.9°F and February’s 30.3°F. December averages 32.2°F.`,
          `July is the warmest month, with a normal high of 87.0°F and a low of 68.8°F.`,
        ],
      },
      {
        p: `The station doesn’t publish a snowfall normal, so this guide leaves snow out.`,
      },
      { h: 'Below-freezing nights and months of heat' },
      {
        p: `With lows under freezing in January and February and close to it in December, Durham homes run the heat from late fall into spring. Cold air holds little water, and warming it without adding moisture makes it drier still by the time it reaches your living room. Your tear film’s outer oil layer slows evaporation from the watery layer underneath, but warm, dry air blowing from a register or heat pump wears it down between blinks.`,
      },
      {
        list: [
          `Find the vents near where you sit, sleep and work, and angle them or move the furniture.`,
          `Run a humidifier in the bedroom and clean it as its maker directs.`,
          `Turn the thermostat down a few degrees at night.`,
          `In the car, send the heat to the floor once the windshield clears.`,
        ],
      },
      {
        p: `The [winter heating guide](/guides/winter-heating-and-dry-eyes) goes into heat pumps, furnaces and humidifiers in more depth.`,
      },
      { h: 'February: the driest month' },
      {
        p: `February is the low point of the year for precipitation at the Durham station, with 2.91 inches, and it comes when the heat has already been running for months. Late winter is often when people notice their eyes most: burning by midafternoon, a gritty feel when they wake, or the urge to rub. A walk on a cold, bright February day can bring tears from the wind and then leave eyes drier when you come back into a warm house. Wraparound sunglasses help outside, and a few slow blinks after you come in help the tear film settle.`,
      },
      { h: 'Wet, muggy summers in chilled rooms' },
      {
        p: `June and August each bring more than five inches of rain, and July nights stay near 69°F. That’s humid air outdoors, which is kind to the eyes. Indoors, though, the AC runs hard to keep up, and offices, classrooms and labs are often kept cool enough to need a sweater. Cold, dry air from a ceiling diffuser falls straight onto the desk below.`,
      },
      {
        list: [
          `If a vent sits right above your desk, ask whether it can be redirected, or move your monitor and chair out from under it.`,
          `Step outside at lunch. The change of air is good for your eyes as well as your mood.`,
          `Keep a light layer at work so you don’t end up running a space heater under the desk in July.`,
        ],
      },
      { h: 'Long screen days' },
      {
        p: `Plenty of Durham workdays are spent at a screen, in an office, a hospital, a lab or at home. When you concentrate on a screen you blink less often, and many blinks don’t fully close. Every so often look at something across the room and blink slowly and completely. Lower the top of the monitor to just below eye level so your lids cover more of the eye. Our guide to [screens and your tear film](/guides/screens-and-your-tear-film) has more.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. According to its Drug Facts panel, its Uses are: {uses}. Directions: {directions}. Its warning reads: {warnings}.`,
      },
      {
        p: `Storage: {storage}. That’s easy to meet in a Durham house, but a car parked in July sun can go well past the top of that range. Before each drop, check the color, since the label says: {doNotUse}. And keep the tip clean, because the panel adds: {tip}. See the full [Drug Facts](/drug-facts).`,
      },
      { h: 'Ordering Quell to Durham' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Durham and every other US address. You can buy as a guest, and shipping is {shipping} until you reach {freeBottles} bottles, when it’s free. Tracking arrives by email, and since we don’t promise a delivery date, it’s smart to reorder with a little left in the bottle. Unopened bottles may be refunded within {returnDays} days of delivery with no need to send them back. See the [Durham page](/eye-drops/durham-nc) and the [North Carolina page](/eye-drops/state/north-carolina), or read our [Raleigh guide](/guides/dry-eye-relief-raleigh-nc) for the city next door.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Eye drops can ease dryness but won’t tell you what’s behind it. An eye doctor can find the cause and decide what to do. Quell’s label says when to stop: {stopUse}`,
      },
      {
        p: `Call sooner if you have pain in the eye, blurring that doesn’t clear, new sensitivity to light, or anything that got into the eye. The [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) page walks through each.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Durham, NC?',
        a: 'February, at 2.91 inches of precipitation in NOAA’s 1991–2020 normals for the Durham cooperative station. October and December are next, each just under 3.4 inches.',
      },
      {
        q: 'How cold does it get in Durham in winter?',
        a: 'The Durham station’s normal January low is 27.9°F, with February at 30.3°F and December at 32.2°F. Afternoons in January average 48.9°F, so heating runs most of the winter.',
      },
      {
        q: 'Why do my eyes get dry in Durham in the summer?',
        a: 'Outdoors the summer air is humid, but air conditioning works hard from June into September, and cold, dry air from vents and diffusers dries the tear film. Long screen sessions lower the blink rate on top of that.',
      },
      {
        q: 'Can I get Quell eye drops shipped to Durham?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to any US address, including Durham. Checkout works as a guest, and a tracking email follows once your order ships.',
      },
    ],
  },
  {
    slug: 'dry-eyes-for-crossword-and-puzzle-solvers',
    title: 'Dry eyes for crossword and puzzle solvers',
    description:
      'Small grids, newsprint and puzzle apps hold your gaze and slow your blinking. How crossword and sudoku fans can keep their eyes comfortable.',
    category: 'using',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Crosswords, sudoku and word games dry the eyes because they hold your focus on a small, close target, and people blink less often while they concentrate. Light the page from the side, take a short break after each section of the grid, look across the room and blink fully, and keep heater vents off your face. A lubricating eye drop used as its label directs can ease dryness; an eye doctor should check anything more.`,
      },
      { h: 'Why a puzzle dries your eyes' },
      {
        p: `Each time you blink, your lids spread a fresh layer of tears across the eye. The outer layer of that film is oily, and it slows the evaporation of the watery layer beneath. When you stare at a clue and run through possible answers, your blink rate drops, and many blinks only half close. The tear film thins between blinks, and after twenty minutes on a tough Saturday grid your eyes can feel gritty, hot or tired.`,
      },
      {
        p: `Puzzles add a twist that reading doesn’t: you look back and forth between the clue list and the grid, or scan rows and columns for a missing digit, holding the same fixed gaze the whole time. It’s concentrated work for the eyes even when it feels like relaxing.`,
      },
      { h: 'Newsprint, puzzle books and small type' },
      {
        p: `Newspaper puzzles often print clues in small type on gray paper, and puzzle books pack grids tight to fit more on a page. Squinting narrows the eyelids, and leaning in close tends to make you hold still and stare. A few changes make the page easier to work with:`,
      },
      {
        list: [
          `Light the page from the side or over your shoulder, not from a lamp shining back into your eyes.`,
          `Use a lamp bright enough that you aren’t straining, especially on dark winter mornings.`,
          `Hold the puzzle a little below eye level so your lids cover more of the eye while you look down.`,
          `If you wear reading glasses, keep them on for the whole solve rather than pushing them up and leaning in.`,
          `Consider a large-print puzzle book if you find yourself squinting at every clue.`,
        ],
      },
      { h: 'Puzzle apps on a phone or tablet' },
      {
        p: `Daily word games, sudoku apps and digital crosswords all keep you on a small screen held close to your face. Screens are linked to lower blink rates, and a phone in bed is often held at eye level or above, which leaves more of the eye exposed to the air. Prop the tablet on a stand slightly below eye level, raise the screen brightness enough that you aren’t peering, and close the app between puzzles instead of moving straight to the next one. Our guide to [screens and your tear film](/guides/screens-and-your-tear-film) explains the blinking side in more detail.`,
      },
      { h: 'Building breaks into a solve' },
      {
        p: `Puzzles have natural stopping points, and using them as rest stops costs nothing:`,
      },
      {
        list: [
          `After each corner of a crossword, look at something across the room for a few seconds and blink slowly and completely.`,
          `In sudoku, pause after you finish each block or each full row.`,
          `If you’re timing yourself, rest your eyes between puzzles rather than during them.`,
          `When you get stuck, put the puzzle down and walk away. You’re more likely to see the answer when you come back anyway.`,
        ],
      },
      {
        p: `Close your eyes gently for a moment during each break. A full, unhurried blink spreads more tear film than the quick, partial blinks that happen while you concentrate.`,
      },
      { h: 'The room you solve in' },
      {
        p: `Many people do the morning puzzle at the kitchen table with the heat running, or the evening one in an armchair beside a lamp and a heating vent. Warm, dry air from a register or space heater speeds evaporation from the eye. Turn the vent away, move the chair, or try a humidifier in the room where you spend the most time. Our [jigsaw puzzles and board games](/guides/dry-eyes-from-jigsaw-puzzles-and-board-games) guide covers the holiday-table version of this, and [dry eyes when reading](/guides/dry-eyes-when-reading) goes deeper on books.`,
      },
      { h: 'Using a lubricating drop around your solving' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists these Uses: {uses}. Directions: {directions}. You may find a drop before a long session, or at the break you take after a hard section, fits easily into those three times a day.`,
      },
      {
        p: `Give your eyes a moment after a drop, with a few slow blinks, before you go back to small print. The label describes the drops this way: {milky}. Keep the bottle’s tip off the table and your hands, because the label says: {tip}. The rest of the panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When it’s more than dry eyes' },
      {
        p: `If letters blur and don’t sharpen when you blink, if you see double, or if the grid looks wavy or has missing patches, see an eye doctor. Those aren’t dryness problems a drop should be covering. The label also says to stop and ask a doctor in specific situations: {stopUse}`,
      },
      {
        p: `An eye doctor can find the cause of ongoing dryness and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you decide how soon.`,
      },
    ],
    faq: [
      {
        q: 'Can doing crossword puzzles strain your eyes?',
        a: 'Long stretches of close focus on small type can leave eyes feeling tired and dry, mostly because people blink less while they concentrate. Good side lighting and short breaks after each section of the grid usually make a big difference.',
      },
      {
        q: 'Why do my eyes get tired doing sudoku?',
        a: 'Sudoku keeps your gaze fixed while you scan rows, columns and boxes, and fixed focus lowers your blink rate. The tear film thins between blinks, which leaves eyes feeling dry or heavy. Pause after each block and blink slowly.',
      },
      {
        q: 'Is it easier on the eyes to do puzzles on paper or on a phone?',
        a: 'Either can dry your eyes if you stare without breaks. Paper lets you control the light and the distance more easily; a phone tends to be held closer and higher. Whichever you use, keep it slightly below eye level and rest your eyes between puzzles.',
      },
      {
        q: 'Can I use eye drops in the middle of a puzzle?',
        a: 'Yes, as long as you stay within the label’s directions: {directions}. Close your eyes for a moment afterward and blink a few times before you go back to small print.',
      },
    ],
  },
  {
    slug: 'dry-eyes-for-journalists-and-reporters',
    title: 'Dry eyes for journalists and reporters',
    description:
      'Deadline screens, field reporting in wind and cold, live-shot lights and writing in the car. How reporters can keep their eyes comfortable.',
    category: 'using',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Reporting dries the eyes from two directions: long deadline stretches at a screen, where blinking slows, and field work in wind, cold, heat, smoke and dust, often followed by writing in a car with the heater or AC blowing. Point vents away from your face, wear wraparound glasses outdoors, take blink breaks between drafts, and use a lubricating drop as its label directs. Anything in the eye or any pain needs an eye doctor.`,
      },
      { h: 'Deadline hours at the screen' },
      {
        p: `Writing on deadline means hours of fixed focus on a laptop or monitor: reading notes, scrubbing through recordings, checking spellings, moving paragraphs. Screens lower the blink rate, and many blinks don’t close all the way. The tear film’s oily outer layer slows evaporation from the watery layer underneath, but only while blinks keep renewing it. Between them, the surface of the eye dries.`,
      },
      {
        list: [
          `Set the top of the monitor just below eye level so you look slightly down.`,
          `After each section you file or each round of edits, look across the room and blink slowly a few times.`,
          `Turn the brightness down to match the room if the screen is glaring at night.`,
          `Use a larger font while drafting, so you aren’t leaning in, and shrink it back before you file if layout matters.`,
        ],
      },
      { h: 'Out in the weather on assignment' },
      {
        p: `A storm, a parade, a protest, a football game or a fire scene can keep a reporter or photographer outside for hours with no choice about the weather. Wind, cold and dry air all pull moisture from the eyes, and you can’t step inside when the story is happening outdoors. Wraparound sunglasses or clear safety glasses block more wind than regular frames. A hat with a brim helps in sun and light rain. Turn your back to gusts when you’re taking notes or reading a phone.`,
      },
      {
        p: `At fires, demolitions, construction sites and dusty roads, the air itself can carry grit and smoke. If something gets into your eye and won’t blink out, don’t try to rinse it away with a lubricating drop. Get it looked at by an eye doctor or urgent care. If a chemical splashes into your eye, call Poison Control or get emergency care right away.`,
      },
      { h: 'Live shots, studio lights and cameras' },
      {
        p: `Broadcast reporters spend time under bright lights, looking into a lens or reading a prompter, trying not to blink on camera. Holding the eyes open on purpose is the opposite of what the tear film needs. Blink fully before the light goes on, and between takes close your eyes for a few seconds. Photographers and videographers who keep one eye at a viewfinder for long stretches can try a similar habit: lower the camera and blink between sequences.`,
      },
      { h: 'Writing in the car' },
      {
        p: `Plenty of stories get filed from a parked car, with a laptop on the steering wheel and the engine running for heat or cooling. The vents in a car sit close to your face, and a fan on high aims dry air straight at the eyes.`,
      },
      {
        list: [
          `Turn the dash vents toward the windshield or your chest.`,
          `Use recirculate once the cabin is comfortable, then lower the fan speed.`,
          `Crack a window for a few minutes between drafts if the weather allows.`,
          `Don’t drive while your vision is still settling after a drop.`,
        ],
      },
      {
        p: `Our guide to [dry eyes when driving in winter](/guides/dry-eyes-when-driving-in-winter) has more on vents and defrosters.`,
      },
      { h: 'Late nights and irregular hours' },
      {
        p: `Election nights, breaking news and late meetings push reporters past their usual hours. Tired eyes and dry eyes often show up together at the end of a long shift. If your schedule rotates, it can help to tie your drops to things you do every day, like arriving at work, filing your first story and wrapping up. Our [night shift guide](/guides/dry-eyes-on-the-night-shift) covers sleeping during the day.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its Uses as: {uses}. The directions read: {directions}. And the panel cautions: {warnings}.`,
      },
      {
        p: `A bottle that lives in a news van or a camera bag sees heat and cold, so check the storage line: {storage}. Keep it in an inside pocket in winter and out of a sunny dashboard in summer. Keep the cap on and the tip clean: {tip}. The full label is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay dry no matter how you set up your desk and your car, an eye doctor can find the cause and decide what to do. The label lists when to stop using Quell: {stopUse}`,
      },
      {
        p: `See someone promptly for pain, vision that stays blurry, sudden light sensitivity, or anything that got into the eye on assignment. Our page of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) explains which ones can’t wait.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when I’m writing on deadline?',
        a: 'Concentrating on a screen lowers your blink rate, and many blinks don’t fully close, so the tear film thins between them. Short breaks after each section, a screen set just below eye level, and keeping vents off your face all help.',
      },
      {
        q: 'How can TV reporters keep their eyes from drying out on camera?',
        a: 'Trying not to blink dries the eyes faster. Blink fully just before the light goes on, close your eyes for a few seconds between takes, and keep the bright lights from blowing heat across your face where you can.',
      },
      {
        q: 'What should I do if smoke or dust gets in my eyes while reporting?',
        a: 'Move away from the smoke or dust first. If something is stuck in your eye or it hurts, see an eye doctor or urgent care; for a chemical splash, call Poison Control or get emergency help right away. A lubricating drop isn’t meant for those situations.',
      },
    ],
  },
  {
    slug: 'dry-eyes-for-movers',
    title: 'Dry eyes for movers',
    description:
      'Cardboard dust, attics and garages, doors open to cold air, long drives in the truck. How professional movers can keep their eyes comfortable.',
    category: 'using',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Moving work dries and irritates the eyes in several ways at once: dust from cardboard, attics, garages and storage units, front doors propped open to winter wind or summer heat, sweat, and long drives with the truck’s vents blowing. Wear wraparound safety glasses while loading, keep cab vents off your face, blink often on breaks, and use a lubricating drop as labeled. Anything stuck in the eye needs an eye doctor or urgent care, not drops.`,
      },
      { h: 'Why moving day is hard on the eyes' },
      {
        p: `Your tear film is three thin layers: oil on the outside, water in the middle, and mucus against the eye. The oil slows the water from evaporating, and every blink spreads a fresh coat. A moving job attacks that film from every side. Dust and fibers float up from boxes and padding, air moves constantly through open doors, and hard physical work makes you focus on your footing and your grip rather than on blinking.`,
      },
      { h: 'Cardboard, paper and padding dust' },
      {
        p: `Packing paper, tape and new boxes shed fine fibers, and old boxes from a basement or storage unit carry years of dust. Moving blankets pick it up on every job and shake it loose on the next. Shaking out a blanket or tearing down a stack of boxes puts a cloud right at face level.`,
      },
      {
        list: [
          `Shake out moving pads outdoors, downwind of yourself and the crew.`,
          `Break down boxes at waist height and turn your face away as you flatten them.`,
          `Keep a pair of clear wraparound safety glasses on during packing and loading.`,
          `Wipe your hands before touching your face or eyes, and avoid rubbing them with dusty gloves.`,
        ],
      },
      { h: 'Attics, garages and storage units' },
      {
        p: `The dustiest work is usually in the places nobody cleans: attics in summer heat, garages full of yard tools, crawl spaces and storage units that haven’t been opened in years. Attic air on a summer afternoon is hot and dry, and pulling items off high shelves drops dust straight down. Look away when you lift something overhead, and wear glasses even for a quick trip up the ladder. If grit, insulation fibers or anything else gets in your eye and doesn’t blink out, get it checked by an eye doctor or urgent care instead of trying to flush it with a lubricating drop.`,
      },
      { h: 'Front doors, wind and weather' },
      {
        p: `On a move, the front door stays open for hours. In winter that pulls cold, dry wind through the house and over the crew. In summer you go from an air-conditioned living room to a hot driveway and back dozens of times. Wind on a loading ramp and the glare of sun off a white truck add to it. Wraparound sunglasses work outside; switch to clear ones when you head into a dim house so you aren’t tempted to push them up.`,
      },
      { h: 'Sweat, sunscreen and tired eyes' },
      {
        p: `Heavy lifting means sweat, and sweat or sunscreen running into the eyes stings. A headband or a cap with a sweatband helps keep it out. Long days add to the problem: by the last room of a big house, everyone is tired, and tired eyes tend to feel drier. Take your breaks out of the wind, close your eyes for a minute and blink slowly before you start the next load.`,
      },
      { h: 'Driving the truck between jobs' },
      {
        p: `Long-distance moves and back-to-back local jobs put movers behind the wheel for hours. Truck cabs have vents close to the face, and on a cold morning the heater runs on high. Point vents at the windshield or your chest, use recirculate once the cab is comfortable, and keep sunglasses handy for low winter sun. If you use a drop, do it before you start driving or at a stop, and wait until your vision is clear before pulling out. Our [winter driving guide](/guides/dry-eyes-when-driving-in-winter) has more on cab air.`,
      },
      { h: 'Quell’s label, for a bottle in the truck' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists the Uses as: {uses}. Directions: {directions}. Keep the tip off dusty surfaces, because the label says: {tip}.`,
      },
      {
        p: `A truck cab gets hot in summer and cold in winter, and the label gives a range: {storage}. Keep the bottle in a bag you bring inside rather than the door pocket. The panel also cautions: {warnings}. Wash or wipe your hands before you use it, especially mid-job. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dust and wind can make eyes uncomfortable, but some problems need a professional. An eye doctor can find the cause of ongoing dryness and decide what to do. Quell’s label says: {stopUse}`,
      },
      {
        p: `Don’t wait if something is stuck in your eye, if a cleaning chemical splashes into it (call Poison Control or get emergency care), or if you have pain, light sensitivity or blurred vision that doesn’t clear. Our page of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has the full list. Workers in similar trades may find our [warehouse workers guide](/guides/dry-eyes-for-warehouse-workers) useful too.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes hurt after a long day of moving boxes?',
        a: 'Cardboard and paper shed fine fibers, old boxes carry dust, and open doors keep air moving over your eyes for hours. Add sweat and less blinking while you lift, and eyes can end the day gritty and sore. Wraparound safety glasses and blink breaks help.',
      },
      {
        q: 'Should movers wear safety glasses?',
        a: 'Clear wraparound safety glasses keep cardboard dust, attic debris and wind away from the eyes during packing and loading. Follow whatever eye protection rules your employer sets, and switch to sunglasses on bright loading ramps.',
      },
      {
        q: 'What if insulation or dust gets in my eye on a moving job?',
        a: 'Step away from the dust and try blinking a few times. If something stays stuck or your eye hurts, have it checked by an eye doctor or urgent care. A lubricating eye drop isn’t designed to remove something lodged in the eye.',
      },
      {
        q: 'Can I keep eye drops in a moving truck?',
        a: 'Only if the cab stays within the label’s storage range: {storage}. Truck cabs get hotter and colder than that, so it’s safer to carry the bottle in a bag you take inside with you.',
      },
    ],
  },
  {
    slug: 'dry-eyes-at-a-turkey-trot',
    title: 'Dry eyes at a Turkey Trot',
    description:
      'An early Thanksgiving race means cold wind, a crowded start line and a hot kitchen afterward. How runners and walkers can keep their eyes comfortable.',
    category: 'seasonal',
    addedOn: '2026-11-24',
    body: [
      {
        p: `A Thanksgiving morning Turkey Trot is hard on dry eyes because it stacks three things in a few hours: standing in cold air at the start, running or walking into wind you make yourself, and then heading straight into a heated house and a hot kitchen. Wear wraparound sunglasses, keep your back to the wind while you wait, blink fully after you finish, and use a lubricating drop as its label directs.`,
      },
      { h: 'Thanksgiving morning, early and cold' },
      {
        p: `Thanksgiving falls on Thursday, November 26, in 2026, and many towns hold a Turkey Trot that morning, often a 5K that welcomes walkers, families and people in costumes alongside serious runners. Start times tend to be early so everyone can get home to cook. That puts you outside during the coldest part of the day, in late-November air that may be well below what your eyes are used to indoors.`,
      },
      {
        p: `Cold air holds little moisture, and a breeze moves it across the surface of your eyes quickly. Your tear film has an oily outer layer that slows evaporation of the water underneath, but steady wind wears it down faster than blinking replaces it. That’s why eyes can water in the cold and then feel dry and scratchy once you’re back inside.`,
      },
      { h: 'Waiting at the start line' },
      {
        p: `Corrals and start areas can mean twenty or thirty minutes of standing around in the open, sometimes in a parking lot or on a wide street where the wind has nothing to slow it down.`,
      },
      {
        list: [
          `Stand with your back to the wind, or tuck in behind a building, a tent or a group of people.`,
          `Wear a hat with a brim or a visor; it shades the eyes and breaks some of the breeze.`,
          `Put sunglasses on before you leave the car rather than squinting at the start.`,
          `Keep hand warmers and gloves on until the gun so you aren’t touching your face with cold, damp fingers.`,
        ],
      },
      { h: 'Running makes your own wind' },
      {
        p: `Even on a still morning, moving at running pace pushes air across your eyes, and you blink less when you’re watching your footing in a crowd. A course that heads into a headwind for the first half doubles the effect. Wraparound sunglasses block more of that airflow than flat lenses. If you’re walking the course, you still get the breeze, just less of it, and you have time to blink slowly and look around.`,
      },
      {
        p: `If your eyes water heavily during the race, blot the skin around them with a clean glove or sleeve rather than rubbing. Rubbing pushes grit around and irritates the lids. Our guide to [dry eyes when running](/guides/dry-eyes-when-running) covers training runs in more detail, and [how to protect your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) goes further on glasses and scarves.`,
      },
      { h: 'After the finish: from cold street to hot kitchen' },
      {
        p: `The Turkey Trot is usually followed by a day indoors. The furnace is running for guests, the oven has been on for hours, and the stovetop is busy. Opening a hot oven sends a blast of dry heat at face level. Then comes an afternoon of football on TV, when people tend to stare and blink less. For eyes that just spent an hour in cold wind, it adds up.`,
      },
      {
        list: [
          `Take a few minutes after the race to close your eyes and blink slowly before you start cooking.`,
          `Step back and turn your face aside when you open the oven door.`,
          `Turn down the thermostat a few degrees once the house fills with people and cooking heat.`,
          `During the game, look away from the screen at commercial breaks.`,
        ],
      },
      {
        p: `We have separate guides for [cooking holiday dinner](/guides/dry-eyes-when-cooking-holiday-dinner) and [watching Thanksgiving football](/guides/dry-eyes-watching-thanksgiving-football).`,
      },
      { h: 'Carrying eye drops on race morning' },
      {
        p: `A small bottle fits in a zip pocket or a running belt. Keep in mind what the label says about storage: {storage}. A late-November morning can be colder than the bottom of that range, so carry it in an inner pocket against your body rather than leaving it in a cold car through the race. Keep the cap on in the pocket, and remember the label’s instruction: {tip}.`,
      },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses: {uses}. Directions: {directions}. A drop once you’re done and back in the car or the house is easier than trying to use one at a crowded finish line. Wait for your vision to clear before you drive. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'If you’re running with family' },
      {
        p: `Many families make the Turkey Trot a group outing, with grandparents walking and kids running ahead. Quell’s label gives no directions for children, so if a child’s eyes bother them, ask their eye doctor or a pharmacist before using any drop. Adults in the group should use their own bottles rather than passing one around.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Cold, wind and an overheated house can all make eyes feel dry for a day. If the dryness hangs on, an eye doctor can find the cause and decide what to do. Quell’s label sets out when to stop: {stopUse}`,
      },
      {
        p: `See a doctor sooner for eye pain, a sudden change in vision, or anything that blew into your eye and stayed there. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help, and the [seasonal guides](/guides/topic/seasonal) cover the rest of the holidays.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes water during a cold Turkey Trot?',
        a: 'Cold wind dries the surface of the eye quickly, and your eyes respond by watering. Moving at race pace adds more airflow. Wraparound sunglasses and a brimmed hat cut down the wind, and slow blinks after the finish help your tear film settle.',
      },
      {
        q: 'What should I wear to protect my eyes at a Thanksgiving race?',
        a: 'Wraparound sunglasses are the most useful single item, since they block wind as well as glare. Add a hat with a brim or a visor, and gloves so you aren’t wiping your eyes with cold, damp fingers.',
      },
      {
        q: 'Can I carry eye drops in my pocket during a 5K?',
        a: 'Yes. A zip pocket close to your body keeps the bottle within the label’s storage range better than a cold car would. It’s usually easier to use a drop after the finish than during the race.',
      },
      {
        q: 'Why do my eyes feel dry on Thanksgiving afternoon?',
        a: 'A heated house full of guests, a hot oven opened again and again, and hours of staring at the game all dry the tear film. After a cold morning race, your eyes may already be feeling it. Blink breaks and a cooler thermostat help.',
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-in-laws-you-dont-know-well',
    title: 'Christmas gifts for in-laws you don’t know well',
    description:
      'Shopping for in-laws you’ve only met a few times? Practical, low-risk gift ideas for the couple, plus when a personal item like eye drops fits.',
    category: 'seasonal',
    addedOn: '2026-11-24',
    body: [
      {
        p: `For in-laws you don’t know well, give something the two of them can share and use up: good food from your area, a nice coffee or tea, a framed family photo, a cozy throw or a game for the holiday visit. Ask your partner what they already have. Save personal items such as eye drops for an in-law who has mentioned dry eyes, and include a note so the gift reads as thoughtful rather than pointed.`,
      },
      { h: 'Start with your partner' },
      {
        p: `Your partner grew up with these people. Before you shop, ask a few specific questions instead of “What do your parents like?”, which usually gets a shrug.`,
      },
      {
        list: [
          `What do they do on a normal weekend?`,
          `What did they talk about the last time you called them?`,
          `Is there anything in their house that’s worn out or that they complain about?`,
          `Do they prefer one gift for both of them, or something for each?`,
          `Is there a budget your family usually keeps to?`,
        ],
      },
      {
        p: `Agree on whether the gift is from both of you. For in-laws who are still getting to know you, a gift signed by the couple is usually the easier choice.`,
      },
      { h: 'Gifts that suit almost anyone' },
      {
        p: `When you don’t know someone’s taste, things that get used up, shared or displayed are hard to get wrong.`,
      },
      {
        list: [
          `Food from where you live: a local coffee roaster, jam, barbecue sauce, cheese or baked goods. It tells them something about your life together.`,
          `A framed photo of the two of you, or of a family occasion they attended.`,
          `A soft throw blanket for the couch.`,
          `A card or board game the whole family can play during the visit.`,
          `A gift card to a restaurant in their own town, for a night out on you.`,
          `A wall calendar printed with family photos from the year.`,
        ],
      },
      { h: 'Gifts to skip' },
      {
        p: `Clothing sizes, perfume, home decor in a particular style and anything that suggests self-improvement are risky with people you don’t know well. So are gifts that need upkeep, like a pet or a high-maintenance plant. Personal-care items fall in this group too, unless you know they’re wanted.`,
      },
      { h: 'Should you give in-laws eye drops?' },
      {
        p: `Only if you know they use them. If your mother-in-law has mentioned that her eyes feel dry when she reads, or your father-in-law keeps a bottle in the car, a bottle of the kind they like can be a welcome practical gift, especially tucked into a basket alongside a reading lamp, a puzzle book or that coffee from your town. If you’re guessing, choose something else. A health product from someone you’ve met twice can feel like a comment.`,
      },
      {
        p: `If you do include eye drops, a short note helps: “You mentioned your eyes get dry on the long drive, so we thought these might help.” It shows you listened.`,
      },
      { h: 'If the gift is Quell' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists its Uses as: {uses}. Two lines on the panel are worth knowing before you give it. First, its caution: {warnings}. If you don’t know whether an in-law has an egg or bird allergy, ask your partner, or pick a different gift. Second, the appearance: {milky}. A note saying that’s normal saves a worried phone call.`,
      },
      {
        p: `Quell comes as a {size} bottle. Orders ship from Brentwood, Tennessee, to any US address, so you can send it straight to their house and add a card. Shipping is {shipping} on smaller orders and free on {freeBottles} or more bottles. We can’t promise a delivery date, so order early if you want it there before Christmas. If they decide it isn’t for them, an unopened bottle can be refunded within {returnDays} days of delivery without being sent back. See our guide to [sending Quell as a gift](/guides/sending-quell-as-a-gift) for the steps.`,
      },
      { h: 'Making the gift feel personal' },
      {
        p: `A short handwritten note matters more with in-laws you’re still getting to know than it does with close family. Mention something specific: a meal they cooked when you visited, a story they told, a place they recommended. Even a simple “We’re glad to be spending the holidays with you” lands better than a card signed with two names and nothing else.`,
      },
      {
        p: `If you’ll be with them at Christmas, open gifts when they do, thank them warmly for theirs, and don’t worry about matching what they spent. For more ideas, see our guides for a [mother-in-law](/guides/christmas-gifts-for-a-mother-in-law) and a [father-in-law](/guides/christmas-gifts-for-a-father-in-law), or browse all our [holiday guides](/guides/topic/seasonal).`,
      },
    ],
    faq: [
      {
        q: 'What do you buy in-laws you barely know for Christmas?',
        a: 'Something the two of them can share and use up is the safest choice: local food or coffee from your area, a framed family photo, a throw blanket, a game for the visit or a gift card to a restaurant near them. Ask your partner what they already have.',
      },
      {
        q: 'Should a Christmas gift for in-laws be for both of them?',
        a: 'With in-laws you don’t know well, one shared gift signed by you and your partner is usually easiest. It avoids guessing two people’s tastes and makes it clear the gift comes from the couple.',
      },
      {
        q: 'Is it rude to give in-laws a personal-care gift?',
        a: 'It can come across that way if you’re guessing. If an in-law has told you they use something, like eye drops for dry eyes, a bottle with a kind note shows you listened. Otherwise, choose a gift that doesn’t touch on health or appearance.',
      },
      {
        q: 'How much should you spend on in-laws for Christmas?',
        a: 'There’s no set amount. Ask your partner what their family usually spends on each other, and stay close to that. A thoughtful note and a gift they’ll use matter more than the price.',
      },
    ],
  },
  {
    slug: 'dry-eyes-walking-the-dog-in-winter',
    title: 'Dry eyes walking the dog in winter',
    description:
      'Dark mornings, cold wind and a dog that won’t wait. How to keep your eyes comfortable on winter dog walks and when you come back inside.',
    category: 'seasonal',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Winter dog walks dry the eyes because you’re out in cold, moving air twice a day, often in the dark, with one hand on a leash and no way to turn your back on the wind. Wear wraparound glasses and a brimmed hat, plan the route so the wind is at your back on the way home, blink slowly when the dog stops to sniff, and keep heat vents off your face once you’re inside.`,
      },
      { h: 'Why winter walks sting' },
      {
        p: `Cold air holds little moisture, and wind pushes it across the surface of your eyes. Your tear film relies on a thin oily outer layer to slow evaporation from the watery layer beneath it. On a still day, blinking keeps up. In a winter wind it can’t, so eyes water at first and then feel dry, gritty or burning by the time you’re back at the door. A walk is also a commitment: the dog needs to go out whatever the weather, and you can’t cut it short as easily as you’d skip a jog.`,
      },
      { h: 'Dress your eyes for the walk' },
      {
        list: [
          `Wraparound sunglasses on bright days, and clear or lightly tinted wraparounds on gray mornings and after dark.`,
          `A hat with a brim, or a hood with a stiff edge, to shade the eyes and break the wind.`,
          `A scarf or neck gaiter pulled up loosely, angled so your breath doesn’t fog your glasses.`,
          `Gloves that let you handle the leash and waste bags without taking them off to wipe your eyes.`,
        ],
      },
      { h: 'Plan the route around the wind' },
      {
        p: `If you can, head out into the wind and come home with it behind you. You’ll face the cold while you’re fresh, and the return stretch, when your eyes are already dry, will be easier on them. Streets lined with houses or trees block more wind than an open field, a park or a waterfront path. On especially raw days, a shorter loop on sheltered streets is kinder to your eyes and still gets the job done.`,
      },
      { h: 'Use the sniff stops' },
      {
        p: `Dogs stop constantly, and each pause is a chance to rest your eyes. Turn away from the wind, close your eyes for a second, and blink slowly two or three times. On long walks, a few of those small breaks add up. Keep your free hand away from your eyes, especially after picking up after the dog.`,
      },
      { h: 'Dark mornings and evenings' },
      {
        p: `Short days push many dog walks into darkness. Headlights, streetlights and the glare off wet pavement make people squint, and squinting into the light usually comes with staring rather than blinking. A clear pair of glasses still blocks wind at night, and a reflective vest or a light on the leash makes you easier to see without you having to watch every car. Our guide to [dry eyes when it gets dark early](/guides/dry-eyes-when-it-gets-dark-early) covers the indoor side of short days.`,
      },
      { h: 'Snow days and glare' },
      {
        p: `Fresh snow reflects bright sunlight back up under a hat brim, and walking on it makes you watch the ground closely. Sunglasses make a big difference on a sunny morning after a storm. If the dog likes to plow through drifts and shake off next to you, a quick turn of the head saves you a faceful of snow and grit.`,
      },
      { h: 'Coming back into a heated house' },
      {
        p: `The walk is only half of it. Back inside, the furnace is running, and the warm air is drier than it feels. Many people come in, kick off their boots and sit right next to a heat vent or space heater to warm up, which dries eyes that are already irritated from the wind.`,
      },
      {
        list: [
          `Warm up away from the vent or with the space heater pointed at your feet.`,
          `Close your eyes for a minute and let them settle before you pick up your phone.`,
          `Run a humidifier in the room where you spend the most time.`,
          `Keep a towel by the door for the dog, and wash your hands before touching your face.`,
        ],
      },
      {
        p: `Our [winter commute guide](/guides/dry-eyes-on-a-winter-commute) has more on walking in the cold.`,
      },
      { h: 'Where a lubricating drop fits' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives the Uses as: {uses}. Directions: {directions}. A drop after the morning walk, once you’ve warmed up, is an easy habit to remember.`,
      },
      {
        p: `Keep the bottle in the house rather than in a coat hanging by a cold door, since the label says: {storage}. And keep the tip clean, especially with a dog around: {tip}. See the [Drug Facts page](/drug-facts) for the whole panel.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Wind and cold can make eyes feel dry for a few hours. If dryness lasts or keeps coming back, an eye doctor can find the cause and decide what to do. Quell’s label says: {stopUse}`,
      },
      {
        p: `If a branch, a pine needle or anything else scratches or lands in your eye on a walk, don’t rely on drops. See an eye doctor or urgent care, and check our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes water when I walk my dog in the cold?',
        a: 'Cold wind dries the surface of your eyes, and watering is the eyes’ response. The tears don’t stay long enough to help, so eyes can feel dry afterward. Wraparound glasses and walking home with the wind behind you both help.',
      },
      {
        q: 'Should I wear sunglasses to walk my dog in winter?',
        a: 'On bright days, especially with snow on the ground, wraparound sunglasses block both glare and wind. In the dark, clear wraparound glasses still keep the wind off your eyes.',
      },
      {
        q: 'Why do my eyes feel dry after coming inside from a winter walk?',
        a: 'Your eyes have just spent time in cold wind, and then they meet warm, dry air from the furnace. Warming up right next to a heat vent makes it worse. Sit away from the vent and close your eyes for a minute to let them settle.',
      },
    ],
  },
  {
    slug: 'what-3-times-per-day-means-if-you-work-nights',
    title: 'What “3 times per day” means if you work nights',
    description:
      'Quell’s directions say three times per day. Here’s how to read “per day” when your day starts in the afternoon and ends after sunrise.',
    category: 'label',
    addedOn: '2026-11-24',
    body: [
      {
        p: `On Quell’s label, the directions read: {directions}. If you work nights, “per day” makes the most sense as your waking day, the stretch from when you get up to when you go to sleep, not the calendar date. Space the three doses across that stretch, for example once after you wake, once partway through your shift, and once near the end, and ask a pharmacist if your schedule makes that hard.`,
      },
      { h: 'What the directions say, word by word' },
      {
        p: `The Directions line on the Drug Facts panel is short: one drop, three times, in each eye. It doesn’t give clock times, it doesn’t say morning, noon and night, and it doesn’t mention meals or sleep. That leaves the spacing up to you, which is easy if you live on a nine-to-five schedule and a little less obvious if you sleep from 8 a.m. to 3 p.m.`,
      },
      { h: '“Per day” when your day isn’t the calendar’s' },
      {
        p: `A night worker’s waking day often crosses midnight. If you count by the calendar, a shift from 7 p.m. to 7 a.m. falls on two dates, and you could end up bunching doses on one date and skipping the next. Counting by your own waking day keeps the doses evenly spaced and keeps you within three per day, which is what the directions ask.`,
      },
      {
        p: `One way to think about it: your day starts when you wake up for work, wherever the clock is. From there, aim for three doses with several hours between them.`,
      },
      { h: 'Spacing three doses across a night shift' },
      {
        p: `Here’s an example for someone who sleeps from about 8 a.m. to 3 p.m. and works 7 p.m. to 7 a.m. It’s a way to spread the doses out, not a rule from the label:`,
      },
      {
        list: [
          `Shortly after waking, around mid-afternoon, before errands or the drive in.`,
          `Around the middle of the shift, often during the meal break.`,
          `Toward the end of the shift or once you’re home, before winding down for sleep.`,
        ],
      },
      {
        p: `Tying each dose to something you already do every shift, like getting up, a break, or clocking out, makes it easier to remember on a tired night. The label doesn’t say anything about using a drop right before sleep, during the day or otherwise, so if you have questions about that, ask a pharmacist.`,
      },
      { h: 'Days off and switching back' },
      {
        p: `Many night workers flip to a daytime schedule on their days off, then flip back. On a switch day, your waking stretch may be unusually long or short. Keep the count at three for each waking day, rather than adding an extra dose to make up for a long one. If you regularly feel you need more than the directions allow, that’s worth raising with an eye doctor. Our guide to [using more than three drops a day](/guides/can-i-use-more-than-three-drops-a-day) covers that question.`,
      },
      { h: 'If you miss a dose' },
      {
        p: `The label doesn’t say what to do about a missed dose. It gives a number of doses per day, not instructions for catching up. If you’re unsure, a pharmacist can tell you how they’d handle it for your schedule. Our broader guide to [why the label says 1 drop 3 times a day](/guides/why-does-the-label-say-1-drop-3-times-a-day) walks through the rest of the Directions line.`,
      },
      { h: 'The other lines that go with the directions' },
      {
        p: `Night shifts often mean a bottle in a locker, a lunch bag or a car, so the storage line matters: {storage}. A car on a winter night can drop below that range, and a locker near a heater can run above it. Before each use, look at the drops, since the panel says: {doNotUse}. Know what normal looks like: {appearance}`,
      },
      {
        p: `The panel also says: {tip}. At work, that means keeping the cap on in your pocket and washing your hands before a dose. For the full panel, see our [Drug Facts page](/drug-facts).`,
      },
      { h: 'What the label leaves to your doctor or pharmacist' },
      {
        p: `Quell’s label doesn’t give directions for contact lenses, for children, or for using it alongside other eye drops. If any of those apply, ask your eye doctor or pharmacist before you start. And the label is clear about when to stop: {stopUse}`,
      },
      {
        p: `Night work brings its own reasons for tired, dry eyes, from bright work lights to sleeping through the day. Our guide to [dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) covers those. Pain, vision changes or dryness that doesn’t settle are for an eye doctor, who can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'Does “per day” on eye drops mean a 24-hour period?',
        a: 'The label doesn’t define it. For night workers, it’s most practical to count from when you wake up to when you go to sleep, and use three doses across that stretch, so the doses stay evenly spaced and never go above three.',
      },
      {
        q: 'How do I space eye drops 3 times a day on a 12-hour night shift?',
        a: 'One approach is a drop after you wake up, one around your mid-shift break, and one near the end of the shift or once you’re home. Tie each to something you already do so it’s easy to remember. A pharmacist can help you adjust for your schedule.',
      },
      {
        q: 'Should I use an extra eye drop on a long day after switching shifts?',
        a: 'Quell’s directions read: {directions}. Keep to three for each waking day rather than adding a dose for a long one, and talk to an eye doctor if you often feel you need more than that.',
      },
    ],
  },
  {
    slug: 'reading-an-eye-drop-label-as-a-caregiver',
    title: 'Reading an eye drop label as a caregiver',
    description:
      'Helping a parent or partner with eye drops? The lines on Quell’s Drug Facts panel a caregiver should read first, and what the label leaves to a doctor.',
    category: 'label',
    addedOn: '2026-11-24',
    body: [
      {
        p: `If you put drops in someone else’s eyes, read four parts of the label before the first dose: the warnings (Quell’s mentions egg or bird allergies), the directions, the “do not use” line about color, and the list of reasons to stop and call a doctor. The person you’re helping may not mention a problem on their own, so knowing those lines lets you ask the right questions.`,
      },
      { h: 'Why a caregiver reads the label differently' },
      {
        p: `When you use eye drops yourself, you feel what’s happening: a sting, blur that doesn’t clear, a sore eye the next morning. When you’re helping a parent, a spouse or someone you care for, you’re relying on them to tell you, and some people won’t. They may not want to complain, or they may not remember. Reading the panel with that in mind turns it into a short checklist for you.`,
      },
      { h: 'Start with the warnings' },
      {
        p: `Quell’s Warnings section reads: {warnings}. Before the first dose, ask the person directly whether they have ever reacted to eggs or poultry. If they can’t answer, or you aren’t sure about their history, check with their doctor or pharmacist before using it. The second half of that line matters too: these drops go in the eyes and nowhere else.`,
      },
      {
        p: `Our page on [egg or bird allergies and Quell](/guides/egg-or-bird-allergy-and-quell) explains where that warning comes from.`,
      },
      { h: 'The directions, and how to keep track' },
      {
        p: `The directions are: {directions}. That means both eyes at each dose, three doses a day. If you aren’t with the person every time, or more than one family member helps, a simple written log by the bottle avoids doubled or skipped doses.`,
      },
      {
        list: [
          `Write the date and time of each dose and initial it.`,
          `Note anything the person mentions afterward, like stinging or blur.`,
          `Keep the log with the bottle so whoever helps next can see it.`,
          `Bring the log to their next eye doctor visit.`,
        ],
      },
      {
        p: `For the technique of putting drops in someone else’s eyes, see our guide on [how to put eye drops in someone else’s eyes](/guides/how-to-put-eye-drops-in-someone-elses-eyes).`,
      },
      { h: 'Keeping the bottle clean' },
      {
        p: `The panel says: {tip}. When you’re leaning over someone, it’s easy to brush the tip against an eyelash, the lid or a cheek. Hold the bottle a little above the eye, steady your hand on their forehead, and if the tip does touch something, ask a pharmacist whether the bottle is still fine to use. Wash your hands before and after each dose.`,
      },
      { h: 'Check the color before each use' },
      {
        p: `The label says: {doNotUse}. It also describes the normal look: {milky}. Get to know what a fresh bottle looks like when it arrives, so you can spot a change. If the color looks different from how it arrived, don’t use it, and call us at {phone} ({hours}).`,
      },
      { h: 'The stop-use list: what to watch for' },
      {
        p: `This is the part a caregiver needs most, because it’s about what the person feels. The label says: {stopUse}`,
      },
      {
        p: `Translate that into a few plain questions to ask after doses: Does anything hurt? Is your vision clear? Are your eyes more irritated than before? Watch for signs too, like squinting at familiar things, rubbing, or avoiding light. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) helps you judge how soon to call.`,
      },
      { h: 'Storage and swallowing' },
      {
        p: `The storage line is: {storage}. Keep the bottle somewhere predictable, away from a sunny windowsill or a radiator. The panel also covers swallowing: {swallowed}. If the person you care for sometimes confuses small bottles, keep eye drops apart from anything taken by mouth.`,
      },
      { h: 'What the label leaves to a doctor or pharmacist' },
      {
        p: `Quell’s label doesn’t give directions for children, for contact lenses, or for using it with other eye drops or medicines. If the person you care for uses prescription eye drops, ask their eye doctor or pharmacist how, or whether, to fit a lubricating drop around them. The full panel is on our [Drug Facts page](/drug-facts), and our guide for [caregivers with dry eyes](/guides/dry-eyes-for-caregivers) covers your own eyes.`,
      },
    ],
    faq: [
      {
        q: 'What should a caregiver check before giving someone eye drops?',
        a: 'Read the warnings for allergies (Quell’s mentions egg or bird allergies), the directions, the line about not using the drops if they change color, and the reasons to stop and call a doctor. Then ask the person about anything on those lists.',
      },
      {
        q: 'How do I keep track of eye drops I give my parent?',
        a: 'Keep a simple written log next to the bottle with the date, time and your initials for each dose, plus anything your parent mentioned afterward. It cuts down on doubled or missed doses when more than one person helps.',
      },
      {
        q: 'Can I use Quell for someone who also takes prescription eye drops?',
        a: 'Quell’s label doesn’t give directions for use with other eye drops. Ask the person’s eye doctor or pharmacist before adding a lubricating drop to their routine.',
      },
    ],
  },
  {
    slug: 'what-happens-if-you-use-eye-drops-after-28-days',
    title: 'What happens if you use eye drops after 28 days?',
    description:
      'Some eye drops say to discard them 28 days after opening. Quell’s label gives no such number. What it does say, and who to ask about yours.',
    category: 'choosing',
    addedOn: '2026-11-24',
    body: [
      {
        p: `The 28-day rule comes from the labels of some other eye drops, and if your bottle or its pharmacy label says to discard it 28 days after opening, follow that. Quell’s label has no 28-day line and no after-opening time limit at all. It says: {doNotUse}, gives a storage range, and asks you to keep the tip clean. For how long to keep any particular opened bottle, ask your pharmacist.`,
      },
      { h: 'Where the 28-day number comes from' },
      {
        p: `If you’ve seen “discard 28 days after opening” before, it was printed on a specific product’s carton or on a pharmacy label for a prescription drop. That instruction belongs to that product. Different eye drops carry different instructions, and some don’t include an after-opening limit at all. The rule on one bottle doesn’t transfer to another, in either direction.`,
      },
      {
        p: `So the first step is always to read the label in your hand. If it gives an after-opening limit, use that. If it doesn’t, don’t borrow a number from somewhere else; ask a pharmacist about that product.`,
      },
      { h: 'Does Quell have a 28-day rule?' },
      {
        p: `No. Quell’s Drug Facts panel, transcribed in full on our [Drug Facts page](/drug-facts), has no line about discarding the bottle a set number of days after opening. We won’t invent one here. What the panel does give you is a set of lines that apply for as long as you’re using a bottle:`,
      },
      {
        list: [
          `Do not use: {doNotUse}.`,
          `Storage: {storage}.`,
          `When using this product: {tip}.`,
          `Appearance: {milky}.`,
        ],
      },
      {
        p: `If you want a firm answer about how long to keep an opened bottle of Quell, a pharmacist can look at the label with you and give you their view. You can also call us at {phone} ({hours}) with questions about the product itself.`,
      },
      { h: 'What happens if you use an eye drop past its limit?' },
      {
        p: `For a product whose label does set an after-opening limit, the honest answer is that the label is the instruction, and using it longer goes against the instruction. We can’t tell you what would or wouldn’t happen with another company’s drop, and you shouldn’t rely on a guess. If you’ve already used a bottle past its stated limit and your eyes feel fine, the sensible step is to stop using that bottle, open a new one, and ask a pharmacist if you’re worried. If you have pain, blurred vision or irritation that doesn’t settle, call an eye doctor.`,
      },
      { h: 'Signs a bottle shouldn’t be used, whatever the date' },
      {
        p: `Whether a bottle is three days or three months old, some things mean stop:`,
      },
      {
        list: [
          `The color has changed from how it looked when you opened it. For Quell, that’s the label’s own rule.`,
          `The tip touched your eye, your finger, a counter or anything else, and you’re not sure it’s clean. Ask a pharmacist.`,
          `The bottle was left somewhere much hotter or colder than the storage range, like a summer dashboard.`,
          `The seal was broken when it arrived. Don’t use it; contact the seller. For a Quell order, a broken-seal order is replaced if you contact us within {returnDays} days.`,
          `Using it leads to any of the problems in the label’s stop-use list.`,
        ],
      },
      { h: 'Habits that make the question easier' },
      {
        p: `Writing the opening date on the bottle with a marker is a simple habit, and it helps when a pharmacist or eye doctor asks how long you’ve had it. Keep one bottle open at a time rather than several in different rooms, so none of them sits half-used for months. Store it in one predictable place, within the label’s range, with the cap on. Our guide to [storing eye drops](/guides/how-to-store-eye-drops) has more ideas, and [how long eye drops last after opening](/guides/how-long-do-eye-drops-last-after-opening) covers the wider question.`,
      },
      { h: 'Expiration dates are a separate question' },
      {
        p: `An after-opening limit and an expiration date are two different things. The expiration date applies to an unopened product; an after-opening limit, where a label has one, counts from the day you first use it. Our [expiration date guide](/guides/do-eye-drops-expire) explains the difference. Don’t use any eye drop past an expiration date printed on its box or bottle.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes are dry often enough that you’re going through bottles and wondering about dates, it’s worth an eye doctor’s visit. An eye doctor can find the cause and decide what to do. And Quell’s label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Can you use eye drops after 28 days?',
        a: 'It depends on the label. If your eye drop or its pharmacy label says to discard it 28 days after opening, follow that. Quell’s label has no after-opening limit, so for an opened bottle of Quell, ask a pharmacist how long they’d suggest keeping it.',
      },
      {
        q: 'Why do some eye drops say to throw them away after 28 days?',
        a: 'That instruction is printed by the maker of that particular product, or by a pharmacy for a prescription drop. It applies only to that product. Ask the pharmacist who filled it if you want to know the reason behind it.',
      },
      {
        q: 'Does Quell have to be thrown out 28 days after opening?',
        a: 'Quell’s label doesn’t give a 28-day rule or any other after-opening limit. It does say: {doNotUse}. For advice on a specific opened bottle, ask a pharmacist.',
      },
    ],
  },
  {
    slug: 'what-happens-if-you-put-eye-drops-in-the-wrong-eye',
    title: 'What happens if you put eye drops in the wrong eye?',
    description:
      'With Quell, both eyes get a drop, so there’s no wrong eye. With a prescription drop meant for one eye, or the wrong bottle, here’s who to call.',
    category: 'choosing',
    addedOn: '2026-11-24',
    body: [
      {
        p: `With Quell, there’s no wrong eye: the directions say {directions}, so both eyes get a drop each time. The worry usually comes up with a prescription drop meant for one eye only. If that happens, call the pharmacist who filled it or your eye doctor’s office and tell them what you used and when. If you put something in your eye that isn’t an eye drop at all, call Poison Control.`,
      },
      { h: 'With Quell, both eyes get a drop' },
      {
        p: `Quell’s directions don’t name a left or right eye. One drop goes in each eye, three times a day. So if you put Quell in the eye that felt fine and then the eye that felt dry, you followed the label. Our guide to [putting eye drops in both eyes](/guides/do-you-put-eye-drops-in-both-eyes) explains the directions line in more detail.`,
      },
      { h: 'If only one eye feels dry' },
      {
        p: `It’s common for one eye to feel drier than the other, for example on the side that faces a car vent or a window. The label still says each eye. If you’re tempted to use Quell in one eye only, or if one eye keeps feeling worse than the other, ask an eye doctor rather than changing the directions yourself. Our guide on [why one eye can feel drier than the other](/guides/why-does-one-eye-feel-drier-than-the-other) covers common everyday reasons.`,
      },
      { h: 'A prescription drop in the wrong eye' },
      {
        p: `Prescription eye drops are sometimes prescribed for one eye only, often written on the pharmacy label as left eye or right eye. Mixing them up is an easy mistake, especially in a dim bathroom or when someone else is helping. If it happens:`,
      },
      {
        list: [
          `Don’t add another dose to the other eye to “even it out” without asking.`,
          `Note what you used, which eye, and the time.`,
          `Call the pharmacy that filled it, or the eye doctor who prescribed it, and ask what to do.`,
          `If you have pain, blurred vision that doesn’t clear, or any other new symptom, contact the eye doctor right away or get urgent care.`,
        ],
      },
      {
        p: `Quell’s label doesn’t cover prescription drops or using Quell alongside them. Those questions belong with your eye doctor or pharmacist.`,
      },
      { h: 'If you grabbed the wrong bottle' },
      {
        p: `Ear drops, nose sprays, nail products and small bottles of all kinds can look alike in a medicine cabinet. If you put something in your eye that wasn’t made for the eyes, call Poison Control or get emergency care right away, and have the bottle with you so you can read the ingredients. If you used someone else’s eye drops, call a pharmacist and tell them exactly what it was.`,
      },
      {
        p: `Quell’s own Warnings line is a reminder that the reverse matters too: {warnings}. Our guide to [what “for use in the eyes only” means](/guides/what-does-for-use-in-the-eyes-only-mean) explains that line.`,
      },
      { h: 'Keeping bottles from getting mixed up' },
      {
        list: [
          `Store eye drops in their own spot, apart from ear drops and anything taken by mouth.`,
          `If two people in the house use eye drops, keep separate bottles in separate places, and don’t share. Our guide to [sharing eye drops](/guides/can-you-share-eye-drops) explains why.`,
          `Mark prescription bottles with a big L or R in permanent marker if they’re for one eye.`,
          `Turn on the light and read the bottle each time, even when you’re half awake.`,
          `If you help someone else with drops, keep a written log of which drop went where.`,
        ],
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses: {uses}. Keep the tip clean: {tip}. The label gives no directions for children, contact lenses or use with other drops, so ask your eye doctor or pharmacist about any of those. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Any mix-up followed by pain, light sensitivity or a change in your vision is a reason to call an eye doctor promptly. For Quell, the label lists when to stop and ask a doctor: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Is it bad to put eye drops in the wrong eye?',
        a: 'For a lubricating drop like Quell, whose directions say one drop in each eye, there is no wrong eye. For a prescription drop meant for one eye, call the pharmacy or your eye doctor and tell them what happened.',
      },
      {
        q: 'Can I use eye drops in just one eye?',
        a: 'Quell’s directions say {directions}. If only one eye bothers you, or one eye keeps feeling worse, ask an eye doctor before changing how you use the drops.',
      },
      {
        q: 'What if I put ear drops in my eye by mistake?',
        a: 'Call Poison Control or get emergency care right away, and keep the bottle with you so you can read its ingredients to them. Don’t try to wash it out with a lubricating eye drop instead of getting help.',
      },
      {
        q: 'Do eye drops in one eye affect the other eye?',
        a: 'That depends on the drop, and Quell’s label doesn’t address it. For a prescription drop, ask your eye doctor or pharmacist. Quell itself goes in both eyes, per its directions.',
      },
    ],
  },
  {
    slug: 'does-dark-mode-help-dry-eyes',
    title: 'Does dark mode help dry eyes?',
    description:
      'Dark mode changes how a screen looks, not how often you blink. What actually matters for dry eyes at a screen, and how to pick a setting you like.',
    category: 'choosing',
    addedOn: '2026-11-24',
    body: [
      {
        p: `There’s no good reason to expect dark mode alone to fix dry eyes. Screen dryness comes mostly from blinking less while you concentrate and from dry or moving air around you, and dark mode changes neither. Use whichever mode lets you read without squinting, keep the screen slightly below eye level, take regular blink breaks, and see an eye doctor if dryness persists.`,
      },
      { h: 'Why screens dry your eyes in the first place' },
      {
        p: `Your tear film has three layers: an oily outer layer, a watery middle, and a mucus layer next to the eye. Each blink spreads it fresh, and the oil slows the water from evaporating. When you focus on a screen, you blink less often, and more of your blinks are partial. The film thins between blinks, and the eye surface dries. Heated or air-conditioned rooms and fans speed that up. None of those depend on whether the background is black or white.`,
      },
      { h: 'What dark mode changes, and what it doesn’t' },
      {
        p: `Dark mode swaps a bright background for a dark one and light text for dark. It changes how much light the screen gives off and how text looks against its background. It doesn’t change how long you stare, how close you hold the device, or how dry the room is. Some people find it more comfortable in a dim room at night, when a bright white page feels harsh. Others find light text on a dark background harder to read and end up leaning in and squinting, which tends to mean even less blinking.`,
      },
      {
        p: `So the question to ask isn’t which mode is better for eyes in general. It’s which one lets you read comfortably, at a normal distance, without squinting.`,
      },
      { h: 'How to choose between light and dark mode' },
      {
        list: [
          `Try each for a few days, at the times you use the screen most.`,
          `Notice whether you squint, lean closer or rub your eyes in one more than the other.`,
          `Many devices can switch automatically at sunset, which suits people who like light mode by day and dark at night.`,
          `If you choose dark mode, raise the text size a step so you aren’t peering at thin, light letters.`,
          `In a bright office, light mode often reads more easily; in a dark bedroom, a dimmer screen of either kind is gentler.`,
        ],
      },
      { h: 'Screen settings that matter more' },
      {
        p: `A few changes do more for dry eyes than any color scheme:`,
      },
      {
        list: [
          `Lower the top of your monitor to just below eye level. Looking slightly down lets your lids cover more of the eye.`,
          `Increase text size so you can sit back.`,
          `Match brightness roughly to the room, so the screen isn’t glaring or murky.`,
          `Move the screen so a window or lamp doesn’t reflect off it, which makes people squint.`,
          `Point vents, fans and space heaters away from your face.`,
        ],
      },
      { h: 'The habit that helps most: blinking' },
      {
        p: `Because the main problem is reduced blinking, the main fix is building in breaks. Every so often, look at something across the room and blink slowly and completely a few times. Tie it to natural pauses: sending an email, finishing a page, the end of a video. Our guides to [screens and your tear film](/guides/screens-and-your-tear-film) and [looking at your phone in bed](/guides/dry-eyes-from-looking-at-your-phone-in-bed) go further on screen habits.`,
      },
      { h: 'Night modes and warm colors' },
      {
        p: `Many phones and computers also offer a night or warm-color mode that shifts the screen toward yellow in the evening. Like dark mode, that’s a matter of comfort and preference; we can’t tell you it does anything for dry eyes. If a setting makes the screen more pleasant for you, use it, and keep the blinking and posture habits too.`,
      },
      { h: 'Where a lubricating drop fits' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses, from the Drug Facts panel: {uses}. Directions: {directions}. For people who work at screens, a drop before a long session or at a midday break can fit within that. Keep the tip clean, since the label says: {tip}. See the full [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay dry no matter what you change on the screen, an eye doctor can find the cause and decide what to do. Get help sooner for pain, blurred vision that doesn’t clear when you blink, or new light sensitivity. Quell’s label also says: {stopUse} Our [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) page explains the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'Is dark mode better for dry eyes?',
        a: 'Not on its own. Dry eyes at a screen come mainly from blinking less and from dry or moving air, and dark mode changes neither. Pick the mode you can read without squinting, and build in regular blink breaks.',
      },
      {
        q: 'Is light mode or dark mode easier on the eyes at night?',
        a: 'Many people find a dimmer screen more comfortable in a dark room, and dark mode is one way to get that. Lowering brightness in light mode works too. What matters most is that you can read at a normal distance without squinting.',
      },
      {
        q: 'What screen settings help with dry eyes?',
        a: 'Larger text so you can sit back, a monitor set just below eye level, brightness matched to the room and no glare from windows or lamps. Those changes, plus regular blink breaks, matter more than the color scheme.',
      },
    ],
  },
  {
    slug: 'is-quell-homeopathic',
    title: 'Is Quell homeopathic?',
    description:
      'Quell’s Drug Facts panel lists three active ingredients by strength, with a stated purpose for each. What the label shows, and what it doesn’t claim.',
    category: 'formula',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Quell doesn’t describe itself as homeopathic anywhere on its label. It’s an over-the-counter lubricating eye drop whose Drug Facts panel lists three active ingredients by strength, {actives}, with the purposes Lubricant and Emollient. Its inactive ingredients include natural ones such as emu oil and manuka honey, but natural ingredients don’t make a product homeopathic. A pharmacist can explain how the two kinds of label differ.`,
      },
      { h: 'What Quell’s label actually lists' },
      {
        p: `The Drug Facts panel on the carton is the place to answer questions like this one, because it names what’s in the bottle and what each active ingredient is for. Quell’s panel, transcribed in full on our [Drug Facts page](/drug-facts), lists:`,
      },
      {
        list: [
          `Active ingredients: {actives}.`,
          `Purpose: Lubricant for the first two, Emollient for the third.`,
          `Uses: {uses}.`,
          `Directions: {directions}.`,
          `Inactive ingredients: {inactives}.`,
        ],
      },
      {
        p: `Every active ingredient appears with its strength in parentheses, and the label uses the word “homeopathic” nowhere. That’s the plainest answer to the question. The panel also names {inactiveCount} inactive ingredients, listed alphabetically and without a purpose next to them, which is how a Drug Facts panel presents the rest of a formula. Our [full ingredient list](/guides/quell-eye-drops-ingredients-list) puts each one in plain language, so you can see exactly what you’re putting in your eyes before you buy.`,
      },
      { h: 'Why people ask' },
      {
        p: `Several things about Quell can make shoppers wonder. It contains emu oil, manuka honey, Dead Sea salt and Terminalia Chubula, which sound more like a health-food shelf than a pharmacy. The carton describes emu oil this way: {emuOil} And it has a natural-looking color: {milky}. None of that changes how the product is labeled. A drop can include natural ingredients and still be a conventional over-the-counter drug with listed active ingredients and stated purposes.`,
      },
      { h: 'Natural and homeopathic aren’t the same thing' },
      {
        p: `“Natural” describes where an ingredient comes from. “Homeopathic” describes a particular system of preparing and labeling remedies. A product can be one, both, or neither. In Quell’s case, the actives (glycerol, polysorbate 80 and light mineral oil) are listed as Lubricant and Emollient, and the natural ingredients appear among the inactives. Our guide to [the natural ingredients in Quell](/guides/natural-ingredients-in-quell) goes through each one.`,
      },
      { h: 'How to tell what kind of eye drop you’re holding' },
      {
        p: `When you compare eye drops, read the panel rather than the front of the box:`,
      },
      {
        list: [
          `Look for the Active ingredients line and the strength listed for each.`,
          `Check the Purpose column, which says what each active ingredient is there to do.`,
          `Read the Uses line to see what the product is labeled for.`,
          `Read every warning, including allergy cautions like Quell’s: {warnings}.`,
          `If the label describes the product as homeopathic, or you can’t make sense of how ingredients are listed, ask a pharmacist before you buy.`,
        ],
      },
      {
        p: `Our guide to [reading an eye drop Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label) walks through each section.`,
      },
      { h: 'What the active ingredients do, in the label’s words' },
      {
        p: `The panel gives each active ingredient a purpose. Glycerol and polysorbate 80 are listed as Lubricant; light mineral oil is listed as Emollient. Together, Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. That’s the extent of what we can say about how it works, because that’s what the label and our approved copy support.`,
      },
      { h: 'Who makes Quell' },
      {
        p: `Quell comes from {company}, in Brentwood, Tennessee, and is sold on this site. If you have a question about the formula that the label doesn’t answer, you can call {phone} during business hours ({hours}). For questions about your own eyes, or whether Quell suits you alongside anything else you use, ask a pharmacist or an eye doctor. The label doesn’t give directions for children, contact lenses, or use with other eye drops.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Whatever drop you choose, ongoing dryness is worth an eye doctor’s visit. An eye doctor can find the cause and decide what to do. Quell’s label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Are Quell eye drops homeopathic?',
        a: 'Quell’s label doesn’t describe it as homeopathic. Its Drug Facts panel lists three active ingredients by strength, {actives}, with the purposes Lubricant and Emollient.',
      },
      {
        q: 'Is natural the same as homeopathic in eye drops?',
        a: 'No. Natural describes where an ingredient comes from; homeopathic describes a particular system of preparing and labeling remedies. Quell contains natural inactive ingredients such as emu oil and manuka honey, and its label doesn’t call it homeopathic.',
      },
      {
        q: 'How can I tell if eye drops are homeopathic?',
        a: 'Read the Drug Facts panel, including how the active ingredients and their purposes are listed. If the label calls the product homeopathic, or you can’t tell, a pharmacist can explain the label before you buy.',
      },
    ],
  },
  {
    slug: 'which-email-to-use-when-ordering-eye-drops',
    title: 'Which email should I use to order eye drops?',
    description:
      'Your checkout email gets the receipt, the tracking email and the order lookup. How to pick between personal, work and shared family addresses.',
    category: 'ordering',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Use a personal email you check often and will still have in a year. The address you enter at checkout receives your receipt with the order number, the tracking email, and one reorder reminder, and it’s what you’ll need with the order number to look the order up later. A work address can vanish when you change jobs, and a shared family inbox can bury the tracking email under everyone else’s mail.`,
      },
      { h: 'What the checkout email is used for' },
      {
        p: `When you check out as a guest, the email you type is the only way we can reach you about the order. Here’s what goes to it:`,
      },
      {
        list: [
          `Your order confirmation and receipt, with the order number.`,
          `A tracking email once the order ships.`,
          `One reorder reminder, a while after your order, asking whether you’re running low. It isn’t a subscription and there’s no discount in it.`,
        ],
      },
      {
        p: `The same address also unlocks the [order lookup page](/orders), which asks for your order number and the email you checked out with. If you can’t remember which address you used, the order can be hard to find.`,
      },
      { h: 'Personal email: usually the right choice' },
      {
        p: `A personal address you check every day is the simplest option. You’ll see the tracking email when it arrives, you can search for the receipt later if your HSA or FSA administrator asks for it, and you won’t lose access if your job changes. If you have several personal accounts, use the one you actually read, not the one you keep for sign-ups.`,
      },
      { h: 'Should I use my work email?' },
      {
        p: `It’s fine if you’re shipping to your office and want everything in one place. Keep in mind:`,
      },
      {
        list: [
          `If you leave the job, the receipt and order history go with the account.`,
          `Some company mail systems filter messages from outside senders, which can hold up a tracking email.`,
          `If you’re using a receipt for an FSA or HSA claim, a personal inbox makes it easier to find years later.`,
        ],
      },
      { h: 'A shared family email' },
      {
        p: `Some households share one address for orders and bills. That works if everyone knows to watch for the tracking email, but it’s easy for one person to read and archive it before the person who ordered sees it. If you share an inbox, tell the others the order is coming, or use your own address for this one.`,
      },
      { h: 'Ordering for someone else' },
      {
        p: `When you buy for a parent, a friend or a partner, the confirmation and tracking go to the email you enter, not to the person at the shipping address. That’s useful if you want to keep a gift quiet, and less useful if they’re the one waiting at home. You can forward the tracking email to them once it arrives. Our guide to [ordering eye drops for someone else](/guides/ordering-eye-drops-for-someone-else) covers the rest of the process.`,
      },
      { h: 'Avoiding a typo' },
      {
        p: `For guest orders, checkout checks that the part of the address after the @ can actually receive mail, which catches many misspelled email providers. It can’t catch a mistake before the @, such as a missing letter in your name. Read the address once before you pay. If you’ve already ordered and nothing arrived, our guides to a [mistyped email](/guides/mistyped-email-at-checkout) and a [missing confirmation email](/guides/no-order-confirmation-email) explain what to do, or call {phone} ({hours}).`,
      },
      { h: 'Using one email every time' },
      {
        p: `If you reorder, use the same address you used before. Your receipts stay together in one inbox, which is handy at tax time or when an HSA or FSA administrator asks for proof of purchase, and the reorder reminder lands in the inbox you already watch for Quell. If you switch email providers, use the new address for the next order and keep the old receipts somewhere you can find them. Our guide to [getting a receipt](/guides/getting-a-receipt-for-your-order) explains what the receipt shows.`,
      },
      { h: 'If you have an account' },
      {
        p: `If you sign in before checking out, the order uses the email on your account rather than one typed at checkout. Make sure that’s an address you still read. You don’t need an account to order, though; guest checkout works the same way, with the email you enter.`,
      },
      { h: 'What we do with your email' },
      {
        p: `We use it for the order and the messages above. Our [privacy policy](/privacy) explains what’s collected and why, and our guide to [whether Quell sells your data](/guides/does-quell-sell-my-data) answers that question directly. Payment is handled on a secure hosted page, and orders ship only to US addresses for buyers 18 and over.`,
      },
    ],
    faq: [
      {
        q: 'What email should I use for an online eye drop order?',
        a: 'A personal email you check often and will keep. It receives your receipt and order number, the tracking email and one reorder reminder, and you’ll need it with the order number to look the order up.',
      },
      {
        q: 'Is it okay to use a work email to buy eye drops?',
        a: 'It works, but you may lose the receipt and order history if you leave the job, and some company filters delay outside email. A personal address is usually simpler, especially if you’ll need the receipt for an FSA or HSA claim.',
      },
      {
        q: 'Does the person I’m shipping to get the tracking email?',
        a: 'No. The confirmation and tracking go to the email entered at checkout. If you’re ordering for someone else, forward the tracking email to them once it arrives.',
      },
      {
        q: 'Why does checkout reject my email address?',
        a: 'For guest orders, checkout makes sure the domain after the @ can receive mail, so a misspelled provider is turned away. Check the spelling, try again, or call {phone} ({hours}) if it keeps happening.',
      },
    ],
  },
  {
    slug: 'can-i-choose-a-delivery-date-for-eye-drops',
    title: 'Can I choose a delivery date for eye drops?',
    description:
      'Quell’s checkout has no delivery date field and no subscription. How to time an order around travel, holidays and running low.',
    category: 'ordering',
    addedOn: '2026-11-24',
    body: [
      {
        p: `No. Quell’s checkout asks for a shipping address, phone and email, but there’s no field for picking a delivery date, and we don’t promise when an order will arrive. There’s no subscription either. To time an order, place it when you want it on its way, ship it to wherever you’ll be, and watch the tracking email. Reordering before your bottle runs low takes most of the guesswork out.`,
      },
      { h: 'What checkout asks for, and what it doesn’t' },
      {
        p: `The checkout form collects your name, street address with an optional second line, city, two-letter state code, ZIP code and a phone number, plus an email for your receipt if you aren’t signed in. Then you pay on a secure hosted payment page. There’s no calendar, no “deliver on” option and no notes field for timing. Our guide to [what checkout asks for](/guides/what-checkout-asks-for) explains each field.`,
      },
      { h: 'Why we don’t promise a delivery date' },
      {
        p: `Orders are packed and shipped from our office in Brentwood, Tennessee, and the time in transit depends on the carrier and the distance. Our [terms](/terms) say plainly that delivery estimates are estimates. Rather than offer a date we couldn’t stand behind, we send a tracking email once your order ships so you can follow it yourself. See [how to track your order](/guides/how-to-track-your-order) for what the tracking shows.`,
      },
      { h: 'Timing an order around a trip' },
      {
        p: `If you’ll be away, the simplest approach is to send the order to where you’ll be, or to wait and order when you’re back. A few options:`,
      },
      {
        list: [
          `Order well before you leave, so the package arrives while you’re still home.`,
          `Ship it to the address you’re traveling to, such as a relative’s home or a second home. Our guide to [shipping to a second address](/guides/shipping-eye-drops-to-a-second-home) covers this.`,
          `Ask a neighbor to bring it in if it may arrive while you’re gone, and see [what if no one is home](/guides/what-if-no-one-is-home-when-eye-drops-arrive).`,
          `Pack the bottle you have, and reorder once you’re home.`,
        ],
      },
      { h: 'Timing an order around the holidays' },
      {
        p: `Thanksgiving is Thursday, November 26, this year, and Christmas falls on a Friday. We can’t say when any order placed now will arrive. If you want eye drops in hand for a holiday trip or as a gift, order early, and if the date really matters, consider packing a bottle you already have. Our guide to [packing eye drops or shipping them ahead](/guides/pack-or-ship-eye-drops-for-holiday-travel) weighs the two.`,
      },
      { h: 'Is there a subscription or auto-ship?' },
      {
        p: `No. Each order is a single order you place yourself. We send one reorder reminder email some time after you order, asking if you’re running low, and that’s it. The reminder doesn’t place an order or charge anything. Our guide to [whether Quell is a subscription](/guides/is-quell-a-subscription) has the details.`,
      },
      { h: 'Reorder before you run out' },
      {
        p: `Because delivery dates aren’t promised, the reliable fix is to reorder with some drops left. The directions are {directions}, so it helps to know roughly how long a bottle lasts you and to set your own reminder a week or two before that. Ordering {freeBottles} or more bottles at once ships free, which also means fewer orders to time. One order can hold up to 10 bottles. Shipping is {shipping} on smaller orders.`,
      },
      {
        p: `Store spare bottles as the label says: {storage}. A cool, dry cupboard works well. Unopened bottles you decide you don’t need can be refunded within {returnDays} days of delivery, and you don’t send them back.`,
      },
      { h: 'If it arrives while you’re away' },
      {
        p: `Without a delivery date to plan around, the package may land on a day nobody is home. Eye drops have a storage range on the label, and a package left on a sunny step in July or a frozen porch in January can sit well outside it. If you know you’ll be gone, ask someone to bring it in, or hold off on ordering until you’re back. Once it’s inside, open the box, check that the seal on each bottle is intact, and look at the color. The label says: {doNotUse}. If anything arrived damaged, incorrect, or with a broken tamper seal, contact us within {returnDays} days and we’ll replace it.`,
      },
      { h: 'Ordering a gift for a particular day' },
      {
        p: `Birthdays and holidays are the times people most want a date. Since we can’t offer one, the practical choices are to order early and let the recipient know a package is on the way, or to have it shipped to you and hand it over yourself on the day. Our [gift guide](/guides/sending-quell-as-a-gift) walks through both.`,
      },
      { h: 'Questions about a specific order' },
      {
        p: `If your order is already placed and you have a timing question, have your order number ready and call {phone} ({hours}). You can also check its status on the [order lookup page](/orders) with your order number and the email you used.`,
      },
    ],
    faq: [
      {
        q: 'Can I pick the day my eye drops are delivered?',
        a: 'No. Checkout has no delivery date option, and we don’t promise arrival dates. Place the order when you want it shipped and follow the tracking email that arrives once it’s on its way.',
      },
      {
        q: 'Can I order eye drops now and have them shipped later?',
        a: 'Not through checkout, which has no option to hold or schedule a shipment. The simplest approach is to place the order when you want it to go out, or ship it to where you’ll be when it arrives.',
      },
      {
        q: 'Does Quell have auto-ship for eye drops?',
        a: 'No. There’s no subscription or auto-ship. We send one reorder reminder email a while after your order, and it doesn’t place an order or charge your card.',
      },
    ],
  },
  {
    slug: 'shipping-eye-drops-to-yourself-at-someone-elses-house',
    title: 'Shipping eye drops to yourself at someone else’s house',
    description:
      'Staying with family or a friend? How to fill in the name, address and phone so eye drops sent to their house reach you.',
    category: 'shipping',
    addedOn: '2026-11-24',
    body: [
      {
        p: `You can ship Quell to any US address, including a relative’s or friend’s house where you’re staying. Put your own name in the name fields, their street address below, and consider adding “c/o” and their last name on the second address line. Use your own phone number and email, so the tracking comes to you, and tell your host a package is coming in your name.`,
      },
      { h: 'Whose name goes on the package' },
      {
        p: `The checkout form asks for a first and last name for shipping. Put your own name there, since you’re the one receiving it. If your last name is different from your host’s, the second address line is a good place to add theirs, for example “c/o Martinez.” That second line is optional and is the same field many people use for an apartment or suite number, so keep it short.`,
      },
      {
        p: `Our guide to [when the card name and shipping name differ](/guides/name-on-card-does-not-match-shipping-name) covers the card side, if you pay with a card in a different name.`,
      },
      { h: 'Filling in the rest of the address' },
      {
        list: [
          `Street address: exactly as your host gets mail. Ask them, rather than copying it from a map.`,
          `City: the mailing city, which isn’t always the town name people use day to day.`,
          `State: the two-letter state code. Checkout won’t accept a spelled-out state.`,
          `ZIP code: five digits, or ZIP+4 if you have it.`,
          `If it’s an apartment or a unit in a complex, put the unit number on the second line, ahead of the “c/o” name.`,
        ],
      },
      {
        p: `Checkout only accepts US addresses. Our guide to [getting the shipping address right](/guides/getting-the-address-right) has more examples.`,
      },
      { h: 'Gated communities, apartments and shared mailrooms' },
      {
        p: `Some hosts live where packages don’t go straight to the door: a building with a front desk, a mailroom that sorts by resident, or a gated neighborhood. In those places, a package in a name nobody recognizes can be held or returned. Ask your host how deliveries work there. If the building sorts by resident name, the “c/o” line matters more, and your host may want to tell the front desk or the mailroom to expect something for you. Our checkout has no field for gate codes or delivery notes, so pass any of that along to your host rather than looking for a box to type it in.`,
      },
      { h: 'Use your own phone and email' },
      {
        p: `Checkout requires a phone number, because shipping carriers ask for one. Use your own mobile, not your host’s landline, so any call about the delivery reaches you. The same goes for email: the confirmation and tracking go to the address entered at checkout, so use yours. You can forward the tracking email to your host if they’ll be the one home.`,
      },
      { h: 'Tell your host' },
      {
        p: `A package in an unfamiliar name can confuse a busy household, or get set aside as a mistake. Let your host know:`,
      },
      {
        list: [
          `That a small package is coming in your name.`,
          `Roughly when you placed the order, and that you’ll forward the tracking.`,
          `Where you’d like it left if you’re out, like inside the door or in your room.`,
          `That it’s eye drops, so it shouldn’t sit on a hot porch or a freezing step for long.`,
        ],
      },
      { h: 'Timing it with your stay' },
      {
        p: `We don’t promise a delivery date, so order well before you arrive, or plan to receive it partway through a longer stay. If the stay is short and you’d rather not risk it, pack a bottle instead. Our guide to [packing eye drops or shipping them ahead](/guides/pack-or-ship-eye-drops-for-holiday-travel) compares the two. If you’ll leave before it might arrive, ship it home instead.`,
      },
      { h: 'When it arrives' },
      {
        p: `Bring the package inside and open it soon, rather than leaving it in an entryway for days. Check the box and the bottle’s seal. The label’s storage line reads: {storage}. And check the color, since it says: {doNotUse}. Normal looks like this: {milky}. If the order arrives damaged, incorrect, or with a broken tamper seal, call {phone} ({hours}) within {returnDays} days and we’ll replace it.`,
      },
      { h: 'Shipping cost and refunds' },
      {
        p: `Shipping is {shipping} for one or two bottles and free on {freeBottles} or more. It all ships from Brentwood, Tennessee. If you end up with an unopened bottle you don’t want, it can be refunded within {returnDays} days of delivery, and you keep it. For a holiday-specific version of this question, see [shipping Quell to a holiday address](/guides/shipping-to-a-holiday-address), or go straight to [ordering](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'How do I address a package to myself at someone else’s house?',
        a: 'Use your own first and last name, their street address, city, state code and ZIP, and add “c/o” plus their last name on the second address line if your names differ. Then let them know a package is coming in your name.',
      },
      {
        q: 'Should I use my phone number or my host’s when shipping to their house?',
        a: 'Your own. Checkout requires a phone number for the carrier, and using yours means any call about the delivery reaches you rather than someone who may not know about the order.',
      },
      {
        q: 'Can I ship eye drops to my parents’ house while I’m visiting?',
        a: 'Yes. Quell ships to any US address. Put your own name on the order, add your parents’ last name on the second line if it differs from yours, and order early, since no delivery date is promised.',
      },
    ],
  },
  {
    slug: 'opened-quell-and-didnt-like-it',
    title: 'Opened Quell and didn’t like it? Your options',
    description:
      'Opened eye drops can’t be refunded, but unopened bottles can. What to do if Quell didn’t suit you, and when a reaction means calling a doctor.',
    category: 'returns',
    addedOn: '2026-11-24',
    body: [
      {
        p: `If you opened a bottle of Quell and didn’t like it, that opened bottle can’t be refunded: our terms say opened eye drops can’t be refunded, returned or resold. Any unopened bottles from the same order can be refunded within {returnDays} days of delivery, and you keep them. If what bothered you was pain, irritation or a change in vision, stop using it and talk to a doctor.`,
      },
      { h: 'First, separate “didn’t like it” from a reaction' },
      {
        p: `People stop using an eye drop for very different reasons, and they point to different next steps. Not liking the look, the feel or the routine is a preference. Pain, ongoing irritation or a change in how you see is something else. The label is specific about that second group: {stopUse}`,
      },
      {
        p: `If any of that describes what happened, stop using the drops and see a doctor. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you judge how soon.`,
      },
      { h: 'Things that are normal for Quell' },
      {
        p: `Some first-time users are surprised by how Quell looks. The label describes it this way: {milky}. And as the product page puts it: {appearance}. That color comes from its natural oil-based ingredients. If the milky look was what put you off, nothing was wrong with the bottle. Our guide to [why Quell is milky brown](/guides/why-is-quell-milky-brown) explains more.`,
      },
      {
        p: `What isn’t normal is a change in color from how it looked when it arrived. The label says: {doNotUse}. If you noticed that, stop using it and call us at {phone} ({hours}).`,
      },
      { h: 'What our terms say about opened bottles' },
      {
        p: `Section 7 of our [terms](/terms) covers this directly. Opened eye drops can’t be refunded, returned or resold, for health and safety reasons. Once a bottle has been opened, nobody can confirm how it was handled or stored, so it can’t go back into stock. That’s true whether you used one drop or half the bottle. Our guide to [why opened eye drops can’t be returned](/guides/why-opened-eye-drops-cannot-be-returned) explains the reasoning.`,
      },
      { h: 'What you can still do' },
      {
        list: [
          `Look at what else came in the order. Any bottle with its seal intact can be refunded within {returnDays} days of delivery.`,
          `Call {phone} ({hours}) with your order number to ask for that refund. You don’t send the unopened bottles back.`,
          `If the order arrived damaged, incorrect, or with a broken tamper seal, tell us within {returnDays} days and we’ll replace it.`,
          `Pass along a sealed bottle to someone in your household who might like it, if you’d rather keep it than refund it. Never share an opened bottle.`,
        ],
      },
      {
        p: `If you’ve opened one bottle and kept others sealed, our guide to [returning the rest after opening one](/guides/opened-one-bottle-can-i-return-the-rest) walks through that case step by step.`,
      },
      { h: 'Tell us what didn’t work' },
      {
        p: `We genuinely want to hear it. Maybe the drop felt different from what you’re used to, or three times a day didn’t fit your routine. Call us, or reply to the reorder reminder email when it arrives; that email invites a reply. Feedback about how the product felt is useful to us even when we can’t refund an opened bottle. Questions about your eyes themselves are better taken to an eye doctor or pharmacist; our guide to [order questions vs. medical questions](/guides/order-questions-vs-medical-questions) explains the split.`,
      },
      { h: 'If it was a gift' },
      {
        p: `If someone gave you Quell and you opened it but it isn’t for you, the same rules apply: the opened bottle can’t be refunded, and unopened ones can, within {returnDays} days of delivery. The person who placed the order has the order number. Our guide to [returning a Quell gift after Christmas](/guides/returning-a-quell-gift-after-christmas) covers who calls.`,
      },
      { h: 'Ordering less next time' },
      {
        p: `If you’re not sure how a new eye drop will suit you, it can make sense to start with one bottle and order more once you know. A single bottle works out to more per bottle than an order of {freeBottles}, since shipping is {shipping} below that, but it’s less to be stuck with if the drop isn’t for you. Our guide to [ordering just one bottle](/guides/ordering-a-single-bottle) lays out the tradeoff.`,
      },
      { h: 'Before your next eye drop' },
      {
        p: `If you’re trying another drop, read its Drug Facts panel closely, especially the warnings and directions, and check whether it has any instructions about contact lenses or other drops that apply to you. If dryness keeps coming back no matter what you use, an eye doctor can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'Can I get a refund if I opened eye drops and didn’t like them?',
        a: 'Not for the opened bottle. Our terms say opened eye drops can’t be refunded, returned or resold. Unopened bottles from the same order can be refunded within {returnDays} days of delivery, and you don’t send them back.',
      },
      {
        q: 'Is it normal for Quell to look milky?',
        a: 'Yes. The label says: {milky}. The color comes from its natural oil-based ingredients. Don’t use it if the color changes from how it looked when it arrived.',
      },
      {
        q: 'What if eye drops made my eyes worse?',
        a: 'Stop using them. Quell’s label says: {stopUse} An eye doctor can find the cause and decide what to do.',
      },
    ],
  },
]
