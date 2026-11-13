import type { Guide } from '@/lib/guide-types'
export const DAILY_20261113_D: Guide[] = [
  /*
   * Sources fetched 2026-11-13:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00024089.csv (Casper Natrona Co AP: elevation 1627.0 m, annual precip 12.22 in, snow 71.8 in, 183.1 days min <= 32F, 37.8 days max >= 90F)
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00024089.csv (Jan low 15.0F, Jul high 89.0F, Dec snow 11.0 in)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt (Casper morning/afternoon RH: Jul 61/26, Aug 58/25, annual 65/44)
   * - https://forecast.weather.gov/product.php?site=RIW&product=CLA&issuedby=CPR (NWS Riverton preliminary 2025 summary for Casper: gust 78 mph on 12/17, highest sustained 58 mph on 12/19, snow 34.8 in, precip 12.05 in, low -25F on 1/20)
   * Dropped: annual average wind speed (not in the Casper summary), oil and gas employment figures (not looked up; mentioned only as kinds of work).
   */
  {
    slug: 'dry-eyes-in-casper',
    title: 'Dry eyes in Casper, Wyoming',
    description:
      'Casper sits at about 5,338 feet with summer afternoon humidity near 25 percent. What NOAA’s records show and how to keep your eyes comfortable there.',
    category: 'local',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Casper’s air is dry for much of the year and gets windy in bursts. NOAA’s humidity table puts August afternoons at the airport at 25 percent, and the National Weather Service in Riverton logged a 78 mph gust there in December 2025. Add a long heating season at about 5,338 feet and eyes lose moisture fast. Shield them outside, humidify indoors, and use a lubricating drop as labeled.`,
      },
      { h: 'Why are my eyes so dry in Casper?' },
      {
        p: `Three things stack up. The first is altitude: NOAA lists the Casper/Natrona County International Airport weather station at 1,627 meters, which works out to about 5,338 feet. The second is how little water falls. NOAA’s 1991–2020 normals give the airport 12.22 inches of precipitation a year, which is semi-arid by any measure. The third is wind, which turns dry air from a background condition into something you feel on the surface of your eyes.`,
      },
      {
        p: `The tear film has three layers: a mucus layer against the eye, a watery middle, and a thin oil layer on top that slows evaporation. Dry, moving air pulls at that top layer first. Once it thins, the watery layer underneath evaporates faster, and eyes start to feel gritty, tired or stingy by midafternoon.`,
      },
      { h: 'Casper humidity, month by month' },
      {
        p: `NOAA’s Comparative Climatic Data table of relative humidity reports a morning and an afternoon reading for each month. For Casper, mornings hover in the low to mid 60s all year. Afternoons are a different story:`,
      },
      {
        list: [
          `July afternoons average 26 percent, with mornings at 61 percent.`,
          `August afternoons drop to 25 percent, the lowest of the year.`,
          `September afternoons sit at 31 percent, still dry enough to notice on a long day outside.`,
          `Winter afternoons climb back to the high 50s and low 60s, but that’s outdoor air. Heated indoor air is another matter.`,
          `Across the whole year, afternoons average 44 percent.`,
        ],
      },
      {
        p: `That summer dip matters because the same months bring heat. NOAA’s normals give Casper a July average high of 89.0°F and about 38 days a year at 90°F or above. Hot, dry afternoons with a breeze off the open country are hard on a tear film.`,
      },
      { h: 'Wind off Casper Mountain and the high plains' },
      {
        p: `The National Weather Service office in Riverton publishes a yearly climate summary for Casper. Its preliminary 2025 summary, issued January 29, 2026, recorded a highest gust of 78 mph on December 17 and a highest sustained wind of 58 mph two days later. The summary doesn’t list an average wind speed, so there’s no single yearly figure to quote, but those December numbers show what a strong wind event here looks like.`,
      },
      {
        p: `Wind like that does two things to eyes. It strips moisture between blinks, and it makes people squint, which cuts down on full blinks that spread tears. Blowing grit and snow add irritation on top. Wraparound sunglasses or safety glasses break the airflow before it reaches the eye, and a brimmed hat helps with grit.`,
      },
      { h: 'Long winters and heated air' },
      {
        p: `NOAA’s 1991–2020 normals count an average of 183 days a year when Casper’s low drops to 32°F or colder, roughly half the year. January lows average 15.0°F. Furnaces run from fall into late spring, and forced-air heat lowers indoor humidity further. Snow is part of it too: the normal is 71.8 inches a season, although the Riverton office’s 2025 summary recorded only 34.8 inches that year.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom and the room where you spend evenings, and clean it the way the maker says.`,
          `Point floor and dash vents away from your face.`,
          `Take short screen breaks; looking at a screen cuts how often you blink.`,
          `Keep water handy, since a heated house dries you out in more ways than one.`,
        ],
      },
      { h: 'Outdoor and field work around Casper' },
      {
        p: `Plenty of Casper jobs happen outside or in a truck: oil and gas field work, pipeline and construction crews, ranching, and long highway drives to job sites. Each one combines wind, dust and a heater blowing in the cab. A few habits help on those days:`,
      },
      {
        list: [
          `Wear eye protection that wraps around the sides, not just flat lenses.`,
          `Wash dust off your hands before you touch your eyes or a dropper bottle.`,
          `Use a drop at a break, parked and out of the wind, never while driving.`,
          `Keep the bottle in an inside pocket rather than in the truck, where winter cold and summer heat both push past the label’s range.`,
        ],
      },
      {
        p: `[Dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers) has more on long days in the weather.`,
      },
      { h: 'Using Quell in Casper’s climate' },
      {
        p: `Quell’s label lists its Uses as: {uses}. It is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the layer dry Wyoming air works on hardest. The directions are the same at any altitude: {directions}. A morning drop, one at lunch and one in the evening is an easy way to space them.`,
      },
      {
        p: `Storage needs attention here because temperatures swing so far. The label says: {storage}. NOAA’s Riverton summary recorded a low of minus 25°F at the airport on January 20, 2025, and summer highs pass 90°F on many days. A glove box fails that range in both seasons. Before every use, check the bottle against the label’s Do not use line: {doNotUse}. And handle it carefully with cold hands: {tip}.`,
      },
      { h: 'Ordering Quell to Casper' },
      {
        p: `Quell ships from Brentwood, Tennessee, to addresses across the United States, Casper included. Shipping is {shipping}, free on {freeBottles} or more bottles, and no delivery date is promised, so order before you’re down to the last bottle. The [Casper page](/eye-drops/casper-wy) and the [Wyoming page](/eye-drops/state/wyoming) cover local ordering details, and the [Cheyenne guide](/guides/dry-eyes-in-cheyenne) looks at the state capital’s wind.`,
      },
      {
        p: `If dryness hangs on after you’re out of the wind and indoors, follow the label: {stopUse} The [self-check](/self-check) can help you describe what you’re feeling to an eye doctor. It is not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Casper, Wyoming?',
        a: `Casper sits at about 5,338 feet, gets 12.22 inches of precipitation in a normal year according to NOAA, and has summer afternoons near 25 percent humidity. Wind and months of furnace heat add to it.`,
      },
      {
        q: 'How dry is the air in Casper in summer?',
        a: `NOAA’s humidity table gives Casper an average afternoon relative humidity of 26 percent in July and 25 percent in August, the driest readings of the year at the airport.`,
      },
      {
        q: 'How strong does the wind get in Casper?',
        a: `The National Weather Service in Riverton recorded a gust of 78 mph at the Casper airport on December 17, 2025, and a highest sustained wind of 58 mph on December 19, in its preliminary summary for that year.`,
      },
      {
        q: 'Does Quell ship to Casper, WY?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to US addresses including Casper. Shipping is {shipping}, free on {freeBottles} or more bottles, and no delivery date is promised.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-13:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00024143.csv (Great Falls Intl AP: elevation 1116.8 m, precip 14.76 in, snow 66.1 in, 167.8 days min <= 32F, DJF mean 25.8F)
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00024143.csv (Jan high 35.3F / low 15.0F, Jul high 84.3F, Feb and Mar snow 10.1 in)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt (Great Falls morning/afternoon RH: Jul 60/30, Aug 58/29, Jan 65/61, annual 63/46)
   * - https://statesummaries.ncics.org/chapter/mt/ (NOAA State Climate Summary for Montana: chinook definition; Loma, Jan 14-15, 1972, -54F to 49F)
   * - https://www.malmstrom.af.mil/Units/ and af.mil 341st Missile Wing fact sheet (base on the east side of Great Falls; missile complex in north central Montana)
   * Dropped: the 1980 Great Falls seven-minute temperature jump (only found on a non-NWS mirror), annual wind speed (NWS Great Falls annual summary page showed 2022, too old).
   */
  {
    slug: 'dry-eyes-in-great-falls',
    title: 'Dry eyes in Great Falls, Montana',
    description:
      'Chinook winds, cold snaps and August afternoons near 29 percent humidity: what Great Falls weather does to your eyes, from NOAA records.',
    category: 'local',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Great Falls eyes deal with two kinds of dry. Winter brings arctic cold broken by chinooks, the warm, dry winds that NOAA describes coming down the eastern slopes of the Rockies. Summer brings afternoons that NOAA’s humidity table puts at 29 percent in August. Breaking the wind with eyewear, humidifying the house and using a lubricating drop as labeled cover most days.`,
      },
      { h: 'What is a chinook, and why do my eyes feel it?' },
      {
        p: `NOAA’s State Climate Summary for Montana describes chinook winds as warm, dry winds that descend rapidly along the eastern slopes of the Rocky Mountains, common in winter and known for large, sudden temperature swings. The same summary cites the record: on January 14 and 15, 1972, chinook winds took the temperature in Loma, Montana, from minus 54°F to 49°F, a 103-degree change that stands as the largest 24-hour swing in US history.`,
      },
      {
        p: `For your eyes, the problem is the combination. A chinook arrives warm, dry and moving fast. The wind pulls moisture off the eye between blinks, and the dry air has room to absorb it. People often step outside on a mild January afternoon expecting relief from the cold and come home with eyes that feel scratchy. Then the arctic air returns, the furnace kicks back on, and indoor air dries out again.`,
      },
      { h: 'How cold and how snowy Great Falls gets' },
      {
        p: `NOAA’s 1991–2020 normals for Great Falls International Airport give these figures:`,
      },
      {
        list: [
          `An average winter temperature (December through February) of 25.8°F.`,
          `January highs of 35.3°F and lows of 15.0°F on average.`,
          `About 168 days a year with a low at or below freezing.`,
          `66.1 inches of snow a season, with February and March each averaging 10.1 inches.`,
          `14.76 inches of total precipitation a year.`,
        ],
      },
      {
        p: `NOAA lists the airport station at 1,116.8 meters, about 3,664 feet, on the bench above the Missouri River. That’s lower than Casper or Cheyenne, but high enough that the air is thinner and the sun stronger than people coming from the coasts expect.`,
      },
      { h: 'Is Great Falls a dry climate?' },
      {
        p: `In summer, yes. NOAA’s Comparative Climatic Data table of relative humidity, which lists a morning and an afternoon average for each month, shows Great Falls afternoons at 30 percent in July and 29 percent in August. Mornings in those months run near 60 percent, so the drying happens through the afternoon, which is when people are out on the river trails, at ball games or working outside.`,
      },
      {
        p: `Winter readings look humid on paper, with January afternoons at 61 percent. That number describes cold outdoor air. Heat that same air to 70°F inside a house and its relative humidity falls sharply, which is why a Great Falls living room in February can feel drier than the trail in July.`,
      },
      { h: 'Working outside: Malmstrom, ranches and the river' },
      {
        p: `Malmstrom Air Force Base sits on the east side of Great Falls, and the Air Force says the 341st Missile Wing there operates missile fields spread across north central Montana. Maintenance and security crews spend long shifts driving to and working at remote sites in whatever weather the plains offer. Ranch hands, grain haulers, road crews and anyone fishing the Missouri face the same mix of wind, glare and cold.`,
      },
      {
        list: [
          `Wear wraparound sunglasses or safety glasses; snow glare makes people squint and blink less.`,
          `Turn truck heater vents toward your feet or the windshield, not your face.`,
          `Pull over or wait for a break before putting in a drop.`,
          `Carry the bottle in an inside pocket, close to body warmth, rather than in a vehicle that sits for a whole shift at a missile site or a jobsite.`,
        ],
      },
      { h: 'Inside the house during a Montana winter' },
      {
        p: `A humidifier in the bedroom does more than one in a hallway, because that’s where you spend eight hours with your eyes closed and then open them to dry air. [Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) covers the details. Space heaters, wood stoves and fireplaces all dry the air further; sit where the warm air isn’t blowing across your face.`,
      },
      {
        p: `Screens matter in the long dark months, too. People tend to blink less while they stare at a phone or monitor, and fewer blinks means the tear film isn’t spread as often. A short break every so often, looking across the room and blinking fully, gives the tear film a chance to recover.`,
      },
      { h: 'Using Quell in Great Falls' },
      {
        p: `Quell’s Uses read: {uses}. It is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the layer that a dry chinook or a furnace works against. The directions don’t change with the weather: {directions}. More drops on a windy day isn’t part of the label.`,
      },
      {
        p: `Mind storage in both seasons. The label says: {storage}. A bottle left in a parked truck at minus 20°F, or on a dashboard in an 84°F July afternoon in full sun, is outside that range. If the bottle has been somewhere it shouldn’t, check it before use against the label’s line: {doNotUse}. And always follow the handling rule: {tip}.`,
      },
      { h: 'Ordering Quell to Great Falls' },
      {
        p: `Quell ships from Brentwood, Tennessee, to every US state, including Montana. Shipping is {shipping}, free on {freeBottles} or more bottles, and the site doesn’t promise a delivery date, so order with some days to spare before winter storms. See the [Great Falls page](/eye-drops/great-falls-mt) and the [Montana page](/eye-drops/state/montana) for local details, or the [Billings guide](/guides/dry-eyes-in-billings) for the Yellowstone Valley.`,
      },
      {
        p: `If your eyes still hurt or your vision changes once you’re out of the wind, stop and follow the label: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists what not to wait on.`,
      },
    ],
    faq: [
      {
        q: 'Do chinook winds make your eyes dry?',
        a: `They can. NOAA describes chinooks as warm, dry winds descending the eastern slopes of the Rockies, and fast, dry air pulls moisture off the eye between blinks. Wraparound eyewear and a lubricating drop as labeled help.`,
      },
      {
        q: 'How humid is Great Falls, Montana?',
        a: `NOAA’s humidity table gives Great Falls an average of 63 percent in the morning and 46 percent in the afternoon across the year, with August afternoons dropping to 29 percent.`,
      },
      {
        q: 'How much snow does Great Falls get?',
        a: `NOAA’s 1991–2020 normals give Great Falls International Airport 66.1 inches of snow a season, with February and March the snowiest months at 10.1 inches each.`,
      },
      {
        q: 'Can I order Quell to Great Falls, MT?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Great Falls and the rest of Montana for {shipping}, free on {freeBottles} or more bottles. No delivery date is promised, so order ahead of storms.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-13:
   * - https://forecast.weather.gov/product.php?site=UNR&product=CLA&issuedby=RAP (NWS Rapid City 2025 annual summary, issued 2026-01-01: avg wind 10.3 mph, highest wind 70 mph and gust 94 mph from 320 deg on 12/18, avg RH 60, mean 49.4F vs 46.7F, high 106F on 6/20, low -26F on 2/19, precip 18.19 in vs 17.44)
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00024090.csv (Rapid City Rgnl AP: elevation 963.2 m, snow 48.5 in, 174.4 days min <= 32F)
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00024090.csv (Jan high 36.0F / low 12.7F, Jul high 86.4F, Apr snow 10.1 in)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt (Rapid City morning/afternoon RH: Jul 68/42, Aug 66/39, annual 68/52)
   * - https://www.nps.gov/moru/planyourvisit/index.htm (just over two million visitors a year; busiest June, July, August)
   * Dropped: Mount Rushmore summit elevation (only seen in a search snippet), chinook frequency in Rapid City (no official source found today).
   */
  {
    slug: 'dry-eyes-in-rapid-city',
    title: 'Dry eyes in Rapid City, South Dakota',
    description:
      'Rapid City had a 94 mph gust and a 10.3 mph average wind in 2025, per the National Weather Service. How Black Hills weather dries your eyes, and what helps.',
    category: 'local',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Rapid City’s eyes contend with wind more than anything. The National Weather Service recorded a 10.3 mph average wind at the airport in 2025 and a 94 mph gust on December 18. Late-summer afternoons dry out too, near 39 percent humidity in August by NOAA’s table. Wraparound eyewear, moist indoor air and a lubricating drop used as labeled are the practical answers.`,
      },
      { h: 'How windy is Rapid City?' },
      {
        p: `The NWS office in Rapid City issues an annual climate summary for the regional airport. The 2025 edition, issued January 1, 2026, lists an average wind speed of 10.3 mph for the year. On December 18 the highest sustained wind reached 70 mph and the peak gust 94 mph, both from the northwest. Those are December numbers, in the season when furnaces already have indoor air at its driest, so people got the outdoor and indoor versions of dry eyes in the same week.`,
      },
      {
        p: `Wind thins the tear film quickly. The oil layer on top normally slows evaporation from the watery layer beneath it, and a steady wind across the face overwhelms that. Eyes often water in response, but reflex tears are mostly water and drain away; once you’re back indoors, your eyes can feel drier than before you went out.`,
      },
      { h: 'Rapid City humidity through the year' },
      {
        p: `The same 2025 NWS summary put the year’s average relative humidity at 60 percent. NOAA’s Comparative Climatic Data table, which breaks humidity into morning and afternoon averages for each month, shows where the dry stretches fall:`,
      },
      {
        list: [
          `August afternoons average 39 percent, the lowest of the year.`,
          `July and September afternoons run 42 and 41 percent.`,
          `April and May afternoons sit near 48 to 49 percent as spring winds pick up.`,
          `Winter afternoons climb to the 60s outdoors, but heated indoor air drops far below that.`,
          `Across the year, mornings average 68 percent and afternoons 52 percent.`,
        ],
      },
      { h: 'Black Hills weather swings' },
      {
        p: `Rapid City sits where the plains meet the Black Hills, and NOAA lists the airport station at 963.2 meters, about 3,160 feet. Temperature ranges here are wide. The NWS summary for 2025 recorded a high of 106°F on June 20 and a low of minus 26°F on February 19. NOAA’s 1991–2020 normals give January highs of 36.0°F and lows of 12.7°F, with about 174 nights a year at or below freezing.`,
      },
      {
        p: `Snow arrives later than people expect. NOAA’s normals put April as the snowiest month at 10.1 inches, out of a 48.5-inch season. A spring storm followed by bright sun off fresh snow is a recipe for squinting, and squinting cuts down on full blinks. Sunglasses with side coverage handle glare and wind at the same time.`,
      },
      { h: 'Visiting Mount Rushmore and the Black Hills' },
      {
        p: `The National Park Service says just over two million people visit Mount Rushmore National Memorial each year, and its busiest months are June, July and August. Many of those visitors stay in Rapid City and spend whole days driving scenic routes, hiking and standing at overlooks in the wind, often after a long flight or road trip that already left their eyes tired.`,
      },
      {
        list: [
          `Pack the bottle in a day bag, not the car. A parked car in a sunny lot in July can get far warmer than the label allows.`,
          `Keep car vents off your face on long scenic drives.`,
          `Bring sunglasses that wrap around for overlooks and trails.`,
          `Plan a drop at your midday stop rather than in the wind at a viewpoint.`,
        ],
      },
      {
        p: `[Traveling with eye drops](/guides/traveling-with-eye-drops) covers flights and packing in more detail.`,
      },
      { h: 'Using Quell around Rapid City' },
      {
        p: `The label lists Quell’s Uses as: {uses}. It is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is exactly what wind keeps stripping away. The directions read: {directions}. A windy day doesn’t change that number; better eyewear and timing make the bigger difference.`,
      },
      {
        p: `The label’s storage range is: {storage}. Rapid City summers routinely pass the top of it in a closed car, and winter nights fall far below the bottom. Carry the bottle in a pocket or bag that comes inside with you. Check it before each use against the line: {doNotUse}, and keep to the label’s handling rule: {tip}.`,
      },
      { h: 'Ordering Quell to Rapid City' },
      {
        p: `Quell ships from Brentwood, Tennessee, to addresses across the US, and Rapid City orders go out the same way. Shipping is {shipping}, free on {freeBottles} or more bottles. No delivery date is promised, so if you’re planning a summer trip into the Hills, order before you leave. The [Rapid City page](/eye-drops/rapid-city-sd) and the [South Dakota page](/eye-drops/state/south-dakota) have more.`,
      },
      {
        p: `Eyes that still hurt after a day out of the wind are a reason to stop and check the label: {stopUse} The [self-check](/self-check) can help you put what you’re noticing into words for an eye doctor. It is not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Rapid City?',
        a: `Wind is a big part of it. The National Weather Service recorded an average wind of 10.3 mph at the Rapid City airport in 2025, and NOAA’s humidity table shows late-summer afternoons near 39 percent. Furnace heat dries indoor air in winter.`,
      },
      {
        q: 'What was the highest wind gust in Rapid City in 2025?',
        a: `The National Weather Service’s 2025 annual summary for the Rapid City airport lists a peak gust of 94 mph from the northwest on December 18, with sustained winds of 70 mph that day.`,
      },
      {
        q: 'Should I bring eye drops to Mount Rushmore?',
        a: `If your eyes get dry in wind or on long drives, it helps to carry them. Keep the bottle in a day bag rather than a hot car, since the label’s storage range is: {storage}.`,
      },
      {
        q: 'Does Quell deliver to Rapid City, SD?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Rapid City and the rest of South Dakota for {shipping}, free on {freeBottles} or more bottles. No delivery date is promised.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-13:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00024011.csv (Bismarck: elevation 505.4 m, precip 19.05 in, snow 50.5 in, 184.3 days min <= 32F, DJF mean 16.0F)
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00024011.csv (Jan mean 12.8F, high 23.2F, low 2.4F; Dec snow 10.1 in; Jul high 84.7F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt (Bismarck morning/afternoon RH: Jan 77/71, Apr 80/50, May 80/49, Aug 85/48, annual 81/58)
   * - https://forecast.weather.gov/product.php?site=BIS&product=CLA&issuedby=BIS (NWS Bismarck 2025 summary: precip 25.97 in vs 19.05, snow 34.6 in vs 50.5, mean 44.1F vs 43.1F, high 99F, low -39F)
   * Dropped: wind averages (not in the Bismarck summary page as fetched), so no wind numbers are given.
   */
  {
    slug: 'dry-eyes-in-bismarck',
    title: 'Dry eyes in Bismarck, North Dakota',
    description:
      'Bismarck’s January averages 12.8°F, and about 184 nights a year fall below freezing. Why that means dry indoor air for your eyes, and what to do about it.',
    category: 'local',
    addedOn: '2026-11-13',
    body: [
      {
        p: `In Bismarck, dry eyes are mostly a winter-indoors problem. NOAA’s 1991–2020 normals give January an average temperature of 12.8°F and count about 184 nights a year at or below freezing, so furnaces run for months and indoor air gets very dry. Prairie wind adds to it outdoors. A humidifier, eyewear in the wind and a lubricating drop used as labeled help most.`,
      },
      { h: 'Why do my eyes feel dry in Bismarck when the air isn’t dry?' },
      {
        p: `NOAA’s Comparative Climatic Data table of relative humidity shows Bismarck as one of the more humid-looking cities on the northern plains. Winter mornings average around 77 to 82 percent, and January afternoons 71 percent. People read those numbers and wonder why their eyes feel like sandpaper by February.`,
      },
      {
        p: `The answer is temperature. Relative humidity describes how full the air is compared with what it could hold at its current temperature, and very cold air holds very little water. When 5°F air at 75 percent is pulled into a house and warmed to 70°F, its relative humidity falls to a small fraction of that. The air didn’t lose water; it just got warmer. That warmed air is what your eyes sit in all evening and all night.`,
      },
      { h: 'How cold Bismarck gets, from NOAA’s normals' },
      {
        list: [
          `January: average 12.8°F, with highs of 23.2°F and lows of 2.4°F.`,
          `December through February: an average of 16.0°F across the three months.`,
          `About 184 days a year with a low at or below 32°F, more than half the calendar.`,
          `50.5 inches of snow in a normal season, with December the snowiest month at 10.1 inches.`,
          `March still averages 30.1°F, so the heating season runs well into spring.`,
        ],
      },
      {
        p: `NOAA lists the Bismarck airport station at 505.4 meters, about 1,658 feet. That’s low compared with the Rockies, so altitude is not the issue here. Cold and heating are.`,
      },
      { h: 'Spring and summer: when the outside air dries out' },
      {
        p: `The humidity table shows Bismarck’s afternoons dropping to 50 percent in April, 49 percent in May and 48 percent in August. Those are the months people spend the most time outside: planting, fishing on the Missouri, walking the trails along the river, or working road and building crews. With wind across open country, afternoon dryness adds up.`,
      },
      {
        p: `Years vary a lot. The National Weather Service’s 2025 annual summary for Bismarck recorded 25.97 inches of precipitation against a normal of 19.05, but only 34.6 inches of snow against a normal of 50.5. The same summary logged a high of 99°F and a low of minus 39°F within the year, a spread of 138 degrees.`,
      },
      { h: 'Making a Bismarck house easier on your eyes' },
      {
        list: [
          `Run a humidifier in the bedroom through the heating season, and clean it as the maker directs.`,
          `Keep forced-air vents from blowing at the couch, the bed or your desk chair.`,
          `If you use a space heater, aim it at your legs, not your face. [Dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) has more.`,
          `Take breaks from screens; staring at a phone or monitor slows blinking, and blinking is what spreads tears.`,
          `Don’t sleep facing a heat register or a fan.`,
        ],
      },
      { h: 'Working the cold: capitol offices, farms and job sites' },
      {
        p: `Bismarck is North Dakota’s capital, and plenty of people here spend the workday in heated state, county and office buildings, where the dry-air problem runs from October to April. Others work on farms, ranches, road crews or energy sites, trading the dry office for wind and a truck heater. [Dry eyes in a heated office](/guides/dry-eyes-in-a-heated-office) covers the indoor side. For the outdoor side, eye protection that wraps around and a hat brim do most of the work.`,
      },
      { h: 'Using Quell in a North Dakota winter' },
      {
        p: `Quell’s label lists its Uses as: {uses}. It is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and that loss is what dry indoor heat speeds up. The directions are: {directions}. Spacing them through the day works well: one in the morning, one at lunch, one in the evening.`,
      },
      {
        p: `Cold storage is the Bismarck-specific risk. The label says: {storage}, and a January night in a parked car, at an average low of 2.4°F, is far below that. Keep the bottle in a coat pocket by day and indoors at night. Before using a bottle that got cold, let it come to room temperature and look at it against the label’s line: {doNotUse}. Then follow the handling rule: {tip}.`,
      },
      { h: 'Ordering Quell to Bismarck' },
      {
        p: `Quell ships from Brentwood, Tennessee, to addresses across the United States, North Dakota included. Shipping is {shipping}, free on {freeBottles} or more bottles. Because no delivery date is promised and winter weather can slow any package, order before your last bottle runs low. The [Bismarck page](/eye-drops/bismarck-nd) and the [North Dakota page](/eye-drops/state/north-dakota) have local details, and the [Fargo guide](/guides/dry-eyes-in-fargo) covers the Red River Valley.`,
      },
      {
        p: `If dryness keeps up even with a humidified room, or you notice pain or vision changes, follow the label: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Bismarck in the winter?',
        a: `Heated indoor air. Bismarck averages 12.8°F in January by NOAA’s normals, and warming that cold air indoors drops its relative humidity sharply. A bedroom humidifier and keeping vents off your face help.`,
      },
      {
        q: 'How cold is Bismarck, ND in January?',
        a: `NOAA’s 1991–2020 normals give Bismarck a January average of 12.8°F, with average highs of 23.2°F and lows of 2.4°F.`,
      },
      {
        q: 'Is Bismarck humid or dry?',
        a: `Outdoors it looks humid on paper: NOAA’s table averages 81 percent in the morning and 58 percent in the afternoon. Indoors in winter, heated air is far drier, and spring and summer afternoons fall to about 48 to 50 percent.`,
      },
      {
        q: 'Can I get Quell delivered in Bismarck?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Bismarck and all of North Dakota for {shipping}, free on {freeBottles} or more bottles. The site doesn’t promise a delivery date.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-13:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014913.csv (Duluth: elevation 435.3 m, mean 40.6F, precip 31.18 in, snow 90.2 in, 176.6 days min <= 32F)
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00014913.csv (Jan mean 11.2F, high 19.9F, low 2.4F; Dec snow 18.7 in, Jan 16.8 in; Jul high 77.7F; Mar mean 27.0F; Apr mean 39.5F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt (Duluth morning/afternoon RH: Jan 78/70, Apr 77/56, May 77/54, Dec 81/74, annual 82/63)
   * - https://forecast.weather.gov/product.php?site=DLH&product=CLA&issuedby=DLH (NWS Duluth 2025 summary, issued 2026-01-04: avg wind 9.8 mph, gust 59 mph on 2/28, avg RH 71, snow 68.3 in vs 90.2, precip 20.35 vs 31.18, low -27F on 1/21, high 88F on 7/27)
   * Dropped: lake-effect snow totals and lake temperature figures (not verified today), port tonnage figures.
   */
  {
    slug: 'dry-eyes-in-duluth',
    title: 'Dry eyes in Duluth, Minnesota',
    description:
      'Duluth air is humid outdoors, yet eyes dry out in its long heating season. What NOAA records show, and how to handle wind off Lake Superior.',
    category: 'local',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Duluth’s outdoor air is fairly humid, so dry eyes there usually come from indoor heat and wind. NOAA’s 1991–2020 normals give Duluth an average temperature of just 40.6°F for the whole year, which means furnaces run most months, and the National Weather Service measured a 9.8 mph average wind in 2025. Humidify the rooms you live in, shield your eyes outside, and use a lubricating drop as labeled.`,
      },
      { h: 'Why are my eyes dry in Duluth if it’s so humid?' },
      {
        p: `By the numbers, Duluth’s outdoor air isn’t dry at all. NOAA’s Comparative Climatic Data table averages 82 percent humidity in the morning and 63 percent in the afternoon across the year, and the National Weather Service’s 2025 summary for the airport put the year’s average at 71 percent. Lake Superior keeps moisture in the air.`,
      },
      {
        p: `Indoors is a different climate. Cold air holds little water, and when it’s warmed to room temperature its relative humidity drops a long way. With a yearly average temperature of 40.6°F, Duluth houses, offices and ships’ cabins are heated far more of the year than in most US cities. Your eyes spend most of their waking hours in that warmed air, not in the damp lake breeze.`,
      },
      { h: 'A long heating season, by NOAA’s normals' },
      {
        list: [
          `January averages 11.2°F, with highs of 19.9°F and lows of 2.4°F.`,
          `March still averages 27.0°F and April 39.5°F, so the furnace keeps running well into spring.`,
          `About 177 days a year bring a low at or below freezing.`,
          `July, the warmest month, has an average high of only 77.7°F.`,
          `Snowfall normally totals 90.2 inches a season, with December averaging 18.7 inches and January 16.8.`,
        ],
      },
      {
        p: `Seasons don’t always match the normals. The NWS Duluth office’s 2025 annual summary recorded 68.3 inches of snow and 20.35 inches of precipitation, both well below normal, and a low of minus 27°F on January 21.`,
      },
      { h: 'Wind on the hillside and along the lake' },
      {
        p: `Duluth climbs steeply from the harbor to the top of the hill, where NOAA lists the airport weather station at 435.3 meters, about 1,428 feet. Neighborhoods on the slope and along the shore get wind from different directions depending on the weather. The NWS 2025 summary gives a yearly average wind speed of 9.8 mph at the airport and a highest gust of 59 mph on February 28.`,
      },
      {
        p: `A cold wind off the lake is hard on eyes in a specific way. It makes them water, which feels like the opposite of dry, but reflex tears are mostly water and run off without the oil that slows evaporation. Walk the Lakewalk on a raw November day and your eyes can feel both wet and gritty, then feel drier once you’re inside again. Wraparound sunglasses or glasses with side shields cut the wind before it reaches the eye.`,
      },
      { h: 'Spring: the driest outdoor stretch' },
      {
        p: `NOAA’s table shows Duluth afternoons at their driest in spring: 56 percent in April and 54 percent in May. That’s still not desert air, but those are also the months when people start spending long hours outside again, raking, biking the hillside trails or getting boats ready, often in a wind that hasn’t warmed up yet.`,
      },
      { h: 'Port work, shifts and cold-weather jobs' },
      {
        p: `Duluth’s harbor and the work around it keep people outdoors through the winter, from dock and rail crews to construction and road maintenance. Hospital and university staff, on the other hand, may spend twelve-hour days in heated buildings. Either way, the routine that helps looks similar:`,
      },
      {
        list: [
          `Use eye protection that blocks wind from the sides when you’re outside.`,
          `Keep heater and dashboard vents off your face.`,
          `Put a small humidifier near the bed and, if allowed, near your desk.`,
          `Blink fully and look away from screens every so often.`,
          `Carry the bottle in an inside pocket, not a cold truck or locker by the water.`,
        ],
      },
      {
        p: `[Dry eyes from cold air](/guides/dry-eyes-from-cold-air) explains more about what winter air does to the tear film.`,
      },
      { h: 'Using Quell in Duluth' },
      {
        p: `Quell’s label lists its Uses as: {uses}. It is designed to reinforce the tear film’s oil layer to help reduce moisture loss, the layer that dry heated air and cold wind both work against. The directions are: {directions}, whatever the season.`,
      },
      {
        p: `Storage is worth a plan when lows average 2.4°F in January. The label says: {storage}. A bottle left in a car or an unheated porch through a winter night will be far outside that. If it gets cold, let it warm indoors and check it before use against the label’s line: {doNotUse}. And as always, follow the handling rule: {tip}.`,
      },
      { h: 'Ordering Quell to Duluth' },
      {
        p: `Quell ships from Brentwood, Tennessee, to addresses across the US, including Duluth and the rest of Minnesota. Shipping is {shipping}, free on {freeBottles} or more bottles. No delivery date is promised, and a northern Minnesota winter can slow any package, so order ahead. The [Duluth page](/eye-drops/duluth-mn) and the [Minnesota page](/eye-drops/state/minnesota) have local details; the [Minneapolis guide](/guides/dry-eyes-in-minneapolis) covers the Twin Cities.`,
      },
      {
        p: `If your eyes still bother you after time indoors with a humidifier running, or you notice pain or blurred vision that doesn’t clear, follow the label: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has more.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes dry in Duluth when it’s humid outside?',
        a: `Most of your day is spent in heated indoor air, and warming cold outside air drops its relative humidity a long way. Duluth averages 40.6°F across the year by NOAA’s normals, so the heating season is long.`,
      },
      {
        q: 'How much snow does Duluth get in a year?',
        a: `NOAA’s 1991–2020 normals give Duluth 90.2 inches of snow a season, with December the snowiest month at 18.7 inches. The National Weather Service recorded 68.3 inches in 2025.`,
      },
      {
        q: 'Does wind off Lake Superior dry your eyes?',
        a: `Cold wind can make eyes water and then feel drier, because reflex tears are mostly water without the oil that slows evaporation. Glasses with side coverage help block it.`,
      },
      {
        q: 'Does Quell ship to Duluth, MN?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Duluth for {shipping}, free on {freeBottles} or more bottles. No delivery date is promised, so order before you run low.`,
      },
    ],
  },

  {
    slug: 'shipping-eye-drops-to-a-job-site',
    title: 'Shipping eye drops to a job site',
    description:
      'Many construction and field sites can’t take packages. When a job site address works, when to use home or your lodging instead, and how to label it.',
    category: 'shipping',
    addedOn: '2026-11-13',
    body: [
      {
        p: `You can ship Quell to a job site only if the site has a real street address that accepts deliveries and someone there to take them. Many construction, drilling, pipeline and remote field sites don’t. When in doubt, ship to your home, the company’s office, or wherever you’re staying, put your full name on the order, and pick it up promptly so the bottle stays within its storage range.`,
      },
      { h: 'Can you ship packages to a construction site?' },
      {
        p: `Sometimes. A large commercial project with a site office trailer, a posted street number and a superintendent who signs for deliveries can work fine. A road project with a mile marker, a new subdivision with no house numbers yet, or a well pad reached by a lease road usually can’t. Checkout needs a deliverable US street address, and a driver needs a place to leave the box where the right person will find it.`,
      },
      {
        p: `Before you order, ask the site supervisor or office manager three questions:`,
      },
      {
        list: [
          `Does the site have a street address that delivery drivers can find with a map app?`,
          `Who receives packages, and where are they kept until the person they’re for picks them up?`,
          `Are personal deliveries allowed? Some contractors and owners don’t permit them on active sites for security or liability reasons.`,
        ],
      },
      {
        p: `If any answer is no or “not sure,” choose another address. A package that can’t be delivered usually goes back to the sender, and that can leave you without drops for longer than if you’d sent it home.`,
      },
      { h: 'Better addresses for field and remote work' },
      {
        list: [
          `Home: the simplest choice if you’re back every week or two. Order early enough that the box is waiting when you get there.`,
          `The company’s main office or yard: many crews pass through the shop before heading out. The office staff can hold the package.`,
          `Your lodging: a hotel, extended-stay, rental or work camp that accepts guest packages. Ask the front desk first and include the dates you’ll be there.`,
          `A family member or neighbor near the job, if they can pass it along.`,
        ],
      },
      {
        p: `Quell ships only within the United States, so offshore platforms, international projects and foreign addresses aren’t options. If you’re working outside the country, [buying eye drops before a trip abroad](/guides/buying-eye-drops-before-a-trip-abroad) explains how to plan ahead.`,
      },
      { h: 'How to label a job site delivery' },
      {
        p: `If the site does accept packages, make the label do the work. Job sites have dozens of workers, several subcontractors and boxes of fittings, fasteners and safety gear arriving from morning to quitting time. A small box with a vague name on it gets lost in that mix.`,
      },
      {
        list: [
          `Name: your full first and last name as it appears on the crew roster, not a nickname.`,
          `Apartment or suite line: your company name plus the project or trailer, for example “Smith Electric, Main Site Trailer.”`,
          `Street, city, state and ZIP: the address the general contractor gives for deliveries, not the project’s marketing name.`,
          `Phone: your own mobile number, so a driver with a question reaches you rather than a general line.`,
        ],
      },
      {
        p: `[Getting the shipping address right](/guides/getting-the-address-right) has more on each line of the form, and the [work address guide](/guides/shipping-eye-drops-to-your-work-address) covers regular offices with mailrooms.`,
      },
      { h: 'Heat, cold and the site trailer' },
      {
        p: `A job site is hard on a small bottle. Quell’s label says: {storage}. Boxes often wait on a trailer step, in a conex box or in the back of a pickup, none of which is climate controlled. A summer afternoon in a metal storage container or a January night in an unheated trailer can push well past that range.`,
      },
      {
        list: [
          `Watch the tracking link and collect the box the day it’s marked delivered.`,
          `Don’t leave it in a truck cab while you work a full shift.`,
          `Once opened, keep the bottle in an inside pocket or a lunch cooler that isn’t packed with ice.`,
          `If a bottle has been somewhere very hot or cold, let it reach room temperature and look at it first. The label says: {doNotUse}. A normal bottle matches the label’s description: {milky}.`,
        ],
      },
      { h: 'No delivery date is promised' },
      {
        p: `The site doesn’t promise a delivery date for any order, and job sites change. Crews move to the next phase, a site closes for weather, or a rotation ends before a box shows up. Order with plenty of time before you run out, and if your schedule is uncertain, pick an address that won’t change, like home. A bottle at {size} lasts a while at the labeled dose, but it’s easier to keep a spare than to chase a package across three counties. [What happens after you order](/guides/what-happens-after-you-order) walks through the steps from payment to the shipping email.`,
      },
      { h: 'Using drops on the job' },
      {
        p: `Dust, wind, welding glare and long stretches of focused work all affect how eyes feel on site. The label’s directions are: {directions}. Wash grit off your hands first, step out of the wind, and follow the handling rule: {tip}. Never put a drop in while operating equipment or driving.`,
      },
      {
        p: `Something in the eye, like a metal chip, sawdust or a chemical splash, is a job for your site’s first aid procedures and medical care, not a lubricating drop. If irritation continues, follow the label: {stopUse}`,
      },
      { h: 'Shipping cost and quantities for a crew' },
      {
        p: `Shipping is {shipping} per order and free on {freeBottles} or more bottles. If several people on a crew use Quell, each person can order their own to their own address, or one person can order for a household. Every bottle should stay with one person; a dropper tip that has been near one person’s eye shouldn’t go near another’s.`,
      },
    ],
    faq: [
      {
        q: 'Can I have eye drops delivered to a construction site?',
        a: `Only if the site has a deliverable street address and someone who receives packages. Many active sites don’t, so home, the company office or your lodging is often the better choice.`,
      },
      {
        q: 'What address should I use if I work on remote job sites?',
        a: `Use an address that won’t change while the box is on its way: home, your employer’s main office or yard, or lodging that accepts guest packages. Quell only ships within the US.`,
      },
      {
        q: 'How do I make sure a package gets to me at a job site?',
        a: `Put your full name, your company and the site trailer or project on the label, and your own phone number. Then collect it the day tracking shows it delivered.`,
      },
      {
        q: 'Can eye drops sit in a job site trailer?',
        a: `Not for long in hot or cold weather. Quell’s label says: {storage}, and unheated trailers, storage containers and truck cabs can go well outside that range.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-13:
   * - https://www.irs.gov/publications/p969 (FSA grace period up to 2 1/2 months; carryover allowed up to an indexed amount; a plan may offer one or the other but not both, citing Notice 2013-71)
   * - IRS Notice 2005-42 (grace period) and Notice 2013-71 (carryover), as cited by Publication 969
   * - CARES Act (2020): OTC medicines eligible without a prescription, as stated in existing guides and Publication 969
   * Deliberately omitted: any dollar figure for the carryover limit.
   */
  {
    slug: 'fsa-carryover-and-grace-period-for-eye-drops',
    title: 'FSA carryover and grace period: eye drops',
    description:
      'An FSA plan may offer a grace period of up to 2½ months or a carryover, not both. How each one works for buying eye drops after the plan year ends.',
    category: 'ordering',
    addedOn: '2026-11-13',
    body: [
      {
        p: `IRS rules let a health FSA plan offer either a grace period of up to 2½ months after the plan year ends, or a carryover of a limited unused balance into the next year, but not both. Some plans offer neither. Over-the-counter eye drops like Quell are eligible FSA purchases without a prescription, so leftover money can go toward them under whichever option your plan has.`,
      },
      { h: 'Grace period vs. carryover: the difference' },
      {
        p: `Both options soften the use-it-or-lose-it rule, but they work in opposite ways. IRS Publication 969 describes them, and they trace back to two IRS notices: Notice 2005-42 for the grace period and Notice 2013-71 for the carryover.`,
      },
      {
        list: [
          `Grace period: for up to 2½ months after the plan year ends, you can buy eligible items and pay for them with last year’s leftover money. For a calendar-year plan, that window can run to March 15. Anything still unspent after the window is forfeited.`,
          `Carryover: a capped portion of unused money rolls into the next plan year, and you can spend it any time that year. Anything above the cap is forfeited at year end.`,
          `Neither: the money must be spent on expenses incurred by the last day of the plan year.`,
        ],
      },
      {
        p: `Publication 969 states that a plan with a carryover provision can’t also offer a grace period for the health FSA. Your employer chooses which, if either, to include, and can set a carryover cap lower than the IRS maximum.`,
      },
      { h: 'What is the FSA carryover limit?' },
      {
        p: `The IRS sets the carryover limit each year and adjusts it for inflation, which is why searches for the current year’s and next year’s figure are so common. Your plan can use that limit or a lower one. Your plan administrator can tell you yours, and it’s usually listed in the benefits portal or the summary plan description.`,
      },
      {
        p: `Two details people miss: the carryover amount often can’t be used until the new plan year has actually started, and some plans require you to re-enroll in the FSA for the next year to keep the carried-over money. Ask your administrator about both.`,
      },
      { h: 'Do eye drops count as FSA eligible?' },
      {
        p: `Yes. Since the CARES Act took effect in 2020, over-the-counter medicines can be bought with FSA and HSA money without a prescription. Quell is an over-the-counter drug with a standard [Drug Facts](/drug-facts) panel, and its Uses read: {uses}. [Why OTC eye drops count for HSA and FSA](/guides/why-otc-eye-drops-count-for-hsa-and-fsa) explains the rule in more depth.`,
      },
      { h: 'Which date counts for a grace-period purchase?' },
      {
        p: `During a grace period, what matters is when the expense is incurred, and plans decide how to read that for an online order. Some go by the date on the receipt, which for Quell is the day you pay. Others may look at when the item was delivered. The confirmation email shows the payment date. The site doesn’t promise a delivery date, so if your plan counts delivery, order well before the grace period closes rather than in its last week.`,
      },
      { h: 'Planning a carryover year' },
      {
        p: `A carryover doesn’t create a deadline rush in December, which makes it a good time to plan rather than stock up. A few steps:`,
      },
      {
        list: [
          `Log in to your FSA portal and note your balance and your plan’s carryover cap.`,
          `Subtract what you expect to spend on doctor visits, prescriptions and other items before the plan year ends.`,
          `If the remaining balance is above the cap, consider eligible purchases you’d make anyway, such as eye drops you use regularly.`,
          `Don’t buy more than you’ll use before the expiration date. [Do eye drops expire?](/guides/do-eye-drops-expire) shows where to check.`,
          `Keep the confirmation email as your receipt for any claim.`,
        ],
      },
      { h: 'Paying with an FSA card or filing a claim' },
      {
        p: `Whether an FSA debit card is accepted at checkout depends on the card and the plan. If it’s declined, you can pay with another card and submit a claim for reimbursement, as long as your plan allows that. The receipt needs to show what you bought, the date and the amount. [How to file an FSA claim for eye drops](/guides/how-to-file-an-fsa-claim-for-eye-drops) walks through the paperwork.`,
      },
      {
        p: `Many plans also set a run-out period, a deadline after the year or grace period ends for submitting claims for expenses you already incurred. It’s separate from the grace period: the run-out lets you file paperwork late, not buy things late. Check both dates in your plan documents.`,
      },
      { h: 'HSAs don’t have either rule' },
      {
        p: `A health savings account isn’t subject to use-it-or-lose-it at all, so it has no grace period or carryover. The balance stays yours from year to year. If you have both an HSA-compatible limited-purpose FSA and an HSA, the FSA rules above apply only to the FSA. [Can I use HSA or FSA funds for eye drops?](/guides/hsa-fsa-and-eye-drops) covers both accounts.`,
      },
      { h: 'Ordering Quell with leftover FSA money' },
      {
        p: `Orders go through guest checkout, with no account needed. Shipping is {shipping}, free on {freeBottles} or more bottles, and Quell ships only within the US. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. If you’re not sure whether a purchase fits your plan’s timing, ask the plan administrator before you order rather than after.`,
      },
    ],
    faq: [
      {
        q: 'Can I use my FSA grace period to buy eye drops?',
        a: `Yes, if your plan has a grace period. IRS rules allow up to 2½ months after the plan year ends to spend last year’s balance on eligible items, and over-the-counter eye drops qualify without a prescription.`,
      },
      {
        q: 'Can an FSA have both a carryover and a grace period?',
        a: `No. IRS Publication 969 says a health FSA plan with a carryover can’t also offer a grace period. A plan may offer one of them or neither.`,
      },
      {
        q: 'How much FSA money can I carry over?',
        a: `The IRS sets the carryover limit each year, and your plan can choose a lower cap. Your plan administrator can tell you yours.`,
      },
      {
        q: 'Does the FSA grace period go by order date or delivery date?',
        a: `It depends on how your plan reads the date an expense is incurred. Some use the receipt date and some may look at delivery, so ask your administrator and order well before the window closes.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-13:
   * - https://www.ready.gov/winter-weather (supplies for several days without power; car kit list; CO detectors; generators 20 feet from windows, doors and attached garages)
   * - https://www.ready.gov/kit (basic kit list; prescription and non-prescription medications; prescription eyeglasses; kits at home, work and in the car; replace expired items; re-think needs every year)
   */
  {
    slug: 'eye-drops-for-a-winter-storm-kit',
    title: 'Eye drops in a winter storm kit',
    description:
      'Ready.gov says to plan for several days without power and to include medications. Where eye drops fit in a winter storm kit, and how to store them.',
    category: 'seasonal',
    addedOn: '2026-11-13',
    body: [
      {
        p: `If you use eye drops regularly, they belong with the medications in your winter storm kit. Ready.gov advises gathering supplies for several days at home without power and keeping each person’s medication needs in mind. Keep a sealed spare bottle with the kit, store it indoors within the label’s temperature range rather than in a cold garage or car, and order it before storm season since no delivery date is promised.`,
      },
      { h: 'What Ready.gov says to put in a winter storm kit' },
      {
        p: `Ready.gov, the federal government’s emergency planning site, has a winter weather page and a general kit page. The winter page tells you to gather supplies in case you need to stay home for several days without power, to keep extra batteries for radios and flashlights, and to keep in mind each person’s specific needs, including medication. The general kit list includes:`,
      },
      {
        list: [
          `Water, one gallon per person per day for several days.`,
          `At least a several-day supply of non-perishable food and a manual can opener.`,
          `A battery-powered or hand-crank radio and a NOAA Weather Radio with tone alert.`,
          `A flashlight, extra batteries, and a phone with chargers and a backup battery.`,
          `A first aid kit, a whistle, and moist towelettes.`,
          `Prescription medications and non-prescription medications.`,
          `Prescription eyeglasses and contact lens solution.`,
        ],
      },
      {
        p: `Eye drops fit under the medications line. Quell is an over-the-counter drug with a Drug Facts panel, and if you count on it every day, a storm that closes roads for three days is exactly when you’d notice it missing.`,
      },
      { h: 'Why a storm is hard on dry eyes' },
      {
        p: `Winter storms change the air inside a house in ways that matter to eyes. When the power is on, the furnace runs hard and dries the air. When the power goes out, people huddle near whatever heat they have: a fireplace, a wood stove, a camp heater rated for indoor use, or a space heater once power returns. Sitting close to radiant heat with dry air moving across your face speeds evaporation from the tear film. [Dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) covers where to sit and how to aim one.`,
      },
      {
        p: `There’s also the screen effect. With little else to do, people stare at phones for hours to follow storm updates, and staring slows blinking. A battery radio from the kit list gives your eyes a break and saves phone battery at the same time.`,
      },
      { h: 'Safety first during an outage' },
      {
        p: `Ready.gov’s winter guidance is firm on carbon monoxide: install working CO detectors on every level of your home, and use generators and grills only outdoors. Generators and their fuel should be at least 20 feet from windows, doors and attached garages. Dry, irritated eyes are uncomfortable; carbon monoxide can kill. If a CO alarm goes off, get everyone into fresh air and call for help before worrying about anything else.`,
      },
      { h: 'How to store eye drops in an emergency kit' },
      {
        p: `Quell’s label gives the storage range: {storage}. That rules out some common kit locations:`,
      },
      {
        list: [
          `An unheated garage or shed in a northern winter falls below the range.`,
          `A car kit left in the trunk through January cold falls below it too, and a summer trunk goes far above it.`,
          `A hall closet, a bedroom shelf or a bin inside the heated part of the house usually stays within it.`,
        ],
      },
      {
        p: `Ready.gov suggests keeping kits at home, at work and in the car. For eye drops, the home kit is the reliable spot. If you want a bottle on the road, carry it in your coat or bag and bring it inside with you rather than leaving it in the car kit. [Eye drops for a winter road trip](/guides/eye-drops-for-a-winter-road-trip) has more on traveling in the cold.`,
      },
      {
        p: `If a bottle does get very cold during an outage, let it come back to room temperature and look at it before using it. The label’s line is: {doNotUse}. For reference, it also says: {milky}.`,
      },
      { h: 'Keeping the kit current' },
      {
        p: `Ready.gov recommends replacing expired items as needed and rethinking your needs every year. For eye drops, that means:`,
      },
      {
        list: [
          `Check the expiration date on the carton when you set up the kit each fall. [Where is the expiration date on eye drops?](/guides/where-is-the-expiration-date-on-eye-drops) shows where to look.`,
          `Keep the spare sealed. An unopened bottle is the one to store; rotate it into daily use and replace it before it nears its date.`,
          `Write the bottle’s location on the kit’s checklist so anyone in the house can find it in the dark.`,
          `If more than one person uses drops, store one bottle per person. Bottles shouldn’t be shared.`,
        ],
      },
      { h: 'Using drops when the power is out' },
      {
        p: `The directions don’t change in a storm: {directions}. Hand hygiene is harder without running hot water, so use the moist towelettes from the kit to clean your hands first, and follow the label’s handling rule: {tip}. A headlamp or flashlight from the kit helps you see the bottle tip.`,
      },
      {
        p: `If your eyes hurt, your vision changes, or something gets into an eye while you’re clearing snow or splitting wood, a lubricating drop isn’t the answer. Follow the label: {stopUse}`,
      },
      { h: 'Order before the storm, not during it' },
      {
        p: `Quell ships from Brentwood, Tennessee, and the site doesn’t promise a delivery date. Storms slow deliveries everywhere, so the time to add a spare to your kit is in the fall, before the first forecast. Shipping is {shipping}, free on {freeBottles} or more bottles. [Keeping spare bottles](/guides/keeping-spare-bottles) explains how to rotate them.`,
      },
    ],
    faq: [
      {
        q: 'Should I put eye drops in my emergency kit?',
        a: `If you use them regularly, yes. Ready.gov advises including each person’s medications, prescription and non-prescription, and planning for several days at home without power.`,
      },
      {
        q: 'Can I keep eye drops in my car emergency kit in winter?',
        a: `Not reliably. Quell’s label says: {storage}, and a car in winter cold falls below that. Keep a bottle in your coat when you drive and store the spare indoors.`,
      },
      {
        q: 'What should be in a winter storm kit?',
        a: `Ready.gov lists water, several days of non-perishable food, a battery or hand-crank radio, flashlights and batteries, a first aid kit, phone chargers, and prescription and non-prescription medications, plus working carbon monoxide detectors at home.`,
      },
      {
        q: 'How often should I replace eye drops in an emergency kit?',
        a: `Check the expiration date each year when you review the kit, as Ready.gov suggests, and rotate the sealed spare into daily use before it gets close to that date.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-while-ice-skating',
    title: 'Dry eyes while ice skating',
    description:
      'Gliding at speed makes its own wind, and rink air is cold. Why skating dries your eyes, outdoors and in arenas, and simple ways to stay comfortable.',
    category: 'seasonal',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Ice skating dries your eyes because you create your own wind. Every lap pushes cold air across your face, and cold, moving air pulls moisture off the tear film between blinks. Outdoor rinks add real wind and sun glare off the ice. Glasses or goggles that block airflow, breaks off the ice, and a lubricating drop used as labeled before and after skating help most.`,
      },
      { h: 'Why do my eyes water and then feel dry after skating?' },
      {
        p: `Cold wind on the eye often triggers watering first. Those reflex tears are mostly water, and they spill over or drain away without spreading the oil that keeps the tear film from evaporating. Once you step off the ice into a heated warming hut or car, the extra water is gone and the surface is left drier than before. That wet-then-gritty pattern is common after skating, sledding and other fast winter activities.`,
      },
      {
        p: `The tear film has three layers: mucus against the eye, a watery middle, and a thin oil layer on top. Blinking spreads all three. Anything that speeds evaporation or slows blinking works against it, and skating does a little of both.`,
      },
      { h: 'Outdoor rinks and frozen ponds' },
      {
        p: `Outdoor skating stacks several drying factors at once:`,
      },
      {
        list: [
          `Air temperature: cold air holds little moisture, so the air around you is dry even if snow is on the ground.`,
          `Natural wind: a breeze across an open pond or a city plaza rink adds to the wind you make by moving.`,
          `Glare: sun reflecting off ice makes people squint, and squinting replaces full blinks with partial ones.`,
          `Time: a holiday skate or a pickup hockey game can stretch for hours with few real breaks.`,
        ],
      },
      { h: 'Indoor arenas: still cold air' },
      {
        p: `Indoor rinks avoid the wind and sun, but the air near the ice is kept cold, and you still make a breeze every time you skate. Hockey players, figure skaters and speed skaters in practice spend long sessions moving fast in that air. Parents and coaches sitting in the stands for hours often notice their eyes too, especially when they’re staring at a phone between periods.`,
      },
      {
        p: `Then there’s the lobby and the car. Arena lobbies, locker rooms and vehicles are heated, often with vents blowing warm, dry air. Going back and forth between the rink and those spaces is part of why eyes feel uncomfortable by the end of a tournament weekend.`,
      },
      { h: 'Eye protection on the ice' },
      {
        list: [
          `Sport glasses or wraparound sunglasses block most of the wind you create. Look for a snug fit so they stay put on a fall.`,
          `Clear lenses work indoors; tinted or polarized lenses help outdoors in bright sun.`,
          `Hockey visors and cages are about impact protection. A full visor also blocks much of the airflow; a cage doesn’t.`,
          `A brimmed knit hat or helmet with a short brim cuts some glare at an outdoor rink.`,
        ],
      },
      {
        p: `Whatever you wear, follow your rink’s and your league’s equipment rules first. Falls on ice are the bigger risk.`,
      },
      { h: 'When to use eye drops around skating' },
      {
        p: `Quell’s Uses read: {uses}. It is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label’s directions are: {directions}, so plan them around your day rather than squeezing extra in at the rink. For a skater, that might look like:`,
      },
      {
        list: [
          `One drop in the morning, well before you head to the rink.`,
          `One at a break in a warm, still spot like the lobby or the car, never while skating.`,
          `One in the evening once you’re home.`,
        ],
      },
      {
        p: `Clean your hands first, since gloves and rink gear collect grime, and follow the handling rule: {tip}. If you wear contact lenses on the ice, Quell’s label doesn’t give directions for use with them; ask your eye doctor or pharmacist. [Contact lenses and Quell](/guides/contact-lenses-and-quell) explains what the label does and doesn’t say.`,
      },
      { h: 'Skating trips and holiday rinks' },
      {
        p: `Holiday skating often comes with travel: a city rink downtown, a mountain lodge pond, or a family visit with a trip to the local arena. Pack drops in your carry-on or day bag, not a checked suitcase or a car trunk. [Visiting family with eye drops](/guides/visiting-family-with-eye-drops) covers packing for a stay away.`,
      },
      {
        p: `Children skate too, and families often share gear. Quell’s label doesn’t give directions for children; ask their doctor or pharmacist before using it on a child. Bottles shouldn’t be shared between family members in any case.`,
      },
      { h: 'Keeping the bottle out of the cold' },
      {
        p: `A skate bag left in a cold car between practices isn’t a good place for eye drops. Quell’s label says: {storage}. Keep the bottle in an inside coat pocket, close to your body, or in a bag that comes inside with you. If it does get very cold, let it warm to room temperature and check it before use: {doNotUse}.`,
      },
      { h: 'When it’s more than dry eyes' },
      {
        p: `A puck, stick, blade or fall that hits the eye area needs medical attention, not drops. If your eyes still hurt or your vision changes after skating, follow the label: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists signs not to wait on.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when I ice skate?',
        a: `Moving across the ice creates a steady cold wind on your face, and cold, moving air pulls moisture off the tear film between blinks. Outdoor rinks add natural wind and glare.`,
      },
      {
        q: 'Should I wear glasses or goggles to ice skate?',
        a: `Sport glasses or wraparound sunglasses that fit snugly block much of the airflow that dries eyes. Follow your rink’s or league’s equipment rules, especially for hockey.`,
      },
      {
        q: 'Can I use eye drops at the ice rink?',
        a: `Yes, at a break in a warm, still spot like the lobby, with clean hands. Stick to the label’s directions (“{directions}”) and never put a drop in while you’re skating.`,
      },
      {
        q: 'Is it OK to leave eye drops in a hockey bag?',
        a: `Not if the bag stays in a cold car. Quell’s label says: {storage}, so carry the bottle in a coat pocket or a bag that comes inside with you.`,
      },
    ],
  },

  {
    slug: 'how-many-drops-of-eye-drops-should-i-take',
    title: 'How many drops of eye drops should I take?',
    description:
      'Quell’s label says 1 drop 3 times per day in each eye. What that adds up to, what to do if two drops come out, and when to ask a doctor about more.',
    category: 'label',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Take the number of drops the label’s directions give. For Quell, the directions read: {directions}. That’s one drop per eye at each use, three uses a day, six drops in total. If two drops come out by accident, the extra one simply runs off; don’t add more to make up for anything. If that amount doesn’t feel like enough, ask an eye doctor rather than raising it yourself.`,
      },
      { h: 'How many drops should I use at one time?' },
      {
        p: `One per eye, per Quell’s directions. Many people assume a second drop helps the first one work, but the eye can only hold a small amount of liquid on its surface. Anything more than that spills onto your cheek or drains through the tear duct in the inner corner of the eye. That’s why you sometimes taste eye drops: the overflow ends up at the back of your throat. [Why can I taste eye drops?](/guides/why-can-i-taste-eye-drops) explains the path.`,
      },
      { h: 'How many drops of eye drops should I take a day?' },
      {
        p: `Three uses a day, one drop in each eye at each use. Here’s how that adds up:`,
      },
      {
        list: [
          `Per eye: three drops a day.`,
          `Both eyes: six drops a day.`,
          `If you only use it in one eye on a doctor’s advice, follow what they told you; the label itself is written for each eye.`,
        ],
      },
      {
        p: `Spacing them out across the day is practical: morning, midday and evening. The label doesn’t set exact times, so pick ones that fit your routine and are easy to remember, like breakfast, lunch and the end of the workday.`,
      },
      { h: 'What if two drops come out?' },
      {
        p: `It happens, especially with cold hands or a new bottle. A second drop isn’t a problem in itself; it overflows and runs off. Don’t count it as a reason to skip your next scheduled use, and don’t add another drop to the other eye to even things out. Blot your cheek with a clean tissue, close your eye gently for a moment, and carry on.`,
      },
      {
        p: `If it keeps happening, the issue is usually technique. A few things help:`,
      },
      {
        list: [
          `Tilt your head back or lie down so the bottle is directly above the eye.`,
          `Pull the lower lid down gently with one finger to make a small pocket.`,
          `Squeeze the bottle slowly with steady pressure rather than a quick pinch.`,
          `Rest the hand holding the bottle on your forehead or the bridge of your nose for control.`,
          `Keep the tip clear of your eye and lashes. The label says: {tip}.`,
        ],
      },
      { h: 'What if the drop misses?' },
      {
        p: `If you felt nothing land and the drop ran down your cheek or hit your eyelid, it’s reasonable to try once more. That isn’t taking extra; it’s getting the one labeled drop into the eye. If you miss several times in a row, stop, take a breath and reset your position. [How to use eye drops as directed](/guides/how-to-use-eye-drops-as-directed) walks through the steps in more detail.`,
      },
      { h: 'Can I take more drops than the label says?' },
      {
        p: `The label’s directions stop at one line: {directions}. It gives no directions for using more. Going past that means going past what the label covers. Over-the-counter directions are written so people can use the product on their own; when the labeled amount doesn’t seem to be enough, that is useful information for an eye doctor, not a cue to double up.`,
      },
      {
        p: `The label also says when to stop: {stopUse} Needing far more drops than the label gives can be a sign worth having checked. [Can I use more than three drops a day?](/guides/can-i-use-more-than-three-drops-a-day) covers that question from the other side.`,
      },
      { h: 'Does the number change with other drops or contacts?' },
      {
        p: `Quell’s label doesn’t give directions for use alongside other eye drops or with contact lenses. If you use a prescription drop, another over-the-counter drop, or wear contacts, ask your eye doctor or pharmacist how to fit Quell in. The label also doesn’t give directions for children; ask their doctor.`,
      },
      { h: 'Where the number comes from' },
      {
        p: `Every over-the-counter drug sold in the US carries a Drug Facts panel in a format the FDA sets, and the Directions section is where the amount and frequency live. For Quell, you can read the full panel on the [Drug Facts page](/drug-facts) or on the carton. If the website and the carton ever seem to disagree, the carton in your hand is the one to follow.`,
      },
      {
        p: `At the labeled amount, a {size} bottle goes further than people expect. [How long does a bottle of eye drops last?](/guides/how-long-does-a-bottle-of-eye-drops-last) works through the numbers.`,
      },
    ],
    faq: [
      {
        q: 'How many drops of eye drops should I use at one time?',
        a: `One drop in each eye at each use, according to Quell’s directions. The surface of the eye holds only a small amount of liquid, so a second drop mostly runs off.`,
      },
      {
        q: 'How many drops of eye drops can I use a day?',
        a: `Quell’s label says: {directions}. That’s three drops per eye, six in total. For anything more, ask an eye doctor.`,
      },
      {
        q: 'What happens if I put two eye drops in by accident?',
        a: `The extra drop overflows onto your cheek or drains away. Blot it, don’t add more, and keep to your usual schedule for the next use.`,
      },
      {
        q: 'Should I put in another drop if I missed my eye?',
        a: `If the drop clearly landed on your lid or cheek instead of the eye, one more try is fine, since that’s still the single labeled drop. Reset your position before trying again.`,
      },
    ],
  },

  {
    slug: 'what-are-emulsion-eye-drops',
    title: 'What are emulsion eye drops?',
    description:
      'Emulsion eye drops mix tiny droplets of oil through a watery base, which is why they look milky. How that applies to Quell, and what its label says.',
    category: 'formula',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Emulsion eye drops are drops in which tiny droplets of oil are dispersed through a water-based liquid, held together by ingredients that help oil and water stay mixed. The suspended oil scatters light, so emulsions look milky or cloudy instead of clear. Quell combines oils with sterile water this way, and its label notes: {milky}. The oil is there because Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss.`,
      },
      { h: 'Emulsion meaning, in plain terms' },
      {
        p: `Oil and water don’t dissolve into each other. Pour them together and they separate into layers. An emulsion breaks the oil into droplets small enough to stay spread through the water, usually with help from an emulsifier, a kind of ingredient with one end that’s drawn to water and one end that’s drawn to oil. Milk, mayonnaise and many lotions are everyday emulsions. In eye drops, the idea is the same, made under the sterile conditions an eye product requires.`,
      },
      {
        p: `Not every eye drop is an emulsion. Many are clear solutions, in which every ingredient dissolves completely in water. Some others are gels or ointments, which are thicker. The type is about how the ingredients are combined, not about which brand made them.`,
      },
      { h: 'Why would an eye drop contain oil?' },
      {
        p: `Because the eye’s own tears contain it. The tear film has three layers: a mucus layer against the eye’s surface, a watery layer in the middle, and a thin oil layer on top. That oil layer slows evaporation from the watery layer underneath. [The tear film’s oil layer, explained](/guides/the-tear-films-oil-layer) goes into more detail.`,
      },
      {
        p: `A drop that’s purely water-based adds moisture to the watery layer. A drop that includes oil is aimed at the top layer too. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is why it contains oils and comes out as an emulsion rather than a clear liquid.`,
      },
      { h: 'What’s in Quell that makes it an emulsion' },
      {
        p: `Quell’s active ingredients are {actives}. Its inactive ingredients are {inactives}. A few of those play recognizable roles in an emulsion:`,
      },
      {
        list: [
          `Oils: {mineralOil} is an active ingredient listed as an emollient, and emu oil is among the inactive ingredients. These make up the oil phase.`,
          `Water: sterile water is the base the oil droplets are spread through.`,
          `Ingredients that help them mix: polysorbate 80, which the label lists as a lubricant, is also chemically an emulsifier. [What does polysorbate 80 do in eye drops?](/guides/what-does-polysorbate-80-do-in-eye-drops) explains its double role.`,
        ],
      },
      {
        p: `The label doesn’t use the word “emulsion.” It describes the result instead: {milky}. The site adds a reassurance written for the buy button: {appearance}`,
      },
      { h: 'Why are some eye drops milky instead of clear?' },
      {
        p: `In a clear solution, everything is dissolved down to the molecular level, so light passes straight through. In an emulsion, the oil droplets are big enough to scatter light, and scattered light looks white or cloudy. That’s the same reason milk is opaque. Quell has a brown tint on top of that, from its natural ingredients, so it looks milky brown. [Why is Quell milky brown?](/guides/why-is-quell-milky-brown) covers the color itself.`,
      },
      {
        p: `What matters for safety is consistency. The label says: {doNotUse}. If a bottle looks noticeably different from how it looked when it arrived, don’t use it.`,
      },
      { h: 'Do you shake emulsion eye drops?' },
      {
        p: `Some emulsion products say to shake before use and some don’t; the instruction that counts is the one printed on that product’s label. Quell’s directions read: {directions}, with no mention of shaking. [Do you need to shake eye drops?](/guides/do-you-shake-eye-drops) explains how to read that silence. If you’re unsure about a particular bottle, ask a pharmacist with the carton in hand.`,
      },
      { h: 'Do emulsion drops blur your vision?' },
      {
        p: `Milky drops can blur vision briefly after they go in, because a cloudy liquid sits on the eye’s surface until blinking spreads it out. That’s a reason to put a drop in when you don’t need sharp vision right away, not while driving or reading something important. If blurring or any change in vision doesn’t clear, the label is clear about what to do: {stopUse} [Is it normal for vision to blur after eye drops?](/guides/is-it-normal-for-vision-to-blur-after-eye-drops) has more.`,
      },
      { h: 'Emulsions and storage' },
      {
        p: `Heat and cold can stress any liquid product, and an oil-and-water mix is no exception. Quell’s label gives a range: {storage}. Keep the bottle out of hot cars, away from heaters and out of the freezer. Handle it as the label says, too: {tip}.`,
      },
      { h: 'Who emulsion drops may not suit' },
      {
        p: `Ingredients vary by product, so read each label’s warnings. Quell’s says: {warnings}. The caution relates to emu oil. Quell’s label doesn’t give directions for children, for use with contact lenses, or for use alongside other eye drops; for any of those, ask your eye doctor or pharmacist.`,
      },
    ],
    faq: [
      {
        q: 'What does emulsion mean in eye drops?',
        a: `It means tiny droplets of oil are spread through a water-based liquid and kept mixed, often with an emulsifier. That makes the drop look milky or cloudy rather than clear.`,
      },
      {
        q: 'Is Quell an emulsion eye drop?',
        a: `Quell combines oils, including {mineralOil} and emu oil, with sterile water, so it has an emulsion’s milky look. The label doesn’t use the word; it says: {milky}.`,
      },
      {
        q: 'Are emulsion eye drops better than clear ones?',
        a: `Neither type is better in general. They’re built differently: clear solutions add to the watery layer, while drops with oil are aimed at the tear film’s oil layer too. An eye doctor can say which suits your eyes.`,
      },
      {
        q: 'Why does my eye drop look cloudy?',
        a: `If it contains oils, the droplets scatter light and make the liquid cloudy, which is normal for that kind of drop. If it looks different from when you bought it, don’t use it.`,
      },
    ],
  },

  /*
   * Source: 21 CFR part 349 (FDA's monograph for OTC ophthalmic drug products), which requires
   * multi-use containers to carry a do-not-touch-the-tip warning and a replace-the-cap instruction.
   */
  {
    slug: 'single-use-vials-vs-multi-dose-bottles',
    title: 'Single-use vials vs. multi-dose eye drop bottles',
    description:
      'Single-use vials are opened once and thrown away; multi-dose bottles are reused. How the two formats compare on cost, handling, travel and waste.',
    category: 'choosing',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Single-use vials hold one dose’s worth of eye drops and are opened, used and thrown away, so the tip never sits around between uses. Multi-dose bottles hold many doses and are recapped after each one, which makes careful handling the main safeguard. Quell comes in a {size} preservative-free multi-dose bottle. Choosing between formats comes down to handling, cost, convenience and what your eye doctor suggests.`,
      },
      { h: 'Single use eye drops vs bottle: the basic difference' },
      {
        list: [
          `Single-use vials: small plastic ampules, often sold in strips. You twist off the top, use the drops, and discard the vial, usually even if some liquid is left.`,
          `Multi-dose bottles: a dropper bottle with a cap, used many times over weeks. You put the cap back on after each use.`,
          `Both formats can be preservative-free. What changes is how the product is protected between uses.`,
        ],
      },
      { h: 'How a multi-dose bottle is kept clean' },
      {
        p: `Every time a multi-dose bottle is opened, the tip is exposed to the air, your fingers and anything it might touch. FDA’s rules for over-the-counter eye products, 21 CFR part 349, require multi-use containers to warn against touching the tip to any surface and to tell you to replace the cap after each use. Quell’s label carries its version: {tip}.`,
      },
      {
        p: `That instruction does most of the work, so build a routine around it:`,
      },
      {
        list: [
          `Wash and dry your hands before you open the bottle.`,
          `Hold the tip above the eye, not against it, and keep it clear of lashes and lids.`,
          `Recap right away; don’t set the open bottle down on a counter.`,
          `Use one bottle per person. A tip that has been near one person’s eye shouldn’t go near another’s.`,
          `Watch the contents: the label says: {doNotUse}.`,
        ],
      },
      {
        p: `Quell’s label doesn’t describe any special bottle mechanism, and this guide doesn’t claim one. The handling line on the label is what applies. [Why you should never touch the bottle tip](/guides/do-not-touch-the-tip) explains the reasoning.`,
      },
      { h: 'Why choose single-use vials?' },
      {
        list: [
          `No reuse: each dose comes from a freshly opened container.`,
          `Easy to carry a day’s worth in a pocket.`,
          `Some eye doctors suggest them in particular situations; follow their advice if they do.`,
        ],
      },
      {
        p: `The drawbacks are practical. Vials are small and fiddly, which can be hard with stiff fingers or poor eyesight. Each one creates a bit of plastic waste. And because most are discarded after one use, the cost per dose is often higher.`,
      },
      { h: 'Why choose a multi-dose bottle?' },
      {
        list: [
          `One bottle to keep track of instead of strips of vials.`,
          `Easier to grip and squeeze for many people.`,
          `Less packaging per dose.`,
          `Often lower cost per dose, though that depends entirely on the product.`,
        ],
      },
      {
        p: `The tradeoff is responsibility: the bottle is only as clean as the handling. Preservative-free multi-dose bottles in particular depend on the tip staying untouched. [Are preservative-free eye drops worth it?](/guides/are-preservative-free-eye-drops-worth-it) looks at that choice more broadly.`,
      },
      { h: 'Comparing cost per dose' },
      {
        p: `To compare fairly, work out the price per use rather than the price per box. For vials, divide the box price by the number of vials, keeping in mind how many you actually open each day. For a bottle, estimate how many days it covers at the labeled dose and divide. Quell’s directions are: {directions}. [How long does a bottle of eye drops last?](/guides/how-long-does-a-bottle-of-eye-drops-last) works through that estimate, and [comparing eye drop prices](/guides/comparing-eye-drop-prices-with-shipping) adds shipping to the math.`,
      },
      { h: 'Travel and storage' },
      {
        p: `Both formats travel easily. Under TSA’s liquids rule, small containers of 3.4 ounces or less fit in your quart-size bag, and a {size} bottle is well under that. [Traveling with eye drops](/guides/traveling-with-eye-drops) covers security in more detail.`,
      },
      {
        p: `Storage matters for both. Quell’s label gives the range: {storage}. A strip of vials in a hot glove box has the same problem as a bottle left there. Keep either one in a bag or pocket that stays at room temperature.`,
      },
      { h: 'Questions for your eye doctor or pharmacist' },
      {
        p: `If you’re unsure which format fits you, a pharmacist can compare specific products, and an eye doctor can tell you whether your eyes call for a particular type. Useful questions include whether you need preservative-free drops, how often you’ll use them, and whether you wear contact lenses, since Quell’s label doesn’t give directions for use with contacts. [Questions to ask a pharmacist about eye drops](/guides/questions-to-ask-your-pharmacist) has a fuller list.`,
      },
    ],
    faq: [
      {
        q: 'Are single-use eye drops better than a bottle?',
        a: `Not across the board. Vials avoid reuse, while multi-dose bottles are easier to handle and often cost less per dose. The right choice depends on your eyes, your habits and your eye doctor’s advice.`,
      },
      {
        q: 'Can you reuse a single-use eye drop vial?',
        a: `Single-use vials are made to be opened, used and thrown away. Follow the directions on that product’s label, which usually say to discard the vial after use.`,
      },
      {
        q: 'Is Quell in a single-use vial or a bottle?',
        a: `Quell comes in a {size} preservative-free multi-dose bottle. The label’s handling line applies every time: {tip}.`,
      },
      {
        q: 'How do you keep a multi-dose eye drop bottle clean?',
        a: `Wash your hands, keep the tip from touching your eye or any surface, recap right after use, and don’t share the bottle. FDA’s rules for OTC eye products require multi-use containers to carry the tip and cap instructions.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-in-a-sauna',
    title: 'Dry eyes in a sauna',
    description:
      'A dry sauna’s hot, low-humidity air pulls moisture off your eyes fast. Why it happens, how steam rooms differ, and where to keep your eye drops.',
    category: 'using',
    addedOn: '2026-11-13',
    body: [
      {
        p: `A traditional dry sauna can make your eyes feel dry because very hot air with little moisture in it speeds evaporation from the tear film. Infrared saunas warm you with less air heat but still dry the room. Steam rooms are humid, so they feel different. Keep sessions within the facility’s posted limits, close your eyes for stretches, and use a lubricating drop as labeled afterward, never storing the bottle in the hot room.`,
      },
      { h: 'Can a sauna cause dry eyes?' },
      {
        p: `It can make eyes feel dry while you’re in it and for a while afterward. The tear film has an oil layer on top that slows evaporation from the watery layer beneath. Hot, dry air moving across the eye works against that oil layer, the same way a hair dryer or a car heater does. Many people notice a gritty, tight feeling or a need to blink more after a long sit on the top bench.`,
      },
      {
        p: `How much you notice depends on the type of sauna, how hot it is, how long you stay, and how your eyes feel to start with. If you already have dry eyes from screens or winter heating, a sauna can tip them over.`,
      },
      { h: 'Dry sauna, steam room and infrared: how they differ' },
      {
        list: [
          `Traditional dry sauna: very hot air, usually heated by a stove with rocks. Humidity is low unless someone pours water on the stones, which briefly releases a burst of steam.`,
          `Steam room: lower temperature but air saturated with moisture. Most people find it much less drying to the eyes, though the heat can still be uncomfortable.`,
          `Infrared sauna: heating panels warm your body more directly, and the air temperature is usually lower than a traditional sauna. The room is still warm and fairly dry.`,
        ],
      },
      {
        p: `Gyms, spas and hotels often have more than one option. If dry eyes bother you, a steam room or a lower bench may be the more comfortable choice.`,
      },
      { h: 'Tips for using a sauna when your eyes are dry' },
      {
        list: [
          `Follow the posted time and temperature guidance for that sauna. Shorter sessions mean less time in drying air.`,
          `Sit on a lower bench, where it’s cooler.`,
          `Close your eyes for part of the session; a closed lid stops evaporation from the eye’s surface.`,
          `Don’t sit facing the heater or directly in the path of air from a vent.`,
          `Skip the phone. Staring at a screen slows blinking, and phones don’t belong in a sauna anyway.`,
          `Rinse off and cool down gradually afterward, and drink water.`,
        ],
      },
      { h: 'Sauna goggles and towels' },
      {
        p: `Some people use a cool damp washcloth over closed eyes during a session. Others look for sauna goggles or eye covers. Whatever you use, make sure it’s clean and rated for heat; metal frames and some plastics get very hot. Glasses are a poor idea for the same reason, and contact lens wearers should ask their eye doctor about saunas, since Quell’s label doesn’t give directions for use with contacts.`,
      },
      { h: 'Using eye drops after the sauna' },
      {
        p: `Quell’s Uses read: {uses}. It is designed to reinforce the tear film’s oil layer to help reduce moisture loss, the loss that hot dry air speeds up. The directions are: {directions}. One of those daily uses can fall after your sauna session, once you’ve cooled down, dried your face and washed your hands.`,
      },
      {
        p: `Use it in the locker room or changing area, not inside the hot room. Sweat running into the eye and hands that have touched benches and towels aren’t a good combination with an open bottle. Follow the handling rule: {tip}.`,
      },
      { h: 'Don’t leave eye drops in the sauna or a hot locker' },
      {
        p: `Quell’s label gives a storage range: {storage}. Sauna air is far hotter than that, and so is a bag left on the sauna bench, a car parked in summer sun, or a locker right next to the sauna wall. Keep the bottle in a locker away from the heat source, or leave it at home and use your drop when you get back. If a bottle has been somewhere too hot, check it before use: {doNotUse}. [Can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car) explains why heat matters.`,
      },
      { h: 'When to stop and see a doctor' },
      {
        p: `Sauna heat isn’t a substitute for medical care, and eye drops aren’t a fix for everything a sauna can bring on. If your eyes hurt, your vision changes, or something like a splash of cleaning product or essential oil gets in your eye, rinse with clean water and get medical advice. For ongoing symptoms, follow the label: {stopUse}`,
      },
      {
        p: `[Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists signs not to wait on. If your eyes feel dry most days, not just after the sauna, the [self-check](/self-check) can help you describe it to an eye doctor. It is not a diagnosis.`,
      },
      { h: 'Hot tubs, hot yoga and other heat' },
      {
        p: `Heat sessions come in other forms too. Hot yoga rooms are heated and often humid. Hot tubs put warm, chemically sanitized water close to your eyes; [Dry eyes after swimming in a pool](/guides/dry-eyes-after-swimming) covers pool water. The same principles apply across all of them: limit time, keep your face out of direct heat, and keep the bottle somewhere that stays within the label’s range.`,
      },
    ],
    faq: [
      {
        q: 'Does a sauna dry out your eyes?',
        a: `A traditional dry sauna can. Very hot, low-humidity air speeds evaporation from the tear film, so many people notice dry or gritty eyes during and after a session.`,
      },
      {
        q: 'Is a steam room better than a sauna for dry eyes?',
        a: `Many people find a steam room less drying because the air is full of moisture, though the heat can still be uncomfortable. Keep sessions short either way.`,
      },
      {
        q: 'Can I put eye drops in before going in the sauna?',
        a: `The label doesn’t address timing around a sauna. Many people find it more comfortable to use a drop afterward, once they’ve cooled down and washed their hands. The directions stay the same: {directions}.`,
      },
      {
        q: 'Is it okay to leave eye drops in a locker next to the sauna?',
        a: `Only if the locker stays at room temperature. Quell’s label says: {storage}, so avoid lockers beside the sauna wall or a bag left on the bench.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-when-sleeping-with-a-fan-on',
    title: 'Dry eyes when sleeping with a fan on',
    description:
      'A fan blowing across your face all night can leave your eyes dry when you wake up. How to position fans and purifiers, and when to ask a doctor.',
    category: 'using',
    addedOn: '2026-11-13',
    body: [
      {
        p: `If you wake up with dry eyes and sleep with a fan on, the airflow is a likely part of it. Air moving across your face for hours pulls moisture from the eye’s surface, and even closed eyes are affected if the lids don’t seal completely. Aim the fan away from your head, lower the speed, and consider a humidifier. Eyes that don’t fully close during sleep are a question for an eye doctor.`,
      },
      { h: 'Why are my eyes dry when I wake up?' },
      {
        p: `During the day, blinking spreads a fresh layer of tears every few seconds. While you sleep, you don’t blink at all. The eyelids normally cover the eye and hold moisture in. Anything that pulls that moisture out over seven or eight hours, like dry air or a steady breeze, shows up as gritty, tight or stuck-feeling eyes when you open them in the morning.`,
      },
      {
        p: `A fan doesn’t dry the air the way a heater does; it moves it. But moving air carries moisture away from any surface it passes over, and that includes your eyelids and the eye itself. The effect is strongest when the air hits your face directly.`,
      },
      { h: 'Ceiling fans, box fans and air purifiers' },
      {
        list: [
          `Ceiling fans: the downdraft lands right on a pillow placed under the center of the fan. Lowering the speed or switching the fan’s direction, so it pulls air up, often helps.`,
          `Box and tower fans: the closer and more direct, the stronger the effect. Point them at your feet or the wall, or turn them to oscillate.`,
          `Air purifiers: they move air too. Put one across the room and aim the outlet away from the bed.`,
          `Window air conditioners and vents: cooled air is often drier, and a vent above the bed can blow straight down. Close or redirect it.`,
          `CPAP masks: air leaking toward the eyes is a separate issue. [Dry eyes from a CPAP mask](/guides/dry-eyes-from-cpap) covers it.`,
        ],
      },
      { h: 'Can sleeping with a fan on cause dry eyes?' },
      {
        p: `It can contribute, especially for people whose eyes already run dry from screens, contact lenses, or a dry climate. Many people sleep with a fan for the white noise or to stay cool, and they don’t have to give that up. The goal is to keep the noise and the cooling while taking your face out of the airstream.`,
      },
      {
        list: [
          `Move the fan so it blows across the room or at your body below the shoulders.`,
          `Use the lowest speed that keeps you comfortable.`,
          `Try a sound machine or app for white noise and turn the fan off.`,
          `Use a sleep timer so the fan shuts off after you’re asleep.`,
          `Sleep on your back or turn your face away from the fan.`,
        ],
      },
      { h: 'Do my eyes fully close when I sleep?' },
      {
        p: `Some people’s eyelids don’t close completely during sleep. A partner may notice a sliver of white showing, or you may wake with one eye far drier than the other. If that sounds familiar, a fan makes it worse, because air reaches the exposed part of the eye directly. Lids that don’t fully close are a question for an eye doctor, who can check why and suggest what to do. [Why does one eye feel drier than the other?](/guides/why-does-one-eye-feel-drier-than-the-other) has more on uneven dryness.`,
      },
      { h: 'Humidity in the bedroom' },
      {
        p: `A fan in a dry room is a double hit: dry air plus airflow. Running a humidifier in the bedroom adds moisture back. [Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) covers the details, including cleaning, which matters for anything that puts water into the air you breathe.`,
      },
      {
        p: `Keep the humidifier and the fan apart, and don’t aim the fan to blow mist across the bed. In winter, a fan can be traded for a cooler room and lighter bedding; [Waking up with dry eyes in winter](/guides/waking-up-with-dry-eyes-in-winter) looks at the cold-season side.`,
      },
      { h: 'Using eye drops in the morning' },
      {
        p: `Quell’s Uses read: {uses}. It is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The directions are: {directions}, so one of those can be your first thing in the morning. Wash your hands, blink a few times to let your eyes settle, and follow the handling rule: {tip}.`,
      },
      {
        p: `Quell’s label doesn’t give directions for using it during sleep, and it’s a liquid drop rather than a nighttime product. If you want something for nighttime, ask your eye doctor or pharmacist what fits.`,
      },
      { h: 'Where to keep the bottle at night' },
      {
        p: `A nightstand is a convenient spot, as long as it isn’t next to a heater or under a sunny window. The label says: {storage}. Keep the cap on and the bottle upright.`,
      },
      { h: 'When morning dryness needs a doctor' },
      {
        p: `If you’ve moved the fan and your eyes still feel bad every morning, or you wake with pain, discharge, or vision that doesn’t clear after a few blinks, see an eye doctor. The label’s stop-use line applies: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Can a fan dry out your eyes while you sleep?',
        a: `Yes. Air moving across your face for hours carries moisture away from the eyelids and the eye’s surface, so you may wake with dry, gritty eyes. Aim the fan away from your head.`,
      },
      {
        q: 'Why are my eyes so dry when I wake up?',
        a: `You don’t blink while you sleep, so nothing spreads fresh tears for hours. Dry air, a fan or vent blowing on your face, or lids that don’t fully close can all add to morning dryness.`,
      },
      {
        q: 'Where should a fan be placed so it doesn’t dry my eyes?',
        a: `Across the room, pointed at the wall, your feet or your body below the shoulders, on a low setting. For a ceiling fan, lower the speed or reverse its direction.`,
      },
      {
        q: 'Is it bad if my eyes don’t close all the way when I sleep?',
        a: `It’s worth asking an eye doctor about, because the exposed part of the eye can dry out while you sleep, especially with a fan running. They can check why and suggest what to do.`,
      },
    ],
  },

  {
    slug: 'why-are-my-eyes-dry-and-burning',
    title: 'Why are my eyes dry and burning?',
    description:
      'Dry, burning eyes often follow dry air, screens or wind, but burning can also mean something a doctor should check. What the label covers and when to go.',
    category: 'using',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Eyes often feel dry and burning when the tear film evaporates faster than it’s replaced, as happens in dry, windy, heated or air-conditioned air or during long screen sessions. Something irritating getting into the eye can cause burning too. Quell’s label lists its Uses as: {uses}. Burning that comes with pain, vision changes or doesn’t settle is a reason to see a doctor.`,
      },
      { h: 'Why do my eyes dry out and burn?' },
      {
        p: `The surface of the eye is very sensitive, and it depends on a thin tear film to stay comfortable. That film has a mucus layer against the eye, a watery middle and an oil layer on top that slows evaporation. When the film thins or breaks up between blinks, nerve endings on the surface react, and people describe the feeling as burning, stinging, grittiness or a sense that something is in the eye.`,
      },
      {
        p: `Burning is a common way dryness feels, but it isn’t only about dryness. The label for Quell doesn’t use the word “burning” at all. Its Uses read: {uses}. So a lubricating drop fits burning that comes from a dry eye surface, and not burning from other causes.`,
      },
      { h: 'Common everyday causes' },
      {
        list: [
          `Dry indoor air from heating or air conditioning, especially with a vent blowing on your face.`,
          `Wind, on a walk, a bike ride or with a car window down.`,
          `Screens: people blink less while focused on a phone, tablet or monitor, so the tear film isn’t renewed as often.`,
          `Smoke from a fireplace, campfire or grill.`,
          `Low sleep, which leaves eyes tired and less comfortable the following morning.`,
          `Pool water, sunscreen, soap, makeup or lotion getting into the eye.`,
        ],
      },
      {
        p: `[Dry air, wind and altitude](/guides/dry-air-wind-and-altitude) and [Screens and your tear film](/guides/screens-and-your-tear-film) cover the two most common causes in more depth.`,
      },
      { h: 'Why are my eyes always dry and burning?' },
      {
        p: `If the feeling is there most days, look at the patterns. Is it worse at the end of a workday at a computer, in a heated office, after driving with the heater on, or first thing in the morning? Those patterns point to the environment and habits you can change. Burning every day with no obvious pattern, or burning that keeps getting worse, is a reason to see an eye doctor rather than keep guessing.`,
      },
      {
        p: `The [self-check](/self-check) asks about the situations where your eyes feel worst and can help you describe them clearly at an appointment. It is not a diagnosis.`,
      },
      { h: 'Why are my eyes suddenly dry and burning?' },
      {
        p: `A sudden change deserves more attention than a slow, familiar one. Think back over the last few hours: did anything get in your eye, did you rub it, did you start a new product near your eyes, or were you somewhere smoky or windy? If something splashed in, rinse with clean water. Then watch it. If burning comes with pain, a change in vision, sensitivity to light, or doesn’t ease after you’ve left the irritating situation, get medical advice promptly. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs not to wait on.`,
      },
      { h: 'Why are my eyes dry and burning when I wake up?' },
      {
        p: `During sleep there’s no blinking, and moisture can be lost to dry bedroom air or a fan. If the lids don’t close fully, the exposed part of the eye dries more. [Dry eyes when sleeping with a fan on](/guides/dry-eyes-when-sleeping-with-a-fan-on) covers bedroom airflow. Morning burning that doesn’t fade once you’ve been up a while is worth mentioning to an eye doctor.`,
      },
      { h: 'Do eye drops help with burning eyes?' },
      {
        p: `A lubricating drop can help when burning comes from a dry eye surface. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its directions are: {directions}. Use it with clean hands and follow the label’s handling rule: {tip}.`,
      },
      {
        p: `Some people feel a brief sting when any drop first goes in, which is different from ongoing burning. [Why do eye drops sting?](/guides/why-do-eye-drops-sting) covers that. If a drop itself seems to make burning worse, stop using it and ask a pharmacist or eye doctor.`,
      },
      { h: 'When burning means stop and see a doctor' },
      {
        p: `The label is specific about when to stop: {stopUse} Don’t keep adding drops to push through those signs. Also skip self-care and get help quickly for a chemical splash, an injury to the eye, or sudden vision changes.`,
      },
      {
        p: `Quell’s label doesn’t give directions for contact lens wearers, children, or use alongside other eye drops. If any of those apply, ask your eye doctor or pharmacist before using it.`,
      },
      { h: 'Simple changes that ease dry, burning eyes' },
      {
        list: [
          `Turn heater and car vents away from your face.`,
          `Run a humidifier where you sleep and work.`,
          `Take regular screen breaks and blink fully.`,
          `Wear wraparound sunglasses outside in wind.`,
          `Keep soaps, lotions and sunscreen away from the eye area.`,
        ],
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel dry and burn at the same time?',
        a: `When the tear film thins or evaporates between blinks, the eye’s sensitive surface often reacts with a burning or stinging feeling. Dry air, wind and screens are common triggers.`,
      },
      {
        q: 'Why are my eyes suddenly burning?',
        a: `Sudden burning often follows something getting into the eye, like smoke, soap or a cosmetic, or time in wind or dry air. If it comes with pain or vision changes, or doesn’t ease, see a doctor promptly.`,
      },
      {
        q: 'Can eye drops help burning eyes?',
        a: `A lubricating drop can help when burning comes from dryness. Quell’s Uses read: {uses}. Burning from other causes, or burning that continues, needs a doctor.`,
      },
      {
        q: 'When should I see a doctor for burning eyes?',
        a: `See one if burning comes with eye pain, vision changes or light sensitivity, follows a splash or injury, or keeps going. Quell’s label says: {stopUse}`,
      },
    ],
  },
]
