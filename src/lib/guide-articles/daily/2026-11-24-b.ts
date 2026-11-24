import type { Guide } from '@/lib/guide-types'
export const DAILY_20261124_B: Guide[] = [
  /*
   * Sources fetched 2026-11-24 for dry-eye-relief-kerrville-tx:
   * - NOAA RCC ACIS StnData, 1991-2020 monthly normals (same data as NWS NOWData),
   *   saved at .daily-job/acis1124/USC00414782.json
   *   (KERRVILLE 3 NNE, TX, elev 1797 ft: Jan high 59.1 F, low 33.8 F; Feb high
   *   63.0, low 38.0, precip 1.63 (driest); Jan precip 1.66; May precip 4.29
   *   (wettest), low 61.6; Jun high 88.7, low 67.9; Jul high 91.6, low 69.8,
   *   precip 2.09; Aug high 92.8 (hottest), low 69.3, precip 1.93; Sep precip
   *   3.73, Oct 3.20; Dec high 60.4, low 35.7; monthly precip normals sum to
   *   30.56 in; snowfall 0.1 Nov, 0.1 Dec, 0.1 Jan, 0.2 Feb, 0.0 other months)
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figure used.
   * The station sits about three miles north-northeast of town (per its name);
   * named that way in the prose. No landmark, river or employer is named.
   */
  {
    slug: 'dry-eye-relief-kerrville-tx',
    title: 'Dry eye relief in Kerrville, Texas',
    description:
      'NOAA normals near Kerrville show August highs near 93°F and January nights near 34°F. How Hill Country swings dry your eyes, and what helps.',
    category: 'local',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Dry eye relief in Kerrville starts with the Hill Country’s daily swing. NOAA’s normals for a station just north-northeast of town show afternoons running 20 to 25 degrees warmer than the nights in every month, so heaters, air conditioners and open windows trade places, sometimes in a single day. Keep vents off your face, wear sunglasses outdoors, use a lubricating drop as its label directs, and see an eye doctor if dryness keeps coming back.`,
      },
      { h: 'Where Kerrville’s weather numbers come from' },
      {
        p: `The figures here are NOAA’s 1991–2020 climate normals for the Kerrville 3 NNE cooperative station, about three miles north-northeast of town, as published through the National Weather Service’s NOWData. The station sits at about 1,800 feet. Its thirty-year averages sketch a year with long heat, mild winters and two rainy peaks:`,
      },
      {
        list: [
          `August is the hottest month, with a normal high of 92.8°F and a low of 69.3°F. July runs close behind at 91.6°F.`,
          `January is the coldest, averaging 59.1°F in the afternoon and 33.8°F at night. December’s normal low is 35.7°F.`,
          `May is the wettest month at 4.29 inches of precipitation, and September is second at 3.73 inches.`,
          `February is the driest at 1.63 inches, with January barely wetter at 1.66.`,
          `The twelve monthly normals add up to about 30.6 inches a year.`,
          `Normal snowfall is a tenth or two of an inch in each month from November through February, about half an inch in all.`,
        ],
      },
      { h: 'A 25-degree swing between night and afternoon' },
      {
        p: `Subtract each month’s normal low from its high and the station shows a gap of more than 25 degrees in January, about 24 in March, April and October, and never less than about 21, even in May and June. That swing shapes a Kerrville day. A winter morning near freezing means the furnace or a space heater runs before breakfast and the car’s heater blasts on the way to work; by mid-afternoon the same house may have windows open or the air conditioner running. Heated air holds less relative moisture than it did outdoors, cooled air is dry too, and both pull water from the tear film between blinks.`,
      },
      {
        list: [
          `Point the car’s morning heat at the windshield and floor, then switch the afternoon air to your chest instead of the dash vents aimed at your eyes.`,
          `Dress in layers on cool mornings so you need less heat at home and in the truck.`,
          `Turn a space heater so it warms your legs, not your face, and keep it a few feet from your chair or bed.`,
          `Run a bedroom humidifier on cold nights, and clean it on the schedule its maker gives.`,
        ],
      },
      { h: 'Two wet seasons, and the hot stretch between them' },
      {
        p: `The station’s rain falls in two bursts: late spring, led by May, and early fall, led by September and October (3.20 inches). Between them sit July and August, each with about 2 inches of precipitation and highs above 91°F. Those are the weeks when time outdoors means sun, heat and glare, and time indoors means air conditioning that rarely shuts off. If your eyes feel worst in late July, the calendar is a big part of the reason.`,
      },
      {
        p: `Winter is the other dry stretch. February and January bring the least precipitation of the year, and those are also the months with the coldest nights, so the heater adds its own dryness on top. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) walks through it room by room.`,
      },
      { h: 'Blinds, pastures and summer water' },
      {
        p: `A lot of Kerr County life happens outdoors, and each setting asks something slightly different of your eyes.`,
      },
      {
        list: [
          `Fall and winter hunting means long, still mornings in a blind when the normal low is in the 30s or 40s, with cold air moving across open eyes while you watch a tree line. Wraparound glasses help, and [dry eyes on a hunting trip](/guides/dry-eyes-on-a-hunting-trip) has more.`,
          `Ranch and pasture work stirs up dust and puts wind in your face. If grit, hay or anything else gets into an eye and doesn’t wash out with your own tears, see an eye doctor or urgent care rather than reaching for drops.`,
          `Summer afternoons on the water bring glare from every direction. Polarized sunglasses and a brimmed hat cut both the light and the breeze.`,
          `Yard work in July and August is easier on the eyes in the early morning, before the heat builds toward the afternoon high.`,
        ],
      },
      { h: 'Screens and long drives' },
      {
        p: `Plenty of Kerrville residents spend the workday at a screen or behind the wheel on highway trips to San Antonio and back. Both slow your blink rate, and the car’s climate control blows straight at you. Take a break every hour or so on a long drive, keep vents low, and finish each blink at the computer instead of half-closing your eyes. If you spend much of your week in the city, our [San Antonio guide](/guides/dry-eye-relief-san-antonio-tx) covers its own air-conditioning months.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses: {uses}. Directions: {directions}. And one habit worth keeping: {tip}.`,
      },
      {
        p: `The label also carries this warning: {warnings}. Storage reads: {storage}. A truck parked in an August lot, or left in a deer lease on a cold January morning, can go past either end of that range, so carry the bottle in a pocket or bag and bring it inside. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Kerrville' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Kerrville, Ingram, Center Point and every other US address. Checkout works as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You get tracking by email, but no delivery date is promised, so reorder before the bottle runs low. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. The [Kerrville page](/eye-drops/kerrville-tx) and the [Texas page](/eye-drops/state/texas) have local details.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A lubricating drop is for everyday dryness. It can’t tell you why your eyes keep bothering you, and the label is plain about when to stop: {stopUse} Pain, vision that stays blurry, or one eye much worse than the other is a reason to book an appointment. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the rest.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Kerrville, Texas get in the winter?',
        a: `NOAA’s 1991–2020 normals for the Kerrville 3 NNE station put January’s average low at 33.8°F and December’s at 35.7°F, with afternoons near 60°F. Normal snowfall is only about half an inch a year.`,
      },
      {
        q: 'What is the rainiest month in Kerrville?',
        a: `May, at 4.29 inches in NOAA’s normals for the station north-northeast of town. September is second at 3.73 inches, and February is the driest month at 1.63.`,
      },
      {
        q: 'Why do my eyes feel dry in the Texas Hill Country?',
        a: `Long hot summers keep air conditioning running, cold winter mornings bring out the heater, and outdoor work adds sun, wind and dust. Each of those speeds evaporation from the tear film, and the big daily temperature swing means you often get several in one day.`,
      },
      {
        q: 'Does Quell ship to Kerrville, Texas?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Kerrville and anywhere else in the US, with guest checkout and tracking by email. No arrival date is promised, so order before you run out.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-24 for dry-eye-relief-boulder-co:
   * - NOAA RCC ACIS StnData, 1991-2020 monthly normals (same data as NWS NOWData),
   *   saved at .daily-job/acis1124/USC00050848.json
   *   (BOULDER, CO, elev 5489 ft: Jan high 47.0 F, low 21.5 F, precip 0.83,
   *   snow 11.3; Feb snow 15.0; Mar precip 1.99, snow 15.7 (snowiest); Apr precip
   *   3.05, snow 14.7; May precip 3.21 (wettest), snow 2.0; Jul high 88.0
   *   (hottest), low 57.0; Aug high 86.0; Oct snow 7.0; Nov snow 13.1; Dec high
   *   46.3, low 21.1, precip 0.81 (driest), snow 13.0; monthly precip normals sum
   *   to 21.23 in; monthly snowfall normals sum to 92.8 in)
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figure used.
   * Denver figures are not compared; the Denver guide is linked only.
   */
  {
    slug: 'dry-eye-relief-boulder-co',
    title: 'Dry eye relief in Boulder, Colorado',
    description:
      'Boulder’s NOAA station sits near 5,490 feet, with its driest months in December and January. Why eyes dry out there, and what to do about it.',
    category: 'local',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Dry eye relief in Boulder means planning for altitude and a lopsided year. NOAA’s normals for the Boulder station, about 5,490 feet up, put the driest months in December and January, just when furnaces run hardest, and show nearly 93 inches of snow a season, most of it light on water. Wear sunglasses on bright trails, keep heat vents off your face, use a lubricating drop as its label directs, and see an eye doctor if symptoms persist.`,
      },
      { h: 'What the Boulder station records' },
      {
        p: `These figures are NOAA’s 1991–2020 climate normals for the Boulder cooperative station, as published through the National Weather Service’s NOWData. The station sits at about 5,490 feet, a little over a mile above sea level.`,
      },
      {
        list: [
          `December is the driest month, at 0.81 inches of precipitation, and January is next at 0.83.`,
          `May is the wettest at 3.21 inches, with April close behind at 3.05.`,
          `March is the snowiest month, averaging 15.7 inches. February (15.0), April (14.7), November (13.1) and December (13.0) all top a foot.`,
          `The monthly snowfall normals add up to about 93 inches, and total precipitation to about 21.2 inches.`,
          `July is the warmest month, with a normal high of 88.0°F and a low of 57.0°F.`,
          `December and January are the coldest, with normal lows near 21°F and afternoons in the mid-40s.`,
        ],
      },
      { h: 'Lots of snow, very little water' },
      {
        p: `December is the month that surprises people. The station averages 13 inches of snow, yet only 0.81 inches of total precipitation, because that much snow melts down to less than an inch of water. Cold, dry air is what makes powder light, and it is the same air that comes indoors through doors and drafts. Warm it to room temperature and its relative humidity drops even further. A Boulder living room in January can feel parched while snow sits on the deck.`,
      },
      {
        list: [
          `Keep your desk, bed and couch out of the path of floor registers and baseboard heat.`,
          `Run a humidifier in the room where you sleep, and clean it as its maker directs.`,
          `Turn the thermostat down a few degrees at night so the heat cycles less.`,
          `Use the car’s defrost for the windshield and send the rest of the heat to the floor.`,
        ],
      },
      { h: 'March and April: the snowiest stretch turns wet' },
      {
        p: `Spring is when Boulder’s snow totals peak, with March the snowiest month of the year, and it is also when precipitation climbs toward its May high. Wet, heavy spring storms bring more moisture to the air than December’s dry powder. Many people find their eyes a little easier in April and May, then notice the change again when the furnace comes back on in the fall. If your symptoms follow the heating season more than the weather, that is a useful thing to tell an eye doctor.`,
      },
      { h: 'Altitude, sun and the trailhead' },
      {
        p: `At more than a mile up, the air holds less moisture to begin with, and a clear Boulder day comes with bright sun and snow glare in winter. Running, cycling and climbing add a breeze you make yourself: the faster you move, the more air crosses your eyes. Our guide to [dry air, wind and altitude](/guides/dry-air-wind-and-altitude) explains why the tear film thins faster in those conditions.`,
      },
      {
        list: [
          `Wraparound sunglasses block both glare and wind on a run or ride.`,
          `On a ski day, goggles cover more of the eye than sunglasses do.`,
          `Rest at a trail junction with your eyes closed for a few slow breaths.`,
          `Keep your bottle in an inside pocket; a pack’s outer pouch can get very cold on a winter climb.`,
        ],
      },
      { h: 'Summer: warm days, cool nights' },
      {
        p: `July’s normal high of 88°F pairs with a normal low of 57°F, a drop of more than 30 degrees. With a gap that size, plenty of people cool the house by opening windows after dark instead of running air conditioning. A fan pointed at the bed is one way to pull in that cool air, and it is also a steady stream across your face while you sleep. Aim it at your body or across the room instead.`,
      },
      { h: 'Screens on campus and at home' },
      {
        p: `Boulder has a big student population and plenty of people who work from a laptop. Long sessions slow the blink rate, and a heated library or apartment adds to the effect. Look away from the screen every so often, finish each blink, and lower the screen slightly so your eyes aren’t opened as wide. If you split your weeks between Boulder and the city, our [Denver guide](/guides/dry-eyes-in-denver) covers the airport side of the metro area.`,
      },
      { h: 'Using Quell, by the label' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists the Uses as {uses}. The directions read: {directions}. Keep the dropper clean: {tip}.`,
      },
      {
        p: `There is a caution on the panel too: {warnings}. The storage line reads: {storage}. A car at a winter trailhead can drop well below that range, so bring the bottle home with you. Read the whole panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Boulder' },
      {
        p: `We ship from Brentwood, Tennessee, to Boulder, Louisville, Lafayette and any other US address. Check out as a guest; shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking comes by email, though no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. See the [Boulder page](/eye-drops/boulder-co) and the [Colorado page](/eye-drops/state/colorado) for more.`,
      },
      { h: 'When it’s more than the air' },
      {
        p: `Dry air explains a lot, but not everything. The label lists the signs that mean a drop isn’t the answer: {stopUse} An eye doctor can find the cause and decide what to do. Our [self-check](/self-check) can help you put your symptoms into words before the visit; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How much snow does Boulder, Colorado get a year?',
        a: `About 93 inches in a normal season, according to NOAA’s 1991–2020 normals for the Boulder station. March is the snowiest month at 15.7 inches.`,
      },
      {
        q: 'What is the driest month in Boulder?',
        a: `December, with 0.81 inches of precipitation at the Boulder station in NOAA’s normals, followed closely by January at 0.83. Those are also the months when indoor heat runs the most.`,
      },
      {
        q: 'Why do my eyes feel so dry in Boulder in the winter?',
        a: `Winter air at more than a mile up holds little moisture, and heating it indoors lowers its relative humidity further. Forced-air heat and baseboards then move that dry air across your eyes for hours.`,
      },
      {
        q: 'Can I order Quell eye drops to Boulder?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Boulder and every other US address, with guest checkout and email tracking. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-24 for dry-eye-relief-monterey-ca:
   * - NOAA RCC ACIS StnData, 1991-2020 monthly normals (same data as NWS NOWData),
   *   saved at .daily-job/acis1124/USW00023259.json
   *   (MONTEREY PENINSUL AP, CA, elev 160 ft: Jan high 61.6 F, low 43.3 F,
   *   precip 3.49 (wettest); Feb precip 3.03, low 45.2; Mar precip 2.80, low
   *   45.9; Apr precip 1.03; May 0.51; Jun 0.13; Jul 0.02; Aug high 70.0, low
   *   55.0 (warmest night), precip 0.02; Sep high 70.9 (warmest), precip 0.07;
   *   Oct high 69.8; Nov low 45.8; Dec high 61.6, low 42.7 (coldest night),
   *   precip 2.83; Jun-Sep precip sums to 0.24 in; monthly precip normals sum to
   *   16.24 in; snowfall "M", left out)
   * - Station not in relhum23.txt or wndspd23.txt: no humidity, fog or wind figure.
   * Salinas figures are not compared; the Salinas guide is linked only.
   */
  {
    slug: 'dry-eye-relief-monterey-ca',
    title: 'Dry eye relief in Monterey, California',
    description:
      'At Monterey’s airport, June through September bring about a quarter inch of rain and highs barely change all year. What that means for dry eyes.',
    category: 'local',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Dry eye relief in Monterey means looking past the mild weather. NOAA’s normals for the Monterey Peninsula Airport station show only about a quarter inch of rain from June through September combined, and nights in the 40s for half the year, so heaters run at night even when the days feel easy. Keep heat and car vents off your face, shield your eyes from wind along the water, use a lubricating drop as its label directs, and see an eye doctor if dryness lingers.`,
      },
      { h: 'Monterey’s climate, from the airport station' },
      {
        p: `The numbers below are NOAA’s 1991–2020 climate normals for the Monterey Peninsula Airport station, as published through the National Weather Service’s NOWData. The station sits at about 160 feet, a short distance inland from the bay.`,
      },
      {
        list: [
          `January is the wettest month at 3.49 inches of precipitation, followed by February (3.03) and December (2.83).`,
          `June averages 0.13 inches, July and August 0.02 each, and September 0.07: about a quarter inch across all four months.`,
          `The monthly normals add up to about 16.2 inches a year.`,
          `September is the warmest month, with a normal high of 70.9°F. December and January are the coolest, at 61.6°F.`,
          `December has the coldest normal low, 42.7°F, and August the mildest, 55.0°F.`,
        ],
      },
      { h: 'Nine degrees from winter to the warmest month' },
      {
        p: `The difference between Monterey’s coolest and warmest normal highs is only about nine degrees. That steadiness hides two very different halves of the year for your eyes. From December through March, rain comes regularly and outdoor air is rarely harsh. From June through September, almost no rain falls at all, yet the temperatures stay so moderate that many people don’t think of summer as a dry season. Their eyes often notice before they do.`,
      },
      { h: 'Why September can be the hardest month' },
      {
        p: `In much of the country, September means cooling off. At the Monterey airport it is the warmest month of the year, and it arrives after three months with almost no rain. Late-summer afternoons are when people head outdoors for longer: walks along the shore, a round of golf, an afternoon on a boat or a long lunch on a patio. Bring sunglasses that wrap around, take a hat with a brim, and rest your eyes in the shade now and then.`,
      },
      { h: 'Cool nights and the thermostat' },
      {
        p: `Normal lows sit below 50°F from November through April, and in the low 40s from December into January. Plenty of Monterey homes switch the heat on in the evening even after a pleasant day. A wall heater or space heater near the couch or bed moves warm, dry air across your face for hours.`,
      },
      {
        list: [
          `Turn space heaters so they warm your feet and legs.`,
          `Keep the bed out of the line of a wall heater or vent.`,
          `A humidifier in the bedroom helps on heated nights; clean it as its maker directs.`,
          `In the car, send heat to the floor and windshield on cool mornings.`,
        ],
      },
      {
        p: `Our guide on [whether a humidifier helps dry eyes](/guides/does-a-humidifier-help-dry-eyes) covers placement and settings.`,
      },
      { h: 'On the water and along the coast' },
      {
        p: `Monterey life pulls people toward the bay: kayaking, sailing, fishing trips and long walks along the shore. Moving air off the water and bright reflected light both work on the tear film. On a boat, the wind from the boat’s own speed adds to whatever breeze is already blowing. Wraparound or sport sunglasses help most, and our page on [dry eyes on a boat](/guides/dry-eyes-on-a-boat) has more ideas for time on deck.`,
      },
      { h: 'Visitors, hotels and screens' },
      {
        p: `Monterey sees many visitors, and many locals work in hotels, restaurants and offices. A hotel room’s heater or air conditioner runs close to the bed, and a front desk or office often means hours at a screen. Blink fully during screen work, look up from close tasks every so often, and keep your own bottle in a bag or locker so it stays at room temperature. If you drive inland for work, our [Salinas guide](/guides/dry-eye-relief-salinas-ca) covers the valley side.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel gives its Uses as {uses}. Directions: {directions}. A good habit from the panel: {tip}.`,
      },
      {
        p: `The warnings section reads: {warnings}. And for storage: {storage}. Monterey’s mild temperatures make that easy most of the year, though a closed car in the September sun can still heat up. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Monterey' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Monterey, Pacific Grove, Seaside and every other US address. You can check out as a guest. Shipping is {shipping}, or free on {freeBottles} or more bottles. Tracking arrives by email, but no delivery date is promised, so order before the bottle runs low. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. See the [Monterey page](/eye-drops/monterey-ca) and the [California page](/eye-drops/state/california).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A lubricating drop eases dryness; it doesn’t explain it. The label lists when to stop: {stopUse} If your eyes hurt, your vision changes, or the dryness keeps returning through every season, an eye doctor can find the cause and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'What is the warmest month in Monterey, California?',
        a: `September, with a normal high of 70.9°F at the Monterey Peninsula Airport station in NOAA’s 1991–2020 normals. August and October are close behind.`,
      },
      {
        q: 'Does it rain in Monterey in the summer?',
        a: `Very little. NOAA’s normals for the airport station show 0.13 inches in June, 0.02 in July, 0.02 in August and 0.07 in September. Most of the year’s rain falls from November through March.`,
      },
      {
        q: 'Why do my eyes feel dry in Monterey when the weather is so mild?',
        a: `Summer brings almost no rain, cool nights keep heaters running for much of the year, and time on the water adds wind and glare. Each one speeds evaporation from the tear film even when the temperature feels comfortable.`,
      },
      {
        q: 'Does Quell ship to Monterey or Pacific Grove?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Monterey, Pacific Grove and every other US address. Checkout is as a guest, tracking comes by email, and no arrival date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-24 for dry-eye-relief-boone-nc:
   * - NOAA RCC ACIS StnData, 1991-2020 monthly normals (same data as NWS NOWData),
   *   saved at .daily-job/acis1124/USC00310982.json
   *   (BOONE 1 SE, NC, elev 3100 ft: Jan high 41.4 F, low 21.6 F (coldest), snow
   *   6.6; Feb high 44.7, low 23.8, precip 3.64 (driest), snow 6.7 (snowiest);
   *   Mar low 29.2, snow 4.8; Apr snow 1.0; Jul high 79.0 (warmest), low 57.7;
   *   Sep precip 5.73 (wettest); Oct snow 0.3; Nov low 29.6, snow 1.0; Dec high
   *   45.0, low 24.7, snow 5.2; every month's precip 3.64 or more; monthly precip
   *   normals sum to 59.13 in; monthly snowfall normals sum to 25.6 in)
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figure used.
   * The station sits about a mile southeast of town (per its name). No university,
   * ski area, road or landmark is named.
   */
  {
    slug: 'dry-eye-relief-boone-nc',
    title: 'Dry eye relief in Boone, North Carolina',
    description:
      'Boone gets rain every month, but NOAA normals show freezing nights from November through March. Why mountain winters dry the eyes, and what helps.',
    category: 'local',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Dry eye relief in Boone isn’t about a lack of rain: NOAA’s normals for a station about a mile southeast of town show at least 3.6 inches of precipitation in every month. It’s about cold. Normal lows sit below freezing from November through March, so heat runs for five months and dries the air indoors. Keep vents and stoves away from your face, shield your eyes from wind, use a lubricating drop as its label directs, and see an eye doctor if dryness lingers.`,
      },
      { h: 'Boone’s weather, by the numbers' },
      {
        p: `The figures here are NOAA’s 1991–2020 climate normals for the Boone 1 SE cooperative station, as published through the National Weather Service’s NOWData. At about 3,100 feet, it describes a mountain climate that is wet, cool and snowy by Southern standards.`,
      },
      {
        list: [
          `January is the coldest month, with a normal high of 41.4°F and a low of 21.6°F.`,
          `Normal lows stay below 32°F in November (29.6°F), December, January, February and March (29.2°F).`,
          `July is the warmest month, with a high of 79.0°F and a low of 57.7°F.`,
          `September is the wettest month at 5.73 inches. February is the driest, and it still averages 3.64 inches.`,
          `The monthly normals add up to about 59 inches of precipitation a year.`,
          `Normal snowfall totals about 25.6 inches, led by February (6.7 inches) and January (6.6).`,
        ],
      },
      { h: 'Five months of freezing nights' },
      {
        p: `Rain all year might suggest comfortable eyes all year, and outdoors that is often true. The trouble starts when the cold sets in. A 21°F January night means a furnace, heat pump, baseboard or stove running for hours, and warming cold air indoors drops its relative humidity sharply. The tear film loses water faster in that air, especially while you sleep, read or stare at a screen. In Boone, the heating season starts with freezing nights in November and doesn’t end until normal lows climb past 32°F in April.`,
      },
      {
        list: [
          `Notice where the heat comes from in each room, and move the chair or bed out of its path.`,
          `Keep a humidifier running in the bedroom through the cold months and clean it as directed by its maker.`,
          `Lower the thermostat a few degrees at night.`,
          `Hang wet towels or laundry indoors on the driest heating days if you don’t have a humidifier.`,
        ],
      },
      { h: 'Wood stoves and fireplaces' },
      {
        p: `Many mountain homes and cabins lean on a wood stove or fireplace for some or all of their heat. Radiant heat at close range dries the eyes quickly, and opening the stove door releases a puff of smoke and warm air toward your face. Sit a few feet back, angle your chair so the heat reaches your side rather than your eyes, and let smoke clear before you lean in to add a log. Our guide on [dry eyes from a wood stove](/guides/dry-eyes-from-a-wood-stove) goes into more detail.`,
      },
      { h: 'Snow days and winter wind' },
      {
        p: `With about two feet of snow in a normal season, Boone winters bring shoveling, scraping windshields and, for many residents and visitors, days on nearby ski slopes. Exposed ridges catch the wind, and a chairlift or a fast run puts cold air straight across your eyes. Goggles cover more of the eye than sunglasses, and a neck gaiter keeps your breath from fogging them. Afterward, the heated lodge or car finishes the job the wind started, so give your eyes a minute with the lids closed before you pick up your phone.`,
      },
      {
        p: `If your bottle rides along, keep it in an inside pocket. A car parked at a trailhead or ski area on a 20-degree day can go well below the label’s storage range.`,
      },
      { h: 'A cool, wet summer' },
      {
        p: `Boone’s summer is mild, with July highs near 79°F, and the station records more than 5 inches of precipitation in each month from April through September. People often find their eyes easiest from late spring through early fall. The exceptions tend to be indoors: long days in an air-conditioned office, a heat-pump system set to cool, or hours of studying in a library. If your eyes feel dry on a damp July afternoon, look at the screen and the vent before you blame the weather.`,
      },
      { h: 'Students, screens and winding roads' },
      {
        p: `Boone is a college town, and fall finals fall right as the heating season sets in. Long nights at a laptop in a heated dorm or apartment combine low blinking with dry air. Driving adds its own version: curving mountain roads demand steady focus, and the car heater often blows straight at the driver. Take short breaks on long drives, keep vents pointed low, and look away from the screen regularly during study sessions. For the lower elevations nearby, see our [Hickory guide](/guides/dry-eye-relief-hickory-nc).`,
      },
      { h: 'Quell’s label, in brief' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel states the Uses as {uses}. Directions: {directions}. Keep it clean: {tip}.`,
      },
      {
        p: `There’s a caution as well: {warnings}. Storage: {storage}. The whole panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Boone' },
      {
        p: `We ship from Brentwood, Tennessee, to Boone, Blowing Rock and the rest of the US. Guest checkout is available. Shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking arrives by email, though no delivery date is promised, and winter weather in the mountains can slow any package, so reorder early. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. The [Boone page](/eye-drops/boone-nc) and the [North Carolina page](/eye-drops/state/north-carolina) have more.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay uncomfortable through the wet summer months as well as the heated winter ones, that pattern is worth showing an eye doctor. The label also names the signs that mean stop: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers more.`,
      },
    ],
    faq: [
      {
        q: 'How cold does it get in Boone, NC?',
        a: `NOAA’s 1991–2020 normals for the Boone 1 SE station put January’s average low at 21.6°F and its average high at 41.4°F. Normal lows stay below freezing from November through March.`,
      },
      {
        q: 'How much snow does Boone, North Carolina get?',
        a: `About 25.6 inches in a normal season at the Boone 1 SE station, according to NOAA. February and January are the snowiest months, each averaging between 6 and 7 inches.`,
      },
      {
        q: 'Why are my eyes dry in Boone if it rains so much?',
        a: `Outdoor rain doesn’t reach indoor air. Boone’s long heating season warms cold air inside homes and dorms, which lowers its relative humidity, and stoves and vents then blow that air across your eyes.`,
      },
      {
        q: 'Can I order Quell to Boone, North Carolina?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Boone and every other US address. Checkout is as a guest, tracking comes by email, and no delivery date is promised, so order ahead of winter storms.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-makeup-artists',
    title: 'Dry eyes for makeup artists',
    description:
      'Bright vanity lights, close detail work, powders and setting sprays: why makeup artists’ own eyes dry out on long days, and what helps on set.',
    category: 'using',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Makeup artists’ eyes dry out because of how the work is set up: bright vanity bulbs and ring lights a foot or two from your face, long stretches of fine detail that slow blinking, powder and setting spray drifting in the air, and heated or air-conditioned studios. Step back from the lights between looks, spray away from yourself, blink fully, and keep a lubricating drop of your own in your kit, used as its label directs.`,
      },
      { h: 'Why the job is hard on your own eyes' },
      {
        p: `Most of the attention in a makeup chair goes to the client’s eyes. Yours are doing hard work at the same time. Blending a cut crease, placing lashes or matching a foundation shade means holding a close, steady focus for minutes at a time, and people blink less when they concentrate. Each missed or half blink leaves the tear film exposed a little longer, and it thins faster in dry indoor air. By the third or fourth look of the day, many artists notice gritty, tired or stinging eyes without knowing exactly why.`,
      },
      { h: 'Vanity bulbs, ring lights and close focus' },
      {
        p: `Good light is essential to the work, and most kits travel with a ring light or a mirror ringed with bulbs. Facing bright light at close range tends to make you squint and hold your eyes still, and many artists lean in toward the face to check detail. Neither damages anything, but both add up over a long booking.`,
      },
      {
        list: [
          `Position the light to the side of the client rather than directly behind them, so you aren’t looking into it.`,
          `Step back between steps and look across the room for a few seconds.`,
          `Do a few slow, complete blinks every time you put a brush down.`,
          `Sit or stand at a height that keeps your eyes level with the client’s face, not tilted up into the light.`,
        ],
      },
      { h: 'Powders, setting sprays and airbrush mist' },
      {
        p: `Loose powder, setting spray, airbrush foundation and hairspray from the stylist in the next chair all put fine particles and mist into the air around your face. Spray with the can or bottle pointed away from you and the client’s eyes closed, and step back for a breath before you lean in again. Tap excess powder off the brush away from your face.`,
      },
      {
        p: `If a product gets into your own eye, follow that product’s label. Call Poison Control or get medical care if its label says to, or if stinging, pain or blurred vision doesn’t clear. A lubricating drop isn’t the tool for something stuck in or splashed into an eye; that is for an eye doctor or urgent care.`,
      },
      { h: 'Long set days, weddings and early calls' },
      {
        p: `Film, photo and wedding work brings its own conditions. Call times before sunrise mean short sleep. Trailers and green rooms run space heaters or air conditioning hard. Outdoor ceremonies add wind and sun, and touch-ups happen between takes or photos with little chance to rest your eyes. Keep a small routine for these days:`,
      },
      {
        list: [
          `Set a bottle of drops in a clean, separate pouch of your kit, away from products you use on clients.`,
          `Use a break between looks or a lunch call to close your eyes for a minute.`,
          `Move your station away from heater vents or the trailer’s air outlet.`,
          `Wear sunglasses between outdoor shots, and take them off only when you need true color.`,
        ],
      },
      { h: 'Your drops are for you, not your clients' },
      {
        p: `A makeup kit is built around sharing tools, but eye drops belong to one person. The label gives directions for the person using the bottle and doesn’t address using it on clients. If a client’s eyes are bothering them in the chair, suggest they use their own drops or speak with their eye doctor or pharmacist. Our page on [whether you can share eye drops](/guides/can-you-share-eye-drops) explains why.`,
      },
      {
        p: `Clients often ask whether to put drops in before or after their makeup. That depends on their own product, but our guide to [eye drops before or after makeup](/guides/eye-drops-before-or-after-makeup) gives them a starting point. Anyone wearing contact lenses should ask their eye doctor; Quell’s label doesn’t cover lenses.`,
      },
      { h: 'Keeping a bottle in your kit' },
      {
        p: `Kits live in cars, on location and in hot or cold trailers. Quell’s storage line reads: {storage}. A kit left in a car on a summer afternoon or a January night can move past that range, so carry your own bottle in a bag that comes inside with you. The label also says: {tip}. That matters in a kit full of brushes and sponges, so cap the bottle right after use. And if the drops look different from usual: {doNotUse}.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses on its Drug Facts panel read: {uses}. The directions read: {directions}. The warnings section says: {warnings}. The whole panel is on our [Drug Facts page](/drug-facts). For a broader look at how makeup itself affects the eye, see [why eyes feel dry when you wear makeup](/guides/why-do-my-eyes-feel-dry-when-i-wear-makeup).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Long days explain a lot, but not everything. The label sets out when to stop: {stopUse} Dryness that follows you on days off, or one eye that is always worse, is worth an appointment. Our list of [symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you decide.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when I do makeup for work?',
        a: `Close, detailed work slows blinking, bright vanity and ring lights make you squint and hold still, and studios and trailers often run heat or air conditioning. Powder and spray in the air can add irritation on top.`,
      },
      {
        q: 'Can a makeup artist use eye drops on a client?',
        a: `Quell’s label gives directions for the person using the bottle and doesn’t cover use on clients. Eye drops are personal; if a client’s eyes are bothering them, suggest their own drops or a word with their eye doctor or pharmacist.`,
      },
      {
        q: 'Should I keep eye drops in my makeup kit?',
        a: `You can, in a separate clean pouch, as long as the kit doesn’t sit in a hot or freezing car. Quell’s label says to store it between 59°F and 86°F, so bring the bottle inside with you.`,
      },
      {
        q: 'What should I do if setting spray gets in my eye?',
        a: `Follow the directions on the spray’s own label, and call Poison Control or get medical care if it tells you to or if stinging, pain or blurry vision doesn’t clear. Lubricating drops aren’t meant for a splash.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-opticians',
    title: 'Dry eyes for opticians',
    description:
      'Frame warmers, close fittings, lensometers and bright display walls: why opticians’ own eyes dry out at work, and small changes that help.',
    category: 'using',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Opticians’ eyes dry out from the details of the job: hot air from the frame warmer at close range, long minutes of near focus while measuring and adjusting, eyepieces and screens that slow blinking, and a bright, climate-controlled store. Keep the warmer’s airflow below face level, look into the distance between fittings, blink fully at the lensometer and the order screen, and if you use a lubricating drop, follow its label.`,
      },
      { h: 'A job spent looking closely at other people’s eyes' },
      {
        p: `An optician’s day is mostly near work. You mark pupil centers, check segment heights, read a lensometer, line up a frame on a customer’s face and inspect lenses for scratches under bright light. Each task asks for a steady, close focus, and people blink less while they concentrate. The fewer complete blinks you make, the longer the tear film sits exposed to the store’s air, and the drier your eyes feel by the end of a shift. Opticians often notice it most on busy Saturdays with fitting after fitting and little time between them.`,
      },
      { h: 'The frame warmer and hot air at face level' },
      {
        p: `Adjusting plastic frames usually means heating the temples or front in a frame warmer, whether it blows hot air or heats a tray of beads or salt. Leaning over a hot-air warmer puts a stream of warm, dry air close to your own eyes many times a day.`,
      },
      {
        list: [
          `Set the warmer where its airflow points away from where you stand or sit.`,
          `Hold the frame in the heat at arm’s length rather than leaning your face over it.`,
          `Step back for a few seconds after each heating, and blink fully before the next adjustment.`,
          `Turn the warmer off between customers if your store’s procedures allow it.`,
        ],
      },
      { h: 'Lensometers, eyepieces and the order screen' },
      {
        p: `Reading a manual lensometer means holding one eye at an eyepiece and focusing hard on a target. Many offices also have automated instruments with screens, plus a computer for orders, insurance and lab tracking. Eyepieces and screens both encourage a fixed stare. A simple habit helps: after each reading or each order entry, look across the store at something far away and blink slowly a few times. Our page on [screens and your tear film](/guides/screens-and-your-tear-film) explains why the stare matters.`,
      },
      { h: 'Bright display walls and store air' },
      {
        p: `Frame boards are lit to show color and finish, and dispensing tables often have their own lamps. Bright light close to your face makes many people squint. Store heating and air conditioning, especially near the front door or a ceiling vent above the dispensing table, add moving dry air. If you can, choose a fitting station away from the vents, and angle task lamps so they light the frame on the table rather than shining toward you.`,
      },
      { h: 'In the lab: edgers and lens dust' },
      {
        p: `Offices with an in-house lab add edging and finishing work. Edgers and hand stones can throw off fine debris and water spray, and working at a bench brings the same close focus as fittings. Follow your lab’s eye protection rules. If anything gets into your eye and doesn’t wash out on its own, go to an eye doctor or urgent care; a lubricating drop isn’t meant for debris or a splash.`,
      },
      { h: 'When customers ask you about dry eyes' },
      {
        p: `Customers mention dry or tired eyes all the time while choosing frames, and opticians are often the first person they ask. The clearest answer is to send clinical questions to the optometrist or ophthalmologist. You can still help in practical ways:`,
      },
      {
        list: [
          `Suggest they bring up dryness at their next eye exam, and mention it to the doctor in your office if there is one.`,
          `If they already use eye drops, tell them to follow the label on their own bottle and to ask a pharmacist about anything it doesn’t cover.`,
          `For contact lens wearers, point them to their eye doctor; Quell’s label doesn’t cover lenses.`,
          `Our guide to [optometrists and ophthalmologists](/guides/optometrist-or-ophthalmologist) explains the difference if a customer isn’t sure who to see.`,
        ],
      },
      { h: 'Keeping your own bottle at work' },
      {
        p: `Keep your eye drops in your bag, a drawer or a locker, not on the dispensing table with cleaning sprays and screwdrivers. Quell’s storage line reads: {storage}. A store is comfortably inside that range, but a car in July or January may not be. The label also says: {tip}. Wash your hands after handling frames and lens cleaner, before you put anything in your own eyes.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists the Uses: {uses}. Directions: {directions}. Warnings: {warnings}. If you work through a long Saturday, space your drops across the shift as the directions allow rather than using several at once. The whole panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor yourself' },
      {
        p: `Working beside eye doctors can make it easy to put off your own exam. Don’t. The label spells out when to stop: {stopUse} If your eyes are uncomfortable on days off as well as workdays, book a visit. Our [self-check](/self-check) can help you describe the pattern; it’s not a diagnosis. For more on close work, see [dry eyes for jewelers and watchmakers](/guides/dry-eyes-for-jewelers-and-watchmakers).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working as an optician?',
        a: `Fittings, measurements and lensometer readings all hold your focus close, which slows blinking. Hot air from the frame warmer, bright display lighting and store heating or air conditioning add to the drying.`,
      },
      {
        q: 'Can a frame warmer dry out your eyes?',
        a: `A hot-air frame warmer blows warm, dry air, and leaning over it puts that air close to your face. Keep the airflow pointed away from you, hold frames at arm’s length and step back between heatings.`,
      },
      {
        q: 'Should opticians recommend eye drops to customers?',
        a: `Clinical questions belong with the optometrist or ophthalmologist. If a customer already uses drops, the useful advice is to follow their own bottle’s label and ask a pharmacist about anything it doesn’t cover.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-event-planners',
    title: 'Dry eyes for event planners',
    description:
      'Laptops and timelines, site visits in any weather, patio heaters, stage haze and long event days: why planners’ eyes dry out, and what helps.',
    category: 'using',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Event planners’ eyes dry out because the job swings between two hard settings: weeks of laptop and phone work on timelines, seating charts and vendor emails, then long event days in heated ballrooms, tents with patio heaters, stage lighting and haze. Look away from the screen often, keep heaters and vents off your face, carry a small kit with your own lubricating drop, and use it as its label directs.`,
      },
      { h: 'Two halves of the job, both hard on the eyes' },
      {
        p: `Most of a planner’s hours happen at a screen: building run-of-show documents, answering clients, comparing quotes, adjusting floor plans and checking group chats with vendors. Then the event arrives, and you spend twelve or more hours on your feet, moving between kitchens, loading docks, ballrooms and parking lots. Screens lower the blink rate, and event venues tend to be warm, dry and full of moving air. Many planners notice their eyes most during the last week before a big event, when both halves overlap.`,
      },
      { h: 'Planning weeks: timelines, spreadsheets and calls' },
      {
        list: [
          `Set your laptop slightly below eye level so you look down a little; your eyes don’t have to open as wide.`,
          `After every email or every page of a seating chart, look across the room for a few seconds.`,
          `Turn video calls to audio when you don’t need to share a screen, and close your eyes while you listen.`,
          `Move your desk out of the path of a heating vent or a fan.`,
        ],
      },
      {
        p: `Our guide to [dry eyes from video calls](/guides/dry-eyes-from-video-calls) has more for days full of virtual meetings.`,
      },
      { h: 'Site visits in all weather' },
      {
        p: `Walking a venue before booking means outdoor terraces in wind, barns with dust, beaches in bright sun and rooftops in the cold. Bring sunglasses on every site visit, even in winter, and wear them on rooftops and open lawns where wind and glare both reach you. A notebook or a printed checklist means fewer minutes squinting at a phone in sunlight.`,
      },
      { h: 'Ballrooms, tents and patio heaters' },
      {
        p: `Winter events often move into ballrooms that run the heat for a crowd, or into tents warmed by patio heaters. Standing near one of those heaters while you coordinate the timeline puts radiant heat right on your face. Keep a few steps back, turn so the heater warms your side, and step away from it during quiet moments. For more, see [dry eyes under a patio heater](/guides/dry-eyes-under-a-patio-heater).`,
      },
      { h: 'Stage lights, haze and the production booth' },
      {
        p: `Galas, conferences and weddings often add stage lighting, a haze or fog machine for the dance floor, and a production booth full of screens. Bright spotlights make people squint, and haze can leave eyes feeling scratchy. Watch the show from the side of the stage rather than looking into the lights, and step out of hazy areas between cues. If haze, a cleaning product or anything else gets into your eye and pain or blurred vision doesn’t clear, get medical care. A lubricating drop isn’t meant for that.`,
      },
      { h: 'Your event-day kit' },
      {
        p: `Planners are known for emergency kits full of safety pins, tape and stain remover. Add a small pouch for your own eyes:`,
      },
      {
        list: [
          `Your own bottle of eye drops, kept separate from anything you hand out to guests or the wedding party.`,
          `Sunglasses for outdoor portions of the day.`,
          `Clean tissues and hand sanitizer, so you can wash up before touching your eyes.`,
          `A spare pair of glasses if you wear contact lenses, in case your eyes feel too dry for lenses late in the night. Quell’s label doesn’t cover lenses, so ask your eye doctor about drops for them.`,
        ],
      },
      {
        p: `Keep the kit with you, not in the car. Quell’s storage line reads: {storage}. A car in a summer lot or a winter garage can move past that range during a long event. Also from the label: {tip}.`,
      },
      { h: 'Sharing with clients and guests' },
      {
        p: `Brides, speakers and guests sometimes ask the planner for eye drops. Eye drops are personal, and the label gives directions only for the person using the bottle. Point them to their own drops or to a pharmacy instead, and keep yours for you. Our page on [whether you can share eye drops](/guides/can-you-share-eye-drops) explains why.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives the Uses as {uses}. The directions read: {directions}. On a long event day, space those drops across the day: one at load-in, one around dinner service and one during teardown. The panel’s warnings read: {warnings}. See the whole panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'After the event' },
      {
        p: `Short sleep after a late teardown makes eyes feel worse the next morning. Plan a lighter day after big events when you can, and give your eyes a break from screens. If dryness keeps up through quiet weeks, or you feel pain or notice vision changes, see an eye doctor. The label lists when to stop: {stopUse} For conference work, see [dry eyes at a trade show or convention](/guides/dry-eyes-at-a-trade-show-or-convention).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry planning events?',
        a: `Planning means long stretches on a laptop and phone, which lower your blink rate. Event days then add heated ballrooms, patio heaters, stage lights and haze, plus short sleep after late teardowns.`,
      },
      {
        q: 'What should an event planner keep in a kit for their own eyes?',
        a: `Your own bottle of eye drops kept apart from items you hand out, sunglasses for outdoor portions, tissues and hand sanitizer. Keep the kit on you rather than in a hot or cold car.`,
      },
      {
        q: 'Can haze machines bother your eyes at events?',
        a: `Many people find stage haze leaves their eyes feeling scratchy. Step out of hazy areas between cues, and get medical care if anything in your eye causes pain or blurry vision that doesn’t clear.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-grocery-cashiers',
    title: 'Dry eyes for grocery cashiers',
    description:
      'Cold air from the front doors, register screens, cart runs in the lot and the Thanksgiving rush: why grocery cashiers’ eyes dry out, and what helps.',
    category: 'using',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Grocery cashiers’ eyes dry out from a mix of store air and steady screen work: front doors that open on cold or hot air hundreds of times a shift, a register or self-checkout screen at close range, cart runs in the parking lot, and long holiday shifts. Ask for a lane away from the doors when you can, blink fully between customers, keep a lubricating drop in your locker, and use it as its label directs.`,
      },
      { h: 'What makes a grocery lane different' },
      {
        p: `A grocery store looks like any other shop from the outside, but the checkout area has its own conditions. Most stores put the registers right inside the entrance, so the lanes closest to the doors catch every gust. The front end is usually the brightest part of the store, and the work itself is fast, repetitive and screen-based: scan, glance at the screen, bag, take payment, repeat. Each of those has a small effect on your tear film, and over an eight-hour shift they add up.`,
      },
      { h: 'Lanes near the front doors' },
      {
        p: `Automatic doors open for every customer and every cart, and on a cold morning that is a steady wave of dry winter air reaching the first few lanes. In summer, the same doors let in hot air that the store’s air conditioning then fights. Either way, air keeps moving across the front end.`,
      },
      {
        list: [
          `If your store rotates lanes, ask for one farther from the entrance on cold or windy days.`,
          `Stand slightly angled so the draft hits your shoulder rather than your face.`,
          `Wear a vest or layer so the store doesn’t need to crank the heat at the front end for you.`,
          `Point any small heater at your feet, never at your face.`,
        ],
      },
      { h: 'Register screens and self-checkout stations' },
      {
        p: `Checking prices, keying produce codes and watching payment prompts means glancing down at a screen hundreds of times a shift. Supervising a bank of self-checkout stations is even more screen-heavy: you scan several displays for alerts while customers wait. People blink less while they watch a screen. Make a habit of one full, slow blink after each customer and a look across the store when your lane is empty. Our page on [screens and your tear film](/guides/screens-and-your-tear-film) explains the link.`,
      },
      { h: 'Cart runs and the parking lot' },
      {
        p: `Many cashiers also take turns gathering carts. That means going from a heated store into cold wind or summer sun, then back inside, several times a shift. Wraparound sunglasses or safety glasses help in the lot, and a hat with a brim cuts glare off cars and wet pavement. When you come back in, give your eyes a moment before you go straight to the register screen.`,
      },
      { h: 'Thanksgiving week and the holiday rush' },
      {
        p: `The days before Thanksgiving, which falls on Thursday, November 26, 2026, often bring long lines at the registers, and the weeks before Christmas can be just as full. Lines are long, breaks get shorter, and the doors barely close. Plan ahead for those shifts:`,
      },
      {
        list: [
          `Take your full breaks, and spend a minute of each with your eyes closed.`,
          `Keep your bottle in your locker or apron pocket so it’s close when you have a moment.`,
          `Wash your hands before touching your eyes; cash, cards and produce pass through them all shift.`,
          `Get to bed at a reasonable hour on early-shift weeks; short nights make eyes feel worse the following morning.`,
        ],
      },
      {
        p: `For the stockroom and seasonal side of store work, see [dry eyes for retail workers](/guides/dry-eyes-for-retail-workers) and [dry eyes during holiday retail shifts](/guides/dry-eyes-during-holiday-retail-shifts).`,
      },
      { h: 'Hand sanitizer, cleaning spray and your eyes' },
      {
        p: `Checkout lanes are cleaned often, and many cashiers use hand sanitizer between customers. Let sanitizer dry fully before you touch your face, and spray lane cleaner onto a cloth rather than into the air. If sanitizer or a cleaning product gets into an eye, follow that product’s label and call Poison Control or get medical care if the label says to or if pain doesn’t ease. Lubricating drops aren’t meant for a chemical splash.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses on its Drug Facts panel read: {uses}. Directions: {directions}. Three drops a day fit a shift neatly: before work, on your lunch break and after you clock out. The label also reminds you: {tip}. For storage: {storage}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes bother you on days off too, or one eye is always worse, see an eye doctor. The label lists when to stop using a drop: {stopUse} Our [self-check](/self-check) can help you describe what you’re feeling before the appointment; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working as a grocery cashier?',
        a: `The front doors bring in cold or hot air with every customer, the register and self-checkout screens slow your blinking, and cart runs in the lot add wind and glare. Long holiday shifts make all of it worse.`,
      },
      {
        q: 'Which checkout lane is easiest on dry eyes?',
        a: `Usually one farther from the entrance, where the draft from the automatic doors is weaker. A lane away from ceiling vents helps too.`,
      },
      {
        q: 'Can I use eye drops at the register?',
        a: `It’s easier and cleaner on a break. Wash your hands first, since cash and groceries pass through them all shift, and follow the directions on your drop’s label.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-on-black-friday-shopping-trips',
    title: 'Dry eyes on Black Friday shopping trips',
    description:
      'Pre-dawn lines in the cold, hot crowded stores and a short night after Thanksgiving: why Black Friday trips dry your eyes, and how to plan for it.',
    category: 'seasonal',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Black Friday shopping trips dry the eyes because they pack the hardest conditions into a few hours: a short night after Thanksgiving, waiting outside in pre-dawn cold, then hot, crowded stores while you wear a coat, plus a phone full of deal lists. In 2026, Black Friday is Friday, November 27. Sleep what you can, wear glasses in the line, take your coat off inside, and keep any lubricating drop in your pocket, used as its label directs.`,
      },
      { h: 'When is Black Friday 2026?' },
      {
        p: `Thanksgiving is Thursday, November 26, 2026, and Black Friday follows on Friday, November 27. Cyber Monday follows on November 30. Many shoppers head out very early on Friday, some on Thursday evening, which means the trip often starts right after a long holiday day of cooking, travel and a warm, crowded house.`,
      },
      { h: 'The short night before' },
      {
        p: `A late Thanksgiving dinner, dishes, then an alarm set for the dark hours leaves little sleep. Short sleep is one of the plainest reasons eyes feel gritty and heavy in the morning. If you plan to shop early, move the alarm and bedtime together: skip the last hour of television after dinner, set out your coat and list the night before, and go to bed as soon as the house quiets. If your eyes feel dry when you wake, close them for a minute before you reach for your phone.`,
      },
      { h: 'Waiting outside in the cold' },
      {
        p: `Lines that form before a store opens leave you standing still in cold air, often in wind across a big open parking lot. Cold, moving air speeds evaporation from the tear film, and many people find their eyes water and sting at the same time. Plan for the line the way you would for any winter wait:`,
      },
      {
        list: [
          `Wear glasses or wraparound sunglasses. Even clear lenses block wind.`,
          `A hat with a brim and a scarf pulled up help keep wind off your face.`,
          `Turn your back to the wind when you can.`,
          `Keep your bottle of drops in an inside pocket, not in the car.`,
        ],
      },
      {
        p: `For more on standing in cold wind, see [how to protect your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind).`,
      },
      { h: 'Inside: hot, crowded and bright' },
      {
        p: `When the doors open, you go from near-freezing air into a store heated for a crowd. Wearing a heavy coat makes it feel warmer still, and stores tend to be brightly lit and packed. Your eyes go from cold wind to warm, dry, moving air in seconds. Unzip or take off your coat as soon as you are inside, carry it over your arm or in the cart, and step away from vents near the entrance. Walking slowly and looking around the aisles rather than down at a phone gives your eyes more natural blinks.`,
      },
      { h: 'Deal apps, lists and price checks' },
      {
        p: `Many shoppers move through stores with a phone in hand: checking a list, scanning codes, comparing prices with another store. Looking down at a small screen for long stretches lowers the blink rate. Print or write your list, decide your top items the night before, and put the phone away between stores. If you plan to do most of your buying online instead, our guide to [Black Friday and Cyber Monday screen time](/guides/dry-eyes-from-cyber-monday-shopping) covers that side of the weekend.`,
      },
      { h: 'Driving between stores in the dark' },
      {
        p: `An early start means driving before sunrise with the car heater running and headlights in your eyes, then again in low morning sun on the way home. Aim the heat at the windshield and floor rather than the dash vents, keep sunglasses in the car for the drive back, and let someone else drive if you are short on sleep. Leave your eye drops in your pocket rather than the glove box; a parked car in late November can get cold enough to move past the label’s storage range.`,
      },
      { h: 'Does Quell have Black Friday deals?' },
      {
        p: `No. There’s no Black Friday sale and no promo code box at checkout, and there’s no subscription. The price on the buy panel is the same for everyone, and shipping is {shipping} or free on {freeBottles} or more bottles. Our page on [Quell and Black Friday](/guides/quell-black-friday-and-holiday-deals) explains more, and you can [order from the home page](/#buy) any time without waiting in a line.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. The directions read: {directions}. If your shopping trip runs from before dawn to lunchtime, one drop before you leave and another later in the day fits within those directions. Keep it clean: {tip}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'If your eyes don’t settle afterward' },
      {
        p: `A long morning of cold and crowds can leave eyes uncomfortable for the rest of the day, and they usually settle after a night’s sleep. If they don’t, or if you feel pain or notice changes in your vision, see an eye doctor. The label lists when to stop: {stopUse} For more on the whole season, read [dry eyes while Christmas shopping](/guides/dry-eyes-while-christmas-shopping).`,
      },
    ],
    faq: [
      {
        q: 'What date is Black Friday 2026?',
        a: `Black Friday is Friday, November 27, 2026, the day after Thanksgiving on Thursday, November 26. Cyber Monday is November 30.`,
      },
      {
        q: 'Why do my eyes hurt after Black Friday shopping?',
        a: `A short night after Thanksgiving, waiting outside in cold wind, then hot, crowded stores while wearing a coat all dry the tear film. Hours of checking a phone for deals slow your blinking on top of that.`,
      },
      {
        q: 'How do I keep my eyes comfortable waiting in a Black Friday line?',
        a: `Wear glasses or wraparound sunglasses to block the wind, pull a scarf up and stand with your back to the breeze. Keep any eye drops in an inside pocket so they stay at a usable temperature.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-flight-attendant',
    title: 'Christmas gifts for a flight attendant',
    description:
      'Gifts that help with dry cabin air, hotel rooms and carry-on rules: practical Christmas ideas for a flight attendant, from small to splurge.',
    category: 'seasonal',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Good Christmas gifts for a flight attendant make life between flights easier: a small travel humidifier for hotel rooms, a comfortable sleep mask, quality sunglasses, a clear quart-size bag that meets TSA’s carry-on liquids rule, and travel-size comforts that fit it, such as a bottle of lubricating eye drops. Choose things that are light, pack flat and work in a hotel room or a crew bag.`,
      },
      { h: 'What life on the road is like' },
      {
        p: `Flight attendants spend long hours in a pressurized cabin, sleep in a string of hotel rooms, wake at odd hours for early reports and live out of a rolling bag. Cabin air is dry, hotel rooms run heat or air conditioning close to the bed, and long duty days leave little time for rest. A thoughtful gift recognizes that routine. Bulky items and anything fragile tend to stay home; small, sturdy things that fit in a crew bag get used. Our guide to [dry eyes for flight attendants](/guides/dry-eyes-for-flight-attendants) describes the working conditions in more detail.`,
      },
      { h: 'Gifts for hotel rooms' },
      {
        list: [
          `A small portable humidifier. Hotel heating and air conditioning dry the room, and a compact unit that runs on a water bottle or USB power packs easily.`,
          `A soft, contoured sleep mask for daytime rest between flights.`,
          `A travel alarm clock or a sunrise-style light for early report times.`,
          `A packable throw blanket for rooms that run cold.`,
          `A travel power strip, so the humidifier, phone and watch can all charge from one outlet.`,
        ],
      },
      { h: 'Gifts that follow TSA’s liquids rule' },
      {
        p: `Anything liquid in a carry-on falls under TSA’s rule for containers of 3.4 ounces (100 milliliters) or less, packed in one quart-size bag. That makes small, well-chosen liquids practical gifts:`,
      },
      {
        list: [
          `A sturdy, clear quart-size toiletry bag that zips fully and stands up on a counter.`,
          `Travel-size hand cream and lip balm for dry cabin air.`,
          `A bottle of lubricating eye drops. Quell holds {size}, well within the limit.`,
          `Refillable travel bottles for their own shampoo and lotion.`,
        ],
      },
      {
        p: `See [are eye drops TSA compliant?](/guides/are-eye-drops-tsa-compliant) for how TSA handles eye drops at the checkpoint.`,
      },
      { h: 'Gifts for the cabin and the commute' },
      {
        list: [
          `Good sunglasses for the drive to the airport and layovers in bright cities. Polarized lenses cut glare off pavement and water.`,
          `Compression socks in a fun pattern for long hours on their feet.`,
          `A slim crossbody bag or lanyard pouch for essentials on the jet bridge.`,
          `A reusable, insulated cup that fits a galley cupholder or a bag’s side pocket.`,
          `Noise-reducing earplugs for sleeping in airport hotels.`,
        ],
      },
      { h: 'Giving eye drops as a gift' },
      {
        p: `Eye drops can feel like an odd present, but many people who travel for work appreciate a bottle they didn’t have to remember to buy. Put it in a stocking or tuck it into a toiletry bag gift. Quell is a lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its label lists the Uses as {uses}. The directions are {directions}.`,
      },
      {
        p: `Before you give it, two notes from the label. The warnings read: {warnings}. So if your flight attendant has an egg or bird allergy, skip it or let them ask their doctor first. And Quell’s label doesn’t cover contact lenses, so a lens wearer should check with their eye doctor. The storage line is {storage}, which matters for someone whose bag may sit in a cold crew room or a hot car.`,
      },
      { h: 'Shipping a gift to someone who is always away' },
      {
        p: `Flight attendants are often on trips when packages arrive, so ship to the address where someone can receive it, whether that’s their home, a partner’s address or yours for wrapping. Quell ships within the US only, from Brentwood, Tennessee. Checkout works as a guest, and tracking comes by email to the address you enter. No delivery date is promised, and Christmas falls on a Friday this year, so order early. Our guide to [whether the gift recipient sees the price](/guides/will-the-gift-recipient-see-the-price) covers what’s in the box.`,
      },
      { h: 'Pairing it with a card' },
      {
        p: `Some flight attendants work on Christmas itself, flying other people home to their families. A note that says you know that, and a gift that makes the next trip a little more comfortable, often means more than the gift itself. For more ideas in the same spirit, see [Christmas gifts for a pilot](/guides/christmas-gifts-for-a-pilot), [gifts for a frequent business traveler](/guides/gifts-for-a-frequent-business-traveler), or browse [all holiday guides](/guides/topic/seasonal).`,
      },
    ],
    faq: [
      {
        q: 'What do flight attendants actually want for Christmas?',
        a: `Light, practical things that fit a crew bag: a travel humidifier, a sleep mask, a clear quart-size bag, travel-size lotions, good sunglasses and compression socks. Anything that makes hotel rooms more comfortable tends to get used.`,
      },
      {
        q: 'Can I give eye drops to a flight attendant as a gift?',
        a: `Yes, as long as they don’t have a reason to avoid them. Quell’s label carries a caution for people with egg or bird allergies and doesn’t cover contact lenses, so mention both or tuck the bottle in with a note.`,
      },
      {
        q: 'Is a bottle of Quell small enough for a carry-on?',
        a: `Yes. A bottle holds {size}, far under TSA’s 3.4-ounce (100-milliliter) limit for liquids in a carry-on, and it fits in a quart-size bag with other toiletries.`,
      },
    ],
  },
  {
    slug: 'is-it-okay-to-use-eye-drops-once-a-day',
    title: 'Is it okay to use eye drops once a day?',
    description:
      'Quell’s label says 1 drop 3 times per day in each eye. What that means if you only use it once a day, and who to ask if once feels like enough.',
    category: 'choosing',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Whether once a day is okay depends on the label on your bottle. Quell’s directions read: {directions}. The label doesn’t say anything about using fewer drops than that, so once a day is outside what it describes. If one drop seems to be enough, or you can only manage one, ask a pharmacist or your eye doctor whether that suits you, and see a doctor if dryness keeps returning.`,
      },
      { h: 'What Quell’s directions actually say' },
      {
        p: `The Drug Facts panel gives one line of directions: {directions}. That is three separate times across the day, one drop each time, and one drop in each eye at every one of those times. It doesn’t give a schedule by the clock, a minimum or a maximum beyond that line, and it doesn’t describe a lighter routine for people whose eyes only bother them now and then. When people ask whether once a day is okay, the honest answer is that the label simply doesn’t cover it.`,
      },
      {
        p: `Our page on [why the label says 1 drop 3 times a day](/guides/why-does-the-label-say-1-drop-3-times-a-day) looks at the wording itself. This guide is about what to do when your own habit doesn’t match it.`,
      },
      { h: 'Why people end up using drops once a day' },
      {
        p: `Most people who use a drop once a day haven’t made a decision about it. A few patterns come up again and again:`,
      },
      {
        list: [
          `They use it first thing in the morning and forget the rest of the day.`,
          `Their eyes only bother them at one time, such as the end of a workday or a long evening drive.`,
          `They’re trying to make a bottle stretch further.`,
          `They aren’t sure the drop helps, so they use it only when they remember.`,
        ],
      },
      {
        p: `Each of those is worth a different response, and none of them calls for guessing.`,
      },
      { h: 'If once a day seems to be enough' },
      {
        p: `Some people find their eyes comfortable with a single drop, especially outside heating season. That may be fine for you, but it is a question for someone who knows your eyes and your history, not for the label. A pharmacist can answer quickly at the counter, and an eye doctor can look at whether your dryness follows a pattern. Bring the bottle or a photo of the Drug Facts panel so they see exactly what you use. A short [eye drop log](/guides/keeping-an-eye-drop-log) of when you use it and how your eyes feel makes that conversation more useful.`,
      },
      { h: 'If you keep forgetting the other two' },
      {
        p: `If you meant to follow the directions and the second and third drops just slip by, tie them to things you already do. Many people use breakfast, lunch and the end of the workday, or the morning coffee, the commute home and brushing their teeth at night.`,
      },
      {
        list: [
          `Keep a bottle where you spend the middle of the day, such as a desk drawer or a bag.`,
          `Set two quiet phone reminders and stop them once the habit sticks.`,
          `Pair the drop with a screen break: when you stand up, use it, then look out a window for a minute.`,
        ],
      },
      {
        p: `Our guide on [how to remember to use eye drops](/guides/how-to-remember-to-use-eye-drops) has more ideas. If you miss one, don’t double up later; the directions describe one drop at each time.`,
      },
      { h: 'If you’re trying to make a bottle last' },
      {
        p: `Using a drop less often than the label describes to save money isn’t a plan the label supports. It is better to know how quickly you go through a bottle when you follow the directions and order with that in mind. A bottle of Quell holds {size}. Orders of {freeBottles} or more bottles ship free, and there’s one reorder reminder email after you buy, so you aren’t caught without one. See [how many bottles to order](/guides/how-many-bottles-to-order) for a simple way to work it out.`,
      },
      { h: 'Is it bad to use eye drops more than once a day?' },
      {
        p: `For Quell, more than once a day is exactly what the label describes: three times. What the label doesn’t describe is going beyond that. If you find yourself wanting a drop far more often than three times a day, that is worth raising with an eye doctor rather than simply using more. Our page on [using more than three drops a day](/guides/can-i-use-more-than-three-drops-a-day) covers that side of the question.`,
      },
      { h: 'Different drops, different directions' },
      {
        p: `Not every eye drop carries the same directions. Other products have their own labels and their own instructions, so a routine that is right for one bottle isn’t automatically right for another. Quell’s label doesn’t cover using it alongside other eye drops; if you use more than one product, ask your eye doctor or pharmacist how to fit them together. And whichever drop you use, the label’s hygiene line applies: {tip}.`,
      },
      { h: 'When once a day isn’t working' },
      {
        p: `If your eyes still feel dry with the drops you use, more drops isn’t always the answer. The label tells you when to stop and ask a doctor: {stopUse} Our [self-check](/self-check) can help you describe your symptoms before an appointment; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Is one drop a day enough for dry eyes?',
        a: `Quell’s label directs 1 drop 3 times per day in each eye and doesn’t address using fewer. Whether one drop is enough for you is a question for your pharmacist or eye doctor.`,
      },
      {
        q: 'Is it bad to use eye drops more than once a day?',
        a: `Not for Quell, whose label directs three times per day in each eye. The label doesn’t describe going beyond three times, so if you want drops much more often than that, talk with an eye doctor.`,
      },
      {
        q: 'What if I can only remember to use eye drops in the morning?',
        a: `Tie the other two drops to things you already do, such as lunch and the end of the workday, keep a second bottle where you spend the afternoon, and set a reminder until the habit sticks.`,
      },
    ],
  },
  {
    slug: 'how-to-keep-your-eyes-from-drying-out',
    title: 'How to keep your eyes from drying out',
    description:
      'Screens, heated rooms, car vents, wind and fans: a setting-by-setting plan to keep your eyes from drying out, and where a lubricating drop fits.',
    category: 'choosing',
    addedOn: '2026-11-24',
    body: [
      {
        p: `To keep your eyes from drying out, slow down how fast your tears evaporate. Blink fully and look away from screens often, keep heating vents, car vents and fans off your face, run a humidifier in heated rooms, and block wind with glasses. If your eyes still feel dry, a lubricating drop used as its label directs can help, and dryness that keeps returning is for an eye doctor.`,
      },
      { h: 'Why eyes dry out in the first place' },
      {
        p: `Every blink spreads a thin tear film over the eye. It has an oily outer layer that slows evaporation, a watery middle and a mucus layer that helps it cling to the surface. Between blinks, that film slowly evaporates. Anything that stretches the time between blinks, or speeds up evaporation, leaves your eyes drier. Screens and close focus slow blinking; dry, heated, air-conditioned or moving air speeds evaporation. Almost every practical tip comes back to one of those two things. Our page on [the tear film’s oil layer](/guides/the-tear-films-oil-layer) explains the outer layer in more detail.`,
      },
      { h: 'At a screen' },
      {
        list: [
          `Every so often, look at something across the room for several seconds.`,
          `Make a few slow, complete blinks whenever you switch tasks; half blinks don’t spread the tear film well.`,
          `Set the monitor slightly below eye level so your eyes aren’t opened as wide.`,
          `Turn the brightness to match the room, so you’re not squinting.`,
          `Take a real break away from the screen at least once an hour.`,
        ],
      },
      { h: 'At home in heating season' },
      {
        p: `Heating cold outdoor air lowers its relative humidity, and forced-air systems, baseboards, wood stoves and space heaters all move that dry air around. Find where the heat comes from in each room you use a lot, and move your chair, couch or bed out of its path. A humidifier in the bedroom helps on cold nights if you clean it as its maker directs, and turning the thermostat down a few degrees at night means the heat runs less. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) goes room by room.`,
      },
      { h: 'In the car' },
      {
        p: `The dash vents in most cars aim at the driver’s face. Send heat to the floor and windshield, point air conditioning at your chest, and keep the fan on a lower setting once the car is warm or cool. On long drives, stop every couple of hours and close your eyes for a minute. Steady focus on the road slows blinking just as a screen does.`,
      },
      { h: 'Outdoors: wind, sun and cold' },
      {
        list: [
          `Wear wraparound sunglasses or clear safety glasses; any lens that blocks wind helps.`,
          `A brimmed hat cuts glare and some of the breeze.`,
          `Turn your back to the wind when you’re standing still.`,
          `Remember the wind you make yourself: running, cycling and riding with the window down all push air across your eyes.`,
        ],
      },
      {
        p: `See [why your eyes feel dry when it’s windy](/guides/why-do-my-eyes-feel-dry-when-its-windy) for more on wind in every season.`,
      },
      { h: 'While you sleep' },
      {
        p: `A ceiling fan, a box fan or a vent blowing toward the bed moves air across your face for hours. Point fans at your body or across the room, keep the bed out of a vent’s path and run a bedroom humidifier when the heat is on. If your eyes feel driest the moment you wake, that pattern is worth mentioning to an eye doctor.`,
      },
      { h: 'At work' },
      {
        p: `Offices, stores, warehouses and vehicles all have their own version of the same problems: vents, door drafts and screens. Ask to move a desk away from a ceiling vent, take breaks in a different space, and keep your eye drops in a drawer or locker rather than a hot or cold car. Our guides for specific jobs, from [grocery cashiers](/guides/dry-eyes-for-grocery-cashiers) to remote workers, go into detail.`,
      },
      { h: 'Where a lubricating drop fits' },
      {
        p: `None of the steps above replaces a drop for everyone, and a drop doesn’t replace them either; they work on different parts of the problem. Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. Directions: {directions}. The label also says: {tip}. And a caution worth reading before you buy: {warnings}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When it isn’t the air' },
      {
        p: `If your eyes stay dry after you’ve changed the room, the screen habits and the car vents, something else may be going on. An eye doctor can find the cause and decide what to do. The label lists the signs that mean stop: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers more.`,
      },
    ],
    faq: [
      {
        q: 'How can I keep my eyes from drying out at my desk?',
        a: `Look away from the screen often, blink fully when you switch tasks, set the monitor slightly below eye level and move your desk out of the path of heating or air-conditioning vents.`,
      },
      {
        q: 'Does turning down the heat help dry eyes?',
        a: `It can. Heated air has lower relative humidity, and a cooler thermostat at night means the heat runs less. Moving your bed and chair away from vents and running a humidifier help too.`,
      },
      {
        q: 'Do eye drops stop your eyes from drying out?',
        a: `A lubricating drop is used to relieve dryness, but it works alongside changes to your surroundings, not instead of them. Use it as its label directs, and see an eye doctor if dryness keeps returning.`,
      },
    ],
  },
  {
    slug: 'why-do-my-eyes-feel-dry-when-its-windy',
    title: 'Why do my eyes feel dry when it’s windy?',
    description:
      'Moving air pulls moisture off the eye between blinks, whether it’s a gusty day, a bike ride or a fan. Why wind dries your eyes, and what helps.',
    category: 'choosing',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Your eyes feel dry when it’s windy because moving air carries moisture away from the tear film faster than still air does, so the surface dries between blinks. Wind also makes you squint and can blow in dust that irritates. Wraparound glasses, a brimmed hat, turning away from gusts and a lubricating drop used as its label directs all help. Pain, or something stuck in your eye, needs a doctor.`,
      },
      { h: 'What wind does to the tear film' },
      {
        p: `The tear film is a thin layer of oil, water and mucus that each blink spreads across the eye. In still air, a little moisture evaporates from its surface between blinks. When air moves across the eye, it keeps replacing the humid air right at the surface with drier air, so evaporation speeds up. The stronger and drier the wind, the faster the film thins. That’s why a breezy day can leave your eyes stinging even when the temperature is pleasant.`,
      },
      { h: 'Why your eyes water in the wind if they’re dry' },
      {
        p: `Many people notice their eyes streaming on a windy walk and wonder how they can be dry at the same time. When the surface dries and gets irritated, the eyes can respond with a rush of reflex tears. Those tears tend to spill over rather than settle into a steady film, so the watering doesn’t fix the dryness. Our page on [why eyes are watery if they’re dry](/guides/why-are-my-eyes-watery-if-they-are-dry) explains the reflex more fully.`,
      },
      { h: 'The wind you make yourself' },
      {
        p: `Weather isn’t the only source. Moving through still air has the same effect on your eyes as wind blowing at you:`,
      },
      {
        list: [
          `Running or cycling, where your own speed adds to any breeze. See [dry eyes when cycling](/guides/dry-eyes-when-cycling).`,
          `Riding in a car with the window down, or in a convertible or open-sided vehicle.`,
          `Boating, skiing, riding a motorcycle or an e-bike.`,
          `Standing beside a fan, a leaf blower or the exhaust of a heater.`,
        ],
      },
      { h: 'Wind indoors' },
      {
        p: `Indoors, the wind is quieter but steadier. A ceiling fan, a desk fan, a floor register or the dash vent in a car blows air across your face for hours at a time. Because it’s gentle, people rarely connect it with their eyes. If your eyes feel worse in one room, one chair or one car, look for the airflow. Our guide on [sleeping with a fan on](/guides/dry-eyes-when-sleeping-with-a-fan-on) covers the bedroom version.`,
      },
      { h: 'Hot wind versus cold wind' },
      {
        p: `Both dry the eyes, in slightly different ways. Cold winter wind usually carries little moisture, and your eyes then go into heated rooms that are dry too. Hot, dry summer wind adds sun and glare, so you squint and blink less. For the winter side in detail, see [how to protect your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind).`,
      },
      { h: 'What helps on a windy day' },
      {
        list: [
          `Wear glasses that wrap around the sides. Sunglasses, clear safety glasses and sport glasses all block wind; goggles block the most.`,
          `Add a hat with a brim, which cuts both glare and some of the airflow.`,
          `Turn your back or your side to gusts when you’re standing still.`,
          `Plan long outdoor tasks for the calmer part of the day if your local forecast shows one.`,
          `Close your eyes for a few seconds now and then, and blink fully when you’re out of the wind.`,
          `In the car, keep windows mostly up at speed and vents aimed away from your face.`,
        ],
      },
      { h: 'Dust, grit and debris' },
      {
        p: `Wind picks up dust, sand, pollen and small debris. If something blows into your eye, don’t rub it. If your own tears don’t clear it, see an eye doctor or go to urgent care. A lubricating drop isn’t the tool for something stuck in the eye, and the label covers dryness and irritation, not debris.`,
      },
      { h: 'Using a drop before or after wind' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. The directions read: {directions}. Some people time one of those drops before a windy walk or a ride and another afterward. Use it out of the wind if you can, and keep the tip clean: {tip}. The bottle’s storage line is {storage}, so in cold or hot weather carry it in an inside pocket. See the full panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When it’s more than wind' },
      {
        p: `If your eyes stay uncomfortable long after you come inside, or one eye hurts, see an eye doctor. The label lists when to stop: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why does wind make my eyes dry?',
        a: `Moving air keeps replacing the humid air at the surface of your eye with drier air, which speeds evaporation from the tear film between blinks. Wind also makes you squint and can blow in dust.`,
      },
      {
        q: 'Do glasses help with dry eyes in the wind?',
        a: `Yes. Any lens that blocks airflow helps, and wraparound styles that cover the sides block more. Goggles block the most, which is why skiers and riders use them.`,
      },
      {
        q: 'Can a fan dry out your eyes like wind?',
        a: `It can. A fan, vent or car dash vent blows a gentle but steady stream of air across your face, which speeds evaporation from the tear film the same way outdoor wind does.`,
      },
    ],
  },
  {
    slug: 'ordering-eye-drops-for-a-church-or-club',
    title: 'Ordering eye drops for a church, club or team',
    description:
      'Buying eye drops for a church, club or team? How a group order works on quelldrop.com, what it costs to ship, and why each person needs a bottle.',
    category: 'ordering',
    addedOn: '2026-11-24',
    body: [
      {
        p: `A church, club or team can order Quell like anyone else: one person checks out as a guest, pays with a card, and ships the order to one US address. There’s no group pricing, no invoicing and no promo codes, but orders of {freeBottles} or more bottles ship free. Plan one bottle per person, since eye drops shouldn’t be shared, and call {phone} with anything the site doesn’t answer.`,
      },
      { h: 'When groups buy eye drops' },
      {
        p: `Groups order eye drops for practical reasons: a first aid kit for a church van, supplies for a hiking club’s winter trips, gift bags for a seniors’ group, or a team that travels to tournaments and spends long days outside. The ordering is simple. The thinking happens before checkout: who is the order for, where it should go, and who pays.`,
      },
      { h: 'How a group order works' },
      {
        list: [
          `One person places the order from the [home page](/#buy). No account is needed.`,
          `Choose the number of bottles in the cart, up to 10 per order. Each bottle holds {size}.`,
          `Enter one shipping address. Each order ships to a single US address.`,
          `Pay by card on the secure payment page. The terms ask that the buyer be 18 or older.`,
          `The confirmation email goes to the address entered at checkout, and tracking follows when it ships.`,
        ],
      },
      {
        p: `If you’d like bottles sent to several homes, place a separate order for each address. Our guide on [buying Quell for several people at once](/guides/buying-quell-for-several-people) walks through that.`,
      },
      { h: 'Is there a group discount?' },
      {
        p: `No. Quell doesn’t offer bulk, group or nonprofit pricing, and there’s no promo code box. What a larger order does change is shipping: standard shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. There’s also no subscription to manage. See [buying eye drops in bulk](/guides/buying-eye-drops-in-bulk) for more on larger orders.`,
      },
      { h: 'Paying with an organization’s card' },
      {
        p: `If the group has its own card, use it at checkout. The confirmation email lists the order and serves as the record; there are no invoices or net terms. If your treasurer needs something else, call {phone} ({hours}) before ordering. Our pages on [buying eye drops with a company card](/guides/buying-eye-drops-with-a-company-card) and [getting a receipt](/guides/getting-a-receipt-for-your-order) cover the paperwork side.`,
      },
      { h: 'Where to ship it' },
      {
        p: `Ship to an address where someone will be there to receive it: the church office during the week, a coach’s home, or the club secretary’s house. Offices that close for the holidays can leave a package sitting on a step, so check the schedule before you order in December. No delivery date is promised, so order well ahead of a trip or event.`,
      },
      { h: 'One bottle per person' },
      {
        p: `A group order is a good time to remember that eye drops are personal. The tip of the bottle touches near the eye, and the label says: {tip}. Passing one bottle around a team bus defeats that. Give each person their own, and label it with a name if bottles will sit together in a kit. Our page on [whether you can share eye drops](/guides/can-you-share-eye-drops) explains why.`,
      },
      { h: 'What each person should read first' },
      {
        p: `Hand out the bottles in their cartons, since the Drug Facts panel is printed on the box. A few lines deserve attention before anyone uses one:`,
      },
      {
        list: [
          `Warnings: {warnings}. Anyone with an egg or bird allergy should ask a doctor or pharmacist first.`,
          `Directions: {directions}.`,
          `Storage: {storage}. A church van or team bus can move past that range in summer or winter.`,
          `The label doesn’t give directions for children or for contact lenses; those questions go to a doctor or pharmacist.`,
        ],
      },
      {
        p: `The whole panel is on our [Drug Facts page](/drug-facts) if someone wants to read it larger on a phone or tablet.`,
      },
      { h: 'Counting how many bottles to order' },
      {
        p: `Start with a list of names rather than a guess. Ask people ahead of time whether they want a bottle, since some will already have a drop they like and some will have a reason to skip it. If the bottles are for a shared first aid kit rather than individuals, one or two sealed spares are usually enough; an opened bottle belongs to the person who opened it. For a gift bag at a seniors’ lunch or a volunteer thank-you, a short note that says what the product is and points to the label reads better than any promise about how it will feel. Our page on [eye drops for a home first aid kit](/guides/eye-drops-for-a-home-first-aid-kit) covers keeping spares in a kit.`,
      },
      { h: 'If something goes wrong' },
      {
        p: `Damaged, incorrect or broken-seal orders are replaced if you contact us within {returnDays} days. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back, which helps if the group ends up with extras. Call {phone} with the order number from the confirmation email.`,
      },
    ],
    faq: [
      {
        q: 'Can a church buy eye drops for its members?',
        a: `Yes. One person checks out as a guest, pays with the church’s card or their own, and ships the order to one US address such as the church office. There’s no special pricing for churches or nonprofits.`,
      },
      {
        q: 'Is there a discount for ordering eye drops for a group?',
        a: `No group, bulk or nonprofit pricing is offered, and there are no promo codes. Orders of {freeBottles} or more bottles do ship free.`,
      },
      {
        q: 'Can I get an invoice for a group eye drop order?',
        a: `Quell doesn’t offer invoices or net terms. The confirmation email lists the order and works as the record; if your organization needs more, call {phone} before you order.`,
      },
    ],
  },
  {
    slug: 'ordering-eye-drops-for-your-household',
    title: 'Ordering eye drops for everyone in your household',
    description:
      'Two or three adults at home who use eye drops? How to order for the household in one checkout, why each person needs a bottle, and when to reorder.',
    category: 'ordering',
    addedOn: '2026-11-24',
    body: [
      {
        p: `If several adults at home use eye drops, one person can order for the household in a single checkout: choose the number of bottles, ship to your address and pay once. An order holds up to 10 bottles, and {freeBottles} or more ship free. Give each person their own bottle, since eye drops shouldn’t be shared, and check the label’s egg or bird allergy caution for everyone before you buy.`,
      },
      { h: 'One order for the whole house' },
      {
        p: `Households often end up with two or three people using eye drops: a couple who both work at screens, a grown child living at home, a parent who has moved in. Placing one order instead of several is simpler, and it puts the shipping charge on one box. Shipping is {shipping} per order, and orders of {freeBottles} or more bottles ship free, which a household reaches quickly. The checkout accepts up to 10 bottles in a single order; our page on [the bottle limit](/guides/is-there-a-limit-on-how-many-bottles-you-can-order) explains it.`,
      },
      { h: 'How to place it' },
      {
        list: [
          `Choose the number of bottles on the [home page](/#buy) and add them to the cart. No account is needed.`,
          `Enter the email of whoever keeps track of household orders. The confirmation, the shipping email and the one reorder reminder all go there.`,
          `Ship to your home address, using the name of someone who is usually there to bring the box in.`,
          `Pay once with one card. Each bottle holds {size}.`,
        ],
      },
      { h: 'One bottle per person' },
      {
        p: `It’s tempting to keep one bottle on the bathroom counter for everyone. Eye drops don’t work that way. The bottle’s tip comes close to the eye, and the label says: {tip}. A shared bottle passes from one person’s eye area to the next. Give each person their own, and tell them apart with a strip of colored tape or initials on the carton. Our guides on [whether couples can share a bottle](/guides/can-couples-use-the-same-bottle-of-eye-drops) and [sharing eye drops](/guides/can-you-share-eye-drops) go into it.`,
      },
      { h: 'Check the label for each person' },
      {
        p: `A household order means you’re choosing for people other than yourself, so read a few lines with them in mind:`,
      },
      {
        list: [
          `Warnings: {warnings}. Anyone at home with an egg or bird allergy should ask a doctor or pharmacist before using it.`,
          `Directions: {directions}.`,
          `The label doesn’t give directions for children, for contact lenses or for use with other eye drops. Those questions go to a doctor or pharmacist.`,
          `If someone already uses a drop their eye doctor suggested, let them stay with it unless the doctor says otherwise.`,
        ],
      },
      {
        p: `The whole panel is on our [Drug Facts page](/drug-facts), which is easier to read together on a screen than on a small carton.`,
      },
      { h: 'Where to keep several bottles' },
      {
        p: `The storage line reads: {storage}. Most homes sit comfortably in that range, but a steamy bathroom, a sunny windowsill or a car glove box may not. Keep each person’s bottle where they use it, such as a nightstand, a desk drawer or a work bag, and keep sealed spares together in a cool cupboard. Our page on [keeping spare bottles](/guides/keeping-spare-bottles) has more.`,
      },
      { h: 'Reordering when bottles run out at different times' },
      {
        p: `People use their drops at different rates, so a household’s bottles rarely run out together. One reorder reminder email comes to the checkout email after an order, which works as a nudge to check every bottle at once. Some households keep one sealed spare and reorder when that spare gets opened. Others write the date each bottle was opened on its carton. Whatever system you use, reorder before the last one runs low, since no delivery date is promised. Quell has no subscription, so there’s nothing to cancel or adjust between orders.`,
      },
      { h: 'Paying from an HSA or FSA' },
      {
        p: `Many households pay for over-the-counter medicines from a health savings account or flexible spending account. Plan rules decide whose purchases count, so check with your plan administrator. Our guide on [using your HSA for your spouse’s eye drops](/guides/can-i-use-my-hsa-for-my-spouses-eye-drops) covers the most common household question.`,
      },
      { h: 'If you order too many' },
      {
        p: `Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. Call {phone} ({hours}) with the order number. Opened bottles can’t be refunded, which is one more reason to leave the spares sealed until someone needs one.`,
      },
      { h: 'When someone at home needs more than drops' },
      {
        p: `If one person’s eyes stay uncomfortable while everyone else’s are fine, that difference is worth an eye doctor’s look. The label lists when to stop: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Can I order eye drops for my whole family in one order?',
        a: `Yes, for the adults in the house. Choose the number of bottles in one checkout, up to 10 per order, and ship to your home. Orders of {freeBottles} or more bottles ship free.`,
      },
      {
        q: 'Should each person in my house have their own eye drops?',
        a: `Yes. The bottle tip comes close to the eye, and the label says not to touch it to any surface. Give each person a bottle and mark the cartons so they don’t get mixed up.`,
      },
      {
        q: 'Who gets the emails for a household eye drop order?',
        a: `Whoever’s email is entered at checkout receives the confirmation, the shipping email with tracking and the one reorder reminder.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-while-hanging-christmas-lights',
    title: 'Dry eyes while hanging Christmas lights',
    description:
      'Cold wind on a ladder, bright sky overhead and grit from the gutters: why hanging outdoor Christmas lights dries and irritates eyes, and what helps.',
    category: 'seasonal',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Hanging Christmas lights outside dries and irritates the eyes because you spend an afternoon looking up into a bright sky, standing in cold wind on a ladder, and reaching into gutters full of grit and leaves. Wear safety glasses or wraparound sunglasses, pick a calm, mild afternoon, clear the gutters before you hang anything, and use any lubricating drop on the ground, as its label directs, not on the ladder.`,
      },
      { h: 'Why lights day is hard on your eyes' },
      {
        p: `Many households put their outdoor lights up over Thanksgiving weekend or the first weekends of December. The job looks simple, but it stacks several things that work against the tear film. Looking up widens the eyes and exposes more of their surface. Wind is usually stronger at roof height than at ground level. Cold air holds little moisture. And you are focused on small clips and plugs, so you blink less. By the time the last strand is up, many people come down with stinging, watering eyes.`,
      },
      { h: 'Looking up into a bright sky' },
      {
        p: `Hanging lights along a roofline or a tall tree means hours with your head tilted back and a bright winter sky behind your work. Low December sun can sit right in your line of sight in the afternoon. Squinting into it is tiring, and the wider-open eyes of an upward gaze dry faster.`,
      },
      {
        list: [
          `Work on the side of the house that is in shade, and move around as the sun moves.`,
          `Wear sunglasses or tinted safety glasses, ideally ones that wrap around the sides.`,
          `A cap with a brim helps when you are looking up at a slight angle.`,
          `Every few clips, look down at the ground for a moment and blink fully.`,
        ],
      },
      { h: 'Gutters, shingles and falling debris' },
      {
        p: `Many lights clip to gutters or shingles, and that puts your hands and face right next to leaves, grit, roof granules and dust. Reaching in and pulling out a handful of wet leaves can send debris falling straight toward your eyes. Clean the gutters on a separate trip before lights day, with safety glasses on. When you clip lights along the edge, keep your face to the side of your hands rather than directly below them.`,
      },
      {
        p: `If grit or a piece of leaf gets into an eye, climb down before you deal with it. Don’t rub. If your own tears don’t clear it, see an eye doctor or go to urgent care. Lubricating drops aren’t meant for something stuck in the eye.`,
      },
      { h: 'Cold wind at the top of the ladder' },
      {
        p: `A breeze you barely notice in the yard can feel sharp at the eaves. Cold, moving air pulls moisture off the eye quickly, and you often can’t turn away from it while you hold a strand in one hand and the ladder in the other. Check the forecast and choose a calm, mild afternoon rather than the first free hour, and keep the session short if the wind picks up. Our guide on [protecting your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) covers more.`,
      },
      { h: 'Keep eye drops on the ground' },
      {
        p: `Tilting your head back for a drop while standing on a ladder is a poor idea. Use a drop before you climb and again when you come down for a break, standing on solid ground or sitting on the porch steps. Keep the bottle in an inside pocket while you work; a bottle left in a cold garage or on a porch rail can drop below the label’s storage range. Quell’s storage line reads: {storage}.`,
      },
      { h: 'Untangling strands in a cold garage' },
      {
        p: `Before anything goes up, strands come out of storage boxes, often in a cold garage or a dusty basement. Shake boxes out outdoors and away from your face, test strands on a table at chest height rather than bending low over them, and wash your hands before you touch your eyes. Our guide to [dry eyes while decorating for Christmas](/guides/dry-eyes-while-decorating-for-christmas) covers the indoor side: attic boxes, glitter and the tree.`,
      },
      { h: 'The first night with the lights on' },
      {
        p: `Testing the display after dark means looking at bright points of light against a black sky. Many people stare at them longer than they realize while they fix a dark section. That isn’t harmful in itself, but long focus means fewer blinks, and you are often still out in the cold. Make the check quick and do any fiddly repairs the next afternoon. If you plan a drive around the neighborhood afterward, see [driving to see Christmas lights with dry eyes](/guides/driving-to-see-christmas-lights-with-dry-eyes).`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. The directions read: {directions}. With work gloves and dusty hands, this line matters most: {tip}. Wash up and take your gloves off first. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'If your eyes still hurt the following morning' },
      {
        p: `Eyes that sting after an afternoon in the wind usually settle with rest and warmth. Eyes that hurt, keep feeling scratchy as if something is still in them, or see differently need an eye doctor. The label is plain: {stopUse} Browse more winter ideas in [our holiday guides](/guides/topic/seasonal).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes hurt after putting up outdoor Christmas lights?',
        a: `Looking up into a bright sky, standing in cold wind at roof height and focusing on small clips all dry the tear film. Grit and leaves from gutters can irritate the eyes on top of that.`,
      },
      {
        q: 'Should I wear safety glasses to hang Christmas lights?',
        a: `They help. Glasses that wrap around the sides block wind and keep falling grit and leaf bits from the gutters out of your eyes, and tinted pairs cut glare from a bright sky.`,
      },
      {
        q: 'Can I use eye drops while I’m on a ladder?',
        a: `Tilting your head back on a ladder isn’t a good idea. Use a drop on solid ground before you climb and during breaks, following the directions on your drop’s label.`,
      },
    ],
  },
  {
    slug: 'eye-drop-tracking-not-updating',
    title: 'Eye drop tracking not updating? What to check',
    description:
      'Tracking stuck on the same scan? Check your order status, the shipping email and the address, give it time, then call with your order number.',
    category: 'shipping',
    addedOn: '2026-11-24',
    body: [
      {
        p: `If the tracking on your eye drop order hasn’t updated, the package is usually between scans: tracking only changes when the carrier scans it, and there can be quiet stretches. Check the status on the [track your order](/orders) page, confirm the address in your shipping email, and give it a little time. If nothing changes after several days, call {phone} ({hours}) with your order number.`,
      },
      { h: 'How tracking works for a Quell order' },
      {
        p: `There are two places to look. The [track your order](/orders) page on this site shows where the order stands with us, using your order number and the email you checked out with. Once the package has shipped, the shipping email gives a tracking number and, for the carriers the shop links to, a link to the carrier’s own tracking page. That carrier page shows the scans along the way. Knowing which one you are looking at answers most questions. Our guide on [how to track your order](/guides/how-to-track-your-order) covers both.`,
      },
      { h: 'If the order page still says Paid' },
      {
        p: `An order shows Paid while it is being prepared in Brentwood, Tennessee. There’s no tracking number to follow until it ships, so a carrier page may show nothing at all yet. The status changes to Shipped when the package leaves, and the shipping email arrives then. Orders are packed by hand, and the site doesn’t promise a ship date. Our page on [what your order status means](/guides/what-your-order-status-means) explains each status.`,
      },
      { h: 'Shipped, but no scans yet' },
      {
        p: `Sometimes the shipping email arrives and the carrier’s page shows little or nothing for a while. Occasionally an order is marked shipped before its tracking number is available. In either case the order has left us; the carrier’s system simply hasn’t caught up. Check again later in the day or the next morning.`,
      },
      { h: 'Stuck on the same scan' },
      {
        p: `A package can travel a long way between scans, especially across the country from Tennessee. Tracking that stays on one line for a while doesn’t usually mean it is lost. A few things make quiet stretches longer:`,
      },
      {
        list: [
          `Weekends and holidays, when fewer packages move and fewer scans happen.`,
          `The weeks around Thanksgiving and Christmas, when carriers handle much more volume.`,
          `Winter storms that close roads or slow trucks. See [will a winter storm delay my order?](/guides/will-a-winter-storm-delay-my-eye-drop-order)`,
          `Long distances to rural areas, Alaska or Hawaii.`,
        ],
      },
      { h: 'Check the address' },
      {
        p: `The shipping email shows the address the package is going to. Read it carefully: a wrong apartment number, a missing street suffix or an old address saved in your browser can send a package back and forth. If something is wrong, call right away. Our guide on [entering the wrong shipping address](/guides/wrong-shipping-address) explains what can and can’t be done.`,
      },
      { h: 'If tracking says delivered but you don’t have it' },
      {
        p: `That’s a different problem from tracking that won’t move. Check porches, side doors, mailrooms and neighbors first, then see [tracking says delivered, but no package?](/guides/tracking-says-delivered-but-no-parcel) for the next steps.`,
      },
      { h: 'When to call us' },
      {
        p: `If the tracking hasn’t changed for several days, or the order page has said Paid for longer than you expected, call {phone}, {hours}. Have these ready:`,
      },
      {
        list: [
          `Your order number, which starts with Q- and is in the subject line of the confirmation email.`,
          `The email address you used at checkout.`,
          `The tracking number and the last scan it shows.`,
        ],
      },
      { h: 'What we can and can’t promise' },
      {
        p: `Quell ships from Brentwood, Tennessee, to US addresses only, and no delivery date is promised. Our terms say delivery estimates are estimates, and that risk of loss passes on delivery to the address you provide. Damaged, incorrect or broken-seal orders are replaced if you contact us within {returnDays} days. If you rely on the drops every day, the simplest protection against a slow package is ordering before your current bottle runs low; the one reorder reminder email helps with that.`,
      },
      { h: 'Tracking a gift sent to someone else' },
      {
        p: `If you sent Quell to a parent, a friend or a gift recipient, the shipping email and its tracking come to you, not to them, because they go to the email entered at checkout. When tracking stalls, let the recipient know a package is on its way so they watch the porch and the mailbox, and forward the shipping email if they want to follow it themselves. If the address on the shipping email doesn’t match where they live now, call us as soon as you notice.`,
      },
      { h: 'Running low while you wait?' },
      {
        p: `If the bottle you have is nearly empty, use it as the label directs ({directions}) and don’t stretch it by skipping doses or sharing someone else’s bottle. Our page on [what to do when you run out of eye drops](/guides/what-to-do-when-you-run-out-of-eye-drops) has ideas for the gap.`,
      },
    ],
    faq: [
      {
        q: 'Why hasn’t my eye drop tracking updated?',
        a: `Tracking changes only when the carrier scans the package, so it can sit on one line while the package travels. Weekends, holidays, busy seasons and winter weather all lengthen the quiet stretches.`,
      },
      {
        q: 'My Quell order says Paid but not Shipped. Why is there no tracking?',
        a: `Paid means the order is being prepared in Brentwood, Tennessee. A tracking number exists only once it ships, and the shipping email with that number arrives when the status changes to Shipped.`,
      },
      {
        q: 'Who do I call if my eye drop tracking is stuck?',
        a: `Call {phone} ({hours}) with your order number, the email you used at checkout and the last scan the tracking shows. You can also check the track your order page any time.`,
      },
    ],
  },
  {
    slug: 'calling-about-an-eye-drop-order-for-someone-else',
    title: 'Calling about an eye drop order for someone else',
    description:
      'Helping a parent, spouse or gift recipient with a Quell order? What to have ready before you call, what can be fixed and what to leave to a doctor.',
    category: 'returns',
    addedOn: '2026-11-24',
    body: [
      {
        p: `You can call {phone} ({hours}) about an order on someone else’s behalf, such as a parent, spouse or gift recipient. The call goes fastest with the order number, the email used at checkout, the name and address on the order, and a clear note of the problem. Keep the person who placed the order nearby if you can, and send any questions about their eyes to their doctor or pharmacist.`,
      },
      { h: 'When people call for someone else' },
      {
        p: `A lot of calls about orders come from someone other than the person who bought the drops or the person who uses them. Common situations include:`,
      },
      {
        list: [
          `An adult child sorting out a package for a parent who doesn’t use email.`,
          `A spouse calling while the buyer is at work.`,
          `A gift recipient whose bottle arrived damaged.`,
          `A caregiver or neighbor helping an older adult with their mail.`,
        ],
      },
      {
        p: `In each case, the order itself has its own details: who bought it, which email it was placed with and where it was sent. The more of those you have in hand, the shorter the call.`,
      },
      { h: 'What to have ready' },
      {
        list: [
          `The order number. It starts with Q- and is in the subject line of the confirmation email.`,
          `The email address used at checkout, which may be the buyer’s rather than yours.`,
          `The name and shipping address on the order.`,
          `What is wrong: damaged, incorrect, a broken seal, or an unopened bottle that isn’t wanted.`,
          `What the tracking shows, if the package has shipped.`,
        ],
      },
      {
        p: `If you can’t find the order number, ask the buyer to search their inbox for “Quell.” Our guide on [finding your order number](/guides/finding-your-order-number) explains where it appears, and [before you call about an order](/guides/before-you-call-about-an-order) has a fuller checklist.`,
      },
      { h: 'Keep the buyer close by' },
      {
        p: `Some questions can only be answered by the person who placed the order, such as which email they used or what they meant to buy. If you’re calling for a parent, sit together or put them on speaker so they can answer directly. That also means the person whose order it is hears what was decided.`,
      },
      { h: 'What can be sorted out by phone' },
      {
        p: `Our terms set out what happens after delivery:`,
      },
      {
        list: [
          `An order that arrives damaged, incorrect or with a broken tamper seal is replaced at no charge if you contact us within {returnDays} days.`,
          `An unopened bottle can be refunded within {returnDays} days of delivery, and it doesn’t need to be sent back. Original shipping isn’t refunded.`,
          `Opened bottles can’t be refunded, returned or resold.`,
        ],
      },
      {
        p: `For a damaged or incorrect order, keep the box and bottles until it’s resolved and take a photo before anything is thrown out. Our page on [damaged orders](/guides/damaged-order) walks through that case.`,
      },
      { h: 'When the drops were a gift' },
      {
        p: `If you received Quell as a gift and something is wrong, you may not have the order number or the email it was placed with. The quickest route is usually to ask the giver to forward the confirmation email, or to call together. If you’d rather not say anything to the giver, call anyway with the name and address on the package and the date it arrived, and we’ll do what we can to find it.`,
      },
      { h: 'Order questions, not eye questions' },
      {
        p: `The phone line handles orders: shipping, damage, refunds and replacements. It isn’t a place for medical advice, and nobody on the line can tell you whether the drops suit your parent’s eyes. For that, the label and a doctor or pharmacist are the sources. The label’s stop-use line reads: {stopUse} Our guide to [order questions vs. medical questions](/guides/order-questions-vs-medical-questions) explains the difference.`,
      },
      { h: 'Write down what was agreed' },
      {
        p: `When you call for someone else, they weren’t on the line, so make a short note when you hang up: the date, the order number and what will happen next, such as a replacement on its way or a refund on an unopened bottle. Share it with the buyer and the person who uses the drops. It saves a second call if anyone later wonders what was decided.`,
      },
      { h: 'Calling outside business hours' },
      {
        p: `The line is staffed {hours}. Outside those hours, the [track your order](/orders) page works any time with the order number and the checkout email, and the [contact section](/about#contact) lists other ways to reach us.`,
      },
      { h: 'Helping with the next order' },
      {
        p: `If you often handle orders for someone else, it can help to place future orders with your own email in the checkout so the confirmation and tracking come to you. Our page on [ordering for a parent without email](/guides/ordering-eye-drops-for-a-parent-without-email) explains how that works.`,
      },
    ],
    faq: [
      {
        q: 'Can I call Quell about my mom’s order?',
        a: `Yes. Call {phone} ({hours}) with the order number, the email used at checkout and the name and address on the order. Having your mom nearby helps if a question comes up that only the buyer can answer.`,
      },
      {
        q: 'What do I need to call about someone else’s eye drop order?',
        a: `The order number from the confirmation email, the checkout email address, the name and shipping address on the order, and a clear description of the problem, plus the tracking status if it has shipped.`,
      },
      {
        q: 'Can a gift recipient report a damaged Quell order?',
        a: `Yes. Damaged, incorrect or broken-seal orders are replaced if you contact us within {returnDays} days. If you don’t have the order number, give the name, address and delivery date, or ask the giver to forward the confirmation.`,
      },
    ],
  },
  {
    slug: 'is-there-hyaluronic-acid-in-quell',
    title: 'Is there hyaluronic acid in Quell eye drops?',
    description:
      'No. Hyaluronic acid isn’t on Quell’s Drug Facts panel. Here is what the label does list, how Quell approaches the tear film, and who to ask.',
    category: 'formula',
    addedOn: '2026-11-24',
    body: [
      {
        p: `No. Hyaluronic acid isn’t on Quell’s Drug Facts panel. The active ingredients are {actives}, and the inactive ingredients are {inactives}. Quell is built around the tear film’s oil layer instead. If a doctor has suggested a drop with a specific ingredient, follow that advice, and ask a pharmacist before using more than one eye drop.`,
      },
      { h: 'How to check any eye drop for an ingredient' },
      {
        p: `Every over-the-counter eye drop has a Drug Facts panel on its carton, and it lists two kinds of ingredients. Active ingredients come first, each with a stated purpose. Inactive ingredients follow in a separate list. If an ingredient isn’t in either list, it isn’t in the product. Searching a label for a name you’ve read about is the quickest way to answer a question like this one, for Quell or anything else. Our page on [active vs. inactive ingredients](/guides/active-vs-inactive-ingredients-in-eye-drops) explains the two lists.`,
      },
      { h: 'What Quell’s label does list' },
      {
        p: `Quell has three active ingredients, each with its purpose on the panel:`,
      },
      {
        list: [
          `{glycerol}, listed as a lubricant.`,
          `{polysorbate}, also listed as a lubricant.`,
          `{mineralOil}, listed as an emollient.`,
        ],
      },
      {
        p: `It also lists {inactiveCount} inactive ingredients: {inactives}. Hyaluronic acid isn’t among them, under that name or any other. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Why people ask' },
      {
        p: `Hyaluronic acid turns up on many product labels, from skin serums to some eye drops, and people who have read about it often want to know whether a new bottle contains it. Some are comparing products; some have been told by a doctor to look for a particular ingredient; some simply want to know what they are putting in their eyes. All three are good reasons to read the label closely, and the answer for Quell is the same in each case.`,
      },
      { h: 'How Quell approaches dryness instead' },
      {
        p: `The tear film has three layers: an oil layer on the outside, a watery layer in the middle and a mucus layer that helps it hold to the eye. The oil layer slows evaporation of the water beneath it. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. That is why its label includes an emollient, light mineral oil, alongside two lubricants, and why emu oil appears among the inactive ingredients. The carton’s emu oil panel says: {emuOil}`,
      },
      {
        p: `Our page on [the tear film’s oil layer](/guides/the-tear-films-oil-layer) explains that layer in more depth, and [lubricant vs. emollient eye drops](/guides/lubricant-vs-emollient-eye-drops) covers the two purposes on Quell’s panel.`,
      },
      { h: 'Is one kind of drop better than another?' },
      {
        p: `That depends on your eyes, and it isn’t something a label or a website can decide for you. Different drops are built differently, and people respond to them differently. If you’re choosing between products, compare their Uses and Directions sections, read the warnings, and ask a pharmacist or your eye doctor which suits you. If your eye doctor has recommended a specific ingredient, stay with that advice.`,
      },
      { h: 'Using Quell with another eye drop' },
      {
        p: `Quell’s label doesn’t cover using it alongside other eye drops. If you already use a drop that contains hyaluronic acid, or any other product, ask your eye doctor or pharmacist how and whether to combine them before adding Quell. Our guide to [using Quell with other eye drops](/guides/using-quell-with-other-eye-drops) explains why the label leaves that to them.`,
      },
      { h: 'Skin serums near the eyes' },
      {
        p: `Hyaluronic acid serums for the face are a different kind of product entirely. They are made for skin, and their own labels say how close to the eyes they can go. Quell’s warnings read: {warnings}. Don’t put skin products into your eyes, and if one gets in, follow that product’s label and get medical care if pain or blurry vision doesn’t clear.`,
      },
      { h: 'What else to read on the label' },
      {
        p: `Whatever drop you use, three lines on Quell’s panel are worth knowing. Its Uses read: {uses}. The directions say: {directions}. And: {tip}. If you have questions the panel doesn’t answer, the pharmacist is the right person to ask, or call {phone} for questions about an order.`,
      },
    ],
    faq: [
      {
        q: 'Does Quell have hyaluronic acid in it?',
        a: `No. Quell’s Drug Facts panel lists three active ingredients, {actives}, and {inactiveCount} inactive ones. Hyaluronic acid isn’t among them.`,
      },
      {
        q: 'Can I use Quell with hyaluronic acid eye drops?',
        a: `Quell’s label doesn’t cover using it with other eye drops. Ask your eye doctor or pharmacist whether and how to combine them before you add a second product.`,
      },
      {
        q: 'What does Quell use instead of hyaluronic acid?',
        a: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists two lubricants, glycerol and polysorbate 80, and an emollient, light mineral oil, with emu oil among the inactive ingredients.`,
      },
    ],
  },
  {
    slug: 'what-worsens-or-persists-means-on-eye-drops',
    title: 'What “worsens or persists” means on eye drops',
    description:
      'The stop-use line ends with “worsens or persists for 72 hours.” How to tell if eyes are getting worse, how to count the days, and what to do next.',
    category: 'label',
    addedOn: '2026-11-24',
    body: [
      {
        p: `On an eye drop label, “worsens or persists” is one of the reasons to stop using the drop and ask a doctor. Quell’s stop-use section says to stop if the condition you’re using it for gets worse at any point, or is still there after 72 hours. Either one is enough. Note the date you start, keep a short log, and if dryness or irritation hasn’t settled in three days, see a doctor rather than trying more drops.`,
      },
      { h: 'Where the phrase sits on the label' },
      {
        p: `Quell’s Drug Facts panel has a section headed “Stop use and ask a doctor if.” It lists a few separate reasons, and the last one is about how things change over time. Read as one sentence, the whole list says: {stopUse}`,
      },
      {
        p: `The other reasons in that list, such as eye pain or changes in vision, don’t wait for any number of days. “Worsens or persists” is the one tied to a time frame. Our page on [why the label mentions 72 hours](/guides/why-the-label-mentions-72-hours) looks at the number itself; this guide is about how to apply it day to day.`,
      },
      { h: 'What “the condition” refers to' },
      {
        p: `The label’s Uses describe what the drop is for: {uses}. So “the condition” means the dryness or irritation you started using the drop for. It doesn’t mean some other problem; anything new or different is a reason to ask a doctor in its own right.`,
      },
      { h: 'What “worsens” looks like' },
      {
        p: `Getting worse can show up in more than one way. The label doesn’t list examples, but these are the kinds of changes people notice:`,
      },
      {
        list: [
          `Discomfort that is stronger than when you started.`,
          `Dryness or irritation that returns sooner after each drop than it did at first.`,
          `Symptoms that spread from one eye to both, or that appear at new times of day.`,
          `Anything new on top of the dryness you started with.`,
        ],
      },
      {
        p: `If you’re unsure whether something counts as worse, take the doubt as a reason to call your eye doctor or ask a pharmacist. You don’t need to wait out the 72 hours to do that.`,
      },
      { h: 'What “persists” means in practice' },
      {
        p: `Persists means the dryness or irritation is still there after 72 hours, three days, of using the drop as directed. The directions read: {directions}. Using the drop more or less often than that makes the three-day test harder to read, so follow them as written while you watch how your eyes respond.`,
      },
      { h: 'How to count the 72 hours' },
      {
        list: [
          `Start the count when you begin using the drop for the problem you have now.`,
          `Write the date and time in your phone or on a calendar.`,
          `Each day, jot a word or two about how your eyes feel morning and evening.`,
          `At the three-day mark, compare. If it hasn’t settled, stop and ask a doctor.`,
        ],
      },
      {
        p: `Our page on [keeping an eye drop log](/guides/keeping-an-eye-drop-log) shows a simple way to track it.`,
      },
      { h: 'Switching drops doesn’t reset the clock' },
      {
        p: `If your eyes haven’t settled after three days and you switch to a different product, you haven’t started over. The problem has still persisted. The label’s answer at that point is a doctor, not another bottle. The same goes for dryness that improves, then returns as soon as you stop: that pattern is worth showing an eye doctor, who can find the cause and decide what to do.`,
      },
      { h: 'What to tell the doctor' },
      {
        p: `When you stop and ask a doctor, a few details make the visit more useful. Bring the bottle or a photo of its Drug Facts panel, the date you started, how often you used it and what changed along the way. Mention what was going on around you too: a new job at a screen, a heated apartment, a trip, a windy week outdoors. Those notes give an eye doctor a clearer picture than “my eyes still feel dry.”`,
      },
      { h: 'Stop use vs. do not use' },
      {
        p: `The label has a separate “Do not use” line that applies before you ever put a drop in: {doNotUse}. “Worsens or persists” comes afterward, once you’re using it. Our guide to [do not use vs. stop use](/guides/do-not-use-vs-stop-use-on-a-drug-label) explains the difference between the two sections.`,
      },
      { h: 'Where to read the whole panel' },
      {
        p: `The complete Drug Facts panel, including the warnings ({warnings}), is on our [Drug Facts page](/drug-facts). For a list of symptoms that call for a doctor straight away, see [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'What does “worsens or persists” mean on eye drops?',
        a: `It means stop using the drop and ask a doctor if the dryness or irritation you’re using it for gets worse at any point, or is still there after 72 hours of use as directed.`,
      },
      {
        q: 'Do I have to wait 72 hours before seeing a doctor about my eyes?',
        a: `No. The 72 hours is the longest the label says to keep going without improvement. Eye pain, changes in vision or getting worse at any point are reasons to stop and ask a doctor right away.`,
      },
      {
        q: 'Does switching eye drops restart the 72 hours?',
        a: `No. If your eyes haven’t settled after three days, the problem has persisted whichever bottle you use. The label’s answer at that point is to stop and ask a doctor.`,
      },
    ],
  },
]
