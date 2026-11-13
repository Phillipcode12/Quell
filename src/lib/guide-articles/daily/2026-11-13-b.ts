import type { Guide } from '@/lib/guide-types'
export const DAILY_20261113_B: Guide[] = [
  /*
   * Sources fetched 2026-11-13 for dry-eye-relief-corvallis-or:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USC00351862.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USC00351862.csv
   *   (CORVALLIS STATE UNIV, elev 68.6 m: annual precip 43.04 in; Dec 7.71, Jan 6.46,
   *   Nov 6.46, Jul 0.34, Aug 0.39; Jun-Aug total 2.07; Jul high 82.9 F, Aug 83.7,
   *   Dec high 46.7, Jan 47.4; 17.8 days at or above 90 F; 54.3 nights at or below
   *   32 F; 95.4 days with 0.10 in or more of precipitation; snow 2.9 in)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (no Corvallis row; SALEM, OR used: Jul and Aug afternoon 39, Dec morning 88 and
   *   afternoon 81, annual 84 morning / 59 afternoon)
   * - https://www.oregon.gov/oha/ph/Preparedness/Prepare/Documents/OHA%208626%20Wildfire%20FAQs-v6c.pdf
   *   (Oregon Health Authority: smoke can irritate eyes; keep windows and doors closed)
   */
  {
    slug: 'dry-eye-relief-corvallis-or',
    title: 'Dry eye relief in Corvallis, Oregon',
    description:
      'Corvallis is soaked in winter and nearly rainless in July and August. NOAA’s local numbers, why eyes still feel dry here, and practical relief.',
    category: 'local',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Dry eye relief in Corvallis means handling two very different seasons. NOAA’s normals for the Oregon State University station show about 43 inches of rain a year, yet only around two inches fall from June through August. Winter dryness mostly comes from furnaces and long indoor days; summer brings dry afternoons and, some years, wildfire smoke. Habits, humidity and a lubricating drop used as labeled help. Figuring out the cause of lasting dryness is an eye doctor’s job.`,
      },
      { h: 'Corvallis weather by NOAA’s numbers' },
      {
        p: `NOAA keeps a long-running cooperative weather station on the Oregon State University campus. Its 1991 to 2020 climate normals describe a town with a soggy half of the year and a dry half:`,
      },
      {
        list: [
          `Normal yearly precipitation is 43.04 inches.`,
          `December is the wettest month at 7.71 inches, with November and January close behind at 6.46 each.`,
          `July averages 0.34 inch and August 0.39, so midsummer is close to rainless.`,
          `About 95 days a year bring a tenth of an inch of rain or more, nearly all between October and May.`,
          `Normal highs run from 46.7°F in December to 83.7°F in August.`,
          `Roughly 18 days a year reach 90°F, and about 54 nights drop to freezing.`,
          `Snowfall averages under three inches a year.`,
        ],
      },
      {
        p: `Numbers like that surprise people who assume a rainy town can’t be hard on eyes. The rain falls outside. Most Corvallis residents spend the wet months in heated rooms, and that indoor air is where the drying happens.`,
      },
      { h: 'Why a wet winter can still mean dry eyes' },
      {
        p: `There’s no humidity row for Corvallis in NOAA’s Comparative Climatic Data table, so Salem’s airport, about 35 miles north in the same valley, stands in. There, December humidity averages 88 percent in the morning and 81 percent in the afternoon. The outdoor air is damp. Once it’s pulled indoors and warmed by a furnace or a baseboard heater, though, its relative humidity drops sharply, because warm air can hold far more moisture than it actually carries.`,
      },
      {
        p: `That’s why a gray, drizzly January day can end with eyes that feel gritty. A few things help during the heating season:`,
      },
      {
        list: [
          `Aim heat registers and space heaters away from where you sit and sleep.`,
          `Run a clean humidifier in the bedroom; [does a humidifier help dry eyes](/guides/does-a-humidifier-help-dry-eyes) covers what to expect.`,
          `Take breaks outdoors on mild afternoons rather than staying in one heated room from morning to night.`,
          `Keep the car’s heater on the floor setting so warm air doesn’t blow across your face on the drive along Highway 34 or 99W.`,
        ],
      },
      { h: 'Dry summers in the Willamette Valley' },
      {
        p: `Then the pattern flips. Salem’s afternoon humidity falls to 39 percent in July and August by NOAA’s table, and Corvallis gets barely three quarters of an inch of rain across those two months. Long, bright evenings pull people outside: the riverfront along the Willamette, the trails up Marys Peak and in McDonald-Dunn Forest, and summer weekends of field work on farms and in vineyards around Benton County.`,
      },
      {
        p: `Dry, moving air speeds evaporation from the tear film, and a breeze on a ridge trail or a bike ride over the valley floor adds to it. Wraparound sunglasses cut both wind and glare. A water bottle in the pack matters too, since low humidity dries more than your eyes.`,
      },
      { h: 'Wildfire smoke days' },
      {
        p: `Some summers bring smoke into the valley from fires elsewhere in Oregon. The Oregon Health Authority’s wildfire guidance lists eye irritation among smoke’s effects and advises keeping windows and doors closed when air quality is poor. On those days, run any air conditioner on recirculate, keep outdoor exercise short, and save yard work for a clearer morning.`,
      },
      {
        p: `Smoke can make eyes sting and water even when the air isn’t especially dry. If irritation continues after the air clears, or you notice changes in your vision, see an eye doctor; [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs worth acting on.`,
      },
      { h: 'Campus life, labs and late nights' },
      {
        p: `Oregon State shapes daily life in Corvallis, and a university town runs on screens. Long study sessions in the library, lab work at a microscope, grading at a kitchen table and research jobs that mean hours in front of a monitor all share one problem: people blink less when they concentrate. Each incomplete blink leaves more of the eye’s surface exposed to dry, heated air.`,
      },
      {
        list: [
          `Every 20 minutes or so, look across the room and blink slowly a few times.`,
          `Set the monitor slightly below eye level, which keeps your eyes a little less open.`,
          `Keep a fan or vent from pointing at your desk.`,
          `During finals week, sleep counts: tired eyes tend to feel drier.`,
        ],
      },
      { h: 'Using a lubricating drop in Corvallis' },
      {
        p: `Quell’s Drug Facts label lists its Uses as: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, whether the moisture is being pulled away by a furnace in January or a dry August afternoon. The directions don’t change with the season: {directions}. Keep the tip clean every time, as the label says: {tip}.`,
      },
      {
        p: `If three drops a day don’t seem like enough during a smoky week or a cold snap, raise that with your eye doctor rather than adding more on your own. The label also covers storage, {storage}, which a closed car on a sunny August afternoon can exceed.`,
      },
      { h: 'Getting Quell delivered in Corvallis' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Corvallis addresses for {shipping}, and shipping is free with {freeBottles} or more bottles. No delivery date is promised, so reorder before the last bottle is nearly empty. The [Corvallis page](/eye-drops/corvallis-or) has local ordering details, and the [Oregon page](/eye-drops/state/oregon) lists other cities in the state.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `A lubricating drop eases dryness. Working out why your eyes stay dry, and caring for whatever is behind it, belongs to an optometrist or ophthalmologist. The label is specific about when to stop: {stopUse} Before an appointment, the [dry eye self-check](/self-check) helps you describe what you’re feeling; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes dry in Corvallis when it rains so much?',
        a: `Most Corvallis rain falls from October through May, when people spend long hours in heated rooms. Warming damp outdoor air indoors lowers its relative humidity, and that dry indoor air speeds evaporation from the eyes.`,
      },
      {
        q: 'How much rain does Corvallis get in the summer?',
        a: `NOAA’s 1991 to 2020 normals for the Oregon State University station list 0.34 inch in July and 0.39 inch in August, and about two inches across June, July and August together.`,
      },
      {
        q: 'Does wildfire smoke make your eyes dry?',
        a: `The Oregon Health Authority lists eye irritation among the effects of wildfire smoke and advises keeping windows and doors closed on smoky days. If irritation lasts after the air clears or your vision changes, see an eye doctor.`,
      },
      {
        q: 'Can I order Quell to Corvallis, Oregon?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Corvallis for {shipping}, or free with {freeBottles} or more bottles. You can check out as a guest, and no arrival date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-13 for dry-eye-relief-visalia-ca:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USC00049367.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USC00049367.csv
   *   (VISALIA, elev 92.4 m: annual precip 10.32 in; Jul 0.00, Aug 0.00, Jun 0.13,
   *   Sep 0.07; Jun-Aug total 0.13; Jan 1.96 wettest; Jul high 93.8 F, Aug 93.2;
   *   Jan high 55.3; Dec low 37.9; 94.6 days at or above 90 F; 11.4 days at or above
   *   100 F; 9.1 nights at or below 32 F; 25.7 days with 0.10 in or more)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (no Visalia row; FRESNO, CA used: Jul afternoon 21, Aug 22; Dec and Jan
   *   morning 88, afternoon 67)
   * - https://www.weather.gov/media/hnx/DECEMBER%202022%20WEATHER%20SUMMARY.pdf
   * - https://www.weather.gov/media/hnx/FEBRUARY%202014%20WEATHER%20SUMMARY.pdf
   *   (NWS Hanford monthly summaries: winter tule fog episodes on the San Joaquin
   *   Valley floor after rain, with stable air and light winds)
   */
  {
    slug: 'dry-eye-relief-visalia-ca',
    title: 'Dry eye relief in Visalia, California',
    description:
      'About 95 days a year hit 90°F in Visalia and summer afternoons run near 20 percent humidity. Local numbers, tule fog season and easy relief habits.',
    category: 'local',
    addedOn: '2026-11-13',
    body: [
      {
        p: `In Visalia, dry eyes track the San Joaquin Valley’s long, hot, rainless summer. NOAA’s normals for the Visalia station list roughly 95 days a year at 90°F or hotter and no measurable rain in July or August, and afternoon humidity at nearby Fresno sits in the low 20s. Air conditioning, dust and screens add to it. Relief comes from shielding your eyes, managing indoor air and using a lubricating drop exactly as labeled.`,
      },
      { h: 'Visalia’s climate in NOAA’s figures' },
      {
        p: `NOAA’s 1991 to 2020 climate normals for its Visalia weather station describe one of the hotter, drier places in California’s farm belt:`,
      },
      {
        list: [
          `Normal yearly precipitation is 10.32 inches, and only about 26 days a year bring a tenth of an inch or more.`,
          `July and August both have a normal rainfall of zero, and June through August together average 0.13 inch.`,
          `Highs average 93.8°F in July and 93.2°F in August.`,
          `About 95 days a year reach 90°F, and roughly 11 reach 100°F.`,
          `January is the wettest month at 1.96 inches, with highs around 55°F.`,
          `Freezing nights are uncommon, about nine a year.`,
        ],
      },
      { h: 'Heat, AC and summer afternoons' },
      {
        p: `NOAA’s humidity table has no Visalia entry, so Fresno, about 45 miles north on Highway 99, is the closest comparison. Fresno’s afternoon humidity averages 21 percent in July and 22 percent in August. Air that dry draws water from anything exposed to it, including the thin film of tears over your eyes.`,
      },
      {
        p: `Indoors isn’t much kinder. From May into October, Visalia homes, offices, schools and cars run the air conditioner for months, and AC removes moisture as it cools. The result is a day spent moving between dry outdoor heat and dry, chilled indoor air, usually with a vent blowing somewhere nearby.`,
      },
      {
        list: [
          `Point dash vents at your chest or hands, not your face, especially on long drives on 198 or 99.`,
          `In the office, ask to have a ceiling diffuser angled away from your desk, or move the chair.`,
          `Keep a bedroom ceiling fan on low, or off, so it doesn’t blow across your eyes all night.`,
          `Drink water through the day; heat and low humidity dry more than your eyes.`,
        ],
      },
      { h: 'Tule fog season' },
      {
        p: `Winter changes the picture. The National Weather Service office in Hanford, one county over, documents tule fog in its monthly weather summaries: dense ground fog that settles on the valley floor after rain, on calm nights under stable air, often from late fall into early spring. Fresno’s morning humidity averages 88 percent in December and January.`,
      },
      {
        p: `Fog is damp, so it isn’t the fog drying your eyes. The trouble comes from what people do about it: staying indoors with the furnace running, sitting in a car with the defroster and heater blasting, and squinting through gray mornings on the road. Turn the defroster’s airflow to the windshield only, and take a slow blink break whenever you stop. On the worst fog mornings, the safest choice is often to delay the drive.`,
      },
      { h: 'Dust, fields and orchards' },
      {
        p: `Visalia sits among the orchards, dairies and row crops of Tulare County, and dry soil moves. Harvest, field prep, tractors on county roads and wind across bare ground lift fine dust into the air, especially late in summer when nothing has fallen from the sky for months. Farm and packing house workers, landscapers and anyone driving rural roads with the windows down take in a steady dose.`,
      },
      {
        p: `Gritty air on top of dry air makes eyes feel scratchy. Don’t rub them, since that drags particles across the surface. Wash your hands, use a clean tissue, and wear protective eyewear on the job. If it feels like something is stuck in your eye, see an eye doctor instead of waiting.`,
      },
      { h: 'Weekends up the hill' },
      {
        p: `Visalia is a jumping-off point for drives up into Sequoia National Park, and the climb on Highway 198 takes you from the valley floor into the mountains in an afternoon. Higher, windier air dries the eyes in its own way; [dry air, wind and altitude](/guides/dry-air-wind-and-altitude) explains how. Pack sunglasses, keep your drops in a bag out of direct sun, and plan a few rest stops on the way up.`,
      },
      { h: 'Using a lubricating drop in the valley heat' },
      {
        p: `Quell’s label gives its Uses as: {uses}. The formula is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the main thing a 21 percent afternoon is working against. Follow the directions as printed: {directions}. One more line on the label applies every single time: {tip}.`,
      },
      {
        p: `Heat matters for the bottle too. The label says {storage}, and a car parked in a Visalia lot in July gets far hotter than that within minutes. Carry the bottle inside with you, and don’t leave spares in the glove box; [can you leave eye drops in a hot car](/guides/eye-drops-in-a-hot-car) explains why.`,
      },
      { h: 'Ordering Quell to Visalia' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Tulare County addresses for {shipping} per order, free with {freeBottles} or more bottles. No arrival date is promised, so order before a heat wave rather than during one, and bring the package in promptly. See the [Visalia page](/eye-drops/visalia-ca) and the [California page](/eye-drops/state/california) for more.`,
      },
      { h: 'When dryness needs an eye doctor' },
      {
        p: `If your eyes stay uncomfortable after the heat breaks, or dryness starts to affect how you see, make an appointment with an optometrist or ophthalmologist. Pinning down the cause, and caring for it, is their job, not a drop’s. Stop and get help if the label’s warning applies: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Visalia?',
        a: `Visalia averages about 95 days a year at 90°F or hotter by NOAA’s normals, July and August are normally rainless, and summer afternoon humidity at nearby Fresno is in the low 20s. Months of air conditioning dry indoor air as well.`,
      },
      {
        q: 'Does tule fog cause dry eyes?',
        a: `Fog itself is damp. What tends to dry eyes in tule fog season is the indoor heat, car heaters and defrosters people run while the fog sits on the valley floor.`,
      },
      {
        q: 'How hot does Visalia get in the summer?',
        a: `NOAA’s 1991 to 2020 normals for Visalia list average highs of 93.8°F in July and 93.2°F in August, with about 11 days a year reaching 100°F.`,
      },
      {
        q: 'Can I get eye drops shipped to Visalia, CA?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Visalia for {shipping}, or free with {freeBottles} or more bottles. No delivery date is promised, so order ahead of a hot spell.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-13 for dry-eye-relief-antioch-ca:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USC00040232.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USC00040232.csv
   *   (ANTIOCH PUMPING PLT #3, elev 18.3 m: annual precip 12.60 in; Jul 0.00,
   *   Aug 0.02, Jun 0.11; Jan 2.68 wettest; Jul high 91.4 F, Aug 90.2; Jul low 60.6;
   *   Jan high 55.7; 64.3 days at or above 90 F; 9.7 at or above 100 F;
   *   6.8 nights at or below 32 F; 30.4 days with 0.10 in or more)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (no Antioch row; STOCKTON, CA used: Jul afternoon 27, Aug 29; Jan morning 86,
   *   afternoon 71)
   * - https://tgftp.bldr.ncep.noaa.gov/data/raw/fx/fxus66.ksto.afd.sto.txt
   *   (NWS Sacramento area forecast discussions: onshore "delta breeze" and the
   *   strongest winds through the Delta on warm-season afternoons)
   */
  {
    slug: 'dry-eye-relief-antioch-ca',
    title: 'Dry eye relief in Antioch, California',
    description:
      'Hot, rainless summers, Delta wind and long Highway 4 commutes: what dries eyes in Antioch, NOAA’s local numbers, and steps that bring relief.',
    category: 'local',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Antioch’s dry eyes usually come from heat plus wind. NOAA’s normals for the Antioch station show about 64 days a year at 90°F or hotter and almost no rain from June through September, and the afternoon breeze funneling through the Delta speeds tear evaporation. Shielding your eyes from wind and car vents, blinking fully and using a lubricating drop as labeled all help. Ongoing symptoms deserve an eye doctor’s look.`,
      },
      { h: 'What NOAA’s Antioch station shows' },
      {
        p: `NOAA’s weather station at the Antioch pumping plant sits close to the river, about 60 feet above sea level. Its 1991 to 2020 normals:`,
      },
      {
        list: [
          `Normal yearly precipitation is 12.60 inches, falling on roughly 30 days.`,
          `July’s normal rainfall is zero; August’s is two hundredths of an inch.`,
          `Average highs reach 91.4°F in July and 90.2°F in August.`,
          `About 64 days a year hit 90°F, and close to 10 reach 100°F.`,
          `Summer nights are mild, with July lows around 61°F.`,
          `January is the wettest month at 2.68 inches, with highs near 56°F, and freezing nights are rare, about seven a year.`,
        ],
      },
      {
        p: `Those mild summer nights are a clue to what makes Antioch different from the valley towns farther inland: ocean air reaches it. That same air movement is part of why eyes here dry out.`,
      },
      { h: 'The Delta breeze' },
      {
        p: `Antioch sits on the San Joaquin River where it widens into the Sacramento–San Joaquin Delta. National Weather Service forecast discussions from the Sacramento office describe the “delta breeze,” onshore wind that pushes inland through the Delta on warm afternoons, often with the strongest gusts right through the Delta itself. It cools things down. It also keeps the air moving across your face for hours.`,
      },
      {
        p: `Moving air pulls moisture from the tear film faster than still air does. On a breezy afternoon at the marina, on the fishing pier, or walking the waterfront downtown, that adds up. Habits that help when the wind is up:`,
      },
      {
        list: [
          `Wear wraparound sunglasses; they block wind from the sides that flat lenses let through.`,
          `Face away from the wind when you stop to talk or rest.`,
          `On a boat, keep a brimmed hat and sunglasses on, and sit behind the windshield when underway.`,
          `Indoors, close windows on the windward side when gusts carry dust.`,
        ],
      },
      { h: 'Heat without much humidity' },
      {
        p: `NOAA’s humidity table doesn’t include Antioch, so Stockton, about 30 miles east across the Delta, is the nearest listed station. Its afternoon humidity averages 27 percent in July and 29 percent in August. Combine that with a 90-degree day and the air is thirsty.`,
      },
      {
        p: `Air conditioning takes over indoors through the long warm season, and AC dries air as it cools. Eyes feel it most in the places where cold air blows directly: the car, a desk under a ceiling vent, or a bedroom with a wall unit aimed at the bed. Redirect those vents and your eyes have less to fight.`,
      },
      { h: 'The Highway 4 commute' },
      {
        p: `Many Antioch residents spend a long stretch of the day commuting west on Highway 4 or riding BART toward Oakland and San Francisco. In the car, that can mean an hour or more with the air conditioner on and the sun low in the windshield. Squinting into glare partly closes the eyes without a proper blink.`,
      },
      {
        list: [
          `Set the fan to the lowest speed that keeps you comfortable and aim it below your face.`,
          `Use recirculate on hot, dusty days.`,
          `Wear sunglasses for the morning and evening sun.`,
          `If your eyes need a drop, wait until you’ve parked or pulled over safely. Never use drops while driving.`,
        ],
      },
      {
        p: `On the train, phone and tablet screens are the bigger factor. People blink less while reading a screen. Look up and out the window every few minutes, and blink slowly a few times.`,
      },
      { h: 'Dust, dry hills and fire season' },
      {
        p: `By midsummer the grassy hills around Antioch and the slopes toward Mount Diablo turn golden and dry. Wind lifts dust from those hills, from construction sites in fast-growing neighborhoods, and from open land along the river. Gardeners, contractors and anyone working outside get a steady dose of fine grit with the dry air. Wash your hands before touching your eyes, and wear safety glasses for yard work and job sites. If something feels lodged in your eye, have an eye doctor check it rather than rubbing.`,
      },
      { h: 'A lubricating drop for Antioch weather' },
      {
        p: `According to its Drug Facts label, Quell’s Uses are: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, which matters most when wind and dry heat are both working on your eyes. The label’s directions are {directions}. And whenever you open the bottle: {tip}.`,
      },
      {
        p: `Windy, hot weeks don’t change those directions. If three drops a day don’t seem to keep up, talk with your eye doctor instead of using more. Store the bottle as the label says, {storage}, and keep it out of a parked car on a 100-degree afternoon.`,
      },
      { h: 'Ordering Quell in Antioch' },
      {
        p: `Orders ship from Brentwood, Tennessee, to East Contra Costa County addresses for {shipping}, free with {freeBottles} or more bottles. No delivery date is promised. You can check out as a guest. The [Antioch page](/eye-drops/antioch-ca) has local details, and the [California page](/eye-drops/state/california) lists other cities.`,
      },
      { h: 'When to see an eye doctor in Antioch' },
      {
        p: `Relief from a drop is one thing; finding out why dryness keeps coming back, and caring for it, is an eye doctor’s work. Book a visit if symptoms continue after the hot season, or sooner if your vision changes. The label spells out when to stop using it: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel dry in Antioch?',
        a: `Antioch summers are hot and nearly rainless by NOAA’s normals, and afternoon wind funneling through the Delta keeps dry air moving across your eyes. Air conditioning at home and in the car adds to it.`,
      },
      {
        q: 'What is the delta breeze in Antioch?',
        a: `It’s the onshore wind that National Weather Service forecasters in Sacramento describe pushing inland through the Delta on warm afternoons. It cools the area but keeps air moving, which speeds evaporation from the eyes.`,
      },
      {
        q: 'How many days a year is Antioch over 90 degrees?',
        a: `NOAA’s 1991 to 2020 normals for the Antioch station list about 64 days a year at 90°F or hotter, and close to 10 days at 100°F or hotter.`,
      },
      {
        q: 'Does Quell ship to Antioch, California?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Antioch for {shipping} per order, or free with {freeBottles} or more bottles, and no arrival date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-13 for dry-eye-relief-lake-jackson-tx:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00012976.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00012976.csv
   *   (ANGLETON BRAZORIA AP, elev 7.6 m: annual precip 45.76 in; Sep 5.96 wettest;
   *   Aug high 93.2 F, Jul 92.8; Aug low 74.6; Jan high 65.3, low 44.8;
   *   94.1 days at or above 90 F; 1.8 at or above 100 F; 10.2 nights at or below
   *   32 F; 59.2 days with 0.10 in or more)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (no Lake Jackson row; HOUSTON, TX used: Jul and Aug morning 93; Jul
   *   afternoon 57, Aug 56; annual 89 morning / 59 afternoon)
   * - https://lakejackson-tx.gov/267/History
   *   (city history: Dow built the town for employees of its Brazoria County
   *   plants; construction began December 8, 1941; incorporated March 14, 1944)
   */
  {
    slug: 'dry-eye-relief-lake-jackson-tx',
    title: 'Dry eye relief in Lake Jackson, Texas',
    description:
      'Muggy Gulf Coast air outside, cold dry AC inside: why eyes still dry out in Lake Jackson, NOAA’s local figures, and habits that help at home and work.',
    category: 'local',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Lake Jackson’s air is humid, so dry eyes here mostly come from indoors. NOAA’s normals for the nearby Angleton airport show about 94 days a year at 90°F or hotter, which keeps air conditioning running at home, in the truck and at the plant for much of the year. Cold, dry AC air, coastal wind and long shifts all speed tear evaporation. Redirecting vents, protecting your eyes at work and using a lubricating drop as labeled help.`,
      },
      { h: 'Gulf Coast weather in NOAA’s numbers' },
      {
        p: `The closest NOAA station with full climate normals is Texas Gulf Coast Regional Airport in Angleton, a few miles north of town. Its 1991 to 2020 figures:`,
      },
      {
        list: [
          `About 94 days a year reach 90°F, though 100-degree days are rare, fewer than two a year.`,
          `August is the hottest month, with highs averaging 93.2°F and lows near 75°F.`,
          `Normal yearly precipitation is 45.76 inches, spread across about 59 days with a tenth of an inch or more.`,
          `September is the wettest month at 5.96 inches.`,
          `January highs average 65.3°F, and freezing nights come about 10 times a year.`,
        ],
      },
      {
        p: `NOAA’s humidity table has no Lake Jackson entry, so Houston, about 50 miles north, is the nearest comparison. Its morning humidity averages 93 percent in July and August, and even afternoons stay in the high 50s. This is muggy country.`,
      },
      { h: 'Humid outside, dry inside' },
      {
        p: `If the air outside is that damp, why do eyes feel dry? Because hardly anyone spends a Gulf Coast summer outside. Air conditioners cool by pulling water out of the air, and in a place this hot they run from spring well into fall. Your eyes spend most of the day in chilled, dried air, often with a vent pointed straight at you.`,
      },
      {
        list: [
          `Aim car vents at your chest; a long drive on Highway 288 with cold air on your face dries eyes fast.`,
          `Raise the thermostat a degree or two so the system cycles less.`,
          `Point bedroom ceiling fans and wall units away from the pillow.`,
          `Step outside for a few minutes on breaks; the humid air is a change of pace for your eyes.`,
        ],
      },
      { h: 'Plant shifts and refinery work' },
      {
        p: `Lake Jackson was built as a company town. The city’s own history says Dow started construction on December 8, 1941, to house employees of its Brazoria County plants, and the city incorporated in 1944. Petrochemical and plant work in the Freeport area still shapes daily life here, and the work is hard on eyes in particular ways:`,
      },
      {
        list: [
          `Long shifts, sometimes rotating, with long stretches in air-conditioned control rooms.`,
          `Hours watching monitors, where concentration cuts down blinking.`,
          `Outdoor work in wind, heat and glare, sometimes in safety glasses that fog or trap warm air.`,
          `Night shifts that throw off sleep, which tends to leave eyes feeling drier.`,
        ],
      },
      {
        p: `Follow your site’s rules for eye protection first; no drop does what a face shield or goggles do. If a chemical or debris gets in your eye at work, use the plant’s eyewash station and get medical help right away. A lubricating drop is for ordinary dryness, not exposures.`,
      },
      { h: 'Wind off the Gulf' },
      {
        p: `Surfside Beach and Quintana are minutes away, and a day on the sand, a fishing trip out of the Freeport jetties or a run down the Brazos in a boat means hours of steady coastal wind. Even humid air dries the eyes when it’s moving fast enough across them, and sun reflecting off water makes people squint instead of blinking fully.`,
      },
      {
        p: `Wraparound sunglasses with a strap for the boat, a brimmed hat, and regular breaks in the shade go a long way. [Dry eyes on a boat](/guides/dry-eyes-on-a-boat) has more for days on the water.`,
      },
      { h: 'Using a lubricating drop on the Gulf Coast' },
      {
        p: `Quell’s Drug Facts label gives its Uses as: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the problem in a cold control room or a car with the AC on high. The label’s directions: {directions}. Keep the bottle tip clean, as the label instructs: {tip}.`,
      },
      {
        p: `Plan the three daily drops around your shift, say before you leave, at lunch and after you get home, rather than reaching for the bottle while you’re driving. Store it as the label says, {storage}. A truck cab in a Lake Jackson parking lot in August gets well past that, so keep the bottle in your lunch bag or locker instead. [Can you leave eye drops in a hot car](/guides/eye-drops-in-a-hot-car) explains the heat issue.`,
      },
      { h: 'Ordering Quell to Lake Jackson' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Brazoria County for {shipping} per order, free with {freeBottles} or more bottles. No delivery date is promised, so reorder before you run out, and if storms are forecast, have the package delivered where it won’t sit in the heat or rain. See the [Lake Jackson page](/eye-drops/lake-jackson-tx) and the [Texas page](/eye-drops/state/texas).`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dryness that keeps coming back, or anything that affects your vision, needs an optometrist or ophthalmologist. Finding the cause and caring for it is their job; a drop only addresses ordinary dryness. The label lists when to stop: {stopUse} The [dry eye self-check](/self-check) can help you describe symptoms before a visit.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes dry in Lake Jackson if it’s so humid?',
        a: `The outdoor air is humid, but about 94 days a year reach 90°F by NOAA’s normals for nearby Angleton, so air conditioning runs for much of the year. AC dries indoor air, and that’s where most people spend their day.`,
      },
      {
        q: 'Can air conditioning dry out your eyes?',
        a: `Yes. Air conditioners remove moisture as they cool, and a vent blowing toward your face speeds evaporation from the tear film. Aiming vents away from your eyes is the simplest fix.`,
      },
      {
        q: 'How hot does it get in Lake Jackson, Texas?',
        a: `NOAA’s 1991 to 2020 normals for the Angleton airport, the nearest full station, list August highs averaging 93.2°F and about 94 days a year at 90°F or hotter. Days at 100°F are rare.`,
      },
      {
        q: 'Can I order Quell to Lake Jackson?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Lake Jackson for {shipping}, or free with {freeBottles} or more bottles. Checkout works without an account, and no delivery date is promised.`,
      },
    ],
  },
  /*
   * Sources fetched 2026-11-13 for dry-eye-relief-columbia-sc:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013883.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013883.csv
   *   (COLUMBIA METRO AP, elev 70.4 m: annual precip 45.24 in; Jul 5.35 wettest;
   *   Jul high 92.7 F, low 72.0; Jan high 56.8; 80.8 days at or above 90 F;
   *   6.0 at or above 100 F; 46.5 nights at or below 32 F; 70.7 days with 0.10 in
   *   or more; snow 1.2 in)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (COLUMBIA, SC: Apr afternoon 43, Mar 47, Feb 49; Jul afternoon 52, Aug 54;
   *   Aug-Oct morning 89; annual 84 morning / 50 afternoon)
   * - https://www.experiencecolumbiasc.com/articles/post/columbia-is-famously-hot-and-now-registered/
   *   ("Famously Hot" tourism slogan, registered 2010)
   */
  {
    slug: 'dry-eye-relief-columbia-sc',
    title: 'Dry eye relief in Columbia, South Carolina',
    description:
      'Columbia’s “Famously Hot” summers mean months of AC, and spring afternoons are drier than most expect. NOAA’s figures and simple relief steps.',
    category: 'local',
    addedOn: '2026-11-13',
    body: [
      {
        p: `In Columbia, dry eyes have two peak seasons. NOAA’s normals for Columbia Metropolitan Airport list about 81 days a year at 90°F or hotter, so air conditioning runs for months; and NOAA’s humidity table shows the driest afternoons in March and April, not summer. Redirecting vents, building blink breaks into screen time and using a lubricating drop exactly as labeled help. Anything persistent belongs with an eye doctor.`,
      },
      { h: 'Columbia’s weather, by NOAA’s numbers' },
      {
        p: `The region’s tourism slogan, “Famously Hot,” was registered as a trademark in 2010, and NOAA’s 1991 to 2020 normals for the airport in West Columbia back it up:`,
      },
      {
        list: [
          `About 81 days a year reach 90°F, and roughly six reach 100°F.`,
          `July is the hottest month, with highs averaging 92.7°F and lows around 72°F.`,
          `Normal yearly precipitation is 45.24 inches, and July is also the wettest month at 5.35 inches, mostly from afternoon storms.`,
          `January highs average 56.8°F, and about 46 nights a year drop to freezing.`,
          `Snowfall averages just over an inch a year.`,
        ],
      },
      { h: 'Summer: long months of air conditioning' },
      {
        p: `From late May through September, Columbia runs on AC. Homes, State House offices, classrooms at the University of South Carolina, Fort Jackson’s buildings and every car on I-26 keep cold air moving. Air conditioners pull water from the air as they cool, and a vent blowing on your face speeds evaporation from the tear film.`,
      },
      {
        p: `Outdoors, NOAA’s humidity table shows Columbia’s mornings at 86 to 89 percent humidity in summer, with afternoons in the low 50s. So the dryness people feel in July usually isn’t the outdoor air. It’s the many hours inside.`,
      },
      {
        list: [
          `Aim vents at your chest, not your face, in the car and at your desk.`,
          `Set the thermostat a little higher so the system runs less often.`,
          `Keep the bedroom fan on low, and don’t let it blow across the pillow.`,
          `When you step outside, wear sunglasses; glare makes you squint rather than blink.`,
        ],
      },
      { h: 'Spring’s surprisingly dry afternoons' },
      {
        p: `Here’s the part many Columbians don’t expect. In NOAA’s Comparative Climatic Data, afternoon humidity at Columbia is lowest in April, averaging 43 percent, with March at 47 and February at 49. Breezy spring days, pollen season and the first warm weekends at Lake Murray or on the Riverwalk all fall in that window.`,
      },
      {
        p: `Drier, moving air pulls moisture from the eyes faster. On windy spring days, wraparound sunglasses help, and so does washing your face and hands when you come in from yard work. If itching, rather than dryness, is your main complaint, [eye drops for itchy eyes](/guides/eye-drops-for-itchy-eyes) explains what a lubricating drop’s label does and doesn’t cover.`,
      },
      { h: 'Winter heat in the Midlands' },
      {
        p: `Columbia winters are short but real, with dozens of freezing nights a year. Heat pumps and furnaces switch on in December, and warmed indoor air loses relative humidity. People notice it most in the morning, after a night with the heat running. [Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) covers bedroom humidity and where to put a space heater.`,
      },
      { h: 'Students, state workers and screens' },
      {
        p: `A state capital and a large university mean a lot of people reading screens through the workday: legislative staff, agency workers, students in the library, and soldiers in training classrooms. Concentrating on a monitor cuts blinking, and incomplete blinks leave the eye’s surface exposed.`,
      },
      {
        list: [
          `Every 20 minutes, look away at something far off and blink slowly a few times.`,
          `Keep the screen a bit below eye level.`,
          `Use a desk lamp to cut glare instead of turning screen brightness all the way up.`,
          `On game days at Williams-Brice Stadium, bring sunglasses for the heat and glare of an early-season afternoon.`,
        ],
      },
      { h: 'Using a lubricating drop in Columbia' },
      {
        p: `Quell’s Drug Facts label lists its Uses as: {uses}. The formula is designed to reinforce the tear film’s oil layer to help reduce moisture loss, whether the moisture is being pulled away by an office AC vent in August or a dry April breeze. Use it as directed: {directions}. Each time you open the bottle, the label’s handling instruction applies: {tip}.`,
      },
      {
        p: `The label gives the storage range as {storage}. A parked car in Columbia in July heats up far past that, so keep the bottle in your bag rather than the console.`,
      },
      { h: 'Ordering Quell in Columbia' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Columbia-area addresses for {shipping}, free with {freeBottles} or more bottles. No arrival date is promised, so order before you run low. Checkout doesn’t require an account. The [Columbia page](/eye-drops/columbia-sc) and the [South Carolina page](/eye-drops/state/south-carolina) have more.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Make an appointment if dryness lasts through the season or returns again and again, or sooner if your eyes hurt or your vision changes. Finding the reason and caring for it is an eye doctor’s work. The label says when to stop: {stopUse} See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) for more.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes dry in Columbia, SC?',
        a: `Columbia averages about 81 days a year at 90°F or hotter by NOAA’s normals, so air conditioning runs for months and dries indoor air. Spring afternoons are also the driest of the year outdoors.`,
      },
      {
        q: 'What is the driest month in Columbia, SC?',
        a: `By afternoon humidity, it’s April. NOAA’s Comparative Climatic Data lists Columbia’s April afternoon average at 43 percent, the lowest of any month, with March close behind.`,
      },
      {
        q: 'Why is Columbia SC called Famously Hot?',
        a: `“Famously Hot” is the region’s tourism slogan, registered in 2010. NOAA’s normals for the Columbia airport list about 81 days a year at 90°F or hotter.`,
      },
      {
        q: 'Does Quell ship to Columbia, South Carolina?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Columbia for {shipping}, or free with {freeBottles} or more bottles. No delivery date is promised.`,
      },
    ],
  },
  {
    slug: 'sending-eye-drops-to-someone-in-the-hospital',
    title: 'Sending eye drops to someone in the hospital',
    description:
      'Before mailing eye drops to a hospital patient, call the unit. Why the care team decides what goes in their eyes, and why home delivery often works better.',
    category: 'shipping',
    addedOn: '2026-11-13',
    body: [
      {
        p: `You can try, but call the hospital unit first. Mail and package rules differ from one hospital to the next, patients often move rooms or go home before a box arrives, and during a stay the care team decides what goes into a patient’s eyes. For many families, the more useful plan is shipping eye drops to the person’s home so a bottle is waiting after discharge, then asking the nurse whether drops are wanted in the meantime.`,
      },
      { h: 'Can you send eye drops to someone in the hospital?' },
      {
        p: `Sometimes, and only after checking. Hospitals handle incoming mail and deliveries in very different ways. Some route every package through a central mailroom, which can take time to reach a floor. Some units, such as intensive care, may not accept outside items at all. Others are happy to pass along a small box if it’s clearly labeled. Nothing about a hospital address is unusual for a shipping label, but whether the package actually reaches the bedside depends on the building’s own process.`,
      },
      {
        p: `Quell ships from Brentwood, Tennessee, and no delivery date is promised. For a hospital, that matters more than usual: a stay can be shorter than the time a package spends in transit, and a box that arrives after the patient leaves may be returned or held in a mailroom.`,
      },
      { h: 'Ask the unit these questions first' },
      {
        p: `Call the main hospital number and ask for the patient’s unit, or ask a family member who visits to check at the nurses’ station. Useful questions:`,
      },
      {
        list: [
          `Does the hospital accept packages for patients, and how should they be addressed?`,
          `Should the package include the patient’s full name, room number and unit name?`,
          `Is there a central mailroom, and how long does it usually take to bring items up?`,
          `Are outside medicines, including over-the-counter eye drops, allowed in the room?`,
          `Who decides whether the patient can use drops they bring in?`,
          `Is a discharge date expected, so you can ship to their home instead?`,
        ],
      },
      {
        p: `Write down what you’re told and the name of the person who told you. Rules can change between shifts or floors, and it helps to know who to ask again.`,
      },
      { h: 'Why the care team decides what goes in the eyes' },
      {
        p: `In a hospital, medicines are usually ordered, tracked and given by the staff, including over-the-counter ones. Nurses need to know everything that goes into a patient so they can spot interactions, track reactions and keep the chart accurate. A bottle of drops tucked into a bedside drawer bypasses all of that.`,
      },
      {
        p: `That fits what the Quell label already asks of anyone whose situation goes beyond everyday dryness. It lists when to stop and ask a doctor: {stopUse} A patient in the hospital is under a doctor’s care by definition, so the doctor and nurses are the right people to decide whether a lubricating drop belongs in the plan. The label also doesn’t address use alongside other eye drops, which hospital patients are sometimes given; that question belongs to the care team or the pharmacist.`,
      },
      {
        p: `If they do approve it, they may want to keep the bottle with the patient’s other medicines or check the ingredients first. The [Drug Facts page](/drug-facts) has the full panel, including the active ingredients, {actives}, and the label caution: {warnings}. Sharing that page link with the nurse is quicker than reading the carton over the phone.`,
      },
      { h: 'Ship it home for after discharge' },
      {
        p: `For most families, the practical choice is the patient’s home address. The bottle arrives on its own schedule, someone can bring it inside and keep it within the label’s storage range, {storage}, and it’s ready when the person comes home. Recovery at home often means long hours in bed or in a chair, reading, watching television or scrolling a phone, with the heat or air conditioning running. That’s when dry, tired eyes tend to show up.`,
      },
      {
        list: [
          `Use the address where they’ll actually recover, which might be a relative’s house.`,
          `Put their name on the order exactly as it appears on their mailbox or door.`,
          `Tell whoever is collecting the mail that a small package is coming.`,
          `Mention it to the person, so a box with an unfamiliar sender doesn’t get set aside.`,
        ],
      },
      {
        p: `[Ordering eye drops for someone else](/guides/ordering-eye-drops-for-someone-else) covers the checkout details: whose email to use, which address goes where, and what the recipient sees.`,
      },
      { h: 'If they’re moving to rehab or a care facility' },
      {
        p: `Some patients leave the hospital for a rehabilitation unit or a skilled nursing facility instead of going straight home. Those facilities have their own rules about outside medicines, often stricter than a household’s. [Ordering eye drops for someone in a nursing home](/guides/ordering-eye-drops-for-someone-in-a-nursing-home) walks through the questions to ask before ordering for a facility.`,
      },
      { h: 'What to include, and what not to' },
      {
        list: [
          `Don’t open the carton to add a note; an intact tamper seal is part of what tells the nurse the bottle hasn’t been touched.`,
          `Don’t send an opened bottle from your own supply. Multi-use bottles are meant for one person, and the label says {tip}.`,
          `Do send a separate card or message letting them know it’s coming.`,
          `Do tell them the appearance is normal: {appearance}`,
        ],
      },
      { h: 'If the package arrives too late' },
      {
        p: `If the patient has already gone home, ask the hospital whether the mailroom forwards packages or holds them for pickup. A family member may be able to collect it. If the bottle ends up unopened and unwanted, refunds on unopened bottles are available within {returnDays} days of delivery, without sending the bottle back. Packages that arrive damaged, incorrect or with a broken seal are replaced. For an order question, call {phone}, {hours}; for questions about the patient’s eyes, the care team is the right contact. See [how to contact Quell](/guides/how-to-contact-quell) for details.`,
      },
    ],
    faq: [
      {
        q: 'Can you send eye drops to someone in the hospital?',
        a: `Sometimes. Hospitals set their own rules for patient packages, and some units don’t accept outside items. Call the unit first, and ask whether outside eye drops are allowed before you order.`,
      },
      {
        q: 'Can I bring my own eye drops to the hospital?',
        a: `Ask the nurse. During a stay, the care team usually tracks and gives every medicine, including over-the-counter drops, and they decide whether a drop from home can be used.`,
      },
      {
        q: 'Should I ship eye drops to the hospital or their home?',
        a: `Usually their home. A hospital stay can end before a package arrives, and no delivery date is promised, so a bottle waiting at home is ready for recovery after discharge.`,
      },
      {
        q: 'What happens to a package that arrives after the patient is discharged?',
        a: `That depends on the hospital’s mailroom. Some forward packages and some hold them for pickup, so ask the front desk. An unopened bottle can be refunded within {returnDays} days of delivery without sending it back.`,
      },
    ],
  },
  {
    slug: 'how-to-tell-if-eye-drops-are-counterfeit',
    title: 'How to tell if eye drops are counterfeit',
    description:
      'Check the seal, the Drug Facts panel, the lot and expiration date, and what the drops look like. A step-by-step check, plus how to report a suspected fake.',
    category: 'ordering',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Start with the package before you open anything. A genuine over-the-counter eye drop has an intact tamper seal, a complete Drug Facts panel in the FDA’s standard format, a printed lot number and expiration date, and contents that match the label. Misspellings, missing sections, a broken seal or drops that look wrong are reasons not to use the bottle. If you suspect a fake, keep it and report it to the FDA’s MedWatch program.`,
      },
      { h: 'Check the tamper seal first' },
      {
        p: `Eye drops are sealed so you can tell whether a bottle was opened after it left the maker. Before you twist anything, look closely:`,
      },
      {
        list: [
          `Is the seal there at all, and is it unbroken all the way around?`,
          `Does it look like it was cut, peeled or glued back down?`,
          `Is the cap sitting at an odd angle, or loose before you’ve turned it?`,
          `Is the carton’s flap torn, re-taped or crushed in a way that looks deliberate?`,
        ],
      },
      {
        p: `A broken seal doesn’t prove a bottle is counterfeit, since damage happens in transit. Either way, don’t use it. A Quell order that arrives with a broken tamper seal is replaced; [what if the tamper seal is broken](/guides/broken-tamper-seal) explains how to report it.`,
      },
      { h: 'Read the Drug Facts panel' },
      {
        p: `Federal rules at 21 CFR 201.66 set the format for the Drug Facts panel on over-the-counter drugs: the title “Drug Facts,” then Active ingredient(s), Purpose(s), Use(s), Warnings, Directions, Other information and Inactive ingredients, in that order, often followed by Questions. Counterfeiters tend to get this part wrong. Signs worth noticing:`,
      },
      {
        list: [
          `Sections missing, out of order, or with headings that don’t match the standard ones.`,
          `Misspelled ingredient names or company names.`,
          `Blurry, pixelated printing, or text that looks photocopied.`,
          `Directions or warnings that differ from the same product you bought before.`,
          `No company name and address on the package.`,
        ],
      },
      {
        p: `For Quell, you can compare the carton line by line with the transcription on the [Drug Facts page](/drug-facts). The active ingredients are {actives}. The inactive ingredients are {inactives}. The directions read: {directions}. If the carton you’re holding says something different, stop and call before using it.`,
      },
      { h: 'Look for the lot number, expiration date and NDC' },
      {
        p: `Legitimate drug packaging carries a lot number and an expiration date, usually stamped together on a carton flap, the bottom of the box or the bottle itself. Smudged, scratched-off or missing codes are a warning sign. Many drug cartons also print a National Drug Code, the number that identifies the product and package; [what is the NDC number on eye drops](/guides/what-is-the-ndc-number-on-eye-drops) explains where it appears and what it does and doesn’t tell you.`,
      },
      {
        p: `Compare the codes on the carton with those on the bottle. They should match. A carton and bottle with different lot numbers suggest the two didn’t start out together. [What the lot number on eye drops means](/guides/what-the-lot-number-on-eye-drops-means) covers how batches are tracked.`,
      },
      { h: 'Check what the drops themselves look like' },
      {
        p: `Many eye drops are clear, so people assume all of them should be. Quell isn’t. Its label states: {milky}. The site’s own note says: {appearance} A clear, watery liquid in a Quell bottle would be the thing to question.`,
      },
      {
        p: `The label also says {doNotUse}. If the color has shifted from how it looked when you first opened it, or the liquid has particles floating in it, set the bottle aside. [How do I know if my eye drops have gone bad](/guides/how-do-i-know-if-my-eye-drops-have-gone-bad) covers the other signs.`,
      },
      { h: 'Where the bottle came from matters' },
      {
        p: `Most counterfeit risk comes from the seller, not the shelf. Bottles from marketplace listings with unclear sellers, social media ads, flea markets or overseas sites are harder to trace back to the maker. A price far below what you usually pay is a reason to slow down. [How to spot a fake eye drop website](/guides/how-to-spot-a-fake-eye-drop-website) covers checking an online shop before you buy, and [where can I buy Quell](/guides/where-to-buy-quell) lists where Quell comes from.`,
      },
      {
        p: `Orders from quelldrop.com ship from Brentwood, Tennessee. If anything about a Quell package looks off, call {phone}, {hours}, before you use it.`,
      },
      { h: 'How to report a suspected counterfeit' },
      {
        p: `The FDA’s MedWatch program accepts reports from consumers about suspected counterfeit medical products. You can report online, on the consumer form FDA 3500B, or by phone at 1-800-FDA-1088. The FDA notes that photos of all sides of the product help it review a report.`,
      },
      {
        list: [
          `Don’t throw the bottle or the carton away.`,
          `Photograph every side of the carton and bottle, including the seal and the printed codes.`,
          `Note where and when you bought it, and keep the receipt or order confirmation.`,
          `If you used the drops and your eyes hurt or your vision changed, see a doctor first, then report.`,
        ],
      },
    ],
    faq: [
      {
        q: 'How can you tell if eye drops are fake?',
        a: `Check for an intact tamper seal, a complete Drug Facts panel in the standard order, a clear lot number and expiration date, and contents that look the way the label describes. Spelling errors and missing sections are common giveaways.`,
      },
      {
        q: 'What color should Quell eye drops be?',
        a: `Quell’s label says the product appears as a milky brown solution. That color comes from its oil-based ingredients and is normal; don’t use it if the color changes from how it arrived.`,
      },
      {
        q: 'How do I report counterfeit eye drops?',
        a: `Report it to the FDA’s MedWatch program online, on consumer form FDA 3500B, or by calling 1-800-FDA-1088. Keep the bottle and carton, and include photos of every side.`,
      },
      {
        q: 'Should I use eye drops if the seal is broken?',
        a: `No. A broken seal means you can’t tell what happened to the bottle. A Quell order that arrives with a broken tamper seal is replaced if you report it within {returnDays} days.`,
      },
    ],
  },
  {
    slug: 'are-dry-eyes-worse-in-summer-or-winter',
    title: 'Are dry eyes worse in summer or winter?',
    description:
      'Both seasons dry eyes, for different reasons: heated indoor air in winter, AC, wind and sun in summer. What changes each season and what helps.',
    category: 'seasonal',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Neither season wins for everyone. Winter dries eyes mostly indoors, where heated air loses relative humidity, and outdoors through cold wind. Summer does it through air conditioning, fans, wind and bright sun that makes people squint instead of blinking fully. Which feels worse depends on where you live and how you spend your day. Many people notice the change between seasons most, when the furnace or AC first switches on.`,
      },
      { h: 'Are dry eyes worse in winter?' },
      {
        p: `For many people in colder parts of the country, yes. The main reason is heat, not cold. Winter air outdoors holds little moisture to begin with. When a furnace, heat pump or radiator warms that air, its relative humidity drops further, because warm air can hold more water than it’s carrying. Spend most of a January day indoors and your eyes sit in very dry air for hours.`,
      },
      {
        list: [
          `Forced-air vents blow that dry air across the room, and sometimes straight at a desk or bed.`,
          `Car heaters and defrosters aim warm air toward the face on every drive.`,
          `Outdoors, cold wind on a walk, a ski run or a snowy commute pulls moisture off the eye’s surface.`,
          `Shorter days mean more evenings on screens, and people blink less while reading them.`,
        ],
      },
      {
        p: `[Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) goes deeper into indoor heat, and [dry eyes from cold air](/guides/dry-eyes-from-cold-air) covers the outdoor side.`,
      },
      { h: 'Are dry eyes worse in summer?' },
      {
        p: `In hot places, they can be. Summer’s drying comes from different sources:`,
      },
      {
        list: [
          `Air conditioning removes moisture as it cools, and it often runs for months in the South and Southwest.`,
          `Fans and ceiling fans keep air moving across your face, which speeds evaporation from the tear film.`,
          `Wind at the beach, on a boat or on a bike ride does the same outdoors.`,
          `Bright sun and glare off water, sand or pavement make people squint, and a squint isn’t a full blink.`,
          `In dry climates, outdoor afternoons can be very low in humidity even before the AC comes on.`,
          `Pool water and long swims can leave eyes feeling irritated afterward.`,
        ],
      },
      { h: 'Are dry eyes worse in hot weather or cold weather?' },
      {
        p: `Temperature by itself matters less than three other things: how dry the air is, how much it’s moving, and how often you blink. A humid summer day in an air-conditioned office can feel drier on the eyes than a mild, damp winter afternoon outside. A cold, windy morning on a ski lift can feel drier than either. Think about the air your face is actually in, hour by hour, rather than the number on the thermometer.`,
      },
      { h: 'How the tear film handles each season' },
      {
        p: `The tear film has three layers: an inner mucus layer that helps tears stick to the eye, a watery middle layer, and an outer oil layer that slows evaporation. Every blink spreads a fresh film across the surface. Dry, moving or heated air speeds up the loss of the watery layer between blinks, in any month of the year. [What is the tear film](/guides/what-is-the-tear-film) explains each layer.`,
      },
      { h: 'The switchover weeks' },
      {
        p: `Many people notice dry eyes most when the seasons turn. The first cold week of fall, when the heat comes on for the first time in months, and the first hot week of late spring, when the AC starts running all over again, both change indoor air quickly. Eyes that were comfortable last week suddenly feel gritty. Those are good weeks to check where vents point, refill a humidifier and pay attention to blinking.`,
      },
      { h: 'Habits for each season' },
      {
        p: `Winter:`,
      },
      {
        list: [
          `Run a clean humidifier where you sleep; see [does a humidifier help dry eyes](/guides/does-a-humidifier-help-dry-eyes).`,
          `Point heat registers and space heaters away from your face.`,
          `Use the car’s floor vents instead of the dash vents.`,
          `Wear wraparound sunglasses or goggles in cold wind and snow glare.`,
        ],
      },
      {
        p: `Summer:`,
      },
      {
        list: [
          `Angle AC vents toward your chest, at home, at work and in the car.`,
          `Keep bedroom fans on low and not aimed at the pillow.`,
          `Wear sunglasses outdoors to cut glare and wind.`,
          `Drink water through hot days.`,
          `Rinse your face after the pool.`,
        ],
      },
      {
        p: `Year-round: take short screen breaks, look across the room and blink slowly a few times.`,
      },
      { h: 'Using a lubricating drop in any season' },
      {
        p: `Quell’s label lists its Uses as: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, and the directions stay the same whatever the season: {directions}. Store the bottle as the label says, {storage}. In summer, that means keeping it out of a hot car; in winter, out of a freezing one.`,
      },
      {
        p: `If your eyes stay dry through every season, or the dryness keeps getting worse, that’s a reason to see an eye doctor. The label is clear about when to stop: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Are dry eyes worse in summer or winter?',
        a: `It depends on where you live and how you spend the day. Winter’s heated indoor air and cold wind dry eyes, and so do summer’s air conditioning, fans, wind and glare.`,
      },
      {
        q: 'Why are my eyes so dry in the summer?',
        a: `Air conditioning removes moisture from indoor air, fans and outdoor wind speed evaporation from the eyes, and bright sun makes people squint instead of blinking fully.`,
      },
      {
        q: 'Are dry eyes worse in cold weather?',
        a: `Cold air often holds little moisture, and heating it indoors lowers its relative humidity further. Cold wind outdoors also pulls moisture from the eyes, so many people notice more dryness in winter.`,
      },
      {
        q: 'Why do my eyes feel drier when the seasons change?',
        a: `The weeks when the heat or air conditioning first switches on change indoor air quickly. Checking vents and humidity during those weeks often helps.`,
      },
    ],
  },
  {
    slug: 'christmas-gifts-for-a-teacher-with-dry-eyes',
    title: 'Christmas gifts for a teacher with dry eyes',
    description:
      'A practical holiday gift for a teacher whose eyes feel dry by the end of the school day: what to give, how to send it, and how to keep it personal.',
    category: 'seasonal',
    addedOn: '2026-11-13',
    body: [
      {
        p: `If a teacher has mentioned tired or dry eyes, a lubricating eye drop is a thoughtful, useful Christmas gift, especially paired with something for the desk or the drive home. Ship it to your own address and hand it over, or send it straight to the teacher’s home rather than the school. Choose a sealed bottle, keep the card friendly rather than medical, and know that an unopened bottle can be refunded within {returnDays} days of delivery.`,
      },
      { h: 'Is an eye drop an odd gift for a teacher?' },
      {
        p: `Not if they’ve brought it up. Teachers spend the day under fluorescent lights, in rooms where the heat runs hard in December, grading on screens and projecting slides. Plenty of them mention eyes that feel gritty by sixth period. [Dry eyes for teachers](/guides/dry-eyes-for-teachers) covers why the classroom is hard on eyes; this guide is about turning that into a gift.`,
      },
      {
        p: `The test is simple: has the teacher said something about their eyes, or do you see them rubbing their eyes at pickup? If yes, a gift that shows you listened lands well. If not, an eye drop as a surprise can feel like a comment on how they look, and a different present is the better choice.`,
      },
      { h: 'Gift ideas that pair well' },
      {
        p: `A single bottle in a card is fine. A small bundle is more fun to open. Ideas that work alongside an eye drop:`,
      },
      {
        list: [
          `A small desk humidifier for the classroom or home office.`,
          `A good pair of sunglasses for recess duty or the drive home in low winter sun.`,
          `A reusable water bottle, since long days talking leave little time to drink.`,
          `A gift card for a coffee shop near the school.`,
          `A soft eye mask for a quiet minute at home after grading.`,
          `A desk lamp with warm light for evening grading.`,
        ],
      },
      {
        p: `Keep the bundle small enough to carry home on the bus or in a tote with everything else they collect before break.`,
      },
      { h: 'Ship to their home or hand it over at school' },
      {
        p: `Schools receive a flood of packages in December, and a box addressed to a teacher can sit in the front office for days. Two simpler routes:`,
      },
      {
        list: [
          `Order to your own address, wrap it, and send it in with your child on the last day before break.`,
          `Ship it to the teacher’s home, if you have the address from a room parent or the teacher has shared it.`,
        ],
      },
      {
        p: `Quell ships from Brentwood, Tennessee, and no delivery date is promised. Order with time to spare before winter break, especially if you’re wrapping it yourself. [Ordering eye drops early for the holidays](/guides/ordering-eye-drops-early-for-the-holidays) covers timing, and [how to send Quell as a gift](/guides/sending-quell-as-a-gift) walks through gift checkout.`,
      },
      { h: 'Group gifts from the class' },
      {
        p: `Room parents sometimes collect money for one gift from the whole class. A few bottles of a lubricating drop, plus a desk humidifier and a gift card, makes a practical group present. Shipping on Quell is {shipping} per order, and it’s free with {freeBottles} or more bottles in the same order. There are no promo codes to hunt for. One person checks out as a guest, and the order goes to whichever address the group agrees on.`,
      },
      {
        p: `If the class is also giving something to an aide, a coach or the front office staff, one order with a few bottles can cover several people. [Buying Quell for several people](/guides/buying-quell-for-several-people) explains how one order splits up.`,
      },
      { h: 'What to write on the card' },
      {
        p: `Keep it about them, not their eyes. Something like: “For the end of a long day. Thank you for everything this year.” Mention that the drops are milky brown so they aren’t surprised when they open it; the label says {milky}.`,
      },
      {
        p: `Don’t add advice about how to use it. The carton carries the directions, {directions}, and anything beyond that, such as use with contact lenses or other drops, is a question for their own eye doctor or pharmacist.`,
      },
      { h: 'What if the teacher doesn’t use eye drops?' },
      {
        p: `It happens. Some teachers already have a drop they like, and some have an ingredient they avoid; the label cautions: {warnings}. If the bottle stays sealed, the buyer can get a refund on unopened bottles within {returnDays} days of delivery, without sending them back. [What if they don’t want the gift](/guides/if-a-gift-of-quell-is-not-wanted) covers the details.`,
      },
      { h: 'Gifts for after the holiday, too' },
      {
        p: `The weeks after winter break are when the heat runs hardest in many schools. A gift that arrives in December gets used in January and February, when gritty eyes at the end of the day are most common. That’s part of why a practical gift often gets remembered longer than another mug.`,
      },
    ],
    faq: [
      {
        q: 'Are eye drops a good Christmas gift for a teacher?',
        a: `They can be, if the teacher has mentioned dry or tired eyes. Pair a sealed bottle with something personal, like a gift card or a desk humidifier, and keep the card about thanks rather than health.`,
      },
      {
        q: 'Should I send a teacher gift to the school or their home?',
        a: `Schools get many packages in December, and a box can sit in the office. Shipping to your own address and handing it over, or sending it to the teacher’s home if you have it, is usually simpler.`,
      },
      {
        q: 'What if the teacher already has eye drops they like?',
        a: `If the Quell bottle stays sealed, the buyer can get a refund on unopened bottles within {returnDays} days of delivery, without sending them back.`,
      },
      {
        q: 'When should I order a Christmas gift for a teacher?',
        a: `Early. Quell ships from Brentwood, Tennessee, with no delivery date promised, so order well before the last school day before winter break, especially if you plan to wrap it yourself.`,
      },
    ],
  },
  {
    slug: 'what-temporary-relief-means-on-eye-drops',
    title: 'What “temporary relief” means on eye drop labels',
    description:
      'Why so many eye drop labels say “temporary relief,” where the wording comes from in FDA rules, and how Quell’s Uses statement differs.',
    category: 'label',
    addedOn: '2026-11-13',
    body: [
      {
        p: `“Temporary relief” on an eye drop label means the drop eases symptoms for a while and is not meant to fix whatever is causing them. The phrase comes from FDA rules: for lubricating eye drops, 21 CFR 349.60 lists the exact statements a label may use, and two of them begin “For the temporary relief of.” Quell’s label uses a different permitted statement from the same list, which doesn’t include the word “temporary.”`,
      },
      { h: 'Where the wording comes from' },
      {
        p: `Most over-the-counter eye drops in the United States are sold under an FDA rule rather than an individual approval. For lubricating drops, called demulcents in the rule, 21 CFR 349.60 sets the labeling. Its section on indications lists four statements and requires the label to use one or more of them. A maker can’t write its own promise about what the drop does; it picks from the approved wording.`,
      },
      {
        p: `Two of the four permitted statements read:`,
      },
      {
        list: [
          `“For the temporary relief of burning and irritation due to dryness of the eye.”`,
          `“For the temporary relief of discomfort due to minor irritations of the eye or to exposure to wind or sun.”`,
        ],
      },
      {
        p: `That’s why the phrase appears on so many boxes, often word for word. [How are over-the-counter eye drops regulated](/guides/how-are-otc-eye-drops-regulated) explains how the rule system works.`,
      },
      { h: 'Why labels say temporary' },
      {
        p: `The word sets an honest expectation. A lubricating drop adds moisture and support to the surface of the eye, and tears keep turning over with every blink. The comfort it brings fades as the eye goes on blinking, the air goes on drying, and the day goes on. The drop doesn’t change why the eye was dry in the first place, whether that’s a heated office, a long drive or something an eye doctor needs to look at.`,
      },
      {
        p: `“Temporary” also signals that the drop isn’t a substitute for care. If dryness keeps returning, a label that promises only temporary relief is quietly pointing you toward finding out why.`,
      },
      { h: 'What Quell’s Uses section says instead' },
      {
        p: `Quell’s Drug Facts panel uses the third permitted statement. Its Uses line reads: {uses}. There’s no “temporary” in it, but it’s from the same FDA list, so it carries the same limits. It describes protecting the eye against further irritation and relieving dryness; it doesn’t promise to fix a cause or to work for a set number of hours.`,
      },
      {
        p: `The formula is designed to reinforce the tear film’s oil layer to help reduce moisture loss. That’s the mechanism, not a duration. [The Uses section on an eye drop label](/guides/the-uses-section) goes through how to read any Uses line.`,
      },
      { h: 'What does temporary relief mean in practice?' },
      {
        list: [
          `It eases how the eye feels for a while, not permanently.`,
          `It doesn’t tell you how long one drop will be felt; that varies by person and by the air around you.`,
          `It doesn’t mean the drop has stopped working when the dryness comes back later in the day.`,
          `It doesn’t mean you should use more drops than the label says to stretch the effect.`,
        ],
      },
      {
        p: `That last point matters. Quell’s directions are {directions}. If you find yourself wanting drops far more often than that, [can I use more than three drops a day](/guides/can-i-use-more-than-three-drops-a-day) explains why that’s a question for your eye doctor.`,
      },
      { h: 'How the Uses line fits the rest of the panel' },
      {
        p: `Under 21 CFR 201.66, every over-the-counter Drug Facts panel follows the same order: Active ingredient(s), Purpose(s), Use(s), Warnings, Directions, Other information and Inactive ingredients. The Uses section tells you what the product is for. The Warnings section tells you when that purpose has been exceeded. Read them together: the Uses line describes temporary or limited help, and the warnings tell you when to stop relying on it.`,
      },
      { h: 'When temporary relief isn’t enough' },
      {
        p: `The same FDA rule that supplies the Uses wording also requires stop-use warnings, and Quell’s label carries them. In plain terms: {stopUse} If you’re reaching that point, the drop has done what a lubricating drop can do, and the next step is an optometrist or ophthalmologist. [When to stop using eye drops](/guides/when-to-stop-using-eye-drops) and [why the label mentions 72 hours](/guides/why-the-label-mentions-72-hours) go through those warnings.`,
      },
      { h: 'Reading other labels side by side' },
      {
        p: `Because the permitted wording is fixed, Uses lines on different lubricating drops often look nearly identical. That makes the Uses line a poor way to compare products. The active ingredients, the inactive ingredients, the directions and whether there’s a preservative tell you much more. The full Quell panel is on the [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'What does temporary relief mean on eye drops?',
        a: `It means the drop eases symptoms for a while rather than fixing their cause. The phrase comes from FDA labeling rules for lubricating eye drops, which list the exact statements a label may use.`,
      },
      {
        q: 'Why do eye drop labels say temporary relief?',
        a: `Federal rule 21 CFR 349.60 lists the permitted indication statements for lubricating eye drops, and two begin “For the temporary relief of.” The wording keeps labels from promising more than a drop can do.`,
      },
      {
        q: 'Does Quell’s label say temporary relief?',
        a: `No. Quell’s Uses line is a different statement from the same FDA list: {uses}. It carries the same limits and stop-use warnings.`,
      },
      {
        q: 'If relief is temporary, can I use eye drops more often?',
        a: `Follow the label’s directions rather than adding doses. For Quell that’s {directions}. If that isn’t enough, ask your eye doctor.`,
      },
    ],
  },
  /*
   * Sources checked 2026-11-13 for polysorbate-80-vs-polysorbate-20:
   * - https://pubchem.ncbi.nlm.nih.gov/rest/pug/substance/name/polysorbate%2020/synonyms/JSON
   *   (Polysorbate 20: "Polyoxyethylene (20) sorbitan monolaurate", CAS 9005-64-5)
   * - https://pubchem.ncbi.nlm.nih.gov/rest/pug/substance/name/polysorbate%2080/synonyms/JSON
   *   (Polysorbate 80: "POE (20) sorbitan monooleate", CAS 9005-65-6)
   * - PubChem compound records: lauric acid CID 3893, C12H24O2, dodecanoic acid;
   *   oleic acid CID 445639, C18H34O2, (Z)-octadec-9-enoic acid
   * - https://www.govinfo.gov/content/pkg/CFR-2024-title21-vol5/xml/CFR-2024-title21-vol5-sec349-12.xml
   *   (21 CFR 349.12(d): liquid polyols include polysorbate 80; polysorbate 20 not listed)
   */
  {
    slug: 'polysorbate-80-vs-polysorbate-20',
    title: 'Polysorbate 80 vs. polysorbate 20',
    description:
      'Polysorbate 80 and polysorbate 20 share a backbone but carry different fatty acids: oleic acid versus lauric acid. What that means, and which one Quell lists.',
    category: 'formula',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Polysorbate 80 and polysorbate 20 are close chemical cousins. Both are built on the same polyoxyethylene sorbitan backbone, and the difference is the fatty acid attached to it. NIH’s PubChem database describes polysorbate 20 as a sorbitan monolaurate, made with lauric acid, and polysorbate 80 as a sorbitan monooleate, made with oleic acid. Quell’s label lists {polysorbate} as an active ingredient; polysorbate 20 isn’t in it.`,
      },
      { h: 'What polysorbates are' },
      {
        p: `Polysorbates are a family of ingredients that get along with both water and oil. Their names describe their parts. “Sorbitan” is a ring-shaped core related to sorbitol, a sugar alcohol. “Polyoxyethylene” describes the long chains attached to it, which are friendly to water. The fatty acid, attached at one point, is friendly to oil. One part of the molecule favors water and another favors oil, which is what lets polysorbates sit between the two.`,
      },
      {
        p: `PubChem, the chemistry database run by the National Library of Medicine at NIH, lists both under synonyms that spell out the structure. For polysorbate 20, the entries include “polyoxyethylene (20) sorbitan monolaurate.” For polysorbate 80, they include “POE (20) sorbitan monooleate.” POE is shorthand for polyoxyethylene. Notice that both chemical names carry the same “(20)”: that number belongs to the polyoxyethylene part, and it isn’t the same thing as the 20 or 80 in the everyday name.`,
      },
      { h: 'Polysorbate 80 vs 20: the fatty acid is the difference' },
      {
        p: `The number in each name points to the fatty acid. PubChem’s records for the two acids show how different they are:`,
      },
      {
        list: [
          `Lauric acid, used in polysorbate 20, has the formula C12H24O2. Its chemical name is dodecanoic acid: a straight chain of 12 carbons with no double bonds.`,
          `Oleic acid, used in polysorbate 80, has the formula C18H34O2. Its chemical name, (Z)-octadec-9-enoic acid, says it has 18 carbons with one double bond in the middle of the chain.`,
        ],
      },
      {
        p: `So polysorbate 80 carries a longer, kinked oil-friendly tail, and polysorbate 20 carries a shorter, straight one. That changes how each balances between water and oil, how it feels in a formula, and which jobs a chemist chooses it for. Neither is simply a stronger or weaker version of the other.`,
      },
      { h: 'Is polysorbate 80 the same as Tween 80?' },
      {
        p: `Yes, in the sense that “Tween 80” is a trade name for polysorbate 80, and “Tween 20” for polysorbate 20. PubChem lists both trade names among the synonyms. You’ll also see the CAS registry numbers: 9005-65-6 for polysorbate 80 and 9005-64-5 for polysorbate 20. On a drug label, you’ll see the plain name.`,
      },
      { h: 'Where each one shows up' },
      {
        p: `PubChem’s synonym lists for both run long, full of trade names from different makers, which reflects how many kinds of products use them. Because each has its own fatty acid and its own properties, one can’t be swapped for the other just because the names look alike. Seeing either one on an unrelated product tells you nothing about an eye drop.`,
      },
      {
        p: `For eye drops sold over the counter in the United States, the rule that matters is FDA’s list of permitted lubricant ingredients. Under 21 CFR 349.12, the “liquid polyols” allowed as active demulcent ingredients are glycerin, polyethylene glycol 300, polyethylene glycol 400, polysorbate 80 and propylene glycol. Polysorbate 20 isn’t on that list of active ingredients. This guide doesn’t go further than that, since Quell’s label is the only eye drop label it can speak for.`,
      },
      { h: 'Polysorbate 80 on Quell’s label' },
      {
        p: `Quell’s Drug Facts panel lists three active ingredients: {actives}. The label gives the purpose of {polysorbate} as lubricant, the same purpose it gives {glycerol}. {mineralOil} is listed as an emollient. The rest of the formula combines a watery base with oils, including emu oil among the inactive ingredients.`,
      },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. [What does polysorbate 80 do in eye drops](/guides/what-does-polysorbate-80-do-in-eye-drops) covers its role on the label, and [polysorbate 80 in eye drops](/guides/polysorbate-80-in-eye-drops) covers how it’s listed.`,
      },
      { h: 'A laurate on Quell’s label, too' },
      {
        p: `Lauric acid isn’t entirely absent from Quell, but it’s not there as polysorbate 20. The inactive ingredients include glyceryl laurate, which pairs lauric acid with glycerol rather than with a sorbitan backbone. Inactive ingredients aren’t listed for a therapeutic purpose; [glyceryl laurate and glyceryl undecylenate](/guides/glyceryl-laurate-in-eye-drops) explains what they are. The full inactive list reads: {inactives}.`,
      },
      { h: 'Reading the name on a label' },
      {
        p: `The rule of thumb across the family: the backbone is shared, the fatty acid changes, and the number in the everyday name points to which fatty acid. A label printing “polysorbate” without a number would be incomplete, and the number is what tells you which one a product uses. On Quell’s carton it’s printed in the active ingredients panel, with its strength, as {polysorbate}.`,
      },
      { h: 'What to ask if you’re sensitive to an ingredient' },
      {
        p: `If you’ve reacted to a product containing a polysorbate, bring the label to a pharmacist or your eye doctor and ask whether {polysorbate} is a concern for you. The Quell label also carries its own caution: {warnings}. Stop and get help if the label’s warning applies: {stopUse} The [Drug Facts page](/drug-facts) has the whole panel.`,
      },
    ],
    faq: [
      {
        q: 'What is the difference between polysorbate 80 and polysorbate 20?',
        a: `They share the same polyoxyethylene sorbitan backbone but carry different fatty acids. NIH’s PubChem describes polysorbate 20 as a monolaurate, made with lauric acid, and polysorbate 80 as a monooleate, made with oleic acid.`,
      },
      {
        q: 'Is polysorbate 80 the same as Tween 80?',
        a: `Tween 80 is a trade name for polysorbate 80, and PubChem lists it among polysorbate 80’s synonyms. Tween 20 is the matching trade name for polysorbate 20.`,
      },
      {
        q: 'Does Quell contain polysorbate 20?',
        a: `No. Quell’s label lists {polysorbate} as one of its three active ingredients, and polysorbate 20 isn’t among its active or inactive ingredients.`,
      },
      {
        q: 'Is polysorbate 20 an approved eye drop lubricant?',
        a: `It isn’t on the list. FDA’s rule at 21 CFR 349.12 names polysorbate 80, along with glycerin, polyethylene glycol 300 and 400, and propylene glycol, as liquid polyols permitted as active demulcent ingredients.`,
      },
    ],
  },
  {
    slug: 'are-oil-based-eye-drops-better-for-dry-eyes',
    title: 'Are oil-based eye drops better for dry eyes?',
    description:
      'Oil-based drops aim at the tear film’s oil layer, which slows evaporation. Whether that suits you depends on your eyes; here’s how to think it through.',
    category: 'choosing',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Oil-based eye drops aren’t better for everyone, but they work on a different part of the tear film than watery drops. The outer oil layer slows evaporation of the watery layer beneath it, and drops with oils are meant to support that layer. Whether that’s the right fit for your eyes depends on why they feel dry, which an eye doctor can tell you. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss.`,
      },
      { h: 'What “oil-based” means for eye drops' },
      {
        p: `There isn’t a regulatory category called “oil-based eye drops.” The phrase usually describes a lubricating drop that includes oils, often as an emulsion where tiny oil droplets are spread through a watery base. That usually makes the liquid look cloudy or milky rather than clear. Drops without oils rely on water-loving ingredients that add moisture and thickness to the watery layer.`,
      },
      {
        p: `Federal rules for over-the-counter eye drops group lubricant ingredients into types. Demulcents, such as glycerin and polysorbate 80, are listed in 21 CFR 349.12. Emollients, oily ingredients such as light mineral oil, are listed in 21 CFR 349.14. A drop can include both, which is what Quell does.`,
      },
      { h: 'Why the oil layer matters' },
      {
        p: `The tear film has three layers. Closest to the eye is a mucus layer that helps tears cling to the surface. The middle is watery. On the outside is a thin oil layer, which spreads with every blink and slows evaporation of the water underneath. When that outer layer is thin, the watery layer can evaporate faster between blinks, especially in dry, windy, heated or air-conditioned air.`,
      },
      {
        p: `That’s the idea behind adding oils to a drop: support the layer that keeps moisture in, rather than only adding more water on top. [The tear film’s oil layer, explained](/guides/the-tear-films-oil-layer) goes deeper, and [what is meibum](/guides/what-is-meibum) covers the natural oil itself.`,
      },
      { h: 'Oil based eye drops for dry eyes: how Quell is built' },
      {
        p: `Quell’s Drug Facts panel lists three active ingredients: {actives}. Of those, {mineralOil} is the oil, listed on the label as an emollient. The other two, {glycerol} and {polysorbate}, are listed as lubricants. Emu oil appears among the inactive ingredients, and the carton’s emu oil panel says: {emuOil}`,
      },
      {
        p: `Because of those oils, the label notes: {milky}. A clear drop would actually be the unusual sight in a Quell bottle. [Why is Quell milky brown](/guides/why-is-quell-milky-brown) has more on the color.`,
      },
      { h: 'Mineral oil based eye drops' },
      {
        p: `Mineral oil is the oily ingredient people most often see on eye drop labels in the United States, because light mineral oil and mineral oil are both on FDA’s list of emollient ingredients for over-the-counter eye products. [Light mineral oil in eye drops](/guides/light-mineral-oil-in-eye-drops) covers what “light” means and why it’s used.`,
      },
      { h: 'So, are they better?' },
      {
        p: `“Better” depends on what’s behind your dryness. Some people’s eyes feel dry mostly because tears evaporate too quickly; others mainly because they don’t make enough of the watery part; many have a mix. No drop is automatically the right choice for every person or every eye, and no label can sort out which situation you’re in.`,
      },
      {
        p: `That’s a question for an optometrist or ophthalmologist. They can look at your tear film directly and tell you which kind of drop suits you. [Questions to ask your eye doctor](/guides/questions-to-ask-your-eye-doctor) can help you get specific answers at the visit.`,
      },
      { h: 'Trade-offs to know about' },
      {
        list: [
          `Vision can blur briefly after a drop with oils, until a few blinks spread it out. [Is it normal for vision to blur after eye drops](/guides/is-it-normal-for-vision-to-blur-after-eye-drops) explains why.`,
          `Milky drops look different from clear ones, which surprises some people the first time.`,
          `Ingredients from animal sources, like emu oil, matter to some buyers. Quell’s label cautions: {warnings}.`,
          `Oil-based and watery drops aren’t interchangeable in a routine without advice; Quell’s label doesn’t cover use with other eye drops, so ask your eye doctor or pharmacist.`,
          `The label doesn’t cover contact lenses either; that’s another question for your eye doctor.`,
        ],
      },
      { h: 'Oil based eye drops preservative free' },
      {
        p: `People looking for an oil-based drop often also want one without preservatives, especially if they’ll use it several times a day. Quell is preservative-free. Without a preservative, keeping the tip clean matters even more, as the label instructs: {tip}. [What does preservative-free mean](/guides/what-does-preservative-free-mean) covers the trade-offs.`,
      },
      { h: 'How to use it' },
      {
        p: `Follow the label: {directions}. Store it as directed, {storage}. If it doesn’t seem to help, or symptoms get worse, the label is specific: {stopUse} That’s the point to see an eye doctor rather than try a different drop on your own.`,
      },
    ],
    faq: [
      {
        q: 'Are oil-based eye drops better for dry eyes?',
        a: `Not for everyone. They’re designed to support the tear film’s oil layer, which slows evaporation, so they suit some kinds of dryness more than others. An eye doctor can tell you which type fits your eyes.`,
      },
      {
        q: 'What are mineral oil based eye drops?',
        a: `They’re lubricating drops that include mineral oil or light mineral oil, which FDA’s rules list as emollient ingredients for over-the-counter eye products. Quell lists {mineralOil} as one of its three active ingredients.`,
      },
      {
        q: 'Why are oil-based eye drops milky?',
        a: `Oils and water don’t mix into a clear liquid, so drops with oils are usually emulsions that look cloudy or milky. Quell’s label notes that the product appears as a milky brown solution.`,
      },
      {
        q: 'Do oil-based eye drops blur your vision?',
        a: `Vision can blur briefly after a drop with oils, until blinking spreads it across the eye. If blurring doesn’t clear, or your vision changes, stop and see an eye doctor.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-photographers',
    title: 'Dry eyes for photographers',
    description:
      'Viewfinder squinting, hours of editing, cold or windy shoots: why photographers’ eyes dry out, and habits that help in the field and at the desk.',
    category: 'using',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Photographers’ eyes dry out because the job combines the things that cut blinking: staring through a viewfinder while waiting for the moment, squinting the other eye shut, and long editing sessions at a bright screen. Outdoor shoots add wind, cold or heat. Building blinks into your routine, protecting your eyes outdoors and using a lubricating drop as labeled, at a break rather than mid-shot, all help.`,
      },
      { h: 'Why photography is hard on the eyes' },
      {
        p: `Blinking spreads a fresh tear film across the eye. When you concentrate on something, you blink less often, and the blinks you do make tend to be partial. Photography stacks up several kinds of concentration in a row:`,
      },
      {
        list: [
          `Holding a viewfinder to your eye while you track a subject.`,
          `Waiting for a decisive moment without looking away: a bird taking off, a runner crossing the line, a couple’s first kiss.`,
          `Checking focus on the rear screen at full magnification.`,
          `Culling hundreds or thousands of frames afterward.`,
          `Retouching skin, color and detail with your face close to the monitor.`,
        ],
      },
      { h: 'The viewfinder squint' },
      {
        p: `Most shooters close or squint the non-shooting eye, and the shooting eye stays wide open against the eyepiece. Neither eye blinks normally. On a mirrorless camera, the electronic viewfinder is also a tiny bright screen held right against the eye.`,
      },
      {
        list: [
          `Lower the camera between bursts and blink fully a few times, both eyes.`,
          `Practice shooting with both eyes open if you can; it lets the non-shooting eye blink normally and helps you see what’s coming into the frame.`,
          `Use a soft eyecup, and keep it clean so you’re not pressing grit or makeup against your lashes.`,
          `On a tripod, use the rear screen for stretches instead of the eyepiece.`,
          `Set the electronic viewfinder brightness to match the scene rather than running it at full.`,
        ],
      },
      { h: 'Long editing sessions' },
      {
        p: `Many photographers spend more hours editing than shooting. Screens reduce blinking, and a dark editing room with one bright monitor makes your eyes work harder. A few habits for the desk:`,
      },
      {
        list: [
          `Every 20 minutes or so, look across the room for a few seconds and blink slowly.`,
          `Set the monitor slightly below eye level, which keeps eyes a little less open.`,
          `Keep some ambient light in the room so the screen isn’t the only light source.`,
          `Point fans, space heaters and AC vents away from your face.`,
          `Use keyboard shortcuts for culling so you can glance away between frames.`,
        ],
      },
      {
        p: `[Eye drops for computer users](/guides/eye-drops-for-computer-users) and [screens and your tear film](/guides/screens-and-your-tear-film) go deeper on desk work.`,
      },
      { h: 'Outdoor shoots: wind, cold and sun' },
      {
        p: `Landscape, wildlife and sports photographers spend hours in exposed places. Wind speeds evaporation from the tear film; cold air often holds little moisture; sun and glare make you squint. Each one adds to the effect of the viewfinder.`,
      },
      {
        list: [
          `Wear wraparound sunglasses between shots, and keep them on a strap.`,
          `Stand with your back to the wind while you wait.`,
          `On a winter shoot, warm up in the car with the heater on the floor vents, not blowing at your face.`,
          `On a beach or in the desert, a hood or brimmed hat cuts both glare and blowing sand.`,
          `In the hot months, carry water; low humidity dries more than your eyes.`,
        ],
      },
      {
        p: `[Dry eyes on a winter hike](/guides/dry-eyes-on-a-winter-hike) covers cold-weather walking to a location, and [dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers) covers long days outside.`,
      },
      { h: 'Events, studios and travel' },
      {
        p: `Weddings and events mean 10 or 12 hours on your feet, often in air-conditioned venues, under stage lights or with flash firing all evening. Studio work can mean hot modeling lights. Travel shoots add airplane cabins and hotel rooms with dry air. Plan breaks into the timeline the way you plan battery swaps: a minute to look away, blink and rest your eyes.`,
      },
      { h: 'When to use a drop on a shoot' },
      {
        p: `Quell’s label lists its Uses as: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. The directions are {directions}, so plan the drops around the day: before you leave, at a midday break, and after editing.`,
      },
      {
        list: [
          `Use it at a break, not seconds before a shot. Vision can blur briefly after a drop until a few blinks spread it out.`,
          `Wash your hands first, especially after changing lenses or handling sensor-cleaning gear.`,
          `Don’t let the tip touch anything; the label says {tip}.`,
          `Keep the bottle in a bag pocket rather than in a hot car or a frozen pack; the label says {storage}.`,
        ],
      },
      {
        p: `The label doesn’t cover contact lenses or use alongside other eye drops. If either applies to you, ask your eye doctor or pharmacist before adding Quell.`,
      },
      { h: 'When it’s more than dryness' },
      {
        p: `If you notice changes in focus that aren’t from your camera, or eyes that stay sore after shoots, see an eye doctor. The label says when to stop: {stopUse} The [dry eye self-check](/self-check) can help you put symptoms into words before an appointment.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when taking photos?',
        a: `Looking through a viewfinder and waiting for a shot cuts down blinking, and most photographers squint the other eye. Editing at a screen afterward reduces blinking too.`,
      },
      {
        q: 'Should photographers shoot with both eyes open?',
        a: `It’s worth practicing. Keeping the non-shooting eye open lets it blink normally and lets you see subjects entering the frame, though it takes time to get used to.`,
      },
      {
        q: 'Can I use eye drops right before taking a photo?',
        a: `It’s better to use them at a break. Vision can blur briefly after a drop until a few blinks spread it, which can throw off manual focus or framing.`,
      },
      {
        q: 'How do I stop my eyes from drying out while editing photos?',
        a: `Look away and blink slowly every 20 minutes or so, keep some light on in the room, set the monitor slightly below eye level, and point fans and vents away from your face.`,
      },
    ],
  },
  {
    slug: 'dry-eyes-for-rideshare-drivers',
    title: 'Dry eyes for rideshare drivers',
    description:
      'Dash vents, phone navigation, city lights at night and long shifts: why rideshare drivers’ eyes dry out, and what helps between rides.',
    category: 'using',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Rideshare driving dries eyes through the car itself: dash vents blowing at your face, a climate setting chosen for passengers, hours of glancing between the road and a phone screen, and night glare from headlights and city lights. Aim vents away from your eyes, take real breaks between rides, and if you use a lubricating drop, only do it parked, never while driving.`,
      },
      { h: 'Why your eyes dry out on a driving shift' },
      {
        list: [
          `Dash vents sit at face height, and in a small cabin they blow straight across your eyes.`,
          `Air conditioning dries air as it cools; heaters lower humidity as they warm.`,
          `Riders often ask for the heat up or the AC on high, and you live with it longer than they do.`,
          `Watching traffic and a navigation screen at the same time cuts down blinking.`,
          `Night driving means headlights, brake lights and lit signs, so you squint more.`,
          `Long shifts add up, and tired eyes tend to feel drier.`,
        ],
      },
      { h: 'Fixing the airflow' },
      {
        p: `The car is your office, so set it up like one. Moving air speeds evaporation from the tear film, and a vent four inches from your face is the most direct source of it.`,
      },
      {
        list: [
          `Turn the driver’s side dash vent toward your chest or hands, or close it and use the center ones.`,
          `Use floor vents for heat in winter; warm air rises without blowing at your face.`,
          `Run recirculate on dusty or smoky days.`,
          `If a rider wants it cold, turn the passenger-side and rear vents up and keep yours angled away.`,
          `Between rides, crack a window for a minute to change the air.`,
        ],
      },
      { h: 'The phone mount problem' },
      {
        p: `Navigation pulls your eyes back and forth between the road and a small bright screen, many times a minute. Concentration plus refocusing means fewer, shallower blinks. Mount the phone low and close to your line of sight, so you glance rather than turn your head. Turn the screen brightness down at night; a phone at full brightness in a dark cabin is like staring at a flashlight. Use voice directions so you can look at the screen less.`,
      },
      { h: 'Night driving in the city' },
      {
        p: `Night shifts are often the busiest for rideshare. Oncoming headlights, wet pavement reflections and lit storefronts all make you squint, and a squint isn’t a full blink. Keep the windshield clean inside and out, since a hazy film scatters light. Dim the dashboard display. If glare is getting worse over time, or you’re seeing halos you didn’t used to, that’s a reason to see an eye doctor rather than push through. [Dry eyes on the night shift](/guides/dry-eyes-on-the-night-shift) covers working through the night more broadly.`,
      },
      { h: 'Breaks between rides' },
      {
        p: `Unlike long-haul trucking, rideshare has natural gaps: waiting for a ping, waiting for a rider, the stretch at the airport lot. Use them for your eyes:`,
      },
      {
        list: [
          `Look far down the street, not at your phone, and blink slowly a few times.`,
          `Close your eyes for a minute while you wait, with the engine on and the car parked.`,
          `Step out and stretch; outdoor air is often less dry than the cabin.`,
          `Drink water through the shift; it’s easy to forget when you’re chasing rides.`,
        ],
      },
      {
        p: `[Eye drops for truck drivers](/guides/eye-drops-for-truck-drivers) covers long highway hauls, a different kind of driving fatigue.`,
      },
      { h: 'Using a lubricating drop safely' },
      {
        p: `Never use eye drops while driving, even at a red light. A drop can blur your vision briefly, and you need both hands and both eyes. Pull over somewhere safe, put the car in park, and then use it. Better still, plan it into the shift so you’re not reaching for it in traffic.`,
      },
      {
        p: `Quell’s label lists its Uses as: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. The directions are {directions}, so a simple pattern is before your shift, at a meal break and when you get home. Wash or sanitize your hands first; you’ve been handling a steering wheel, doors and a phone. The label also says {tip}.`,
      },
      { h: 'Where to keep the bottle' },
      {
        p: `The label’s storage range is {storage}. A parked car on a summer afternoon, or through a winter night, can go well past that in either direction. While you’re driving, keep the bottle in a bag in the cabin, out of direct sun, not in the door pocket against hot glass. When the shift ends, bring it inside. [Can you leave eye drops in a hot car](/guides/eye-drops-in-a-hot-car) explains why the range matters.`,
      },
      { h: 'When to get your eyes checked' },
      {
        p: `Clear, comfortable vision is part of the job. If dryness keeps coming back, if glare at night is getting harder to manage, or if your vision changes, see an optometrist or ophthalmologist. The label says when to stop using it: {stopUse} If you wear contact lenses or use other eye drops, the label doesn’t cover those, so ask your eye doctor or pharmacist.`,
      },
      {
        p: `Quell ships from Brentwood, Tennessee, with guest checkout and no subscription. Order before you run out, since no delivery date is promised; see [how to order Quell](/guides/how-to-order-quell-step-by-step).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when I drive for Uber or Lyft?',
        a: `Dash vents blow dry heated or cooled air across your face, navigation screens cut down blinking, and night glare makes you squint. Long shifts add tired eyes on top.`,
      },
      {
        q: 'Can I use eye drops while driving?',
        a: `No. A drop can blur your vision briefly. Pull over somewhere safe and park first, or use drops before and after your shift.`,
      },
      {
        q: 'How do I stop my car AC from drying my eyes?',
        a: `Turn the driver’s dash vent toward your chest or close it, use floor vents for heat, and let passengers have the airflow while yours points away from your face.`,
      },
      {
        q: 'Can I keep eye drops in my car?',
        a: `Not for long in hot or freezing weather. Quell’s label gives a storage range of {storage}, so keep it in a bag in the cabin while you drive and bring it inside after.`,
      },
    ],
  },
  {
    slug: 'how-to-put-eye-drops-in-someone-elses-eyes',
    title: 'How to put eye drops in someone else’s eyes',
    description:
      'Step-by-step help giving eye drops to a partner or aging parent: positioning, steadying your hand, a clean tip, and what the label leaves to a doctor.',
    category: 'using',
    addedOn: '2026-11-13',
    body: [
      {
        p: `Wash your hands, have the person lie down or sit with their head tilted back, and gently pull the lower eyelid down to make a small pocket. Hold the bottle above the eye, resting your hand on their forehead to steady it, and let one drop fall into the pocket without the tip touching anything. Have them close their eyes gently, and wipe away any extra with a clean tissue.`,
      },
      { h: 'Before you start' },
      {
        list: [
          `Check the label: make sure it’s their own bottle and the right product.`,
          `Look at the liquid. For Quell, the label says {milky}. The label also says {doNotUse}.`,
          `Check the date on the carton or bottle.`,
          `Wash your hands with soap and water, and dry them on a clean towel.`,
          `Have a clean tissue ready.`,
          `Explain what you’re about to do, especially for someone who startles easily.`,
        ],
      },
      { h: 'How to put eye drops in someone else’s eyes, step by step' },
      {
        list: [
          `Position them. Lying flat on a bed or couch is easiest. If they’re sitting, have them tilt their head back against a headrest or the back of a chair.`,
          `Stand or sit beside them, slightly above, rather than coming at them head-on; a bottle approaching from the front makes people blink.`,
          `Ask them to look up, toward the ceiling or their forehead.`,
          `With one hand, gently pull the lower eyelid down with a fingertip on the cheekbone, making a small pocket.`,
          `Rest the edge of your other hand, holding the bottle, on their forehead. This keeps the bottle steady if they move.`,
          `Hold the tip a short distance above the pocket, without touching the eye, lashes or lid. Squeeze gently for one drop.`,
          `Release the lid and ask them to close their eyes gently, without squeezing them shut, for a moment.`,
          `Dab any overflow from the cheek with a clean tissue, a separate one for each eye.`,
          `Cap the bottle right away and wash your hands again.`,
        ],
      },
      {
        p: `Quell’s label gives the directions as {directions}. That’s one drop per eye each time, not one per eye per day.`,
      },
      { h: 'Keeping the tip clean' },
      {
        p: `The label is direct about this: {tip}. When you’re putting drops into someone else’s eye, it’s easy to touch the lashes by accident, especially if they flinch. That’s the main reason to steady your hand on their forehead. If the tip does touch an eyelid, lash or anything else, don’t wipe it on a tissue or your clothes; cap it and ask a pharmacist whether to keep using that bottle. [Why you should never touch the bottle tip](/guides/do-not-touch-the-tip) explains what’s at stake.`,
      },
      {
        p: `A bottle of eye drops is for one person. If you also use drops yourself, keep your bottles separate and labeled.`,
      },
      { h: 'If they blink or flinch' },
      {
        list: [
          `Have them look up and keep looking up; it’s harder to blink while looking upward.`,
          `Count down out loud so it isn’t a surprise.`,
          `Try having them close their eyes and lie back; place the drop at the inner corner of the closed eye, then ask them to open and blink so it runs in.`,
          `Take a break if it’s getting stressful; trying again in a few minutes usually goes better.`,
        ],
      },
      { h: 'Helping an aging parent' },
      {
        p: `Older adults often need help because of shaky hands, stiff shoulders or arthritis that makes squeezing a bottle hard. Some can do part of it themselves: pulling the lid down while you hold the bottle, for example. Letting them do what they can keeps the routine theirs.`,
      },
      {
        p: `For someone with memory problems, a calm, consistent routine helps: the same chair, the same time of day, the same words. Write the times down, or keep a simple log, so drops aren’t doubled or missed; [keeping a simple eye drop log](/guides/keeping-an-eye-drop-log) has a format. [Eye drops for older adults](/guides/eye-drops-for-older-adults) covers what else to check.`,
      },
      { h: 'Helping a partner' },
      {
        p: `Partners often help when one person is squeamish about drops, or after a busy day when hands aren’t steady. The same steps apply. Some couples find it easier when the person receiving the drop lies back on the couch, and the helper sits on the arm above them.`,
      },
      { h: 'What the label doesn’t cover' },
      {
        list: [
          `Children. Quell’s label doesn’t give directions for children, so ask a pediatrician or pharmacist before using it for a child.`,
          `Contact lenses. The label doesn’t address them; ask the person’s eye doctor.`,
          `Other eye drops. If they use prescription or other drops, the label doesn’t cover combining them; ask their eye doctor or pharmacist about order and timing.`,
        ],
      },
      { h: 'When to stop and call a doctor' },
      {
        p: `Watch how the person responds over the following days, since they may not mention discomfort. The label says: {stopUse} Also follow its caution: {warnings}. If swallowed, the label says: {swallowed}. When you’re unsure, the [Drug Facts page](/drug-facts) has the full panel to show a doctor or pharmacist.`,
      },
    ],
    faq: [
      {
        q: 'How do you put eye drops in someone else’s eyes?',
        a: `Wash your hands, have them tilt their head back or lie down and look up, pull the lower lid down gently, steady your hand on their forehead, and let one drop fall into the pocket without the tip touching anything.`,
      },
      {
        q: 'How do you put eye drops in someone who keeps blinking?',
        a: `Have them look up and keep looking up, count down so it isn’t a surprise, and approach from the side. Or place the drop at the inner corner of the closed eye, then have them open and blink.`,
      },
      {
        q: 'Should the person lie down for eye drops?',
        a: `Lying flat is often easiest because the head is steady and the eye faces upward. Sitting with the head tilted back against a headrest also works.`,
      },
      {
        q: 'Can I use Quell on my child?',
        a: `Quell’s label doesn’t give directions for children. Ask your child’s pediatrician or a pharmacist before using it for a child.`,
      },
    ],
  },
]
