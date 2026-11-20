import type { Guide } from '@/lib/guide-types'
export const DAILY_20261120_C: Guide[] = [
  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-bozeman-mt:
   * - NOAA RCC ACIS StnData (data.rcc-acis.org), 1991-2020 monthly normals,
   *   saved at .daily-job/acis1120/BZN.json and .daily-job/c/BZN-more.json
   *   (BOZEMAN GALLATIN FIELD AP, elev 4431 ft: Jan max 32.2 F, min 10.2 F;
   *   Dec max 31.7, min 9.7; Jul max 85.4, min 49.4; Aug max 84.1, min 47.4;
   *   precip Jan 0.44, Feb 0.42, Dec 0.44, May 2.12, Jun 2.54, Jul 1.08,
   *   Aug 0.94; twelve months sum to 13.43 in; snowfall M)
   * - relhum23.txt and wndspd23.txt have no Bozeman row, so no humidity or wind.
   * - https://www.montana.edu (Montana State University, Bozeman), checked 2026-11-20.
   */
  {
    slug: 'dry-eye-relief-bozeman-mt',
    title: 'Dry eye relief in Bozeman, Montana',
    description:
      'Bozeman’s airport station gets about 13.4 inches of precipitation a year and January nights near 10°F. What that does to your eyes, and what helps.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Bozeman’s air is thin and short on water. NOAA’s normals for the airport station put a year’s precipitation at about 13.4 inches and winter nights near 10°F, so furnaces run hard and indoor air turns parched. Keep vents and wind off your face, blink fully at screens, run a humidifier where you sleep, and use a lubricating drop as its label directs. An eye doctor should see dryness that keeps returning.`,
      },
      { h: 'The Gallatin Field numbers' },
      {
        p: `The weather station behind this page is the one ACIS lists as Bozeman Gallatin Field, at the airport outside town, about 4,430 feet above sea level. NOAA’s 1991 to 2020 climate normals for that station, as published through the National Weather Service’s NOWData, describe a valley that is cold in winter, mild in summer and dry in both:`,
      },
      {
        list: [
          `The twelve monthly precipitation normals add up to about 13.4 inches.`,
          `February is the driest month at 0.42 inches, with January and December each at 0.44.`,
          `June is the wettest at 2.54 inches, and May follows at 2.12.`,
          `January averages a high of 32.2°F and a low of 10.2°F; December is a touch colder at 31.7°F and 9.7°F.`,
          `July highs reach 85.4°F, but the normal July low is 49.4°F.`,
        ],
      },
      {
        p: `Snowfall normals came back missing for this station, so this page gives no snow total rather than guess at one.`,
      },
      { h: 'Why do my eyes feel so dry in Bozeman?' },
      {
        p: `Two things stack up. The first is the valley’s low precipitation, which means the air rarely carries much water. The second is temperature. Air that drops toward 10°F at night holds very little moisture, and when a furnace warms that same air to 68°F indoors, its relative humidity falls a long way. Your tear film sits on the surface of the eye between blinks, and drier air pulls its water layer away faster.`,
      },
      {
        p: `Newcomers often notice it in the first winter: eyes that feel scratchy by evening, a sense that the bedroom air is stale, waking with lids that feel stuck. None of that is a verdict on your eyes. It is a sign that the house air and the habits around it are worth adjusting, which the sections below walk through.`,
      },
      { h: 'Winter inside a Bozeman house' },
      {
        list: [
          `Put a humidifier in the bedroom, where you spend the most uninterrupted hours, and clean it on the schedule its manual gives.`,
          `Point floor registers and baseboard heat away from the bed and the couch, or move the furniture a few feet.`,
          `Lower the thermostat at night. Cooler air dries the eyes less than air heated hard from single digits.`,
          `If a wood stove or pellet stove heats the living room, sit to the side of it rather than facing it. Our page on [dry eyes from a wood stove](/guides/dry-eyes-from-a-wood-stove) goes further.`,
          `Keep ceiling fans off in winter rooms where you read or watch TV; moving air speeds evaporation.`,
        ],
      },
      { h: 'Summer: warm afternoons, cool mornings' },
      {
        p: `July’s normal range runs from 49.4°F at dawn to 85.4°F in the afternoon, a swing of about 36 degrees in one day. Mornings on the trail or the river are cool and comparatively gentle on the eyes. By mid-afternoon the sun is high, the air has warmed and dried, and any breeze carries dust off dry fields and gravel roads. July normally sees just over an inch of precipitation and August under one, so the dust has little to settle it.`,
      },
      {
        list: [
          `Schedule long hikes and bike rides early, when it is cooler.`,
          `Wear wraparound sunglasses on the water and on exposed ridges; they cut wind and glare together.`,
          `In the car, aim the air conditioning at your chest, not your face.`,
          `Keep a bottle of drops in a shaded pack pocket rather than on a dashboard or a sunny tailgate.`,
        ],
      },
      { h: 'Altitude, sun and the snow season' },
      {
        p: `At roughly 4,430 feet, the airport sits well above most of the country, and the surrounding mountains go far higher. Sun at elevation is strong, and fresh snow reflects much of it back toward your face, so squinting and watering on a bright January day are common. Goggles cover more of the eye than sunglasses on a chairlift, and our page on [ski trips and dry eyes](/guides/ski-trips-and-dry-eyes) covers the cold wind on the way up. For the general picture, see [dry air, wind and altitude](/guides/dry-air-wind-and-altitude).`,
      },
      { h: 'Campus, offices and screens' },
      {
        p: `Montana State University keeps a large share of Bozeman reading, writing and coding through the cold months, and plenty of the town’s other work happens at a desk too. Screens reduce how often you blink, and heated offices add dry air to that. Set a timer to look across the room every twenty minutes or so, finish each blink rather than half-closing your eyes, and keep the monitor slightly below eye level so your lids cover more of the eye. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why that helps.`,
      },
      { h: 'Where Quell fits' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses as: {uses}. Directions: {directions}. Keep the tip clean as the label says: {tip}. Its storage line reads: {storage}. A bottle left in a car at a trailhead in January can drop below that range, so keep it in an inside pocket and bring it indoors. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      {
        p: `We ship from Brentwood, Tennessee, to Bozeman, Belgrade, Four Corners and every other US address. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No arrival date is promised, so reorder before you run low. The [Bozeman page](/eye-drops/bozeman-mt) and the [Montana page](/eye-drops/state/montana) have local details.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A drop is for everyday dryness, and the label draws the line clearly: {stopUse} Pain, vision changes or one eye much worse than the other belongs with an eye doctor, who can find the cause and decide what to do. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you decide how soon to call.`,
      },
    ],
    faq: [
      {
        q: 'How much precipitation does Bozeman get in a year?',
        a: `NOAA’s 1991 to 2020 monthly normals for the Bozeman Gallatin Field station add up to about 13.4 inches a year. June is the wettest month at 2.54 inches and February the driest at 0.42.`,
      },
      {
        q: 'How cold does Bozeman get at night in winter?',
        a: `The normal low at the airport station is 10.2°F in January and 9.7°F in December. Heating air that cold to room temperature leaves it very dry, which is why eyes often feel worse indoors.`,
      },
      {
        q: 'Why do my eyes feel dry after moving to Bozeman?',
        a: `The valley gets little precipitation, winter nights fall near 10°F, and furnaces dry the indoor air for months. A bedroom humidifier, vents aimed away from you and fuller blinks at screens all help, and persistent dryness deserves an eye doctor’s look.`,
      },
      {
        q: 'Can I order Quell to Bozeman or Belgrade?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any US address, including Bozeman and Belgrade, with guest checkout and tracking by email. No delivery date is promised, so order before the bottle runs out.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-butte-mt:
   * - NOAA RCC ACIS StnData (data.rcc-acis.org), 1991-2020 monthly normals,
   *   saved at .daily-job/acis1120/BTM.json and .daily-job/c/BTM-more.json
   *   (BUTTE BERT MOONEY AP, elev 5505 ft: Jan max 32.1 F, min 7.9 F;
   *   Dec max 30.7, min 7.2; Feb min 9.8; Jul max 81.3, min 45.9; Aug min 43.9;
   *   normal monthly lows below 32 F in Jan-Apr and Oct-Dec (Apr 26.4, Oct 26.8);
   *   May min 34.3, Sep min 36.5; precip Jan 0.42, Feb 0.43, Dec 0.48, Jun 2.45,
   *   May 2.02; twelve months sum to 12.76 in; snowfall M)
   * - relhum23.txt and wndspd23.txt have no Butte row, so no humidity or wind.
   * - https://mtech.edu/about/ (Montana Technological University, Butte), checked 2026-11-20.
   */
  {
    slug: 'dry-eye-relief-butte-mt',
    title: 'Dry eye relief in Butte, Montana',
    description:
      'At about 5,500 feet, Butte’s airport sees normal lows under freezing in seven months and under 13 inches of precipitation. Eye comfort for a high, cold town.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Butte sits high and cold, and its air holds little water. NOAA’s normals for Bert Mooney Airport, at about 5,500 feet, show monthly lows below freezing from October through April and only about 12.8 inches of precipitation a year. That means a long heating season and dry indoor air. Humidify the bedroom, shield your eyes from vents and wind, blink fully, use a lubricating drop as labeled, and see an eye doctor for dryness that persists.`,
      },
      { h: 'Bert Mooney Airport by NOAA’s numbers' },
      {
        p: `The figures here are NOAA’s 1991 to 2020 climate normals for the station ACIS lists as Butte Bert Mooney Airport, about 5,505 feet above sea level. That is higher than many ski towns, and the numbers read like it:`,
      },
      {
        list: [
          `December is the coldest month, with a normal high of 30.7°F and a normal low of 7.2°F. January runs 32.1°F and 7.9°F.`,
          `Seven months (October through April) have a normal low below 32°F. April’s is 26.4°F and October’s 26.8°F.`,
          `Even July, the warmest month, cools to a normal low of 45.9°F after an afternoon high of 81.3°F.`,
          `The monthly precipitation normals add up to about 12.8 inches. January (0.42 inches) and February (0.43) are the driest months, and June (2.45) the wettest.`,
        ],
      },
      {
        p: `NOAA’s snowfall normals for this station came back missing, so no snow total appears here.`,
      },
      { h: 'A heating season that fills most of the year' },
      {
        p: `In a town where May and September lows still sit in the mid-30s, the furnace isn’t a winter-only appliance. Many Butte households run heat into late spring and turn it back on early in fall, and on the coldest nights the system works against air in the single digits. Cold air carries very little water, so warming it to room temperature leaves indoor relative humidity low for a large part of the year. The tear film loses water to that air between blinks, and eyes feel it as grit, stinging or heaviness by late evening.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom from the first cold nights of fall, not just in January, and keep it clean.`,
          `Older homes with radiators or floor grates put a column of warm, dry air in one spot. Move a reading chair out of it. [Dry eyes from radiator heat](/guides/dry-eyes-from-radiator-heat) has more on older heating systems.`,
          `Turn the heat down at bedtime and add a blanket instead.`,
          `Keep a glass-front fireplace or space heater out of your direct line of sight while you read.`,
        ],
      },
      { h: 'Cold mornings outdoors' },
      {
        p: `A December commute starts near 7°F. Air that cold, moving across your face as you scrape a windshield or walk to work, chills the eye surface and can make it water and sting at the same time. Watering in the cold is often the eye reacting to irritation, so it doesn’t mean your tear film is in good shape. A scarf pulled up to the cheekbones and glasses or sunglasses that wrap around help more than people expect. [How to protect your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) covers the gear.`,
      },
      {
        p: `Inside the car, the heater blasts the driest air in the house straight at the front seats. Angle the vents toward the floor and the windshield, and avoid pointing them at your face on the drive across town.`,
      },
      { h: 'Summer in the high valley' },
      {
        p: `July is pleasant here, with normal highs near 81°F, but the cool nights mean many windows stay closed and some homes keep a little heat on. Outdoors, a dry afternoon breeze lifts dust from unpaved roads and open ground. Wraparound sunglasses help on hikes and at outdoor events, and a hat brim cuts the glare that makes you squint.`,
      },
      { h: 'Study and shift work in Butte' },
      {
        p: `Montana Technological University brings engineering and science students who spend long evenings at laptops, often in dorms or labs with forced-air heat. Shift workers keep odd hours in buildings that never cool off. Screens reduce blinking, and tired eyes make it worse. Take a short look-away break every twenty minutes, blink fully, and keep a small humidifier at the desk if your building allows it. [Dry eyes during finals week](/guides/dry-eyes-during-finals-week) has a study-season routine.`,
      },
      { h: 'Quell’s label, in short' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The panel’s Uses line reads: {uses}. The directions read: {directions}. The label also says: {doNotUse}. For storage: {storage}. A bottle left in a parked truck on a Butte winter night will go well below that range, so carry it inside a coat pocket. Before you order, read this caution, because emu oil is an ingredient: {warnings}. The [Drug Facts page](/drug-facts) has the whole panel.`,
      },
      { h: 'Ordering to Butte' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Butte, Walkerville and anywhere else in the US, with guest checkout and tracking by email. Shipping is {shipping}, and {freeBottles} or more bottles ship free. No delivery date is promised, and winter roads can slow any package, so order before your last bottle runs low. See the [Butte page](/eye-drops/butte-mt) and the [Montana page](/eye-drops/state/montana) for more.`,
      },
      { h: 'When an eye doctor should take over' },
      {
        p: `The label’s limit is plain: {stopUse} Eye pain, blurred vision that doesn’t clear with a blink, or dryness that keeps coming back are reasons to book an appointment, where an eye doctor can find the cause and decide what to do. The [self-check](/self-check) can help you put symptoms into words beforehand, though it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How cold does it get in Butte, Montana?',
        a: `NOAA’s 1991 to 2020 normals for Bert Mooney Airport give December a normal low of 7.2°F and January 7.9°F. Seven months of the year, October through April, have normal lows below freezing.`,
      },
      {
        q: 'What is the elevation of Butte’s airport?',
        a: `ACIS lists the Butte Bert Mooney Airport station at about 5,505 feet. Air at that height in a cold climate holds little water, which adds to dry eyes once it is heated indoors.`,
      },
      {
        q: 'Why are my eyes dry in Butte even in summer?',
        a: `Summer nights at the airport still cool to the mid-40s, so heat and closed windows linger, and dry afternoon breezes carry dust. Sunglasses outdoors and a humidifier indoors help; dryness that persists should be checked by an eye doctor.`,
      },
      {
        q: 'Does Quell deliver to Butte, Montana?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Butte and every other US address. Tracking comes by email, and since no arrival date is promised, it helps to reorder early in winter.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-manhattan-ks:
   * - NOAA RCC ACIS StnData (data.rcc-acis.org), 1991-2020 monthly normals,
   *   saved at .daily-job/acis1120/MHK.json and .daily-job/c/MHK-more.json
   *   (MANHATTAN ASOS, elev 1048 ft: Jan max 41.0 F, min 17.8 F; Dec min 20.7;
   *   Feb min 21.8; Jul max 91.5, min 68.0; Aug max 89.6, min 65.3; Jun max 86.6;
   *   precip Jan 0.65, Feb 0.96, Dec 1.06, Apr 3.13, May 4.65, Jun 4.83,
   *   Jul 4.01, Aug 4.64; twelve months sum to 32.17 in; snowfall M)
   * - relhum23.txt and wndspd23.txt have no Manhattan row, so no humidity or wind.
   * - https://www.k-state.edu (Kansas State University, Manhattan), checked 2026-11-20.
   * - https://www.kdhe.ks.gov/DocumentCenter/View/2792/Flint-Hills-Smoke-Management-Plan-PDF
   *   and KDHE news releases (April air quality advisories for the Flint Hills
   *   region, including Manhattan in April 2023), checked 2026-11-20.
   */
  {
    slug: 'dry-eye-relief-manhattan-ks',
    title: 'Dry eye relief in Manhattan, Kansas',
    description:
      'Manhattan, Kansas, swings from 91°F July afternoons to a January that gets 0.65 inches of precipitation, with spring burn smoke between. What helps dry eyes.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Manhattan’s dry-eye seasons are winter and spring. NOAA’s normals for the Manhattan airport station give January just 0.65 inches of precipitation and lows near 18°F, so heated indoor air turns dry, and spring brings smoke from Flint Hills grassland burning. Summer is humid but long on air conditioning. Shield your eyes from vents and smoke, blink fully at screens, use a lubricating drop as labeled, and see an eye doctor for dryness that doesn’t settle.`,
      },
      { h: 'Manhattan’s climate, from the airport station' },
      {
        p: `ACIS lists the station as Manhattan ASOS, the automated weather station at the Manhattan airport, at about 1,050 feet. Its 1991 to 2020 normals from NOAA, the same data behind the National Weather Service’s NOWData pages, look like this:`,
      },
      {
        list: [
          `January is the driest month at 0.65 inches of precipitation, with February at 0.96 and December at 1.06.`,
          `June is the wettest at 4.83 inches, with May (4.65) and August (4.64) close behind.`,
          `The twelve monthly normals add up to about 32.2 inches a year, and most of it falls from April through September.`,
          `July is the hottest month, with a normal high of 91.5°F and a low of 68.0°F.`,
          `January’s normal high is 41.0°F and its normal low 17.8°F.`,
        ],
      },
      {
        p: `Snowfall normals were missing for this station, so none are given here.`,
      },
      { h: 'Winter: the dry quarter' },
      {
        p: `December through February together normally bring under three inches of precipitation, and nights fall into the high teens and low 20s. Furnaces in houses, apartments and residence halls warm that cold air without adding water, so indoor humidity drops for weeks at a time. You may notice scratchy eyes by mid-afternoon in an office or classroom, or a dry, heavy feeling after an evening of TV.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom, and empty and clean it as its manual says.`,
          `Turn desk fans and space heaters so they blow past you, not at your face.`,
          `In rental housing where you can’t change the vents, a plastic vent deflector redirects the airflow for a few dollars.`,
          `Read [dry eyes from forced-air heat](/guides/dry-eyes-from-forced-air-heat) for more on furnace air.`,
        ],
      },
      { h: 'Spring smoke from the Flint Hills' },
      {
        p: `Each spring, large areas of Flint Hills grassland are burned, and the smoke can drift across Manhattan. The Kansas Department of Health and Environment runs a Flint Hills smoke management plan for this burning season and has issued April air quality advisories covering the region, including Manhattan. Smoke irritates the eyes, and on a windy burn day it arrives with dust as well.`,
      },
      {
        list: [
          `Check the air quality forecast during the spring burning season before planning a long run or a day outdoors.`,
          `On smoky days, keep windows closed and set the car’s ventilation to recirculate.`,
          `Wear wraparound glasses outdoors to keep drifting ash and dust off the eye.`,
          `Wash your hands before touching your eyes or using drops after time outside.`,
        ],
      },
      {
        p: `If smoke leaves your eyes painful, or your vision changes, that is a reason to see an eye doctor rather than wait it out.`,
      },
      { h: 'Summer heat and air conditioning' },
      {
        p: `From June through August, normal highs sit between about 87°F and 92°F, and nights stay in the mid-60s. The outdoor air is not dry in the way a desert is, since that is also the wettest stretch of the year. The eye trouble in summer comes from the air conditioning that runs through it: cold, dry air blowing from dashboard vents, ceiling registers and window units. Aim vents away from your face, and take breaks from the coldest rooms.`,
      },
      { h: 'Game days, lectures and long screen hours' },
      {
        p: `Kansas State University puts thousands of people in Manhattan in front of screens for coursework, research and office jobs, and fills stadium seats on fall weekends. Long stretches at a laptop reduce blinking. A cold, breezy November game in the stands adds wind across the eye. For screens, use the 20-second look-away every twenty minutes and finish each blink. For the stands, wear sunglasses or clear glasses, and pull a scarf up when the wind picks up. [Dry eyes at an outdoor winter game](/guides/dry-eyes-at-an-outdoor-winter-game) has more for cold-weather fans.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses on the Drug Facts panel: {uses}. Its directions: {directions}. Its caution: {warnings}. The panel also states: {milky}. That color is expected, as the [Drug Facts page](/drug-facts) explains.`,
      },
      { h: 'Ordering to Manhattan and the Flint Hills' },
      {
        p: `We ship from Brentwood, Tennessee, to Manhattan, Wamego, Junction City and any other US address. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No arrival date is promised. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. Local details are on the [Manhattan page](/eye-drops/manhattan-ks) and the [Kansas page](/eye-drops/state/kansas).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Drops are for everyday dryness. The label says when to stop: {stopUse} An eye doctor can find the cause of dryness that keeps returning and decide what to do. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for the signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Manhattan, Kansas?',
        a: `January, with a normal of 0.65 inches of precipitation at the Manhattan airport station in NOAA’s 1991 to 2020 normals. February (0.96 inches) and December (1.06) are the next driest.`,
      },
      {
        q: 'Does Flint Hills burning smoke affect your eyes?',
        a: `Smoke irritates the eyes, and spring grassland burning in the Flint Hills can send it across Manhattan. Kansas health officials have issued April air quality advisories for the region; closing windows and wearing wraparound glasses outdoors help on smoky days.`,
      },
      {
        q: 'How hot does Manhattan, Kansas get in July?',
        a: `NOAA’s normal July high at the Manhattan airport station is 91.5°F, with a normal low of 68.0°F. August is close behind at 89.6°F.`,
      },
      {
        q: 'Can I get Quell shipped to Manhattan, KS?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Manhattan and anywhere else in the US. Checkout is as a guest, tracking arrives by email, and no delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-florence-sc:
   * - NOAA RCC ACIS StnData (data.rcc-acis.org), 1991-2020 monthly normals,
   *   saved at .daily-job/acis1120/FLO.json and .daily-job/c/FLO-more.json
   *   (FLORENCE REGIONAL AIRPORT, elev 141 ft: Jan max 57.1 F, min 36.0 F;
   *   Feb min 38.6; Dec min 38.3; Jun max 89.2; Jul max 92.0, min 72.4;
   *   Aug max 90.3, min 71.4; Sep max 85.4; precip Feb 3.00, Apr 3.00,
   *   Jul 5.80, Aug 4.86, Sep 4.53, Oct 3.42, Nov 2.63, Dec 3.47; twelve
   *   months sum to 45.30 in; snowfall M)
   * - relhum23.txt and wndspd23.txt have no Florence row, so no humidity or wind.
   */
  {
    slug: 'dry-eye-relief-florence-sc',
    title: 'Dry eye relief in Florence, South Carolina',
    description:
      'Florence gets about 45 inches of rain a year, yet eyes still dry out under months of air conditioning and in a drier late fall. What helps, by NOAA’s numbers.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `In Florence, dry eyes come from indoor air more than the weather. NOAA’s normals for Florence Regional Airport show about 45 inches of precipitation a year and July highs near 92°F, so air conditioning runs for months, and November is the driest month. Aim vents away from your face, take screen breaks, keep car air off your eyes, use a lubricating drop as its label directs, and see an eye doctor for dryness that persists.`,
      },
      { h: 'Florence Regional Airport, by the numbers' },
      {
        p: `This page uses NOAA’s 1991 to 2020 climate normals for the station ACIS lists as Florence Regional Airport, about 141 feet above sea level. The normals are the same set the National Weather Service publishes through NOWData:`,
      },
      {
        list: [
          `About 45.3 inches of precipitation in a normal year, summing the monthly normals.`,
          `July is both the hottest and the wettest month: a normal high of 92.0°F, a low of 72.4°F and 5.80 inches of rain.`,
          `June (89.2°F) and August (90.3°F) also average highs near 90°F.`,
          `November is the driest month at 2.63 inches, with October at 3.42.`,
          `January is the coldest month, averaging a high of 57.1°F and a low of 36.0°F.`,
        ],
      },
      { h: 'Why do my eyes feel dry when it’s this humid?' },
      {
        p: `Muggy outdoor air is not what dries the eyes in a Florence summer. The trouble is the time spent out of it. From late May into September, homes, offices, stores, clinics and cars keep their air conditioning running for most of the day. Cooling air wrings water out of it, and the vents push that air across your face. Add a screen or a long drive, both of which cut down on blinking, and the tear film evaporates between blinks faster than it would outdoors on the porch.`,
      },
      {
        list: [
          `Turn ceiling registers and dashboard vents so they don’t blow at your eyes.`,
          `Set the thermostat a few degrees warmer, which runs the system less and moves less air.`,
          `If a box fan or ceiling fan runs in the bedroom, angle it toward your feet. [Dry eyes when sleeping with a fan on](/guides/dry-eyes-when-sleeping-with-a-fan-on) explains why.`,
          `Step outside for a few minutes during long workdays; it gives your eyes a break from conditioned air.`,
        ],
      },
      { h: 'Late fall, the drier stretch' },
      {
        p: `October and November are the least rainy months in Florence’s normals, with highs falling from about 77°F to 67°F. That is pleasant weather for yard work and Friday night football, but drier days lift more dust and pollen off fields and roadsides. It is also when heat pumps switch over on cool mornings, and the season of raking and leaf blowers. Glasses or sunglasses help when you are working outside, and washing your hands before you touch your face keeps grit away from your eyes.`,
      },
      { h: 'Mild winters, still heated' },
      {
        p: `A Florence January sits well above freezing by day, with a normal high of 57.1°F, though nights dip to about 36°F. Heat pumps and gas furnaces still run through December, January and February, and an evening on the couch in front of a heater vent dries the eyes much as it would further north. Keep heat off your face, and a small bedroom humidifier can help on the coldest weeks. [Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has a room-by-room checklist.`,
      },
      { h: 'Long drives and long shifts' },
      {
        p: `A lot of work around Florence happens on the road or on shifts: driving, hospital work, warehouse and plant jobs. Hours behind the wheel with the air on and your eyes locked on the road reduce blinking. Point the vents low, wear sunglasses against glare, and blink deliberately at red lights and rest stops. [Dry eyes when driving at night](/guides/dry-eyes-when-driving-at-night) covers the return trip after dark.`,
      },
      { h: 'Using Quell in Florence' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses as: {uses}. The directions say: {directions}. It also says: {tip}. For storage: {storage}. On a 92°F July afternoon a closed car gets far hotter than that, so carry the bottle with you rather than leaving it in the glove box. The [Drug Facts page](/drug-facts) shows the full panel.`,
      },
      { h: 'Ordering Quell around Florence' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Florence, Darlington, Hartsville and every other US address. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking comes by email, though no delivery date is promised. For local details, visit the [Florence page](/eye-drops/florence-sc) or the [South Carolina page](/eye-drops/state/south-carolina).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes hurt, your vision changes, or dryness keeps coming back no matter how you adjust the air, it’s time for an eye doctor, who can find the cause and decide what to do. The label puts it this way: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Florence, SC get a year?',
        a: `NOAA’s 1991 to 2020 monthly normals for Florence Regional Airport add up to about 45.3 inches a year. July is the wettest month at 5.80 inches and November the driest at 2.63.`,
      },
      {
        q: 'Why do my eyes feel dry in Florence in the summer?',
        a: `Air conditioning, not the outdoor air, is usually the reason. Cooled air is dry, vents blow it across your face for months, and screens or driving reduce blinking on top of that.`,
      },
      {
        q: 'How cold does Florence, South Carolina get in winter?',
        a: `January is the coldest month at Florence Regional Airport, with a normal high of 57.1°F and a normal low of 36.0°F, according to NOAA’s 1991 to 2020 normals.`,
      },
      {
        q: 'Can I order Quell to Florence, SC?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Florence, Darlington and every other US address. Checkout is as a guest and no delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-naples-fl:
   * - NOAA RCC ACIS StnData (data.rcc-acis.org), 1991-2020 monthly normals,
   *   saved at .daily-job/acis1120/APF.json and .daily-job/c/APF-more.json
   *   (NAPLES MUNICIPAL AIRPORT, elev 7 ft: Jan max 74.8 F, min 55.9 F;
   *   Jul max 90.8, min 75.5; Aug max 90.9, min 75.8; precip Nov 1.39,
   *   Dec 1.32, Jan 1.68, Feb 1.40, Mar 1.88, Apr 2.52, Jun 7.41, Jul 7.77,
   *   Aug 8.89, Sep 8.60; Jun-Sep 32.67 of 49.55 in; Nov-Apr 10.19 in;
   *   snowfall normal 0.0 every month)
   * - relhum23.txt and wndspd23.txt have no Naples row, so no humidity or wind.
   */
  {
    slug: 'dry-eye-relief-naples-fl',
    title: 'Dry eye relief in Naples, Florida',
    description:
      'Naples gets about two-thirds of its rain from June to September, leaving a much drier winter. NOAA’s numbers and practical dry eye relief for both seasons.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `In Naples, eyes tend to feel driest from November through April. NOAA’s normals for Naples Municipal Airport show about 10 inches of rain in those six months against nearly 33 from June through September, so winter is the dry season and the time most people are outdoors, while summer brings round-the-clock air conditioning. Wear sunglasses on the water, aim vents away from your face, blink fully, use a lubricating drop as labeled, and see an eye doctor for lasting dryness.`,
      },
      { h: 'Naples Municipal Airport in NOAA’s normals' },
      {
        p: `The numbers on this page come from NOAA’s 1991 to 2020 climate normals for the station ACIS lists as Naples Municipal Airport, about 7 feet above sea level. They split the year into two very different halves:`,
      },
      {
        list: [
          `December is the driest month at 1.32 inches, with November at 1.39 and February at 1.40.`,
          `August is the wettest at 8.89 inches, and September follows at 8.60.`,
          `June through September brings about 32.7 inches, roughly two-thirds of the 49.6-inch year.`,
          `January averages a high of 74.8°F and a low of 55.9°F; August averages 90.9°F and 75.8°F.`,
          `Snowfall normals are zero in every month.`,
        ],
      },
      { h: 'Is Naples dry in the winter?' },
      {
        p: `Compared with its summers, yes. The six months from November through April normally bring about 10.2 inches of rain together, less than August alone. Those are also the months with the most people outdoors: on beaches, golf courses, boats and patios. Wind and sun both speed evaporation from the tear film, and bright light off sand and water makes people squint, which leaves the eyes tired by late afternoon.`,
      },
      {
        list: [
          `Polarized, wraparound sunglasses cut both glare and wind on a boat or a beach walk.`,
          `A brimmed hat shades the eyes during a long round of golf or a tennis match.`,
          `Sit with your back to the breeze at outdoor restaurants when you can.`,
          `Rinse sunscreen off your hands before touching your eyes or using drops.`,
        ],
      },
      {
        p: `Visitors arriving from the north in winter often notice the change in the other direction, coming from a heated house to long, bright afternoons outdoors. [Dry eyes on a winter trip somewhere warm](/guides/dry-eyes-on-a-winter-vacation-somewhere-warm) covers that switch.`,
      },
      { h: 'Summer: wet outside, chilled inside' },
      {
        p: `From June to September the outdoor air is warm and wet, with normal highs near 91°F, lows near 76°F, and the rain that makes up the bulk of the year’s total. Hardly anyone sits out in it for long. Condos, offices and cars run air conditioning almost constantly, and that cooled, drier air is what the eyes notice. Ceiling fans on lanais and in bedrooms add a constant draft.`,
      },
      {
        list: [
          `Turn ceiling fans to a lower speed or angle the bed out of their path.`,
          `Point car vents at your chest or the floor, not your face.`,
          `In a condo with a single thermostat, avoid sitting directly under the air handler’s supply vent.`,
        ],
      },
      { h: 'Boating and fishing days' },
      {
        p: `A day on the water combines nearly every eye stressor at once: wind from the boat’s speed, sun from above, glare from below and salt spray. Wraparound sunglasses with a retainer strap stay on through the bumps. Keep your drops in a shaded dry bag or cooler pocket rather than on the console, and take a few slow blinks when the boat stops. The guide to [dry eyes on a boat](/guides/dry-eyes-on-a-boat) has more for anglers.`,
      },
      { h: 'Quell’s label, plainly' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. Its directions: {directions}. The storage line says: {storage}. Naples cars and beach bags in the sun get much hotter than that range, so keep the bottle in a shaded bag. Emu oil is among the ingredients, which is why the panel adds: {warnings}. Read every line on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering for a Naples address' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Naples, Marco Island, Golden Gate and every other US address. Checkout is as a guest, and orders of {freeBottles} or more bottles ship free; otherwise shipping is {shipping}. If you split the year between homes, order to the address where you’ll be when it arrives, since no delivery date is promised. The [Naples page](/eye-drops/naples-fl) and the [Florida page](/eye-drops/state/florida) have local details.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Gritty, tired eyes after a long day outdoors usually ease with shade and rest. Pain, changes in vision, or dryness that returns week after week deserve an eye doctor’s exam, so the cause can be found and the next step decided. The label sets the same line: {stopUse} Our page on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Naples, Florida?',
        a: `December, at 1.32 inches of rain in NOAA’s 1991 to 2020 normals for Naples Municipal Airport. November (1.39 inches) and February (1.40) are close behind.`,
      },
      {
        q: 'When is the rainy season in Naples, FL?',
        a: `June through September. Those four months normally bring about 32.7 inches at Naples Municipal Airport, roughly two-thirds of the year’s total, with August the wettest at 8.89 inches.`,
      },
      {
        q: 'Why do my eyes feel dry in Naples in the winter?',
        a: `Winter is Naples’s dry season, and it is when most people spend long days outdoors. Wind, sun and glare off the water all speed tear evaporation, so wraparound sunglasses and a hat help.`,
      },
      {
        q: 'Can I have Quell shipped to my Naples condo?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any US address, including Naples condos. No delivery date is promised, so seasonal residents should order to the address where they will be.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-farmington-nm:
   * - NOAA RCC ACIS StnData (data.rcc-acis.org), 1991-2020 monthly normals,
   *   saved at .daily-job/acis1120/FMN.json and .daily-job/c/FMN-more.json
   *   (FARMINGTON FOUR CORNERS REGIONAL AP, elev 5499 ft: Jan max 43.0 F,
   *   min 19.2 F; Dec max 43.1, min 19.4; Jun max 89.3, min 52.5; Jul max 93.3,
   *   min 60.9; Aug max 89.7; precip Mar 0.60, Apr 0.56, May 0.53, Jun 0.20,
   *   Jul 0.63, Aug 0.79, Sep 1.06; twelve months sum to 7.76 in; snowfall M)
   * - relhum23.txt and wndspd23.txt have no Farmington row, so no humidity or wind.
   */
  {
    slug: 'dry-eye-relief-farmington-nm',
    title: 'Dry eye relief in Farmington, New Mexico',
    description:
      'Farmington’s airport gets under 8 inches of precipitation a year, and June averages just 0.20 inches. How high-desert air dries the eyes, and what helps.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Farmington is high desert, and the air shows it. NOAA’s normals for Four Corners Regional Airport, at about 5,500 feet, add up to only about 7.8 inches of precipitation a year, with June averaging 0.20 inches. Dry air pulls water from the tear film quickly, especially in late spring and when the heat runs in winter. Wear wraparound sunglasses outside, humidify indoors, blink fully, use a lubricating drop as labeled, and see an eye doctor if dryness lingers.`,
      },
      { h: 'Four Corners Regional Airport’s numbers' },
      {
        p: `ACIS lists the station as Farmington Four Corners Regional Airport, about 5,499 feet above sea level. NOAA’s 1991 to 2020 normals for it, the data the National Weather Service publishes through NOWData, read like a desert’s:`,
      },
      {
        list: [
          `The twelve monthly precipitation normals sum to about 7.8 inches.`,
          `No month averages more than 1.06 inches; September is the wettest.`,
          `June is the driest, with 0.20 inches, after March through May at 0.53 to 0.60 inches each.`,
          `July is the hottest month, with a normal high of 93.3°F and a low of 60.9°F.`,
          `January’s normal high is 43.0°F and its normal low 19.2°F, nearly the same as December’s.`,
        ],
      },
      {
        p: `Snowfall normals came back missing for this station, so this page doesn’t give a snow figure.`,
      },
      { h: 'Why do my eyes feel so dry in Farmington?' },
      {
        p: `Almost everything about the local air works against a moist eye. There is little rain to add water, the elevation means thinner air and stronger sun, and the daily temperature swing is wide. In June, normal highs of 89.3°F follow normal lows of 52.5°F, a gap of nearly 37 degrees. As the air warms through the day, its relative humidity drops, so a June afternoon is about as dry as air gets in a place people live. The tear film’s water layer evaporates faster in that air, and many people feel it as burning or grit by evening.`,
      },
      { h: 'Late spring: the driest stretch' },
      {
        p: `From March through June, precipitation normals fall from 0.60 inches to 0.20. Bare ground, unpaved roads and dry arroyos give any breeze something to pick up. If your eyes feel worst in May and June, that matches the record.`,
      },
      {
        list: [
          `Wear wraparound sunglasses or safety glasses outdoors, especially on a dusty job site or ranch road.`,
          `Keep car windows up on gravel roads and set the fan to recirculate.`,
          `Wash your hands and face after outdoor work before touching your eyes.`,
          `Schedule hikes and yard work for the morning, before the afternoon heat dries the air further.`,
        ],
      },
      { h: 'Summer heat and swamp coolers' },
      {
        p: `Many desert homes cool with evaporative (swamp) coolers rather than refrigerated air. A swamp cooler adds some moisture to the air it blows, while refrigerated air conditioning removes moisture. Both still move air across your face. Sit out of the main airflow, and turn ceiling fans down at night. July and August bring a little more rain than June, but August still averages only 0.79 inches here.`,
      },
      { h: 'Winter: cold nights, heated rooms' },
      {
        p: `December and January lows average near 19°F, and the heat runs for months. Warming dry, cold air to room temperature leaves indoor humidity very low, and a wood stove or space heater adds radiant heat aimed at whoever sits in front of it. A bedroom humidifier, a lower thermostat at night and vents turned away from your face all make a difference. The guide to [what humidity is good for dry eyes](/guides/what-humidity-is-good-for-dry-eyes) explains how to check your indoor air.`,
      },
      { h: 'Working and driving in the high desert' },
      {
        p: `Plenty of Farmington-area work happens outdoors or behind a windshield: field crews, ranch work, construction, and long drives between towns across the Four Corners. Wind and dust at work call for real eye protection, not just sunglasses, and long drives reduce blinking. [Dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers) covers habits for long days outside, and [dry air, wind and altitude](/guides/dry-air-wind-and-altitude) explains the science.`,
      },
      { h: 'What Quell’s Drug Facts panel says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses line on its Drug Facts panel: {uses}. Directions: {directions}. Keep the tip clean: {tip}. Storage: {storage}. A truck cab on a July afternoon gets much hotter than that, so carry the bottle in a lunch bag or bring it inside. See the [Drug Facts page](/drug-facts) for the rest.`,
      },
      { h: 'Shipping to Farmington' },
      {
        p: `We ship from Brentwood, Tennessee, to Farmington, Aztec, Bloomfield and every other US address. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking arrives by email, but no delivery date is promised. The [Farmington page](/eye-drops/farmington-nm) and the [New Mexico page](/eye-drops/state/new-mexico) have more local information.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dust in the eye that won’t rinse out, pain, or vision that stays blurry after blinking needs medical attention, not another drop. Dryness that keeps returning deserves an eye doctor’s look too, so the cause can be found. The label’s own line: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Farmington, New Mexico get?',
        a: `About 7.8 inches of precipitation a year, by summing NOAA’s 1991 to 2020 monthly normals for Four Corners Regional Airport. September is the wettest month at 1.06 inches and June the driest at 0.20.`,
      },
      {
        q: 'What is the elevation of Farmington, NM?',
        a: `ACIS lists the Four Corners Regional Airport station at about 5,499 feet above sea level. Thin, dry air at that height speeds evaporation from the eyes.`,
      },
      {
        q: 'Is a swamp cooler better than AC for dry eyes?',
        a: `An evaporative cooler adds some moisture to the air it blows, unlike refrigerated air conditioning, which removes it. It still moves air across your face, so sit out of its direct stream.`,
      },
      {
        q: 'Can I order Quell eye drops in Farmington?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Farmington, Aztec, Bloomfield and the rest of the US. Checkout is as a guest and tracking comes by email.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-york-pa:
   * - NOAA RCC ACIS StnData (data.rcc-acis.org), 1991-2020 monthly normals,
   *   saved at .daily-job/acis1120/THV.json and .daily-job/c/THV-more.json
   *   (YORK AIRPORT, elev 464 ft: Jan max 39.4 F, min 20.8 F; Feb max 42.3,
   *   min 21.8; Dec max 43.8, min 25.2; Mar min 29.3; Nov min 32.7; Jul max 85.2,
   *   min 63.1; Aug max 83.5; precip Feb 2.48, Jan 2.61, Sep 4.80, Jul 4.32,
   *   May 4.17; every month at or above 2.48 in; twelve months sum to 42.12 in;
   *   snowfall M)
   * - relhum23.txt and wndspd23.txt have no York row, so no humidity or wind.
   */
  {
    slug: 'dry-eye-relief-york-pa',
    title: 'Dry eye relief in York, Pennsylvania',
    description:
      'York gets steady rain all year, but January nights near 21°F mean months of dry, heated indoor air. NOAA’s numbers for York and how to ease dry eyes there.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `York’s dry-eye season is the heating season. NOAA’s normals for York Airport show rain spread through every month, about 42 inches a year, but January lows near 21°F mean furnaces and boilers run from late fall into spring, and heated indoor air turns dry. Humidify the bedroom, keep vents and heaters off your face, blink fully at screens, use a lubricating drop as its label directs, and see an eye doctor for dryness that persists.`,
      },
      { h: 'York Airport’s climate in brief' },
      {
        p: `The station on this page is the one ACIS lists as York Airport, about 464 feet above sea level, outside the city. Here is what NOAA’s 1991 to 2020 climate normals say about it:`,
      },
      {
        list: [
          `The monthly precipitation normals sum to about 42.1 inches.`,
          `Every month averages at least 2.48 inches; February is the driest and September the wettest at 4.80.`,
          `January is the coldest month, with a normal high of 39.4°F and low of 20.8°F. February’s low is 21.8°F.`,
          `Monthly normal lows stay below freezing from December through March.`,
          `July averages a high of 85.2°F and a low of 63.1°F.`,
        ],
      },
      {
        p: `Snowfall normals for this station came back missing, so this page leaves snow out.`,
      },
      { h: 'Why are my eyes dry in York when it rains so much?' },
      {
        p: `Rainfall describes the outdoor air on the days it rains. Your eyes spend winter in a different climate: the inside of a heated house, office or car. With January nights near 21°F, the outdoor air holds little water to begin with. Heating it to 68°F or 70°F drops its relative humidity steeply, and that is the air that sits against your eyes for hours. A wet York winter outdoors and parched air indoors happen together, which surprises a lot of people whose eyes feel worst on the coldest, grayest weeks.`,
      },
      { h: 'Inside a York rowhouse or ranch' },
      {
        list: [
          `Run a humidifier in the bedroom and the room where you spend evenings, and clean it on schedule.`,
          `If a forced-air register sits under the couch or desk, add a deflector so the stream goes up the wall instead of toward your face.`,
          `In older homes with hot-water baseboard or steam heat, don’t park a reading chair directly beside the unit.`,
          `Turn the thermostat down a few degrees at night.`,
          `Keep space heaters on the floor, angled at your legs rather than your face.`,
        ],
      },
      {
        p: `The guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more ideas for heated rooms.`,
      },
      { h: 'Commutes on cold mornings' },
      {
        p: `A January morning commute starts around 21°F, and the car’s heater runs on high until the windshield clears. That fast, warm, dry blast aimed at the front seats is one of the most drying parts of a York commuter’s day. Direct the air toward the windshield and floor, use the heated seat instead of the fan where you have one, and blink deliberately at lights. [Dry eyes when driving in winter](/guides/dry-eyes-when-driving-in-winter) walks through the settings.`,
      },
      { h: 'Warehouses, plants and offices' },
      {
        p: `If you work under a big heating system, whether in a distribution center, on a manufacturing floor or in an office park, the air is part of the job. High-bay heaters and loading-dock doors create drafts, and dust from cardboard and pallets drifts in the air. In offices, screens cut blink rates while the heat runs. Safety glasses where the job calls for them, short look-away breaks, and asking facilities to adjust a vent that blows on you all help. [Dry eyes for warehouse workers](/guides/dry-eyes-for-warehouse-workers) has more for shift work.`,
      },
      { h: 'Summer air conditioning' },
      {
        p: `York summers are warm and humid, with July highs near 85°F. Eyes usually feel better then, but long hours in a cold office or a car with the air on high can bring the dryness back. Keep cold vents pointed away from your face.`,
      },
      { h: 'The Quell label, briefly' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. According to its Drug Facts panel, its Uses are: {uses}. Directions are: {directions}. The panel also says: {doNotUse}. Before buying, note the caution: {warnings}. The [Drug Facts page](/drug-facts) has every line.`,
      },
      { h: 'Ordering to York' },
      {
        p: `We ship from Brentwood, Tennessee, to York, Red Lion, Dover, Hanover and every other US address. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. See the [York page](/eye-drops/york-pa) or the [Pennsylvania page](/eye-drops/state/pennsylvania).`,
      },
      { h: 'When to call an eye doctor' },
      {
        p: `If the eyes hurt, vision changes, or the dryness stays with you through spring and summer as well, see an eye doctor, who can find the cause and decide what to do. The label says the same: {stopUse} Our [self-check](/self-check) can help you organize what you’ve noticed; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How cold does York, PA get in winter?',
        a: `NOAA’s 1991 to 2020 normals for York Airport give January a normal high of 39.4°F and a normal low of 20.8°F. Normal lows stay below freezing from December through March.`,
      },
      {
        q: 'What is the rainiest month in York, Pennsylvania?',
        a: `September, with a normal of 4.80 inches at York Airport. February is the driest at 2.48 inches, and no month averages less than that.`,
      },
      {
        q: 'Why do my eyes feel drier in winter in York?',
        a: `Cold outdoor air carries little moisture, and heating it indoors drops the relative humidity sharply. Months of furnace and car-heater air, plus screen time, dry the tear film faster.`,
      },
      {
        q: 'Does Quell ship to York, PA?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to York and every other US address. Checkout is as a guest, tracking is emailed, and no delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-cedar-city-ut:
   * - NOAA RCC ACIS StnData (data.rcc-acis.org), 1991-2020 monthly normals,
   *   saved at .daily-job/acis1120/CDC.json and .daily-job/c/CDC-more.json
   *   (CEDAR CITY AP, elev 5590 ft: Jan max 42.8 F, min 18.0 F; Dec max 42.1,
   *   min 16.3; Apr min 31.9; Nov min 23.6; Jun max 84.7, min 48.5, precip 0.48;
   *   Jul max 91.0, min 57.1; precip Mar 1.23, Oct 1.23, Feb 0.98, Sep 0.75;
   *   twelve months sum to 11.04 in; snowfall M)
   * - relhum23.txt and wndspd23.txt have no Cedar City row, so no humidity or wind.
   * - https://www.suu.edu/general/history.html and suu.edu (Southern Utah
   *   University; Utah Shakespeare Festival produced as part of SUU), checked 2026-11-20.
   */
  {
    slug: 'dry-eye-relief-cedar-city-ut',
    title: 'Dry eye relief in Cedar City, Utah',
    description:
      'Cedar City’s airport sits near 5,600 feet with about 11 inches of precipitation a year and December lows near 16°F. Dry eye relief for high-desert seasons.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Cedar City pairs high elevation with desert dryness. NOAA’s normals for Cedar City Airport, at about 5,600 feet, add up to about 11 inches of precipitation a year, with June averaging under half an inch and December lows near 16°F. Summer sun and winter furnaces both dry the eyes. Wear sunglasses outdoors, humidify indoors, blink fully at screens, use a lubricating drop as labeled, and see an eye doctor if dryness persists.`,
      },
      { h: 'NOAA’s normals for Cedar City Airport' },
      {
        p: `ACIS lists the station as Cedar City Airport, at about 5,590 feet. Its 1991 to 2020 climate normals, as published through the National Weather Service’s NOWData, describe a cold, dry high-desert town:`,
      },
      {
        list: [
          `The monthly precipitation normals add up to about 11.0 inches.`,
          `June is the driest month at 0.48 inches; March and October tie as the wettest at 1.23 inches.`,
          `December is the coldest month, with a normal high of 42.1°F and a normal low of 16.3°F.`,
          `July is the hottest, averaging 91.0°F by day and 57.1°F at night.`,
          `Normal lows stay below freezing from November through April; even April averages 31.9°F.`,
        ],
      },
      {
        p: `Snowfall normals were missing for this station, so no snow figure appears here.`,
      },
      { h: 'Cold nights, long heating season' },
      {
        p: `Six months of sub-freezing normal lows add up to a long run of furnace weather. Heating air that started near 16°F leaves very little moisture in the room, and the eyes lose water to it between every blink. Many people notice the effect first thing in the morning, with eyes that feel dry and sticky on waking, or in the evening after hours under a ceiling vent.`,
      },
      {
        list: [
          `Run a cool-mist humidifier in the bedroom through the cold months, and clean it as directed.`,
          `Lower the thermostat at night and close the vent nearest the bed if the room stays comfortable.`,
          `Point a space heater at your legs, not your face.`,
          `See [waking up with dry eyes in winter](/guides/waking-up-with-dry-eyes-in-winter) for a bedtime routine.`,
        ],
      },
      { h: 'June: the driest month' },
      {
        p: `June’s normal precipitation of 0.48 inches comes with highs near 85°F and lows near 48°F, a daily swing of more than 36 degrees. Afternoons are warm, bright and very dry, and that is when eyes tend to burn. Morning runs, rides and hikes catch the cooler, gentler part of the day. Wraparound sunglasses help in the afternoon, and a hat brim cuts glare off pale rock and dirt.`,
      },
      { h: 'Summer evenings at the festival' },
      {
        p: `Southern Utah University puts on the Utah Shakespeare Festival, and its summer season keeps many people out in the evening. At any outdoor performance, as the sun goes down, the high-desert air cools quickly, and a breeze across an outdoor theater can leave the eyes dry and tired by intermission. Bring a light jacket with a hood, blink through the long speeches, and use drops before the show rather than mid-scene. [Dry eyes at a holiday concert or show](/guides/dry-eyes-at-a-holiday-concert-or-show) covers indoor performances.`,
      },
      { h: 'March and October, the “wet” months' },
      {
        p: `Cedar City’s wettest months, March and October, each average 1.23 inches. That is wet only by local standards, since neither month reaches even an inch and a quarter. These are also transition months, when heat still runs or starts up again at night (March lows average 26.8°F and October’s 33.9°F) while afternoons can feel mild. Expect eyes to feel the furnace in the morning and the dry afternoon air by evening, and adjust the humidifier and sunglasses habits together rather than switching one off for the season.`,
      },
      { h: 'Students and screens' },
      {
        p: `Campus life means reading, writing and lab work, much of it on laptops in heated buildings during the cold half of the year. Screen work reduces blinking. Every twenty minutes, look across the room for about 20 seconds and blink fully a few times. Keep the screen slightly below eye level, which exposes less of the eye’s surface. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why this works.`,
      },
      { h: 'How Quell fits in' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses section of its Drug Facts panel reads: {uses}. The directions: {directions}. Its storage line: {storage}. A car left at a trailhead in December can fall below that range, and one in a sunny lot in July can rise above it, so keep the bottle with you. The drops are milky brown by design. {appearance} The full text is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering to Cedar City' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Cedar City, Enoch, Parowan and every other US address. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No arrival date is promised, so order before you run low. Find local information on the [Cedar City page](/eye-drops/cedar-city-ut) and the [Utah page](/eye-drops/state/utah).`,
      },
      { h: 'When an eye doctor is the next step' },
      {
        p: `Eye pain, a change in vision, or dryness that keeps coming back are reasons to see an eye doctor, who can find the cause and decide what to do. The label puts its limit this way: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'How much precipitation does Cedar City, Utah get?',
        a: `About 11.0 inches a year, summing NOAA’s 1991 to 2020 monthly normals for Cedar City Airport. June is the driest month at 0.48 inches, and March and October are the wettest at 1.23.`,
      },
      {
        q: 'How cold does Cedar City get at night?',
        a: `December’s normal low at Cedar City Airport is 16.3°F, and normal lows stay below freezing from November through April, according to NOAA’s 1991 to 2020 normals.`,
      },
      {
        q: 'Why are my eyes dry at outdoor shows in Cedar City?',
        a: `Desert air cools and dries quickly after sunset, and a breeze across an outdoor seat speeds evaporation from the eyes. A hooded jacket, fuller blinks and drops before the show help.`,
      },
      {
        q: 'Can Quell be shipped to Cedar City, UT?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Cedar City and anywhere else in the US. Checkout is as a guest and tracking arrives by email; no delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-20 for dry-eye-relief-pullman-wa:
   * - NOAA RCC ACIS StnData (data.rcc-acis.org), 1991-2020 monthly normals,
   *   saved at .daily-job/acis1120/PUW.json and .daily-job/c/PUW-more.json
   *   (PULLMAN MOSCOW REGIONAL AP, elev 2545 ft: Jan max 37.6 F, min 27.8 F;
   *   Dec max 36.6, min 26.9; Jul max 83.1, min 50.9; Aug max 83.4, min 50.4;
   *   precip Jul 0.39, Aug 0.49, Sep 0.65, Nov 2.14, Dec 2.21, Jan 2.15;
   *   Jul-Sep 1.53 in; Nov-Jan 6.50 in; twelve months sum to 17.53 in; snowfall M)
   * - relhum23.txt and wndspd23.txt have no Pullman row, so no humidity or wind.
   * - https://pullman.wsu.edu/about (Washington State University Pullman, in the
   *   Palouse region), checked 2026-11-20.
   */
  {
    slug: 'dry-eye-relief-pullman-wa',
    title: 'Dry eye relief in Pullman, Washington',
    description:
      'Pullman’s July and August bring under an inch of rain combined, and winters run gray and wet outside but dry indoors. NOAA’s numbers and dry eye tips.',
    category: 'local',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Pullman has two dry-eye seasons. NOAA’s normals for Pullman/Moscow Regional Airport show July and August together averaging under an inch of rain, with highs near 83°F, so late summer is dry and dusty. Winter is wet outside, but furnaces dry the air indoors from November to March. Wear sunglasses in the fields, humidify rooms in winter, blink fully at screens, use a lubricating drop as labeled, and see an eye doctor for dryness that lasts.`,
      },
      { h: 'The Pullman/Moscow airport station' },
      {
        p: `The numbers here come from NOAA’s 1991 to 2020 climate normals for the station ACIS lists as Pullman Moscow Regional Airport, which sits between Pullman and Moscow, Idaho, at about 2,545 feet:`,
      },
      {
        list: [
          `The twelve monthly precipitation normals add up to about 17.5 inches.`,
          `July is the driest month at 0.39 inches, and August follows at 0.49.`,
          `December is the wettest at 2.21 inches, with January (2.15) and November (2.14) close behind.`,
          `August has the highest normal high, 83.4°F; July is 83.1°F, with lows near 51°F.`,
          `December averages 36.6°F by day and 26.9°F at night.`,
        ],
      },
      {
        p: `NOAA’s snowfall normals for this station were missing, so no snowfall number appears on this page.`,
      },
      { h: 'Late summer on the Palouse' },
      {
        p: `July, August and September together normally bring about 1.5 inches of rain, roughly a quarter of what November through January brings. The rolling farmland around Pullman dries out, and late-summer field work, gravel roads and wind put fine dust into the air. Warm afternoons near 83°F lower the humidity further. Eyes that feel gritty or burn after a drive through the fields or a day outside are reacting to that combination.`,
      },
      {
        list: [
          `Wear wraparound sunglasses or safety glasses during outdoor work and on dusty rides.`,
          `Keep car windows closed on gravel roads and use recirculate.`,
          `Rinse your face and wash your hands before touching your eyes after field work.`,
          `Plan long runs or bike rides for the cooler morning hours.`,
        ],
      },
      {
        p: `[Dry eyes for farmers](/guides/dry-eyes-for-farmers) has more on harvest-season habits.`,
      },
      { h: 'Gray winters, dry rooms' },
      {
        p: `November through January are Pullman’s wettest months, with nights in the upper 20s and days in the upper 30s. The outdoor air is cold and damp. Indoors is another story. Heating that cold air to room temperature leaves it dry, and residence halls, apartments and campus buildings run heat for months. Eyes may feel fine on a drizzly walk to class and then scratchy two hours into a heated lecture hall or library.`,
      },
      {
        list: [
          `Run a small humidifier in a dorm room or bedroom where the rules allow it.`,
          `Sit away from heating vents and radiators in classrooms and libraries.`,
          `Keep the thermostat moderate at night.`,
          `[Dry eyes in a dorm room in winter](/guides/dry-eyes-in-a-dorm-room-in-winter) has tips for shared housing.`,
        ],
      },
      { h: 'Spring and fall: the shoulder months' },
      {
        p: `The heating season in Pullman doesn’t end neatly. March still averages a normal low of 32.9°F and April 37.2°F, so furnaces cycle on through cool spring nights while afternoons warm into the 50s and 60s. In fall the pattern runs in reverse: October lows near 38°F bring the heat back on just as the fields finish drying out. During these weeks your eyes can get both kinds of dry in a single day, dusty or breezy outdoors and heated indoors. Keep the bedroom humidifier out until May, and keep sunglasses in the car year-round.`,
      },
      { h: 'Exam weeks and long lab hours' },
      {
        p: `Washington State University’s Pullman campus means a lot of the town is studying, researching or working at a screen, especially during fall finals in December when the heat is running hard. Screens cut the blink rate. Every 20 minutes, look away for 20 seconds and blink fully. Keep your laptop slightly below eye level instead of propped high. Microscope and lab work concentrate the eyes even harder, so build breaks into long sessions.`,
      },
      { h: 'Quell and its label' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel gives its Uses as: {uses}. The directions are: {directions}. The panel cautions: {warnings}. It also reads: {tip}. Read the complete label on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering to Pullman' },
      {
        p: `We ship from Brentwood, Tennessee, to Pullman, Colfax, Moscow and every other US address. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Students can order to an off-campus address or a campus mailing address they can collect from. No delivery date is promised. More local detail is on the [Pullman page](/eye-drops/pullman-wa) and the [Washington page](/eye-drops/state/washington).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dryness that doesn’t settle with a change of habits, pain, a change in vision, or grit that won’t rinse out after field work should be seen by an eye doctor, who can find the cause and decide what to do. The label’s limit: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Pullman, Washington?',
        a: `July, at 0.39 inches of precipitation in NOAA’s 1991 to 2020 normals for Pullman/Moscow Regional Airport. August is next at 0.49 inches.`,
      },
      {
        q: 'Is Pullman wet in the winter?',
        a: `Yes. December is the wettest month at 2.21 inches, with January and November close behind. Indoor air still turns dry once the heat runs, which is when many students notice dry eyes.`,
      },
      {
        q: 'Why do my eyes feel dry during harvest on the Palouse?',
        a: `Late summer is the driest time of year around Pullman, and field work, gravel roads and wind put fine dust in the air. Wraparound eyewear and washing up before touching your eyes help.`,
      },
      {
        q: 'Can WSU students order Quell to Pullman?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Pullman and every other US address. Use an address where you can receive packages; no delivery date is promised.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-when-cross-country-skiing',
    title: 'Dry eyes when cross-country skiing',
    description:
      'Cold air, your own speed and snow glare all pull moisture from your eyes on a cross-country ski. Eyewear that won’t fog, trail habits, and where drops fit.',
    category: 'seasonal',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Cross-country skiing dries the eyes because you make your own wind for hours in cold, dry air, while sun bounces off the snow and hard breathing fogs your eyewear. Wear vented wraparound glasses with a lens suited to the light, keep a scarf or buff below the eyes, blink fully on the flats, and carry lubricating drops inside your layers. Eye pain or vision changes after a ski call for an eye doctor.`,
      },
      { h: 'Why a cross-country ski is hard on the eyes' },
      {
        p: `Downhill skiers get a rest on every lift ride. Nordic skiers keep moving, so the air rushing past the face never really stops. Skate skiing on groomed trails is fast enough to feel like a steady headwind, and even a classic tour adds a few miles an hour of breeze on top of whatever the weather brings. Cold winter air holds little water, and moving air speeds evaporation from the tear film. Many skiers notice the result as eyes that water heavily on the descents and then feel dry, gritty and heavy once they warm up indoors.`,
      },
      {
        list: [
          `Moving air from your own speed, all the time you are on the trail.`,
          `Cold, dry air that takes water from the eye surface quickly.`,
          `Sunlight reflected off snow, which makes people squint and narrow their blink.`,
          `Hard breathing that sends warm, moist air up into glasses or goggles.`,
          `A heated car or lodge afterward, which dries the eyes again from the other direction.`,
        ],
      },
      { h: 'Cross-country skiing glasses or goggles?' },
      {
        p: `Most Nordic skiers choose glasses over goggles, and the reason is heat. At a hard pace your face puts out a lot of warmth and moisture, and a sealed goggle traps it until the lens fogs. Wraparound glasses with some venting let that air escape while still blocking most of the wind that would hit your eyes from the front and sides. Goggles make more sense on a slow, windy tour or a stormy day when snow is blowing sideways.`,
      },
      {
        list: [
          `Look for a frame that wraps around toward your temples, so side wind doesn’t sneak in.`,
          `Choose vents along the top or sides of the lens to move warm air out.`,
          `Pick a frame that sits a little away from your face, without pressing on the brow.`,
          `If you wear prescription glasses, ask your eye doctor or optician about prescription sport lenses or fit-over frames.`,
        ],
      },
      { h: 'Lens tints for bright snow and flat light' },
      {
        p: `A sunny day on open meadows calls for a darker lens, since snow reflects a lot of light back toward your face and squinting all afternoon tires the eyes. Gray, overcast days with flat light are a different problem: a dark lens makes it hard to read the terrain, so skiers often take their glasses off, and their eyes take the full wind. A lighter or clear lens for those days keeps a barrier in place. Some frames come with swappable lenses, which saves carrying two pairs.`,
      },
      { h: 'Keeping fog off without losing protection' },
      {
        list: [
          `Pull your neck gaiter or buff down below your nose while you climb, and back up on the descents.`,
          `Tuck a soft cloth in a chest pocket to clear the lens rather than wiping it with a glove.`,
          `When you stop, lift the glasses for a few seconds instead of pushing them up on a sweaty hat.`,
          `On a cold start, put the glasses on outdoors rather than in the warm car, so the lens doesn’t carry condensation onto the trail.`,
        ],
      },
      {
        p: `Snowshoers deal with a slower version of the same fogging, and [dry eyes when snowshoeing](/guides/dry-eyes-when-snowshoeing) has a few more tricks.`,
      },
      { h: 'Using eye drops on a ski day' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists the Uses as: {uses}. Directions: {directions}. That leaves room for one dose before you head out, one after, and one in the evening, rather than dosing over and over on the trail. Keep the bottle clean as the label says: {tip}.`,
      },
      {
        p: `The storage line on the label reads: {storage}. Trail temperatures are far below that, so carry the bottle in an inside pocket against your base layer, not in a hip pack or a ski bag in the trunk. If you’re wondering what a cold night does to a bottle left in the car, [can eye drops freeze in a cold car?](/guides/can-eye-drops-freeze-in-a-cold-car) covers it. The full label is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'After the ski: car heater and lodge air' },
      {
        p: `The most drying moment of the day often comes after you finish. You climb into a car and turn the heater to full, aimed at your face, or settle in front of a lodge fireplace. Point the vents at your feet and the windshield, give the heater a minute before turning up the fan, and sit to one side of the fire. For more on wind protection in general, see [how to protect your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind).`,
      },
      { h: 'Night skiing and long tours' },
      {
        p: `Lit loops after work stretch the season, but darkness changes how the eyes work: you focus harder on the trail edge and blink less. Wear clear lenses so you keep the wind off without dimming the lights. On a long backcountry tour, pack the drops, a lens cloth, and a spare pair of clear glasses in case the tinted pair fogs or breaks.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Eyes that sting after a long day in the wind usually settle with warmth and rest. Eye pain that doesn’t ease, vision that stays blurry, or strong sensitivity to light after a bright day on snow should be seen by an eye doctor. The label is clear about its own limit: {stopUse} You can check the warning signs on [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Should I wear sunglasses or goggles for cross-country skiing?',
        a: `Most Nordic skiers wear vented wraparound glasses because goggles trap heat and fog during hard effort. Goggles still make sense on slow, very windy or snowy days.`,
      },
      {
        q: 'Why do my eyes water when cross-country skiing?',
        a: `Cold air and the wind from your own speed irritate the eye surface, and the eyes respond by watering. Wraparound glasses that block wind from the front and sides usually cut it down.`,
      },
      {
        q: 'What lens color is good for cross-country skiing on cloudy days?',
        a: `A light or clear lens works on overcast, flat-light days, so you can see the terrain and still keep wind off your eyes. Save darker tints for bright sun on open snow.`,
      },
      {
        q: 'Can I carry eye drops while cross-country skiing?',
        a: `Yes, but keep them in an inside pocket close to your body. Quell’s storage line reads: {storage}. Trail temperatures fall far below that.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-while-curling',
    title: 'Dry eyes while curling',
    description:
      'Curling puts you over cold, dry ice for hours, sweeping hard and staring down the sheet. Why eyes dry out at the club, and how curlers keep them comfortable.',
    category: 'seasonal',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Curling dries the eyes because you spend a whole game over chilled ice in dry arena air, often bent over a moving stone and staring hard enough to forget to blink. Then you move to a warm clubroom and back again. Dress for the ice, keep clear glasses on if they help, blink fully between shots, use a lubricating drop before the game as its label directs, and see an eye doctor for dryness that doesn’t settle.`,
      },
      { h: 'The air over a curling sheet' },
      {
        p: `A curling sheet is kept cold, and the air above it is usually dry, because keeping ice in good shape means controlling moisture in the room. Dry, cold air pulls water from the tear film between blinks. Sweeping stirs the air further, and every time a stone travels the length of the sheet, the players chasing it walk or slide quickly through that cold air. Our page on [dry eyes at an indoor ice rink](/guides/dry-eyes-at-an-indoor-ice-rink) explains rink air in more detail; a curling club has the same basic problem with a slower, more focused game on top.`,
      },
      { h: 'Why sweeping and skipping dry the eyes' },
      {
        p: `Each position asks something different of your eyes, and none of them encourages blinking.`,
      },
      {
        list: [
          `Sweepers lean low over the stone, work hard and watch it closely, often with the face only a couple of feet above the ice.`,
          `The skip stares down the sheet at the house, reading the line of every stone and calling the sweep, sometimes for a full end without looking away.`,
          `The thrower focuses on the broom target during the delivery and keeps watching as the stone slides away.`,
          `Between shots, everyone is still standing over the ice, so the eyes rarely get a real break from the cold air.`,
        ],
      },
      {
        p: `Concentration is the hidden factor. People blink less when they focus on something, which is the same reason [eyes get dry when you focus](/guides/why-do-my-eyes-get-dry-when-i-focus) on a screen or a page. A tight end with a stone curling toward the button is the curling version of a long spreadsheet.`,
      },
      { h: 'Simple habits on the ice' },
      {
        list: [
          `Make a habit of a few slow, full blinks after each of your shots, while you walk back down the sheet.`,
          `As skip, look away from the house for a moment between calls and blink before the next stone is thrown.`,
          `Wear a light hat with a brim to keep the overhead air movement off your face.`,
          `Clear glasses or your regular prescription glasses block some of the moving air while you sweep.`,
          `Keep your hands clean and dry before you touch your eyes; gloves that have been on the ice carry grit.`,
        ],
      },
      { h: 'Glasses that fog between the club and the ice' },
      {
        p: `Going from a warm lounge to a cold sheet makes glasses fog for a minute, and coming back in can do the same. Let them adjust on the ice before your first delivery, and clean them with a soft cloth rather than a damp glove. If fog is a constant problem, a frame that sits a little farther from your face lets air move behind the lens.`,
      },
      { h: 'League nights and bonspiel weekends' },
      {
        p: `An evening league game is one stretch on the ice. A bonspiel weekend can stack several games a day, with time in a heated clubroom, a hotel room and a car in between. That is a lot of dry air of different kinds.`,
      },
      {
        list: [
          `Use your drops on a schedule that fits the label, for example before the first game, midday and in the evening, rather than chasing every gritty moment.`,
          `Keep the bottle in a pocket or bag that stays at room temperature, not in the car between draws.`,
          `In the hotel, turn the fan setting down and keep the vent off the bed. [Dry eyes in a hotel room](/guides/dry-eyes-in-a-hotel-room) has more on that.`,
          `Take a real break from screens between games instead of scrolling the draw on your phone.`,
        ],
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists the Uses as: {uses}. The directions say: {directions}. The panel also reads: {storage}. Arena air may sit near the bottom of that range, so a bottle in a jacket pocket on your body is a better bet than one in a bag left by the boards. Quell contains emu oil, which is why the panel says: {warnings}. The full text is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering for your club season' },
      {
        p: `If a season of league nights is ahead, it may help to have a bottle at home and one in your curling bag. Quell ships from Brentwood, Tennessee, to any US address with guest checkout; shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No delivery date is promised, so order before a bonspiel rather than the day before. You can [buy from the home page](/#buy).`,
      },
      { h: 'When to talk to an eye doctor' },
      {
        p: `Gritty eyes after an evening on the ice usually ease once you’re home. Pain, vision changes, or dryness that hangs on between games should be seen by an eye doctor, who can find the cause and decide what to do. The label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel dry after curling?',
        a: `The air over a curling sheet is cold and usually dry, and the game keeps you focused on the stone or the house, so you blink less. Several hours of that often leave the eyes gritty by the end of the night.`,
      },
      {
        q: 'Can you wear glasses while curling?',
        a: `Yes. Many curlers play in their regular glasses, and clear glasses can also block some moving air while you sweep. Let them adjust to the cold before your first shot to cut down on fogging.`,
      },
      {
        q: 'How do curlers keep their glasses from fogging?',
        a: `Let the glasses adjust to the cold air on the ice before you throw, wipe them with a soft cloth instead of a glove, and choose a frame that sits a little away from your face so air can move behind the lens.`,
      },
      {
        q: 'Where should I keep eye drops at the curling club?',
        a: `Keep the bottle in a pocket on your body or a bag that stays at room temperature. Quell’s label says: {storage}. A cold arena or a parked car can fall below that range.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-when-holiday-baking',
    title: 'Dry eyes when holiday baking',
    description:
      'Oven blasts, flour and sugar dust, and hours piping tiny cookie details can leave eyes dry during holiday baking. A kitchen routine that keeps them comfortable.',
    category: 'seasonal',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Holiday baking dries the eyes in three ways: hot, dry air from the oven door hits your face, flour and powdered sugar float in the air, and fine decorating work keeps you staring without blinking. Step back when you open the oven, sift low, take blink breaks between trays, wash your hands before touching your eyes, and use a lubricating drop as labeled. Pain or vision changes call for an eye doctor.`,
      },
      { h: 'Why do my eyes feel dry after a day of baking?' },
      {
        p: `A December baking marathon puts you in a kitchen that is already heated for winter, then runs an oven at a high temperature for hours on top of that. Each time the door opens, a wave of hot, dry air rises straight toward the face of whoever is bending over to check the trays. Add a stand mixer kicking up flour, powdered sugar shaken over a work surface, and long minutes spent piping icing onto dozens of cookies, and the tear film is under pressure from every side.`,
      },
      { h: 'The oven door blast' },
      {
        list: [
          `Open the door, then step back for a second or two before leaning in.`,
          `Turn your face to the side while the first rush of heat escapes.`,
          `Use the oven light and window to check doneness instead of opening the door.`,
          `With a convection oven, the fan pushes hot air out faster when the door opens, so keep your face clear even longer.`,
          `If a wall oven sits at eye height, stand to one side of it rather than directly in front.`,
        ],
      },
      { h: 'Flour, powdered sugar and sprinkles' },
      {
        p: `Fine dry ingredients hang in the air longer than you would think. A bag of flour dropped on the counter, a sifter held high, or a mixer started on full speed sends a small cloud up toward eye level. The particles that land on the eye make it feel gritty, and rubbing with a floury finger adds more.`,
      },
      {
        list: [
          `Sift and measure close to the bowl, not at arm’s height.`,
          `Start the mixer on its lowest setting and wait until the dry ingredients are mixed in before turning it up.`,
          `Dust a work surface lightly instead of shaking flour from high above it.`,
          `Rinse and dry your hands before touching your face, glasses or eyes.`,
        ],
      },
      {
        p: `Professional bakers deal with this every shift; our page on [dry eyes for bakers](/guides/dry-eyes-for-bakers) covers bakery work at full scale.`,
      },
      { h: 'Decorating cookies and gingerbread' },
      {
        p: `Piping a snowflake, painting royal icing or placing tiny candy eyes on gingerbread people is close-up, careful work, and close focus slows blinking. An hour hunched over a tray can leave your eyes dry and tired even if the oven is off. Set a timer for every 20 minutes or so, look across the room, blink fully a few times, and roll your shoulders. Good, even light over the work area cuts down on squinting too.`,
      },
      { h: 'Recipes on screens and the kitchen table' },
      {
        p: `Many holiday bakers follow recipes on a phone or tablet propped against the backsplash, scrolling with a knuckle. Screens reduce blinking just as they do at a desk, and the small text in a hot kitchen means leaning close. A printed recipe card or a larger screen at a comfortable distance helps, and so does reading ahead before your hands get sticky.`,
      },
      { h: 'Citrus, extracts and hands near your eyes' },
      {
        p: `Zesting oranges or lemons releases fine droplets of oil, and handling peppermint or almond extract leaves strong-smelling residue on the fingers. Neither belongs near the eyes. Wash with soap and water after zesting, and do it again before you touch your eyes or use drops. If something splashes into an eye and stings, rinse it with clean water, and call a doctor if the pain doesn’t ease.`,
      },
      { h: 'Using a lubricating drop in a busy kitchen' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. According to its label, its Uses are: {uses}. The directions read: {directions}. Clean hands matter even more with flour and sugar around, and the label adds its own reminder: {tip}.`,
      },
      {
        p: `The label’s storage range is: {storage}. The counter right next to a working oven or the shelf above the stove can run warmer than that, so keep the bottle in another room or a drawer away from the heat. The whole panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'A baking-day routine' },
      {
        list: [
          `Run a humidifier in the room next to the kitchen, since winter heat and the oven both dry the house.`,
          `Use a drop before you start, if that fits your usual three-a-day schedule.`,
          `Work in batches and step out of the kitchen between them.`,
          `Clean up flour spills with a damp cloth instead of brushing them into the air.`,
          `End the day with screens off for a while rather than scrolling through photos of every tray.`,
        ],
      },
      {
        p: `If baking is part of a bigger holiday cooking day, [dry eyes when cooking holiday dinner](/guides/dry-eyes-when-cooking-holiday-dinner) covers the stovetop side.`,
      },
      { h: 'When it’s more than kitchen air' },
      {
        p: `If your eyes stay dry well after the baking is done, or you notice pain or blurry vision that doesn’t clear, an eye doctor can find the cause and decide what to do. The label’s own limit: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes burn when I open the oven?',
        a: `Opening the door releases a rush of very hot, dry air that rises toward your face, and it speeds evaporation from the eye surface. Stepping back and turning your face aside for a moment helps.`,
      },
      {
        q: 'Can powdered sugar get in your eyes?',
        a: `Yes. Fine powdered sugar and flour float in the air when shaken or mixed fast, and particles that land on the eye make it feel gritty. Sift low, start mixers slowly and wash your hands before touching your eyes.`,
      },
      {
        q: 'Why do my eyes get tired decorating cookies?',
        a: `Fine piping and placing decorations is close, careful work, and close focus slows blinking. Look away and blink fully every 20 minutes or so, and work under good light to cut down on squinting.`,
      },
      {
        q: 'Can eye drops sit next to the oven while I bake?',
        a: `It’s better to move them. Quell’s label says: {storage}. Counters near a working oven can get warmer than that, so a drawer in another room is a safer spot.`,
      },
    ],
  },
  {
    slug: 'why-do-my-eyes-feel-dry-when-wearing-glasses',
    title: 'Why do my eyes feel dry when wearing glasses?',
    description:
      'Glasses don’t dry your eyes, but what you do in them can. Why dryness shows up with glasses on, and when a new prescription needs an eye doctor’s check.',
    category: 'choosing',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Glasses don’t remove moisture from your eyes. When eyes feel dry with glasses on, the usual cause is what you’re doing while wearing them: reading, screens or driving, all of which slow blinking. Smudged lenses, an outdated prescription or new lenses you’re still adjusting to can add strain that feels like dryness. Clean your lenses, take blink breaks, and ask an eye doctor to check the prescription if the feeling doesn’t settle.`,
      },
      { h: 'Can glasses cause dry eyes?' },
      {
        p: `Not directly. A pair of glasses sits in front of the eye without touching it, so it doesn’t take water from the tear film the way dry air or wind does. If anything, frames can block some of the moving air that hits your eyes from the front. The question is common because people often put glasses on for exactly the tasks that dry the eyes, and they notice the dryness and the glasses at the same moment.`,
      },
      { h: 'Why dryness shows up with glasses on' },
      {
        list: [
          `Reading glasses come out for books, menus and phones, and close focus reduces blinking.`,
          `Computer glasses go on for long screen sessions, which also cut the blink rate.`,
          `Driving glasses mean long stretches watching the road, often with a heater or air conditioner blowing.`,
          `Distance glasses may come out at night, when the eyes are already tired and the heat is running at home.`,
        ],
      },
      {
        p: `In each case, the activity and the air around you are doing the drying. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why blinking slows at a monitor, and [dry eyes when reading](/guides/dry-eyes-when-reading) covers books and print.`,
      },
      { h: 'Dirty lenses and the gritty, blurry feeling' },
      {
        p: `A film of skin oil, dust or a fingerprint on a lens scatters light and blurs fine detail. Many people react by blinking hard, squinting or rubbing their eyes, and the result can feel very much like dryness. Before deciding your eyes are the problem, clean the lenses: rinse them under lukewarm water, use a drop of plain dish soap if needed, and dry them with a clean microfiber cloth. If the blur clears, the lenses were the issue.`,
      },
      { h: 'A new prescription or an old one' },
      {
        p: `New glasses can take some getting used to, especially a big change in strength or a first pair of progressive or bifocal lenses. During that adjustment, people sometimes squint, stare or tilt their heads in ways that tire the eyes. An old prescription can cause similar strain as your eyes change and the lenses no longer match. If eyes feel strained, achy or dry mainly when you wear a certain pair, tell your eye doctor or optician. Checking the prescription, the lens type and how the frame sits is their job, and a guide like this can’t do it for you.`,
      },
      { h: 'Does not wearing glasses cause dry eyes?' },
      {
        p: `Going without glasses you need can lead to squinting and leaning in to see, and a long day of that can leave the eyes tired. Whether that is the reason your eyes feel dry is a question for an eye doctor, who can measure your vision and look at the eye surface. If you have glasses and leave them off because they feel uncomfortable, mention that at the visit too.`,
      },
      { h: 'Glasses as a shield' },
      {
        p: `Glasses can work in your favor. Wraparound frames block more wind from the sides on a bike, a boat or a snowy walk, and even ordinary frames take some of the force out of a car vent blowing at your face. Clear safety glasses do the same in a dusty workshop. If you notice your eyes feel worse when you take your glasses off outdoors, that may be the wind you were being spared. [Dry air, wind and altitude](/guides/dry-air-wind-and-altitude) explains how moving air dries the tear film.`,
      },
      { h: 'Using eye drops when you wear glasses' },
      {
        p: `Take the glasses off, put in the drop, blink a few times, and wait until your vision is clear before putting them back on. Drops on the lens are easy to wipe off with a microfiber cloth. Our page on [using eye drops if you wear glasses](/guides/can-you-use-eye-drops-if-you-wear-glasses) goes through the steps.`,
      },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists the Uses as: {uses}. The directions are: {directions}. Quell’s label doesn’t cover contact lenses, so if you switch between glasses and contacts, ask your eye doctor or pharmacist before using it with lenses. Read the full panel on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Simple checks before your next eye appointment' },
      {
        list: [
          `Note which pair you’re wearing when your eyes feel dry, and what you’re doing.`,
          `Note the time of day and the room: heated office, car, bedroom.`,
          `Clean your lenses daily for a week and see if the feeling changes.`,
          `Bring all your glasses to the appointment, including readers and sunglasses.`,
        ],
      },
      { h: 'When to see an eye doctor' },
      {
        p: `See an eye doctor for eye pain, vision changes, double vision, headaches that come on with a certain pair of glasses, or dryness that keeps coming back. They can find the cause and decide what to do. The Quell label has its own line: {stopUse} Our [self-check](/self-check) can help you describe what you’ve noticed; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Can glasses cause dry eyes?',
        a: `Not directly. Glasses don’t touch the eye or take moisture from it. Dryness that shows up with glasses on usually comes from the activity, such as reading, screens or driving, and the air around you.`,
      },
      {
        q: 'Why do my eyes feel worse with my new glasses?',
        a: `New lenses, especially a big change in strength or a first pair of progressives, can take time to adjust to, and squinting or staring during that time tires the eyes. If it doesn’t settle, ask your eye doctor or optician to check the prescription and fit.`,
      },
      {
        q: 'Does not wearing glasses cause dry eyes?',
        a: `Going without glasses you need can lead to squinting and strain. Whether that explains dry eyes is for an eye doctor to judge after measuring your vision and examining the eye surface.`,
      },
      {
        q: 'Can glasses protect your eyes from wind?',
        a: `They can help outdoors. Wraparound frames block more wind from the sides than flat frames, which slows evaporation from the eyes on a bike, a boat or a windy walk. They don’t change dry indoor air, though.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-data-analysts',
    title: 'Dry eyes for data analysts',
    description:
      'Dense spreadsheets, dashboards and close reading of numbers slow your blink rate. Why data analysts get dry, tired eyes, and a workday routine that helps.',
    category: 'using',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Data analysts get dry eyes because the job is hours of close, careful reading on screens: scanning rows of small numbers, checking charts and comparing figures across tabs. Concentration slows blinking, and office air dries the tear film between blinks. Enlarge text instead of leaning in, take a look-away break every 20 minutes, keep vents off your face, and use a lubricating drop as labeled. See an eye doctor for dryness that persists.`,
      },
      { h: 'Why analysis work is hard on the eyes' },
      {
        p: `Plenty of office jobs involve screens. Analysis adds a particular kind of looking. You hunt for one wrong value in thousands of rows, follow a line across a wide table, or study a chart for the moment a trend breaks. That kind of searching keeps the eyes fixed and the blink rate low, sometimes for long stretches without a natural pause. Many analysts also work across several windows at once: a query editor, a spreadsheet, a dashboard and a chat window, each in small type.`,
      },
      {
        list: [
          `Small fonts and tightly packed cells encourage leaning toward the screen.`,
          `Horizontal scanning across wide tables keeps the eyes moving without blinking.`,
          `Bright white grids fill most of the screen for hours.`,
          `Month-end, quarter-end and deadline weeks stretch the hours.`,
          `Long meetings to present results add projector or shared-screen time on top.`,
        ],
      },
      { h: 'Set up your spreadsheets for your eyes' },
      {
        p: `Most analysis tools let you change the view without changing the data. Use that.`,
      },
      {
        list: [
          `Zoom in until you can read numbers comfortably from your normal sitting position, without leaning forward.`,
          `Freeze header rows and columns so you don’t have to scroll back and forth to check what a number means.`,
          `Use alternating row shading or light gridlines to help your eyes stay on the right row.`,
          `Hide columns you aren’t using rather than scanning past them.`,
          `If the bright white background feels harsh, try a softer theme, and see what feels comfortable over a full day.`,
        ],
      },
      { h: 'Monitor position and multiple screens' },
      {
        p: `Put the main screen about an arm’s length away, with the top of it at or slightly below eye level. Looking slightly down means your upper lids cover more of the eye, which leaves less surface exposed to the air. If you work across two or three monitors, put the one you use most directly in front of you rather than turning your head to it all afternoon. Our guide on [dry eyes with multiple monitors](/guides/dry-eyes-with-multiple-monitors) covers wider setups.`,
      },
      { h: 'Natural break points in analysis work' },
      {
        p: `Analysis has built-in pauses if you use them. While a large query runs, a dashboard refreshes or a file exports, look away from the screen across the room, out a window if you have one, and blink slowly and fully a few times. Those small breaks add up, and they don’t cost any working time. When there isn’t a natural pause, a 20-minute timer does the same job.`,
      },
      {
        list: [
          `During a long query, stand up and look at something far away.`,
          `After finishing a chart, close your eyes gently for a few seconds before checking it again.`,
          `Between tabs or reports, finish each blink fully instead of a half-blink.`,
          `Take lunch away from the desk, not over a dashboard.`,
        ],
      },
      { h: 'Reporting season and late nights' },
      {
        p: `Close periods and reporting deadlines often mean long hours and late evenings at the screen, in an office where the heat or air conditioning keeps running. Tired eyes blink less, and late nights shorten sleep, so the dryness tends to peak right when the work does. Plan for it: keep drops at your desk, move your chair away from vents, and try to step outside for a few minutes during the day. [Dry eyes at the end of the day](/guides/dry-eyes-at-the-end-of-the-day) has more on why evenings feel worse.`,
      },
      { h: 'Office air and the desk around you' },
      {
        list: [
          `If a ceiling vent blows straight down onto your chair, ask facilities about a diffuser or move your desk.`,
          `Turn personal fans and space heaters so the air passes your body, not your face.`,
          `A small desk humidifier can help in winter if your office allows one.`,
          `Clean your screen; dust and smudges make fine numbers harder to read.`,
        ],
      },
      { h: 'Where a lubricating drop fits' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel gives its Uses as: {uses}. Its directions: {directions}. For a full workday, that means planning: one before you start, one around midday, and one in the evening is a common way to spread three doses. Keep the bottle in a drawer at room temperature, since the label says: {storage}. The full label is on the [Drug Facts page](/drug-facts).`,
      },
      {
        p: `If someone in your team uses contact lenses or other eye drops, Quell’s label doesn’t cover those situations; they should ask their eye doctor or pharmacist first.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Eyes that feel dry after a long day of analysis often improve with better setup and breaks. Dryness that stays, blurred vision that doesn’t clear when you blink, or eye pain are reasons for an exam, where an eye doctor can find the cause and decide what to do. The Quell label says: {stopUse} Our [self-check](/self-check) can help you describe your symptoms, but it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Do data analysts get dry eyes?',
        a: `Many do. Analysis means long periods of close, focused reading on screens, and concentration slows blinking. Office air then dries the tear film between blinks, especially late in the day.`,
      },
      {
        q: 'How can I make spreadsheets easier on my eyes?',
        a: `Zoom in so you can read from your normal seat, freeze header rows, use row shading or light gridlines, and hide columns you don’t need. Small layout changes cut down on leaning in and searching.`,
      },
      {
        q: 'How do I rest my eyes while a query is running?',
        a: `Use the wait as a break. Look across the room or out a window, blink slowly and fully a few times, and stand up if you can. These pauses add up without costing any working time.`,
      },
      {
        q: 'Can I use eye drops during a long reporting week?',
        a: `Yes, within the label’s directions. Quell’s label calls for a set number of drops per day, so spread them across the day rather than using them all during the busiest hours.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-proofreaders-and-copy-editors',
    title: 'Dry eyes for proofreaders and copy editors',
    description:
      'Reading every letter on screens and proofs slows blinking for hours. Why proofreaders and copy editors get dry eyes, and habits that make long passes easier.',
    category: 'using',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Proofreaders and copy editors get dry eyes because the work is slow, word-by-word reading, and that level of focus cuts the blink rate for hours at a time. Small type, tracked changes and tight deadlines make it worse. Enlarge text, read in shorter passes, look away between sections, keep dry office air off your face, and use a lubricating drop as its label directs. An eye doctor should see dryness or strain that keeps coming back.`,
      },
      { h: 'Why proofreading is harder on the eyes than ordinary reading' },
      {
        p: `Ordinary reading skims. The eye jumps through phrases and the brain fills in the rest. Proofreading deliberately undoes that habit: you look at every letter, every space, every punctuation mark, and you check the same line more than once. The eyes hold still on each word longer, and blinking slows. Copy editing adds another layer, with style questions, cross-references and fact checks that send you back and forth between documents. [Dry eyes when reading](/guides/dry-eyes-when-reading) explains the blinking side of it.`,
      },
      { h: 'Tracked changes, comments and small type' },
      {
        list: [
          `Tracked changes add colored underlines and strikethroughs that crowd the line; switch to a simpler view when you only need the final text.`,
          `Comment panes shrink the main document; widen the window or move comments to a second screen.`,
          `Zoom the page until you can read it comfortably from your chair instead of leaning in.`,
          `Raise the line spacing for your working view if the software allows it without changing the file.`,
          `PDF proofs often open at a small size; set a larger default zoom once.`,
        ],
      },
      { h: 'Screen or paper proofs?' },
      {
        p: `Some editors swear by printed proofs, and there are real reasons to switch now and then: paper changes your viewing distance and posture, and you can hold it at whatever angle feels natural. But reading paper still slows blinking when you concentrate, so a stack of printed galleys can dry your eyes too. What helps most is variety: alternating screen passes with paper passes, and changing distance and position along the way.`,
      },
      {
        list: [
          `Read printed proofs under good, even light, not a single bright spot.`,
          `Hold paper slightly below eye level, which keeps more of the eye covered by the lids.`,
          `Use a ruler or blank card under the line to keep your place without staring harder.`,
          `Take the same breaks on paper that you would on screen.`,
        ],
      },
      { h: 'Read in passes, not marathons' },
      {
        p: `Many proofreaders already split a job into separate passes, one for spelling, one for punctuation, one for consistency. Those passes are natural breaks for your eyes too. At the end of each section, look across the room for 20 seconds, blink fully a few times, and roll your shoulders. A short walk between passes helps more than you might think, because it gets you out of a fixed posture and away from the screen at the same time.`,
      },
      {
        list: [
          `Set a timer for 20 to 25 minutes and stop at the next paragraph break when it goes off.`,
          `Read a short section aloud when you need a fresh look at it; it also changes your rhythm.`,
          `Close your eyes for a few seconds before starting a new chapter.`,
          `Don’t save your hardest pass for the last hour of the day.`,
        ],
      },
      { h: 'Deadline nights' },
      {
        p: `Production schedules don’t always respect office hours, and the final proof often lands late. Long evenings at a laptop in a heated or air-conditioned room are a reliable recipe for dry, heavy eyes. Before a late session, move away from the vent, dim overhead lights a little so the screen isn’t the only bright spot, and plan short breaks before your eyes tell you to stop. [Dry eyes for writers](/guides/dry-eyes-for-writers) has a related routine for long drafting sessions.`,
      },
      { h: 'Your desk and the air around it' },
      {
        list: [
          `Keep heating and cooling vents from blowing at your face; a small deflector can redirect them.`,
          `Use a desk humidifier in the winter months if your workspace allows one.`,
          `Keep reference books and style guides at a comfortable distance so you aren’t refocusing at very close range.`,
          `Clean your glasses and screen, so blur isn’t mistaken for tired eyes.`,
        ],
      },
      { h: 'What Quell’s label covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses on its Drug Facts panel: {uses}. Its directions: {directions}. Keep the dropper tip clean, as the label says: {tip}. The panel also notes: {milky}. If you’re curious why, the [Drug Facts page](/drug-facts) shows the full label.`,
      },
      {
        p: `If you wear contact lenses or use other eye drops, the Quell label doesn’t cover those situations, so ask your eye doctor or pharmacist before adding it.`,
      },
      { h: 'Ordering' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address, with guest checkout. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. No delivery date is promised. You can [order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes hurt, your vision blurs and stays blurred, or dryness persists even on lighter weeks, see an eye doctor, who can find the cause and decide what to do. A regular exam is also the place to ask whether reading glasses or computer glasses would help with close work. The label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get so tired when proofreading?',
        a: `Proofreading means looking at every letter, which holds your eyes still on each word and slows blinking. Hours of that leave the tear film drier and the eyes tired, especially in heated or air-conditioned offices.`,
      },
      {
        q: 'Is it easier on your eyes to proofread on paper?',
        a: `Paper changes your distance and posture, which can feel good, but blinking still slows when you concentrate. Alternating between screen and paper passes, with breaks for both, usually helps more than choosing one.`,
      },
      {
        q: 'How often should proofreaders take breaks?',
        a: `A short break every 20 to 25 minutes works for many people. Look across the room, blink fully a few times and change posture, and use the end of each proofing pass as a longer pause.`,
      },
      {
        q: 'Can copy editors use eye drops at their desk?',
        a: `Yes, as the label directs. Quell’s label gives a set number of drops per day, so plan them across the workday rather than using them all during a late deadline push.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-it-help-desk-workers',
    title: 'Dry eyes for IT help desk workers',
    description:
      'Ticket queues, remote sessions, dusty desks and cold network closets: why IT support work dries the eyes, and simple habits for a help desk shift.',
    category: 'using',
    addedOn: '2026-11-20',
    body: [
      {
        p: `IT help desk work dries the eyes because it mixes long screen sessions with dusty, drafty places. You stare at ticket queues and remote-control windows, then crawl under desks or stand in a cold network closet. Enlarge remote screens, blink fully between tickets, wear safety glasses for dusty jobs, keep vents off your face, and use a lubricating drop as labeled. An eye doctor should check dryness that keeps coming back.`,
      },
      { h: 'Why support work is hard on the eyes' },
      {
        p: `Help desk staff do two jobs at once. At the desk, you read error messages, logs and chat threads while talking someone through a fix, often with a headset on and your eyes locked on a small window. Away from the desk, you’re under tables tracing cables, opening dusty computer cases, or standing in a closet where equipment blows air at you. Both halves pull moisture from the eye surface in different ways.`,
      },
      { h: 'Ticket queues and the blink rate' },
      {
        p: `A busy queue pushes you from one ticket to the next without a pause. Each one means reading carefully, often text you didn’t write, in a font someone else chose. Screens slow blinking, and the urgency of an outage makes it worse. Build tiny breaks into the flow.`,
      },
      {
        list: [
          `When you close a ticket, look away from the screen and blink slowly a few times before opening the next.`,
          `While a user restarts or a patch installs, look across the room instead of at another window.`,
          `Use your status for real breaks; a few minutes away from the queue helps your eyes as much as your head.`,
          `Raise the font size in the ticketing system and chat tools so you’re not leaning in.`,
        ],
      },
      { h: 'Remote sessions on tiny screens' },
      {
        p: `Remote desktop tools often show a user’s whole screen shrunk into a window on yours, with small text inside small text. Staring at that to find a setting is hard work for the eyes. Scale the remote session to fit your full monitor, or zoom in on the area you need. If you support people with very high-resolution displays, ask them to raise their display scaling during the session; it makes their screen readable on yours.`,
      },
      { h: 'Under desks and inside cases' },
      {
        p: `Desk-side visits stir up a lot of dust. The floor under a desk collects it, computer fans pull it inside the case, and opening the cover or using compressed air sends it flying toward your face. Dust that lands on the eye makes it gritty and watery, and rubbing with a dusty hand adds more.`,
      },
      {
        list: [
          `Keep a pair of clear safety glasses in your toolkit for case work and cable runs.`,
          `Point compressed air away from yourself, and close your eyes for each short blast.`,
          `Wash your hands after desk-side visits before touching your eyes.`,
          `Use a flashlight or headlamp under desks so you don’t strain in the dark.`,
        ],
      },
      {
        p: `Workshop tasks raise similar issues; [dry eyes for woodworkers](/guides/dry-eyes-for-woodworkers) covers dust and eyewear in more depth.`,
      },
      { h: 'Network closets and server rooms' },
      {
        p: `Many help desk roles include occasional trips to a network closet or small server room, which is often cooled and full of fans. Air blowing across your face while you read tiny port labels dries the eyes quickly. Keep visits short, stand out of the direct airflow, and take a minute in a warmer room afterward. Full-time work in large data halls is a different job, covered in [dry eyes for data center technicians](/guides/dry-eyes-for-data-center-technicians).`,
      },
      { h: 'Patch nights and on-call weeks' },
      {
        p: `Updates and migrations often happen after hours, and on-call weeks mean late nights at a laptop with a phone nearby. Tired eyes blink less, and late screen time cuts into sleep. Turn on night-time display settings if you like them, keep the room lights on rather than working in the dark, and get up between steps of a long change window.`,
      },
      { h: 'Quell at the help desk' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label lists its Uses as: {uses}. Directions: {directions}. Before using it after a desk-side visit, wash your hands, and keep the tip clean as the label says: {tip}. Store the bottle in a drawer rather than a hot car or cold closet; the label reads: {storage}. Read the rest on the [Drug Facts page](/drug-facts).`,
      },
      {
        p: `The Quell label doesn’t cover contact lenses. If you wear them, or use other eye drops, ask your eye doctor or pharmacist before adding Quell.`,
      },
      { h: 'Your own workstation' },
      {
        list: [
          `Put your main monitor about an arm’s length away, with the top at or a little below eye level.`,
          `Turn vents and personal fans away from your face.`,
          `Keep your screen and glasses clean; you’ll spend less effort reading.`,
          `Add a desk humidifier in winter if your office allows one.`,
        ],
      },
      {
        p: `For more desk setup ideas, see [screens and your tear film](/guides/screens-and-your-tear-film).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Grit that won’t rinse out after case work, eye pain, vision changes, or dryness that keeps returning should be checked by an eye doctor, who can find the cause and decide what to do. The label puts it plainly: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working on a help desk?',
        a: `Help desk work means long screen sessions on ticket queues and remote windows, which slow blinking, plus trips into dusty desk spaces and cooled equipment rooms. Both dry the tear film.`,
      },
      {
        q: 'How do I keep dust out of my eyes when working under desks?',
        a: `Wear clear safety glasses for case work and cable runs, point compressed air away from you, and wash your hands before touching your eyes afterward.`,
      },
      {
        q: 'How can I make remote desktop sessions easier on my eyes?',
        a: `Scale the remote window to your full monitor or zoom into the part you need, and ask users with very high-resolution screens to raise their display scaling during the session.`,
      },
      {
        q: 'Can IT techs keep eye drops in a server room?',
        a: `It’s better to keep them in a desk drawer. Quell’s label says: {storage}. A cooled equipment room can sit below that range.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-cybersecurity-analysts',
    title: 'Dry eyes for cybersecurity analysts',
    description:
      'Alert queues, log searches, video walls and rotating shifts keep security analysts staring at screens. Why it dries the eyes, and habits that help on shift.',
    category: 'using',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Cybersecurity analysts get dry eyes from long, high-focus screen work: triaging alerts, reading logs line by line and watching dashboards, often on rotating or night shifts in cool, dim rooms. Concentration slows blinking, and tired eyes blink even less. Enlarge log text, take short look-away breaks between alerts, keep room lights on, aim vents away from your face, and use a lubricating drop as labeled. Persistent dryness needs an eye doctor.`,
      },
      { h: 'Why security work is hard on the eyes' },
      {
        p: `Security analysis is a watching job. You scan a queue of alerts, read raw logs for the one line that matters, compare timestamps across systems and keep an eye on a dashboard while you work. Unlike many office tasks, it doesn’t have a natural end; the queue keeps coming. Each of those tasks holds the eyes steady on detailed text, and that steady focus is what slows the blink rate.`,
      },
      {
        list: [
          `Log text is often small, monospaced and dense.`,
          `Several monitors plus a shared wall display mean a lot of screen area to watch.`,
          `An active incident can keep you at the screen for hours without a real break.`,
          `Rotating shifts and round-the-clock coverage leave many analysts short on sleep.`,
        ],
      },
      { h: 'Reading logs without straining' },
      {
        list: [
          `Raise the font size in your terminal and log viewer until you can read from your normal seat.`,
          `Use filters and highlighting to narrow what you have to read, rather than scanning everything.`,
          `Turn on line wrapping or widen columns so you aren’t scrolling sideways for long lines.`,
          `Pick a color theme with clear contrast; the right one is the one you can read without squinting.`,
          `Clean your monitors; a smudge over small text adds effort.`,
        ],
      },
      { h: 'Dim rooms and bright screens' },
      {
        p: `Some security operations rooms are kept dim so wall displays stand out. A bright screen in a dark room can make people squint, and squinting narrows the eye opening while the screen keeps the eyes fixed. If you can, keep some ambient light on around your own desk, such as a desk lamp angled away from the screen, and bring your monitor brightness close to the room’s. At home on remote shifts, avoid working in a dark room with only the screen lit.`,
      },
      { h: 'Breaks between alerts' },
      {
        p: `The pace varies: quiet hours, then bursts. Use the gaps.`,
      },
      {
        list: [
          `When you close or escalate an alert, look across the room for 20 seconds and blink fully a few times.`,
          `While a search runs, stand and look at something far away.`,
          `During handoffs, step away from the desk rather than reviewing the next shift’s board.`,
          `On a long incident, agree with a teammate to take short eye breaks in turn.`,
        ],
      },
      {
        p: `[How often should I take a break from screens?](/guides/how-often-should-i-take-a-break-from-screens) covers timing in more detail.`,
      },
      { h: 'Night shifts and rotating schedules' },
      {
        p: `24/7 coverage means somebody is always on nights. Late hours and broken sleep leave the eyes tired, and tired eyes blink less and feel drier. Keep the same habits at 3 a.m. that you use at 3 p.m.: room lights on, regular breaks, vents away from your face. After a night shift, darken your bedroom so you can sleep well during the day. [Dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) has more for people who work nights.`,
      },
      { h: 'Cool rooms and moving air' },
      {
        p: `Operations rooms full of computers often run cool, and the air conditioning moves a lot of air. If a vent blows on your seat, ask facilities to adjust it or move your chair. Turn personal fans so they don’t hit your face. A small desk humidifier can help in winter if your workplace allows one.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its Uses as: {uses}. The directions are: {directions}. On a twelve-hour shift, that means spacing doses out rather than using them all early. The panel also says: {doNotUse}. Emu oil is an ingredient, so note the caution too: {warnings}. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      {
        p: `Quell’s label doesn’t cover contact lenses or use alongside other eye drops; ask your eye doctor or pharmacist about either.`,
      },
      { h: 'Ordering for a shift team' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any US address with guest checkout. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free, which can make sense if a few people on a team want their own bottles. No delivery date is promised. [Order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dryness that doesn’t ease on days off, blurry vision that doesn’t clear when you blink, or eye pain should be seen by an eye doctor, who can find the cause and decide what to do. The Quell label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Do cybersecurity analysts get dry eyes?',
        a: `Many do. The work is long, focused screen reading, such as alert triage and log searches, and focus slows blinking. Night shifts and cool, air-conditioned rooms add to it.`,
      },
      {
        q: 'How do I rest my eyes during a long security incident?',
        a: `Take short turns with a teammate to look away from the screen, blink fully and stand up. Even 20 seconds of looking across the room every so often helps during a long response.`,
      },
      {
        q: 'Is working in a dark room bad for dry eyes?',
        a: `A bright screen in a dark room can make people squint while their eyes stay fixed on the screen. Keeping some ambient light around your desk and matching screen brightness to the room is usually more comfortable.`,
      },
      {
        q: 'What font size is easiest on the eyes for reading logs?',
        a: `There is no single number. Raise the size until you can read comfortably from your normal seat without leaning in, and use filters to cut down how much text you have to read.`,
      },
    ],
  },
  {
    slug: 'can-a-dehumidifier-cause-dry-eyes',
    title: 'Can a dehumidifier cause dry eyes?',
    description:
      'A dehumidifier pulls water from the air, and set too low or aimed at you, it can leave your eyes dry. How to run one without drying out the room you live in.',
    category: 'choosing',
    addedOn: '2026-11-20',
    body: [
      {
        p: `A dehumidifier can contribute to dry eyes. Its job is to pull water out of the air, and if it runs in a room you spend hours in, is set lower than the room needs, or blows its warm exhaust toward you, the drier air speeds evaporation from your tear film. Check the room with a hygrometer, raise the setting, move the unit or its outlet, and see an eye doctor if dryness persists.`,
      },
      { h: 'What a dehumidifier does to the air' },
      {
        p: `A dehumidifier draws in room air, removes water from it and sends the drier air back out. Most home units work by passing the air over cold coils, where moisture condenses into the tank or a drain hose, then warming it again on the way out, which is why the air from the outlet often feels warm. Over hours, the relative humidity of the room drops. That is exactly what you want in a damp basement or a muggy summer house, and exactly what dry eyes don’t want if the level drops too far in a room where you sit, sleep or work.`,
      },
      { h: 'How it can leave your eyes dry' },
      {
        list: [
          `The setting is lower than the room needs, so the unit keeps running long after the dampness is gone.`,
          `It runs in a bedroom or office rather than the basement or laundry room it was bought for.`,
          `The outlet blows warm, dry air across your chair or bed.`,
          `It runs in a closed, small room, so the air dries out quickly.`,
          `It keeps running into fall and winter, when the furnace is already drying the house.`,
        ],
      },
      {
        p: `The tear film’s water layer evaporates faster in drier air, and moving air speeds it more. A unit that combines both, aimed at your face, is a good candidate if your eyes feel gritty or tired in one particular room.`,
      },
      { h: 'Check the humidity before you change anything' },
      {
        p: `A small digital hygrometer costs little at a hardware store and shows the relative humidity in a room. Put one where you spend the most time, away from the dehumidifier itself, and watch it for a few days. If the reading drops sharply when the unit runs, or sits far lower than the rest of the house, that room is drier than it needs to be. Our guide to [what humidity is good for dry eyes](/guides/what-humidity-is-good-for-dry-eyes) explains what the readings mean and the range commonly suggested for homes.`,
      },
      { h: 'How to run a dehumidifier without drying your eyes' },
      {
        list: [
          `Set a target humidity on the unit instead of running it on continuous, and nudge the setting higher if your eyes complain.`,
          `Keep it in the damp space that needed it, such as the basement, and close the door between that space and the rest of the house if you can.`,
          `Turn the outlet so it doesn’t point at a bed, couch or desk.`,
          `Run it while you are out of the room rather than while you sleep in it.`,
          `Switch it off in the cold months when indoor air is already dry, unless dampness is still a real problem there.`,
          `Empty and clean it as the manual says; a smelly unit gets moved closer to people than it should.`,
        ],
      },
      { h: 'Is a dehumidifier or humidifier better for dry eyes?' },
      {
        p: `They do opposite jobs, and many houses need each at different times of year. A humidifier adds water to air that heating has dried out, usually in winter. A dehumidifier removes water from air that is damp, usually in a basement or in humid summer weather. For dry eyes, the useful question is what your own room’s air is doing right now, which is what the hygrometer tells you. A bedroom that reads very dry in January may want a humidifier, while the basement below it needs a dehumidifier in July.`,
      },
      { h: 'Air conditioning dries the air too' },
      {
        p: `Central air and window units also pull moisture out as they cool, so in summer a house may already be drier than it feels. Running a dehumidifier on top of steady air conditioning in a bedroom can tip a room too far. If your eyes feel worse in summer indoors than outdoors, look at both machines. [Dry eyes when sleeping with a fan on](/guides/dry-eyes-when-sleeping-with-a-fan-on) covers moving air at night.`,
      },
      { h: 'Where eye drops fit' },
      {
        p: `Fixing the air is the first step, since it works every hour you are in the room. A lubricating drop can help with the dryness you still feel. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists the Uses as: {uses}. Directions: {directions}. The label’s caution: {warnings}. The [Drug Facts page](/drug-facts) has the whole panel, and you can [buy from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes still feel dry after you adjust the dehumidifier and the room settles, or you notice pain or blurry vision, see an eye doctor, who can find the cause and decide what to do. The Quell label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Can a dehumidifier make your eyes dry?',
        a: `Yes, if it lowers the humidity too far in a room where you spend time, or blows its warm, dry exhaust toward you. Raising the setting, moving the unit or turning its outlet away usually helps.`,
      },
      {
        q: 'Should I run a dehumidifier in my bedroom?',
        a: `Only if the bedroom is actually damp. Check with a hygrometer first, set a target instead of running it continuously, and point the outlet away from the bed so you aren’t sleeping in its airflow.`,
      },
      {
        q: 'Is it better to have a humidifier or a dehumidifier for dry eyes?',
        a: `It depends on the room. A humidifier helps when heating has dried the air, and a dehumidifier is for damp spaces. A hygrometer tells you which one your room needs at a given time of year.`,
      },
      {
        q: 'Why does the air from a dehumidifier feel warm?',
        a: `Most home units cool air to pull moisture out, then pass it over warm coils before sending it back into the room. That warm, dry air can feel uncomfortable on the eyes if it blows toward you.`,
      },
    ],
  },
  {
    slug: 'why-do-my-eyes-feel-dry-after-a-shower',
    title: 'Why do my eyes feel dry after a shower?',
    description:
      'Steam feels good, but stepping out into dry air, a running fan, a hair dryer and a rough towel can leave eyes drier than before. What happens and what helps.',
    category: 'choosing',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Eyes often feel dry after a shower because of what comes right after it. Warm, steamy air gives way to cooler, drier room air, the exhaust fan and a hair dryer move that air across your face, and towels, soaps and cleansers near the eyes add irritation. Pat your face dry, keep the hair dryer pointed away from your eyes, let the room settle, and use a lubricating drop as labeled if the feeling lingers.`,
      },
      { h: 'The steam-to-dry-air switch' },
      {
        p: `Inside the shower, warm, nearly saturated air surrounds your face, and the tear film loses very little water to it. The moment you open the door, the air around you changes: cooler, much drier, and often moving because of the exhaust fan. Evaporation from the eye surface speeds up again, and the contrast makes the change easy to notice. In winter, when the rest of the house is heated and dry, the jump is larger, which is why many people notice this most from November to March.`,
      },
      { h: 'Hot water on your face' },
      {
        p: `Very hot water running over the face and closed eyes can leave the lids and skin around them feeling tight, and some people find their eyes sting a little afterward. Warm rather than hot water, and turning your face out of the spray when you rinse, keeps the area around the eyes more comfortable.`,
      },
      { h: 'Soap, shampoo and cleansers' },
      {
        p: `Shampoo, conditioner, body wash and face cleansers are made for skin and hair, not the eye. A small amount running into the eye stings, and a film of product on the lashes or lid can keep irritating it after you dry off. That irritation can feel a lot like dryness.`,
      },
      {
        list: [
          `Tilt your head back when you rinse shampoo so it runs away from your face.`,
          `Rinse your face well after a cleanser, including the lids and lashes, with plenty of plain water.`,
          `If something stings, rinse with clean, lukewarm water; don’t use eye drops as a rinse.`,
          `If one product seems to bother your eyes every time, try going without it for a week and see if things change.`,
        ],
      },
      { h: 'The towel and the rub' },
      {
        p: `A quick scrub with a towel over closed eyes feels natural, but rubbing presses on the lids and drags lint and fibers across the lashes. Pat your face dry instead, and use a clean towel; one that has hung damp for days is a poor thing to press against your eyes. [Why do I feel like rubbing my eyes?](/guides/why-do-i-feel-like-rubbing-my-eyes) covers the rubbing habit more broadly.`,
      },
      { h: 'Exhaust fans and hair dryers' },
      {
        p: `The bathroom fan does its job by pulling moist air out, which means the room dries quickly and air moves past your face while you’re at the mirror. A hair dryer is a stronger version of the same thing: a jet of hot, dry air a short distance from your eyes, often for several minutes.`,
      },
      {
        list: [
          `Point the dryer down and away from your face, and work from the back of your head first.`,
          `Use a lower heat setting and keep your eyes closed when drying your bangs or the front of your hair.`,
          `Let the fan run while you’re out of the room rather than standing under it.`,
          `Step into another room to style your hair if the bathroom is small.`,
        ],
      },
      { h: 'Morning showers and evening showers' },
      {
        p: `Eyes can already feel dry first thing in the morning, so a morning shower may just make you more aware of it. Evening showers have a different problem: a hot shower followed by a heated bedroom, a screen in bed and a ceiling fan can stack several drying things together in the last hour of the day. If your eyes feel worse at night after a shower, move the screen time earlier and keep the fan off your face. [Waking up with dry eyes in winter](/guides/waking-up-with-dry-eyes-in-winter) covers the morning side.`,
      },
      { h: 'Using eye drops around your shower' },
      {
        p: `After the shower is usually the easier time, once your hands are clean and the steam has cleared. Our guide to [eye drops before or after a shower](/guides/eye-drops-before-or-after-a-shower) walks through the order step by step. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists the Uses as: {uses}. Its directions are: {directions}. Keep the bottle out of the steamy bathroom, since the label’s storage line reads: {storage}. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      {
        p: `If you wear contact lenses, Quell’s label doesn’t cover them, so ask your eye doctor how drops and lenses fit into your morning.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A brief dry or stinging feeling after a shower that fades within a few minutes is common. Pain, blurry vision that doesn’t clear, or dryness that lasts through the day should be looked at by an eye doctor, who can find the cause and decide what to do. The label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel dry after a hot shower?',
        a: `Leaving warm, steamy air for cooler, drier room air speeds evaporation from the eye surface, and the contrast makes it noticeable. A bathroom fan or hair dryer blowing nearby adds to it.`,
      },
      {
        q: 'Can a hair dryer dry out your eyes?',
        a: `Yes. A hair dryer sends hot, dry, fast-moving air toward your face, which speeds evaporation from the tear film. Point it down and away from your eyes, and close them when drying the front of your hair.`,
      },
      {
        q: 'Why do my eyes sting after washing my face?',
        a: `Face cleansers aren’t meant for the eye, and a little product left on the lids or lashes can sting. Rinse thoroughly with plain water, pat dry, and see an eye doctor if the stinging continues.`,
      },
      {
        q: 'Should I rub my eyes with a towel after a shower?',
        a: `It’s better to pat your face dry. Rubbing presses on the lids and drags fibers across the lashes, which can leave your eyes feeling more irritated.`,
      },
    ],
  },
  {
    slug: 'why-do-my-eyes-dry-out-so-fast',
    title: 'Why do my eyes dry out so fast?',
    description:
      'Eyes that feel dry seconds after you blink are usually reacting to moving air, dry rooms, screens and half-blinks. What speeds drying, and what slows it.',
    category: 'choosing',
    addedOn: '2026-11-20',
    body: [
      {
        p: `Your eyes dry out fast when the tear film evaporates quicker than blinking replaces it. Moving air, low humidity, heat, screens that slow your blink, and incomplete blinks are the usual reasons. Aim vents and fans away from your face, finish each blink, take look-away breaks, humidify dry rooms, and use a lubricating drop as labeled. If your eyes still dry out within moments of blinking, an eye doctor can look at why.`,
      },
      { h: 'What happens between blinks' },
      {
        p: `Every blink spreads a fresh tear film across the front of the eye, with an oil layer on top, a water layer in the middle and a mucus layer against the surface. The moment your eyes open, that film starts to thin as water evaporates. The oil layer slows that loss. Normally the next blink arrives before the surface feels dry. When the film thins faster, or the next blink comes later, you notice dryness in the gap. [How blinking spreads tears](/guides/how-blinking-spreads-tears) explains the mechanics.`,
      },
      { h: 'Things that speed up evaporation' },
      {
        list: [
          `Moving air: a ceiling fan, a car vent, a desk fan, wind outdoors.`,
          `Dry air: heated rooms in winter, air-conditioned offices, airplanes, desert climates.`,
          `Heat near your face: a space heater, a fireplace, an oven door, a hair dryer.`,
          `Altitude, where the air is thinner and often drier.`,
        ],
      },
      {
        p: `If your eyes dry out fastest in one particular place, such as the car or one desk at work, the air there is the first thing to look at. [Dry air, wind and altitude](/guides/dry-air-wind-and-altitude) goes into how each one works.`,
      },
      { h: 'Things that slow your blinking' },
      {
        list: [
          `Screens: people blink less while reading or working on a monitor or phone.`,
          `Concentration of any kind, such as driving, reading small print or detailed handwork.`,
          `Being tired, late in the day or after a short night.`,
          `Looking upward at a screen, which opens the eyes wider and exposes more surface between blinks.`,
        ],
      },
      { h: 'Half-blinks' },
      {
        p: `Not every blink is complete. During focused work, many blinks are partial: the upper lid comes down part of the way and goes back up, refreshing only the top of the eye. The lower part of the surface gets less fresh tear film and dries first, which can feel like a band of grittiness. Practicing a few slow, full blinks, where the lids gently meet, every so often helps retrain the habit.`,
      },
      { h: 'Why it feels faster at certain times' },
      {
        p: `Dryness often builds through the day. Mornings may start fine, but by mid-afternoon, after hours of screens and office air, the eyes seem to dry out between every blink. Evenings with a heater on and a phone in hand can feel worse still. Seasonal changes matter too: the first weeks of heating season in the fall catch many people by surprise. [Dry eyes at the end of the day](/guides/dry-eyes-at-the-end-of-the-day) covers the daily pattern.`,
      },
      { h: 'How to slow it down' },
      {
        list: [
          `Turn fans and vents so they don’t blow at your face, at home, at work and in the car.`,
          `Add a humidifier to the room where you spend the most hours in winter.`,
          `Lower your screen so the top sits at or just below eye level.`,
          `Every 20 minutes, look across the room for 20 seconds and blink fully a few times.`,
          `Wear wraparound glasses outdoors on windy days.`,
          `Keep heaters at your feet, not your face.`,
        ],
      },
      { h: 'Where a lubricating drop fits' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. That is the layer that slows evaporation between blinks. The Drug Facts panel lists its Uses as: {uses}. Its directions: {directions}. Following that schedule while you fix the air and your blink habits is more useful than adding extra drops whenever your eyes feel dry. The panel lists {actives} as the active ingredients; see the [Drug Facts page](/drug-facts) for every line.`,
      },
      {
        p: `If you wear contact lenses or use prescription eye drops, Quell’s label doesn’t cover those situations, so ask your eye doctor or pharmacist first.`,
      },
      { h: 'When fast drying is a sign to see an eye doctor' },
      {
        p: `If your eyes dry out almost immediately after blinking even in comfortable rooms, or dryness comes with pain, light sensitivity or vision that doesn’t clear, see an eye doctor. Some medicines and health conditions affect tears, and an eye doctor can examine the tear film directly, find the cause and decide what to do. The Quell label sets its own limit: {stopUse} The [self-check](/self-check) can help you describe your symptoms beforehand; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes dry out right after I blink?',
        a: `The tear film starts thinning as soon as your eyes open, and moving air, dry rooms or heat near your face make it thin faster. If it happens even in comfortable air, an eye doctor can check why.`,
      },
      {
        q: 'Why do my eyes dry out faster in the afternoon?',
        a: `Hours of screens, office air and concentration slow your blinking and dry the tear film, and being tired adds to it. Breaks, full blinks and vents aimed away from your face usually help.`,
      },
      {
        q: 'Do half-blinks make your eyes dry out faster?',
        a: `They can. In a half-blink the upper lid only comes part of the way down, so the lower part of the eye gets less fresh tear film. Half-blinks are common during screen work.`,
      },
      {
        q: 'How do I stop my eyes from drying out so fast?',
        a: `Keep moving air and heat off your face, humidify dry rooms, lower your screen, take regular look-away breaks with full blinks, and use a lubricating drop as its label directs.`,
      },
    ],
  },
]
