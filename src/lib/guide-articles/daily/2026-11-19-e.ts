import type { Guide } from '@/lib/guide-types'
export const DAILY_20261119_E: Guide[] = [
  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-hillsboro-or:
   * - https://data.rcc-acis.org/StnData, sid HIO, NOAA 1991-2020 normals
   *   (raw: .daily-job/acis1119/HIO.json and .daily-job/e/acis1119/HIO-min.json).
   *   PORTLAND-HILLSBORO AP, elev 196 ft. Annual precip 35.93 in (sum of months);
   *   Dec 6.05, Nov 5.44, Jan 5.27, Feb 3.97, Mar 3.70 (Nov-Mar 24.43); Jul 0.37,
   *   Aug 0.48, Jun 1.31. Normal highs Dec 46.2 F, Jan 47.3 F, Jul 82.1 F,
   *   Aug 82.4 F; normal lows Dec 33.3 F, Jan 33.6 F, Feb 33.5 F, Jul 52.2 F.
   *   Snowfall missing (M): not stated.
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figures.
   */
  {
    slug: 'dry-eye-relief-hillsboro-or',
    title: 'Dry eye relief in Hillsboro, Oregon',
    description:
      'Hillsboro’s airport gets about 36 inches of rain a year, yet July averages 0.37 inches. NOAA’s Tualatin Valley numbers and everyday dry eye relief.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Hillsboro means handling two very different halves of the year. NOAA’s normals for Portland-Hillsboro Airport show about 36 inches of precipitation, yet July and August together get less than an inch, and the wet months are the months the furnace runs. Keep vents and fans off your face, blink fully at screens, and use a lubricating drop as its label directs. Pain or vision changes call for an eye doctor.`,
      },
      { h: 'Hillsboro’s climate in NOAA’s numbers' },
      {
        p: `The weather station that speaks for Hillsboro is Portland-Hillsboro Airport, on the floor of the Tualatin Valley at about 196 feet on the northeast side of town, a long way west of Portland’s own airport. NOAA’s 1991 to 2020 climate normals for the station, as published through the National Weather Service’s NOWData, describe it like this:`,
      },
      {
        list: [
          `About 35.93 inches of precipitation in a normal year.`,
          `December is the wettest month at 6.05 inches, followed by November at 5.44 and January at 5.27.`,
          `November through March brings in about 24.4 inches, more than two-thirds of the yearly total.`,
          `July averages 0.37 inches and August 0.48, the two driest months by far.`,
          `Normal highs climb from 46.2°F in December to 82.4°F in August, and winter nights average about 33°F.`,
        ],
      },
      {
        p: `So the valley spends roughly five months soaked and two months nearly rainless. Each half dries the eyes in its own way, and the fix is different for each.`,
      },
      { h: 'Gray months and heated houses' },
      {
        p: `From November into March, the air outside is cool and wet, but nobody in Hillsboro lives outside. With normal lows hovering around 33°F in December, January and February, the heat runs for weeks at a stretch. Heating cold air without adding water makes its relative humidity fall, so a townhome near Orenco Station or a ranch house in south Hillsboro can feel parched while rain beads on the windows. The tear film loses water faster in that air, especially where a register blows straight at a couch, a bed or a desk.`,
      },
      {
        list: [
          `Turn the deflector on any floor register so the warm air rises along the wall instead of across your face.`,
          `Run a bedroom humidifier during the coldest weeks, and clean it as its maker directs.`,
          `Drop the thermostat a few degrees at night; a cooler room means the system cycles less.`,
          `In the car, aim the heater at the windshield and your feet rather than your eyes.`,
        ],
      },
      {
        p: `Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) goes further into rooms, vents and humidifiers.`,
      },
      { h: 'Fabs, data halls and indoor shifts' },
      {
        p: `A large share of Hillsboro’s jobs sit inside big, sealed buildings: chip fabrication plants, data centers and the offices around them. Those spaces move a great deal of filtered air, and the work inside often means long stretches of close attention to a screen, a microscope or a rack of equipment. Concentration slows blinking, and moving air carries off tear-film moisture between blinks. Both happen at once on a long shift.`,
      },
      {
        p: `If your job involves gowning or a controlled area, follow your site’s rules about what you can bring in; a personal bottle may need to stay in your locker until break. Wash your hands before you use a drop, and keep the bottle capped between uses. People who work among server racks will find more on that setting in [dry eyes for data center technicians](/guides/dry-eyes-for-data-center-technicians).`,
      },
      { h: 'July and August on the valley floor' },
      {
        p: `Summer flips the problem. With highs in the low 80s and less than half an inch of rain in either July or August, Hillsboro’s fields and road shoulders dry out completely. Tractors working the berry farms and nurseries out toward North Plains and Forest Grove lift fine dust, and a breeze carries it into town. Evenings at a Hillsboro Hops game or along the trails at Jackson Bottom Wetlands Preserve are pleasant, yet the air has gone weeks without rain.`,
      },
      {
        list: [
          `Wear wraparound sunglasses for yard work, U-pick outings and bike rides; they block both wind and grit.`,
          `Point a bedroom fan at your feet or the wall, not your pillow, on warm nights.`,
          `Rinse your hands before touching your eyes after time in a dusty field or garden.`,
          `If you head to the coast on US 26, keep the car’s air off your face for the long drive.`,
        ],
      },
      { h: 'Commuting on the MAX or the Sunset Highway' },
      {
        p: `Many Hillsboro residents spend an hour a day getting to and from Beaverton or Portland. On the MAX Blue Line, the heater runs hard in winter and riders tend to read their phones, which slows blinking further. Behind the wheel on the Sunset Highway, the defroster blows warm, dry air upward for the whole trip. Looking up and out of the window every few minutes, and finishing each blink instead of half-closing your eyes, helps on either route. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why the phone matters.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists the Uses as: {uses}. The directions: {directions}. While using it: {tip}.`,
      },
      {
        p: `The panel also carries a caution: {warnings}. For storage: {storage}. A Hillsboro winter rarely gets cold enough to freeze a bottle in a coat, but a car parked at the farmers market on an August afternoon can heat past the upper end of that range. The full label is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Hillsboro' },
      {
        p: `We ship from Brentwood, Tennessee, to Hillsboro, Cornelius, North Plains and every other US address. You can check out as a guest. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking comes by email, but we don’t promise a delivery date, so reorder before the bottle runs out. If a bottle is still unopened, it can be refunded within {returnDays} days of delivery, and you keep it. Local details are on the [Hillsboro page](/eye-drops/hillsboro-or) and the [Oregon page](/eye-drops/state/oregon).`,
      },
      { h: 'When an eye doctor should take over' },
      {
        p: `Lubricating drops are for ordinary dryness. They aren’t a way to work out why your eyes keep bothering you. The label marks the line clearly: {stopUse} Eye pain, light sensitivity, blur that blinking doesn’t clear, or one eye far worse than the other belongs with an eye doctor, who can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists more warning signs.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Hillsboro, Oregon?',
        a: `July. NOAA’s 1991 to 2020 normals for Portland-Hillsboro Airport give July 0.37 inches of precipitation, with August close behind at 0.48 inches.`,
      },
      {
        q: 'How much rain does Hillsboro, Oregon get a year?',
        a: `About 35.93 inches in a normal year at Portland-Hillsboro Airport, according to NOAA’s 1991 to 2020 climate normals. December is the wettest month at 6.05 inches.`,
      },
      {
        q: 'Why do my eyes feel dry in Hillsboro in the winter if it rains so often?',
        a: `Because most of the drying happens indoors. Winter nights near 33°F keep the heat running, and warmed air holds much less relative moisture, so the tear film evaporates faster inside even on a rainy day.`,
      },
      {
        q: 'Can I get Quell delivered to Hillsboro or Cornelius?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any US address, including Hillsboro and Cornelius, with guest checkout and tracking by email. No delivery date is promised, so order ahead.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-gastonia-nc:
   * - https://data.rcc-acis.org/StnData, sid AKH, NOAA 1991-2020 normals
   *   (raw: .daily-job/acis1119/AKH.json and .daily-job/e/acis1119/AKH-min.json).
   *   GASTONIA MUNICIPAL AP, elev 792 ft. Annual precip 43.31 in (sum of months);
   *   wettest Jun 4.21; Aug 3.95, Mar 3.94; driest Feb 3.28, Oct 3.29, Nov 3.30,
   *   Jan 3.34. Normal highs Jan 53.3 F, Jun 87.5 F, Jul 90.7 F, Aug 89.3 F;
   *   normal lows Jan 32.5 F, Dec 35.5 F, Jul 70.2 F, Aug 69.1 F.
   *   Snowfall missing (M): not stated.
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figures.
   */
  {
    slug: 'dry-eye-relief-gastonia-nc',
    title: 'Dry eye relief in Gastonia, North Carolina',
    description:
      'Gastonia gets about 43 inches of rain spread across every month, so dry eyes there are mostly an indoor story. NOAA’s numbers and practical relief.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Gastonia is mostly about indoor air. NOAA’s normals for Gastonia Municipal Airport show about 43 inches of rain spread fairly evenly through the year, with July highs near 91°F that keep air conditioning running for months and winter nights near freezing that bring on the heat. Keep vents off your face, blink fully at screens, and use a lubricating drop as its label directs. Pain or vision changes belong with an eye doctor.`,
      },
      { h: 'Gastonia’s weather, month by month' },
      {
        p: `Gastonia Municipal Airport sits at about 792 feet, a few miles southeast of downtown. NOAA’s 1991 to 2020 climate normals for that station, also published through the National Weather Service’s NOWData, give this outline:`,
      },
      {
        list: [
          `About 43.31 inches of precipitation in a normal year.`,
          `No month averages less than 3.28 inches (February), and none more than 4.21 (June).`,
          `July is the hottest month, with a normal high of 90.7°F, and August follows at 89.3°F.`,
          `Summer nights stay warm, with July lows near 70°F.`,
          `January’s normal high is 53.3°F and its normal low 32.5°F.`,
        ],
      },
      {
        p: `That evenness matters. Gastonia doesn’t have a rainless season the way the western states do, so the outdoor air is rarely the main reason eyes feel dry here. The cause usually lies in what happens to the air once it comes inside.`,
      },
      { h: 'Long air-conditioning summers' },
      {
        p: `With normal highs above 87°F from June through August and nights that barely cool off, Gaston County homes, offices and cars run the air conditioning for a third of the year or more. Cooling pulls water out of the air, and the vents push that drier air across whoever sits in their path. Hours at a desk under a ceiling diffuser, or a commute up I-85 to Charlotte with the dash vents aimed at your face, can leave eyes gritty by evening even in a sticky Carolina summer.`,
      },
      {
        list: [
          `Close or redirect the dash vents that point at your eyes; aim them at your chest or the ceiling.`,
          `Ask facilities whether a ceiling diffuser over your desk can be angled or partly closed.`,
          `Set the thermostat a few degrees higher so the system cycles less often.`,
          `Take a short break from the screen every so often and blink slowly a few times.`,
        ],
      },
      { h: 'Winter heat in the Piedmont' },
      {
        p: `Gastonia winters are short, yet January nights still average about 32.5°F, and heat pumps and furnaces run through most of December, January and February. Warmed air without added moisture has a lower relative humidity, which speeds evaporation from the tear film. Mill houses and older homes near downtown often have floor registers that blow straight up beside a bed or recliner, so a deflector or a rearranged chair can make a real difference. More ideas are in [dry eyes from forced-air heat](/guides/dry-eyes-from-forced-air-heat).`,
      },
      { h: 'Mill floors, warehouses and long shifts' },
      {
        p: `Textile mills built Gastonia; the restored Loray Mill now holds apartments and shops, but manufacturing, distribution and warehouse work still employ a lot of the county. Big buildings mean big fans, forklift traffic stirring up dust, and loading-dock doors that swing open on hot or cold days. If your job calls for safety glasses, a pair that wraps closely around the sides also cuts the airflow reaching your eyes. Keep your drops in a clean pocket or locker, and wash up before you use them. [Dry eyes for factory workers](/guides/dry-eyes-for-factory-workers) covers more of that setting.`,
      },
      { h: 'Crowders Mountain, the lake and spring pollen' },
      {
        p: `Weekends in Gaston County often head outdoors. Crowders Mountain State Park rises to the west of town, and the climb to the overlook puts you in steady wind and bright sun at the top. Boating on Lake Wylie or the river adds glare off the water and breeze across the bow. Wraparound sunglasses help in both places, and stopping in shade for a few slow blinks gives the tear film a chance to spread again.`,
      },
      {
        p: `Spring brings a heavy coat of yellow pollen to cars and porches across the Carolinas. If your eyes feel itchy rather than dry, notice the difference: Quell’s label lists dryness and irritation, not itching, and a pharmacist or eye doctor is the right person to ask about itchy eyes.`,
      },
      { h: 'Using Quell the way the label says' },
      {
        p: `Quell is a preservative-free lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. According to its Drug Facts panel, its Uses are: {uses}. Directions: {directions}. A caution that matters every time: {tip}.`,
      },
      {
        p: `The panel also notes: {warnings}. On storage it says: {storage}. A parked car in a Gastonia July gets hotter than that upper limit within minutes, so the bottle belongs in a bag you carry, not the glove box. Our guide to [eye drops in a hot car](/guides/eye-drops-in-a-hot-car) explains why, and the full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in Gastonia' },
      {
        p: `Orders leave Brentwood, Tennessee, for Gastonia, Belmont, Mount Holly, Cramerton and any other US address. There’s no account to create. Shipping is {shipping}, and {freeBottles} or more bottles ship free. You’ll get tracking by email, though no delivery date is promised, so order before you’re down to the last few drops. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. See the [Gastonia page](/eye-drops/gastonia-nc) or the [North Carolina page](/eye-drops/state/north-carolina) for more.`,
      },
      { h: 'When to see an eye doctor in Gaston County' },
      {
        p: `A lubricating drop is meant for everyday dryness and nothing more. The label says exactly when to stop: {stopUse} If you have eye pain, blurred vision that doesn’t clear, sensitivity to light, or trouble in just one eye, book an exam instead of reaching for another bottle. The [self-check](/self-check) can help you put symptoms into words before the visit; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Gastonia, NC get a year?',
        a: `About 43.31 inches at Gastonia Municipal Airport in NOAA’s 1991 to 2020 normals. Every month averages between 3.28 inches (February) and 4.21 inches (June).`,
      },
      {
        q: 'How hot does Gastonia get in the summer?',
        a: `July’s normal high at Gastonia Municipal Airport is 90.7°F and August’s is 89.3°F, according to NOAA’s 1991 to 2020 normals. July nights average about 70°F.`,
      },
      {
        q: 'Why do my eyes feel dry in Gastonia when it’s so humid outside?',
        a: `Most of the drying happens inside. Air conditioning removes moisture and blows it across your face for months, and winter heat lowers indoor humidity too, so the tear film evaporates faster indoors than the muggy weather suggests.`,
      },
      {
        q: 'Does Quell ship to Gastonia, North Carolina?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Gastonia and every other US address, with guest checkout and email tracking. There is no promised delivery date, so order ahead of running out.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-lawton-ok:
   * - https://data.rcc-acis.org/StnData, sid LAW, NOAA 1991-2020 normals
   *   (raw: .daily-job/acis1119/LAW.json and .daily-job/e/acis1119/LAW-min.json).
   *   Listed by ACIS as LAWTON MUNICIPAL AP (the field is now Lawton-Fort Sill
   *   Regional Airport), elev 1070 ft. Annual precip 27.47 in (sum of months);
   *   Jan 1.04, Feb 0.89, Dec 1.46 (Dec-Feb 3.39); May 3.72, Jun 3.98, Jul 2.00,
   *   Aug 3.21. Normal highs Jan 53.7 F, Jun 92.0 F, Jul 97.2 F, Aug 96.4 F,
   *   Sep 87.6 F; normal lows Jan 27.4 F, Dec 29.1 F, Jul 71.5 F.
   *   Snowfall missing (M): not stated.
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figures.
   */
  {
    slug: 'dry-eye-relief-lawton-ok',
    title: 'Dry eye relief in Lawton, Oklahoma',
    description:
      'July highs in Lawton average 97.2°F, and winter brings barely an inch of rain a month. NOAA’s numbers for southwest Oklahoma and real dry eye relief.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Lawton starts with heat and a dry winter. NOAA’s normals for the Lawton airport give July a normal high of 97.2°F and about 27.5 inches of precipitation a year, with December through February adding up to less than 3.4 inches. Shield your eyes from wind and dust, keep car and office vents off your face, and use a lubricating drop exactly as its label directs. See an eye doctor for pain or vision changes.`,
      },
      { h: 'Lawton’s climate in NOAA’s normals' },
      {
        p: `The station is at the Lawton airport, now called Lawton-Fort Sill Regional Airport and listed in NOAA’s records as Lawton Municipal Airport, at about 1,070 feet on the south side of the city. NOAA’s 1991 to 2020 climate normals for it give this picture:`,
      },
      {
        list: [
          `About 27.47 inches of precipitation in a normal year.`,
          `February is the driest month at 0.89 inches, and January averages 1.04.`,
          `June is the wettest at 3.98 inches, with May close behind at 3.72.`,
          `July averages only 2.00 inches, wedged between those wet spring months and August’s 3.21.`,
          `Normal highs reach 92.0°F in June, 97.2°F in July and 96.4°F in August.`,
          `January nights average 27.4°F.`,
        ],
      },
      {
        p: `Put together, Lawton has a dry, cold-night winter, a stormy late spring, and a long, very hot summer with a dip in rain right when the heat peaks.`,
      },
      { h: 'Summer heat near 97 degrees' },
      {
        p: `Heat by itself doesn’t dry the eyes, but everything people do to cope with it does. Car air conditioning on full, offices chilled to the 60s, and box fans in garages all move air across the eye and carry off moisture between blinks. Then there’s the time spent outside: yard work at 7 a.m. before the heat sets in, little league at dusk, or a day on the water at Lake Lawtonka or Lake Ellsworth with glare bouncing up from the surface.`,
      },
      {
        list: [
          `Aim the dash vents at your chest, not your face, especially on the drive along I-44.`,
          `Wear wraparound sunglasses on the lake and in open fields; they cut glare and wind together.`,
          `In a chilled office, ask whether the diffuser over your desk can be angled away.`,
          `Keep your eye drops out of the car: a parked vehicle in a Lawton July is far hotter than the bottle’s storage range.`,
        ],
      },
      { h: 'Training at Fort Sill' },
      {
        p: `Fort Sill shapes Lawton, and a lot of the people who live here spend long days outdoors on ranges and in field exercises, often in wind and dust kicked up by vehicles on dry ground. Protective eyewear is standard for much of that work, and a pair that seals well at the sides keeps out grit as well as debris. Wash your hands before using a drop, keep the bottle capped in a clean pocket, and never touch the tip to anything. Soldiers and civilians who work outside will find more in our guide to [dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers).`,
      },
      { h: 'The Wichita Mountains in wind and sun' },
      {
        p: `The drive up Mount Scott and the trails through the Wichita Mountains Wildlife Refuge, just northwest of town, are some of the area’s favorite outings. Granite summits sit above the surrounding plains, with little to block the wind and plenty of sun reflecting off pale rock. Bring sunglasses, turn away from strong gusts rather than squinting into them, and give your eyes a few slow blinks in the shade of a boulder before the walk back. A dusty parking area on a dry day is worth a hand rinse before you touch your face.`,
      },
      { h: 'Dry winters and the furnace' },
      {
        p: `From December through February, Lawton gets less than 3.4 inches of precipitation in total, and nights average in the upper 20s. Outdoors, that means dry ground and dust when the wind picks up. Indoors, the heater warms cold air without adding water, so bedroom and office humidity falls. A room humidifier, a lower thermostat at night, and a register pointed away from your pillow are the usual fixes. Our guide to [whether a humidifier helps dry eyes](/guides/does-a-humidifier-help-dry-eyes) explains what one can and can’t do.`,
      },
      { h: 'What Quell’s Drug Facts panel covers' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The panel states its Uses as: {uses}. Directions: {directions}. Keep the dropper clean: {tip}.`,
      },
      {
        p: `It also warns: {warnings}. For storage: {storage}. Lawton summer days blow well past the top of that range, so carry the bottle in a bag or pocket instead of leaving it in a truck. The complete panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Lawton' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Lawton, Cache, Elgin and every other US address. If you live on post, use the address where your other packages normally arrive. Checkout works as a guest; shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking arrives by email, but no delivery date is promised, which matters if a move or a field rotation is coming up. Unopened bottles can be refunded within {returnDays} days of delivery, with nothing to send back. See the [Lawton page](/eye-drops/lawton-ok) and the [Oklahoma page](/eye-drops/state/oklahoma).`,
      },
      { h: 'Knowing when it’s more than dryness' },
      {
        p: `A drop eases ordinary dryness; it doesn’t explain it. The label says when to stop: {stopUse} Grit or debris that won’t rinse out, pain, changes in vision, or one eye much worse than the other needs an eye doctor promptly. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists more.`,
      },
    ],
    faq: [
      {
        q: 'How hot does Lawton, Oklahoma get in the summer?',
        a: `NOAA’s 1991 to 2020 normals for the Lawton airport give July a normal high of 97.2°F and August 96.4°F. June averages 92.0°F.`,
      },
      {
        q: 'What is the driest month in Lawton, OK?',
        a: `February, at 0.89 inches of precipitation in NOAA’s 1991 to 2020 normals for the Lawton airport. January averages 1.04 inches and December 1.46.`,
      },
      {
        q: 'How much rain does Lawton get a year?',
        a: `About 27.47 inches in a normal year at the Lawton airport station, according to NOAA. June is the wettest month at 3.98 inches.`,
      },
      {
        q: 'Can I get Quell shipped to Fort Sill?',
        a: `Quell ships to any US address from Brentwood, Tennessee, so use the address where your packages usually come, on post or off. Tracking comes by email, and no delivery date is promised.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-salinas-ca:
   * - https://data.rcc-acis.org/StnData, sid SNS, NOAA 1991-2020 normals
   *   (raw: .daily-job/acis1119/SNS.json and .daily-job/e/acis1119/SNS-min.json).
   *   SALINAS AP, elev 73 ft. Annual precip 12.58 in (sum of months); Jan 2.63,
   *   Feb 2.42, Dec 2.12, Mar 2.06; Apr 0.95, May 0.38, Jun 0.07, Jul 0.01,
   *   Aug 0.03, Sep 0.05 (Jun-Sep 0.16), Oct 0.60. Normal highs Jan 62.3 F,
   *   Dec 61.6 F, Jul 70.7 F, Aug 72.4 F, Sep 74.4 F, Oct 73.7 F; normal lows
   *   Dec 40.6 F, Jan 41.6 F, Aug 55.5 F. Snowfall missing (M): not stated.
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figures.
   */
  {
    slug: 'dry-eye-relief-salinas-ca',
    title: 'Dry eye relief in Salinas, California',
    description:
      'Salinas gets about 12.6 inches of rain a year and almost none from June to September, under cool, breezy skies. NOAA’s numbers and dry eye relief.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Salinas means respecting a long, rainless summer that rarely feels hot. NOAA’s normals for Salinas Airport show about 12.6 inches of precipitation a year, only 0.16 inches of it from June through September, while July highs average just 70.7°F. Wear wraparound sunglasses in the valley breeze, keep vents off your face, and use a lubricating drop as its label directs. An eye doctor should check pain or vision changes.`,
      },
      { h: 'Salinas in NOAA’s climate normals' },
      {
        p: `Salinas Municipal Airport sits at about 73 feet on the southeast edge of the city, out among the fields. NOAA’s 1991 to 2020 climate normals for the station, published through the National Weather Service’s NOWData, give these figures:`,
      },
      {
        list: [
          `About 12.58 inches of precipitation in a normal year.`,
          `January is the wettest month at 2.63 inches, then February at 2.42 and December at 2.12.`,
          `June averages 0.07 inches, July 0.01, August 0.03 and September 0.05.`,
          `Normal highs run from 61.6°F in December to 74.4°F in September, and July averages only 70.7°F.`,
          `December and January nights average about 41°F.`,
        ],
      },
      {
        p: `The odd part is the calendar. September and October, not July, are the warmest months on average, and they come at the end of four months with almost no rain.`,
      },
      { h: 'Cool summers that are still dry' },
      {
        p: `Salinas summer days often start under a low gray ceiling that drifts in from Monterey Bay and burns back by midday, followed by a steady afternoon breeze up the valley. People reach for a sweatshirt and assume the air must be damp. Moisture in a morning cloud deck doesn’t fall as rain, though, and the record shows almost none from June through September. Moving air speeds evaporation from the tear film whether it feels warm or cool, so an afternoon walk along a windy field road can leave eyes scratchy in weather that feels mild.`,
      },
      {
        list: [
          `Keep sunglasses in the car for the afternoon breeze, not just for bright days.`,
          `Turn your back to a strong gust rather than squinting into it.`,
          `Give your eyes a few slow, complete blinks after time outside.`,
          `Plan long outdoor errands for the calmer morning hours when you can.`,
        ],
      },
      { h: 'Working the Salad Bowl' },
      {
        p: `The Salinas Valley is known as the Salad Bowl of the World for its lettuce and leafy greens, and much of the city’s work follows the harvest calendar: crews in the rows at first light, machine operators, truck drivers hauling to coolers, and the office staff who schedule all of it. Tilled ground that hasn’t seen rain since spring turns to fine dust under tires and boots, and the afternoon breeze carries it. Eye protection that wraps around the sides helps against both dust and wind. Keep a bottle of drops in a clean, closed pocket and wash your hands before using it. [Dry eyes for farmers](/guides/dry-eyes-for-farmers) has more for long days in the field.`,
      },
      { h: 'Rodeo week and September afternoons' },
      {
        p: `The California Rodeo Salinas fills the grounds every July, and the arena dirt that flies up from the horses ends up in the air around the stands. Sit higher up if you can, wear sunglasses, and resist rubbing your eyes with dusty hands. By September the valley reaches its warmest normal highs, about 74°F, after nearly four months without meaningful rain; football games, Oldtown street events and evenings on the patio all come with dry air that has gone months without a wash.`,
      },
      { h: 'Heated rooms in the wet season' },
      {
        p: `Winter is mild, with highs in the low 60s, yet nights near 41°F are cool enough to run the heat in many Salinas homes from December through February. Warming air without adding water lowers its relative humidity, and a wall heater or floor register blowing toward a bed or couch dries the eyes fastest. Point the airflow elsewhere and keep the bedroom a little cooler at night. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has room-by-room ideas.`,
      },
      { h: 'Driving Highway 68 and 101' },
      {
        p: `Many Salinas residents commute over Highway 68 to the Monterey Peninsula or up 101 toward San Jose. A long drive with the vent pointed at your face, sun low over the hills and few chances to look away from the road keeps blinking slow and evaporation fast. Close or redirect the vents nearest your eyes, use the recirculate setting with care so the windows don’t fog, and rest your eyes at stops. The same applies on race weekends at Laguna Seca, where dust and sun add to the drive.`,
      },
      { h: 'Reading Quell’s Drug Facts' },
      {
        p: `Quell is a preservative-free lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The panel lists its Uses as: {uses}. Its directions read: {directions}. The panel also says: {tip}.`,
      },
      {
        p: `The warnings section reads: {warnings}. On storage: {storage}. Salinas rarely gets hot enough to threaten that range, but a dark car parked in a field lot on a September afternoon can. The full label is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Salinas' },
      {
        p: `We ship from Brentwood, Tennessee, to Salinas, Prunedale, Castroville, Gonzales and any other US address. You don’t need an account to order. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You’ll get tracking by email, but no arrival date is promised, so reorder with a few days of drops still left. Unopened bottles can be refunded within {returnDays} days of delivery, and you keep them. More local details are on the [Salinas page](/eye-drops/salinas-ca) and the [California page](/eye-drops/state/california).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Lubricating drops handle ordinary dryness. If symptoms keep coming back or feel wrong, that’s a question for an exam, not a second bottle. The label is specific: {stopUse} Dust that won’t rinse out, pain, sudden blur or trouble in only one eye should be seen promptly. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists more.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Salinas, California get?',
        a: `About 12.58 inches a year at Salinas Airport, according to NOAA’s 1991 to 2020 normals. January is the wettest month at 2.63 inches, and July averages just 0.01 inches.`,
      },
      {
        q: 'What is the warmest month in Salinas?',
        a: `September. NOAA’s normals for Salinas Airport give September a normal high of 74.4°F, ahead of October at 73.7°F, while July averages only 70.7°F.`,
      },
      {
        q: 'Why do my eyes feel dry in Salinas when it’s cool and foggy?',
        a: `A cool, gray morning doesn’t mean wet air by afternoon. The station records almost no rain from June through September, and the afternoon breeze speeds evaporation from the tear film even when it feels mild.`,
      },
      {
        q: 'Does Quell ship to Salinas or Castroville?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to any US address, including Salinas and Castroville, with guest checkout and tracking by email. No arrival date is promised, so order ahead.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-jonesboro-ar:
   * - https://data.rcc-acis.org/StnData, sid JBR, NOAA 1991-2020 normals
   *   (raw: .daily-job/acis1119/JBR.json and .daily-job/e/acis1119/JBR-min.json).
   *   JONESBORO MUNICIPAL AP, elev 259 ft. Annual precip 48.51 in (sum of
   *   months); May 5.21, Apr 5.15, Mar 4.73; Jun 3.05 (driest), Sep 3.30,
   *   Aug 3.41. Normal highs Jan 46.8 F, Jun 89.6 F, Jul 91.2 F, Aug 90.0 F,
   *   Sep 84.2 F; normal lows Jan 30.5 F, Dec 33.4 F, Jul 72.3 F.
   *   Snowfall missing (M): not stated.
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figures.
   */
  {
    slug: 'dry-eye-relief-jonesboro-ar',
    title: 'Dry eye relief in Jonesboro, Arkansas',
    description:
      'Jonesboro gets about 48.5 inches of rain a year, and June is its driest month. NOAA’s Delta numbers, harvest dust, duck blinds and dry eye relief.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Jonesboro comes down to the farm calendar and indoor air. NOAA’s normals for Jonesboro Municipal Airport show about 48.5 inches of rain a year, yet June is the driest month, July highs average 91.2°F, and fall harvest fills the Delta air with dust. Wear wraparound eyewear outdoors, keep vents off your face, and use a lubricating drop as its label directs. An eye doctor should see pain or vision changes.`,
      },
      { h: 'Jonesboro’s weather on record' },
      {
        p: `Jonesboro Municipal Airport lies at about 259 feet on flat ground east of downtown, while much of the city spreads across Crowley’s Ridge, the long wooded rise that runs through it. NOAA’s 1991 to 2020 climate normals for that station, also available through the National Weather Service’s NOWData, show:`,
      },
      {
        list: [
          `About 48.51 inches of precipitation in a normal year.`,
          `Spring is wettest: May averages 5.21 inches, April 5.15 and March 4.73.`,
          `June is the driest month at 3.05 inches, with September at 3.30 and August at 3.41.`,
          `Normal highs reach 89.6°F in June, 91.2°F in July and 90.0°F in August.`,
          `January’s normal high is 46.8°F, with nights near 30.5°F.`,
        ],
      },
      {
        p: `The driest stretch lands in early summer, right as the heat builds, and the hot months run into a harvest season with long, dusty days in the fields.`,
      },
      { h: 'Delta fields and harvest dust' },
      {
        p: `Rice, soybeans and cotton cover the flat land around Jonesboro, and a lot of the region’s work follows those crops. Combines, grain carts and trucks on gravel roads throw up fine dust in late summer and fall, and cotton harvest adds lint to the air. Tractor and combine cabs help, but doors open and close from dawn to dusk, and the cab fan pulls in outside air. Eye protection that wraps around the sides keeps out more than ordinary glasses do. Rinse your hands before touching your face, and close your eyes for a few seconds when a gust sweeps across an open field. [Dry eyes for farmers](/guides/dry-eyes-for-farmers) has more on long seasons outdoors.`,
      },
      { h: 'Early summer: the driest month meets the heat' },
      {
        p: `June’s 3.05 inches may not sound dry, but it arrives as the normal high climbs toward 90°F and the sun is at its highest. Ground that was soggy in May firms up, and every car on a gravel road leaves a trail. Indoors, air conditioning starts its long season. Cooling pulls water from the air, and vents aimed at a desk or a driver’s face carry that dry air straight across the eye.`,
      },
      {
        list: [
          `Point dash vents at your chest and use the recirculate setting on dusty roads.`,
          `Ask whether an office vent over your desk can be angled away.`,
          `Wear sunglasses for yard work and errands, and take them on the lake.`,
          `Keep your eye drops in a bag you carry, not a car parked in the sun.`,
        ],
      },
      { h: 'Duck season in flooded timber' },
      {
        p: `Winter turns the Delta into duck country. Hunters leave before dawn for blinds in flooded rice fields and timber, sit for hours in cold, moving air, and scan the sky without blinking much. Wind across open water dries the eyes fast, and a heater in the blind dries them further. Glasses or a face mask that blocks the wind help, and so does looking down and blinking fully between flights. A bottle of drops kept in an inside pocket stays warmer than one in a bag on the floor. Our guide to [dry eyes on a hunting trip](/guides/dry-eyes-on-a-hunting-trip) covers more.`,
      },
      { h: 'Campus screens and winter heat' },
      {
        p: `Arkansas State University brings thousands of students and staff to long days at screens, and the medical and retail offices along the city’s main corridors add more desk work. Reading or working at a screen slows blinking, which gives the tear film more time to evaporate between blinks. Winter adds heated rooms: January nights average about 30.5°F, and furnaces and heat pumps run for weeks. Look up from the screen regularly, finish each blink, and keep heater vents pointed away from your chair. [Screens and your tear film](/guides/screens-and-your-tear-film) explains the blinking part.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives the Uses as: {uses}. Directions: {directions}. And while using it: {tip}.`,
      },
      {
        p: `The panel’s warning reads: {warnings}. On storage: {storage}. That range rules out a truck dashboard in July and a duck blind floor in January, so keep the bottle close to your body. Read the whole panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell to Jonesboro' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Jonesboro, Bono, Brookland, Paragould and any other US address. Checkout is as a guest. Shipping is {shipping}, or free when you order {freeBottles} or more bottles. Tracking arrives by email, but we don’t promise a delivery date, so order before duck season or harvest gets busy. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. Local details are on the [Jonesboro page](/eye-drops/jonesboro-ar) and the [Arkansas page](/eye-drops/state/arkansas).`,
      },
      { h: 'Signs you need an eye doctor' },
      {
        p: `A lubricating drop is for routine dryness. It can’t tell you why your eyes hurt or keep bothering you. The label is clear on that limit: {stopUse} Chaff, lint or grit that won’t rinse out, pain, changes in vision, or trouble in one eye only needs a prompt exam. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has a longer list.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Jonesboro, Arkansas?',
        a: `June, at 3.05 inches in NOAA’s 1991 to 2020 normals for Jonesboro Municipal Airport. September follows at 3.30 inches and August at 3.41.`,
      },
      {
        q: 'How much rain does Jonesboro get a year?',
        a: `About 48.51 inches in a normal year at Jonesboro Municipal Airport, according to NOAA. May is the wettest month at 5.21 inches.`,
      },
      {
        q: 'Why do my eyes get dry during harvest?',
        a: `Combines, trucks and wind lift fine dust and plant debris off dry fields, and moving air pulls moisture from the tear film. Close-fitting eye protection and clean hands before touching your eyes both help.`,
      },
      {
        q: 'Can I get Quell delivered in Jonesboro?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Jonesboro and the rest of the US, with guest checkout and email tracking. No delivery date is promised, so order before you run low.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-fayetteville-ar:
   * - https://data.rcc-acis.org/StnData, sid FYV, NOAA 1991-2020 normals
   *   (raw: .daily-job/acis1119/FYV.json and .daily-job/e/acis1119/FYV-min.json).
   *   FAYETTEVILLE DRAKE FIELD, elev 1237 ft. Annual precip 46.96 in (sum of
   *   months); May 5.89, Apr 5.01; Feb 2.56 (driest), Jan 2.75, Dec 3.07
   *   (Dec-Feb 8.38), Aug 3.17. Annual snowfall 6.5 in (sum of months): Jan 1.5,
   *   Feb 2.4, Mar 1.3, Nov 0.2, Dec 1.1. Normal highs Jan 47.7 F, Jul 89.2 F,
   *   Aug 89.0 F; normal lows Jan 25.1 F, Feb 28.5 F, Dec 27.8 F, Jul 66.5 F.
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figures.
   */
  {
    slug: 'dry-eye-relief-fayetteville-ar',
    title: 'Dry eye relief in Fayetteville, Arkansas',
    description:
      'Fayetteville’s winters bring its driest months and January nights near 25°F. NOAA’s Ozark numbers, greenway rides, game days and dry eye relief.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Fayetteville is mostly a winter job. NOAA’s normals for Drake Field put the driest months in December, January and February, with January nights averaging about 25°F, so furnaces run hard while the outdoor air is at its driest. Block the wind on rides and hikes, keep heat vents off your face, blink fully during study and screen time, and use a lubricating drop as its label directs. Pain or vision changes need an eye doctor.`,
      },
      { h: 'Fayetteville in NOAA’s records' },
      {
        p: `Drake Field is Fayetteville’s own municipal airport, south of town at about 1,237 feet in the Ozark hills; the region’s airline airport is farther north. NOAA’s 1991 to 2020 climate normals for Drake Field, as published through the National Weather Service’s NOWData, give these figures:`,
      },
      {
        list: [
          `About 46.96 inches of precipitation in a normal year.`,
          `May is the wettest month at 5.89 inches, and April averages 5.01.`,
          `February is the driest at 2.56 inches, followed by January at 2.75 and December at 3.07.`,
          `Normal snowfall is about 6.5 inches, most of it in February (2.4 inches) and January (1.5).`,
          `January nights average 25.1°F, and July highs reach 89.2°F.`,
        ],
      },
      {
        p: `That puts Fayetteville’s dry season in winter rather than late summer, and it lines up with the coldest nights of the year. Cold, dry air outside and heated air inside work on the tear film together.`,
      },
      { h: 'Winter in the Ozark hills' },
      {
        p: `With normal lows in the mid-20s in January and below 30°F in December and February, heating systems in Fayetteville run for weeks without much of a break. Warmed air holds the same amount of water as when it was cold, which leaves its relative humidity low, and the tear film evaporates faster in it. Older houses on the hills around Mount Sequoyah and Wilson Park often have floor registers placed right beside beds and reading chairs. A deflector, a rearranged chair or a lower thermostat at night helps. So does a room humidifier, cleaned as its maker directs.`,
      },
      {
        list: [
          `Keep heater airflow off your face at home, in the office and in the car.`,
          `On a snowy morning, wear sunglasses outside; light off snow makes people squint.`,
          `Hold the bottle inside a coat pocket, not in a car parked on a hillside street through a night in the 20s.`,
          `Our guide on [how to protect your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) covers the outdoor side.`,
        ],
      },
      { h: 'Riding the Razorback Greenway' },
      {
        p: `The Razorback Regional Greenway runs north from Fayetteville through Springdale, Rogers and Bentonville, and plenty of people ride it to work or for long weekend miles. Speed creates its own wind, and a cold descent in January or a long, sunny climb in July both dry the eyes quickly. Cycling glasses that wrap around the sides cut the airflow more than flat lenses do. At stops, close your eyes for a few seconds and blink slowly before setting off again. Mountain bikers on the trails at Kessler Mountain or Centennial Park meet dust as well as wind in the drier months.`,
      },
      { h: 'Game days, Dickson Street and campus life' },
      {
        p: `The University of Arkansas sets the city’s rhythm. Fall Saturdays mean hours in the stands with sun, wind and grill smoke drifting from tailgates; winter nights mean a crowded, heated arena. Students spend late nights reading and writing at screens, which slows blinking, in dorms and libraries heated against January cold. Looking away from the screen now and then and finishing each blink helps more than people expect. [Dry eyes while studying](/guides/dry-eyes-while-studying) lays out a routine for exam weeks.`,
      },
      { h: 'Spring storms and summer haze' },
      {
        p: `From March into June the rain comes back, with May averaging nearly 6 inches, and the outside air turns much kinder to the eyes. Summer brings highs near 89°F and the long season of air conditioning, along with afternoons on Beaver Lake or the Buffalo National River. Glare off water, wind across a boat and car vents aimed at your face are the summer versions of the same problem. Wraparound sunglasses and redirected vents handle most of it.`,
      },
      { h: 'Quell’s Drug Facts, in its own words' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its panel lists the Uses as: {uses}. The directions say: {directions}. A rule for every use: {tip}.`,
      },
      {
        p: `The warnings section says: {warnings}. For storage: {storage}. A January night in a parked car can fall below that range, and a July afternoon can climb above it, so the bottle travels better in a bag or pocket. Every line of the panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Fayetteville' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Fayetteville, Farmington, Prairie Grove, Greenland and every other US address. You don’t need an account. Shipping costs {shipping}, and an order of {freeBottles} or more bottles ships free. A tracking email follows, but we don’t promise a delivery date, so students heading home for break should order before they leave town. Unopened bottles can be refunded within {returnDays} days of delivery, and nothing goes back in the mail. See the [Fayetteville page](/eye-drops/fayetteville-ar) and the [Arkansas page](/eye-drops/state/arkansas) for more.`,
      },
      { h: 'When to get an eye exam' },
      {
        p: `A lubricating drop is meant for routine dryness. It doesn’t replace an exam when something feels wrong. The label puts it plainly: {stopUse} Eye pain, blur that won’t clear, strong sensitivity to light, or a problem in one eye only should go to an eye doctor, who can find the cause and decide what to do. The [self-check](/self-check) can help you organize what you’ve noticed; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Fayetteville, Arkansas?',
        a: `February, at 2.56 inches of precipitation in NOAA’s 1991 to 2020 normals for Drake Field. January averages 2.75 inches and December 3.07.`,
      },
      {
        q: 'How much snow does Fayetteville, Arkansas get?',
        a: `About 6.5 inches in a normal year at Drake Field, according to NOAA’s 1991 to 2020 normals. February averages the most, at 2.4 inches.`,
      },
      {
        q: 'How cold does Fayetteville, AR get in January?',
        a: `NOAA’s normals for Drake Field give January a normal low of 25.1°F and a normal high of 47.7°F, which keeps heating systems running through much of the winter.`,
      },
      {
        q: 'Can I order Quell to a University of Arkansas address?',
        a: `Quell ships from Brentwood, Tennessee, to any US address, so a Fayetteville apartment or home address works. Check that your building accepts packages, since no delivery date is promised.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-st-joseph-mo:
   * - https://data.rcc-acis.org/StnData, sid STJ, NOAA 1991-2020 normals
   *   (raw: .daily-job/acis1119/STJ.json and .daily-job/e/acis1119/STJ-min.json).
   *   ST JOSEPH ROSECRANS MEMORIAL AP, elev 807 ft. Annual precip 34.76 in (sum
   *   of months); Jan 0.71, Feb 0.95, Dec 1.25 (Dec-Feb 2.91), Nov 1.87; May
   *   4.87, Jun 4.75, Jul 4.73. Normal highs Jan 37.4 F, Dec 41.1 F, Jul 88.1 F;
   *   normal lows Jan 17.1 F, Feb 21.2 F, Dec 21.1 F, Jul 67.3 F.
   *   Snowfall missing (M): not stated.
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figures.
   */
  {
    slug: 'dry-eye-relief-st-joseph-mo',
    title: 'Dry eye relief in St. Joseph, Missouri',
    description:
      'January in St. Joseph averages 0.71 inches of precipitation and nights near 17°F. NOAA’s numbers for the river city, and everyday dry eye relief.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in St. Joseph is mostly a matter of getting through a cold, dry winter. NOAA’s normals for Rosecrans Memorial Airport give January just 0.71 inches of precipitation and nights averaging about 17°F, so heaters, defrosters and bitter wind all work on the eyes at once. Keep warm air off your face, cover your eyes outdoors, and use a lubricating drop as its label directs. See an eye doctor for pain or vision changes.`,
      },
      { h: 'St. Joseph’s climate in NOAA’s normals' },
      {
        p: `Rosecrans Memorial Airport sits at about 807 feet in the Missouri River bottoms on the west side of St. Joseph, below the bluffs that hold most of the city. NOAA’s 1991 to 2020 climate normals for the station, published through the National Weather Service’s NOWData, show a city with two sharply different halves of the year:`,
      },
      {
        list: [
          `About 34.76 inches of precipitation in a normal year.`,
          `January averages 0.71 inches, February 0.95 and December 1.25, under 3 inches for the three months combined.`,
          `May (4.87 inches), June (4.75) and July (4.73) are the wettest months.`,
          `January’s normal high is 37.4°F and its normal low 17.1°F.`,
          `July highs average 88.1°F, with nights near 67°F.`,
        ],
      },
      {
        p: `Winter here is both the driest and the coldest time of year, which is the hardest combination for the tear film. Summer is wetter, warmer and much easier on most people’s eyes.`,
      },
      { h: 'Why do my eyes feel so dry in a St. Joseph winter?' },
      {
        p: `Cold air can’t hold much water to begin with, and St. Joseph’s winter months bring very little precipitation on top of that. Once that air is pulled indoors and warmed from the teens to the upper 60s, its relative humidity drops sharply. Forced-air furnaces then blow it across rooms for most of the day and night. People notice it as gritty eyes on waking, a heat register blowing beside the reading chair, or a scratchy feeling by the end of a shift in a warm office.`,
      },
      {
        list: [
          `Turn floor and wall registers so warm air doesn’t hit your face in bed or at a desk.`,
          `Run a humidifier in the bedroom during the coldest weeks and keep it clean.`,
          `Set the thermostat a little lower at night so the furnace cycles less.`,
          `Read [dry eyes from forced-air heat](/guides/dry-eyes-from-forced-air-heat) for more fixes.`,
        ],
      },
      { h: 'Wind on the bluffs and the riverfront' },
      {
        p: `St. Joseph’s neighborhoods climb steep bluffs above the Missouri River, and the view from the top comes with exposure to winter wind. Walking along the riverfront, scraping a windshield on a hillside street or watching a game at the high school field puts cold, moving air straight into the eyes. That often makes them water, which people mistake for having plenty of moisture. Reflex tears don’t stay on the eye the way the normal tear film does. Wraparound sunglasses or a hat brim and a scarf pulled up help, and so does turning away from gusts instead of squinting into them.`,
      },
      { h: 'Plant shifts and cold storage' },
      {
        p: `Food processing and manufacturing plants are some of the area’s largest employers. Many of those jobs mean hours in chilled rooms with refrigeration fans, or on lines near hot equipment, and shift work that cuts into sleep. Both dry the eyes. If your job requires safety glasses, choose a close-fitting pair, and keep your drops in a clean pocket or locker rather than out on a work surface. Wash your hands before you use them. Our guide to [dry eyes for factory workers](/guides/dry-eyes-for-factory-workers) covers lines, fans and breaks in more detail.`,
      },
      { h: 'The drive down I-29' },
      {
        p: `A lot of St. Joseph residents commute to Kansas City or the airport north of it along I-29. In winter, the defroster blasts warm, dry air upward for the whole drive, and early sun off a snowy median makes people squint. Point the heat at the windshield and your feet, use sunglasses on bright mornings, and take a moment to blink and look around at stops. Summer brings the reverse: air conditioning aimed at your face on a long, flat drive.`,
      },
      { h: 'What Quell is and how the label says to use it' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel gives the Uses as: {uses}. Directions: {directions}. While using it: {tip}.`,
      },
      {
        p: `The panel’s warning: {warnings}. Storage: {storage}. With January nights near 17°F, a bottle left in a parked car will drop far below that range, so keep it in an inside coat pocket or in the house. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to St. Joseph' },
      {
        p: `We ship from Brentwood, Tennessee, to St. Joseph, Savannah, Wathena across the river in Kansas, and every other US address. Guest checkout is all it takes. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking arrives by email, but no delivery date is promised, and winter weather can slow any package, so order early. Unopened bottles can be refunded within {returnDays} days of delivery with nothing to return. The [St. Joseph page](/eye-drops/st-joseph-mo) and the [Missouri page](/eye-drops/state/missouri) have more.`,
      },
      { h: 'When dryness needs a doctor' },
      {
        p: `Drops are for ordinary, everyday dryness. They aren’t meant to find the reason symptoms keep coming back. The label sets the limit: {stopUse} Pain, changes in vision, sensitivity to light, or trouble in one eye only should be checked by an eye doctor. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) explains the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'How cold does St. Joseph, Missouri get in January?',
        a: `NOAA’s 1991 to 2020 normals for Rosecrans Memorial Airport give January a normal low of 17.1°F and a normal high of 37.4°F.`,
      },
      {
        q: 'What is the driest month in St. Joseph, MO?',
        a: `January, at 0.71 inches of precipitation in NOAA’s normals for Rosecrans Memorial Airport. February averages 0.95 inches and December 1.25.`,
      },
      {
        q: 'Why do my eyes water in the cold wind if they’re dry?',
        a: `Cold wind irritates the eye’s surface and sets off reflex tearing. Those tears run off instead of staying spread across the eye, so the dry feeling often returns once you’re back inside.`,
      },
      {
        q: 'Does Quell ship to St. Joseph, Missouri?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to St. Joseph and any other US address, with guest checkout and email tracking. No delivery date is promised, so order before you run low.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-lafayette-in:
   * - https://data.rcc-acis.org/StnData, sid LAF, NOAA 1991-2020 normals
   *   (raw: .daily-job/acis1119/LAF.json and .daily-job/e/acis1119/LAF-min.json).
   *   LAFAYETTE PURDUE UNIVERSITY AP, elev 596 ft. Annual precip 37.00 in (sum
   *   of months); Feb 1.78 (driest), Jan 2.19, Dec 2.29; Jun 4.56 (wettest),
   *   Jul 4.08, May 4.04. Normal highs Jan 33.4 F, Feb 38.0 F, Jul 83.8 F;
   *   normal lows Jan 18.2 F, Feb 21.4 F, Dec 23.8 F, Jul 63.4 F.
   *   Snowfall missing (M): not stated.
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figures.
   */
  {
    slug: 'dry-eye-relief-lafayette-in',
    title: 'Dry eye relief in Lafayette, Indiana',
    description:
      'Lafayette’s January highs average 33.4°F and February is its driest month. NOAA’s Purdue Airport numbers, campus screens and dry eye relief.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Lafayette and West Lafayette centers on winter and on screens. NOAA’s normals for Purdue University Airport give January a normal high of just 33.4°F and make February the driest month, so heated dorms, labs and homes dry the air while students and engineers stare at screens for hours. Keep heat off your face, take real screen breaks, and use a lubricating drop as its label directs. An eye doctor should check pain or vision changes.`,
      },
      { h: 'Greater Lafayette by the numbers' },
      {
        p: `Purdue University Airport sits at about 596 feet on the south side of the West Lafayette campus, across the Wabash River from downtown Lafayette. NOAA’s 1991 to 2020 climate normals for the station, as published through the National Weather Service’s NOWData, show:`,
      },
      {
        list: [
          `About 37.00 inches of precipitation in a normal year.`,
          `February is the driest month at 1.78 inches, with January at 2.19 and December at 2.29.`,
          `June is the wettest at 4.56 inches, followed by July at 4.08.`,
          `Normal highs run from 33.4°F in January to 83.8°F in July.`,
          `January nights average about 18°F, and December nights about 24°F.`,
        ],
      },
      {
        p: `The pattern is a cold, comparatively dry winter and a wetter, warm summer. For the eyes, the trouble months run from about November through March, when heating runs nearly nonstop.`,
      },
      { h: 'Winter on campus and in the labs' },
      {
        p: `Purdue’s calendar puts fall finals in December and the start of spring semester in January, the two coldest months of the year. That means long nights of problem sets, coding and reading in heated residence halls and libraries. Concentrating on a screen slows blinking, and each pause lets more of the tear film evaporate into warm, dry indoor air. Labs add their own airflow: fume hoods, clean benches and equipment fans all move air steadily past the face.`,
      },
      {
        list: [
          `Every so often, look across the room for a few seconds and blink fully.`,
          `Set the monitor a little below eye level so your lids cover more of the eye.`,
          `Keep a desk fan or space heater from blowing at your face.`,
          `Follow lab rules about eye protection, and store drops outside the lab’s work area.`,
        ],
      },
      {
        p: `Our guide to [dry eyes while studying](/guides/dry-eyes-while-studying) has a fuller routine for exam stretches.`,
      },
      { h: 'Flight training at the airport' },
      {
        p: `The same airfield that produces Lafayette’s weather records is busy with Purdue’s aviation students. Cockpits are small spaces with vents aimed at the pilot, and flying asks for steady visual scanning with long gaps between blinks. On the ground, preflight checks happen in whatever wind is crossing the ramp. Sunglasses for the walkaround, vents angled away from the eyes in flight, and deliberate blinks during cruise all help. Anyone with questions about using eye drops while flying should ask an aviation medical examiner. [Dry eyes after flying](/guides/dry-eyes-after-flying) covers the passenger side of air travel.`,
      },
      { h: 'Plant shifts and field work' },
      {
        p: `Outside the university, Greater Lafayette builds cars and other products, and much of Tippecanoe County is planted in corn and soybeans. Assembly lines bring fans, heat from equipment and repetitive close work; fieldwork brings spring wind across bare ground and fall harvest dust. Close-fitting eye protection, clean hands before touching your eyes and a bottle kept in a closed pocket go a long way in either place. [Dry eyes for factory workers](/guides/dry-eyes-for-factory-workers) looks closer at plant settings.`,
      },
      { h: 'Game days and the Wabash' },
      {
        p: `Football at Ross-Ade Stadium starts in the warm days of early fall and ends in November cold, with wind sweeping across the stands. Basketball moves inside to a packed, heated arena for the rest of winter. Along the Wabash Heritage Trail and the riverfront, cold wind off the water makes eyes water and then feel dry. Sunglasses and a scarf pulled up block a lot of it, and a few slow blinks once you’re out of the wind help the tear film spread again.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a preservative-free lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel states its Uses as: {uses}. Directions: {directions}. While using it: {tip}.`,
      },
      {
        p: `The panel also warns: {warnings}. On storage: {storage}. A car left parked through a January night falls well below that range, so keep the bottle in your backpack or room. All of it is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Lafayette or West Lafayette' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Lafayette, West Lafayette, Battle Ground, Dayton and the rest of the US. Ordering doesn’t require an account. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You’ll get an email with tracking, but no delivery date is promised, so order before break if you’re heading home. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. See the [Lafayette page](/eye-drops/lafayette-in) and the [Indiana page](/eye-drops/state/indiana).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A lubricating drop is for plain, everyday dryness. It can’t sort out what’s behind symptoms that keep coming back. The label says when to stop: {stopUse} Pain, blurred vision that blinking doesn’t clear, a chemical splash in the lab, or trouble in one eye only should be seen promptly. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists more.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Lafayette, Indiana get in January?',
        a: `NOAA’s 1991 to 2020 normals for Purdue University Airport give January a normal high of 33.4°F and a normal low of 18.2°F.`,
      },
      {
        q: 'What is the driest month in Lafayette, IN?',
        a: `February, at 1.78 inches of precipitation in NOAA’s normals for Purdue University Airport. January averages 2.19 inches and December 2.29.`,
      },
      {
        q: 'Why do my eyes get so dry in Purdue dorms in the winter?',
        a: `Heated winter air has low relative humidity, and long screen sessions slow blinking, so the tear film evaporates faster. Moving heat vents away from your face and taking real screen breaks both help.`,
      },
      {
        q: 'Can I get Quell shipped to West Lafayette?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to West Lafayette and any other US address, with guest checkout and tracking by email. No delivery date is promised, so plan around breaks.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-19 for dry-eye-relief-decatur-il:
   * - https://data.rcc-acis.org/StnData, sid DEC, NOAA 1991-2020 normals
   *   (raw: .daily-job/acis1119/DEC.json and .daily-job/e/acis1119/DEC-min.json).
   *   DECATUR AP, elev 673 ft. Annual precip 36.36 in (sum of months); Feb 1.84
   *   (driest), Jan 1.99, Dec 2.12; May 4.38, Jun 4.38 (wettest), Apr 3.66.
   *   Normal highs Jan 34.7 F, Jul 85.8 F, Aug 84.3 F; normal lows Jan 20.1 F,
   *   Feb 23.4 F, Dec 25.2 F, Jul 65.6 F. Snowfall missing (M): not stated.
   * - Station not in relhum23.txt or wndspd23.txt: no humidity or wind figures.
   */
  {
    slug: 'dry-eye-relief-decatur-il',
    title: 'Dry eye relief in Decatur, Illinois',
    description:
      'Decatur averages about 36 inches of precipitation a year, with February its driest month. NOAA’s numbers, grain dust, plant shifts and dry eye relief.',
    category: 'local',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Dry eye relief in Decatur depends on the season and the job. NOAA’s normals for Decatur Airport make February the driest month, with January nights near 20°F that keep heat running, while planting and harvest send dust across the prairie and plant work adds fans and long shifts. Wear close-fitting eye protection, keep vents off your face, and use a lubricating drop as its label directs. An eye doctor should check pain or vision changes.`,
      },
      { h: 'Decatur’s weather in NOAA’s normals' },
      {
        p: `Decatur Airport sits at about 673 feet on the flat farmland east of the city. NOAA’s 1991 to 2020 climate normals for that station, available through the National Weather Service’s NOWData, describe a typical central Illinois year:`,
      },
      {
        list: [
          `About 36.36 inches of precipitation in a normal year.`,
          `February is the driest month at 1.84 inches, then January at 1.99 and December at 2.12.`,
          `May and June tie as the wettest, each averaging 4.38 inches.`,
          `January’s normal high is 34.7°F and its normal low 20.1°F.`,
          `July highs average 85.8°F, with nights near 66°F.`,
        ],
      },
      {
        p: `The dry, cold months sit at the start of the year, when furnaces run hardest, and the busiest outdoor seasons for farm work come at each end of the growing season.`,
      },
      { h: 'Soybean country: planting and harvest dust' },
      {
        p: `Decatur calls itself the Soybean Capital of the World, and the fields around Macon County are planted in soybeans and corn. In spring, wind crosses bare, freshly worked ground before the crop covers it. In fall, combines and grain trucks raise dust and chaff from dry fields and gravel roads, and grain elevators and loading areas add their own fine dust. Anyone working in that air, or driving behind it on a county road, gets some of it in their eyes.`,
      },
      {
        list: [
          `Wear eye protection that seals around the sides during harvest and grain handling.`,
          `Keep tractor and truck cab filters in good shape, and close the windows on dusty roads.`,
          `Rinse your hands and face before touching your eyes after work.`,
          `Our guide to [dry eyes for farmers](/guides/dry-eyes-for-farmers) covers long field days.`,
        ],
      },
      { h: 'Plant floors and shift work' },
      {
        p: `Decatur is also a factory town, with large grain-processing plants and heavy-equipment manufacturing among its biggest employers. Those settings bring heat from processing lines, big ventilation fans, welding and grinding areas, and rotating shifts that cut into sleep. Each of those dries or irritates the eyes in its own way. Use the eye protection your job requires, keep it close-fitting, and store your drops in a locker or a clean, closed pocket instead of on a dusty bench. Wash up before you use them.`,
      },
      { h: 'Farm Progress Show week' },
      {
        p: `The Farm Progress Show comes to Decatur’s Progress City grounds every other year at the end of summer, and it means long days walking open lots among equipment demonstrations, often in sun and wind on dry ground. Wraparound sunglasses, a hat with a brim and a break in the shade every so often help. Keep the bottle in a bag rather than a hot car in the parking field.`,
      },
      { h: 'Winter by Lake Decatur' },
      {
        p: `January in Decatur averages a high of 34.7°F and a low near 20°F. Cold wind across Lake Decatur, Nelson Park and the open stretches of town makes eyes water and then feel dry once you’re inside. Indoors, furnaces heat dry air and blow it across rooms. Turn registers away from beds and chairs, consider a humidifier in the bedroom, and keep the car’s heat aimed at the windshield and your feet. [Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more.`,
      },
      { h: 'Classrooms and offices' },
      {
        p: `Students and staff at Millikin University and Richland Community College, and the many people working in offices and hospitals, spend hours at screens in heated or air-conditioned rooms. Blinking slows while you concentrate, which lets the tear film evaporate. Looking away now and then and finishing each blink help. So does pointing a desk fan or space heater away from your face.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists the Uses as: {uses}. It directs: {directions}. Keep it clean: {tip}.`,
      },
      {
        p: `The panel cautions: {warnings}. On storage: {storage}. A truck cab in August and a car parked through a January night both move outside that range, so carry the bottle with you. See the whole label on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Decatur' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Decatur, Mount Zion, Forsyth, Maroa and any other US address. You can check out as a guest. Shipping is {shipping}, or free on {freeBottles} or more bottles. We send tracking by email but don’t promise a delivery date, so order ahead of harvest or a run of long shifts. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. Local details are on the [Decatur page](/eye-drops/decatur-il) and the [Illinois page](/eye-drops/state/illinois).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A lubricating drop handles ordinary dryness. It isn’t a substitute for an exam when something seems wrong. The label says when to stop: {stopUse} Grain dust or metal that won’t rinse out, pain, changes in vision or a problem in one eye only should be seen promptly. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has a longer list.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Decatur, Illinois?',
        a: `February, at 1.84 inches of precipitation in NOAA’s 1991 to 2020 normals for Decatur Airport. January averages 1.99 inches and December 2.12.`,
      },
      {
        q: 'How cold does Decatur, IL get in winter?',
        a: `NOAA’s normals for Decatur Airport give January a normal high of 34.7°F and a normal low of 20.1°F. December and February nights average in the mid-20s or lower.`,
      },
      {
        q: 'Can grain dust make my eyes feel dry?',
        a: `Dust and chaff irritate the eye’s surface, and the wind that carries them speeds evaporation from the tear film. Close-fitting eye protection and clean hands before touching your eyes both help.`,
      },
      {
        q: 'Does Quell deliver to Decatur, Illinois?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Decatur and the rest of the US, with guest checkout and email tracking. No delivery date is promised, so reorder before you run out.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-for-social-media-managers',
    title: 'Dry eyes for social media managers',
    description:
      'Scrolling feeds, editing posts and chasing notifications on two screens slows blinking. Why social media work dries the eyes, and habits that help.',
    category: 'using',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Social media managers get dry eyes because the job is almost nonstop close screen work: scrolling feeds, editing posts on a laptop and answering comments on a phone, often switching between them every few minutes. Concentration slows blinking, and the tear film evaporates between blinks. Schedule real breaks into the content calendar, cut nonessential notifications, keep the phone at a comfortable height, and use a lubricating drop as its label directs.`,
      },
      { h: 'Why scrolling is hard on the tear film' },
      {
        p: `Each blink spreads a fresh layer of tears over the eye. When you focus on a screen, especially a small one held close, blinks come less often and many of them stop short of closing all the way. Between those incomplete blinks, the tear film thins and the eye surface starts to feel dry, gritty or tired. Scrolling a feed is a particularly steady kind of focus: there’s always one more post, and the motion keeps your eyes locked on the glass. [How blinking spreads tears](/guides/how-blinking-spreads-tears) explains the mechanics.`,
      },
      {
        p: `Social media work stacks several of these screens. A typical hour might include drafting captions in a scheduling tool, checking a mobile preview, scanning a competitor’s feed, watching a video edit, and replying to a dozen messages. None of those tasks feels long, so breaks never seem necessary, and the total time on screens ends up far longer than any other desk job’s.`,
      },
      { h: 'The phone and the laptop at once' },
      {
        p: `Many social managers work with a laptop open and a phone in hand, glancing between them. The phone tends to sit low in the lap, and the laptop screen sits below eye level, which keeps your neck bent but at least lets the lids cover more of the eye. A second monitor raised too high does the opposite and leaves more of the eye exposed to air. Try these adjustments:`,
      },
      {
        list: [
          `Put your main monitor at or slightly below eye level, about an arm’s length away.`,
          `Use a phone stand for checking mobile previews instead of holding the phone close to your face.`,
          `Turn up text size in the scheduling dashboard so you aren’t leaning in.`,
          `Keep the desk fan and air vents from blowing across your face.`,
        ],
      },
      { h: 'Notifications and the always-on feeling' },
      {
        p: `Brand accounts don’t close at 5 p.m., and many managers keep alerts on for every comment and mention so nothing gets missed. Each ping pulls your eyes back to a screen, often right when they were resting. Silence what isn’t urgent and batch the rest. Most platforms and phones let you set quiet hours, limit alerts to direct messages and mentions, and route everything else into a scheduled check. If your team has an after-hours rotation for urgent issues, that gives everyone else permission to look away.`,
      },
      {
        p: `Late-night checking in a dark bedroom deserves its own warning: the screen becomes the only thing you look at, blinking drops further, and the eyes feel worse in the morning. [Dry eyes from looking at your phone in bed](/guides/dry-eyes-from-looking-at-your-phone-in-bed) has ideas for breaking that habit.`,
      },
      { h: 'Building eye breaks into the content calendar' },
      {
        p: `If the calendar runs your day, put your eyes on it. Breaks that are scheduled happen; breaks you plan to take “when things calm down” don’t. A simple routine:`,
      },
      {
        list: [
          `After each post goes live, look out a window or across the room for half a minute and blink slowly several times.`,
          `Between batches of comment replies, close your eyes for a few seconds before opening the next thread.`,
          `Take one longer break away from all screens mid-morning and mid-afternoon.`,
          `Review analytics on a large monitor rather than squinting at a phone.`,
          `End the day by turning off work notifications, not by scrolling one last time.`,
        ],
      },
      { h: 'Filming, events and live coverage' },
      {
        p: `Not every day is at a desk. Covering a product launch, a conference or a game means filming stories, shooting photos and posting in real time, often under bright stage lights or outdoors in wind. Ring lights and phone screens at full brightness add glare. Step out of the lights between segments, blink fully before you start recording, and keep sunglasses handy for outdoor shoots. A small bag with your charger, a backup battery and your eye drops covers most event days.`,
      },
      { h: 'Using drops around a posting schedule' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives the Uses as: {uses}. The directions: {directions}. Three times a day fits neatly around a work schedule: before you open the laptop, at lunch, and when you log off. Keep the bottle clean, too: {tip}.`,
      },
      {
        p: `If you put a drop in right before filming, give your eyes a moment to settle and your vision a chance to clear before you hit record. Keep the bottle in a bag rather than a hot car between shoots; the panel says: {storage}. And check one line before you start: {doNotUse}. The full panel is on the [Drug Facts page](/drug-facts). Quell ships from Brentwood, Tennessee, to any US address, with guest checkout and tracking by email; you can [order from the home page](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Screen dryness that goes away with breaks is common. Dryness that doesn’t, or symptoms that come with pain or blurred vision, is a different matter. The label sets the line: {stopUse} An eye doctor can find the cause and decide what to do. The [self-check](/self-check) can help you describe your symptoms before an appointment; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why do social media managers get dry eyes?',
        a: `The work keeps your eyes on screens for most of the day, and focused screen use slows blinking and makes blinks less complete. The tear film evaporates between blinks, which leaves eyes feeling dry or gritty.`,
      },
      {
        q: 'Does scrolling on your phone make your eyes dry?',
        a: `It can. Scrolling holds your focus on a small, close screen, so you blink less often and less fully. Looking away regularly and blinking slowly a few times gives the tear film a chance to spread again.`,
      },
      {
        q: 'How do I take screen breaks when I manage social media accounts?',
        a: `Tie breaks to events in your day, like each post going live or each batch of replies. Silence nonessential notifications and set quiet hours so your eyes get real rest between checks.`,
      },
      {
        q: 'Can I put in eye drops right before filming a video?',
        a: `You can follow the label’s directions at any point in your day. Give your eyes a moment afterward and wait until your vision is clear before you start recording.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-for-parking-attendants',
    title: 'Dry eyes for parking attendants',
    description:
      'Heated booths, garage air and windy open lots all dry the eyes. What parking attendants and valets can change on each shift, and what the label says.',
    category: 'using',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Parking attendants get dry eyes from three directions: a small booth with a heater blowing at the window, garage air full of exhaust and dust, and open lots where wind, sun and glare off windshields never let up. Point the heater at your legs, wear wraparound sunglasses outdoors, wash your hands before touching your eyes, and use a lubricating drop as its label directs. Pain or vision changes need an eye doctor.`,
      },
      { h: 'Inside the booth: heaters and fans' },
      {
        p: `A parking booth is a tiny room with one job: keep the attendant comfortable through long hours in all weather. In winter, a space heater runs constantly, often aimed straight at the person on the stool. In summer, a fan or wall unit pushes air across the same small space. Either way, air moves across your face for most of a shift, and moving air carries moisture off the tear film quickly. The window you keep looking through also faces headlights, sun and the screen of the payment terminal.`,
      },
      {
        list: [
          `Aim the space heater at your feet and legs, not your chest or face.`,
          `Point a summer fan at the wall or your back so it moves air without hitting your eyes.`,
          `Close the service window between cars when you can, so outside drafts don’t blow through.`,
          `Read [dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) for more on small heated rooms.`,
        ],
      },
      { h: 'Garage air: exhaust, dust and ventilation' },
      {
        p: `Parking garages trap exhaust from idling cars, and big ventilation fans keep it moving. Tires grind dust from concrete and grit tracked in from the road, and that dust drifts on the same currents. For attendants who walk levels, direct traffic at the entry ramp or check permits row by row, that means hours in air that irritates the eyes and keeps them drying. Stay out of the path of exhaust when cars line up at the gate, step back from the big fans, and take breaks somewhere with fresher air when you can.`,
      },
      { h: 'Open lots in wind, sun and cold' },
      {
        p: `Surface lots offer no shelter at all. Attendants at stadiums, airports, hospitals and shopping centers stand in the wind for hours, squinting into low sun and glare off rows of windshields. In winter, cold wind makes eyes water, and that watering gives way to dryness once you warm up again. In summer, sun and heat bounce off the pavement.`,
      },
      {
        list: [
          `Wear wraparound sunglasses; they block wind from the sides as well as glare.`,
          `Add a hat with a brim for low morning and evening sun.`,
          `Turn your back to gusts instead of squinting into them.`,
          `On cold nights, pull a scarf or neck gaiter up and follow tips in [how to protect your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind).`,
        ],
      },
      { h: 'Valet and event parking' },
      {
        p: `Valets jog between the stand and the lot, climb into cars with the air or heat still blasting from the last driver’s settings, and drive with every vent pointed somewhere different. Turn a vent away from your face before you pull out, even for a short drive. Event parking adds headlights in your eyes after dark as hundreds of cars arrive at once, and dust thrown up from gravel or grass overflow lots. A quick pause between cars to close your eyes and blink slowly helps the tear film recover.`,
      },
      { h: 'Hands, cash and touching your eyes' },
      {
        p: `Attendants handle cash, cards, tickets, keys and payment terminals touched by hundreds of people. Rubbing an itchy or dry eye with those hands puts grime right where you don’t want it. Keep hand sanitizer or wipes in the booth, and wash your hands with soap before using drops or touching your eyes. If dust or grit gets into an eye and won’t blink out, rinse it with clean water and get help if it still feels like something is there.`,
      },
      { h: 'Carrying and using drops on a shift' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label gives the Uses as: {uses}. Directions: {directions}. That schedule fits a shift well: one at the start, one at your break, and one when you clock out. The label also says: {tip}.`,
      },
      {
        p: `Storage matters in a booth. The label says: {storage}. A booth can get hot in the summer sun and cold through the night when the heater is off, so keep the bottle in a jacket or bag you carry home rather than leaving it in a drawer. Read everything on the [Drug Facts page](/drug-facts). Quell ships from Brentwood, Tennessee, to any US address; there’s no account to set up, and orders of {freeBottles} or more bottles ship free.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Booth heat and windy lots can dry anyone’s eyes, but they shouldn’t cause pain or changes in your vision. The label is direct: {stopUse} Something stuck in the eye that rinsing doesn’t remove, or a problem in one eye only, should be checked promptly. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers what to watch for.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry in a parking booth?',
        a: `A booth heater or fan keeps air moving across your face through the whole shift, which speeds evaporation from the tear film. Aiming the heater at your legs and keeping the window closed between cars helps.`,
      },
      {
        q: 'Why do my eyes burn in a parking garage?',
        a: `Garages hold exhaust from idling cars and dust ground from concrete, and ventilation fans keep both moving. That air irritates the eyes, so step out of exhaust lines and take breaks somewhere with fresher air.`,
      },
      {
        q: 'Should parking attendants wear sunglasses?',
        a: `Outdoors, wraparound sunglasses help a lot. They cut glare off windshields and pavement and block wind from the sides, which slows drying.`,
      },
      {
        q: 'Where should a parking attendant keep eye drops?',
        a: `In a jacket or bag you take with you. A booth can get hotter or colder than the label’s storage range when the heater or sun changes, so don’t leave the bottle there between shifts.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-for-print-shop-workers',
    title: 'Dry eyes for print shop workers',
    description:
      'Paper dust, warm press rooms and hours checking color and proofs all dry the eyes. What print shop workers can do at the press and the bench.',
    category: 'using',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Print shop workers get dry eyes from paper dust thrown off cutters and folders, warm, dry air around presses and dryers, and long stretches of staring at proofs and color under bright lights. Wear close-fitting safety glasses around trimming and binding, keep fans off your face, blink deliberately during color checks, wash ink off your hands before touching your eyes, and use a lubricating drop as its label directs.`,
      },
      { h: 'Paper dust at the cutter and folder' },
      {
        p: `Guillotine cutters, trimmers, folders and collators all shed fine paper fibers and coating dust. Stacking and jogging paper throws up more. Much of it is too fine to see until it settles on the machines. It drifts at face height when you lean over the work, and it irritates the eye surface when it lands there. Eye protection that wraps around the sides catches more of it than ordinary glasses, and blowing dust off with compressed air near your face sends it straight at your eyes.`,
      },
      {
        list: [
          `Wear the safety glasses your shop requires, and pick a close-fitting pair.`,
          `Wipe down cutter and folder surfaces with a damp cloth rather than blowing them clean.`,
          `Step back from the machine before you rub your eyes, and wash your hands first.`,
          `If paper dust gets in an eye and won’t blink out, rinse with clean water.`,
        ],
      },
      { h: 'Warm, dry press rooms' },
      {
        p: `Presses, dryers, laminators and large-format printers produce heat, and press rooms often run warm. Exhaust fans, cooling fans on equipment and forced-air heat in winter all move air across the floor. Warm, moving air speeds evaporation from the tear film, so a long run at the press can leave eyes feeling scratchy by the end of a shift. Keep portable fans aimed at your body rather than your face, and stand to the side of equipment exhaust where you can.`,
      },
      { h: 'Checking color under bright lights' },
      {
        p: `Color matching is careful, unblinking work. Press operators and prepress staff compare sheets to proofs under bright, controlled lighting, lean in to look at registration and hold their gaze for long stretches. Concentration slows blinking, and each long stare lets the tear film thin. Make blinking part of the routine: blink fully a few times before each comparison, look away from the viewing area between sheets, and step out of the lights for a moment between jobs. A designer’s view of the same problem is in [dry eyes for graphic designers](/guides/dry-eyes-for-graphic-designers).`,
      },
      { h: 'Proofreading and loupes' },
      {
        p: `Checking small type, barcodes and fine detail with a loupe or magnifier puts your eye very close to the work and holds it still. Close one-eyed viewing often means the other eye squints while the viewing eye stares wide open. Switch eyes now and then, take your eye off the loupe between checks, and blink slowly a few times. The guide for [jewelers and watchmakers](/guides/dry-eyes-for-jewelers-and-watchmakers) covers loupe habits in more depth.`,
      },
      { h: 'Prepress screens and file checks' },
      {
        p: `Prepress work means hours at large monitors checking files, building imposition layouts and approving proofs on screen. That’s screen time just like any office job, and the same habits apply: put the monitor at or slightly below eye level, look away regularly, and keep the desk fan off your face. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why blinking slows at a monitor.`,
      },
      { h: 'Ink, solvents and clean hands' },
      {
        p: `Inks, cleaning solutions and press wash can leave residue on your hands and in the air near the press. Touching your eyes with those hands is a common way to get them irritated. Wash with soap before using drops or touching your face, and follow your shop’s safety data sheets for any product that requires eye protection or ventilation. If a chemical splashes into your eye, use the eyewash station right away and follow your workplace’s procedure; eye drops are not for that.`,
      },
      { h: 'Using Quell during a shift' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses as: {uses}. Directions: {directions}. Before a shift, at a break and after work is an easy pattern to remember. The panel also reminds you: {tip}.`,
      },
      {
        p: `Keep the bottle off the press, the cutter and any surface near ink or dust, and in a locker, a bag or a clean, closed pocket instead. For storage the label says: {storage}. Read the full panel on our [Drug Facts page](/drug-facts). Quell ships from Brentwood, Tennessee, to any US address, with guest checkout and tracking by email.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dry, tired eyes after a long run at the press are common. Pain, changing vision or debris that won’t rinse out are not. The label is clear: {stopUse} An eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has more warning signs.`,
      },
    ],
    faq: [
      {
        q: 'Can paper dust irritate your eyes?',
        a: `Yes. Cutting, folding and handling paper sheds fine fibers and coating dust that can land on the eye surface and irritate it. Close-fitting safety glasses and damp-wiping machines instead of blowing them clean both help.`,
      },
      {
        q: 'Why do my eyes get dry checking color at the press?',
        a: `Color checks mean long, focused stares under bright light, and focusing slows blinking. Blinking fully before each comparison and looking away between sheets gives the tear film a chance to spread again.`,
      },
      {
        q: 'Should I wear safety glasses in a print shop?',
        a: `Follow your shop’s rules, especially around cutters, binding equipment and chemicals. A close-fitting pair also blocks paper dust and fan air, which helps with dryness.`,
      },
      {
        q: 'Can I use eye drops if ink gets in my eye?',
        a: `No. A chemical or ink splash calls for the eyewash station and your workplace’s first aid procedure, followed by medical care if irritation continues. Lubricating drops are for everyday dryness, not splashes.`,
      },
    ],
  },

  {
    slug: 'christmas-gifts-for-a-sister',
    title: 'Christmas gifts for a sister',
    description:
      'Christmas gift ideas for a sister, matched to her life: screens, new babies, travel, reading or a first winter far from home, plus how to ship Quell.',
    category: 'seasonal',
    addedOn: '2026-11-19',
    body: [
      {
        p: `The easiest Christmas gift for a sister fits the life she’s living this year: something for the work she’s doing, the place she’s in, or the habit she keeps meaning to start. Think about where her days go, whether that’s screens, a new baby, a long commute or a cold apartment. If she mentions tired, dry eyes, a bottle of Quell shipped to her door can sit alongside a more personal present.`,
      },
      { h: 'Start with what her days look like' },
      {
        p: `Sisters are hard to shop for because you know them too well; anything generic feels like it misses. A good shortcut is to picture an ordinary Tuesday for her right now. Where does she spend the morning? What does she complain about? What does she do to unwind? A gift that makes one of those hours easier tends to be used and remembered longer than one aimed at a hobby she had in high school.`,
      },
      { h: 'For a sister who works on screens' },
      {
        p: `If her job means hours at a laptop, gifts that make the desk more comfortable go a long way:`,
      },
      {
        list: [
          `A laptop stand and a separate keyboard so the screen sits closer to eye level.`,
          `A desk lamp with a warm, adjustable light for late emails.`,
          `A small desk humidifier for a dry winter office.`,
          `A good mug or insulated tumbler that keeps coffee hot through a long meeting.`,
          `A bottle of lubricating eye drops if she’s mentioned dry or tired eyes at the end of the day.`,
        ],
      },
      {
        p: `Screen-heavy work slows blinking, which is why eyes feel dry by late afternoon. [Gifts for a coworker who works on screens](/guides/gifts-for-a-coworker-who-works-on-screens) has more ideas in the same vein.`,
      },
      { h: 'For a new mom or a busy parent' },
      {
        p: `A sister with a baby or small children has very little time and usually too many things. Think help rather than stuff: a meal delivery or a few frozen dinners you make yourself, an afternoon of babysitting written on a card, a cleaning visit, or a comfortable robe she won’t feel guilty wearing at 3 a.m. Late-night feeds and short sleep often leave eyes feeling dry and gritty, which is why some new parents keep lubricating drops on the nightstand. [Christmas gifts for new parents](/guides/christmas-gifts-for-new-parents) goes further.`,
      },
      { h: 'For a sister who travels' },
      {
        p: `If she’s always packing for work trips or planning the next vacation, practical travel gear gets used: packing cubes, a clear quart-size bag for liquids, a neck pillow, a portable charger or a good eye mask. Dry cabin air on long flights bothers many people’s eyes. A {size} bottle of Quell fits easily in her quart-size liquids bag.`,
      },
      { h: 'For a reader, a crafter or a homebody' },
      {
        p: `For the sister who would rather stay in, look at what she does in the evenings. A reading light for bed, a subscription to a magazine she used to love, nicer yarn or fabric than she would buy herself, a puzzle, or a cozy blanket all fit. If her reading or crafting means long sessions of close focus, those also slow blinking. Pair the gift with something that makes the room more comfortable, like a humidifier for a dry winter bedroom.`,
      },
      { h: 'For a sister who lives far away' },
      {
        p: `If you won’t see her at Christmas, shipping is half the gift. Order early, have it sent straight to her address, and send her a text that something is on the way so the box doesn’t sit on the porch. A video call while she opens it can mean more than the gift itself. Photos, a printed calendar of family pictures or a recipe book of family dishes travel well and land differently when you’re apart.`,
      },
      { h: 'Giving Quell to your sister' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label gives the Uses as: {uses}. It isn’t a surprise for everyone, so it makes more sense as a gift when she’s mentioned dry eyes herself. Before you order, check one line from the label with her: {warnings}.`,
      },
      {
        p: `To send it straight to her, put her name and address in the shipping fields and your own email at checkout; the tracking and receipts then come to you. Shipping is {shipping}, and {freeBottles} or more bottles ship free. We ship from Brentwood, Tennessee, to US addresses only and don’t promise a delivery date, so order well before the holidays. If the person who ordered asks within {returnDays} days of delivery, an unopened bottle can be refunded and doesn’t need to be sent back. [How to send Quell as a gift](/guides/sending-quell-as-a-gift) walks through it.`,
      },
      { h: 'Stocking stuffers for a sister' },
      {
        list: [
          `Good lip balm and hand cream for winter.`,
          `A favorite candy from when you were kids.`,
          `A small notebook and a pen she’ll actually like.`,
          `Hair ties, clips or a silk scrunchie.`,
          `A gift card for the coffee shop near her work.`,
          `A travel-size bottle of lubricating eye drops for her purse or desk drawer.`,
        ],
      },
    ],
    faq: [
      {
        q: 'What do you get your sister for Christmas?',
        a: `Something that fits her life right now: desk upgrades for a sister on screens, help and rest for a new mom, travel gear for a traveler, or a cozy addition to her evenings. Personal touches like family photos often mean the most.`,
      },
      {
        q: 'What is a good Christmas gift for a sister who lives far away?',
        a: `Pick something that ships well, order early, and send it straight to her address. A text when it’s on the way and a video call while she opens it make the gift feel shared.`,
      },
      {
        q: 'Is it odd to give your sister eye drops for Christmas?',
        a: `Not if she’s mentioned dry or tired eyes. It works well as a practical add-on beside a more personal gift, and checking the label’s egg and bird allergy caution with her first is a good idea.`,
      },
      {
        q: 'Can I ship Quell directly to my sister?',
        a: `Yes. Put her name and address in the shipping fields and your email at checkout, so tracking comes to you. Quell ships to US addresses only, and no delivery date is promised.`,
      },
    ],
  },

  {
    slug: 'christmas-gifts-for-a-brother',
    title: 'Christmas gifts for a brother',
    description:
      'Christmas gift ideas for a brother who games, works with his hands, drives a lot or spends winter outdoors, plus when eye drops make a fair add-on.',
    category: 'seasonal',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Good Christmas gifts for a brother usually solve a small, real annoyance in his week: a cold garage, a long drive, a late gaming night, a tool he keeps borrowing. Look at where he spends his free time and his working hours, then buy for that. If he’s complained about dry, tired eyes from screens, heaters or wind, a bottle of Quell shipped to his place makes a practical extra.`,
      },
      { h: 'Why brothers are hard to buy for' },
      {
        p: `Many brothers say they don’t need anything and then buy whatever they want the moment they want it. That leaves gifts that are useful but that he would never spend money on himself, upgrades to things he uses daily, and time spent together. Think of the item he’s been using for years past its prime, or the chore he puts off because it’s unpleasant.`,
      },
      { h: 'For a brother who games' },
      {
        p: `Long sessions mean long stretches of focus with few blinks, often in a dark room with a fan running. Practical gifts include a monitor light bar that brightens the wall behind the screen, a headset stand, a comfortable chair cushion, a controller charging dock, or a gift card for a game he’s mentioned. If he says his eyes burn after a late night, that’s the screen time talking. [Christmas gifts for a gamer](/guides/christmas-gifts-for-a-gamer) has a longer list.`,
      },
      { h: 'For a brother who works with his hands' },
      {
        p: `Whether he’s a tradesman or spends weekends rebuilding something in the garage, good gear is always welcome:`,
      },
      {
        list: [
          `Safety glasses that fit closely and don’t fog, since he’s likely using a scratched old pair.`,
          `A rechargeable work light or headlamp.`,
          `Insulated work gloves for a cold shop.`,
          `A quality tape measure, a bit set or a magnetic parts tray.`,
          `A shop stool on wheels for working on cars.`,
        ],
      },
      {
        p: `A garage heater blowing across a workbench dries the eyes, and so does dust from sanding or cutting. [Dry eyes in a heated garage or workshop](/guides/dry-eyes-in-a-heated-garage-workshop) explains why.`,
      },
      { h: 'For a brother who spends winter outdoors' },
      {
        p: `If he hunts, fishes, skis or just walks the dog in all weather, think warmth and wind protection. Wraparound sunglasses, a neck gaiter, hand warmers, a heated vest or a thermos all get used. Cold wind makes eyes water and then feel dry once he’s back inside, and a heater in a blind, an ice shanty or a truck dries them further. Our guide to [Christmas gifts for a hunter](/guides/christmas-gifts-for-a-hunter) covers the field gear side.`,
      },
      { h: 'For a brother on the road' },
      {
        p: `For a brother who commutes long distances or drives for work, small comforts add up: a phone mount that doesn’t wobble, a good travel mug, polarized sunglasses for low winter sun, a seat cushion, or a car vacuum. Car vents aimed at the face are one of the most common causes of dry eyes on the road; a gift that comes with a reminder to aim them at his chest costs nothing extra.`,
      },
      { h: 'Time together counts' },
      {
        p: `For brothers who live in different cities, a shared plan can beat any object: tickets to a game you go to together, a fishing trip in spring, a round of golf or a concert. Write the plan on a card and set the date in January so it actually happens. A framed photo from a family trip, or a print of an old picture of the two of you, often gets the biggest reaction of the day.`,
      },
      { h: 'Giving Quell to a brother' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists the Uses as: {uses}, and the directions: {directions}. Because it’s a practical item, it lands better as an extra than as the whole gift, and only if he’s mentioned his eyes. Check the label’s caution with him first: {warnings}.`,
      },
      {
        p: `You can ship it straight to him by entering his name and address for shipping and your email for the order emails. Shipping is {shipping}, or free on {freeBottles} or more bottles, and we ship from Brentwood, Tennessee, to US addresses only. No delivery date is promised, so order early in December. Read the label first on our [Drug Facts page](/drug-facts), and see [how to send Quell as a gift](/guides/sending-quell-as-a-gift) for the steps.`,
      },
      { h: 'Stocking stuffers for a brother' },
      {
        list: [
          `A multi-tool or a good pocketknife where legal.`,
          `Wool socks or hand warmers.`,
          `Beef jerky or hot sauce from a local maker.`,
          `A phone charging cable long enough to reach the couch.`,
          `A lens cloth and a case for his sunglasses.`,
          `A small bottle of eye drops for his truck console in mild months or his desk drawer.`,
        ],
      },
    ],
    faq: [
      {
        q: 'What do you get your brother for Christmas?',
        a: `Something that fixes a small, real annoyance in his week: better tools for a brother who works with his hands, comfort gear for a gamer, warm gear for an outdoorsman, or a plan to spend time together.`,
      },
      {
        q: 'What do you get a brother who says he doesn’t want anything?',
        a: `Upgrade something he uses every day but wouldn’t replace himself, like safety glasses, a work light or a travel mug, or give him a shared plan like tickets to a game you attend together.`,
      },
      {
        q: 'Is it okay to give a brother eye drops as a gift?',
        a: `It works if he’s mentioned dry or tired eyes, and goes over well as an add-on beside something more personal. Check the label’s egg and bird allergy caution with him before you order.`,
      },
      {
        q: 'Should I keep eye drops in a truck?',
        a: `The label says: {storage}. A truck cab in summer heat or winter cold can move outside that range, so keep the bottle in a pocket or bag instead.`,
      },
    ],
  },

  {
    slug: 'christmas-gifts-for-a-new-homeowner',
    title: 'Christmas gifts for a new homeowner',
    description:
      'A first winter in a new house means learning the furnace and finding out how dry the air gets. Christmas gifts for new homeowners that help with both.',
    category: 'seasonal',
    addedOn: '2026-11-19',
    body: [
      {
        p: `The most useful Christmas gifts for a new homeowner help with the first winter: a humidity monitor, a humidifier, register deflectors, furnace filters, a tool kit and a good flashlight. Forced-air heat often makes a new house drier than the owners expect, and dry eyes on winter mornings are a common surprise. A bottle of lubricating eye drops can round out a first-winter kit for someone who mentions it.`,
      },
      { h: 'The first winter in a new house' },
      {
        p: `Renters often never think about the furnace; somebody else handles it. New owners suddenly have to learn the filter size, figure out what the thermostat schedule does, and discover which rooms run cold and which registers blow hardest. They also learn how dry heated air can be. Warming cold winter air lowers its relative humidity, and a forced-air system pushes that air through every room, so lips crack, static builds up, and eyes feel gritty on waking. Gifts that make that winter easier get used immediately.`,
      },
      { h: 'Gifts for a dry house' },
      {
        list: [
          `A digital hygrometer, which shows indoor humidity so they know whether the air really is dry.`,
          `A bedroom humidifier, plus a note to clean it as its maker directs.`,
          `Magnetic or adjustable register deflectors that send warm air up the wall instead of across the bed or couch.`,
          `A set of furnace filters in the right size, once you’ve quietly checked what it is.`,
          `Houseplants that suit a bright window and winter heat.`,
        ],
      },
      {
        p: `If they wonder what number the hygrometer should show, [what humidity is good for dry eyes](/guides/what-humidity-is-good-for-dry-eyes) covers indoor humidity, and [dry eyes from forced-air heat](/guides/dry-eyes-from-forced-air-heat) explains how the system dries the room.`,
      },
      { h: 'Gifts for the toolbox' },
      {
        p: `Most first-time owners discover they need tools within the first week. A starter kit with a hammer, screwdrivers, pliers, an adjustable wrench, a tape measure and a level is welcome even if they already have a few odd pieces. A cordless drill, a stud finder, a step stool and a plunger are less exciting but get used constantly. Add safety glasses to the kit, since drilling overhead sends dust straight down.`,
      },
      { h: 'Gifts for safety' },
      {
        p: `Safety gear isn’t glamorous, but a new homeowner will thank you in a power outage. Ideas include rechargeable flashlights for each floor, a fire extinguisher for the kitchen, a carbon monoxide detector if the house burns gas, a first aid kit, and a weather radio. Put a battery bank in the stocking too, for charging phones when the power goes out.`,
      },
      { h: 'Gifts that make it feel like home' },
      {
        p: `Beyond the practical, think about the things that turn a house into theirs: a house number sign, a doormat, a framed print of the town or neighborhood, a cutting board engraved with the address, or a local restaurant gift card for the night they’re too tired to cook between unpacking boxes. An offer of your own time, like helping paint a room in January, counts as a gift too.`,
      },
      { h: 'A first-winter comfort kit' },
      {
        p: `A small basket can hold the dry-house items together. Fill it with a hygrometer, lip balm, a heavy hand cream, a pair of warm slippers, a throw blanket, and, if they’ve mentioned dry eyes in their new place, a bottle of lubricating drops. Include a note with simple tips: point registers away from the bed, turn the thermostat down a little at night, and run the humidifier in the bedroom.`,
      },
      { h: 'Adding Quell to the gift' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives the Uses as: {uses}. Directions: {directions}. Before you buy, check this caution with them: {warnings}. Point out the storage line too: {storage}. A garage or a car in a cold driveway can drop below that.`,
      },
      {
        p: `You can ship a bottle straight to their new address by putting their name and address in the shipping fields; your email gets the receipt and tracking. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We ship only to US addresses, from Brentwood, Tennessee, and don’t promise a delivery date, so order early and double-check the new address, since it may not be saved in your phone yet. See [how to send Quell as a gift](/guides/sending-quell-as-a-gift) for details.`,
      },
      { h: 'When dry eyes are more than a dry house' },
      {
        p: `A humidifier and redirected vents help with ordinary winter dryness. Pain, changes in vision or symptoms that don’t ease when the air improves are worth an eye doctor’s visit. The label says it directly: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists more.`,
      },
    ],
    faq: [
      {
        q: 'What do you get a first-time homeowner for Christmas?',
        a: `Practical things for the first winter and the first repairs: a hygrometer, a humidifier, furnace filters in the right size, a starter tool kit, flashlights and a fire extinguisher, plus something personal like a house number sign.`,
      },
      {
        q: 'Is a humidifier a good gift for a new homeowner?',
        a: `Often, yes. Forced-air heat dries indoor air in winter, and a bedroom humidifier helps with dry lips, static and gritty eyes on waking. Pair it with a hygrometer so they can see the humidity level.`,
      },
      {
        q: 'Why is my new house so dry in the winter?',
        a: `Heating cold outdoor air lowers its relative humidity, and a forced-air system circulates that dry air through every room. Many new owners notice it for the first time in their first winter.`,
      },
      {
        q: 'Can I send Quell to someone’s new address?',
        a: `Yes. Enter their name and new address in the shipping fields, and your email gets the receipt and tracking. Double-check the address, since Quell ships within the US only and no delivery date is promised.`,
      },
    ],
  },

  {
    slug: 'is-it-bad-to-use-eye-drops-when-you-dont-need-them',
    title: 'Is it bad to use eye drops when you don’t need them?',
    description:
      'Using lubricating drops when your eyes feel fine isn’t what the label describes. What it does cover, the real costs of extra use, and what to do instead.',
    category: 'choosing',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Using a lubricating eye drop when your eyes feel fine isn’t known to be harmful, but it isn’t what the label describes either. Quell’s label lists two uses: protecting against further irritation and relieving dryness. With no dryness or irritation, there’s nothing on the label for the drop to do. Each extra use also means another chance to contaminate the tip. Use it when your eyes need it, as the label directs.`,
      },
      { h: 'What the label says a lubricating drop is for' },
      {
        p: `Every over-the-counter drug carries a Uses section that says what the product is meant for. Quell’s reads: {uses}. Both parts start from a problem that’s already there. “Further irritation” assumes some irritation exists; “relieve dryness” assumes the eye is dry. The label doesn’t describe using the drop on comfortable, healthy-feeling eyes, and it doesn’t describe a routine meant to keep symptoms from ever starting.`,
      },
      {
        p: `That doesn’t make an occasional unneeded drop dangerous. It means the label simply doesn’t speak to it, and the people who can are a pharmacist or an eye doctor.`,
      },
      { h: 'Is it bad to use eye drops “just in case”?' },
      {
        p: `People reach for drops out of habit more often than they think: on the way into a meeting, before a drive, when the bottle happens to be on the desk. A few things are worth knowing before making that a routine:`,
      },
      {
        list: [
          `The directions set a count: {directions}. Drops used when you didn’t need them still count toward that number, which can leave you short later in the day when your eyes really do feel dry.`,
          `Every time the cap comes off, there’s a chance of touching the tip to a lash, a finger or a counter. The label says plainly: {tip}.`,
          `A bottle used on a schedule your eyes don’t need runs out sooner, and you reorder sooner.`,
          `A habit can hide a pattern. If you’re not paying attention to when your eyes actually feel dry, it’s harder to spot the vent, screen or routine causing it.`,
        ],
      },
      { h: 'How do I know if I actually need eye drops?' },
      {
        p: `Pay attention to what your eyes are telling you rather than the clock. Dryness from screens, heat and wind usually feels gritty, scratchy, tired or burning, and it often builds in the afternoon or evening. If your eyes feel comfortable, you can skip the drop. A simple log helps: write down when your eyes feel dry, where you were and what you were doing. After a week or two, most people see the pattern clearly. [Keeping a simple eye drop log](/guides/keeping-an-eye-drop-log) shows one way to do it.`,
      },
      {
        p: `The online [self-check](/self-check) asks about common symptoms and situations and can help you put a name to what you notice. It’s a starting point for a conversation, not a diagnosis.`,
      },
      { h: 'What about before a flight or a long drive?' },
      {
        p: `Many people know their eyes feel dry after a flight, a long day at a screen or a windy afternoon outside. Fixing the air around you usually does more than a drop beforehand: aim the vent away from your face, wear wraparound sunglasses in wind, and look away from the screen regularly. If your eyes start to feel dry or irritated partway through, that’s the situation the label describes. Bring the bottle along so it’s there when you need it, and keep it within the label’s storage range: {storage}.`,
      },
      { h: 'Using drops more often than the label says' },
      {
        p: `“Don’t need them” sometimes turns into “use them all the time.” If you find yourself reaching for drops many more times than the label’s three a day, that’s a different question, and an important one. The label doesn’t give directions for more frequent use, and needing that much relief is a sign to see an eye doctor. Our guides on [using more than three drops a day](/guides/can-i-use-more-than-three-drops-a-day) and [whether you can get addicted to eye drops](/guides/can-you-get-addicted-to-eye-drops) go into it.`,
      },
      { h: 'Different drops, different rules' },
      {
        p: `Not every eye drop is a simple lubricant. Some drops sold over the counter contain medicines meant for other purposes, with their own labels, limits and warnings about overuse. Those directions apply only to those products. Whatever bottle you have, read its Drug Facts panel rather than assuming it works like another one. And don’t mix products on your own: Quell’s label doesn’t give directions for use with other eye drops, so ask a pharmacist first.`,
      },
      { h: 'Before you use any drop' },
      {
        list: [
          `Check the bottle against the label’s Do Not Use line: {doNotUse}.`,
          `Read the caution: {warnings}.`,
          `Wash your hands, and keep the tip from touching anything.`,
          `Use one drop in each eye per the directions, then close your eyes gently for a moment.`,
        ],
      },
      {
        p: `The full panel, including storage and the stop-use list, is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes feel fine, you don’t need a drop. If they feel bad most of the time, a drop may not be the whole answer. The label marks the line: {stopUse} An eye doctor can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'Should I use eye drops if my eyes feel fine?',
        a: `There’s no need to. Quell’s label lists uses for dryness and irritation, so comfortable eyes have nothing for it to address. Save the drop for when your eyes actually feel dry or irritated.`,
      },
      {
        q: 'Is it okay to use eye drops out of habit?',
        a: `An occasional unneeded drop isn’t known to be harmful, but habits can use up the label’s three daily drops early and add chances to contaminate the tip. Using drops when your eyes need them is simpler.`,
      },
      {
        q: 'Can you use lubricating eye drops as a precaution?',
        a: `The label doesn’t describe using Quell on eyes that feel fine. Changing the air around you, like aiming vents away and taking screen breaks, does more ahead of time; use the drop if dryness or irritation starts.`,
      },
      {
        q: 'How can I tell if I need eye drops or just a break?',
        a: `If your eyes feel better after looking away, blinking slowly and getting out of a draft, a break may be enough. Dryness that keeps returning through the day is what the label’s uses describe.`,
      },
    ],
  },

  {
    slug: 'should-i-use-eye-drops-after-crying',
    title: 'Should I use eye drops after crying?',
    description:
      'Why eyes feel dry, gritty or heavy after a good cry, what helps first, and when a lubricating drop fits, according to its label.',
    category: 'choosing',
    addedOn: '2026-11-19',
    body: [
      {
        p: `You can use a lubricating eye drop after crying if your eyes feel dry or irritated, as the label directs, but it’s rarely the first thing to reach for. Rinse your face with cool water, pat it dry without rubbing, rest your eyes for a few minutes and blink slowly. If dryness or grittiness lingers once you’ve calmed down, a drop such as Quell fits its labeled uses. Pain or blurry vision that lasts needs an eye doctor.`,
      },
      { h: 'Why do my eyes feel dry after crying?' },
      {
        p: `It seems backward: you’ve just made more tears than usual. But crying hard is a lot more than tears. The eyes are flooded, then wiped, then rubbed with tissues, sleeves or the backs of hands. Lids get squeezed shut, the skin around the eyes swells, and salty tears dry on the lids and lashes. Afterward, the normal, thin tear film that keeps the eye comfortable between blinks has to settle back into place. Many people notice their eyes feel dry, scratchy, heavy or tired for a while after a long cry.`,
      },
      {
        p: `Crying also tends to happen with other drying conditions: late at night, after a long day, sometimes in a car with the heat on or in a dry bedroom. Short sleep after an emotional night adds to it, which is why the morning after can feel worse than the evening itself.`,
      },
      { h: 'What to do first' },
      {
        list: [
          `Wash your face with cool water to clear dried salt and makeup from the lids.`,
          `Pat dry with a clean towel instead of rubbing.`,
          `Lay a cool, damp washcloth over closed eyes for a few minutes if they feel hot or heavy.`,
          `Sit somewhere away from a heater, fan or vent while you settle.`,
          `Blink slowly and fully a few times, and give your eyes a break from your phone.`,
        ],
      },
      {
        p: `Tissues shed lint, and rubbing with them moves it onto the eye. A clean, soft cloth or a damp washcloth is gentler. If you wear eye makeup, take it off gently before bed rather than leaving smudged mascara on the lashes.`,
      },
      { h: 'Is it okay to use eye drops after crying?' },
      {
        p: `If your eyes still feel dry or irritated after you’ve washed up and rested, that’s the kind of discomfort a lubricating drop is labeled for. Quell is a preservative-free lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label lists the Uses as: {uses}. The directions: {directions}.`,
      },
      {
        list: [
          `Wash your hands first; crying means a lot of touching your face.`,
          `Check the bottle against the label’s Do Not Use line: {doNotUse}.`,
          `Tilt your head back, pull down the lower lid, and let one drop fall without touching the tip to your lashes. The label says: {tip}.`,
          `Close your eyes gently for a moment afterward instead of squeezing them.`,
        ],
      },
      {
        p: `Before using any drop for the first time, read the caution: {warnings}. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Puffy eyes are a different problem' },
      {
        p: `Swelling around the eyes after crying is in the eyelids and the skin around them, not on the eye’s surface. A lubricating drop isn’t labeled for puffiness. Cool cloths, rest and time are what most people use, and the swelling usually goes down over the next few hours. If you wake up with puffy eyes after a hard night, a cool rinse and keeping your head a little higher on the pillow are simple places to start.`,
      },
      { h: 'Crying with dry eyes in the morning' },
      {
        p: `Some people find their eyes feel driest the morning after crying, especially in winter when the heat runs through the night. Point registers away from the bed, keep your drops where you can reach them, and wash your face when you get up. [Dry eyes in the morning when you wake up](/guides/dry-eyes-in-the-morning-when-you-wake-up) covers the bedroom in more detail.`,
      },
      { h: 'When tears and dryness happen together' },
      {
        p: `If your eyes water often without any emotional reason, and also feel dry and gritty, that’s a different situation from crying, and it’s worth reading [why eyes can be watery when they’re dry](/guides/why-are-my-eyes-watery-if-they-are-dry). Frequent watering combined with discomfort is something to mention to an eye doctor.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Discomfort after crying usually fades as you rest. It shouldn’t include pain, light sensitivity or vision that stays blurry after your eyes have settled. The label says exactly when to stop using a drop: {stopUse} And if you’re going through a stretch where you’re crying often, talking with someone you trust, or with a doctor or counselor, can help with more than your eyes.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel dry after crying?',
        a: `Crying floods the eyes, then wiping, rubbing and dried salt on the lids leave them feeling scratchy while the normal tear film settles back. Late nights and dry rooms often add to it.`,
      },
      {
        q: 'Is it okay to use eye drops after crying?',
        a: `Yes, if your eyes feel dry or irritated once you’ve washed your face and rested. Use a lubricating drop as its label directs, with clean hands and without touching the tip to your eye.`,
      },
      {
        q: 'Do eye drops help puffy eyes after crying?',
        a: `A lubricating drop isn’t labeled for puffiness, which sits in the eyelids rather than on the eye. Cool cloths, rest and time are what most people rely on, and the swelling usually eases within hours.`,
      },
      {
        q: 'How do I get my eyes to feel normal after crying?',
        a: `Rinse your face with cool water, pat it dry, rest your eyes with a cool cloth, and blink slowly away from screens and vents. If they still feel dry afterward, a lubricating drop used as directed can help.`,
      },
    ],
  },

  {
    slug: 'is-it-bad-to-wear-sunglasses-indoors',
    title: 'Is it bad to wear sunglasses indoors?',
    description:
      'Sunglasses indoors aren’t known to harm your eyes, but they dim the light you need. Better fixes for glare, drafts and dry eyes, and when to see a doctor.',
    category: 'choosing',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Wearing sunglasses indoors isn’t known to harm your eyes, but it usually works around a problem instead of solving it. Dark lenses cut the light you need for reading and screens, so many people squint or lean in, which slows blinking. If glare, drafts or dry eyes are the reason, fix the lighting and vents first, consider clear wraparound glasses, and see an eye doctor if ordinary indoor light bothers you.`,
      },
      { h: 'Why people wear sunglasses inside' },
      {
        p: `Most people who keep their shades on indoors have a reason, even if they haven’t put it into words. The common ones:`,
      },
      {
        list: [
          `Bright overhead lights in an office, store or classroom.`,
          `Glare from a window behind the screen or reflected off a glossy monitor.`,
          `The hours after an eye exam with dilating drops, when the eye doctor’s office often hands out disposable shades.`,
          `A headache day, when light feels like too much.`,
          `Tired, dry or irritated eyes that feel better with less light.`,
          `Air from a heater, fan or vent blowing across the face.`,
        ],
      },
      {
        p: `Each of those has a better answer than tinted lenses, and some of them are worth a closer look from an eye doctor.`,
      },
      { h: 'Does wearing sunglasses indoors hurt your eyes?' },
      {
        p: `There’s no established harm from wearing sunglasses inside. The downsides are practical. Indoor light is much dimmer than daylight, and dark lenses cut it further, so small print, phone screens and dim hallways all get harder to see. People respond by squinting, leaning toward the screen or widening their eyes to read, and that kind of focused effort tends to slow blinking. Slower blinking gives the tear film more time to evaporate, which can leave eyes feeling drier by the end of the day. Stairs and dim rooms are also easier to misjudge in dark lenses.`,
      },
      { h: 'Glare from screens and overhead lights' },
      {
        p: `If brightness is the problem, change the light rather than your lenses:`,
      },
      {
        list: [
          `Set your screen’s brightness to roughly match the room, not brighter.`,
          `Turn the monitor so windows sit to the side of it, not behind or directly in front.`,
          `Use a desk lamp aimed at your work and turn off an overhead light that shines in your eyes.`,
          `Close blinds partway on bright afternoons.`,
          `Consider a matte screen or an anti-glare filter for a glossy display.`,
          `Increase text size so you don’t have to lean in.`,
        ],
      },
      {
        p: `[Screens and your tear film](/guides/screens-and-your-tear-film) explains why screen work dries the eyes even when the lighting is right.`,
      },
      { h: 'Drafts, vents and dry eyes indoors' },
      {
        p: `Some people find their eyes feel better in sunglasses indoors for a reason that has nothing to do with light: the frames block air. Moving air from a heat register, a desk fan or an air conditioning vent speeds evaporation from the tear film, and glasses that wrap around the sides cut that airflow. If that’s what’s helping, clear wraparound glasses do the same job without dimming the room. Better still, redirect the vent or move your chair. Our guides to [dry eyes in a heated office](/guides/dry-eyes-in-a-heated-office) and [dry eyes from forced-air heat](/guides/dry-eyes-from-forced-air-heat) cover the common culprits.`,
      },
      { h: 'Is it bad if normal indoor light bothers my eyes?' },
      {
        p: `Needing sunglasses to get through an ordinary day indoors is worth paying attention to. Sensitivity to light can come with dry, irritated eyes, but it can also point to something else that an exam should rule out, especially if it’s new, getting worse or comes with pain, blurred vision or one eye that feels very different from the other. Covering it with dark lenses doesn’t tell you why it’s happening. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists light sensitivity among the reasons to book a visit.`,
      },
      { h: 'Where a lubricating drop fits' },
      {
        p: `If your eyes feel dry or irritated indoors, a lubricating drop addresses that directly, where sunglasses only change the light. Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists the Uses as: {uses}. Directions: {directions}. And every time: {tip}.`,
      },
      {
        p: `The label isn’t about light sensitivity, and it doesn’t list it as a use. Read the caution before you start: {warnings}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Sunglasses outdoors are a different story' },
      {
        p: `Outside, sunglasses earn their keep. They cut glare from snow, water and pavement, and wraparound frames block wind, which dries the eyes quickly. Wearing them on a windy walk, a ski lift or a boat makes sense for comfort. Take them off when you come inside, and let your eyes adjust to the room. [How to protect your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) covers the winter side.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `See an eye doctor if indoor light regularly bothers you, if you’ve started needing sunglasses inside when you didn’t before, or if light sensitivity comes with pain or changes in vision. The label also says when to stop using a lubricating drop: {stopUse} An eye doctor can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'Is it okay to wear sunglasses inside?',
        a: `It isn’t known to harm your eyes, but dark lenses dim the light you need for reading and screens, which can lead to squinting and slower blinking. Fixing glare or drafts directly usually works better.`,
      },
      {
        q: 'Why does indoor light bother my eyes?',
        a: `Glare from screens and overhead lights is a common reason, and dry, irritated eyes can feel more bothered by light. If ordinary indoor light regularly bothers you, see an eye doctor to find out why.`,
      },
      {
        q: 'Do wraparound glasses help dry eyes indoors?',
        a: `They can cut airflow from vents and fans, which slows evaporation from the tear film. Clear wraparound lenses do that without dimming the room, but redirecting the vent is the first fix.`,
      },
      {
        q: 'Should I wear sunglasses at my computer?',
        a: `Usually not. Tinted lenses make the screen harder to read and can make you lean in and blink less. Match screen brightness to the room and reduce glare from windows and overhead lights instead.`,
      },
    ],
  },

  {
    slug: 'is-it-bad-to-sit-too-close-to-the-tv',
    title: 'Is it bad to sit too close to the TV?',
    description:
      'Sitting close to the TV isn’t known to damage your eyes, but it means more focusing, fewer blinks and drier eyes. Better habits, and when to get a check.',
    category: 'choosing',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Sitting close to the TV isn’t known to damage your eyes. What a close seat does change is comfort: your eyes work harder to focus on and scan a screen that fills your view, you tend to stare and blink less, and a long session can leave them tired or dry. If you find you have to sit close to see the picture clearly, that’s a reason to book an eye exam.`,
      },
      { h: 'Does sitting close to the TV damage your eyes?' },
      {
        p: `Not in any way that’s known. A TV is a lit screen you look at, like a computer monitor or a phone held at reading distance, and getting nearer to it isn’t known to harm the eye. What people do notice after an evening a few feet from a big screen is discomfort: tired, achy or dry eyes, and sometimes a headache. Those feelings are real and worth paying attention to, and they usually ease with rest. They point to effort and a drier eye surface, not to lasting harm.`,
      },
      { h: 'What sitting close actually changes' },
      {
        list: [
          `Focusing effort. The eyes adjust their focus more for near things than for distant ones. A few feet from a screen, that effort is modest, but it builds over a two-hour movie, much as reading does.`,
          `Scanning. When the picture fills your whole view, your eyes travel side to side to follow the action instead of taking it in at a glance, and hours of that movement can feel tiring.`,
          `Staring and fewer blinks. A close, bright, fast-moving picture holds attention, and absorbed watching slows blinking. Each blink spreads fresh tears, so longer gaps leave the surface drier.`,
          `Contrast. Up close in a dark room, the screen is a large bright patch against a dim background, and your eyes keep adjusting between the two.`,
        ],
      },
      { h: 'The room matters as much as the distance' },
      {
        p: `Pulling a chair up to the screen often moves you into different air. TVs get mounted over fireplaces, set on stands beside floor registers, or placed near a window unit, and a seat right in front of the screen can keep your face in that airflow for the whole evening. A gas or wood fire under the TV warms and dries the very air you’re blinking in. In winter, the front row of the living room can be its driest, warmest spot. [Fireplaces, candles and dry eyes](/guides/fireplaces-candles-and-dry-eyes) covers the fireplace side, and the same check applies to a heater or fan: if you can feel air on your face, it’s reaching your eyes.`,
      },
      { h: 'Finding a comfortable viewing distance' },
      {
        p: `There’s no single correct distance; the right one depends on the screen and on your eyes. A practical test works better than a formula. Sit where you can see the whole picture, edge to edge, without turning your head or sending your eyes far to reach the corners, and where captions or a scoreboard read easily without squinting. If those two goals pull against each other, so that captions only become readable once the edges fall out of view, make a note of it for your next eye exam.`,
      },
      {
        list: [
          `Leave a lamp on so the screen isn’t the only light in the room.`,
          `Lower the TV’s brightness for evening viewing.`,
          `Set the screen at or a little below eye level, so you look straight ahead or slightly down instead of up.`,
          `Look away during ads, the recap or the opening titles, ideally at something across the room or out a window.`,
          `Blink fully on purpose a few times whenever you catch yourself staring.`,
          `Aim heaters, fans and vents away from your seat.`,
        ],
      },
      { h: 'When needing to sit close means a vision check is due' },
      {
        p: `Sometimes the close seat isn’t a habit at all; it’s the only place the picture looks sharp. That’s worth taking seriously. Book an exam with an optometrist or ophthalmologist if any of these sound familiar:`,
      },
      {
        list: [
          `You’ve drifted closer to the screen over months without meaning to.`,
          `You squint at captions, the game score or the channel guide.`,
          `One eye sees the screen less clearly than the other when you cover each in turn.`,
          `Road signs, faces across a room or a whiteboard at work are getting harder to read too.`,
          `You wear glasses and the TV looks clearer with them pushed up or off.`,
        ],
      },
      {
        p: `An eye doctor can check your vision, find out why distance has gotten harder, and update or start a prescription if that’s what you need. Moving the chair closer only works around the change.`,
      },
      { h: 'Phones and tablets up close' },
      {
        p: `Many people who worry about the TV spend more hours with a phone a foot from their face. The same points hold there, only more so: nearer focus, smaller text and blinking that slows while you read. If you stream shows on a tablet, a stand on the table keeps it farther away than your hands would. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why screens slow blinking, and [dry eyes when binge-watching TV](/guides/dry-eyes-when-binge-watching-tv) has ideas for the breaks between episodes.`,
      },
      { h: 'Where a lubricating drop fits' },
      {
        p: `Distance, lighting and airflow changes come first. If your eyes still feel dry or irritated after a long stretch of viewing, a lubricating drop is an option. Quell’s Uses read: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is what slow blinking and a warm room both work against. The directions read: {directions}. One of those can go in before a long movie night, while the lights are still on, instead of in a dark room mid-film. Keep the tip clean: {tip}.`,
      },
      {
        p: `The label doesn’t cover contact lenses, children or use with other eye drops; ask an eye doctor or pharmacist about those. A drop won’t sharpen a picture that looks fuzzy from across the room, either. Blur that doesn’t clear with blinking is a question for an eye exam, not a bottle. The full label is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `See an eye doctor if you need to sit closer than you used to, if blur doesn’t clear with a few blinks, or if your eyes hurt after watching. For dryness, the label says: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists signs that shouldn’t wait, and the [self-check](/self-check) can help you put what you notice into words; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Can sitting close to the TV ruin your eyes?',
        a: `It isn’t known to damage the eyes. Close viewing can leave them tired or dry after a long session, because you focus harder and blink less, but that discomfort usually eases with rest.`,
      },
      {
        q: 'Why do I have to sit close to the TV to see it?',
        a: `Needing to sit close to see clearly can mean your distance vision has changed or your glasses are out of date. An eye exam with an optometrist or ophthalmologist is how to find out.`,
      },
      {
        q: 'Why do my eyes hurt after sitting close to the TV?',
        a: `A screen that fills your view means more focusing and scanning, and absorbed watching slows blinking. Sit back, rest and blink fully; pain that keeps coming back should be checked by an eye doctor.`,
      },
    ],
  },

  {
    slug: 'is-it-bad-to-sleep-with-mascara-on',
    title: 'Is it bad to sleep with mascara on?',
    description:
      'Sleeping in mascara can leave flakes and residue that make eyes gritty and dry by morning. How to take it off gently, and what helps if you forgot.',
    category: 'choosing',
    addedOn: '2026-11-19',
    body: [
      {
        p: `Sleeping with mascara on once in a while isn’t a disaster, but it’s a habit worth breaking. As you sleep, mascara can flake and smudge onto the lid edges and into the eye, and lashes coated for hours get stiff and brittle. Many people wake up with gritty, dry or irritated eyes afterward. Take it off gently before bed, and if you forget, wash it off in the morning without rubbing.`,
      },
      { h: 'What happens to mascara while you sleep' },
      {
        p: `Mascara is made to stay on the lashes while you’re awake and upright. Lying on a pillow for hours changes that. The coating presses against the pillowcase, cracks and flakes, and small pieces end up along the lid edges, where the tear film meets the lashes. Some of it gets into the eye. Smudged mascara on the pillow also comes back to your face the next night unless the pillowcase is changed.`,
      },
      {
        list: [
          `Flakes on the eye surface feel like grit when you wake up.`,
          `Residue along the lid edges sits right where the oils that coat the tear film come out.`,
          `Lashes stiffened by mascara are more likely to bend or break against the pillow.`,
          `Rubbing your eyes in your sleep spreads all of it further.`,
        ],
      },
      { h: 'Is it bad to sleep with mascara on just once?' },
      {
        p: `One night is unlikely to cause lasting trouble for most people. You may wake up with smudges, a few lost lashes and eyes that feel scratchy. Wash your face gently in the morning, take off what’s left with a remover, and give your eyes a break from makeup if they feel irritated. The problem is when it happens often, because the residue builds up night after night.`,
      },
      { h: 'How to take mascara off without irritating your eyes' },
      {
        list: [
          `Wash your hands first.`,
          `Soak a cotton pad with an eye makeup remover and hold it against closed lashes for several seconds to loosen the mascara.`,
          `Wipe down and outward along the lashes; don’t scrub back and forth.`,
          `Use a fresh pad for each eye.`,
          `Rinse the area with lukewarm water to clear leftover remover.`,
          `Pat dry with a clean towel.`,
        ],
      },
      {
        p: `Waterproof mascara needs a remover made for it, usually an oil-based one. Be gentle around the lid edges; pulling and rubbing to get every last bit off irritates the skin and lashes more than a second, softer pass would.`,
      },
      { h: 'Tired nights: making removal easier' },
      {
        p: `Most people sleep in mascara because they’re exhausted, not because they forgot it exists. Lower the barrier: keep remover and cotton pads on the nightstand, or skip mascara on days you know will run late. Some people find a tubing mascara that slides off with warm water easier to take off at night. Washing pillowcases regularly helps if smudges have become routine.`,
      },
      { h: 'Waking up with dry, gritty eyes' },
      {
        p: `If you wake up after a night in mascara and your eyes feel gritty or dry, start by washing your face and removing what’s left. Rinse with lukewarm water, blink slowly and give your eyes a few minutes. If they still feel dry or irritated once the makeup is gone, that’s what a lubricating drop is labeled for. Quell is a preservative-free lubricating drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label gives the Uses as: {uses}. The directions: {directions}.`,
      },
      {
        p: `Use it on clean lids, not through a layer of old mascara. Wash your hands, and follow the label’s rule: {tip}. Before first use, read the caution: {warnings}. Our guide to [eye drops before or after makeup](/guides/eye-drops-before-or-after-makeup) covers how to fit drops into a makeup routine, and the full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Eyeliner, false lashes and extensions' },
      {
        p: `The same reasoning applies to eyeliner, especially along the inner lid edge, and to glitter or shimmer shadow that flakes easily. Strip lashes and their glue should come off before bed too. Lash extensions are a separate case, since they stay on for weeks; [eye drops with eyelash extensions](/guides/can-you-use-eye-drops-with-eyelash-extensions) covers that.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Gritty mornings after a night in mascara should clear once the makeup is off and your eyes have rested. Pain, swelling or a lump on the eyelid, discharge, or vision that stays blurry need an eye doctor. The label also says when to stop using a drop: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What happens if you sleep with mascara on?',
        a: `Mascara can flake and smudge onto the lid edges and into the eye, and lashes stiffened by it may break against the pillow. Many people wake up with gritty or dry eyes.`,
      },
      {
        q: 'Is sleeping in mascara once bad for your eyes?',
        a: `One night is unlikely to cause lasting trouble for most people, though your eyes may feel scratchy in the morning. Remove the rest gently and avoid making it a habit.`,
      },
      {
        q: 'How do I get mascara off without rubbing my eyes?',
        a: `Hold a remover-soaked cotton pad on closed lashes for several seconds to loosen it, then wipe down and outward. Use a fresh pad for each eye and rinse with lukewarm water.`,
      },
      {
        q: 'Can I use eye drops if I slept in my mascara?',
        a: `Remove the mascara and rinse first. If your eyes still feel dry or irritated afterward, a lubricating drop can be used as its label directs, with clean hands.`,
      },
    ],
  },
]
