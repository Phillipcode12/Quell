import type { Guide } from '@/lib/guide-types'
export const DAILY_20261117_C: Guide[] = [
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-lewiston-id:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00024149.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00024149.csv
   *   (LEWISTON NEZ PERCE CO AP, elev 437.7 m: annual precip 12.87 in; May 1.69
   *   wettest, Jul 0.47, Aug 0.51; annual snow 12.7 in, Dec 4.1, Feb 3.8; Jul high
   *   90.8 F, Aug 90.1 F; Dec high 40.8 F; 44.1 days at or above 90 F; 79.8 nights
   *   at or below 32 F; 12.3 days with a high at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (LEWISTON, ID, WBAN 24149: Jul 54/24, Aug 52/24, Nov 80/67, Dec 80/73,
   *   morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (LEWISTON annual 2.6, the lowest of the three Idaho rows: Boise 3.4,
   *   Pocatello 4.3; Sep and Oct 2.2 its calmest months)
   * Elevation is the NOAA station elevation, converted (437.7 m is about 1,436 ft).
   */
  {
    slug: 'dry-eye-relief-lewiston-id',
    title: 'Dry eye relief in Lewiston, Idaho',
    description:
      'Lewiston’s July and August afternoons average 24 percent humidity in NOAA’s records. What the canyon heat does to your eyes, and simple relief that helps.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Dry eye relief in Lewiston means planning around the summer afternoons. NOAA’s records put July and August afternoon humidity at the airport near 24 percent, with highs above 90°F, while winter brings damp outside air and dry heated rooms. Keep sun and breeze off your eyes, blink fully, use a lubricating drop as its label directs, and see an eye doctor if dryness hangs on.`,
      },
      { h: 'Lewiston’s climate by the numbers' },
      {
        p: `NOAA’s 1991 to 2020 climate normals for Lewiston-Nez Perce County Airport, which sits at about 1,436 feet, describe a hot, dry valley:`,
      },
      {
        list: [
          `About 12.87 inches of precipitation in a normal year, the wettest month being May at 1.69 inches.`,
          `July averages just 0.47 inches and August 0.51.`,
          `Snowfall totals about 12.7 inches, most of it in December (4.1) and February (3.8).`,
          `Normal July highs reach 90.8°F, and roughly 44 days a year hit 90°F or more.`,
          `Only about 12 days a year stay at or below freezing all afternoon.`,
        ],
      },
      {
        p: `The Snake and Clearwater meet right below downtown, so Lewiston never looks dry. The air tells a different story, and your eyes notice it first on a July afternoon.`,
      },
      { h: 'Why summer afternoons are hard on eyes here' },
      {
        p: `NOAA’s humidity table lists Lewiston at 24 percent in the afternoon in both July and August, compared with mornings in the low to mid 50s. That drop happens every clear summer day as the canyon heats up. The tear film has a thin oil layer on top that slows evaporation, and hot, dry air pulls water from the eye’s surface faster between blinks. Add bright sun on the water and a lot of squinting, and many people feel gritty or tired eyes by late afternoon.`,
      },
      {
        list: [
          `Do the long walk on the levee trails or the ride along the Clearwater early, while morning humidity runs about twice the afternoon level.`,
          `On a jet boat trip up toward Hells Canyon, wear close-fitting sunglasses: the boat makes its own wind even on a still day.`,
          `In the car, aim the vents at your chest instead of your face, and keep the fan lower when the cabin cools down.`,
          `Indoors, keep box fans and ceiling fans from blowing straight across a desk or a pillow.`,
        ],
      },
      { h: 'A calm valley, so the fans matter more' },
      {
        p: `One point in Lewiston’s favor: NOAA’s wind table shows the airport with the lowest average wind of the three Idaho stations it lists, below Boise and well below Pocatello. September and October are its calmest months. With less natural breeze, most of the moving air your eyes meet is air you make yourself: a desk fan, an evaporative cooler, a ceiling fan over the bed, a car vent. Turning those away from your face costs nothing, and on a still, hot evening it can matter more than anything the weather does.`,
      },
      { h: 'Winter: gray outside, dry inside' },
      {
        p: `From November through January the picture reverses. NOAA lists December mornings at 80 percent humidity and afternoons at 73, so the outdoor air is damp and often gray. Yet the valley still averages about 80 nights at or below freezing, and furnaces and wood stoves run for months. Heating cold air lowers its relative humidity, which is why a Lewiston or Clarkston living room can feel parched while the hills outside are wet. A bedroom humidifier, a lower thermostat at night and a chair moved away from the heat register all help. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has room-by-room ideas.`,
      },
      { h: 'Hunting, fishing and long drives on the Palouse' },
      {
        p: `A lot of Lewiston life happens outside or behind the wheel. Steelhead anglers stand in the wind on the Clearwater for hours in fall. Hunters glass ridges in the cold. Drivers climb the Lewiston Hill grade and cross wheat country to Moscow or Pullman. Each one asks the eyes to stare at a fixed point and blink less. Carry the bottle in an inside pocket so it stays near body temperature, put your drops in before you head out rather than in the wind, and close your eyes for a few seconds every so often. [Dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers) covers long days outside in more detail.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a preservative-free lubricating eye drop. It is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses as: {uses}. Directions: {directions}. While using it: {tip}.`,
      },
      {
        p: `For storage the panel says: {storage}. A pickup parked at a boat ramp in August can run well past that upper limit, so take the bottle with you. The label also says not to use it in this case: {doNotUse}. Its look is normal, too: {appearance} The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in Lewiston and nearby' },
      {
        p: `We ship from Brentwood, Tennessee, to Lewiston, Clarkston, Orofino and anywhere else in the United States. You can check out as a guest. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You’ll get tracking by email, but we don’t promise a delivery date, so order before the bottle runs out. An unopened bottle can be refunded within {returnDays} days of delivery without sending it back. Local notes are on the [Lewiston page](/eye-drops/lewiston-id) and the [Idaho page](/eye-drops/state/idaho).`,
      },
      { h: 'When to see an eye doctor instead' },
      {
        p: `A drop is for everyday dryness. The label sets the line for stopping: {stopUse} Eye pain, a change in vision, or dryness that keeps coming back are reasons to book an eye exam, not to keep adding drops. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'How dry is Lewiston, Idaho in the summer?',
        a: 'Very dry by afternoon. NOAA’s records put July and August afternoon humidity at Lewiston’s airport near 24 percent, with July averaging under half an inch of rain and highs around 91°F.',
      },
      {
        q: 'Is Lewiston, Idaho windy?',
        a: 'Not by Idaho standards. NOAA’s wind table shows the Lewiston airport averaging less wind than Boise or Pocatello, with September and October its calmest months.',
      },
      {
        q: 'Why do my eyes feel dry in Lewiston in the winter?',
        a: 'The outdoor air is damp in winter, but heating it indoors lowers its relative humidity. A humidifier, a cooler bedroom and keeping your face out of the vent airflow usually help.',
      },
      {
        q: 'Does Quell ship to Lewiston, Idaho?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to any US address, including Lewiston and Clarkston, with tracking by email and no promised delivery date.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-moline-il:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014923.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00014923.csv
   *   (MOLINE QUAD CITY INTL AP, elev 180.4 m: annual precip 38.27 in; Jun 5.01
   *   wettest, Jan 1.66 driest; annual snow 36.1 in, Jan 10.8, Dec 8.8, Feb 8.6;
   *   Jan high 31.8 F, low 14.8 F; Jul high 86.1 F; 22.2 days at or above 90 F;
   *   128.7 nights at or below 32 F; 41.7 days with a high at or below 32 F;
   *   9.8 nights at or below 0 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (MOLINE, IL, WBAN 14923: Apr 78/53, May 80/53, Aug 89/59, Dec 80/69,
   *   Jan 77/68, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (MOLINE annual 3.8; Apr 4.7 windiest, Aug 2.7 calmest; Chicago 4.4,
   *   Springfield 4.2, Rockford 4.1, Peoria 3.7)
   * Elevation is the NOAA station elevation, converted (180.4 m is about 592 ft).
   */
  {
    slug: 'dry-eye-relief-moline-il',
    title: 'Dry eye relief in Moline, Illinois',
    description:
      'Moline averages about 10 nights a year at or below zero, and April is its windiest month. NOAA’s Quad Cities numbers and what helps dry, tired eyes.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `In Moline, dry eyes usually follow two seasons. Winter brings bitter cold (NOAA counts about 10 nights a year at or below zero at Quad City International) and months of furnace heat, and spring brings the year’s strongest wind. Shield your eyes outdoors, keep heated air off your face, blink fully at screens, and use a lubricating drop as its label directs. Ongoing trouble belongs with an eye doctor.`,
      },
      { h: 'What NOAA’s Quad Cities records show' },
      {
        p: `The official weather station for Moline and the rest of the Quad Cities is at Quad City International Airport, south of downtown at about 592 feet. Its 1991 to 2020 normals:`,
      },
      {
        list: [
          `About 38.27 inches of precipitation a year. June is wettest at 5.01 inches and January driest at 1.66.`,
          `Around 36.1 inches of snow, led by January (10.8), December (8.8) and February (8.6).`,
          `January averages a high of 31.8°F and a low of 14.8°F.`,
          `Roughly 129 nights a year reach freezing, and about 42 days never get above it.`,
          `Summer is warm rather than scorching: July highs average 86.1°F, with about 22 days at 90°F or more.`,
        ],
      },
      { h: 'January on the river: the coldest, driest air of the year' },
      {
        p: `Cold air simply can’t hold much water. When a January morning sits near 15°F, the outside air carries very little moisture even if the humidity reading looks high, and once your furnace warms that air to 70°F its relative humidity falls sharply. That is the main reason Quad Cities homes, offices and plant floors feel parched from December into March. The water layer of the tear film evaporates faster in that air, and many people notice it most in the evening, after hours of heat and screens.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom and clean it on the schedule its maker gives.`,
          `Point car heater vents at the windshield and your feet, not your eyes, on the drive across the I-74 bridge.`,
          `Keep your desk chair out of the airflow from floor registers and space heaters.`,
          `Lower the thermostat at night; cooler rooms dry out a little less.`,
        ],
      },
      {
        p: `Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) goes further on humidity indoors.`,
      },
      { h: 'Spring wind across the Mississippi' },
      {
        p: `NOAA’s wind table puts April at the top of Moline’s year, with March close behind and August the calmest month. The river runs east to west through the Quad Cities, and open water and flat farmland give a spring wind little to slow it down. On the riverfront trail or a ballfield in April, wind moves across the eye’s surface and thins the tear film quickly, which can leave eyes watering in the cold and scratchy later indoors. Sunglasses that wrap around the sides block more of it than flat lenses. NOAA’s afternoon humidity also hits its low for the year in April and May, at 53 percent, so the air itself is drier just as the wind picks up.`,
      },
      { h: 'Muggy August, chilled offices' },
      {
        p: `Summer is the opposite problem outdoors. NOAA lists August mornings at 89 percent humidity, so the river valley feels heavy, and outdoor air is rarely what dries the eyes then. Air conditioning is. Long shifts in a cooled office, a factory floor or a car with the vents on high can dry the eye surface in July as surely as the furnace does in January. Aim vents away from your face and take short breaks from close work.`,
      },
      { h: 'Screens, shifts and the workday' },
      {
        p: `Moline is a working town, home to John Deere’s headquarters, and much of the region’s work now involves a screen, from engineering and logistics to the Rock Island Arsenal across the channel. Staring at a monitor cuts blinking, and every skipped blink lets the tear film thin a little more. Set a timer, look away at something across the room, and make each blink a full one. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why it works.`,
      },
      { h: 'Quell’s label, in its own words' },
      {
        p: `Quell is a lubricating eye drop without preservatives, designed to reinforce the tear film’s oil layer to help reduce moisture loss. According to its Drug Facts panel, its Uses are: {uses}. The panel’s directions: {directions}. Its warning reads: {warnings}.`,
      },
      {
        p: `Storage is printed too: {storage}. A bottle left in a car through a January cold snap can drop below that range, so keep it in a coat pocket or bring it inside. And the panel adds: {tip}. Read every section on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering to Moline and the Quad Cities' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Moline, East Moline, Rock Island, Davenport, Bettendorf and every other US address. Guest checkout works, shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking comes by email, though we don’t promise when a package will arrive. Unopened bottles can be refunded within {returnDays} days of delivery, and you keep them. See the [Moline page](/eye-drops/moline-il) and the [Illinois page](/eye-drops/state/illinois) for local details, or go to [the order form](/#buy).`,
      },
      { h: 'Signs it’s time for an eye exam' },
      {
        p: `Drops can ease everyday dryness, but some symptoms need a professional. The label says: {stopUse} Pain, blurred vision that doesn’t clear, or dryness that returns week after week are reasons to see an optometrist or ophthalmologist. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you decide.`,
      },
    ],
    faq: [
      {
        q: 'How cold does it get in Moline, Illinois?',
        a: 'NOAA’s normals for Quad City International Airport show January lows averaging 14.8°F, about 129 nights a year at or below freezing and close to 10 nights at or below zero.',
      },
      {
        q: 'What is the windiest month in the Quad Cities?',
        a: 'April. NOAA’s wind table for the Moline airport ranks April first, with March close behind, while August is the calmest month of the year.',
      },
      {
        q: 'Why are my eyes so dry in the winter in the Quad Cities?',
        a: 'Furnace heat warms very cold outdoor air without adding water, so indoor humidity drops and tears evaporate faster. A bedroom humidifier and keeping vents off your face are good first steps.',
      },
      {
        q: 'Can I get Quell delivered to Moline?',
        a: 'Yes. Quell ships to Moline and the rest of the Quad Cities from Brentwood, Tennessee, with guest checkout and tracking by email. No delivery date is promised, so order ahead of running out.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-waterloo-ia:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00094910.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00094910.csv
   *   (WATERLOO MUNI AP, elev 264.6 m: annual precip 36.29 in; Jun 5.72 wettest,
   *   Jan 1.10 driest, Feb 1.14; annual snow 39.1 in, Jan 10.1, Dec 9.9, Feb 9.3;
   *   Jan high 28.2 F, low 10.7 F; Jul high 85.0 F; 15.3 days at or above 90 F;
   *   150.5 nights at or below 32 F; 57.7 days with a high at or below 32 F;
   *   20.3 nights at or below 0 F; 64.0 days with 1 in or more of snow on the ground)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (WATERLOO, IA, WBAN 94910: Apr 82/55, May 82/55, Aug 91/60, Dec 83/73,
   *   morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (WATERLOO annual 4.4, same as Des Moines; Apr 5.3 windiest, Aug 3.2 calmest)
   * Elevation is the NOAA station elevation, converted (264.6 m is about 868 ft).
   */
  {
    slug: 'dry-eye-relief-waterloo-ia',
    title: 'Dry eye relief in Waterloo, Iowa',
    description:
      'Waterloo sees about 20 nights a year at or below zero and 58 days that never thaw, per NOAA. How Iowa’s long winter dries your eyes, and what helps.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Waterloo’s winters are long and hard on eyes. NOAA’s normals for the municipal airport count about 58 days a year that never get above freezing and some 20 nights at or below zero, so furnaces run for months and indoor air turns dry. Keep heat and wind off your face, blink fully, use a lubricating drop the way its label says, and let an eye doctor check dryness that won’t quit.`,
      },
      { h: 'Waterloo weather in numbers' },
      {
        p: `NOAA’s 1991 to 2020 climate normals for Waterloo Regional Airport, on the city’s north side at about 868 feet, sketch a classic northern Iowa year:`,
      },
      {
        list: [
          `About 36.29 inches of precipitation, with June the wettest month at 5.72 inches.`,
          `January is the driest at 1.10 inches, and February is barely wetter at 1.14.`,
          `Snowfall averages 39.1 inches, and the ground holds an inch or more of snow on about 64 days.`,
          `January runs from an average low of 10.7°F to a high of 28.2°F.`,
          `Around 150 nights a year fall to freezing or below.`,
        ],
      },
      { h: 'Twenty nights below zero, and what the furnace does' },
      {
        p: `Subzero air is about as dry as air gets, because cold air holds so little water vapor. Bring it inside and warm it, and its relative humidity can drop into a range that feels like a desert to your eyes. The tear film’s water layer sits under a thin oil layer that slows evaporation, but warm, dry, moving air speeds it up anyway. That’s why Cedar Valley households often notice gritty, tired eyes most in January and February, especially first thing in the morning after a night under a ceiling fan or next to a heat register.`,
      },
      {
        list: [
          `Run a cool-mist humidifier in the bedroom, and empty and clean it as the maker says.`,
          `Turn bedroom ceiling fans off in winter, or at least slow them down.`,
          `Set the car heater to the floor and windshield on the commute instead of straight at your face.`,
          `Keep a pair of glasses or sunglasses handy for snow-blowing the driveway, since blowing snow and wind come straight at the eyes.`,
        ],
      },
      { h: 'Plant floors and offices' },
      {
        p: `Waterloo has built tractors for generations, and the John Deere works and other plants still employ a large share of the area. Big, heated industrial spaces move a lot of air. If your station sits near a unit heater or a door that opens to the cold, the air hitting your face is likely drier than the rest of the floor. Safety glasses help with debris and also block some airflow. Office work has its own version: long hours of spreadsheets and video calls in a heated building, with blinking slowing down as focus goes up. Our guide on [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more about humidity indoors.`,
      },
      { h: 'April wind over open fields' },
      {
        p: `NOAA’s wind table puts April as Waterloo’s windiest month and August as its calmest. Spring wind over Black Hawk County’s open fields carries dust once the ground dries and fieldwork starts, and NOAA’s afternoon humidity bottoms out at 55 percent in April and May. Wraparound sunglasses do more than block glare on those days. If something gets into your eye, rinse it rather than rubbing, and see a doctor if it still feels stuck.`,
      },
      { h: 'Humid summers on the Cedar River' },
      {
        p: `August mornings are the dampest of Waterloo’s year, at 91 percent humidity in NOAA’s table, so the outdoor air in summer is rarely the trouble. Air conditioning is: a cold office, a car vent on high, or a window unit blowing across a bed can all dry the eye’s surface. Kayakers and anglers on the Cedar also deal with glare off the water, which makes people squint and blink less. Polarized sunglasses and breaks in the shade help.`,
      },
      { h: 'The Quell label, section by section' },
      {
        p: `Quell is a preservative-free lubricating eye drop. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel states its Uses: {uses}. Directions on the panel: {directions}. When using it: {tip}.`,
      },
      {
        p: `The storage line reads: {storage}. A bottle left in the car on a subzero night will sit well below that range, so keep it indoors or in an inside pocket. One more line to know: {doNotUse}. Everything on the panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Waterloo and Cedar Falls' },
      {
        p: `We ship from Brentwood, Tennessee, to Waterloo, Cedar Falls, Evansdale and every other US address. There’s no account to create, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking arrives by email, and since no delivery date is promised, order before you run low, especially ahead of a winter storm. Unopened bottles can be refunded within {returnDays} days of delivery without being returned. The [Waterloo page](/eye-drops/waterloo-ia) and the [Iowa page](/eye-drops/state/iowa) have more.`,
      },
      { h: 'When dryness needs an eye doctor' },
      {
        p: `Lubricating drops are for everyday dryness. The panel’s stop-use guidance: {stopUse} Pain, a change in how you see, or dryness that keeps returning despite humidifiers and breaks should go to an optometrist or ophthalmologist. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers when not to wait.`,
      },
    ],
    faq: [
      {
        q: 'How cold does Waterloo, Iowa get in the winter?',
        a: 'NOAA’s normals for the Waterloo airport show January lows near 11°F, about 20 nights a year at or below zero, and roughly 58 days whose high never climbs above freezing.',
      },
      {
        q: 'How much snow does Waterloo, Iowa get a year?',
        a: 'About 39 inches in a normal year, according to NOAA’s 1991 to 2020 normals, with January and December the snowiest months. The ground has an inch or more of snow on about 64 days.',
      },
      {
        q: 'Why do my eyes dry out in Iowa winters?',
        a: 'Heating very cold outdoor air drops its relative humidity indoors, which speeds evaporation from the eye. Humidifiers, slower fans and keeping vents off your face usually help.',
      },
      {
        q: 'Does Quell ship to Waterloo, Iowa?',
        a: 'Yes. Quell ships to Waterloo and Cedar Falls from Brentwood, Tennessee, with guest checkout and tracking by email, though no delivery date is promised.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-paducah-ky:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00003816.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00003816.csv
   *   (PADUCAH, KY, lat 37.0683 lon -88.7719, the Barkley Regional Airport site in
   *   West Paducah; elev 119.5 m: annual precip 50.32 in; Apr 5.17 wettest, Aug
   *   3.11 driest; annual snow 8.9 in, Feb 3.0, Jan 2.7; Jul high 89.9 F, Aug 89.5 F;
   *   50.2 days at or above 90 F; 82.8 nights at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (PADUCAH, KY, WBAN 03816: Aug 90/56, Sep 90/53, Oct 86/52, Apr 80/53,
   *   Dec 82/65, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (PADUCAH annual 3.0; Mar 3.9 windiest, Aug 2.0 calmest; Louisville and
   *   Lexington 3.5, Jackson 2.1)
   * Elevation is the NOAA station elevation, converted (119.5 m is about 392 ft).
   */
  {
    slug: 'dry-eye-relief-paducah-ky',
    title: 'Dry eye relief in Paducah, Kentucky',
    description:
      'Paducah’s October afternoons average 52 percent humidity, its driest of the year per NOAA. River-town weather, close work, and simple ways to ease dry eyes.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Paducah is humid most of the year, so dry eyes there usually come from indoor air, close work and fall’s drier afternoons rather than from a desert climate. NOAA’s records show October afternoons near 52 percent humidity, the lowest of the year. Keep air conditioning and heat off your face, take breaks from close focus, use a lubricating drop as labeled, and see an eye doctor for anything that lingers.`,
      },
      { h: 'Paducah’s climate at a glance' },
      {
        p: `NOAA keeps Paducah’s official normals at Barkley Regional Airport in West Paducah, at about 392 feet. The 1991 to 2020 figures:`,
      },
      {
        list: [
          `About 50.32 inches of precipitation in a normal year. April is the wettest month (5.17 inches) and August the driest (3.11).`,
          `Only about 8.9 inches of snow a year, with February the snowiest month at 3.0 inches.`,
          `July highs average 89.9°F, and about 50 days a year reach 90°F or more.`,
          `Around 83 nights a year fall to freezing or below.`,
        ],
      },
      { h: 'Fall: the driest air of the year' },
      {
        p: `NOAA’s humidity table for Paducah shows mornings near 90 percent from August through September, but afternoons fall to 53 percent in September and 52 percent in October. That combination of a damp, foggy start near the rivers and a clear, drier afternoon is typical of the season. Fall is also when people spend long days outdoors: football on Friday nights, hunting in the river bottoms, fishing Kentucky Lake and Lake Barkley. Sun on open water makes people squint, and squinting usually means fewer complete blinks.`,
      },
      {
        list: [
          `Wear sunglasses with side coverage on the boat, where speed adds wind to whatever the weather brings.`,
          `Put your drops in at the dock or the truck, before the wind and spray start.`,
          `Rest your eyes now and then by closing them gently for a few seconds.`,
          `Keep the bottle out of the sun in a shaded bag or pocket.`,
        ],
      },
      { h: 'Quilting, crafts and close work' },
      {
        p: `Paducah is home to the National Quilt Museum and draws quilters from all over the country for its spring quilt week. Quilting, hand sewing and needlework all mean hours of close focus under a bright lamp, and the eye blinks less when it concentrates on fine detail. The same goes for reading glasses, crossword books and any small-print hobby. Set a timer to look up across the room every 20 minutes or so, keep the lamp aimed at the work rather than your face, and make sure each blink fully closes. [Dry eyes when sewing or knitting](/guides/dry-eyes-when-sewing-or-knitting) has a fuller routine.`,
      },
      { h: 'Summer air conditioning on the river' },
      {
        p: `With about 50 days at 90°F or more, Paducah runs on air conditioning from late spring into September. Outdoor air in July is heavy, but the cooled air inside is drier, and it usually moves straight out of a vent. Aim car vents at your chest, keep a desk fan from blowing across your face, and don’t sleep under a ceiling fan on high. Barge crews, plant workers and anyone on a long shift in a cooled cab or control room face the same thing for hours at a stretch.`,
      },
      { h: 'Winter and the March wind' },
      {
        p: `Winter is short and mild by northern standards, with little snow, yet about 83 nights a year still reach freezing and furnaces run from December into March. NOAA’s wind table names March as Paducah’s windiest month and August its calmest, and the airport averages less wind than Louisville or Lexington. A windy, cool March day at the riverfront, with heat waiting indoors, can make eyes water outside and feel dry after. Our page on [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) explains the indoor side.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `Quell is a preservative-free lubricating eye drop, designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel describes its Uses this way: {uses}. Directions: {directions}. Also from the panel: {tip}.`,
      },
      {
        p: `Storage: {storage}. A truck cab at the lake in July can climb past that range quickly, so carry the bottle with you. The label also notes: {milky}. That’s expected. You can read the full panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Paducah' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Paducah, Reidland, Lone Oak, Metropolis across the river, and any other US address. Check out as a guest; shipping is {shipping}, and {freeBottles} or more bottles ship free. You’ll get tracking by email, but delivery dates aren’t promised. Unopened bottles can be refunded within {returnDays} days of delivery, with nothing to send back. Visit the [Paducah page](/eye-drops/paducah-ky) and the [Kentucky page](/eye-drops/state/kentucky), or [order Quell here](/#buy).`,
      },
      { h: 'When to see a doctor' },
      {
        p: `If your eyes hurt, your vision changes, or dryness keeps coming back, a drop isn’t the answer. The label’s guidance: {stopUse} An optometrist or ophthalmologist can look for the cause. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for the full list.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Paducah, Kentucky?',
        a: 'By rainfall, August, at about 3.11 inches in NOAA’s 1991 to 2020 normals. By afternoon humidity, October is lowest, averaging about 52 percent at Barkley Regional Airport.',
      },
      {
        q: 'How humid is Paducah in the summer?',
        a: 'Very humid in the morning. NOAA lists August mornings at about 90 percent humidity, easing to about 56 percent in the afternoon, with July highs near 90°F.',
      },
      {
        q: 'Why do my eyes get tired when I quilt?',
        a: 'Close, detailed work slows your blinking, so the tear film thins between blinks. Regular breaks to look across the room, a lamp aimed at the fabric and full blinks often help.',
      },
      {
        q: 'Can I order Quell to Paducah, KY?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Paducah and nearby towns with guest checkout and tracking by email. No delivery date is promised.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-baton-rouge-la:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013970.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013970.csv
   *   (BATON ROUGE RYAN AP, elev 19.5 m: annual precip 61.94 in; Jun 6.45, Aug 6.37,
   *   Jan 6.36; Nov 3.90 driest; annual snow 0.2 in; Aug high 92.2 F, Jul 91.9 F;
   *   Jan high 62.3 F, low 41.6 F; 96.4 days at or above 90 F; 18.4 nights at or
   *   below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (BATON ROUGE, LA, WBAN 13970: mornings 89 to 93 Apr through Oct; Aug 93/61;
   *   Oct 90/54 lowest afternoon; Apr 89/55; Jan 85/62, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (BATON ROUGE annual 2.9, lowest of the four Louisiana rows: New Orleans 3.6,
   *   Lake Charles 3.4, Shreveport 3.2; Feb 3.5 windiest, Aug 2.2 calmest)
   * Elevation is the NOAA station elevation, converted (19.5 m is about 64 ft).
   */
  {
    slug: 'dry-eye-relief-baton-rouge-la',
    title: 'Dry eye relief in Baton Rouge, Louisiana',
    description:
      'Baton Rouge tops 90°F on about 96 days a year, so air conditioning runs for months. Why eyes feel dry in a humid city, with NOAA’s numbers and simple fixes.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Baton Rouge’s outdoor air is rarely dry, so dry eyes there usually come from what keeps people comfortable: air conditioning running through some 96 days a year at 90°F or more, plus screens and sun. Point vents away from your face, blink fully during close work, wear sunglasses outdoors, and use a lubricating drop as its label directs. An eye doctor should check dryness that persists.`,
      },
      { h: 'Baton Rouge weather, according to NOAA' },
      {
        p: `NOAA’s 1991 to 2020 normals for Baton Rouge Metropolitan Airport (Ryan Field), north of downtown at about 64 feet above sea level, show just how warm and wet the capital is:`,
      },
      {
        list: [
          `About 61.94 inches of rain a year, with June (6.45 inches), August (6.37) and January (6.36) the wettest months.`,
          `November is the driest at 3.90 inches.`,
          `August highs average 92.2°F, and roughly 96 days a year reach 90°F.`,
          `January averages 62.3°F in the afternoon and 41.6°F at dawn, with about 18 frosty nights a year.`,
          `Snow is close to nonexistent, about 0.2 inches in a normal year.`,
        ],
      },
      { h: 'Why eyes feel dry in such a humid city' },
      {
        p: `NOAA’s humidity table puts Baton Rouge mornings at 89 to 93 percent from April through October. With air that damp outdoors, it seems odd to have dry eyes at all. The answer is mostly indoors. Air conditioners pull water out of the air as they cool it, and the cooled air usually blows out of a vent at speed. Spend eight hours at a desk under a supply vent, then drive home with the dash vents on high, and the tear film has been in dry, moving air most of the day. Its oil layer slows evaporation from the water below, but steady airflow still thins it between blinks.`,
      },
      {
        list: [
          `Close or redirect the ceiling vent over your desk if your office allows it.`,
          `In the car, angle the vents toward your chest or the roof.`,
          `Set the bedroom thermostat a degree or two higher and skip the fan blowing on your pillow.`,
          `Clean or replace the air conditioner filter on schedule so the system isn’t blowing dust along with cold air.`,
        ],
      },
      { h: 'October: football, tailgates and the driest afternoons' },
      {
        p: `Fall is when Baton Rouge’s air finally loosens up. NOAA lists October afternoons at 54 percent humidity, the lowest of the year, and April comes close at 55. October is also peak tailgating season around LSU, with long afternoons in the sun, smoke from grills, and late nights under the stadium lights. Sunglasses help in the afternoon. Put drops in before you leave the tent rather than in the stands, keep the bottle in a shaded cooler pocket instead of a hot car, and close your eyes for a few seconds between plays.`,
      },
      { h: 'Plant shifts, campus screens and long commutes' },
      {
        p: `A lot of Baton Rouge works long, focused hours: rotating shifts in the plants along the river, state jobs downtown, students studying at LSU and Southern University. Control rooms, labs and libraries share chilled, dry air and a lot of screen time. Screens cut the blink rate, and a twelve-hour night shift adds tired eyes on top of that. [Dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) has a routine built for rotating schedules. Traffic on I-10 and I-12 adds another stretch of staring and car vents, so give your eyes a rest before the drive home.`,
      },
      { h: 'A calm city, with a breezier February' },
      {
        p: `NOAA’s wind table shows Baton Rouge with the lightest average wind of the four Louisiana stations it lists, below New Orleans, Lake Charles and Shreveport. February is the windiest month and August the calmest. A breezy February day on the levee path or at a Mardi Gras parade, combined with heated indoor air at night, is when some people notice watery eyes outside and dry ones at home.`,
      },
      { h: 'What the Quell label covers' },
      {
        p: `Quell is a lubricating eye drop made without preservatives. It is designed to reinforce the tear film’s oil layer to help reduce moisture loss. On the Drug Facts panel, its Uses read: {uses}. Directions read: {directions}. And: {tip}.`,
      },
      {
        p: `The panel’s storage line matters in Louisiana: {storage}. A car parked in an August lot gets far hotter than that, so don’t leave the bottle in the glove box. The warning section reads: {warnings}. Read the rest on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in Baton Rouge' },
      {
        p: `We ship from Brentwood, Tennessee, to Baton Rouge, Denham Springs, Zachary, Gonzales and the rest of the United States. Guest checkout is available, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking comes by email, and we don’t promise a delivery date. An unopened bottle can be refunded within {returnDays} days of delivery, and you don’t have to send it back. More on the [Baton Rouge page](/eye-drops/baton-rouge-la) and the [Louisiana page](/eye-drops/state/louisiana).`,
      },
      { h: 'When an eye doctor should take over' },
      {
        p: `Drops are meant for ordinary dryness. The label’s stop-use line: {stopUse} Pain, changes in vision, or dryness that keeps coming back are worth an eye exam. Our guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists what to watch for.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel dry in Baton Rouge when it’s so humid?',
        a: 'Indoor air is the usual cause. Air conditioning removes moisture as it cools, and vents push that dry air across your face for hours at a time at work, at home and in the car.',
      },
      {
        q: 'What is the least humid month in Baton Rouge?',
        a: 'October. NOAA’s humidity table lists Baton Rouge afternoons at about 54 percent in October, the lowest of the year, with April close behind at 55 percent.',
      },
      {
        q: 'How many days does Baton Rouge hit 90 degrees?',
        a: 'About 96 days a year, according to NOAA’s 1991 to 2020 normals for the Baton Rouge airport, with August highs averaging 92.2°F.',
      },
      {
        q: 'Does Quell ship to Baton Rouge?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Baton Rouge and surrounding parishes, with guest checkout and tracking by email but no promised delivery date.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-lake-charles-la:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00003937.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00003937.csv
   *   (LAKE CHARLES, LA (regional airport), elev 4.0 m: annual precip 59.75 in;
   *   Jun 6.54 wettest, Aug 6.19, Feb 3.26 driest; no snowfall normal published;
   *   Aug high 92.8 F, Jul 92.2 F; Jan high 63.0 F, low 43.4 F; 88.5 days at or
   *   above 90 F; 10.9 nights at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (LAKE CHARLES, LA, WBAN 03937: mornings 87 to 93 all year; Jul and Aug 93,
   *   Aug afternoon 62; Oct 90/56 lowest afternoon; Dec 88/65, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (LAKE CHARLES annual 3.4; Feb 4.1 windiest, Aug 2.4 calmest; New Orleans 3.6,
   *   Shreveport 3.2, Baton Rouge 2.9)
   * Elevation is the NOAA station elevation, converted (4.0 m is about 13 ft).
   */
  {
    slug: 'dry-eye-relief-lake-charles-la',
    title: 'Dry eye relief in Lake Charles, Louisiana',
    description:
      'Lake Charles mornings average 87 to 93 percent humidity, yet eyes still dry out. Casinos, plant shifts and air conditioning, plus NOAA’s local numbers.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `In Lake Charles, the dry air your eyes feel is almost always man-made. NOAA records morning humidity between 87 and 93 percent in every month, but long hours in air-conditioned casinos, plants, offices and cars dry the eye’s surface anyway. Steer vents and fans away from your face, rest your eyes during screen work, use a lubricating drop as labeled, and have an eye doctor check dryness that won’t settle down.`,
      },
      { h: 'Southwest Louisiana’s climate in numbers' },
      {
        p: `The official normals come from NOAA’s Lake Charles station at the regional airport, only about 13 feet above sea level. From the 1991 to 2020 record:`,
      },
      {
        list: [
          `About 59.75 inches of rain a year. June is wettest at 6.54 inches; February is driest at 3.26.`,
          `August highs average 92.8°F, and about 88 days a year reach 90°F.`,
          `January afternoons average 63.0°F, with lows near 43.4°F.`,
          `Only about 11 nights a year fall to freezing.`,
          `NOAA publishes no snowfall normal for the station at all.`,
        ],
      },
      { h: 'Humid outside, desert-dry inside' },
      {
        p: `NOAA’s humidity table for Lake Charles never shows a morning below 87 percent, and July and August mornings reach 93. Even afternoons stay at 56 percent or higher. Step outside in August and your eyes are surrounded by moisture. Step into a building and it changes. Air conditioning cools air partly by condensing water out of it, then blows that drier air into the room. For eyes, the question is less about the weather report and more about where the nearest vent is pointing. The tear film’s oil layer slows evaporation, but constant airflow across the face still dries it between blinks.`,
      },
      { h: 'Long nights on the casino floor' },
      {
        p: `The big casino resorts along the lake keep their gaming floors cool, bright and busy, and a session at a slot machine or a card table can run for hours. Staring at a screen or at cards cuts the blink rate, the room’s cooled air keeps moving, and late hours add tired eyes to the mix. If you work a shift there or spend an evening playing:`,
      },
      {
        list: [
          `Look away from the screen or table every 20 minutes or so and blink slowly a few times.`,
          `Choose a seat away from overhead supply vents when you can.`,
          `Put your drops in before you head to the floor, with clean hands.`,
          `Keep the bottle in a pocket or purse rather than in a hot car in the parking garage.`,
        ],
      },
      { h: 'Plant work and rotating shifts' },
      {
        p: `Refineries, chemical plants and LNG terminals around Lake Charles and Westlake run around the clock, and many jobs mean twelve-hour rotations in cooled control rooms, outdoor rounds in heat and wind, or both on the same shift. Moving from a humid unit to a chilled control room and back again is hard on the eyes. Safety glasses help outdoors against wind and dust. Night rotations bring their own fatigue, and our guide to [dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) walks through a routine for them.`,
      },
      { h: 'Fishing, the Creole Nature Trail and February wind' },
      {
        p: `Weekends often mean the water: crabbing on the Calcasieu, fishing the marshes, or driving the Creole Nature Trail toward the Gulf. Glare off open water makes people squint, and a boat at speed makes its own wind. NOAA’s wind table names February as Lake Charles’s windiest month and August its calmest, and the station averages more wind than Baton Rouge but less than New Orleans. Polarized sunglasses with side coverage handle both glare and breeze. Use your drops at the launch, not out in the spray.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists these Uses: {uses}. For directions it says: {directions}. While using it: {tip}.`,
      },
      {
        p: `The storage line reads: {storage}. A glove box in a Lake Charles parking lot in July runs far past that range, so carry the bottle inside with you. The panel also says: {doNotUse}. Every section is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in Lake Charles' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Lake Charles, Sulphur, Moss Bluff, Westlake and the rest of the country. There’s guest checkout, shipping is {shipping}, and {freeBottles} or more bottles ship free. Tracking arrives by email, though no delivery date is promised. If a bottle is still sealed, you can get a refund within {returnDays} days of delivery without mailing it back. The [Lake Charles page](/eye-drops/lake-charles-la) and the [Louisiana page](/eye-drops/state/louisiana) have more local detail.`,
      },
      { h: 'When to call an eye doctor' },
      {
        p: `A lubricating drop is for routine dryness, not for symptoms that point to something else. The label puts it this way: {stopUse} Eye pain, vision changes and dryness that keeps returning all deserve an exam. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has more.`,
      },
    ],
    faq: [
      {
        q: 'How humid is Lake Charles, Louisiana?',
        a: 'Very. NOAA’s humidity table lists Lake Charles mornings between 87 and 93 percent in every month of the year, and afternoons never average below 56 percent.',
      },
      {
        q: 'Why do my eyes get dry in a casino?',
        a: 'Casino floors are cool and air-conditioned, and staring at a screen or cards cuts how often you blink. Regular breaks, full blinks and a seat away from vents usually help.',
      },
      {
        q: 'What is the windiest month in Lake Charles?',
        a: 'February, according to NOAA’s wind table for the Lake Charles airport station. August is the calmest month of the year there.',
      },
      {
        q: 'Does Quell ship to Lake Charles?',
        a: 'Yes. Quell ships to Lake Charles, Sulphur and the rest of Calcasieu Parish from Brentwood, Tennessee, with tracking by email and no promised delivery date.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-worcester-ma:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00094746.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00094746.csv
   *   (WORCESTER RGNL AP, elev 304.8 m: annual precip 48.26 in; Oct 4.84 wettest,
   *   Feb 3.26 driest; annual snow 72.9 in, Feb 21.2, Jan 18.2, Dec 14.9, Mar 13.7;
   *   Jan high 32.3 F, low 17.1 F; Jul high 79.8 F; 2.9 days at or above 90 F;
   *   129.7 nights at or below 32 F; 45.4 days with a high at or below 32 F;
   *   3.8 nights at or below 0 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (WORCESTER, MA, WBAN 94746: Apr 68/49, the lowest morning and afternoon;
   *   Sep 81/60; Dec 76/63, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (WORCESTER annual 4.5; Jan, Feb and Mar 5.1 windiest, Aug 3.7 calmest;
   *   Boston 5.1, Blue Hill 5.4)
   * Elevation is the NOAA station elevation, converted (304.8 m is about 1,000 ft).
   */
  {
    slug: 'dry-eye-relief-worcester-ma',
    title: 'Dry eye relief in Worcester, Massachusetts',
    description:
      'Worcester averages about 73 inches of snow, and April afternoons drop to 49 percent humidity in NOAA’s records. How the seasons dry your eyes, and what helps.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Dry eye relief in Worcester follows the calendar: radiator heat and windy, snowy months from December through March, then April, when NOAA’s records show the lowest humidity of the year, near 49 percent in the afternoon. Keep heat and wind off your eyes, blink fully at screens, use a lubricating drop as its label says, and see an eye doctor if dryness keeps returning.`,
      },
      { h: 'Worcester’s climate by the numbers' },
      {
        p: `NOAA’s official Worcester station is at Worcester Regional Airport, on high ground west of the city at about 1,000 feet. Its 1991 to 2020 normals:`,
      },
      {
        list: [
          `About 48.26 inches of precipitation, spread evenly through the year; October is wettest at 4.84 inches and February driest at 3.26.`,
          `About 72.9 inches of snow, with February the snowiest month at 21.2 inches, then January (18.2), December (14.9) and March (13.7).`,
          `January highs average 32.3°F and lows 17.1°F.`,
          `About 130 nights a year reach freezing, and around 45 days never rise above it.`,
          `Summer is mild, with July highs near 80°F and only about 3 days a year at 90°F.`,
        ],
      },
      { h: 'Radiators, triple-deckers and dry winter rooms' },
      {
        p: `Many Worcester homes are older triple-deckers and apartments with steam or hot-water radiators, and plenty of renters don’t control the thermostat. Heated rooms in a long winter lose relative humidity, because warming cold air without adding water dries it out. The tear film’s water layer evaporates faster in that air, and people often notice it on waking or late in the evening.`,
      },
      {
        list: [
          `A small humidifier in the bedroom helps when you can’t turn the heat down. Clean it as the maker directs.`,
          `Keep your bed and desk away from the radiator, or at least don’t face it.`,
          `If the room runs hot, crack a window briefly; cooler air feels less harsh on the eyes.`,
          `Turn the car heater toward your feet on the drive up Route 9 or I-290.`,
        ],
      },
      {
        p: `There’s more on this in [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes).`,
      },
      { h: 'Wind and snow on the hills' },
      {
        p: `NOAA’s wind table shows January, February and March tied as Worcester’s windiest months, with August the calmest. The city’s hills catch it, too. Shoveling a driveway on a windy morning or walking across a campus quad in February puts cold, moving air straight against the eye, which can make eyes water outside and feel gritty once you’re warm again. Glasses or goggles help when clearing snow. Worcester’s airport averages less wind than Boston’s, but cold wind doesn’t need to be strong to dry the eye’s surface.`,
      },
      { h: 'April: the driest month for your eyes' },
      {
        p: `Spring is when the outdoor air itself gets dry. NOAA lists April at 68 percent humidity in the morning and 49 percent in the afternoon, the lowest numbers of Worcester’s year. That is also when people head back outdoors to Lake Quinsigamond, the walking paths at Elm Park, and the first ballgames at Polar Park. Sunglasses help with both sun and breeze, and putting drops in before you leave home is easier than doing it in the wind.`,
      },
      { h: 'Students, commuters and screen time' },
      {
        p: `Worcester has a large student population across its colleges, and finals in December and April land in the two hardest stretches for dry eyes: radiator season and the driest spring air. Commuter rail riders reading on a phone face the same thing. Long screen sessions reduce blinking, so take short breaks, look out the window for a moment, and finish each blink. [Dry eyes while studying](/guides/dry-eyes-while-studying) gives a study-day plan.`,
      },
      { h: 'Quell’s Drug Facts, briefly' },
      {
        p: `Quell is a preservative-free lubricating eye drop, designed to reinforce the tear film’s oil layer to help reduce moisture loss. The panel gives its Uses as: {uses}. Its directions: {directions}. It also says: {tip}.`,
      },
      {
        p: `For storage: {storage}. A bottle left in a parked car through a January night will fall below that range, so keep it in your bag or coat. If the solution ever looks different, the label covers it: {doNotUse}. See the complete panel on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Worcester' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Worcester, Shrewsbury, Auburn, Holden and every other US address. Check out without an account. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You’ll get tracking by email, but delivery dates aren’t promised, so order before a storm or before the bottle is empty. Unopened bottles can be refunded within {returnDays} days of delivery, no return needed. See the [Worcester page](/eye-drops/worcester-ma) and the [Massachusetts page](/eye-drops/state/massachusetts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `For ordinary dryness, a lubricating drop is reasonable. For anything more, the label is clear: {stopUse} Pain, changes in sight and dryness that keeps returning call for an exam. Read [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for more.`,
      },
    ],
    faq: [
      {
        q: 'How much snow does Worcester, MA get a year?',
        a: 'About 72.9 inches in a normal year, according to NOAA’s 1991 to 2020 normals for Worcester Regional Airport. February is the snowiest month at about 21 inches.',
      },
      {
        q: 'What is the driest month in Worcester?',
        a: 'By humidity, April. NOAA lists Worcester’s April afternoons near 49 percent, the lowest of the year. By precipitation, February is driest at about 3.26 inches.',
      },
      {
        q: 'Why do radiators dry out my eyes?',
        a: 'Radiators warm the room without adding moisture, so relative humidity falls and tears evaporate faster. A humidifier and keeping your face away from the heat source usually help.',
      },
      {
        q: 'Does Quell ship to Worcester, Massachusetts?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Worcester and nearby towns, with guest checkout and tracking by email. No delivery date is promised.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-flint-mi:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014826.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00014826.csv
   *   (FLINT BISHOP INTL AP, elev 234.7 m: annual precip 31.97 in; May 3.68 wettest,
   *   Feb 1.68 driest; annual snow 52.1 in, Jan 15.1, Feb 13.0, Dec 11.4; Jan high
   *   29.9 F, low 16.0 F; Jul high 82.1 F; 10.9 days at or above 90 F; 140.8 nights
   *   at or below 32 F; 50.8 days with a high at or below 32 F; 9.2 nights at or
   *   below 0 F; 66.6 days with 1 in or more of snow on the ground)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (FLINT, MI, WBAN 14826: May 76/53, Apr 77/54, Jul 82/54, Sep 88/57,
   *   Dec 82/72, Jan 81/72, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (FLINT annual 4.0, same as Lansing; Detroit and Grand Rapids 4.2; Jan, Mar
   *   and Apr 4.6 windiest, Aug 3.0 calmest)
   * Elevation is the NOAA station elevation, converted (234.7 m is about 770 ft).
   */
  {
    slug: 'dry-eye-relief-flint-mi',
    title: 'Dry eye relief in Flint, Michigan',
    description:
      'Flint averages 52 inches of snow and about 51 days that stay below freezing, per NOAA. How Michigan winters and spring wind dry your eyes, and what helps.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `In Flint, dry eyes are mostly a winter and early-spring story. NOAA’s normals for Bishop International Airport show about 51 days a year that never get above freezing and some 67 days with snow on the ground, so furnaces run for months, and April and May bring the year’s driest afternoons. Keep warm air off your face, blink fully, use a lubricating drop as labeled, and see an eye doctor for lasting trouble.`,
      },
      { h: 'What NOAA’s Flint records show' },
      {
        p: `Flint’s official weather station is at Bishop International Airport, southwest of downtown at about 770 feet. From the 1991 to 2020 normals:`,
      },
      {
        list: [
          `About 31.97 inches of precipitation a year. May is the wettest month at 3.68 inches and February the driest at 1.68.`,
          `About 52.1 inches of snow, with January (15.1), February (13.0) and December (11.4) leading.`,
          `January runs from about 16.0°F at dawn to 29.9°F in the afternoon.`,
          `Around 141 nights a year reach freezing, and about 9 drop to zero or below.`,
          `July highs average 82.1°F, with roughly 11 days a year at 90°F.`,
        ],
      },
      { h: 'The long heating season' },
      {
        p: `From late November into March, Flint homes, schools and plants are heated most hours of the day. NOAA lists December and January afternoons at 72 percent humidity outdoors, but that number describes cold air. Warm it to room temperature and the relative humidity drops a long way, which is why winter rooms feel dry even on a gray, damp day. Dry, warm air pulls water from the tear film faster, and forced-air vents keep that air moving.`,
      },
      {
        list: [
          `Use a humidifier where you sleep and clean it as its instructions say.`,
          `Move your recliner or desk so a floor vent isn’t blowing up at your face.`,
          `Warm up the car with the heat aimed at the windshield, then keep the dash vents off your eyes on I-75.`,
          `Give your eyes a screen break every half hour or so on long winter evenings.`,
        ],
      },
      {
        p: `Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more ways to raise humidity indoors.`,
      },
      { h: 'Plant floors and the auto industry' },
      {
        p: `General Motors was founded in Flint, and auto work still shapes the area, from truck assembly to suppliers and engineering offices. Big plants move a lot of heated or cooled air, and some stations sit close to heaters, open doors or machinery that throws off warm air. Safety glasses block debris and some airflow. On long shifts, a few seconds with your eyes closed during a break and a full blink now and then help keep the eye’s surface comfortable. Engineering and office work bring their own version through hours of CAD and spreadsheets.`,
      },
      { h: 'April and May: wind and the driest afternoons' },
      {
        p: `NOAA’s wind table ties January, March and April as Flint’s windiest months, while August is the calmest. Humidity drops in spring, too: April afternoons average 54 percent and May 53, the lowest of the year. Put those together and a walk along the Flint River Trail or yard work on a breezy April afternoon can leave eyes feeling scratchy. Wraparound sunglasses help, and so does putting drops in before you head outside rather than in the wind.`,
      },
      { h: 'Summer races, car shows and air conditioning' },
      {
        p: `Summer in Flint means outdoor crowds: runners at the Crim in August, classic cars downtown for Back to the Bricks, evenings at Genesee County parks. Sun and glare matter more than dry air then, since NOAA puts summer mornings well into the 80s for humidity. Indoors, air conditioning and car vents do the drying. Sunglasses outside and vents pointed away from your face inside cover most of it.`,
      },
      { h: 'What the label says about Quell' },
      {
        p: `Quell is a preservative-free lubricating eye drop that’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel names these Uses: {uses}. Directions: {directions}. Also on the panel: {tip}.`,
      },
      {
        p: `Storage on the label: {storage}. A Flint garage or car in January can drop below that, so keep the bottle in the house. If you’re wondering about the color: {appearance} You can read the whole panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Flint' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Flint, Grand Blanc, Burton, Flushing, Fenton and everywhere else in the United States. Guest checkout works fine. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking is sent by email, but there’s no promised delivery date, so order ahead of a snowstorm. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. The [Flint page](/eye-drops/flint-mi) and the [Michigan page](/eye-drops/state/michigan) have local details.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Drops can ease everyday dryness. The label lists when to stop: {stopUse} Eye pain, a change in your vision, or dryness that keeps coming back are good reasons for an eye exam. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'How much snow does Flint, Michigan get?',
        a: 'About 52 inches in a normal year, according to NOAA’s 1991 to 2020 normals for Bishop International Airport. January is the snowiest month at about 15 inches.',
      },
      {
        q: 'What is the windiest month in Flint?',
        a: 'NOAA’s wind table ties January, March and April as Flint’s windiest months, with August the calmest. Spring wind arrives just as afternoon humidity hits its low for the year.',
      },
      {
        q: 'Why do my eyes feel dry in a Michigan winter?',
        a: 'Furnace heat warms cold outdoor air without adding moisture, so indoor humidity drops and tears evaporate faster. A humidifier and keeping vents off your face are easy first steps.',
      },
      {
        q: 'Does Quell ship to Flint, Michigan?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Flint and Genesee County with guest checkout and tracking by email. No delivery date is promised.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-rochester-mn:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014925.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00014925.csv
   *   (ROCHESTER INTL AP, MN, elev 397.5 m: annual precip 34.67 in; Jun 5.35 wettest,
   *   Jan 0.99 driest; annual snow 53.1 in, Dec 12.4, Jan 12.2; Jan high 22.5 F,
   *   low 7.0 F; Jul high 80.3 F; 5.0 days at or above 90 F; 155.8 nights at or
   *   below 32 F; 78.1 days with a high at or below 32 F; 25.5 nights at or below
   *   0 F; 88.9 days with 1 in or more of snow on the ground)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (ROCHESTER, MN, WBAN 14925: Dec 83/76, Jan 81/74, Apr 80/57, May 80/56
   *   lowest afternoon, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (ROCHESTER, MN annual 5.4, highest of the Minnesota rows: Duluth 4.5,
   *   Minneapolis-St. Paul 4.3, St. Cloud 3.7; Apr 6.1 windiest, Aug 4.1 calmest)
   * Elevation is the NOAA station elevation, converted (397.5 m is about 1,304 ft).
   */
  {
    slug: 'dry-eye-relief-rochester-mn',
    title: 'Dry eye relief in Rochester, Minnesota',
    description:
      'Rochester’s airport is the windiest Minnesota station in NOAA’s table, with about 78 days a year below freezing. What that means for dry eyes, and what helps.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Rochester, Minnesota, pairs a long, frozen winter with a lot of wind. NOAA’s normals count about 78 days a year that stay below freezing and some 25 nights at or below zero, and the airport averages the most wind of any Minnesota station in NOAA’s table. Shield your eyes outdoors, keep heated air off your face, blink fully, use a lubricating drop as labeled, and see an eye doctor for lasting dryness.`,
      },
      { h: 'Rochester’s weather by the numbers' },
      {
        p: `The city’s official station is Rochester International Airport, south of town on open ground at about 1,304 feet. NOAA’s 1991 to 2020 normals list:`,
      },
      {
        list: [
          `About 34.67 inches of precipitation a year, with June wettest (5.35 inches) and January driest (0.99).`,
          `About 53.1 inches of snow, led by December (12.4) and January (12.2).`,
          `January averages a high of 22.5°F and a low of 7.0°F.`,
          `Around 156 nights reach freezing, and the ground holds an inch or more of snow on about 89 days.`,
          `Summers are mild: July highs near 80°F and about 5 days a year at 90°F.`,
        ],
      },
      { h: 'Minnesota’s windiest station in NOAA’s table' },
      {
        p: `NOAA’s wind table lists Rochester’s airport with a higher annual average than Duluth, Minneapolis-St. Paul or any other Minnesota station it includes. April is the windiest month and August the calmest. Wind matters to eyes because moving air carries moisture off the surface between blinks, and cold wind does it while making eyes water at the same time. The result is a familiar pattern: streaming eyes on the walk from the parking ramp, then a dry, sandy feeling an hour later indoors.`,
      },
      {
        list: [
          `Wear glasses or sunglasses with wide arms on windy days; even plain lenses block some airflow.`,
          `Turn your back to the wind while you wait at a bus stop or scrape the windshield.`,
          `Add drops before you go out, not in the wind, so they aren’t blown off the eye or chilled.`,
          `Pull a hat brim low on bright, snowy days to cut glare and breeze together.`,
        ],
      },
      { h: 'Skyways, waiting rooms and hotel rooms' },
      {
        p: `Downtown Rochester connects much of its core through skyways and an underground pedestrian subway, so it’s possible to spend a whole winter week indoors there. That climate-controlled air is warm and dry. People who come to the city’s large downtown medical campus for appointments often spend long days in waiting rooms and nights in hotel rooms with the heat on, reading on phones and tablets. Hotel rooms are a good place for a portable humidifier, or at least a lower thermostat and a fan turned away from the bed. Our guide to [dry eyes in hotel rooms](/guides/dry-eyes-in-a-hotel-room) has more ideas.`,
      },
      { h: 'Winter at home in Olmsted County' },
      {
        p: `NOAA puts December afternoons at 76 percent humidity outdoors, but that is cold air. Heated to room temperature, its relative humidity drops sharply, so homes in Rochester, Byron and Stewartville get dry from November through March. Keep a humidifier in the bedroom, avoid sleeping under a ceiling fan, and move chairs away from forced-air vents. More is in [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes).`,
      },
      { h: 'Spring and the drive to the Cities' },
      {
        p: `May brings Rochester’s lowest afternoon humidity, about 56 percent in NOAA’s table, right after the windiest month of the year. Spring yard work, walks around Silver Lake and trail rides at Quarry Hill all happen in that drier, breezier air. Highway 52 to the Twin Cities adds an hour or more of staring at the road with dash vents running. Point the vents down and take a short break if your eyes start to burn.`,
      },
      { h: 'Reading the Quell label' },
      {
        p: `Quell is a lubricating eye drop without preservatives. It is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives the Uses as: {uses}. The directions: {directions}. While using it: {tip}.`,
      },
      {
        p: `The storage line reads: {storage}. A car parked outside on a subzero night falls far below that, so keep the bottle indoors or in an inside pocket. The panel’s warning: {warnings}. All of it is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell to Rochester' },
      {
        p: `We ship from Brentwood, Tennessee, to Rochester, Byron, Stewartville, Kasson and every other US address, including hotels for visitors staying a while. Checkout doesn’t require an account. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You’ll get tracking by email, though no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery, and they don’t have to be returned. See the [Rochester page](/eye-drops/rochester-mn) and the [Minnesota page](/eye-drops/state/minnesota).`,
      },
      { h: 'When dryness needs a professional' },
      {
        p: `A drop is for ordinary dryness. The label says: {stopUse} Pain, vision changes, or dryness that keeps coming back need an eye exam rather than more drops. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) explains what to watch for.`,
      },
    ],
    faq: [
      {
        q: 'Is Rochester, Minnesota windy?',
        a: 'Yes, by Minnesota standards. NOAA’s wind table shows Rochester’s airport with a higher annual average than Duluth or Minneapolis-St. Paul, and April is its windiest month.',
      },
      {
        q: 'How cold does Rochester, MN get?',
        a: 'NOAA’s normals show January lows averaging 7.0°F, about 25 nights a year at or below zero, and roughly 78 days whose high stays at or below freezing.',
      },
      {
        q: 'Does Rochester, MN have skyways?',
        a: 'Yes. Downtown Rochester links many buildings through skyways and an underground pedestrian subway. The heated air inside is dry in winter, so breaks from screens and full blinks help on long indoor days.',
      },
      {
        q: 'Does Quell ship to Rochester, Minnesota?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Rochester and nearby towns, with guest checkout and tracking by email but no promised delivery date.',
      },
    ],
  },
  /*
   * Sources fetched 2026-11-17 for dry-eye-relief-columbia-mo:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00003945.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00003945.csv
   *   (COLUMBIA RGNL AP, MO, elev 272.2 m: annual precip 41.43 in; Apr 4.88
   *   wettest, May 4.77; Dec 2.09 driest; annual snow 16.5 in, Jan 6.0, Feb 4.6;
   *   Jul high 88.5 F; Jan high 39.5 F, low 22.5 F; 34.7 days at or above 90 F;
   *   101.1 nights at or below 32 F; 23.6 days with a high at or below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (COLUMBIA, MO, WBAN 03945: Apr 79/55 lowest afternoon, Aug 89/58,
   *   Oct 85/57, Dec 82/68, morning/afternoon)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/wndspd23.txt
   *   (COLUMBIA, MO annual 4.2; Mar and Apr 5.0 windiest, Jul and Aug 3.3 calmest;
   *   Kansas City 4.6, Springfield 4.1, St. Louis 4.0)
   * Elevation is the NOAA station elevation, converted (272.2 m is about 893 ft).
   */
  {
    slug: 'dry-eye-relief-columbia-mo',
    title: 'Dry eye relief in Columbia, Missouri',
    description:
      'Columbia’s windiest months are March and April, and April afternoons hit 55 percent humidity, the year’s low per NOAA. What dries mid-Missouri eyes, and fixes.',
    category: 'local',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Columbia, Missouri, gives dry eyes three seasons to work with: furnace-dry winters, a windy spring when NOAA’s records show the year’s lowest afternoon humidity (about 55 percent in April), and long air-conditioned summers. Keep wind and vent air off your eyes, rest them during study and screen time, use a lubricating drop exactly as its label says, and let an eye doctor check dryness that keeps returning.`,
      },
      { h: 'Columbia’s climate, from NOAA’s normals' },
      {
        p: `NOAA’s station for the city is Columbia Regional Airport, well south of town toward Jefferson City, at about 893 feet. Its 1991 to 2020 normals:`,
      },
      {
        list: [
          `About 41.43 inches of precipitation a year. April (4.88 inches) and May (4.77) are wettest, and December (2.09) is driest.`,
          `Around 16.5 inches of snow, with January the snowiest month at 6.0.`,
          `July highs average 88.5°F, and about 35 days a year reach 90°F.`,
          `January runs from 22.5°F at dawn to 39.5°F in the afternoon.`,
          `About 101 nights a year fall to freezing, and roughly 24 days stay at or below it.`,
        ],
      },
      { h: 'Spring wind on open ground' },
      {
        p: `NOAA’s wind table ties March and April as Columbia’s windiest months, while July and August are the calmest. The airport averages more wind than St. Louis or Springfield, though less than Kansas City. In April, that wind arrives with the driest afternoon air of the year. A bike ride on the Katy Trail through the river bottoms, a soccer game at a city park, or a hike at Rock Bridge on a gusty day sends dry, moving air across the eye, and the tear film thins quickly between blinks.`,
      },
      {
        list: [
          `Wear sunglasses that wrap around the sides when riding or running in the wind.`,
          `On a bike, a clear lens on cloudy days blocks wind just as well as a tinted one.`,
          `Put your drops in at the trailhead before you start, with clean hands.`,
          `Stop now and then to close your eyes for a few seconds out of the wind.`,
        ],
      },
      { h: 'College town hours: studying, screens and stadiums' },
      {
        p: `With the University of Missouri, Stephens College and Columbia College all in town, a large part of Columbia lives on a semester calendar. Finals in December and May mean marathon sessions in libraries and dorms, where screens and heated or cooled air combine. Long focus cuts the blink rate, and a dorm room with the heat on high dries the eye’s surface faster. Take short breaks, look across the room, and make each blink a complete one. [Dry eyes in a dorm room in winter](/guides/dry-eyes-in-a-dorm-room-in-winter) has a plan for student housing.`,
      },
      {
        p: `Fall Saturdays at Faurot Field bring their own mix: hours in the sun, tailgate smoke and a late drive home. Sunglasses for the day game and vents aimed away from your face on the way back make a difference.`,
      },
      { h: 'Summer air conditioning, winter furnace heat' },
      {
        p: `August mornings in Columbia reach 89 percent humidity in NOAA’s table, so outdoor air in summer is rarely the issue. Offices, classrooms and cars on I-70 are. Air conditioning removes moisture and pushes air out of vents at speed. Winter flips the source but not the result: about 101 freezing nights a year mean furnaces run steadily from December into March, and heated air holds less relative humidity. In both seasons, the fix is similar. Turn vents away from your face, keep fans off at night, and consider a humidifier in the bedroom during heating season. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has details.`,
      },
      { h: 'Quell’s label, in brief' },
      {
        p: `Quell is a preservative-free lubricating eye drop, designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses: {uses}. Directions: {directions}. The panel also says: {tip}.`,
      },
      {
        p: `Storage, per the label: {storage}. A backpack left in a hot car in July, or in a cold one in January, can push the bottle outside that range. The panel’s other cautions are all on our [Drug Facts page](/drug-facts), including this one: {doNotUse}.`,
      },
      { h: 'Ordering Quell to Columbia' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Columbia, Ashland, Hallsville, Fulton and every other US address, including campus mailing addresses that accept packages. You can check out as a guest. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking comes by email, but we don’t promise a delivery date. Unopened bottles can be refunded within {returnDays} days of delivery, with nothing to send back. More on the [Columbia page](/eye-drops/columbia-mo) and the [Missouri page](/eye-drops/state/missouri).`,
      },
      { h: 'When an eye doctor is the next step' },
      {
        p: `If drops and simple changes don’t help, or something feels wrong, stop and get checked. The label: {stopUse} Eye pain, a change in vision, or dryness that keeps returning call for an optometrist or ophthalmologist. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'What is the windiest month in Columbia, Missouri?',
        a: 'March and April tie as the windiest months in NOAA’s wind table for Columbia Regional Airport. July and August are the calmest.',
      },
      {
        q: 'How hot does Columbia, MO get in the summer?',
        a: 'NOAA’s 1991 to 2020 normals show July highs averaging 88.5°F, with about 35 days a year reaching 90°F or more at Columbia Regional Airport.',
      },
      {
        q: 'Why do my eyes get dry during finals week?',
        a: 'Long study sessions at a screen or a book slow your blinking, and heated or air-conditioned rooms speed evaporation. Short breaks, full blinks and keeping vents off your face help.',
      },
      {
        q: 'Does Quell ship to Columbia, Missouri?',
        a: 'Yes. Quell ships from Brentwood, Tennessee, to Columbia and the rest of Boone County, with guest checkout and tracking by email. No delivery date is promised.',
      },
    ],
  },
  /*
   * Sources checked 2026-11-17 for can-i-use-my-hsa-after-65-for-eye-drops:
   * - https://www.irs.gov/publications/p969 (Publication 969 (2025), "For use in
   *   preparing 2025 Returns"): eligible individual "aren't enrolled in Medicare";
   *   "Beginning with the first month you are enrolled in Medicare, your
   *   contribution limit is zero", including retroactive coverage; additional 20
   *   percent tax on non-qualified distributions, "no additional tax on
   *   distributions made after the date you are disabled, reach age 65, or die";
   *   premiums for "Medicare and other health care coverage if you were 65 or
   *   older (other than ... Medigap)"; qualified expenses for you, your spouse and
   *   dependents; can't deduct on Schedule A what the HSA paid; report on Form 8889;
   *   keep records. OTC medicine counts as medical care (Pub 969 FSA section).
   * - CARES Act section 3702, OTC medicines without a prescription for amounts paid
   *   after Dec 31, 2019, as already cited in 2026-11-11-a.ts.
   */
  {
    slug: 'can-i-use-my-hsa-after-65-for-eye-drops',
    title: 'Can I use my HSA after 65 for eye drops?',
    description:
      'Yes. After 65, HSA money still pays for OTC eye drops tax-free. What IRS Publication 969 says changes at 65 and with Medicare, and the records to keep.',
    category: 'ordering',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Yes. Turning 65 doesn’t take away your HSA, and the money in it can still pay for over-the-counter eye drops tax-free, because since the CARES Act of 2020 OTC medicines count as qualified medical expenses without a prescription. IRS Publication 969 says what changes is elsewhere: Medicare enrollment stops new contributions, and at 65 non-medical withdrawals lose the extra penalty tax.`,
      },
      { h: 'Can I use my HSA after 65 for anything?' },
      {
        p: `Almost, with a catch. Publication 969 says an extra 20 percent tax applies to HSA money you take out for something other than qualified medical expenses, and then lists the exceptions: there’s no additional tax on distributions made after you’re disabled, reach age 65, or die. So after 65 you can take money out for groceries, travel or anything else without that penalty.`,
      },
      {
        p: `What doesn’t go away is ordinary income tax. A non-medical withdrawal is still taxable income after 65, reported on Form 8889 with your return. Medical withdrawals, including eye drops, stay completely tax-free at any age. So a vacation paid from the account after 65 is taxed like income, while a bottle of drops paid the same way isn’t taxed at all.`,
      },
      { h: 'Why OTC eye drops qualify' },
      {
        p: `Before 2020, an over-the-counter medicine generally needed a prescription to be reimbursed from an HSA. The CARES Act changed that for amounts paid after December 31, 2019, and Publication 969 now states that over-the-counter medicine, whether or not prescribed, counts as medical care. Quell is an OTC drug with a standard Drug Facts panel: its active ingredients are {actives}, and its stated Uses are: {uses}. The rule doesn’t depend on your age, so it applies the same at 66 as it did at 46. Our guide on [why OTC eye drops count for HSA and FSA](/guides/why-otc-eye-drops-count-for-hsa-and-fsa) covers the history.`,
      },
      { h: 'Medicare and HSA contribution rules' },
      {
        p: `The age that matters for contributions isn’t really 65. It’s the month you enroll in Medicare. Publication 969 lists “You aren’t enrolled in Medicare” as one of the requirements for contributing, and says that beginning with the first month you’re enrolled, your contribution limit is zero. Some points that follow from that:`,
      },
      {
        list: [
          `If you’re still working at 65 with a high-deductible plan and haven’t enrolled in any part of Medicare, you can generally keep contributing.`,
          `Once you enroll in Medicare, contributions stop for that month and after, but the balance stays yours to spend.`,
          `Retroactive Medicare coverage counts. The IRS says that if your enrollment is backdated, contributions made during the retroactive months are excess contributions.`,
          `In the year you enroll, your limit is usually prorated by the months you were eligible; Publication 969 shows a worked example for someone who turned 65 midyear.`,
        ],
      },
      {
        p: `The retroactive rule trips people up, so if you’re planning to sign up for Medicare or Social Security later than 65, ask your HSA custodian or a tax professional when to stop contributing.`,
      },
      { h: 'What can I spend my HSA on after 65?' },
      {
        p: `The same qualified medical expenses as before, plus one category that opens up at 65. Publication 969 generally doesn’t allow HSA money for insurance premiums, but it makes exceptions, including premiums for Medicare and other health coverage if you’re 65 or older. Premiums for a Medicare supplemental policy, such as Medigap, are excluded. Typical tax-free uses after 65 include:`,
      },
      {
        list: [
          `Over-the-counter medicines such as lubricating eye drops.`,
          `Deductibles, copays and coinsurance under Medicare or another plan.`,
          `Eligible Medicare premiums (not Medigap).`,
          `Qualified expenses for your spouse and dependents, whom Publication 969 lists alongside you.`,
        ],
      },
      {
        p: `Whether Medicare itself pays for an OTC drop is a separate question; [does Medicare cover over-the-counter eye drops](/guides/does-medicare-cover-over-the-counter-eye-drops) looks at that.`,
      },
      { h: 'Paying for Quell with HSA money' },
      {
        p: `You have two ways to use the account for an order:`,
      },
      {
        list: [
          `Pay with your HSA debit card at checkout. Whether it goes through depends on how the card network codes the purchase, so an eligible order can still be declined; have another card ready.`,
          `Pay with any card, then reimburse yourself from the HSA. Publication 969 says you can take a distribution at any time, though the expense must come after your HSA was opened.`,
        ],
      },
      {
        p: `Either way, keep the record. The IRS asks you to keep records showing that distributions were for qualified medical expenses, and not to send them with your return. Your order confirmation email works as the receipt; [getting a receipt for your order](/guides/getting-a-receipt-for-your-order) explains how to find it again. Checkout is as a guest, and there’s no subscription, so each order is its own purchase with its own receipt.`,
      },
      { h: 'Can I keep my HSA after 65?' },
      {
        p: `Yes. An HSA isn’t tied to a job or an age, and Publication 969 says amounts left at the end of the year generally carry over to the next. There’s no requirement to empty it at 65 or after you retire. What changes is only whether new money can go in. Many people use the remaining balance for out-of-pocket health costs for years afterward.`,
      },
      { h: 'Avoiding double benefits' },
      {
        p: `One rule to remember at tax time: you can’t also claim an expense paid from your HSA as an itemized medical deduction on Schedule A. If a bottle of drops was paid tax-free from the account, that’s the whole benefit. [Are eye drops tax deductible?](/guides/are-eye-drops-tax-deductible) covers deductions when you don’t use an HSA.`,
      },
      { h: 'What the account can’t tell you' },
      {
        p: `An HSA settles how you pay, not whether a drop is right for your eyes. Quell’s label directions read: {directions}. If you have pain, changes in vision, or dryness that keeps coming back, see an eye doctor. And for your own tax situation, especially around Medicare timing, your HSA custodian or a tax professional has the final word. This page describes the IRS rules in general and isn’t tax advice.`,
      },
    ],
    faq: [
      {
        q: 'Can I use my HSA after 65 for anything?',
        a: 'Yes, without the extra 20 percent penalty, according to IRS Publication 969. Non-medical withdrawals after 65 are still taxed as income, while qualified medical expenses like OTC eye drops stay tax-free.',
      },
      {
        q: 'Can I contribute to my HSA after 65?',
        a: 'Only if you aren’t enrolled in Medicare and still meet the other eligibility rules. Publication 969 says your contribution limit drops to zero starting the first month you’re enrolled, including any retroactive months.',
      },
      {
        q: 'Can I keep my HSA after 65?',
        a: 'Yes. The account stays yours after 65 and after retirement, and unused amounts generally carry over from year to year. Only new contributions are affected by Medicare enrollment.',
      },
      {
        q: 'Can I pay Medicare premiums with my HSA?',
        a: 'Generally yes if you’re 65 or older, according to IRS Publication 969, which allows Medicare premiums as qualified expenses. Premiums for a Medicare supplemental policy such as Medigap are excluded.',
      },
    ],
  },
  /*
   * Source checked 2026-11-17 for how-to-protect-your-eyes-from-cold-wind:
   * - https://www.weather.gov/safety/cold-wind-chill-chart: wind chill "is how
   *   cold people and animals feel when outside", based on heat loss from exposed
   *   skin; "wind chill applies only to people and animals"; an inanimate object
   *   cools more quickly to the air temperature but not below it.
   */
  {
    slug: 'how-to-protect-your-eyes-from-cold-wind',
    title: 'How to protect your eyes from cold wind',
    description:
      'Cover them, mostly: close-fitting glasses, a hat brim, your back to the wind, and drops put in indoors first. A step-by-step plan for cold, windy days.',
    category: 'seasonal',
    addedOn: '2026-11-17',
    body: [
      {
        p: `To protect your eyes from cold wind, put a physical barrier between the wind and the eye: close-fitting or wraparound glasses, a hat brim pulled low, and a hood or scarf that cuts side drafts. Turn away from gusts when you can, put any lubricating drops in indoors before you leave, keep the bottle in an inside pocket, and warm up gradually when you come back in.`,
      },
      { h: 'What cold wind does to the eye’s surface' },
      {
        p: `The front of the eye is covered by the tear film, a thin layer of oil over water over mucus. Every blink spreads it fresh. Moving air pulls moisture off that surface between blinks, and cold air carries very little moisture of its own, so wind on a winter day works on the eye from both sides. The eye often answers by watering heavily, which is why people walk in from a windy parking lot with tears running down their face and then, half an hour later, feel dry and gritty. The flood of reflex tears washes across the eye but doesn’t rebuild the tear film’s structure.`,
      },
      {
        p: `The National Weather Service describes wind chill as how cold people and animals feel outside, based on heat lost from exposed skin. The skin around your eyes is some of the most exposed skin you have on a winter walk, and the eye itself has no layer of clothing at all.`,
      },
      { h: 'How to protect dry eyes from wind, step by step' },
      {
        list: [
          `Before you go out, check the wind as well as the temperature. A calm 20°F morning is easier on the eyes than a windy 35°F one.`,
          `If you use a lubricating drop, put it in indoors, with clean hands, a few minutes before you leave. Out in the wind, the drop is harder to aim and the bottle tip is more likely to touch something.`,
          `Put on eyewear before you step outside, not after your eyes start to sting.`,
          `Add a hat with a brim or a hood with a stiff edge. It blocks wind coming over the top of your glasses.`,
          `Pull a scarf or neck gaiter up to the cheekbones if it doesn’t fog your lenses; it closes the gap underneath.`,
          `Walk or stand with your back or shoulder to the wind whenever the route allows it.`,
          `Blink on purpose now and then. People squint into wind, and a squint isn’t a full blink.`,
        ],
      },
      { h: 'Dry eye wind protection glasses: what to look for' },
      {
        p: `You don’t need special gear for most errands, but the shape of your eyewear matters more than the tint. As general guidance, without any product claims:`,
      },
      {
        list: [
          `Wraparound frames that curve toward the temples leave less of a gap at the sides, where gusts slip in.`,
          `A frame that sits close to the face blocks more air than one that perches far out on the nose.`,
          `Clear or lightly tinted lenses work on gray days and after dark; you don’t have to wear sunglasses to get the wind benefit.`,
          `Your regular prescription glasses already help. If wind gets around them, a hat brim and a hood close the top and sides.`,
          `For activities with real speed, like skiing, snowmobiling or riding, goggles seal far better than any glasses.`,
        ],
      },
      {
        p: `Fogging is the usual complaint. Letting your glasses cool for a moment before covering your nose and mouth, and wearing the scarf below the lens edge, often stops it.`,
      },
      { h: 'Common cold, windy situations' },
      {
        list: [
          `Waiting for a bus or train: stand on the downwind side of the shelter, not at the open end.`,
          `Walking the dog: plan the route so the windiest stretch is at your back on the way home, when your eyes are already tired.`,
          `Shoveling or blowing snow: wear glasses or goggles, since blowing snow and grit come straight at the face.`,
          `Watching an outdoor game: bring a hat with a brim and sit with your back to the prevailing wind if seats allow.`,
          `Working outside all shift: take short breaks out of the wind, even if it’s just behind a truck or inside a doorway.`,
        ],
      },
      {
        p: `Longer activities have their own guides: [ski trips and dry eyes](/guides/ski-trips-and-dry-eyes) for the slopes, and [dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers) for full days outside.`,
      },
      { h: 'Keeping eye drops usable in the cold' },
      {
        p: `Quell’s storage line reads: {storage}. A bottle in an outside coat pocket or a car on a cold day can fall below that range. The National Weather Service notes that wind chill applies only to people and animals: a wind makes an object cool to the air temperature faster, but not colder than the air. So a bottle in wind won’t freeze at 40°F, but it will reach the outdoor temperature sooner. An inside pocket near your body keeps it closer to room temperature. While you use it, the label adds: {tip}.`,
      },
      {
        p: `The directions on the panel read: {directions}. If you’re wondering whether a cold bottle is still good, [can eye drops freeze in a cold car](/guides/can-eye-drops-freeze-in-a-cold-car) covers that question.`,
      },
      { h: 'When you come back inside' },
      {
        p: `The trip from wind to a heated room is its own stress on the eye. Indoor heat is dry, and a car heater or floor vent often blows straight at your face. Wipe away tears with a clean tissue rather than rubbing, give your eyes a minute to settle, and keep your face out of the direct airflow from heaters. If the eyes still feel dry, that’s a reasonable time for a drop as directed on the label. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) covers the indoor half of winter.`,
      },
      { h: 'When wind isn’t the whole story' },
      {
        p: `Watery, stinging eyes in a gale are normal and fade once you’re out of it. Symptoms that don’t fade are different. The label’s guidance: {stopUse} Pain, blurred vision that doesn’t clear, light sensitivity, or dryness that persists after you’re indoors are reasons to see an eye doctor rather than buy better glasses. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists what to watch for.`,
      },
    ],
    faq: [
      {
        q: 'How to protect dry eyes from wind?',
        a: 'Block it and plan around it: wear close-fitting or wraparound glasses, add a hat brim or hood, turn away from gusts, and put any lubricating drops in indoors before you go out rather than in the wind.',
      },
      {
        q: 'Do glasses help with wind on your eyes?',
        a: 'Yes. Even ordinary prescription or clear glasses block some airflow, and frames that wrap toward the temples block more. For speed sports, goggles seal better than glasses.',
      },
      {
        q: 'Does wind chill affect eye drops?',
        a: 'Not the way it affects skin. The National Weather Service says wind chill applies only to people and animals; wind cools an object to the air temperature faster, but not below it.',
      },
      {
        q: 'Why do my eyes feel dry after being out in the wind?',
        a: 'Wind pulls moisture off the eye between blinks, and the heavy tearing it triggers doesn’t restore the tear film’s layers. Heated indoor air then keeps drying the surface after you come in.',
      },
    ],
  },
  /*
   * Source checked 2026-11-17 for dry-eyes-when-it-gets-dark-early:
   * - https://www.nist.gov/pml/time-and-frequency-division/popular-links/daylight-saving-time-dst
   *   (2026: DST from March 8 at 2 a.m. to November 1 at 2 a.m. local time; DST
   *   "ends at 2:00 a.m. on the first Sunday of November" and begins "on the second
   *   Sunday of March"; rules from the Energy Policy Act of 2005; returning to
   *   standard time "effectively moves one hour of daylight from the evening to the
   *   morning"; not observed in Hawaii or Arizona, except the Navajo reservation;
   *   regulated by the US Department of Transportation)
   */
  {
    slug: 'dry-eyes-when-it-gets-dark-early',
    title: 'Dry eyes when it gets dark early',
    description:
      'Once the clocks fall back, evenings move indoors under lamps, screens and furnace heat. Why eyes feel drier in the dark months, and an evening routine to try.',
    category: 'seasonal',
    addedOn: '2026-11-17',
    body: [
      {
        p: `When it gets dark early, evenings shift indoors: more hours on phones, TVs and laptops, reading under a lamp, and sitting in heated air, all of which slow blinking or speed evaporation from the eye. Brighten the room around your screen, take blink breaks, keep heater vents off your face, and use a lubricating drop on the schedule its label gives. Dryness that doesn’t ease is a question for an eye doctor.`,
      },
      { h: 'Why it gets dark so early after the clocks change' },
      {
        p: `According to NIST, the federal timekeeping lab, daylight saving time in the United States ends at 2 a.m. local time on the first Sunday of November; in 2026 that was November 1. NIST explains that going back to standard time effectively moves an hour of daylight from the evening to the morning. Add the steady shortening of days into late December, and many people find it fully dark before they leave work. The schedule comes from the Energy Policy Act of 2005, and it runs until the second Sunday in March. Hawaii and most of Arizona don’t change their clocks, so evenings there don’t jump the same way.`,
      },
      { h: 'What dark evenings change for your eyes' },
      {
        p: `Darkness itself doesn’t dry the eyes. What changes is how the evening is spent. In summer, a 7 p.m. walk or yard work keeps your eyes moving across distances and blinking normally. In the dark months that time often becomes:`,
      },
      {
        list: [
          `A phone or tablet held close, often in a dim room, for an hour or more.`,
          `A TV marathon from the couch, with eyes fixed on one bright rectangle.`,
          `Reading or handwork under a single lamp.`,
          `A laptop at the kitchen table, catching up on work after dinner.`,
        ],
      },
      {
        p: `Focused looking cuts the blink rate, and every blink is what spreads a fresh tear film across the eye. With fewer blinks, the film thins and breaks up, and the eye starts to feel tired, scratchy or heavy. At the same time, the furnace is running for the evening, and heated air speeds evaporation from the water layer of the tear film.`,
      },
      { h: 'Lighting the room, not just the screen' },
      {
        p: `A bright screen in a dark room makes the eyes work at the contrast and often draws you closer to it. Room lighting helps more than most people expect:`,
      },
      {
        list: [
          `Turn on a lamp behind or beside the TV or monitor, so the screen isn’t the only light in your field of view.`,
          `Use a reading lamp that lights the page, angled so its bulb isn’t in your line of sight.`,
          `Lower screen brightness in the evening to roughly match the room.`,
          `Hold a phone a bit farther away, or move what you’re reading to a larger screen.`,
        ],
      },
      { h: 'An evening routine for the dark months' },
      {
        p: `Most people do better with a plan than with willpower. One way to set up an evening:`,
      },
      {
        list: [
          `When you get home, set the thermostat to the lowest comfortable setting, and check that floor vents aren’t blowing at the couch.`,
          `Start a humidifier in the room where you spend the evening or in the bedroom.`,
          `During TV time, look away from the screen at each commercial or between episodes and blink slowly a few times.`,
          `With a laptop or book, use a timer: every 20 minutes, look across the room for a few seconds.`,
          `If you use Quell, fit one of its daily doses into the evening routine, following the label: {directions}.`,
          `Put screens down a little before bed, and turn ceiling fans off in the bedroom.`,
        ],
      },
      {
        p: `[Screens and your tear film](/guides/screens-and-your-tear-film) explains why breaks help, and [dry eyes when binge-watching TV](/guides/dry-eyes-when-binge-watching-tv) goes deeper on TV nights.`,
      },
      { h: 'Driving home in the dark' },
      {
        p: `An earlier sunset often means the commute happens in darkness. Night driving asks for steady focus on the road and on oncoming headlights, which tends to reduce blinking, and the car heater is usually running full blast. Aim the dash vents at the windshield and your feet rather than your face, keep the windshield clean inside and out to cut glare, and never put drops in while the car is moving. Use them before you leave or after you park. [Dry eyes when driving in winter](/guides/dry-eyes-when-driving-in-winter) has more for the commute.`,
      },
      { h: 'Using drops on short winter days' },
      {
        p: `Quell’s Drug Facts panel lists its Uses as: {uses}. It’s a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. When it’s dark early and routines slide, it helps to link each dose to something fixed, like breakfast, the end of the workday and the evening news. Keep the bottle somewhere you’ll see it but within the panel’s range: {storage}. A sunny windowsill and a cold car are both poor spots. And from the label: {tip}.`,
      },
      { h: 'When it’s more than long evenings' },
      {
        p: `Tired eyes after a long screen night usually feel better after sleep and a break. If they don’t, the label’s guidance applies: {stopUse} Ongoing pain, a change in vision, or dryness that keeps returning deserves an eye exam. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) can help you decide when to call.`,
      },
    ],
    faq: [
      {
        q: 'When does daylight saving time end?',
        a: 'At 2 a.m. local time on the first Sunday of November, according to NIST. In 2026 that was November 1, and daylight saving time returns on the second Sunday of March.',
      },
      {
        q: 'Why do my eyes feel worse in the winter evenings?',
        a: 'Dark evenings mean more time on screens and under lamps, which slows blinking, while the furnace dries the air. Brighter room lighting, screen breaks and vents aimed away from your face help.',
      },
      {
        q: 'Is it bad to look at your phone in the dark?',
        a: 'A bright phone in a dark room tends to pull you closer and make you blink less, which can leave eyes tired and dry. Turning on a lamp and lowering screen brightness makes it easier on the eyes.',
      },
      {
        q: 'Which states don’t change their clocks in the fall?',
        a: 'NIST lists Hawaii and Arizona, except the Navajo reservation, as places that don’t observe daylight saving time, along with several US territories, so their evenings don’t shift in November.',
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-gardener',
    title: 'Christmas gifts for a gardener',
    description:
      'Gift ideas for a gardener in winter: seed catalogs, gloves, a brimmed hat, wraparound glasses for spring wind and dust, and eye drops for dry, irritated eyes.',
    category: 'seasonal',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Good Christmas gifts for a gardener fit the winter they’re living through and the spring they’re planning: seed catalogs and a garden journal, good gloves, a wide-brimmed hat, a kneeling pad, wraparound glasses for windy, dusty spring days, and supplies for starting seeds indoors. If they mention dry or irritated eyes after hours outside or under grow lights, a lubricating eye drop makes a practical stocking stuffer.`,
      },
      { h: 'What a gardener does in December' },
      {
        p: `Winter isn’t a gardener’s off season so much as the planning season. Catalogs arrive, plots get sketched on graph paper, seed packets get sorted, and the first trays go under lights well before the ground thaws. Gifts that support those jobs get used right away, instead of sitting in the shed until April. A few of those winter jobs are also hard on the eyes, which is where a small practical gift can come in.`,
      },
      { h: 'Gifts for the planning months' },
      {
        list: [
          `A garden journal or planner with room for planting dates, varieties and what worked.`,
          `A subscription or gift card for a seed company whose catalog they already dog-ear.`,
          `Large-print plant labels and a weatherproof marker, easier to read than tiny stakes.`,
          `A good reading lamp for the evening catalog sessions at the kitchen table.`,
          `A magnifier or reading glasses kept with the seed box, for fine print on packets.`,
        ],
      },
      {
        p: `Those last two aren’t glamorous, but they solve a real winter problem. Poring over seed descriptions and planting charts in a dim room means close focus and fewer blinks, and the furnace is drying the air at the same time. A well-placed lamp and a break to look out the window now and then go a long way.`,
      },
      { h: 'Gifts for seed starting and the greenhouse' },
      {
        list: [
          `Seed-starting trays, domes and a heat mat.`,
          `An adjustable grow light, ideally on a timer, so they aren’t working under it longer than needed.`,
          `A potting bench scoop or soil sifter.`,
          `A small humidity and temperature gauge for the greenhouse, cold frame or seed shelf.`,
          `A watering can with a fine rose for seedlings.`,
        ],
      },
      {
        p: `Grow lights are bright, and transplanting tiny seedlings is detailed work done with eyes fixed on the tray. A greenhouse on a sunny winter day can also get warm and dry around the potting area, and dry potting mix throws up fine dust when it’s poured. None of that is dangerous, but it can leave eyes feeling dry and gritty by the end of a session.`,
      },
      { h: 'Gifts for spring wind, dust and sun' },
      {
        p: `Spring is when a gardener’s eyes take the most abuse. Wind dries the eye’s surface and blows soil, mulch and pollen around; tilling and spreading compost kicks up dust; and long hours bent over beds in bright sun add glare. Gifts that help:`,
      },
      {
        list: [
          `A wide-brimmed hat that shades the eyes and blocks some wind from above.`,
          `Wraparound safety glasses or sunglasses that curve toward the temples, for tilling, mowing, trimming and windy days. Choose a fit they’ll actually wear.`,
          `Good gloves, so they aren’t tempted to rub an eye with a dirty hand.`,
          `A kneeling pad or garden seat, which keeps their face a bit farther from the soil.`,
          `A small towel and a bottle of water in a garden tote for clean hands before touching their face.`,
        ],
      },
      {
        p: `[Dry eyes when gardening](/guides/dry-eyes-when-gardening) covers the outdoor side of this in more detail.`,
      },
      { h: 'Eye drops as a gardener’s stocking stuffer' },
      {
        p: `If the gardener in your life has mentioned dry, tired or irritated eyes after yard work, a lubricating eye drop is a practical small gift. Quell is a preservative-free drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives its Uses as: {uses}. It comes in a {size} bottle that fits in a pocket or a garden tote.`,
      },
      {
        p: `Some honest limits: it’s for dryness and irritation, not for pollen reactions, and it isn’t a way to deal with soil or debris in the eye. Something stuck in the eye calls for rinsing and, if it still hurts, a doctor. The label also includes a caution worth reading before you give it: {warnings}. The panel’s directions read: {directions}. Everything else is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering a gift and getting it there' },
      {
        list: [
          `You can ship straight to the gardener’s address or to yourself to wrap. Checkout has no gift wrap or gift message option.`,
          `Guest checkout is available, with no account needed. Shipping is {shipping}, and {freeBottles} or more bottles ship free, so adding one for yourself can make sense.`,
          `We ship from Brentwood, Tennessee, to US addresses only, and buyers must be 18 or older.`,
          `Tracking comes by email, but no delivery date is promised, so order well ahead of Christmas.`,
          `An unopened bottle can be refunded within {returnDays} days of delivery without sending it back, if the gift isn’t wanted.`,
        ],
      },
      {
        p: `For the details, see [how to send Quell as a gift](/guides/sending-quell-as-a-gift), or browse more [gift ideas for someone with dry eyes](/guides/gift-ideas-for-someone-with-dry-eyes).`,
      },
      { h: 'When it isn’t just garden dust' },
      {
        p: `Gritty eyes after a windy day in the beds usually settle with rest and a break from the wind. If they don’t, a gift can’t fix it. The label puts the line here: {stopUse} Eye pain, changes in vision, or dryness that keeps returning are worth an eye exam, and [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists what to watch for.`,
      },
    ],
    faq: [
      {
        q: 'What is a good Christmas gift for a gardener?',
        a: 'Something they can use in winter or the first days of spring: a garden journal, seed-starting supplies, good gloves, a wide-brimmed hat, or wraparound glasses for windy, dusty days in the beds.',
      },
      {
        q: 'What are good stocking stuffers for gardeners?',
        a: 'Plant labels and a weatherproof marker, seed packets, hand cream, a small magnifier for seed packets, and, for someone who mentions dry eyes after yard work, a small bottle of lubricating eye drops.',
      },
      {
        q: 'Are eye drops a good gift for a gardener?',
        a: 'For someone who already gets dry or irritated eyes outdoors, a lubricating drop can be a useful small gift. It’s meant for dryness and irritation, not for pollen reactions or for flushing out debris.',
      },
      {
        q: 'Should gardeners wear eye protection?',
        a: 'Many gardening jobs throw up debris or dust, such as trimming, mowing, tilling and spreading mulch. Wraparound safety glasses that fit well enough to stay on are a sensible choice for those jobs.',
      },
    ],
  },
  {
    slug: 'dry-eyes-for-jewelers-and-watchmakers',
    title: 'Dry eyes for jewelers and watchmakers',
    description:
      'Loupes, bench lamps and hours of close focus cut blinking at the bench. Why jewelers and watchmakers get dry, tired eyes, and habits that ease them.',
    category: 'using',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Jewelers and watchmakers often get dry eyes because bench work asks for long, unbroken close focus through a loupe or under a scope, and concentrating that hard slows blinking. Bench lamps, polishing dust and moving shop air add to it. Build in short breaks to look across the room, blink fully, keep lamps and airflow off your face, and use a lubricating drop as its label directs, away from the work.`,
      },
      { h: 'Why bench work dries the eyes' },
      {
        p: `A blink spreads a fresh tear film over the eye: an outer oil layer that slows evaporation, a water layer, and a mucus layer that helps it cling. When you set a stone, regulate a balance or inspect a solder joint, you hold your gaze still and blink much less often, and some of those blinks are partial. Between blinks, the film thins and starts to break up. After an hour, the eyes can feel gritty, tired or hot, and the sharp image you need starts to blur until you blink.`,
      },
      {
        p: `Nothing about this is unique to the trade, but the trade asks for more of it than most. A jeweler or watchmaker may spend most of a working day focused within arm’s reach, with only brief pauses.`,
      },
      { h: 'Loupes and the squinting eye' },
      {
        p: `A traditional eye loupe is held in the socket by the brow and cheek, and many people squint or close the other eye to see through it. That means one eye is working hard behind a lens and the other is half-shut, and neither is blinking normally. A few habits help:`,
      },
      {
        list: [
          `Try keeping both eyes open with the loupe in place. It takes practice, but it means less squeezing.`,
          `Take the loupe out every few minutes, even for a second, and blink fully a few times.`,
          `Switch to a headband magnifier or a bench microscope for long jobs, if that suits your work, so both eyes share the load.`,
          `Clean loupe lenses regularly. A smudged lens makes you strain harder for the same detail.`,
        ],
      },
      {
        p: `Microscopes bring their own version of this; our guide to [dry eyes from looking through a microscope](/guides/dry-eyes-from-looking-through-a-microscope) covers bench scopes in particular.`,
      },
      { h: 'Bench lamps, heat and glare' },
      {
        p: `Good light is non-negotiable at the bench, but how it falls matters. An older halogen or incandescent lamp gives off heat close to your face, and warm air near the eyes speeds evaporation. Light reflecting off polished metal or a watch crystal makes you narrow your eyes. Position the lamp so it lights the work from the side or above and its head points away from your eyes. LED bench lamps run cooler. A diffuser or a matte bench mat can cut the hard reflections from mirror finishes.`,
      },
      { h: 'Polishing dust, blowers and shop air' },
      {
        p: `Polishing compounds throw off fine dust, and the wheel or buffing motor creates its own breeze. Watchmakers use hand blowers to clear dust from movements, and some shops run air cleaners or HVAC vents near the bench. All of that moving air passes close to the eyes.`,
      },
      {
        list: [
          `Wear safety glasses at the polishing motor, both for flying debris and to block the airflow it makes.`,
          `Point hand blowers away from your face, and keep dust collection running so the air near you stays cleaner.`,
          `Make sure ceiling and wall vents don’t blow straight across the bench.`,
          `Run a humidifier in the shop in heating season if your work and materials allow it.`,
        ],
      },
      { h: 'A break routine that fits the bench' },
      {
        p: `Breaks don’t need to be long. They need to be regular. A simple pattern: every 20 minutes or so, set the work down, look at something across the room for 20 seconds or more, and blink slowly and completely several times. A kitchen timer or a phone set to vibrate works if you lose track of time at the bench. Use the moments you’re already waiting, like a stone setting in wax or a movement on the timing machine, to rest your eyes instead of picking up your phone. Every hour or two, stand up and leave the bench for a few minutes.`,
      },
      { h: 'Using eye drops at the bench' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel lists its Uses as: {uses}. Directions: {directions}.`,
      },
      {
        list: [
          `Wash your hands first. Polishing compound, cutting oil, pickle and cleaning solutions shouldn’t go anywhere near your eyes.`,
          `Step away from the bench to put drops in, so nothing drips onto the work and the bottle doesn’t sit among tools.`,
          `Follow the label: {tip}.`,
          `Give your vision a moment to settle before you pick up the loupe again; a fresh drop can blur things briefly.`,
          `Keep the bottle away from the ultrasonic, the steamer and the torch, and within the label’s storage range: {storage}.`,
        ],
      },
      {
        p: `The label doesn’t cover contact lenses or use alongside other eye drops; ask your eye doctor or pharmacist about either. A bottle in the drawer of your bench, away from chemicals, is easier to remember than one at home; [keeping an eye drop log](/guides/keeping-an-eye-drop-log) can help you notice which days are hardest on your eyes.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Fine work depends on your eyes, so don’t sit on symptoms. If reading glasses or your loupe power no longer seem right, an eye exam can check your prescription and working distance. For dryness itself, the label is clear: {stopUse} Pain, a change in vision or dryness that keeps returning despite breaks are reasons to see an optometrist or ophthalmologist. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for more.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes hurt after using a loupe?',
        a: 'Holding a loupe means long, steady close focus, often with the other eye squeezed shut, so you blink less and the tear film thins. Short breaks, full blinks and keeping both eyes open can help.',
      },
      {
        q: 'Should you close one eye when using a loupe?',
        a: 'Many people do at first, but keeping both eyes open reduces squinting and strain over a long day. It takes some practice, and a headband magnifier or bench microscope is an option for long jobs.',
      },
      {
        q: 'How often should jewelers take eye breaks?',
        a: 'A common habit is a short break every 20 minutes or so: look across the room for at least 20 seconds and blink fully. Leave the bench for a few minutes every hour or two as well.',
      },
      {
        q: 'Can I use eye drops while doing bench work?',
        a: 'Yes, but step away from the bench, wash off polishing compounds and chemicals first, and wait for your vision to settle before picking up the loupe. Follow the directions on the label.',
      },
    ],
  },
  {
    slug: 'dry-eyes-when-rock-climbing',
    title: 'Dry eyes when rock climbing',
    description:
      'Wind on the wall, chalk dust, sun at the crag and long stares up from the belay. Why climbing dries your eyes, and how to manage it at the gym and outside.',
    category: 'using',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Rock climbing dries the eyes in several ways at once: wind across an exposed wall, fine chalk dust in the air, bright sun and reflected glare at the crag, and long belay sessions staring up at a climber without blinking much. Keep chalky hands away from your face, protect your eyes from wind and sun, put any lubricating drops in at the base with clean hands, and see an eye doctor for symptoms that stick around.`,
      },
      { h: 'Why climbing is hard on the tear film' },
      {
        p: `The eye’s surface is kept wet by the tear film, a thin layer with oil on top, water in the middle and mucus underneath. Blinking renews it. Climbing works against that from a few directions. When you’re reading a sequence or committing to a crux, you hold your gaze fixed and blink less. On an exposed face, wind moves across the eyes the whole time. Outdoors, sun on light-colored rock makes you squint. And from the first climb to the last, your hands are coated in a fine powder that ends up wherever you touch.`,
      },
      { h: 'Chalk dust at the gym and the crag' },
      {
        p: `Loose chalk is the easiest problem to fix. In a busy gym, dust from chalk bags and brushed holds hangs in the air, especially around the bouldering area and near the fans. Outside, a gust can lift chalk from your bag or from the holds above you straight into your face.`,
      },
      {
        list: [
          `Use a chalk ball or liquid chalk if the dust bothers your eyes; some gyms already ask for one.`,
          `Dip your hands low in the bag and tap off the extra before reaching up.`,
          `Don’t blow chalk off holds above your head, and don’t brush them while looking straight up.`,
          `Climb or rest away from the gym’s fans when they’re blowing across the walls.`,
          `Wipe your hands before touching your face, and never rub an eye with chalky fingers.`,
        ],
      },
      { h: 'Chalk in your eye: what to do' },
      {
        p: `If chalk gets in your eye, don’t rub it. Blink several times to let tears move it, then rinse the eye with clean water from your bottle, tipping your head so the water runs away from the other eye. Most of the time that’s enough. If it still feels like something is stuck, or the eye hurts, waters for a long time or your vision is blurry, stop climbing and get it checked by a doctor. A lubricating eye drop isn’t meant for flushing out debris.`,
      },
      { h: 'Wind, sun and the belay stare' },
      {
        p: `Outdoor crags tend to be exposed. A ridge-top sport wall or a desert tower can be windy even when the parking lot is calm, and a multi-pitch route keeps you in that wind for hours. Wind pulls moisture off the eye between blinks, and the effect builds as the day goes on.`,
      },
      {
        list: [
          `Wear sunglasses on the approach and at belay stations, and choose a pair that stays put when you look up.`,
          `Belay glasses, which use prisms so you can watch a climber without craning your neck, also mean you aren’t staring straight up into the sun.`,
          `Pull a cap brim low at the base, and turn your back to gusts between climbs.`,
          `Blink on purpose while belaying. A long, focused belay is one of the times people blink least.`,
        ],
      },
      { h: 'Put drops in at the base' },
      {
        p: `If you use a lubricating eye drop, the base of the route is the place for it, not halfway up. Quell is a preservative-free drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives the Uses as: {uses}. Its directions: {directions}.`,
      },
      {
        list: [
          `Clean your hands first. Chalk and rock grime shouldn’t go near your eyes, so use water and a cloth or a wipe without alcohol before handling the bottle.`,
          `Sit or stand somewhere stable, out of the wind, and tilt your head back.`,
          `Follow the label: {tip}.`,
          `Give your vision a moment to settle before you tie in or put someone on belay.`,
        ],
      },
      {
        p: `A drop in the wind is hard to aim and easy to waste, which is another reason to do it before you leave the ground. For the general technique, see [how to put in eye drops without flinching](/guides/how-to-put-in-eye-drops-without-flinching).`,
      },
      { h: 'Heat, cold and your pack' },
      {
        p: `A pack baking at the base of a sunny wall or a car at a summer trailhead can get hot, and a winter bouldering day can get cold. The label’s storage line reads: {storage}. Keep the bottle in a shaded pocket of your pack or on you, not loose in a chalk bag or on a hot rock. And under “Do not use,” the panel lists: {doNotUse}.`,
      },
      { h: 'Indoor gym habits that help' },
      {
        p: `Gym air is usually heated in winter and air-conditioned in summer, and long sessions of projecting a problem mean a lot of staring at the wall. Between attempts, look away at something distant, blink fully a few times, and sit away from the fans. If you also spend the workday at a screen, your eyes may start the session already tired; [screens and your tear film](/guides/screens-and-your-tear-film) explains why.`,
      },
      { h: 'When to stop and see a doctor' },
      {
        p: `Dry, gritty eyes after a windy day at the crag should improve with rest. If they don’t, or something seems wrong, follow the label: {stopUse} Climbing also carries the risk of grit or rock chips hitting the eye, and pain, persistent tearing or blurred vision after that calls for prompt care. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs.`,
      },
    ],
    faq: [
      {
        q: 'What to do if you get climbing chalk in your eye?',
        a: 'Don’t rub. Blink a few times, then rinse the eye with clean water, tilting your head so it runs away from the other eye. If pain, blurring or the feeling of something stuck continues, see a doctor.',
      },
      {
        q: 'Do belay glasses help your eyes?',
        a: 'They mainly save your neck, but because you look forward through the prisms instead of straight up, they can also keep you from staring into the sun or into falling chalk while you belay.',
      },
      {
        q: 'Should you wear sunglasses when rock climbing?',
        a: 'Many climbers wear them on approaches and at belays to cut glare and wind, then take them off for the climb if they slip or fog. Choose a close fit that stays put when you look up.',
      },
      {
        q: 'Can you put eye drops in at the crag?',
        a: 'Yes, ideally at the base before you climb, after cleaning chalk and grime off your hands. Doing it out of the wind makes it easier to aim, and you should follow the directions on the label.',
      },
    ],
  },
  {
    slug: 'dry-eyes-when-surfing',
    title: 'Dry eyes when surfing',
    description:
      'Offshore wind, salt spray, glare off the water and cold-water sessions all dry the eyes. What surfers can do in the water, on the beach and back at the car.',
    category: 'using',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Surfing dries the eyes through wind, salt spray, sun and glare off the water, and in cold-water season, chilly wind after a long session. Rinse salt from your face and lashes with fresh water when you get out, keep your eyes shaded on the beach, dry your hands before touching your eyes, and use a lubricating drop only as its label directs. Eyes that stay sore or blurry need an eye doctor.`,
      },
      { h: 'Why your eyes feel dry after a surf' },
      {
        p: `The eye’s tear film is a thin, layered coat: an oily top layer that slows evaporation, a watery middle and a mucus base. Wind speeds evaporation, and a surf session is mostly wind: onshore breeze, offshore spray blowing back off the lip, and your own speed while paddling and riding. Salt water splashing in and drying on your lids and lashes leaves a crust that makes the eyes feel scratchy. Then there’s sun. Water reflects a lot of light, and two hours of squinting at the horizon to read sets means fewer full blinks.`,
      },
      { h: 'Eyes burning after surfing' },
      {
        p: `A stinging or burning feeling right after a session is common, and it usually comes from salt and wind together. Some practical steps when you paddle in:`,
      },
      {
        list: [
          `Rinse your face, brows and lashes with fresh water from a jug or the beach shower before anything else.`,
          `Pat your face dry with a clean towel instead of rubbing your eyes.`,
          `Get out of the wind to change, if you can; sitting in the car with the door shut helps.`,
          `Put sunglasses on for the walk back and the drive home.`,
          `Wait until your hands are rinsed and dry before touching your eyes or a dropper bottle.`,
        ],
      },
      {
        p: `If the burning doesn’t fade within a reasonable time after rinsing, or your vision is blurry, it’s worth having an eye doctor take a look.`,
      },
      { h: 'Sun and glare on the water' },
      {
        p: `Surfing is hours outdoors with the sun reflected back at you from below. In the water, a cap with a brim and a chin strap is something some surfers use, and there are sunglasses made with a strap for water sports. On the beach and in the lineup between sets, shading your eyes reduces squinting. Plan dawn or evening sessions when the sun is lower and the wind is often lighter, if your break works at those tides.`,
      },
      { h: 'Cold-water wetsuit season' },
      {
        p: `In winter, many surfers are in a thick suit, booties and a hood, and the only thing exposed is the face. Cold wind on wet skin makes the eyes water hard in the water and feel dry once you’re warm. The walk back to the car in a winter wind, and the blast of the car heater on the drive home, are often where dryness really shows up. Point the heater vents at your feet and the windshield instead of your face. Our guide to [protecting your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) has more ideas for winter days.`,
      },
      { h: 'Eyes open underwater and duck dives' },
      {
        p: `Most surfers close their eyes when duck diving or tumbling under a wave, and salt water still gets in. Opening your eyes in the ocean exposes them to salt and anything suspended in the water, so keeping them closed underwater is a reasonable habit. After a session in murky water, after rain runoff, or if something seems to have gotten into your eye, rinse it with clean fresh water and see a doctor if pain or blurriness continues.`,
      },
      { h: 'Eye drops and surfing: what the label says' },
      {
        p: `Quell is a preservative-free lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel describes its Uses as: {uses}. The directions are: {directions}. Those directions don’t say anything special for surfers, so use it exactly as written.`,
      },
      {
        list: [
          `Put drops in on dry land, after rinsing salt off your hands and face. Salty, sandy fingers shouldn’t be near the bottle tip.`,
          `Follow the label: {tip}.`,
          `Let your vision settle before you drive.`,
          `Don’t leave the bottle in a hot car or in the sun on the sand. The label says: {storage}.`,
        ],
      },
      {
        p: `The label doesn’t give directions for contact lenses or for use with other eye drops. If you surf in contacts, ask your eye doctor what makes sense for you. Questions about carrying drops through an airport on a surf trip are covered in [traveling with eye drops](/guides/traveling-with-eye-drops).`,
      },
      { h: 'Related habits on and off the water' },
      {
        p: `Surfers often have other days in sun and wind, from fishing to sailing, and the same habits apply: block the wind, shade your eyes, rinse salt off, and keep the bottle cool. [Dry eyes on a boat](/guides/dry-eyes-on-a-boat) and [dry eyes after swimming](/guides/dry-eyes-after-swimming) cover two of those settings.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Years in the sun and wind are worth mentioning at an eye exam. For dryness itself, the label is clear about when a drop isn’t the answer: {stopUse} Ongoing pain, a change in vision, or a feeling that something is in the eye after rinsing all need professional care. See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes burn after surfing?',
        a: 'Salt water drying on your lids and lashes, wind across the eyes and glare off the water usually combine. Rinsing your face with fresh water and getting out of the wind often eases it; see a doctor if it persists.',
      },
      {
        q: 'Should you open your eyes underwater in the ocean?',
        a: 'Keeping your eyes closed underwater limits salt and anything floating in the water from reaching them. If something gets in, rinse with clean fresh water and see a doctor if pain or blurring continues.',
      },
      {
        q: 'Can you use eye drops after surfing?',
        a: 'A lubricating drop can be used after a session if you follow the label’s directions. Rinse salt from your hands and face first, and put the drops in on dry land, out of the wind.',
      },
      {
        q: 'How do surfers protect their eyes from the sun?',
        a: 'Many wear a brimmed surf cap with a strap or water-sport sunglasses with a strap in the water, and regular sunglasses on the beach. Dawn and evening sessions also mean a lower sun.',
      },
    ],
  },
  {
    slug: 'should-you-blink-after-putting-in-eye-drops',
    title: 'Should you blink after putting in eye drops?',
    description:
      'Gently, yes: a few soft blinks or a short, relaxed close spreads the drop. Hard, rapid blinking pushes it out. What to do in the first minute after a drop.',
    category: 'using',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Blinking after an eye drop is fine, as long as it’s gentle. A few slow, soft blinks, or simply closing your eyes lightly for a short time, lets the eyelids spread the drop across the eye the way they spread your own tears. Squeezing your eyes shut or blinking hard and fast tends to push the liquid out onto your cheek. Quell’s label gives the directions; it doesn’t set a closing time.`,
      },
      { h: 'Should you blink after eye drops, or keep still?' },
      {
        p: `Your eyelids are built to spread liquid. Every normal blink sweeps the tear film, with its oil, water and mucus layers, from the lid margin across the front of the eye. A drop lands in one spot, usually the pocket of the lower lid, and blinking is what carries it over the rest of the surface. So blinking isn’t the enemy. The trouble comes from blinking that’s forceful: a hard squeeze pumps fluid out of the corner of the eye and down the face, and rapid fluttering does much the same.`,
      },
      {
        p: `A good middle path: after the drop goes in, let go of the lower lid, look down, and close your eyes softly. Then open them and blink slowly two or three times. That’s usually enough to spread it.`,
      },
      { h: 'Should you close your eyes after eye drops?' },
      {
        p: `Many people find that closing their eyes gently for a short time after a drop feels more comfortable and gives the drop a moment to settle before the next blink. Quell’s Drug Facts panel doesn’t ask you to close your eyes, and it doesn’t give a time. Its directions read: {directions}. If a doctor or pharmacist has given you specific instructions for after a drop, such as how long to keep your eyes closed or whether to press the inner corner, follow them; those are part of your own care, not something the Quell label covers.`,
      },
      { h: 'The first minute after a drop, step by step' },
      {
        list: [
          `Release the lower lid and look down. This lets the drop sit in the lid pocket instead of rolling out.`,
          `Close your eyes lightly, without squeezing. Relax your forehead and cheeks.`,
          `After a short pause, open your eyes and blink slowly a few times.`,
          `If liquid runs onto your cheek, dab the skin with a clean tissue. Don’t wipe across the eye itself, and use a fresh tissue for the other eye.`,
          `Cap the bottle right away. The label says: {tip}.`,
          `Wait for your vision to clear before you read small print, drive or do anything that needs sharp sight.`,
        ],
      },
      { h: 'Why your vision may blur for a moment' },
      {
        p: `A drop adds liquid to the eye’s surface, and until blinking spreads it out evenly, the layer is thicker in some places than others. That can blur your sight briefly. Quell is also an oil-containing drop, and its panel describes it this way: {milky}. Soft blinking evens it out. If blurring doesn’t clear, or your vision seems different afterward, stop and check with a doctor. [Is it normal for vision to blur after eye drops?](/guides/is-it-normal-for-vision-to-blur-after-eye-drops) goes into more detail.`,
      },
      { h: 'Did the drop go in?' },
      {
        p: `A blink at the wrong moment can make it hard to tell. If you felt a cool drop on the eye and your vision blurred slightly, it probably went in. If you felt it hit your eyelid, your lashes or your cheek, it probably didn’t. When a drop clearly missed, the label doesn’t say how to count it, so if you’re unsure, a pharmacist is a good person to ask. Avoid putting in extra drops “just in case”; the directions call for a single drop, and a second one on top of the first usually just spills onto the lid.`,
      },
      { h: 'Stopping the reflex blink when the drop falls' },
      {
        p: `A blink just before the drop lands is a separate problem from blinking after. Lying down, looking up at a fixed spot on the ceiling, steadying your hand on your forehead, and bringing the bottle in from the side rather than straight on all make the reflex less likely. Our guide to [putting in eye drops without flinching](/guides/how-to-put-in-eye-drops-without-flinching) walks through these.`,
      },
      { h: 'What not to do right after' },
      {
        list: [
          `Don’t rub your eyes. Rubbing pushes the drop out and can irritate the surface.`,
          `Don’t squeeze your eyes shut to “hold it in.”`,
          `Don’t touch the bottle tip to your eye, lashes or fingers.`,
          `Don’t drive or operate anything until your vision is clear.`,
        ],
      },
      {
        p: `The label doesn’t give directions for contact lenses, for children, or for using Quell with other eye drops. For any of those, ask your eye doctor or pharmacist about timing and order.`,
      },
      { h: 'Blinking during the rest of the day' },
      {
        p: `Full, relaxed blinks matter long after the drop. When you look at a screen or read, blinking slows and some blinks don’t close all the way, so the tear film thins between them. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, but no drop replaces regular blinking. [How blinking spreads tears](/guides/how-blinking-spreads-tears) explains what a complete blink does.`,
      },
      { h: 'When to call a doctor' },
      {
        p: `A drop shouldn’t hurt. Mild coolness or brief blurring is common; pain, ongoing stinging or a change in vision isn’t. The label says: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists other signs not to ignore.`,
      },
    ],
    faq: [
      {
        q: 'Should you blink after eye drops?',
        a: 'Yes, gently. A few slow, soft blinks spread the drop across the eye. Hard or rapid blinking tends to squeeze the liquid out, so keep it relaxed.',
      },
      {
        q: 'How long should you close your eyes after eye drops?',
        a: 'Quell’s label doesn’t set a time. Many people close their eyes lightly for a short moment for comfort. If your doctor gave you a specific time for a prescribed drop, follow that instruction.',
      },
      {
        q: 'Is it bad to squeeze your eyes shut after eye drops?',
        a: 'Squeezing hard tends to push the drop out onto your cheek before it spreads. Closing your eyes softly, without tensing your face, keeps more of it on the eye.',
      },
      {
        q: 'What if I blinked and the eye drop missed?',
        a: 'If the drop landed on your lid or cheek, it likely didn’t go in. The label doesn’t say how to count a missed drop, so ask a pharmacist if you’re unsure, and avoid adding extra drops just in case.',
      },
    ],
  },
  {
    slug: 'how-to-remember-to-use-eye-drops',
    title: 'How to remember to use eye drops',
    description:
      'Tie each dose to something you already do every day, set phone reminders, and keep a bottle where you’ll see it. A practical plan built around the label.',
    category: 'using',
    addedOn: '2026-11-17',
    body: [
      {
        p: `The easiest way to remember eye drops is to attach each dose to something you already do every day, like brushing your teeth, a meal or the end of the workday, and back that up with a phone reminder. Keep a bottle where you’ll see it at those moments, check off doses on a simple log for the first few weeks, and follow the schedule on the label rather than guessing.`,
      },
      { h: 'Start with what the label asks for' },
      {
        p: `A reminder system only works if you know what you’re trying to remember. Quell’s Drug Facts panel gives the directions: {directions}. That is the whole schedule. The label doesn’t set specific clock times, so many people spread the three doses across their waking hours, for example one in the morning, one around midday and one in the evening; [when to use eye drops during the day](/guides/when-to-use-eye-drops-during-the-day) looks at timing in more depth. If you’d like help picking times, or you use other eye drops or medicines on a schedule of their own, a pharmacist can help you fit everything together; the Quell label doesn’t cover use with other drops.`,
      },
      { h: 'Anchor each dose to a daily habit' },
      {
        p: `Habits you already have are better reminders than willpower. Pick three that happen at roughly the same time every day and pair one dose with each. Some combinations that work for different routines:`,
      },
      {
        list: [
          `Morning: right after brushing your teeth, or while the coffee brews.`,
          `Midday: after lunch, before you go back to your desk, or at the start of an afternoon break.`,
          `Evening: after dinner dishes, or as part of getting ready for bed, before you pick up a phone or book.`,
          `For shift workers: tie doses to the start of the shift, the meal break and the drive home, rather than to clock times.`,
        ],
      },
      {
        p: `The anchor should come right before the dose, and the bottle should be in reach when it happens. A bottle in a bedroom drawer won’t help if the anchor is your morning coffee in the kitchen.`,
      },
      { h: 'Phone reminders that don’t get ignored' },
      {
        p: `A phone alarm is useful backup, especially in the first few weeks. A few ways to make them work better:`,
      },
      {
        list: [
          `Use your phone’s built-in reminders or a recurring calendar event; you don’t need a special app.`,
          `Name the alarm clearly, such as “Eye drop, after lunch,” so you know what it is without opening it.`,
          `Set the time a few minutes after your anchor habit, not before, so the alarm catches you if you forgot.`,
          `If you dismiss alarms without acting, try a reminder that stays on screen until you mark it done.`,
          `A smart speaker or smartwatch reminder can help if your phone is often in another room.`,
        ],
      },
      { h: 'Put a bottle where the doses happen' },
      {
        p: `Many people find the midday dose the easiest to miss, because the bottle is at home. Keeping one bottle at home and one at work, or one in a bag you always carry, solves that. It also means you’re not carrying one bottle back and forth and leaving it in the car. Wherever you keep it, the label gives a storage range: {storage}. A sunny windowsill, a hot car or a glove box in winter can fall outside it. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free, so a second bottle can make sense. Our guide to [keeping spare bottles](/guides/keeping-spare-bottles) has more on where to keep them.`,
      },
      { h: 'Track it for the first few weeks' },
      {
        p: `A simple log turns a vague sense of “I think I did it” into an answer. It can be a sticky note on the bathroom mirror with three boxes per day, a page in a planner, or a note on your phone. Tracking also shows patterns: if the midday box is often empty, that’s the dose that needs a better anchor or a second bottle. And it gives you something concrete to show an eye doctor if you have an appointment coming up. [Keeping a simple eye drop log](/guides/keeping-an-eye-drop-log) describes a format that works.`,
      },
      { h: 'When routines break: weekends, travel and holidays' },
      {
        p: `Reminders built around the workday tend to fail on Saturdays, on vacation and over the holidays. Before a change in routine, decide where the doses will fit instead. On a trip, keep the bottle in your personal item rather than checked luggage, and pick new anchors, such as the hotel breakfast or getting back to your room. If you cross time zones, it’s simpler to match doses to your waking hours where you are. If you do miss one, [what to do if you miss a dose](/guides/what-if-i-miss-a-dose-of-eye-drops) walks through it; the short answer is not to double up.`,
      },
      { h: 'Helping someone else remember' },
      {
        p: `If you help an older parent or partner with their drops, the same ideas apply: one anchor per dose, a visible bottle and a simple check-off sheet. A phone reminder on your own phone can prompt a check-in call or text. Be sure to wash hands before handling the bottle, and follow the label: {tip}. The label doesn’t give directions for children; ask their doctor or pharmacist before using drops on a child.`,
      },
      { h: 'Remembering to reorder' },
      {
        p: `Running out is the other way doses get skipped. Quell doesn’t have a subscription, so nothing ships automatically. We send one reorder reminder email, and you can always order again as a guest. Since no delivery date is promised, order when you open your last bottle, not when it’s empty. [The reorder reminder email](/guides/the-reorder-reminder-email) explains what that one message is.`,
      },
      { h: 'If you keep forgetting, or the drops don’t seem to help' },
      {
        p: `Missing doses now and then is normal, and the label’s schedule is the one to return to. But if dryness doesn’t improve even when you use the drops as directed, that’s worth an eye exam. The label says: {stopUse} See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Is there an app to remind you to take eye drops?',
        a: 'Several medication reminder apps exist, but your phone’s built-in reminders or a recurring calendar event work well. Name the reminder clearly and time it just after a daily habit.',
      },
      {
        q: 'How do I set a reminder for eye drops on my phone?',
        a: 'Create a recurring reminder or alarm for each dose, label it with what to do, and set it a few minutes after an anchor habit like lunch. Pick one that stays on screen until you mark it done.',
      },
      {
        q: 'What is an eye drop reminder chart?',
        a: 'A simple grid with a box for each dose on each day, kept somewhere visible like a mirror or the fridge. Checking a box after each dose shows quickly which times you tend to miss.',
      },
      {
        q: 'Do eye drop doses need to be evenly spaced?',
        a: 'Quell’s label says how many drops and how many times a day, but not exact intervals. Spreading doses across your waking hours is common; a pharmacist can help you choose times, especially if you use other drops.',
      },
    ],
  },
  /*
   * Sources checked 2026-11-17 for why-are-inactive-ingredients-listed-alphabetically:
   * - https://www.ecfr.gov/api/versioner/v1/full/2026-11-01/title-21.xml?part=201&section=201.66
   *   21 CFR 201.66(c): headings (c)(1) through (c)(8) required and (c)(9) optional,
   *   "in the order listed"; (c)(8) "Inactive ingredients", followed by the
   *   established name of each; for an OTC drug that is not also a cosmetic, "listed
   *   in alphabetical order"; an OTC drug that is also a cosmetic follows 701.3(a)
   *   or (f); (b)(8) inactive ingredient means any component other than an active
   *   ingredient; (c)(9) "Questions?" with a telephone number.
   * - https://www.ecfr.gov/api/versioner/v1/full/2026-11-01/title-21.xml?part=701&section=701.3
   *   21 CFR 701.3(a): cosmetic labels list each ingredient "in descending order of
   *   predominance".
   * FDA references removed 2026-11-18 at Phillip's request.
   */
  {
    slug: 'why-are-inactive-ingredients-listed-alphabetically',
    title: 'Why are inactive ingredients listed alphabetically?',
    description:
      'Drug-only OTC labels list inactive ingredients A to Z, not by amount. Why the order works that way, what it tells you, and what it leaves out.',
    category: 'label',
    addedOn: '2026-11-17',
    body: [
      {
        p: `Inactive ingredients are listed alphabetically because that’s the standard layout for an over-the-counter drug that isn’t also a cosmetic: its Drug Facts panel names every inactive ingredient from A to Z. The order tells you nothing about amounts. The first name isn’t the largest share of the bottle, and the last isn’t the smallest.`,
      },
      { h: 'Two kinds of products, two kinds of lists' },
      {
        p: `The Inactive ingredients heading is followed by the name of each inactive ingredient, and how those names are ordered depends on what kind of product it is:`,
      },
      {
        list: [
          `An OTC drug that is not also a cosmetic, like a lubricating eye drop: inactive ingredients are listed in alphabetical order.`,
          `An OTC drug that is also a cosmetic, such as some products sold for both purposes: the inactive list follows the cosmetic style instead.`,
        ],
      },
      {
        p: `An inactive ingredient is simply any component other than an active ingredient. So everything in the bottle that isn’t listed under “Active ingredients” belongs under this heading, from the water that carries the formula to the smallest helper ingredient.`,
      },
      { h: 'Why cosmetics use a different order' },
      {
        p: `Cosmetic labels work differently. A cosmetic lists each ingredient in descending order of predominance, meaning the ingredient present in the largest amount comes first. A drug-only product, like a lubricating eye drop, doesn’t follow that order for its inactives. If you’re used to reading lotion or shampoo labels, it’s easy to assume the first inactive is the main one, and on a drug label that assumption doesn’t hold.`,
      },
      { h: 'How the active ingredients differ' },
      {
        p: `The rule for actives is different again. The “Active ingredients” heading near the top of the panel names each active ingredient with its amount, next to its purpose. On Quell’s panel, the actives are {actives}. That’s where strength information lives. The inactive list below carries names only, without amounts, and in alphabetical order. Put together, the panel tells you exactly how much of each active is in the product and which other components are present, but not how much of each inactive.`,
      },
      { h: 'Reading Quell’s inactive list' },
      {
        p: `Quell’s Drug Facts panel lists {inactiveCount} inactive ingredients: {inactives}. Read in that light, a few things follow:`,
      },
      {
        list: [
          `The first name on the list is first because of the alphabet, not because there’s more of it.`,
          `Names that start with the same word, such as the two glyceryl ingredients, sit together because they sort together.`,
          `Sterile water appears near the end of the list simply because it starts with S.`,
          `The list is printed exactly as it appears on the carton, and the site reproduces it from the same source as the Drug Facts page.`,
        ],
      },
      {
        p: `Several of these ingredients have their own guides, from [sterile water in eye drops](/guides/sterile-water-in-eye-drops) to the broader overview of [the inactive ingredients section](/guides/the-inactive-ingredients-section).`,
      },
      { h: 'Where the inactive list sits on the panel' },
      {
        p: `The headings on a Drug Facts panel come in a fixed sequence: the “Drug Facts” title, Active ingredient(s), Purpose(s), Use(s), Warnings, Directions, Other information, Inactive ingredients, and an optional “Questions?” heading with a phone number. So on any OTC drug box, the inactive list is near the bottom, just after Other information. On Quell’s panel, the Other information section includes this line: {milky}. And the questions line gives a number you can call, {phone}, during {hours}. You can see the panel in that order on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Why alphabetical order is useful to you' },
      {
        p: `The order isn’t just tidiness. An alphabetical list is fast to scan if you’re checking for one ingredient you’ve been told to avoid. You can find it, or confirm it isn’t there, the same way you’d look up a word in an index. It also makes two products easier to compare side by side, since shared ingredients land in roughly the same part of each list. If you have a known sensitivity, read the warnings too. Quell’s panel includes this caution: {warnings}.`,
      },
      { h: 'What the list can’t tell you' },
      {
        list: [
          `How much of each inactive ingredient is present.`,
          `Which inactive ingredient does what job in the formula.`,
          `Whether a particular ingredient is right for your eyes.`,
        ],
      },
      {
        p: `For the last one, an eye doctor or pharmacist is the person to ask, especially if you’ve had a reaction to an ingredient before or use other drops. Bring the carton or a photo of the panel so they can read the same list you are. [How to read an eye drop Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label) walks through every heading, and the label’s own advice for when to stop is: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Does the order of inactive ingredients matter?',
        a: 'Not for amounts. On an OTC drug that isn’t also a cosmetic, inactive ingredients are listed in alphabetical order, so their position reflects the alphabet, not how much of each is in the product.',
      },
      {
        q: 'Are inactive ingredients listed by amount?',
        a: 'No, not on a drug-only OTC product like a lubricating eye drop. They are listed alphabetically without amounts. Cosmetics are different: they list ingredients in descending order of predominance, largest amount first.',
      },
      {
        q: 'Where are the inactive ingredients on a Drug Facts label?',
        a: 'Near the bottom. The Inactive ingredients heading comes after Other information and before the optional Questions? heading with a phone number.',
      },
      {
        q: 'What counts as an inactive ingredient?',
        a: 'Any component of the product other than an active ingredient. Everything not named under Active ingredients on the panel is listed under Inactive ingredients.',
      },
    ],
  },
]
