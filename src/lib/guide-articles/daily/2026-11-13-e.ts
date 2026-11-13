import type { Guide } from '@/lib/guide-types'
export const DAILY_20261113_E: Guide[] = [
  /*
   * Sources fetched 2026-11-13 for dry-eyes-in-fairbanks:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00026411.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00026411.csv
   *   (FAIRBANKS INTL AP: Jan high 0.6 F, low -17.2 F; Dec high 4.3; Jul high 72.7;
   *   113.8 nights below 0 F; 221.7 nights at or below 32 F; 154.0 days with high
   *   below 32 F; annual precip 11.67 in; snow 64.6 in; 189.9 days with 1 in or more
   *   snow on the ground; heating degree days 13,419.8, cooling 68.2)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (Fairbanks afternoon RH: Jan 73, Apr 45, May 37)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (Fairbanks annual mean wind ranks 262nd of 265 stations; May the windiest month,
   *   December the calmest)
   * - https://aa.usno.navy.mil/api/rstt/oneday?date=2026-12-21&coords=64.84,-147.72&tz=-9
   *   (sunrise 10:58, sunset 14:40, Dec 21 2026)
   * - https://aa.usno.navy.mil/api/rstt/oneday?date=2026-06-21&coords=64.84,-147.72&tz=-8
   *   (sunrise 02:58, sun continuously above the twilight limit, Jun 21 2026)
   * - https://forecast.weather.gov/glossary.php?word=ice+fog
   *   (ice fog: rare warmer than -30 C, forms in clear calm weather at high latitudes,
   *   near water vapor sources including products of combustion)
   */
  {
    slug: 'dry-eyes-in-fairbanks',
    title: 'Dry eyes in Fairbanks, Alaska',
    description:
      'Forty-below cold, ice fog, under four hours of December sun and furnaces that rarely rest: why Fairbanks eyes dry out, with NOAA’s numbers.',
    category: 'local',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Fairbanks eyes dry out mostly indoors. NOAA’s normals put the January high near 1°F, so furnaces, wood stoves and boilers run for most of the year, and that heated air pulls water from the tear film. Short winter days add hours of screen time. Wear a face covering against stinging cold outside, add moisture to the rooms you live in, and use a lubricating drop exactly as its label directs.`,
      },
      { h: 'How cold Fairbanks gets, by NOAA’s numbers' },
      {
        p: `NOAA’s 1991 to 2020 climate normals for Fairbanks International Airport describe one of the coldest cities in the country. These are averages over thirty years, so any single winter can run colder or milder:`,
      },
      {
        list: [
          `January’s normal high is 0.6°F and its normal low is -17.2°F.`,
          `About 114 nights a year drop below zero.`,
          `The temperature falls to freezing or lower on roughly 222 nights.`,
          `On about 154 days a year, the high never climbs above freezing.`,
          `Snow covers the ground, at least an inch deep, for about 190 days.`,
          `Heating degree days total about 13,420 a year, against just 68 cooling degree days.`,
        ],
      },
      {
        p: `That last pair says the most about your eyes. Fairbanks almost never needs air conditioning, but it needs heat from September into May and on plenty of summer nights too. Air that arrives at -20°F holds very little water, and once a furnace warms it to 70°F, it feels parched. Your eyes spend most waking hours in that air.`,
      },
      { h: 'Ice fog and the coldest days' },
      {
        p: `The National Weather Service glossary describes ice fog as fog made of tiny ice particles that forms in very cold, clear, calm weather at high latitudes, and says it’s rare at temperatures warmer than -30°C. It grows thicker near sources of water vapor, and the glossary names products of combustion among them. In Fairbanks that means car exhaust, chimneys and power plant stacks during a deep cold snap, which is why the haze tends to hang over roads, parking lots and the downtown core.`,
      },
      {
        p: `Walking through ice fog, eyes often sting and water at first. That watering is a reflex to cold and irritation, and it isn’t the same as a well-balanced tear film. Once you step back inside, the heat dries everything quickly. A scarf or neck gaiter pulled up to the cheekbones, plus glasses or goggles, keeps the coldest air off the surface of the eye. [Dry eyes from cold air](/guides/dry-eyes-from-cold-air) explains why cold air and dry eyes go together.`,
      },
      { h: 'Under four hours of December sun' },
      {
        p: `The U.S. Naval Observatory’s calculator puts sunrise in Fairbanks at 10:58 a.m. and sunset at 2:40 p.m. on December 21, 2026, a little over three and a half hours of sun. On June 21 the same source shows sunrise at 2:58 a.m., with the sky never getting darker than civil twilight through the night.`,
      },
      {
        p: `Both extremes shape eye habits. In December, work, school and errands happen under lamps and screen light, and long evenings fill with reading, streaming and gaming. Screens reduce how often you blink, so the tear film sits exposed for longer between refreshes. In June, people stay outside late, sleep less and spend hours squinting into a sun that barely sets. Short nights of sleep leave eyes feeling scratchy by afternoon.`,
      },
      { h: 'A calm city with a dry spring' },
      {
        p: `Wind is the big eye complaint in many western cities, but not here. NOAA’s Comparative Climatic Data table of average wind speeds, which covers about 265 weather stations, ranks Fairbanks 262nd, among the calmest anywhere in the country. Its breeziest month is May, and December is its stillest.`,
      },
      {
        p: `The same NOAA set’s humidity table shows the outdoor air at its driest in spring. Afternoon relative humidity at the airport averages 45 percent in April and 37 percent in May, just as snowmelt, road dust and the first long outdoor days arrive. Breakup season can leave eyes gritty from grit kicked off thawing roads, so glasses on bike rides and walks help.`,
      },
      { h: 'Daily life in Fairbanks that wears on the eyes' },
      {
        list: [
          `Plugging in the block heater, scraping the windshield, then driving with the defroster roaring at your face.`,
          `Wood stoves and pellet stoves that keep a cabin warm but bake the air near the couch.`,
          `Hours in heated classrooms and labs at the University of Alaska Fairbanks campus.`,
          `Late nights outside watching for the aurora, staring upward into cold, still air without blinking much.`,
          `Shifts at Fort Wainwright or Eielson, or on job sites around the Interior, where the cold and dry heat trade off all winter.`,
          `Long drives on the Richardson or Parks Highway in the dark, with the vents running.`,
        ],
      },
      { h: 'Practical steps for a Fairbanks winter' },
      {
        list: [
          `Run a clean humidifier in the bedroom; [does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) covers settings and upkeep.`,
          `Point car vents at your chest or feet, not your face.`,
          `Sit away from the wood stove and keep space heaters aimed away from where you rest.`,
          `Take a screen break every so often and blink fully a few times.`,
          `Keep the bottle in your home or inner coat pocket, not the vehicle. The label says {storage}, and a parked car in a Fairbanks winter spends weeks far below that range.`,
          `If a bottle has been frozen, check it before using it. The label says {doNotUse}, and a pharmacist can help if you’re not sure.`,
        ],
      },
      { h: 'Where Quell fits' },
      {
        p: `The label’s Uses read: {uses}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the side of the problem that dry, heated air works on. Its active ingredients are {actives}, and the directions are {directions}. Read the full [Drug Facts](/drug-facts) first, including the warning: {warnings}.`,
      },
      {
        p: `A drop is a comfort measure, not a check-up. If dryness keeps coming back, or your eyes hurt or your vision changes, the label’s advice applies: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs that call for an exam rather than another drop.`,
      },
      { h: 'Ordering Quell to Fairbanks' },
      {
        p: `Quell ships to Alaska from Brentwood, Tennessee. Shipping is {shipping} per order, and {freeBottles} bottles ship free. No delivery date is promised, and an order bound for the Interior in deep winter can sit in cold vehicles along the way, so open the box indoors and look at the bottle before first use. The [Fairbanks page](/eye-drops/fairbanks-ak) and the [Alaska page](/eye-drops/state/alaska) have local details, and [Dry eyes in Anchorage](/guides/dry-eyes-in-anchorage) covers the coastal side of the state.`,
      },
    ],
    faq: [
      {
        q: `Why are my eyes so dry in Fairbanks?`,
        a: `Mostly because of heated indoor air. Fairbanks needs heat for most of the year, and warming air that came in far below zero leaves it very dry, which speeds evaporation from the tear film.`,
      },
      {
        q: `What is ice fog in Fairbanks?`,
        a: `The National Weather Service describes ice fog as fog made of tiny ice particles that forms in very cold, calm, clear weather, usually below about -30°C. In Fairbanks it gathers near exhaust and chimneys during deep cold snaps.`,
      },
      {
        q: `How many hours of daylight does Fairbanks get in winter?`,
        a: `The U.S. Naval Observatory puts sunrise at 10:58 a.m. and sunset at 2:40 p.m. on December 21, 2026, a little over three and a half hours of sun on the shortest day.`,
      },
      {
        q: `Can I keep eye drops in my car in Fairbanks?`,
        a: `Not through the winter. Quell’s label says {storage}, and a parked car in Fairbanks sits far below that for months, so keep the bottle indoors or in an inside pocket.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-13 for dry-eyes-in-sioux-falls:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014944.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00014944.csv
   *   (SIOUX FALLS: Jan high 27.2 F, low 8.5; Jul high 85.3; 24.9 nights below 0 F;
   *   162.0 nights at or below 32 F; 65.6 days with high below 32 F; 15.0 days at or
   *   above 90 F; annual precip 27.85 in; Dec-Feb 2.26 in, Jun-Aug 10.82 in; June
   *   wettest month 4.23 in; Jan 0.60 in; snow 45.3 in; heating degree days 7,248.5)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (Sioux Falls afternoon RH: Apr 53, May 53, annual 60; Dec afternoon 70)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (April the windiest month, August the calmest)
   * - https://www.siouxfalls.gov/business-permits/development-projects/future-planning/park-planning/the-falls-master-plan
   *   (more than 1 million residents and visitors visit Falls Park each year)
   */
  {
    slug: 'dry-eyes-in-sioux-falls',
    title: 'Dry eyes in Sioux Falls, South Dakota',
    description:
      'Prairie wind in April, a sub-zero winter and furnaces from fall to spring: what dries eyes in Sioux Falls, by NOAA’s numbers, and what helps.',
    category: 'local',
    addedOn: '2026-11-13',
    body: [
      {
        p: `In Sioux Falls, dry eyes usually come from two sources: winter heating and spring wind. NOAA’s normals show about 25 nights a year below zero and a heating season that runs from October into April, while April brings the windiest weather and some of the driest afternoons. Block the wind outdoors, add moisture to heated rooms, blink fully at screens, and use a lubricating drop as its label directs.`,
      },
      { h: 'Sioux Falls weather in NOAA’s numbers' },
      {
        p: `The 1991 to 2020 normals for the Sioux Falls airport station, on the north side of the city, describe a classic northern plains climate with big swings between seasons:`,
      },
      {
        list: [
          `January averages a high of 27.2°F and a low of 8.5°F.`,
          `July averages a high of 85.3°F, and about 15 days a year reach 90°F.`,
          `About 25 nights a year fall below zero, and about 162 reach freezing.`,
          `The high stays below freezing on about 66 days.`,
          `Normal snowfall is 45.3 inches.`,
          `Of 27.85 inches of yearly precipitation, only 2.26 fall from December through February, against 10.82 from June through August.`,
        ],
      },
      {
        p: `That last point surprises people who picture deep snow. Winter here is cold but light on moisture, and January brings just 0.60 inches of precipitation on average. Cold, thin air comes into the house, the furnace warms it, and the result is indoor air that leaves eyes feeling tight and gritty by evening.`,
      },
      { h: 'Why are my eyes so dry in a South Dakota winter?' },
      {
        p: `NOAA puts the Sioux Falls heating load at about 7,250 heating degree days a year, so forced-air furnaces run hard for months. Each time the blower kicks on, a stream of warm, dry air crosses the room. Eyes that sit in that stream, at a desk under a ceiling register or on a couch near a floor vent, lose water from the tear film faster than eyes in still air.`,
      },
      {
        list: [
          `Move a favorite chair or a desk so no register blows straight at it.`,
          `Run a cleaned humidifier in the bedroom, where you spend the most hours.`,
          `Turn down the thermostat a little at night; cooler air feels less parching.`,
          `Point car vents at your hands during the drive on Interstate 29 or 229, not at your eyes.`,
        ],
      },
      { h: 'April wind on the eastern plains' },
      {
        p: `NOAA’s Comparative Climatic Data table of average wind speeds lists April as the windiest month at the Sioux Falls station and August as the calmest. Spring also brings some of the driest afternoons: NOAA’s humidity table gives an average afternoon relative humidity of 53 percent in both April and May, the lowest of the year, against 70 percent on a December afternoon.`,
      },
      {
        p: `That combination of moving air and lower humidity is what pulls moisture off the eye fastest. Open farm fields to the west and south have little to slow a spring wind before it reaches town, and bare soil before planting adds fine dust. If you walk the bike trail along the Big Sioux River, coach a spring soccer game or work outdoors, wraparound sunglasses do more than any drop to keep wind and grit off your eyes.`,
      },
      { h: 'Falls Park, the river trail and summer days' },
      {
        p: `The city says more than a million residents and visitors come to Falls Park each year, where the Big Sioux River tumbles over rock just north of downtown. A morning at the falls can feel pleasantly misty, but a long summer day elsewhere in town is a different story. July afternoons approach the mid-80s, and offices, stores and cars run their air conditioning hard. AC dries the air just as a furnace does, so the eye habits that help in January help in July too.`,
      },
      { h: 'Sioux Falls routines that wear on the eyes' },
      {
        list: [
          `Long shifts in the city’s hospitals and clinics, under bright lights and steady ventilation.`,
          `Office work at banks and back-office centers, where hours of screen time cut down blinking.`,
          `Weekend drives to the lakes, windows open and wind across your face.`,
          `Sitting through a youth hockey tournament in a chilly rink, then stepping out into colder air.`,
          `Harvest season in surrounding Minnehaha and Lincoln counties, when combines and grain trucks raise dust along the section roads.`,
        ],
      },
      { h: 'Keeping a bottle in the right place' },
      {
        p: `Quell’s label says {storage}. A Sioux Falls winter puts a parked car well below that range for weeks, and a closed car in July can climb above it. Keep the bottle in the house, in a desk drawer at work, or in a bag you bring inside. [Keeping spare bottles of eye drops](/guides/keeping-spare-bottles) covers where an extra bottle belongs. If one does freeze or overheat, look at it first: {doNotUse}.`,
      },
      { h: 'What Quell is and isn’t' },
      {
        p: `Its Uses read: {uses}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The directions are {directions}, and the active ingredients are {actives}. Check the full [Drug Facts](/drug-facts) before you start, and note the caution about egg or bird allergies.`,
      },
      {
        p: `Persistent dryness deserves an eye exam rather than more drops. Working out the cause and what to do about it is an eye doctor’s job, and the label’s own advice is plain: {stopUse}`,
      },
      { h: 'Ordering Quell to Sioux Falls' },
      {
        p: `Quell ships to South Dakota from Brentwood, Tennessee. Standard shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Checkout works as a guest, and there’s no subscription to cancel later. No delivery date is promised, so reorder before the bottle runs low. See the [Sioux Falls page](/eye-drops/sioux-falls-sd) and the [South Dakota page](/eye-drops/state/south-dakota) for more.`,
      },
    ],
    faq: [
      {
        q: `Why are my eyes so dry in Sioux Falls?`,
        a: `Winter heating and spring wind do most of it. NOAA’s figures show a long heating season and an April that’s both the windiest month and among the least humid, and both speed evaporation from the tear film.`,
      },
      {
        q: `What is the windiest month in Sioux Falls?`,
        a: `April. NOAA’s Comparative Climatic Data table of average wind speeds lists April as the windiest month at the Sioux Falls station and August as the calmest.`,
      },
      {
        q: `How cold does Sioux Falls get in January?`,
        a: `NOAA’s 1991 to 2020 normals give January an average high of 27.2°F and low of 8.5°F, and about 25 nights a year drop below zero.`,
      },
      {
        q: `Can I order Quell to Sioux Falls, SD?`,
        a: `Yes. Quell ships to South Dakota addresses for {shipping} per order, or free with {freeBottles} or more bottles, though no delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-13 for dry-eyes-in-omaha:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014942.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00014942.csv
   *   (OMAHA EPPLEY AIRFIELD: Jan high 33.6 F, low 15.2; Jul high 88.1, low 68.0;
   *   33.1 days at or above 90 F; 9.4 nights below 0 F; annual precip 31.86 in;
   *   May 4.66 in, Aug 4.60 in, Jan 0.75 in; snow 27.1 in; heating degree days
   *   5,833.1, cooling degree days 1,293.6)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (Omaha morning RH Aug 87, Jul 85; afternoon RH Apr 52, Jan 66, annual 59)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (April the windiest month at Omaha, August the calmest)
   */
  {
    slug: 'dry-eyes-in-omaha',
    title: 'Dry eyes in Omaha, Nebraska',
    description:
      'Humid Omaha summers, then furnace-dry winters and a windy April: how each season wears on your eyes, by NOAA’s numbers, and habits that help.',
    category: 'local',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Omaha’s air is humid for much of the summer, yet many people here still get dry eyes. The cause is usually the air you breathe indoors: air conditioning from June through September, then furnace heat from late fall into spring, plus a windy April outdoors. Keep vents off your face, run a humidifier in winter, blink fully at screens, and use a lubricating drop the way its label directs.`,
      },
      { h: 'Omaha’s climate by the numbers' },
      {
        p: `NOAA’s 1991 to 2020 climate normals for Eppley Airfield, on the Missouri River just northeast of downtown, show a city that needs both heat and cooling in serious amounts:`,
      },
      {
        list: [
          `July averages a high of 88.1°F and a low of 68.0°F.`,
          `About 33 days a year reach 90°F or more.`,
          `January averages a high of 33.6°F and a low of 15.2°F, and about nine nights a year dip below zero.`,
          `Yearly precipitation is 31.86 inches, with May (4.66 inches) and August (4.60 inches) the wettest months and January (0.75 inches) the driest.`,
          `Normal snowfall is 27.1 inches.`,
          `The station logs about 5,830 heating degree days and about 1,290 cooling degree days a year.`,
        ],
      },
      { h: 'Why do my eyes feel dry in humid weather?' },
      {
        p: `Summer mornings in Omaha are muggy. NOAA’s humidity table puts the average morning relative humidity at 85 percent in July and 87 percent in August. So it seems odd that eyes would feel dry. The answer is that most Omahans spend summer days inside, where air conditioning pulls moisture out of the air and blows it around. An office vent, a car dash on the drive down Dodge Street or a bedroom window unit can each aim a dry stream straight at your face.`,
      },
      {
        p: `Moving air speeds evaporation from the tear film even when the air outside is damp. Angle the louvers down, sit out of the direct path of the vent, and give your eyes a few full blinks when you look up from the screen. [Dry eyes in a hot, dry workplace](/guides/dry-eyes-in-a-hot-workplace) has more for people who work near heat or fans.`,
      },
      { h: 'Winter: the driest stretch indoors' },
      {
        p: `From November through March the furnace takes over. January is the driest month outdoors by precipitation, and cold air carries little water to begin with. Heat it to room temperature and the indoor air turns noticeably dry, which is when people notice that gritty, tired feeling by late afternoon. NOAA’s data gives January an average afternoon humidity of 66 percent outdoors, but that number describes freezing air; the same air warmed inside a house feels far drier.`,
      },
      {
        list: [
          `Run a humidifier in the room where you sleep, and clean it on the maker’s schedule.`,
          `Keep space heaters on the floor and pointed away from chairs and beds.`,
          `Set the car heater to the floor or windshield settings instead of the face vents.`,
          `Use the 20-20-20 habit at a screen: every 20 minutes, look about 20 feet away for 20 seconds and blink.`,
        ],
      },
      { h: 'A windy, dusty April' },
      {
        p: `NOAA’s Comparative Climatic Data table lists April as Omaha’s windiest month on average and August as its calmest. April afternoons are also the least humid of the year, at about 52 percent. That makes spring the season to protect your eyes outdoors: on a bike ride over the Bob Kerrey Pedestrian Bridge, a walk along the riverfront, a round of golf or a day of yard work, wraparound sunglasses cut both the wind and the blowing grit.`,
      },
      { h: 'Omaha days that strain the eyes' },
      {
        list: [
          `Office towers downtown and in the western business parks, where screen work fills the day.`,
          `Long nights in a cold, dry arena or a packed ballpark for the College World Series in June.`,
          `Hospital and clinic shifts around the medical campuses in midtown.`,
          `Driving Interstate 80 or 680 at dusk with the heat or AC running.`,
          `Fall harvest across eastern Nebraska and western Iowa, when field dust rides the wind into town.`,
        ],
      },
      { h: 'Keeping eye drops in an Omaha car' },
      {
        p: `Quell’s label says {storage}. An Omaha car parked in the sun on a 90-degree afternoon can climb past the top of that range, and a January night in the driveway sits below the bottom of it. Keep the bottle in your bag and bring it inside. [Can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car) covers what to check if one got too warm.`,
      },
      { h: 'Where Quell fits' },
      {
        p: `The Uses section says: {uses}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and it’s preservative-free, with {actives} as its active ingredients. Its directions are {directions}. The full panel, including the warning for people with egg or bird allergies, is on the [Drug Facts page](/drug-facts).`,
      },
      {
        p: `If your eyes stay uncomfortable after a week or two of better habits, see an eye doctor; the label also tells you when to stop: {stopUse}`,
      },
      { h: 'Getting Quell delivered in Omaha' },
      {
        p: `Orders ship from Brentwood, Tennessee to any Nebraska address. Shipping is {shipping}, and {freeBottles} bottles ship free. There are no promo codes to hunt for and no subscription. No delivery date is promised. The [Omaha page](/eye-drops/omaha-ne) and the [Nebraska page](/eye-drops/state/nebraska) list local details.`,
      },
    ],
    faq: [
      {
        q: `Why are my eyes dry in Omaha when it’s so humid?`,
        a: `Because most of the day is spent indoors in air-conditioned air, which is drier and keeps moving. A vent blowing on your face speeds evaporation from the tear film even when the outdoor air is muggy.`,
      },
      {
        q: `What is the windiest month in Omaha?`,
        a: `April, according to NOAA’s Comparative Climatic Data wind table for Eppley Airfield. August is the calmest month on the same table.`,
      },
      {
        q: `How humid is Omaha in the summer?`,
        a: `NOAA’s humidity table gives Omaha an average morning relative humidity of 85 percent in July and 87 percent in August, with afternoons lower as the day heats up.`,
      },
      {
        q: `Does Quell ship to Omaha, NE?`,
        a: `Yes. Quell ships to Omaha and the rest of Nebraska for {shipping} per order, or free on {freeBottles} or more bottles, and no arrival date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-13 for dry-eyes-in-wichita:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00003928.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00003928.csv
   *   (WICHITA: Jul high 92.6 F, Aug 91.0; 64.9 days at or above 90 F; 12.4 days at
   *   or above 100 F; Jan high 43.9, low 22.5; annual precip 34.31 in; May wettest
   *   5.17 in; Jan 0.85 in; snow 12.7 in; heating degree days 4,413.6, cooling 1,773.6)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (Wichita afternoon RH: Jul 50, Aug 51, Apr 53, Mar 54; annual morning 80,
   *   afternoon 55)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (Wichita annual mean wind ranks 20th of 265 stations; April windiest, August
   *   calmest)
   * - https://www.kansascommerce.gov/?p=20785
   *   (Kansas Department of Commerce: Wichita "recognized globally as the Air Capital
   *   of the World"; Kansas delivers approximately one-third of all general aviation
   *   planes built in the U.S.; B-29s built in Wichita in the 1940s)
   */
  {
    slug: 'dry-eyes-in-wichita',
    title: 'Dry eyes in Wichita, Kansas',
    description:
      'Steady Kansas wind, 65 days a year at 90°F or more and long shifts on the plant floor: why Wichita eyes dry out, by NOAA’s figures.',
    category: 'local',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Wichita dries eyes with wind and heat. NOAA’s wind records put the city among the 20 windiest of about 265 major weather stations, and its normals show roughly 65 days a year at 90°F or hotter, when air conditioning runs nonstop. Wear wraparound sunglasses outside, keep vents and fans off your face, blink fully during screen and inspection work, and use a lubricating drop as labeled.`,
      },
      { h: 'How windy is Wichita?' },
      {
        p: `NOAA’s Comparative Climatic Data table of average wind speeds covers about 265 weather stations across the US and its territories. Wichita’s airport station ranks 20th, windier on average than Omaha, Kansas City or Tulsa. Within the year, April is the windiest month on average and August the calmest, though no month is truly still.`,
      },
      {
        p: `A steady breeze matters to eyes because moving air carries moisture away from the tear film faster than still air. You may not notice a 15-minute walk across a parking lot, but a full afternoon at a ballgame, on a construction site or on a riding mower adds up. The habit that helps most is simple: glasses that wrap around the side so the wind can’t reach the eye surface directly.`,
      },
      { h: 'Summer heat and air conditioning' },
      {
        p: `NOAA’s 1991 to 2020 normals for Wichita’s airport show July averaging a high of 92.6°F and August 91.0°F. About 65 days a year reach 90°F, and about 12 reach 100°F. Cooling degree days, a measure of how much air conditioning a place needs, total about 1,770 a year, high for a city that also has real winters.`,
      },
      {
        p: `That heat sends people indoors and into cars, where AC is always on. Air conditioners dry the air as they cool it, and a vent pointed at your face doubles the effect. The afternoon humidity table backs up the feeling: Wichita’s July afternoons average 50 percent relative humidity, the lowest of the year, with August close behind at 51 percent.`,
      },
      {
        list: [
          `Aim the car vents at your chest and hands when you pull out of a hot parking lot.`,
          `Shift a desk fan so it blows across you rather than into your face.`,
          `Take water with you; a dry mouth on a hot day often comes with dry-feeling eyes.`,
          `Step out of the glare for a few minutes every hour if you work outside.`,
        ],
      },
      { h: 'The Air Capital and eyes on the job' },
      {
        p: `The Kansas Department of Commerce describes Wichita as recognized globally as the Air Capital of the World, and says Kansas delivers about one-third of all general aviation planes built in the US. The same page notes that B-29 bombers rolled off Wichita assembly lines in the 1940s, and the city’s plants have built airframes and parts ever since.`,
      },
      {
        p: `Many of those jobs are hard on the eyes. Inspectors and assemblers stare at close detail for long stretches, which cuts blink rate. Big hangars and plant floors rely on large ventilation systems that keep air moving. Composite sanding and drilling create fine dust, and the required safety glasses can trap warm air or channel a draft. A few habits fit into most shifts:`,
      },
      {
        list: [
          `Keep the safety glasses on; they’re the main barrier between debris and your eyes.`,
          `Wash your hands before touching your eyes, especially after handling sealants, fluids or composite dust.`,
          `On breaks, look across the floor at something distant and blink slowly several times.`,
          `If something gets into your eye on the job, use the plant’s eyewash station and report it rather than reaching for a lubricating drop.`,
        ],
      },
      { h: 'Wichita winters and spring storms' },
      {
        p: `Winters are milder than in Nebraska or the Dakotas, with a January high averaging 43.9°F and a low of 22.5°F, and normal snowfall around 12.7 inches. Still, about 4,410 heating degree days a year mean the furnace runs from November into March. March and April afternoons, before the May storm season brings the year’s wettest month, average around 53 to 54 percent humidity. Late winter and early spring, when the wind is high and the grass is still dormant, are prime time for dust and dry eyes.`,
      },
      { h: 'Where to keep eye drops in Wichita' },
      {
        p: `Quell’s storage line reads {storage}. A closed car in a Wichita summer climbs far past that, so the glove box and the dashboard are out. Keep the bottle in a lunch bag, a locker, a desk drawer or your home. [Can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car) has more on checking a bottle that got too warm.`,
      },
      { h: 'What Quell is for' },
      {
        p: `The label’s Uses: {uses}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The directions say {directions}. Active ingredients are {actives}. Read the whole [Drug Facts](/drug-facts) panel before your first drop.`,
      },
      {
        p: `Dryness that keeps returning, pain, or blurry vision that doesn’t clear with a blink are reasons to see an eye doctor. The label puts it this way: {stopUse} [Dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers) has more for people on job sites.`,
      },
      { h: 'Ordering Quell in Wichita' },
      {
        p: `Quell ships to Kansas from Brentwood, Tennessee for {shipping} per order, and {freeBottles} bottles ship free. You can check out as a guest, and orders aren’t tied to a subscription. No delivery date is promised. The [Wichita page](/eye-drops/wichita-ks) and the [Kansas page](/eye-drops/state/kansas) have more local details.`,
      },
    ],
    faq: [
      {
        q: `Why do my eyes get so dry in Wichita?`,
        a: `Wind and air conditioning do most of it. Wichita ranks among the 20 windiest of about 265 stations in NOAA’s wind table, and its long, hot summers keep people in dry, air-conditioned rooms and cars.`,
      },
      {
        q: `Why is Wichita called the Air Capital of the World?`,
        a: `Because of its aircraft industry. The Kansas Department of Commerce says Wichita is recognized globally by that name, and that Kansas delivers about one-third of all general aviation planes built in the US.`,
      },
      {
        q: `How many 100-degree days does Wichita get?`,
        a: `About 12 a year, according to NOAA’s 1991 to 2020 normals for the Wichita airport, which also show about 65 days a year at 90°F or above.`,
      },
      {
        q: `Can I get Quell shipped to Wichita, KS?`,
        a: `Yes. Quell ships to any Kansas address for {shipping} per order, or free with {freeBottles} or more bottles. No delivery date is promised, so reorder before you run low.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-13 for dry-eyes-in-amarillo:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00023047.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00023047.csv
   *   (AMARILLO: station elevation 1093.3 m; annual precip 19.66 in; Feb 0.53 in,
   *   Jan 0.71, Dec 0.71; Jun-Aug 8.53 in; Jul high 92.9 F; 72.4 days at or above
   *   90 F; 8.9 days at or above 100 F; Jan high 52.2, low 24.9; 107.9 nights at or
   *   below 32 F; snow 17.2 in)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (Amarillo afternoon RH: Apr 38, Mar 41, annual 44; annual morning 73)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (Amarillo annual mean ties Dodge City, KS for 6th of 265 stations; the only
   *   higher station in the lower 48 is Mt. Washington, NH; Lubbock ranks below it;
   *   April windiest, August calmest)
   */
  {
    slug: 'dry-eyes-in-amarillo',
    title: 'Dry eyes in Amarillo, Texas',
    description:
      'One of the windiest weather stations in the lower 48, a 3,590-foot plateau and April afternoons near 38 percent humidity: Amarillo eyes, explained.',
    category: 'local',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Amarillo is hard on eyes because the wind almost never stops. NOAA’s wind records rank the city’s airport among the windiest weather stations in the country, and spring afternoons there average under 40 percent humidity. Add high plains sun and blowing dust, and the tear film evaporates quickly. Wraparound sunglasses, vents aimed away from your face, a humidifier at home and a lubricating drop used as labeled all help.`,
      },
      { h: 'How windy is Amarillo, really?' },
      {
        p: `NOAA’s Comparative Climatic Data table of average wind speeds covers about 265 weather stations through 2023. Amarillo ties Dodge City, Kansas, for sixth place. Every station ranked above it sits on an island, on the Alaska coast, in the Pacific, or on the summit of Mount Washington in New Hampshire. Among ordinary towns in the lower 48, nowhere on the list is windier on average. Lubbock, about two hours south, ranks 17th on the same list.`,
      },
      {
        p: `April is Amarillo’s windiest month, and August its calmest, but even the calmest month here averages more wind than most cities manage in their windiest. For eyes, that means there’s rarely a day off from moving air pulling water out of the tear film.`,
      },
      { h: 'Altitude and the dry Panhandle air' },
      {
        p: `NOAA lists the Amarillo airport station at 1,093 meters, about 3,590 feet above sea level, on the flat High Plains of the Panhandle. The normals show just 19.66 inches of precipitation a year, and February averages only 0.53 inches. Most of the year’s rain comes in summer thunderstorms, with 8.53 inches falling from June through August.`,
      },
      {
        p: `Humidity follows the same pattern. NOAA’s relative humidity table gives Amarillo an average afternoon reading of 44 percent across the year, falling to 41 percent in March and 38 percent in April. Those driest afternoons line up exactly with the windiest season. Together, dry air and strong wind make March and April the hardest months on Amarillo eyes.`,
      },
      { h: 'Dust, fields and feedyards' },
      {
        p: `The country around Amarillo is wheat, cotton, sorghum and cattle, and when a spring wind crosses bare fields, dust follows it into town. Grit in the eyes feels like dryness, and rubbing it only grinds it across the surface. On dusty days:`,
      },
      {
        list: [
          `Wear close-fitting sunglasses or safety glasses outside; a wraparound style blocks the side wind.`,
          `Rinse your face and wash your hands when you come in before touching your eyes.`,
          `Keep car windows up and set the air to recirculate when the sky turns brown.`,
          `Change the furnace and AC filters on schedule so dust isn’t recirculated indoors.`,
          `If grit seems stuck, or your eye hurts, see an eye doctor rather than waiting it out.`,
        ],
      },
      { h: 'Hot summers, cold snaps and heated rooms' },
      {
        p: `Amarillo summers are hot but dry. The normals show July averaging a high of 92.9°F, about 72 days a year at 90°F or hotter, and about nine days at 100°F. Air conditioning runs for months, and it dries already-dry air further. Winters bring a January high near 52°F, normal snowfall of 17.2 inches and roughly 108 nights at or below freezing. Cold fronts can drop the temperature sharply in a few hours, and the furnace kicks on hard, which dries the air inside again.`,
      },
      { h: 'Amarillo life that wears on the eyes' },
      {
        list: [
          `Long drives on Interstate 40 and Interstate 27, often into a low sun with the AC on.`,
          `Hiking or riding in Palo Duro Canyon, where the canyon rim catches the full wind.`,
          `Shifts at feedyards, grain elevators and plants around the city, outdoors in all weather.`,
          `Friday night football under the lights with a north wind blowing across the stands.`,
          `Late-night study at West Texas A&M in nearby Canyon or at Amarillo College.`,
        ],
      },
      { h: 'Keeping a bottle out of the heat' },
      {
        p: `Quell’s label says {storage}. An Amarillo pickup parked in a July sun runs far above that, and a January night can drop it below. Keep the bottle in your house, your lunch box or a pocket, not the dashboard or the toolbox. If a bottle did sit in the heat, look before you use it: {doNotUse}.`,
      },
      { h: 'Quell and the Panhandle' },
      {
        p: `The label’s Uses read: {uses}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which suits a climate where wind and dry air do most of the work. The directions are {directions}, and the active ingredients are {actives}. Read the [Drug Facts](/drug-facts) panel before use.`,
      },
      {
        p: `Lubricating drops are for everyday dryness. Pain, light sensitivity, vision that changes, or irritation that won’t settle are matters for an eye doctor. [Dry eyes in Lubbock](/guides/dry-eyes-in-lubbock) covers the South Plains, and [dry air, wind and altitude](/guides/dry-air-wind-and-altitude) explains why each of those speeds tear loss.`,
      },
      { h: 'Ordering Quell to Amarillo' },
      {
        p: `Quell ships from Brentwood, Tennessee to Amarillo and the rest of Texas. Shipping is {shipping}, and {freeBottles} bottles ship free. No delivery date is promised. See the [Amarillo page](/eye-drops/amarillo-tx) and the [Texas page](/eye-drops/state/texas) for local details.`,
      },
    ],
    faq: [
      {
        q: `Why are my eyes so dry in Amarillo?`,
        a: `Mainly wind and low humidity. NOAA ranks Amarillo among the windiest weather stations in the country, and its April afternoons average 38 percent relative humidity, so the tear film evaporates fast.`,
      },
      {
        q: `Is Amarillo the windiest city in Texas?`,
        a: `In NOAA’s Comparative Climatic Data wind table, Amarillo has the highest average wind speed of any Texas station listed, tying Dodge City, Kansas, for sixth among about 265 stations nationwide.`,
      },
      {
        q: `What is the elevation of Amarillo, Texas?`,
        a: `NOAA lists the Amarillo airport weather station at 1,093 meters, or about 3,590 feet above sea level, on the High Plains of the Texas Panhandle.`,
      },
      {
        q: `Does Quell ship to Amarillo, TX?`,
        a: `Yes. Quell ships to Amarillo for {shipping} per order, or free when you order {freeBottles} or more bottles. No delivery date is promised.`,
      },
    ],
  },
  {
    slug: 'can-eye-drops-freeze-in-a-cold-car',
    title: 'Can eye drops freeze in a cold car?',
    description:
      'A parked car in winter drops far below the storage range on Quell’s label. Where to keep drops in the cold, and what to do if a bottle froze.',
    category: 'seasonal',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Yes. Eye drops are mostly water, and a car parked through a freezing night can get cold enough to freeze them. Even without ice, a cold car takes a bottle below the range on Quell’s label, which says {storage}. Bring your drops inside with you in winter. If a bottle did freeze or sat in the cold, let it warm up on its own, look at it, and ask a pharmacist before using it if anything seems off.`,
      },
      { h: 'Do eye drops freeze?' },
      {
        p: `Water freezes at 32°F, and most of the volume in a lubricating eye drop is water. Dissolved ingredients and oils can shift the exact point a little, so a bottle may turn slushy, partly solid or stay liquid on a given night. Nobody can tell you from the outside of the bottle exactly when that happens, and this site won’t guess at a number the label doesn’t give.`,
      },
      {
        p: `What the label does give is a range. The storage line on Quell’s Drug Facts panel reads {storage}. The bottom of that range is well above freezing. So the useful question isn’t only whether a bottle turned to ice. It’s whether it spent time colder than the label allows, and in a parked car on a winter night, it almost certainly did.`,
      },
      { h: 'How cold does a parked car get?' },
      {
        p: `A parked car has no heat source of its own. Once the engine is off, the cabin cools toward the outdoor temperature over a few hours, and on a clear, calm night it can end up close to it. The trunk, the glove box and a door pocket all follow the same slide. A purse or gym bag left on the seat slows the cooling a little but doesn’t stop it.`,
      },
      {
        p: `That’s the winter twin of a better-known problem. In summer, a closed car in the sun climbs far above the top of the range, which [Can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car) covers. In winter the risk runs the other way, and it lasts longer: a car can sit below the label’s range from evening until mid-morning.`,
      },
      { h: 'Can you use eye drops after they freeze?' },
      {
        p: `The label doesn’t say, and this guide won’t fill that gap with a yes. Freezing can push on the bottle and its tip, and water and oil-based ingredients can behave differently as they cool and warm. Here’s a careful way to handle a bottle that froze or got very cold:`,
      },
      {
        list: [
          `Bring it inside and let it come back to room temperature by itself. Don’t run it under hot water, set it on a heater vent or put it in a microwave.`,
          `Once it’s warm, look at it in good light. Quell’s label notes: {milky}. {appearance} Compare it with how it looked before the cold.`,
          `Check the label’s Do not use line: {doNotUse}. If the color has changed, don’t use it.`,
          `Look for cracks, a leaking tip or a cap that no longer closes cleanly.`,
          `If anything looks different from when you opened it, or you simply aren’t sure, ask a pharmacist before putting it in your eye.`,
        ],
      },
      {
        p: `When in doubt, start a fresh bottle. A replacement costs far less than a worry about what went into your eye.`,
      },
      { h: 'Where to keep eye drops in winter' },
      {
        list: [
          `In the house, in a drawer or cabinet away from the furnace register and the bathroom’s steam.`,
          `In an inside coat pocket or a bag you carry indoors, where body warmth keeps it from getting very cold.`,
          `At work, in a desk drawer or locker rather than the truck.`,
          `On a road trip, in the cabin with you while you drive, then inside the motel or house each night. [Eye drops for a winter road trip](/guides/eye-drops-for-a-winter-road-trip) covers longer drives.`,
          `Not on a windowsill, in a garage, or in a mudroom that isn’t heated.`,
        ],
      },
      { h: 'Will eye drops freeze in the mail?' },
      {
        p: `A package can spend time in unheated trucks and on cold doorsteps. Quell ships from Brentwood, Tennessee to US addresses, and no delivery date is promised, so there’s no way to time an arrival around a cold snap. Bring the box inside as soon as you can, let it warm before you open it, and look at the bottle before first use. [Eye drops shipped in hot or cold weather](/guides/eye-drops-shipped-in-hot-or-cold-weather) has more on deliveries.`,
      },
      {
        p: `If an order arrives with a cracked bottle, a leak or a broken seal, it’s replaced; contact {company} at {phone}, {hours}. An unopened bottle you’d rather not use can be refunded within {returnDays} days of delivery without being sent back.`,
      },
      { h: 'Can you put eye drops in the freezer?' },
      {
        p: `No. Nothing on Quell’s label calls for freezing or even refrigerating it, and the freezer is far below its range. [Should eye drops be refrigerated?](/guides/should-eye-drops-be-refrigerated) explains why a cold bottle isn’t automatically a better one. If you like the feel of a cool drop, that’s a question for your pharmacist, not the freezer.`,
      },
      { h: 'Cold weather and your eyes' },
      {
        p: `Cold, windy air and dry heated rooms are both hard on the tear film, so winter is also when many people reach for drops more often. Keep using them as labeled: {directions}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. If you need more than the label’s directions to stay comfortable, or your eyes hurt or your vision changes, see an eye doctor. The full label is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: `Will eye drops freeze in a car on a winter night?`,
        a: `They can. Eye drops are mostly water, and a parked car on a freezing night can cool to near the outdoor temperature, well below the {storage} range on Quell’s label.`,
      },
      {
        q: `Can you use eye drops after they freeze?`,
        a: `Quell’s label doesn’t cover it. Let the bottle warm on its own, check for a color change, cracks or leaks, and ask a pharmacist before using it if anything seems different.`,
      },
      {
        q: `How do I thaw frozen eye drops?`,
        a: `Bring the bottle indoors and let it reach room temperature by itself. Avoid hot water, heaters and microwaves, then look it over before deciding whether to use it.`,
      },
      {
        q: `Can you put eye drops in the freezer?`,
        a: `No. Quell’s label says {storage}, and a freezer sits far below that range, so keep the bottle at room temperature instead.`,
      },
    ],
  },
  {
    slug: 'the-tear-films-mucus-layer',
    title: 'The tear film’s mucus layer, explained',
    description:
      'The mucus layer is the tear film’s innermost coat, helping watery tears spread evenly and cling to the eye. What it does, in plain terms.',
    category: 'formula',
    addedOn: '2026-11-13',
    body: [
      {
        p: `The mucus layer is the innermost of the tear film’s three layers, lying right against the surface of the eye. Its job is to help the watery tears above it spread out in a smooth, even sheet and stay on the eye instead of beading up and running off. Blinking keeps it spread. Quell isn’t described as acting on this layer; its approved wording is about the oil layer on top.`,
      },
      { h: 'Where the mucus layer sits' },
      {
        p: `Picture the tear film from the eye outward. First comes the mucus layer, touching the eye itself. Next is the watery middle, which holds most of the film’s volume. On the outside is a thin layer of oil that slows evaporation. [What is the tear film?](/guides/what-is-the-tear-film) walks through all three at once; this page stays with the first.`,
      },
      {
        p: `The layers aren’t separate sheets stacked like paper. They blend at their edges and work as one film. Still, naming them separately is useful, because each has its own role, and something that affects one part can show up as a feeling of dryness overall.`,
      },
      { h: 'What does the mucus layer of the tear film do?' },
      {
        p: `Think about pouring water onto a freshly waxed car hood. It beads into droplets and rolls away. Pour the same water onto a sheet of paper towel and it spreads out and soaks in. The surface underneath decides how the water behaves.`,
      },
      {
        p: `The mucus layer makes the eye’s surface behave more like the paper towel than the waxed hood. It gives watery tears something to hold on to, so they form a continuous film rather than islands of moisture with dry patches between them. In everyday terms it does three things:`,
      },
      {
        list: [
          `Helps tears spread evenly across the whole visible surface of the eye.`,
          `Helps that film stay put between blinks rather than sliding off.`,
          `Gives the outer layers a stable base to sit on.`,
        ],
      },
      { h: 'Is it the same as the mucus in the corner of your eye?' },
      {
        p: `Not quite. The mucus layer is a very thin, clear part of a healthy tear film, and you can’t see it. The crust or strands people find in the corners of their eyes after sleep are a mix of tear components, oil, dust and skin cells that collect while the eyes are closed. A little of that in the morning is common. Lots of thick or colored discharge, or discharge with pain, is a reason to see an eye doctor rather than wipe and wait.`,
      },
      { h: 'How blinking spreads it' },
      {
        p: `Each blink works like a squeegee and a paintbrush at once. As the lid comes down, it sweeps the old film toward the inner corner; as it goes back up, it lays down a fresh, even coat. The mucus layer is part of what lets that new coat cling smoothly. [How blinking spreads tears across the eye](/guides/how-blinking-spreads-tears) covers the motion in detail.`,
      },
      {
        p: `That’s why half-blinks matter. When you stare at a phone or a page, many blinks don’t close all the way, and the lower part of the eye doesn’t get a full fresh coat. Making a point of a few slow, complete blinks every so often gives the whole film, mucus layer included, a chance to reset.`,
      },
      { h: 'What you notice when the film doesn’t spread evenly' },
      {
        list: [
          `Vision that blurs a little and then sharpens right after a blink.`,
          `A gritty or sandy feeling, as if something small is in the eye.`,
          `Stinging that comes and goes over the course of the day.`,
          `Eyes that water suddenly, then feel dry again soon after.`,
        ],
      },
      {
        p: `Those feelings don’t point to one layer in particular. An uneven film can come from too little water, too little oil holding the water in, or a surface that tears don’t cling to well. Only an eye exam can sort out which, and that’s the eye doctor’s job, not a drop’s.`,
      },
      { h: 'Habits that are kind to the whole tear film' },
      {
        list: [
          `Avoid rubbing your eyes. Rubbing pushes the film around unevenly and can carry dirt in from your fingers.`,
          `Wash your hands before touching your eyes or putting in drops.`,
          `Keep fans, car vents and heater vents off your face so the film isn’t dried from the outside.`,
          `Take screen breaks and blink fully a few times.`,
          `Remove eye makeup gently at night so it doesn’t migrate into the eye.`,
        ],
      },
      { h: 'Where Quell fits, and where it doesn’t' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. That’s the outer layer, not the mucus layer, and this site doesn’t claim Quell does anything to the mucus layer itself. [The tear film’s oil layer](/guides/the-tear-films-oil-layer) explains the part Quell is built around.`,
      },
      {
        p: `What the product is officially for is in its Uses section: {uses}. The active ingredients are {actives}, and the directions are {directions}. Read the complete [Drug Facts](/drug-facts), including the caution: {warnings}.`,
      },
      { h: 'Questions for your eye doctor' },
      {
        p: `If your eyes feel dry often, an eye doctor can look at how your tear film spreads and how long it holds together between blinks. It helps to bring notes: when the dryness starts, what you’re doing at the time, and which drops you’ve tried. [Questions to ask your eye doctor about dry eyes](/guides/questions-to-ask-your-eye-doctor) has a list to start from.`,
      },
    ],
    faq: [
      {
        q: `What does the mucus layer of the tear film do?`,
        a: `It lies against the eye and helps the watery part of the tear film spread evenly and stay on the surface between blinks, rather than beading up.`,
      },
      {
        q: `Which layer of the tear film is closest to the eye?`,
        a: `The mucus layer. Above it is the watery layer, which holds most of the film, and on the outside is a thin oil layer that slows evaporation.`,
      },
      {
        q: `Is eye discharge the same as the tear film’s mucus layer?`,
        a: `No. The mucus layer is a thin, invisible part of the tear film. Morning crust is a mix of tear components, oil, dust and skin cells, and heavy or colored discharge is worth showing an eye doctor.`,
      },
      {
        q: `Does Quell work on the mucus layer?`,
        a: `Quell’s approved description is about the outer layer: it is designed to reinforce the tear film’s oil layer to help reduce moisture loss. This site makes no claim about the mucus layer.`,
      },
    ],
  },
  {
    slug: 'the-tear-films-water-layer',
    title: 'The tear film’s water layer, explained',
    description:
      'The watery middle layer is most of your tear film, and it’s the part that evaporates. What dries it out, and why the oil on top matters.',
    category: 'formula',
    addedOn: '2026-11-13',
    body: [
      {
        p: `The water layer, also called the aqueous layer, is the thick middle of the tear film and holds most of its volume. It keeps the surface of the eye wet and smooth and washes away dust. It’s also the part that evaporates: dry, windy, heated or air-conditioned air pulls it off the eye faster, and the thin oil layer above it is what slows that loss.`,
      },
      { h: 'The middle of three layers' },
      {
        p: `From the eye outward, the tear film runs mucus, then water, then oil. The mucus coat underneath helps the water spread and cling. The oil on top acts like a lid. The water sits between them and does most of the visible work: when you say your eyes are watering, this is the layer you mean.`,
      },
      {
        p: `“Aqueous” simply means watery. You’ll see the word on some eye product cartons and in articles about tears. Quell’s own carton uses it in a before-and-after illustration, and the “before” caption reads: {oilBefore}.`,
      },
      { h: 'What the water layer does' },
      {
        list: [
          `Keeps the front of the eye moist, which living tissue exposed to air needs.`,
          `Gives light a smooth surface to pass through, which is part of why vision is sharpest right after a blink.`,
          `Rinses away dust, pollen and small bits of debris toward the inner corner, where tears drain.`,
          `Carries a fresh supply across the eye with every complete blink.`,
        ],
      },
      { h: 'Why does the water layer evaporate?' },
      {
        p: `Any water exposed to air evaporates, and the tear film is spread thin across a warm surface, which makes it easy to lose. Between blinks it thins steadily. How fast it goes depends mostly on the air around your face:`,
      },
      {
        list: [
          `Dry air, from winter heating, desert climates and airplane cabins, takes moisture faster than humid air.`,
          `Moving air, from wind, a ceiling fan, a car vent or a bike ride, carries evaporated moisture away and keeps the process going.`,
          `Heat near the face, from a fireplace, space heater or hair dryer, speeds it up further.`,
          `Air conditioning dries the air while it cools it, so a cold office can be as hard on the eyes as a warm one.`,
        ],
      },
      {
        p: `Blinking matters as much as the air. Screens and close reading reduce how often you blink, so the water layer sits exposed longer before a fresh coat arrives. [Screens and your tear film](/guides/screens-and-your-tear-film) covers that side.`,
      },
      { h: 'Why the oil layer matters for keeping water in' },
      {
        p: `If the water layer were left open to the air, it would disappear quickly. The thin oil layer floating on top slows that down, much as a film of oil on a bowl of broth keeps the broth from cooling and steaming off as fast. When the oil layer runs thin, the water underneath evaporates sooner, and the eye can feel dry even though it’s making tears.`,
      },
      {
        p: `That’s the reasoning behind Quell’s design. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and the carton’s “after” caption reads: {oilAfter}. [The tear film’s oil layer](/guides/the-tear-films-oil-layer) goes into that layer in detail, and [what is meibum?](/guides/what-is-meibum) explains where its oil comes from.`,
      },
      { h: 'Why do my eyes water if they’re dry?' },
      {
        p: `It sounds backward, but it’s common. When the surface of the eye gets dry or irritated, it can respond with a rush of watery tears. That reflex flood is mostly water, without the balance of the full three-layer film, so it spills over the lid and down the cheek instead of settling into an even coat. A few minutes later the eye can feel dry again.`,
      },
      {
        p: `Cold wind is a classic trigger, which is why eyes stream on a winter walk and then feel scratchy indoors. Watery eyes that come with pain, vision changes, or discharge are a different matter and belong with an eye doctor. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists them.`,
      },
      { h: 'Ways to keep more water on the eye' },
      {
        list: [
          `Add moisture to dry rooms with a clean humidifier, especially the bedroom.`,
          `Point vents and fans away from your face at home, at work and in the car.`,
          `Wear wraparound glasses outdoors on windy days.`,
          `Blink fully on purpose a few times when you look up from a screen.`,
          `Drink water through the day, since the rest of your body dries out in the same air.`,
        ],
      },
      { h: 'What the label says' },
      {
        p: `A lubricating drop adds to the tear film from the outside. Quell’s Uses read: {uses}. Its active ingredients are {actives}, and its directions are {directions}. Because the formula contains emu oil, read the warning on the [Drug Facts page](/drug-facts) first: {warnings}.`,
      },
      {
        p: `The label also sets the limit on self-care: {stopUse} An eye doctor can measure how much water your eyes make and how quickly the film breaks up, which no drop can tell you.`,
      },
    ],
    faq: [
      {
        q: `What is the aqueous layer of the tear film?`,
        a: `It’s the watery middle layer, which holds most of the tear film’s volume, keeps the eye’s surface moist and rinses away dust. “Aqueous” just means watery.`,
      },
      {
        q: `What makes the water layer of the tear film evaporate?`,
        a: `Dry air, moving air and heat near the face, plus fewer blinks during screen work. A thin oil layer on top normally slows the loss.`,
      },
      {
        q: `Why do my eyes water if they’re dry?`,
        a: `A dry or irritated surface can trigger a reflex rush of watery tears. That flood lacks the balance of the full tear film, so it spills over instead of settling, and the dry feeling returns.`,
      },
      {
        q: `Does Quell add to the water layer or the oil layer?`,
        a: `Quell’s approved wording is that it is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The site doesn’t describe it as a replacement for the water layer.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-farmers',
    title: 'Dry eyes for farmers',
    description:
      'Field dust, steady wind, cab heat and AC, and harvest days that run past dark: why farmers’ eyes dry out, and practical fixes for each season.',
    category: 'using',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Farm work dries eyes from several directions at once: wind across open ground, dust from tillage and harvest, cab heaters and air conditioners blowing at your face, and long days of staring at a row or a monitor without blinking much. Glasses that seal out dust, vents aimed away from your eyes, clean hands, and a lubricating drop used exactly as labeled are the practical answers.`,
      },
      { h: 'Why do farmers get dry eyes?' },
      {
        p: `Few jobs put eyes in as many drying conditions in one day. A morning might start in a cold shop, move to an open field in a stiff breeze, and end in a closed cab with the climate control running for ten hours. Moving air and dry air both speed evaporation from the tear film, and dust adds a gritty, scratchy feeling on top.`,
      },
      {
        p: `Concentration counts too. Watching a planter monitor, following a guidance line or keeping a header level asks for steady focus, and steady focus reduces blinking. Every skipped blink leaves the eye’s surface exposed a little longer.`,
      },
      { h: 'Planting season: wind and bare ground' },
      {
        p: `Spring work often happens on bare, freshly worked soil, in some of the windiest weeks of the year. Dust lifts off disked fields and blows across roads and yards. If you’re outside filling a planter, checking seed depth or walking a field:`,
      },
      {
        list: [
          `Wear wraparound safety glasses or sunglasses with side coverage; flat lenses let wind and grit slip around the edges.`,
          `Stand upwind of the dust when you can, especially when filling seed or fertilizer boxes.`,
          `Rinse your face and wash your hands before touching your eyes.`,
          `Resist rubbing. Rubbing grinds grit across the surface and can scratch it.`,
        ],
      },
      { h: 'In the tractor or combine cab' },
      {
        p: `A modern cab keeps out much of the dust, but it brings its own trouble. Air conditioning in summer and heat in fall both dry the air, and many cab vents sit at head height, aimed squarely at the operator. Over a long shift that dry stream wears on the tear film.`,
      },
      {
        list: [
          `Angle the vents toward your chest, the floor or the windows rather than your face.`,
          `Change or clean cab air filters on the schedule in the operator’s manual, so the fan isn’t pushing dust back in.`,
          `Wipe down the dash and seat now and then; dust that settles inside gets stirred up every time the door opens.`,
          `Every so often, look away from the monitor to the far end of the field and blink slowly a few times.`,
        ],
      },
      { h: 'Harvest days and grain dust' },
      {
        p: `Harvest stacks long hours on top of dust. Combines throw chaff, grain carts kick up field roads, and unloading at the bin or elevator puts fine dust in the air right at face level. Late nights mean tired eyes, and tired eyes blink less fully.`,
      },
      {
        p: `Grain bins call for extra care. Entering one carries serious hazards, including engulfment and stale air, so follow your operation’s safety procedures and wear the respirator and eye protection they call for. A lubricating drop has no place in that safety plan; it’s for comfort later, after you’re out, your hands are clean, and the dust has settled.`,
      },
      { h: 'Livestock barns and shops' },
      {
        p: `Indoor work has its own drying conditions. Barn ventilation fans move a lot of air, bedding and feed raise dust, and a heated shop in January can feel desert-dry. Grinding, welding and cutting send particles flying, which is a job for proper safety glasses or a face shield, not drops.`,
      },
      { h: 'If something gets in your eye' },
      {
        p: `Dust and chaff are a daily nuisance, but a chemical splash or a lodged particle is an emergency. For a splash of a farm chemical, follow the first aid directions on that product’s label and get medical help; many labels list a poison control number for that reason. For metal, wood or anything you can’t blink out, don’t dig at it, and see a doctor promptly. A lubricating drop isn’t an eyewash and isn’t meant for either situation.`,
      },
      { h: 'Keeping eye drops in a truck or tractor' },
      {
        p: `Quell’s label says {storage}. A pickup or cab parked in a July field runs well above that, and an unheated shop in winter falls below it. Keep the bottle in a jacket you wear, in a lunch bag you bring inside, or in the house, rather than on the dash or in the toolbox. [Dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers) covers job-site storage in more detail.`,
      },
      {
        p: `Hand hygiene matters more on a farm than almost anywhere. The label’s tip line reads {tip}. Wash up before you open the bottle, and keep the cap on between uses so dust can’t settle on it.`,
      },
      { h: 'Using Quell during farm work' },
      {
        p: `The label’s Uses read: {uses}. Directions are {directions}, so plan them around natural breaks: before you head out, at lunch, and after the day’s work. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Read the full [Drug Facts](/drug-facts) first, including the warning about egg or bird allergies.`,
      },
      {
        p: `If your eyes stay irritated after a dusty stretch, or you notice pain or a change in vision, stop and see an eye doctor. The label says it plainly: {stopUse} Rural delivery details are in [getting eye drops delivered to a rural address](/guides/eye-drops-delivered-to-a-rural-address).`,
      },
    ],
    faq: [
      {
        q: `Why do farmers get dry eyes?`,
        a: `Farm days combine wind, field and grain dust, dry cab air from heaters and air conditioners, and long stretches of focused work that cut blinking. Each of those speeds evaporation from the tear film.`,
      },
      {
        q: `How do I keep dust out of my eyes in a tractor cab?`,
        a: `Keep cab air filters changed on schedule, wipe down dust inside the cab, and aim vents away from your face. Wear wraparound glasses when you step outside into the dust.`,
      },
      {
        q: `Can I keep eye drops in my tractor?`,
        a: `Not for long in summer or winter. Quell’s label says {storage}, and a closed cab or an unheated shed falls outside that range, so carry the bottle with you or leave it in the house.`,
      },
      {
        q: `What should I do if grain dust gets in my eyes?`,
        a: `Get out of the dust, wash your hands, and let your eyes tear and blink it out without rubbing. If something feels stuck, or your eye hurts or your vision changes, see a doctor promptly.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-from-wearing-a-face-mask',
    title: 'Dry eyes from wearing a face mask',
    description:
      'A loose top edge sends warm breath up over your eyes all shift long. Why masks dry eyes, how to fit one better, and what helps on long days.',
    category: 'using',
    addedOn: '2026-11-13',
    body: [
      {
        p: `A face mask can dry your eyes when breath escapes out the top edge and flows up over them. Every exhale sends a stream of warm, moving air across the eye’s surface, and moving air speeds evaporation from the tear film. Pinching the nose wire snug, choosing a mask that fits, taking breaks and using a lubricating drop exactly as labeled usually make long mask days more comfortable.`,
      },
      { h: 'Why does wearing a mask dry out your eyes?' },
      {
        p: `When a mask fits loosely across the bridge of the nose, it works like a chimney. You breathe out, the air can’t pass through the fabric as easily as it can slip out the top, so a good share of it goes up and over your lower lids. Repeat that with every breath for a full shift and the eyes have been in a steady breeze for hours.`,
      },
      {
        p: `If you wear glasses, you already know the sign: fog. The same air that fogs lenses is flowing across your eyes. Fogging that comes and goes with every breath means the top edge is open.`,
      },
      { h: 'How to fit a mask so air doesn’t hit your eyes' },
      {
        list: [
          `Mold the nose wire. Press it down along both sides of your nose with two fingers, not just pinched in the middle.`,
          `Pick the right size. A mask that’s too wide leaves gaps under the eyes; one that’s too small pulls down and opens the top.`,
          `Pull it up before tightening. Set the top edge just below your lower lashes, then adjust the ear loops or straps.`,
          `Try the loop adjusters. Knotting ear loops or using a strap behind the head can draw the sides closer to the face.`,
          `Check with a breath test. Breathe out firmly; if you feel air on your eyes or see fog, reshape the wire and try again.`,
        ],
      },
      {
        p: `Glasses help as a second seal. Resting the frame on top of the mask’s upper edge can press it closer to your cheeks and redirect what does escape.`,
      },
      { h: 'Respirators at work' },
      {
        p: `If your job requires a tight-fitting respirator, such as an N95, the fit isn’t a matter of preference. Under OSHA’s respiratory protection standard, employers who require those respirators must have workers fit-tested, and a mask that passes a fit test leaks far less around the top. Don’t modify a work respirator to make it more comfortable; ask whoever runs your program about a different size or model.`,
      },
      { h: 'Long shifts in a mask' },
      {
        p: `Hospital staff, dental teams, lab workers, food processors, painters and construction crews can spend eight or more hours masked. Several things stack up over a shift like that:`,
      },
      {
        list: [
          `Breath flowing upward with every exhale.`,
          `Building ventilation that keeps air moving around the face.`,
          `Close work under bright lights, which reduces blinking.`,
          `Fewer chances to step away and rest the eyes.`,
        ],
      },
      {
        p: `Use the breaks you do get. When you take the mask off in a break room, blink fully several times, look at something across the room, and wash your hands before touching your face. [Dry eyes on long nursing shifts](/guides/dry-eyes-on-long-nursing-shifts) and [dry eyes for dental hygienists](/guides/dry-eyes-for-dental-hygienists) cover two of the most mask-heavy jobs.`,
      },
      { h: 'Masks in winter and on airplanes' },
      {
        p: `Cold-weather masks and scarves cause the same effect outdoors. A neck gaiter pulled up over the nose sends warm breath up into cold air, which can fog glasses and then freeze on lashes. On flights, cabin air is already dry, and a loose mask adds a breeze of its own. A snug top edge helps in both places.`,
      },
      { h: 'Using eye drops on mask days' },
      {
        p: `Plan drops for times when the mask comes off and your hands are clean: before the shift, at a meal break and after work. Quell’s directions are {directions}. The label’s tip reads {tip}, which matters in clinical and industrial settings where surfaces may be anything but clean.`,
      },
      {
        p: `The Uses section reads: {uses}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the problem breath blowing across the eye creates. The complete label is on the [Drug Facts page](/drug-facts). The label says {storage}, so a locker or a bag you carry beats a car on a hot or freezing day.`,
      },
      { h: 'When it’s more than mask dryness' },
      {
        p: `Dryness that keeps going on days you don’t wear a mask, eye pain, or vision that changes are reasons to see an eye doctor. The label’s stop-use advice: {stopUse} If your eyes still bother you after improving the fit, the [dry eye self-check](/self-check) can help you put your symptoms into words before an appointment. It’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: `Why does wearing a mask make my eyes dry?`,
        a: `A loose top edge lets your exhaled breath flow up over your eyes with every breath. That steady stream of moving air speeds evaporation from the tear film.`,
      },
      {
        q: `How do I stop my mask from blowing air in my eyes?`,
        a: `Press the nose wire down along both sides of your nose, choose a size that sits close under your eyes, and test by breathing out firmly. If you feel air or your glasses fog, reshape and try again.`,
      },
      {
        q: `Can an N95 cause dry eyes?`,
        a: `Any mask that leaks at the top can send breath over your eyes. A properly fit-tested N95 leaks less at the edges; if yours lets air escape upward, ask your employer’s respirator program about a different size or model.`,
      },
      {
        q: `When should I use eye drops if I wear a mask all shift?`,
        a: `When the mask is off and your hands are clean, such as before work, at a meal break and after the shift, following the label’s directions: {directions}.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-with-multiple-monitors',
    title: 'Dry eyes with multiple monitors',
    description:
      'Two or three screens mean a wider gaze, more upward looking and fewer blinks. How to arrange a multi-monitor desk so your eyes stay comfortable.',
    category: 'using',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Multiple monitors can dry your eyes more than one screen because they spread your work across a wider, often higher field. You turn and glance constantly, stare harder to track several windows, and blink less. Screens set too high open your eyes wider, exposing more of the surface to air. Keep the main monitor straight ahead and slightly below eye level, keep the others close and level with it, and build in full blinks.`,
      },
      { h: 'Why multiple screens can be harder on your eyes' },
      {
        p: `One screen already lowers your blink rate, because focused looking tends to suppress blinking. A two- or three-monitor setup adds several things on top of that:`,
      },
      {
        list: [
          `Constant scanning. Eyes jump between a chat window, a spreadsheet and a dashboard, and that searching keeps them wide open.`,
          `Higher screens. Stacked or oversized monitors push part of the work above eye level, and looking up widens the gap between your lids.`,
          `Side angles. A screen far to one side makes you hold your eyes turned for long stretches, which many people find tiring.`,
          `More brightness. Several glowing panels can make a room feel glary, especially when one is much brighter than the others.`,
        ],
      },
      {
        p: `A wider opening between the lids means more of the eye’s surface is exposed to the air, and the tear film evaporates over a larger area between blinks. [Screens and your tear film](/guides/screens-and-your-tear-film) explains the single-screen version of this; here the focus is on layout.`,
      },
      { h: 'How should dual monitors be positioned?' },
      {
        p: `There’s no single right layout, but a few principles hold for most desks:`,
      },
      {
        list: [
          `If you use one screen most, center it directly in front of your keyboard and put the second one beside it, angled inward.`,
          `If you split time evenly, put the seam between the two screens straight in front of you, so each is only a small turn away.`,
          `Keep both at the same height and roughly the same distance, so your eyes don’t refocus with every glance.`,
          `Set the top edge of each screen at or slightly below eye level. You should look a little down at the middle of the screen, not up.`,
          `Angle side monitors so they face you, not the wall, and keep them close enough that you turn your head rather than strain your eyes sideways.`,
        ],
      },
      { h: 'Laptop plus monitor setups' },
      {
        p: `A laptop on the desk next to an external monitor is one of the most common setups and one of the hardest on the eyes. The laptop sits low and close, the monitor sits high and farther away, and every glance between them means changing angle and focus. Raising the laptop on a stand to match the monitor’s height, and adding an external keyboard, makes the pair behave more like two matched screens.`,
      },
      { h: 'Stacked, vertical and ultrawide screens' },
      {
        list: [
          `Stacked monitors: the upper one forces an upward gaze. Use it for things you check occasionally, not for your main task.`,
          `Vertical monitors: tall screens for code or documents put the top lines high; lower the stand so the first lines are near eye level.`,
          `Ultrawide monitors: curve them toward you and sit far enough back that the edges don’t require hard turns.`,
          `Three or more screens: arc them around you so each is roughly the same distance from your eyes.`,
        ],
      },
      { h: 'Office air around a big desk setup' },
      {
        p: `Trading floors, dispatch centers, control rooms and design studios pack many monitors into small spaces, and the electronics add heat that ventilation has to carry away. That often means a steady flow of conditioned air across the desks. Check where the ceiling diffusers are. If a vent sits directly above or in front of your chair, ask facilities about a deflector, or shift your desk position. A small desk fan aimed at your face for comfort works against your eyes; aim it at your chest or hands. [Dry eyes in a heated office](/guides/dry-eyes-in-a-heated-office) covers winter office air in more detail.`,
      },
      { h: 'Blinking and breaks with more screens' },
      {
        p: `More screens make it easier to never look away, because there’s always another window to check. Build in small habits:`,
      },
      {
        list: [
          `Every time you switch tasks, close your eyes fully for a second before you start the next one.`,
          `Look out a window or across the room for a few seconds every 20 minutes or so.`,
          `Match the brightness of all your screens to each other and to the room, so none glares.`,
          `Turn off monitors you aren’t using; an empty bright screen at the edge of your view still draws the eyes.`,
        ],
      },
      { h: 'Eye drops at a multi-monitor desk' },
      {
        p: `Quell’s label gives its Uses as {uses}, and its directions as {directions}. For many desk workers, that maps to a drop before the workday, one around lunch and one in the late afternoon. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is what long, low-blink screen sessions work against. Read the complete [Drug Facts](/drug-facts) before first use.`,
      },
      {
        p: `Keep the bottle in a desk drawer rather than on top of a warm tower or next to a monitor’s vents. The label says {storage}. The label’s tip line reads {tip}, so put the cap back on right away, since a desk collects dust and crumbs. [Eye drops for computer users](/guides/eye-drops-for-computer-users) covers the rest of the workday.`,
      },
      { h: 'When a better layout isn’t enough' },
      {
        p: `If your eyes still ache, burn or blur after rearranging your desk, an eye exam is worth scheduling. Your prescription may not suit the distances your screens sit at, and some people benefit from glasses set for computer distance; that’s for an eye doctor to decide. The label’s advice also applies: {stopUse}`,
      },
    ],
    faq: [
      {
        q: `Can dual monitors cause dry eyes?`,
        a: `They can add to it. More screens mean more scanning, fewer blinks and often a higher or sideways gaze, all of which leave more of the eye exposed to air for longer.`,
      },
      {
        q: `How should dual monitors be positioned for your eyes?`,
        a: `Put the screen you use most straight ahead, keep both at the same height and distance, and set the top edges at or slightly below eye level so you look a little down.`,
      },
      {
        q: `Is a stacked monitor setup bad for your eyes?`,
        a: `The upper screen makes you look up, which widens the opening between your lids. Use the top screen for occasional checks and keep your main work on the lower one.`,
      },
      {
        q: `Should monitors be at the same brightness?`,
        a: `Matching brightness between screens, and to the room, cuts glare and the constant adjusting that comes with moving your eyes between a bright panel and a dim one.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-emts-and-paramedics',
    title: 'Dry eyes for EMTs and paramedics',
    description:
      'Rig climate control, night calls, roadside wind and gloved hands: why EMS work dries eyes, and how to use drops cleanly between calls.',
    category: 'using',
    addedOn: '2026-11-13',
    body: [
      {
        p: `EMTs and paramedics get dry eyes from a mix of ambulance climate control blowing in a small space, wind and dust at roadside scenes, broken sleep on long shifts, and hours of focused work. The fixes are practical: aim vents away from your face, wear eye protection on scene, remove gloves and clean your hands before touching your eyes, and use a lubricating drop between calls exactly as its label directs.`,
      },
      { h: 'Why EMS work dries the eyes' },
      {
        p: `An ambulance is a small box with a powerful heating and cooling system, because the patient compartment has to stay comfortable no matter the weather outside. Vents in the cab and the back move a lot of air in a little space, often near head height. Add 12- or 24-hour shifts, nights spent half-awake between calls, and charting on a tablet or laptop, and the eyes rarely get a rest.`,
      },
      {
        list: [
          `Strong HVAC flow in the cab and patient compartment.`,
          `Doors opening and closing on cold, hot, windy or dusty scenes.`,
          `Long stretches of driving at night, looking into headlights.`,
          `Tired eyes from interrupted sleep, which blink less fully.`,
          `Screen time for documentation after every call.`,
        ],
      },
      { h: 'In the rig' },
      {
        p: `Take a minute at the start of a shift to set up the cab. Point the dash vents at your chest or hands, use the floor and defrost settings when you can, and avoid running the fan on high straight at the driver’s face. In the back, if a vent blows across the attendant’s seat, redirect it toward the floor or the patient’s feet as the patient’s comfort allows.`,
      },
      {
        p: `Night driving adds its own strain. Staring down a dark road with oncoming lights tends to lock the eyes open. On long transports, a few deliberate blinks at each stop or turn help, and so does keeping the windshield clean inside and out to cut glare.`,
      },
      { h: 'On scene: wind, smoke and debris' },
      {
        p: `Highway shoulders, open fields, structure fires and storm damage put crews in wind, smoke and blowing debris. Agency-issued eye protection is there for splash and impact, and it also blocks a lot of wind. Wraparound safety glasses are the better shape for both jobs. When you get back in the rig after a dusty or smoky scene, rinse your face and wash your hands before touching your eyes.`,
      },
      { h: 'Gloves, hands and touching your eyes' },
      {
        p: `Hand hygiene matters more in EMS than in almost any other job. Before you touch your eyes or open a bottle of drops:`,
      },
      {
        list: [
          `Remove your gloves using your agency’s technique, without touching the outside of them.`,
          `Wash with soap and water when you can. If you use hand sanitizer, let it dry completely first, since sanitizer near the eyes stings.`,
          `Use a clean tissue for the lower lid instead of your fingertip if you can.`,
          `Keep the bottle tip from touching your lashes, lids or fingers. The label’s tip line reads {tip}.`,
        ],
      },
      {
        p: `If blood or another body fluid splashes into your eyes, that’s an exposure, not a dryness problem. Use the eyewash, follow your agency’s exposure control plan, and report it. Under OSHA’s bloodborne pathogens standard, employers must have such a plan in place for workers with occupational exposure. A lubricating drop isn’t a rinse and doesn’t belong in that process.`,
      },
      { h: 'Where to keep eye drops in an ambulance' },
      {
        p: `Personal drops belong in your own bag, not in the rig’s medication stock or a shared compartment, where they could be mistaken for supplies or used by someone else. The label says {storage}, and a rig parked outside a station or hospital can run hot or cold. Keep your bag in the station, in a climate-controlled cab with you, or in a pocket. Never leave a bottle on the dash in the sun.`,
      },
      { h: 'Using drops on a 24-hour shift' },
      {
        p: `Quell’s directions are {directions}. Calls don’t come on a schedule, so tie them to things that happen every shift: at shift change, after a meal, and when you settle in to rest. If a call comes as you’re reaching for the bottle, put it away and come back to it later. Don’t try to use drops while driving.`,
      },
      {
        p: `The Uses read: {uses}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Read the full [Drug Facts](/drug-facts), including the warning for people with egg or bird allergies. [Dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) has more about timing drops around daytime sleep.`,
      },
      { h: 'When to get your eyes checked' },
      {
        p: `If your eyes feel dry most days, or you notice pain, sensitivity to light or vision changes, see an eye doctor. The label says to stop and ask a doctor in these cases: {stopUse} Your eyes are part of your job, so it’s worth getting them looked at sooner rather than later. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists signs that call for prompt attention.`,
      },
    ],
    faq: [
      {
        q: `Why do my eyes get dry working in an ambulance?`,
        a: `Ambulance heating and cooling moves a lot of air in a small space, often toward the crew’s faces. Add scene wind, night driving and broken sleep, and the tear film evaporates faster than usual.`,
      },
      {
        q: `Can EMTs carry personal eye drops on shift?`,
        a: `Many do, in a personal bag or pocket rather than the rig’s medication supplies. Check your agency’s policy, keep the bottle within the label’s storage range, and never share it.`,
      },
      {
        q: `Should I use eye drops after a body fluid splash in my eye?`,
        a: `No. A splash is an exposure. Use the eyewash, follow your agency’s exposure control plan and report it. A lubricating drop isn’t meant for rinsing.`,
      },
      {
        q: `When should paramedics use eye drops during a shift?`,
        a: `Tie them to routine moments like shift change, meals and rest, with gloves off and clean hands, following the label’s directions: {directions}.`,
      },
    ],
  },
  {
    slug: 'eye-drops-before-or-after-a-shower',
    title: 'Eye drops before or after a shower?',
    description:
      'After is usually easier: clean hands, a washed face, no shampoo running into your eyes. How to fit drops around a shower, and where the bottle belongs.',
    category: 'using',
    addedOn: '2026-11-13',
    body: [
      {
        p: `For most people, after the shower works better. By then your hands and face are clean, soap and shampoo are rinsed away, and there’s no spray to wash the drop straight back out. Dry your face, wait for the steam to clear, wash your hands, then follow the label’s directions. Keep the bottle in a drawer outside a steamy bathroom, since Quell’s label says {storage}.`,
      },
      { h: 'Why after the shower is usually easier' },
      {
        list: [
          `Your hands are freshly washed, which the label’s caution about the tip makes worth caring about.`,
          `Your face is clean, so there’s no dried sweat, sunscreen or makeup at the lid margin for the drop to mix with.`,
          `Shampoo and soap are gone. A drop put in before the shower can be rinsed out by water running down your forehead.`,
          `You’re not about to rub your eyes with a towel right after the drop goes in.`,
        ],
      },
      {
        p: `None of this comes from the label itself, which doesn’t mention showering. It’s just the order that keeps the drop in your eye and your hands clean when you use it.`,
      },
      { h: 'Eye drops before or after washing your face?' },
      {
        p: `Same answer: after. Face washes, cleansers and makeup removers aren’t meant for the eye, and some sting if they creep in. Wash, rinse thoroughly with plenty of water, pat dry with a clean towel, and give your skin a minute. Then wash your hands one more time if you used them to rub in a cleanser, and put in your drop.`,
      },
      {
        p: `If you put on skin care afterward, such as moisturizer or eye cream, do your eye drop first and the creams after. That keeps lotion off your fingertips when you’re near the eye. [Eye drops before or after makeup?](/guides/eye-drops-before-or-after-makeup) covers the rest of a morning routine.`,
      },
      { h: 'How long after eye drops can I shower?' },
      {
        p: `The label doesn’t set a waiting time. If you’ve already put in a drop and want to shower, give it a few minutes to spread across the eye with normal blinking, then keep your face out of the direct spray when you can and avoid rubbing your eyes with the towel. If a drop gets washed out, that counts as a dose used, not a reason to add extra beyond the label’s directions: {directions}.`,
      },
      { h: 'A simple shower-day routine' },
      {
        list: [
          `Shower, keeping shampoo and soap away from your eyes by tilting your head back when you rinse.`,
          `Pat your face dry with a clean towel; don’t scrub at your eyes.`,
          `Step out of the steam, or wait until the mirror clears.`,
          `Wash and dry your hands.`,
          `Take the bottle from where you store it outside the bathroom, put in your drop, and close the cap right away.`,
          `Put the bottle back before you start styling your hair, since hair dryers and sprays are no friend to an open bottle nearby.`,
        ],
      },
      { h: 'Where to keep eye drops: not in a steamy bathroom' },
      {
        p: `Quell’s storage line reads {storage}. A hot shower can push a small bathroom’s temperature up, and it fills the room with steam. The label doesn’t mention humidity, but a cabinet beside the shower is one of the warmest, wettest spots in a house, and moisture around the cap and tip is not what you want. A bedroom drawer, a nightstand or a kitchen cabinet away from the stove is a steadier home. [How to store eye drops](/guides/how-to-store-eye-drops) has the full list.`,
      },
      { h: 'What if shampoo gets in my eye?' },
      {
        p: `It happens. Rinse the eye gently with plenty of clean, lukewarm water, keeping it open as well as you can, and blink. Most of the sting fades quickly once the soap is gone. A lubricating drop isn’t a rinse, so use water for this, not your eye drops.`,
      },
      {
        p: `If the eye still hurts, stays irritated, or your vision isn’t clear after rinsing, see an eye doctor. Quell’s label carries the same message for any eye problem that lingers: {stopUse}`,
      },
      { h: 'Does a hot shower help dry eyes?' },
      {
        p: `Warm, humid air feels good on dry eyes, and plenty of people notice their eyes are most comfortable in the shower. That relief usually fades once you step back into dry indoor air, especially in a heated house in winter. It isn’t a substitute for the things that make the whole day easier: a humidifier in the bedroom, vents pointed away from your face, and full blinks at screens. [Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) looks at the humidity side.`,
      },
      { h: 'What the label covers' },
      {
        p: `The label’s Uses read: {uses}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The active ingredients are {actives}. The label doesn’t address contact lenses, so if you wear them, ask your eye doctor how drops fit into your routine around showering and lens insertion. Read everything on the [Drug Facts page](/drug-facts) before you start.`,
      },
    ],
    faq: [
      {
        q: `Should I use eye drops before or after a shower?`,
        a: `After is usually easier. Your hands and face are clean, soap is rinsed away, and there’s no water running down to wash the drop out.`,
      },
      {
        q: `Should I put eye drops in before or after washing my face?`,
        a: `After. Rinse off the cleanser, pat your face dry, wash your hands, then put in your drop, and apply any creams after that.`,
      },
      {
        q: `How long after eye drops can I shower?`,
        a: `Quell’s label doesn’t set a time. Giving the drop a few minutes to spread with normal blinking, then keeping your face out of the direct spray, keeps it from washing right out.`,
      },
      {
        q: `Is it bad to keep eye drops in the bathroom?`,
        a: `A steamy bathroom is warm and damp. Quell’s label says {storage}, so a bedroom drawer or a cabinet away from the shower and stove is a steadier place to keep it.`,
      },
    ],
  },
  {
    slug: 'can-you-share-eye-drops',
    title: 'Can you share eye drops?',
    description:
      'It’s not a good idea. The bottle tip can pick up germs from one person’s eye and pass them on. Why one bottle per person is the cautious way.',
    category: 'using',
    addedOn: '2026-11-13',
    body: [
      {
        p: `It’s better not to. Even when two people use the same over-the-counter drop, a shared bottle means a shared tip, and tips brush against lashes and lids more often than people realize. Quell’s label says {tip}, and sharing multiplies the chances of that happening. The cautious practice is one bottle per person, with nobody else’s eyes near the tip.`,
      },
      { h: 'Why sharing eye drops is risky' },
      {
        p: `A dropper tip is held just above the eye. A blink at the wrong moment, a shaky hand or a bottle held too close lets the tip touch lashes, the lid or the eye itself. Whatever was on that surface can stay on the tip and, from there, reach the liquid inside or the next person’s eye.`,
      },
      {
        p: `With a single user, that risk stays within one person. With two or more, each touch adds another person’s lashes, skin and fingertips to the mix. That’s the reasoning behind the label’s instruction about the tip, and it’s why [why you should never touch the bottle tip](/guides/do-not-touch-the-tip) singles out the tip as the part to protect above all.`,
      },
      { h: 'Preservative-free drops and sharing' },
      {
        p: `Quell is preservative-free. Preservatives are added to many multi-use products partly to keep down what grows in an opened bottle. A preservative-free formula leaves cleanliness to how the bottle is handled, so the tip habits matter more, not less. [What does preservative-free mean?](/guides/what-does-preservative-free-mean) explains the trade-offs.`,
      },
      { h: 'Can couples share eye drops?' },
      {
        p: `Plenty of couples keep one bottle on the bathroom counter for both of them. It’s convenient, but it’s still sharing a tip. If you both use drops, keep two bottles. A strip of colored tape or a name written on each cap makes it easy to tell them apart, and two bottles side by side in a drawer take up hardly any space.`,
      },
      {
        p: `One person’s eyes can also feel different from another’s. If one of you develops an eye problem, such as a sore, sticky or irritated eye, that’s exactly when you don’t want a shared bottle in the picture.`,
      },
      { h: 'Households, roommates and family' },
      {
        list: [
          `Give each adult their own bottle, labeled with their name.`,
          `Don’t keep a single “house bottle” in the medicine cabinet for whoever needs it.`,
          `When someone visits and forgets theirs, a fresh, unopened bottle is a kinder offer than yours.`,
          `If one person has an eye that is sore or irritated, keep their bottle apart from the others and see an eye doctor.`,
        ],
      },
      {
        p: `Quell’s label doesn’t give directions for children, and nothing here is advice about using it for a child. Ask a pediatrician or eye doctor about any drop for a child, and keep every bottle out of their reach: {swallowed}.`,
      },
      {
        p: `Offices and gyms raise the same question. A bottle left in a shared desk drawer or locker room tends to get borrowed, so keep yours in your own bag and say no politely when a coworker asks.`,
      },
      { h: 'Putting drops in someone else’s eyes' },
      {
        p: `Caregivers often help a parent or partner with drops. That’s different from sharing. Use the person’s own bottle, wash your hands before and after, and hold the tip above the eye without touching it. If you help two people, keep a separate bottle for each and don’t switch them. [Eye drops for older adults](/guides/eye-drops-for-older-adults) has tips for helping someone who has trouble aiming.`,
      },
      { h: 'Buying for two' },
      {
        p: `Buying a bottle per person is easy to arrange. Shipping is {shipping} per order, and an order of {freeBottles} or more bottles ships free, so a household that splits one order can cover several people. Each bottle is {size}. Checkout works as a guest, there are no promo codes to look for, and there’s no subscription. [Buying Quell for several people at once](/guides/buying-quell-for-several-people) covers addresses and gifts.`,
      },
      { h: 'Can you share eye drops with someone if the bottle is new?' },
      {
        p: `A bottle that’s never been opened isn’t shared yet; give it to them whole. Once you’ve opened and used it, keep it as yours. Pouring or dripping some into another container to split it isn’t a workaround either: it exposes the liquid to air, surfaces and hands, and the new container isn’t made for eye use.`,
      },
      { h: 'What the label says' },
      {
        p: `Quell’s Uses: {uses}. The directions are {directions}, written for one user’s two eyes. Its Do not use line reads {doNotUse}. Read the full [Drug Facts](/drug-facts) before first use, including the caution about egg or bird allergies, which matters if a partner or family member might pick up your bottle.`,
      },
    ],
    faq: [
      {
        q: `Can you share eye drops with someone?`,
        a: `It’s better not to. A shared bottle means a shared tip, and tips often brush lashes or lids. One bottle per person is the cautious practice.`,
      },
      {
        q: `Should couples share a bottle of eye drops?`,
        a: `It’s convenient but still means sharing a tip. Keep two bottles and mark each cap with a name or a strip of colored tape so they don’t get mixed up.`,
      },
      {
        q: `Can I give my unopened eye drops to someone else?`,
        a: `Yes, a sealed bottle hasn’t been used, so passing it on whole is fine. Once you’ve opened and used a bottle, keep it for yourself.`,
      },
      {
        q: `Is it okay to share preservative-free eye drops?`,
        a: `It’s even more reason not to. Preservative-free drops rely on careful handling to stay clean, and sharing adds more hands, lashes and lids near the tip.`,
      },
    ],
  },
  {
    slug: 'carrying-eye-drops-in-a-purse-or-pocket',
    title: 'Carrying eye drops in a purse or pocket',
    description:
      'Body heat, hot cars and cold coat pockets can push drops outside the label’s range. How to carry a bottle in a purse or pocket and keep the tip clean.',
    category: 'using',
    addedOn: '2026-11-13',
    body: [
      {
        p: `You can carry eye drops in a purse or pocket, with a few habits. Keep the bag with you instead of leaving it in a hot or freezing car, since Quell’s label says {storage}. Make sure the cap is fully closed, carry the bottle in a small zip pouch to keep lint and crumbs off the tip, and wash your hands before you use it.`,
      },
      { h: 'Is it okay to keep eye drops in your purse?' },
      {
        p: `Yes, as long as the purse stays with you. Indoors, a purse sits at room temperature, comfortably inside the label’s range. The trouble starts when the bag stays behind: in a car on a summer afternoon, on a beach blanket in full sun, or in a trunk on a January night. In those places a bottle can end up far above or below the range on the label.`,
      },
      {
        list: [
          `Take the purse inside with you instead of leaving it on the seat, even for a quick stop.`,
          `At the beach or pool, keep the bag in the shade or under a towel.`,
          `On a winter day, carry it close rather than leaving it in the trunk while you shop.`,
          `At work, store it in a drawer or locker, not by a sunny window or a space heater.`,
        ],
      },
      { h: 'Pockets and body heat' },
      {
        p: `A pocket keeps the bottle close, which is good in winter, but body warmth works both ways. A pants pocket pressed against your leg on a hot day, or a front pocket in a sweaty workout, can stay warm for hours. Quell’s range tops out at the temperature given on its label, and a pocket against your skin on a summer afternoon can run close to it.`,
      },
      {
        list: [
          `In summer, an outer jacket pocket or a bag beats a tight jeans pocket.`,
          `In winter, an inside coat pocket keeps the bottle from getting very cold outdoors.`,
          `Avoid back pockets; sitting on the bottle can squeeze it and push liquid out the tip.`,
          `Empty your pockets before laundry. A bottle through the wash and dryer has been well outside its storage range.`,
        ],
      },
      { h: 'Keeping the tip and cap clean' },
      {
        p: `Purses and pockets collect lint, crumbs, coins, makeup and receipts, all of which can work their way under a loose cap. The label’s tip line reads {tip}, so the cap is what protects it on the go.`,
      },
      {
        list: [
          `Press or twist the cap until it’s fully closed every time; a cap that pops off in a bag leaves the tip exposed.`,
          `Carry the bottle in a small zip pouch or a clean makeup bag of its own.`,
          `Keep it away from loose lipstick, pens and hand sanitizer that could leak.`,
          `If the cap does come off in your bag, look at the tip. If it’s visibly dirty or you aren’t sure, ask a pharmacist before using that bottle.`,
        ],
      },
      { h: 'Using drops away from home' },
      {
        p: `The hard part about using drops out and about is clean hands. Wash in a restroom if you can. Hand sanitizer is fine for your hands, but let it dry completely before you go near your eyes, because it stings. Then tilt your head back, pull down your lower lid, and follow the label’s directions: {directions}. Recap right away.`,
      },
      {
        p: `If you’re driving, pull over first. [Is it normal for vision to blur after eye drops?](/guides/is-it-normal-for-vision-to-blur-after-eye-drops) explains why a minute’s wait before you head off again is sensible.`,
      },
      { h: 'Carrying eye drops when you travel' },
      {
        p: `A bottle of Quell is {size}, which is well under TSA’s 3.4-ounce limit for liquids in carry-on bags. TSA also allows eye drops in larger amounts as medically necessary liquids if you declare them at the checkpoint. Keeping the bottle in your personal item rather than checked luggage keeps it in the cabin’s temperature. [Traveling with eye drops](/guides/traveling-with-eye-drops) covers flights and road trips.`,
      },
      { h: 'Should I carry a separate bottle?' },
      {
        p: `Some people keep one bottle at home and another in their bag, so the home bottle never leaves the drawer. That’s a reasonable setup, as long as each bottle stays in range and you use each one the same careful way. [Keeping spare bottles of eye drops](/guides/keeping-spare-bottles) has tips for keeping track of more than one. Never share your carry bottle with a friend; one tip, one person.`,
      },
      { h: 'If a bottle got too hot or too cold' },
      {
        p: `Let it return to room temperature, then look at it. The Do not use line reads {doNotUse}, and the label also notes: {milky}. {appearance} If it looks different from when you first opened it, start a fresh bottle and ask a pharmacist about the old one. The full label is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: `Is it okay to keep eye drops in your purse?`,
        a: `Yes, as long as the purse stays with you indoors. Leaving it in a hot or freezing car can take the bottle outside the label’s range: {storage}.`,
      },
      {
        q: `Can you keep eye drops in your pocket?`,
        a: `Yes, with care. A jacket pocket is usually better than a tight pants pocket on a hot day, and an inside coat pocket keeps the bottle from getting too cold in winter.`,
      },
      {
        q: `How do I keep my eye drop bottle clean in my bag?`,
        a: `Close the cap fully every time and carry the bottle in a small zip pouch away from makeup, pens and crumbs. If the cap came off, check the tip before use.`,
      },
      {
        q: `What if my eye drops went through the washing machine?`,
        a: `A wash and dryer cycle takes the bottle well outside its storage range and may have loosened the cap. Start a fresh bottle and ask a pharmacist if you’re unsure about the old one.`,
      },
    ],
  },
]
