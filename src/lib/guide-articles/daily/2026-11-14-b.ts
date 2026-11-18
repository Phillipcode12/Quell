import type { Guide } from '@/lib/guide-types'
export const DAILY_20261114_B: Guide[] = [
  /*
   * Sources fetched 2026-11-14 for dry-eye-relief-honolulu-hi:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00022521.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00022521.csv
   *   (HONOLULU INTL AP, elev 2.1 m: annual precip 16.41 in; 89.2 days with 0.01 in or more;
   *   Jun 0.50, Jul 0.52, Apr 0.77, Mar 2.36, Nov 2.25; Jan high 80.5 F, low 66.8;
   *   Aug high 88.8, low 75.6; 31.6 days at or above 90 F; 0 nights at or below 32 F;
   *   annual mean 78.0 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (HONOLULU, HI, WBAN 22521: Jan 79/61, Jun 69/53, Jul 70/53, Aug 71/52,
   *   annual 74/56, morning/afternoon)
   * - https://www.usgs.gov/observatories/hawaiian-volcano-observatory/frequently-asked-questions-about-volcanic-smog-vog
   *   (vog is SO2 gas plus aerosols; main wind direction in the islands is the northeast
   *   trade winds; SO2 and particles can cause eye irritation; Hawaii DOH monitors SO2
   *   on Hawaii Island, Oahu and Kauai)
   */
  {
    slug: 'dry-eye-relief-honolulu-hi',
    title: 'Dry eye relief in Honolulu, Hawaii',
    description:
      'Honolulu is humid, so why do eyes feel dry? NOAA’s numbers, trade winds, air conditioning and beach glare, plus a drop for everyday dryness on Oahu.',
    category: 'local',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Dry eye relief in Honolulu starts with the air that actually touches your eyes: steady trade winds outdoors and air conditioning indoors, both of which speed up tear evaporation even though the island feels humid. Keep vents and fans off your face, wear wraparound sunglasses at the beach, blink fully at screens, and use a lubricating drop exactly as labeled. Pain or blurred vision means seeing an eye doctor.`,
      },
      { h: 'What NOAA records at Honolulu’s airport' },
      {
        p: `NOAA’s 1991 to 2020 climate normals for Daniel K. Inouye International Airport describe a warm, fairly dry stretch of the south shore, sitting about 2 meters above sea level:`,
      },
      {
        list: [
          `Average temperature of 78.0°F across the whole year, with no nights at or below freezing.`,
          `January, the coolest month, has a normal high of 80.5°F and a low of 66.8°F.`,
          `August peaks at a normal high of 88.8°F and a low of 75.6°F, and the airport sees about 32 days a year at 90°F or warmer.`,
          `Only 16.41 inches of rain in a normal year, falling on roughly 89 days.`,
          `June is the driest month at 0.50 inches, and March the wettest at 2.36.`,
        ],
      },
      {
        p: `That airport figure describes the leeward coast. Windward Oahu and the Koʻolau slopes are far wetter, but most of urban Honolulu, from Kalihi through Waikīkī to Hawaiʻi Kai, sits on the drier leeward side.`,
      },
      { h: 'Humid mornings, drier afternoons' },
      {
        p: `NOAA’s relative humidity table for Honolulu shows mornings around 74 percent on average and afternoons near 56 percent. The low point comes in late summer, when August afternoons average 52 percent and June and July sit at 53. Winter afternoons are the dampest, at 61 percent in January.`,
      },
      {
        p: `Those figures are comfortable for skin, but humidity is only one part of how fast tears evaporate. Moving air matters just as much, and Honolulu has a lot of it.`,
      },
      { h: 'Trade winds and the beach' },
      {
        p: `The U.S. Geological Survey’s Hawaiian Volcano Observatory notes that the main wind direction across the islands is from the northeast: the trade winds. They cool the city and keep the air fresh, and they also pull moisture off the surface of your eyes every time you stand on a lanai, walk the Ala Wai, or sit on the sand at Ala Moana Beach Park.`,
      },
      {
        p: `Beach days stack several things together. Wind lifts fine sand, bright water makes you squint, and squinting replaces full blinks with partial ones. Salt water and sunscreen running into the eyes can sting. A few habits help:`,
      },
      {
        list: [
          `Wear sunglasses that wrap around the sides, so wind and sand can’t come in from the edges.`,
          `Sit with your back to the wind when you read or look at a phone.`,
          `Rinse sunscreen off your forehead before it drips, and use a stick formula around the eyes.`,
          `Take a few slow, complete blinks after a swim or a long stretch of squinting.`,
        ],
      },
      { h: 'Air conditioning, from offices to the car' },
      {
        p: `With highs in the 80s every month of the year, Honolulu runs its air conditioning in January as well as August. Offices downtown, hotel rooms in Waikīkī, the H-1 commute with dash vents aimed at your face, and window units in apartments all blow cool, dried air across the eyes for hours at a time.`,
      },
      {
        p: `Turning the vents toward your chest, keeping a desk fan pointed elsewhere, and lowering the bedroom unit’s fan speed at night are small changes that add up. Screens make it worse, since people blink less while they concentrate. Our guide to [screens and your tear film](/guides/screens-and-your-tear-film) explains why a short look across the room helps.`,
      },
      { h: 'When vog drifts in' },
      {
        p: `Vog is volcanic smog, a haze of sulfur dioxide gas and tiny particles that forms from volcanic emissions on Hawaiʻi Island. The USGS Hawaiian Volcano Observatory lists eye irritation among the effects of both the gas and the particles, and the Hawaiʻi State Department of Health runs sulfur dioxide monitors on Oahu as well as on the Big Island and Kauaʻi.`,
      },
      {
        p: `On a hazy day, spending more time indoors and keeping windows closed reduces exposure. A lubricating drop doesn’t filter or block vog. If your eyes burn, keep watering heavily, or start to hurt, that’s a reason to call an eye doctor rather than reach for another drop.`,
      },
      { h: 'How Quell fits into an Oahu routine' },
      {
        p: `The label’s Uses line reads: {uses}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the problem that wind and air conditioning both make worse. The directions say: {directions}. Before every drop, follow the handling line: {tip}.`,
      },
      {
        p: `Heat is the main storage concern on the island. The label says: {storage}. A parked car in Honolulu can climb far past that range, so keep a bottle in a bag you carry with you rather than in the glove box or a beach bag left baking on the sand. The warnings line reads: {warnings}. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering eye drops to Hawaii' },
      {
        p: `Quell ships within the United States from Brentwood, Tennessee, and Hawaii addresses are included. Shipping is {shipping}, orders of {freeBottles} or more bottles ship free, and no delivery date is promised, so it’s sensible to reorder before you’re down to the last bottle. Our guide to [shipping eye drops to Alaska or Hawaii](/guides/shipping-eye-drops-to-alaska-or-hawaii) covers the details, and the [Honolulu page](/eye-drops/honolulu-hi) and [Hawaii page](/eye-drops/state/hawaii) have more for local buyers.`,
      },
      { h: 'Signs it’s more than island air' },
      {
        p: `A drop is meant for everyday dryness and irritation. Working out the cause of discomfort that keeps coming back, and what to do about it, belongs to an eye doctor. The label spells out when to stop: {stopUse}`,
      },
      {
        p: `The short [dry eye self-check](/self-check) can help you decide on next steps; it’s not a diagnosis. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the warning signs that shouldn’t wait.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel dry in Hawaii when it’s so humid?',
        a: `In Honolulu, the trade winds and constant air conditioning move a lot of air across your eyes, and moving air speeds up tear evaporation. NOAA’s numbers also show afternoon humidity in the low to mid 50s in summer, drier than the island feels.`,
      },
      {
        q: 'Can vog make your eyes irritated?',
        a: `The USGS Hawaiian Volcano Observatory lists eye irritation among the effects of vog’s sulfur dioxide and particles. Staying indoors on hazy days helps; burning or painful eyes are a reason to see an eye doctor.`,
      },
      {
        q: 'How much rain does Honolulu get a year?',
        a: `NOAA’s 1991 to 2020 normals put Honolulu’s airport at 16.41 inches a year, spread over roughly 89 days. June is the driest month and March the wettest.`,
      },
      {
        q: 'Can I get Quell eye drops shipped to Honolulu?',
        a: `Yes. Quell ships within the United States from Brentwood, Tennessee, including to Hawaii. No delivery date is promised, so order before you run low.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-14 for dry-eye-relief-san-diego-ca:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00023188.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00023188.csv
   *   (SAN DIEGO LINDBERGH FLD, elev 4.6 m: annual precip 9.79 in; 40.3 days with 0.01 in
   *   or more; Feb 2.20, Jan 1.98, Dec 1.67; Jun 0.05, Jul 0.08, Aug 0.01; Jan high 66.4 F,
   *   low 50.3; Aug high 77.3, low 67.5; 3.0 days at or above 90 F; 0 nights at or below
   *   32 F; annual mean 64.7 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (SAN DIEGO, CA, WBAN 23188: Jan 69/58, Jul 80/67, Aug 80/67, Nov 68/60, Dec 67/59,
   *   annual 74/63, morning/afternoon)
   * - https://forecast.weather.gov/glossary.php?word=santa+ana
   *   (NWS glossary: strong, hot, dust-bearing winds that descend to the Pacific coast
   *   from inland desert regions)
   */
  {
    slug: 'dry-eye-relief-san-diego-ca',
    title: 'Dry eye relief in San Diego, California',
    description:
      'San Diego gets under 10 inches of rain a year, and Santa Ana winds dry the air further. NOAA’s numbers and practical dry eye relief for the county.',
    category: 'local',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Dry eye relief in San Diego means handling two very different kinds of air: the cool, damp ocean air most of the year, and the hot, dry Santa Ana winds that blow in from the desert, mostly in fall and winter. On Santa Ana days, stay out of the wind, keep car vents off your face and wear wraparound sunglasses. A lubricating drop used as labeled helps with everyday dryness; anything painful needs an eye doctor.`,
      },
      { h: 'San Diego by NOAA’s numbers' },
      {
        p: `NOAA’s 1991 to 2020 normals for Lindbergh Field, the airport station on the bay, describe one of the mildest climates in the country:`,
      },
      {
        list: [
          `An average temperature of 64.7°F for the year, and no nights at freezing.`,
          `January runs from a normal high of 66.4°F to a low of 50.3°F.`,
          `August is the warmest month, at 77.3°F by day and 67.5°F at night, and only about 3 days a year reach 90°F.`,
          `Just 9.79 inches of rain in a normal year, falling on about 40 days.`,
          `February is the wettest month at 2.20 inches; June, July and August together get less than a sixth of an inch.`,
        ],
      },
      {
        p: `That rainfall total puts the city closer to semi-desert than to most of coastal America. Inland, in El Cajon, Escondido or Ramona, summers run hotter and the air is drier, so what holds at the airport is the gentle end of the county’s range.`,
      },
      { h: 'The marine layer keeps the coast damp' },
      {
        p: `NOAA’s humidity table for San Diego shows why the coast rarely feels dry. Afternoon humidity averages 63 percent across the year, and summer is the dampest season, with July and August mornings at 80 percent and afternoons at 67. That’s the marine layer at work: cool, moist ocean air that often brings low clouds in late spring and early summer.`,
      },
      {
        p: `The drier months are the ones people least expect. November averages 68 percent in the morning and 60 in the afternoon, and December and January afternoons dip to 59 and 58. Those are also the months when the desert air sometimes wins.`,
      },
      { h: 'Santa Ana wind days' },
      {
        p: `The National Weather Service glossary describes Santa Ana winds as strong, hot, dust-bearing winds that come down to the Pacific coast from the inland deserts. Air that starts in the desert carries little moisture, and it warms further as it descends, so a Santa Ana day can feel nothing like the usual coastal morning.`,
      },
      {
        p: `For eyes, the combination is hard: dry air, steady wind and blowing dust, often with bright sun. A few adjustments help when the forecast calls for offshore winds:`,
      },
      {
        list: [
          `Wear sunglasses that wrap around, or close-fitting glasses, for walks and errands.`,
          `Run errands early, before the afternoon gusts pick up.`,
          `Keep windows closed and car air on recirculate so dust stays outside.`,
          `Point every vent, at home and in the car, away from your face.`,
          `If wildfire smoke is in the air, follow local air quality advice and stay inside.`,
        ],
      },
      { h: 'Beaches, bases and long commutes' },
      {
        p: `Plenty of daily San Diego life adds its own strain. Surfing and beach volleyball mean salt spray, glare and wind. Sailors and shipyard workers around the bay spend hours outside in sea breezes. Commuters on I-5 and I-15 spend long stretches staring at brake lights with the air on, and the biotech and defense offices around Sorrento Valley and Kearny Mesa mean full days at screens.`,
      },
      {
        p: `Screen work is worth a deliberate habit. Blinking slows down while you focus, and partial blinks don’t spread tears across the whole eye. Looking away and blinking slowly a few times every so often gives the tear film a chance to spread. Our guide to [dry air, wind and altitude](/guides/dry-air-wind-and-altitude) covers the outdoor side in more detail.`,
      },
      { h: 'Using a lubricating drop' },
      {
        p: `Quell’s Drug Facts panel gives its Uses as: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is what dry, moving air speeds up. Directions are simple: {directions}. Follow the handling line every time: {tip}.`,
      },
      {
        p: `Storage matters in Southern California sun. The label says: {storage}. A car parked at Mission Beach in August, or anywhere in the county during a Santa Ana heat wave, can run far past that, so carry the bottle in a bag rather than leaving it on the dashboard. The label also says: {warnings}. The whole panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Getting Quell in San Diego' },
      {
        p: `Quell isn’t sold in San Diego stores; it ships within the United States from Brentwood, Tennessee. Shipping is {shipping}, and orders of {freeThreshold} or more, which is {freeBottles} bottles, ship free. No delivery date is promised, so order ahead of a windy stretch rather than during one. The [San Diego page](/eye-drops/san-diego-ca) and the [California page](/eye-drops/state/california) have more for buyers here.`,
      },
      { h: 'When to skip the drop and see someone' },
      {
        p: `Lubricating drops are for everyday dryness and irritation, not for working out why your eyes hurt. That belongs to an eye doctor, especially after dust or debris gets into an eye during a windstorm. The label’s stop line is clear: {stopUse}`,
      },
      {
        p: `Our [dry eye self-check](/self-check) suggests next steps from a few questions; it’s not a diagnosis. For warning signs that shouldn’t wait, see [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
    ],
    faq: [
      {
        q: 'Do Santa Ana winds cause dry eyes?',
        a: `They can make dry eyes feel worse. The National Weather Service describes Santa Ana winds as hot, dust-bearing winds from the inland deserts, so they bring dry air, wind and dust together.`,
      },
      {
        q: 'How much rain does San Diego get a year?',
        a: `NOAA’s 1991 to 2020 normals put Lindbergh Field at 9.79 inches a year, on about 40 days. February is the wettest month, and summer is close to rainless.`,
      },
      {
        q: 'Is San Diego humid or dry?',
        a: `Both, depending on the day. NOAA’s figures show coastal afternoons averaging 63 percent humidity, dampest in summer, while Santa Ana winds can bring desert-dry air in fall and winter.`,
      },
      {
        q: 'Where can I buy preservative-free eye drops in San Diego?',
        a: `Quell ships to San Diego from Brentwood, Tennessee, with free shipping on {freeBottles} or more bottles. Orders are placed online, and no delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-14 for dry-eye-relief-sacramento-ca:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00023232.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00023232.csv
   *   (SACRAMENTO EXECUTIVE AP, elev 4.6 m: annual precip 18.14 in; 57.7 days with 0.01 in
   *   or more; Jan 3.66, Feb 3.49, Dec 3.43; Jul 0.00, Aug 0.04, Sep 0.09; Jul high 92.6 F,
   *   low 59.2; Dec high 56.0, low 38.5; 75.6 days at or above 90 F; 15.4 nights at or
   *   below 32 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (SACRAMENTO, CA, WBAN 23232: Jan 87/69, Jun 71/32, Jul 71/29, Aug 72/30, Sep 71/31,
   *   Dec 86/69, annual 78/45, morning/afternoon)
   * - https://forecast.weather.gov/glossary.php?word=tule+fog
   *   (NWS glossary: radiation fog in the Central Valley that forms during night and
   *   morning hours in late fall and winter after the first significant rainfall)
   */
  {
    slug: 'dry-eye-relief-sacramento-ca',
    title: 'Dry eye relief in Sacramento, California',
    description:
      'Sacramento summer afternoons average under 30 percent humidity. NOAA’s numbers, tule fog winters, and practical dry eye relief for the valley.',
    category: 'local',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Dry eye relief in Sacramento is mostly a summer project. July afternoons average 29 percent humidity, the city sees about 76 days a year at 90°F or hotter, and air conditioning runs for months. Keep vents and fans off your face, wear sunglasses outdoors, blink fully at screens and use a lubricating drop as its label directs. Pain or changes in vision need an eye doctor.`,
      },
      { h: 'Sacramento’s climate in NOAA’s figures' },
      {
        p: `NOAA’s 1991 to 2020 normals for Sacramento Executive Airport, in the south of the city near the Pocket and Land Park, show a classic Central Valley pattern: rain in winter and almost none in summer.`,
      },
      {
        list: [
          `About 18.14 inches of rain in a normal year, on roughly 58 days.`,
          `January is the wettest month at 3.66 inches, with February and December close behind.`,
          `July normally records no measurable rain at all, and August and September get less than a tenth of an inch between them.`,
          `July’s normal high is 92.6°F, with 75.6 days a year reaching 90°F or more.`,
          `December runs from 56.0°F down to 38.5°F, and about 15 nights a year reach freezing.`,
        ],
      },
      { h: 'Why July afternoons feel so dry' },
      {
        p: `NOAA’s humidity table for Sacramento has some of the steepest daily swings of any big California city. Summer mornings start around 71 percent, then afternoons fall to 32 percent in June, 29 in July, 30 in August and 31 in September. The annual afternoon average is 45 percent.`,
      },
      {
        p: `Air that dry, often with sun and a breeze off the Delta, pulls moisture from the eye’s surface quickly. Rafting the American River, riding the Jedediah Smith trail, a Saturday at a youth baseball tournament or working a farmers market stall in August all put your eyes in it for hours. Sunglasses that wrap around the sides, regular shade breaks and drinking enough water help on those days.`,
      },
      { h: 'Air conditioning from May to October' },
      {
        p: `With highs in the 80s by May and above 90 through much of July and August, the AC rarely gets a rest. Office buildings around the Capitol, state agency cubicles, cars on I-80 and Highway 50, and bedroom units at night add more dried, moving air on top of the dry air outside.`,
      },
      {
        list: [
          `Aim car vents at your chest or feet, not your face.`,
          `Move a desk away from a ceiling diffuser if you can, or ask for it to be redirected.`,
          `Keep bedroom fans off the pillow.`,
          `Look up from screens every so often and blink slowly a few times, since focus slows blinking.`,
        ],
      },
      {
        p: `Our guide to [dry eyes in a hot, dry workplace](/guides/dry-eyes-in-a-hot-workplace) has more on setting up a space you spend hours in.`,
      },
      { h: 'Tule fog winters and the heater' },
      {
        p: `Winter is the opposite. The National Weather Service glossary defines tule fog as radiation fog in the Central Valley that forms at night and in the morning during late fall and winter, after the first significant rain. NOAA’s table shows January and December mornings near 87 percent humidity and afternoons around 69. Outdoors, eyes rarely feel dry in fog.`,
      },
      {
        p: `Indoors is a different story. Forced-air heat warms air without adding water, so a house closed up against cold fog can still feel dry by evening. A humidifier in the bedroom and keeping heat registers from blowing at the couch or desk help. Fog also makes driving tiring: you stare hard at the road, blink less, and finish a foggy commute with tired, scratchy eyes.`,
      },
      { h: 'What the Quell label says' },
      {
        p: `The Uses line on the Drug Facts panel reads: {uses}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the core problem in Sacramento’s summer air. The directions read: {directions}. And before each drop: {tip}.`,
      },
      {
        p: `Summer heat is a storage problem too. The label says: {storage}. A car in a Sacramento parking lot in July gets far hotter than that, so keep the bottle in a bag that comes inside with you. The label’s “Do not use” line reads: {doNotUse}. You can read the full panel on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering to Sacramento' },
      {
        p: `Quell ships within the US from Brentwood, Tennessee, and checkout works without an account. Shipping is {shipping}, and {freeBottles} or more bottles ship free. We don’t promise delivery dates, so ordering before the first heat wave in June makes more sense than waiting for July. See the [Sacramento page](/eye-drops/sacramento-ca) and the [California page](/eye-drops/state/california) for more.`,
      },
      { h: 'When dryness isn’t the whole story' },
      {
        p: `A drop is for everyday dryness and irritation. If your eyes hurt, your vision changes, or the discomfort keeps returning, working out the cause belongs to an eye doctor. The label’s stop line: {stopUse}`,
      },
      {
        p: `If you’re undecided, the [dry eye self-check](/self-check) asks a few questions and points to next steps; it’s not a diagnosis. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the signs that need prompt attention.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Sacramento in the summer?',
        a: `Sacramento summer afternoons are very dry: NOAA’s figures put July at 29 percent humidity. Add heat, sun and long hours of air conditioning, and tears evaporate faster than usual.`,
      },
      {
        q: 'What is tule fog?',
        a: `The National Weather Service defines it as radiation fog in California’s Central Valley that forms at night and in the morning during late fall and winter, after the first significant rain.`,
      },
      {
        q: 'How hot does Sacramento get?',
        a: `NOAA’s 1991 to 2020 normals give Sacramento Executive Airport a July high of 92.6°F and about 76 days a year at 90°F or warmer.`,
      },
      {
        q: 'Does Quell ship to Sacramento, California?',
        a: `Yes. Quell ships within the United States from Brentwood, Tennessee. Orders of {freeBottles} or more bottles ship free, and no delivery date is promised.`,
      },
    ],
  },
  /*
   * FDA references removed 2026-11-18 at Phillip's request.
   */
  {
    slug: 'can-you-buy-eye-drops-with-an-hra',
    title: 'Can you buy eye drops with an HRA?',
    description:
      'Over-the-counter eye drops can count as an HRA expense, but your employer’s plan decides. What the IRS says, and how to claim a Quell order.',
    category: 'ordering',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Usually, yes, if your employer’s plan allows it. A health reimbursement arrangement (HRA) pays you back for qualified medical expenses, and since the CARES Act, the IRS counts over-the-counter medicines as qualified without a prescription. Quell is an over-the-counter drug, so it generally fits. Your plan document has the final word, and you’ll need an itemized receipt to submit a claim.`,
      },
      { h: 'How an HRA works' },
      {
        p: `An HRA is an account your employer sets up and funds. IRS Publication 969 says an HRA must receive contributions from the employer only; you can’t pay into it from your paycheck the way you can with some other health accounts. When you buy something that qualifies, you pay first and then ask the plan to reimburse you, and Publication 969 notes those reimbursements for qualified medical expenses aren’t taxed.`,
      },
      {
        p: `Because the employer funds it, the employer also writes the rules. Two coworkers at different companies can both have an HRA and still find that one plan reimburses over-the-counter items and the other covers only deductibles and copays. That’s why the plan’s summary matters more than any general article, including this one.`,
      },
      { h: 'What the CARES Act changed for over-the-counter medicine' },
      {
        p: `For close to a decade, over-the-counter medicines needed a prescription before an FSA or HRA could reimburse them. The IRS newsroom explains that the CARES Act changed the rules for HSAs, Archer MSAs, health FSAs and HRAs, making over-the-counter products and medications reimbursable without a prescription for amounts paid after December 31, 2019.`,
      },
      {
        p: `Publication 969 now states that over-the-counter medicine, whether or not it’s prescribed, counts as medical care. In plain terms: at the federal level, you don’t need a doctor’s note to have an over-the-counter eye drop reimbursed. Whether your particular plan has adopted that rule is the remaining question.`,
      },
      { h: 'Do lubricating eye drops count?' },
      {
        p: `Quell is sold over the counter with a standard Drug Facts panel, the same panel every nonprescription drug in the US carries. Its Uses line reads: {uses}. That makes it a medicine, not a cosmetic or a general wellness product, which is the distinction most plan administrators look for. You can see the whole panel on our [Drug Facts page](/drug-facts).`,
      },
      {
        p: `What we can’t tell you is how your administrator will code a specific purchase. Some plans keep a list of eligible product categories; others review each claim. If you’re unsure, ask the administrator before you order, or submit one claim and see how it’s handled before buying more.`,
      },
      { h: 'Check your plan first' },
      {
        p: `A few minutes with your benefits paperwork answers most questions. Look for these points:`,
      },
      {
        list: [
          `Whether over-the-counter medicines are listed as eligible, or whether the plan is limited to items like deductibles, copays or premiums.`,
          `Whether you file claims online, through an app, or on a paper form.`,
          `What the plan wants as proof: usually an itemized receipt showing the date, the seller, the product and the amount.`,
          `How long after a purchase you can submit a claim, and whether unused money carries over.`,
          `Whether the plan issues a benefits card that can be used at checkout, or only reimburses you afterward.`,
        ],
      },
      {
        p: `If your employer offers both an HRA and an FSA, the plan documents also say which pays first. Our guide on [HSA and FSA funds for eye drops](/guides/hsa-fsa-and-eye-drops) covers those accounts separately.`,
      },
      { h: 'Getting the receipt you’ll need' },
      {
        p: `The IRS advises keeping receipts for over-the-counter purchases so you can submit reimbursement claims. After you order Quell, the confirmation email lists what you bought and what you paid, and you can look up the order again at any time on the [order lookup page](/orders). [Getting a receipt for your order](/guides/getting-a-receipt-for-your-order) walks through finding it and what it shows.`,
      },
      {
        p: `Save it as a PDF or screenshot at the time of purchase rather than months later at claim time. If shipping was charged, keep in mind that some plans reimburse only the product line and not the shipping line, so the itemization helps the reviewer.`,
      },
      { h: 'Steps to claim a Quell order' },
      {
        list: [
          `Confirm with your plan that over-the-counter medicines are eligible.`,
          `Order through the [checkout](/#buy) as a guest; no account is needed.`,
          `Save the confirmation email or the order details from the lookup page.`,
          `Log in to your HRA portal and start a new claim for an over-the-counter medicine.`,
          `Upload the receipt and enter the purchase date and amount exactly as shown.`,
          `Keep a copy of the claim and the receipt in case the plan asks for it later.`,
        ],
      },
      {
        p: `If you return an unopened bottle for a refund within {returnDays} days of delivery, tell your plan, since you shouldn’t be reimbursed for something you were refunded for.`,
      },
      { h: 'If the claim is denied' },
      {
        p: `A denial usually comes down to one of three things: the plan doesn’t cover over-the-counter items, the receipt didn’t show enough detail, or the claim was filed outside the plan’s window. The denial notice should say which. If it’s documentation, resubmit with the itemized order details. If it’s the plan design, the HRA simply doesn’t reimburse that category, and an FSA or HSA, if you have one, may still work.`,
      },
      {
        p: `Questions about your order itself, such as needing a copy of the details, can go to our [contact page](/about#contact) or {phone} during {hours}. We can’t advise on taxes or your benefits; your plan administrator or a tax professional can.`,
      },
    ],
    faq: [
      {
        q: 'Are eye drops HRA eligible?',
        a: `Over-the-counter eye drops can be, because the IRS counts over-the-counter medicine as medical care without a prescription since the CARES Act. Your employer’s HRA plan still decides what it reimburses.`,
      },
      {
        q: 'Do I need a prescription to use my HRA for over-the-counter medicine?',
        a: `Not under federal rules for amounts paid after December 31, 2019, according to the IRS. Check your plan document, since an employer can still limit what its HRA covers.`,
      },
      {
        q: 'What receipt do I need for an HRA claim?',
        a: `Most plans want an itemized receipt with the date, seller, product and amount. For a Quell order, the confirmation email or the details on the order lookup page show all of that.`,
      },
      {
        q: 'Who puts money into an HRA?',
        a: `Only the employer. IRS Publication 969 says an HRA must receive contributions from the employer only, and qualified reimbursements from it aren’t taxed.`,
      },
    ],
  },
  {
    slug: 'buying-eye-drops-in-bulk',
    title: 'Buying eye drops in bulk',
    description:
      'Thinking of buying eye drops in bulk? Work out how fast you use a bottle, check expiration dates and storage, and know the free-shipping and refund rules.',
    category: 'ordering',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Buying eye drops in bulk makes sense when you use them every day and can finish each bottle before its expiration date. Work out how many bottles you go through in a month at the labeled dose, buy a few months’ worth, and store the extras within the label’s temperature range. With Quell, {freeBottles} or more bottles ship free, and unopened bottles can be refunded within {returnDays} days of delivery.`,
      },
      { h: 'Start with how fast you use a bottle' },
      {
        p: `The label’s directions read: {directions}. Following that, someone using drops daily in both eyes goes through a bottle much faster than someone who reaches for one only on windy days or long flights. Our guide on [how long a bottle of eye drops lasts](/guides/how-long-does-a-bottle-of-eye-drops-last) walks through the math for {size}.`,
      },
      {
        p: `A simpler method is to watch your own habits. Write the date on a new bottle’s carton when you open it, and note the date when it runs out. Two or three bottles in, you’ll know your real pace, which is what a bulk order should be sized on, rather than a guess.`,
      },
      { h: 'Why buy eye drops in bulk at all?' },
      {
        list: [
          `Fewer orders: one bigger order replaces several small ones.`,
          `Free shipping: Quell orders of {freeThreshold} or more, which is {freeBottles} bottles, ship free, while smaller orders pay {shipping}.`,
          `A spare where you need it: one bottle at home, one at work, one in a travel bag.`,
          `Less risk of running out: no delivery date is promised, so a cushion of unopened bottles covers the wait.`,
          `Seasonal planning: winter heating and summer air conditioning often mean using drops more regularly.`,
        ],
      },
      { h: 'Expiration dates on every bottle' },
      {
        p: `Bulk only works if you use each bottle before it expires. Every bottle and carton carries its own date, and it’s worth checking them when a box arrives and putting the earliest date at the front of the drawer. [Where to find the expiration date](/guides/where-is-the-expiration-date-on-eye-drops) shows what to look for.`,
      },
      {
        p: `Buying more than you can use in time is the main way bulk buying goes wrong. If your pace says six bottles will take most of a year, a twelve-bottle order is likely to leave a few expired at the back of the cabinet.`,
      },
      { h: 'Storing extra bottles' },
      {
        p: `The storage line reads: {storage}. A hall closet or bedroom drawer usually fits that range. Places that often don’t:`,
      },
      {
        list: [
          `A car, which can get far hotter in summer and colder in winter.`,
          `A garage or shed without climate control.`,
          `A windowsill in direct sun.`,
          `Next to a radiator, space heater or oven.`,
        ],
      },
      {
        p: `Keep unopened bottles sealed in their cartons until you need them. The tamper seal and carton are what make a bottle refundable if you change your mind, and they also protect it from dust in storage. More tips are in [how to store eye drops](/guides/how-to-store-eye-drops).`,
      },
      { h: 'Buy eye drops in bulk with no subscription' },
      {
        p: `Quell doesn’t sell subscriptions or auto-ship plans, so a bulk order is a single purchase you decide on each time. There are also no promo codes or coupon tiers, so there’s nothing to unlock by hitting a certain number besides free shipping at {freeBottles} bottles. The cart shows your total before you pay; see [what the cart saving means](/guides/what-the-cart-saving-means) if you’re curious how it’s shown.`,
      },
      {
        p: `After an order, you may get one reorder reminder email. It’s a nudge, not a charge: nothing is ordered unless you go back and check out again.`,
      },
      { h: 'If you overbuy' },
      {
        p: `Our refund policy covers {returns}. That gives you room to adjust if you ordered more than you need, as long as the bottles are still sealed. Opened bottles can’t be refunded, so leave the extras alone until your current one is finished. [Refunds on unopened bottles](/guides/how-to-return-an-unopened-bottle) explains how to ask for one.`,
      },
      { h: 'Bulk buying for a household or office' },
      {
        p: `If several people in a home use drops, each person should have their own bottle and keep it for their own use. Label the carton with a name so bottles don’t get mixed up. For an office first aid kit, an unopened bottle in a cool drawer is easier to manage than a shared open one.`,
      },
      {
        p: `Before buying for others, check the label’s warning: {warnings}. The label doesn’t give directions for children or for use with contact lenses, so anyone in those situations should ask their eye doctor or pharmacist first.`,
      },
    ],
    faq: [
      {
        q: 'Is it worth buying eye drops in bulk?',
        a: `It can be if you use drops daily and will finish each bottle before it expires. Bigger Quell orders also reach free shipping at {freeBottles} bottles.`,
      },
      {
        q: 'How many bottles of eye drops should I buy at once?',
        a: `Base it on how fast you actually empty a bottle at the labeled dose, then buy a few months’ supply that you’ll use before the expiration dates on the bottles.`,
      },
      {
        q: 'Can I return extra eye drops if I bought too many?',
        a: `With Quell, unopened bottles can be refunded within {returnDays} days of delivery, and you don’t need to send them back. Opened bottles aren’t refundable.`,
      },
      {
        q: 'Where should I store a supply of eye drops?',
        a: `Somewhere that stays within the label’s range: {storage}. A closet or drawer indoors usually works; cars, garages and sunny windowsills often don’t.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-cyclist',
    title: 'Christmas gifts for a cyclist with dry eyes',
    description:
      'Gift ideas for a cyclist whose eyes take a beating from wind, cold rides and trainer screens, plus what to check before giving eye drops.',
    category: 'seasonal',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Good Christmas gifts for a cyclist with dry eyes protect against wind and keep their eyes comfortable on and off the bike: wraparound riding glasses with clear or low-light lenses, a buff or balaclava for cold rides, a fan setup that doesn’t blast the face on the indoor trainer, and a small bottle of lubricating eye drops. Check the drop’s label for allergy cautions first, and order early.`,
      },
      { h: 'Check one thing before giving eye drops' },
      {
        p: `Eye drops are a personal gift, so start with the label rather than the wrapping paper. Quell’s warnings read: {warnings}. Emu oil is one of its inactive ingredients. If your cyclist has an egg or bird allergy, or you don’t know, ask them or choose one of the other ideas below.`,
      },
      {
        p: `The label doesn’t give directions for contact lens wearers or for children. If the rider wears contacts on the bike, or the gift is for a young racer, it’s worth leaving the drops out and letting their eye doctor or pharmacist weigh in.`,
      },
      { h: 'Why riders’ eyes dry out' },
      {
        p: `Riding at 15 or 20 miles an hour pushes a steady stream of air across the eyes, and moving air speeds up tear evaporation. Add the head-down position, which tilts the eyes up toward the wind, and the concentration needed in traffic or on a fast descent, and blinks get fewer and shallower. Our guide to [dry eyes when cycling](/guides/dry-eyes-when-cycling) explains the riding side in more depth.`,
      },
      {
        p: `Winter changes the problem without removing it. Cold air holds less moisture, so a 30-degree ride is often drier on the eyes than a mild one. Then many cyclists move indoors to a trainer, where they stare at a screen for an hour with a fan blowing straight at them.`,
      },
      { h: 'Gifts for winter road riding' },
      {
        list: [
          `Riding glasses with a wraparound shape, so air doesn’t sneak in around the edges. Clear or yellow lenses work for gray mornings and early sunsets.`,
          `A thin merino or fleece buff that can be pulled up over the nose and cheeks on cold descents.`,
          `A cycling cap with a short brim that fits under the helmet and shades the eyes from low sun.`,
          `A helmet with a visor, for mountain bikers and gravel riders who see more branches and grit.`,
          `Lens wipes and a microfiber pouch, since smeared glasses tend to come off at the first stop and stay off.`,
        ],
      },
      { h: 'Gifts for the indoor trainer season' },
      {
        p: `Hours on a smart trainer are a different kind of hard on the eyes. The rider locks onto a screen, blinks less, and sits in front of a fan sized to cool a sweaty body. A few gifts make that setup easier:`,
      },
      {
        list: [
          `A fan with an adjustable head, so it can be aimed at the chest instead of the face.`,
          `A tablet or TV stand that puts the screen at eye level, which keeps eyes from opening wide to look up.`,
          `A small room humidifier for the garage or spare room where the bike lives in winter.`,
          `A sweat headband, so salty sweat doesn’t run into the eyes mid-interval.`,
        ],
      },
      {
        p: `If the trainer is in a heated basement, the room may already be dry. Our guide on [whether a humidifier helps dry eyes](/guides/does-a-humidifier-help-dry-eyes) covers what to look for in one.`,
      },
      { h: 'Eye drops as a stocking stuffer' },
      {
        p: `A bottle of Quell is {size}, small enough for a jersey pocket or saddle bag. Its label lists its Uses as: {uses}, and it’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. The directions read: {directions}. The handling line, worth passing along with the gift, says: {tip}.`,
      },
      {
        p: `For riders, storage is the detail that matters. The label says: {storage}. A bottle tucked in a jersey pocket on a winter ride stays near body heat, which is fine; one left in a car at the trailhead in July or January may not be. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Ordering and shipping a gift' },
      {
        p: `There’s no gift wrap or gift message at checkout, and the bottle arrives in its normal carton. To send it straight to the rider, put their name and address in the shipping fields and your email in the email field, so the confirmation and tracking come to you. [How to send Quell as a gift](/guides/sending-quell-as-a-gift) walks through it.`,
      },
      {
        list: [
          `Shipping is within the United States only, from Brentwood, Tennessee.`,
          `Shipping is {shipping}, and {freeBottles} or more bottles ship free, which suits a gift for a whole riding group.`,
          `No delivery date is promised, so order early rather than in the last week before Christmas.`,
          `If they’d rather not use it, an unopened bottle can be refunded within {returnDays} days of delivery without sending it back.`,
        ],
      },
      { h: 'When a gift isn’t the answer' },
      {
        p: `Eye drops are for everyday dryness and irritation, not for grit, a bug or a branch that hit the eye at speed. Anything stuck in the eye, pain, or blurry vision after a ride needs an eye doctor. The label puts it this way: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What do you get a cyclist for Christmas who has everything?',
        a: `Think about comfort on cold or windy rides: wraparound clear-lens glasses, a merino buff, an adjustable trainer fan, or a small bottle of lubricating eye drops after checking the label’s allergy caution.`,
      },
      {
        q: 'Are eye drops a good gift for a cyclist?',
        a: `They can be for a rider whose eyes dry out in the wind. Check the label’s warning about egg or bird allergies first, and skip them for contact lens wearers unless their eye doctor agrees.`,
      },
      {
        q: 'Will eye drops fit in a cycling jersey pocket?',
        a: `A bottle of Quell is {size}, so it fits easily in a jersey pocket or small saddle bag. Keep it within the label’s storage range rather than in a hot or freezing car.`,
      },
      {
        q: 'When should I order a cycling gift to arrive by Christmas?',
        a: `Order early. Quell doesn’t promise a delivery date, so giving yourself plenty of room before December 25 is the honest way to plan.`,
      },
    ],
  },
  {
    slug: 'new-years-eve-and-dry-eyes',
    title: 'New Year’s Eve and dry eyes',
    description:
      'Late nights, cold countdowns, fireworks smoke and crowded heated rooms all dry out eyes on New Year’s Eve. How to keep them comfortable into January.',
    category: 'seasonal',
    addedOn: '2026-11-14',
    body: [
      {
        p: `New Year’s Eve is hard on eyes because it stacks several drying things into one night: hours awake past your usual bedtime, a cold outdoor countdown, smoke drifting from fireworks, and packed, heated rooms. Blink deliberately, step away from smoke and heaters, and drink water between celebratory drinks. A lubricating drop used as labeled can help with dryness and irritation. Lasting pain or vision changes need a doctor.`,
      },
      { h: 'Staying up past midnight' },
      {
        p: `Eyes that stay open longer than usual spend more time exposed to air, and tired eyes blink less completely. By 1 a.m., many people notice a gritty, heavy feeling, especially if they’ve been up since early morning. Our guide to [dry eyes from lack of sleep](/guides/dry-eyes-from-lack-of-sleep) explains the connection.`,
      },
      {
        p: `A short nap in the late afternoon makes the night easier on your eyes and everything else. If you’re hosting, getting the cooking and setup done early leaves room for it.`,
      },
      { h: 'Counting down outdoors in the cold' },
      {
        p: `Watching the ball drop in a public square or fireworks over a lake usually means standing still in cold air for an hour or more. Cold winter air holds little moisture, and wind across a waterfront or open plaza pulls more of it off the eye. People also tend to stare upward at the sky, which widens the eye opening.`,
      },
      {
        list: [
          `Wear glasses or sunglasses if you have them, even at night, to block wind from the side.`,
          `Stand where a building or crowd breaks the wind.`,
          `Pull a scarf up over your nose so warm breath isn’t blowing back into your eyes from a tight collar.`,
          `Look away from the sky and blink slowly a few times between bursts.`,
        ],
      },
      { h: 'Fireworks smoke and sparklers' },
      {
        p: `Fireworks leave a haze of smoke that hangs low on a still night, and sparklers put it right at face level. Smoke irritates eyes, and rubbing them afterward tends to make it worse. Watching from upwind, or from farther away, cuts how much reaches you. Hold sparklers at arm’s length and away from other people’s faces.`,
      },
      {
        p: `Quell’s label lists its Uses as: {uses}. That’s about easing eyes that already feel irritated. It doesn’t shield your eyes from smoke, so distance from the smoke matters more than anything you put in your eyes. If a spark, ember or debris gets in an eye, skip the drop and get medical help.`,
      },
      { h: 'Heated, crowded rooms' },
      {
        p: `A house party in winter runs hot: the furnace is on, the oven has been going for hours, and a few dozen people add their own warmth. Warm, dry air near heat registers, fireplaces and kitchen appliances speeds evaporation from the eye’s surface. Candles and a fireplace add a little smoke of their own.`,
      },
      {
        list: [
          `Find a seat away from the fireplace and heat vents.`,
          `Crack a window for a few minutes if the room gets stuffy.`,
          `If you’re hosting, run a humidifier in the main room during the afternoon.`,
          `Alternate drinks with water; alcohol and salty party food can leave you dehydrated.`,
        ],
      },
      { h: 'Contacts, makeup and the drive home' },
      {
        p: `Long nights are when people forget to take out contact lenses or remove eye makeup. Glitter, which turns up on a lot of New Year’s outfits, has a way of migrating into eyes. Quell’s label doesn’t give directions for use with contact lenses, so contact wearers should follow their eye doctor’s guidance.`,
      },
      {
        p: `If you’re driving home after midnight, tired, dry eyes and oncoming headlights are a poor combination. Plan a ride, or rest before you leave. Our guide to [dry eyes when driving in winter](/guides/dry-eyes-when-driving-in-winter) covers the car side.`,
      },
      { h: 'Using a drop during the night' },
      {
        p: `If you plan to use drops, follow the directions exactly: {directions}. Wash your hands first, and follow the handling line: {tip}. A bottle is {size}, so it fits in a pocket or small bag. Keep it in an inside pocket on a cold night and indoors after; the label says: {storage}.`,
      },
      {
        p: `The label also carries this warning: {warnings}. The whole panel, including the “Do not use” line, is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'New Year’s Day and after' },
      {
        p: `Eyes that feel dry on January 1 usually improve with a full night’s sleep, fresh air and a day off screens. If they don’t, or they hurt, the label is direct: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers what shouldn’t wait.`,
      },
      {
        p: `If you’ve been meaning to keep a bottle on hand through the winter, Quell ships within the US from Brentwood, Tennessee, and no delivery date is promised. You can order from the [home page](/#buy).`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes dry after New Year’s Eve?',
        a: `A late night, cold outdoor air, smoke from fireworks and warm, crowded rooms all dry the eyes, and tired eyes blink less. Sleep and a quieter day usually help.`,
      },
      {
        q: 'Can fireworks smoke irritate your eyes?',
        a: `Yes, smoke from fireworks and sparklers can irritate eyes. Watching from farther away or upwind helps; a spark or debris in the eye needs medical help, not a drop.`,
      },
      {
        q: 'Should I bring eye drops to a New Year’s party?',
        a: `If your eyes tend to get dry in heated rooms or late at night, a small bottle in a pocket can help. Use it only as the label directs, and keep it within the label’s storage range.`,
      },
      {
        q: 'How do I keep my eyes from drying out at a late-night party?',
        a: `Sit away from heat vents and fireplaces, drink water between drinks, blink deliberately, and take contact lenses out if you wear them. A short afternoon nap helps too.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-at-a-christmas-market',
    title: 'Dry eyes at an outdoor Christmas market',
    description:
      'Cold air, wind and wood smoke make outdoor Christmas markets hard on dry eyes. What to wear, where to stand, and how to carry eye drops in the cold.',
    category: 'seasonal',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Outdoor Christmas markets dry out eyes because you spend hours in cold, low-moisture air, often with a breeze between the stalls and wood smoke from grills, fire pits and mulled-wine stands. Wear glasses or sunglasses to block wind, stay upwind of smoke, take warm breaks indoors, and carry lubricating drops in an inside coat pocket so they stay within the label’s storage range.`,
      },
      { h: 'What a market evening does to your eyes' },
      {
        p: `Most markets are at their busiest after dark, when the lights are on and the temperature is dropping. Cold air holds very little water, so moisture leaves the surface of the eye quickly. Walking down long aisles of stalls in a city square or along a riverfront often means walking into a steady breeze.`,
      },
      {
        p: `Then there’s the browsing itself. Looking closely at ornaments, reading handwritten price cards and scrolling a phone map all involve focus, and focused eyes blink less often. An hour of that in cold air can leave eyes stinging or watery by the time you reach the food stalls.`,
      },
      { h: 'Smoke from grills, fire pits and stoves' },
      {
        p: `Many markets cook over charcoal or wood: roasted chestnuts, sausages, flatbreads. Fire pits and outdoor heaters draw a crowd on cold nights, and the smoke drifts at eye level. Smoke is irritating, and standing in it while you wait in line is one of the quickest ways to end up rubbing your eyes.`,
      },
      {
        list: [
          `Check which way the smoke is drifting and stand on the other side of the stall.`,
          `Warm your hands near a fire pit briefly, then step back rather than lingering in the plume.`,
          `Eat at a table away from the cooking stations when you can.`,
          `Don’t rub your eyes with gloves that have touched railings, food or money.`,
        ],
      },
      { h: 'What to wear' },
      {
        p: `Glasses, even plain clear ones, block a lot of the wind that otherwise hits the eyes directly. A hat with a brim keeps falling snow or sleet out of your eyes. A scarf that covers the nose keeps cold air off the lower face; just make sure it isn’t so high that breath fogs your glasses and you end up taking them off.`,
      },
      {
        p: `Contact lens wearers sometimes find a long, cold evening uncomfortable. Quell’s label doesn’t give directions for use with contacts, so it’s worth asking your eye doctor what they suggest for winter outings, or wearing glasses for the evening instead.`,
      },
      { h: 'Carrying eye drops in a coat pocket' },
      {
        p: `A small bottle is easy to bring along. Quell comes in a {size} bottle. The thing to watch on a cold night is temperature. The label says: {storage}. An outside coat pocket on a freezing evening can get colder than that, and a car parked for hours can too. An inside chest pocket keeps the bottle close to body heat.`,
      },
      {
        p: `If you plan to use drops while you’re out, warm your hands first, ideally after washing them in a restroom. Follow the label’s handling line: {tip}. Glove fingertips and frosty railings are exactly the surfaces you don’t want the tip to touch. Our guide on [whether eye drops can freeze in a cold car](/guides/can-eye-drops-freeze-in-a-cold-car) covers what to do with a bottle that got too cold.`,
      },
      { h: 'Take warm breaks' },
      {
        p: `Indoor breaks help, though not every indoor space does. A café or the heated tent with the long tables gives your eyes relief from the wind. Sitting directly in front of a patio heater or a blasting door heater, though, swaps one dry air source for another. Choose a seat a little back from the heat, and blink slowly a few times once you sit down.`,
      },
      {
        list: [
          `Plan a break every hour or so on a cold night.`,
          `Drink something warm and non-alcoholic between mulled wines.`,
          `Step out of crowds for a few minutes; bumping shoulders while browsing means more squinting and less blinking.`,
          `If you’re with kids, keep sparklers or handheld lights away from faces.`,
        ],
      },
      { h: 'What the Quell label covers' },
      {
        p: `The label lists its Uses as: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, which suits cold, dry, breezy air. The directions read: {directions}. There’s also a caution for some people: {warnings}. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
      {
        p: `If the market sells handmade gifts and you’re thinking of picking up eye drops as one, our guide to [stocking stuffers for eye drop users](/guides/stocking-stuffers-for-eye-drop-users) has more ideas.`,
      },
      { h: 'When to stop browsing and get help' },
      {
        p: `A drop is for dryness and irritation, not for an ember, a piece of grit or a spray of something from a stall. If anything gets into your eye and doesn’t rinse out, or if it hurts afterward, see a doctor. Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the signs. The label is clear about when to stop: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes water at outdoor Christmas markets?',
        a: `Cold, dry air and wind dry the surface of the eye, and smoke from grills and fire pits irritates it. Watery eyes are often a reflex to that dryness and irritation.`,
      },
      {
        q: 'Can eye drops get too cold in a coat pocket?',
        a: `An outside pocket on a freezing night can drop below the label’s storage range: {storage}. Keep the bottle in an inside pocket near body heat instead.`,
      },
      {
        q: 'How do I protect my eyes from wood smoke outdoors?',
        a: `Stand upwind of grills and fire pits, step back from the plume, and wear glasses to cut down on what reaches your eyes. Avoid rubbing them with dirty gloves.`,
      },
    ],
  },
  {
    slug: 'eye-drops-with-shaky-hands',
    title: 'How to use eye drops with shaky hands',
    description:
      'Steady hands aren’t required. Lie down, brace your hand on your face, and use a mirror or a helper to make eye drops easier with shaky hands.',
    category: 'using',
    addedOn: '2026-11-14',
    body: [
      {
        p: `To use eye drops with shaky hands, steady the bottle against your face instead of holding it in the air. Lie down or tilt your head back, rest the side of your hand on your forehead or cheekbone, pull the lower lid down with your other hand, and squeeze gently. Bracing turns your head and hand into one unit, so a tremor moves both together and the drop still lands.`,
      },
      { h: 'Why bracing works' },
      {
        p: `When the bottle floats above the eye, any shake gets magnified by the distance and the drop lands on your cheek. When the hand holding the bottle rests on your face, the bottle and your eye move together. That single change does more than anything else on this list.`,
      },
      {
        p: `It also keeps the tip from coming down onto the eye, which is the other worry with shaky hands. The label’s handling line says: {tip}. A braced hand holds the tip at a fixed, small distance above the eye, so it doesn’t touch the lashes or lid.`,
      },
      { h: 'Step by step, lying down' },
      {
        p: `Lying down is the steadiest position because your head doesn’t move and gravity points straight into the eye.`,
      },
      {
        list: [
          `Wash and dry your hands.`,
          `Lie on your back on a bed or couch, without a pillow or with a flat one, so your face points at the ceiling.`,
          `Hold the bottle in your dominant hand and rest the side of that hand, or your little finger, on your forehead or the bridge of your nose.`,
          `With your other hand, gently pull the lower lid down to make a small pocket.`,
          `Look up toward your forehead, away from the bottle.`,
          `Squeeze gently until one drop falls into the pocket.`,
          `Close your eye softly for a moment rather than blinking hard.`,
        ],
      },
      { h: 'How to make eye drops easier sitting up' },
      {
        p: `If lying down isn’t practical, sit in a chair with a high back so you can rest your head against it, or tilt your head back against a wall. Plant the elbow of your bottle hand on a table or your chest to take the weight off your arm. A tired arm shakes more, so supporting it from below helps as much as bracing at the top.`,
      },
      {
        list: [
          `Rest your bottle hand on your cheekbone, below the eye, instead of the forehead if that feels steadier.`,
          `Use the index finger of your other hand to pull down the lower lid, and rest that hand’s thumb on your cheek for extra stability.`,
          `Hold the bottle with both hands if one hand isn’t enough, bracing both wrists on your face.`,
          `Try a fist-under-the-chin position: rest your elbow on a table, chin on your fist, and tilt your head back slightly.`,
        ],
      },
      { h: 'Using a mirror' },
      {
        p: `A mirror helps some people and makes it worse for others, because the image is reversed. If you try it, use a magnifying makeup mirror laid flat on a table and look down into it, holding the bottle above your eye. You can see where the tip is without having to judge distance in a reflection. If you find yourself aiming in the wrong direction, skip the mirror and rely on bracing.`,
      },
      { h: 'Grip and the bottle' },
      {
        p: `Shaky hands sometimes squeeze too hard and get two or three drops at once. Hold the bottle between your thumb and two fingers, near the bottom, rather than in a fist. Practice squeezing out one drop at a time over a sink so you know how much pressure it takes.`,
      },
      {
        p: `Quell’s bottle is {size}. Warming it in your hand for a minute before use can make the squeeze feel easier, and it keeps a cold drop from making you flinch. Keep it stored as the label directs: {storage}.`,
      },
      { h: 'Knowing the drop went in' },
      {
        p: `With shaky hands, it’s easy to wonder whether you hit the target. A cool sensation in the eye, a little liquid along the lower lid, or a brief blur usually means it landed. Liquid on your cheek with nothing in the eye means it missed. Our guide on [how to tell if an eye drop went in](/guides/how-do-i-know-if-the-eye-drop-went-in) goes into more detail.`,
      },
      {
        p: `If it missed, try again with one more drop; you don’t need to compensate with extra. The label’s directions read: {directions}.`,
      },
      { h: 'Asking someone to help' },
      {
        p: `There’s nothing wrong with having someone else put the drops in, especially if your hands are worse at certain times of day. A partner, family member or friend can stand behind you while you sit with your head tilted back, or kneel beside you while you lie down. Our guide to [putting eye drops in someone else’s eyes](/guides/how-to-put-eye-drops-in-someone-elses-eyes) is a good thing to share with them.`,
      },
      {
        p: `Timing helps too. Many people find their hands steadier at some points of the day than others; if mornings are harder, use drops later in the day within the label’s directions.`,
      },
      { h: 'When to check in with a professional' },
      {
        p: `A pharmacist can suggest drop aids that hold the bottle steady over your eye, and can show you technique in person. If your eye hurts after a drop, or your vision changes, stop and follow the label: {stopUse} The full label is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'How do you put eye drops in with shaky hands?',
        a: `Brace the hand holding the bottle against your forehead or cheekbone so your hand and head move together. Lying down and pulling the lower lid into a small pocket make it easier still.`,
      },
      {
        q: 'Is there a trick to make eye drops easier?',
        a: `Look up toward your forehead, rest your hand on your face, and aim for the pocket made by pulling down the lower lid. Lying flat on your back helps many people.`,
      },
      {
        q: 'What if I squeeze out too many eye drops?',
        a: `Wipe the extra from your cheek with a clean tissue. Next time, hold the bottle lower down with your thumb and two fingers, and practice a gentle squeeze over a sink.`,
      },
      {
        q: 'Can a pharmacist help me use eye drops?',
        a: `Yes. A pharmacist can demonstrate technique in person and suggest aids that hold a bottle steady over the eye.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-retail-workers',
    title: 'Dry eyes for retail workers',
    description:
      'Long holiday shifts, forced-air heat, bright lights and door drafts dry out retail workers’ eyes. Practical fixes for the floor, register and stockroom.',
    category: 'using',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Retail work dries out eyes because of the store itself: forced-air heating, bright overhead lights, cold drafts every time the doors open, and hours of scanning, pricing and register screens. Holiday shifts make it worse with longer hours and fewer breaks. Position yourself away from vents when you can, blink deliberately during screen tasks, and keep a bottle of lubricating drops in your locker for breaks.`,
      },
      { h: 'Why stores are hard on eyes' },
      {
        p: `Big retail spaces are heated and cooled by forced air, pushed through ceiling ducts that often blow right over registers and service counters. In winter that air is warm and dry; in summer it’s cool and dry. Either way, moving air speeds evaporation from the eye’s surface.`,
      },
      {
        p: `Lighting adds to it. Stores keep displays bright so products look good, and bright light tends to make people squint, which means partial blinks. Glossy floors and white shelving bounce that light back up.`,
      },
      { h: 'The holiday season stretch' },
      {
        p: `From Black Friday through returns season in January, shifts get longer, stores open earlier and close later, and breaks get squeezed. Eyes that are fine on a normal five-hour shift can feel gritty by hour nine. Short nights between closing and opening shifts don’t help; tired eyes blink less completely.`,
      },
      {
        list: [
          `Plan sleep around back-to-back shifts where you can.`,
          `Drink water through the shift; a bottle behind the counter or in the break room is easier than relying on the fountain.`,
          `Use your full break, even if it’s short, and sit somewhere away from vents.`,
          `If you wear contacts, consider glasses for the longest shifts and ask your eye doctor what they suggest.`,
        ],
      },
      { h: 'Door drafts at the front of the store' },
      {
        p: `Greeters, cashiers by the entrance and anyone working the front displays get a blast of cold, dry outside air every time the doors open in winter, often mixed with the hot air of a door heater. That constant switch between cold and warm moving air is especially drying.`,
      },
      {
        p: `If you can, angle your register or station so the draft hits your side or back rather than your face. Ask whether door heaters can be turned down or redirected. Rotating front positions through the shift spreads the exposure across the team.`,
      },
      { h: 'Scanners, screens and close work' },
      {
        p: `Registers, handheld scanners, inventory devices and price-check screens all mean focusing on small text, and people blink less when they concentrate. Stocking shelves involves a lot of reading small labels and lot numbers too.`,
      },
      {
        list: [
          `After each customer or each pallet, look across the store for a moment and blink slowly a few times.`,
          `Turn up screen brightness and text size on handhelds if settings allow it.`,
          `Keep register screens at or slightly below eye level so you’re not opening your eyes wide to look up.`,
          `Clean scanner screens and glasses during downtime; smudges make you strain.`,
        ],
      },
      {
        p: `Our guide to [screens and your tear film](/guides/screens-and-your-tear-film) explains why that look-away habit helps.`,
      },
      { h: 'Stockrooms and loading docks' },
      {
        p: `Back rooms are often dustier than the floor, with cardboard fibers in the air and an open dock door letting in wind. Box cutters and shrink wrap send small debris flying. Safety glasses, if your store provides them, help with both. Our guide for [warehouse workers](/guides/dry-eyes-for-warehouse-workers) covers dock and stockroom conditions in more detail.`,
      },
      { h: 'Keeping eye drops in your locker' },
      {
        p: `A bottle of Quell is {size}, so it fits in a locker, apron pocket or bag. The label lists its Uses as: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. The directions read: {directions}, which fits neatly around a shift: before you start, on your lunch break, and after you clock out.`,
      },
      {
        p: `Break rooms are usually fine for storage. The label says: {storage}. A car parked all shift in summer heat or winter cold can go outside that range, so a locker or bag you keep inside is the better spot. Wash your hands before using drops, especially after handling cash, carts or boxes, and follow the handling line: {tip}.`,
      },
      {
        p: `The label also carries this caution: {warnings}. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'When it’s more than a long shift' },
      {
        p: `Dryness that clears up on your days off is usually about the store environment. Eyes that hurt, vision that changes, or irritation that keeps coming back need an eye doctor, who can work out the cause. The label is specific: {stopUse} If you’re not sure, our [dry eye self-check](/self-check) suggests next steps; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working in a store?',
        a: `Forced-air heating and cooling, bright lights, cold drafts from the doors and lots of screen time at registers and scanners all dry out the eyes over a long shift.`,
      },
      {
        q: 'Is a store break room a good place to keep eye drops?',
        a: `Usually, as long as the room or your locker stays within the label’s storage range: {storage}. Indoors that’s typical; a car parked all shift may not be.`,
      },
      {
        q: 'How can cashiers keep their eyes from drying out?',
        a: `Angle your station so door drafts and vents don’t hit your face, look away from the screen and blink slowly between customers, and drink water through the shift.`,
      },
      {
        q: 'Why are my eyes worse during the holiday retail season?',
        a: `Longer shifts, shorter nights, fewer breaks and winter heating all add up. Tired eyes blink less completely, and dry indoor air does the rest.`,
      },
    ],
  },
  {
    slug: 'is-quell-travel-size',
    title: 'Is Quell travel size?',
    description:
      'Yes. A bottle of Quell is {size}, far under TSA’s 3.4-ounce carry-on limit. How to pack it, and how to keep it cool in hot cars and luggage.',
    category: 'using',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Yes. Every bottle of Quell is {size}, which is well under the 3.4-ounce (100 mL) limit TSA sets for liquids in carry-on bags. You can pack it in your quart-sized liquids bag, carry it in a pocket or purse, or keep it in a backpack. There’s no larger size; the travel size is the only size, so the bottle you use at home is the one you fly with.`,
      },
      { h: 'Quell’s size, in numbers' },
      {
        p: `{size} works out to about a third of a fluid ounce. Put another way, roughly ten Quell bottles would fit under TSA’s per-container limit. The bottle is small enough for a jeans pocket, a jacket’s inside pocket or the zip pocket of a running belt.`,
      },
      {
        p: `How long one bottle goes depends on how often you use it. The label’s directions read: {directions}. Our guide to [how long a bottle of eye drops lasts](/guides/how-long-does-a-bottle-of-eye-drops-last) helps you work out how many to pack for a longer trip.`,
      },
      { h: 'Eye drops travel size and TSA’s liquids rule' },
      {
        p: `TSA’s liquids, aerosols and gels rule limits carry-on liquids to travel-sized containers of 3.4 ounces (100 milliliters) or less per item, all fitting in one quart-sized bag. A Quell bottle fits easily alongside toothpaste, contact solution and the rest.`,
      },
      {
        p: `TSA also lists medications as an exemption: medically necessary liquids in larger amounts are allowed in reasonable quantities for your trip, as long as you declare them to the officer at the start of screening. With a bottle as small as Quell, you’ll rarely need that exemption, but it’s useful if you’re packing several bottles for a long trip and they don’t fit in your quart bag. Rules can change, so it’s worth a quick look at tsa.gov before you fly.`,
      },
      {
        list: [
          `One bottle or a few: put them in your quart bag with your other liquids.`,
          `More than fit in the bag: tell the officer they’re eye drops at the start of screening.`,
          `Unopened extras: they can go in checked luggage, though carrying them keeps them with you if bags are delayed.`,
        ],
      },
      {
        p: `Our guide to [whether eye drops can go through airport X-ray](/guides/can-eye-drops-go-through-airport-x-ray) covers the scanner itself.`,
      },
      { h: 'Is there an eye drop travel bottle?' },
      {
        p: `Some people decant products into small travel bottles to save space. Don’t do this with eye drops. Moving them into another container exposes them to air and surfaces, and the new bottle won’t have the label or the expiration date. Quell is already travel-sized, so the original bottle is the travel bottle.`,
      },
      {
        p: `The label’s handling line still applies when you’re on the move: {tip}. In an airport restroom or a train seat, wash your hands first, and set the cap on a clean tissue rather than a tray table.`,
      },
      { h: 'Heat, cold and luggage' },
      {
        p: `Size isn’t the only thing to think about when traveling. The label says: {storage}. Plenty of travel situations go outside that range:`,
      },
      {
        list: [
          `A car parked at a beach or trailhead on a summer day.`,
          `A rental car glove box in the desert.`,
          `A suitcase sitting on a hot tarmac, or in an unheated car trunk in winter.`,
          `A windowsill in a sunny hotel room.`,
        ],
      },
      {
        p: `Carrying the bottle on you, or in a bag that stays with you, keeps it closer to room temperature than checked luggage or a parked car. If you’re worried a bottle got too hot or too cold, check it against the label. The label describes its look: {milky}, and the “Do not use” line reads: {doNotUse}.`,
      },
      { h: 'Where travel dries out your eyes' },
      {
        p: `Airplane cabins, hotel air conditioning, long drives with the vents on and windy beaches all speed up evaporation from the eye’s surface. Being able to carry drops in a pocket means you can use them when you need them instead of digging through luggage. The label lists its Uses as: {uses}, and Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Our guide to [traveling with eye drops](/guides/traveling-with-eye-drops) has a fuller packing checklist.`,
      },
      { h: 'Ordering before a trip' },
      {
        p: `Quell ships within the United States from Brentwood, Tennessee. No delivery date is promised, so order well before you leave rather than the week of. Shipping is {shipping}, and {freeBottles} or more bottles ship free, which is often enough for a longer trip plus a spare. The [home page](/#buy) has the order form, and the full label is on the [Drug Facts page](/drug-facts).`,
      },
      {
        p: `Traveling abroad? Quell doesn’t ship outside the US, so buy what you need before you go. Other countries have their own rules about bringing medicines in, so check with the destination if you’re carrying several bottles.`,
      },
    ],
    faq: [
      {
        q: 'Are eye drops travel size?',
        a: `Most single bottles are. Quell comes only in {size}, which is far under TSA’s 3.4-ounce (100 mL) limit for carry-on liquids.`,
      },
      {
        q: 'Do eye drops have to go in the quart-sized bag?',
        a: `Small bottles like Quell can go in your quart bag with your other liquids. TSA allows medically necessary liquids beyond that if you declare them at the start of screening.`,
      },
      {
        q: 'Can I put eye drops in a travel bottle?',
        a: `It’s better not to. Transferring them exposes the drops to air and surfaces and loses the label and expiration date. Quell’s original bottle is already travel-sized.`,
      },
      {
        q: 'Is there a bigger bottle of Quell?',
        a: `No. Quell is sold only in {size} bottles. If you need more, order several; {freeBottles} or more ship free.`,
      },
    ],
  },
  {
    slug: 'what-if-i-miss-a-dose-of-eye-drops',
    title: 'What if I miss a dose of eye drops?',
    description:
      'Missed a dose of lubricating eye drops? The label doesn’t cover it, so don’t double up. What to do next, and how to remember the next one.',
    category: 'using',
    addedOn: '2026-11-14',
    body: [
      {
        p: `If you miss a dose of lubricating eye drops, just use the next drop when you remember or at your next usual time, and carry on with the label’s directions. Don’t put in extra drops to make up for the one you missed. Quell’s label gives its directions as: {directions}. It doesn’t say anything about missed doses, so a pharmacist is the person to ask if you’re unsure.`,
      },
      { h: 'What the label says, and what it doesn’t' },
      {
        p: `Quell is an over-the-counter lubricating drop, and its Drug Facts panel is short. The Uses line reads: {uses}. The directions line is the instruction to follow, and it tells you how many drops and how often. It doesn’t mention what to do if a dose is skipped, how to space doses, or whether timing matters.`,
      },
      {
        p: `When a label is silent on something, the safest reading is to stay within what it does say. That means no more than the directed number of drops in a day, and not doubling up at one time. Prescription eye drops often come with specific missed-dose instructions; those don’t apply here, and a lubricating drop’s instructions don’t apply to them.`,
      },
      { h: 'Should I double up on eye drops?' },
      {
        p: `No. Putting two or three drops in at once doesn’t store moisture for later; the eye holds only a small amount of liquid, and the extra mostly runs out onto your cheek or down the tear duct. Doubling up uses your bottle faster without doing more.`,
      },
      {
        list: [
          `Missed your morning drop and it’s midday: use it now, and continue as usual.`,
          `Missed the evening drop and it’s bedtime: use it if you want to, as long as you stay within the directions for the day.`,
          `Forgot an entire day: start again the following morning at your usual times.`,
          `Not sure whether you already used it: skip it and wait for the next one.`,
        ],
      },
      { h: 'Does missing a dose matter?' },
      {
        p: `For a lubricating drop used for everyday dryness, a missed dose usually means your eyes may feel drier than usual for a while. It doesn’t undo the drops you’ve already used. If you notice that missing drops makes a big difference, that’s useful information to share with an eye doctor, who can look at what’s behind the dryness.`,
      },
      {
        p: `Missing doses because your eyes feel fine is different from forgetting. If dryness only shows up in certain situations, like long screen sessions or windy days, using drops around those moments may fit your life better. Stay within the label’s directions either way.`,
      },
      { h: 'Ways to remember the next one' },
      {
        p: `Linking drops to something you already do every day is the most reliable approach. A few ideas:`,
      },
      {
        list: [
          `Keep the bottle next to your toothbrush and use it after brushing in the morning and at night.`,
          `Set phone alarms for each dose, labeled “eye drops” so they’re not mistaken for something else.`,
          `Pair a midday dose with lunch, and keep a bottle in your work bag or desk drawer.`,
          `Use a weekly pill organizer’s lid as a checklist, or tick a box on a calendar.`,
          `Ask someone at home to remind you while you’re building the habit.`,
        ],
      },
      {
        p: `A written record also helps you notice patterns. Our guide to [keeping an eye drop log](/guides/keeping-an-eye-drop-log) shows a simple way to do it.`,
      },
      { h: 'Running out counts as missing doses' },
      {
        p: `Many missed doses happen because the bottle is empty. Order before you run low: Quell ships within the United States from Brentwood, Tennessee, and no delivery date is promised. After an order, you may get one reorder reminder email. Orders of {freeBottles} or more bottles ship free, and you can order from the [home page](/#buy).`,
      },
      {
        p: `Keep each bottle within the label’s storage range: {storage}. A bottle left in a hot car to make it easier to remember may end up outside that range.`,
      },
      { h: 'When missed doses aren’t the issue' },
      {
        p: `If your eyes hurt, your vision changes, or symptoms get worse whether or not you’re using drops regularly, stop and follow the label: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the warning signs.`,
      },
      {
        p: `If you use any other eye drops, especially prescription ones, ask your eye doctor or pharmacist how to fit them together; the Quell label doesn’t give directions for use with other drops. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'What happens if I forget to use my eye drops?',
        a: `With a lubricating drop, your eyes may simply feel drier for a while. Use the next drop when you remember and continue following the label’s directions.`,
      },
      {
        q: 'Should I double up on eye drops if I miss a dose?',
        a: `No. Extra drops at once mostly run out of the eye. Stay within the label’s directions: {directions}.`,
      },
      {
        q: 'How do I remember to put my eye drops in?',
        a: `Tie drops to a daily habit like brushing your teeth, set labeled phone alarms, or keep a simple log. Keeping a bottle where you’ll see it helps too.`,
      },
      {
        q: 'Who should I ask about a missed dose of eye drops?',
        a: `A pharmacist can answer questions about missed doses and how to fit drops around other medicines. For eye pain or vision changes, see an eye doctor.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-when-sewing-or-knitting',
    title: 'Dry eyes when sewing or knitting',
    description:
      'Close-up stitching slows your blinking, and lamp heat and dry winter rooms add to it. How to keep eyes comfortable through a long crafting session.',
    category: 'using',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Sewing and knitting dry out eyes mainly because close focus slows blinking. Threading needles, counting stitches and following patterns can cut blinks way down, and the warm lamp and heated room you craft in during winter dry the air further. Take a break every 20 to 30 minutes, look across the room and blink slowly, keep lamps from shining heat at your face, and add humidity to the room.`,
      },
      { h: 'Why close work dries eyes' },
      {
        p: `Each blink spreads a fresh layer of tears across the eye. When you concentrate on something small and close, like the eye of a needle or a tricky cable stitch, you blink less often and often not all the way. The surface of the eye has more time to dry between blinks, and the bottom part, which partial blinks miss, can feel especially dry.`,
      },
      {
        p: `Crafting also tends to keep your gaze slightly downward and fixed, without the natural shifts that happen when you look around a room. After an hour, that adds up to tired, gritty or watery eyes.`,
      },
      { h: 'Holiday crafting season' },
      {
        p: `The weeks before the holidays are when many people sew stockings, quilt, knit scarves and finish gifts on a deadline. Sessions get longer and later. It’s also when the furnace runs the most, so the room is drier than at any other time of year. Our guide to [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) explains why heated air is drier.`,
      },
      {
        list: [
          `Set a timer for 20 or 30 minutes and look up when it goes off.`,
          `Break a big project into sessions instead of one long marathon.`,
          `Finish the most detailed work, like fine hand stitching or lace, earlier in the day when your eyes are fresher.`,
          `Keep a glass of water nearby.`,
        ],
      },
      { h: 'Lamps, light and heat' },
      {
        p: `Good light reduces squinting, which helps your eyes. But an older incandescent or halogen lamp close to your face also gives off heat that dries the air right where you’re looking. LED task lamps run much cooler. Position the lamp to light your work from the side or above rather than pointing toward your face.`,
      },
      {
        list: [
          `Use a daylight-style LED lamp aimed at the fabric, not your eyes.`,
          `Avoid sitting with a space heater or fireplace blowing toward your chair.`,
          `Choose yarn and thread colors that contrast with your lap cloth or work surface so you don’t have to strain.`,
          `A magnifier lamp can help with fine work, so you’re not leaning in close.`,
        ],
      },
      { h: 'Sewing machine and quilting setups' },
      {
        p: `Machine sewing has its own pattern: staring at the needle and presser foot while the fabric moves, often under a small, bright machine light. Quilters spend long stretches at cutting mats and ironing boards too. Steam from an iron puts a bit of moisture in the air, but a hot iron near your face also adds heat.`,
      },
      {
        p: `Sit at a height where you look down at the machine slightly, not straight ahead or up, which keeps your eyes less wide open. Look away at the end of each seam. If your sewing room is a basement or spare room with a heater, check whether it’s blowing at you.`,
      },
      { h: 'Add moisture to the room' },
      {
        p: `A humidifier in your crafting space can help keep air from getting too dry in winter. Our guide on [whether a humidifier helps dry eyes](/guides/does-a-humidifier-help-dry-eyes) covers what to look for and how to keep one clean. A bowl of water near a radiator or houseplants nearby add a little moisture as well.`,
      },
      { h: 'Fibers and lint' },
      {
        p: `Wool, mohair, angora and fleece shed small fibers, and cutting fabric and batting sends lint into the air. Rubbing your eyes with fiber-covered fingers transfers it right where you don’t want it. Wash your hands during breaks, keep a lint roller handy, and shake out projects away from your face.`,
      },
      { h: 'Using lubricating drops while you craft' },
      {
        p: `Quell’s label lists its Uses as: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, which matters when your blink rate drops. The directions read: {directions}. One natural time is before you start a long session.`,
      },
      {
        p: `Wash any yarn fibers or lint off your hands first, and follow the handling line: {tip}. Keep the bottle in your sewing basket only if the room stays within the label’s storage range: {storage}. A bottle is {size}, so it fits in a notions box. The full panel is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If you can’t focus on close work the way you used to, the issue may be your glasses prescription rather than dryness; an eye exam sorts that out. Eye pain, vision changes, or irritation that won’t go away need an eye doctor too. The label says: {stopUse} Our [dry eye self-check](/self-check) can help you think through next steps; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes hurt after sewing?',
        a: `Close focus slows blinking, so eyes dry out, and fine work can tire the focusing muscles. Pain that persists, or any change in vision, is a reason to see an eye doctor.`,
      },
      {
        q: 'Can knitting cause dry eyes?',
        a: `Long knitting sessions can leave eyes feeling dry because people blink less while counting stitches. Regular breaks and a less dry room help.`,
      },
      {
        q: 'What kind of lamp is better for sewing with dry eyes?',
        a: `An LED task lamp aimed at your work from the side or above. It runs cooler than older bulbs, so it doesn’t heat and dry the air near your face.`,
      },
      {
        q: 'How often should I take breaks when doing close-up crafts?',
        a: `Every 20 to 30 minutes, look across the room for a moment and blink slowly a few times. Longer breaks every hour or so help on big projects.`,
      },
    ],
  },
  {
    slug: 'should-i-see-a-doctor-or-try-eye-drops-first',
    title: 'Should I see a doctor or try eye drops first?',
    description:
      'For mild dryness and irritation, a lubricating drop used as labeled is a reasonable first step. Pain, vision changes or injury mean a doctor first.',
    category: 'choosing',
    addedOn: '2026-11-14',
    body: [
      {
        p: `For plain dryness or mild irritation, with no pain and clear vision, trying an over-the-counter lubricating drop as its label directs is a reasonable first step. Go to an eye doctor first, without trying drops, if you have eye pain, vision changes, an injury, a chemical splash, or something stuck in the eye. If drops don’t help, the label says to stop and see a doctor after 72 hours.`,
      },
      { h: 'When trying eye drops first makes sense' },
      {
        p: `Lubricating drops are sold without a prescription because they’re meant for common, mild symptoms. Quell’s label lists its Uses as: {uses}. That covers situations like these:`,
      },
      {
        list: [
          `Eyes feel dry or scratchy after a long day at a screen.`,
          `A windy walk, a flight, or a heated office leaves your eyes feeling tight or gritty.`,
          `Air conditioning or a car vent has been blowing on your face.`,
          `Your eyes feel tired after a late night.`,
        ],
      },
      {
        p: `In each case your vision is clear, there’s no real pain, and you can point to a likely reason. Using drops as directed ({directions}), together with simple changes like moving away from vents or taking screen breaks, is a sensible thing to try.`,
      },
      { h: 'When to see a doctor first' },
      {
        p: `Some symptoms shouldn’t wait for a drop to work. Get prompt care, from an eye doctor, urgent care or the emergency room depending on severity, if you have:`,
      },
      {
        list: [
          `Eye pain, rather than mild discomfort.`,
          `Any sudden change in vision: blurring that doesn’t clear with blinking, dark spots, flashes or loss of part of your vision.`,
          `An injury: a blow to the eye, a scratch, or something that hit it at speed.`,
          `A chemical splash. Rinse with clean water right away and get medical help.`,
          `Something stuck in the eye that won’t rinse out.`,
          `Strong sensitivity to light, or a lot of discharge.`,
        ],
      },
      {
        p: `Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) goes through these in more detail.`,
      },
      { h: 'The 72-hour rule on the label' },
      {
        p: `If you try drops first, the label tells you when to stop: {stopUse} In practice, that means if your eyes aren’t better after three days, or they get worse at any point, it’s time to stop and see a doctor rather than keep trying.`,
      },
      {
        p: `It also means watching for new symptoms while you’re using drops. Pain or vision changes are reasons to stop right away, not after 72 hours.`,
      },
      { h: 'Which kind of doctor?' },
      {
        p: `For most eye symptoms, an optometrist is a good first stop: they examine eyes, prescribe glasses and refer you on when needed. An ophthalmologist is a medical doctor who also does eye surgery and handles more complex problems. Our guide to [optometrist or ophthalmologist](/guides/optometrist-or-ophthalmologist) explains the difference. For a serious injury or chemical exposure, go to the emergency room.`,
      },
      {
        p: `Working out the cause of eye symptoms, and what to do about them, belongs to the doctor. Over-the-counter drops can make eyes more comfortable, but they don’t identify why your eyes are dry.`,
      },
      { h: 'Cases where the label sends you elsewhere' },
      {
        p: `Some situations aren’t covered by an over-the-counter lubricating drop’s label at all, and an eye doctor or pharmacist should weigh in before you try one:`,
      },
      {
        list: [
          `You wear contact lenses; the label doesn’t give directions for use with them.`,
          `The drops are for a child.`,
          `You already use other eye drops, especially prescription ones.`,
          `You’ve recently had eye surgery.`,
          `You have an egg or bird allergy. The label says: {warnings}.`,
        ],
      },
      { h: 'A quick self-check' },
      {
        p: `If you’re not sure which side of the line you’re on, our [dry eye self-check](/self-check) asks a few questions about your symptoms and suggests whether drops or a doctor’s visit makes more sense. It’s not a diagnosis, and if anything in it raises a concern, follow up with a doctor.`,
      },
      {
        p: `If drops seem like the right first step, Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The full label is on the [Drug Facts page](/drug-facts). If you buy a bottle and then find you need to see a doctor instead, unopened bottles can be refunded within {returnDays} days of delivery.`,
      },
    ],
    faq: [
      {
        q: 'Should I see an eye doctor for dry eyes?',
        a: `See one if dryness comes with pain or vision changes, keeps coming back, or isn’t better after 72 hours of using drops as labeled. Mild, occasional dryness with an obvious cause is often fine to try drops for first.`,
      },
      {
        q: 'When should you not use over-the-counter eye drops?',
        a: `Skip drops and get care for eye pain, sudden vision changes, injuries, chemical splashes or something stuck in the eye. Also check with a doctor or pharmacist first if you wear contacts or use other eye drops.`,
      },
      {
        q: 'How long should I try eye drops before seeing a doctor?',
        a: `Quell’s label says to stop and ask a doctor if the condition worsens or persists for 72 hours. Stop sooner if you have eye pain or changes in vision.`,
      },
      {
        q: 'Can I go to urgent care for an eye problem?',
        a: `Many urgent care clinics can see minor eye problems and refer you on. For a serious injury or chemical splash, go to the emergency room.`,
      },
    ],
  },
  /*
   * FDA references removed 2026-11-18 at Phillip's request.
   */
  {
    slug: 'are-eye-drops-sterile',
    title: 'Are eye drops sterile?',
    description:
      'Yes. Eye drops are sterile when they’re sealed. What that means for a preservative-free bottle like Quell, and how to keep it clean once it’s open.',
    category: 'label',
    addedOn: '2026-11-14',
    body: [
      {
        p: `Yes. Eye drops are made sterile, and the bottle is sterile when it’s filled and sealed, because anything going into the eye has to be free of germs. That holds until you break the seal. Once you open the bottle, keeping it clean is up to you: don’t touch the tip to anything, and use only an intact, sealed bottle.`,
      },
      { h: 'What sterile means for an eye drop' },
      {
        p: `Sterile means free of living germs, not just clean. An eye drop is filled and capped in conditions built to keep it that way, and the sealed bottle holds it in that state on the shelf. The eye’s surface is delicate and wet, which is exactly why drops are held to a higher standard than a lotion or a face wash.`,
      },
      {
        p: `Over-the-counter eye products also come sealed so they can’t be opened without breaking the seal. That’s why bottles come with a band or seal you break the first time you use them, and why an unbroken seal is your first check on a new bottle.`,
      },
      { h: 'Sterile in the box, clean in your hand' },
      {
        p: `Sterile describes the product as it leaves the factory, sealed. After you open the bottle, it’s exposed to the air, your hands and anything the tip touches. The label’s handling line exists for exactly this reason: {tip}.`,
      },
      {
        list: [
          `Wash your hands before using drops.`,
          `Don’t let the tip touch your eye, lashes, fingers, or any surface.`,
          `Put the cap back on right after use.`,
          `Set the cap down on a clean tissue, top side down, or hold it in your hand.`,
          `Don’t share a bottle with anyone else.`,
          `Don’t transfer drops into another container.`,
        ],
      },
      {
        p: `Where you keep an open bottle matters too. A steamy bathroom shelf, a gym bag shared with sweaty clothes, or a jacket pocket full of crumbs and coins all bring the tip closer to things you’d rather keep away from your eyes. A clean drawer, a small zip pouch, or the original carton keeps the cap and tip protected between uses. If you carry a bottle around, check that the cap is snapped on fully before it goes into a pocket or bag.`,
      },
      { h: 'Preservative-free and sterile' },
      {
        p: `Many eye drops contain preservatives, which help limit contamination after a bottle is opened. Quell is preservative-free, so careful handling matters even more. Our guide on [what preservative-free means](/guides/what-does-preservative-free-mean) explains the difference.`,
      },
      {
        p: `Preservative-free doesn’t mean less sterile. Both kinds of eye drops are sterile when they’re sealed. The difference is what happens after opening, which is why the handling line and clean hands matter.`,
      },
      { h: 'What’s in Quell' },
      {
        p: `Quell’s active ingredients are {actives}. It has {inactiveCount} inactive ingredients: {inactives}. Sterile water is one of them, which is the base the other ingredients are carried in. You can read the full list with the rest of the label on our [Drug Facts page](/drug-facts).`,
      },
      {
        p: `The label also describes how it looks: {milky}. In plain terms: {appearance}`,
      },
      { h: 'Check the seal before you open it' },
      {
        p: `Since the seal is part of how the product stays sterile until you use it, check it before the first drop. If the tamper seal is broken, missing or looks tampered with when your order arrives, don’t use the bottle. Our guide on [what to do if the tamper seal is broken](/guides/broken-tamper-seal) explains how to get a replacement; damaged, incorrect and broken-seal orders are replaced.`,
      },
      {
        p: `Also check the expiration date printed on the bottle and carton. Don’t use drops past that date.`,
      },
      { h: 'When not to use a bottle' },
      {
        p: `The label’s “Do not use” line reads: {doNotUse}. Since Quell is naturally milky brown, compare it to how it looked when you first opened it. Other reasons to set a bottle aside:`,
      },
      {
        list: [
          `The tip touched your eye, a counter, or another surface.`,
          `The bottle was stored outside the label’s range: {storage}.`,
          `It’s past its expiration date.`,
          `Someone else used it.`,
        ],
      },
      { h: 'If your eye feels worse after a drop' },
      {
        p: `Stop using the drop. The label is direct: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) covers the signs that need prompt attention. If you swallow the product by mistake, the label says: {swallowed}.`,
      },
    ],
    faq: [
      {
        q: 'Are all eye drops sterile?',
        a: `Eye drops are made sterile, and the bottle is sterile when it’s filled and sealed. That’s true of preserved and preservative-free products alike; what differs is how they hold up once opened.`,
      },
      {
        q: 'Do eye drops stay sterile after opening?',
        a: `Not automatically. After opening, the bottle is exposed to air and anything the tip touches. Follow the label: {tip}.`,
      },
      {
        q: 'Is sterile water in Quell eye drops?',
        a: `Yes. Sterile water is one of Quell’s {inactiveCount} inactive ingredients. The full list is on the Drug Facts label.`,
      },
      {
        q: 'Why do eye drops have a tamper seal?',
        a: `The seal shows you the bottle hasn’t been opened since it was filled, so the drops inside are still sterile. If yours is broken on arrival, don’t use it; contact us for a replacement.`,
      },
    ],
  },
]
