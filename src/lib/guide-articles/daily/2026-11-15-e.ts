import type { Guide } from '@/lib/guide-types'
export const DAILY_20261115_E: Guide[] = [
  /*
   * Sources fetched 2026-11-15 for dry-eye-relief-richmond-va:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013740.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013740.csv
   *   (RICHMOND INTL AP, VA, elev 50.0 m: annual precip 45.50 in; Aug 4.90 wettest,
   *   Feb 2.61 driest; annual snow 8.8 in, Jan 3.7; Jul high 89.5 F, low 69.2;
   *   Jan high 47.8, low 28.8; 44.9 days at or above 90 F; 1.6 days at or above
   *   100 F; 73.5 nights at or below 32 F; 4.7 days with a high at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (RICHMOND, VA, WBAN 13740, morning/afternoon: Mar 76/48, Apr 75/46,
   *   Aug 87/57, Sep 88/56, Oct 88/53, Jan 78/55, annual 81/53)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (RICHMOND, VA: Mar 4.1 highest, Aug 2.8 lowest, annual 3.4; units not
   *   printed in the file, so only compared month to month)
   * 50 m converted is about 164 ft.
   */
  {
    slug: 'dry-eye-relief-richmond-va',
    title: 'Dry eye relief in Richmond, Virginia',
    description:
      'Richmond’s April afternoons average 46 percent humidity, its driest of the year. NOAA’s numbers and everyday dry eye relief for RVA, season by season.',
    category: 'local',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Dry eye relief in Richmond means planning for two seasons that work against you: breezy spring afternoons, when NOAA’s records show the city’s lowest humidity, and the long stretch of air conditioning and then furnace heat that follows. Keep vents off your face, take blink breaks at screens, wear sunglasses on windy days and use a lubricating drop as its label directs. See an eye doctor for pain or vision changes.`,
      },
      { h: 'Is Richmond humid or dry?' },
      {
        p: `Both, depending on the month and the hour. Richmond International Airport, the official weather station for the city, gets about 45.5 inches of precipitation in a normal year according to NOAA’s 1991 to 2020 climate normals, and August is the wettest month at 4.90 inches. The station sits only about 164 feet above sea level, and the air off the coastal plain carries plenty of moisture through summer.`,
      },
      {
        p: `NOAA’s relative humidity table shows how much the day changes that picture. Morning readings in September and October average 88 percent, which is the dew-soaked lawn and foggy commute many Richmonders know. Afternoons tell a different story:`,
      },
      {
        list: [
          `April afternoons average 46 percent, the lowest of any month.`,
          `March follows at 48 percent.`,
          `October drops to 53 percent in the afternoon after an 88 percent morning.`,
          `Even August, the muggiest month on paper, averages 57 percent by afternoon.`,
        ],
      },
      {
        p: `So a day that starts damp can end dry, and that afternoon drop is when many people notice gritty or scratchy eyes.`,
      },
      { h: 'Why spring is hard on Richmond eyes' },
      {
        p: `March and April combine the city’s lowest afternoon humidity with its breeziest weather. NOAA’s wind table for Richmond peaks in March, and August is the calmest month. Moving air across the eye speeds the evaporation of the tear film, the thin layer of oil, water and mucus that keeps the surface comfortable, so a windy spring walk along the Canal Walk or out to Belle Isle can leave eyes stinging.`,
      },
      {
        list: [
          `Wraparound sunglasses block side wind as well as glare off the James.`,
          `Spring yard work goes easier in the morning, when humidity runs above 70 percent.`,
          `With the windows open on a breezy day, sit out of the cross-draft.`,
          `If you bike the Virginia Capital Trail, clear or tinted cycling glasses help on the long open stretches.`,
        ],
      },
      { h: 'Summer: 45 days at 90 degrees, and the air conditioning' },
      {
        p: `A normal Richmond July runs from about 69°F at dawn to 89.5°F in the afternoon, and the airport averages close to 45 days a year at 90°F or above. Outdoors, that heat comes with humidity. The dryness most people feel in summer is indoors: air conditioning pulls moisture out of the air as it cools it, and offices, cars and stores run it hard from late May into September.`,
      },
      {
        p: `A few habits that help in July and August:`,
      },
      {
        list: [
          `Point dashboard vents at your chest or the floor, never straight at your eyes.`,
          `Move a desk out of the stream from a ceiling diffuser if you can.`,
          `Look away from your screen every so often and blink fully, since concentration slows blinking.`,
          `Bring sunglasses for a day tubing or rafting on the James, where glare off the water adds up.`,
        ],
      },
      { h: 'Winter heat in a mild-winter city' },
      {
        p: `Richmond winters are short by northern standards. January’s normal high is 47.8°F and the station records about 8.8 inches of snow a year. Still, it logs roughly 73 nights at or below freezing, enough that furnaces and heat pumps run through most of December, January and February. Warmed indoor air holds the same water it had outside but at a lower relative humidity, so a cozy living room can feel dry on the eyes.`,
      },
      {
        p: `A small humidifier in the bedroom, closed registers near your favorite chair and a little distance from a space heater all make a difference. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) goes through it room by room.`,
      },
      { h: 'Using Quell in Richmond' },
      {
        p: `Quell is a preservative-free lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. That’s the layer a breezy April afternoon and an air-conditioned office both work on. Its label lists the Uses as: {uses}. Directions: {directions}. And before the first drop, read the caution: {warnings}.`,
      },
      {
        p: `The label’s storage line reads: {storage}. A car parked in the sun at Short Pump in July can get far hotter than that, so keep the bottle in a bag that comes inside with you. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering to Richmond' },
      {
        p: `Orders ship from Brentwood, Tennessee, to addresses across the United States, including Richmond, Henrico, Chesterfield and the Fan. Checkout works as a guest with no account needed, shipping is {shipping} per order, and {freeBottles} or more bottles ship free. You’ll get a tracking email when the package leaves, though no delivery date is promised, so reorder before the bottle runs low. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. The [Richmond page](/eye-drops/richmond-va) and the [Virginia page](/eye-drops/state/virginia) have the local details.`,
      },
      { h: 'When to see an eye doctor in Richmond' },
      {
        p: `A drop is for everyday dryness and irritation, not for working out why your eyes keep bothering you. The label sets the line clearly: {stopUse} Pain, blurred vision that doesn’t clear with blinking, or one eye much worse than the other all call for an appointment. The [dry eye self-check](/self-check) can help you describe what you’re feeling before you go; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'What is the most humid month in Richmond, VA?',
        a: `By NOAA’s morning readings, September and October are the dampest, averaging 88 percent relative humidity at Richmond International Airport. August has the highest afternoon average, at 57 percent.`,
      },
      {
        q: 'Why do my eyes feel dry in Richmond in the spring?',
        a: `March and April afternoons have Richmond’s lowest humidity, 48 and 46 percent in NOAA’s table, and March is the windiest month. Dry, moving air pulls water from the tear film faster.`,
      },
      {
        q: 'How many 90 degree days does Richmond get?',
        a: `NOAA’s 1991 to 2020 normals give Richmond International Airport about 45 days a year at 90°F or hotter, with July the warmest month at a normal high of 89.5°F.`,
      },
      {
        q: 'Can I get Quell delivered in Richmond, Virginia?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Richmond and the surrounding counties, with guest checkout and a tracking email. Delivery dates aren’t promised, so order ahead of running out.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-15 for dry-eye-relief-washington-dc:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013743.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013743.csv
   *   (WASHINGTON REAGAN AP, elev 3.0 m: annual precip 41.82 in; Jul 4.33 wettest,
   *   Feb 2.62 driest; annual snow 13.7 in, Jan 4.9, Feb 5.0; Jul high 89.6 F,
   *   low 72.4; Jan high 44.8, low 30.1; 40.0 days at or above 90 F; 60.1 nights
   *   at or below 32 F; 7.4 days with a high at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (WASHINGTON NAT'L, DC, WBAN 13743, morning/afternoon: Mar 69/49,
   *   Apr 69/48, Sep 81/55, Dec 72/56, annual 74/53; WASHINGTON DULLES
   *   annual 80/53)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (WASHINGTON NAT'L: annual 4.0, Mar 4.6 highest, Aug 3.5 lowest;
   *   WASHINGTON DULLES annual 3.1. Units not printed; compared only.)
   * The official station is in Arlington, Virginia, beside the Potomac.
   */
  {
    slug: 'dry-eye-relief-washington-dc',
    title: 'Dry eye relief in Washington, D.C.',
    description:
      'D.C.’s driest afternoons come in March and April, NOAA shows, right as the Mall fills with walkers. Practical dry eye relief for the capital, month by month.',
    category: 'local',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Dry eye relief in Washington, D.C., starts with knowing when the air turns on you. NOAA’s records show the capital’s lowest afternoon humidity in March and April, its breeziest month in March, and long seasons of office air conditioning and winter heat. Wear sunglasses on the Mall, aim vents away from your face, blink fully at screens and use a lubricating drop as labeled. Eye pain or vision changes need a doctor.`,
      },
      { h: 'Where D.C.’s weather numbers come from' },
      {
        p: `The city’s official weather station isn’t in the District at all. It sits at Reagan National Airport in Arlington, Virginia, practically at sea level on the bank of the Potomac. NOAA’s 1991 to 2020 normals for that station give a picture of a humid, four-season city:`,
      },
      {
        list: [
          `About 41.8 inches of precipitation in a normal year, with July the wettest month.`,
          `February is the driest month, at 2.62 inches.`,
          `Normal snowfall is 13.7 inches, nearly all of it in January and February.`,
          `A July day runs from about 72°F at dawn to 89.6°F in the afternoon, and the station averages 40 days a year at 90°F or above.`,
          `About 60 nights a year fall to freezing or below.`,
        ],
      },
      {
        p: `Those warm July nights matter. When the low only drops into the 70s, air conditioning runs around the clock in apartments, row houses and offices.`,
      },
      { h: 'The windy riverfront' },
      {
        p: `NOAA’s wind table has two stations for the area, and they differ in a way anyone who has crossed Memorial Bridge in March will recognize. National, on the open water of the Potomac, averages noticeably more wind through the year than Dulles out in Loudoun County. At National, March is the windiest month and August the calmest.`,
      },
      {
        p: `Wind thins the tear film by carrying moisture off the surface of the eye. The places that feel it most are the open ones: the Tidal Basin loop, the long walk from the Lincoln Memorial to the Capitol, the Georgetown waterfront and the Mount Vernon Trail along the river.`,
      },
      { h: 'Cherry blossom season and the driest afternoons' },
      {
        p: `The spring rush to the Tidal Basin falls in the same stretch as D.C.’s driest air. NOAA’s humidity table for National gives April an afternoon average of 48 percent and March 49 percent, the two lowest months of the year. Mornings run around 69 percent, so the drop through the day is steep.`,
      },
      {
        list: [
          `Go early. Morning humidity is higher and the crowds are thinner.`,
          `Wraparound sunglasses do more than regular frames against a crosswind off the water.`,
          `Hours spent looking up at branches and through a phone camera mean less blinking, so pause and blink on purpose.`,
          `Keep your bottle in a bag, not loose in a jacket pocket, and check the cap before it goes in.`,
        ],
      },
      { h: 'Office air on the Hill and downtown' },
      {
        p: `A lot of D.C. works at a desk: federal agencies, law firms, think tanks, newsrooms, lobby shops. Long days of reading on screens slow blinking, and big office buildings run climate control hard in both directions. September is the dampest month outdoors, with mornings near 81 percent, but inside the building the air conditioning keeps the air dry.`,
      },
      {
        p: `Small changes help. Shift the monitor slightly below eye level so your lids cover more of the eye, step outside at lunch, and close or redirect a vent that blows across your desk. If you run two screens, our guide to [dry eyes with multiple monitors](/guides/dry-eyes-with-multiple-monitors) covers the setup.`,
      },
      { h: 'Metro, commutes and winter' },
      {
        p: `Metro platforms get a rush of air every time a train pulls in, and escalator shafts at deep stations like Wheaton and Forest Glen pull wind with them. Stand back from the edge and look away from the tunnel as the train arrives. In winter, the switch from a 30-degree platform to a heated train car and then a heated office repeats several times a day. January highs average 44.8°F at National, and buildings keep the heat on from late fall into March.`,
      },
      { h: 'What Quell is and what its label says' },
      {
        p: `Quell is a preservative-free lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses on its Drug Facts panel read: {uses}. The directions: {directions}. The label also asks you to handle the bottle carefully: {tip}.`,
      },
      {
        p: `One caution stands out: {warnings}. Store it as the label says, {storage}, which rules out a car left at a summer ball game at Nationals Park. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell delivered in the District' },
      {
        p: `Quell ships from Brentwood, Tennessee, to D.C. addresses, from Capitol Hill apartments to Chevy Chase houses, and to the Maryland and Virginia suburbs. There’s no account to create, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. A tracking email follows when the package leaves; no delivery date is promised, so give yourself some lead time, especially if your building’s mailroom holds packages. See the [Washington, D.C. page](/eye-drops/washington-dc) or the [District of Columbia page](/eye-drops/state/district-of-columbia).`,
      },
      { h: 'When drops aren’t enough' },
      {
        p: `If your eyes keep bothering you, an optometrist or ophthalmologist can work out the cause and what to do about it. The label tells you when to stop: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'Where is the official weather station for Washington, D.C.?',
        a: `At Reagan National Airport in Arlington, Virginia, on the Potomac. NOAA’s climate normals and humidity tables for D.C. come from that station.`,
      },
      {
        q: 'What is the driest month in Washington, D.C.?',
        a: `February has the least precipitation at Reagan National, about 2.62 inches. For humidity, April afternoons are the driest, averaging 48 percent in NOAA’s table.`,
      },
      {
        q: 'Why do my eyes water on windy days in D.C.?',
        a: `Wind speeds the evaporation of the tear film, and irritated eyes often respond by watering. National Airport, on the river, averages more wind than Dulles, and March is its windiest month.`,
      },
      {
        q: 'Does Quell deliver to Washington, D.C.?',
        a: `Yes. Quell ships to D.C. addresses from Brentwood, Tennessee, with guest checkout and a tracking email. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-15 for dry-eye-relief-baltimore-md:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00093721.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00093721.csv
   *   (BALTIMORE WASH INTL AP, elev 47.5 m: annual precip 45.00 in; Jul 4.48
   *   wettest, Feb 2.90 driest; annual snow 19.3 in, Feb 7.5, Jan 6.4; Jul high
   *   88.8 F, low 67.7; Jan high 43.2, low 25.4; 33.9 days at or above 90 F;
   *   93.2 nights at or below 32 F; 10.7 days with a high at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (BALTIMORE, MD, WBAN 93721, morning/afternoon: Jan 73/56, Mar 71/50,
   *   Apr 71/48, Sep 84/55, annual 77/53)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (BALTIMORE: Mar 3.9 highest, Aug 2.6 lowest. Compared only.)
   * Reagan National (USW00013743) has 60.1 freezing nights, for comparison.
   * 47.5 m converted is about 156 ft.
   */
  {
    slug: 'dry-eye-relief-baltimore-md',
    title: 'Dry eye relief in Baltimore, Maryland',
    description:
      'BWI averages 93 freezing nights a year, so Baltimore heat runs for months. What NOAA’s data means for dry, scratchy eyes in Charm City, and what helps.',
    category: 'local',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Dry eye relief in Baltimore centers on the heating season. NOAA counts about 93 nights a year at or below freezing at BWI, so furnaces and radiators run from late fall into spring, drying indoor air. Add harbor wind and summer air conditioning, and eyes get a workout. Humidify the bedroom, keep heat and vents off your face, wear sunglasses by the water and use a lubricating drop as labeled.`,
      },
      { h: 'Baltimore’s climate in NOAA’s numbers' },
      {
        p: `Baltimore’s official weather station is at BWI Thurgood Marshall Airport, south of the city in Anne Arundel County, at about 156 feet. The 1991 to 2020 climate normals from NOAA:`,
      },
      {
        list: [
          `About 45 inches of precipitation in a normal year, spread fairly evenly; July is the wettest month at 4.48 inches and February the driest at 2.90.`,
          `Normal snowfall of 19.3 inches, with February the snowiest month at 7.5 inches.`,
          `About 34 days a year at 90°F or hotter, and a normal July high of 88.8°F.`,
          `About 93 nights at or below freezing, and close to 11 days when the high stays at 32°F or lower.`,
        ],
      },
      {
        p: `That freezing-night count stands out. Reagan National, about 30 miles down the road, averages around 60. BWI sits inland, away from the river and the dense pavement of a downtown, and its winter nights run colder.`,
      },
      { h: 'Why are my eyes so dry in the winter in Baltimore?' },
      {
        p: `Cold outdoor air holds very little water. When the furnace warms it to 68°F, the amount of moisture stays the same while the air’s capacity to hold it climbs, so the relative humidity indoors falls well below what NOAA records outside. January afternoons at BWI average 56 percent humidity outdoors; a heated rowhouse can feel much drier than that.`,
      },
      {
        p: `Older Baltimore homes add their own quirks. Radiators under windows, space heaters in drafty back rooms and forced-air registers in the floor all push warm, dry air toward wherever people sit. Some fixes cost nothing:`,
      },
      {
        list: [
          `Don’t park your favorite chair directly in front of a radiator or register.`,
          `Run a small humidifier in the bedroom, where you spend the most hours in one spot.`,
          `Keep space heaters a few feet away and aimed at your legs, not your face.`,
          `Turn the car’s heat to the floor setting on the commute up I-83 or down the parkway.`,
        ],
      },
      {
        p: `Our guide to [dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) covers placement in more detail.`,
      },
      { h: 'Harbor wind and spring' },
      {
        p: `The Inner Harbor promenade, Fells Point’s waterfront and the Fort McHenry seawall are lovely and exposed. NOAA’s wind table for Baltimore peaks in March and bottoms out in August. Spring also brings the year’s lowest afternoon humidity, 48 percent in April and 50 percent in March, so a March walk around the harbor can be harder on your eyes than a sticky July evening.`,
      },
      {
        p: `Sunglasses with a wrap shape help on the water taxi and along the promenade, and turning your back to the wind while you wait at a stop takes the worst of it off your eyes.`,
      },
      { h: 'Summer: muggy outside, dry inside' },
      {
        p: `Baltimore summers are humid outdoors; September mornings at BWI average 84 percent. The dryness comes from indoors, where air conditioning cools and dehydrates the air in offices, hospitals, classrooms and cars. An afternoon game at Camden Yards brings sun and glare off the field, then the drive home with cold air blowing across the dashboard. Keep vents aimed low and take sunglasses to day games.`,
      },
      { h: 'Screens, shifts and long days' },
      {
        p: `Baltimore’s big employers include hospitals and universities, with long shifts and long hours of reading and charting. Concentrating on a screen slows blinking, and blinking is how the eye spreads a fresh layer of tears. Every so often, look across the room and blink fully a few times. For shift workers, our guide to [dry eyes on long nursing shifts](/guides/dry-eyes-on-long-nursing-shifts) has more.`,
      },
      { h: 'Quell’s label, in brief' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and it’s preservative-free. Its Uses: {uses}. Directions: {directions}. Read this caution before buying: {warnings}. And follow the label’s storage line, {storage}, which means not leaving a bottle in a car through a February freeze. The complete panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Baltimore' },
      {
        p: `We ship from Brentwood, Tennessee, to Baltimore City and Baltimore County, Towson, Columbia and the rest of Maryland. Guest checkout means no account, shipping costs {shipping}, and {freeBottles} or more bottles ship free. A shipping email with tracking arrives when your order leaves us; no arrival date is promised, so don’t wait until the last drop. The [Baltimore page](/eye-drops/baltimore-md) and the [Maryland page](/eye-drops/state/maryland) have more.`,
      },
      { h: 'When to call an eye doctor' },
      {
        p: `Persistent dryness deserves a proper exam rather than another bottle. The label puts it plainly: {stopUse} If an eye hurts, your vision changes, or something got into your eye, get it looked at promptly.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Baltimore get at night in winter?',
        a: `NOAA’s 1991 to 2020 normals give BWI a January low of about 25.4°F, with around 93 nights a year at or below freezing.`,
      },
      {
        q: 'How much snow does Baltimore get?',
        a: `About 19.3 inches in a normal year at BWI, according to NOAA, with February the snowiest month at 7.5 inches.`,
      },
      {
        q: 'Why do radiators make my eyes dry?',
        a: `Radiators warm the air without adding water, so its relative humidity drops. Sitting close to one also puts warm air right across your eyes, which speeds tear evaporation.`,
      },
      {
        q: 'Can I order Quell to Baltimore, MD?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Baltimore and the rest of Maryland, with guest checkout and tracking by email. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-15 for dry-eye-relief-philadelphia-pa:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013739.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013739.csv
   *   (PHILADELPHIA INTL AP, elev 3.0 m: annual precip 44.11 in; Sep 4.40,
   *   Jul 4.38, Feb 2.75 driest; annual snow 23.1 in, Feb 8.4, Jan 7.1, Dec 3.5;
   *   Jul high 87.8 F, low 69.6; Jan high 41.3, low 26.0; 29.7 days at or above
   *   90 F; 77.3 nights at or below 32 F; 13.1 days with a high at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (PHILADELPHIA, PA, WBAN 13739, morning/afternoon: Jan 73/58, Mar 71/51,
   *   Apr 70/48, Sep 82/54, Dec 74/58, annual 76/54)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (PHILADELPHIA: Mar 4.8 highest, Aug 3.5 lowest, annual 4.1;
   *   Central Park annual 2.7. Units not printed; compared only.)
   */
  {
    slug: 'dry-eye-relief-philadelphia-pa',
    title: 'Dry eye relief in Philadelphia, Pennsylvania',
    description:
      'Philly’s airport station sees 23 inches of snow, 13 days that never top freezing and a windy March. What NOAA’s data means for dry eyes, and what helps.',
    category: 'local',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Dry eye relief in Philadelphia means handling raw winter wind outside and dry heat inside. NOAA’s records for the airport show a windy March, about 13 days a year that never get above freezing, and the city’s lowest humidity on April afternoons. Turn your face from the wind, keep heaters and car vents pointed elsewhere, blink often during screen work and use a lubricating drop as directed. Pain or vision changes call for an eye doctor.`,
      },
      { h: 'Philadelphia weather by the numbers' },
      {
        p: `Philadelphia International Airport, on the Delaware River in the southwest corner of the city, is the official station. Its 1991 to 2020 normals from NOAA:`,
      },
      {
        list: [
          `About 44.1 inches of precipitation a year; September and July are the wettest months and February the driest, at 2.75 inches.`,
          `About 23.1 inches of snow in a normal winter, with February leading at 8.4 inches and January at 7.1.`,
          `A January that runs from 26°F at night to 41.3°F in the afternoon.`,
          `About 77 nights at or below freezing and 13 days when the high stays at 32°F or lower.`,
          `About 30 days a year at 90°F or above, and a July normal high of 87.8°F.`,
        ],
      },
      { h: 'The windiest month is March' },
      {
        p: `NOAA’s wind table for the Philadelphia airport shows a clear seasonal swing: March is the windiest month and August the calmest. The airport also averages more wind than Central Park does in New York, partly because it sits on flat, open ground beside the river.`,
      },
      {
        p: `In the city that means gusts down Broad Street, a stiff breeze on the Ben Franklin Bridge walkway and a cold headwind on the Schuylkill River Trail past Boathouse Row. Moving air pulls water out of the tear film, and cold wind makes the eyes sting and then water. A few things help:`,
      },
      {
        list: [
          `Wraparound sunglasses or clear safety-style glasses on runs and rides along Kelly Drive.`,
          `A hat with a brim to break wind coming over your head.`,
          `At a SEPTA stop, stand so the wind hits your back rather than your face.`,
          `Waiting on an elevated platform on the Market-Frankford Line in January, look away when a train sweeps in.`,
        ],
      },
      { h: 'Why do my eyes burn in the winter in Philly?' },
      {
        p: `Much of the city’s housing is rowhomes, and plenty of them have older heating: radiators, baseboard heat, or forced air through floor registers. All of it warms the air without adding moisture. NOAA records January afternoons at the airport at 58 percent humidity outdoors, but a heated room can feel far drier than that, and many people notice burning or gritty eyes by evening.`,
      },
      {
        p: `A humidifier in the bedroom, a few feet of distance from radiators, and a short break from the screen every so often all help. If you sleep with the heat blowing, close the bedroom register partway. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) covers the rest of the house.`,
      },
      { h: 'Game days and parades in the cold' },
      {
        p: `Philadelphia does a lot outdoors in winter. An Eagles game in December at the stadium complex in South Philly, the Mummers Parade on New Year’s Day, or an afternoon at an outdoor holiday market all mean hours in cold air, often with wind off the river. Staring at the field or a phone also cuts down on blinking. Wear sunglasses even on gray days to break the wind, and blink on purpose during timeouts.`,
      },
      { h: 'Spring and summer' },
      {
        p: `April afternoons are Philadelphia’s driest of the year at 48 percent in NOAA’s table, with March at 51. Summer brings the opposite outside, sticky air and September mornings near 82 percent, but offices, trains and stores run cold, dry air conditioning. If you sit under a vent at work, ask to move or redirect it. Commuters on Regional Rail can sit away from overhead vents on long trips.`,
      },
      { h: 'How Quell fits in' },
      {
        p: `Quell is a preservative-free lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. According to its Drug Facts label, it’s {uses}. The directions are: {directions}. The handling line: {tip}. Before ordering, check the caution: {warnings}.`,
      },
      {
        p: `The storage line on the label reads: {storage}. A bottle left in the car through a January night, or on a sunny dashboard in July, can go outside that range. The whole panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Shipping Quell to Philadelphia' },
      {
        p: `Orders go out from Brentwood, Tennessee, to Philadelphia neighborhoods from Fishtown to Germantown, the Main Line, and the rest of Pennsylvania. There’s no account to make, shipping runs {shipping} per order, and {freeBottles} or more bottles ship free. You’ll get tracking by email, though no delivery date is promised. If packages tend to vanish from your stoop, ship to a workplace or someone who’s home. The [Philadelphia page](/eye-drops/philadelphia-pa) and the [Pennsylvania page](/eye-drops/state/pennsylvania) have more.`,
      },
      { h: 'Know when to see a doctor' },
      {
        p: `Eye drops cover everyday dryness, but not every dry or irritated eye is a simple case. The label tells you when to stop: {stopUse} A sudden change in vision, real pain or an injury needs prompt care. The [self-check](/self-check) can help you organize your symptoms before an appointment; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How much snow does Philadelphia get a year?',
        a: `NOAA’s 1991 to 2020 normals give Philadelphia International Airport about 23.1 inches of snow in a typical winter, with February the snowiest month at 8.4 inches.`,
      },
      {
        q: 'What is the windiest month in Philadelphia?',
        a: `March, according to NOAA’s average wind speed table for the airport. August is the calmest month.`,
      },
      {
        q: 'Why do my eyes water outside in the Philly winter?',
        a: `Cold wind dries and irritates the surface of the eye, and the eye often reacts by watering. Sunglasses or a brimmed hat cut the wind, and stepping out of it helps quickly.`,
      },
      {
        q: 'Does Quell ship to Philadelphia?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Philadelphia and anywhere in Pennsylvania, with guest checkout and a tracking email. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-15 for dry-eye-relief-new-york-city:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00094728.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00094728.csv
   *   (NEW YORK CNTRL PK TWR, elev 39.6 m: annual precip 49.52 in; annual snow
   *   29.8 in, Feb 10.1, Jan 8.8, Dec 4.9; Jul high 84.9 F, low 70.1; Jan high
   *   39.5, low 27.9; 17.4 days at or above 90 F; 67.3 nights at or below 32 F;
   *   16.0 days with a high at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (NEW YORK Central Park, WBAN 94728, morning/afternoon: Jan 67/56,
   *   Mar 65/50, Apr 64/47, Sep 77/57, Dec 68/58, annual 70/54)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (Central Park annual 2.7, Aug 1.9; JFK 5.0; LaGuardia 5.0. Units not
   *   printed; compared only.)
   * - https://www.nyc.gov/site/hpd/services-and-information/heat-and-hot-water-information.page
   *   (heat season Oct 1 to May 31; 6 a.m. to 10 p.m. at least 68 F when it is
   *   below 55 F outside; 10 p.m. to 6 a.m. at least 62 F)
   */
  {
    slug: 'dry-eye-relief-new-york-city',
    title: 'Dry eye relief in New York City',
    description:
      'NYC buildings must keep heat on October through May, and steam heat dries the air. NOAA and city data on dry eyes in New York, plus fixes that fit city life.',
    category: 'local',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Dry eye relief in New York City starts indoors. City rules keep apartment heat on from October 1 through May 31, and radiators and steam heat dry the air for eight months. Outside, wind funnels down avenues and subway trains push gusts along platforms. Run a humidifier, sit away from the radiator, shield your eyes on windy blocks, blink during screen time and use a lubricating drop as labeled.`,
      },
      { h: 'Eight months of heat season' },
      {
        p: `New York City’s Department of Housing Preservation and Development sets the rules for residential heat. From October 1 to May 31, landlords must keep apartments at 68°F or warmer between 6 a.m. and 10 p.m. whenever it’s below 55°F outside, and at 62°F or warmer from 10 p.m. to 6 a.m. regardless of the outdoor temperature.`,
      },
      {
        p: `In many older buildings that heat comes from steam radiators the tenant can’t really adjust, so apartments often run warmer than the minimum. Warm air with no added water has low relative humidity, and that’s a big part of why so many New Yorkers wake up with dry, scratchy eyes in January. Things that help in a steam-heated apartment:`,
      },
      {
        list: [
          `A small humidifier in the bedroom, cleaned as its manual directs.`,
          `Moving the bed or desk away from the radiator if the layout allows.`,
          `Cracking a window a little when the heat overshoots, rather than sitting in the blast.`,
          `A radiator cover, which some people find softens the direct heat.`,
        ],
      },
      { h: 'NOAA’s numbers for Central Park' },
      {
        p: `The city’s official weather station is in Central Park, and NOAA’s 1991 to 2020 normals from it describe a city with real winters:`,
      },
      {
        list: [
          `About 49.5 inches of precipitation a year, spread across every month.`,
          `About 29.8 inches of snow in a normal winter, with February the snowiest at 10.1 inches.`,
          `A January that runs from about 28°F at night to 39.5°F in the afternoon.`,
          `About 67 nights at or below freezing and 16 days when the high never passes 32°F.`,
          `About 17 days a year at 90°F or hotter, with a July normal high of 84.9°F.`,
        ],
      },
      {
        p: `Humidity in the park bottoms out on April afternoons at 47 percent, with March at 50, according to NOAA’s table. Even in January the afternoon average is 56 percent outdoors, which shows how much of the winter dryness New Yorkers feel is created indoors.`,
      },
      { h: 'Wind between the buildings' },
      {
        p: `Central Park itself is one of the calmest stations in NOAA’s wind table, averaging roughly half the wind speed recorded at LaGuardia and JFK, where the airports sit open to the water. Street level in Midtown or the Financial District is another matter: tall buildings can channel gusts down avenues and around corners, and the walk from Penn Station to an office on a February morning can feel like a wind tunnel.`,
      },
      {
        p: `Wind speeds the evaporation of tears. Sunglasses help even on overcast days, and so does turning your head when a gust comes around a corner. On the Staten Island Ferry or the walkways of the Brooklyn Bridge, the open water adds more. Our guide to [dry air, wind and altitude](/guides/dry-air-wind-and-altitude) explains why moving air matters.`,
      },
      { h: 'Why do my eyes hurt on the subway?' },
      {
        p: `Subway platforms have their own weather. Arriving trains push a wall of air along the platform, carrying dust from the tunnels, and summer platforms trap heat. Then the car itself runs hard air conditioning in July and dry heat in January. A few habits that help:`,
      },
      {
        list: [
          `Stand back from the platform edge and look away from the tunnel as the train comes in.`,
          `If your eyes feel gritty after a ride, blink several times rather than rubbing.`,
          `Read in shorter stretches on a long commute and look up between stops.`,
          `Keep a bottle in a bag pocket with the cap snapped on, not loose in a coat.`,
        ],
      },
      { h: 'Screens, offices and summer air conditioning' },
      {
        p: `A lot of New York works long hours on screens, in finance, media, tech, law and design. Concentration reduces blinking, and office air conditioning dries the air through the summer. Look away from the monitor every so often, keep the screen slightly below eye level, and ask facilities to adjust a vent that blows across your desk. For multi-screen setups, see [dry eyes with multiple monitors](/guides/dry-eyes-with-multiple-monitors).`,
      },
      { h: 'Quell and its label' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and it contains no preservatives. Its Drug Facts panel lists the Uses as {uses}, and the directions say: {directions}. Read the caution before buying: {warnings}. The storage line, {storage}, matters in an apartment where the radiator shelf gets hot, so keep the bottle in a drawer across the room. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell delivered in New York' },
      {
        p: `Quell ships from Brentwood, Tennessee, to all five boroughs and the rest of New York State. Checkout works as a guest, shipping is {shipping}, and {freeBottles} or more bottles ship free. You’ll get a tracking email, though no delivery date is promised. If your building has no doorman or package room, consider shipping to your office. The [New York City page](/eye-drops/new-york-ny) and the [New York State page](/eye-drops/state/new-york) have the details.`,
      },
      { h: 'When to see a New York eye doctor' },
      {
        p: `Eye drops don’t replace an exam when symptoms keep returning. The label is specific: {stopUse} If something blew into your eye on the platform and it still hurts, or your vision has changed, get seen promptly.`,
      },
    ],
    faq: [
      {
        q: 'When is heat season in NYC?',
        a: `October 1 through May 31. During that time NYC rules require at least 68°F indoors from 6 a.m. to 10 p.m. when it’s below 55°F outside, and at least 62°F from 10 p.m. to 6 a.m.`,
      },
      {
        q: 'Why are NYC apartments so dry in the winter?',
        a: `Steam radiators and other heating warm the air without adding water, which lowers its relative humidity. Many older buildings run warmer than the legal minimum, so the air dries further.`,
      },
      {
        q: 'How much snow does New York City get a year?',
        a: `About 29.8 inches in Central Park in a normal winter, according to NOAA’s 1991 to 2020 normals, with February the snowiest month.`,
      },
      {
        q: 'Can I get Quell delivered in NYC?',
        a: `Yes. Quell ships to all five boroughs from Brentwood, Tennessee, with guest checkout and tracking by email. No delivery date is promised, so order ahead.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-15 for dry-eye-relief-portland-me:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014764.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00014764.csv
   *   (PORTLAND INTL JETPORT, ME, elev 13.7 m: annual precip 48.12 in; Oct 5.25
   *   wettest; annual snow 68.7 in, Jan 18.6, Feb 16.6, Dec 14.6, Mar 13.6,
   *   Nov 2.3, Apr 2.8; Jan high 32.4 F, low 15.6; Jul high 79.5, low 61.2;
   *   144.1 nights at or below 32 F; 40.7 days with a high at or below 32 F;
   *   6.7 nights at or below 0 F; 5.1 days at or above 90 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (PORTLAND, ME, WBAN 14764, morning/afternoon: Jan 75/59, Apr 71/54,
   *   Sep 84/61, annual 78/59)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (PORTLAND, ME: Mar 4.2 highest, Jul and Aug 3.0 lowest. Compared only.)
   * 13.7 m converted is about 45 ft.
   */
  {
    slug: 'dry-eye-relief-portland-me',
    title: 'Dry eye relief in Portland, Maine',
    description:
      'Portland, Maine, averages 144 freezing nights a year, so the heat runs October to April. NOAA’s numbers and dry eye relief for a long coastal winter.',
    category: 'local',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Dry eye relief in Portland, Maine, is mostly about the heating season. Outdoor air off Casco Bay stays fairly humid all year, but NOAA counts about 144 freezing nights at the Jetport, so furnaces, boilers and wood stoves dry indoor air for half the year. Humidify where you sleep, sit back from the stove, wear sunglasses in the wind and use a lubricating drop as labeled. Pain or vision changes need an eye doctor.`,
      },
      { h: 'A humid coast with a very long winter' },
      {
        p: `Portland International Jetport, about 45 feet above sea level on the edge of the Fore River, is the city’s official station. NOAA’s 1991 to 2020 normals show a climate that is damp and cold rather than dry:`,
      },
      {
        list: [
          `About 48.1 inches of precipitation a year, with October the wettest month at 5.25 inches.`,
          `About 68.7 inches of snow in a normal winter. January brings 18.6 inches, February 16.6, December 14.6 and March 13.6.`,
          `A January that runs from about 16°F before dawn to a 32.4°F high.`,
          `Nearly 41 days a year when the temperature never climbs above freezing, and close to 7 nights at or below zero.`,
          `Only about 5 days a year at 90°F or hotter.`,
        ],
      },
      {
        p: `NOAA’s humidity table backs up the damp reputation. Portland’s afternoon humidity averages 59 percent across the year, and even its driest month, April, averages 54 percent in the afternoon. September mornings reach 84 percent.`,
      },
      { h: 'Why do my eyes get so dry in a Maine winter?' },
      {
        p: `Because the air you breathe for most of the winter isn’t outdoor air. With frost on about 144 nights a year and snow on the ground for long stretches, Portland homes heat from fall into spring. Heating cold air without adding water lowers its relative humidity, so a living room warmed by a wood stove, a pellet stove or a forced-air furnace can feel far drier than the snowy street outside.`,
      },
      {
        p: `Some practical changes for a long heating season:`,
      },
      {
        list: [
          `Run a humidifier in the bedroom, and clean it as the manual says so it doesn’t grow anything.`,
          `Sit several feet from a wood or pellet stove, and not directly in the path of its fan.`,
          `Close or redirect floor registers that blow toward a bed, desk or reading chair.`,
          `Set the car heat to the floor and windshield, not the face vents, on a cold morning commute.`,
          `Take a few minutes outside on milder days; the outdoor air is often gentler on the eyes than the house.`,
        ],
      },
      {
        p: `Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more ideas, and [fireplaces, candles and dry eyes](/guides/fireplaces-candles-and-dry-eyes) covers open flames and stoves.`,
      },
      { h: 'Wind off Casco Bay' },
      {
        p: `NOAA’s wind table for Portland peaks in March and is calmest in July and August. A March walk along the Eastern Promenade, a ride on an island ferry, or an afternoon at the lighthouses in Cape Elizabeth can mean steady, cold wind straight off the water. Wind pulls moisture from the tear film, and cold wind often makes eyes water as a reflex.`,
      },
      {
        list: [
          `Wraparound sunglasses help on the ferry deck, even on gray days.`,
          `A hat with a brim and a scarf pulled up cut how much wind reaches your face.`,
          `Turn your back to the gusts while you wait on the dock.`,
          `If you work on the water, ask your eye doctor about protective eyewear that suits the job.`,
        ],
      },
      { h: 'Snow days and storms' },
      {
        p: `A nor’easter brings blowing snow, and shoveling or snowblowing puts fine ice crystals and cold wind in your face for an hour or more. Goggles or wraparound glasses make a real difference. Sun on fresh snow adds glare too, which makes people squint and blink less. Our guide on [dry eyes when shoveling snow](/guides/dry-eyes-when-shoveling-snow) covers the details.`,
      },
      { h: 'Summer in Portland' },
      {
        p: `Summers are mild and comfortable, with a normal July high of 79.5°F. Outdoor air rarely feels dry, but air-conditioned offices, long drives up Route 1 with the vents blowing and days on the water in bright sun can still leave eyes uncomfortable. Point vents away from your face and keep sunglasses in the car.`,
      },
      { h: 'About Quell' },
      {
        p: `Quell is a preservative-free lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label states the Uses as {uses}, with these directions: {directions}. The label also cautions: {warnings}.`,
      },
      {
        p: `Storage matters in Maine. The label says: {storage}. A bottle left in a car at the Jetport parking lot in January can drop well below that range, so bring it in with you. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Portland, Maine' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Portland, South Portland, Westbrook, the islands and the rest of Maine. Guest checkout means no account, shipping is {shipping}, and {freeBottles} or more bottles ship free. A tracking email follows; no delivery date is promised, and winter storms can slow any package, so order before you run low. The [Portland, Maine page](/eye-drops/portland-me) and the [Maine page](/eye-drops/state/maine) have more.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Seasonal dryness is common, but eyes that keep bothering you deserve an exam. The label says: {stopUse} If an eye hurts, something got into it while you were clearing snow, or your sight changes, see a doctor promptly.`,
      },
    ],
    faq: [
      {
        q: 'How much snow does Portland, Maine get a year?',
        a: `NOAA’s 1991 to 2020 normals give Portland International Jetport about 68.7 inches of snow in a typical winter, with January the snowiest month at 18.6 inches.`,
      },
      {
        q: 'Is Portland, Maine humid?',
        a: `Fairly, outdoors. NOAA’s table puts the Jetport’s average afternoon humidity at 59 percent, and September mornings near 84 percent. Indoor air in the heating season is a different story.`,
      },
      {
        q: 'How cold does Portland, Maine get in January?',
        a: `January’s normal low at the Jetport is about 15.6°F and the normal high 32.4°F, and the station averages nearly 7 nights a year at or below zero.`,
      },
      {
        q: 'Does Quell ship to Maine?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Portland and anywhere else in Maine, with guest checkout and a tracking email. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-15 for dry-eye-relief-boise-id:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00024131.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00024131.csv
   *   (BOISE AIR TERMINAL, ID, elev 857.7 m: annual precip 11.51 in; Jul 0.21,
   *   Aug 0.17; Jun-Aug 1.13 in; Dec 1.54 wettest; annual snow 17.6 in, Dec 5.6,
   *   Jan 5.3; Jul high 92.7 F, low 61.9; Jan high 38.8, low 25.5; 54.9 days at
   *   or above 90 F; 9.1 days at or above 100 F; 108.2 nights at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (BOISE, ID, WBAN 24131, morning/afternoon: Jun 60/28, Jul 49/20,
   *   Aug 47/22, Sep 53/28, Dec 79/70, Jan 79/70, annual 64/42)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (BOISE: Apr 4.0 highest, Jan 2.9 lowest. Compared only.)
   * 857.7 m converted is about 2,814 ft. Smoke left out: no official source
   * checked today.
   */
  {
    slug: 'dry-eye-relief-boise-id',
    title: 'Dry eye relief in Boise, Idaho',
    description:
      'Boise’s July afternoons average 20 percent humidity, with barely a fifth of an inch of rain. NOAA’s numbers and dry eye relief for the Treasure Valley.',
    category: 'local',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Dry eye relief in Boise is mainly a summer project. NOAA’s records put July afternoon humidity at about 20 percent, with almost no rain from June through August, and the city sits near 2,800 feet. Wear sunglasses outdoors, do hard outdoor work in the morning, keep car and home vents off your face and use a lubricating drop as directed. See an eye doctor for pain, vision changes or dryness that persists.`,
      },
      { h: 'How dry is Boise?' },
      {
        p: `Very dry for half the year. Boise’s official weather station is at the airport south of downtown, about 2,814 feet above sea level, and NOAA’s 1991 to 2020 climate normals record:`,
      },
      {
        list: [
          `About 11.5 inches of precipitation in a normal year, roughly a quarter of what falls in many East Coast cities.`,
          `July averages 0.21 inches and August 0.17, and the three summer months together just over an inch.`,
          `December is the wettest month, at 1.54 inches.`,
          `About 17.6 inches of snow a year, most of it in December and January.`,
        ],
      },
      { h: 'Summer afternoons near 20 percent' },
      {
        p: `NOAA’s relative humidity table for Boise shows the dry season clearly. July afternoons average 20 percent, August 22, and June and September 28. Mornings are about double that, near 49 percent in July. Add a normal July high of 92.7°F, about 55 days a year at 90°F or above and roughly 9 days at 100°F or more, and the air pulls water from the eye’s surface quickly.`,
      },
      {
        p: `That’s why eyes can feel fine on an early run along the Boise River Greenbelt and gritty by the afternoon commute. Ways to adjust in summer:`,
      },
      {
        list: [
          `Get yard work, foothills hikes and long rides done in the morning, when humidity is higher and it’s cooler.`,
          `Wear wraparound sunglasses on the Ridge to Rivers trails, where wind and dust add up on exposed ridgelines.`,
          `Take sunglasses when floating the river; glare off moving water keeps you squinting for hours.`,
          `Point car vents at your chest, and use recirculate on dusty roads.`,
          `At a desk, take regular screen breaks, since air-conditioned air is drier still.`,
        ],
      },
      { h: 'Big daily swings at elevation' },
      {
        p: `Dry air and clear skies let Boise cool sharply at night. A normal July day runs from about 62°F at dawn to nearly 93°F in the afternoon. In practice that means windows open at night and air conditioning by day in many homes, with the air drying out at both ends. A fan blowing across the bed through a summer night is a common source of dry eyes in the morning. Aim it at your feet or the wall instead.`,
      },
      { h: 'Winter: damp outside, heated inside' },
      {
        p: `Winter turns the humidity around. December and January afternoons average 70 percent in NOAA’s table, and the Treasure Valley often sits under gray, cold air. Still, Boise records about 108 nights a year at or below freezing and a normal January high of 38.8°F, so the furnace runs for months. Heated indoor air has low relative humidity even when it’s damp outside.`,
      },
      {
        p: `Skiing at Bogus Basin adds cold wind and glare from the snow. Goggles seal out wind better than sunglasses on the lift. At home, a humidifier in the bedroom and keeping a space heater a few feet away both help. See our guide on [dry air, wind and altitude](/guides/dry-air-wind-and-altitude) for more on why elevation and dry air add up.`,
      },
      { h: 'Spring wind' },
      {
        p: `NOAA’s wind table shows Boise’s breeziest month is April and its calmest is January. Spring winds across the valley pick up dust from fields and construction sites, and they arrive just as afternoon humidity starts falling, from 43 percent in March to 36 percent in April. Glasses outdoors and a brim on your hat help on the windiest days.`,
      },
      { h: 'What Quell is and how to use it' },
      {
        p: `Quell is a preservative-free lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the same moisture loss a 20 percent July afternoon speeds up. Its Drug Facts label states it’s {uses}. Directions: {directions}. Always: {tip}. And before your first order, read the caution: {warnings}.`,
      },
      {
        p: `A Boise car in July is the main storage hazard. The label says: {storage}. A dashboard in the airport parking lot will run far hotter, so keep the bottle in a bag that comes inside. The full label is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering to Boise' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Boise, Meridian, Nampa, Eagle and the rest of Idaho. Checkout is guest-only and quick, shipping is {shipping}, and {freeBottles} or more bottles ship free. You’ll get a tracking email; no delivery date is promised, so order before the bottle is nearly empty. In summer, bring a delivered package inside rather than letting it sit on a hot porch. See the [Boise page](/eye-drops/boise-city-id) and the [Idaho page](/eye-drops/state/idaho).`,
      },
      { h: 'When drops aren’t the answer' },
      {
        p: `Drops are for everyday dryness. Eyes that ache, blur or stay irritated need a professional to work out the cause. The label sets the limit: {stopUse} Dust or grit that won’t rinse out with blinking, or an injury on the trail, is a reason to get seen.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Boise?',
        a: `Boise is semi-arid. NOAA’s data shows about 11.5 inches of precipitation a year, and July afternoons averaging 20 percent humidity. Dry, warm air speeds the evaporation of tears.`,
      },
      {
        q: 'What is the humidity in Boise in the summer?',
        a: `NOAA’s relative humidity table gives Boise July afternoons an average of 20 percent and August 22 percent, with mornings around 47 to 49 percent.`,
      },
      {
        q: 'What is the elevation of Boise, Idaho?',
        a: `Boise’s airport weather station sits at about 857.7 meters, roughly 2,814 feet above sea level, according to NOAA’s station record.`,
      },
      {
        q: 'Does Quell ship to Boise?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Boise and the rest of Idaho, with guest checkout and a tracking email. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-15 for dry-eye-relief-tulsa-ok:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013968.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013968.csv
   *   (TULSA INTL AP, OK, elev 198.1 m: annual precip 40.96 in; May 5.73
   *   wettest, Jan 1.63, Feb 1.62 driest; Dec-Feb 5.68 in; annual snow 8.7 in;
   *   Jul high 93.6 F, low 73.1; Aug high 93.0; Jan high 48.9, low 28.0;
   *   73.9 days at or above 90 F; 10.8 days at or above 100 F; 71.9 nights at
   *   or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (TULSA, OK, WBAN 13968, morning/afternoon: Mar 76/53, Apr 78/52,
   *   May 85/58, Jun 85/58, Aug 83/53, Sep 85/55, Jan 78/60, annual 81/56)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (TULSA: Apr 4.9 highest, Mar 4.8, Aug 3.5 lowest, annual 4.2.
   *   Compared only.)
   * 198.1 m converted is about 650 ft.
   */
  {
    slug: 'dry-eye-relief-tulsa-ok',
    title: 'Dry eye relief in Tulsa, Oklahoma',
    description:
      'Tulsa logs about 74 days a year at 90°F or hotter and a gusty spring. What NOAA’s numbers mean for dry eyes in Green Country, and what helps through the year.',
    category: 'local',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Dry eye relief in Tulsa means getting through two hard stretches: windy March and April afternoons, and a long summer of air conditioning, with NOAA counting about 74 days a year at 90°F or above. Wear sunglasses on breezy days, keep car and ceiling vents off your face, blink deliberately during screen time and use a lubricating drop as labeled. Eye pain or changes in vision need an eye doctor.`,
      },
      { h: 'Tulsa weather, according to NOAA' },
      {
        p: `Tulsa International Airport, about 650 feet above sea level on the city’s northeast side, is the official station. The 1991 to 2020 climate normals:`,
      },
      {
        list: [
          `About 41 inches of precipitation a year, peaking in May at 5.73 inches.`,
          `January and February are the driest months, at about 1.6 inches each; the three winter months together total only 5.68.`,
          `About 8.7 inches of snow in a normal winter.`,
          `A July that runs from 73°F at dawn to 93.6°F in the afternoon, with August nearly as hot.`,
          `About 74 days a year at 90°F or above and nearly 11 at 100°F or above.`,
          `About 72 nights at or below freezing.`,
        ],
      },
      { h: 'Why are my eyes so dry in the spring in Tulsa?' },
      {
        p: `Spring is Tulsa’s windiest season. NOAA’s wind table for the airport peaks in April, with March close behind, and drops to its calmest in August. Those months also have the lowest afternoon humidity of the year: 52 percent in April and 53 in March, compared with mornings in the mid to upper 70s.`,
      },
      {
        p: `Wind across the eye carries off moisture faster, and gusts carry dust and pollen from open ground. A walk along the river trails, a round of golf or a Saturday at an outdoor festival can leave eyes gritty by evening. Practical steps:`,
      },
      {
        list: [
          `Wear wraparound sunglasses on windy days, even when it’s cloudy.`,
          `Rinse off and change clothes after yard work so dust doesn’t follow you to the couch.`,
          `Keep car windows up and use recirculate on gusty days.`,
          `Blink fully and look away from your phone during long stretches outdoors.`,
        ],
      },
      { h: 'Summer: 74 days of 90-degree heat' },
      {
        p: `Tulsa summers are hot and often humid outdoors; May, June and September mornings average 85 percent humidity. The dryness most people feel comes from the air conditioning that runs from May to September. With July nights staying near 73°F, units in homes, offices and cars rarely get a rest.`,
      },
      {
        list: [
          `Aim car vents at your chest, never at your face, on drives along the Broken Arrow Expressway or I-44.`,
          `Turn off or slow a ceiling fan that blows across your bed all night.`,
          `Move a desk out of the stream from an overhead vent.`,
          `At a summer evening game downtown, bring sunglasses for the low sun and glare.`,
        ],
      },
      {
        p: `Sitting by the Arkansas River or at the Gathering Place on a breezy day is lovely, but the combination of sun, wind and screen time can dry eyes fast. Our guide on [whether dry eyes are worse in summer or winter](/guides/are-dry-eyes-worse-in-summer-or-winter) compares the two seasons.`,
      },
      { h: 'Dry winters, heated homes' },
      {
        p: `Tulsa winters are short and fairly dry, with less than six inches of precipitation from December through February. January’s normal high is 48.9°F and the low 28°F, so furnaces and heat pumps run most nights. Warmed indoor air loses relative humidity, and January afternoons average 60 percent outdoors before the heat goes on. A bedroom humidifier and a little distance from heat registers can make winter evenings more comfortable.`,
      },
      { h: 'Using Quell' },
      {
        p: `Quell is a preservative-free lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives the Uses as {uses}. Directions: {directions}. The label also cautions: {warnings}.`,
      },
      {
        p: `Heat is the storage issue in Tulsa. The label reads: {storage}. A car in a summer parking lot can climb far past that (see [eye drops in a hot car](/guides/eye-drops-in-a-hot-car)), so carry the bottle in a bag or purse that comes inside with you. See the whole panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Tulsa' },
      {
        p: `We ship from Brentwood, Tennessee, to Tulsa, Broken Arrow, Owasso, Jenks, Bixby and the rest of Oklahoma. Guest checkout means no account, shipping runs {shipping}, and orders of {freeBottles} or more bottles ship free. A tracking email follows; no delivery date is promised, so order before you run out. In summer, bring delivered packages in promptly. The [Tulsa page](/eye-drops/tulsa-ok) and the [Oklahoma page](/eye-drops/state/oklahoma) have more.`,
      },
      { h: 'When to see an eye doctor in Tulsa' },
      {
        p: `If dryness keeps coming back or gets worse, an eye doctor can work out the cause and what to do about it. The label is clear about stopping: {stopUse} Dust that won’t rinse out with blinking, an eye injury or a sudden change in vision need prompt care.`,
      },
    ],
    faq: [
      {
        q: 'What is the windiest month in Tulsa?',
        a: `April, according to NOAA’s average wind speed table for Tulsa International Airport, with March close behind. August is the calmest month.`,
      },
      {
        q: 'How many 100 degree days does Tulsa get?',
        a: `NOAA’s 1991 to 2020 normals give Tulsa International Airport nearly 11 days a year at 100°F or above, and about 74 days at 90°F or above.`,
      },
      {
        q: 'Why do my eyes burn in Oklahoma wind?',
        a: `Wind speeds the evaporation of the tear film and can blow dust and pollen into the eyes. Wraparound sunglasses and staying out of the gusts help.`,
      },
      {
        q: 'Can I order Quell to Tulsa, OK?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Tulsa and anywhere in Oklahoma, with guest checkout and tracking by email. No delivery date is promised.`,
      },
    ],
  },
  /*
   * IRS source checked 2026-11-15 for how-to-pay-less-for-eye-drops:
   * https://www.irs.gov/newsroom/irs-outlines-changes-to-health-care-spending-available-under-cares-act
   * ("over-the-counter products and medications are now reimbursable without a
   * prescription"; applies to HSAs, Archer MSAs, health FSAs and HRAs; amounts
   * paid after Dec. 31, 2019).
   */
  {
    slug: 'how-to-pay-less-for-eye-drops',
    title: 'How to pay less for eye drops',
    description:
      'No coupon needed: order {freeBottles} bottles at once to skip {shipping} shipping, pay with HSA or FSA money, and waste fewer drops. Honest ways to spend less.',
    category: 'ordering',
    addedOn: '2026-11-15',
    body: [
      {
        p: `The most reliable ways to pay less for eye drops are to order fewer, larger shipments, pay with pre-tax HSA or FSA money, and avoid wasting drops. Quell has no coupons or promo codes, but an order of {freeBottles} or more bottles reaches the {freeThreshold} free-shipping line, skipping the {shipping} charge, and the IRS lets HSA and FSA funds cover over-the-counter medicines without a prescription.`,
      },
      { h: 'Are there coupons for eye drops?' },
      {
        p: `Not for Quell. There are no promo codes, coupon fields or first-order discounts, and the price you see on the [home page](/#buy) is the price everyone pays. That also means you don’t need to hunt for a code before checking out, or worry that someone else paid less for the same bottle. [Are there Quell coupons or promo codes?](/guides/quell-coupons-and-promo-codes) explains why the site works this way.`,
      },
      {
        p: `If a website you’ve never heard of offers a steep discount on a product sold elsewhere for much more, be careful. Our guide to [spotting a fake eye drop website](/guides/how-to-spot-a-fake-eye-drop-website) lists the warning signs.`,
      },
      { h: 'Use the free shipping rule' },
      {
        p: `Shipping is the one cost you have real control over. Here is how it works at checkout:`,
      },
      {
        list: [
          `An order with a subtotal below {freeThreshold} pays a flat {shipping} for shipping.`,
          `That charge is per order, not per bottle, so two bottles in one order pay it once.`,
          `At {freeThreshold} or more, which {freeBottles} bottles reach, shipping is free.`,
          `The cart shows how much more you’d need to qualify before you pay.`,
        ],
      },
      {
        p: `The difference adds up over a year. Someone who orders a single bottle every time they run low pays shipping on every order. Someone who orders {freeBottles} at a time pays none. [What the saving in your cart means](/guides/what-the-cart-saving-means) shows how the cart presents that comparison.`,
      },
      { h: 'Combine orders instead of splitting them' },
      {
        p: `If two people in the same household both use Quell, one order of {freeBottles} or more to a single address costs less than two small orders. The same goes for a couple of coworkers who keep a bottle at their desks, or a parent who orders for themselves and a grown child at home. Each person should still have their own bottle, because the label’s handling line applies to every user: {tip}.`,
      },
      {
        p: `There’s no subscription to sign up for, and no auto-ship discount; you decide when to order. The site sends one reorder reminder email, which can help you combine a refill with someone else’s instead of placing a rushed single-bottle order later.`,
      },
      { h: 'Pay with HSA or FSA money' },
      {
        p: `Paying with money that was set aside before income tax is a real saving, even though the price doesn’t change. The IRS’s guidance on the CARES Act says over-the-counter medicines and products are reimbursable from HSAs, health FSAs and HRAs without a prescription, for amounts paid after December 31, 2019. Over-the-counter eye drops fall under that rule.`,
      },
      {
        list: [
          `How much you save depends on your own tax situation, which a tax professional or your plan administrator can explain.`,
          `Some HSA and FSA cards work at online checkouts and some don’t; the site can’t confirm yours in advance.`,
          `If the card doesn’t go through, you can pay another way and submit the receipt for reimbursement if your plan allows it.`,
          `Health FSAs often have a deadline to spend the money, so unused funds near the end of the plan year can go toward eye drops you’ll use.`,
        ],
      },
      {
        p: `Our guides to [HSA and FSA funds for eye drops](/guides/hsa-fsa-and-eye-drops) and [spending FSA money before year end](/guides/spending-fsa-money-before-year-end) go further.`,
      },
      { h: 'Order what you’ll use before it expires' },
      {
        p: `Buying a big supply only saves money if you use it. Each bottle has an expiration date printed on the bottle and carton, and you shouldn’t use drops past it. Before stocking up, think about how quickly you go through a bottle following the label’s directions, and order an amount you’ll finish well before the dates on the boxes.`,
      },
      {
        p: `If you over-order, the policy helps: {returns}. An unopened bottle can be refunded within {returnDays} days of delivery, so a bottle you realize you won’t need doesn’t have to be a loss. [How many bottles should I order?](/guides/how-many-bottles-to-order) can help you pick a number.`,
      },
      { h: 'Don’t waste drops' },
      {
        p: `A drop that runs down your cheek is a drop you paid for. The directions on the label are: {directions}. Getting each drop into the eye on the first try makes a bottle go as far as it’s meant to:`,
      },
      {
        list: [
          `Wash your hands, tilt your head back and look up.`,
          `Gently pull down your lower lid to make a small pocket.`,
          `Hold the bottle close but don’t let the tip touch your eye or lashes.`,
          `Squeeze gently for one drop, then close your eye for a moment rather than blinking hard.`,
          `If you miss often, try lying down or using a mirror.`,
        ],
      },
      {
        p: `Using more drops than the label directs doesn’t stretch your money or help you more; it just empties the bottle sooner. Our guide on [how to use eye drops as directed](/guides/how-to-use-eye-drops-as-directed) walks through the technique.`,
      },
      { h: 'Don’t lose a bottle to storage or handling' },
      {
        p: `A bottle that gets contaminated or cooked has to be replaced, which is the most expensive outcome of all. The label’s storage line reads: {storage}. That rules out a hot glove box in summer or a car left out through a freezing night. The label also says: {doNotUse}. Knowing what normal looks like keeps you from throwing out a good bottle: {milky}. And if the tip touches anything, the safer choice is a fresh bottle.`,
      },
      { h: 'Damaged orders are replaced' },
      {
        p: `If a bottle arrives damaged, the wrong item comes, or the tamper seal is broken, don’t buy another one. Damaged, incorrect and broken-seal orders are replaced. Contact {company} at {phone} ({hours}) or through the [contact page](/about#contact), and keep the packaging until it’s sorted.`,
      },
    ],
    faq: [
      {
        q: 'How can I get eye drops cheaper?',
        a: `Order enough at once to qualify for free shipping, pay with HSA or FSA money if you have it, and use the drops exactly as directed so none are wasted. Quell has no coupon codes.`,
      },
      {
        q: 'How many bottles of Quell ship free?',
        a: `Orders of {freeBottles} or more bottles reach the {freeThreshold} free-shipping threshold. Smaller orders pay a flat {shipping} per order.`,
      },
      {
        q: 'Does using an FSA actually save money on eye drops?',
        a: `Yes, in the sense that FSA money is set aside before income tax, so you aren’t paying for the drops with taxed income. The size of the saving depends on your own tax situation.`,
      },
      {
        q: 'Is there a discount for subscribing to eye drops?',
        a: `Quell has no subscription and no auto-ship discount. You order when you need to, and the site sends one reorder reminder email.`,
      },
    ],
  },
  /*
   * Sources checked 2026-11-15 for does-medicare-cover-over-the-counter-eye-drops:
   * - https://www.medicare.gov/coverage/prescription-drugs-outpatient (Part B
   *   covers a limited set of outpatient drugs, such as most injectable and
   *   infused drugs a licensed provider gives; Part D may cover drugs Part B
   *   doesn't)
   * - https://www.medicare.gov/publications/10050-medicare-and-you.pdf
   *   (Medicare & You 2027: Medicare Advantage plans "may also cover things
   *   like rides to doctor visits, over-the-counter drugs Part D doesn't
   *   cover"; "These benefits are generally limited, so check with the plan";
   *   Part B doesn't cover "self-administered drugs" in a hospital outpatient
   *   setting)
   * - https://www.medicare.gov/publications/11109-your-guide-to-medicare-prescription-drug-coverage.pdf
   *   (Part D helps pay for brand-name and generic drugs; offered by private
   *   companies approved by Medicare; Original Medicare is Part A and Part B)
   * - https://www.medicare.gov/publications/12026-understanding-medicare-advantage-plans.pdf
   *   (plans include Part A, Part B and usually Part D; may offer extra
   *   benefits Original Medicare doesn't)
   * - https://www.irs.gov/publications/p969 ("Beginning with the first month
   *   you are enrolled in Medicare, your contribution limit is zero"; a
   *   distribution may be taken at any time, tax free if used for qualified
   *   medical expenses)
   * - IRS CARES Act page as cited above (OTC medicines reimbursable without
   *   a prescription after Dec. 31, 2019).
   */
  {
    slug: 'does-medicare-cover-over-the-counter-eye-drops',
    title: 'Does Medicare cover over-the-counter eye drops?',
    description:
      'Usually not: Part B and Part D don’t pay for drops bought off the shelf. Some Medicare Advantage plans offer an OTC benefit, though. What to ask your plan.',
    category: 'ordering',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Generally, no. Original Medicare (Parts A and B) doesn’t pay for eye drops you buy off the shelf, and Medicare’s own handbook describes over-the-counter drugs as something Part D doesn’t cover. The exception is some Medicare Advantage plans, which offer an over-the-counter benefit that varies by plan. Call your plan to find out what yours includes and where you can use it.`,
      },
      { h: 'Does Medicare cover over-the-counter drugs?' },
      {
        p: `Medicare has several parts, and none of the standard ones is built to pay for products you pick up without a prescription:`,
      },
      {
        list: [
          `Part A is hospital insurance. The handbook lists certain drugs among the services it covers during an inpatient stay, which is a different thing from products you buy for home.`,
          `Part B is medical insurance. Medicare.gov says it covers a limited set of outpatient drugs, mainly ones a provider gives you, such as most injectable and infused drugs given by a licensed provider.`,
          `Part D is drug coverage offered by private companies approved by Medicare. It helps pay for brand-name and generic prescription drugs on a plan’s drug list.`,
        ],
      },
      {
        p: `The official Medicare & You 2027 handbook, published on medicare.gov, mentions over-the-counter drugs in exactly this light: it lists “over-the-counter drugs Part D doesn’t cover” among the extras some Medicare Advantage plans may add.`,
      },
      { h: 'Does Medicare cover eye drops for dry eyes?' },
      {
        p: `If your eye doctor prescribes a drop, it may fall under your Part D plan, depending on that plan’s drug list and rules. An over-the-counter lubricating drop like Quell is different. It’s sold without a prescription, so Original Medicare and Part D generally won’t pay for it, whether you buy it at a pharmacy counter or online.`,
      },
      {
        p: `For prescription drops, ask your eye doctor and your Part D plan; this guide only covers the over-the-counter side. Our guide to [whether you need a prescription for eye drops](/guides/do-you-need-a-prescription-for-eye-drops) explains the difference between the two kinds.`,
      },
      { h: 'Medicare Advantage OTC benefits' },
      {
        p: `Medicare Advantage plans, sometimes called Part C, are offered by private companies that contract with Medicare. They include Part A and Part B and usually Part D, and medicare.gov notes they may offer extra benefits Original Medicare doesn’t. An over-the-counter benefit is one of the extras some of them add.`,
      },
      {
        p: `These benefits vary a great deal. The Medicare & You handbook calls them generally limited and tells readers to check with the plan. Questions worth asking your plan:`,
      },
      {
        list: [
          `Does my plan include an over-the-counter benefit this year?`,
          `Are lubricating eye drops on the list of eligible items?`,
          `How much is the allowance, and does it reset monthly or quarterly?`,
          `Do unused amounts carry over, or do they expire?`,
          `Where can I use it: specific stores, a mail-order catalog, or any online shop?`,
          `Can I be reimbursed for an eligible item I paid for myself?`,
        ],
      },
      {
        p: `The handbook also points Medicare Advantage members to two documents their plan sends each fall: the Annual Notice of Change, which lists changes for the coming year, and the Evidence of Coverage, which details what the plan covers and what you pay.`,
      },
      { h: 'Can I use a Medicare OTC card to buy Quell?' },
      {
        p: `Quell can’t tell you that, and doesn’t claim to be covered or accepted by any Medicare plan. Checkout is a card payment on the payment processor’s secure page, and there’s no step that bills Medicare or a plan. Whether a plan’s card is accepted depends on the card and the plan’s rules, so ask your plan before you order. If it isn’t accepted, you can pay another way.`,
      },
      { h: 'Using HSA money after you enroll in Medicare' },
      {
        p: `People who built up a health savings account before Medicare can still use it. IRS Publication 969 says that beginning with the first month you’re enrolled in Medicare, your HSA contribution limit is zero, so you can’t add new money. But you can take distributions at any time, and they’re tax free when used for qualified medical expenses.`,
      },
      {
        p: `Since the CARES Act, the IRS says over-the-counter medicines are reimbursable from HSAs without a prescription, for amounts paid after December 31, 2019. That means existing HSA money can pay for over-the-counter eye drops. Our guide on [why OTC eye drops count for HSA and FSA](/guides/why-otc-eye-drops-count-for-hsa-and-fsa) explains the rule in more detail, and your HSA administrator can answer questions about your account.`,
      },
      { h: 'Paying for Quell yourself' },
      {
        p: `If you’re paying out of pocket, a few things keep the cost down. Orders of {freeBottles} or more bottles ship free, while smaller orders pay {shipping}. There’s no account to create, and checkout works as a guest. Buyers must be 18 or older, and orders ship only within the United States. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. More ideas are in [how to pay less for eye drops](/guides/how-to-pay-less-for-eye-drops).`,
      },
      { h: 'Before you buy any eye drop' },
      {
        p: `Whoever pays, read the label first. Quell’s Uses: {uses}. Its caution: {warnings}. If you use prescription drops or have an eye condition your doctor is managing, ask them before adding an over-the-counter drop; the label doesn’t cover combining drops. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Does Medicare cover over-the-counter drugs?',
        a: `Generally not. Original Medicare doesn’t pay for products bought off the shelf, and Medicare’s handbook refers to over-the-counter drugs as something Part D doesn’t cover. Some Medicare Advantage plans offer an OTC benefit.`,
      },
      {
        q: 'Does Medicare Advantage cover over-the-counter drugs?',
        a: `Some plans offer an over-the-counter benefit, but it varies by plan and Medicare describes these extras as generally limited. Check your plan’s Evidence of Coverage or call member services.`,
      },
      {
        q: 'Are eye drops covered by Medicare Part D?',
        a: `Prescription eye drops can be, depending on the plan’s drug list. Over-the-counter drops sold without a prescription generally aren’t covered by Part D.`,
      },
      {
        q: 'Can I use my HSA after I go on Medicare?',
        a: `Yes, for spending. IRS Publication 969 says your contribution limit drops to zero once you enroll in Medicare, but you can still take tax-free distributions for qualified medical expenses, which include OTC medicines.`,
      },
      {
        q: 'Is Quell covered by Medicare?',
        a: `Quell doesn’t claim to be covered by Medicare or any Medicare plan. It’s an over-the-counter product; if you have a Medicare Advantage OTC benefit, ask your plan whether it can be used.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-while-christmas-shopping',
    title: 'Dry eyes while Christmas shopping',
    description:
      'Heated malls, icy parking lots and hours on your phone comparing prices all dry the eyes. How to get through a holiday shopping day more comfortably.',
    category: 'seasonal',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Christmas shopping dries the eyes because a single trip stacks up several things that speed tear evaporation: heated stores, cold wind in the parking lot, stuffy crowded aisles, and long stretches looking at a phone, which slows blinking. Take your coat off indoors, wear sunglasses outside, look up from the screen often, keep your bottle in your bag rather than the car, and use a lubricating drop as its label directs.`,
      },
      { h: 'Why do my eyes feel dry after shopping?' },
      {
        p: `Your eyes stay comfortable thanks to the tear film, a thin layer of oil, water and mucus that each blink spreads across the surface. Anything that makes that layer evaporate faster, or makes you blink less, leaves the eye feeling gritty, scratchy or tired. A December shopping day manages both at once:`,
      },
      {
        list: [
          `Stores and malls heat the air, which lowers its relative humidity.`,
          `The walk across a parking lot puts cold wind on your face.`,
          `Concentrating on price tags, lists and a phone screen cuts down on blinking.`,
          `Hours on your feet with a heavy coat on leave you warm and flushed in dry air.`,
        ],
      },
      {
        p: `None of these is a problem on its own for most people. It’s the hours, and the back-and-forth between them, that add up by the time you get home.`,
      },
      { h: 'Heated malls and big-box stores' },
      {
        p: `Many stores blow warm air across the entrance to keep the cold out, and that blast lands right at face height as you walk in. Inside, the heat is set for people in shirtsleeves, not for shoppers in parkas. A few changes help:`,
      },
      {
        list: [
          `Take off your coat, or at least open it and pull off the hat, once you’re inside.`,
          `Don’t linger right inside the doors under the heater; move into the store.`,
          `Pick a food court table away from ceiling vents if you stop for lunch.`,
          `Drink some water during the day; long shopping trips make it easy to forget.`,
        ],
      },
      { h: 'Cold parking lots and wind' },
      {
        p: `December parking lots are wide, open and often windy, and a walk from the far end of the lot to the doors can leave your eyes stinging. Cold wind dries the surface of the eye and often makes it water as a reflex, which is why eyes can feel dry and teary on the same trip. Sunglasses, even on gray days, break the wind. Once you’re back in the car, set the heater to the windshield and floor rather than the face vents. Our guide to [dry eyes when driving in winter](/guides/dry-eyes-when-driving-in-winter) has more on the car side.`,
      },
      { h: 'Phone screens: lists, apps and price checks' },
      {
        p: `Holiday shopping now happens partly on a phone, even in a store: checking lists, scanning for reviews, comparing prices, finding the store map, texting a family member a photo of two sweaters. When you focus on a small screen, you blink less often and less completely, so the tear film thins between blinks.`,
      },
      {
        list: [
          `Look up from your phone between aisles and blink fully a few times.`,
          `Write the list on paper, or settle it at home, so you’re not scrolling in the store.`,
          `Turn the screen brightness to match the room; a screen far brighter than the store makes you squint.`,
          `Hold the phone a little lower, which lets your eyelids cover more of your eyes.`,
        ],
      },
      { h: 'Crowds, lines and stuffy stores' },
      {
        p: `Busy weekends in December pack people into aisles and checkout lines, and the air can feel warm and close. You may also catch yourself rubbing your eyes while you wait. Shopping carts, door handles and card readers pass through a lot of hands, so wash your hands before touching your eyes or putting in a drop. If you use a drop while you’re out, a restroom with soap and water is the place for it, not the checkout line.`,
      },
      { h: 'A plan for a long shopping day' },
      {
        list: [
          `Go earlier in the day, when stores are less crowded and you’re less tired.`,
          `Plan a break every hour or two, ideally somewhere you can sit away from vents.`,
          `Keep sunglasses in your coat pocket for the parking lot.`,
          `Bring your eye drop in your bag with the cap snapped shut.`,
          `Use it as the label directs, which may line up with a lunch or coffee break.`,
          `End the day at home with screens dimmed and a humidifier running in the bedroom.`,
        ],
      },
      { h: 'Don’t leave your drops in the car' },
      {
        p: `It’s tempting to leave a bag of purchases and everything else in the car between stores. Quell’s label gives a storage range: {storage}. A car in a December parking lot can drop below that, especially on a long day or in colder parts of the country, so keep the bottle in your purse, backpack or an inside coat pocket. Our guide on [whether eye drops can freeze in a cold car](/guides/can-eye-drops-freeze-in-a-cold-car) explains more.`,
      },
      { h: 'Shopping online instead' },
      {
        p: `Some people skip the stores altogether, which trades parking lots for evening screen time at home. The same blink breaks apply. If you’re ordering Quell as a gift or for yourself, order early: shipping goes out from Brentwood, Tennessee, with a tracking email, but no delivery date is promised. Orders of {freeBottles} or more bottles ship free; smaller ones pay {shipping}. You can [order from the home page](/#buy).`,
      },
      { h: 'Using Quell during the holidays' },
      {
        p: `Quell is a preservative-free lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. Directions: {directions}. Before your first use, read the caution: {warnings}. The full Drug Facts panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'When dryness is more than a busy day' },
      {
        p: `Eyes that feel better after a night’s sleep were probably just worn out by the day. If dryness comes back every day or gets worse, see an eye doctor. The label also says when to stop: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get tired at the mall?',
        a: `Malls are heated and often dry, and shoppers spend hours focused on signs, price tags and phones, which reduces blinking. The tear film thins, and eyes start to feel tired or gritty.`,
      },
      {
        q: 'Can I keep eye drops in my car while I shop?',
        a: `It’s better not to. Quell’s label reads “{storage},” and a parked car in December can get colder than that range. Keep the bottle in your bag instead.`,
      },
      {
        q: 'How do I keep my eyes comfortable during holiday shopping?',
        a: `Take your coat off indoors, wear sunglasses in windy parking lots, look up from your phone and blink often, take breaks away from vents, and use a lubricating drop as its label directs.`,
      },
      {
        q: 'Where should I put in eye drops when I’m out shopping?',
        a: `Somewhere you can wash your hands first, such as a store or mall restroom. Clean hands and keeping the tip from touching anything matter more than where you are.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-software-developer',
    title: 'Christmas gifts for a software developer',
    description:
      'Gifts for a developer who codes for hours: monitor arms, desk lamps, break timers, on-call comforts, and when a bottle of eye drops makes sense.',
    category: 'seasonal',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Good Christmas gifts for a software developer make long coding sessions easier on the body and eyes: an adjustable monitor arm, a warm desk lamp, a small desk humidifier, a break timer, or comforts for on-call nights like a sleep mask. If they’ve mentioned dry or tired eyes from screens, a bottle of lubricating eye drops can be a practical add-on, once you’ve checked the label’s egg and bird allergy caution.`,
      },
      { h: 'Gifts for developers who stare at screens all week' },
      {
        p: `Writing and reviewing code means hours of close focus on text, often across two or three monitors. People blink less when they concentrate on a screen, and an office or home office with heating or air conditioning dries the air further. Gifts that change the setup, rather than add another gadget, tend to get used for years.`,
      },
      {
        list: [
          `An adjustable monitor arm, so the screen can sit at a comfortable height and distance instead of on a stack of books.`,
          `A warm, dimmable desk lamp that lights the desk without glare on the screen.`,
          `A small desk humidifier for a home office that runs dry in winter.`,
          `A document holder or laptop stand to bring a second screen to the same height as the first.`,
          `A good chair cushion or footrest, for the sessions that run longer than planned.`,
        ],
      },
      {
        p: `If they run several monitors, our guide to [dry eyes with multiple monitors](/guides/dry-eyes-with-multiple-monitors) has ideas on arranging them that pair well with a monitor arm.`,
      },
      { h: 'Gifts that make breaks easier' },
      {
        p: `Developers often know they should look away from the screen, then sink back into a problem and forget for two hours. A gift that nudges a break is more welcome than it sounds:`,
      },
      {
        list: [
          `A visual desk timer that counts down without a loud alarm.`,
          `A really good mug or travel tumbler, which makes the walk to the kitchen worth it.`,
          `A gift card for lunch at a place near their office, so they actually step out.`,
          `A warm jacket or gloves for a walk at lunch in winter.`,
          `A plant for the desk, giving the eyes something farther away to rest on.`,
        ],
      },
      { h: 'Christmas gifts for an on-call developer' },
      {
        p: `On-call weeks mean a phone by the bed, late alerts and squinting at a laptop at 2 a.m. Gifts that make those nights less rough:`,
      },
      {
        list: [
          `A soft sleep mask for getting back to sleep after an alert.`,
          `A bedside lamp with a low, warm setting, gentler than overhead lights.`,
          `A phone stand for the nightstand, so the screen isn’t inches from their face.`,
          `A cozy blanket or slippers for the walk to the laptop.`,
          `A small bag for the laptop charger, phone cable and a few essentials if they work from different rooms or locations.`,
        ],
      },
      {
        p: `Our guide to [dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) covers late-night screen work in more depth.`,
      },
      { h: 'Funny gifts for software developers' },
      {
        p: `Plenty of developers enjoy a gag gift: a rubber duck for talking through a bug, laptop stickers, a mug with an in-joke from their language of choice, or a desk toy for meetings. These pair nicely with something practical in the same box, so the joke gets a laugh and the useful gift gets used.`,
      },
      { h: 'Are eye drops a good gift for a coder?' },
      {
        p: `They can be, for the right person. If your developer has complained about dry, gritty or tired eyes after long sessions, a bottle of drops they didn’t have to remember to buy is a thoughtful touch. If they’ve never mentioned their eyes, choose something else, or tuck the bottle in alongside the main present rather than giving it alone.`,
      },
      {
        p: `Check a few things first:`,
      },
      {
        list: [
          `Quell’s label carries this caution: {warnings}. If you don’t know about egg or bird allergies, ask first.`,
          `If they wear contact lenses, the label doesn’t cover use with lenses, so their eye doctor is the person to ask.`,
          `If they already use drops from their doctor, they should check with that doctor before adding another.`,
          `The label notes: {milky}. A line about that on the card saves them a surprise.`,
        ],
      },
      { h: 'What Quell is' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists the Uses as: {uses}. The directions are: {directions}. A {size} bottle fits easily in a stocking, a laptop bag or a desk drawer. The full label is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering a gift' },
      {
        p: `You can ship straight to the recipient: enter their name and address as the shipping address at checkout. There’s no gift wrap or gift message option, so plan to wrap it yourself or include a card in a separate package. Buyers must be 18 or older, and orders ship only within the United States. Shipping is {shipping}, or free on {freeBottles} or more bottles. No delivery date is promised, so order well before Christmas. If you’re buying for a whole team, [ordering eye drops for someone else](/guides/ordering-eye-drops-for-someone-else) walks through it.`,
      },
      { h: 'A gift isn’t a fix' },
      {
        p: `If your developer’s eyes bother them every day, the most caring gift may be a nudge to book an eye exam. The label is clear about when to stop and see a doctor: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What do you get a software developer for Christmas?',
        a: `Gifts that make long coding days easier tend to land well: a monitor arm, a warm desk lamp, a desk humidifier, a break timer or on-call comforts like a sleep mask. Pair a practical item with something fun.`,
      },
      {
        q: 'What are good gifts for developers who work from home?',
        a: `Things that improve the home office: a monitor arm or laptop stand, good lighting, a small humidifier for winter, a comfortable chair cushion and a gift card for lunch out to encourage breaks.`,
      },
      {
        q: 'Is a bottle of eye drops a good gift for a coder?',
        a: `It can be if they’ve mentioned dry or tired eyes from screens. Check the egg and bird allergy caution on Quell’s label first, and give it alongside something else rather than on its own.`,
      },
      {
        q: 'What is a good gift for someone who is on call?',
        a: `Things that soften late-night alerts: a sleep mask, a dim bedside lamp, a phone stand for the nightstand and a cozy blanket. They make waking up to fix something a little less harsh.`,
      },
    ],
  },
  /*
   * Sources checked 2026-11-15 for dry-eyes-for-factory-workers:
   * - 29 CFR 1910.133(a)(1)-(3), via the eCFR API (employer shall ensure use of
   *   appropriate eye or face protection for flying particles, molten metal,
   *   liquid chemicals, acids or caustic liquids, chemical gases or vapors, or
   *   injurious light radiation; side protection for flying objects;
   *   prescription wearers need protection that incorporates or fits over it)
   * - 29 CFR 1910.151(c) (where eyes may be exposed to injurious corrosive
   *   materials, facilities for quick drenching or flushing of the eyes within
   *   the work area for immediate emergency use)
   */
  {
    slug: 'dry-eyes-for-factory-workers',
    title: 'Dry eyes for factory workers',
    description:
      'Industrial fans, heat and dust dry the eyes on a factory shift. Safety eyewear first, then the everyday habits and drop routine that fit a plant floor.',
    category: 'using',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Factory work dries the eyes through industrial fans and air movement, heat from ovens, presses and furnaces, airborne dust, and long shifts of close focus. Required safety eyewear always comes first. Around it, stay out of direct fan blasts, take short blink breaks, wash your hands before touching your eyes and use a lubricating drop as labeled on breaks. A splash or debris in the eye is an emergency for a doctor, not a drop.`,
      },
      { h: 'Why do my eyes get dry working in a factory?' },
      {
        p: `The tear film that keeps your eyes comfortable is thin, and it evaporates faster in moving, warm or dusty air. A production floor often has all three at once:`,
      },
      {
        list: [
          `Big floor fans and overhead fans keep workers cool but push air across the eyes for hours.`,
          `Heat from ovens, molding machines, furnaces or welding areas dries the air near them.`,
          `Dust from grinding, cutting, sanding, packaging or raw materials gets into the eyes and irritates them.`,
          `Inspection, assembly and machine monitoring call for steady focus, which slows blinking.`,
          `Long or rotating shifts leave less time to rest the eyes between workdays.`,
        ],
      },
      { h: 'Safety eyewear comes first' },
      {
        p: `Nothing in this guide replaces the protective eyewear your job requires. OSHA’s rule on eye and face protection, 29 CFR 1910.133, says employers must make sure workers use appropriate eye or face protection when exposed to hazards such as flying particles, molten metal, liquid chemicals, acids or caustic liquids, chemical gases or vapors, or injurious light. Where objects can fly, the protection must include side protection. Workers who wear prescription glasses need protection that either builds in the prescription or fits over it properly.`,
      },
      {
        p: `If your safety glasses feel uncomfortable, don’t take them off or modify them. Talk to your supervisor or safety coordinator. Different sizes and styles fit faces differently, and some close-fitting styles also block more of the moving air around the eyes. The right pair for the job is their call, not something to improvise.`,
      },
      { h: 'Do safety goggles help dry eyes?' },
      {
        p: `They can help a little as a side effect. Goggles and wraparound safety glasses that sit close to the face reduce how much fan air and dust reaches the eye. They aren’t a remedy for dryness, and they’re chosen for the hazards at your station, not for comfort. If your eyes feel dry under them, keep wearing them and use the other steps here.`,
      },
      { h: 'Fans, heat and where you stand' },
      {
        p: `Small changes to position often make the biggest difference over a shift:`,
      },
      {
        list: [
          `Angle a personal fan at your chest or back rather than your face, if your workstation allows.`,
          `Stand to the side of a large floor fan’s airflow when you have a choice.`,
          `Turn away from hot air coming off a press, oven door or furnace when it opens.`,
          `On breaks, sit somewhere out of the fan path and away from heat sources.`,
          `Drink water through the shift, especially in hot areas.`,
        ],
      },
      {
        p: `Our guide to [dry eyes in a hot, dry workplace](/guides/dry-eyes-in-a-hot-workplace) goes further into heat specifically.`,
      },
      { h: 'Dust and dirty hands' },
      {
        p: `Rubbing your eyes with work gloves or dusty fingers adds more irritation. Before you touch your eyes, take off gloves and wash your hands. Blink several times if your eyes feel gritty, and if something feels stuck, use the eyewash station and tell your supervisor rather than digging at it.`,
      },
      { h: 'If something gets in your eye' },
      {
        p: `A chemical splash, a metal chip, a wood splinter or anything that hits the eye with force is an emergency. Follow your plant’s emergency procedure, use the eyewash station, and get medical help. OSHA’s first aid rule, 29 CFR 1910.151, requires facilities for quick flushing of the eyes within the work area wherever workers may be exposed to corrosive materials, so learn where yours is before you need it. A lubricating eye drop is not for injuries, chemicals or embedded debris.`,
      },
      { h: 'Using eye drops on a factory shift' },
      {
        p: `Quell is a preservative-free lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives the Uses as {uses} and the directions as: {directions}. Three times a day fits neatly around a typical shift: before you start, at lunch and at the end.`,
      },
      {
        list: [
          `Use drops on a break, away from the line, with clean hands.`,
          `Follow the handling line: {tip}.`,
          `Read the caution before your first bottle: {warnings}.`,
          `Don’t share a bottle with coworkers.`,
        ],
      },
      { h: 'Where to keep the bottle' },
      {
        p: `The label’s storage line reads: {storage}. A locker in a climate-controlled break room is usually fine. A locker beside a furnace, a truck cab in July, or a car in a winter lot may not be. If your plant is hot, keep the bottle in your lunch bag in the break room rather than on the floor. For more on getting a supply to work, see [shipping eye drops to a job site](/guides/shipping-eye-drops-to-a-job-site).`,
      },
      { h: 'Long shifts and nights' },
      {
        p: `Rotating shifts and overtime can leave eyes uncomfortable even with good habits at work. Sleep and a break from screens after the shift help. Our guides on [the night shift](/guides/dry-eyes-on-the-night-shift) and [warehouse work](/guides/dry-eyes-for-warehouse-workers) cover similar settings.`,
      },
      { h: 'When to see a doctor' },
      {
        p: `If your eyes stay irritated after a weekend off, or hurt, get them checked. The label sets the line: {stopUse} Any eye injury at work should be reported and examined.`,
      },
    ],
    faq: [
      {
        q: 'Do safety goggles help dry eyes?',
        a: `Close-fitting goggles can reduce how much fan air and dust reaches your eyes, but they’re chosen for workplace hazards, not dryness. Keep wearing what your job requires and add other habits around it.`,
      },
      {
        q: 'Why do safety glasses hurt my eyes?',
        a: `Often it’s fit: frames that press, slip or sit too close, or lenses that fog or are scratched. Don’t take them off; ask your supervisor or safety coordinator about a different size or style.`,
      },
      {
        q: 'What should I do if metal gets in my eye at work?',
        a: `Handle it as an emergency: don’t rub, follow your workplace procedure, use the eyewash station if directed, and get medical help. A lubricating drop is not for embedded debris.`,
      },
      {
        q: 'Can I keep eye drops in my lunch bag at work?',
        a: `Usually, as long as the bag stays in a break room within the label’s storage range. Keep it away from furnaces, hot trucks and freezing cars.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-architects-and-drafters',
    title: 'Dry eyes for architects and drafters',
    description:
      'Long CAD sessions, dense plan sets and windy site visits all dry the eyes. Practical habits for architects and drafters, from the studio to the job site.',
    category: 'using',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Architects and drafters get dry eyes from hours of CAD and modeling on large or multiple monitors, close reading of dense drawing sets, deadline nights, and site visits in wind and dust. Set screens slightly below eye level, take regular breaks to look across the room, wear the safety glasses a site requires, keep studio vents off your face and use a lubricating drop as its label directs.`,
      },
      { h: 'CAD, BIM and blinking' },
      {
        p: `Drafting software asks for sustained, detailed attention: zooming into wall sections, tracing gridlines, checking dimensions, coordinating layers. When you concentrate on a screen like that, you blink less often and often only partly, so the tear film, which each full blink refreshes, thins between blinks. By late afternoon eyes can feel gritty, hot or tired.`,
      },
      {
        list: [
          `Set the top of the main monitor at or slightly below eye level, so you look slightly down and your lids cover more of the eye.`,
          `Sit far enough back to read the screen without leaning in.`,
          `Raise the interface text size instead of moving closer.`,
          `Match screen brightness to the room so you’re not squinting.`,
          `Every so often, look across the studio or out a window and blink fully several times.`,
        ],
      },
      {
        p: `Two or three large monitors are standard in many studios. [Dry eyes with multiple monitors](/guides/dry-eyes-with-multiple-monitors) covers arrangement, and [eye drops for computer users](/guides/eye-drops-for-computer-users) covers the broader screen-time picture.`,
      },
      { h: 'Reading drawing sets and redlines' },
      {
        p: `Large-format sheets and dense PDFs bring their own strain. Small text, hatch patterns and fine lines make you stare without blinking, especially during a full set review. Some habits help on review days:`,
      },
      {
        list: [
          `Review paper sets on a table rather than pinned to a wall at eye level; looking down is easier on the eyes.`,
          `Use good, even lighting over the table, without glare off glossy paper.`,
          `Break a long review into sections with a short pause between sheets.`,
          `On screen, zoom in on details rather than reading tiny text at full-sheet view.`,
        ],
      },
      { h: 'Deadlines and late nights' },
      {
        p: `Submission weeks, competition deadlines and late charrettes push the screen hours far past a normal day, often in a building whose heating or cooling has switched to night mode. Plan short breaks even under pressure, keep a glass of water at the desk, and when the deadline is past, give your eyes an evening away from screens. If the studio air feels dry in winter, a small desk humidifier can help.`,
      },
      { h: 'Site visits in wind and dust' },
      {
        p: `A site walk swaps one strain for another. Open floors on an unfinished building can be windy, upper levels more so, and there’s often dust from cutting, grinding or demolition in the air. Wind speeds the evaporation of tears, and dust irritates the eye directly.`,
      },
      {
        list: [
          `Follow the site’s safety rules on protective eyewear and wear what the contractor requires.`,
          `Wraparound safety glasses also cut wind and dust compared with regular glasses.`,
          `Turn your face away from gusts on open slabs and roofs.`,
          `Don’t rub your eyes with dusty hands; clean them before touching your face.`,
          `If something gets in your eye and blinking doesn’t clear it, stop and get help.`,
        ],
      },
      { h: 'Studio air and the model shop' },
      {
        p: `Open-plan studios often run heat or air conditioning hard, and a desk under a vent gets a steady stream of dry air. Ask facilities to redirect a diffuser, or move your desk if you can. Model shops add sawdust, foam and fumes from cutting tools. Use the shop’s eye protection and ventilation, and wash your hands before touching your eyes. Our guide for [woodworkers](/guides/dry-eyes-for-woodworkers) covers sawdust in more detail.`,
      },
      { h: 'Using Quell' },
      {
        p: `Quell is a preservative-free lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label states the Uses as {uses}, with the directions: {directions}. Morning, lunch and late afternoon is an easy rhythm for a studio day.`,
      },
      {
        list: [
          `Wash your hands first, especially after the model shop or a site visit.`,
          `Follow the label’s handling line: {tip}.`,
          `Read the caution before your first bottle: {warnings}.`,
          `If you wear contact lenses, the label doesn’t cover use with them; ask your eye doctor.`,
        ],
      },
      { h: 'Your site bag and desk drawer' },
      {
        p: `The label’s storage range is {storage}. A desk drawer in the studio fits that. A site bag left in a hot truck in summer, or a car parked at a winter site for hours, may not, so carry the bottle with you or keep it in a bag that comes inside. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay uncomfortable after breaks and a weekend off, or your vision for fine detail seems to be changing, book an eye exam. Good near vision matters in this work, and an eye doctor can check both. The label tells you when to stop: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes hurt after a long day of CAD work?',
        a: `Concentrating on detailed drawings slows blinking, so the tear film thins and the eyes dry out. Heated or air-conditioned studio air adds to it. Regular breaks and screen placement help.`,
      },
      {
        q: 'How should I position my monitor for drafting?',
        a: `Put the top of the screen at or slightly below eye level and sit back far enough to read without leaning in. Raise text size rather than moving closer.`,
      },
      {
        q: 'Should architects wear safety glasses on a site visit?',
        a: `Follow the site’s safety rules and the contractor’s requirements. Wraparound safety glasses also help with wind and dust on open floors.`,
      },
      {
        q: 'Can I keep eye drops in my site bag?',
        a: `Yes, if the bag stays within the label’s storage range. Don’t leave it in a hot truck or a freezing car during a site visit.`,
      },
    ],
  },
  /*
   * Sources checked 2026-11-15 for sterile-water-in-eye-drops:
   * - 21 CFR 200.50(a)(1)-(3), via the eCFR API
   *   (https://www.ecfr.gov/api/versioner/v1/full/2026-11-01/title-21.xml?part=200&section=200.50):
   *   "all preparations offered or intended for ophthalmic use ... should be
   *   sterile"; FDA's September 1, 1964 statement of policy that non-sterile
   *   liquid ophthalmic preparations may be regarded as adulterated; ruling
   *   extended to all ophthalmic preparations regulated as drugs; containers
   *   sterile at filling and closing.
   * - 21 CFR 201.66(c)(8), via the eCFR API: for an OTC drug that is not also
   *   a cosmetic, inactive ingredients are listed in alphabetical order.
   */
  {
    slug: 'sterile-water-in-eye-drops',
    title: 'Sterile water in eye drops',
    description:
      'Sterile Water is one of Quell’s inactive ingredients: the base the other ingredients are carried in. What it is, why it’s listed, and what it doesn’t do.',
    category: 'formula',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Sterile water in eye drops is purified water that has been made free of living microorganisms, used as the base that carries the other ingredients. In Quell it’s listed as an inactive ingredient, “Sterile Water.” It isn’t there to add moisture on its own; it’s the liquid the formula is made in. Federal rules require any product for the eye to be sterile, and a sterile base is part of meeting that.`,
      },
      { h: 'What is sterile water in eye drops?' },
      {
        p: `Most eye drops are mostly liquid, and that liquid has to come from somewhere. In many products, Quell included, it’s water. The word “sterile” is the important part: it means the water contains no living bacteria, fungi or other microorganisms when it goes into the product. Ordinary drinking water, even clean tap or bottled water, isn’t held to that standard.`,
      },
      {
        p: `Think of it as the vehicle. The active ingredients do the work the label describes, and the water is the medium that holds them, so each drop carries the formula to the eye in a form you can apply from a bottle.`,
      },
      { h: 'Where it appears on Quell’s label' },
      {
        p: `Quell’s Drug Facts panel lists three active ingredients, {actives}, and {inactiveCount} inactive ones: {inactives}. Sterile Water is one of the inactive ingredients.`,
      },
      {
        p: `Its place in the list says nothing about how much is in the bottle. FDA’s labeling rule for over-the-counter drugs, 21 CFR 201.66, requires the inactive ingredients of an OTC drug that isn’t also a cosmetic to be listed in alphabetical order. That puts Sterile Water near the end simply because of the letter S. [The inactive ingredients on an eye drop label](/guides/the-inactive-ingredients-section) explains how that section works.`,
      },
      { h: 'Why is sterile water an inactive ingredient?' },
      {
        p: `On a Drug Facts label, the active ingredients are the ones with a stated purpose. Quell lists {glycerol} and {polysorbate} as lubricants and {mineralOil} as an emollient. Everything else in the formula goes under inactive ingredients, which covers bases, natural ingredients, and the components that hold a formula together and keep it stable. Water belongs there because it carries the actives rather than being one.`,
      },
      {
        p: `Inactive doesn’t mean unimportant. Without a base, there would be no drop to apply. It just means the water isn’t what the label’s Uses statement rests on.`,
      },
      { h: 'What federal rules say about sterility' },
      {
        p: `FDA’s regulation on ophthalmic preparations, 21 CFR 200.50, opens by saying informed medical opinion agrees that all preparations for use in the eye, including eye-cleansing products, should be sterile. It records that in a statement of policy issued on September 1, 1964, FDA ruled that liquid eye preparations that aren’t sterile may be regarded as adulterated, and the regulation extends that ruling to all ophthalmic preparations regulated as drugs.`,
      },
      {
        p: `That requirement covers the whole finished product, not one ingredient. A sterile water base is a natural starting point, but the regulation is about what ends up in the sealed bottle. Our guide [Are eye drops sterile?](/guides/are-eye-drops-sterile) covers what happens once you open it and how to keep the bottle clean.`,
      },
      { h: 'Can I use sterile water as eye drops?' },
      {
        p: `Not as a substitute for an eye drop. Sterile water sold on its own, for example for mixing or rinsing in medical settings, isn’t labeled as an over-the-counter eye drop for dryness, and its label won’t give you eye-drop directions or warnings. Tap, bottled and distilled water aren’t sold as sterile eye products at all. If you’re thinking of putting anything in your eye that isn’t labeled for it, ask a pharmacist or eye doctor first.`,
      },
      {
        p: `Emergencies are different. If a chemical splashes into your eye, follow the instructions on the product, your workplace’s emergency procedure or poison control, which often means flushing the eye right away, and get medical help. That isn’t the same as choosing a daily drop.`,
      },
      { h: 'Is sterile water good for dry eyes?' },
      {
        p: `Water alone isn’t what keeps the eye comfortable. The tear film has three layers, oil, water and mucus, and the oil layer on top slows the water beneath it from evaporating. When that layer is thin or the air is dry, water evaporates quickly, which is why plain water wouldn’t stay put for long. [The tear film’s water layer, explained](/guides/the-tear-films-water-layer) goes into that layer in detail.`,
      },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. That design comes from the formula as a whole, not from the water in it. The sterile water simply carries the actives and the other inactive ingredients.`,
      },
      { h: 'Why water-based drops can look milky' },
      {
        p: `Quell isn’t clear, and that surprises some people who expect water-based drops to look like water. The label describes it this way: {milky}. The oil-based ingredients in the formula give it that look. In plain terms: {appearance} What the label does say to watch for is a change: {doNotUse}.`,
      },
      { h: 'Using a sterile product well' },
      {
        p: `A product that starts out sterile stays as clean as you keep it. The label’s handling line reads: {tip}. Follow the directions, {directions}, and store it as the label says: {storage}. Read the caution before your first use: {warnings}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      {
        p: `If your eyes feel worse after using any drop, stop. The label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What is sterile water in eye drops?',
        a: `It’s water made free of living microorganisms, used as the liquid base that carries the other ingredients. On Quell’s label it’s listed as an inactive ingredient, “Sterile Water.”`,
      },
      {
        q: 'Can I use sterile water as eye drops?',
        a: `Not as a replacement for an eye drop. Sterile water sold for other purposes isn’t labeled as an eye drop for dryness. Ask a pharmacist or eye doctor before putting anything in your eye that isn’t labeled for it.`,
      },
      {
        q: 'Is sterile water good for dry eyes?',
        a: `Water on its own evaporates quickly from the eye, since the tear film’s oil layer is what slows evaporation. In Quell, sterile water is the base the formula is made in, not the ingredient the label’s Uses rest on.`,
      },
      {
        q: 'Why are inactive ingredients listed in alphabetical order?',
        a: `FDA’s labeling rule for OTC drugs, 21 CFR 201.66, requires inactive ingredients of an OTC drug that isn’t also a cosmetic to be listed alphabetically. Their order doesn’t show how much of each is in the product.`,
      },
    ],
  },
]
