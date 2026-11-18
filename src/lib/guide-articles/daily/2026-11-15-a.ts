import type { Guide } from '@/lib/guide-types'
export const DAILY_20261115_A: Guide[] = [
  /*
   * Sources fetched 2026-11-15 for dry-eye-relief-missoula-mt:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00024153.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00024153.csv
   *   (MISSOULA INTL AP, elev 972.9 m: annual precip 14.11 in; Jun 2.14, Jul 0.85,
   *   Aug 0.83; annual snow 43.0 in, Dec 11.6, Jan 9.9; Jul high 85.4 F; Dec high
   *   30.9 F; 26.6 days at or above 90 F; 172.5 nights at or below 32 F; 42.8 days
   *   with a high at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (MISSOULA, MT, WBAN 24153: Jul 68/29, Aug 67/29, Dec 85/79, Jan 84/76,
   *   morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (MISSOULA annual 2.4, lowest Montana row with Kalispell; Dec and Jan 1.8,
   *   the station's calmest months; Helena 3.1)
   * Elevation is the NOAA station elevation, converted (972.9 m is about 3,190 ft).
   */
  {
    slug: 'dry-eye-relief-missoula-mt',
    title: 'Dry eye relief in Missoula, Montana',
    description:
      'Missoula’s July and August afternoons average 29 percent humidity, and about 172 nights a year reach freezing. NOAA’s numbers and everyday dry eye relief.',
    category: 'local',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Dry eye relief in Missoula starts with the calendar. July and August afternoons at the airport average 29 percent humidity in NOAA’s records, and from late fall into spring the furnace dries the air indoors. Shield your eyes from vents and wind, blink fully at screens, and use a lubricating drop exactly as its label directs. See an eye doctor for pain, vision changes or dryness that keeps coming back.`,
      },
      { h: 'How dry is Missoula, really?' },
      {
        p: `NOAA’s 1991 to 2020 normals for Missoula International Airport, which sits at about 973 meters (roughly 3,190 feet) on the valley floor west of downtown, describe a place that gets far less water than its green river corridors suggest:`,
      },
      {
        list: [
          `About 14.11 inches of precipitation in a normal year.`,
          `June is the wettest month at 2.14 inches, while July (0.85) and August (0.83) are the driest.`,
          `Normal snowfall is 43 inches, led by December at 11.6 inches and January at 9.9.`,
          `About 26.6 days a year reach 90°F, and roughly 172 nights fall to 32°F or lower.`,
        ],
      },
      {
        p: `The Clark Fork, the Bitterroot and Rattlesnake Creek give the valley plenty of water to look at. The air above them is another matter, especially once the June rains taper off.`,
      },
      { h: 'Late-summer afternoons in the high 20s' },
      {
        p: `NOAA’s relative humidity table lists Missoula’s July and August afternoons at 29 percent, against mornings near 68 percent. That swing is the shape of a Missoula summer day: a cool, damp start along the river, then dry heat by mid-afternoon, with normal July highs of 85.4°F. Floating the Clark Fork or climbing to the M on Mount Sentinel after lunch puts your eyes in the driest part of the day, with glare off the water or the open grass on top of it.`,
      },
      {
        list: [
          `Plan the long ride on the Kim Williams Trail for the morning, when humidity runs more than twice the afternoon figure.`,
          `Wear wraparound sunglasses on the river; they block breeze and reflected glare together.`,
          `Step into shade now and then for a few slow, complete blinks.`,
          `Aim the car’s air conditioning at your chest, not your face, on the drive back from the Bitterroot.`,
        ],
      },
      { h: 'Winter in the valley: damp outside, dry inside' },
      {
        p: `December flips the numbers. Afternoon humidity averages 79 percent and mornings 85 percent, so the outdoor air in a Missoula winter is anything but dry. NOAA’s wind table also shows Missoula tied for the calmest station in Montana, with December and January its stillest months. The trouble is indoors. Normal December highs reach only 30.9°F, and about 43 days a year never climb above freezing, so heating systems run for months. Warming cold outdoor air without adding moisture drops its relative humidity sharply, which is why a house can feel parched while fog hangs over the valley.`,
      },
      {
        p: `A bedroom humidifier, a lower thermostat at night and a chair moved away from the floor register all help. Ski days at Snowbowl add cold wind on the lift, and goggles cover more of the eye than sunglasses do. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) goes room by room.`,
      },
      { h: 'Screens, studying and the campus calendar' },
      {
        p: `Missoula is a college town, and fall finals land in December, deep in heating season. Long sessions at a laptop slow your blink rate, and a library or dorm with forced-air heat dries the tear film faster between blinks. Look up from the screen every so often, and finish each blink rather than half-closing your eyes. [Dry eyes while studying for exams](/guides/dry-eyes-while-studying) has a fuller routine.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives its Uses as: {uses}. The directions say: {directions}. Keep the dropper clean too: {tip}.`,
      },
      {
        p: `The panel also carries this caution: {warnings}. For storage it says: {storage}. A truck parked at a trailhead in August or left in the Snowbowl lot in January can move past either end of that range, so carry the bottle in a jacket pocket or bring it inside. Everything on the panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Missoula' },
      {
        p: `We ship from Brentwood, Tennessee, to Missoula, Lolo, Frenchtown and every other US address. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking arrives by email, though no delivery date is promised, so reorder before the bottle runs low. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. The [Missoula page](/eye-drops/missoula-mt) and the [Montana page](/eye-drops/state/montana) have local details, or you can [order from the home page](/#buy).`,
      },
      { h: 'When it’s time for an eye doctor' },
      {
        p: `A drop is for everyday dryness, not for working out the cause of symptoms that keep returning. The label sets the limit: {stopUse} Pain, blurred vision that doesn’t clear, or one eye much worse than the other calls for an appointment rather than another bottle. The [self-check](/self-check) can help you describe what you’re feeling before the visit; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Missoula in the summer?',
        a: `NOAA’s table puts July and August afternoons at Missoula International Airport at 29 percent relative humidity, and each of those months normally sees less than an inch of rain. Warm, dry afternoon air pulls water from the tear film quickly.`,
      },
      {
        q: 'How much snow does Missoula get?',
        a: `About 43 inches in a normal year at Missoula International Airport, according to NOAA’s 1991 to 2020 normals. December averages 11.6 inches and January 9.9.`,
      },
      {
        q: 'Is Missoula humid in the winter?',
        a: `Outdoors, yes. December afternoons average 79 percent relative humidity in NOAA’s table. Indoor air turns much drier once the heat runs, which is why eyes often feel worse inside than out.`,
      },
      {
        q: 'Does Quell ship to Missoula, Montana?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Missoula and anywhere else in the US, with guest checkout and tracking by email. No arrival date is promised, so order before you run out.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-15 for dry-eye-relief-helena-mt:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00024144.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00024144.csv
   *   (HELENA RGNL AP, elev 1166.8 m: annual precip 11.40 in; Dec-Feb 1.27 in;
   *   Jan 0.39; Jun 2.21, May 1.95; annual snow 37.2 in, Dec 7.7; Jul high 86.1 F;
   *   Jan low 13.5 F, Dec low 14.2 F; 27.3 days at or above 90 F; 169.8 nights at
   *   or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (HELENA, MT, WBAN 24144: Jul 61/29, Aug 61/29, Jan 71/64, Dec 72/66;
   *   MISSOULA Jan afternoon 76, Dec 79; morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (HELENA: Apr 3.7 highest month; Dec and Jan 2.5 lowest)
   * Elevation is the NOAA station elevation, converted (1166.8 m is about 3,830 ft).
   */
  {
    slug: 'dry-eye-relief-helena-mt',
    title: 'Dry eye relief in Helena, Montana',
    description:
      'Helena gets only 1.27 inches of precipitation from December through February, and July afternoons average 29 percent humidity. Dry eye relief, season by season.',
    category: 'local',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Dry eye relief in Helena means handling two kinds of dry air. NOAA’s records put July and August afternoons at 29 percent humidity, and winter brings very little precipitation along with months of indoor heat. Keep vents off your face, wear wraparound sunglasses in the wind, rest your eyes during screen work, and use a lubricating drop as its label directs. Pain or vision changes need an eye doctor.`,
      },
      { h: 'Helena’s weather by the numbers' },
      {
        p: `Helena Regional Airport, the city’s official weather station, sits at about 1,167 meters, close to 3,830 feet. Its NOAA normals for 1991 to 2020 show:`,
      },
      {
        list: [
          `11.40 inches of precipitation in a normal year, roughly four-fifths of Missoula’s total.`,
          `Only 1.27 inches from December through February combined, with January the driest month at 0.39 inches.`,
          `June is wettest at 2.21 inches, followed by May at 1.95.`,
          `37.2 inches of snow a year, with December leading at 7.7 inches.`,
          `About 27 days a year at 90°F or warmer, and roughly 170 nights at or below freezing.`,
        ],
      },
      {
        p: `Helena gets most of its moisture in late spring, and winter is the dry season. That surprises plenty of newcomers who picture a snowy mountain town buried from Thanksgiving to Easter.`,
      },
      { h: 'Why are winters so dry in Helena?' },
      {
        p: `Light snowfalls and cold, clear nights. January’s normal low is 13.5°F and December’s is 14.2°F, and NOAA’s relative humidity table puts Helena’s winter afternoons in the mid-60s, well under the upper 70s it records for Missoula. Then the furnace takes that cold air and warms it, which pushes indoor relative humidity much lower still. Bedrooms, offices and cars all end up with air that pulls moisture from your eyes faster than you might notice.`,
      },
      {
        p: `Indoor habits that help through a Helena winter:`,
      },
      {
        list: [
          `Run a humidifier in the bedroom and clean it on the schedule its manual gives.`,
          `Turn the heat down at night; a cooler room is less parched.`,
          `Close or redirect the register nearest your desk or reading chair.`,
          `In the car, switch the vents to the floor and windshield once the defroster has cleared the glass.`,
        ],
      },
      { h: 'Spring wind and summer sun' },
      {
        p: `NOAA’s average wind speed table shows April as Helena’s windiest month, with the calmest stretch in December and January. Spring gusts across the valley carry grit from fields and gravel roads, and that’s when close-fitting sunglasses earn a spot on the dashboard. By July the wind eases but the air dries out: afternoons average 29 percent humidity, mornings about 61 percent, and normal highs reach 86.1°F.`,
      },
      {
        p: `A morning hike up Mount Helena or an early paddle on Canyon Ferry Lake catches the gentler part of the day. Open water adds glare and steady breeze, and our guide to [dry eyes on a boat](/guides/dry-eyes-on-a-boat) covers the gear that helps.`,
      },
      { h: 'Desk days in the capital' },
      {
        p: `As the state capital, Helena has a lot of people working long hours at monitors in government and downtown office buildings, often under forced-air heat in winter and air conditioning in summer. Screen work slows blinking, so the tear film has more time to thin between blinks. Set a reminder to look across the room now and then, lower the monitor slightly so your eyes aren’t opened wide, and make each blink a full one.`,
      },
      { h: 'Using Quell as directed' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists these Uses: {uses}. Follow the directions: {directions}. Read the warning before your first bottle: {warnings}.`,
      },
      {
        p: `The storage line reads: {storage}. Helena nights fall far below the low end of that range for much of the year, so a bottle shouldn’t spend the night in a parked car on Last Chance Gulch. The [Drug Facts page](/drug-facts) shows the complete panel.`,
      },
      { h: 'Getting Quell delivered in Helena' },
      {
        p: `Quell ships to Helena, East Helena and the rest of the United States from Brentwood, Tennessee. You check out without an account; shipping is {shipping}, or free on {freeBottles} or more bottles. We email tracking once the order leaves, but we don’t name a delivery date. An unopened bottle is refundable within {returnDays} days of delivery with no need to return it. Local details live on the [Helena page](/eye-drops/helena-mt) and the [Montana page](/eye-drops/state/montana).`,
      },
      { h: 'Symptoms that need a doctor' },
      {
        p: `When dryness keeps returning, an eye doctor is the person to work out the cause and what to do about it. The label says: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) explains the signs worth acting on.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Helena in the winter?',
        a: `Helena’s winter is its driest season for precipitation, with about 1.27 inches from December through February in NOAA’s normals. Cold outdoor air heated indoors loses much of its relative humidity, so homes and offices get very dry.`,
      },
      {
        q: 'How cold does Helena, Montana get at night?',
        a: `NOAA’s 1991 to 2020 normals give Helena Regional Airport a January low of 13.5°F and a December low of 14.2°F, with roughly 170 nights a year at or below freezing.`,
      },
      {
        q: 'What is the windiest month in Helena?',
        a: `April, according to NOAA’s average wind speed table for Helena. December and January are the calmest months of the year there.`,
      },
      {
        q: 'Can I order Quell to Helena, Montana?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Helena and across the US. Checkout is as a guest and tracking comes by email, but no delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-15 for dry-eye-relief-laramie-wy:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00024022.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00024022.csv
   *   (LARAMIE RGNL AP, elev 2214.7 m: annual precip 10.52 in; Dec-Feb 0.92 in;
   *   Jan 0.28; May 1.75; Jun-Aug 3.97 in; Jul high 81.1 F, low 48.5 F; Jan low
   *   10.3 F, Dec low 10.2 F; 2.5 days at or above 90 F; 211.9 nights at or below
   *   32 F; 54.2 days with a high at or below 32 F; no snowfall normal published)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (no Laramie row. CHEYENNE annual 5.4, tied with Casper for the highest
   *   Wyoming/Montana row; Jan 6.3, Dec 6.2, Jul 4.4)
   * - relhum23.txt has no Laramie row; humidity left out rather than borrowed.
   * Elevation is the NOAA station elevation, converted (2214.7 m is about 7,270 ft).
   */
  {
    slug: 'dry-eye-relief-laramie-wy',
    title: 'Dry eye relief in Laramie, Wyoming',
    description:
      'Laramie sits near 7,270 feet, logs about 212 freezing nights a year and gets under an inch of winter precipitation. How to keep your eyes comfortable there.',
    category: 'local',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Dry eye relief in Laramie comes down to altitude, cold and wind. The airport weather station sits near 7,270 feet, December through February brings less than an inch of precipitation, and heating runs most of the year. Block the wind with wraparound glasses or goggles, humidify the rooms you sleep and work in, blink fully at screens, and use a lubricating drop exactly as labeled.`,
      },
      { h: 'Life at 7,270 feet' },
      {
        p: `Laramie Regional Airport’s station stands at 2,214.7 meters, about 7,270 feet, nearly 2,000 feet higher than Denver. Its NOAA normals for 1991 to 2020 read like a high-desert record:`,
      },
      {
        list: [
          `10.52 inches of precipitation in a normal year.`,
          `Just 0.92 inches from December through February, with January averaging 0.28.`,
          `May is the wettest month, at 1.75 inches.`,
          `About 212 nights a year at or below 32°F, and roughly 54 days when the high never gets above freezing.`,
          `Only about 2.5 days a year reach 90°F; July’s normal high is 81.1°F.`,
        ],
      },
      {
        p: `NOAA’s monthly file for this station doesn’t publish a snowfall normal, so you won’t find a snow total here. The precipitation figures alone show how little moisture reaches the Laramie Plains in the cold months.`,
      },
      { h: 'Wind on the Laramie Plains' },
      {
        p: `NOAA’s average wind speed table has no row for Laramie itself. Its nearest listed station is Cheyenne, just across the Laramie Range, and Cheyenne ties Casper for the highest yearly average of any Wyoming or Montana city in the table. The windiest months there are January and December, when the average runs about 40 percent above July’s. Moving air carries water away from the surface of the eye, and wind with dry air does it faster.`,
      },
      {
        list: [
          `Wear wraparound sunglasses or glasses with side shields for walks across campus.`,
          `Pack ski or snowshoe goggles for the Snowy Range, where exposed ridges catch the full force of a gust.`,
          `Use a brimmed hat or hood to break wind coming straight at your face.`,
          `Turn your back to the wind, or duck into the car, before putting a drop in outdoors.`,
        ],
      },
      { h: 'Ten-degree nights and dry heat indoors' },
      {
        p: `January and December lows near 10°F mean Laramie furnaces and boilers work hard from fall into late spring. Heating air that cold without adding water leaves very little relative humidity indoors, and the winter air outside was carrying little moisture to begin with. Older rentals and dorms near the University of Wyoming can get especially dry, and so can the car on a long run over I-80.`,
      },
      {
        p: `A small humidifier by the bed, a slightly cooler thermostat after dark and keeping your face out of the path of the space heater help more than you might expect. Our guide to [dry eyes from cold air](/guides/dry-eyes-from-cold-air) covers the outdoor half of a Wyoming winter.`,
      },
      { h: 'Short, cool summers that still dry your eyes' },
      {
        p: `Summer is mild by Western standards, with July highs near 81°F and nights around 48.5°F, and June through August brings more than a third of the year’s precipitation, much of it in afternoon storms. Even so, a midday scramble at Vedauwoo or a hike to Medicine Bow Peak means sun, breeze and glare off pale granite, often for hours. Start early, wear sunglasses that wrap, and give your eyes a few minutes in the shade with your eyes gently closed when they start to sting.`,
      },
      { h: 'How to use Quell' },
      {
        p: `Quell is a lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel states the Uses: {uses}. The directions are short: {directions}. One caution applies to everyone: {warnings}.`,
      },
      {
        p: `Storage matters at this altitude and temperature. The label says: {storage}. A Laramie winter night sits far below that range, so keep the bottle indoors or in an inside pocket rather than the glove box. Read the full panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Laramie' },
      {
        p: `Orders go out from Brentwood, Tennessee, to Laramie, Centennial and every other US address. There’s guest checkout, shipping is {shipping}, and {freeBottles} or more bottles ship free. You get tracking by email, though no delivery date is promised, and winter storms on the interstate are a good reason to order early. Unopened bottles are refundable within {returnDays} days of delivery without being sent back. See the [Laramie page](/eye-drops/laramie-wy) or the [Wyoming page](/eye-drops/state/wyoming).`,
      },
      { h: 'When to see an eye doctor in Laramie' },
      {
        p: `Persistent dryness is worth an exam, since an eye doctor can work out the cause and what to do about it. The label is specific: {stopUse} If one eye hurts, your vision blurs and stays blurred, or something seems lodged in the eye after a windy day, book an appointment.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Laramie?',
        a: `Laramie combines altitude, very little winter precipitation (0.92 inches from December through February in NOAA’s normals), long heating seasons and frequent wind. Each of those speeds evaporation from the tear film.`,
      },
      {
        q: 'How high is Laramie, Wyoming?',
        a: `NOAA lists the Laramie Regional Airport weather station at 2,214.7 meters, which is about 7,270 feet above sea level.`,
      },
      {
        q: 'How cold does Laramie get in winter?',
        a: `NOAA’s 1991 to 2020 normals give Laramie a January low of 10.3°F and a December low of 10.2°F, with about 212 nights a year at or below freezing.`,
      },
      {
        q: 'Does Quell ship to Laramie, Wyoming?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Laramie and the rest of the US, with tracking by email. Delivery dates aren’t promised, so order with time to spare, especially in winter.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-15 for dry-eye-relief-pueblo-co:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00093058.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00093058.csv
   *   (PUEBLO MEM AP, elev 1438.7 m: annual precip 12.02 in; Jun-Aug 5.28 in;
   *   Dec-Feb 0.90 in; Aug 2.11, Jul 1.89; Dec 0.29, Jan 0.29; annual snow 28.3 in;
   *   Jul high 93.4 F; Jan high 48.4 F, low 15.4 F; 71.6 days at or above 90 F;
   *   11.9 days at or above 100 F; 165.0 nights at or below 32 F; 14.4 days with a
   *   high at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (PUEBLO, CO, WBAN 93058: Apr 59/30, Jun 61/29, Jul 63/32, Jan 64/49,
   *   Dec 64/50, annual 63/37, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (PUEBLO: Apr 4.6 highest month; Dec 3.1 lowest)
   * Elevation is the NOAA station elevation, converted (1438.7 m is about 4,720 ft).
   */
  {
    slug: 'dry-eye-relief-pueblo-co',
    title: 'Dry eye relief in Pueblo, Colorado',
    description:
      'Pueblo averages about 72 days a year at 90°F or hotter and 37 percent afternoon humidity. NOAA’s numbers and practical ways to keep your eyes comfortable.',
    category: 'local',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Dry eye relief in Pueblo means planning around sun, heat and wind. NOAA’s records show about 72 days a year at 90°F or hotter, spring afternoons near 30 percent humidity, and April as the windiest month. Wear wraparound sunglasses outdoors, keep air conditioning and heater vents off your face, take screen breaks, and use a lubricating drop exactly as its label says. Pain or vision changes need an eye doctor.`,
      },
      { h: 'Pueblo’s climate in NOAA’s normals' },
      {
        p: `The official station is at Pueblo Memorial Airport, east of town at about 1,439 meters, close to 4,720 feet. Its 1991 to 2020 normals describe a sunny, semi-arid place on the Arkansas River:`,
      },
      {
        list: [
          `12.02 inches of precipitation in a normal year.`,
          `5.28 inches of that falls from June through August, with August the wettest month at 2.11 inches.`,
          `December through February adds up to only 0.90 inches.`,
          `28.3 inches of snow in a typical year, which usually melts fast in the sun.`,
          `About 72 days at 90°F or higher, including roughly 12 days at 100°F or more.`,
        ],
      },
      {
        p: `Summer storms supply most of the rain, often in short afternoon bursts, and the air dries out again soon after. Winter is the parched season for precipitation, yet Pueblo winter afternoons are often mild enough for a walk.`,
      },
      { h: 'Hot summer afternoons on the Arkansas' },
      {
        p: `July’s normal high is 93.4°F. NOAA’s relative humidity table gives June afternoons 29 percent and July 32 percent, against mornings in the low 60s. That’s the window when your eyes lose water fastest, whether you’re fishing below Pueblo Dam, paddling at Lake Pueblo State Park or walking the Historic Arkansas Riverwalk after work. Water reflects sun up into the eyes, so the glare adds to the strain.`,
      },
      {
        list: [
          `Get outside early; morning humidity is about double the afternoon figure.`,
          `Choose sunglasses that curve around the sides of your face.`,
          `Take a few slow, complete blinks whenever you come in out of the heat.`,
          `Keep a bottle of drops out of the car between uses; a parked car in a Pueblo summer gets far warmer than the label allows.`,
        ],
      },
      { h: 'State Fair season and dusty days' },
      {
        p: `Late summer brings the Colorado State Fair and its fairgrounds, livestock barns, rodeo arena and midway. Long hours outdoors in sun, dust and crowds can leave eyes gritty by evening. Bring sunglasses, clean your hands before touching your face, and step into a shaded building now and then. If you need a drop while you’re out, find somewhere you can wash your hands first and follow the bottle’s directions.`,
      },
      { h: 'April wind and the spring dry spell' },
      {
        p: `NOAA’s average wind speed table puts April at the top of Pueblo’s year, with December the calmest month. Spring afternoons also run dry, about 30 percent humidity in April. Wind carries grit off open ground east of town and pulls moisture off the eye at the same time. On those days, keep car windows up on the highway, point vents away from your face, and wear glasses outdoors even when it’s cloudy.`,
      },
      { h: 'Mild winter days, cold nights, dry rooms' },
      {
        p: `Pueblo winters swing hard between day and night. January averages a high of 48.4°F and a low of 15.4°F, a spread of 33 degrees, and only about 14 days a year stay at or below freezing all afternoon. Furnaces kick on each evening as the temperature drops, which is when indoor air turns driest. NOAA puts December and January afternoons near 50 percent humidity outdoors, but heated indoor air holds far less. A humidifier in the bedroom and a cooler thermostat at night help, and our guide to [waking up with dry eyes in winter](/guides/waking-up-with-dry-eyes-in-winter) has more ideas.`,
      },
      { h: 'Quell’s label, in brief' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. The directions say: {directions}. Check the caution before buying: {warnings}.`,
      },
      {
        p: `The label also says {storage}, which matters in a city with dozens of days above 90°F. Keep the bottle in a bag that comes inside with you. Our [Drug Facts page](/drug-facts) shows every line of the panel.`,
      },
      { h: 'Buying Quell in Pueblo' },
      {
        p: `Quell is sold online and ships from Brentwood, Tennessee, to Pueblo, Pueblo West and the rest of the country. Guest checkout is the only kind; shipping is {shipping}, and {freeBottles} or more bottles ship free. We email tracking, but no delivery date is promised. If a bottle is still unopened, you can get a refund within {returnDays} days of delivery without returning it. The [Pueblo page](/eye-drops/pueblo-co) and the [Colorado page](/eye-drops/state/colorado) have more.`,
      },
      { h: 'Seeing an eye doctor' },
      {
        p: `Drops are for everyday dryness. Working out why your eyes keep bothering you belongs to an eye doctor, and the label says when to stop: {stopUse} Dust or grit that won’t rinse out, or an eye that hurts after a windy day, is a reason to call sooner.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Pueblo?',
        a: `Pueblo is semi-arid, with about 12 inches of precipitation a year in NOAA’s normals and summer afternoon humidity near 30 percent. Strong sun, spring wind and indoor heat in winter all speed evaporation from the tear film.`,
      },
      {
        q: 'How many days a year is Pueblo over 90 degrees?',
        a: `About 72 days a year at Pueblo Memorial Airport reach 90°F or more, according to NOAA’s 1991 to 2020 normals. Roughly 12 of those reach 100°F.`,
      },
      {
        q: 'What is the windiest month in Pueblo, Colorado?',
        a: `April is the windiest month in NOAA’s average wind speed table for Pueblo, and December is the calmest.`,
      },
      {
        q: 'Can I get Quell shipped to Pueblo?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Pueblo and every other US address, with guest checkout and tracking by email. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-15 for dry-eye-relief-grand-junction-co:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00023066.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00023066.csv
   *   (GRAND JUNCTION WALKER FLD, elev 1480.7 m: annual precip 9.06 in; Sep 1.19
   *   wettest, Jun 0.41 driest; annual snow 17.7 in, Dec 5.2, Jan 4.5; Jul high
   *   94.5 F; Jan high 38.1 F, low 17.3 F; 67.8 days at or above 90 F; 7.7 days at
   *   or above 100 F; 137.2 nights at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (GRAND JUNCTION, CO, WBAN 23066: May 47/24, Jun 38/18, Jul 43/21,
   *   Aug 48/24, Jan 75/64, Dec 74/62, annual 56/36, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (GRAND JUNCTION: Jun 4.2 highest; Dec and Jan 2.4 lowest)
   * Elevation is the NOAA station elevation, converted (1480.7 m is about 4,860 ft).
   */
  {
    slug: 'dry-eye-relief-grand-junction-co',
    title: 'Dry eye relief in Grand Junction, Colorado',
    description:
      'June afternoons in Grand Junction average 18 percent humidity, and the city gets about 9 inches of precipitation a year. NOAA’s figures and dry eye relief.',
    category: 'local',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Dry eye relief in Grand Junction is mostly about the desert summer. NOAA’s records put June afternoons at 18 percent humidity, the city averages about 9 inches of precipitation a year, and roughly 68 days reach 90°F. Wear wraparound sunglasses on the trails and the river, keep vents off your face, rest your eyes at screens, and use a lubricating drop as its label directs. See an eye doctor for pain or vision changes.`,
      },
      { h: 'Grand Junction is high desert' },
      {
        p: `The Book Cliffs, the Colorado National Monument and the bare adobe hills around the valley tell you how dry this country is before any weather report does. NOAA’s 1991 to 2020 normals for Grand Junction Regional Airport (Walker Field), at about 1,481 meters or 4,860 feet, put numbers on it:`,
      },
      {
        list: [
          `9.06 inches of precipitation in a normal year.`,
          `June is the driest month at 0.41 inches; September is the wettest at 1.19.`,
          `17.7 inches of snow a year, with December (5.2) and January (4.5) leading.`,
          `About 68 days a year at 90°F or warmer, and close to 8 at 100°F or more.`,
          `July’s normal high is 94.5°F.`,
        ],
      },
      { h: 'Why June is the hardest month on your eyes' },
      {
        p: `NOAA’s relative humidity table gives Grand Junction June afternoons an average of just 18 percent, with July at 21 and May and August at 24. Mornings are damper, 38 percent in June, but still low. Its average wind speed table also makes June the windiest month of the year here. Put dry air, wind and long daylight together and the tear film loses water fast, especially for anyone spending afternoons on a mountain bike, on the Colorado River or in the orchards and vineyards of Palisade.`,
      },
      {
        list: [
          `Ride the Lunch Loops or hike the monument early, before afternoon heat and wind build.`,
          `Pick sunglasses that wrap around and sit close to the face; they cut wind as well as glare.`,
          `On the river, a brimmed hat helps with the light bouncing off the water.`,
          `Rest your eyes in the shade for a minute or two with them closed when they start to feel scratchy.`,
        ],
      },
      { h: 'Grand Mesa days and cold-weather trips' },
      {
        p: `The Grand Mesa rises above the valley, and a short drive can take you from desert heat to snowfields. Skiing at Powderhorn or ice fishing on the mesa lakes trades heat for cold wind and glare off the snow. Goggles cover more of the eye than sunglasses, and a car heater on the drive back should blow at the floor and windshield, not your face. [Ski trips, cold wind and dry eyes](/guides/ski-trips-and-dry-eyes) covers the mountain side in more detail.`,
      },
      { h: 'Valley winters: damp air, dry rooms' },
      {
        p: `Winter changes the outdoor picture. January afternoons in NOAA’s table average 64 percent humidity and December 62 percent, much damper than summer. Nights are cold, with a January low of 17.3°F and about 137 nights a year at or below freezing. That means furnaces run evenings and mornings for months, and heated indoor air ends up much drier than the air outside. A humidifier where you sleep, a cooler room at night and moving your favorite chair away from heat registers all help.`,
      },
      { h: 'Screens in a sunny town' },
      {
        p: `Bright afternoons push a lot of people indoors to air-conditioned offices, classrooms at Colorado Mesa University and home desks. Screens slow your blink rate, and cold air from a ceiling vent dries the eye between blinks. Angle the monitor slightly below eye level, look away across the room every so often, and blink fully. Our guide on [screens and your tear film](/guides/screens-and-your-tear-film) explains why it helps.`,
      },
      { h: 'Using Quell' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel describes its Uses: {uses}. The directions: {directions}. And one line to read first: {warnings}.`,
      },
      {
        p: `Storage is a real concern in a valley where July highs average almost 95°F. The label says: {storage}. Keep the bottle out of the glove box and the trailhead parking lot. The whole panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in Grand Junction' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Grand Junction, Fruita, Palisade and anywhere else in the US. There’s no account to make, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You’ll get tracking by email, but we don’t promise a delivery date. Unopened bottles can be refunded within {returnDays} days of delivery with nothing to send back. Visit the [Grand Junction page](/eye-drops/grand-junction-co) or the [Colorado page](/eye-drops/state/colorado).`,
      },
      { h: 'When to call an eye doctor' },
      {
        p: `If dryness keeps coming back, an eye doctor can work out the cause and what to do about it. The label is clear about stopping: {stopUse} Sand or grit that stays in the eye after a windy ride is another reason to get it looked at.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Grand Junction?',
        a: `Grand Junction is high desert, with about 9 inches of precipitation a year and June afternoon humidity averaging 18 percent in NOAA’s table. Dry air, wind and strong sun pull water from the tear film quickly.`,
      },
      {
        q: 'What is the driest month in Grand Junction, Colorado?',
        a: `June. NOAA’s 1991 to 2020 normals give it 0.41 inches of precipitation, and its afternoon humidity averages 18 percent, the lowest of the year.`,
      },
      {
        q: 'Does Grand Junction get much snow?',
        a: `Not much in the valley: about 17.7 inches a year at the airport in NOAA’s normals, mostly in December and January. It tends to melt quickly in the valley sun.`,
      },
      {
        q: 'Does Quell ship to Grand Junction?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Grand Junction and the rest of the US. Checkout is as a guest, tracking comes by email, and no delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-15 for dry-eye-relief-yuma-az:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00003145.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00003145.csv
   *   (YUMA MCAS, elev 64.9 m: annual precip 3.28 in; 7.9 days a year with 0.10 in
   *   or more; Jun 0.01 in, May 0.06, Apr 0.14; Sep 0.68 wettest; Jul high 106.7 F,
   *   Aug 106.4, Jun 103.3; Dec high 67.8, low 46.8; Jan high 69.8, low 47.9;
   *   180.8 days at or above 90 F; 118.2 days at or above 100 F; 0.1 nights at or
   *   below 32 F; no snow)
   * - relhum23.txt and wndspd23.txt have no Yuma row; humidity and wind figures
   *   left out rather than borrowed from Phoenix.
   * Elevation is the NOAA station elevation, converted (64.9 m is about 213 ft).
   */
  {
    slug: 'dry-eye-relief-yuma-az',
    title: 'Dry eye relief in Yuma, Arizona',
    description:
      'Yuma averages 3.28 inches of rain a year and about 118 days at 100°F or hotter. NOAA’s numbers, and how to keep eyes comfortable in desert heat and AC.',
    category: 'local',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Dry eye relief in Yuma is a year-round job. NOAA’s records show about 3.28 inches of rain a year and roughly 118 days at 100°F or more, so your eyes face desert heat outside and air conditioning inside for most of the year. Keep vents off your face, wear wraparound sunglasses, blink fully at screens, and use a lubricating drop as its label directs. Pain or vision changes need an eye doctor.`,
      },
      { h: 'One of the driest cities in NOAA’s records' },
      {
        p: `Yuma’s official normals come from the weather station at Marine Corps Air Station Yuma, which shares its runways with the city’s airport, at about 65 meters, or roughly 213 feet above sea level. The 1991 to 2020 figures:`,
      },
      {
        list: [
          `3.28 inches of precipitation in a normal year.`,
          `Only about 8 days a year bring a tenth of an inch of rain or more.`,
          `June averages 0.01 inches, and May just 0.06.`,
          `September is the wettest month, at 0.68 inches.`,
          `No measurable snow in the normals, and about one freezing night every ten years.`,
        ],
      },
      {
        p: `NOAA’s humidity and wind tables don’t include Yuma, so we haven’t borrowed numbers from another city. The rainfall record makes the point anyway: there’s very little water in the air here for much of the year.`,
      },
      { h: 'Why do my eyes hurt in the Yuma heat?' },
      {
        p: `Heat and dry air both speed evaporation from the tear film. July’s normal high is 106.7°F, August’s 106.4°F, and June’s 103.3°F, and about 181 days a year reach at least 90°F. Working the fields, fishing the Colorado River, or spending a weekend in the dunes west of town puts your eyes in sun, dust and moving air for hours at a time.`,
      },
      {
        list: [
          `Do outdoor work and errands in the early morning whenever you can.`,
          `Wear close-fitting, wraparound sunglasses; in blowing sand, goggles cover more.`,
          `Keep a hat with a brim on to cut glare from pale ground and water.`,
          `When you come inside, close your eyes for a few seconds and blink slowly before going back to a screen.`,
        ],
      },
      { h: 'Living in air conditioning' },
      {
        p: `With summer highs above 100°F for months, air conditioning runs in homes, cars, offices and stores much of the year. Cooled air is dry air, and a vent blowing at your face speeds evaporation the same way a breeze does. Try these:`,
      },
      {
        list: [
          `Aim car vents at your chest or the floor, not your eyes.`,
          `Move your desk or recliner out of the path of a ceiling or wall vent.`,
          `Run a ceiling fan on low, or not at all, at night.`,
          `Consider a small humidifier in the bedroom, cleaned as its instructions say.`,
        ],
      },
      {
        p: `Our guide to [dry eyes in a hot, dry workplace](/guides/dry-eyes-in-a-hot-workplace) goes further for anyone who works in heat or under cooling all shift.`,
      },
      { h: 'Winter in Yuma' },
      {
        p: `Winter is the reason so many visitors arrive each year. December averages a high of 67.8°F and a low of 46.8°F, and January is a touch warmer by day. Most homes barely need heat. The air is still dry, though: December and January each bring well under half an inch of rain. RV parks fill, golf courses and pickleball courts are busy, and long sunny days outdoors mean the same habits matter, just at kinder temperatures. Snowbirds who split the year between Yuma and somewhere colder can read [snowbird travel with eye drops](/guides/snowbird-travel-with-eye-drops).`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses on its Drug Facts panel: {uses}. The directions: {directions}. The handling line: {tip}.`,
      },
      {
        p: `Storage needs real attention in Yuma. The label says {storage}, and a car parked in the sun in June will blow past the top of that range quickly. Carry the bottle in a bag you take indoors, or leave it at home in a cool cupboard. Read the warnings, including the egg and bird allergy caution, on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Yuma' },
      {
        p: `We ship from Brentwood, Tennessee, to Yuma, Somerton, San Luis and every other US address. Check out as a guest; shipping is {shipping}, and {freeBottles} or more bottles ship free. You’ll get a tracking email, but no delivery date is promised, and a package left on a sunny porch in summer gets hot, so bring it in promptly. Unopened bottles are refundable within {returnDays} days of delivery without being returned. See the [Yuma page](/eye-drops/yuma-az) or the [Arizona page](/eye-drops/state/arizona).`,
      },
      { h: 'Getting help from an eye doctor' },
      {
        p: `A drop is meant for everyday dryness. If your eyes keep bothering you, an eye doctor can work out the cause and what to do about it. The label lists when to stop: {stopUse} Sand that seems stuck under a lid after a windy day also deserves a professional look.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Yuma?',
        a: `Yuma gets about 3.28 inches of rain a year in NOAA’s normals, summer highs pass 100°F for months, and air conditioning runs much of the year. Heat, dry air and cooled indoor air all pull water from the tear film.`,
      },
      {
        q: 'How many days a year is Yuma over 100 degrees?',
        a: `About 118 days a year at the Yuma station reach 100°F or more, according to NOAA’s 1991 to 2020 normals, and roughly 181 reach 90°F.`,
      },
      {
        q: 'How much rain does Yuma, Arizona get?',
        a: `About 3.28 inches in a normal year, with only around 8 days bringing a tenth of an inch or more. June averages just 0.01 inches.`,
      },
      {
        q: 'Can I order Quell to Yuma, Arizona?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Yuma and the rest of the US with tracking by email. There’s no promised delivery date, and in summer it’s worth bringing the package inside quickly.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-15 for dry-eye-relief-st-george-ut:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USC00427516.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USC00427516.csv
   *   (ST GEORGE, UT, elev 870.8 m: annual precip 9.31 in; Dec-Feb 3.46 in;
   *   Feb 1.38, Jan 1.22; Jun 0.16; annual snow 1.2 in; Jul high 101.9 F, Aug 99.9;
   *   Jan high 54.0, low 28.4; Dec high 53.0, low 27.9; 127.9 days at or above
   *   90 F; 63.1 days at or above 100 F; 62.5 nights at or below 32 F; 0 days with
   *   a high at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (no St. George row; nearest listed station LAS VEGAS, NV, WBAN 23169:
   *   Jun 21/10, Jul 27/15, Dec 50/32, annual 36/20, morning/afternoon)
   * Elevation is the NOAA station elevation, converted (870.8 m is about 2,860 ft).
   */
  {
    slug: 'dry-eye-relief-st-george-ut',
    title: 'Dry eye relief in St. George, Utah',
    description:
      'St. George logs about 63 days a year at 100°F or more and just 0.16 inches of rain in June. NOAA’s numbers and everyday dry eye relief in Utah’s Dixie.',
    category: 'local',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Dry eye relief in St. George means guarding against desert heat in summer and dry, sunny air the rest of the year. NOAA’s normals show about 63 days a year at 100°F or hotter and only 0.16 inches of rain in June. Hike early, wear wraparound sunglasses, keep air conditioning off your face, take screen breaks, and use a lubricating drop exactly as labeled. See an eye doctor for pain or vision changes.`,
      },
      { h: 'St. George’s weather in NOAA’s records' },
      {
        p: `St. George sits in Utah’s southwest corner, below the red cliffs and lava ridges that frame the Virgin River valley. NOAA’s 1991 to 2020 normals for its station, at about 871 meters or 2,860 feet, show a climate closer to Las Vegas than to Salt Lake City:`,
      },
      {
        list: [
          `9.31 inches of precipitation in a normal year.`,
          `Winter is the wet season: 3.46 inches from December through February, with February wettest at 1.38.`,
          `June averages just 0.16 inches.`,
          `About 1.2 inches of snow a year, and not a single normal day when the high stays at or below freezing.`,
          `About 128 days a year at 90°F or warmer, including about 63 at 100°F or more.`,
        ],
      },
      { h: 'Desert summers and early starts' },
      {
        p: `July’s normal high is 101.9°F, and August averages 99.9°F. NOAA’s relative humidity table doesn’t list St. George, but its nearest listed station, Las Vegas, averages 10 percent humidity on June afternoons and 15 percent in July. Air that dry pulls water off the eye quickly, and the sun reflecting off red sandstone adds glare. That’s why trail runners in Snow Canyon State Park and hikers heading toward Zion tend to start at first light.`,
      },
      {
        list: [
          `Get out at dawn; afternoons are the hottest and driest part of the day.`,
          `Wear sunglasses that wrap around, and a brimmed hat for the glare off rock and sand.`,
          `Carry the drops in a pack pocket away from direct sun, not on the dashboard.`,
          `In the shade, close your eyes gently for a minute and let them rest.`,
        ],
      },
      { h: 'Water, wind and sand' },
      {
        p: `Paddling or boating at Sand Hollow and Quail Creek reservoirs means bright water, steady breeze and, on the beach, blowing sand. Off-road trips in the dunes add dust thrown up by tires. Close-fitting sunglasses help on the water, goggles help in the dunes, and rinsing your hands before touching your eyes matters more than usual after a sandy day. Our guide to [dry eyes on a boat](/guides/dry-eyes-on-a-boat) covers the lake side.`,
      },
      { h: 'Mild winters, cold mornings' },
      {
        p: `St. George winters are gentle by day. January averages a high of 54.0°F, but the low is 28.4°F, and the station logs about 62 nights a year at or below freezing. Heaters run in the mornings and evenings, and warmed indoor air holds much less moisture than you might expect for the wettest season. The Las Vegas row in NOAA’s table shows December afternoons near 32 percent humidity, dry by most standards. A humidifier in the bedroom and a vent turned away from the bed can help.`,
      },
      { h: 'Golf, pickleball and long days outside' },
      {
        p: `Mild winters bring golfers, pickleball players and winter residents from colder states. Hours on an open course or court mean steady sun and breeze on the eyes even in January. Sunglasses help, and so does looking away from the bright ground between shots. For a round with dry eyes, [dry eyes on the golf course](/guides/dry-eyes-on-the-golf-course) has more.`,
      },
      { h: 'Quell’s label' },
      {
        p: `Quell is a lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. According to its Drug Facts panel, the Uses are: {uses}. Directions: {directions}. Before trying it, note the caution: {warnings}.`,
      },
      {
        p: `The label’s storage line is {storage}. A summer car in St. George gets far hotter than that, so keep the bottle with you or at home. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in St. George' },
      {
        p: `Quell ships from Brentwood, Tennessee, to St. George, Washington, Hurricane and across the US. Checkout is guest only; shipping is {shipping}, and free on {freeBottles} or more bottles. Tracking comes by email, though we don’t promise a delivery date, and in summer it’s worth bringing a package inside soon after it arrives. Unopened bottles can be refunded within {returnDays} days of delivery, with nothing to return. Local details are on the [St. George page](/eye-drops/st-george-ut) and the [Utah page](/eye-drops/state/utah).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If dryness keeps returning, an eye doctor can work out the cause and what to do about it. The label sets the line: {stopUse} Grit that stays put after a windy hike is worth a visit too.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in St. George, Utah?',
        a: `St. George is desert, with about 9.31 inches of precipitation a year and about 128 days at 90°F or more in NOAA’s normals. Hot, dry air, sun and air conditioning all speed evaporation from the tear film.`,
      },
      {
        q: 'How many 100 degree days does St. George get?',
        a: `About 63 days a year reach 100°F or more at the St. George station, according to NOAA’s 1991 to 2020 normals. July’s normal high is 101.9°F.`,
      },
      {
        q: 'Does it snow in St. George, Utah?',
        a: `Rarely. NOAA’s normals give the station about 1.2 inches of snow a year, and the normal winter high never stays below freezing.`,
      },
      {
        q: 'Does Quell ship to St. George?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to St. George and the rest of the US, with guest checkout and email tracking. No delivery date is promised.`,
      },
    ],
  },
  /* FDA references removed 2026-11-18 at Phillip's request. */
  {
    slug: 'can-you-buy-eye-drops-at-a-gas-station',
    title: 'Can you buy eye drops at a gas station?',
    description:
      'Many gas stations and convenience stores stock over-the-counter eye drops. What to check on any bottle before you buy, and how to order Quell online instead.',
    category: 'ordering',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Often, yes. Over-the-counter eye drops don’t need a prescription or a pharmacist, so many gas stations, travel centers and convenience stores keep a few bottles near the register or in the health aisle. Selection varies from store to store. Whatever you buy, check the Drug Facts panel, the seal, the expiration date and the storage line, and use it exactly as its label says.`,
      },
      { h: 'Do gas stations sell eye drops?' },
      {
        p: `Many do, along with pain relievers, antacids and other small over-the-counter products aimed at people on the road. Over-the-counter means the product can be sold without a prescription, so there’s no legal reason a gas station can’t carry it. Whether a particular store does depends on the chain, the location and how much shelf space it gives to health items. A big travel plaza on an interstate is more likely to stock a few kinds than a small corner station.`,
      },
      {
        p: `If you need drops on a trip, it can be quicker to call ahead or check a store’s app than to stop at every exit. A 24-hour pharmacy, if there’s one nearby, will usually have a wider range and a pharmacist you can ask.`,
      },
      { h: 'What to check on any bottle before you buy' },
      {
        p: `A gas station bottle should be judged the same way as one from any other shelf. Before you pay, turn the box over and look for these:`,
      },
      {
        list: [
          `A Drug Facts panel. Every over-the-counter drug sold in the US carries one, listing the active ingredients, uses, warnings, directions and other information in a standard order. If it’s missing, put the bottle back.`,
          `An unbroken seal. The box or cap should show no sign of being opened. A torn band or a loose cap is a reason to choose another bottle.`,
          `The expiration date, printed on the box and usually the bottle. Shelves near the register don’t always turn over quickly.`,
          `The storage line under Other information. Quell’s, for example, reads: {storage}.`,
          `The uses and warnings, so you know the product is meant for what you have in mind.`,
        ],
      },
      {
        p: `Our guide to [why eye drops have a tamper-evident seal](/guides/why-eye-drops-have-a-tamper-evident-seal) explains what an intact seal should look like.`,
      },
      { h: 'Storage is the question to ask at a gas station' },
      {
        p: `Gas station shelves sit near doors that open and close constantly and windows that catch afternoon sun. A labeled storage range exists for a reason, and you can’t see how a bottle was kept before you picked it up. You can still use your eyes: a box that looks sun-faded, warped or dusty is a hint that it’s been sitting a while. Once you buy it, don’t leave it on the dashboard. Our guide to [leaving eye drops in a hot car](/guides/eye-drops-in-a-hot-car) covers what heat can do.`,
      },
      { h: 'Gas station, pharmacy or online?' },
      {
        p: `Each has a place. A gas station is useful when you’re on the road and need something tonight. A pharmacy gives you more choice and a pharmacist who can answer questions about your other medicines, which the label of a lubricating drop doesn’t cover. Ordering online lets you pick a specific product, read the full label before buying, and keep a spare at home so you’re not shopping at a fuel pump in the first place. [Buying eye drops online vs. in a store](/guides/buying-eye-drops-online-vs-in-store) compares them in more detail.`,
      },
      { h: 'Is Quell sold at gas stations?' },
      {
        p: `Quell is sold online through this site and ships from Brentwood, Tennessee, to addresses across the United States. Checkout works as a guest with no account. Shipping is {shipping}, and {freeBottles} or more bottles ship free. There are no promo codes and no subscription, and buyers must be 18 or older. We send tracking by email, but we don’t promise a delivery date, so it makes sense to order before you’re down to the last few drops.`,
      },
      {
        p: `Each bottle holds {size}, small enough to tuck in a glove box organizer or travel bag, as long as you keep it within the labeled temperature range. If a bottle arrives damaged, with a broken seal, or isn’t what you ordered, we replace it. An unopened bottle can be refunded within {returnDays} days of delivery without sending it back. You can [see prices and order](/#buy) on the home page.`,
      },
      { h: 'Using any drop you buy on the road' },
      {
        p: `Pull over before putting in drops; don’t do it at a red light or while driving. Wash or sanitize your hands first, since a fuel nozzle and a convenience store door handle aren’t clean surfaces. For Quell, the label directs: {directions}. It also says: {tip}.`,
      },
      {
        p: `If your eyes hurt, your vision changes, or something seems lodged in the eye after a long drive with the window down, a bottle from the counter isn’t the answer. The label puts it plainly: {stopUse} Many urgent care clinics and emergency rooms along highways can see you if your own eye doctor isn’t nearby.`,
      },
    ],
    faq: [
      {
        q: 'Do gas stations sell eye drops?',
        a: `Many do. Over-the-counter eye drops can be sold without a prescription, so gas stations, travel centers and convenience stores often keep a small selection, though it varies by store.`,
      },
      {
        q: 'Are there eye drops at gas stations near me?',
        a: `It depends on the store. Larger travel plazas tend to stock more health items than small stations. Calling ahead or checking the chain’s app can save you a few stops.`,
      },
      {
        q: 'What should I check before buying eye drops at a convenience store?',
        a: `Look for a Drug Facts panel, an unbroken seal, a future expiration date and the storage line. Skip any box that looks opened, sun-faded or damaged.`,
      },
      {
        q: 'Is Quell sold in stores?',
        a: `Quell is sold online through this site and ships from Brentwood, Tennessee, to addresses in the United States, with guest checkout and email tracking.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-in-december',
    title: 'Dry eyes in December',
    description:
      'December stacks heating season, the year’s shortest days, holiday screens and travel. Why eyes feel drier this month, and simple habits for each week of it.',
    category: 'seasonal',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Dry eyes in December usually come from several things at once: heating systems running day and night, the shortest days of the year keeping people indoors on screens, and holiday travel, parties and late nights. Lower the thermostat a little, add moisture to the bedroom air, take screen breaks, keep vents off your face, and use a lubricating drop as its label directs.`,
      },
      { h: 'Why December feels different from November' },
      {
        p: `In much of the country the heat comes on in November, but December is when it runs hardest and longest. The days are shortest around the winter solstice, near December 21, so more hours are spent inside with the furnace on and the lights and screens bright. Cold outdoor air holds little water, and warming it indoors drops its relative humidity even further. The result is air that pulls moisture from the tear film’s surface faster than usual, at a time when people also blink less because they’re reading, scrolling, wrapping gifts or working on end-of-year deadlines.`,
      },
      {
        p: `Each of those on its own might not bother your eyes much. Together, over a month, they add up.`,
      },
      { h: 'Does winter cause dry eyes?' },
      {
        p: `Winter doesn’t cause dryness on its own, but its conditions make it easier to notice. Dry, heated air speeds evaporation. Wind outdoors does too. Long indoor hours mean more screen time, and focusing on a screen slows the blink that spreads fresh tears across the eye. For people whose eyes already feel dry, December tends to concentrate those effects. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) covers the home side in detail.`,
      },
      { h: 'Dry eyes in winter: symptoms people describe' },
      {
        list: [
          `A gritty or sandy feeling, often worse by evening.`,
          `Burning or stinging after time in a heated room or car.`,
          `Eyes that water outdoors in cold wind, then feel dry again inside.`,
          `Blurry moments while reading that clear with a few blinks.`,
          `Eyes that feel tired after a long movie or a day of screens.`,
        ],
      },
      {
        p: `Those are common descriptions, not a way to work out what’s going on. Pain, vision changes that don’t clear, or symptoms in one eye only belong with an eye doctor.`,
      },
      { h: 'A week-by-week plan for December' },
      {
        p: `Early December: set up the house. Clean and fill a bedroom humidifier, check that the heat registers near the couch and desk aren’t aimed at where you sit, and set the thermostat a degree or two cooler at night. Order eye drops now if you’ll need them over the holidays, since shipping gets busier as the month goes on.`,
      },
      {
        p: `Mid-December: watch the screens. Shopping online, end-of-year reports and holiday cards on a laptop all mean long stretches of focus. Every so often, look away across the room and blink fully a few times. Our guide to [holiday screen time and dry eyes](/guides/holiday-screen-time-and-dry-eyes) has more ideas.`,
      },
      {
        p: `The holidays: plan for travel and gatherings. Airplane cabins and long car rides are dry. Wood fires, candles and crowded warm rooms can leave eyes feeling scratchy. Pack your drops where you can reach them, and sit away from the fireplace if it bothers you.`,
      },
      {
        p: `The last week: catch up on sleep. Late nights and early flights leave little rest, and eyes that have been open longer have had more time to dry out. A few early nights help more than any gadget.`,
      },
      { h: 'Traveling with eye drops in December' },
      {
        p: `TSA’s liquids rule lets carry-on travelers bring containers of 3.4 ounces (100 milliliters) or less in a single quart-size bag. A bottle of Quell holds {size}, well under that limit. Keep it in your carry-on or coat rather than checked luggage, where temperatures can swing. The label’s storage line is {storage}, so a car trunk on a freezing night is no place for it. See [traveling with eye drops](/guides/traveling-with-eye-drops) for packing tips.`,
      },
      { h: 'How Quell fits into a December routine' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives the Uses as {uses}. The directions are {directions}. Read the caution before trying it: {warnings}.`,
      },
      {
        p: `Orders ship from Brentwood, Tennessee, with guest checkout and email tracking. Shipping is {shipping}, or free on {freeBottles} or more bottles. Because we don’t promise a delivery date and December is busy for every shipper, order well ahead of any holiday trip. Unopened bottles can be refunded within {returnDays} days of delivery without being returned. [See prices and order](/#buy).`,
      },
      { h: 'When December dryness needs a doctor' },
      {
        p: `If your eyes still bother you after you’ve changed the air at home and cut back on screen marathons, an eye doctor can look for the cause and what to do about it. The label lists the signs to stop and call: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in December?',
        a: `December combines heating that runs for long hours, the shortest days of the year spent mostly indoors, more screen time, and holiday travel. Dry, heated air and less blinking both speed evaporation from the tear film.`,
      },
      {
        q: 'Does winter cause dry eyes?',
        a: `Winter conditions make dryness more noticeable. Cold air holds little water, heating lowers indoor humidity further, and more time inside on screens slows blinking.`,
      },
      {
        q: 'What are the symptoms of dry eyes in winter?',
        a: `People often describe a gritty or burning feeling, eyes that water in cold wind and then feel dry indoors, or brief blurriness that clears with blinking. Pain or vision changes need an eye doctor.`,
      },
      {
        q: 'Can I bring eye drops on a plane for the holidays?',
        a: `Yes. TSA allows liquids of 3.4 ounces (100 milliliters) or less in a quart-size bag in your carry-on. A bottle of Quell holds {size}.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-skier',
    title: 'Christmas gifts for a skier with dry eyes',
    description:
      'Gift ideas for a skier or snowboarder whose eyes dry out in cold wind and altitude: goggles, gaiters, lodge comforts, and where a bottle of Quell fits in.',
    category: 'seasonal',
    addedOn: '2026-11-15',
    body: [
      {
        p: `The most useful Christmas gifts for a skier with dry eyes cut the wind and glare on the mountain and the dry heat back at the lodge: well-fitting goggles or a spare lens, a neck gaiter, a goggle cleaning cloth, a small humidifier for the condo, and, if they already use eye drops, a bottle of Quell for an inside pocket. Check the egg and bird allergy caution first.`,
      },
      { h: 'Why skiers’ eyes dry out' },
      {
        p: `A ski day puts the eyes in nearly every condition that speeds evaporation from the tear film. The air is cold and dry, the chairlift ride is windy, and speed on the way down adds its own wind. Bright snow makes people squint. Then they head back to a heated lodge, a hot car and a condo with a fireplace. A gift that addresses one of those stages is a practical one. Our guide to [ski trips, cold wind and dry eyes](/guides/ski-trips-and-dry-eyes) explains each stage; this one is about what to wrap.`,
      },
      { h: 'Gifts for skiers who have everything' },
      {
        p: `Serious skiers usually own the big items already. The gaps tend to be small things that wear out, get lost or get left at home:`,
      },
      {
        list: [
          `A spare goggle lens for flat light or bright sun, if their goggles take interchangeable lenses. Check the model before buying.`,
          `A microfiber goggle bag or cleaning cloth, since wiping a lens with a glove scratches it and leaves them squinting through smudges.`,
          `A thin balaclava or neck gaiter that can be pulled up to the goggle line, closing the gap where cold air sneaks in.`,
          `Anti-fog wipes or spray made for goggle lenses, so they’re not tempted to push goggles up onto the helmet and ride with bare eyes.`,
          `Hand warmers, which also help keep a small bottle in an inside pocket from getting too cold.`,
        ],
      },
      { h: 'Gifts for skiers and snowboarders on a budget' },
      {
        p: `Stocking-size gifts can still help. A lens cloth, a soft goggle case, a pack of hand warmers, a lip balm and a small zip pouch for an inside jacket pocket all fit in a stocking. A pouch that keeps eye drops, lip balm and a lift pass together is the kind of thing a skier uses every trip without thinking about it.`,
      },
      { h: 'Gifts for after the lifts close' },
      {
        p: `The lodge and the rental condo are where eyes often feel worst, because heated air and wood fires are dry. A compact travel humidifier for the bedroom, a cozy sleep mask for flights to the mountains, or an insulated water bottle all fit here. If they drive to the slopes, a note reminding them to point the car heater vents at their feet instead of their face costs nothing and helps.`,
      },
      { h: 'Is Quell a good gift for a skier?' },
      {
        p: `For a skier who already reaches for eye drops after a day on the hill, a bottle of Quell can be a thoughtful addition. It’s a preservative-free lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label lists its Uses as {uses}, with directions to {directions}. It holds {size}, small enough for a chest pocket.`,
      },
      {
        p: `Before you buy, check one thing. The label says: {warnings}. Quell contains emu oil, so if you don’t know whether they have an egg or bird allergy, ask first. Also skip it as a surprise for someone who uses prescription eye drops or contact lenses, since the label doesn’t cover those situations and they should ask their eye doctor. Our page on [egg or bird allergy and Quell](/guides/egg-or-bird-allergy-and-quell) explains the caution.`,
      },
      { h: 'Cold and the storage label' },
      {
        p: `Skiers spend hours below freezing, and Quell’s label says {storage}. A bottle in an outer jacket pocket or a car parked at the base area from first chair to last can get colder than that range. Suggest an inside pocket close to the body, or leaving the bottle in the lodge locker and using it on breaks. The label also notes {milky}, so add a line on the card so the color doesn’t surprise them.`,
      },
      { h: 'Ordering a skier’s gift' },
      {
        p: `Quell ships from Brentwood, Tennessee, to addresses across the United States, including ski towns and vacation rentals, as long as the address can receive packages. You can ship straight to them or to yourself to wrap. Checkout has no gift wrap or gift message option. Shipping is {shipping}, and {freeBottles} or more bottles ship free. We send tracking by email but don’t promise a delivery date, so order early in December. See [shipping to a holiday address](/guides/shipping-to-a-holiday-address) if they’ll be away, or [order from the home page](/#buy).`,
      },
      {
        p: `If they don’t want it, an unopened bottle can be refunded within {returnDays} days of delivery without being sent back.`,
      },
      { h: 'When a gift isn’t enough' },
      {
        p: `Goggles and drops are for everyday comfort. Eye pain, vision changes, or an eye that stays irritated after a day in the sun on snow needs an eye doctor, not another gadget. The label’s guidance: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What do you get a skier who has everything?',
        a: `Small things that wear out or get lost: a spare goggle lens, a microfiber lens bag, anti-fog wipes, a thin balaclava or neck gaiter, and hand warmers. For someone who already uses eye drops, a bottle for an inside pocket fits too.`,
      },
      {
        q: 'What are good stocking stuffers for skiers?',
        a: `Lens cloths, hand warmers, lip balm, a soft goggle case and a small zip pouch for an inside jacket pocket all fit a stocking and get used every trip.`,
      },
      {
        q: 'Are eye drops a good gift for a skier?',
        a: `They can be for someone who already uses eye drops after cold, windy days. Check the egg and bird allergy caution on Quell’s label first, and skip it for anyone using prescription drops or contact lenses.`,
      },
      {
        q: 'Can eye drops get too cold on the ski slopes?',
        a: `Quell’s storage line reads: {storage}. On the mountain, keep the bottle in an inside pocket or the lodge rather than an outer pocket or a cold car.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-accountants',
    title: 'Dry eyes for accountants during tax season',
    description:
      'Busy season means long days of spreadsheets from January to the April deadline. Why accountants’ eyes feel dry, and desk habits that help through tax season.',
    category: 'using',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Accountants’ eyes often feel dry during tax season because of long hours focused on spreadsheets, tax software and scanned documents, which slows blinking, usually in heated winter offices. Position monitors slightly below eye level, look away regularly, blink fully, keep vents off your face, and use a lubricating drop as its label directs. See an eye doctor if dryness lingers after busy season.`,
      },
      { h: 'Why busy season is hard on the eyes' },
      {
        p: `For tax preparers and many accountants, the stretch from January through mid-April is the longest run of screen time all year. The IRS lists April 15 as the filing date for individual returns, and moves it to the next working day when the 15th lands on a weekend or legal holiday. Taxpayers can request an automatic six-month extension with Form 4868, which creates a second rush in the fall. Through both, the work is detailed: small numbers, narrow columns, two or three windows open at once.`,
      },
      {
        p: `Close focus is the problem. When you concentrate on a screen, you blink less often and less completely, and each pause gives the tear film more time to thin. That happens in winter offices with forced-air heat, which dries the air, and in long evenings when you’re already tired.`,
      },
      { h: 'Setting up the desk' },
      {
        list: [
          `Put the top of the main monitor at or slightly below eye level. Looking a little down means your eyelids cover more of the eye.`,
          `Sit about an arm’s length from the screen and enlarge spreadsheet zoom rather than leaning in.`,
          `If you use two or three monitors, place the one you use most directly in front of you and angle the others in, so you’re not holding your eyes wide to the side.`,
          `Close or redirect any heating or air conditioning vent that blows across your face.`,
          `Use a document holder at screen height for paper source documents, so your eyes aren’t refocusing up and down for hours.`,
        ],
      },
      {
        p: `Our guide to [dry eyes with multiple monitors](/guides/dry-eyes-with-multiple-monitors) goes deeper on multi-screen setups.`,
      },
      { h: 'Habits for long return days' },
      {
        p: `Setup helps, but the hours still add up. These small habits fit between returns:`,
      },
      {
        list: [
          `After finishing each return or reconciliation, look across the room for a few seconds and blink fully several times.`,
          `When you catch yourself staring at a cell, close your eyes gently for a moment, then open them.`,
          `Take a short walk at lunch away from the screen, outdoors if the weather allows.`,
          `Drink water through the day; busy season makes it easy to forget.`,
          `Try to get enough sleep in the crunch weeks; eyes that have been open longer have had more time to dry.`,
        ],
      },
      { h: 'Reading scanned documents and PDFs' },
      {
        p: `Blurry scans of receipts and W-2 forms make people squint and lean forward, which slows blinking even more. Zoom in rather than straining, increase contrast where the software allows, and ask clients for clearer copies when you can. Glare from a window behind the screen makes squinting worse, so close the blinds or move the monitor if light hits it.`,
      },
      { h: 'Using eye drops at the office' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives the Uses as {uses}. Directions: {directions}. Wash your hands first, since keyboards and paper pass through many hands, and follow the label: {tip}.`,
      },
      {
        p: `Keep the bottle in a desk drawer rather than on a sunny windowsill or near a space heater; the label says {storage}. If you use other eye drops, contact lenses or prescription medicines, ask your eye doctor or pharmacist, because the label doesn’t address combining them. The whole panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Paying with an HSA or FSA' },
      {
        p: `Accountants will appreciate this one. Since the CARES Act in 2020, over-the-counter medicines have counted as qualified medical expenses for health savings accounts and flexible spending accounts, without a prescription. Check your own plan’s rules. Our guide [why OTC eye drops count for HSA and FSA](/guides/why-otc-eye-drops-count-for-hsa-and-fsa) explains more, and [are eye drops tax deductible?](/guides/are-eye-drops-tax-deductible) covers deductions.`,
      },
      { h: 'Ordering before the crunch' },
      {
        p: `Quell ships from Brentwood, Tennessee, with guest checkout, so there’s no account to set up between client meetings. Shipping is {shipping}, or free on {freeBottles} or more bottles. We don’t promise a delivery date, so order in January rather than the week of April 15. Unopened bottles can be refunded within {returnDays} days of delivery without returning them. [Order on the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay uncomfortable well after busy season ends, or your vision seems blurry at the end of every day, book an eye exam; an eye doctor can work out the cause and what to do about it, and can check whether your glasses suit your screen distance. The label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry during tax season?',
        a: `Long hours of close focus on spreadsheets and tax software slow your blinking, and winter offices are often heated and dry. Together they speed evaporation from the tear film.`,
      },
      {
        q: 'When is the tax filing deadline?',
        a: `The IRS lists April 15 as the due date for individual returns, moved to the next working day if it falls on a weekend or legal holiday. Form 4868 gives an automatic six-month extension to file, not to pay.`,
      },
      {
        q: 'How should accountants set up their monitors?',
        a: `Put the main monitor directly in front of you, with the top at or slightly below eye level, about an arm’s length away. Angle any additional screens inward and zoom spreadsheets instead of leaning in.`,
      },
      {
        q: 'Can I use my FSA to buy eye drops?',
        a: `Since the CARES Act in 2020, over-the-counter medicines count as qualified medical expenses for HSAs and FSAs without a prescription. Check the rules of your own plan.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-security-guards',
    title: 'Dry eyes for security guards',
    description:
      'Watching camera monitors, working nights and standing outdoor posts all dry the eyes. Practical habits for security officers, and where eye drops fit in.',
    category: 'using',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Security guards’ eyes often feel dry from watching camera monitors for hours, which slows blinking, from night shifts that cut into sleep, and from outdoor posts in wind, cold or sun. Break up monitor watching with scans of the room, keep vents and heaters off your face, wear glasses outdoors, and use a lubricating drop as its label directs. See an eye doctor if dryness doesn’t settle.`,
      },
      { h: 'Watching camera monitors' },
      {
        p: `A wall of camera feeds asks for steady, close attention, the kind that cuts your blink rate. Many control rooms also run air conditioning around the clock to keep the equipment cool, which dries the air. A few changes help:`,
      },
      {
        list: [
          `Scan the room or look through a window every so often, and blink fully a few times before returning to the screens.`,
          `Sit far enough back that you can see the whole monitor wall by moving your eyes, not opening them wide.`,
          `Lower the brightness of monitors that are much brighter than the room, and cut glare from overhead lights where you can.`,
          `Ask whether a vent blowing at your seat can be redirected.`,
        ],
      },
      {
        p: `Our guide to [dry eyes with multiple monitors](/guides/dry-eyes-with-multiple-monitors) has more setup ideas that apply to a console.`,
      },
      { h: 'Night shifts and short sleep' },
      {
        p: `Night and rotating shifts make it hard to get enough sleep, and eyes that stay open for long stretches have more time to dry. Late in a shift, people often stare rather than blink. Keeping a regular sleep schedule on days off, darkening the bedroom for daytime sleep, and keeping the bedroom cool all help. Our guide to [dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) covers sleep and the drive home in more depth.`,
      },
      { h: 'Outdoor posts: gates, lots and patrols' },
      {
        p: `Standing at a gate, walking a parking lot or patrolling a construction site exposes the eyes to wind, dust, cold and sun. Each speeds evaporation from the tear film. On those posts:`,
      },
      {
        list: [
          `Wear wraparound sunglasses by day and clear safety glasses at night, if your employer allows them.`,
          `Stand with your back to the wind when you can.`,
          `In a guard booth, aim a space heater at your legs, not your face.`,
          `In a patrol vehicle, point the heater and air conditioning vents at your chest or the floor.`,
        ],
      },
      { h: 'Lobby and front desk posts' },
      {
        p: `A lobby desk can be drier than it seems. Doors opening to cold or hot air, ceiling vents above the desk and long hours checking IDs and visitor logs on a screen all add up. If a vent blows on your post, ask building management about redirecting it, and take your break somewhere away from the airflow.`,
      },
      { h: 'Carrying eye drops on duty' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label states its Uses as {uses}, and its directions as {directions}. It holds {size}, so it fits in a uniform pocket or a small pouch.`,
      },
      {
        p: `Where you keep it matters. The label says {storage}. An outer pocket on a winter patrol or a vehicle parked in summer sun can go beyond that range, so an inside pocket or your locker is better. Gloves and keys pass through many hands, so wash or sanitize your hands before using drops, and follow the label: {tip}. Read the egg and bird allergy caution on our [Drug Facts page](/drug-facts) before trying it.`,
      },
      {
        p: `If you wear contact lenses or use prescription eye drops, ask your eye doctor before adding Quell, because its label doesn’t cover those situations.`,
      },
      { h: 'Timing drops around your post' },
      {
        p: `Choose a moment when you can step away from active watching, such as a scheduled break or a relief handover. Give your eyes a moment after a drop before returning to monitors or driving a patrol vehicle. Don’t put drops in while driving.`,
      },
      { h: 'Ordering Quell' },
      {
        p: `Quell ships from Brentwood, Tennessee, to US addresses, with guest checkout and tracking by email. Shipping is {shipping}, and {freeBottles} or more bottles ship free. No delivery date is promised, so order before you’re out. Unopened bottles can be refunded within {returnDays} days of delivery without returning them. [See prices](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If dryness keeps coming back, or your vision seems hazy at the end of every shift, an eye doctor can work out the cause and what to do about it. The label gives clear limits: {stopUse} If grit or debris gets into your eye on an outdoor post and won’t rinse out, get it looked at promptly.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry watching security cameras?',
        a: `Concentrating on monitors slows your blinking, so the tear film has more time to thin between blinks. Air-conditioned control rooms add dry air on top.`,
      },
      {
        q: 'Can security guards wear sunglasses on duty?',
        a: `That depends on your employer and post orders. Where they’re allowed, wraparound sunglasses cut wind, dust and glare on outdoor posts.`,
      },
      {
        q: 'Where should I keep eye drops during a security shift?',
        a: `In an inside pocket or your locker, away from heat and freezing cold. Quell’s label says: {storage}.`,
      },
      {
        q: 'Is it okay to use eye drops on a night shift?',
        a: `Use them as the label directs, at a break or handover, with clean hands. Quell’s directions read: {directions}. Ask a doctor about anything beyond that.`,
      },
    ],
  },
  {
    slug: 'too-many-eye-drops-at-once',
    title: 'What happens if you put too many eye drops in?',
    description:
      'Squeezed out three drops instead of one? Usually the extra just runs out onto your lid and cheek. What to do next, what the label says, and when to call.',
    category: 'using',
    addedOn: '2026-11-15',
    body: [
      {
        p: `If you put too many lubricating eye drops in at once, the extra usually spills over the lower lid and runs down your cheek, or drains toward your nose and throat. Blot it with a clean tissue and carry on with your normal schedule rather than skipping or adding doses. Quell’s label says: {directions}. Call a doctor about pain, vision changes or anything unusual.`,
      },
      { h: 'What happens if you put too many eye drops in your eye?' },
      {
        p: `Once the eye is already wet, an extra drop has nowhere to stay, and you can watch where it goes: it pools along the lower lid, then spills onto your lashes and cheek. Some drains through the small openings at the inner corners of the lids, which connect to the nose, and that’s why people sometimes notice a taste at the back of the throat after a drop. Our guide to [why you can taste eye drops](/guides/why-can-i-taste-eye-drops) explains that path.`,
      },
      {
        p: `For most people, an accidental extra drop or two of a lubricating drop simply means a wetter face for a minute and perhaps blurry vision until they blink a few times. What you notice afterward matters more than the count.`,
      },
      { h: 'What to do right after' },
      {
        list: [
          `Close your eyes gently for a moment. Don’t squeeze them shut, which pushes liquid out faster.`,
          `Blot the skin around the eye with a clean tissue. Don’t rub the eye itself.`,
          `Wait until your vision is clear before driving, reading small print or using tools.`,
          `Put the cap back on without touching the tip. The label says: {tip}.`,
          `Note the time, and take your next dose when you normally would.`,
        ],
      },
      { h: 'What happens if you use too many eye drops at once, repeatedly?' },
      {
        p: `One overflowing squeeze is different from using a drop far more often than the label says. Quell’s directions are {directions}. The label doesn’t give instructions for using more than that, and it doesn’t say that more drops work better. If you find you want drops much more often than the directions allow, that’s worth raising with an eye doctor, who can look for the cause of the dryness and what to do about it. Our guide [can I use more than three drops a day?](/guides/can-i-use-more-than-three-drops-a-day) covers the question in more detail.`,
      },
      { h: 'Why too many drops come out' },
      {
        p: `Most extra drops come from squeezing too hard, holding the bottle at an angle, or blinking just as the drop falls and then trying again. A few habits help:`,
      },
      {
        list: [
          `Tilt your head back and look up, so the drop has a clear target.`,
          `Pull down the lower lid gently to make a small pocket.`,
          `Hold the bottle straight down over the eye, not touching it, and press lightly.`,
          `If you’re not sure whether a drop went in, look for wetness on the lid before squeezing again.`,
        ],
      },
      {
        p: `If your hands aren’t steady, [how to use eye drops with shaky hands](/guides/eye-drops-with-shaky-hands) has techniques, and [how do I know if the eye drop went in?](/guides/how-do-i-know-if-the-eye-drop-went-in) covers that uncertainty.`,
      },
      { h: 'What if eye drops are swallowed?' },
      {
        p: `Eye drops are for the eyes. Quell’s label says: {warnings}. If someone swallows the contents of a bottle, the label is direct: {swallowed}. Poison Control can tell you whether any action is needed. Keep bottles out of reach of children, and store them as the label says: {storage}.`,
      },
      { h: 'Using the wrong drops by mistake' },
      {
        p: `People sometimes reach for the wrong small bottle, such as a prescription drop or a different product in a similar box. If that happens, read that product’s label and call your pharmacist or doctor. This guide covers lubricating drops only. Quell’s label doesn’t cover combining it with other eye drops, so ask your eye doctor or pharmacist about timing if you use more than one.`,
      },
      { h: 'When to call a doctor' },
      {
        p: `Watch how your eye feels over the next while. Stinging that fades in a moment is common after any drop. Pain that continues, vision that stays blurry, or irritation that won’t settle is a reason to call. Quell’s label says: {stopUse} Also check the bottle itself. Under Do not use, the label lists: {doNotUse}. It also notes: {appearance}`,
      },
      {
        p: `You can read the complete label on our [Drug Facts page](/drug-facts) and see the questions people ask most on the [FAQ](/#faq).`,
      },
    ],
    faq: [
      {
        q: 'What happens if you put too many eye drops in your eye?',
        a: `With a lubricating drop, the extra usually spills over the lower lid onto your cheek or drains toward your nose and throat. Blot it with a clean tissue and wait for your vision to clear.`,
      },
      {
        q: 'What happens if you use too much eye drops?',
        a: `Using a drop far more often than its label directs isn’t covered by the label. Quell’s directions are {directions}. If you want drops much more often, ask an eye doctor why.`,
      },
      {
        q: 'Should I put in another drop if most of it ran out?',
        a: `If you see the eye is wet, a drop went in, even if some spilled. Squeezing again tends to add more overflow. Carry on with your usual schedule.`,
      },
      {
        q: 'What should I do if someone swallows eye drops?',
        a: `Follow the label: {swallowed}. Bring the bottle or box with you, or have it in hand on the phone, so you can read out the ingredients.`,
      },
    ],
  },
  /* FDA references removed 2026-11-18 at Phillip's request. */
  {
    slug: 'other-information-section-eye-drop-label',
    title: 'The Other information section on an eye drop label',
    description:
      'The Other information section of a Drug Facts panel holds required details that fit nowhere else, like storage. What it means, and what Quell’s says.',
    category: 'label',
    addedOn: '2026-11-15',
    body: [
      {
        p: `“Other information” is a standard heading on the Drug Facts panel of an over-the-counter eye drop. It sits after Directions and before Inactive ingredients, and it holds the practical details that don’t belong in the other sections, most often storage. Quell’s section has two lines: {milky}, and {storage}.`,
      },
      { h: 'Where the section sits on the panel' },
      {
        p: `Every over-the-counter drug sold in the US carries a Drug Facts panel with the same headings in the same order, so you can find the same information in the same place on any product. The order is:`,
      },
      {
        list: [
          `Drug Facts (the title)`,
          `Active ingredient or Active ingredients`,
          `Purpose or Purposes`,
          `Use or Uses`,
          `Warning or Warnings`,
          `Directions`,
          `Other information`,
          `Inactive ingredients`,
          `Questions? or Questions or comments? (optional)`,
        ],
      },
      {
        p: `Other information comes seventh, right after the directions and just before the list of inactive ingredients. On a small eye drop box, it’s often a short block near the bottom of the panel. Our guide to [reading a Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label) walks through every section.`,
      },
      { h: 'What goes under Other information' },
      {
        p: `Think of it as the panel’s catch-all for facts about the product itself rather than about how to use it or when to stop. On eye drop labels it often holds:`,
      },
      {
        list: [
          `Storage conditions, usually a temperature range.`,
          `A description of what the product looks like.`,
          `Notes about the packaging, such as how to tell whether it has been opened.`,
        ],
      },
      {
        p: `It isn’t a place for marketing. If a statement belongs under Uses, Warnings or Directions, it goes there. Other information collects the practical details left over. If you’re curious about the monograph behind these rules, see [what is the OTC monograph for eye drops?](/guides/what-is-the-otc-monograph-for-eye-drops)`,
      },
      { h: 'Quell’s first line: what it looks like' },
      {
        p: `The first line of Quell’s Other information section reads: {milky}. That’s worth knowing before you open a bottle, because many people expect eye drops to be clear. {appearance} The color comes from the natural oils in the formula; our guide [why is Quell milky brown?](/guides/why-is-quell-milky-brown) explains it.`,
      },
      {
        p: `That line works together with a warning elsewhere on the panel. Under Do not use, the label says: {doNotUse}. In other words, milky brown is the expected look, and a change from it is the signal to set the bottle aside. Our guide to [what “do not use if it changes color” means](/guides/do-not-use-if-the-color-changes) covers that warning.`,
      },
      { h: 'Quell’s second line: storage temperature' },
      {
        p: `The second line reads: {storage}. That’s roughly room temperature in most homes. Practical ways to keep a bottle within the range:`,
      },
      {
        list: [
          `Keep it in a drawer or cabinet away from radiators, heat vents and sunny windowsills.`,
          `Don’t leave it in a car on a hot afternoon or a freezing night.`,
          `On cold days outdoors, use an inside pocket rather than an outer one.`,
          `When traveling by air, keep it in your carry-on rather than checked luggage.`,
        ],
      },
      {
        p: `The label doesn’t call for refrigeration. Our guide [should eye drops be refrigerated?](/guides/should-eye-drops-be-refrigerated) goes into that question, and [how to store eye drops](/guides/how-to-store-eye-drops) covers everyday storage.`,
      },
      { h: 'What Other information doesn’t cover' },
      {
        p: `The section is short, and some things you might look for are elsewhere or not on the panel at all. The expiration date and lot number are printed on the box and bottle, not in the Drug Facts panel. Questions about contact lenses, children, or using Quell with other eye drops aren’t answered here or anywhere on the label, so ask your eye doctor or pharmacist. The warning about egg or bird allergies is under Warnings: {warnings}.`,
      },
      { h: 'Why it’s worth reading' },
      {
        p: `Many people read the Uses and Directions and skip the rest. Other information tells you what normal looks like and how to keep it that way, which helps you spot a problem before using a drop. If you ever see something on the website that differs from the printed box, follow the box. You can read Quell’s complete panel on our [Drug Facts page](/drug-facts).`,
      },
      {
        p: `A quick routine when a new bottle arrives: find Other information, check that the contents match the description it gives, and decide where in the house the bottle will live so it stays inside the printed temperature range. Then glance at the same section again whenever a bottle has been somewhere unusual, like a hot car or a cold mailbox.`,
      },
    ],
    faq: [
      {
        q: 'What does Other information mean on a drug label?',
        a: `It’s a standard Drug Facts heading that sits between Directions and Inactive ingredients. It holds practical details not covered under the other headings, most often storage conditions.`,
      },
      {
        q: 'Where is the storage information on eye drops?',
        a: `On most over-the-counter eye drops, storage appears under Other information near the bottom of the Drug Facts panel. Quell’s reads: {storage}.`,
      },
      {
        q: 'What order are the sections on a Drug Facts label?',
        a: `Drug Facts, Active ingredients, Purpose, Uses, Warnings, Directions, Other information, Inactive ingredients, and an optional Questions section, in that order, on every over-the-counter drug sold in the US.`,
      },
      {
        q: 'Why does my eye drop label say milky brown?',
        a: `Quell’s label lists its appearance under Other information: {milky}. That is its normal look, from the natural oils in the formula.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-when-horseback-riding',
    title: 'Dry eyes when horseback riding',
    description:
      'Wind at a canter, arena dust, hay in the barn and long hours of sun all dry the eyes. Eye protection and habits for riders, plus how to carry eye drops.',
    category: 'using',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Eyes often feel dry when horseback riding because of wind at faster gaits, dust from arena footing and dirt trails, sun on long rides, and dry air in winter. Wear close-fitting sunglasses or riding glasses that stay put, keep the barn aisle dust down, wash your hands after grooming before touching your eyes, and use a lubricating drop as its label directs.`,
      },
      { h: 'Why do my eyes water when riding a horse?' },
      {
        p: `At a trot, a canter or a gallop, air moves across your face the whole time. Moving air evaporates the tear film faster, and the eye often responds with a burst of watering, which can leave it feeling dry again afterward. Riding into a headwind on an open field or beach adds to it. The same thing happens to cyclists and motorcyclists, and the solutions overlap; see [dry eyes when cycling](/guides/dry-eyes-when-cycling).`,
      },
      { h: 'Horse riding eye protection' },
      {
        p: `Eye protection for riding has to stay on through bounce and sudden movement. What riders commonly use:`,
      },
      {
        list: [
          `Wraparound sport sunglasses with rubber nose pads and temple grips, which cut wind from the sides as well as the front.`,
          `A retaining strap so glasses don’t fly off at a canter or over a jump.`,
          `Clear or light-tinted lenses for arenas, early mornings and wooded trails, where dark lenses make it hard to see footing.`,
          `A helmet with a peak or visor to shade the eyes, if it suits your discipline.`,
        ],
      },
      {
        p: `Check your discipline’s rules before competing, since some events have dress codes. For schooling and trail rides, comfort and a secure fit matter most.`,
      },
      { h: 'Arena dust and dry footing' },
      {
        p: `Sand and fiber footing in a dry indoor or outdoor arena kicks up fine dust with every stride, especially when several horses are working. Dust on the eye’s surface makes it feel gritty and can prompt rubbing, which irritates it further. Ways to cut down on it:`,
      },
      {
        list: [
          `Water or drag the arena before riding when the facility allows it.`,
          `Ride when fewer horses are working, or keep your distance from the horse ahead.`,
          `Wear glasses even indoors.`,
          `If dust gets in your eye, rinse it with clean water rather than rubbing it.`,
        ],
      },
      { h: 'In the barn: hay, bedding and grooming' },
      {
        p: `Shaking out hay, mucking stalls and currying a shedding horse all put dust and hair in the air at face level. Your hands also pick up dirt, sweat and hair. Before touching your eyes, wash your hands with soap and water, not just a quick wipe on your jeans. Opening barn doors for airflow and dampening the aisle before sweeping helps keep the dust down. Our guide for [farmers](/guides/dry-eyes-for-farmers) covers more barn-chore situations.`,
      },
      { h: 'Long trail rides in sun and wind' },
      {
        p: `A trail ride can mean hours in the saddle with sun overhead and wind across open ground. Glare from water, pale rock or snow adds strain. Wear sunglasses from the start rather than once your eyes hurt, take breaks in shade when the horse rests, and drink water. If you’re riding at altitude or in desert country, expect the air to be drier still; [dry air, wind and altitude](/guides/dry-air-wind-and-altitude) explains why.`,
      },
      { h: 'Winter riding' },
      {
        p: `Cold air holds little moisture, and a heated tack room or truck cab dries it further. Riding in winter wind can leave eyes stinging and watering. A neck gaiter pulled up, clear glasses and a brimmed helmet cover help. When you get back to the truck, aim the heater vents at your feet, not your face.`,
      },
      { h: 'Carrying eye drops to the barn' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label states the Uses as {uses}, and the directions as {directions}. Use it with clean hands, ideally after washing up and before you get on, rather than in the saddle. The label adds: {tip}.`,
      },
      {
        p: `Tack rooms, trailers and trucks get hot in summer and freeze in winter. Quell’s label says {storage}, so keep the bottle in a jacket pocket or your bag rather than the trailer dressing room. Read the caution on our [Drug Facts page](/drug-facts) before trying it: the label mentions egg and bird allergies.`,
      },
      {
        p: `Quell ships from Brentwood, Tennessee, with guest checkout. Shipping is {shipping}, or free on {freeBottles} or more bottles, and unopened bottles can be refunded within {returnDays} days of delivery without returning them. [See prices](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Something stuck under the lid after a dusty ride, pain, or vision that doesn’t clear needs an eye doctor promptly, not a drop. The label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Should you wear sunglasses when horseback riding?',
        a: `Many riders do, especially on trails and in bright arenas. Choose wraparound glasses that grip securely, or add a retaining strap, and use clear lenses where you need to see footing in shade.`,
      },
      {
        q: 'How do I keep my eyes from watering when I ride a horse?',
        a: `Cut the wind with close-fitting wraparound glasses, and a helmet peak helps with glare. Watering in wind is common; it often follows the eye drying on the surface.`,
      },
      {
        q: 'Can I keep eye drops in my tack room?',
        a: `Only if it stays within the label’s storage range. Quell’s label says {storage}, and many tack rooms get hotter or colder than that, so a bag you take home is safer.`,
      },
      {
        q: 'What should I do if arena dust gets in my eye?',
        a: `Don’t rub it. Rinse with clean water, and if it still feels like something is in the eye or it hurts, see an eye doctor.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-writers',
    title: 'Dry eyes for writers and novelists',
    description:
      'Long drafting sessions, deadline weeks and hours of reading slow your blinking. Why writers’ eyes feel dry, and habits for the desk, the page and the edit.',
    category: 'using',
    addedOn: '2026-11-15',
    body: [
      {
        p: `Writers’ eyes often feel dry because drafting and editing mean long stretches of close focus, on a screen or a page, which slows blinking and lets the tear film thin. Set the screen a little below eye level, enlarge the text, look away at the end of each scene or page, keep vents off your face, and use a lubricating drop as its label directs. See an eye doctor if it persists.`,
      },
      { h: 'Why writing is hard on your eyes' },
      {
        p: `When a sentence is coming together, you stop noticing your body. That focus is exactly what slows the blink, and each blink is what spreads fresh tears across the eye. A writer can spend an hour staring at the same paragraph, rereading, cutting, rereading again, with fewer and shallower blinks than in conversation. Add a dry room and a late night and the eyes start to burn or blur. Our guide to [how blinking spreads tears](/guides/how-blinking-spreads-tears) explains the mechanism.`,
      },
      { h: 'Drafting sessions' },
      {
        list: [
          `Increase the font size or zoom so you’re not leaning in. Your words don’t need to look like the printed page while you draft.`,
          `Put the top of the screen at or a little below eye level, an arm’s length away.`,
          `Turn down screen brightness to match the room, and avoid writing with a bright window behind the monitor.`,
          `At each scene break or word-count milestone, look out a window or across the room and blink fully several times.`,
          `If you use a laptop, raise it and use a separate keyboard so you’re not looking down at a steep angle with your head bent.`,
        ],
      },
      { h: 'Deadline weeks' },
      {
        p: `A manuscript deadline, a column due tonight or a final pass before submission can mean ten or twelve hours at the desk. Those are the weeks when breaks disappear and sleep shrinks, and eyes that stay open longer have more time to dry. Building breaks into the schedule helps more than relying on willpower: a timer every so often, a walk at lunch, a stopping point in the evening. Getting up to refill water is a natural break, and it keeps you drinking.`,
      },
      { h: 'Reading and research' },
      {
        p: `Writers read as much as they write. Research on a screen, long PDFs and stacks of books all involve the same close focus. Alternating between screen and paper gives the eyes a change in distance and lighting, and reading in good light at a comfortable distance helps. Our guide to [dry eyes when reading](/guides/dry-eyes-when-reading) has more for long reading sessions.`,
      },
      { h: 'Editing on paper or on screen' },
      {
        p: `Some writers print pages for a line edit, partly because they catch different mistakes on paper. For the eyes, printing is mostly a change of scene: a different distance, natural light from a window, and pauses to turn pages. If you edit on screen, try a larger font and wider margins for the edit than for the draft, and step away between chapters.`,
      },
      { h: 'Where you write' },
      {
        p: `Coffee shops, libraries and home offices all have their own air. A café table under a ceiling vent, a library with forced-air heat, or a spare room with a space heater can dry the eyes. Sit out of the path of vents, keep a space heater aimed at your feet, and in winter consider a small humidifier at home. Writers who work remotely for other jobs may find [dry eyes for remote workers](/guides/dry-eyes-for-remote-workers) useful too.`,
      },
      { h: 'Writing by hand and dictation' },
      {
        p: `Switching tools for part of the day can give your eyes a break from the screen. Drafting longhand in a notebook, or dictating a rough draft while walking, changes where and how you look. Even if you type it up later, the session away from a screen counts.`,
      },
      { h: 'Using eye drops at the desk' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. According to its label, its Uses are {uses}. The directions: {directions}. Before using it, wash your hands, since keyboards and books pass a lot through your fingers, and follow the label: {tip}.`,
      },
      {
        p: `Keep the bottle in a desk drawer, away from a sunny windowsill or space heater, since the label says {storage}. The label also mentions an egg and bird allergy caution, which you can read on our [Drug Facts page](/drug-facts). If you wear contact lenses or use other eye drops, ask your eye doctor first, because Quell’s label doesn’t cover those situations.`,
      },
      {
        p: `Quell ships from Brentwood, Tennessee, with guest checkout and email tracking. Shipping is {shipping}, and {freeBottles} or more bottles ship free. Unopened bottles can be refunded within {returnDays} days of delivery without being returned. [Order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay uncomfortable even on days off, or your vision blurs every afternoon, an eye exam can check your glasses for screen distance and work out the cause and what to do about it. The label puts the limit this way: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes hurt after a long writing session?',
        a: `Focusing on a screen or page slows blinking, so the tear film thins between blinks. A dry room and a late night make it worse. Breaks and full blinks help.`,
      },
      {
        q: 'Is it better to edit on paper or on screen for your eyes?',
        a: `Paper gives your eyes a change of distance and light and builds in pauses to turn pages. If you edit on screen, use a larger font and take breaks between chapters.`,
      },
      {
        q: 'How often should writers take screen breaks?',
        a: `There’s no single rule on the label. Many writers look away at each scene break or word-count milestone and blink fully, and take a longer break every hour or two.`,
      },
      {
        q: 'Can I use eye drops while I write?',
        a: `Yes, as the label directs, with clean hands. Quell’s directions read: {directions}. Keep the bottle in a drawer away from heat.`,
      },
    ],
  },
]
