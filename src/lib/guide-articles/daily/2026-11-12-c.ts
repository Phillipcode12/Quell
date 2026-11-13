import type { Guide } from '@/lib/guide-types'
export const DAILY_20261112_C: Guide[] = [
  /*
   * Sources fetched 2026-11-12 for dry-eye-relief-san-juan-capistrano:
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00093184.csv
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00093184.csv
   *   (Santa Ana John Wayne AP: annual precip 11.18 in; Jun 0.01, Jul 0.04, Aug 0.01 in;
   *   Jan 2.59, Feb 2.64 in; Jan high 67.0 / low 48.6 F; Aug high 80.4 F; 19.0 days a year
   *   with 0.10 in or more; 0.0 nights at or below 32 F; 12.8 days at or above 90 F)
   * - https://sanjuancapistrano.gov/356/History (Nov 1, 1776, seventh mission; 1887
   *   California Central Railroad; 1939 NBC radio broadcast of the swallows; 1974 General
   *   Plan preserving open space and ridgelines)
   * - https://www.missionsjc.com/ ("Famous for the Annual Return of the Swallows";
   *   St. Joseph's Day and Return of the Swallows Celebration)
   * - https://www.weather.gov/safety/wind-mountain-valley (Santa Ana winds: September
   *   through May; desert high pressure; air compressed and warmed as it descends)
   * Dropped: local humidity (no NOAA humidity row for Orange County), wind speeds.
   */
  {
    slug: 'dry-eye-relief-san-juan-capistrano',
    title: 'Dry eye relief in San Juan Capistrano',
    description:
      'Santa Ana winds, rainless summers and a coastal-canyon town: NOAA numbers on what dries eyes in San Juan Capistrano and how to find some relief.',
    category: 'local',
    addedOn: '2026-11-12',
    body: [
      {
        p: `In San Juan Capistrano, eyes tend to feel driest when a Santa Ana wind pushes desert air down the canyons, and in the long rainless stretch from late spring to fall. Relief starts with simple habits: wraparound sunglasses outdoors, fans and car vents aimed away from your face, regular screen breaks, and a lubricating drop used as its label directs. Figuring out the cause of ongoing eye trouble, and caring for it, is an eye doctor’s job.`,
      },
      { h: 'A mission town between the canyons and the coast' },
      {
        p: `The city’s own history page dates Mission San Juan Capistrano to November 1, 1776, when it became the seventh mission in the California chain. The town grew around it in a valley where creeks come down from the hills toward the ocean. That position, a few miles inland with ridgelines on several sides, is what gives the place its mixed weather: mornings that feel coastal, and afternoons that can turn warm and dry when the wind shifts and starts coming from inland.`,
      },
      {
        p: `The same history page notes that the city’s 1974 General Plan set out to preserve open space and ridgelines. So much of daily life here happens outdoors, among horse trails, the creek paths and the mission gardens, which means your eyes meet whatever the air is doing that day.`,
      },
      { h: 'San Juan Capistrano weather by the numbers' },
      {
        p: `There’s no full NOAA climate station inside city limits, so the closest complete record comes from John Wayne Airport in Santa Ana. Its 1991–2020 normals show how dry the warm half of the year is:`,
      },
      {
        list: [
          `About 11.2 inches of precipitation in a normal year.`,
          `June, July and August together average well under a tenth of an inch of rain.`,
          `January and February are the wettest months, at roughly 2.6 inches each.`,
          `Only about 19 days a year bring a tenth of an inch of rain or more.`,
          `January runs from a normal high of 67°F to a low near 49°F, and August peaks near 80°F.`,
          `The airport averages no nights at all at or below freezing.`,
        ],
      },
      {
        p: `Mild temperatures can be misleading. A 70-degree afternoon with low humidity and a breeze pulls moisture off the surface of the eye faster than a muggy day of the same temperature, because evaporation depends on how dry and how fast-moving the air is, not on how hot it feels.`,
      },
      { h: 'Santa Ana winds and dry eyes' },
      {
        p: `The National Weather Service explains that Santa Ana winds begin as air from high pressure over the desert Southwest. As that air flows downhill toward the coast it’s compressed, which warms it, and the NWS says these winds are most common in the cooler months, from September through May. For San Juan Capistrano, that’s the stretch when the town gets its hottest-feeling, lowest-humidity days, often with gusts funneling through the canyons east of town.`,
      },
      {
        p: `On a Santa Ana day, the usual coastal moisture is gone and the wind does the rest. People notice it in different ways:`,
      },
      {
        list: [
          `A gritty or scratchy feeling by midafternoon, especially after time outside.`,
          `Eyes that water in the wind and then feel dry once you’re back indoors.`,
          `More awareness of dust and ash in the air on days with fire weather.`,
          `Tired, heavy-lidded eyes after a drive with the windows open or the vents on high.`,
        ],
      },
      {
        p: `Wraparound sunglasses block a surprising amount of wind. Indoors, keep windows closed during strong gusts, run a humidifier if the house feels parched, and point ceiling and desk fans away from where you sit. If smoke or ash is in the air, follow local air-quality guidance rather than toughing it out on the patio.`,
      },
      { h: 'Swallows season, festival crowds and spring days outside' },
      {
        p: `Mission San Juan Capistrano calls itself famous for the annual return of the swallows, a legend the city says reached the whole country through a live NBC radio broadcast in 1939. The mission’s St. Joseph’s Day and Return of the Swallows celebration ties to March 19, the feast of St. Joseph, and the town’s parade season draws people outdoors for long, bright days.`,
      },
      {
        p: `Spring here is usually gentle on the eyes compared with Santa Ana season, but a full day of parade watching, street fairs and walking the mission grounds still means hours of sun and breeze. A brimmed hat, sunglasses and a water bottle help. If you carry eye drops, keep them in a bag that stays in the shade rather than on a sunny bench or a car dashboard.`,
      },
      { h: 'Daily life: the train, the trails and the commute' },
      {
        p: `The city’s history notes the railroad arrived in 1887, and trains still stop downtown beside the mission district. Commuters split between rail, the I-5 corridor and the canyon roads. Each has its own small habits that ease dry eyes:`,
      },
      {
        list: [
          `In the car, angle the dash vents toward your chest, not your face, and use recirculate on dusty days.`,
          `On the train, sit away from the door if gusts come through at every stop.`,
          `On horseback or a trail ride, sunglasses do double duty against dust kicked up on dry paths.`,
          `At a desk, set the top of your monitor at or a little below eye level and look away every 20 minutes. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why blinking drops off when you concentrate.`,
        ],
      },
      { h: 'Where a lubricating drop fits' },
      {
        p: `Quell is an over-the-counter lubricating eye drop, sold without a prescription. The label’s Uses line reads: {uses}. Its directions are {directions}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the part of the tear film that dry, moving air works against.`,
      },
      {
        p: `Two label details matter in a warm, sunny climate. Storage first: {storage}. That rules out a glove box on an August afternoon or a beach bag in full sun. Second, the bottle is multi-dose, so the handling rule applies every time: {tip}. The label also notes {warnings}, because the formula contains emu oil.`,
      },
      { h: 'When to see an eye doctor in Orange County' },
      {
        p: `A drop eases dryness; it isn’t a substitute for an exam. Working out why your eyes are uncomfortable, and deciding what to do about it, belongs to an optometrist or ophthalmologist. The label is direct about when to stop: {stopUse} Our [list of symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) goes into more detail.`,
      },
      { h: 'Getting Quell delivered in San Juan Capistrano' },
      {
        p: `Orders ship from Brentwood, Tennessee, to California addresses at {shipping}, and orders of {freeBottles} or more bottles ship free. Checkout works as a guest, buyers must be 18 or older, and unopened bottles can be refunded within {returnDays} days of delivery without being sent back. No delivery date is promised, so order before you’re down to the last few drops. The [San Juan Capistrano page](/eye-drops/san-juan-capistrano-ca) and the [California page](/eye-drops/state/california) have the local shipping details.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel dry during a Santa Ana wind?',
        a: `Santa Ana winds carry desert air that warms as it descends toward the coast, according to the National Weather Service, so humidity drops and the wind speeds up evaporation from the surface of your eyes.`,
      },
      {
        q: 'How much rain does San Juan Capistrano get?',
        a: `The nearest full NOAA record, at John Wayne Airport in Santa Ana, shows about 11.2 inches of precipitation in a normal year, nearly all of it between November and March.`,
      },
      {
        q: 'Where can I get help for dry eyes in San Juan Capistrano?',
        a: `Care for an ongoing eye problem comes from a local optometrist or ophthalmologist, who can work out what’s behind it. For everyday dryness, an over-the-counter lubricating drop such as Quell can be ordered online and shipped to San Juan Capistrano.`,
      },
      {
        q: 'Can I keep eye drops in my car in Orange County?',
        a: `Not for long on a sunny day. Quell’s label says {storage}, and a closed car in the sun can climb past that range, so carry the bottle with you instead.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-12 for dry-eye-relief-lakeville-mn:
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USC00212737.csv
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USC00212737.csv
   *   (Farmington 3 NW, elev 298.7 m: Jan high 22.9 / low 7.8 F; Jul high 82.0 F;
   *   annual snow 41.0 in, Jan 10.5 in; annual precip 32.32 in, Jun 4.89 in, Feb 0.81 in;
   *   149.8 nights at or below 32 F; 23.2 nights at or below 0 F; 72.8 days with a high
   *   at or below 32 F; 7,625.9 heating degree days)
   * - https://lakevillemn.gov/1457/Antlers-Park (swimming beach, fishing, snowmobile
   *   trails connection; Colonel Savage renamed Prairie Lake as Lake Marion)
   * - https://www.dnr.state.mn.us/safety/ice/thickness.html (4 in of new clear ice for
   *   activities on foot; DNR does not measure ice; white ice about half as strong)
   * Dropped: Airlake Airport weather (no normals station), humidity (no Lakeville row).
   */
  {
    slug: 'dry-eye-relief-lakeville-mn',
    title: 'Dry eye relief in Lakeville, Minnesota',
    description:
      'Prescription drops in Lakeville come from an eye doctor. For everyday dryness from frozen-lake wind and furnace air, here’s what helps, with NOAA data.',
    category: 'local',
    addedOn: '2026-11-12',
    body: [
      {
        p: `If you’re looking for prescription eye drops for dry eyes in Lakeville, those come from an eye doctor, who examines your eyes and decides whether you need one. For everyday dryness from Dakota County winters, an over-the-counter lubricating drop needs no prescription. Pair it with a humidifier at home, vents aimed away from your face on the I-35 commute, and wind protection out on the frozen lakes.`,
      },
      { h: 'Prescription eye drops vs. over-the-counter drops' },
      {
        p: `Prescription eye drops are written by an optometrist or ophthalmologist after an exam, for a specific reason they’ve identified. Nobody can choose one for you online, and a store can’t sell one without that prescription. Over-the-counter lubricating drops work differently: the label is the instructions, and you can buy them yourself. [Do you need a prescription for eye drops?](/guides/do-you-need-a-prescription-for-eye-drops) covers the line between the two.`,
      },
      {
        p: `A sensible order of steps for most people: use an over-the-counter drop as labeled, fix the air around you, and book an eye exam if the dryness keeps coming back, gets worse, or comes with pain or vision changes. If your eye doctor suggests a prescription option, that conversation happens in the exam room, and any questions about using it alongside other drops go to the doctor or pharmacist too.`,
      },
      { h: 'Lakeville winters by NOAA’s numbers' },
      {
        p: `NOAA keeps a long-running cooperative weather station just northwest of Farmington, a few miles from Lakeville, at roughly 980 feet. Its 1991–2020 normals describe a long, hard winter:`,
      },
      {
        list: [
          `A January normal high of 22.9°F and a normal low of 7.8°F.`,
          `About 73 days a year when the temperature never gets above freezing.`,
          `Roughly 150 nights a year at or below 32°F, and about 23 at zero or colder.`,
          `About 41 inches of snow a year, with January the snowiest month at around 10.5 inches.`,
          `About 7,626 heating degree days a year, a measure of how hard furnaces work.`,
        ],
      },
      {
        p: `That last number matters most for your eyes. Cold outdoor air holds very little water, and when a furnace warms it to 70°F inside, its relative humidity falls sharply. Months of heated air in the house, the car and the office are why Lakeville residents often notice dry, scratchy eyes more in February than at any other time of year.`,
      },
      { h: 'Ice fishing and winter days on Lake Marion' },
      {
        p: `Lake Marion is the big lake in town. The city’s page for Antlers Park, on the lake’s shore, lists a swimming beach, fishing and a connection to snowmobile trails, and notes that the lake was once called Prairie Lake until Colonel Savage renamed it. In winter the lake and Orchard Lake turn into a different kind of park, with ice houses, skaters and snowmobiles.`,
      },
      {
        p: `A frozen lake is one of the hardest places on your eyes. There’s no shelter from the wind, the sun reflects off snow and ice from every angle, and people squint for hours while they watch a tip-up or a flasher screen. Before you head out, the Minnesota DNR’s guidance is worth knowing: it calls for at least 4 inches of new, clear ice for fishing or other activities on foot, says white ice is only about half as strong, and states that the DNR doesn’t measure ice on any lake, so check it yourself.`,
      },
      {
        list: [
          `Wear wraparound sunglasses or goggles to cut both glare and wind.`,
          `Inside a heated ice house, crack the vent and keep the heater pointed away from your face.`,
          `Keep your eye drops in an inside coat pocket, not in a bucket or sled on the ice.`,
          `Step outside the shelter now and then and look toward the far shore to relax your focus.`,
        ],
      },
      { h: 'The I-35 commute and the car heater' },
      {
        p: `Many Lakeville residents drive north on I-35 every weekday toward Burnsville, Bloomington or the downtowns. On a January morning that’s 20 minutes or more of hot, dry air blowing from the dash. Aim the vents at your chest or the windshield instead of your face, run the defroster only as long as you need it, and keep the heat at a comfortable level rather than on full. Don’t put drops in while driving; do it before you leave or once you’ve parked.`,
      },
      {
        p: `Remote starters bring their own small habit: the car is warm, but the air in it is the same dry outdoor air, heated. If your eyes already feel tired when you arrive at work, the commute is part of the reason. [Dry eyes when driving in winter](/guides/dry-eyes-when-driving-in-winter) has more on car heat.`,
      },
      { h: 'Inside a Lakeville home in February' },
      {
        list: [
          `Run a humidifier in the bedroom, and clean it on the schedule its maker gives.`,
          `Point floor registers and space heaters away from the couch and the bed.`,
          `Take screen breaks during long evenings when it’s dark by late afternoon.`,
          `Sip water through the day; heated air dries you out everywhere.`,
          `Watch for kids’ hockey and dance practices in rinks and gyms with big overhead heaters, and sit away from the blowers.`,
        ],
      },
      { h: 'Using Quell through a Minnesota winter' },
      {
        p: `Quell is a lubricating eye drop sold over the counter. The label’s Uses line reads: {uses}. Its directions are {directions}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, the evaporation that dry furnace air speeds up.`,
      },
      {
        p: `Cold is the storage issue here, not heat. The label says {storage}, so a bottle left in a car, a garage or an ice house through a Lakeville night would fall well below that range. Keep it indoors and in an inside pocket when you’re out. Always follow the label’s handling rule: {tip}. And because the formula contains emu oil, the label notes {warnings}.`,
      },
      { h: 'When dryness needs an eye doctor' },
      {
        p: `If your eyes stay uncomfortable even after the furnace switches off in spring, or something feels wrong rather than just dry, see an optometrist or ophthalmologist. They’re the ones who figure out the cause and decide on care, including any prescription. The label sets the limit for over-the-counter use: {stopUse}`,
      },
      { h: 'Ordering Quell to Lakeville' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Minnesota addresses for {shipping}, and orders of {freeBottles} or more bottles ship free. You can check out as a guest, and unopened bottles can be refunded within {returnDays} days of delivery with nothing to send back. No delivery date is promised, so order before winter runs you low. See the [Lakeville page](/eye-drops/lakeville-mn) or the [Minnesota page](/eye-drops/state/minnesota) for more.`,
      },
    ],
    faq: [
      {
        q: 'Can I get prescription eye drops for dry eyes in Lakeville without seeing a doctor?',
        a: `No. A prescription eye drop has to be written by an eye doctor after an exam. Over-the-counter lubricating drops such as Quell need no prescription and can be shipped to Lakeville.`,
      },
      {
        q: 'How cold does it get in Lakeville, MN in winter?',
        a: `NOAA’s 1991–2020 normals for the Farmington station, next to Lakeville, give a January normal high of 22.9°F and a low of 7.8°F, with about 23 nights a year at zero or below.`,
      },
      {
        q: 'Why do my eyes get dry ice fishing?',
        a: `On open ice there’s nothing to block the wind, snow and ice reflect sunlight into your eyes, and people squint and stare at one spot for hours. Wraparound sunglasses and breaks from watching the hole help.`,
      },
      {
        q: 'Can I leave eye drops in my ice house?',
        a: `Not Quell. Its label says {storage}, and an unheated ice house on a Minnesota night falls far below that. Bring the bottle home with you.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-12 for dry-eye-relief-kingsport-tn:
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USC00404858.csv
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USC00404858.csv
   *   (Kingsport station, elev 391.4 m: Jan high 46.4 / low 27.3 F; Jul high 87.0 F;
   *   annual precip 45.03 in; Jul 5.05 in wettest; Oct 2.43 in driest; snow 5.1 in;
   *   83.3 nights at or below 32 F; 28.3 days at or above 90 F)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (Bristol-Johnson City-Kingsport: annual morning 86, afternoon 56 percent; April
   *   afternoon 49; August morning 92)
   * - https://www.baysmountain.com/park/park-overview/ (3,788 acre nature preserve,
   *   largest city owned park in the state, 44 acre lake, 44 miles of trails)
   * Dropped: river flow and Holston figures (no official number checked).
   */
  {
    slug: 'dry-eye-relief-kingsport-tn',
    title: 'Dry eye relief in Kingsport, Tennessee',
    description:
      'Kingsport’s foggy valley mornings turn into dry spring afternoons. NOAA humidity data, the habits that help, and when a Tri-Cities eye doctor should look.',
    category: 'local',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Kingsport’s air is humid most mornings, but afternoons can turn surprisingly dry, especially in spring, and winter brings furnace heat and cold wind off the ridges. For relief, manage the air indoors, take breaks from screens, wear sunglasses on breezy days, and use a lubricating eye drop as its label directs. If dryness keeps coming back, a Tri-Cities eye doctor is the one to find out why and decide what to do about it.`,
      },
      { h: 'Humid mornings, drier afternoons in the Tri-Cities' },
      {
        p: `NOAA’s humidity tables for the Tri-Cities airport, which serves Bristol, Johnson City and Kingsport, show how much the air changes in a single day. The yearly average relative humidity is about 86 percent in the early morning but only about 56 percent in the afternoon. In August the morning reading climbs to around 92 percent, which is why fog so often fills the valley along the Holston River at dawn.`,
      },
      {
        p: `The driest afternoons come in April, when NOAA’s average afternoon humidity drops to about 49 percent. Spring is also when the breeze picks up, pollen is everywhere and people start spending whole days outside again. That combination catches people off guard: the valley feels like a humid place, so dry, tired eyes on a sunny April afternoon don’t seem to fit.`,
      },
      { h: 'Kingsport weather by NOAA’s numbers' },
      {
        p: `NOAA has a long-running weather station in Kingsport itself, at about 1,280 feet. Its 1991–2020 normals give a picture of the year:`,
      },
      {
        list: [
          `About 45 inches of precipitation in a normal year.`,
          `July is the wettest month, at just over 5 inches, and October the driest, at about 2.4 inches.`,
          `January runs from a normal high of 46.4°F to a normal low of 27.3°F.`,
          `About 83 nights a year at or below freezing.`,
          `About 28 days a year at 90°F or hotter, and a July normal high of 87°F.`,
          `Around 5 inches of snow a year, usually in a few light events.`,
        ],
      },
      {
        p: `Those numbers mean Kingsport homes run both heating and air conditioning for real stretches of the year. A furnace through the cold months and air conditioning through a long, hot summer both pull moisture out of indoor air, and that’s where most people spend most of their hours.`,
      },
      { h: 'Fall, October and dry eyes' },
      {
        p: `October is the driest month in the Kingsport record and also the busiest outdoor month for a lot of East Tennesseans, with leaf drives along the ridges, football Friday nights and long weekends at the lake. Dry leaves, dust from gravel roads and the first cool, breezy days add up. Sunglasses, a hat with a brim, and keeping the car vents off your face on a long scenic drive all help. If you’re out on a boat on a windy day, wraparound lenses make a big difference.`,
      },
      { h: 'Bays Mountain and the trails above town' },
      {
        p: `Bays Mountain Park describes itself as a 3,788-acre nature preserve and the largest city-owned park in Tennessee, with a 44-acre lake and 44 miles of trails. The ridge that holds it rises well above the river valley, and on a clear, breezy day the overlooks get a lot more wind than the neighborhoods below.`,
      },
      {
        list: [
          `Bring sunglasses even in the woods; exposed ridges and the open water of the lake get full sun.`,
          `On a mountain-bike ride, clear glasses or goggles keep both wind and grit out of your eyes.`,
          `At the planetarium or an indoor exhibit, the dark room and the effort of watching tend to cut blinking. Blink deliberately once the lights come up.`,
          `Keep a bottle of drops in a bag that stays in the shade, not on a hot dashboard at the trailhead.`,
        ],
      },
      { h: 'Plant shifts, offices and long drives' },
      {
        p: `Kingsport has long been an industrial town, and plenty of residents work long shifts in large facilities, warehouses or offices with heavy ventilation. Moving air from big HVAC systems dries the eyes the same way a breeze does. Others commute across the Tri-Cities on I-26 or US-11W every day. Some workplace habits that help:`,
      },
      {
        list: [
          `Follow your employer’s eye protection rules first; safety glasses also cut airflow across the eyes.`,
          `Wash your hands before you touch your eyes or use a drop, especially after handling materials at work.`,
          `Keep vents and fans from blowing straight at your face, at a workstation or in the truck.`,
          `Set reminders to look away from screens and gauges and blink fully. [Dry eyes in a hot, dry workplace](/guides/dry-eyes-in-a-hot-workplace) covers more.`,
        ],
      },
      { h: 'What Quell is and how to use it' },
      {
        p: `Quell is an over-the-counter lubricating eye drop, and it ships from Brentwood, Tennessee, in Middle Tennessee. The label’s Uses line reads: {uses}. Its directions are {directions}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is what dry afternoon air and heated rooms speed up.`,
      },
      {
        p: `Store it where the label says, {storage}. A truck cab in a Kingsport July or a cold garage in January can both go outside that range. The label also says {tip}, and notes {warnings}, because the formula contains emu oil.`,
      },
      { h: 'When to see a Tri-Cities eye doctor' },
      {
        p: `Eye drops ease dryness. They don’t explain it. If your eyes stay uncomfortable for days, or something feels wrong in a way that dryness doesn’t describe, see an optometrist or ophthalmologist. Working out the cause and deciding on care is their job, not a label’s. The label gives the line clearly: {stopUse} [Questions to ask your eye doctor](/guides/questions-to-ask-your-eye-doctor) can help you prepare for the visit.`,
      },
      { h: 'Ordering Quell to Kingsport' },
      {
        p: `Orders to Tennessee ship at {shipping}, or free with {freeBottles} or more bottles. Guest checkout is available, buyers need to be 18 or older, and unopened bottles can be refunded within {returnDays} days of delivery without being sent back. No delivery date is promised. The [Kingsport page](/eye-drops/kingsport-tn) and the [Tennessee page](/eye-drops/state/tennessee) have more.`,
      },
    ],
    faq: [
      {
        q: 'Is Kingsport, TN humid or dry?',
        a: `Both, depending on the hour. NOAA’s figures for the Tri-Cities airport show average humidity around 86 percent in the morning but about 56 percent in the afternoon, and closer to 49 percent on April afternoons.`,
      },
      {
        q: 'What is the driest month in Kingsport?',
        a: `October, by rainfall. NOAA’s 1991–2020 normals for the Kingsport station give October about 2.4 inches of precipitation, the least of any month.`,
      },
      {
        q: 'Where can I get help for dry eyes in Kingsport?',
        a: `For ongoing dryness, see an optometrist or ophthalmologist in the Tri-Cities, who can find the cause and decide on care. For everyday dryness, an over-the-counter lubricating drop such as Quell can be shipped to Kingsport.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-12 for dry-eye-relief-sandy-springs-ga:
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00053863.csv
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00053863.csv
   *   (Atlanta Peachtree [PDK] AP: Jan high 51.9 / low 32.7 F; Jul high 89.4 F; 53.2 days at
   *   or above 90 F; 48.8 nights at or below 32 F; annual precip 51.43 in; Oct 3.39 in driest;
   *   1,728.5 cooling degree days)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (Atlanta: annual morning 81, afternoon 55 percent; April afternoon 49; August morning 87)
   * - https://www.nps.gov/chat/planyourvisit/index.htm (48 miles of river; 15 land units;
   *   park address 1978 Island Ford Parkway, Sandy Springs, GA 30350)
   * Dropped: office square footage on GA-400 (no official figure checked).
   */
  {
    slug: 'dry-eye-relief-sandy-springs-ga',
    title: 'Dry eye relief in Sandy Springs, Georgia',
    description:
      'Office towers on GA-400, long air-conditioned summers and dry spring afternoons by the Chattahoochee: what dries eyes in Sandy Springs, and what helps.',
    category: 'local',
    addedOn: '2026-11-12',
    body: [
      {
        p: `In Sandy Springs, dry eyes usually come from indoor air, not the weather: long workdays in air-conditioned towers along GA-400, cold office vents and hours at a screen. Spring afternoons are also drier than people expect. Relief comes from steering vents away from your face, taking screen breaks and using a lubricating eye drop as labeled. When dryness lingers, an eye doctor is the person to work out why.`,
      },
      { h: 'Atlanta-area air: muggy mornings, drier afternoons' },
      {
        p: `NOAA’s humidity table for Atlanta shows an average relative humidity of about 81 percent early in the morning across the year, falling to about 55 percent in the afternoon. On August mornings it averages about 87 percent, which is the sticky air everyone in north Fulton knows.`,
      },
      {
        p: `The lowest afternoon average comes in April, at about 49 percent. That’s the stretch of pollen-coated cars, open windows and the first long evenings on a patio along Roswell Road. Low afternoon humidity with a breeze is when the surface of the eye loses moisture fastest outdoors, so April can be harder on your eyes than July, even though July feels far worse.`,
      },
      { h: 'Sandy Springs weather by NOAA’s numbers' },
      {
        p: `DeKalb-Peachtree Airport, just southeast of Sandy Springs, has its own NOAA climate normals for 1991–2020:`,
      },
      {
        list: [
          `About 51.4 inches of precipitation in a normal year, spread fairly evenly across the months.`,
          `October is the driest month, at roughly 3.4 inches.`,
          `A July normal high of 89.4°F, with about 53 days a year at 90°F or above.`,
          `A January normal high of 51.9°F and low of 32.7°F, with about 49 nights a year at or below freezing.`,
          `About 1,729 cooling degree days a year, NOAA’s gauge of how much air conditioning a climate calls for.`,
        ],
      },
      {
        p: `In practice, that means air conditioning runs for much of the year. Cooling dries air as it chills it, and an office or a car with the AC on high blows that dry air across your face for hours.`,
      },
      { h: 'Workdays in the GA-400 office corridor' },
      {
        p: `A large share of Sandy Springs works in the office towers clustered around GA-400 and I-285, and plenty more commute there from elsewhere in the metro. Climate-controlled buildings, ceiling diffusers and dual monitors are a recipe for tired eyes by 3 p.m. Some changes you can make at your own desk:`,
      },
      {
        list: [
          `Find the ceiling vent above you and, if it blows on your face, ask facilities about a deflector or move your chair.`,
          `Lower the top of your monitor to eye level or a bit below, so your lids cover more of each eye.`,
          `Every 20 minutes, look out the window at something far away and blink slowly a few times.`,
          `Keep a water bottle on the desk; heavy AC dries you out in general.`,
          `On video calls, look away from the screen between speakers instead of reading chat.`,
        ],
      },
      {
        p: `[Eye drops for computer users](/guides/eye-drops-for-computer-users) goes into screen habits in more detail.`,
      },
      { h: 'Traffic on GA-400 and I-285' },
      {
        p: `Long, stop-and-go commutes add more dry air. In summer, the dash vents push cold air across your eyes; in winter, the heater does the same with hot air. Angle the center vents toward your chest, use recirculate on pollen-heavy spring days, and keep sunglasses in the car for the westbound evening glare. Put eye drops in before you leave or after you park, never while driving.`,
      },
      { h: 'Weekends on the Chattahoochee' },
      {
        p: `The National Park Service’s Chattahoochee River National Recreation Area protects land along 48 miles of the river through Atlanta’s northern suburbs, in 15 separate land units, and the park’s mailing address is on Island Ford Parkway in Sandy Springs. Paddling, fishing and trail running along the river are a big part of weekend life here.`,
      },
      {
        list: [
          `On the water, sun reflects off the surface and wind moves freely down the river. Polarized sunglasses help with both.`,
          `On trail runs, airflow across your eyes rises with your speed. Blink fully at every water stop.`,
          `If you carry drops, keep them in a dry bag or pack pocket out of the sun.`,
          `Wash or sanitize your hands before using a drop after handling a paddle or fishing line.`,
        ],
      },
      { h: 'How Quell fits in' },
      {
        p: `Quell is an over-the-counter lubricating eye drop. The label’s Uses line reads: {uses}. Its directions are {directions}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, which matters most in dry, moving air like an air-conditioned office.`,
      },
      {
        p: `Georgia summers are the storage risk. The label says {storage}, and a parked car in a Perimeter Center lot in July can far exceed that. Keep a bottle in your desk drawer or your bag instead. The label also says {tip}, and notes {warnings}.`,
      },
      { h: 'When to see an eye doctor in north Fulton' },
      {
        p: `If dryness keeps returning even after you’ve fixed the vents and taken breaks, or if your eyes hurt or your vision changes, book an exam with an optometrist or ophthalmologist. Finding out what’s behind it and deciding what to do are their call. The label’s limit for over-the-counter use is clear: {stopUse}`,
      },
      { h: 'Ordering Quell to Sandy Springs' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Georgia addresses at {shipping}, and orders of {freeBottles} or more bottles ship free. You can order as a guest, and unopened bottles can be refunded within {returnDays} days of delivery without returning them. No delivery date is promised. If you’d rather have it at the office, put the company name on the address line. More on the [Sandy Springs page](/eye-drops/sandy-springs-ga) and the [Georgia page](/eye-drops/state/georgia).`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes dry at work in Sandy Springs?',
        a: `Office towers run air conditioning for much of the year, and chilled air is dry air. Add a ceiling vent above your desk and hours at a screen, which cut blinking, and tears evaporate faster.`,
      },
      {
        q: 'What is the least humid month in Atlanta?',
        a: `By NOAA’s humidity table for Atlanta, April has the lowest average afternoon relative humidity, at about 49 percent, compared with about 55 percent across the whole year.`,
      },
      {
        q: 'Can I get dry eye relief in Sandy Springs without a prescription?',
        a: `For everyday dryness, yes: lubricating eye drops such as Quell are sold over the counter and ship to Sandy Springs. Ongoing or painful symptoms should be checked by an eye doctor.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-12 for eye-drops-eau-claire-wi:
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00014991.csv
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014991.csv
   *   (Eau Claire Rgnl AP, elev 269.7 m: Jan high 23.4 / low 5.8 F; Jul high 82.8 F;
   *   annual snow 55.4 in, Jan 13.5 in; annual precip 32.99 in, Jun 4.83 in, Jan 1.03 in;
   *   162.8 nights at or below 32 F; 27.5 nights at or below 0 F; 73.3 days with a high at
   *   or below 32 F; 99.4 days with 1 in or more of snow on the ground; 7,922.8 heating
   *   degree days)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (no Eau Claire row; La Crosse, WI: January afternoon 68, December afternoon 71,
   *   April afternoon 52 percent)
   * Dropped: river and university facts beyond names (no official figure checked).
   */
  {
    slug: 'eye-drops-eau-claire-wi',
    title: 'Eye drops in Eau Claire, Wisconsin',
    description:
      'Eau Claire winters mean months of furnace air and snow glare. NOAA’s numbers, habits that ease dry eyes, and getting eye drops shipped to the Chippewa Valley.',
    category: 'local',
    addedOn: '2026-11-12',
    body: [
      {
        p: `You can buy lubricating eye drops in Eau Claire without a prescription, at local stores or online, and Quell ships to Wisconsin addresses. Eyes here tend to feel driest through the long heating season, when furnace air, snow glare and cold wind off the rivers all add up. A humidifier, screen breaks and a drop used as labeled help. For dryness that won’t settle, see an eye doctor.`,
      },
      { h: 'Why Eau Claire eyes feel dry in winter' },
      {
        p: `It sounds backwards, but Wisconsin winter air outdoors isn’t especially dry by relative humidity. NOAA’s humidity table has no Eau Claire row; for La Crosse, the closest Wisconsin city it lists, average afternoon humidity is about 68 percent in January and 71 percent in December. The catch is temperature. Air near zero holds very little water, so once your furnace warms it to room temperature, the humidity inside your house drops sharply.`,
      },
      {
        p: `That’s why the drying happens indoors: in the bedroom with the register running all night, the classroom, the office and the car. Then, when you step outside, cold wind makes your eyes water, and they feel dry again once you’re back in the heat.`,
      },
      { h: 'Eau Claire winters by NOAA’s numbers' },
      {
        p: `Chippewa Valley Regional Airport, at about 885 feet, has NOAA climate normals for 1991–2020:`,
      },
      {
        list: [
          `A January normal high of 23.4°F and a normal low of 5.8°F.`,
          `About 27 nights a year at zero or colder, and about 163 at or below freezing.`,
          `About 73 days a year when the high stays at or below 32°F.`,
          `Around 55 inches of snow a year, with January the snowiest month at about 13.5 inches.`,
          `About 99 days a year with at least an inch of snow on the ground.`,
          `Close to 7,923 heating degree days a year, a measure of how long and hard furnaces run.`,
        ],
      },
      {
        p: `Summer is a different place. July’s normal high is 82.8°F, and June is the wettest month, at nearly 5 inches of rain. Most people notice their eyes least in late spring and summer and most from December through March.`,
      },
      { h: 'Snow glare and wind along the rivers' },
      {
        p: `Eau Claire grew up where the Eau Claire River meets the Chippewa, and riverside trails run through the middle of town. On a bright winter day, three months of snow cover reflects sunlight from below as well as above. People squint, and squinting tends to go with shallower, less frequent blinks. Wind moving along the open river corridor adds more evaporation.`,
      },
      {
        list: [
          `Wear sunglasses on sunny snow days, not just in summer. Wraparound frames block wind too.`,
          `On cross-country skis or a fat bike, try goggles or clear glasses.`,
          `Pull a scarf or gaiter up so you’re not turning your face away from the wind with your eyes half closed.`,
          `Blink fully a few times when you come inside, before you look at your phone.`,
        ],
      },
      { h: 'Campus life in a college town' },
      {
        p: `With the University of Wisconsin–Eau Claire in the middle of town, a lot of residents spend the cold months in lecture halls, libraries and dorms, many of them heated well above what anyone needs. Long study sessions cut blinking further. If you’re a student:`,
      },
      {
        list: [
          `Pick a study spot away from radiators and ceiling vents.`,
          `Take a real break every 30 to 40 minutes, and look across the room or out the window.`,
          `Ask about a small humidifier for your room before buying one; dorm rules vary.`,
          `Keep drops in your backpack rather than a car parked all night in a student lot.`,
        ],
      },
      {
        p: `Students under 18 should note that Quell’s site only sells to buyers 18 and older, and the label’s directions don’t cover children. [Dry eyes while studying](/guides/dry-eyes-while-studying) has more on long study sessions.`,
      },
      { h: 'What Quell is and how to use it' },
      {
        p: `Quell is an over-the-counter lubricating eye drop. The label’s Uses line reads: {uses}. Its directions are {directions}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the evaporation that heated winter air speeds up.`,
      },
      {
        p: `Keep the bottle indoors. The label says {storage}, and a car, a garage or a porch in an Eau Claire January drops far below that. Carry it in an inside coat pocket when you’re out. The label also says {tip}, and notes {warnings}, since the formula contains emu oil.`,
      },
      { h: 'When to see an eye doctor in the Chippewa Valley' },
      {
        p: `If your eyes stay uncomfortable into spring, or something feels off beyond dryness, make an appointment with an optometrist or ophthalmologist. Working out the cause and choosing how to care for it are their job. The label’s stopping point is: {stopUse} Our guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists what not to wait on.`,
      },
      { h: 'Getting eye drops shipped to Eau Claire' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Wisconsin at {shipping}, and orders of {freeBottles} or more bottles ship free. You can check out as a guest, and unopened bottles can be refunded within {returnDays} days of delivery without sending them back. No delivery date is promised, so order before you run low. In deep winter, bring the package inside soon after it arrives. The [Eau Claire page](/eye-drops/eau-claire-wi) and the [Wisconsin page](/eye-drops/state/wisconsin) have the details.`,
      },
    ],
    faq: [
      {
        q: 'Where can I buy eye drops in Eau Claire, WI?',
        a: `Lubricating eye drops are sold over the counter at local pharmacies and stores, and Quell ships to Eau Claire addresses from Brentwood, Tennessee, at {shipping}, or free with {freeBottles} bottles.`,
      },
      {
        q: 'How much snow does Eau Claire get a year?',
        a: `About 55 inches, by NOAA’s 1991–2020 normals for Chippewa Valley Regional Airport, with January the snowiest month at about 13.5 inches.`,
      },
      {
        q: 'Why do my eyes feel dry in my dorm in winter?',
        a: `Dorms are often heated well above outdoor temperatures, and warming cold winter air lowers its relative humidity. Hours of studying also cut blinking, so tears evaporate faster.`,
      },
      {
        q: 'Can eye drops freeze on a Wisconsin porch?',
        a: `It’s possible in deep winter, and Quell’s label says {storage}. If a package sits outside in the cold, check the bottle before use and don’t use it if the color has changed.`,
      },
    ],
  },

  {
    slug: 'shipping-eye-drops-to-a-vacation-rental',
    title: 'Shipping eye drops to a vacation rental',
    description:
      'You can ship Quell to a US vacation rental. Ask the host first, put your name on the label, order early, and plan for a package that arrives after you leave.',
    category: 'shipping',
    addedOn: '2026-11-12',
    body: [
      {
        p: `You can have Quell shipped to a vacation rental anywhere in the United States, as long as the host agrees to receive it. Ask the host before you order, enter the rental’s full street address with any unit number, put your own name on the order, and order well before you arrive, since no delivery date is promised. Quell can’t ship to rentals outside the US.`,
      },
      { h: 'Ask the host before you order' },
      {
        p: `A rental is someone else’s property, and plenty of hosts don’t live on site. Before you place an order, send the host a short message through the booking platform. Good questions to ask:`,
      },
      {
        list: [
          `Do you accept packages for guests, and is there a fee or a limit?`,
          `What’s the exact delivery address? Some rentals have a different mailing address from the one in the listing, or a separate building number.`,
          `Where will a package be left: the front step, a lockbox, a mailroom, a neighbor, the host’s own home?`,
          `Can it arrive before check-in, and if so, who keeps it until then?`,
          `If it shows up after I’ve left, will you hold it, forward it, or let the next guest have the space?`,
        ],
      },
      {
        p: `Keep the host’s answer in the booking messages. If anything goes wrong, you’ll want to be able to show what you agreed.`,
      },
      { h: 'How to address a package to an Airbnb-style rental' },
      {
        p: `Use the address the host gives you, exactly as written, rather than one copied from a map pin. Then follow a few rules that make a guest package easy to match up with a guest:`,
      },
      {
        list: [
          `Put your own full name as the recipient, the same name as on the booking, so the host knows who it’s for.`,
          `Add the unit, cabin or suite number on its own address line. In a condo complex, the building number matters as much as the street.`,
          `If the host asks you to, add their name too, so a neighbor or front desk knows where it belongs.`,
          `Double-check the ZIP code. Resort areas often have several ZIP codes close together.`,
          `Use an email address you check while traveling, since the shipping email with tracking goes there.`,
        ],
      },
      {
        p: `[Getting the shipping address right](/guides/getting-the-address-right) has more on how address mistakes happen and how to spot them before you pay.`,
      },
      { h: 'Timing: order early' },
      {
        p: `Quell ships from Brentwood, Tennessee, and the site doesn’t promise a delivery date, so nobody can tell you the exact day a bottle will reach a mountain cabin or a beach condo. Remote and seasonal areas can take longer than a city address. Practical rules of thumb:`,
      },
      {
        list: [
          `If you need drops for the whole trip, pack a bottle from home and think of the shipment as a backup or a refill.`,
          `Order as soon as your booking and the host’s yes are both in place, not the day before you leave.`,
          `If the host can’t hold a package before check-in, wait to order until you know someone will be there to receive it.`,
          `Watch tracking from the shipping email, and let the host know when it shows delivered.`,
        ],
      },
      { h: 'Package left outside: heat and cold' },
      {
        p: `Many rentals have no one home during the day, so packages sit on porches. The label’s storage line reads {storage}. A box on a sunny desert porch or a snowy cabin step can drift outside that range for a few hours. Ask the host whether there’s a shaded or covered spot, a lockbox, or a garage where deliveries can go, and bring the package inside as soon as you can. Before first use, look at the solution: the label’s “do not use” line reads: {doNotUse}. The carton also states: {milky}.`,
      },
      {
        p: `[Eye drops shipped in hot or cold weather](/guides/eye-drops-shipped-in-hot-or-cold-weather) covers this in more depth.`,
      },
      { h: 'What happens if it arrives after you leave' },
      {
        p: `This is the most common way a rental delivery goes wrong. A few options, in rough order of convenience:`,
      },
      {
        list: [
          `Ask the host to forward it to your home. You’ll likely need to pay their postage, and they’re not obliged to agree.`,
          `Ask the host to hold it if you’ll be back soon, or if a friend nearby can pick it up.`,
          `If the bottles never reached you, call us at {phone}, {hours}, with your order number and the host’s message history.`,
        ],
      },
      {
        p: `Our policy is that unopened bottles can be refunded within {returnDays} days of delivery without being sent back, and damaged, incorrect or broken-seal orders are replaced. The [terms](/terms) spell out exactly what qualifies, so read them before you assume a lost-in-transit or left-at-the-rental package is covered.`,
      },
      { h: 'Rentals outside the United States' },
      {
        p: `Quell ships only to US addresses. A villa in Mexico, a flat in Europe or a cabin in Canada can’t receive an order, and no workaround on our side changes that. Buy what you need before you go, and pack it. [Does Quell ship outside the US?](/guides/does-quell-ship-outside-the-us) explains why, and [traveling with eye drops](/guides/traveling-with-eye-drops) covers carry-on rules.`,
      },
      { h: 'Using drops while you’re away' },
      {
        p: `The directions don’t change on vacation: {directions}. Rentals vary a lot in air, from a dry mountain cabin with a wood stove to a beach house with the air conditioning set low, so it helps to know where the vents and heaters are and to sit out of their path. Wash your hands with soap before using a drop, especially after a day outdoors, and keep the bottle in your room rather than a shared bathroom where other guests may handle it. As always, {tip}.`,
      },
      { h: 'Checklist before you hit order' },
      {
        list: [
          `Host has said yes to receiving packages, in writing.`,
          `Full rental address, with unit or cabin number, confirmed by the host.`,
          `Your name on the order, matching the booking.`,
          `An email you’ll see while traveling.`,
          `A bottle packed from home in case the shipment is slow.`,
          `A plan with the host if it arrives after checkout.`,
        ],
      },
    ],
    faq: [
      {
        q: 'Can I ship a package to an Airbnb?',
        a: `Often, yes, but only with the host’s agreement. Ask before you order, use the exact address they give you, and put your own name on the package so they know which guest it’s for.`,
      },
      {
        q: 'Whose name goes on a package sent to a vacation rental?',
        a: `Yours, matching the name on the booking. If the host asks, add their name as well so a neighbor or front desk can match it up.`,
      },
      {
        q: 'What if my package arrives at the rental after I check out?',
        a: `Ask the host whether they’ll hold it or forward it, usually at your expense. If the bottles never reach you, call {phone} with your order number and your messages with the host.`,
      },
      {
        q: 'Can Quell ship to a vacation rental in Mexico or Canada?',
        a: `No. Quell ships only to addresses in the United States, so buy before you leave and pack the bottles in your luggage.`,
      },
    ],
  },

  {
    slug: 'ordering-eye-drops-on-your-phone',
    title: 'Ordering eye drops on your phone',
    description:
      'How to order Quell from a phone: guest checkout, typing the address and email without slips, why the cart stays on that phone, and finding the order later.',
    category: 'ordering',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Ordering Quell on your phone works the same way it does on a computer. Add bottles to the cart, check out as a guest, enter your shipping address and email, then pay on the payment provider’s secure page. Most phone orders that go wrong come from small typing slips, so read the address and email once more before paying.`,
      },
      { h: 'Step by step on a phone' },
      {
        list: [
          `Open quelldrop.com in your phone’s browser and choose a quantity from the [buy section](/#buy).`,
          `Tap through to the [cart](/cart) and check the number of bottles.`,
          `Choose guest checkout. No account or app is needed.`,
          `Enter your name, shipping address, email and phone number.`,
          `Read every field once, slowly, with your thumb off the keyboard.`,
          `Continue to payment. Card entry happens on the payment provider’s own secure page, not a form on this site.`,
          `Watch for the confirmation email, which has your order number.`,
        ],
      },
      { h: 'Guest checkout on mobile' },
      {
        p: `There’s no app to install and no account to create. Guest checkout asks for what’s needed to ship the order and send you its emails. If you do have an account, signing in lets you see past orders from any device; [do I need an account to order?](/guides/do-i-need-an-account-to-order) covers the difference. Either way, buyers must be 18 or older.`,
      },
      { h: 'Typing the address on a small screen' },
      {
        p: `Phone keyboards and autofill cause most address problems. A few that come up again and again:`,
      },
      {
        list: [
          `Autofill drops in an old address from a move years ago.`,
          `The apartment or unit number lands in the wrong field, or gets left off entirely.`,
          `Autocorrect changes a street name into a common word.`,
          `Two digits in the house number or ZIP code get swapped.`,
          `A work address fills in when you meant home, or the reverse.`,
        ],
      },
      {
        p: `Turn the phone sideways if that makes the fields easier to read, and zoom in on the address before you continue. Quell ships only within the United States, so a foreign address won’t go through. [What if I entered the wrong shipping address?](/guides/wrong-shipping-address) explains what to do if you spot a mistake after paying.`,
      },
      { h: 'Email typos and why they matter' },
      {
        p: `The email address receives your confirmation, the shipping notice with tracking and, later, one reorder reminder. On a phone keyboard, a single slipped letter in the provider’s name is easy to miss. Checkout suggests a correction when an address looks like a common mistake, so if it offers one, take a second look. If no confirmation shows up, check spam first, then read [what if I mistype my email at checkout?](/guides/mistyped-email-at-checkout).`,
      },
      { h: 'Paying from your phone' },
      {
        p: `When you continue to payment, your phone opens the payment provider’s secure page. Its web address won’t be quelldrop.com, which is expected because the card form belongs to the processor. Card details never pass through this site. Only reach that page from the checkout button; if a payment link ever arrives by text or email instead, close it. [How payment works](/guides/how-payment-works) has the details.`,
      },
      {
        p: `Prices and shipping are shown before you pay. Standard shipping is {shipping} per order, and orders of {freeBottles} or more bottles ship free. There are no promo codes to hunt for and no subscription to opt out of.`,
      },
      { h: 'Your cart stays on that phone' },
      {
        p: `The cart is stored in your phone’s browser, not on our servers. Close the tab and come back later, and it’s still there on that phone. Open the site on your laptop, though, and the cart will be empty, because nothing was sent to the shop. The same goes for switching between two browsers on the same phone. [Is my cart saved if I leave the site?](/guides/your-cart-is-saved-on-this-device) explains why it works that way.`,
      },
      {
        p: `Private or incognito tabs usually wipe stored data when they close, so a cart started in one may vanish. Guest checkout details you enter are also remembered in that browser for next time; on a shared or family phone, use “Not you? Clear details” on the cart page.`,
      },
      { h: 'Finding the order later' },
      {
        p: `Orders are kept by the shop, so you can look one up from any device. The [order lookup page](/orders) needs the order number and the email you used at checkout. The confirmation email also has a button that opens it directly. Starring or labeling that email on your phone makes it easy to find when tracking updates arrive.`,
      },
      { h: 'Common phone ordering problems' },
      {
        list: [
          `The page won’t continue: scroll back up and look for a field the form has flagged, often a ZIP code or phone number.`,
          `The payment page didn’t load: check your signal, and avoid tapping back while it’s still loading.`,
          `You’re not sure the order went through: wait for the confirmation email before trying again, so you don’t order twice.`,
          `No email after a while: check spam and promotions folders, then call {phone}, {hours}.`,
        ],
      },
      { h: 'Before your first drop' },
      {
        p: `Once the package arrives, read the label on the carton or on the [Drug Facts page](/drug-facts). The directions are {directions}, and the label notes {warnings}, which matters if you’re ordering for someone else. Don’t be surprised by the color, either: {appearance}`,
      },
    ],
    faq: [
      {
        q: 'Can I order eye drops from my phone?',
        a: `Yes. Quell’s checkout works in any phone browser, with guest checkout and no app to install. Payment happens on the payment provider’s secure page.`,
      },
      {
        q: 'Why is my cart empty on my computer when I added items on my phone?',
        a: `The cart is saved in the browser on the device where you started it, and it’s never sent to the shop. A cart started on your phone stays on your phone.`,
      },
      {
        q: 'How do I check my order status on my phone?',
        a: `Open the order lookup page and enter your order number with the email you used at checkout, or tap the button in your confirmation email.`,
      },
      {
        q: 'What if autofill put the wrong address on my order?',
        a: `Call {phone}, {hours}, as soon as you notice, with your order number and the correct address. Before paying next time, read the address fields once more, since autofill can bring back an old address.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-at-an-outdoor-winter-game',
    title: 'Dry eyes at an outdoor winter game',
    description:
      'Stadium wind, tailgate grills and propane heaters all dry your eyes at a cold-weather game. How to sit, dress and carry eye drops so you can watch in comfort.',
    category: 'seasonal',
    addedOn: '2026-11-12',
    body: [
      {
        p: `A cold-weather football game is hard on your eyes: hours of wind swirling through an open bowl, smoke from tailgate grills, the dry blast of propane heaters, and long stretches of staring at the field without blinking much. Wraparound sunglasses, sitting out of the heater’s direct path, blinking during breaks in play and keeping eye drops in an inside pocket all help you get through four quarters.`,
      },
      { h: 'Why your eyes feel it at a winter game' },
      {
        p: `Cold air holds little moisture, and wind moving across your face carries tears away faster than still air. Open stadiums funnel wind through the gaps between stands, and upper rows catch more of it than seats near the field. Add the way people watch a close game, staring at one spot through a whole drive, and you have the setup for tired, scratchy eyes by halftime.`,
      },
      {
        p: `Watering eyes are part of the same picture. Cold wind can make your eyes stream, then they feel dry later once you’re in the warm car. [Dry eyes from cold air](/guides/dry-eyes-from-cold-air) explains the back-and-forth.`,
      },
      { h: 'Tailgating: grills, fire pits and heaters' },
      {
        p: `The parking lot before kickoff is often harder on your eyes than the game itself:`,
      },
      {
        list: [
          `Charcoal grills and smokers send smoke straight across the lot whenever the wind shifts. Stand upwind, and step away when someone opens the lid.`,
          `Fire pits throw both smoke and dry heat. Sit to the side rather than directly facing the flames.`,
          `Propane patio heaters blow hot, dry air downward. Stand at the edge of the warm circle, not right under the head.`,
          `Generators and vehicle exhaust add fumes; keep your setup clear of running engines.`,
        ],
      },
      {
        p: `Many of the same rules apply at home around a fireplace, which [fireplaces, candles and dry eyes](/guides/fireplaces-candles-and-dry-eyes) covers.`,
      },
      { h: 'In the stands' },
      {
        list: [
          `Wear sunglasses for day games, ideally wraparound frames, which block wind from the sides as well as glare from low winter sun.`,
          `For night games, clear or lightly tinted wraparound glasses still cut the wind.`,
          `Pull a scarf or neck gaiter up over your nose and cheeks so you’re not turning away from gusts with your eyes half closed.`,
          `If your section has seat heaters or blowers, angle yourself so hot air isn’t aimed at your face.`,
          `Use timeouts, TV breaks and halftime to look away from the field, blink fully a few times and give your eyes a rest.`,
          `Drink water, not just coffee or beer. Cold weather is dehydrating, and so is a long day outdoors.`,
        ],
      },
      { h: 'Carry eye drops in an inside pocket' },
      {
        p: `Quell’s storage line reads {storage}. A bottle left in a cooler, a truck bed or an outer coat pocket during a freezing game can fall below that range, and so can one in the car if you leave it parked for hours. An inside jacket pocket, close to your body, keeps it much closer to room temperature. Before using a bottle that did get cold, let it come back to room temperature and check it; the label’s “do not use” line reads {doNotUse}.`,
      },
      { h: 'Using a drop at the stadium' },
      {
        p: `The directions are {directions}, so plan one around the game instead of reaching for the bottle every time a gust hits. A few habits make it easier in a crowd:`,
      },
      {
        list: [
          `Use a drop before you leave the car or the tailgate, while your hands are clean and warm.`,
          `If you need one during the game, go to a restroom or concourse, wash your hands with soap and water, and use a mirror.`,
          `Take your gloves off first; trying to squeeze a bottle in thick gloves is how tips get touched. The label says {tip}.`,
          `Hold the bottle upright and capped between uses, and keep the cap clean in a pocket, not on a dirty tray.`,
        ],
      },
      {
        p: `Glove-covered or cold, stiff fingers are the most common reason people miss the eye or touch the tip. [Why you should never touch the bottle tip](/guides/do-not-touch-the-tip) explains why it matters.`,
      },
      { h: 'Stadium bag policies vary' },
      {
        p: `Many stadiums limit what you can bring in, often requiring clear bags of a certain size and setting their own rules on medicines and liquids. There isn’t one standard. Check the venue’s website or the ticket app before you go, look for what it says about medication, and keep the bottle in its carton if you think staff may want to see the label. Small items in a coat pocket are usually easier than a bag, but follow what the venue says, not what was allowed somewhere else.`,
      },
      { h: 'Contact lenses, kids and other drops' },
      {
        p: `The label doesn’t give directions for use with contact lenses, for children, or alongside other eye drops. If you wear contacts to games or you’re thinking of bringing a bottle for a child, ask your eye doctor or a pharmacist first rather than improvising in the stands.`,
      },
      { h: 'After the game' },
      {
        p: `The ride home brings its own dry air. Point the car’s heater vents at your chest or the windshield, not your face, and don’t put drops in while you’re driving. If your eyes still feel irritated the following morning, or anything flew into them during the game, don’t wait it out. {stopUse}`,
      },
      {
        p: `Heading out for a road game or a bowl trip? [Thanksgiving travel with eye drops](/guides/thanksgiving-travel-with-eye-drops) covers packing and carry-on rules, and you can [order Quell here](/#buy) with guest checkout, shipped from Brentwood, Tennessee, to US addresses.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes water at football games in the cold?',
        a: `Cold, moving air dries the surface of the eye, and the eyes often respond by watering. Wraparound sunglasses and a scarf pulled up to your cheeks cut the wind that sets it off.`,
      },
      {
        q: 'Can I bring eye drops into a stadium?',
        a: `It depends on the venue. Stadiums set their own bag and medicine rules, so check the stadium’s website or ticket app before you go, and keep the bottle in its labeled carton.`,
      },
      {
        q: 'Do propane heaters dry out your eyes at a tailgate?',
        a: `They blow hot, dry air, so standing right under or in front of one speeds up evaporation from your eyes. Stand at the edge of the warm area instead.`,
      },
      {
        q: 'Where should I keep eye drops at a cold game?',
        a: `In an inside jacket pocket, close to your body. Quell’s label says {storage}, and a cooler, truck bed or outer pocket can get colder than that.`,
      },
    ],
  },

  {
    slug: 'christmas-gifts-for-a-gamer',
    title: 'Christmas gifts for a gamer who plays for hours',
    description:
      'Gift ideas for someone who games for hours: desk setup, lighting, break timers, comfort extras and, for adults, a bottle of Quell eye drops.',
    category: 'seasonal',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Good Christmas gifts for a gamer who plays long sessions are things that make those hours more comfortable: a monitor arm or riser, a bias light behind the screen, a desk humidifier, a break timer, a big water bottle, and comfort extras like a footrest or wrist rest. For an adult gamer whose eyes get dry, a bottle of Quell lubricating eye drops fits in a stocking too.`,
      },
      { h: 'Gifts for gamers who have everything' },
      {
        p: `Serious gamers usually already own the expensive gear. The gap in most setups is comfort, and that’s where a thoughtful gift can stand out. Things that make a four-hour session easier on the body, and on the eyes, get used every day long after the new game gets shelved.`,
      },
      { h: 'Desk setup gifts' },
      {
        list: [
          `A monitor arm or riser, so the top of the screen sits at or a little below eye level. Looking slightly down lets the eyelids cover more of each eye.`,
          `A wider desk mat or a keyboard tray, so they can sit back a comfortable distance from the screen.`,
          `A footrest, which makes it easier to sit upright through a long raid.`,
          `A headset stand or wall hook, to clear clutter and leave room to set things down.`,
          `A small, quiet desk fan with an adjustable head, so it can cool the room without blowing across their face.`,
        ],
      },
      { h: 'Lighting gifts' },
      {
        p: `Playing in a dark room with a bright screen makes people squint and stare. Lighting that evens out the contrast is one of the most practical upgrades you can give:`,
      },
      {
        list: [
          `A bias light: a strip of LED light that sticks to the back of a monitor or TV and softly lights the wall behind it.`,
          `A dimmable desk lamp with a warm setting, aimed at the desk rather than the screen.`,
          `Smart bulbs for the room, so the lights can be set to match whatever time of day they play.`,
          `Blackout curtains with a lamp, for gamers who fight daytime glare on the screen.`,
        ],
      },
      { h: 'Gifts that build in breaks' },
      {
        p: `Concentration cuts blinking, and long sessions at a screen let tears evaporate between blinks. Breaks are the simplest fix, and a gift can make them a habit:`,
      },
      {
        list: [
          `A visual timer or desk clock that can be set for 20- or 30-minute intervals.`,
          `A smart plug that can switch the lights off at a set time as a gentle end-of-session cue.`,
          `A fitness band that nudges them to stand up every hour.`,
          `A big insulated water bottle, so a trip to refill it becomes a natural pause.`,
          `A board game or card game, for nights when the group plays offline.`,
        ],
      },
      { h: 'Air and comfort' },
      {
        list: [
          `A small desk humidifier, especially in a heated bedroom in winter. Include a note about cleaning it on the maker’s schedule.`,
          `A cushioned wrist rest or a lumbar pillow for the chair.`,
          `A soft throw blanket, so they can turn the space heater down or point it away from their face.`,
          `Gift cards for snacks or delivery, for game night.`,
        ],
      },
      { h: 'Is Quell a good gift for a gamer?' },
      {
        p: `For an adult gamer who has mentioned dry or tired eyes, a bottle of Quell can be a practical add-on. It’s an over-the-counter lubricating eye drop, and the label’s Uses line reads: {uses}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its directions are {directions}, so it fits into a routine rather than being something to reach for mid-match.`,
      },
      {
        p: `A few things to check before you buy it as a gift:`,
      },
      {
        list: [
          `Allergies: the label notes {warnings}. The formula contains emu oil, so skip it for anyone with an egg or bird allergy. [Egg or bird allergy? Read this before Quell](/guides/egg-or-bird-allergy-and-quell) has more.`,
          `Age: you must be 18 or older to buy on this site, and the label’s directions don’t cover children. For a younger gamer, ask their eye doctor or pharmacist.`,
          `Contact lenses and other drops: the label doesn’t cover these. If they wear contacts while gaming, suggest they ask their eye doctor.`,
          `Comfort with the idea: some people find a health product an odd gift. Pairing it with a desk light or a fun extra keeps it from feeling like a hint.`,
        ],
      },
      {
        p: `[Eye drops for gamers](/guides/eye-drops-for-gamers) covers how a gamer would actually use them through a session, if you want to tuck a printed page in with the gift.`,
      },
      { h: 'Ordering a gift of Quell' },
      {
        p: `You can ship Quell to your own address and wrap it, or send it straight to the gamer anywhere in the US. Shipping is {shipping} per order, or free with {freeBottles} or more bottles, which is handy if you’re buying for several people at once. No arrival date is promised, so order well ahead of Christmas rather than counting on a last-week delivery. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back, if it turns out not to suit them. [How to send Quell as a gift](/guides/sending-quell-as-a-gift) walks through it.`,
      },
      { h: 'Storage tip for the gift-giver' },
      {
        p: `If you’re hiding the bottle until Christmas, keep it somewhere indoors at room temperature, not in a cold garage or a car trunk. The label says {storage}.`,
      },
    ],
    faq: [
      {
        q: 'What do you get a gamer who has everything?',
        a: `Comfort upgrades they rarely buy themselves: a monitor arm, a bias light behind the screen, a desk humidifier, a footrest, or a break timer. Small extras like a big water bottle or, for an adult, a bottle of eye drops fill a stocking.`,
      },
      {
        q: 'Are eye drops a weird gift for a gamer?',
        a: `Not if they’ve mentioned dry or tired eyes after long sessions. Pair a bottle with a fun desk extra so it reads as thoughtful rather than a hint, and check first for an egg or bird allergy.`,
      },
      {
        q: 'Can I buy Quell as a gift for a teenage gamer?',
        a: `Buyers on this site must be 18 or older, and the label’s directions don’t cover children. For a gamer under 18, ask their eye doctor or pharmacist what fits.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-when-riding-a-motorcycle',
    title: 'Dry eyes when riding a motorcycle',
    description:
      'Wind at highway speed, open visors and cold rides dry your eyes on a motorcycle. What to wear, how to use helmet vents, and where to keep eye drops on the bike.',
    category: 'using',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Riding a motorcycle dries your eyes because air rushes across them at road speed, far faster than any breeze you’d feel standing still. A closed full-face visor, sealed goggles or wraparound glasses cut most of that wind. Use eye drops before you ride or at a stop with the engine off, never while moving, and keep the bottle in a jacket pocket rather than a hot saddlebag.`,
      },
      { h: 'Why motorcycle riding dries your eyes' },
      {
        p: `Wind speeds up evaporation from the tear film, and on a bike your face is the leading edge. At highway speed, any gap in your eye protection lets a steady stream of air across the surface of your eyes. Riders also tend to concentrate hard and scan the road, which cuts down on blinking. Put the two together for an hour and it’s no surprise your eyes feel gritty at the first gas stop.`,
      },
      {
        p: `Watery eyes are part of it too. Strong wind can make your eyes stream, which blurs your view, and then they feel dry once you stop. That cycle is the same one cyclists know, but faster; [dry eyes when cycling](/guides/dry-eyes-when-cycling) covers the lower-speed version.`,
      },
      { h: 'Full-face, modular or open-face helmets' },
      {
        list: [
          `Full-face with the visor down blocks the most direct wind. Close it fully at speed; riding with it cracked open sends a jet of air across your eyes.`,
          `Modular helmets work like a full-face only with the chin bar locked down.`,
          `Three-quarter and open-face helmets need separate eye protection: goggles or wraparound glasses that seal close to the face.`,
          `Half helmets leave your eyes exposed entirely without goggles.`,
        ],
      },
      {
        p: `Eye protection rules for riders vary by state, and some require goggles, glasses or a windscreen. Check your own state’s motorcycle rules, and remember that the requirement is about safety from debris as much as comfort.`,
      },
      { h: 'Helmet vents and airflow' },
      {
        p: `Most full-face helmets have chin and forehead vents. They keep the visor from fogging, but some route air across the inside of the visor and into your eyes. If your eyes dry out with the visor closed, try closing the brow vent and leaving the chin vent open, or the reverse, and notice which feels better on a familiar road. A visor insert that reduces fogging can let you run the vents less. Make sure the helmet fits snugly, since a loose helmet can let air in around the eye port.`,
      },
      { h: 'Windscreens and turbulence' },
      {
        p: `A windscreen can help or hurt. A screen at the right height pushes air over your helmet; one that’s slightly too short or too tall can send buffeting turbulence right at the visor opening, which feels worse than clean wind. If your eyes water more after fitting a new screen, an adjustable or different-height screen may make a difference.`,
      },
      { h: 'Cold-weather rides' },
      {
        p: `Cold air holds little moisture, and wind chill at speed is far colder than the thermometer shows. On late-fall and winter rides:`,
      },
      {
        list: [
          `Keep the visor fully closed and use an anti-fog insert so you’re not tempted to crack it.`,
          `Wear a neck gaiter or balaclava to stop cold air from rushing up under the helmet.`,
          `Heated grips and gloves keep your fingers working, which matters when you stop to use a drop.`,
          `Take more frequent breaks, warm up indoors, and blink fully a few times before you head back out.`,
        ],
      },
      { h: 'Never put eye drops in while riding' },
      {
        p: `A drop blurs your vision for a moment, and taking a hand off the bars at speed is dangerous. Plan drops around the ride instead:`,
      },
      {
        list: [
          `Before you gear up, with clean hands and a mirror.`,
          `At a fuel or rest stop: pull over somewhere safe, switch off the engine, take off the helmet and gloves, and wash or sanitize your hands.`,
          `Wait until your vision is clear again before you put the helmet back on and ride.`,
        ],
      },
      {
        p: `Quell’s directions are {directions}, so a morning drop and one at a lunch stop fit naturally into a day’s ride. Riding gloves pick up grime, fuel and bugs, so take them off before handling the bottle. The label says {tip}.`,
      },
      { h: 'Where to keep eye drops on a motorcycle' },
      {
        p: `The label’s storage line reads {storage}. That rules out a lot of places on a bike:`,
      },
      {
        list: [
          `Hard saddlebags and top cases sitting in summer sun can get much hotter than the air around them.`,
          `Tank bags sit on top of the bike in direct sun, and some sit near engine heat.`,
          `Under-seat storage on many bikes sits close to the engine or exhaust.`,
          `On a cold ride, an exterior jacket pocket gets as cold as the wind.`,
        ],
      },
      {
        p: `An inside chest pocket of your riding jacket is usually the most stable spot, warmed by your body but out of direct sun. On a long tour, keep spare bottles in your room or in a bag you carry inside at each stop. [Can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car) explains why heat matters.`,
      },
      { h: 'Bugs, grit and when to stop' },
      {
        p: `If something hits your eye at speed, pull over as soon as it’s safe. Don’t rub it. Blinking and natural tears often clear small grit, but a lubricating drop isn’t meant for flushing out debris or for an injury. If you feel pain, your vision changes, or the feeling of something in your eye won’t go away, get it checked by an eye doctor or urgent care. The label’s limit is clear: {stopUse} See [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor).`,
      },
      { h: 'Contact lenses under a helmet' },
      {
        p: `Many riders wear contacts, and wind can make them feel dry quickly. Quell’s label doesn’t give directions for use with contact lenses, so ask your eye doctor what works for you on the bike.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes water when riding a motorcycle?',
        a: `Wind at road speed dries the surface of your eyes, and they often water in response. A fully closed visor, sealed goggles or wraparound glasses cut most of that airflow.`,
      },
      {
        q: 'Should I ride with my helmet visor open?',
        a: `Not at speed if your eyes get dry. A cracked visor channels a stream of air across your eyes. Close it fully and manage fogging with vents or an anti-fog insert.`,
      },
      {
        q: 'Can I keep eye drops in my motorcycle saddlebag?',
        a: `Not in hot or very cold weather. Quell’s label says {storage}, and saddlebags in the sun or tank bags near the engine can exceed that. An inside jacket pocket is steadier.`,
      },
      {
        q: 'When should I use eye drops on a motorcycle trip?',
        a: `Before you ride and at stops, with the engine off, your helmet and gloves removed, and clean hands. Never while riding, and wait until your vision clears before setting off again.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-from-looking-through-a-microscope',
    title: 'Dry eyes from looking through a microscope',
    description:
      'Long sessions at a microscope cut blinking and leave eyes dry and tired. Habits for lab workers, students and jewelers, plus lab rules about eye drops.',
    category: 'using',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Looking through a microscope dries your eyes mainly because you blink less while you focus. Holding your gaze steady on a tiny field, often for an hour or more, lets the tear film thin out between blinks. Short, regular breaks, deliberate full blinks, a well-adjusted eyepiece and, outside the lab, a lubricating eye drop used as labeled all help. Check your lab’s rules before bringing drops in.`,
      },
      { h: 'Why microscope work dries your eyes' },
      {
        p: `Every blink spreads a fresh layer of tears across the eye. When you’re counting cells, scanning a slide or setting a tiny stone, your attention locks onto one small spot and blinking slows down. Some people also hold their eyes wide open without noticing, which exposes more of the surface to air. Lab rooms add to it: fume hoods, biosafety cabinets and building ventilation keep air moving, and that moving air speeds up evaporation.`,
      },
      {
        p: `The result is a familiar end-of-session feeling: tired, gritty or heavy eyes, sometimes with a little blur that clears after you blink a few times. It’s much like the screen fatigue described in [screens and your tear film](/guides/screens-and-your-tear-film), only more intense because the view is so small and so demanding.`,
      },
      { h: 'Who gets it' },
      {
        list: [
          `Lab technicians and researchers who spend hours a day on slides, cultures or samples.`,
          `Pathology, cytology and histology staff reading large batches of slides.`,
          `Biology and medical students in long lab sections before an exam.`,
          `Jewelers, watchmakers and gem graders working under a stereo microscope or loupe.`,
          `Electronics technicians soldering or inspecting circuit boards under magnification.`,
          `Hobbyists such as model builders, coin collectors and amateur naturalists.`,
        ],
      },
      { h: 'Set up the microscope for your eyes' },
      {
        p: `A microscope that’s badly adjusted makes you strain, and strain tends to mean even less blinking. Before a long session:`,
      },
      {
        list: [
          `Set the distance between the eyepieces to match your eyes, so you see one round field without effort.`,
          `Adjust the diopter on the eyepiece that has one, so both eyes are in focus. A mismatch makes one eye work harder.`,
          `Raise or lower your chair so you look into the eyepieces with your neck straight, not craning down.`,
          `Turn the light down to the lowest level that shows what you need. A glaring field makes people squint.`,
          `If you wear glasses, ask whether the eyepieces are designed for use with them, and keep both lenses and eyepieces clean.`,
          `Point fans, vents and heaters at the bench away from your face where you can.`,
        ],
      },
      { h: 'Breaks and blinking at the bench' },
      {
        p: `The most effective change is also the simplest: stop looking for a moment, often. A pattern that works for many people:`,
      },
      {
        list: [
          `After every slide, plate or piece, lift your head and look across the room for a few seconds.`,
          `Blink slowly and fully five or six times before you look back in.`,
          `Every 20 to 30 minutes, take your eyes off the microscope for a full minute, and stand up if you can.`,
          `Every hour or two, leave the bench, wash your hands, drink some water and give your eyes a longer rest.`,
          `If your work involves timed steps, use the waiting time as eye breaks instead of checking a phone.`,
        ],
      },
      {
        p: `Splitting long tasks between microscope work and other work (labeling, data entry, paperwork) also gives your eyes regular relief without slowing you down much.`,
      },
      { h: 'Eye drops in the lab: check the rules first' },
      {
        p: `Many laboratories ban applying cosmetics, eating, drinking or handling contact lenses in work areas, and some include eye drops in the same rule, because anything near your face can carry contamination from the bench to your eyes. Rules differ by lab and by the materials you work with. Ask your lab supervisor or safety officer before you bring a bottle into a lab space, and follow what they tell you.`,
      },
      {
        p: `In practice, most people use their drops outside the lab: before a session, at lunch, or after they’ve finished, in a break room or restroom after removing gloves and washing their hands.`,
      },
      { h: 'Clean hands and a clean tip' },
      {
        list: [
          `Remove your gloves and lab coat according to your lab’s procedure before you go anywhere near your eyes.`,
          `Wash your hands with soap and water; sanitizer alone may not be enough after some lab work.`,
          `Don’t keep the bottle in a lab coat pocket that also holds pens, markers or tools used at the bench.`,
          `Follow the label exactly: {tip}. [Why you should never touch the bottle tip](/guides/do-not-touch-the-tip) explains why.`,
        ],
      },
      {
        p: `If something from the bench splashes into your eye, a lubricating drop is not what to reach for. Use the lab’s eyewash station as you’ve been trained, and report it according to your lab’s procedures.`,
      },
      { h: 'Using Quell around a lab schedule' },
      {
        p: `Quell is an over-the-counter lubricating eye drop. The label’s Uses line reads: {uses}. Its directions are {directions}, which fits neatly into a workday: one drop before you start, one at a midday break, and one in the evening. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss.`,
      },
      {
        p: `Keep the bottle somewhere that stays at room temperature, such as a desk drawer or bag outside the lab, not in a lab refrigerator or a cold room. The label says {storage}. And because the formula contains emu oil, the label notes {warnings}.`,
      },
      { h: 'Contact lenses at the microscope' },
      {
        p: `Many labs restrict contact lenses in certain areas, and Quell’s label doesn’t give directions for using it with contacts. If you wear lenses and your eyes dry out at the microscope, ask your eye doctor what to do, and check your lab’s policy on lenses.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Tired eyes after a long session that recover by evening are common. Blurry vision that doesn’t clear, pain, or dryness that hangs on for days is not something to push through at the bench. An eye exam can also check whether your glasses prescription suits close work. The label is clear on when to stop: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has more.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry looking through a microscope?',
        a: `Concentrating on a small, bright field cuts down on blinking, and lab ventilation keeps air moving across your eyes. Tears evaporate between blinks, so your eyes feel dry and tired after a long session.`,
      },
      {
        q: 'Can I use eye drops in a laboratory?',
        a: `It depends on your lab. Many labs ban anything that brings your hands to your face in work areas. Ask your supervisor or safety officer, and use drops outside the lab with clean hands if that’s the rule.`,
      },
      {
        q: 'How often should I take breaks from the microscope?',
        a: `Look up and away after each slide or sample, and take a fuller break of a minute or more every 20 to 30 minutes, blinking slowly before you look back in.`,
      },
      {
        q: 'Do jewelers get dry eyes from magnification work?',
        a: `Many do. Long stretches under a loupe or stereo microscope reduce blinking the same way lab work does. Regular breaks, a comfortable light level and good posture at the bench all help.`,
      },
    ],
  },

  {
    slug: 'why-can-i-taste-eye-drops',
    title: 'Why can I taste eye drops in my throat?',
    description:
      'Tasting eye drops is normal: tears drain from the eye into the nose and down the throat. Why it happens, what to do, and when to call for help.',
    category: 'using',
    addedOn: '2026-11-12',
    body: [
      {
        p: `You can taste eye drops because your eyes drain into your nose. MedlinePlus explains that tears flow into a tiny opening in the inner corner of each eye, the entrance to the tear duct, which carries them into the nose. From there, a little liquid runs down the back of the throat, where you taste it. A faint taste after a drop simply means the drop followed the same path your tears always take.`,
      },
      { h: 'How tears drain from the eye' },
      {
        p: `Your eyes make tears around the clock, and they need somewhere to go. According to MedlinePlus, the National Library of Medicine’s health site, tears drain through a very small opening called the punctum in the corner of the eye near your nose. That opening is the entrance to the nasolacrimal duct, the pathway that carries tears from the surface of the eye into the nose.`,
      },
      {
        p: `Each blink helps pump tears toward those openings. Normally the amount is so small you never notice it. But an eye drop adds liquid all at once, much more than the eye usually holds, and the extra follows the same path.`,
      },
      { h: 'Why can I taste eye drops in the back of my throat?' },
      {
        p: `The inside of the nose connects to the back of the throat. When an eye drop drains into your nose, some of it trickles back and down, just like the drip you notice when you have a cold. It reaches the back of the tongue and throat, where taste buds pick it up. That’s why the taste often shows up a minute or two after the drop rather than right away.`,
      },
      {
        p: `It also explains why crying makes your nose run: it’s the same drainage system working overtime.`,
      },
      { h: 'Why some drops taste stronger than others' },
      {
        list: [
          `Ingredients differ. Some dissolved ingredients have a noticeable taste even in tiny amounts.`,
          `A bigger drop, or a second drop when the first missed, sends more liquid down the duct.`,
          `Blinking hard right after a drop pushes more of it toward the drainage openings.`,
          `Some people are simply more sensitive to taste than others.`,
        ],
      },
      {
        p: `Quell’s ingredients include {actives} as actives, and inactive ingredients such as {inactives}. If you notice a mild taste after using it, that’s the drop following the tear drainage path described above.`,
      },
      { h: 'How to taste eye drops less' },
      {
        p: `You can’t switch the drainage off, but you can keep more of the drop on your eye and send less down your throat:`,
      },
      {
        list: [
          `Use one drop, as the directions say: {directions}. A second drop on top of the first mostly overflows or drains away.`,
          `After the drop goes in, close your eye gently for a moment instead of blinking rapidly.`,
          `Don’t squeeze your eyelids shut hard; that pushes liquid toward the inner corner.`,
          `Ask a pharmacist whether gently pressing the inner corner of the eye after a drop makes sense for you. It’s a technique some people are shown for certain medicines.`,
          `Wipe any extra from your cheek with a clean tissue rather than letting it run toward your nose.`,
        ],
      },
      {
        p: `[How to use eye drops as directed](/guides/how-to-use-eye-drops-as-directed) walks through getting one drop where it belongs.`,
      },
      { h: 'Is it bad to taste eye drops?' },
      {
        p: `Tasting a drop isn’t the same as swallowing one in any meaningful amount. The quantity that drains down the throat is tiny. Most people notice it, maybe find it odd or a little bitter, and that’s the end of it. It doesn’t mean the drop missed your eye, and it doesn’t mean you need another one.`,
      },
      {
        p: `Swallowing liquid from the bottle is a different matter. The label is clear: {swallowed}. Keep bottles out of reach of children, who may drink from anything that looks interesting, and don’t store eye drops next to oral medicines or nasal sprays where they could be mixed up. [What does “for use in the eyes only” mean?](/guides/what-does-for-use-in-the-eyes-only-mean) covers the rest.`,
      },
      { h: 'Why can I taste eye drops in my nose?' },
      {
        p: `Some people notice the drop in their nose before they taste it, as a cool or wet feeling, or the urge to sniff. That’s the same drainage, caught a step earlier. Blowing your nose right after a drop won’t harm anything, though it may pull more of the liquid down the duct. Waiting a minute or two is gentler.`,
      },
      { h: 'When a taste or drainage needs attention' },
      {
        p: `A faint taste is normal. Tell a doctor or pharmacist if you notice any of these:`,
      },
      {
        list: [
          `Your eye is always watery and tears spill onto your cheek, which can mean drainage isn’t working as it should.`,
          `You have pain, swelling or tenderness at the inner corner of the eye, near the nose.`,
          `A drop causes stinging that doesn’t settle, or your eye feels worse after using it.`,
          `You feel unwell, dizzy or short of breath after using any eye drop.`,
        ],
      },
      {
        p: `And for the eye itself, the label sets the limits: {stopUse}`,
      },
      { h: 'Questions the label doesn’t answer' },
      {
        p: `If you use more than one kind of eye drop, or you’re putting drops in a child’s eyes, Quell’s label doesn’t give directions for that. Ask your eye doctor or pharmacist how to space them or whether they’re suitable. The full panel is on our [Drug Facts page](/drug-facts).`,
      },
    ],
    faq: [
      {
        q: 'Is it normal to taste eye drops in your mouth?',
        a: `Yes. Tears drain from the inner corner of the eye through the tear duct into the nose, and a little of an eye drop follows that path down the back of the throat, where you taste it.`,
      },
      {
        q: 'Does tasting eye drops mean they didn’t go in my eye?',
        a: `No. The taste comes from liquid that reached your eye and then drained through the tear duct. It doesn’t mean you missed or need another drop.`,
      },
      {
        q: 'How do I stop tasting eye drops?',
        a: `Use a single drop, then close your eye gently for a moment instead of blinking hard. A pharmacist can show you whether pressing the inner corner of your eye is worth doing.`,
      },
      {
        q: 'What if I swallow eye drops by accident?',
        a: `A trace you taste after a drop isn’t the same as swallowing liquid from the bottle. If someone swallows eye drops, the label says: {swallowed}.`,
      },
    ],
  },

  {
    slug: 'how-much-liquid-is-in-one-eye-drop',
    title: 'How much liquid is in one eye drop?',
    description:
      'Drop size depends on the bottle’s tip and how you squeeze, so it isn’t printed on the label. What the label does tell you, and why one drop is enough.',
    category: 'using',
    addedOn: '2026-11-12',
    body: [
      {
        p: `There’s no single answer, because the size of one eye drop depends on the bottle’s tip, the liquid itself, the angle you hold the bottle and how hard you squeeze. That’s why labels list the bottle’s total volume, not a drop count or a per-drop amount. Quell’s bottle holds {size}, and its directions are {directions}. One drop is the amount to use, however big it turns out.`,
      },
      { h: 'Why drop size isn’t printed on the label' },
      {
        p: `A drop isn’t measured out the way a teaspoon is. It forms at the tip of the bottle and falls when it gets too heavy to hang on. How big it gets before it lets go depends on several things at once, and some of them change from one squeeze to the next. So a label gives what can be stated reliably, the total volume in the bottle, and gives the dose in drops rather than in milliliters.`,
      },
      {
        p: `Quell’s carton lists {size}. That’s the figure that tells you how much liquid you’re buying.`,
      },
      { h: 'What changes the size of a drop' },
      {
        list: [
          `The tip. The width of the opening and the shape of the nozzle are designed by the bottle maker, and they matter more than anything else.`,
          `The liquid. Thicker or oilier formulas form drops differently from watery ones. Quell’s carton notes: {milky}. That’s expected for its oil-based ingredients.`,
          `The angle. A bottle held straight down tends to release drops more evenly than one tilted to the side.`,
          `The squeeze. Squeezing hard and fast can push out a larger drop, or two at once.`,
          `Your hands. Cold or stiff fingers make a slow, even squeeze harder to manage.`,
        ],
      },
      { h: 'How many milliliters are in one eye drop?' },
      {
        p: `A small fraction of a milliliter, and the exact fraction varies with all of the above. You may see a single conversion figure quoted online, but it describes a particular kind of standard dropper with plain water, not every eye-drop bottle with every formula. For your own bottle, the honest answer is that the label doesn’t say, and you don’t need it to use the product correctly.`,
      },
      {
        p: `If you’re curious how many drops your bottle gives, the practical way is to note the date you open it and the date it runs out. [How long does a bottle of eye drops last?](/guides/how-long-does-a-bottle-of-eye-drops-last) looks at that from the reordering side.`,
      },
      { h: 'How many drops of eye drops should I take?' },
      {
        p: `As many as the directions say, and no more. Quell’s label reads {directions}. Using two drops instead of one doesn’t leave twice as much on your eye; the extra mostly runs out of the eye or drains away. If one drop doesn’t feel like enough, that’s worth mentioning to an eye doctor rather than solving with a bigger dose. [Can I use more than three drops a day?](/guides/can-i-use-more-than-three-drops-a-day) covers what the label allows.`,
      },
      { h: 'Why a drop overflows' },
      {
        p: `The front of the eye only holds a little liquid at a time, and a drop is often more than there’s room for. That’s why some runs onto your eyelid or cheek after it goes in, and why you might taste it as it drains through the tear duct. Neither means the drop was wasted or missed. [Why can I taste eye drops in my throat?](/guides/why-can-i-taste-eye-drops) explains the drainage.`,
      },
      { h: 'Getting one drop, not two' },
      {
        list: [
          `Wash your hands and let the bottle reach room temperature if it’s been somewhere cool.`,
          `Tilt your head back or lie down, and look up.`,
          `Gently pull your lower lid down to make a small pocket.`,
          `Hold the bottle straight down above the eye, close but without touching. The label says {tip}.`,
          `Squeeze slowly until one drop falls, then stop.`,
          `Close your eye gently for a moment. Wipe any overflow from your cheek with a clean tissue.`,
        ],
      },
      {
        p: `If you miss, it’s fine to try again with a second drop. A miss isn’t a dose. If two come out at once, don’t add another to make up for it later; just carry on with your next scheduled drop.`,
      },
      { h: 'How many drops are in 1 mL?' },
      {
        p: `It varies by product for the same reasons drop size does, so any number is an estimate for a specific bottle. If you need an exact dose for a medicine your doctor prescribed, ask your pharmacist how that product is measured. For an over-the-counter lubricating drop like Quell, the directions are written in drops precisely so you don’t have to convert anything.`,
      },
      { h: 'If the bottle seems to run out too fast' },
      {
        list: [
          `Check whether you’re regularly squeezing out two drops instead of one.`,
          `Look at how often you’re missing your eye and trying again.`,
          `Count how many times a day you’re using it; the label’s directions set the pace.`,
          `If you’re using it more often because your eyes still feel dry, talk to an eye doctor about why.`,
        ],
      },
      {
        p: `The label also sets the point to stop: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'How many ml are in one eye drop?',
        a: `A small fraction of a milliliter, but the exact amount depends on the bottle’s tip, the formula and how you squeeze, so labels don’t print it. Quell’s label gives the total, {size}, and the dose in drops.`,
      },
      {
        q: 'Why is eye drop dosage given in drops instead of milliliters?',
        a: `Because the bottle’s tip is designed to release one drop at a time, and that’s the easiest thing for you to count. Converting to milliliters would add a step without making the dose more accurate.`,
      },
      {
        q: 'Should I use two eye drops if one runs out of my eye?',
        a: `No. Some overflow is normal because the eye can only hold a little liquid. Only add another drop if the first clearly missed your eye.`,
      },
      {
        q: 'Is the drop size the same for every eye drop bottle?',
        a: `No. Bottle makers design different tips, and thicker or oilier formulas form drops differently from watery ones, so drop size varies between products.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-12 for how-are-otc-eye-drops-regulated:
   * - https://www.fda.gov/drugs/over-counter-otc-nonprescription-drugs/over-counter-otc-drug-review-otc-monograph-reform-cares-act
   *   (monograph establishes conditions such as active ingredients, uses, doses; OTC
   *   monograph drugs may be marketed without an approved application under section 505
   *   when they meet 505G and monograph conditions; CARES Act March 27, 2020 added 505G)
   * - https://www.govinfo.gov/content/pkg/CFR-2019-title21-vol5/xml/CFR-2019-title21-vol5-part349.xml
   *   (21 CFR part 349 categories: astringent, demulcents, emollients, hypertonicity
   *   agent, vasoconstrictors, eyewashes; glycerin and polysorbate 80 among demulcents;
   *   light mineral oil among emollients)
   * - https://www.accessdata.fda.gov/drugsatfda_docs/omuf/monographs/OTC%20Monograph_M018-Ophthalmic%20Drug%20Products%20for%20OTC%20Human%20Use%2004.04.22.pdf
   *   (OTC Monograph M018, ophthalmic drug products, the deemed final order carrying
   *   part 349 forward)
   */
  {
    slug: 'how-are-otc-eye-drops-regulated',
    title: 'How are over-the-counter eye drops regulated?',
    description:
      'OTC eye drops are FDA-regulated through the monograph system, which sets allowed ingredients, uses and labeling. How it works since the 2020 CARES Act.',
    category: 'choosing',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Over-the-counter eye drops are regulated by the FDA as drugs. Most are sold under an OTC monograph, a set of conditions covering which active ingredients, uses, doses and label wording are allowed for a category. The FDA says monograph drugs that meet those conditions can be marketed without an individually approved application. The 2020 CARES Act modernized how those monographs are made and changed.`,
      },
      { h: 'Are eye drops regulated by the FDA?' },
      {
        p: `They are. An eye drop that claims to relieve dryness or irritation is a drug under federal law, which brings it under the Food and Drug Administration’s rules on ingredients, labeling and manufacturing. Prescription eye drops go through FDA review of a drug application before they’re sold. Most over-the-counter drops take a different route: the monograph.`,
      },
      { h: 'What an OTC monograph is' },
      {
        p: `The FDA describes an OTC monograph as establishing conditions, such as active ingredients, uses (indications) and doses, under which a category of drugs is generally recognized as safe and effective. Think of it as a published recipe book for a whole category, rather than a review of one brand. A product that stays within the monograph’s conditions and meets the other legal requirements can be sold without its own approved application.`,
      },
      {
        p: `That’s why it isn’t accurate to describe an over-the-counter monograph eye drop as individually approved by the FDA. The FDA set the rules for the category; the maker is responsible for following them.`,
      },
      { h: 'The ophthalmic monograph and its ingredient categories' },
      {
        p: `Eye drops fall under the monograph for ophthalmic drug products. For decades it lived in the Code of Federal Regulations as 21 CFR part 349; today the FDA publishes it as OTC Monograph M018. Part 349 sorted active ingredients into categories, each with its own allowed ingredients and label wording:`,
      },
      {
        list: [
          `Astringents.`,
          `Demulcents, which include liquid polyols such as glycerin and polysorbate 80, along with cellulose derivatives and others.`,
          `Emollients, which include oily ingredients such as light mineral oil.`,
          `Hypertonicity agents.`,
          `Vasoconstrictors.`,
          `Eyewashes.`,
        ],
      },
      {
        p: `Quell’s active ingredients are {actives}. On the Drug Facts panel, glycerol and polysorbate 80 are listed as lubricants and light mineral oil as an emollient. [What is a demulcent in eye drops?](/guides/what-is-a-demulcent-in-eye-drops) explains the terms.`,
      },
      { h: 'What the CARES Act changed in 2020' },
      {
        p: `According to the FDA, the Coronavirus Aid, Relief, and Economic Security Act was signed on March 27, 2020, and added section 505G to the federal Food, Drug, and Cosmetic Act. Before that, changing a monograph meant a slow, multi-step rulemaking process. Section 505G replaced it with administrative orders, which the FDA can issue to add, revise or remove monograph conditions.`,
      },
      {
        p: `Existing final monographs, including the ophthalmic one, became what the law calls deemed final orders on the day the act took effect. That’s how part 349 became Monograph M018. For shoppers, very little changed on the shelf; the change was in how quickly the FDA can update the rules.`,
      },
      {
        p: `The same act also made over-the-counter medicines eligible for HSA and FSA funds without a prescription, a separate change covered in [why OTC eye drops count for HSA and FSA](/guides/why-otc-eye-drops-count-for-hsa-and-fsa).`,
      },
      { h: 'The Drug Facts label is regulated too' },
      {
        p: `Every OTC drug label follows the FDA’s Drug Facts format, set out in 21 CFR 201.66. It fixes the headings and their order, so every carton reads the same way: active ingredients with their purpose, uses, warnings, directions, other information and inactive ingredients. The monograph decides much of what goes under those headings, including the wording of the uses and certain required warnings.`,
      },
      {
        p: `On Quell’s carton, for example, the Uses line reads: {uses}. The directions read: {directions}. You can read the whole panel on our [Drug Facts page](/drug-facts), or see [how to read an eye drop Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label).`,
      },
      { h: 'Manufacturing, warning letters and recalls' },
      {
        list: [
          `Manufacturing: OTC eye drops must be made under the FDA’s current good manufacturing practice requirements, the same quality rules that apply to other drugs.`,
          `Warning letters: when the FDA finds an eye product making claims outside the monograph, or quality problems at a plant, it can issue a public warning letter.`,
          `Recalls: when a problem is found after products ship, companies recall affected lots, and the FDA lists recalls publicly.`,
        ],
      },
      {
        p: `[How to check if your eye drops were recalled](/guides/how-to-check-if-eye-drops-were-recalled) explains where to look and how to match a recall to the lot number on your bottle.`,
      },
      { h: 'What regulation doesn’t tell you' },
      {
        p: `Meeting the monograph means a product uses allowed ingredients and allowed claims. It doesn’t mean one brand works better than another, and it doesn’t mean a drop is right for every eye problem. Ongoing discomfort, pain or vision changes call for an eye doctor, not a different bottle. Quell’s label states: {stopUse}`,
      },
      { h: 'Reading claims with this in mind' },
      {
        list: [
          `Be wary of any OTC eye drop described as “FDA-cleared” or as having special FDA status; monograph drops don’t get individual approval.`,
          `Check that the uses on the website match the Uses line on the label.`,
          `Look for a complete Drug Facts panel, including the maker’s name and a way to contact them.`,
          `Compare active ingredients, not marketing names.`,
        ],
      },
    ],
    faq: [
      {
        q: 'Are eye drops regulated by the FDA?',
        a: `Yes. Eye drops are drugs under federal law. Prescription drops need an approved FDA application, while most over-the-counter drops are sold under the FDA’s ophthalmic monograph, which sets allowed ingredients, uses and labeling.`,
      },
      {
        q: 'What is an OTC monograph?',
        a: `It’s an FDA standard for a category of over-the-counter drugs, setting conditions such as active ingredients, uses and doses. Products that meet it and other legal requirements can be sold without an individually approved application.`,
      },
      {
        q: 'What is OTC Monograph M018?',
        a: `M018 is the FDA’s current monograph for ophthalmic drug products for over-the-counter use. It carries forward the rules that were in 21 CFR part 349 before the 2020 CARES Act reform.`,
      },
      {
        q: 'How did the CARES Act change OTC drug rules?',
        a: `Signed on March 27, 2020, it added section 505G to the Food, Drug, and Cosmetic Act, replacing slow rulemaking with FDA administrative orders for creating and changing OTC monographs.`,
      },
    ],
  },

  {
    slug: 'why-does-one-eye-feel-drier-than-the-other',
    title: 'Why does one eye feel drier than the other?',
    description:
      'One drier eye often comes down to everyday habits: the side you sleep on, a vent, fan or car window, or a screen off to one side. When to see an eye doctor.',
    category: 'choosing',
    addedOn: '2026-11-12',
    body: [
      {
        p: `One eye often feels drier than the other because of something on that side of you: the pillow you sleep on, a fan, a heating vent, the car window, or a monitor set off to one side. Those cut blinking or speed evaporation on one eye more than the other. If you can’t find a cause, or the difference comes with pain, discharge or vision changes, see an eye doctor.`,
      },
      { h: 'Can one eye be drier than the other?' },
      {
        p: `Yes. Your two eyes share a lot, but they don’t live in exactly the same air. Each one has its own tear film, its own eyelids and its own exposure to the room. Small differences in airflow, light or how fully each lid closes add up over a day, and it’s common for one side to feel worse. Noticing it is useful: an uneven pattern often points to a cause you can change.`,
      },
      { h: 'Sleeping on one side' },
      {
        p: `If you always sleep on the same side, the eye against the pillow and the eye facing the room have different nights. Some people’s lids don’t close completely during sleep, and the upper eye is the one exposed to a fan or a heating vent. The lower eye, pressed into fabric, can pick up lint or feel scratchy from pressure. Notice which eye feels worse first thing in the morning and compare it with the side you sleep on.`,
      },
      {
        list: [
          `Turn ceiling fans down or off at night, or move the bed out of the airflow.`,
          `Point a bedroom heater or humidifier so it isn’t blowing across your face.`,
          `Change and wash pillowcases often.`,
          `If someone tells you your eyes don’t fully close while you sleep, mention it to an eye doctor.`,
        ],
      },
      {
        p: `[Waking up with dry eyes in winter](/guides/waking-up-with-dry-eyes-in-winter) covers the bedroom in more detail.`,
      },
      { h: 'A vent, fan or window on one side' },
      {
        p: `Look around the places you spend the most time. One-sided airflow is the most common everyday reason for one drier eye:`,
      },
      {
        list: [
          `At work, a ceiling diffuser or a desk fan to your left or right.`,
          `At home, the couch next to a floor register, a window unit or a space heater.`,
          `In the car, the driver’s window cracked open, or the dashboard vent nearest you aimed at your face.`,
          `For drivers who rest an elbow on the open window, the eye on that side gets the most wind.`,
          `On a train or plane, the overhead air nozzle set slightly to one side.`,
        ],
      },
      {
        p: `Try swapping sides for a week: sit on the other end of the couch, close the window on the highway, turn the vent away. If the dry eye switches sides or settles, you’ve found your answer.`,
      },
      { h: 'A screen off to one side' },
      {
        p: `With two monitors, many people put their main screen slightly off center, or work on a laptop set to one side of a big monitor. Turning your head or eyes to one side for hours changes how wide each eye opens; the eye that’s more open loses more moisture between blinks. The same goes for watching TV from an angle every evening. Center your main screen, keep its top at or a little below eye level, and take regular breaks. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why screens matter.`,
      },
      { h: 'Other everyday reasons' },
      {
        list: [
          `Glasses with a scratched or smudged lens on one side, which can make you squint that eye.`,
          `Sun from the same side every day, such as a desk by a window or a regular drive with the low sun on your left.`,
          `Makeup applied more heavily on one side, or eyeliner close to the lash line of one eye.`,
          `Rubbing one eye out of habit.`,
          `Holding a phone to one side or reading in bed lying on one side.`,
          `A contact lens in one eye that’s old, damaged or different from the other. The Quell label doesn’t cover contacts, so ask your eye doctor.`,
        ],
      },
      { h: 'Using eye drops when one eye is drier' },
      {
        p: `Quell’s directions are {directions}, so the label calls for both eyes, not just the one that feels worse. If you’re tempted to use extra drops in the drier eye, that’s a sign to look harder for a one-sided cause, or to ask an eye doctor about it. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, but it can’t fix a vent pointed at your face.`,
      },
      {
        p: `If you use a different drop in one eye on a doctor’s advice, ask that doctor or your pharmacist how Quell fits in, because the label doesn’t cover using it with other eye drops.`,
      },
      { h: 'When one dry eye needs an eye doctor' },
      {
        p: `A difference that comes and goes with your surroundings is usually an everyday thing. A difference that’s new, persistent or getting worse should be looked at, especially with any of these:`,
      },
      {
        list: [
          `Pain, or a feeling that something is stuck in the eye that won’t go away.`,
          `Blurred vision, sensitivity to light, or any change in how you see from that eye.`,
          `Discharge, crusting, or swelling of the eyelid on one side.`,
          `The eye looks different from the other, or the eyelid sits differently.`,
          `Symptoms that started after an injury, a splash, or something getting in the eye.`,
        ],
      },
      {
        p: `An optometrist or ophthalmologist can examine both eyes and work out what’s going on. The label is plain about when to stop: {stopUse} Our list of [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) has more, and the [dry eye self-check](/self-check) can help you organize what you’ve noticed before an appointment.`,
      },
    ],
    faq: [
      {
        q: 'Why does only one of my eyes feel dry?',
        a: `Usually something on that side of you: the pillow you sleep on, a fan or vent, an open car window, or a screen off to one side. Change the setup for a week and see whether the difference fades.`,
      },
      {
        q: 'Should I put eye drops in only the eye that feels dry?',
        a: `Quell’s directions are {directions}, so the label calls for both eyes. If one eye keeps needing more, look for a one-sided cause or ask an eye doctor.`,
      },
      {
        q: 'Can sleeping on one side make one eye drier?',
        a: `It can. The eye facing the room may meet a fan or heater, while the eye on the pillow can be irritated by fabric and lint. Compare which eye feels worse in the morning with the side you sleep on.`,
      },
      {
        q: 'When should I worry about one dry eye?',
        a: `See an eye doctor if the difference is new and won’t go away, or if it comes with pain, discharge, swelling, light sensitivity or any change in your vision.`,
      },
    ],
  },
]
