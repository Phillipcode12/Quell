import type { Guide } from '@/lib/guide-types'
export const DAILY_20261115_D: Guide[] = [
  /*
   * Sources fetched 2026-11-15 for dry-eye-relief-nashville-tn:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013897.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013897.csv
   *   (NASHVILLE INTL AP, elev 182.9 m: annual precip 50.51 in; Mar-May 14.26 in;
   *   Oct 3.36 in (driest month), May 5.02 (wettest); annual snow 4.7 in; Jul high 90.9 F,
   *   low 70.5; Jan high 49.1, low 30.1; 54.1 days at or above 90 F; 66.3 nights at or
   *   below 32 F; 6.2 days with a high at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (NASHVILLE, TN, WBAN 13897, morning/afternoon: Jan 80/64, Mar 79/54, Apr 80/51,
   *   Aug 89/55, Sep 89/55, Oct 86/53, Dec 81/63, annual 84/56)
   * Elevation converted: 182.9 m is about 600 ft.
   */
  {
    slug: 'dry-eye-relief-nashville-tn',
    title: 'Dry eye relief in Nashville, Tennessee',
    description:
      'Nashville’s driest afternoons come in April and October, not summer. NOAA’s numbers for Music City and practical ways to keep dry, gritty eyes comfortable.',
    category: 'local',
    addedOn: '2026-11-15',
    body: [
      {
        p: `In Nashville, dry eyes usually come from indoor air rather than the weather. Summer is muggy, but air conditioning runs for months, furnaces take over from November, and April and October bring the driest afternoons of the year. Point vents away from your face, blink fully at screens, and use a lubricating drop the way its label directs. Eye pain or blurred vision calls for an eye doctor.`,
      },
      { h: 'Is Nashville humid or dry?' },
      {
        p: `Both, depending on the hour. NOAA’s relative humidity table for Nashville International Airport puts the yearly morning average at 84 percent and the afternoon average at 56 percent. That gap matters. Dew on the lawn at 7 a.m. tells you little about the air in a sunny parking lot at 3 p.m.`,
      },
      {
        p: `The same table shows which months dip lowest in the afternoon:`,
      },
      {
        list: [
          `April averages 51 percent, the lowest of any month.`,
          `October follows at 53 percent, as the fall leaves turn.`,
          `March sits at 54 percent, while August and September hold near 55.`,
          `December and January are the dampest afternoons, at 63 and 64 percent.`,
        ],
      },
      {
        p: `So a spring walk around Radnor Lake or an October afternoon at a Titans tailgate can leave eyes feeling scratchier than a sticky July evening on Broadway.`,
      },
      { h: 'Music City weather by the numbers' },
      {
        p: `NOAA’s 1991 to 2020 climate normals for the airport station, which sits roughly 600 feet above sea level, describe a city with plenty of rain and real seasons:`,
      },
      {
        list: [
          `About 50.5 inches of precipitation in a normal year, so Nashville is anything but arid.`,
          `Spring is the wettest season, with about 14.3 inches from March through May, and October is the driest single month at about 3.4 inches.`,
          `Average July highs reach 90.9°F, and about 54 days a year hit 90°F or above.`,
          `January averages a high of 49.1°F and a low of 30.1°F, with about 66 nights at or below freezing.`,
          `Snow is light, around 4.7 inches in a typical winter.`,
        ],
      },
      { h: 'Air conditioning from May to September' },
      {
        p: `Fifty-plus days in the 90s means cooling runs hard at home, in the office and in the car. An air conditioner pulls moisture out of the air as it cools it, and a vent blowing straight at your face speeds up evaporation from the eye’s surface. Commuters on I-65 and I-24 often sit in traffic with the dash vents aimed right at them.`,
      },
      {
        list: [
          `Angle car vents toward your chest or the windshield instead of your eyes.`,
          `At a desk downtown or in Cool Springs, move a fan so it doesn’t sweep across your face.`,
          `Take a break from the screen every so often and blink fully a few times, since focusing on a monitor cuts the blink rate.`,
        ],
      },
      { h: 'Furnace season and dry eyes in Nashville' },
      {
        p: `With about 66 freezing nights, heat runs most evenings from late fall into March. Warming cold outdoor air lowers its relative humidity, so a cozy living room in East Nashville can be far drier than the gray drizzle outside. A bedroom humidifier, cleaned as its manual says, and registers closed near the couch can help. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more on the furnace side.`,
      },
      {
        p: `Cold snaps also bring wind. A walk across the pedestrian bridge over the Cumberland River on a January evening is a reliable way to end up with watering, stinging eyes. Glasses or sunglasses block some of that breeze.`,
      },
      { h: 'Eye drops from nearby Brentwood' },
      {
        p: `Quell is made by {company}, based in Brentwood, Tennessee, just south of Nashville in Williamson County, and orders ship from there. Checkout works without an account, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We email tracking once a package leaves, though we don’t promise a delivery date. Davidson County addresses are covered on the [Nashville page](/eye-drops/nashville-tn), and the rest of the state is on the [Tennessee page](/eye-drops/state/tennessee).`,
      },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label’s Uses read: {uses}. The directions say: {directions}. One caution comes first, before you buy: {warnings}. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Keeping a bottle in a Tennessee car' },
      {
        p: `The label’s storage line reads: {storage}. A car parked at Shelby Bottoms on an August afternoon can get much hotter than that inside, and a January night can drop below it. Carry the bottle in a bag or pocket that comes indoors with you rather than leaving it in the console.`,
      },
      { h: 'When to see an eye doctor in Nashville' },
      {
        p: `Drops are meant for everyday dryness. Symptoms that keep returning, or that come with pain, deserve a proper exam. The label says when to stop: {stopUse}`,
      },
      {
        p: `If you’re not sure how to describe what you feel, our [dry eye self-check](/self-check) helps you put it into words for the appointment. It’s not a diagnosis, just a list of questions to bring with you.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Nashville?',
        a: `By rainfall, October is Nashville’s driest month, averaging about 3.4 inches at the airport in NOAA’s 1991 to 2020 normals. By afternoon humidity, April is lowest at 51 percent, with October close behind at 53.`,
      },
      {
        q: 'Why do my eyes feel dry in Nashville when it’s so humid?',
        a: `Most Nashville dryness happens indoors. Air conditioning runs through a long, hot summer and heat runs through the winter, and both dry the air around your eyes even when the outdoor humidity is high.`,
      },
      {
        q: 'How far is Brentwood from Nashville?',
        a: `Brentwood is a city in Williamson County, bordering Nashville to the south. Quell ships from there, but we don’t offer local pickup or promise a delivery date, so order ahead of running out.`,
      },
      {
        q: 'Does it snow much in Nashville?',
        a: `Not usually. NOAA’s normals give Nashville International Airport about 4.7 inches of snow in a typical year, with January the snowiest month at roughly 2 inches.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-15 for dry-eye-relief-knoxville-tn:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013891.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013891.csv
   *   (KNOXVILLE MCGHEE TYSON AP, elev 293.2 m: annual precip 51.93 in; Dec-Feb 14.57 in
   *   (wettest season); Sep-Nov 10.51 in (driest season); Oct 2.81 in (driest month);
   *   Jul 5.25 (wettest month); annual snow 4.6 in; Jul high 88.4 F; Jan high 48.2, low 30.0;
   *   36.5 days at or above 90 F; 66.6 nights at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (KNOXVILLE, TN, WBAN 13891, morning/afternoon: Jan 81/63, Apr 80/51, Mar 79/54,
   *   Aug 90/58, Sep 90/57, Oct 89/54, Dec 83/63, annual 84/57)
   * Elevation converted: 293.2 m is about 960 ft. Smokies elevations not used (not fetched).
   */
  {
    slug: 'dry-eye-relief-knoxville-tn',
    title: 'Dry eye relief in Knoxville, Tennessee',
    description:
      'Knoxville’s driest month is October, right in leaf season, and spring afternoons dip to 51 percent humidity. NOAA data and eye comfort tips for East Tennessee.',
    category: 'local',
    addedOn: '2026-11-15',
    body: [
      {
        p: `For dry eye relief in Knoxville, plan around fall and spring. October is the region’s driest month by rainfall, April afternoons have the lowest humidity, and winter heat dries indoor air for months. Shield your eyes from wind on mountain overlooks, keep heater and car vents off your face, take screen breaks, and use a lubricating drop exactly as labeled. See an eye doctor for pain or vision changes.`,
      },
      { h: 'East Tennessee’s weather, from NOAA' },
      {
        p: `Knoxville’s official weather station is at McGhee Tyson Airport in Alcoa, about 960 feet above sea level and within sight of the Great Smoky Mountains on a clear day. NOAA’s 1991 to 2020 normals for that station show a green, rainy place with a pronounced dry spell in autumn:`,
      },
      {
        list: [
          `About 51.9 inches of precipitation a year.`,
          `Winter, December through February, is the wettest season at about 14.6 inches.`,
          `Fall is the driest season at about 10.5 inches, and October alone averages just 2.81 inches.`,
          `July highs average 88.4°F, with about 36 days a year at 90°F or above, noticeably fewer than in Middle or West Tennessee.`,
          `January runs from about 30°F at night to 48°F in the afternoon, and there are about 67 freezing nights a year.`,
          `Snowfall is modest, around 4.6 inches in a normal year at the airport.`,
        ],
      },
      { h: 'Leaf season is also dry season' },
      {
        p: `The weeks when everyone drives out to see the color in the Smokies line up with the least rain of the year. NOAA’s humidity table gives Knoxville an October afternoon average of 54 percent, down from 58 in August, even though mornings in the valleys still start near 89 percent with fog in the hollows.`,
      },
      {
        p: `Long scenic drives add their own strain. You stare ahead for hours, blink less, and often run the heater on a cool morning and the air conditioning by afternoon. A few habits help:`,
      },
      {
        list: [
          `Keep the dash vents aimed low on the drive up US-441 or the Foothills Parkway.`,
          `Stop at pullouts, look into the distance for a minute, and blink slowly a few times.`,
          `Bring sunglasses for overlooks, where a ridge-top breeze can be much stronger than in town.`,
          `Pack a bottle in a day bag, not the glove box, if the car will sit at a trailhead for hours.`,
        ],
      },
      { h: 'Spring afternoons near 51 percent' },
      {
        p: `April has the lowest afternoon humidity on the Knoxville row of NOAA’s table, at 51 percent, with March at 54. Those are the months when Dogwood Arts brings people outdoors, runners fill the greenways along the Tennessee River, and windows open for the first time since fall. Breezy, sunny spring days speed up evaporation from the tear film, so eyes that felt fine all winter can start to feel scratchy.`,
      },
      { h: 'Neyland Stadium, campus life and long screen hours' },
      {
        p: `Thousands of students on the University of Tennessee campus spend fall evenings on laptops and fall Saturdays in the stands. Each one affects the eyes differently. Concentrating on a screen reduces how often you blink, and blinking is what spreads fresh tears across the eye. A cool, windy night game in November does the opposite job, drying the eyes from the outside. Students who want their own bottle should know that buyers must be 18 or older to order; our guide on [shipping eye drops to a college dorm](/guides/shipping-eye-drops-to-a-college-dorm) covers addressing.`,
      },
      { h: 'Winter indoors in the Tennessee Valley' },
      {
        p: `December and January are damp outside, with afternoon humidity around 63 percent and the most precipitation of the year. Indoors is where Knoxville eyes struggle, because heat pumps and furnaces warm cold air without adding moisture. If you wake up with eyes that feel gritty, check whether a register blows toward the bed, and consider a small humidifier kept clean per its instructions.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists these Uses: {uses}. Directions: {directions}. Before buying, read the caution: {warnings}. Keep the tip clean, as the label says: {tip}. The whole panel is on the [Drug Facts page](/drug-facts).`,
      },
      {
        p: `Quell ships from Brentwood, Tennessee, to Knoxville, Maryville, Farragut and the rest of East Tennessee, with guest checkout and tracking by email. We don’t promise a delivery date. See the [Knoxville page](/eye-drops/knoxville-tn) or the [Tennessee page](/eye-drops/state/tennessee) for local details, or [order from the home page](/#buy).`,
      },
      { h: 'When to call a Knoxville eye doctor' },
      {
        p: `Not every gritty feeling is dryness from the air. If one eye is much worse, if light suddenly bothers you, or if your vision blurs and doesn’t clear with a blink, book an exam. The label’s stop-use rule reads: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) goes into more detail.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Knoxville, TN?',
        a: `October. NOAA’s 1991 to 2020 normals give McGhee Tyson Airport about 2.81 inches of precipitation that month, the least of the year, and fall as a whole is Knoxville’s driest season.`,
      },
      {
        q: 'Why do my eyes get dry driving in the Smoky Mountains?',
        a: `Long scenic drives mean staring ahead and blinking less, often with the heater or air conditioning blowing. Overlooks add wind. Aim vents away from your face and stop to rest your eyes at pullouts.`,
      },
      {
        q: 'Does Knoxville get a lot of snow?',
        a: `Not much in the valley. The airport’s normal annual snowfall is about 4.6 inches, although higher ground in the nearby mountains can see more.`,
      },
      {
        q: 'Can UT Knoxville students order Quell?',
        a: `Yes, if they are 18 or older. Quell ships anywhere in the United States, including campus mail addresses, with guest checkout and tracking by email.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-15 for dry-eye-relief-memphis-tn:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013893.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013893.csv
   *   (MEMPHIS INTL AP, elev 77.4 m: annual precip 54.94 in; Mar-May 16.88 in; Apr 5.87
   *   (wettest month); Sep 3.03 (driest month); annual snow 2.7 in; Jul high 91.9 F, low 73.6;
   *   Aug high 91.5; Jan high 50.9, low 33.3; 72.1 days at or above 90 F; 44.4 nights at or
   *   below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (MEMPHIS, TN, WBAN 13893, morning/afternoon: Jan 77/62, Apr 78/53, Jul 84/57,
   *   Sep 85/55, Oct 82/52, Dec 78/61, annual 80/56)
   * Elevation converted: 77.4 m is about 250 ft.
   */
  {
    slug: 'dry-eye-relief-memphis-tn',
    title: 'Dry eye relief in Memphis, Tennessee',
    description:
      'Memphis logs about 72 days of 90-degree heat a year, so air conditioning rules. NOAA climate facts and everyday dry eye relief for the Bluff City.',
    category: 'local',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Memphis eyes mostly dry out indoors. The city averages about 72 days a year at 90°F or hotter, so air conditioning runs from late spring into fall, and October brings the lowest afternoon humidity of the year. Keep cold vents off your face, blink often during screen work, wear sunglasses on breezy days by the river, and use a lubricating drop as its label directs. See an eye doctor for pain or vision changes.`,
      },
      { h: 'How hot does Memphis get?' },
      {
        p: `Hotter, for longer, than anywhere else in Tennessee’s big cities. NOAA’s 1991 to 2020 normals for Memphis International Airport, about 250 feet above sea level in the flat Mississippi floodplain, list:`,
      },
      {
        list: [
          `About 72 days a year at or above 90°F.`,
          `An average July high of 91.9°F and an average July low of 73.6°F, so nights barely cool off.`,
          `August is nearly as hot, with highs averaging 91.5°F.`,
          `Only about 44 nights a year at or below freezing, and a January low averaging 33.3°F.`,
          `Snow is rare, around 2.7 inches in a typical year.`,
        ],
      },
      {
        p: `All that heat is why the most common source of dry air in Memphis is a thermostat set to 72 while the porch thermometer reads 95.`,
      },
      { h: 'Why air conditioning dries your eyes' },
      {
        p: `A cooling system removes water vapor from the air as part of how it works. The tear film, a thin layer of oil, water and mucus, loses water faster in that drier, moving air. Car vents are the worst offenders because they blow straight at face height. Try these on the drive down Poplar Avenue or across the I-40 bridge:`,
      },
      {
        list: [
          `Set vents to the floor or windshield and let the cabin cool around you.`,
          `Use recirculation sparingly once the car is comfortable.`,
          `At the office, ask to move a desk out of the line of a ceiling diffuser.`,
          `At home, keep the bedroom ceiling fan on low or off if you wake with gritty eyes.`,
        ],
      },
      { h: 'October and April: the dry afternoons' },
      {
        p: `NOAA’s relative humidity table for Memphis shows October afternoons averaging 52 percent, the lowest of the year, and April close behind at 53. Mornings stay humid, near 82 percent in October, so the drop arrives as the day warms. Those are also festival months, with crowds outdoors along the riverfront and in Overton Park. A sunny, breezy afternoon outside can dry the eyes more than you’d expect from a city with a muggy reputation.`,
      },
      { h: 'Rain, river wind and a wet spring' },
      {
        p: `Memphis gets about 54.9 inches of precipitation a year in NOAA’s normals, more than Nashville or Knoxville. Spring is the wettest stretch, about 16.9 inches from March through May, and April alone averages 5.87 inches. September is the driest month at about 3.03 inches.`,
      },
      {
        p: `Rain doesn’t keep eyes from drying, though. Storm fronts bring gusts, and wind off the Mississippi River along Tom Lee Park or the Big River Crossing walkway can be stiff. Sunglasses with a close fit cut a lot of that.`,
      },
      { h: 'Barbecue smoke, grills and game days' },
      {
        p: `Smoke from a pit or a backyard grill irritates the eyes on contact, and standing downwind for an afternoon at a cookout makes it worse. Move upwind of the smoker when you can, and step away for a few minutes if your eyes start to sting and water. Lubricating drops are meant for everyday dryness and irritation, not for smoke that keeps pouring into your face, so distance matters more than anything you put in your eyes.`,
      },
      { h: 'Ordering eye drops in Memphis' },
      {
        p: `Quell ships from Brentwood, near Nashville, to Memphis, Germantown, Collierville, Bartlett and every other US address. There’s no account to set up, standard shipping is {shipping}, and {freeBottles} or more bottles ship free. You’ll get a tracking email, but no delivery date is promised. Details for the city are on the [Memphis page](/eye-drops/memphis-tn) and the statewide [Tennessee page](/eye-drops/state/tennessee).`,
      },
      {
        p: `On the label, Quell’s Uses read: {uses}. Directions: {directions}. Read the warning before ordering: {warnings}. In a Memphis summer, the storage line matters most: {storage}. A parked car can run far hotter than that, so carry the bottle with you instead. More on that in [can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car).`,
      },
      { h: 'When a Memphis eye doctor should take over' },
      {
        p: `Eye drops cover routine dryness. Anything sharp, sudden or one-sided is a different matter. According to the label, {stopUse} If you’re unsure whether your symptoms count as everyday dryness, start with our [self-check](/self-check), then book an exam.`,
      },
    ],
    faq: [
      {
        q: 'How many 90 degree days does Memphis have a year?',
        a: `About 72, according to NOAA’s 1991 to 2020 normals for Memphis International Airport. July and August highs average above 91°F.`,
      },
      {
        q: 'What is the least humid month in Memphis?',
        a: `October, with an average afternoon relative humidity of 52 percent in NOAA’s table for Memphis. April is next at 53 percent.`,
      },
      {
        q: 'Does grill smoke dry out your eyes?',
        a: `Smoke irritates the eyes on contact and can leave them stinging and watering. Standing upwind of the grill and taking breaks away from it helps more than anything else.`,
      },
      {
        q: 'Does Quell ship to Memphis?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Memphis and its suburbs with guest checkout and tracking by email. We don’t promise a delivery date.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-15 for dry-eye-relief-louisville-ky:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00093821.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00093821.csv
   *   (LOUISVILLE INTL AP, elev 148.7 m: annual precip 48.34 in; May 5.18 (wettest month);
   *   Jan 3.39 (driest month); annual snow 13.4 in, Jan 4.5, Feb 4.1, Dec 2.2, Mar 2.1;
   *   Dec-Feb snow 10.8 in; Jan high 43.6 F, low 27.8; Jul high 89.0; 42.7 days at or above
   *   90 F; 74.0 nights at or below 32 F; 13.2 days with a high at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (LOUISVILLE, KY, WBAN 93821, morning/afternoon: Jan 78/64, Mar 75/55, Apr 74/50,
   *   May 79/54, Aug 84/55, Sep 85/54, Dec 79/64, annual 79/56)
   * Elevation converted: 148.7 m is about 490 ft.
   */
  {
    slug: 'dry-eye-relief-louisville-ky',
    title: 'Dry eye relief in Louisville, Kentucky',
    description:
      'Louisville sees about 13 inches of snow and 74 freezing nights a year, then dry April afternoons. NOAA numbers and eye comfort tips for Derby City.',
    category: 'local',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Dry eye relief in Louisville means handling two seasons. Winters are colder than farther south, with about 74 freezing nights and months of furnace heat, and April afternoons average just 50 percent humidity right as Derby season starts. Keep heat and vents off your face, wear glasses in the wind, take screen breaks, and use a lubricating drop as the label says. Pain or blurry vision needs an eye doctor.`,
      },
      { h: 'Louisville weather by the numbers' },
      {
        p: `Louisville Muhammad Ali International Airport hosts the city’s official station, about 490 feet above sea level and a few miles from the Ohio River. NOAA’s 1991 to 2020 normals show a city on the line between the South and the Midwest:`,
      },
      {
        list: [
          `About 48.3 inches of precipitation a year, with May the wettest month at 5.18 inches and January the driest at 3.39.`,
          `About 13.4 inches of snow in a normal year, nearly three times Nashville’s, with January (4.5 inches) and February (4.1) the snowiest.`,
          `A January average of 43.6°F for the high and 27.8°F for the low.`,
          `About 74 nights at or below freezing and roughly 13 days when the high stays at or below 32°F.`,
          `July highs averaging 89.0°F, with about 43 days a year at 90°F or above.`,
        ],
      },
      { h: 'Why are my eyes so dry in Kentucky winters?' },
      {
        p: `Outdoors, Louisville winters feel damp. December and January afternoons average 64 percent humidity in NOAA’s table, the highest of the year. The trouble starts when that cold air comes inside. Heating it from 28°F to a comfortable room temperature without adding water drops its relative humidity sharply, which is why old Victorian houses in Old Louisville and new apartments in NuLu alike can feel parched by February.`,
      },
      {
        list: [
          `Close or redirect a heat register that blows toward your bed or favorite chair.`,
          `Run a small humidifier in the bedroom, cleaned on the schedule its manual gives.`,
          `Lower the thermostat a degree or two at night; the same moisture reads as higher relative humidity in slightly cooler air.`,
          `Keep space heaters pointed at your legs rather than your face.`,
        ],
      },
      {
        p: `For more on the heated-air side, see [dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater).`,
      },
      { h: 'Snow days and cold wind on the river' },
      {
        p: `A walk across the Big Four Bridge to Jeffersonville in January can mean a steady wind over open water. Cold wind dries the eye’s surface and can trigger watering at the same time, which feels contradictory but is common. Wraparound sunglasses or regular glasses break the wind. Scraping a windshield and then blasting the defroster at your face undoes the good work, so aim it at the glass.`,
      },
      { h: 'April and Derby season' },
      {
        p: `NOAA’s Louisville row puts April’s afternoon humidity at 50 percent, the lowest of any month, with May at 54. Spring is when the city moves outside: Thunder Over Louisville, the Kentucky Derby on the first Saturday in May at Churchill Downs, and long afternoons at Waterfront Park. A day in the infield or the grandstand means hours of sun and breeze. Sunglasses with a brim help, and a bottle in your bag, not a hot car, keeps relief close.`,
      },
      { h: 'Bourbon trail drives and long commutes' },
      {
        p: `Plenty of Louisville weekends start with a drive out I-64 or the Bluegrass Parkway to distillery country. Hours at the wheel cut down on blinking, and a vent pointed at your face speeds evaporation. Set vents low, pull over to rest your eyes, and switch drivers if you’re touring with friends.`,
      },
      { h: 'What the label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses on its Drug Facts panel read: {uses}. The directions read: {directions}. There’s also a caution to check first: {warnings}. Storage matters during a Kentucky winter too: {storage}. A bottle left in the car through a January night can get colder than that, so bring it in. The complete label is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering to Louisville' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Louisville, the Highlands, St. Matthews, Jeffersontown and every other address in Kentucky. Checkout is guest-only, shipping is {shipping}, and we email tracking without promising a date. An unopened bottle can be refunded within {returnDays} days of delivery, and you don’t need to send it back. See the [Louisville page](/eye-drops/louisville-ky) or the [Kentucky page](/eye-drops/state/kentucky).`,
      },
      { h: 'When to see a doctor' },
      {
        p: `An eye that hurts, a sudden change in how well you see, or dryness that comes back no matter what you change are reasons for an exam. The label puts it this way: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'How much snow does Louisville get a year?',
        a: `About 13.4 inches at Louisville’s airport in NOAA’s 1991 to 2020 normals. January and February are the snowiest months, at roughly 4.5 and 4.1 inches.`,
      },
      {
        q: 'What is the driest month in Louisville, KY?',
        a: `By precipitation, January is driest at about 3.39 inches. By afternoon humidity, April is lowest, averaging 50 percent in NOAA’s relative humidity table.`,
      },
      {
        q: 'How cold does Louisville get in winter?',
        a: `January averages a high of 43.6°F and a low of 27.8°F at the airport, and the city sees about 74 nights a year at or below freezing.`,
      },
      {
        q: 'Can I order Quell to Louisville, Kentucky?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Louisville and the rest of Kentucky, with guest checkout and an email with tracking once the package leaves.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-15 for dry-eye-relief-atlanta-ga:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013874.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013874.csv
   *   (ATLANTA HARTSFIELD INTL AP, elev 307.8 m: annual precip 50.43 in; Oct 3.28 in
   *   (driest month); Jul 4.75 (wettest); annual snow 2.2 in; Jul high 90.1 F, low 71.8;
   *   Jan high 54.0, low 35.6; 47.1 days at or above 90 F; 35.7 nights at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (ATLANTA, GA, WBAN 13874, morning/afternoon: Jan 79/58, Mar 77/52, Apr 78/49,
   *   May 81/52, Jul 86/58, Aug 87/58, Oct 84/53, Dec 80/59, annual 81/55)
   * TSA liquids rule: 3.4 oz (100 mL) containers in one quart-size bag (tsa.gov).
   * Elevation converted: 307.8 m is about 1,010 ft.
   */
  {
    slug: 'dry-eye-relief-atlanta-ga',
    title: 'Dry eye relief in Atlanta, Georgia',
    description:
      'Atlanta sits about 1,000 feet up, with 47 days of 90-degree heat and dry April afternoons. NOAA data and dry eye tips for commuters, flyers and the Beltline.',
    category: 'local',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Atlanta’s dry-eye triggers are mostly man-made: long commutes with the vents running, offices cooled for half the year, and frequent flights out of Hartsfield-Jackson. Outdoors, April afternoons are the driest, near 49 percent humidity. Aim air away from your face, blink fully at screens, pack drops in your carry-on, and use a lubricating drop exactly as labeled. Eye pain or vision changes need an eye doctor.`,
      },
      { h: 'Atlanta’s climate, as NOAA records it' },
      {
        p: `The city’s official weather station is at Hartsfield-Jackson Atlanta International Airport, about 1,010 feet above sea level on the Piedmont. From NOAA’s 1991 to 2020 normals:`,
      },
      {
        list: [
          `Roughly 50.4 inches of precipitation a year, spread fairly evenly across the seasons.`,
          `October is the driest month, averaging about 3.28 inches, and July the wettest at 4.75.`,
          `July highs average 90.1°F and lows 71.8°F, with about 47 days a year at 90°F or more.`,
          `January runs from a 35.6°F average low to a 54.0°F average high.`,
          `There are only about 36 freezing nights a year, and snow averages a scant 2.2 inches.`,
        ],
      },
      { h: 'Commutes on the Connector and I-285' },
      {
        p: `Time stuck on the Downtown Connector or the Perimeter is time spent staring ahead, blinking less, with a dashboard vent a foot from your face. In summer that vent blows cold, dry air; in January the heater does the same job in reverse. Both speed up evaporation from the tear film.`,
      },
      {
        list: [
          `Angle the center vents toward your hands or the roof, not your eyes.`,
          `Switch the fan to a lower speed once the car reaches temperature.`,
          `Wear sunglasses on bright mornings, since squinting into glare wears on the eyes.`,
          `On MARTA, pick a seat away from the overhead air outlets if you can.`,
        ],
      },
      {
        p: `Never put drops in while the car is moving. Our guide to [dry eyes for rideshare drivers](/guides/dry-eyes-for-rideshare-drivers) covers the timing for people who spend their whole day behind the wheel.`,
      },
      { h: 'Flying out of Hartsfield-Jackson' },
      {
        p: `Many Atlantans fly often, and airplane cabins are known for very dry air. The TSA’s liquids rule allows containers of 3.4 ounces (100 milliliters) or less in a single quart-size bag in your carry-on, and a {size} bottle of Quell fits easily. Keep it in your personal item so it stays in the cabin with you, out of the cold of the cargo hold. More on packing is in [traveling with eye drops](/guides/traveling-with-eye-drops).`,
      },
      { h: 'April afternoons and the Beltline' },
      {
        p: `NOAA’s relative humidity table gives Atlanta an April afternoon average of 49 percent, the lowest of the year, with March and May both near 52. That’s when the city lives outside: walkers and cyclists on the Eastside Trail, picnics in Piedmont Park, early Braves games. Mornings start damp, around 78 percent, then the sun and a spring breeze dry things out by midafternoon. Bring sunglasses, take shade breaks, and keep a bottle in your bag instead of a hot car.`,
      },
      { h: 'Summer: muggy outside, chilly inside' },
      {
        p: `July and August afternoons hold near 58 percent humidity, and mornings reach the high 80s. Nobody in Midtown would call that dry. Yet the offices, gyms and malls people retreat into keep the air conditioning cranked from May through September, and that’s where eyes feel it. If you work under a ceiling vent, a small desk fan aimed at your torso or a move a few feet over can make a difference. Screen breaks help too, because focused screen work slows blinking, and blinking is what spreads fresh tears.`,
      },
      { h: 'What the Quell label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses on the Drug Facts panel read: {uses}. The directions read: {directions}. Check the caution before ordering: {warnings}. The label adds a storage range: {storage}. A car parked at a Georgia mall in July can get far hotter than that inside. The complete panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in metro Atlanta' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Atlanta, Decatur, Marietta, Alpharetta and anywhere else in the United States. Checkout doesn’t require an account, and orders of {freeBottles} or more bottles ship free. We send tracking by email, though we don’t promise when a package will arrive. Local details are on the [Atlanta page](/eye-drops/atlanta-ga) and the [Georgia page](/eye-drops/state/georgia).`,
      },
      { h: 'When an eye doctor is the right call' },
      {
        p: `Drops are for the ordinary dryness of a busy city life. If your eyes hurt, your vision blurs and stays blurry, or one eye is much worse than the other, make an appointment. The label’s rule is simple: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Can I bring eye drops through security at the Atlanta airport?',
        a: `Yes. The TSA’s liquids rule allows containers of 3.4 ounces (100 milliliters) or less in a quart-size bag, and a {size} bottle of Quell is well under that limit.`,
      },
      {
        q: 'What is the driest month in Atlanta?',
        a: `By rainfall, October is driest at about 3.28 inches in NOAA’s 1991 to 2020 normals for Hartsfield-Jackson. By afternoon humidity, April is lowest at 49 percent.`,
      },
      {
        q: 'Why do my eyes get dry commuting in Atlanta?',
        a: `Long drives mean staring ahead and blinking less, usually with a vent blowing cold or hot air at your face. Aiming the vents away and turning down the fan speed helps.`,
      },
      {
        q: 'What is Atlanta’s elevation?',
        a: `The official weather station at Hartsfield-Jackson sits about 307.8 meters, or roughly 1,010 feet, above sea level, according to NOAA’s station records.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-15 for dry-eye-relief-charlotte-nc:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013881.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013881.csv
   *   (CHARLOTTE DOUGLAS AP, elev 221.9 m: annual precip 43.60 in; Feb 3.13 (driest month),
   *   Oct 3.16; Dec-Feb 10.19 in; annual snow 3.5 in; Jul high 90.3 F; Jan high 52.3,
   *   low 31.8; 49.2 days at or above 90 F; 58.3 nights at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (CHARLOTTE, NC, WBAN 13881, morning/afternoon: Jan 78/54, Feb 76/51, Mar 76/49,
   *   Apr 76/46, May 80/51, Aug 87/56, Sep 87/56, Nov 83/51, Dec 79/54, annual 81/52)
   * Elevation converted: 221.9 m is about 730 ft.
   */
  {
    slug: 'dry-eye-relief-charlotte-nc',
    title: 'Dry eye relief in Charlotte, North Carolina',
    description:
      'Charlotte’s April afternoons average 46 percent humidity, and winter afternoons rarely top the mid-50s. NOAA numbers and eye comfort tips for the Queen City.',
    category: 'local',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Charlotte is drier than its Southern reputation suggests. April afternoons average 46 percent humidity, winter afternoons hover in the low 50s, and the furnace and air conditioner split the year between them. To keep eyes comfortable, steer vents and heaters away from your face, wear sunglasses on breezy days, take screen breaks, and use a lubricating drop as its label directs. See an eye doctor for pain or blurred vision.`,
      },
      { h: 'How humid is Charlotte, really?' },
      {
        p: `NOAA’s relative humidity table for Charlotte Douglas International Airport shows an annual afternoon average of 52 percent, a few points below Atlanta, Nashville or Memphis. Month by month, the afternoon figures look like this:`,
      },
      {
        list: [
          `April: 46 percent, the lowest of the year.`,
          `March: 49 percent.`,
          `February, May and November: 51 percent each.`,
          `January and December: 54 percent.`,
          `August and September, the muggiest afternoons: 56 percent.`,
        ],
      },
      {
        p: `Mornings are a different world, often in the high 70s or 80s, which is why a foggy sunrise over Lake Norman can give way to a crisp, dry afternoon.`,
      },
      { h: 'Rain and temperature in the Queen City' },
      {
        p: `NOAA’s 1991 to 2020 normals for the airport, about 730 feet above sea level on the Piedmont, show a city with less rain than many of its neighbors:`,
      },
      {
        list: [
          `About 43.6 inches of precipitation a year, several inches less than Atlanta or Nashville.`,
          `February is the driest month at about 3.13 inches, with October close at 3.16.`,
          `Winter, December through February, totals about 10.2 inches.`,
          `July highs average 90.3°F, and around 49 days a year hit 90°F or above.`,
          `January averages 52.3°F for the high and 31.8°F for the low, with about 58 freezing nights a year.`,
          `Snow is occasional, about 3.5 inches in a typical year.`,
        ],
      },
      { h: 'Spring in Charlotte: the dry stretch' },
      {
        p: `March and April combine the year’s lowest afternoon humidity with sun, wind and a lot of time outdoors. Paddlers head to the U.S. National Whitewater Center, runners take over the greenways along Little Sugar Creek, and patios across South End fill up. A breezy 46 percent afternoon pulls water off the surface of the eye steadily. Some practical moves:`,
      },
      {
        list: [
          `Wear close-fitting sunglasses for long walks or rides, especially near the water where wind picks up.`,
          `Plan long outdoor workouts for the morning, when humidity runs much higher.`,
          `Keep a bottle in a bag that stays with you rather than in a car baking in a parking deck.`,
          `Blink deliberately a few times if you’ve been reading a phone outdoors in the sun.`,
        ],
      },
      { h: 'Uptown offices and long screen days' },
      {
        p: `Banking towers, call centers and home offices put a lot of Charlotteans in front of monitors from morning to evening. Concentrating on a screen cuts the blink rate, so tears spread less often, while office air conditioning or heat keeps the air moving and dry. Look away from the screen at something across the room every so often and let your eyes close fully a few times. Adjusting a monitor so it sits slightly below eye level means your lids cover more of each eye. Our guide on [dry eyes at the end of the day](/guides/dry-eyes-at-the-end-of-the-day) has more on the 5 p.m. scratchy feeling.`,
      },
      { h: 'Race weekends and Panthers Sundays' },
      {
        p: `Big outdoor events in and around Charlotte mean hours in the sun and wind, plus exhaust and tire smoke at the track in Concord. Sunglasses help with both glare and grit. If something lands in your eye and won’t rinse out, or if it hurts, that’s a job for medical care, not a lubricating drop.`,
      },
      { h: 'What Quell’s Drug Facts say' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists the Uses as: {uses}. Directions: {directions}. Read this caution before you order: {warnings}. Keep the bottle clean according to the label: {tip}. You can read the entire panel on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering to Charlotte and Mecklenburg County' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Charlotte, Matthews, Huntersville, Concord and the rest of North Carolina. There’s no account to create, shipping is {shipping}, and {freeBottles} or more bottles ship free. You’ll receive a tracking email; we don’t promise a delivery date. See the [Charlotte page](/eye-drops/charlotte-nc) and the [North Carolina page](/eye-drops/state/north-carolina) for more.`,
      },
      { h: 'When to see a Charlotte eye doctor' },
      {
        p: `If dryness keeps coming back despite changes at home and work, or if you have pain or vision changes, book an eye exam. The label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What is the least humid month in Charlotte, NC?',
        a: `April, with an average afternoon relative humidity of 46 percent at Charlotte Douglas International Airport in NOAA’s table. March is next at 49 percent.`,
      },
      {
        q: 'How much rain does Charlotte get a year?',
        a: `About 43.6 inches, according to NOAA’s 1991 to 2020 normals for the airport. February is the driest month at roughly 3.13 inches.`,
      },
      {
        q: 'Why do my eyes feel dry in Charlotte in the spring?',
        a: `Spring afternoons are Charlotte’s least humid of the year, and they come with sun and wind just as people spend more time outdoors. That combination dries the eye’s surface faster.`,
      },
      {
        q: 'Does Quell ship to Charlotte, North Carolina?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Charlotte and all of North Carolina, with guest checkout and email tracking. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-15 for dry-eye-relief-raleigh-nc:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013722.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013722.csv
   *   (RALEIGH DURHAM INTL AP, elev 126.8 m: annual precip 46.07 in; Dec-Feb 9.60 in
   *   (driest season); Jun-Aug 13.62 in (wettest season); Feb 2.78 (driest month);
   *   Sep 5.15 (wettest); annual snow 5.2 in, Jan 2.6; Jul high 90.8 F; Jan high 51.9,
   *   low 31.8; 52.4 days at or above 90 F; 64.7 nights at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (RALEIGH, NC, WBAN 13722, morning/afternoon: Jan 79/53, Feb 78/51, Mar 78/48,
   *   Apr 78/46, Aug 89/58, Sep 90/57, Nov 84/51, Dec 81/54, annual 83/53)
   * Elevation converted: 126.8 m is about 420 ft.
   */
  {
    slug: 'dry-eye-relief-raleigh-nc',
    title: 'Dry eye relief in Raleigh, North Carolina',
    description:
      'Raleigh’s winters are its driest season, and April afternoons fall to 46 percent humidity. NOAA climate facts and dry eye relief for the Triangle.',
    category: 'local',
    addedOn: '2026-11-15',
    body: [
      {
        p: `In Raleigh, the driest air arrives in late winter and spring. February is the Triangle’s driest month by rainfall, April afternoons average 46 percent humidity, and furnaces run on about 65 freezing nights a year. Keep heat and vents off your face, take regular breaks from screens, wear glasses outdoors on windy days, and use a lubricating drop as its label says. Eye pain or vision changes need a doctor.`,
      },
      { h: 'The Triangle’s weather in numbers' },
      {
        p: `Raleigh-Durham International Airport, about 420 feet above sea level between Raleigh, Durham and Cary, is the area’s official NOAA station. Its 1991 to 2020 normals show a climate where summer is the wet season and winter the dry one:`,
      },
      {
        list: [
          `About 46.1 inches of precipitation a year.`,
          `Summer, June through August, is wettest at about 13.6 inches, and September alone averages 5.15 inches.`,
          `Winter, December through February, is driest at about 9.6 inches, with February the lowest month at 2.78.`,
          `About 5.2 inches of snow in a typical year, half of it in January.`,
          `July highs average 90.8°F, and about 52 days a year reach 90°F or more.`,
          `January averages 51.9°F for the high and 31.8°F for the low, with roughly 65 nights at or below freezing.`,
        ],
      },
      { h: 'Why winter is dry season in Raleigh' },
      {
        p: `Less rain is only half of it. Winter afternoons average 51 to 54 percent humidity outside, and the cold air holds little moisture to begin with. Heat it to 70°F indoors and the relative humidity falls further. Older brick homes near Oakwood and newer townhomes in Wake Forest alike can feel dry by late January. Try these steps:`,
      },
      {
        list: [
          `Run a small, clean humidifier in the room where you sleep.`,
          `Move a chair or desk out of the stream from a floor or ceiling register.`,
          `Turn the bedroom ceiling fan off in winter if you wake with dry, sticky eyes.`,
          `Keep any space heater aimed low, toward your feet.`,
        ],
      },
      {
        p: `If mornings are the worst part of your day, [waking up with dry eyes in winter](/guides/waking-up-with-dry-eyes-in-winter) goes into the bedroom in more detail.`,
      },
      { h: 'April: the lowest humidity of the year' },
      {
        p: `NOAA’s relative humidity table puts Raleigh’s April afternoon average at 46 percent, with March at 48. Spring brings people to Umstead State Park’s trails, Falls and Jordan lakes, and the stands at college baseball games. Spring wind across open water or a sunny ballfield dries the eyes faster than the number alone suggests. Sunglasses that wrap around the face block more breeze than flat lenses.`,
      },
      { h: 'Research Triangle screen time' },
      {
        p: `Labs, software companies, hospitals and three large universities mean a big share of the Triangle works or studies at a screen. When you concentrate, you blink less often and less completely, and the tear film thins between blinks. A few habits that fit a workday at RTP or a study session at NC State, Duke or UNC:`,
      },
      {
        list: [
          `Every 20 minutes or so, look at something across the room and blink fully a few times.`,
          `Lower your monitor slightly so you look a little downward.`,
          `Raise text size rather than leaning toward the screen.`,
          `Keep a desk fan pointed at your body, not your face.`,
        ],
      },
      {
        p: `Students ordering their own drops need to be 18 or older to check out.`,
      },
      { h: 'Muggy summers, chilled offices' },
      {
        p: `August and September mornings reach 89 to 90 percent humidity, and nobody in Raleigh thinks of summer as dry. Still, air conditioning running from May to September dries indoor air, and a long drive on I-40 with the vents at face level can leave eyes scratchy. Direct vents away from your eyes and lower the fan speed once you’re comfortable.`,
      },
      { h: 'What the label says, and getting Quell' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. Directions: {directions}. Read the caution before you order: {warnings}. The full Drug Facts panel is on the [Drug Facts page](/drug-facts).`,
      },
      {
        p: `Quell ships from Brentwood, Tennessee, to Raleigh, Durham, Cary, Chapel Hill and anywhere else in the United States. There’s no account to create, and a tracking email follows once your order leaves. We don’t promise a delivery date. If you change your mind, unopened bottles qualify for this: {returns}. More on the [Raleigh page](/eye-drops/raleigh-nc) and the [North Carolina page](/eye-drops/state/north-carolina).`,
      },
      { h: 'When to see an eye doctor in the Triangle' },
      {
        p: `A drop is not the answer for every eye symptom. Pain, light sensitivity that comes on suddenly, or vision that doesn’t clear when you blink deserve an exam. Quell’s label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Raleigh, NC?',
        a: `February, with about 2.78 inches of precipitation at Raleigh-Durham International Airport in NOAA’s 1991 to 2020 normals. Winter as a whole is the Triangle’s driest season.`,
      },
      {
        q: 'Is Raleigh humid in the spring?',
        a: `Less than most people expect in the afternoon. NOAA’s table gives Raleigh an April afternoon average of 46 percent relative humidity and March 48, the lowest of the year.`,
      },
      {
        q: 'How much snow does Raleigh get?',
        a: `About 5.2 inches in a normal year at Raleigh-Durham International Airport, with January the snowiest month at roughly 2.6 inches.`,
      },
      {
        q: 'Can NC State students order Quell?',
        a: `Yes, if they are 18 or older. Quell ships across the United States with guest checkout, so a student can order to a campus or off-campus address.`,
      },
    ],
  },
  {
    slug: 'eye-drops-leaking-in-the-box',
    title: 'What to do if eye drops leak in the box',
    description:
      'Found a damp or stained carton? Don’t use the bottle. How to check it, what photos to take, and how Quell replaces leaking or broken-seal orders.',
    category: 'returns',
    addedOn: '2026-11-15',
    body: [
      {
        p: `If eye drops have leaked inside the box, don’t use that bottle. Set it aside, take photos of the bottle, the carton and the shipping box, and contact us. Quell replaces damaged orders and orders with a broken seal reported within {returnDays} days of delivery. Call {phone}, {hours}, or use the [contact details on our About page](/about#contact) with your order number.`,
      },
      { h: 'Signs a bottle has leaked' },
      {
        p: `A leak isn’t always obvious, because a {size} bottle holds very little liquid. Look for these clues before you open anything:`,
      },
      {
        list: [
          `The carton feels damp, soft or warped.`,
          `There’s a brownish stain on the inside of the carton or the shipping box. Quell is a milky brown solution, so a leak leaves a tan or brown mark rather than a clear water spot.`,
          `The bottle feels sticky or oily on the outside.`,
          `The bottle looks noticeably less full than you’d expect from an unused one.`,
          `The cap is loose, cracked or sits crooked.`,
          `The tamper-evident seal is torn, missing or lifted.`,
        ],
      },
      { h: 'Why you shouldn’t use a leaking bottle' },
      {
        p: `Eye drops are meant to stay clean until you open them. The label tells you to protect the tip for that reason: {tip}. A bottle that has leaked has a path between the solution and the outside world, which means you can’t know whether the inside is still clean. The same goes for a broken seal. Our guide on [why eye drops have a tamper-evident seal](/guides/why-eye-drops-have-a-tamper-evident-seal) explains what that seal is meant to show, and [what if the tamper seal is broken?](/guides/broken-tamper-seal) covers the next step.`,
      },
      {
        p: `Don’t squeeze the bottle to test it, and don’t try to wipe it down and keep it. A replacement is the simpler and cleaner path.`,
      },
      { h: 'What to photograph' },
      {
        p: `Photos aren’t required to report a problem, but they make the conversation faster and clearer. Before you throw away any packaging, take:`,
      },
      {
        list: [
          `A picture of the outer shipping box, showing any crushed corners or wet patches.`,
          `A picture of the product carton, front and back, including any stain.`,
          `A close-up of the bottle, its cap and its seal.`,
          `The packing slip or order confirmation email, so the order number is easy to find.`,
        ],
      },
      { h: 'How to report it and get a replacement' },
      {
        list: [
          `Find your order number in the confirmation email. You can also look up an order on the [orders page](/orders).`,
          `Call {phone} during {hours}, or reach us through the [contact section of the About page](/about#contact).`,
          `Say what you found: a leak, a broken seal, a cracked bottle or a crushed carton.`,
          `Share your photos if you have them.`,
          `Keep the bottle aside, unused, until we’ve sorted it out.`,
        ],
      },
      {
        p: `Damaged, incorrect and broken-seal orders are replaced when you contact us within {returnDays} days of delivery. Open your package soon after it arrives so a problem doesn’t surface after the window has closed. The general process is laid out in [what to do if your Quell order arrives damaged](/guides/damaged-order).`,
      },
      { h: 'A wet box that isn’t a leak' },
      {
        p: `Not every damp package means a broken bottle. A box left on a porch in the rain, or one brought in from the cold into a warm kitchen, can pick up moisture on the outside. Here’s how to tell the difference:`,
      },
      {
        list: [
          `Rain or condensation tends to dampen the outer box evenly and dries clear.`,
          `A leak from the bottle usually shows up inside the carton, close to the bottle, with a brown tint.`,
          `If the carton is dry inside, the bottle is intact and full, and the seal is unbroken, the bottle itself probably didn’t leak.`,
        ],
      },
      {
        p: `If you’re still unsure, call us and describe what you see rather than guessing. A brown color inside an intact, sealed bottle is expected, as the label notes: {appearance} What isn’t expected is a change in color. The label’s Do not use line reads: {doNotUse}.`,
      },
      { h: 'Heat, cold and a package left outside' },
      {
        p: `A box that sat in a hot mailbox or on a frozen step may not show any leak at all. The label gives a storage range: {storage}. If you know a package spent a long stretch well outside that range and you’re unsure about it, contact us before you use the bottle. [Eye drops shipped in hot or cold weather](/guides/eye-drops-shipped-in-hot-or-cold-weather) covers what to look for.`,
      },
      { h: 'Refunds versus replacements' },
      {
        p: `A leaking or broken-seal bottle is handled as a replacement. Separately, Quell offers {returns}, with the window counted from delivery. We don’t quote a timeline for when a refund appears on your statement, since that depends on your card issuer. A bottle that arrived damaged isn’t one you should open to find out whether it works, so tell us about it instead.`,
      },
      { h: 'Drops leaking out of your eye is a different question' },
      {
        p: `Some people searching for “eye drops leaking” mean drops that run down the cheek or seem to drain into the nose after use. That’s about how drops are put in, not about packaging. The label’s directions read: {directions}. Our guide on [how to use eye drops as directed](/guides/how-to-use-eye-drops-as-directed) walks through the steps.`,
      },
    ],
    faq: [
      {
        q: 'Can I use eye drops that leaked in the box?',
        a: `No. A bottle that has leaked may no longer be clean inside, and you can’t tell by looking. Set it aside and contact us for a replacement within {returnDays} days of delivery.`,
      },
      {
        q: 'What should I do if my eye drops arrive leaking?',
        a: `Take photos of the shipping box, the carton and the bottle, then call {phone}, {hours}, with your order number. Damaged orders are replaced when reported within {returnDays} days.`,
      },
      {
        q: 'Why is there a brown stain in my eye drop box?',
        a: `Quell is a milky brown solution, so a brown stain inside the carton often means some liquid leaked out of the bottle. Don’t use it, and contact us about a replacement.`,
      },
      {
        q: 'Do I need photos to report a damaged eye drop order?',
        a: `They aren’t required, but they help. A quick picture of the box, the carton and the bottle before you throw anything away makes the problem easy to describe.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-on-a-winter-camping-trip',
    title: 'Dry eyes on a winter camping trip',
    description:
      'Tent heaters, campfire smoke and cold wind all dry the eyes, and a bottle can get too cold at camp. How to stay comfortable and where to keep your drops.',
    category: 'seasonal',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Winter camping dries the eyes from several directions at once: cold, dry air outside, a heater warming a small tent, wind on the trail and smoke from the fire. Wear glasses or goggles in the wind, sit upwind of the campfire, keep heater output off your face, and carry eye drops inside your jacket so they don’t get too cold. Pain or vision changes need a doctor once you’re back.`,
      },
      { h: 'Why winter camping is hard on your eyes' },
      {
        p: `Cold air holds very little water. When it’s below freezing, the outdoor air can feel crisp and damp while carrying almost no moisture at all. Your tear film, a thin layer of oil, water and mucus over each eye, loses water to that air steadily, and wind speeds the process. Then you crawl into a tent and warm that same air with a heater, which lowers its relative humidity even further. Eyes get a dry blast outside and a dry bake inside.`,
      },
      {
        p: `Add the glare off snow, hours of squinting into the sun, and a fire you sit beside every evening, and it’s easy to end a weekend with eyes that feel gritty and tired.`,
      },
      { h: 'Tent heater for camping: keep it off your face' },
      {
        p: `Whether you use a propane heater, a wood stove in a hot tent or a battery-powered unit, its job is to warm air, and warm air pulls water from the eyes. A few habits make a difference:`,
      },
      {
        list: [
          `Point the heater toward your feet or the center of the tent, never at your head while you sleep or read.`,
          `Follow the heater maker’s instructions on ventilation, clearance and whether it’s rated for use inside a tent, every time.`,
          `Turn it down once the tent is comfortable rather than running it on high.`,
          `Hang a damp towel or leave a pot of water near a stove only if the manufacturer’s instructions allow it.`,
        ],
      },
      {
        p: `If you’re waking up with sticky, scratchy eyes, the heater placement is the first thing to change. [Dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) covers the same problem at home.`,
      },
      { h: 'Campfire smoke and dry, stinging eyes' },
      {
        p: `Smoke irritates the eyes directly, and it tends to follow whoever is sitting downwind. On a cold night, people crowd in close for warmth, which makes it worse.`,
      },
      {
        list: [
          `Check the wind before you choose a seat, and move when it shifts.`,
          `Burn dry, seasoned wood; wet or green wood smokes more.`,
          `Step back from the fire for a few minutes if your eyes start to sting and water.`,
          `Don’t rub your eyes with smoky, sooty hands.`,
        ],
      },
      {
        p: `A lubricating drop isn’t a fix for smoke blowing in your face. Distance is. If an ember or ash gets in your eye and doesn’t rinse out, or if it hurts, get medical help rather than reaching for a bottle.`,
      },
      { h: 'Snow camping tips for wind and glare' },
      {
        p: `Snowshoeing or skiing into a site means hours of wind and reflected light. Wraparound sunglasses or goggles block both. Goggles are worth packing even if you don’t usually ski, because a ridge-top gust of blowing snow is hard to face with bare eyes. Remember to blink deliberately during long, focused stretches like breaking trail or reading a map, since concentration slows the blink rate. More on the cold-weather side is in [dry eyes on a winter hike](/guides/dry-eyes-on-a-winter-hike), and higher camps are covered in [dry air, wind and altitude](/guides/dry-air-wind-and-altitude).`,
      },
      { h: 'Keeping eye drops from getting too cold' },
      {
        p: `Quell’s label gives a storage range: {storage}. A winter campsite can sit well below that for days, so a bottle left in an outer pack pocket or the car at the trailhead can get colder than the label allows. Here’s where to carry it:`,
      },
      {
        list: [
          `During the day, in an inside jacket pocket, where body heat keeps it closer to room temperature.`,
          `At night, in a small pouch inside your sleeping bag, alongside the water filter and phone battery many winter campers already keep there.`,
          `In winter car camping, in the cabin with you rather than the trunk or roof box.`,
        ],
      },
      {
        p: `If a bottle does get very cold, let it warm up to the label range before you use it, and look at it first. Under Do not use, the label lists: {doNotUse}. Its normal look is described this way: {appearance} Our guide on whether [eye drops can freeze in a cold car](/guides/can-eye-drops-freeze-in-a-cold-car) has more detail.`,
      },
      { h: 'Using drops at a campsite' },
      {
        p: `Clean hands are harder to come by in the backcountry. Wash with soap and water if you have it, or use hand sanitizer and let it dry completely before you touch anything near your eyes. Then follow the label: {directions}. Keep the tip clean, as the label instructs: {tip}. A gloved hand, a tent floor or a mitten all count as surfaces.`,
      },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its Uses read: {uses}. Before buying, read the caution on the label: {warnings}. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Winter camping tips for beginners: a short eye checklist' },
      {
        list: [
          `Sunglasses and goggles, both, in a hard case.`,
          `Eye drops in an inside pocket, not the pack lid.`,
          `Hand sanitizer for before you use them.`,
          `A heater plan that keeps warm air off your face.`,
          `A seat upwind of the fire.`,
          `Enough drops for the trip plus a spare at home, since you can’t order more from the trailhead. [Buy Quell](/#buy) before you go; we ship from Brentwood, Tennessee, but promise no delivery date.`,
        ],
      },
      { h: 'When it’s more than dry air' },
      {
        p: `Once you’re home, pay attention to how your eyes recover. Dryness from a weekend in the cold usually eases back in normal indoor air. If it doesn’t, or if anything hurts, the label is direct about stopping: {stopUse} Something stuck in the eye, a chemical splash from stove fuel, or a burn from a spark needs medical care straight away.`,
      },
    ],
    faq: [
      {
        q: 'Can a propane heater in a tent dry out your eyes?',
        a: `Yes. Any heater warms the air in a small space and lowers its relative humidity, which speeds evaporation from the eyes. Keep it pointed away from your face and follow the maker’s instructions for tent use and ventilation.`,
      },
      {
        q: 'Why do my eyes burn around a campfire?',
        a: `Smoke irritates the eyes on contact, especially when you sit downwind. Move upwind, burn dry wood, and step away for a few minutes if your eyes start to sting.`,
      },
      {
        q: 'Where should I keep eye drops when winter camping?',
        a: `Inside your jacket during the day and in a pouch inside your sleeping bag at night. The label’s storage range is {storage}, and a cold campsite can fall well below it.`,
      },
      {
        q: 'Should I wear goggles when snow camping?',
        a: `They help a lot. Goggles block wind, blowing snow and glare better than sunglasses, which makes long days in exposed terrain easier on your eyes.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-in-a-dorm-room-in-winter',
    title: 'Dry eyes in a dorm room in winter',
    description:
      'Radiators, tiny rooms and finals-week screens make dorm air rough on eyes. Fixes for dry dorm air, plus what students should know before ordering drops.',
    category: 'seasonal',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Dorm rooms in winter are small, overheated and often run on radiators you can’t control, so the air gets very dry. Pair that with long screen sessions during finals and eyes feel gritty fast. Move your bed and desk away from the radiator, take screen breaks, check whether your housing rules allow a humidifier, and use a lubricating drop as labeled. Buyers must be 18 or older to order Quell.`,
      },
      { h: 'Does a radiator dry out the air?' },
      {
        p: `A radiator doesn’t remove water from the air, but it lowers the relative humidity by warming it. Cold winter air comes in through windows and hallways with little moisture, the radiator heats it, and the same amount of water now sits in warmer air that could hold much more. The result is air that feels dry on your skin, lips and eyes. Older steam radiators in campus buildings often run hot with no thermostat in the room, which makes it worse.`,
      },
      { h: 'Why a small room makes it worse' },
      {
        p: `A typical double gives two people, two laptops, a mini fridge and a radiator a few square feet each. Heat builds quickly in a small space, and there’s little air volume to buffer it. Many students crack a window to cool off, which lets in more cold, dry air for the radiator to heat. Your bed is often pushed right against the heater because that’s where it fits.`,
      },
      {
        list: [
          `If you can rearrange, move the head of your bed away from the radiator.`,
          `Don’t sit with your face toward it while you study.`,
          `Keep a fan, if you use one, pointed at your body, not across your eyes.`,
          `Ask facilities if the radiator has a valve you’re allowed to adjust; some do.`,
        ],
      },
      { h: 'Are humidifiers allowed in dorms?' },
      {
        p: `It depends on your school. Housing rules list what appliances you can bring, and some restrict items that plug in or produce moisture or heat. Check your residence hall handbook or ask your resident advisor before you buy one. If a small humidifier is allowed, clean it as often as its manual says; one that isn’t cleaned can do more harm to the room than good.`,
      },
      {
        p: `If it isn’t allowed, there are still options. Drying laundry on a rack in the room adds some moisture for a while. A bowl of water on the windowsill does very little on its own, so don’t count on it.`,
      },
      { h: 'Finals week screens and your eyes' },
      {
        p: `When you concentrate on a laptop, you blink less often and less fully. Blinking is what spreads tears across the eye, so long study sessions leave the surface exposed to that dry dorm air for longer. Try a few habits during exam season:`,
      },
      {
        list: [
          `Every 20 minutes or so, look across the room or out the window for a little while and blink fully.`,
          `Raise your laptop on a stack of books so you look slightly down, not up.`,
          `Turn up the font size rather than leaning in.`,
          `Study in a library or lounge for part of the day; a change of room can mean a change of air.`,
          `Sleep, even if it’s short. Eyes kept open into the small hours tend to feel worse by morning.`,
        ],
      },
      {
        p: `Our guide on [dry eyes during finals week](/guides/dry-eyes-during-finals-week) goes deeper into exam-season habits.`,
      },
      { h: 'What makes a room have dry air?' },
      {
        p: `Three things, mostly: cold outdoor air with little water in it, heating that warms that air without adding moisture, and air movement that carries moisture away from surfaces, including your eyes. A dorm in January tends to have all three. A forced-air vent or a box fan adds the third even in a building without radiators.`,
      },
      { h: 'Using eye drops in a dorm' },
      {
        p: `Wash your hands in the hall bathroom first, then follow the label: {directions}. Protect the tip as the label says: {tip}. Keep your own bottle and don’t share it with a roommate, since a bottle tip that touches someone else’s eye is no longer clean.`,
      },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. Read the caution before ordering: {warnings}. The label’s storage line reads: {storage}. Next to a hot radiator is outside that range, so keep the bottle in a desk drawer instead. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering as a student' },
      {
        p: `You need to be 18 or older to buy Quell. Checkout works as a guest, so no account is needed, and there’s no subscription. Campus addresses can be tricky, so use the exact mailing format your housing office gives you. [Shipping eye drops to a college dorm](/guides/shipping-eye-drops-to-a-college-dorm) explains how to address it. Parents sending a bottle can also tuck one into a [college care package](/guides/college-care-package-eye-drops).`,
      },
      {
        p: `If you’ll be heading home for winter break, order early enough that the package isn’t sitting in a closed mailroom. We send tracking by email but don’t promise a delivery date.`,
      },
      { h: 'When to visit the campus health center' },
      {
        p: `Dry dorm air explains a lot, but not everything. If your eyes hurt, your vision blurs and stays blurry, or one eye is much worse than the other, see the student health center or an eye doctor. The label puts it plainly: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Does a radiator dry out the air?',
        a: `It lowers the relative humidity by warming the air without adding water. In a small dorm room, that can make the air feel very dry on your eyes and skin.`,
      },
      {
        q: 'Are humidifiers allowed in dorms?',
        a: `It depends on the school. Check your residence hall handbook or ask your RA before buying one, and if it’s allowed, clean it as often as the manual says.`,
      },
      {
        q: 'How do I fix dry air in my dorm room?',
        a: `Move your bed and desk away from the radiator, keep fans off your face, and use a small humidifier if housing rules allow. Studying elsewhere for part of the day helps too.`,
      },
      {
        q: 'Can I order eye drops to my dorm if I’m 18?',
        a: `Yes. Buyers must be 18 or older to order Quell. Use the exact campus mailing address your housing office gives you, and check out as a guest.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-streamers',
    title: 'Dry eyes for streamers',
    description:
      'Long live sessions, a bright ring light and chat on a second screen can leave eyes dry and scratchy. Setup changes and break habits that help streamers.',
    category: 'using',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Streamers get dry eyes from long, unbroken focus: hours live, a bright ring light aimed at the face, and eyes darting between the game and chat on a second monitor. Blinking slows when you concentrate. Move lights off-axis, put chat where your eyes travel less, schedule short off-camera breaks, keep PC and room fans off your face, and use a lubricating drop as labeled.`,
      },
      { h: 'Why streaming is hard on your eyes' },
      {
        p: `Streaming stacks several things that dry the eyes on top of one another. You’re focused on a screen, which reduces how often you blink. You’re performing, so you may hold your eyes wide open for the camera. Your room is often warm from a gaming PC and dry from heating or air conditioning, with fans moving that air around. And sessions run long, sometimes many hours without a real break, because leaving the stage feels like losing viewers.`,
      },
      {
        p: `Blinking is what spreads fresh tears over the eye. Fewer and shallower blinks leave the tear film exposed longer, and it thins out.`,
      },
      { h: 'Is a ring light bad for your eyes?' },
      {
        p: `The label on an eye drop doesn’t speak to lighting, and we won’t make claims about light and eye health either way. What’s easy to notice is comfort: a bright light pointed straight at your face makes many people squint, and squinting for hours is tiring. A few adjustments make a ring light easier to live with:`,
      },
      {
        list: [
          `Move it slightly to one side and above eye level, rather than directly in your line of sight.`,
          `Lower the brightness and add a second, softer light so no single source has to be so strong.`,
          `Bounce light off a wall or use a diffuser to soften it.`,
          `Match the brightness of your monitor roughly to the room so your eyes aren’t adjusting between extremes.`,
        ],
      },
      {
        p: `If bright light suddenly bothers you much more than it used to, or if your eyes hurt under it, that’s a question for an eye doctor.`,
      },
      { h: 'Chat on a second screen' },
      {
        p: `Reading chat on a side monitor means constant eye and head movement between two points, and each glance is another moment of focus. Some ways to ease that:`,
      },
      {
        list: [
          `Place the chat monitor close beside the main screen and at the same height.`,
          `Use a chat overlay on the main display for part of the stream.`,
          `Raise the chat font size so you read at a glance rather than squinting.`,
          `Turn the second screen slightly toward you so you’re not viewing it at a sharp angle.`,
        ],
      },
      {
        p: `Our guide to [dry eyes with multiple monitors](/guides/dry-eyes-with-multiple-monitors) covers desk layouts in more detail.`,
      },
      { h: 'Airflow in a streaming room' },
      {
        p: `A high-end PC throws heat, and many streamers run a fan or air conditioner to keep the room bearable on camera. Moving air across the face speeds up evaporation from the eye.`,
      },
      {
        list: [
          `Point desk fans at your chest or away from you.`,
          `Make sure PC exhaust isn’t venting toward your seat.`,
          `In winter, keep space heaters aimed at your legs.`,
          `Consider a small humidifier in the room, cleaned as its manual directs.`,
        ],
      },
      { h: 'Building breaks into a live schedule' },
      {
        p: `Breaks are easier to take when they’re part of the format. Viewers are used to “be right back” screens.`,
      },
      {
        list: [
          `Set a BRB scene with music and schedule one at a regular interval, such as every hour.`,
          `Use loading screens, match queues and ad breaks to look away from the monitor and blink fully a few times.`,
          `Tell chat what you’re doing; regulars often start reminding you.`,
          `End marathon sessions with time away from screens, not scrolling clips on your phone.`,
        ],
      },
      { h: 'Using drops during a stream' },
      {
        p: `Step off camera to do it. Wash your hands, then follow the label: {directions}. Keep the tip clean, as the label says: {tip}. Your keyboard, mouse and desk are all surfaces. A drop can blur your vision for a moment, so give it time to clear before you jump back into a ranked match; [is it normal for vision to blur after eye drops?](/guides/is-it-normal-for-vision-to-blur-after-eye-drops) explains more.`,
      },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. Before you buy, read the caution: {warnings}. Store it as the label directs: {storage}. That rules out sitting on top of a warm PC case. The whole label is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Streaming eye strain and what the label leaves to a doctor' },
      {
        p: `If you wear contact lenses on stream, the Quell label doesn’t cover using it with lenses, so ask your eye doctor or pharmacist. The same goes for combining it with other eye drops. And if your eyes stay dry after you change your setup and take breaks, or if anything hurts, the label is clear: {stopUse}`,
      },
      {
        p: `Gamers have their own guide, [eye drops for gamers](/guides/eye-drops-for-gamers), and you can [buy Quell](/#buy) as a guest without an account.`,
      },
    ],
    faq: [
      {
        q: 'Is a ring light bad for your eyes?',
        a: `The Quell label doesn’t address lighting, and we don’t make claims either way. A bright light aimed straight at your face can make you squint, so moving it off to the side and lowering the brightness is often more comfortable.`,
      },
      {
        q: 'Why do my eyes get dry when I stream?',
        a: `Long focus on screens reduces blinking, and streaming rooms are often warm and full of moving air from fans and PCs. Both leave the tear film exposed longer.`,
      },
      {
        q: 'How often should streamers take breaks for their eyes?',
        a: `Many streamers schedule a short BRB break about once an hour and use loading screens to look away. The exact rhythm is up to you; the point is regular time off the screen.`,
      },
      {
        q: 'Can I put in eye drops on stream?',
        a: `It’s better to step off camera, wash your hands and follow the label directions. Wait for any blur to clear before you go back to the game.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-graphic-designers',
    title: 'Dry eyes for graphic designers',
    description:
      'Color-critical screen work and tight deadlines mean long stretches without blinking. How designers can keep eyes comfortable and time drops around reviews.',
    category: 'using',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Graphic designers get dry eyes because the work demands long, close focus on a screen, and concentration cuts blinking. Color-critical tasks, pixel-level detail and deadline crunches stretch those sessions out. Set up your display and lighting to reduce squinting, build short breaks around natural stopping points, keep vents and fans off your face, and use a lubricating drop as labeled, timed so any blur clears before you judge color.`,
      },
      { h: 'Graphic designer eye strain: why it builds' },
      {
        p: `Design work combines several things that tire the eyes. You stare at fine detail, often zoomed in, for long stretches. You compare subtle differences in hue and weight, which keeps your focus tight. You switch between apps, references and client feedback across one or more screens. And deadlines make it tempting to push through instead of stopping.`,
      },
      {
        p: `All of that means fewer blinks. The tear film, a thin layer of oil, water and mucus, thins between blinks and needs them to spread fresh tears. In a studio or home office with heat or air conditioning moving dry air, it thins faster.`,
      },
      { h: 'Setting up your display for comfort' },
      {
        list: [
          `Place the monitor about an arm’s length away, with the top edge at or slightly below eye level, so you look a little downward.`,
          `Match screen brightness to the room. A display much brighter than its surroundings makes you squint; one much darker strains you to see detail.`,
          `Use a calibrated profile for color work and a comfortable reading mode for email and briefs, if your workflow allows switching.`,
          `Increase interface scaling so menus and panels don’t require leaning in.`,
          `Reduce glare from windows with blinds or by turning the desk.`,
        ],
      },
      {
        p: `Many designers keep their workspace lighting neutral for accurate color perception. That’s compatible with comfort: soft, even light behind or beside the monitor reduces the contrast your eyes have to manage.`,
      },
      { h: 'Color-critical work and eye drops' },
      {
        p: `A drop of any lubricating solution can blur vision briefly as it spreads. If you’re about to approve a proof, check a brand color or match a print sample, put drops in first and give your eyes time to clear before you judge anything. Never make a final color call through blurry eyes. Our guide on whether [it’s normal for vision to blur after eye drops](/guides/is-it-normal-for-vision-to-blur-after-eye-drops) explains what to expect.`,
      },
      {
        p: `Quell is a milky brown solution in the bottle, and the label notes: {appearance} If your vision looks hazy for longer than a moment, wait it out before doing detailed work.`,
      },
      { h: 'Deadlines and breaks that actually happen' },
      {
        p: `“Take regular breaks” is easy advice and hard to follow at 11 p.m. before a launch. Tie breaks to the work itself instead of a timer you’ll ignore:`,
      },
      {
        list: [
          `Every export or render: look away from the screen and blink fully a few times.`,
          `Every file save before a review: stand up and look out a window.`,
          `Between artboards or concepts: close your eyes for a few seconds.`,
          `After a client call: step away from the desk before diving back in.`,
        ],
      },
      {
        p: `Short pauses spread through the day help more than one long break you skip.`,
      },
      { h: 'Your studio air' },
      {
        p: `Design studios and home offices often run cool for computers and comfort. Air conditioning, forced-air heat and desk fans all move dry air across the face.`,
      },
      {
        list: [
          `Keep ceiling vents and desk fans from blowing at your eyes.`,
          `Use a small humidifier near your desk in winter, cleaned per its instructions.`,
          `Keep a water bottle at your desk.`,
        ],
      },
      { h: 'Working with drops at your desk' },
      {
        p: `Wash your hands first, especially if you’ve been using a stylus or sketching with charcoal or markers. Then follow the label: {directions}. The label also says: {tip}. Stylus nibs, keyboard keys and tablet surfaces all count.`,
      },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. Read the caution before buying: {warnings}. The complete label is on our [Drug Facts page](/drug-facts). Keep the bottle in a drawer rather than on a sunny windowsill or near a hot laptop, since the label says: {storage}.`,
      },
      { h: 'Freelancers and agency designers' },
      {
        p: `Freelancers often work from the couch, café tables or a laptop at the kitchen counter. Those setups usually put the screen too low and the face too close, and they invite long sessions without moving. Even a laptop stand and an external keyboard change your posture enough to help.`,
      },
      {
        p: `If you need to restock, Quell checkout works as a guest, with no subscription. Orders of {freeBottles} or more bottles ship free, which suits designers who keep a bottle at home and one in a bag. See [buy Quell](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If you wear contact lenses, the Quell label doesn’t cover use with them, so ask your eye doctor or pharmacist. If dryness continues after you’ve changed your setup and habits, or if your eyes hurt or your vision changes, the label says: {stopUse} It’s also worth a regular eye exam to make sure your prescription, if you have one, still fits your screen distance. Our guide to [eye drops for computer users](/guides/eye-drops-for-computer-users) covers more of the desk side.`,
      },
    ],
    faq: [
      {
        q: 'Why do graphic designers get dry eyes?',
        a: `Long periods of close focus on detail reduce how often you blink, and studios often run air conditioning or heat. Together, they let the tear film thin out between blinks.`,
      },
      {
        q: 'Can eye drops affect how I see color?',
        a: `A lubricating drop can blur vision briefly as it spreads. Give your eyes time to clear before judging color or approving a proof.`,
      },
      {
        q: 'What monitor setup is easiest on the eyes for design work?',
        a: `An arm’s length away, with the top edge at or just below eye level, and brightness roughly matched to the room. Reduce window glare and scale up interface text.`,
      },
      {
        q: 'How can designers remember to take breaks?',
        a: `Tie them to the work: look away during every export, stand up before each review, and close your eyes between concepts. Short, regular pauses are easier to keep than long ones.`,
      },
    ],
  },
  /*
   * Sources checked 2026-11-15 for eye-drop-box-barcode:
   * - https://www.gs1us.org/upcs-barcodes-prefixes/what-is-a-gtin (GTIN identifies a
   *   trade item; UPC is synonymous with GTIN-12; GTIN-12 is always 12 digits)
   * - GS1 US help center and GTIN guideline (help.gs1us.org check digit calculator;
   *   gs1us.org GTIN introduction PDF): GTIN-12 = U.P.C. Company Prefix + item reference
   *   (11 digits combined) + check digit; check digit catches entry errors
   * - Quell's GTIN-12 860008931115 from PRODUCT_GTIN in src/lib/product-content.ts;
   *   check digit recomputed here (odd positions 19 x 3 = 57, even 18, total 75 -> 5).
   * The split between company prefix and item reference for Quell is not stated
   * because it was not verified.
   */
  {
    slug: 'eye-drop-box-barcode',
    title: 'What the barcode on an eye drop box means',
    description:
      'The barcode on an eye drop box is a 12-digit UPC that identifies the product, not the batch or price. How it differs from the NDC and lot number.',
    category: 'label',
    addedOn: '2026-11-15',
    body: [
      {
        p: `The barcode on an eye drop box is usually a UPC, a 12-digit number that GS1 US calls a GTIN-12. It identifies the product itself, the same on every box of that item, so a register or website can look it up. It doesn’t hold the price, the lot number or the expiration date. Quell’s carton UPC is 860008931115.`,
      },
      { h: 'What does a UPC code tell you?' },
      {
        p: `GS1 US, the organization that issues barcode numbers to companies in the United States, describes a GTIN (Global Trade Item Number) as an identification key used to identify a trade item. It also says a UPC is synonymous with a GTIN-12, and a GTIN-12 is always 12 digits. In plain terms, the number says “this exact product, from this company, in this size.”`,
      },
      {
        p: `What the number doesn’t carry is just as useful to know:`,
      },
      {
        list: [
          `It doesn’t contain a price. A store’s system looks up its own price when the code is scanned.`,
          `It doesn’t identify the batch. Every Quell carton has the same UPC, whichever lot it came from.`,
          `It doesn’t contain an expiration date.`,
          `It isn’t a safety or quality mark, and it doesn’t mean a product was reviewed by anyone.`,
        ],
      },
      { h: 'What do the numbers on a UPC code mean?' },
      {
        p: `According to GS1 US, the 12 digits of a GTIN-12 break into three parts:`,
      },
      {
        list: [
          `A company prefix, assigned by GS1 to the brand owner.`,
          `An item reference, which the company assigns to each product. GS1 notes that this part carries no built-in meaning; it’s simply a unique number.`,
          `A check digit at the end, calculated from the other 11.`,
        ],
      },
      {
        p: `The company prefix and item reference together always total 11 digits, but the split between them varies by company, so you can’t tell where one ends and the other begins just by looking.`,
      },
      { h: 'The check digit, using Quell as an example' },
      {
        p: `The last digit exists to catch mistakes, such as a misread scan or a typo when someone enters the number by hand. Quell’s UPC is 860008931115, and its check digit is the final 5. Here’s how it works out:`,
      },
      {
        list: [
          `Add the digits in the 1st, 3rd, 5th, 7th, 9th and 11th positions: 8 + 0 + 0 + 9 + 1 + 1 = 19.`,
          `Multiply that by 3: 57.`,
          `Add the digits in the 2nd, 4th, 6th, 8th and 10th positions: 6 + 0 + 8 + 3 + 1 = 18.`,
          `Add the two results: 57 + 18 = 75.`,
          `The check digit is whatever brings that total up to the next multiple of 10. From 75, that’s 5.`,
        ],
      },
      {
        p: `If a single digit were mistyped, the math would almost always fail, and the scanner or system would reject the number. GS1 US offers a check digit calculator on its site for anyone who wants to try it.`,
      },
      { h: 'Barcode vs. NDC number' },
      {
        p: `The NDC, or National Drug Code, is a separate identifier for drugs in the United States, used in FDA listings. It’s a different system from the GS1 barcode, even though on some medicine boxes the two share digits. This site doesn’t publish an NDC for Quell, and the barcode number shouldn’t be read as one. Our guide to [the NDC number on eye drops](/guides/what-is-the-ndc-number-on-eye-drops) explains how that code is structured and where to find it.`,
      },
      { h: 'Barcode vs. lot number and expiration date' },
      {
        p: `The lot number identifies the specific production batch, and it changes from run to run. The expiration date tells you how long that batch is good for. Both are usually printed or stamped separately from the barcode, often on a flap, the bottom of the carton or the bottle label. If you ever need to report a problem with a bottle, the lot number is the code a company asks for, not the UPC. See [what the lot number on eye drops means](/guides/what-the-lot-number-on-eye-drops-means).`,
      },
      {
        list: [
          `UPC: same on every box of the product.`,
          `Lot number: same within one batch, different between batches.`,
          `Expiration date: tied to the lot.`,
          `NDC: a drug listing code, separate from all three.`,
        ],
      },
      { h: 'Where you’ll see Quell’s UPC' },
      {
        p: `The UPC is printed with its bars on the carton. The same 860008931115 is the number online listings use to match the product; this site provides it in the product information it gives to search engines and shopping listings, so the item can be recognized as one product wherever it appears.`,
      },
      {
        p: `Knowing the number helps if you’re checking that a listing elsewhere refers to the same {size} Quell carton. It doesn’t, on its own, prove a box is genuine, since anyone can print a barcode. If you have doubts about a package, our guide on [how to tell if eye drops are counterfeit](/guides/how-to-tell-if-eye-drops-are-counterfeit) covers what to check, and buying from [quelldrop.com](/) means it ships directly from Brentwood, Tennessee.`,
      },
      { h: 'Scanning a barcode with your phone' },
      {
        p: `Barcode apps look up the number in whatever database they use. Results can be incomplete, out of date or wrong, especially for smaller brands. Take what an app shows as a hint, not as the label. The label on the carton and the [Drug Facts page](/drug-facts) are the source for what Quell contains and how to use it.`,
      },
      { h: 'What the barcode can’t tell you about using the drops' },
      {
        p: `Nothing about directions, warnings or ingredients lives in the barcode. For that, read the Drug Facts panel. Quell’s Uses read: {uses}. Its directions read: {directions}. One caution appears under Warnings: {warnings}. And if something about a bottle looks wrong, such as a broken seal or a leak, contact us at {phone}, {hours}.`,
      },
    ],
    faq: [
      {
        q: 'What do the numbers on a UPC code mean?',
        a: `A UPC is a 12-digit GTIN made of a company prefix assigned by GS1, an item reference the company assigns, and a final check digit that catches scanning and typing errors.`,
      },
      {
        q: 'Is a UPC the same as a GTIN?',
        a: `GS1 US says a UPC is synonymous with a GTIN-12, the 12-digit form of the Global Trade Item Number. GTINs also come in other lengths for different uses.`,
      },
      {
        q: 'Does the barcode on medicine show the expiration date?',
        a: `A standard UPC doesn’t. It identifies the product only. The expiration date and lot number are printed separately on the carton or bottle.`,
      },
      {
        q: 'What is the UPC for Quell eye drops?',
        a: `Quell’s carton carries the UPC 860008931115. It’s the same on every Quell carton, while the lot number and expiration date vary by batch.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-police-officers',
    title: 'Dry eyes for police officers',
    description:
      'Patrol car vents, night shifts, in-car computers and wind on traffic stops all dry the eyes. Practical habits for officers and where to keep drops on duty.',
    category: 'using',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Police officers get dry eyes from long hours in a patrol car with vents blowing, night shifts that run past normal sleep, staring at an in-car computer between calls, and wind and weather on traffic stops. Aim vents away from your face, look up from the screen often, wear eye protection outdoors, and use a lubricating drop as labeled, only while parked and once your vision is clear.`,
      },
      { h: 'Why patrol work dries your eyes' },
      {
        p: `A patrol shift combines conditions that each pull water from the tear film. The cruiser’s climate control runs constantly to keep a car full of equipment and a body in a vest comfortable. The in-car computer demands focus, which cuts down on blinking. Night shifts stretch waking hours. And stepping out into wind, cold or dust at a scene does the rest. None of these is unusual on its own; it’s the combination, shift after shift, that adds up.`,
      },
      { h: 'Patrol car vents' },
      {
        p: `Dash vents sit at face height, and in a parked car with the engine running for hours they blow air at you the entire time. Cooled air is dry, and heated air is drier still in relative terms.`,
      },
      {
        list: [
          `Angle the center vents toward your chest or the ceiling.`,
          `Use the floor setting for heat in winter when you can.`,
          `Lower the fan speed once the cabin is at temperature.`,
          `If you share a car, reset the vents at the start of shift; the last person’s setup may be aimed straight at your eyes.`,
        ],
      },
      { h: 'The in-car computer and paperwork' },
      {
        p: `Report writing, running plates and checking calls on a mobile data terminal mean long stretches of close focus, often at an awkward angle on a mounted screen. Concentration reduces your blink rate, and blinking spreads tears.`,
      },
      {
        list: [
          `Look up through the windshield and into the distance every few minutes.`,
          `Adjust the mount so the screen is as close to straight ahead as safety and your agency’s setup allow.`,
          `Turn screen brightness down at night to roughly match the dark cabin.`,
          `Blink fully a few times before you start a long report.`,
        ],
      },
      { h: 'Night shifts and dry eyes' },
      {
        p: `Graveyard schedules, rotating shifts and holdovers keep eyes open long past when they’d normally be closed. Eyes tend to feel driest late in a long day, and a shift that ends at sunrise is exactly that. Afterward, sleeping in a room with a ceiling fan or a heating vent blowing toward the bed can make it worse. Our guide to [dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) covers sleep timing and the drive home.`,
      },
      { h: 'Wind and weather at a scene' },
      {
        p: `Traffic stops on the shoulder of a highway, directing traffic at an intersection and standing at a perimeter all mean exposure to wind and passing-vehicle blast. Wraparound safety glasses or sunglasses, where agency policy allows, block much of it. Dust, grit and road spray are irritants too. If something gets in your eye and doesn’t rinse out, that’s a medical issue, not a dryness one.`,
      },
      {
        p: `Chemical exposure, including pepper spray during an arrest or training, is a separate situation that calls for your agency’s decontamination steps and medical care. A lubricating drop isn’t meant for it.`,
      },
      { h: 'Using drops on duty' },
      {
        p: `Only use drops while the car is parked and you’re not about to drive. A drop can blur vision briefly as it spreads, and you need clear vision before you’re back on the road or responding to a call. [Is it normal for vision to blur after eye drops?](/guides/is-it-normal-for-vision-to-blur-after-eye-drops) explains what to expect.`,
      },
      {
        list: [
          `Remove gloves and clean your hands first, with soap and water or a sanitizer you let dry completely.`,
          `Follow the label: {directions}.`,
          `Keep the tip clean, as the label says: {tip}.`,
          `Don’t share a bottle with a partner.`,
        ],
      },
      { h: 'Where to keep a bottle on duty' },
      {
        p: `The label’s storage line reads: {storage}. A trunk or glove box in a cruiser parked in summer sun, or one sitting in a lot through a winter night, can go well outside that range. Keep a bottle in a duty bag or locker that comes indoors with you, and carry one in a uniform pocket during the shift if your agency permits.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. Before you buy, read the caution: {warnings}. The complete panel is on our [Drug Facts page](/drug-facts). If you wear contact lenses on duty, the label doesn’t cover use with lenses; ask your eye doctor or pharmacist. The same applies to using it with other eye drops.`,
      },
      { h: 'Police officer eye exams and vision standards' },
      {
        p: `Agencies set their own vision requirements for hiring and fitness-for-duty exams, and those are a matter between you, your department and an eye doctor. A lubricating drop doesn’t change what a vision test measures. If dryness is affecting how well you see on the job, tell your eye doctor.`,
      },
      { h: 'When to get your eyes checked' },
      {
        p: `If dryness keeps coming back despite these changes, or if your eyes hurt or your vision changes, the label says: {stopUse} Many officers find it easier to order in advance than to shop between shifts; [Quell ships from Brentwood, Tennessee](/#buy) to any US address, with no subscription.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry in my patrol car?',
        a: `Dash vents blow cooled or heated air at face height for hours, and in-car computer work cuts down on blinking. Aiming the vents away from your face and looking up often help.`,
      },
      {
        q: 'Can police officers use eye drops on duty?',
        a: `The label doesn’t restrict it, but use them only while parked and wait for any blur to clear before you drive. Check your agency’s policies on what you carry.`,
      },
      {
        q: 'Should I use eye drops after pepper spray exposure?',
        a: `Pepper spray exposure calls for your agency’s decontamination steps and medical care. A lubricating drop isn’t meant for chemical exposure.`,
      },
      {
        q: 'Where should officers keep eye drops?',
        a: `In a duty bag, locker or uniform pocket that stays at a comfortable temperature. A cruiser trunk can get hotter or colder than the label’s storage range of {storage}.`,
      },
    ],
  },
  /*
   * Sources checked 2026-11-15 for dry-eyes-for-mechanics:
   * - https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.133
   *   (1910.133(a)(1): employer shall ensure each affected employee uses appropriate
   *   eye or face protection when exposed to hazards such as flying particles and
   *   liquid chemicals)
   * - OSHA 1910.151(c): suitable facilities for quick drenching or flushing of the eyes
   *   where a person may be exposed to injurious corrosive materials.
   */
  {
    slug: 'dry-eyes-for-mechanics',
    title: 'Dry eyes for auto mechanics',
    description:
      'Shop fans, heaters and hours under vehicles dry the eyes. How mechanics can stay comfortable, and why debris or chemical splashes need a doctor, not a drop.',
    category: 'using',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Auto mechanics get dry eyes from shop air: big fans in summer, gas or electric heaters in winter, open bay doors letting in wind, and long stretches looking up under a vehicle on a lift. Wear safety glasses, keep fans and heaters off your face, and use a lubricating drop as labeled for everyday dryness. Flying debris or a chemical splash is an emergency for flushing and a doctor, not an eye drop.`,
      },
      { h: 'Why shop air dries your eyes' },
      {
        p: `A repair shop is a big, open space that’s hard to keep comfortable. In summer, high-velocity floor fans move air across the bays so techs can work. In winter, overhead or portable heaters warm the air near where you stand, and bay doors open and close from morning to closing time. Moving air and warmed air both speed up evaporation from the tear film, the thin layer of oil, water and mucus that keeps the eye’s surface moist.`,
      },
      {
        p: `Add close, focused work, such as reading a scan tool screen, tracing a wire or lining up a bolt you can barely see, and you blink less. Fewer blinks mean tears get spread less often.`,
      },
      { h: 'Shop fans and heaters' },
      {
        list: [
          `Aim floor fans at your body or legs, not your face, and avoid standing right in their path.`,
          `Keep portable heaters pointed at your feet or the work area, and never stand facing one for long.`,
          `Overhead heaters warm the air near your head; if you can, work a little to the side of them.`,
          `When the bay door opens on a windy day, turn away for a moment rather than staring into the gust.`,
        ],
      },
      { h: 'Looking up under vehicles' },
      {
        p: `Working under a car on a lift means rust flakes, dirt, undercoating and dripping fluids can fall straight toward your eyes. It also means holding your head back and staring up for long periods, which can make you blink less. This is where eye protection matters most.`,
      },
      {
        list: [
          `Wear safety glasses or goggles every time you go under a vehicle, even for a quick look.`,
          `Goggles with a seal give more protection against falling dust and drips than open glasses.`,
          `Use a light that doesn’t shine directly into your eyes.`,
          `Take a break to look at something at eye level and blink fully every so often.`,
        ],
      },
      { h: 'Mechanic eye protection and what OSHA says' },
      {
        p: `OSHA’s eye and face protection standard, 29 CFR 1910.133, says employers must ensure each affected employee uses appropriate eye or face protection when exposed to hazards such as flying particles or liquid chemicals. Grinding, cutting, using air tools, and handling batteries, brake cleaner or coolant all fall into that territory. Wear the protection your shop provides, and if it fogs or doesn’t fit, ask for something that works so you actually keep it on.`,
      },
      { h: 'Debris or a chemical splash is an emergency' },
      {
        p: `A lubricating drop is for ordinary dryness and irritation. It’s not for something stuck in your eye or a chemical that splashed into it. OSHA’s first-aid standard calls for facilities for quick flushing of the eyes where workers may be exposed to corrosive materials, and battery acid is one. If it happens:`,
      },
      {
        list: [
          `Get to the eyewash station and flush right away, following your shop’s procedure.`,
          `Don’t rub the eye.`,
          `Don’t try to remove metal or anything embedded yourself.`,
          `Get medical care immediately, and bring the product name or safety data sheet if a chemical was involved.`,
        ],
      },
      { h: 'Using drops in the shop' },
      {
        p: `Shop hands are rarely clean. Before using any eye drop, wash with soap and water to remove grease and solvent, and dry your hands on a clean towel, not a shop rag. Then follow the label: {directions}. The label’s handling line reads: {tip}. A workbench, toolbox lid or creeper all count.`,
      },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. Before ordering, read the caution: {warnings}. The full label is on our [Drug Facts page](/drug-facts). If you use other eye drops or wear contact lenses, the label doesn’t cover combining them; ask your eye doctor or pharmacist.`,
      },
      { h: 'Where to keep a bottle at work' },
      {
        p: `The label’s storage line reads: {storage}. A toolbox drawer next to a heater or in a bay that bakes in July can run outside that range, as can a truck cab in January. A locker or a break room shelf at room temperature is a better spot. Keep the bottle in a clean zip bag so it doesn’t pick up grease. For more on hot vehicles, see [can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car).`,
      },
      { h: 'Habits that help over a full shift' },
      {
        list: [
          `Start the day with safety glasses on and keep them on, including for quick jobs.`,
          `Drink water through the shift; shops get hot, and staying hydrated is basic comfort.`,
          `Look up from a scan tool or laptop every few minutes and blink.`,
          `Rinse dust off your face at breaks with clean water, eyes closed.`,
          `At home, keep fans and heating vents off your face while you sleep.`,
        ],
      },
      {
        p: `Woodshops have similar issues with dust; [dry eyes for woodworkers](/guides/dry-eyes-for-woodworkers) covers those. Outdoor crews will find more in [dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers).`,
      },
      { h: 'When to see a doctor' },
      {
        p: `If your eyes stay dry and irritated after you’ve changed the airflow around you and kept protection on, or if anything hurts, the label is clear: {stopUse} Any eye injury at work should be seen right away.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working in a garage?',
        a: `Shop fans, heaters and open bay doors keep air moving across your face, and focused work cuts down on blinking. Keeping airflow off your face and wearing safety glasses help.`,
      },
      {
        q: 'What should a mechanic do if something gets in their eye?',
        a: `Flush at the eyewash station right away, don’t rub the eye, and get medical care. Never try to remove embedded metal yourself, and don’t rely on lubricating drops for an injury.`,
      },
      {
        q: 'Do mechanics have to wear safety glasses?',
        a: `OSHA’s standard 1910.133 requires employers to ensure workers use appropriate eye or face protection when exposed to hazards such as flying particles or liquid chemicals, which covers much shop work.`,
      },
      {
        q: 'Can I use eye drops with greasy hands?',
        a: `No. Wash with soap and water and dry with a clean towel first. The label also says not to touch the bottle tip to any surface.`,
      },
    ],
  },
]
