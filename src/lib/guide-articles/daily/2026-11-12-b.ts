import type { Guide } from '@/lib/guide-types'

export const DAILY_20261112_B: Guide[] = [
  /*
   * dry-eye-relief-los-angeles. Sources fetched 2026-11-12:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00093134.csv
   *   (downtown USC: annual precipitation 14.25 in, Dec-Feb 9.41 in, 25.6 days a year at 90F+)
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00093134.csv
   *   (Feb 3.64 in wettest, Aug 0.00 in, Aug normal high 84.0F, Jan normal high 68.0F)
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00023174.csv
   *   (LAX: 12.23 in a year, 4.8 days at 90F+)
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00023174.csv
   *   (LAX normal highs 65.6F in Feb to 76.7F in Aug)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (Los Angeles 93134, 1999-2018: Nov 51/51, Jan 52/49, Jun 65/60, annual 58/54)
   * Santa Ana winds and June gloom are described, not measured: no wind or
   * cloud figure was fetched, so none is given.
   */
  {
    slug: 'dry-eye-relief-los-angeles',
    title: 'Dry eye relief and eye drops in Los Angeles',
    description:
      'Santa Ana winds, a long rainless season and hours on the freeway: what NOAA’s records show about LA air, and where a lubricating drop fits.',
    category: 'local',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Los Angeles air is drier than its beach reputation suggests. NOAA’s 1991–2020 normals give downtown just 14.25 inches of rain a year, almost none of it from May through September, and fall brings dry Santa Ana winds off the deserts. Quell is a lubricating eye drop that ships to LA addresses; working out what’s behind dryness that keeps coming back is an eye doctor’s job.`,
      },
      { h: 'What NOAA’s records say about Los Angeles' },
      {
        p: `NOAA’s National Centers for Environmental Information publishes 30-year climate normals for two stations most Angelenos would recognize: the downtown station on the USC campus and the one at LAX. Their numbers describe a city that gets nearly all of its rain in a few winter months and then goes without.`,
      },
      {
        list: [
          `Downtown averages 14.25 inches of precipitation a year. February is the wettest month, at 3.64 inches.`,
          `December through February deliver 9.41 of those inches, roughly two-thirds of the year’s total in a single season.`,
          `August’s normal at the downtown station rounds to 0.00 inches. July’s is 0.02 and June’s 0.09.`,
          `LAX, closer to the ocean, averages 12.23 inches a year, with normal highs running from 65.6°F in February to 76.7°F in August.`,
          `Heat is a downtown story: 25.6 days a year reach 90°F or higher there, against 4.8 days at LAX.`,
        ],
      },
      {
        p: `The gap between two stations in the same city is the basin in miniature. The coast stays mild under ocean air, while neighborhoods farther inland heat up, dry out and run their air conditioning longer. Where you live and work in the county changes how much of each you get.`,
      },
      { h: 'Why your eyes feel driest during Santa Ana season' },
      {
        p: `NOAA’s Comparative Climatic Data table for the downtown station shows when the air carries the least moisture. November averages 51 percent relative humidity in the morning and 51 percent in the afternoon, and January’s afternoon average is 49 percent. June, by contrast, averages 65 percent in the morning and 60 in the afternoon. The late-fall dip lines up with the season when Santa Ana winds are familiar, blowing warm, dry air from the interior down through the mountain passes toward the coast.`,
      },
      {
        p: `Wind moves air across the surface of the eye faster, and dry wind takes moisture with it. On a gusty offshore day, a walk from a parking structure to an office lobby can be enough to leave your eyes gritty. A few habits limit the exposure:`,
      },
      {
        list: [
          `Wear wraparound sunglasses outdoors. They block wind coming from the side, which flat lenses let through.`,
          `Keep car windows up on windy days, and point the dashboard vents at your chest instead of your face.`,
          `Rinse your hands when you come inside from dust or ash in the air, before touching your eyes or the bottle.`,
          `Run a humidifier in the bedroom on the driest nights, and clean it the way its maker describes.`,
        ],
      },
      { h: 'June gloom and the marine layer' },
      {
        p: `Late spring and early summer bring the gray mornings locals call May gray and June gloom, when a marine layer sits over the coastal plain and burns off, or doesn’t, by afternoon. Those are the most humid months in NOAA’s downtown table. Damp mornings don’t always reach your eyes, though. If you spend the day in an air-conditioned building or a car, the air you actually breathe has been cooled and dried, whatever the sky outside looks like.`,
      },
      { h: 'Freeway commutes, air conditioning and screens' },
      {
        p: `Daily life in LA adds its own dry spells. An hour on the 405 or the 10 with the air conditioning on high puts a steady stream of dry air across your face. Long edits, script reads and spreadsheet days do the rest: people blink less when they concentrate on a screen, and every skipped blink leaves the tear film exposed a little longer. [Screens and your tear film](/guides/screens-and-your-tear-film) covers that side of it.`,
      },
      {
        list: [
          `Aim car vents away from your eyes and use recirculate when traffic is heavy and slow.`,
          `At a desk, move out of the direct path of a ceiling vent if you can.`,
          `Look away from the screen every so often and blink fully a few times.`,
          `Keep a water bottle at your desk; reaching for it is an easy cue to rest your eyes too.`,
        ],
      },
      { h: 'Where Quell fits into an LA day' },
      {
        p: `The tear film has three layers: oil on top, water beneath it and mucus against the eye. The oil slows evaporation from the water layer, and Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The directions on the carton are the same in every season: {directions}.`,
      },
      {
        p: `The label sets how many drops, not when. Someone with a long drive and an office day might use one before getting in the car, one after lunch and one in the evening. Set the times around your hardest stretches and keep them steady. {tip}, so cap the bottle right after each use, especially on a windy day when dust settles on everything.`,
      },
      { h: 'Can you keep eye drops in a car in Los Angeles?' },
      {
        p: `Quell’s label gives a storage range: {storage}. Downtown’s normal high in August is 84.0°F, already close to the top of that range before you account for a parked car, which gets far hotter than the air around it. Carry the bottle in a bag that comes inside with you and keep spares in a drawer at home. [Can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car) goes into more detail.`,
      },
      { h: 'Ordering eye drops to a Los Angeles address' },
      {
        p: `Quell ships within the United States from Brentwood, Tennessee, so there’s no store in LA to walk into. Standard shipping is {shipping}, and orders of {freeThreshold} or more, which is {freeBottles} bottles, ship free. No delivery date is promised, so order before your last bottle runs low. The [Los Angeles page](/eye-drops/los-angeles-ca) and the [California page](/eye-drops/state/california) have more about ordering from the area.`,
      },
      { h: 'When it isn’t just the weather' },
      {
        p: `Dry air explains a lot in Los Angeles, but not everything. If your eyes still bother you on calm, mild days, or anything about your vision changes, see an eye doctor; figuring out the cause and what to do about it is their work, not a drop’s. The label is plain about when to stop: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry during the Santa Ana winds?',
        a: 'Santa Ana winds carry warm, dry air from the interior toward the coast, and wind speeds up evaporation from the surface of the eye. NOAA’s humidity table for downtown Los Angeles shows November averaging 51 percent in both morning and afternoon, among the lowest readings of the year.',
      },
      {
        q: 'Does Los Angeles have dry air?',
        a: 'For much of the year, yes. NOAA’s 1991–2020 normals give downtown 14.25 inches of precipitation annually, with August’s normal rounding to zero, and air-conditioned buildings and cars dry the air further.',
      },
      {
        q: 'When is the rainy season in Los Angeles?',
        a: 'Winter. At the downtown USC station, December through February bring 9.41 of the year’s 14.25 inches, and February is the wettest month at 3.64 inches, according to NOAA’s normals.',
      },
      {
        q: 'Can I get eye drops delivered in Los Angeles?',
        a: 'Quell ships to Los Angeles addresses from Brentwood, Tennessee. Standard shipping is {shipping}, orders of {freeThreshold} or more ship free, and no delivery date is promised.',
      },
    ],
  },

  /*
   * dry-eye-relief-san-luis-obispo. Sources fetched 2026-11-12:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USC00047851.csv
   *   (San Luis Obispo Poly: 22.42 in a year, 18.7 days at 90F+, 2.6 nights at 32F or below)
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USC00047851.csv
   *   (Jan 5.07 in wettest; Jun 0.13, Jul 0.07, Aug 0.01, Sep 0.11; Sep normal high 80.1F;
   *   Jan normal high 64.9F, low 44.0F)
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00093206.csv
   *   (San Luis Obispo airport: 17.94 in a year, 8.0 nights at 32F or below)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (Santa Maria 23273, the nearest station in the table: annual 75 morning / 62 afternoon,
   *   Aug 80 morning, Nov 69 morning)
   * No wind figures were fetched, so wind is described without numbers.
   */
  {
    slug: 'dry-eye-relief-san-luis-obispo',
    title: 'Dry eye relief in San Luis Obispo, California',
    description:
      'Foggy mornings, rainless summers and breezy valley afternoons: NOAA’s records for San Luis Obispo, and how a lubricating eye drop fits in.',
    category: 'local',
    addedOn: '2026-11-12',
    body: [
      {
        p: `San Luis Obispo’s air swings between fog and dryness. At the Cal Poly weather station, NOAA’s 1991–2020 normals show 22.42 inches of rain a year, yet June through September together add only 0.32 inches, and September is the warmest month. Quell is a lubricating eye drop that ships to Central Coast addresses, while sorting out dryness that won’t settle is an eye doctor’s call.`,
      },
      { h: 'What the Cal Poly and airport stations record' },
      {
        p: `NOAA’s National Centers for Environmental Information keeps 30-year normals for two stations in town: one at Cal Poly, on the north side near the foothills, and one at the county airport on the south edge of the city. They agree on the shape of the year and disagree on the details, which is worth knowing if you split your days between the two ends of town.`,
      },
      {
        list: [
          `Cal Poly averages 22.42 inches of precipitation a year; the airport averages 17.94.`,
          `January is the wettest month at Cal Poly, with a normal of 5.07 inches.`,
          `The summer months are close to rainless there: 0.13 inches in June, 0.07 in July, 0.01 in August and 0.11 in September.`,
          `September’s normal high, 80.1°F, is the warmest of the year. January’s normal high is 64.9°F and its normal low 44.0°F.`,
          `The airport averages 8.0 nights a year at or below freezing, compared with 2.6 at Cal Poly.`,
        ],
      },
      { h: 'Foggy mornings, dry afternoons' },
      {
        p: `NOAA’s humidity table has no San Luis Obispo row, so the nearest station it lists, Santa Maria, is the closest official guide. There, relative humidity averages 75 percent in the morning and 62 percent in the afternoon across the year. August mornings average 80 percent, the dampest of the year, which matches the marine layer that rolls up the valley from Morro Bay and Avila after dark. November mornings are the driest, at 69 percent.`,
      },
      {
        p: `The daily swing is what people notice. A gray, cool start can turn into a bright, breezy afternoon once the fog lifts off the morros, and your eyes go from comfortable to scratchy within a few hours. Dressing in layers is second nature on the Central Coast; it helps to plan your eye care the same way, with the afternoon in mind.`,
      },
      { h: 'Valley wind, vineyards and the morros' },
      {
        p: `Afternoon breezes funnel through the valleys around town, across the vineyards of Edna Valley and up the trails on Bishop Peak and Cerro San Luis. A hike to the summit or a long tasting-room afternoon puts you in moving air for hours, often in strong sun. A few things help:`,
      },
      {
        list: [
          `Wraparound sunglasses cut both glare and side wind on exposed ridge trails.`,
          `A brimmed hat shades your eyes, which makes you less likely to squint against the light for hours.`,
          `Bring the bottle in a daypack rather than leaving it in the car at the trailhead.`,
          `Wash or sanitize your hands before using drops on the trail, since dust and sunscreen both end up on your fingers.`,
        ],
      },
      { h: 'Campus life at Cal Poly' },
      {
        p: `Students and staff spend long stretches in lecture halls, labs and the library, often in front of screens. Concentration cuts down on blinking, and the tear film thins between blinks. Add a breezy bike ride up the hill to campus and a heated dorm room in winter, and eyes can feel dry by evening. Anyone 18 or older can order Quell online with guest checkout; a student under 18 would need a parent or guardian to place the order. [Dry eyes while studying for exams](/guides/dry-eyes-while-studying) has more on long study sessions.`,
      },
      { h: 'Cold valley nights and storing the bottle' },
      {
        p: `Those eight freezing nights a year at the airport station matter for anything you leave in a car. Quell’s label gives the storage range: {storage}. A bottle left in a glove box on a frosty January night in the south end of town can fall below that range, and one left in a sunny lot on a September afternoon can rise above it. Keep it in your bag or a drawer, and see [how to store eye drops](/guides/how-to-store-eye-drops) for the rest.`,
      },
      { h: 'Where Quell fits on the Central Coast' },
      {
        p: `The tear film is a thin sandwich: an oily outer layer, a watery middle and a mucus layer against the eye. The oil slows evaporation, and Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The carton’s directions read: {directions}.`,
      },
      {
        p: `Because San Luis Obispo days often start damp and end dry, many people place their drops later in the day: one mid-morning, one after lunch and one in the early evening, for example. The label sets the count, not the clock. Before each use, check the solution looks as it should. {appearance}`,
      },
      { h: 'Ordering to San Luis Obispo' },
      {
        p: `Quell ships across the US from Brentwood, Tennessee, including to homes, offices and campus mailrooms in San Luis Obispo. Shipping is {shipping} per order, or free once the order reaches {freeThreshold}, which {freeBottles} bottles do. No arrival date is promised. The [San Luis Obispo page](/eye-drops/san-luis-obispo-ca) has local ordering details, and the [California page](/eye-drops/state/california) covers the rest of the state.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If dryness hangs on through the foggy weeks as well as the dry ones, or your vision changes, book a visit with an optometrist or ophthalmologist. They work out what’s causing it and what to do; a drop can’t. Quell’s label lists the signs to stop: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Is San Luis Obispo humid or dry?',
        a: 'Both, often within a few hours of each other. NOAA’s humidity table for nearby Santa Maria averages 75 percent in the morning and 62 percent in the afternoon, and San Luis Obispo’s summers are close to rainless.',
      },
      {
        q: 'When does it rain in San Luis Obispo?',
        a: 'Mostly in winter. At the Cal Poly station, January is the wettest month with 5.07 inches, while June through September add up to just 0.32 inches, according to NOAA’s 1991–2020 normals.',
      },
      {
        q: 'Can Cal Poly students order eye drops online?',
        a: 'Students who are 18 or older can order Quell with guest checkout and have it shipped to a US address, including a campus mailbox. Younger students need a parent or guardian to order.',
      },
      {
        q: 'Does Quell ship to San Luis Obispo?',
        a: 'Yes. Quell ships to San Luis Obispo addresses from Brentwood, Tennessee, with free shipping on orders of {freeThreshold} or more and no promised delivery date.',
      },
    ],
  },

  /*
   * dry-eye-relief-stamford-ct. Sources fetched 2026-11-12:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USC00067970.csv
   *   (Stamford 5 N: 51.61 in precipitation, 34.0 in snow, 119.4 nights at 32F or below)
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USC00067970.csv
   *   (Feb snow 11.9 in, Jan 9.1 in; Jan normal high 38.0F, low 22.2F; Jul normal high 84.8F)
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00094702.csv
   *   (Bridgeport Sikorsky airport: 33.6 in snow, 91.8 nights at 32F or below)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (Bridgeport 94702: annual 75 morning / 59 afternoon, Jan 72/60, Apr afternoon 54)
   * Nor’easters described without figures; none were fetched.
   */
  {
    slug: 'dry-eye-relief-stamford-ct',
    title: 'Dry eye relief in Stamford, Connecticut',
    description:
      'Heated offices, Metro-North mornings and wind off Long Island Sound. Stamford’s NOAA climate records and where a lubricating eye drop fits.',
    category: 'local',
    addedOn: '2026-11-12',
    body: [
      {
        p: `In Stamford, dry eyes are mostly an indoor problem. NOAA’s 1991–2020 normals for the station five miles north of downtown count 119.4 nights a year at or below freezing, so homes, offices and train cars run their heat from fall into spring, and heated air pulls moisture from the eye. Quell is a lubricating eye drop that ships to Stamford; dryness that persists belongs with an eye doctor.`,
      },
      { h: 'What NOAA’s records show for Stamford' },
      {
        p: `The National Centers for Environmental Information keeps normals for a cooperative weather station called Stamford 5 N, in the wooded north end of the city. Its numbers describe a full four-season climate with a long heating season:`,
      },
      {
        list: [
          `Precipitation averages 51.61 inches a year, spread fairly evenly across the months.`,
          `Snowfall averages 34.0 inches. February is the snowiest month at 11.9 inches, followed by January at 9.1.`,
          `January’s normal high is 38.0°F and its normal low 22.2°F.`,
          `July’s normal high reaches 84.8°F, which is when air conditioning takes over from the furnace.`,
          `An average of 119.4 nights a year drop to 32°F or below.`,
        ],
      },
      { h: 'The shoreline versus north Stamford' },
      {
        p: `Long Island Sound softens the cold along the water. NOAA’s normals for Bridgeport’s Sikorsky airport, the nearest first-order station on the shoreline, show 91.8 freezing nights a year and 33.6 inches of snow. A home near Shippan Point or Cove Island Park sees milder nights than one up by the Merritt Parkway, but both run the heat for months.`,
      },
      {
        p: `The outdoor air here isn’t especially dry. NOAA’s humidity table for Bridgeport averages 75 percent in the morning and 59 percent in the afternoon across the year, and April afternoons are the lowest at 54 percent. The trouble starts when cold winter air comes inside. Air that is warmed without adding moisture has a lower relative humidity than it did outdoors, and a heated room can feel parched even on a damp January day.`,
      },
      { h: 'The Metro-North commute' },
      {
        p: `Stamford sits on Metro-North’s New Haven Line, and a weekday trip to Grand Central strings together several kinds of drying air: a windy platform, a heated car, a phone or laptop screen held close, then a heated office tower. Reading on a screen cuts down on blinking, and a forced-air vent under the window seat blows warm air upward toward your face.`,
      },
      {
        list: [
          `Pick a seat away from the heater vents if the car isn’t crowded.`,
          `Put the phone down for part of the ride and look out at the Sound; distance viewing lets you blink more naturally.`,
          `Keep the bottle in a coat pocket or bag you carry, not in a desk at the other end of the commute.`,
          `Wash your hands after the subway or train before you use drops, since handrails pass a lot through your fingers.`,
        ],
      },
      { h: 'Nor’easters and wind off the Sound' },
      {
        p: `Winter storms that come up the coast bring hard wind off the water along with snow or cold rain. Shoveling a driveway or waiting for a bus in that wind dries the eye quickly, and the car heater and defroster blasting afterward don’t help. Wraparound sunglasses or ski goggles for snow clearing, and vents aimed at the windshield rather than your face, take some of the edge off. [Dry eyes from cold air](/guides/dry-eyes-from-cold-air) covers the outdoor side in more depth.`,
      },
      { h: 'Keeping the bottle in range through a Connecticut winter' },
      {
        p: `Quell’s storage range is printed on the carton: {storage}. A January night with a normal low of 22.2°F puts a car well below that range, so a bottle left in the glove box from evening to morning is out of range by breakfast. A desk drawer, a bag or a bathroom cabinet keeps it steady. If you’re unsure about a bottle that got cold, [should eye drops be refrigerated?](/guides/should-eye-drops-be-refrigerated) explains why temperature matters for drops.`,
      },
      { h: 'Where Quell fits into a Stamford day' },
      {
        p: `The tear film’s outer oil layer slows evaporation of the water underneath it. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its directions are short: {directions}. A commuter might use one before leaving for the station, one in the early afternoon at the office and one in the evening at home, when the heat is on and the screens are still out. {tip}.`,
      },
      { h: 'Ordering to Stamford' },
      {
        p: `There’s no Quell counter in Fairfield County: every bottle ships from Brentwood, Tennessee, to the address you enter at checkout, whether that’s a house in Springdale or an office downtown. Shipping is {shipping}, and an order of {freeBottles} bottles ships free. No delivery date is promised. The [Stamford page](/eye-drops/stamford-ct) and the [Connecticut page](/eye-drops/state/connecticut) have local details.`,
      },
      { h: 'When to see an eye doctor in Stamford' },
      {
        p: `If your eyes stay dry after the heat goes off in spring, or if anything about your sight changes, see an optometrist or ophthalmologist. Working out the reason and deciding what to do is theirs to handle. Quell’s label lists when to stop using it: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in the winter in Connecticut?',
        a: 'Cold outdoor air holds little moisture, and when homes and offices heat it, its relative humidity drops further. In Stamford, NOAA’s normals count 119.4 freezing nights a year, so that heating season is long.',
      },
      {
        q: 'How much snow does Stamford, CT get?',
        a: 'About 34.0 inches a year at the Stamford 5 N station, according to NOAA’s 1991–2020 normals. February is the snowiest month with 11.9 inches.',
      },
      {
        q: 'Can I put in eye drops on a commuter train?',
        a: 'You can, as long as you can do it steadily and with clean hands; a stopped train or a station platform bench is easier than a moving car. Keep the tip from touching anything, and follow the label’s directions.',
      },
      {
        q: 'Does Quell ship to Stamford, Connecticut?',
        a: 'Yes. Quell ships to Stamford homes and offices from Brentwood, Tennessee. Standard shipping is {shipping}, {freeBottles} bottles ship free, and there’s no promised delivery date.',
      },
    ],
  },

  /*
   * dry-eye-relief-anderson-indiana. Sources fetched 2026-11-12:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USC00120177.csv
   *   (Anderson Sewage Plant: 43.76 in precipitation, 20.8 in snow, 112.4 nights at 32F or
   *   below, 14.1 days at 90F+)
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USC00120177.csv
   *   (Jan normal high 34.9F, low 20.7F; Jan snow 8.3 in, Dec 5.0 in; Jun 5.24 in wettest;
   *   Jul normal high 83.8F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (Indianapolis 93819, the nearest station in the table: Dec 83/71, Jan 81/70,
   *   Apr 77/55, annual 82/60)
   * No wind figures were fetched; spring wind and harvest dust are described only.
   */
  {
    slug: 'dry-eye-relief-anderson-indiana',
    title: 'Dry eye relief in Anderson, Indiana',
    description:
      'Long furnace seasons, spring wind and harvest dust in Madison County: what NOAA’s Anderson records show and how a lubricating drop fits.',
    category: 'local',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Anderson’s dry-eye season runs on the furnace. NOAA’s 1991–2020 normals for the city’s own weather station put January’s normal low at 20.7°F and count 112.4 freezing nights a year, so heat runs for months and warm indoor air dries the eye. Spring wind and fall harvest dust add to it. Quell is a lubricating eye drop shipped to Anderson; an eye doctor handles what’s behind lasting dryness.`,
      },
      { h: 'Anderson’s weather by the numbers' },
      {
        p: `NOAA’s National Centers for Environmental Information keeps climate normals for a cooperative station at Anderson’s wastewater plant. That makes these Anderson’s own figures rather than borrowed ones from Indianapolis:`,
      },
      {
        list: [
          `January is the coldest month, with a normal high of 34.9°F and a normal low of 20.7°F.`,
          `About 112.4 nights a year fall to 32°F or below.`,
          `Snowfall averages 20.8 inches a year. January brings the most, 8.3 inches, and December about 5.0.`,
          `Precipitation totals 43.76 inches a year. June is the wettest month at 5.24 inches.`,
          `July’s normal high is 83.8°F, and 14.1 days a year reach 90°F or more.`,
        ],
      },
      { h: 'Why winter indoors is the hard part' },
      {
        p: `Outdoors, central Indiana air is fairly moist in winter. NOAA’s humidity table has no Anderson row, so the nearest station, Indianapolis, stands in: December averages 83 percent in the morning and 71 percent in the afternoon, and January 81 and 70. The dryness comes once that cold air is warmed inside. Heating air without adding water lowers its relative humidity, so a living room on a January evening can feel far drier than the gray sky outside suggests.`,
      },
      {
        list: [
          `Keep forced-air registers from blowing straight at a recliner, bed or desk chair.`,
          `A humidifier in the bedroom helps some people; clean it as the maker directs so it doesn’t become a problem of its own.`,
          `Turn the car heater’s airflow to the floor and windshield on cold drives down I-69.`,
          `Step away from the TV or tablet now and then on long winter evenings, and blink fully.`,
        ],
      },
      { h: 'Spring afternoons and harvest dust' },
      {
        p: `The air is driest in the afternoon in spring: Indianapolis averages 55 percent on April afternoons in NOAA’s table, one of the lowest readings of the year. Spring is also when wind sweeps across the open farm ground of Madison County before the crops come up. In the fall, combines working corn and soybean fields kick dust into the air along county roads. Anyone farming, driving a rural route or coaching outdoors feels both.`,
      },
      {
        p: `Sunglasses with wraparound frames keep wind and grit out from the sides. In a tractor or combine cab, keep the filter and vents clean and aimed away from your face. Wash dust off your hands and face before touching your eyes or the dropper bottle. [Dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers) has more for long days outside.`,
      },
      { h: 'Along the White River and at Mounds State Park' },
      {
        p: `The trails at Mounds State Park and the river walk downtown are where many people in Anderson get outside. A cold, breezy walk along the water in March can bring on watery, then scratchy eyes; the watering is the eye reacting to irritation, not a sign it’s well supplied. A hat, sunglasses and a bottle tucked in a jacket pocket rather than left in the car make those walks easier.`,
      },
      { h: 'Storing drops through an Indiana winter' },
      {
        p: `Quell’s label reads: {storage}. A car parked through a January night in the driveway sits well below that range, so a bottle forgotten in the cup holder is out of range by morning. The garage is no better in winter, and an unshaded windshield in July can push the dashboard well above the top of the range. A kitchen drawer or medicine cabinet stays steady. [How to store eye drops](/guides/how-to-store-eye-drops) walks through the rest.`,
      },
      { h: 'Where Quell fits' },
      {
        p: `The tear film has an oily outer layer that slows evaporation of the watery layer beneath it. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its directions: {directions}. Someone at Anderson University might space them around morning classes, an afternoon in the library and a late study session; a shift worker might start the count at the beginning of the shift. The label sets the number, so pick times you’ll actually keep.`,
      },
      {
        p: `Before using a bottle, check that it looks right. {appearance} The label adds: {doNotUse}.`,
      },
      { h: 'Ordering eye drops to Anderson' },
      {
        p: `Quell isn’t sold in Anderson stores; it ships from Brentwood, Tennessee, to any US address. Shipping is {shipping} on smaller orders and free from {freeThreshold}, or {freeBottles} bottles. There’s no promised delivery date, so reorder with a little time to spare. The [Anderson page](/eye-drops/anderson-in) and the [Indiana page](/eye-drops/state/indiana) have more about ordering from the area.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Seasonal dryness that fades when the furnace switches off is one thing. Dryness that stays into summer, keeps getting worse or comes with any change in your vision calls for an optometrist or ophthalmologist, who can find the reason and decide what to do about it. Quell’s label is specific: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'How cold does it get in Anderson, Indiana?',
        a: 'January is coldest, with a normal high of 34.9°F and a normal low of 20.7°F at Anderson’s NOAA station. The city averages 112.4 nights a year at or below freezing.',
      },
      {
        q: 'Why do my eyes get dry in an Indiana winter?',
        a: 'Cold air carries little water, and heating it indoors lowers its relative humidity further. Months of furnace air, car heaters and screen time all speed evaporation from the surface of the eye.',
      },
      {
        q: 'Who should I see about dry eyes in Anderson, Indiana?',
        a: 'An optometrist or ophthalmologist. They can examine your eyes, figure out what’s causing the dryness and recommend what to do, which a store-bought drop can’t.',
      },
      {
        q: 'Does Quell ship to Anderson, IN?',
        a: 'Yes. Quell ships to Anderson from Brentwood, Tennessee. Orders of {freeThreshold} or more ship free, smaller ones cost {shipping}, and no delivery date is promised.',
      },
    ],
  },

  /*
   * dry-eye-relief-weatherford-tx. Sources fetched 2026-11-12:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USC00419532.csv
   *   (Weatherford: 35.18 in precipitation, 89.6 days at 90F+, 13.1 days at 100F+,
   *   60.8 nights at 32F or below)
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USC00419532.csv
   *   (May 4.42 in wettest, Jul 1.86 in driest; Jul normal high 94.6F, Aug 94.7F;
   *   Jan normal high 56.2F, low 31.8F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (Dallas 13960, the nearest station in the table: Jul 77/49, Aug 75/48, Mar afternoon 53,
   *   annual 78/54)
   * - https://www.weatherfordtx.gov/721/Brief-History (Cutting Horse Capital of the World)
   * No wind figures were fetched, so wind is described without numbers.
   */
  {
    slug: 'dry-eye-relief-weatherford-tx',
    title: 'Dry eye relief in Weatherford, Texas',
    description:
      'Triple-digit afternoons, arena dust and dry wind west of Fort Worth: NOAA’s Weatherford records, and where a lubricating eye drop fits in.',
    category: 'local',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Weatherford’s hardest stretch for dry eyes is the long summer. NOAA’s 1991–2020 normals for the city’s weather station average 89.6 days a year at 90°F or hotter, and afternoon humidity at nearby Dallas falls below 50 percent in July and August. Arena dust and wind add to it. Quell is a lubricating eye drop that ships to Parker County; lasting dryness is a matter for an eye doctor.`,
      },
      { h: 'What NOAA’s Weatherford station shows' },
      {
        p: `NOAA’s National Centers for Environmental Information keeps 30-year normals for a cooperative weather station in Weatherford itself, so these aren’t Fort Worth’s numbers with a new name on them:`,
      },
      {
        list: [
          `July and August share the hottest normal highs, 94.6°F and 94.7°F.`,
          `The city averages 89.6 days a year at 90°F or above, and 13.1 days at 100°F or above.`,
          `Precipitation totals 35.18 inches a year. May is the wettest month at 4.42 inches; July is the driest at 1.86.`,
          `January’s normal high is 56.2°F and its normal low 31.8°F.`,
          `About 60.8 nights a year fall to 32°F or below, so winter heating matters here too.`,
        ],
      },
      { h: 'Dry summer afternoons' },
      {
        p: `NOAA’s humidity table has no Weatherford row; Dallas, the closest station it lists, is the stand-in. Afternoon humidity there averages 49 percent in July and 48 percent in August, the lowest of the year, even though mornings start out above 75 percent. Heat and low afternoon humidity together speed evaporation from the eye, and that’s before the air conditioning, which dries indoor air further. People who move between a hot barn and a cold truck cab all afternoon get both extremes.`,
      },
      { h: 'Cutting horse country: arenas, barns and dust' },
      {
        p: `The city’s own history page calls Weatherford the Cutting Horse Capital of the World, and anyone who spends time in a show pen or practice arena knows the dust that comes with it. Fine arena footing hangs in the air on a dry day and settles on everything, including your hands and the bottle in your pocket.`,
      },
      {
        list: [
          `Wear wraparound sunglasses or safety glasses while riding, working cattle or dragging the arena.`,
          `Keep a pack of hand wipes in the truck so you can clean up before touching your eyes.`,
          `Cap the bottle the moment you’re done. {tip}.`,
          `Use drops after you’ve left the arena and washed up, not with dust still on your face.`,
        ],
      },
      { h: 'Wind on the Cross Timbers and Lake Weatherford' },
      {
        p: `West of Fort Worth the land opens into rolling ranch country, and wind moves across it freely, especially on spring afternoons ahead of storms. A day of fishing on Lake Weatherford puts you in sun and glare off the water as well as wind. A hat with a brim, polarized sunglasses and a shaded cooler for the bottle keep the day comfortable. [Dry air, wind and altitude](/guides/dry-air-wind-and-altitude) explains how moving air pulls moisture from the eye.`,
      },
      { h: 'Can you leave eye drops in a truck in a Texas summer?' },
      {
        p: `No. Quell’s label gives the range: {storage}. With normal highs near 95°F in July and August, a cab parked in the sun outside the feed store or the Peach Festival runs much hotter than that. Carry the bottle into the house, the office or the barn’s tack room, wherever stays cooler. [Can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car) has the details.`,
      },
      { h: 'Where Quell fits in a Weatherford day' },
      {
        p: `The tear film’s oil layer sits on top and slows evaporation of the water underneath. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its directions are the same summer or winter: {directions}. A rancher might use one at first light before chores, one at midday out of the heat and one at supper. A commuter on I-20 to Fort Worth might pick the start of the drive, lunch and the evening instead.`,
      },
      {
        p: `Before each use, glance at the solution. {appearance} If the color has changed, the label says not to use it: {doNotUse}.`,
      },
      { h: 'Ordering to Weatherford and Parker County' },
      {
        p: `Quell ships from Brentwood, Tennessee, to addresses across the US, including ranches with rural routes, homes near the courthouse square and offices in town. Shipping is {shipping}, and orders reaching {freeThreshold}, which is {freeBottles} bottles, ship free. No delivery date is promised, so reorder before the last bottle runs low. The [Weatherford page](/eye-drops/weatherford-tx) and the [Texas page](/eye-drops/state/texas) have more on ordering from the area.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dust and heat explain plenty, but if dryness lasts into the cooler months, gets steadily worse or comes with any change in how you see, an optometrist or ophthalmologist should take a look. Finding the cause and deciding what to do belongs to them. Quell’s label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'How hot does it get in Weatherford, Texas?',
        a: 'July and August normal highs are 94.6°F and 94.7°F at Weatherford’s NOAA station, which averages 89.6 days a year at 90°F or more and 13.1 days at 100°F or more.',
      },
      {
        q: 'How do I keep arena dust out of my eyes?',
        a: 'Wraparound sunglasses or safety glasses block most of the dust that comes from the sides. Wash your hands and face before touching your eyes, and keep any eye drop bottle capped while you’re in the arena.',
      },
      {
        q: 'Can I leave eye drops in a truck in a Texas summer?',
        a: 'It’s better not to. Quell’s label says: {storage}, and a parked truck in a Weatherford summer, with normal highs near 95°F, gets much hotter than that.',
      },
      {
        q: 'Does Quell ship to Weatherford, TX?',
        a: 'Yes. Quell ships to Weatherford and the rest of Parker County from Brentwood, Tennessee. Orders of {freeThreshold} or more ship free, and no delivery date is promised.',
      },
    ],
  },

  {
    slug: 'eye-drops-delivery-near-me',
    title: 'Eye drops delivery near me: how Quell gets to you',
    description:
      'Quell has no local store or pickup. It ships to your door from Brentwood, Tennessee. What delivery costs, what to expect, and when a pharmacy is quicker.',
    category: 'shipping',
    addedOn: '2026-11-12',
    body: [
      {
        p: `If you’re searching for eye drop delivery near you, Quell works differently from a local pharmacy: there’s no store or pickup counter, and every order ships from Brentwood, Tennessee, to the US address you enter at checkout. Delivery costs {shipping}, or nothing on orders of {freeThreshold} or more. No arrival date is promised, so if you need drops today, a nearby pharmacy is the quicker route.`,
      },
      { h: 'Is there a store near me that sells Quell?' },
      {
        p: `Not through this site. Quell is sold online at quelldrop.com and shipped directly, which is why “near me” searches turn up delivery rather than a shelf. The [where we ship](/eye-drops) page lists hundreds of US cities and every state, and each page answers the same question for its own area: yes, it ships there, at the same price as anywhere else. An address that isn’t on the list can order just the same.`,
      },
      { h: 'How eye drop delivery works, step by step' },
      {
        list: [
          `Pick a quantity on the [home page](/#buy). The cart shows the shipping charge, or that it’s free, before you pay.`,
          `Check out as a guest. You don’t need an account, but you do need to be 18 or older.`,
          `Enter a United States shipping address, including any apartment, suite or unit number.`,
          `Pay on the payment provider’s secure page. An order confirmation arrives by email.`,
          `A second email arrives when the package leaves Brentwood, with tracking you can follow.`,
          `Look up the order anytime on the [orders page](/orders) with your email and order number.`,
        ],
      },
      { h: 'How much does eye drop delivery cost?' },
      {
        p: `Shipping is {shipping} per order, charged once no matter how many bottles are in the box below the free level. Orders of {freeThreshold} or more ship free, which is where {freeBottles} bottles land. The charge doesn’t change by distance: a house two miles from the warehouse and a cabin at the end of a gravel road in another time zone pay the same. There’s no rural surcharge and no extra fee for apartments or offices.`,
      },
      {
        p: `There are no promo codes and no subscription, so the price in the cart is the price. [How to get free shipping](/guides/how-to-get-free-shipping) explains the threshold in more detail.`,
      },
      { h: 'When will eye drops ordered online arrive?' },
      {
        p: `Quell doesn’t promise a delivery date, and that’s deliberate: a date on a website is a promise that weather, holidays and sorting hubs can break. What you can count on is the shipping email when the package leaves, and tracking from that point on. Distance plays a part too. An address in Tennessee or a neighboring state is closer to Brentwood than one in Oregon or Maine, and some places take longer to reach.`,
      },
      {
        p: `The practical answer is to reorder while you still have drops left. Quell sends one reminder email when it may be time to reorder, and nothing more. If you’re down to your last few doses, ordering online won’t close that gap quickly; a local pharmacy can.`,
      },
      { h: 'Ordering online vs. driving to a store' },
      {
        p: `Both have a place. Which one makes sense depends on how soon you need drops and what you want to compare.`,
      },
      {
        list: [
          `Speed: a store hands you a bottle today. Delivery takes as long as shipping takes, with no set date.`,
          `The trip: delivery saves the drive, the parking lot and the line, which matters to anyone who doesn’t drive, works long hours or lives far from town.`,
          `Reading the label: online, the complete [Drug Facts panel](/drug-facts) is on a page you can read slowly at home before you buy. In a store, you’re reading small print in an aisle.`,
          `Asking questions: a pharmacist at the counter can answer questions on the spot. Quell’s team answers order questions by phone at {phone}, {hours}, and medical questions belong with your doctor or pharmacist.`,
          `Choice: a store shelf carries several brands. Quell is one specific formula, preservative-free and milky brown, and it isn’t on most shelves.`,
        ],
      },
      {
        p: `[Buying eye drops online vs. in a store](/guides/buying-eye-drops-online-vs-in-store) compares the two in more depth.`,
      },
      { h: 'Delivery to apartments, offices and someone else' },
      {
        p: `The package goes wherever you tell checkout to send it, as long as it’s in the United States. That can be your home, a workplace, a relative’s address or a dorm mailroom. The buyer’s details and the shipping address don’t have to match. Put unit and suite numbers on the second address line so the package reaches the right door, and add a company name if it’s going to an office. Checkout won’t accept addresses outside the US.`,
      },
      { h: 'What to check when the delivery arrives' },
      {
        list: [
          `The tamper seal should be intact. If it’s broken, or the package arrived damaged or with the wrong item, contact Quell for a replacement.`,
          `The solution is supposed to look milky brown. {appearance}`,
          `If you’re refunding an unopened bottle, the policy is: {returns}. The window is {returnDays} days from delivery.`,
        ],
      },
    ],
    faq: [
      {
        q: 'Can I get eye drops delivered today?',
        a: 'Not from Quell. It ships from Brentwood, Tennessee, with no promised delivery date. If you need drops right away, a local pharmacy is the faster option.',
      },
      {
        q: 'Is there a delivery fee for eye drops?',
        a: 'On Quell orders, shipping is {shipping}, charged once per order, and free on orders of {freeThreshold} or more. The charge is the same anywhere in the United States.',
      },
      {
        q: 'Where can I pick up Quell near me?',
        a: 'There’s no pickup location. Quell is ordered online and shipped to the US address you enter at checkout, whether that’s a home, an office or someone else’s address.',
      },
      {
        q: 'Do you deliver eye drops to rural addresses?',
        a: 'Yes. Quell ships to any United States address, rural routes included, with no extra charge for distance. Farther places can take longer to reach.',
      },
    ],
  },

  {
    slug: 'shipping-eye-drops-to-a-college-dorm',
    title: 'Shipping eye drops to a college dorm',
    description:
      'How to address a package to a dorm or campus mail center, what happens over winter break, who can place the order, and keeping drops in range.',
    category: 'shipping',
    addedOn: '2026-11-12',
    body: [
      {
        p: `To ship eye drops to a college dorm, use the student’s full name as the school has it, the mailing address the college publishes for residents, and the mailbox or room number on the second address line. Packages usually go to a campus mail center that sends a pickup notice. Order well before breaks, and note that the buyer must be 18 or older.`,
      },
      { h: 'How to address a package to a college dorm' },
      {
        p: `Colleges handle mail in different ways. Some deliver to each residence hall’s front desk; many route every package through a central mail center and hand them out from there. The school’s housing or mail services page spells out the exact format, and it’s worth checking before checkout, because a dorm’s street address isn’t always the address mail should go to.`,
      },
      {
        list: [
          `Name: the student’s legal name, matching their student ID, since that’s what mailroom staff check at pickup.`,
          `Address line 1: the street address the school gives for resident mail, which may be the mail center rather than the hall.`,
          `Address line 2: the campus box number, or the hall name and room number, exactly as the school asks for it.`,
          `City, state and ZIP: the school’s, as listed on its mail page. Some campuses have their own ZIP code.`,
        ],
      },
      {
        p: `A package addressed to a name the mailroom can’t match, or missing its box number, can sit unclaimed or be sent back. [Getting the shipping address right](/guides/getting-the-address-right) covers the checkout fields in general.`,
      },
      { h: 'Package pickup notices and tracking' },
      {
        p: `When the carrier drops a package at a campus mail center, tracking will usually show it as delivered, even though the student hasn’t got it yet. The mail center then logs it and sends its own notice, by email, text or a slip, saying it’s ready. That step can take a little while on busy days, especially in the first weeks of a semester when every student is getting boxes.`,
      },
      {
        list: [
          `Watch for the shipping email from Quell when the package leaves Brentwood, Tennessee; it includes tracking.`,
          `Once tracking shows delivered, wait for the mail center’s notice before asking about it.`,
          `Bring a student ID to pickup. Mail centers often won’t release a package without one.`,
          `Note the mail center’s hours, which are usually shorter on weekends and during exam periods.`,
        ],
      },
      { h: 'Can a student under 18 order eye drops?' },
      {
        p: `Not on quelldrop.com. Buyers must be 18 or older, so a first-year student who hasn’t turned 18 needs a parent, guardian or another adult to place the order. The adult pays and enters the student’s campus address as the shipping address; the two don’t need to match. [Do you have to be 18 to order Quell?](/guides/do-you-have-to-be-18-to-order) explains the rule. Quell’s label doesn’t give directions for children, so for anyone under 18, the right first step is a question to their doctor or pharmacist.`,
      },
      { h: 'Timing orders around winter break' },
      {
        p: `Shipping doesn’t come with a promised date, and campus mail centers close or cut hours over breaks. Put those together and the risk is clear: a package that reaches campus the day after the student flies home may wait there for weeks.`,
      },
      {
        list: [
          `Order early in the term rather than in the last week before break.`,
          `If finals are close, ship to the home address the student is going back to instead.`,
          `For the spring move-out, ask the school what it does with mail that arrives after students leave, since some forward it and some return it.`,
          `If a student lives off campus, ship to the apartment, with the unit number on line 2.`,
        ],
      },
      { h: 'Cold mailrooms and hot dorm rooms' },
      {
        p: `Quell’s label gives a storage range: {storage}. Two campus spots can push a bottle outside it. A package left in an unheated entryway or a loading dock in January can get cold, and a dorm room with an old radiator that can’t be turned down can run warm. Keep the bottle in a desk drawer or a toiletry bag rather than on a windowsill or next to the heater, and away from a lofted bed tucked up near the ceiling, where the warmest air collects.`,
      },
      {
        p: `If a package sat somewhere very cold or hot for a long time, look at the solution before using it. {appearance} The label adds: {doNotUse}.`,
      },
      { h: 'Using drops in a shared dorm bathroom' },
      {
        p: `Shared bathrooms are busy and not always clean. Wash your hands before using drops, use them at your own sink or back in your room, and cap the bottle right away. {tip}. Keep it in your own toiletry bag rather than on a shelf, and don’t share it with a roommate, however close you are. The directions are the same on campus as anywhere: {directions}.`,
      },
      { h: 'Sending it as part of a care package' },
      {
        p: `If the eye drops are going in a box of snacks and notes from home, the shipping advice still applies, and [eye drops in a college care package](/guides/college-care-package-eye-drops) has ideas on the gift side. A Quell order can go straight to the student on its own, too, without being repacked.`,
      },
    ],
    faq: [
      {
        q: 'How do I address a package to a college dorm?',
        a: 'Use the student’s full legal name, the mailing address the school publishes for residents, and the campus box or room number on the second address line. The college’s mail services page shows the exact format.',
      },
      {
        q: 'Can I ship eye drops to my kid at college?',
        a: 'Yes. Place the order yourself and enter your student’s campus mailing address as the shipping address. Quell ships to any US address, and the buyer and recipient don’t have to match.',
      },
      {
        q: 'What happens to packages over winter break at college?',
        a: 'It depends on the school. Many mail centers close or shorten hours over breaks, and a package that arrives then may wait until students return, so order well before the term ends.',
      },
      {
        q: 'Can a college student under 18 order Quell?',
        a: 'No. Buyers on quelldrop.com must be 18 or older, so a parent or another adult has to place the order. The label doesn’t give directions for children, so ask a doctor or pharmacist first.',
      },
    ],
  },

  {
    slug: 'dry-eyes-while-ice-fishing',
    title: 'Dry eyes while ice fishing',
    description:
      'Wind across open ice, a heater in the shanty and glare off the snow all dry the eyes. How to keep them comfortable, and keep your drops from freezing.',
    category: 'seasonal',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Ice fishing dries the eyes from several directions: cold air holds little moisture, wind sweeps across open ice with nothing to stop it, a heater in the shanty dries the air further, and glare off snow makes you squint for hours. Wraparound sunglasses, a heater aimed away from your face and a bottle carried close to your body all help.`,
      },
      { h: 'Why your eyes dry out on the ice' },
      {
        p: `A frozen lake is one of the most exposed places you can spend a winter day. There are no trees or buildings to break the wind, so it blows steadily across the surface of your eyes while you watch a tip-up or a flasher. Cold air carries very little water to begin with. And when you stare at a hole in the ice or a screen waiting for a bite, you blink less, so the tear film has longer to thin between blinks.`,
      },
      {
        p: `Many people find their eyes water at first on the ice, then feel gritty later. Watering is the eye reacting to the cold and wind; it doesn’t mean the surface is staying moist. [Dry eyes from cold air](/guides/dry-eyes-from-cold-air) explains that pattern in general.`,
      },
      { h: 'Inside the shanty: heaters and stale air' },
      {
        p: `A portable heater turns a pop-up shelter or a permanent fish house into a warm room, and it dries that room as it heats it. Sitting a few feet from the heater for hours puts a steady stream of warm, dry air on your face.`,
      },
      {
        list: [
          `Point the heater at your feet or the floor, not at your face.`,
          `Sit to the side of it rather than directly in front of it.`,
          `Follow the heater maker’s instructions for ventilation; open the vents they call for.`,
          `Step outside now and then, which gives your eyes a break from the heated air and you a look at the weather.`,
        ],
      },
      { h: 'Glare off snow and ice' },
      {
        p: `A sunny day on a snow-covered lake throws light up at you from below as well as down from the sky. Squinting against that glare for hours is tiring, and it tends to go with fewer full blinks. Polarized sunglasses cut reflected glare, and wraparound frames or ski goggles block side wind too. On a windy day, goggles are the more comfortable choice for the walk or ride out to your spot.`,
      },
      { h: 'How to keep eye drops from freezing on the ice' },
      {
        p: `Quell’s label gives a storage range: {storage}. A winter day on the ice is far below the bottom of that range, so where the bottle rides matters more than anything else you do with it.`,
      },
      {
        list: [
          `Carry it in an inside chest pocket of your jacket, close to your body, not in an outer pocket.`,
          `Keep it out of the sled, the bucket and the tackle box, which sit at the temperature of the ice.`,
          `Don’t leave it in the truck or on the ATV while you fish.`,
          `Don’t set it next to the heater either. Too warm is out of range as well.`,
          `Leave the spare bottle at home in a drawer rather than in the truck for the season.`,
        ],
      },
      {
        p: `If a bottle froze or got very cold, look at it before using it. {appearance} The label’s “do not use” line reads: {doNotUse}. The label doesn’t say what to do with a bottle that froze; call Quell at {phone}, {hours}, or ask a pharmacist. [How to store eye drops](/guides/how-to-store-eye-drops) covers temperatures in more detail.`,
      },
      { h: 'Cold hands, bait and clean fingers' },
      {
        p: `Ice fishing hands are cold, wet and covered in whatever you last touched: minnows, waxworms, fish, auger handles and the inside of a glove. None of that should go near your eye.`,
      },
      {
        list: [
          `Wash your hands with soap and water before using drops, at home before you head out or at the bait shop.`,
          `If soap isn’t an option, wipe your hands clean and let any hand sanitizer dry completely first.`,
          `Warm your hands in your pockets so they’re steady enough to aim.`,
          `Keep the cap off for as short a time as you can. {tip}.`,
        ],
      },
      { h: 'Fitting drops into a day on the ice' },
      {
        p: `The directions are the same on a lake as anywhere else: {directions}. A day of fishing often works around them naturally: one at home before you leave, one in the warmth of the shanty around midday with clean hands, and one after you’re home and thawed out. Using drops out in the open wind, with cold fingers and gloves half on, is harder and messier than it needs to be.`,
      },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. It isn’t a substitute for goggles or for getting out of the wind. The full label, including the egg and bird caution, is on the [Drug Facts page](/drug-facts); read it before the season starts rather than on the ice.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Eyes that sting for a while after a long day in the wind usually settle once you’re indoors. If yours don’t, if your vision changes, or if one eye hurts, see an eye doctor; working out what happened is their job. The label puts it this way: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes water when ice fishing?',
        a: 'Cold wind across open ice irritates the surface of the eye, and watering is the eye’s reaction. It often gives way to a dry, gritty feeling later in the day.',
      },
      {
        q: 'Can a propane heater in an ice shanty dry out your eyes?',
        a: 'Heaters warm the air without adding moisture, so a shanty dries out as it warms up. Aim the heater at the floor, sit to one side of it and follow its maker’s ventilation instructions.',
      },
      {
        q: 'How do I keep eye drops from freezing on the ice?',
        a: 'Carry the bottle in an inside chest pocket, close to your body, and keep it out of the sled, bucket and truck. Quell’s label says: {storage}.',
      },
      {
        q: 'Should I wear sunglasses when ice fishing?',
        a: 'Polarized sunglasses cut the glare reflected off snow and ice, and wraparound frames or goggles also block wind from the sides. Both help keep your eyes comfortable on a long day out.',
      },
    ],
  },

  {
    slug: 'snowbird-travel-with-eye-drops',
    title: 'Snowbird travel with eye drops',
    description:
      'Wintering in Florida or Arizona? Changing your shipping address, packing enough drops for months away, the drive south and the desert vs. the coast.',
    category: 'seasonal',
    addedOn: '2026-11-12',
    body: [
      {
        p: `If you winter in Florida, Arizona or another warm state, you can keep using Quell by entering your winter address at checkout; it ships anywhere in the United States, but not abroad. Pack enough for the drive or flight down and the first weeks there, keep bottles out of a hot or freezing car, and expect desert air to feel drier than the Gulf Coast.`,
      },
      { h: 'Changing your shipping address for the winter' },
      {
        p: `Each Quell order ships to the address entered for that order, so there’s nothing to update in an account or a subscription: there’s no subscription, and checkout works without an account. When you head south, enter your winter address on your next order. When you go home in spring, enter the home address again.`,
      },
      {
        list: [
          `Check the address before you pay, especially if your browser autofills your northern one.`,
          `Put the unit, lot or site number on the second line for a condo, RV park or manufactured-home community.`,
          `Some communities hold packages at a clubhouse or office. Add a name the office will recognize.`,
          `If you use mail forwarding, it’s usually simpler to order straight to the winter address than to rely on forwarding.`,
        ],
      },
      {
        p: `[Shipping to a holiday address](/guides/shipping-to-a-holiday-address) covers temporary addresses in more detail.`,
      },
      { h: 'How many bottles to pack for months away' },
      {
        p: `The directions set the pace: {directions}. Each bottle holds {size}. How long that lasts depends on how many drops actually reach the eye, which varies, so count your own pace at home for a few weeks before the trip; [how long a bottle lasts](/guides/how-long-does-a-bottle-of-eye-drops-last) walks through it. Then pack enough to cover the trip down and a cushion for the first stretch in your winter home, and plan to reorder from there.`,
      },
      {
        p: `Shipping is {shipping}, or free on orders of {freeThreshold} or more, which covers {freeBottles} bottles. Because no delivery date is promised, place the first winter order soon after you arrive rather than when the packed bottles run out. Quell sends one reminder email when it may be time to reorder.`,
      },
      { h: 'The drive south: keeping bottles in range' },
      {
        p: `Many snowbirds drive, and a car is hard on a bottle in both directions. Quell’s label says: {storage}. Leaving the north in late fall, a car parked at a motel through a frosty night can drop below that range. Arriving in the South, a car in a sunny lot can climb well above it within an hour.`,
      },
      {
        list: [
          `Keep the bottle you’re using in a bag that comes into the motel room and the restaurant with you.`,
          `Pack spares inside a suitcase in the passenger area, not in a rooftop carrier or the trunk.`,
          `If you bring a cooler, keep the drops out of direct contact with ice.`,
          `Use drops at rest stops, not while you’re driving, and wash your hands first.`,
        ],
      },
      { h: 'Flying down with eye drops' },
      {
        p: `TSA’s 3-1-1 rule limits carry-on liquids to containers of 3.4 ounces (100 mL) or less, packed in one quart-size bag. A bottle of Quell holds {size}, well under that. Keeping it in your carry-on means it stays with you, and in reach, for the whole trip. [Traveling with eye drops](/guides/traveling-with-eye-drops) has the rest of the airport details.`,
      },
      { h: 'Desert air vs. the Gulf Coast' },
      {
        p: `Where you winter changes how dry the air feels. NOAA’s Comparative Climatic Data table, which averages relative humidity by month, shows the contrast clearly:`,
      },
      {
        list: [
          `Phoenix: January averages 60 percent in the morning and 33 percent in the afternoon. By March, afternoons average 23 percent.`,
          `Fort Myers, Florida: January averages 89 percent in the morning and 55 percent in the afternoon. March afternoons average 50 percent.`,
        ],
      },
      {
        p: `In Arizona, the outdoor air itself is dry, and a round of golf or a desert hike can leave your eyes scratchy. On the Florida coast the outside air is humid, but people spend long stretches in air-conditioned homes, cars and stores, and that cooled air is drier than the air outside. Either way, wraparound sunglasses outdoors and vents aimed away from your face indoors make a difference.`,
      },
      { h: 'Wintering outside the United States' },
      {
        p: `Quell ships to US addresses only, so it can’t go to a winter home in Mexico, the Caribbean or elsewhere. If you split the season between a US address and somewhere abroad, order to the US address and pack what you need. Any buyer 18 or older can send an order to a US winter address, wherever home is the rest of the year. For questions about bringing drops across a border, ask that country’s customs authority.`,
      },
      { h: 'Seeing a doctor away from home' },
      {
        p: `If your eyes bother you in a new way after the move south, or the dryness keeps going despite the change of climate, find an eye doctor near your winter home rather than waiting for spring. The label says when to stop and get help: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Can I change my shipping address for the winter?',
        a: 'Yes. Each Quell order ships to the address you enter at checkout, so just enter your winter address on the next order and switch back in spring. There’s no account or subscription to update.',
      },
      {
        q: 'How many eye drops should I take for a winter in Florida?',
        a: 'Enough for the trip and the first few weeks there, based on how fast you use a bottle at home. Then reorder to your Florida address, leaving time since no delivery date is promised.',
      },
      {
        q: 'Is Arizona drier than Florida in winter?',
        a: 'Much drier. NOAA’s humidity table shows January afternoons averaging 33 percent in Phoenix and 55 percent in Fort Myers, Florida.',
      },
      {
        q: 'Can Quell ship to Canada or Mexico?',
        a: 'No. Quell ships to United States addresses only. Snowbirds can order to a US winter address and carry bottles from there.',
      },
    ],
  },

  {
    slug: 'dry-eyes-on-the-night-shift',
    title: 'Dry eyes on the night shift',
    description:
      'Bright lights at 3 a.m., screens, empty-building air and sleep in daylight: why night work dries the eyes, and how to time drops within the label.',
    category: 'using',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Night-shift work is hard on the eyes because it stacks several drying factors: bright lighting and screens that cut blinking, building air that’s heated or cooled with nobody adjusting it, and tired eyes at the end of a long shift. Quell’s directions don’t change at night, so the trick is spacing three drops a day around your own schedule rather than the clock on the wall.`,
      },
      { h: 'Why your eyes feel dry after a night shift' },
      {
        p: `Whether you work a hospital floor, a warehouse, a dispatch center, a factory line or a security desk, the conditions at 3 a.m. have a lot in common.`,
      },
      {
        list: [
          `Bright, even lighting. Workplaces stay lit so people can see, and staring into bright light and screens tends to come with fewer full blinks.`,
          `Screens. Monitors, scanners, camera feeds and phones on break all ask your eyes to focus close for hours.`,
          `Building air. Heating and cooling systems often run on schedules set for the day crew, and moving air across your face speeds evaporation from the eye.`,
          `Fatigue. Tired eyes feel scratchy, and by the last hours of a shift many people blink less and rub their eyes more.`,
        ],
      },
      {
        p: `None of these is unique to nights. The difference is that nights stack them, and then you try to sleep in daylight. [Dry eyes from lack of sleep](/guides/dry-eyes-from-lack-of-sleep) looks at the sleep side of it.`,
      },
      { h: 'When should I use eye drops if I work nights?' },
      {
        p: `Quell’s directions read: {directions}. The label gives a count per day; it doesn’t give clock times, and it doesn’t say how to count a day when your day starts at 7 p.m. A simple approach many night workers use is to count the hours they’re awake as their day and spread the three drops across them:`,
      },
      {
        list: [
          `One when you wake up in the afternoon or evening, before you leave for work.`,
          `One around the middle of the shift, on a break, with clean hands.`,
          `One toward the end of the shift, or once you’re home and before you go to bed.`,
        ],
      },
      {
        p: `If your schedule rotates between days and nights, the count can get confusing on switch days. Ask your pharmacist how to count it so you stay within the directions. [Questions to ask a pharmacist](/guides/questions-to-ask-your-pharmacist) has a list worth bringing.`,
      },
      { h: 'Sleeping during the day with dry eyes' },
      {
        p: `Day sleep happens in a bedroom that’s often warmer, brighter and noisier than it would be at night. People reach for fans for white noise and cool air, and a fan blowing on your face for six or seven hours is moving air across your eyes the whole time.`,
      },
      {
        list: [
          `Point the fan at the wall or the foot of the bed instead of your face.`,
          `Blackout curtains or a sleep mask help you sleep in daylight; a soft mask also keeps fan air off your eyelids.`,
          `A humidifier can take the edge off dry air in the bedroom. Keep it clean.`,
          `Keep the room cool with the thermostat rather than a vent aimed at the bed.`,
        ],
      },
      { h: 'Screens and lighting at work' },
      {
        p: `If your post includes monitors, small changes add up across a 10- or 12-hour shift. Lower the screen slightly below eye level so your eyelids cover more of the eye. Turn down a monitor that’s much brighter than the room around it. Every so often, look across the room or out a window and blink fully a few times. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why blinking matters so much.`,
      },
      { h: 'The drive home after a night shift' },
      {
        p: `Morning sun low on the horizon and tired eyes make the drive home hard. Sunglasses help with the glare. Put drops in before you leave the parking lot, not while you’re driving, and give your eyes a moment to settle before you pull out. If you’re ever too tired to keep your eyes open on the road, that’s a reason to pull over, whatever drops you have with you.`,
      },
      { h: 'Keeping a bottle at work' },
      {
        p: `A locker, a desk drawer or a bag that stays with you all work. Quell’s label gives a storage range: {storage}. A car parked through a winter night or a summer morning can go outside that range, so take the bottle in with you. On the floor, a scrub or uniform pocket keeps it handy for breaks. {tip}, so cap it as soon as you’re done. Wash your hands before each use, which matters more in workplaces where you handle shared equipment.`,
      },
      { h: 'Where Quell fits' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. It doesn’t replace sleep, breaks or a well-placed fan. It also doesn’t replace an eye doctor: if your eyes stay uncomfortable after a few days off, or anything about your vision changes, see one, because working out the reason is their job. The label’s stop-use list: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes hurt after a night shift?',
        a: 'Hours of bright light and screens, moving building air and fatigue all add up across a night shift. Fewer blinks let the tear film thin, and the eyes can feel dry or scratchy by morning. If the discomfort is real pain, see a doctor.',
      },
      {
        q: 'When should I use eye drops if I work nights?',
        a: 'Quell’s directions give a number per day, not clock times. Many night workers spread the three drops across their waking hours: on waking, mid-shift and at the end of the shift.',
      },
      {
        q: 'Can I use eye drops before sleeping during the day?',
        a: 'The label doesn’t limit when in your day the drops go in, only how many. Using one before day sleep is within the directions as long as it’s part of the daily count.',
      },
      {
        q: 'Can I put in eye drops before driving home from a night shift?',
        a: 'Put them in before you leave the parking lot, not while driving, and wait for your eyes to settle before you pull out. Sunglasses help with the morning glare on the way home.',
      },
    ],
  },

  {
    slug: 'dry-eyes-on-the-golf-course',
    title: 'Dry eyes on the golf course',
    description:
      'Four hours of sun, wind across open fairways and a breezy cart ride: why golf dries the eyes, and how to carry drops in your bag without cooking them.',
    category: 'using',
    addedOn: '2026-11-12',
    body: [
      {
        p: `A round of golf dries the eyes because it keeps you outdoors for hours in sun and wind, with long stretches of focused staring over putts and approach shots. A cart ride adds a steady breeze to the face. Wraparound sunglasses, a cap, drops at the turn with clean hands, and a bottle kept out of a hot trunk make the round easier on your eyes.`,
      },
      { h: 'Why do my eyes get dry playing golf?' },
      {
        p: `Golf courses are built to be open. Fairways, ranges and greens give the wind a clear run, and most of a round is spent in direct sun. Several things work on your eyes at once:`,
      },
      {
        list: [
          `Time outdoors. Eighteen holes keeps you out for hours, often in the middle of the day.`,
          `Wind. A breeze you barely notice on the tee is still moving air across your eyes the whole time.`,
          `Concentration. Reading a green or lining up a putt, you hold your gaze still and blink less.`,
          `Glare. Bright sky, white sand and water hazards all reflect light, and squinting against it is tiring.`,
          `Sweat and sunscreen. On a hot day, both can run down your forehead into your eyes and sting.`,
        ],
      },
      { h: 'Sun, glare and sunglasses on the course' },
      {
        p: `Sunglasses help with both glare and wind, and wraparound frames block air coming from the side, which flat frames let through. Some golfers find very dark or strongly tinted lenses make it harder to read the slope of a green or follow the ball against the sky; if that’s you, try a lighter tint rather than going without. A cap or visor with a brim shades your eyes from overhead sun and cuts down on squinting. On a windy day, keep your face turned slightly away from gusts while you wait on the tee.`,
      },
      { h: 'The cart ride and the wind' },
      {
        p: `A golf cart moving down the path pushes air straight into your face, on top of whatever wind is blowing. Over a full round that adds up to a lot of breeze. Riding behind a windshield helps when the cart has one, and sunglasses help when it doesn’t. If you walk the course, you trade that for more time in the sun, so the cap and sunglasses matter just as much.`,
      },
      { h: 'Can I keep eye drops in my golf bag?' },
      {
        p: `Yes, during the round, in a pocket that stays out of direct sun. The problem is where the bag goes afterward. Many golfers leave their clubs in the trunk between rounds, and a trunk on a summer afternoon gets far hotter than the air outside. Quell’s label gives the storage range: {storage}.`,
      },
      {
        list: [
          `Use an inside or insulated pocket of the bag during play, away from the side facing the sun.`,
          `Take the bottle out of the bag when you load the car, and bring it inside with you.`,
          `Don’t store a spare in the bag for the season; keep spares in a drawer at home.`,
          `In cold weather, a bag left in an unheated garage or a winter trunk can drop below the range too.`,
        ],
      },
      {
        p: `[Can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car) has more on why heat matters.`,
      },
      { h: 'When to use eye drops during a round of golf' },
      {
        p: `The directions don’t change on the course: {directions}. Golfers often fit one drop around the round itself: one before leaving home, one at the turn, and one in the evening. The turn is a natural point because you can wash up at the clubhouse first.`,
      },
      {
        list: [
          `Wash your hands before using drops. Sunscreen, grass, sand and grip residue all end up on your fingers.`,
          `Don’t put drops in right before a shot. Give your eyes a moment to settle and your vision to clear.`,
          `Cap the bottle immediately. {tip}.`,
          `Wipe sweat and sunscreen from your brow first so they don’t run into your eyes with the drop.`,
        ],
      },
      { h: 'Keeping sunscreen and sweat out of your eyes' },
      {
        p: `Sunscreen that runs into the eyes stings, and it’s easy to mistake that for dryness. Apply sunscreen to your face before you leave home, so it has time to set, and keep it a little away from the eyelids. A sweatband or a cap with an absorbent band catches sweat before it reaches your brow. Carry a clean towel just for your face, separate from the one you use on your clubs and balls.`,
      },
      { h: 'Where Quell fits' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The tear film’s outer oil layer slows evaporation from the water beneath it, and wind and sun speed that evaporation up. Read the full label on the [Drug Facts page](/drug-facts) before you start; it includes a caution for people with egg or bird allergies because the formula contains emu oil. [Dry air, wind and altitude](/guides/dry-air-wind-and-altitude) explains more about how moving air affects the eye.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay uncomfortable well after the round, or you notice any change in how you see the ball or the green, see an eye doctor; finding the reason is their part of the job. Quell’s label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry playing golf?',
        a: 'A round keeps you outdoors for hours in sun and wind, and you blink less while focusing on shots and putts. Riding in a cart adds a steady breeze to your face.',
      },
      {
        q: 'Can I keep eye drops in my golf bag?',
        a: 'During a round, yes, in a shaded inner pocket. Don’t leave them in the bag in a hot trunk afterward; Quell’s label says: {storage}.',
      },
      {
        q: 'Should I wear sunglasses when golfing?',
        a: 'Sunglasses cut glare and block wind, and wraparound frames block wind from the side as well. If dark lenses make it hard to read greens, try a lighter tint.',
      },
      {
        q: 'When should I use eye drops during a round of golf?',
        a: 'Many golfers use one at the turn, after washing up at the clubhouse, with the others before and after the round. Quell’s directions set the daily count, not the times.',
      },
    ],
  },

  {
    slug: 'why-do-eye-drops-sting',
    title: 'Why do eye drops sting when you put them in?',
    description:
      'A cold drop, an eye that’s already irritated, a touched tip or a stray bit of sunscreen can all make drops sting. What to check, and when to stop.',
    category: 'using',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Eye drops can sting for a few everyday reasons: a cold drop landing on a warm eye, an eye that’s already irritated reacting to anything at all, a bottle tip that touched something, or residue on your fingers. A brief sting that fades as you blink is different from one that persists. Stinging that keeps going, pain or any change in vision means stop and ask a doctor.`,
      },
      { h: 'Why do eye drops sting at first?' },
      {
        p: `The front surface of the eye is very sensitive, and it notices anything new: a change in temperature, a change in moisture, a drop hitting the clear front of the eye directly. Some people feel a quick sting with any drop and none a moment later. The common causes are easy to check one at a time.`,
      },
      { h: 'A cold bottle' },
      {
        p: `A drop straight from a cold car, a chilly bathroom or the refrigerator can feel sharp on a warm eye. Quell’s label gives a storage range rather than telling you to refrigerate: {storage}. A bottle kept in that range, in a drawer or a bag, reaches the eye at a comfortable temperature. If yours has been somewhere cold, hold it in your closed hand for a minute before using it. [Should eye drops be refrigerated?](/guides/should-eye-drops-be-refrigerated) covers this in more detail.`,
      },
      { h: 'An eye that’s already irritated' },
      {
        p: `When your eyes are dry, tired or irritated from wind, smoke or a long day at a screen, the surface is more sensitive than usual, and almost anything placed on it can sting for a moment. That’s often why the same drops feel fine some mornings and sting on others. If the sting fades quickly and the eye feels better afterward, that pattern is familiar to a lot of people. If the sting comes with pain or doesn’t fade, it’s a different matter.`,
      },
      { h: 'Something on the tip or your fingers' },
      {
        p: `A dropper tip that brushed an eyelash, a counter or the inside of a bag can carry something into the eye with the next drop. So can fingers with soap, lotion, hand sanitizer, sunscreen or makeup on them. The label’s rule is clear: {tip}.`,
      },
      {
        list: [
          `Wash and dry your hands before using drops, and let sanitizer dry fully if you use it.`,
          `Hold the bottle above the eye without letting the tip touch your eye, lid or lashes.`,
          `Replace the cap right away and keep the bottle in a clean place.`,
          `If the tip touched something, call Quell at {phone}, {hours}, or ask a pharmacist what to do with that bottle.`,
        ],
      },
      {
        p: `[Why you should never touch the bottle tip](/guides/do-not-touch-the-tip) explains the reasoning.`,
      },
      { h: 'Why do eye drops burn sometimes?' },
      {
        p: `A few other things can turn a sting into a burn:`,
      },
      {
        list: [
          `The wrong bottle. Ear drops, nasal sprays and contact lens solutions can look similar. Read the label before every use; Quell’s says: {warnings}.`,
          `A changed product. Quell is normally milky brown. {appearance} The label’s “do not use” line reads: {doNotUse}.`,
          `Contact lenses. Quell’s label doesn’t give directions for use with contact lenses; ask your eye doctor before using any drop with them.`,
          `Other drops. The label doesn’t cover using it together with other eye drops either, so ask your eye doctor or pharmacist about spacing or combining them.`,
          `An ingredient you react to. The label cautions people with egg or bird allergies, because the formula contains emu oil.`,
        ],
      },
      { h: 'Do preservative-free drops sting less?' },
      {
        p: `Preservatives such as benzalkonium chloride are a common source of irritation for people who use drops several times a day, and Quell contains no preservatives. That removes one possible cause, but it doesn’t mean no drop will ever sting, since temperature, an irritated eye and contamination still apply. The ingredients are listed in full on the [Drug Facts page](/drug-facts): active ingredients {actives}; inactive ingredients {inactives}.`,
      },
      { h: 'What to do when an eye drop stings' },
      {
        list: [
          `Close your eye gently and blink a few times. Don’t rub it.`,
          `Wait a minute. A sting from a cold drop or a dry eye usually passes as the drop spreads.`,
          `Check the bottle: is it the right product, the right color, and was the tip clean?`,
          `Keep to the directions: {directions}. Adding extra drops won’t settle a sting.`,
          `If stinging continues, or comes with pain, a change in vision or ongoing irritation, stop using it and contact a doctor.`,
        ],
      },
      { h: 'When stinging means stop' },
      {
        p: `The label is specific about when to stop: {stopUse} A sting that keeps coming back with every drop is also worth raising with an eye doctor or pharmacist, who can look at what’s going on; working that out isn’t something a bottle of drops can do. [When to stop using eye drops](/guides/when-to-stop-using-eye-drops) has more.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eye drops sting sometimes but not other times?',
        a: 'An eye that’s dry, tired or irritated is more sensitive, and a cold bottle or residue on your fingers can add to it. On a calm day with a room-temperature bottle and clean hands, the same drops may not sting at all.',
      },
      {
        q: 'Why do eye drops burn when I put them in?',
        a: 'Common reasons include a cold bottle, an already irritated eye, a tip that touched something, or soap, sanitizer or sunscreen on your fingers. A burn that continues, or comes with pain or vision changes, means stop and see a doctor.',
      },
      {
        q: 'Should I keep using eye drops if they sting?',
        a: 'A sting that fades in a moment is different from one that persists. If stinging continues, or you have pain, vision changes or ongoing irritation, stop and ask a doctor, as Quell’s label directs.',
      },
      {
        q: 'Does a cold eye drop sting more?',
        a: 'A drop that’s much colder than your eye can feel sharp. Quell’s label gives a storage range of {storage}, so a bottle kept in a drawer or bag reaches the eye at a comfortable temperature.',
      },
    ],
  },

  {
    slug: 'emollient-eye-drops',
    title: 'Emollient eye drops: what the word means',
    description:
      'An emollient is an oily eye drop ingredient. How FDA’s rules define it, which ingredients qualify, and how emollient and lubricant drops differ.',
    category: 'label',
    addedOn: '2026-11-12',
    body: [
      {
        p: `In eye drops, an emollient is an oily active ingredient. FDA’s rules for over-the-counter eye products define it, in 21 CFR 349.3, as an agent that’s “usually a fat or oil,” applied to protect or soften tissues. Section 349.14 lists the emollients those rules allow, and light mineral oil is one of them. It’s the emollient among Quell’s three active ingredients.`,
      },
      { h: 'Where the word comes from on a label' },
      {
        p: `Over-the-counter eye drops in the United States are governed by part 349 of Title 21 of the Code of Federal Regulations, titled “Ophthalmic Drug Products for Over-the-Counter Human Use.” It works by category: it names kinds of active ingredient, lists the ingredients allowed in each, and sets what the label may say. Emollients are one of those categories, and when a Drug Facts panel lists an ingredient’s purpose as “emollient,” that’s the category it’s pointing to.`,
      },
      {
        p: `The definition in section 349.3 describes an emollient as usually a fat or oil applied locally to protect or soften tissues and keep them from drying and cracking. Notice that its wording speaks of the eyelids. Oily ingredients aren’t limited to ointments, though; Quell is a drop, and its Drug Facts panel lists one.`,
      },
      { h: 'Which ingredients count as emollients' },
      {
        p: `Section 349.14, “Ophthalmic emollients,” lists the allowed ingredients in two groups, each with its own conditions on strength and combination:`,
      },
      {
        list: [
          `Lanolin preparations: anhydrous lanolin and lanolin, which the rule allows only in combination with one or more of the oily emollients below.`,
          `Oleaginous, meaning oily, ingredients: light mineral oil, mineral oil, paraffin, petrolatum, white ointment, white petrolatum, white wax and yellow wax.`,
        ],
      },
      {
        p: `Several names on that list, such as petrolatum and white petrolatum, are the familiar greasy bases of eye ointments. Light mineral oil is a thinner oil than those. The label shows how much of each active is in a given product; Quell’s panel lists {mineralOil}.`,
      },
      { h: 'Emollient vs. lubricant eye drops' },
      {
        p: `“Lubricant eye drops” is a description, not a separate legal category. On a Drug Facts panel, “lubricant” is the purpose given to water-friendly ingredients like glycerin and polysorbate 80, which part 349 groups as demulcents. So a drop sold as a lubricant eye drop may contain only demulcents, or demulcents plus an emollient. The way to tell is to read the Purpose column beside each active ingredient.`,
      },
      {
        list: [
          `Demulcents (labeled “lubricant”): usually water-soluble, and they coat and lubricate the eye’s surface.`,
          `Emollients (labeled “emollient”): usually a fat or oil, and they bring an oily component.`,
        ],
      },
      {
        p: `[What is a demulcent in eye drops?](/guides/what-is-a-demulcent-in-eye-drops) covers the water-friendly side in detail.`,
      },
      { h: 'Emollient lubricant eye drops' },
      {
        p: `Some drops combine both kinds, and Quell is one of them. Its active ingredients are {actives}. The panel gives glycerol and polysorbate 80 the purpose “lubricant” and light mineral oil the purpose “emollient.” The pairing reflects the tear film itself, which has a watery layer under a thin oily one. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its inactive ingredients add natural oils, including emu oil. That oily content is also why the solution isn’t clear: {milky}.`,
      },
      {
        p: `[Light mineral oil in eye drops](/guides/light-mineral-oil-in-eye-drops) looks at that one ingredient on its own.`,
      },
      { h: 'Emollient eye drops: side effects and warnings' },
      {
        p: `The place to look for warnings is the Drug Facts panel of the specific product, not a general article about a category. Quell’s warnings read: {warnings}. The emu oil among its inactive ingredients is the reason for the egg and bird caution. Its stop-use section reads: {stopUse}`,
      },
      {
        p: `If you’re weighing an emollient drop because of contact lenses, other eye drops you use, or a child’s eyes, Quell’s label doesn’t cover those situations. Ask your eye doctor or pharmacist first.`,
      },
      { h: 'How to spot an emollient on a Drug Facts panel' },
      {
        list: [
          `Find the Active ingredients section at the top of the panel.`,
          `Read the Purpose column next to each ingredient.`,
          `“Emollient” there means an oily ingredient from the part 349 list; “lubricant” usually means a demulcent.`,
          `Check the strength printed beside each one, since the rule limits how much may be used.`,
          `Compare the inactive ingredients too, since they can add oils of their own that aren’t counted as actives.`,
        ],
      },
      {
        p: `The full panel for Quell is on the [Drug Facts page](/drug-facts), and [the active ingredients section](/guides/the-active-ingredients-section) explains how that part of any label is laid out.`,
      },
    ],
    faq: [
      {
        q: 'What is an emollient in eye drops?',
        a: 'An oily active ingredient. FDA’s rules for over-the-counter eye products, 21 CFR 349.3, describe an emollient as usually a fat or oil used to protect or soften tissues, and section 349.14 lists the ones allowed.',
      },
      {
        q: 'Is mineral oil an emollient?',
        a: 'Yes. Both mineral oil and light mineral oil appear in 21 CFR 349.14’s list of oleaginous emollients for over-the-counter eye products. Quell’s label lists light mineral oil with the purpose “emollient.”',
      },
      {
        q: 'What is the difference between emollient and lubricant eye drops?',
        a: 'On a Drug Facts panel, “lubricant” is the purpose given to water-friendly demulcents such as glycerin, while “emollient” marks an oily ingredient. Some drops, Quell among them, contain both.',
      },
      {
        q: 'Are emollient eye drops the same as eye ointment?',
        a: 'Not quite. Many eye ointments are built on heavy emollients like petrolatum, while a drop such as Quell uses a thinner one, light mineral oil, alongside watery lubricants.',
      },
    ],
  },

  /*
   * what-is-the-ndc-number-on-eye-drops. Sources fetched 2026-11-12:
   * - https://www.fda.gov/drugs/drug-approvals-and-databases/national-drug-code-directory
   *   (three-segment identifier; directory includes Rx and OTC; updated daily; inclusion
   *   doesn't mean FDA verified it; NDC doesn't denote approval; 12-digit format effective
   *   March 7, 2033)
   * - https://www.fda.gov/drugs/development-approval-process-drugs/national-drug-code-database-background-information
   *   (labeler code assigned by FDA; product and package codes by the firm; 4-4-2, 5-3-2,
   *   5-4-1 configurations)
   * Quell's own NDC is not in the site's code, so it isn't stated.
   */
  {
    slug: 'what-is-the-ndc-number-on-eye-drops',
    title: 'What is the NDC number on eye drops?',
    description:
      'The NDC is FDA’s three-part identifier for a drug: who labels it, what it is and how it’s packaged. How to read one, find it and look it up.',
    category: 'label',
    addedOn: '2026-11-12',
    body: [
      {
        p: `The NDC, or National Drug Code, is the FDA’s identifier for a drug product. It’s a 10-digit number in three segments: the labeler (the company), the product (its strength, form and formulation) and the package (size and type). When a company prints it on a box or bottle, it usually appears with the letters “NDC” in front. It identifies a product; it isn’t a sign of FDA approval.`,
      },
      { h: 'What NDC stands for' },
      {
        p: `National Drug Code. The FDA describes it as a unique, three-segment number that serves as the agency’s identifier for drugs. Companies that make, repackage or distribute drugs under their own name list their products with the FDA using these numbers, and the FDA publishes them in its NDC Directory.`,
      },
      { h: 'How to read the three segments' },
      {
        p: `According to the FDA’s background page on the NDC, each segment has a job, and they aren’t all assigned by the same party:`,
      },
      {
        list: [
          `Labeler code: the first segment, assigned by the FDA. It identifies the firm that makes, repackages or distributes the drug under its own name.`,
          `Product code: the second segment, assigned by the firm. It identifies a specific strength, dosage form and formulation from that firm.`,
          `Package code: the third segment, also assigned by the firm. It identifies package sizes and types.`,
        ],
      },
      {
        p: `Because the whole number is 10 digits, the segments come in one of three patterns: 4-4-2, 5-3-2 or 5-4-1. Written with the dashes, an NDC might look like XXXXX-XXX-XX. That’s why two NDCs from different companies can have differently sized segments, and why the dashes matter when you read one out to a pharmacist. Some computer systems add a leading zero to make every NDC the same length, which can make the original hard to reconstruct.`,
      },
      { h: 'Where is the NDC number on eye drops?' },
      {
        p: `There isn’t one fixed spot. When a company prints an NDC, look for the letters “NDC” followed by the number on the outer carton, often on the front or a side panel, and sometimes on the bottle label too. It’s a separate number from the lot number and the expiration date, which are usually stamped or printed together on a flap or the bottom of the box.`,
      },
      {
        p: `This site doesn’t publish an NDC for Quell. If you need one for a form or a question, check the carton you have, or call Quell at {phone}, {hours}.`,
      },
      { h: 'How to look up an NDC' },
      {
        list: [
          `Search “FDA NDC Directory” and open the FDA’s own search page.`,
          `Enter the number with or without dashes, or search by product or company name.`,
          `Check the listing’s proprietary name, labeler, dosage form and package description against the box in your hand.`,
          `Keep in mind that the directory is updated daily, and a very new or recently changed listing may differ from an older box.`,
        ],
      },
      { h: 'Does an NDC number mean a drug has FDA approval?' },
      {
        p: `No. The FDA says plainly that assigning an NDC doesn’t in any way denote approval of the product, and that inclusion in the NDC Directory doesn’t mean the FDA has verified the information. The directory covers prescription and over-the-counter drugs, approved and unapproved, along with repackaged and relabeled products. Over-the-counter eye drops like Quell are marketed under FDA’s monograph rules for that category rather than individual approval, and an NDC doesn’t change that.`,
      },
      { h: 'NDC vs. lot number, expiration date and barcode' },
      {
        list: [
          `NDC: identifies the product and package. Every box of the same product and package size carries the same one.`,
          `Lot number: identifies a production batch, which matters for recalls. See [what the lot number means](/guides/what-the-lot-number-on-eye-drops-means).`,
          `Expiration date: the date to use it by. See [where the expiration date is](/guides/where-is-the-expiration-date-on-eye-drops).`,
          `Barcode: the scannable retail code a store’s register reads. It’s a separate system from the NDC, even when the two share digits.`,
        ],
      },
      { h: 'When you might need the NDC' },
      {
        p: `Most people never do. It comes up when a pharmacist is checking exactly which product you used, when you report a problem to the FDA through MedWatch, or when a form asks for it. In each case, read it straight from the box, dashes included, rather than from memory.`,
      },
      { h: 'The coming change to 12 digits' },
      {
        p: `The FDA has adopted a uniform 12-digit format for the NDC through a final rule, effective March 7, 2033. Until then, boxes on shelves and in medicine cabinets will carry the 10-digit form described above. [How to read an eye drop Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label) covers the rest of what’s printed on the carton.`,
      },
    ],
    faq: [
      {
        q: 'What does NDC stand for on medicine?',
        a: 'National Drug Code. It’s the FDA’s three-segment identifier for a drug product, made up of a labeler code, a product code and a package code.',
      },
      {
        q: 'Does an NDC number mean a drug has FDA approval?',
        a: 'No. The FDA states that assigning an NDC doesn’t denote approval, and that being listed in the NDC Directory doesn’t mean the FDA has verified the information.',
      },
      {
        q: 'How many digits is an NDC number?',
        a: 'Ten, split into three segments in a 4-4-2, 5-3-2 or 5-4-1 pattern. The FDA has adopted a uniform 12-digit format that takes effect on March 7, 2033.',
      },
      {
        q: 'Is the NDC the same as the lot number?',
        a: 'No. The NDC identifies the product and package and is the same on every box of it, while the lot number identifies the specific batch your bottle came from.',
      },
    ],
  },

  /*
   * can-you-use-eye-drops-while-pregnant. Source fetched 2026-11-12:
   * - https://www.law.cornell.edu/cfr/text/21/201.63 (paragraph (a): OTC drugs intended for
   *   systemic absorption carry "If pregnant or breast-feeding, ask a health professional
   *   before use.")
   * DRUG_FACTS in product-content.ts has no pregnancy or breast-feeding line.
   */
  {
    slug: 'can-you-use-eye-drops-while-pregnant',
    title: 'Can you use eye drops while pregnant?',
    description:
      'Quell’s label doesn’t mention pregnancy or breastfeeding. What that silence means, and what to bring when you ask your doctor or pharmacist.',
    category: 'using',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Quell’s label doesn’t address pregnancy or breastfeeding: its Drug Facts panel has no line about either. That silence isn’t a yes. Before using any drug while pregnant or nursing, an over-the-counter eye drop included, ask your obstetrician, midwife or pharmacist, and bring the ingredient list so they can see exactly what’s in the bottle.`,
      },
      { h: 'What Quell’s label says, and doesn’t' },
      {
        p: `The Drug Facts panel on the carton covers these points, and pregnancy isn’t among them:`,
      },
      {
        list: [
          `Uses: {uses}.`,
          `Warnings: {warnings}.`,
          `Do not use: {doNotUse}.`,
          `When using: {tip}.`,
          `Stop use and ask a doctor: when the signs listed later in this guide appear.`,
          `Keep out of reach of children: {swallowed}.`,
        ],
      },
      {
        p: `Nothing in that list speaks to pregnancy or nursing, one way or the other. You can read the whole panel on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'The pregnancy line on other medicine labels' },
      {
        p: `Many over-the-counter medicines carry the sentence “If pregnant or breast-feeding, ask a health professional before use.” That comes from a federal rule, 21 CFR 201.63, which requires it on over-the-counter drugs intended for systemic absorption, meaning drugs meant to work through the bloodstream. Quell’s panel doesn’t carry it.`,
      },
      {
        p: `Don’t read the missing sentence as an all-clear. The rule decides which labels must print the warning; it doesn’t tell you how a particular product fits your pregnancy, your other medicines or your health history. Your own clinician is the person who can weigh that, and asking them first is the right move whatever a label says.`,
      },
      { h: 'Are eye drops okay to use while breastfeeding?' },
      {
        p: `The label is silent on breastfeeding too, so the answer is the same: ask before you start. A pediatrician can weigh in from the baby’s side, and a pharmacist can look at the ingredients alongside anything else you’re taking. If you were using Quell before your baby arrived, mention that, so the question gets answered rather than assumed.`,
      },
      { h: 'What to bring to your doctor or pharmacist' },
      {
        p: `A clear ingredient list makes the conversation quicker. Quell’s active ingredients are {actives}. Its inactive ingredients are {inactives}. Questions worth asking:`,
      },
      {
        list: [
          `Is it all right for me to use this eye drop during my pregnancy, or while nursing?`,
          `Does any ingredient matter with the other medicines and vitamins I take?`,
          `I have (or don’t have) an egg or bird allergy. Does the emu oil caution apply to me?`,
          `Is there anything about my eyes you’d like to check before I use any drop?`,
          `If my eyes change during the pregnancy, who should I call first?`,
        ],
      },
      {
        p: `A printed copy of the [Drug Facts page](/drug-facts), or the carton itself, saves reading ingredient names aloud. [Questions to ask a pharmacist about eye drops](/guides/questions-to-ask-your-pharmacist) has more you can add.`,
      },
      { h: 'The egg and bird caution' },
      {
        p: `Separately from pregnancy, Quell’s label cautions people with egg or bird allergies, because the formula contains emu oil. If you’ve ever reacted to eggs or birds, say so when you ask about the drops. [Egg or bird allergy? Read this before Quell](/guides/egg-or-bird-allergy-and-quell) explains the caution.`,
      },
      { h: 'Comfort steps that don’t involve a drug' },
      {
        p: `While you’re waiting to ask, or if your clinician would rather you hold off on drops, a few changes to your surroundings can take the edge off dry air. None of them involve a medicine:`,
      },
      {
        list: [
          `Point heating and cooling vents, car vents and fans away from your face.`,
          `Run a clean humidifier in the bedroom when the air is dry.`,
          `Take breaks from screens and blink fully a few times when you do.`,
          `Wear sunglasses outside on windy days.`,
        ],
      },
      { h: 'Eye changes to mention right away' },
      {
        p: `Tell your obstetrician or midwife about any change in your vision during pregnancy, such as blurring, spots or flashes, rather than waiting for the next scheduled visit. For the eyes themselves, an eye doctor is the person to sort out what’s going on. And if you do use Quell, its label lists when to stop: {stopUse}`,
      },
      { h: 'If your clinician says yes' },
      {
        p: `Follow the label’s directions: {directions}. Quell ships from Brentwood, Tennessee, to US addresses, with guest checkout for buyers 18 or older, and shipping is {shipping} or free on orders of {freeThreshold} or more.`,
      },
    ],
    faq: [
      {
        q: 'Does Quell have a pregnancy warning on the label?',
        a: 'No. Quell’s Drug Facts panel has no line about pregnancy or breastfeeding. That isn’t a statement either way, so ask your doctor, midwife or pharmacist before using it.',
      },
      {
        q: 'Are eye drops okay to use while breastfeeding?',
        a: 'Quell’s label doesn’t address breastfeeding. Ask your doctor or pharmacist before using it, and bring the ingredient list from the carton or the Drug Facts page.',
      },
      {
        q: 'Why do some medicine labels say ask a health professional if pregnant?',
        a: 'A federal rule, 21 CFR 201.63, requires that sentence on over-the-counter drugs intended for systemic absorption. A label without it still isn’t telling you a product is fine during pregnancy.',
      },
      {
        q: 'What should I ask my doctor about eye drops during pregnancy?',
        a: 'Ask whether that specific drop is all right for you, whether any ingredient matters with your other medicines, and who to call if your eyes or vision change. Bring the full ingredient list.',
      },
    ],
  },
]
