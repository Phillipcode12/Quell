import type { Guide } from '@/lib/guide-types'
export const DAILY_20261117_A: Guide[] = [
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-montgomery-al:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013895.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013895.csv
   *   (MONTGOMERY AP, elev 61.6 m: annual precip 51.16 in; Mar 5.21 wettest, Jul 5.06;
   *   Oct 2.87 driest; Jul high 93.7 F, Aug 93.6 F; Jan high 59.8 F, low 36.5 F;
   *   92.7 days at or above 90 F; 3.7 days at or above 100 F; 37.0 nights at or below 32 F;
   *   no snowfall normal published)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (MONTGOMERY, AL, WBAN 13895: Apr 87/51, Oct 89/51, Mar 83/52, Jul 90/58,
   *   Aug 91/56, annual 87/55, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (MONTGOMERY annual 2.6, below Birmingham 2.7, Huntsville 3.2, Mobile 3.3;
   *   Feb and Mar 3.2 highest, Jul and Aug 2.1 lowest)
   * Elevation is the NOAA station elevation, converted (61.6 m is about 200 ft).
   */
  {
    slug: 'dry-eye-relief-montgomery-al',
    title: 'Dry eye relief in Montgomery, Alabama',
    description:
      'Montgomery is humid, yet eyes still dry out: about 93 days a year top 90°F, so AC runs for months. What NOAA’s numbers mean for daily dry eye relief.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `In Montgomery, dry eyes usually come from indoor air rather than the weather. NOAA’s normals give the city about 93 days a year at 90°F or hotter, so air conditioning runs from late spring into fall, and heat pumps take over in winter. Aim vents away from your face, blink fully at screens, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Montgomery’s climate in NOAA’s numbers' },
      {
        p: `NOAA’s 1991 to 2020 climate normals for Montgomery Regional Airport (Dannelly Field), which sits southwest of downtown at about 200 feet above sea level, describe a warm, wet city with a long cooling season:`,
      },
      {
        list: [
          `About 51.16 inches of precipitation in a normal year, spread across every month.`,
          `March is the wettest month at 5.21 inches, with July close behind at 5.06; October is the driest at 2.87.`,
          `July highs average 93.7°F and August highs 93.6°F.`,
          `About 93 days a year reach 90°F, and roughly 4 reach 100°F.`,
          `January highs average 59.8°F, and about 37 nights a year fall to freezing or below.`,
        ],
      },
      {
        p: `Those figures don’t look like a recipe for dry eyes. The air outdoors is heavy with moisture much of the year. The trouble is that Montgomery residents spend most of the hot months indoors, in cars and in offices where a compressor is pulling water out of the air to keep it cool.`,
      },
      { h: 'Why do my eyes feel dry in a humid city?' },
      {
        p: `NOAA’s humidity table for the Montgomery airport shows morning readings near 90 percent through the summer, with afternoons around 56 to 58 percent. That outdoor air is not what reaches your eyes at a desk downtown or in a classroom at Alabama State. Air conditioning cools and dries the air it moves, and a vent blowing across your face speeds evaporation from the tear film’s watery layer even when the room feels comfortable.`,
      },
      {
        p: `The tear film has three layers: an oily outer layer, a watery middle and a mucus layer against the eye. When the oil layer can’t slow evaporation enough, the watery layer thins between blinks and the surface starts to feel scratchy. Our guide to [the tear film’s oil layer](/guides/the-tear-films-oil-layer) explains how that outer layer works.`,
      },
      { h: 'October and April: Montgomery’s driest afternoons' },
      {
        p: `Two months stand out in NOAA’s records. April and October afternoons average 51 percent relative humidity at the airport, the lowest of the year, and October is also the month with the least rain. Fall in Montgomery often brings clear, breezy days after a long, sticky summer, and many people notice their eyes during that change before they notice it anywhere else.`,
      },
      {
        list: [
          `October football Saturdays and outdoor festivals mean hours in sun and breeze; sunglasses that wrap around the sides block both.`,
          `On the Riverwalk or at Lake Martin, glare off the water makes people squint, which can mean fewer full blinks.`,
          `Spring pollen season overlaps April’s drier afternoons; itching that won’t settle is worth a call to an eye doctor rather than more drops.`,
        ],
      },
      {
        p: `Wind plays a smaller part here than in many cities. NOAA’s wind table gives Montgomery a lower annual average than Birmingham, Huntsville or Mobile, with February and March the breeziest months and July and August the calmest.`,
      },
      { h: 'Air conditioning, cars and long shifts' },
      {
        p: `A Montgomery workday can mean hours under ducted cooling: state offices near the Capitol, a hangar at Maxwell Air Force Base, a manufacturing floor, a hospital unit. A few small changes cut how much moving, chilled air reaches your eyes:`,
      },
      {
        list: [
          `Angle ceiling and dashboard vents toward your chest or the floor, never straight at your face.`,
          `Move a desk fan so it blows past you, not into you.`,
          `Every 20 minutes at a screen, look across the room and finish a few complete blinks.`,
          `In winter, a heat pump dries indoor air too; a bedroom humidifier, cleaned as its maker directs, can help.`,
        ],
      },
      {
        p: `Screens matter as much as the vents. People blink less while reading a monitor or phone, so the tear film has longer to break up. [Screens and your tear film](/guides/screens-and-your-tear-film) covers why that happens.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses line on its Drug Facts panel reads: {uses}. The directions say: {directions}.`,
      },
      {
        p: `Montgomery summers make the storage line worth reading closely: {storage}. A bottle left on a dashboard in a parking lot off the Eastern Boulevard in July can run well past that range, so keep it in a bag that comes indoors with you. The panel also says: {tip}. Every section is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in Montgomery' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Montgomery, Prattville, Wetumpka, Pike Road and every other US address. Checkout works as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You’ll get tracking by email, though no delivery date is promised, so reorder before the bottle runs low. See the [Montgomery page](/eye-drops/montgomery-al) and the [Alabama page](/eye-drops/state/alabama), or [order from the home page](/#buy).`,
      },
      { h: 'When dryness needs an eye doctor' },
      {
        p: `A lubricating drop is for everyday dryness, and it can’t tell you why your eyes keep feeling that way. The label is plain about when to stop: {stopUse} Sudden blurry vision, real pain or a new sensitivity to light belongs with an eye doctor, and [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists more. Our [self-check](/self-check) can help you describe what you feel; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes dry in Montgomery when it’s so humid?',
        a: `Most of the dryness comes from indoor air. With about 93 days a year at 90°F or above in NOAA’s normals, air conditioning runs for months, and cooled, moving air speeds evaporation from the tear film.`,
      },
      {
        q: 'What is the driest month in Montgomery, Alabama?',
        a: `October, with 2.87 inches of precipitation in NOAA’s 1991 to 2020 normals for the Montgomery airport. October and April afternoons also have the lowest average humidity of the year, about 51 percent.`,
      },
      {
        q: 'How many days does Montgomery hit 90 degrees?',
        a: `About 93 days a year on average, according to NOAA’s 1991 to 2020 normals for Montgomery Regional Airport. Roughly 4 of those reach 100°F.`,
      },
      {
        q: 'Does Quell ship to Montgomery, Alabama?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Montgomery and the rest of the US, with guest checkout and email tracking. No delivery date is promised, so order with time to spare.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-fort-smith-ar:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013964.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013964.csv
   *   (FT SMITH RGNL AP, elev 136.9 m: annual precip 47.34 in; May 5.63 wettest;
   *   Feb 2.69 driest, Jan 2.91; annual snow 2.9 in, Jan 1.4; Jul high 94.1 F, Aug 93.7 F;
   *   Jan high 51.3 F, low 29.6 F; 77.7 days at or above 90 F; 11.1 days at or above
   *   100 F; 62.6 nights at or below 32 F; 3.8 days with a high at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (FORT SMITH, AR, WBAN 13964: Apr 82/51, Oct 87/52, Mar 79/53, Jul 89/54,
   *   Dec 82/61, Jan 81/61, annual 85/56, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (FORT SMITH annual 3.1, same as Little Rock 3.1; Mar 3.8 highest; Jul and Aug
   *   2.5 lowest)
   * Elevation is the NOAA station elevation, converted (136.9 m is about 450 ft).
   */
  {
    slug: 'dry-eye-relief-fort-smith-ar',
    title: 'Dry eye relief in Fort Smith, Arkansas',
    description:
      'Fort Smith’s windiest month is March and its driest afternoons come in April. NOAA’s records, plus daily dry eye relief for the Arkansas River valley.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Fort Smith dry eye relief starts with knowing the city’s two seasons for it. NOAA’s records show March as the windiest month and April afternoons as the least humid, at about 51 percent; then about 78 days of 90°F heat push people into air conditioning. Shield your eyes from spring wind, keep vents off your face, blink fully at screens, follow your drop’s label, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Fort Smith weather by the numbers' },
      {
        p: `Fort Smith Regional Airport sits on the city’s southeast side at about 450 feet, in the Arkansas River valley between the Ozark Plateau to the north and the Ouachita Mountains to the south. NOAA’s 1991 to 2020 normals for that station report:`,
      },
      {
        list: [
          `47.34 inches of precipitation in an average year, with May the wettest month at 5.63 inches.`,
          `February is the driest month at 2.69 inches, and January isn’t far behind at 2.91.`,
          `Snowfall averages 2.9 inches a year, about half of it in January.`,
          `July highs average 94.1°F; about 78 days reach 90°F and around 11 reach 100°F.`,
          `Close to 63 nights a year drop to 32°F or below, and roughly 4 days never climb above freezing.`,
        ],
      },
      { h: 'March wind in the river valley' },
      {
        p: `NOAA’s wind table puts Fort Smith’s yearly average level with Little Rock’s, and March is the windiest month of its year, with July and August the calmest. Spring fronts crossing from Oklahoma push steady wind down the valley. Moving air thins the watery part of the tear film faster than still air does, so a gusty March afternoon at a youth ballgame or a jobsite can leave eyes stinging even though the humidity isn’t especially low.`,
      },
      {
        list: [
          `Wraparound safety glasses or sunglasses block the wind coming in from the sides.`,
          `A cap with a brim keeps gusts from rolling straight down over your eyes.`,
          `On a riding mower or tractor, turn so the wind is behind you when you can.`,
          `After time outdoors, give your eyes a minute of slow, full blinks before you go back to a screen.`,
        ],
      },
      { h: 'Why do my eyes get dry in April and October?' },
      {
        p: `NOAA’s humidity table gives Fort Smith April afternoons an average of 51 percent and October afternoons 52 percent, the two lowest marks of the year; March follows at 53. Those months also bring mild temperatures, open windows and long hours outside: trail time at Lake Fort Smith State Park, fishing on the Arkansas, school sports. Clear, breezy, drier afternoons are the ones when eyes feel gritty by evening.`,
      },
      { h: 'Summer: heat outside, cold air inside' },
      {
        p: `By July the outdoor air turns heavy again; NOAA lists July mornings near 89 percent humidity. The dryness moves indoors. A plant floor, a warehouse, a clinic or a car with the fan on high can blow cooled, dried air across your face for a full shift. Air conditioning is one of the everyday causes of tear evaporation, and our guide to [dry air, wind and altitude](/guides/dry-air-wind-and-altitude) explains why moving air matters so much.`,
      },
      {
        list: [
          `Turn dashboard vents toward the floor or your hands once the cabin cools.`,
          `Ask whether a ceiling diffuser can be redirected if it blows straight onto your workstation.`,
          `Look away from screens every 20 minutes and let each blink close completely.`,
        ],
      },
      { h: 'Winter in Fort Smith' },
      {
        p: `Winter is short but real. January highs average 51.3°F and lows 29.6°F, and furnaces and heat pumps dry indoor air for weeks at a time. December and January afternoons outdoors average about 61 percent humidity in NOAA’s table, but a heated house holds much less. A humidifier in the bedroom, cleaned as its maker directs, and a chair moved away from floor registers both help.`,
      },
      { h: 'Quell’s Drug Facts, in its own words' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label states the Uses as: {uses}. The directions are: {directions}. One warning matters before you order: {warnings}.`,
      },
      {
        p: `Keep the storage range in mind on summer job sites and in winter trucks: {storage}. The full panel is on our [Drug Facts page](/drug-facts), and every guide on using drops is under [using and storing drops](/guides/topic/using).`,
      },
      { h: 'Ordering Quell to Fort Smith' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Fort Smith, Van Buren, Barling, Greenwood and anywhere else in the US. Checkout doesn’t require an account, shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking arrives by email; no delivery date is promised. The [Fort Smith page](/eye-drops/fort-smith-ar) and [Arkansas page](/eye-drops/state/arkansas) have local details, or [order from the home page](/#buy).`,
      },
      { h: 'When to call an eye doctor' },
      {
        p: `Drops ease ordinary dryness, but they aren’t the answer to every eye complaint. The label’s stop-use line is specific: {stopUse} Eye pain, vision that stays blurry or sudden light sensitivity should go to an eye doctor; our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers others.`,
      },
    ],
    faq: [
      {
        q: 'What is the windiest month in Fort Smith, Arkansas?',
        a: `March, according to NOAA’s wind table for Fort Smith Regional Airport. July and August are the calmest months, and the city’s yearly average matches Little Rock’s.`,
      },
      {
        q: 'Why do my eyes feel dry in Fort Smith in the spring?',
        a: `Spring combines Fort Smith’s windiest month, March, with its least humid afternoons in April, about 51 percent in NOAA’s table. Wind and drier air both speed evaporation from the tear film.`,
      },
      {
        q: 'How much snow does Fort Smith get?',
        a: `About 2.9 inches in a normal year at the regional airport, based on NOAA’s 1991 to 2020 normals, with roughly half of it in January.`,
      },
      {
        q: 'Can I get Quell eye drops delivered in Fort Smith?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Fort Smith and every US address, with guest checkout and tracking by email. No delivery date is promised, so reorder before you run out.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-bakersfield-ca:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00023155.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00023155.csv
   *   (BAKERSFIELD AP, elev 149.0 m: annual precip 6.36 in; Jan 1.19, Feb 1.18,
   *   Mar 1.15; Jul 0.00, Aug 0.00, Jun 0.05; Jul high 98.3 F; Dec high 58.8 F, low
   *   39.6 F; 112.1 days at or above 90 F; 35.5 days at or above 100 F; 9.9 nights at or
   *   below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (BAKERSFIELD, CA, WBAN 23155: Jul 45/22, Jun 47/23, Aug 48/23, May 54/26,
   *   Jan 80/61, Dec 78/60, annual 62/38, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (BAKERSFIELD: May and Jun 3.4 highest, Nov 2.1 lowest)
   * - https://forecast.weather.gov/glossary.php?word=tule+fog (NWS glossary:
   *   radiation fog in the Central Valley, night and morning, late fall and winter,
   *   after the first significant rainfall)
   * Elevation is the NOAA station elevation, converted (149.0 m is about 490 ft).
   */
  {
    slug: 'dry-eye-relief-bakersfield-ca',
    title: 'Dry eye relief in Bakersfield, California',
    description:
      'Bakersfield gets about 6 inches of rain a year and July afternoons average 22 percent humidity. NOAA’s numbers and dry eye relief for the valley’s south end.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Bakersfield’s air is dry for much of the year: NOAA’s normals give the airport about 6.36 inches of rain a year, almost none from June through September, and July afternoons average 22 percent humidity. For relief, shield your eyes from sun and dust, keep car and office vents off your face, blink fully at screens, use a lubricating drop as labeled, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Bakersfield’s climate, from NOAA' },
      {
        p: `The figures below come from NOAA’s 1991 to 2020 climate normals for Meadows Field, Bakersfield’s airport, north of downtown at about 490 feet. The station sits near the southern end of the San Joaquin Valley, with the Tehachapi Mountains to the southeast and the Sierra Nevada rising to the east.`,
      },
      {
        list: [
          `6.36 inches of precipitation in a normal year, with January (1.19), February (1.18) and March (1.15) the wettest months.`,
          `July and August each average 0.00 inches, and June just 0.05.`,
          `July highs average 98.3°F; about 112 days a year reach 90°F and about 36 reach 100°F.`,
          `December highs average 58.8°F, and about 10 nights a year reach freezing.`,
        ],
      },
      { h: 'Why are my eyes so dry in Bakersfield in summer?' },
      {
        p: `NOAA’s relative humidity table shows how far Bakersfield’s summer afternoons fall: 23 percent in June, 22 in July, 23 in August. Mornings start in the mid-40s and the air dries steadily as the day heats up. At that humidity, the watery layer of the tear film evaporates quickly between blinks, and a breeze or a blast from a car vent speeds it further.`,
      },
      {
        p: `May and June are also the windiest months in NOAA’s Bakersfield wind table, and November is the calmest. Late spring wind across plowed and harvested ground carries fine dust, so eyes can feel sandy as well as dry.`,
      },
      { h: 'Working outdoors in Kern County' },
      {
        p: `A lot of Bakersfield works outside: orchards and row crops, oil fields west of town, warehouses along the highways, road crews in July. Some habits that help in that heat:`,
      },
      {
        list: [
          `Wear wraparound safety glasses or sunglasses; side shields block both dust and wind.`,
          `Rinse dust from your face and lashes with clean water at breaks rather than rubbing your eyes.`,
          `Point the truck’s air conditioning at your chest, not your face, on the drive between sites.`,
          `Keep your eye drop bottle in a lunch cooler bag or an indoor locker, never on the dash.`,
          `Take a minute of full, slow blinks before switching from outdoor work to a phone or tablet.`,
        ],
      },
      { h: 'Winter and tule fog' },
      {
        p: `December and January turn the numbers around. Afternoon humidity averages about 60 percent and mornings near 80 percent in NOAA’s table, and the National Weather Service’s glossary describes tule fog as a radiation fog of the Central Valley that forms in the night and morning hours in late fall and winter after the first significant rainfall. Outdoors, the air feels damp.`,
      },
      {
        p: `Indoors is another matter. A furnace or heat pump warms that damp air without adding water, so its relative humidity drops sharply. Eyes that felt fine on a foggy morning commute can feel scratchy by lunch in a heated office. A bedroom humidifier, cleaned as directed, and a desk away from floor and ceiling vents help through the season. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) goes into more detail.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses line on the Drug Facts panel says: {uses}. Directions: {directions}.`,
      },
      {
        p: `In a Bakersfield summer, storage is the line most likely to be broken by accident: {storage}. A truck cab or a parked car in July runs far above that range. The label also says: {doNotUse}. If the drop ever looks different from the milky brown it had when it arrived, don’t use it. See the full [Drug Facts](/drug-facts).`,
      },
      { h: 'Ordering to Bakersfield' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Bakersfield, Oildale, Shafter, Arvin and the rest of the US. Order as a guest; shipping is {shipping}, and {freeBottles} or more bottles ship free. You’ll get tracking by email, but no delivery date is promised. Have it sent somewhere it won’t bake on a porch in July. Local details are on the [Bakersfield page](/eye-drops/bakersfield-ca) and the [California page](/eye-drops/state/california).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dust that won’t rinse out, a scratch you can feel, pain, or vision that blurs and stays blurry are reasons to see an eye doctor, not reasons to keep adding drops. The label’s own limit is: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has more.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Bakersfield get a year?',
        a: `About 6.36 inches in a normal year at Meadows Field, according to NOAA’s 1991 to 2020 normals. January through March bring most of it, and July and August average none.`,
      },
      {
        q: 'Why are my eyes so dry in Bakersfield?',
        a: `Summer afternoons average 22 to 23 percent humidity in NOAA’s table, late spring brings the windiest weeks and the most dust, and winter heating dries indoor air. Each speeds evaporation from the tear film.`,
      },
      {
        q: 'How many 100 degree days does Bakersfield have?',
        a: `About 36 a year on average, based on NOAA’s 1991 to 2020 normals for the Bakersfield airport. About 112 days reach 90°F or more.`,
      },
      {
        q: 'Does Quell ship to Bakersfield, California?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Bakersfield and every other US address, with guest checkout and tracking by email. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-long-beach-ca:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00023129.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00023129.csv
   *   (LONG BEACH DAUGHERTY FLD, elev 9.4 m: annual precip 12.02 in; Feb 3.02, Jan 2.89
   *   wettest; Aug 0.01, Jul 0.05 driest; Aug high 83.2 F, Sep 82.4 F; Jan high 67.4 F,
   *   Dec low 46.6 F; 23.3 days at or above 90 F; 1.9 days at or above 100 F; 0.1 nights
   *   at or below 32 F; no snowfall normal published)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (LONG BEACH, CA, WBAN 23129: afternoons 52 to 57 every month, Apr 75/52 lowest
   *   afternoon, Jun 79/57 highest; Dec 71/54; annual 75/54, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (LONG BEACH annual 2.5; Apr and May 2.9 highest; Dec 1.9 lowest)
   * - https://forecast.weather.gov/glossary.php?letter=s (NWS glossary, Santa Ana Wind:
   *   strong, hot, dust-bearing winds descend to the coast around Los Angeles from
   *   inland desert regions)
   * - https://forecast.weather.gov/glossary.php?letter=o (NWS glossary, Onshore Flow:
   *   air moving from sea to land, usually associated with increased moisture)
   * Elevation is the NOAA station elevation, converted (9.4 m is about 30 ft).
   */
  {
    slug: 'dry-eye-relief-long-beach-ca',
    title: 'Dry eye relief in Long Beach, California',
    description:
      'Long Beach air holds steady near 52 to 57 percent humidity most afternoons, so dry eyes there come from Santa Ana days, AC and screens. What helps.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Long Beach’s ocean air is steady: NOAA’s table puts afternoon humidity at the airport between 52 and 57 percent in every month of the year. So when eyes feel dry here, the usual causes are a Santa Ana wind off the desert, air conditioning in late summer, and hours at a screen. Wear wraparound sunglasses on windy days, keep vents off your face, blink fully, follow your drop’s label, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'What NOAA’s normals say about Long Beach' },
      {
        p: `Long Beach Airport (Daugherty Field) sits a few miles inland from the harbor at about 30 feet above sea level. NOAA’s 1991 to 2020 normals for the station describe a mild, mostly dry coastal climate:`,
      },
      {
        list: [
          `12.02 inches of precipitation a year, with February (3.02) and January (2.89) the wettest months.`,
          `August averages 0.01 inches and July 0.05; the dry season runs roughly May through September.`,
          `August is the warmest month, with highs averaging 83.2°F, and about 23 days a year reach 90°F.`,
          `January highs average 67.4°F, and NOAA counts about 0.1 nights a year at freezing.`,
        ],
      },
      { h: 'Ocean air and the onshore breeze' },
      {
        p: `The National Weather Service defines onshore flow as air moving from sea to land, and notes it is usually associated with increased moisture. That sea air is why NOAA’s humidity table for Long Beach looks so flat: mornings run 71 to 79 percent and afternoons 52 to 57 percent from January through December. April has the lowest afternoon average (52) and June the highest (57).`,
      },
      {
        p: `Steady doesn’t mean wind-free. NOAA’s wind table gives Long Beach its breeziest months in April and May and its calmest in December. Riding the beach bike path, sailing out of Alamitos Bay or working the docks at the port puts a constant breeze across your eyes, and moving air speeds evaporation from the tear film even when the air is moist.`,
      },
      { h: 'Santa Ana days' },
      {
        p: `The National Weather Service glossary describes the Santa Ana wind as strong, hot, dust-bearing winds that descend to the Pacific coast around Los Angeles from inland desert regions. On those days the ocean’s moisture is pushed offshore, and the desert air arrives dry and gusty. They’re the days Long Beach residents most often notice gritty, tired eyes.`,
      },
      {
        list: [
          `Close windows on the windward side of the house and run any air filter you have.`,
          `Wear sunglasses that wrap around the sides when you’re outdoors.`,
          `Skip the leaf blower and other dusty yard work until the wind settles.`,
          `Run a humidifier in the bedroom, cleaned as its maker directs, while the dry spell lasts.`,
          `Keep up full blinks at a screen; dry wind and a low blink rate add together.`,
        ],
      },
      { h: 'Air conditioning in late summer' },
      {
        p: `August and September are the warmest months in NOAA’s Long Beach record, and that’s when air conditioning runs hardest in offices, shops, warehouses near the port and cars on the 405 and 710. Cooled air from a vent is drier than the ocean air outside, and a vent aimed at your face blows it straight across the tear film. Turn dashboard vents toward the floor, angle a desk fan past you, and ask for a ceiling diffuser to be adjusted if it blows onto your desk.`,
      },
      { h: 'Screens, commutes and close work' },
      {
        p: `People blink less while reading a screen, and many of those blinks don’t close fully. Hours on a laptop in a downtown office or a dispatch center at the port can leave eyes dry by afternoon even on a mild day. Every 20 minutes, look out a window or across the room and let your eyes close all the way a few times. [Why eyes feel dry at the end of the day](/guides/dry-eyes-at-the-end-of-the-day) covers this pattern.`,
      },
      { h: 'What the label on Quell says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the loss that wind and air conditioning speed up. From its Drug Facts panel, the Uses: {uses}. The directions: {directions}. One more line from the panel: {tip}.`,
      },
      {
        p: `Long Beach rarely gets cold enough to matter, but a parked car in August can get hot enough to: {storage}. The whole panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Long Beach' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Long Beach, Lakewood, Signal Hill, Seal Beach and every other US address. There’s guest checkout, shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking comes by email, and no delivery date is promised. See the [Long Beach page](/eye-drops/long-beach-ca) and the [California page](/eye-drops/state/california), or [order on the home page](/#buy).`,
      },
      { h: 'Signs that need an eye doctor' },
      {
        p: `A drop helps with ordinary dryness and that’s its job. The label states where that ends: {stopUse} If grit from a windy day won’t rinse out, if one eye hurts, or if your vision changes, see an eye doctor. Our guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists more.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes dry in Long Beach if it’s by the ocean?',
        a: `Ocean air keeps Long Beach afternoons near 52 to 57 percent humidity, so dry spells tend to come from Santa Ana winds, air conditioning and screen time. Each of those speeds evaporation from the tear film.`,
      },
      {
        q: 'How much rain does Long Beach get a year?',
        a: `About 12.02 inches in a normal year at Long Beach Airport, according to NOAA’s 1991 to 2020 normals. February and January are the wettest months, and July and August get almost none.`,
      },
      {
        q: 'What are Santa Ana winds in Long Beach?',
        a: `The National Weather Service glossary describes them as strong, hot, dust-bearing winds that descend to the coast around Los Angeles from inland desert regions. They replace moist ocean air with dry desert air.`,
      },
      {
        q: 'Can I order Quell to Long Beach, California?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Long Beach and anywhere else in the US, with guest checkout and email tracking. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-redding-ca:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00024257.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00024257.csv
   *   (REDDING MUNI AP, elev 151.5 m: annual precip 33.52 in; Dec 6.31, Jan 6.04,
   *   Feb 5.48; Jul 0.07, Aug 0.13; annual snow 2.6 in; Jul high 99.9 F, Aug 98.1 F;
   *   Dec high 56.0 F, low 37.2 F; 106.0 days at or above 90 F; 40.8 days at or above
   *   100 F; 27.0 nights at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (REDDING, CA, WBAN 24257, 1986-2018: Jul 46/18, Aug 46/18, Sep 48/21, Jun 49/24,
   *   Jan 77/60, Dec 76/60, annual 61/38, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (REDDING: Mar and Jun 3.1 highest; Nov 2.2 lowest)
   * Elevation is the NOAA station elevation, converted (151.5 m is about 500 ft).
   */
  {
    slug: 'dry-eye-relief-redding-ca',
    title: 'Dry eye relief in Redding, California',
    description:
      'Redding’s July and August afternoons average 18 percent humidity and about 41 days a year hit 100°F. NOAA’s figures and practical dry eye relief.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Redding’s summers are the hard part for dry eyes. NOAA’s humidity table puts July and August afternoons at the Redding airport at 18 percent, and the city averages about 41 days a year at 100°F or more. Winters, by contrast, are wet. In summer, shade your eyes, keep air conditioning off your face and blink fully; year-round, use a drop as its label directs and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Redding in NOAA’s climate normals' },
      {
        p: `Redding sits at the north end of the Sacramento Valley, where the valley floor runs into mountains on three sides and Shasta Lake lies just to the north. NOAA’s 1991 to 2020 normals for Redding Municipal Airport, on the southeast edge of the city at about 500 feet, show two very different halves of the year:`,
      },
      {
        list: [
          `33.52 inches of precipitation a year, most of it from November through March.`,
          `December (6.31 inches) and January (6.04) are the wettest months; July averages 0.07 and August 0.13.`,
          `July highs average 99.9°F and August highs 98.1°F.`,
          `About 106 days a year reach 90°F, and about 41 reach 100°F.`,
          `Snow is rare at the airport, about 2.6 inches a year, and around 27 nights reach freezing.`,
        ],
      },
      { h: 'Why are my eyes so dry in Redding in July?' },
      {
        p: `Heat and dry air arrive together. NOAA’s relative humidity table for Redding shows afternoons falling to 24 percent in June, 18 percent in July and August, and 21 percent in September, with mornings in the mid-40s. In air that dry, the water in the tear film evaporates quickly between blinks. Add a breeze off the lake, a truck window rolled down or a vent aimed at your face, and eyes can feel hot and scratchy within an hour.`,
      },
      {
        list: [
          `Get outdoor errands, yard work and runs on the Sacramento River Trail done early, while morning humidity is at least double the afternoon figure.`,
          `On the boat at Shasta Lake or Whiskeytown, wear wraparound sunglasses; glare off the water and wind add up.`,
          `In the car, aim the air conditioning at your chest and keep the fan on a lower setting once the cabin cools.`,
          `Indoors, set fans to move air around the room rather than across your face.`,
        ],
      },
      { h: 'Wind in the north valley' },
      {
        p: `NOAA’s wind table gives Redding two breezy peaks, March and June, and its calmest month in November. June wind on top of low humidity is a hard combination for the tear film, since moving air carries moisture away from the eye’s surface faster than still air. On gusty June afternoons, a brimmed hat and side-shielded sunglasses do more than standard lenses. For more on why, read [dry air, wind and altitude](/guides/dry-air-wind-and-altitude).`,
      },
      { h: 'Rainy winters, heated rooms' },
      {
        p: `From November on, the rain returns, and NOAA’s table puts December and January afternoons at about 60 percent humidity. Indoors, though, wood stoves, furnaces and heat pumps warm the air without adding moisture. A family room heated by a stove can feel as dry to the eyes as a July afternoon. A humidifier in the bedroom, cleaned as its maker directs, and seating away from the stove or the vents both help.`,
      },
      { h: 'Screens and long drives' },
      {
        p: `Long drives are normal in far Northern California: Interstate 5 down to Sacramento, Highway 299 to the coast or over to the Intermountain area, Highway 44 toward Lassen. Hours of focus on the road lower your blink rate, the same way a screen does. Pull over every couple of hours, look into the distance and blink fully a few times. Our guide to [screens and your tear film](/guides/screens-and-your-tear-film) explains the blink side of it.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives the Uses as: {uses}. The directions read: {directions}.`,
      },
      {
        p: `Redding summers put the storage line to the test: {storage}. With July highs near 100°F, a bottle in a parked car or a boat’s dry box in the sun goes well past that, so carry it on you or keep it inside. The Do not use line reads: {doNotUse}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Redding' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Redding, Anderson, Shasta Lake, Palo Cedro and everywhere else in the US. Checkout works without an account, shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking arrives by email; no delivery date is promised, so order before you’re on the last bottle, and ask for it to go somewhere shaded. See the [Redding page](/eye-drops/redding-ca) and the [California page](/eye-drops/state/california).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Drops are for comfort, not answers. The label sets the boundary: {stopUse} See an eye doctor for pain, vision that doesn’t clear, sudden sensitivity to light, or anything stuck in the eye. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has a fuller list.`,
      },
    ],
    faq: [
      {
        q: 'How hot does Redding get in the summer?',
        a: `July highs average 99.9°F at Redding Municipal Airport in NOAA’s 1991 to 2020 normals, and about 41 days a year reach 100°F. About 106 days reach 90°F.`,
      },
      {
        q: 'Why are my eyes dry in Redding in summer?',
        a: `NOAA’s humidity table gives Redding July and August afternoons an average of 18 percent. Air that dry, plus heat and breeze, speeds evaporation from the tear film between blinks.`,
      },
      {
        q: 'How much rain does Redding, California get?',
        a: `About 33.52 inches in a normal year at the Redding airport, according to NOAA. December and January are the wettest months, and July and August get almost none.`,
      },
      {
        q: 'Does Quell ship to Redding, California?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Redding and the rest of the US, with guest checkout and email tracking. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-san-francisco-ca:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00023272.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00023272.csv
   *   (SAN FRANCISCO DWTN, elev 45.7 m: the downtown station, not SFO; annual precip
   *   22.89 in; Dec 4.76, Jan 4.40, Feb 4.37 wettest; Jul 0.01, Aug 0.06 driest;
   *   Sep high 70.2 F, Oct 69.8 F, Jul 66.3 F, Jan 57.8 F; lows 46.6 to 55.6 F all
   *   year; 3.3 days at or above 90 F; 0.0 nights at or below 32 F; no snowfall normal)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (SAN FRANCISCO, CA, WBAN 23272: Sep 87/62 lowest afternoon, Jun 86/64, Dec 88/73
   *   highest afternoon, Jul 91/71, annual 87/69, morning/afternoon)
   * - https://forecast.weather.gov/glossary.php?letter=o (NWS glossary, Onshore Flow:
   *   air moving from sea to land, usually associated with increased moisture)
   * No San Francisco row in wndspd23.txt, so no wind comparison is made.
   * Elevation is the NOAA station elevation, converted (45.7 m is about 150 ft).
   */
  {
    slug: 'dry-eye-relief-san-francisco-ca',
    title: 'Dry eye relief in San Francisco, California',
    description:
      'San Francisco is cool and damp, yet eyes still dry out in heated rooms and at screens. NOAA’s downtown numbers, the September exception, and what helps.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `San Francisco air is rarely dry: NOAA’s downtown station records afternoon humidity between 62 and 73 percent in every month. Dry eyes here usually come from indoor heat, which runs most of the year because nights stay in the 40s and 50s, and from long hours at screens. Keep heater vents off your face, take screen breaks, blink fully, use a drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Which weather station, and what it shows' },
      {
        p: `NOAA keeps two well-known stations for the city. The one used here is the downtown station (listed by NOAA as San Francisco Downtown), at about 150 feet above sea level, not San Francisco International Airport down the Peninsula in San Mateo County. Its 1991 to 2020 normals:`,
      },
      {
        list: [
          `22.89 inches of precipitation a year, mostly from November through March.`,
          `December is the wettest month at 4.76 inches; July averages 0.01 and August 0.06.`,
          `The warmest month is September, with highs averaging 70.2°F, followed by October at 69.8°F.`,
          `July highs average only 66.3°F, and January highs 57.8°F.`,
          `Average lows stay between about 47°F and 56°F all year, and NOAA counts about 3 days a year at 90°F.`,
        ],
      },
      { h: 'Why are my eyes dry in San Francisco when it’s so foggy?' },
      {
        p: `Because the dryness is indoors. Outside, NOAA’s table shows mornings of 83 to 91 percent humidity and summer afternoons near 71 percent; the National Weather Service describes onshore flow, air moving from the sea to the land, as usually bringing increased moisture. But cool air has to be heated to be comfortable, and in San Francisco that happens in July as well as January. A radiator, a wall heater or a forced-air system warms the air without adding water, so its relative humidity drops well below what it was outside.`,
      },
      {
        list: [
          `Keep your desk or bed out of the path of a heating register or radiator.`,
          `In an older apartment with steam heat you can’t control, a small humidifier in the bedroom, cleaned as its maker directs, can help.`,
          `Lower the thermostat a little; air heated less dries less.`,
          `On Muni or BART, if a heater blows at seat level, move away from it.`,
        ],
      },
      { h: 'September: the city’s summer' },
      {
        p: `NOAA’s numbers back up what locals call the city’s real summer. September is the warmest month at the downtown station, and its afternoons average 62 percent humidity, the lowest of any month. June follows at 64. Those clear, warm afternoons are when the outdoors is most drying, so it’s when sunglasses matter on a walk through Golden Gate Park or a Giants game at the ballpark by the bay.`,
      },
      { h: 'Wind on the hills and the waterfront' },
      {
        p: `The downtown station isn’t part of NOAA’s wind table, so there’s no official average to quote here. Exposure still varies across the city: the top of Twin Peaks, the sand at Ocean Beach, the Golden Gate Bridge walkway and a ferry deck all catch more breeze than a sheltered street. Moving air carries moisture away from the eye’s surface faster than still air. Wraparound sunglasses and a hood or brimmed cap help on the exposed walks.`,
      },
      { h: 'Screens and long workdays' },
      {
        p: `Plenty of San Francisco work happens on a laptop, often in a heated office with ducted air, then on a phone during the commute. People blink less while reading a screen, and a lot of those blinks don’t fully close, so the tear film breaks up between them. Every 20 minutes, look out a window or down a hallway and blink slowly and completely a few times. [Screens and your tear film](/guides/screens-and-your-tear-film) explains what’s going on.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses as: {uses}. Its directions: {directions}. One warning to read before ordering: {warnings}.`,
      },
      {
        p: `San Francisco’s mild temperatures make storage easy most of the year, but a car parked in the sun on a September afternoon is a different story: {storage}. The panel also says: {tip}. Every line is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to San Francisco' },
      {
        p: `Orders ship from Brentwood, Tennessee, to San Francisco, Daly City, South San Francisco and every other US address. Order as a guest; shipping is {shipping}, and {freeBottles} or more bottles ship free. You’ll get tracking by email, but no delivery date is promised. In a building where packages sit in a lobby, consider sending it to work. The [San Francisco page](/eye-drops/san-francisco-ca) and [California page](/eye-drops/state/california) have more.`,
      },
      { h: 'When it’s time for an eye doctor' },
      {
        p: `Lubricating drops are for ordinary dryness. The label says when to stop: {stopUse} Eye pain, blur that doesn’t clear, light sensitivity or something you can’t rinse out calls for an eye doctor. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for more, or use the [self-check](/self-check) to put words to what you feel; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes dry in San Francisco?',
        a: `San Francisco’s outdoor air is usually humid, so the dryness tends to come from indoor heating, which runs much of the year, and from screen time that lowers your blink rate.`,
      },
      {
        q: 'What is the warmest month in San Francisco?',
        a: `September, with highs averaging 70.2°F at NOAA’s downtown San Francisco station in the 1991 to 2020 normals. October is close behind at 69.8°F, while July averages 66.3°F.`,
      },
      {
        q: 'How much rain does San Francisco get a year?',
        a: `About 22.89 inches in a normal year at the downtown station, according to NOAA. December is the wettest month and July the driest.`,
      },
      {
        q: 'Does Quell ship to San Francisco?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to San Francisco and every US address, with guest checkout and email tracking. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-santa-barbara-ca:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00023190.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00023190.csv
   *   (SANTA BARBARA MUNI AP, elev 2.7 m: annual precip 17.25 in; Feb 3.86, Jan 3.84
   *   wettest; Aug 0.01, Jul 0.02 driest; Aug high 74.5 F; Jan high 64.2 F; Dec low
   *   40.4 F; 3.0 days at or above 90 F; 5.5 nights at or below 32 F; no snowfall normal)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (SANTA BARBARA, CA, WBAN 23190: Jan 72/58 and Nov 71/58 lowest afternoons;
   *   Jul 84/66, Aug 83/66 highest; annual 77/62, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (SANTA BARBARA annual 2.4, below Long Beach 2.5 and San Diego 2.8; Apr and May
   *   3.0 highest; Nov, Dec, Jan 1.9 lowest)
   * - https://repository.library.noaa.gov/view/noaa/63650 (NOAA Institutional
   *   Repository, Sundowner Winds Experiment pilot study: downslope gusty winds on the
   *   southern slopes of the Santa Ynez Mountains, typically peaking near sunset)
   * Elevation is the NOAA station elevation, converted (2.7 m is about 9 ft).
   */
  {
    slug: 'dry-eye-relief-santa-barbara-ca',
    title: 'Dry eye relief in Santa Barbara, California',
    description:
      'Santa Barbara’s air is mild and moist, but sundowner winds off the Santa Ynez Mountains bring dry gusts near sunset. NOAA sources and simple relief steps.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Santa Barbara’s ocean-side air is usually gentle on the eyes: NOAA’s table keeps afternoon humidity between 58 and 66 percent all year. The exceptions are sundowner winds, gusty downslope winds off the Santa Ynez Mountains that a NOAA-hosted study says typically peak near sunset, plus heated and air-conditioned rooms and screens. On windy evenings, shield your eyes; every day, blink fully, follow your drop’s label, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Where Santa Barbara’s numbers come from' },
      {
        p: `NOAA’s official normals for the city come from Santa Barbara Municipal Airport, which sits beside the Goleta Slough west of downtown, just about at sea level (roughly 9 feet). The 1991 to 2020 record shows:`,
      },
      {
        list: [
          `17.25 inches of precipitation a year, with February (3.86) and January (3.84) the wettest months.`,
          `July averages 0.02 inches and August 0.01.`,
          `August is the warmest month, with highs averaging 74.5°F; only about 3 days a year reach 90°F.`,
          `January highs average 64.2°F, but December lows average 40.4°F, and the airport records about 5 or 6 freezing nights a year.`,
        ],
      },
      {
        p: `Those cold nights surprise people who know the city only by its afternoons, and they’re why so many homes run the heat on winter evenings after a sunny 64°F day.`,
      },
      { h: 'Sundowner winds' },
      {
        p: `Santa Barbara’s coast faces south, with the Santa Ynez Mountains rising steeply behind it. A pilot study of the Sundowner Winds Experiment, published in NOAA’s Institutional Repository, describes sundowners as gusty downslope winds on the southern slopes of those mountains that typically peak near sunset and act like downslope windstorms through the evening. On those evenings the wind comes from the mountains, not the ocean, so it can feel warm and dusty and very different from the usual sea breeze.`,
      },
      {
        list: [
          `Close windows on the mountain side of the house when the wind picks up in the evening.`,
          `Wear wraparound sunglasses for an evening walk or bike ride, even after the sun is low.`,
          `Run a humidifier in the bedroom on those nights, cleaned as its maker directs.`,
          `Don’t rub your eyes if grit blows in; rinse your face with clean water instead.`,
        ],
      },
      { h: 'Why do my eyes feel dry in Santa Barbara in winter?' },
      {
        p: `NOAA’s humidity table puts Santa Barbara’s lowest afternoon averages in November and January, both at 58 percent, compared with 66 percent in July and August. Those are also the months with the coolest nights, when furnaces and wall heaters run. Heating warms air without adding moisture, so a heated room in the evening can be much drier than the afternoon air outside. Keep your chair or bed out of the airflow from registers, and lower the thermostat a degree or two.`,
      },
      { h: 'Spring breezes on the water' },
      {
        p: `NOAA’s wind table gives the Santa Barbara airport a lower yearly average than Long Beach or San Diego. April and May are its breeziest months, and November through January the calmest. Spring afternoons on Stearns Wharf, a sailboat out of the harbor or the bike path along Cabrillo Boulevard put steady wind across the face. Moving air speeds evaporation from the tear film, so the same sunglasses that cut glare off the water help here too. [Dry air, wind and altitude](/guides/dry-air-wind-and-altitude) explains more.`,
      },
      { h: 'Campus, lab and office days' },
      {
        p: `Between UC Santa Barbara, the hospital, tech offices in Goleta and the downtown courthouse district, a lot of local work happens on screens. Screens cut your blink rate, and ducted air in an office or lab moves across your face for hours. Set a reminder to look away every 20 minutes and finish a few full blinks; angle any air vent away from your desk.`,
      },
      { h: 'Quell’s Drug Facts' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses section reads: {uses}. The directions: {directions}. And the Do not use line: {doNotUse}.`,
      },
      {
        p: `Storage rarely gets tested in Santa Barbara’s mild weather, but it’s still on the label: {storage}. Check the full panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering to Santa Barbara' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Santa Barbara, Goleta, Montecito, Carpinteria and the rest of the country. Checkout is open to guests, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking comes by email; no delivery date is promised. Local details are on the [Santa Barbara page](/eye-drops/santa-barbara-ca) and the [California page](/eye-drops/state/california), or [order now](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Grit that stays after a windy evening, a painful eye, or blurred vision that won’t clear are reasons to see an eye doctor rather than add another drop. The label’s stop-use line: {stopUse} Our guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has more detail.`,
      },
    ],
    faq: [
      {
        q: 'What are sundowner winds in Santa Barbara?',
        a: `They’re gusty downslope winds on the southern slopes of the Santa Ynez Mountains, described in a NOAA-hosted study as typically peaking near sunset and lasting into the evening.`,
      },
      {
        q: 'Why do my eyes get dry in Santa Barbara?',
        a: `Usually from sundowner wind, indoor heating on cool winter nights, or screen time. NOAA’s table shows outdoor afternoon humidity between 58 and 66 percent all year.`,
      },
      {
        q: 'How much rain does Santa Barbara get?',
        a: `About 17.25 inches in a normal year at Santa Barbara Municipal Airport, according to NOAA’s 1991 to 2020 normals. February and January are the wettest months.`,
      },
      {
        q: 'Can I order Quell to Santa Barbara, California?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Santa Barbara and every other US address, with guest checkout and email tracking. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-stockton-ca:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00023237.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00023237.csv
   *   (STOCKTON METRO AP, elev 7.9 m: annual precip 13.45 in; Jan 2.67, Feb 2.50,
   *   Dec 2.41; Jul 0.00, Aug 0.01; Jul high 95.4 F; Jan high 57.0 F, Dec low 38.4 F;
   *   88.0 days at or above 90 F; 18.9 days at or above 100 F; 18.9 nights at or below
   *   32 F; no snowfall normal)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (STOCKTON, CA, WBAN 23237: Jul 60/27 lowest afternoon, Jun 62/29, Aug 62/29,
   *   Jan 86/71, Dec 85/70, annual 72/45, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (STOCKTON annual 3.4, above Sacramento 2.8 and Fresno 2.7; May 4.4 highest,
   *   Jun 4.3; Nov 2.5 lowest)
   * - https://forecast.weather.gov/glossary.php?word=tule+fog (NWS glossary)
   * Elevation is the NOAA station elevation, converted (7.9 m is about 26 ft).
   */
  {
    slug: 'dry-eye-relief-stockton-ca',
    title: 'Dry eye relief in Stockton, California',
    description:
      'Stockton is windier on average than Sacramento or Fresno in NOAA’s table, and July afternoons average 27 percent humidity. Local dry eye relief tips.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Stockton’s dry-eye season runs from May through September. NOAA’s records show May as the windiest month, July afternoons averaging 27 percent humidity, and about 88 days a year at 90°F or more, with almost no summer rain. For relief, block wind with wraparound glasses, keep air conditioning off your face, blink fully at screens, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Stockton’s weather record' },
      {
        p: `Stockton Metropolitan Airport, south of the city at roughly 26 feet above sea level, is NOAA’s official station here. Stockton sits on the eastern edge of the Sacramento–San Joaquin Delta, in the northern San Joaquin Valley, and its 1991 to 2020 normals read:`,
      },
      {
        list: [
          `13.45 inches of precipitation a year; January (2.67), February (2.50) and December (2.41) bring the most.`,
          `July averages 0.00 inches and August 0.01.`,
          `July highs average 95.4°F, with about 19 days a year reaching 100°F.`,
          `January highs average 57.0°F, and about 19 nights a year drop to freezing.`,
        ],
      },
      { h: 'Is Stockton windy?' },
      {
        p: `By the standards of the Central Valley, yes. NOAA’s wind table gives Stockton a higher yearly average than either Sacramento or Fresno, and its windiest months are May and June, with November the calmest. Late spring wind across the Delta farmland and the open ground east of town lifts dust and keeps air moving across your face. Moving air pulls moisture off the surface of the eye faster than still air, so a windy May afternoon can dry your eyes even before the real heat arrives.`,
      },
      {
        list: [
          `Wraparound sunglasses or safety glasses with side shields block crosswinds.`,
          `Bike or walk along the Calaveras River trail early, before the afternoon wind builds.`,
          `On a boat in the Delta, keep sunglasses on even in the shade of a cabin top.`,
          `At a dusty jobsite or field, rinse your face with clean water at breaks instead of rubbing your eyes.`,
        ],
      },
      { h: 'July and August: the driest stretch' },
      {
        p: `NOAA’s relative humidity table puts Stockton’s afternoons at 29 percent in June, 27 percent in July and 29 percent in August. Mornings are about 60 percent, so the air loses more than half its relative humidity as the day heats up. That afternoon air is what reaches your eyes in a parking lot, at a weekend farmers market, or in a warehouse with roll-up doors open.`,
      },
      {
        p: `By evening many people move indoors to air conditioning, which cools and dries the air further. Turn car vents toward the floor, set ceiling fans low, and give your eyes a break from screens in the hour before bed. [Why do my eyes feel dry at the end of the day?](/guides/dry-eyes-at-the-end-of-the-day) explains why evenings can be the worst time.`,
      },
      { h: 'Fog season and winter heat' },
      {
        p: `From late fall into winter the picture flips. NOAA’s table gives Stockton January afternoons about 71 percent humidity, and the National Weather Service glossary names tule fog as the Central Valley’s nighttime and morning radiation fog after the first significant rain of the season. The damp air outside doesn’t follow you indoors, where furnaces and heat pumps run for weeks. A humidifier in the bedroom (cleaned as its maker directs) and a desk away from heating registers help.`,
      },
      { h: 'Port, warehouse and campus days' },
      {
        p: `Work in Stockton ranges from the Port of Stockton and the distribution centers along Interstate 5 to farms, hospitals and classrooms at University of the Pacific. Long hours behind a forklift windshield, at a scanner or in front of a laptop all lower the blink rate. Look into the distance for a few seconds every 20 minutes and let each blink close completely. Our guide to [screens and your tear film](/guides/screens-and-your-tear-film) has more on blinking.`,
      },
      { h: 'From the Quell label' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists the Uses: {uses}. Directions: {directions}. It also says: {tip}.`,
      },
      {
        p: `For a Stockton summer, the most important line is storage: {storage}. Keep the bottle in a lunch bag or a pocket, not a hot truck. The complete panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Stockton' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Stockton, Lodi, Manteca, Tracy, Lathrop and every other US address. Checkout is available to guests, shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking arrives by email; no delivery date is promised. The [Stockton page](/eye-drops/stockton-ca) and [California page](/eye-drops/state/california) have more.`,
      },
      { h: 'When an eye doctor should look' },
      {
        p: `Drops are meant for everyday dryness, not for a scratch, a stuck particle or changes in vision. The label’s own stop point: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs worth a visit.`,
      },
    ],
    faq: [
      {
        q: 'What is the windiest month in Stockton, California?',
        a: `May, according to NOAA’s wind table for Stockton Metropolitan Airport, with June close behind. November is the calmest month, and Stockton’s yearly average is higher than Sacramento’s or Fresno’s.`,
      },
      {
        q: 'Why do my eyes get dry in Stockton in the summer?',
        a: `July afternoons average 27 percent humidity in NOAA’s table, late spring and early summer are the windiest stretch, and air conditioning dries indoor air. All three speed evaporation from the tear film.`,
      },
      {
        q: 'How hot does Stockton get?',
        a: `July highs average 95.4°F at Stockton Metropolitan Airport in NOAA’s 1991 to 2020 normals, with about 88 days a year at 90°F or more and about 19 at 100°F.`,
      },
      {
        q: 'Does Quell ship to Stockton, California?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Stockton and the rest of the US, with guest checkout and tracking by email. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-bridgeport-ct:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00094702.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00094702.csv
   *   (BRIDGEPORT SIKORSKY MEM AP, elev 1.5 m, in Stratford: annual precip 44.09 in;
   *   Apr 4.16, Mar 4.09 wettest; Nov 3.11, Feb 3.12 driest; annual snow 33.6 in, Feb
   *   10.7, Jan 8.5, Mar 7.0; Jul high 83.4 F; Jan high 38.4 F, low 24.4 F; 9.1 days
   *   at or above 90 F; 91.8 nights at or below 32 F; 18.4 days with a high at or
   *   below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (BRIDGEPORT, CT, WBAN 94702: Apr 70/54 lowest afternoon, Mar 71/56, Feb 72/58,
   *   Dec 74/61, annual 75/59, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (BRIDGEPORT annual 4.2, above Hartford 3.5; Mar 4.8 highest; Jul 3.6 lowest)
   * Elevation is the NOAA station elevation, converted (1.5 m is about 5 ft).
   */
  {
    slug: 'dry-eye-relief-bridgeport-ct',
    title: 'Dry eye relief in Bridgeport, Connecticut',
    description:
      'Bridgeport’s shoreline station is windier than Hartford’s, and about 92 nights a year freeze, so heat runs for months. NOAA numbers and dry eye relief.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `In Bridgeport, dry eyes are mostly a winter and wind problem. NOAA’s station at Sikorsky Memorial Airport averages about 92 freezing nights a year, so furnaces run for months, and its wind table shows the shoreline breezier than Hartford, with March the windiest month. Keep heat registers away from your face, wear wraparound glasses on the water, blink fully at screens, follow your drop’s label, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'The Bridgeport weather station' },
      {
        p: `NOAA’s Bridgeport normals come from Igor I. Sikorsky Memorial Airport, which is owned by the city of Bridgeport but sits next door in Stratford, right on Long Island Sound at about 5 feet above sea level. Its 1991 to 2020 record:`,
      },
      {
        list: [
          `44.09 inches of precipitation, spread fairly evenly; April (4.16) is the wettest month and November (3.11) the driest.`,
          `33.6 inches of snow in a normal winter, led by February at 10.7 inches and January at 8.5.`,
          `January highs average 38.4°F and lows 24.4°F.`,
          `About 92 nights a year fall to 32°F or below, and about 18 days stay below freezing all the way through.`,
          `July highs average 83.4°F, and about 9 days a year reach 90°F.`,
        ],
      },
      { h: 'Why are my eyes so dry in Bridgeport in winter?' },
      {
        p: `Outdoors, winter air on the Sound isn’t especially dry: NOAA’s humidity table gives Bridgeport December afternoons about 61 percent. The issue is what happens when that freezing air comes inside. A furnace, boiler or heat pump warms it without adding water, so the relative humidity in a heated house or office drops far below the outdoor number. With freezing nights from roughly November into April, that indoor dryness lasts a long time.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom, and clean it as its maker directs.`,
          `Don’t sit or sleep with a baseboard heater or floor register blowing toward you.`,
          `Turn the car’s heat to the floor setting once the windshield clears.`,
          `Lower the thermostat a degree or two at night; less heating dries the air less.`,
        ],
      },
      {
        p: `Our longer guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) covers the indoor side in more detail.`,
      },
      { h: 'Wind off Long Island Sound' },
      {
        p: `NOAA’s wind table gives the Bridgeport station a higher yearly average than Hartford’s inland airport, which fits its position on open water. March is the windiest month and July the calmest. A March walk at Seaside Park, a deck crossing on the Bridgeport and Port Jefferson ferry, or a cold wait on a Metro-North platform puts a steady wind on your eyes. Wind carries moisture off the tear film faster than still air does, and cold wind can also make eyes water, which isn’t the same as being well lubricated.`,
      },
      { h: 'Early spring: the driest afternoons' },
      {
        p: `April has the lowest afternoon humidity in NOAA’s Bridgeport table at 54 percent, with March at 56, and those two months also bring the strongest winds of the year. That combination, plus heat still running indoors on cold nights, makes late winter into early spring the stretch when many shoreline residents notice their eyes most.`,
      },
      { h: 'Commuting and screens' },
      {
        p: `A lot of Bridgeport’s workforce commutes along Interstate 95 or by train toward Stamford and New York, then spends the day on screens. Both cut the blink rate. In a heated train car or office, look up from the phone or laptop every 20 minutes and blink slowly, closing your eyes all the way. Our guide to [screens and your tear film](/guides/screens-and-your-tear-film) explains why that helps.`,
      },
      { h: 'Quell’s label, word for word' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. From the Drug Facts panel, the Uses: {uses}. The directions: {directions}. Before buying, note this warning: {warnings}.`,
      },
      {
        p: `In a Connecticut winter, the storage line matters as much as in summer: {storage}. A bottle left in a parked car through a January night can drop far below that range, so carry it in an inside pocket. See the complete [Drug Facts](/drug-facts).`,
      },
      { h: 'Ordering to Bridgeport' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Bridgeport, Stratford, Fairfield, Trumbull and every other US address. Check out as a guest; shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking comes by email, and no delivery date is promised, so leave time during snow season. See the [Bridgeport page](/eye-drops/bridgeport-ct) and [Connecticut page](/eye-drops/state/connecticut).`,
      },
      { h: 'Signs for an eye doctor' },
      {
        p: `A lubricating drop is for ordinary dryness. The label lists when to stop: {stopUse} Pain, vision that stays blurry, or sudden light sensitivity should be checked by an eye doctor. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has more.`,
      },
    ],
    faq: [
      {
        q: 'Where is the Bridgeport, Connecticut weather station?',
        a: `NOAA’s Bridgeport station is at Sikorsky Memorial Airport, which the city of Bridgeport owns but which sits in Stratford on Long Island Sound, at about 5 feet above sea level.`,
      },
      {
        q: 'How much snow does Bridgeport, CT get?',
        a: `About 33.6 inches in a normal winter at Sikorsky Memorial Airport, according to NOAA’s 1991 to 2020 normals. February averages the most, at 10.7 inches.`,
      },
      {
        q: 'Why do my eyes feel dry in Bridgeport?',
        a: `Long heating seasons dry indoor air, and the shoreline station is windier than Hartford’s, with March the windiest month. Both speed evaporation from the tear film.`,
      },
      {
        q: 'Does Quell ship to Bridgeport, Connecticut?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Bridgeport and every other US address, with guest checkout and tracking by email. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-wilmington-de:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013781.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013781.csv
   *   (WILMINGTON NEW CASTLE CO AP, elev 24.1 m: annual precip 45.33 in; Jun 4.67
   *   wettest; Feb 2.83 driest; annual snow 20.2 in, Feb 7.8, Jan 6.1; Jul high 86.8 F;
   *   Jan high 41.4 F, low 25.6 F; 22.4 days at or above 90 F; 91.6 nights at or below
   *   32 F; 13.6 days with a high at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (WILMINGTON, DE, WBAN 13781: Apr 72/50 lowest afternoon, Mar 73/52, Feb 74/56,
   *   Sep 84/56, Dec 77/59, annual 78/55, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (WILMINGTON, DE annual 3.8, below Philadelphia 4.1; Mar 4.6 highest; Aug 3.1 lowest)
   * Elevation is the NOAA station elevation, converted (24.1 m is about 80 ft).
   */
  {
    slug: 'dry-eye-relief-wilmington-de',
    title: 'Dry eye relief in Wilmington, Delaware',
    description:
      'Wilmington’s April afternoons average 50 percent humidity and March is its windiest month. NOAA’s records, winter heat and practical dry eye relief.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Wilmington’s hardest months for dry eyes are late winter and early spring. NOAA’s records show March as the windiest month and April afternoons averaging 50 percent humidity, the lowest of the year, while about 92 freezing nights keep furnaces running from fall into spring. Aim heat away from your face, wear wraparound sunglasses on windy days, blink fully at screens, follow your drop’s label, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Wilmington’s climate, by NOAA' },
      {
        p: `NOAA’s station for Wilmington is New Castle County Airport, south of the city near New Castle and the Delaware River, at about 80 feet above sea level. Its 1991 to 2020 normals:`,
      },
      {
        list: [
          `45.33 inches of precipitation a year; June is the wettest month (4.67 inches) and February the driest (2.83).`,
          `About 20.2 inches of snow in a normal winter, with February (7.8) and January (6.1) the snowiest months.`,
          `January highs average 41.4°F and lows 25.6°F; about 14 days a year stay at or below freezing.`,
          `Roughly 92 nights a year reach 32°F or colder.`,
          `July highs average 86.8°F, and about 22 days a year reach 90°F.`,
        ],
      },
      { h: 'Heating season along the Brandywine' },
      {
        p: `With freezing nights common from late fall through March, Wilmington’s rowhouses, apartments and office towers run heat for a long stretch of the year. NOAA’s table gives December afternoons outdoors about 59 percent humidity, but heating that air indoors lowers its relative humidity sharply because no water is added. That’s why eyes can feel fine on a cold walk along the Riverfront and gritty an hour later at a desk.`,
      },
      {
        list: [
          `Set a humidifier in the bedroom and keep it clean as its maker directs.`,
          `Move your desk chair out of the line of a radiator or floor vent.`,
          `Use the floor setting on the car heater once the windows clear.`,
          `Take short screen breaks: the dry air and a low blink rate add together.`,
        ],
      },
      { h: 'Why are my eyes dry in Wilmington in spring?' },
      {
        p: `NOAA’s humidity table puts Wilmington’s April afternoons at 50 percent and March afternoons at 52, the two driest of the year, and its wind table makes March the windiest month (August is the calmest). Early spring often means mild, clear afternoons with a steady breeze, plus heat still running at night. Wind across the eye speeds evaporation from the tear film, so March and April are when wraparound sunglasses earn their keep at Rockford Park, on the Jack A. Markell Trail, or on a walk through Brandywine Park.`,
      },
      {
        p: `By comparison, NOAA’s wind table gives Wilmington a slightly lower yearly average than Philadelphia’s airport a short drive up Interstate 95. For more on how moving air affects the eye, see [dry air, wind and altitude](/guides/dry-air-wind-and-altitude).`,
      },
      { h: 'Office towers, labs and long commutes' },
      {
        p: `Much of downtown Wilmington works at screens in banking, law, insurance and chemistry labs, and many people ride Amtrak or SEPTA regional rail or drive I-95 at each end of the day. Long screen sessions slow blinking and leave blinks incomplete. Look out a window every 20 minutes, close your eyes fully a few times, and adjust any ceiling diffuser that blows onto your workstation. Our guide to [why eyes feel dry at the end of the day](/guides/dry-eyes-at-the-end-of-the-day) explains the pattern.`,
      },
      { h: 'Summer air conditioning' },
      {
        p: `July and August are humid outdoors in Wilmington, with NOAA’s table showing mornings in the high 70s to low 80s. The drying happens indoors, where air conditioning pulls moisture out of the air it cools. Keep vents pointed away from your face at work and in the car, and keep a fan from blowing directly at your eyes at night.`,
      },
      { h: 'What the label on Quell says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses on its Drug Facts panel read: {uses}. The directions read: {directions}. And: {doNotUse}.`,
      },
      {
        p: `Winter cold is the storage risk in Wilmington: {storage}. Keep a bottle in your coat or bag rather than the glove box in January. Every line of the panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Wilmington' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Wilmington, Newark, New Castle, Hockessin and everywhere else in the US. Checkout doesn’t need an account, shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking comes by email; no delivery date is promised. See the [Wilmington page](/eye-drops/wilmington-de) and the [Delaware page](/eye-drops/state/delaware), or [order on the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A lubricating drop eases ordinary dryness; it isn’t a substitute for an exam. The label says: {stopUse} Pain, blurry vision that doesn’t clear, or sudden sensitivity to light should go to an eye doctor. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers more.`,
      },
    ],
    faq: [
      {
        q: 'What is the windiest month in Wilmington, Delaware?',
        a: `March, according to NOAA’s wind table for New Castle County Airport. August is the calmest month, and the station’s yearly average is slightly lower than Philadelphia’s.`,
      },
      {
        q: 'How much snow does Wilmington, Delaware get?',
        a: `About 20.2 inches in a normal winter at New Castle County Airport, according to NOAA’s 1991 to 2020 normals. February is the snowiest month at 7.8 inches.`,
      },
      {
        q: 'Why do my eyes get dry in Wilmington, Delaware?',
        a: `Months of indoor heating dry the air at home and work, and early spring brings both the windiest month and the least humid afternoons in NOAA’s records. Each speeds evaporation from the tear film.`,
      },
      {
        q: 'Can I order Quell to Wilmington, Delaware?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Wilmington and the rest of the US, with guest checkout and tracking by email. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16/17 for can-i-use-my-hsa-for-my-adult-childs-eye-drops:
   * - https://www.irs.gov/publications/p969 (2025): HSA qualified medical expenses
   *   are those of you and your spouse, all dependents you claim, and any person you
   *   could have claimed except that the person filed a joint return, had gross income
   *   at or above the exemption amount, or you could be claimed as someone else’s
   *   dependent. Health FSA and HRA lists add "your child under age 27 at the end of
   *   your tax year". OTC medicine is medical care. Non-qualified HSA distributions are
   *   taxable plus an additional 20 percent tax, except after disability, age 65 or
   *   death. Records requirement. Family members may contribute to an eligible
   *   individual’s HSA; an eligible individual can’t be claimable as a dependent.
   * - https://www.irs.gov/publications/p501 (2025): qualifying child age test (under 19,
   *   or a student under 24, or any age if permanently and totally disabled).
   */
  {
    slug: 'can-i-use-my-hsa-for-my-adult-childs-eye-drops',
    title: 'Can I use my HSA for my adult child’s eye drops?',
    description:
      'Only if your adult child is your tax dependent, or would be but for a few IRS exceptions. How the HSA rule differs from a health FSA’s under-27 rule.',
    category: 'ordering',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Only if your adult child counts as your dependent. IRS Publication 969 limits HSA money to medical expenses for you, your spouse, dependents you claim, and a few people you could have claimed but for specific exceptions. Age alone doesn’t qualify a grown child for an HSA. A health FSA or HRA is different: Publication 969 also covers your child who is under 27 at the end of your tax year.`,
      },
      { h: 'Who an HSA can pay for' },
      {
        p: `Publication 969 lists the people whose qualified medical expenses an HSA can pay tax-free:`,
      },
      {
        list: [
          `You and your spouse.`,
          `All dependents you claim on your tax return.`,
          `Any person you could have claimed as a dependent, except that the person filed a joint return, had gross income at or above the exemption amount, or you (or your spouse, if filing jointly) could be claimed as a dependent on someone else’s return.`,
        ],
      },
      {
        p: `That third line matters for parents of grown children. An adult son or daughter you support might fail the dependent test only because they earned too much, and Publication 969 still lets your HSA cover them in that case. But if they fail a different test, such as support, the exception doesn’t apply. Over-the-counter medicine counts as medical care under the same publication, so lubricating eye drops like Quell fall under these rules, prescription or not.`,
      },
      { h: 'Is my adult child my dependent?' },
      {
        p: `IRS Publication 501 sets out the tests. For a qualifying child, the age test requires a child to be under 19 at the end of the year, under 24 at the end of the year and a student, or any age if permanently and totally disabled. There are also relationship, residency, support and joint-return tests. A grown child who doesn’t meet those can sometimes still be a qualifying relative, which comes with its own gross income and support tests.`,
      },
      {
        list: [
          `A 21-year-old full-time college student who lives at home part of the year is often a qualifying child.`,
          `A 25-year-old working full time and living alone usually isn’t a dependent at all.`,
          `An adult child with a permanent and total disability can be a qualifying child at any age.`,
        ],
      },
      {
        p: `These are general examples, not a ruling on your family. If you aren’t sure, your tax preparer or the IRS Interactive Tax Assistant can work through the tests with your numbers.`,
      },
      { h: 'Can I use my HSA for my adult children on my health plan?' },
      {
        p: `Not automatically. Many people keep a child on their health insurance until 26, and it’s easy to assume the HSA follows the same age. It doesn’t. Publication 969’s HSA list has no age-based line for children, so an adult child covered by your plan but not your dependent isn’t someone your HSA can pay for.`,
      },
      {
        p: `Health FSAs and HRAs work differently. Publication 969’s lists for those accounts add “your child under age 27 at the end of your tax year,” whether or not that child is your dependent. If you have a health FSA at work, it may be the account that can buy your 25-year-old’s eye drops, subject to your plan’s own rules.`,
      },
      { h: 'Can my adult child open their own HSA?' },
      {
        p: `Possibly. Publication 969 says an eligible individual can’t be claimable as a dependent on someone else’s return, and must meet the other requirements, such as coverage under a high deductible health plan. An adult child who qualifies can open an HSA in their own name, and the publication says family members or any other person may contribute on behalf of an eligible individual. Their HSA could then pay for their own eye drops.`,
      },
      { h: 'What happens if I use it anyway?' },
      {
        p: `An HSA distribution not used for qualified medical expenses is included in your income, and Publication 969 says you may owe an additional 20 percent tax on that amount. The additional tax doesn’t apply to distributions made after you become disabled, reach age 65, or die, though the amount is still taxable income. You also have to keep records showing each distribution paid or reimbursed a qualified medical expense.`,
      },
      {
        p: `If you aren’t sure whether your child qualifies, the simplest route is to pay with your own money and keep the receipt. Your plan administrator can tell you how it handles reimbursements.`,
      },
      { h: 'Ordering Quell for a grown child' },
      {
        list: [
          `Put their name and address in the shipping fields and your own email at checkout, so the receipt and tracking come to you.`,
          `Save the confirmation email; it shows the product, subtotal, shipping and total for your records.`,
          `Shipping is {shipping}, and {freeBottles} or more bottles ship free, which also keeps shipping off any claim.`,
          `Quell ships only within the US, and no delivery date is promised.`,
        ],
      },
      {
        p: `Whether a particular HSA card is accepted at checkout depends on the card and your plan; this site can’t confirm it ahead of time. More on the basics is in [Can I use HSA or FSA funds for eye drops?](/guides/hsa-fsa-and-eye-drops) and [why OTC eye drops count for HSA and FSA](/guides/why-otc-eye-drops-count-for-hsa-and-fsa). Ready to buy? [Order from the home page](/#buy).`,
      },
      { h: 'What the label says before you send it' },
      {
        p: `Your child should read the Drug Facts panel before using Quell. It lists the Uses as: {uses}. The directions: {directions}. The panel also carries this caution: {warnings}. The full panel is on the [Drug Facts page](/drug-facts). If they wear contact lenses or use other eye drops, the label doesn’t address that, so they should ask their eye doctor or pharmacist first.`,
      },
    ],
    faq: [
      {
        q: 'Can I use my HSA for my adult son or daughter?',
        a: `Only if they’re your dependent, or would be except for the exceptions IRS Publication 969 lists, such as having gross income at or above the exemption amount. Being on your health insurance isn’t enough.`,
      },
      {
        q: 'Does the age 26 rule apply to HSAs?',
        a: `No. Publication 969’s HSA rules have no age-based provision for children. Health FSAs and HRAs do cover your child who is under 27 at the end of your tax year, even if that child isn’t your dependent.`,
      },
      {
        q: 'Can I contribute to my adult child’s HSA?',
        a: `Publication 969 says family members or any other person may contribute on behalf of an eligible individual. Your child has to be eligible on their own, which includes not being claimable as someone else’s dependent.`,
      },
      {
        q: 'What if I used my HSA for someone who isn’t my dependent?',
        a: `The distribution counts as income, and Publication 969 says an additional 20 percent tax may apply unless you’re disabled, 65 or older, or the distribution follows your death. Ask your plan administrator how to handle it.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-16/17 for can-you-buy-a-gift-with-hsa-money:
   * - https://www.irs.gov/publications/p969 (2025): tax-free distributions are for
   *   qualified medical expenses of the account holder, spouse and dependents (plus the
   *   listed could-have-claimed exceptions); OTC medicine is medical care; non-qualified
   *   distributions are included in income with an additional 20 percent tax except after
   *   disability, age 65 or death; records requirement; expenses must be incurred after
   *   the HSA is established; distributions can pay or reimburse.
   */
  {
    slug: 'can-you-buy-a-gift-with-hsa-money',
    title: 'Can you buy a gift with HSA money?',
    description:
      'Usually not. HSA money pays tax-free only for you, your spouse and dependents. What IRS Publication 969 says, and how to give eye drops as a gift the right way.',
    category: 'ordering',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Not for most people on your gift list. IRS Publication 969 says HSA money is tax-free only when it pays qualified medical expenses for you, your spouse and your dependents (plus a few people you could have claimed). A gift for a friend, coworker or parent who isn’t your dependent is a non-qualified distribution: it’s taxable income and may carry an additional 20 percent tax. Pay for those gifts with regular money.`,
      },
      { h: 'Who HSA money can buy for' },
      {
        p: `Publication 969 lists the people whose medical expenses count: you and your spouse; all dependents you claim; and any person you could have claimed as a dependent except that they filed a joint return, had gross income at or above the exemption amount, or you could be claimed as someone else’s dependent. Over-the-counter medicine is medical care under the same publication, so eye drops qualify when they’re for one of those people.`,
      },
      {
        p: `So “gift” isn’t really the test. A bottle of eye drops wrapped under the tree for your husband is his medical expense, and your HSA can pay for it. The identical bottle for your sister, a close friend or your child’s teacher is not, unless that person is your dependent.`,
      },
      { h: 'Gifts that work with an HSA' },
      {
        list: [
          `Eye drops for your spouse, for a stocking or a holiday basket.`,
          `Eye drops for a child you claim as a dependent, even one away at college.`,
          `Eye drops for a parent you claim as a dependent.`,
          `A bottle for yourself, if you’re the one who keeps borrowing the gift.`,
        ],
      },
      {
        p: `Keep the receipt either way. Publication 969 says you must keep records showing that distributions paid or reimbursed qualified medical expenses, that the expense wasn’t paid from another source, and that it wasn’t taken as an itemized deduction.`,
      },
      { h: 'Can you buy a gift card with an HSA?' },
      {
        p: `Publication 969 doesn’t list gift cards anywhere among qualified medical expenses, and a gift card isn’t medicine or medical care. Using HSA money on one would be a distribution that doesn’t pay a qualified medical expense, with the tax consequences below. If you want to give someone credit toward eye drops, use your own money.`,
      },
      { h: 'What happens if HSA money buys a gift for someone else' },
      {
        p: `Publication 969 is direct about it. A distribution that isn’t used for qualified medical expenses is included in your income and reported on Form 8889. You may also owe an additional 20 percent tax on the taxable amount. That extra tax doesn’t apply to distributions made after you become disabled, reach age 65, or die, but the amount is still income.`,
      },
      {
        list: [
          `Example: you buy three bottles with your HSA card, keep one, and give two to coworkers. The two given away aren’t qualified expenses.`,
          `If your plan allows it, ask the administrator how to put the money back or record the purchase correctly.`,
          `Otherwise, report it with your return as the publication describes, or ask a tax preparer.`,
        ],
      },
      { h: 'Reimbursing yourself instead' },
      {
        p: `Publication 969 lets you take a tax-free distribution to pay or reimburse qualified medical expenses incurred after your HSA was established. That gives you a clean way to split a mixed order: pay for the whole order with a regular card, then reimburse yourself from the HSA only for the bottles that are for you, your spouse or your dependents. The receipt from the order supports the claim.`,
      },
      {
        p: `Shipping can blur the math. Orders of {freeBottles} or more bottles ship free, which takes the shipping question off the table. Below that, shipping is {shipping}; whether your plan counts it as part of the expense is a question for the administrator.`,
      },
      { h: 'Giving Quell as a gift' },
      {
        p: `Quell is an over-the-counter lubricating eye drop. To send one as a gift, enter the recipient’s name and address in the shipping fields and your own email, so the confirmation and tracking come to you. There’s no gift wrap or gift message, and no delivery date is promised, so order early in December. [How to send Quell as a gift](/guides/sending-quell-as-a-gift) walks through it, and [are eye drops a good gift?](/guides/are-eye-drops-a-good-gift) covers when they make sense.`,
      },
      {
        p: `If the person doesn’t want it, unopened bottles can be refunded within {returnDays} days of delivery without being sent back. Buyers must be 18 or older, and orders ship only within the US.`,
      },
      { h: 'What the recipient should read' },
      {
        p: `Whoever receives it should read the Drug Facts panel first. The Uses: {uses}. The directions: {directions}. And one caution worth passing along: {warnings}. Every section is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Can you buy a gift card with an HSA card?',
        a: `IRS Publication 969 doesn’t list gift cards among qualified medical expenses, and a gift card isn’t medicine or care, so HSA money spent on one would likely be taxable and may face an additional 20 percent tax. Use your own money for gift cards.`,
      },
      {
        q: 'Can I buy eye drops for my friend with my HSA?',
        a: `Not tax-free, unless your friend is your dependent. Publication 969 covers expenses for you, your spouse and your dependents, plus a few people you could have claimed as dependents.`,
      },
      {
        q: 'Can I use my HSA to buy eye drops as a gift for my spouse?',
        a: `Yes. Your spouse is one of the people Publication 969 lists, and over-the-counter medicine counts as medical care, so eye drops for your spouse are a qualified expense even when wrapped as a gift.`,
      },
      {
        q: 'What is the penalty for using HSA money on something that isn’t medical?',
        a: `The amount is added to your income, and Publication 969 says an additional 20 percent tax may apply. That extra tax doesn’t apply after you’re disabled, turn 65, or die.`,
      },
    ],
  },
  /*
   * General tear-film facts as already on the site; label via tokens. No external
   * figures used.
   */
  {
    slug: 'dry-eyes-in-winter-symptoms',
    title: 'Dry eyes in winter: symptoms and what helps',
    description:
      'Gritty, burning, tired or watery eyes that get worse indoors are the usual winter signs. How winter air thins the tear film, and when to see a doctor.',
    category: 'seasonal',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Dry eyes in winter usually feel gritty, scratchy or burning, look tired, and often water when you step into cold wind. Many people notice blur that clears after a blink and eyes that feel worse by evening in a heated room. These come from the tear film evaporating faster in dry, heated or windy air. Pain, vision changes or symptoms that won’t settle need an eye doctor.`,
      },
      { h: 'How winter dry eyes feel' },
      {
        p: `People describe the same sensations in different words. Here are the ones that come up most during the heating months:`,
      },
      {
        list: [
          `A gritty or sandy feeling, as if there’s something in the eye that isn’t there.`,
          `Burning or stinging, often stronger at the end of the day.`,
          `Heavy, tired eyelids, especially after reading or screen work.`,
          `Watering that seems to contradict the dryness, usually outdoors in cold wind.`,
          `Brief blur that sharpens after a few blinks.`,
          `Eyes that feel uncomfortable on waking in a heated bedroom.`,
          `Discomfort that worsens in the car with the heater on.`,
        ],
      },
      {
        p: `A symptom list like this is for describing what you feel, not for naming a cause. Our [self-check](/self-check) can help organize it before you talk to an eye doctor; it’s not a diagnosis.`,
      },
      { h: 'Why winter air does this' },
      {
        p: `The tear film is a thin coating on the front of the eye with three layers: an oily outer layer, a watery middle layer, and a mucus layer that helps tears stick to the surface. The oil layer slows evaporation of the water beneath it. Each blink spreads a fresh coat across the eye.`,
      },
      {
        p: `Cold outdoor air holds little moisture. When it’s brought inside and heated, nothing adds water to it, so the indoor air becomes much drier. Dry air, wind and moving heated air all speed evaporation from the tear film, and that’s why winter dryness tends to build indoors rather than outside. For the layer-by-layer picture, see [what is the tear film?](/guides/what-is-the-tear-film).`,
      },
      { h: 'Why do my eyes water when they’re dry?' },
      {
        p: `It sounds backward, but watering is common. When the surface of the eye gets irritated by dryness or cold wind, the eyes can respond with a flush of watery tears. Those reflex tears run off quickly and don’t stay spread across the eye the way a balanced tear film does, so the eyes can water and still feel dry a few minutes later. Watering that continues for days, or comes with pain or discharge, is a reason to see an eye doctor.`,
      },
      { h: 'When winter symptoms tend to show up' },
      {
        list: [
          `Mid-afternoon in a heated office, after hours at a screen with fewer blinks.`,
          `On a commute with the car heater blowing toward your face.`,
          `On waking, after a night in a warm, closed bedroom.`,
          `Outdoors in wind, when eyes water and sting at the same time.`,
          `On a flight, where cabin air is dry.`,
        ],
      },
      { h: 'Small changes that help' },
      {
        list: [
          `Run a humidifier in the bedroom and clean it as its maker directs.`,
          `Turn car and office vents so warm air goes toward your body or the floor.`,
          `Every 20 minutes at a screen, look across the room and blink fully a few times.`,
          `Wear wraparound sunglasses or goggles in cold wind.`,
          `Lower the thermostat a degree or two; air heated less loses less relative humidity.`,
        ],
      },
      {
        p: `Our guides to [waking up with dry eyes in winter](/guides/waking-up-with-dry-eyes-in-winter) and [dry eyes in a heated office](/guides/dry-eyes-in-a-heated-office) go deeper on two of the most common situations.`,
      },
      { h: 'What a lubricating drop’s label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel states the Uses: {uses}. The directions: {directions}. Read the warnings section as well: {warnings}.`,
      },
      {
        p: `In winter, the storage line deserves a look, since a bottle in a cold car can end up outside the range: {storage}. The label doesn’t give directions for contact lens wearers, children, or use alongside other eye drops, so ask an eye doctor or pharmacist in those cases. Every section is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When winter dryness needs an eye doctor' },
      {
        p: `Seasonal dryness is common; some symptoms are not part of it. The label’s stop-use line reads: {stopUse} Beyond that, see an eye doctor for:`,
      },
      {
        list: [
          `Eye pain, rather than discomfort.`,
          `Vision that stays blurry after blinking.`,
          `New sensitivity to light.`,
          `Discharge, or one eye that’s much worse than the other.`,
          `Symptoms that keep coming back every winter despite the changes above.`,
        ],
      },
      {
        p: `Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has more.`,
      },
    ],
    faq: [
      {
        q: 'What do dry eyes feel like in winter?',
        a: `Most people describe gritty, scratchy or burning eyes that feel tired, often worse by evening in a heated room. Watering in cold wind and brief blur that clears with a blink are common too.`,
      },
      {
        q: 'Is it normal for dry eyes to water in winter?',
        a: `Irritation from dryness or cold wind can trigger a flush of reflex tears. Those run off quickly instead of spreading as a stable tear film, so eyes can water and still feel dry soon after.`,
      },
      {
        q: 'Can cold weather make your eyes dry?',
        a: `Winter makes the conditions for it: cold air holds little moisture, and heating it indoors makes it drier still. Dry, heated or windy air speeds evaporation from the tear film.`,
      },
      {
        q: 'When should I see a doctor for dry eyes in winter?',
        a: `See an eye doctor for eye pain, vision that stays blurry, light sensitivity, discharge, or symptoms that persist. Quell’s label adds its own line: {stopUse}`,
      },
    ],
  },
  /*
   * General tear-film facts as already on the site; label via tokens. Heating advice
   * is practical and general (vents, deflectors, humidifiers maintained per maker,
   * asking an HVAC technician); no product or efficiency figures stated.
   */
  {
    slug: 'dry-eyes-from-forced-air-heat',
    title: 'Dry eyes from forced-air heat',
    description:
      'A furnace blowing warm, dry air through floor and ceiling vents can dry your eyes fast. Where to sit and sleep, vent fixes, and what a lubricating drop covers.',
    category: 'seasonal',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Yes, forced-air heat can dry your eyes. A furnace or heat pump warms indoor air without adding moisture, then a blower pushes that drier air through ducts and out of registers, often right across a bed, couch or desk. Dry air plus moving air speeds evaporation from the tear film. Redirect the registers, keep your face out of the airflow, add humidity, and use a lubricating drop as its label directs.`,
      },
      { h: 'How a forced-air system dries the room' },
      {
        p: `Most American homes with central heating use forced air: a furnace or heat pump heats air, a blower moves it through ductwork, and it comes out of registers in floors, walls or ceilings, then returns through a larger return grille. Two things about that setup matter for your eyes.`,
      },
      {
        list: [
          `Heated air holds more moisture than cold air, so when winter air is warmed without water being added, its relative humidity drops.`,
          `The blower doesn’t just warm the room; it creates a stream of moving air at each register, and moving air pulls moisture off the eye faster than still air.`,
        ],
      },
      {
        p: `A radiator or a space heater dries the air too, but a ducted system adds that steady current. Our separate guides cover [winter heating in general](/guides/winter-heating-and-dry-eyes) and [space heaters](/guides/dry-eyes-from-a-space-heater); this one is about the vents.`,
      },
      { h: 'Dry eyes from central heating: where the air hits you' },
      {
        p: `Walk your home with the heat running and hold a hand near each register. You’ll find the spots where warm air rises past a pillow, a recliner or a home office chair. Those are the places where eyes dry out fastest.`,
      },
      {
        list: [
          `A floor register under a window beside the bed sends air up across your face as you sleep.`,
          `A ceiling diffuser above a desk pours air down over your eyes while you look at a screen.`,
          `A wall register behind a couch blows across the backs of heads and into eyes when you turn.`,
          `In a basement office, low wall vents often sit right at chair height.`,
        ],
      },
      { h: 'Fixes for registers near beds and desks' },
      {
        list: [
          `Turn adjustable register louvers so air goes along the wall or toward the middle of the room, not toward your face.`,
          `Use a clip-on or magnetic register deflector to angle floor air away from a bed or chair.`,
          `Move the bed’s headboard or the desk a few feet away from a register if the room allows it.`,
          `Don’t block a register completely with furniture or a rug; ask an HVAC technician before closing vents, since some systems need that airflow.`,
          `Keep curtains from draping over floor registers, where they can funnel air upward.`,
        ],
      },
      { h: 'Thermostat setbacks and blower cycles' },
      {
        p: `Programmable and smart thermostats often lower the temperature at night or while you’re out, then bring it back up. Recovering from a setback can mean the blower runs for a long stretch, and that’s often when you wake up or sit down at a desk. If your eyes feel driest in the first hour of the morning or after you come home, look at what the system is doing at those times.`,
      },
      {
        list: [
          `Try a smaller setback so recovery cycles are shorter.`,
          `Time the morning warm-up to finish before you wake, so the blower isn’t running across your pillow.`,
          `Check whether the fan is set to “on” instead of “auto”; a fan set to run continuously keeps air moving even when it isn’t heating.`,
          `A slightly lower setpoint overall means air heated less, which loses less relative humidity.`,
        ],
      },
      { h: 'Adding moisture back' },
      {
        p: `A portable humidifier in the bedroom is the simplest step; clean and refill it as its maker directs, because a neglected tank is worse than none. Some forced-air systems can have a whole-house humidifier installed on the furnace; that’s a question for an HVAC technician, including how to keep it maintained. Either way, a basic hygrometer, an inexpensive humidity gauge, shows whether the change is doing anything.`,
      },
      { h: 'Habits that help the tear film' },
      {
        list: [
          `Blink fully, especially at screens, where blinks get fewer and shallower.`,
          `Every 20 minutes, look at something across the room for a few seconds.`,
          `Point the car heater toward your feet once the windshield clears.`,
          `Don’t sleep with a fan pointed at your face to even out the heat.`,
        ],
      },
      {
        p: `Why blinking matters so much is covered in [how blinking spreads tears](/guides/how-blinking-spreads-tears).`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, the kind of loss that dry, moving air speeds up. From its Drug Facts panel, the Uses: {uses}. Directions: {directions}.`,
      },
      {
        p: `Don’t store the bottle on top of a register or near the furnace. The label’s storage line reads: {storage}. Read the whole panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When it’s more than the furnace' },
      {
        p: `If your eyes stay uncomfortable after you’ve fixed the airflow and added humidity, the heat may not be the whole story. The label says: {stopUse} Pain, changes in vision, or light sensitivity are reasons to see an eye doctor; [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists more.`,
      },
    ],
    faq: [
      {
        q: 'Can central heating cause dry eyes?',
        a: `It can contribute. Central heating warms air without adding moisture, and a forced-air system blows that drier air out of registers, which speeds evaporation from the tear film.`,
      },
      {
        q: 'Is it bad to sleep next to a heat vent?',
        a: `A register that blows across your pillow keeps dry, moving air on your face for hours. Angle the louvers, add a deflector, or move the bed a few feet away if your eyes feel dry on waking.`,
      },
      {
        q: 'Does a furnace humidifier help dry eyes?',
        a: `Adding moisture to heated air can make a room less drying. Whether a whole-house humidifier suits your furnace, and how to maintain it, is a question for an HVAC technician.`,
      },
      {
        q: 'Should the furnace fan be on or auto for dry eyes?',
        a: `On “auto,” the fan runs only while heating. On “on,” air keeps moving even between heating cycles, so if registers blow toward you, auto usually means less moving air on your eyes.`,
      },
    ],
  },
  /*
   * No external facts. Gift mechanics from /guides/sending-quell-as-a-gift (no gift
   * wrap, no message box, recipient address plus buyer email). Christmas 2026 falls on
   * a Friday (calendar).
   */
  {
    slug: 'christmas-gifts-for-a-knitter-or-quilter',
    title: 'Christmas gifts for a knitter or quilter',
    description:
      'Gift ideas for a knitter or quilter who spends long evenings on close work: better light, comfort, break reminders, and a small eye-drop add-on.',
    category: 'seasonal',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Good Christmas gifts for a knitter or quilter make long hours of close work more comfortable: a bright, adjustable task lamp, a magnifier for fine stitches, quality tools they’d never buy themselves, a cozy project bag, or yarn and fabric from a local shop. Since hours of focus lower the blink rate, a bottle of lubricating eye drops like Quell is a small, practical add-on.`,
      },
      { h: 'Why close work tires the eyes' },
      {
        p: `Counting stitches, reading a chart or lining up quilt points takes steady focus at close range. People blink less when they concentrate, and many of those blinks don’t fully close. Each blink spreads a fresh layer of tears, so fewer blinks give the tear film more time to thin. In a heated living room on a winter evening, that dry air speeds the process. That’s why so many crafters say their eyes feel tired before their hands do. Our guide to [dry eyes when sewing or knitting](/guides/dry-eyes-when-sewing-or-knitting) covers the habits side.`,
      },
      { h: 'Gifts for better light' },
      {
        list: [
          `A floor or clamp-on task lamp with an adjustable arm, so light falls on the work instead of in their eyes.`,
          `A lamp with adjustable brightness and color temperature, useful for matching fabric colors at night.`,
          `A light box or light pad for a quilter tracing appliqué or quilting designs.`,
          `A rechargeable neck light for knitting in a recliner or during travel.`,
        ],
      },
      {
        p: `Good light reduces squinting, and a squint tends to come with fewer, shallower blinks. Placement matters: a lamp to the side, rather than directly in front, keeps glare off glossy needles and pressed fabric.`,
      },
      { h: 'Christmas ideas for a quilter' },
      {
        list: [
          `A fresh rotary cutter, replacement blades and a larger cutting mat.`,
          `Clear quilting rulers in sizes they don’t own yet.`,
          `A gift card to the local quilt shop for fabric they’ll choose themselves.`,
          `A design wall, so they can step back and look at a layout from across the room instead of bending over a table.`,
          `A class or retreat registration, if their guild runs one.`,
        ],
      },
      { h: 'Good gifts for knitters' },
      {
        list: [
          `An interchangeable needle set in a material they like.`,
          `Locking stitch markers, a row counter, and a small notions pouch.`,
          `A yarn bowl, so the ball doesn’t roll away mid-row.`,
          `A skein of special yarn from a local dyer or fiber festival.`,
          `A magnetic chart keeper with a line magnifier for lace or colorwork charts.`,
        ],
      },
      { h: 'What to get a crafter who has everything' },
      {
        p: `Comfort gifts tend to land well with experienced crafters: a supportive chair cushion, a lap desk for chart reading, a small humidifier for the craft room, or a timer they can set to stand up and look across the room every 20 minutes. Pair a timer with a note encouraging a few slow, full blinks at each break, and you’ve given them a habit as well as an object.`,
      },
      { h: 'Adding Quell as a small extra' },
      {
        p: `Quell is a {size} bottle of over-the-counter lubricating eye drops, designed to reinforce the tear film’s oil layer to help reduce moisture loss. It fits in a project bag or notions pouch. The Drug Facts panel lists its Uses as: {uses}, and its directions as: {directions}.`,
      },
      {
        p: `Before giving it, check one line on the label: {warnings}. If the person wears contact lenses or uses other eye drops, the label doesn’t cover those situations; they should ask their eye doctor or pharmacist. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'How to send it in time for Christmas' },
      {
        list: [
          `Christmas Day 2026 is a Friday. No delivery date is promised, so order in early December rather than the last week.`,
          `Shipping is {shipping}; {freeBottles} or more bottles ship free, which works if you’re buying for a whole knitting circle.`,
          `Put their name and address in the shipping fields and your email in the email field, so tracking comes to you.`,
          `There’s no gift wrap or message option; to wrap it yourself, ship it to your own address first.`,
          `If they’d rather not have it, unopened bottles can be refunded within {returnDays} days of delivery without being sent back.`,
        ],
      },
      {
        p: `The step-by-step version is in [how to send Quell as a gift](/guides/sending-quell-as-a-gift). When you’re ready, [order from the home page](/#buy).`,
      },
      { h: 'When eye strain isn’t just strain' },
      {
        p: `Tired eyes after a long evening of stitching are common. Eye pain, double vision, or blur that stays after resting are different and belong with an eye doctor. Quell’s label is specific about when to stop: {stopUse} Our guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists more.`,
      },
    ],
    faq: [
      {
        q: 'What is a good Christmas gift for a quilter?',
        a: `Practical upgrades go over well: a new rotary cutter and blades, larger rulers, a light box, a design wall, or a gift card to their quilt shop. A good task lamp helps with long evenings of close work.`,
      },
      {
        q: 'What do you buy a knitter who has everything?',
        a: `Try comfort and light rather than more tools: an adjustable task lamp, a chart keeper with a magnifier, a cushion, or a skein from a local dyer. A bottle of lubricating eye drops makes a small add-on.`,
      },
      {
        q: 'Is a lamp a good gift for someone who knits?',
        a: `Yes. Adjustable light placed to the side reduces glare and squinting during close work, and dimmable or color-adjustable lamps help with matching yarn and fabric colors at night.`,
      },
      {
        q: 'When should I order Quell to arrive by Christmas 2026?',
        a: `Order in early December. Christmas 2026 falls on a Friday, and no delivery date is promised, so give the package extra time during the holiday rush.`,
      },
    ],
  },
  /*
   * General tear-film facts as already on the site; label via tokens. No MSHA or
   * other regulatory statements: the guide defers to each mine’s own rules.
   */
  {
    slug: 'dry-eyes-for-miners',
    title: 'Dry eyes for miners',
    description:
      'Ventilation air, rock and coal dust, cap-lamp glare and 10- or 12-hour shifts all strain the tear film. Practical dry eye steps for miners, above and below.',
    category: 'using',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Miners get dry eyes from the job’s conditions: ventilation air moving steadily through the workings, fine rock or coal dust, cap-lamp glare, and long shifts with intense focus that cut blinking. Protective eyewear that blocks moving air and dust, rinsing grit out rather than rubbing it, deliberate blink breaks, and a lubricating drop used as its label directs, between tasks and in a clean spot, all help.`,
      },
      { h: 'Why mine air dries the eyes' },
      {
        p: `The tear film is a thin layer with three parts: an oily outer layer that slows evaporation, a watery middle, and a mucus layer against the eye. Moving air pulls moisture from that film faster than still air. Underground, ventilation is constant by design: fans push air along entries, drifts and headings so the workings stay breathable. Standing in an airway can mean hours of steady breeze across your face.`,
      },
      {
        p: `Surface mines bring their own version: open pits and haul roads where wind meets the dust kicked up by trucks and loaders. In a quarry or a strip operation, the same principle applies, with sun and glare added.`,
      },
      { h: 'Dust and grit' },
      {
        p: `Drilling, blasting, cutting, crushing and hauling put fine particles in the air. Dust on the surface of the eye scratches and stings, and the reflex to rub it in is strong. A few habits keep it from getting worse:`,
      },
      {
        list: [
          `Wear the protective eyewear your mine requires, and choose a style with side shields or a closer fit if you’re allowed options.`,
          `If grit gets in, don’t rub. Use the eyewash station or clean water and let the eye flush.`,
          `Wash dust off your face, brows and lashes before touching around your eyes at the end of a shift.`,
          `Keep safety glasses clean; scratched or dusty lenses make you squint, and squinting tends to mean fewer full blinks.`,
        ],
      },
      { h: 'Cap lamps, glare and darkness' },
      {
        p: `Working by cap lamp means your eyes spend the shift adjusting between bright beam and deep shadow, and reflective surfaces like wet rock, equipment and signage throw glare back. People tend to stare and squint under those conditions. Look away from the beam’s reflection when you can, and use natural pauses, such as waiting on a load or a scoop, to close your eyes fully a few times.`,
      },
      { h: 'Long shifts and close focus' },
      {
        p: `Ten- and twelve-hour shifts are common in mining, and much of the work demands sustained focus: running a continuous miner or a bolter, watching a roof, monitoring panels in a control room. The longer and harder you concentrate, the less you blink. Fewer blinks give the tear film more time to thin. [Why eyes feel dry at the end of the day](/guides/dry-eyes-at-the-end-of-the-day) explains why dryness often peaks late in a shift.`,
      },
      {
        list: [
          `At each break, look into the distance (or across the dinner hole) and blink slowly ten times.`,
          `On the ride out, close your eyes for part of the trip if you’re a passenger.`,
          `In the bathhouse, rinse your face before handling any eye drops.`,
        ],
      },
      { h: 'Using eye drops on a mining shift' },
      {
        p: `Your mine’s rules decide what you can carry underground and where; follow them. If personal eye drops are allowed, a few precautions matter more in a dusty workplace than anywhere else:`,
      },
      {
        list: [
          `Wash or wipe your hands before you touch the bottle, and do it somewhere relatively clean, like a lunch area, not at the face.`,
          `Remove dust from around your eyes first so you don’t wash it in.`,
          `Follow the label’s handling rule every time: {tip}.`,
          `Keep the bottle in a sealed pocket or bag so grit doesn’t collect on the cap.`,
          `Never put in drops while operating equipment; stop, park and secure first.`,
        ],
      },
      {
        p: `Temperature matters for storage. Deep workings can run warm, surface mines see summer heat and winter cold, and a truck parked at the portal swings both ways. The label says: {storage}.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, the loss that moving mine air speeds up. Its Drug Facts panel lists the Uses: {uses}. The directions: {directions}. A caution before using it: {warnings}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      {
        p: `The label doesn’t give directions for contact lenses or for use with other eye drops; ask your eye doctor or pharmacist about either.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Something stuck in the eye that rinsing doesn’t clear, a scratch, pain, or vision changes after a shift needs medical attention, and if it happens at work, report it and follow your mine’s first-aid procedures. The label also says: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists more.`,
      },
      { h: 'Ordering Quell' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, including mining towns far from a pharmacy. Check out as a guest; shipping is {shipping}, and {freeBottles} or more bottles ship free, which suits a crew splitting an order (each person should have their own bottle). No delivery date is promised. [Order from the home page](/#buy), or browse more [guides on using drops at work](/guides/topic/using).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working in a mine?',
        a: `Ventilation keeps air moving through the workings, dust irritates the eye’s surface, and long, focused shifts reduce blinking. Each speeds evaporation from the tear film.`,
      },
      {
        q: 'What should a miner do if coal dust gets in their eye?',
        a: `Don’t rub it. Flush with an eyewash station or clean water, and if the grit won’t clear or the eye hurts, report it and get medical help as your mine’s procedures require.`,
      },
      {
        q: 'Can miners carry eye drops underground?',
        a: `That depends on your mine’s rules about what can be taken underground. Where allowed, keep the bottle sealed against dust and use it only with clean hands in a clean spot.`,
      },
      {
        q: 'Does a cap lamp cause eye strain?',
        a: `Working by cap lamp means constant adjusting between bright light and shadow, plus glare off wet rock and equipment. People tend to stare and squint, which lowers how often they blink fully.`,
      },
    ],
  },
  /*
   * General tear-film facts as already on the site; label via tokens. No OSHA, NFPA or
   * ANSI rules stated; PPE is left to the employer’s requirements.
   */
  {
    slug: 'dry-eyes-for-electricians',
    title: 'Dry eyes for electricians',
    description:
      'Hot attics, insulation dust, crawlspaces and close panel work dry and irritate electricians’ eyes. What helps on the job, and when to use drops safely.',
    category: 'using',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Electricians’ eyes dry out from the places the work goes: hot, dusty attics, drafty crawlspaces, insulation fibers, and long stretches of close focus at panels and junction boxes. Wear sealed or side-shielded safety glasses, keep fiber and dust off your face, blink deliberately during detail work, and only put in a lubricating drop once you’re down off the ladder and your hands are clean.`,
      },
      { h: 'Attics: heat, dust and insulation' },
      {
        p: `Running a new circuit through an attic means crawling over joists in air that, in summer, can be far hotter than the rooms below, with loose-fill or batt insulation everywhere. Heat and dry air speed evaporation from the tear film, and insulation fibers and attic dust that land on the eye scratch and sting. Rubbing pushes fibers in further.`,
      },
      {
        list: [
          `Wear safety glasses with side shields, or goggles if fibers are flying, before you go through the hatch.`,
          `A brimmed cap worn backward keeps fiber from drifting down from rafters onto your face while you look up.`,
          `Work attics early in summer, when they’re coolest.`,
          `Come down to rinse grit out with clean water rather than rubbing in the heat.`,
        ],
      },
      { h: 'Crawlspaces and basements' },
      {
        p: `Crawlspaces swap heat for drafts, dirt and cobwebs at face level. A foundation vent or an open access door can push a steady draft across you while you’re lying on your back pulling wire. Drafts dry the eyes the same way wind does. Position yourself so air hits your shoulder rather than your face, keep glasses on even when they fog, and wipe your face before you come out.`,
      },
      { h: 'Close focus at panels and devices' },
      {
        p: `Landing conductors, reading small print on breakers, stripping fine wire and testing at a panel all demand fixed, close attention. People blink less when they concentrate, and many blinks during detail work are partial. The tear film thins between blinks, so eyes feel dry and tired by mid-afternoon, especially in a cold commercial building with ducted air.`,
      },
      {
        list: [
          `After landing a set of conductors, look away to something across the room for a few seconds.`,
          `Close your eyes fully three or four times when you step back from the panel.`,
          `Use a good headlamp or work light so you aren’t squinting into a dark box.`,
          `Keep safety glasses clean; smudged lenses add squinting.`,
        ],
      },
      { h: 'Ladders and lifts: drops only on the ground' },
      {
        p: `Putting in an eye drop means tilting your head back, taking one hand off whatever you’re holding, and blinking with blurry vision for a moment. None of that belongs on a ladder, a scaffold or a lift platform, or anywhere near energized equipment.`,
      },
      {
        list: [
          `Finish the task, climb down, and step away from the work area.`,
          `De-energize or close up anything you were working on, following your company’s procedures.`,
          `Clean your hands; wire, copper dust and pulling lubricant shouldn’t end up near your eyes.`,
          `Put in the drop, then wait until your vision is clear before going back up.`,
        ],
      },
      { h: 'Truck, tools and storage' },
      {
        p: `A work van in summer or winter can run well outside the range on the label: {storage}. Keep the bottle in a lunch bag or jacket, not on the dash or in a toolbox in the sun. Don’t store it with oils, solvents or wire-pulling lubricant, and follow the label’s handling rule: {tip}.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses on its Drug Facts panel: {uses}. The directions: {directions}. And a caution to read: {warnings}. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      {
        p: `If you wear contact lenses or use other eye drops, the label doesn’t cover that, so check with your eye doctor or pharmacist first. Our guide to [how to put in eye drops without flinching](/guides/how-to-put-in-eye-drops-without-flinching) helps if you’re new to drops.`,
      },
      { h: 'Injuries need more than a drop' },
      {
        p: `A fiber or metal fleck that won’t rinse out, a scratch, pain, light sensitivity, or any eye exposure during an electrical incident needs medical care, and you should report it at work. A lubricating drop isn’t first aid for injuries. The label’s stop-use line: {stopUse} See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
      { h: 'Ordering' },
      {
        p: `Quell ships from Brentwood, Tennessee, anywhere in the US. Guest checkout is available, shipping is {shipping}, and {freeBottles} or more bottles ship free, handy for keeping one in the van and one at home. No delivery date is promised. [Order here](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'Why do electricians get dry eyes?',
        a: `The work moves through hot, dusty attics, drafty crawlspaces and long stretches of close panel focus. Heat, dry air and drafts speed evaporation from the tear film, fibers irritate the surface, and concentration cuts blinking.`,
      },
      {
        q: 'What should I do if insulation gets in my eye?',
        a: `Don’t rub. Get down to a safe spot and flush with clean water or an eyewash. If it won’t clear, or the eye hurts or your vision changes, get medical care and report it at work.`,
      },
      {
        q: 'Can I use eye drops while on a ladder?',
        a: `Don’t. Climb down, step away from the work, clean your hands, then put in the drop and wait until your vision clears before going back up.`,
      },
      {
        q: 'Why do my eyes get tired doing panel work?',
        a: `Close, fixed focus lowers how often you blink, and many blinks during detail work don’t fully close. Look away and blink fully when you step back from the panel.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for are-eye-drops-tsa-compliant:
   * - https://www.tsa.gov/travel/security-screening/liquids-aerosols-gels-rule
   *   (quart-sized bag; containers 3.4 ounces / 100 milliliters or less per item;
   *   larger containers in checked baggage; items that alarm need additional screening)
   * - https://www.tsa.gov/travel/security-screening/whatcanibring/items/medications-liquid
   *   (larger amounts of medically necessary liquids allowed in reasonable quantities
   *   for the trip, declared to TSA officers for inspection; checked bags: yes; the
   *   final decision rests with the TSA officer)
   * {size} is .33 fl oz (10 mL).
   */
  {
    slug: 'are-eye-drops-tsa-compliant',
    title: 'Are eye drops TSA compliant?',
    description:
      'Yes. A {size} bottle of eye drops is well under TSA’s 3.4 ounce limit, and larger medical liquids are allowed if declared. The rules, explained.',
    category: 'using',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Yes. Eye drops in a container of 3.4 ounces (100 milliliters) or less meet TSA’s liquids rule and can go in your quart-sized bag in a carry-on. A bottle of Quell holds {size}. TSA also allows larger amounts of medically necessary liquids in reasonable quantities if you declare them at the checkpoint. The TSA officer makes the final call on any item.`,
      },
      { h: 'What TSA’s liquids rule says' },
      {
        p: `On tsa.gov, the liquids, aerosols and gels rule allows each traveler a quart-sized bag of liquids, aerosols, gels, creams and pastes in a carry-on, with each container holding 3.4 ounces (100 milliliters) or less. Containers larger than that go in checked baggage, unless an exemption applies. Any liquid that alarms during screening gets additional screening.`,
      },
      {
        p: `Note that the limit is about the container’s size, not how much is left inside. A large bottle that’s nearly empty still counts as a large bottle.`,
      },
      { h: 'Do eye drops count as liquid for TSA?' },
      {
        p: `Yes. Eye drops are a liquid, so they follow the liquids rule. In practice that rarely causes trouble, because nearly all over-the-counter eye drops come in small bottles. Quell’s {size} bottle is a small fraction of the 3.4 ounce limit, so it fits in the quart bag alongside toothpaste and travel-size toiletries.`,
      },
      { h: 'Are eye drops TSA approved?' },
      {
        p: `TSA doesn’t approve products. It screens items at the checkpoint against its rules. “TSA compliant” or “TSA-friendly” on a package just means the container is 3.4 ounces or smaller. Whether a particular item goes through is up to the officer: TSA’s medications page says the final decision rests with the TSA officer.`,
      },
      { h: 'The medically necessary liquids exception' },
      {
        p: `TSA’s page on liquid medications says larger amounts of medically necessary liquids, gels and aerosols are allowed in reasonable quantities for your trip, but you must declare them to TSA officers at the checkpoint for inspection. That exception matters for people carrying a large prescription bottle or several medications at once.`,
      },
      {
        list: [
          `Tell the officer at the start of screening that you have medically necessary liquids.`,
          `Keep them separate from the quart bag so they’re easy to inspect.`,
          `Expect that they may get additional screening.`,
          `Bring only what’s reasonable for the length of the trip.`,
        ],
      },
      {
        p: `With small bottles like Quell’s, you usually don’t need the exception at all: they fit the standard rule. If your quart bag is already full, though, declaring eye drops as medically necessary is an option TSA describes.`,
      },
      { h: 'Carry-on or checked bag?' },
      {
        p: `TSA’s medications page lists liquid medications as allowed in both carry-on and checked bags. A carry-on is usually more practical for eye drops, since cabin air is dry and you can reach the bottle during the flight. A checked bag can sit in a cold cargo hold or a hot tarmac cart, and it can be delayed. The label’s storage line is the one to keep in mind: {storage}.`,
      },
      { h: 'Packing eye drops for a flight' },
      {
        list: [
          `Put the bottle in your quart-sized liquids bag, cap tight.`,
          `Keep the bag on top of your carry-on so you can pull it out if asked.`,
          `Carry the bottle in its carton if you want the label handy.`,
          `Pack a second bottle in a different bag for a long trip, in case one is lost.`,
          `Don’t touch the tip to anything while using it on the plane; the label says: {tip}.`,
        ],
      },
      {
        p: `For more trip planning, see [traveling with eye drops](/guides/traveling-with-eye-drops) and [can eye drops go through airport X-ray?](/guides/can-eye-drops-go-through-airport-x-ray), which covers the scanner itself.`,
      },
      { h: 'If your eye drops get extra screening' },
      {
        p: `TSA’s liquids page says any liquid that alarms during screening will need additional screening, so it’s possible an officer will pull your bag aside to look at a bottle. Stay calm, tell the officer they’re eye drops, and let them inspect it. Keeping the bottle in its original carton makes the label easy to show. If an item can’t be cleared, the officer decides whether it can continue in your carry-on.`,
      },
      { h: 'International flights' },
      {
        p: `TSA’s rules apply at US checkpoints. Other countries run their own screening and set their own limits, so check the rules for the airports on your route, especially on the return leg. Quell ships only to US addresses, so buy what you need for the trip before you leave.`,
      },
      { h: 'Using Quell on the trip' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists the Uses: {uses}. The directions: {directions}. The full panel is on our [Drug Facts page](/drug-facts). Orders ship from Brentwood, Tennessee, with no delivery date promised, so order well before you fly: [order from the home page](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'Are eye drops TSA approved?',
        a: `TSA doesn’t approve products; it screens them. Eye drops in containers of 3.4 ounces (100 milliliters) or less meet its liquids rule, and the officer at the checkpoint makes the final decision.`,
      },
      {
        q: 'Do eye drops count as liquid for TSA?',
        a: `Yes. They follow the liquids rule: containers of 3.4 ounces or less in a quart-sized bag. Larger medically necessary liquids are allowed in reasonable quantities if you declare them.`,
      },
      {
        q: 'Can I bring eye drops bigger than 3.4 ounces on a plane?',
        a: `TSA allows larger amounts of medically necessary liquids in reasonable quantities for your trip, as long as you declare them to officers at the checkpoint for inspection.`,
      },
      {
        q: 'Should I pack eye drops in my carry-on or checked bag?',
        a: `TSA allows liquid medications in both. A carry-on keeps them reachable on a dry flight and out of a hot or cold cargo hold, and protects them if checked luggage is delayed.`,
      },
    ],
  },
  /*
   * Technique from the label (directions, tip) and general practical advice. No
   * directions for contacts, children or use with other drops.
   */
  {
    slug: 'is-it-better-to-put-eye-drops-in-lying-down',
    title: 'Is it better to put eye drops in lying down?',
    description:
      'Lying down often makes eye drops easier to aim, especially with shaky hands. When to lie down, when to sit and tilt, and the steps for either position.',
    category: 'using',
    addedOn: '2026-11-17',
    body: [
      {
        p: `For many people, yes. Lying flat keeps your head still and your eye pointed straight up, so a drop is easier to aim, which helps with shaky hands, stiff necks or flinching. Sitting with your head tilted back works just as well when that’s comfortable. Either way, what matters is getting the drop into the eye without the tip touching anything, as the label directs.`,
      },
      { h: 'Why lying down can work better' },
      {
        list: [
          `Your head is fully supported, so it doesn’t wobble as you tilt.`,
          `The eye faces straight up, giving the drop a direct path.`,
          `Both elbows can rest on your chest, which steadies your hands.`,
          `People with neck or shoulder stiffness don’t have to crane back.`,
          `Someone helping you has a clear, still target.`,
        ],
      },
      {
        p: `It’s also easier to stay put for a moment afterward, with eyes closed, rather than jumping straight back to what you were doing.`,
      },
      { h: 'When sitting or standing is fine' },
      {
        p: `If you have steady hands and a comfortable neck, tilting your head back while seated works well, and it’s more practical at work, in a car (parked) or while traveling. Sit in a chair with a high back or lean your head against a wall for support. A mirror can help at first, though many people find they do better by feel once they’ve learned the motion.`,
      },
      { h: 'How to apply eye drops lying down' },
      {
        list: [
          `Wash your hands.`,
          `Lie on your back on a bed or couch, without a thick pillow, so your face is level.`,
          `Uncap the bottle and rest the cap on a clean tissue, open side up.`,
          `Look up toward the ceiling, past the bottle.`,
          `With one finger, gently pull the lower lid down to make a small pocket.`,
          `Rest the hand holding the bottle on your forehead or the bridge of your nose for steadiness.`,
          `Squeeze one drop into the pocket, without letting the tip touch your eye, lashes or skin.`,
          `Close your eyes gently for a moment; don’t squeeze them shut or rub.`,
          `Recap the bottle.`,
        ],
      },
      { h: 'How to put in drops sitting with your head tilted' },
      {
        list: [
          `Sit with your head supported by a chair back, headrest or wall.`,
          `Tilt your head back until your eye looks toward the ceiling.`,
          `Pull down the lower lid and look up.`,
          `Brace your hand against your face, then squeeze in one drop.`,
          `Close your eyes gently, then recap.`,
        ],
      },
      {
        p: `Whichever position you use, the label’s handling rule is the same: {tip}. That includes your eye and fingers as well as tables and counters.`,
      },
      { h: 'Steady hands and flinching' },
      {
        p: `A drop landing on the eye triggers a blink for almost everyone. A few tricks help:`,
      },
      {
        list: [
          `Look up and away from the bottle, not at it.`,
          `Bring the bottle in from the side, out of your direct view.`,
          `Rest your knuckles on your cheek or forehead so the bottle and your face move together.`,
          `If you miss, wipe the cheek and try again with a fresh drop; one that lands on closed lids won’t get in.`,
        ],
      },
      {
        p: `There’s more in [how to put in eye drops without flinching](/guides/how-to-put-in-eye-drops-without-flinching), and [how do I know if the eye drop went in?](/guides/how-do-i-know-if-the-eye-drop-went-in) helps when you’re not sure.`,
      },
      { h: 'Is it better to put eye drops in at night or in the morning?' },
      {
        p: `Quell’s directions give a number of times per day, not specific hours: {directions}. Many people spread the doses across the day: once in the morning, once midday, and once in the evening. Lying down at night is a natural moment for one of them. The label doesn’t address timing beyond that, so ask your eye doctor or pharmacist if you want a schedule tailored to you.`,
      },
      { h: 'What the label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists the Uses: {uses}. The panel also says: {doNotUse}. It’s milky brown when normal, so check its appearance before each use. Every section is on our [Drug Facts page](/drug-facts).`,
      },
      {
        p: `The label doesn’t give directions for contact lens wearers, for children, or for using Quell with other eye drops. Ask your eye doctor or pharmacist in those cases. And if you’re putting drops in someone else’s eyes, see [how to put eye drops in someone else’s eyes](/guides/how-to-put-eye-drops-in-someone-elses-eyes).`,
      },
      { h: 'When to stop' },
      {
        p: `Technique fixes a missed drop, not a problem that needs a doctor. The label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Can you put eye drops in lying down?',
        a: `Yes. Lie flat on your back, look up, pull down the lower lid, and squeeze one drop into the pocket without touching the tip to your eye. Lying down steadies your head and hands.`,
      },
      {
        q: 'Should you tilt your head back when putting in eye drops?',
        a: `Tilting back, or lying flat, points the eye upward so the drop lands on it rather than running down your cheek. Support your head against a chair back or wall to keep it steady.`,
      },
      {
        q: 'Should I close my eyes after putting in eye drops?',
        a: `Closing them gently for a moment is common practice. Avoid squeezing them shut or rubbing, which can push the drop out.`,
      },
      {
        q: 'What is the easiest way to put in eye drops with shaky hands?',
        a: `Lie down, rest your elbows on your chest, and brace the hand holding the bottle against your forehead or nose so your hand and head move together.`,
      },
    ],
  },
  /*
   * Label via tokens; site facts (Quell is preservative-free, multi-dose bottle).
   * FDA OTC Drug Facts format: inactive ingredients listed on the panel.
   */
  {
    slug: 'how-do-i-know-if-my-eye-drops-are-preservative-free',
    title: 'How do I know if my eye drops are preservative-free?',
    description:
      'Check the front of the carton, then confirm on the Drug Facts panel’s inactive ingredients list. How to read it, and what single-use vs. multi-dose means.',
    category: 'label',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Look for the words “preservative-free” on the front of the carton, then confirm it on the Drug Facts panel. The panel’s inactive ingredients list names everything that isn’t an active ingredient, so a preservative would appear there. If the front makes no claim, read that list or ask a pharmacist. Quell is preservative-free, and its full inactive ingredient list is printed on its label.`,
      },
      { h: 'Step 1: Check the front of the carton' },
      {
        p: `Makers of preservative-free drops usually say so prominently, because it’s a feature buyers look for. Quell’s full product name is Preservative-Free Lubricating Eye Drops. A carton that doesn’t mention preservatives at all hasn’t told you either way; it’s not proof the drops are preservative-free.`,
      },
      { h: 'Step 2: Read the inactive ingredients' },
      {
        p: `Over-the-counter drugs in the US carry a Drug Facts panel in a standard format set by the FDA. One section is Inactive ingredients, which lists the components that aren’t the active drug: things like water, salts, buffers and, in drops that use one, the preservative.`,
      },
      {
        list: [
          `Find the panel on the side or back of the carton.`,
          `Skip past Active ingredients, Uses and Warnings to Inactive ingredients.`,
          `Read every name in the list.`,
          `If one is unfamiliar, look it up or ask a pharmacist whether it’s a preservative.`,
        ],
      },
      {
        p: `Benzalkonium chloride is one well-known preservative found in many multi-use drops. Our guide to [benzalkonium chloride in eye drops](/guides/benzalkonium-chloride-in-eye-drops) explains what it is. Other preservatives exist, so a list without benzalkonium chloride isn’t automatically preservative-free; a pharmacist can help with unfamiliar names.`,
      },
      { h: 'Quell’s inactive ingredients' },
      {
        p: `Here’s the list from Quell’s label: {inactives}. There are {inactiveCount} of them, and Quell is sold as preservative-free. Each one has its own guide in the [What is in Quell](/guides/topic/formula) section if you want to look closer. The active ingredients, listed separately on the panel, are {actives}.`,
      },
      { h: 'Single-use vials vs. multi-dose bottles' },
      {
        p: `Packaging is a clue but not the answer. Single-use vials are opened once and thrown away, so they don’t need a preservative to protect the solution over weeks of use, and many preservative-free drops come that way. Multi-dose bottles are opened and recapped many times. Some contain preservatives; others, like Quell, are preservative-free in a multi-dose bottle.`,
      },
      {
        p: `So a vial strongly suggests preservative-free, but you should still check the label; and a bottle doesn’t mean there’s a preservative. [Single-use vials vs. multi-dose bottles](/guides/single-use-vials-vs-multi-dose-bottles) covers the trade-offs.`,
      },
      { h: 'Do I need preservative-free eye drops?' },
      {
        p: `That’s a question for your eye doctor, who knows how often you use drops and what else you use. Preservatives are a common source of irritation for people using drops several times a day, which is why preservative-free drops exist as a category. Quell’s directions call for regular use: {directions}. See [what does preservative-free mean?](/guides/what-does-preservative-free-mean) for more background.`,
      },
      { h: 'Handling a preservative-free bottle' },
      {
        p: `Without a preservative, careful handling matters every time. The label says: {tip}. It also says: {storage}. And one reason not to use it at all: {doNotUse}. Normal Quell looks milky brown; a change from how it looked when it arrived is the signal.`,
      },
      {
        list: [
          `Wash your hands before each use.`,
          `Recap right after the drop goes in.`,
          `Don’t share a bottle with anyone else.`,
          `Ask your pharmacist how long to keep an opened bottle, since the label doesn’t set a discard date after opening.`,
        ],
      },
      { h: 'What preservative-free doesn’t tell you' },
      {
        p: `The phrase answers one question only. It doesn’t mean a drop contains nothing you could react to, and it doesn’t say anything about how a bottle should be handled once opened. Quell, for example, contains emu oil among its inactive ingredients, which is why its label carries this line: {warnings}. Reading the whole inactive list, not just scanning for a preservative, is the habit that catches those details.`,
      },
      { h: 'If the carton is gone' },
      {
        p: `Drug Facts panels are usually printed on the outer carton, and small bottles often carry only part of the information. If you’ve thrown the box away, compare the bottle with the manufacturer’s published label, or ask a pharmacist to look it up. For Quell, every section of the panel, including the inactive list, is reproduced on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When the label isn’t enough' },
      {
        p: `If you’ve reacted to eye drops before, take the cartons to your eye doctor or pharmacist; they can point out ingredients to avoid. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'How can you tell if eye drops have preservatives?',
        a: `Read the Inactive ingredients section of the Drug Facts panel. A preservative, such as benzalkonium chloride, would be listed there. Ask a pharmacist about any name you don’t recognize.`,
      },
      {
        q: 'Are all eye drops in single-use vials preservative-free?',
        a: `Single-use vials usually are, since they’re thrown away after one use, but check the inactive ingredients to be sure. Multi-dose bottles can also be preservative-free, like Quell.`,
      },
      {
        q: 'Where is the preservative listed on an eye drop box?',
        a: `In the Inactive ingredients section of the Drug Facts panel, usually on the side or back of the carton. The front may also say “preservative-free” when a product has none.`,
      },
      {
        q: 'Is Quell preservative-free?',
        a: `Yes. Quell is sold as Preservative-Free Lubricating Eye Drops, and its full inactive ingredient list is on its Drug Facts panel for you to check.`,
      },
    ],
  },
]
