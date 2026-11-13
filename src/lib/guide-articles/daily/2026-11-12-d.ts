import type { Guide } from '@/lib/guide-types'
export const DAILY_20261112_D: Guide[] = [
  /*
   * dry-eye-relief-beverly-hills. Sources fetched 2026-11-12:
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USC00049152.csv
   *   (station "U C L A, CA US": Feb precip 4.73 in, Jul 0.03, Aug 0.01,
   *   Aug normal high 78.8, Jan normal high 67.7, Dec normal low 51.4)
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USC00049152.csv
   *   (annual precip 17.73 in; Jun-Aug total 0.15 in; Dec-Feb total 11.80 in)
   * - https://www.beverlyhills.org/Redflagwarning (Red Flag Day criteria: humidity
   *   15 percent or less, sustained wind 25 mph or more with 35 mph gusts, burn
   *   index 151 or higher; no parking on marked streets, mostly north of Sunset
   *   Blvd or Doheny Rd, incl. Benedict Canyon and Coldwater Canyon; cited/towed;
   *   Nixle alerts)
   * Dropped: population and elevation (no official page fetched today);
   * downtown LA and LAX numbers (writer B's guide uses them).
   */
  {
    slug: 'dry-eye-relief-beverly-hills',
    title: 'Dry eye relief in Beverly Hills, California',
    description:
      'Rainless summers, dry canyon winds and air-conditioned days add up in Beverly Hills. What the weather records show, and how lubricating drops fit in.',
    category: 'local',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Beverly Hills gets almost no rain from June through August: NOAA’s 1991–2020 normals for the UCLA weather station, just west of the city, add up to 0.15 inches for those three months combined. Dry air and the canyon winds of fall pull moisture off the eye. Quell is a lubricating drop for that kind of dryness, used as the label directs: {directions}.`,
      },
      { h: 'Eye drops in Beverly Hills: what the climate is doing' },
      {
        p: `Most Beverly Hills residents think of the weather as mild, and the numbers agree on temperature. NOAA’s normals for the UCLA station put the January high at 67.7°F and the August high at 78.8°F, a swing of barely eleven degrees across the year. What changes far more is moisture. The station’s normal yearly precipitation is 17.73 inches, and almost all of it arrives in a short winter window: December through February accounts for 11.80 inches, with February the wettest month at 4.73 inches.`,
      },
      {
        p: `Then the tap shuts off. July’s normal is 0.03 inches and August’s is 0.01. For four or five months of the year, the hedges along Beverly Drive and the gardens north of Sunset stay green because of irrigation, not weather. That long stretch without rain, plus the air conditioning that runs through it, is a big part of why eyes can feel scratchy here even though the city rarely sees real heat.`,
      },
      { h: 'Santa Ana winds and Red Flag Days' },
      {
        p: `Fall and early winter bring the other Beverly Hills weather story: the dry, offshore Santa Ana winds that push desert air down through the canyons toward the coast. They arrive with low humidity and gusts, which is close to the worst mix for the tear film, because moving air carries moisture off the surface of the eye faster than still air does.`,
      },
      {
        p: `The city takes these days seriously for fire reasons. According to the City of Beverly Hills’ Red Flag Warning page, the Beverly Hills Fire Department declares a Red Flag Day when humidity is 15 percent or less, sustained winds reach 25 mph or more with gusts of 35 mph, and the burn index is 151 or higher. On those days there’s no street parking on marked streets, most of them north of Sunset Boulevard or Doheny Road, including stretches of Benedict Canyon Drive and Coldwater Canyon Drive, and parked cars can be cited or towed. The city sends notice through its Nixle alerts.`,
      },
      {
        p: `Those same conditions are hard on eyes. If your phone buzzes with a Red Flag notice, it’s a fair cue to plan the day around the wind as well as the car:`,
      },
      {
        list: [
          `Wear wraparound sunglasses for the walk from the car, the dog walk up the canyon, or the drive with the top down.`,
          `Keep the car’s vents off your face and the windows up on gusty stretches of Coldwater or Benedict Canyon.`,
          `Use your drops at the times you’ve set for the day rather than adding extra ones; the label sets the count.`,
          `Wash your hands after time outside in blowing dust or ash before you touch your eyes or the bottle.`,
        ],
      },
      { h: 'Itchy, dry eyes in a dry-air city' },
      {
        p: `People in Beverly Hills often search for help with itchy eyes as much as dry ones. Quell’s Uses statement reads: {uses}. Itching that comes with dryness is part of what lubricating drops are for, but itching that keeps coming back, or that arrives with swelling or discharge, is something to take to an eye doctor. Figuring out what is behind persistent eye symptoms, and deciding what to do about them, belongs to them, not to a bottle bought online.`,
      },
      {
        p: `The [dry eye self-check](/self-check) is a quick set of questions that can help you describe what you feel before that appointment. It is not a diagnosis, and it doesn’t replace one.`,
      },
      { h: 'Air conditioning, offices and long screen days' },
      {
        p: `A lot of Beverly Hills work happens indoors: law and talent offices along Wilshire, salons and retail on Rodeo Drive, medical suites on Bedford. Air conditioning removes moisture from the air as it cools, and a vent aimed at a desk keeps a steady breeze across your face. Screens add a second pressure, since people blink less while reading one. [Screens and your tear film](/guides/screens-and-your-tear-film) explains the blinking side of that.`,
      },
      {
        p: `Small changes help: angle the vent toward the ceiling, set a reminder to look away from the monitor now and then, and keep a bottle in a desk drawer so your midday drop isn’t skipped because the bottle stayed home.`,
      },
      { h: 'Keeping the bottle in range' },
      {
        p: `Even in a mild climate, a parked car in direct sun gets much hotter than the air around it. The label’s storage line reads: {storage}. A bottle left in a cup holder in a sunny lot on Canon Drive in September can climb past that range, so carry it in a bag that comes inside with you.`,
      },
      {
        p: `Quell is {milky}, and that color is expected. {appearance} If it changes color from how it arrived, the label’s “do not use” line covers it: {doNotUse}.`,
      },
      { h: 'Ordering Quell to a Beverly Hills address' },
      {
        p: `Quell ships across the United States from Brentwood, Tennessee, and Beverly Hills addresses, from the flats to the canyon roads, are covered. Shipping is {shipping}, or free with {freeBottles} bottles in the cart. No delivery date is promised, so reorder before you open the last bottle. The [Beverly Hills page](/eye-drops/beverly-hills-ca) and the [California page](/eye-drops/state/california) have more on ordering in the area, and you can [order from the home page](/#buy) as a guest.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dry air explains a lot of discomfort, but not every case. If your eyes still bother you after the winds die down, or if anything about your vision changes, book a visit rather than waiting it out. Quell’s label sets the line plainly: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Where can I get eye drops in Beverly Hills?',
        a: 'Quell can be ordered online from quelldrop.com and shipped to any Beverly Hills address from Brentwood, Tennessee, with no account needed. Shipping is free on {freeBottles} bottles or more.',
      },
      {
        q: 'Why do my eyes feel dry during Santa Ana winds?',
        a: 'Santa Ana winds carry dry desert air at speed, and moving air pulls moisture off the eye faster than still air. The Beverly Hills Fire Department’s Red Flag Day criteria start at humidity of 15 percent or less with strong sustained winds.',
      },
      {
        q: 'How much rain does Beverly Hills get in summer?',
        a: 'Almost none. NOAA’s 1991–2020 normals for the nearby UCLA station add up to 0.15 inches for June, July and August combined, against 17.73 inches for the whole year.',
      },
      {
        q: 'Can eye drops help with itchy eyes in Beverly Hills?',
        a: 'Quell’s label covers dryness and protection against further irritation. Itching that keeps returning, or comes with swelling or discharge, is a reason to see an eye doctor rather than rely on a lubricating drop.',
      },
    ],
  },

  /*
   * dry-eye-relief-milford-ct. Sources fetched 2026-11-12:
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00094702.csv
   *   (BRIDGEPORT SIKORSKY MEM AP: Jan normal high 38.4, low 24.4; Feb snowfall
   *   10.7 in; Jul normal high 83.4; monthly precip 3.11 to 4.16 in)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (Bridgeport 1948-2018: April afternoon RH 54, March 56; annual morning 75,
   *   afternoon 59)
   * Dropped: miles of shoreline and population (no official page fetched today).
   */
  {
    slug: 'dry-eye-relief-milford-ct',
    title: 'Dry eye relief in Milford, Connecticut',
    description:
      'Sound-side wind, cold winters and heated homes all dry the eyes in Milford, CT. What the Bridgeport weather records show, and where eye drops fit.',
    category: 'local',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Milford sits on Long Island Sound at the mouth of the Housatonic River, and its eyes deal with two kinds of air: raw wind off the water and dry, heated air indoors from November to April. NOAA records from the airport just across the river put April’s average afternoon humidity at 54 percent, the lowest of the year. A lubricating drop such as Quell fits around that, used as its label says: {directions}.`,
      },
      { h: 'What the nearby weather station shows' },
      {
        p: `The closest long-running official station is at Sikorsky Memorial Airport, on the Stratford side of the Housatonic, close enough to see from Milford’s riverbank. NOAA’s 1991–2020 normals for that station describe a classic shoreline year:`,
      },
      {
        list: [
          `January: normal high 38.4°F, normal low 24.4°F.`,
          `February: the snowiest month, with a normal of 10.7 inches.`,
          `July: normal high 83.4°F.`,
          `Precipitation: spread fairly evenly, between 3.11 and 4.16 inches in every month.`,
        ],
      },
      {
        p: `NOAA’s Comparative Climatic Data humidity table for Bridgeport, built from 1948–2018 observations, adds the piece that matters most for eyes. Mornings average 75 percent relative humidity across the year, but afternoons drop to 59 percent, and the lowest afternoon readings come in early spring: 56 percent in March and 54 percent in April. Spring on the Sound can feel damp and chilly while the air is actually drier than it seems.`,
      },
      { h: 'Wind off Long Island Sound' },
      {
        p: `Anyone who walks the boardwalk at Walnut Beach or crosses the sandbar to Charles Island at low tide knows the wind rarely quits on the water. Open water gives it a long, flat run to the shore, and moving air carries tears away from the eye faster than still air. On a gusty March day the combination of wind and a sub-60 afternoon humidity reading is enough to leave eyes stinging after a short walk.`,
      },
      {
        list: [
          `Sunglasses that wrap around block the side wind on beach walks at Silver Sands State Park.`,
          `A brimmed hat cuts glare off the water and the sand, which also stops you squinting into the wind for an hour.`,
          `Turn your back to the gusts when you put in a drop outdoors, so it lands in the eye and not on your cheek.`,
          `Salt spray dries on hands and sunglasses; rinse your hands before reaching for the bottle.`,
        ],
      },
      { h: 'Nor’easters and heated houses' },
      {
        p: `Winter storms on the Connecticut shoreline come with strong northeast winds, and the days after a big one tend to bring cold, clear air. Cold air holds little moisture, and once a furnace or a baseboard system warms it, the relative humidity inside drops further. Many older capes and colonials near Milford Center and Devon run forced hot air, which also means vents blowing across a room. Sleeping with a vent aimed at the bed is an easy way to wake up with dry, sticky eyes.`,
      },
      {
        p: `Steps that help inside the house: aim vents away from beds and favorite chairs, keep doors to heated rooms open so the air mixes, and consider a humidifier in the bedroom. [Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) covers what to look for and how to keep one clean.`,
      },
      { h: 'Commuting along I-95 and the New Haven Line' },
      {
        p: `Milford sits on I-95 and the Wilbur Cross Parkway, and it has a Metro-North station on the New Haven Line, so a lot of residents spend real time in cars and trains every day. A car heater on high with the vents pointed at your face dries eyes quickly; set them toward the windshield or your feet. On the train, the forced air and a phone held close for an hour reduce blinking. Looking up at the Sound as the train runs along the water is a small, useful break.`,
      },
      { h: 'How Quell fits in' },
      {
        p: `The tear film has three layers: oil on the outside, water in the middle and mucus against the eye. When the oil layer is thin, the water beneath it evaporates faster, which is where wind and heated air do their damage. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its actives are {actives}.`,
      },
      {
        p: `Three drops a day can be spaced around a shoreline schedule: one in the morning before the commute, one at midday, and one in the evening when the heat is running. {tip}, so keep the cap on whenever the bottle is in a coat pocket or a beach bag.`,
      },
      { h: 'Ordering to Milford, and when to see an eye doctor' },
      {
        p: `Quell ships within the US from Brentwood, Tennessee, to Milford homes, apartments and offices alike. Standard shipping is {shipping}, and {freeBottles} bottles ship free. There’s no promised delivery date, so order before the last bottle is half empty. The [Milford page](/eye-drops/milford-ct) and the [Connecticut page](/eye-drops/state/connecticut) have local ordering details.`,
      },
      {
        p: `A drop can ease dryness from wind and heat, but sorting out what’s behind eye trouble that lingers is work for an eye doctor. Quell’s label is direct about when to stop: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Where can I find dry eye relief in Milford, CT?',
        a: 'For everyday dryness, lubricating drops such as Quell can be ordered online and shipped to any Milford address. For eye symptoms that persist, a local eye doctor is the right place to start.',
      },
      {
        q: 'Is the air drier in Connecticut in spring?',
        a: 'Along the shoreline it often is in the afternoon. NOAA’s humidity table for Bridgeport shows average afternoon relative humidity of 56 percent in March and 54 percent in April, the lowest of the year.',
      },
      {
        q: 'Why do my eyes water at the beach in winter?',
        a: 'Cold wind off the water dries the eye’s surface, and the eye can respond by producing extra reflex tears that run over instead of spreading evenly. Wraparound sunglasses and turning away from the wind both help.',
      },
      {
        q: 'Does Quell ship to Milford, Connecticut?',
        a: 'Yes. Quell ships to Connecticut from Brentwood, Tennessee, and an order of {freeBottles} bottles ships free. No delivery date is promised.',
      },
    ],
  },

  /*
   * dry-eye-relief-smyrna-tn. Sources fetched 2026-11-12:
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013897.csv
   *   (NASHVILLE INTL AP: Jul normal high 90.9; Jan normal low 30.1; May precip
   *   6.2 in, wettest; Oct 3.36 in, driest)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (Nashville 1948-2018: April afternoon RH 51, October 53; August and
   *   September mornings 89)
   * - https://townofsmyrna.org/live/index.php (Nissan chose Smyrna in the early
   *   1980s, first vehicle 1983; Percy Priest Lake created in the 1960s; Sam
   *   Davis Home a state historic site)
   * Dropped: plant employment figures (sources disagree); Smyrna elevation.
   */
  {
    slug: 'dry-eye-relief-smyrna-tn',
    title: 'Dry eye relief in Smyrna, Tennessee',
    description:
      'Humid summers, dry spring afternoons and long plant shifts all affect eyes in Smyrna, TN. What Nashville’s weather records show, and how drops fit in.',
    category: 'local',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Middle Tennessee feels humid, but Smyrna’s air still turns dry at times that surprise people. NOAA’s humidity table for Nashville, the nearest long official record, puts April’s average afternoon humidity at 51 percent, the lowest of the year, with October close behind at 53. Add heated homes, air-conditioned plants and long drives on I-24, and eyes dry out. Quell’s label directions are simple: {directions}.`,
      },
      { h: 'What Nashville’s records say about Smyrna weather' },
      {
        p: `Smyrna doesn’t have a long-term official station of its own in NOAA’s normals, so the Nashville International Airport record, a short drive up I-24, is the closest reliable guide. NOAA’s 1991–2020 normals and its Comparative Climatic Data humidity table show a year with two very different faces:`,
      },
      {
        list: [
          `Summer: July’s normal high is 90.9°F, and August and September mornings average 89 percent relative humidity.`,
          `Spring: April afternoons average 51 percent humidity, the driest of any month in the table.`,
          `Fall: October is the driest month for rain, with a normal of 3.36 inches, and its afternoons average 53 percent humidity.`,
          `Winter: January’s normal low is 30.1°F, cold enough that furnaces run most nights.`,
          `Wettest month: May, with a normal of 6.2 inches of rain.`,
        ],
      },
      {
        p: `So the muggy summer most people picture is real, but the spring and fall afternoons that feel pleasant are when the outdoor air is driest. That’s when a day at the lake or a walk on the greenway can leave eyes feeling tight by evening.`,
      },
      { h: 'Plant shifts, warehouses and the Nissan corridor' },
      {
        p: `According to the Town of Smyrna, Nissan chose Smyrna in the early 1980s and built its first vehicle there in 1983, and manufacturing and distribution have shaped the town ever since. Long shifts in big buildings bring their own pressures on the eyes: forced air from overhead units, concentration on close work that cuts down blinking, and twelve-hour rotations that make it easy to forget anything on a schedule.`,
      },
      {
        list: [
          `Keep the bottle in a locker or lunch bag rather than on a hot dashboard in the lot.`,
          `Tie your three drops to fixed points in the shift, such as start, lunch and the drive home, rather than to the clock.`,
          `Wash your hands before each drop; grease, dust and cutting fluid don’t belong near the eye or the bottle tip.`,
          `If safety glasses are required at your station, ask your safety lead when and where you can step off the floor to use drops.`,
        ],
      },
      { h: 'Percy Priest Lake, the Stones River and time outdoors' },
      {
        p: `The Town of Smyrna’s history notes that Percy Priest Lake was created in the 1960s, and its northern arms are a big part of weekend life here: boats, fishing, and the walking trails nearby. Sun on open water means glare and squinting, and an afternoon breeze across the lake moves air over the eye without you noticing. Polarized sunglasses cut both. The [boating guide](/guides/dry-eyes-on-a-boat) has more on keeping a bottle out of a hot console and handling drops with wet hands.`,
      },
      { h: 'Heated winters and humid-summer air conditioning' },
      {
        p: `Smyrna homes swing between two kinds of dry. From November to March the heat pump or furnace warms cold air, which lowers indoor humidity. From May to September the air conditioner pulls moisture out as it cools, and a vent over the bed or the couch keeps a constant draft on your face. Pointing vents away from where you sit and sleep is free and tends to make the biggest difference.`,
      },
      { h: 'Where Quell fits into a Smyrna day' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. It’s preservative-free and {milky}; the color comes from its natural ingredients and is normal. The bottle holds {size}. A full list of what’s in it is on the [Drug Facts](/drug-facts) page.`,
      },
      {
        p: `One practical note for the summer: a parked car at a Smyrna plant lot in July gets far hotter than the 90.9°F normal high outside it. Quell’s storage line reads: {storage}. Keep it with you or inside.`,
      },
      { h: 'Ordering Quell to Smyrna' },
      {
        p: `Quell comes from right up the road: it ships from Brentwood, Tennessee, home of its maker, {company}. That doesn’t mean a promised delivery date, so plan a little ahead like you would anywhere. Shipping is {shipping}, or free on {freeBottles} bottles. The [Smyrna, Tennessee page](/eye-drops/smyrna-tn) and the [Tennessee page](/eye-drops/state/tennessee) have more for local buyers.`,
      },
      { h: 'When a drop isn’t the answer' },
      {
        p: `Weather and work explain a lot of dryness, but they don’t explain everything. Working out what’s behind eye trouble that keeps coming back, and what to do about it, is an eye doctor’s job, and there are several practices in Rutherford County and across the Nashville area. The label tells you when it’s time: {stopUse} Supplements are outside what this site can speak to; ask your doctor about anything you take by mouth.`,
      },
    ],
    faq: [
      {
        q: 'Where can I find dry eye relief in Smyrna, TN?',
        a: 'For everyday dryness, lubricating drops like Quell can be ordered online and shipped from Brentwood to any Smyrna address. For symptoms that persist, see an eye doctor in Rutherford County or the Nashville area.',
      },
      {
        q: 'When is the air driest in Middle Tennessee?',
        a: 'Spring and fall afternoons. NOAA’s humidity table for Nashville shows average afternoon relative humidity of 51 percent in April and 53 percent in October, lower than any other months.',
      },
      {
        q: 'Do vitamins help dry eyes?',
        a: 'That’s a question for your eye doctor or pharmacist, who know your health and what else you take. Quell is a lubricating eye drop, and this site doesn’t give advice on supplements.',
      },
      {
        q: 'Can I use eye drops on a factory shift?',
        a: 'Quell’s label directions are one drop three times a day in each eye, and many people time them to the start, middle and end of a shift. Wash your hands first and follow your workplace’s safety rules about where you can remove eye protection.',
      },
    ],
  },

  /*
   * dry-eye-relief-woburn-ma. Sources fetched 2026-11-12:
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00014739.csv
   *   (BOSTON LOGAN INTL AP: Jan normal high 36.8, low 23.1; Jan snowfall 14.3 in,
   *   Feb 14.4 in; Dec precip 4.30 in; Jul normal high 82.1)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (Boston 1945-2018: April afternoon RH 55, Feb and Mar 56; annual morning 72,
   *   afternoon 57)
   * Dropped: Woburn population and elevation (no official page fetched today).
   */
  {
    slug: 'dry-eye-relief-woburn-ma',
    title: 'Dry eye relief in Woburn, Massachusetts',
    description:
      'Snowy winters, heated offices on Route 128 and dry spring afternoons all wear on eyes in Woburn, MA. What Boston’s records show, and how drops fit in.',
    category: 'local',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Woburn’s eyes face a long heating season and some surprisingly dry spring afternoons. NOAA’s humidity table for Boston, about ten miles south, puts average afternoon humidity at 55 percent in April and 56 percent in February and March, the lowest of the year. Heated offices and homes dry the air further. For dryness, Quell’s label gives one routine: {directions}.`,
      },
      { h: 'What Boston’s weather records say' },
      {
        p: `Woburn has no long official record of its own in NOAA’s normals, so the Boston Logan International Airport station is the standard reference for the area. It sits on the harbor, so inland Middlesex County nights can run a little differently, but the pattern holds. From NOAA’s 1991–2020 normals:`,
      },
      {
        list: [
          `January: normal high 36.8°F, normal low 23.1°F.`,
          `Snow: 14.3 inches in a normal January and 14.4 in February, the two snowiest months.`,
          `December: the wettest month, with 4.30 inches of precipitation including melted snow.`,
          `July: normal high 82.1°F.`,
        ],
      },
      {
        p: `NOAA’s Comparative Climatic Data table, built from Boston observations between 1945 and 2018, shows mornings averaging 72 percent relative humidity across the year and afternoons averaging 57. The driest afternoons come from late winter into spring, which is also when the heat is still running indoors.`,
      },
      { h: 'Nor’easters and the days after' },
      {
        p: `A nor’easter brings snow and a hard northeast wind, and the clear, cold air that follows is low in moisture. That’s the setup for scratchy eyes: you shovel the driveway into a stiff wind, then come inside to a house where the furnace has been working overtime. The cold air outside dries the eye’s surface, and once that air is heated indoors, its relative humidity falls further. [Dry eyes when shoveling snow](/guides/dry-eyes-when-shoveling-snow) has more on the outdoor half of that day.`,
      },
      { h: 'Route 128 offices and heated workspaces' },
      {
        p: `Woburn sits where I-93 meets Route 128, and the office parks, labs and corporate campuses along that stretch keep a lot of people indoors at a desk from eight to six. Commercial heating in winter, cooling in summer, and recirculated air all year make for a low-moisture environment, and a ceiling diffuser over a desk adds a steady draft. Long hours on a monitor cut down blinking, too.`,
      },
      {
        list: [
          `Ask facilities whether a diffuser can be adjusted or redirected away from your desk.`,
          `Put the monitor slightly below eye level, so your lids cover more of the eye while you work.`,
          `Keep a bottle in your desk drawer, away from the radiator or space heater under the desk.`,
          `Get up between meetings and look out a window; looking far away tends to bring a few full blinks with it.`,
        ],
      },
      { h: 'Horn Pond, the commute and getting outside' },
      {
        p: `Woburn residents walk and run the loop at Horn Pond in every season, and the open water means wind. On a raw November morning that wind brings tears; on a bright February one, sun on snow and ice adds glare. Sunglasses help in both. The commute matters too: the car heater on a 30-minute drive down I-93 can blow hot, dry air straight at your face unless you set the vents low.`,
      },
      { h: 'What Quell is and how it fits a Woburn week' },
      {
        p: `Quell is a preservative-free lubricating eye drop. Its Uses statement reads: {uses}. The formula is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which matters most when heated air and wind are doing the opposite. [The tear film’s oil layer](/guides/the-tear-films-oil-layer) explains what that layer does.`,
      },
      {
        p: `A Route 128 weekday might look like this: a drop at home before the drive, one at lunch away from the desk, and one in the evening. Keep the cap on when the bottle is in a coat pocket or bag. {tip}.`,
      },
      {
        p: `Winter storage is worth a thought, because a bottle left in the car through a January night sits well below the label’s range: {storage}. Bring it inside with you.`,
      },
      { h: 'Ordering to Woburn' },
      {
        p: `Quell ships within the United States from Brentwood, Tennessee, and Woburn homes and offices are covered. Shipping is {shipping} per order, and {freeBottles} bottles ship free. No delivery date is promised, and winter storms can slow any package, so order before you run low. The [Woburn page](/eye-drops/woburn-ma) and the [Massachusetts page](/eye-drops/state/massachusetts) have more for local buyers.`,
      },
      { h: 'When to see an eye doctor instead' },
      {
        p: `If eye discomfort lingers after the heating season ends, or something new appears, an eye doctor is the right person to work out what’s going on and what to do about it. A lubricating drop is for everyday dryness, not for figuring out a cause. The label says when to stop: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Where can I get dry eye relief in Woburn, MA?',
        a: 'For everyday dryness, a lubricating drop such as Quell can be ordered online and delivered to Woburn. For eye symptoms that persist or change, see an eye doctor in the area.',
      },
      {
        q: 'Why are my eyes so dry in Massachusetts in winter?',
        a: 'Cold outdoor air holds little moisture, and heating it indoors lowers its relative humidity further. NOAA’s Boston humidity table shows afternoon averages of 56 percent in February and March and 55 percent in April.',
      },
      {
        q: 'How much snow does the Boston area get in January?',
        a: 'NOAA’s 1991–2020 normals for Boston Logan show 14.3 inches of snow in a normal January and 14.4 inches in February, the snowiest months of the year.',
      },
      {
        q: 'Can I keep eye drops in my car in a Massachusetts winter?',
        a: 'Not on a cold night. January’s normal low at Boston Logan is 23.1°F, well under the bottom of the range on Quell’s label, which reads: {storage}. Bring the bottle inside.',
      },
    ],
  },

  /*
   * dry-eye-relief-port-st-lucie-fl. Sources fetched 2026-11-12:
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USC00083207.csv
   *   (FT PIERCE: Dec precip 2.41 in, Feb 2.80; Aug 7.25, Sep 8.21; Jan normal
   *   high 72.4, low 53.0; Aug normal high 89.2)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (Vero Beach 1949-2018: March and April afternoon RH 55; September afternoon
   *   67; January and February mornings 88)
   * Dropped: population (no official page fetched today).
   */
  {
    slug: 'dry-eye-relief-port-st-lucie-fl',
    title: 'Dry eye relief and eye drop help in Port St. Lucie',
    description:
      'Treasure Coast dry seasons, sea breezes and constant air conditioning can dry eyes in Port St. Lucie. Local weather records, plus how to put drops in.',
    category: 'local',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Port St. Lucie feels humid most of the year, but its eyes still dry out, mainly in the winter and spring dry season and in air-conditioned rooms. NOAA’s humidity table for Vero Beach, the nearest station with one, shows afternoons averaging 55 percent in March and April against 67 in September. Quell’s label directions for dryness: {directions}. Steps for getting drops in are below.`,
      },
      { h: 'The Treasure Coast’s dry season, in numbers' },
      {
        p: `NOAA’s 1991–2020 normals for the Fort Pierce station, in St. Lucie County just north of the city, show how lopsided the rain is. December’s normal is 2.41 inches and February’s 2.80, while August brings 7.25 inches and September 8.21. Winter days are mild, with a normal January high of 72.4°F and a low of 53.0°F, and August highs run to 89.2°F.`,
      },
      {
        p: `NOAA’s Comparative Climatic Data table for Vero Beach, built from 1949–2018 observations, fills in the humidity. Mornings stay very moist all year, around 88 percent in January and February. Afternoons are a different story in spring: 55 percent in March and April, the driest of the year. That’s the season of spring training at Clover Park, golf at PGA Village and afternoons on the river, which means more time outside right when the air is driest.`,
      },
      { h: 'Sea breezes, the river and the sun' },
      {
        p: `The North Fork of the St. Lucie River winds through the city, and the beaches on Hutchinson Island are a short drive east. The afternoon sea breeze off the Atlantic is part of every day here, and a steady wind moves moisture off the eye even when the air feels sticky. Glare off water and white sand makes people squint, which is tiring in its own way.`,
      },
      {
        list: [
          `Polarized sunglasses cut glare off the river and the Intracoastal.`,
          `A wide-brimmed hat shades the eyes on the golf course or a long walk.`,
          `Rinse sunscreen off your hands before touching the bottle or your eyes; it stings.`,
          `Keep the bottle in a shaded bag, not a beach tote baking on the sand.`,
        ],
      },
      { h: 'Living in air conditioning' },
      {
        p: `Most Port St. Lucie homes run the air conditioning for much of the year, and it dries the air as it cools it. A ceiling fan on high adds a steady breeze across the face, especially in bed. If your eyes feel dry first thing in the morning, check whether a vent or fan points at your pillow. [Dry eyes in a hotel room](/guides/dry-eyes-in-a-hotel-room) has more ideas for rooms that run cold and dry, and most of them work at home too.`,
      },
      { h: 'Help with eye drops: how to put them in' },
      {
        p: `Many searches from St. Lucie County ask for help with eye drops themselves, which makes sense: a drop that runs down your cheek does nothing. Quell’s label gives the dose, {directions}, and one rule for the bottle: {tip}. Within those, a routine that works for most people:`,
      },
      {
        list: [
          `Wash and dry your hands.`,
          `Check the bottle. Quell is {milky}, which is normal; if the color has changed from how it arrived, don’t use it.`,
          `Sit down, or lie back on a couch with your head supported, and tilt your head back.`,
          `With one finger, gently pull the lower lid down to make a small pocket.`,
          `Look up, hold the bottle above the eye without letting the tip touch your eye, lashes or fingers, and squeeze once.`,
          `Close the eye gently for a moment and don’t squeeze it shut, then do the other eye.`,
          `Put the cap back on right away.`,
        ],
      },
      {
        p: `If your hands shake, rest the hand holding the bottle on your forehead or the bridge of your nose so it moves with your head. If you keep missing, lying flat makes aiming easier. Ask a pharmacist to watch you do it once if you’re still unsure; they can suggest what works with your hands. Quell doesn’t sell aids or strips for applying drops, and the label doesn’t mention any, so ask a pharmacist before using a device with them. [How to use eye drops as directed](/guides/how-to-use-eye-drops-as-directed) covers the label side in more depth.`,
      },
      { h: 'Heat and the bottle' },
      {
        p: `A car parked at Tradition or along US-1 in August is far hotter than the 89.2°F air outside it. Quell’s storage line reads: {storage}. Carry the bottle in, and keep spares in a closet rather than a garage or a lanai.`,
      },
      { h: 'Ordering to Port St. Lucie' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Florida addresses, and orders to Port St. Lucie, Tradition and St. Lucie West all go the same way. Shipping is {shipping}, or free with {freeBottles} bottles. No delivery date is promised, so reorder before you’re down to your last few days. See the [Port St. Lucie page](/eye-drops/port-st-lucie-fl) and the [Florida page](/eye-drops/state/florida) for more.`,
      },
      { h: 'When to call an eye doctor' },
      {
        p: `Dryness from wind, sun and air conditioning is common, but persistent symptoms deserve a proper look. Working out what’s causing them, and what to do, is an eye doctor’s job. The label lists when to stop using drops and call one: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Where can I get help with eye drops in Port St. Lucie?',
        a: 'A local pharmacist can watch you put in a drop and suggest ways to make it easier. Quell’s own label directions are one drop three times a day in each eye, without touching the tip to any surface.',
      },
      {
        q: 'When is the dry season in Port St. Lucie?',
        a: 'Roughly November through April. NOAA’s normals for nearby Fort Pierce show 2.41 inches of rain in December and 2.80 in February, against 8.21 inches in September.',
      },
      {
        q: 'Does Quell sell eye drop application strips?',
        a: 'No. Quell sells lubricating eye drops only, and its label doesn’t mention application aids. Ask a pharmacist before using any device with eye drops.',
      },
      {
        q: 'How do I keep from missing my eye with drops?',
        a: 'Lie back with your head supported, pull the lower lid down into a pocket, look up and rest your bottle hand on your forehead so it moves with you. Keep the tip from touching your eye or fingers.',
      },
    ],
  },

  {
    slug: 'eye-drops-delivered-to-a-rural-address',
    title: 'Getting eye drops delivered to a rural address',
    description:
      'Rural routes, 911 addresses, long driveways and roadside mailboxes: how to order eye drops to a country address so the package finds you and stays in range.',
    category: 'shipping',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Quell ships to rural addresses anywhere in the United States, including rural route and box numbers and 911-style street addresses. The two things that matter most are entering the address exactly as your mail carrier uses it, and getting the package out of a hot or freezing mailbox soon after it’s dropped off, because the label sets a storage range. No delivery date is promised, so order ahead.`,
      },
      { h: 'Rural route, box number or 911 address: which to use' },
      {
        p: `Many country homes have two addresses: an older rural route and box number (written like “RR 2 Box 145”), and a newer street-style address assigned by the county for emergency services, often called a 911 address. Over the years most counties have converted rural routes to street addresses so ambulances and fire trucks can find houses, and mail delivery usually followed.`,
      },
      {
        list: [
          `If your mail arrives addressed to a street name and number, use that. It’s what the delivery systems expect and what a driver’s GPS can find.`,
          `If you still receive mail only by rural route and box number, use that format exactly, with no extra words.`,
          `If you’re not sure which one your carrier uses, look at the address on a recent piece of mail or a bill and copy it.`,
          `Don’t combine both on one line. If you need the other version for a driver, put it in the second address line.`,
        ],
      },
      {
        p: `Checkout on quelldrop.com takes a standard US address with an optional second line, and you don’t need an account to order. [Getting the shipping address right](/guides/getting-the-address-right) has more on how each field is used.`,
      },
      { h: 'Long driveways and packages left at the road' },
      {
        p: `On a farm or a wooded lot, the house can sit a quarter mile or more from the mailbox. Drivers usually won’t carry a small package up a long lane, especially a gated one or one with a dog loose in the yard, so it tends to end up in or beside the roadside box. That’s fine for a small bottle, as long as it doesn’t sit there for days.`,
      },
      {
        list: [
          `Watch the tracking email so you know which day to walk down to the box.`,
          `If your box is small, a larger lidded package box beside the post keeps a package out of rain and sun.`,
          `A gate code or a note like “leave at mailbox” can go in the second address line, but it isn’t a promise; drivers follow their own routes and rules.`,
          `If several houses share a lane, add your house color or the last name on the mailbox so a driver knows which box is yours.`,
        ],
      },
      { h: 'Hot and cold mailboxes, and why the label matters' },
      {
        p: `A metal mailbox in full sun in July gets very hot inside, and the same box in a January cold snap gets as cold as the air or colder. The bottle sits inside a carton and a mailer, which helps a little, but not for long. Quell’s Drug Facts panel gives a storage range: {storage}. Short trips outside that range in transit are normal for any shipped product; a package forgotten in a roadside box for a week of heat is a different matter.`,
      },
      {
        p: `When it arrives, look at the solution before you use it. Quell is {milky}. {appearance} The label adds one firm rule under “do not use”: {doNotUse}. [Eye drops shipped in hot or cold weather](/guides/eye-drops-shipped-in-hot-or-cold-weather) goes further into what to check.`,
      },
      { h: 'How long delivery takes to the country' },
      {
        p: `Orders ship from Brentwood, Tennessee. Quell doesn’t promise a delivery date to any address, and rural routes can add a day or more because packages often change hands before the last leg. Weather, a washed-out road or a holiday week can slow things further. The simple fix is to order when you open your second-to-last bottle rather than your last.`,
      },
      {
        p: `If you’re a long way from a pharmacy, it can make sense to keep a spare at home. Store it inside, in the same range as the open bottle, rather than in a barn, shed or truck. Ordering {freeBottles} bottles also means shipping is free, against {shipping} for a smaller order.`,
      },
      { h: 'If tracking says delivered but nothing’s there' },
      {
        list: [
          `Check the roadside box, any package box, the porch, and the end of the driveway near the culvert or gate.`,
          `Ask neighbors on the same route; packages sometimes land in the next box down.`,
          `Give it a day. Rural scans are sometimes recorded before the final drop.`,
          `Then get in touch through [our contact details](/about#contact) with your order number. Damaged or incorrect orders are replaced within {returnDays} days of delivery.`,
        ],
      },
      { h: 'P.O. boxes and general delivery' },
      {
        p: `Some rural residents get all their mail at a post office box in town. If that’s how you receive packages, use the box address. Some carriers can’t deliver to a P.O. box, so if a package can’t be delivered there, you may hear about it through tracking. If you have a choice, a physical address someone checks every day is usually the more dependable option. Quell ships only within the United States.`,
      },
      { h: 'Ordering for a relative on a farm' },
      {
        p: `People often order Quell for a parent who lives out in the country. Put their name and address in the shipping fields and your own email at checkout so the confirmation and tracking come to you, and call them on the day tracking shows it’s at the box. [Ordering eye drops for someone else](/guides/ordering-eye-drops-for-someone-else) explains the rest.`,
      },
    ],
    faq: [
      {
        q: 'Can I ship eye drops to a rural route address?',
        a: 'Yes. Quell ships to rural route and box addresses within the United States. Enter it exactly as it appears on your mail, and use only one address format per line.',
      },
      {
        q: 'Should I use my 911 address or my rural route for packages?',
        a: 'Use whichever your mail actually arrives addressed to. In most counties that’s now the 911 street address, which drivers’ navigation can find more easily.',
      },
      {
        q: 'Can eye drops sit in a mailbox in the heat?',
        a: 'Not for long. A metal mailbox in summer sun gets far hotter than the range on Quell’s label, which reads: {storage}. Collect the package the day it arrives.',
      },
      {
        q: 'Why does delivery take longer to rural areas?',
        a: 'Rural packages often pass through more hands and longer routes before the final drop. Quell doesn’t promise a delivery date anywhere, so ordering before you run low is the dependable approach.',
      },
    ],
  },

  {
    slug: 'ordering-eye-drops-for-an-rv-trip',
    title: 'Ordering eye drops for an RV trip',
    description:
      'Shipping to a campground, mail-forwarding addresses, stocking up before you leave, and keeping eye drops in range in a hot or cold RV.',
    category: 'shipping',
    addedOn: '2026-11-12',
    body: [
      {
        p: `For an RV trip, the easiest plan is to order enough Quell before you leave, so you’re not chasing a package down the road. Full-time RVers can also ship to a campground or RV park that accepts guest mail (ask the office first) or to a mail-forwarding address. Quell ships only within the US, and no delivery date is promised, so plan around where you’ll be staying for a while.`,
      },
      { h: 'Stocking up before you leave' },
      {
        p: `Work out how many bottles you’ll need from the label’s directions: {directions}. Count the weeks you’ll be on the road, add a spare in case one gets dropped or left in a picnic table cup holder, and order a couple of weeks before departure. [How long does a bottle last?](/guides/how-long-does-a-bottle-of-eye-drops-last) can help with the math.`,
      },
      {
        list: [
          `Order to your home address while you’re still there, so you can check the bottles on arrival.`,
          `Check each carton’s seal and the solution’s color before you pack.`,
          `An order of {freeBottles} bottles ships free; smaller orders pay {shipping}.`,
          `Unopened bottles you end up not needing can be refunded within {returnDays} days of delivery, without sending them back.`,
        ],
      },
      { h: 'Shipping eye drops to a campground or RV park' },
      {
        p: `Many RV parks and some campgrounds accept packages for guests, but policies vary a lot. Some hold mail at the office, some charge a small handling fee, some take packages only for guests staying a week or longer, and many state and national park campgrounds don’t accept deliveries at all. Always call the office before you order.`,
      },
      {
        list: [
          `Ask the park how to address packages: some want your name, then “Guest” and your site number, on the second line.`,
          `Use the park’s street address, not a mailing box, unless they tell you otherwise.`,
          `Put your site number and arrival date in the second address line so the office knows who it’s for.`,
          `Order only once you know you’ll still be there when it’s likely to arrive, and leave room for delays.`,
        ],
      },
      { h: 'Mail-forwarding addresses for full-time RVers' },
      {
        p: `Many full-timers keep a domicile address with a mail-forwarding service that receives mail and packages and sends them on in batches to wherever you are. That works fine with Quell: enter the forwarding address exactly as the service tells you, including any box or suite number. Keep in mind that forwarding adds a second trip and some time, so stock up further ahead. The package will spend more days in transit, too, which matters for storage in extreme seasons.`,
      },
      { h: 'Heat in an RV in summer' },
      {
        p: `A closed RV parked in the sun can get much hotter inside than the air outside, especially near windshields, dashboards and cabinets on the sunny side. Quell’s label gives a storage range: {storage}. When you leave the rig for a day of hiking with the air conditioning off, the bottle and spares shouldn’t be left on the dash or near a window.`,
      },
      {
        list: [
          `Store spares in an interior cabinet low down, away from windows and the engine.`,
          `Carry the open bottle with you in a daypack when you leave for the day.`,
          `Never keep it in an outside storage bay; those get hot in summer and cold at night.`,
          `[Can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car) explains why a parked vehicle runs so hot.`,
        ],
      },
      { h: 'Cold nights in shoulder season and winter' },
      {
        p: `Snowbirds heading south in fall and back north in spring often hit freezing nights at high-elevation or northern stops. With the furnace off or set low, the inside of an RV can drop below the bottom of the label’s range. Keep the bottle in a drawer near where you sleep rather than in a cold basement bay or by a single-pane window.`,
      },
      {
        p: `If a bottle may have gotten very hot or cold, check it before use. Quell is {milky}, and that’s expected. If the color looks different from how it arrived, go by the label’s “do not use” line: {doNotUse}.`,
      },
      { h: 'Dry eyes on the road' },
      {
        p: `RV life tends to be hard on eyes: long hours behind a big windshield, dash vents, desert or mountain air, campfire smoke and generator exhaust. Dry and moving air speed evaporation from the eye. Point dash vents toward the glass, wear sunglasses while driving, and wash your hands before each drop at a campsite. {tip}, which matters when the bottle lives in a bag with keys and maps.`,
      },
      { h: 'Ordering while on the road' },
      {
        p: `You can order from your phone at any campground with a signal. There’s no account needed and no subscription to manage. If you’re moving every few days, ship to the stop where you’ll stay longest, or to a family member who can forward it. If something arrives damaged, get in touch through [Contact](/about#contact) with your order number. For Alaska and Hawaii trips, Quell ships to addresses there too, but foreign stops like Canada and Mexico are outside its shipping area.`,
      },
    ],
    faq: [
      {
        q: 'Can I ship eye drops to an RV park?',
        a: 'Often, yes, but ask the park office first. Many RV parks hold packages for guests, some charge a fee, and many public campgrounds don’t accept deliveries.',
      },
      {
        q: 'How do I address a package to a campground?',
        a: 'Use the park’s street address and add your name, site number and arrival date on the second line, or follow whatever format the office gives you.',
      },
      {
        q: 'Can I use a mail-forwarding address to order Quell?',
        a: 'Yes. Quell ships to US addresses, including mail-forwarding services. Enter the address exactly as the service provides it, and allow extra time for forwarding.',
      },
      {
        q: 'Where should I keep eye drops in an RV?',
        a: 'In an interior cabinet away from windows, the dash and outside storage bays, which get very hot in summer and cold in winter. Quell’s label reads: {storage}.',
      },
    ],
  },

  {
    slug: 'dry-eyes-on-a-winter-hike',
    title: 'Dry eyes on a winter hike',
    description:
      'Cold, dry air, ridge-top wind and sun on snow all pull moisture from your eyes on a winter hike. What to wear, and how to carry and use eye drops on the trail.',
    category: 'seasonal',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Winter hikes dry the eyes because cold air holds little moisture, wind on open ridges strips it from the eye’s surface, and sun reflecting off snow makes you squint. Sunglasses or goggles cut wind and glare. If you carry Quell, keep the bottle inside a layer close to your body, wash or sanitize your hands first, and follow the label: {directions}.`,
      },
      { h: 'Why winter air dries your eyes' },
      {
        p: `Cold air simply can’t hold as much water vapor as warm air, so a crisp January morning is dry even when the trail is covered in snow. Your eyes are one of the few wet surfaces exposed to it. Every breath of wind moves that dry air across the tear film and takes moisture with it. On a hike you’re also breathing hard, looking far ahead, and often blinking less while you watch your footing on ice.`,
      },
      { h: 'Wind above the tree line' },
      {
        p: `The trail below often feels sheltered. Then you step out onto a ridge, a bald or a summit and the wind hits all at once. Eyes often water heavily there: cold wind triggers reflex tears, which run down your face rather than spreading over the eye. That watering can leave the surface drier afterward, not wetter.`,
      },
      {
        list: [
          `Turn your face out of the wind for a minute when you reach an exposed spot.`,
          `Pull a buff or neck gaiter up over your nose to block some of the gusts, without letting your breath fog your glasses.`,
          `Switch to goggles on very windy days above the tree line.`,
          `Rest in the lee of a rock or the trees rather than on the open crest.`,
        ],
      },
      { h: 'Sun on snow: sunglasses and goggles' },
      {
        p: `Fresh snow reflects a lot of sunlight back up at you, and the glare makes you squint for hours. Squinting tires the eyes, and unprotected eyes on snow can be hurt by the light itself. Wraparound sunglasses with side coverage, or goggles in strong wind, cut both glare and airflow. Ski goggles that seal against your face stop the most wind. [Ski trips, cold wind and dry eyes](/guides/ski-trips-and-dry-eyes) covers the downhill version of this.`,
      },
      { h: 'Carrying eye drops on a winter hike' },
      {
        p: `A bottle in an outer hip-belt pocket or a pack’s side pouch gets as cold as the air. Quell’s label gives a storage range: {storage}. A freezing ridge is well below that. Carry the bottle in an inside chest pocket of your mid layer, where your body keeps it warm, and it’ll be ready to use at a rest stop.`,
      },
      {
        list: [
          `Inside pocket of a fleece or puffy, zipped shut.`,
          `Inside a small zip bag so sweat doesn’t reach it.`,
          `Not in a car glovebox at the trailhead for the day, where it can freeze.`,
          `If the bottle may have frozen, check its color before you use it. The label’s “do not use” line reads: {doNotUse}.`,
        ],
      },
      { h: 'Using drops on the trail' },
      {
        p: `Hiking hands are dirty hands: trekking poles, tree bark, gloves, map pages and snacks. Wash your hands at the trailhead restroom if there is one, or use hand sanitizer and let it dry fully before handling the bottle. {tip}, so keep the cap on until the moment you use it and put it straight back on.`,
      },
      {
        list: [
          `Stop and find a spot out of the wind.`,
          `Take off one glove; use the bare hand for the bottle.`,
          `Tilt your head back, pull the lower lid down, look up and squeeze one drop.`,
          `Close your eye gently for a moment, then do the other eye.`,
          `Cap it, put the bottle back in the inside pocket, and glove up.`,
        ],
      },
      {
        p: `The label sets the count, three times a day in each eye, so plan them around the day: one at breakfast, one at the summit or lunch stop, one when you’re back at the car.`,
      },
      { h: 'After the hike' },
      {
        p: `The drive home or a warm cabin can feel like relief, but heated air is dry too. Point the car heater toward your feet and the windshield, not your face. At home, a humidifier in the room where you rest helps; [Dry eyes from cold air](/guides/dry-eyes-from-cold-air) covers the rest of the winter picture. If your eyes stay sore, gritty or sensitive to light after a day on bright snow, that’s a reason to call an eye doctor. Quell’s label sets clear limits: {stopUse}`,
      },
      { h: 'Ordering before the season' },
      {
        p: `If you hike through the winter, order before your trips rather than the week of, because no delivery date is promised. Quell ships within the US from Brentwood, Tennessee, and {freeBottles} bottles ship free. You can [order as a guest](/#buy) and keep a spare at home.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry after hiking?',
        a: 'Wind, sun and dry air all speed evaporation from the eye, and you tend to blink less when watching the trail. In winter, cold air carries even less moisture than usual.',
      },
      {
        q: 'Why do my eyes water when hiking in the cold?',
        a: 'Cold wind can trigger reflex tears that run over rather than spreading evenly across the eye. Sunglasses or goggles block much of that wind.',
      },
      {
        q: 'Where should I carry eye drops on a winter hike?',
        a: 'In an inside pocket of your mid layer, where body heat keeps the bottle from freezing. Quell’s label reads: {storage}.',
      },
      {
        q: 'Should I wear sunglasses on a snowy hike?',
        a: 'Yes. Sun on snow creates strong glare, and wraparound sunglasses or goggles cut both glare and the wind that dries your eyes.',
      },
    ],
  },

  {
    slug: 'christmas-gifts-for-truck-drivers',
    title: 'Christmas gifts for truck drivers',
    description:
      'Gift ideas built around life in a truck cab: long hours, heater and AC vents, night driving and sleeper berths. Plus eye drops as a stocking stuffer.',
    category: 'seasonal',
    addedOn: '2026-11-12',
    body: [
      {
        p: `The most useful Christmas gifts for a truck driver make long hours in the cab more comfortable: a good insulated mug, a 12-volt cooler or lunchbox, warm socks, a quality seat cushion, polarized sunglasses, and small things for dry eyes from the heater and AC vents. Quell, a preservative-free lubricating eye drop, fits in a stocking. Order early, because no arrival date is promised.`,
      },
      { h: 'Christmas gifts for truck drivers: start with the cab' },
      {
        p: `A semi’s cab is a driver’s office, kitchen and, in a sleeper truck, bedroom for days or weeks at a time. Gifts that fit that space and its 12-volt power tend to get used every day. Anything bulky, fragile or loose will get thrown around on a rough road, so pick things that stow well.`,
      },
      {
        list: [
          `A large insulated travel mug or bottle that fits the cup holder.`,
          `A 12-volt lunchbox or plug-in cooler so meals don’t depend on truck stops.`,
          `A gel or memory-foam seat cushion and a lumbar support for long days.`,
          `Warm wool socks and a good pair of work gloves for the cold fueling stops.`,
          `A headlamp for pre-trip inspections and chaining up in the dark.`,
          `A gift card to a truck-stop chain the driver uses, or prepaid shower credits.`,
        ],
      },
      { h: 'Gifts for the sleeper berth' },
      {
        p: `Sleep in a truck happens at odd hours, at loud truck stops, with lights and engines all around. A good mattress topper made for sleeper dimensions, blackout curtains or a sleep mask, earplugs, and a soft blanket are welcome gifts. A small battery fan or heater can help too, but check what the driver’s company allows in the cab first.`,
      },
      { h: 'Night driving and glare' },
      {
        p: `Many drivers run nights, and oncoming headlights and wet roads make glare tiring. Thoughtful gifts here are practical: a microfiber cloth and windshield cleaner kit so the glass stays clear inside and out, a sunglasses case that clips to the visor, and a pair of quality polarized sunglasses for daytime runs. Leave tinted “night driving” glasses off the list; eyewear for driving after dark is a question for the driver’s own eye doctor.`,
      },
      { h: 'Gifts for dry eyes in a truck cab' },
      {
        p: `Hours in front of heater and AC vents, plus staring down the road and blinking less, often leave drivers with dry, tired eyes by the end of a shift. Eye-comfort gifts that make sense:`,
      },
      {
        list: [
          `Lubricating eye drops for the stocking. Quell comes in a {size} bottle in a carton that fits easily alongside candy and gloves.`,
          `Vent deflectors that clip onto dash vents to redirect air away from the face.`,
          `A small 12-volt humidifier made for vehicles, if the driver’s carrier allows it.`,
          `Wraparound sunglasses that block side drafts from an open window.`,
        ],
      },
      {
        p: `If you include Quell, a couple of notes help it land well. The label reads: {warnings}, because the formula includes emu oil, so check if the driver has an egg or bird allergy before you give it. The solution is {milky}, which is normal, so mention it in the card so it doesn’t surprise them. Its storage line also matters in a truck: {storage}. Encourage them to keep it in a bag, not on the dash.`,
      },
      {
        p: `[Eye drops for truck drivers](/guides/eye-drops-for-truck-drivers) covers how drivers use drops on the job and where to keep them in the cab; this page is just about the gift.`,
      },
      { h: 'Gifts that help with time on the road' },
      {
        list: [
          `A satellite radio subscription or audiobook credits for long empty stretches.`,
          `A phone mount that’s legal and solid for hands-free use.`,
          `A power inverter or quality charging cables long enough to reach the bunk.`,
          `A small, sturdy organizer for the passenger seat.`,
          `A homemade card with photos and a few notes for hard days away.`,
        ],
      },
      { h: 'Ordering and shipping in time for Christmas' },
      {
        p: `Drivers are often away over the holidays, so think about where the gift should go: home for when they’re back, the company terminal if they allow driver mail, or with you for a visit. Quell ships within the US from Brentwood, Tennessee, and no arrival date is promised, so order well before Christmas. [Ordering eye drops early for the holidays](/guides/ordering-eye-drops-early-for-the-holidays) has timing tips, and [sending Quell as a gift](/guides/sending-quell-as-a-gift) covers addressing it to someone else.`,
      },
      {
        p: `If the gift isn’t wanted, unopened bottles can be refunded within {returnDays} days of delivery without being sent back. Shipping is {shipping}, or free with {freeBottles} bottles, which can make a few stocking stuffers for a whole crew practical.`,
      },
    ],
    faq: [
      {
        q: 'What do truck drivers want for Christmas?',
        a: 'Practical things that make cab life easier: insulated mugs, 12-volt coolers, seat cushions, warm socks, sleep gear and small comforts like eye drops for dry cab air.',
      },
      {
        q: 'Are eye drops a good gift for a truck driver?',
        a: 'For many drivers, yes, since hours in front of heater and AC vents can leave eyes dry. Check for an egg or bird allergy first, because Quell’s label carries a caution for those.',
      },
      {
        q: 'Where should I ship a gift for an over-the-road driver?',
        a: 'Home, if they’ll be back before Christmas, or the company terminal if it accepts driver mail. Quell doesn’t promise delivery dates, so order early.',
      },
      {
        q: 'What are good stocking stuffers for truckers?',
        a: 'Small things that stow in a cab: lip balm, a microfiber cloth, a headlamp, wool socks, truck-stop gift cards and a bottle of lubricating eye drops.',
      },
    ],
  },

  {
    slug: 'dry-eyes-on-a-boat',
    title: 'Dry eyes on a boat',
    description:
      'Wind, spray and glare off the water dry and tire your eyes on a boat. How to protect them, where to keep eye drops aboard, and how to use them with salty hands.',
    category: 'using',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Boats are hard on eyes: steady wind at speed, salt spray, and sun glaring off the water all pull moisture from the eye’s surface and make you squint. Polarized sunglasses with a retention strap, a hat, and keeping your face out of the direct wind help most. Store eye drops in a shaded, dry spot, not a hot console, and rinse salt from your hands first.`,
      },
      { h: 'Why your eyes get dry on the water' },
      {
        p: `Running at speed, a boat creates its own wind on top of whatever is blowing. That steady stream of air over the eye speeds evaporation from the tear film, and the effect is strongest at the helm behind a low windshield, or on the bow. Add salt spray landing on your face and lashes, and sun reflecting up from the water, and many boaters come in with eyes that feel gritty, stinging and tired.`,
      },
      { h: 'Glare off the water' },
      {
        p: `Sunlight reflected off a calm lake or open water hits your eyes from below as well as above. It makes reading the water, spotting markers and watching a line harder, and you end up squinting for hours. Polarized lenses cut much of that reflected glare. Wraparound frames block wind from the sides, too.`,
      },
      {
        list: [
          `Choose polarized sunglasses with side coverage.`,
          `Use a retention strap so a wave or a quick head turn doesn’t send them overboard.`,
          `Wear a hat with a brim, ideally one with a dark underside to cut reflected light.`,
          `Bring a spare pair in a hard case in the cabin or dry box.`,
        ],
      },
      { h: 'Fishing trips: long hours watching the water' },
      {
        p: `A day of fishing means hours of looking at a bobber, a rod tip or a sonar screen with very little blinking. That focus is part of the fun, but it leaves the tear film exposed for long stretches. Every now and then, look at the horizon or the shoreline and blink fully a few times. Use your drops at set points, such as at launch, at lunch and on the ride back, rather than when your eyes are already burning.`,
      },
      { h: 'Where to keep eye drops on a boat' },
      {
        p: `A center console or dashboard glove box in full sun gets very hot. Quell’s label gives a clear storage range: {storage}. A sealed compartment on a dark boat in July can go well beyond that. Better options:`,
      },
      {
        list: [
          `A small dry bag in the shade under the console or in the cabin.`,
          `A soft cooler with your food, kept cool but not resting on ice.`,
          `A zip pocket in a life jacket or fishing vest if you’re in the shade, though bring it in when you dock.`,
          `Not loose in a cup holder, where it can roll overboard or bake in the sun.`,
        ],
      },
      {
        p: `If a bottle may have overheated, check it before use. Quell is {milky}, and that’s normal. If the color has changed, the label’s “do not use” line applies: {doNotUse}. [Can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car) explains how fast enclosed spaces heat up in the sun.`,
      },
      { h: 'Salt on your hands' },
      {
        p: `Hands on a boat collect salt water, fish slime, bait, sunscreen and engine grease. None of those belong near your eye or the tip of the bottle. Before you use a drop, rinse your hands with fresh water and dry them, or use a wipe and let it dry. {tip}, so keep the cap on until the moment you use it.`,
      },
      {
        list: [
          `Rinse and dry your hands.`,
          `Slow down or idle in calm water, or sit in a sheltered spot.`,
          `Brace yourself, tilt your head back, pull down the lower lid and squeeze one drop.`,
          `Close your eye gently for a moment, then do the other eye and cap the bottle.`,
        ],
      },
      { h: 'Spray, wind and after you dock' },
      {
        p: `Salt spray drying on your face can sting if it runs into your eyes. A quick rinse with fresh water on your face (with your eyes closed) after a spray-heavy run helps. After a long day on the water, many people find their eyes feel driest that evening. Point fans and AC vents away from your face at home, and save one of the label’s three daily drops for the evening. [Dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers) has more on long days in sun and wind.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Sun, wind and salt can cause more than dryness. If your eyes are painful, very light-sensitive or your vision changes after a day on the water, see an eye doctor. The label is plain about it: {stopUse}`,
      },
      { h: 'Stocking up before the season' },
      {
        p: `Quell ships within the United States from Brentwood, Tennessee, and no delivery date is promised. Order a couple of bottles before boating season or a fishing trip, so one stays at home and one goes in the boat bag. Shipping is {shipping}, or free with {freeBottles} bottles. [Order here](/#buy) as a guest.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes burn after a day on a boat?',
        a: 'Wind at speed, salt spray and glare off the water all dry and irritate the eye’s surface. Polarized wraparound sunglasses, a hat and rinsing salt off your face help.',
      },
      {
        q: 'Where should I keep eye drops on a boat?',
        a: 'In a shaded dry bag or the cabin, not a sun-baked console. Quell’s label gives the range: {storage}.',
      },
      {
        q: 'Do polarized sunglasses help dry eyes on the water?',
        a: 'They cut reflected glare, which reduces squinting, and wraparound frames block wind from the sides. A retention strap keeps them from going overboard.',
      },
      {
        q: 'Can I put in eye drops with salty hands?',
        a: 'Rinse and dry your hands first. Salt, bait and sunscreen don’t belong near your eye or the bottle tip.',
      },
    ],
  },

  /*
   * dry-eyes-for-woodworkers. Source fetched 2026-11-12:
   * - https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.133
   *   ((a)(1): employer ensures each affected employee uses appropriate eye or
   *   face protection; hazards include flying particles; protectors to ANSI
   *   Z87.1)
   */
  {
    slug: 'dry-eyes-for-woodworkers',
    title: 'Dry eyes for woodworkers',
    description:
      'Sawdust, shop heaters and hours of focus on a cut can leave a woodworker’s eyes dry and gritty. Safety glasses, shop air, and when to step out for a drop.',
    category: 'using',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Woodworkers get dry eyes from three things at once: fine sawdust in the air, dry heat from a shop heater in winter, and long stretches of staring at a blade or a pencil line without blinking. Safety glasses rated to ANSI Z87.1 keep chips out; dust collection and a break from the shop handle the rest. Use lubricating drops only with clean hands, away from the dust.`,
      },
      { h: 'Why a wood shop dries your eyes' },
      {
        p: `Every cut throws dust, and the finest particles from sanding, routing and table-saw work hang in the air long after the machine stops. Dust that lands on the eye’s surface soaks up and disrupts the thin tear film. Meanwhile a propane, kerosene or electric heater in a garage shop warms cold winter air and lowers its relative humidity. And when you’re lining up a cut or chiseling to a knife line, you blink far less than usual, so the tear film gets less frequent refreshing.`,
      },
      { h: 'Safety glasses: what OSHA requires at work' },
      {
        p: `In a professional shop, OSHA’s eye and face protection rule, 29 CFR 1910.133, says the employer must ensure each affected employee uses appropriate eye or face protection when exposed to hazards such as flying particles. The rule points to the ANSI Z87.1 standard for protectors, and compliant safety glasses are marked “Z87.” At home there’s no inspector, but the flying-chip hazard is the same, so the same glasses make sense.`,
      },
      {
        list: [
          `Choose glasses or goggles marked Z87, with side protection.`,
          `Sealed goggles keep out more fine dust than open-sided glasses when sanding or routing.`,
          `If you wear prescription glasses, look for Z87-rated over-glasses or prescription safety frames.`,
          `Add a face shield over glasses at the lathe, where chips fly at your face.`,
          `Keep a spare pair by the door so they go on before the first machine starts.`,
        ],
      },
      { h: 'Dust collection and shop air' },
      {
        p: `The less dust in the air, the less ends up in your eyes. A dust collector or shop vacuum connected at the tool captures most chips at the source, and an ambient air filter hung from the ceiling catches the fine dust that escapes. Sweeping kicks fine dust back into the air, so vacuuming the floor is gentler on your eyes and lungs. A respirator or dust mask is about your lungs, not your eyes, but a poorly fitting mask can push breath upward and fog or dry your glasses, so check the fit.`,
      },
      { h: 'Shop heaters and winter dryness' },
      {
        p: `A heater that blows straight across the bench is a steady dry wind on your face. Aim it at your legs or away from your workstation, and don’t sit in front of it to warm up while sanding. Some woodworkers run a humidifier in a heated shop in winter partly for the wood itself, since boards move with humidity; it can make the room more comfortable for eyes too. [Dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) covers heater placement in more detail.`,
      },
      { h: 'Concentration and blinking' },
      {
        p: `Close, careful work cuts down blinking. Between operations, take your hands off the tool, look at something across the shop or out the window, and blink fully a few times. Building that pause into setups, such as while a glue-up clamps or a finish dries, keeps eyes more comfortable without breaking concentration on the cut itself. Never look away while a blade is spinning; take the break once it’s stopped.`,
      },
      { h: 'Using eye drops around sawdust' },
      {
        p: `A wood shop is about the worst place to open a bottle of eye drops. Fine dust settles on everything, including a bottle sitting on the bench and the fingertips you’d use to pull down your lid. Quell’s label is specific: {tip}. So make drops a step-out-of-the-shop task:`,
      },
      {
        list: [
          `Turn off machines and step out of the shop, ideally into the house or a clean room.`,
          `Take off your safety glasses, and brush dust from your hair and eyebrows away from your face.`,
          `Wash your hands thoroughly with soap and water and dry them.`,
          `Use the drop as the label directs: {directions}.`,
          `Recap the bottle and leave it indoors, not on the bench.`,
        ],
      },
      {
        p: `Quell is {milky}, so a little dust on the cap is hard to spot. Keep the bottle in a closed drawer in the house or in a clean zip bag. Its storage range also matters in a garage shop: {storage}. An unheated shop in winter or a closed one in summer can fall outside that.`,
      },
      { h: 'If dust or a chip gets in your eye' },
      {
        p: `Lubricating drops are for dryness, not for getting a foreign object out. If a chip or splinter gets in your eye, don’t rub it. Rinse with clean water or an eyewash station if you have one, and if anything still feels stuck, or your eye hurts or your vision changes, get medical care. The label backs that up: {stopUse}`,
      },
      { h: 'Ordering' },
      {
        p: `Quell ships within the US from Brentwood, Tennessee, and can be [ordered as a guest](/#buy). Shipping is {shipping}, or free with {freeBottles} bottles. [Eye drops for computer users](/guides/eye-drops-for-computer-users) is worth a look if your woodworking plans live on a screen as well.`,
      },
    ],
    faq: [
      {
        q: 'Can sawdust cause dry eyes?',
        a: 'Fine sawdust that lands on the eye disrupts the tear film and can leave eyes gritty and dry. Good dust collection and sealed safety goggles keep most of it out.',
      },
      {
        q: 'What safety glasses should woodworkers wear?',
        a: 'Glasses or goggles marked Z87, which meet the ANSI Z87.1 standard that OSHA’s eye protection rule points to. Side protection or sealed goggles keep out more dust.',
      },
      {
        q: 'Can I use eye drops in my workshop?',
        a: 'It’s better to step out of the shop, wash your hands and use drops in a clean room. Sawdust on your fingers or the bottle tip shouldn’t get near your eye.',
      },
      {
        q: 'What should I do if wood dust gets in my eye?',
        a: 'Don’t rub it. Rinse with clean water, and get medical care if something still feels stuck, your eye hurts or your vision changes.',
      },
    ],
  },

  {
    slug: 'is-it-normal-for-vision-to-blur-after-eye-drops',
    title: 'Is it normal for vision to blur after eye drops?',
    description:
      'A brief blur while a drop spreads over the eye is common. What Quell’s label says, why a milky drop can soften focus, and when blur is a warning sign.',
    category: 'using',
    addedOn: '2026-11-12',
    body: [
      {
        p: `A short blur right after an eye drop is common: a fresh drop sits on the eye as an uneven layer of liquid until a few blinks spread it out, and Quell’s is milky. That blur should clear within moments. Quell’s label doesn’t list blurring as an expected effect, and it tells you to stop and ask a doctor about changes in your vision that don’t go away.`,
      },
      { h: 'Why vision can blur for a moment after a drop' },
      {
        p: `The front of the eye focuses light through a smooth layer of tears. A single drop adds more liquid than that layer normally holds, and right after it lands the surface is briefly uneven. Light passing through an uneven surface doesn’t focus as crisply, so the world looks soft for a few seconds. A few gentle blinks spread the liquid into a thin, even film, and the excess drains away through the tear ducts near the inner corner of the eye.`,
      },
      { h: 'Blurry vision after lubricating eye drops' },
      {
        p: `Lubricating drops are designed to stay on the eye’s surface a little longer than plain water, and some include oils. Quell’s actives are {actives}, and its light mineral oil is listed as an emollient. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, so it is meant to blend into the oily outer layer of the tear film. While that happens, a short haze is not surprising.`,
      },
      {
        p: `The label says: {milky}. The site’s note on appearance adds: {appearance} Neither says anything about how long vision stays soft afterward, so read the next section as practical advice, not a label claim.`,
      },
      { h: 'How long should blur last?' },
      {
        p: `For most people, blur after a lubricating drop clears in a few moments of normal blinking. If you’ve just put a drop in and your vision is soft, close your eyes gently for a moment, then blink normally a few times. Don’t rub your eyes. If you look at something across the room instead of your phone, it’s easier to tell when focus has returned.`,
      },
      {
        list: [
          `Blur that clears within a couple of minutes: expected while the drop spreads.`,
          `Blur that comes back each time you use the drop and then clears: worth mentioning to an eye doctor or pharmacist at your next chance.`,
          `Blur that doesn’t clear, gets worse, or comes with eye pain: stop using the drops and contact a doctor.`,
          `Sudden changes in vision unrelated to a drop, such as flashes, a curtain or loss of part of your vision: get medical care right away.`,
        ],
      },
      { h: 'When to wait before driving' },
      {
        p: `Don’t put drops in and immediately pull out into traffic. Use them before you start the car, wait until your vision is fully clear, and then drive. On a long trip, pull into a rest area or parking lot for a drop rather than doing it at a light. The same goes for operating machinery, climbing a ladder, or anything where clear vision matters. [Dry eyes when driving in winter](/guides/dry-eyes-when-driving-in-winter) covers timing drops around a drive.`,
      },
      { h: 'Things that make post-drop blur worse' },
      {
        list: [
          `Using more than one drop at a time. The eye only holds so much, and the extra runs over and smears.`,
          `Rubbing or squeezing your eyes shut hard right after the drop.`,
          `Putting a drop in just before reading small print or a screen, when you notice blur most.`,
          `Using drops with other products. The label doesn’t cover combining Quell with other drops or ointments; ask your eye doctor or pharmacist.`,
        ],
      },
      {
        p: `The label’s directions set the amount: {directions}. One drop is enough; a second right after it doesn’t add anything but runoff. [Can I use more than three drops a day?](/guides/can-i-use-more-than-three-drops-a-day) explains why the count is fixed.`,
      },
      { h: 'Contact lenses and blur' },
      {
        p: `Quell’s label doesn’t give directions for contact lenses, so using it with lenses in is a question for your eye doctor. Blur from a drop on top of a lens can behave differently. [Contact lenses and Quell](/guides/contact-lenses-and-quell) has more.`,
      },
      { h: 'When blur is a reason to stop' },
      {
        p: `The label is clear about vision changes: {stopUse} Check the bottle too, because the label’s “do not use” line reads: {doNotUse}. If you’re unsure whether what you’re seeing is normal, a call to an eye doctor’s office is the right move.`,
      },
    ],
    faq: [
      {
        q: 'Is blurry vision after lubricating eye drops normal?',
        a: 'A brief blur while the drop spreads across the eye is common and should clear with a few blinks. Blur that lasts or keeps getting worse is a reason to stop and ask a doctor.',
      },
      {
        q: 'How long does blurriness last after eye drops?',
        a: 'Usually only moments, until blinking spreads the drop into an even film. Quell’s label tells you to stop and ask a doctor about vision changes that don’t go away.',
      },
      {
        q: 'Why is my vision cloudy after eye drops?',
        a: 'A fresh drop briefly makes the eye’s surface uneven, and a milky drop like Quell can add a short haze. It should clear quickly; if it doesn’t, contact an eye doctor.',
      },
      {
        q: 'Can I drive right after putting in eye drops?',
        a: 'Wait until your vision is completely clear before driving. Put drops in before you start the car, not at a stoplight.',
      },
    ],
  },

  {
    slug: 'what-are-eye-drops-made-of',
    title: 'What are eye drops made of?',
    description:
      'Eye drops are mostly purified water plus active ingredients that do the job and inactive ones like salts and buffers. How to read them, with Quell’s full list.',
    category: 'formula',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Most eye drops are made of purified water plus two kinds of ingredients: active ingredients, which do the product’s job, and inactive ingredients, which make the solution comfortable, stable and the right consistency. On an over-the-counter drop, FDA’s Drug Facts format lists both. Quell’s actives are {actives}; its inactives include sterile water, salt and natural oils.`,
      },
      { h: 'Active and inactive ingredients, in general' },
      {
        p: `Every over-the-counter drug sold in the US carries a Drug Facts panel in a standard order, under FDA’s labeling rule at 21 CFR 201.66. The panel opens with the active ingredients, each with its strength and its purpose, and closes with a list of inactive ingredients. The active ingredients are the ones responsible for the drug’s stated use. Inactive ingredients don’t carry that job, but they make up most of the bottle and shape how a drop feels.`,
      },
      {
        p: `For lubricating eye drops, the active ingredients come from a short list FDA allows for over-the-counter eye products in its ophthalmic monograph, 21 CFR part 349. That list sorts them into groups such as demulcents, which are water-soluble lubricants, and emollients, which are oily ones. Glycerin, polysorbate 80 and light mineral oil all appear there.`,
      },
      { h: 'What lubricating eye drops are made of' },
      {
        p: `A typical lubricating drop is built from a handful of ingredient types. Not every product uses all of them.`,
      },
      {
        list: [
          `Water: the base. On a label it may appear as purified or sterile water.`,
          `Lubricants (demulcents): water-soluble ingredients that make the drop slippery and help it spread.`,
          `Emollients: oils that blend with the outer, oily layer of the tear film.`,
          `Salts: to bring the solution close to the saltiness of natural tears, so it doesn’t sting.`,
          `Buffers: to hold the solution near the right acidity for the eye.`,
          `Emulsifiers: to keep oil and water mixed.`,
          `Preservatives: in many multi-use bottles, to limit contamination after opening. Quell has none.`,
        ],
      },
      { h: 'What Quell is made of' },
      {
        p: `Quell’s Drug Facts panel lists three active ingredients: {actives}. Two are lubricants and one, the light mineral oil, is an emollient. Its inactive ingredients are: {inactives}.`,
      },
      {
        p: `Mapped onto the general types above, the label shows sterile water as the base, Dead Sea salt listed as sodium chloride, tromethamine (a compound widely used as a buffer), poloxamer 188 (written on the carton as Polaxamer 188), and natural ingredients such as emu oil, manuka honey and Terminalia chebula (written on the carton as Terminalia Chubula). Each of those has its own guide: [Dead Sea salt](/guides/dead-sea-salt-in-eye-drops), [poloxamer 188 and tromethamine](/guides/poloxamer-188-and-tromethamine-in-eye-drops), [emu oil](/guides/emu-oil-in-eye-drops) and [caprylyl glycol](/guides/caprylyl-glycol-in-eye-drops).`,
      },
      { h: 'Why Quell looks the way it does' },
      {
        p: `Water-based drops with no oils usually look clear. Quell’s oils and natural ingredients give it a different look, and the label says so: {milky}. That’s the expected appearance, not a sign something is wrong. The label’s rule on color is about change: {doNotUse}.`,
      },
      { h: 'Reading percentages on the label' },
      {
        p: `The strength beside each active ingredient is its concentration in the solution, not a measure of how well the drop works. Different brands use different strengths and combinations, so the numbers aren’t a ranking. [What the percentages mean](/guides/what-the-percentages-on-the-label-mean) explains how to read them. Inactive ingredients are listed without strengths.`,
      },
      { h: 'Checking ingredients for allergies' },
      {
        p: `Because the full list is printed, you can check it against anything you know you react to. Quell’s label carries one specific caution: {warnings}. That comes from the emu oil. If any other ingredient gives you pause, take the list to a pharmacist before ordering. The full panel is on the [Drug Facts](/drug-facts) page.`,
      },
      { h: 'What eye drops are not' },
      {
        p: `Homemade salt water or honey from a jar is not the same as a sterile eye drop made under drug manufacturing controls, and neither belongs in your eyes. How an eye product is made and sealed matters as much as its ingredient list, which is why a sterile, sealed bottle with a full Drug Facts panel is the thing to look for.`,
      },
    ],
    faq: [
      {
        q: 'What are lubricating eye drops made of?',
        a: 'Mostly purified or sterile water, plus lubricant or emollient active ingredients, and inactive ingredients such as salts, buffers and emulsifiers. Quell’s actives are {actives}.',
      },
      {
        q: 'What is the difference between active and inactive ingredients in eye drops?',
        a: 'Active ingredients are responsible for the product’s stated use and are listed with strengths and purposes. Inactive ingredients make up the rest of the solution and affect comfort, stability and feel.',
      },
      {
        q: 'Are eye drops just salt water?',
        a: 'No. Many contain salt to match natural tears, but lubricating drops also contain active lubricants and other ingredients, and they are made sterile. Salt water made at home isn’t a substitute.',
      },
      {
        q: 'Why are some eye drops milky instead of clear?',
        a: 'Drops that contain oils are often milky rather than clear. Quell’s label states that it appears as a milky brown solution, which comes from its oil-based and natural ingredients.',
      },
    ],
  },

  {
    slug: 'is-it-quell-or-queel',
    title: 'Is it Quell or Queel? The eye drop name, spelled',
    description:
      'The eye drops are spelled Q-U-E-L-L: Quell™, sold at quelldrop.com by Aurora Pharmaceuticals. Common misspellings, and how to avoid look-alike sites.',
    category: 'formula',
    addedOn: '2026-11-12',
    body: [
      {
        p: `It’s Quell, spelled Q-U-E-L-L, and it rhymes with “bell.” The full product name is {brand} Preservative-Free Lubricating Eye Drops, and it’s an eye drop, not a lotion. The official store is quelldrop.com, run by {company}. Spellings like “Queel,” “Quello” or “Quel” won’t reliably find it, and can lead to sites that have nothing to do with it.`,
      },
      { h: 'How to spell Quell' },
      {
        p: `Quell has five letters: Q, U, E, L, L. One E, two L’s, no extra vowels at the end. The name is a short English word, so autocorrect sometimes changes it to “quel,” “quill” or “queue,” and people spelling it from memory try “queel” or “quelle.” If you saw it on a carton, the spelling there is the one to use.`,
      },
      {
        list: [
          `Correct: Quell.`,
          `Common misspellings: Queel, Quello, Quel, Quelle, Kwell.`,
          `Product name: Quell Preservative-Free Lubricating Eye Drops, {size}.`,
          `Website: quelldrop.com, with “drop” attached and no hyphen.`,
        ],
      },
      {
        p: `The name has its own background story; [why it’s called Quell](/guides/why-it-is-called-quell) tells it. This page is only about getting the spelling right.`,
      },
      { h: 'The ™ after the name' },
      {
        p: `On the carton and the site the name appears with a ™ symbol: {brand}. That mark shows the company claims Quell as a trademark for its product. It belongs to {company}, the company that sells Quell and runs quelldrop.com. Its mailing address is {address}.`,
      },
      { h: 'Is Quell a lotion?' },
      {
        p: `No. Searches for “Quell lotion” are common, but Quell is a lubricating eye drop sold in a {size} bottle, and it isn’t a skin cream or a lotion. Its label is clear about where it goes: {warnings}. Don’t apply it to your skin, and don’t use a lotion of a similar name in your eyes. If you’re looking for a lotion, you want a different product altogether.`,
      },
      { h: 'How to find the official Quell site' },
      {
        p: `Typing the address directly is the most reliable way: quelldrop.com. If you search instead, check that the address in the result reads exactly quelldrop.com before you click.`,
      },
      {
        list: [
          `The footer of every page names {company} and gives the address and phone number, {phone}.`,
          `The [Drug Facts](/drug-facts) page shows the panel from the carton.`,
          `The [terms](/terms) name the same company.`,
          `There’s no app to download and no account needed to buy.`,
        ],
      },
      { h: 'Why misspellings can lead to look-alike sites' },
      {
        p: `Look-alike sites often register addresses that differ from a real one by a letter or two, counting on typos. A search for a misspelled name can also bring up ads or pages that only borrow the word. A site that copies product photos but has a different company name, no Drug Facts panel, prices well below normal or payment only by unusual methods is a warning sign. [How to spot a fake eye drop website](/guides/how-to-spot-a-fake-eye-drop-website) walks through what to check.`,
      },
      { h: 'Where Quell is sold' },
      {
        p: `quelldrop.com is the official online store, and it ships only within the US, from Brentwood, Tennessee. If you see Quell offered somewhere you don’t recognize and want to check, call {phone}, {hours}. [Where can I buy Quell?](/guides/where-to-buy-quell) has more.`,
      },
      { h: 'Searching by voice or on a phone' },
      {
        p: `Voice assistants hear “Quell” as several different words, and phone keyboards like to swap it for something more common. When you search by voice, add “eye drops” after the name, so the assistant has context. On a phone, check the search box before you tap search; if it says “quel” or “quill,” fix it first. Saving quelldrop.com as a bookmark or a home-screen shortcut once means you never have to spell it again when it’s time to reorder.`,
      },
      { h: 'Matching the carton in your hand' },
      {
        p: `If you already have a bottle and want more of the same thing, the carton is the most dependable spelling guide around. Check these against what you find online:`,
      },
      {
        list: [
          `The name Quell, with the ™ mark, on the front panel.`,
          `“Preservative-Free Lubricating Eye Drops” under the name.`,
          `The bottle size, {size}.`,
          `The Drug Facts panel on the back, which the site’s [Drug Facts](/drug-facts) page repeats word for word.`,
          `The company name on the carton, {company}.`,
        ],
      },
      {
        p: `If a listing gets any of these wrong, such as a different size, a missing Drug Facts panel or a different company, it isn’t the product you have. A bottle that looks right but has a broken seal on arrival from the official store is replaced within {returnDays} days of delivery.`,
      },
      { h: 'Saying it out loud' },
      {
        p: `If you’re telling a pharmacist or a friend about it, say “Quell, like the word that means to calm,” and spell it if they look unsure. Writing “quelldrop.com” on a note is a simple way to make sure someone finds the right site.`,
      },
    ],
    faq: [
      {
        q: 'How do you spell Quell eye drops?',
        a: 'Q-U-E-L-L. The full name is Quell Preservative-Free Lubricating Eye Drops, and the official site is quelldrop.com.',
      },
      {
        q: 'Is Queel the same as Quell?',
        a: '“Queel” is a common misspelling. The eye drops are spelled Quell, with one E and two L’s, and are sold at quelldrop.com.',
      },
      {
        q: 'Is Quell a lotion?',
        a: 'No. Quell is a lubricating eye drop, and its label’s warning reads: {warnings}. It isn’t meant for skin, and a lotion shouldn’t go in the eyes.',
      },
      {
        q: 'Who makes Quell eye drops?',
        a: 'Quell is sold by {company}, which owns the trademark and runs quelldrop.com. Its address is {address}.',
      },
    ],
  },

  {
    slug: 'dry-eyes-on-a-long-train-ride',
    title: 'Dry eyes on a long train ride',
    description:
      'Recirculated air, hours of reading or screens, and sleeping in a seat can dry your eyes on a long train trip. How to pack eye drops and keep them in range.',
    category: 'using',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Long train rides dry the eyes because the car’s heating and cooling system recirculates dry air, people read or watch screens for hours with fewer blinks, and sleeping upright in a seat often leaves the eyes partly open or under a vent. Pack eye drops in a small bag you keep at your seat, away from a sunny window, and use them as the label directs.`,
      },
      { h: 'Why your eyes dry out on a train' },
      {
        p: `A passenger car is a sealed space with forced-air heating and cooling, much like an office building on wheels. Heated air in winter and cooled air in summer are both drier than you’d like, and the vents along the wall or overhead keep it moving. On a trip that runs from one morning to the next across several states, that adds up.`,
      },
      {
        list: [
          `Vents near the window or overhead blow across your face for hours.`,
          `The car’s climate system runs constantly, so there’s no break from it.`,
          `Watching scenery, reading or using a laptop reduces blinking.`,
          `Dozing in a seat can leave the eyes slightly open, so the surface dries.`,
        ],
      },
      { h: 'Reading, screens and the view' },
      {
        p: `Trains are good for reading, working and watching movies, and all three cut down blinking. Watching the landscape roll by is easier on the eyes because you look into the distance, but people still blink less while staring. Every half hour or so, look away, close your eyes for a few seconds and blink fully. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why screens make this worse.`,
      },
      { h: 'Sleeping in a seat or a roomette' },
      {
        p: `Sleeping sitting up, with your head against a window or a vent, often means air blows straight across your face all night. In a sleeper, the room’s vent is usually adjustable.`,
      },
      {
        list: [
          `Close or redirect the vent closest to your face before you sleep.`,
          `Use a sleep mask; it blocks light and some of the airflow.`,
          `Lean away from the window, which can be cold in winter and hot in summer sun.`,
          `If your eyes feel dry when you wake up, wait a few minutes and blink before you start reading.`,
        ],
      },
      { h: 'Carrying eye drops on a train' },
      {
        p: `Most long-distance passenger trains in the US don’t put you through airport-style security screening, so the TSA’s liquids rule for airplanes doesn’t usually come into it. Each railroad sets its own carry-on rules, though, so check its baggage policy before you pack. A small bottle of eye drops typically fits easily in a personal item.`,
      },
      {
        list: [
          `Pack the bottle in a small bag you keep at your seat, not in a checked bag or the luggage rack at the end of the car.`,
          `Keep the cap on and the bottle upright in a zip pocket.`,
          `Bring the carton or a photo of the label if you like to have the directions with you.`,
          `If you’re flying one leg of the trip, see [Dry eyes on a plane](/guides/dry-eyes-on-a-plane) for airport rules.`,
        ],
      },
      { h: 'Keeping the bottle out of a hot window seat' },
      {
        p: `A window seat in afternoon sun gets warm, and a bottle left on the sill or tucked against the glass heats up with it. Quell’s label gives a storage range: {storage}. Keep the bottle in a bag on the floor or the aisle side, out of direct sun. On a winter route through the mountains, the window side can get cold too.`,
      },
      { h: 'Using drops on a moving train' },
      {
        p: `Trains sway, which makes aiming harder. The restroom is a natural place to wash your hands, but a moving restroom isn’t always the steadiest spot for a drop. Washing your hands there, then returning to your seat while the train is on a smooth stretch, often works better.`,
      },
      {
        list: [
          `Wash your hands in the restroom, or use hand sanitizer and let it dry.`,
          `Sit back with your head against the headrest.`,
          `Pull down your lower lid, look up and squeeze one drop.`,
          `Close your eyes gently for a moment, then do the other eye.`,
          `Recap the bottle right away. {tip}.`,
        ],
      },
      {
        p: `The label sets the count: {directions}. On a long ride that might mean one in the morning, one at lunch in the dining car, and one in the evening. Quell is {milky}, so the bottle looks the same in a dim car as in daylight; if the color has changed from how it arrived, don’t use it.`,
      },
      { h: 'Ordering before your trip' },
      {
        p: `Quell ships only within the US, from Brentwood, Tennessee, and doesn’t promise a delivery date, so order well before you leave. Shipping is {shipping}, or free with {freeBottles} bottles. You can [order as a guest](/#buy). If your eyes stay sore or your vision changes after the trip, see an eye doctor rather than waiting it out.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry on trains?',
        a: 'Train cars recirculate heated or cooled air through vents, and reading, screens and dozing in a seat all reduce blinking, so the tear film dries faster than usual.',
      },
      {
        q: 'Can I bring eye drops on a train?',
        a: 'Most US long-distance trains don’t use airport-style screening, but each railroad sets its own carry-on rules. Check its baggage policy, and keep drops in a bag at your seat.',
      },
      {
        q: 'Should I keep eye drops by the train window?',
        a: 'No. A sunny window can get warm, and Quell’s label gives a storage range: {storage}. Keep the bottle in a bag out of direct sun.',
      },
      {
        q: 'How do I sleep on a train without drying out my eyes?',
        a: 'Close or redirect the vent near your face, wear a sleep mask, and lean away from the window. Blink a few times before reading when you wake up.',
      },
    ],
  },
]
