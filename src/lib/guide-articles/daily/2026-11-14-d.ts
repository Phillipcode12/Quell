import type { Guide } from '@/lib/guide-types'
export const DAILY_20261114_D: Guide[] = [
  /*
   * Sources fetched 2026-11-14 for dry-eye-relief-milwaukee-wi:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014839.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00014839.csv
   *   (MILWAUKEE MITCHELL AP, elev 204.2 m: annual mean 49.3 F; annual precip 34.57 in;
   *   annual snow 48.7 in, Jan 14.9, Feb 11.8, Dec 10.4; Jan high 30.9 F, low 17.2;
   *   Jul high 81.9; 122.8 nights at or below 32 F; 50.1 days with a high at or below
   *   32 F; 6.6 nights below 0 F; 9.1 days at or above 90 F; Jun precip 4.38 in)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (MILWAUKEE, WI, WBAN 14839: Jan 76/68, Apr 77/59, Aug 85/62, Dec 79/70,
   *   annual 79/63, morning/afternoon)
   */
  {
    slug: 'dry-eye-relief-milwaukee-wi',
    title: 'Dry eye relief in Milwaukee, Wisconsin',
    description:
      'Lake Michigan wind, nearly 49 inches of snow and five months of furnace heat. NOAA’s Milwaukee numbers and practical dry eye relief for each season.',
    category: 'local',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Dry eye relief in Milwaukee comes down to two kinds of air: the cold wind coming off Lake Michigan and the furnace-dried air inside from November to April. Shield your eyes outdoors, aim heat vents away from your face, add moisture to the rooms where you sleep and work, and use a lubricating drop exactly as its label directs. Pain, vision changes or dryness that won’t settle belong with an eye doctor.`,
      },
      { h: 'What NOAA’s Mitchell Airport record shows' },
      {
        p: `NOAA’s official 1991 to 2020 climate normals for Milwaukee come from the station at General Mitchell International Airport, about 670 feet above sea level and a few miles inland from the lake. The numbers explain why so many people here spend half the year indoors:`,
      },
      {
        list: [
          `An average annual temperature of 49.3°F.`,
          `January’s normal high is 30.9°F and its normal low is 17.2°F.`,
          `About 123 nights a year fall to freezing or colder, and roughly 50 days never climb above freezing at all.`,
          `Normal snowfall is 48.7 inches, most of it in December (10.4), January (14.9) and February (11.8).`,
          `Summer is short and mild by comparison: July’s normal high is 81.9°F, and the airport logs only about 9 days a year at 90°F or hotter.`,
          `Total precipitation runs about 34.6 inches, with June the wettest month at 4.38.`,
        ],
      },
      {
        p: `Fifty days below freezing means fifty days when nobody opens a window. Most of a Milwaukee winter is spent breathing air that a furnace has warmed from the teens or twenties, and warming cold air lowers its relative humidity sharply.`,
      },
      { h: 'Why the humidity numbers fool people' },
      {
        p: `NOAA’s relative humidity table for Milwaukee shows 76 percent on an average January morning and 68 percent in the afternoon. Those look like comfortable, moist figures. They describe outdoor air at 20 degrees, though. Bring that same air inside and heat it to 70, and its relative humidity can fall to a fraction of what it was, because warm air holds far more water than cold air does.`,
      },
      {
        p: `That is why a person can shovel wet lake-effect snow in the morning and feel gritty, scratchy eyes by evening at a desk. The tear film loses water fastest in warm, dry, moving air, and forced-air heat is all three. A humidifier in the bedroom, a houseplant tray or two, and keeping the thermostat a degree or two lower all help the indoor side. Our guide on [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) goes room by room.`,
      },
      { h: 'Lake wind on the lakefront and downtown' },
      {
        p: `Living next to a Great Lake brings wind. On a raw March day the gusts along Lincoln Memorial Drive, the Hoan Bridge approach or the Third Ward riverwalk hit your face at eye level, and wind strips moisture off the eye’s surface quickly. A few habits help:`,
      },
      {
        list: [
          `Wear wraparound sunglasses or glasses outdoors, even when it’s overcast; they break up the wind before it reaches the eye.`,
          `Turn your back to gusts while waiting for the bus or the Hop streetcar.`,
          `Pull a hat brim low on snowy days, when glare off fresh snow makes people squint and blink less fully.`,
          `Give your eyes a minute indoors before reaching for a drop; tearing from cold wind often settles on its own once you’re out of it.`,
        ],
      },
      {
        p: `Spring is the surprise season. NOAA’s table puts Milwaukee’s lowest average afternoon humidity in April, at 59 percent, the month when the furnace is still running at night and the lakefront wind is still cold. Many people notice their eyes most during that stretch, after they’ve stopped expecting winter to bother them.`,
      },
      { h: 'Summer by the lake, and the air conditioning' },
      {
        p: `Summer is the gentlest season for Milwaukee eyes. August mornings average 85 percent humidity in NOAA’s table, and cool lake air often takes the edge off hot afternoons near the shore. The trouble spots are indoors and on the road: offices cooled hard against the occasional heat wave, car vents pointed at the driver, and long festival days on the lakefront grounds in sun and wind. Sunglasses and a water bottle cover most of it.`,
      },
      { h: 'Using a lubricating drop through a Wisconsin winter' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the problem warm, dry indoor air creates. The label’s Uses line reads: {uses}. Its directions: {directions}. A practical Milwaukee rhythm is one drop before the commute, one at midday, and one in the evening when the heat has been running for hours. Keep the label’s handling line in mind each time: {tip}.`,
      },
      {
        p: `Cold matters for the bottle too. The storage line on the carton reads: {storage}. A car parked all night at a Bay View curb in January drops far below that, so carry the bottle in an inside coat pocket or bag rather than leaving it in the glove box. The label’s “Do not use” line reads: {doNotUse}. Read the [full Drug Facts panel](/drug-facts) before the first use, including the egg and bird caution.`,
      },
      { h: 'Getting Quell delivered in Milwaukee' },
      {
        p: `We ship from Brentwood, Tennessee, to addresses anywhere in the US, including every Milwaukee neighborhood and suburb. There’s no account to set up; checkout works as a guest. Shipping costs {shipping}, and orders of {freeBottles} bottles or more ship free. We don’t promise a delivery date, but you’ll get a shipping email with tracking. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. See the [Milwaukee page](/eye-drops/milwaukee-wi) or the [Wisconsin page](/eye-drops/state/wisconsin) for local details.`,
      },
      { h: 'When it’s more than winter air' },
      {
        p: `A drop helps with ordinary dryness and irritation. Working out the cause of eyes that keep bothering you, and what to do about it, is an eye doctor’s job. The label sets the line clearly: {stopUse}`,
      },
      {
        p: `The [dry eye self-check](/self-check) can help you decide whether to book a visit; it’s not a diagnosis. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'Where can I get dry eye relief in Milwaukee, WI?',
        a: `Everyday dryness usually responds to changes indoors, like a humidifier and vents aimed away from your face, plus a lubricating drop used as labeled. Quell ships to Milwaukee from Tennessee; eyes that hurt or keep getting worse need a local eye doctor.`,
      },
      {
        q: 'How much snow does Milwaukee get in a year?',
        a: `NOAA’s 1991 to 2020 normals for Milwaukee Mitchell International Airport list 48.7 inches a year, with January the snowiest month at 14.9 inches.`,
      },
      {
        q: 'Why do my eyes feel worse in Milwaukee in spring?',
        a: `April has the lowest average afternoon humidity in NOAA’s Milwaukee record, 59 percent, while the furnace still runs at night and the lake wind stays cold. That combination dries eyes after many people think winter is over.`,
      },
      {
        q: 'Can I keep eye drops in my car during a Milwaukee winter?',
        a: `It’s better not to. Quell’s carton reads: {storage}. A parked car in a Wisconsin January gets far colder, so keep the bottle in a pocket or bag you bring inside.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-14 for dry-eye-relief-detroit-mi:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00094847.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00094847.csv
   *   (DETROIT METRO AP, elev 192.3 m: annual mean 50.6 F; annual precip 34.32 in;
   *   annual snow 45.0 in, Jan 14.0, Feb 12.5; Jan high 32.3 F, low 19.2; Jul high 83.7;
   *   119.5 nights at or below 32 F; 41.8 days with a high at or below 32 F; 13.0 days
   *   at or above 90 F; 3.6 nights below 0 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (DETROIT, MI, WBAN 94847: Jan 80/69, Apr 75/53, May 76/53, Jul 80/53,
   *   Dec 81/70, annual 80/59, morning/afternoon)
   */
  {
    slug: 'dry-eye-relief-detroit-mi',
    title: 'Dry eye relief in Detroit, Michigan',
    description:
      'A long heating season, freeway commutes and plant-floor shifts all dry the eyes in Detroit. NOAA’s Metro Airport numbers and what helps through the year.',
    category: 'local',
    addedOn: '2026-11-14',
    body: [
      {
        p: `In Detroit, dry eyes mostly come from the long heating season and the hours people spend in cars and big work buildings, not from the climate itself. Detroit air is fairly moist outdoors. Keep heat and dash vents off your face, blink fully during screen work and drives, add moisture at home in winter, and use a lubricating drop as its label directs. Ongoing pain or blurry vision calls for an eye doctor.`,
      },
      { h: 'Detroit’s climate at Metro Airport' },
      {
        p: `The official 1991 to 2020 climate normals for the Detroit area come from NOAA’s station at Detroit Metropolitan Airport in Romulus. A few figures from that record shape how southeast Michigan lives:`,
      },
      {
        list: [
          `Average yearly temperature: 50.6°F.`,
          `January: normal high 32.3°F, normal low 19.2°F.`,
          `Nights at or below freezing: about 120 a year.`,
          `Days when the high stays at freezing or below: about 42.`,
          `Snow: 45 inches in a normal year, led by January at 14 inches and February at 12.5.`,
          `July: normal high of 83.7°F, with roughly 13 days a year reaching 90°F.`,
        ],
      },
      {
        p: `Put those together and a typical Detroit household runs its furnace from late October into April. Great Lakes winters are often gray and damp outside, so people don’t connect their scratchy eyes with dry air. The dryness is indoors.`,
      },
      { h: 'Heated air through a gray Michigan winter' },
      {
        p: `NOAA’s humidity table for Detroit shows January mornings at 80 percent and afternoons at 69. Cloudy, raw days with that kind of outdoor moisture are normal here. Inside, the story flips. Air pulled in at 25 degrees and heated to 70 ends up with a much lower relative humidity, and a forced-air system keeps it circulating across your face all evening.`,
      },
      {
        p: `Some fixes cost nothing: close the register nearest your favorite chair, lower the thermostat a little at night, and keep a ceiling fan off in winter if it blows downward. A bedroom humidifier helps many people wake with more comfortable eyes; our page on [whether a humidifier helps dry eyes](/guides/does-a-humidifier-help-dry-eyes) explains what to look for and how to keep one clean.`,
      },
      { h: 'Plant floors, warehouses and long shifts' },
      {
        p: `Plenty of Detroiters work in auto assembly plants, parts suppliers, warehouses and hospitals, where the building air never stops moving. Large shops use overhead heaters and big fans, and inspection work means hours of close focus with few full blinks. On the line, try these:`,
      },
      {
        list: [
          `Wear the safety glasses your job provides; they also block air blowing straight at the eye.`,
          `Stand or set your station so heater and fan outflow passes your shoulder, not your face.`,
          `Use scheduled breaks to look across the floor, away from close work, and blink slowly several times.`,
          `Wash your hands before using a drop, since shop grime and grease on fingertips have no place near the eye.`,
          `Keep the bottle in a locker or lunch bag, away from ovens, presses and anything hot.`,
        ],
      },
      { h: 'The commute on I-94, I-75 and the Lodge' },
      {
        p: `Metro Detroit is a driving region, and freeway time adds up. A winter commute means defrost blasting up the windshield, often straight across the driver’s eyes, while you stare ahead and blink less than usual. Point the vents toward your chest and feet, use the recirculate setting sparingly, and take a full, slow blink at each long red light. Never put a drop in while driving; do it before you leave or after you park.`,
      },
      { h: 'When the air is driest outside' },
      {
        p: `NOAA’s table gives Detroit its lowest average afternoon humidity, 53 percent, in April, May and July. Spring brings wind off the Detroit River along the Riverwalk and in open lots around the stadiums, and summer brings air conditioning in every office, car and restaurant. Neither season is as long as the heating season, but they explain why some people never get a break from symptoms.`,
      },
      { h: 'Where Quell fits in a Detroit day' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label’s Uses line reads: {uses}. Directions are: {directions}. For a shift worker, that might mean a drop before clocking in, one at lunch and one after the drive home. Each time, follow the handling line: {tip}.`,
      },
      {
        p: `The carton’s storage line is {storage}. A car left in a Dearborn parking lot in January or a hot dashboard in July both fall outside it, so bring the bottle in with you. The label’s “Do not use” line reads: {doNotUse}. See the complete [Drug Facts panel](/drug-facts), including the egg and bird allergy caution, before you start.`,
      },
      { h: 'Ordering to Detroit and the suburbs' },
      {
        p: `Orders ship from Brentwood, Tennessee, with no account needed at checkout. Shipping is {shipping}, and {freeBottles} or more bottles ship free. You’ll get a tracking email once it ships, though we can’t promise a delivery date. Refunds on unopened bottles are available within {returnDays} days of delivery, with nothing to mail back. Local details live on the [Detroit page](/eye-drops/detroit-mi) and the [Michigan page](/eye-drops/state/michigan).`,
      },
      { h: 'Signs to see an eye doctor' },
      {
        p: `If dryness hangs on through spring or comes with pain, light sensitivity or blurred vision, a drop isn’t the answer. Finding the cause, and deciding what to do about it, belongs to an eye doctor. Per the label: {stopUse}`,
      },
      {
        p: `Our [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) list and the short [self-check](/self-check) can help you decide; the self-check is not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Detroit in the winter?',
        a: `Detroit’s outdoor air is fairly moist, but the furnace runs for months, and heating cold air drops its relative humidity indoors. Forced-air vents then blow that dry air across your face.`,
      },
      {
        q: 'How cold does Detroit get in January?',
        a: `NOAA’s 1991 to 2020 normals for Detroit Metropolitan Airport give January a normal high of 32.3°F and a normal low of 19.2°F, with about 120 freezing nights across the year.`,
      },
      {
        q: 'Can factory work cause dry eyes?',
        a: `Moving air from heaters and fans, close inspection work and long shifts all speed up tear evaporation. Safety glasses, angling your station away from airflow and regular blink breaks help, and an eye doctor should check symptoms that persist.`,
      },
      {
        q: 'Can I get eye drops shipped to Detroit?',
        a: `Yes. Quell ships to Detroit and its suburbs from Brentwood, Tennessee, with guest checkout and a tracking email, though no delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-14 for dry-eye-relief-des-moines-ia:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014933.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00014933.csv
   *   (DES MOINES INTL AP, elev 291.7 m: annual mean 50.9 F; annual precip 36.55 in;
   *   Jan 1.08 in, May 5.24, Jun 5.26; annual snow 36.5 in; Jan high 30.9 F, low 13.8;
   *   Jul high 85.6, low 66.4; 127.9 nights at or below 32 F; 45.5 days with a high at
   *   or below 32 F; 10.4 nights below 0 F; 22.0 days at or above 90 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (DES MOINES, IA, WBAN 14933: Jan 78/68, Apr 77/54, Aug 86/59, Oct 80/55,
   *   Dec 80/70, annual 81/60, morning/afternoon)
   */
  {
    slug: 'dry-eye-relief-des-moines-ia',
    title: 'Dry eye relief in Des Moines, Iowa',
    description:
      'Prairie wind, below-zero nights, muggy summers and harvest dust: what NOAA’s Des Moines record shows and how to ease dry, irritated eyes each season.',
    category: 'local',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Des Moines puts eyes through a lot in one year: open-prairie wind, winters with about ten nights below zero, hot and humid summers, and dusty air at harvest. Relief means blocking wind outdoors, adding moisture indoors when the furnace runs, keeping dust out of your eyes in fall, and using a lubricating drop exactly as labeled. Persistent pain or vision changes need an eye doctor.`,
      },
      { h: 'Des Moines weather by the numbers' },
      {
        p: `NOAA’s 1991 to 2020 climate normals for Des Moines International Airport, at about 957 feet above sea level, describe a classic Midwestern swing between extremes:`,
      },
      {
        list: [
          `January’s normal low is 13.8°F, and about 10 nights a year drop below zero.`,
          `Close to 128 nights a year reach freezing or colder, and roughly 45 days stay at or below freezing all the way through.`,
          `July’s normal high is 85.6°F, and the airport averages 22 days a year at 90°F or above.`,
          `Snow averages 36.5 inches a season.`,
          `January is the driest month at 1.08 inches of precipitation; May and June are the wettest, both above 5.2 inches.`,
        ],
      },
      {
        p: `That range matters because each end of it dries the eyes differently. Winter does it through heated indoor air, summer through air conditioning, and the shoulder seasons through wind.`,
      },
      { h: 'Wind with nothing to stop it' },
      {
        p: `Central Iowa is open country. Away from downtown’s buildings, there are few hills or forests to slow a northwest wind in winter or a south wind in spring. Waiting at a DART stop, crossing a parking lot at Jordan Creek, or walking the trails along the Des Moines and Raccoon rivers can mean a steady breeze straight into your face.`,
      },
      {
        p: `NOAA’s humidity table shows Des Moines afternoons at their driest in April, averaging 54 percent, with October close behind at 55. Those are breezy months with the windows open, and many people feel their eyes most then. Wraparound sunglasses help more than you’d expect, and so does turning your shoulder to the wind instead of squinting into it.`,
      },
      { h: 'Harvest dust in the fall' },
      {
        p: `From late September into November, combines work the fields around Polk County, and dry chaff and soil dust can drift for miles on a windy day. On the farm or in a grain elevator it’s much heavier. Dust is an irritant, and it’s a different problem from dryness, though the two often arrive together.`,
      },
      {
        list: [
          `On fieldwork days, wear sealed safety glasses or goggles instead of regular sunglasses.`,
          `Close the truck or cab windows and run the cabin air filter on dusty roads.`,
          `If grit gets in your eye, don’t rub it. Blink, let tears work, and rinse with clean water if your workplace provides an eyewash.`,
          `Wash your face and hands before using any drop, so dust on your fingers doesn’t end up in the eye.`,
          `If something feels stuck, or the scratchy feeling continues after rinsing, see an eye doctor rather than waiting it out.`,
        ],
      },
      { h: 'Below-zero winters and the furnace' },
      {
        p: `NOAA’s Des Moines figures show January mornings at 78 percent humidity outdoors. Heat that frigid air to room temperature and its relative humidity plunges, which is why homes, offices and classrooms feel parched by midwinter. Downtown workers have one more factor: the skywalk system lets people cross much of downtown without going outside, so a winter workday can pass entirely in heated, circulated air.`,
      },
      {
        p: `A bedroom humidifier, vents angled away from beds and desks, and frequent breaks from screens make the biggest difference. [Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) has more ideas for the heated months.`,
      },
      { h: 'State Fair heat and summer air conditioning' },
      {
        p: `August mornings in Des Moines average 86 percent humidity, the stickiest in NOAA’s table, and that’s when the Iowa State Fair draws crowds into the sun and dust of the fairgrounds. Long days outdoors bring squinting, sunscreen drifting into eyes and fewer full blinks. Then comes the air-conditioned car ride home. Sunglasses, a hat and keeping sunscreen away from the eyelids help.`,
      },
      { h: 'How a drop like Quell fits' },
      {
        p: `Quell’s label lists its Uses as: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. The directions read: {directions}. That spacing fits an Iowa day: one in the morning, one around lunch and one in the evening. Before every drop, remember the handling line: {tip}.`,
      },
      {
        p: `Temperature matters with this climate. The carton’s storage line reads: {storage}. A pickup cab parked outside in January is far colder, and a summer dashboard far hotter, so keep the bottle in your coat or bag. The label’s “Do not use” line reads: {doNotUse}. The full [Drug Facts](/drug-facts) panel includes the egg and bird allergy caution.`,
      },
      { h: 'Ordering to Des Moines' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Des Moines, West Des Moines, Ankeny, Urbandale and the rest of the metro. Check out as a guest, pay {shipping} for shipping, or get free shipping on {freeBottles} bottles or more. A tracking email follows shipment, with no promised arrival date. Unopened bottles can be refunded within {returnDays} days of delivery, and you don’t send them back. Visit the [Des Moines page](/eye-drops/des-moines-ia) or the [Iowa page](/eye-drops/state/iowa) for more.`,
      },
      { h: 'When to book an eye doctor' },
      {
        p: `Drops are for everyday dryness. If your eyes still bother you after the wind dies down, or after harvest dust clears, an eye doctor should work out the cause and what to do about it. The label’s own stopping point: {stopUse}`,
      },
      {
        p: `See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for the signs that shouldn’t wait, or take the quick [self-check](/self-check); it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes dry in Des Moines?',
        a: `Open-prairie wind in spring and fall, heated indoor air during long winters and air conditioning in summer all speed up tear evaporation. Harvest dust adds irritation in the fall.`,
      },
      {
        q: 'Can harvest dust irritate your eyes?',
        a: `Yes, dust and chaff from fieldwork are irritants that can make eyes scratchy and watery. Sealed safety glasses help, and anything that feels stuck in the eye after rinsing needs an eye doctor.`,
      },
      {
        q: 'How cold does Des Moines get at night in winter?',
        a: `NOAA’s 1991 to 2020 normals for Des Moines International Airport give January a normal low of 13.8°F, with about 10 nights a year falling below zero.`,
      },
      {
        q: 'Where can I get dry eye relief in Des Moines, IA?',
        a: `For everyday dryness, start with wind protection, indoor humidity and a lubricating drop used as labeled. Quell ships to the Des Moines metro from Tennessee; ongoing pain or vision changes need a local eye doctor.`,
      },
    ],
  },
  {
    slug: 'can-you-use-hsa-for-eye-drops-after-leaving-a-job',
    title: 'Can you use your HSA after leaving a job?',
    description:
      'Your HSA stays yours after you leave a job, per IRS Publication 969, so it can still pay for OTC eye drops. An FSA works differently. Here’s how each one goes.',
    category: 'ordering',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Yes. A health savings account belongs to you, not your employer. IRS Publication 969 describes an HSA as portable: it stays with you if you change employers or leave the workforce. You can keep using the balance for qualified medical expenses, which include over-the-counter medicines like lubricating eye drops. A health FSA is different, because it’s an employer’s plan, so check its rules before you leave.`,
      },
      { h: 'Why an HSA stays with you' },
      {
        p: `An HSA is a tax-exempt trust or custodial account held in your name at a bank, credit union or other trustee. Your employer may have picked the provider and sent payroll contributions into it, but the money in the account is yours from the moment it lands. IRS Publication 969 uses the word “portable” and says the account stays with you when you change jobs or stop working.`,
      },
      {
        p: `Practically, that means nothing about the balance disappears on your last day. The debit card keeps working unless the provider tells you otherwise, and the account keeps its investments and history. Some employers pay the monthly account fee while you work there and stop afterward, so the provider may start charging you directly. That’s a fee question, not an ownership question.`,
      },
      { h: 'Can I still use my HSA for over-the-counter eye drops?' },
      {
        p: `Yes, as long as the purchase is a qualified medical expense. Since the CARES Act in 2020, over-the-counter medicines count without a prescription, and the IRS lists over-the-counter medicine, “whether or not prescribed,” as medical care in Publication 969. Lubricating eye drops sold as an OTC drug with a Drug Facts label fall into that group. Our guide on [why OTC eye drops count for HSA and FSA](/guides/why-otc-eye-drops-count-for-hsa-and-fsa) has the background.`,
      },
      {
        p: `Publication 969 adds one timing rule worth knowing: expenses incurred before you set up your HSA aren’t qualified. Anything you buy after the account was opened is fine, whether you still work at the job that opened it or not.`,
      },
      { h: 'Using an HSA card after leaving your job' },
      {
        p: `If your HSA debit card still works, you can use it at checkout like any card. If you’d rather pay another way and reimburse yourself later, that works too. Either way, a few habits keep tax time simple:`,
      },
      {
        list: [
          `Save the order confirmation email or your shipping email for each eye drop order; it shows the date, product and amount.`,
          `Keep a simple folder or spreadsheet of HSA purchases, since the IRS expects you to be able to show distributions went to qualified expenses.`,
          `Watch for a new card if your provider reissues accounts after you leave an employer.`,
          `Look up past orders on our [order lookup page](/orders) if you lose an email.`,
        ],
      },
      { h: 'Can I still contribute to my HSA after leaving a job?' },
      {
        p: `Spending and contributing are separate rules. You can spend from the account regardless of your job. Contributions depend on being an “eligible individual,” which generally means being covered by a high-deductible health plan and not by certain other coverage. Lose that coverage when you leave, and contributions stop for the months you’re not eligible. Publication 969 explains that you can still contribute for the months you did qualify, up to the tax filing deadline. If you move to a new plan, check whether it’s HSA-eligible before adding money.`,
      },
      { h: 'What happens to an FSA when you leave a job' },
      {
        p: `A health flexible spending arrangement works differently. Publication 969 calls health FSAs “employer-established benefit plans,” usually funded by salary reduction agreements with the employer. Because the plan belongs to your employer, its rules decide what happens when you leave. Publication 969 also explains that FSAs are generally “use-it-or-lose-it,” with some plans allowing a limited carryover or a grace period, but not both.`,
      },
      {
        p: `What we couldn’t confirm from the IRS publication is exactly how each plan handles departing employees. Some end eligibility on your last day; some offer continuation coverage. Before you leave, ask HR or your FSA administrator these questions:`,
      },
      {
        list: [
          `What’s the last date I can buy something and have it count?`,
          `How long do I have to submit receipts after leaving?`,
          `Does the plan offer continuation coverage, and what would it cost?`,
          `Is there a carryover or grace period, and does it apply after separation?`,
        ],
      },
      {
        p: `If there’s money left and the deadline is close, stocking up on OTC items you already use, like eye drops, is a common choice. Just buy what you’ll use before the bottles reach their expiration date.`,
      },
      { h: 'Ordering Quell with HSA or FSA funds' },
      {
        p: `Quell is an over-the-counter lubricating eye drop. Its label’s Uses line reads: {uses}. Each bottle holds {size}, and the directions are: {directions}. Checkout works as a guest, shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back, which helps if you overestimate.`,
      },
      {
        p: `We can’t tell you whether a particular card will be accepted at checkout, because that depends on your HSA provider. For general eligibility questions, our main [HSA and FSA guide](/guides/hsa-fsa-and-eye-drops) covers the basics, and your plan administrator has the final word on your account.`,
      },
      { h: 'Before you leave: a short checklist' },
      {
        list: [
          `Log in to your HSA provider and confirm your contact details are personal, not work, email and phone.`,
          `Download recent statements while you still have any employer portal access.`,
          `Ask HR when payroll contributions stop and whether the employer covers account fees afterward.`,
          `Use or plan your FSA balance by the plan’s deadline.`,
          `Keep receipts for every medical purchase, including OTC drops, in one place.`,
        ],
      },
    ],
    faq: [
      {
        q: 'Do I lose my HSA if I quit my job?',
        a: `No. IRS Publication 969 describes an HSA as portable, meaning it stays with you if you change employers or leave the workforce. The balance remains yours to spend on qualified medical expenses.`,
      },
      {
        q: 'Can I use my HSA for eye drops if I’m unemployed?',
        a: `Yes. Spending from an HSA doesn’t depend on having a job, and OTC medicines like lubricating eye drops count as qualified medical expenses under the CARES Act. Keep your receipts.`,
      },
      {
        q: 'Can I use my FSA after I leave my job?',
        a: `It depends on the plan, because an FSA is an employer-established benefit. Ask HR or the FSA administrator for the last date purchases count and the deadline to submit receipts.`,
      },
      {
        q: 'Can I keep contributing to an HSA without an employer?',
        a: `Only while you’re an eligible individual, which generally means having high-deductible health plan coverage. IRS Publication 969 explains the eligibility rules and the deadline for contributing for months you qualified.`,
      },
    ],
  },
  {
    slug: 'no-order-confirmation-email',
    title: 'Didn’t get an order confirmation email?',
    description:
      'No confirmation email after ordering eye drops? Check spam and promotions, confirm the address you typed, look the order up, then contact us. Here’s each step.',
    category: 'ordering',
    addedOn: '2026-11-14',
    body: [
      {
        p: `If you placed an order but don’t see a confirmation email, first search your spam, junk and promotions folders, then check that the email address you typed at checkout was correct. Next, try finding the order on our [order lookup page](/orders). If none of that works, contact us with your name and shipping address, and we’ll find the order and resend the details.`,
      },
      { h: 'Step 1: search every folder, not just the inbox' },
      {
        p: `Most missing confirmations aren’t missing at all. Email providers sort messages automatically, and an order email from a store you’ve never bought from before is an easy candidate for a side folder. Search for “Quell” or “order” across all mail, rather than scrolling the inbox. Places to look:`,
      },
      {
        list: [
          `Spam or junk, the most common hiding spot for a first-time sender.`,
          `Promotions, updates or other tabs that some email apps add on top of the inbox.`,
          `A “focused” or “other” split, if your mail app uses one.`,
          `Archive or all-mail views, in case a rule filed the message automatically.`,
          `A second email account, if you have personal and work addresses and aren’t sure which one you used.`,
        ],
      },
      {
        p: `If you find it in spam, mark it as not spam. That helps the shipping email with tracking reach your inbox later.`,
      },
      { h: 'Step 2: check the address you typed' },
      {
        p: `A single wrong letter sends the confirmation to someone else’s inbox, or nowhere. Common slips include a missing letter in the name, a transposed pair, “.con” in place of “.com,” or an old address your browser autofilled. Our guide on [mistyping your email at checkout](/guides/mistyped-email-at-checkout) covers what to do if that’s what happened.`,
      },
      { h: 'Step 3: make sure the order actually went through' },
      {
        p: `Sometimes the problem isn’t the email but the order itself. If the page closed, the connection dropped or a payment step didn’t finish, there may be no order to confirm. Signs the order went through:`,
      },
      {
        list: [
          `You saw a thank-you or confirmation page after paying.`,
          `Your bank or card app shows a matching charge or pending transaction.`,
          `The order appears when you search for it on the [order lookup page](/orders).`,
        ],
      },
      {
        p: `If none of those is true, the order probably didn’t complete. Before trying again, check your card statement once more so you don’t end up with two orders. If you’re unsure, contact us first, and we can check.`,
      },
      { h: 'Look up the order yourself' },
      {
        p: `Checkout doesn’t require an account, so there’s no login with an order history. The [order lookup page](/orders) fills that gap: use the details you entered at checkout to find the order and see its status. If the lookup finds your order, you know it went through even if the email never arrived, and you can note the order number for anything you need later.`,
      },
      { h: 'Step 4: contact us' },
      {
        p: `If you still can’t find it, reach out through the [contact page](/about#contact) or call {phone}, {hours}. To help us find the order quickly, have these ready:`,
      },
      {
        list: [
          `The name and shipping address on the order.`,
          `The email address you think you used, and any other one you might have typed.`,
          `The approximate date and time you ordered.`,
          `How many bottles you bought.`,
        ],
      },
      {
        p: `You won’t need to share your card number to get help. If anyone claiming to be us asks for card details by email or text, don’t reply.`,
      },
      { h: 'Is the email I did get really from Quell?' },
      {
        p: `The opposite problem happens too: an email that looks like an order confirmation, but for something you don’t remember buying, or with a link asking you to “verify” payment. Don’t click links in a message you weren’t expecting. Instead, go to the site directly and use the order lookup, or contact us. Our guide on [whether an eye drop order email is real](/guides/is-this-eye-drop-order-email-real) walks through the warning signs.`,
      },
      { h: 'What comes after the confirmation' },
      {
        p: `Once an order ships, you’ll get a second email with tracking. We don’t promise a delivery date, so tracking is the way to follow the package. If that shipping email doesn’t show up either, the same steps apply: search all folders, check the address and look the order up. When the bottles arrive, each holds {size}, and the label’s directions read: {directions}.`,
      },
      {
        p: `If you change your mind, unopened bottles can be refunded within {returnDays} days of delivery, and you don’t have to send them back. If a package arrives damaged, incorrect or with a broken seal, contact us and we’ll replace it.`,
      },
    ],
    faq: [
      {
        q: 'Why didn’t I get an order confirmation email?',
        a: `Usually it was sorted into spam, junk or a promotions tab, or the email address was mistyped at checkout. Less often, the order didn’t finish, so check for a matching charge and look the order up.`,
      },
      {
        q: 'How do I check if my order went through without a confirmation email?',
        a: `Look for a matching charge in your bank or card app, and search for the order on Quell’s order lookup page using the details you entered at checkout. If neither shows it, contact us before ordering again.`,
      },
      {
        q: 'Can you resend my order confirmation email?',
        a: `Contact us with the name, shipping address and email used on the order, and we’ll look it up and help get you the details.`,
      },
      {
        q: 'Should I place my order again if I didn’t get a confirmation?',
        a: `Not right away. Check spam, your card statement and the order lookup page first, so you don’t pay for two orders. If you still can’t tell, call or message us.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-new-retiree',
    title: 'Christmas gifts for a new retiree',
    description:
      'Gift ideas for someone who just retired, built around the reading, travel, gardening and golf they finally have time for, plus a small gift for tired eyes.',
    category: 'seasonal',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Good Christmas gifts for a new retiree support the things they finally have time for: reading, travel, gardening, golf, grandkids and hobbies they’ve put off for years. Practical comforts work well alongside a bigger gift. If you’re thinking of including lubricating eye drops for someone who spends long hours reading or on screens, check the egg and bird allergy caution on the label first, and order early, since no delivery date is promised.`,
      },
      { h: 'Start with the label if eye drops are on the list' },
      {
        p: `Before anything else, a gift you’d put in someone’s eyes needs one check. Quell’s label carries this warning: {warnings}. If you don’t know whether your retiree has an egg or bird allergy, ask, or skip the drops and choose something else on this list. It’s an easy question to slip into conversation about holiday dinner plans.`,
      },
      {
        p: `If drops still make sense, it helps to know what you’re giving. Quell is a preservative-free lubricating eye drop. The label’s Uses line reads: {uses}. Directions are simple: {directions}. Each bottle holds {size}. Someone who takes other medications or uses prescription eye drops should ask their pharmacist or eye doctor before adding one, because the label doesn’t cover combining drops.`,
      },
      { h: 'Gifts for the retiree who’s finally reading again' },
      {
        p: `Many people retire with a stack of books they’ve been meaning to open for a decade. Reading for hours is wonderful, and it also means blinking less, which leaves eyes feeling dry by afternoon. Gifts that make long reading more comfortable:`,
      },
      {
        list: [
          `A good reading lamp with warm, even light, so they’re not squinting at the page.`,
          `A tablet stand or book holder that keeps pages at a comfortable height.`,
          `A library card tour: offer to take them to sign up and find the large-print and audiobook sections.`,
          `An audiobook subscription, which gives their eyes a break while the story keeps going.`,
          `A bottle of lubricating drops tucked into a book-club tote, once you’ve checked the allergy caution.`,
        ],
      },
      { h: 'Travel gifts for the first big trip' },
      {
        p: `A new retiree with a passport and no meetings is a planner in the making. Long flights, dry cabin air and days of sightseeing in sun and wind are part of it. Thoughtful travel gifts include a packing-cube set, a neck pillow, a refillable water bottle and polarized sunglasses for bright, windy days.`,
      },
      {
        p: `If you add eye drops to a travel kit, note that a {size} bottle fits easily in a quart-size liquids bag. Our guide to [traveling with eye drops](/guides/traveling-with-eye-drops) covers packing and airport screening. The storage line matters on the road too: {storage}. A bottle left in a hot rental car falls outside that range.`,
      },
      { h: 'Screens, video calls and the new tablet' },
      {
        p: `Retirement often comes with more screen time, not less: video calls with grandchildren, photo albums to organize, genealogy research and streaming the shows they missed. Gifts that help:`,
      },
      {
        list: [
          `Setting up their new tablet or laptop for them, with larger text and a less bright evening setting.`,
          `A digital photo frame preloaded with family pictures.`,
          `A standing time each week for a video call, written in a card.`,
          `A simple screen-cleaning kit, since smudges make people lean in and stare harder.`,
        ],
      },
      { h: 'Gardeners and golfers' },
      {
        p: `Time outdoors is high on most retirees’ lists. For a gardener, think kneeling pads, a good pair of gloves, seed catalogs for spring dreaming and a wide-brimmed hat. For a golfer, a round at a course they’ve always wanted to play, a rangefinder, or a lesson with a pro. Both hobbies mean hours in wind and sun, so wraparound sunglasses are a gift that gets used.`,
      },
      {
        p: `Pollen, wind and dust can all leave eyes scratchy after a long morning outside. Hand washing before touching the eyes matters for gardeners in particular, and the label’s handling rule is worth passing along with any bottle: {tip}.`,
      },
      { h: 'Ordering a gift of Quell' },
      {
        p: `Our checkout keeps gift orders straightforward but plain. You can check out as a guest and enter their address as the shipping address. There’s no gift wrap and no gift message option, so the package arrives as a standard shipment. If you want a card or wrapping, ship to yourself and hand it over in person. Shipping is {shipping}, and orders of {freeBottles} or more bottles ship free, which suits a gift split among siblings or neighbors.`,
      },
      {
        p: `We ship only within the US, from Brentwood, Tennessee, and we don’t promise delivery by a particular date. If Christmas morning is the goal, order early rather than counting on a deadline. A shipping email with tracking arrives once the order is on its way. Unopened bottles can be refunded within {returnDays} days of delivery, with nothing to send back, if the gift turns out not to suit them. More on this in our guide to [ordering eye drops for someone else](/guides/ordering-eye-drops-for-someone-else).`,
      },
      { h: 'Pairing a small gift with a bigger one' },
      {
        p: `Eye drops aren’t a showpiece gift, and they shouldn’t be the only thing under the tree. They work as a thoughtful add-on: a bottle inside a travel kit, next to a new reading lamp or in a garden tote. For older relatives in general, our guide to [giving eye drops to a parent or grandparent](/guides/eye-drops-for-a-parent-or-grandparent) has more on how to frame it so it feels caring rather than clinical.`,
      },
      {
        p: `One last note to pass along: if their eyes are more than occasionally dry, or they notice pain or vision changes, that’s a reason to see an eye doctor, not to rely on a drop. The label is clear: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What do you get someone who just retired for Christmas?',
        a: `Gifts that support what they now have time for work well: books and a good reading lamp, travel gear, gardening or golf extras, or help setting up a new tablet. Small comforts make good add-ons.`,
      },
      {
        q: 'Are eye drops a good gift for a retiree?',
        a: `They can be a thoughtful add-on for someone who reads or uses screens for hours, as long as you check the label’s egg and bird allergy caution first. Pair them with a bigger gift rather than giving them alone.`,
      },
      {
        q: 'Can I send Quell as a gift with a message?',
        a: `Checkout has no gift message or gift wrap option. Enter the recipient’s address for shipping, or send it to yourself if you want to wrap it and add a card.`,
      },
      {
        q: 'Will a gift order of eye drops arrive by Christmas?',
        a: `We don’t promise delivery by any date, so order early if you need it by the holiday. You’ll get a shipping email with tracking once it’s on its way.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-during-finals-week',
    title: 'Dry eyes during finals week',
    description:
      'Finals week means long study sessions, late nights and heated libraries, and eyes feel it. How to plan study blocks, rooms and sleep so your eyes hold up.',
    category: 'seasonal',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Dry eyes during finals week usually come from the way people study: hours staring at laptops and notes, blinking less while concentrating, late nights and heated December air in libraries and dorms. Break study into blocks with real pauses, keep vents and fans off your face, get what sleep you can, and if you’re 18 or older, a lubricating drop used as labeled can help with ordinary dryness.`,
      },
      { h: 'Why your eyes give out by the third exam' },
      {
        p: `Concentrating on a screen or a page lowers your blink rate, and the blinks you do make are often partial. Each full blink spreads a fresh layer of tears across the eye, so fewer of them means more of the surface drying out between blinks. Add a heated library in December, a dorm radiator that won’t turn down and a sleep schedule that’s fallen apart, and your eyes feel gritty, tired and heavy by the second day of exams.`,
      },
      {
        p: `None of that means anything is wrong. It means your eyes are doing a lot of work in dry air with little rest. The fixes are mostly about how you set up your study time.`,
      },
      { h: 'Plan study blocks with eye breaks built in' },
      {
        p: `A study plan that works for your eyes also tends to work for memory. Try this pattern for each subject:`,
      },
      {
        list: [
          `Study in blocks of 25 to 50 minutes, timed on your phone so you don’t skip breaks.`,
          `At the end of each block, stand up and look out a window or down a long hallway for a minute.`,
          `Close your eyes and take a few slow, full blinks before sitting back down.`,
          `Switch formats between blocks: from laptop slides to paper flashcards to saying answers out loud.`,
          `Every two hours, take a longer break with a short walk outside, even in the cold.`,
        ],
      },
      {
        p: `Our guide to [dry eyes while studying](/guides/dry-eyes-while-studying) goes deeper into study habits through the whole semester; this page is about getting through the crunch.`,
      },
      { h: 'Picking a spot in the library' },
      {
        p: `During finals, every seat fills up, and people grab whatever’s open. If you can choose, a few details make a difference over a ten-hour day:`,
      },
      {
        list: [
          `Avoid seats directly under ceiling vents or next to floor heaters; moving warm air dries eyes fastest.`,
          `Pick a spot with even overhead light, so your screen isn’t much brighter than the room.`,
          `Set your laptop so the top of the screen sits near eye level; propping it on a stack of textbooks works.`,
          `Bring a water bottle, since you’ll drink less than you think when you’re cramming.`,
        ],
      },
      { h: 'Your dorm room in December' },
      {
        p: `Older dorms often run hot, with radiators that students can’t control, and newer ones circulate dry, forced air. Either way, a December dorm room can feel parched. Turn a desk fan away from your face, crack the window for a few minutes if the room is stuffy, and keep the heater from blowing straight at your bed. A small humidifier helps if your housing allows one; check the rules first.`,
      },
      { h: 'All-nighters, caffeine and screens in bed' },
      {
        p: `Late nights are the part of finals week your eyes like least. Tired eyes feel drier, and eyes kept open for 20 hours have simply had more time to lose moisture. A few habits help when you can’t avoid a late night:`,
      },
      {
        list: [
          `Stop studying on your phone in bed; switch to paper notes for the last half hour.`,
          `Dim the room and screen brightness together, not just one of them.`,
          `Keep water next to the coffee, and drink both.`,
          `Sleep even three or four hours rather than none; closed eyes aren’t losing moisture to the room.`,
          `Skip rubbing your eyes when they feel heavy; rubbing irritates them more.`,
        ],
      },
      { h: 'Using eye drops during exams' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label’s Uses line reads: {uses}. The directions are: {directions}. That works out to a drop in the morning, one mid-afternoon and one at night during a study day. More drops don’t mean more studying stamina, and the label doesn’t direct more than that. Wash your hands first, and follow the handling line: {tip}.`,
      },
      {
        p: `Before an exam, put in a drop a few minutes early so any brief blur settles before the test starts. Don’t share a bottle with a roommate. The carton’s storage line reads: {storage}, so keep it in your bag or desk, not on a radiator or a cold windowsill. Read the full [Drug Facts panel](/drug-facts), including the egg and bird allergy caution, before the first use.`,
      },
      { h: 'Ordering to campus, and the 18+ rule' },
      {
        p: `You must be 18 or older to buy from Quell. A student who’s under 18 can’t place an order, so a parent or guardian would need to decide and order instead. Students 18 and older can check out as guests and ship straight to campus.`,
      },
      {
        p: `If finals are close, keep timing in mind: we don’t promise a delivery date, and packages that reach a mailroom after you’ve left for winter break may sit there until January. Our guide to [shipping eye drops to a college dorm](/guides/shipping-eye-drops-to-a-college-dorm) explains addressing and mailroom timing. Shipping is {shipping}, and {freeBottles} or more bottles ship free.`,
      },
      { h: 'When it’s not just finals' },
      {
        p: `If your eyes still feel dry, sore or blurry a week after exams end, or if they hurt, see an eye doctor, including the one at student health if your campus has one. A drop is for ordinary dryness. The label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes hurt during finals week?',
        a: `Long hours of screen work lower your blink rate, and heated December air in libraries and dorms speeds tear evaporation. Short nights add to the strain. Eyes that actually hurt, or stay uncomfortable after exams, need an eye doctor.`,
      },
      {
        q: 'How can I keep my eyes from getting tired while cramming?',
        a: `Study in timed blocks, look into the distance and blink fully between them, keep vents off your face and switch between screens and paper. Even a few hours of sleep helps more than none.`,
      },
      {
        q: 'Can I use eye drops before an exam?',
        a: `If you’re 18 or older and the drops suit you, follow the label’s directions and put a drop in a few minutes early so any brief blur clears before the test begins.`,
      },
      {
        q: 'Will eye drops shipped during finals reach my dorm before break?',
        a: `No delivery date is promised, so order well before finals if you want them on campus. A package that arrives after you leave may wait in the mailroom until you return.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-in-a-cabin-in-winter',
    title: 'Dry eyes in a cabin in winter',
    description:
      'Wood stoves, cold dry air and snow glare make a winter cabin hard on eyes. How to set up the cabin, pack your drops and keep the bottle from freezing.',
    category: 'seasonal',
    addedOn: '2026-11-14',
    body: [
      {
        p: `A winter cabin dries eyes through a wood stove or baseboard heat warming cold air, small rooms where the heat source is close to your face, and bright snow glare outdoors. Sit away from the stove, put a pot of water or a humidifier to work, wear sunglasses in the snow, and pack your eye drops in your bag, not the car, so the bottle stays within its labeled storage range.`,
      },
      { h: 'Why a cabin feels drier than home' },
      {
        p: `Cold air holds little water. When a cabin’s stove or heater warms that air, its relative humidity drops, sometimes sharply, and there’s often no humidifier or modern ventilation to offset it. A cabin is also small, so the heat source sits a few feet from the couch, the bunk or the kitchen table. Your eyes spend the whole weekend close to warm, dry, moving air.`,
      },
      {
        p: `Arriving makes it worse. An unheated cabin gets cranked up fast, and the first evening is often the driest, as the stove roars to bring the room from near freezing to comfortable.`,
      },
      { h: 'Wood stove habits that help your eyes' },
      {
        p: `A wood stove is a different animal from an open fireplace. It runs hot for hours, often all night, and radiates heat into the room rather than sending it up a chimney. Small changes reduce how much of that lands on your eyes:`,
      },
      {
        list: [
          `Set chairs and the couch at an angle to the stove instead of facing it straight on.`,
          `Don’t sleep in the bunk or loft closest to the stovepipe if you have a choice.`,
          `Run a steady, moderate fire rather than a roaring one that turns the room into a sauna.`,
          `Open the stove door only when you need to load it, and step back while you do; smoke drifting into the room irritates eyes.`,
          `Keep the area around the stove clear of ash dust, which gets stirred up and drifts.`,
        ],
      },
      {
        p: `Many wood stove owners keep a cast-iron kettle or steamer on the stovetop for added moisture. If the cabin has one, keep it filled. Our separate guide on [fireplaces, candles and dry eyes](/guides/fireplaces-candles-and-dry-eyes) covers open flames at home.`,
      },
      { h: 'Adding moisture to a cabin' },
      {
        p: `Even without a stovetop kettle, you can raise humidity in a small space. Hang wet towels or ski gear to dry indoors, leave the bathroom door open after showers and simmer a pot of water while cooking. If you’re there for more than a weekend, a small humidifier is worth packing. Our guide on [whether a humidifier helps dry eyes](/guides/does-a-humidifier-help-dry-eyes) explains what to look for and how to keep one clean, which matters in a cabin that sits empty between visits.`,
      },
      { h: 'Snow glare and cold wind outside' },
      {
        p: `Bright sun on fresh snow makes people squint, and squinting means fewer full blinks. Cold wind on a snowshoe trail or a frozen lake dries the eye surface quickly too. Wraparound sunglasses or ski goggles handle both. When you come in, give watery, wind-stung eyes a few minutes to settle on their own before deciding they need anything.`,
      },
      {
        p: `If the cabin sits in the mountains, the sun can be stronger than you’re used to, so bring good sunglasses even if the forecast says cloudy.`,
      },
      { h: 'Don’t let your eye drops freeze' },
      {
        p: `This is where cabin trips catch people out. The carton’s storage line reads: {storage}. A bottle left all night in a car in a snowy driveway, or in a cabin that’s unheated between visits, can drop far below that. A few habits keep it in range:`,
      },
      {
        list: [
          `Pack the bottle in your carry bag or an inside coat pocket, not the trunk or the glove box.`,
          `Bring it home with you; don’t leave a bottle at the cabin for next time if the heat gets turned off.`,
          `Keep it off the windowsill, where glass gets cold, and away from the stove, where it gets hot.`,
          `Before using it, look at it: the label’s “Do not use” line reads: {doNotUse}.`,
        ],
      },
      {
        p: `Quell’s appearance can surprise people the first time, especially in dim cabin light: {appearance}`,
      },
      { h: 'Using drops on a cabin trip' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the problem stove-heated air creates. The label’s Uses line reads: {uses}. Directions: {directions}. A morning drop before heading out, one after lunch and one in the evening by the stove fits a cabin day. Cabins often lack a good sink, so use hand sanitizer or clean water before handling the bottle, and follow the handling line: {tip}.`,
      },
      {
        p: `If you’re planning a long stay, think about how many bottles you’ll need before you go. Shipping to a remote cabin can be unreliable, and we don’t promise a delivery date. Order from the [home page](/#buy) a while ahead, and ship to your regular address if the cabin doesn’t get mail delivery. Shipping is {shipping}, or free on {freeBottles} or more bottles.`,
      },
      { h: 'When to cut the trip short' },
      {
        p: `Dry, tired eyes after a weekend by the stove usually settle once you’re home. Pain, a change in vision or something stuck in the eye that won’t rinse out are different, and remote cabins are far from help, so don’t wait. The label is direct: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry at the cabin?',
        a: `Heating cold air with a wood stove or baseboard heat lowers its relative humidity, and in a small cabin the heat source is close to your face. Snow glare and cold wind outdoors add to it.`,
      },
      {
        q: 'Does a wood stove dry out the air?',
        a: `It warms air without adding moisture, so indoor humidity falls as the stove runs. A stovetop kettle, drying wet gear indoors and simmering water while cooking all add some back.`,
      },
      {
        q: 'Can eye drops freeze in a car or cabin?',
        a: `Quell’s carton reads: {storage}. A car or unheated cabin in winter can fall far below that, so keep the bottle in a bag or pocket that comes inside with you.`,
      },
      {
        q: 'Should I bring a humidifier to a cabin?',
        a: `For more than a weekend, a small one can help, especially in a stove-heated cabin. Clean and dry it fully before storing, since cabins often sit empty between trips.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-line-cooks-and-chefs',
    title: 'Dry eyes for line cooks and chefs',
    description:
      'Grill heat, hood fans, smoke and ten-hour shifts dry out a cook’s eyes. Station setup, break habits and where to keep eye drops away from the line’s heat.',
    category: 'using',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Line cooks and chefs get dry, stinging eyes from radiant heat off grills and flattops, hood fans pulling air across their faces, smoke and onion fumes, and long shifts with few breaks. Angle your body away from direct heat, step off the line for a minute when you can, keep your hands clean before touching your eyes, and store any eye drops away from the line, where heat can push the bottle past its labeled range.`,
      },
      { h: 'What a busy line does to your eyes' },
      {
        p: `A commercial kitchen stacks up several things that pull moisture off the eye at once. Radiant heat from a charbroiler, salamander or six-burner range warms the air right in front of your face. The hood above the line moves a huge volume of that air upward and past you. Steam from pasta water and dish pits rises in bursts, then the air dries again. You’re watching tickets and pans at the same time, so you blink less.`,
      },
      {
        p: `Irritation is a separate problem. Smoke from the grill, sizzling oil, chili in a hot wok and raw onion all sting. Watering eyes from fumes aren’t the same as dry eyes, but after a few hours, eyes that have been both irritated and dried out feel raw. Our wider guide to [dry eyes in a hot workplace](/guides/dry-eyes-in-a-hot-workplace) covers heat on the job generally; this one is about the line.`,
      },
      { h: 'Setting up your station' },
      {
        p: `You can’t move the grill, but small changes in how you stand and work help over a double:`,
      },
      {
        list: [
          `Work at a slight angle to the heat source, so radiant heat hits your shoulder and side more than your face.`,
          `Step back when you open a salamander, combi oven or fryer basket; the first blast of heat and steam is the worst.`,
          `Lift lids away from you, so steam rises on the far side.`,
          `On the sauté station, keep your face out of the line of a flaming pan; the heat and smoke rise straight up.`,
          `If a fan blows across the pass, ask whether it can be angled so it isn’t hitting the cooks’ faces.`,
          `Clean the hood filters on schedule; grease-clogged hoods pull less smoke away from the line.`,
        ],
      },
      { h: 'Onions, chilies and smoke' },
      {
        p: `Prep work brings its own irritants. Cutting a case of onions releases fumes that sting the eyes for the whole prep shift. Working near a vent or exhaust, keeping your face back from the board and taking a short break halfway through the case all help.`,
      },
      {
        p: `Chili is a different problem: capsaicin on your fingers burns if it reaches your eyes. Wear gloves when handling hot peppers, take them off before touching your face, and wash your hands with soap even after gloves. If something splashes into your eye, flush it with clean water at the eyewash station or sink right away, and see a doctor if pain or blurring doesn’t settle. A lubricating drop isn’t a rinse.`,
      },
      { h: 'Breaks during a long shift' },
      {
        p: `Kitchen breaks are short and unpredictable, but even a minute helps. When you step off the line:`,
      },
      {
        list: [
          `Go somewhere cooler, like the walk-in doorway, the back dock or the alley, for a breath of air that isn’t coming off a grill.`,
          `Close your eyes for a few seconds and blink fully several times.`,
          `Drink water; cooks sweat a lot and often drink too little during a rush.`,
          `Rinse your face with cool water if it’s allowed, which also clears smoke and grease residue off your eyelids.`,
        ],
      },
      { h: 'Clean hands before eye drops' },
      {
        p: `A cook’s hands touch raw protein, garlic, citrus, chili and grease in a single hour. Before using an eye drop, wash your hands with soap at the hand sink, dry them on a clean paper towel and only then pick up the bottle. Quell’s label has a handling line worth following on every use: {tip}. In a kitchen, that means never setting the open bottle down on a cutting board, the pass or a steel counter.`,
      },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses line reads: {uses}. The directions: {directions}. For a cook, that might mean one drop before the shift, one at family meal and one after you clock out. Don’t put drops in while you’re on the line or handling food.`,
      },
      { h: 'Keep the bottle off the line' },
      {
        p: `A kitchen is one of the worst places to store a bottle of eye drops. The carton’s storage line reads: {storage}. The shelf above a range, the space near a fryer or a hot apron pocket can all run well past 86°F during service. Instead:`,
      },
      {
        list: [
          `Keep the bottle in your locker, bag or jacket in the break area.`,
          `If there’s no locker, a closed bag on a shelf in the office or dry storage away from ovens works.`,
          `Don’t keep it in the walk-in, where food safety rules usually keep personal items out anyway.`,
          `Bring it home at the end of the night instead of leaving it in a hot car.`,
        ],
      },
      {
        p: `Before each use, glance at the bottle. The label’s “Do not use” line reads: {doNotUse}. The full panel is on our [Drug Facts page](/drug-facts), including the egg and bird allergy caution, which is worth knowing about for anyone in a kitchen full of eggs.`,
      },
      { h: 'Days off and recovery' },
      {
        p: `Many cooks notice their eyes feel better after two days away from the line. If yours don’t, that tells you something besides the kitchen may be going on. On days off, keep up the habits that help: full blinks during screen time, vents off your face at home and sunglasses outdoors. Our guide on [how to use eye drops as directed](/guides/how-to-use-eye-drops-as-directed) walks through getting each drop in cleanly.`,
      },
      { h: 'When to see a doctor' },
      {
        p: `A burn, splash, cut or something stuck in the eye needs urgent care, not a lubricating drop. Eyes that stay dry, sore or blurry even on days off also deserve a visit to an eye doctor. Per the label: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do chefs get dry eyes?',
        a: `Radiant heat from grills and ranges, hood fans moving air past the face, smoke and long shifts with little blinking all speed up tear evaporation. Fumes from onions and chilies add irritation on top.`,
      },
      {
        q: 'Where should a line cook keep eye drops during a shift?',
        a: `In a locker, bag or jacket in the break area, away from ranges, fryers and ovens. Quell’s carton reads: {storage}. Spots near the line get hotter than that during service.`,
      },
      {
        q: 'What should I do if hot pepper gets in my eye at work?',
        a: `Flush the eye with clean, cool water at the eyewash station or sink right away and don’t rub it. If pain or blurry vision doesn’t settle, see a doctor; a lubricating drop isn’t a rinse.`,
      },
      {
        q: 'Can smoke from a grill irritate your eyes?',
        a: `Yes. Grill smoke stings and makes eyes water, and working right under a hood also dries them. Angling away from the grill and keeping hood filters clean helps.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-call-center-workers',
    title: 'Dry eyes for call center workers',
    description:
      'Screens, chilly air conditioning and back-to-back calls dry out call center workers’ eyes. Desk setup, micro-breaks between calls and how drops fit a shift.',
    category: 'using',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Call center work dries the eyes through hours of focused screen time with few full blinks, air-conditioned or heated air that keeps circulating, bright overhead lighting and breaks that are short and scheduled. Set up your monitor and light so you’re not straining, use the seconds between calls to blink and look away, keep air vents off your face, and if you use a lubricating drop, time it around your scheduled breaks.`,
      },
      { h: 'Why a call center floor is hard on eyes' },
      {
        p: `A typical shift means watching a CRM screen, a chat queue and a call timer at once while you listen. That kind of focus lowers your blink rate, and the blinks you do make are often incomplete. Large open floors usually run central air conditioning or heat around the clock to keep a few hundred workstations comfortable, so the air near your desk is always moving and often dry.`,
      },
      {
        p: `Then there’s the structure of the job. Adherence metrics, after-call work timers and scheduled breaks make it hard to step away whenever your eyes feel gritty. The fixes have to fit inside the workflow you already have.`,
      },
      { h: 'Setting up your workstation' },
      {
        p: `Many centers use shared desks, so you may need to adjust your station at the start of each shift. It’s worth the two minutes:`,
      },
      {
        list: [
          `Raise or lower the monitor so the top of the screen is at or slightly below eye level; looking slightly down keeps more of the eye covered by the lid.`,
          `Push the monitor back to roughly arm’s length.`,
          `Turn screen brightness to roughly match the room, and bump up text size if you’re leaning in to read.`,
          `Tilt the monitor so overhead fluorescent lights don’t reflect off it.`,
          `Check for a ceiling vent directly above you; if there is one, ask whether you can sit elsewhere or have it adjusted.`,
          `Clean the screen, since smudges make you stare harder.`,
        ],
      },
      {
        p: `Our guide to [eye drops for computer users](/guides/eye-drops-for-computer-users) has more on monitor placement for desk jobs in general.`,
      },
      { h: 'Using the seconds between calls' },
      {
        p: `You may not get to leave your desk, but there’s usually a moment between calls. Small resets help more than you’d think:`,
      },
      {
        list: [
          `When a call ends, close your eyes for two slow breaths before taking the next one.`,
          `During hold time, look past your monitor to the far wall and blink fully a few times.`,
          `While the customer is talking and you don’t need the screen, look away from it.`,
          `Use a general habit many desk workers rely on: every 20 minutes, look at something about 20 feet away for about 20 seconds.`,
          `Keep a water bottle on the desk; talking for hours dries out your mouth and reminds you to drink.`,
        ],
      },
      { h: 'Headsets, lighting and the air around you' },
      {
        p: `A headset doesn’t affect your eyes directly, but its cord or a mic boom can keep you sitting in one position for hours, facing the screen. Shift your posture and chair angle now and then so you’re not locked in one spot.`,
      },
      {
        p: `Bright overhead fluorescent lighting, common on call center floors, makes some people squint, and squinting reduces full blinks. If your center allows it, a desk lamp with warmer light and dimmed screen brightness can make the station more comfortable. Air conditioning in summer and forced-air heat in winter both dry the air; a personal desk humidifier may or may not be allowed, so ask your supervisor or facilities team before bringing one.`,
      },
      { h: 'Fitting eye drops into a scheduled shift' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label’s Uses line reads: {uses}. The directions are: {directions}. On a call center schedule, that maps neatly onto your day:`,
      },
      {
        list: [
          `Before you log in, at the start of the shift.`,
          `On your lunch break, after washing your hands.`,
          `After you log out, or on your last break if the shift runs late.`,
        ],
      },
      {
        p: `Using breaks rather than putting drops in between calls gives any brief blur time to clear before you’re reading a screen again, and gives you a chance to wash up first. Follow the handling line each time: {tip}. Don’t share a bottle with a coworker, even a friendly one at the next desk.`,
      },
      { h: 'Where to keep your bottle at work' },
      {
        p: `The carton’s storage line reads: {storage}. A desk drawer, locker or bag at your workstation is usually fine, since most call centers stay within that range. Avoid leaving the bottle on a sunny windowsill or in a hot car in summer. The label’s “Do not use” line reads: {doNotUse}. Read the full panel on our [Drug Facts page](/drug-facts), including the egg and bird allergy caution, before you start.`,
      },
      { h: 'Ordering for yourself or the team' },
      {
        p: `Quell ships from Brentwood, Tennessee, to addresses anywhere in the US. You can check out as a guest; shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We don’t promise a delivery date, but you’ll get a tracking email when it ships. Unopened bottles can be refunded within {returnDays} days of delivery, with nothing to send back. Order from the [home page](/#buy).`,
      },
      { h: 'When it’s more than a long shift' },
      {
        p: `If your eyes keep bothering you on days off, or you notice pain, light sensitivity or changes in vision, see an eye doctor instead of relying on drops. The label puts it this way: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working in a call center?',
        a: `Focused screen work lowers your blink rate, and big open floors keep air-conditioned or heated air moving all shift. Bright overhead lighting and short, scheduled breaks make it harder to rest your eyes.`,
      },
      {
        q: 'How can I rest my eyes between calls?',
        a: `When a call ends, close your eyes for a couple of breaths. During hold time or while a customer talks, look past the monitor and blink fully a few times.`,
      },
      {
        q: 'Is it okay to use eye drops at my desk at work?',
        a: `If the drops suit you, using them on scheduled breaks works well, after washing your hands. That gives any brief blur time to clear before you’re back on a call.`,
      },
      {
        q: 'Can I bring a humidifier to my call center desk?',
        a: `That depends on your workplace rules, so ask your supervisor or facilities team first. Many shared floors limit personal appliances at workstations.`,
      },
    ],
  },
  {
    slug: 'when-to-use-eye-drops-during-the-day',
    title: 'When should I use eye drops during the day?',
    description:
      'Quell’s label says 1 drop 3 times a day but names no clock times. How to space doses across a workday, tie them to habits and keep track.',
    category: 'using',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Quell’s directions read: {directions}. They don’t name specific times. Most people spread the three doses across waking hours: one in the morning, one around midday and one in the evening. Tying each dose to something you already do, like breakfast, lunch and brushing your teeth, makes the schedule easy to keep. Ask a pharmacist before using more than the label directs.`,
      },
      { h: 'What the label says, and what it leaves to you' },
      {
        p: `The directions on the Drug Facts panel read: {directions}. That’s the whole instruction about timing. The label doesn’t say to use drops with meals, before bed, at set hours or a set number of hours apart. It leaves the scheduling to you, which is useful, since a nurse on night shift and a teacher on a school schedule live very different days.`,
      },
      {
        p: `What the label does fix is the count. Three times per day is the ceiling it sets, so planning when to use those three matters more than it might seem. If you wonder about going beyond that, read our guide to [whether you can use more than three drops a day](/guides/can-i-use-more-than-three-drops-a-day), and talk to a pharmacist before you do.`,
      },
      { h: 'A simple morning, midday and evening plan' },
      {
        p: `For a regular daytime schedule, spacing the doses fairly evenly covers the hours when your eyes are open and working. A starting point for someone awake from about 7 a.m. to 11 p.m.:`,
      },
      {
        list: [
          `Morning: after washing your face and before you start screens or the commute.`,
          `Midday: on your lunch break, roughly halfway through your waking hours.`,
          `Evening: after dinner, or an hour or so before bed, once the day’s screen work is done.`,
        ],
      },
      {
        p: `Even spacing isn’t a rule, just a reasonable default. Some people find their eyes feel driest late in the afternoon and shift the second dose a little later. Whatever times you pick, stick with roughly the same ones each day so it becomes routine.`,
      },
      { h: 'Building doses around your workday' },
      {
        p: `The times your eyes work hardest are a good guide. Think about where your day puts strain on them:`,
      },
      {
        list: [
          `Desk workers often feel it most in the afternoon after hours at a screen. A midday dose before the afternoon block can make sense.`,
          `Drivers and commuters can use a dose before leaving, never while driving.`,
          `Teachers, nurses and retail workers on their feet may only get a scheduled break or two, so pick doses that line up with those breaks.`,
          `Shift workers can count from when they wake up rather than from the clock: a dose on waking, one mid-shift and one before sleep.`,
          `On weekends, keep roughly the same pattern even if the hours slide later.`,
        ],
      },
      { h: 'Pair each dose with a habit' },
      {
        p: `Remembering three doses a day is easier when each one is tied to something you already do. Habit pairing is simple:`,
      },
      {
        list: [
          `Keep one bottle beside your toothbrush and use it right after brushing in the morning.`,
          `Set your second dose for right after you wash your hands before lunch.`,
          `Make the evening dose part of winding down: after you plug in your phone, or after you set out tomorrow’s clothes.`,
          `If you forget often, set three quiet phone alarms with labels you’ll recognize.`,
        ],
      },
      {
        p: `If you carry the bottle with you, keep it in a bag or pocket where it stays in the labeled range: {storage}. And follow the handling line every time: {tip}.`,
      },
      { h: 'Should I space eye drops evenly?' },
      {
        p: `Roughly, yes, but nothing on the label asks for exact intervals. Using two doses ten minutes apart and nothing for the rest of the day leaves long stretches uncovered. On the other hand, there’s no need to set a timer for every five hours and twenty minutes. Spread them across the time your eyes are open, and you’re following the directions as written.`,
      },
      { h: 'If you miss a dose' },
      {
        p: `The label doesn’t give missed-dose instructions. A sensible approach is to use the next dose when you remember, keep the total for the day within what the label directs, and pick your regular timing back up the next morning. Don’t double up to make up for a missed one. If you have questions about your own situation, a pharmacist can answer them quickly, usually without an appointment.`,
      },
      { h: 'Keep a simple log' },
      {
        p: `For the first week or two, it helps to write down when you used a drop and how your eyes felt. That shows you which times work, whether one part of the day stays rough, and whether you’re keeping to three doses. Our guide to [keeping an eye drop log](/guides/keeping-an-eye-drop-log) has a format that takes seconds a day. Bring the log along if you see a pharmacist or eye doctor; it answers their first questions for you.`,
      },
      { h: 'Nights, contact lenses and other drops' },
      {
        p: `Some people ask about using a drop in the middle of the night. The label doesn’t address timing like that, and three doses during waking hours fits the directions as written. If you wear contact lenses or use other eye drops, the label doesn’t cover how to time Quell around them, so ask your eye doctor or pharmacist before setting a schedule. Our guide to [using Quell with other eye drops](/guides/using-quell-with-other-eye-drops) explains why.`,
      },
      { h: 'When timing isn’t the issue' },
      {
        p: `If your eyes stay uncomfortable no matter how you space the doses, that’s worth a conversation with an eye doctor rather than a new schedule. The label sets a clear limit: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What times should I put in eye drops each day?',
        a: `Quell’s label doesn’t name times. Most people spread the three daily doses across waking hours, such as morning, midday and evening, and tie each to a habit like breakfast or lunch.`,
      },
      {
        q: 'Should eye drops be used at the same time every day?',
        a: `It isn’t required by the label, but keeping roughly the same times makes the doses easier to remember and spreads them across the day.`,
      },
      {
        q: 'What if I forget a dose of eye drops?',
        a: `The label doesn’t cover missed doses. Use the next one when you remember, stay within three doses for the day and don’t double up; a pharmacist can help with specifics.`,
      },
      {
        q: 'Do I need to space eye drops evenly through the day?',
        a: `Roughly, so the doses cover the hours your eyes are open. Exact intervals aren’t on the label, so spreading them sensibly across your day follows the directions.`,
      },
    ],
  },
  {
    slug: 'can-you-use-eye-drops-with-other-medications',
    title: 'Can you use eye drops while taking other medications?',
    description:
      'Quell’s label doesn’t address other medicines. Why to tell your pharmacist and doctor about every product you use, OTC eye drops included, and what to bring.',
    category: 'using',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Quell’s label doesn’t say anything about using it alongside pills or other medicines, so the right person to ask is your pharmacist or doctor. Tell them everything you take, including over-the-counter eye drops, vitamins and supplements, and bring the bottle or a copy of the Drug Facts panel. For other eye drops, the label doesn’t cover combining them either, so ask before using two at once.`,
      },
      { h: 'What Quell’s label covers and doesn’t' },
      {
        p: `An over-the-counter Drug Facts panel tells you a product’s active ingredients, uses, warnings and directions. Quell’s label lists its actives as {actives}, and its Uses line reads: {uses}. The warnings section includes this caution: {warnings}.`,
      },
      {
        p: `What the label doesn’t include is any statement about other medicines, whether that’s a blood pressure pill, an antihistamine or another eye drop. That silence isn’t a promise that every combination is fine, and it isn’t a warning either. It means the question belongs with someone who can look at your full list. You can see the complete panel on our [Drug Facts page](/drug-facts).`,
      },
      { h: 'Why your pharmacist wants to know about eye drops' },
      {
        p: `People often leave eye drops, creams and vitamins off a medication list because they don’t think of them as “real” medicine. Pharmacists and doctors want to know about them anyway. Their job is to look at everything you use together, and they can only do that with the full list in front of them instead of guessing.`,
      },
      {
        p: `It also helps with the reverse question. If you start a new prescription and notice your eyes feel different, a pharmacist who knows you’re using a lubricating drop can help you sort out whether the timing is a coincidence.`,
      },
      { h: 'What to bring to the pharmacy counter' },
      {
        p: `A pharmacist can answer most questions in a few minutes at the counter, often without an appointment. Make it easy for them:`,
      },
      {
        list: [
          `The Quell bottle or carton, or the Drug Facts page open on your phone.`,
          `A list of every prescription you take, with the dose and how often.`,
          `Any other over-the-counter medicines, including pain relievers, allergy pills and sleep aids.`,
          `Vitamins, supplements and herbal products.`,
          `Any other eye drops or ointments, prescription or not.`,
          `Your eye drop log, if you keep one, showing when you use each product.`,
        ],
      },
      {
        p: `If you use one pharmacy for everything, they may already have your prescriptions on file, but they won’t know about over-the-counter purchases unless you tell them.`,
      },
      { h: 'Can you use eye drops with other eye drops?' },
      {
        p: `This is the most common version of the question, and the answer is the same: Quell’s label doesn’t give directions for using it with another eye drop. That includes prescription drops and other lubricating drops. Ask your eye doctor or pharmacist before combining them; they can tell you whether to use both and, if so, how to time them. Our guide to [using Quell with other eye drops](/guides/using-quell-with-other-eye-drops) explains this in more detail.`,
      },
      { h: 'If you see more than one doctor' },
      {
        p: `People who see a primary care doctor, an eye doctor and a specialist often find that no single office has the whole list. Before each appointment:`,
      },
      {
        list: [
          `Update your written list with anything new, including OTC products.`,
          `Hand it to the nurse or doctor at the start of the visit.`,
          `Mention eye drops specifically, since they’re easy to forget.`,
          `Ask whether any new prescription changes how you should use the products you already take.`,
        ],
      },
      { h: 'Ingredients worth mentioning' },
      {
        p: `If your pharmacist wants details, the label lists actives as {actives} and inactive ingredients as: {inactives}. Mention any allergies along with your medicines, since the label carries an egg and bird allergy caution. Our [ingredient guide](/guides/topic/formula) goes through what each one is.`,
      },
      { h: 'Using Quell once you’ve checked' },
      {
        p: `Once your pharmacist or doctor is comfortable with it, follow the label’s directions: {directions}. Wash your hands, follow the handling line ({tip}), and store the bottle as the carton says: {storage}. Don’t share it with anyone else, including family members who take their own medications.`,
      },
      {
        p: `The label also covers accidental swallowing: {swallowed}.`,
      },
      { h: 'Signs to stop and check in' },
      {
        p: `If your eyes feel worse after starting a new medicine or after adding Quell, call your pharmacist or doctor. The label’s stop line applies regardless of what else you take: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the signs not to wait on.`,
      },
    ],
    faq: [
      {
        q: 'Can eye drops interact with other medications?',
        a: `Quell’s label doesn’t address interactions with other medicines. Tell your pharmacist and doctor about every product you use, including OTC eye drops, so they can check your full list.`,
      },
      {
        q: 'Should I tell my doctor I use over-the-counter eye drops?',
        a: `Yes. Doctors and pharmacists want a complete list of what you take, including OTC drops, vitamins and supplements, so mention them at every visit.`,
      },
      {
        q: 'Can I use eye drops while taking blood pressure medicine?',
        a: `Quell’s label doesn’t cover use with any other medicine. Ask your pharmacist or doctor, and bring the bottle or the Drug Facts panel so they can see the ingredients.`,
      },
      {
        q: 'What should I bring when asking a pharmacist about eye drops?',
        a: `Bring the bottle or carton, a list of all your prescriptions and OTC medicines, supplements, any other eye products and your allergy history.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-tattoo-artists',
    title: 'Dry eyes for tattoo artists',
    description:
      'Hours of close focus under bright lamps leave tattoo artists with dry, tired eyes. Station lighting, session breaks and clean eye drop habits between clients.',
    category: 'using',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Tattoo artists get dry, tired eyes from hours of close, unbroken focus on fine linework, which cuts down on blinking, plus bright task lamps, ventilation in the studio and long sessions with few breaks. Position your lamp to cut glare, schedule short pauses into long pieces, look into the distance between passes, and keep eye drop use strictly to clean hands, off the clock and away from your station.`,
      },
      { h: 'Why tattooing is so hard on the eyes' },
      {
        p: `Pulling a clean line or packing shading means locking your gaze onto a small patch of skin, often a foot or less from your face, for minutes at a time. Concentration like that lowers your blink rate, and the blinks you do make tend to be shallow. Over a four- or six-hour session, the eye’s surface spends a lot of time uncovered.`,
      },
      {
        p: `Studios add to it. Bright LED lamps and ring lights make detail visible but also make people squint. Air purifiers, fans and air conditioning keep the room comfortable for clients and help with fumes from cleaning products, but they also move air across your face as you lean over the work.`,
      },
      { h: 'Setting up lighting and your station' },
      {
        p: `A few adjustments reduce strain without changing how you work:`,
      },
      {
        list: [
          `Aim the lamp at the skin, not toward your eyes, and keep it slightly behind your shoulder rather than in front of your face.`,
          `Use diffused, even light to cut glare off glossy skin, stencil gel and wrap.`,
          `Turn any fan or purifier so the airflow doesn’t cross your face while you work.`,
          `Raise the client’s chair or table so you’re not hunched with your eyes inches from the skin.`,
          `If you use magnifying loupes or glasses, make sure they’re set to your working distance, so you’re not straining to focus.`,
        ],
      },
      { h: 'Building breaks into long pieces' },
      {
        p: `Clients need breaks too, which gives you natural stopping points. Plan them in, rather than pushing through:`,
      },
      {
        list: [
          `Every 45 to 60 minutes, put the machine down and let the client stretch.`,
          `During each break, look across the room or out a window for a minute and blink fully several times.`,
          `Close your eyes for a few breaths while the client shifts position.`,
          `On all-session days, take a longer break midway, and step outside if you can.`,
          `Drink water; long sessions are dehydrating for artists as well as clients.`,
        ],
      },
      { h: 'Gloves, hygiene and your own eyes' },
      {
        p: `Tattoo artists know cross-contamination better than almost anyone, and the same instincts apply to your eyes. Never touch your eyes or face with gloved hands mid-session. If your eyes feel gritty while working, finish the pass, set down the machine, remove your gloves, wash your hands and then deal with it. Re-glove before going back to the work.`,
      },
      {
        p: `That also means keeping eye drops completely separate from your station. Don’t store a bottle on the tray, near the ink caps or anywhere in the clean field. Keep it in a bag or drawer away from the work area.`,
      },
      { h: 'Using eye drops between clients' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses line reads: {uses}. The directions are: {directions}. For an artist, that fits nicely around the day: once before the first client, once between appointments and once after you close up.`,
      },
      {
        p: `Before using it, wash your hands thoroughly with soap, and dry them with a clean paper towel. The label’s handling line is the same principle you follow with needles and tubes: {tip}. Give your eyes a minute after a drop before starting precise work, so any brief blur clears. Our guide to [how to use eye drops as directed](/guides/how-to-use-eye-drops-as-directed) walks through getting the drop in cleanly.`,
      },
      { h: 'Storing the bottle in a studio' },
      {
        p: `The carton’s storage line reads: {storage}. Studios usually stay within that range, but a bottle left near a heat lamp, an autoclave or a sunny front window can get warmer. A drawer or bag in the back room works. Before each use, check the label’s “Do not use” line: {doNotUse}. Read the full [Drug Facts panel](/drug-facts), including the egg and bird allergy caution, before starting.`,
      },
      { h: 'Screens, design time and days off' },
      {
        p: `Much of a tattoo artist’s work happens away from the chair: drawing on a tablet, answering booking messages, editing photos for social media. That’s more close-up screen time. On design days, use the same habits: look away regularly, blink fully and keep brightness in line with the room. Our guide to [eye drops for computer users](/guides/eye-drops-for-computer-users) has more on screen setup.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay dry or sore on days off, if fine detail starts looking blurry, or if you get something in your eye at work, see an eye doctor. Your eyes are your livelihood, and working out the cause of ongoing symptoms is their job, not a drop’s. The label sets a clear line: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do tattoo artists get dry eyes?',
        a: `Hours of close focus on fine detail lower the blink rate, and bright lamps and studio airflow add to tear evaporation. Long sessions with few breaks make it worse.`,
      },
      {
        q: 'Can tattoo artists use eye drops during a session?',
        a: `Only during a break, after removing gloves and washing hands, with the bottle kept well away from the clean field. Let any brief blur clear before going back to precise work.`,
      },
      {
        q: 'What lighting is easiest on the eyes for tattooing?',
        a: `Diffused, even light aimed at the skin and placed slightly behind your shoulder cuts glare and squinting. Avoid lamps shining toward your face.`,
      },
      {
        q: 'How often should tattoo artists take breaks to rest their eyes?',
        a: `Many artists pause every 45 to 60 minutes, which also suits clients. Use each break to look into the distance and blink fully for a minute.`,
      },
    ],
  },
  {
    slug: 'how-long-does-it-take-for-eye-drops-to-work',
    title: 'How long does it take for eye drops to work?',
    description:
      'Quell’s label doesn’t state a time to effect. What to notice after a drop, how to give it a fair try, and the 72-hour point where the label says stop.',
    category: 'choosing',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Quell’s label doesn’t say how quickly it works, and no honest answer can give you a number of minutes. What you can do is follow the directions consistently for a few days, notice how your eyes feel at different times, and know the label’s 72-hour stop point, which tells you when to stop using it and ask a doctor.`,
      },
      { h: 'What Quell’s label actually says' },
      {
        p: `The Drug Facts panel is the place to start. The Uses line reads: {uses}. The directions are: {directions}. Nowhere does the label promise relief in a certain number of seconds or minutes, or say how long the effect of a drop holds.`,
      },
      {
        p: `That’s by design. A Drug Facts label sticks to what the product is for and how to use it. You’ll see labels for some products mention temporary relief; our guide to [what temporary relief means on eye drop labels](/guides/what-temporary-relief-means-on-eye-drops) explains that phrase and why speed claims don’t belong on a label.`,
      },
      { h: 'What you might notice after a drop' },
      {
        p: `Without promising anything, here’s what people tend to pay attention to in the first moments after putting a drop in:`,
      },
      {
        list: [
          `A brief blur as the drop spreads across the eye; blinking a few times usually clears it. Our guide on [blurry vision after eye drops](/guides/is-it-normal-for-vision-to-blur-after-eye-drops) covers this.`,
          `A cool or wet feeling, which is simply the liquid on the eye.`,
          `Whether gritty or scratchy sensations ease compared with before the drop.`,
          `How the eyes feel an hour or two later, during whatever you were doing that bothered them.`,
        ],
      },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Since the oil layer slows evaporation over time, judging it by the first ten seconds misses the point. Pay attention to how your day goes, not just the moment after the drop.`,
      },
      { h: 'Give the directions a fair trial' },
      {
        p: `One drop on one bad afternoon isn’t a test. To get a real sense of whether a lubricating drop suits you:`,
      },
      {
        list: [
          `Use it as the label directs, three times a day, for several days in a row.`,
          `Keep your routine otherwise similar, so you’re comparing like with like.`,
          `Note the times of day your eyes feel dry, and whether that changes.`,
          `Write it down; our guide to [keeping an eye drop log](/guides/keeping-an-eye-drop-log) shows a quick way.`,
          `Change the things around you as well: vents off your face, screen breaks, a humidifier in winter.`,
        ],
      },
      {
        p: `Don’t respond to slow results by using more. The directions set three doses a day, and our guide on [using more than three drops a day](/guides/can-i-use-more-than-three-drops-a-day) explains why to talk to a pharmacist first.`,
      },
      { h: 'Why the 72-hour line matters' },
      {
        p: `The label includes a clear stopping point: {stopUse} That’s the closest the label comes to a timeline, and it runs in the opposite direction from the one people expect. It isn’t telling you how fast relief arrives. It’s telling you when to stop and get help if things haven’t improved.`,
      },
      {
        p: `In practice, if you’ve been using the drop as directed and three days later your irritation is the same or worse, that’s your cue to talk to a doctor rather than keep going. Our guide to [why the label mentions 72 hours](/guides/why-the-label-mentions-72-hours) explains the reasoning in more detail.`,
      },
      { h: 'Why one person notices a change and another doesn’t' },
      {
        p: `How a lubricating drop feels varies a lot from person to person. Some reasons a drop may seem to do little:`,
      },
      {
        list: [
          `The surroundings are working against it, such as a vent blowing at your face or ten hours on a screen without breaks.`,
          `The drop isn’t landing in the eye; a missed drop on the cheek doesn’t count.`,
          `Doses are bunched together rather than spread across the day.`,
          `The discomfort has a cause a drop doesn’t address, which is something only an eye doctor can work out.`,
        ],
      },
      {
        p: `Our guide on [why eyes still feel dry after eye drops](/guides/why-do-my-eyes-still-feel-dry-after-eye-drops) goes through these in more depth.`,
      },
      { h: 'What the bottle should look like' },
      {
        p: `Before judging results, make sure the bottle is in good shape. {appearance} The label’s “Do not use” line reads: {doNotUse}. And it should be stored as the carton directs: {storage}. A bottle that spent a week in a hot car isn’t a fair test.`,
      },
      { h: 'When waiting longer isn’t the answer' },
      {
        p: `Don’t wait out pain, changes in your vision or symptoms that are getting worse. Those need a doctor promptly, regardless of how many days you’ve been using a drop. The [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) list covers what not to put off. Before buying, you can read the full panel on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'How fast do lubricating eye drops work?',
        a: `Quell’s label doesn’t give a time, so there’s no honest number to quote. Use it as directed for several days and pay attention to how your eyes feel through the day.`,
      },
      {
        q: 'How do I know if my eye drops are working?',
        a: `Track how your eyes feel at the times they usually bother you over several days of using the drop as directed. A short log makes changes easier to see.`,
      },
      {
        q: 'How many days should I try eye drops before seeing a doctor?',
        a: `Quell’s label sets the limit this way: {stopUse} Don’t wait out pain or vision changes.`,
      },
      {
        q: 'Should I use more eye drops if they don’t seem to work?',
        a: `No. The label’s directions are: {directions}. Ask a pharmacist before using more, and see a doctor if symptoms continue.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-referees-and-coaches',
    title: 'Dry eyes for referees and coaches',
    description:
      'Wind, cold, stadium lights and all-weekend tournaments dry out referees’ and coaches’ eyes. Sideline habits and how to carry eye drops in cold weather.',
    category: 'using',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Referees and coaches get dry eyes from hours outdoors in fall and winter wind and cold, staring at fast play without blinking, bright stadium lights at night and long tournament days with few real breaks. Wear wraparound sunglasses when you can, blink fully during stoppages, step out of the wind at halftime, and carry any eye drops in an inside jacket pocket, where they stay within the labeled storage range.`,
      },
      { h: 'Why officiating and coaching dry the eyes' },
      {
        p: `Watching a game closely means tracking a ball and players for minutes at a time. Referees especially can’t afford to miss a play, so they blink less, and the blinks they make are often incomplete. A football line judge, a soccer referee running the diagonal or a coach pacing the sideline all spend hours with their eyes open and fixed on the action.`,
      },
      {
        p: `Fall and winter sports add weather. Cold, dry wind across an open field strips moisture from the eye surface. A November soccer tournament or a Friday night football game can mean four hours outside in it. Your eyes water from the cold, then feel dry and scratchy once you’re home.`,
      },
      { h: 'Wind, cold and the open field' },
      {
        p: `You can’t move the game indoors, but a few habits help:`,
      },
      {
        list: [
          `Wear wraparound sunglasses for day games if your sport and league allow it; they cut wind as well as glare.`,
          `Position yourself with your back to the wind during dead balls and timeouts when you can.`,
          `A brimmed cap helps in sun and light rain, if uniform rules permit.`,
          `At halftime or between games, get out of the wind: a dugout, a car or a press box.`,
          `Bring a water bottle and actually drink from it, even when it’s cold.`,
        ],
      },
      { h: 'Night games under stadium lights' },
      {
        p: `High school football and evening club games bring bright banks of lights. Looking up at a punt or a high ball means staring toward the lights, which makes people squint and blink less fully. Between plays, look down at the turf or toward a darker area of the stands for a moment, and take a slow, full blink. Night games also tend to be colder and windier than afternoon ones, so dress for the hours you’ll actually be outside.`,
      },
      { h: 'Tournament days and back-to-back games' },
      {
        p: `A youth tournament can mean refereeing four or five games in a day, or coaching from 8 a.m. to dusk. The eye strain adds up. Between games:`,
      },
      {
        list: [
          `Close your eyes for a minute while you sit; it’s the closest thing to a reset you’ll get.`,
          `Look at something far away, like the tree line or the parking lot, instead of your phone.`,
          `Skip scrolling game film or schedules on your phone between matches; give your eyes a rest from screens too.`,
          `Wash your hands or use sanitizer before touching your eyes, since field dirt, chalk and sunscreen all end up on fingers.`,
        ],
      },
      { h: 'Using eye drops on game day' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is exactly what wind and cold accelerate. The label’s Uses line reads: {uses}. The directions: {directions}. On a game day, that might mean a drop before you leave home, one at the midday break and one after the last game.`,
      },
      {
        p: `Don’t put in a drop right before you need to make a call; give any brief blur time to clear first. Clean your hands, and follow the handling line on the label: {tip}. On a muddy field, that means never setting the open bottle down on a bench, clipboard or equipment bag.`,
      },
      { h: 'Keep the bottle warm enough, not too warm' },
      {
        p: `The carton’s storage line reads: {storage}. A bottle in a car parked at the fields through a cold November day, or left in an equipment bag on the sideline in freezing weather, can drop below that range. The opposite happens in an early fall heat wave, when a car interior climbs well past 86°F. The easy answer:`,
      },
      {
        list: [
          `Keep the bottle in an inside jacket pocket, where your body heat keeps it from getting too cold.`,
          `Don’t leave it in the glove box between weekends.`,
          `Bring it inside at home rather than leaving it in a referee bag in the garage.`,
          `Check it before use; the label’s “Do not use” line reads: {doNotUse}.`,
        ],
      },
      { h: 'Something in your eye on the field' },
      {
        p: `Turf pellets, dirt kicked up from a slide tackle, chalk from the lines and wind-blown grit are common on fields. If something gets in your eye, don’t rub it. Blink, let your eyes water and rinse with clean water from a bottle if needed. If it still feels like something’s there, or your vision is affected, leave the game to someone else and see a doctor. A lubricating drop isn’t a way to flush debris out. Our guide on [dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers) has more on working in wind and dust.`,
      },
      { h: 'Ordering before the season' },
      {
        p: `Quell ships from Brentwood, Tennessee, anywhere in the US. Checkout works as a guest; shipping is {shipping}, and orders of {freeBottles} or more bottles ship free. We don’t promise a delivery date, so order before tournament season rather than the week of. Unopened bottles can be refunded within {returnDays} days of delivery, with nothing to send back. Order from the [home page](/#buy) and read the [Drug Facts](/drug-facts) panel, including the egg and bird allergy caution, before starting.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay dry, sore or blurry well after the season ends, or if you have pain or vision changes, see an eye doctor. Good vision matters on the field, and working out the cause belongs to them. The label’s rule: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when refereeing?',
        a: `Tracking fast play lowers your blink rate, and fall and winter wind and cold speed up tear evaporation. Stadium lights and long tournament days add to the strain.`,
      },
      {
        q: 'Can referees wear sunglasses during games?',
        a: `It depends on your sport, league and level. Where they’re allowed, wraparound sunglasses cut both wind and glare; check your association’s rules.`,
      },
      {
        q: 'Where should coaches keep eye drops on cold game days?',
        a: `In an inside jacket pocket, where body heat keeps the bottle from getting too cold. Quell’s carton reads: {storage}. Avoid a cold car or a sideline bag.`,
      },
      {
        q: 'Should I use eye drops right before making a call?',
        a: `No, give any brief blur time to clear first. Use a drop before the game or during a break, with clean hands.`,
      },
    ],
  },
]
