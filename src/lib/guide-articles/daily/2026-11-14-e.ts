import type { Guide } from '@/lib/guide-types'
export const DAILY_20261114_E: Guide[] = [
  /*
   * Sources fetched 2026-11-14 for dry-eye-relief-kansas-city-mo:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00003947.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00003947.csv
   *   (KANSAS CITY INTL AP, elev 306.3 m: annual precip 39.30 in; Jan 1.16 (driest),
   *   May 5.32, Jun 5.25; annual snow 18.2 in, Feb 5.9, Jan 4.9; Jan high 38.4 F,
   *   low 19.5; Jul high 88.3, low 68.1; 107.0 nights at or below 32 F; 25.8 days
   *   with a high at or below 32 F; 36.3 days at or above 90 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (KANSAS CITY, MO, WBAN 03947: Jan 78/64, Apr 77/56, Aug 86/59, Oct 81/56,
   *   Dec 79/65, annual 81/60, morning/afternoon)
   */
  {
    slug: 'dry-eye-relief-kansas-city-mo',
    title: 'Dry eye relief in Kansas City, Missouri',
    description:
      'Prairie wind, muggy summers and about 107 freezing nights a year: NOAA’s Kansas City numbers and practical dry eye relief for the metro.',
    category: 'local',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Dry eye relief in Kansas City starts with the air you sit in. Summers are humid but spent under air conditioning, winters bring more than a hundred freezing nights and a furnace that runs for months, and wind crosses the open plains in every season. Aim vents away from your face, take blink breaks at screens, and use a lubricating drop as its label directs. Pain or blurred vision that lingers needs an eye doctor.`,
      },
      { h: 'What NOAA’s Kansas City records show' },
      {
        p: `The long weather record for the metro comes from Kansas City International Airport, north of the Missouri River in Platte County, at about 1,005 feet above sea level. NOAA’s 1991 to 2020 climate normals for that station describe a place with a hard swing between seasons:`,
      },
      {
        list: [
          `About 39.3 inches of precipitation in a normal year, most of it from April through September.`,
          `May is the wettest month at 5.32 inches; January is the driest at 1.16.`,
          `Roughly 18 inches of snow a winter, with February the snowiest month at 5.9 inches.`,
          `A January normal high of 38.4°F and a low of 19.5°F.`,
          `About 107 nights a year at or below freezing, and close to 26 days when the high never gets above 32°F.`,
          `A July normal high of 88.3°F, with about 36 days a year reaching 90°F or more.`,
        ],
      },
      {
        p: `That range matters for eyes because each end of it sends people indoors into heated or cooled air. Cold air holds little water to begin with, and heating it in a house or office drops the relative humidity further. Hot, sticky air gets run through an air conditioner, which dries it as it cools.`,
      },
      { h: 'Humidity that looks fine on paper' },
      {
        p: `NOAA’s humidity table for the Kansas City airport gives an annual average of 81 percent in the morning and 60 percent in the afternoon. The driest afternoons come in April and October, both at 56 percent. December afternoons average 65 percent, which surprises people who feel parched every winter.`,
      },
      {
        p: `The catch is that those readings are taken outside. When 20°F air with high relative humidity is pulled into a house and warmed to 70°F, its relative humidity falls sharply, because warm air can hold far more water than the cold air did. That’s why a January evening on the couch in Overland Park or Lee’s Summit can feel drier than a windy October afternoon outdoors. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) walks through the indoor side.`,
      },
      { h: 'Wind off the plains' },
      {
        p: `Kansas City sits where the wooded hills of Missouri give way to open prairie to the west, and wind has a long run before it reaches town. Moving air pulls water from the tear film faster than still air does, whatever the temperature. A few local situations stand out:`,
      },
      {
        list: [
          `Standing in an open parking lot at Arrowhead on a December game day, with wind chill and tailgate smoke at the same time.`,
          `Spring afternoons in April, when the air is at its driest and gusty fronts come through.`,
          `Riding a bike on the Trolley Track Trail or along the Riverfront with no windbreak.`,
          `Walking the Country Club Plaza during the holiday lights, when the cold and the crowd keep you outside longer than planned.`,
        ],
      },
      {
        p: `Wraparound sunglasses or clear safety glasses cut the airflow across your eyes. Smoke from a barbecue pit or a fire ring is an irritant too, so it helps to stand upwind of it.`,
      },
      { h: 'Indoors: offices, cars and long screen days' },
      {
        p: `Most of a Kansas City weekday happens inside a building or a car. Commutes on I-35, I-70 and I-435 can run long, and dashboard vents aimed at your face blow dry air straight across the eye. Point them at your chest or the windshield. At a desk, the bigger factor is concentration: people blink less while reading a screen, and partial blinks leave part of the eye’s surface uncovered. Every twenty minutes or so, look across the room and blink fully a few times. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why that works.`,
      },
      {
        p: `A small humidifier in the bedroom or home office can help during furnace season. Clean it as the maker says, and keep the reading in a comfortable range rather than fogging the windows.`,
      },
      { h: 'Using a lubricating drop the way the label says' },
      {
        p: `Quell is an over-the-counter lubricating drop. Its Drug Facts Uses line reads: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the problem that heated rooms and plains wind both cause. The directions read: {directions}. Before every use, follow the handling line: {tip}.`,
      },
      {
        p: `Check the caution line before the first drop: {warnings}. The label’s “Do not use” line reads: {doNotUse}. The storage line also matters in this climate: {storage}. A car at the Legends or in a downtown garage can freeze in January and bake in July, so keep the bottle in a bag or pocket that comes inside with you. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell delivered in Kansas City' },
      {
        p: `Quell ships from Brentwood, Tennessee, to addresses across the United States, including both the Missouri and Kansas sides of the metro. Checkout works as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We don’t promise a delivery date, but you’ll get an email with tracking once the order ships. An unopened bottle can be refunded within {returnDays} days of delivery without sending it back. See the [Kansas City page](/eye-drops/kansas-city-mo) and the [Missouri page](/eye-drops/state/missouri), or order from the [home page](/#buy).`,
      },
      { h: 'When it’s a question for an eye doctor' },
      {
        p: `A drop is meant for ordinary dryness and irritation. Working out the cause of symptoms that keep coming back, and what to do about them, belongs to an eye doctor. The label sets out when to stop: {stopUse}`,
      },
      {
        p: `If you’re unsure whether what you feel is routine, try the [dry eye self-check](/self-check); it’s not a diagnosis, just a few questions and suggested next steps. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the warning signs worth acting on quickly.`,
      },
    ],
    faq: [
      {
        q: 'Where can I get dry eye relief in Kansas City?',
        a: `For everyday dryness, a lubricating drop used as labeled and fewer hours in front of vents and fans are a practical start. Quell ships to the Kansas City area from Brentwood, Tennessee, and an eye doctor is the right stop for symptoms that persist or hurt.`,
      },
      {
        q: 'Why are my eyes so dry in Kansas City in the winter?',
        a: `The airport station averages about 107 freezing nights a year, so furnaces run for months. Heating cold air lowers its relative humidity indoors, and that drier air pulls moisture from the eye’s surface.`,
      },
      {
        q: 'Is Kansas City windy?',
        a: `Wind crosses the open plains west of the city with little to slow it, and NOAA’s records show April and October afternoons are the driest of the year at the airport, both averaging 56 percent humidity. Breezy, dry afternoons like those speed tear evaporation.`,
      },
      {
        q: 'How much snow does Kansas City get?',
        a: `NOAA’s 1991 to 2020 normals for Kansas City International Airport put it at about 18.2 inches a winter, with February the snowiest month at 5.9 inches.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-14 for dry-eye-relief-st-louis-mo:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013994.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013994.csv
   *   (ST LOUIS LAMBERT INTL AP, elev 161.8 m: annual precip 41.70 in; May 4.82,
   *   Apr 4.73, Feb 2.23 (driest), Sep 2.96; annual snow 16.6 in, Jan 5.7; Jan high
   *   40.4 F, low 23.8; Jul high 89.6, low 71.1; 84.9 nights at or below 32 F;
   *   19.3 days with a high at or below 32 F; 47.1 days at or above 90 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (ST. LOUIS, MO, WBAN 13994: Jan 79/65, Apr 76/53, Aug 85/55, Sep 85/54,
   *   Oct 82/54, Dec 80/66, annual 81/58, morning/afternoon)
   */
  {
    slug: 'dry-eye-relief-st-louis-mo',
    title: 'Dry eye relief in St. Louis, Missouri',
    description:
      'River-valley summers near 90°F, then months of furnace heat. What NOAA’s Lambert records say about dry eyes in St. Louis, and what helps.',
    category: 'local',
    addedOn: '2026-11-14',
    body: [
      {
        p: `St. Louis eyes dry out mostly indoors. The city’s river-valley summers are hot and sticky, so people live under air conditioning from June through September, and then the heat comes on for a winter of about 85 freezing nights. Both kinds of conditioned air speed evaporation from the eye. Keep vents off your face, blink fully during screen work, and use a lubricating drop exactly as labeled. Persistent pain or vision changes call for an eye doctor.`,
      },
      { h: 'Where the rivers meet, and what the weather does' },
      {
        p: `The Missouri River joins the Mississippi just north of the city, and St. Louis grew up along the bluffs above them. NOAA’s long record comes from Lambert International Airport, about 531 feet above sea level. Its 1991 to 2020 normals, in short:`,
      },
      {
        list: [
          `About 41.7 inches of precipitation a year, with May the wettest month at 4.82 inches.`,
          `February is the driest at 2.23 inches, and September is close behind at 2.96.`,
          `About 16.6 inches of snow a winter, most of it in January.`,
          `July averages a high of 89.6°F and a low of 71.1°F, and about 47 days a year reach 90°F or higher.`,
          `January runs from a normal high of 40.4°F to a low of 23.8°F.`,
          `Close to 85 nights a year fall to freezing or below, and about 19 days never climb above 32°F.`,
        ],
      },
      {
        p: `A July low of 71°F says a lot: summer nights here barely cool off, so the air conditioner rarely gets a break.`,
      },
      { h: 'Muggy outside, dry inside' },
      {
        p: `NOAA’s humidity table for Lambert shows August and September mornings averaging 85 percent relative humidity, with afternoons near 55 percent. Air that heavy sends most people to cooled rooms, and an air conditioner removes water from the air as part of how it works. A day spent at a desk under a ceiling diffuser, a drive home on I-64 with the dash vents open, and an evening in front of a window unit can add up to a dozen hours of dried, moving air.`,
      },
      {
        p: `A simple fix in the car is to aim the vents at your chest or feet. At home, notice where the supply registers blow. A vent pointed at the couch or the pillow is worth redirecting with an inexpensive deflector.`,
      },
      { h: 'The dry stretch: April and fall afternoons' },
      {
        p: `The same table puts the driest afternoons at Lambert in April, at 53 percent, with September and October close behind at 54. Those are the months St. Louis spends outside. Think of a breezy spring evening at Busch Stadium, a walk around the Grand Basin in Forest Park, or a bike ride on the riverfront trail below the Arch. Sun, wind and low afternoon humidity together can dry eyes faster than a humid July day indoors.`,
      },
      {
        p: `Sunglasses, especially wraparound frames, reduce both glare and the air moving across the eye. Squinting into the sun also replaces full blinks with half ones, so shade helps more than you’d expect.`,
      },
      { h: 'Winter in brick houses and big buildings' },
      {
        p: `Much of the city’s housing stock is old brick, and much of its workday happens in hospitals, universities and offices that keep the heat running. Whether a home runs a forced-air furnace or an older boiler, warming cold winter air lowers its relative humidity indoors. NOAA’s December afternoons at Lambert average 66 percent outside, but that number doesn’t follow the air through the front door.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom during heating season, and clean it on the maker’s schedule.`,
          `Keep a space heater from blowing toward your face while you read or watch TV.`,
          `Step away from a laptop every so often and blink slowly a few times; screens cut blinking.`,
          `Drink water through the day, since heated rooms dry everything, including you.`,
        ],
      },
      {
        p: `The guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more on setting up a room for the cold months.`,
      },
      { h: 'Where Quell fits' },
      {
        p: `Quell is a preservative-free lubricating drop sold over the counter. The Drug Facts Uses line reads: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, and the oil layer is what slows evaporation in a heated or air-conditioned room. Follow the directions as written: {directions}. Keep the tip clean as the label says: {tip}.`,
      },
      {
        p: `Read the caution before you start: {warnings}. The label’s “Do not use” line reads: {doNotUse}. The storage range also applies to cars parked at a MetroLink lot in August or a driveway in January: {storage}. Keep the bottle with you rather than in the glove box. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering to a St. Louis address' },
      {
        p: `Quell ships across the United States from Brentwood, Tennessee, including to the city, St. Louis County and the Metro East. You can check out as a guest. Shipping is {shipping}, and an order of {freeBottles} or more bottles ships free. We don’t promise a delivery date; a shipping email with tracking arrives when the order leaves. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t have to send them back. The [St. Louis page](/eye-drops/st-louis-mo) and [Missouri page](/eye-drops/state/missouri) have local details, and you can order from the [home page](/#buy).`,
      },
      { h: 'Symptoms that need more than a drop' },
      {
        p: `Lubricating drops are for routine dryness and irritation. If symptoms keep returning, working out why and what to do about it is a job for an eye doctor. The label’s stop-use line reads: {stopUse}`,
      },
      {
        p: `Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the signs worth acting on. The [dry eye self-check](/self-check) can help you sort out next steps; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Where can I find dry eye relief in St. Louis?',
        a: `Start with the air around you: redirect vents, run a humidifier in heating season, and take blink breaks at screens. Quell, a lubricating drop, ships to St. Louis from Brentwood, Tennessee, and an eye doctor should see symptoms that persist.`,
      },
      {
        q: 'Why do my eyes feel dry in St. Louis summers when it’s so humid?',
        a: `Most summer hours are spent in air-conditioned rooms and cars, and air conditioning removes water from the air as it cools it. Your eyes react to that indoor air, not to the muggy air outside.`,
      },
      {
        q: 'What is the driest month in St. Louis?',
        a: `By precipitation, February. NOAA’s 1991 to 2020 normals for Lambert International Airport give it 2.23 inches. By afternoon humidity, April is the driest at 53 percent.`,
      },
      {
        q: 'How many days a year does St. Louis hit 90 degrees?',
        a: `About 47, according to NOAA’s 1991 to 2020 normals for Lambert International Airport. July’s normal high there is 89.6°F.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-14 for dry-eye-relief-oklahoma-city-ok:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013967.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013967.csv
   *   (OKLAHOMA CITY WILL ROGERS AP, elev 391.7 m: annual precip 36.39 in; May 5.31
   *   (wettest), Jan 1.32 (driest), Nov 1.68, Dec 1.79; annual snow 6.7 in; Jan high
   *   49.3 F, low 27.0; Jul high 93.1, Aug 92.2; 73.4 days at or above 90 F;
   *   72.2 nights at or below 32 F; 7.2 days with a high at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (OKLAHOMA CITY, OK, WBAN 13967: Jan 78/59, Apr 78/52, Jul 82/51, Aug 82/50,
   *   Dec 78/58, annual 80/55, morning/afternoon)
   * Wind: no wind speeds used; the NWS office in Norman is named only as the
   * forecast office for the metro.
   */
  {
    slug: 'dry-eye-relief-oklahoma-city-ok',
    title: 'Dry eye relief in Oklahoma City, Oklahoma',
    description:
      'Wind, red-dirt dust, 73 days a year at 90°F and sharp winter fronts. NOAA’s Oklahoma City numbers and simple ways to ease dry eyes.',
    category: 'local',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Oklahoma City is hard on eyes because the air rarely sits still. Wind sweeps across the plains in every season, it carries fine red dust on dry days, summer afternoons are hot and the drier side of humid, and winter fronts arrive fast. Shield your eyes outdoors, keep car and room vents off your face, and use a lubricating drop as its label directs. Eye pain or blurry vision that won’t clear belongs with an eye doctor.`,
      },
      { h: 'Oklahoma City’s climate, by the numbers' },
      {
        p: `NOAA’s main record for the city comes from Will Rogers World Airport, on the southwest side at roughly 1,285 feet. The 1991 to 2020 normals there show a hotter, drier and less snowy place than most of the Midwest:`,
      },
      {
        list: [
          `About 36.4 inches of precipitation in a normal year.`,
          `May is by far the wettest month at 5.31 inches; January is the driest at 1.32, and November and December each stay under 1.8.`,
          `Only about 6.7 inches of snow in an average winter.`,
          `July averages a high of 93.1°F, and about 73 days a year reach 90°F or more.`,
          `January runs from a normal high of 49.3°F to a low of 27.0°F, with about 72 nights a year at or below freezing.`,
          `Fewer than eight days a year never get above freezing.`,
        ],
      },
      {
        p: `Put together, that’s a winter of frequent freezes and quick thaws, and a long summer when the air conditioner runs from May into October.`,
      },
      { h: 'Wind and the dust it carries' },
      {
        p: `The National Weather Service office in Norman forecasts for the metro, and its wind advisories are a familiar part of life here. Wind matters for eyes in two ways. First, moving air pulls water from the tear film faster than still air does, so even a mild day can feel scratchy on a gusty afternoon. Second, Oklahoma’s red soil turns to fine dust when it’s dry, and the wind lifts it off construction sites, ball fields and plowed ground.`,
      },
      {
        p: `Dust and grit are irritants. Quell’s label describes it as a protectant against further irritation, and the practical steps come before any drop:`,
      },
      {
        list: [
          `Wear wraparound sunglasses or safety glasses on windy days, especially near open dirt.`,
          `Turn your back to a gust instead of squinting into it.`,
          `Don’t rub your eyes with dusty hands; wash up first.`,
          `Close the car’s outside-air setting when you’re behind a truck on a dirt road.`,
        ],
      },
      { h: 'Summer: hot, bright and drier than it looks' },
      {
        p: `NOAA’s humidity table for Oklahoma City shows mornings in the 80s, then afternoon averages that fall to 51 percent in July and 50 percent in August, the lowest of the year. Combine that with highs in the 90s and steady wind, and an afternoon at a Bricktown ballgame, a Thunder watch party on a patio, or a walk along the Oklahoma River trails can leave eyes dry and tired.`,
      },
      {
        p: `Then everyone goes inside. Air conditioning dries air as it cools it, and a car that’s been sitting in a lot reaches temperatures far above the storage range on Quell’s label. Aim dash vents low, and keep the bottle in your bag, not the console.`,
      },
      { h: 'Winter fronts and heated rooms' },
      {
        p: `Oklahoma winters are short on snow but full of swings. A cold front can drop the temperature by tens of degrees in an afternoon, and the wind behind it is often dry and cutting. January afternoons at the airport still average 59 percent humidity outside, but once that cold air is heated to room temperature indoors, its relative humidity falls well below that. Furnaces, space heaters and dashboard heat all do the same thing.`,
      },
      {
        p: `A bedroom humidifier helps during the months the heat runs, and so does keeping a heater from blowing across your face. For long sessions at a laptop or phone, look away and blink fully every so often. [Screens and your tear film](/guides/screens-and-your-tear-film) explains the connection, and [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more for the cold months.`,
      },
      { h: 'What Quell is and how to use it' },
      {
        p: `Quell is an over-the-counter, preservative-free lubricating drop. The Uses line on its Drug Facts panel reads: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, which matters in wind and in conditioned air alike. The label directions read: {directions}. And this line matters on a dusty day: {tip}.`,
      },
      {
        p: `Before using it, read the caution: {warnings}. The label’s “Do not use” line reads: {doNotUse}. The storage line reads: {storage}. With more than seventy days a year at 90°F or hotter, a parked car in Oklahoma City is the wrong place for a bottle. The full label is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Oklahoma City' },
      {
        p: `Quell ships from Brentwood, Tennessee, to addresses across the United States, including Oklahoma City, Edmond, Norman, Moore and the rest of the metro. Guest checkout is the only kind there is, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. There’s no promised delivery date, but a tracking email goes out when your order ships. If you change your mind, an unopened bottle can be refunded within {returnDays} days of delivery with nothing to return. Visit the [Oklahoma City page](/eye-drops/oklahoma-city-ok) or the [Oklahoma page](/eye-drops/state/oklahoma), or order from the [home page](/#buy).`,
      },
      { h: 'When to see an eye doctor instead' },
      {
        p: `If grit seems stuck in your eye, if it hurts, or if your vision changes, a lubricating drop isn’t the answer. Working out what’s going on belongs to an eye doctor. The label’s stop-use line is explicit: {stopUse}`,
      },
      {
        p: `See our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for the signs that shouldn’t wait. For everyday dryness, the [dry eye self-check](/self-check) offers a few questions and next steps; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Where can I get dry eye relief in Oklahoma City?',
        a: `For routine dryness, shield your eyes from wind and dust, redirect vents and use a lubricating drop as labeled. Quell ships to Oklahoma City from Brentwood, Tennessee, and an eye doctor should look at pain, vision changes or symptoms that persist.`,
      },
      {
        q: 'Why are my eyes so dry and scratchy in Oklahoma?',
        a: `Steady wind pulls moisture from the tear film, and on dry days it carries fine dust that irritates the eye’s surface. Long summers of air conditioning and winters of furnace heat add to it.`,
      },
      {
        q: 'Does wind make dry eyes worse?',
        a: `Moving air speeds evaporation from the tear film, so a windy day can leave eyes feeling drier than a still one at the same temperature. Wraparound sunglasses cut the airflow across your eyes.`,
      },
      {
        q: 'How hot does Oklahoma City get in the summer?',
        a: `NOAA’s 1991 to 2020 normals for Will Rogers World Airport give July a normal high of 93.1°F, with about 73 days a year at 90°F or hotter.`,
      },
    ],
  },
  {
    slug: 'what-if-no-one-is-home-when-eye-drops-arrive',
    title: 'What if no one is home when eye drops arrive?',
    description:
      'Your Quell package can sit at the door for hours. How to use the tracking email, when heat or cold matters, and what to check before using the bottle.',
    category: 'shipping',
    addedOn: '2026-11-14',
    body: [
      {
        p: `If no one is home, the package is usually left at your door or handled however the delivering carrier normally handles your address. The tracking email we send when the order ships lets you watch its progress and plan around it. A few hours on a porch in mild weather is fine; in real heat or cold, bring it in soon and check the bottle before use.`,
      },
      { h: 'Watching the order with the tracking email' },
      {
        p: `When your order ships from Brentwood, Tennessee, you get an email with a tracking link. That link is the most useful thing you have for timing, because Quell doesn’t promise a delivery date. Open it in the morning and again around midday; once it says “out for delivery,” you know roughly which day to expect it, even if you won’t be there. Our guide on [how to track your order](/guides/how-to-track-your-order) explains the statuses and what to do if the link isn’t updating.`,
      },
      {
        p: `If you can’t find the email, check spam and promotions folders for a message from the store. You can also look up your order on the [orders page](/orders) with your order number and the email you used at checkout.`,
      },
      { h: 'Is it okay if eye drops sit on the porch?' },
      {
        p: `It depends on the weather and how long it sits. The storage line on the Quell label reads: {storage}. A box in the shade on a spring afternoon is well within that range. A box in direct July sun on a south-facing step, or on a stoop through a night that drops into the teens, may not be.`,
      },
      {
        list: [
          `Mild day, shaded spot, a few hours: nothing special to do beyond bringing it in when you get home.`,
          `Hot day, full sun: the inside of a cardboard box on hot concrete gets warmer than the air. Bring it in as soon as you can and let the bottle rest at room temperature before use.`,
          `Freezing night: same idea. Let the bottle come back to room temperature on its own, and look at it before using it.`,
        ],
      },
      {
        p: `For more on what temperature exposure in transit means, see [eye drops shipped in hot or cold weather](/guides/eye-drops-shipped-in-hot-or-cold-weather).`,
      },
      { h: 'Ways to make sure someone gets it' },
      {
        p: `You can’t pick a delivery window at checkout, but you can choose where the package goes. Some options that help when your home is empty during working hours:`,
      },
      {
        list: [
          `Ship it to your workplace, if your employer allows personal deliveries. Our guide to [shipping eye drops to your work address](/guides/shipping-eye-drops-to-your-work-address) covers how to write the address so it reaches your desk.`,
          `Send it to a relative or neighbor who’s home during the day. Put your own name on the order and theirs in the address line if needed.`,
          `Ask a neighbor to grab the box when the tracking says it’s been delivered.`,
          `If your building has a front desk or mailroom, check how it handles deliveries in your name.`,
        ],
      },
      {
        p: `The address you type at checkout is where it goes, so double-check apartment and suite numbers before you place the order. Quell ships only within the United States.`,
      },
      { h: 'What to check when you open the box' },
      {
        p: `Once the package is inside, take a minute before the first drop:`,
      },
      {
        list: [
          `Confirm the order is right: the number of bottles, each at {size}.`,
          `Look at the seal on each bottle. A broken seal is a reason to contact us, not to use it.`,
          `Look at the liquid. The label explains what normal looks like: {appearance}`,
          `Read the label’s “Do not use” line, which reads: {doNotUse}.`,
          `Read the caution on the label: {warnings}.`,
        ],
      },
      {
        p: `If the bottle has been through a hot or freezing afternoon and something looks off compared with that description, don’t use it; get in touch instead.`,
      },
      { h: 'What if the package is damaged or missing?' },
      {
        p: `If a box arrives crushed, wet or torn and a bottle is damaged, has a broken seal, or the order is wrong, we replace it. Reach us through the [contact page](/about#contact) or at {phone}, {hours}, and have your order number handy. A photo of the damage helps.`,
      },
      {
        p: `If tracking says delivered and you can’t find it, look around the property first: side doors, behind planters, a garage step, a neighbor’s porch with a similar number. Check with anyone else in the household. If it still hasn’t turned up, contact us with your order number and we’ll work through it with you.`,
      },
      { h: 'Changing your mind after it arrives' },
      {
        p: `If the order arrives and you decide you don’t need it, unopened bottles can be refunded within {returnDays} days of delivery, and you don’t have to ship them back. The [returns guide](/guides/topic/returns) covers the details.`,
      },
      { h: 'Using the drops once they’re in' },
      {
        p: `When everything checks out, the label directions are short: {directions}. Keep the tip clean every time: {tip}. Store opened bottles in the same range as unopened ones, away from sunny windowsills and car dashboards. The full label is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Will my eye drops be left at the door if I’m not home?',
        a: `In most cases the package is handled the way the delivering carrier usually handles your address, which often means leaving it at the door. Watch the tracking link in your shipping email so you know when to expect it.`,
      },
      {
        q: 'Can eye drops sit outside in a package for hours?',
        a: `In mild weather, a few hours in the shade isn’t a concern. Quell’s storage line reads “{storage},” so in strong sun or a hard freeze, bring the box in as soon as you can and look at the bottle before use.`,
      },
      {
        q: 'Can I choose a delivery time for my eye drop order?',
        a: `No. Checkout doesn’t offer delivery windows and Quell doesn’t promise a delivery date. You can choose the address, such as your workplace, and follow progress with the tracking email.`,
      },
      {
        q: 'What should I do if my eye drop package was damaged on the porch?',
        a: `Contact us with your order number. Damaged, incorrect or broken-seal orders are replaced, and a photo of the damage helps.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-photographer',
    title: 'Christmas gifts for a photographer with dry eyes',
    description:
      'Photographers squint through viewfinders and edit for hours. Gift ideas for their eyes, starting with the label check every giver should make first.',
    category: 'seasonal',
    addedOn: '2026-11-14',
    body: [
      {
        p: `A good Christmas gift for a photographer with dry eyes supports the work behind the camera: lubricating drops for long editing nights and cold shoots, a lens-safe cleaning kit, a warm hat with a brim, and a desk humidifier. Before you buy any eye drop, read its label for allergy cautions. Quell’s says: {warnings}. Order early, since we don’t promise arrival by a date.`,
      },
      { h: 'Check the caution before anything else' },
      {
        p: `Eye drops are a personal item, and a gift drop has to suit the person who uses it. Quell’s label carries this caution: {warnings}. If your photographer has an egg or bird allergy, or you don’t know, skip the drops and pick something else from this list. The full panel is on the [Drug Facts page](/drug-facts) if you want to read every line before you order.`,
      },
      {
        p: `It’s also fair to ask. “Do your eyes get dry when you edit?” is an easy question to slip into conversation in early December.`,
      },
      { h: 'Why photographers’ eyes dry out' },
      {
        p: `A photographer’s day has a few habits built in that strain the tear film:`,
      },
      {
        list: [
          `Staring through a viewfinder. One eye is pressed to the eyecup, the other is often half-closed, and blinking slows while they wait for the moment.`,
          `Editing on a bright monitor for hours. People blink less while concentrating on a screen, and partial blinks leave part of the eye exposed.`,
          `Shooting outdoors in winter. Cold wind and dry air speed evaporation from the eye’s surface.`,
          `Long days at events. Weddings and holiday parties keep them on their feet in heated rooms for eight or ten hours.`,
        ],
      },
      {
        p: `Our guide on [dry eyes for photographers](/guides/dry-eyes-for-photographers) covers the workday side in more detail, if you want to understand the problem before you shop.`,
      },
      { h: 'Gift ideas for the camera bag' },
      {
        list: [
          `A bottle or two of lubricating drops, once you’ve checked the allergy caution. Quell is {size}, small enough for a side pocket of a camera bag.`,
          `A lens cleaning kit with a blower and microfiber cloths. Keeping grit off the viewfinder eyepiece also keeps it away from the eye pressed against it.`,
          `A replacement eyecup for their camera body. Old eyecups get stiff and let wind and light leak in.`,
          `Fingerless or touchscreen gloves for winter shoots, so they spend less time with bare, cold hands and are less tempted to rub their eyes with them.`,
          `A brimmed hat or a beanie with a short visor. Shade cuts glare and squinting outdoors.`,
          `A pair of wraparound sunglasses for scouting locations on windy, bright days.`,
        ],
      },
      { h: 'Gifts for the editing desk' },
      {
        p: `Editing is where many photographers notice dryness most, usually late at night after a shoot. A few ideas for the desk:`,
      },
      {
        list: [
          `A small desk humidifier for the home office, especially during furnace season.`,
          `A monitor light bar that lights the desk without shining toward their eyes.`,
          `A simple timer or a smart speaker routine that reminds them to look up from the screen every twenty minutes.`,
          `A comfortable desk lamp with a warm setting, so they aren’t editing in a dark room lit only by the monitor.`,
        ],
      },
      {
        p: `None of these replace good habits, but they make the habits easier.`,
      },
      { h: 'If you give eye drops, how they’re meant to be used' },
      {
        p: `Quell is an over-the-counter lubricating eye drop. Its Uses line reads: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is useful for someone who spends winter afternoons in the wind and evenings at a screen. The directions on the label read: {directions}. Mention the handling line too, because camera bags are not clean places: {tip}.`,
      },
      {
        p: `One practical note for the gift card: the storage line reads {storage}. A camera bag left in the car during a January shoot or a July wedding can go outside that range, so the bottle belongs in a jacket pocket or a bag that comes inside.`,
      },
      { h: 'Ordering in time for Christmas' },
      {
        p: `Quell ships from Brentwood, Tennessee, to US addresses only. We don’t promise a delivery date, so the honest advice is to order early in December and not count on a last-minute arrival. You’ll get an email with tracking when it ships. Checkout doesn’t offer gift wrap or a gift message, so if you send it straight to the photographer, it arrives as a plain order with your name on it. Many givers ship to themselves and wrap it at home.`,
      },
      {
        p: `Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. If they already have drops they like, an unopened bottle can be refunded within {returnDays} days of delivery without being sent back. You can order from the [home page](/#buy), and our [gift guides](/guides/topic/seasonal) have more ideas for the season.`,
      },
      { h: 'A gift isn’t a substitute for an eye exam' },
      {
        p: `If your photographer mentions eye pain, blurry vision that doesn’t clear, or dryness that never lets up, the better gift is encouragement to see an eye doctor. The label is direct about when to stop using a lubricating drop: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What do you get a photographer for Christmas?',
        a: `Practical gear that supports long shoots and editing sessions works well: a lens cleaning kit, a new eyecup, winter gloves, a desk humidifier, or lubricating eye drops if the person has no egg or bird allergy.`,
      },
      {
        q: 'Are eye drops a good gift for a photographer?',
        a: `They can be, for someone whose eyes get dry from viewfinder work and editing. Check the label first: Quell’s caution reads “{warnings}.” If you aren’t sure, choose a different gift.`,
      },
      {
        q: 'Can I add a gift message to a Quell order?',
        a: `No. Checkout has no gift wrap or gift message option, so many people ship the order to themselves and wrap it at home.`,
      },
      {
        q: 'Will eye drops arrive before Christmas if I order in December?',
        a: `Quell doesn’t promise a delivery date, so order early in the month rather than at the last minute. The shipping email includes tracking so you can follow it.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-bus-drivers',
    title: 'Dry eyes for bus drivers',
    description:
      'Heater blast, door drafts, glare and night routes all dry a driver’s eyes. Practical fixes for the seat, and when to use drops: never while moving.',
    category: 'using',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Bus drivers get dry eyes from the job itself: hours of fixed forward focus, heater and defroster air aimed at the windshield, cold drafts every time the doors open, and glare from wet roads and headlights. Redirect the vents, use glare protection, blink deliberately at stops, and if you use lubricating drops, put them in only when the bus is parked, at a layover or at the end of a run.`,
      },
      { h: 'Why driving a route dries your eyes' },
      {
        p: `A bus route asks for steady attention for hours. When people concentrate on a fixed point, they blink less often and less completely, which leaves more of the eye’s surface exposed to the air between blinks. A route adds a few things a car commute doesn’t:`,
      },
      {
        list: [
          `The defroster and front heater blow warm, dry air up the windshield and back toward the driver’s face for most of the winter.`,
          `The front door opens dozens of times an hour, letting in a blast of cold or hot outside air at eye level.`,
          `Shifts often run eight to ten hours with only short recovery breaks.`,
          `Glare from low sun, wet pavement and oncoming headlights makes drivers squint, and a squint replaces full blinks with partial ones.`,
        ],
      },
      {
        p: `Dry, moving air speeds evaporation from the tear film. The combination of a vent in your face and a long stretch of focused looking is why eyes can feel gritty by the second half of a shift.`,
      },
      { h: 'Heater and defroster airflow' },
      {
        p: `You can’t turn off the defroster when the windshield is fogging, and you shouldn’t. What you can usually change is where the cab vents point. Most driver compartments have adjustable louvers for the dash and a separate fan control for the driver’s area:`,
      },
      {
        list: [
          `Aim any dash louver at your chest or feet rather than your face.`,
          `If the defroster spill hits your eyes, check whether a deflector or a slight seat adjustment moves your head out of the stream.`,
          `Keep the driver fan on the lowest speed that keeps the windshield clear.`,
          `In summer, aim air conditioning at your torso. Cold air from a vent dries eyes just as warm air does.`,
        ],
      },
      {
        p: `If your agency has rules about the HVAC settings, follow them. These are adjustments within whatever the vehicle and your supervisor allow.`,
      },
      { h: 'Door drafts and outside weather' },
      {
        p: `Each time the front door opens, the air at the driver’s seat changes. On a January morning that means a gust of cold, dry air; on a windy day it can carry grit off the curb. Glasses help here more than people expect. Ordinary prescription lenses or clear glasses with side coverage reduce how much air moves across the eye. If you wear sunglasses on daytime routes, wraparound frames do the same job while cutting glare.`,
      },
      { h: 'Glare and night routes' },
      {
        p: `Night shifts bring a different kind of strain. Headlights, LED signs and reflections off wet pavement all pull your focus, and drivers on late routes tend to stare harder to read the road. Keep the inside of the windshield clean, because a hazy film scatters light from oncoming traffic. Keep interior lights at the level your agency allows so your eyes aren’t adjusting between a bright cab and a dark street. Use the farebox and stop announcements as cues to blink fully a few times.`,
      },
      { h: 'Blink breaks that fit a schedule' },
      {
        p: `There’s no time for a long rest on most routes, but there are natural pauses. Use them:`,
      },
      {
        list: [
          `At a red light or while passengers board, close your eyes for a full second and open them slowly, if you’re fully stopped with the brake set and it’s safe to do so.`,
          `At a timepoint where you’re holding for schedule, look at something far away and blink several times.`,
          `At a layover, step off the bus if allowed. Fresh air without a vent behind it is a break for your eyes too.`,
          `Drink water through the shift. A dried-out driver is usually a dry-eyed driver.`,
        ],
      },
      { h: 'Never put in drops while the bus is moving' },
      {
        p: `A drop blurs your vision for a moment, and you need a hand free and your head tilted back to put one in. Neither is compatible with operating a vehicle. Only use eye drops when the bus is parked and secured: at a layover, during a break, before pull-out or after the run. Don’t do it at a red light or a passenger stop, and follow any agency rules about when you can step away from driving duties.`,
      },
      {
        p: `If you use Quell, the Uses line on the label reads: {uses}. The directions read: {directions}. Wash or sanitize your hands first, since you’ve been handling the wheel, fare equipment and doors, and follow the handling line: {tip}. Give your vision a moment to clear before you drive.`,
      },
      { h: 'Where to keep the bottle on shift' },
      {
        p: `The label’s storage line reads: {storage}. A bus cab can get hotter or colder than that, especially on a layover in summer sun with the engine off, or parked in the yard through a winter night. Keep the bottle with your personal bag rather than on the dash, in a cup holder by the windshield, or in a locker in an unheated garage. An inside jacket pocket works in cold weather; a lunch bag works in heat.`,
      },
      {
        p: `Before using a bottle that’s been somewhere hot or cold, look at it. The label’s “Do not use” line reads: {doNotUse}. Our guide on [how to store eye drops](/guides/how-to-store-eye-drops) covers storage in more detail.`,
      },
      { h: 'What the label leaves to a doctor' },
      {
        p: `Professional drivers depend on clear vision, so take changes seriously. The label’s stop-use line reads: {stopUse} Anything that affects how well you see the road is a reason to stop and talk to an eye doctor, and to follow your employer’s fitness-for-duty rules. If you wear contact lenses or use other eye drops, the label doesn’t address those situations; ask your eye doctor or pharmacist.`,
      },
      {
        p: `Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers warning signs. For more on vent airflow on the road, see [dry eyes when driving in winter](/guides/dry-eyes-when-driving-in-winter). The full label is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Why do bus drivers get dry eyes?',
        a: `Long stretches of focused driving reduce blinking, and the defroster, heater and door drafts move dry air across the eyes for hours. Glare adds squinting, which replaces full blinks with partial ones.`,
      },
      {
        q: 'When can a bus driver put in eye drops?',
        a: `Only when the bus is parked and secured, such as at a layover, on a break, or before or after the run. A drop briefly blurs vision, so never use one while driving or at a stop with passengers boarding.`,
      },
      {
        q: 'Where should a bus driver keep eye drops during a shift?',
        a: `With a personal bag or in a jacket pocket, not on the dash or near the windshield. Quell’s storage line reads “{storage},” and a parked bus can go outside that range in summer or winter.`,
      },
      {
        q: 'Do glasses help with dry eyes from driving?',
        a: `Glasses, especially wraparound frames, reduce how much moving air reaches the eye, which slows evaporation from the tear film. Sunglasses also cut glare on daytime routes.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-remote-workers',
    title: 'Dry eyes for remote workers',
    description:
      'Working from home means more screen time, fewer breaks and a furnace you control. How remote workers can set up a home office that’s easier on eyes.',
    category: 'using',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Remote workers often get dry eyes because the home office removes the natural breaks of an office day. There’s no walk to a meeting room, video calls stack back to back, and the laptop sits close with the heat or air conditioning running. Build breaks into the calendar, raise and push back the screen, keep vents off your face, and consider a humidifier in heating season.`,
      },
      { h: 'Why working from home is hard on eyes' },
      {
        p: `In an office, a workday is broken up by things that make you look away: a coworker stopping by, walking to the printer, lunch somewhere else. At home those disappear. Many remote workers sit at the same screen from first email to last call. People blink less while concentrating on a screen, and the blinks they do make are often partial, leaving part of the eye’s surface uncovered. Over a long day, that adds up.`,
      },
      {
        p: `[Screens and your tear film](/guides/screens-and-your-tear-film) explains how the tear film’s oil, water and mucus layers work together, and why reduced blinking lets water evaporate faster.`,
      },
      { h: 'Video calls and the camera stare' },
      {
        p: `Video meetings ask for a particular kind of attention. You watch faces closely, you’re aware of being watched, and many people stare at the camera to seem engaged. All of that tends to cut blinking further. A few things help:`,
      },
      {
        list: [
          `Turn off self-view once you’ve checked your framing. Watching yourself is one more thing to stare at.`,
          `On audio-only calls, look away from the screen entirely. Walk around if you can.`,
          `Leave five minutes between meetings when you control the calendar. Many calendar apps can shorten meetings automatically.`,
          `Blink fully and slowly a few times when you unmute to speak, a built-in reminder.`,
        ],
      },
      { h: 'The laptop problem' },
      {
        p: `A laptop on a kitchen table puts the screen low and close. You tend to look down at it, which is generally easier on eyes than looking up, but you also lean in and hold your focus at a short distance for hours. A desk setup with an external monitor gives you more control:`,
      },
      {
        list: [
          `Put the monitor about an arm’s length away, with the top of the screen at or slightly below eye level.`,
          `Raise the text size so you’re not leaning toward the screen to read.`,
          `Turn brightness down to roughly match the room. A glowing screen in a dark room is harder to look at for long.`,
          `Put the screen at a right angle to windows to cut glare.`,
        ],
      },
      { h: 'Home office heating and cooling' },
      {
        p: `Remote workers get to control the thermostat, which is a mixed blessing. Forced-air heat warms air without adding water, so relative humidity indoors drops through the winter. A space heater under the desk or a register blowing toward your chair moves that dry air across your eyes. In summer, a ceiling fan or window air conditioner does the same.`,
      },
      {
        p: `Check where the air goes. Close or redirect a floor register that points at your chair, angle a space heater toward your legs and not your face, and keep a desk fan below eye level. A small humidifier near the desk can help during heating season; our guide on whether [a humidifier helps dry eyes](/guides/does-a-humidifier-help-dry-eyes) covers settings and cleaning.`,
      },
      { h: 'Building breaks into a remote day' },
      {
        p: `Without coworkers to interrupt you, breaks have to be scheduled. Some ways remote workers make them stick:`,
      },
      {
        list: [
          `Use a timer that goes off every twenty minutes. When it does, look at something across the room or out a window for about twenty seconds.`,
          `Make one call a day a walking call.`,
          `Take lunch away from the desk, even if it’s just the other side of the kitchen.`,
          `Refill a water glass instead of keeping a big bottle at the desk. Getting up is the point.`,
          `End the day by closing the laptop, so evening scrolling doesn’t happen at the same screen.`,
        ],
      },
      { h: 'Using a lubricating drop at your desk' },
      {
        p: `If your eyes feel dry or irritated during the workday, an over-the-counter lubricating drop is an option. Quell’s Uses line reads: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. Follow the directions on the label: {directions}. Wash your hands first, since keyboards and phones aren’t clean, and keep the tip away from everything: {tip}.`,
      },
      {
        p: `Read the caution before your first use: {warnings}. Keep the bottle in a drawer or on a shelf, not on a sunny windowsill or beside a space heater. The storage line reads: {storage}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting drops delivered to your home office' },
      {
        p: `Working from home makes deliveries easy. Quell ships from Brentwood, Tennessee, to US addresses. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. There’s no subscription; you’ll get one reminder email when you might be running low, and you can reorder whenever you like from the [home page](/#buy).`,
      },
      { h: 'When to call an eye doctor' },
      {
        p: `Dry, tired eyes after a long screen day are common. Pain, vision changes or irritation that doesn’t settle are different. The label’s stop-use line reads: {stopUse} If you wear contacts or use other eye drops, the label doesn’t cover those cases, so ask your eye doctor or pharmacist. A routine eye exam is also a good time to mention how many hours you spend at a screen.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working from home?',
        a: `Remote work tends to mean longer unbroken screen time, back-to-back video calls and fewer reasons to look away, all of which reduce blinking. Home heating and cooling can dry the air around your desk too.`,
      },
      {
        q: 'Do video calls make dry eyes worse?',
        a: `They can. People stare closely at faces and the camera during calls and blink less while doing it. Turning off self-view and leaving short gaps between meetings helps.`,
      },
      {
        q: 'How should I set up my home office for dry eyes?',
        a: `Put the monitor about an arm’s length away with the top at or just below eye level, keep vents and heaters from blowing at your face, and run a humidifier in heating season if the air feels dry.`,
      },
      {
        q: 'How often should remote workers take screen breaks?',
        a: `A common habit is to look at something far away for about twenty seconds every twenty minutes. A timer makes it easier to remember when no one is around to interrupt you.`,
      },
    ],
  },
  {
    slug: 'how-to-make-eye-drops-work-better',
    title: 'How to make eye drops work better',
    description:
      'Most drops that seem not to work never landed in the eye. Step-by-step technique, what to do right after, and the habits that help a drop do its job.',
    category: 'using',
    addedOn: '2026-11-14',
    body: [
      {
        p: `To get more out of eye drops, get the technique right and follow the label exactly. Wash your hands, tilt your head back, pull down the lower lid, let one drop fall into the pocket, then close your eye gently without squeezing. Wipe off any excess. Then reduce what’s drying your eyes in the first place: screens, vents, wind and heated air.`,
      },
      { h: 'Why eye drops sometimes seem not to work' },
      {
        p: `When a drop seems to do nothing, the most common reason is that most of it never stayed on the eye. It hit the lashes, ran down the cheek, or was blinked straight out. Other reasons include using a drop at the wrong moment (right before stepping into a gusty parking lot), expecting a drop to undo the effect of eight hours under a vent, or using a drop for a symptom that isn’t dryness at all.`,
      },
      {
        p: `Technique is the part you control completely, so start there.`,
      },
      { h: 'Step by step: putting in a drop so it stays' },
      {
        list: [
          `Wash and dry your hands.`,
          `Check the bottle. Read the label’s “Do not use” line, which reads: {doNotUse}.`,
          `Tilt your head back, or lie down if that’s easier. Look up toward the ceiling.`,
          `With a clean finger, pull your lower eyelid gently down to make a small pocket.`,
          `Hold the bottle above the eye, close but not touching. The label says: {tip}.`,
          `Squeeze once to release one drop into the pocket.`,
          `Let go of the lid and close your eye gently. Don’t blink hard or squeeze your eyes shut, which pushes the drop out.`,
          `Keep the eye closed for a minute or so.`,
          `Dab away any excess from the skin with a clean tissue.`,
          `Repeat for the other eye if the directions call for both.`,
        ],
      },
      {
        p: `Our guide on [how to use eye drops as directed](/guides/how-to-use-eye-drops-as-directed) has more detail on each step, including tips if your hands shake.`,
      },
      { h: 'How to make eye drops more effective' },
      {
        p: `Following the label is the main thing. Quell’s directions read: {directions}. The label doesn’t suggest more drops per dose or more doses per day, and putting in two drops at once mostly means more runs down your cheek. The eye’s surface only holds a small amount of liquid at a time.`,
      },
      {
        p: `Timing helps too. If your eyes feel driest during a specific part of the day, such as the afternoon at a screen or the evening in a heated living room, spread your doses so one falls before that stretch rather than all at once in the morning, staying within the label’s directions.`,
      },
      { h: 'How to make eye drops work faster' },
      {
        p: `People often search for this, but Quell’s label makes no promise about how quickly it works, and we don’t either. What you can do is make sure the drop lands where it should and stays put. Closing your eye gently for a minute afterward, rather than blinking rapidly or opening wide to check, gives the drop a chance to spread across the surface. A drop can feel cool or briefly blur vision as it spreads; give it a moment before reading or driving.`,
      },
      { h: 'Habits that help a drop do its job' },
      {
        p: `A lubricating drop works against the things that dry your eyes. If those things keep going full blast, any drop has more to keep up with. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and the habits below reduce the moisture loss to begin with:`,
      },
      {
        list: [
          `Blink fully and on purpose during screen work, and look away every twenty minutes or so.`,
          `Aim car and desk vents at your body, not your face.`,
          `Run a humidifier in a heated bedroom or office.`,
          `Wear wraparound sunglasses in wind.`,
          `Keep a space heater or fan from blowing across your eyes.`,
        ],
      },
      {
        p: `[Screens and your tear film](/guides/screens-and-your-tear-film) explains why blinking matters so much.`,
      },
      { h: 'Mistakes that work against a drop' },
      {
        list: [
          `Touching the tip to your eye, lashes or fingers. That risks contaminating the bottle.`,
          `Rubbing your eyes right after a drop.`,
          `Using a bottle that’s been stored outside its range. The storage line reads: {storage}.`,
          `Sharing a bottle with someone else.`,
          `Using more than the directions call for, hoping for a bigger effect.`,
        ],
      },
      { h: 'What the label doesn’t cover' },
      {
        p: `Quell’s label gives directions for using it on its own. It doesn’t give directions for contact lens wearers, for children, or for timing with other eye drops. If any of those apply to you, ask your eye doctor or pharmacist. Before the first use, also check the caution line: {warnings}.`,
      },
      { h: 'When a drop isn’t the answer' },
      {
        p: `If you’re using drops exactly as directed and still feel worse, that’s information worth acting on. The label’s stop-use line reads: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers signs that shouldn’t wait. The full label is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'How do I make eye drops more effective?',
        a: `Get the technique right so the drop stays in the eye, follow the label directions exactly, and cut down on what’s drying your eyes, such as vents, wind and long unbroken screen time.`,
      },
      {
        q: 'How can I make eye drops work faster?',
        a: `Quell’s label makes no promise about speed. Closing your eye gently for a minute after the drop, instead of blinking hard, helps it spread across the surface.`,
      },
      {
        q: 'Should I put two drops in each eye to make them work better?',
        a: `No. Follow the label’s directions; Quell’s read “{directions}.” The eye holds only a small amount of liquid, so a second drop mostly runs out.`,
      },
      {
        q: 'Why do eye drops run down my face?',
        a: `Usually the drop missed the lower lid pocket or was blinked out. Pull the lower lid down to make a pocket, aim for it, and close your eye gently afterward instead of squeezing.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-house-painters',
    title: 'Dry eyes for house painters',
    description:
      'Sanding dust, paint fumes, ladders in the wind and full sun: how house painters can protect their eyes on the job and use lubricating drops correctly.',
    category: 'using',
    addedOn: '2026-11-14',
    body: [
      {
        p: `House painters deal with sanding dust, paint and solvent fumes, overhead spray and long days outdoors in sun and wind, all of which can leave eyes dry or irritated. Safety glasses or goggles are the first line, along with ventilation and shade. Wash paint and dust off your hands before touching your eyes, and use a lubricating drop only as its label directs.`,
      },
      { h: 'What a painting job does to your eyes' },
      {
        p: `A typical exterior job has a painter scraping and sanding in the morning, rolling and brushing in the afternoon, and working from a ladder much of the time. Interiors swap the sun for closed rooms and stronger fumes. Each phase brings its own irritants:`,
      },
      {
        list: [
          `Sanding and scraping throw fine dust and old paint chips into the air, often right at face height.`,
          `Primers, paints and solvents release fumes, especially in rooms without good airflow.`,
          `Rolling a ceiling sends a fine mist of paint downward.`,
          `Spraying puts paint droplets in the air around you.`,
          `Exterior work means hours in direct sun and whatever wind is blowing across the ladder.`,
        ],
      },
      {
        p: `Wind and sun speed evaporation from the tear film. Dust and fumes are irritants. And concentration on a careful cut line around trim cuts blinking the same way a screen does.`,
      },
      { h: 'Eye protection on the job' },
      {
        p: `No eye drop protects your eyes from flying debris or spray. That’s what eye protection is for. Your employer or the product labels on the paints and solvents you use will usually say what’s needed, and those instructions come first. In general:`,
      },
      {
        list: [
          `Wear safety glasses with side shields while scraping, sanding or working overhead.`,
          `Switch to sealed goggles for spraying or heavy sanding, where fine particles get around the edges of glasses.`,
          `Keep a spare pair in the truck so a scratched or paint-spattered pair gets replaced instead of squinted through.`,
          `Clean lenses with water and a clean cloth, not a dusty shirt.`,
        ],
      },
      {
        p: `Glasses also reduce how much wind reaches the eye, which helps with dryness on a breezy exterior job.`,
      },
      { h: 'Fumes and ventilation indoors' },
      {
        p: `Inside, airflow matters for your eyes as much as your lungs. Open windows, use box fans to pull air out of the room, and step out for fresh air on a schedule. Point fans away from your face; a fan blowing across your eyes dries them even as it clears the room. Follow the paint and solvent labels on ventilation and respiratory protection.`,
      },
      { h: 'Ladders, wind and sun' },
      {
        p: `Up a ladder, there’s nowhere to duck out of the wind, and the sun bounces off light siding and fresh white trim. A brimmed hat under or over your hood, tinted safety glasses rated for impact, and working the shady side of the house during the brightest hours all help. Don’t try to deal with an irritated eye at the top of a ladder. Climb down first, then take care of it on the ground.`,
      },
      { h: 'Clean hands before you touch your eyes' },
      {
        p: `Painters’ hands carry paint, caulk, solvent residue and dust. Rubbing your eyes with them is one of the fastest ways to make irritation worse. Before you touch your eyes or put in a drop:`,
      },
      {
        list: [
          `Wash your hands with soap and water. A hand wipe is a fallback, not a replacement.`,
          `Make sure solvent residue is gone, not just the visible paint.`,
          `Dry your hands on a clean towel, not the rag you’ve been using on the job.`,
          `If something splashes into your eye, follow the first-aid directions on that product’s label and get medical help as it says.`,
        ],
      },
      { h: 'Using a lubricating drop on a job site' },
      {
        p: `For ordinary dryness and irritation at the end of a dusty day, a lubricating drop is an option. Quell’s Uses line reads: {uses}. That protectant wording is about the eye’s surface; it isn’t protection against dust, chips or spray, which is why goggles come first. The directions read: {directions}. The handling line matters around a job site: {tip}.`,
      },
      {
        p: `Before you start, read the label’s caution: {warnings}. Keep the bottle in a lunch cooler or a bag in the cab, not on a dashboard in the sun or in an unheated trailer through a cold night. The storage line reads: {storage}. The full label is on the [Drug Facts page](/drug-facts), and [how to store eye drops](/guides/how-to-store-eye-drops) covers storage away from home.`,
      },
      { h: 'Something in your eye, or something more' },
      {
        p: `A lubricating drop is not meant for a paint splash, a chemical exposure or a chip stuck in the eye. Those need the product label’s first-aid steps and medical attention. For ongoing symptoms, the label’s stop-use line reads: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers signs that shouldn’t wait. If you wear contact lenses at work, the label doesn’t cover that; ask your eye doctor.`,
      },
      {
        p: `Quell ships to US addresses from Brentwood, Tennessee. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free, which suits a crew keeping a bottle in each truck. Order from the [home page](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes burn after painting?',
        a: `Paint and solvent fumes, sanding dust and fine spray can irritate the eyes, especially in rooms without good airflow. If burning is strong or follows a splash, follow the product’s first-aid directions and get medical help.`,
      },
      {
        q: 'What eye protection should a house painter wear?',
        a: `Safety glasses with side shields for scraping, sanding and overhead work, and sealed goggles for spraying or heavy sanding. Follow your employer’s rules and the paint labels too.`,
      },
      {
        q: 'Can I use eye drops after a paint splash?',
        a: `A lubricating drop isn’t meant for a chemical splash. Follow the first-aid directions on the paint or solvent label and get medical help as it says.`,
      },
      {
        q: 'Do paint fumes cause dry eyes?',
        a: `Fumes are an irritant, and closed rooms with a fan blowing can leave eyes feeling dry and scratchy. Ventilate the room, keep fans off your face and step out for fresh air regularly.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-when-binge-watching-tv',
    title: 'Dry eyes when binge-watching TV',
    description:
      'A season in one sitting means hours of staring in a dim room. Why binge-watching dries eyes and simple ways to watch longer in comfort.',
    category: 'using',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Binge-watching dries eyes because you blink less while absorbed in a show, the room is often dim and warm, and a heater or fan may be blowing nearby. Episode after episode, the eye’s surface spends more time exposed. Get up between episodes, keep some light on in the room, sit farther back, point heaters away from the couch, and blink on purpose during the credits.`,
      },
      { h: 'Why your eyes feel dry after a TV marathon' },
      {
        p: `When you’re caught up in a story, you blink less. Each blink spreads a fresh layer of tears across the eye, so fewer blinks mean more time for the tear film to thin out between them. A single episode rarely causes trouble. Four or five in a row, without getting up, is a different situation, especially in winter when the room’s air is already dry.`,
      },
      {
        p: `Streaming services make it easy to keep going: the next episode starts on its own, often before you’ve decided whether you want it. Those few seconds of countdown are the only natural pause many people get all evening.`,
      },
      { h: 'The couch setup' },
      {
        p: `How you watch matters as much as how long. A few things about the typical living room work against your eyes:`,
      },
      {
        list: [
          `A dark room makes the screen the brightest thing you can see, and your eyes keep adjusting to it.`,
          `A space heater beside the couch, or a floor register right below it, moves warm, dry air across your face.`,
          `A ceiling fan running above the couch does the same.`,
          `Lying down with your head propped on an arm can leave your eyes partly open in a way that dries one side more.`,
          `Watching on a phone or tablet held close adds focusing strain on top of fewer blinks.`,
        ],
      },
      { h: 'Simple changes that help' },
      {
        list: [
          `Leave a lamp on behind or beside the TV so the screen isn’t the only light.`,
          `Turn the screen brightness down a notch for evening viewing.`,
          `Sit back. A larger TV doesn’t need to be close to fill your view.`,
          `Aim heaters at your feet and switch off the ceiling fan if you don’t need it.`,
          `Keep a glass of water nearby and actually drink it.`,
          `If you watch on a phone, prop it up at arm’s length rather than holding it at your face.`,
        ],
      },
      { h: 'Breaks between episodes' },
      {
        p: `Turning off autoplay is the single most useful setting. Most streaming apps let you do it in playback settings, and it gives you a decision point at the end of every episode. Use that pause:`,
      },
      {
        list: [
          `Stand up and walk to another room, even for a minute.`,
          `Look out a window or across the room at something far away.`,
          `Close your eyes for a few seconds, then blink slowly a few times.`,
          `Refill your drink or let the dog out. Ordinary chores are good breaks.`,
        ],
      },
      {
        p: `If you’re watching with someone else, agree on a stretch between episodes. It’s easier to stop when it isn’t just your idea.`,
      },
      { h: 'Watching late at night' },
      {
        p: `Late sessions bring tired eyes along with dry ones. When you’re sleepy, blinking can slow and become less complete, and falling asleep with the TV on and a fan running can leave eyes dry by morning. Set a sleep timer on the TV, and if you notice you’re rubbing your eyes to stay focused on the plot, that’s a good place to pause until tomorrow.`,
      },
      { h: 'Using a lubricating drop on a long watch' },
      {
        p: `If your eyes feel dry or irritated during a long evening of TV, a lubricating drop is one option. Quell’s Uses line reads: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is what fewer blinks and a heater both make worse. The label’s directions read: {directions}, so plan any drop around that, not around how many episodes are left. Keep the tip clean: {tip}.`,
      },
      {
        p: `Read the caution first: {warnings}. Store the bottle away from the space heater and the sunny window. The storage line reads: {storage}. The full label is on the [Drug Facts page](/drug-facts), and the step-by-step technique is in [how to use eye drops as directed](/guides/how-to-use-eye-drops-as-directed).`,
      },
      { h: 'Screens beyond the TV' },
      {
        p: `Many people watch TV with a phone in hand, scrolling during slow scenes. That adds a second, closer screen and even fewer blinks. Putting the phone in another room for an episode is a real break for your eyes. For more on how screens affect the tear film, see [screens and your tear film](/guides/screens-and-your-tear-film). A workday at a computer followed by an evening of TV adds up; the guides on [using eye drops](/guides/topic/using) cover more daily habits.`,
      },
      { h: 'When it’s more than a long night' },
      {
        p: `Eyes that feel dry after a marathon and fine by the following morning are responding to the evening. Symptoms that persist, hurt or change your vision are a different matter. The label’s stop-use line reads: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers warning signs.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when I watch TV?',
        a: `You blink less while absorbed in a show, which gives the tear film more time to thin between blinks. Dim rooms, heaters and fans near the couch add to it.`,
      },
      {
        q: 'How do I stop my eyes from drying out when binge-watching?',
        a: `Turn off autoplay so each episode ends with a pause, get up between episodes, keep a lamp on, and point heaters and fans away from your face.`,
      },
      {
        q: 'Is it bad to watch TV in a dark room?',
        a: `A dark room makes the screen the brightest thing you see, and your eyes keep adjusting to it. Leaving a lamp on behind or beside the TV makes long viewing more comfortable.`,
      },
      {
        q: 'How far should I sit from the TV to avoid tired eyes?',
        a: `Far enough that you can take in the whole screen without moving your eyes much, usually farther back than people sit. Sitting back also keeps you out of any heater or fan airflow near the screen.`,
      },
    ],
  },
  {
    slug: 'using-eye-drops-before-an-eye-exam',
    title: 'Should you use eye drops before an eye exam?',
    description:
      'Call the office ahead and ask whether to skip your usual drops that day. What to bring, what to tell your eye doctor, and questions worth asking.',
    category: 'choosing',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Ask the eye doctor’s office before the appointment. Some exams look at your eyes’ surface and tear film as they naturally are, so the office may ask you to skip lubricating drops that morning; others won’t mind. Either way, tell your eye doctor which drops you use, how often, and when you last used them, and bring the bottle or its Drug Facts details.`,
      },
      { h: 'Why the timing of drops can matter at an exam' },
      {
        p: `An eye exam often includes a look at the front surface of the eye and the tears that cover it. A lubricating drop adds liquid to that surface for a while after you use it. Whether that matters depends on what the eye doctor plans to look at and how they like to do it, which is why the answer comes from the office, not from a general rule. Only the practice you’re visiting knows its own process.`,
      },
      {
        p: `That’s also why this guide doesn’t tell you to skip or use drops on exam day. It tells you how to find out.`,
      },
      { h: 'Ask the office in advance' },
      {
        p: `The easiest moment to ask is when you book, or when the office calls to confirm. A few ways to phrase it:`,
      },
      {
        list: [
          `“I use lubricating eye drops every day. Should I use them the morning of my appointment, or skip them?”`,
          `“How long before the exam should my last drop be, if it matters?”`,
          `“Is there anything else I should avoid that day, like wearing eye makeup?”`,
          `“Will my eyes be dilated, and should I bring a driver?”`,
        ],
      },
      {
        p: `If you forget to ask, call the day before. Offices field these questions all the time. Write down what they say so you don’t have to guess on the morning of the exam.`,
      },
      { h: 'What to tell your eye doctor' },
      {
        p: `Even if the office says drops are fine that day, the eye doctor will want to know about them. Be specific:`,
      },
      {
        list: [
          `The product name and whether it’s preservative-free. Quell is.`,
          `How often you use it, and whether that matches the label’s directions, which for Quell read: {directions}.`,
          `When you last used it before the appointment.`,
          `What you notice before and after a drop: how your eyes feel, and when in the day dryness is worst.`,
          `Any other eye products you use, including other drops, ointments, eyelid wipes or contact lens solutions.`,
          `Anything that has changed recently, such as new screen hours, a new job, a move or a new medication.`,
        ],
      },
      { h: 'Bring the bottle or its Drug Facts' },
      {
        p: `The simplest way to give an accurate answer is to bring the bottle in its carton. The Drug Facts panel lists the active and inactive ingredients, so the eye doctor can see exactly what’s in it without relying on memory. For Quell, the active ingredients are {actives}, and the inactive list is {inactives}.`,
      },
      {
        p: `Snap a photo of the front of the carton and the Drug Facts panel too. If you’ve switched products in the past year, photos of the older ones help the eye doctor see the whole history, and they’re easy to keep in one album on your phone for future visits.`,
      },
      {
        p: `If you’d rather not carry the bottle, pull up our [Drug Facts page](/drug-facts) on your phone. It shows the full panel, including the caution line: {warnings}. Keep in mind the storage line, {storage}, if the bottle will ride along in a hot or cold car on the way.`,
      },
      { h: 'Questions worth asking while you’re there' },
      {
        p: `An exam is a good time to get answers that a label can’t give you. Our list of [questions to ask your eye doctor](/guides/questions-to-ask-your-eye-doctor) goes deeper, but a few to start with:`,
      },
      {
        list: [
          `Is a lubricating drop a reasonable choice for what you’re seeing?`,
          `Is there anything about my daily habits, screens or work environment I should change?`,
          `Is it fine to use these drops with my contact lenses, or with any other drops I use? The label doesn’t cover either situation.`,
          `What symptoms should make me call before my next routine visit?`,
          `When should I come back?`,
        ],
      },
      { h: 'After the exam' },
      {
        p: `If your eyes were dilated or tested with drops in the office, ask before you leave whether and when you can go back to your usual lubricating drop. Follow what they tell you. Once you’re back to your routine, the label’s directions and handling line apply as always: {tip}.`,
      },
      {
        p: `If the eye doctor suggests a different approach, follow their advice. A lubricating drop from the store is for everyday dryness and irritation; working out the cause of persistent symptoms is what the exam is for.`,
      },
      { h: 'What the label says about stopping' },
      {
        p: `Don’t wait for a scheduled exam if something changes. Quell’s label is specific: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the signs that shouldn’t sit until your next appointment.`,
      },
      {
        p: `If you’re using drops before you’ve seen anyone, the [dry eye self-check](/self-check) can help you organize what to mention at your visit; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Should I use eye drops before my eye exam?',
        a: `Ask the eye doctor’s office when you book or confirm. Some exams look at your natural tear film and the office may ask you to skip drops that morning, while others won’t mind.`,
      },
      {
        q: 'Should I bring my eye drops to my eye appointment?',
        a: `Yes, bringing the bottle in its carton is the easiest way to show your eye doctor exactly what you use. The Drug Facts panel lists every ingredient.`,
      },
      {
        q: 'What should I tell my eye doctor about the eye drops I use?',
        a: `Give the product name, how often you use it, when you last used it, and what you notice before and after. Mention any other drops, ointments or contact lens products too.`,
      },
      {
        q: 'Can I use my eye drops after my eyes are dilated?',
        a: `Ask the office before you leave. They can tell you whether and when to go back to your usual lubricating drop after the drops used during the exam.`,
      },
    ],
  },
  {
    slug: 'can-eye-drops-make-dry-eyes-worse',
    title: 'Can eye drops make dry eyes worse?',
    description:
      'If your eyes feel worse after drops, the label says when to stop. Common reasons eyes feel worse, what to check, and when to see a doctor.',
    category: 'choosing',
    addedOn: '2026-11-14',
    body: [
      {
        p: `If your eyes feel worse after using a lubricating drop, follow the label: Quell’s says, “{stopUse}” Some causes are about handling, such as a contaminated tip or using more than directed. A brief sting can also happen as a drop spreads. Anything that persists, hurts or affects vision is a question for an eye doctor.`,
      },
      { h: 'What the label tells you to do first' },
      {
        p: `The Drug Facts panel is the starting point because it’s the part of the product written for exactly this question. Its stop-use line reads: {stopUse} That line covers eye pain, changes in vision, irritation that keeps going, and a condition that gets worse or doesn’t improve within its time frame. Any of those means stopping and asking a doctor, not trying more drops.`,
      },
      {
        p: `The “Do not use” line is the other one to check. It reads: {doNotUse}. If a bottle looks different from when you opened it, set it aside. Our guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists signs that shouldn’t wait.`,
      },
      { h: 'Why someone might feel worse after drops' },
      {
        p: `There are a few everyday reasons a drop can seem to make things worse. None of them is a claim about any product; they’re about how drops get used:`,
      },
      {
        list: [
          `The tip touched something. The label says: {tip}. A tip that brushed an eyelash, a finger or a bathroom counter can carry whatever was there into the bottle.`,
          `Hands weren’t clean. Rubbing or touching the eye with unwashed hands brings in irritants.`,
          `More drops than directed. The label’s directions read: {directions}. Using a lot more than that, hoping for more relief, isn’t what the label tells you to do.`,
          `The bottle was stored outside its range. The storage line reads: {storage}.`,
          `The real cause is something a lubricating drop isn’t meant for, so symptoms continue no matter how often you use it.`,
        ],
      },
      { h: 'A brief sting versus a real problem' },
      {
        p: `Some people notice a quick sting or a moment of blur when a drop goes in, especially if the eye’s surface is already dry or the bottle is cold. A short, mild sensation that fades as you blink is different from pain, a sting that grows, or irritation that keeps going. Our guide on [why eye drops sting](/guides/why-do-eye-drops-sting) goes into the common reasons. If the sensation is strong or doesn’t pass, stop and follow the label’s stop-use line.`,
      },
      { h: 'Do preservative-free drops matter here?' },
      {
        p: `Quell is preservative-free, which means its formula has no added preservative. People who use drops several times a day often look specifically for that. The flip side is that clean handling matters: keep the cap on between uses, keep the tip from touching anything, and don’t share the bottle. The label sets no specific discard period after opening; our guide on [how long eye drops last after opening](/guides/how-long-do-eye-drops-last-after-opening) covers what to watch for.`,
      },
      {
        p: `Whether any particular drop suits your eyes is a question your eye doctor or pharmacist can help with, since they can look at your situation directly.`,
      },
      { h: 'What to check before trying again' },
      {
        list: [
          `Look at the bottle and its contents. The label explains what normal looks like: {appearance}`,
          `Re-read the caution line: {warnings}.`,
          `Think about technique. Did the tip touch your eye or lashes? Were your hands clean?`,
          `Count how often you’ve been using it compared with the directions.`,
          `Consider what else changed: a new heater, a long drive, more screen hours, a new makeup or skin product near the eyes.`,
        ],
      },
      {
        p: `If you can’t find an obvious handling reason and your eyes still feel worse, don’t keep experimenting. That’s when the stop-use line applies.`,
      },
      { h: 'Things the label doesn’t cover' },
      {
        p: `Quell’s label doesn’t give directions for contact lens wearers, for children, or for use alongside other eye drops. If you’re in any of those situations and your eyes feel worse, ask your eye doctor or pharmacist instead of adjusting on your own.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Lubricating drops are for everyday dryness and irritation. If you’ve been using one as directed and dryness keeps coming back, working out why is a job for an eye doctor. Bring the bottle or the details from our [Drug Facts page](/drug-facts) so they can see exactly what you’ve been using. The [dry eye self-check](/self-check) can help you organize what you’ve noticed; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Can eye drops make your eyes drier?',
        a: `If your eyes feel worse after a lubricating drop, stop and check the label. Handling issues like a contaminated tip or using more than directed are common reasons, and symptoms that persist belong with an eye doctor.`,
      },
      {
        q: 'What should I do if my eyes feel worse after using eye drops?',
        a: `Follow the label’s stop-use line, which for Quell reads “{stopUse}” Bring the bottle when you see a doctor.`,
      },
      {
        q: 'Can using too many eye drops be bad?',
        a: `The label gives specific directions, and Quell’s read “{directions}.” Using much more than that isn’t what the label tells you to do, so ask a pharmacist or eye doctor if you feel you need more.`,
      },
      {
        q: 'Can a dirty eye drop bottle irritate your eyes?',
        a: `A tip that touches a surface can pick up whatever was there. That’s why the label says “{tip}.” If you think a bottle got contaminated, stop using it.`,
      },
    ],
  },
  {
    slug: 'how-do-i-know-if-i-need-eye-drops',
    title: 'How do I know if I need eye drops?',
    description:
      'Dry, gritty or irritated eyes are what lubricating drops are for. How to tell, what the self-check can help with, and when it’s a doctor’s question.',
    category: 'choosing',
    addedOn: '2026-11-14',
    body: [
      {
        p: `A lubricating drop may make sense if your eyes feel dry, gritty, scratchy or mildly irritated, especially after screens, wind or heated air. That matches what Quell’s label lists as its use: {uses}. Pain, changes in vision, or symptoms that persist or worsen are different; those are reasons to see an eye doctor rather than buy drops.`,
      },
      { h: 'What lubricating drops are for' },
      {
        p: `An over-the-counter drop is defined by its Drug Facts label, and the Uses line tells you its job. For Quell, that line reads: {uses}. Two ideas are in there: relieving dryness, and protecting against further irritation. If what you feel fits one of those, a lubricating drop is in the right category. If it doesn’t, a drop probably isn’t the answer.`,
      },
      {
        p: `Our guide to [what lubricating eye drops are](/guides/what-are-lubricating-eye-drops) explains how they differ from other kinds of drops on the shelf.`,
      },
      { h: 'Signs your eyes are dry' },
      {
        p: `People describe dryness in many ways. These are some of the common ones:`,
      },
      {
        list: [
          `A gritty or sandy feeling, as if something is in the eye.`,
          `Scratchiness or a mild burning sensation.`,
          `Eyes that feel tired by midafternoon, especially on screen-heavy days.`,
          `A need to blink hard or rub your eyes.`,
          `Vision that blurs briefly and clears when you blink.`,
          `Watery eyes in wind or cold, which can happen when the surface is dry and the eye responds with a rush of tears.`,
        ],
      },
      { h: 'Situations that tend to dry eyes' },
      {
        p: `Context helps. If your symptoms show up in predictable places, that’s a clue they’re related to dryness:`,
      },
      {
        list: [
          `Long stretches at a computer or phone, when blinking slows.`,
          `Heated rooms in winter or air-conditioned offices in summer.`,
          `Car vents blowing at your face.`,
          `Windy, dry or high-altitude places.`,
          `Airplane cabins.`,
          `Late nights when you’re tired and your eyes have been open for many hours.`,
        ],
      },
      {
        p: `If your eyes feel fine on weekends away from a screen and dry every workday afternoon, that pattern is worth noticing, and worth mentioning to an eye doctor.`,
      },
      { h: 'Keep a short symptom log' },
      {
        p: `A week of notes answers the question better than memory does. Each day, jot down when your eyes felt dry or irritated, what you were doing, and where you were. Note the room (office, car, bedroom), whether a heater, fan or air conditioner was running, and roughly how long you’d been at a screen. Also note anything that made it better, like stepping outside, closing your eyes for a minute or going to bed early. Patterns show up quickly. If the log points to one place or one activity, start there. If symptoms show up everywhere and at all hours, or if they’re getting stronger over the week, that’s useful to bring to an eye doctor, and it makes the appointment more productive.`,
      },
      { h: 'Try the self-check' },
      {
        p: `Our [dry eye self-check](/self-check) asks a few questions about what you’re feeling and when, then suggests next steps. It’s not a diagnosis. Think of it as a way to organize what you’ve noticed, whether you then try a lubricating drop, change your habits, or book an appointment.`,
      },
      { h: 'Things to try alongside or before a drop' },
      {
        p: `Some dryness responds to small changes in your surroundings. These cost nothing and are worth trying either way:`,
      },
      {
        list: [
          `Look away from your screen every twenty minutes and blink fully a few times.`,
          `Point car and desk vents at your body instead of your face.`,
          `Run a humidifier in a heated bedroom.`,
          `Wear wraparound sunglasses in wind.`,
          `Drink enough water through the day.`,
        ],
      },
      { h: 'When it’s a doctor’s question instead' },
      {
        p: `Some symptoms aren’t a reason to buy drops. They’re a reason to call an eye doctor. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers them in detail. In general:`,
      },
      {
        list: [
          `Eye pain, rather than mild discomfort.`,
          `A change in vision that doesn’t clear with blinking.`,
          `Sensitivity to light that’s new.`,
          `Discharge, swelling or crusting.`,
          `Symptoms after an injury or a chemical splash.`,
          `Symptoms in only one eye that keep getting worse.`,
        ],
      },
      {
        p: `If you start a lubricating drop, the label tells you when to stop: {stopUse}`,
      },
      { h: 'If you decide to try Quell' },
      {
        p: `Read the caution first: {warnings}. The directions read: {directions}. Follow the handling line every time: {tip}. The label doesn’t give directions for contact lens wearers, children, or use with other drops; ask your eye doctor or pharmacist about those. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      {
        p: `Quell is sold without a prescription and ships within the United States from Brentwood, Tennessee. If you order and decide it isn’t for you, an unopened bottle can be refunded within {returnDays} days of delivery without sending it back.`,
      },
    ],
    faq: [
      {
        q: 'How do I know if I need eye drops?',
        a: `If your eyes feel dry, gritty or mildly irritated, especially after screens, wind or heated air, a lubricating drop fits that use. Pain, vision changes or symptoms that persist are reasons to see an eye doctor instead.`,
      },
      {
        q: 'What are the signs of dry eyes?',
        a: `Common descriptions include a gritty or sandy feeling, scratchiness, mild burning, tired eyes late in the day, and blurring that clears when you blink.`,
      },
      {
        q: 'Should I see a doctor or just buy eye drops?',
        a: `For mild, occasional dryness that fits the label’s Uses, many people start with a lubricating drop. Pain, changes in vision, light sensitivity, discharge or symptoms that persist call for an eye doctor.`,
      },
      {
        q: 'Can watery eyes mean my eyes are dry?',
        a: `They can. When the eye’s surface dries out, especially in wind or cold, the eye may respond with a rush of tears. If watering is constant or comes with other symptoms, ask an eye doctor.`,
      },
    ],
  },
  {
    slug: 'do-you-need-different-eye-drops-in-winter',
    title: 'Do you need different eye drops in winter?',
    description:
      'Winter air dries eyes faster, but Quell’s directions don’t change with the season. What does change: storage in cold cars and habits indoors.',
    category: 'choosing',
    addedOn: '2026-11-14',
    body: [
      {
        p: `You don’t need a different lubricating drop for winter, but you may notice your eyes need more attention. Heated indoor air and cold wind both speed evaporation from the tear film. Quell’s label directions stay the same year-round: {directions}. What changes in winter is where you keep the bottle and the habits around it.`,
      },
      { h: 'Why winter feels different for your eyes' },
      {
        p: `Cold air holds less water than warm air. When winter air comes inside and gets heated, its relative humidity drops, sometimes to levels that feel parched. Outdoors, cold wind moves dry air across the eye. Between the two, the tear film loses water faster in winter than in mild seasons for many people. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) explains the indoor side in more detail.`,
      },
      {
        p: `That doesn’t mean a lubricating drop works differently in December. It means the air is working harder against your eyes.`,
      },
      { h: 'Do the directions change in winter?' },
      {
        p: `No. The label doesn’t have seasonal directions. Quell’s read: {directions}. If you find yourself wanting much more than that during the cold months, that’s a reason to talk to an eye doctor or pharmacist, not to change the dose on your own.`,
      },
      {
        p: `What you can adjust is timing within the directions. If your eyes feel driest in the evening, when the heat has been running for hours, spacing your doses so one falls before that stretch can make sense.`,
      },
      { h: 'Why the oil layer matters in winter' },
      {
        p: `The tear film has three layers: an oily outer layer, a watery middle and a mucus layer next to the eye. The oil layer slows evaporation of the water underneath. In dry, heated air, evaporation is the main problem. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is why the same drop fits the season. You can read more in [the tear film’s oil layer, explained](/guides/the-tear-films-oil-layer).`,
      },
      { h: 'Storage is the real winter change' },
      {
        p: `The storage line on the label reads: {storage}. In much of the country, a car on a January night falls well below that range. So do unheated garages, mailboxes, porches and gym lockers in some buildings. Winter habits that keep a bottle in range:`,
      },
      {
        list: [
          `Keep it in an inside coat pocket or a bag that comes indoors with you.`,
          `Don’t leave it in a parked car through a winter night or in a glove box during the workday.`,
          `If it gets cold, let it come back to room temperature on its own. Don’t microwave it or run it under hot water.`,
          `Before using a bottle that got cold, look at it. The label’s “Do not use” line reads: {doNotUse}.`,
        ],
      },
      {
        p: `Our guide on whether [eye drops can freeze in a cold car](/guides/can-eye-drops-freeze-in-a-cold-car) covers what to do if one does.`,
      },
      { h: 'Winter travel and outdoor days' },
      {
        p: `Winter trips bring their own mix. A ski weekend pairs cold wind on the lift with a dry, heated lodge. A holiday flight means hours of cabin air with low humidity. A long drive to see family means the heater running for hours with vents aimed somewhere near your face. In each case, the drop and its directions are the same as at home; what changes is where the bottle rides. Keep it in a pocket or carry-on rather than a checked bag in a cold cargo hold, a ski locker, or a trunk. If you’re flying, [traveling with eye drops](/guides/traveling-with-eye-drops) covers carry-on liquids. On the slopes, goggles do more for wind-dried eyes than anything you put in them afterward.`,
      },
      { h: 'Winter habits that help as much as a drop' },
      {
        list: [
          `Run a humidifier in your bedroom while the heat is on, and clean it regularly.`,
          `Turn car heater vents toward your feet and the windshield, not your face.`,
          `Keep space heaters from blowing toward you while you sit.`,
          `Wear wraparound sunglasses or goggles in cold wind and on bright snow.`,
          `Take screen breaks; long indoor winter evenings tend to mean more screen time.`,
          `Drink water. Heated air dries you out, and thirst is easy to miss in the cold.`,
        ],
      },
      { h: 'Ordering ahead of the cold' },
      {
        p: `If you rely on a lubricating drop through the winter, it helps to have a spare bottle at home before a storm or a busy holiday stretch. Quell ships from Brentwood, Tennessee, within the United States, but we don’t promise a delivery date, and winter weather can slow things down. Orders of {freeBottles} or more bottles ship free. Our guide to [eye drops shipped in hot or cold weather](/guides/eye-drops-shipped-in-hot-or-cold-weather) covers what to check if a package sat out in the cold.`,
      },
      { h: 'When winter dryness needs more than habits' },
      {
        p: `Dry eyes that come and go with the heating season are common. Symptoms that hurt, affect your vision or keep getting worse are not something to wait out until spring. The label is clear: {stopUse} The label also doesn’t give directions for contact lenses, children, or use with other drops; ask your eye doctor or pharmacist about those. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Do you need different eye drops in winter?',
        a: `Not necessarily. Quell’s directions are the same year-round. What changes in winter is the air, which dries eyes faster, and storage, since cold cars can fall below the label’s range.`,
      },
      {
        q: 'Should I use eye drops more often in winter?',
        a: `Follow the label’s directions; Quell’s read “{directions}.” If you feel you need much more than that in winter, ask an eye doctor or pharmacist.`,
      },
      {
        q: 'Why do my eyes need more drops in the winter?',
        a: `Heated indoor air has low relative humidity and cold wind moves dry air across the eye, so the tear film loses water faster. Humidifiers, vent changes and sunglasses help reduce that.`,
      },
      {
        q: 'Can I keep eye drops in my coat pocket in winter?',
        a: `An inside coat pocket is a good spot, because body heat keeps the bottle warmer than an outside pocket or a car. Quell’s storage line reads “{storage}.”`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-14 for how-eye-drop-expiration-dates-are-set:
   * - https://www.govinfo.gov/content/pkg/CFR-2024-title21-vol4/xml/CFR-2024-title21-vol4-sec211-137.xml
   *   (21 CFR 211.137(a): expiration date determined by appropriate stability testing
   *   described in 211.166, to assure identity, strength, quality and purity at time
   *   of use; (b): related to storage conditions stated on labeling; (h): not enforced
   *   for some OTC products without dosage limitations that are stable at least 3 years)
   * - https://www.govinfo.gov/content/pkg/CFR-2024-title21-vol4/xml/CFR-2024-title21-vol4-sec211-166.xml
   *   (211.166(a): written stability testing program; statistically based sample sizes and
   *   test intervals; specified storage conditions; reliable, meaningful, specific test
   *   methods; testing in the same container-closure system as marketed)
   */
  {
    slug: 'how-eye-drop-expiration-dates-are-set',
    title: 'How are eye drop expiration dates set?',
    description:
      'Federal drug rules tie the expiration date to stability testing in the same container under set storage conditions. How it works and what it means for you.',
    category: 'label',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Eye drop expiration dates come from stability testing. Under the FDA’s drug manufacturing rules in 21 CFR 211.137, a drug’s expiration date must be determined by appropriate stability testing, described in 21 CFR 211.166, so the product meets its standards at the time of use. The date also assumes the storage conditions on the label, which is why storage matters.`,
      },
      { h: 'What the federal rule says' },
      {
        p: `The rules for manufacturing finished drugs in the United States are in Title 21 of the Code of Federal Regulations, Part 211. Section 211.137 covers expiration dating. As published on govinfo.gov, it says a drug product should bear an expiration date determined by appropriate stability testing, so that it meets applicable standards of identity, strength, quality and purity at the time of use.`,
      },
      {
        p: `Two details in that section matter for anyone holding a bottle. First, the date is tied to the product meeting its standards when you use it, not just when it leaves the factory. Second, section 211.137 says expiration dates must be related to the storage conditions stated on the labeling. The date assumes the product has been kept the way the label says.`,
      },
      { h: 'How stability testing works' },
      {
        p: `Section 211.166 describes the stability testing program that sets the date. According to the regulation, a manufacturer needs a written program that includes:`,
      },
      {
        list: [
          `Sample sizes and test intervals based on statistical criteria for each attribute being measured.`,
          `Specified storage conditions for the samples being tested.`,
          `Test methods that are reliable, meaningful and specific.`,
          `Testing of the drug in the same container-closure system it’s sold in.`,
        ],
      },
      {
        p: `In plain terms, the product is stored under defined conditions and checked at intervals to see how long it keeps meeting its specifications in its actual bottle. The expiration date reflects those results.`,
      },
      { h: 'Why the container is part of the test' },
      {
        p: `The requirement to test in the marketed container-closure system is easy to skim past, but it explains a lot. The bottle, its tip and its cap are part of what keeps the product stable. A drug that holds up well in one kind of container might not in another, so the date on your bottle reflects that specific package. It’s also one reason not to pour drops into a different container for travel or to refill a bottle. Once the product leaves the package it was tested in, the date no longer describes it. Putting the cap back on after each use keeps the bottle closed the way it’s sold.`,
      },
      { h: 'A note on over-the-counter products' },
      {
        p: `Section 211.137 includes a narrow provision for some over-the-counter drugs: its expiration dating requirements aren’t enforced for OTC products whose labeling has no dosage limitations and that are stable for at least three years, supported by stability data. That provision doesn’t mean an OTC product lacks a date. Many, including Quell, carry one. Check your own carton and bottle.`,
      },
      { h: 'Where to find the date on your bottle' },
      {
        p: `Expiration dates are usually printed on the carton and on the bottle label, often near the lot number. The format varies by manufacturer. Our guide on [where to find the expiration date on eye drops](/guides/where-is-the-expiration-date-on-eye-drops) walks through how to read it and what to do if it’s hard to find.`,
      },
      {
        p: `If a bottle arrives from us with a date that has already passed, contact us through the [contact page](/about#contact) or at {phone}, {hours}, and don’t use that bottle in the meantime.`,
      },
      { h: 'Why storage matters for the date' },
      {
        p: `Because the date is linked to the storage conditions on the label, keeping the bottle in range is part of what makes the date meaningful. Quell’s storage line reads: {storage}. A bottle left on a hot dashboard in July or in a freezing car in January has been kept outside the conditions the date assumes.`,
      },
      {
        list: [
          `Keep the bottle in a drawer or cabinet at room temperature.`,
          `Avoid sunny windowsills, bathrooms that get steamy and hot, and cars.`,
          `Before using a bottle that has been somewhere hot or cold, look at it. The label’s “Do not use” line reads: {doNotUse}.`,
          `Know what normal looks like: {appearance}`,
        ],
      },
      { h: 'Expiration date vs. after opening' },
      {
        p: `The expiration date applies to the product as packaged. Quell’s label doesn’t set a separate discard period after opening, such as a number of days. That’s a different question from expiration, and our guide on [how long eye drops last after opening](/guides/how-long-do-eye-drops-last-after-opening) covers it. Whatever the dates say, handle the bottle as the label directs: {tip}.`,
      },
      { h: 'What to do with an expired bottle' },
      {
        p: `Once the date has passed, the stability testing no longer supports the product meeting its standards. Don’t use it. Throw it away according to local guidance for medicines, and start a new bottle. If you’re unsure, a pharmacist can help. The full Quell label is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'How are expiration dates on eye drops determined?',
        a: `Through stability testing. Under 21 CFR 211.137, a drug’s expiration date must be set by appropriate stability testing, described in 21 CFR 211.166, so the product meets its standards at the time of use.`,
      },
      {
        q: 'Does the FDA require expiration dates on eye drops?',
        a: `The FDA’s manufacturing rule in 21 CFR 211.137 requires expiration dates set by stability testing, with a narrow provision for some OTC products stable for at least three years. Check your carton and bottle for the date.`,
      },
      {
        q: 'Does storage affect the expiration date of eye drops?',
        a: `The regulation ties expiration dates to the storage conditions on the label, so the date assumes the product was kept that way. Quell’s storage line reads “{storage}.”`,
      },
      {
        q: 'Should I throw out eye drops after the expiration date?',
        a: `Once the date passes, the stability testing no longer supports the product meeting its standards, so don’t use it. Replace the bottle and dispose of the old one according to local guidance.`,
      },
    ],
  },
]
