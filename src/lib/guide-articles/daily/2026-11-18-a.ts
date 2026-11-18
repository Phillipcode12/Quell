import type { Guide } from '@/lib/guide-types'
export const DAILY_20261118_A: Guide[] = [
  /*
   * Sources fetched 2026-11-18 for dry-eye-relief-santa-maria-ca:
   * - https://data.rcc-acis.org/StnData, sid USW00023273, NOAA 1991-2020 normals
   *   (raw: .daily-job/1118/a/raw-USW00023273.json). SANTA MARIA PUBLIC AP,
   *   elev 243 ft. Annual precip 13.32 in (sum of months); Jan 2.74, Feb 2.85,
   *   Mar 2.56, Dec 2.05; Jun 0.06, Jul 0.03, Aug 0.01, Sep 0.07. Normal highs
   *   Jan 64.7 F, Aug 73.8 F, Sep 75.0 F, Oct 74.6 F; normal lows Dec 40.1 F,
   *   Jan 41.0 F, Aug 55.1 F. Snowfall missing (M): not stated.
   * - /c/dev/quell/.daily-job/relhum23.txt (NOAA, WBAN 23273, morning/afternoon):
   *   Jan 72/61, Apr 74/61, Aug 80/64, Sep 77/64, Oct 71/63, Nov 69/62,
   *   Dec 70/60, annual 75/62.
   * - /c/dev/quell/.daily-job/wndspd23.txt (WBAN 23273): Apr 4.0 and May 4.1
   *   are the windiest months, Nov through Jan 2.8 the calmest (no units stated).
   */
  {
    slug: 'dry-eye-relief-santa-maria-ca',
    title: 'Dry eye relief in Santa Maria, California',
    description:
      'Santa Maria gets about 13 inches of rain a year and almost none from June to September. NOAA’s numbers, the spring wind, and daily dry eye relief.',
    category: 'local',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Dry eye relief in Santa Maria means planning around a rainless summer and a breezy spring. NOAA’s normals for Santa Maria Public Airport show about 13 inches of precipitation a year, with June through September adding up to less than a fifth of an inch. Shield your eyes from the valley wind, blink fully at screens, and use a lubricating drop as its label directs. Pain or vision changes belong with an eye doctor.`,
      },
      { h: 'Santa Maria’s weather in NOAA’s normals' },
      {
        p: `The airport station sits at about 243 feet on the south side of town, inland from the dunes and the coast at Guadalupe. NOAA’s 1991 to 2020 climate normals for Santa Maria Public Airport, as published through the National Weather Service’s NOWData, give this outline:`,
      },
      {
        list: [
          `About 13.32 inches of precipitation in a normal year, nearly all of it from November through March.`,
          `February is the wettest month at 2.85 inches, followed by January at 2.74 and March at 2.56.`,
          `June averages 0.06 inches, July 0.03, August 0.01 and September 0.07.`,
          `Normal highs stay in a narrow band, from 64.7°F in January to 75.0°F in September.`,
          `December and January nights average about 40 to 41°F.`,
        ],
      },
      {
        p: `Those mild temperatures hide how little water falls for half the year. A field, a vineyard row or a dirt shoulder that last saw rain in April is still dry in October, and every breeze can lift a little of it.`,
      },
      { h: 'Why do my eyes feel dry in Santa Maria if it’s cool and gray?' },
      {
        p: `Because cool isn’t the same as damp, and the marine layer doesn’t last. NOAA’s humidity table for the airport puts morning readings in the 70s for most of the year, around 80 percent in August, and afternoon readings in the low 60s in every month. The gray morning burns off, the sea breeze picks up, and by mid-afternoon the air over the valley floor is noticeably drier than it was at breakfast. November mornings are the least humid in the table, at about 69 percent.`,
      },
      {
        p: `Your tear film loses water to the air all the time. Moving air speeds that up, and so does lower humidity, so a breezy afternoon in the low 60s can leave eyes feeling scratchy even when the sky still looks overcast.`,
      },
      { h: 'Spring wind across the valley' },
      {
        p: `NOAA’s wind table for the station ranks April and May as Santa Maria’s windiest months and November through January as its calmest. Spring is also when the fields are busy, and wind crossing freshly worked ground carries grit. That makes April and May the months to plan for:`,
      },
      {
        list: [
          `Wear wraparound sunglasses for yard work, soccer practice at the park or a walk along the river levee.`,
          `Turn your back to a gust rather than squinting into it.`,
          `Keep the car’s fresh-air vent pointed at your chest instead of your face on Highway 101 or the drive out to Guadalupe.`,
          `Rinse your hands before touching your eyes after time outside.`,
        ],
      },
      { h: 'Field, packing shed and vineyard work' },
      {
        p: `Strawberries, vegetables and wine grapes shape the Santa Maria Valley’s working calendar. Picking crews bend over rows for hours, packing sheds run big fans, and tractor cabs pull in outside air. Any of that can dry the eyes. Protective eyewear is part of many field jobs anyway; a close fit around the sides helps with wind as well as dust. During breaks, close your eyes for a few seconds in the shade and blink slowly a few times before going back out.`,
      },
      {
        p: `Workers at the base up the coast near Lompoc, or anyone commuting there, add a long drive with the vents running. Our guide to [dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers) covers wind, sun and long shifts in more detail.`,
      },
      { h: 'Barbecue smoke and evenings outside' },
      {
        p: `Red-oak barbecue is the town’s signature, and standing over a grill lets smoke and heat reach your eyes. Step upwind of the pit, keep your face back when you lift the lid, and take a break from the smoke if your eyes start to sting. Late-summer evenings outdoors are pleasant here, but the air has gone months without rain by then, so a fire pit or patio heater adds to the drying.`,
      },
      { h: 'Inside the house in winter' },
      {
        p: `Santa Maria winters are mild by most standards, yet nights near 40°F mean the furnace runs from roughly December through February. Heating air without adding moisture lowers its relative humidity, which is why a bedroom can feel dry during the wettest months of the year. Point registers away from the bed and desk, and consider a room humidifier; [does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) explains what one can and can’t do.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is a preservative-free lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists the Uses as: {uses}. Directions: {directions}. While using it: {tip}.`,
      },
      {
        p: `The label also says: {warnings}. On storage: {storage}. A car parked at the beach or in a field lot on a warm September afternoon can get hotter than that, so keep the bottle in a bag or pocket. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in Santa Maria' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Santa Maria, Orcutt, Nipomo and Guadalupe, as they do to any US address. You can check out as a guest. Shipping is {shipping}, or free on {freeBottles} or more bottles. We don’t promise a delivery date, so order before you run out. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. Local details are on the [Santa Maria page](/eye-drops/santa-maria-ca) and the [California page](/eye-drops/state/california).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A lubricating drop helps with ordinary dryness. It isn’t a way to find out why your eyes feel the way they do. The label is direct about where it stops: {stopUse} Anything in one eye only, light sensitivity, or blur that doesn’t clear with blinking deserves an exam. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists more.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Santa Maria get?',
        a: `NOAA’s 1991 to 2020 normals for Santa Maria Public Airport add up to about 13.32 inches a year. February is the wettest month at 2.85 inches, and August averages only 0.01 inches.`,
      },
      {
        q: 'What is the windiest month in Santa Maria?',
        a: `NOAA’s wind table for the airport station ranks May just ahead of April as the windiest month, while November, December and January are the calmest.`,
      },
      {
        q: 'Does the marine layer help dry eyes in Santa Maria?',
        a: `Only in the morning. NOAA’s humidity figures for the airport drop from the 70s at dawn to the low 60s by afternoon in most months, and the sea breeze that follows the fog speeds evaporation from the tear film.`,
      },
      {
        q: 'Can I get Quell delivered to Orcutt or Nipomo?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any US address, including Orcutt and Nipomo, with tracking by email. No delivery date is promised, so order ahead.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-18 for dry-eye-relief-muskegon-mi:
   * - https://data.rcc-acis.org/StnData, sid USW00014840, NOAA 1991-2020 normals
   *   (raw: .daily-job/1118/a/raw-USW00014840.json). MUSKEGON COUNTY AP,
   *   elev 624 ft. Annual precip 35.08 in; Oct 3.80 (wettest), Apr 3.47,
   *   Feb 2.11 (driest). Snowfall 87.2 in a year: Jan 29.1, Dec 22.3, Feb 20.0,
   *   Mar 7.5, Nov 6.5, Apr 1.8. Normal highs Jan 32.5 F, Feb 34.5 F, Jul 81.6 F;
   *   normal lows Jan 20.7 F, Feb 20.8 F.
   * - relhum23.txt (WBAN 14840, morning/afternoon): Jan 81/75, Dec 81/75,
   *   Apr 76/56, May 75/55, Jun 79/58, Aug 87/61, annual 81/64.
   * - wndspd23.txt (WBAN 14840): Jan and Nov 5.0 windiest, Aug 3.4 calmest,
   *   annual 4.4 (no units stated).
   */
  {
    slug: 'dry-eye-relief-muskegon-mi',
    title: 'Dry eye relief in Muskegon, Michigan',
    description:
      'Muskegon averages about 87 inches of snow and its windiest months are November and January. NOAA’s lakeshore numbers and how to ease dry eyes.',
    category: 'local',
    addedOn: '2026-11-18',
    body: [
      {
        p: `In Muskegon, dry eyes usually come from two directions: the wind off Lake Michigan and the furnace that runs from fall into spring. NOAA’s normals for Muskegon County Airport show about 87 inches of snow a year and November and January as the windiest months. Cover your eyes outdoors, keep heated air off your face, blink fully, and use a lubricating drop as its label directs.`,
      },
      { h: 'The lakeshore climate, by the numbers' },
      {
        p: `Muskegon County Airport sits at about 624 feet in Norton Shores, south of downtown and close enough to the lake that its weather is lakeshore weather. NOAA’s 1991 to 2020 climate normals for the station include:`,
      },
      {
        list: [
          `About 35.08 inches of precipitation a year, with October the wettest month at 3.80 inches.`,
          `Normal snowfall of about 87.2 inches: 29.1 in January, 22.3 in December and 20.0 in February.`,
          `January highs averaging 32.5°F and lows near 20.7°F.`,
          `July highs around 81.6°F, warm but rarely harsh.`,
        ],
      },
      {
        p: `Much of that snow arrives as lake-effect bands, when cold air crosses open water and drops it on the shore. Shoveling, clearing the windshield and walking to the car all happen in that moving, freezing air.`,
      },
      { h: 'November gales and January wind' },
      {
        p: `NOAA’s wind table for the airport puts January and November at the top of Muskegon’s year, tied as its windiest months, with August the calmest. Wind is one of the strongest pulls on the tear film, because it carries moisture away from the eye’s surface between blinks. Cold wind also makes people squint and blink in short, incomplete flutters, which spreads tears poorly. On a gusty day:`,
      },
      {
        list: [
          `Wear wraparound sunglasses or ski goggles to walk the breakwater or watch the waves at Pere Marquette Park.`,
          `Pull a hat brim low and turn your face away from gusts when you can.`,
          `Inside again, close your eyes for a few seconds, then blink slowly and completely a few times.`,
          `Keep a scarf or neck gaiter up over your nose and mouth so your breath doesn’t fog your glasses and tempt you to take them off.`,
        ],
      },
      { h: 'Is the air in Muskegon dry in winter?' },
      {
        p: `Outdoors, not by the numbers. NOAA’s humidity table for the station shows January and December at about 81 percent in the morning and 75 percent in the afternoon. The dry air is indoors. With highs barely above freezing for three months, the furnace runs nearly nonstop, and warming cold air without adding water drops its relative humidity sharply. That’s why eyes can feel gritty at a desk in a house surrounded by snow.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom and the room where you spend evenings.`,
          `Close or redirect floor registers that blow toward the couch or bed.`,
          `Set the thermostat a little lower at night.`,
          `Turn the car heater’s airflow to the floor or windshield, not the dash vents aimed at your face.`,
        ],
      },
      { h: 'Spring afternoons are the driest outside' },
      {
        p: `Afternoon humidity at the airport falls to about 56 percent in April and 55 percent in May, the lowest of the year in NOAA’s table, while the lake is still cold. Those are the weeks of yard cleanup and the first rides on the Musketawa Trail. Sunglasses help here too, and they cut the glare off Muskegon Lake on bright days.`,
      },
      { h: 'Winter sports, ferries and the beach' },
      {
        p: `The winter sports park at Muskegon State Park draws people out for cross-country skiing, skating and a luge run, all fast-moving activities in cold air. Goggles cover more of the eye than sunglasses and block wind from the sides. In summer, a breezy ferry crossing or a long afternoon at the beach brings sun, glare and wind together. Our guide to [dry eyes on a winter hike](/guides/dry-eyes-on-a-winter-hike) has more for the cold months.`,
      },
      { h: 'Plants, shops and screens' },
      {
        p: `Plenty of Muskegon jobs are indoors in big, ventilated spaces: foundries, machine shops, warehouses and the hospital. Fans and forced air keep those spaces livable, and they also move air across your eyes for an entire shift. If your station sits under a heater or beside a fan, ask whether it can be angled away. Desk work brings its own problem, because concentrating on a screen slows the blink rate.`,
      },
      { h: 'Quell’s Drug Facts, in brief' },
      {
        p: `Quell is preservative-free and designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel states its Uses: {uses}. For dosing it says: {directions}. Its handling note reads: {tip}.`,
      },
      {
        p: `Before buying, read the caution: {warnings}. The panel adds a storage range: {storage}. A truck left at a snowy lot for a day can drop well below that, so keep the bottle inside your coat. Read the complete label on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering to Muskegon' },
      {
        p: `We ship from Brentwood, Tennessee, to Muskegon, Norton Shores, North Muskegon and anywhere else in the US. Guest checkout works, shipping is {shipping}, and orders of {freeBottles} bottles or more ship free. There’s no promised delivery date, and winter storms can slow any package, so reorder with a few weeks to spare. See the [Muskegon page](/eye-drops/muskegon-mi) or the [Michigan page](/eye-drops/state/michigan) for more.`,
      },
      { h: 'When to call an eye doctor' },
      {
        p: `If drops and a humidifier aren’t making a difference, it’s time for an exam rather than more products. The label says: {stopUse} Sudden blurring, pain, or sensitivity to light needs a doctor promptly. The [self-check](/self-check) can help you put symptoms into words before an appointment; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How much snow does Muskegon get a year?',
        a: `About 87.2 inches, according to NOAA’s 1991 to 2020 normals for Muskegon County Airport. January averages 29.1 inches, December 22.3 and February 20.0.`,
      },
      {
        q: 'What is the windiest month in Muskegon?',
        a: `January and November tie as the windiest months in NOAA’s wind table for Muskegon County Airport, and August is the calmest.`,
      },
      {
        q: 'Why do my eyes feel dry in Muskegon in winter when it’s so humid outside?',
        a: `Outdoor winter humidity at the airport runs in the high 70s and low 80s, but heating that cold air indoors lowers its relative humidity a great deal. A humidifier and vents pointed away from your face help.`,
      },
      {
        q: 'Should I wear goggles at the Muskegon winter sports park?',
        a: `For skiing, skating or sledding in wind, goggles cover more of the eye than sunglasses and block air from the sides, which helps slow tear evaporation in cold, moving air.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-18 for dry-eye-relief-tupelo-ms:
   * - https://data.rcc-acis.org/StnData, sid USW00093862, NOAA 1991-2020 normals
   *   (raw: .daily-job/1118/a/raw-USW00093862.json). TUPELO REGIONAL AP,
   *   elev 340 ft. Annual precip 57.74 in; Dec 5.94 (wettest), Apr 5.51,
   *   Mar 5.37, Sep 3.57 (driest). Snowfall 1.5 in: Jan 0.6, Feb 0.6, Mar 0.2,
   *   Dec 0.1. Normal highs Jul 92.3 F, Aug 91.9 F, Jan 53.2 F; Jan low 33.6 F.
   * - relhum23.txt (WBAN 93862, morning/afternoon): Apr 84/52, Jul 89/57,
   *   Aug 91/55, Oct 89/53, annual 86/57.
   * - wndspd23.txt (WBAN 93862): Feb and Mar 3.5 windiest, Jul and Aug 2.2
   *   calmest (no units stated).
   */
  {
    slug: 'dry-eye-relief-tupelo-ms',
    title: 'Dry eye relief in Tupelo, Mississippi',
    description:
      'Tupelo gets nearly 58 inches of rain a year, yet April afternoons dip to about 52 percent humidity. Where dry eyes come from in Tupelo and what helps.',
    category: 'local',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Tupelo is a wet place, with about 57.74 inches of precipitation a year in NOAA’s normals, so dry eyes there usually trace back to indoor air, screens and the occasional crisp afternoon. Air conditioning runs from May into October and heat runs through winter. Keep vents off your face, take screen breaks, wear sunglasses outside, and use a lubricating drop exactly as its label says.`,
      },
      { h: 'Tupelo’s weather at the regional airport' },
      {
        p: `NOAA’s 1991 to 2020 climate normals for Tupelo Regional Airport, at about 340 feet on the west side of the city, describe a long, hot growing season and a rainy cool season:`,
      },
      {
        list: [
          `About 57.74 inches of precipitation a year. December is the wettest month at 5.94 inches, and April follows at 5.51.`,
          `September is the driest month, still averaging 3.57 inches.`,
          `July highs average 92.3°F and August 91.9°F.`,
          `January highs are about 53.2°F, with lows near 33.6°F.`,
          `Snow is rare: about 1.5 inches in a normal year.`,
        ],
      },
      { h: 'Can you get dry eyes in a humid place like Tupelo?' },
      {
        p: `Yes, because the eye responds to the air right in front of it, not the regional average. NOAA’s humidity table for the airport puts August mornings at about 91 percent, yet afternoons fall to 55 percent that month. The afternoon readings dip lowest in April, at about 52 percent, and October, at about 53. A clear fall afternoon at a football game or a spring Saturday cutting grass can feel very different on the eyes from a muggy July dawn.`,
      },
      {
        p: `The bigger factor is time spent indoors. When it’s in the 90s outside, homes, cars, churches and stores keep the air conditioning cranked, and conditioned air is drier air. A ceiling fan on high in the bedroom adds a steady breeze across your face for hours. Our page on [sleeping with a fan on](/guides/dry-eyes-when-sleeping-with-a-fan-on) goes into that one.`,
      },
      { h: 'Furniture plants, warehouses and long shifts' },
      {
        p: `Furniture manufacturing has long been part of the Tupelo area’s working life, along with distribution centers and the medical center. Upholstery and woodworking floors can be dusty, and big buildings rely on fans and forced air. A few habits help on a shift:`,
      },
      {
        list: [
          `Wear the safety glasses your job provides; side shields block dust and moving air.`,
          `Wash your hands before touching your eyes or using a drop.`,
          `Use breaks to step away from fans and blink slowly, letting your lids close all the way.`,
          `Keep a drop in a locker or bag, not on a hot dashboard.`,
        ],
      },
      { h: 'Spring and fall outdoors' },
      {
        p: `NOAA’s wind table ranks February and March as Tupelo’s windiest months and July and August as its calmest. Late winter and early spring winds pair with pollen and yard work, so sunglasses earn their place on the drive or the walk at the park. On the Natchez Trace Parkway, a long ride with the windows down or a bicycle trip pushes air straight across your eyes; close-fitting glasses help, and so does keeping the car’s vents aimed low.`,
      },
      { h: 'Winter: rain outside, heat inside' },
      {
        p: `December brings more rain than any other month, and nights hover in the 30s. Furnaces and space heaters cycle on and off, and a space heater pointed at a recliner dries the eyes of whoever sits there. Move heaters so they warm your legs, not your face, and run a humidifier in rooms where you read or watch TV. [Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more ideas.`,
      },
      { h: 'What Quell is and what its label says' },
      {
        p: `Quell is a preservative-free lubricating eye drop, designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives the Uses: {uses}. The directions are short: {directions}. One handling instruction: {tip}.`,
      },
      {
        p: `The panel’s caution reads: {warnings}. It also says: {milky}. That color is expected. For storage the label lists: {storage}. A car in a Tupelo parking lot in July goes well past the top of that range, so don’t leave the bottle inside. The [Drug Facts page](/drug-facts) has the whole panel.`,
      },
      { h: 'Ordering Quell to Tupelo' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Tupelo, Saltillo, Belden and any other US address. Check out as a guest, pay {shipping} for shipping or nothing on {freeBottles} or more bottles, and watch for tracking by email. No delivery date is promised. The [Tupelo page](/eye-drops/tupelo-ms) and the [Mississippi page](/eye-drops/state/mississippi) have local notes.`,
      },
      { h: 'When to see an eye doctor in Tupelo' },
      {
        p: `A drop can ease everyday dryness, but it can’t tell you why your eyes hurt. The label’s line is: {stopUse} If one eye is much worse, if light suddenly bothers you, or if vision blurs and stays blurred, book an eye exam. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Tupelo get a year?',
        a: `About 57.74 inches, according to NOAA’s 1991 to 2020 normals for Tupelo Regional Airport. December is the wettest month and September the driest.`,
      },
      {
        q: 'Does it snow in Tupelo?',
        a: `Not much. NOAA’s normals for the airport show about 1.5 inches of snow in a typical year, split mostly between January and February.`,
      },
      {
        q: 'Why are my eyes dry in Tupelo when it’s so humid?',
        a: `Air conditioning, ceiling fans and screens dry the eyes indoors regardless of the weather. Outdoors, NOAA’s table shows afternoon humidity dropping to about 52 percent in April and 53 percent in October.`,
      },
      {
        q: 'Is it OK to leave eye drops in the car in Mississippi?',
        a: `Not in the warm months. Quell’s label says: {storage}. A parked car in a Tupelo summer runs far hotter than that, so carry the bottle with you.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-18 for dry-eye-relief-fort-worth-tx:
   * - https://data.rcc-acis.org/StnData, sid FTW (USW00013961), NOAA 1991-2020
   *   normals (raw: .daily-job/1118/a/raw-FTW.json). FORT WORTH MEACHAM FIELD,
   *   elev 701 ft. Annual precip 35.34 in; Oct 4.46 (wettest), May 4.02,
   *   Jun 4.02, Jan 2.05 (driest), Jul 2.18, Aug 2.23. Normal highs Jun 91.5 F,
   *   Jul 95.7 F, Aug 95.9 F, Sep 88.3 F, Jan 56.4 F; normal lows Jan 35.3 F,
   *   Jul 74.6 F, Aug 74.5 F. Snowfall missing (M): not stated.
   * - No relhum23/wndspd23 row for this station: no humidity or wind figures used.
   */
  {
    slug: 'dry-eye-relief-fort-worth-tx',
    title: 'Dry eye relief in Fort Worth, Texas',
    description:
      'Fort Worth’s Meacham Field averages highs near 96°F in July and August. NOAA’s numbers, arena dust, A/C and everyday dry eye relief in Fort Worth.',
    category: 'local',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Dry eye relief in Fort Worth means getting through long, hot summers spent mostly in air conditioning, plus dusty arenas, windy rides and heated winter air. NOAA’s normals for Meacham Field put July and August highs near 96°F. Keep vents and fans off your face, wear close-fitting sunglasses outdoors, blink fully at screens, and use a lubricating drop as its label directs.`,
      },
      { h: 'Fort Worth’s own weather station' },
      {
        p: `Meacham International Airport sits on the north side of Fort Worth, at about 701 feet, a few miles up from the Stockyards. NOAA’s 1991 to 2020 climate normals for Fort Worth Meacham Field, as published through the National Weather Service’s NOWData, show:`,
      },
      {
        list: [
          `About 35.34 inches of precipitation in a normal year.`,
          `October is the wettest month at 4.46 inches, with May and June close behind at 4.02 each.`,
          `January is the driest, at 2.05 inches, and July and August average only 2.18 and 2.23.`,
          `Normal highs are 95.7°F in July and 95.9°F in August; June averages 91.5°F.`,
          `January highs average 56.4°F, with lows near 35.3°F.`,
        ],
      },
      {
        p: `The pattern that matters for your eyes is the stretch from June into September: daily highs in the 90s, nights that stay in the mid-70s, and rainfall thinning out in midsummer. That pushes almost everyone indoors, or into a car with the air on high.`,
      },
      { h: 'Summer in the A/C' },
      {
        p: `Air conditioning cools air by pulling water out of it, and a vent blowing that air at your face strips moisture from the tear film between blinks. In a Fort Worth summer that’s the office, the truck, the grocery store and the bedroom, often for 20 or more hours of the day. Small changes add up:`,
      },
      {
        list: [
          `Aim dashboard vents at your chest or the ceiling, and use the floor setting once the cab has cooled.`,
          `Move your desk chair out from under a ceiling diffuser if you can.`,
          `Turn a bedroom ceiling fan down a notch or two at night.`,
          `Take a screen break every so often and blink slowly and completely.`,
        ],
      },
      { h: 'Stock show season and arena dust' },
      {
        p: `Fort Worth’s stock show and rodeo fills late January and early February, the driest stretch of the year at Meacham Field. Barns, show rings and arena floors stir up dust and bedding, and warm indoor air can feel dry on the eyes after hours of watching or working cattle. The same goes for the weekly rodeo and the cattle drive in the Stockyards. If you’re showing livestock or working the barns:`,
      },
      {
        list: [
          `Wear glasses or safety glasses in the barns, especially while bedding down pens or blowing out animals.`,
          `Wash your hands before touching your face or using a drop.`,
          `Step outside now and then, close your eyes for a few seconds, and blink slowly a few times.`,
          `Keep your drop in a pocket or tack box rather than a hot trailer cab.`,
        ],
      },
      { h: 'Trinity Trails, bikes and patios' },
      {
        p: `The trails along the Trinity River run for miles through the city, and a bike ride along them in summer means sun, glare off the water and a constant headwind. Wraparound sunglasses help with all three. Ride early, when the heat is lower, and stop in the shade to rest your eyes. Evening patio dinners in the Near Southside or Sundance Square usually come with misting fans and patio fans; sit where the air isn’t aimed straight at your face.`,
      },
      { h: 'Hangars, plants and logistics' },
      {
        p: `Aircraft plants, rail yards, warehouses around Alliance and the airport itself employ a lot of Fort Worth. Big, open spaces depend on industrial fans and forced air, and eyes take the brunt of it. Ask whether your workstation fan can be redirected, and wear the eye protection your job provides. Office work has its own trap: concentrating on a screen lowers the blink rate. [Eye drops for computer users](/guides/eye-drops-for-computer-users) covers that routine.`,
      },
      { h: 'Short winters, dry heat indoors' },
      {
        p: `Winter is short in Fort Worth, but January lows near 35°F still mean the furnace runs. Heated air is dry air, and a space heater aimed at a recliner or a bed dries the eyes of whoever is sitting there. Point heaters at your feet and run a humidifier in the bedroom on cold nights.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a preservative-free lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses section reads: {uses}. Dosing, as printed: {directions}. While it’s in use: {tip}.`,
      },
      {
        p: `The panel also cautions: {warnings}. On storage it says: {storage}. A truck sitting in a Fort Worth parking lot in July gets far hotter than the top of that range, so the glove box is the wrong place for the bottle. Read every section on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Fort Worth' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Fort Worth, Keller, Benbrook, Saginaw and every other US address. Check out as a guest. Shipping costs {shipping}, and {freeBottles} or more bottles ship free. Tracking comes by email, but no delivery date is promised, so order before you run low. The [Fort Worth page](/eye-drops/fort-worth-tx) and the [Texas page](/eye-drops/state/texas) have local details.`,
      },
      { h: 'When it’s an eye doctor’s call' },
      {
        p: `Drops are for ordinary dryness. Pain, a sudden change in vision, or dryness that keeps coming back after you’ve changed your habits deserves an exam. The label puts it this way: {stopUse} If dust or grit got into an eye and it still hurts after blinking and rinsing, see a doctor rather than adding more drops. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has a fuller list.`,
      },
    ],
    faq: [
      {
        q: 'How hot does Fort Worth get in the summer?',
        a: `NOAA’s 1991 to 2020 normals for Fort Worth Meacham Field put average highs at 95.7°F in July and 95.9°F in August. June averages 91.5°F.`,
      },
      {
        q: 'What is the rainiest month in Fort Worth?',
        a: `October, at about 4.46 inches in NOAA’s normals for Meacham Field. May and June follow at 4.02 inches each, and January is the driest month at 2.05.`,
      },
      {
        q: 'Why do my eyes get dry at the Fort Worth stock show?',
        a: `Barns and arenas are dusty, the indoor air is heated, and you may spend hours watching or working with your eyes wide open. Glasses, regular breaks outside and slow, full blinks help.`,
      },
      {
        q: 'Can I get Quell shipped to Keller or Benbrook?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any US address, including Keller and Benbrook, with tracking by email and no promised delivery date.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-18 for dry-eye-relief-san-jose-ca:
   * - https://data.rcc-acis.org/StnData, sid SJC (USW00023293), NOAA 1991-2020
   *   normals (raw: .daily-job/1118/a/raw-SJC.json). Station name "SAN JOSE",
   *   elev 49 ft. Annual precip 13.48 in; Jan 2.80, Feb 2.69, Dec 2.29, Mar 2.08;
   *   May 0.39, Jun 0.18, Jul 0.00, Aug 0.05, Sep 0.07, Oct 0.53. Normal highs
   *   Jul 80.8 F, Aug 81.4 F, Sep 80.7 F, Oct 75.8 F, Dec 59.5 F, Jan 59.8 F;
   *   normal lows Dec 41.7 F, Jan 41.8 F. Snowfall missing (M): not stated.
   * - No relhum23/wndspd23 row for this station: no humidity or wind figures used.
   * - Differs from dry-eye-relief-san-francisco-ca (fog, hills, waterfront):
   *   built on the inland valley, the rainless summer and office/tech life.
   */
  {
    slug: 'dry-eye-relief-san-jose-ca',
    title: 'Dry eye relief in San Jose, California',
    description:
      'NOAA’s normals give San Jose 0.00 inches of rain in July and about 13.5 a year. Why eyes dry out in the valley, at the desk, and what helps day to day.',
    category: 'local',
    addedOn: '2026-11-18',
    body: [
      {
        p: `In San Jose, dry eyes tend to follow the calendar and the workday. NOAA’s normals for the city’s airport station record about 13.48 inches of precipitation a year and 0.00 inches in July, and much of the city spends its days in climate-controlled offices staring at screens. Take regular screen breaks, keep vents off your face, wear sunglasses outside, and use a lubricating drop as its label directs.`,
      },
      { h: 'What the San Jose station shows' },
      {
        p: `The station NOAA lists as San Jose sits at the airport, about 49 feet above sea level near the Guadalupe River, in the flat middle of the Santa Clara Valley. Its 1991 to 2020 climate normals include:`,
      },
      {
        list: [
          `About 13.48 inches of precipitation in a normal year.`,
          `January is the wettest month at 2.80 inches, followed by February at 2.69 and December at 2.29.`,
          `June averages 0.18 inches, July 0.00, August 0.05 and September 0.07.`,
          `Normal highs reach 81.4°F in August and stay above 80°F from July through September.`,
          `December and January highs sit near 60°F, with lows close to 42°F.`,
        ],
      },
      {
        p: `In other words, the valley goes from late spring to mid-fall with almost no rain at all, and the hills around it turn gold by June. Dust, dry grass and pollen sit on every surface until the first storms in November.`,
      },
      { h: 'The valley summer' },
      {
        p: `Summer afternoons in San Jose are warm and sunny, and an afternoon breeze often moves that dry air across anyone outdoors. A walk through the Rose Garden, a game at the park or a Saturday ride on the Los Gatos Creek Trail adds sun glare and wind together. A few habits help:`,
      },
      {
        list: [
          `Wear wraparound sunglasses for rides and walks, since they block both light and side wind.`,
          `Head out in the morning, before the afternoon breeze picks up and the heat peaks.`,
          `Rest your eyes in the shade, closing them for a few seconds before you head out again.`,
          `Keep a hat with a brim in the car for afternoon errands.`,
        ],
      },
      { h: 'Long days at a screen' },
      {
        p: `A large share of San Jose works at a keyboard, whether in a campus building in North San Jose, a home office, or a lab. Focusing on a screen lowers the blink rate, and partial blinks don’t spread tears well across the eye. The building air adds to it: offices run air conditioning most of the year, and a ceiling diffuser above a desk can blow on one person for eight hours. Practical steps:`,
      },
      {
        list: [
          `Every 20 minutes or so, look out the window or across the room for a moment and blink fully a few times.`,
          `Set your monitor slightly below eye level, so your eyes aren’t opened as wide.`,
          `Ask facilities whether a diffuser over your desk can be redirected, or move your chair.`,
          `Schedule some meetings as walking calls to get away from the screen.`,
        ],
      },
      {
        p: `Our guide on [screens and your tear film](/guides/screens-and-your-tear-film) explains why concentration slows blinking.`,
      },
      { h: 'Commutes and car air' },
      {
        p: `Traffic on 101, 280, 87 and 880 means long drives with vents blowing. Point dashboard vents at your chest and keep a pair of sunglasses in the car for the westward drive home on a bright evening. Light-rail and Caltrain riders get a break from the vents but not from phones; look up from yours now and then.`,
      },
      { h: 'Fire season and smoky days' },
      {
        p: `Late summer and fall bring the driest landscape of the year, and when wildfire smoke drifts into the valley, eyes can sting and feel gritty. On those days, keep windows closed, run any air filter you have, and stay inside where you can. If your eyes still hurt after the air clears, get them checked.`,
      },
      { h: 'Quell, according to its label' },
      {
        p: `Quell is a preservative-free lubricating drop. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives the Uses: {uses}. How to use it: {directions}. Keep the dropper clean, too: {tip}.`,
      },
      {
        p: `The label’s caution reads: {warnings}. On appearance it says: {milky}. Storage, as printed: {storage}. Every part of the panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in San Jose' },
      {
        p: `We ship from Brentwood, Tennessee, to San Jose, Santa Clara, Campbell, Milpitas and every other US address. Checkout works as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery without returning them. See the [San Jose page](/eye-drops/san-jose-ca) and the [California page](/eye-drops/state/california).`,
      },
      { h: 'When an eye doctor should take a look' },
      {
        p: `A drop is for everyday dryness, not for figuring out what’s behind it. The label sets its own limit: {stopUse} Eye pain, blurred vision that doesn’t clear when you blink, or symptoms in only one eye call for an appointment. The [self-check](/self-check) helps you describe what you’re feeling; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does San Jose get a year?',
        a: `About 13.48 inches, according to NOAA’s 1991 to 2020 normals for the San Jose airport station. January is the wettest month at 2.80 inches, and July averages 0.00.`,
      },
      {
        q: 'What is the hottest month in San Jose?',
        a: `August, with a normal high of 81.4°F in NOAA’s normals for the San Jose station. July and September follow closely, both just above 80°F.`,
      },
      {
        q: 'Why do my eyes get dry at work in Silicon Valley?',
        a: `Screen work slows blinking, and office buildings run air conditioning for much of the year. Regular breaks, full blinks and moving away from a ceiling vent all help.`,
      },
      {
        q: 'Can I order Quell to Santa Clara or Milpitas?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Santa Clara, Milpitas and every other US address. Guest checkout is available and tracking arrives by email.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-18 for dry-eye-relief-greensboro-nc:
   * - https://data.rcc-acis.org/StnData, sid GSO (USW00013723), NOAA 1991-2020
   *   normals (raw: .daily-job/1118/a/raw-GSO.json). GREENSBORO/PIEDMONT TRIAD
   *   INTERNATIONAL AIRPORT, elev 902 ft. Annual precip 43.95 in; Sep 4.59
   *   (wettest), Aug 4.36, Feb 2.81 (driest). Snowfall 7.1 in: Jan 2.9, Feb 2.0,
   *   Dec 1.2, Mar 0.9, Nov 0.1. Normal highs Jul 88.5 F, Aug 86.6 F, Jan 49.3 F;
   *   normal lows Jan 30.1 F, Feb 32.7 F, Jul 69.3 F.
   * - No relhum23/wndspd23 row for this station: no humidity or wind figures used.
   * - Kept separate from today's Winston-Salem guide: built on Greensboro's
   *   campuses, greenways, lakes, coliseum and August golf week.
   */
  {
    slug: 'dry-eye-relief-greensboro-nc',
    title: 'Dry eye relief in Greensboro, North Carolina',
    description:
      'Greensboro gets about 44 inches of rain a year, but dry eyes still come from heat, A/C, screens and wind. NOAA’s numbers and everyday relief that fits.',
    category: 'local',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Greensboro isn’t a dry city on paper: NOAA’s normals for Piedmont Triad International Airport show about 43.95 inches of precipitation a year. Dry eyes there usually come from indoor air (heat from November to March, air conditioning from May to September), long screen sessions on campus and at work, and wind on the lakes and greenways. Adjust vents, blink fully, wear sunglasses outdoors, and use a lubricating drop as labeled.`,
      },
      { h: 'Greensboro’s climate at PTI' },
      {
        p: `The official station for Greensboro is at Piedmont Triad International, west of the city at about 902 feet. NOAA’s 1991 to 2020 climate normals there, also published through the National Weather Service’s NOWData, show:`,
      },
      {
        list: [
          `About 43.95 inches of precipitation a year, spread fairly evenly across the months.`,
          `September is the wettest month at 4.59 inches; February is the driest at 2.81.`,
          `About 7.1 inches of snow in a normal year, most of it in January (2.9) and February (2.0).`,
          `July highs average 88.5°F, and January highs about 49.3°F.`,
          `January lows average 30.1°F, so frosty mornings are routine in midwinter.`,
        ],
      },
      { h: 'Why do eyes feel dry when it rains this much?' },
      {
        p: `Rainfall totals describe the sky, not the room you sit in. Every month in Greensboro averages close to three inches or more of precipitation, but most people spend most hours indoors, where heating or cooling sets the humidity. Warming 30°F winter air to 70°F inside drops its relative humidity steeply, and air conditioning removes water from summer air as it cools it. Either way, the air at your desk can dry the tear film faster than the weather report suggests.`,
      },
      { h: 'Campus life and late-night screens' },
      {
        p: `UNC Greensboro, North Carolina A&T, Guilford College, Greensboro College and Bennett College put tens of thousands of students at laptops through exam weeks in December and May. Concentrating on a screen slows blinking, and a library carrel under an air vent dries eyes even faster. A routine that helps:`,
      },
      {
        list: [
          `Every 20 minutes, look away at something across the room and blink slowly a few times.`,
          `Sit away from the vent in a study room, or angle the laptop so the airflow passes behind you.`,
          `Lower screen brightness at night to match the room.`,
          `Close your eyes for a full minute between chapters or problem sets.`,
        ],
      },
      {
        p: `Our guide to [dry eyes while studying](/guides/dry-eyes-while-studying) has more for exam season.`,
      },
      { h: 'Greenways, lakes and August golf' },
      {
        p: `The Downtown Greenway and the trails around Lake Brandt and Lake Townsend draw walkers, runners and cyclists year-round. On a breezy day, wind across open water dries eyes quickly, and low winter sun glares off the lakes. Wraparound sunglasses help with both. In August, golf week at Sedgefield brings long afternoons in the sun near the year’s warmest temperatures; a hat brim, sunglasses and time in the shade make watching a round easier on the eyes.`,
      },
      { h: 'Arenas, warehouses and the furnace' },
      {
        p: `Big indoor spaces, from the coliseum complex to the distribution centers near the airport, run powerful heating and cooling. Sitting under a ceiling unit or working beside a dock fan means moving air across your eyes for hours. At home, the winter routine matters most:`,
      },
      {
        list: [
          `Run a humidifier in the bedroom from November through March.`,
          `Point floor registers and space heaters away from the bed and couch.`,
          `Aim car vents low or at the windshield on cold mornings.`,
          `Keep the bedroom ceiling fan off or low on winter nights.`,
        ],
      },
      { h: 'What Quell’s Drug Facts say' },
      {
        p: `Quell is a preservative-free lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. According to its Drug Facts panel, its Uses are: {uses}. The panel’s directions: {directions}. And a note on handling: {tip}.`,
      },
      {
        p: `Read the caution before buying: {warnings}. On color, the label notes: {milky}. Storage instructions are: {storage}. A car parked at PTI or a campus lot in July can get much hotter than that, so carry the bottle. The [Drug Facts page](/drug-facts) shows the whole label.`,
      },
      { h: 'Ordering Quell in Greensboro' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Greensboro, Jamestown, Summerfield, Pleasant Garden and any other US address. There’s guest checkout, shipping costs {shipping}, and {freeBottles} or more bottles ship free. Tracking is sent by email, but no delivery date is promised. The [Greensboro page](/eye-drops/greensboro-nc) and the [North Carolina page](/eye-drops/state/north-carolina) have local information.`,
      },
      { h: 'When to book an eye exam' },
      {
        p: `Dryness that keeps coming back after you’ve changed your habits is worth an eye doctor’s time, and some symptoms shouldn’t wait at all. The label says: {stopUse} Pain, light sensitivity or a sudden change in how you see needs prompt attention. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists more.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Greensboro get a year?',
        a: `About 43.95 inches, according to NOAA’s 1991 to 2020 normals for Piedmont Triad International Airport. September is the wettest month at 4.59 inches and February the driest at 2.81.`,
      },
      {
        q: 'How much snow does Greensboro get?',
        a: `About 7.1 inches in a normal year at Piedmont Triad International Airport, with January (2.9 inches) and February (2.0 inches) the snowiest months in NOAA’s normals.`,
      },
      {
        q: 'Why are my eyes dry in my dorm in Greensboro?',
        a: `Dorm heating in winter and air conditioning in late summer both dry indoor air, and long laptop sessions slow your blinking. A small humidifier, vents aimed away from you and regular screen breaks help.`,
      },
      {
        q: 'Can Quell be shipped to Summerfield or Jamestown?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Summerfield, Jamestown and every other US address. You can order as a guest, and tracking comes by email.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-18 for dry-eye-relief-fort-lauderdale-fl:
   * - https://data.rcc-acis.org/StnData, sid FLL (USW00012849), NOAA 1991-2020
   *   normals (raw: .daily-job/1118/a/raw-FLL.json). FORT LAUDERDALE
   *   INTERNATIONAL AIRPORT, elev 3 ft. Annual precip 60.95 in; Jun 9.55
   *   (wettest), Sep 8.02, Aug 7.89, Oct 7.37; Feb 2.38 and Mar 2.38 (driest),
   *   Dec 2.78, Jan 2.90. Normal highs Jan 75.6 F, Jul 90.0 F, Aug 90.0 F;
   *   normal lows Jan 60.9 F, Aug 77.9 F. Snowfall missing (M): not stated.
   * - No relhum23/wndspd23 row for this station: no humidity or wind figures used.
   * - Differs from the Miami and West Palm Beach guides: built on the cruise
   *   port and airport, canals and boats, beach glare and winter visitors.
   */
  {
    slug: 'dry-eye-relief-fort-lauderdale-fl',
    title: 'Dry eye relief in Fort Lauderdale, Florida',
    description:
      'Fort Lauderdale gets about 61 inches of rain a year, mostly from May to October. Why eyes still feel dry there, from A/C to boat spray, and what helps.',
    category: 'local',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Fort Lauderdale’s outdoor air is rarely dry, so eye dryness there usually comes from what people do in it: hours in air conditioning, wind and glare on the water, flights and cruises, and screens. NOAA’s normals for the airport show about 60.95 inches of precipitation a year. Point vents away from your face, wear wraparound sunglasses on boats and beaches, and use a lubricating drop as its label directs.`,
      },
      { h: 'Fort Lauderdale’s climate in NOAA’s normals' },
      {
        p: `NOAA’s 1991 to 2020 climate normals for Fort Lauderdale/Hollywood International Airport, at about 3 feet above sea level just south of downtown and next to Port Everglades, describe two seasons:`,
      },
      {
        list: [
          `About 60.95 inches of precipitation in a normal year.`,
          `June is the wettest month at 9.55 inches, followed by September (8.02), August (7.89) and October (7.37).`,
          `February and March are the driest, at 2.38 inches each.`,
          `Normal highs run from 75.6°F in January to 90.0°F in July and August.`,
          `Even January lows average 60.9°F, so heating barely runs.`,
        ],
      },
      {
        p: `The months from November through April are the city’s high season, when visitors arrive, rainfall is lowest and days on the beach and the water are most comfortable. Those are also the months when people spend the most time outdoors in sun and breeze.`,
      },
      { h: 'Air conditioning, nearly all year' },
      {
        p: `With highs above 80°F for most of the year, condos, offices, stores and cars run the air conditioning from spring through late fall, and often in winter too. Cooling pulls moisture from the air, and the vent stream itself dries the eye’s surface between blinks. A few habits help:`,
      },
      {
        list: [
          `Direct the car’s vents toward your chest, not your eyes, on I-95 or the drive down US-1.`,
          `Keep bedroom fans and A/C vents from blowing across your pillow.`,
          `At the office, move your chair out of a ceiling diffuser’s path.`,
          `Set the thermostat a degree or two warmer so the system cycles less.`,
        ],
      },
      { h: 'Boats, canals and beach glare' },
      {
        p: `Miles of canals and the Intracoastal Waterway make boating part of everyday life here. Running across open water pushes wind straight into your face, salt spray dries on your lashes and skin, and sunlight bounces off the water from below. On the sand along A1A, the same glare comes off the beach. Close-fitting, wraparound sunglasses with side coverage do the most good. Rinse your hands with fresh water before touching your eyes, and if spray gets in, blink it out and rinse with clean water. [Dry eyes after swimming](/guides/dry-eyes-after-swimming) covers pool and ocean days.`,
      },
      { h: 'Flights from FLL and cruises from Port Everglades' },
      {
        p: `Fort Lauderdale is a departure point for a great many trips. Airplane cabins have very dry air, and a cruise means days on open decks in wind and sun. For both:`,
      },
      {
        list: [
          `Pack eye drops in your carry-on liquids bag for flights; [traveling with eye drops](/guides/traveling-with-eye-drops) explains how the TSA’s liquids rule applies.`,
          `Turn the overhead air nozzle away from your face on the plane.`,
          `On deck, wear sunglasses that wrap around and take breaks in the shade.`,
          `Keep the bottle in your bag or cabin, out of direct sun.`,
        ],
      },
      { h: 'Winter visitors and new arrivals' },
      {
        p: `Seasonal residents often arrive from much colder, drier places where the furnace ran for months. Swapping heated air for air conditioning doesn’t always bring relief, because cooled air is dry too. If you spend the winter in a condo with the A/C running, the steps above apply. Don’t forget to pack a bottle of your drop, or order one to your Florida address.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses statement reads: {uses}. The directions are: {directions}. While using it: {tip}.`,
      },
      {
        p: `The label carries this caution: {warnings}. It also lists a storage range: {storage}. In Fort Lauderdale, a car, a boat console or a beach bag in the sun can easily pass the top of that range, so keep the bottle shaded and cool. Read the full panel on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Shipping Quell to Fort Lauderdale' },
      {
        p: `We ship from Brentwood, Tennessee, to Fort Lauderdale, Wilton Manors, Lauderdale-by-the-Sea, Plantation and every other US address. You can check out as a guest. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No delivery date is promised, so give yourself time. More details are on the [Fort Lauderdale page](/eye-drops/fort-lauderdale-fl) and the [Florida page](/eye-drops/state/florida).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If salt water, sand or something else got into an eye and it still hurts after blinking and rinsing, see a doctor instead of reaching for drops. The label’s guidance is: {stopUse} Ongoing dryness that doesn’t improve also deserves an exam. The [self-check](/self-check) can help you describe what you’re noticing; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'What is the rainiest month in Fort Lauderdale?',
        a: `June, at about 9.55 inches in NOAA’s 1991 to 2020 normals for the Fort Lauderdale airport. September, August and October follow, each above 7 inches.`,
      },
      {
        q: 'What is the driest month in Fort Lauderdale?',
        a: `February and March tie as the driest months, at about 2.38 inches each in NOAA’s normals for the airport station.`,
      },
      {
        q: 'Why do my eyes get dry on a boat in Fort Lauderdale?',
        a: `Running across open water pushes wind straight into your eyes, and glare off the water makes you squint and blink less fully. Wraparound sunglasses and breaks in the shade help.`,
      },
      {
        q: 'Can I bring eye drops on a cruise from Port Everglades?',
        a: `Quell’s label doesn’t address cruise rules, so check with your cruise line. Keep the bottle in your bag or cabin, out of direct sun, since the label says: {storage}.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-18 for dry-eye-relief-cedar-rapids-ia:
   * - https://data.rcc-acis.org/StnData, sid CID (USW00014990), NOAA 1991-2020
   *   normals (raw: .daily-job/1118/a/raw-CID.json). CEDAR RAPIDS MUNICIPAL AP,
   *   elev 840 ft. Annual precip 35.91 in; Jun 5.56 (wettest), May 4.25,
   *   Jul 4.41, Jan 0.95 (driest), Feb 1.22, Dec 1.59. Normal highs Jan 27.9 F,
   *   Feb 32.6 F, Dec 33.3 F, Jul 82.8 F; normal lows Jan 11.3 F, Feb 15.5 F,
   *   Dec 17.1 F. Snowfall missing (M): not stated.
   * - No relhum23/wndspd23 row for this station: no humidity or wind figures used.
   * - Differs from Des Moines, Dubuque, Waterloo and Sioux City guides: built on
   *   Cedar Rapids' river, plants, trails and its own winter numbers.
   */
  {
    slug: 'dry-eye-relief-cedar-rapids-ia',
    title: 'Dry eye relief in Cedar Rapids, Iowa',
    description:
      'Cedar Rapids averages January highs of 27.9°F and lows near 11°F, so the furnace runs for months. NOAA’s numbers and practical dry eye relief.',
    category: 'local',
    addedOn: '2026-11-18',
    body: [
      {
        p: `In Cedar Rapids, dry eyes peak in the long heating season. NOAA’s normals for the Eastern Iowa Airport put January highs at 27.9°F and lows at 11.3°F, so furnaces run hard from late fall into spring, and indoor air dries out. Run a humidifier, keep heat vents off your face, guard your eyes from wind, and use a lubricating drop exactly as its label directs.`,
      },
      { h: 'Cedar Rapids weather, from NOAA' },
      {
        p: `The Eastern Iowa Airport, southwest of the city at about 840 feet, is Cedar Rapids’ official station. NOAA’s 1991 to 2020 climate normals for it, as published through the National Weather Service’s NOWData, include:`,
      },
      {
        list: [
          `About 35.91 inches of precipitation a year.`,
          `June is the wettest month at 5.56 inches, with July (4.41) and May (4.25) next.`,
          `January is the driest, at 0.95 inches, and February adds only 1.22.`,
          `January highs average 27.9°F and lows 11.3°F; December and February are only a little milder.`,
          `July highs average 82.8°F.`,
        ],
      },
      {
        p: `The months with the least precipitation are also the coldest. December through February bring cold, thin air outside and the furnace inside, a combination that’s hard on the tear film.`,
      },
      { h: 'Why do my eyes get so dry in an Iowa winter?' },
      {
        p: `Cold air holds very little water. When a furnace warms January air from the teens to 70°F, its relative humidity falls sharply, often far below what feels comfortable. Tears evaporate faster into that air, especially if a vent blows across your face or you’re concentrating on a screen and blinking less. A winter checklist for a Cedar Rapids house:`,
      },
      {
        list: [
          `Run a humidifier in the bedroom, and clean it as its maker directs.`,
          `Close or redirect registers aimed at the bed, desk or recliner.`,
          `Lower the thermostat a bit at night.`,
          `In the car, send heat to the floor and windshield, not the face vents.`,
        ],
      },
      {
        p: `[Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) walks through the reasons in more detail.`,
      },
      { h: 'Wind on the open ground' },
      {
        p: `Eastern Iowa’s farmland gives winter wind a long run before it reaches town, and it can feel harshest on bridges over the Cedar River and in open parking lots. Blowing snow adds grit. Wraparound sunglasses or goggles help for snow clearing and long walks, and a hat brim or hood shields your eyes from side gusts. Turn your back to the wind while you wait for a bus or scrape a windshield.`,
      },
      { h: 'Plants, labs and offices' },
      {
        p: `Cedar Rapids has a lot of big workplaces: grain and food processing plants along the river, an aerospace and electronics campus, hospitals and offices downtown. Processing floors can be dusty, and large buildings use fans and forced air to stay comfortable. Wear the eye protection your job requires, wash your hands before touching your eyes, and take short breaks away from the airflow. Long hours at a monitor slow blinking, so look away from the screen every so often and blink completely.`,
      },
      { h: 'Summer on the trails and the river' },
      {
        p: `June is the wettest month and July highs average about 83°F, so summer days aren’t dry in the way winter is. Still, a long ride on the Cedar Valley Nature Trail or a day on the river means wind, sun and glare off the water. Sunglasses help, and so does keeping the car’s air conditioning aimed at your chest on the way home. Harvest season brings dust from the fields in the fall.`,
      },
      { h: 'Quell and its label' },
      {
        p: `Quell is a preservative-free lubricating eye drop, designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel says it’s for this use: {uses}. The directions: {directions}. To keep the bottle clean: {tip}.`,
      },
      {
        p: `Read the caution first: {warnings}. The panel lists storage as: {storage}. A car left out through a Cedar Rapids January night falls well below the bottom of that range, so keep the bottle indoors or in an inside coat pocket. The [Drug Facts page](/drug-facts) has every line of the panel.`,
      },
      { h: 'Getting Quell in Cedar Rapids' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Cedar Rapids, Marion, Hiawatha, Robins and any other US address. Check out as a guest. Shipping is {shipping}, or free on orders of {freeBottles} or more bottles. Tracking arrives by email, but there’s no promised delivery date, and winter weather can slow packages, so reorder early. The [Cedar Rapids page](/eye-drops/cedar-rapids-ia) and the [Iowa page](/eye-drops/state/iowa) have more.`,
      },
      { h: 'When to call an eye doctor' },
      {
        p: `A humidifier and a drop can help ordinary winter dryness. They aren’t for symptoms that could mean something more. The label is clear: {stopUse} Pain, changes in vision, or dryness that keeps coming back after you’ve changed your routine should be checked. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Cedar Rapids get in January?',
        a: `NOAA’s 1991 to 2020 normals for the Eastern Iowa Airport put January highs at 27.9°F and lows at 11.3°F, the coldest month of the year.`,
      },
      {
        q: 'What is the wettest month in Cedar Rapids?',
        a: `June, at about 5.56 inches in NOAA’s normals for the airport station. January is the driest month, at 0.95 inches.`,
      },
      {
        q: 'Why are my eyes dry in Cedar Rapids in winter?',
        a: `Furnace heat lowers indoor humidity sharply when it warms cold winter air, and that dry air pulls moisture from the tear film. A bedroom humidifier and vents aimed away from your face help.`,
      },
      {
        q: 'Can I get Quell shipped to Marion or Hiawatha?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Marion, Hiawatha and every other US address. You can check out as a guest, and no delivery date is promised.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-18 for dry-eye-relief-scottsdale-az:
   * - https://data.rcc-acis.org/StnData, sid SDL (USW00003192), NOAA 1991-2020
   *   normals (raw: .daily-job/1118/a/raw-SDL.json). SCOTTSDALE MUNICIPAL AP,
   *   elev 1431 ft. Annual precip 8.73 in; Feb 1.24 (wettest), Jan 1.11,
   *   Mar 1.10, Dec 0.99, Jul 0.90, Aug 0.83; Jun 0.05 (driest), May 0.16,
   *   Apr 0.34. Normal highs May 91.8 F, Jun 102.0 F, Jul 104.1 F, Aug 102.9 F,
   *   Sep 98.2 F, Dec 64.6 F, Jan 66.5 F; normal lows Jul 82.6 F, Dec 42.5 F.
   *   Snowfall missing (M): not stated.
   * - No relhum23/wndspd23 row for this station: no humidity or wind figures used.
   * - Differs from dry-eyes-in-phoenix (Arizona records, monsoon dust): built on
   *   Scottsdale's own station, golf, the preserve trails, spring training and
   *   resort pools.
   */
  {
    slug: 'dry-eye-relief-scottsdale-az',
    title: 'Dry eye relief in Scottsdale, Arizona',
    description:
      'Scottsdale’s airport averages 8.73 inches of rain a year and 0.05 in June. How desert air, golf, trails and pools dry the eyes, and what helps.',
    category: 'local',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Scottsdale’s desert air is the main cause of dry eyes there. NOAA’s normals for Scottsdale Airport show about 8.73 inches of precipitation a year and only 0.05 inches in June, with July highs averaging 104.1°F. Protect your eyes from sun and wind outdoors, keep air conditioning off your face, blink fully at screens, and use a lubricating drop as its label directs.`,
      },
      { h: 'Scottsdale’s own weather station' },
      {
        p: `Scottsdale Airport sits in the north part of the city near the Airpark, at about 1,431 feet. NOAA’s 1991 to 2020 climate normals for the station, also published through the National Weather Service’s NOWData, show:`,
      },
      {
        list: [
          `About 8.73 inches of precipitation in a normal year.`,
          `February is the wettest month at 1.24 inches, followed by January (1.11) and March (1.10).`,
          `June is the driest at 0.05 inches, with May at 0.16 and April at 0.34.`,
          `Normal highs pass 100°F in June (102.0), July (104.1) and August (102.9).`,
          `July nights average 82.6°F; December lows fall to about 42.5°F.`,
        ],
      },
      {
        p: `So the late spring is the driest stretch, the summer is the hottest, and the winter is the mildest and most pleasant, which is when the city fills with visitors.`,
      },
      { h: 'The golf course and the sun' },
      {
        p: `Scottsdale is known for golf, and a round means four or five hours of sun, wind and glare off fairways and sand. February’s big tournament in north Scottsdale draws crowds who stand outside for hours. For players and spectators:`,
      },
      {
        list: [
          `Wear wraparound sunglasses and a brimmed hat.`,
          `Tee off early in warm months, before the hottest part of the day.`,
          `Rest your eyes in the shade of the cart between holes, closing them for a few seconds.`,
          `Keep your drop in your bag’s insulated pocket, not on the cart dashboard.`,
        ],
      },
      { h: 'Trails in the McDowell Sonoran Preserve' },
      {
        p: `The preserve’s trailheads, from Gateway to Brown’s Ranch, lead into open desert with very little shade. Hiking or biking there in spring, the driest part of the year, puts dry, moving air across your eyes for hours. Start at sunrise, wear sunglasses with side coverage,. If grit blows into an eye, blink and rinse it out with clean water rather than rubbing. Our guide to [dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers) has more on long days in wind and sun.`,
      },
      { h: 'Resort pools and spring training' },
      {
        p: `Pool days are a Scottsdale staple, and spring training games in March pack fans into stands under the sun. Chlorinated water and glare off a pool deck can both bother the eyes, and a few innings in the bleachers means steady sun. Goggles in the water, sunglasses on the deck and in the stands, and breaks in the shade make a real difference. [Dry eyes after swimming](/guides/dry-eyes-after-swimming) covers pool days in detail.`,
      },
      { h: 'Indoors in the summer heat' },
      {
        p: `From June through September, air conditioning runs nearly nonstop in homes, galleries, offices and cars. Cooled desert air is already dry, and a vent blowing on your face makes it worse. Point car vents at your chest, keep bedroom fans and vents away from your pillow, and take regular breaks from screens to blink fully. In winter, nights near 42°F mean the heat runs briefly in the mornings and evenings too.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is a preservative-free lubricating eye drop. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists the Uses: {uses}. Directions, as printed: {directions}. Keep the tip clean: {tip}.`,
      },
      {
        p: `There’s a caution to read first: {warnings}. Storage is listed as: {storage}. In Scottsdale, a car parked in the sun from May to September runs far past the top of that range, so don’t leave the bottle in the car, the golf cart or a pool bag in direct sun. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Scottsdale' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Scottsdale, Fountain Hills, Paradise Valley, Cave Creek and every other US address. Guest checkout is available, shipping is {shipping}, and {freeBottles} or more bottles ship free. There’s no promised delivery date, and a package left on a sunny doorstep in summer heats up quickly, so bring it inside promptly. The [Scottsdale page](/eye-drops/scottsdale-az) and the [Arizona page](/eye-drops/state/arizona) have more.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Desert dryness is common, but some symptoms need an exam rather than another drop. The label says: {stopUse} A scratch from blowing grit that still hurts, sudden blurring or new light sensitivity should be checked. The [self-check](/self-check) can help you describe your symptoms; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Scottsdale get a year?',
        a: `About 8.73 inches, according to NOAA’s 1991 to 2020 normals for Scottsdale Airport. February is the wettest month and June the driest, at just 0.05 inches.`,
      },
      {
        q: 'How hot does Scottsdale get in the summer?',
        a: `NOAA’s normals for Scottsdale Airport put the average July high at 104.1°F, with June at 102.0°F and August at 102.9°F.`,
      },
      {
        q: 'Why do my eyes feel dry after golf in Scottsdale?',
        a: `Hours of sun, glare off the course and dry desert breezes pull moisture from the tear film. Wraparound sunglasses, a brimmed hat and breaks in the shade help.`,
      },
      {
        q: 'Can Quell be delivered to Fountain Hills or Cave Creek?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Fountain Hills, Cave Creek and every other US address. In summer, bring the package inside promptly, since the label says: {storage}.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-18 for fsa-vs-hsa-for-eye-drops:
   * - https://www.irs.gov/publications/p969 (saved .daily-job/1118/a/p969.txt):
   *   HSA eligibility (HDHP on first day of month, no other health coverage
   *   except permitted, not enrolled in Medicare, can't be claimed as a
   *   dependent); contributions remain until used; HSA is "portable";
   *   earnings tax free; employee with HDHP plus a health FSA that pays
   *   qualified medical expenses can't generally contribute to an HSA, except
   *   limited-purpose (items under Other health coverage, incl. dental and
   *   vision care), post-deductible, suspended or retiree-only arrangements;
   *   grace-period coverage allowed if prior-year FSA balance is zero. Health
   *   FSAs are employer-established; self-employed aren't eligible; full
   *   election available at any time during the coverage period; FSA OTC
   *   medicine "considered medical care"; use-it-or-lose-it, plan may offer a
   *   grace period of up to 2 1/2 months or a carryover, not both.
   * - https://www.irs.gov/newsroom/irs-outlines-changes-to-health-care-spending-available-under-cares-act
   *   (IR-2020-122): OTC products and medications reimbursable without a
   *   prescription, amounts paid after Dec. 31, 2019; save receipts.
   */
  {
    slug: 'fsa-vs-hsa-for-eye-drops',
    title: 'FSA vs. HSA for eye drops: which should you use?',
    description:
      'Both an FSA and an HSA can pay for over-the-counter eye drops. How IRS rules differ on rollover, eligibility and using both, and which to spend first.',
    category: 'ordering',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Either account can pay for over-the-counter eye drops like Quell, because the CARES Act made OTC medicines qualified medical expenses for both. If you have an FSA balance that expires at the end of the plan year, spending it first usually makes sense, since unused FSA money is generally forfeited while HSA money stays yours. Your plan’s own rules decide the details, so check with its administrator.`,
      },
      { h: 'FSA vs. HSA: the short version' },
      {
        p: `A health flexible spending arrangement (FSA) and a health savings account (HSA) both let you pay medical costs with money that isn’t taxed, but they’re built differently. IRS Publication 969 lays out the rules for both:`,
      },
      {
        list: [
          `Who offers it: health FSAs are employer-established plans, and Publication 969 says self-employed people aren’t eligible for one. An HSA is an account you own, open to anyone covered by a qualifying high deductible health plan (HDHP).`,
          `What happens at year end: FSAs are generally “use-it-or-lose-it,” though a plan may add a grace period or a limited carryover. HSA contributions remain in the account until you use them.`,
          `What happens if you change jobs: Publication 969 calls an HSA “portable,” meaning it stays with you. An FSA belongs to the employer’s plan.`,
          `When the money is there: an FSA must make your full annual election available at any time during the coverage period. An HSA can only pay out what has actually been deposited.`,
        ],
      },
      { h: 'Can both pay for eye drops?' },
      {
        p: `Yes. Before 2020, over-the-counter medicines generally needed a prescription to be reimbursed from these accounts. The CARES Act changed that, and the IRS said in news release IR-2020-122 that over-the-counter products and medications became reimbursable without a prescription for amounts paid after December 31, 2019. Publication 969 states that over-the-counter medicine, whether or not prescribed, is considered medical care for a health FSA.`,
      },
      {
        p: `Quell is an over-the-counter drug with a standard Drug Facts panel. Its Uses line reads: {uses}. That’s the kind of product these rules cover, though your plan can still ask for documentation. Our guide [why OTC eye drops count for HSA and FSA](/guides/why-otc-eye-drops-count-for-hsa-and-fsa) has the background.`,
      },
      { h: 'Which is better, HSA or FSA, for eye drops?' },
      {
        p: `Neither is better in every case. It depends on what you already have and when the money expires. Some practical rules of thumb:`,
      },
      {
        list: [
          `If you have an FSA balance near the end of your plan year, spend it first. Money that isn’t used, carried over or claimed in a grace period is generally forfeited.`,
          `If you have only an HSA, use it whenever you like; there’s no deadline for spending HSA funds on qualified expenses.`,
          `If you want to grow your HSA, some people pay for small purchases out of pocket and leave the HSA invested. Keep the receipt either way.`,
          `If your FSA is a limited-purpose plan, check whether it covers OTC eye drops before you buy (more on that below).`,
        ],
      },
      { h: 'Can you have both an HSA and an FSA?' },
      {
        p: `Sometimes. Publication 969 says an employee covered by an HDHP and a health FSA that pays general medical expenses can’t generally contribute to an HSA. But it lists exceptions, including:`,
      },
      {
        list: [
          `A limited-purpose health FSA, which can pay for items like dental and vision care.`,
          `A post-deductible health FSA, which doesn’t pay anything until the HDHP’s minimum deductible is met.`,
          `A general-purpose FSA grace period, as long as the FSA balance at the end of the prior plan year was zero.`,
        ],
      },
      {
        p: `Whether a limited-purpose FSA covers over-the-counter eye drops is a plan decision. Some limited-purpose plans list them as an eligible vision expense; others don’t. Your plan’s eligible-expense list or its administrator is the place to check.`,
      },
      { h: 'Does FSA roll over?' },
      {
        p: `Not by default. Publication 969 describes FSAs as generally use-it-or-lose-it, then lists two options a plan can choose: a grace period of up to two and a half months after the plan year, or a carryover of a limited amount into the next year. A plan can offer one or the other, not both. The carryover cap is set each year by the IRS, and your plan may pick a lower amount. Our guide to the [FSA carryover and grace period](/guides/fsa-carryover-and-grace-period-for-eye-drops) walks through how timing works for an eye drop order.`,
      },
      {
        p: `An HSA, by contrast, doesn’t need rolling over. The balance simply stays in the account from year to year, along with any earnings, which Publication 969 says are tax free.`,
      },
      { h: 'How to pay for Quell with either account' },
      {
        list: [
          `Add Quell to your cart at [quelldrop.com](/#buy) and check out as a guest.`,
          `Try your FSA or HSA card at payment. Whether it’s accepted depends on the card and your plan, and the site can’t confirm that in advance.`,
          `If the card is declined, pay another way and submit the order confirmation email as your receipt for reimbursement, if your plan allows it.`,
          `Keep the confirmation email. The IRS told account holders in IR-2020-122 to save receipts for their records.`,
        ],
      },
      {
        p: `Shipping is {shipping}, or free on {freeBottles} or more bottles. Some plans reimburse shipping and some don’t; [how to file an FSA claim for eye drops](/guides/how-to-file-an-fsa-claim-for-eye-drops) covers the receipt in detail.`,
      },
      { h: 'What the account doesn’t decide' },
      {
        p: `An account paying for a drop doesn’t make it the right drop for you. Read the label first, including this caution: {warnings}. If you wear contact lenses or use other eye drops, the label doesn’t cover those situations, so ask your eye doctor or pharmacist. And the label is clear about when to stop: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Which is better, an HSA or an FSA, for over-the-counter medicine?',
        a: `Both can pay for OTC medicine under the CARES Act rules. If you have FSA money that will expire, it usually makes sense to spend that first, since HSA balances stay in your account from year to year.`,
      },
      {
        q: 'Is an HSA or an FSA better if I change jobs?',
        a: `An HSA, in most cases. IRS Publication 969 calls an HSA portable, so the balance stays with you when you leave an employer, while a health FSA belongs to the employer’s plan and its rules decide what happens to any balance.`,
      },
      {
        q: 'Does a limited-purpose FSA cover eye drops?',
        a: `It depends on the plan. IRS Publication 969 says limited-purpose FSAs can pay for items such as dental and vision care, and each plan decides whether over-the-counter eye drops fall within that. Check the plan’s eligible-expense list.`,
      },
      {
        q: 'Do HSA funds expire at the end of the year?',
        a: `No. IRS Publication 969 says HSA contributions remain in your account until you use them, and the account stays with you if you change employers.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-18 for can-you-use-fsafeds-for-eye-drops
   * (fsafeds.gov blocked curl with a Cloudflare 403; read in the built-in
   * browser; notes at .daily-job/1118/a/fsafeds-notes.txt):
   * - https://www.fsafeds.gov/explore/hcfsa/expenses?take=500 : "Eye drops and
   *   treatments (over-the-counter)" - "Eligible with detailed receipt"; keep
   *   receipts; IRS may request itemized receipts; credit card receipts,
   *   canceled checks and balance forward statements are not acceptable
   *   documentation; "The IRS determines which expenses can be reimbursed".
   * - https://www.fsafeds.gov/explore/lex-hcfsa/expenses?take=500 : LEX HCFSA
   *   pays dental and vision; same eye drop row, eligible with detailed receipt.
   * - https://www.fsafeds.gov/support/faq/all/663 : claim needs EOB, itemized
   *   receipt or other documentation with patient's name (may be excluded for
   *   retail store purchases), provider/merchant name, date, detailed
   *   description, cost; can't reimburse until the expense is incurred; CARES
   *   Act signed March 27, 2020, OTC medicines eligible without prescription as
   *   of January 1, 2020; general health or cosmetic items not eligible.
   * - https://www.fsafeds.gov/file : file online ("Submit Receipt or Claim"),
   *   FSAFEDS app (photos of receipts), or fax/mail the claim form with copies;
   *   keep originals; receipts legible, no highlighters.
   * - IRS Publication 969: self-employed persons aren't eligible for FSAs.
   */
  {
    slug: 'can-you-use-fsafeds-for-eye-drops',
    title: 'Can you use FSAFEDS for eye drops?',
    description:
      'Yes. FSAFEDS lists over-the-counter eye drops as eligible for the Health Care FSA and the Limited Expense FSA with a detailed receipt. How to claim.',
    category: 'ordering',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Yes. FSAFEDS, the flexible spending program for federal employees, lists “eye drops and treatments (over-the-counter)” as eligible with a detailed receipt in both its Health Care FSA and Limited Expense Health Care FSA expense lists. That covers a lubricating drop like Quell. You pay, keep an itemized receipt, and file a claim online, in the FSAFEDS app, or by fax or mail.`,
      },
      { h: 'What FSAFEDS says about eye drops' },
      {
        p: `The eligible-expense search on fsafeds.gov has a row for over-the-counter eye drops in each of its two health accounts. In both, the eligibility column reads “Eligible with detailed receipt.” The site also says the IRS determines which expenses an FSA can reimburse, and the accounts can pay for you, your spouse and your dependents.`,
      },
      {
        list: [
          `Health Care FSA (HCFSA): the general account, covering a wide range of medical products and services.`,
          `Limited Expense Health Care FSA (LEX HCFSA): described on fsafeds.gov as paying for dental and vision services and certain products. Over-the-counter eye drops are on its list too.`,
          `Dependent Care FSA: for care costs, not health products. Eye drops belong with one of the health accounts.`,
        ],
      },
      { h: 'Why over-the-counter drops qualify' },
      {
        p: `FSAFEDS ties this to the CARES Act, which it notes was signed on March 27, 2020. Under it, over-the-counter medicines and drugs are eligible for reimbursement from a Health Care FSA without a prescription as of January 1, 2020. FSAFEDS adds that items used for general health or cosmetic purposes aren’t eligible. Quell is an over-the-counter drug with a Drug Facts panel, and its stated Uses are: {uses}. [Why OTC eye drops count for HSA and FSA](/guides/why-otc-eye-drops-count-for-hsa-and-fsa) explains the federal rule behind it.`,
      },
      { h: 'What a “detailed receipt” has to show' },
      {
        p: `FSAFEDS lists five details it wants on a receipt or other documentation for a health claim:`,
      },
      {
        list: [
          `Patient’s name, the person the item was bought for. FSAFEDS says this may be left out for retail store purchases.`,
          `Provider’s name, which for a product is the merchant you bought it from.`,
          `Date of service, meaning the purchase date.`,
          `Type of service, a detailed description of the item.`,
          `Cost, the amount you paid.`,
        ],
      },
      {
        p: `A Quell order confirmation email lists the order number, each item and its price, shipping and the total, along with {company} as the seller, and your inbox shows the date it arrived. FSAFEDS specifically says credit card receipts, canceled checks and balance-forward statements don’t count as documentation, so submit the order confirmation, not a card statement.`,
      },
      { h: 'How to file an FSAFEDS claim for eye drops' },
      {
        p: `According to fsafeds.gov, you can file in three ways:`,
      },
      {
        list: [
          `Online: log in to your FSAFEDS account, choose Submit Receipt or Claim, pick a reimbursement option, and upload a copy of the receipt.`,
          `In the FSAFEDS app: log in with the same username and password, choose to submit a claim, and photograph or upload the receipt.`,
          `By fax or mail: download the claim form, fill it in, and send it with copies of your receipts. Keep the originals.`,
        ],
      },
      {
        p: `A screenshot or PDF of the confirmation email works for uploading, as long as it’s legible and nothing is cut off. FSAFEDS asks that you not use highlighters on receipts. It also says it can’t reimburse an expense before it’s incurred, so file after you’ve placed and paid for the order.`,
      },
      { h: 'Using your FSAFEDS card at checkout' },
      {
        p: `If your account comes with a payment card, you can try it at checkout. Whether a particular card is accepted depends on the card and the plan’s settings, and quelldrop.com can’t confirm that ahead of time. If it’s declined, pay with another card and file a claim with the confirmation email instead. Keep the receipt in either case, because FSAFEDS says the IRS may ask for itemized receipts to verify expenses.`,
      },
      { h: 'Timing around the plan year' },
      {
        p: `FSA money is tied to a plan year, and FSAFEDS publishes its own deadlines for spending and filing on its Important Dates page. If you’re trying to use a balance before it expires, order early: Quell ships from Brentwood, Tennessee, with tracking by email, but no delivery date is promised. The receipt shows the date you paid, which is the date FSAFEDS asks for. Our [FSA carryover and grace period guide](/guides/fsa-carryover-and-grace-period-for-eye-drops) explains the general IRS rules.`,
      },
      { h: 'Before you order' },
      {
        p: `An eligible expense isn’t automatically the right product for you. Quell’s label carries this caution: {warnings}. The label doesn’t cover use with contact lenses or other eye drops, so ask your eye doctor or pharmacist if either applies. Read the whole panel on the [Drug Facts page](/drug-facts), then [order from the home page](/#buy) as a guest.`,
      },
    ],
    faq: [
      {
        q: 'Are eye drops FSAFEDS eligible?',
        a: `Yes. The FSAFEDS eligible-expense list shows “eye drops and treatments (over-the-counter)” as eligible with a detailed receipt for both the Health Care FSA and the Limited Expense Health Care FSA.`,
      },
      {
        q: 'Can I use my FSAFEDS limited expense account for eye drops?',
        a: `Yes. The LEX HCFSA, which FSAFEDS describes as covering dental and vision, lists over-the-counter eye drops as eligible with a detailed receipt.`,
      },
      {
        q: 'What receipt does FSAFEDS need for over-the-counter items?',
        a: `FSAFEDS asks for the merchant’s name, the purchase date, a description of the item and the cost. The patient’s name may be left off for retail purchases, and a credit card receipt alone isn’t accepted.`,
      },
      {
        q: 'Can I submit an FSAFEDS claim with a screenshot of an order email?',
        a: `FSAFEDS accepts uploaded copies and app photos of itemized receipts, so a clear image of the confirmation email showing the seller, date, item and cost should meet its listed requirements. Make sure nothing is cut off.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-18 for eye-drops-vs-eye-wash (eCFR versioner API,
   * title 21 as of 2026-11-01; saved in .daily-job/1118/a/ecfr-*.xml):
   * - 21 CFR 349.3(f): eyewash, eye lotion, irrigating solution = "A sterile
   *   aqueous solution intended for washing, bathing, or flushing the eye."
   *   349.3(d) demulcent, usually a water-soluble polymer, applied to protect
   *   and lubricate mucous membrane surfaces and relieve dryness and
   *   irritation; 349.3(e) emollient, usually a fat or oil, applied to eyelids
   *   to protect or soften tissues and to prevent drying and cracking.
   * - 21 CFR 349.20: eyewash active ingredient is purified water, plus tonicity
   *   agents (isotonic with tears), pH/buffering agents (same pH as tears) and
   *   a suitable preservative agent.
   * - 21 CFR 349.78: identity terms "eyewash," "eye irrigation," "eye
   *   irrigating solution"; indications: flushing/irrigating/cleansing/washing/
   *   bathing the eye to remove loose foreign material, air pollutants (smog or
   *   pollen) or chlorinated water; warnings include consulting a doctor for
   *   pain or vision changes, immediate medical care for open wounds in or near
   *   the eyes, do not use if solution changes color or becomes cloudy;
   *   directions for eyecup (rinse cup, fill half full, press to the eye, tilt
   *   head back, open lids, rotate eyeball, rinse cup) or nozzle (flush the
   *   affected eye as needed, controlling flow by pressure on the bottle).
   * Paraphrased: the regulation's warning wording includes words the guide
   * rules keep out of prose. No claim that Quell conforms to any monograph.
   */
  {
    slug: 'eye-drops-vs-eye-wash',
    title: 'Eye drops vs. eye wash: what’s the difference?',
    description:
      'Eye wash flushes something out of the eye; lubricating drops add moisture a drop at a time. What FDA rules say each one is for, and which one you need.',
    category: 'choosing',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Eye wash and eye drops do different jobs. Under FDA’s rules in 21 CFR part 349, an eyewash is a sterile water-based solution for flushing out loose debris, smog, pollen or pool water, used in a generous stream or an eyecup. A lubricating eye drop like Quell is applied one drop at a time to relieve dryness and irritation. Use eye wash to rinse something out, and a lubricating drop for dry eyes.`,
      },
      { h: 'What the FDA rules call an eyewash' },
      {
        p: `The federal rules for over-the-counter eye products sit in Title 21 of the Code of Federal Regulations, part 349. Section 349.3 defines an eyewash (also called an eye lotion or irrigating solution) as a sterile aqueous solution intended for washing, bathing or flushing the eye. Section 349.20 spells out what’s in one:`,
      },
      {
        list: [
          `The active ingredient is purified water.`,
          `Tonicity agents make it isotonic with tears.`,
          `Buffering agents bring it to the same pH as tears.`,
          `It contains a suitable preservative agent.`,
        ],
      },
      {
        p: `That last point matters if you’re comparing labels. Eyewash under that section includes a preservative; Quell is labeled preservative-free.`,
      },
      { h: 'What an eyewash label says it’s for' },
      {
        p: `Section 349.78 sets the wording an eyewash label uses. The product must be identified as an “eyewash,” “eye irrigation” or “eye irrigating solution,” and its stated purpose is flushing, irrigating, cleansing, washing or bathing the eye to remove one or more of three things:`,
      },
      {
        list: [
          `Loose foreign material, such as dust or a stray eyelash.`,
          `Air pollutants, which the rule names as smog or pollen.`,
          `Chlorinated water, after swimming.`,
        ],
      },
      {
        p: `The directions are about volume. With an eyecup, the rule describes filling the cup halfway, pressing it to the eye, tilting the head back and opening the lids wide so the solution bathes the eye. With a nozzle bottle, you flush the eye as needed, squeezing to control the flow. The labeling must also tell you to get medical care right away for open wounds in or near the eyes, and not to use the solution if it changes color or turns cloudy.`,
      },
      { h: 'What a lubricating eye drop is for' },
      {
        p: `A lubricating drop works on a different scale: one drop, placed in the eye, meant to stay and add to the tear film rather than rinse it away. Part 349 defines two kinds of ingredients common in these drops. A demulcent is usually a water-soluble polymer that protects and lubricates the eye’s surface and relieves dryness and irritation. An emollient is usually a fat or oil applied to protect or soften tissue and keep it from drying.`,
      },
      {
        p: `Quell’s Drug Facts panel lists its active ingredients as {actives}, and its Uses read: {uses}. The directions are a measured dose, not a flush: {directions}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is a different goal from washing the eye out.`,
      },
      { h: 'Is eye wash the same as eye drops?' },
      {
        p: `No. They overlap in being sterile and made for the eye, but the differences are practical:`,
      },
      {
        list: [
          `Amount: an eyewash is used generously, in a stream or a cupful. A lubricating drop is a single drop per eye.`,
          `Purpose: eyewash removes something. A lubricating drop adds moisture and protection.`,
          `What stays behind: an eyewash is mostly water and runs off. A lubricating drop is formulated to remain on the eye’s surface.`,
          `Ingredients: eyewash is purified water with salts and buffers. Lubricating drops carry active ingredients such as demulcents and emollients.`,
          `Look: Quell’s label notes: {milky}. The eyewash rule says not to use a wash that changes color or turns cloudy.`,
        ],
      },
      { h: 'Can eye wash be used as eye drops?' },
      {
        p: `Not as a substitute for a lubricating drop. Flushing the eye with a water-based wash can rinse out grit, and it may feel soothing for a moment, but it isn’t designed to stay on the eye or to reinforce the tear film. If your eyes feel dry from screens, wind or heated air, a wash is likely to run off within moments. Going the other way doesn’t work either: a {size} bottle of drops isn’t enough to flush debris out of an eye, and the directions on Quell’s label don’t describe flushing.`,
      },
      { h: 'Eye wash or eye drops: which do you need?' },
      {
        list: [
          `Sand, dust or an eyelash in the eye: an eyewash or a clean-water rinse, then blink. If it still feels like something is there, see a doctor.`,
          `Eyes sting after swimming: an eyewash labeled for chlorinated water fits that purpose. [Dry eyes after swimming](/guides/dry-eyes-after-swimming) covers the rest.`,
          `Dry, tired or scratchy eyes from screens, heating or wind: a lubricating drop used as its label directs.`,
          `A chemical splash: this is an emergency. Follow the emergency instructions for the chemical and get medical help right away.`,
          `Pain, vision changes, or an injury: skip both and see a doctor.`,
        ],
      },
      {
        p: `If you wear contact lenses, neither the eyewash rules discussed here nor Quell’s label tells you how to use the product with lenses. Ask your eye doctor or pharmacist before using either one with lenses in. The same goes for using a wash and a drop together.`,
      },
      { h: 'Keeping both on hand' },
      {
        p: `A household or workplace kit can hold both, because they serve different needs. [Eye drops for a home first aid kit](/guides/eye-drops-for-a-home-first-aid-kit) covers stocking them. Store the lubricating drop the way its label says: {storage}. Keep each drop bottle to one person, and follow the label’s instruction: {tip}.`,
      },
      { h: 'When neither one is the answer' },
      {
        p: `Both products have limits, and the labels say so. Quell’s panel says: {stopUse} An eyewash label carries a similar warning to consult a doctor for pain, vision changes, or irritation that continues or worsens. For a list of symptoms that need an exam, see [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor). You can read Quell’s complete panel on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Can you use eye wash for dry eyes?',
        a: `An eyewash is designed to flush the eye and run off, not to stay on its surface, so it isn’t made for dryness. FDA’s rules describe eyewash as a product for removing loose material, smog, pollen or chlorinated water.`,
      },
      {
        q: 'What is the active ingredient in eye wash?',
        a: `Purified water. Under 21 CFR 349.20, an eyewash also contains agents to match the tonicity and pH of tears and a suitable preservative.`,
      },
      {
        q: 'Is eye wash or eye drops better for something in your eye?',
        a: `For loose debris like dust or an eyelash, an eyewash or clean-water rinse is the tool designed for it. If the eye still hurts or feels like something is stuck after rinsing, see a doctor.`,
      },
      {
        q: 'Does eye wash have preservatives?',
        a: `Eyewash made under FDA’s 21 CFR 349.20 includes a suitable preservative agent along with purified water and buffering agents. Quell, a lubricating drop, is labeled preservative-free.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-18 for side-effects-of-lubricating-eye-drops:
   * - 21 CFR 201.66(c)(5)(vi) (eCFR versioner API, saved
   *   .daily-job/1118/a/ecfr-201-66.txt): the "When using this product"
   *   heading is followed by "the side effects that the consumer may
   *   experience" and substances or activities to avoid.
   * - Quell's panel via tokens only. Temporary blur only as the existing guide
   *   is-it-normal-for-vision-to-blur-after-eye-drops states it.
   */
  {
    slug: 'side-effects-of-lubricating-eye-drops',
    title: 'Side effects of lubricating eye drops',
    description:
      'Quell’s Drug Facts panel lists no side effects under “When using this product.” What it does warn about, what it leaves out, and when to stop and call.',
    category: 'label',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Quell’s Drug Facts panel doesn’t list any side effects. Under FDA’s format, side effects go under “When using this product,” and Quell’s line there is a handling instruction about the bottle tip. The label does carry a caution for people with egg or bird allergies, a do-not-use rule if the product changes color, and a list of reasons to stop and ask a doctor, including eye pain and vision changes.`,
      },
      { h: 'Where side effects appear on an OTC label' },
      {
        p: `Every over-the-counter drug in the US uses the same Drug Facts layout, set by FDA in 21 CFR 201.66. That rule says the “When using this product” heading is followed by the side effects a consumer may experience, plus any substances or activities to avoid while using the product. So if a drug has expected side effects worth printing, that’s where to look.`,
      },
      {
        p: `On Quell’s panel, the “When using this product” section has a single line: {tip}. It’s about keeping the bottle clean, not about an effect on the eye. No side effect is listed there or anywhere else on the panel.`,
      },
      { h: 'What the label does warn about' },
      {
        p: `A label with no listed side effects still has warnings. Quell’s are short, and each one has a reason:`,
      },
      {
        list: [
          `The caution: {warnings}. Quell contains emu oil, which is why the panel mentions egg and bird allergies. [Egg or bird allergy and Quell](/guides/egg-or-bird-allergy-and-quell) explains it.`,
          `Do not use: {doNotUse}. The product is supposed to look a particular way, and a change from that is a reason to set the bottle aside.`,
          `If swallowed: {swallowed}.`,
        ],
      },
      { h: 'The stop-use list' },
      {
        p: `The section people most often mean when they ask about side effects is the stop-use list. It doesn’t predict a reaction; it tells you what to do if something goes wrong while you’re using the drop:`,
      },
      {
        p: `{stopUse}`,
      },
      {
        p: `Put plainly, if your eye hurts, if you notice any change in how you see, if irritation keeps going, or if the problem gets worse or lasts three days, the label wants you to stop and talk to a doctor. Those aren’t listed as effects of the drop; they’re the signs that the drop isn’t the right answer for what you’re feeling.`,
      },
      { h: 'Things that aren’t side effects' },
      {
        p: `Two things people notice after using Quell are explained elsewhere on the label or the site, and neither is listed as a side effect.`,
      },
      {
        list: [
          `The color. The label says: {milky}. Our product page adds: {appearance} A brown tint is expected, but the do-not-use line applies if the color changes from what it normally is.`,
          `A moment of blur. Our guide [is it normal for vision to blur after eye drops?](/guides/is-it-normal-for-vision-to-blur-after-eye-drops) explains that a brief blur while a drop spreads is common and should clear within moments. Blurring that doesn’t clear falls under the stop-use list above.`,
        ],
      },
      { h: 'What the label doesn’t cover' },
      {
        p: `A label can only speak to the situations it was written for. Quell’s panel doesn’t give directions for contact lens wearers, for children, or for using it alongside other eye drops or prescription eye medicines. If any of those apply to you, ask your eye doctor or pharmacist before you start. It also doesn’t list interactions with medicines you take by mouth; a pharmacist can look at your full list.`,
      },
      {
        p: `The label also doesn’t say anything about how common any reaction is, and there are no figures on it about how many people experience anything. If you see claims like that elsewhere, they aren’t from Quell’s panel.`,
      },
      { h: 'Reading the ingredient list for your own sensitivities' },
      {
        p: `If you’ve reacted to a product before, the ingredient list is the place to check. Quell’s actives are {actives}. Its inactive ingredients are {inactives}. If you know you react to any of those, or you aren’t sure, ask a pharmacist or your eye doctor before using it. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'If something feels wrong after a drop' },
      {
        list: [
          `Stop using the drop.`,
          `If the bottle may have touched something, or the solution looks different from usual, don’t use it again.`,
          `If your eye hurts, your vision changed, or irritation keeps going, call your eye doctor. For sudden vision loss or severe pain, get care right away.`,
          `Bring the bottle or a photo of the label so the doctor or pharmacist can see the ingredients.`,
          `Call us at {phone} ({hours}) if you have a question about the product itself.`,
        ],
      },
      {
        p: `Our [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) guide lists the warning signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'Do lubricating eye drops have side effects?',
        a: `Quell’s Drug Facts panel lists none. FDA’s label format puts side effects under “When using this product,” and Quell’s only line there is an instruction not to touch the bottle tip to any surface.`,
      },
      {
        q: 'Where are side effects listed on a Drug Facts label?',
        a: `Under the “When using this product” heading, according to FDA’s rule at 21 CFR 201.66. That section lists effects you may notice and things to avoid while using the product.`,
      },
      {
        q: 'Can lubricating eye drops cause an allergic reaction?',
        a: `Quell’s label cautions people with egg or bird allergies, because it contains emu oil. If you have any allergy and aren’t sure about an ingredient, ask a pharmacist or your eye doctor before using it.`,
      },
      {
        q: 'What should I do if eye drops make my eyes worse?',
        a: `Stop using them. Quell’s label says to stop and ask a doctor for eye pain, vision changes, continued irritation, or a problem that worsens or lasts 72 hours.`,
      },
    ],
  },

  /*
   * Sources for why-do-my-eyes-feel-gritty: no outside facts. General
   * tear-film facts already on the site (oil, water and mucus layers; blinking
   * spreads tears; screens reduce blinking; dry, windy, heated or
   * air-conditioned air speeds evaporation) and Quell's panel via tokens.
   */
  {
    slug: 'why-do-my-eyes-feel-gritty',
    title: 'Why do my eyes feel gritty?',
    description:
      'Gritty, sandy-feeling eyes usually mean the eye’s surface has dried between blinks, or something is in the eye. Common reasons and when to see a doctor.',
    category: 'choosing',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Gritty eyes usually mean the surface of the eye has dried out between blinks, or that something really is in the eye. Dry, heated or air-conditioned air, wind, and long stretches at a screen all thin the tear film, and a dry surface can feel like sand. If it’s dryness, a lubricating drop used as labeled may help. Pain, vision changes, or grit that lasts belong with an eye doctor.`,
      },
      { h: 'What a gritty feeling usually means' },
      {
        p: `Your eye is covered by a thin tear film in three layers: an oily outer layer that slows evaporation, a watery middle, and a mucus layer that helps tears cling to the eye. Each blink spreads a fresh coat. When that coat thins or breaks up before the next blink, the eye’s surface is exposed, and the nerves there report it as roughness. People describe it as sand, grit, an eyelash that isn’t there, or a scratchy feeling.`,
      },
      {
        p: `A gritty feeling is a description, though, not an answer. The same sensation can come from a speck of dust, from dryness, or from something an eye doctor needs to look at. The pattern of when it happens is the most useful clue you have.`,
      },
      { h: 'Gritty eyes in the morning' },
      {
        p: `Waking with sandy-feeling eyes is common. Through the night you don’t blink, and if air is moving across your face, from a ceiling fan, a heating register or an air conditioner, the eye’s surface can dry more than usual. Things to try:`,
      },
      {
        list: [
          `Turn the bedroom fan down or point it away from the bed.`,
          `Run a humidifier in the bedroom during heating season.`,
          `Close or redirect a vent that blows toward your pillow.`,
          `When you wake, blink slowly several times before opening your eyes wide.`,
        ],
      },
      {
        p: `If your eyes feel gritty every morning regardless of the room, mention it to an eye doctor. [Dry eyes in the morning when you wake up](/guides/dry-eyes-in-the-morning-when-you-wake-up) has more.`,
      },
      { h: 'Gritty eyes at night' },
      {
        p: `If the grit builds through the day and peaks in the evening, the day itself is usually the reason. Screens reduce blinking, so hours of focus on a monitor or phone let the tear film thin. Office air conditioning or winter heat speeds evaporation, and the effect adds up by evening. A few habits help:`,
      },
      {
        list: [
          `Every 20 minutes, look away from the screen and blink slowly and fully.`,
          `Lower the screen slightly below eye level, so your lids cover more of the eye.`,
          `Keep vents and desk fans off your face.`,
          `Put the phone down for a few minutes before bed rather than scrolling in a dark room.`,
        ],
      },
      { h: 'Gritty after time outdoors' },
      {
        p: `Wind, dust, pollen and smoke can bring both real grit and dryness. After gardening, a windy walk, a hike or a day at the beach, the cause could be either one. If you think something is actually in your eye, don’t rub it. Blink, and rinse with clean water or a sterile eyewash. If the feeling stays after rinsing, or the eye hurts, have it checked, since a speck can scratch the surface. [Eye drops vs. eye wash](/guides/eye-drops-vs-eye-wash) explains which product does which job.`,
      },
      { h: 'Gritty eyes feeling: what to note before you call' },
      {
        p: `If you see a doctor, specifics help. Before the visit, notice:`,
      },
      {
        list: [
          `Whether it’s one eye or both.`,
          `When it’s worst: on waking, by evening, or after a particular activity.`,
          `Whether your vision changes, or blurs and clears when you blink.`,
          `Whether light bothers you, or there’s discharge or pain.`,
          `What helps, and what makes it worse.`,
        ],
      },
      {
        p: `Our [self-check](/self-check) can help you organize those notes. It’s not a diagnosis.`,
      },
      { h: 'Where a lubricating drop fits' },
      {
        p: `When grit comes from dryness, a lubricating drop adds to the tear film. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label states the Uses: {uses}. The directions: {directions}. Read the caution too: {warnings}. The panel is on the [Drug Facts page](/drug-facts).`,
      },
      {
        p: `If you wear contact lenses, the label doesn’t give directions for lenses, so ask your eye doctor or pharmacist first. The same applies if you already use other eye drops.`,
      },
      { h: 'Gritty eyes meaning: when it’s a doctor’s question' },
      {
        p: `A drop is for everyday dryness. A gritty feeling that comes with any of the following needs an eye doctor rather than a store shelf:`,
      },
      {
        list: [
          `Pain, rather than discomfort.`,
          `A change in vision that doesn’t clear when you blink.`,
          `Sensitivity to light.`,
          `Grit in only one eye that lasts after rinsing.`,
          `Something that hit or splashed the eye.`,
        ],
      },
      {
        p: `Quell’s label sets the same line: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists more.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel gritty in the morning?',
        a: `Your eyes don’t blink while you sleep, and moving air from a fan, heater or air conditioner can dry their surface more than usual. If it happens every morning in any room, mention it to an eye doctor.`,
      },
      {
        q: 'Why do my eyes feel gritty at night?',
        a: `Hours of screen time slow blinking, and indoor heating or air conditioning speeds tear evaporation, so dryness tends to build through the day. Breaks from screens and vents aimed away from your face help.`,
      },
      {
        q: 'What does it mean when your eyes feel gritty?',
        a: `Usually that the eye’s surface is drying between blinks, or that something is in the eye. It’s a description rather than an answer, so pain, vision changes or grit that lasts after rinsing should be checked by an eye doctor.`,
      },
      {
        q: 'Should I rub my eyes if they feel gritty?',
        a: `No. If something might be in your eye, rubbing can drag it across the surface. Blink and rinse with clean water or a sterile eyewash instead, and see a doctor if the feeling stays.`,
      },
    ],
  },

  {
    slug: 'christmas-gifts-for-a-hairstylist',
    title: 'Christmas gifts for a hairstylist',
    description:
      'Gift ideas for a hairstylist who’s on their feet, under bright lights and in blow-dryer air for hours: comfort gear, eye-friendly picks and stocking stuffers.',
    category: 'seasonal',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Good Christmas gifts for a hairstylist ease the parts of the job that wear on the body: hours standing, hands in water and product, and a face that spends the day in blow-dryer air and close focus under bright lights. Comfort gear for feet and hands, a break they don’t have to book, and, for a stylist whose eyes run dry, a bottle of lubricating drops all fit.`,
      },
      { h: 'Think about their workday first' },
      {
        p: `A stylist’s day is a long run of standing appointments, often back to back through the holidays, when everyone wants a fresh cut before a party. They lean into close work at the chair, hold a dryer at shoulder height for minutes at a time, and work under lighting set bright enough to judge color. Gifts that help with any of that get used. Our guide to [dry eyes for hairstylists](/guides/dry-eyes-for-hairstylists) explains why the salon floor is hard on eyes, if that’s the angle you’re shopping for.`,
      },
      { h: 'Gifts for long hours standing' },
      {
        list: [
          `Compression socks in a few colors, for twelve-hour Saturdays.`,
          `Cushioned insoles or a gift card toward work shoes they choose themselves.`,
          `An anti-fatigue mat for their station, if the salon allows it.`,
          `A gift certificate for a massage or a pedicure, so someone else does the standing for once.`,
        ],
      },
      { h: 'Gifts for hard-working hands' },
      {
        p: `Shampooing, color and constant hand washing dry out skin. A rich, unscented hand cream for nights and a pair of cotton gloves to sleep in is a small, thoughtful pairing. A soft towel set for home, or a good lotion they wouldn’t buy for themselves, works too. Skip fragrances unless you know what they like, since they work around scents from open to close.`,
      },
      { h: 'Eye-friendly gifts for the salon floor' },
      {
        p: `Stylists spend hours aiming a dryer near their own face, and concentrating on a precise line slows blinking. The air in a salon can also run dry in winter when the heat is on. A few gifts address that without being clinical:`,
      },
      {
        list: [
          `A small desktop humidifier for their station or break room, if the salon owner agrees.`,
          `A pair of clear, comfortable protective glasses for mixing color and rinsing, if they don’t already have a favorite.`,
          `A soft microfiber cloth set for anyone who wears glasses at the chair, since product mist settles on lenses.`,
          `A bottle of Quell lubricating eye drops for their station drawer or bag.`,
        ],
      },
      {
        p: `If you add Quell, read the label first. Its Uses are: {uses}. It also carries this caution: {warnings}. If you don’t know whether they have an egg or bird allergy, ask before you buy. And if they wear contact lenses or already use prescription eye drops, a different gift is a better choice, because the label doesn’t cover those situations.`,
      },
      { h: 'Stocking stuffers for the station' },
      {
        list: [
          `A clip-on reusable water bottle loop for their station, plus a tumbler with a lid that won’t catch hair.`,
          `A lip balm and a travel hand cream for the apron pocket.`,
          `Hair clips or sectioning clips in a fun color, which never seem to last.`,
          `A small notebook for appointment notes and color formulas, if they still like paper.`,
          `A gift card for the coffee shop nearest the salon.`,
        ],
      },
      { h: 'Gifts for the salon owner or a whole team' },
      {
        p: `If you’re a regular client buying for a salon, think shared. A holiday lunch delivered on a busy Saturday, a box of good coffee for the break room, or a plant for the front desk all show up for everyone. A thank-you card that mentions the haircut you loved goes a long way with any of them.`,
      },
      { h: 'Ordering Quell as a gift' },
      {
        p: `You can order Quell on our [home page](/#buy) as a guest and ship it to any US address, including the salon. Shipping is {shipping}, or free when the order reaches {freeBottles} or more bottles. There are no promo codes and no subscription. We don’t promise a delivery date, so order early in December. If the gift isn’t needed, unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. [Sending Quell as a gift](/guides/sending-quell-as-a-gift) covers the details.`,
      },
      { h: 'What a gift doesn’t replace' },
      {
        p: `A humidifier and a bottle of drops can make long shifts more comfortable, but they’re not a substitute for an eye exam. If your stylist mentions eye pain, vision that changes, or irritation that keeps coming back, the label’s advice is: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What do you get a hairstylist for Christmas?',
        a: `Gifts that help with long days standing and working with their hands are a safe bet: compression socks, a massage, good hand cream, or a gift card. For a stylist whose eyes get dry from blow-dryer air, a small humidifier or lubricating drops fit too.`,
      },
      {
        q: 'Is it appropriate to give your hairstylist a Christmas gift?',
        a: `Yes. A holiday card, tip or small gift for a stylist you see regularly is a kind way to say thanks. A small practical gift, like hand cream or a coffee gift card, is easy for anyone to accept.`,
      },
      {
        q: 'Can I ship eye drops to my hairstylist’s salon?',
        a: `Yes. Quell ships to any US address, including a business, with tracking by email. Check the label’s egg or bird allergy caution first, and skip it if they wear contact lenses or use prescription eye drops.`,
      },
    ],
  },

  {
    slug: 'christmas-gifts-for-a-hiker',
    title: 'Christmas gifts for a hiker',
    description:
      'Gift ideas for a hiker that make wind, sun, dust and cold easier on the eyes and the rest of them: eyewear, layers, small trail gear and stocking stuffers.',
    category: 'seasonal',
    addedOn: '2026-11-18',
    body: [
      {
        p: `The most useful Christmas gifts for a hiker are things they’ll carry on every trip: good sunglasses, a warm hat and neck gaiter, a headlamp, a small first aid kit, and gear that keeps them comfortable in wind and sun. Hikers’ eyes take a lot of wind, glare and dust, so eye-friendly picks, including lubricating drops for a pack pocket, make thoughtful additions.`,
      },
      { h: 'Why hikers’ eyes need some care' },
      {
        p: `Trails put eyes in moving air for hours. Ridgelines and open meadows bring wind, desert trails bring dust, summits and snowfields add glare, and winter hikes add cold, dry air. Wind and dry air speed evaporation from the tear film, and squinting into the sun makes blinks short and incomplete. Our guide to [dry eyes on a winter hike](/guides/dry-eyes-on-a-winter-hike) goes deeper into the cold-weather side.`,
      },
      { h: 'Eyewear gifts' },
      {
        list: [
          `Wraparound sunglasses with side coverage, which block wind as well as light. If they’re picky about fit, a gift card to an outdoor store lets them choose.`,
          `A hard case and a leash, so the sunglasses survive the bottom of a pack and don’t fall off at a scramble.`,
          `A microfiber lens cloth in a small pouch, for dust and sunscreen smudges.`,
          `Goggles for a winter hiker who heads above treeline in wind.`,
        ],
      },
      { h: 'Layers for wind and sun' },
      {
        list: [
          `A neck gaiter they can pull up over the nose on a windy ridge.`,
          `A brimmed sun hat for summer, or a warm beanie that fits under a hood for winter.`,
          `A lightweight wind shell, which does a lot on exposed trails for very little weight.`,
          `Liner gloves that work with a phone screen, for checking maps without freezing fingers.`,
        ],
      },
      { h: 'Small trail gear they’ll actually carry' },
      {
        list: [
          `A headlamp for early starts and late finishes, with spare batteries or a charging cable.`,
          `A compact first aid kit, with a small sterile eyewash added for dust or grit. [Eye drops vs. eye wash](/guides/eye-drops-vs-eye-wash) explains why a wash and a drop do different jobs.`,
          `A hip belt pocket or chest pouch, so sunglasses, lip balm and small items stay reachable without taking off the pack.`,
          `A small dry bag for a phone, a paper map and spare layers.`,
          `Trail maps or a guidebook for a range they’ve mentioned wanting to explore.`,
        ],
      },
      { h: 'Eye drops as a stocking stuffer' },
      {
        p: `For a hiker who already mentions dry or scratchy eyes after a long day out, a bottle of Quell fits easily in a hip pocket. Its label lists the Uses as: {uses}. The directions are: {directions}. It also has a caution worth checking with the recipient first: {warnings}. Skip this one if they wear contact lenses or use other eye drops, since the label doesn’t cover those situations.`,
      },
      {
        p: `Storage matters on a trail. The label says: {storage}. A pack left in a hot car at the trailhead, or a summit in January, can push the bottle outside that range, so suggest they keep it in an inside pocket close to the body.`,
      },
      { h: 'Gift ideas by kind of hiker' },
      {
        list: [
          `Desert hiker: wraparound sunglasses, a sun hoodie, a neck gaiter for dust.`,
          `Winter hiker: goggles, a beanie, liner gloves, and drops kept in an inside pocket.`,
          `Peak bagger: a headlamp, a wind shell, and a guidebook for the next range.`,
          `Weekend family hiker: a first aid kit with eyewash, a day pack and a trail map of a nearby park.`,
          `Hiker who also camps: a [winter camping](/guides/dry-eyes-on-a-winter-camping-trip) read and a small tent lantern for the evenings.`,
        ],
      },
      { h: 'Ordering Quell for a hiker' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, with guest checkout and tracking by email. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free, so one can go in their pack, one in the car and one at home. No delivery date is promised, so order early if it’s meant for Christmas morning. Unopened bottles can be refunded within {returnDays} days of delivery. [Order from the home page](/#buy).`,
      },
      { h: 'When eyes need more than gear' },
      {
        p: `Eye protection and drops make long days outdoors more comfortable, but if a hiker comes home with eye pain, a scratchy feeling that lasts after rinsing, or a change in vision, that needs an eye doctor. The label puts it this way: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs.`,
      },
    ],
    faq: [
      {
        q: 'What is a good Christmas gift for a hiker?',
        a: `Practical gear they’ll carry every trip: wraparound sunglasses, a headlamp, a neck gaiter, a wind shell, or a compact first aid kit. A gift card to an outdoor store works well for anyone picky about fit.`,
      },
      {
        q: 'What stocking stuffers do hikers like?',
        a: `Small things that fit in a hip pocket: lip balm, a lens cloth, a headlamp, a trail map, or a small bottle of lubricating eye drops for someone whose eyes get dry outside. Check the drop label’s allergy caution first.`,
      },
      {
        q: 'Should hikers carry eye drops?',
        a: `A hiker whose eyes get dry in wind or sun may want a lubricating drop in a pocket. Keep it in an inside pocket, since Quell’s label says: {storage}. See a doctor for eye pain or vision changes.`,
      },
    ],
  },

  {
    slug: 'christmas-gifts-for-a-mail-carrier',
    title: 'Christmas gifts for a mail carrier',
    description:
      'Thoughtful, modest Christmas gifts for the person who brings your mail in every kind of weather: warm, practical picks, a note, and small eye-friendly extras.',
    category: 'seasonal',
    addedOn: '2026-11-18',
    body: [
      {
        p: `The most welcome Christmas gifts for a mail carrier are small and practical: hand warmers, wool socks, a hot drink, lip balm, or a heartfelt card. Carriers spend the season walking and driving in wind and cold, ducking in and out of a heated vehicle, often with dry, tired eyes. Keep the gift modest, since some employers limit what workers may accept, and a warm thank-you note always counts.`,
      },
      { h: 'Start with the note' },
      {
        p: `Carriers see the busiest weeks of the year in December, and a handwritten card taped to the mailbox or left with the outgoing mail is the one gift nobody turns down. Mention something specific: how they handled packages during a snowstorm, or how they keep an eye on your street.`,
      },
      { h: 'Small gifts for cold days on the route' },
      {
        list: [
          `Disposable hand and toe warmers, a box of them.`,
          `Wool or merino socks; a carrier can never have too many.`,
          `Lip balm and a travel-size unscented hand cream for chapped skin.`,
          `A thermos of coffee or hot chocolate waiting on the porch on a cold morning.`,
          `Individually wrapped snacks they can eat between stops.`,
        ],
      },
      { h: 'Why carriers’ eyes take a beating' },
      {
        p: `A route mixes nearly every condition that dries the eyes: cold wind on walking loops, glare off snow, a truck heater that runs between stops, and in summer, sun and dust. Each trip from heated cab to cold sidewalk and back pulls moisture from the tear film. Our guide to [dry eyes for mail carriers](/guides/dry-eyes-for-mail-carriers) explains the route in detail and covers when to use drops during a shift.`,
      },
      { h: 'Eye-friendly gifts for someone you know well' },
      {
        p: `If your carrier is a neighbor or friend and has mentioned dry eyes, a few gifts address that directly:`,
      },
      {
        list: [
          `A neck gaiter or balaclava they can pull up on windy blocks.`,
          `A soft lens-cleaning cloth for anyone who wears glasses or sunglasses on the route.`,
          `A small insulated pouch for keeping a drop bottle and lip balm from freezing in the truck.`,
          `A bottle of Quell lubricating eye drops.`,
        ],
      },
      {
        p: `Before giving Quell, read its caution: {warnings}. Ask about egg or bird allergies if you don’t know. The label doesn’t give directions for contact lenses or for use with other eye drops, so it’s not the right gift for someone in either situation. Its Uses read: {uses}.`,
      },
      { h: 'What to skip' },
      {
        list: [
          `Cash and anything that works like cash, since employers often have rules about them.`,
          `Large or expensive items that could put your carrier in an awkward spot.`,
          `Homemade food if you don’t know about allergies.`,
          `Anything that has to be refrigerated or that they’d need to carry the rest of the day.`,
        ],
      },
      {
        p: `If you aren’t sure what your carrier can accept, a card and a hot drink are always safe.`,
      },
      { h: 'Gifts for carriers you know personally' },
      {
        p: `If a family member or friend works as a carrier, you can go bigger. Waterproof boots of their choosing, a heated vest, quality wool base layers, a good pair of wraparound sunglasses for summer routes, or a massage gift certificate for the end of the season all fit. So do a few bottles of drops for the truck, the locker and home. [Gifts for someone who works outdoors in winter](/guides/gifts-for-someone-who-works-outdoors-in-winter) has more ideas.`,
      },
      { h: 'A gift from the whole street' },
      {
        p: `Neighbors sometimes pool together for a carrier who has covered the same route for years. A shared card signed by every household, with a few warm, practical items in one bag, is easier to accept and carry than a dozen separate gifts left in a dozen mailboxes. Hand it over in person if you can, or hang it by the door where the carrier will see it without leaving the route, and skip anything that needs a reply or a return trip. One more practical point: a gift left in a mailbox can freeze or get crushed by the day’s deliveries.`,
      },
      { h: 'Ordering Quell as a gift' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, and you can check out as a guest on the [home page](/#buy). Shipping is {shipping}, or free on {freeBottles} or more bottles. No delivery date is promised, and December is the busiest month for every package, so order early. Unopened bottles can be refunded within {returnDays} days of delivery without returning them.`,
      },
      { h: 'Where drops stop' },
      {
        p: `Drops and warm gear help with the routine wear of a winter route. Eye pain, a change in vision, or irritation that won’t go away is a matter for an eye doctor. Quell’s label states: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What is a good Christmas gift for a mail carrier?',
        a: `Something small and practical: hand warmers, wool socks, lip balm, a hot drink or wrapped snacks, along with a handwritten thank-you card. Keep it modest, since some employers limit what workers can accept.`,
      },
      {
        q: 'Can I give my mail carrier a gift card?',
        a: `Some employers count gift cards as cash and restrict them, so a card with a heartfelt note, a hot drink or a small practical item is the safer choice. If you’re unsure, ask your carrier.`,
      },
      {
        q: 'Are eye drops a good gift for a mail carrier?',
        a: `For a carrier you know who has mentioned dry eyes, yes. Check Quell’s egg or bird allergy caution first, and choose something else if they wear contact lenses or use other eye drops.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-in-a-hot-tub-in-winter',
    title: 'Dry eyes in a hot tub in winter',
    description:
      'A winter hot tub keeps your body warm while your face sits in cold, dry, often windy air. Why eyes dry out there and how to soak more comfortably.',
    category: 'seasonal',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Eyes often feel dry in a hot tub in winter because your face is sitting in cold, dry air while the rest of you soaks. Steam rises and drifts away on any breeze, and winter air carries little moisture, so the tear film evaporates quickly. Keep your face out of the wind, wear a warm hat, keep splashes out of your eyes, and dry off and get inside before your eyes start to sting.`,
      },
      { h: 'Why a winter soak can dry your eyes' },
      {
        p: `A hot tub on a cold night is two climates at once. Below the waterline it’s warm and wet. Above it, your face is in winter air, which holds very little water because cold air can’t hold much. Your eyes are covered by a thin tear film, an oily outer layer over a watery middle and a mucus layer next to the eye, and that film loses water whenever the air in front of it is dry or moving.`,
      },
      {
        p: `The steam you see doesn’t change that much. It forms when warm, moist air off the water meets the cold, and on a still night it can hang around your face. On a breezy night it blows away the moment it rises, and the air reaching your eyes is the same dry winter air as everywhere else in the yard.`,
      },
      { h: 'Wind, the biggest factor' },
      {
        p: `Moving air speeds evaporation from the eye’s surface, and a hot tub on an open deck, a rooftop or a mountain lodge patio can be windy. The warmth of the water also tempts people to stay in longer than they would stand outside in the same wind. A few changes help:`,
      },
      {
        list: [
          `Sit with your back to the wind, so your face is sheltered.`,
          `Use the tub’s cover or a privacy screen as a windbreak on the upwind side, if your setup allows it safely.`,
          `On a very windy night, keep the soak short.`,
          `Keep blinking fully; people tend to stare at the stars or the snow and blink less.`,
        ],
      },
      { h: 'Steam, splashes and stinging' },
      {
        p: `Hot tub water isn’t meant to go in your eyes. If water splashes in and they sting, step out, rinse with clean tap water, and blink. Don’t rub. If stinging or discomfort continues after rinsing, or your vision changes, see a doctor. Keeping your head above water, not dunking, and keeping jets from spraying toward your face avoids most of it.`,
      },
      {
        p: `Keep the water itself well maintained according to the tub maker’s instructions. If your eyes sting every time you use a particular tub, that’s worth raising with the owner or the facility.`,
      },
      { h: 'Coming in from the cold' },
      {
        p: `Getting out of a hot tub in winter means a dash through freezing air into a heated house, and indoor heating is drying in its own way. Heated air has low relative humidity, so your eyes go from a cold, dry deck to a warm, dry living room. Some steps for the transition:`,
      },
      {
        list: [
          `Have a robe, towel and sandals ready by the tub so the walk inside is quick.`,
          `Dry your face with a clean towel, then blink slowly a few times once inside.`,
          `Sit away from heating vents and the fireplace for a while.`,
          `Run a humidifier in the bedroom on hot tub nights. [Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more on indoor air.`,
        ],
      },
      { h: 'Hats, glasses and other comfort' },
      {
        p: `A knit hat keeps your head warm without changing much for your eyes, but a hat with a short brim can block some breeze and falling snow. If you wear glasses, they’ll fog in the steam; taking them off is fine, just keep them somewhere you won’t step on them. Sunglasses help on a bright winter afternoon, especially with snow around the tub, which reflects a lot of light.`,
      },
      { h: 'Ski lodges, cabins and resort tubs' },
      {
        p: `Many winter trips end in a hot tub: a ski lodge, a mountain cabin, a resort spa. Mountain air at elevation is often drier and windier than at home, and a day on the slopes may have already dried your eyes before you get in. After skiing, rest your eyes indoors for a bit before the evening soak. [Dry eyes in a sauna](/guides/dry-eyes-in-a-sauna) covers the other heat stop many resorts offer.`,
      },
      { h: 'Using a lubricating drop around a soak' },
      {
        p: `Quell’s label lists its Uses as: {uses}. The directions are: {directions}. The label doesn’t say anything about hot tubs specifically, so there’s no special timing to follow beyond the directions. If you use one, do it with clean, dry hands indoors, not with wet fingers in the tub, and follow the label: {tip}.`,
      },
      {
        p: `Don’t leave the bottle by the tub. The label says: {storage}. A bottle left on a deck rail on a winter night will drop below that range. Keep it inside. If you wear contact lenses, the label doesn’t cover lens use, so ask your eye doctor or pharmacist. Read the whole panel on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Brief dryness after a cold-weather soak usually eases indoors. Eye pain, blurry vision that doesn’t clear, light sensitivity, or stinging that lasts after rinsing should be checked. The label’s guidance: {stopUse} See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for more.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry in the hot tub?',
        a: `In winter your face sits in cold, dry air above the warm water, and any breeze carries steam away and speeds evaporation from your eyes. Sitting with your back to the wind and keeping soaks shorter on windy nights helps.`,
      },
      {
        q: 'What should I do if hot tub water gets in my eyes?',
        a: `Get out, rinse your eyes with clean tap water and blink, without rubbing. If stinging or discomfort continues after rinsing, or your vision changes, see a doctor.`,
      },
      {
        q: 'Can I use eye drops after a hot tub?',
        a: `Quell’s label doesn’t mention hot tubs, so follow its directions as usual: dry your hands, use the drop indoors, and don’t touch the tip to any surface. If you wear contact lenses, ask your eye doctor first.`,
      },
      {
        q: 'Does steam from a hot tub help dry eyes?',
        a: `Not much in winter. Steam forms as warm, moist air meets the cold, but a breeze carries it off quickly, and the air reaching your eyes is mostly dry winter air.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-for-nail-technicians',
    title: 'Dry eyes for nail technicians',
    description:
      'Nail techs spend hours focused on tiny details under bright lamps and table fans. Why the work dries eyes, and habits that help through a full book.',
    category: 'using',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Nail technicians get dry eyes because the job combines long stretches of close focus, which slows blinking, with air moving across the table from fans and ventilation, plus dust from filing and bright task lighting. Short breaks to look away and blink fully, directing airflow away from your face, wearing protective glasses, and a lubricating drop used as its label directs can make a full day of appointments easier.`,
      },
      { h: 'Why nail work is hard on the eyes' },
      {
        p: `Detail work at arm’s length asks your eyes to hold steady focus for long periods. When people concentrate like that, they blink less often and less completely, and each blink is what spreads fresh tears across the eye. A single nail service can mean an hour or more of near-constant focus, repeated through the day, so the tear film gets less help than it needs.`,
      },
      {
        p: `The rest of the station adds to it. Tables often have fans or extraction vents to move dust and odors, salons run heating and air conditioning, and you’re seated close to your work, so whatever comes off the nail comes toward your face.`,
      },
      { h: 'Fans and ventilation at the table' },
      {
        p: `Good ventilation is part of a healthy salon, so the goal isn’t to turn it off. It’s to keep the airflow from blowing across your eyes. Ideas to try:`,
      },
      {
        list: [
          `Position a desk fan so it blows across the table at hand level, not at face level.`,
          `Make sure a ceiling vent above your station isn’t aimed straight down at you; ask the owner if it can be adjusted.`,
          `If your table has a downdraft or extraction vent, keep it on and keep your face far enough back that you aren’t leaning into the air stream.`,
          `In winter, check that a space heater isn’t pointed at your face.`,
        ],
      },
      { h: 'Filing dust and protective glasses' },
      {
        p: `Filing and buffing create fine dust, and shaping acrylic or gel creates more. Even small amounts can make your eyes feel gritty by the end of the day, and you’re close to the source. Clear protective glasses with side coverage block dust and moving air at the same time. They also stop a tiny chip of product from reaching your eye. Wash your hands before touching your face or eyes, since product residue and dust collect on your fingers.`,
      },
      { h: 'Bright lamps and close focus' },
      {
        p: `Task lamps and curing lamps make detail visible, and you look at a bright, small area for long stretches. That intensity of focus is what reduces blinking. Some practical habits:`,
      },
      {
        list: [
          `Between steps, while a coat dries or sets under the lamp, look up and across the room for a few seconds.`,
          `Blink slowly and fully a few times between clients.`,
          `Adjust your chair height so you aren’t opening your eyes wider to see the work.`,
          `Don’t look directly into a curing lamp; follow the lamp maker’s instructions.`,
        ],
      },
      { h: 'Using a drop on a booked-up day' },
      {
        p: `A lubricating drop can fit between appointments. Quell’s label gives the Uses: {uses}. The directions are: {directions}. Spread across a workday, that might mean before your first client, around lunch and after your last.`,
      },
      {
        p: `Hands matter here. Wash and dry them thoroughly before using the drop, especially after working with products, because residue on your fingers shouldn’t go near your eyes. The label adds: {tip}. Keep the bottle in a drawer or bag away from your workstation products, and store it as the label says: {storage}.`,
      },
      {
        p: `Before using it, read the label’s caution: {warnings}. If you wear contact lenses or use other eye drops, the label doesn’t cover those situations, so ask your eye doctor or pharmacist first.`,
      },
      { h: 'After work' },
      {
        p: `A day of close focus doesn’t end at the salon if you go home to a phone or laptop. Give your eyes a real break in the evening: look out a window, take a walk, or close your eyes for a few minutes. Our guide to [dry eyes for hairstylists](/guides/dry-eyes-for-hairstylists) covers similar salon conditions from the chair side, and [how blinking spreads tears](/guides/how-blinking-spreads-tears) explains why full blinks matter.`,
      },
      { h: 'If product gets in your eye' },
      {
        p: `Nail products aren’t meant for eyes. If something splashes or flicks into your eye, don’t use a lubricating drop to rinse it out. Follow the product’s own first aid instructions, rinse with plenty of clean water, and get medical help if pain, stinging or blurred vision continues. [Eye drops vs. eye wash](/guides/eye-drops-vs-eye-wash) explains why a drop isn’t meant for flushing.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dryness from a busy workday often eases with breaks and better airflow. Eye pain, changes in vision, or irritation that keeps returning should be checked. The label says: {stopUse} The [self-check](/self-check) can help you describe your symptoms before an appointment; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry doing nails?',
        a: `Close, detailed focus slows blinking, and fans, ventilation and filing dust all move air or particles toward your face. Look up between steps, keep airflow off your eyes and wear protective glasses.`,
      },
      {
        q: 'Should nail techs wear safety glasses?',
        a: `Clear protective glasses with side coverage block filing dust and moving air from table fans, and they keep stray chips of product away from your eyes.`,
      },
      {
        q: 'Can a nail tech use eye drops between clients?',
        a: `Yes, if you follow the label’s directions. Wash and dry your hands thoroughly first, since product residue shouldn’t go near your eyes, and don’t touch the bottle tip to any surface.`,
      },
      {
        q: 'What should I do if acrylic dust gets in my eye?',
        a: `Don’t rub. Blink and rinse with plenty of clean water. If the eye still hurts, feels scratched, or your vision changes after rinsing, see a doctor.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-for-graduate-students',
    title: 'Dry eyes for graduate students',
    description:
      'Thesis drafts, journal PDFs, lab work and long library hours keep grad students’ eyes on screens. Why that dries eyes, and habits that help.',
    category: 'using',
    addedOn: '2026-11-18',
    body: [
      {
        p: `Graduate students get dry eyes mainly from hours of screen work: reading papers, writing a thesis, coding and analyzing data, often in heated or air-conditioned buildings. Concentrating on a screen slows blinking, and dry indoor air speeds evaporation. Regular breaks, full blinks, a better desk setup and a lubricating drop used as its label directs can help you get through long writing days.`,
      },
      { h: 'Why grad school is hard on the eyes' },
      {
        p: `Grad school stacks up screen time. A typical day might start with journal articles, move to a lab or data analysis, include teaching or grading, and end with writing. Each of those keeps your eyes focused on a near target. When you concentrate, you blink less often and less completely, and the tear film, which needs blinks to spread, starts to thin. By evening, eyes can feel gritty, tired or dry.`,
      },
      { h: 'Thesis and dissertation writing' },
      {
        p: `Writing season can mean eight or ten hours a day with a draft open. A few habits help:`,
      },
      {
        list: [
          `Use a timer: every 20 minutes, look across the room or out a window for about 20 seconds and blink slowly.`,
          `Write in blocks. Take a short walk between sections or after each hour.`,
          `Raise your text size so you aren’t leaning in or squinting at small type.`,
          `Set your monitor a little below eye level, so your eyes aren’t opened as wide.`,
          `Print a chapter for a final read-through, if your program allows, to give your screen eyes a break.`,
        ],
      },
      { h: 'Reading papers and PDFs' },
      {
        p: `Literature reviews mean dense PDFs, often small fonts in two columns. Zoom in, use a reading mode with higher contrast, and read longer papers in sessions instead of all at once. If you read on a tablet in bed, the room is often dark and the screen bright; turn on a lamp and lower the screen brightness to match.`,
      },
      { h: 'Labs, libraries and offices' },
      {
        p: `University buildings tend to run strong heating in winter and air conditioning in summer, and both dry the air. Labs often have fume hoods and ventilation that keep air moving. Library carrels and shared grad offices sometimes sit right under a vent. If yours does:`,
      },
      {
        list: [
          `Move to a different seat or angle your desk so the airflow passes behind you.`,
          `Keep a small desk humidifier in a private office, if the building allows it.`,
          `In the lab, wear the eye protection required for your work, and wash your hands before touching your eyes.`,
          `Take breaks outside the building, not just to a different screen.`,
        ],
      },
      {
        p: `Our guide to [dry eyes for lab workers](/guides/dry-eyes-for-lab-workers) has more on lab conditions.`,
      },
      { h: 'Late nights and deadlines' },
      {
        p: `Before a deadline, it’s easy to work late and sleep less. Tired eyes feel drier, and staring at a screen in a dark room late at night combines the worst conditions: less blinking, a bright screen and often a heater running. When you can, stop screen work a little before bed and give your eyes some rest. [Dry eyes while studying](/guides/dry-eyes-while-studying) covers exam-season habits that apply to grad school too.`,
      },
      { h: 'Conferences and travel' },
      {
        p: `Conference travel adds dry airplane cabins and long days in convention centers. Pack eye drops in your carry-on liquids bag; [traveling with eye drops](/guides/traveling-with-eye-drops) explains how the TSA’s liquids rule applies. Turn the overhead air nozzle away from your face, and rest your eyes between sessions.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a preservative-free lubricating eye drop, designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label lists the Uses as: {uses}. Directions: {directions}. Spread across the day, that fits a morning, midafternoon and evening routine.`,
      },
      {
        p: `The label also says: {tip}. And it has this caution: {warnings}. If you wear contact lenses or use other eye drops, ask your eye doctor or pharmacist, since the label doesn’t cover those situations. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering on a student budget' },
      {
        p: `You can order Quell as a guest from the [home page](/#buy), shipped to any US address, including a campus mailbox or apartment. Shipping is {shipping}, or free on {freeBottles} or more bottles, and there’s no subscription. No delivery date is promised, so order before you’re out, especially during a deadline crunch.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Many universities have student health services, which can be a good first stop for a referral. If your eyes hurt, your vision changes, or dryness keeps coming back despite breaks and better habits, see an eye doctor. The label says: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes hurt after a long day of thesis writing?',
        a: `Long stretches of focus on a screen slow your blinking, and dry indoor air speeds tear evaporation, so eyes can feel tired and dry by evening. Regular breaks and full blinks help, but see an eye doctor if your eyes actually hurt or it keeps happening.`,
      },
      {
        q: 'How can grad students reduce eye strain from reading PDFs?',
        a: `Zoom in, use a high-contrast reading mode, raise the room’s lighting to match the screen, and read in shorter sessions. Every 20 minutes, look across the room for a few seconds and blink fully.`,
      },
      {
        q: 'Can I ship eye drops to my campus mailbox?',
        a: `Quell ships to any US address, including campus mailboxes and student apartments. Check that your campus mail center accepts packages addressed to you, and order before you run out.`,
      },
    ],
  },
]
