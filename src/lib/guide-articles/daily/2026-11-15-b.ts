import type { Guide } from '@/lib/guide-types'
export const DAILY_20261115_B: Guide[] = [
  /*
   * Sources fetched 2026-11-15 for dry-eye-relief-provo-ut:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USC00427064.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USC00427064.csv
   *   (PROVO BYU, UT, elev 1392.9 m: annual precip 17.19 in; Jun-Aug 2.17 in; Jul 0.51,
   *   Aug 0.73, Jun 0.93; annual snow 44.9 in, Jan 12.5, Dec 11.2, Feb 8.7, Nov 4.6;
   *   Jul high 95.2 F, low 62.3; Aug high 92.9; Jan high 41.2, low 23.8; 73.5 days at
   *   or above 90 F; 9.3 days at or above 100 F; 111.2 nights at or below 32 F;
   *   12.5 days with a high at or below 32 F; annual mean daily range 25.8 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (No Provo row. SALT LAKE CITY, UT, WBAN 24127: Jun 53/25, Jul 47/21, Aug 48/23,
   *   Sep 55/29, Dec 77/72, Jan 78/70, annual 63/43, morning/afternoon)
   * Elevation is the NOAA station elevation, converted (1392.9 m is about 4,570 ft).
   */
  {
    slug: 'dry-eye-relief-provo-ut',
    title: 'Dry eye relief in Provo, Utah',
    description:
      'Provo sits near 4,570 feet, and nearby Salt Lake City’s July afternoons average 21 percent humidity. What NOAA’s numbers mean for dry eyes in Utah Valley.',
    category: 'local',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Dry eye relief in Provo starts with the air. The city sits around 4,570 feet, July afternoons up the Wasatch Front average about 21 percent humidity, and winter brings weeks of furnace heat. Blink fully at screens, keep vents off your face, wear sunglasses in canyon wind, and use a lubricating drop as its label directs. Eye pain, vision changes or dryness that won’t settle belong with an eye doctor.`,
      },
      { h: 'Why Provo air is hard on your eyes' },
      {
        p: `Provo is high desert with a lake and a mountain range attached. NOAA’s 1991 to 2020 climate normals for the Provo BYU weather station, on the east bench below Y Mountain, describe a place that is dry most of the year and very dry in summer:`,
      },
      {
        list: [
          `Normal precipitation is 17.19 inches a year, well under half of what falls in much of the eastern United States.`,
          `June, July and August together bring only 2.17 inches, and July alone averages 0.51 inches.`,
          `The station sits at 1,392.9 meters, which works out to roughly 4,570 feet above sea level.`,
          `Normal snowfall is 44.9 inches, with January (12.5 inches) and December (11.2) the snowiest months.`,
          `The average gap between the day’s high and low is about 26°F, a sign of thin, dry air that heats and cools fast.`,
        ],
      },
      {
        p: `Thin, dry air pulls moisture from any wet surface quickly, and the front of your eye is a wet surface. The tear film has an oil layer on top that slows that evaporation, a watery middle and a mucus layer against the eye. When the air is this dry, every one of those layers is working harder.`,
      },
      { h: 'Summer afternoons near 20 percent' },
      {
        p: `NOAA’s relative humidity table doesn’t list Provo, so the closest station it does list, Salt Lake City, up the valley, is the stand-in. There, July afternoons average 21 percent humidity and August 23 percent. June isn’t much better at 25 percent. Mornings are roughly twice as damp, which is why eyes can feel fine on an early walk along the Provo River Trail and gritty by mid-afternoon.`,
      },
      {
        p: `Heat adds to it. The BYU station’s normal July high is 95.2°F, and Provo logs about 73 days a year at 90°F or warmer, with around 9 that reach 100°F. A few habits that help through the hot months:`,
      },
      {
        list: [
          `Hike Y Mountain or the Bonneville Shoreline Trail early, before the humidity drops into the 20s.`,
          `Wear wraparound sunglasses on Utah Lake, where wind travels a long way across open water.`,
          `Point the car’s air conditioning at your chest, not your eyes, on the drive down Provo Canyon.`,
          `Keep a water bottle handy; long, hot afternoons dry everything, eyes included.`,
        ],
      },
      { h: 'Winter inversions, snow and furnace air' },
      {
        p: `From November on, the problem moves indoors. The BYU station averages 111 nights a year at or below freezing and about a dozen days when the high stays at 32°F or lower. Furnaces in Provo run for months. Warming cold winter air without adding water drops its relative humidity sharply, so a dorm room or a house in Edgemont can feel parched while snow piles up outside. Outdoor afternoon humidity at Salt Lake City actually climbs to around 72 percent in December, which surprises people whose eyes feel worst in winter.`,
      },
      {
        p: `Ski days at Sundance or a weekend up the canyon add cold wind and glare off snow. Goggles block more of both than sunglasses do. At home, a humidifier in the bedroom and a closed register near the couch go a long way; our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more room-by-room ideas.`,
      },
      { h: 'Study sessions and screen time in Provo' },
      {
        p: `Provo is a college town, and long hours in a library carrel or at a laptop add a second dry-eye factor on top of the climate. People blink less when they’re concentrating on a screen, and the blinks they do make are often partial. Each full blink spreads a fresh layer of tears; without them, the film thins and breaks up. During finals week, set a timer every 20 minutes to look across the room and blink fully a few times. Our guide on [dry air, wind and altitude](/guides/dry-air-wind-and-altitude) explains how elevation and screens combine.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel states the Uses as: {uses}. The directions are: {directions}. While using it, follow this line every time: {tip}.`,
      },
      {
        p: `Read the warning before the first drop: {warnings}. Storage matters in Utah because a car parked at a trailhead in July and a car left outside on a January night both go well outside the label’s range: {storage}. Carry the bottle in a bag that comes inside with you. Everything else on the panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering eye drops to Provo' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Provo, Orem and the rest of Utah County. Checkout works as a guest, shipping is {shipping}, and {freeBottles} or more bottles ship free. You get a tracking email once it’s on its way, though no delivery date is promised, so order before the bottle runs low. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. See the [Provo page](/eye-drops/provo-ut), the [Utah page](/eye-drops/state/utah), or order from the [home page](/#buy).`,
      },
      { h: 'When to see an eye doctor in Utah Valley' },
      {
        p: `Drops are for everyday dryness. If symptoms keep returning or getting worse, working out the cause and what to do about it is an eye doctor’s job. The label is direct about when to stop: {stopUse}`,
      },
      {
        p: `Pain, a change in how you see, or one eye that’s much worse than the other all call for an appointment, not another bottle. The [dry eye self-check](/self-check) can help you describe what you’re feeling before the visit; it’s not a diagnosis. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the urgent ones.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Provo?',
        a: `Provo sits around 4,570 feet with about 17 inches of precipitation a year, and nearby Salt Lake City’s summer afternoons average roughly 21 to 25 percent humidity in NOAA’s table. Furnace heat dries indoor air through the long winter as well.`,
      },
      {
        q: 'How much snow does Provo get a year?',
        a: `NOAA’s 1991 to 2020 normals for the Provo BYU station give about 44.9 inches of snow in a typical year, with January and December the snowiest months at 12.5 and 11.2 inches.`,
      },
      {
        q: 'What is the elevation of Provo, Utah?',
        a: `NOAA lists the Provo BYU weather station at 1,392.9 meters, or about 4,570 feet. Higher, thinner air dries the eyes faster than air at sea level.`,
      },
      {
        q: 'Can I get Quell eye drops delivered in Provo?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Provo and anywhere else in the United States, with guest checkout and a tracking email. No delivery date is promised, so order a little ahead.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-15 for dry-eye-relief-midland-tx:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00023023.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00023023.csv
   *   (MIDLAND ODESSA, TX [Midland International Air and Space Port], elev 874.2 m:
   *   annual precip 13.51 in; Dec-Feb 1.83 in; Jun-Aug 5.14 in; Feb 0.58, Dec 0.59,
   *   Jan 0.66, Mar 0.68, Apr 0.70, Jun 1.80; annual snow 4.3 in; Jul high 95.8 F,
   *   Jun 95.0; Jan high 58.6, low 32.7; 115.2 days at or above 90 F; 23.8 days at or
   *   above 100 F; 57.8 nights at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (MIDLAND-ODESSA, TX, WBAN 23023: Mar 66/36, Apr 66/34, May 73/37, Jun 75/41,
   *   Jul 72/42, Sep 78/48, Dec 72/45, Jan 71/46, annual 72/42, morning/afternoon)
   * Elevation is the NOAA station elevation, converted (874.2 m is about 2,870 ft).
   * Dust storms dropped: no official count checked today.
   */
  {
    slug: 'dry-eye-relief-midland-tx',
    title: 'Dry eye relief in Midland, Texas',
    description:
      'Midland gets about 13.5 inches of rain a year and April afternoons average 34 percent humidity. NOAA’s Permian Basin numbers and what helps dry eyes there.',
    category: 'local',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Midland is one of the drier cities in Texas: about 13.5 inches of precipitation a year, spring afternoons in the mid-30s for humidity, and more than 115 days a year at 90°F or hotter. To ease dry eyes there, keep truck vents off your face, wear sealed sunglasses in wind, take screen breaks, and use a lubricating drop exactly as its label says. Pain or vision changes need an eye doctor.`,
      },
      { h: 'How dry is Midland, Texas?' },
      {
        p: `Very dry by Texas standards. NOAA’s 1991 to 2020 normals for the airport weather station that serves Midland and Odessa put the year’s precipitation at 13.51 inches. Houston gets close to four times that. The details show where the dry stretches fall:`,
      },
      {
        list: [
          `December, January and February bring 1.83 inches between them, so winter is the driest season.`,
          `February averages 0.58 inches and December 0.59, the two lowest months on the calendar.`,
          `Most of the rain comes from late spring into early fall, with June the wettest month at 1.80 inches.`,
          `Snowfall is light, about 4.3 inches in a normal year.`,
          `The station sits at 874.2 meters, close to 2,870 feet, on the flat caprock of the Permian Basin.`,
        ],
      },
      { h: 'Spring wind and the driest afternoons' },
      {
        p: `NOAA’s relative humidity table for Midland-Odessa shows the driest afternoons in spring, not summer. April averages 34 percent, March 36 and May 37. Summer afternoons sit around 41 to 42 percent because that’s when most of the rain falls. Across the year, mornings average 72 percent and afternoons 42, so the drop between breakfast and mid-afternoon is large every season.`,
      },
      {
        p: `Wind makes low humidity worse, because moving air across the eye pulls moisture from the tear film faster than still air does. On the flat, open caprock, with few trees, there’s little to break a gusty day. Some practical steps for March through May:`,
      },
      {
        list: [
          `Wear wraparound or foam-lined sunglasses on lease roads and job sites, where wind carries grit.`,
          `Keep the truck windows up on gusty days and run the fan on recirculate rather than straight at your face.`,
          `Rinse your face and hands before touching your eyes after a day outdoors.`,
          `Keep drops in the cab only if the cab stays inside the label’s storage range, which it often won’t.`,
        ],
      },
      { h: 'Oilfield hours, long drives and dry eyes' },
      {
        p: `A lot of Midland workdays involve a windshield, a screen, or both. Long highway stretches on Interstate 20 or out to remote well sites mean hours of staring ahead, and drivers blink less while concentrating. Control rooms and office towers downtown add monitors and air conditioning. Each habit works against the same thing: a tear film that needs regular full blinks to stay even.`,
      },
      {
        p: `On a long drive, a rest stop every couple of hours gives your eyes a break along with your back. At a desk, look away from the screen every 20 minutes and blink deliberately a few times. Our guide for [outdoor workers](/guides/dry-eyes-for-outdoor-workers) goes further into job-site habits.`,
      },
      { h: 'Heat: 115 days at 90°F or hotter' },
      {
        p: `Midland’s airport station records about 115 days a year at 90°F or above, and nearly 24 that reach 100°F. July’s normal high is 95.8°F. That much heat has two effects on eyes. First, it means air conditioning runs most of the year indoors and in vehicles, and cooled air tends to be dry air. Second, a bottle of eye drops left on a dashboard can get far hotter than the label allows: {storage}. Bring the bottle inside with you, the same way you would a phone.`,
      },
      { h: 'Winter in the Permian Basin' },
      {
        p: `Winter is short but real. January’s normal low is 32.7°F, and the station counts about 58 nights a year at freezing or below. Heaters come on at home and in the truck, and outdoors the air is at its driest by rainfall. Afternoon humidity in January averages 46 percent, a little higher than spring, but heated indoor air can sit far below that. A small humidifier in the bedroom and a vent turned away from your pillow can help. See [does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) for what to look for.`,
      },
      { h: 'What the Quell label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses as: {uses}. The directions say: {directions}. And one handling rule applies every time: {tip}.`,
      },
      {
        p: `Before the first use, read the caution: {warnings}. The label doesn’t give directions for contact lens wearers or for use alongside other eye drops. Ask your eye doctor or a pharmacist about either. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell delivered in Midland' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Midland, Odessa and the rest of Texas. No account is needed. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. A tracking email follows once the package leaves, but no delivery date is promised, so order before you run out. Unopened bottles are refundable within {returnDays} days of delivery, and you don’t send them back. See the [Midland page](/eye-drops/midland-tx), the [Texas page](/eye-drops/state/texas), or buy from the [home page](/#buy).`,
      },
      { h: 'When dryness needs a doctor' },
      {
        p: `Eye drops help with everyday dryness and irritation. Symptoms that keep coming back are worth an exam, where an eye doctor can work out the cause and what to do about it. The label is specific: {stopUse}`,
      },
      {
        p: `Grit or metal in the eye from a job site is not a job for lubricating drops. Get it looked at right away. For everything else, the [dry eye self-check](/self-check) can help you organize your symptoms before an appointment; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Does Midland, Texas have low humidity?',
        a: `Yes, especially in spring. NOAA’s table gives Midland-Odessa an April afternoon average of 34 percent humidity and an annual afternoon average of 42 percent, with mornings much damper at around 72 percent.`,
      },
      {
        q: 'How much rain does Midland, TX get a year?',
        a: `About 13.51 inches in a normal year, based on NOAA’s 1991 to 2020 normals for the Midland-Odessa airport station. Winter is driest, with December through February totaling 1.83 inches.`,
      },
      {
        q: 'How many 100 degree days does Midland have?',
        a: `NOAA’s normals count about 24 days a year at 100°F or higher at the Midland-Odessa airport station, and about 115 days at 90°F or higher.`,
      },
      {
        q: 'Can Quell be shipped to Midland or Odessa?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to addresses in Midland, Odessa and across the United States. Checkout works as a guest, and a tracking email follows, though no delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-15 for dry-eye-relief-san-antonio-tx:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00012921.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00012921.csv
   *   (SAN ANTONIO INTL AP, elev 240.5 m: annual precip 32.38 in; May 4.40, Sep 3.88,
   *   Oct 3.75, Feb 1.74, Jan 1.96, Jul 2.41, Aug 2.15; Aug high 96.0 F, Jul 94.9;
   *   Aug low 74.9; Jan high 63.3, low 41.0; 122.4 days at or above 90 F; 17.7 days at
   *   or above 100 F; 14.0 nights at or below 32 F; snow 0.2 in)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (SAN ANTONIO, TX, WBAN 12921: Jan 79/57, Jul 87/52, Aug 86/50, Sep 85/54,
   *   annual 83/55, morning/afternoon)
   * Elevation is the NOAA station elevation, converted (240.5 m is about 790 ft).
   */
  {
    slug: 'dry-eye-relief-san-antonio-tx',
    title: 'Dry eye relief in San Antonio, Texas',
    description:
      'San Antonio sees about 122 days a year at 90°F or hotter, so air conditioning runs most of the year. NOAA’s numbers and dry eye habits for the Alamo City.',
    category: 'local',
    addedOn: '2026-11-15',
    body: [
      {
        p: `In San Antonio, dry eyes usually come from heat and the air conditioning it demands, not from dry outdoor air. The airport averages about 122 days a year at 90°F or hotter, and August afternoons settle near 50 percent humidity. Aim vents away from your face, blink fully during screen work, carry sunglasses, and use a lubricating drop only as its label directs. See an eye doctor for pain or vision changes.`,
      },
      { h: 'San Antonio’s climate by the numbers' },
      {
        p: `San Antonio sits where the Hill Country meets the South Texas brush country, and its weather borrows from both. NOAA’s 1991 to 2020 normals for San Antonio International Airport give a picture of a long, hot warm season and a mild winter:`,
      },
      {
        list: [
          `About 122 days a year reach 90°F or more, and close to 18 reach 100°F.`,
          `August is the hottest month, with a normal high of 96.0°F and a low near 75°F.`,
          `Normal precipitation is 32.38 inches a year, with May (4.40 inches) and September (3.88) the wettest months.`,
          `Winter is gentle. January’s normal high is 63.3°F and the airport averages just 14 nights a year at freezing or below.`,
          `The station sits at about 790 feet, on gently rolling ground north of downtown.`,
        ],
      },
      { h: 'Is San Antonio humid or dry?' },
      {
        p: `Somewhere in between, and it depends on the hour. NOAA’s relative humidity table gives the city a morning average of 83 percent across the year and an afternoon average of 55. In August, mornings start at 86 percent and afternoons fall to about 50. That swing is why a morning run along the Mission Reach can feel muggy and a 4 p.m. walk from a parking garage can feel like a hair dryer.`,
      },
      {
        p: `Outdoor humidity in the 50s isn’t especially hard on eyes by itself. The bigger factor is how much of the day San Antonians spend in cooled air.`,
      },
      { h: 'Air conditioning for most of the year' },
      {
        p: `With normal highs above 80°F from April through October, air conditioning in San Antonio runs for most of the year. Cooling air wrings water out of it, and the fans that move it blow straight across your face if a vent is pointed the wrong way. Office workers at a desk under a ceiling diffuser, drivers with the dash vents aimed up, and people sleeping under a ceiling fan all get a steady breeze that speeds evaporation from the tear film.`,
      },
      {
        list: [
          `In the car, angle dash vents toward your chest or the windshield instead of your eyes.`,
          `At work, ask whether a diffuser over your desk can be redirected, or move the monitor so you aren’t facing the airflow.`,
          `At night, turn the ceiling fan down or off once the room has cooled.`,
          `Keep a glass of water at your desk; you’re more likely to take breaks, and those are blink breaks too.`,
        ],
      },
      { h: 'Sun, glare and outdoor plans' },
      {
        p: `San Antonio’s outdoor life runs on shade: the River Walk’s cypress trees, the missions’ stone courtyards, and Hill Country swimming holes on summer weekends. Glare off water and pale limestone makes people squint, and squinting tends to cut blinks short. Good sunglasses with side coverage help with glare and with the wind on a boat or a bike ride along the Salado Creek Greenway. A brimmed hat does more than you’d expect.`,
      },
      {
        p: `Fiesta in April and summer weekend trips to the coast can mean long days outside. Plan breaks indoors and keep your drops in a bag rather than a hot car. The label sets a storage range, and a parked car in August blows through it: {storage}.`,
      },
      { h: 'Winter fronts and heated rooms' },
      {
        p: `A San Antonio winter is mostly mild, but cold fronts can drop temperatures sharply for a few days at a time. When the heater kicks on, indoor air dries out quickly. January afternoons outdoors average 57 percent humidity, so the outside air isn’t the issue; a forced-air system running hard is. The airport’s 14 or so freezing nights are when it’s most noticeable. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has room-by-room ideas.`,
      },
      { h: 'What Quell is and what the label says' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts Uses read: {uses}. The directions read: {directions}. One handling rule: {tip}.`,
      },
      {
        p: `There’s one caution to check first: {warnings}. The bottle is {size}. The label doesn’t give directions for contact lenses, children or combining it with other eye drops, so ask an eye doctor or pharmacist before using it in any of those situations. You can read every line on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering to San Antonio' },
      {
        p: `Quell ships from Brentwood, Tennessee, to San Antonio, New Braunfels, Boerne and anywhere else in Texas. Check out as a guest; shipping is {shipping}, or free on {freeBottles} or more bottles. A tracking email arrives once it ships, but no delivery date is promised, so give yourself some room. If a bottle stays unopened, it’s refundable within {returnDays} days of delivery and you keep it. See the [San Antonio page](/eye-drops/san-antonio-tx), the [Texas page](/eye-drops/state/texas), or the [home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A lubricating drop is for ordinary dryness. If yours keeps coming back no matter what you change, an eye doctor can work out the cause and what to do about it. The label says when to stop: {stopUse}`,
      },
      {
        p: `Before the appointment, our [dry eye self-check](/self-check) can help you put words to your symptoms; it’s not a diagnosis. Sudden pain or a change in vision means calling a doctor that day.`,
      },
    ],
    faq: [
      {
        q: 'Is San Antonio humid or dry?',
        a: `In between. NOAA’s table gives San Antonio an average morning humidity of 83 percent and an afternoon average of 55 percent across the year, falling to about 50 percent on August afternoons.`,
      },
      {
        q: 'How many days over 90 degrees does San Antonio get?',
        a: `About 122 a year at San Antonio International Airport, based on NOAA’s 1991 to 2020 normals. Around 18 of those reach 100°F.`,
      },
      {
        q: 'Why do my eyes feel dry in air conditioning?',
        a: `Air conditioning removes moisture as it cools, and its fans push that drier air across your face. Both speed evaporation from the tear film, so aim vents away from your eyes and take regular blink breaks.`,
      },
      {
        q: 'Does Quell ship to San Antonio, Texas?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to San Antonio and the rest of the United States. You can check out as a guest and follow the package with the tracking email.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-15 for dry-eye-relief-austin-tx:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013958.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013958.csv
   *   (AUSTIN-CAMP MABRY, TX, elev 204.2 m: annual precip 36.25 in; May 5.04, Oct 3.91,
   *   Jul 1.96, Feb 1.89; Aug high 97.8 F, Jul 96.6; Jan high 62.5, low 41.8;
   *   122.8 days at or above 90 F; 28.7 days at or above 100 F; 11.9 nights at or
   *   below 32 F)
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013904.csv
   *   (AUSTIN BERGSTROM AP, elev 146.3 m: 24.2 days at or above 100 F; 33.0 nights at
   *   or below 32 F; Jan low 37.7 F; annual precip 35.57 in)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (AUSTIN, TX, WBAN 13958: Jan 79/59, Jun 89/55, Jul 88/50, Aug 86/49,
   *   Sep 85/53, annual 83/55, morning/afternoon)
   * Elevation is the NOAA station elevation, converted (204.2 m is about 670 ft).
   */
  {
    slug: 'dry-eye-relief-austin-tx',
    title: 'Dry eye relief in Austin, Texas',
    description:
      'Austin averages nearly 29 days a year at 100°F, and August afternoons drop to 49 percent humidity. What NOAA’s Camp Mabry records mean for dry, tired eyes.',
    category: 'local',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Austin’s dry-eye pressure comes from long, hot summers, hours of screen work and air conditioning that rarely shuts off. NOAA’s Camp Mabry station averages almost 29 days a year at 100°F, and August afternoons fall to about 49 percent humidity. Keep cooled air off your face, take blink breaks from the monitor, protect your eyes on the water, and use a lubricating drop as its label directs.`,
      },
      { h: 'Austin weather, from Camp Mabry' },
      {
        p: `Austin’s long-running climate record comes from Camp Mabry, the Texas Military Department post in central Austin. NOAA’s 1991 to 2020 normals there describe a city that is hot for a long stretch of the year and only briefly cold:`,
      },
      {
        list: [
          `Nearly 123 days a year reach 90°F or more.`,
          `About 29 days reach 100°F, more than San Antonio or Dallas Fort Worth average at their airports.`,
          `August is the hottest month, with a normal high of 97.8°F.`,
          `Normal precipitation is 36.25 inches, with May the wettest month at 5.04 inches and July the driest at 1.96.`,
          `The station sits at about 670 feet, at the eastern edge of the Hill Country.`,
        ],
      },
      { h: 'Camp Mabry or the airport: why the numbers differ' },
      {
        p: `Austin has two main weather stations, and they don’t agree on winter. Camp Mabry, surrounded by the city, averages about 12 nights a year at freezing or below. Austin-Bergstrom International Airport, out in open country southeast of downtown, averages 33. Bergstrom also sees fewer 100°F days, about 24 a year. Urban heat holds warmth in the middle of town, so whether your winter mornings feel raw depends partly on whether you live near downtown or out toward Del Valle.`,
      },
      {
        p: `For eyes, that means heaters run more often on the city’s outer edges, and indoor air there gets drier on cold mornings.`,
      },
      { h: 'Summer afternoons and the humidity drop' },
      {
        p: `NOAA’s relative humidity table for Austin shows a summer pattern people feel without knowing the numbers. June mornings average 89 percent and afternoons 55. By August, afternoons are down to 49 percent. The mornings are sticky, so many people assume their eyes can’t be drying out. They can, because by mid-afternoon the outdoor air is drier, much hotter, and nearly everyone has retreated into air conditioning.`,
      },
      {
        list: [
          `Run, bike or paddle early, when the humidity is high and the sun is low.`,
          `Wear sunglasses on Lady Bird Lake and Lake Travis, where glare and wind off the water add up.`,
          `After a swim at Barton Springs, rinse your face with fresh water before touching your eyes.`,
          `Bring drops in a bag with you instead of leaving them in a parked car, which can top the label’s storage range: {storage}.`,
        ],
      },
      { h: 'Screens, open offices and remote work' },
      {
        p: `Austin is a city of laptops, from downtown towers and the Domain to coffee shops on South Congress. Screen work cuts blinking, and the blinks you do make while concentrating are often partial, so the tear film doesn’t get fully refreshed. Air-conditioned offices with ceiling diffusers add a breeze. A few changes help:`,
      },
      {
        list: [
          `Every 20 minutes, look at something across the room for about 20 seconds and blink fully a few times.`,
          `Set the monitor slightly below eye level so your eyes aren’t opened as wide.`,
          `Turn a desk fan so it blows across your body, not your face.`,
          `Step outside, or at least away from the desk, at lunch.`,
        ],
      },
      {
        p: `Our guide to [dry eyes at the end of the day](/guides/dry-eyes-at-the-end-of-the-day) covers the late-afternoon slump that many desk workers notice.`,
      },
      { h: 'Festival season and long days outdoors' },
      {
        p: `Spring and fall festivals in Zilker Park mean whole days in the sun, dust from trampled grass, and late nights. Sunglasses and a hat cut glare, and a break in the shade every hour or two gives your eyes some rest. Keep a bottle of water handy, and pack eye drops inside a bag rather than a back pocket in the sun.`,
      },
      { h: 'Quell’s label, in brief' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. According to its Drug Facts panel, it’s {uses}. Directions: {directions}. Handling: {tip}.`,
      },
      {
        p: `One caution comes first: {warnings}. The label is silent on contact lenses, children and using it with other eye drops, so check with an eye doctor or pharmacist before any of those. The whole panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Austin' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Austin, Round Rock, Pflugerville and the rest of Texas. Guest checkout means no account. Shipping costs {shipping}, and {freeBottles} or more bottles ship free. You’ll get tracking by email once it ships; no delivery date is promised, so plan a little ahead. Unopened bottles are refundable within {returnDays} days of delivery, with nothing to mail back. Visit the [Austin page](/eye-drops/austin-tx), the [Texas page](/eye-drops/state/texas), or the [home page](/#buy).`,
      },
      { h: 'When to see an eye doctor in Austin' },
      {
        p: `If dryness keeps returning despite changes at home and work, book an eye exam so a doctor can work out the cause and what to do about it. The label is clear about when to stop and ask a doctor: {stopUse}`,
      },
      {
        p: `Sudden pain, blurred or changed vision, or an injury from a ball, branch or paddle needs prompt care, not drops. The [self-check](/self-check) can help you describe ongoing symptoms; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How many 100 degree days does Austin get a year?',
        a: `NOAA’s 1991 to 2020 normals for Camp Mabry average about 29 days a year at 100°F or higher. Austin-Bergstrom airport averages about 24.`,
      },
      {
        q: 'Why are there two weather stations in Austin?',
        a: `Camp Mabry is the long-running official city record, and Austin-Bergstrom International Airport is the newer airport station. Camp Mabry sits in town and records far fewer freezing nights, about 12 a year compared with 33 at the airport.`,
      },
      {
        q: 'Why do my eyes get dry working from a laptop?',
        a: `People blink less when concentrating on a screen, and many blinks are only partial, so tears aren’t spread evenly. Regular breaks to look away and blink fully, with air vents and fans kept off your face, can help.`,
      },
      {
        q: 'Can I order Quell to Austin, TX?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Austin and every other US address it serves, with guest checkout and a tracking email. Delivery dates aren’t promised, so order before you run out.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-15 for dry-eye-relief-houston-tx:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00012960.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00012960.csv
   *   (HOUSTON INTERCONT AP, elev 29.0 m: annual precip 51.84 in; Jun 6.00, Oct 5.46,
   *   May 5.01, Feb 2.97; 64.4 days with 0.10 in or more; Aug high 94.9 F, Jul 94.5;
   *   Jan high 63.8, low 43.7; 111.3 days at or above 90 F; 7.0 days at or above 100 F;
   *   10.1 nights at or below 32 F)
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00012918.csv
   *   (HOUSTON HOBBY AP, elev 13.4 m: annual precip 55.62 in; 100.5 days at or above
   *   90 F; 4.2 nights at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (HOUSTON, TX, WBAN 12960: Jan 85/62, Jul 93/57, Aug 93/56, annual 89/59,
   *   morning/afternoon)
   * Elevation is the NOAA station elevation, converted (29.0 m is about 95 ft).
   */
  {
    slug: 'dry-eye-relief-houston-tx',
    title: 'Dry eye relief in Houston, Texas',
    description:
      'Houston mornings average 89 percent humidity, yet dry eyes are common. NOAA’s numbers show why: air conditioning runs nearly all year. What helps indoors.',
    category: 'local',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Houston’s outdoor air is humid, with mornings averaging 89 percent in NOAA’s records, so dry eyes there usually start indoors. Air conditioning runs for most of the year, and its cooled, drier air blows across faces at desks, in cars and in bedrooms. Redirect vents and ceiling fans, take screen breaks, and use a lubricating drop as its label directs. Pain or vision changes need an eye doctor.`,
      },
      { h: 'Houston is humid, so why are my eyes dry?' },
      {
        p: `NOAA’s relative humidity table for Houston Intercontinental Airport gives an average of 89 percent in the morning and 59 percent in the afternoon across the year. In July and August, mornings run at 93 percent. That is humid air by any measure, and the tear film loses water slowly in it.`,
      },
      {
        p: `The trouble is how little of the day most Houstonians spend in that air. Commutes happen in cooled cars, workdays happen in cooled offices, and nights happen in cooled bedrooms. An air conditioner works by pulling heat and water out of the air it moves, and its fans push that drier air across the room. Spend nine hours with a ceiling diffuser over your desk and your eyes have been in a very different climate from the one on the weather app.`,
      },
      { h: 'Heat that keeps the air conditioning on' },
      {
        p: `NOAA’s 1991 to 2020 normals for Intercontinental, north of the city, show why the compressor rarely rests:`,
      },
      {
        list: [
          `About 111 days a year reach 90°F or higher; Hobby Airport, closer to the bay, averages about 100.`,
          `August’s normal high is 94.9°F, with July close behind.`,
          `Even January averages a high of 63.8°F, so warm spells and the cooling that goes with them can show up in any month.`,
          `Freezing nights are rare: about 10 a year at Intercontinental and 4 at Hobby.`,
        ],
      },
      {
        p: `Put together, that adds up to a cooling season measured in months, with only short breaks when a front comes through.`,
      },
      { h: 'Making air conditioning easier on your eyes' },
      {
        p: `You don’t have to sweat to save your eyes. Small changes in where the air goes do most of the work:`,
      },
      {
        list: [
          `In the car, close or angle the center vents so they hit your chest, and use the floor setting when it’s cool enough.`,
          `At the office, check the ceiling for a diffuser aimed at your chair. Facilities teams can often adjust the louvers.`,
          `At home, set the bedroom ceiling fan to a lower speed, or turn it off once the room is cool.`,
          `Change the air filter on schedule; a clogged system runs longer to reach the same temperature.`,
          `Use a small humidifier in a bedroom only if the room feels dry; Houston homes rarely need much added moisture.`,
        ],
      },
      { h: 'Rain, flooding and outdoor time' },
      {
        p: `Houston gets about 52 inches of rain a year at Intercontinental and closer to 56 at Hobby, with June the wettest month. Intercontinental averages around 64 days a year with a tenth of an inch or more. Rain itself doesn’t dry eyes, but storms and flooding can bring dirty water and debris. If floodwater or anything from it splashes into your eyes, rinse with clean water and call a doctor rather than reaching for lubricating drops.`,
      },
      {
        p: `On clear days, glare off concrete, Galveston Bay and the water along Buffalo Bayou makes people squint. Sunglasses with side coverage help with glare and with the breeze on a boat or at a ballgame.`,
      },
      { h: 'Long shifts in the Medical Center and the energy corridor' },
      {
        p: `A big share of Houston works long, focused shifts: hospital floors in the Texas Medical Center, control rooms along the Ship Channel, trading desks on the west side. Focused work means fewer blinks, and these buildings are kept cold. Setting a reminder to look away from screens every 20 minutes and blink fully a few times costs almost nothing. Our guide to [dry eyes on long nursing shifts](/guides/dry-eyes-on-long-nursing-shifts) has more for hospital workers.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label’s Uses line reads: {uses}. Directions: {directions}. A handling rule worth keeping: {tip}.`,
      },
      {
        p: `Check the caution before using it: {warnings}. Because a parked car in a Houston summer gets far hotter than the label allows, follow the storage line too: {storage}. The label doesn’t cover contact lenses or using Quell alongside other eye drops; ask your eye doctor or pharmacist. Every line is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering eye drops in Houston' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Houston, Katy, Sugar Land, Pasadena and the rest of the metro. Checkout works as a guest. Shipping is {shipping}, and free on {freeBottles} or more bottles. Tracking arrives by email, but no delivery date is promised, so don’t wait until the last drop. Unopened bottles can be refunded within {returnDays} days of delivery, without returning them. See the [Houston page](/eye-drops/houston-tx), the [Texas page](/eye-drops/state/texas), or the [home page](/#buy).`,
      },
      { h: 'When to call an eye doctor' },
      {
        p: `Lubricating drops are meant for everyday dryness. When it keeps coming back, an eye doctor can work out the cause and what to do about it. The label lists when to stop: {stopUse}`,
      },
      {
        p: `The [dry eye self-check](/self-check) can help you note when and where your eyes feel worst, which is useful to bring to an appointment; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Can you get dry eyes in a humid climate?',
        a: `Yes. In places like Houston, most people spend their days in air-conditioned rooms and cars, and air conditioning dries the air and blows it across the face. Screen work, which cuts blinking, adds to it.`,
      },
      {
        q: 'How humid is Houston on average?',
        a: `NOAA’s table for Houston Intercontinental Airport gives an annual average of 89 percent humidity in the morning and 59 percent in the afternoon. July and August mornings average 93 percent.`,
      },
      {
        q: 'Why does the air conditioning in my car dry out my eyes?',
        a: `Car air conditioning pulls moisture out as it cools, and the dash vents blow that drier air straight at your face while you blink less watching the road. Angle the vents toward your chest and lower the fan once the car has cooled.`,
      },
      {
        q: 'Does Quell deliver to Houston?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Houston and anywhere else in the United States. Guest checkout is available, and a tracking email follows when the order ships.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-15 for dry-eye-relief-dallas-tx:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00003927.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00003927.csv
   *   (DALLAS FT WORTH AP, elev 170.7 m: annual precip 37.01 in; May 4.78, Oct 4.37,
   *   Jul 2.08, Aug 2.18; annual snow 1.6 in, Feb 1.0; Aug high 95.8 F, Jul 95.6;
   *   Jan high 56.5, low 36.1; 106.2 days at or above 90 F; 20.3 days at or above
   *   100 F; 29.2 nights at or below 32 F; 1.7 days with a high at or below 32 F)
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013960.csv
   *   (DALLAS LOVE FLD, elev 134.1 m: 22.4 days at or above 100 F; 23.1 nights at or
   *   below 32 F; Aug high 97.1 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (DALLAS, TX, WBAN 13960 [Love Field]: Jan 76/58, Mar 75/53, Jul 77/49,
   *   Aug 75/48, annual 78/54, morning/afternoon)
   * Elevation is the NOAA station elevation, converted (170.7 m is about 560 ft).
   */
  {
    slug: 'dry-eye-relief-dallas-tx',
    title: 'Dry eye relief in Dallas, Texas',
    description:
      'Dallas summers bring about 20 days at 100°F and winters about 29 freezing nights, so AC and heat take turns drying the air. NOAA’s numbers and what helps.',
    category: 'local',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Dallas eyes get it from both directions: about 106 days a year at 90°F or hotter at DFW Airport, and roughly 29 freezing nights that keep furnaces running in winter. August afternoons at Love Field average 48 percent humidity. Point vents away from your face, take screen breaks, wear sunglasses on windy days and use a lubricating drop as its label directs. See an eye doctor for pain or vision changes.`,
      },
      { h: 'Dallas climate in NOAA’s records' },
      {
        p: `North Texas sits on open prairie, with nothing between it and the Great Plains to the north or the Gulf to the south. That puts Dallas in the path of both summer heat and sharp winter fronts. NOAA’s 1991 to 2020 normals for Dallas Fort Worth International Airport show the range:`,
      },
      {
        list: [
          `About 106 days a year reach 90°F or more, and about 20 reach 100°F.`,
          `July and August both average highs near 96°F.`,
          `January’s normal low is 36.1°F, and the airport counts about 29 nights a year at freezing or below.`,
          `Normal snowfall is about 1.6 inches, most of it in February.`,
          `Precipitation averages 37.01 inches, with May the wettest month and July and August the driest.`,
        ],
      },
      {
        p: `Love Field, closer to downtown, runs a little hotter: about 22 days a year at 100°F and fewer freezing nights, around 23. If you live inside the loop, your winters are slightly milder than those of friends out near the airport.`,
      },
      { h: 'Why August afternoons feel so harsh' },
      {
        p: `NOAA’s relative humidity table for Dallas, taken at Love Field, shows mornings averaging 75 to 77 percent in July and August and afternoons falling to about 48 to 49 percent. Hot air at that humidity pulls water from the eye’s surface faster than a cooler, damper morning does. Dallas is also drier than Houston on summer afternoons by about eight points, which is noticeable after a weekend on the coast.`,
      },
      {
        list: [
          `Walk the Katy Trail or the loop around White Rock Lake early, before the afternoon dries out.`,
          `Wear sunglasses with side coverage; prairie wind and glare off concrete add up.`,
          `Take a break inside every hour or so on long outdoor days, like a Rangers game or the State Fair.`,
          `Keep eye drops out of a parked car in summer; the label sets a range, and a hot dashboard ignores it: {storage}.`,
        ],
      },
      { h: 'Highways, commutes and car vents' },
      {
        p: `Dallas runs on long drives: I-35E, the Tollway, LBJ, 75. An hour each way with the air conditioning aimed at your face is an hour of dry, moving air across the tear film, plus the reduced blinking that comes with watching traffic. Two easy changes: aim the center vents at your chest, and once the cabin has cooled, drop the fan a setting or two. On winter mornings, use the floor and defrost vents instead of the dash.`,
      },
      {
        p: `If your eyes feel worst after the commute home, that’s a clue the car is part of it. Our guide to [dry eyes when driving in winter](/guides/dry-eyes-when-driving-in-winter) has more on heater settings.`,
      },
      { h: 'Ice storms, northers and heated air' },
      {
        p: `A strong cold front, a blue norther in local terms, can turn a mild afternoon cold, and Dallas homes switch from cooling to heating in a single day. Heating cold air without adding water lowers its relative humidity, so the inside of a house can feel dry even when outdoor humidity in January averages a reasonable 58 percent in the afternoon. During ice storms, when people stay home with the heat running for days, eyes often feel it most.`,
      },
      {
        list: [
          `Close or redirect heat registers near the couch and bed.`,
          `Run a small humidifier in the bedroom on heating nights, cleaned as its maker says.`,
          `Keep space heaters pointed at your legs, not your face.`,
        ],
      },
      {
        p: `Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) covers this in more detail.`,
      },
      { h: 'Office towers and screens' },
      {
        p: `From Uptown to Legacy in Plano, a lot of Dallas works at a monitor in a cold building. Concentration lowers the blink rate, and partial blinks leave the tear film uneven. Every 20 minutes, look across the room and blink fully a few times. Position the monitor a little below eye level, and if a ceiling vent blows on your chair, ask facilities whether it can be turned.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists the Uses as: {uses}. The directions are: {directions}. Keep this in mind each time: {tip}.`,
      },
      {
        p: `The label carries one caution: {warnings}. It doesn’t give directions for contact lens wearers, for children, or for using it with other eye drops, so ask an eye doctor or pharmacist first. Read the full panel on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in Dallas' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Dallas, Plano, Garland, Irving and the rest of North Texas. There’s no account to make. Shipping is {shipping}, and {freeBottles} or more bottles ship free. A tracking email comes once it ships; no delivery date is promised, so order before you run low. An unopened bottle can be refunded within {returnDays} days of delivery, and it stays with you. See the [Dallas page](/eye-drops/dallas-tx), the [Texas page](/eye-drops/state/texas), or order from the [home page](/#buy).`,
      },
      { h: 'When to see a doctor' },
      {
        p: `Drops are for everyday dryness. Dryness that persists or keeps returning deserves an exam, where an eye doctor can work out the cause and what to do about it. The label is clear: {stopUse}`,
      },
      {
        p: `Use the [dry eye self-check](/self-check) to track when your eyes feel worst; it’s not a diagnosis, but it gives your doctor something specific.`,
      },
    ],
    faq: [
      {
        q: 'How many freezing nights does Dallas get?',
        a: `NOAA’s 1991 to 2020 normals count about 29 nights a year at or below 32°F at DFW Airport, and about 23 at Love Field, which sits closer to downtown.`,
      },
      {
        q: 'Is Dallas less humid than Houston?',
        a: `On summer afternoons, yes. NOAA’s table puts August afternoons at about 48 percent humidity at Dallas Love Field and about 56 percent at Houston Intercontinental.`,
      },
      {
        q: 'Why do my eyes feel dry after my commute?',
        a: `Long drives combine air conditioning or heat blowing from the dash with less blinking while you watch the road. Aim vents at your chest, lower the fan once the cabin is comfortable, and blink fully at stops.`,
      },
      {
        q: 'Can I order Quell to Dallas, Texas?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Dallas and the rest of the United States, with guest checkout and a tracking email. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-15 for dry-eye-relief-miami-fl:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00012839.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00012839.csv
   *   (MIAMI INTL AP, elev 8.8 m: annual precip 67.41 in; Jun 10.51, Sep 10.22,
   *   Aug 9.58; Jan 1.83, Feb 2.15, Dec 2.44, Mar 2.46, Apr 3.36, Nov 3.53, so Nov-Apr
   *   totals 15.77 in; Jan high 76.2 F, low 61.0; Aug high 90.7, low 77.7; 91.4 days
   *   at or above 90 F; 0 days at or above 100 F; 0 nights at or below 32 F;
   *   89.6 days with 0.10 in or more)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (MIAMI, FL, WBAN 12839: Jan 84/59, Feb 83/57, Mar 80/55, Apr 78/55,
   *   Sep 86/66, annual 82/61, morning/afternoon)
   * - https://www.weather.gov/mfl/summer_season
   *   (NWS Miami: 1956-1997 at Miami International, median summer [wet] season
   *   May 21 to Oct 17, 152 days, 69 percent of annual precipitation; winter season
   *   has "lower humidities and less frequent precipitation")
   * Elevation is the NOAA station elevation, converted (8.8 m is about 29 ft).
   */
  {
    slug: 'dry-eye-relief-miami-fl',
    title: 'Dry eye relief in Miami, Florida',
    description:
      'Miami gets most of its rain from late May to mid-October; the dry season’s afternoons dip to 55 percent humidity. Why eyes still dry out, and what helps.',
    category: 'local',
    addedOn: '2026-11-15',
    body: [
      {
        p: `In Miami, dry eyes rarely come from the outdoor air. They come from air conditioning that runs nearly year-round, sea breezes, sun glare and long screen days. The dry season, roughly November to April, brings afternoons near 55 percent humidity. Keep vents off your face, wear sunglasses on the water, blink fully at screens, and use a lubricating drop as its label directs. Pain or vision changes need an eye doctor.`,
      },
      { h: 'Miami’s two seasons: wet and dry' },
      {
        p: `South Florida doesn’t have four seasons so much as two. The National Weather Service office in Miami studied 42 years of records at Miami International Airport and found the wet season’s median start was May 21 and its median end October 17. That stretch of about 152 days brought about 69 percent of the year’s rain. The rest of the year, the office notes, has cooler temperatures, lower humidity and less frequent rain.`,
      },
      {
        p: `NOAA’s 1991 to 2020 normals for the airport back that up:`,
      },
      {
        list: [
          `Normal precipitation is 67.41 inches a year.`,
          `June (10.51 inches) and September (10.22) are the wettest months.`,
          `November through April together total about 15.8 inches, with January the driest month at 1.83.`,
          `About 91 days a year reach 90°F, but the airport has no 100°F days and no freezing nights in a normal year.`,
          `The station sits at about 29 feet above sea level.`,
        ],
      },
      { h: 'Is Miami humid in winter?' },
      {
        p: `Less than in summer, though still humid by most of the country’s standards. NOAA’s relative humidity table gives Miami morning averages in the low 80s all year. Afternoons are where the seasons show: 59 percent in January, 57 in February and 55 in March and April, compared with 66 percent in September. A breezy, sunny March afternoon on Key Biscayne is drier air than many visitors expect.`,
      },
      {
        p: `Dry season is also when the city fills with visitors and snowbirds, and when people spend the most time outdoors: beaches, outdoor dining, Art Basel crowds, weekend boating. Long days in sun and wind make dry eyes more likely, even when the humidity reading looks comfortable.`,
      },
      { h: 'Air conditioning: the real dry climate in Miami' },
      {
        p: `With normal highs from the mid-70s in January to above 90°F in August, Miami keeps the air conditioning on almost every day. An air conditioner removes water as it cools, and the fans that circulate that air are often aimed right at people: car dash vents, ceiling diffusers over office desks, ceiling fans over beds. Spending most waking hours in that air is what dries out eyes in a humid city.`,
      },
      {
        list: [
          `Angle car vents toward your chest, and lower the fan once the car has cooled.`,
          `In condos and offices, look for a supply vent above where you sit, and redirect it or move your chair.`,
          `At night, slow the ceiling fan or set the thermostat a degree warmer so the system cycles less.`,
          `Change filters on schedule so the unit doesn’t run longer than it needs to.`,
        ],
      },
      { h: 'Sea breeze, boats and glare' },
      {
        p: `An afternoon sea breeze off the Atlantic is part of Miami life, and on the beach or a boat on Biscayne Bay it blows across your eyes for hours. Glare off sand and water makes people squint, which tends to shorten blinks. Polarized sunglasses with side coverage cut both glare and wind. After swimming in the ocean, rinse your face with fresh water before touching your eyes, and avoid rubbing them with sandy hands.`,
      },
      {
        p: `Our guide to [dry air, wind and altitude](/guides/dry-air-wind-and-altitude) explains how moving air speeds evaporation, even at sea level.`,
      },
      { h: 'Rainy season: what changes' },
      {
        p: `From late May to mid-October, afternoon storms build almost daily and humidity stays high. Outdoor air is easy on the tear film, but people spend even more time indoors in cold, dry rooms to escape the heat. Storm days also mean more hours at screens. A reminder to look away and blink every 20 minutes helps regardless of the season. If a hurricane knocks out power, store drops somewhere cool and shaded; the label sets a range: {storage}.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. Directions: {directions}. Handling: {tip}.`,
      },
      {
        p: `Read this caution first: {warnings}. The label doesn’t address contact lenses, children or using it with other eye drops; ask your eye doctor or pharmacist about those. See every line on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Miami' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Miami, Miami Beach, Coral Gables, Hialeah and the rest of Florida. Checkout works as a guest. Shipping is {shipping}, or free on {freeBottles} or more bottles. You’ll get a tracking email once it ships, but no delivery date is promised. If you’re a snowbird, ship to the address where you’ll be when it arrives. Unopened bottles are refundable within {returnDays} days of delivery without being returned. See the [Miami page](/eye-drops/miami-fl), the [Florida page](/eye-drops/state/florida), or the [home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Lubricating drops are for everyday dryness and irritation. If it keeps returning, an eye doctor can work out the cause and what to do about it. The label says when to stop: {stopUse}`,
      },
      {
        p: `Sand, a fishhook, coral or anything else that injures the eye needs prompt medical care. For ongoing symptoms, the [dry eye self-check](/self-check) can help you describe them; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'When is the dry season in Miami?',
        a: `Roughly late October to late May. The National Weather Service office in Miami found a median wet season of May 21 to October 17 at Miami International Airport, and the months outside it bring lower humidity and less frequent rain.`,
      },
      {
        q: 'Why are my eyes dry in Miami when it’s so humid?',
        a: `Most people in Miami spend much of the day in air conditioning, which dries the air and blows it across the face. Sea breezes, sun glare and screen time add to it, even when outdoor humidity is high.`,
      },
      {
        q: 'What is the driest month in Miami?',
        a: `January, by rainfall. NOAA’s 1991 to 2020 normals give Miami International Airport about 1.83 inches that month, compared with 10.51 inches in June.`,
      },
      {
        q: 'Can Quell be shipped to Miami, Florida?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Miami and anywhere else in the United States, with guest checkout and a tracking email. Order ahead, since no delivery date is promised.`,
      },
    ],
  },
  /*
   * Verified 2026-11-15 against the code, read-only:
   * - src/lib/authorizenet.ts: Accept Hosted form at accept.authorize.net (production);
   *   one-time token "valid for 15 minutes and can only be redeemed once", fetched per
   *   checkout attempt; card code required; billing address shown and required on the
   *   hosted page; shipping address passed in by the shop and hidden there; order
   *   summary shown with merchant name; button text "Pay"; return link "Continue",
   *   cancel link "Cancel".
   * - src/app/api/checkout/route.ts: shop's own form collects name, address, two-letter
   *   state, ZIP, phone (required) and email (guests); prices read from the database,
   *   never the browser; stock checked; max 10 bottles; pending order and order number
   *   written before the gateway; if the gateway request fails the pending order is
   *   cancelled and the customer sees "Could not start checkout. Please try again.";
   *   checkout attempts rate-limited per IP; cancel returns to /cart.
   * - src/app/api/checkout/return/route.ts and checkout/success: browser POST ignored;
   *   payment recorded only by the signed webhook; success page says payment is being
   *   confirmed and a receipt follows by email.
   * - src/app/privacy/page.tsx: card details entered directly with Authorize.net, never
   *   pass through or rest on our servers; we keep a payment reference and the outcome.
   */
  {
    slug: 'why-checkout-uses-a-secure-payment-page',
    title: 'Why checkout sends you to a secure payment page',
    description:
      'At Quell checkout, your card goes on Authorize.net’s hosted payment page, not this site. What happens at each step, and what the shop never sees or keeps.',
    category: 'ordering',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Quell’s checkout sends you to a payment page hosted by Authorize.net, the card processor, so your card number is typed on the processor’s page instead of this shop’s. The shop collects your shipping details first, then hands the processor a one-time link for your order. Card details never pass through or rest on Quell’s servers; the shop keeps only a payment reference and whether the charge went through.`,
      },
      { h: 'What is a secure payment page?' },
      {
        p: `A secure payment page, sometimes called a hosted payment page, is a card form run by the payment processor rather than by the store. The store sends you there for the one step that involves your card and takes you back afterward. Quell uses Authorize.net’s version, which Authorize.net calls Accept Hosted. Its address starts with accept.authorize.net, not quelldrop.com, and that’s expected.`,
      },
      {
        p: `The point is separation. A shop that never receives card numbers can’t lose them, leak them or misuse them, because it never has them. The [privacy policy](/privacy) puts it plainly: card details are entered directly with Authorize.net and never pass through or rest on this site’s servers.`,
      },
      { h: 'Secure checkout, step by step' },
      {
        p: `Here’s what happens between the cart and the receipt, in the order the code runs:`,
      },
      {
        list: [
          `On the cart page, you enter your name, shipping address, phone number and, if you’re checking out as a guest, your email. The shop checks the obvious things: a two-letter state code, a five-digit ZIP, a phone number with enough digits.`,
          `The shop works out the total from its own prices, never from anything your browser sends, and checks that the bottles are in stock. One order can hold up to 10 bottles.`,
          `It writes a pending order with an order number, then asks Authorize.net for a payment link tied to that order and total.`,
          `Your browser is passed to Authorize.net’s page. The link works once and expires after 15 minutes, so each checkout attempt gets a fresh one.`,
          `On that page you see the order summary, enter your card number, expiration date and the card’s security code, add your billing address, and press Pay.`,
          `Authorize.net sends you back to Quell with a Continue link, and the shop waits for the processor’s own confirmation before marking the order as paid.`,
        ],
      },
      { h: 'Why the billing address is asked for on the payment page' },
      {
        p: `The billing address belongs to the card, so the payment page collects it and requires it. The shipping address belongs to the order, so the shop collects it on its own form and passes it along; the payment page doesn’t ask for it again. If you’re sending a gift, the two can be completely different, which is normal. Our guide on [what checkout asks for](/guides/what-checkout-asks-for) explains each of the shop’s own fields.`,
      },
      { h: `How to tell you’re on the real payment page` },
      {
        p: `It’s the arrangement payment processors offer so that small shops don’t have to handle cards themselves. What you can check for yourself:`,
      },
      {
        list: [
          `You reached it by pressing the checkout button on quelldrop.com, not from a link in an email or a text.`,
          `The address bar shows authorize.net and a padlock.`,
          `The order summary on the page matches what was in your cart.`,
          `The page asks only for card and billing details, not for a password or account login.`,
        ],
      },
      {
        p: `If a page claiming to be Quell’s payment page ever reaches you some other way, close it and call {phone}, {hours}.`,
      },
      { h: 'After you press Pay' },
      {
        p: `You’re brought back to a page on quelldrop.com that says the payment is being confirmed. That wording is deliberate. The shop doesn’t take your browser’s word that a payment went through; it waits for a signed notification from Authorize.net, and only then marks the order paid. Once it has, a receipt goes to the email on the order, and another message follows when the package ships. Our guide to [when your card is charged](/guides/when-is-my-card-charged) covers the timing.`,
      },
      { h: 'If you cancel or something goes wrong' },
      {
        list: [
          `Pressing Cancel on the payment page brings you back to your cart. Nothing is charged, and you can try again.`,
          `If the shop can’t open a payment page at all, you see “Could not start checkout. Please try again.” The pending order is canceled on the spot, and no payment was taken.`,
          `If you wait too long and the link expires, start checkout again from the cart for a fresh one.`,
          `Repeated rapid attempts from the same connection are paused for a few minutes, which slows down people testing stolen cards. A real customer retrying a typo shouldn’t hit it.`,
        ],
      },
      { h: 'What Quell keeps, and what it never sees' },
      {
        p: `The shop keeps the order: your name, shipping address, email, phone, what you bought and what you paid. From the processor it keeps a payment reference and the result of the charge. It never sees your full card number or the security code. Guests’ name, address, email and phone are also remembered in their own browser for next time, but card details are never saved on this site.`,
      },
      {
        p: `Prices, shipping ({shipping}, or free on {freeBottles} or more bottles) and the refund policy ({returns}) are all set before you reach the payment page, so the total you see there should match your cart. Ready to order? Head to the [home page](/#buy) or your [cart](/cart).`,
      },
    ],
    faq: [
      {
        q: 'Why does checkout take me to a different website?',
        a: `Quell sends you to Authorize.net, its card processor, for the payment step so that your card number is typed on the processor’s page and never reaches the shop’s servers. You return to quelldrop.com afterward.`,
      },
      {
        q: 'What is a hosted payment page?',
        a: `A card form run by the payment processor instead of the store. The store sends you there to pay and takes you back afterward, so it never handles card numbers itself.`,
      },
      {
        q: 'Does Quell store my credit card number?',
        a: `No. Card details are entered on Authorize.net’s page and never pass through or rest on Quell’s servers. The shop keeps a payment reference and the outcome of the charge.`,
      },
      {
        q: 'What happens if I click Cancel on the payment page?',
        a: `You’re taken back to your cart and nothing is charged. Your cart is still there, so you can start checkout again whenever you’re ready.`,
      },
      {
        q: 'Why does the payment page ask for my billing address?',
        a: `The billing address belongs to your card, so the processor collects it with the card details. Your shipping address was already entered on the shop’s own form and is passed along separately.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-someone-who-reads-a-lot',
    title: 'Christmas gifts for someone who reads a lot',
    description:
      'Gift ideas for a big reader that aren’t another book: better light, a page holder, a cozy reading corner and eye drops for long sessions, plus how to send them.',
    category: 'seasonal',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Good Christmas gifts for someone who reads a lot make long sessions more comfortable: a warm, adjustable reading lamp, a book stand or e-reader cover that frees their hands, a soft throw, a bedroom humidifier for winter, and a bottle of lubricating eye drops for the eyes that do all the work. Readers blink less while absorbed in a page, so comfort gifts often beat another novel.`,
      },
      { h: 'What to get someone who loves to read' },
      {
        p: `People who read a lot usually have a to-be-read pile already, and they’re particular about books. Picking the next one for them is a gamble. Gifts that improve the reading itself are safer and get used every day. Think about where and how they read: in bed at night, in an armchair on a Sunday, on a commute, in a waiting room with an e-reader. Then look for something that makes that hour more comfortable.`,
      },
      { h: 'Gifts for readers that aren’t books' },
      {
        list: [
          `A reading lamp with an adjustable arm and a warm setting, so light falls on the page instead of in their eyes.`,
          `A clip-on book light for reading in bed without keeping a partner awake.`,
          `A book stand or page holder, which lets them read with relaxed hands and keeps the page at a comfortable distance.`,
          `A padded e-reader cover with a stand, for propping it up on a table or a lap.`,
          `A soft throw blanket and a good mug, the basic furniture of a reading corner.`,
          `A small humidifier for the room where they read most in winter.`,
          `A gift card to a local bookstore, so they choose the book and you choose the place.`,
          `Eye drops for long reading sessions, tucked into a stocking.`,
        ],
      },
      { h: 'Why big readers notice dry eyes' },
      {
        p: `Reading changes how people blink. When attention is locked onto a page or a screen, blinks come less often, and many of them are only partial. Every full blink spreads a fresh layer of tears across the eye; fewer of them means the tear film thins, and the eyes start to feel gritty, scratchy or tired after a few chapters. Reading in a heated room in December, or under a ceiling fan, speeds up evaporation further. Our guide to [dry eyes when reading](/guides/dry-eyes-when-reading) covers the habits that help.`,
      },
      {
        p: `That’s why comfort gifts suit readers so well. A lamp that cuts glare, a stand that lowers the book a little so the eyes aren’t opened as wide, and a humidifier that keeps winter air from getting too dry all address the same thing from different sides.`,
      },
      { h: 'E-readers, tablets and audiobooks' },
      {
        p: `Plenty of heavy readers have moved some or all of their reading to a screen. E-readers make it easy to read for hours, which is the appeal and also the catch: long, uninterrupted sessions mean long stretches of reduced blinking. Gift ideas for screen readers:`,
      },
      {
        list: [
          `A stand or grip that holds the device at a slight downward angle.`,
          `A subscription or gift card for their reading app, so they pick the titles.`,
          `Comfortable headphones for audiobooks, which give the eyes a break while the story keeps going.`,
          `A small, elegant timer or bookmark-style reminder to look up every 20 minutes or so.`,
        ],
      },
      { h: 'Eye drops as a stocking stuffer for a reader' },
      {
        p: `A bottle of Quell is small enough for a stocking and fits on a nightstand beside a book. It’s a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label lists its Uses as: {uses}. The directions read: {directions}. The bottle is {size}, and the drops look milky brown, which is normal: {appearance}`,
      },
      {
        p: `Before giving drops as a gift, check one thing with the person, or think about whether it applies: {warnings}. If they wear contact lenses or already use prescribed eye drops, the label doesn’t cover those situations, and they should ask their eye doctor or pharmacist first. A stocking-stuffer bottle is a small extra, not a substitute for an eye exam if their eyes bother them a lot.`,
      },
      { h: 'Christmas gift for someone who likes to read in bed' },
      {
        p: `Bedtime readers have their own setup. A warm-toned book light, a pillow that props them upright so they’re looking slightly down, and a humidifier on a low setting all help on winter nights. A ceiling fan running over the bed is worth mentioning too, since moving air dries the eyes; a gentle hint to switch it off at reading time costs nothing. Drops kept on the nightstand should stay at room temperature, as the label says: {storage}.`,
      },
      { h: 'Sending the gift' },
      {
        p: `Quell ships from Brentwood, Tennessee, to addresses in the United States. To send a bottle straight to a reader, put their name and address in the shipping fields and your own email in the email field, so the confirmation and tracking come to you. There’s no gift wrap or gift message option, so if you want it wrapped, ship it to yourself first. Shipping is {shipping}, and {freeBottles} or more bottles ship free. No delivery date is promised, so order well before Christmas. You need to be 18 or older to order. Our guide to [sending Quell as a gift](/guides/sending-quell-as-a-gift) has more detail.`,
      },
      {
        p: `If the gift turns out not to suit them, an unopened bottle can be refunded within {returnDays} days of delivery without sending it back. Browse more ideas in [gifts and the holidays](/guides/topic/seasonal).`,
      },
    ],
    faq: [
      {
        q: 'What is a good gift for someone who loves to read?',
        a: `Something that makes reading more comfortable: an adjustable warm reading lamp, a book stand or e-reader cover, a soft throw, or a bookstore gift card so they can choose the next title themselves.`,
      },
      {
        q: 'What are good gifts for readers that aren’t books?',
        a: `Book lights, page holders, e-reader stands, headphones for audiobooks, a reading-corner blanket and mug, a small humidifier, or a stocking-stuffer bottle of lubricating eye drops for long sessions.`,
      },
      {
        q: 'Why do my eyes feel tired after reading for hours?',
        a: `Concentrating on a page or screen reduces blinking, and partial blinks don’t spread tears fully, so the tear film thins. Regular breaks to look up and blink, good lighting and less airflow on your face can help.`,
      },
      {
        q: 'Are eye drops a good gift for a book lover?',
        a: `They can be a thoughtful small extra for someone who reads for hours. Check the label’s egg and bird allergy caution first, and skip it if they use prescribed eye drops or contact lenses without asking their eye doctor.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-farmer',
    title: 'Christmas gifts for a farmer with dry eyes',
    description:
      'Useful Christmas gifts for a farmer whose eyes take dust, wind and cab heat all year: sealed eyewear, a brimmed hat, a cab-ready kit and lubricating drops.',
    category: 'seasonal',
    addedOn: '2026-11-15',
    body: [
      {
        p: `The most useful Christmas gifts for a farmer with dry eyes are practical ones they’ll use daily: sealed safety glasses or goggles for dusty jobs, a brimmed hat, a small eye-care kit for the truck or shop, a humidifier for the house, and a bottle of lubricating eye drops for the end of a long day. Dust, wind and winter cab heaters are hard on eyes all year round.`,
      },
      { h: 'Good gifts for farmers' },
      {
        p: `Farmers are hard to shop for because they tend to buy what they need when they need it, and much of it comes from the farm store. The gifts that land are the ones they wouldn’t splurge on themselves, or the ones that make a daily chore a little easier. Eyes are a good place to focus, since almost every farm job puts them in front of dust, sun or moving air, and the [dry eyes for farmers](/guides/dry-eyes-for-farmers) guide lists exactly where that happens.`,
      },
      { h: 'Christmas gifts for farmers who work in dust and wind' },
      {
        list: [
          `Safety glasses with foam-lined or wraparound frames that seal out dust when grinding, sweeping a grain bin or cleaning out a barn.`,
          `Tinted safety glasses for outdoor work, so they aren’t choosing between sun protection and eye protection.`,
          `A wide-brimmed hat or a quality cap, which cuts glare and some of the wind across the eyes.`,
          `A neck gaiter or bandana for windy days, which keeps dust off the face as well as the neck.`,
          `Insulated work gloves, so they aren’t rubbing their eyes with dirty, frozen fingers.`,
          `A headlamp for early chores and late calving checks, so they aren’t squinting into the dark.`,
        ],
      },
      { h: 'Winter in the cab and the shop' },
      {
        p: `In winter, farm work moves into heated spaces: tractor and truck cabs with the heater on, a shop with a forced-air or radiant heater, a farmhouse with the furnace running. Warming cold air without adding water makes it very dry, and cab vents tend to blow right at the driver. A gift that helps:`,
      },
      {
        list: [
          `A small cab or truck organizer with a spot for eye drops, wipes and a spare pair of safety glasses.`,
          `A thermos and an insulated cooler bag, which encourage a real break out of the cab instead of eating while driving.`,
          `A tabletop humidifier for the farmhouse bedroom, where they spend the most uninterrupted hours.`,
          `A note, from you, suggesting they aim the cab vents at their chest instead of their face.`,
        ],
      },
      {
        p: `One storage reminder if you add drops to a cab kit: the label gives a temperature range, and a truck parked in a field in January or July goes well outside it: {storage}. The bottle is better off in a coat pocket or a lunch bag that comes inside at night.`,
      },
      { h: 'Christmas gifts for a farmer dad' },
      {
        p: `If you grew up on the farm and are shopping for your father, think about the jobs he’s always done and the small discomforts he’s stopped noticing. Rubbing his eyes after combining, squinting through a dirty windshield, sitting up late at a desk with the farm books: each one suggests a gift. Sealed glasses for the dusty jobs, a better lamp for paperwork, a fresh pack of windshield wipers and washer fluid for the truck. A bottle of eye drops can sit alongside any of those as a small extra, especially if he’s mentioned his eyes feeling gritty.`,
      },
      { h: 'Adding Quell to the gift' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel states the Uses as: {uses}. The directions are: {directions}. And on the job, this line matters most: {tip}. Dirty fingers or a dusty bench are exactly the surfaces to keep the tip away from.`,
      },
      {
        p: `Check the label’s caution before giving it: {warnings}. Farmers who keep poultry may already know whether that applies. If they wear contact lenses or use prescribed eye drops, the label doesn’t give directions for either, so they should check with their eye doctor or pharmacist. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'What drops can’t do' },
      {
        p: `Lubricating drops are for ordinary dryness and irritation. They aren’t for flushing out grain, chaff, chemicals or a metal shaving. If something gets into a farmer’s eye and doesn’t rinse out with clean water, or if a chemical splashes, that’s a reason to get medical help right away, not reach for a bottle. The label lists when to stop using the drops and see a doctor: {stopUse}`,
      },
      { h: 'Shipping a gift to the farm' },
      {
        p: `Quell ships from Brentwood, Tennessee, to addresses across the United States, including rural routes. To send it directly, enter their name and farm address in the shipping fields and your own email, so tracking and the receipt come to you. A quick text that a small box is on the way helps it end up indoors rather than on a porch in the cold. Shipping is {shipping}, and free on {freeBottles} or more bottles. No delivery date is promised, so order early in December. There’s no gift-wrap option; our guide on [sending Quell as a gift](/guides/sending-quell-as-a-gift) covers the rest. You must be 18 or older to order, and unopened bottles can be refunded within {returnDays} days of delivery.`,
      },
      {
        p: `More gift ideas for people who work outside are in [gifts and the holidays](/guides/topic/seasonal).`,
      },
    ],
    faq: [
      {
        q: 'What do you get a farmer for Christmas?',
        a: `Practical things they’ll use every day but might not buy themselves: sealed safety glasses, insulated gloves, a good headlamp, a thermos, a wide-brimmed hat, or a small kit for the truck with eye drops and wipes.`,
      },
      {
        q: 'Are eye drops a good gift for a farmer?',
        a: `They can be a useful small extra for someone whose eyes take dust, wind and heater air all year. Check the egg and bird allergy caution on the label first, and steer them to their eye doctor if they use contact lenses or other eye drops.`,
      },
      {
        q: 'What are good stocking stuffers for farmers?',
        a: `Work gloves, a headlamp, a pocket knife, a neck gaiter, lip balm, safety glasses, or a small bottle of lubricating eye drops for long days in a dusty cab.`,
      },
      {
        q: 'Can I ship eye drops to a rural farm address?',
        a: `Quell ships to addresses across the United States, including rural ones. Enter the farm address as the shipping address and your own email to receive tracking. No delivery date is promised, so order early.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-pharmacists',
    title: 'Dry eyes for pharmacists',
    description:
      'Long counter shifts, verification screens and tiny label print add up for pharmacists’ eyes. Workday habits that help, and what to do when it doesn’t settle.',
    category: 'using',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Pharmacists get dry eyes from the shape of the job: hours of verifying orders on a screen, reading small print on bottles and boxes, cold or dry building air, and few real breaks. Blinking slows during that kind of close, careful focus. Short look-away breaks, vents turned off your face, good task lighting and a lubricating drop used as its label directs can help. Symptoms that persist deserve an eye exam.`,
      },
      { h: 'Why a pharmacy shift is hard on your eyes' },
      {
        p: `A retail or hospital pharmacy asks for a particular kind of attention. Every order means matching a name, a drug, a strength and a quantity, often by switching between a screen and a small printed label. That kind of checking is exactly the work during which people blink least. Fewer blinks, and more partial ones, leave the tear film unrefreshed, and its watery layer evaporates faster. By the end of a 10- or 12-hour day, many pharmacists notice gritty, scratchy or burning eyes that weren’t there at opening.`,
      },
      {
        p: `The building plays a part too. Big-box and grocery stores run strong heating and cooling for the sales floor, and the pharmacy counter often sits under a supply vent. Hospital pharmacies keep air moving constantly. Moving, conditioned air speeds evaporation from the eye’s surface.`,
      },
      { h: 'Verification screens and reading labels' },
      {
        p: `Much of the job is screen-and-paper work: verification queues, insurance screens, then the physical product, the stock bottle and the label. The eyes shift focus between near and middle distances dozens of times an hour. Habits that fit between orders:`,
      },
      {
        list: [
          `After each batch you verify, look across the store or down an aisle for a few seconds and blink fully.`,
          `Set the verification monitor slightly below eye level, so your eyes aren’t opened as wide while you read.`,
          `Raise the text size on the screen rather than leaning in; leaning in tends to mean staring.`,
          `Use a task light at the counting station so labels are easy to read without squinting.`,
          `If you wear reading glasses for close work, make sure the prescription is current; straining to read is another reason people forget to blink.`,
        ],
      },
      { h: 'Counter air, drive-through windows and the store floor' },
      {
        p: `Airflow is the easiest thing to change. Look up: if a ceiling diffuser blows directly onto the verification station, ask facilities whether it can be redirected or fitted with a deflector. A personal fan under the counter should blow across the body, not up at the face. Drive-through windows can let in gusts of hot or cold outdoor air each time they open; stand to one side of the opening when you can.`,
      },
      {
        p: `In winter, heated store air gets very dry. A small humidifier isn’t practical on a busy counter, but at home, especially in the bedroom, it can make the hours you’re not at work more comfortable. See [does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) for the details.`,
      },
      { h: 'Long shifts and late closes' },
      {
        p: `Pharmacy hours can run long, and lunch is often taken standing up between calls. Eyes do better with real breaks. If you can, step away from the counter and away from screens for a few minutes every couple of hours. Avoid scrolling a phone during that break, since it’s more of the same close focus. Our guide to [dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) has ideas for anyone working late closes or a 24-hour pharmacy.`,
      },
      { h: 'When pharmacists are the ones being asked' },
      {
        p: `Customers often ask pharmacists which drops to use alongside a prescription, whether a drop works with contact lenses, or whether a child can use one. Those are exactly the questions an OTC label often leaves unanswered. Quell’s label is one example: it doesn’t give directions for contact lenses, children or use with other eye drops. For a customer, the right next step is the professional who knows their history, often their eye doctor.`,
      },
      {
        p: `For your own eyes, the same applies. Knowing a lot about drug products doesn’t replace an eye exam, and dryness that keeps coming back is worth having looked at. Our list of [questions to ask a pharmacist about eye drops](/guides/questions-to-ask-your-pharmacist) is written for customers, but it’s a handy checklist from the other side of the counter too.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its active ingredients are {actives}. The Uses line reads: {uses}. Directions: {directions}. While using it: {tip}.`,
      },
      {
        p: `The label’s caution: {warnings}. Storage: {storage}. It also notes the color: {milky}. Every section is on our [Drug Facts page](/drug-facts), where you can read it the way you’d read any OTC panel.`,
      },
      { h: 'Using drops during a pharmacy shift' },
      {
        list: [
          `Wash your hands first, which is already a reflex at the counting station.`,
          `Keep the bottle in a clean pocket or a bag at your station, not loose on a counter where it can pick up dust or get mixed in with stock.`,
          `Follow the label’s directions rather than adding extra drops on a long day.`,
          `If you also use a prescribed eye drop, ask your eye doctor how to space them; the label doesn’t cover using it with other drops.`,
        ],
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay uncomfortable even on days off, or the dryness keeps returning despite changes at work, book an exam so an eye doctor can work out the cause and what to do about it. The label lists the reasons to stop and ask a doctor: {stopUse}`,
      },
      {
        p: `The [dry eye self-check](/self-check) can help you describe your symptoms before the visit; it’s not a diagnosis. You can order Quell from the [home page](/#buy), with guest checkout and shipping to US addresses.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working in a pharmacy?',
        a: `Pharmacy work means long stretches of close checking on screens and small labels, which reduces blinking, often under air vents in a heated or cooled store. Both leave the tear film evaporating faster.`,
      },
      {
        q: 'Can pharmacists recommend eye drops?',
        a: `Pharmacists answer questions about over-the-counter drops every day and can help compare labels. For persistent dryness, contact lenses, children or use alongside prescribed drops, an eye doctor is the right person to decide.`,
      },
      {
        q: 'How can pharmacists rest their eyes during a busy shift?',
        a: `Look across the store and blink fully after each batch of orders, keep the verification screen slightly below eye level, use a task light for labels, and step away from screens for a few minutes every couple of hours.`,
      },
      {
        q: 'Should a pharmacist see an eye doctor for dry eyes?',
        a: `Yes, if the dryness keeps coming back or doesn’t settle with workday changes. An eye doctor can work out the cause, and the label says to stop and ask a doctor for eye pain, vision changes, or symptoms that persist.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-air-traffic-controllers',
    title: 'Dry eyes for air traffic controllers',
    description:
      'Radar scopes, tower windows, long focus and rotating shifts are hard on controllers’ eyes. Habits that fit between sessions, and what eye drop labels say.',
    category: 'using',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Air traffic controllers are prone to dry eyes because the job demands long, unbroken visual focus on radar displays or out of tower windows, often in climate-controlled rooms and on rotating shifts. Blinking drops sharply during intense concentration. Using breaks fully, keeping vents off your face, managing glare and using a lubricating drop exactly as its label directs can help. Ask an eye doctor about anything that persists or affects vision.`,
      },
      { h: 'Why controllers’ eyes dry out' },
      {
        p: `Few jobs ask for the kind of sustained attention a control position does. Watching a radar display or a runway means scanning, tracking and holding focus for long stretches, and people blink much less when they concentrate like that. Blinks also tend to become partial, so they don’t sweep a fresh layer of tears across the whole eye. The tear film thins and its watery layer evaporates, and eyes start to feel gritty, hot or tired.`,
      },
      {
        p: `The rooms add to it. Radar rooms and tower cabs are kept cool for equipment and people, and that conditioned air moves constantly. Tower cabs also get direct sun through the glass for much of the day.`,
      },
      { h: 'What does an air traffic controller screen look like?' },
      {
        p: `Radar controllers work at dark, high-contrast displays in dim rooms, with targets and data blocks they have to read precisely. Tower controllers split their gaze between the view outside and displays, flight strips and screens inside. Both setups involve focusing at a fixed distance for long periods, which is part of why eyes feel strained after a busy session.`,
      },
      {
        list: [
          `In a dim radar room, a bright screen in a dark space can make you open your eyes wider; adjust display brightness to match the room where you’re allowed to.`,
          `In a tower cab, glare off the field and the sky makes people squint, and squinting tends to cut blinks short.`,
          `Moving between the two, or between a bright cab and a dark break room, also asks your eyes to keep adjusting.`,
        ],
      },
      { h: 'Using breaks for your eyes' },
      {
        p: `Controllers rotate on and off position, and that break time is the obvious place to rest your eyes. A few habits make it count:`,
      },
      {
        list: [
          `Spend the first minute of a break looking at something far away and blinking fully and slowly a few times.`,
          `Skip the phone for at least part of the break; scrolling is more of the same close focus.`,
          `Step outside or near a window if the facility allows, which gives your eyes natural light and distance.`,
          `Drink water. A long session without a sip leaves you feeling dried out generally.`,
        ],
      },
      {
        p: `On position, what you can do depends on traffic and facility procedures. Even during quieter moments, a deliberate full blink now and then helps keep the tear film even.`,
      },
      { h: 'Rotating shifts and sleep' },
      {
        p: `Rotating schedules, with early mornings, evenings and midnight shifts in the same week, are common in air traffic control. Short sleep tends to make eyes feel worse the following day, and many people notice dryness most on their first midnight or the morning after a quick turnaround. Our guide to [dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) covers the night-specific side, and [dry eyes at the end of the day](/guides/dry-eyes-at-the-end-of-the-day) explains why discomfort builds over hours of focus.`,
      },
      { h: 'Air vents, the tower cab and home' },
      {
        list: [
          `At your position, check where the air supply is pointed; a vent aimed at your face is worth asking to have redirected.`,
          `Personal fans should blow across your body, not your eyes.`,
          `At home, sleep in a room without a ceiling fan blowing on your face, and consider a humidifier in winter when the heat runs.`,
          `In the car after a shift, aim the vents at your chest, especially when you’re already tired.`,
        ],
      },
      { h: 'Eyesight requirements and eye drops' },
      {
        p: `People searching about controllers’ eyes often want to know about vision standards and medical certification. Those rules belong to the FAA and your facility, and this guide doesn’t try to summarize them. If you’re a controller, ask your aviation medical examiner or your facility’s medical office before adding any eye drop to your routine, and especially before using anything near or during a shift. They know the current requirements; a website doesn’t.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists the Uses as: {uses}. The directions are: {directions}. And the handling rule: {tip}.`,
      },
      {
        p: `Read the caution: {warnings}. The label doesn’t give directions for using Quell alongside other eye drops or with contact lenses; ask your eye doctor or pharmacist about either. The drops look milky brown, which is expected: {appearance} The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `In a job where vision is everything, don’t wait out symptoms. Dryness that persists, eyes that hurt, or any change in how clearly you see is a reason to book an eye exam so a doctor can work out the cause and what to do about it. The label says when to stop: {stopUse}`,
      },
      {
        p: `Our [dry eye self-check](/self-check) can help you describe what you’re experiencing; it’s not a diagnosis. Quell is available from the [home page](/#buy), with guest checkout and shipping to US addresses.`,
      },
    ],
    faq: [
      {
        q: 'Why do air traffic controllers get dry eyes?',
        a: `Controlling traffic demands long, intense visual focus on radar displays or out of tower windows, which sharply reduces blinking. Cool, moving air in control rooms and glare in tower cabs add to it.`,
      },
      {
        q: 'Can air traffic controllers use eye drops?',
        a: `Ask your aviation medical examiner or facility medical office first, since certification rules come from the FAA and your facility. Quell’s label doesn’t address work rules or use with other drops.`,
      },
      {
        q: 'How can controllers rest their eyes between sessions?',
        a: `Use the first minute of a break to look far away and blink fully, skip phone scrolling, get near a window if you can, and drink some water before going back on position.`,
      },
      {
        q: 'Do rotating shifts make dry eyes worse?',
        a: `Many people notice their eyes feel worse after short sleep, such as a first midnight shift or a quick turnaround. Rest, breaks from screens and keeping air vents off your face can help, and persistent symptoms need an eye doctor.`,
      },
    ],
  },
  {
    slug: 'what-to-do-for-dry-eyes-besides-eye-drops',
    title: 'What can I do for dry eyes besides eye drops?',
    description:
      'Things that help dry eyes besides drops: full blinks, screen breaks, more humid air, vents off your face and glasses in wind. And when to see an eye doctor.',
    category: 'using',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Besides eye drops, the things that help dry eyes most are changes to how you blink and the air around you: blink fully and take regular screen breaks, add moisture to dry indoor air, keep heater, air-conditioning and fan airflow off your face, and wear glasses or sunglasses outdoors in wind. If dryness persists, or you have pain or vision changes, see an eye doctor rather than trying more remedies.`,
      },
      { h: 'Why these habits help' },
      {
        p: `The front of your eye is covered by the tear film, which has three layers: mucus against the eye, a watery middle, and a thin oil layer on top that slows evaporation. Blinking spreads a fresh film with every closure. Anything that cuts down on blinking, or that speeds up evaporation, leaves that film thinner and the eye feeling dry, gritty or scratchy. The habits below work on those two levers: more full blinks, and slower evaporation.`,
      },
      { h: 'How to relieve dry eyes without eye drops' },
      {
        p: `Start with the steps that cost nothing:`,
      },
      {
        list: [
          `Blink fully. Close your eyes all the way, gently, and open them. Do a few on purpose whenever you notice you’ve been staring.`,
          `Take screen breaks. Every 20 minutes, look at something across the room or out a window for about 20 seconds.`,
          `Lower your screen a little. A monitor slightly below eye level means your eyes aren’t opened as wide.`,
          `Turn vents and fans away from your face, at your desk, in the car and over your bed.`,
          `Add moisture to dry indoor air in winter with a humidifier, especially in the bedroom.`,
          `Wear glasses or wraparound sunglasses outdoors when it’s windy.`,
        ],
      },
      { h: 'Blinking and screen breaks' },
      {
        p: `Screens are the most common reason people blink less. When you’re reading, coding, gaming or answering email, blinks become less frequent and often incomplete. You won’t notice it happening, so a reminder helps: a timer every 20 minutes, or a habit like blinking a few times whenever you send a message. Making text larger and reducing glare from a window behind the screen also makes it less likely you’ll squint and stare. Our guide to [dry eyes when reading](/guides/dry-eyes-when-reading) covers the same habits for printed pages.`,
      },
      { h: 'Humidity and indoor air' },
      {
        p: `Dry air pulls water from the eye’s surface faster. Indoors, winter heating is the main culprit: warming cold air without adding water lowers its relative humidity, so rooms can be very dry even when it’s damp outside. Air conditioning removes moisture too. A humidifier, cleaned as its maker directs, can make a bedroom or office more comfortable. Our guide to [whether a humidifier helps dry eyes](/guides/does-a-humidifier-help-dry-eyes) goes into settings and placement.`,
      },
      { h: 'Keeping airflow off your face' },
      {
        p: `Moving air is the second big factor. Small adjustments help:`,
      },
      {
        list: [
          `In the car, aim dash vents at your chest or the windshield, and use the floor setting for heat.`,
          `At work, check whether a ceiling diffuser is blowing on your chair; facilities can often redirect it.`,
          `At home, slow or switch off a ceiling fan above the bed or couch.`,
          `Keep space heaters and desk fans pointed at your body or legs, not your face.`,
        ],
      },
      { h: 'Outdoors: wind, sun and dust' },
      {
        p: `Wind across the eye speeds evaporation, and dust or grit is irritating on its own. Wraparound sunglasses or safety glasses work as a windbreak as well as a sun shield. For cycling, skiing or boating, goggles or close-fitting glasses help more. If you work outdoors, our guide for [outdoor workers](/guides/dry-eyes-for-outdoor-workers) has job-specific ideas.`,
      },
      { h: 'What about home remedies?' },
      {
        p: `You’ll find plenty of suggestions for natural or home remedies for dry eyes. We don’t recommend any of them here, and we don’t suggest supplements. Putting homemade mixtures or anything not made for eyes into them can do harm. If you want to try something beyond the habits above, ask an eye doctor, who can look at your eyes and work out the cause and what to do about it.`,
      },
      { h: 'When eye drops make sense too' },
      {
        p: `Habits and drops aren’t either-or. Many people change their surroundings and also use a lubricating drop. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists the Uses as: {uses}. The directions say: {directions}. One caution applies: {warnings}. The label doesn’t give directions for contact lenses, children or use alongside other drops; ask your eye doctor or pharmacist. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay dry after a couple of weeks of better habits, or you have symptoms such as pain, blurred vision, light sensitivity, or one eye far worse than the other, make an appointment. An eye exam is how you find out what’s actually going on. Drop labels are direct about when to stop and ask a doctor; Quell’s says: {stopUse}`,
      },
      {
        p: `Our [dry eye self-check](/self-check) can help you organize your symptoms before the visit; it’s not a diagnosis. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the urgent ones.`,
      },
    ],
    faq: [
      {
        q: 'How can I fix dry eyes without eye drops?',
        a: `Blink fully and often, take screen breaks every 20 minutes, add moisture to dry indoor air, keep vents and fans off your face, and wear glasses in wind. If the dryness persists, see an eye doctor.`,
      },
      {
        q: 'What can I do naturally for dry eyes?',
        a: `The natural steps worth trying are habits: full blinks, regular breaks from screens, more humid indoor air, less airflow on your face and eye protection outdoors. We don’t recommend home remedies or supplements; ask an eye doctor before trying them.`,
      },
      {
        q: 'Does blinking more help dry eyes?',
        a: `Full blinks spread a fresh layer of tears across the eye, and people blink less while concentrating on screens or reading. Deliberate, complete blinks during long tasks can help keep the tear film even.`,
      },
      {
        q: 'When should I see a doctor for dry eyes?',
        a: `If dryness continues after you’ve changed your habits, or you have eye pain, vision changes, light sensitivity or ongoing irritation, see an eye doctor. Drop labels also list when to stop use and ask a doctor.`,
      },
    ],
  },
  /*
   * Source checked 2026-11-15: 21 CFR 201.66 via https://www.law.cornell.edu/cfr/text/21/201.66
   * (c)(1)-(c)(9) heading order: Drug Facts, Active ingredient(s), Purpose(s), Use(s),
   * Warning(s), Directions, Other information, Inactive ingredients, Questions?;
   * (c)(6): "Directions" followed by the directions for use in the applicable OTC
   * monograph or approved application; (d)(4): multiple statements under a heading
   * are bulleted; (d)(9): directions go in a table for three or more age groups or
   * populations; (c)(9): Questions? is followed by a phone number, days and times
   * recommended.
   */
  /* directions-section-eye-drop-label: FDA references removed 2026-11-18 at Phillip's request. */
  {
    slug: 'directions-section-eye-drop-label',
    title: 'The Directions section on an eye drop label',
    description:
      'What the Directions section of an OTC eye drop’s Drug Facts label tells you, where it sits on the panel, how to read Quell’s, and what it leaves to a doctor.',
    category: 'label',
    addedOn: '2026-11-15',
    body: [
      {
        p: `The Directions section of an eye drop’s Drug Facts label tells you how much to use, how often, and in which eyes. It comes right after Warnings on every Drug Facts panel, and it’s the part of the box to follow as written. Quell’s reads: {directions}. Anything it doesn’t cover, such as contact lenses, children or other drops, is a question for your eye doctor or pharmacist.`,
      },
      { h: 'Where Directions sits on the Drug Facts panel' },
      {
        p: `Every over-the-counter drug in the United States uses the same Drug Facts layout. The headings always appear in the same order, so you can find the same information on any box:`,
      },
      {
        list: [
          `Active ingredient(s), with the amount of each.`,
          `Purpose(s), the job each active ingredient does.`,
          `Use(s), what the product is for.`,
          `Warnings, including when not to use it and when to stop.`,
          `Directions, how to use it.`,
          `Other information, such as storage.`,
          `Inactive ingredients.`,
          `Questions?, with a phone number, when the label includes it.`,
        ],
      },
      {
        p: `Directions coming after Warnings is deliberate: you’re meant to know who shouldn’t use the product and what to watch for before you read how to use it. Our guide on [how to read a Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label) walks through the whole panel.`,
      },
      { h: 'Why directions look alike from brand to brand' },
      {
        p: `The Directions on a lubricating drop aren’t a brand’s creative writing. They follow the same shared standard as the product’s ingredients and its other label lines, which is why two lubricants often give nearly the same instruction. Our guide to [the OTC monograph for eye drops](/guides/what-is-the-otc-monograph-for-eye-drops) explains that standard in plain terms.`,
      },
      {
        p: `Layout varies a little more. Some boxes show a grid of ages and doses, because their directions change with age and a grid is the clearest way to show that. Others break a section into bullets. A single instruction, like Quell’s, appears as one statement.`,
      },
      { h: 'Eye drop directions: reading Quell’s' },
      {
        p: `Quell’s Directions section says: {directions}. It answers three questions in one line:`,
      },
      {
        list: [
          `How much: the number of drops per eye at each use.`,
          `How often: the number of times per day.`,
          `Where: each eye, not just the one that feels worse.`,
        ],
      },
      {
        p: `Read it as the label’s instruction, not a starting point to adjust. If a long day makes you want to use more, or one eye feels fine and you’d rather skip it, that’s a conversation for your eye doctor. Our guide on [how many drops to use](/guides/how-many-drops-of-eye-drops-should-i-take) explains why one drop is usually all the eye can hold.`,
      },
      { h: 'How often to use eye drops' },
      {
        p: `This is one of the most common questions about any drop, and the Directions section is where the answer lives. It varies by product, which is why it’s worth reading the panel of whatever bottle you’re holding rather than going by habit or by what a friend uses. For Quell, the frequency is part of the single direction quoted above. The label doesn’t say what time of day to use it, so many people tie the doses to routines they already have, like breakfast, mid-afternoon and bedtime.`,
      },
      { h: 'Lines that work with Directions' },
      {
        p: `Directions don’t stand alone. Other sections of the same panel finish the picture:`,
      },
      {
        list: [
          `When using this product: {tip}.`,
          `Do not use: {doNotUse}.`,
          `Other information: {storage}. Also: {milky}.`,
          `Warnings: {warnings}.`,
        ],
      },
      {
        p: `The stop-use guidance belongs to the Warnings section, not Directions, but it decides how long you should keep going without seeing someone. On Quell’s label it amounts to this: {stopUse}`,
      },
      { h: 'What the Directions section leaves out' },
      {
        p: `A short direction line covers the typical adult user and nothing more. Quell’s label is silent on several situations people ask about:`,
      },
      {
        list: [
          `Contact lenses: the label doesn’t say whether to use it with lenses in or out, or how long to wait.`,
          `Children: there are no directions for children, and no age table.`,
          `Other eye drops: there’s nothing about using it alongside prescribed or other OTC drops, or how to space them.`,
          `Time of day and how many days in a row: beyond the stop-use guidance, the label doesn’t set a schedule.`,
        ],
      },
      {
        p: `When the label is silent, don’t fill the gap with a guess. Ask your eye doctor, who knows your eyes, or a pharmacist, who can check your other medicines. Our guide to [using eye drops as directed](/guides/how-to-use-eye-drops-as-directed) covers technique.`,
      },
      { h: 'Questions about the label' },
      {
        p: `If something about Quell’s label is unclear, you can call {company} at {phone}, {hours}. The full panel, exactly as printed, is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'What does the Directions section on a drug label mean?',
        a: `It tells you how to use the product: how much, how often and where. On an OTC Drug Facts label it comes after Warnings, and it’s an instruction to follow rather than adjust.`,
      },
      {
        q: 'Where are the directions on an eye drop box?',
        a: `In the Drug Facts panel, under the heading Directions, which comes right after the Warnings section and before Other information. The layout is the same on every OTC drug.`,
      },
      {
        q: 'Why do some labels have a table of directions?',
        a: `When a product’s directions differ by age group, a table is the clearest way to show several ages and doses at once. A product with a single direction, like Quell, shows it as one statement.`,
      },
      {
        q: 'What if the directions don’t mention contact lenses?',
        a: `Then the label doesn’t cover it, and you shouldn’t guess. Ask your eye doctor or pharmacist whether and how to use the drop with your lenses.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-playing-pickleball-or-tennis',
    title: 'Dry eyes playing pickleball or tennis',
    description:
      'Sun, wind and glare on outdoor courts, or cold air in an indoor gym, can leave eyes dry after pickleball or tennis. Eyewear, court habits and what helps.',
    category: 'using',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Pickleball and tennis can dry out your eyes because you stare at a fast ball for long rallies, often in sun, wind and glare outdoors or under strong air handling in indoor gyms. Concentration cuts blinking, and moving air speeds evaporation. Wraparound sports eyewear, blinking between points, shade on changeovers and a lubricating drop used as its label directs can help. A ball to the eye needs prompt medical care.`,
      },
      { h: 'Why your eyes feel dry after a match' },
      {
        p: `Racquet sports ask your eyes to lock onto a small, fast object and track it without a break for the length of a rally. People blink less when they concentrate like that, and the blinks they make between shots are often partial. Every full blink refreshes the tear film; long stretches without one let it thin and dry. Add sun that makes you squint, a breeze across the court and the movement of your own head through the air, and many players walk off with eyes that feel gritty or scratchy.`,
      },
      { h: 'Outdoor courts: sun, wind and glare' },
      {
        p: `Outdoor courts are open by design, so wind has a clear path across them, and their hard surfaces bounce light back up. Afternoon play in summer often means the lowest humidity of the day too. Ways to make outdoor play easier on your eyes:`,
      },
      {
        list: [
          `Book morning courts when you can, before the air dries out and the sun gets high.`,
          `Wear a visor or cap to cut overhead glare.`,
          `Choose sports sunglasses that wrap around, so wind doesn’t come in from the sides.`,
          `On changeovers and between games, sit in the shade and take a few slow, full blinks.`,
          `Keep sunscreen away from your eyes; reapply with care, and wipe sweaty hands before touching your face.`,
        ],
      },
      { h: 'Pickleball eye protection' },
      {
        p: `Pickleball courts are small and the ball travels fast at the kitchen line, so many players wear protective eyewear to guard against being hit. Close-fitting sports glasses also do something for dryness: they block much of the wind across the eye. Look for frames that sit close to the face and lenses suited to the light you usually play in. Tennis players can get the same windbreak from wraparound sports sunglasses. If you wear prescription glasses, ask your eye doctor about sports frames.`,
      },
      { h: 'Indoor gyms and bubble courts' },
      {
        p: `Indoor play trades sun and wind for conditioned air. Recreation centers and indoor tennis facilities move a lot of air to keep players cool, and in winter that air is heated and dry. Big fans near the courts send a constant breeze across your face. A few tips:`,
      },
      {
        list: [
          `Notice where fans and vents point, and between games, sit where the air isn’t blowing directly on you.`,
          `Drink water on breaks; long indoor sessions in dry air can dry you out generally.`,
          `Bright overhead lights can produce glare; a cap can still help indoors if it’s allowed.`,
        ],
      },
      { h: 'Long tournament days and league nights' },
      {
        p: `A tournament or a round-robin can mean several hours on court with short breaks. That much sustained focus adds up. Bring a small bag with water, sunglasses, a towel and your eye drops if you use them, and keep it in the shade. On league nights after a workday at a screen, your eyes may start the match already dry. Our guide to [dry eyes at the end of the day](/guides/dry-eyes-at-the-end-of-the-day) explains why.`,
      },
      {
        p: `Players who also golf or cycle will notice similar patterns; our [golf course guide](/guides/dry-eyes-on-the-golf-course) covers long days in sun and wind.`,
      },
      { h: 'Keeping drops in your court bag' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives the Uses as: {uses}. The directions are: {directions}. The handling rule matters with sweaty hands: {tip}.`,
      },
      {
        p: `A court bag sitting in full sun, or in a car between matches, can get hotter than the label allows: {storage}. Keep it shaded, or carry the bottle in an insulated pocket. Read the caution before first use: {warnings}. The label doesn’t give directions for contact lenses or for using it with other eye drops; ask your eye doctor or pharmacist. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'When a ball hits your eye' },
      {
        p: `Lubricating drops are for ordinary dryness, not injuries. If a ball, racquet or paddle hits your eye, stop playing. Pain, blurred or double vision, seeing flashes or floaters, or blood in the eye are reasons to get emergency care right away. Even a hit that seems minor deserves a call to an eye doctor if anything feels off afterward.`,
      },
      { h: 'When dryness keeps coming back' },
      {
        p: `If your eyes stay dry well after you’ve left the court, or the dryness is getting worse, book an eye exam so a doctor can work out the cause and what to do about it. The label says when to stop and ask a doctor: {stopUse}`,
      },
      {
        p: `Our [dry eye self-check](/self-check) can help you describe your symptoms before an appointment; it’s not a diagnosis. Quell is available from the [home page](/#buy), shipped to US addresses.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry playing pickleball?',
        a: `Tracking a fast ball reduces blinking, and outdoor courts add sun, glare and wind, while indoor gyms add fans and dry conditioned air. All of these speed evaporation from the tear film.`,
      },
      {
        q: 'Should I wear eye protection for pickleball?',
        a: `Many players do, to guard against being hit by the ball at close range. Close-fitting sports glasses also block wind across the eyes, which helps with dryness.`,
      },
      {
        q: 'Do sunglasses help with dry eyes playing tennis?',
        a: `Wraparound sports sunglasses cut glare, so you squint less, and block wind from the sides. Both help keep the tear film from drying out during long rallies.`,
      },
      {
        q: 'What should I do if a pickleball hits my eye?',
        a: `Stop playing. Pain, blurred or double vision, flashes, floaters or blood in the eye need emergency care right away. For anything less severe that still feels wrong, call an eye doctor.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-firefighters',
    title: 'Dry eyes for firefighters',
    description:
      'Heat, wind, long shifts and dry station air are hard on firefighters’ eyes. Practical habits for the station and the rig, and when an eye needs real care.',
    category: 'using',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Firefighters often deal with dry eyes because the job combines heat, wind on the apparatus, long shifts, short sleep and station buildings with heating or air conditioning running around the clock. Protective gear, rest between calls, airflow kept off your face and a lubricating drop used as its label directs can help with everyday dryness. Anything that injures or burns an eye on a call needs emergency care, not drops.`,
      },
      { h: 'Why firefighters’ eyes get dry' },
      {
        p: `Heat pulls moisture from every exposed surface, and the eyes are one of the few uncovered ones. Radiant heat on a fireground, hot wind on a brush fire, and the blast of air through an open cab window on the way to a call all speed evaporation from the tear film. Then there’s the rest of the shift: hours of paperwork and training on screens, cooled or heated station air, and sleep broken by tones. Each of those makes dry, tired eyes more likely.`,
      },
      { h: 'Station life and long shifts' },
      {
        p: `Many departments work long shifts, and a station is home, office and gym for the whole tour. That means eyes spend a long time in the same indoor air. A few changes around the station help:`,
      },
      {
        list: [
          `Check where vents point in the bunk room, and keep the airflow off your face while you sleep.`,
          `Slow down or switch off a ceiling fan over the bunks or the day room couch.`,
          `During report writing and online training, look away from the screen every 20 minutes and blink fully a few times.`,
          `In winter, suggest a humidifier for the bunk room or day room if the station air feels very dry, cleaned as its maker says.`,
          `Drink water through the shift; heat and exertion dry you out generally.`,
        ],
      },
      { h: 'Sleep, tones and tired eyes' },
      {
        p: `Broken sleep is part of the job. Eyes often feel worse after a night of calls, and the morning after a busy shift is when many firefighters notice dryness most. Rest when you can, keep the bunk room dark and the airflow gentle, and give your eyes a break from your phone before trying to sleep. Our guide to [dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) covers more for people whose work runs through the night.`,
      },
      { h: 'On the rig and on the fireground' },
      {
        p: `Department policy decides what you wear and when, and your protective equipment comes first. Beyond that, a few everyday habits help:`,
      },
      {
        list: [
          `Use the eye protection your department provides on every task that calls for it, including overhaul, vehicle extrication and wildland work.`,
          `Riding with windows down means a lot of wind across your eyes; close them when it makes sense.`,
          `After a call, wash your hands and face before touching your eyes.`,
          `Don’t rub your eyes with gloves or dirty hands.`,
        ],
      },
      { h: 'What drops are not for' },
      {
        p: `Lubricating eye drops are for ordinary dryness and irritation. They are not for burns, chemical splashes, debris that won’t rinse out, or anything that hits the eye. Those need emergency care, and your department’s exposure and injury procedures apply. We don’t make claims about smoke or fireground exposures; questions about those belong with your department’s medical program and an eye doctor.`,
      },
      { h: 'Keeping drops at the station' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts Uses read: {uses}. The directions say: {directions}. And on a job with dirty hands, this line matters: {tip}.`,
      },
      {
        p: `Storage needs some thought. Apparatus compartments and turnout gear pockets can get much hotter, or colder, than the label allows: {storage}. Keep the bottle in your locker or a bag that stays inside the station, not on the rig. Read the caution first: {warnings}. The label doesn’t give directions for contact lenses or for using it with other eye drops; ask your eye doctor or pharmacist. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Days off' },
      {
        p: `Many firefighters work second jobs or spend days off outdoors. Wind, sun and screens don’t stop when the shift does. Wraparound sunglasses outdoors and a vent turned away from your face in the truck help on those days too. Our guide for [outdoor workers](/guides/dry-eyes-for-outdoor-workers) has more ideas for trades and farm work.`,
      },
      { h: 'Ordering for the station' },
      {
        p: `Quell ships from Brentwood, Tennessee, to US addresses. Guest checkout works; shipping is {shipping}, and {freeBottles} or more bottles ship free, which suits buying for a crew. A tracking email follows when it ships, but no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. Order from the [home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If dryness keeps coming back between shifts or gets worse, book an eye exam so a doctor can work out the cause and what to do about it. The label gives these reasons to stop and ask a doctor: {stopUse}`,
      },
      {
        p: `Our [dry eye self-check](/self-check) can help you describe your symptoms before the visit; it’s not a diagnosis. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers warning signs.`,
      },
    ],
    faq: [
      {
        q: 'Why do firefighters get dry eyes?',
        a: `The job combines heat and wind on calls, long shifts in heated or air-conditioned stations, screen time for reports and training, and broken sleep. Each of those speeds evaporation from the tear film or cuts down on rest.`,
      },
      {
        q: 'Can firefighters keep eye drops on the fire truck?',
        a: `It’s better not to. Apparatus compartments and gear pockets can get hotter or colder than the label’s storage range, so a locker or bag inside the station is a safer place.`,
      },
      {
        q: 'What should a firefighter do if something gets in their eye on a call?',
        a: `Follow your department’s injury procedures and get emergency care for burns, chemical splashes, impacts or debris that won’t rinse out. Lubricating drops aren’t meant for eye injuries.`,
      },
      {
        q: 'How can firefighters sleep better with dry eyes at the station?',
        a: `Keep vents and ceiling fans off your face in the bunk room, keep the room dark, put the phone away before sleeping, and consider a humidifier in winter. See an eye doctor if dryness persists.`,
      },
    ],
  },
]
