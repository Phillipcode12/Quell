import type { Guide } from '@/lib/guide-types'

export const DAILY_20261111_B: Guide[] = [
  /*
   * Sources fetched 2026-11-11 for dry-eyes-in-phoenix:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00023183.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00023183.csv
   * - https://www.weather.gov/psr/19912020Normals (7.22 in vs 8.03 in)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt (CCD humidity, Phoenix row)
   * - https://www.ncei.noaa.gov/products/land-based-station/comparative-climatic-data (M/A = morning/afternoon)
   * - https://www.weather.gov/psr/Aug252025 (dust storm, visibility, wind reports)
   */
  {
    slug: 'dry-eyes-in-phoenix',
    title: 'Dry eyes in Phoenix',
    description:
      'Phoenix air is very dry for much of the year, and dust and air conditioning add to it. What NOAA’s records show, and what helps on a desert day.',
    category: 'local',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Phoenix is a hard place on the tear film. NOAA’s records for Sky Harbor show just 7.22 inches of rain in a normal year and June afternoon humidity averaging 12 percent, and the dry air, desert dust and nonstop air conditioning all pull moisture off the eye’s surface faster. Blinking more, managing indoor air and a lubricating drop used as labeled can make the days more comfortable.`,
      },
      { h: 'Dry eyes in Arizona: what the weather records show' },
      {
        p: `NOAA’s 1991–2020 climate normals for Phoenix Sky Harbor International Airport put normal yearly precipitation at 7.22 inches. The National Weather Service office in Phoenix points out that the figure dropped from 8.03 inches in the previous set of normals, so the official baseline itself got drier. Most of that rain arrives in two bursts: winter storms from December through March and summer monsoon storms in July and August. June is the driest month on the books, with a normal of 0.02 inches.`,
      },
      {
        p: `Heat is the other half of it. The same normals count an average of 111.3 days a year when the high reaches 100°F or more, and 173.4 days when it reaches at least 90°F. The normal high for July is 106.5°F. Warm air can hold a great deal of water vapor, so when there isn’t much vapor around, the relative humidity sinks very low and anything wet, including the front of your eye, gives up moisture readily.`,
      },
      { h: 'Are dry eyes common in Arizona?' },
      {
        p: `We won’t quote a percentage, because the honest answer would rest on surveys we can’t check. What can be checked is the air. NOAA’s Comparative Climatic Data tables, which list a morning and an afternoon humidity reading for each month, give Phoenix an annual average of 46 percent in the morning and 23 percent in the afternoon. In June the afternoon figure drops to 12 percent, and even in December and January the afternoon averages reach only 34 and 33 percent.`,
      },
      {
        p: `For comparison, plenty of people moving to the Valley from the Midwest or the coasts notice their eyes, lips and skin within the first few weeks. That’s the climate doing what the numbers say it will, and it isn’t by itself a reason for alarm. If your eyes ache, your vision changes, or the discomfort keeps going, that’s a question for an eye doctor rather than a drop.`,
      },
      { h: 'Can dry air cause dry eyes?' },
      {
        p: `The tear film has three layers: a thin mucus layer against the eye, a watery middle, and an oily outer layer that slows evaporation. Dry, warm or moving air speeds up that evaporation. In Phoenix you get all three at once on a summer afternoon, and then you walk into a building where the air conditioning has wrung even more moisture out of the air and a vent is blowing across your face.`,
      },
      {
        p: `Daily life here adds a few more pushes. Long drives on the I-10 or the Loop 101 with the AC vents aimed at your face. Office days spent staring at a monitor, which cuts down how often you blink. Early-morning hikes on Camelback or South Mountain before the heat, when the air is already dry and often breezy. Each one shortens the time a fresh layer of tears stays on the eye between blinks.`,
      },
      { h: 'Dry eyes from dust and monsoon storms' },
      {
        p: `Summer monsoon thunderstorms can push walls of dust across the metro. The Weather Service office in Phoenix documented one on August 25, 2025, with visibility in the metro falling below a quarter of a mile and wind reports of roughly 50 to 65 mph. On days like that, fine grit ends up on the lids and lashes, and people tend to rub their eyes, which only makes things worse.`,
      },
      {
        list: [
          'When a dust advisory is out, stay indoors where you can, or wear close-fitting sunglasses or goggles outside.',
          'Don’t rub. Rinse your face and closed eyelids with clean water once you’re inside.',
          'Change or clean the HVAC filter after a big dust event, since dust in the ducts keeps circulating.',
          'If grit feels stuck in the eye, or the eye hurts or your vision blurs afterward, call an eye doctor or urgent care.',
        ],
      },
      { h: 'Indoor air in a Phoenix house' },
      {
        p: `Most homes in the Valley run air conditioning from late spring into October, and evaporative coolers still turn up in older neighborhoods. Refrigerated AC dries indoor air as it cools; a swamp cooler adds moisture, which is why it works poorly once the monsoon humidity arrives. A few practical moves for the AC months:`,
      },
      {
        list: [
          'Point car and ceiling-fan airflow away from your face, especially at night.',
          'Keep a small humidifier in the bedroom if your eyes feel worst on waking, and clean it as the manual says.',
          'Set a reminder to look away from your screen and blink fully every so often.',
          'Drink water through the day; you lose more than you notice in this heat.',
        ],
      },
      { h: 'Using a lubricating drop in the desert' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the layer that stands between the watery tears and that dry desert air. Its Uses line reads: {uses}. The directions read: {directions}. Our [Phoenix page](/eye-drops/phoenix-az) has ordering details for the city, and the [Arizona page](/eye-drops/state/arizona) covers the rest of the state.`,
      },
      {
        p: `Heat matters for storage too. The label’s storage line reads: {storage}. A car parked at a trailhead in July can climb far past that inside. Keep the bottle in a bag you carry with you, not in the glove box or the center console. If a bottle has been cooking in a car, look at it before use. The label’s Do not use line reads: {doNotUse}.`,
      },
      {
        p: `The label also carries a caution worth reading before you order: {warnings}. Quell contains emu oil. The label also says when to stop: {stopUse} If you’re unsure whether a lubricating drop fits your situation, the [dry eye self-check](/self-check) is a quick place to start; it’s not a diagnosis, and it will tell you when to see someone.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Phoenix?',
        a: `The air holds very little moisture for much of the year. NOAA’s Comparative Climatic Data tables give Phoenix an average afternoon humidity of 23 percent across the year and 12 percent in June, and long hours of air conditioning dry indoor air further.`,
      },
      {
        q: 'Does the Arizona monsoon help dry eyes?',
        a: `Monsoon season raises the humidity for a stretch of July and August, and many people notice the air feels less harsh. It also brings dust storms, so the gain is uneven, and the dry months return by fall.`,
      },
      {
        q: 'Can I keep eye drops in my car in Phoenix?',
        a: `It isn’t a good idea in summer. Quell’s storage line reads “{storage},” and a parked car in Phoenix gets much hotter than that, so carry the bottle with you instead.`,
      },
      {
        q: 'Can I order Quell for delivery in Phoenix?',
        a: `Yes. Quell ships to addresses across the United States, including Phoenix and the rest of Arizona, from Brentwood, Tennessee. Shipping is {shipping}, and it’s free on orders of {freeBottles} or more bottles.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-11 for dry-eyes-in-flagstaff:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00003103.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00003103.csv
   *   (station elevation 2,134.5 m; snowfall, precipitation, freeze nights, daily range)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt (CCD humidity, Flagstaff row)
   * - https://www.ncei.noaa.gov/products/land-based-station/comparative-climatic-data
   * Dropped: the city's own elevation figure and the "108.8 inches" snowfall
   * seen on a tourism site; only the NCEI station values are used.
   */
  {
    slug: 'dry-eyes-in-flagstaff',
    title: 'Dry eyes in Flagstaff, Arizona',
    description:
      'Flagstaff sits near 7,000 feet, with cold dry winters, heavy snow and wide day-to-night swings. Why that’s hard on eyes, and what to do about it.',
    category: 'local',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Flagstaff dries eyes out in a different way from the desert below it. The airport weather station sits about 7,000 feet up, winter nights fall below freezing more than 200 times a year, and sun on 90 inches of seasonal snow adds glare. Thin, cold, often windy air and furnace heat indoors pull moisture from the tear film, so protection outdoors and humid air indoors both help.`,
      },
      { h: 'How high is Flagstaff, and why altitude matters' },
      {
        p: `NOAA lists the Flagstaff Pulliam Airport weather station at 2,134.5 meters, which works out to just over 7,000 feet. At that height the air is thinner and, on most days, carries little water vapor. Sunlight is stronger too, and it bounces off snow and pale rock. People who drive up from Phoenix for a weekend often notice their eyes feel drier and more tired on the first day, before they’ve noticed anything else about the altitude.`,
      },
      { h: 'Snow, cold and furnace air' },
      {
        p: `NOAA’s 1991–2020 normals for that station put average seasonal snowfall at 90.1 inches, with January the snowiest month at 20.9 inches. The ground has at least an inch of snow on it on about 62 days in a typical winter. The same records count 202 nights a year, on average, when the low drops to 32°F or below. That’s more than half the year with freezing nights.`,
      },
      {
        p: `Cold air holds very little moisture, and once it’s pulled indoors and warmed by a furnace or a wood stove, its relative humidity falls sharply. That’s why Flagstaff homes can feel parched in January even after a storm has buried the yard. If your eyes feel worst first thing in the morning, the bedroom air is a good place to look.`,
      },
      {
        list: [
          'Run a humidifier in the bedroom through the heating season, and clean it on the schedule its manual gives.',
          'Keep the thermostat moderate at night; hotter indoor air is drier air.',
          'Aim car heater vents at your feet or the windshield, not your face.',
          'Wood stoves and fireplaces dry the room quickly, so sit a few feet back from them.',
        ],
      },
      { h: 'Sun, glare and wind on the mountain' },
      {
        p: `A clear morning on the San Francisco Peaks after a snowfall is beautiful and very bright. Light reflects up from the snow as well as down from the sky, and the wind on the ridges moves dry air across your eyes without a break. Skiers at Snowbowl, hikers on the Kachina Trail and anyone shoveling the driveway are out in the same conditions.`,
      },
      {
        list: [
          'Wear wraparound sunglasses or goggles that block wind from the sides.',
          'Take short breaks out of the wind on long days outside.',
          'Blink deliberately when you come in from the cold; people tend to squint and blink less in glare.',
          'If your eyes become painful or your vision changes after a day on the snow, get them checked rather than waiting.',
        ],
      },
      { h: 'Wide swings from day to night' },
      {
        p: `Flagstaff’s days and nights are far apart. NOAA’s normals show an average gap of 30 degrees between the daily high and low over the year, and 36.7 degrees in June, when a 79°F afternoon commonly gives way to a low in the low 40s. A June day in town can feel pleasant and still be very dry; NOAA’s Comparative Climatic Data tables put Flagstaff’s average June afternoon humidity at 20 percent.`,
      },
      {
        p: `Late spring is the stretch many residents find hardest. The snow is gone, the monsoon hasn’t arrived, June’s normal precipitation is just 0.30 inches, and spring wind picks up dust from dry ground. Then July and August bring most of the summer rain, with normals of 2.61 and 3.04 inches, and afternoon storms that make the air feel softer for a while.`,
      },
      { h: 'Is Flagstaff drier than Phoenix?' },
      {
        p: `Not by the numbers. Flagstaff gets about 20.52 inches of precipitation in a normal year, nearly three times Phoenix’s total, and its average afternoon humidity across the year is 39 percent in the NOAA humidity tables. The difference is in what kind of dry it is: cold, high and windy with long heating seasons, rather than hot and dusty with long air-conditioning seasons. Students arriving at Northern Arizona University from either direction, coastal or desert, sometimes find their eyes take a few weeks to settle in.`,
      },
      { h: 'A lubricating drop at 7,000 feet' },
      {
        p: `On the label, the Uses line reads: {uses}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The directions say: {directions}. For ordering to a Flagstaff address, see our [Flagstaff page](/eye-drops/flagstaff-az); the [Arizona page](/eye-drops/state/arizona) covers other towns in the state, and [dry air, wind and altitude](/guides/dry-air-wind-and-altitude) goes further into why elevation matters.`,
      },
      {
        p: `Cold is a storage question here in a way it isn’t in most places. The label’s storage line reads: {storage}. So a bottle shouldn’t spend a January night in the truck or a day in a ski locker. Keep it in an inside pocket or a bag that comes indoors with you. Before using a bottle that has been somewhere cold, check it against the Do not use line: {doNotUse}. The milky look itself is expected: {milky}.`,
      },
      {
        p: `Two label lines to read before you start. The caution: {warnings}. And the stop-use line: {stopUse} If you aren’t sure whether your symptoms are the weather or something else, ask an optometrist or ophthalmologist.`,
      },
    ],
    faq: [
      {
        q: 'Does high altitude make your eyes dry?',
        a: `It often does. Air at Flagstaff’s elevation of about 7,000 feet tends to be drier and windier, the sun is stronger, and indoor heating runs much of the year, all of which speed evaporation from the tear film.`,
      },
      {
        q: 'How much snow does Flagstaff get a year?',
        a: `NOAA’s 1991–2020 normals for the Flagstaff Pulliam Airport station put average seasonal snowfall at 90.1 inches, with January the snowiest month at 20.9 inches.`,
      },
      {
        q: 'Can eye drops freeze in a car in Flagstaff?',
        a: `On many winter nights the temperature falls below freezing, and Quell’s label reads “{storage}.” Bring the bottle indoors rather than leaving it in a vehicle, and check the Do not use line: “{doNotUse}.”`,
      },
      {
        q: 'Why do my eyes feel dry after skiing at Snowbowl?',
        a: `Cold wind on the slopes moves dry air across the eye, and glare from snow makes people squint and blink less. Goggles that seal out wind help, and pain or changes in vision afterward are a reason to see an eye doctor.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-11 for dry-eyes-in-las-vegas:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00023169.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00023169.csv
   * - https://www.weather.gov/vef/1991-2020Normals (4.19 in to 4.18 in)
   * - https://weather.gov/vef/ClimateofLasVegas (valley size, mountains, wind and dust, snow frequency)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt (CCD humidity, Las Vegas row)
   * - https://www.ncei.noaa.gov/products/land-based-station/comparative-climatic-data
   * Dropped: annual sunshine hours (only found on non-NOAA sites).
   */
  {
    slug: 'dry-eyes-in-las-vegas',
    title: 'Dry eyes in Las Vegas',
    description:
      'Las Vegas gets about four inches of rain a year, then adds casino air conditioning, wind-blown dust and long nights out. What helps your eyes there.',
    category: 'local',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Las Vegas air is very dry, and visitors often feel it in their eyes within a day or two. NOAA’s normals give the airport 4.18 inches of precipitation a year, and its humidity tables put June afternoons at 10 percent. Add air-conditioned casinos, wind-blown dust and late nights, and the tear film evaporates quickly. Breaks, blinking, sunglasses and a labeled lubricating drop help.`,
      },
      { h: 'How dry is Las Vegas, by the numbers' },
      {
        p: `NOAA’s 1991–2020 climate normals for the airport weather station, still listed in the data under its old McCarran name, put normal annual precipitation at 4.18 inches. The National Weather Service office in Las Vegas notes that’s a hair below the 4.19 inches of the previous normals. May and June are the driest months, with normals of 0.07 and 0.04 inches. February is the wettest, at 0.80 inches.`,
      },
      {
        p: `NOAA’s Comparative Climatic Data tables give one morning and one afternoon humidity average per month. For Las Vegas the yearly figures are 36 percent in the morning and 20 percent in the afternoon. June afternoons average 10 percent, the lowest of the three desert cities we’ve looked at in these guides. Even December afternoons only reach 32 percent.`,
      },
      { h: 'Heat on the Strip and in the suburbs' },
      {
        p: `The same normals count about 78 days a year at 100°F or hotter, and the normal high in July is 104.5°F. Winters are mild in comparison, with a normal December high of 56.9°F, and the airport records only about 10 nights a year at or below freezing. The Weather Service notes that the airport can run 5 to 15 degrees warmer at night than outlying parts of the valley, so Henderson, Summerlin and the northwest often feel cooler after dark.`,
      },
      { h: 'Casino air, hotel rooms and late nights' },
      {
        p: `A trip to Las Vegas tends to stack several things that dry the eyes on top of each other. Casino floors and hotel towers are air-conditioned around the clock, and the cooling dries the air further. Slot machines and video poker keep your eyes fixed on a bright screen, which cuts down blinking. Conventions mean hours under bright lights in large halls. Then come late nights, short sleep and a flight home in a dry cabin.`,
      },
      {
        list: [
          'Step outside or into a quieter area every hour or so and blink fully a few times.',
          'In the hotel room, turn the AC fan off its highest setting and keep it from blowing toward the bed.',
          'Drink water between drinks; the desert dehydrates people who don’t feel thirsty.',
          'Pack drops in your carry-on so they’re with you on the plane, not in a checked bag.',
          'Take a real night’s sleep at least once in a long trip; tired eyes feel drier.',
        ],
      },
      { h: 'Dry eyes from wind and dust' },
      {
        p: `The Las Vegas Valley covers about 600 square miles, ringed by mountains that, according to the National Weather Service, rise roughly 2,000 to 10,000 feet above the valley floor; Mount Charleston tops out at 11,918 feet. The Weather Service notes that winds over 50 mph are infrequent but that strong winds here often carry blowing dust and sand. Spring is when many locals notice it, as fronts sweep through and pick up grit from open desert and construction sites.`,
      },
      {
        list: [
          'Check the forecast for wind or dust advisories and plan outdoor time around them.',
          'Wraparound sunglasses keep blowing grit off the eyes far better than flat lenses.',
          'If something gets in your eye, rinse with clean water instead of rubbing.',
          'Change your home’s air filter more often in windy months.',
        ],
      },
      { h: 'Living in Las Vegas versus visiting' },
      {
        p: `Visitors tend to notice the dryness most at the start of a trip, while for residents it’s more of a background condition that flares with wind and heat. If you live here, a few habits help year-round: a humidifier in the bedroom, airflow aimed away from your face in the car, and regular screen breaks at work. Hikers at Red Rock Canyon or on Mount Charleston should add sunglasses and plan for the extra wind and sun up high.`,
      },
      {
        p: `Snow is a novelty. The Weather Service says measurable snow at the official station typically happens once every four or five years, and the normal annual snowfall there is 0.2 inches. So in Las Vegas, unlike mountain towns, winter dryness comes from furnace heat and cool dry fronts rather than snowpack and altitude.`,
      },
      { h: 'Using a lubricating drop in Las Vegas' },
      {
        p: `Quell’s Uses line reads: {uses}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and that oil layer is what slows evaporation in very dry air. The directions are short: {directions}. You can order it to a Las Vegas address from our [Las Vegas page](/eye-drops/las-vegas-nv), and the [Nevada page](/eye-drops/state/nevada) covers Reno, Henderson and the rest of the state.`,
      },
      {
        p: `Don’t leave a bottle in a rental car or by a pool in July. The storage line reads: {storage}. A parked car in a Las Vegas summer gets far hotter than that. Keep it in a day bag or the hotel room. If you’re flying home with it, [traveling with eye drops](/guides/traveling-with-eye-drops) covers carry-on liquids.`,
      },
      {
        p: `Before you use it, read the caution: {warnings}. The bottle-tip line matters on the go: {tip}. And the label’s stop-use line: {stopUse} A long weekend of dry eyes is common in this city; pain, light sensitivity or blurred vision that doesn’t clear is not something to wait out.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes hurt in Las Vegas?',
        a: `Dry desert air, round-the-clock air conditioning, screens and short sleep all speed evaporation from the tear film, and dryness can feel sore or gritty. If the pain is real pain, or your vision changes, see an eye doctor or urgent care rather than waiting it out.`,
      },
      {
        q: 'How much rain does Las Vegas get a year?',
        a: `NOAA’s 1991–2020 climate normals put normal annual precipitation at the Las Vegas airport station at 4.18 inches. February is the wettest month at 0.80 inches, and June the driest at 0.04 inches.`,
      },
      {
        q: 'Is the air in Las Vegas casinos dry?',
        a: `Casinos and hotels run air conditioning around the clock, and cooling removes moisture from indoor air in an already dry climate. Combined with bright screens that reduce blinking, it’s a common reason visitors notice dry, tired eyes.`,
      },
      {
        q: 'Can I ship eye drops to my Las Vegas hotel?',
        a: `Quell ships to US addresses, but we don’t promise a delivery date, so a hotel stay is a tight target. It’s simpler to order to your home before the trip and pack the bottle in your carry-on.`,
      },
    ],
  },

  /*
   * Checked 2026-11-11: https://www.fda.gov/drugs/buying-using-medicine-safely/besaferx-your-source-online-pharmacy-information
   * (BeSafeRx "helps consumers learn about how to safely buy prescription medicines online").
   */
  {
    slug: 'how-to-spot-a-fake-eye-drop-website',
    title: 'How to spot a fake eye drop website',
    description:
      'A fake eye drop site usually gives itself away: no Drug Facts panel, no named maker, vague returns, odd payment requests. A checklist to run first.',
    category: 'ordering',
    addedOn: '2026-11-11',
    body: [
      {
        p: `A real eye drop seller shows you the full Drug Facts panel, names the manufacturer with a street address and a phone number that someone answers, spells out its refund terms, and takes ordinary card payments over a secure connection. A fake one tends to skip several of those, pushes a price far below everyone else’s, or asks you to pay in unusual ways. Check all of them before entering a card.`,
      },
      { h: 'Why fake drug sites exist' },
      {
        p: `Eye drops are small, light and bought again and again, which makes them attractive to people running copycat storefronts. Some of these sites never ship anything and exist only to collect card numbers. Others ship a product, but you can’t tell where it was made, how it was stored or whether it’s what the box says. With something you put in your eyes, either outcome is a bad one.`,
      },
      { h: 'Check 1: is the Drug Facts panel on the page?' },
      {
        p: `Over-the-counter drugs sold in the US carry a Drug Facts panel in a standard format set by the FDA: active ingredients, uses, warnings, directions, other information and inactive ingredients, in that order. A legitimate seller has no reason to hide it. If a product page shows only marketing copy and a photo, or shows a panel that’s blurry, cropped or in a different order, take that as a warning.`,
      },
      {
        p: `Compare what you see against the box itself if you’ve bought the product before. For Quell, the full panel is on our [Drug Facts page](/drug-facts): the Uses line reads “{uses},” and the inactive list is {inactives}. A copycat page that lists different ingredients, a different bottle size than {size}, or different directions is not selling the same thing.`,
      },
      { h: 'Check 2: is there a real company behind it?' },
      {
        list: [
          'Look for the manufacturer’s legal name, not just a brand name.',
          'Look for a street address, not only a PO box or “contact us” form.',
          'Look for a phone number with stated hours, then call it during those hours.',
          'Search the address on a map. A residential apartment or a mail drop for a “pharmaceutical company” is worth a second look.',
          'Check that the company name on the site matches the one on the product label.',
        ],
      },
      {
        p: `Quell is made by {company}, at {address}. The phone number is {phone}, answered {hours}. All of it is on our [About page](/about#contact), and the same name appears on the carton.`,
      },
      { h: 'Check 3: the address bar and the padlock' },
      {
        p: `The web address should start with https, and your browser should show it as secure. That only means the connection is encrypted, though; scam sites can have a padlock too. Read the domain name carefully. Look-alike addresses swap letters, add a hyphen or a word like “official” or “store”, or use an unusual ending. If you got to the site from an ad or an email, type the address yourself instead of clicking through.`,
      },
      { h: 'Check 4: prices and payment' },
      {
        p: `A bottle priced at a fraction of what every other seller charges isn’t a lucky find. Neither is a “90 percent off, today only” banner with a countdown clock that resets when you reload the page. Payment is the other tell. Requests to pay by wire transfer, gift card, cryptocurrency or a person-to-person app are red flags for a drug purchase. A credit card gives you a way to dispute a charge if nothing arrives.`,
      },
      { h: 'Check 5: refund terms you can actually find' },
      {
        p: `A real store publishes its terms on a page you can read before buying: how refunds work, how long you have, what happens if the package arrives damaged. Fake sites often have a returns page full of placeholder text, a policy copied from another store with that store’s name still in it, or no policy at all. Ours are at [/terms](/terms): {returns}, within {returnDays} days of delivery, and damaged, incorrect or broken-seal orders are replaced.`,
      },
      { h: 'Check 6: claims a drug label can’t make' },
      {
        p: `An over-the-counter lubricating drop has a set list of uses on its label. A page that promises to fix any eye problem, end your need for glasses, or replace what a doctor has prescribed is selling something other than an OTC drop, or describing one dishonestly. Reviews that all use the same few phrases, posted on the same dates, are another sign of a page assembled quickly.`,
      },
      { h: 'What about FDA’s BeSafeRx?' },
      {
        p: `The FDA runs a campaign called BeSafeRx that helps consumers learn how to buy prescription medicines safely online. Its focus is online pharmacies that fill prescriptions, so it doesn’t list every store that sells an over-the-counter product. The habits it teaches carry over, though: buy from sellers that identify themselves, and be skeptical of prices and promises that seem off.`,
      },
      { h: 'If you think you already used a fake site' },
      {
        list: [
          'Call the number on the back of your card and ask about disputing the charge.',
          'Change any password you reused on that site.',
          'Don’t use eye drops from a package you can’t trace to a real manufacturer.',
          'If you used them and your eyes hurt or your vision changed, see a doctor.',
        ],
      },
      {
        p: `Our own [guide to buying eye drops online safely](/guides/how-to-buy-eye-drops-online-safely) covers the broader shopping side, and you can [order Quell here](/#buy) once you’re satisfied.`,
      },
    ],
    faq: [
      {
        q: 'How can you tell if an eye drop website is legit?',
        a: `Look for the full Drug Facts panel, a named manufacturer with a street address and a working phone number, published refund terms, a secure https connection and normal card payment. A site missing several of those is one to skip.`,
      },
      {
        q: 'Are cheap eye drops online fake?',
        a: `Not always, but a price far below every other seller’s is a common sign of a copycat site. Check who the seller is and whether the product page matches the real label before you buy.`,
      },
      {
        q: 'Does a padlock mean a website is safe?',
        a: `No. The padlock means the connection between you and the site is encrypted. Scam sites can have one too, so check the domain spelling and the company details as well.`,
      },
      {
        q: 'Is BeSafeRx for over-the-counter eye drops?',
        a: `BeSafeRx is an FDA campaign about buying prescription medicines safely online. It isn’t a directory of stores selling over-the-counter products, though its basic advice about checking who a seller is applies to any purchase.`,
      },
    ],
  },

  /*
   * Checked 2026-11-11:
   * - https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts
   * - https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts/additional-information-about-recalls
   * - https://www.fda.gov/safety/industry-guidance-recalls/recalls-background-and-definitions
   * - https://www.fda.gov/drugs/drug-safety-and-availability/drug-safety-communications
   * - https://www.fda.gov/safety/medwatch-fda-safety-information-and-adverse-event-reporting-program
   */
  {
    slug: 'how-to-check-if-eye-drops-were-recalled',
    title: 'How to check if your eye drops were recalled',
    description:
      'Find the lot number on your bottle, then search the FDA’s recalls page and weekly Enforcement Report. A step-by-step check and what to do on a match.',
    category: 'choosing',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Write down the product name, lot number and expiration date from your bottle or carton, then search the FDA’s Recalls, Market Withdrawals, & Safety Alerts page for the product, filtering by drugs. Because not every recall gets a notice there, also search the FDA’s weekly Enforcement Report. A recall usually covers specific lots, so it only applies to you if your lot number matches.`,
      },
      { h: 'Step by step: checking a bottle you own' },
      {
        list: [
          'Get the box and the bottle. Note the exact product name, the size, the lot number and the expiration date.',
          'Go to fda.gov and open the page called Recalls, Market Withdrawals, & Safety Alerts.',
          'Type the brand or product name in the search box, and use the Product Type filter to show drugs.',
          'Open any notice that matches and read which lot numbers and dates it lists.',
          'If nothing shows up, search the FDA’s Enforcement Report for the same name.',
          'Check the manufacturer’s own website or call its listed phone number to confirm.',
        ],
      },
      { h: 'Why the FDA recalls page may not list everything' },
      {
        p: `The FDA describes that page as information gathered from press releases and other public notices about certain recalls. It says plainly that not all recalls have press releases or appear there. The complete list is the weekly Enforcement Report, which the FDA says includes every recall once it has been classified. The recalls page also archives notices after about three years, so an older recall may only be in the archive or the Enforcement Report.`,
      },
      { h: 'What the recall classes mean' },
      {
        p: `When you read a notice or a report entry, you’ll often see a class number. The FDA defines them this way:`,
      },
      {
        list: [
          'Class I: there’s a reasonable chance that using the product could cause serious health problems or death.',
          'Class II: the product may cause temporary or medically reversible problems, or the chance of serious harm is remote.',
          'Class III: using the product is not likely to cause adverse health effects.',
          'Market withdrawal: a minor issue the FDA wouldn’t take legal action over, which the company corrects or removes on its own.',
        ],
      },
      {
        p: `A recall can start with the company itself, at the FDA’s request, or by FDA order. The class tells you how serious the agency considers the problem, which helps you decide how quickly to act.`,
      },
      { h: 'Matching the lot number exactly' },
      {
        p: `Recalls are usually tied to particular lots, not to every bottle with that name. Read your lot code character by character against the notice, including letters, dashes and leading zeros. If the notice also lists expiration dates or package sizes, those should match too. If you’ve already thrown away the carton and the bottle label is worn, the company may be able to help if you give them the order date and where you bought it. Our guide to [what the lot number on eye drops means](/guides/what-the-lot-number-on-eye-drops-means) shows where to look.`,
      },
      { h: 'Drug safety communications are different' },
      {
        p: `The FDA also publishes Drug Safety Communications, which share new information about risks of medicines with patients and health care professionals. They aren’t recalls and don’t pull lots off shelves, but they can tell you about a concern with an ingredient or a type of product. If you take several medicines, it’s worth knowing the page exists.`,
      },
      { h: 'If your lot is on a recall' },
      {
        list: [
          'Stop using the bottle and keep it, with the carton, until you know what the notice asks you to do.',
          'Follow the instructions in the notice for refunds or returns; they come from the company running the recall.',
          'If you’ve been using it and your eyes hurt, your vision changed, or you feel unwell, contact your doctor.',
          'Report a problem you think the product caused through the FDA’s MedWatch program, which takes reports from the public about over-the-counter medicines.',
        ],
      },
      { h: 'Checking Quell' },
      {
        p: `The same steps apply to Quell. Search the FDA’s recalls page and the Enforcement Report for it by name and compare your lot number with anything you find. If you have a question about a specific bottle, call {company} at {phone} ({hours}) with the lot number in hand. The rest of the label, including its warnings, is on our [Drug Facts page](/drug-facts).`,
      },
      {
        p: `Separately from any recall, the label lists checks that apply every time you use a bottle. Its Do not use line reads: {doNotUse}. Its stop-use line: {stopUse} Those apply to any bottle, recalled or not, and they’re worth keeping in mind alongside the date. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers when a drop isn’t the answer.`,
      },
    ],
    faq: [
      {
        q: 'Where do I find eye drop recalls?',
        a: `Start with the FDA’s Recalls, Market Withdrawals, & Safety Alerts page on fda.gov and filter to drugs. Because not every recall is posted there, also search the FDA’s weekly Enforcement Report, which lists recalls after they’re classified.`,
      },
      {
        q: 'Does a recall mean every bottle of that brand is affected?',
        a: `Usually not. Recalls generally name specific lot numbers, and sometimes expiration dates or sizes. Compare the codes on your bottle and carton exactly with the notice.`,
      },
      {
        q: 'What is a Class I recall?',
        a: `It’s the FDA’s most serious category. The agency uses it when there’s a reasonable chance that using the product could cause serious health problems or death.`,
      },
      {
        q: 'What should I do if my eye drops were recalled?',
        a: `Stop using the bottle, keep it and the carton, and follow the instructions in the recall notice. If you’ve had eye pain, changes in vision or other problems, contact your doctor.`,
      },
    ],
  },

  /*
   * Checked 2026-11-11 on ecfr.gov (versioner API, current text):
   * 21 CFR 201.18 "Drugs; significance of control numbers"; 21 CFR 201.17
   * "Drugs; location of expiration date".
   */
  {
    slug: 'what-the-lot-number-on-eye-drops-means',
    title: 'What the lot number on eye drops means',
    description:
      'The lot number links your bottle to the batch it was made in. Where to find it, what federal rules say about it, and when you’ll need to quote it.',
    category: 'label',
    addedOn: '2026-11-11',
    body: [
      {
        p: `A lot number is a code that identifies the production batch your bottle came from. Federal regulations describe it as the key to a drug package’s complete manufacturing history, so a company can trace when and how that batch was made. You’ll find it printed or stamped on the carton and usually on the bottle, often next to the expiration date. You need it to check recalls or report a problem.`,
      },
      { h: 'What the regulation says' },
      {
        p: `The rule is 21 CFR 201.18, titled “Drugs; significance of control numbers.” It says the lot or control number on a drug’s label should make it possible to trace the complete manufacturing history of the package. It goes further: a wrong lot number can make the product misbranded under federal law. A neighboring rule, 21 CFR 201.17, deals with where the expiration date goes, and the two codes are usually printed together.`,
      },
      {
        p: `In plain terms, the lot number connects the bottle in your hand to the factory’s records: which raw materials went into that batch, which equipment made it, what testing it passed and when it was released. You can’t read any of that from the code yourself. The point is that the manufacturer can.`,
      },
      { h: 'Where to find it on an eye drop carton and bottle' },
      {
        list: [
          'On the carton: check an end flap, the bottom, or a side panel near the barcode.',
          'On the bottle: look along the edge of the label, often in small print beside the expiration date.',
          'It may be labeled “LOT”, “Lot No.”, “Batch” or just “L” followed by letters and numbers.',
          'It may be ink-jet printed or pressed into the cardboard with no ink at all, so tilt the box under a light.',
        ],
      },
      {
        p: `A small bottle has very little label space, so the print can be tiny. A magnifying glass or your phone camera, zoomed in, helps. If the bottle and carton codes differ, note both and say so when you ask about them.`,
      },
      { h: 'Lot number, expiration date and barcode: which is which' },
      {
        p: `The expiration date is a date, usually marked “EXP” and given as a month and year. The lot number is a code that may contain letters. The barcode under the black lines is a product code shared by every unit of that item, so it can’t tell anyone which batch you have. Many drug packages also show a National Drug Code, which identifies the product and package, not the batch. When a company asks for your lot number, they want the batch code, not any of these.`,
      },
      { h: 'When you’ll need to quote it' },
      {
        list: [
          'Checking whether a recall applies to your bottle, since recalls usually name specific lots.',
          'Calling the manufacturer about something that seems wrong with a bottle.',
          'Reporting a problem to the FDA’s MedWatch program.',
          'Telling a pharmacist or doctor exactly which product you used, if they ask.',
        ],
      },
      {
        p: `For Quell, that call goes to {company} at {phone}, {hours}. Have the lot number, the expiration date and your order number ready; [where to find your order number](/guides/finding-your-order-number) explains the last one. A photo of the carton end and the bottle label, taken before you throw anything away, saves squinting later.`,
      },
      { h: 'Why it’s worth keeping the carton' },
      {
        p: `Most people toss the box as soon as the bottle’s out, and the bottle label can get smudged in a pocket or bag. If you keep spares, store each in its carton so the codes stay readable. When you open a new bottle, it costs nothing to jot the lot number and the opening date on a note or in your phone. [Keeping an eye drop log](/guides/keeping-an-eye-drop-log) suggests a simple format.`,
      },
      { h: 'If two bottles in one order have different lots' },
      {
        p: `That’s normal. Bottles in a single order can come from different production batches, and each will carry its own lot number and possibly a different expiration date. Use the bottle with the earlier date first, and keep track of which lot you’re on if you ever need to report something.`,
      },
      { h: 'If you can’t find a lot number at all' },
      {
        p: `Because the federal rule expects a drug’s label to carry a lot or control number, a carton and bottle with none anywhere is unusual. First rule out the obvious: faint ink, an embossed code with no ink, or print hidden under a price sticker or a fold in the carton. If there’s truly nothing, ask the seller where the bottle came from before you use it, and be wary of buying that product from the same place again. A missing code is also one of the signs worth weighing in [how to spot a fake eye drop website](/guides/how-to-spot-a-fake-eye-drop-website).`,
      },
      { h: 'What a lot number doesn’t tell you' },
      {
        p: `It won’t tell you whether a bottle has been stored correctly since it left the factory, or whether it’s fine to use today. The label covers that. Storage: {storage}. Do not use: {doNotUse}. The rest of Quell’s label is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Where is the lot number on eye drops?',
        a: `Look on the carton’s end flap, bottom or side panel, and along the edge of the bottle label. It’s often beside the expiration date and marked LOT, Lot No., Batch or simply L.`,
      },
      {
        q: 'Is the lot number the same as the expiration date?',
        a: `No. The expiration date is a date, usually marked EXP. The lot number is a batch code, often with letters, that ties the bottle to its manufacturing records.`,
      },
      {
        q: 'Why do drug companies ask for the lot number?',
        a: `Under 21 CFR 201.18, the lot or control number should let the manufacturer trace the package’s complete manufacturing history. With it, they can look up exactly which batch your bottle came from.`,
      },
    ],
  },

  /*
   * Checked 2026-11-11 on ecfr.gov: 21 CFR 201.17 "Drugs; location of
   * expiration date" (immediate container and outer package, unless legible
   * through the outer package).
   */
  {
    slug: 'where-is-the-expiration-date-on-eye-drops',
    title: 'Where is the expiration date on eye drops?',
    description:
      'Look on the bottle label and on the carton, usually marked EXP beside the lot number. How to read faint dates, and what to do with a bottle past its date.',
    category: 'label',
    addedOn: '2026-11-11',
    body: [
      {
        p: `On both the bottle and the carton. A federal rule, 21 CFR 201.17, says that when a drug carries an expiration date it has to appear on the immediate container and on the outer package too, unless it can be read through that packaging. Look for “EXP” followed by a month and year, usually printed beside the lot number on a carton flap and along the edge of the bottle label.`,
      },
      { h: 'On the carton' },
      {
        p: `Turn the box over and look at the end flaps first, then the bottom and the side panels. The date is often printed by machine after the box is made, so it may sit in a plain white area or overlap the artwork slightly. Some cartons have it pressed into the cardboard with no ink, which is nearly invisible in dim light. Tilt the box under a lamp or window so the raised marks cast a shadow.`,
      },
      { h: 'On the bottle' },
      {
        p: `An eye drop bottle doesn’t leave much room for a label. The date is usually in small type along one edge, sometimes running vertically. On some bottles it’s printed straight on the plastic. If the print has rubbed off from riding around in a pocket, the carton is your backup, which is a good reason not to throw the box away until the bottle is finished.`,
      },
      { h: 'Reading the format' },
      {
        list: [
          '“EXP 08/2027” or “EXP 08 2027”: month, then year.',
          '“EXP 2027-08” or “2027/08”: year first, then month.',
          '“EXP AUG 2027”: the month spelled out or abbreviated.',
          'A full day, month and year is less common on small cartons but does turn up.',
        ],
      },
      {
        p: `When only a month and year appear and you’re right at the edge, the cautious choice is to switch to a fresh bottle before that month starts rather than in its final days. If you want a firmer answer for a particular product, a pharmacist can tell you how they read it.`,
      },
      { h: 'Why the date is on both pieces' },
      {
        p: `The rule exists because the two pieces get separated. Cartons go in the recycling and bottles travel in bags, desks and car consoles. Having the date on each means you can still check it on whichever piece you’ve kept. There’s a related federal rule, 21 CFR 211.137, saying expiration dates come from stability testing, so the date reflects how long the product was shown to hold up under the storage conditions on its label.`,
      },
      { h: 'If your bottle is past its date' },
      {
        list: [
          'Don’t use it. Replace it with a fresh bottle.',
          'Dispose of it the way [how to dispose of eye drops](/guides/how-to-dispose-of-eye-drops) describes.',
          'Check your spares while you’re at it, and move the earliest date to the front.',
          'If you used a few drops before noticing and your eyes feel fine, there’s no need to panic, but stop and mention it to a pharmacist if you have questions.',
        ],
      },
      { h: 'If a new order arrives close to its date, or past it' },
      {
        p: `Check the dates on every bottle when a delivery comes in. If a Quell bottle arrives already past its expiration date, that’s an incorrect order, and we replace incorrect orders within {returnDays} days of delivery. Call {phone} ({hours}) with your order number and the date on the bottle. If you simply ordered more than you’ll use before the dates come up, our terms allow {returns}, as long as you’re within {returnDays} days of delivery.`,
      },
      { h: 'Keeping track of dates at home' },
      {
        p: `Once you’ve found the date, make it easy to see next time. Write it in large marker on the front of the carton, or on a strip of tape on the bottle if the label leaves room. If you keep spares, line them up with the earliest date at the front of the drawer. A reminder in your phone for the month before the earliest date takes ten seconds to set and saves a surprise. Anyone helping a relative manage several medicines can use the same trick for every box in the cabinet, which also makes a pharmacist visit quicker.`,
      },
      { h: 'The date isn’t the only check' },
      {
        p: `A bottle within its date can still be one not to use. Quell’s Do not use line reads “{doNotUse},” and its storage line reads “{storage}.” A bottle that was left in a hot car or froze in a garage deserves a careful look whatever its date says. The color is milky brown to begin with; {appearance}`,
      },
      {
        p: `For how long drops keep in general, and what “opened” versus “unopened” means for the date, see [do eye drops expire?](/guides/do-eye-drops-expire). The full panel is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'How do I read the expiration date on eye drops?',
        a: `Look for EXP followed by a month and year, such as 08/2027 or 2027-08. Some cartons spell the month out, and some have the date pressed into the cardboard without ink.`,
      },
      {
        q: 'Why can’t I find the expiration date on my eye drop bottle?',
        a: `On small bottles it’s printed in tiny type along the label edge, sometimes vertically, and it can rub off. Check the carton’s end flaps and bottom, and tilt the box under a light in case the date is embossed.`,
      },
      {
        q: 'What if my eye drops arrive with an expired date?',
        a: `For a Quell order, that counts as an incorrect order, and incorrect orders are replaced within {returnDays} days of delivery. Call {phone} with your order number and the date printed on the bottle.`,
      },
    ],
  },

  {
    slug: 'how-do-i-know-if-my-eye-drops-have-gone-bad',
    title: 'How do I know if my eye drops have gone bad?',
    description:
      'Check the expiration date, the color, how the bottle was stored, and whether the tip touched anything. What’s normal for Quell, and when to replace it.',
    category: 'using',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Check five things: the expiration date on the bottle or carton, whether the solution looks different from when you opened it, whether it was stored outside the range on the label, whether the tip touched anything, and whether the cap was left off. Quell is milky brown from the start, so that color is normal; a change from it is not. When in doubt, replace the bottle or ask a pharmacist.`,
      },
      { h: 'How to tell if eye drops are expired' },
      {
        p: `The date is printed on the bottle label and on the carton, usually as “EXP” with a month and year. Federal rules require it in both places, so if one has worn off, check the other. A bottle past that date shouldn’t be used, even if it’s still sealed and looks perfect. Our guide to [where the expiration date is on eye drops](/guides/where-is-the-expiration-date-on-eye-drops) shows where to look and how to read the formats.`,
      },
      { h: 'Color: what’s normal for Quell and what isn’t' },
      {
        p: `Many eye drops are clear, so a cloudy one can look wrong. Quell is the other way around. The label says: {milky}. And as we tell every new customer, {appearance}`,
      },
      {
        p: `What the label does warn about is change. Its “Do not use” line reads: {doNotUse}. The practical way to judge that is to compare against a fresh bottle, or against how this bottle looked the day you opened it. A noticeably darker, lighter, separated or different-looking solution is a reason to stop using that bottle. [Why is Quell milky brown?](/guides/why-is-quell-milky-brown) explains the starting color.`,
      },
      { h: 'Storage: was the bottle kept in range?' },
      {
        p: `Quell’s storage line reads: {storage}. That range covers a normal home in almost any season. It doesn’t cover a glove box in summer, a car parked through a freezing night, a windowsill in direct afternoon sun or a bag left beside a heater. A bottle that spent time in one of those places should get a careful look before you use it. If it looks any different, replace it; if it looks the same but you’re uneasy, a pharmacist can help you decide.`,
      },
      { h: 'The tip and the cap' },
      {
        p: `Contamination doesn’t show. The label puts it simply: {tip}. If the tip touched your eye, your lashes, your finger, a countertop or the floor, the solution behind it may no longer be clean, even though nothing looks different. The same goes for a bottle that sat with its cap off for a while. In either case the cautious choice is a fresh bottle, especially since there’s no visible sign to wait for.`,
      },
      {
        list: [
          'Wash and dry your hands before you open the bottle.',
          'Hold the tip above the eye without letting it touch anything.',
          'Recap the bottle straight away, and don’t wipe or rinse the tip.',
          'Don’t share a bottle with anyone else.',
        ],
      },
      { h: 'What happens if you use expired eye drops?' },
      {
        p: `The label can’t answer that, and neither can we. What federal rules do say is that a drug’s expiration date comes from stability testing showing the product still meets its standards up to that date when stored as the label says. Past it, nobody has shown that it does. If you’ve already used a few drops from an expired bottle, stop, switch to a fresh one and watch how your eyes feel. The label’s stop-use line applies here as anywhere: {stopUse}`,
      },
      { h: 'Do unopened eye drops expire?' },
      {
        p: `Yes. The printed date applies to sealed bottles too, so a spare that’s been sitting in a drawer for a long time may have run past its date without ever being opened. Check your spares every few months, keep them in their cartons, and use the oldest first. Quell’s label doesn’t give a separate time limit once a bottle is opened; a pharmacist is the right person to ask about that.`,
      },
      { h: 'A quick checklist before each new bottle' },
      {
        list: [
          'Seal intact when you first open it.',
          'Date not passed, on both bottle and carton.',
          'Color matches the milky brown you expect.',
          'Stored within the label’s range since it arrived.',
          'Note the opening date somewhere you’ll see it.',
        ],
      },
      { h: 'When to ask a pharmacist instead of guessing' },
      {
        p: `If you can’t tell whether a change in the solution is real, if a bottle was somewhere very hot or cold, or if you’ve used drops from a bottle you now doubt and your eyes feel different, ask a pharmacist. For questions about a particular Quell bottle, call {company} at {phone}, {hours}, with the lot number. A sealed bottle you won’t use can be refunded within {returnDays} days of delivery; see [our terms](/terms).`,
      },
    ],
    faq: [
      {
        q: 'Do eye drops go bad after opening?',
        a: `Opened drops can become contaminated if the tip touches anything or the cap is left off, and nothing may look different. Quell’s label doesn’t give a separate period after opening, so ask a pharmacist how long to keep an opened bottle.`,
      },
      {
        q: 'Is it bad if my eye drops look cloudy?',
        a: `It depends on the product. Quell is milky brown from the start, and that’s normal. What its label warns against is using the bottle if the product changes color from how it should look.`,
      },
      {
        q: 'Can eye drops go bad in a hot car?',
        a: `Quell’s storage line reads “{storage},” and a parked car can go well past it. A bottle that has been in a hot car should be checked for any change before use, and replaced if it looks different.`,
      },
      {
        q: 'Do unopened eye drops expire?',
        a: `Yes. The expiration date printed on the carton and bottle applies whether or not the seal has been broken. Check sealed spares and use the earliest date first.`,
      },
    ],
  },
  /*
   * Checked 2026-11-11: MPI (New Zealand Ministry for Primary Industries)
   * mānuka honey pages at mpi.govt.nz, via search results (the pages would not
   * render to text): honey from bees foraging on mānuka, Leptospermum
   * scoparium, which grows throughout New Zealand; the definition combines
   * five attributes (four nectar chemicals, one pollen DNA marker); honey
   * labeled mānuka for export must be tested by an MPI-recognized laboratory.
   * 21 CFR 201.66(c)(8) checked on ecfr.gov: inactives listed alphabetically.
   */
  {
    slug: 'manuka-honey-in-eye-drops',
    title: 'Manuka honey in eye drops',
    description:
      'Quell lists manuka honey among its inactive ingredients. What manuka honey is, where it comes from, how New Zealand defines it, and what the label says.',
    category: 'formula',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Manuka honey is honey made by bees that forage on the mānuka plant, Leptospermum scoparium, which grows throughout New Zealand. In Quell it appears on the Drug Facts panel as one of {inactiveCount} inactive ingredients, listed as “Manuka Honey.” The label makes no separate claim for it; the uses it states belong to the product as a whole, and its three active ingredients are {actives}.`,
      },
      { h: 'What is manuka honey?' },
      {
        p: `Honey takes its character from the flowers the bees visit. Mānuka is a shrub or small tree that grows wild across New Zealand, and the honey bees make from its nectar is sold as a distinct product, separate from blended table honey. The word is Māori, which is why New Zealand’s government writes it with a macron over the first a. Product labels, including Quell’s, usually drop the macron.`,
      },
      { h: 'How New Zealand defines it' },
      {
        p: `Because mānuka honey sells at a premium, New Zealand’s Ministry for Primary Industries set a scientific definition for it. MPI describes the definition as a combination of five attributes: four chemicals that come from mānuka nectar and one DNA marker from mānuka pollen. Honey labeled as mānuka for export from New Zealand has to be tested by a laboratory MPI recognizes. MPI has said the aim is to protect consumers and producers from fraud and to give overseas markets confidence in what they’re buying.`,
      },
      {
        p: `That definition covers honey sold as mānuka out of New Zealand. It isn’t a US drug standard, and the Drug Facts panel on Quell doesn’t cite any grade or rating number for the honey it contains. If you’ve seen numbered ratings on jars of manuka honey at the grocery store, those belong to the food market and don’t appear on Quell’s label.`,
      },
      { h: 'Why is manuka honey in eye drops?' },
      {
        p: `The honest answer from the label is limited. Drug Facts panels follow an FDA format with separate sections for active and inactive ingredients. Active ingredients are the ones that carry the product’s stated uses; for Quell those are {actives}, and the Uses line reads: {uses}. Inactive ingredients make up the rest of the formula. The panel names them but doesn’t explain what each one is there for, and it makes no claim for any of them individually.`,
      },
      {
        p: `Quell’s makers describe the formula as one that’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, and they include several natural ingredients alongside the actives. Manuka honey is one. We don’t attribute any particular effect on the eye to it, because the label doesn’t. If you want to know more about how the overall formula is meant to work, [the tear film’s oil layer](/guides/the-tear-films-oil-layer) is the place to start.`,
      },
      { h: 'Where it sits in the ingredient list' },
      {
        p: `Here is Quell’s full inactive list as printed: {inactives}. Federal labeling rules, in 21 CFR 201.66, say inactive ingredients on an OTC drug that isn’t also a cosmetic are listed in alphabetical order. That’s why manuka honey falls after emu oil and the glyceryl esters and before the poloxamer. Its position says nothing about how much is in the bottle, and the label doesn’t give amounts for any inactive ingredient.`,
      },
      { h: 'Is it the same as the honey in my kitchen?' },
      {
        p: `No, and not just because of the flower source. Kitchen honey is a food made for eating. Anything that goes into an eye drop is part of a sterile drug product made under drug manufacturing rules, and you shouldn’t put food honey, or anything else from the pantry, into your eyes. The bottle you buy is the only form in which Quell’s ingredients are meant to reach the eye, used as the directions say: {directions}.`,
      },
      { h: 'Honey, bees and allergies' },
      {
        p: `If you know you react to honey or bee products, mention it to a pharmacist or your doctor before trying a drop that lists honey. The label’s own caution is about a different ingredient: {warnings}. That line refers to the emu oil in the formula, which the carton describes this way: {emuOil}`,
      },
      {
        list: [
          'Read the whole inactive list, not just the actives, if you have any known sensitivities.',
          'Bring the bottle or a photo of the panel to the pharmacy counter so the pharmacist sees the exact wording.',
          'If your eyes hurt, look different or your vision changes after using any drop, stop and see a doctor.',
        ],
      },
      { h: 'Does it affect the color?' },
      {
        p: `Quell is not a clear drop. The label’s description is: {milky}. It doesn’t break the color down ingredient by ingredient, so we won’t either. The important part is that the milky brown look is expected, and that the label says not to use the bottle if it changes from that. Its exact Do not use wording is: {doNotUse}.`,
      },
      { h: 'Vegan and other dietary questions' },
      {
        p: `Honey is an animal-derived ingredient, made by bees, and Quell also contains emu oil. People who avoid animal products for dietary or ethical reasons will want to know that before ordering. [Is Quell vegan?](/guides/is-quell-vegan) answers that directly, and [the natural ingredients in Quell](/guides/natural-ingredients-in-quell) covers the other plant and animal sources on the list.`,
      },
    ],
    faq: [
      {
        q: 'What is manuka honey made from?',
        a: `It’s made by honeybees from the nectar of the mānuka plant, Leptospermum scoparium, which grows throughout New Zealand. New Zealand’s Ministry for Primary Industries uses a five-part scientific test to define it for export.`,
      },
      {
        q: 'Is manuka honey an active ingredient in Quell?',
        a: `No. It’s listed among Quell’s {inactiveCount} inactive ingredients. The active ingredients are {actives}.`,
      },
      {
        q: 'Can I put manuka honey from a jar in my eyes?',
        a: `No. Food honey isn’t a sterile eye product. The manuka honey in Quell is one ingredient in a drug made to be used in the eye, and that finished product is the only form meant for eye use.`,
      },
      {
        q: 'Why is manuka spelled with a line over the a?',
        a: `Mānuka is a Māori word, and the macron marks a long vowel. New Zealand’s government uses it in official writing; many product labels, including Quell’s, leave it off.`,
      },
    ],
  },

  {
    slug: 'dead-sea-salt-in-eye-drops',
    title: 'Dead Sea salt in eye drops',
    description:
      'Quell’s label lists Dead Sea Salt (Sodium Chloride) as an inactive ingredient. What that name means, how salt fits in a drop, and what the label claims.',
    category: 'formula',
    addedOn: '2026-11-11',
    body: [
      {
        p: `On Quell’s Drug Facts panel, Dead Sea salt is listed as an inactive ingredient, with “Sodium Chloride” in parentheses after it. Sodium chloride is the chemical name for ordinary salt; “Dead Sea” names the source. Salt dissolved in water is a familiar base for many eye products, and tears themselves are naturally salty. The label makes no separate claim for this ingredient.`,
      },
      { h: 'What the label actually says' },
      {
        p: `Quell’s complete inactive list reads: {inactives}. Two things in that wording are worth noticing. The ingredient gets both a source name and a chemical name, so you can tell exactly what it is. And it’s under inactive ingredients, which means it isn’t one of the substances the label credits with the product’s uses. Those are the actives, {actives}, and the uses line reads: {uses}.`,
      },
      { h: 'What is Dead Sea salt?' },
      {
        p: `The Dead Sea is a landlocked salt lake bordered by Jordan to the east and by Israel and the West Bank to the west. Its water is far saltier than the ocean, and salt has been harvested from it and its shores for a very long time. “Dead Sea salt” is the general name for salt gathered there. Like sea salt anywhere, what’s sold under the name can vary, which is why a label that adds the chemical name, sodium chloride, is more precise than one that doesn’t.`,
      },
      { h: 'Sodium chloride: the same salt as table salt?' },
      {
        p: `Chemically, sodium chloride is the main component of table salt, rock salt and sea salt alike. What differs between them is where they come from, how they’re processed and what traces of other minerals ride along. In a drug, an ingredient has to meet the manufacturer’s specifications and be suitable for a sterile eye product, which a shaker of kitchen salt is not. Don’t make salt water at home and put it in your eyes; homemade solutions aren’t sterile.`,
      },
      { h: 'Salt in a solution, in general terms' },
      {
        p: `Many products meant for the eye are water-based, and dissolved salt is a common part of that base. The term you’ll see on other boxes is saline, which simply means salt water. Tears are salty too, as anyone who has tasted one knows; they’re mostly water with dissolved salts and other substances, topped by the thin oily layer that slows evaporation. We aren’t claiming a particular effect for the salt in Quell. The label doesn’t make one, and there’s no amount given to judge it by.`,
      },
      { h: 'Why there’s no percentage' },
      {
        p: `Active ingredients on an OTC Drug Facts panel are shown with their strength. Quell’s three are listed as {glycerol}, {polysorbate} and {mineralOil}. Inactive ingredients don’t carry amounts. Federal labeling rules, at 21 CFR 201.66, list them by name in alphabetical order, so Dead Sea salt sits second simply because of the letter D. It tells you nothing about how much of the bottle it makes up.`,
      },
      { h: 'Is salt the same as a preservative?' },
      {
        p: `No. Quell is preservative-free, and salt isn’t listed or described on the label as a preservative. The phrase “preservative-free” is about the absence of the added preservatives some multi-use drops contain. [What preservative-free means](/guides/what-does-preservative-free-mean) explains the term, and why the label’s instruction about the tip matters for any bottle: {tip}.`,
      },
      { h: 'Sodium in your diet and eye drops' },
      {
        p: `People watching their salt intake sometimes ask whether drops add to it. The label’s dose is tiny ({directions}), and eye drops aren’t food. If you’re on a strict sodium limit for medical reasons and want reassurance, a pharmacist can look at the label with you. The same goes for any product you aren’t sure about. Swallowing eye drops isn’t a route anyone should use, and the label is direct about it: {swallowed}.`,
      },
      { h: 'How to compare this with other drops' },
      {
        list: [
          'Look under both active and inactive ingredients; salt usually appears among the inactives.',
          'Expect different names for the same thing: sodium chloride, salt, saline base, sea salt.',
          'Remember that inactive ingredients are listed alphabetically, not by amount.',
          'Read the warnings and the Do not use line, which matter more day to day than any single inactive ingredient.',
        ],
      },
      {
        p: `If you’re working through every item on Quell’s list, [the inactive ingredients section](/guides/the-inactive-ingredients-section) covers how that part of the label works, and the full panel is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Is Dead Sea salt the same as sodium chloride?',
        a: `Sodium chloride is the chemical name for salt, and Quell’s label pairs the two: “Dead Sea Salt (Sodium Chloride).” The first part names where the salt comes from; the second names what it is.`,
      },
      {
        q: 'Why do eye drops contain salt?',
        a: `Many eye products are water-based solutions, and dissolved salt is a common part of that base. Tears themselves are salty. Quell’s label lists salt as an inactive ingredient and makes no specific claim for it.`,
      },
      {
        q: 'Can I make salt water eye drops at home?',
        a: `No. Homemade salt water isn’t sterile and isn’t made to any specification. Use a finished eye product as its label directs, and ask a doctor or pharmacist if you have questions.`,
      },
    ],
  },

  /*
   * Checked 2026-11-11: USDA ARS GRIN-Global taxonomy record 36335,
   * https://npgsweb.ars-grin.gov/gringlobal/taxon/taxonomydetail?id=36335
   * (Terminalia chebula Retz., Combretaceae; common names; native range).
   */
  {
    slug: 'terminalia-chebula-in-eye-drops',
    title: 'Terminalia chebula in eye drops',
    description:
      'Quell lists a plant called Terminalia chebula among its inactive ingredients. What the plant is, where it grows, why the label spells it differently.',
    category: 'formula',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Terminalia chebula is a tree in the Combretaceae family, native to parts of South and Southeast Asia and southern China, according to the US Department of Agriculture’s GRIN plant database. Its English names include black myrobalan and chebulic myrobalan. Quell lists it among {inactiveCount} inactive ingredients, with the species name printed “Chubula.” The label makes no claim for it on its own.`,
      },
      { h: 'What is Terminalia chebula?' },
      {
        p: `The USDA’s Germplasm Resources Information Network, run by the Agricultural Research Service, keeps a taxonomy record for the species. It gives the accepted name as Terminalia chebula Retz., the abbreviation crediting the botanist Anders Retzius, who published the name in the late eighteenth century. Terminalia is a large genus of trees and shrubs, and its family, Combretaceae, is found mostly in warm regions.`,
      },
      {
        p: `GRIN lists the species as native to Yunnan in China; to Bangladesh, Bhutan, India, Nepal and Sri Lanka on the Indian subcontinent; and to Cambodia, Laos, Myanmar and Vietnam in Indochina. It also records it as naturalized in some places outside that range.`,
      },
      { h: 'Its other names' },
      {
        list: [
          'Black myrobalan and chebulic myrobalan, in English.',
          'Haritaki and harra, names GRIN records from India.',
          'Myrobalan chébule in French, and chebulische Myrobalane in German.',
          'Mirobalanos índicos in Spanish.',
        ],
      },
      {
        p: `The fruit is the part of the plant people most often mean when they use these names. It has a long history of traditional use in its native region. We mention that only as background; Quell’s label makes no health claim for it, and neither do we.`,
      },
      { h: 'Why the label says “Chubula”' },
      {
        p: `Scientific plant names are standardized, and GRIN spells this one chebula, with an e. Quell’s label prints it with a u, as part of this list: {inactives}. Read in context, it’s clearly the same plant. We render the label exactly as printed rather than correcting it, because the Drug Facts wording on this site comes straight from the carton. If you search for the ingredient, use the standard spelling; you’ll find far more.`,
      },
      { h: 'What it does in Quell, according to the label' },
      {
        p: `Nothing specific is stated. Drug Facts panels follow a fixed FDA format. The active ingredients are the ones tied to the product’s uses; in Quell’s case, {actives}, and the Uses line reads: {uses}. Inactive ingredients are named but not explained, and they’re listed alphabetically under 21 CFR 201.66, which is why Terminalia sits near the end, after sterile water and before tromethamine.`,
      },
      {
        p: `More broadly, Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its makers include several natural ingredients alongside the actives. Terminalia chebula is the one from a tree fruit; others come from a bird, bees and the sea. [The natural ingredients in Quell](/guides/natural-ingredients-in-quell) walks through them together.`,
      },
      { h: 'A plant ingredient in a sterile drop' },
      {
        p: `An herb on a shelf and an ingredient inside a sterile eye product aren’t the same thing. Whatever form of a plant goes into a drug is made and handled under drug manufacturing rules. That’s why it matters that the bottle arrives sealed and is used as directed ({directions}), and why the label’s tip warning applies to every use: {tip}. Never put herbal powders, teas or home preparations into your eyes.`,
      },
      { h: 'If you take it as a supplement' },
      {
        p: `Haritaki is sold in some places as a dietary supplement or as part of herbal blends. Eye drops aren’t taken by mouth, and the label’s instruction on that point is: {swallowed}. If you use supplements or herbal products and have questions about combining anything with eye drops, a pharmacist is the right person to ask. Bring the bottle so they can read the panel themselves.`,
      },
      { h: 'Checking for sensitivities' },
      {
        list: [
          'Read the full inactive list if you’ve reacted to plant products before.',
          'Note the label’s caution, which is about a different ingredient: {warnings}.',
          'Stop and call a doctor if your eyes hurt or your vision changes after any new drop.',
        ],
      },
      {
        p: `The complete label is on our [Drug Facts page](/drug-facts), and [the inactive ingredients section](/guides/the-inactive-ingredients-section) explains how that part of any eye drop panel is laid out.`,
      },
    ],
    faq: [
      {
        q: 'What is Terminalia chebula?',
        a: `It’s a tree in the Combretaceae family, known in English as black myrobalan or chebulic myrobalan and in India as haritaki. The USDA’s GRIN database lists it as native to parts of South and Southeast Asia and Yunnan in China.`,
      },
      {
        q: 'Is Terminalia Chubula the same as Terminalia chebula?',
        a: `Yes. Quell’s label prints the species name with a u, while the standard botanical spelling, used by the USDA’s GRIN database, is chebula. They name the same plant.`,
      },
      {
        q: 'What is haritaki?',
        a: `Haritaki is a common name used in India for Terminalia chebula, a tree whose fruit has a long history of traditional use there. In Quell, Terminalia chebula is an inactive ingredient, and the label makes no claim for it.`,
      },
      {
        q: 'Is Terminalia chebula an active ingredient in Quell?',
        a: `No. It’s one of {inactiveCount} inactive ingredients on the panel. Quell’s actives, the ingredients the label ties to its uses, are {actives}.`,
      },
    ],
  },

  /*
   * Checked 2026-11-11 on PubChem (pubchem.ncbi.nlm.nih.gov, PUG REST):
   * CID 14871 Monolaurin (ChEBI: 1-monoglyceride with dodecanoyl acyl group);
   * CID 3893 Lauric acid (12-carbon saturated fatty acid; coconut and palm
   * kernel oils); CID 9921382 Glyceryl 1-undecylenate (no description);
   * CID 5634 Undecylenic acid (10-undecenoic acid; derived from castor oil).
   */
  {
    slug: 'glyceryl-laurate-in-eye-drops',
    title: 'Glyceryl laurate and glyceryl undecylenate',
    description:
      'Two inactive ingredients on Quell’s label, both made by joining glycerin to a fatty acid. What each one is chemically, and what the label says about them.',
    category: 'formula',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Glyceryl laurate and glyceryl undecylenate are esters: each is glycerin joined to a fatty acid. In glyceryl laurate the fatty acid is lauric acid, which has twelve carbons; in glyceryl undecylenate it’s undecylenic acid, which has eleven and one double bond. Both are listed among Quell’s {inactiveCount} inactive ingredients, and the label makes no specific claim for either.`,
      },
      { h: 'Where they appear on the label' },
      {
        p: `Quell’s inactive list reads: {inactives}. The two glyceryl ingredients sit next to each other because inactive ingredients on an OTC drug are listed alphabetically under federal labeling rules, 21 CFR 201.66. Laurate comes before undecylenate for that reason alone. No amounts are given for either, which is normal for inactive ingredients.`,
      },
      { h: 'Glycerin, glycerol and “glyceryl”' },
      {
        p: `Glycerol and glycerin are two names for the same small molecule, a three-carbon chain with three alcohol groups. It’s one of Quell’s actives, listed as {glycerol}. When a fatty acid is attached to one of glycerol’s alcohol groups, the result is called a monoglyceride, and its ingredient name starts with “glyceryl.” So the word glyceryl tells you the molecule is built on glycerol, while the second word names the fatty acid attached to it.`,
      },
      {
        p: `That shared backbone doesn’t make these esters the same as the active ingredient. On the label, glycerol is an active with its strength shown, and the glyceryl esters are separate inactive ingredients with none.`,
      },
      { h: 'What is glyceryl laurate?' },
      {
        p: `PubChem, the chemistry database run by the National Institutes of Health, files glyceryl laurate under the name monolaurin. Its record describes the compound as a monoglyceride with a lauroyl group, meaning lauric acid bonded to glycerol, and classes it as a dodecanoate ester. Dodecanoate is the systematic way of saying “from the twelve-carbon acid.”`,
      },
      {
        p: `Lauric acid itself, in PubChem’s description, is a straight-chain, twelve-carbon, medium-chain saturated fatty acid, and it’s the predominant fatty acid in coconut oil and palm kernel oil. Saturated means the carbon chain has no double bonds.`,
      },
      { h: 'What is glyceryl undecylenate?' },
      {
        p: `PubChem lists it as glyceryl 1-undecylenate, though its record carries no written description. The fatty acid half, undecylenic acid, has a fuller entry: PubChem identifies it as 10-undecenoic acid, an eleven-carbon acid with its double bond at the tenth position, near the end of the chain, and notes that it’s derived from castor oil. Joined to glycerol, it becomes glyceryl undecylenate.`,
      },
      { h: 'Comparing the two side by side' },
      {
        list: [
          'Both: a monoglyceride, meaning one fatty acid attached to glycerol.',
          'Glyceryl laurate: built from lauric acid, twelve carbons, no double bonds.',
          'Glyceryl undecylenate: built from undecylenic acid, eleven carbons, one double bond near the end.',
          'Sources PubChem names for each acid: coconut and palm kernel oils for lauric acid; castor oil for undecylenic acid.',
          'On Quell’s label: both inactive, both unquantified, neither tied to a stated use.',
        ],
      },
      { h: 'What they do in Quell' },
      {
        p: `The label doesn’t say, and we won’t guess. Inactive ingredients are named on a Drug Facts panel but not explained. The product’s uses are tied to its actives, {actives}, and the Uses line reads: {uses}. Separately, Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, but that statement is about the formula as a whole, not about any one ingredient on the inactive list.`,
      },
      { h: 'Do these ingredients affect how Quell looks?' },
      {
        p: `The label describes the product this way: {milky}. It doesn’t attribute the color or texture to any particular ingredient. What matters for you is the label’s Do not use line, “{doNotUse},” so it’s worth knowing what your bottle looks like when it’s fresh. [Why is Quell milky brown?](/guides/why-is-quell-milky-brown) covers the look.`,
      },
      { h: 'Coconut, castor and sensitivities' },
      {
        p: `Knowing the source oils can help people who track what they react to. If you’ve had problems with coconut- or castor-derived ingredients in other products, or with anything on Quell’s list, show the label to a pharmacist before trying it. The label’s own caution is about a different ingredient: {warnings}. And if any drop leaves your eyes painful or your vision changed, stop and see a doctor.`,
      },
      {
        p: `For the rest of the inactive list, see [the natural ingredients in Quell](/guides/natural-ingredients-in-quell), and for the actives, [glycerol in eye drops](/guides/glycerol-in-eye-drops). The full label is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'What is glyceryl laurate made from?',
        a: `It’s glycerol joined to lauric acid, a twelve-carbon saturated fatty acid that PubChem notes is predominant in coconut and palm kernel oils. PubChem files the compound under the name monolaurin.`,
      },
      {
        q: 'What is glyceryl undecylenate?',
        a: `It’s glycerol joined to undecylenic acid, an eleven-carbon fatty acid with one double bond that PubChem says is derived from castor oil. In Quell it’s an inactive ingredient with no specific claim on the label.`,
      },
      {
        q: 'Is glyceryl laurate the same as glycerin?',
        a: `No. Glycerin, also called glycerol, is the backbone; glyceryl laurate is glycerol with lauric acid attached. In Quell, glycerol is an active ingredient and glyceryl laurate is a separate inactive one.`,
      },
      {
        q: 'Is glyceryl laurate a preservative in eye drops?',
        a: `Quell’s label doesn’t describe it as one; it simply lists glyceryl laurate among the inactive ingredients. Quell is a preservative-free formula, and the label gives no individual role for any inactive ingredient.`,
      },
    ],
  },
  /*
   * Checked 2026-11-11: NLM MeSH D020442 Poloxamer (scope note; entry terms
   * include Poloxamer 188 and Pluronic F-68), https://meshb.nlm.nih.gov/record/ui?ui=D020442;
   * NLM MeSH D014325 Tromethamine (scope note; entry terms Trometamol, Tris),
   * https://meshb.nlm.nih.gov/record/ui?ui=D014325; PubChem CID 6503
   * Tris(hydroxymethyl)aminomethane (ChEBI: widely used biological buffer).
   */
  {
    slug: 'poloxamer-188-and-tromethamine-in-eye-drops',
    title: 'Poloxamer 188 and tromethamine in eye drops',
    description:
      'Two of the more technical names on Quell’s inactive list. What poloxamer 188 and tromethamine are chemically, their other names, and what the label says.',
    category: 'formula',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Poloxamer 188 is a nonionic block copolymer, a long molecule built from alternating blocks of polyoxyethylene and polyoxypropylene. Tromethamine is a small organic amine, also called tris or trometamol, widely used as a buffer. Both are inactive ingredients in Quell; the label spells the first “Polaxamer 188.” Neither carries a claim on the label, which ties the product’s uses to its three actives.`,
      },
      { h: 'Where they appear on Quell’s label' },
      {
        p: `The full inactive list reads: {inactives}. Under federal labeling rules for OTC drugs, 21 CFR 201.66, inactive ingredients go in alphabetical order without amounts. That puts the poloxamer in the middle of the list and tromethamine at the very end. Their places tell you the first letter of each name and nothing about quantity.`,
      },
      { h: 'What is poloxamer 188?' },
      {
        p: `The National Library of Medicine’s MeSH vocabulary, which indexes biomedical literature, defines poloxamer as a nonionic polyoxyethylene-polyoxypropylene block copolymer. In plainer terms, it’s a chain made of three segments: a middle block of one repeating unit with a block of a different repeating unit on each end. The two kinds of block behave differently around water, which is what makes the molecule useful to formulators.`,
      },
      {
        p: `MeSH adds that poloxamers come in grades ranging from liquids to solids, and that in pharmaceuticals they’re used as emulsifiers, solubilizers and wetting agents. Poloxamer 188 is one specific grade. MeSH lists Pluronic F-68 and Pluronic F68 among its entry terms, so you may see those trade names in technical writing about the same material.`,
      },
      { h: 'Why the label says “Polaxamer”' },
      {
        p: `The standard spelling, used by MeSH and in pharmacy references, is poloxamer, with two o’s. Quell’s label prints it with an a. It’s the same ingredient; we reproduce the label wording exactly as it appears on the carton rather than editing it. If you look the ingredient up, search the standard spelling.`,
      },
      { h: 'What is tromethamine?' },
      {
        p: `MeSH describes tromethamine as an organic amine proton acceptor, used in making surface-active agents and pharmaceuticals, as an emulsifying agent, as a biological buffer and as an alkalizer. PubChem, the NIH chemistry database, files it as tris(hydroxymethyl)aminomethane and describes it as a compound widely used as a biological buffer substance. Its structure is a central carbon carrying an amine group and three hydroxymethyl arms.`,
      },
      {
        list: [
          'Tris and Tris buffer, the names most lab scientists use.',
          'Trometamol, the international nonproprietary name.',
          'Tris(hydroxymethyl)aminomethane, the descriptive chemical name.',
          'Trisamine and Trizma, older and trade names MeSH also lists.',
        ],
      },
      { h: 'Buffers, in general terms' },
      {
        p: `A buffer is a substance that resists changes in pH, the measure of how acidic or alkaline a solution is. Chemists add buffers to all kinds of water-based products so the pH stays within a set range during storage. That’s the general chemistry. Quell’s label doesn’t state a role for tromethamine or give the product’s pH, so we won’t assign one. If you want that level of detail, {company} can be reached at {phone}, {hours}.`,
      },
      { h: 'What the label does tell you' },
      {
        p: `The product’s uses are tied to its actives, {actives}. The Uses line reads: {uses}. The directions are: {directions}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. That’s a statement about the formula, not about any one inactive ingredient, and nothing on the label singles out the poloxamer or tromethamine.`,
      },
      {
        p: `You’ll also notice that Quell describes itself as preservative-free. Neither of these ingredients is described on the label as a preservative. [What preservative-free means](/guides/what-does-preservative-free-mean) explains the term, and why the tip rule matters for every bottle: {tip}.`,
      },
      { h: 'Synthetic ingredients next to natural ones' },
      {
        p: `Quell’s inactive list mixes ingredients with obvious natural sources, such as emu oil, manuka honey, Dead Sea salt and a plant extract, with laboratory-made ones like these two. That’s common in drug products. Being synthetic doesn’t make an ingredient suspect, and being natural doesn’t make one harmless; what counts is the finished, sterile product used as labeled. [The natural ingredients in Quell](/guides/natural-ingredients-in-quell) covers the other side of the list.`,
      },
      { h: 'Questions to bring to a pharmacist' },
      {
        list: [
          'Whether any ingredient on the list has caused you trouble in another product.',
          'Whether Quell fits with other eye drops or medicines you use; the label doesn’t cover combining drops.',
          'What the label’s caution means for you: {warnings}.',
        ],
      },
      {
        p: `The complete panel is on our [Drug Facts page](/drug-facts). If any drop leaves your eyes painful or your vision changed, stop using it and see a doctor.`,
      },
    ],
    faq: [
      {
        q: 'What is poloxamer 188?',
        a: `It’s a grade of poloxamer, which the National Library of Medicine’s MeSH vocabulary defines as a nonionic polyoxyethylene-polyoxypropylene block copolymer. It’s also known by the trade name Pluronic F-68.`,
      },
      {
        q: 'What is tromethamine in eye drops?',
        a: `Tromethamine, also called tris or trometamol, is an organic amine that PubChem describes as widely used as a biological buffer. In Quell it’s listed as an inactive ingredient, and the label doesn’t state its role.`,
      },
      {
        q: 'Is polaxamer the same as poloxamer?',
        a: `Yes. Poloxamer is the standard spelling. Quell’s label prints it as Polaxamer 188, which refers to the same ingredient.`,
      },
    ],
  },

  /*
   * Checked 2026-11-11: PubChem CID 14231, 1,2-Octanediol (ChEBI:
   * "Octane-1,2-diol is an octanediol"), via PUG REST description endpoint.
   */
  {
    slug: 'caprylyl-glycol-in-eye-drops',
    title: 'Caprylyl glycol in eye drops',
    description:
      'Caprylyl glycol is first on Quell’s inactive ingredient list. What the compound is, why it comes first, and how it fits a preservative-free label.',
    category: 'formula',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Caprylyl glycol is the common ingredient name for 1,2-octanediol, an eight-carbon chain with alcohol groups on its first two carbons, as PubChem records it. It’s the first of {inactiveCount} inactive ingredients on Quell’s Drug Facts panel, purely because the list is alphabetical. The label doesn’t give it a stated role or an amount, and it doesn’t describe it as a preservative.`,
      },
      { h: 'What is caprylyl glycol?' },
      {
        p: `PubChem, the free chemistry database run by the National Institutes of Health, lists the compound under the name 1,2-octanediol and describes it simply as an octanediol. Break that name down and it explains itself. “Octane” means a chain of eight carbon atoms. “Diol” means the molecule carries two alcohol groups. And “1,2” says those two groups sit on the first and second carbons, side by side at one end of the chain.`,
      },
      {
        p: `“Caprylyl” comes from caprylic acid, the old name for the eight-carbon fatty acid now usually called octanoic acid, and “glycol” is a general word for a molecule with two alcohol groups. So caprylyl glycol and 1,2-octanediol are two ways of naming the same thing: one from ingredient-label tradition, the other from systematic chemistry.`,
      },
      { h: 'Where it sits on Quell’s label' },
      {
        p: `Here’s the complete inactive list as printed: {inactives}. Federal rules for OTC drug labels, in 21 CFR 201.66, have inactive ingredients listed alphabetically, so a name starting with C goes first. Its place says nothing about how much is in the bottle; the label doesn’t list amounts for any inactive ingredient. Only the actives carry their strengths: {glycerol}, {polysorbate} and {mineralOil}.`,
      },
      { h: 'Is caprylyl glycol a preservative?' },
      {
        p: `This is the question people actually type, and the answer depends on what you’re asking. On Quell’s label, no: it’s listed as an inactive ingredient and nowhere described as a preservative. Quell is presented as a preservative-free formula, a phrase that refers to leaving out the added preservatives some multi-use drops rely on. We won’t go beyond what the label says about any single inactive ingredient’s job.`,
      },
      {
        p: `What preservative-free does mean for you is care with the bottle. The label’s instruction is plain: {tip}. Recap the bottle after each use and keep it within the storage range: {storage}. [What preservative-free means](/guides/what-does-preservative-free-mean) goes through the term in more detail.`,
      },
      { h: 'Caprylyl glycol in other products' },
      {
        p: `If the name looks familiar, it may be because you’ve seen it on skin care or cosmetic labels, where it turns up often. An ingredient appearing in a moisturizer and in an eye drop doesn’t mean the two products are alike, or that the ingredient does the same thing in both. Each finished product is made to its own specifications, and an eye drop is a sterile drug. Never put a skin product near your eyes to “get the same ingredient.”`,
      },
      { h: 'How it relates to Quell’s other ingredients' },
      {
        list: [
          'It isn’t one of the three actives; those are {actives}.',
          'It isn’t one of the natural ingredients the formula is known for, like emu oil and manuka honey.',
          'It shares the eight-carbon “capryl” root with caprylic acid, but it’s a diol, not a fatty acid or an oil.',
          'Like every other inactive ingredient, it’s named on the panel without a stated purpose.',
        ],
      },
      { h: 'What the formula as a whole is for' },
      {
        p: `The label’s Uses line reads: {uses}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and the directions are: {directions}. That’s the full picture the label gives. If you want a deeper chemistry answer about a specific inactive ingredient than this guide offers, {company} is reachable at {phone}, {hours}, and a pharmacist can talk you through the label in person.`,
      },
      { h: 'Sensitivities and when to stop' },
      {
        p: `If you’ve reacted to products listing caprylyl glycol or 1,2-octanediol before, show Quell’s panel to a pharmacist before trying it. Separately, the label carries its own caution: {warnings}. And its stop-use line covers any reaction: {stopUse}`,
      },
      {
        p: `The full label is on our [Drug Facts page](/drug-facts), and [the inactive ingredients section](/guides/the-inactive-ingredients-section) explains how that part of any panel works.`,
      },
    ],
    faq: [
      {
        q: 'What is caprylyl glycol?',
        a: `It’s the ingredient name for 1,2-octanediol, an eight-carbon molecule with two alcohol groups at one end. PubChem, run by the National Institutes of Health, records it under that chemical name.`,
      },
      {
        q: 'Is caprylyl glycol a preservative in Quell?',
        a: `Quell’s label lists caprylyl glycol as an inactive ingredient and doesn’t describe it as a preservative. Quell is presented as a preservative-free formula.`,
      },
      {
        q: 'Why is caprylyl glycol listed first on the label?',
        a: `Inactive ingredients on an OTC drug label are listed in alphabetical order under 21 CFR 201.66, so a name beginning with C comes first. Its position doesn’t reflect how much is in the bottle.`,
      },
    ],
  },

  {
    slug: 'eye-drops-for-older-adults',
    title: 'Eye drops for older adults: what to check',
    description:
      'Small print, unsteady hands, several medicines at once: what older adults and their families should check before and while using an eye drop.',
    category: 'choosing',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Before an older adult starts any over-the-counter eye drop, check four things: that they can read the whole label, that they can get a drop in without the tip touching the eye, that the drop doesn’t conflict with anything else they use, and that they know the signs that mean stop. For Quell, also check the egg and bird caution. A pharmacist can review all of it in one visit.`,
      },
      { h: 'Reading the label when the print is tiny' },
      {
        p: `Drug Facts panels on small cartons use small type, and a {size} eye drop box has little room. Reading glasses and a good lamp help, but it’s easier on a screen. Our [Drug Facts page](/drug-facts) shows Quell’s whole panel in larger type, and any phone or computer can zoom in further. Read it once all the way through, out loud if that helps, instead of skimming the front of the box.`,
      },
      {
        list: [
          'Uses: {uses}.',
          'Directions: {directions}.',
          'Warnings: {warnings}.',
          'Do not use: {doNotUse}.',
          'Storage: {storage}.',
        ],
      },
      { h: 'Steady hands and the tip rule' },
      {
        p: `Getting a single drop into an eye takes some aim, and shaky hands or stiff fingers make it harder. The label sets one firm rule: {tip}. That includes the eye and lashes. A few practical setups make it easier to follow:`,
      },
      {
        list: [
          'Sit down, or lie back on a bed, instead of standing at the bathroom sink.',
          'Tilt your head back and look up at a fixed spot on the ceiling.',
          'Rest the hand holding the bottle on your forehead or the bridge of your nose to steady it.',
          'Use the other hand to pull the lower lid down gently and make a small pocket.',
          'Squeeze gently; one drop is the dose. If it misses, wipe your cheek and try once more.',
          'If it’s still hard, ask a family member or caregiver to help, washing their hands first.',
        ],
      },
      {
        p: `If arthritis or a tremor makes squeezing the bottle hard most days, mention it to a pharmacist. They see the problem often and may know of aids that grip the bottle. [How to use eye drops as directed](/guides/how-to-use-eye-drops-as-directed) walks through the steps in more detail.`,
      },
      { h: 'Keeping track: a simple log' },
      {
        p: `A three-times-a-day schedule is easy to lose track of, especially for someone who also takes pills on their own schedule. A paper log on the bathroom counter or a recurring phone alarm keeps it straight. Write down each time, which eye, and anything you noticed. Over a week or two, that record also gives a doctor or pharmacist something concrete to look at. [Keeping an eye drop log](/guides/keeping-an-eye-drop-log) has a format that works.`,
      },
      { h: 'Other eye drops and medicines' },
      {
        p: `Many older adults already use prescription drops, and some use more than one. Quell’s label doesn’t give directions for using it with other eye drops, so don’t guess at timing or order. Ask the eye doctor who prescribed the other drops, or a pharmacist, whether adding Quell makes sense and how to space them. Bring every bottle you use, including the ones in the bedroom drawer, to that conversation.`,
      },
      {
        p: `It also helps to tell the bottles apart at a glance. Eye drop bottles look alike, and grabbing the wrong one is an easy mistake. A strip of colored tape or a large marker label on each carton (“Quell, 3 times a day”) cuts down the confusion. Quell’s solution is milky brown, which also sets it apart from clear drops. In the site’s own words: {appearance}`,
      },
      { h: 'The egg and bird caution' },
      {
        p: `Quell’s formula includes emu oil, and its label says: {warnings}. Older adults sometimes have allergies they learned about decades ago and have half forgotten, or a family member may know of one they don’t mention. Ask directly before the first bottle is opened. [Egg or bird allergy and Quell](/guides/egg-or-bird-allergy-and-quell) covers the caution in full.`,
      },
      { h: 'Knowing when to stop' },
      {
        p: `The label is clear about the signs: {stopUse} Some changes in vision come on slowly and are easy to put down to age. If someone using drops notices their eyesight seems worse, or an eye hurts, that’s a reason to call their eye doctor, not to keep using the drop and wait. Regular eye exams matter more with age, and a drop is no replacement for them.`,
      },
      { h: 'Storage in a warm house or a care setting' },
      {
        p: `Many older adults keep their homes warm in winter, and bottles left near a radiator, a heating vent or a sunny windowsill can get hotter than the label allows. A drawer in a room at ordinary temperature is the right place. In assisted living, ask staff how resident medicines are stored so the drop stays within range and easy to find. The label also asks that it be kept out of reach of children, which matters when grandchildren visit; its wording on swallowing is: {swallowed}.`,
      },
      { h: 'Ordering for a parent' },
      {
        p: `Many families buy drops for an older relative. You can order Quell as a guest and ship it straight to their address; you’ll need to be 18 or over. Before doing that, run through this checklist with them, ideally with their pharmacist. [Giving eye drops to a parent or grandparent](/guides/eye-drops-for-a-parent-or-grandparent) covers the gift side, and [ordering eye drops for someone else](/guides/ordering-eye-drops-for-someone-else) covers the address and checkout details.`,
      },
    ],
    faq: [
      {
        q: 'How can elderly people put in eye drops more easily?',
        a: `Sitting or lying back, looking up at a fixed point, and resting the bottle hand on the forehead all help steady the drop. The tip must not touch the eye or anything else; if it’s still hard, a caregiver can help or a pharmacist can suggest an aid.`,
      },
      {
        q: 'Can older adults use eye drops with their other medications?',
        a: `That depends on the medicines involved, and Quell’s label doesn’t give directions for use with other eye drops. Bring every bottle and medicine to a pharmacist or the prescribing eye doctor and ask before adding a new drop.`,
      },
      {
        q: 'Where can I read the Quell label in larger print?',
        a: `Our Drug Facts page shows the full panel in larger type than the carton, and you can zoom in further on any phone, tablet or computer.`,
      },
      {
        q: 'What should a caregiver know before giving eye drops?',
        a: `Wash your hands, keep the bottle tip from touching anything, give the dose the label states, and keep a simple log. Know the stop-use signs, such as eye pain or vision changes, and call the person’s doctor if they appear.`,
      },
    ],
  },
]
