import type { Guide } from '@/lib/guide-types'
export const DAILY_20261120_B: Guide[] = [
  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-terre-haute-in:
   * - NOAA 1991-2020 monthly normals via ACIS (https://data.rcc-acis.org/StnData,
   *   sid HUF; saved at .daily-job/acis1120/HUF.json and .daily-job/b/mint_HUF.json)
   *   (TERRE HAUTE HULMAN REGIONAL AP, elev 567 ft: Jan max 36.7 F, min 20.7 F;
   *   Feb max 41.6, min 24.1, precip 2.02 in (driest); Apr and May precip 4.71
   *   (wettest); Jul max 85.9, min 64.8; Aug max 84.6; Nov max 52.6, min 33.7;
   *   Dec max 41.1, min 25.9; twelve monthly precip normals sum to 40.84 in;
   *   snowfall normal missing ("M"), not quoted)
   * - USGS gage name "Wabash River at Terre Haute, IN" (USGS-03341500,
   *   waterdata.usgs.gov) for the river.
   * - relhum23.txt / wndspd23.txt have no Terre Haute row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-terre-haute-in',
    title: 'Dry eye relief in Terre Haute, Indiana',
    description:
      'Terre Haute gets about 41 inches of rain a year, yet January lows near 21°F keep furnaces busy. NOAA numbers and daily habits for dry, scratchy eyes.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Dry eye relief in Terre Haute starts indoors. NOAA’s normals for Terre Haute Regional Airport show January lows around 21°F, so furnaces run hard from late November into March, and heated air pulls moisture from the tear film even in a city that gets about 41 inches of precipitation a year. Aim vents away from your face, blink fully at screens, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'What NOAA’s records say about Terre Haute' },
      {
        p: `The figures here are NOAA’s 1991–2020 climate normals for Terre Haute Hulman Regional Airport, as published through the National Weather Service’s NOWData. The station sits at about 570 feet in the Wabash River valley, and it’s the long-running official record for the city.`,
      },
      {
        list: [
          `January: normal high 36.7°F, normal low 20.7°F, the coldest month.`,
          `February: high 41.6°F, low 24.1°F, and the driest month at 2.02 inches.`,
          `April and May: the wettest months, at 4.71 inches each.`,
          `July: high 85.9°F, low 64.8°F; August follows at 84.6°F.`,
          `November: the normal high falls to 52.6°F and the low to 33.7°F.`,
          `December: high 41.1°F, low 25.9°F.`,
          `The twelve monthly precipitation normals add up to about 40.8 inches.`,
        ],
      },
      {
        p: `The station’s record doesn’t carry a snowfall normal, so none is quoted here. NOAA’s humidity tables used elsewhere on this site don’t include Terre Haute either, which is why this page talks about temperatures and rain rather than a humidity percentage.`,
      },
      { h: 'Why a wet Indiana town still has dry-eye months' },
      {
        p: `Rain falls outdoors; your eyes spend the winter inside. When January air at 20°F is drawn into a house and warmed to 68°F, it holds the same small amount of water it had outside, so its relative humidity indoors drops sharply. The tear film is a thin layer of oil over water over mucus, and dry, warm air speeds evaporation from it between blinks. That’s why the complaint in Terre Haute tends to arrive with the first hard frost in November and fade in April, the same month the rain totals climb.`,
      },
      {
        p: `February is the month to watch. It’s the driest month in the normals and still cold, with lows around 24°F, so the furnace runs and nothing outside adds moisture to the air coming in.`,
      },
      { h: 'Habits for the heating season' },
      {
        list: [
          `Find the register closest to where you sit longest, the recliner or the desk, and angle or partly close it.`,
          `Run a humidifier in the bedroom and empty and clean it as its manual says.`,
          `In the car, send heat to the windshield and floor rather than the dash vents aimed at your face.`,
          `Set a lower night thermostat; the furnace cycles less and pushes less hot air past you while you sleep.`,
          `Keep a bottle where you spend the evening so you use it as directed instead of skipping a dose.`,
        ],
      },
      {
        p: `There’s more room-by-room detail in [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes), and [does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) covers sizing one.`,
      },
      { h: 'Humid summers and the air conditioner' },
      {
        p: `From June through August the normal highs sit between 83°F and 86°F, and Indiana summers feel sticky. Comfort indoors comes from air conditioning, which cools air by pulling water out of it. A ceiling fan over the bed or a window unit blowing across the couch adds steady airflow on top of that drier air. If your eyes feel gritty in July, look at what’s blowing on you before blaming the weather outside.`,
      },
      { h: 'Screens, study and shift work' },
      {
        p: `Terre Haute has college campuses, hospitals, warehouses and plants with round-the-clock shifts, and many of those jobs end with hours at a screen or a monitor. Concentration cuts the blink rate, and blinks get shallow. Each complete blink spreads oil and water across the eye; half-blinks leave the lower edge exposed. [How blinking spreads tears](/guides/how-blinking-spreads-tears) explains the mechanics. A practical rule for a long study night or a charting shift: every time you finish a page or a patient note, close your eyes fully for a second and look across the room.`,
      },
      { h: 'Using Quell in a Terre Haute winter' },
      {
        p: `Quell™ is a lubricating eye drop sold over the counter. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the part of the tear film warm, dry indoor air works against. The label lists its uses: {uses}. The directions read: {directions}.`,
      },
      {
        list: [
          `{tip}.`,
          `Storage on the label: {storage}. A bottle left in a car through a January night in Terre Haute can sit far below that range, so bring it inside.`,
          `{appearance}`,
          `Do not use: {doNotUse}.`,
        ],
      },
      {
        p: `The label doesn’t give directions for contact lenses, children or use alongside other eye drops. Ask your eye doctor or pharmacist about those. The [Drug Facts page](/drug-facts) shows the whole panel.`,
      },
      { h: 'Getting Quell delivered in Terre Haute' },
      {
        p: `Orders ship from Brentwood, Tennessee, to addresses anywhere in the United States, with guest checkout and no account needed. Shipping is {shipping}, or free on {freeBottles} or more bottles. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. Our [Terre Haute page](/eye-drops/terre-haute-in) and the [Indiana page](/eye-drops/state/indiana) have local ordering notes, and you can [buy Quell here](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `{stopUse} Dryness that keeps coming back, or that comes with pain, light sensitivity or blurred vision that doesn’t clear with blinking, needs a professional look. An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'What is the coldest month in Terre Haute?',
        a: `January. NOAA’s 1991–2020 normals for Terre Haute Regional Airport give it a normal high of 36.7°F and a normal low of 20.7°F, the lowest of the year.`,
      },
      {
        q: 'Why are my eyes dry in Terre Haute when it rains so much?',
        a: `Most dry-eye complaints there come from indoor air. Cold winter air warmed by a furnace has low relative humidity, and that speeds evaporation from the tear film, no matter how wet the year is outdoors.`,
      },
      {
        q: 'What is the driest month in Terre Haute?',
        a: `February, at 2.02 inches of precipitation in NOAA’s normals for the regional airport. April and May are the wettest, at 4.71 inches each.`,
      },
      {
        q: 'Can I get Quell shipped to Terre Haute?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any U.S. address, with guest checkout. Shipping is {shipping}, or free on {freeBottles} or more bottles.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-twin-falls-id:
   * - NOAA 1991-2020 monthly normals via ACIS (sid TWF; saved at
   *   .daily-job/acis1120/TWF.json and .daily-job/b/mint_TWF.json)
   *   (TWIN FALLS SUN VALLEY REGIONAL AP, elev 4166 ft: Jan max 37.0 F, min 21.1 F;
   *   Jul max 88.4, min 57.7 (30.7-degree spread); Aug max 86.8, min 55.8;
   *   Dec max 36.9, min 20.1 (coldest low); Jul precip 0.31 in (driest),
   *   Aug 0.43, Sep 0.53; May 1.46 (wettest); Dec 1.23; twelve monthly precip
   *   normals sum to 10.28 in; snowfall missing ("M"), not quoted)
   * - USGS image page "Snake River near Twin Falls, Idaho" (usgs.gov/media/images/
   *   snake-river-near-twin-falls-idaho): caption names the Perrine Memorial Bridge.
   * - relhum23.txt / wndspd23.txt have no Twin Falls row: no humidity or wind figure.
   */
  {
    slug: 'dry-eye-relief-twin-falls-id',
    title: 'Dry eye relief in Twin Falls, Idaho',
    description:
      'Twin Falls sits above 4,000 feet and gets about 10 inches of precipitation a year. NOAA’s numbers for the Magic Valley and how to keep dry eyes comfortable.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Twin Falls is a dry place for eyes. NOAA’s normals for the city’s regional airport, at about 4,170 feet, add up to roughly 10 inches of precipitation a year, and July averages just 0.31 inch. Summer air and a 30-degree drop from afternoon to dawn both work on the tear film. Wear wraparound sunglasses outside, keep fans and vents off your face, use a lubricating drop as its label directs, and see an eye doctor for pain or changes in vision.`,
      },
      { h: 'Twin Falls by the numbers' },
      {
        p: `These are NOAA’s 1991–2020 climate normals for Twin Falls Sun Valley Regional Airport (ACIS lists it under that name), as published through the National Weather Service’s NOWData. The station sits at about 4,170 feet.`,
      },
      {
        list: [
          `Annual precipitation: the twelve monthly normals total about 10.3 inches.`,
          `July is the driest month at 0.31 inch, with August at 0.43 and September at 0.53.`,
          `May is the wettest month, and even it averages only 1.46 inches.`,
          `July’s normal high is 88.4°F and its normal low 57.7°F.`,
          `January averages a 37.0°F high and a 21.1°F low; December’s low, 20.1°F, is the coldest of the year.`,
        ],
      },
      {
        p: `The airport’s record has no snowfall normal, so this page leaves snow out. NOAA’s humidity and wind tables used on other pages don’t include a Twin Falls station either, so you won’t find a humidity percentage here.`,
      },
      { h: 'A little rain, a lot of sky' },
      {
        p: `Ten inches of precipitation is a small yearly total, and almost none of it falls in high summer. With so little moisture arriving from above, the ground and the air stay dry for weeks at a time from June into September. Eyes notice. The water layer of the tear film evaporates faster when the surrounding air is dry, and an afternoon outdoors in July (mowing, a ballgame, a walk along the canyon rim) can leave them stinging by dinner.`,
      },
      {
        list: [
          `Choose wraparound sunglasses; they cut the moving air that reaches the eye from the sides.`,
          `A brimmed hat shades the eyes, so you squint less and blink more evenly.`,
          `Plan long outdoor jobs for the morning, when temperatures are lower.`,
          `Keep a bottle in a bag or pocket, not on the dash, where summer heat builds.`,
        ],
      },
      { h: 'Thirty-degree swings from afternoon to dawn' },
      {
        p: `Elevation shows up in the gap between day and night. July’s normals run from 88.4°F in the afternoon to 57.7°F before sunrise, a swing of about 31 degrees. People in Twin Falls handle that by opening windows at night and running the air conditioner by afternoon, and both routines move air. A box fan in a bedroom window pulls cool, dry air straight across the bed. If you wake with eyes that feel stuck or scratchy, try turning the fan to face the wall or the ceiling instead of your pillow.`,
      },
      { h: 'Down in the Snake River canyon' },
      {
        p: `The Snake River runs through a deep canyon on the north edge of town, and the U.S. Geological Survey’s photo of the river near Twin Falls shows the Perrine Memorial Bridge spanning it. Time on the water, on the canyon trails or on the bridge overlook puts you in open air where wind can funnel along the walls. Sunglasses that wrap, a cap, and a few slow, complete blinks every few minutes help more than you’d expect. For gusty days, see [how to protect your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind); the advice holds in warm weather too.`,
      },
      { h: 'Winter in the Magic Valley' },
      {
        p: `From November through February normal highs stay in the 30s and 40s and lows sit near 20°F. That cold outdoor air, warmed by a furnace, ends up with very little relative humidity indoors. Space heaters and forced air in shops and garages make it drier still. A small humidifier in the bedroom, a register angled away from the couch, and car heat sent to the windshield rather than your face all help. [Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more.`,
      },
      { h: 'What Quell is, and how the label says to use it' },
      {
        p: `Quell™ is an over-the-counter lubricating eye drop. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, which matters most in dry air like Twin Falls’ summers. According to the label, it is: {uses}. Directions: {directions}.`,
      },
      {
        list: [
          `Active ingredients: {actives}.`,
          `{tip}.`,
          `Storage: {storage}. A truck cab in August can climb well past that.`,
          `{milky}. {appearance}`,
        ],
      },
      {
        p: `For contact lenses, children or combining with other drops, the label gives no directions, so ask an eye doctor or pharmacist. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering to Twin Falls' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any U.S. address, including rural routes around the Magic Valley. Checkout is guest-only, buyers must be 18 or older, and shipping is {shipping} or free on {freeBottles} or more bottles. See the [Twin Falls page](/eye-drops/twin-falls-id) and the [Idaho page](/eye-drops/state/idaho) for more.`,
      },
      { h: 'Signs it’s time for an eye doctor' },
      {
        p: `{stopUse} Drops ease dryness; they don’t explain it. If your eyes stay uncomfortable through the dry season, or if you notice pain, light sensitivity or blurring that doesn’t clear, an eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Twin Falls get a year?',
        a: `About 10.3 inches of precipitation, the total of NOAA’s 1991–2020 monthly normals for the Twin Falls regional airport. July is the driest month at 0.31 inch.`,
      },
      {
        q: 'Why do my eyes feel dry in Twin Falls in the summer?',
        a: `Summer brings very little rain there, so the air stays dry, and dry air speeds evaporation from the tear film. Fans, air conditioning and time outdoors in open, moving air add to it.`,
      },
      {
        q: 'How cold does it get at night in Twin Falls?',
        a: `In NOAA’s normals for the regional airport, December has the coldest normal low at 20.1°F, with January close at 21.1°F. Even in July the normal low is 57.7°F.`,
      },
      {
        q: 'Does Quell ship to Twin Falls, Idaho?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to any address in the United States, with guest checkout. Shipping costs {shipping}, or nothing on {freeBottles} or more bottles.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-monroe-la:
   * - NOAA 1991-2020 monthly normals via ACIS (sid MLU; saved at
   *   .daily-job/acis1120/MLU.json and .daily-job/b/mint_MLU.json)
   *   (MONROE REGIONAL AP, elev 73 ft: Jan max 57.0 F, min 36.7 F; May max 84.4;
   *   Jun max 90.5, min 70.1; Jul max 93.2, min 72.5; Aug max 93.6, min 71.4
   *   (hottest high); Sep max 88.7; Dec max 59.0, min 38.6; Apr precip 5.83 in
   *   (wettest); Sep 3.55 (driest), Aug 3.56; twelve monthly precip normals sum
   *   to 55.10 in; snowfall missing ("M"), not quoted)
   * - USGS gage name "Ouachita River at Monroe, LA" (USGS-07367000) and
   *   "Ouachita River at West Monroe, LA" (USGS-07367005), waterdata.usgs.gov.
   * - relhum23.txt / wndspd23.txt have no Monroe row: no humidity or wind figure.
   * - Shreveport and Lafayette guides exist; this one is built on summer AC,
   *   the river and the car rather than their October/spring-wind angles.
   */
  {
    slug: 'dry-eye-relief-monroe-la',
    title: 'Dry eye relief in Monroe, Louisiana',
    description:
      'August highs near 94°F keep Monroe indoors under air conditioning for months. NOAA numbers for northeast Louisiana and simple ways to ease dry eyes.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `In Monroe, dry eyes are mostly an air-conditioning problem. NOAA’s normals for Monroe Regional Airport put highs above 84°F from May through September, peaking at 93.6°F in August, so homes, cars and offices run cold, dry air for nearly half the year. Point vents away from your face, take screen breaks, use a lubricating drop as its label directs, and see an eye doctor if dryness comes with pain or vision changes.`,
      },
      { h: 'Monroe’s climate in NOAA’s normals' },
      {
        p: `Here are NOAA’s 1991–2020 climate normals for Monroe Regional Airport, as published through the National Weather Service’s NOWData. The station sits at about 73 feet, in the low country along the Ouachita River.`,
      },
      {
        list: [
          `May: normal high 84.4°F. June: 90.5°F, with a low of 70.1°F.`,
          `July: high 93.2°F, low 72.5°F.`,
          `August: high 93.6°F, the hottest normal high of the year, low 71.4°F.`,
          `September: high 88.7°F.`,
          `January: high 57.0°F, low 36.7°F; December: high 59.0°F, low 38.6°F.`,
          `Precipitation totals about 55.1 inches a year. April is the wettest month at 5.83 inches; September is the driest at 3.55, with August close at 3.56.`,
        ],
      },
      {
        p: `There’s no snowfall normal in the station’s record, and NOAA’s humidity table on this site doesn’t include Monroe, so no humidity figure appears here.`,
      },
      { h: 'Humid outside, dry under the vents' },
      {
        p: `Step out of a Monroe store in July and the air feels thick. Step back in and it feels cold and crisp, because an air conditioner removes water as it cools. Spend eight hours at a desk under a ceiling diffuser, then drive home with the dash vents on high, and your eyes have spent most of the day in that drier, moving air. The water layer of the tear film evaporates faster in it, and the oil layer on top is what slows that loss. That’s why someone can live in one of the wettest parts of the country and still reach for drops by mid-afternoon.`,
      },
      {
        list: [
          `At work, ask whether a desk can be moved out from under a diffuser, or fit a simple deflector to it.`,
          `In the car, aim vents at your chest or the ceiling, never straight at your eyes.`,
          `At home, set the bedroom ceiling fan to a lower speed, or turn it off once the room is cool.`,
          `Set the thermostat a couple of degrees higher at night; the unit runs less often.`,
        ],
      },
      { h: 'The car is its own climate' },
      {
        p: `Daily life in Monroe and West Monroe involves a lot of driving: across the Ouachita River bridges, out to the farms and timberland, up and down the interstate. A car in August sun turns into an oven, and the instinct is to blast the air at full speed toward your face. Ten minutes of that dries eyes quickly. Start the car with windows down for a minute to flush the hot air, then run the air at a moderate setting with vents angled away. If you drive for work, the guide on [dry eyes when driving at night](/guides/dry-eyes-when-driving-at-night) covers late runs home too.`,
      },
      { h: 'On the river and in the woods' },
      {
        p: `The U.S. Geological Survey keeps river gauges on the Ouachita at Monroe and at West Monroe, and plenty of residents spend weekends on that water or in the woods around it. Boat wind, sun glare off the surface and long hours outside all speed evaporation from the eye. Polarized wraparound sunglasses cut both glare and wind. Keep the bottle in a cooler or a shaded dry bag rather than on a sun-baked console. [Dry eyes on a boat](/guides/dry-eyes-on-a-boat) has more for a day on the water.`,
      },
      { h: 'Winter: short, mild, and still heated' },
      {
        p: `Monroe’s winters are mild by most standards, with January highs near 57°F, but lows in the upper 30s mean the heat goes on most nights from December through February. A heat pump or furnace dries indoor air in a different way than the AC does, by warming air without adding water. The fix is the same: keep the airflow off your face and consider a humidifier in the bedroom for those months.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell™ is a lubricating eye drop sold without a prescription. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its uses: {uses}. The directions say: {directions}. The ingredients that do the work are {actives}.`,
      },
      {
        list: [
          `{tip}.`,
          `The panel’s storage line: {storage}. A Louisiana glove box in summer runs well above that, so keep the bottle with you or in the house.`,
          `{appearance}`,
        ],
      },
      {
        p: `If you wear contact lenses, are thinking of using it for a child, or already use another eye drop, the label doesn’t address it; ask an eye doctor or pharmacist. Read the full panel on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Monroe and West Monroe' },
      {
        p: `Orders ship from Brentwood, Tennessee, to any U.S. address. There’s no account to make and no subscription. Shipping is {shipping}, or free on {freeBottles} or more bottles, and an unopened bottle can be refunded within {returnDays} days of delivery without returning it. Our [Monroe page](/eye-drops/monroe-la) and the [Louisiana page](/eye-drops/state/louisiana) have more, and you can [order Quell here](/#buy).`,
      },
      { h: 'When drops aren’t enough' },
      {
        p: `{stopUse} Persistent dryness, or dryness with pain, light sensitivity or vision that stays blurry after you blink, deserves a visit. An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists what to watch for.`,
      },
    ],
    faq: [
      {
        q: 'What is the hottest month in Monroe, Louisiana?',
        a: `August, by a hair. NOAA’s 1991–2020 normals for Monroe Regional Airport give it a normal high of 93.6°F, just above July’s 93.2°F.`,
      },
      {
        q: 'Can air conditioning dry out your eyes in Louisiana?',
        a: `Yes. An air conditioner removes water from the air as it cools it, and vents push that drier air across your face. Angling vents away and lowering fan speeds helps.`,
      },
      {
        q: 'What is the wettest month in Monroe, LA?',
        a: `April, at 5.83 inches in NOAA’s normals for the regional airport. September is the driest at 3.55 inches, and the year totals about 55.1 inches.`,
      },
      {
        q: 'Does Quell ship to Monroe, Louisiana?',
        a: `Yes. It ships from Brentwood, Tennessee, to any U.S. address through guest checkout. Shipping is {shipping}, or free when you order {freeBottles} or more bottles.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-charlottesville-va:
   * - NOAA 1991-2020 monthly normals via ACIS (sid CHO; saved at
   *   .daily-job/acis1120/CHO.json and .daily-job/b/mint_CHO.json)
   *   (CHARLOTTESVILLE ALBEMARLE AIRPORT, elev 631 ft: Jan max 47.3 F, min 29.5 F;
   *   Feb max 51.4, min 31.3, precip 2.35 in (driest); Dec max 50.7, min 32.2;
   *   Jun precip 4.38 (wettest); Jul max 89.7, min 68.3; Oct max 70.6, min 47.9;
   *   Nov max 59.7, min 38.5; twelve monthly precip normals sum to 41.61 in;
   *   snowfall missing ("M"), not quoted)
   * - charlottesville.gov "About Charlottesville": the city sits in the upper
   *   Piedmont at the foot of the Blue Ridge.
   * - relhum23.txt / wndspd23.txt have no Charlottesville row (Lynchburg and
   *   Richmond rows not used; no cross-city comparison).
   * - Lynchburg, Richmond and Roanoke guides exist; this one is built on the
   *   cold-night/mild-afternoon swing, the Blue Ridge drives and the fall season.
   */
  {
    slug: 'dry-eye-relief-charlottesville-va',
    title: 'Dry eye relief in Charlottesville, Virginia',
    description:
      'Charlottesville’s winter nights dip below freezing while afternoons reach the high 40s. NOAA numbers and habits to keep dry eyes comfortable year round.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Charlottesville’s dry-eye season runs from late fall through winter, when NOAA’s normals for the Charlottesville Albemarle Airport show nights below freezing from December to February and the heat runs every evening. Mountain drives and fall wind add to it. Keep heating vents and car vents off your face, wear wraparound glasses on breezy ridges, blink fully at screens, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'The record for Charlottesville' },
      {
        p: `The numbers come from NOAA’s 1991–2020 climate normals for Charlottesville Albemarle Airport, as published through the National Weather Service’s NOWData, at about 630 feet. The city’s own website places Charlottesville in the upper Piedmont at the foot of the Blue Ridge, and the normals reflect that in-between position: real winters, long warm summers.`,
      },
      {
        list: [
          `January: high 47.3°F, low 29.5°F.`,
          `February: high 51.4°F, low 31.3°F, and the driest month at 2.35 inches.`,
          `December: high 50.7°F, low 32.2°F.`,
          `June: the wettest month, 4.38 inches.`,
          `July: high 89.7°F, low 68.3°F.`,
          `October: high 70.6°F, low 47.9°F; November: high 59.7°F, low 38.5°F.`,
          `Yearly precipitation from the twelve monthly normals: about 41.6 inches.`,
        ],
      },
      {
        p: `The station’s snowfall normal is missing, so it isn’t quoted, and there’s no NOAA humidity figure for this station on file.`,
      },
      { h: 'Freezing nights, mild afternoons' },
      {
        p: `A January day here often starts below freezing and ends in the upper 40s. That 18-degree swing means the furnace or heat pump cycles hard through the night and early morning, then backs off. The dry stretch for your eyes is the evening and the night: the heat is on, the house is closed up, and you’re reading, streaming or sleeping in warm air that holds little water. February, the driest month on the calendar, sharpens it. Signs people report: eyes that feel gritty on waking, or tired by the end of a long evening on the couch.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom from December into March, and clean it on schedule.`,
          `Angle the floor register near your bed or reading chair away from you.`,
          `Lower the thermostat a few degrees at bedtime.`,
          `Close your eyes for a few seconds at each chapter or episode break.`,
        ],
      },
      { h: 'Up on the Blue Ridge' },
      {
        p: `With the mountains to the west, weekend drives and hikes take many people up into higher, more exposed country. Wind moves freely across open ridgelines and overlooks, and moving air speeds evaporation from the eye’s surface. On a cool, breezy fall day at an overlook, eyes can water and then feel dry, a cycle that confuses people. Wraparound sunglasses, a brimmed cap and a few slow blinks after you reach the top help. [How to protect your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) has gear ideas. On the drive back down, send the car’s heat to the windshield rather than your face.`,
      },
      { h: 'Leaf season and the switch to heat' },
      {
        p: `October’s normals still look pleasant, with highs near 71°F, but lows fall to about 48°F, and by November they’re near 38°F. That’s the month the heat comes on for good. People notice dry eyes most in the first few weeks of a heating season, before routines catch up. A good time to set up the humidifier, move a desk away from a vent, and put a bottle of drops where you’ll see it is the first chilly week of November.`,
      },
      { h: 'Campus, clinic and office screens' },
      {
        p: `Charlottesville runs on study, research, health care and office work, and much of it happens at a screen. Focus lowers how often you blink and how fully. [How blinking spreads tears](/guides/how-blinking-spreads-tears) explains why a complete blink matters. Set the monitor a little below eye level so your lids cover more of each eye, and step away to look out a window between tasks.`,
      },
      { h: 'Quell’s label, plainly' },
      {
        p: `Quell™ is an over-the-counter lubricating eye drop. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label’s uses: {uses}. Its directions: {directions}.`,
      },
      {
        list: [
          `Active ingredients: {actives}.`,
          `{tip}.`,
          `Storage: {storage}. Don’t leave the bottle in a parked car through a Charlottesville January night.`,
          `{milky}, and that’s expected.`,
        ],
      },
      {
        p: `The label doesn’t give directions for contact lens wearers, children or use with other drops; an eye doctor or pharmacist can advise. The [Drug Facts page](/drug-facts) has the full panel.`,
      },
      { h: 'Ordering to Charlottesville' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any address in the United States, with guest checkout. Shipping is {shipping}, free on {freeBottles} or more bottles, and unopened bottles can be refunded within {returnDays} days of delivery. Visit the [Charlottesville page](/eye-drops/charlottesville-va) or the [Virginia page](/eye-drops/state/virginia), or go straight to [buy Quell](/#buy).`,
      },
      { h: 'When to call an eye doctor' },
      {
        p: `{stopUse} If dryness keeps returning each winter, or comes with pain, sensitivity to light or blurred vision that doesn’t clear, an eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'How cold does Charlottesville get in winter?',
        a: `NOAA’s 1991–2020 normals for the Charlottesville Albemarle Airport put January’s normal low at 29.5°F and its normal high at 47.3°F. February’s low is 31.3°F.`,
      },
      {
        q: 'Why do my eyes feel dry in Charlottesville in the winter?',
        a: `Cold nights keep the heat running, and warmed winter air holds little moisture, so the tear film evaporates faster. Vents, fireplaces and long evenings at screens add to it.`,
      },
      {
        q: 'What is the driest month in Charlottesville?',
        a: `February, with 2.35 inches of precipitation in NOAA’s normals for the airport. June is the wettest at 4.38 inches.`,
      },
      {
        q: 'Can I order Quell to Charlottesville, VA?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any U.S. address with guest checkout, for {shipping} or free on {freeBottles} or more bottles.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-wenatchee-wa:
   * - NOAA 1991-2020 monthly normals via ACIS (sid EAT; saved at
   *   .daily-job/acis1120/EAT.json and .daily-job/b/mint_EAT.json)
   *   (WENATCHEE PANGBORN MEMORIAL AP, elev 1238 ft: Jan max 33.6 F, min 24.1 F;
   *   Dec max 33.4, min 24.5; Jul max 87.6, min 61.8; Aug max 86.4, min 61.0;
   *   Sep max 76.7; precip Jul 0.24 in, Aug 0.23, Sep 0.23 (driest), Dec 1.31
   *   (wettest), Jan 1.02; twelve monthly precip normals sum to 7.83 in;
   *   snowfall missing ("M"), not quoted)
   * - (Apple Capital wording removed in review: city page returned 403, not verified)
   *   (seen in search results; the page itself returned 403 to the fetcher).
   * - Washington State Parks brochure for Wenatchee Confluence State Park
   *   (parks.wa.gov): park at the Wenatchee River's confluence with the Columbia.
   * - relhum23.txt / wndspd23.txt have no Wenatchee row: no humidity or wind figure.
   * - Yakima guide exists; this one is built on orchard harvest, the rivers
   *   and the December-January cold rather than Yakima's wind section.
   */
  {
    slug: 'dry-eye-relief-wenatchee-wa',
    title: 'Dry eye relief in Wenatchee, Washington',
    description:
      'Wenatchee’s airport averages under 8 inches of precipitation a year, and late summer is nearly rainless. NOAA numbers and tips for dry eyes in the valley.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Wenatchee is one of the drier places in Washington for your eyes. NOAA’s normals for Pangborn Memorial Airport total under 8 inches of precipitation a year, with about a quarter inch a month from July through September, the same weeks orchards are picked. Wear wraparound glasses outdoors, keep fans and vents off your face, use a lubricating drop as its label directs, and see an eye doctor if dryness comes with pain or vision changes.`,
      },
      { h: 'Wenatchee’s weather record' },
      {
        p: `The figures below are NOAA’s 1991–2020 climate normals for Wenatchee Pangborn Memorial Airport, as published through the National Weather Service’s NOWData. The station sits at about 1,240 feet.`,
      },
      {
        list: [
          `Yearly precipitation: about 7.8 inches, the sum of the monthly normals.`,
          `July 0.24 inch, August 0.23, September 0.23: the driest stretch of the year.`,
          `December is the wettest month at 1.31 inches, with January at 1.02.`,
          `July: normal high 87.6°F, low 61.8°F. August: 86.4°F and 61.0°F.`,
          `January: high 33.6°F, low 24.1°F. December: high 33.4°F, low 24.5°F.`,
        ],
      },
      {
        p: `There’s no snowfall normal in the station’s record, so none is given. NOAA’s humidity and wind tables on file don’t include a Wenatchee station, so this page doesn’t quote either.`,
      },
      { h: 'Harvest weeks in a near-rainless season' },
      {
        p: `Orchards are a large part of the land and the work around Wenatchee. Harvest falls in late summer and fall, exactly when the airport averages less than a quarter inch of rain a month. Picking, driving bins, packing-house shifts and plain yard work all happen in dry air, often in sun and dust. The water layer of the tear film evaporates faster in that air, and dust can make eyes feel gritty on top of it.`,
      },
      {
        list: [
          `Wear wraparound sunglasses or safety glasses with side coverage in the rows.`,
          `Take short breaks in shade and close your eyes for a few seconds.`,
          `Wash your hands before touching your eyes or using drops; orchard dust and residue ride on fingers.`,
          `Keep the bottle in a lunch cooler or a shaded pocket, not on a dash or tractor seat.`,
        ],
      },
      {
        p: `If you work the orchards for a living, the guide on [dry eyes for farmers](/guides/dry-eyes-for-farmers) covers long days outdoors in more detail.`,
      },
      { h: 'Where two rivers meet' },
      {
        p: `Washington State Parks’ Wenatchee Confluence State Park sits where the Wenatchee River joins the Columbia, and the riverfront trails and water are where much of the city spends summer evenings. Paddling, biking along the loop, or fishing from the bank exposes eyes to moving air and glare off the water for hours. Polarized wraparound lenses cut both. If you’re out from late afternoon into dusk, a few complete blinks every few minutes helps keep the surface of the eye covered.`,
      },
      { h: 'Cold, closed-up winters' },
      {
        p: `December and January highs sit around 33°F, with lows near 24°F, so the furnace or heat pump runs most of the day for two months or more. Very cold air holds little water, and once it’s warmed inside its relative humidity drops further. That’s the indoor dryness people feel after the holidays: eyes that sting by evening, or feel stuck shut in the morning.`,
      },
      {
        list: [
          `Use a humidifier in the bedroom and clean it as the manual directs.`,
          `Angle heat registers and space heaters away from where you sit.`,
          `On drives over the passes, send the car’s heat to the windshield and floor.`,
        ],
      },
      {
        p: `Our [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) guide goes further.`,
      },
      { h: 'Using Quell' },
      {
        p: `Quell™ is a lubricating eye drop sold over the counter. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. Per the label, it is: {uses}. Directions: {directions}.`,
      },
      {
        list: [
          `Active ingredients: {actives}.`,
          `{tip}.`,
          `Storage: {storage}. Keep it out of a hot truck in August and a freezing one in January.`,
          `{appearance}`,
        ],
      },
      {
        p: `The label gives no directions for contact lenses, children or use with other drops; check with your eye doctor or pharmacist. Read the panel on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering to Wenatchee' },
      {
        p: `Orders ship from Brentwood, Tennessee, to any U.S. address, including East Wenatchee and the valley towns. Checkout is guest-only, shipping is {shipping} or free on {freeBottles} or more bottles, and no delivery date is promised, so order before you run low. The [Wenatchee page](/eye-drops/wenatchee-wa) and [Washington page](/eye-drops/state/washington) have more.`,
      },
      { h: 'When an eye doctor should take a look' },
      {
        p: `{stopUse} If your eyes stay dry through the whole harvest season, or you notice pain, light sensitivity or blurring that blinking doesn’t clear, an eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Wenatchee get?',
        a: `About 7.8 inches of precipitation a year, the sum of NOAA’s 1991–2020 monthly normals for Pangborn Memorial Airport. December is the wettest month at 1.31 inches.`,
      },
      {
        q: 'What are the driest months in Wenatchee?',
        a: `August and September, at 0.23 inch each in NOAA’s normals for the airport, with July close behind at 0.24 inch.`,
      },
      {
        q: 'Why do my eyes get dry during apple harvest?',
        a: `Harvest falls in the driest weeks of the year, and long hours outside in dry, dusty, sunny air speed evaporation from the tear film. Wraparound glasses and shade breaks help.`,
      },
      {
        q: 'Can I get Quell delivered to Wenatchee?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any U.S. address with guest checkout. Shipping is {shipping}, or free on {freeBottles} or more bottles.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-salina-ks:
   * - NOAA 1991-2020 monthly normals via ACIS (sid SLN; saved at
   *   .daily-job/acis1120/SLN.json and .daily-job/b/mint_SLN.json)
   *   (SALINA MUNICIPAL AP, elev 1263 ft: Jan max 41.4 F, min 20.1 F, precip
   *   0.71 in (driest); Feb precip 0.87; Dec max 43.2, min 22.6, precip 1.12;
   *   Nov precip 1.22; May precip 5.04 (wettest); Jun max 88.1; Jul max 92.8,
   *   min 69.1 (hottest); Aug max 90.1; twelve monthly precip normals sum to
   *   29.69 in; Dec+Jan+Feb precip = 2.70 in; snowfall missing ("M"), not quoted)
   * - USGS gage name "Smoky Hill R nr Salina, KS" (USGS-06870000).
   * - relhum23.txt / wndspd23.txt have no Salina row: no humidity or wind figure
   *   (Wichita and Topeka rows exist but are not used; no cross-city comparison).
   * - Topeka, Wichita and Dodge City guides exist; this one is built on the
   *   dry winter quarter and the summer heat at Salina's own station.
   */
  {
    slug: 'dry-eye-relief-salina-ks',
    title: 'Dry eye relief in Salina, Kansas',
    description:
      'Salina’s three winter months bring under 3 inches of precipitation, and July highs top 92°F. NOAA numbers for central Kansas and ways to ease dry eyes.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Salina’s hardest stretch for dry eyes is winter, when NOAA’s normals for Salina Municipal Airport show the least precipitation of the year (about 2.7 inches across December, January and February) and lows near 20°F that keep furnaces running. Summer brings a second round with highs above 90°F and air conditioning. Keep vents off your face, protect your eyes outdoors, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Salina’s numbers' },
      {
        p: `This page uses NOAA’s 1991–2020 climate normals for Salina Municipal Airport, as published through the National Weather Service’s NOWData. The airport sits at about 1,260 feet.`,
      },
      {
        list: [
          `January is the driest month at 0.71 inch, with a normal high of 41.4°F and a low of 20.1°F.`,
          `February adds 0.87 inch and December 1.12; together the three winter months total about 2.7 inches.`,
          `December’s normal high is 43.2°F and its low 22.6°F.`,
          `May is the wettest month at 5.04 inches.`,
          `July is the hottest: high 92.8°F, low 69.1°F. June reaches 88.1°F and August 90.1°F.`,
          `The monthly normals add up to about 29.7 inches a year.`,
        ],
      },
      {
        p: `The airport’s record doesn’t include a snowfall normal, and NOAA’s humidity and wind tables on file have no Salina station, so neither is quoted.`,
      },
      { h: 'The dry quarter: December through February' },
      {
        p: `Little falls from the sky in a Salina winter, and the air arriving at your front door is cold. A furnace warms that air without adding water, so a heated house in January can feel parched, and your eyes are the first to say so. The tear film’s water layer evaporates faster in dry, warm air, and the oil layer on top is what slows it. People often describe the result as eyes that feel sandy at the end of the evening or sticky first thing in the morning.`,
      },
      {
        list: [
          `Place a humidifier where you sleep and keep it clean; a bedroom is easier to humidify than a whole house.`,
          `Close or deflect the register that blows toward your bed, desk or favorite chair.`,
          `Turn the thermostat down a few degrees at bedtime.`,
          `When you warm up the car on a 20-degree morning, aim the heat at the windshield, not your face.`,
        ],
      },
      {
        p: `The [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) guide goes through each room.`,
      },
      { h: 'Summers in the 90s' },
      {
        p: `By July the normal high is nearly 93°F, and most indoor life happens under air conditioning. Cooling pulls water from the air, and the vents and fans that come with it keep that air moving across your face. A pickup cab with the AC on full, a shop with a big fan running, or a bedroom fan aimed at the pillow can each leave eyes gritty. Turn fans toward a wall, lower their speed once the room cools, and keep car vents pointed at your chest.`,
      },
      { h: 'Work in open country' },
      {
        p: `Salina sits among farm fields and open grassland, and plenty of work here happens outdoors: fieldwork, construction, rail and trucking yards, county road crews. Open ground lets moving air reach you with nothing to slow it, and dust rides along. Wraparound safety glasses with side shields block more of both than flat lenses. Wash your hands before touching your eyes or putting in drops. If you drive for a living, see [eye drops for truck drivers](/guides/eye-drops-for-truck-drivers).`,
      },
      { h: 'Along the Smoky Hill River' },
      {
        p: `The U.S. Geological Survey runs a stream gauge on the Smoky Hill River near Salina, and the river corridor is where many people walk, fish and ride. Early mornings and evenings are the gentlest times outdoors in July and August. In winter, a scarf pulled up over the cheeks and a hat brim cut the cold air that reaches your eyes on a walk.`,
      },
      { h: 'What the Quell label covers' },
      {
        p: `Quell™ is an over-the-counter lubricating eye drop. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. The panel lists its uses: {uses}. And the directions: {directions}.`,
      },
      {
        list: [
          `Active ingredients: {actives}.`,
          `{tip}.`,
          `Storage: {storage}. That rules out a truck cab on a January night or a July afternoon.`,
          `{milky}. {appearance}`,
          `Do not use: {doNotUse}.`,
        ],
      },
      {
        p: `Contact lenses, children and use alongside other eye drops aren’t covered by the label; your eye doctor or pharmacist can answer those. The [Drug Facts page](/drug-facts) shows every line.`,
      },
      { h: 'Ordering Quell to Salina' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any U.S. address, with no account required. Shipping is {shipping}, or free on {freeBottles} or more bottles, and there are no promo codes or subscriptions. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. See the [Salina page](/eye-drops/salina-ks) and the [Kansas page](/eye-drops/state/kansas).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `{stopUse} Eyes that stay dry all winter, or that hurt, turn sensitive to light or blur in a way blinking doesn’t fix, should be checked. An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you decide.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Salina, Kansas?',
        a: `January, at 0.71 inch of precipitation in NOAA’s 1991–2020 normals for Salina Municipal Airport. December, January and February together total about 2.7 inches.`,
      },
      {
        q: 'How hot does Salina get in the summer?',
        a: `July’s normal high at Salina Municipal Airport is 92.8°F, the warmest of the year, with August at 90.1°F and June at 88.1°F.`,
      },
      {
        q: 'Why are my eyes so dry in a Kansas winter?',
        a: `Cold outdoor air holds little water, and once a furnace warms it indoors its relative humidity falls further. That dry, moving air speeds evaporation from the tear film.`,
      },
      {
        q: 'Does Quell ship to Salina, KS?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to any U.S. address with guest checkout, for {shipping}, or free on {freeBottles} or more bottles.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-jefferson-city-mo:
   * - NOAA 1991-2020 monthly normals via ACIS (sid JEF; saved at
   *   .daily-job/acis1120/JEF.json and .daily-job/b/mint_JEF.json)
   *   (JEFFERSON CITY MEMORIAL AP, elev 544 ft: Jan max 41.1 F, min 22.5 F;
   *   Feb max 46.7, min 26.2, precip 1.87 in (driest); Mar max 57.7, min 34.8;
   *   May precip 4.89 (wettest); Jul max 88.9, min 68.5; Aug max 87.6;
   *   Nov max 56.5, min 34.8; Dec max 45.3, min 26.3; twelve monthly precip
   *   normals sum to 39.71 in; snowfall missing ("M"), not quoted)
   * - Missouri Secretary of State (sos.mo.gov, Missouri State Capitol history):
   *   the Capitol stands atop a bluff overlooking the Missouri River.
   * - relhum23.txt / wndspd23.txt have no Jefferson City row: no humidity or wind figure.
   * - Columbia, MO guide exists (campus angle); this one is built on government
   *   office work, the river bluff and the winter-to-spring shoulder.
   */
  {
    slug: 'dry-eye-relief-jefferson-city-mo',
    title: 'Dry eye relief in Jefferson City, Missouri',
    description:
      'Jefferson City’s January lows average 22.5°F, and much of the city works at desks. NOAA numbers and practical steps for dry eyes in Missouri’s capital.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `In Jefferson City, dry eyes usually come from two things: heated winter air and long hours at a screen. NOAA’s normals for Jefferson City Memorial Airport show lows below freezing from December through February, so the heat runs for months, and a capital city’s office work keeps people focused on monitors. Keep vents off your face, take real blink breaks, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Jefferson City’s climate record' },
      {
        p: `These are NOAA’s 1991–2020 climate normals for Jefferson City Memorial Airport, as published through the National Weather Service’s NOWData. The airport sits at about 540 feet.`,
      },
      {
        list: [
          `January: normal high 41.1°F, normal low 22.5°F.`,
          `February: high 46.7°F, low 26.2°F, and the driest month at 1.87 inches.`,
          `March: high 57.7°F, low 34.8°F.`,
          `May: the wettest month at 4.89 inches.`,
          `July: high 88.9°F, low 68.5°F; August high 87.6°F.`,
          `November: high 56.5°F, low 34.8°F. December: high 45.3°F, low 26.3°F.`,
          `About 39.7 inches of precipitation a year in total.`,
        ],
      },
      {
        p: `No snowfall normal appears in the station’s record, so none is quoted, and NOAA’s humidity table on file doesn’t include this station.`,
      },
      { h: 'Desk days in the capital' },
      {
        p: `State government is a big part of the workday here, and much of that work means reading, drafting and reviewing on a screen in a heated or cooled office building. When you concentrate, you blink less, and the blinks you do make are often incomplete. The exposed surface of the eye dries between them. Building air adds to it: winter heat and summer cooling both lower the moisture in the air around your desk, and a ceiling diffuser can push that air straight down at you.`,
      },
      {
        list: [
          `Put the monitor at arm’s length and slightly below eye level.`,
          `Every time you send an email or finish a section, close your eyes fully for two seconds.`,
          `Look out a window or down a hallway for a few seconds every 20 minutes.`,
          `If a vent blows on your desk, ask facilities about a deflector, or move the chair a few feet.`,
          `Keep a bottle in a desk drawer, at room temperature, so a dose isn’t skipped.`,
        ],
      },
      {
        p: `Long sessions and late nights during busy stretches make all of this worse. [How blinking spreads tears](/guides/how-blinking-spreads-tears) explains why full blinks help.`,
      },
      { h: 'Winter on the bluff' },
      {
        p: `The Missouri Secretary of State’s history of the Capitol notes that it stands high atop a bluff overlooking the Missouri River. Walk between downtown buildings on a January morning and the air coming up off the river valley is cold, often in the low 20s. Cold wind on the eyes speeds evaporation and can set off watering that leaves them feeling drier afterward. A scarf over the lower face, a hat brim and glasses help on the walk in. Indoors, the heat takes over: see [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) for home and office fixes.`,
      },
      { h: 'Spring and fall shoulders' },
      {
        p: `March and November are both months when lows hover near 35°F and highs climb into the 50s. Heat goes on at night and off by afternoon, and windows open and close. These on-off months confuse people, because eyes can feel fine at lunch and dry by bedtime. Notice the pattern: if your eyes bother you mostly at night or first thing in the morning, the bedroom air is the likely target. A humidifier, a closed register and a fan aimed away from the bed are the first changes to try.`,
      },
      { h: 'Summer by the river' },
      {
        p: `July’s normal high is nearly 89°F, and Missouri summers are humid outdoors. Indoors it’s the air conditioner again. Out on the river or along trails near it, sun glare and moving air dry eyes quickly; polarized wraparound sunglasses and a hat help. Bring drops in a bag, not loose in a hot car.`,
      },
      { h: 'About Quell' },
      {
        p: `Quell™ is a lubricating eye drop available without a prescription. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label states its uses: {uses}. Directions on the panel: {directions}. Its active ingredients are {actives}.`,
      },
      {
        list: [
          `{tip}.`,
          `Storage: {storage}.`,
          `{appearance}`,
          `If swallowed, the label says: {swallowed}.`,
        ],
      },
      {
        p: `There are no label directions for contact lenses, children or combining it with other drops; ask an eye doctor or pharmacist. The [Drug Facts page](/drug-facts) has the panel.`,
      },
      { h: 'Ordering to Jefferson City' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any address in the United States, including state offices that accept personal packages (check your building’s mail rules first). Guest checkout, buyers 18 and older, {shipping} shipping or free on {freeBottles} or more bottles. Visit the [Jefferson City page](/eye-drops/jefferson-city-mo) or the [Missouri page](/eye-drops/state/missouri), or [buy Quell](/#buy).`,
      },
      { h: 'When it’s more than dry air' },
      {
        p: `{stopUse} Dryness that keeps returning, or that comes with pain, light sensitivity or vision that doesn’t clear with blinking, should be looked at. An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'How cold is Jefferson City in January?',
        a: `NOAA’s 1991–2020 normals for Jefferson City Memorial Airport give January a normal high of 41.1°F and a normal low of 22.5°F, the coldest month of the year.`,
      },
      {
        q: 'Why do my eyes get dry at my office job?',
        a: `Concentrating on a screen lowers your blink rate, and office heating or cooling dries the air around you. Full blinks, short look-away breaks and keeping vents off your face help.`,
      },
      {
        q: 'What is the wettest month in Jefferson City, MO?',
        a: `May, at 4.89 inches in NOAA’s normals for the airport. February is the driest at 1.87 inches, and the year totals about 39.7 inches.`,
      },
      {
        q: 'Can I order Quell to Jefferson City?',
        a: `Yes. Orders to Jefferson City ship from Brentwood, Tennessee, and checkout needs no account. Shipping is {shipping}, and it’s free once you buy {freeBottles} or more bottles.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-panama-city-fl:
   * - NOAA 1991-2020 monthly normals via ACIS (sid ECP; saved at
   *   .daily-job/acis1120/ECP.json and .daily-job/b/mint_ECP.json)
   *   (NORTHWEST FLORIDA BEACHES INTL AP, elev 56 ft: Jan max 63.1 F, min 42.0 F;
   *   Feb max 66.9, min 44.7; May max 85.7, min 62.7, precip 3.00 in (driest);
   *   Jun precip 5.72; Jul max 90.9, min 73.4, precip 6.76; Aug max 90.0,
   *   min 73.6, precip 7.13 (wettest); Dec max 65.6, min 43.7; twelve monthly
   *   precip normals sum to 59.53 in; snowfall missing ("M"), not quoted)
   * - panamacity.gov "About Panama City": city on St. Andrew(s) Bay.
   * - relhum23.txt / wndspd23.txt have no ECP row (Pensacola/Tallahassee rows
   *   not used; no cross-city comparison).
   * - Pensacola and Tallahassee guides exist; this one is built on the dry May,
   *   the wet late summer and the bay.
   */
  {
    slug: 'dry-eye-relief-panama-city-fl',
    title: 'Dry eye relief in Panama City, Florida',
    description:
      'May is Panama City’s driest month and August its wettest. NOAA numbers for the bay area and practical ways to keep dry, tired eyes comfortable.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Panama City is humid most of the year, so dry eyes there come from sun, wind off the water and air conditioning more than from the weather itself. NOAA’s normals for the area’s airport make May the driest month, at 3.00 inches, just as beach and boat days pick up. Wear polarized wraparound sunglasses, keep vents off your face, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Panama City’s climate, month by month' },
      {
        p: `The figures are NOAA’s 1991–2020 climate normals for Northwest Florida Beaches International Airport, the station ACIS lists for the area, as published through the National Weather Service’s NOWData. It sits at about 56 feet.`,
      },
      {
        list: [
          `January: normal high 63.1°F, normal low 42.0°F. December: 65.6°F and 43.7°F.`,
          `May: high 85.7°F, low 62.7°F, and the driest month at 3.00 inches.`,
          `June: 5.72 inches. July: 6.76 inches, with a high of 90.9°F and a low of 73.4°F.`,
          `August: the wettest month at 7.13 inches; high 90.0°F, low 73.6°F.`,
          `The year’s monthly normals add up to about 59.5 inches.`,
        ],
      },
      {
        p: `The station’s record has no snowfall normal, and NOAA’s humidity tables on file don’t list this airport, so this page gives no humidity percentage.`,
      },
      { h: 'May: the dry, bright month' },
      {
        p: `By May, highs are in the mid-80s, the rainy season hasn’t started, and the calendar fills with graduations, weekends on the bay and the first long beach days. Sun on bright sand and water makes people squint, and squinting changes how fully you blink. Wind off the Gulf and the bay moves air across the eye constantly. Put those together for six hours and eyes feel tight and gritty by sunset.`,
      },
      {
        list: [
          `Choose polarized sunglasses that wrap around the sides; they cut glare and wind together.`,
          `Sit with your back to the wind under an umbrella or shade structure.`,
          `Rinse salty, sandy hands with fresh water before touching your eyes or using drops.`,
          `Keep the bottle in a cooler bag in the shade; a beach towel in the sun gets hotter than the label’s range.`,
        ],
      },
      { h: 'Out on St. Andrew Bay' },
      {
        p: `The city’s own website describes Panama City as sitting on St. Andrew Bay, and boating and fishing are everyday life here. A boat underway creates its own wind, on top of whatever’s blowing, and spray leaves salt on your face and lashes. Wraparound polarized lenses, a cap, and a few slow, deliberate blinks every few minutes help. Our guide on [dry eyes on a boat](/guides/dry-eyes-on-a-boat) covers gear and where to keep drops aboard.`,
      },
      { h: 'The wet season indoors' },
      {
        p: `June through September bring the heaviest rain of the year and highs near 90°F. Outdoors is muggy; indoors is a different climate entirely. Air conditioners strip water from the air as they cool it, and in a Panama City summer they run nearly nonstop. That’s why people notice dry, tired eyes after a day in an office or a long drive with the vents on high, even in the rainiest month. Point car vents away from your face, lower fan speeds once a room is comfortable, and get up from the screen now and then.`,
      },
      { h: 'Mild winters, cool nights' },
      {
        p: `January lows near 42°F mean the heat pump runs most nights from December through February. It’s a short heating season, but the same rule applies: warmed air without added moisture dries the eye’s surface faster. Angle the bedroom vent away from the bed, and consider a small humidifier for those months. [Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) explains how to choose one.`,
      },
      { h: 'Quell, by the label' },
      {
        p: `Quell™ is a lubricating eye drop sold over the counter. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists the uses: {uses}. How to use it: {directions}.`,
      },
      {
        list: [
          `Active ingredients: {actives}.`,
          `{tip}.`,
          `Storage: {storage}. A parked car in a Panama City July runs well past that.`,
          `{appearance}`,
        ],
      },
      {
        p: `The label doesn’t give directions for contact lenses, for children, or for use with other drops. An eye doctor or pharmacist can answer those questions. See the [Drug Facts page](/drug-facts) for the full panel.`,
      },
      { h: 'Getting Quell in Panama City' },
      {
        p: `Orders ship from Brentwood, Tennessee, to any U.S. address, with guest checkout and no subscription. Shipping is {shipping}, or free on {freeBottles} or more bottles. If a package arrives damaged or the seal is broken, it’s replaced. Our [Panama City page](/eye-drops/panama-city-fl) and the [Florida page](/eye-drops/state/florida) have more, or [order Quell here](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `{stopUse} If dryness persists after you’ve fixed the glare, wind and vents, or if you have pain, light sensitivity or blurring that doesn’t clear with a blink, see an eye doctor. They can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Panama City, Florida?',
        a: `May, at 3.00 inches of precipitation in NOAA’s 1991–2020 normals for Northwest Florida Beaches International Airport. August is the wettest at 7.13 inches.`,
      },
      {
        q: 'Why do my eyes feel dry at the beach?',
        a: `Wind off the water, glare that makes you squint and long hours outdoors all speed evaporation from the tear film. Polarized wraparound sunglasses and shade help.`,
      },
      {
        q: 'How cold does Panama City get in winter?',
        a: `In NOAA’s normals for the area’s airport, January has a normal low of 42.0°F and a high of 63.1°F, the coolest month of the year.`,
      },
      {
        q: 'Does Quell ship to Panama City, FL?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any U.S. address through guest checkout. Shipping is {shipping}, or free on {freeBottles} or more bottles.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-gillette-wy:
   * - NOAA 1991-2020 monthly normals via ACIS (sid GCC; saved at
   *   .daily-job/acis1120/GCC.json and .daily-job/b/mint_GCC.json)
   *   (GILLETTE CAMPBELL COUNTY AP, elev 4364 ft: Jan max 36.1 F, min 14.3 F,
   *   precip 0.33 in (driest); Feb max 37.3, min 14.9, precip 0.43; Dec max
   *   36.2, min 14.7, precip 0.36; Nov precip 0.52; May precip 2.63 (wettest);
   *   Jun 2.03; Jul max 87.0, min 55.7 (31.3-degree spread); twelve monthly
   *   precip normals sum to 13.58 in; snowfall missing ("M"), not quoted)
   * - USGS publication "Land and natural resource information and some potential
   *   environmental effects of surface mining of coal in the Gillette area":
   *   Campbell County contains more coal than any other U.S. county.
   * - relhum23.txt / wndspd23.txt have no Gillette row: no humidity or wind
   *   figure (Casper/Sheridan rows not used).
   * - Laramie guide exists (wind and elevation); this one is built on the cold,
   *   dry winter, the mines and the summer day-night swing.
   */
  {
    slug: 'dry-eye-relief-gillette-wy',
    title: 'Dry eye relief in Gillette, Wyoming',
    description:
      'Gillette’s winter lows average about 14°F and its December to February precipitation is barely an inch. NOAA numbers and dry-eye tips for Campbell County.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Gillette is cold and dry in winter, and that’s when eyes suffer most. NOAA’s normals for Gillette-Campbell County Airport, at about 4,360 feet, show lows near 14°F from December through February and barely an inch of precipitation across those three months. Heated homes, trucks and shops dry the tear film further. Keep heat off your face, wear wraparound glasses outside, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Gillette’s station and its numbers' },
      {
        p: `This page uses NOAA’s 1991–2020 climate normals for Gillette-Campbell County Airport, as published through the National Weather Service’s NOWData. The station sits at about 4,360 feet.`,
      },
      {
        list: [
          `January: normal high 36.1°F, normal low 14.3°F, and the driest month at 0.33 inch.`,
          `February: high 37.3°F, low 14.9°F, 0.43 inch.`,
          `December: high 36.2°F, low 14.7°F, 0.36 inch.`,
          `May is the wettest month at 2.63 inches, followed by June at 2.03.`,
          `July: high 87.0°F, low 55.7°F.`,
          `The monthly normals total about 13.6 inches a year.`,
        ],
      },
      {
        p: `The airport’s record doesn’t carry a snowfall normal, so none is given here, and there’s no NOAA humidity or wind figure on file for this station.`,
      },
      { h: 'Fourteen degrees outside, bone-dry inside' },
      {
        p: `December, January and February together average about 1.1 inches of precipitation at the airport. The outside air is cold and carries very little water, and when a furnace warms it to room temperature, the relative humidity indoors drops to levels that feel like a desert. The tear film loses water faster in that air. That’s the reason so many people in Gillette notice burning or gritty eyes in January, and why a humidifier tends to be the single most useful change.`,
      },
      {
        list: [
          `Put a humidifier in the bedroom and clean it on the schedule in its manual.`,
          `Deflect the floor or wall register nearest your bed and your chair.`,
          `Keep the thermostat a little lower at night.`,
          `Use a space heater only pointed at your feet, never toward your face.`,
        ],
      },
      { h: 'Shift work at the mines' },
      {
        p: `The U.S. Geological Survey has reported that Campbell County holds more coal than any other county in the country, and surface mining shapes work here. Long shifts in heavy equipment cabs, shops and plants mean climate-controlled air on your face for 12 hours, then a cold walk to the truck. Dust adds to it outdoors. Wear the eye protection your site requires; wraparound styles with side shields block more moving air. Wash up before touching your eyes, and keep drops in a lunch bag or locker rather than a cab that freezes on winter nights or bakes in July. The guide on [dry eyes for miners](/guides/dry-eyes-for-miners) covers more of the job.`,
      },
      { h: 'Warm-up mornings in the truck' },
      {
        p: `On a 14-degree morning, the first thing many people do is start the truck and crank the heat. Sitting in front of dash vents blasting hot air for the first ten minutes of a drive dries eyes fast. Send the air to the windshield and floor, close the center vents, and if you drive the highway to a job site, give your eyes a break at every stop. [How to protect your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) helps for the walk across the lot too.`,
      },
      { h: 'Summer: hot days, cool nights' },
      {
        p: `July’s normal high is 87.0°F and its normal low 55.7°F, a gap of about 31 degrees. Open windows at night bring cool, dry air in; air conditioning takes over by afternoon. May and June are the wettest months, but even then most days are dry. Outdoors, sun and open country make sunglasses and a hat worth wearing for yard work, ballgames or fishing.`,
      },
      { h: 'How to use Quell' },
      {
        p: `Quell™ is an over-the-counter lubricating eye drop. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. Here’s what the label gives as its uses: {uses}. Directions: {directions}.`,
      },
      {
        list: [
          `{tip}.`,
          `Storage: {storage}. A Gillette truck in January is far colder than that, so carry the bottle inside your coat or keep it indoors.`,
          `{milky}.`,
          `Do not use: {doNotUse}.`,
        ],
      },
      {
        p: `The label is silent on contact lenses, children and use with other eye drops; ask your eye doctor or pharmacist. Every line of the panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering to Gillette' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any U.S. address, including rural Campbell County routes. Checkout is guest-only for adults 18 and over; shipping costs {shipping}, or nothing on {freeBottles} or more bottles. No delivery date is promised, so order ahead of a cold snap. See the [Gillette page](/eye-drops/gillette-wy) and the [Wyoming page](/eye-drops/state/wyoming).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `{stopUse} If your eyes stay dry all winter, or you notice pain, light sensitivity or blurring that blinking doesn’t clear, see an eye doctor. They can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you judge.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Gillette, Wyoming get in winter?',
        a: `NOAA’s 1991–2020 normals for Gillette-Campbell County Airport put January’s normal low at 14.3°F, with December at 14.7°F and February at 14.9°F.`,
      },
      {
        q: 'How much snow and rain does Gillette get a year?',
        a: `The station’s monthly precipitation normals total about 13.6 inches a year, with May the wettest at 2.63 inches. Its snowfall normal is missing, so we don’t quote one.`,
      },
      {
        q: 'Why are my eyes so dry in a Wyoming winter?',
        a: `Very cold air carries little water, and heating it indoors drops its relative humidity even further. Dry, warm, moving air from furnaces and truck vents speeds evaporation from the tear film.`,
      },
      {
        q: 'Can I get Quell shipped to Gillette, WY?',
        a: `Yes. It ships from Brentwood, Tennessee, to any address in the United States with guest checkout. Shipping is {shipping}, or free on {freeBottles} or more bottles.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-at-friendsgiving',
    title: 'Dry eyes at Friendsgiving',
    description:
      'A packed apartment, a hot oven, candles and a late night: why Friendsgiving can leave eyes dry and scratchy, and what to do as a guest or a host.',
    category: 'seasonal',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Friendsgiving tends to be hard on dry eyes because it packs a lot into a small space: an oven running for hours, candles, a crowded room with the heat on, and a night that runs late with phones out for photos and games. Open a window a crack, keep candles off the table where people sit, take short breaks from screens, and use a lubricating drop as its label directs if you rely on one.`,
      },
      { h: 'What is Friendsgiving, and why does it dry your eyes?' },
      {
        p: `Friendsgiving is a Thanksgiving-style meal shared with friends, usually on a weekend near the holiday itself. In 2026, Thanksgiving falls on Thursday, November 26, so many groups gather the Saturday before or the Saturday after. It often happens in an apartment or a shared house, with more guests than chairs, and that’s where the eye trouble starts.`,
      },
      {
        p: `The tear film is a thin layer of oil over water over mucus. Warm, dry, moving air pulls water out of it faster, and every blink spreads a fresh coat. A Friendsgiving room hits most of those triggers at once: the furnace is on because it’s late November, the oven adds dry heat for four or five hours, people crowd around the kitchen, and the conversation, the card game or the group photo keeps you staring and blinking less.`,
      },
      { h: 'If you’re the host' },
      {
        list: [
          `Turn the thermostat down an hour before guests arrive. A dozen people and a hot oven will warm the room on their own.`,
          `Crack a window in the kitchen while the oven runs. It lets some heat out and keeps air from feeling stuffy.`,
          `Use the range hood fan when you sear, roast or fry; smoke and steam stay out of the living room.`,
          `If you love candles, set them on a sideboard or windowsill, not the middle of the table at eye level. [Fireplaces, candles and dry eyes](/guides/fireplaces-candles-and-dry-eyes) explains why smoke and heat matter.`,
          `Run a humidifier in the main room during the day; turn it off when the room fills up.`,
          `Point space heaters at the floor and away from the couch.`,
        ],
      },
      {
        p: `Hosting the full Thanksgiving on Thursday too? Our guide to [hosting Thanksgiving houseguests in a heated house](/guides/hosting-thanksgiving-houseguests-in-a-heated-house) covers the guest room side.`,
      },
      { h: 'If you’re a guest' },
      {
        p: `You can’t control someone else’s thermostat, but you can choose where you sit. The seat beside the oven, under a ceiling fan or next to a floor register is the driest spot in the room. Move a chair a few feet if you can. If your eyes start to sting, step out to the balcony or porch for a few minutes; cold outdoor air is dry too, but the break from heat and screens gives your blinks a chance to catch up.`,
      },
      {
        list: [
          `Bring your own drops in a pocket or small bag, not a coat that ends up piled on a hot radiator.`,
          `Wash your hands before using them; cooking oils and spices on fingers sting.`,
          `If you wear contact lenses, follow your eye doctor’s guidance for lenses and drops; Quell’s label doesn’t address contacts.`,
        ],
      },
      { h: 'Games, photos and the phone problem' },
      {
        p: `A lot of Friendsgiving happens on screens now: trivia apps, a shared playlist, a group chat to plan who brings what, and dozens of photos. Looking at a phone close up lowers how often you blink, and the blinks you do make tend to be half-blinks that don’t cover the whole eye. Before a long game, set the phone down between rounds and close your eyes fully for two seconds. If your group plays a board or card game instead, you’ll still stare, so the same pause helps.`,
      },
      { h: 'The late night and the drive home' },
      {
        p: `Friendsgiving often runs past midnight. Tired eyes produce weaker blinks, and a late-night drive home in a car with the heater on high stacks dry air on top of fatigue. Aim the vents at the windshield and floor, keep the fan speed moderate, and if your eyes feel scratchy before you leave, take a few minutes with your eyes closed first. [Dry eyes when driving at night](/guides/dry-eyes-when-driving-at-night) goes further. If you’re riding home, let someone else drive.`,
      },
      { h: 'Using Quell at a gathering' },
      {
        p: `Quell™ is an over-the-counter lubricating eye drop, designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label’s directions are simple: {directions}. Spread across a long evening, that might mean one dose before you leave home and one later, following the label rather than reaching for the bottle every time eyes sting.`,
      },
      {
        list: [
          `{tip}.`,
          `Storage: {storage}. Don’t leave the bottle on a sunny dashboard or by the stove.`,
          `{appearance}`,
        ],
      },
      {
        p: `The label doesn’t give directions for children, contact lenses or using it alongside another drop. Ask your eye doctor or pharmacist about those. See the full panel on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Running low before the holiday' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any U.S. address, but no delivery date is promised, so order well before the weekend if you’re close to the end of a bottle. Shipping is {shipping}, or free on {freeBottles} or more bottles. There are no Black Friday deals or promo codes; the price is the same all season, as [Does Quell have Black Friday deals?](/guides/quell-black-friday-and-holiday-deals) explains. [Buy Quell here](/#buy).`,
      },
      { h: 'When it’s not the party' },
      {
        p: `{stopUse} Dryness that lasts well past the weekend, or that comes with pain, light sensitivity or blurry vision that doesn’t clear, isn’t about the oven. An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'When should you have Friendsgiving in 2026?',
        a: `Most groups pick a weekend near Thanksgiving, which is Thursday, November 26, 2026. The Saturday before (November 21) or after (November 28) are common choices.`,
      },
      {
        q: 'Why do my eyes burn at a crowded dinner party?',
        a: `A warm, crowded room with the heat and oven running is dry, and candles or cooking smoke add irritants. Talking, eating and looking at phones also lower your blink rate.`,
      },
      {
        q: 'How do I keep my apartment from getting too hot for Friendsgiving?',
        a: `Turn the thermostat down before guests arrive, crack a kitchen window while the oven runs, and use the range hood fan. Body heat from a full room makes up the difference.`,
      },
      {
        q: 'Can I bring eye drops to a Friendsgiving?',
        a: `Yes. Keep the bottle in a pocket or small bag at room temperature, wash your hands before using it, and follow the label’s directions rather than adding extra doses.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-watching-thanksgiving-football',
    title: 'Dry eyes from watching Thanksgiving football',
    description:
      'Hours of Thanksgiving games in a warm, crowded living room can leave eyes dry and tired. How to watch the whole slate and keep your eyes comfortable.',
    category: 'seasonal',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Watching football from midday into the night on Thanksgiving can dry your eyes because you blink less when you’re locked on a tense play, the living room is warm and crowded, and the oven and furnace run for hours. Sit farther back from the TV, close your eyes during commercials, keep vents and fireplaces off your face, and use a lubricating drop as its label directs if you use one.`,
      },
      { h: 'Why game day is harder on your eyes than a normal TV night' },
      {
        p: `Thanksgiving television isn’t a single show. It’s a long block of games that can start around lunch and run past dinner, often with a parade or pregame before that. Our guide on [dry eyes when binge-watching TV](/guides/dry-eyes-when-binge-watching-tv) covers long screen sessions in general; Thursday adds a few holiday-specific problems on top.`,
      },
      {
        list: [
          `Suspense lowers blinking. On a third down, a long drive or a replay review, people stare without blinking for several seconds at a time.`,
          `The room is full. More people means more body heat, and the furnace still cycles, so the air stays warm and dry.`,
          `The oven runs for hours, adding dry heat that drifts into the den.`,
          `A fireplace or candles often go with the occasion.`,
          `A second screen sits in your hand: fantasy scores, group chats and photos between plays.`,
        ],
      },
      { h: 'Where to sit' },
      {
        p: `Seat choice is the easiest fix and nobody has to know why you picked it. The spot directly in front of a floor register, beside the fireplace, or under a spinning ceiling fan is the driest in the room. A seat a bit farther from the screen also helps: when the TV fills less of your view, your eyes move less and you tend to blink more normally. If you’re the host, set up the couches so nobody faces the fire or a vent.`,
      },
      { h: 'Use the breaks the broadcast gives you' },
      {
        p: `Football is full of pauses: timeouts, commercials, halftime, the gap between games. They’re built-in rest stops for your eyes.`,
      },
      {
        list: [
          `At each commercial break, close your eyes gently for a few seconds, then blink slowly several times.`,
          `At halftime, get up. Carry a dish to the kitchen, step outside, look at something far away.`,
          `Between games, take a short walk; it’s a family tradition in a lot of houses for a reason.`,
          `Put the phone face down during plays and check it only during breaks, so one screen at a time has your attention.`,
        ],
      },
      { h: 'Keeping the den comfortable' },
      {
        p: `Turn the thermostat down a couple of degrees once the room fills; the crowd will make up the difference. If you have a humidifier, run it in the TV room in the morning, before guests arrive. Keep the fireplace screen closed and the fire modest, and seat people away from it. For more on fires and flames, see [fireplaces, candles and dry eyes](/guides/fireplaces-candles-and-dry-eyes). If someone’s cooking with the oven open often, the range hood fan helps keep heat in the kitchen.`,
      },
      { h: 'The night game and the drive home' },
      {
        p: `By the last game it’s dark, people are full and tired, and tired eyes blink less completely. If you’re driving home after, leave enough time to rest your eyes for a few minutes first, aim the car’s heat at the windshield, and keep the dash vents off your face. [Dry eyes when driving at night](/guides/dry-eyes-when-driving-at-night) has more for the trip.`,
      },
      { h: 'Kids and video games on Thanksgiving' },
      {
        p: `In many houses the younger crowd spends the afternoon on a console or tablet. They stare too, and the same breaks help them. Quell’s label gives no directions for children, though, so for a child’s dry or irritated eyes, ask their eye doctor or pharmacist rather than sharing an adult’s drops.`,
      },
      { h: 'What Quell is, and how to use it on game day' },
      {
        p: `Quell™ is a lubricating eye drop sold over the counter, designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label’s uses: {uses}. Its directions: {directions}. On a long Thursday that might mean one dose in the morning, one in the afternoon and one in the evening, spread out as directed.`,
      },
      {
        list: [
          `{tip}.`,
          `Storage: {storage}. Keep it away from the fireplace mantel and the stove.`,
          `If swallowed: {swallowed}. Keep it out of reach of kids who are curious about bottles on the coffee table.`,
        ],
      },
      {
        p: `If you wear contacts or already use another drop, the label doesn’t cover it; ask your eye doctor or pharmacist. Read the [Drug Facts page](/drug-facts) for the whole panel.`,
      },
      { h: 'Restocking before the holiday' },
      {
        p: `Orders ship from Brentwood, Tennessee, to U.S. addresses only, and no arrival date is promised, so order early if you’re traveling for the game or hosting. Shipping is {shipping}, or free on {freeBottles} or more bottles. If you’ll be away from home, [Thanksgiving travel with eye drops](/guides/thanksgiving-travel-with-eye-drops) covers packing. [Buy Quell](/#buy).`,
      },
      { h: 'When to call an eye doctor' },
      {
        p: `{stopUse} If eyes stay dry for days after the holiday, or you notice pain, light sensitivity or blurring that doesn’t clear when you blink, see an eye doctor, who can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get tired watching football for hours?',
        a: `Tense plays make you stare and blink less, and a warm, crowded room with the furnace and oven running dries the air. Closing your eyes during commercials and sitting away from vents helps.`,
      },
      {
        q: 'How far should I sit from the TV during a long game?',
        a: `Far enough that the screen doesn’t fill your whole view, so your eyes move less. Avoid the seats in front of a vent, a fireplace or under a ceiling fan.`,
      },
      {
        q: 'Is it bad to look at my phone while watching TV?',
        a: `Switching between two screens keeps your eyes busy with few breaks. Put the phone down during plays and check it during commercials, so one screen has your attention at a time.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-from-cyber-monday-shopping',
    title: 'Dry eyes from Black Friday and Cyber Monday shopping',
    description:
      'Deal-hunting on a phone at midnight and comparing tabs for hours can leave eyes dry. Screen habits for Black Friday through Cyber Monday, plus Quell’s pricing.',
    category: 'seasonal',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Online deal hunting from Black Friday through Cyber Monday dries eyes because you stare at small screens for hours, often late at night, and blink less while you compare prices and race checkout timers. Shop from a list, use a larger screen at arm’s length, close your eyes between sites, and keep the room’s heat off your face. If you use a lubricating drop, follow its label. Quell has no Black Friday sale or promo codes.`,
      },
      { h: 'When are Black Friday and Cyber Monday in 2026?' },
      {
        p: `Thanksgiving is Thursday, November 26, 2026, so Black Friday is November 27 and Cyber Monday is November 30. Plenty of online sales start days earlier and stretch through the week after, which turns a single shopping day into a long run of evenings at a screen.`,
      },
      { h: 'Why deal hunting is harder on eyes than browsing' },
      {
        p: `Reading a long article is steady. Deal hunting isn’t. You scan product grids, zoom in on photos, flip between tabs to compare prices, and watch countdowns. That kind of focused searching slows your blink rate, and many blinks become partial, leaving the lower part of the eye uncovered. The tear film’s water layer evaporates between blinks, and the room you’re sitting in, warmed by the furnace in late November, speeds that up.`,
      },
      {
        list: [
          `Small screens held close: phones bring the screen near your face and make you squint.`,
          `Late hours: sales that drop at midnight keep you up when eyes are already tired.`,
          `Dim rooms: a bright phone in a dark bedroom makes you stare harder.`,
          `Time pressure: “ends in 10 minutes” banners make people forget to look away.`,
        ],
      },
      { h: 'A screen plan for the long weekend' },
      {
        list: [
          `Write your list before the sales start, with a price you’re willing to pay for each item. Fewer aimless scrolls mean fewer minutes of staring.`,
          `Use a laptop or desktop at arm’s length rather than a phone held 10 inches away.`,
          `Turn up the font size or page zoom so you aren’t squinting at prices.`,
          `Match screen brightness to the room, and switch on a lamp rather than shopping in the dark.`,
          `Between each store or tab, look across the room for a few seconds and blink fully a few times.`,
          `Set a time to stop. A deal at 1 a.m. is rarely worth what the next morning feels like.`,
        ],
      },
      {
        p: `If you shop from bed, [dry eyes from looking at your phone in bed](/guides/dry-eyes-from-looking-at-your-phone-in-bed) has tips on position and light.`,
      },
      { h: 'The room around the screen' },
      {
        p: `By late November, most homes have the heat on. Sit away from floor registers, keep space heaters pointed at your feet, and if you have a humidifier, run it in the room where you shop. A ceiling fan running over the couch adds moving air you won’t notice until your eyes do; turn it off or down.`,
      },
      { h: 'Does Quell have Black Friday or Cyber Monday deals?' },
      {
        p: `No. Quell’s price is the same every day, there are no promo codes, and there’s no subscription discount. The only change in what you pay comes from shipping: {shipping} on smaller orders and free shipping on {freeBottles} or more bottles. That’s written out in [Does Quell have Black Friday deals?](/guides/quell-black-friday-and-holiday-deals). So you don’t need to wait up for a drop or race a countdown; you can order whenever it suits you.`,
      },
      {
        p: `If you’re buying bottles as gifts during the weekend, checkout is guest-only, and you can ship to the recipient’s U.S. address. Orders ship from Brentwood, Tennessee, and no delivery date is promised, so give holiday orders room. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back.`,
      },
      { h: 'How to tell a real Quell page from a fake deal' },
      {
        p: `Big sale weekends bring ads and texts that look like stores. Quell is sold on quelldrop.com. If you see a “Quell Black Friday sale” on a social media ad or a text message, it isn’t from us, since there’s no sale to advertise. Card details are entered on the payment provider’s own secure page, reached from this site’s checkout button. [How to buy eye drops online safely](/guides/how-to-buy-eye-drops-online-safely) covers the warning signs.`,
      },
      { h: 'Using Quell during long screen sessions' },
      {
        p: `Quell™ is a lubricating eye drop sold over the counter, designed to reinforce the tear film’s oil layer to help reduce moisture loss. The directions on the label: {directions}. It doesn’t replace breaks; it works alongside them.`,
      },
      {
        list: [
          `{tip}.`,
          `Storage: {storage}.`,
          `{milky}. {appearance}`,
        ],
      },
      {
        p: `The label doesn’t cover contact lenses, children or use with other drops; ask your eye doctor or pharmacist. Read the full panel on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'When it’s more than screen time' },
      {
        p: `{stopUse} If dryness lingers after the shopping weekend is over, or you have pain, light sensitivity or blurred vision that blinking doesn’t clear, see an eye doctor. They can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help.`,
      },
    ],
    faq: [
      {
        q: 'When is Cyber Monday 2026?',
        a: `Monday, November 30, 2026. Thanksgiving is Thursday, November 26, so Black Friday falls on November 27.`,
      },
      {
        q: 'Why do my eyes hurt after online shopping?',
        a: `Scanning product grids and comparing prices makes you stare and blink less, often on a small phone screen held close in a heated room. Breaks between sites and a bigger screen at arm’s length help.`,
      },
      {
        q: 'Is Quell on sale for Cyber Monday?',
        a: `No. Quell has one everyday price with no promo codes or sales. Shipping is {shipping}, or free when you order {freeBottles} or more bottles.`,
      },
      {
        q: 'Is it better to shop online on a phone or a computer for your eyes?',
        a: `A laptop or desktop at arm’s length is usually easier on the eyes than a phone held close, because you squint less and can enlarge the text.`,
      },
    ],
  },

  {
    slug: 'hosting-thanksgiving-houseguests-in-a-heated-house',
    title: 'Hosting Thanksgiving houseguests in a heated house',
    description:
      'Guest rooms near vents, air mattresses by the register and an oven on for hours: how to keep a full, heated house comfortable for everyone’s eyes.',
    category: 'seasonal',
    addedOn: '2026-11-20',
    body: [
      {
        p: `When Thanksgiving guests stay over, a heated house gets drier and stuffier than usual: the furnace runs, the oven runs, and people sleep in spare rooms, on sofa beds and air mattresses that often sit right beside a vent. Move beds away from registers, run a humidifier in guest rooms, lower the thermostat at night, and leave a note on where things are. Guests who use drops should bring their own.`,
      },
      { h: 'Why houseguests notice dry air first' },
      {
        p: `You’re used to your own house. Guests aren’t. Someone who lives in a humid climate and flies into a cold-weather state for the holiday steps into heated air with much less moisture than what their eyes are used to. The tear film’s water layer evaporates faster in warm, dry air, and guests who wake up with scratchy, sticky eyes often blame the trip. Often it’s the bedroom.`,
      },
      { h: 'Setting up the guest room' },
      {
        list: [
          `Check where the register is. Push the bed, the futon or the air mattress so the vent isn’t blowing across the pillow.`,
          `If you can’t move the bed, fit a magnetic or clip-on vent deflector, or partly close the register.`,
          `Run a humidifier in the room for a few hours before guests arrive, and show them how to refill and switch it off. Clean it first if it’s been in the closet since spring.`,
          `Take the space heater out of the room or set it to point at the floor, away from the bed.`,
          `Leave a lamp so guests aren’t scrolling on a bright phone in the dark to find their way around.`,
        ],
      },
      {
        p: `[Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) covers sizes and placement.`,
      },
      { h: 'The sofa bed and the living room' },
      {
        p: `Someone always ends up in the living room, and it’s often the warmest room in the house, with the fireplace, the TV and the main return vent. If a guest is sleeping there, let the fire die down well before bedtime, close the screen, and turn the ceiling fan off. A cooler room at night is easier on eyes than a toasty one.`,
      },
      { h: 'Thanksgiving Day: the oven and the crowd' },
      {
        p: `A turkey can keep the oven going for hours, and side dishes keep it going longer. With extra people inside, the house can climb several degrees. Lower the thermostat before the meal and use the range hood fan. Crack a kitchen window if it gets stuffy. These steps keep dry heat from building up in the rooms where guests sit for the afternoon. If you’re also the cook, [dry eyes when cooking holiday dinner](/guides/dry-eyes-when-cooking-holiday-dinner) covers the kitchen itself.`,
      },
      { h: 'The thermostat compromise' },
      {
        p: `Guests have different comfort levels, and older relatives often want it warmer. A middle path: keep the shared rooms moderate during the day, and set a lower temperature at night, with extra blankets in every guest room. Warmer blankets let you run the furnace less, which means less hot, dry air blowing through the house while everyone sleeps.`,
      },
      { h: 'A small kit for guests' },
      {
        p: `Some hosts leave a basket in the guest room. Practical items: a refillable water bottle for the nightstand, a spare phone charger so nobody has to sit by the outlet in the hall, an extra blanket, and a note with the Wi-Fi password. Eye drops are personal, so rather than putting out a shared bottle, ask guests to bring their own. If a guest asks to use yours, the safer answer is a quick trip to the pharmacy for their own bottle.`,
      },
      { h: 'For guests who use Quell' },
      {
        p: `Quell™ is a lubricating eye drop available over the counter, designed to reinforce the tear film’s oil layer to help reduce moisture loss. Guests who use it should pack it in their own bag and follow the label: {directions}.`,
      },
      {
        list: [
          `{tip}.`,
          `Storage: {storage}. A car trunk on a cold drive or a bag next to a radiator can push it out of that range.`,
          `{appearance}`,
        ],
      },
      {
        p: `The label doesn’t address contact lenses, children or combining it with other drops. Guests with those questions should ask their own eye doctor or pharmacist. Our guide to [visiting family with eye drops](/guides/visiting-family-with-eye-drops) is written for the traveler, and [Thanksgiving travel with eye drops](/guides/thanksgiving-travel-with-eye-drops) covers packing and airports.`,
      },
      { h: 'If a guest forgets their drops' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any U.S. address, and you can send it straight to your house with guest checkout. Shipping is {shipping}, or free on {freeBottles} or more bottles. No delivery date is promised, though, so for a guest staying only a few days, a local pharmacy is the faster route. Order ahead next year, or [buy Quell](/#buy) now for the December visits.`,
      },
      { h: 'When a guest should see a doctor' },
      {
        p: `{stopUse} Irritation with pain, light sensitivity or vision changes isn’t a dry-air problem to wait out. An urgent care, emergency department or eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'How do I make my guest room less dry?',
        a: `Move the bed away from the vent or deflect the register, run a humidifier for a few hours before guests arrive, and set the thermostat lower at night with extra blankets.`,
      },
      {
        q: 'What temperature should I keep my house when I have guests?',
        a: `Keep shared rooms moderate during the day, turn it down when the oven and the crowd warm the house, and go cooler at night with extra blankets so the furnace runs less.`,
      },
      {
        q: 'Should I put eye drops in a guest basket?',
        a: `Eye drops are personal, so it’s better to ask guests to bring their own than to set out a shared bottle. A water bottle, charger and extra blanket make more sense for a basket.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-for-forklift-operators',
    title: 'Dry eyes for forklift operators',
    description:
      'Looking up at high racks, exhaust and dock-door drafts, and hours of scanning around the mast: why forklift operators get dry eyes and what helps.',
    category: 'using',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Forklift operators get dry eyes from the way the job uses them: hours of steady scanning around the mast and up at high racking, which slows blinking and opens the eyes wide, plus drafts from dock doors, fans and exhaust from fuel-powered trucks. Blink fully at each set-down, wear wraparound safety glasses, keep your seat out of direct fan blast, and use a lubricating drop as its label directs, before or after a shift.`,
      },
      { h: 'Why do forklift drivers get dry eyes?' },
      {
        p: `Driving a lift truck is a vision job. You check behind you before every reverse, look around or through the mast on every travel, and lift your gaze to the top beam when you place or pull a load. Two things happen to your eyes during that work. First, careful focus lowers your blink rate; people concentrating on a precise task often go many seconds between blinks. Second, looking upward opens the lids wider, which exposes more of the eye’s surface to the air. More exposed surface plus fewer blinks means faster evaporation from the tear film.`,
      },
      {
        p: `The tear film is a thin layer of oil over water over mucus. Each complete blink spreads it again. When blinks become partial, as they do during concentration, the lower part of the eye stays exposed and starts to feel dry first. [How blinking spreads tears](/guides/how-blinking-spreads-tears) explains the mechanics.`,
      },
      { h: 'The high-rack problem' },
      {
        p: `Reach trucks and order pickers working tall racking have the most upward gaze of any lift job. Each placement at height means tilting your head back and holding a wide-eyed stare until the forks clear the beam. A useful habit: once the load is set and the forks are free, look down at the floor ahead, then close your eyes for a full second before you lower. You were going to pause anyway; this turns the pause into a reset for your eyes.`,
      },
      { h: 'Exhaust, fans and drafts' },
      {
        list: [
          `Propane, gas and diesel lift trucks put out exhaust, and the operator sits close to it. Stale, warm air near the counterweight can make eyes feel irritated.`,
          `Big ceiling fans and pedestal fans keep a building bearable, but a fan aimed at your travel lane blasts air at your face every lap.`,
          `Dock doors swap warm building air for outdoor drafts, cold in winter and hot and dusty in summer.`,
          `Heaters mounted high in winter blow dry heat down on the aisles.`,
        ],
      },
      {
        p: `You can’t move the building’s air, but you can ask a supervisor whether a pedestal fan can be angled across rather than down an aisle, and you can keep your sunglasses or safety glasses on when working near the doors.`,
      },
      { h: 'Outdoor yards: lumber, block and pipe' },
      {
        p: `Not every lift works under a roof. Lumber yards, building-supply yards, brick and block lots and pipe yards run rough-terrain forklifts and telehandlers in the open, in sun, wind and dust. Sawdust and grit are the extra irritants. Wraparound safety glasses with side shields block more wind and particles than flat lenses. Wash your hands before you touch your eyes or use drops; sawdust and cement dust on fingers end up in the eye. For a particle stuck in the eye, use an eyewash station, not drops. Our guide on [eye drops vs. eye wash](/guides/eye-drops-vs-eye-wash) explains the difference.`,
      },
      { h: 'Cold docks and freezer work' },
      {
        p: `Operators who run into coolers and freezers face very cold air pushed by evaporator fans. Cold air holds little moisture, so it dries the eye quickly, and the jump from freezer to dock and back can leave eyes watering and then dry. [Dry eyes in cold storage and freezer work](/guides/dry-eyes-in-cold-storage-and-freezer-work) covers that environment in detail.`,
      },
      { h: 'Habits that fit a lift-truck shift' },
      {
        list: [
          `Blink fully at each set-down. Make it part of the routine: forks down, blink, look, go.`,
          `Use breaks to look far away, out a dock door or down a long aisle, which relaxes focus.`,
          `Keep the cab or seat out of a fan’s direct path when you park between tasks.`,
          `Wear the eye protection your site requires; wraparound styles help with drafts too.`,
          `Get a full night’s rest when you can. Tired eyes blink less completely.`,
        ],
      },
      {
        p: `Never put drops in while the truck is moving. Park, set the brake, lower the forks and step off or sit still before you tilt your head back. Give your vision a moment to clear before you drive again.`,
      },
      { h: 'Using Quell around a shift' },
      {
        p: `Quell™ is an over-the-counter lubricating eye drop, designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its uses, per the label: {uses}. The directions: {directions}. That spacing fits a work day: one dose before you clock in, one at lunch and one after the shift, following the label.`,
      },
      {
        list: [
          `{tip}.`,
          `Storage: {storage}. A truck seat box or a dock-side shelf can get far colder or hotter than that; a locker in a heated break room is a better home.`,
          `{appearance}`,
          `Do not use: {doNotUse}.`,
        ],
      },
      {
        p: `If you wear contact lenses at work, or use another drop, the label doesn’t cover it; ask your eye doctor or pharmacist. Every line is on the [Drug Facts page](/drug-facts). For the wider building, see [dry eyes for warehouse workers](/guides/dry-eyes-for-warehouse-workers).`,
      },
      { h: 'Ordering' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any U.S. address with guest checkout. Shipping is {shipping}, or free on {freeBottles} or more bottles. If you’re buying for a crew, see [buying eye drops for your employees](/guides/buying-eye-drops-for-your-employees). [Buy Quell here](/#buy).`,
      },
      { h: 'When dryness needs a doctor' },
      {
        p: `{stopUse} Anything that gets into the eye at work and won’t rinse out, or any injury, should be reported and seen promptly. For dryness that keeps coming back, an eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry driving a forklift?',
        a: `Scanning around the mast and looking up at high racks lowers your blink rate and opens your eyes wider. Fans, dock-door drafts and exhaust then dry the exposed surface faster.`,
      },
      {
        q: 'Can forklift drivers use eye drops on shift?',
        a: `Only with the truck parked, the brake set and the forks down, and only if your workplace allows it. Give your vision a moment to clear before you drive again.`,
      },
      {
        q: 'What safety glasses help with dry eyes on a forklift?',
        a: `Wraparound styles with side coverage block more drafts and dust than flat lenses. Wear whatever your site requires; wraparound versions usually meet the same needs.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-for-ferry-crews',
    title: 'Dry eyes for ferry crews',
    description:
      'Wind on an open car deck, salt spray, a hot engine room and night watches at a radar screen: why ferry crews get dry eyes and what helps on each run.',
    category: 'using',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Ferry crews get dry eyes because each shift moves between harsh settings: wind and salt spray on the open car deck, dry heat in the engine room, glare off the water, and long stretches staring at radar and chart screens in the wheelhouse. Wear wraparound sunglasses on deck, rinse salt off your hands, take blink breaks during watches, and use a lubricating drop as its label directs, between runs rather than underway.`,
      },
      { h: 'Why ferry work dries your eyes' },
      {
        p: `A ferry underway makes its own wind. Add the wind that’s already blowing, and a deckhand at the bow or on the car deck has air moving across the face for most of each crossing. Moving air pulls water out of the tear film quickly. Then there’s the sun, reflected up from the water as well as down from the sky, which makes people squint and blink less fully. On a busy route, a crew member might do a dozen crossings in a shift, with little time between them to recover.`,
      },
      { h: 'Deckhands: lines, ramps and spray' },
      {
        list: [
          `Wear wraparound sunglasses with polarized lenses on bright days; they cut glare and block wind from the sides.`,
          `On cold runs, a hood or beanie and a neck gaiter pulled up to the cheekbones reduce the air reaching your eyes.`,
          `Spray leaves salt on your face, hands and lashes. Rinse with fresh water before touching your eyes or using drops.`,
          `Turn your back to the wind while waiting at the ramp, and blink slowly a few times once you’re out of it.`,
        ],
      },
      {
        p: `Gloves handling wet lines carry salt and grime too. Take them off and wash up before rubbing an itchy eye; rubbing only grinds salt and grit across the surface.`,
      },
      { h: 'The wheelhouse: screens and night watches' },
      {
        p: `Captains and mates spend their watch alternating between the windows and the screens: radar, electronic charts, engine displays. Watching for traffic in fog or after dark takes intense focus, and the eyes barely blink when you’re scanning for a small boat or a buoy. Wheelhouses are often warm in winter and air-conditioned in summer, with defrosters blowing across the windows near the crew.`,
      },
      {
        list: [
          `Dim screens to the lowest level that still reads clearly at night, which keeps you from squinting and protects night vision.`,
          `Between checks, close your eyes for a full second, then open them and resume scanning.`,
          `Angle defroster or heater vents toward the glass rather than the helm chair.`,
          `On long watches, swap duties with the second crew member when routine allows.`,
        ],
      },
      { h: 'Engine room heat' },
      {
        p: `Engine rooms run hot and loud, with forced ventilation moving warm air constantly. Engineers and oilers spend hours in that air, then step out into a cold car deck or a winter wind. Heat and fast air both dry the eye’s surface. Short breaks out of the space, safety glasses with side shields, and washing hands before touching your face all help. If oil or fuel splashes in an eye, use the eyewash station and report it; that’s not a job for lubricating drops.`,
      },
      { h: 'Ticket booths and terminal staff' },
      {
        p: `Terminal crews deal with a different mix: car exhaust from lines of idling vehicles, a booth heater or AC aimed at the window, and a scanner or register screen. Keep the booth heater aimed at your legs, take your breaks away from the vehicle lanes, and look into the distance now and then.`,
      },
      { h: 'Using Quell between crossings' },
      {
        p: `Quell™ is a lubricating eye drop sold over the counter. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, the part of the tear film wind and dry heat work against. The label lists its uses: {uses}. Its directions: {directions}.`,
      },
      {
        list: [
          `Use drops in the crew room or while tied up, never while handling lines, ramps or the helm.`,
          `{tip}.`,
          `Storage: {storage}. A deck locker in winter or a sunny wheelhouse shelf in July can fall outside that; keep the bottle in your bag in the crew room.`,
          `{appearance}`,
        ],
      },
      {
        p: `The label doesn’t give directions for contact lenses, children or use with another eye drop. If you wear contacts on deck, ask your eye doctor what they suggest. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'How it compares to other work on the water' },
      {
        p: `Commercial fishing crews deal with longer days offshore; recreational boaters deal with sun and spray for an afternoon. If your days look more like those, see [dry eyes for commercial fishermen](/guides/dry-eyes-for-commercial-fishermen) or [dry eyes on a boat](/guides/dry-eyes-on-a-boat). Ferry work is shorter trips, repeated all shift, with a schedule that leaves less time to rest between exposures.`,
      },
      { h: 'Ordering' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any U.S. address, including island addresses that get mail service. Checkout is guest-only; shipping is {shipping}, or free on {freeBottles} or more bottles. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. [Order Quell](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `{stopUse} Pain, sudden blurry vision, or light sensitivity that doesn’t settle after a shift should be checked. An eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes burn after working on a ferry?',
        a: `Constant wind across the deck, salt spray, glare off the water and long periods of focus all speed evaporation from the tear film. Wraparound sunglasses and freshwater rinses help.`,
      },
      {
        q: 'Can ferry deckhands wear sunglasses while working?',
        a: `Many do, and wraparound polarized lenses help with both wind and glare. Follow your company’s rules on eyewear and any safety glasses it requires.`,
      },
      {
        q: 'How do I keep my eyes from drying out on a night watch?',
        a: `Dim screens as low as they still read, aim heater and defroster vents at the glass rather than your face, and close your eyes for a full second between checks.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-for-tow-truck-drivers',
    title: 'Dry eyes for tow truck drivers',
    description:
      'Night calls, flashing lights, passing traffic and long waits in a heated cab: why tow truck operators get dry eyes, and simple habits that help.',
    category: 'using',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Tow truck drivers get dry eyes from a combination of night driving, the blast of air from passing traffic at roadside scenes, dusty lots and hours in a heated or air-conditioned cab waiting for the next call. Fatigue from on-call nights makes it worse. Keep cab vents off your face, wear clear wraparound safety glasses at scenes, blink deliberately after each hookup, and use a lubricating drop as labeled while parked.`,
      },
      { h: 'Why towing is hard on the eyes' },
      {
        p: `A tow operator’s shift jumps between two very different places. The cab is enclosed, with the heater or the AC running, a dispatch tablet or phone glowing on the dash, and long waits between calls. The scene is the opposite: open road, wind from passing traffic, flashing amber lights, headlights in your face, and whatever dust, glass or fluids are on the ground. Both dry the tear film, in different ways. In the cab, it’s dry, moving air and staring at a screen. At the scene, it’s wind and grit while you concentrate on the job.`,
      },
      { h: 'Roadside: wind, lights and debris' },
      {
        list: [
          `Every truck that passes at highway speed pushes a wall of air across the shoulder. Clear wraparound safety glasses at night and tinted ones by day block most of it.`,
          `Flashing lights and oncoming headlights make you squint. Squinting changes the blink, so blink fully a few times once the car is on the deck.`,
          `Crash scenes can have dust, small glass and fluids. Use the eyewash in your truck’s kit for anything that gets in the eye, not lubricating drops.`,
          `Wash or wipe your hands before rubbing your eyes; brake dust and road grime ride on gloves and fingers.`,
        ],
      },
      { h: 'In the cab between calls' },
      {
        p: `Waiting is a big part of towing: staged near a busy stretch, idling in a lot, sitting outside a police scene until it’s clear. Many drivers spend that time on a phone or the dispatch screen, with the cab heater blasting in winter or the AC on high in summer. That’s close-up focus plus dry, moving air for hours.`,
      },
      {
        list: [
          `Aim dash vents at the windshield, your chest or the floor, never straight at your face.`,
          `Use a lower fan speed once the cab is comfortable.`,
          `Put the phone down for a few minutes each hour and look out the windshield into the distance.`,
          `Crack a window for fresh air when it’s safe and the weather allows.`,
        ],
      },
      { h: 'Night calls and fatigue' },
      {
        p: `Towing runs around the clock, and many drivers take on-call shifts that break up sleep. Tired eyes blink less completely and feel drier. Night driving also means staring into darkness and oncoming lights, which reduces blinking further. [Dry eyes when driving at night](/guides/dry-eyes-when-driving-at-night) covers the driving side in more detail. Protect your off-call sleep where you can: a dark, cool room, the fan turned away from the bed, and the phone face down except for dispatch alerts.`,
      },
      { h: 'Impound lots and dusty yards' },
      {
        p: `Storage yards are often gravel or dirt, and every truck that drives through raises dust, especially in dry summer weeks. Moving vehicles around the yard on a windy day can leave eyes feeling sandy. Sunglasses or safety glasses help here too, and so does rinsing your face and hands at the end of the shift before you touch your eyes.`,
      },
      { h: 'Using Quell on a towing shift' },
      {
        p: `Quell™ is an over-the-counter lubricating eye drop, designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label’s uses: {uses}. Directions: {directions}. Use it only when the truck is parked and you’re not working a scene, and give your vision a moment to clear before you drive.`,
      },
      {
        list: [
          `{tip}.`,
          `Storage: {storage}. A truck cab or toolbox can be far hotter in summer and colder in winter than that, so keep the bottle in a bag you bring inside.`,
          `{appearance}`,
          `If swallowed: {swallowed}.`,
        ],
      },
      {
        p: `For contact lenses, other drops or children, the label gives no directions; ask your eye doctor or pharmacist. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Other jobs on the shoulder' },
      {
        p: `Highway crews and long-haul drivers share some of the same problems: traffic wind, glare and long hours in a cab. See [dry eyes for highway workers](/guides/dry-eyes-for-highway-workers) and [eye drops for truck drivers](/guides/eye-drops-for-truck-drivers) for their versions.`,
      },
      { h: 'Ordering Quell' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any U.S. address, including a shop or yard address. Guest checkout, buyers 18 and up; shipping is {shipping}, or free on {freeBottles} or more bottles. No delivery date is promised, so order before you run out. [Buy Quell](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `{stopUse} Anything that hits your eye at a scene and doesn’t rinse out, or an eye injury of any kind, needs prompt care. For dryness that keeps returning, an eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do tow truck drivers get dry eyes?',
        a: `They split time between a cab with heat or AC blowing and a dispatch screen to watch, and roadside scenes with wind from passing traffic, bright lights and dust. Fatigue from night calls adds to it.`,
      },
      {
        q: 'Should tow truck drivers wear safety glasses at night?',
        a: `Clear wraparound safety glasses block the wind from passing traffic and flying grit without darkening your view. Follow your company’s rules on eye protection.`,
      },
      {
        q: 'Can I use eye drops while waiting in my truck?',
        a: `Yes, if the truck is parked and you’re not about to drive. Follow the label’s directions and give your vision a moment to clear before you pull out.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-for-sanitation-workers',
    title: 'Dry eyes for sanitation workers',
    description:
      'Early routes in the dark, dust from bins and compactors, wind on the riding step and constant mirror checks: why trash collectors get dry eyes.',
    category: 'using',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Sanitation workers get dry eyes because the job mixes dust from carts and the compactor, wind from riding and walking the route, early starts in the dark and a driver’s constant checks of mirrors and camera screens. Wear wraparound safety glasses, turn your face away when a cart tips, keep cab vents off your face, wash before touching your eyes, and use a lubricating drop as its label directs on breaks or after the shift.`,
      },
      { h: 'Why trash and recycling routes dry your eyes' },
      {
        p: `A collection route is hundreds of stops, each with the same few motions: pull up, dump or lift, compact, move on. Every lift tips a cart or a dumpster over the hopper, and that kicks up whatever’s inside: dust, ash, grass clippings, cardboard fibers, the fine grit at the bottom of a recycling bin. Wind carries it right back at the crew. Meanwhile the truck is moving air past anyone riding or walking alongside. Dust irritates the eye’s surface and wind dries the tear film, and the two together make eyes feel sandy by mid-route.`,
      },
      { h: 'On the step and on foot' },
      {
        list: [
          `Wear wraparound safety glasses with side shields; they block both wind and dust better than flat lenses.`,
          `When a cart tips or the packer cycles, turn your face away for a second.`,
          `Don’t rub your eyes with gloves on. Take them off and wipe your hands, or wait for a break.`,
          `In winter, a beanie and a gaiter up over the cheeks reduce the cold air reaching your eyes.`,
          `In summer, a cap brim cuts sun glare off pavement and windshields.`,
        ],
      },
      { h: 'In the driver’s seat' },
      {
        p: `The driver’s eyes are working the whole route: mirrors on both sides, a backup camera, sometimes a side camera for the automated arm, plus the road ahead. Reversing into alleys and lining up the arm with a cart takes precise focus, and blinking drops during it. The cab heater in winter and AC in summer keep dry air moving across your face.`,
      },
      {
        list: [
          `Aim cab vents at your chest or the windshield, not at your eyes.`,
          `At each stop while the arm cycles, look far down the street and blink fully a few times.`,
          `Dim the camera screen to match the light outside so you aren’t squinting into it.`,
          `When the truck is parked at the transfer station or yard, close your eyes for a minute.`,
        ],
      },
      { h: 'Before dawn and after dark' },
      {
        p: `Many routes start early, some before sunrise. That means early wake-ups, short sleep and driving in the dark with headlights and streetlights in your eyes. Tired eyes blink less completely and feel drier. Protecting sleep is part of protecting your eyes: a dark, cool bedroom, a fan pointed away from the bed, and a regular bedtime even on days off. [Dry eyes when driving at night](/guides/dry-eyes-when-driving-at-night) has more for the dark hours.`,
      },
      { h: 'At the transfer station and landfill' },
      {
        p: `Tipping floors and landfill faces are dusty, windy places, and some trucks wait in line there with windows open. Keep windows up when the air is thick with dust, and run the cab’s recirculate setting while you wait if the air outside looks dirty. If something gets into your eye there, flush it with an eyewash, not drops, and report it. Our guide to [eye drops vs. eye wash](/guides/eye-drops-vs-eye-wash) explains the difference.`,
      },
      { h: 'Using Quell around a route' },
      {
        p: `Quell™ is an over-the-counter lubricating eye drop, designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label lists its uses: {uses}. The directions say: {directions}. On a route day that could be once before you start, once at lunch and once when you get home.`,
      },
      {
        list: [
          `Wash your hands first, every time. Route grime should never get near the bottle tip or your eye.`,
          `{tip}.`,
          `Storage: {storage}. A truck cab in summer or winter can go well outside that, so keep the bottle in a lunch bag or locker.`,
          `{appearance}`,
        ],
      },
      {
        p: `The label doesn’t address contact lenses, children or combining it with other drops. Ask your eye doctor or pharmacist. Read every section on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Similar jobs, different details' },
      {
        p: `Mail carriers share the stop-and-go route; delivery drivers share the cab and the screens. If parts of your job overlap, see [dry eyes for mail carriers](/guides/dry-eyes-for-mail-carriers) and [dry eyes for delivery drivers](/guides/dry-eyes-for-delivery-drivers). Sanitation work adds the dust from every lift and the compactor’s cycle, which is why eye protection matters more here.`,
      },
      { h: 'Ordering Quell' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any U.S. address, with guest checkout. Shipping is {shipping}, or free on {freeBottles} or more bottles, and unopened bottles can be refunded within {returnDays} days of delivery. [Buy Quell here](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `{stopUse} If something flies into your eye and won’t rinse out, or your eye is injured, get it seen promptly. For dryness that keeps coming back after shifts, an eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do garbage collectors get dry eyes?',
        a: `Every lift kicks dust and grit out of carts and the hopper, wind from the moving truck carries it back, and early starts mean tired eyes. Drivers also stare at mirrors and camera screens all route.`,
      },
      {
        q: 'What eye protection helps on a trash route?',
        a: `Wraparound safety glasses with side shields block more dust and wind than flat lenses. Follow your employer’s eye protection rules; wraparound styles usually meet them.`,
      },
      {
        q: 'Can I use eye drops on a garbage truck?',
        a: `Only with the truck parked and your hands washed, following the label’s directions. Keep the bottle in a lunch bag or locker, since a cab can get too hot or cold.`,
      },
    ],
  },

  {
    slug: 'what-happens-if-you-dont-finish-checkout',
    title: 'What happens if you don’t finish checkout?',
    description:
      'Left the payment page before paying? Nothing is charged, your cart stays saved, and at most one reminder email follows. What happens, step by step.',
    category: 'ordering',
    addedOn: '2026-11-20',
    body: [
      {
        p: `If you leave Quell’s checkout before paying, nothing is charged. The order you started stays marked “Awaiting payment,” your cart stays saved in your browser, and you may get one email, ever, with a link that puts those bottles back in your cart on any device. You can finish later, start fresh, or ignore it. There’s no deadline, discount or follow-up series.`,
      },
      { h: 'What happens when you press “Continue to payment”' },
      {
        p: `Checkout on quelldrop.com has two halves. On this site, you fill in your email, name, U.S. shipping address and phone number, then press the button that reads “Continue to payment.” At that moment the site checks your details, confirms the bottles are in stock, works out the total from its own prices, and creates an order with an order number that starts with “Q-”. That order’s status is pending, shown as “Awaiting payment.” Then your browser goes to the payment provider’s secure page, where you enter your card.`,
      },
      {
        p: `Nothing is charged until you submit payment on that second page. [When is my card charged?](/guides/when-is-my-card-charged) covers the moment the charge happens, and [why checkout sends you to a secure payment page](/guides/why-checkout-uses-a-secure-payment-page) explains the handoff.`,
      },
      { h: 'If you close the payment page or press cancel' },
      {
        list: [
          `No charge. The payment provider never received a completed payment, so there’s nothing to refund.`,
          `Your cart is still there. The cart lives in your browser and clears only after a completed order, so going back to the [cart](/cart) shows the same bottles.`,
          `Your details are remembered. For guests, the site saves your name, address, email and phone in this browser just before sending you to the payment page, so you don’t have to retype them if you come back (for example, after a card is declined).`,
          `The started order stays “Awaiting payment.” It never ships, because only paid orders are packed.`,
        ],
      },
      { h: 'The one email you might get' },
      {
        p: `If an order is still unpaid a couple of hours after you started it, it becomes eligible for a single follow-up email with the subject “Your Quell cart is waiting for you.” The job that sends these runs once a day, so the email can land anywhere from a few hours to about a day after you left. It’s sent only for checkouts started within the past week.`,
      },
      {
        p: `What it says: that you didn’t complete checkout, that nothing was charged, and that your cart has been saved. It includes your order number, a “Return to your cart” button showing the total, and a line saying it’s the only email that will be sent about that order. There’s no coupon in it and no countdown. If you’ve changed your mind, you don’t need to do anything.`,
      },
      {
        p: `Wondering whether an email like that is genuine? [Is this eye drop order email real?](/guides/is-this-eye-drop-order-email-real) shows what Quell’s emails look like.`,
      },
      { h: 'How the “Return to your cart” link works' },
      {
        p: `The link rebuilds your cart from the unpaid order, so it works on a phone even if you started on a laptop. That matters because the cart itself is stored only in the browser where you built it. The page the link opens reads only the bottle count from the order; it doesn’t show your name, email or address. Once that order is paid or canceled, the link stops working and shows a not-found page, so a finished order can never be replayed into a cart.`,
      },
      { h: 'Finishing your order later' },
      {
        list: [
          `Open the [cart](/cart) in the same browser, or use the email’s link on any device.`,
          `Check the quantity and your address; change anything that’s different now.`,
          `Press “Continue to payment.” A new pending order is created with a new order number.`,
          `Pay on the payment page. Your confirmation email arrives with the order number of the paid order.`,
        ],
      },
      {
        p: `The old unpaid order doesn’t need canceling. It simply stays unpaid. If you look it up on the [track your order](/orders) page, it will still read “Awaiting payment,” with a note that payment hasn’t been received. Use the order number from your confirmation email, not the one from the reminder, when you track the order you paid for.`,
      },
      { h: 'Other reasons checkout stops before payment' },
      {
        list: [
          `The payment page couldn’t be opened. You’ll see “Could not start checkout. Please try again.” The started order is canceled on the spot, and nothing is charged.`,
          `Too many tries in a short time. After repeated attempts from one location within about ten minutes, checkout asks you to wait a few minutes before trying again.`,
          `Something in the form needs fixing, such as the ZIP code or phone number. [Checkout error messages](/guides/checkout-error-messages-explained) lists each one and the fix.`,
          `A bottle count above the stock on hand. Checkout tells you how many are left.`,
        ],
      },
      { h: 'Starting over on a shared computer' },
      {
        p: `If someone else in your house started a checkout and you want a clean form, the cart page shows a “Not you? Clear details” link when it has filled in saved details. Clicking it removes the remembered name, address, email and phone from that browser. The cart’s bottles stay until you remove them.`,
      },
      { h: 'Questions about an unfinished order' },
      {
        p: `If you think you paid but your order still shows “Awaiting payment,” give it a few minutes and look again; the status can take a moment to update. If it still hasn’t changed, call {phone} ({hours}) with the order number. You can always [start a new order](/#buy) from the home page.`,
      },
    ],
    faq: [
      {
        q: 'Am I charged if I leave checkout before paying?',
        a: `No. Quell’s card charge happens only when you submit payment on the payment provider’s page. If you close it or press cancel, nothing is charged.`,
      },
      {
        q: 'Why did I get an email saying my cart is waiting?',
        a: `You started checkout and didn’t complete payment. Quell sends one email about it, a few hours to about a day later, with a link that restores your cart. It’s the only one you’ll get for that order.`,
      },
      {
        q: 'Does an unpaid Quell order get canceled automatically?',
        a: `It doesn’t need to be. It stays marked “Awaiting payment,” never ships and never charges you. Paying for a new checkout creates a separate order with its own number.`,
      },
      {
        q: 'Will my cart still be there if I leave the payment page?',
        a: `Yes. The cart is stored in your browser and clears only after a completed order. The reminder email’s link can also rebuild it on another device.`,
      },
    ],
  },

  {
    slug: 'checkout-error-messages-explained',
    title: 'Checkout error messages and how to fix them',
    description:
      'Every message Quell’s checkout can show, from state codes and ZIP formats to phone digits and bottle limits, and what to change so the order goes through.',
    category: 'ordering',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Most checkout errors on quelldrop.com come from the shipping form: the state must be a two-letter code, the ZIP must be five digits (or ZIP+4), the phone needs at least 10 digits, and the email’s domain has to accept mail. Others cap an order at 10 bottles, report low stock, or ask you to wait after many attempts. Card declines happen on the payment provider’s page, not here.`,
      },
      { h: 'Where the message appears' },
      {
        p: `When you press “Continue to payment,” the site checks the whole form before sending you on. If something is off, a message appears in a box above the form and you stay on the [cart](/cart) page with everything you typed still filled in. Fix the one thing it names and press the button again. The check runs in order, so if there are two problems, you’ll see the second only after fixing the first.`,
      },
      { h: 'Name and street address' },
      {
        list: [
          `First name, last name, street address and city are each required. An empty one stops checkout with a message naming that field.`,
          `Names can be up to 50 characters each, the street address and the apartment line up to 60, and the city up to 40. If a long street address is rejected, move the unit, suite or building number to the “Apt, suite (optional)” line.`,
          `There’s no country menu. Quell ships within the United States only, so every order goes to a U.S. address.`,
        ],
      },
      { h: '“Use the two-letter state code.”' },
      {
        p: `The State box takes exactly two letters, like TN, CA or NY, and it holds only two characters. Typing the full name, or letting autofill paste “Tennessee,” triggers this message. Lowercase is fine; it’s converted to capitals. For an address in Washington, D.C., use DC.`,
      },
      { h: '“Enter a valid ZIP code.”' },
      {
        p: `The ZIP box accepts five digits (37027) or ZIP+4 with a hyphen (37027-1234). It rejects letters, spaces in the middle, a ZIP+4 without the hyphen, or a ZIP with fewer than five digits. If you’re not sure of the extra four digits, enter the five-digit ZIP only.`,
      },
      { h: 'The phone number message' },
      {
        p: `Checkout requires a phone number with at least 10 digits, because the carrier asks for one for delivery updates. Spaces, dashes, dots, parentheses and a leading +1 are all fine; the site counts only the digits. It allows up to 15 digits, so an extension can be added. The usual cause of this message is a missing area code.`,
      },
      { h: 'Email messages' },
      {
        list: [
          `“Enter a valid email address.” Something is missing, often the @ or the part after the dot.`,
          `A message that no mail server could be found for the address. The site looks up the domain (the part after the @) and refuses one that can’t receive mail, because your receipt would never arrive. Check for a typo like gmial or a missing letter.`,
          `“Did you mean…?” This is a suggestion, not an error. For common slips such as hotnail.com, the site offers the likely correction, and you choose whether to accept it.`,
        ],
      },
      {
        p: `More on this in [What if I mistype my email at checkout?](/guides/mistyped-email-at-checkout).`,
      },
      { h: 'Bottle and stock messages' },
      {
        list: [
          `“Maximum 10 bottles per order.” One order can hold up to 10 bottles. The cart’s quantity box stops at 10. For more, place a second order. [Is there a limit on how many bottles you can order?](/guides/is-there-a-limit-on-how-many-bottles-you-can-order) explains.`,
          `“Choose at least one bottle.” or “Your cart is empty.” The cart has nothing in it to buy. Add bottles from the [buy panel](/#buy).`,
          `“Only N left” or “out of stock.” The cart asked for more than is on hand. Lower the quantity to the number shown, or check back later.`,
          `“One or more items are no longer available.” The product in your cart isn’t currently for sale. Remove it from the cart, and if the buy panel still offers Quell, add it again from there.`,
        ],
      },
      { h: 'Messages about the connection or the payment page' },
      {
        list: [
          `“Too many checkout attempts. Please wait a few minutes and try again.” Checkout allows a set number of tries from one location in about ten minutes. Wait, then try once more.`,
          `“Could not start checkout. Please try again.” The payment page couldn’t be opened. The order you just started is canceled automatically and nothing is charged. Try again in a minute.`,
          `A message that the server couldn’t be reached. Your connection dropped while sending the form. Check Wi-Fi or signal and press the button again.`,
        ],
      },
      { h: 'If your card is declined' },
      {
        p: `Card entry happens on the payment provider’s secure page, and that page shows the result. Quell never sees your card number, so the shop can’t tell why a card was declined. Your bank or card issuer can. The usual next steps are to check the billing ZIP and expiration date, try another card, or call the number on the back of the card. Your shipping details are already saved in your browser, so returning to the cart and continuing again is quick. [How payment works](/guides/how-payment-works) covers what the site keeps and doesn’t.`,
      },
      { h: 'Still stuck?' },
      {
        p: `Call {phone} ({hours}) and say which message you saw. Nothing you type into the form is charged until you complete payment, so trying again is free.`,
      },
    ],
    faq: [
      {
        q: 'Why does checkout say to use the two-letter state code?',
        a: `The State box takes only a two-letter postal code, such as TN or CA. Typing or autofilling the full state name triggers the message; replace it with the code.`,
      },
      {
        q: 'Why won’t checkout accept my ZIP code?',
        a: `It needs five digits, or ZIP+4 with a hyphen (37027-1234). Remove spaces or letters, add the hyphen, or enter just the five-digit ZIP.`,
      },
      {
        q: 'Why does checkout say my phone number is invalid?',
        a: `The number needs at least 10 digits; the area code is the part most often missing. Punctuation and spaces don’t matter, since only the digits are counted.`,
      },
      {
        q: 'What should I do if my card is declined on the payment page?',
        a: `Check the billing ZIP and expiration date, try another card, or call your card issuer. The shop never sees your card number, so it can’t tell why a card was declined.`,
      },
    ],
  },

  {
    slug: 'is-there-a-limit-on-how-many-bottles-you-can-order',
    title: 'Is there a limit on how many bottles you can order?',
    description:
      'One Quell order holds 1 to 10 bottles. Why the cap exists, what happens with low stock, and how to buy more than 10 with a second order.',
    category: 'ordering',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Yes. A single Quell order can hold from 1 to 10 bottles. The cart’s quantity box stops at 10, and checkout refuses anything higher with the message “Maximum 10 bottles per order.” If you want more, place a second order; each gets its own order number and confirmation. There’s no minimum beyond one bottle, and stock on hand can lower the most you can choose.`,
      },
      { h: 'Where the 10-bottle limit shows up' },
      {
        list: [
          `The bottle picker on the [home page](/#buy) offers 1 through 10.`,
          `In the [cart](/cart), the quantity box goes up to 10. Adding more bottles to a line that’s already at 10 leaves it at 10.`,
          `At checkout, the site checks again and stops an order above 10 with “Maximum 10 bottles per order.”`,
        ],
      },
      {
        p: `The check at checkout is the one that counts. Even if a cart somehow showed more, the order itself can’t go above 10 bottles.`,
      },
      { h: 'Why is there a 10-bottle limit?' },
      {
        p: `The cap is built into checkout itself, and the site’s pages don’t give a formal reason for the number. In practice it means each order is one box of {size} bottles, packed and shipped from Brentwood, Tennessee, to one address. For most households, 10 bottles is a long supply: the label’s directions are {directions}, and the storage line asks for a steady room-temperature spot, which is easier to keep for a handful of bottles than for a crate.`,
      },
      { h: 'When stock lowers the limit' },
      {
        p: `If fewer than 10 bottles are in stock, the picker on the home page offers only as many as are on hand, and the buy panel shows “Currently out of stock” if there are none. If your cart asks for more than is available by the time you check out, the message tells you how many are left, for example “Only 4 left.” Lower the quantity to that number and continue. Stock is checked again when payment completes.`,
      },
      { h: 'How to buy more than 10 bottles' },
      {
        list: [
          `Place the first order of up to 10 bottles and pay.`,
          `Go back to the [buy panel](/#buy), add the rest, and check out again. Your details are remembered in the same browser, so it takes a minute.`,
          `Expect two confirmation emails, two order numbers and two shipments.`,
          `Shipping is worked out for each order on its own: {shipping} on a smaller order, free on {freeBottles} or more bottles. Splitting so both orders reach {freeBottles} keeps both free.`,
        ],
      },
      {
        p: `Each order ships to one address. If the bottles are for different people, place one order per address. [Ordering eye drops for someone else](/guides/ordering-eye-drops-for-someone-else) walks through it.`,
      },
      { h: 'Changing the quantity before you pay' },
      {
        p: `Until you press “Continue to payment,” the quantity is yours to change as often as you like, and nothing is charged while you decide.`,
      },
      {
        list: [
          `On the [cart](/cart) page, type a new number from 1 to 10 in the quantity box next to Quell. The line price and the totals update as you go.`,
          `Use “Remove” to take the line out entirely, then add bottles again from the buy panel if you want to start over.`,
          `Below {freeBottles} bottles, the cart shows a note saying how many more bottles would bring free shipping, so you can see the trade-off before you decide.`,
          `The summary box lists the subtotal, the shipping line and the total you’ll pay, and the checkout button repeats that total.`,
        ],
      },
      {
        p: `A second order isn’t tied to the first in any way. You can place it later, from any browser, with the same address or a different one.`,
      },
      { h: 'Is there a minimum order?' },
      {
        p: `One bottle. You can buy a single bottle at the everyday price with standard shipping. [Can I order just one bottle of Quell?](/guides/ordering-a-single-bottle) covers that case.`,
      },
      { h: 'How many bottles make sense?' },
      {
        p: `That depends on how often you use drops and how fast a bottle goes for you. Storage matters too: the label says {storage}, so a large supply needs a spot that stays in that range. [How many bottles of eye drops should I order?](/guides/how-many-bottles-to-order) and [Buying eye drops in bulk](/guides/buying-eye-drops-in-bulk) walk through the math and the storage questions. Keep in mind that an unopened bottle can be refunded within {returnDays} days of delivery without being sent back, so overbuying by a bottle or two isn’t a trap.`,
      },
      { h: 'Buying for an office or a team' },
      {
        p: `The same 10-bottle limit applies, and there’s no business account or bulk price. Larger needs mean more than one order. See [Buying eye drops for your employees](/guides/buying-eye-drops-for-your-employees) for receipts and addresses.`,
      },
      { h: 'Other order rules worth knowing' },
      {
        list: [
          `Buyers must be 18 or older.`,
          `Orders ship to U.S. addresses only.`,
          `Checkout is guest-only; no account is needed.`,
          `There are no promo codes and no subscription.`,
          `Damaged, incorrect or broken-seal orders are replaced within {returnDays} days of delivery.`,
        ],
      },
      {
        p: `Questions about a large order: call {phone}, {hours}.`,
      },
    ],
    faq: [
      {
        q: 'What is the most bottles of Quell I can buy at once?',
        a: `Ten bottles per order. The cart stops at 10 and checkout refuses more. For a larger supply, place a second order after the first.`,
      },
      {
        q: 'Why does checkout say maximum 10 bottles per order?',
        a: `Quell caps each order at 10 bottles. Lower the quantity in the cart to 10 or fewer and continue; you can place another order for the rest.`,
      },
      {
        q: 'Do two orders of Quell each get free shipping?',
        a: `Shipping is figured for each order separately. An order of {freeBottles} or more bottles ships free, and a smaller one costs {shipping}.`,
      },
      {
        q: 'Is there a minimum order for Quell?',
        a: `No minimum beyond one bottle. A single bottle can be ordered with guest checkout at the regular price, plus {shipping} shipping.`,
      },
    ],
  },
]
