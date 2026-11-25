import type { Guide } from '@/lib/guide-types'

export const DAILY_20261125_E: Guide[] = [
  /*
   * Sources checked 2026-11-25 for dry-eye-relief-boerne-tx:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991-2020 monthly
   *   normals, SID USC00410902, saved at .daily-job/acis1125/USC00410902.json
   *   (BOERNE, TX, elev 1445 ft: Jan high 61.5 F, low 36.6 F, precip 2.28 in;
   *   Feb 65.5/40.5, 2.22; Mar 72.1/47.2, 2.79; Apr 78.8/53.8, 2.52; May
   *   84.0/62.7, 5.28; Jun 89.8/69.0, 3.78; Jul 92.5/71.0, 2.83; Aug 94.1/70.5,
   *   2.80; Sep 88.5/65.1, 3.90; Oct 80.5/55.6, 3.88; Nov 70.0/45.4, 2.92; Dec
   *   62.7/38.0, 2.32; annual precip 37.52 in; snowfall 0.1 in, all in Dec)
   * - Comparison figures for San Antonio come from the sourced comment on
   *   dry-eye-relief-san-antonio-tx (2026-11-15-b.ts): SAN ANTONIO INTL AP,
   *   about 790 ft, annual precip 32.38 in, Jan low 41.0 F, Aug high 96.0 F.
   * No humidity or wind figure: the Boerne station is not in relhum23 or wndspd23.
   */
  {
    slug: 'dry-eye-relief-boerne-tx',
    title: 'Dry eye relief in Boerne, Texas',
    description:
      'Boerne’s winter nights run colder than San Antonio’s and its summers stay hot. NOAA’s numbers for the Hill Country town and daily dry eye habits.',
    category: 'local',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Dry eye relief in Boerne comes down to a few steady habits: keep heater and car vents off your face on cold Hill Country mornings, blink fully during long screen sessions, and wear wraparound sunglasses through the hot months. A lubricating eye drop, used exactly as its label directs, can help with everyday dryness. Pain, vision changes or dryness that keeps coming back belong with an eye doctor.`,
      },
      { h: 'What the Boerne weather station records' },
      {
        p: `NOAA’s 1991–2020 climate normals for the Boerne cooperative station, as published through the National Weather Service’s NOWData, list the station at about 1,450 feet. Its monthly averages describe a town with mild winters, a long hot stretch, and rain that comes in bursts rather than evenly:`,
      },
      {
        list: [
          `About 37.5 inches of precipitation in a normal year.`,
          `May is the wettest month at 5.28 inches, with September (3.90) and October (3.88) next.`,
          `January is the coolest month: a normal high of 61.5°F and a low of 36.6°F.`,
          `August is the hottest, with a normal high of 94.1°F and nights near 70.5°F.`,
          `Snowfall barely shows up. The normals list 0.1 inch for the year, all of it in December.`,
        ],
      },
      { h: 'Up the hill from San Antonio' },
      {
        p: `Boerne’s station sits roughly 650 feet higher than San Antonio International Airport, which NOAA lists at about 790 feet. The numbers move the way you would expect. A normal January night bottoms out at 36.6°F in Boerne against 41.0°F at the airport, August highs run 94.1°F against 96.0°F, and Boerne’s normal year brings about 37.5 inches of precipitation compared with the airport’s 32.4. Two stations aren’t a perfect comparison, but the pattern is clear enough to plan around: colder winter starts and slightly gentler summer afternoons.`,
      },
      {
        p: `For your eyes, the colder mornings matter most. A house or truck that starts the day a few degrees colder runs its heat longer, and heated air is what dries the tear film between blinks. If you split your week between the two places, our [San Antonio guide](/guides/dry-eye-relief-san-antonio-tx) covers the city’s long air-conditioning season, and the [San Antonio page](/eye-drops/san-antonio-tx) has local details.`,
      },
      { h: 'December through February: cold starts, warm rooms' },
      {
        p: `Winter here is short and mild by most of the country’s standards, yet December, January and February all have normal lows near or below 40°F. That is cold enough to run the furnace every night and the car heater every morning. Warming cold air without adding moisture lowers its relative humidity, so the air in a cozy living room can be far drier than the gray morning outside. The tear film’s outer oil layer slows evaporation from the water layer beneath it, and dry, moving air works against it.`,
      },
      {
        list: [
          `Aim the car heater at your feet and the windshield, not at your face, on the drive into town.`,
          `Keep your favorite chair out of the path of the floor register or a space heater.`,
          `Turn the thermostat down a little at night, or run a cleaned bedroom humidifier.`,
          `On fireplace evenings, sit to the side of the hearth rather than straight in front of it.`,
        ],
      },
      {
        p: `For a full walk through the house, from the bedroom register to the kitchen, see [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes); it applies to a Hill Country ranch house as much as anywhere.`,
      },
      { h: 'May storms and the fall rains' },
      {
        p: `May’s 5.28 inches make it the wettest month by a wide margin, and the September and October totals give Boerne a second wet season. Humid, rainy stretches are generally easier on the eyes than dry ones. The windy hours as a front comes through are the exception: gusts speed evaporation and carry grit. Wraparound glasses help on those days. After a storm, raking limbs or clearing a fence line can kick up dirt and bark, and anything that lands in your eye and won’t blink out is a job for an eye doctor or urgent care, not a lubricating drop.`,
      },
      { h: 'Five hot months outdoors' },
      {
        p: `From June through September, normal highs sit between 88.5°F and 94.1°F, and summer nights stay around 70°F. Most outdoor plans shift toward early morning, and the rest of the day happens in air conditioning. Cold, dry air blowing from a vent dries the eyes as surely as a heater does, so the same rule applies: keep the airflow off your face.`,
      },
      {
        list: [
          `Mow, ride or garden early, before the sun is high and the glare is at its worst.`,
          `Wear sunglasses that wrap around the sides; they block breeze as well as light.`,
          `On the water or at the park, take a few slow, complete blinks every so often in the shade.`,
          `Don’t leave your eye drops in a parked truck; more on that below.`,
        ],
      },
      { h: 'Screens on the commute and at work' },
      {
        p: `If you drive into San Antonio for work, you get a double dose: car air on the way, then hours at a monitor. Concentrating on a screen slows blinking, and many blinks only half close. Set the screen slightly below eye level, look across the room now and then, and finish each blink. Tablets in bed after a long day count too.`,
      },
      { h: 'What Quell’s label says' },
      {
        p: `Quell is a lubricating eye drop designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses line on its Drug Facts panel reads: {uses}. Directions: {directions}. The panel also says: {tip}.`,
      },
      {
        p: `Read the caution before your first drop: {warnings}. Storage is listed this way: {storage}. Boerne puts a bottle outside that range at both ends of the year. A truck cab in August climbs far above the top of it, and a normal January night of 36.6°F sits well below the bottom, so an unheated garage or a vehicle parked outside on a winter night is no place for the bottle. Keep it inside with you. Everything on the panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell delivered in Boerne' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Boerne and every other US address. Checkout is as a guest, shipping is {shipping}, and {freeBottles} or more bottles ship free. A tracking email follows once the order leaves, though no arrival date is promised, so reorder before you’re down to the last bottle. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. See the [Boerne page](/eye-drops/boerne-tx) and the [Texas page](/eye-drops/state/texas), or [order from the home page](/#buy).`,
      },
      { h: 'Signs it’s time for an eye doctor' },
      {
        p: `An eye drop is for ordinary dryness. It isn’t a way to figure out why your eyes keep bothering you. The label draws the line: {stopUse} One eye much worse than the other, light that suddenly hurts, or blurring that blinking doesn’t clear are all reasons to book an appointment. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists more, and our [self-check](/self-check) can help you describe what you feel; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'How cold does it get in Boerne, Texas?',
        a: `Not very, by national standards. NOAA’s 1991–2020 normals for the Boerne station put January’s average low at 36.6°F and December’s at 38.0°F, with January afternoons near 61.5°F.`,
      },
      {
        q: 'Is Boerne cooler than San Antonio?',
        a: `A little. The Boerne station sits roughly 650 feet higher than San Antonio’s airport station, and its normal January low is 36.6°F against 41.0°F, while August highs run 94.1°F against 96.0°F.`,
      },
      {
        q: 'What is the wettest month in Boerne?',
        a: `May, at 5.28 inches in NOAA’s normals for the Boerne station. September and October follow at 3.90 and 3.88 inches, and the town averages about 37.5 inches a year.`,
      },
      {
        q: 'Does Quell ship to Boerne, Texas?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Boerne and anywhere else in Texas with guest checkout and an emailed tracking link. No delivery date is promised, so order before you run low.`,
      },
    ],
  },
  /*
   * Sources checked 2026-11-25 for dry-eye-relief-gilroy-ca:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991-2020 monthly
   *   normals, SID USC00043417, saved at .daily-job/acis1125/USC00043417.json
   *   (GILROY, CA, elev 194 ft: Jan high 60.7 F, low 38.1 F, precip 4.55 in;
   *   Feb 64.0/40.4, 4.27; Mar 68.1/42.6, 2.59; Apr 71.9/44.5, 1.30; May
   *   77.3/49.0, 0.56; Jun 82.8/51.6, 0.15; Jul 87.2/54.0, 0.00; Aug 87.2/54.4,
   *   0.03; Sep 84.9/52.5, 0.04; Oct 78.8/47.9, 0.85; Nov 68.3/41.6, 1.74; Dec
   *   60.4/37.0, 3.69; annual 19.77 in; Dec-Feb 12.51 in; Jun-Sep 0.22 in)
   * No humidity or wind figure: the Gilroy station is not in relhum23 or wndspd23.
   */
  {
    slug: 'dry-eye-relief-gilroy-ca',
    title: 'Dry eye relief in Gilroy, California',
    description:
      'Gilroy’s station records almost no rain from June to September and summer days that swing more than 30 degrees. NOAA’s numbers and dry eye habits.',
    category: 'local',
    addedOn: '2026-11-25',
    body: [
      {
        p: `In Gilroy, dry eyes track the rain calendar. From June through September the town’s weather station records barely a fifth of an inch of rain in total, and afternoons run more than 30 degrees warmer than the mornings. Shade your eyes from sun and field dust, keep car and office vents off your face, and use a lubricating drop as its label directs. Ongoing symptoms belong with an eye doctor.`,
      },
      { h: 'Gilroy’s rain calendar' },
      {
        p: `NOAA’s 1991–2020 climate normals for the Gilroy cooperative station, at about 190 feet, add up to about 19.8 inches of precipitation in a normal year. Where that water falls in the calendar matters more than the total:`,
      },
      {
        list: [
          `December, January and February bring about 12.5 inches together, nearly two-thirds of the year’s total. January leads at 4.55 inches.`,
          `April drops to 1.30 inches and May to 0.56.`,
          `June through September add up to about 0.22 inch. July’s normal is 0.00.`,
          `October restarts the season with 0.85 inch, and November brings 1.74.`,
        ],
      },
      {
        p: `That means four months a year in which the land, the roads and the air get steadily drier, and no rain arrives to settle the dust.`,
      },
      { h: 'Cool mornings, hot afternoons' },
      {
        p: `Gilroy’s summer days cover a wide range. July and August both have a normal high of 87.2°F, while their normal lows are 54.0°F and 54.4°F, a swing of about 33 degrees. September stays warm at 84.9°F. In practice that means a jacket at 7 a.m., air conditioning by 2 p.m., and car vents that switch from heat to cold in a single day. Each change of setting is a chance for a stream of air to land on your face.`,
      },
      {
        list: [
          `Point the dashboard vents at your chest or the windows, and turn the fan down once the car feels comfortable.`,
          `Plan yard work and runs for the cool part of the morning, when the sun is low and the air is still.`,
          `Keep sunglasses in the car; the afternoon drive west or home from work often comes with glare.`,
        ],
      },
      { h: 'Dust from fields, trails and dry lots' },
      {
        p: `Open farmland, dirt shoulders and dry hillsides surround much of the area around town, and by August, months without rain have left everything powdery. Wind and passing trucks lift that dust into the air. Fine particles irritate eyes that are already short on tears, and rubbing them makes it worse. Wraparound sunglasses or safety glasses are simple protection for field work, hiking or a weekend on the trail. If grit or a speck of plant matter gets in and won’t blink or rinse out with clean water, see an eye doctor or urgent care rather than reaching for a lubricating drop.`,
      },
      { h: 'Heading north for work' },
      {
        p: `If you drive north toward Morgan Hill and San Jose for work, the day pairs car air with a day at a monitor. Screen focus slows your blink rate, and the half-blinks that replace full ones leave part of the eye uncovered. Look away from the screen every so often, set it a little below eye level, and close your eyes fully a few times when you notice they feel dry. [Dry eye relief in San Jose](/guides/dry-eye-relief-san-jose-ca) covers the valley’s office life in more detail.`,
      },
      { h: 'The wet season indoors' },
      {
        p: `Winter is the rainy season, and outdoor air is generally kinder to the eyes then. The trouble moves indoors. December’s normal low is 37.0°F and January’s 38.1°F, so the heat runs most nights from late fall into early spring. Heated air dries the tear film faster, especially from a wall heater or floor vent that blows straight at a couch or bed.`,
      },
      {
        list: [
          `Turn the thermostat down a couple of degrees at night.`,
          `Run a cleaned humidifier in the bedroom if the house feels dry.`,
          `Move your chair or desk out of direct airflow.`,
        ],
      },
      { h: 'What the Drug Facts panel covers' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses line reads: {uses}. The directions say: {directions}. Before using it, check the caution on the panel: {warnings}.`,
      },
      {
        p: `Two more lines matter in a Gilroy summer. First, {storage}. A car parked in an August afternoon at 87°F outside gets much hotter inside, so carry the bottle with you instead of leaving it in the glove box. Second, {tip}. Dusty hands and a dusty dashboard are exactly the surfaces to keep away from the bottle tip. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Gilroy' },
      {
        p: `We ship from Brentwood, Tennessee, to Gilroy and any other US address. Checkout works as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Tracking arrives by email, and no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. The [Gilroy page](/eye-drops/gilroy-ca) and the [California page](/eye-drops/state/california) have more, and you can [order here](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes hurt, if your vision changes, or if dryness keeps returning no matter what you change at home, an eye doctor can find the cause and decide what to do. The label is specific about when to stop: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists other signs not to wait on.`,
      },
    ],
    faq: [
      {
        q: 'Does it rain in Gilroy in the summer?',
        a: `Hardly at all. NOAA’s 1991–2020 normals for the Gilroy station add up to about 0.22 inch for June through September combined, and July’s normal is 0.00 inches.`,
      },
      {
        q: 'How hot does Gilroy get in the summer?',
        a: `July and August both have a normal high of 87.2°F at the Gilroy station, with mornings near 54°F. September follows closely at 84.9°F.`,
      },
      {
        q: 'Why do my eyes feel dry in Gilroy in August?',
        a: `By August the area has gone months with almost no rain, so dust lifts easily, and long hot afternoons mean the air conditioning and car vents run hard. Both speed up evaporation from the tear film.`,
      },
      {
        q: 'Can I get Quell delivered to Gilroy?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Gilroy and anywhere else in the US, with guest checkout and an emailed tracking link. No arrival date is promised.`,
      },
    ],
  },
  /*
   * Sources checked 2026-11-25 for dry-eye-relief-casa-grande-az:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991-2020 monthly
   *   normals, SID USC00021306, saved at .daily-job/acis1125/USC00021306.json
   *   (CASA GRANDE, AZ, elev 1400 ft: Jan high 68.7 F, low 39.1 F, precip 0.79
   *   in; Feb 72.6/41.5, 1.00; Mar 79.9/47.2, 0.76; Apr 87.5/53.0, 0.21; May
   *   96.4/60.4, 0.18; Jun 105.8/69.9, 0.18; Jul 106.8/78.1, 0.91; Aug
   *   105.3/77.3, 1.52; Sep 100.4/70.7, 0.72; Oct 90.7/56.9, 0.48; Nov
   *   77.5/45.3, 0.43; Dec 67.6/38.4, 0.73; annual 7.91 in; Apr-Jun 0.57 in)
   * No humidity or wind figure: the Casa Grande station is not in relhum23 or
   * wndspd23.
   */
  {
    slug: 'dry-eye-relief-casa-grande-az',
    title: 'Dry eye relief in Casa Grande, Arizona',
    description:
      'Casa Grande averages under 8 inches of rain a year and four months with highs past 100°F. NOAA’s figures and practical dry eye habits for the town.',
    category: 'local',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Casa Grande is desert: its weather station averages under 8 inches of precipitation a year, and normal highs pass 100°F from June through September. For dry eye relief, keep air conditioner and car vents off your face, wear wraparound sunglasses outdoors, blink fully at screens, and use a lubricating drop exactly as its label directs. An eye doctor should check pain, vision changes or dryness that won’t settle.`,
      },
      { h: 'The desert by the numbers' },
      {
        p: `NOAA’s 1991–2020 climate normals for the Casa Grande cooperative station, at about 1,400 feet, list just 7.91 inches of precipitation in a normal year. The monthly figures show how that little bit is spread out:`,
      },
      {
        list: [
          `April, May and June together bring only about 0.57 inch.`,
          `August is the wettest month at 1.52 inches, with July next at 0.91.`,
          `Normal highs reach 105.8°F in June, 106.8°F in July, 105.3°F in August and 100.4°F in September.`,
          `Summer nights stay warm: July’s normal low is 78.1°F and August’s 77.3°F.`,
          `December is the coolest month, with a normal high of 67.6°F and a low of 38.4°F.`,
        ],
      },
      { h: 'April to June: the driest stretch' },
      {
        p: `Late spring is when the eyes take the hardest hit. Highs climb from 87.5°F in April to 105.8°F in June while the three months together average barely half an inch of rain. Hot, dry air pulls water from the tear film quickly, and every gust adds to it. Many people notice the first scratchy, tired-feeling afternoons in May, before the real heat arrives.`,
      },
      {
        list: [
          `Do outdoor errands, yard work and walks right after sunrise.`,
          `Wear sunglasses that curve around the sides of your face.`,
          `When you come inside, give your eyes a minute closed before going back to a screen.`,
          `Keep the eye drops in your bag rather than the car (see the storage line below).`,
        ],
      },
      { h: 'Nights that never cool off' },
      {
        p: `With July nights averaging 78.1°F, the air conditioning in a Casa Grande home often runs around the clock in midsummer. That means hours of blown, cooled air even while you sleep. A ceiling fan pointed straight at the bed adds to it. Eyes that are slightly open during sleep, or that spend the night in moving air, can wake up feeling gritty.`,
      },
      {
        list: [
          `Angle bedroom vents toward the ceiling or the wall, not the pillow.`,
          `Run a ceiling fan on low, or turn it off once the room has cooled.`,
          `If you use an evaporative cooler, remember it moves a lot of air; sit out of its direct stream.`,
        ],
      },
      { h: 'Monsoon dust and the August rains' },
      {
        p: `July and August bring most of the summer’s rain, and with it the storms that can push walls of dust across open desert and farm fields. Dust is a mechanical irritant on top of the dryness. When a storm is coming, close the car windows, set the air to recirculate, and wear glasses if you have to be outside. If grit gets in your eye and blinking won’t clear it, don’t rub; rinse with clean water and see an eye doctor or urgent care if it still feels stuck. A lubricating drop isn’t meant for removing something from the eye. Our [Phoenix guide](/guides/dry-eyes-in-phoenix) has more on dust season in the Valley.`,
      },
      { h: 'Driving to Phoenix or Tucson' },
      {
        p: `Casa Grande sits between the state’s two biggest metro areas, and the drive to one or the other for work, shopping or appointments is a regular part of life for many households. An hour or more with the air conditioning on high, sun on the windshield and your eyes fixed on the road is a reliable recipe for dry eyes. Keep the vents low and aimed away, wear sunglasses, and blink deliberately at red lights. The drive is also a good reason to pull over rather than fiddle with a bottle at highway speed.`,
      },
      { h: 'Winter: the outdoor season' },
      {
        p: `From November through February, normal highs stay between 67.6°F and 77.5°F, which is why winter visitors come and why locals finally spend afternoons outside. Nights in December and January drop into the high 30s, though, so the heat goes on in the evening. Gas fireplaces and space heaters dry the air in a small room quickly. Keep them aimed away from where you sit.`,
      },
      { h: 'Reading Quell’s label in the heat' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Drug Facts panel lists its Uses as: {uses}. Directions: {directions}. Read the caution too: {warnings}.`,
      },
      {
        p: `The storage line is the one Casa Grande tests hardest: {storage}. On a 106°F afternoon, a closed car runs far past that upper limit within minutes, so the glove box is off the table from spring through fall. Keep the bottle indoors or in a bag you carry, away from a sunny window. The panel also says: {tip}. The complete panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Shipping Quell to Casa Grande' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Casa Grande and every other US address. Check out as a guest; shipping is {shipping}, or free with {freeBottles} or more bottles. Tracking comes by email, and there is no promised delivery date. Bring the package inside soon after it arrives on a hot day. Unopened bottles can be refunded within {returnDays} days of delivery, no need to send them back. See the [Casa Grande page](/eye-drops/casa-grande-az) and the [Arizona page](/eye-drops/state/arizona), or [order here](/#buy).`,
      },
      { h: 'When dryness needs a doctor' },
      {
        p: `Drops are for ordinary dryness, not for working out what is wrong when symptoms persist. Follow the label: {stopUse} Light sensitivity that’s new, blurring that doesn’t clear when you blink, or pain in one eye are reasons to call an eye doctor. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the main warning signs.`,
      },
    ],
    faq: [
      {
        q: 'How much rain does Casa Grande, Arizona get?',
        a: `About 7.91 inches in a normal year, according to NOAA’s 1991–2020 normals for the Casa Grande station. August is the wettest month at 1.52 inches.`,
      },
      {
        q: 'How hot does Casa Grande get in the summer?',
        a: `July has the highest normal high at the Casa Grande station, 106.8°F. June (105.8°F), August (105.3°F) and September (100.4°F) also average above 100°F.`,
      },
      {
        q: 'Why do my eyes feel worse in Casa Grande in May and June?',
        a: `Late spring combines rising heat with almost no rain: April through June average about 0.57 inch combined at the local station. Hot, dry air and wind speed evaporation from the tear film.`,
      },
      {
        q: 'Does Quell ship to Casa Grande, Arizona?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Casa Grande and the rest of Arizona with guest checkout and email tracking. On hot days, bring the package inside promptly.`,
      },
    ],
  },
  /*
   * Sources checked 2026-11-25 for dry-eye-relief-salisbury-nc:
   * - NOAA Regional Climate Centers ACIS (data.rcc-acis.org), 1991-2020 monthly
   *   normals, SID USC00317615, saved at .daily-job/acis1125/USC00317615.json
   *   (SALISBURY, NC, elev 700 ft: Jan high 50.2 F, low 29.0 F, precip 3.46 in,
   *   snow 1.4 in; Feb 54.2/31.8, 2.97, 0.1; Mar 62.0/38.2, 4.09, 0.1; Apr
   *   71.6/47.6, 3.69; May 78.3/56.3, 3.43; Jun 85.2/64.8, 4.28; Jul 88.2/68.6,
   *   4.59; Aug 86.4/67.3, 3.74; Sep 80.5/60.5, 3.83; Oct 71.6/48.1, 2.97; Nov
   *   60.8/37.3, 3.13; Dec 52.9/31.5, 3.50, 0.8; annual precip 43.68 in; annual
   *   snow 2.4 in)
   * No humidity or wind figure: the Salisbury station is not in relhum23 or
   * wndspd23.
   */
  {
    slug: 'dry-eye-relief-salisbury-nc',
    title: 'Dry eye relief in Salisbury, North Carolina',
    description:
      'Salisbury gets rain in every month, so dry eyes there are mostly an indoor, winter problem. NOAA’s normals for the town and what helps day to day.',
    category: 'local',
    addedOn: '2026-11-25',
    body: [
      {
        p: `In Salisbury, dry eyes are mostly a winter and indoor problem. The town’s weather station records rain in every month of the year, but from December through February normal lows sit near or below freezing, so the furnace runs for months. Keep heat away from your face, blink fully at screens, and use a lubricating eye drop as its label directs. Persistent symptoms belong with an eye doctor.`,
      },
      { h: 'Salisbury’s year in NOAA’s normals' },
      {
        p: `NOAA’s 1991–2020 climate normals for the Salisbury cooperative station, at about 700 feet in the Piedmont, describe a damp, four-season climate:`,
      },
      {
        list: [
          `About 43.7 inches of precipitation in a normal year, with no month under 2.97 inches.`,
          `July is the wettest month at 4.59 inches; February and October are the driest at 2.97 each.`,
          `January is the coldest month, with a normal high of 50.2°F and a low of 29.0°F.`,
          `July is the warmest, at 88.2°F with nights near 68.6°F.`,
          `About 2.4 inches of snow fall in a normal year, 1.4 of them in January.`,
        ],
      },
      {
        p: `Weather like that rarely dries eyes out on its own. What does is the way people heat and cool their homes, cars and offices to live comfortably through it.`,
      },
      { h: 'Why winter is the hard season here' },
      {
        p: `Normal lows fall to 31.5°F in December, 29.0°F in January and 31.8°F in February. Heat pumps and furnaces run through those nights and most mornings. Heating cold air raises its temperature without adding water, so the relative humidity indoors drops, sometimes sharply. The tear film’s oil layer slows evaporation from the watery layer under it, and warm, dry, moving air is the condition that strains it most. That is why eyes can feel scratchy in a heated house on a rainy January day.`,
      },
      {
        list: [
          `Lower the thermostat a few degrees at night; a cooler bedroom loses less moisture from the air.`,
          `Run a cleaned humidifier where you sleep, and keep the door closed so it can do its job.`,
          `Check where the supply vents point and move the bed, couch or desk chair out of the stream.`,
          `In the car, send warm air to the floor and windshield instead of the dashboard vents.`,
        ],
      },
      {
        p: `[Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more ideas for the house, and [Dry eyes in January](/guides/dry-eyes-in-january) covers the coldest month in detail.`,
      },
      { h: 'Snow days and bright mornings' },
      {
        p: `A normal Salisbury winter brings only a couple of inches of snow, but when it falls, it changes the day. Sunlight off fresh snow is bright, and cold wind while you scrape the windshield or shovel the walk makes the eyes water and then dry out. Sunglasses help even when it’s cold, and so does stepping inside for a few minutes rather than finishing the whole driveway in one stretch.`,
      },
      { h: 'Spring and fall in the Piedmont' },
      {
        p: `March and April are pleasant, with highs from 62°F to 71.6°F, and they pull people outdoors after months inside. Spring wind and pollen can leave eyes feeling irritated and itchy. Wraparound sunglasses cut down on both, and washing your face and hands after yard work means less pollen ends up near your eyes. October, tied with February as the driest month, is another good time to watch for dry, windy afternoons at football games or in the leaves.`,
      },
      { h: 'Air conditioning through the summer' },
      {
        p: `June through August bring highs in the mid to upper 80s and the year’s heaviest rain. Outdoors, that air is rarely what dries the eyes. Air conditioning is. Long afternoons in a cold office or a car with vents aimed at your face can leave your eyes as dry in July as in January. The fix is the same: point the air away and take real breaks from close work.`,
      },
      { h: 'The commute and the screen' },
      {
        p: `If you drive to a job down toward Kannapolis, Concord or Charlotte, the day can start and end with car air. In between, a screen slows your blinking. Every so often, look out a window and blink slowly and completely a few times. [Dry eye relief in Charlotte](/guides/dry-eye-relief-charlotte-nc) covers the city end of the commute.`,
      },
      { h: 'What Quell’s Drug Facts panel says' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses section reads: {uses}. The directions are: {directions}. Its caution: {warnings}.`,
      },
      {
        p: `On storage, the panel says: {storage}. A January low of 29.0°F means a car parked outside on a January night drops below that range, so keep the bottle in the house, not the glove box. The panel also says: {tip}. Read the rest on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering Quell in Salisbury' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Salisbury and every other US address. Checkout is as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. You’ll get tracking by email, but no delivery date is promised. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. The [Salisbury page](/eye-drops/salisbury-nc) and the [North Carolina page](/eye-drops/state/north-carolina) have more, or [order here](/#buy).`,
      },
      { h: 'When an eye doctor should take a look' },
      {
        p: `A drop helps with occasional dryness. When symptoms keep returning or change, an eye doctor can find the cause and decide what to do. The label is clear: {stopUse} Sudden light sensitivity, pain or blurred vision that blinking doesn’t clear shouldn’t wait. See [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'How much snow does Salisbury, NC get?',
        a: `About 2.4 inches in a normal year, according to NOAA’s 1991–2020 normals for the Salisbury station. January averages 1.4 inches and December 0.8.`,
      },
      {
        q: 'How cold does Salisbury, NC get in January?',
        a: `January is the coldest month at the Salisbury station, with a normal low of 29.0°F and a normal high of 50.2°F.`,
      },
      {
        q: 'Why are my eyes dry in a heated house when it’s raining outside?',
        a: `Heating cold air raises its temperature without adding water, so indoor relative humidity drops even on a wet day. Warm, dry, moving air from vents speeds evaporation from the tear film.`,
      },
      {
        q: 'Does Quell ship to Salisbury, North Carolina?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Salisbury and the rest of North Carolina, with guest checkout and email tracking. No delivery date is promised, so reorder before you run out.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-respiratory-therapists',
    title: 'Dry eyes for respiratory therapists',
    description:
      'Hospital air, masks, long shifts and charting screens all dry a respiratory therapist’s eyes. Practical habits for the unit and what the drop label covers.',
    category: 'using',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Respiratory therapists get dry eyes from the job’s setting more than any single task: climate-controlled hospital air, masks that push warm breath upward, long shifts spent moving between rooms, and charting at a workstation between patients. Keep vents and mask leaks off your eyes, blink fully at screens, and use a lubricating drop on breaks as its label directs. Ongoing symptoms belong with an eye doctor.`,
      },
      { h: 'Why respiratory therapists’ eyes dry out' },
      {
        p: `The work pulls you through the whole building. A single shift can take you from the emergency department to intensive care, a step-down floor, a procedure area and back, each with its own airflow and temperature. Your eyes spend those hours focused on small things: settings, alarms, waveforms on a monitor, the chart. Focus slows blinking, and moving air speeds evaporation from the tear film between blinks. None of that is unusual by itself. Stacked across a long shift, it adds up to eyes that feel gritty or heavy by the last few hours.`,
      },
      { h: 'Hospital air, room by room' },
      {
        p: `Hospitals move a great deal of air, and in winter much of it is heated. Patient rooms, supply rooms and corridors all have vents, and a vent above a workstation or a bedside chair blows straight down onto your face while you’re concentrating. Our guide to [why eyes feel dry in a hospital room](/guides/why-do-my-eyes-feel-dry-in-a-hospital-room) explains the building side of it. On the job, small adjustments help:`,
      },
      {
        list: [
          `When you chart at a computer on wheels, park it where the ceiling vent isn’t directly above your head.`,
          `Step out of the stream of a portable fan or heater rather than working beside it.`,
          `Use the walk between units as a reset: look down the hallway and blink fully a few times.`,
          `If one workroom always leaves your eyes dry, notice it; it’s often the airflow, not you.`,
        ],
      },
      { h: 'Masks, shields and goggles' },
      {
        p: `Masks are part of the work. When a mask doesn’t seal snugly along the nose, each exhale can slip out the top and blow warm air across the eyes. Over hours, that is a steady breeze on the tear film. A good fit at the bridge of the nose helps, and your facility’s fit-testing and supply staff can help you find a size that seals. Face shields and goggles block outside air but can trap warmth; taking them off at the right times, according to your unit’s rules, gives the eyes a break. [Dry eyes from wearing a face mask](/guides/dry-eyes-from-wearing-a-face-mask) goes into more detail.`,
      },
      { h: 'Charting and monitors' },
      {
        p: `Documentation happens on screens, and so does a lot of monitoring. Looking at a screen doesn’t harm the eyes, but it changes how you blink: fewer blinks, and more of them partial. Between patients, those charting minutes are often the longest stretch of steady focus in the shift.`,
      },
      {
        list: [
          `Lower the screen slightly so your eyelids cover more of the eye while you type.`,
          `After finishing a note, look at something across the room before starting the next.`,
          `Turn the brightness down to match the room, especially on night shift.`,
          `Close your eyes for a few seconds while a page loads instead of watching it.`,
        ],
      },
      { h: 'Night shift and rotating schedules' },
      {
        p: `Many respiratory therapists work nights or rotate. Long awake hours, a dim unit with bright screens, and daytime sleep in a room that may be warm or noisy all leave eyes feeling worse. Darkening the bedroom, keeping the fan off your face while you sleep, and giving yourself a few minutes with your eyes closed before the drive home all help. [Dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) covers the schedule side of it.`,
      },
      { h: 'If something splashes in your eye' },
      {
        p: `A splash of any fluid, medication, cleaning product or anything else into the eye is not a job for a lubricating eye drop. Follow your hospital’s exposure procedure: use the eyewash as directed, report it, and get checked by employee health or the emergency department as your facility requires. Don’t rub. The same goes for a stray particle that won’t blink out. Lubricating drops are for ordinary dryness only.`,
      },
      { h: 'Using a drop on a shift' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Drug Facts panel gives its Uses as: {uses}. The directions say: {directions}. The label doesn’t tie those times to a clock, so placing them across your waking hours, such as before a shift, at a meal break and after you get home, is your call.`,
      },
      {
        list: [
          `Wash your hands first, and let alcohol rub dry completely before you touch your eyelids.`,
          `Use it away from the bedside, in a break room or locker room.`,
          `Keep the cap clean, and follow the panel: {tip}.`,
          `Read the caution before the first drop: {warnings}.`,
          `Store it as the label says, {storage}; a scrub pocket or locker normally fits that range.`,
        ],
      },
      {
        p: `If you wear contact lenses, the label doesn’t give directions for using the drop with them, so ask your eye doctor. The whole panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering for yourself or the team' },
      {
        p: `Quell ships from Brentwood, Tennessee, to US addresses, including a work address. Checkout is as a guest, shipping is {shipping}, and {freeBottles} or more bottles ship free. There is no subscription; you’ll get one reorder reminder email. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. You can [order here](/#buy).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `You know better than most when a symptom needs more than comfort measures. Apply the same standard to your own eyes. The label says: {stopUse} Dryness that keeps returning on days off, eyes that hurt, or vision that changes are reasons to book an eye exam, where an eye doctor can find the cause and decide what to do. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists more.`,
      },
    ],
    faq: [
      {
        q: 'Why do respiratory therapists get dry eyes?',
        a: `The job combines constant hospital airflow, masks that can push exhaled air toward the eyes, long shifts and steady focus on monitors and charting screens. Each one speeds evaporation from the tear film or slows blinking.`,
      },
      {
        q: 'Can respiratory therapists use eye drops at work?',
        a: `A lubricating drop used as its label directs can be part of a shift routine, ideally in a break room with clean hands. Quell’s directions are {directions}, and the label doesn’t cover use with contact lenses.`,
      },
      {
        q: 'Why do my eyes feel dry after wearing a mask all shift?',
        a: `If the mask doesn’t seal well along the nose, warm exhaled air can escape upward and flow across your eyes with every breath. Over a long shift that steady breeze dries the tear film.`,
      },
      {
        q: 'What should a respiratory therapist do if fluid splashes in the eye?',
        a: `Follow your hospital’s exposure procedure, use the eyewash as directed, report it and get checked. A lubricating eye drop isn’t meant for a splash.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-kennel-and-boarding-staff',
    title: 'Dry eyes for kennel and boarding staff',
    description:
      'Bedding dust, disinfectant spray, heated runs and cold yard time wear on kennel workers’ eyes. What helps, and what to do if cleaner splashes in.',
    category: 'using',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Kennel and boarding work dries the eyes through dust and air: bedding and hair stirred up during cleaning, fans and heaters in the runs, disinfectant mist, and cold wind in outdoor yards. Clean with less spray in the air, keep your face out of fan and heater streams, wear glasses when hosing, and use a lubricating drop on breaks as its label directs. A chemical splash is for Poison Control or urgent care.`,
      },
      { h: 'What a kennel shift does to your eyes' },
      {
        p: `The work runs on routine: morning cleaning, feeding, yard turnout, more cleaning, play groups, evening checks. Much of it happens in buildings designed to move air and stay easy to wash down, which means hard surfaces, fans, and heating or cooling that runs hard. Shaking out bedding, sweeping hair and dumping food bags all put fine particles in the air at face height. Eyes that are already a little dry feel every speck of it.`,
      },
      { h: 'Bedding, hair and feed dust' },
      {
        p: `Shredded paper, shavings, straw and blankets all shed dust when they are moved, and dogs and cats shed hair and dander constantly. None of it needs to be dangerous to make your eyes feel gritty and irritated by the end of a shift. A few changes cut down how much reaches your face:`,
      },
      {
        list: [
          `Lower bedding into the bin instead of shaking it out.`,
          `Sweep slowly and push dust away from you, or use a vacuum where your facility allows it.`,
          `Pour dry food close to the bowl rather than from shoulder height.`,
          `Wash your hands and face at breaks, before you touch your eyes or put in a drop.`,
        ],
      },
      { h: 'Disinfectant, hoses and spray' },
      {
        p: `Cleaning products are part of every shift, and runs are often hosed down. Spraying or hosing at an angle sends a fine mist back toward you, and that mist can carry the product with it. Point the spray low, step back, and let the mist settle before you walk through. Wearing safety glasses or goggles while you mix, spray or hose puts a barrier between the splash and your eyes; ask your manager what your facility provides.`,
      },
      {
        p: `If cleaner, disinfectant or any chemical gets in your eye, don’t use a lubricating drop. Rinse with clean, lukewarm water right away and keep rinsing, then call Poison Control at 1-800-222-1222 or go to urgent care, and bring the product’s label if you can. Tell your supervisor, too.`,
      },
      { h: 'Heated runs in winter, fans in summer' },
      {
        p: `Indoor kennels are kept comfortable for the animals, and that means steady heating in winter and fans or air conditioning in summer. Heated air dries the tear film faster, and fans keep it moving across your face while you work. Spend a minute noticing where the air comes from in each room, and work with your back to it when you can. In a break room with a space heater, sit to the side of it rather than in front.`,
      },
      { h: 'Yard time in the cold' },
      {
        p: `Turnout and play groups happen outside in all weather. In winter, cold wind makes eyes water and then dry out, and low afternoon sun reflects off frozen ground or snow. A brimmed hat and wraparound sunglasses help on bright, windy days, and stepping inside between groups gives your eyes a break. Our guide on [protecting your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) has more.`,
      },
      { h: 'Holiday weeks and long shifts' },
      {
        p: `When families travel around Thanksgiving and Christmas, boarding fills up and shifts can stretch. Long days of cleaning, carrying and paying close attention to dozens of animals mean fewer real breaks and less blinking. Build two or three short pauses into the shift: wash up, look at something far away, close your eyes for a few seconds. Those minutes help more than one long rest at the end.`,
      },
      { h: 'Using a drop at work' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses line reads: {uses}. Directions: {directions}. The panel also says: {tip}. In a kennel, that means clean hands and a clean place to set the cap, which is easier in the break room than in a run.`,
      },
      {
        p: `Read the caution before your first drop: {warnings}. Keep the bottle in your bag or locker, not in a hot car or an unheated shed: {storage}. The label gives directions for people only, so it doesn’t cover animals; never use your drops on a dog or cat, and ask a veterinarian about their eyes. If you wear contact lenses, the label doesn’t address them, so ask your eye doctor. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Related reading' },
      {
        p: `Groomers deal with some of the same hair and spray, plus dryers; see [dry eyes for dog groomers](/guides/dry-eyes-for-dog-groomers). Clinic staff have their own version in [dry eyes for veterinarians and vet techs](/guides/dry-eyes-for-veterinarians-and-vet-techs).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dust and dryness that settle after a shift are one thing. Eyes that hurt, keep watering, look different, or don’t improve on your days off need an eye doctor, who can find the cause and decide what to do. The label is direct: {stopUse} A scratch from a paw or a nail is also a reason to get checked rather than wait. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get irritated working at a dog kennel?',
        a: `Kennel work puts bedding dust, hair and dander in the air at face height, and heaters, fans and cleaning spray add to it. Dust irritates eyes that are already short on tears.`,
      },
      {
        q: 'What should I do if kennel disinfectant gets in my eye?',
        a: `Rinse right away with clean, lukewarm water and keep rinsing, then call Poison Control at 1-800-222-1222 or go to urgent care with the product label. Don’t use a lubricating eye drop for a chemical splash.`,
      },
      {
        q: 'Should kennel workers wear glasses when hosing runs?',
        a: `Safety glasses or goggles put a barrier between spray and your eyes while you mix, spray or hose. Ask your manager what your facility provides.`,
      },
      {
        q: 'Can I use my eye drops on a boarding dog?',
        a: `No. Quell’s label gives directions for people and doesn’t cover animals. A veterinarian should look at any dog or cat with eye trouble.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-stable-hands-and-farriers',
    title: 'Dry eyes for stable hands and farriers',
    description:
      'Barn dust, hay, cold mornings and forge heat wear on the eyes of stable hands and farriers. What helps day to day, and when grit needs a doctor.',
    category: 'using',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Stable hands and farriers get dry, irritated eyes from barn dust, hay and shavings, cold early mornings in drafty aisles, and, for farriers, heat from the forge and smoke from hot shoeing. Move bedding and hay low and slow, wear safety glasses for rasping and grinding, keep your face out of forge heat, and use a lubricating drop as its label directs. Anything stuck in the eye is for a doctor.`,
      },
      { h: 'Barn dust starts before sunrise' },
      {
        p: `Barn work begins early, often in the dark and cold. Feeding hay, mucking stalls, adding fresh shavings and sweeping the aisle all put fine dust into the air at the height of your face. In a closed winter barn with little airflow, that dust hangs around. It doesn’t take much to leave the eyes scratchy and watery by mid-morning.`,
      },
      {
        list: [
          `Pull flakes off the bale gently instead of shaking them out.`,
          `Lower shavings into the stall from the bag rather than tossing them up and out.`,
          `Sweep in short strokes, away from you, and lightly mist a dusty aisle first where it’s allowed.`,
          `Open a door at each end when the weather permits so the dust has somewhere to go.`,
        ],
      },
      { h: 'Stall smell and stinging eyes' },
      {
        p: `Wet bedding produces a sharp smell that many people notice in their eyes and nose before anything else, especially in a closed barn in winter. Picking stalls often, adding fresh bedding and letting the barn air out cut it down. If that sting comes with pain, blurry vision or doesn’t ease once you’re outside, stop working in it and see an eye doctor.`,
      },
      { h: 'Cold mornings and wind in the paddock' },
      {
        p: `Turnout, bringing horses in and checking fences happen in whatever the weather brings. Cold wind makes the eyes water, then dry out, and the glare of low winter sun on frost or snow makes you squint. Wraparound sunglasses with a strap stay put better than loose ones when you’re leading a horse. [Dry eyes from cold air](/guides/dry-eyes-from-cold-air) explains why tearing and dryness show up together.`,
      },
      { h: 'Farriers: forge heat and hot shoeing' },
      {
        p: `A farrier’s day adds things a stable hand doesn’t face. Leaning over a coal or propane forge puts dry, radiant heat on the face, and hot fitting a shoe sends up a burst of acrid smoke right at eye level. Grinding, rasping and nailing throw off tiny bits of hoof and metal. Bending down under the horse for long stretches also means your eyes stay fixed on close work.`,
      },
      {
        list: [
          `Stand to the side of the forge opening instead of looking straight into it.`,
          `Turn your head away and step back when the shoe goes on hot.`,
          `Wear safety glasses for grinding, rasping and clinching.`,
          `Between horses, stand up, look across the barn and blink fully a few times.`,
        ],
      },
      { h: 'Grit, filings and smoke in the eye' },
      {
        p: `A piece of hay, a hoof chip, a metal filing or a spark that lands in the eye is not a dryness problem, and a lubricating drop isn’t the answer. Don’t rub. If blinking and a gentle rinse with clean water don’t clear it, go to an eye doctor or urgent care, and go right away if the eye was hit with force or by something hot. Smoke that leaves your eyes painful or blurred afterward needs the same attention.`,
      },
      { h: 'Truck, tack room and the long drive' },
      {
        p: `Farriers and many barn workers spend hours driving between farms. A heater or air conditioner aimed at your face for an hour dries the eyes as much as the barn did, so point the vents low. The truck is also a poor place for eye drops through most of the year, because cab temperatures swing far past what the label allows. A tack room or feed room that freezes in winter has the same problem.`,
      },
      { h: 'What the label says about using a drop' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses line on its Drug Facts panel: {uses}. Directions: {directions}. Storage: {storage}, which is why a heated house, office or jacket pocket beats the truck or tack room. Before using it, read the caution: {warnings}.`,
      },
      {
        p: `Barn hands are rarely clean hands. The panel says: {tip}. Wash up before putting a drop in, and do it somewhere out of the dust, such as the house or the truck cab with the engine off. The label gives directions for people only and doesn’t cover horses or other animals; a veterinarian handles their eyes. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Related guides' },
      {
        p: `Riders face many of the same conditions from the saddle; see [dry eyes when horseback riding](/guides/dry-eyes-when-horseback-riding). For cattle work and long days in pastures, read [dry eyes for ranchers](/guides/dry-eyes-for-ranchers).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay irritated on days away from the barn, if one eye is painful, or if your vision changes, an eye doctor can find the cause and decide what to do. The label puts it this way: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists other signs to act on.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get scratchy working in a horse barn?',
        a: `Feeding hay, mucking stalls and sweeping aisles put fine dust at face height, and a closed winter barn holds it in. Dust irritates the eyes, especially when the tear film is already thin.`,
      },
      {
        q: 'Can forge heat dry out your eyes?',
        a: `Leaning over a forge puts dry, radiant heat on your face and speeds evaporation from the tear film. Standing to the side of the opening and stepping back between heats both help.`,
      },
      {
        q: 'What should a farrier do if a metal filing gets in the eye?',
        a: `Don’t rub it. If blinking and a gentle rinse with clean water don’t clear it, see an eye doctor or urgent care promptly, and go right away if it hit with force or was hot. A lubricating drop isn’t for removing something from the eye.`,
      },
      {
        q: 'Where should I keep eye drops at the barn?',
        a: `Somewhere that stays within the label’s storage range, {storage}. A truck cab or unheated tack room often doesn’t, so a jacket pocket or the house is usually the better spot.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-christmas-tree-lot-workers',
    title: 'Dry eyes for Christmas tree lot workers',
    description:
      'Cold wind, long evenings under lights, sawdust, needles and heater-warmed trailers dry the eyes on a tree lot. What helps through the busy weeks.',
    category: 'using',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Working a Christmas tree lot dries the eyes with cold wind, long evening shifts under bright lights, sawdust from fresh cuts, needles and bark from netting, and blasts of heat in the trailer or tent between customers. Wear glasses for cutting and netting, keep heaters off your face, blink fully during slow stretches, and use a lubricating drop on breaks as its label directs. Sap or a needle in the eye is for a doctor.`,
      },
      { h: 'A season of long, cold shifts' },
      {
        p: `Tree lots open around Thanksgiving and run hard until just before Christmas, which this year is Friday, December 25. That puts most of the work in the coldest, darkest weeks of the year, with the busiest hours in the evening and on weekends. Many lot workers stand outside for hours at a time, step into a heated trailer or tent to warm up and ring up a sale, then go straight back out. Each of those changes is hard on the tear film.`,
      },
      { h: 'Wind between the rows' },
      {
        p: `Rows of trees break some wind, but the aisles between them and the open front of the lot often channel it. Cold, moving air makes the eyes water at first, then leaves them dry once the reflex tears are gone. A knit cap pulled low and glasses that wrap around the sides cut down how much wind reaches your eyes. Turn your back to the wind when you’re waiting for customers, and step behind the trailer or a stack of trees when it gusts. [How to protect your eyes from cold wind](/guides/how-to-protect-your-eyes-from-cold-wind) has more ideas.`,
      },
      { h: 'Saws, netting and flying needles' },
      {
        p: `The jobs that make a lot run are messy. A fresh cut off the bottom of the trunk throws sawdust, the netting machine sheds needles and bits of bark as the tree goes through, and shaking a tree to loosen dead needles sends them flying at face height. Drilling for stands adds more dust.`,
      },
      {
        list: [
          `Wear safety glasses when cutting, drilling, netting or shaking trees.`,
          `Stand to the side of the netter, not in line with where the tree comes out.`,
          `Shake trees with your face turned away, or let the customer stand back while you do it.`,
          `Brush off your hat and collar before going into the warm trailer, so needles don’t drop into your eyes later.`,
        ],
      },
      { h: 'If sap, a needle or sawdust gets in your eye' },
      {
        p: `A needle that pokes the eye, sap that gets smeared into it, or sawdust that won’t blink out is not dryness, and a lubricating drop won’t fix it. Don’t rub. Rinse gently with clean water, and if it still hurts or feels stuck, see an eye doctor or urgent care. If the eye was scratched or struck, go right away. The [tree farm guide](/guides/dry-eyes-at-a-christmas-tree-farm) covers the same risks from the customer’s side.`,
      },
      { h: 'The heated trailer and the propane heater' },
      {
        p: `Many lots keep a small office, trailer or tent with a space heater or propane heater for the cash register and coffee. After the cold outside, that dry, hot air feels great and dries your eyes fast, especially if you sit facing the heater. Keep it aimed at your legs, sit to the side, and don’t stand over it with your face in the warm stream. [Dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) explains why.`,
      },
      { h: 'Evenings under string lights and floods' },
      {
        p: `After dark, a lot runs on string lights and work lights, often bright floods aimed across the trees. Looking into them while you carry a tree or check a tag makes you squint and blink less. Angle work lights down toward the trees rather than at eye level, and look away from the brightest bulbs between customers. Night driving home after a late close is its own strain; keep the heater off your face in the car, too.`,
      },
      { h: 'Using a drop on your break' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The Uses line on its Drug Facts panel: {uses}. Directions: {directions}. The panel’s tip matters on a lot full of sap and dirt: {tip}. Wash or wipe your hands before you open the bottle, and do it inside, out of the wind.`,
      },
      {
        p: `Storage is listed as {storage}. A coat pocket on a freezing night or a truck parked at the lot can fall below that range, so keep the bottle inside the trailer away from the heater, or in an inner pocket close to your body. Read the caution before using it: {warnings}. If you wear contact lenses, the label doesn’t give directions for them, so ask your eye doctor. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'A short checklist for the season' },
      {
        list: [
          `Safety glasses and a pair of wraparound sunglasses in your bag.`,
          `A knit cap and a scarf you can pull up against the wind.`,
          `Hand wipes for sap before you touch your face.`,
          `Short warm-up breaks spent with your eyes closed for a minute, not staring at a phone.`,
          `A seat in the trailer that isn’t right in front of the heater.`,
        ],
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Tired, dry eyes at the end of a cold shift usually ease after rest. Eyes that hurt, stay blurry, or keep bothering you after the season ends need an eye doctor, who can find the cause and decide what to do. The label is plain: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get so dry working at a Christmas tree lot?',
        a: `Hours in cold wind, then quick warm-ups beside a heater, then back outside under bright lights all speed evaporation from the tear film. Sawdust and needles from cutting and netting add irritation on top.`,
      },
      {
        q: 'What should I do if pine sap gets in my eye?',
        a: `Don’t rub. Rinse gently with clean water, and if the eye still hurts or feels sticky and blurred, see an eye doctor or urgent care. A lubricating drop isn’t meant for sap.`,
      },
      {
        q: 'Should I wear safety glasses on a Christmas tree lot?',
        a: `They’re a simple barrier for the dusty jobs: cutting trunks, drilling for stands, running the netter and shaking out loose needles. Ask the lot manager what they provide.`,
      },
      {
        q: 'Can eye drops freeze in a coat pocket on a tree lot?',
        a: `An outer pocket on a freezing night can drop below the label’s storage range, {storage}. An inside pocket close to your body or a shelf in the trailer away from the heater is a better place.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-at-a-new-years-day-polar-plunge',
    title: 'Dry eyes at a New Year’s Day polar plunge',
    description:
      'Cold wind on the shore, icy water, a late night before and a car heater after: how a polar plunge hits your eyes, and simple ways to plan around it.',
    category: 'seasonal',
    addedOn: '2026-11-25',
    body: [
      {
        p: `A New Year’s Day polar plunge is hard on the eyes before and after the water: a late night the evening before, a long wait in cold wind on the shore, a splash of cold lake or ocean water, then a car heater on high. Keep your eyes closed when you go under, rinse with clean water afterward if they sting, keep heat off your face, and use a lubricating drop as its label directs. Lasting pain or blurring needs a doctor.`,
      },
      { h: 'Why a plunge is rough on the eyes' },
      {
        p: `The plunge itself takes seconds. Everything around it takes hours. New Year’s Day falls on a Friday this time, January 1, 2027, and many plunges follow a night of staying up late, screens and warm, crowded rooms. Then comes the gathering on a beach or lakeshore where wind blows across open water, often for an hour or more while groups line up. Cold wind makes the eyes water and then dry out. Afterward, the rush to warm up usually means a heater pointed straight at your face.`,
      },
      { h: 'The night before' },
      {
        p: `Short sleep and long screen time leave the tear film in worse shape before you even reach the shore. If you’re plunging in the morning, a quieter New Year’s Eve helps: put the phone down earlier, keep the bedroom cool with no fan on your face, and get what sleep you can. [New Year’s Eve and dry eyes](/guides/new-years-eve-and-dry-eyes) has more on the party side of the night.`,
      },
      { h: 'Waiting on the shore' },
      {
        list: [
          `Wear wraparound sunglasses while you wait; winter sun sits low and reflects off the water.`,
          `Keep a hat on until the last minute so the wind isn’t hitting your face full-on.`,
          `Stand with your back to the wind when you can, or behind a group or a vehicle.`,
          `Stay off your phone in the cold; staring at a screen cuts your blinking further.`,
        ],
      },
      { h: 'In the water: eyes closed' },
      {
        p: `Cold water on the face makes most people gasp, blink and squeeze their eyes shut, which is the right instinct. If you go all the way under, keep your eyes closed until you surface. Lake and ocean water carry sand, grit and whatever else is in them, and it isn’t sterile. Splashing friends is part of the fun, but not with sand mixed in.`,
      },
      {
        p: `If you wear contact lenses, the drop label doesn’t give directions for lenses, and whether to wear them in open water is a question for your eye doctor. Many people simply leave them out for the day and wear glasses to the event, then put the glasses on afterward.`,
      },
      { h: 'Right after: rinse, dry, warm up gently' },
      {
        list: [
          `If your eyes sting from lake or sea water, rinse them with clean bottled water or clean tap water.`,
          `Pat your face dry with a clean towel instead of rubbing your eyes.`,
          `If sand or grit got in and blinking and rinsing don’t clear it, stop and get it checked at urgent care or by an eye doctor.`,
          `Change into dry clothes and get your hat back on before you stand in the wind again.`,
        ],
      },
      { h: 'Warming up without drying out' },
      {
        p: `A warming tent, a bonfire, a portable heater or the car heater all feel wonderful after the plunge, and all of them dry the eyes quickly. Hold your hands to the heat, not your face. In the car, send hot air to your feet and the windshield and keep the dashboard vents pointed down. If there’s a fire, sit upwind of the smoke; smoke that gets in your eyes and leaves them painful is for a doctor. The [winter bonfire guide](/guides/dry-eyes-at-a-winter-bonfire) covers fire safety for your eyes.`,
      },
      { h: 'What the label says, and where to keep the bottle' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses line: {uses}. Directions: {directions}. The label also says: {tip}, so use it with clean, dry hands, after you’ve toweled off and warmed up a little, not with wet, sandy fingers on the beach.`,
      },
      {
        p: `The storage line is {storage}. A car on a January morning, or a bag left on cold sand, can drop below that range. Keep the bottle in an inside pocket of the coat you put on afterward, or leave it at home and use it when you get back. Read the caution before using it: {warnings}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'A plunge-day bag' },
      {
        list: [
          `Sunglasses and a warm hat.`,
          `A towel just for your face and hands.`,
          `A bottle of clean water for rinsing your eyes or face.`,
          `Dry clothes, socks and gloves.`,
          `Glasses instead of contacts if you usually wear lenses.`,
        ],
      },
      { h: 'When to see a doctor' },
      {
        p: `Stinging that fades within an hour or so after a rinse is common. Pain that stays, blurred vision, light that hurts, or grit you can’t clear is not something to handle at home with eye drops. The label’s own limit is: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists what not to wait on. For more cold-weather ideas, browse our [holiday and winter guides](/guides/topic/seasonal).`,
      },
    ],
    faq: [
      {
        q: 'Should I keep my eyes closed during a polar plunge?',
        a: `Yes, if you go under. Lake and ocean water can carry sand and grit, and cold water on the face makes most people squeeze their eyes shut anyway. Open them once you’ve surfaced and wiped your face.`,
      },
      {
        q: 'Why do my eyes sting after a cold plunge?',
        a: `Open water carries salt, sand or other particles, and cold wind afterward dries the eyes. A rinse with clean water often helps; pain, blurring or grit that won’t clear should be checked by a doctor.`,
      },
      {
        q: 'Can I wear contacts in a polar plunge?',
        a: `The eye drop label doesn’t give directions for contact lenses, and open water is a question for your eye doctor. Many people leave lenses out for the day and wear glasses instead.`,
      },
      {
        q: 'How do I warm up after a polar plunge without drying my eyes?',
        a: `Hold your hands, not your face, to the heater or fire, and send the car’s hot air to your feet and windshield. Dry clothes and a hat do most of the work.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-personal-trainer',
    title: 'Christmas gifts for a personal trainer',
    description:
      'Useful Christmas gifts for the personal trainer who keeps you going: gear for early sessions, cold outdoor workouts and long days in a bright gym.',
    category: 'seasonal',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Good Christmas gifts for a personal trainer support the long days behind the job: early-morning sessions, cold outdoor workouts, hours on their feet under bright gym lights, and evenings spent planning programs on a screen. Think warm layers, a sturdy bag, a quality insulated mug, wraparound sunglasses, a kind note about your progress, or a referral. If they’ve mentioned dry eyes, a bottle of lubricating eye drops can be a small, practical add-on.`,
      },
      { h: 'What a trainer’s day actually looks like' },
      {
        p: `Many trainers start before the sun is up, fitting in clients before the workday, then come back for an evening rush. In between, they’re writing programs, answering messages and tracking clients’ numbers in an app or spreadsheet. Gyms run fans and air conditioning to keep members cool, and outdoor boot camps in December mean standing in the cold while everyone else moves. The gifts that get used are the ones that make those hours easier.`,
      },
      { h: 'Gifts for early mornings and long days' },
      {
        list: [
          `An insulated travel mug or bottle that keeps coffee hot through the first three sessions.`,
          `A roomy gym bag with separate pockets for shoes, clothes and a laptop or tablet.`,
          `Comfortable, supportive socks; a trainer can walk miles across the gym floor in a day.`,
          `A gift card to the coffee shop or lunch spot nearest their gym.`,
          `A good foam roller or a massage tool for their own recovery.`,
        ],
      },
      { h: 'For trainers who work outside in winter' },
      {
        p: `Park workouts, running groups and outdoor classes don’t stop for the season, but the coach is the one standing still. Cold wind makes eyes water and then dry out, and low winter sun reflects off frost, snow and wet pavement.`,
      },
      {
        list: [
          `A warm, packable jacket or vest that’s easy to move in.`,
          `Touchscreen gloves so they can run a timer without exposing their fingers.`,
          `Wraparound sunglasses, which cut glare and some of the wind.`,
          `A knit cap or ear warmer in a color that shows up in the dark.`,
          `Hand warmers to keep in a coat pocket.`,
        ],
      },
      { h: 'For the screen side of the job' },
      {
        p: `Program writing, video form checks and client messaging all happen on phones and laptops, often late in the evening. A laptop stand that lifts the screen to a comfortable height, a soft desk lamp for working at home, or a phone stand for filming clients’ form are all useful. A small room humidifier for their home office or bedroom is another idea if they’ve complained of dry winter air.`,
      },
      { h: 'Gifts with no price tag' },
      {
        p: `Trainers build their business on results and word of mouth. A handwritten card that names something specific, such as a lift you finally managed or the knee that no longer hurts on the stairs, means a lot. So does a genuine online review or referring a friend who has been talking about getting started. These can stand alone or go alongside a small gift.`,
      },
      { h: 'Eye drops as a small add-on' },
      {
        p: `If your trainer has mentioned gritty, dry eyes from gym fans or outdoor sessions, a bottle of lubricating eye drops can be a thoughtful extra, never the whole gift. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label lists its Uses as: {uses}. Each bottle is {size}, small enough for a gym bag pocket.`,
      },
      {
        p: `Before you give it, read the caution on the panel yourself: {warnings}. If they have an egg or bird allergy, choose a different gift. If they wear contact lenses, the label doesn’t give directions for using the drop with them, so they’d need to ask their eye doctor. Our [Drug Facts page](/drug-facts) has the full label, and [why eyes dry out at the gym](/guides/dry-eyes-at-the-gym) explains what the setting does.`,
      },
      { h: 'Sending it to them' },
      {
        p: `Quell ships from Brentwood, Tennessee, to US addresses for buyers 18 and older. You can use their address or the gym’s, if the gym accepts packages for staff. Shipping is {shipping}, or free with {freeBottles} or more bottles, and the shipping email goes to you. Delivery dates aren’t promised, so order well before Christmas Day, Friday, December 25. [Will the gift recipient see the price?](/guides/will-the-gift-recipient-see-the-price) covers what arrives with the package. Unopened bottles can be refunded within {returnDays} days of delivery, no need to send them back.`,
      },
      { h: 'More gift ideas' },
      {
        p: `If your gift is for a team coach rather than a trainer, our [Christmas gifts for a coach](/guides/christmas-gifts-for-a-coach) guide fits better. Runners get their own list in [Christmas gifts for a runner](/guides/christmas-gifts-for-a-runner), and the rest are under [gifts and the holidays](/guides/topic/seasonal).`,
      },
    ],
    faq: [
      {
        q: 'What is a good Christmas gift for a personal trainer?',
        a: `Something that helps with their long days: an insulated mug, a sturdy gym bag, warm gear for outdoor sessions, a laptop stand for program writing, or a handwritten card about your progress.`,
      },
      {
        q: 'Should I give my personal trainer a Christmas gift?',
        a: `There’s no fixed rule. A sincere card, a small practical gift, an online review or a referral are all common ways to say thank you, and the card is often what they remember.`,
      },
      {
        q: 'Can I give eye drops to my personal trainer?',
        a: `As a small add-on, if they’ve mentioned dry eyes. Check the label’s egg and bird allergy caution first, and remember the label doesn’t cover use with contact lenses.`,
      },
      {
        q: 'Can I ship a gift to my trainer’s gym?',
        a: `Quell ships to any US address, including a business, but ask first whether the gym accepts packages for staff. The shipping email goes to you, not to them.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-walking-in-a-christmas-parade',
    title: 'Dry eyes walking in a Christmas parade',
    description:
      'Marching, riding a float or walking with a group? Cold wind, waiting in staging, bright lights and glitter all dry the eyes. How to plan for the route.',
    category: 'seasonal',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Walking or riding in a Christmas parade is harder on the eyes than watching one. You wait in a cold staging area, face into the wind for the whole route, look into bright float lights and spectators’ camera flashes, and often deal with glitter, fake snow or generator fumes up close. Dress for the wait, keep glitter off your face, look away from the brightest lights, and use a lubricating drop beforehand as its label directs.`,
      },
      { h: 'Why parade participants feel it more' },
      {
        p: `Spectators can step into a shop or go home. Participants line up early, sometimes an hour or more before the start, then move at a slow walk for the length of the route, smiling and waving with no break. Most holiday parades run in the late afternoon or evening, when temperatures drop and the wind picks up. A float or a marching band keeps going whatever the weather does. All of that adds up to a long stretch of cold, moving air on the eyes with few chances to blink, rest or warm up.`,
      },
      { h: 'The staging area' },
      {
        list: [
          `Arrive dressed for the wait, not just the walk: hat, scarf, gloves and a layer you can shed.`,
          `Stand with your back to the wind while you wait, or behind a float or vehicle.`,
          `Don’t stand where generator or tow-vehicle exhaust drifts across the group.`,
          `Keep your phone use short; screen time in the cold cuts your blinking further.`,
        ],
      },
      { h: 'On the float' },
      {
        p: `Float riders sit or stand higher than everyone else and catch more wind. Floats often carry generators for their lights and music, and that exhaust can collect around the deck when the parade stops and starts. Tinsel, garland and fake snow shed fibers and flakes as the float moves. Ask the float captain to put the generator at the back, sit or stand upwind of it, and brush loose decorations off seats before you sit. If you’re throwing candy, toss it underhand so it doesn’t come back at your face on the wind.`,
      },
      { h: 'Marching bands and walking groups' },
      {
        p: `Marchers face straight into the wind and can’t turn away, and musicians reading flip folders or lyre-mounted music concentrate so hard they hardly blink. Brass players have cold metal near their faces. Between songs, close your eyes for a beat or two while you walk, and look up at the lights down the street rather than at the music. Walking groups and dancers can take a moment at each pause to blink fully and look into the distance.`,
      },
      { h: 'Lights, flashes and the crowd' },
      {
        p: `Parade lighting is meant to be seen from a distance, so it’s bright up close. Spot lights on the reviewing stand, the float in front of you and hundreds of phone flashes from the crowd all make you squint. Squinting means shorter, incomplete blinks. Look at the crowd’s faces rather than the brightest lights, and keep your gaze moving instead of fixed on one point. [Dry eyes at a holiday light show](/guides/dry-eyes-at-a-holiday-light-show) has more on bright displays at night.`,
      },
      { h: 'Glitter, fake snow and costume makeup' },
      {
        p: `Glitter on costumes and faces, fake snow sprayed on floats, and heavy stage makeup all sit very close to the eyes. Keep glitter on clothing and below the cheekbones, and let face paint or makeup set fully before you head out. Spray any fake snow well before the parade, away from people, and let it dry. If glitter, a flake of fake snow or a piece of tinsel gets in your eye and won’t blink out, don’t rub it; rinse with clean water, and if it still feels stuck or hurts, see urgent care or an eye doctor. A lubricating drop isn’t for removing something from the eye.`,
      },
      { h: 'Using a drop before you step off' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses line reads: {uses}. Directions: {directions}. The panel also says: {tip}, which is easier with clean, bare hands in a warm car or building before the parade than with gloves on along the route.`,
      },
      {
        p: `Storage is listed as {storage}. A bag left on a float or in a cold car for the evening can fall below that range, so keep the bottle in an inside pocket. Read the caution before your first drop: {warnings}. If you wear contact lenses, the label doesn’t give directions for them; ask your eye doctor. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'After the parade' },
      {
        p: `Once you’re done, the instinct is to blast the car heater or crowd around a space heater. Aim the warm air at your hands and feet instead of your face. Take off eye makeup gently with a clean cloth, and wash glitter off your face and hands before you rub your eyes. If you’re leading a group or a float, let everyone know where the warm-up spot is, so nobody spends the next half hour standing in the wind. Thanksgiving parades bring the same issues from the curb; see [dry eyes at a Thanksgiving parade](/guides/dry-eyes-at-a-thanksgiving-parade).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dry, watery eyes after a cold parade usually settle with warmth and rest. Pain, blurry vision that doesn’t clear, sensitivity to light or something that still feels stuck in the eye needs a doctor. The label puts its limit plainly: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the main signs. For more on the season, browse the [holiday guides](/guides/topic/seasonal).`,
      },
    ],
    faq: [
      {
        q: 'How do I keep my eyes from watering in a Christmas parade?',
        a: `Wear a hat, keep your back to the wind while you wait, and look into the distance between songs or stops. Cold, moving air makes the eyes water first and then dry out.`,
      },
      {
        q: 'Can generator fumes on a parade float bother your eyes?',
        a: `Exhaust collecting on a slow-moving float can irritate the eyes. Ask for the generator at the back of the float and sit or stand upwind of it.`,
      },
      {
        q: 'What should I do if fake snow or tinsel gets in my eye during a parade?',
        a: `Don’t rub it. Rinse with clean water, and if it still feels stuck, scratchy or painful, see urgent care or an eye doctor. A lubricating drop isn’t meant for removing something from the eye.`,
      },
      {
        q: 'What should I bring to walk in a Christmas parade?',
        a: `A warm hat, scarf and gloves, a layer you can shed, clean wipes for glitter and makeup, and anything you use for your eyes kept in an inside pocket rather than on the float.`,
      },
    ],
  },
  {
    slug: 'are-eye-drops-considered-medication',
    title: 'Are eye drops considered medication?',
    description:
      'Over-the-counter eye drops are drugs, with a Drug Facts panel to prove it. When to list them as a medication, and how to write them down.',
    category: 'choosing',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Yes. Over-the-counter eye drops like Quell are drugs, even though you don’t need a prescription to buy them. You can tell by the Drug Facts panel on the box, which lists active ingredients, uses, warnings and directions. So when a doctor, pharmacist, hospital or form asks what medications you take, include your eye drops, with the product name and how often you use them.`,
      },
      { h: 'How to tell an eye drop is a medication' },
      {
        p: `Look for the Drug Facts panel. Over-the-counter drugs carry this standard box of information, and it always starts with the active ingredients: the ingredients that do what the product is for, with their strength and purpose. Quell’s are {actives}. The panel then lists Uses, Warnings, Directions, Other information and Inactive ingredients. [Why OTC drugs all have a Drug Facts label](/guides/history-of-the-drug-facts-label) explains where the format comes from, and [what over-the-counter means](/guides/what-over-the-counter-means) covers how these products are sold.`,
      },
      { h: 'Why it matters that a drop is a drug' },
      {
        p: `Thinking of eye drops as “just drops” leads people to leave them off lists where they belong. A drop has active ingredients, a use it is made for, and warnings that apply to some people. Quell’s caution reads: {warnings}. Those are exactly the kinds of details a doctor or pharmacist wants to know about, which is why it counts.`,
      },
      { h: 'When to list your eye drops as a medication' },
      {
        list: [
          `At an eye exam, so the doctor knows what you’ve been using and how often.`,
          `On intake forms at a new doctor’s office, urgent care or emergency room.`,
          `Before a surgery or procedure, when you’re asked for a full medication list.`,
          `When you’re admitted to a hospital; staff will want to know what you normally use.`,
          `When a pharmacist asks what else you take, especially if you’re starting a new prescription.`,
          `On a medication list you keep for a family member as their caregiver.`,
        ],
      },
      {
        p: `[Should you use eye drops before an eye exam?](/guides/using-eye-drops-before-an-eye-exam) and [dry eyes during a hospital stay](/guides/dry-eyes-during-a-hospital-stay) cover two of those situations in more detail.`,
      },
      { h: 'How to write it down' },
      {
        p: `A good entry has enough detail that someone else could find the same product. For Quell, that might read: Quell lubricating eye drops, over the counter, active ingredients {actives}, used as directed. Add how often you actually use it and roughly when you started. The label’s directions say: {directions}. If you use it less often than that, write what you really do.`,
      },
      {
        p: `A clear photo of the Drug Facts panel on your phone is a handy backup. It’s also on our [Drug Facts page](/drug-facts) if you lose the box.`,
      },
      { h: 'Using eye drops alongside other medicines' },
      {
        p: `Quell’s label doesn’t give directions for using it with other eye drops, prescribed or not. If you use more than one eye product, or take any other medicine and have questions about it, ask your eye doctor or pharmacist how to fit them together. That conversation goes more smoothly when your eye drops are already on your list. [Questions to ask a pharmacist about eye drops](/guides/questions-to-ask-your-pharmacist) has a starting list.`,
      },
      { h: 'Handle the bottle like other medicine at home' },
      {
        list: [
          `Store it as the label says: {storage}.`,
          `Keep it where children can’t reach it. The label says: {swallowed}.`,
          `Don’t share a bottle, and follow the panel’s tip: {tip}.`,
          `Check it before each use; the label says not to use it: {doNotUse}.`,
        ],
      },
      { h: 'Medication rules for travel and money' },
      {
        p: `Because eye drops are medicine, some medicine-related rules apply to them. Air travelers often ask how drops fit with airport liquid screening; [are eye drops TSA compliant?](/guides/are-eye-drops-tsa-compliant) covers that. Health savings and flexible spending accounts can be used for over-the-counter medicines under IRS rules, which is explained in [why OTC eye drops count for HSA and FSA](/guides/why-otc-eye-drops-count-for-hsa-and-fsa). Plan rules vary, so check with your administrator.`,
      },
      { h: 'Using this when choosing a drop' },
      {
        p: `Seeing eye drops as medication also changes how you choose them. Read the panel the way you would for any medicine: start with the active ingredients and the Uses line, then the Warnings, then the Directions. Quell’s Uses line reads: {uses}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. [How to read an eye drop Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label) walks through the rest.`,
      },
      { h: 'When the medicine isn’t the answer' },
      {
        p: `Over-the-counter drops are for everyday dryness. If your eyes hurt, your vision changes, or dryness keeps coming back, an eye doctor can find the cause and decide what to do. The label says: {stopUse} More comparisons are in [choosing eye drops](/guides/topic/choosing).`,
      },
    ],
    faq: [
      {
        q: 'Are eye drops considered medication?',
        a: `Over-the-counter eye drops are drugs: they carry a Drug Facts panel with active ingredients, uses, warnings and directions. You don’t need a prescription, but they still belong on your medication list.`,
      },
      {
        q: 'Should I list eye drops as a medication at the doctor’s office?',
        a: `Yes. Include the product name, that it’s over the counter, and how often you use it. A photo of the Drug Facts panel helps if you can’t remember the details.`,
      },
      {
        q: 'Do I need to tell the hospital about my over-the-counter eye drops?',
        a: `Yes. When you’re admitted or before a procedure, staff ask for a full medication list, and that includes eye drops you buy without a prescription.`,
      },
      {
        q: 'How do I know if an eye product is an over-the-counter drug?',
        a: `Look for a Drug Facts panel on the box. It starts with the active ingredients, then lists uses, warnings, directions and other information.`,
      },
    ],
  },
  {
    slug: 'can-eye-drops-make-your-eyes-water',
    title: 'Can eye drops make your eyes water?',
    description:
      'Watering right after a drop is usually overflow plus a reflex blink. Why it happens, how to cut it down, and when watering is a reason to stop.',
    category: 'choosing',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Yes, for a moment. A single drop holds more liquid than the surface of the eye can carry, so some spills over the lid, and touching the eye usually sets off a reflex blink and a few tears. That brief watering is common and fades in a minute or so. Watering that continues, or comes with stinging, pain or blurred vision, is a reason to stop and talk to a doctor.`,
      },
      { h: 'Why your eyes water right after a drop' },
      {
        p: `Three things usually happen at once. First, the drop itself is liquid on your cheek: the eye can only hold a small amount at a time, and the rest runs out at the corner. Second, a drop landing on the eye is a surprise, and the eye responds by blinking and making a little reflex tearing. Third, when you blink hard right after, you squeeze out some of what was just added. Put together, it can look like your eyes are watering a lot when most of it is the drop leaving.`,
      },
      { h: 'Is it the drop or your tears?' },
      {
        p: `A quick test: wipe the outer corner with a clean tissue, then wait a minute with your eyes gently closed. If the wetness stops, it was overflow and reflex tearing. If tears keep coming for many minutes, or come back every time you use the drop, note it and see the section on when to stop below. [Why do eye drops run down my face?](/guides/why-do-eye-drops-run-down-my-face) covers overflow in more detail.`,
      },
      { h: 'Ways to cut down the watering' },
      {
        list: [
          `Use one drop at a time. Quell’s directions are: {directions}. Extra drops just spill.`,
          `Tilt your head back, pull the lower lid down gently, and aim for the little pocket it makes.`,
          `Close your eyes gently afterward instead of blinking hard or squeezing.`,
          `Dab the cheek with a clean tissue; don’t rub the eye.`,
          `Use the drop at room temperature, within the label’s storage range: {storage}.`,
        ],
      },
      { h: 'Watery eyes that are actually dry' },
      {
        p: `Some people reach for drops because their eyes water constantly, especially outside in the wind. Watery eyes can be a sign of dryness: when the surface dries out, the eye can respond with a rush of reflex tears that don’t do the same job as the steady tear film. That’s explained in [why are my eyes watery if they’re dry](/guides/why-are-my-eyes-watery-if-they-are-dry). In that case, a lubricating drop isn’t making things wetter; it’s being added to eyes that were already watering for another reason.`,
      },
      { h: 'Stinging, then watering' },
      {
        p: `If a drop stings and your eyes water hard because of it, that’s a different situation from simple overflow. A mild, short sting can happen with eye drops, and our guide on [why eye drops sting](/guides/why-do-eye-drops-sting) explains common reasons. A sting that is strong, lasts, or gets worse with each use is a reason to stop using that drop and ask a doctor or pharmacist.`,
      },
      { h: 'What to compare when choosing a drop' },
      {
        p: `If watering after a drop bothers you, compare a few things on the label rather than switching at random. Check the directions for how many drops to use. Check the Other information section for how the product looks and how to store it. Check the caution in the Warnings section. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its panel lists {milky} under other information, so a milky trail on the cheek after use is the drop itself, not a problem. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When watering means stop' },
      {
        p: `Stop using a drop and see a doctor if watering comes with eye pain, changes in vision, or irritation that doesn’t settle. The label’s own words: {stopUse} Also stop and get help if the eye watered because something got into it, if you see swelling, or if one eye is much worse than the other. The caution on Quell’s panel matters here too: {warnings}. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists more.`,
      },
      { h: 'Contact lenses and other drops' },
      {
        p: `The label doesn’t give directions for using the drop with contact lenses or alongside other eye drops. If you wear lenses or use a prescribed drop, ask your eye doctor or pharmacist how to fit a lubricating drop around them. More on comparing products is in [choosing eye drops](/guides/topic/choosing).`,
      },
    ],
    faq: [
      {
        q: 'Do eye drops make your eyes water?',
        a: `Often for a moment. The eye can’t hold a whole drop, so some spills out, and the touch of the drop triggers a reflex blink and a few tears. It usually fades within a minute or so.`,
      },
      {
        q: 'Why do my eyes water after putting in eye drops?',
        a: `Mostly overflow and reflex tearing. Using one drop at a time, closing your eyes gently afterward and not squeezing them shut cut it down.`,
      },
      {
        q: 'Is it normal for eyes to water a lot after eye drops?',
        a: `Brief watering is common. Watering that lasts, or comes with stinging, pain or blurred vision, is a reason to stop using the drop and ask a doctor or pharmacist.`,
      },
      {
        q: 'Is it better to close your eyes or blink after eye drops?',
        a: `Close your eyes gently instead of blinking hard. Hard blinking squeezes out the liquid you just added and makes more of it run down your cheek.`,
      },
    ],
  },
  {
    slug: 'are-eye-drops-supposed-to-be-thick',
    title: 'Are eye drops supposed to be thick?',
    description:
      'Some eye drops are thin and watery, others are thicker or milky. How to tell what yours is supposed to look like, and when a change means don’t use it.',
    category: 'choosing',
    addedOn: '2026-11-25',
    body: [
      {
        p: `It depends on the drop. Some eye drops are thin and watery, some are a little thicker, and gels and ointments are thicker still. What matters is whether your drop looks the way its own label says it should. Quell’s panel describes it as a milky brown liquid. If a drop looks different from its label, or from the last bottle, don’t use it; ask the seller or a pharmacist.`,
      },
      { h: 'Why eye drops aren’t all the same thickness' },
      {
        p: `Lubricating products are made in a range of consistencies. A thin, clear drop spreads quickly and feels like water. A slightly thicker drop clings to the eye a little longer and can feel heavier when you blink. Gels and ointments sit at the thick end of the range and are often meant for times when blurry vision doesn’t matter, such as before sleep. Our comparisons of [eye drops vs. eye gel](/guides/eye-drops-vs-eye-gel) and [eye drops vs. eye ointment](/guides/eye-drops-vs-eye-ointment) explain those differences.`,
      },
      { h: 'Where to find what your drop should look like' },
      {
        p: `Many Drug Facts panels describe the product’s appearance under Other information, and the box or bottle may say whether it’s a drop, a gel or an ointment. That is the reference to check against. For Quell, the panel says: {milky}. The site adds a reassurance beside the buy button: {appearance}`,
      },
      {
        p: `So Quell isn’t clear, and it isn’t a gel. It comes out as a drop that looks milky, because of the oils in it. [Why is Quell milky brown?](/guides/why-is-quell-milky-brown) explains the color.`,
      },
      { h: 'Thick vs. thin: what you’ll notice' },
      {
        list: [
          `Thicker drops can blur your vision briefly after you put them in. Blinking a few times usually clears it.`,
          `Thinner drops spread fast and may feel lighter, but you may notice them less afterward.`,
          `Drops with oil in them can leave a slight film on the lashes or lid that wipes off.`,
          `None of these is better for everyone; read each product’s Uses line to see what it’s for.`,
        ],
      },
      {
        p: `If you plan to drive or read right after, give your eyes a minute. [Is it normal for vision to blur after eye drops?](/guides/is-it-normal-for-vision-to-blur-after-eye-drops) covers that in detail.`,
      },
      { h: 'Signs a drop isn’t right' },
      {
        p: `A drop that looks different from how its label describes it is a reason to stop. For Quell, the Do not use section is direct: {doNotUse}. Other things that should make you pause:`,
      },
      {
        list: [
          `The liquid looks noticeably different from your last bottle of the same product.`,
          `You see something floating in it that wasn’t there before.`,
          `The tamper seal was broken or missing when the box arrived.`,
          `The bottle has been stored outside the label’s range: {storage}.`,
          `It’s past the expiration date printed on the package.`,
        ],
      },
      {
        p: `If any of these apply to a bottle of Quell, don’t use it. Call {phone}, {hours}, with your order number. If an order arrives damaged, incorrect or with a broken seal, contact us within {returnDays} days of delivery and it will be replaced.`,
      },
      { h: 'How to compare consistency when choosing' },
      {
        p: `If a drop you’ve tried feels too heavy or too light, use the label to compare the next one. Check the Purpose column next to each active ingredient: lubricant and emollient are words you’ll see on many dry eye products, and they describe what the ingredient is there to do. Check Other information for appearance. And check the Uses line to confirm the product is made for what you need. Quell’s active ingredients are {actives}, and its full panel is on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to ask a doctor' },
      {
        p: `If your vision stays blurry long after a drop, if a drop hurts, or if you’ve changed products and still feel dry, an eye doctor can look at what is going on and suggest what fits your eyes. Bring the bottle, or a clear photo of its label, so the doctor can see exactly what you have been using and how it is described. The label’s limit: {stopUse} If you wear contact lenses or use other eye drops, the label doesn’t cover that; ask your eye doctor or pharmacist. More comparisons are in [choosing eye drops](/guides/topic/choosing).`,
      },
    ],
    faq: [
      {
        q: 'Are eye drops supposed to be thick?',
        a: `Some are thin and watery and some are a little thicker; gels and ointments are thicker still. Check your product’s own label for how it should look, and don’t use it if it looks different.`,
      },
      {
        q: 'Why are some eye drops thicker than others?',
        a: `Lubricating products are made in different consistencies. Thicker ones cling to the eye longer and can blur vision briefly; thinner ones spread fast and feel lighter.`,
      },
      {
        q: 'Are eye drops supposed to be clear?',
        a: `Not always. Many are clear, but some, including Quell, are milky because of oils in the formula. Quell’s panel says: {milky}.`,
      },
      {
        q: 'What should I do if my eye drops look different than usual?',
        a: `Don’t use them. Compare with the label’s description and your last bottle, and contact the seller or ask a pharmacist. Quell’s label says not to use it if the product changes color.`,
      },
    ],
  },
  {
    slug: 'does-insurance-cover-eye-drops',
    title: 'Does insurance cover eye drops?',
    description:
      'Quell’s checkout takes a card and doesn’t bill insurance. How to ask your plan about reimbursement, and where HSA and FSA money fits in.',
    category: 'ordering',
    addedOn: '2026-11-25',
    body: [
      {
        p: `It depends on your plan, and you’ll need to ask it. Quell is an over-the-counter eye drop, and quelldrop.com doesn’t bill insurance: you pay by card at checkout. Some plans reimburse over-the-counter items afterward and many don’t, so call the number on your insurance card before you count on it. Health savings and flexible spending accounts are a separate, more common way to use pre-tax money for eye drops.`,
      },
      { h: 'How paying for Quell works' },
      {
        p: `Checkout on this site has no insurance step. You fill in your shipping details, then pay on Authorize.net’s secure payment page with a card. The amount is the bottles plus shipping, in US dollars, and the confirmation email lists the subtotal, shipping and total. There is no copay, no claim filed on your behalf and no pharmacy benefit involved. [How payment works](/guides/how-payment-works) has the details.`,
      },
      { h: 'Does health insurance pay for over-the-counter eye drops?' },
      {
        p: `There isn’t one answer, because each plan sets its own rules. Some plans have an allowance or reimbursement program for over-the-counter items; others cover only drugs a prescriber orders and a pharmacy fills. The way to find out is to ask your plan directly. Questions worth asking:`,
      },
      {
        list: [
          `Does my plan reimburse any over-the-counter medicines, and are eye drops included?`,
          `Do I need a prescription or a note from a doctor for an over-the-counter item to count?`,
          `Do I have to buy from a particular store or pharmacy, or can I buy online?`,
          `What do you need from me: an itemized receipt, a claim form, the product’s name?`,
          `Is there a yearly limit on what you’ll reimburse?`,
        ],
      },
      {
        p: `Write down who you spoke with and what they said. If the answer is yes, keep the confirmation email from your order as your receipt. [Getting a receipt for your Quell order](/guides/getting-a-receipt-for-your-order) explains what it shows.`,
      },
      { h: 'Vision insurance' },
      {
        p: `Vision plans are separate from health plans and set their own lists of what they pay for. If you have one, its member services line can tell you whether over-the-counter eye drops are on that list. Even when the drop isn’t covered, a vision plan may cover the exam where an eye doctor looks into why your eyes feel dry, which is often the more useful benefit.`,
      },
      { h: 'Medicare' },
      {
        p: `Medicare’s parts and plans handle over-the-counter items differently, and some Medicare Advantage plans include allowances that others don’t. We cover that in [Does Medicare cover over-the-counter eye drops?](/guides/does-medicare-cover-over-the-counter-eye-drops), and your plan’s member services can confirm what applies to you.`,
      },
      { h: 'HSA and FSA money instead' },
      {
        p: `For many people, the practical route is a health savings account (HSA) or a health flexible spending account (FSA). These accounts are governed by IRS rules, and your plan administrator applies them. Our guides on [using HSA or FSA funds for eye drops](/guides/hsa-fsa-and-eye-drops) and [why OTC eye drops count](/guides/why-otc-eye-drops-count-for-hsa-and-fsa) explain what the IRS publications say and what to keep for records.`,
      },
      {
        p: `One rule ties the two together. IRS Publication 969 says HSA distributions for medical expenses are tax-free only to the extent the amounts are not compensated for by insurance or otherwise. In plain terms, don’t get reimbursed for the same bottle twice: if insurance pays you back, that purchase isn’t one to also take from your HSA. Plan rules vary, so check with your administrator.`,
      },
      { h: 'Prescription eye drops are a different case' },
      {
        p: `If an eye doctor prescribes a drop, it’s filled at a pharmacy, and your insurance’s prescription benefit decides what you pay there. Quell isn’t a prescription product, so that process doesn’t apply to it. If your doctor has prescribed eye drops, the label on Quell doesn’t give directions for using it alongside them; ask your doctor or pharmacist before combining anything.`,
      },
      { h: 'Keeping the cost down without insurance' },
      {
        list: [
          `Order {freeBottles} or more bottles at once; those orders ship free instead of paying {shipping}.`,
          `Use the directions as written, {directions}, so a bottle goes as far as it’s meant to.`,
          `There are no promo codes and no subscription, and the cart shows the delivered total before you pay.`,
          `Unopened bottles can be refunded within {returnDays} days of delivery without sending them back if you over-order.`,
        ],
      },
      {
        p: `[How to pay less for eye drops](/guides/how-to-pay-less-for-eye-drops) goes further. When you’re ready, you can [order here](/#buy).`,
      },
      { h: 'Questions about your order' },
      {
        p: `We can’t tell you what your insurance covers, but we can help with anything about the order itself, such as a receipt or the amount charged. Call {phone}, {hours}, or see [contact details](/about#contact).`,
      },
    ],
    faq: [
      {
        q: 'Does insurance cover over-the-counter eye drops?',
        a: `It depends entirely on the plan. Some reimburse certain over-the-counter items and many don’t, so call the number on your insurance card and ask whether eye drops qualify and what proof they need.`,
      },
      {
        q: 'Can I use my insurance card to buy Quell online?',
        a: `No. Quell’s checkout takes payment by card on Authorize.net’s secure page and doesn’t bill insurance. If your plan reimburses over-the-counter items, you would claim afterward with your receipt.`,
      },
      {
        q: 'Can I use my HSA if insurance already paid me back for eye drops?',
        a: `IRS Publication 969 says HSA distributions are tax-free only to the extent the expense isn’t compensated for by insurance or otherwise, so don’t claim the same purchase twice. Check with your plan administrator.`,
      },
      {
        q: 'Does vision insurance pay for eye drops?',
        a: `Vision plans set their own lists, so ask yours. Even if over-the-counter drops aren’t covered, the plan may cover an eye exam where a doctor can look into why your eyes are dry.`,
      },
    ],
  },
  {
    slug: 'why-checkout-asks-for-your-card-security-code',
    title: 'Why checkout asks for your card’s security code',
    description:
      'Quell’s payment page requires the security code on your card. Where to find it, who sees it, and what to do if a payment won’t go through.',
    category: 'ordering',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Quell’s payment page, run by Authorize.net, requires your card’s security code (often called the CVV) along with the card number, expiration date and billing address. It’s a check that the person paying has the physical card. You enter it only on that secure page; it never passes through quelldrop.com, and the shop keeps only a payment reference and the result of the charge.`,
      },
      { h: 'What the security code is' },
      {
        p: `It’s the short number printed on your card that isn’t part of the long card number. Most cards print three digits on the back, near the signature strip, and some print four digits on the front, above the card number. Banks and card networks use different names for it, such as CVV, CVC or card code, but it’s the same idea: a number that isn’t stored on the magnetic stripe or written on receipts, so it’s harder for someone to use a copied card number.`,
      },
      { h: 'Why Quell’s checkout requires it' },
      {
        p: `When you click to pay, the site hands you to Authorize.net’s hosted payment page. That page is set up to require the card code and a billing address on every order. Asking for both helps your bank decide whether the payment is really you. Your shipping address was already entered on this site before you got there, so the payment page asks only for the billing details that belong to the card. [Why checkout sends you to a secure payment page](/guides/why-checkout-uses-a-secure-payment-page) explains the handoff.`,
      },
      { h: 'Entering it, step by step' },
      {
        list: [
          `Fill in your shipping details on the cart page and continue to payment.`,
          `On the payment page, check the order summary and the merchant name at the top.`,
          `Enter the card number and expiration date exactly as printed.`,
          `Type the security code from the back (or front) of the card.`,
          `Enter the billing address your bank has on file for that card.`,
          `Press Pay once and wait for the confirmation page rather than clicking again.`,
        ],
      },
      { h: 'Who sees your security code' },
      {
        p: `The shop doesn’t. Our privacy policy states that card details are entered directly with the payment provider and never pass through or rest on our servers, and that we keep only a payment reference and the outcome of the charge. Card details also aren’t among the things your browser remembers for guest checkout. That means if you order again, you’ll type the code again, which is how it should be. The [privacy policy](/privacy) has the full wording.`,
      },
      { h: 'If the payment doesn’t go through' },
      {
        p: `A mistyped code is one of the most common reasons a card is turned down. Before trying again, check:`,
      },
      {
        list: [
          `That you used the code from the same card whose number you entered.`,
          `That the number of digits matches what’s printed: three on the back or four on the front.`,
          `That the billing address matches what your bank has, including the ZIP code.`,
          `That the card hasn’t expired or been replaced with a new one that has a different code.`,
        ],
      },
      {
        p: `If it still won’t go through, your bank can tell you why. [Why was my card declined?](/guides/why-was-my-card-declined-buying-eye-drops) goes through the usual causes, and [prepaid cards](/guides/can-you-buy-eye-drops-with-a-prepaid-card) have their own quirks. Canceling on the payment page takes you back to the cart without charging you.`,
      },
      { h: 'Never share it outside the payment page' },
      {
        p: `You should only ever type your security code into the payment page you reach from this site’s checkout button. If an email, text or caller asks for your card’s code to “confirm” or “release” an eye drop order, don’t give it. Close the message, and if you’re unsure whether it’s about a real order, look the order up yourself on the [track your order](/orders) page or call {phone}, {hours}. [Is this eye drop order email real?](/guides/is-this-eye-drop-order-email-real) shows what genuine order emails contain.`,
      },
      { h: 'New cards, HSA cards and FSA cards' },
      {
        p: `When a bank mails you a replacement card, the new one usually has a new expiration date and a new security code, even if the long number looks familiar. A payment that fails right after a card was replaced is often the old code typed from memory. Health savings and flexible spending account cards carry a security code too, and you enter it on the same payment page in the same way. [Can I use HSA or FSA funds for eye drops?](/guides/hsa-fsa-and-eye-drops) covers whether those accounts fit your purchase.`,
      },
      { h: 'Using someone else’s card' },
      {
        p: `If a family member is paying, they should enter their own card details, code and billing address themselves, and the shipping address can be yours. Don’t ask anyone to read their code to you over the phone or in a message. You must be 18 or older to order.`,
      },
      { h: 'Ready to order' },
      {
        p: `Checkout is as a guest. Shipping is {shipping}, or free with {freeBottles} or more bottles, and each bottle is {size}. There are no promo codes and no subscription. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. [Order here](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'Do you need a CVV to buy eye drops online?',
        a: `To buy Quell, yes. Its payment page, run by Authorize.net, requires the card’s security code along with the card number, expiration date and billing address on every order.`,
      },
      {
        q: 'Where is the security code on my card?',
        a: `Most cards print a three-digit code on the back near the signature strip; some print a four-digit code on the front above the card number.`,
      },
      {
        q: 'Does Quell save my card’s security code?',
        a: `No. Card details are entered directly with the payment provider and never pass through or rest on the shop’s servers. The shop keeps only a payment reference and the outcome of the charge.`,
      },
      {
        q: 'Why was my eye drop payment declined after I entered the CVV?',
        a: `A mistyped code, a code from a different or replaced card, or a billing address that doesn’t match your bank’s records are common causes. Your bank can tell you the exact reason.`,
      },
    ],
  },
  {
    slug: 'what-out-for-delivery-means-for-an-eye-drop-order',
    title: 'What ‘out for delivery’ means for an eye drop order',
    description:
      '“Out for delivery” comes from the carrier’s tracking, not from Quell’s order page. What it tells you, what it doesn’t, and what to do if nothing arrives.',
    category: 'shipping',
    addedOn: '2026-11-25',
    body: [
      {
        p: `“Out for delivery” is the carrier’s own wording on its tracking page. It generally means your package has reached the local delivery operation and is on its final leg to your address. Quell’s order page won’t show that phrase; it only shows Awaiting payment, Paid, Shipped or Canceled. No delivery time is promised, so keep an eye on the carrier’s page and bring the package inside soon after it arrives.`,
      },
      { h: 'Two places to look, two sets of words' },
      {
        p: `Your order has two kinds of status. The [track your order](/orders) page on this site shows one of four statuses: Awaiting payment, Paid, Shipped or Canceled. Once it says Shipped, the shipping email gives you a tracking number and, for most carriers, a link to the carrier’s own tracking page. That page is where you’ll see steps like “in transit” and “out for delivery.” Those words belong to the carrier, and they can vary from one carrier to another. [What your Quell order status means](/guides/what-your-order-status-means) covers the four statuses on our side.`,
      },
      { h: 'What “out for delivery” usually tells you' },
      {
        list: [
          `The package has left the long-distance part of its trip.`,
          `It’s with the team or vehicle that handles deliveries in your area.`,
          `The carrier expects to attempt delivery soon, though how soon is the carrier’s estimate, not a promise.`,
          `It does not give an exact time, and Quell can’t add one.`,
        ],
      },
      { h: 'What it doesn’t tell you' },
      {
        p: `It doesn’t say exactly when the package will reach your door, where it will be left, or whether someone needs to be home. Quell ships from Brentwood, Tennessee, and doesn’t promise a delivery date or time, so the carrier’s page is the most up-to-date view you’ll get. Some carriers offer their own notification or delivery options on their websites; those are set up with the carrier, not through our checkout.`,
      },
      { h: 'On the day it’s out for delivery' },
      {
        list: [
          `Check the carrier’s page a few times rather than waiting by the door.`,
          `If you’re away, ask a neighbor or housemate to bring the package inside when it arrives.`,
          `In hot or freezing weather, get it indoors soon; the label’s storage line is {storage}.`,
          `When you open the box, check that the tamper seal is intact and the order is what you bought.`,
        ],
      },
      {
        p: `[What to check when your Quell order arrives](/guides/what-to-check-when-your-order-arrives) walks through the unboxing.`,
      },
      { h: 'If it was out for delivery but didn’t come' },
      {
        p: `Sometimes a package shows “out for delivery” and the day ends without it. The carrier may have run out of time, been held up by weather, or had an address issue. The tracking page usually updates by the next morning with a new step or a note. Give it until then, and check whether the carrier left a notice. If it says delivered and you can’t find it, follow [Tracking says delivered, but no package?](/guides/tracking-says-delivered-but-no-parcel), and if it’s been taken, see [Eye drop package stolen?](/guides/eye-drop-package-stolen).`,
      },
      {
        p: `If tracking stops moving for several days, [Eye drop tracking not updating?](/guides/eye-drop-tracking-not-updating) has the next steps. You can also call {phone}, {hours}, with your order number, and we’ll look at what the carrier shows.`,
      },
      { h: 'Texts that claim your package is out for delivery' },
      {
        p: `Scam texts often borrow tracking language: a message says your package is out for delivery but needs a small fee, a new address or your card details before it can arrive. Real progress on a Quell order shows up on the carrier’s tracking page, which you reach from the link in your shipping email or by typing the tracking number into the carrier’s own site. Don’t tap links in unexpected texts, and never enter card details to release a package. [Fake delivery texts and your eye drop order](/guides/fake-delivery-texts-and-eye-drop-orders) shows what to look for.`,
      },
      { h: 'If no one is home' },
      {
        p: `Whether a package is left at the door, held or brought back depends on the carrier and the address. [What if no one is home when eye drops arrive?](/guides/what-if-no-one-is-home-when-eye-drops-arrive) covers the usual outcomes. If you know you’ll be away for a stretch, it may be easier to order to an address where someone will be.`,
      },
      { h: 'Damaged, wrong or opened on arrival' },
      {
        p: `If the order arrives damaged, incorrect or with a broken tamper seal, contact us within {returnDays} days and it will be replaced at no charge. Don’t use a bottle with a broken seal. Unopened bottles you simply don’t need can be refunded within {returnDays} days of delivery, and you don’t send them back.`,
      },
      { h: 'Planning the next order' },
      {
        p: `Because no delivery date is promised, reorder before you’re down to your last bottle. Orders of {freeBottles} or more bottles ship free; smaller orders pay {shipping}. You’ll get one reorder reminder email, and you can [order again here](/#buy). More on shipping is under [shipping and delivery](/guides/topic/shipping).`,
      },
    ],
    faq: [
      {
        q: 'What does out for delivery mean for my eye drop order?',
        a: `It’s the carrier’s status meaning your package is with the local delivery operation and on its final leg. It doesn’t give an exact time, and Quell doesn’t promise one.`,
      },
      {
        q: 'Why does Quell’s order page say Shipped when tracking says out for delivery?',
        a: `The order page shows only four statuses: Awaiting payment, Paid, Shipped and Canceled. Step-by-step progress like out for delivery appears on the carrier’s tracking page, linked from your shipping email.`,
      },
      {
        q: 'What if my eye drops were out for delivery but never arrived?',
        a: `Check the carrier’s page the next morning; it usually shows a new step or a note. If it still hasn’t moved or says delivered and you can’t find it, call {phone} with your order number.`,
      },
      {
        q: 'Can I get a delivery time for my Quell order?',
        a: `No delivery date or time is promised. The carrier’s tracking page, linked in your shipping email, is the most current estimate available.`,
      },
    ],
  },
  {
    slug: 'partial-refund-on-an-eye-drop-order',
    title: 'Can I get a partial refund on an eye drop order?',
    description:
      'Need to refund some bottles but keep the rest? How Quell’s terms handle unopened bottles, opened ones and the shipping charge on a partial refund.',
    category: 'returns',
    addedOn: '2026-11-25',
    body: [
      {
        p: `Yes. Quell’s refunds work bottle by bottle: any bottle that is still unopened can be refunded within {returnDays} days of delivery, even if you keep and open others from the same order, and you don’t send the refunded bottles back. The refund is the product price of those bottles. Opened bottles can’t be refunded, and the original shipping charge isn’t refunded. Call {phone}, {hours}, with your order number.`,
      },
      { h: 'How a partial refund works' },
      {
        p: `There’s no separate process for a partial refund. Our [terms](/terms) say that if you change your mind about an unopened bottle, you contact us within {returnDays} days of delivery and we refund the product price, with no need to send it back. Because that rule applies to each unopened bottle, an order of several bottles can be partly refunded: the sealed ones you don’t want, while you keep the rest.`,
      },
      { h: 'Common reasons people ask' },
      {
        list: [
          `You ordered {freeBottles} bottles for free shipping and realized you only need one or two.`,
          `You bought for several people and one of them already had a supply.`,
          `A family member decided the product isn’t for them after reading the label.`,
          `You placed an order and then picked up a different product elsewhere.`,
          `You opened one bottle, decided it wasn’t for you, and want to stop there.`,
        ],
      },
      { h: 'Which bottles count' },
      {
        p: `Only unopened bottles. Our terms state that, for health and safety reasons, opened eye drops can’t be refunded, returned or resold. “Unopened” means the seal on the bottle hasn’t been broken. If you’ve opened one bottle from an order, the sealed ones are still eligible. [Opened one bottle: can I return the rest?](/guides/opened-one-bottle-can-i-return-the-rest) covers that situation in more detail, and [why opened eye drops can’t be returned](/guides/why-opened-eye-drops-cannot-be-returned) explains the reasoning.`,
      },
      { h: 'What happens to the shipping charge' },
      {
        p: `The terms say original shipping isn’t refunded. Shipping is charged once per order: {shipping} below {freeBottles} bottles, and nothing at {freeBottles} or more. So on a partial refund you get back the product price of the unopened bottles you’re refunding, and the order’s shipping charge, if there was one, stays as it was. If your order shipped free, there was no shipping charge to refund in the first place. For anything about how a specific order’s refund adds up, ask when you call; the team can look at the order with you.`,
      },
      { h: 'The 30-day clock' },
      {
        p: `The window is {returnDays} days from delivery, and it’s the same for every bottle in the order. If you think you might not need some of the bottles, leave them sealed and make the call before the window closes. [When does the refund window start?](/guides/when-does-the-eye-drop-refund-window-start) explains how delivery is counted.`,
      },
      { h: 'Step by step' },
      {
        list: [
          `Count the bottles that are still sealed and decide how many you want refunded.`,
          `Find your order number in the confirmation or shipping email, or on the [track your order](/orders) page.`,
          `Call {phone}, {hours}, within {returnDays} days of delivery.`,
          `Say how many unopened bottles you’re asking to refund.`,
          `Keep those bottles sealed. You don’t need to ship them back.`,
        ],
      },
      { h: 'What to do with the bottles you don’t send back' },
      {
        p: `Since refunded bottles stay with you, you can pass a sealed one to someone who can use it, as long as they read the label first, or dispose of it. If you give it away, share the caution on the panel: {warnings}. The storage line still applies while it sits in a cupboard: {storage}. Keep any bottles out of children’s reach; the label says: {swallowed}.`,
      },
      { h: 'Partial refunds on gifts and HSA purchases' },
      {
        p: `If the order was a gift you sent, you placed the order, so you’re the one who calls. [Returning a Quell gift after Christmas](/guides/returning-a-quell-gift-after-christmas) covers timing around the holidays. If you paid with an HSA or FSA card, the refund goes back to that card; check with your plan administrator if you’d already submitted the full receipt. [Refunds on eye drops bought with HSA or FSA money](/guides/refunds-on-eye-drops-bought-with-hsa-or-fsa) has more.`,
      },
      { h: 'Damaged or wrong bottles are different' },
      {
        p: `A partial refund is for bottles you’ve changed your mind about. If part of the order arrived damaged, incorrect or with a broken tamper seal, that’s a replacement, not a refund: contact us within {returnDays} days and we replace it at no charge. [What if my eye drop order is missing a bottle?](/guides/eye-drop-order-missing-a-bottle) covers short shipments.`,
      },
      { h: 'Ordering the right amount next time' },
      {
        p: `If you over-ordered, the directions help with planning: {directions}. [How many bottles of eye drops should I order?](/guides/how-many-bottles-to-order) works through the math, and there’s no subscription, so you only get more when you order more. You’ll get one reorder reminder email.`,
      },
    ],
    faq: [
      {
        q: 'Can I get a partial refund on eye drops?',
        a: `Yes. Each unopened bottle can be refunded within {returnDays} days of delivery, so you can refund some bottles from an order and keep the rest. You don’t send the refunded ones back.`,
      },
      {
        q: 'Can I refund just one bottle from my Quell order?',
        a: `If that bottle is unopened and you call within {returnDays} days of delivery, yes. The refund is that bottle’s product price.`,
      },
      {
        q: 'Do I get the shipping back on a partial eye drop refund?',
        a: `No. Quell’s terms say original shipping isn’t refunded. You get back the product price of the unopened bottles you’re refunding.`,
      },
      {
        q: 'Do I need to send back eye drops I’m getting refunded?',
        a: `No. Unopened bottles are refunded without being sent back, because a bottle that has left the shop’s control can’t be resold. Keep them sealed until you’ve called.`,
      },
    ],
  },
  {
    slug: 'what-is-the-main-ingredient-in-eye-drops',
    title: 'What is the main ingredient in eye drops?',
    description:
      'An eye drop’s main ingredients are its active ingredients, listed first on the label. What Quell’s are, and what the inactive list does and doesn’t say.',
    category: 'formula',
    addedOn: '2026-11-25',
    body: [
      {
        p: `On an over-the-counter eye drop, the main ingredients are the active ingredients, listed first on the Drug Facts panel with their strength and purpose. They are the ones that do what the Uses line describes. Quell has three: {actives}. Everything else is an inactive ingredient. Labels don’t say how much of each inactive ingredient is in the bottle, so you can’t tell which one makes up most of it.`,
      },
      { h: 'Two meanings of “main ingredient”' },
      {
        p: `People asking this usually mean one of two things. Some want to know which ingredient does the work. Others want to know what most of the liquid actually is. The label answers the first question clearly and the second only partly, and it helps to keep them apart.`,
      },
      { h: 'The active ingredients: what does the work' },
      {
        p: `The Active ingredients section of a Drug Facts panel lists each active ingredient, its strength and its purpose. For Quell, those are {actives}. The Purpose column describes glycerol and polysorbate 80 as lubricants and light mineral oil as an emollient. Together they are what the label’s Uses line refers to: {uses}.`,
      },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The tear film has three layers, oil on the outside, water in the middle and mucus closest to the eye, and the oil layer slows evaporation from the water beneath it. That’s why Quell carries an emollient alongside its two lubricants. Our guide to [why Quell has three active ingredients](/guides/why-quell-has-three-active-ingredients) explains each one.`,
      },
      { h: 'Lubricant and emollient, in plain terms' },
      {
        p: `A lubricant is there to keep the surface of the eye slick and comfortable as the lids move over it. An emollient is an oily, softening ingredient, and in an eye drop it works with the tear film’s own oil layer. Quell’s label pairs two lubricants with one emollient, so its Purpose column reads as a combination rather than a single job. [Lubricant vs. emollient eye drops](/guides/lubricant-vs-emollient-eye-drops) compares the two words in more depth.`,
      },
      { h: 'The inactive ingredients: everything else' },
      {
        p: `Inactive ingredients make up the rest of the formula. They aren’t listed with a strength or a purpose, so the label doesn’t say what each one does or how much is present. Quell’s are: {inactives}. That’s {inactiveCount} inactive ingredients in all, listed in alphabetical order, which is why the order tells you nothing about amounts.`,
      },
      { h: 'So what makes up most of the bottle?' },
      {
        p: `Many eye drops are water-based, and Quell lists sterile water among its inactive ingredients. Because the label doesn’t give amounts for inactive ingredients, though, it doesn’t say which ingredient is largest by volume, and we won’t guess. What the label does give you is the strength of each active ingredient, shown in the Active ingredients section. [Sterile water in eye drops](/guides/sterile-water-in-eye-drops) and [what the percentages on eye drop labels mean](/guides/what-the-percentages-on-the-label-mean) go further.`,
      },
      { h: 'Comparing the main ingredient across eye drops' },
      {
        p: `Different eye drops use different active ingredients, so the quickest way to compare two products is to set their Active ingredients sections side by side. Look at:`,
      },
      {
        list: [
          `Which active ingredients each one lists, and how many.`,
          `The purpose next to each one, such as lubricant or emollient.`,
          `The Uses line, which tells you what the product is for.`,
          `The inactive list, especially if you have allergies or want to avoid an ingredient.`,
          `Any cautions in the Warnings section.`,
        ],
      },
      {
        p: `[Active vs. inactive ingredients in eye drops](/guides/active-vs-inactive-ingredients-in-eye-drops) explains the difference in more depth.`,
      },
      { h: 'Ingredients and allergies' },
      {
        p: `Inactive ingredients matter just as much when it comes to allergies, because they’re still in the bottle. Quell’s panel carries a caution: {warnings}. If you react to any listed ingredient, or aren’t sure, talk with a doctor or pharmacist before using it. The complete list, with notes on each ingredient, is in [Quell eye drops ingredients: the full list](/guides/quell-eye-drops-ingredients-list).`,
      },
      { h: 'How the label says to use it' },
      {
        p: `However the formula is made up, the directions are what count when you use it: {directions}. Store it as the label says, {storage}. The panel also notes: {milky}. The full Drug Facts panel is on our [Drug Facts page](/drug-facts). If dryness keeps coming back or you have pain or vision changes, an eye doctor can find the cause and decide what to do.`,
      },
    ],
    faq: [
      {
        q: 'What is the main ingredient in eye drops?',
        a: `On an over-the-counter label, the active ingredients are the main ones: they are listed first, with their strength and purpose, and they do what the Uses line describes. Everything else is inactive.`,
      },
      {
        q: 'What is the main ingredient in Quell?',
        a: `Quell has three active ingredients: {actives}. Its panel lists two lubricants and one emollient.`,
      },
      {
        q: 'Are eye drops mostly water?',
        a: `Many are water-based, and Quell lists sterile water among its inactive ingredients. Labels don’t give amounts for inactive ingredients, so the label doesn’t say what share of the bottle is water.`,
      },
      {
        q: 'Why doesn’t the eye drop label list how much of each inactive ingredient there is?',
        a: `The Drug Facts format lists strength for active ingredients only. Inactive ingredients are listed by name, in alphabetical order on Quell’s panel, with no amounts.`,
      },
    ],
  },
  {
    slug: 'how-to-compare-two-eye-drop-labels',
    title: 'How to compare two eye drop labels side by side',
    description:
      'Line up two Drug Facts panels section by section: active ingredients, uses, warnings, directions, storage and inactives. What each comparison tells you.',
    category: 'label',
    addedOn: '2026-11-25',
    body: [
      {
        p: `To compare two eye drops, set their Drug Facts panels side by side and go section by section in the order the panel uses: active ingredients and their purpose, Uses, Warnings, Directions, Other information, then Inactive ingredients. Every over-the-counter drop uses the same layout, so differences stand out. The front of the box is marketing; the panel is where the comparable facts are.`,
      },
      { h: 'Why the panel makes comparing easier' },
      {
        p: `Over-the-counter drugs share one standard format, with the same headings in the same order. That means you don’t have to hunt: the active ingredients are always at the top, and the inactive ones are always at the bottom. Put a photo of one panel next to the other, or open our [Drug Facts page](/drug-facts) beside a box you’re holding in a store, and read across. [How to read an eye drop Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label) explains each section if the format is new to you.`,
      },
      { h: '1. Active ingredients and purpose' },
      {
        p: `Start here. Compare which active ingredients each drop lists, their strengths, and the purpose next to each. Two products can use different actives for similar jobs, or the same active at different strengths. For reference, Quell lists {actives}, with a Purpose column that names two lubricants and one emollient. [The active ingredients on an eye drop label](/guides/the-active-ingredients-section) explains how to read the strength figures.`,
      },
      { h: '2. Uses' },
      {
        p: `The Uses line states what the product is for, and it is the honest test of whether a drop fits your need. If two boxes look alike on the front but their Uses lines differ, believe the Uses lines. Quell’s reads: {uses}. If what you want isn’t in a product’s Uses line, that product isn’t made for it.`,
      },
      { h: '3. Warnings' },
      {
        p: `Compare the cautions carefully, especially if you have allergies. Some warnings are common across eye drops, while others are specific to one formula. Quell’s caution says: {warnings}. A caution that applies to you on one panel and not the other may settle the choice on its own. [The warnings on an eye drop label](/guides/the-warnings-section) covers the sub-sections, including Do not use, When using this product, and Stop use and ask a doctor.`,
      },
      { h: '4. Directions' },
      {
        p: `Directions tell you how many drops, how often and in which eye. Two products can differ a lot here, which affects how long a bottle goes and how a drop fits your day. Quell’s directions: {directions}. Also notice whether a panel addresses contact lenses, children or other drops. If it doesn’t, that’s not permission; ask your eye doctor or pharmacist. [The Directions section](/guides/directions-section-eye-drop-label) explains the wording.`,
      },
      { h: '5. Other information' },
      {
        p: `This section often holds storage temperatures and a note about how the product looks. Compare storage ranges if you’ll keep the bottle in a car, bag or desk. Quell’s panel lists {storage}, and it describes the product this way: {milky}. A drop described as milky shouldn’t be compared with a clear one on looks alone. [The Other information section](/guides/other-information-section-eye-drop-label) has more.`,
      },
      { h: '6. Inactive ingredients' },
      {
        p: `The inactive list is where many real differences hide: preservatives, oils, buffers, thickeners and natural extracts. If you’re avoiding an ingredient, this is where to look. Quell’s inactive ingredients are {inactives}. Because inactive ingredients are listed without amounts, the comparison is about what’s present, not how much. [What does preservative-free mean on eye drops?](/guides/what-does-preservative-free-mean) helps when one product has a preservative and the other doesn’t.`,
      },
      { h: '7. The package details' },
      {
        list: [
          `Bottle size, to compare cost per bottle fairly. Quell’s is {size}.`,
          `Single-use vials or a multi-dose bottle.`,
          `The expiration date on the box you’re actually buying.`,
          `An intact tamper seal.`,
          `Who distributes the product and how to contact them.`,
        ],
      },
      { h: 'A comparison worksheet' },
      {
        p: `Copy these questions into a note and answer them for each product:`,
      },
      {
        list: [
          `What are the active ingredients, strengths and purposes?`,
          `Does the Uses line match what I need?`,
          `Does any warning apply to me or to the person I’m buying for?`,
          `How many drops, how many times a day?`,
          `How should it be stored, and what should it look like?`,
          `Any inactive ingredient I want to avoid?`,
          `What size is the bottle, and when does this box expire?`,
        ],
      },
      { h: 'What the labels won’t tell you' },
      {
        p: `A panel doesn’t say which drop will feel better for you, how either compares with the other in use, or whether a drop suits a situation it doesn’t mention, such as contact lenses. [What an eye drop label doesn’t tell you](/guides/what-an-eye-drop-label-does-not-tell-you) lists the gaps. If you’ve compared carefully and still aren’t sure, take both labels to a pharmacist or your eye doctor, who can look at them with your eyes and history in mind. And whichever you choose, the stop line still applies: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'How do I compare two eye drop labels?',
        a: `Put the Drug Facts panels side by side and read across in order: active ingredients and purpose, Uses, Warnings, Directions, Other information and Inactive ingredients.`,
      },
      {
        q: 'Which part of an eye drop label matters most when comparing?',
        a: `Start with the active ingredients and the Uses line, since they say what the drop contains and what it’s for. Then check the Warnings for anything that applies to you.`,
      },
      {
        q: 'Should I compare inactive ingredients on eye drops?',
        a: `Yes, especially if you have allergies or want to avoid a preservative. Inactive ingredients are listed by name without amounts, so compare what’s present.`,
      },
      {
        q: 'Can two eye drops with the same active ingredients be different?',
        a: `Yes. Strengths, inactive ingredients, directions, storage and bottle type can all differ, so read the whole panel, not just the top.`,
      },
    ],
  },
]
