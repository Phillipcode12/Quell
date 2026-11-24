import type { Guide } from '@/lib/guide-types'
export const DAILY_20261124_A: Guide[] = [
  /*
   * Sources fetched 2026-11-24 for dry-eye-relief-san-marcos-tx:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991–2020 monthly
   *   normals for SAN MARCOS, TX (GHCN USC00417983, cooperative station), elev
   *   665 ft; raw JSON at .daily-job/acis1124/USC00417983.json
   *   (normal highs: Jan 62.3 F, Feb 66.6, Jun 92.4, Jul 95.7, Aug 96.8, Sep 90.5,
   *   Dec 63.7; normal lows: Jan 38.9, Dec 40.8, Aug 73.7; precipitation: May 4.53,
   *   Oct 4.41, Sep 4.03, Jul 2.21, Feb 1.73; twelve months sum to 36.55 in;
   *   snowfall 0.0 in every month)
   * No humidity or wind figures: the station is not in relhum23.txt or wndspd23.txt.
   */
  {
    slug: 'dry-eye-relief-san-marcos-tx',
    title: 'Dry eye relief in San Marcos, Texas',
    description:
      'San Marcos averages highs above 90°F four months a year, so cooled indoor air dries eyes from June to September. NOAA’s numbers and day-to-day relief.',
    category: 'local',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Dry eye relief in San Marcos is mostly about living with air conditioning. NOAA’s normals for the San Marcos station show average highs above 90°F from June through September, and cooled indoor air pulls water from the tear film. Keep vents and fans off your face, blink fully during screen work, use a lubricating drop exactly as its label directs, and see an eye doctor for pain or changes in vision.`,
      },
      { h: 'San Marcos weather in NOAA’s normals' },
      {
        p: `NOAA’s 1991–2020 climate normals for the San Marcos cooperative station, which sits at about 665 feet, describe a long, hot season and a short, mild winter. The same figures appear in the National Weather Service’s NOWData pages:`,
      },
      {
        list: [
          `Normal highs pass 90°F in June (92.4), July (95.7), August (96.8) and September (90.5).`,
          `August nights still average a low of 73.7°F, so the house gets little relief from cooling even after dark.`,
          `January is the coolest month, with a normal high of 62.3°F and a normal low of 38.9°F.`,
          `The twelve monthly precipitation normals add up to about 36.55 inches a year.`,
          `Normal snowfall at the station is zero in every month.`,
        ],
      },
      {
        p: `The rain arrives in two bursts. May is the wettest month at 4.53 inches, and fall brings a second peak, with 4.03 inches in September and 4.41 in October. February is the driest month at 1.73 inches, and July runs close behind at 2.21, in the very middle of the heat.`,
      },
      { h: 'Why do my eyes feel dry in San Marcos when it rains so much?' },
      {
        p: `Rain outdoors doesn’t reach your eyes indoors. On a wet May afternoon you might spend nine hours in an office or a classroom cooled to the low 70s, and an air conditioner removes moisture as it chills the air. Every vent that blows across a desk, a couch or a car seat moves that drier air over the surface of the eye, and the water layer of the tear film evaporates faster between blinks. In July and August there’s less rain and more heat, so the compressor runs even longer.`,
      },
      {
        list: [
          `Angle ceiling fans and floor fans so the air moves across your body, not your face.`,
          `Point the dashboard vents at your chest or feet on the drive home, and close the center vent nearest your eyes.`,
          `Raise the bedroom thermostat a degree or two at night rather than sleeping under a cold draft.`,
          `In a classroom or office you can’t control, pick the seat that isn’t directly under a ceiling diffuser if you have the choice.`,
        ],
      },
      { h: 'Afternoons outside, from tubing to yard work' },
      {
        p: `Summer weekends here often mean water: floating, paddling, swimming, or a long afternoon at a park. Glare off moving water makes people squint, and squinting shortens each blink. Sun, wind from a moving boat or tube, and sunscreen running off a sweaty forehead all add up. Wraparound sunglasses help with the wind and the glare together, and a brimmed hat keeps the sunscreen higher on your face. If sunscreen, river water or anything else gets into your eye and the stinging doesn’t settle, that’s a matter for urgent care or an eye doctor, not for a lubricating drop.`,
      },
      {
        p: `Timing helps too. August mornings start near the normal low of 73.7°F, more than 20 degrees cooler than the afternoon peak, so mowing, running or hauling gear before mid-morning is easier on eyes and everything else. One thing to leave inside: the bottle. Quell’s label says {storage}, and a parked car in a San Marcos August climbs past that range quickly. Keep the bottle in a bag you carry, not in the glove box.`,
      },
      { h: 'Winter fronts and the short heating season' },
      {
        p: `San Marcos does get a winter, just a brief one. Normal lows fall to 38.9°F in January and 40.8°F in December, and a strong front can knock the temperature well below that for a few days. That’s when furnaces, space heaters and fireplaces come on. Warming cold air without adding moisture lowers its relative humidity, so the first cold snap of the season can leave eyes feeling scratchy in a way the summer didn’t. Keep a space heater pointed at your legs rather than your face, and give the fireplace a few feet of distance. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) goes through each kind of heat.`,
      },
      { h: 'Commutes up and down the corridor' },
      {
        p: `San Marcos sits between two big metro areas, and plenty of weeks include a drive toward one of them. Highway miles mean a fixed stare at the road, a vent blowing for the whole trip and afternoon sun through the windshield. Blink on purpose at red lights, wear sunglasses when the sun is low, and keep air off your face. If your days take you north or south, our pages on [Austin](/guides/dry-eye-relief-austin-tx), [San Antonio](/guides/dry-eye-relief-san-antonio-tx) and [New Braunfels](/guides/dry-eye-relief-new-braunfels-tx) look at their own weather stations.`,
      },
      {
        p: `Screen time is the other daily factor. People blink less while they read a monitor or a phone, and a half-blink leaves part of the eye uncovered. Every 20 minutes or so, look across the room for a few seconds and close your eyes fully a few times before you go back to the page.`,
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists these Uses: {uses}. The directions read: {directions}. The panel also says: {tip}. Before each use, look at the drop, since the panel includes this line: {doNotUse}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to San Marcos' },
      {
        p: `We ship from Brentwood, Tennessee, to San Marcos and every other US address. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. A tracking email follows once the order goes out, but no arrival date is promised, so order before you run low. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. The [San Marcos page](/eye-drops/san-marcos-tx) and the [Texas page](/eye-drops/state/texas) have more local details.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A drop is for everyday dryness. It can’t tell you why your eyes keep bothering you. The label draws the line: {stopUse} Eye pain, blurry vision that doesn’t clear when you blink, or one eye that’s much worse than the other is a reason to book an appointment. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers what shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'What is the hottest month in San Marcos, Texas?',
        a: `August. NOAA’s 1991–2020 normals for the San Marcos station put the normal August high at 96.8°F, just ahead of July at 95.7°F.`,
      },
      {
        q: 'How much rain does San Marcos get in a year?',
        a: `The station’s twelve monthly normals add up to about 36.55 inches. May is the wettest month at 4.53 inches, and February the driest at 1.73.`,
      },
      {
        q: 'Does it snow in San Marcos, TX?',
        a: `Rarely enough that NOAA’s 1991–2020 normal snowfall for the San Marcos station is zero in every month. Winter cold arrives with fronts instead, and that’s when indoor heat starts drying the air.`,
      },
      {
        q: 'Can I order Quell eye drops to San Marcos?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to San Marcos and the rest of the US, with guest checkout and a tracking email. No delivery date is promised, so reorder before the bottle runs out.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-24 for dry-eye-relief-fort-collins-co:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991–2020 monthly
   *   normals for FORT COLLINS, CO (GHCN USC00053005, cooperative station),
   *   elev 5004 ft; raw JSON at .daily-job/acis1124/USC00053005.json
   *   (normal highs: Jan 45.0 F, Dec 44.0, Jul 87.4, Aug 85.0; normal lows: Jan 18.3,
   *   Dec 18.3, Jul 58.7; precipitation: Jan 0.41, Feb 0.47, Dec 0.47, Nov 0.74,
   *   May 2.72, Apr 2.10; twelve months sum to 15.88 in; Dec-Feb sum 1.35 in;
   *   snowfall: Sep 0.7, Oct 4.1, Nov 7.6, Dec 7.5, Jan 6.7, Feb 7.6, Mar 9.4,
   *   Apr 6.2, May 1.6, Jun-Aug 0.0; twelve months sum to 51.4 in)
   * No humidity or wind figures: the station is not in relhum23.txt or wndspd23.txt.
   */
  {
    slug: 'dry-eye-relief-fort-collins-co',
    title: 'Dry eye relief in Fort Collins, Colorado',
    description:
      'Fort Collins gets about 51 inches of snow but under 1.4 inches of precipitation from December to February. What that dry winter means for your eyes.',
    category: 'local',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Dry eye relief in Fort Collins means planning for a long, dry heating season. NOAA’s normals for the Fort Collins station, at about 5,000 feet, show snow possible from September into May, yet December through February brings only about 1.35 inches of precipitation combined. Humidify the bedroom, keep heat and wind off your face, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'The Fort Collins station, by the numbers' },
      {
        p: `NOAA’s 1991–2020 climate normals for the Fort Collins cooperative station, as published through the National Weather Service’s NOWData, describe a dry place with a long cold season and warm, short summers:`,
      },
      {
        list: [
          `The twelve monthly precipitation normals total about 15.88 inches a year.`,
          `January is the driest month at 0.41 inches, and February and December each average 0.47.`,
          `May is the wettest month at 2.72 inches, followed by April at 2.10.`,
          `Snowfall adds up to about 51.4 inches a year, with March the snowiest month at 9.4 inches.`,
          `Normal lows reach 18.3°F in both December and January, against normal highs of 44 to 45°F.`,
          `July is the warmest month, with a normal high of 87.4°F and a normal low of 58.7°F.`,
        ],
      },
      { h: 'Lots of snow, very little water' },
      {
        p: `Those two numbers seem to argue with each other: more than four feet of snow, yet under an inch and a half of precipitation across the three winter months. NOAA counts snow two ways, as the depth that falls and as the water it melts into, and a deep, fluffy snowfall can hold surprisingly little water. A storm can leave a shovel’s worth on the driveway and very little moisture in the air once the sun comes out. For eyes, the snow-covered yard is less important than the heated air you breathe once you come inside.`,
      },
      { h: 'Eight months of possible snow means a long heating season' },
      {
        p: `The station’s snowfall normals are above zero in every month from September (0.7 inches) through May (1.6 inches). October averages 4.1 inches, and November, December and February each run near 7.5. That is a long stretch of furnace weather. Heating cold, dry outdoor air without adding water lowers its relative humidity further, and the eye’s tear film loses water faster between blinks in that air. People often notice it first in the bedroom, after hours with a vent blowing.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom from October on, and clean it as its maker directs.`,
          `Keep the thermostat modest at night, and close or redirect any vent aimed at your pillow.`,
          `Take showers a little shorter and cooler if your face and eyes feel tight afterward.`,
          `Move your desk chair or reading chair out of the line of a floor register.`,
        ],
      },
      {
        p: `Our guide to [dry eyes from forced-air heat](/guides/dry-eyes-from-forced-air-heat) covers furnaces, vents and filters in more detail.`,
      },
      { h: 'Spring storms and the March snow peak' },
      {
        p: `March is the snowiest month at the station, and April and May are the wettest, so spring here can swing from a heavy wet snowfall to a warm, bright afternoon within days. Wind and sun on fresh snow make people squint, which shortens blinks. Sunglasses with wraparound frames block glare and gusts together, and ski or snowshoe goggles cover even more. If you head into the foothills or the high country on a spring weekend, carry the bottle in an inside pocket so it stays within the label’s storage range: {storage}.`,
      },
      { h: 'Summer evenings and open windows' },
      {
        p: `Summer is warm but rarely muggy-feeling. July’s normal high is 87.4°F, and the normal low is 58.7°F, so a hot afternoon usually gives way to a cool night. If you open windows after dark rather than run air conditioning, a box fan pulling in night air can blow straight across a sleeping face. Turn it to the wall or the ceiling. On long rides, runs and climbs, wind from your own speed dries the eye surface; glasses or a visor help, and so do short stops to blink.`,
      },
      { h: 'Study sessions, labs and long screen days' },
      {
        p: `For students, late fall is when papers, projects and finals pile up, right as the heat comes on for the season. People blink less often while reading a screen, and each partial blink leaves part of the eye uncovered. Every 20 minutes, look at something across the room, then close your eyes fully a few times. A desk lamp aimed at the page rather than your face helps too. If you live in the Denver area or commute there, see our guides to [dry eyes in Denver](/guides/dry-eyes-in-denver) and [Centennial](/guides/dry-eye-relief-centennial-co).`,
      },
      { h: 'What Quell’s Drug Facts panel says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The panel’s Uses line is {uses}. Its directions: {directions}. One caution worth reading first is this: {warnings}. Keep the tip clean, as the label says: {tip}. Everything on the carton is reproduced on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell to Fort Collins' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Fort Collins and every other US address. You check out as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You get a tracking email, though no delivery date is promised, so keep a spare bottle before winter storms arrive. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t mail them back. Local details are on the [Fort Collins page](/eye-drops/fort-collins-co) and the [Colorado page](/eye-drops/state/colorado).`,
      },
      { h: 'When dryness needs an eye doctor' },
      {
        p: `If your eyes stay uncomfortable after you’ve dealt with the heat and the screens, it’s time for an exam rather than another bottle. The label is specific: {stopUse} An eye doctor can find the cause and decide what to do. Our [self-check](/self-check) can help you put your symptoms into words beforehand; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How much snow does Fort Collins get a year?',
        a: `About 51.4 inches, adding up NOAA’s 1991–2020 monthly snowfall normals for the Fort Collins station. March is the snowiest month at 9.4 inches.`,
      },
      {
        q: 'What is the driest month in Fort Collins?',
        a: `January, with a normal of 0.41 inches of precipitation at the Fort Collins station. February and December each average 0.47 inches.`,
      },
      {
        q: 'Why are my eyes so dry in Fort Collins in the winter?',
        a: `The air holds little water to begin with, and the heat runs for months. NOAA’s normals show only about 1.35 inches of precipitation from December through February, and warming that air indoors lowers its humidity further.`,
      },
      {
        q: 'Does Quell ship to Fort Collins, Colorado?',
        a: `Yes. Orders ship from Brentwood, Tennessee, with guest checkout and a tracking email. No arrival date is promised, so it helps to order before you run out.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-24 for dry-eye-relief-chico-ca:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991–2020 monthly
   *   normals for CHICO UNIVERSITY FARM, CA (GHCN USC00041715, cooperative
   *   station), elev 185 ft; raw JSON at .daily-job/acis1124/USC00041715.json
   *   (normal highs: Jan 56.1 F, Jun 89.3, Jul 95.2, Aug 94.3, Sep 90.9, Dec 56.6;
   *   normal lows: Jan 36.2, Dec 36.3, Jul 61.0; precipitation: Jan 5.12, Feb 5.14,
   *   Dec 5.04 (Dec-Feb sum 15.30), Jun 0.64, Jul 0.03, Aug 0.10, Sep 0.25
   *   (Jun-Sep sum 1.02); twelve months sum to 27.39 in; snowfall missing ("M"),
   *   left out)
   * No humidity or wind figures: the station is not in relhum23.txt or wndspd23.txt.
   */
  {
    slug: 'dry-eye-relief-chico-ca',
    title: 'Dry eye relief in Chico, California',
    description:
      'Chico averages 0.03 inches of rain in July and over 5 inches in each winter month. How that rainless summer and wet winter affect dry eyes.',
    category: 'local',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Dry eye relief in Chico follows a two-season climate. NOAA’s normals for the Chico University Farm station show barely an inch of rain from June through September, with July highs near 95°F, then more than 15 inches from December through February. Shield your eyes from hot wind and air conditioning in summer and from heaters in winter, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'What the Chico University Farm station records' },
      {
        p: `NOAA’s 1991–2020 climate normals for the Chico University Farm station, at about 185 feet on the valley floor, show a sharp split between wet and dry seasons. The same normals are published through the National Weather Service’s NOWData:`,
      },
      {
        list: [
          `June averages 0.64 inches of rain, July 0.03, August 0.10 and September 0.25, a combined 1.02 inches for four months.`,
          `December (5.04), January (5.12) and February (5.14) together average about 15.3 inches.`,
          `The twelve monthly normals add up to about 27.39 inches a year, so more than half the year’s rain falls in those three winter months.`,
          `July’s normal high is 95.2°F, and August follows at 94.3°F.`,
          `January’s normal high is 56.1°F and its normal low 36.2°F.`,
        ],
      },
      { h: 'Why are my eyes so dry in Chico in the summer?' },
      {
        p: `By July, the valley has gone weeks without meaningful rain, the grass on every unwatered field has turned gold, and afternoon highs sit in the mid-90s. Warm, dry air takes water from any surface it passes over, including the thin film on the front of your eye. You also tend to blink less when you squint into a bright afternoon. Then you walk inside to air conditioning, which dries the air again as it cools it.`,
      },
      {
        p: `There is a useful pattern in those summer numbers. July’s normal low is 61.0°F, more than 34 degrees below the afternoon high. Mornings are the gentle part of a Chico summer day.`,
      },
      {
        list: [
          `Run, bike, garden or walk the dog early, before the heat builds.`,
          `Wear wraparound sunglasses for afternoon errands; they block hot breezes as well as glare.`,
          `Set fans and car vents so air moves across your chest rather than your face.`,
          `On evenings when the air cools off, open windows instead of running the air conditioning longer than you need.`,
        ],
      },
      { h: 'Dust, harvest and long drives in the valley' },
      {
        p: `Late summer and fall bring field work across the valley, and dry soil travels on any breeze. Dust or grit that blows into your eye and keeps scratching is for an eye doctor or urgent care to look at, not something a lubricating drop is meant for. Glasses with side coverage help on dusty roads and job sites. Long drives on two-lane farm roads and the highway add hours of steady staring with the vent running; blink deliberately at stops and keep the airflow low.`,
      },
      { h: 'Rainy winters and heated rooms' },
      {
        p: `December through February flips the picture. The outdoor air is cool and often damp, with normal lows around 36°F and more than 5 inches of rain a month. Eyes can still feel dry, because most of the day happens indoors near a furnace, a wall heater or a wood stove. Warming cold air without adding moisture lowers its relative humidity, so a heated bedroom can feel dry even during a week of storms.`,
      },
      {
        p: `A small humidifier in the bedroom, a heater aimed at your feet instead of your face, and a few feet of distance from the stove all help. Fog and gray days also bring more screen time and less time outside, which means fewer full blinks. If your work or family takes you up the valley, our guides to [Redding](/guides/dry-eye-relief-redding-ca) and [Yuba City](/guides/dry-eye-relief-yuba-city-ca) look at their own stations.`,
      },
      { h: 'Campus terms and screen time' },
      {
        p: `For students, late fall finals arrive just as the rain and the heating season begin. Long reading sessions at a laptop slow the blink rate. Set a timer for every 20 to 30 minutes, look across the room, and close your eyes fully a few times. Keep the screen slightly below eye level so your lids cover more of the eye while you read. Our guide on [dry eyes from video calls](/guides/dry-eyes-from-video-calls) has more for long online days.`,
      },
      { h: 'Quell’s label, section by section' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses section reads: {uses}. Directions: {directions}. Storage on the label is specific, which matters in a valley summer: {storage}. A car parked at a trailhead in July passes that ceiling quickly, so carry the bottle with you. Read the full panel on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Chico' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Chico, Paradise, Oroville and every other US address. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We send a tracking email, but no arrival date is promised, so reorder before you’re down to the last few drops. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. The [Chico page](/eye-drops/chico-ca) and the [California page](/eye-drops/state/california) have more.`,
      },
      { h: 'When to call an eye doctor' },
      {
        p: `If dryness keeps returning in every season, a drop won’t explain why. The label says: {stopUse} Pain, light that suddenly bothers you, or blurring that doesn’t clear with blinking deserves a prompt visit. See our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Chico, CA get in the summer?',
        a: `Very little. NOAA’s 1991–2020 normals for the Chico University Farm station show 0.64 inches in June, 0.03 in July, 0.10 in August and 0.25 in September.`,
      },
      {
        q: 'What is the rainiest month in Chico?',
        a: `February, at 5.14 inches, just ahead of January at 5.12 and December at 5.04, according to NOAA’s normals for the Chico University Farm station.`,
      },
      {
        q: 'How hot does Chico get in July?',
        a: `The normal July high at the Chico University Farm station is 95.2°F, and the normal low is 61.0°F, so mornings are far cooler than afternoons.`,
      },
      {
        q: 'Can I get Quell eye drops delivered in Chico?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Chico and anywhere else in the US, with guest checkout and tracking by email. No delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-24 for dry-eye-relief-ocala-fl:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991–2020 monthly
   *   normals for OCALA, FL (GHCN USC00086414, cooperative station), elev 75 ft;
   *   raw JSON at .daily-job/acis1124/USC00086414.json
   *   (normal highs: Jan 70.6 F, Apr 83.9, May 88.9, Jun 91.0, Jul 92.0, Aug 91.6,
   *   Sep 89.5; normal lows: Jan 45.6, Feb 48.4, Dec 48.3, Jul 72.2, Aug 72.5;
   *   precipitation: Jun 7.41, Jul 6.94, Aug 7.07, Sep 6.49 (Jun-Sep sum 27.91),
   *   Nov 2.09, Apr 2.22, Dec 2.68; Oct-May sum 23.73; twelve months sum to 51.64 in;
   *   snowfall missing ("M"), left out)
   * No humidity or wind figures: the station is not in relhum23.txt or wndspd23.txt.
   */
  {
    slug: 'dry-eye-relief-ocala-fl',
    title: 'Dry eye relief in Ocala, Florida',
    description:
      'Ocala’s rain is packed into June through September, and November is its driest month. NOAA’s numbers, the dry season and everyday dry eye relief.',
    category: 'local',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Dry eye relief in Ocala starts with knowing its dry season. NOAA’s normals for the Ocala station put more than half of the year’s rain in June through September, while November is the driest month and April nearly as dry. Air conditioning runs most of the year. Keep cold air and wind off your face, blink fully at screens, use a lubricating drop as its label directs, and see an eye doctor for pain or vision changes.`,
      },
      { h: 'Ocala’s climate in NOAA’s normals' },
      {
        p: `NOAA’s 1991–2020 climate normals for the Ocala cooperative station, at about 75 feet, also published through the National Weather Service’s NOWData, describe a rainy summer, a drier fall and spring, and mild winters with cool mornings:`,
      },
      {
        list: [
          `June (7.41 inches), July (6.94), August (7.07) and September (6.49) add up to about 27.9 inches of rain.`,
          `The other eight months, October through May, add up to about 23.7 inches together.`,
          `November is the driest month at 2.09 inches, and April follows at 2.22.`,
          `The twelve monthly normals total about 51.64 inches a year.`,
          `Normal highs reach 91 to 92°F from June through August, and May already averages 88.9°F.`,
          `January’s normal high is 70.6°F, with a normal low of 45.6°F.`,
        ],
      },
      { h: 'The spring dry spell, April into May' },
      {
        p: `Spring is the stretch that catches people off guard. April averages only 2.22 inches of rain while its normal high climbs to 83.9°F, and May reaches 88.9°F before the summer rains settle in. Warm, breezy days with little rain are hard on the tear film, especially for anyone working outside. Yard work, fence and pasture chores, golf, ballfields and long walks all put your eyes in moving air for hours.`,
      },
      {
        list: [
          `Wear wraparound sunglasses or safety glasses with side coverage for mowing, blowing leaves and hauling hay or mulch.`,
          `Do the heaviest outdoor work early, when spring mornings are cooler.`,
          `Take short breaks in the shade to close your eyes fully for a few seconds.`,
          `If grit or chaff gets into your eye and keeps bothering you, have urgent care or an eye doctor look at it rather than reaching for a lubricating drop.`,
        ],
      },
      { h: 'Rainy summers and nonstop air conditioning' },
      {
        p: `From June to September the afternoons are hot and often stormy. That outdoor air holds a lot of water, yet eyes can still feel dry, because daily life moves indoors. An air conditioner removes moisture as it cools, and a vent aimed at a desk, a couch or a car seat pushes that drier air across your eyes. August nights average a low of 72.5°F, so most homes cool around the clock for months.`,
      },
      {
        p: `Small changes add up: turn ceiling fans to a lower speed in the bedroom, close the dashboard vent nearest your face, and avoid sitting right under a return or supply vent at work. Our guide to [why eyes feel dry when it’s humid](/guides/why-are-my-eyes-dry-when-it-is-humid) explains the indoor-outdoor gap in more depth.`,
      },
      { h: 'November and the cool, dry months' },
      {
        p: `November is the driest month on Ocala’s record at 2.09 inches, and the cool season continues through February. January mornings average 45.6°F, so some homes turn the heat on briefly at dawn and then switch back to cooling by afternoon. That back-and-forth means your eyes spend time in both heated and air-conditioned air in one day. Outdoor events, fairs and holiday markets fill the calendar in this cooler season, often in sun and wind. Sunglasses and a hat with a brim do more for comfortable eyes than people expect.`,
      },
      {
        p: `If you spend time in Gainesville or Orlando, our guides on [Gainesville](/guides/dry-eye-relief-gainesville-fl) and [Orlando](/guides/dry-eye-relief-orlando-fl) look at their own stations and daily routines.`,
      },
      { h: 'Screens, reading and long drives' },
      {
        p: `Long stretches of reading, television or tablet games slow the blink rate at any age. Long drives add hours with a vent running and the sun low in the late afternoon. Blink deliberately at every stop, use sunglasses for the glare, and every 20 minutes or so, look away from the screen and close your eyes gently a few times. Large print and a good reading lamp reduce squinting.`,
      },
      { h: 'The Quell label in brief' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses: {uses}. Its directions: {directions}. Florida heat makes the storage line especially important: {storage}. Don’t leave the bottle in a parked car or a mailbox in the sun; bring it inside as soon as it arrives. The whole panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Ocala' },
      {
        p: `We ship from Brentwood, Tennessee, to Ocala, The Villages, Belleview, Dunnellon and every other US address. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. A tracking email follows, but no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. See the [Ocala page](/eye-drops/ocala-fl) and the [Florida page](/eye-drops/state/florida).`,
      },
      { h: 'Signs it’s time for an eye doctor' },
      {
        p: `A lubricating drop is for everyday dryness, not for figuring out what’s behind symptoms that keep returning. The label is clear: {stopUse} Pain, sudden blurring or new sensitivity to light is reason to call an eye doctor promptly. Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Ocala, Florida?',
        a: `November, with a normal of 2.09 inches of rain at the Ocala station in NOAA’s 1991–2020 normals. April is close behind at 2.22 inches.`,
      },
      {
        q: 'When is the rainy season in Ocala?',
        a: `June through September. Those four months average about 27.9 inches of rain at the Ocala station, more than half of the roughly 51.6 inches in a normal year.`,
      },
      {
        q: 'Why do my eyes feel dry in Ocala when it’s so humid?',
        a: `Most of a summer day is spent in air-conditioned rooms and cars, and cooling removes moisture from the air. A vent blowing across your face speeds evaporation from the tear film.`,
      },
      {
        q: 'Does Quell ship to Ocala, FL?',
        a: `Yes. Quell ships from Brentwood, Tennessee, with guest checkout and a tracking email. No delivery date is promised, and the bottle should come inside promptly in hot weather.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-pharmacy-technicians',
    title: 'Dry eyes for pharmacy technicians',
    description:
      'Counting trays, label printers, bright shelving and a holiday rush add up for pharmacy techs. Ways to keep eyes comfortable through a long shift.',
    category: 'using',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Pharmacy technicians often get dry eyes because the job combines close, careful looking with very little chance to look away: counting tablets on a tray, matching labels to stock bottles, typing at a terminal and scanning barcodes under bright lights, often in cool, dry store air. Full blinks between tasks, a better screen setup and a lubricating drop used as its label directs can help. Persistent symptoms belong with an eye doctor.`,
      },
      { h: 'What a pharmacy tech’s day asks of the eyes' },
      {
        p: `Most of a technician’s work is visual checking, done fast and done right. Each task has its own pattern of staring:`,
      },
      {
        list: [
          `Counting on a tray: eyes fixed downward at arm’s length, tracking small tablets in groups of five while you hold your breath and barely blink.`,
          `Data entry: reading a prescription, an insurance screen and a patient profile, then typing, often across two monitors.`,
          `Pulling and matching stock: reading small print on bottles, checking strengths and expiration dates under overhead lights.`,
          `Labeling and bagging: aligning printed labels, checking names and scanning codes against the screen.`,
          `The window and the counter: talking with customers while you look between a register screen and a person’s face.`,
        ],
      },
      {
        p: `Concentration lowers the blink rate. When you lock onto a count or a strength, the eye’s surface sits exposed longer between blinks, and the tear film thins in the meantime. Half-blinks are common too: the lids drop partway and come back up without covering the whole eye.`,
      },
      { h: 'Counting trays, label checks and close focus' },
      {
        p: `Build a small reset into the steps you already repeat. After you finish a count and before you pour it into the vial, close your eyes fully for two seconds. After each label check, glance at something at the far end of the pharmacy. These cost almost nothing in time and break up long stretches of fixed focus. If your tray area sits directly under a bright fixture, angling the tray slightly or asking about a task lamp can cut glare off a white surface.`,
      },
      { h: 'Screens, scanners and the workstation' },
      {
        p: `A technician terminal is often set up for whoever stood there first. Adjust what you can at the start of a shift:`,
      },
      {
        list: [
          `Lower the monitor so your eyes look slightly downward; the lids cover more of the eye in that position.`,
          `Raise font size or zoom on the dispensing software if your workplace allows it.`,
          `Turn screen brightness to match the room, not the brightest setting.`,
          `Keep any desk fan or space heater aimed at your body, not your face.`,
        ],
      },
      {
        p: `Our guide for [data entry workers](/guides/dry-eyes-for-data-entry-workers) has more on monitor placement and reading from paper while you type.`,
      },
      { h: 'Store air, drive-through windows and cold rooms' },
      {
        p: `Retail pharmacies sit inside buildings with large heating and cooling systems, and the air near ceiling vents moves constantly. The drive-through window adds a gust of outdoor air every time it opens, which in winter is cold and dry. Hospital and central-fill technicians may spend time near refrigerated storage, and technicians who prepare sterile products work at hoods that move filtered air steadily across the work surface. Each one moves air past your face for hours. Stand slightly to the side of the window when it opens, and avoid parking yourself under a supply vent.`,
      },
      { h: 'The holiday rush and long shifts' },
      {
        p: `November and December are busy. People fill prescriptions before travel, before family visits and before plan years turn over, and the queue rarely empties. Long shifts and skipped breaks mean fewer chances to rest your eyes. Short, planned pauses work better than waiting for a lull that never comes: a few full blinks at each shift change, a look out a window at lunch, and stepping away from the screen during your break rather than scrolling a phone. If you work in a store with a [pharmacist](/guides/dry-eyes-for-pharmacists) who faces the same rush, swapping who takes the window can give both of you a break from the draft.`,
      },
      { h: 'Using a drop at work, and what to leave to the pharmacist' },
      {
        p: `If you use a lubricating drop, wash your hands first, and take a moment away from the counting area. Quell’s directions read: {directions}. The label also says: {tip}. Keep your own bottle in your bag or locker rather than on a shared counter, where it can be mixed up with stock or customer orders.`,
      },
      {
        p: `Technicians know the line between their role and the pharmacist’s, and the same line applies to your own eyes. Quell’s label doesn’t cover contact lenses or use alongside other drops or medicines, so questions like that go to the pharmacist on duty or your eye doctor. If a customer asks you which drop to use, refer them to the pharmacist, as you would for any product question.`,
      },
      { h: 'Splashes, powders and anything in the eye' },
      {
        p: `A lubricating drop is not a rinse for a splash. If a liquid, a crushed tablet powder or a cleaning chemical gets into your eye, follow your workplace’s procedure, use the eyewash station if one is there, and get medical help. For a chemical, call Poison Control at 1-800-222-1222. Then report it to your supervisor. Drops come later, if at all, and only after someone has checked the eye.`,
      },
      { h: 'What Quell is, and what the label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its active ingredients are {actives}, and its Uses line reads: {uses}. The label carries this caution: {warnings}. It ships in a {size} bottle. The complete panel is on our [Drug Facts page](/drug-facts), and you can [order from the home page](/#buy) with guest checkout.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `You may know a lot about medicines, but that doesn’t replace an eye exam for yourself. The label is direct: {stopUse} An eye doctor can find the cause and decide what to do. Our list of [symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers what shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working as a pharmacy tech?',
        a: `Counting, label checks and screen work all involve fixed, close focus, which lowers how often you blink. Store vents and drive-through drafts move dry air across your face at the same time.`,
      },
      {
        q: 'Can pharmacy technicians use eye drops at work?',
        a: `Check your workplace’s rules first. Where it’s allowed, use it on a break, away from the counting area and with clean hands, and keep your bottle separate from stock.`,
      },
      {
        q: 'Should a pharmacy tech ask the pharmacist about eye drops?',
        a: `Yes, for questions the label doesn’t cover, such as contact lenses or other drops. For symptoms that keep returning, see an eye doctor.`,
      },
      {
        q: 'What should a pharmacy tech do if something splashes in their eye?',
        a: `Use the eyewash station if there is one, follow your workplace procedure and get medical help. For a chemical, call Poison Control at 1-800-222-1222. A lubricating drop isn’t a rinse.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-medical-coders-and-billers',
    title: 'Dry eyes for medical coders and billers',
    description:
      'Chart reviews, code lookups and claim screens keep medical coders staring for hours. How to set up the desk and the day so your eyes stay comfortable.',
    category: 'using',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Medical coders and billers often get dry eyes because the work is long, silent reading on screens: clinical notes, code lookups, claim forms and denial queues, frequently across two monitors and against productivity targets. Concentrated reading lowers the blink rate and leaves the tear film exposed. A better desk setup, planned breaks, full blinks and a lubricating drop used as its label directs can help. Symptoms that persist need an eye doctor.`,
      },
      { h: 'Why coding work is hard on the eyes' },
      {
        p: `Coding is detail work. You read a physician’s note line by line, search for the exact term, compare it against a code description and check modifiers before you move on. Billing adds claim screens, payer portals and remittance reports full of small numbers. The eyes rarely shift distance, and the mind is busy enough that blinking slows without your noticing. Every few seconds of staring lets more of the tear film’s water layer evaporate before the next blink spreads a fresh film.`,
      },
      {
        list: [
          `Two or three monitors mean wide side-to-side scanning, often with one screen higher than the other.`,
          `Scanned documents and faxed records can be blurry, and squinting at them shortens each blink.`,
          `Productivity counts and accuracy audits make it tempting to skip breaks.`,
          `Remote coders may work at a kitchen table or a home desk that was never set up for eight hours of reading.`,
        ],
      },
      { h: 'Setting up two monitors' },
      {
        p: `Put the screen you read most directly in front of you, with its top edge at or a little below eye level. Place the second screen beside it at the same height and distance, angled toward you, so your head turns rather than your eyes straining sideways. Looking slightly downward lets the upper lids cover more of the eye. Match brightness to the room, and turn on the zoom in your encoder or chart viewer instead of leaning in.`,
      },
      {
        list: [
          `Keep the monitors about an arm’s length away.`,
          `Close blinds or move the desk so a window is beside you rather than behind the screen.`,
          `If a scanned page is hard to read, enlarge it on screen instead of squinting.`,
          `Point heating vents, desk fans and space heaters away from your face.`,
        ],
      },
      { h: 'Breaks that fit into a production day' },
      {
        p: `The usual advice is to look away every 20 minutes. In coding, the natural pause is the end of a chart. When you submit a record or close an account, close your eyes fully for a few seconds, then look across the room or out a window before opening the next one. Use a timer if long charts make you lose track. During your formal breaks, step away from screens altogether rather than switching to a phone, which keeps the same close, low-blink focus going.`,
      },
      { h: 'Working from home all year' },
      {
        p: `If you code or bill from a home office, remember that home air changes by season. A furnace in winter and air conditioning in summer both dry indoor air, and a home office in a spare bedroom often sits right above a floor register. A small humidifier near the desk, a chair moved out of the airflow and a door left open for circulation help. Our guide for [remote workers](/guides/dry-eyes-for-remote-workers) goes further into home office setups.`,
      },
      { h: 'Deadlines, audits and year-end crunches' },
      {
        p: `Month-end closes, audits and the push before the calendar year turns over can stretch the workday. Long days mean evening screen time on top of work screen time, and the eyes have fewer hours to recover. When you know a crunch is coming, protect a few small habits: the end-of-chart pause, lunch away from the desk, and lights in the room turned on rather than reading a bright screen in the dark.`,
      },
      { h: 'Using a lubricating drop at your desk' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses line reads: {uses}. The directions say: {directions}. Spacing those three uses across your waking hours fits a workday well; just don’t go beyond what the label says. Wash your hands before using it, and keep the bottle capped in a drawer. The label adds: {tip}. Before each use, check the solution, because the panel says: {doNotUse}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      {
        p: `If you wear contact lenses or use other eye drops, the label doesn’t cover that combination. Ask your eye doctor or a pharmacist first.`,
      },
      { h: 'Buying Quell' },
      {
        p: `You can [order Quell from the home page](/#buy) as a guest, and it ships to any US address from Brentwood, Tennessee, so a home office address works as well as any other. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. Some people pay for over-the-counter eye drops with HSA or FSA funds; our guide to [HSA and FSA for eye drops](/guides/hsa-fsa-and-eye-drops) explains how that works.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A coder’s eyes are part of the job, so take changes seriously. The label is plain: {stopUse} Blurring that doesn’t clear when you blink, headaches every afternoon or a new need to squint at text are all worth an eye exam. An eye doctor can find the cause and decide what to do, and an updated prescription for screen distance sometimes makes a bigger difference than any drop.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry doing medical coding?',
        a: `Coding means hours of close reading on screens, and concentration lowers how often you blink. Office or home heating and cooling dry the air at the same time.`,
      },
      {
        q: 'How should a medical coder set up two monitors?',
        a: `Put the main screen straight ahead with its top edge at or just below eye level, and the second beside it at the same height and distance. Turn your head to it rather than straining your eyes sideways.`,
      },
      {
        q: 'How often should medical billers take screen breaks?',
        a: `A short pause at the end of each chart or account works well: close your eyes for a few seconds, then look across the room. Take formal breaks away from all screens, including your phone.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-baristas',
    title: 'Dry eyes for baristas',
    description:
      'Steam wands, grinders, drive-thru drafts and dawn shifts all reach a barista’s eyes. Practical habits for the bar and when to see an eye doctor.',
    category: 'using',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Baristas often get dry eyes from a mix of things the job can’t avoid: early opening shifts, hot steam and dry heat from the espresso machine, a drive-thru window letting in cold air, bright café lights and order screens, and long stretches of close focus on shots and milk. Small habits at the bar, eye protection from drafts and a lubricating drop used as its label directs can help. Anything that splashes or burns needs medical care.`,
      },
      { h: 'Why baristas get dry eyes' },
      {
        p: `A café bar is a crowded place for eyes. In a single rush you might lean over a hot machine, look down at a pitcher while you steam, glance up at a ticket screen, turn to a cold window and look back at a cup while you pour. Each change of focus is quick, but the focus itself is intense, and intense focus lowers how often you blink. The air near the machine is warm and dry, and the air at the window is cold and dry. Neither helps the tear film hold its water.`,
      },
      { h: 'Steam, heat and the espresso machine' },
      {
        p: `Steam feels damp, so it seems like it should help dry eyes. It doesn’t work that way. A steam wand releases a hot, fast jet aimed at milk, and leaning your face into it puts your eyes in rushing hot air rather than gentle humidity. Steam can also scald. Keep your face back from the wand as you purge it, purge it pointing away from you, and let the pitcher, not your face, be close to the tip.`,
      },
      {
        list: [
          `Stand a little to the side of the group heads when you knock out pucks and flush them.`,
          `Purge the wand into a towel or the drip tray, angled away from your eyes.`,
          `Don’t peer into the hot water spout or the steam of a just-opened dishwasher.`,
          `A steam or hot water burn near the eye needs urgent care or an eye doctor promptly.`,
        ],
      },
      { h: 'Grinders, grounds and cleaning chemicals' },
      {
        p: `Grinding throws off fine dust and chaff, and brushing out a grinder or tamping station can flick grounds toward your face. Cleaning tablets and powders for the espresso machine and descaling solutions are chemicals. If grounds get into your eye, don’t rub it, and if the scratchy feeling doesn’t pass quickly, have an eye doctor or urgent care look at it. If a cleaning product splashes into your eye, use the eyewash station if your store has one, call Poison Control at 1-800-222-1222, and get medical help. A lubricating drop is not a substitute for any of this.`,
      },
      { h: 'Drive-thru windows and opening shifts' },
      {
        p: `Opening shifts start before dawn, often after a short night’s sleep, and in winter the first hours are the coldest of the day. Every time the drive-thru window slides open, a gust of outdoor air comes through at face height. Stand to one side of the opening when you hand out drinks, and if your store allows it, wear clear glasses during long window shifts to block the draft. Avoid parking a space heater by the register aimed at your face.`,
      },
      {
        p: `Fewer hours of sleep can leave eyes feeling scratchy before the day even starts. On days you open, take a few slow, full blinks before you leave the house and again at your first break.`,
      },
      { h: 'Order screens, latte art and focus' },
      {
        p: `Ticket screens, the register and the mobile order printer all ask you to read small text fast. Pouring latte art and dialing in shots ask you to stare at a small spot for several seconds without moving. Build pauses into what you already do: after you hand off a drink, close your eyes fully once before reading the next ticket. During slow periods, look out the front windows at something across the street. Our guide on [dry eyes when you focus](/guides/why-do-my-eyes-get-dry-when-i-focus) explains why concentration slows blinking.`,
      },
      { h: 'Using a drop on shift' },
      {
        p: `Use eye drops on a break, away from the bar, with hands washed after handling milk, syrups and cleaning products. Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The directions read: {directions}. The label says: {tip}. For storage: {storage}. That range rules out the shelf above the espresso machine, which runs hot, and a back-room spot beside the ice machine or walk-in, so keep the bottle in your bag or locker.`,
      },
      {
        p: `If you wear contact lenses behind the bar, Quell’s label doesn’t cover them; ask your eye doctor or a pharmacist. The same goes for using Quell with other drops.`,
      },
      { h: 'What the label covers, and ordering' },
      {
        p: `Quell’s Uses line reads: {uses}. Its caution reads: {warnings}. The complete panel is on our [Drug Facts page](/drug-facts). It comes in a {size} bottle and ships from Brentwood, Tennessee, to any US address, with guest checkout and a tracking email. If you’re shopping for the barista in your life rather than for yourself, see our [Christmas gifts for a barista](/guides/christmas-gifts-for-a-barista).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Burns, splashes and debris that won’t come out go to urgent care or an eye doctor right away. For everyday dryness that keeps returning, the label sets the limit: {stopUse} An eye doctor can find the cause and decide what to do. Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the rest.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working as a barista?',
        a: `The job mixes warm, dry air at the espresso machine, cold drafts at the drive-thru window, early shifts and long close focus on drinks and screens. All of those lower blinking or speed evaporation from the tear film.`,
      },
      {
        q: 'Does steam from an espresso machine help dry eyes?',
        a: `No. A steam wand releases a hot, fast jet, not gentle humidity, and it can scald. Keep your face back from it, purge it pointing away, and get prompt care for any steam burn near the eye.`,
      },
      {
        q: 'What should a barista do if coffee grounds get in their eye?',
        a: `Don’t rub it. If the scratchy feeling doesn’t pass quickly, have an eye doctor or urgent care check the eye. A lubricating drop isn’t meant to remove debris.`,
      },
      {
        q: 'Where should a barista keep eye drops at work?',
        a: `In a bag or locker away from the espresso machine and the ice machine. Quell’s label gives a storage range, and the shelf above the machine runs hotter than that.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-when-splitting-firewood',
    title: 'Dry eyes when splitting firewood',
    description:
      'Cold wind, bark dust and long stretches of staring at the block make splitting wood hard on dry eyes. How to protect them and when chips need a doctor.',
    category: 'seasonal',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Splitting and stacking firewood is hard on dry eyes because you work in cold, dry, often windy air, stare down at the block between swings, and kick up bark dust and chips. Wear glasses or goggles that wrap around the sides, keep the wind at your back, blink fully between rounds, and use a lubricating drop as its label directs once you’re done. A chip or splinter in the eye needs urgent care, not drops.`,
      },
      { h: 'Why firewood work dries your eyes' },
      {
        p: `A woodpile is usually outside on a cold day, often in late fall when people catch up before winter. Cold air holds little moisture, and any breeze speeds evaporation from the tear film. Splitting also asks for hard focus on one spot, the crack you’re aiming for, and concentration lowers how often you blink. Each swing kicks up fine bark, dried moss and dust from wood that has sat for a season. Then you carry armloads into a house warmed by a stove or furnace, which dries the air again. Our guide to [protecting your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) covers the outdoor half in more depth.`,
      },
      { h: 'Glasses, goggles and what covers the sides' },
      {
        p: `Plain eyeglasses leave gaps at the sides and bottom, and chips rarely fly straight at your face. Glasses that wrap around the temples, or goggles that seal against the face, block wind and debris from more angles. If you use a log splitter or a chainsaw, follow the equipment maker’s instructions for eye and face protection. Glasses also cut down the wind on your eyes, which is half the reason they feel better afterward.`,
      },
      {
        list: [
          `Choose clear lenses for gray days and late afternoons, when the light fades early.`,
          `If your glasses fog when you breathe hard, pull a scarf or gaiter below your nose so your breath goes downward.`,
          `Keep a spare pair by the door so you don’t start “just a few logs” without them.`,
        ],
      },
      { h: 'Chips, bark and dust in the eye' },
      {
        p: `A lubricating drop isn’t for getting something out of the eye. If a wood chip, a splinter or a piece of bark hits your eye, don’t rub it. If it hurts, if you can see something stuck, if your vision changes, or if the scratchy feeling doesn’t settle quickly, go to urgent care or an eye doctor promptly. The same goes for sawdust from a chainsaw cut that leaves your eye watering and sore. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) includes injuries like these.`,
      },
      { h: 'Working the pile: pace and position' },
      {
        list: [
          `Set up the splitting block so the wind blows from behind you, carrying dust away from your face.`,
          `Pause after every few rounds, close your eyes fully for a couple of seconds, and look up at something far off.`,
          `Knock loose bark and moss off a round, holding it away from your face, before you set it on the block.`,
          `Stack with the wind at your back too; dry bark crumbles as you handle it.`,
          `Brush off your sleeves and gloves before you wipe your face or touch your eyes.`,
        ],
      },
      { h: 'Gloves, cold hands and using a drop outside' },
      {
        p: `Work gloves carry bark, sap and dirt, so they’re the last thing to bring near your eyes. If you use a lubricating drop, wait until you’re done and indoors with washed hands. Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its directions read: {directions}. The label adds: {tip}. If cold, stiff fingers make it hard to aim, our guide on [eye drops with gloves on in the cold](/guides/putting-in-eye-drops-with-gloves-on-in-the-cold) has tips for steadier hands.`,
      },
      { h: 'Keeping the bottle out of the woodshed' },
      {
        p: `The label’s storage line reads: {storage}. An unheated woodshed, a truck parked at the edge of the lot or a jacket hung on a fence post can all drop below that lower number on a November afternoon. Leave the bottle inside the house. Before each use, look at the solution, because the label says: {doNotUse}. Don’t be thrown by the color, though: {appearance}`,
      },
      { h: 'Bringing the wood inside' },
      {
        p: `The work doesn’t end at the pile. Carrying wood in sheds bark and dust across the floor, and the stove or fireplace it feeds warms the air while lowering its relative humidity. Sitting close to an open fire or a hot stove puts dry, moving air right at eye level. Sweep up after you fill the indoor rack, keep your favorite chair a few feet back from the heat, and consider a humidifier in the room. Our guides to [dry eyes from a wood stove](/guides/dry-eyes-from-a-wood-stove) and [fireplaces and candles](/guides/fireplaces-candles-and-dry-eyes) go into the heat side.`,
      },
      { h: 'What Quell’s label covers, and ordering' },
      {
        p: `Quell’s Uses line reads: {uses}. The full panel, including the caution about egg or bird allergies, is on our [Drug Facts page](/drug-facts). It ships from Brentwood, Tennessee, to any US address, with guest checkout and a tracking email. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No arrival date is promised, so if you heat with wood all winter, order before you’re down to your last bottle. More cold-season topics are under [gifts and the holidays](/guides/topic/seasonal).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Injuries from wood come first: anything that strikes or sticks in the eye is a problem for urgent care or an eye doctor that day. For ordinary dryness that keeps returning after the work is done, the label sets the limit: {stopUse} An eye doctor can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel dry after splitting wood?',
        a: `You’re working in cold, often windy air, focusing hard on the block, which lowers blinking, and stirring up bark dust. A heated house afterward dries the air again.`,
      },
      {
        q: 'Should I wear goggles when splitting wood?',
        a: `Eye protection that covers the sides as well as the front blocks chips and wind from more angles than regular glasses. For log splitters and chainsaws, follow the equipment maker’s instructions.`,
      },
      {
        q: 'What should I do if a wood chip hits my eye?',
        a: `Don’t rub it. If it hurts, if something is stuck, if your vision changes or the scratchy feeling doesn’t settle quickly, go to urgent care or an eye doctor promptly. Eye drops aren’t for removing debris.`,
      },
      {
        q: 'Can I keep eye drops in a woodshed or garage?',
        a: `Not in cold weather. Quell’s label gives a storage range, and an unheated shed or garage can fall below it. Keep the bottle in the house.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-an-aging-parent-who-lives-alone',
    title: 'Christmas gifts for an aging parent who lives alone',
    description:
      'Practical, kind Christmas gifts for an older parent living on their own: light, comfort, connection, help around the house and small daily comforts.',
    category: 'seasonal',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Good Christmas gifts for an aging parent who lives alone make daily life a little easier and less lonely: brighter lighting, easy ways to stay in touch, help with the chores that have become hard, and small comforts for long winter evenings. Ask first, keep it simple to use, and set it up together. A lubricating eye drop can be a thoughtful stocking item if dry eyes already bother them.`,
      },
      { h: 'Start with a visit, not a list' },
      {
        p: `The most useful gift ideas come from watching how a parent actually gets through a day. On your next visit, notice what they reach for, what they put off and what they work around. A lamp moved from room to room, a stack of mail that’s hard to read, a step stool used to change a bulb, a phone left in another room: each one points to a gift. Ask, too. Many parents are more comfortable saying what they’d use than what they’d like.`,
      },
      { h: 'Light for reading, stairs and evenings' },
      {
        p: `Winter days are short, and a house lit for the person your parent was 20 years ago may be dim for them now. Practical lighting gifts include:`,
      },
      {
        list: [
          `A bright, adjustable reading lamp for their favorite chair, with the bulb already installed.`,
          `Plug-in night lights with motion sensors for the hallway, bathroom and stairs.`,
          `Brighter bulbs, swapped in during your visit so no one climbs a ladder later.`,
          `A lighted magnifier for recipes, medicine labels and the small print on bills.`,
          `A large-print wall calendar with family birthdays and appointments already written in.`,
        ],
      },
      { h: 'Staying in touch, made easy' },
      {
        p: `Living alone is easier with regular contact. A simple video-calling device, a tablet set up with only the apps they need, or a phone with large buttons can help, but only if it’s ready to use. Set it up before you wrap it, add the contacts, and practice a call together while you’re still there. A standing weekly call time, written on that calendar, is a gift too. So is a stack of stamped, addressed envelopes for grandchildren who still like getting letters.`,
      },
      { h: 'Help with chores they’ve started to put off' },
      {
        p: `Sometimes the right gift is time or a service rather than an object. A gift certificate you make yourself can promise a morning of cleaning gutters, changing smoke alarm batteries and moving heavy things down from high shelves. Paid help works too: a few months of house cleaning, snow removal, lawn care or grocery delivery, set up in your parent’s name with their agreement. Ask before you book anything that brings strangers to the door, and let them choose the schedule.`,
      },
      { h: 'Comfort for long winter evenings' },
      {
        list: [
          `A soft throw blanket or a heated throw with an automatic shutoff.`,
          `Slippers with real soles and good grip for hard floors.`,
          `A tabletop humidifier with an easy-fill tank, set on a sturdy surface, if the house air feels dry in winter.`,
          `Large-print books, an audiobook subscription or a radio with big, simple controls.`,
          `Prepared meals or a meal delivery plan for the weeks right after the holidays, when visits slow down.`,
        ],
      },
      {
        p: `Heated homes in winter dry the air, and older adults spending long evenings reading or watching TV often notice dryness in their eyes. A humidifier and a reading lamp aimed at the page rather than the face can help more than people expect.`,
      },
      { h: 'Is an eye drop a good gift for an older parent?' },
      {
        p: `It can be, if dry eyes already bother them and it isn’t the only thing in the box. Ask first which drops they use, because some people use prescription drops or more than one product, and the Quell label doesn’t cover use with other drops. Their eye doctor or pharmacist can answer that. Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label carries this caution, worth reading out loud with them: {warnings}. The directions are: {directions}.`,
      },
      {
        p: `If the print on drop bottles is hard for them to read, our guide to [eye drop labels that are too small to read](/guides/eye-drop-label-too-small-to-read) has ideas, and [eye drops for older adults](/guides/eye-drops-for-older-adults) covers squeezing the bottle and aiming the drop.`,
      },
      { h: 'Sending the gift if you live far away' },
      {
        p: `If you can’t be there, ship to their address and tell them it’s coming so they bring it in promptly. Quell ships from Brentwood, Tennessee, to any US address with guest checkout, and the tracking email goes to you, so you can watch the package and call them when it shows as delivered. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No arrival date is promised, so order well ahead of Christmas. Our guide to [ordering for a parent without email](/guides/ordering-eye-drops-for-a-parent-without-email) walks through the details.`,
      },
      { h: 'When the gift should be a conversation' },
      {
        p: `Some things don’t belong in a stocking. If your parent is struggling to see, has new trouble reading, or mentions eye pain, help them book an eye exam and offer to drive. For grief after a loss, see our separate guide on [Christmas gifts for a widowed parent](/guides/christmas-gifts-for-a-widowed-parent), and browse more [holiday gift guides](/guides/topic/seasonal).`,
      },
    ],
    faq: [
      {
        q: 'What do you get an elderly parent who lives alone for Christmas?',
        a: `Practical gifts that make daily life easier: brighter lighting and motion night lights, a simple video-calling setup, help with chores like gutters or snow removal, and comforts such as a warm throw or large-print books.`,
      },
      {
        q: 'What is a thoughtful gift for a parent who is lonely?',
        a: `Regular contact. A video-calling device set up and practiced together, a standing weekly call written on their calendar, and planned visits after the holidays often mean more than any object.`,
      },
      {
        q: 'Should I give my aging parent eye drops for Christmas?',
        a: `Only if dry eyes already bother them, and ask first which drops they use. Quell’s label doesn’t cover use with other drops, so their eye doctor or pharmacist should answer that question.`,
      },
      {
        q: 'How do I ship a Christmas gift to my parent’s house?',
        a: `Enter their name and address as the shipping address at checkout and your own email, so the tracking email comes to you. Tell them a package is coming so they bring it in promptly.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-on-a-hayride-or-sleigh-ride',
    title: 'Dry eyes on a hayride or sleigh ride',
    description:
      'Cold air, wind from the moving wagon and drifting hay dust all reach your eyes on a holiday hayride or sleigh ride. What to wear and what to bring.',
    category: 'seasonal',
    addedOn: '2026-11-24',
    body: [
      {
        p: `A hayride or sleigh ride is hard on dry eyes because you sit still in cold air while the wagon or sleigh moves, so a steady breeze crosses your face the whole time, often carrying hay dust and chaff. Wear glasses or sunglasses that wrap around the sides, sit facing backward or in the middle, keep the blanket away from your face, and use a lubricating drop as its label directs before or after, not in the bumpy wagon.`,
      },
      { h: 'Why a slow ride still dries your eyes' },
      {
        p: `A tractor pulling a wagon or a horse pulling a sleigh doesn’t go fast, but you’re sitting in open air for 20 minutes to an hour with no windshield. Any headwind adds to the movement. Cold air holds little moisture, and air moving across the eye speeds evaporation from the tear film’s water layer. People also tend to stare at the lights, the scenery or the person telling the story, and steady looking lowers how often you blink. Evening rides are colder still, and many holiday rides run after dark to show off light displays.`,
      },
      { h: 'Hay, straw and dust' },
      {
        p: `Bales on a wagon shed bits of stem, leaf and fine dust whenever someone sits down, shifts or tosses a handful at a friend. Straw used in sleighs and wagon beds does the same. Fine dust settles on gloves, scarves and blankets and then reaches your eyes when you rub them.`,
      },
      {
        list: [
          `Sit on a blanket rather than directly on loose hay, and keep that blanket below chin height.`,
          `Ask kids and teenagers in your group to skip the hay fights near faces.`,
          `Brush off gloves before you touch your eyes or adjust your glasses.`,
          `If chaff or a piece of straw gets into your eye and doesn’t wash out with your own tears quickly, don’t rub it; have urgent care or an eye doctor check it.`,
        ],
      },
      {
        p: `If hay, straw or animals make your eyes itch or swell every time, that’s something to ask a doctor about before the next outing. A lubricating drop isn’t meant for that.`,
      },
      { h: 'Where to sit, and what to wear' },
      {
        p: `Seats near the front of a wagon catch the most wind and whatever the tractor or horse kicks up. A seat in the middle or one facing backward keeps the breeze off your face. Glasses or sunglasses that curve around the sides block both wind and dust, and clear lenses work after dark. A knit hat pulled low and a scarf over the cheeks help too, as long as the scarf doesn’t push your own breath up into your glasses. Our guide on [protecting your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) has more ideas for winter outings.`,
      },
      { h: 'Using a drop around the ride' },
      {
        p: `A bouncing wagon is no place to aim a dropper. If you use a lubricating drop, do it before you board or after you’re back on the ground, with clean hands and steady footing. Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its directions read: {directions}. The label also says: {tip}, so keep the cap on and the tip away from blankets, gloves and hay.`,
      },
      {
        p: `If you wear contact lenses, Quell’s label doesn’t cover them; ask your eye doctor before you rely on any drop with lenses in. The same goes for using Quell with other drops.`,
      },
      { h: 'Keeping the bottle warm' },
      {
        p: `The label’s storage line reads: {storage}. On a cold evening, an outer coat pocket or a diaper bag on the wagon floor can fall below that lower number. Keep the bottle in an inside pocket close to your body, or leave it in the house or the warm farm store and use it when you get back. Don’t leave it in the parked car while you’re out on the ride and then at the fire pit afterward.`,
      },
      { h: 'Bonfires, cider and the warming barn' },
      {
        p: `Many holiday rides end at a fire pit or a heated barn. Smoke drifts into faces with every change of wind, and sitting close to the flames puts hot, dry air at eye level. Pick a seat upwind, move when the smoke shifts, and stand a little farther back than feels necessary. Inside a barn with space heaters, sit away from the heater’s path. Our guide to [dry eyes at a winter bonfire](/guides/dry-eyes-at-a-winter-bonfire) goes further into smoke and heat.`,
      },
      { h: 'Ordering ahead, and the label’s caution' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, with guest checkout and a tracking email. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No arrival date is promised, so order well before a planned outing. One caution on the label is worth reading before you buy: {warnings}. The full panel is on our [Drug Facts page](/drug-facts), and more seasonal guides are in [gifts and the holidays](/guides/topic/seasonal).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Wind-dried eyes usually feel better within a while of getting indoors. If they don’t, the label is specific: {stopUse} Anything that hit or stuck in your eye on the ride needs prompt care. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes water on a hayride?',
        a: `The wagon’s movement and any headwind push cold, dry air across your eyes the whole ride. That speeds evaporation from the tear film, and eyes often answer with reflex tears while still feeling dry.`,
      },
      {
        q: 'What should I wear on a sleigh ride to protect my eyes?',
        a: `Glasses or sunglasses that wrap around the sides, a knit hat pulled low, and a scarf over your cheeks. Clear lenses work on evening rides.`,
      },
      {
        q: 'What do I do if hay gets in my eye?',
        a: `Don’t rub it. If it doesn’t wash out with your own tears quickly, or if it hurts or your vision changes, have urgent care or an eye doctor check the eye.`,
      },
      {
        q: 'Where is the warmest seat on a hayride?',
        a: `Usually the middle of the wagon or a seat facing backward, which keeps the headwind off your face. Front seats catch the most wind and dust.`,
      },
    ],
  },
  {
    slug: 'why-do-my-eyes-feel-dry-when-i-close-them',
    title: 'Why do my eyes feel dry when I close them?',
    description:
      'Eyes that sting or feel dry the moment you close them usually dried out while open. What that feeling means, simple habits, and when to see a doctor.',
    category: 'choosing',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Eyes often feel dry or sting when you close them because the surface dried out while they were open, and closing them is the first moment you notice. Long screen sessions, dry heated or cooled air and wind all thin the tear film, and your lids then sweep across a drier surface. Resting your eyes, blinking fully and a lubricating drop used as its label directs can help. Pain or vision changes need an eye doctor.`,
      },
      { h: 'What happens when you close your eyes' },
      {
        p: `While your eyes are open, a thin tear film covers the front of each eye. It has an oil layer on the outside, a water layer in the middle and a mucus layer against the eye. Each blink spreads a fresh film; between blinks, water evaporates from it. When you close your eyes, the lids glide down across the surface and then rest on it, covering the eye completely. With the eye shut, there’s nowhere for moisture to evaporate to, and the film has a chance to even out.`,
      },
      {
        p: `So closing your eyes isn’t what dries them. It’s what lets you feel how dry they already were.`,
      },
      { h: 'Why the feeling shows up the moment you shut them' },
      {
        list: [
          `You just stopped looking. During a long read, a drive or a game, your attention is on what you’re seeing, not on how your eyes feel. Closing them shifts your attention to the sensation.`,
          `The lids meet a drier surface. After minutes of infrequent blinking, the surface is less slick, so the lids drag slightly as they come down, which reads as stinging or grittiness.`,
          `Partial blinks leave a dry strip. When you half-blink at a screen, the lower part of the eye stays exposed longer. Closing fully covers that strip, and you feel it.`,
          `Warmth. Closed lids hold the eye’s own warmth, and a dried surface can feel briefly hot or burning when it’s covered.`,
        ],
      },
      { h: 'Stinging, burning, gritty or heavy?' },
      {
        p: `People describe this feeling in different ways, and the words help when you talk to an eye doctor. A brief sting that fades after a few seconds of closed eyes fits a dried surface. A gritty or sandy feeling that stays is worth reading about in [why eyes feel gritty](/guides/why-do-my-eyes-feel-gritty). Lids that feel weighed down are covered in [why eyes feel heavy](/guides/why-do-my-eyes-feel-heavy). If the feeling is sharp, comes with pain, or one eye is much worse, skip the reading and call an eye doctor.`,
      },
      { h: 'A simple resting check' },
      {
        p: `If you’re not sure whether dryness is the issue, try this the next time your eyes sting when you close them:`,
      },
      {
        list: [
          `Close your eyes gently, without squeezing, and keep them closed for about 20 seconds.`,
          `Breathe normally and let your face relax.`,
          `Open them slowly and blink fully a few times.`,
          `Notice whether the sting has eased. If it has, a dried surface is the likely reason, and the habits below are worth trying.`,
        ],
      },
      {
        p: `This is not a diagnosis. It’s just a way to notice a pattern you can describe to an eye doctor. If the feeling comes back every time, or gets stronger with your eyes closed, that’s a reason to book an exam.`,
      },
      { h: 'At night: when eyes may not close all the way' },
      {
        p: `Some people wake with eyes that feel dry as they first close them again after a night’s sleep. A fan or a heating vent blowing across the bed is a common reason, and our guide to [dry eyes when sleeping with a fan on](/guides/dry-eyes-when-sleeping-with-a-fan-on) covers it. If a partner has noticed that your eyes stay slightly open while you sleep, tell an eye doctor. It isn’t something to work out with drops on your own.`,
      },
      { h: 'Habits that make closing your eyes feel better' },
      {
        list: [
          `Every 20 minutes at a screen, look away and close your eyes fully for a few seconds rather than waiting until they sting.`,
          `Lower the screen slightly so you look down at it; more of the eye stays covered by the lids.`,
          `Point heating vents, fans and car vents away from your face.`,
          `Run a humidifier in the bedroom in heating season.`,
          `Wear wraparound sunglasses in wind.`,
        ],
      },
      { h: 'Where a lubricating drop fits' },
      {
        p: `A lubricating drop adds moisture to the surface so blinks and closed eyes have more to work with. Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses line reads: {uses}. Directions: {directions}. After a drop, closing your eyes gently for a moment is a natural thing to do. The label doesn’t cover contact lenses or use with other drops, so ask your eye doctor or a pharmacist about those. The whole panel is on our [Drug Facts page](/drug-facts), and you can [order Quell here](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `See an eye doctor if your eyes hurt when you close them, if closing them doesn’t ease the feeling, or if it keeps returning for no clear reason. The label also sets a limit: {stopUse} Our [self-check](/self-check) can help you put your symptoms into words before the appointment.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes burn when I close them?',
        a: `Usually because the surface dried out while your eyes were open, often during screen use or in dry, moving air. Closing them is the moment you notice it. If the burning is strong or doesn’t ease, see an eye doctor.`,
      },
      {
        q: 'Is it good to close your eyes to rest them?',
        a: `Closing your eyes gently for 20 seconds or so lets the tear film even out, and many people find it eases screen-related dryness. It isn’t a fix for eye pain or vision changes, which need an eye doctor.`,
      },
      {
        q: 'Why do my eyes feel better when I close them?',
        a: `With the lids closed, moisture can’t evaporate from the front of the eye, and the tear film has a chance to spread evenly again. That relief is a hint that dryness, not something else, is behind the discomfort.`,
      },
      {
        q: 'Why do my eyelids feel dry when I blink slowly?',
        a: `A slow, full blink lets you feel the lids drag across a surface that has dried between blinks. Long, fixed focus and dry air are the usual reasons.`,
      },
    ],
  },
  {
    slug: 'why-do-my-eyes-feel-dry-when-im-sick',
    title: 'Why do my eyes feel dry when I’m sick?',
    description:
      'Sick days mean heated bedrooms, hours of screens in bed and broken sleep, all hard on the tear film. What helps, and why medicine questions go to a pharmacist.',
    category: 'choosing',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Eyes can feel dry on sick days because of how sick days are spent: in a warm, closed-up bedroom with the heat turned up, watching a phone or TV for hours with fewer blinks, and sleeping at odd times near fans or vents. Changing the room and the screen habits can help. Quell’s label doesn’t cover illness or medicines, so ask a doctor or pharmacist about anything you’re taking.`,
      },
      { h: 'What a sick day does to the room' },
      {
        p: `When you’re unwell, the thermostat usually goes up, the door stays closed and you stay in one room for most of the day. In winter, that means warm air from a furnace or a space heater, and warming air without adding water lowers its relative humidity. A space heater beside the bed or the couch blows that dry air straight across your face. Extra blankets piled up near your chin can keep warm air trapped around your eyes too.`,
      },
      {
        list: [
          `Aim a space heater at your feet or the middle of the room, never at the pillow.`,
          `Run a clean humidifier on the far side of the room in heating season.`,
          `Close or redirect a ceiling vent that blows across the bed.`,
          `Crack the door now and then so the room doesn’t get stuffy and overheated.`,
        ],
      },
      { h: 'Screens in bed for hours' },
      {
        p: `A sick day often turns into a long stretch of streaming, scrolling and gaming. People blink less while they watch a screen, and holding a phone close to your face while lying down means more of each blink is a half-blink. Over hours, that leaves the surface of the eye drier than usual. Prop yourself up so the screen sits below eye level, hold it farther away, and look across the room every 20 minutes. Our guide to [dry eyes from your phone in bed](/guides/dry-eyes-from-looking-at-your-phone-in-bed) has more on that habit.`,
      },
      { h: 'Naps, fans and broken sleep' },
      {
        p: `Being sick scrambles sleep: a long morning nap, an afternoon doze, a restless night. A fan running to keep you cool, or a vent near the bed, moves air across your face for every one of those hours. Turn fans toward the wall or the ceiling. If you wake up with eyes that feel dry, blink slowly a few times before you reach for your phone. Our guide on [why eyes feel dry after a nap](/guides/why-are-my-eyes-dry-after-a-nap) looks at daytime sleep in more detail.`,
      },
      { h: 'Medicines: what the label doesn’t cover' },
      {
        p: `If you’re taking medicine while you’re sick, prescription or over the counter, Quell’s label has nothing to say about it. It doesn’t cover how other medicines might affect your eyes, and it doesn’t cover using Quell alongside them. A pharmacist can look at what you’re taking and answer that, and so can the doctor looking after you while you’re ill. Our list of [questions to ask a pharmacist](/guides/questions-to-ask-your-pharmacist) can help you prepare. Don’t guess, and don’t stop or change a medicine because of how your eyes feel without asking first.`,
      },
      { h: 'Clean hands, your own bottle' },
      {
        p: `When you’re sick, you’re touching your face, tissues and the TV remote from morning to night. Wash your hands before you touch your eyes or open an eye drop bottle. The label is specific about the tip: {tip}. Keep your bottle for yourself rather than sharing it with others in the house, and keep the cap on between uses.`,
      },
      { h: 'Where a lubricating drop fits' },
      {
        p: `For everyday dryness from a stuffy room and a long screen day, a lubricating drop is one option. Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses line reads: {uses}. Its directions: {directions}. Before using it, look at the solution, because the label says: {doNotUse}. The label doesn’t cover contact lenses, children or use with other drops, so those questions go to your eye doctor or pharmacist. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting back to normal' },
      {
        p: `As you recover, the habits that dried your eyes usually end on their own: the heat goes back down, you’re out of bed, and screen time drops. If your eyes still feel dry once you’re well and back to your routine, look at your everyday setup, from screens at work to the bedroom air. Our guide to [what makes dry eyes worse](/guides/what-makes-dry-eyes-worse) is a good place to start.`,
      },
      { h: 'When to call a doctor' },
      {
        p: `If anything about your eyes worries you while you’re sick, tell the doctor you’re seeing for the illness or call an eye doctor. The label sets its own limit: {stopUse} Eye pain, changes in your vision or one eye much worse than the other shouldn’t wait for you to feel better. See our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Can I use eye drops when I’m sick?',
        a: `Quell’s label doesn’t cover illness or the medicines you might be taking for it. Ask a pharmacist or your doctor before using any drop alongside other medicines.`,
      },
      {
        q: 'Why do my eyes feel dry after a day in bed?',
        a: `A day in bed usually means a warm, closed room, hours of screens with fewer blinks and naps near fans or vents. Each of those speeds evaporation from the tear film.`,
      },
      {
        q: 'Should I share eye drops with someone in my house who is sick?',
        a: `No. Keep your own bottle, wash your hands before using it, and follow the label’s instruction not to touch the tip to any surface.`,
      },
      {
        q: 'Do cold medicines make your eyes dry?',
        a: `Quell’s label doesn’t address other medicines, so it can’t answer that. A pharmacist can look at the specific medicine you’re taking and tell you what its own label says.`,
      },
    ],
  },
  {
    slug: 'why-do-my-eyes-feel-dry-after-being-outside',
    title: 'Why do my eyes feel dry after being outside?',
    description:
      'Wind, sun, cold air and dust dry the eye’s surface outdoors, then indoor heat or air conditioning finishes the job. What helps before, during and after.',
    category: 'choosing',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Eyes often feel dry after time outside because wind, low humidity, bright sun and dust all speed evaporation from the tear film or make you squint, which shortens each blink. Coming back into heated or air-conditioned rooms can add to it. Wraparound sunglasses, a brimmed hat, breaks out of the wind and a lubricating drop used as its label directs can help. Pain or vision changes need an eye doctor.`,
      },
      { h: 'Wind is the biggest factor' },
      {
        p: `The tear film’s water layer evaporates into whatever air moves across it, and outdoor air almost always moves more than indoor air. A breeze on a walk, the wind on a ballfield or the air rushing past on a bike all pull moisture from the surface between blinks. You add your own wind when you walk briskly, run or ride. Even a calm day can feel windy on a boat, a ski lift or a hilltop.`,
      },
      { h: 'Sun, glare and squinting' },
      {
        p: `Bright light makes people squint, and a squint is a half-closed eye that blinks less fully. Glare off snow, water, sand and pavement adds to it. Low sun in late fall and winter shines straight into your eyes for much of the day, and a long drive or walk toward it keeps you squinting for minutes at a time. Sunglasses cut glare, and a brimmed hat blocks the sun from above.`,
      },
      { h: 'Cold air outside, heated air inside' },
      {
        p: `Winter gives eyes a double hit. Cold outdoor air holds very little water, and wind makes it worse. Then you come inside to a heated house or office, where the furnace has warmed that same dry air without adding moisture, which lowers its relative humidity. Many people notice their eyes the most in the first half hour after coming in from the cold. Eyes often water outdoors in cold wind and then feel dry indoors, which is confusing but common. Our guide to [dry eyes from cold air](/guides/dry-eyes-from-cold-air) explains why eyes water and still feel dry.`,
      },
      {
        p: `Summer has its own version: hot, bright afternoons outside followed by a blast of air conditioning in the car or the house. Cooling also removes moisture from the air.`,
      },
      { h: 'Dust, pollen and smoke' },
      {
        p: `Outdoor air carries particles: dust from dry fields and roads, pollen, smoke from fires and grills, and grit kicked up by mowers and leaf blowers. These can make eyes feel scratchy. If something blows into your eye and you can still feel it, if it hurts, or if your vision changes, have urgent care or an eye doctor check it. A lubricating drop isn’t meant for removing debris. Eyes that itch or swell every time you’re outdoors in a certain season are worth asking a doctor about.`,
      },
      { h: 'How to protect your eyes outside' },
      {
        list: [
          `Wear sunglasses that wrap around the sides; they block wind and dust as well as glare.`,
          `Add a hat with a brim on sunny days and in light rain or snow.`,
          `Keep your back to the wind when you stop to talk, wait or work.`,
          `Take short breaks in the shade or in a sheltered spot to close your eyes for a few seconds.`,
          `For yard work, mowing or blowing leaves, use glasses or goggles with side coverage.`,
          `On cold days, a scarf or gaiter over the cheeks helps, tucked below the nose so your breath doesn’t fog your glasses.`,
        ],
      },
      { h: 'What to do when you come back in' },
      {
        list: [
          `Wash your hands before touching your eyes; gloves and hands pick up dust outdoors.`,
          `Point car vents and home heating vents away from your face for the first few minutes.`,
          `Sit away from the fireplace, the wood stove or the space heater while you warm up.`,
          `Blink slowly and fully a few times, then close your eyes for 20 seconds.`,
          `If you go straight to a screen, look away from it often while your eyes settle.`,
        ],
      },
      { h: 'Where a lubricating drop fits' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses line reads: {uses}. The directions say: {directions}. Some people time a drop before a long walk or after coming back inside, within those directions. Keep the bottle where the label’s storage range holds: {storage}. That rules out a car parked in the sun or left out in a freezing driveway. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      {
        p: `If you wear contact lenses outdoors, the label doesn’t cover them, so ask your eye doctor. You can [order Quell](/#buy) with guest checkout, and it ships to any US address.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dryness from wind and sun usually eases within a while of coming indoors. If it doesn’t, or if it returns every time you step outside, an eye doctor can find the cause and decide what to do. The label is clear: {stopUse} See our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for the signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel dry after a walk outside?',
        a: `A walk puts moving air across your eyes the whole time, and brisk walking adds your own breeze. Sun and glare make you squint and blink less fully, so the tear film dries faster.`,
      },
      {
        q: 'Why are my eyes dry after being in the wind?',
        a: `Wind speeds evaporation from the tear film’s water layer between blinks. Wraparound sunglasses and keeping your back to the wind help.`,
      },
      {
        q: 'Why do my eyes feel worse when I come inside from the cold?',
        a: `Cold outdoor air is dry, and heating it indoors lowers its relative humidity further. Many people notice dryness most in the first half hour after coming in, especially near a heater.`,
      },
      {
        q: 'Do sunglasses help keep eyes from drying out outside?',
        a: `Wraparound sunglasses block wind, dust and glare, which all speed drying or make you squint. A brimmed hat adds shade from above.`,
      },
    ],
  },
  {
    slug: 'can-i-order-eye-drops-for-my-in-laws',
    title: 'Can I order eye drops for my in-laws?',
    description:
      'Yes. Check out as a guest with their name and address for shipping and your own email and card. What to ask first and how the emails and refunds work.',
    category: 'ordering',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Yes, you can order Quell for your in-laws. Check out as a guest, enter their name and address as the shipping address, and use your own email and payment card. The confirmation and tracking emails come to you. Ask them first which drops they already use, because Quell’s label doesn’t cover use with other drops, and read them the label’s caution about egg or bird allergies before you buy.`,
      },
      { h: 'How to place the order, step by step' },
      {
        list: [
          `Add Quell to your cart from the [home page](/#buy), choosing how many bottles to send.`,
          `At checkout, enter your own email address, so order emails reach you.`,
          `Enter your in-law’s first and last name, street address, apartment or unit if there is one, city, state and ZIP as the shipping details.`,
          `Enter a phone number for delivery updates. The carrier asks for one; use whichever number makes more sense for that address.`,
          `Pay on the secure payment page with your own card. The name on the card doesn’t need to match the shipping name.`,
        ],
      },
      {
        p: `There’s no account to create and no subscription. If a card name and a shipping name differ, that’s normal for orders sent to family, and our guide on [mismatched names](/guides/name-on-card-does-not-match-shipping-name) explains it.`,
      },
      { h: 'Talk with them (and your spouse) first' },
      {
        p: `In-laws can be private about health, and a surprise box of eye drops can land differently than you intend. A short conversation helps, ideally led by your spouse or partner if it’s their parents. Some useful questions:`,
      },
      {
        list: [
          `Do your eyes feel dry, and do you already use any drops for that?`,
          `Do you use any prescription eye drops, or more than one kind?`,
          `Do you wear contact lenses?`,
          `Do you have an egg or bird allergy?`,
          `Would you rather we ship to you or bring it at the next visit?`,
        ],
      },
      {
        p: `Those questions matter because Quell’s label doesn’t cover contact lenses or use with other drops. If either applies, their eye doctor or pharmacist should weigh in before they start. The allergy question comes from the label itself: {warnings}.`,
      },
      { h: 'Whose email goes on the order?' },
      {
        p: `Whoever enters their email at checkout gets the order confirmation, the shipping email with tracking and, later, a single reorder reminder. If you want your in-laws to handle future orders themselves, they can order on their own next time. If you’d rather keep track and reorder for them, use your email so the reminder comes to you. Decide with your spouse whose inbox makes more sense, so you don’t both order at once. Our guide on [the reorder reminder](/guides/when-does-the-reorder-reminder-email-come) explains when it arrives.`,
      },
      { h: 'Shipping to their house' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, so in-laws in another state are fine. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free, which can make sense if you’re sending a supply. No delivery date is promised. Watch the tracking email, and when it shows delivered, give them a call so the box comes inside promptly. The label’s storage line reads: {storage}, so a package left on a cold porch or in a hot mailbox shouldn’t sit there for long. If they live in a nursing home or another care setting, see our guide on [ordering for someone in a nursing home](/guides/ordering-eye-drops-for-someone-in-a-nursing-home) first.`,
      },
      { h: 'What to tell them when it arrives' },
      {
        p: `A quick heads-up saves a worried phone call. Quell looks different from many drops: {appearance} Point them to the directions, which read: {directions}. Mention the label’s line about the tip: {tip}. If the print is small, our [Drug Facts page](/drug-facts) shows the whole panel in larger type on a phone or tablet.`,
      },
      { h: 'If they don’t want it' },
      {
        p: `Sometimes a gift misses. Unopened bottles can be refunded within {returnDays} days of delivery, and nobody has to mail them back. Because the order is in your name, you make the call: phone {phone} ({hours}) with your order number from the confirmation email. Opened bottles can’t be refunded. If a bottle arrives damaged, incorrect or with a broken seal, it’s replaced within the same {returnDays} days. The full policy is in our [terms](/terms).`,
      },
      { h: 'Buying with an HSA or FSA' },
      {
        p: `IRS Publication 969 says HSA money can pay qualified medical expenses for you, your spouse and the dependents you claim on your tax return, plus a few further cases it spells out. Whether a parent-in-law fits depends on your own tax situation, and FSA plans set their own rules too, so ask your plan administrator before using that card. Our guide on [using an HSA for a parent’s eye drops](/guides/can-i-use-my-hsa-for-my-parents-eye-drops) explains the general rule.`,
      },
    ],
    faq: [
      {
        q: 'Can I send eye drops to my mother-in-law?',
        a: `Yes. Use guest checkout, enter her name and address for shipping, and use your own email and card. Ask her first which drops she already uses, since Quell’s label doesn’t cover use with other drops.`,
      },
      {
        q: 'Whose email should I use when ordering for my in-laws?',
        a: `Use the email of whoever will track the package and handle reorders. That inbox gets the confirmation, the tracking email and the single reorder reminder.`,
      },
      {
        q: 'Can my in-laws get a refund on eye drops I bought them?',
        a: `Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. Since the order is yours, call {phone} with your order number.`,
      },
      {
        q: 'Can I use my HSA for my in-laws’ eye drops?',
        a: `IRS Publication 969 covers expenses for you, your spouse and your dependents, so it depends on whether an in-law counts as your dependent. Check with your plan administrator before paying with HSA funds.`,
      },
    ],
  },
  {
    slug: 'ordering-eye-drops-over-thanksgiving-weekend',
    title: 'Ordering eye drops over Thanksgiving weekend',
    description:
      'Quell’s site takes orders any hour of the holiday weekend. What happens when you order on Thanksgiving, Black Friday or Cyber Monday, and what to expect.',
    category: 'ordering',
    addedOn: '2026-11-24',
    body: [
      {
        p: `You can order Quell at any time over Thanksgiving weekend, from Thursday, November 26, through Cyber Monday, November 30, 2026. The site takes orders around the clock, and you get a confirmation email right away. There are no holiday promo codes or doorbuster prices, and we don’t promise ship or arrival dates, so order before you run low rather than counting on a holiday-week turnaround.`,
      },
      { h: 'The holiday weekend, by date' },
      {
        list: [
          `Thursday, November 26, 2026: Thanksgiving Day.`,
          `Friday, November 27: Black Friday.`,
          `Saturday, November 28 and Sunday, November 29: the weekend.`,
          `Monday, November 30: Cyber Monday.`,
        ],
      },
      {
        p: `Checkout works the same on every one of those days. The phone line’s listed hours are {hours}, so a call on the holiday itself or over the weekend may have to wait for regular hours the following week.`,
      },
      { h: 'What happens when you order on a holiday' },
      {
        p: `Placing an order on Thanksgiving night is no different from placing one on a Tuesday morning:`,
      },
      {
        list: [
          `You check out as a guest; there’s no account to create.`,
          `You pay on a secure payment page, and the terms say you authorize the charge when you submit the order.`,
          `A confirmation email with your order number comes to the address you entered.`,
          `When the order ships, a second email arrives with tracking.`,
        ],
      },
      {
        p: `We don’t state when a holiday order will ship or arrive. That’s why the honest advice is simple: if you’re close to your last bottle, order now rather than on Monday. Our guide to [ordering on a weekend](/guides/can-i-order-eye-drops-on-a-weekend) covers ordinary weekends.`,
      },
      { h: 'Does Quell have Black Friday or Cyber Monday deals?' },
      {
        p: `No. Quell doesn’t run promo codes, coupons or holiday sales, and the price in your cart is the price. What can lower the cost per bottle is shipping: it’s {shipping} on smaller orders, and orders of {freeBottles} or more bottles ship free. If you’re buying for yourself and for family at the same time, combining into one order can reach that threshold. Our page on [Black Friday deals](/guides/quell-black-friday-and-holiday-deals) explains why there’s no sale price to wait for.`,
      },
      { h: 'Ordering from a relative’s house' },
      {
        p: `Thanksgiving often means a borrowed laptop, a shared tablet or a phone on a weak guest network. A few points help:`,
      },
      {
        list: [
          `Your cart lives in the browser where you built it, so a cart started on your phone won’t appear on your sister’s laptop.`,
          `Checkout can remember name and address details in that browser for next time. On a shared device, use “Not you? Clear details” if someone else’s information fills in, and clear yours before you hand the device back.`,
          `Card details are typed on the payment provider’s page, not saved by our checkout.`,
          `Double-check the shipping address. If you want the order at home, don’t let autofill on a relative’s computer put in their address.`,
        ],
      },
      {
        p: `If you’re going to be away for a while and want the bottle delivered where you’re staying, see our guide on [shipping to a holiday address](/guides/shipping-to-a-holiday-address).`,
      },
      { h: 'Buying for family while you’re together' },
      {
        p: `A holiday table is a good place to ask, quietly, whether a parent or in-law has been bothered by dry eyes. Ask which drops they already use, and whether they wear contact lenses, because Quell’s label doesn’t cover lenses or use with other drops. One caution from the label is worth saying out loud: {warnings}. If you decide to buy for them, put their name and address in the shipping fields and your own email on the order. Our guide on [ordering for someone else](/guides/ordering-eye-drops-for-someone-else) walks through it.`,
      },
      { h: 'Year-end FSA and HSA money' },
      {
        p: `Late November is when many people notice an FSA balance that might not carry over. Over-the-counter eye drops can be a qualified medical expense, but plan rules on deadlines, grace periods and carryover differ, so check with your plan administrator before counting on a holiday order. Our guide to [spending FSA money before the year ends](/guides/spending-fsa-money-before-year-end) has the details.`,
      },
      { h: 'If something goes wrong over the weekend' },
      {
        list: [
          `No confirmation email? Check spam and promotions folders, then look up the order on our [order status page](/orders) with your order number and email.`,
          `A typo in the address? Call {phone} as soon as the line is open, with your order number.`,
          `Changed your mind? Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back.`,
        ],
      },
      { h: 'Before your first drop' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its directions read: {directions}. If your eyes hurt or your vision changes, don’t wait for a delivery; call an eye doctor. The label is specific: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Can I order Quell on Thanksgiving Day?',
        a: `Yes. The site takes orders at any hour, including Thanksgiving, and the confirmation email arrives right away. The phone line keeps its listed weekday hours.`,
      },
      {
        q: 'Is there a Cyber Monday sale on Quell eye drops?',
        a: `No. Quell has no promo codes or holiday sales. Orders of {freeBottles} or more bottles ship free, which is the one way to lower the cost per bottle.`,
      },
      {
        q: 'Will an order placed on Black Friday arrive before the weekend is over?',
        a: `We don’t promise ship or arrival dates for any order, holiday or not. Order before you run low, and watch the tracking email once it ships.`,
      },
      {
        q: 'Can I order eye drops on a relative’s computer?',
        a: `Yes. Your cart won’t follow you from your own device, so add the bottles again, check the shipping address carefully, and clear your saved details before handing the device back.`,
      },
    ],
  },
  {
    slug: 'can-i-order-eye-drops-on-a-tablet',
    title: 'Can I order eye drops on a tablet?',
    description:
      'Yes. Quell’s site works in any tablet browser. What’s different from a phone, how shared family tablets handle saved details, and fixes for common snags.',
    category: 'ordering',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Yes, you can order Quell on a tablet. The site works in the tablet’s web browser, with no app to download, and you check out as a guest. Two things are different from a phone: tablets are often shared, so check that the saved name and address belong to you, and your cart stays in the browser where you built it, so it won’t follow you to another device.`,
      },
      { h: 'Ordering on a tablet, step by step' },
      {
        list: [
          `Open the tablet’s browser and go to quelldrop.com.`,
          `Choose how many bottles you want in the buy panel on the [home page](/#buy) and add them to your cart.`,
          `In the cart, enter your email, the shipping name and address, and a phone number for delivery updates.`,
          `Continue to the secure payment page and type your card details there.`,
          `Look for the confirmation email with your order number.`,
        ],
      },
      {
        p: `Our guide to [ordering on your phone](/guides/ordering-eye-drops-on-your-phone) covers the basics of mobile checkout. The rest of this page is about what’s particular to tablets.`,
      },
      { h: 'The family tablet: whose details are these?' },
      {
        p: `A tablet on the kitchen counter or by a parent’s chair is often used by several people. Our checkout can remember the name, address and contact details last typed in that browser, so the next person doesn’t have to retype them. On a shared tablet, that means you might see someone else’s details already filled in.`,
      },
      {
        list: [
          `If the form fills in with another person’s information, tap “Not you? Clear details” above the email field and enter your own.`,
          `If you’re ordering on a relative’s tablet, clear your details when you’re done if you don’t want them offered to the next person.`,
          `Card numbers are never saved by our checkout; they’re typed on the payment provider’s page each time.`,
          `In a private browsing tab, the tablet may not remember the cart or your details at all, which is fine; you just enter them again.`,
        ],
      },
      { h: 'Your cart stays on that tablet' },
      {
        p: `The cart is stored in the browser you’re using, not in an account. Bottles you add on a tablet won’t appear on your phone or laptop, and a cart you started on your phone won’t appear on the tablet. If you switch devices partway, simply add the bottles again. A different browser on the same tablet counts as a different place too.`,
      },
      { h: 'Reading the label on a bigger screen' },
      {
        p: `A tablet is a good way to read the full Drug Facts panel before you buy, especially if small print is hard. Our [Drug Facts page](/drug-facts) shows every section, and you can pinch to zoom. The panel’s Uses line reads: {uses}. Its directions: {directions}. It also carries this caution: {warnings}. If you or the person you’re buying for wears contact lenses or uses other eye drops, the label doesn’t cover those combinations; ask an eye doctor or pharmacist first.`,
      },
      { h: 'Typing addresses with an on-screen keyboard' },
      {
        list: [
          `Turn the tablet sideways if the keyboard covers the field you’re typing in.`,
          `Watch for autofill choosing an old address or someone else’s saved address.`,
          `Put an apartment, unit or suite number in the “Apt, suite” line rather than squeezing it into the street line.`,
          `Read the email address back before you continue; a typo means the confirmation and tracking emails go nowhere.`,
        ],
      },
      { h: 'Links from email or social media apps' },
      {
        p: `If you tap a link inside an email app or a social app on a tablet, it may open in that app’s own small browser rather than your main one. Checkout still works there, but a cart started in that built-in browser won’t carry over to your regular browser later. If something looks off, copy the link into your main browser and start again. Make sure the address bar reads quelldrop.com before you enter anything.`,
      },
      { h: 'After you order' },
      {
        p: `You can check an order’s status on our [order status page](/orders) with your order number and the email you used. Shipping is {shipping}, orders of {freeBottles} or more bottles ship free, and orders go to US addresses only. No delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back; call {phone} ({hours}) with your order number.`,
      },
      { h: 'If the page won’t load or the button won’t respond' },
      {
        list: [
          `Update the tablet’s browser, or try a different browser app.`,
          `Turn off content blockers for the site if the payment page won’t open.`,
          `Switch from a weak Wi-Fi signal to a stronger one before you pay.`,
          `If you see an error message at checkout, our guide on [checkout error messages](/guides/checkout-error-messages-explained) explains what each one means.`,
        ],
      },
    ],
    faq: [
      {
        q: 'Is there a Quell app for iPad?',
        a: `No app is needed. Quell’s site works in the tablet’s web browser, including on an iPad, and you check out as a guest.`,
      },
      {
        q: 'Why does my tablet fill in someone else’s address at checkout?',
        a: `Checkout remembers the details last typed in that browser. On a shared tablet, tap “Not you? Clear details” and enter your own information.`,
      },
      {
        q: 'Will my cart from my tablet show up on my phone?',
        a: `No. The cart is stored in the browser where you built it, not in an account, so add the bottles again on the other device.`,
      },
      {
        q: 'Can I read the eye drop label on my tablet before buying?',
        a: `Yes. The Drug Facts page shows the full panel, and you can zoom in on a tablet to read the smaller sections.`,
      },
    ],
  },
  {
    slug: 'shipping-eye-drops-to-a-senior-living-community',
    title: 'Shipping eye drops to a senior living community',
    description:
      'Sending Quell to a parent in independent or senior living? How to write the address, who gets the tracking, what to ask the front desk and the resident.',
    category: 'shipping',
    addedOn: '2026-11-24',
    body: [
      {
        p: `You can ship Quell to someone in an independent or senior living community like any other US address. Put the resident’s full name on the order, their building and apartment number in the “Apt, suite” line, and your own email if you want the tracking. Ask the community how packages reach residents, and ask the resident which drops they already use before you send any.`,
      },
      { h: 'Senior living vs a nursing home' },
      {
        p: `Many communities for older adults are apartments with shared services: residents live on their own, with a front desk, a mailroom and staff on site. That’s different from a nursing home, where staff often manage residents’ medicines. If your parent or grandparent lives in a care setting where staff give medicines, read our guide to [ordering for someone in a nursing home](/guides/ordering-eye-drops-for-someone-in-a-nursing-home) first. This page is about the independent-living kind.`,
      },
      { h: 'Writing the address so it reaches the apartment' },
      {
        list: [
          `Use the resident’s full legal name, the way it appears on their mailbox or door, not a nickname.`,
          `Enter the community’s street address in the street line.`,
          `Put the building, wing and apartment number in the “Apt, suite” line, for example “Bldg C, Apt 214”.`,
          `Check whether the community uses a separate mailing address for packages; some campuses do, and the front desk can tell you.`,
          `Enter a phone number for delivery updates. The carrier asks for one, and yours may be more reliable than a resident’s landline.`,
        ],
      },
      { h: 'Ask the front desk how packages are handled' },
      {
        p: `Communities differ. Some deliver packages to apartment doors, some hold them at a front desk or a package room for residents to collect, and some send a note to the resident’s mailbox. A short call to the front desk answers the questions that matter:`,
      },
      {
        list: [
          `Where do carriers leave packages, and who signs or logs them in?`,
          `How are residents told a package has arrived?`,
          `Is the package room heated and cooled, or near an entrance?`,
          `Is there any community policy about over-the-counter products in apartments?`,
        ],
      },
      {
        p: `The package room question matters because of the label’s storage line: {storage}. A box left near a drafty entrance in January or in a hot vestibule in July shouldn’t sit there for days.`,
      },
      { h: 'Tracking: who watches the package' },
      {
        p: `The email you enter at checkout gets the confirmation and the shipping email with tracking. If you’re ordering for a parent, use your own email so you can watch the package and call them when it shows as delivered. No delivery date is promised, so don’t plan around a particular day. If tracking says delivered but your parent can’t find it, ask the front desk to check the package room before anything else. Our guide to [packages marked delivered but missing](/guides/tracking-says-delivered-but-no-parcel) covers the next steps.`,
      },
      { h: 'Talk with the resident first' },
      {
        p: `Before ordering, ask a few simple questions: Do their eyes feel dry? Do they already use drops, including any prescription drops? Do they wear contact lenses? Quell’s label doesn’t cover lenses or use with other drops, so those questions go to their eye doctor or pharmacist. The label also carries this caution: {warnings}. If small print is a problem, our [Drug Facts page](/drug-facts) can be read in larger type on a tablet, and our guide to [eye drops for older adults](/guides/eye-drops-for-older-adults) has tips for squeezing and aiming.`,
      },
      { h: 'Senior living air and dry eyes' },
      {
        p: `Apartments in large buildings often have their own heating and cooling units, and many residents keep the thermostat warm. Long afternoons of reading, puzzles or television add up too. A small humidifier, a reading lamp aimed at the page and a chair moved out of a vent’s path can help as much as anything you mail. Directions on Quell’s label read: {directions}.`,
      },
      { h: 'Cost, refunds and reordering' },
      {
        p: `Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back; since the order is in your name, you call {phone} ({hours}) with the order number. Damaged, incorrect or broken-seal orders are replaced within the same window. One reorder reminder goes to the email on the order later, which helps if you’re the one keeping track. Questions about the policy are answered in our [terms](/terms). If your parent later moves to a different apartment or building in the community, update the unit on the next order, since a browser that remembers checkout details may still offer the old one.`,
      },
    ],
    faq: [
      {
        q: 'How do I address a package to an independent living apartment?',
        a: `Use the resident’s full name, the community’s street address, and the building and apartment number in the second address line. Ask the front desk whether packages use a different address.`,
      },
      {
        q: 'Who gets the tracking email when I ship to my parent’s senior apartment?',
        a: `Whoever’s email is entered at checkout. Use your own if you want to watch the package and let your parent know when it’s delivered.`,
      },
      {
        q: 'Do senior living communities hold packages at the front desk?',
        a: `Many do, but practices differ by community. Call the front desk to ask where carriers leave packages and how residents are told one has arrived.`,
      },
      {
        q: 'Can I send eye drops to a parent in assisted living?',
        a: `Ask the staff first, because some care settings manage residents’ medicines and products. Then ask the resident’s eye doctor or pharmacist if they already use other drops.`,
      },
    ],
  },
  {
    slug: 'what-if-my-eye-drop-box-arrives-open',
    title: 'What if my eye drop box arrives open?',
    description:
      'An opened shipping box isn’t always a problem, but the bottle’s seal decides it. What to check, and how broken-seal orders are replaced within {returnDays} days.',
    category: 'returns',
    addedOn: '2026-11-24',
    body: [
      {
        p: `If your Quell shipping box arrives open, check what’s inside before deciding anything. If every bottle you ordered is there, whole and with its tamper seal intact, the opened outer box alone doesn’t affect the drops. If a bottle’s seal is broken, a bottle is damaged or something is missing, set it aside, don’t use it, and call {phone} within {returnDays} days for a replacement under our terms.`,
      },
      { h: 'Three layers: the shipping box, the carton, the seal' },
      {
        p: `A Quell order has more than one layer of packaging, and each one tells you something different:`,
      },
      {
        list: [
          `The outer shipping box protects the order in transit. Flaps that popped open or tape that came loose say nothing about the bottles on their own.`,
          `The product carton holds the bottle and carries the Drug Facts panel.`,
          `The tamper-evident seal is the one that matters for the drops themselves. It shows whether the bottle has been opened since it was packed.`,
        ],
      },
      {
        p: `An open shipping box is a reason to look carefully. A broken seal is a reason to stop.`,
      },
      { h: 'What to check, in order' },
      {
        list: [
          `Compare what’s in the box with your confirmation email: the number of bottles should match what you paid for.`,
          `Look at each bottle’s seal. If any seal is broken, torn or missing, put that bottle aside.`,
          `Check each bottle for cracks, leaks or a sticky residue, and each carton for wet stains.`,
          `Look at the solution through the bottle if you can. The label says: {doNotUse}. It also notes its usual look: {milky}.`,
          `If everything is intact, store the bottles as the label directs: {storage}.`,
        ],
      },
      { h: 'Why boxes sometimes arrive open' },
      {
        p: `Most of the time it’s ordinary handling: tape loosens in cold or wet weather, a box gets squeezed in a truck, or a flap catches on a sorting belt. Sometimes someone else opened it: a family member who thought it was theirs, a building’s mailroom checking a label, or a neighbor who received it by mistake and then brought it over. None of those is necessarily a problem if the bottles and seals are intact. If you think the package was tampered with or something was taken, see our guide on [what to do if a package is stolen](/guides/eye-drop-package-stolen), and still call us.`,
      },
      { h: 'When the seal is broken: replacement' },
      {
        p: `Our [terms](/terms) are direct about this case: if your order arrives damaged, incorrect or with a broken tamper seal, contact us within {returnDays} days and it will be replaced at no charge. Here’s how:`,
      },
      {
        list: [
          `Don’t use the bottle with the broken seal, even if the solution looks normal.`,
          `Keep it, along with the carton and the shipping box, until we’ve talked.`,
          `Take a photo or two if you can; it helps you describe what you saw.`,
          `Call {phone} ({hours}) with your order number from the confirmation email.`,
        ],
      },
      {
        p: `Our guide on [broken tamper seals](/guides/broken-tamper-seal) has more on why the seal matters, and [damaged orders](/guides/damaged-order) covers cracked or leaking bottles.`,
      },
      { h: 'When a bottle is missing' },
      {
        p: `If the box arrived open and holds fewer bottles than your confirmation lists, an incorrect order is replaced too, within the same {returnDays} days. Check the confirmation first, because the quantity you paid for is the one shown there. Then call with the order number and say how many bottles arrived.`,
      },
      { h: 'If everything inside is fine' },
      {
        p: `Bottles with intact seals in an opened box can be used as usual. If you’d rather not keep them, unopened bottles can be refunded within {returnDays} days of delivery under our policy, and you don’t mail them back. An opened bottle can’t be refunded, so decide before you break a seal. Make a note of the day the box arrived, because the refund window on unopened bottles counts from delivery, not from the day you got around to checking it.`,
      },
      { h: 'If you received it as a gift' },
      {
        p: `Gift recipients sometimes find a box already opened by the person who passed it along. The same checks apply: count the bottles and look at every seal. If something is wrong, the person who placed the order should call, since the order number and the confirmation email are theirs.`,
      },
      { h: 'Your eyes come first' },
      {
        p: `If you’ve already used a drop from a bottle you later find had a broken seal, and your eyes feel uncomfortable, don’t wait on a replacement call; the label’s own limit applies: {stopUse} Read the whole panel on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Is it okay to use eye drops if the shipping box was open?',
        a: `If every bottle’s tamper seal is intact and the bottle isn’t damaged, an opened outer box doesn’t change the drops. If a seal is broken, set the bottle aside and call for a replacement.`,
      },
      {
        q: 'What do I do if my eye drop package was opened before I got it?',
        a: `Count the bottles against your confirmation email and check every seal. Call {phone} within {returnDays} days with your order number if a seal is broken or a bottle is missing.`,
      },
      {
        q: 'Will Quell replace an order with a broken seal?',
        a: `Yes. Our terms say an order that arrives damaged, incorrect or with a broken tamper seal is replaced at no charge if you contact us within {returnDays} days.`,
      },
    ],
  },
  {
    slug: 'emu-oil-and-light-mineral-oil-in-quell',
    title: 'Emu oil and light mineral oil: why Quell has both',
    description:
      'Quell lists light mineral oil as an active ingredient and emu oil as an inactive one. What each one is on the label, and how they fit the oil-layer design.',
    category: 'formula',
    addedOn: '2026-11-24',
    body: [
      {
        p: `Quell contains two oils that play different roles on its label. Light mineral oil is one of three active ingredients, listed with a strength and the Purpose “Emollient.” Emu oil is one of the inactive ingredients, described on the carton’s own panel. Both fit the formula’s design: Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss.`,
      },
      { h: 'Where each oil appears on the label' },
      {
        p: `The Drug Facts panel splits ingredients into two lists. The active ingredients are {actives}. Light mineral oil is in that list, printed as {mineralOil}, with its Purpose beside it. The inactive ingredients are {inactives}. Emu oil is in that second list.`,
      },
      {
        p: `That split is the main difference between the two. An active ingredient is the one the label names as doing the product’s job, with its strength shown. Inactive ingredients make up the rest of the formula. Our guide to [active vs inactive ingredients](/guides/active-vs-inactive-ingredients-in-eye-drops) explains the two lists in general.`,
      },
      { h: 'Light mineral oil: the active one' },
      {
        p: `Mineral oil is a refined oil, and “light” describes the grade, a thinner version than heavy mineral oil. On Quell’s panel its Purpose is listed as Emollient, while the other two actives, glycerol and polysorbate 80, are listed as Lubricants. In plain terms, an emollient is an oily ingredient that softens and coats a surface. More on this ingredient is in our guide to [light mineral oil in eye drops](/guides/light-mineral-oil-in-eye-drops).`,
      },
      { h: 'Emu oil: the inactive one' },
      {
        p: `Emu oil comes from the emu, a large flightless bird. Quell’s carton carries a separate panel about it, which reads: {emuOil}`,
      },
      {
        p: `Because it comes from a bird, the label’s warnings line carries a caution about it: {warnings}. Anyone with an egg or bird allergy should ask a doctor or pharmacist before using Quell. Our guide to [emu oil in eye drops](/guides/emu-oil-in-eye-drops) goes further into the allergy caution and the bird on the box.`,
      },
      { h: 'Why two oils?' },
      {
        p: `The label doesn’t give a reason for the choice of ingredients, and we won’t invent one. What it does show is consistent: one oil sits among the actives with a stated strength, one sits among the inactives, and the carton’s before-and-after panel describes the goal as the oil layer. That panel reads, for the “after” side: {oilAfter}. The tear film has three layers, oil on the outside, water in the middle and mucus against the eye, and the thin oil layer slows evaporation of the water beneath it. A formula aimed at that layer naturally includes oils.`,
      },
      { h: 'What two oils mean for how it looks and feels' },
      {
        p: `Oils and water don’t stay mixed on their own, so oil-containing eye drops are usually made as emulsions, with the oil spread through the water in tiny droplets. That’s part of why Quell doesn’t look like plain water. The label says: {milky}. The site adds: {appearance} Some people notice a brief soft or slightly oily feel after a drop; our guide on [whether it’s normal for eye drops to feel oily](/guides/is-it-normal-for-eye-drops-to-feel-oily) covers that.`,
      },
      {
        p: `The label also tells you to check the color each time: {doNotUse}. Learn what normal looks like on a fresh bottle so a change is easy to spot.`,
      },
      { h: 'What the label doesn’t say about the oils' },
      {
        list: [
          `It doesn’t give a percentage for emu oil; inactive ingredients are listed by name only.`,
          `It doesn’t say whether Quell can be used with contact lenses; ask your eye doctor.`,
          `It doesn’t cover using Quell with other drops, including other oil-based ones; ask your eye doctor or pharmacist.`,
          `It doesn’t make any claim about the oils beyond what the panels print.`,
        ],
      },
      { h: 'Using it and buying it' },
      {
        p: `The directions read: {directions}. The label adds: {tip}. For storage: {storage}. Quell comes in a {size} bottle and ships from Brentwood, Tennessee, to any US address; you can [order it here](/#buy). The full panel is on our [Drug Facts page](/drug-facts). If your eyes hurt or your vision changes, stop and see an eye doctor; the label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Is mineral oil an active ingredient in Quell?',
        a: `Yes. Light mineral oil is one of Quell’s three active ingredients, listed with its strength and the Purpose “Emollient.” Glycerol and polysorbate 80 are the other two.`,
      },
      {
        q: 'Why is emu oil listed as an inactive ingredient?',
        a: `The label places emu oil among the inactive ingredients, and the carton describes it on a separate panel. Only the three listed actives carry a stated strength and Purpose.`,
      },
      {
        q: 'Does Quell have more than one oil in it?',
        a: `Yes. Light mineral oil is an active ingredient and emu oil is an inactive one. Both fit the formula’s design to reinforce the tear film’s oil layer.`,
      },
    ],
  },
  {
    slug: 'what-ask-a-doctor-means-on-an-eye-drop-label',
    title: 'What “ask a doctor” means on an eye drop label',
    description:
      'Quell’s label tells you when to stop and ask a doctor, but not which one. Who to call for eye pain, vision changes, lasting irritation or a swallowed drop.',
    category: 'label',
    addedOn: '2026-11-24',
    body: [
      {
        p: `“Ask a doctor” on an eye drop label means stop using the drop and get a medical professional’s opinion before you go on. Quell’s label doesn’t name which kind of doctor. For eye pain, vision changes or irritation that lasts, an eye doctor is usually the right first call; urgent care or an emergency room is for anything sudden or severe; and a swallowed drop calls for Poison Control.`,
      },
      { h: 'Where the phrase sits on Quell’s label' },
      {
        p: `The Drug Facts panel has a section headed “Stop use and ask a doctor if,” followed by the situations it covers. In our own words, as the site’s reviewed FAQ puts it: {stopUse} The wording is short on purpose. It tells you when to stop, and it leaves who to see up to you.`,
      },
      { h: '“Stop use” comes first' },
      {
        p: `The order of the phrase matters. “Stop use” means don’t use another drop while you sort it out, even if the next one might feel soothing. Then “ask a doctor” means get a professional to look at what’s happening. The label doesn’t say “keep using until you can get an appointment.” Our guide to [when to stop using eye drops](/guides/when-to-stop-using-eye-drops) covers the triggers in more detail; this page is about the second half, the asking.`,
      },
      { h: 'Which doctor? A practical guide' },
      {
        list: [
          `An eye doctor (an optometrist or an ophthalmologist) for dryness or irritation that lasts, discomfort that keeps returning, or vision that doesn’t feel right. Our guide to [optometrists and ophthalmologists](/guides/optometrist-or-ophthalmologist) explains the difference.`,
          `Your primary care doctor if you don’t have an eye doctor and need help deciding where to go, or if your eye symptoms come with other health changes.`,
          `Urgent care or an emergency room for sudden vision loss, severe pain, an injury, or a chemical or object in the eye, especially when your eye doctor’s office is closed.`,
          `Poison Control, if a drop is swallowed. The label says: {swallowed}`,
        ],
      },
      { h: 'What about a pharmacist?' },
      {
        p: `A pharmacist isn’t named in that section of the label, but pharmacists are a good source for questions the label leaves open: whether Quell can be used with other drops or medicines, what a word on the panel means, or whether a symptom sounds like something to see a doctor about. They can’t examine your eye, so if the label’s stop-use situations apply, a pharmacist will usually send you to a doctor anyway. Our list of [questions to ask a pharmacist](/guides/questions-to-ask-your-pharmacist) can help.`,
      },
      { h: 'Can the company answer instead?' },
      {
        p: `Not for medical questions. {company} can answer questions about orders, shipping and refunds at {phone} ({hours}), and can tell you what the label says. It can’t tell you whether your symptoms are serious or what to do about them; that’s what “ask a doctor” is for. Our guide on [order questions vs medical questions](/guides/order-questions-vs-medical-questions) draws the line.`,
      },
      { h: 'How to “ask” well' },
      {
        list: [
          `Bring the bottle or a photo of the Drug Facts panel, so the doctor sees exactly what you used.`,
          `Note when you started the drop, how often you used it and when the problem began.`,
          `Describe the feeling in plain words: stinging, gritty, aching, blurry, light-sensitive.`,
          `Mention any other drops, contact lenses or medicines.`,
          `Say whether one eye or both are affected.`,
        ],
      },
      {
        p: `Our [self-check](/self-check) can help you put symptoms into words beforehand. It’s not a diagnosis; it just helps you describe what you’re feeling.`,
      },
      { h: 'The other “ask” lines on the panel' },
      {
        p: `“Ask a doctor” isn’t the only time the label hands a decision to someone else. The warnings line says: {warnings}. The word “caution” there means anyone with those allergies should talk with a doctor or pharmacist before using Quell. And the label is silent on contact lenses, children and use with other drops, which are all questions for an eye doctor or pharmacist rather than for guesswork.`,
      },
      { h: 'Reading the rest of the label' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its directions read: {directions}. The complete panel, including the stop-use section, is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'What does ask a doctor mean on eye drops?',
        a: `It means stop using the drop and get a medical professional’s opinion before continuing. The label doesn’t say which doctor, so an eye doctor is usually the first call for eye symptoms.`,
      },
      {
        q: 'Should I see an optometrist or my regular doctor if eye drops aren’t working?',
        a: `For eye symptoms, an eye doctor (optometrist or ophthalmologist) can examine the eye directly. If you don’t have one, your primary care doctor can help you decide where to go.`,
      },
      {
        q: 'When should I go to urgent care instead of waiting for an eye doctor?',
        a: `For sudden vision loss, severe pain, an injury, or a chemical or object in the eye, go to urgent care or an emergency room rather than waiting for an appointment.`,
      },
      {
        q: 'Can a pharmacist answer questions about eye drop warnings?',
        a: `A pharmacist can explain label wording and answer questions about using a drop with other drops or medicines. They can’t examine your eye, so for stop-use symptoms they’ll usually send you to a doctor.`,
      },
    ],
  },
]
