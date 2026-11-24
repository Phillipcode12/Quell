import type { Guide } from '@/lib/guide-types'
export const DAILY_20261124_E: Guide[] = [
  /*
   * Sources fetched 2026-11-24 for dry-eye-relief-sherman-tx:
   * - NOAA ACIS StnData (data.rcc-acis.org), SID USC00418274, 1991-2020 monthly
   *   normals (SHERMAN, TX, cooperative station, elev 760 ft). Saved:
   *   .daily-job/acis1124/USC00418274.json
   *   Normal max F: Jan 52.6, Feb 57.1, Mar 65.2, May 80.0, Jun 88.1, Jul 92.5,
   *   Aug 92.7 (highest), Sep 85.4, Oct 75.3, Nov 63.3, Dec 54.2.
   *   Normal min F: Jan 33.9 (lowest), Feb 37.2, Mar 45.0, Jul 73.5, Aug 73.0,
   *   Nov 44.1, Dec 36.1.
   *   Precip in: Jan 2.52 (lowest), Feb 2.76, Mar 3.96, Apr 3.87, May 5.54
   *   (highest), Jun 4.54, Jul 2.90, Aug 2.88, Sep 3.43, Oct 4.77, Nov 3.50,
   *   Dec 3.62; twelve months sum to 44.29. Snowfall "M": not stated.
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figures.
   * Neighbors with guides: McKinney (TKI) and Denton (DTO). This one is built on
   * the two rain peaks, the dry midsummer gap and January, not on commuting,
   * campuses or lakes.
   */
  {
    slug: 'dry-eye-relief-sherman-tx',
    title: 'Dry eye relief in Sherman, Texas',
    description:
      'Sherman’s rain comes in two bursts, May and October, with dry gaps in midsummer and January. NOAA’s numbers and day-to-day dry eye relief.',
    category: 'local',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Dry eye relief in Sherman, Texas means planning for two stretches: the hot, drier gap of July and August, when highs average about 92°F and the air conditioner runs nonstop, and January, the coldest and driest month, when the heater takes over. Keep vents off your face, blink fully during screen work, and use a lubricating drop only as its label directs. Pain or vision changes are for an eye doctor.`,
      },
      { h: 'Sherman’s weather in NOAA’s numbers' },
      {
        p: `NOAA’s 1991–2020 climate normals for the Sherman cooperative station, at about 760 feet, are the standard yardstick for the city’s weather. They show a place that gets a fair amount of rain overall, about 44.3 inches when the twelve monthly normals are added up, but gets it unevenly:`,
      },
      {
        list: [
          `May is the wettest month at 5.54 inches, and October is second at 4.77.`,
          `January is the driest at 2.52 inches, followed by February at 2.76.`,
          `July (2.90 inches) and August (2.88) sit in a dry pocket between the spring and fall peaks.`,
          `August’s normal high of 92.7°F edges out July’s 92.5°F as the hottest of the year.`,
          `January’s normal low of 33.9°F is the coldest; December averages 36.1°F at night.`,
        ],
      },
      {
        p: `The station’s snowfall normals are missing from the record, so this page doesn’t give a snow figure.`,
      },
      { h: 'Why the dry gaps matter more than the yearly total' },
      {
        p: `A yearly total in the mid-40s sounds damp, and in May it is. Your eyes don’t live on yearly totals, though. They respond to the air around you this week, and in Sherman that air swings hard. After the May and June storms, the rain thins out just as the heat peaks, and most people spend those weeks indoors with the air conditioning running. Then October brings a second wet spell before the long, cool, drier run from December through February.`,
      },
      {
        p: `So the same person can feel fine in a rainy May and gritty by early August, then fine again in October and scratchy by mid-January. That pattern is normal for a climate like this one, and it’s worth knowing so you can get ahead of it instead of wondering what changed.`,
      },
      { h: 'Midsummer: 92-degree afternoons and air conditioning' },
      {
        p: `The tear film has three layers: a thin mucus layer against the eye, a watery middle, and an oily outer layer that slows evaporation. Moving air pulls moisture from that surface, and cooled air is often dry air. In a Sherman August, the house, the car, the office and the store are all cooled, and the trip between them runs through heat in the 90s. A few habits help:`,
      },
      {
        list: [
          `In the car, aim the dash vents at your chest and hands rather than your face, and lower the fan once the cabin has cooled.`,
          `At home, check where the supply registers blow. A desk or recliner directly under one gets a steady stream across the eyes.`,
          `Wear sunglasses outside. They cut glare off parking lots and pavement and block some of the hot breeze.`,
          `If you work on a screen, look away every so often and give a few slow, complete blinks. Concentration lowers blinking without your noticing.`,
        ],
      },
      { h: 'January: the coldest and driest month' },
      {
        p: `Winter in Sherman is short and mild by national standards, but the nights are cold enough to keep the heat on. With January lows near 34°F, the furnace or heat pump warms outdoor air that holds little moisture to begin with, and warming air lowers its relative humidity further. Add the driest month on the calendar, and January indoors can be the roughest stretch of the year for eyes that run dry.`,
      },
      {
        list: [
          `Keep space heaters and floor vents from blowing toward the couch or bed.`,
          `Run a humidifier in the room where you sleep if the air feels parched, and keep it clean as its maker directs.`,
          `Turn the car heater’s airflow to the floor and windshield on early drives.`,
          `Scarves and hoods help on cold, windy walks across open lots.`,
        ],
      },
      { h: 'Spring and fall: the in-between seasons' },
      {
        p: `March through May and September through October are when many people feel most comfortable, with highs in the 65 to 85°F range and the year’s two wet peaks. They’re also when the house is often closed up with the system cycling between heat and cooling, and when people spend long afternoons outdoors on yard work, ball fields and weekend drives. If your eyes feel dry in those months anyway, look at what you’re doing rather than the weather: hours of screen time, a fan by the bed, or a long drive with the vents up high.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is an over-the-counter lubricating eye drop. Its Uses line reads: {uses}. The directions are short: {directions}. Its warnings read: {warnings}.`,
      },
      {
        p: `Before each use, follow the handling line: {tip}. For storage, the label says: {storage}. That upper limit is below a Sherman summer afternoon, so don’t leave the bottle in a parked car or a mailbox in July. The panel also says: {doNotUse}. The whole label is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell delivered to Sherman' },
      {
        p: `Quell ships from Brentwood, Tennessee, to addresses across the United States, Sherman included. Shipping is {shipping} per order, or free on {freeBottles} or more bottles. There’s no subscription, checkout works as a guest, and buyers must be 18 or older. We don’t promise a delivery date, but every order gets a shipping email with tracking once it leaves. See the [Sherman page](/eye-drops/sherman-tx) or [Quell across Texas](/eye-drops/state/texas) for local details, and the [McKinney guide](/guides/dry-eye-relief-mckinney-tx) for another North Texas look at the same season.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A drop is for comfort. It isn’t a substitute for an exam. The label says: {stopUse} Dryness that keeps coming back season after season is also worth a visit, because an eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the warning signs. If you wear contact lenses or use other eye drops, the label doesn’t cover those situations, so ask your eye doctor or pharmacist first.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Sherman, Texas?',
        a: `January, at 2.52 inches of precipitation in NOAA’s 1991–2020 normals for the Sherman station. February is next at 2.76 inches, and July and August both come in under 3 inches.`,
      },
      {
        q: 'How hot does Sherman, TX get in summer?',
        a: `NOAA’s normals put the average August high at 92.7°F and July at 92.5°F, with nights staying near 73°F in both months. June’s average high is 88.1°F.`,
      },
      {
        q: 'Why do my eyes feel dry in Sherman in August?',
        a: `August is one of the hottest and drier months, so most of the day is spent in air-conditioned rooms and cars. Cooled, moving air speeds evaporation from the tear film, especially when a vent points at your face.`,
      },
      {
        q: 'Does Quell ship to Sherman, Texas?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Sherman and the rest of the US for {shipping} per order, or free on {freeBottles} or more bottles. Tracking comes by email once the order ships; no delivery date is promised.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-24 for dry-eye-relief-big-spring-tx:
   * - NOAA ACIS StnData (data.rcc-acis.org), SID USW00023041, 1991-2020 monthly
   *   normals (BIG SPRING, TX, elev 2510 ft). Saved:
   *   .daily-job/acis1124/USW00023041.json
   *   Normal max F: Jan 58.0, Feb 62.5, Mar 71.0, Apr 79.4, May 87.0, Jun 93.8,
   *   Jul 95.8 (highest), Aug 94.7, Sep 87.9, Oct 79.1, Nov 67.1, Dec 58.2.
   *   Normal min F: Jan 31.4 (lowest), Feb 34.7, Mar 42.4, Jun 68.2, Jul 72.1,
   *   Aug 71.5, Nov 40.7, Dec 32.8.
   *   Precip in: Jan 0.73 (lowest), Feb 0.80, Mar 1.15, Apr 1.55, May 2.54
   *   (highest), Jun 2.49, Jul 1.58, Aug 2.40, Sep 2.39, Oct 1.84, Nov 1.35,
   *   Dec 0.78; twelve months sum to 19.60; Dec-Feb 2.31; May-Sep 11.40.
   *   Snowfall in: Jan 0.3, Feb 0.7, Nov 0.3, Dec 0.7, other months 0.0;
   *   sum 2.0.
   * - Comparison with Sherman uses only today's ACIS file USC00418274 (44.29 in).
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figures.
   * Neighbors with guides: Midland, Odessa, San Angelo, Abilene. This one is
   * built on the dry winter, the day-night temperature swing and the light
   * snow record, not on oilfield work or spring wind.
   */
  {
    slug: 'dry-eye-relief-big-spring-tx',
    title: 'Dry eye relief in Big Spring, Texas',
    description:
      'Big Spring averages under 20 inches of rain a year, and less than 1 inch a month in winter. What NOAA’s normals mean for dry eyes, and what helps.',
    category: 'local',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Big Spring’s air is dry most of the year: NOAA’s normals give the town about 19.6 inches of precipitation annually, and December through February together average only about 2.3 inches. For relief, keep heater and car vents off your face, wear wraparound sunglasses outdoors, take blink breaks from screens, and use a lubricating eye drop as its label directs. See an eye doctor for pain, vision changes or dryness that won’t settle.`,
      },
      { h: 'A high, dry town at about 2,500 feet' },
      {
        p: `The numbers here come from NOAA’s 1991–2020 climate normals for the Big Spring station, which sits at about 2,510 feet. Here’s the year in brief:`,
      },
      {
        list: [
          `About 19.6 inches of precipitation in a normal year, adding the twelve monthly figures.`,
          `January is the driest month at 0.73 inches; December (0.78) and February (0.80) are close behind.`,
          `May is the wettest at 2.54 inches, with June (2.49), August (2.40) and September (2.39) close to it.`,
          `July is the hottest month, with a normal high of 95.8°F; June and August also average above 93°F.`,
          `Normal snowfall adds up to about 2 inches a year, spread across November through February.`,
        ],
      },
      {
        p: `For a sense of scale, NOAA’s normals for the Sherman station in North Texas add up to about 44.3 inches, more than twice Big Spring’s total.`,
      },
      { h: 'Winter is the dry season' },
      {
        p: `Many people expect summer to be the hard stretch for dry eyes in West Texas. In Big Spring, the calendar says otherwise. Over half of the year’s precipitation falls from May through September, and the three winter months together get less than a single summer month. Winter is also when the heat is on indoors.`,
      },
      {
        p: `Heating makes that worse. Warming cold, dry air lowers its relative humidity further, so a house kept at a comfortable temperature in January can feel parched. Forced air adds movement, which carries moisture off the surface of the eye faster.`,
      },
      {
        list: [
          `Point floor and wall registers away from where you sit and sleep, or close the one beside the bed.`,
          `A clean room humidifier near your chair or bed can take the edge off; follow its maker’s cleaning directions.`,
          `Keep a pair of glasses or sunglasses on when you’re out in cold wind; they shield the eye’s surface.`,
          `Watch your own blinking at the TV or computer in the evening, when the heat has been running for hours.`,
        ],
      },
      { h: 'Wide swings between day and night' },
      {
        p: `Big Spring’s normals show a wide spread between the warmest and coolest part of the day. In January the normal high is 58.0°F and the normal low is 31.4°F, a gap of more than 26 degrees. Even in July, nights fall to about 72°F after afternoons near 96°F. In practice, that means the heater may run in the morning and the air conditioner by afternoon in spring and fall, and your eyes get both kinds of dry, conditioned air within a few hours. If you notice dryness at certain times of day rather than in certain seasons, the switch between systems is a good place to look.`,
      },
      { h: 'Summer heat and the trip between cool rooms' },
      {
        p: `Three months average highs over 93°F. Most of a summer day is spent in cooled buildings and vehicles, and the step outside is into hot, bright air off pavement and open ground. The tear film’s outer oil layer is what slows evaporation from the watery layer beneath it, and both heat and moving air work against it. Wraparound sunglasses do double duty here, cutting glare and blocking breeze. Keep the dash vents aimed low on long drives, and take a short break at fuel stops to rest your eyes and blink.`,
      },
      { h: 'Long stretches of open road' },
      {
        p: `Life in and around a small West Texas city often means long drives: to work sites, to bigger towns for appointments and shopping, to family. Fixed attention on the road lowers how often you blink, and an hour with the heater or air conditioning blowing upward toward the windshield adds to it. Never put in drops while driving. Do it before you leave or once you’ve pulled over and parked, and give your vision a moment to clear before you go on.`,
      },
      { h: 'What Quell’s Drug Facts say' },
      {
        p: `Quell is an over-the-counter lubricating eye drop, designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label’s Uses line reads: {uses}. The directions are: {directions}.`,
      },
      {
        list: [
          `Warnings: {warnings}.`,
          `Before each use: {tip}.`,
          `Storage: {storage}. A truck cab in a Big Spring summer runs well above that, so keep the bottle with you, not on the dash.`,
          `If the liquid’s color looks different from when you got it, follow the label: {doNotUse}.`,
        ],
      },
      { h: 'Ordering Quell to Big Spring' },
      {
        p: `Quell ships from Brentwood, Tennessee, to US addresses, Big Spring included, for {shipping} per order or free on {freeBottles} or more bottles. Checkout works as a guest, and you can [track the order](/orders) with its number and your email once it ships. We don’t promise a delivery date. The [Big Spring page](/eye-drops/big-spring-tx) and [Texas page](/eye-drops/state/texas) have more local details, and the [Midland guide](/guides/dry-eye-relief-midland-tx) covers a neighboring city with its own NOAA station.`,
      },
      { h: 'Signs it’s time for an eye doctor' },
      {
        p: `The label is clear about when to stop: {stopUse} Beyond that, dryness that comes back every winter, or that doesn’t ease once you’ve dealt with vents and screen habits, deserves an exam. An eye doctor can find the cause and decide what to do. Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs not to wait on. The label doesn’t cover contact lenses or use with other drops, so ask your eye doctor or pharmacist about those.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Big Spring, Texas get?',
        a: `About 19.6 inches a year, adding the twelve monthly figures in NOAA’s 1991–2020 normals for the Big Spring station. May is the wettest month at 2.54 inches and January the driest at 0.73.`,
      },
      {
        q: 'Does it snow in Big Spring, Texas?',
        a: `A little. NOAA’s normals for the Big Spring station add up to about 2 inches of snow a year, falling between November and February, with 0.7 inches in both December and February.`,
      },
      {
        q: 'Why are my eyes drier in Big Spring in winter than in summer?',
        a: `December through February average only about 2.3 inches of precipitation combined, and indoor heating lowers humidity further. Summer brings more of the year’s rain, though air conditioning and heat still dry the eyes.`,
      },
      {
        q: 'Can I get Quell delivered to Big Spring?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Big Spring and other US addresses for {shipping} per order, or free on {freeBottles} or more bottles. You get tracking by email when it ships, but no delivery date is promised.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-24 for dry-eye-relief-homestead-fl:
   * - NOAA ACIS StnData (data.rcc-acis.org), SID USC00084095, 1991-2020 monthly
   *   normals (HOMESTEAD GEN AVIATION AP, FL, elev 9 ft). Saved:
   *   .daily-job/acis1124/USC00084095.json
   *   Normal max F: Jan 77.5 (lowest), Feb 79.5, Mar 81.8, Apr 85.5, May 88.4,
   *   Jun 90.8, Jul 92.0, Aug 92.1 (highest), Sep 91.0, Oct 87.5, Nov 82.5,
   *   Dec 79.2.
   *   Normal min F: Jan 55.3 (lowest), Feb 56.6, Mar 59.0, Dec 58.7, Jul 73.8,
   *   Aug 74.3 (highest), Sep 73.9.
   *   Precip in: Jan 1.70 (lowest), Feb 2.01, Mar 2.05, Apr 2.92, May 5.77,
   *   Jun 9.34, Jul 7.14, Aug 10.17 (highest), Sep 8.63, Oct 5.86, Nov 2.34,
   *   Dec 1.97; twelve months sum to 59.90; Nov-Apr 12.99; May-Oct 46.91.
   *   Snowfall 0.0 every month.
   * - Label storage upper limit 86 F (DRUG_FACTS.otherInformation[1]): normal
   *   highs exceed it May through October.
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figures.
   * Neighbors with guides: Miami (MIA) and Hialeah (OPF). This one is built on
   * the six-month split, cool January mornings and keeping a bottle within its
   * storage range in a car or at the door, not on power outages or boats.
   */
  {
    slug: 'dry-eye-relief-homestead-fl',
    title: 'Dry eye relief in Homestead, Florida',
    description:
      'Homestead gets about 47 of its 60 inches of rain from May to October. Why eyes still feel dry here, and how to keep drops within the label’s range.',
    category: 'local',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Homestead is humid outdoors, so dry eyes here usually come from indoor air: air conditioning most of the year, plus the drier, breezier months from November through April. For relief, keep cold vents off your face, wear sunglasses in the glare, take screen breaks, and use a lubricating drop exactly as its label directs. Store the bottle where it stays under the label’s 86°F limit, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Homestead’s year in NOAA’s numbers' },
      {
        p: `NOAA’s 1991–2020 climate normals for the station it lists as Homestead General Aviation Airport, about 9 feet above sea level, split the year cleanly in two:`,
      },
      {
        list: [
          `About 59.9 inches of precipitation in a normal year, adding the twelve months.`,
          `May through October brings about 46.9 inches of that; November through April brings about 13.`,
          `August is the wettest month at 10.17 inches, followed by June at 9.34 and September at 8.63.`,
          `January is the driest at 1.70 inches, with December at 1.97.`,
          `Normal highs run from 77.5°F in January to 92.1°F in August, and normal snowfall is zero in every month.`,
        ],
      },
      { h: 'The drier half: November through April' },
      {
        p: `Six months of the year get barely a fifth of the rain. These are also the months when many people open windows, spend whole days outdoors and run errands with the car windows down. That’s pleasant, but moving air across the eye is moving air, whether it’s a breeze off open ground, a boat ride or a drive with the window cracked. If your eyes feel scratchy in February even though the weather report says “humid,” you’re not imagining it; the air around your face is often moving more than in summer.`,
      },
      {
        list: [
          `Wear wraparound sunglasses on bright, breezy days. They block glare and wind together.`,
          `Keep the car window up on highway stretches and let the air conditioning do the work, vents aimed low.`,
          `Take a few slow, full blinks after long periods of outdoor focus, like reading a phone in the sun.`,
        ],
      },
      { h: 'Cool mornings in January' },
      {
        p: `Homestead’s normal January low is 55.3°F, and February averages 56.6°F at night. That’s mild by most of the country’s standards, but it’s cool enough that some homes switch on heat for the early hours, and a heat pump moving warm air across a bedroom on a January morning dries the eyes just as it does farther north. If you wake up with dry eyes on the cool mornings, check whether the heat came on before dawn and where its vent points.`,
      },
      { h: 'The rainy season and the air conditioner' },
      {
        p: `From May through October, the outdoor air is warm and wet, and life moves indoors to air-conditioned rooms and cars. Air conditioning takes moisture out of the air as it cools it, and the fan keeps that air moving. The tear film’s oily outer layer slows evaporation from the watery layer under it, and steady cool airflow works against it for hours at a time:`,
      },
      {
        list: [
          `At home, move a favorite chair or the head of the bed out of the path of a ceiling register.`,
          `In the car, set the vents toward your chest and keep the fan as low as comfort allows.`,
          `At a desk, look away from the screen now and then, because people blink less when they concentrate.`,
          `Step outside for a few minutes on a break. The humid air outdoors is a different environment for your eyes than an office under a vent.`,
        ],
      },
      { h: 'Keeping eye drops within the label’s range' },
      {
        p: `Quell’s label says: {storage}. In Homestead, the normal high is above 86°F every month from May through October, peaking at 92.1°F in August, and a closed car or a sunny doorstep gets far hotter than the air. That makes storage a real, everyday question here:`,
      },
      {
        list: [
          `Don’t leave a bottle in the glove box, console or on the dash. Carry it in a bag that comes inside with you.`,
          `If you expect a delivery while you’re out, ask a neighbor to bring it in, or ship it to a workplace where someone receives packages.`,
          `Keep your bottle at home in a cool cabinet away from a sunny window, not on a windowsill or near the stove.`,
          `Look at the liquid before using a bottle that may have been too warm. The label says: {doNotUse}. It also describes the normal look: {milky}.`,
        ],
      },
      { h: 'What the rest of the label says' },
      {
        p: `Quell is an over-the-counter lubricating eye drop. Uses: {uses}. Directions: {directions}. Warnings: {warnings}. Before each use: {tip}. You can read the full panel on the [Drug Facts page](/drug-facts) before you buy.`,
      },
      { h: 'Ordering Quell to Homestead' },
      {
        p: `We ship from Brentwood, Tennessee, to Homestead and the rest of the US. Shipping is {shipping} per order, or free on {freeBottles} or more bottles. Checkout works as a guest, there’s no subscription, and buyers must be 18 or older. You’ll get a tracking link by email once the order ships; we don’t promise a delivery date. For local details see the [Homestead page](/eye-drops/homestead-fl) and [Quell in Florida](/eye-drops/state/florida), and for the city to the north, the [Miami guide](/guides/dry-eye-relief-miami-fl).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `The label’s stop-use line reads: {stopUse} Bright sun, outdoor work and long hours in air conditioning are common here, and none of that is a reason to put off an exam when something feels wrong. An eye doctor can find the cause and decide what to do. The label doesn’t give directions for contact lenses or for using other drops alongside it, so ask your eye doctor or pharmacist. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you decide how soon.`,
      },
    ],
    faq: [
      {
        q: 'When is the dry season in Homestead, Florida?',
        a: `November through April. NOAA’s 1991–2020 normals for the Homestead station give those six months about 13 inches of precipitation combined, against about 46.9 inches from May through October.`,
      },
      {
        q: 'How much rain does Homestead get in August?',
        a: `August is the wettest month in NOAA’s normals for the Homestead General Aviation Airport station, at 10.17 inches. June (9.34) and September (8.63) are close behind.`,
      },
      {
        q: 'Can I leave eye drops in my car in Homestead?',
        a: `Better not. Quell’s label says {storage}, and Homestead’s normal highs pass 86°F from May through October before a parked car heats up further. Carry the bottle with you instead.`,
      },
      {
        q: 'Does Quell ship to Homestead, FL?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Homestead for {shipping}, or free on {freeBottles} or more bottles. A tracking email follows once it ships, and no delivery date is promised.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-24 for dry-eye-relief-shelby-nc:
   * - NOAA ACIS StnData (data.rcc-acis.org), SID USC00317845, 1991-2020 monthly
   *   normals (SHELBY 2 NW, NC, cooperative station about 2 miles northwest of
   *   town, elev 820 ft). Saved: .daily-job/acis1124/USC00317845.json
   *   Normal max F: Jan 52.6 (lowest), Feb 56.5, Mar 64.1, Apr 73.1, Jun 87.1,
   *   Jul 90.6 (highest), Aug 88.9, Oct 73.9, Nov 63.6, Dec 55.1.
   *   Normal min F: Jan 26.9 (lowest), Feb 29.5, Mar 36.0, Apr 44.5, Jul 65.9,
   *   Oct 45.1, Nov 34.6, Dec 29.4.
   *   Precip in: Jan 4.31, Feb 3.36 (lowest), Mar 4.68 (highest), Apr 4.27,
   *   May 4.30, Jun 4.47, Jul 4.41, Aug 4.49, Sep 3.98, Oct 3.72, Nov 3.98,
   *   Dec 4.43; twelve months sum to 50.40.
   *   Snowfall in: Jan 1.8, Feb 0.6, Mar 0.7, Nov 0.1, Dec 0.8; sum 4.0.
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figures.
   * Neighbors with guides: Gastonia, Charlotte, Hickory. This one is built on
   * the sub-30 winter lows, frost mornings and closed-up heated houses, not on
   * mills, lakes or mountain drives.
   */
  {
    slug: 'dry-eye-relief-shelby-nc',
    title: 'Dry eye relief in Shelby, North Carolina',
    description:
      'Shelby averages lows under 30°F from December to February and rain in every month. Why eyes still dry out here, and what helps at home and outdoors.',
    category: 'local',
    addedOn: '2026-11-24',
    body: [
      {
        p: `In Shelby, dry eyes are mostly a winter-indoors problem. NOAA’s normals show plenty of rain every month, but winter nights average below 30°F from December through February, so the heat runs for long hours and dries the air inside. Aim heat away from your face, add moisture to the bedroom air, blink fully at screens, and use a lubricating drop as its label directs. See an eye doctor for pain or vision changes.`,
      },
      { h: 'Shelby’s climate, from the Shelby 2 NW station' },
      {
        p: `NOAA’s 1991–2020 climate normals for the Shelby 2 NW cooperative station, about two miles northwest of town at roughly 820 feet, describe a wet climate with real winter cold:`,
      },
      {
        list: [
          `About 50.4 inches of precipitation in a normal year, adding the twelve months.`,
          `Every month averages at least 3.36 inches (February, the lowest). March is the wettest at 4.68.`,
          `January’s normal low is 26.9°F, the coldest of the year; December averages 29.4°F and February 29.5°F.`,
          `July’s normal high is 90.6°F, the warmest month.`,
          `Normal snowfall totals about 4 inches, with January’s 1.8 inches the largest share.`,
        ],
      },
      { h: 'If it rains every month, why are my eyes dry?' },
      {
        p: `Rain falling outside doesn’t reach the air in your living room. When it’s 27°F at dawn, the cold outdoor air holds very little water, and warming it to room temperature drops its relative humidity sharply. That’s why a Shelby house can feel parched in January while the yard is soaked. Your tear film, the thin layer of mucus, water and oil over the eye, loses water faster in that warm, dry indoor air, and faster still when a register or space heater blows across your face.`,
      },
      { h: 'Frost on the windshield, heat on full' },
      {
        p: `With winter lows below freezing for three months, many mornings start with a frosted windshield and the car’s defroster on high. That airflow goes up the glass and comes back toward the driver’s eyes. A few changes make the first ten minutes easier:`,
      },
      {
        list: [
          `Scrape or let the glass clear before you set off, then move the airflow from the windshield to the floor.`,
          `Keep the fan speed on the lowest setting that keeps the glass clear.`,
          `Wear glasses or sunglasses on bright, frosty mornings; the low winter sun off a wet road is hard on squinting eyes.`,
          `If your eyes feel gritty after the drive, give them a minute of slow, complete blinks before you start work.`,
        ],
      },
      { h: 'Heating a house through a long cold stretch' },
      {
        p: `From November, when lows average about 35°F, into March, at about 36°F, the heat in a Shelby home runs most nights. Whether it’s a heat pump, a gas furnace, baseboard units or a wood stove, all of them warm dry air. Some ways to take the edge off:`,
      },
      {
        list: [
          `Run a humidifier in the bedroom on the coldest nights and clean it as its maker directs.`,
          `Don’t sleep with a space heater or a ceiling fan pointed toward the bed.`,
          `Keep the recliner or reading chair out of the stream from a floor register.`,
          `Turn the thermostat down a few degrees at night; cooler rooms need less heated air moving through them.`,
        ],
      },
      { h: 'Warm, wet summers indoors' },
      {
        p: `Summer turns the problem around. July and August average highs near 89 to 91°F, and the rain stays steady at about 4.4 to 4.5 inches a month. Outdoors it’s humid, but indoors the air conditioning cools and dries the air for months. If your eyes feel dry in a Shelby summer, check the vents in the car and over your desk first, and step outside now and then rather than spending a whole shift under a cold register.`,
      },
      { h: 'Outdoor work and weekends' },
      {
        p: `Yard work in spring, ball games in the fall and hunting or hiking on cold mornings all have the same eye-drying ingredients: wind, low sun and long focus. Wraparound sunglasses help in all of them. Anything that gets into the eye, like grit, sawdust, a chemical splash or plant debris, isn’t a job for lubricating drops. Get it looked at by an eye doctor or urgent care, and for a chemical, call Poison Control right away.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is an over-the-counter lubricating eye drop. Uses: {uses}. Directions: {directions}. Warnings: {warnings}.`,
      },
      {
        p: `Follow the handling line before every use: {tip}. Storage reads: {storage}. A bottle left in an unheated car through a January night can fall below that lower limit, so bring it inside. The label also says: {doNotUse}. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Shelby' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Shelby and anywhere else in the United States for {shipping} per order, or free on {freeBottles} or more bottles. Checkout works without an account, and you can [look up your order](/orders) once it ships. We don’t promise a delivery date. More local details are on the [Shelby page](/eye-drops/shelby-nc) and [Quell in North Carolina](/eye-drops/state/north-carolina). For a nearby city on a different station, see the [Gastonia guide](/guides/dry-eye-relief-gastonia-nc).`,
      },
      { h: 'When an eye doctor should take a look' },
      {
        p: `The label is specific: {stopUse} Dryness that returns every winter, or that doesn’t improve after you’ve dealt with heat and screens, deserves an exam, and an eye doctor can find the cause and decide what to do. If you wear contact lenses or use other eye drops, the label doesn’t cover that, so ask your eye doctor or pharmacist. Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the signs not to wait on.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Shelby, NC get in winter?',
        a: `NOAA’s 1991–2020 normals for the Shelby 2 NW station put January’s average low at 26.9°F and its average high at 52.6°F. December and February lows average about 29°F.`,
      },
      {
        q: 'What is the wettest month in Shelby, North Carolina?',
        a: `March, at 4.68 inches in NOAA’s normals for the Shelby 2 NW station. February is the lowest at 3.36 inches, so no month is truly dry, and the yearly total is about 50.4 inches.`,
      },
      {
        q: 'Does it snow in Shelby, NC?',
        a: `Some. Normal snowfall at the Shelby 2 NW station adds up to about 4 inches a year, with January averaging 1.8 inches and December 0.8 inches.`,
      },
      {
        q: 'Does Quell ship to Shelby, North Carolina?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Shelby for {shipping} per order, or free on {freeBottles} or more bottles. You’ll get tracking by email when it ships; no delivery date is promised.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-for-shuttle-drivers',
    title: 'Dry eyes for shuttle drivers',
    description:
      'Curbside loading, a sliding door at every stop and hours idling in a staging lot all dry a shuttle driver’s eyes. Fixes that fit the loop.',
    category: 'using',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Shuttle drivers get dry eyes from the shape of the job: short loops repeated for hours, a passenger door opening at every stop, curbside loading in exhaust and wind, and long waits in a staging lot with the climate control blowing. Aim the vents low, shield your eyes at the curb, blink fully while you wait, and put in lubricating drops only when the van is parked and you’re off the clock for a moment.`,
      },
      { h: 'Why a shuttle loop is hard on the eyes' },
      {
        p: `Airport, hotel, parking lot, hospital and campus shuttles all run on the same pattern. You drive a short, familiar circuit, stop, open up, load, close up and go again, sometimes forty or fifty times in a shift. Each piece of that has its own effect on the tear film, the thin layer of mucus, water and oil that keeps the front of the eye smooth and comfortable:`,
      },
      {
        list: [
          `Familiar routes invite a fixed, steady stare, and people blink less when they hold their gaze on one thing.`,
          `The side door brings in outside air at every stop: cold and dry in winter, hot in summer.`,
          `Terminal curbs and hotel drives are lined with idling vehicles, so you’re often breathing and blinking in exhaust.`,
          `Between runs, the van sits in a staging lot with the engine on and the fan blowing.`,
        ],
      },
      { h: 'At the curb: luggage, exhaust and wind' },
      {
        p: `Loading bags is the most physical part of the job and the least kind to your eyes. You’re bending into a cargo area or reaching up to a rack, often beside another vehicle’s tailpipe, and covered terminal roadways can channel wind along the curb. A few habits help:`,
      },
      {
        list: [
          `Wear sunglasses or clear glasses at the curb, even under a roof. Wraparound frames block wind and grit from the side.`,
          `Stand upwind of an idling bus or van when you can choose where to stack bags.`,
          `If grit blows into your eye, don’t rub it and don’t try to rinse it out with lubricating drops. Get it looked at by an eye doctor or urgent care if it doesn’t clear.`,
          `Back in the seat, take three or four slow, complete blinks before pulling out.`,
        ],
      },
      { h: 'Waiting in the staging lot' },
      {
        p: `Waiting is a big part of shuttle work, and it’s when the cab air does the most drying. Engines idle to keep passengers comfortable, the fan runs continuously, and drivers fill the time on a phone or the dispatch tablet. That’s an hour of close screen focus in moving, conditioned air.`,
      },
      {
        list: [
          `Turn the fan down while the van is empty, and aim the louvers at the floor or the passenger area.`,
          `When you look at the dispatch screen, look up every few minutes at something across the lot.`,
          `Step out of the van for a minute if your company allows it. Still outdoor air is a break from the vent.`,
          `This is the safest time to use drops, when the van is in park and you’re not about to move.`,
        ],
      },
      { h: 'First runs and last runs' },
      {
        p: `Many shuttle shifts start before sunrise for early flights or run late for the last arrivals. Low sun on the morning loop and headlights on the night loop both make drivers squint, and a squint swaps full blinks for partial ones. Clean the inside of the windshield regularly, since a film on the glass scatters light. Keep a pair of sunglasses for the morning and clear glasses for night if that suits you. Driving routes in the dark, it helps to know that eyes often feel drier late in a shift simply because they’ve been open and focused for longer.`,
      },
      { h: 'Using drops between runs, never while driving' },
      {
        p: `A drop blurs your vision for a few seconds and takes a hand off the wheel, so it belongs only to moments when the vehicle is parked: in the staging lot, on a break, or before and after the shift. Not at a red light, and not at a stop while passengers are boarding. Clean your hands first, because you’ve been handling bags, door handles and a steering wheel all shift.`,
      },
      {
        p: `If you use Quell, the label reads, for Uses: {uses}. Directions: {directions}. And before each use: {tip}. Wait until your vision is clear again before you drive. If you’re not sure whether your employer has rules about this, ask; their rules come first. [Can you drive after putting in eye drops?](/guides/can-you-drive-after-putting-in-eye-drops) goes into the timing.`,
      },
      { h: 'Where to keep a bottle on shift' },
      {
        p: `The label’s storage line is: {storage}. A shuttle parked in the sun at a terminal lot, or left in an unheated yard on a winter night, can go well outside that range. Keep the bottle in a jacket or bag that stays with you rather than in the door pocket, the dash tray or a cup holder near the windshield. If a bottle may have gotten too hot or too cold, look at it before use. The label says: {doNotUse}. More on this in [how to store eye drops](/guides/how-to-store-eye-drops).`,
      },
      { h: 'Shuttle work versus a city bus route' },
      {
        p: `Route bus drivers face longer runs, a big windshield, a fare box and more time between doors. Shuttle drivers trade that for more stops, more lifting and more idle time in a lot. If you’ve driven both, our guide to [dry eyes for bus drivers](/guides/dry-eyes-for-bus-drivers) covers the longer-route side.`,
      },
      { h: 'What to take to a doctor' },
      {
        p: `Your vision is part of your job, so changes matter. The label says: {stopUse} Dryness that keeps returning across shifts is worth an exam too, since an eye doctor can find the cause and decide what to do. The label doesn’t cover contact lenses or use with other drops; ask your eye doctor or pharmacist about those. Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs not to drive through.`,
      },
    ],
    faq: [
      {
        q: 'Why do shuttle drivers get dry eyes?',
        a: `The work repeats the same short loop for hours, opens the passenger door to outside air at every stop, and keeps the engine and fan running during long waits. Steady focus also lowers how often you blink.`,
      },
      {
        q: 'When can a shuttle driver use eye drops?',
        a: `Only when the vehicle is parked and you’re not about to move, such as in the staging lot or on a break. A drop blurs vision briefly, so wait for it to clear before driving.`,
      },
      {
        q: 'Should shuttle drivers wear sunglasses when loading luggage?',
        a: `Many find it helps. Glasses with side coverage block wind, grit and exhaust at the curb, and sunglasses cut the glare off wet pavement and windows on early runs.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-when-doing-calligraphy',
    title: 'Dry eyes when doing calligraphy or hand lettering',
    description:
      'Long, steady focus on a nib or brush lowers how often you blink. Why calligraphy dries your eyes, and how to set up the desk, lamp and breaks.',
    category: 'using',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Calligraphy and hand lettering dry the eyes because they ask for long, unbroken focus on a small point: the tip of a nib or brush moving along a guideline. People blink less and less completely when they concentrate that hard. Break your sessions into short stretches, keep lamps and heaters from blowing or glaring at you, rest your gaze between words, and use a lubricating eye drop as its label directs.`,
      },
      { h: 'Why lettering is so hard on your blink' },
      {
        p: `Blinking spreads a fresh tear film across the eye every few seconds. That film has three layers: mucus closest to the eye, a watery middle, and an outer oil layer that slows evaporation. Between blinks, the film thins. Most of the time you don’t notice, because blinking keeps pace.`,
      },
      {
        p: `Lettering interrupts that rhythm. Pulling a long downstroke or a hairline entry stroke, many people hold their breath and their gaze together, and a blink feels like it might spoil the line. Over an hour of practice sheets, those held moments add up to a lot of exposed eye. The usual result is a gritty, scratchy or burning feeling that shows up toward the end of a session, sometimes with blurriness that clears after a few blinks.`,
      },
      { h: 'Setting up the desk' },
      {
        p: `Small changes to your workspace reduce how hard your eyes work:`,
      },
      {
        list: [
          `Raise the work. A slanted board or angled desk brings the paper closer to perpendicular with your line of sight, so you’re not peering down at a sharp angle with your eyes opened wide.`,
          `Put the lamp to the side opposite your writing hand, so your hand doesn’t throw shadows and you don’t squint through them.`,
          `Avoid glare from glossy paper or a light pad by angling the lamp so its reflection misses your eyes.`,
          `Keep space heaters and fans from blowing across the desk. Moving air pulls moisture from the eye’s surface, and it also dries ink on the nib.`,
          `If you letter by a window in winter, watch for drafts and direct sun on the page.`,
        ],
      },
      { h: 'Building breaks into a session' },
      {
        p: `Lettering has natural pause points, and they’re useful for your eyes. Try these:`,
      },
      {
        list: [
          `Every time you dip or reload a brush, look up and across the room for a few seconds and blink fully.`,
          `Between words or lines, close your eyes gently for a slow count of two.`,
          `At the end of each practice sheet, stand up and look out a window or down a hallway.`,
          `Work in sessions of 20 to 30 minutes rather than an unbroken afternoon. The work usually improves too.`,
        ],
      },
      { h: 'Digital lettering on a tablet' },
      {
        p: `Lettering on a tablet with a stylus brings the same focus plus a screen. Screens reduce blinking on their own, and a tablet flat on the desk sits low in your field of view, which keeps the eyes open wider. Prop the tablet on a stand, turn brightness down to roughly match the room, and use the app’s zoom so you’re not leaning in. Our guide to [screens and your tear film](/guides/screens-and-your-tear-film) has more on why screens dry the eyes.`,
      },
      { h: 'Ink, gouache and other things near your eyes' },
      {
        p: `Calligraphy supplies sometimes splash or flick, especially when a nib catches on paper. Lubricating drops aren’t for rinsing anything out of the eye. If ink, paint, a cleaning solution or a solvent gets in your eye, follow the directions on that product, call Poison Control, and get seen by an eye doctor or urgent care. Wash your hands before touching your face, and before putting in any drop, since fingers are often inky.`,
      },
      { h: 'Using a lubricating drop around lettering' },
      {
        p: `If you use Quell, follow the label. Uses: {uses}. Directions: {directions}. Before each use: {tip}.`,
      },
      {
        list: [
          `A drop can blur your vision for a moment, so put it in at a break rather than right before a final piece.`,
          `Keep the bottle away from the ink and water jars so it doesn’t get knocked into them.`,
          `Storage reads: {storage}. A sunny desk or a spot by a radiator may not fit that.`,
          `The label also says: {doNotUse}.`,
        ],
      },
      { h: 'Similar hobbies, similar fixes' },
      {
        p: `Anyone who works small and close for long stretches runs into the same issue. Our guides to [dry eyes when sewing or knitting](/guides/dry-eyes-when-sewing-or-knitting) and [dry eyes when reading](/guides/dry-eyes-when-reading) cover the stitching and page-turning versions, with their own setups.`,
      },
      { h: 'When it’s more than practice fatigue' },
      {
        p: `Dryness that clears after a break is common. Some things aren’t. The label says: {stopUse} If you notice that fine strokes look blurry even when your eyes feel fine, or that dryness keeps returning outside your lettering time, see an eye doctor, who can find the cause and decide what to do. The label doesn’t cover contact lenses or using other drops alongside it, so ask your eye doctor or pharmacist about those. See also [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when I do calligraphy?',
        a: `Holding a steady focus on a nib or brush tip lowers how often and how completely you blink. Between blinks the tear film thins, so a long session leaves your eyes feeling gritty or scratchy.`,
      },
      {
        q: 'How long should a hand lettering session be?',
        a: `For your eyes, shorter stretches of 20 to 30 minutes with a real break between them are easier than an unbroken afternoon. Use dips, reloads and line ends as quick cues to look away and blink.`,
      },
      {
        q: 'What lighting is easiest on the eyes for calligraphy?',
        a: `A lamp placed on the side opposite your writing hand, angled so its reflection doesn’t bounce off glossy paper into your eyes. Even room light behind it helps too, so you’re not working in a bright pool in a dark room.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-for-upholsterers',
    title: 'Dry eyes for upholsterers',
    description:
      'Fabric lint, foam dust, staple guns and close stitching under bright lights. Why upholstery work dries your eyes, and what helps in the shop.',
    category: 'using',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Upholsterers get dry, gritty eyes from a mix of shop conditions: lint and fiber from fabric and batting, dust from old padding and foam, air from compressors and heaters, and long stretches of close focus on seams and tacking. Control the air in your workspace, take short breaks from close work, keep anything that gets in your eye for a doctor, and use lubricating drops as their label directs.`,
      },
      { h: 'What makes upholstery work dry on the eyes' },
      {
        p: `Upholstery is close, careful work done in a dusty room. Stripping a chair or sofa down to its frame releases years of dust from old padding, burlap and horsehair. Cutting foam and pulling batting fills the air with fine particles. New fabric sheds lint as you cut and fit it. Then the work turns precise: matching patterns, sewing welt, setting tacks or staples in a straight line. Each of those things touches the tear film, the thin layer of mucus, water and oil over the eye:`,
      },
      {
        list: [
          `Airborne fibers and dust land on the eye’s surface and make it feel scratchy.`,
          `Compressed air, used to blow off a frame or power a staple gun, moves dry air around the shop.`,
          `Shop heaters in winter warm dry air, and fans in summer keep it moving.`,
          `Close focus on a seam or a line of staples lowers how often you blink.`,
        ],
      },
      { h: 'Stripping old furniture' },
      {
        p: `Tear-down is the dustiest part of the job and the most likely to put something in your eye. Staples and tacks can spring loose as you pry them, and old padding crumbles into fine dust. Wear the eye protection your shop uses for this work. Work with the piece between you and any fan or open door, so the dust blows away from you rather than into your face. Bag the old material as you go rather than letting a pile build up beside the bench.`,
      },
      {
        p: `If a staple fragment, a splinter, a piece of tack or a clump of dust gets into your eye, lubricating drops aren’t the answer. Don’t rub the eye. Get it seen by an eye doctor or urgent care, especially if something struck the eye or it still hurts after a few minutes.`,
      },
      { h: 'Air in the shop' },
      {
        p: `The air in an upholstery shop is often warm and moving. Reasonable changes:`,
      },
      {
        list: [
          `Aim space heaters at your legs or the floor, never across the bench at face height.`,
          `Point fans so they pull air past you toward a door or window rather than at you.`,
          `Use a shop vacuum rather than compressed air to clean frames and work surfaces when you can; blowing dust off a frame puts it back in the air you’re breathing and blinking in.`,
          `Run a room humidifier in winter if the shop feels parched, and keep it clean.`,
        ],
      },
      { h: 'Close work: patterns, welt and stitching' },
      {
        p: `Fitting a patterned fabric so the stripes line up across a cushion, or hand-stitching a closing seam, takes the same kind of focus as reading fine print. People blink less when they concentrate, and the eyes dry between blinks. Break up long close tasks:`,
      },
      {
        list: [
          `Every few minutes, look across the shop at something far away and blink slowly a few times.`,
          `Raise small work closer to eye level on a stand or table, rather than bending over it on the floor.`,
          `Use good, even task lighting so you’re not squinting at dark fabric. Squinting replaces full blinks with partial ones.`,
          `When sewing at the machine, use thread changes and bobbin swaps as cues to rest your eyes.`,
        ],
      },
      { h: 'Using a lubricating drop at work' },
      {
        p: `If you use Quell, wash your hands first, since they’ve been in dust, fiber and adhesives. Then follow the label. Uses: {uses}. Directions: {directions}. Before each use: {tip}. Wait for your vision to clear before you pick up a staple gun or a knife again.`,
      },
      {
        p: `Keep the bottle in a clean pocket or a lunch bag rather than on the bench, where dust settles on everything. The storage line reads: {storage}. A van parked outside on a pickup or delivery day can get hotter or colder than that, so bring the bottle in with you. If a bottle has been somewhere too hot or cold, look before you use it. The label says: {doNotUse}.`,
      },
      { h: 'Related trades' },
      {
        p: `Upholsterers share a lot with other shop trades. Our guide to [dry eyes for woodworkers](/guides/dry-eyes-for-woodworkers) covers sanding dust and finishing, and [how to store eye drops](/guides/how-to-store-eye-drops) covers keeping a bottle in good shape in a work vehicle or a cold shop.`,
      },
      { h: 'What belongs with a doctor' },
      {
        p: `The label is explicit: {stopUse} Anything that strikes the eye, or a feeling that something is stuck in it, belongs with an eye doctor or urgent care. Dryness that keeps coming back even after you’ve improved the shop air is also worth an exam, and an eye doctor can find the cause and decide what to do. The label doesn’t cover contact lenses or using other drops with it; ask your eye doctor or pharmacist. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get gritty doing upholstery?',
        a: `Fabric lint, batting fibers and dust from old padding float in the shop air and land on the eye’s surface. Long stretches of close work also lower how often you blink, so the eyes dry out between blinks.`,
      },
      {
        q: 'What should I do if a staple flies into my eye?',
        a: `Don’t rub it and don’t try to rinse it out with lubricating drops. Get it seen promptly by an eye doctor or urgent care, especially if it hurt when it hit or your vision has changed.`,
      },
      {
        q: 'Can foam dust irritate your eyes?',
        a: `Fine dust from cutting foam or stripping old cushions can make eyes feel scratchy when it lands on them. Working with the dust blowing away from you, using a vacuum instead of an air hose, and wearing the eye protection your shop uses all reduce how much reaches your eyes.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-at-a-cold-weather-tailgate',
    title: 'Dry eyes at a cold-weather tailgate',
    description:
      'Hours in a cold parking lot, grill smoke, propane heaters and low sun. How to keep your eyes comfortable at a winter tailgate, and where to keep drops.',
    category: 'seasonal',
    addedOn: '2026-11-24',
    body: [
      {
        p: `A cold-weather tailgate dries the eyes because you spend hours in open, windy parking lots, standing in grill smoke and beside propane heaters, and squinting into low winter sun. Set up with your back to the wind, keep out of the smoke plume, wear wraparound sunglasses, and step into the car with the vents aimed low when you need a break. Use lubricating drops only as their label directs.`,
      },
      { h: 'Why a tailgate is rough on your eyes' },
      {
        p: `A tailgate is a long day outdoors without much shelter. Stadium lots are wide and flat, so wind crosses them unbroken, and a late-season game day often starts in the 30s or 40s. Wind speeds evaporation from the tear film, the thin layer of mucus, water and oil covering the eye, and cold wind often makes eyes water, which can feel like the opposite of dryness even when it’s the same problem. Then there’s the smoke from a dozen grills, the dry blast of a patio heater and hours of squinting into the sun.`,
      },
      { h: 'Setting up in the lot' },
      {
        p: `Where you park and how you arrange your spot matter more than people think:`,
      },
      {
        list: [
          `Check the wind direction when you arrive and put the open tailgate or hatch facing away from it, so the vehicle blocks the breeze.`,
          `Put the grill downwind of the chairs. If the smoke still swirls your way, move the chairs rather than standing in it.`,
          `A canopy with one or two side walls on the windward side gives your eyes a real break.`,
          `Face the chairs so the low afternoon sun is behind you or to the side, not straight ahead.`,
        ],
      },
      { h: 'Grill smoke and charcoal' },
      {
        p: `Smoke irritates the eyes, and standing over a grill for an hour means standing in it. Take turns at the grill, step back between flips, and avoid leaning over the coals when you lift the lid. If smoke or ash gets into your eyes, move into clean air and blink. If something solid gets in, or your eyes still hurt after you’ve stepped away, that’s not a dryness problem: get it looked at by an eye doctor or urgent care.`,
      },
      { h: 'Propane heaters and car heaters' },
      {
        p: `Heaters make a cold tailgate bearable, and they also dry the air right in front of them. Sit beside a patio heater rather than facing it, and keep tabletop heaters at waist height instead of eye level. When you warm up in the car, turn the vents toward your chest and feet. The same goes for the drive in, which for many fans starts before dawn with the defroster on high. Our guide to [dry eyes at an outdoor winter game](/guides/dry-eyes-at-an-outdoor-winter-game) covers the hours in the stands after the tailgate ends.`,
      },
      { h: 'Glasses and goggles in the lot' },
      {
        p: `Wraparound sunglasses do the most work at a tailgate. They cut the glare off windshields and the low sun, and they block wind from the sides. On gray days, clear glasses with side coverage help with wind and smoke. Beanies and hoods can help too, as long as they don’t push the brim into your line of sight so you’re staring upward. More on this in [how to protect your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind).`,
      },
      { h: 'Where to keep eye drops on game day' },
      {
        p: `The label’s storage line reads: {storage}. A tailgate breaks that range in both directions: a cooler packed with ice is too cold, and a closed car in afternoon sun can be too warm even in winter. Keep the bottle in an inside jacket pocket, where your body keeps it in range. Don’t leave it in a cup holder, on the dash, or in the cooler with the drinks. If you’re going into the stadium afterward, check the venue’s bag rules before you go.`,
      },
      {
        list: [
          `Wash your hands or use sanitizer before a drop; tailgate hands have been on the grill, the food and the football.`,
          `Follow the label’s handling line: {tip}.`,
          `If a bottle got very cold or hot, look at it first. The label says: {doNotUse}.`,
        ],
      },
      { h: 'Using a drop at a tailgate' },
      {
        p: `If you use Quell, the label’s Uses line reads: {uses}. The directions are: {directions}. A long game day is not a reason to use it more often than that. Put a drop in when you’re sitting down and out of the wind, such as in the car or under the canopy, and give your vision a moment before you walk anywhere. The driver should only use a drop before setting off or after parking.`,
      },
      { h: 'After the game' },
      {
        p: `The ride home is often in the dark, with heaters running and headlights glaring. Aim the vents low, keep the inside of the windshield clean, and take your sunglasses off once the sun is down. If you’re watching the late game at home afterward, our guide to [dry eyes from watching Thanksgiving football](/guides/dry-eyes-watching-thanksgiving-football) covers long hours in front of the TV.`,
      },
      { h: 'When it’s not just a long day outside' },
      {
        p: `The label says: {stopUse} Eye pain after a day outdoors, a feeling that something is stuck in the eye, or blurry vision that doesn’t clear with blinking are reasons to see an eye doctor rather than wait. An eye doctor can find the cause and decide what to do. The label doesn’t give directions for contact lenses or use with other drops; ask your eye doctor or pharmacist.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes water at a cold tailgate?',
        a: `Cold wind across an open parking lot speeds evaporation from the eye’s surface, and watering is a common response. Setting up with your vehicle blocking the wind and wearing wraparound glasses usually helps.`,
      },
      {
        q: 'Where should I keep eye drops at a tailgate?',
        a: `In an inside jacket pocket. The label says {storage}, and a cooler, a cup holder or a car parked in the sun can go outside that range.`,
      },
      {
        q: 'Can grill smoke dry out your eyes?',
        a: `Smoke irritates the eyes, and standing over a grill for a long time keeps you in it. Put the grill downwind of where people sit, take turns at it, and step into clean air when your eyes sting.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-at-a-holiday-craft-fair',
    title: 'Dry eyes at a holiday craft fair',
    description:
      'Heated halls, cold doors, booth lights and hours of close looking. How vendors and shoppers can keep their eyes comfortable at a holiday craft fair.',
    category: 'seasonal',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Holiday craft fairs dry the eyes because they pack people into heated gyms, church halls and fairground buildings, with doors letting in cold air, bright clamp lights over every table and hours of looking closely at small things. Vendors get the longest dose. Set up out of drafts and light glare, take regular breaks to look across the room, keep a bottle of drops in your apron or bag, and use it as the label directs.`,
      },
      { h: 'What makes a craft fair hard on your eyes' },
      {
        p: `From late November through mid-December, school gyms, community centers and church fellowship halls fill with rows of tables. Those rooms weren’t built for hundreds of visitors and dozens of extra lights, so the heat runs hard, the air gets warm and dry, and every time the doors open a gust of cold air crosses the room. The tear film, the thin layer of mucus, water and oil over the eye, loses water faster in warm, dry, moving air. Add a few hours of examining earrings, ornaments, pottery glazes or tiny stitches, and you’ve got the main ingredients for a gritty, scratchy feeling by early afternoon.`,
      },
      { h: 'For vendors: setting up your table' },
      {
        p: `If you’re selling, your eyes spend the longest time in the room, and you have some control over your spot:`,
      },
      {
        list: [
          `Ask for a table away from the main doors and the heating vents if the organizer takes requests. Drafts and heater blasts both dry the eyes.`,
          `Point clamp lights at your goods, not at your chair. Glare off glass, glaze and metallic paper makes you squint.`,
          `Set the card reader or tablet at a height you can see without leaning down over it.`,
          `Keep a small fan, if you bring one, aimed low and away from your face.`,
          `Bring a stool so you can rest your eyes and your feet in short breaks without leaving the table.`,
        ],
      },
      { h: 'For vendors: the cold load-in and load-out' },
      {
        p: `Craft fair days start early, with cars and vans unloaded in dark parking lots, often in wind. Wear glasses or sunglasses for load-in, especially if you’re carrying boxes at face height, and keep the car heater’s airflow aimed at the floor on the drive. Load-out is at dusk, with low sun or headlights. If you’ve been looking at your table for six hours, take a few minutes of slow blinking before you drive home.`,
      },
      { h: 'For shoppers: browsing without the strain' },
      {
        p: `Shoppers don’t stay as long, but they spend that time looking hard at detailed work. People blink less when they concentrate, and the hall’s air does the rest. A few small habits:`,
      },
      {
        list: [
          `Take off your heavy coat or open it; a bundled-up shopper in a hot room ends up flushed and squinting.`,
          `Every few tables, look up across the room and blink a few times before you look closely at the next display.`,
          `Step outside for a minute if the room feels stuffy. Fresh air without a heater behind it is a break.`,
          `If you wear reading glasses, bring them, so you’re not straining to read price tags and small labels.`,
        ],
      },
      { h: 'Keeping eye drops at a fair' },
      {
        p: `A vendor apron, a fanny pack or a small bag that stays on you are the easiest places to keep a bottle. The label’s storage line reads: {storage}. A car parked in a cold lot from dawn to dusk can fall below that, so don’t leave the bottle in the vehicle. Under the table beside a space heater isn’t a good spot either. Before using a bottle that may have gotten too cold or hot, look at it; the label says: {doNotUse}.`,
      },
      {
        p: `If you use Quell, the label reads, for Uses: {uses}. Directions: {directions}. Before each use: {tip}. Clean your hands first, since you’ve been handling cash, goods and other people’s cards. Put a drop in during a quiet moment rather than mid-sale, and wait for your vision to clear.`,
      },
      { h: 'Glitter, sawdust and other things that end up in eyes' },
      {
        p: `Craft fairs bring out glitter, wood shavings, wool fibers and dried flower bits. If something gets into your eye, don’t rub it and don’t try to wash it out with lubricating drops. Blink, and if the feeling doesn’t clear quickly, get it looked at by an eye doctor or urgent care.`,
      },
      { h: 'Outdoor markets and big shopping days' },
      {
        p: `Not every holiday fair is indoors. If yours is in a park or on a closed-off street, our guide to [dry eyes at an outdoor Christmas market](/guides/dry-eyes-at-a-christmas-market) covers cold wind and food-truck smoke. For a mall or big-box trip the same weekend, see [dry eyes while Christmas shopping](/guides/dry-eyes-while-christmas-shopping). More winter guides are under [gifts and the holidays](/guides/topic/seasonal).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A dry afternoon at a fair usually settles once you’re out of the hall. The label lists when it doesn’t: {stopUse} An eye doctor can find the cause of dryness that keeps returning and decide what to do. The label doesn’t cover contact lenses or use with other drops; ask your eye doctor or pharmacist about those.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry at craft fairs?',
        a: `Craft fairs fill heated halls with people and extra lights, so the air gets warm and dry, and cold drafts come in each time the doors open. Hours of looking closely at small items also lower how often you blink.`,
      },
      {
        q: 'How can a craft fair vendor keep their eyes from drying out?',
        a: `Ask for a table away from doors and heating vents, aim booth lights at your goods rather than your chair, and take short breaks to look across the room and blink. Keep any fan aimed low.`,
      },
      {
        q: 'Where should a vendor keep eye drops during a craft show?',
        a: `In an apron, fanny pack or small bag that stays on you. A car in a cold lot or a spot beside a space heater can take the bottle outside the label’s storage range.`,
      },
    ],
  },

  {
    slug: 'christmas-gifts-for-a-home-cook',
    title: 'Christmas gifts for a home cook',
    description:
      'Useful gifts for an adult who cooks a lot: light, steam, heat and recipe screens all affect the eyes. Ideas that make a busy kitchen easier.',
    category: 'seasonal',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Good Christmas gifts for a home cook make the kitchen easier to work in: brighter light over the counter, a stand that holds a recipe or tablet at eye level, longer oven mitts, a splatter screen, and a reliable meat thermometer. If they mention dry, gritty eyes from oven heat and long cooking days, a bottle of lubricating eye drops can sit alongside, once they’ve checked the label’s caution about egg or bird allergies.`,
      },
      { h: 'What a kitchen does to the eyes' },
      {
        p: `Anyone who cooks a lot knows the moment: you open the oven, a wave of hot, dry air hits your face, and your eyes sting. Kitchens combine several things that work against the tear film, the thin layer of mucus, water and oil over the eye. Hot air and moving air speed evaporation. Steam and smoke irritate. And reading a recipe on a phone or tablet propped on the counter lowers how often you blink. None of that means a cook needs anything special, but gifts that reduce glare, heat and squinting are ones they’ll actually use.`,
      },
      { h: 'Gifts that put things at eye level' },
      {
        list: [
          `A cookbook or tablet stand. A recipe flat on the counter means cooking with your head bent and eyes cast down; a stand brings it up where you can glance at it.`,
          `A wall-mounted or magnetic rack for the spices they reach for most, so they’re not crouching and squinting at small labels in a cabinet.`,
          `A step stool that tucks away, for reading labels and reaching the top shelf without straining.`,
        ],
      },
      { h: 'Gifts for better light' },
      {
        p: `Dim, shadowy counters make people lean in and squint. Lighting gifts are practical and often overlooked:`,
      },
      {
        list: [
          `Plug-in or battery under-cabinet light bars, which light the cutting board without glaring into the eyes.`,
          `A clip-on lamp for the stove area if the range hood light is weak.`,
          `A small flashlight that lives in the kitchen drawer, for checking the back of the oven or the inside of a pot.`,
        ],
      },
      { h: 'Gifts for heat and splatter' },
      {
        list: [
          `Long oven mitts that cover the forearms, so they can step back from an open oven rather than leaning into the heat.`,
          `A splatter screen for frying, which keeps hot oil from popping toward the face.`,
          `A meat thermometer that reads quickly, so the oven door is open for less time while they check the roast.`,
          `A lid rack or spoon rest that lets them lift lids away from their face, with the steam going the other way.`,
        ],
      },
      {
        p: `If they deep-fry or cook with a lot of hot oil, they may already use their own eye protection. That’s their call; a gift here is about comfort, not safety rules. Anything that splashes into the eye, like hot oil, a cleaning product or pepper juice, is for urgent care or Poison Control, not a lubricating drop.`,
      },
      { h: 'A bottle of eye drops, if it fits' },
      {
        p: `Eye drops make a thoughtful add-on only for someone who’s mentioned dry or scratchy eyes. As a surprise for someone who hasn’t, they can read as a hint. If you do include a bottle of Quell, know what the label says first:`,
      },
      {
        list: [
          `Uses: {uses}.`,
          `Directions: {directions}.`,
          `Warnings: {warnings}. That caution matters because one of the inactive ingredients is emu oil.`,
          `Storage: {storage}. Tell them not to keep the bottle on the shelf above the stove or beside the oven.`,
        ],
      },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Each bottle holds {size}. If they wear contact lenses or use other eye drops, the label doesn’t cover that, so it’s a question for their eye doctor or pharmacist before they start. Our guide to [whether eye drops are a good gift](/guides/are-eye-drops-a-good-gift) talks through when they land well.`,
      },
      { h: 'Small gifts and stocking stuffers' },
      {
        list: [
          `A kitchen timer with large, easy-to-read numbers.`,
          `A set of good dish towels, the thing every cook runs short of.`,
          `Reading glasses kept in the kitchen, if they already use them elsewhere, for small print on packages.`,
          `A handwritten copy of a family recipe, framed or laminated, to prop on the new stand.`,
        ],
      },
      {
        p: `For more small ideas, see [stocking stuffers for people who use eye drops](/guides/stocking-stuffers-for-eye-drop-users) or [practical Christmas gifts for adults](/guides/practical-christmas-gifts-for-adults).`,
      },
      { h: 'Shipping a gift to them' },
      {
        p: `If you’re sending Quell to them directly, it ships from Brentwood, Tennessee, to US addresses for {shipping} per order, or free on {freeBottles} or more bottles. You can enter their address at checkout as a guest. We don’t promise a delivery date, so order well ahead of when you’ll see them. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. [How to send Quell as a gift](/guides/sending-quell-as-a-gift) has the details, and more holiday ideas are under [gifts and the holidays](/guides/topic/seasonal).`,
      },
      { h: 'If their eyes bother them a lot' },
      {
        p: `A gift can make a kitchen more comfortable. It can’t stand in for an exam. The label says: {stopUse} If the cook in your life mentions pain or changes in vision, the kindest gift is encouraging a visit to an eye doctor, who can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'What is a good Christmas gift for someone who loves to cook?',
        a: `Practical things they’ll use every week: a cookbook or tablet stand, under-cabinet lighting, long oven mitts, a splatter screen and a quick-reading meat thermometer. They make the kitchen easier on the hands and the eyes.`,
      },
      {
        q: 'Are eye drops a good gift for a home cook?',
        a: `Only if they’ve mentioned dry or scratchy eyes, and only after checking the label. Quell’s warnings read: {warnings}. Pair it with something for the kitchen rather than giving it on its own.`,
      },
      {
        q: 'Why do my eyes sting when I open the oven?',
        a: `Opening the oven sends a wave of hot, dry air across your face, which speeds evaporation from the eye’s surface. Stepping back as you open the door and using long oven mitts helps keep your face out of it.`,
      },
    ],
  },

  {
    slug: 'can-you-use-warm-eye-drops',
    title: 'Can you use warm eye drops?',
    description:
      'A bottle at room temperature is fine to use; one that got hot is another matter. What Quell’s label says about temperature, and what not to do.',
    category: 'choosing',
    addedOn: '2026-11-24',
    body: [
      {
        p: `You can use eye drops that are at a normal room temperature, but don’t warm a bottle on purpose, and look carefully at one that’s been somewhere hot. Quell’s label gives a storage range: {storage}. A bottle kept inside that range is where the label wants it. Never microwave or soak a bottle in hot water, and if one sat in a hot car, check the label’s “do not use” line before using it.`,
      },
      { h: 'Warm, room temperature and hot are different things' },
      {
        p: `People ask about warm eye drops for a few reasons. Some find a cold drop startling and want it to feel gentler. Some have heard of warm compresses and wonder if a warm drop does the same. And some have a bottle that’s been sitting in a car, a sunny window or a hot bathroom and want to know if it’s still usable. Those are three separate questions:`,
      },
      {
        list: [
          `Room temperature: a bottle kept in a normal living space, inside the label’s range, needs no warming or cooling. Use it as directed.`,
          `Deliberately warmed: the label gives no directions for heating a bottle, and doing it risks going past the top of the storage range.`,
          `Accidentally hot: a bottle left in a parked car or by a heater may have gone outside the range. Look at it before you use it.`,
        ],
      },
      { h: 'What the label says about temperature' },
      {
        p: `Quell’s Drug Facts panel has one line on temperature, in its Other information section: {storage}. That upper limit is about the warmth of a hot summer day indoors without air conditioning. It isn’t a temperature you need to reach; it’s one not to go past. The label also describes how the product should look: {milky}. And it gives a clear rule: {doNotUse}.`,
      },
      { h: 'Why not to heat a bottle' },
      {
        p: `There’s no direction on the label to warm Quell, so heating it isn’t part of how it’s meant to be used. A microwave heats unevenly and can make parts of the liquid much hotter than the rest. A cup of hot water or a radiator can push the bottle past its storage range without your knowing how far. You’d also be handling the tip area more than you need to, and the label’s handling line is specific: {tip}.`,
      },
      {
        p: `If a cold drop bothers you, let the bottle sit out in the room for a while before use, or hold it in a closed hand for a minute. That brings it closer to room temperature without heat. Our guide on [using cold eye drops](/guides/can-you-use-cold-eye-drops) covers the other end of the range.`,
      },
      { h: 'A warm drop is not a warm compress' },
      {
        p: `A warm compress is a cloth held against closed eyelids, and some eye doctors suggest one. It’s a different thing from a warm drop, and warming a drop doesn’t turn it into a compress. If you’ve been told to use both, our guide on [eye drops before or after a warm compress](/guides/eye-drops-before-or-after-a-warm-compress) covers the order, and your eye doctor’s directions come first.`,
      },
      { h: 'When a bottle got hot by accident' },
      {
        p: `Cars, mailboxes and sunny windowsills are the usual culprits. A closed car in the sun gets much hotter than the air outside, even on a mild day. Here’s what to do if your bottle spent time somewhere hot:`,
      },
      {
        list: [
          `Let it come back to room temperature in a cool spot, out of the sun.`,
          `Look at the liquid through the bottle. Compare it to how it looked when you got it, and to the label’s description: {milky}.`,
          `If the color looks different, the label is clear: {doNotUse}.`,
          `If you’re unsure, a pharmacist can look at it with you, or call us at {phone} during {hours}.`,
          `From then on, carry the bottle in a bag that comes inside with you rather than leaving it in the car.`,
        ],
      },
      {
        p: `[How to store eye drops](/guides/how-to-store-eye-drops) has more on where a bottle belongs at home and on the go.`,
      },
      { h: 'Does temperature change how a drop feels?' },
      {
        p: `A cooler drop may feel more noticeable for a second, and a room-temperature drop may feel like less of a jolt. Either way, the directions don’t change: {directions}. If a drop stings or burns at any temperature, or your eyes feel worse afterward, that’s worth paying attention to rather than adjusting the temperature.`,
      },
      { h: 'When it’s not about the bottle' },
      {
        p: `If you find yourself wanting a warm sensation because your eyes ache or feel sore, that’s worth mentioning to an eye doctor. The label says: {stopUse} An eye doctor can find the cause and decide what to do. If you wear contact lenses or use other eye drops, the label doesn’t cover that; ask your eye doctor or pharmacist.`,
      },
    ],
    faq: [
      {
        q: 'Is it okay to use eye drops that got warm in the car?',
        a: `Let the bottle cool to room temperature and look at it first. Quell’s label says {storage}, and also: {doNotUse}. If you’re unsure, ask a pharmacist before using it.`,
      },
      {
        q: 'Can I microwave eye drops to warm them up?',
        a: `No. The label gives no directions for heating, and a microwave heats unevenly and can push the bottle past its storage range. Let it sit out in the room or hold it in your hand instead.`,
      },
      {
        q: 'Should eye drops be room temperature?',
        a: `Room temperature is fine as long as it’s within the label’s storage range. Quell’s label says {storage}, so a normal living space works, but a hot car or sunny windowsill may not.`,
      },
    ],
  },

  {
    slug: 'choosing-eye-drops-for-someone-else',
    title: 'Choosing eye drops for someone else',
    description:
      'Buying eye drops for a parent, partner or friend? What to check on the label first, what to ask them, and what to leave to their doctor.',
    category: 'choosing',
    addedOn: '2026-11-24',
    body: [
      {
        p: `To choose eye drops for another adult, start with them, not the shelf: ask what their eyes feel like and whether they wear contacts or use other drops. Then read the label for the right Uses line, any allergy warnings, and directions they can follow. A lubricating drop like Quell is for dryness and irritation; pain or vision changes are for their eye doctor, not a gift bottle.`,
      },
      { h: 'Ask before you buy' },
      {
        p: `It’s easy to see someone rubbing their eyes and want to help. A few questions first save money and awkwardness:`,
      },
      {
        list: [
          `What do your eyes feel like: dry, gritty, burning, itchy, sore? Different complaints point in different directions.`,
          `Do you wear contact lenses? Quell’s label doesn’t give directions for contacts, so that’s a question for their eye doctor.`,
          `Do you already use any eye drops, prescribed or not? Using two kinds together isn’t covered by the label either.`,
          `Are you allergic to eggs or birds? Quell’s label has a specific caution about that.`,
          `Would you actually use them? Some people find putting in drops hard, and a bottle that sits unused helps nobody.`,
        ],
      },
      { h: 'Match the label’s Uses line to what they describe' },
      {
        p: `Every over-the-counter drop has a Uses line that says what it’s for. Quell’s reads: {uses}. If the person describes dryness or irritation from screens, heated rooms, wind or long days, that matches. If they describe something else, like eye pain, a sudden change in how well they see, discharge, or an injury, a lubricating drop isn’t the right answer, and they should see an eye doctor. Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs.`,
      },
      { h: 'Check the warnings for them, not for you' },
      {
        p: `The warnings section applies to the person who’ll use the drops. Quell’s reads: {warnings}. That first part matters because one of Quell’s inactive ingredients is emu oil, and our guide on [egg or bird allergies and Quell](/guides/egg-or-bird-allergy-and-quell) explains the caution. The second part means the drops go in the eyes and nowhere else. The full inactive list, if they want to check it, is: {inactives}.`,
      },
      { h: 'Can they follow the directions?' },
      {
        p: `Quell’s directions are short: {directions}. That’s easy to read and harder for some people to do. Before buying, think about:`,
      },
      {
        list: [
          `Hands: someone with stiff fingers or a tremor may struggle to squeeze a bottle and aim it. Our guide to [eye drops for older adults](/guides/eye-drops-for-older-adults) covers ways to make it easier.`,
          `Routine: three times a day is easiest for someone with a regular schedule or a reminder on their phone.`,
          `Help: if a spouse or caregiver will put the drops in, [how to put eye drops in someone else’s eyes](/guides/how-to-put-eye-drops-in-someone-elses-eyes) walks through it.`,
          `Hygiene: the label says {tip}. A person who will keep that in mind is a good fit for a multi-use bottle.`,
        ],
      },
      { h: 'Adults only, and one bottle per person' },
      {
        p: `This guide is about choosing for another adult. The label doesn’t give directions for children, so for a child, ask their pediatrician or eye doctor. And if you’re buying for two people in one house, buy two bottles. Sharing one bottle means two people’s eyes and fingers near the same tip, and our guide on [sharing eye drops](/guides/can-you-share-eye-drops) explains why that’s worth avoiding.`,
      },
      { h: 'Handing it over' },
      {
        p: `If they’re open to trying it, give them the box rather than just the bottle; the Drug Facts panel is printed on the carton, and they should read it before the first drop. Point out the storage line too: {storage}. Quell has a natural look worth mentioning so it doesn’t surprise them: {appearance} Everything on the carton is also on our [Drug Facts page](/drug-facts), which is easier to read on a phone or to print in large type.`,
      },
      { h: 'If they say no' },
      {
        p: `Some people don’t want drops, or want to talk to their own eye doctor first. That’s a reasonable answer. An unopened Quell bottle can be refunded within {returnDays} days of delivery, and you don’t need to send it back; see [refunds on unopened bottles](/guides/how-to-return-an-unopened-bottle) for how. If the bottle has been opened, it can’t be returned.`,
      },
      { h: 'What only their doctor can answer' },
      {
        p: `You can help choose a drop. You can’t check what’s behind someone’s symptoms, and neither can a label. Quell’s says: {stopUse} If the person you’re buying for has had dry eyes for a long time, has trouble seeing, or has eye pain, encourage a visit to an eye doctor, who can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'How do I pick eye drops for my parent?',
        a: `Ask what their eyes feel like and whether they wear contacts or use other drops. Then check that the label’s Uses line fits, read the warnings with them, and make sure they can manage the directions or have help.`,
      },
      {
        q: 'Can I buy eye drops for my partner without asking?',
        a: `You can, but asking first is better. They may wear contacts, already use another drop, or have an egg or bird allergy, and the label’s warnings apply to them, not you.`,
      },
      {
        q: 'What should I check on an eye drop label before giving it to someone?',
        a: `The Uses line, the warnings, and the directions. For Quell, the warnings read: {warnings}. Also check the storage line, so they keep the bottle where it belongs.`,
      },
    ],
  },

  {
    slug: 'should-i-rest-my-eyes-or-use-eye-drops',
    title: 'Should I rest my eyes or use eye drops?',
    description:
      'Rest and drops do different jobs. When a screen break helps most, when a lubricating drop fits, how to combine them, and when neither is enough.',
    category: 'choosing',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Often the answer is both, because they do different jobs. Resting your eyes, by looking away, closing them or stepping out of dry or moving air, deals with what’s drying them. A lubricating eye drop adds moisture to the eye’s surface, used as its label directs. Start with rest when screens or vents are the cause, add a drop if dryness lingers, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'What resting your eyes actually does' },
      {
        p: `The tear film, a thin layer of mucus, water and oil, covers the front of the eye and is refreshed with every blink. When you stare at a screen, read, drive or concentrate on close work, you blink less often and less completely, and the film has longer to thin between blinks. Dry, heated or air-conditioned air and moving air speed that up. Resting your eyes changes those conditions:`,
      },
      {
        list: [
          `Looking far away relaxes the focus you’ve been holding up close.`,
          `Closing your eyes for a few seconds covers the surface completely, so no evaporation happens while they’re shut.`,
          `Slow, full blinks spread a fresh layer of tears.`,
          `Moving away from a vent, fan or heater takes away the air that was pulling moisture off.`,
        ],
      },
      { h: 'What a lubricating drop does' },
      {
        p: `A lubricating drop adds moisture to the eye’s surface directly. Quell’s Uses line reads: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. The directions are: {directions}. A drop doesn’t change the conditions that were drying your eyes; if you go right back to the same screen under the same vent, those conditions keep working.`,
      },
      { h: 'When rest comes first' },
      {
        p: `Rest is the first thing to try when the dryness clearly follows an activity:`,
      },
      {
        list: [
          `Your eyes feel fine in the morning and gritty after a few hours at the computer.`,
          `They feel dry after a long drive with the heater on, and better once you’ve been out of the car for a while.`,
          `They bother you during a hobby that needs steady focus, like reading, sewing or gaming, and settle when you stop.`,
          `They feel dry when you sit in one spot at work, near a vent, and fine elsewhere.`,
        ],
      },
      {
        p: `In those cases, changing the pattern is the main fix. Our guide on [how often to take a break from screens](/guides/how-often-should-i-take-a-break-from-screens) gives a simple routine, and [can I blink more instead of using eye drops?](/guides/can-blinking-more-replace-eye-drops) covers the blink side.`,
      },
      { h: 'When a drop makes sense' },
      {
        p: `Some dryness doesn’t clear with a break, or comes from conditions you can’t step away from. A drop fits when:`,
      },
      {
        list: [
          `You’ve taken breaks and moved away from the vent, and your eyes still feel dry.`,
          `You’re in a situation where you can’t change the air, like a heated office in winter, a long flight or a job outdoors in the wind.`,
          `Your eyes feel dry at the start of a task, not just after hours of it.`,
        ],
      },
      { h: 'Using both together' },
      {
        p: `For a lot of people, the two go together. A sensible pattern for a workday at a screen might be:`,
      },
      {
        list: [
          `Set up the desk so vents and fans don’t blow across your face, and the screen sits a little below eye level.`,
          `Every 20 minutes or so, look across the room or out a window for a few seconds and blink slowly.`,
          `Once an hour, stand up and step away from the desk for a minute or two.`,
          `Use a drop at the times the label allows, spread across the day, rather than whenever you notice discomfort. Put it in during a break, and close your eyes for a moment afterward.`,
          `Before each use, follow the label: {tip}.`,
        ],
      },
      { h: 'What rest and drops can’t do' },
      {
        p: `Neither one is a fix for something that needs an eye doctor. If you’re resting your eyes and using drops as directed and things aren’t getting better, that’s useful information to bring to an appointment. The label says: {stopUse} An eye doctor can find the cause and decide what to do, and our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you judge how soon. If you wear contact lenses or use other drops, the label doesn’t cover that, so ask your eye doctor or pharmacist.`,
      },
      { h: 'A note on sleep' },
      {
        p: `Real rest includes sleep. Eyes are closed for hours, and the tear film has nothing to evaporate into. People often notice that their eyes feel drier on days after short nights, partly because they’re awake longer, often in front of screens, in heated or cooled air. You can’t make up for that with drops. It’s one more reason to look at the whole day rather than reaching for a bottle alone.`,
      },
    ],
    faq: [
      {
        q: 'Is it better to rest your eyes or use eye drops?',
        a: `They do different things. Resting your eyes changes what’s drying them, like a screen stare or a vent, while a lubricating drop adds moisture to the surface. Many people use both.`,
      },
      {
        q: 'Does closing your eyes help dry eyes?',
        a: `Closing your eyes for a few seconds covers the surface so the tear film isn’t evaporating, and slow, full blinks afterward spread fresh tears. It’s a simple break during screen work or reading.`,
      },
      {
        q: 'Can eye drops replace screen breaks?',
        a: `No. A drop adds moisture but doesn’t change the reduced blinking and dry air behind screen-related dryness. Breaks deal with the cause; a drop, used as the label directs, can go alongside them.`,
      },
    ],
  },

  /*
   * Site facts for can-i-order-eye-drops-for-an-elderly-neighbor, read 2026-11-24
   * (read-only): /terms §3 (18+, US only), §7 (unopened refunds, damaged
   * replacements, call with the order number); checkout fields and email
   * contents as described in will-the-gift-recipient-see-the-price (2026-11-21)
   * and can-i-order-eye-drops-on-a-weekend (2026-11-22).
   */
  {
    slug: 'can-i-order-eye-drops-for-an-elderly-neighbor',
    title: 'Can I order eye drops for an elderly neighbor?',
    description:
      'Yes. Pay with your own card, use your own email and put their name and address on the shipping label. What to check first, and how to hand it over.',
    category: 'ordering',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Yes. You can order Quell for a neighbor by checking out as a guest with your own email and card, and putting their name and address in the shipping fields. The confirmation and prices come to you; the box goes to them. Ask them first, check the label’s caution about egg or bird allergies, and plan how the package gets inside quickly. Buyers must be 18 or older, and orders ship within the US.`,
      },
      { h: 'Talk to your neighbor first' },
      {
        p: `A surprise box of eye drops can land well or awkwardly. Before ordering, have a short conversation. You’re not trying to find out what’s wrong with their eyes, just whether a lubricating drop is something they’d want and can use:`,
      },
      {
        list: [
          `Do your eyes feel dry or scratchy, and would you like to try a drop for it?`,
          `Are you already using any eye drops, from a doctor or the store? Using more than one kind isn’t covered by Quell’s label, so that’s a question for their eye doctor or pharmacist.`,
          `Do you wear contact lenses? The label doesn’t give directions for contacts either.`,
          `Are you allergic to eggs or birds? Quell’s warnings mention that.`,
          `Would you like me to have it sent to you, or should I bring it over?`,
        ],
      },
      { h: 'How to fill in checkout for someone else' },
      {
        p: `Quell’s checkout doesn’t need an account. It asks for an email, a shipping name and address, a phone number, and then your card on a secure payment page. For an order to a neighbor:`,
      },
      {
        list: [
          `Email: use yours. The confirmation, with the order number and the prices, goes to that address, and so does the shipping email with tracking.`,
          `Shipping name and address: theirs, exactly as their mail usually arrives, with any apartment or unit number on the second line.`,
          `Phone: a number that reaches someone at their address, since it travels with the delivery details. If they don’t answer unfamiliar calls, use yours.`,
          `Card and billing address: yours. Our guide on [shipping to an address other than your billing address](/guides/can-i-ship-to-a-different-address-than-billing) covers how that works.`,
        ],
      },
      {
        p: `Shipping is {shipping} per order, or free on {freeBottles} or more bottles. If you’re buying for yourself too, you might put your own bottles on a separate order to your own address, since one order ships to one address.`,
      },
      { h: 'Or ship it to yourself and walk it over' },
      {
        p: `For a neighbor next door or down the hall, the simplest route is often to ship the order to your own address. Then you can check the package when it arrives, carry it over, and read the carton with them. That also avoids a box sitting on their porch in the cold or heat, and it means the person who placed the order is the one holding it if anything is wrong.`,
      },
      { h: 'Getting the package inside' },
      {
        p: `If you ship directly to them, tell them it’s coming. Older neighbors may not open the door to unexpected deliveries, and a box from an unfamiliar shop can sit outside. The label gives a storage range: {storage}. A porch in winter or summer can go outside it. Forward the shipping email or text them the tracking number so they know when to look. [What if no one is home when eye drops arrive?](/guides/what-if-no-one-is-home-when-eye-drops-arrive) has more ideas.`,
      },
      { h: 'Going over the label together' },
      {
        p: `The Drug Facts panel is printed on the carton. Some people find the print small, and a neighbor who lives alone may appreciate someone reading it through with them. The key lines:`,
      },
      {
        list: [
          `Uses: {uses}.`,
          `Directions: {directions}.`,
          `Warnings: {warnings}.`,
          `Before each use: {tip}.`,
          `{doNotUse}, as the label puts it.`,
        ],
      },
      {
        p: `The same panel is on our [Drug Facts page](/drug-facts), which can be zoomed or printed in large type. Point out the label’s description, “{milky},” so the color doesn’t surprise them.`,
      },
      { h: 'If something goes wrong' },
      {
        p: `Because the order is in your name and email, you’re the one to call. Under our [terms](/terms), an unopened bottle can be refunded within {returnDays} days of delivery, without sending it back; the refund covers the product price, not the original shipping. An order that arrives damaged, incorrect or with a broken tamper seal is replaced at no charge within the same {returnDays} days. Call {phone} ({hours}) with your order number.`,
      },
      { h: 'Reordering later' },
      {
        p: `There’s no subscription. The shop sends one reorder reminder email, and it goes to the email on the order, which is yours. If your neighbor likes the drops and wants more, you can place another order the same way, or help them order for themselves if they’re comfortable online. Our guide to [ordering for a parent without email](/guides/ordering-eye-drops-for-a-parent-without-email) covers the same situation for family.`,
      },
      { h: 'What you can’t do for them' },
      {
        p: `You can help someone get a drop. You can’t tell what’s behind their symptoms. The label says: {stopUse} If your neighbor mentions eye pain, trouble seeing, or dryness that won’t go away, encourage them to see an eye doctor, who can find the cause and decide what to do, and offer a ride if that’s the hard part.`,
      },
    ],
    faq: [
      {
        q: 'Can I buy eye drops online and have them sent to my neighbor?',
        a: `Yes. Check out as a guest with your own email and card, and enter your neighbor’s name and address as the shipping address. The confirmation and prices come to you.`,
      },
      {
        q: 'Whose phone number should I use when ordering for a neighbor?',
        a: `A number that reaches someone at the delivery address, since it travels with the delivery details. If your neighbor doesn’t answer unfamiliar calls, use your own.`,
      },
      {
        q: 'Who calls about a problem with an order I placed for someone else?',
        a: `You do, because the order number and email are yours. Call {phone} during {hours} with the order number for a refund on an unopened bottle or a replacement for a damaged one.`,
      },
    ],
  },

  {
    slug: 'can-i-order-eye-drops-for-my-adult-child',
    title: 'Can I order eye drops for my adult child?',
    description:
      'Yes, to any US address, from a first apartment to a work dorm. How to fill in checkout, who gets the emails, and what to ask before you send it.',
    category: 'ordering',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Yes. A parent can order Quell for a grown son or daughter by checking out as a guest with the parent’s email and card and the child’s name and address in the shipping fields, anywhere in the United States. The confirmation and prices go to you; the shipping email with tracking is the one to forward. Ask first whether they wear contacts or use other drops, since the label doesn’t cover either.`,
      },
      { h: 'Why parents end up ordering' },
      {
        p: `Grown children move into first apartments, start jobs with long screen hours, work night shifts or spend winters in heated studio apartments, and they mention dry eyes on a phone call more often than they buy anything for it. Ordering a bottle for them is a small, practical kind of help. It’s also easy to do in a way that respects that they’re an adult: ask, send it, and let them take it from there.`,
      },
      { h: 'Ask a few questions first' },
      {
        list: [
          `Do you wear contact lenses? Many young adults do, and Quell’s label gives no directions for contacts. That’s a question for their eye doctor.`,
          `Do you use any other eye drops? Using two kinds together isn’t covered by the label either.`,
          `Any egg or bird allergy? The label’s warnings read: {warnings}.`,
          `What’s your exact mailing address? Apartments and shared houses often need a unit number, and a building may have its own package room.`,
        ],
      },
      { h: 'Filling in checkout' },
      {
        list: [
          `Email: yours, if you’re paying. The confirmation with prices goes to that address.`,
          `Shipping name: theirs, as it appears on their mailbox or with their building’s front desk.`,
          `Address: their street address, with the apartment or unit number on the second line. Our guide to [eye drop delivery to an apartment](/guides/eye-drops-delivered-to-an-apartment) has tips for buildings.`,
          `Phone: theirs, so the delivery details reach someone at that address.`,
          `Payment: your card, with your own billing address on the secure payment page.`,
        ],
      },
      {
        p: `There’s no gift-message box at checkout, so a text letting them know it’s on the way does that job. When the shipping email arrives, forward it, since it has the tracking number but no prices.`,
      },
      { h: 'Where we can ship' },
      {
        p: `Quell ships from Brentwood, Tennessee, to addresses in the United States only. That covers a first apartment across the country, a work address or a shared house, as long as it’s in the US. It doesn’t cover an adult child working or studying abroad; [does Quell ship outside the United States?](/guides/does-quell-ship-outside-the-us) explains. Shipping is {shipping} per order, or free on {freeBottles} or more bottles, and we don’t promise a delivery date.`,
      },
      { h: 'Letting them reorder on their own' },
      {
        p: `If they like it, they may want to order their own next time. Anyone 18 or older can buy from the site, and there’s no account to set up. There’s no subscription, and the one reorder reminder email goes to whichever email placed the order. If you’d rather keep buying for them, that reminder will come to you.`,
      },
      {
        p: `Some parents ask about paying with a health savings account. Whether an HSA can pay for a grown child’s purchase depends on IRS rules about dependents and on your plan. Our guide to [using your HSA for an adult child’s eye drops](/guides/can-i-use-my-hsa-for-my-adult-childs-eye-drops) covers what applies, and your plan administrator has the final word.`,
      },
      { h: 'What to tell them about the label' },
      {
        p: `They’ll find the Drug Facts panel on the carton, and it’s also on our [Drug Facts page](/drug-facts). The parts worth pointing out:`,
      },
      {
        list: [
          `Uses: {uses}.`,
          `Directions: {directions}.`,
          `Before each use: {tip}.`,
          `Storage: {storage}. A car dashboard or a sunny window ledge in a studio apartment won’t fit.`,
          `What it looks like: {appearance}`,
        ],
      },
      { h: 'If they don’t want it, or it arrives damaged' },
      {
        p: `Because you placed the order, you’re the one to call. An unopened bottle can be refunded within {returnDays} days of delivery, and nobody needs to mail it back. A damaged, incorrect or broken-seal order is replaced at no charge within the same window. Call {phone} ({hours}) with the order number.`,
      },
      { h: 'When it’s more than dry eyes' },
      {
        p: `Grown children don’t always see a doctor when they should. The label says: {stopUse} If your son or daughter mentions eye pain, blurry vision that doesn’t clear, or dryness that won’t go away, nudge them toward an eye doctor, who can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'Can I send eye drops to my son’s apartment?',
        a: `Yes, if it’s in the US. Enter his name and street address in the shipping fields, with the unit number on the second line, and use your own email and card. Forward the shipping email so he can track it.`,
      },
      {
        q: 'Can my adult daughter order her own Quell?',
        a: `Yes. Anyone 18 or older with a US address can check out as a guest, with no account. If she places the order, the confirmation and reorder reminder go to her email instead of yours.`,
      },
      {
        q: 'Can I ship eye drops to my child who lives overseas?',
        a: `No. Quell ships only to addresses in the United States. If they’ll be home for the holidays, you can send it to the US address where they’ll be staying.`,
      },
    ],
  },

  {
    slug: 'does-quell-ship-over-thanksgiving-weekend',
    title: 'Does Quell ship over Thanksgiving weekend?',
    description:
      'Orders go through all weekend, and each is packed by hand in Brentwood, Tennessee. What we can and can’t tell you about holiday shipping and tracking.',
    category: 'shipping',
    addedOn: '2026-11-24',
    body: [
      {
        p: `You can place a Quell order at any time over Thanksgiving weekend, and it will ship, but we don’t publish a holiday shipping schedule or promise ship or delivery dates. Orders are picked and packed by hand at our office in Brentwood, Tennessee, and you get a shipping email with tracking when yours leaves. If you need a bottle by a certain day, order well ahead and send it where someone will be.`,
      },
      { h: 'The dates this year' },
      {
        p: `Thanksgiving falls on Thursday, November 26, 2026. Black Friday is November 27, the weekend follows, and Cyber Monday is November 30. The checkout is online and stays open through all of it. There are no promo codes on the site and no holiday pricing, so there’s no reason to wait for a particular day to order.`,
      },
      { h: 'What happens to an order placed over the holiday' },
      {
        list: [
          `You check out as a guest and your card is charged when you submit the order.`,
          `A confirmation email arrives with the order number, what you ordered and the shipping address.`,
          `The order shows as Paid while it waits to be packed. On a holiday weekend, it may stay at Paid longer than on an ordinary week.`,
          `When it’s packed and handed off, the status changes to Shipped and a second email arrives with tracking when a number is available.`,
        ],
      },
      {
        p: `You can check the status any day on the [track your order](/orders) page with your order number and email. [What your Quell order status means](/guides/what-your-order-status-means) explains each step.`,
      },
      { h: 'Why we don’t give a ship date' },
      {
        p: `Orders aren’t run through a warehouse system with fixed cutoffs; people pack them. That means we can’t honestly promise that an order placed Wednesday night will leave on Friday, or that one placed Saturday will leave Monday. Carriers also run their own holiday schedules, which we don’t control. Rather than guess, the site tells you when a package has left and lets the tracking take it from there. [How long does Quell take to arrive?](/guides/how-long-does-delivery-take) goes into this.`,
      },
      { h: 'If you’ll be away for the holiday' },
      {
        p: `Thanksgiving is a travel weekend, and a package that arrives while you’re gone can sit on a cold porch or in a mailbox. A few options:`,
      },
      {
        list: [
          `Ship to where you’ll be. You can enter a relative’s address in the shipping fields; [shipping Quell to a holiday address](/guides/shipping-to-a-holiday-address) covers this.`,
          `Ask a neighbor to bring in packages while you’re away, and send them the tracking link.`,
          `Don’t ship to an office that’s closed Thursday and Friday; [shipping to an office closed for the holidays](/guides/shipping-eye-drops-to-an-office-closed-for-holidays) explains why that can backfire.`,
          `If you’re traveling with drops you already have, our guide on [packing or shipping eye drops for holiday travel](/guides/pack-or-ship-eye-drops-for-holiday-travel) compares the two.`,
        ],
      },
      { h: 'Cold weather in transit' },
      {
        p: `Late November can be cold across much of the country. The label’s storage line reads: {storage}. A package sitting outside on a freezing evening, or in a delivery vehicle, may go below that. Bring it inside soon after delivery and let it reach room temperature. Before using a bottle that may have gotten very cold, look at it. The label says: {doNotUse}, and it describes the normal look: {milky}.`,
      },
      { h: 'Reaching us over the holiday' },
      {
        p: `Our phone line is staffed {hours}. The site doesn’t list special holiday hours, so if a call on Thanksgiving or the day after goes unanswered, try again the next weekday at {phone}, with your order number ready. If you spot a typo in the address after ordering, call as soon as the line is open; the earlier we hear about it, the better the chance of catching it before the order is packed. Contact details are also on the [About page](/about#contact).`,
      },
      { h: 'Sending bottles to several people at once' },
      {
        p: `Thanksgiving weekend is when a lot of people start their Christmas lists. Each order ships to one address, so if you’re sending bottles to a sister in one state and a parent in another, place a separate order for each. Shipping is {shipping} per order, or free on {freeBottles} or more bottles in a single order. That means three bottles going to one household ship free, while one bottle each to three households is charged shipping three times. If some of the bottles are for people you’ll see at Christmas, it can make sense to ship them all to yourself in one order and hand them out in person.`,
      },
      { h: 'What arrives in the box' },
      {
        p: `Each bottle holds {size}, in its carton with the Drug Facts panel printed on it. The label’s directions are: {directions}. Check the tamper seal and the bottle when you open the package. An order that arrives damaged, incorrect or with a broken seal is replaced at no charge if you contact us within {returnDays} days.`,
      },
    ],
    faq: [
      {
        q: 'Will my Quell order ship on Black Friday?',
        a: `We don’t promise a ship day for any order, holiday or not. Orders are packed by hand at the Brentwood office, and you get a shipping email with tracking when yours leaves.`,
      },
      {
        q: 'Can I order eye drops on Thanksgiving Day?',
        a: `Yes. Checkout is online and open on Thanksgiving, November 26, 2026, and every other day. A confirmation email follows as soon as payment goes through.`,
      },
      {
        q: 'Should I ship eye drops to my house if I’m away for Thanksgiving?',
        a: `It’s safer to ship to where someone will be, such as the relative you’re visiting, or to ask a neighbor to bring packages in. A box left outside can get colder than the label’s storage range.`,
      },
    ],
  },

  /*
   * Site facts for what-if-a-gift-i-sent-arrives-damaged, read 2026-11-24
   * (read-only): /terms §7 "Damaged or incorrect orders. If your order arrives
   * damaged, incorrect, or with a broken tamper seal, contact us within 30 days
   * and we will replace it at no charge. For a refund or a replacement, call
   * {phone} ({hours}) with your order number." No photo requirement stated
   * anywhere; photos described as helpful, not required, in existing guides.
   */
  {
    slug: 'what-if-a-gift-i-sent-arrives-damaged',
    title: 'What if a gift I sent arrives damaged?',
    description:
      'If eye drops you sent as a gift arrive crushed, leaking or with a broken seal, the order is replaced at no charge within {returnDays} days. Who calls, and how.',
    category: 'returns',
    addedOn: '2026-11-24',
    body: [
      {
        p: `If a Quell order you sent as a gift arrives damaged, incorrect or with a broken tamper seal, it’s replaced at no charge as long as we hear about it within {returnDays} days of delivery. Because the order is in your name, you make the call: {phone}, {hours}, with your order number. Ask the recipient to set the bottle aside unused and tell you exactly what they see.`,
      },
      { h: 'Why the buyer makes the call' },
      {
        p: `When you send a gift, the order number, the confirmation email and the card are all yours. The person who received the box usually has none of that, only their name on a shipping label. So the simplest path is for them to tell you what’s wrong and for you to contact us. If they’d rather call directly, they’ll need the order number from you; without it, we have no easy way to find the order.`,
      },
      { h: 'What to ask the recipient' },
      {
        p: `A short message or call gets you what you need. Ask them:`,
      },
      {
        list: [
          `What’s damaged: the outer shipping box, the carton inside, or the bottle itself?`,
          `Is the bottle cracked, leaking, or sticky on the outside?`,
          `Is the tamper seal intact, or is it torn or missing?`,
          `Is it the right product and the right number of bottles?`,
          `Could they take a photo before throwing any packaging away? It isn’t required, but it makes the problem easy to describe.`,
        ],
      },
      { h: 'Ask them not to use it' },
      {
        p: `A cracked or leaking bottle, or one with a broken seal, shouldn’t be used, even if the drops inside look fine. The label’s handling line, {tip}, is about keeping the liquid clean, and a damaged bottle can’t be counted on to have stayed that way. A replacement costs nothing, so there’s no reason to take the chance. If only the outer box is crushed and the carton, bottle and seal look intact, [box arrived crushed but the bottles look fine?](/guides/box-arrived-crushed-but-bottles-look-fine) walks through what to check.`,
      },
      { h: 'Making the call' },
      {
        list: [
          `Find the order number in your confirmation email.`,
          `Call {phone} during {hours}.`,
          `Explain that it was sent as a gift, describe what the recipient found, and mention any photos.`,
          `Ask where the replacement will be sent, and confirm the recipient’s address if that’s where it should go.`,
        ],
      },
      {
        p: `Our [terms](/terms) set the window: {returnDays} days for damaged, incorrect or broken-seal orders. Don’t wait until after the holidays to sort it out if the gift arrived in early December; the clock runs from delivery.`,
      },
      { h: 'When it’s not damage' },
      {
        p: `Some things look wrong but aren’t. Quell is supposed to look like this: {milky}. A recipient seeing it for the first time may think it’s spoiled. The site puts it this way: {appearance} If the color looks different from that description, though, the label says: {doNotUse}. That case is worth a call too.`,
      },
      {
        p: `If the issue is that they simply don’t want it, that’s a refund question rather than a damage one. An unopened bottle can be refunded within {returnDays} days of delivery without being sent back. [What if they don’t want the gift?](/guides/if-a-gift-of-quell-is-not-wanted) covers that path.`,
      },
      { h: 'If it never arrived' },
      {
        p: `A box that shows as delivered but isn’t there is a different problem from a box that arrived damaged. Check the tracking in your shipping email first, then ask the recipient to look around the building and with neighbors. Our guide on [tracking that says delivered but no package](/guides/tracking-says-delivered-but-no-parcel) has the steps, and you can call {phone} with the order number if it doesn’t turn up.`,
      },
      { h: 'Keep the packaging until it’s settled' },
      {
        p: `Ask the recipient to hold on to the shipping box, the carton and the bottle until the replacement is arranged, even if they’ve taken photos. The carton carries the Drug Facts panel, which can help describe exactly what arrived. Once the replacement is on its way, a damaged bottle can be thrown out; it shouldn’t be used or passed on to someone else. Our guide on [whether to keep the box your eye drops came in](/guides/should-you-keep-the-box-your-eye-drops-came-in) explains why the carton is worth keeping in general.`,
      },
      { h: 'Heading it off next time' },
      {
        list: [
          `Text the recipient when the shipping email arrives so they bring the box in promptly.`,
          `In very hot or cold weather, ship to an address where someone is home or a front desk receives packages. The label’s storage line reads {storage}.`,
          `For someone you’ll see in person, ship it to yourself, check it, and hand it over.`,
        ],
      },
    ],
    faq: [
      {
        q: 'Who should call if a gift of eye drops arrives broken?',
        a: `Usually the person who ordered it, because they have the order number and the confirmation email. Call {phone} during {hours} and explain what the recipient found.`,
      },
      {
        q: 'Will Quell replace a damaged gift order?',
        a: `Yes. Under our terms, an order that arrives damaged, incorrect or with a broken tamper seal is replaced at no charge if you contact us within {returnDays} days of delivery.`,
      },
      {
        q: 'Should the gift recipient use a bottle with a broken seal?',
        a: `No. Set it aside unused and let the buyer know. A broken-seal order is replaced at no charge, so there’s no reason to risk using a bottle that may not have stayed clean.`,
      },
    ],
  },

  {
    slug: 'is-quell-oil-free',
    title: 'Is Quell oil-free?',
    description:
      'No. Quell’s label lists two oils: light mineral oil as an active ingredient and emu oil as an inactive one. Why they’re there, and who should ask first.',
    category: 'formula',
    addedOn: '2026-11-24',
    body: [
      {
        p: `No, Quell is not oil-free. Its Drug Facts panel lists light mineral oil among the three active ingredients, with the purpose “Emollient,” and emu oil among the inactive ingredients. The oils are there on purpose: Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. If you’ve been told to avoid oil near your eyes, ask your eye doctor before using it.`,
      },
      { h: 'The oils on the label' },
      {
        p: `Every ingredient in Quell is printed on the carton. The active ingredients, the ones that do the labeled job, are: {actives}. The panel gives glycerol and polysorbate 80 the purpose “Lubricant,” and light mineral oil the purpose “Emollient.” The inactive ingredients are: {inactives}.`,
      },
      {
        p: `Two of those names are oils by name: {mineralOil} in the active list and Emu Oil in the inactive list. A few other inactives, such as glyceryl laurate, are related to fats chemically, but the label doesn’t call them oils, and this page doesn’t either. Our guides to [light mineral oil in eye drops](/guides/light-mineral-oil-in-eye-drops) and [emu oil in eye drops](/guides/emu-oil-in-eye-drops) cover each one.`,
      },
      { h: 'Why a dry eye drop would contain oil' },
      {
        p: `It can seem backward. If your eyes are dry, why add oil? The answer is in how the tear film is built. It has three layers: a mucus layer against the eye, a watery layer in the middle, and a thin oily layer on the outside. That outer oil layer slows evaporation of the water beneath it. When the oil layer is thin, the water evaporates faster, and dry, heated or windy air speeds that up.`,
      },
      {
        p: `That’s the job Quell is built around. The carton’s emu oil panel puts it this way: {emuOil} A drop that is entirely water-based adds moisture; one with oil in it is also aimed at the layer that holds moisture in.`,
      },
      { h: 'Why some people look for oil-free drops' },
      {
        p: `People search for oil-free eye drops for a few common reasons. None of them means an oil-containing drop is wrong for everyone, but each is worth thinking about:`,
      },
      {
        list: [
          `They’ve been told by a lash technician or an eye doctor to keep oil away from their eyes. Follow the advice of whoever gave it, and ask them about Quell specifically before using it.`,
          `They wear contact lenses. Quell’s label doesn’t give directions for contact lenses, so that’s a question for an eye doctor no matter what the drop contains.`,
          `They don’t like the feel. An oil-containing drop can feel different from a watery one. Our guide on [whether it’s normal for eye drops to feel oily](/guides/is-it-normal-for-eye-drops-to-feel-oily) covers what people describe.`,
          `They’ve noticed brief blurriness after putting in a drop and want to avoid it. If that happens with any drop, wait for it to clear before driving or doing close work.`,
        ],
      },
      { h: 'What the oil means for how Quell looks' },
      {
        p: `Oil and water don’t mix on their own, so a drop that contains both looks different from a clear, water-only drop. Quell’s label describes it in its Other information section: {milky}. The site adds: {appearance} The label also says: {doNotUse}. So the milky look is expected, but a change from it isn’t.`,
      },
      { h: 'Oil and the egg or bird caution' },
      {
        p: `Emu oil comes from the emu, a bird, and the label’s warnings reflect that: {warnings}. If you have an egg or bird allergy, talk to a doctor or pharmacist before trying Quell. Our guide on [egg or bird allergies and Quell](/guides/egg-or-bird-allergy-and-quell) covers this in more detail.`,
      },
      { h: 'Using an oil-containing drop' },
      {
        list: [
          `Directions: {directions}.`,
          `Before each use: {tip}.`,
          `Storage: {storage}.`,
          `Give your vision a moment to settle after a drop before driving or reading fine print.`,
        ],
      },
      { h: 'If oil-free is what you need' },
      {
        p: `If your eye doctor or lash technician has told you to use only oil-free drops, Quell isn’t the one for you, and a pharmacist can point you to options without oil. If you’re just curious, the full panel is on the [Drug Facts page](/drug-facts). And if your eyes keep feeling dry whatever you use, see an eye doctor; the label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Does Quell have oil in it?',
        a: `Yes. Its active ingredients include light mineral oil, labeled as an emollient, and its inactive ingredients include emu oil. Both relate to Quell’s design around the tear film’s oil layer.`,
      },
      {
        q: 'Why do some eye drops contain oil?',
        a: `The tear film’s outer layer is oily, and it slows evaporation of the watery layer underneath. Drops with oil in them are aimed at that outer layer as well as adding moisture.`,
      },
      {
        q: 'Should I use oil-free eye drops with eyelash extensions?',
        a: `Ask your lash technician and your eye doctor. Quell contains light mineral oil and emu oil, so if you’ve been told to keep oil away from your lashes, check with them before using it.`,
      },
    ],
  },

  {
    slug: 'is-there-an-antihistamine-in-quell',
    title: 'Is there an antihistamine in Quell?',
    description:
      'No. Quell’s active ingredients are two lubricants and an emollient. What that means if your eyes itch, and who to ask about other kinds of drops.',
    category: 'formula',
    addedOn: '2026-11-24',
    body: [
      {
        p: `No. Quell’s Drug Facts panel lists three active ingredients, {actives}, and none is an antihistamine. The panel gives two of them the purpose “Lubricant” and one the purpose “Emollient.” Quell is a lubricating drop, labeled to relieve dryness and protect against further irritation. If itching is your main problem, ask a pharmacist or eye doctor what fits, rather than expecting a lubricant to do that job.`,
      },
      { h: 'Reading the active ingredients' },
      {
        p: `On any over-the-counter drug, the active ingredients box tells you what the product is meant to do, ingredient by ingredient. Each active is listed with its strength and its purpose. For Quell, the panel reads:`,
      },
      {
        list: [
          `{glycerol}, purpose: Lubricant.`,
          `{polysorbate}, purpose: Lubricant.`,
          `{mineralOil}, purpose: Emollient.`,
        ],
      },
      {
        p: `An antihistamine would appear in that box with a purpose like “Antihistamine.” None does. The inactive ingredients are listed separately: {inactives}. Inactive ingredients support the formula; they aren’t the ones the label assigns a purpose to.`,
      },
      { h: 'Lubricant and emollient, in plain words' },
      {
        p: `The two purpose words on Quell’s panel describe physical jobs rather than effects on the body’s chemistry. A lubricant makes the eye’s surface slick and moist, so the lids glide over it more easily when you blink. An emollient softens and coats; in an eye drop, it’s the oily part that sits with the tear film’s outer layer. Neither word describes blocking the body’s response to pollen, dust or pet dander, which is the kind of job people usually mean when they ask about antihistamines. Our guide to [lubricant vs. emollient eye drops](/guides/lubricant-vs-emollient-eye-drops) explains both terms in more depth.`,
      },
      { h: 'What Quell is labeled for' },
      {
        p: `The Uses line is the label’s statement of what the product is for. Quell’s reads: {uses}. That’s dryness and irritation. It doesn’t mention itching, and it doesn’t claim to act on anything beyond the surface moisture of the eye. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss.`,
      },
      { h: 'Why people ask' },
      {
        p: `Dry eyes and itchy eyes can feel alike, and many people aren’t sure which they have. Shelves also carry many kinds of eye drops side by side, and some are made for itching while others are made for dryness. It’s reasonable to want to know which kind you’re holding before you buy. Our guide to [eye drops for itchy eyes](/guides/eye-drops-for-itchy-eyes) goes further into the difference.`,
      },
      { h: 'How to tell what any eye drop contains' },
      {
        p: `You don’t need to know drug names to sort drops. Check two places on the box:`,
      },
      {
        list: [
          `The Active ingredients box, with each ingredient’s Purpose. The purpose word tells you its job: lubricant, emollient, antihistamine and so on.`,
          `The Uses line, which says in plain terms what symptoms the product is for.`,
        ],
      },
      {
        p: `Our guide on [how to read an eye drop Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label) walks through the rest of the panel.`,
      },
      { h: 'Using Quell alongside other drops' },
      {
        p: `Some people already use a drop for itching and want to add one for dryness, or the other way around. Quell’s label doesn’t give directions for using it with other eye drops, so that’s a question for your pharmacist or eye doctor, who can tell you whether and how to combine them. The same goes for any medicine you take by mouth for itching or sneezing: the label doesn’t address it, and a pharmacist can.`,
      },
      { h: 'The warnings, which are about allergies of a different kind' },
      {
        p: `Quell’s label does mention allergies, but not as something it relieves. The warnings read: {warnings}. That caution is about the product itself: one of its inactive ingredients is emu oil, from a bird. If you have an egg or bird allergy, talk to a doctor or pharmacist before using it.`,
      },
      { h: 'When itching or irritation needs a doctor' },
      {
        p: `Itching that comes with swelling, discharge, pain or a change in vision isn’t something to sort out with an over-the-counter drop. Quell’s label says: {stopUse} An eye doctor can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the signs.`,
      },
      { h: 'If dryness is the problem' },
      {
        p: `If your eyes feel dry, scratchy or tired from screens, heating or wind, that’s what a lubricating drop is for. The directions are: {directions}. Before each use: {tip}. The whole panel is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Does Quell contain an antihistamine?',
        a: `No. Its active ingredients are glycerol and polysorbate 80, both labeled as lubricants, and light mineral oil, labeled as an emollient. No antihistamine appears on the panel.`,
      },
      {
        q: 'How do I know if eye drops have an antihistamine in them?',
        a: `Look at the Active ingredients box on the Drug Facts panel. Each ingredient is listed with its purpose, and an antihistamine would be labeled with that purpose.`,
      },
      {
        q: 'Can I use Quell with eye drops for itching?',
        a: `Quell’s label doesn’t give directions for use with other eye drops. Ask your pharmacist or eye doctor whether and how to combine them.`,
      },
    ],
  },

  {
    slug: 'going-over-an-eye-drop-label-with-an-aging-parent',
    title: 'Going over an eye drop label with an aging parent',
    description:
      'A practical way to read a Drug Facts panel with an older parent: which lines matter most, what to write down, and what to take to a pharmacist.',
    category: 'label',
    addedOn: '2026-11-24',
    body: [
      {
        p: `To go over an eye drop label with an aging parent, sit down together with the carton and a large-print copy, and read the Drug Facts panel in order: what it’s for, the warnings, the directions, when to stop, and how to store it. Write the directions and the stop-use signs on a card they can keep. Questions about other medicines, other drops or contact lenses go to their pharmacist or eye doctor.`,
      },
      { h: 'Why it helps to read it together' },
      {
        p: `Drug Facts panels are dense. The type is small, the sections run close together, and the most important lines can be easy to skim past. An older parent may have read hundreds of labels over the years and still miss a warning that matters, especially on a product that’s new to them. Reading it with them isn’t taking over; it’s a second pair of eyes on a small box.`,
      },
      { h: 'Before you start' },
      {
        list: [
          `Get the carton, not just the bottle. The Drug Facts panel is printed on the carton.`,
          `Pull up the same panel on our [Drug Facts page](/drug-facts) and zoom in, or print it in large type.`,
          `Sit somewhere with good light, and bring their reading glasses.`,
          `Have a pen and an index card ready.`,
        ],
      },
      {
        p: `If the print is the main obstacle, our guide on [what to do when an eye drop label is too small to read](/guides/eye-drop-label-too-small-to-read) has more ideas.`,
      },
      { h: 'Read it in order' },
      {
        p: `The panel follows the same order on every over-the-counter drug. Here’s Quell’s, section by section, with what to talk about at each step:`,
      },
      {
        list: [
          `Active ingredients: {actives}. These do the labeled job.`,
          `Uses: {uses}. Ask: is this what your eyes feel like?`,
          `Warnings: {warnings}. Ask about egg or bird allergies, and make sure they understand the drops go only in the eyes.`,
          `Do not use: {doNotUse}. Show them the normal look first, so they’ll notice a change.`,
          `When using this product: {tip}.`,
          `Stop use and ask a doctor: {stopUse}`,
          `The keep-out-of-reach section: {swallowed}.`,
          `Directions: {directions}.`,
          `Other information: {milky}. {storage}.`,
          `Inactive ingredients: {inactives}.`,
        ],
      },
      { h: 'The three lines worth writing down' },
      {
        p: `A whole panel is too much to remember. Three things are worth putting on an index card in large letters, to keep with the bottle or on the fridge:`,
      },
      {
        list: [
          `How to use it: the directions line, word for word.`,
          `How to handle it: don’t touch the tip to anything.`,
          `When to stop and call: the stop-use signs from the label, plus the eye doctor’s phone number.`,
        ],
      },
      { h: 'Questions for the pharmacist' },
      {
        p: `Some questions aren’t answered on any eye drop label, and an older adult is more likely to have them. Bring the carton and their medication list to a pharmacist and ask:`,
      },
      {
        list: [
          `Is it fine to use this alongside the eye drops my doctor prescribed? Quell’s label doesn’t cover use with other drops.`,
          `How far apart should I space it from my other eye drops, if at all?`,
          `I wear contact lenses. Can I use it? The label doesn’t give directions for contacts.`,
          `Does anything else I take make a difference?`,
        ],
      },
      {
        p: `Our list of [questions to ask a pharmacist about eye drops](/guides/questions-to-ask-your-pharmacist) has more.`,
      },
      { h: 'Practicing the first drop' },
      {
        p: `Reading the directions is the easy part; doing it is harder with stiff fingers or a shaky hand. Watch them put in the first drop, or offer to help if they ask. Our guide on [eye drops for older adults](/guides/eye-drops-for-older-adults) covers ways to make it easier, such as lying back or resting the hand that holds the bottle against the forehead.`,
      },
      { h: 'Storage and the box' },
      {
        p: `The storage line matters more than people expect: {storage}. A bathroom near a hot shower, a windowsill in summer, or a car in winter can go outside that. Suggest a drawer or cabinet in a room with a steady temperature. Keep the carton too, since it’s where the panel is printed; our guide on [whether to keep the box](/guides/should-you-keep-the-box-your-eye-drops-came-in) explains.`,
      },
      { h: 'If something in the label worries you' },
      {
        p: `If your parent describes pain, a change in vision, or dryness that hasn’t eased over time, the label points to a doctor, and so should you. An eye doctor can find the cause and decide what to do. For questions about the product itself, you can call us at {phone} ({hours}).`,
      },
    ],
    faq: [
      {
        q: 'How do I help my elderly parent read medicine labels?',
        a: `Sit together with the carton in good light, open a large-print copy on a screen or paper, and read each section in order. Write the directions and the stop-use signs on a card they can keep with the bottle.`,
      },
      {
        q: 'What part of an eye drop label is most important for older adults?',
        a: `The warnings, the directions and the stop-use section. For Quell, the warnings read: {warnings}. The directions read: {directions}.`,
      },
      {
        q: 'Can my parent use Quell with their prescription eye drops?',
        a: `Quell’s label doesn’t give directions for use with other eye drops. Take the carton and their medication list to a pharmacist or their eye doctor and ask before combining them.`,
      },
    ],
  },
]
