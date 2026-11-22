import type { Guide } from '@/lib/guide-types'
export const DAILY_20261122_A: Guide[] = [
  /*
   * Sources fetched 2026-11-22 for dry-eye-relief-pompano-beach-fl:
   * - NOAA 1991-2020 monthly normals via ACIS (data.rcc-acis.org/StnData),
   *   SID PMP, POMPANO BEACH AIRPARK, FL, elev 15 ft
   *   (raw: .daily-job/acis1122/PMP.json and .daily-job/a/PMP-mint.json)
   *   Normal max F: Jan 76.3, Feb 78.1, Mar 80.2, Apr 83.6, May 86.3, Jun 88.9,
   *   Jul 90.5, Aug 90.7, Sep 89.0, Oct 86.2, Nov 81.3, Dec 78.3.
   *   Normal min F: Jan 60.4, Feb 62.4, Mar 64.9, Dec 63.7, Jul 77.5, Aug 77.7.
   *   Precip in: Jan 1.93 (driest), Feb 2.01, Mar 2.90, Apr 3.36, May 5.46,
   *   Jun 8.05 (wettest), Jul 5.26, Aug 6.30, Sep 7.58, Oct 6.65, Nov 3.67,
   *   Dec 2.45; months sum to 55.62 in. Snowfall missing, not used.
   * No relhum23 or wndspd23 row for this station: no humidity or wind numbers.
   * Neighbors (Fort Lauderdale, Pembroke Pines, Hialeah) use other stations
   * and angles (boats, port, power outages, time of day); this one is built on
   * the warm nights, the July rain dip, beachfront wind and condo living.
   */
  {
    slug: 'dry-eye-relief-pompano-beach-fl',
    title: 'Dry eye relief in Pompano Beach, Florida',
    description:
      'Pompano Beach’s coolest month still averages a 60°F low, so the AC rarely rests. NOAA’s airpark numbers and daily dry eye habits for the beach and the condo.',
    category: 'local',
    addedOn: '2026-11-22',
    body: [
      {
        p: `In Pompano Beach, dry-feeling eyes usually come from air conditioning and ocean wind rather than dry weather. NOAA’s normals for Pompano Beach Airpark show January, the coolest month, still averaging a 60.4°F low, so cooling runs most of the year. Keep vents off your face, wear wraparound sunglasses on the sand, blink fully at screens, and use a lubricating drop as its label directs. An eye doctor should check pain or vision changes.`,
      },
      { h: 'What the Pompano Beach Airpark record shows' },
      {
        p: `NOAA’s 1991–2020 climate normals for Pompano Beach Airpark, a station inside the city at about 15 feet above sea level, describe a place where the thermometer barely moves by mainland standards:`,
      },
      {
        list: [
          `Normal highs run from 76.3°F in January to 90.7°F in August, a spread of about 14 degrees across the whole year.`,
          `Normal lows never drop below 60°F in any month. January averages 60.4°F and December 63.7°F; July and August nights average about 77.5°F.`,
          `The months add up to about 55.62 inches of rain in a normal year.`,
          `January is the driest month at 1.93 inches, and June the wettest at 8.05.`,
        ],
      },
      {
        p: `Warm nights matter more than they sound. When the coolest stretch of the year still bottoms out in the 60s after dark, plenty of households never fully switch the air conditioning off, and air that has been cooled and dried by a compressor is what your eyes spend most of their hours in.`,
      },
      { h: 'Why do my eyes feel dry in such a humid place?' },
      {
        p: `Because the air touching your eyes is rarely the air outside. An air conditioner pulls moisture out as it cools, and the vent pushes that drier air across the room in a steady stream. The tear film has an oily outer layer that slows evaporation from the watery layer beneath it; moving, dry air speeds evaporation anyway. Sit in a draft for an afternoon of email and the result can feel gritty, even though the weather app says the humidity outside is high.`,
      },
      {
        list: [
          `Point floor and dashboard vents at your chest or feet, not your face.`,
          `Move a desk or recliner out of the path of a ceiling register.`,
          `Set a ceiling fan to a low speed over a bed, or turn it off at night if you wake with eyes that feel scratchy.`,
          `Take a short break from the screen every so often, and finish each blink rather than half-closing your eyes.`,
        ],
      },
      { h: 'The July dip in the rain' },
      {
        p: `Pompano’s wet season doesn’t climb steadily to one peak. In NOAA’s normals, June brings 8.05 inches, then July falls back to 5.26 before August (6.30), September (7.58) and October (6.65) rise again. That July lull is often when outdoor plans pile up: long beach days, yard work, outdoor dining. It pairs a normal high of about 90.5°F, a fraction below August’s peak, with fewer of the afternoon storms that send everyone inside, so your eyes get more sun, more glare and more wind in the same month. A brimmed hat, polarized wraparound lenses and a planned break in the shade make a long July afternoon easier.`,
      },
      { h: 'Ocean wind and glare on the sand' },
      {
        p: `A breeze off the Atlantic feels wonderful on the skin and does the opposite for the tear film. Wind thins it faster between blinks, and bright sand and water make most people squint, which tends to mean shallow, incomplete blinks. Early walks at sunrise and late-afternoon swims dodge the harshest light. Wraparound sunglasses block wind from the sides as well as glare. If your eyes sting after time in the surf, rinse your face with fresh water once you’re out, keep sunscreen from running into your eyes by applying it a little away from the lids, and give your eyes a few minutes of slow blinking in the shade.`,
      },
      { h: 'High-rise condo living' },
      {
        p: `Much of the city’s beachfront is condo towers, and high-rise units often have windows that stay shut and air handlers that cycle steadily. A few habits help in that kind of home:`,
      },
      {
        list: [
          `Change the air handler’s filter on the schedule the manufacturer gives; a clogged filter means more dust in a sealed space.`,
          `Use a small room humidifier in the bedroom if the air feels parched, and clean it as its instructions say.`,
          `Sit on the balcony when the breeze is light instead of in front of the supply vent.`,
          `Keep the eye drop bottle in a cupboard away from the window, where afternoon sun can heat a countertop.`,
        ],
      },
      { h: 'Winter season: windows open, calendars full' },
      {
        p: `December through March are the driest months in the airpark record, each under 3 inches of rain, with comfortable highs in the upper 70s and low 80s. Many residents finally open the windows and turn the AC off for stretches, which is a relief for most eyes. It’s also when visitors arrive and schedules fill with golf, festivals, boating and long drives to the airport, so screen time and car time go up together. Our guide to [screens and your tear film](/guides/screens-and-your-tear-film) explains why concentrated looking cuts your blink rate.`,
      },
      { h: 'Using Quell in Pompano Beach' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses line on its Drug Facts panel reads: {uses}. The directions are short: {directions}. One rule from the When using section is worth repeating at the beach, where sand gets everywhere: {tip}.`,
      },
      {
        p: `For storage, the label says: {storage}. A car parked at the beach in August will run well past the top of that range, so keep the bottle in a bag you carry, not the glove box. The full panel, including this caution, {warnings}, is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell delivered in Broward County' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Pompano Beach and every other US address, with guest checkout and no subscription. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You’ll get tracking by email, but no delivery date is promised, so order before you’re down to the last bottle. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. The [Pompano Beach page](/eye-drops/pompano-beach-fl) and the [Florida page](/eye-drops/state/florida) cover local ordering.`,
      },
      { h: 'When an eye doctor should take over' },
      {
        p: `A lubricating drop is for ordinary dryness. The label lists the signs that mean stopping: {stopUse} Pain, a sudden change in how you see, or dryness that keeps coming back are reasons to book an eye doctor, who can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists more.`,
      },
    ],
    faq: [
      {
        q: 'Does Pompano Beach have a dry season?',
        a: 'Yes, in rainfall terms. NOAA’s normals for Pompano Beach Airpark show December through March each under 3 inches, with January the driest month at 1.93 inches, while June brings 8.05.',
      },
      {
        q: 'How cold does it get at night in Pompano Beach?',
        a: 'Not very. The coolest month, January, averages a low of 60.4°F at Pompano Beach Airpark in NOAA’s 1991–2020 normals, and no month’s normal low falls below 60°F.',
      },
      {
        q: 'Why do my eyes feel dry in a beachfront condo?',
        a: 'Sealed windows and an air handler that cycles most of the year keep cooled, drier air moving through the unit. Aim vents away from your face, consider a bedroom humidifier, and blink fully at screens.',
      },
      {
        q: 'What is the rainiest month in Pompano Beach?',
        a: 'June, at 8.05 inches in NOAA’s 1991–2020 normals for Pompano Beach Airpark. September follows at 7.58, and July dips to 5.26 inches between them.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-22 for dry-eye-relief-clearwater-fl:
   * - NOAA 1991-2020 monthly normals via ACIS (data.rcc-acis.org/StnData),
   *   SID PIE, ST PETERSBURG CLEARWATER INTL AP, FL (no elevation returned,
   *   so none stated)
   *   (raw: .daily-job/acis1122/PIE.json and .daily-job/a/PIE-mint.json)
   *   Normal max F: Jan 70.6, Feb 73.3, Mar 77.0, Apr 81.8, May 87.1, Jun 89.6,
   *   Jul 90.3, Aug 90.6, Sep 88.9, Oct 84.2, Nov 77.2, Dec 72.8.
   *   Normal min F: Jan 52.5, Feb 55.1, Mar 59.2, Nov 60.9, Dec 56.0, Aug 76.3.
   *   Precip in: Jan 2.62, Feb 2.38, Mar 2.43, Apr 2.57, May 2.73, Jun 8.86,
   *   Jul 9.73 (wettest), Aug 8.83, Sep 6.40, Oct 2.49, Nov 1.64 (driest),
   *   Dec 2.94; months sum to 53.62 in; Jun-Sep sum 33.82 in; Oct-May each
   *   under 3 in. Snowfall missing, not used.
   * No relhum23 or wndspd23 row for this station: no humidity or wind numbers.
   * St. Petersburg's guide used Albert Whitted (SPG) and Tampa's used Tampa
   * International; this one uses PIE and is built on the eight drier months,
   * cool January nights and heat pumps, west-facing sunset glare and the
   * holidays in the driest month.
   */
  {
    slug: 'dry-eye-relief-clearwater-fl',
    title: 'Dry eye relief in Clearwater, Florida',
    description:
      'Clearwater’s airport logs eight months under 3 inches of rain and January lows near 52°F. NOAA’s numbers, Gulf sunset glare, and daily dry eye habits.',
    category: 'local',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Clearwater’s air is drier than its beaches suggest for much of the year. NOAA’s normals for St. Petersburg–Clearwater International Airport show every month from October through May under 3 inches of rain, with November the driest at 1.64. Cool January nights bring the heat on, summer brings steady air conditioning, and low sun over the Gulf adds glare. Blink fully, shield your eyes, and use a lubricating drop as labeled.`,
      },
      { h: 'Clearwater’s weather in NOAA’s numbers' },
      {
        p: `The nearest long-running NOAA station is the airport named for both Clearwater and St. Petersburg. Its 1991–2020 climate normals give this picture:`,
      },
      {
        list: [
          `About 53.62 inches of rain in a normal year, with roughly 33.8 of them falling from June through September.`,
          `July is the wettest month at 9.73 inches; November the driest at 1.64.`,
          `Normal highs run from 70.6°F in January to 90.6°F in August.`,
          `January nights average 52.5°F, and December 56.0°F.`,
        ],
      },
      {
        p: `That split defines daily life here: four soaked summer months, then eight months when no single month reaches 3 inches. The dry stretch is also the comfortable one, so it’s when people spend the most time outdoors.`,
      },
      { h: 'November to February: cool, bright and dry' },
      {
        p: `The driest month in the record arrives with the holidays. Thanksgiving falls on November 26 this year, squarely inside a month that averages 1.64 inches of rain. Clear days bring bright sun, and the first real cool fronts start to arrive. By January, normal lows reach about 52.5°F, cool enough that heat pumps switch over to heating on many nights. Heated air feels dry because warming it lowers its relative humidity, and a bedroom with a running heat pump can leave eyes feeling scratchy by morning.`,
      },
      {
        list: [
          `Set the thermostat a few degrees lower at night rather than letting the heat cycle hard.`,
          `Keep the bed out of the direct path of a wall unit or ceiling register.`,
          `A small humidifier in the bedroom can help in the coolest weeks; clean it as its instructions say.`,
          `Guests flying in for the holidays often arrive with eyes dried out by the cabin. Our guide to [flying home for Christmas with eye drops](/guides/flying-home-for-christmas-with-eye-drops) covers packing a bottle.`,
        ],
      },
      { h: 'Sunset glare over the Gulf' },
      {
        p: `Clearwater faces west across the Gulf of Mexico, and watching the sun go down is part of the routine for residents and visitors alike. The light that makes it beautiful also makes you squint: low sun reflected off water and pale sand comes in at eye level, where a hat brim does nothing. Squinting tends to cut blinks short, and a steady breeze off the water thins the tear film between them. Polarized wraparound sunglasses help with both. Driving west on a causeway or beach road at that hour is when glare is at its worst, so keep a pair in the car and clean the inside of the windshield, where a film scatters low light.`,
      },
      { h: 'March through May: warming, still dry' },
      {
        p: `Spring is the season the averages hide. March, April and May each bring under 3 inches of rain, while normal highs climb from 77.0°F to 87.1°F. Air conditioning comes back on in earnest, outdoor events crowd the calendar, and the dry ground and breezes kick up more dust and pollen than the beach postcards show. Rinse your face after long days outside, and wipe sunglasses with a clean cloth instead of the hem of your shirt, which scratches lenses and leaves grit near your eyes.`,
      },
      { h: 'June through September: the soggy months indoors' },
      {
        p: `Then the pattern flips. June brings 8.86 inches, July 9.73 and August 8.83, and afternoon storms push people indoors to offices, stores and homes that run cold. Moving from a muggy parking lot into a frigid lobby is hard on the tear film because indoor vents blow dry, cooled air directly at you. Aim the car’s vents at your chest, and in the office, point a desk fan away from your face. If you spend long hours on screens indoors, look up every so often and finish each blink. [Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) covers the other half of the year.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists the Uses as: {uses}. Directions: {directions}. The panel also carries a caution worth reading before your first drop: {warnings}.`,
      },
      {
        p: `Keep the bottle somewhere that stays in range. The label says: {storage}. A beach parking lot in July is well past that. The When using line, {tip}, matters on a sandy day too. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Pinellas County' },
      {
        p: `We ship to Clearwater, Dunedin, Largo and every other US address from Brentwood, Tennessee. Checkout works as a guest, shipping is {shipping}, and orders of {freeBottles} bottles or more ship free. Tracking comes by email, though delivery dates aren’t promised. If a bottle stays sealed, you can get a refund within {returnDays} days of delivery without mailing it back. See the [Clearwater page](/eye-drops/clearwater-fl) and the [Florida page](/eye-drops/state/florida) for more.`,
      },
      { h: 'Signs that call for an eye doctor' },
      {
        p: `Dryness from a heat pump or a breezy sunset should ease with simple changes. The label says when to stop: {stopUse} Ongoing discomfort, pain or blurred vision that doesn’t clear with blinking deserves an eye doctor’s visit, since only an exam can find the cause. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you decide.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Clearwater, Florida?',
        a: 'November, at 1.64 inches in NOAA’s 1991–2020 normals for St. Petersburg–Clearwater International Airport. Every month from October through May averages under 3 inches there.',
      },
      {
        q: 'How cold does Clearwater get in January?',
        a: 'Normal January lows at St. Petersburg–Clearwater International Airport are about 52.5°F, with normal highs near 70.6°F, according to NOAA’s 1991–2020 normals.',
      },
      {
        q: 'Why do my eyes hurt watching the sunset at the beach?',
        a: 'Low sun reflecting off water and sand reaches your eyes at eye level, which makes you squint and blink less completely, and a sea breeze adds to the drying. Polarized wraparound sunglasses help; persistent pain should go to an eye doctor.',
      },
      {
        q: 'Does a heat pump dry out your eyes?',
        a: 'Heated air holds the same moisture but feels drier, so a heat pump running on cool nights can leave eyes feeling scratchy. Lower the night setting, keep vents off the bed, and consider a bedroom humidifier.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-22 for dry-eye-relief-cape-coral-fl:
   * - NOAA 1991-2020 monthly normals via ACIS (data.rcc-acis.org/StnData),
   *   SID RSW, FORT MYERS SW FLORIDA REGIONAL AP, FL, elev 27 ft
   *   (raw: .daily-job/acis1122/RSW.json and .daily-job/a/RSW-mint.json)
   *   Normal max F: Jan 74.7, Feb 77.6, Mar 80.2, Apr 84.6, May 88.3, Jun 90.3,
   *   Jul 90.6, Aug 91.4, Sep 89.9, Oct 86.1, Nov 81.0, Dec 76.8.
   *   Normal min F: Jan 54.4, Feb 55.9, Mar 58.8, Dec 57.6, Aug 75.7.
   *   Precip in: Jan 2.36, Feb 1.49 (driest), Mar 1.92, Apr 1.87, May 3.02,
   *   Jun 10.33 (wettest), Jul 8.56, Aug 8.75, Sep 8.49, Oct 3.11, Nov 1.89,
   *   Dec 1.60; months sum to 53.39 in. Snowfall missing, not used.
   * Station is outside Cape Coral (the regional airport in Fort Myers); named
   * that way in the prose. No relhum23 or wndspd23 row: no humidity or wind.
   * Fort Myers' guide used Page Field (spring training, causeways, snowbirds);
   * this one uses RSW and is built as a month-by-month calendar around the
   * May-to-June jump, hot cars and lanai and yard routines.
   */
  {
    slug: 'dry-eye-relief-cape-coral-fl',
    title: 'Dry eye relief in Cape Coral, Florida',
    description:
      'Rain at the Southwest Florida airport jumps from 3.02 inches in May to 10.33 in June. A Cape Coral calendar for dry eyes, from NOAA’s 1991–2020 normals.',
    category: 'local',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Cape Coral swings between two kinds of dry-eye trouble. From November through April, NOAA’s normals for the nearby Southwest Florida airport show under 2.4 inches of rain a month, with breezy, bright days outdoors. From June on, rain more than triples and life moves indoors under air conditioning. Match your habits to the season, keep vents and wind off your eyes, and use a lubricating drop exactly as its label says.`,
      },
      { h: 'Where the numbers come from' },
      {
        p: `Cape Coral doesn’t have its own long-running NOAA station, so this guide uses NOAA’s 1991–2020 climate normals for the Southwest Florida regional airport on the Fort Myers side, at about 27 feet above sea level. It sits close enough to share the same seasons:`,
      },
      {
        list: [
          `About 53.39 inches of rain in a normal year.`,
          `February is the driest month at 1.49 inches; June the wettest at 10.33.`,
          `November through April each average between 1.49 and 2.36 inches, a total of about 11.1 inches for those six months.`,
          `Normal highs range from 74.7°F in January to 91.4°F in August; January lows average 54.4°F.`,
        ],
      },
      { h: 'A Cape Coral year for your eyes, month by month' },
      {
        p: `Rather than one routine, think in stretches. Each brings its own reason your eyes might feel dry, and its own fix.`,
      },
      {
        list: [
          `November and December: rain drops to 1.89 and then 1.60 inches, and the first cool mornings arrive. Windows open, and the outdoors gets busy again with fishing, boating and golf. Wind on the water is the main thing to plan for.`,
          `January and February: the coolest nights, about 54 to 56°F on average, so some homes run the heat for a few hours. February is the driest month of the year.`,
          `March and April: still under 2 inches of rain each, but highs climb into the 80s. Air conditioning returns while the ground stays dry and dusty.`,
          `May: the last dry-ish month at 3.02 inches, with normal highs of 88.3°F. Car interiors start getting dangerously hot.`,
          `June through September: 10.33, 8.56, 8.75 and 8.49 inches. Afternoon storms, sticky air outside, and cold, dry air inside.`,
          `October: a transition month at 3.11 inches, with highs still in the mid-80s.`,
        ],
      },
      { h: 'The jump from May to June' },
      {
        p: `No change in the local calendar is sharper than the one at the end of May. Normal rainfall goes from 3.02 inches to 10.33 in a single month. What that means for your eyes is less about the rain and more about where you spend your time. Outdoor errands get squeezed into the mornings, and the rest of the day is spent in cooled rooms and cars with vents running hard. If your eyes felt fine all spring and then start to feel gritty in June, look at the air blowing around you before anything else. Angle the car vents toward your chest, move your desk chair out of the path of the ceiling register, and lower the fan speed on the air handler if your system allows it.`,
      },
      { h: 'Hot cars and where to keep the bottle' },
      {
        p: `August averages the highest normal high in the airport record at 91.4°F, and a closed car in a sunny driveway gets far hotter than the air. Quell’s label gives a storage range, {storage}, and a glove box in a Cape Coral summer is not inside it. Keep the bottle in a bag or pocket that comes inside with you, and don’t store spares in the garage, which can trap heat for hours. Our guide on [eye drops in a hot car](/guides/eye-drops-in-a-hot-car) goes into more detail.`,
      },
      { h: 'Lanai mornings and yard work' },
      {
        p: `Screened lanais and pool cages are where many residents start their day, and the screen does cut some of the wind. Bright light reflecting off a pool is another matter, so sunglasses help even in the shade of the enclosure. Mowing, trimming and leaf blowing throw grass bits and dust into the air, especially in the dry months. Wear wraparound safety glasses or sunglasses for yard work, and rinse your face once you’re done. If a speck lands in your eye, blink and let tears wash it out rather than rubbing.`,
      },
      { h: 'Screens on rainy afternoons' },
      {
        p: `Summer storms turn afternoons into indoor time, which for many people means more screen time. When you concentrate on a phone or monitor, you tend to blink less often and less completely, and the tear film has longer to evaporate between blinks. Look up and across the room every so often, and finish each blink. [Screens and your tear film](/guides/screens-and-your-tear-film) explains the habit in more detail.`,
      },
      { h: 'Quell’s label, in brief' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel states its Uses: {uses}. The directions read: {directions}. One line in the When using section keeps the dropper clean: {tip}. If you have an egg or bird allergy, read the warning first: {warnings}. The [Drug Facts page](/drug-facts) shows the whole panel.`,
      },
      { h: 'Shipping to Cape Coral' },
      {
        p: `Orders go out from Brentwood, Tennessee, to Cape Coral, Pine Island and the rest of Lee County, and to every other US address. There’s no account required and no subscription. Shipping costs {shipping}, and {freeBottles} or more bottles ship free. You’ll get tracking by email, but no arrival date is promised, so in summer bring the box inside soon after it’s delivered. Unopened bottles are refundable within {returnDays} days of delivery, and you keep them. The [Cape Coral page](/eye-drops/cape-coral-fl) and the [Florida page](/eye-drops/state/florida) have more.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Seasonal dryness should respond to changes in your surroundings. The label lists the reasons to stop: {stopUse} Eye pain, vision changes, or dryness that comes back week after week are worth an appointment with an eye doctor, who can work out what’s behind it. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has more.`,
      },
    ],
    faq: [
      {
        q: 'When is the rainy season in Cape Coral?',
        a: 'June through September. NOAA’s 1991–2020 normals for the nearby Southwest Florida airport show 10.33 inches in June and more than 8 inches in each of July, August and September.',
      },
      {
        q: 'What is the driest month in Cape Coral?',
        a: 'February, at 1.49 inches in NOAA’s normals for the Southwest Florida airport near Cape Coral. December (1.60) and April (1.87) are close behind.',
      },
      {
        q: 'Why do my eyes feel dry in June in Florida?',
        a: 'Summer rain and heat push most of the day indoors, where air conditioning blows cooled, drier air at you for hours. Aim vents away from your face and take screen breaks to blink fully.',
      },
      {
        q: 'Should I wear glasses when mowing the lawn?',
        a: 'Wraparound safety glasses or sunglasses keep grass bits, dust and wind out of your eyes while mowing or trimming. Rinse your face afterward, and see an eye doctor if something stays stuck or hurts.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-22 for dry-eye-relief-sugar-land-tx:
   * - NOAA 1991-2020 monthly normals via ACIS (data.rcc-acis.org/StnData),
   *   SID SGR, HOUSTON SUGARLAND MEM, TX, elev 77 ft
   *   (raw: .daily-job/acis1122/SGR.json and .daily-job/a/SGR-mint.json)
   *   Normal max F: Jan 64.3, Feb 68.1, Mar 74.1, Apr 80.1, May 87.1, Jun 92.3,
   *   Jul 95.0, Aug 94.2, Sep 89.7, Oct 83.3, Nov 73.6, Dec 66.5.
   *   Normal min F: Jan 45.3, Feb 49.5, Mar 55.3, Apr 60.4, Oct 62.0,
   *   Nov 52.7, Dec 46.4, Jul and Aug 75.7.
   *   Precip in: Jan 3.63, Feb 2.83 (driest), Mar 3.49, Apr 4.26, May 5.24,
   *   Jun 4.22, Jul 4.16, Aug 5.27 (wettest), Sep 4.42, Oct 4.65, Nov 3.78,
   *   Dec 3.76; months sum to 49.71 in. Snowfall missing, not used.
   * No relhum23 or wndspd23 row for this station: no humidity or wind numbers.
   * Houston's guide covered the Medical Center and energy corridor; Pearland's
   * the drive into Houston, ballfields and hurricane season. This one is built
   * room by room around a house that heats in winter and cools in summer, and
   * the even rainfall with no dry season.
   */
  {
    slug: 'dry-eye-relief-sugar-land-tx',
    title: 'Dry eye relief in Sugar Land, Texas',
    description:
      'Sugar Land gets rain every month, yet homes heat in January and cool through a 95°F July. NOAA’s numbers and a room-by-room plan for dry-feeling eyes.',
    category: 'local',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Sugar Land has no real dry season: NOAA’s normals for Sugar Land Regional Airport show every month getting between 2.83 and 5.27 inches of rain. Dry-feeling eyes here come from indoor air instead. Furnaces run on January nights near 45°F, and air conditioning runs hard through a July that averages 95°F highs. Keep vents off your face in every room, blink fully at screens, and use a lubricating drop as directed.`,
      },
      { h: 'Sugar Land’s climate, by the numbers' },
      {
        p: `The source here is NOAA’s 1991–2020 climate normals for Sugar Land Regional Airport, listed by NOAA as Houston Sugarland Memorial, about 77 feet above sea level:`,
      },
      {
        list: [
          `About 49.71 inches of rain in a normal year.`,
          `The wettest month is August at 5.27 inches, almost tied with May at 5.24. The driest is February at 2.83.`,
          `Normal highs run from 64.3°F in January to 95.0°F in July.`,
          `Normal lows fall to 45.3°F in January and 46.4°F in December.`,
        ],
      },
      {
        p: `Spread that evenly, rainfall never gives the air a long dry spell. What changes across the year is the temperature, and with it the machine running in your house.`,
      },
      { h: 'Why do my eyes feel dry when it rains so much here?' },
      {
        p: `Because most of your day happens indoors, and indoor air is conditioned. Air conditioning removes moisture as it cools. Heating keeps the moisture the same but warms the air, which lowers its relative humidity. Either way, a vent blowing across your face speeds evaporation from the tear film, whose outer oil layer normally slows that loss. Sugar Land homes often do both in the same season: a front can bring a chilly morning that needs the heat and a warm afternoon that needs cooling, especially in November, March and April.`,
      },
      { h: 'The bedroom' },
      {
        p: `Eyes that feel scratchy first thing in the morning often point to the bedroom’s airflow. A few changes are worth trying:`,
      },
      {
        list: [
          `Look up when the system runs. If a ceiling register sits over the pillow, move the bed or close that vent partway.`,
          `Turn a ceiling fan down or off while you sleep, especially on winter nights when the heat is running.`,
          `A cool-mist humidifier can help in the furnace months; clean it as its instructions say.`,
          `Keep the eye drop bottle on a nightstand away from a window, where it stays at room temperature.`,
        ],
      },
      { h: 'The home office' },
      {
        p: `Plenty of Sugar Land residents work from home or bring work home from offices around the Houston area. Long stretches at a monitor slow your blink rate, and a desk near a supply vent doubles the effect. Put the monitor slightly below eye level so your eyelids cover more of each eye, take a short break every so often to look across the room, and finish each blink. [Dry eyes for remote workers](/guides/dry-eyes-for-remote-workers) has more ideas for a home desk.`,
      },
      { h: 'The car' },
      {
        p: `Summer afternoons average 92 to 95°F from June through August, and the car becomes a small, cold box with vents a foot from your face. In winter the heater does the same thing in reverse. Aim the vents at your chest or the windshield, and wear sunglasses against low sun in the late afternoon. Never leave your eye drops in the car: Quell’s label says {storage}, and a parked car in a Texas summer climbs well past that range.`,
      },
      { h: 'The yard and the ballfield' },
      {
        p: `With rain in every month, grass grows for much of the year, and so does yard work. Mowers and leaf blowers throw dust and clippings around, so wraparound glasses are worth wearing for yard chores. In spring and fall, when highs sit in the 70s and 80s, outdoor time goes up across the board, from weekend games to long walks. Bright sun, wind and dust all dry the eyes faster. A hat with a brim and sunglasses help, and so does stepping into shade for a few slow blinks.`,
      },
      { h: 'How Quell fits in' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. According to its Drug Facts panel, its Uses are: {uses}. The directions say: {directions}. Its warning reads: {warnings}. To keep the bottle clean, follow this line: {tip}. You can read the full panel on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering to Fort Bend County' },
      {
        p: `Quell ships to Sugar Land, Missouri City, Richmond and anywhere else in the United States from Brentwood, Tennessee. No account is needed. Shipping is {shipping}, and an order of {freeBottles} or more bottles ships free. You’ll get tracking by email, though there’s no promised delivery date. If you decide you don’t need a bottle and it’s still sealed, ask for a refund within {returnDays} days of delivery; you don’t send it back. The [Sugar Land page](/eye-drops/sugar-land-tx) and the [Texas page](/eye-drops/state/texas) have local details.`,
      },
      { h: 'When an eye doctor is the right call' },
      {
        p: `If adjusting vents and taking screen breaks doesn’t help, or if your eyes hurt, see an eye doctor. The label is clear on when to stop: {stopUse} An exam is the only way to find what’s behind ongoing symptoms. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for a fuller list.`,
      },
    ],
    faq: [
      {
        q: 'Does Sugar Land have a dry season?',
        a: 'Not really. NOAA’s 1991–2020 normals for Sugar Land Regional Airport show every month averaging between 2.83 inches (February) and 5.27 inches (August) of rain.',
      },
      {
        q: 'How hot does Sugar Land get in the summer?',
        a: 'July is the hottest month, with a normal high of 95.0°F at Sugar Land Regional Airport, followed by August at 94.2°F and June at 92.3°F, according to NOAA’s normals.',
      },
      {
        q: 'Why are my eyes dry in the morning in winter?',
        a: 'Furnace air warms without adding moisture, so a bedroom vent or ceiling fan can dry the eyes during sleep. Redirect vents, slow the fan, and consider a cool-mist humidifier.',
      },
      {
        q: 'Can I use the AC and still keep my eyes from drying out?',
        a: 'Yes. Point vents at your chest instead of your face, keep desks and beds out of a register’s path, and take regular screen breaks to blink fully.',
      },
    ],
  },
  {
    slug: 'why-was-my-card-declined-buying-eye-drops',
    title: 'Why was my card declined buying eye drops?',
    description:
      'Most card declines come from your bank: a billing address mismatch, a wrong security code, a fraud hold or a limit. What to check and how to try again.',
    category: 'ordering',
    addedOn: '2026-11-22',
    body: [
      {
        p: `A declined card on quelldrop.com almost always comes from the card’s bank or the payment processor’s checks, not from anything wrong with your order. The usual causes are a billing address or ZIP that doesn’t match the bank’s records, a mistyped security code, an expired card, a fraud hold on a merchant you haven’t used before, or a spending limit. Check those details, call your bank if needed, and try again.`,
      },
      { h: 'Where the decline happens' },
      {
        p: `Checkout has two parts. On our site, you enter your name, shipping address, email and phone number on the [cart](/cart) page. When you press the button to continue, you go to a secure payment page run by Authorize.net, our payment processor. That page asks for your card number, expiration date, security code and billing address, and both the billing address and the security code are required. The decision to approve or decline is made there, between the processor and your card’s bank. [Why checkout sends you to a secure payment page](/guides/why-checkout-uses-a-secure-payment-page) explains that setup.`,
      },
      { h: 'Common reasons a card is declined online' },
      {
        list: [
          `Billing address mismatch. The street address or ZIP you type must match what your bank has on file for the card. A recent move, an apartment number in the wrong field, or a work address instead of your home address can all trip this check.`,
          `Wrong security code. The three-digit code on the back of most cards, or four digits on the front of some, is checked against the bank’s records.`,
          `Expired card or a typo in the number. A replacement card with a new expiration date is easy to miss if autofill offers the old one.`,
          `A fraud hold. Banks watch for unusual activity, and a first purchase from a merchant in another state can look unusual. Our orders are charged by a company in Brentwood, Tennessee.`,
          `A limit. Available credit, a daily spending cap or a low debit balance can stop a payment even when the card is otherwise fine.`,
          `A repeat attempt. Pressing Pay several times in a row with the same details can be blocked as a duplicate, so wait a moment between tries.`,
          `Card restrictions. Some HSA and FSA cards only work with certain kinds of merchants, which is a rule set by the plan or card program, not by us.`,
        ],
      },
      { h: 'What to do, step by step' },
      {
        list: [
          `Read the message on the payment page. It often points at the address or the code.`,
          `Check the billing address against your card statement, including the ZIP code and any unit number.`,
          `Re-enter the security code carefully, and confirm the expiration date matches the card in your hand.`,
          `If everything matches, call the number on the back of your card. Ask whether the bank blocked the charge and whether it can approve it. Many banks also send a text or app alert you can answer.`,
          `Try again after the bank clears it, or use a different card.`,
          `If you still can’t pay, call us at {phone}, {hours}, and we’ll help you look at the order.`,
        ],
      },
      { h: 'What happens to your order after a decline' },
      {
        p: `An order is created when you leave our site for the payment page, but it isn’t paid until a card goes through. Until then it sits as awaiting payment, and nothing is prepared or shipped. If you leave without paying, you may get an email reminder about the unfinished order, with no more than two in all. You don’t need to start from scratch: if you checked out as a guest, the site remembers the details you typed in this browser, so your address is filled in when you come back. [What your order status means](/guides/what-your-order-status-means) explains each status.`,
      },
      { h: 'Was I charged for a declined payment?' },
      {
        p: `A declined payment isn’t a charge. Some banks briefly show a pending line for an attempt that didn’t complete, and it drops off on the bank’s own schedule. If you see two pending amounts after trying twice, your bank can tell you which one, if any, is real. For when an approved card is actually charged, see [When is my card charged?](/guides/when-is-my-card-charged).`,
      },
      { h: 'What we can see, and what we can’t' },
      {
        p: `Your card number is entered on the processor’s page, not stored by us. When an attempt fails, the processor tells us only that the payment didn’t go through and gives a short reason, such as an address mismatch or a decline by the card’s bank. We can’t override a bank’s decision, and we can’t see why your bank decided what it did. Only the bank can lift its own hold.`,
      },
      { h: 'Avoiding the problem next time' },
      {
        p: `Keep your billing address current with your bank after a move, and update any autofill entries in your browser that still carry an old card. If your bank lets you, approve the first charge from a new merchant in its app. The [checkout error messages guide](/guides/checkout-error-messages-explained) covers problems on the shipping form itself, which are a different thing from a card decline.`,
      },
    ],
    faq: [
      {
        q: 'Why does my card keep getting declined online but works in stores?',
        a: 'Online payments check the billing address and security code, which a store swipe doesn’t. A mismatch in either, or a bank’s fraud check on an out-of-state merchant, is the usual cause.',
      },
      {
        q: 'Does a declined card mean my eye drop order went through?',
        a: 'No. The order stays awaiting payment and nothing ships until a card is approved. You can try again with corrected details or a different card.',
      },
      {
        q: 'Why was my card declined when I have money in the account?',
        a: 'Balance is only one check. A billing address that doesn’t match, a wrong security code, a daily limit or a bank fraud hold can each stop a payment. Your bank can tell you which.',
      },
      {
        q: 'Can Quell approve a payment my bank declined?',
        a: 'No. The decision belongs to your card’s bank, and only it can lift a hold. Once it does, you can try again, or call us at {phone} if you need help with the order.',
      },
    ],
  },
  {
    slug: 'buying-eye-drops-with-a-company-card',
    title: 'Can I buy eye drops with a company card?',
    description:
      'The payment page takes a company card like any other, if the billing address matches the card’s records. Whether eye drops are allowed is your employer’s call.',
    category: 'ordering',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Usually, yes. The secure payment page accepts a company credit card the same way it accepts a personal one, as long as you enter the billing address the card issuer has on file, which for a corporate card is often the company’s address rather than yours. Whether a bottle of eye drops is an allowed purchase is a question for your employer’s expense policy, so check that first and keep the confirmation email as your receipt.`,
      },
      { h: 'Check the expense policy before you buy' },
      {
        p: `Company cards come with rules, and they vary a lot. Some employers allow small health or comfort items for the office, such as a first aid kit or supplies for a shared break room. Others restrict cards to travel, client meals or approved vendors, and rule out anything personal even when it’s small. Quell is an over-the-counter eye drop, which some policies group with personal care items. If the policy doesn’t say, ask your manager or whoever runs the card program before you check out. It’s far easier than explaining a charge afterward.`,
      },
      { h: 'Which billing address to enter' },
      {
        p: `The billing address goes on the payment page run by Authorize.net, our payment processor, and it is required. It has to match what the card’s issuer has on file. With a personal card that’s your home address. With a corporate card it might be:`,
      },
      {
        list: [
          `the company’s headquarters or accounting office,`,
          `a regional office address assigned to your team,`,
          `your home address, if the card is issued to you individually and billed to you, or`,
          `something else your card administrator set up.`,
        ],
      },
      {
        p: `If you don’t know, look at a recent statement or ask the administrator. A mismatch is one of the most common reasons a payment is declined. [Why was my card declined buying eye drops?](/guides/why-was-my-card-declined-buying-eye-drops) covers the other reasons.`,
      },
      { h: 'Shipping to the office or to home' },
      {
        p: `The shipping address is separate from the billing address. You type it on our cart page before you go to payment, so a company card billed to headquarters can still send the box to your home or to your own desk. If you ship to a workplace, put the company name in the address and make sure someone at the front desk knows it’s coming. [Shipping eye drops to your work address](/guides/shipping-eye-drops-to-your-work-address) has more on that.`,
      },
      { h: 'Getting a receipt for an expense report' },
      {
        p: `The confirmation email that arrives after payment is the receipt. It names the seller, {company}, along with the order date and amounts. Most expense systems accept a forwarded email or a saved PDF. If you lose it, the order can still be found on the [track your order](/orders) page with the order number and the email you used at checkout. Put your work email on the order if receipts need to land in a work inbox, since every email about the order goes to that address.`,
      },
      { h: 'Buying for a team or an office kit' },
      {
        p: `If you’re stocking a supply cabinet or buying for several people, a few points help:`,
      },
      {
        list: [
          `Shipping is {shipping} per order, and an order of {freeBottles} or more bottles ships free, so one larger order costs less to ship than several small ones.`,
          `Each bottle carries its own Drug Facts panel. Anyone who uses it should read it, especially the warning: {warnings}.`,
          `Keep the bottles where the temperature stays in range. The label says: {storage}. A car trunk or a sunny window ledge isn’t a good spot.`,
        ],
      },
      {
        p: `[Buying eye drops for your employees](/guides/buying-eye-drops-for-your-employees) goes into more detail for managers and small business owners.`,
      },
      { h: 'A company card is not an HSA or FSA card' },
      {
        p: `People sometimes mix these up. A health savings account or flexible spending account is a benefit account tied to you, with its own rules about what it can pay for, and its card may only work at certain kinds of merchants. A corporate card is the company’s money, governed by the company’s policy. If you mean to pay with your benefit account, see [HSA, FSA and eye drops](/guides/hsa-fsa-and-eye-drops) instead.`,
      },
      { h: 'Paid with the wrong card?' },
      {
        p: `It happens, especially when a browser autofills a saved card. We can’t move a completed charge from one card to another. If the bottles are still sealed, the product price can be refunded within {returnDays} days of delivery, and you don’t send them back, after which you could reorder with the right card. Opened bottles can’t be refunded. Call {phone}, {hours}, with your order number and we’ll sort out what’s possible.`,
      },
    ],
    faq: [
      {
        q: 'Can I use my corporate card to buy eye drops online?',
        a: 'The payment page accepts a corporate card like any other credit card, but your employer’s expense policy decides whether eye drops are an allowed purchase. Check the policy first.',
      },
      {
        q: 'What billing address do I use for a company credit card?',
        a: 'The address the card issuer has on file, which for many corporate cards is the company’s office rather than your home. A recent statement or your card administrator can tell you.',
      },
      {
        q: 'Can eye drops go on an expense report?',
        a: 'Only if your employer’s policy allows it. If it does, forward or save the order confirmation email from Quell, which names the seller and the amounts.',
      },
      {
        q: 'I paid for eye drops with my work card by mistake. What now?',
        a: 'A completed charge can’t be switched to another card. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back, so call {phone} with your order number.',
      },
    ],
  },
  {
    slug: 'will-a-winter-storm-delay-my-eye-drop-order',
    title: 'Will a winter storm delay my eye drop order?',
    description:
      'Winter weather can slow any package, and Quell promises no delivery date. How to order ahead, follow tracking, and check a bottle that sat in the cold.',
    category: 'shipping',
    addedOn: '2026-11-22',
    body: [
      {
        p: `It can. Once your package leaves Brentwood, Tennessee, it travels on the carrier’s schedule, and snow or ice anywhere along the route can slow it down. Quell doesn’t promise a delivery date, and our terms call delivery estimates just that: estimates. Order well before you run low, follow the tracking link in your shipping email, and bring the box inside soon after it arrives so the bottles stay within the label’s storage range.`,
      },
      { h: 'What the terms say about delays' },
      {
        p: `Section 6 of our [terms](/terms) is short. Delivery estimates are estimates. We aren’t responsible for delays caused by the carrier or by an incorrect address. Risk of loss passes to you when the package is delivered to the address you gave. In plain terms, a storm that closes roads or grounds trucks will slow your order the same way it slows everyone else’s mail, and there’s no shipping upgrade on our site that gets around it.`,
      },
      { h: 'How to stay ahead of winter weather' },
      {
        list: [
          `Reorder when you open your second-to-last bottle, not your last. That leaves room for a slow week.`,
          `Watch the forecast for both ends of the trip. A storm at home can delay the last leg even when the rest of the route is clear.`,
          `If a big storm is coming, order a few days earlier than you normally would.`,
          `Order {freeBottles} or more bottles at once and shipping is free, which also means fewer packages out in winter weather. Unopened bottles you end up not needing can be refunded within {returnDays} days of delivery.`,
          `If you got a “Running low?” email from us, that’s the one reminder you’ll get for that order, so in winter, act on it promptly.`,
        ],
      },
      { h: 'Following the package' },
      {
        p: `The shipping email arrives when your order leaves, with a tracking number and a link to the carrier’s page. That page shows weather delays and updated estimates more quickly than we can. You can also look the order up on our [track your order](/orders) page with your order number and checkout email. If tracking hasn’t moved for several days after a storm, give it a little time, since carriers often catch up once roads reopen. [How to track your Quell order](/guides/how-to-track-your-order) walks through both options.`,
      },
      { h: 'Will eye drops freeze in the mail?' },
      {
        p: `Nobody can say for certain what temperature a package sees in a truck or on a porch. What we can tell you is what the label asks for: {storage}. A box that sits in freezing weather for hours may drop below that range. Liquids can freeze, so a long, cold wait is worth taking seriously.`,
      },
      {
        p: `If a box sat outside in the cold, here’s what to do:`,
      },
      {
        list: [
          `Bring it in and let it warm up to room temperature on its own. Don’t put the bottle near a heater, in hot water or in a microwave.`,
          `Check that each tamper seal is intact and the bottle isn’t cracked.`,
          `Look at the liquid. {appearance} The Do not use line on the label reads: {doNotUse}.`,
          `If anything looks different from what the label describes, don’t use it, and call us at {phone}.`,
        ],
      },
      { h: 'What we replace, and what to ask about' },
      {
        p: `Our policy covers orders that arrive damaged, incorrect or with a broken tamper seal: report it within {returnDays} days and the order is replaced at no charge. Cold weather on its own isn’t on that list, so if you’re worried about a bottle that sat in the snow but looks normal and is sealed, call {phone}, {hours}, describe what happened, and we’ll talk it through. Don’t guess with a bottle that looks wrong. See [what to do if your order arrives damaged](/guides/damaged-order) for the replacement steps.`,
      },
      { h: 'Delivered in the middle of a storm' },
      {
        p: `Packages sometimes get dropped at the door while snow is still falling. If you’ll be out, ask a neighbor to grab it, or ship to an address where someone is around during the day, such as a workplace with a front desk. A box half buried in a drift can get wet as well as cold, so open it indoors and let any damp packaging dry away from the bottles.`,
      },
      { h: 'If you run out while you wait' },
      {
        p: `The label’s directions stay the same whatever the weather: {directions}. If you run out before the new bottles arrive, ease the strain on your eyes in other ways, such as keeping heating vents off your face, taking screen breaks to blink fully, and running a humidifier. [Eye drops in a winter storm kit](/guides/eye-drops-for-a-winter-storm-kit) explains how to keep a spare on hand next season.`,
      },
    ],
    faq: [
      {
        q: 'Do winter storms delay packages?',
        a: 'Often. Snow and ice can close roads and slow carriers anywhere along a package’s route. Quell doesn’t promise delivery dates, so check the carrier’s tracking page for updated estimates.',
      },
      {
        q: 'Can eye drops freeze during shipping?',
        a: 'A package left in freezing weather for long enough can fall below the label’s storage range. Quell’s label says: {storage}. Let the bottle warm on its own, check the seal and appearance, and call {phone} if anything looks off.',
      },
      {
        q: 'What should I do if my eye drop package sat in the snow?',
        a: 'Bring it inside, let it reach room temperature without added heat, and check the tamper seal and the liquid. If a seal is broken or the bottle is damaged, report it within {returnDays} days for a replacement.',
      },
      {
        q: 'How early should I order eye drops in winter?',
        a: 'Reorder when you start your second-to-last bottle, and a few days earlier still if a storm is forecast. That leaves a cushion if weather slows the carrier.',
      },
    ],
  },
  {
    slug: 'eye-drop-package-got-wet-in-the-rain',
    title: 'Eye drop package got wet in the rain?',
    description:
      'A soaked box usually leaves the sealed bottles fine, but check each seal, the bottle and the carton first. What counts as damage, and who to call.',
    category: 'shipping',
    addedOn: '2026-11-22',
    body: [
      {
        p: `A rain-soaked box usually doesn’t mean the eye drops inside are ruined, because each bottle is sealed. Still, check before you use one: bring the package in, open it on a dry surface, and look at every tamper seal, the bottle and the carton. If a seal is broken or a bottle is cracked, the order is replaced at no charge when you report it within {returnDays} days of delivery. Call {phone} with your order number.`,
      },
      { h: 'First, get it inside and opened' },
      {
        p: `Wet cardboard weakens quickly and can tear when you lift it, so carry the box from underneath. Open it on a counter or table with a towel under it rather than letting it sit damp in the entryway. Take the cartons out of any soggy packing material and set them somewhere to air out. A damp outer box isn’t a problem in itself; what matters is the condition of what’s inside it.`,
      },
      { h: 'What to check, in order' },
      {
        list: [
          `The number of cartons. Compare it with your confirmation email.`,
          `Each tamper seal. It should be intact, with no tears, lifted edges or gaps.`,
          `Each bottle. Look for cracks or a loose cap, and see whether the bottle feels sticky or the carton is wet from the inside, which would suggest a leak rather than rain.`,
          `The liquid. {milky}. If the color or look of it seems different from that, don’t use it. The label’s Do not use line reads: {doNotUse}.`,
          `The printing. The Drug Facts panel on the carton should still be readable.`,
        ],
      },
      {
        p: `Our checklist for [what to check when your order arrives](/guides/what-to-check-when-your-order-arrives) covers a normal delivery; a wet one deserves the same steps, done a bit more carefully.`,
      },
      { h: 'Why the tamper seal matters most' },
      {
        p: `The seal is how you know nobody and nothing has gotten into the bottle since it was filled. If it’s whole, rain on the outside of the carton hasn’t changed what’s in the bottle. If it’s broken, torn or missing, don’t open the bottle or use it, even if the liquid looks fine. A broken tamper seal is one of the three situations our policy replaces at no charge, along with damaged and incorrect orders. [What if the tamper seal is broken?](/guides/broken-tamper-seal) explains the steps.`,
      },
      { h: 'If the carton is soggy or the print is smeared' },
      {
        p: `A wet carton can wrinkle, stain or smear, and that can make the small print hard to read. The bottle itself is what you’ll use, but the carton holds the full Drug Facts panel for that bottle. If the panel becomes hard to read, the same panel is on our [Drug Facts page](/drug-facts), where you can zoom in or print it. If the lot number or expiration date has smeared, look for them elsewhere on the package, and call us if you can’t find a readable one, since you’ll want both before using a bottle.`,
      },
      { h: 'Drying the bottle before you open it' },
      {
        p: `Wipe the outside of the bottle and cap with a clean, dry cloth before you break the seal. That way, drips from a wet carton don’t run toward the tip when you first open it. The label is specific about the tip: {tip}. Wash and dry your hands first, too.`,
      },
      { h: 'Rain plus heat' },
      {
        p: `In summer, a box can sit in the rain and then bake in the sun on the same porch. Temperature is the bigger concern there. The label says: {storage}. If you think a package sat in strong sun for a long time, let the bottle come back to room temperature and look at it closely before use. If you’re unsure, ask before using it.`,
      },
      { h: 'What counts as damage, and what to do' },
      {
        p: `If a seal is broken, a bottle is cracked or leaking, or the order is wrong, report it within {returnDays} days of delivery and it’s replaced at no charge. If the bottles are sealed and intact and only the outer box got wet, they can be used as normal. If you’re not sure which side of that line you’re on, call {phone}, {hours}, describe what you see, and have your order number ready. See [what to do if your order arrives damaged](/guides/damaged-order) for more.`,
      },
      { h: 'Avoiding a wet box next time' },
      {
        p: `The shipping email tells you when your order is on its way, so you can keep an eye out around the expected time. If your door gets a lot of weather or you’re away during the day, a neighbor or a workplace with a front desk can take the package in. [Eye drop package stolen?](/guides/eye-drop-package-stolen) covers what to do if it goes missing instead.`,
      },
    ],
    faq: [
      {
        q: 'Are eye drops ruined if the box gets wet?',
        a: 'Usually not, as long as each tamper seal is intact and the bottle isn’t cracked. Check the seal, the bottle and the liquid’s appearance before using it.',
      },
      {
        q: 'Should I use eye drops if the carton got soaked?',
        a: 'If the tamper seal is whole and the liquid looks the way the label describes, a soaked carton alone isn’t a reason to throw the bottle out. Wipe the bottle dry before opening it.',
      },
      {
        q: 'Will Quell replace an eye drop order damaged by rain?',
        a: 'Orders that arrive damaged, incorrect or with a broken tamper seal are replaced at no charge if reported within {returnDays} days. Call {phone} with your order number and describe what you found.',
      },
      {
        q: 'What if I can’t read the expiration date on a wet carton?',
        a: 'Look for it elsewhere on the package. If you can’t find a readable expiration date anywhere, call us at {phone} before using the bottle.',
      },
    ],
  },
  {
    slug: 'when-does-the-eye-drop-refund-window-start',
    title: 'When does the refund window on eye drops start?',
    description:
      'Quell’s refund window on unopened bottles counts from delivery, not from the order date. How to find your delivery date and ask in time.',
    category: 'returns',
    addedOn: '2026-11-22',
    body: [
      {
        p: `The window starts when your order is delivered, not when you place it, pay for it or open the box. Under our terms, unopened bottles of Quell can be refunded within {returnDays} days of delivery, and you don’t have to send them back. Find your delivery date on the carrier’s tracking page, then call {phone} with your order number before the window runs out.`,
      },
      { h: 'Why delivery is the starting point' },
      {
        p: `Section 7 of our [terms](/terms) ties both the refund on unopened bottles and the replacement of damaged, incorrect or broken-seal orders to the date of delivery. That’s the fairest point to start counting, because it’s the first day you actually have the bottles in hand. A slow week in transit doesn’t eat into your time, and neither does the gap between ordering and the package leaving Brentwood, Tennessee. It also means two orders placed together can have different deadlines if one arrives later, so check each order’s own delivery date rather than assuming they match.`,
      },
      { h: 'How to find your delivery date' },
      {
        list: [
          `Open the shipping email and follow the tracking link. The carrier’s page shows the delivery scan with its date.`,
          `Or look the order up on our [track your order](/orders) page with your order number and the email you used at checkout.`,
          `If you have an account, sign in to see all your orders in one place.`,
          `Can’t find any of these? Call {phone}, {hours}, and we can look the order up for you.`,
        ],
      },
      {
        p: `Write the date down when you plan to keep some bottles sealed for a while. It saves guessing later.`,
      },
      { h: 'Counting the days: common situations' },
      {
        list: [
          `You were away when it arrived. The clock still started on delivery, even if the box sat on the porch for a week.`,
          `You ordered several bottles and opened one. The others, still sealed, can be refunded within the window. The opened one can’t.`,
          `You sent it as a gift. The window runs from when it reached the recipient, which may be well before the gift is unwrapped. [What if they don’t want the gift?](/guides/if-a-gift-of-quell-is-not-wanted) covers who should call.`,
          `The package never arrived. That isn’t a refund-window question yet. Start with [tracking says delivered, but no package?](/guides/tracking-says-delivered-but-no-parcel).`,
        ],
      },
      { h: 'What the refund covers' },
      {
        p: `The refund is the product price of each unopened bottle. Original shipping isn’t refunded. You keep the bottles; we don’t ask for them back, because a bottle that has left our hands can’t be confirmed to have been stored as its label requires and couldn’t be resold anyway. Opened bottles can’t be refunded, returned or resold. [What is refunded on a Quell order?](/guides/what-is-refunded-on-a-return) goes into the details.`,
      },
      { h: 'Gifts that sit wrapped for weeks' },
      {
        p: `This is where the delivery date catches people out. If you order in early December so a package can sit under the tree until Christmas Day, a few weeks of the window may have passed before anyone knows whether the gift suits. Buyers who expect a gift might come back can note the delivery date and ask the recipient early, without spoiling the surprise. If the recipient has an egg or bird allergy, for instance, the label’s warning ({warnings}) may make that clear quickly.`,
      },
      { h: 'Damaged orders run on the same clock' },
      {
        p: `If the box arrives crushed, the wrong item comes, or a tamper seal is broken, report it within the same {returnDays} days from delivery and the order is replaced at no charge. Check your order the day it arrives so a problem doesn’t sit unnoticed in a closet. [What to do if your order arrives damaged](/guides/damaged-order) has the steps.`,
      },
      { h: 'If you’re past the window' },
      {
        p: `The terms set the refund period at {returnDays} days from delivery and don’t offer anything past it. You can still call {phone} with a question about your order, but there’s no promise of a refund outside that period. If you have sealed bottles you’ll use later, store them as the label says ({storage}) and check the expiration date on the package before you open one.`,
      },
      { h: 'How to ask for a refund' },
      {
        p: `Call {phone}, {hours}, with your order number. Say how many unopened bottles you’re asking about. That’s the whole process: no form, no return label and nothing to mail. For other ways to reach us, see the [contact section](/about#contact).`,
      },
    ],
    faq: [
      {
        q: 'Does the eye drop refund window start from the order date or the delivery date?',
        a: 'The delivery date. Quell refunds unopened bottles within {returnDays} days of delivery, so time in transit doesn’t count against you.',
      },
      {
        q: 'How do I find out when my eye drop order was delivered?',
        a: 'The tracking link in your shipping email shows the delivery scan and date. You can also look the order up on the track your order page with your order number and checkout email.',
      },
      {
        q: 'Can I still get a refund if the gift was opened late?',
        a: 'If the bottle is still sealed and it’s within {returnDays} days of when the package was delivered, yes. Time spent wrapped under the tree counts toward the window.',
      },
      {
        q: 'Can I get a refund after 30 days?',
        a: 'Quell’s terms set the refund period for unopened bottles at {returnDays} days from delivery and don’t offer refunds after it. You can call {phone} with order questions, but nothing past the window is promised.',
      },
    ],
  },
  {
    slug: 'what-an-eye-drop-label-does-not-tell-you',
    title: 'What an eye drop label doesn’t tell you',
    description:
      'An eye drop label covers uses, warnings, directions and storage. It leaves out contact lenses, children and other drops. Who to ask about each gap.',
    category: 'label',
    addedOn: '2026-11-22',
    body: [
      {
        p: `A Drug Facts label tells you what the drop is for, how much to use, when to stop and how to store it. It’s silent on plenty of everyday questions: using it with contact lenses, giving it to a child, combining it with other drops, how many drops a bottle holds, or using it more often than directed. For those, ask an eye doctor or pharmacist rather than guessing from what the label leaves out.`,
      },
      { h: 'What Quell’s label does cover' },
      {
        p: `Start with what is there, because the gaps only make sense against it. Quell’s panel covers these points, each shown here in the label’s own words:`,
      },
      {
        list: [
          `Uses: {uses}.`,
          `Warnings: {warnings}.`,
          `Do not use: {doNotUse}.`,
          `When using: {tip}.`,
          `Directions: {directions}.`,
          `Storage: {storage}.`,
          `If swallowed: {swallowed}.`,
        ],
      },
      {
        p: `The stop-use section reads, as a sentence: {stopUse} You can read the whole panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Contact lenses' },
      {
        p: `The label gives no directions for contact lens wearers. It doesn’t say whether to take lenses out first, how long to wait before putting them back in, or whether the drop is meant for use with lenses at all. Silence isn’t permission. If you wear lenses, ask the eye doctor who fits them. [Can I use Quell with contact lenses?](/guides/contact-lenses-and-quell) covers this in more depth.`,
      },
      { h: 'Children' },
      {
        p: `The directions are written for one schedule, with no age bands and no separate instructions for children. The only line about children is the reminder to keep the bottle out of their reach, with what to do if some is swallowed. For a child’s eyes, ask their doctor or a pharmacist before using any drop.`,
      },
      { h: 'Other eye drops and medicines' },
      {
        p: `The label doesn’t address using Quell alongside another eye drop, whether prescribed or over the counter, or alongside any medicine. It doesn’t give a waiting time between different drops either. If you already use something in your eyes, the doctor who prescribed it or your pharmacist can tell you whether and how to add another product.`,
      },
      { h: 'More often than directed' },
      {
        p: `The directions name a dose and a frequency. They don’t say what to do if your eyes still feel dry between doses, or whether extra drops are fine on a bad day. When a label gives a frequency, that’s the frequency it covers. If the labeled dose doesn’t feel like enough, that’s a reason to talk to an eye doctor, not to improvise.`,
      },
      { h: 'How much is in a drop, and how long a bottle goes' },
      {
        p: `The carton gives the bottle’s size, {size}, but no drop count and no drop volume. A drop’s size depends on the tip, the angle and how you squeeze. You can work out roughly how long a bottle lasts you by noting the dates you open and finish one. [How long does a bottle of eye drops last?](/guides/how-long-does-a-bottle-of-eye-drops-last) explains the arithmetic.`,
      },
      { h: 'Technique' },
      {
        p: `The directions don’t explain how. The label doesn’t tell you to tilt your head, pull down the lower lid, lie down, or close your eyes afterward. These are habits people learn from a pharmacist, an eye doctor or practice. [How to put in eye drops without flinching](/guides/how-to-put-in-eye-drops-without-flinching) walks through the common methods.`,
      },
      { h: 'Why a label leaves things out' },
      {
        p: `A Drug Facts panel has very little room, and every line on it has to be accurate for everyone who reads it. It states what applies to everyone who uses the product and leaves the rest to the people who can examine you or review your other medicines. That isn’t a flaw. It’s the label being careful about what it can stand behind. Our [Drug Facts page](/drug-facts) shows the same panel as the carton, so it won’t fill these gaps either; the people listed below can.`,
      },
      { h: 'Who to ask about each gap' },
      {
        list: [
          `Contact lenses, frequency, or symptoms that don’t settle: your eye doctor.`,
          `Other drops, other medicines, children, or technique: a pharmacist, who can answer without an appointment.`,
          `Your order, shipping or a bottle that looks wrong: us, at {phone}, {hours}.`,
          `Pain, vision changes or anything urgent: an eye doctor promptly. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
        ],
      },
    ],
    faq: [
      {
        q: 'What does it mean when an eye drop label doesn’t mention contact lenses?',
        a: 'It means the label gives no directions for lens wearers, not that the drop is approved for use with them. Ask the eye doctor who fits your lenses before using it.',
      },
      {
        q: 'Why don’t eye drop labels say how many drops are in the bottle?',
        a: 'Drop size varies with the tip, the angle and the squeeze, so a count would only be an estimate. The label gives the bottle’s volume, {size}, instead.',
      },
      {
        q: 'Who should I ask about something the eye drop label doesn’t cover?',
        a: 'A pharmacist for questions about other drops, medicines or technique, and an eye doctor for contact lenses, frequency or symptoms that don’t settle. For order questions, call {phone}.',
      },
    ],
  },
  {
    slug: 'eye-drop-volume-per-drop',
    title: 'Eye drop volume per drop, and why labels count drops',
    description:
      'Eye drop labels give the bottle’s volume but count the dose in drops. What that means for a daily routine, and how to estimate drops per bottle yourself.',
    category: 'formula',
    addedOn: '2026-11-22',
    body: [
      {
        p: `The volume of a single eye drop isn’t fixed or printed on the label. It depends on the bottle’s tip, the liquid and how you squeeze. That’s why labels sell you a volume, {size} for Quell, but give the dose as a count: {directions}. You follow the count, not a measurement, and you can estimate how many drops your own bottle gives by tracking the dates you open and finish it.`,
      },
      { h: 'Two numbers that answer different questions' },
      {
        p: `A Quell carton carries two kinds of quantity, and they’re easy to blur together:`,
      },
      {
        list: [
          `The bottle’s size, {size}. That tells you how much liquid you’re buying, the way a juice carton does.`,
          `The dose, given in drops in the Directions section. That tells you how much to use each time, and how often.`,
        ],
      },
      {
        p: `Nothing on the carton converts one into the other. There’s no line saying how many drops are in the bottle or how much liquid is in one drop. That isn’t an omission so much as a reflection of how drops work: the count is something you can do at the sink, and the volume per drop changes from squeeze to squeeze.`,
      },
      { h: 'Why a count works better than a measurement' },
      {
        p: `Imagine directions written in milliliters. You’d need a measuring tool for a quantity far smaller than a teaspoon, and you’d need to get it into your eye without touching the tip to anything. A drop solves both problems. It forms at the tip, falls when it’s heavy enough, and lands where you aim it. One drop is a unit anyone can count, with no equipment. The label’s job is to tell you how many of those units to use, and Quell’s does: one, three times a day, in each eye.`,
      },
      { h: 'Your daily drop count' },
      {
        p: `The directions make the arithmetic simple. One drop in each eye, three times a day, comes to six drops a day if you use it in both eyes, or three if you use it in one. Over a week that’s 42 drops or 21. That number is the useful one for planning, because it doesn’t depend on knowing how big each drop is. Missed drops lower it, and drops that miss the eye and need a second try raise it. [How long does a bottle of eye drops last?](/guides/how-long-does-a-bottle-of-eye-drops-last) turns that count into days.`,
      },
      { h: 'Estimating drops per bottle yourself' },
      {
        p: `If you want a real figure for your own bottle, measure it the practical way:`,
      },
      {
        list: [
          `Write the date on the carton the day you open a new bottle.`,
          `Use it as directed and note any days you skipped.`,
          `When it runs out, count the days in between.`,
          `Multiply the days by your daily count (six for both eyes) and subtract a little for misses and skipped doses.`,
        ],
      },
      {
        p: `That gives you a working number for your hands, your angle and your squeeze. Someone else using the same product might get a different number, and both would be right. A [simple eye drop log](/guides/keeping-an-eye-drop-log) makes the dates easy to keep.`,
      },
      { h: 'What changes the volume of a drop' },
      {
        p: `Several things nudge a drop larger or smaller. A quick, firm squeeze can push out a bigger drop, or two at once, than a slow, gentle press. The design of the tip and the thickness of the liquid play a part too; Quell is milky rather than clear, and the label puts its look this way: {milky}. None of that changes the instruction. Whatever size the drop, the directions count one.`,
      },
      { h: 'Does a bigger drop mean a bigger dose?' },
      {
        p: `Not in a way that should change your routine. The front of the eye holds only a little liquid at once, so a large drop tends to spill over onto the lid or cheek rather than staying put. That’s why using two drops instead of one doesn’t double what stays on your eye. If two come out by accident, don’t compensate by skipping the next dose; carry on with the schedule. [What happens if you put too many eye drops in?](/guides/too-many-eye-drops-at-once) covers the overflow question.`,
      },
      { h: 'Fluid ounces and milliliters on the carton' },
      {
        p: `The size line gives the same volume two ways, in US fluid ounces and in milliliters. The fluid-ounce figure looks odd because it’s a small fraction, but it’s simply the same amount in different units. [What does fl oz mean on eye drops?](/guides/what-does-fl-oz-mean-on-eye-drops) explains the conversion, and [What size is a bottle of Quell?](/guides/what-size-is-a-bottle-of-quell) puts the bottle in context.`,
      },
      { h: 'When the count is what matters to a doctor' },
      {
        p: `If you tell an eye doctor or pharmacist how you use your drops, give them the count and the timing, not a guess at volume: which eyes, how many times a day, and for how long. That’s the information they can work with. If you find you want to use drops more often than the label says, ask them before changing anything, and stop when the label tells you to: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What is the volume of one eye drop?',
        a: 'It varies with the bottle tip, the liquid and the squeeze, so labels don’t print it. They give the bottle’s total volume and count the dose in drops instead.',
      },
      {
        q: 'How many drops a day does Quell’s label call for?',
        a: 'The directions read: {directions}. That comes to six drops a day for both eyes, or three for one eye.',
      },
      {
        q: 'Why are eye drop doses measured in drops instead of milliliters?',
        a: 'A drop is a unit anyone can count without a measuring tool, and it lands where you aim it. Measuring a fraction of a milliliter at home isn’t practical.',
      },
      {
        q: 'How can I figure out how many drops are in my eye drop bottle?',
        a: 'Note the dates you open and finish a bottle, multiply the days by your daily drop count, and allow for misses. The result is an estimate for your own technique.',
      },
    ],
  },
  {
    slug: 'lubricant-eye-drops-vs-rewetting-drops',
    title: 'Lubricant eye drops vs. rewetting drops',
    description:
      'Rewetting drops are sold for moistening contact lenses; lubricant drops are for the eye’s surface. How to tell them apart and who to ask if you wear lenses.',
    category: 'choosing',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Rewetting drops are sold for contact lens wearers, to moisten lenses while they’re in your eyes. Lubricant eye drops, sometimes called artificial tears, are meant for the surface of the eye itself. Quell is a lubricating eye drop, and its label gives no directions for contact lenses. If you wear lenses, ask your eye doctor which kind fits your routine; if you don’t, read each box’s Uses line.`,
      },
      { h: 'What rewetting drops are' },
      {
        p: `Rewetting drops sit in the contact lens aisle for a reason. Their packaging is written around lenses: putting a drop in while the lenses are in, to make them feel more comfortable during a long day of wear. The box will usually mention contact lenses by name, often the types of lenses it’s meant for. Because those products are made for lens wear, their directions assume you’re wearing lenses, and the questions they answer are about the lens as much as the eye.`,
      },
      { h: 'What lubricant eye drops are' },
      {
        p: `Lubricant drops are made to add moisture to the eye’s surface and support the tear film, the thin layer of oil, water and mucus that keeps the front of the eye comfortable. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel states its Uses: {uses}. Its directions read: {directions}. Nothing on the panel mentions lenses.`,
      },
      { h: 'How to tell them apart on the shelf or online' },
      {
        list: [
          `Read the Uses line. A lubricant drop’s Uses will talk about dryness or irritation of the eye. A rewetting product will talk about lenses.`,
          `Look for contact lens wording on the front of the box. Rewetting drops make it obvious; Quell’s carton doesn’t mention lenses.`,
          `Check the directions. If they tell you what to do while lenses are in, the product is written for lens wearers.`,
          `When a listing online doesn’t make it clear, look for a photo of the full panel, or ask a pharmacist before you buy.`,
        ],
      },
      {
        p: `Our guide to [reading a Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label) shows where each section sits on the panel.`,
      },
      { h: 'Can I use lubricant drops with my contacts in?' },
      {
        p: `For Quell, the label doesn’t say. It gives no instructions for lens wearers: nothing about removing lenses first, how long to wait before putting them back in, or whether it’s meant to be used with lenses at all. That silence isn’t a yes. Quell is also milky rather than clear; the label describes it this way: {milky}. Your eye doctor knows your lenses and can tell you what works with them. [Can I use Quell with contact lenses?](/guides/contact-lenses-and-quell) covers the question in more detail.`,
      },
      { h: 'Can I use rewetting drops if I don’t wear contacts?' },
      {
        p: `That depends on what the particular product’s label says, and we can’t speak for other products. Some are written only around lenses. If you don’t wear lenses and your eyes feel dry, a drop labeled for dryness of the eye is the more direct match, and a pharmacist can help you compare the boxes in front of you. Don’t assume two products are interchangeable because they both come in small bottles.`,
      },
      { h: 'Lens wearers whose eyes still feel dry' },
      {
        p: `If you need rewetting drops more and more often, or your eyes feel dry even with lenses out, tell your eye doctor. Lens fit, wearing time, the lens material and your cleaning routine can all play a part, and only an exam can sort out which. A lubricant drop might be part of the answer, but that’s a decision for the person who fits your lenses. Meanwhile, the everyday habits that help any eye still apply: keep vents off your face, take breaks from screens to blink fully, and don’t sleep in lenses unless your eye doctor has told you that’s fine.`,
      },
      { h: 'A simple way to keep them straight at home' },
      {
        p: `If you keep both kinds, store them apart so you don’t grab the wrong bottle half-awake. Keep lens products with your lens case, and keep lubricant drops somewhere else. Every bottle should stay closed and clean between uses, and Quell’s label adds: {tip}. For storage, it says: {storage}.`,
      },
      { h: 'Where to get answers' },
      {
        p: `An eye doctor can answer anything about lenses. A pharmacist can compare labels with you on the spot. For questions about a Quell order, call {phone}, {hours}. If your eyes hurt or your vision changes, stop and get checked: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists more warning signs.`,
      },
    ],
    faq: [
      {
        q: 'Are rewetting drops the same as artificial tears?',
        a: 'No. Rewetting drops are sold for moistening contact lenses while they’re worn, while artificial tears and other lubricant drops are meant for the eye’s surface. Read each box’s Uses line.',
      },
      {
        q: 'Can I use rewetting drops without contacts?',
        a: 'Check that product’s own label, since some are written only for lens wearers. If your eyes feel dry and you don’t wear lenses, a drop labeled for dryness of the eye is the closer match.',
      },
      {
        q: 'Does Quell work as a rewetting drop for contacts?',
        a: 'Quell’s label gives no directions for contact lenses, so it doesn’t cover that use. Ask the eye doctor who fits your lenses before putting any drop in with them.',
      },
      {
        q: 'How do I know if eye drops are for contact lenses?',
        a: 'Products made for lens wear say so on the box and in the directions. If contact lenses aren’t mentioned anywhere, the label doesn’t cover using it with them.',
      },
    ],
  },
  {
    slug: 'dry-eyes-while-waiting-for-an-eye-doctor-appointment',
    title: 'Dry eyes while waiting for an eye doctor appointment',
    description:
      'What to do about dry-feeling eyes until your appointment: easy changes at home, a lubricating drop used as labeled, notes to bring, and signs that can’t wait.',
    category: 'choosing',
    addedOn: '2026-11-22',
    body: [
      {
        p: `While you wait for an eye doctor appointment, cut back what dries your eyes (vents blowing on your face, long screen stretches, wind), use an over-the-counter lubricating drop exactly as its label says, and keep short notes on when your eyes feel worst. Don’t wait out pain, sudden vision changes, an injury or a chemical splash: call the office back or get urgent care right away.`,
      },
      { h: 'Is it okay to use eye drops before seeing the eye doctor?' },
      {
        p: `For ordinary dryness, an over-the-counter lubricating drop used as directed is reasonable while you wait, and many people do just that. Tell the office when you book that you’re using one, and again at the visit, including which product and how often. If the office gives you specific instructions before the appointment, follow theirs. If you already use any prescribed eye drop, ask the prescriber before adding another product, because Quell’s label doesn’t cover combining drops.`,
      },
      { h: 'Changes you can make today' },
      {
        list: [
          `Move out of drafts. Point car and desk vents away from your face, and keep your bed out of the path of a ceiling register or fan.`,
          `Break up screen time. Every so often, look across the room and finish a few full blinks; concentration cuts your blink rate. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why.`,
          `Add moisture to dry rooms. A humidifier in the bedroom can help when the heat is running.`,
          `Shield your eyes outdoors. Wraparound sunglasses block wind and glare.`,
          `Don’t rub. It can irritate the surface and won’t fix the dryness.`,
        ],
      },
      { h: 'Keep notes your eye doctor can use' },
      {
        p: `An appointment is short, and memory is unreliable about something that comes and goes. A week or two of notes gives the doctor much more to work with. Write down:`,
      },
      {
        list: [
          `when your eyes feel worst (morning, late afternoon, after driving, after screen work),`,
          `where you were and what the air was like (heated office, car, outdoors in wind),`,
          `what you used, how often, and whether it seemed to help,`,
          `anything else you noticed, such as blurry patches that clear with blinking, watering, or sensitivity to light,`,
          `any medicines you take, including over-the-counter ones.`,
        ],
      },
      {
        p: `A [simple eye drop log](/guides/keeping-an-eye-drop-log) is an easy way to keep these notes in one place.`,
      },
      { h: 'Try one change at a time' },
      {
        p: `It’s tempting to buy several products at once and use them all. That makes it hard to tell what helped, and it gives the doctor a muddier picture. Start with the changes to your surroundings, add a single lubricating drop if you want one, and keep the rest of your routine steady until the visit.`,
      },
      { h: 'Using Quell in the meantime' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses line reads: {uses}. The directions are: {directions}. Before your first drop, read the warning, {warnings}, and keep the dropper clean, since the label says: {tip}. The full panel is on our [Drug Facts page](/drug-facts). Bring the carton or a photo of the panel to your appointment so the doctor can see exactly what you used.`,
      },
      { h: 'Signs that shouldn’t wait for the appointment' },
      {
        p: `Some symptoms need attention sooner than a routine slot. Call the office back, or seek urgent care, if you have eye pain, a sudden change in your vision, flashes or a curtain over part of what you see, an injury, a chemical in your eye, or strong sensitivity to light. The label also lists when to stop using the drop: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has a longer list.`,
      },
      { h: 'If the wait is long' },
      {
        list: [
          `Ask to be put on a cancellation list. Openings come up.`,
          `Call back if your symptoms change. A worse description can change how soon you’re seen.`,
          `Ask a pharmacist. They can talk through over-the-counter options and your other medicines without an appointment.`,
          `Mention it to your primary care doctor if you see them first, especially if you have other symptoms.`,
        ],
      },
      { h: 'On the day of the visit' },
      {
        p: `Bring your notes, the drops you’ve been using or photos of their labels, your glasses or contact lens details, and a list of medicines. Mention when you last used drops that day. [How often should I see an eye doctor for dry eyes?](/guides/how-often-should-i-see-an-eye-doctor-for-dry-eyes) covers what follow-up can look like.`,
      },
    ],
    faq: [
      {
        q: 'What can I do for dry eyes until I see a doctor?',
        a: 'Keep vents and wind off your eyes, take screen breaks to blink fully, use a humidifier in dry rooms, and use an over-the-counter lubricating drop as its label directs. Keep notes for the visit.',
      },
      {
        q: 'Should I tell my eye doctor I’ve been using eye drops?',
        a: 'Yes. Say which product, how often you use it and when you last used it that day. Bringing the carton or a photo of its label is easiest.',
      },
      {
        q: 'Can a pharmacist help with dry eyes before my eye appointment?',
        a: 'Yes. A pharmacist can talk through over-the-counter options and check them against your other medicines without an appointment. Symptoms like pain or vision changes still need an eye doctor promptly.',
      },
      {
        q: 'When should I not wait for my eye appointment?',
        a: 'Call the office or get urgent care for eye pain, sudden vision changes, flashes, an injury, a chemical splash or strong light sensitivity. Those shouldn’t wait for a routine visit.',
      },
    ],
  },
  {
    slug: 'can-you-put-in-eye-drops-with-your-eyes-closed',
    title: 'Can you put in eye drops with your eyes closed?',
    description:
      'Quell’s label doesn’t describe a closed-eye method. How the inner-corner technique works, why some of the drop may not get in, and who can show you another way.',
    category: 'choosing',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Some people do, but Quell’s label doesn’t describe putting drops in with your eyes closed. Its directions read: {directions}. The closed-eye method people use is to lie back, place the drop in the inner corner of the closed eye, then open the eye so the drop can run in. It’s hard to tell whether a full drop got in that way, so if you can’t keep your eye open, ask a pharmacist to show you a technique.`,
      },
      { h: 'What the label says, and what it leaves out' },
      {
        p: `The directions give the dose and how often. They don’t tell you how to hold the bottle, whether to tilt your head or lie down, or whether your eye should be open. That’s normal for a Drug Facts panel, which has room for the essentials only. The technique part is left to you, your pharmacist and your eye doctor. One line on the panel does bear on technique, and it matters more than usual with your eyes shut: {tip}.`,
      },
      { h: 'How the closed-eye method works' },
      {
        p: `Here’s the method as people commonly describe it. It isn’t from Quell’s label, so think of it as one option to ask about, not as directions:`,
      },
      {
        list: [
          `Wash your hands and lie flat on your back, or tilt your head well back.`,
          `Close your eyes gently, without squeezing.`,
          `Hold the bottle above the inner corner of one eye, next to the nose, without letting the tip touch your skin or lashes.`,
          `Let one drop fall into the little hollow at the inner corner.`,
          `Open your eye and blink slowly a few times so the drop can run onto the eye.`,
          `Wipe away anything that runs onto your cheek with a clean tissue.`,
        ],
      },
      { h: 'Why some of the drop may not get in' },
      {
        p: `With the eye closed, the drop lands on skin first. Some of it can run along the lashes, soak into the lid margin or slide down the side of your nose before you open your eye. Lying flat helps the drop stay put, but you’re still relying on it to roll the right way. You may not be able to tell whether most of it reached the eye or very little did. [How do I know if the eye drop went in?](/guides/how-do-i-know-if-the-eye-drop-went-in) covers the signs, such as a cool feeling on the eye or brief blurring as it spreads.`,
      },
      { h: 'Keeping the tip clean when you can’t see it' },
      {
        p: `The bigger risk with your eyes closed is the bottle tip. When you can’t see where it is, it’s easy to bump your lashes, eyelid or the side of your nose. The label is clear that the tip shouldn’t touch any surface. Keeping your hand steady helps: rest the hand holding the bottle on your forehead or brow bone, so the tip stays a fixed distance above the corner. If you think the tip touched your skin, wipe it with a clean tissue, and if you’re unsure about using the bottle after that, ask a pharmacist.`,
      },
      { h: 'Why people close their eyes in the first place' },
      {
        p: `Almost everyone blinks when something comes at their eye. It’s a reflex, not a lack of willpower. People who find they can’t keep the eye open long enough often try the closed-eye method out of frustration. Other approaches can work too: lying down and looking up at the ceiling, gently pulling down the lower lid to make a pocket, or looking past the bottle at a spot on the wall. [How to put in eye drops without flinching](/guides/how-to-put-in-eye-drops-without-flinching) walks through those.`,
      },
      { h: 'Closing your eyes after the drop is a different thing' },
      {
        p: `Gently closing your eyes for a moment after a drop goes in is a common habit and a separate question from putting it in with them closed. Squeezing hard can push liquid out, so closing softly is the usual advice. [Should you blink after putting in eye drops?](/guides/should-you-blink-after-putting-in-eye-drops) looks at that step.`,
      },
      { h: 'If a drop misses' },
      {
        p: `A drop that ends up on your eyelid or cheek isn’t a dose. If you’re fairly sure it didn’t get in, you can try again with one more drop. If you’re unsure, don’t keep adding drops; carry on with your next scheduled one. Wiping the excess from your skin keeps the area clean.`,
      },
      { h: 'Who can help you find a method that works' },
      {
        p: `A pharmacist can watch you put in a drop and suggest changes, often on the spot. An eye doctor can do the same at a visit. If you have shaky hands, stiff fingers or poor vision, mention it, since there are simple ways around each. And if your eyes hurt or your vision changes, stop and get checked: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Does putting an eye drop in the corner of a closed eye work?',
        a: 'Some of the drop usually runs onto the eye when you open it, but some can be lost on the lashes or skin. It’s hard to know how much got in, so ask a pharmacist if you rely on this method.',
      },
      {
        q: 'Is it okay if an eye drop lands on my eyelid?',
        a: 'It isn’t harmful in itself, but it may not count as a dose. If you’re sure it missed, try one more drop; if you’re unsure, wait for your next scheduled drop.',
      },
      {
        q: 'What does Quell’s label say about how to put in drops?',
        a: 'The directions give the dose and frequency: {directions}. The label also says: {tip}. It doesn’t describe a technique, so ask a pharmacist if you need help.',
      },
    ],
  },
  {
    slug: 'dry-eyes-for-car-salespeople',
    title: 'Dry eyes for car salespeople',
    description:
      'Sun on the lot, test-drive vents, a glass showroom and long weekend shifts dry a car salesperson’s eyes. Habits for each, plus what Quell’s label says.',
    category: 'using',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Selling cars dries the eyes because the job keeps moving between harsh settings: sun and wind on the lot, dashboard vents during test drives, a bright glass showroom, and screens at the desk, often across long weekend shifts. Wear sunglasses outside, aim vents away from your face in every car, blink fully between customers, and if you use a lubricating drop, follow its label.`,
      },
      { h: 'Why dealership work is hard on your eyes' },
      {
        p: `Few jobs change environments as often in a single hour. You might greet a customer in an air-conditioned showroom, walk the lot in full sun, sit in three different cars with their fans running, and finish at a desk reading figures off a monitor. Each of those affects the tear film differently. Sun and wind speed evaporation and make you squint. Car vents blow dry air straight at your face. Screen work slows your blink rate. Put them together over a ten-hour Saturday and it’s no surprise your eyes feel gritty by closing time.`,
      },
      { h: 'Walking the lot' },
      {
        list: [
          `Wear sunglasses with wraparound frames. They cut glare off windshields and paint and block wind from the sides.`,
          `A hat with a brim helps on summer afternoons, if your dealership’s dress code allows one.`,
          `Pick a shady spot to talk numbers with a customer outside, rather than standing in reflected glare.`,
          `In cold months, the lot can be windy and bitterly dry. Turning your back to the wind while you talk helps.`,
        ],
      },
      { h: 'Test drives and dashboard vents' },
      {
        p: `A car that has been sitting in the sun gets its air conditioning turned to maximum the second the engine starts, and in winter the heater goes on full. Either way, the vents nearest the passenger seat often point right at your face. Before you pull out, angle your vents toward your chest or the window, and set the fan lower once the cabin is comfortable. You’re the passenger, so you can also glance away from the road and blink without the driver’s responsibility. [Why do my eyes feel dry in the car?](/guides/why-do-my-eyes-feel-dry-in-the-car) has more on cabin air.`,
      },
      { h: 'The showroom' },
      {
        p: `Showrooms are built to show off cars, which usually means big windows and bright lights. Light reflecting off polished floors and paint adds to the glare, and squinting tends to mean shorter, incomplete blinks. Cooling and heating systems sized for a big glass room run hard much of the year. If your desk sits under a supply vent, ask whether it can be redirected, or move a chair so the airflow hits your back.`,
      },
      { h: 'Desk time and the paperwork' },
      {
        p: `Between customers, there’s inventory to look up, leads to follow and deals to write. Long stretches at a monitor reduce how often you blink, and you tend to blink less fully when you’re concentrating on numbers. Look up and across the showroom every so often and finish a few complete blinks. Put the monitor slightly below eye level so your lids cover more of each eye. [Screens and your tear film](/guides/screens-and-your-tear-film) explains the habit.`,
      },
      { h: 'Long weekends and year-end events' },
      {
        p: `Saturdays are the busy day at most dealerships, and December often brings year-end sales events and longer hours. That’s also deep in heating season in much of the country, when indoor air is at its driest. Plan your breaks so you actually step away from the screen and the vents, and try to sleep somewhere that isn’t blasting heat at your face. Late nights finishing deals add up, and eyes that feel fine at noon can feel dry by evening.`,
      },
      { h: 'Where to keep eye drops at work' },
      {
        p: `Not in a car on the lot. Inventory vehicles sit in the sun all summer and in the cold all winter, and your own car does the same while you work. Quell’s label gives the storage range: {storage}. A desk drawer or a bag that stays indoors keeps the bottle within it. The bottle is {size}, so it fits in a jacket pocket for the day.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists the Uses as: {uses}. The directions say: {directions}. Wash your hands first, especially after a shift of handling keys and door handles, and keep the dropper clean: {tip}. The [Drug Facts page](/drug-facts) shows the whole panel. You can [order it online](/#buy) and have it shipped to the dealership or home.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay dry after you’ve changed what you can, or they hurt, see an eye doctor, who can work out what’s going on. The label lists when to stop: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the signs that shouldn’t wait. [Dry eyes for real estate agents](/guides/dry-eyes-for-real-estate-agents) covers another sales job spent between cars and buildings.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working at a car dealership?',
        a: 'The job moves between sun and wind on the lot, dashboard vents on test drives, a bright showroom and screen work, and each of those dries the eyes in its own way.',
      },
      {
        q: 'Should car salespeople wear sunglasses on the lot?',
        a: 'Wraparound sunglasses cut the glare off windshields and paint and block wind from the sides, which makes long stretches outdoors easier on the eyes. Check your dealership’s dress code.',
      },
      {
        q: 'Can I keep eye drops in a car on the dealership lot?',
        a: 'It’s better not to. Cars on a lot heat up in summer and get cold in winter, and Quell’s label gives a storage range. Keep the bottle in a desk drawer or a bag that stays indoors.',
      },
    ],
  },
  {
    slug: 'dry-eyes-for-insurance-adjusters',
    title: 'Dry eyes for insurance adjusters',
    description:
      'Claims work means rental-car vents, dusty damaged homes, bright sun on roofs and long nights writing estimates. How adjusters can go easier on dry-feeling eyes.',
    category: 'using',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Insurance adjusters get dry eyes from the mix the job demands: hours behind the wheel with vents running, dust and soot in damaged homes, glare while photographing roofs and siding, and late evenings writing estimates on a laptop, sometimes from a hotel room during a storm deployment. Aim vents away, wear eye protection at messy sites, blink fully at the screen, and use any lubricating drop as its label says.`,
      },
      { h: 'Why claims work is rough on your eyes' },
      {
        p: `An adjuster’s day rarely stays in one kind of air. Field adjusters drive between appointments, step into homes where the heat or power may be off, climb into attics and walk around roofs, then sit down to write up the claim. Desk adjusters spend most of the day on screens, zooming into photos and estimates while taking calls. Both routines dry the eyes: one through wind, dust and changing temperatures, the other through long stretches of focused looking that cut your blink rate.`,
      },
      { h: 'On the road between claims' },
      {
        list: [
          `Point dashboard vents at your chest or the windshield, not your face, and lower the fan once the cabin is comfortable.`,
          `Rental cars on a deployment come with unfamiliar controls; check the vent direction before you drive off.`,
          `Wear sunglasses for long drives, especially with low morning or late-afternoon sun.`,
          `Pull over to check messages rather than reading a phone at stoplights, which keeps your eyes on a small screen with the heater blowing.`,
        ],
      },
      {
        p: `[Why do my eyes feel dry in the car?](/guides/why-do-my-eyes-feel-dry-in-the-car) explains more about cabin air.`,
      },
      { h: 'Inside damaged homes' },
      {
        p: `Water, fire and wind claims put you in houses that are anything but clean. Drywall dust from tear-outs, soot from a kitchen fire, insulation fibers in an attic and debris from a fallen tree can all end up in the air. Fans and dehumidifiers set up by restoration crews keep that air moving, and a dehumidifier drying out a flooded room is pulling moisture out of the air you’re breathing and blinking in. Follow your employer’s rules on protective equipment for each site, and wraparound glasses keep a lot of grit out. Rinse your face and wash your hands before you touch your eyes or a bottle of drops.`,
      },
      { h: 'Roofs, siding and bright sun' },
      {
        p: `Inspecting a roof or the outside of a house means looking up at bright sky and shiny surfaces, and squinting while you photograph hail marks or missing shingles. Squinting tends to mean incomplete blinks, and wind on an exposed roof thins the tear film quickly. Polarized sunglasses take the edge off glare, though some people find they make phone and tablet screens harder to read; try a pair before a busy day. Take a moment in shade between elevations to blink a few times slowly.`,
      },
      { h: 'Writing estimates and reports' },
      {
        p: `Then comes the desk work: sorting dozens of photos, measuring from images, building the estimate and documenting everything for the file. This is often done late, after the field day, and often on a laptop. When you concentrate on detail, you blink less, and the blinks you do make are often partial. Every so often, look away from the screen at something across the room and finish a few complete blinks. Set the screen a little below eye level so your lids cover more of each eye. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why it helps.`,
      },
      { h: 'Catastrophe deployments and hotel rooms' },
      {
        p: `After a major storm, adjusters can spend weeks away from home, working long days and sleeping in hotel rooms with wall units that blow air into the room all night. Turn the unit’s fan to a lower setting if you can, point the louvers away from the bed, and keep the thermostat moderate. A travel humidifier is worth packing for long stays in dry climates or winter. [Dry eyes in a hotel room](/guides/dry-eyes-in-a-hotel-room) has more ideas. Long hours and short sleep also make eyes feel worse, so protect your rest where you can.`,
      },
      { h: 'Keeping eye drops with you in the field' },
      {
        p: `A car parked at a claim site in July or January can go well past the label’s storage range, which reads: {storage}. Keep the bottle in a jacket pocket or a bag that comes inside with you, and bring it into the hotel at night. Quell is {size}, small enough for a shirt pocket or a laptop bag. If you’re on deployment, you can order from anywhere in the US and have it shipped to the hotel or your home base.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. According to its Drug Facts panel, its Uses are: {uses}. The directions read: {directions}. A line from the When using section matters after a dusty inspection: {tip}. Wash your hands first, and see the full panel on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If something gets into your eye at a site and doesn’t rinse out, or if your eye hurts afterward, get it looked at rather than waiting. The label is clear about when to stop: {stopUse} Dryness that keeps returning through a long deployment is also worth an eye doctor’s visit once you’re home. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists more signs.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when I do insurance inspections?',
        a: 'Inspections combine dust and debris in damaged homes, glare outdoors, and car vents between appointments, all of which speed evaporation from the tear film. Eye protection, vent changes and screen breaks help.',
      },
      {
        q: 'How can adjusters keep their eyes comfortable on storm deployments?',
        a: 'Turn hotel wall units to a lower fan setting and point them away from the bed, take screen breaks while writing estimates, and keep eye drops in a bag that comes inside instead of in the car.',
      },
      {
        q: 'Do dehumidifiers at water damage sites dry out your eyes?',
        a: 'They pull moisture from the air to dry out the building, and fans keep that air moving, so time in those rooms can leave eyes feeling dry. Step out between tasks and blink fully.',
      },
    ],
  },
  {
    slug: 'dry-eyes-for-bank-tellers',
    title: 'Dry eyes for bank tellers',
    description:
      'Drive-up drafts, lobby door air, bright lights and hours of counting and screen work can dry a bank teller’s eyes. Small habits that fit a teller line.',
    category: 'using',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Bank tellers often get dry-feeling eyes from a steady mix of drafts and close work: cold or hot air at the drive-up window, a blast from the lobby doors, bright overhead lights, and hours of counting cash and reading screens without much chance to step away. Redirect the airflow around your station, look up from the screen between customers, blink fully, and if you use a lubricating drop, follow its label.`,
      },
      { h: 'What makes a teller station dry' },
      {
        p: `A teller line is built for security and visibility, not for comfortable air. Stations face the entrance, so outside air reaches you every time the doors open. Drive-up windows open to the weather many times an hour. Heating and cooling run hard to keep a lobby with big windows comfortable. And the work itself, counting bills, checking endorsements and keying numbers, is exactly the kind of focused looking that slows your blink rate. None of these is severe on its own. Together, through an eight-hour shift, they add up.`,
      },
      { h: 'Counting cash and reading screens' },
      {
        p: `When you concentrate on a task, you blink less often and less completely. Counting a stack twice, verifying a check’s numbers and reading account details on a monitor all keep your eyes fixed on a small area. A few habits help without slowing the line:`,
      },
      {
        list: [
          `Use the moment a customer walks up as a cue to look up, across the lobby, and blink fully.`,
          `Set the monitor slightly below eye level if your station allows; your lids cover more of each eye when you look down a little.`,
          `Turn the screen brightness to match the room so you’re not squinting at glare.`,
          `When you finish balancing a drawer, close your eyes gently for a few seconds before starting the next task.`,
        ],
      },
      { h: 'The drive-up window' },
      {
        p: `Each time the drive-up drawer or window opens, you get a puff of outdoor air: freezing and dry in winter, hot and sometimes dusty in summer, often with car exhaust in it. If your branch uses a window that opens toward you, angle your body so the air passes your side rather than your face. In winter, ask whether a heater under the counter can be pointed at your legs rather than upward, since warm air rising past your face dries the eyes. Wraparound glasses aren’t practical behind glass, but keeping your eyes on the screen rather than the open window when the air comes in helps a little.`,
      },
      { h: 'Lobby doors and bright lights' },
      {
        p: `Stations nearest the entrance catch the outside air every time a customer comes in. If you rotate stations, notice whether your eyes feel worse at the front, and mention it if you have a choice. Lobbies tend to be brightly lit, with glossy counters and glass partitions that reflect light back at you. Glare makes people squint, and squinting tends to mean partial blinks. A small change, such as tilting a monitor away from a window or overhead light, can make a difference over a shift.`,
      },
      { h: 'When you can’t step away' },
      {
        p: `Unlike many office jobs, a teller can’t always leave the station when their eyes feel scratchy. Breaks are scheduled around customer traffic. Use the ones you get: step away from the station, look out a window at something distant, and blink slowly. Keep your eye drops in your locker or a drawer at your station, not in your car, so they’re within reach on a break.`,
      },
      { h: 'Clean hands first' },
      {
        p: `Cash and coins pass through a lot of hands. Wash your hands with soap before touching your eyes or using a drop, rather than relying on a quick wipe. Keep the bottle capped and in a clean spot, and follow the label’s line on the tip: {tip}.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives the Uses as: {uses}. The directions say: {directions}, which works out to a drop in each eye at roughly the start, middle and end of a shift if that suits your schedule. Keep it within the storage range on the label: {storage}. The [Drug Facts page](/drug-facts) shows the full panel, including this caution: {warnings}.`,
      },
      { h: 'Ordering and when to see an eye doctor' },
      {
        p: `You can [order Quell online](/#buy) and have it shipped to your home or your branch, with guest checkout and shipping from Brentwood, Tennessee. If your eyes stay dry after you’ve adjusted your station, or if they hurt, see an eye doctor, who can work out the cause. The label lists when to stop: {stopUse} For more warning signs, see [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor). Work on a busy service counter has a lot in common with retail; [dry eyes for retail workers](/guides/dry-eyes-for-retail-workers) covers that side.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working as a bank teller?',
        a: 'Drafts from the drive-up window and lobby doors, bright lights and long stretches of counting cash and reading screens all speed evaporation or slow your blinking. Small changes at the station help.',
      },
      {
        q: 'How can I keep a drive-up window draft out of my eyes?',
        a: 'Angle your body so outdoor air passes your side, keep your eyes on the screen while the window is open, and point any under-counter heater at your legs rather than upward.',
      },
      {
        q: 'Where should a bank teller keep eye drops at work?',
        a: 'In a locker or a drawer at the station, not in a car, so the bottle stays within the label’s storage range and is close at hand on breaks. Wash your hands before using it.',
      },
    ],
  },
  {
    slug: 'dry-eyes-for-property-managers',
    title: 'Dry eyes for property managers',
    description:
      'Turnover dust, mechanical rooms, grounds walks, leasing tours and a phone that never stops can dry a property manager’s eyes. Habits that fit the job.',
    category: 'using',
    addedOn: '2026-11-22',
    body: [
      {
        p: `Property managers split their days between an office full of screens and the buildings themselves, and both can dry the eyes. Turnover work fills empty units with sanding dust and paint, mechanical rooms run hot, grounds walks bring sun and wind, and the phone and inbox keep your eyes on small screens late into the evening. Protect your eyes during dusty walk-throughs, keep vents off your face, take screen breaks, and use any lubricating drop as labeled.`,
      },
      { h: 'Why the job is hard on your eyes' },
      {
        p: `A property manager might start the morning on the leasing software, walk a unit that’s being turned over, check on a boiler or a rooftop unit, show an apartment to a prospect, then spend the evening answering tenant messages. That’s several kinds of air in one day, plus a lot of screen time. Screens slow your blink rate, while dust, dry heat and wind speed evaporation from the tear film. The fixes are small, but they need to travel with you.`,
      },
      { h: 'Unit turnovers and make-readies' },
      {
        p: `Between tenants, a unit fills with work: patching and sanding drywall, painting, pulling old carpet, scrubbing kitchens. Sanding dust and carpet fibers hang in the air, and cleaning sprays can sting if they reach your eyes. Walk-throughs during this stage are when grit gets in most easily. A few habits help:`,
      },
      {
        list: [
          `Walk a turnover after the dustiest work is done for the day, if your schedule allows.`,
          `Wear wraparound safety glasses when crews are sanding or pulling carpet, and follow your company’s rules for protective equipment.`,
          `Open a window when weather permits so dust doesn’t just circulate.`,
          `Rinse your face and wash your hands afterward, before touching your eyes.`,
        ],
      },
      { h: 'Mechanical rooms and rooftops' },
      {
        p: `Boiler rooms and mechanical closets often run hot and dry, with fans moving the air. Rooftop equipment checks put you in wind and full sun. These visits are usually short, but they’re hard on the tear film while they last. Wear sunglasses on the roof, keep your face out of the path of exhaust fans, and blink slowly a few times once you’re back inside. If you’re there with a technician, let them lead on anything involving equipment.`,
      },
      { h: 'Grounds walks, pools and parking lots' },
      {
        p: `Checking the grounds means time outdoors: parking lots, landscaping, pool decks and walkways. In summer, glare off pavement and pool water makes most people squint. In winter, wind across an open lot dries the eyes fast. Sunglasses with wraparound frames help in both seasons. A brimmed hat works on hot days, and so does scheduling the walk for early morning, when the light is gentler and the lot is quieter.`,
      },
      { h: 'Leasing tours' },
      {
        p: `Showing units means leading a prospect through model apartments, amenity spaces and outdoor areas while talking the whole time. Vacant models often sit with the thermostat set low to save energy, then get heated or cooled quickly before a tour, which sends a lot of dry air through the vents. Arrive a few minutes early, set the system to a moderate temperature, and stand away from the supply registers while you talk.`,
      },
      { h: 'The office and the phone' },
      {
        p: `Rent rolls, work orders, renewals, budgets and tenant portals all live on a screen, and tenant messages follow you home on your phone. Focusing on a screen reduces how often you blink, and the blinks you do make are often incomplete. Look away from the screen every so often at something across the room, and finish a few complete blinks. Turn your phone’s brightness down at night, and put it down entirely when you can. [Screens and your tear film](/guides/screens-and-your-tear-film) explains the habit. If your desk sits under a vent, ask whether it can be redirected.`,
      },
      { h: 'Where to keep eye drops' },
      {
        p: `Keep the bottle in your office or in a bag that comes with you, not in the car or a maintenance shed. The label gives the range: {storage}. Quell is {size}, so it fits in a pocket on a walk-through.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses line reads: {uses}. The directions: {directions}. After a dusty unit, wash your hands before using it, and follow this line: {tip}. The full panel, including the warning, is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If dust or a cleaning product gets in your eye and doesn’t rinse out, or your eye hurts, get it checked promptly. The label explains when to stop: {stopUse} Dryness that keeps coming back, even after you change your routine, is worth a visit to an eye doctor. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs. Work that puts you in other people’s attics and crawl spaces is covered in [dry eyes for home inspectors](/guides/dry-eyes-for-home-inspectors).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working in property management?',
        a: 'The job moves between screen-heavy office work, dusty unit turnovers, hot mechanical rooms and windy grounds walks. Screens slow blinking, and dust, heat and wind speed evaporation from the tear film.',
      },
      {
        q: 'Should I wear safety glasses during an apartment turnover?',
        a: 'When crews are sanding, painting or pulling carpet, wraparound safety glasses keep dust and debris out of your eyes. Follow your company’s rules for protective equipment on site.',
      },
      {
        q: 'Why are my eyes dry after showing apartments?',
        a: 'Vacant units are often heated or cooled quickly before a tour, sending dry air through the vents while you talk. Set a moderate temperature early and stand away from the registers.',
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-an-uncle',
    title: 'Christmas gifts for an uncle',
    description:
      'Gift ideas for an uncle, sorted by how he spends his time: the garage, the game, the road or the crossword. Plus when eye drops make a thoughtful add-on.',
    category: 'seasonal',
    addedOn: '2026-11-22',
    body: [
      {
        p: `A good Christmas gift for an uncle starts with what he actually does with his time: a workshop or garage, game days on the couch, long drives, reading or puzzles. Useful gifts tend to land better than novelty ones. If he mentions screen-tired or dry-feeling eyes, a bottle of lubricating eye drops can be a practical add-on, paired with something like good sunglasses or a reading lamp. Check the label first.`,
      },
      { h: 'Start with what he complains about' },
      {
        p: `Uncles are often hard to shop for because they’ve already bought what they want. A better starting point is what bothers him. Listen at Thanksgiving, which falls on November 26 this year, for small gripes: the glare on the drive over, a dim reading chair, a shop that’s cold in winter, a phone screen he holds at arm’s length. A gift that fixes a daily annoyance gets used. One that’s just clever gets put in a closet.`,
      },
      { h: 'For the uncle in the garage or workshop' },
      {
        list: [
          `A bright, adjustable work light, or a headlamp for under-the-hood jobs.`,
          `Wraparound safety glasses that are comfortable enough to actually wear.`,
          `A shop vac attachment or a dust-collection accessory for his saw.`,
          `A space heater rated for workshops, if his garage is cold. Heaters dry the air, so he may also appreciate something for his eyes.`,
        ],
      },
      {
        p: `[Dry eyes in a heated garage or workshop](/guides/dry-eyes-in-a-heated-garage-workshop) explains why winter shop time can leave eyes feeling gritty.`,
      },
      { h: 'For the uncle who never misses a game' },
      {
        p: `Hours in front of a big screen, often with the heat on in winter, can leave eyes dry, partly because people blink less while concentrating on the action. Gift ideas include a comfortable throw, a better recliner pillow, a team item he doesn’t already own, or a small humidifier for the den. A bottle of eye drops tucked into a game-day basket is a friendly touch rather than a pointed one. [Dry eyes from watching Thanksgiving football](/guides/dry-eyes-watching-thanksgiving-football) covers the screen side.`,
      },
      { h: 'For the uncle who drives a lot' },
      {
        list: [
          `Polarized sunglasses for low winter sun.`,
          `A windshield cleaning kit, since a dirty inside surface scatters glare.`,
          `A car organizer, a phone mount or a good travel mug.`,
          `An audiobook subscription gift card for long drives.`,
        ],
      },
      {
        p: `Car heaters blow dry air across the face for hours, which is why drivers often appreciate eye drops in a glove-box kit. One caution: a car’s glove box isn’t a good place to store them, because cabins get hot and cold. The label says: {storage}.`,
      },
      { h: 'For the uncle who reads, does crosswords or loves history' },
      {
        p: `Close reading and puzzles keep the eyes focused for long stretches. A good reading lamp is one of the most useful gifts you can give someone who reads every evening. Large-print puzzle books, a book stand, or a magnifier for maps and old documents also work. If he reads on a tablet, a stand that holds it at a comfortable height is a small luxury.`,
      },
      { h: 'Is it weird to give an uncle eye drops?' },
      {
        p: `Not if he’s mentioned dry eyes, and not if it’s part of a bigger, thoughtful gift. On its own, a bottle of drops can feel like a hint. In a box with the reading lamp or the sunglasses, it reads as care. Write a short note about why you thought of it. [Are eye drops a good gift?](/guides/are-eye-drops-a-good-gift) talks through when it works and when it doesn’t.`,
      },
      { h: 'Check the label before you wrap it' },
      {
        list: [
          `Allergies. Quell’s label warns: {warnings}. If he has an egg or bird allergy, choose something else.`,
          `Contact lenses. The label gives no directions for lens wearers, so if he wears them, he should ask his eye doctor first.`,
          `Other drops. If he already uses a prescribed eye drop, the label doesn’t cover using both; his doctor or pharmacist can say.`,
          `Directions. It’s simple: {directions}. Point him to the [Drug Facts page](/drug-facts) for the full panel.`,
        ],
      },
      { h: 'Getting it to his house' },
      {
        p: `If you won’t see him over the holidays, enter his name and address as the shipping address and your own email at checkout, so the order confirmation, which shows the prices, comes to you. Orders ship from Brentwood, Tennessee, to any US address, and {freeBottles} or more bottles ship free. No delivery date is promised, so order early in December. If it doesn’t suit him and the bottle is still sealed, you can get a refund within {returnDays} days of delivery without anyone mailing it back. For more ideas, browse our [gift and holiday guides](/guides/topic/seasonal), or see [Christmas gifts for an aunt](/guides/christmas-gifts-for-an-aunt).`,
      },
    ],
    faq: [
      {
        q: 'What do you get an uncle who has everything?',
        a: 'Something that fixes a small daily annoyance, like a good reading lamp, polarized driving sunglasses or a bright work light. Listen for gripes over the holidays and shop for those.',
      },
      {
        q: 'What is a practical Christmas gift for an uncle?',
        a: 'Tools he’ll use often: a headlamp, safety glasses, a car organizer, or a reading lamp. If he mentions dry-feeling eyes, eye drops can be a useful add-on paired with one of those.',
      },
      {
        q: 'Can I ship a Christmas gift directly to my uncle?',
        a: 'Yes. Put his name and address in the shipping fields and your own email at checkout so the confirmation, with prices, comes to you. Order early, since no delivery date is promised.',
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-son-in-law',
    title: 'Christmas gifts for a son-in-law',
    description:
      'Christmas gift ideas for a son-in-law: ask your daughter or son, match his routine, give a couple’s gift when unsure. When eye drops fit and what to check.',
    category: 'seasonal',
    addedOn: '2026-11-22',
    body: [
      {
        p: `The easiest way to choose a Christmas gift for a son-in-law is to ask your daughter or son what he’d use, then match his routine: his commute, his desk job, his hobbies or a new baby at home. Practical gifts that make his days easier land well. If he’s mentioned dry or screen-tired eyes, a lubricating eye drop can be part of a thoughtful bundle, as long as you check the label first.`,
      },
      { h: 'Ask your child, quietly' },
      {
        p: `Your daughter or son sees his daily life up close. They know whether he’s been grumbling about the glare on his commute, whether he wears contact lenses, and whether the gift you’re considering is already in a drawer. Ask early in December, and ask specific questions: what does he use every day that’s wearing out, and what does he complain about? That gets you further than “what does he want?”`,
      },
      { h: 'Gifts that fit his routine' },
      {
        list: [
          `The commuter: polarized sunglasses, a good travel mug, a phone mount, or a gift card for audiobooks.`,
          `The desk worker: a monitor stand, a desk lamp with a warm setting, noise-canceling headphones, or a small desk humidifier.`,
          `The outdoorsman: wraparound sunglasses, a warm hat, hand warmers, or a camp chair.`,
          `The gamer: a comfortable headset, a controller charging stand, or a good lamp for the room so he isn’t gaming in the dark. [Christmas gifts for a gamer](/guides/christmas-gifts-for-a-gamer) has more.`,
          `The cook: a good knife, a cutting board, or a thermometer for the grill.`,
        ],
      },
      { h: 'For a new dad' },
      {
        p: `If there’s a new baby at home, sleep is short and screens glow at odd hours during late-night feedings. Gifts that make that stretch easier are welcome: a meal delivery gift card, a dim nightlight, a comfortable robe, or an offer to babysit so the couple can get out. Short nights can leave eyes feeling dry and gritty, so a bottle of eye drops for the parents’ nightstand can be a kind addition. Quell’s label gives no directions for children, so it’s for the adults only. See [Christmas gifts for new parents](/guides/christmas-gifts-for-new-parents) for more.`,
      },
      { h: 'A gift from both of you, or for both of them' },
      {
        p: `If you’re unsure, a couple’s gift avoids the guesswork: a restaurant gift card, tickets to a show, a weekend of house-sitting, or something for their home. Many in-laws give one gift to the couple plus a small personal item to each. A small personal item for him might be the sunglasses or a book, with a bottle of drops tucked in if he’s mentioned dry eyes.`,
      },
      { h: 'Is it odd to give a son-in-law eye drops?' },
      {
        p: `On its own, it can feel like a comment on his health, which isn’t the mood you want at Christmas. As part of a practical bundle, after he’s mentioned that his eyes feel dry at the end of a workday, it shows you were listening. Add a short note: “You mentioned your eyes after those long days at the screen.” If your child says he’d find it strange, skip it. [Are eye drops a good gift?](/guides/are-eye-drops-a-good-gift) covers when it works.`,
      },
      { h: 'What to check on the label first' },
      {
        p: `Before you buy Quell for anyone, a few points on the label matter:`,
      },
      {
        list: [
          `Contact lenses. Many younger adults wear them, and the label gives no directions for lens wearers. Ask your child; if he wears lenses, he should check with his eye doctor first.`,
          `Allergies. The label warns: {warnings}. An egg or bird allergy rules it out.`,
          `Other eye drops. If he uses a prescribed drop, the label doesn’t cover using another; his doctor or pharmacist can advise.`,
          `Use. The directions are short: {directions}. The full panel is on the [Drug Facts page](/drug-facts).`,
        ],
      },
      { h: 'Shipping it to their home' },
      {
        p: `If you won’t be together at Christmas, ship the gift to their address with your own email at checkout, so the confirmation, which shows the prices, comes to you. [Will the gift recipient see the price?](/guides/will-the-gift-recipient-see-the-price) explains what each email shows. Quell ships from Brentwood, Tennessee, to any US address; shipping is {shipping}, and {freeBottles} or more bottles ship free. No delivery date is promised, so order well before the holidays. If the gift doesn’t suit and the bottle is still sealed, you can request a refund within {returnDays} days of delivery, and nobody has to send it back.`,
      },
      { h: 'More holiday ideas' },
      {
        p: `If you’re shopping for the rest of the family too, our [gift and holiday guides](/guides/topic/seasonal) are sorted by recipient. [Christmas gifts for a father-in-law](/guides/christmas-gifts-for-a-father-in-law) looks at the same relationship from the other direction.`,
      },
    ],
    faq: [
      {
        q: 'What should I get my son-in-law for Christmas?',
        a: 'Ask your daughter or son what he uses every day and what he complains about, then pick something practical for his routine, such as sunglasses for the commute or a desk lamp.',
      },
      {
        q: 'How much should you spend on a son-in-law for Christmas?',
        a: 'There’s no rule. Many families keep it in line with what they spend on their own children, or give one gift to the couple plus a small item for each person.',
      },
      {
        q: 'Is it okay to give a son-in-law eye drops as a gift?',
        a: 'It works well as part of a practical bundle, after he’s mentioned dry or screen-tired eyes. Check with your child about contact lenses and allergies before buying.',
      },
    ],
  },
]
