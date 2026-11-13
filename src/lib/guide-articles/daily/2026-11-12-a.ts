import type { Guide } from '@/lib/guide-types'
export const DAILY_20261112_A: Guide[] = [
  /*
   * Sources fetched 2026-11-12 for dry-eye-relief-in-camarillo:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00023136.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00023136.csv
   *   (CAMARILLO AP, elev 23.5 m: annual precip 12.01 in; monthly precip Jan 2.85,
   *   Feb 2.90, May 0.33, Jun 0.13, Jul 0.02, Aug 0.00, Sep 0.06; Jan high 68.0 F,
   *   Aug 79.5, Sep 79.6; Dec low 43.8; 9.0 days at or above 90 F; 1.2 nights at
   *   or below 32 F; 18.6 days with 0.10 in or more of precipitation)
   * - https://www.weather.gov/media/sti/climate/STIP/43CDPW/43cdpw-TMurphree.pdf
   *   (NWS-hosted research: coastal Southern California offshore/Santa Ana events
   *   most common October through March)
   * No humidity row for Camarillo or Oxnard in NOAA's relhum table, so none used.
   */
  {
    slug: 'dry-eye-relief-in-camarillo',
    title: 'Dry eye relief in Camarillo, California',
    description:
      'Santa Ana winds, a nearly rainless summer and long commutes: how Camarillo’s air dries eyes, NOAA’s local numbers, and practical ways to find relief.',
    category: 'local',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Dry eye relief in Camarillo starts with knowing which air is doing the drying. NOAA’s normals for Camarillo Airport show barely half an inch of rain from May through September, and Santa Ana winds push hot, dry air toward the coast in fall and winter. Keeping wind and vents off your face, blinking fully at screens and using a lubricating drop exactly as labeled all help. Anything beyond everyday dryness is a job for an eye doctor.`,
      },
      { h: 'Camarillo’s weather by NOAA’s numbers' },
      {
        p: `NOAA publishes 30-year climate normals for the weather station at Camarillo Airport, on the old Oxnard Air Force Base land west of town. The 1991 to 2020 figures describe a place that’s mild nearly every day of the year and very dry for half of it:`,
      },
      {
        list: [
          `Normal yearly precipitation of 12.01 inches, most of it in a few winter storms.`,
          `January and February are the wettest months, at 2.85 and 2.90 inches.`,
          `May through September together average just over half an inch, and the August normal is zero.`,
          `Only about 19 days a year bring a tenth of an inch of rain or more.`,
          `Normal highs run from 68.0°F in January to 79.6°F in September, which is the warmest month on the airport’s record.`,
          `About nine days a year reach 90°F, and a freezing night happens roughly once a year.`,
        ],
      },
      {
        p: `Gentle temperatures mean many Camarillo homes rely on open windows more than on a furnace or air conditioner. That spares your eyes the long stretches of heated air people endure in colder states. The catch is that the dry season is long, and when the wind turns offshore, the outdoor air itself becomes the problem.`,
      },
      { h: 'When the Santa Ana winds blow' },
      {
        p: `Research presented through the National Weather Service describes coastal Southern California’s offshore wind events, the Santa Anas, as most common from October through March. High pressure builds over the Great Basin, and air drains from the interior toward the ocean, warming and drying as it drops in elevation. In Ventura County those days bring gusty wind, clear skies and air that feels like it pulls moisture straight off your skin.`,
      },
      {
        p: `Eyes feel it quickly. Moving, dry air speeds evaporation from the tear film, and blowing grit from fields, construction sites and dry hillsides adds to the irritation. A few habits make a Santa Ana day easier:`,
      },
      {
        list: [
          `Wear wraparound sunglasses outdoors; they block both wind and dust better than flat lenses.`,
          `Switch the car’s air to recirculate and point the dash vents at your chest, not your face.`,
          `Skip the leaf blower and the patio sweeping until the wind drops.`,
          `Keep windows shut at night if the wind is still running, since a bedroom breeze dries eyes during sleep.`,
          `Drink water through the day; low humidity dries more than your eyes.`,
        ],
      },
      { h: 'Marine layer mornings and inland afternoons' },
      {
        p: `Late spring and early summer often start under a low, gray marine layer that rolls in off the Pacific. Mornings on the plain feel cool and damp, and many people notice their eyes less. Then the layer burns off, or you drive out of it. A commute up the Conejo Grade toward Thousand Oaks, or east on the 101 toward the San Fernando Valley, can take you from coastal air into a hotter, drier afternoon with the air conditioner running hard.`,
      },
      {
        p: `That swing is part of why dryness in Camarillo can feel unpredictable. The fix is less about the weather report and more about where your face spends the day: in front of a car vent, a desk fan, or a screen you stare at without blinking. [Dry air, wind and altitude](/guides/dry-air-wind-and-altitude) explains how each of those speeds tear loss.`,
      },
      { h: 'Fields, dust and the Oxnard Plain' },
      {
        p: `Camarillo sits at the eastern edge of the Oxnard Plain, one of the most heavily farmed stretches of the California coast. Plowing, harvest and the trucks moving between fields stir up fine soil, and an afternoon sea breeze or an offshore gust carries it into neighborhoods. Farmworkers, landscapers, pilots at the airport and anyone working outdoors on the plain spend hours in that mix.`,
      },
      {
        p: `Grit and dry air together make eyes feel scratchy. Rubbing them only grinds particles across the surface, so wash your hands and use a clean tissue instead. Protective glasses on the job do more than any drop for keeping debris out. If something seems stuck in your eye, or the scratchy feeling doesn’t ease, see an eye doctor rather than waiting it out.`,
      },
      { h: 'Daily life that wears on Camarillo eyes' },
      {
        list: [
          `Long freeway commutes toward Los Angeles, with the vents blowing and the sun low in your windshield.`,
          `Students at CSU Channel Islands reading on laptops late into the evening.`,
          `Weekend walks at the outlet center or on trails in the Santa Monica Mountains when the wind is up.`,
          `Shifts on the flight lines and shoreline at Naval Base Ventura County’s Point Mugu, open to every ocean breeze.`,
          `Golf, tennis and youth sports in bright sun, where squinting replaces full blinks.`,
        ],
      },
      {
        p: `Screen time deserves its own mention. People blink less when they concentrate on a screen, and each partial blink leaves more of the eye’s surface exposed to dry air. Every so often, look away at something across the room and blink slowly a few times.`,
      },
      { h: 'Using a lubricating drop in a dry climate' },
      {
        p: `Quell’s Drug Facts label lists its Uses as: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, which matters most where the air is busy pulling water away. The label’s directions are simple: {directions}. Because the bottle holds several doses, the handling line applies every time you open it: {tip}.`,
      },
      {
        p: `A dry climate doesn’t change the directions. If one drop three times a day doesn’t feel like enough during a windy stretch, that’s worth raising with your eye doctor instead of adding more. Store the bottle as the label says, {storage}. A car parked in a sunny Camarillo lot in September can get far hotter than that, so keep the bottle in a bag you carry inside.`,
      },
      { h: 'Ordering Quell to Camarillo' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Ventura County addresses for {shipping} per order, and shipping is free at {freeBottles} or more bottles. No delivery date is promised, so order before your current bottle runs low. You can check out as a guest. The [Camarillo page](/eye-drops/camarillo-ca) covers local delivery details, and the [California page](/eye-drops/state/california) lists other cities in the state.`,
      },
      { h: 'When to see an eye doctor in Ventura County' },
      {
        p: `A drop can ease dryness, but figuring out what’s behind persistent symptoms belongs to an optometrist or ophthalmologist who can examine your eyes. Make an appointment if dryness keeps coming back after the wind season ends, or if it affects your vision. The label is specific about when to stop: {stopUse}. Before your visit, the [dry eye self-check](/self-check) can help you put your symptoms into words.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Camarillo?',
        a: `Camarillo gets about 12 inches of rain a year by NOAA’s normals, with almost none from May through September, and Santa Ana winds bring very dry air in fall and winter. Wind, dust and screen time all add to tear evaporation.`,
      },
      {
        q: 'When do Santa Ana winds happen in Camarillo?',
        a: `Research shared through the National Weather Service finds coastal Southern California’s offshore wind events most common from October through March. They can arrive outside that window too, so watch local forecasts.`,
      },
      {
        q: 'How much rain does Camarillo get a year?',
        a: `NOAA’s 1991 to 2020 normals for Camarillo Airport list 12.01 inches a year. January and February are the wettest months, and the August normal is zero.`,
      },
      {
        q: 'Can I get Quell delivered in Camarillo?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Camarillo for {shipping}, or free with {freeBottles} or more bottles. Checkout doesn’t require an account, and no arrival date is promised.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-12 for dry-eye-relief-in-chaska:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00094963.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00094963.csv
   *   (MPLS FLYING CLOUD AP, Eden Prairie, elev 276.5 m: Jan high 24.4 / low 7.7 F;
   *   Jul high 83.7 F; 23.4 nights at or below 0 F; 145.2 nights at or below 32 F;
   *   71.6 days with a high at or below 32 F; 7,430 heating degree days; annual precip
   *   30.64 in; Dec 0.90, Jan 0.69, Feb 0.62 in; Jun 4.67, Aug 4.66 in; 13.7 days at
   *   or above 90 F)
   * Deliberately not the MSP airport station used by dry-eyes-in-minneapolis.
   * Dropped: snowfall (Flying Cloud file has no snow normal), humidity (NOAA's table
   * only has MSP).
   */
  {
    slug: 'dry-eye-relief-in-chaska',
    title: 'Dry eye relief in Chaska, Minnesota',
    description:
      'Subzero nights, months of furnace heat and wind across the Minnesota River valley: what Chaska winters do to dry eyes, and habits that bring relief.',
    category: 'local',
    addedOn: '2026-11-12',
    body: [
      {
        p: `For dry eye relief in Chaska, focus on winter. NOAA’s normals for nearby Flying Cloud Airport count about 23 nights a year at zero or colder and more than 7,400 heating degree days, so furnaces run for months and indoor air turns dry. Humidify your bedroom, keep heat vents off your face, shield your eyes from wind in the river valley, and use a lubricating drop as labeled. An eye doctor should look at dryness that won’t settle.`,
      },
      { h: 'The nearest weather record to Chaska' },
      {
        p: `Chaska doesn’t have its own first-order weather station, but Flying Cloud Airport in Eden Prairie sits a few miles east, just across the Minnesota River bottoms, and NOAA keeps 1991 to 2020 climate normals for it. The National Weather Service office that forecasts for the Twin Cities is next door in Chanhassen, so Carver County’s weather is watched closely. Here’s what the Flying Cloud record shows:`,
      },
      {
        list: [
          `A January normal high of 24.4°F and a normal low of 7.7°F.`,
          `About 145 nights a year at or below freezing, and about 23 at zero or below.`,
          `Roughly 72 days a year when the temperature never gets above freezing.`,
          `7,430 heating degree days a year, NOAA’s measure of how much heating a climate demands.`,
          `Winter is the driest part of the year: December, January and February together average about 2.2 inches of precipitation.`,
          `Summer is the wettest, with June and August each near 4.7 inches, and about 14 days a year reach 90°F.`,
        ],
      },
      { h: 'Why a Chaska winter dries eyes indoors' },
      {
        p: `Very cold air can’t hold much water. When a furnace pulls in that air and warms it to 70°F, the moisture it carries stays the same while its capacity grows, so the relative humidity inside drops sharply. Living rooms, offices, classrooms and ice arenas all run on that air from November into April.`,
      },
      {
        p: `Tears evaporate faster into dry air. Add a forced-air register blowing near your chair, a ceiling fan left on from summer, or a long evening on a tablet, and the surface of your eyes loses moisture faster than blinking can spread it back. Many people notice it most first thing in the morning, after hours of sleeping in a dry bedroom.`,
      },
      {
        list: [
          `Run a cool-mist humidifier in the bedroom and clean it as its maker directs.`,
          `Close or redirect a floor register that blows toward the couch or bed.`,
          `Turn off ceiling fans for the season.`,
          `Lower the thermostat a little at night; cooler indoor air dries less.`,
          `Take screen breaks and blink fully, especially during long evenings when it’s dark by five.`,
        ],
      },
      { h: 'Wind in the Minnesota River valley' },
      {
        p: `Chaska grew up on the Minnesota River, and the valley shapes how winter feels outside. Open floodplain, frozen marshes and the wide river bottom between Chaska and Shakopee give wind long, flat runs. Waiting for a school bus, scraping a windshield in a driveway on the bluff, or walking a dog along the river trails puts your face into that wind at temperatures where it stings.`,
      },
      {
        p: `Cold wind makes eyes water, which seems like the opposite of dryness. The reflex tears are mostly water and wash away quickly, and once you’re back inside the eyes often feel drier than before. Wraparound sunglasses or ski goggles block the wind, and a scarf or neck gaiter pulled up keeps you from squinting into it. [Dry eyes from cold air](/guides/dry-eyes-from-cold-air) covers the reflex in more detail.`,
      },
      { h: 'Golf, curling and the outdoor seasons' },
      {
        p: `Chaska is home to Hazeltine National Golf Club, which has hosted major championships and the Ryder Cup, and golf is part of summer for a lot of residents. Hours on an open course in sun and breeze mean squinting, fewer full blinks and dry air moving across your eyes. Sunglasses help there too, and so does stepping into shade between holes.`,
      },
      {
        p: `In winter, the Chaska Curling Center and the city’s indoor ice rinks keep people active, where cold rink air and heated lobbies alternate. Hockey parents sitting in an arena for back-to-back games know the gritty feeling that builds by the third period. Taking a break in the lobby and looking at something far away gives your eyes a reset.`,
      },
      { h: 'Highway 212 and the commute' },
      {
        p: `Many Chaska residents drive Highway 212 into Eden Prairie, Edina or Minneapolis. In January, that’s a half hour or more with the heater on high and the defroster blowing upward across the windshield, which sends dry air toward your eyes. Aim the vents at your feet and chest once the glass is clear, and use recirculation sparingly so the windows don’t fog. Never try to put in an eye drop while driving; do it before you leave or after you park.`,
      },
      { h: 'Where Quell fits for Chaska households' },
      {
        p: `According to its label, Quell’s Uses are {uses}. The formula is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the problem dry furnace air creates. Follow the label: {directions}. Don’t let the tip touch your eye, fingers or anything else, because {tip}.`,
      },
      {
        p: `Minnesota cold is the bigger storage risk. The label’s range is {storage}, and a bottle left in a car all night in a Chaska driveway in January will drop well below that. Keep it in a coat pocket close to your body when you’re out, and inside the house otherwise. If a bottle has frozen or looks different from when it arrived, check the label’s rule: {doNotUse}.`,
      },
      { h: 'Getting Quell delivered in Carver County' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Minnesota addresses for {shipping}, or free when you buy {freeBottles} or more bottles. In deep winter, bring the box inside soon after it arrives rather than leaving it on a cold step. See the [Chaska page](/eye-drops/chaska-mn) for delivery details, or the [Minnesota page](/eye-drops/state/minnesota) for nearby cities.`,
      },
      { h: 'When dryness needs an eye exam' },
      {
        p: `Seasonal dryness that fades with spring is common in Minnesota. Dryness that lingers into summer, comes with blurry vision, or keeps getting worse needs an eye doctor, who can work out what’s behind it. The label lists when to stop using Quell: {stopUse}.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Chaska in the winter?',
        a: `Furnaces run for months in Chaska, and heating very cold outdoor air leaves indoor air with little moisture. NOAA’s normals for nearby Flying Cloud Airport show more than 7,400 heating degree days a year.`,
      },
      {
        q: 'How cold does it get in Chaska, Minnesota?',
        a: `NOAA’s 1991 to 2020 normals for Flying Cloud Airport, a few miles east of Chaska, list a January normal low of 7.7°F and about 23 nights a year at zero or below.`,
      },
      {
        q: 'Can eye drops freeze in a car in Chaska?',
        a: `Yes, they can drop well below the label’s storage range of {storage} on a winter night. Bring the bottle inside, and don’t use it if it changes color.`,
      },
      {
        q: 'Does Quell ship to Chaska, MN?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Chaska for {shipping} per order, and orders of {freeBottles} or more bottles ship free. No delivery date is promised.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-12 for dry-eye-relief-in-newnan:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USC00096335.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USC00096335.csv
   *   (NEWNAN 7 WNW, GA, elev 242.3 m: annual precip 52.52 in; Mar 5.37, Oct 3.00 in;
   *   Jan high 54.4 / low 30.8 F; Jul high 89.7 / low 68.2 F; 42.0 days at or above
   *   90 F; 60.5 nights at or below 32 F; snow 1.7 in; 2,965 heating degree days;
   *   1,681 cooling degree days)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (ATLANTA, GA 1945-2018: April afternoon RH 49, Aug morning 87, annual
   *   morning 81 / afternoon 55)
   */
  {
    slug: 'dry-eye-relief-in-newnan',
    title: 'Dry eye relief in Newnan, Georgia',
    description:
      'Humid summers, heated winters and a yellow spring: how Newnan’s seasons affect dry, irritated eyes, with NOAA numbers and habits that bring relief.',
    category: 'local',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Dry eye relief in Newnan depends on the season. Summers are hot and humid, but air conditioning dries indoor air for months, and NOAA’s normals near Newnan still show more heating than cooling demand, so winter furnaces matter too. Spring adds a coat of pollen and dust. Keep vents off your face, take screen breaks, wash pollen off your hands and lids, and use a lubricating drop as labeled. Lasting symptoms are for an eye doctor.`,
      },
      { h: 'Newnan’s climate by NOAA’s numbers' },
      {
        p: `NOAA’s 1991 to 2020 normals include a cooperative weather station called Newnan 7 WNW, west of the city toward the Chattahoochee River. Its record gives Coweta County a clear seasonal picture:`,
      },
      {
        list: [
          `About 52.5 inches of precipitation a year, spread through every month. March is wettest at 5.37 inches and October driest at 3.00.`,
          `A July normal high of 89.7°F and a normal low of 68.2°F, with about 42 days a year reaching 90°F.`,
          `A January normal high of 54.4°F and a normal low of 30.8°F, and about 60 freezing nights a year.`,
          `Snow is rare: the yearly normal is 1.7 inches.`,
          `2,965 heating degree days and 1,681 cooling degree days, so by NOAA’s yardstick Newnan homes still need more heating than cooling over a year.`,
        ],
      },
      {
        p: `NOAA’s humidity tables don’t include Newnan, but they do include Atlanta’s airport, about 40 miles northeast. There, relative humidity averages 81 percent in the morning and 55 percent in the afternoon across the year. April afternoons are the driest, at 49 percent, while August mornings reach 87 percent.`,
      },
      { h: 'Why humid summers can still mean dry eyes' },
      {
        p: `A muggy July afternoon on the courthouse square isn’t hard on the tear film. The trouble is that few people spend July afternoons outside. They move from an air-conditioned house to an air-conditioned car to an air-conditioned office or store, and cooling equipment pulls moisture out of the air as it chills it. Add a vent blowing across your desk and hours of reading a screen, and eyes can feel gritty by midafternoon even though the weather outside is sticky.`,
      },
      {
        list: [
          `Angle car vents down toward your chest, not up at your face.`,
          `Move a desk fan so it blows past you rather than at you.`,
          `Set the thermostat a few degrees warmer; very cold indoor air tends to be drier.`,
          `Go outside for a few minutes at lunch and look at something far away.`,
        ],
      },
      { h: 'Heated air in a Georgia winter' },
      {
        p: `Newnan winters are mild compared with the North, but January nights near freezing mean heat pumps and furnaces run most evenings and mornings from late fall into early spring. Heat pumps in particular move warm air steadily through vents near the floor and ceiling, which keeps a gentle draft passing over the face. Sleeping with a register aimed at the bed is a common reason people wake up with dry, scratchy eyes in December. Closing that register partway or running a humidifier in the bedroom helps. [Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) goes into the indoor side.`,
      },
      { h: 'Spring pollen and irritated eyes' },
      {
        p: `Anyone who has parked under a pine in Coweta County in March knows the yellow film that covers cars, porches and patio furniture. Spring in west Georgia brings heavy tree pollen, and dry, breezy days lift it along with dust. Particles landing on the eye’s surface add to the feeling of dryness and irritation.`,
      },
      {
        list: [
          `Wash your hands and face after yard work or a game at the park before you touch your eyes.`,
          `Rinse off and change clothes after mowing or blowing leaves.`,
          `Keep car windows up on dusty spring days and change the cabin air filter on schedule.`,
          `Wear sunglasses outdoors to block some of what’s blowing around.`,
        ],
      },
      {
        p: `If itching, sneezing and a runny nose come with your eye symptoms, ask a doctor or pharmacist what’s going on. Quell’s label doesn’t claim relief for anything beyond its stated Uses, and spring symptoms with several causes deserve a proper look.`,
      },
      { h: 'Commutes, campuses and the airport' },
      {
        p: `Newnan is the Coweta County seat and a commuter city. Many residents drive I-85 north toward Atlanta, and plenty work at Hartsfield-Jackson, where long hours in terminals or on the ramp mean conditioned air indoors and jet wash and wind outside. A 45-minute drive each way with the air on high can do as much to your eyes as a full day at a desk. Doing the drop before you leave or after you park, never while driving, keeps it simple.`,
      },
      { h: 'How Quell is meant to help' },
      {
        p: `The Uses on Quell’s Drug Facts panel read: {uses}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which suits eyes that dry out in conditioned air. Use it the way the label says, {directions}, and keep the tip clean: {tip}.`,
      },
      {
        p: `Georgia summers create a storage problem. The label range is {storage}, and a car parked at a Newnan shopping center in July gets much hotter inside than 86°F. Keep the bottle in your bag or desk, not the glove box. The label also says {appearance}`,
      },
      { h: 'Ordering Quell to Newnan' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Georgia addresses for {shipping}, and orders of {freeBottles} or more bottles ship free. No delivery date is promised. Checkout works as a guest, and unopened bottles can be refunded within {returnDays} days of delivery. The [Newnan page](/eye-drops/newnan-ga) and the [Georgia page](/eye-drops/state/georgia) have more on local delivery.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Eye drops ease dryness; they don’t tell you why it’s happening. Figuring that out takes an eye exam with an optometrist or ophthalmologist. Book one if dryness lasts across seasons, keeps getting worse, or affects how you see. And follow the label’s limit: {stopUse}.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes dry in Newnan when it’s so humid?',
        a: `Most summer hours are spent in air-conditioned homes, cars and offices, and cooling dries the air indoors. Vents blowing on your face and long screen sessions add to it, whatever the humidity outside.`,
      },
      {
        q: 'How hot does Newnan, Georgia get in summer?',
        a: `NOAA’s 1991 to 2020 normals for the Newnan 7 WNW station list a July normal high of 89.7°F, with about 42 days a year at 90°F or warmer.`,
      },
      {
        q: 'Can pollen make your eyes feel dry?',
        a: `Pollen and dust landing on the eye can add to dryness and irritation, especially on breezy spring days. If itching and sneezing are the main problem, ask a doctor or pharmacist.`,
      },
      {
        q: 'Does Quell ship to Newnan, GA?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Newnan for {shipping} per order, or free with {freeBottles} or more bottles. No arrival date is promised.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-12 for dry-eye-relief-in-lynchburg:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00013733.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00013733.csv
   *   (LYNCHBURG RGNL AP, elev 286.5 m: annual precip 42.76 in; snow 11.6 in, Jan 3.5,
   *   Feb 3.6 in; Jan high 46.0 / low 25.8 F; Jul high 86.9 F; 94.5 nights at or below
   *   32 F; 27.4 days at or above 90 F; 4,295 heating degree days; 1,115 cooling
   *   degree days)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (LYNCHBURG, VA 1948-2018: afternoon RH Mar 48, Apr 45, Jan 53; morning RH
   *   Aug and Sep 87; annual morning 79, afternoon 52)
   */
  {
    slug: 'dry-eye-relief-in-lynchburg',
    title: 'Dry eye relief in Lynchburg, Virginia',
    description:
      'Dry April afternoons, heated winters and hills by the James River: what NOAA’s Lynchburg records show about dry eyes, and everyday ways to find relief.',
    category: 'local',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Dry eye relief in Lynchburg means watching two seasons. NOAA’s humidity records for Lynchburg put the driest afternoons in early spring, with April averaging 45 percent, and about 95 freezing nights a year keep furnaces running through winter. Shield your eyes from spring wind, keep heat off your face indoors, blink fully during screen work and use a lubricating drop as labeled. Ongoing dryness belongs with an eye doctor.`,
      },
      { h: 'Lynchburg’s climate in NOAA’s records' },
      {
        p: `Lynchburg Regional Airport, south of the city at about 940 feet above sea level, has a long weather record. NOAA’s 1991 to 2020 normals for the station show:`,
      },
      {
        list: [
          `About 42.8 inches of precipitation a year, fairly evenly spread, with July the wettest month at 4.19 inches.`,
          `11.6 inches of snow in a normal year, most of it in January and February.`,
          `A January normal high of 46.0°F and low of 25.8°F, with about 95 nights a year at or below freezing.`,
          `A July normal high of 86.9°F, and about 27 days a year at 90°F or warmer.`,
          `4,295 heating degree days against 1,115 cooling degree days, so heating is the bigger job for Lynchburg homes.`,
        ],
      },
      {
        p: `NOAA’s Comparative Climatic Data tables add humidity, and Lynchburg is one of the cities listed. Across the year, relative humidity averages 79 percent in the morning and 52 percent in the afternoon. The afternoon figure bottoms out in spring: 48 percent in March and 45 percent in April. Late summer mornings are the most humid, at 87 percent in August and September.`,
      },
      { h: 'Why spring is the dry season for Lynchburg eyes' },
      {
        p: `Many people assume winter is the hard stretch, and indoors it is. Outdoors, though, the lowest afternoon humidity on Lynchburg’s record falls in March and April, when trees haven’t fully leafed out, the sun is strengthening and breezy fronts sweep over the Blue Ridge. Dry, moving air speeds evaporation from the tear film, and spring yard work, ballgames and trail runs put people outside in it for hours.`,
      },
      {
        list: [
          `Wear sunglasses on breezy days, even when it isn’t bright.`,
          `Wash your hands before touching your eyes after gardening or mowing.`,
          `Keep car windows up on windy spring drives along Route 29 or 460.`,
          `Plan long outdoor work for the more humid morning hours when you can.`,
        ],
      },
      { h: 'Furnace season in the Hill City' },
      {
        p: `From November to March, Lynchburg runs on heated air. Older homes in neighborhoods like Rivermont and Diamond Hill often have radiators or floor registers, while newer houses and campus buildings use forced air or heat pumps. Each one warms cold outdoor air without adding water, so the relative humidity indoors drops. Sleeping beside a register or working under a ceiling vent can leave eyes dry and tired.`,
      },
      {
        p: `Simple changes help: a humidifier in the bedroom, cleaned regularly; a ceiling fan switched off; a thermostat set a little cooler at night; and vents turned away from the bed and the couch. [Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) has more on choosing and placing one.`,
      },
      { h: 'Campus life and screen-heavy days' },
      {
        p: `Lynchburg is a college town several times over, home to Liberty University, the University of Lynchburg, Randolph College and Central Virginia Community College. That means a lot of people spending evenings reading on laptops in heated dorms and libraries. Concentrating on a screen cuts down on blinking, and each incomplete blink leaves more of the eye exposed to dry indoor air.`,
      },
      {
        p: `A few habits make a long study night easier: put the screen a little below eye level, look across the room every 20 minutes or so, and blink slowly and fully a few times when your eyes start to feel heavy. Students under 18 should know that quelldrop.com sells only to adults, and the label doesn’t give directions for children.`,
      },
      { h: 'Along the James River and up in the Blue Ridge' },
      {
        p: `The James River runs along downtown, and the riverfront trails, Percival’s Island and the Blackwater Creek trail are where many residents walk, run and bike. Moving along a trail into a breeze dries eyes faster than standing still. West of town, the Blue Ridge and the Peaks of Otter draw hikers to higher, windier ground. Wraparound sunglasses and a brimmed hat help on both.`,
      },
      { h: 'How Quell can help' },
      {
        p: `On its Drug Facts panel, Quell’s Uses are {uses}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which suits both dry spring afternoons and heated winter rooms. The label’s directions: {directions}. Because the bottle is used again and again, keep its tip clean: {tip}.`,
      },
      {
        p: `Keep the bottle where the temperature stays inside the label’s range, {storage}. A January night in a car parked on a Lynchburg street can fall below freezing, and a July afternoon in a parking lot will run far above it. A desk drawer or a bag that comes inside with you is the simple answer.`,
      },
      { h: 'Ordering Quell to Lynchburg' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Virginia for {shipping} per order, or free at {freeBottles} or more bottles. No arrival date is promised. You don’t need an account to order, and unopened bottles can be refunded within {returnDays} days of delivery without sending them back. The [Lynchburg page](/eye-drops/lynchburg-va) and the [Virginia page](/eye-drops/state/virginia) cover delivery in the area.`,
      },
      { h: 'Knowing when to see someone' },
      {
        p: `Lubricating drops are for everyday dryness. Working out why your eyes stay dry, or why they suddenly feel different, takes an eye doctor who can examine them. Make an appointment if dryness lasts beyond a season or affects your sight. The label says exactly when to stop: {stopUse}.`,
      },
    ],
    faq: [
      {
        q: 'What is the driest month in Lynchburg, Virginia?',
        a: `By NOAA’s humidity records for Lynchburg, April has the driest afternoons, averaging 45 percent relative humidity, followed by March at 48 percent.`,
      },
      {
        q: 'Why do my eyes feel dry in Lynchburg in winter?',
        a: `Lynchburg averages about 95 freezing nights a year by NOAA’s normals, so heating runs for months. Heated air holds little moisture, and tears evaporate faster into it.`,
      },
      {
        q: 'How much snow does Lynchburg get?',
        a: `NOAA’s 1991 to 2020 normals for Lynchburg Regional Airport list 11.6 inches a year, most of it in January and February.`,
      },
      {
        q: 'Can I order Quell to Lynchburg, VA?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to Lynchburg for {shipping}, and orders of {freeBottles} or more bottles ship free. No delivery date is promised.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-12 for dry-eye-relief-in-niagara-falls:
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00004724.csv
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00004724.csv
   *   (NIAGARA FALLS INTL AP, elev 178.3 m: Jan high 31.5 / low 16.8 F; Jul high
   *   80.7 F; 131.5 nights at or below 32 F; 47.1 days with a high at or below 32 F;
   *   5.2 nights at or below 0 F; 6,792 heating degree days; annual precip 32.97 in;
   *   80.1 days with 0.10 in or more)
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014733.csv
   *   (BUFFALO, NY: annual snow 95.4 in; Dec 25.3, Jan 26.7 in)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (BUFFALO, NY 1946-2018: Jan afternoon RH 72, Dec 71; May and Jul afternoon 55)
   * Niagara Falls station file has no snow normal, so Buffalo's is used and named.
   */
  {
    slug: 'dry-eye-relief-in-niagara-falls',
    title: 'Dry eye relief in Niagara Falls, New York',
    description:
      'Lake-effect winters, wind off the river and long furnace months: how Niagara Falls weather affects dry eyes, with NOAA numbers and ways to find relief.',
    category: 'local',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Dry eye relief in Niagara Falls is mostly about the indoor half of the year. NOAA’s normals for Niagara Falls International Airport list about 132 freezing nights and nearly 6,800 heating degree days, so homes run on heated air for months, while wind off the river and Lake Ontario stings outdoors. Humidify at home, keep vents off your face, wear wraparound glasses outside and use a lubricating drop as labeled. See an eye doctor for dryness that persists.`,
      },
      { h: 'Niagara Falls weather by NOAA’s numbers' },
      {
        p: `NOAA keeps 1991 to 2020 climate normals for Niagara Falls International Airport, east of the city, at about 585 feet above sea level. The figures describe a long, steady winter:`,
      },
      {
        list: [
          `A January normal high of 31.5°F and a normal low of 16.8°F.`,
          `About 132 nights a year at or below freezing, and around 47 days when the high stays at or below 32°F.`,
          `About five nights a year at zero or colder.`,
          `6,792 heating degree days a year, a measure of how much heating the climate calls for.`,
          `About 33 inches of precipitation a year, with roughly 80 days bringing a tenth of an inch or more.`,
          `A July normal high of 80.7°F, so summers are comfortable rather than hot.`,
        ],
      },
      {
        p: `The airport’s file doesn’t carry a snowfall normal, but Buffalo’s airport, about 20 miles south, does: 95.4 inches a year, with about 25 inches in December and 27 in January. Lake-effect bands off Lake Erie make totals vary a lot across short distances, so Niagara Falls often sees less than Buffalo’s southern suburbs, yet winter here is long and gray either way.`,
      },
      { h: 'Humid outside, dry inside' },
      {
        p: `NOAA’s humidity table for Buffalo shows something that surprises people: winter afternoons are the most humid of the year outdoors, about 72 percent relative humidity in January, while late spring and summer afternoons drop to about 55 percent. So why do eyes feel driest in winter?`,
      },
      {
        p: `Because relative humidity depends on temperature. Air at 20°F with a high relative humidity still holds very little actual water. When a furnace warms that air to 70°F, the same small amount of moisture is spread across air that could hold far more, and the indoor humidity falls sharply. Every house, school, casino floor and hospital in the city breathes that heated air from late fall into spring.`,
      },
      {
        list: [
          `Run a humidifier in the bedroom and clean it on its maker’s schedule.`,
          `Redirect floor and ceiling registers away from beds, couches and desks.`,
          `Keep the thermostat moderate; hotter rooms are usually drier rooms.`,
          `Give your eyes screen breaks, since concentrating reduces blinking.`,
        ],
      },
      { h: 'Mist, wind and the river gorge' },
      {
        p: `Living next to the falls has its own weather. Spray rises off the Horseshoe and American Falls in a cloud you can see from miles away, and on a windy day it drifts across Niagara Falls State Park and the streets beside it. Mist on your face feels refreshing, but it isn’t the same thing as a healthy tear film, and the wind carrying it still dries the eye’s surface.`,
      },
      {
        p: `In winter, that spray freezes onto railings, trees and walkways, and the wind running down the river gorge can be bitter. Watching the ice formations at the overlooks, or walking across the Goat Island bridges in January, puts your eyes in moving air well below freezing. Cold wind triggers watery eyes, and once you step back inside into heated air they can feel drier than before. Wraparound sunglasses or goggles and a scarf pulled up high take most of the sting out. [Dry eyes from cold air](/guides/dry-eyes-from-cold-air) explains the watering reflex.`,
      },
      { h: 'Work and daily life near the falls' },
      {
        list: [
          `Tourism and hospitality jobs, often split between outdoor overlooks and heated, air-handled hotels and casinos.`,
          `Long winter drives on I-190 or along the river with the defroster blowing upward.`,
          `Shifts at the Niagara Falls Air Reserve Station, beside the airport, in wind off the open ground.`,
          `Students and staff at Niagara University and the community college spending evenings on laptops.`,
        ],
      },
      {
        p: `For car trips, point the vents at your chest once the windshield clears and avoid putting drops in until you’ve parked.`,
      },
      { h: 'Using Quell through a western New York winter' },
      {
        p: `Quell’s label gives its Uses as {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the problem heated winter air creates. Follow the label’s directions, {directions}, and protect the tip: {tip}.`,
      },
      {
        p: `Cold is the main storage risk here. The label says {storage}, and a bottle left in a car through a January night near the river will fall far below that. Carry it in an inside pocket or keep it indoors. If the solution looks different from how it arrived, the label is clear: {doNotUse}.`,
      },
      { h: 'Ordering Quell to Niagara Falls' },
      {
        p: `Quell ships from Brentwood, Tennessee, to New York addresses for {shipping}, or free with {freeBottles} or more bottles. Orders go only to addresses in the United States, so a bottle can’t be sent across the Rainbow Bridge to Niagara Falls, Ontario; order to a US address on this side. No delivery date is promised. See the [Niagara Falls page](/eye-drops/niagara-falls-ny) or the [New York page](/eye-drops/state/new-york) for more.`,
      },
      { h: 'When to have your eyes checked' },
      {
        p: `If your eyes stay dry after the heat goes off in spring, or dryness comes with pain or changes in your vision, an eye doctor is the right person to work out what’s going on. The label gives the line to watch for: {stopUse}.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Niagara Falls in winter?',
        a: `Heating runs for months; NOAA’s normals for Niagara Falls International Airport show nearly 6,800 heating degree days a year. Warming cold outdoor air leaves indoor air dry, and tears evaporate faster.`,
      },
      {
        q: 'Does the mist from Niagara Falls help dry eyes?',
        a: `Not really. Spray on your face isn’t the same as a healthy tear film, and the wind that carries it still dries the eye’s surface. Sunglasses help more near the overlooks.`,
      },
      {
        q: 'How much snow does the Niagara Falls area get?',
        a: `Buffalo’s airport, about 20 miles south, averages 95.4 inches a year by NOAA’s 1991 to 2020 normals. Lake-effect snow varies widely, so totals in Niagara Falls are often lower.`,
      },
      {
        q: 'Can Quell be shipped to Niagara Falls, Ontario?',
        a: `No. Quell ships only to addresses in the United States, so orders can go to Niagara Falls, New York, but not across the border to Canada.`,
      },
    ],
  },

  /*
   * Checked 2026-11-12: USDA "What Can SNAP Buy?"
   * https://www.fns.usda.gov/snap/eligible-food-items ("Households CANNOT use SNAP
   * benefits to buy: ... Vitamins, medicines, and supplements ... Any nonfood items
   * such as ... Hygiene items and cosmetics"). Payment method on this site from
   * the existing how-payment-works guide (card, on the processor's page).
   */
  {
    slug: 'can-you-buy-eye-drops-with-ebt',
    title: 'Can you buy eye drops with EBT?',
    description:
      'No. USDA rules bar SNAP benefits on EBT from paying for medicines, eye drops included. What the rule says, and the tax-advantaged route that does work.',
    category: 'ordering',
    addedOn: '2026-11-12',
    body: [
      {
        p: `No. SNAP food benefits on an EBT card can’t be used for eye drops. USDA’s “What Can SNAP Buy?” page lists vitamins, medicines and supplements among the things households cannot buy with SNAP, along with nonfood items such as hygiene products. Lubricating eye drops are an over-the-counter medicine, so they fall outside the program wherever you shop. An HSA or FSA, if you have one, can pay for them.`,
      },
      { h: 'What USDA’s rule actually says' },
      {
        p: `SNAP, the Supplemental Nutrition Assistance Program, is the federal food benefit that most states deliver on an EBT card. USDA’s page on eligible items says SNAP can buy food for the household: fruits and vegetables, meat, dairy, bread and cereal, snack foods, nonalcoholic drinks, and seeds and plants that produce food. The same page then lists what households cannot buy with SNAP:`,
      },
      {
        list: [
          `Beer, wine, liquor, cigarettes and tobacco.`,
          `Vitamins, medicines and supplements.`,
          `Live animals, with a few exceptions such as shellfish.`,
          `Foods that are hot at the point of sale.`,
          `Nonfood items, including pet food, cleaning supplies, paper products, household supplies, hygiene items and cosmetics.`,
        ],
      },
      {
        p: `Eye drops carry a Drug Facts panel, which marks them as an over-the-counter drug. That puts them squarely in the medicines line. It doesn’t matter whether you buy them at a grocery store, a pharmacy counter or online; the restriction follows the benefit, not the store.`,
      },
      { h: 'Why the register might not catch it' },
      {
        p: `In a store, EBT purchases are split at the register: eligible food goes on the SNAP balance and everything else needs another form of payment. Store systems sort items by their product codes, so eye drops should land on the “other payment” side automatically. If a cashier ever rings up a medicine on SNAP by mistake, it’s still not an allowed purchase under USDA’s rules, and it’s the store’s and the cardholder’s problem to sort out. Separating food and nonfood items into two piles before you check out makes the split smoother.`,
      },
      { h: 'Other benefits on the same card' },
      {
        p: `Some states put more than one program on a single EBT card, such as cash assistance alongside SNAP. Each program has its own rules about what it can pay for, and those rules are set by the program and your state agency, not by the card. If you think another benefit on your card might cover medicine, ask your state’s benefits office directly before you try it. This page can only speak to SNAP, which can’t.`,
      },
      { h: 'Can you use EBT on quelldrop.com?' },
      {
        p: `No. Quell’s checkout takes payment by card on the payment processor’s secure page, and it isn’t set up to accept SNAP or any EBT benefit. Even if it were, SNAP couldn’t pay for an eye drop. [How payment works](/guides/how-payment-works) explains the card step in detail. Shipping is {shipping} per order, or free when you buy {freeBottles} or more bottles, and there are no promo codes, so the price at checkout is the price everyone pays.`,
      },
      { h: 'HSA and FSA: the tax-advantaged route' },
      {
        p: `If you or someone in your household has a health savings account or a flexible spending account, that’s where eye drops do fit. Federal law has let these accounts pay for over-the-counter medicines without a prescription since 2020, and a lubricating eye drop is an OTC medicine. [Why OTC eye drops count for HSA and FSA](/guides/why-otc-eye-drops-count-for-hsa-and-fsa) walks through the rule and where it comes from.`,
      },
      {
        list: [
          `Pay with your HSA or FSA debit card if your plan’s card works with the payment page, or pay another way and keep the receipt.`,
          `Submit the receipt to your plan for reimbursement if you paid out of pocket and your plan allows it.`,
          `Check whether your plan reimburses shipping; many plans look only at the product line.`,
          `Use FSA money before your plan’s deadline, since unused balances may be lost.`,
        ],
      },
      {
        p: `HSAs and FSAs are tied to health insurance and employment, so not everyone has one. They’re worth checking for, though: some people have a small FSA balance from an employer and never notice it.`,
      },
      { h: 'Keeping the cost of eye drops manageable' },
      {
        p: `If the budget is tight, a few practical steps help more than hunting for a payment workaround:`,
      },
      {
        list: [
          `Use the drop as labeled and not more often. Quell’s label says: {directions}. Extra drops don’t add anything and empty the bottle sooner.`,
          `Keep the bottle clean so you don’t have to replace it early. The label is specific: {tip}.`,
          `Store it within the label’s range, {storage}, so heat or cold doesn’t ruin a bottle.`,
          `Combine orders with someone in the household to reach the free-shipping quantity, if you both use drops.`,
          `Ask a pharmacist which lubricating drops in their store fit your budget; they can compare labels with you.`,
        ],
      },
      {
        p: `The [dry eye self-check](/self-check) is free and can help you decide whether a lubricating drop is the right thing to buy at all, or whether an eye exam should come first.`,
      },
      { h: 'If cost is keeping you from an eye exam' },
      {
        p: `Dryness that keeps returning, gets worse or affects your vision needs an eye doctor, whatever the budget. Many communities have health centers that charge based on income, and some optometry schools run clinics. Quell’s label also sets a clear line for when to stop and get checked: {stopUse}.`,
      },
    ],
    faq: [
      {
        q: 'Can you buy eye drops with food stamps?',
        a: `No. USDA’s rules say SNAP benefits can’t be used for vitamins, medicines or supplements, and over-the-counter eye drops are a medicine. That applies in every store and online.`,
      },
      {
        q: 'Can I use SNAP for over-the-counter medicine?',
        a: `No. USDA’s “What Can SNAP Buy?” page lists medicines among the items households cannot buy with SNAP benefits, along with nonfood items like hygiene products.`,
      },
      {
        q: 'Can I pay for Quell with an EBT card?',
        a: `No. Checkout takes payment by card on the processor’s secure page and doesn’t accept EBT benefits, and SNAP couldn’t pay for an eye drop under USDA’s rules anyway.`,
      },
      {
        q: 'What can I use instead of EBT to pay for eye drops?',
        a: `A health savings account or flexible spending account can pay for over-the-counter eye drops. Otherwise, a regular debit or credit card works at checkout.`,
      },
    ],
  },

  {
    slug: 'ordering-eye-drops-for-someone-in-a-nursing-home',
    title: 'Ordering eye drops for someone in a nursing home',
    description:
      'How to address a package to a nursing home resident, why to call the nurses’ station first, and what staff should know before using the drops.',
    category: 'shipping',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Before ordering eye drops for someone in a nursing home, call the facility. Many nursing homes manage residents’ medicines themselves, including over-the-counter drops, and may need a doctor’s order before staff can give them. Once the nurse says yes, address the package with the resident’s full name, the facility name, the street address and the room number, and tell staff it’s coming.`,
      },
      { h: 'Step one: ask the nurse or the facility’s pharmacy contact' },
      {
        p: `Nursing homes, skilled nursing facilities and many assisted living communities keep a record of every medicine a resident uses, and nurses or medication aides give those medicines on a schedule. An eye drop that arrives in the mail and sits on a nightstand doesn’t fit that system. Facilities differ, so a short phone call answers the questions that matter:`,
      },
      {
        list: [
          `Can family members supply over-the-counter eye drops, or does everything come through the facility’s pharmacy?`,
          `Does the resident’s doctor need to write an order before staff can use it?`,
          `Who should the package be addressed to, and does it go to the front desk, the nurses’ station or the mailroom?`,
          `Is the resident allowed to keep and use drops on their own, or will staff give them?`,
          `Will the facility’s pharmacist want to review it alongside the resident’s other eye medicines?`,
        ],
      },
      {
        p: `Ask for the name of the nurse you spoke with, and write down what they said. If the answer is that drops must come through the facility’s own pharmacy, ordering online won’t help, and that’s worth knowing before you spend anything.`,
      },
      { h: 'How to address the package' },
      {
        p: `Facility mail goes through a front desk or a mailroom before it reaches a resident, so the address needs to make sorting easy. At checkout, use this pattern:`,
      },
      {
        list: [
          `Name: the resident’s full legal name, as the facility knows it, not a nickname.`,
          `Company or address line 1: the facility’s name.`,
          `Address line 1 or 2: the street address, then “Room” and the room number, or the wing and room.`,
          `City, state and ZIP for the facility, exactly as the facility gives it.`,
          `Phone: your number, so you’re the one contacted if there’s a delivery question.`,
        ],
      },
      {
        p: `Quell ships only to US addresses, and every package needs a complete street address. [Getting the shipping address right](/guides/getting-the-address-right) covers the fields in more detail. Your email goes on the order, so the confirmation and shipping messages come to you, not to the resident.`,
      },
      { h: 'Ordering as a family member' },
      {
        p: `You don’t need an account; guest checkout works, and you must be 18 or older to buy. Shipping is {shipping} per order and free at {freeBottles} or more bottles. No delivery date is promised, so order well before the resident’s current bottle runs out, particularly around the holidays when facility mailrooms get busy. Quell isn’t a subscription. You’ll get one reminder email about reordering, and nothing is charged again unless you place a new order. [Ordering eye drops for someone else](/guides/ordering-eye-drops-for-someone-else) has more on buying for another adult.`,
      },
      { h: 'What staff should know about this drop' },
      {
        p: `Whoever handles the drops will read the label, but a few points are worth passing on when you call:`,
      },
      {
        list: [
          `The label’s caution: {warnings}. If the resident has ever reacted to eggs or birds, tell the nurse before the bottle arrives, since the formula includes emu oil.`,
          `The directions: {directions}.`,
          `How it looks. {appearance} Staff who expect a clear drop may otherwise think something’s wrong.`,
          `Storage: {storage}. A sunny windowsill or a bedside spot near a radiator can run hotter than that.`,
          `The label’s handling rule: {tip}.`,
        ],
      },
      {
        p: `Quell’s label doesn’t give directions for use alongside other eye drops or ointments. Residents often have several eye medicines, so the timing and order belong to the resident’s doctor, the facility nurse or the consulting pharmacist. The same goes for anyone who wears contact lenses, which the label doesn’t cover.`,
      },
      { h: 'Labeling the bottle for a shared environment' },
      {
        p: `In a facility, medicines get mixed up easily, and bottles look alike. If staff allow it, write the resident’s name on the outer carton, not on the bottle tip or cap. The facility may add its own label. Keep the carton, since the Drug Facts panel is printed on it and staff may want to refer to it. Residents who share a room should never share a bottle.`,
      },
      { h: 'When it arrives' },
      {
        p: `Call the facility a day or two after tracking shows the package delivered, and confirm it reached the right person. If it went to the mailroom, it may take time to be sorted. Ask staff to check that the tamper seal is intact. If the package arrives damaged, the wrong item comes, or the seal is broken, the order is replaced; contact Quell at {phone}, {hours}. Unopened bottles can be refunded within {returnDays} days of delivery without being sent back.`,
      },
      { h: 'Watching for changes' },
      {
        p: `Residents don’t always mention discomfort, so family visits are a good time to notice it. If the resident complains of eye pain, has trouble seeing, or their eyes look more irritated, tell the nurse. The label sets the limit clearly: {stopUse}. [Eye drops for older adults](/guides/eye-drops-for-older-adults) has more on helping someone use drops comfortably.`,
      },
    ],
    faq: [
      {
        q: 'Can I send eye drops to someone in a nursing home?',
        a: `Usually, but ask the facility first. Many nursing homes manage residents’ medicines, including over-the-counter drops, and may need a doctor’s order before staff can give them.`,
      },
      {
        q: 'How do you address a package to a nursing home resident?',
        a: `Use the resident’s full name, then the facility name, the street address with the room number, and the facility’s city, state and ZIP. Put your own phone number on the order.`,
      },
      {
        q: 'Do nursing homes allow over-the-counter eye drops from family?',
        a: `It depends on the facility. Some accept them after a doctor’s order and pharmacy review; others supply everything through their own pharmacy. A call to the nurses’ station settles it.`,
      },
      {
        q: 'Who gets the order emails when I ship to a nursing home?',
        a: `The person who places the order. Your email goes on the order, so confirmation and shipping messages come to you rather than the resident.`,
      },
    ],
  },

  {
    slug: 'dry-itchy-eyes-in-winter',
    title: 'Dry, itchy eyes in winter',
    description:
      'Why eyes feel dry and itchy when the heat comes on, what a lubricating drop’s label does and doesn’t cover, and winter habits that help.',
    category: 'seasonal',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Dry, itchy eyes in winter usually come from dry air. Furnaces warm cold outdoor air without adding moisture, so tears evaporate faster indoors, and the skin of the eyelids dries out along with the rest of your skin. Wind and cold outside add to it. A humidifier, vents pointed away from your face and a lubricating drop help with dryness; itching that persists needs a doctor’s look.`,
      },
      { h: 'Why winter makes eyes dry' },
      {
        p: `Cold air holds very little water. When your furnace, heat pump or space heater warms it, the amount of moisture stays the same while the air’s capacity rises, so indoor relative humidity drops. Your tear film sits exposed on the front of the eye between blinks, and its watery layer evaporates faster into dry air. The tear film’s outer oil layer is what slows that loss, and when evaporation outpaces it, the eye’s surface feels dry, gritty or tired.`,
      },
      {
        p: `Winter habits make it worse. More hours indoors, more evenings in front of screens, cars with the heater on high, and wind that hits your face on the walk in from the parking lot all speed evaporation.`,
      },
      { h: 'Why dry eyes can itch' },
      {
        p: `Itching and dryness often show up together in winter, for a few reasons that have nothing to do with a drop:`,
      },
      {
        list: [
          `The skin of the eyelids is thin and dries out in heated air, just like your hands. Dry, flaky lid skin itches.`,
          `Wool scarves, hats and sweaters can rub and shed fibers near the eyes.`,
          `Dust settles in rooms with closed windows, and forced-air systems blow it around when they cycle on.`,
          `Rubbing tired eyes at night irritates them further and starts a rub-itch cycle.`,
        ],
      },
      {
        p: `Itching has many possible causes, and some aren’t related to dryness at all. If your eyes itch more than they feel dry, or the itching comes with sneezing, swelling or discharge, ask a doctor or pharmacist what’s behind it.`,
      },
      { h: 'What a lubricating drop’s label covers' },
      {
        p: `It’s worth reading exactly what the Uses line on a lubricating eye drop says, because that’s what the product is labeled to do. Quell’s reads: {uses}. That covers dryness, and it covers protection against further irritation. It doesn’t name itching, so Quell isn’t labeled to relieve an itch on its own. If dryness is what’s setting off the itchy feeling, easing the dryness may help; if not, a different approach is needed, and a pharmacist can point you to it.`,
      },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the winter problem in a sentence. Follow the label: {directions}. [The Uses section on an eye drop label](/guides/the-uses-section) explains how to read that part of any drop’s panel.`,
      },
      { h: 'Winter habits that help dry, itchy eyes' },
      {
        list: [
          `Run a humidifier in the bedroom and the room where you spend evenings. Clean it on the schedule its maker gives.`,
          `Point heating vents, car vents and space heaters away from your face.`,
          `Switch off ceiling fans for the season.`,
          `Wash your face and hands after coming in from outside, then pat the lids dry gently.`,
          `Use a fragrance-free moisturizer on dry skin around the eyes, keeping it out of the eyes themselves.`,
          `Wash wool scarves and hats, and choose smooth fabrics near your face if wool bothers you.`,
          `Take screen breaks and blink fully every so often.`,
          `Try not to rub. If you need to touch your eyes, wash your hands first and use a clean tissue.`,
        ],
      },
      { h: 'Outdoors: cold wind and bright snow' },
      {
        p: `Wind makes eyes water, and that watery reflex tear washes away fast, which can leave eyes drier once you’re back inside. Bright sun on snow makes people squint, and squinting goes with partial blinks. Wraparound sunglasses deal with both. Ski goggles or a scarf pulled up help on very windy days. [Dry eyes from cold air](/guides/dry-eyes-from-cold-air) explains the watering reflex in more detail.`,
      },
      { h: 'Keeping drops in good shape in winter' },
      {
        p: `Eye drops have a storage range on the label too, and winter tests it. Quell’s is {storage}. A bottle left in the car on a freezing night falls below that, and one parked next to a radiator or space heater can run above it. Keep it in a bag that comes inside with you, or in a drawer at room temperature. If it changes color, the label says {doNotUse}.`,
      },
      { h: 'When itchy, dry eyes need a doctor' },
      {
        p: `See an eye doctor if your eyes keep itching despite the steps above, if the lids are swollen or crusted, if there’s discharge, or if dryness lingers after winter ends. Figuring out what’s causing symptoms is their job, and they can tell whether a lubricating drop fits. The label is clear about when to stop: {stopUse}. The [dry eye self-check](/self-check) can help you describe your symptoms before the appointment.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes dry and itchy in the winter?',
        a: `Heated indoor air is dry, so tears evaporate faster and eyelid skin dries out too. Wool, dust from forced-air systems and rubbing tired eyes add to the itch.`,
      },
      {
        q: 'Do lubricating eye drops help itchy eyes?',
        a: `It depends on the label. Quell’s Uses cover dryness and protection against further irritation; they don’t name itching. If itching is the main problem, ask a pharmacist or doctor.`,
      },
      {
        q: 'Can a humidifier help dry, itchy eyes in winter?',
        a: `It can help with the dryness by raising indoor humidity, which slows tear evaporation and keeps eyelid skin from drying out as much. Clean it as its maker directs.`,
      },
      {
        q: 'When should I see a doctor for itchy eyes in winter?',
        a: `If itching continues despite simple changes, or comes with swelling, crusting, discharge, pain or vision changes. Stop using any eye drop and ask a doctor if symptoms persist.`,
      },
    ],
  },

  {
    slug: 'christmas-gifts-for-a-nurse-with-dry-eyes',
    title: 'Christmas gifts for a nurse with dry eyes',
    description:
      'Thoughtful Christmas gifts for a nurse whose eyes dry out on long shifts: what helps at work and at home, and what to check before giving eye drops.',
    category: 'seasonal',
    addedOn: '2026-11-12',
    body: [
      {
        p: `The most useful Christmas gifts for a nurse with dry eyes fit a 12-hour shift: a small bottle of lubricating drops that slips into a scrub pocket, a zip pouch to keep it clean, a bedside humidifier for daytime sleep after nights, wraparound sunglasses for the drive home, and a good water bottle. Check for egg or bird allergies before giving Quell, and order early.`,
      },
      { h: 'Why nurses’ eyes dry out' },
      {
        p: `Hospitals run on conditioned, filtered air that moves constantly, and the humidity indoors in winter can be low. Masks worn for hours can push exhaled air up past the eyes. Charting at workstations means staring at screens, which cuts down on blinking. Night shift adds tired eyes on top of that. [Dry eyes on long nursing shifts](/guides/dry-eyes-on-long-nursing-shifts) covers the work side in detail; this guide is about gifts that fit that life.`,
      },
      { h: 'Gifts for the shift itself' },
      {
        list: [
          `A bottle of lubricating eye drops. Quell is {size}, small enough for a scrub pocket or a locker shelf.`,
          `A small zippered pouch or clear case to keep the bottle clean among pens, tape and alcohol pads.`,
          `An insulated water bottle with a lid that seals, for breaks when there’s finally time to drink.`,
          `A fragrance-free hand cream for knuckles cracked from constant washing and sanitizer.`,
          `A badge reel or lanyard pouch with a pocket, if their unit allows it, so small personal items stay on hand.`,
          `Good compression socks or comfortable shoes. Not eye gifts, but every nurse on a 12-hour shift will use them.`,
        ],
      },
      { h: 'Gifts for home and recovery' },
      {
        list: [
          `A quiet cool-mist humidifier for the bedroom, especially for night-shift nurses sleeping during the day with the heat on.`,
          `A soft, contoured sleep mask that doesn’t press on the eyes, for daytime sleep.`,
          `Blackout curtains, which help night-shift sleepers more than almost anything else.`,
          `A warm compress mask they can heat at home, if they already like using one.`,
          `A gift card for a meal delivery service, for the days after a run of shifts.`,
        ],
      },
      {
        p: `If you’re buying a humidifier, include a note about cleaning it on the schedule its maker gives. A neglected tank isn’t a gift.`,
      },
      { h: 'Wraparound sunglasses for the drive home' },
      {
        p: `A nurse leaving a night shift drives home into the morning sun, often with the car heater blowing and eyes already tired. Wraparound sunglasses cut both glare and the air moving around the frames. A pair that fits over or replaces their usual glasses, or a clip-on set, makes a practical gift with a clear purpose. Pair them with a microfiber cloth for the smudges that come with a day in a mask.`,
      },
      { h: 'Before you give eye drops as a gift' },
      {
        p: `Eye drops are a medicine, not a candle, so a little care goes into giving them. Quell’s label carries a caution: {warnings}. The formula contains emu oil, so if the person has ever reacted to eggs or birds, choose a different gift. The label’s Uses are {uses}, and its directions read: {directions}.`,
      },
      {
        list: [
          `Ask, or know, whether they already use lubricating drops and like them. A nurse with a favorite won’t switch for a gift.`,
          `If they wear contact lenses, know that Quell’s label doesn’t cover use with contacts; that’s a question for their eye doctor.`,
          `Mention the appearance in your card. {appearance}`,
          `Point out the storage range, {storage}, so the bottle doesn’t live in a hot car between shifts.`,
        ],
      },
      {
        p: `[Are eye drops a good gift?](/guides/are-eye-drops-a-good-gift) talks through when a drop makes sense as a present and when it doesn’t.`,
      },
      { h: 'Putting together a small gift kit' },
      {
        p: `A simple kit works well for a coworker or a whole unit: one bottle of drops, a small pouch, a lip balm, hand cream and a handwritten card thanking them for the shifts they work over the holidays. Keep everything sealed and in its original packaging. For a unit gift, buying several bottles together can reach the free-shipping quantity: shipping is {shipping} per order, or free with {freeBottles} or more bottles.`,
      },
      { h: 'Ordering in time for Christmas' },
      {
        p: `Order early. No delivery date is promised, and holiday mail volume grows through December. You can ship straight to the nurse’s home, or to yourself to wrap. Checkout works as a guest, and there’s no gift-wrapping option, so plan to wrap it yourself. If the gift goes unused, unopened bottles can be refunded to the buyer within {returnDays} days of delivery without being sent back. [How to send Quell as a gift](/guides/sending-quell-as-a-gift) covers shipping to someone else’s address.`,
      },
      { h: 'A note on what a gift can’t do' },
      {
        p: `A drop or a humidifier can make a shift more comfortable. It doesn’t replace an eye exam. Nurses are good at telling other people to see a doctor and less good at doing it themselves, so if they mention dryness that never lets up, nudge them. The label’s own line is worth sharing: {stopUse}.`,
      },
    ],
    faq: [
      {
        q: 'What is a good Christmas gift for a nurse with dry eyes?',
        a: `Something that fits a long shift: a pocket-size bottle of lubricating drops in a clean pouch, a bedroom humidifier, a sleep mask for day sleep, or wraparound sunglasses for the drive home.`,
      },
      {
        q: 'Can you give eye drops as a gift to a nurse?',
        a: `Yes, with a little care. Check they don’t have an egg or bird allergy before giving Quell, since its label carries that caution, and ask whether they already have a drop they like.`,
      },
      {
        q: 'Will Quell fit in a scrub pocket?',
        a: `Yes. A bottle of Quell is {size}, small enough for a scrub or lab coat pocket. Keep it in a clean pouch so the tip doesn’t touch anything.`,
      },
      {
        q: 'When should I order a nurse’s Christmas gift so it arrives in time?',
        a: `As early as you can. No delivery date is promised, and December is busy for every shipper, so ordering in November or the first days of December leaves the most room.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-for-teachers',
    title: 'Dry eyes for teachers',
    description:
      'Heated classrooms, projectors, grading late and dusty boards: why teachers’ eyes dry out and practical classroom habits, including where to keep drops.',
    category: 'using',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Teachers’ eyes dry out because classrooms combine several drying conditions at once: heated or air-conditioned air, projectors and screens that reduce blinking, dusty boards, and long nights grading. Turn vents away from your desk, look away from the screen regularly, wash your hands before touching your eyes, and keep a lubricating drop in a locked desk drawer, out of students’ reach. Persistent dryness needs an eye doctor.`,
      },
      { h: 'What a school day does to your eyes' },
      {
        p: `Think about where your eyes spend a typical teaching day. Mornings start in a building where the heat came on at 5 a.m. and has been drying the air since. You glance between a projected slide, a laptop, a page of student work and thirty faces, often under fluorescent lights. Blinking slows when you concentrate, and partial blinks leave part of the eye’s surface uncovered. By last period, eyes feel tired and gritty. Then many teachers go home and grade on a laptop.`,
      },
      { h: 'The classroom air' },
      {
        p: `School buildings move a lot of air. Unit ventilators under the windows, ceiling diffusers and radiators keep rooms comfortable for a crowd, but heated air in winter and cooled air in early fall are both dry. If your desk sits in the path of a vent, the air moving across your face speeds evaporation from the tear film. Office workers face the same thing, and [dry eyes in a heated office](/guides/dry-eyes-in-a-heated-office) has more ideas that carry over to a classroom.`,
      },
      {
        list: [
          `Move your desk or chair out of the direct path of a vent or unit ventilator if the room layout allows.`,
          `Ask facilities whether a diffuser can be redirected; many have adjustable vanes.`,
          `Keep space heaters, if your school permits them, pointed at your feet, never your face.`,
          `Check with your school before bringing in a humidifier; some districts restrict small appliances in classrooms.`,
        ],
      },
      { h: 'Projectors, smartboards and screens' },
      {
        p: `Teachers look at screens more than ever: the projected lesson, the student-information system, email, and online grading. When you read or concentrate on a screen, you blink less, and the tear film thins between blinks. [Screens and your tear film](/guides/screens-and-your-tear-film) explains how that works.`,
      },
      {
        list: [
          `Position your laptop a little below eye level so your lids cover more of each eye.`,
          `While students work, look up and across the room at something distant, and blink slowly a few times.`,
          `Avoid standing in the projector beam, which is bright and can make you squint.`,
          `Turn up text size on your laptop rather than leaning in.`,
        ],
      },
      { h: 'Chalk, markers and classroom dust' },
      {
        p: `Chalk dust, eraser dust, paper fibers and the fine grit that collects in carpeted rooms all float in classroom air, and erasing a board puts a cloud of it near your face. Particles on the eye add to the feeling of dryness and irritation. Wipe boards with a damp cloth rather than a dry eraser when you can, step back while erasing, and wash your hands after handling chalk. Shake erasers outdoors, away from your face, or let a custodian handle it.`,
      },
      { h: 'Talking for hours and grading late' },
      {
        p: `Teaching is physically tiring, and tired eyes feel drier. Talking for hours dries your mouth and throat, which often goes along with not drinking enough water. Keep a water bottle on your desk and drink between classes. Grading late at night on a laptop adds a second screen session to a day that already had plenty. If you can, grade on paper some nights, set a time to stop, and give your eyes a rest before bed.`,
      },
      { h: 'Keeping eye drops at school' },
      {
        p: `A small bottle of drops in your desk makes sense if you use them, but a classroom has rules a kitchen doesn’t. Quell’s label carries the standard caution about children: {swallowed}. Keep the bottle in a drawer that locks, or in your bag, never on top of the desk where students can pick it up.`,
      },
      {
        list: [
          `Wash your hands before putting drops in; classroom surfaces, papers and keyboards pass through many hands.`,
          `Use drops when students aren’t watching closely, such as during a planning period, so no one copies you.`,
          `Never share your bottle with a colleague or a student.`,
          `Watch the temperature. The label says {storage}. Classrooms where the heat is turned down over winter break, or a car parked all afternoon in August, can fall outside that.`,
        ],
      },
      {
        p: `If a student asks to use your eye drops, the answer is no. Quell’s label doesn’t give directions for children, and student health questions go to the school nurse and their parents.`,
      },
      { h: 'Using Quell as labeled' },
      {
        p: `Quell’s Drug Facts panel lists its Uses as {uses}, and its directions as {directions}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. A practical rhythm for a school day might be one drop before first period, one at lunch and one after you get home, which fits the label’s three times a day. The bottle is multi-use, so the label’s handling line matters: {tip}. If you wear contact lenses, the label doesn’t cover use with them; ask your eye doctor.`,
      },
      { h: 'Recess duty, bus duty and field trips' },
      {
        p: `Outdoor duty on a cold, windy morning dries eyes in a different way: wind speeds evaporation and makes eyes water, and that reflex tearing doesn’t last. Sunglasses help on bright days, and a hat with a brim cuts glare. On field trips, carry the bottle in an inside pocket rather than a bus bin that may sit in the cold or the sun.`,
      },
      { h: 'Summer break is a good test' },
      {
        p: `If your eyes feel much better in July and August, the classroom environment is a likely contributor, and the changes above are worth pushing for. If dryness stays the same through summer, or gets worse, see an eye doctor. Working out what’s behind it is their job, and the [dry eye self-check](/self-check) can help you describe your symptoms before the visit. The label says when to stop: {stopUse}.`,
      },
    ],
    faq: [
      {
        q: 'Why do teachers get dry eyes?',
        a: `Classrooms combine heated or air-conditioned air, projectors and laptops that reduce blinking, board dust, and long hours, often followed by grading on a screen at night.`,
      },
      {
        q: 'Can I keep eye drops in my classroom desk?',
        a: `Yes, if it’s a locked drawer or your bag, out of students’ reach, and the room stays within the label’s storage range of {storage}. Never leave the bottle on top of the desk.`,
      },
      {
        q: 'Can I let a student use my eye drops?',
        a: `No. Never share a bottle, and Quell’s label doesn’t give directions for children. A student with eye trouble should see the school nurse, and their parents should be told.`,
      },
      {
        q: 'Does chalk dust cause dry eyes?',
        a: `Chalk and eraser dust can land on the eye and add to dryness and irritation. Erase with a damp cloth when possible, step back while erasing, and wash your hands afterward.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-when-running',
    title: 'Dry eyes when running',
    description:
      'Why eyes dry out and water on runs, especially cold mornings, and what helps: sunglasses, a hat, when to use drops, and where to carry the bottle.',
    category: 'using',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Eyes dry out when you run because you create your own wind. Air rushes across the eye’s surface at your running pace, cold or dry air speeds evaporation further, and squinting into sun or effort cuts down on full blinks. Wraparound sunglasses and a brimmed cap help the most. Use lubricating drops before you head out or after you finish, never while moving, and carry the bottle in a zipped pocket.`,
      },
      { h: 'Why running dries your eyes' },
      {
        p: `Standing still on a calm day, the air around your face barely moves. Run at an easy pace and you push through it steadily for the whole run; add a headwind and the air speed across your eyes climbs further. Moving air pulls moisture off the tear film faster, the same way wind dries laundry on a line. The tear film’s oily outer layer slows evaporation, but it can only do so much against constant airflow.`,
      },
      {
        p: `Effort changes how you blink, too. Runners tend to fix their gaze on the path ahead, and in bright sun they squint. Both mean fewer complete blinks, so the watery layer isn’t spread back across the eye as often.`,
      },
      { h: 'Cold-morning runs' },
      {
        p: `Winter mornings are the hardest. Cold air holds little moisture, so it’s dry even when the thermometer reads a damp-feeling 30°F. Cold wind also sets off reflex tearing: eyes water heavily, tears stream sideways toward your temples, and you finish the run with wet cheeks and eyes that feel gritty an hour later. Those reflex tears are mostly water and drain or evaporate quickly, which is why eyes can feel drier after watering. [Dry eyes from cold air](/guides/dry-eyes-from-cold-air) explains that reflex.`,
      },
      {
        list: [
          `Wear wraparound glasses even before sunrise; clear or light-tint lenses block wind without darkening the path.`,
          `Pull a neck gaiter or buff up over your nose and mouth on very cold days, but leave a gap so your breath doesn’t fog your lenses.`,
          `Plan out-and-back routes so the headwind comes first and the tailwind brings you home.`,
          `Warm up indoors for a few minutes so you aren’t squinting through the first cold mile.`,
        ],
      },
      { h: 'Sunglasses, hats and what to look for' },
      {
        p: `The single most useful piece of gear for dry eyes on the run is a pair of wraparound sunglasses. Flat lenses let air rush around the sides; a curved frame that sits close to the face blocks much more of it. Look for a pair that doesn’t bounce, with rubber nose pads and temple grips, so you aren’t constantly pushing them up. Vents along the top of the lens help with fogging.`,
      },
      {
        p: `A cap with a brim shades your eyes so you squint less, and in rain it keeps drops off your lenses. On long summer runs, a cap also keeps sweat from running into your eyes, which stings and makes you rub them with salty hands.`,
      },
      { h: 'Using eye drops around a run' },
      {
        p: `Quell’s Uses are listed on its label as {uses}, and the directions are {directions}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, which fits the problem of airflow drying the eye. How you fit those drops around a run matters:`,
      },
      {
        list: [
          `Before a run, put the drop in a few minutes ahead of time at home, so your vision is clear when you start.`,
          `After a run, wash your hands and face first. Sweat and sunscreen on your fingers shouldn’t get near your eyes.`,
          `Don’t try it mid-run. Stop fully, step off the path and stand still if you need to use drops during a long outing.`,
          `Count running drops within the label’s three a day, not in addition to them.`,
          `Keep the tip clean, as the label says: {tip}.`,
        ],
      },
      { h: 'Where to carry the bottle' },
      {
        p: `A bottle of Quell is {size}, small enough to carry. The question is keeping it clean, closed and within its temperature range.`,
      },
      {
        list: [
          `A zipped pocket in running shorts, a jacket or a belt, so it can’t bounce out.`,
          `Inside a small plastic bag in a hydration vest, so sweat and gel wrappers don’t touch the cap.`,
          `Close to your body in winter, not in an outer pocket where it gets cold.`,
          `Not in a car parked at the trailhead on a hot afternoon. The label says {storage}.`,
        ],
      },
      { h: 'Races, trail runs and long days out' },
      {
        p: `Race mornings add standing around in wind at the start and dust kicked up by a crowd. Trail runners deal with dust on dry paths and branches near the face. On race day, use your drop before you leave home and keep the bottle in your bag at the finish. On trails, glasses double as protection from twigs and grit. If something gets into your eye, stop, don’t rub, and rinse it out; if it still hurts or your vision isn’t clear, get it checked.`,
      },
      { h: 'Contacts, kids and other drops' },
      {
        p: `Many runners wear contact lenses to avoid glasses bouncing. Quell’s label doesn’t give directions for use with contact lenses, so ask your eye doctor before combining the two. The label also doesn’t cover children or use alongside other eye drops; those questions go to an eye doctor or pharmacist.`,
      },
      { h: 'When dry eyes after running need a doctor' },
      {
        p: `Eyes that feel dry for an hour after a cold run and then settle are common. Eyes that stay dry for days, hurt, or blur your vision are not, and an eye doctor can work out what’s behind it. Follow the label’s line on when to stop: {stopUse}. The [dry eye self-check](/self-check) can help you put a pattern into words, and [dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers) covers long hours in wind and sun.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes water when I run in the cold?',
        a: `Cold wind triggers reflex tearing. Those tears are mostly water and drain or evaporate quickly, so eyes can feel drier afterward. Wraparound glasses block much of the wind.`,
      },
      {
        q: 'Can I put eye drops in during a run?',
        a: `Only if you stop completely and stand still. Don’t try it while moving. Using the drop before you leave or after you’ve washed your hands at home is simpler.`,
      },
      {
        q: 'Where should I carry eye drops when running?',
        a: `In a zipped pocket or a small bag inside a vest, close to your body in winter, and never in a hot car at the trailhead. The label’s storage range is {storage}.`,
      },
      {
        q: 'Do sunglasses help dry eyes when running?',
        a: `Yes. Wraparound frames that sit close to the face block much of the air rushing past your eyes, and they cut glare so you squint less.`,
      },
    ],
  },

  {
    slug: 'can-you-use-eye-drops-if-you-wear-glasses',
    title: 'Can you use eye drops if you wear glasses?',
    description:
      'Yes. Glasses don’t change how lubricating drops are used, unlike contacts. How to put drops in around glasses, how long to wait, and keeping lenses clean.',
    category: 'using',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Yes. Wearing glasses doesn’t stop you from using lubricating eye drops. Take your glasses off, put in the drop as the label directs, close your eyes for a moment and blot any excess before putting them back on. Glasses are different from contact lenses, which sit on the eye; Quell’s label doesn’t give directions for contacts, but glasses don’t touch the eye at all.`,
      },
      { h: 'Glasses vs. contact lenses' },
      {
        p: `People ask this because drop packaging so often mentions contact lenses. The difference is simple: a contact lens rests on the eye’s surface, in the tear film, so anything you put in the eye meets the lens too. Glasses sit on your nose, a short distance in front of the eye, and never touch the tear film. A drop that reaches your eye doesn’t interact with your glasses at all, as long as it doesn’t land on the lens.`,
      },
      {
        p: `Quell’s label doesn’t give directions for use with contact lenses. If you wear contacts some days and glasses others, ask your eye doctor how to handle drops on contact days. On glasses days, the label’s directions apply as written: {directions}. [Can I use Quell with contact lenses?](/guides/contact-lenses-and-quell) covers the contact side.`,
      },
      { h: 'How to put in eye drops when you wear glasses' },
      {
        list: [
          `Wash your hands.`,
          `Take your glasses off and set them lens-up on a clean surface, or fold them into a case.`,
          `Tilt your head back, pull the lower lid down gently, and put one drop into the pocket.`,
          `Keep the bottle tip from touching your eye or lashes. The label says {tip}.`,
          `Close your eyes gently for a moment. Don’t squeeze or blink hard.`,
          `Blot any excess from your lid and cheek with a clean tissue.`,
          `Do the other eye, then wait a minute or two before putting your glasses back on.`,
        ],
      },
      {
        p: `Taking the glasses off matters. Trying to aim a drop under a frame almost always ends with the bottle tip bumping the frame or a drop landing on the lens. [How to use eye drops as directed](/guides/how-to-use-eye-drops-as-directed) walks through the basic technique in more detail.`,
      },
      { h: 'If you can’t see well without your glasses' },
      {
        p: `Many people who wear glasses for distance can still see the bottle up close, but if you’re very nearsighted or farsighted, aiming without glasses can feel awkward. A few things help:`,
      },
      {
        list: [
          `Use a mirror on a table and sit down, so your elbow rests on the surface.`,
          `Rest the hand holding the bottle on your forehead or the bridge of your nose for steadiness.`,
          `Lie down on a bed and look up at the ceiling; gravity does most of the aiming.`,
          `Keep the bottle at room temperature, within the label’s range of {storage}; a drop at room temperature is easy to feel landing, so you know it went in.`,
        ],
      },
      { h: 'Waiting before putting glasses back on' },
      {
        p: `There’s no required waiting time for glasses on the label. A minute or two simply lets the drop spread across the eye with a few gentle blinks and lets you blot away anything on the lids. Putting glasses on immediately tends to trap a wet lid against the lens, and the first blink leaves a smear. If your vision is briefly blurry after a drop, wait until it clears before driving or doing anything that needs sharp sight.`,
      },
      { h: 'Drops on your lenses' },
      {
        p: `Sooner or later a drop lands on a lens. Quell is an oil-and-water formula, and the label notes it {milky}, so a drop on a lens leaves a cloudy, slightly greasy mark rather than a clear water spot. Don’t wipe it with your shirt, which spreads oil around. Rinse the lenses under lukewarm water, use a drop of lens cleaner or a tiny bit of mild dish soap, and dry them with a clean microfiber cloth. Anti-reflective and other lens coatings can be damaged by harsh cleaners, so stick to products your optician recommends.`,
      },
      { h: 'Glasses as a shield' },
      {
        p: `Glasses do more than correct vision; they also block some of the air moving toward your eyes. That helps outdoors on windy days and in front of a fan or car vent. Wraparound frames and sunglasses with curved lenses block more than flat, small frames. Some opticians offer frames with side shields, and prescription sunglasses are worth considering if you spend a lot of time outside. Keep your lenses clean, too: smudged lenses make people squint, and squinting goes with fewer complete blinks.`,
      },
      { h: 'Reading glasses, screens and dry eyes' },
      {
        p: `Reading glasses and computer glasses are often worn for close work, which is exactly when blinking slows. If your eyes feel dry while you read or work at a screen, the glasses aren’t the cause, but the task is. Look up from the page or screen every so often, blink fully, and use your drop on the label’s schedule rather than waiting until your eyes feel scratchy. If you’re squinting even with your current glasses, an updated prescription may help, and that’s a question for your eye doctor.`,
      },
      { h: 'When to see your eye doctor' },
      {
        p: `Your glasses prescription check is a good time to mention dryness. An eye doctor can look at the eye’s surface and work out what’s behind it. Don’t wait for that appointment if something changes, though. The label is direct: {stopUse}. The [dry eye self-check](/self-check) can help you organize what to tell them.`,
      },
    ],
    faq: [
      {
        q: 'Do I need to take my glasses off to put in eye drops?',
        a: `Yes, it’s much easier. Aiming under a frame usually means the bottle tip bumps the frame or the drop lands on the lens. Take them off, use the drop, then put them back on.`,
      },
      {
        q: 'How long after eye drops can I put my glasses back on?',
        a: `The label doesn’t set a waiting time for glasses. A minute or two lets the drop spread and lets you blot your lids, so you don’t smear the lenses.`,
      },
      {
        q: 'How do I clean eye drops off my glasses?',
        a: `Rinse the lenses in lukewarm water, use lens cleaner or a little mild dish soap, and dry with a clean microfiber cloth. Wiping with clothing spreads the oily residue.`,
      },
      {
        q: 'Is it OK to use eye drops with glasses but not contacts?',
        a: `Glasses don’t touch the eye, so they don’t affect how a lubricating drop is used. Quell’s label doesn’t cover contact lenses, so ask your eye doctor about contact days.`,
      },
    ],
  },

  /*
   * Checked 2026-11-12 on ecfr.gov (renderer API, current text):
   * 21 CFR 349.12 "Ophthalmic demulcents" (polysorbate 80 under (d) liquid polyols,
   * "within the established concentrations"); 21 CFR 201.66(b)(2) definition of
   * active ingredient; 21 CFR 172.840 "Polysorbate 80" (food additive, made by
   * reacting oleic acid with sorbitol, then ethylene oxide; an emulsifier in ice
   * cream and frozen desserts).
   */
  {
    slug: 'what-does-polysorbate-80-do-in-eye-drops',
    title: 'What does polysorbate 80 do in eye drops?',
    description:
      'Polysorbate 80 is a lubricant active ingredient in some eye drops. What that label role means, where FDA lists it, and what the warnings say instead.',
    category: 'formula',
    addedOn: '2026-11-12',
    body: [
      {
        p: `In an over-the-counter eye drop, polysorbate 80 is a lubricant. FDA’s rules for nonprescription eye drops, 21 CFR 349.12, list it among the ophthalmic demulcents, ingredients that coat and lubricate the eye’s surface. Quell lists it as an active ingredient, {polysorbate}, with the purpose “lubricant.” Chemically it’s also an emulsifier, which helps oil and water mix, and that suits a formula that blends both.`,
      },
      { h: 'Why is polysorbate 80 used in eye drops?' },
      {
        p: `There are two answers, one from the label and one from chemistry. On the label, polysorbate 80 has a single stated job: lubricant. That’s the role the Drug Facts panel assigns it, and it’s the role that counts legally. In chemistry, polysorbate 80 belongs to a family of compounds called surfactants, which have one end that’s attracted to water and another that’s attracted to oil. That structure lets them sit between oil and water and hold the two together.`,
      },
      {
        p: `Quell is an oil-and-water formula. Its actives are {actives}, and the inactive list includes emu oil and other lipids. The tear film it’s designed to support also has an oily layer over a watery one. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and an ingredient that’s comfortable on both sides of an oil-water boundary fits that design. The label itself doesn’t explain why each ingredient was chosen, so read the chemistry as background rather than a stated purpose.`,
      },
      { h: 'What “active ingredient” and “purpose” mean' },
      {
        p: `FDA’s labeling regulation for over-the-counter drugs, 21 CFR 201.66, defines an active ingredient as a component intended to furnish pharmacological activity or another direct effect in the body. Everything else is an inactive ingredient. On the Drug Facts panel, each active is listed with its strength and its purpose, a short word or phrase describing what it does.`,
      },
      {
        p: `For polysorbate 80 in Quell, the purpose is “lubricant,” the same as {glycerol}. The third active, {mineralOil}, has the purpose “emollient.” Seeing polysorbate 80 listed as an active, with a strength and a purpose, tells you it’s one of the ingredients the product’s Uses depend on. Those Uses read: {uses}. [The active ingredients section](/guides/the-active-ingredients-section) covers how that part of the panel is laid out.`,
      },
      { h: 'Polysorbate 80 in FDA’s eye drop rules' },
      {
        p: `Over-the-counter lubricating eye drops follow a set of FDA rules in 21 CFR part 349, often called the ophthalmic monograph. Section 349.12 lists the demulcents a product can use, each “within the established concentrations” for that ingredient. Polysorbate 80 appears there in the group of liquid polyols, alongside glycerin, propylene glycol and two polyethylene glycols. Quell’s label strength, {polysorbate}, is within the range the regulation sets for it.`,
      },
      {
        p: `That listing is what lets a drop use polysorbate 80 as an active lubricant without a prescription. It’s a regulatory permission, not a statement about how any one person will respond. [What is a demulcent in eye drops?](/guides/what-is-a-demulcent-in-eye-drops) walks through the whole list and how demulcents differ from emollients.`,
      },
      { h: 'Where else polysorbate 80 shows up' },
      {
        p: `Polysorbate 80 isn’t unique to eye drops. FDA’s food additive regulations, at 21 CFR 172.840, describe it as a compound made by reacting oleic acid with sorbitol and then with ethylene oxide, and permit it as an emulsifier in ice cream and other frozen desserts, among other uses. It also appears in cosmetics and many medicines. Its chemical name, polyoxyethylene (20) sorbitan monooleate, is the one you may see on technical documents.`,
      },
      {
        p: `Familiarity in food doesn’t tell you how it will feel in your eye; the eye and the stomach are different places. It does explain why the name turns up on so many ingredient lists.`,
      },
      { h: 'Polysorbate 80 eye drops: side effects and the label' },
      {
        p: `People often search for side effects of polysorbate 80 in eye drops, or whether it’s okay to use. The Drug Facts panel is the place that answers those questions for a specific product, through its warnings rather than a promise. For Quell, those are:`,
      },
      {
        list: [
          `The caution: {warnings}.`,
          `Do not use: {doNotUse}.`,
          `When using: {tip}.`,
          `Stop use and ask a doctor: {stopUse}`,
          `If swallowed: {swallowed}.`,
        ],
      },
      {
        p: `If you’ve reacted to a product containing polysorbates before, whether a cream, a medicine or another eye drop, tell your doctor or pharmacist before using any drop that lists polysorbate 80. They can look at your history and the full ingredient list together. That’s more useful than a general answer, because reactions are personal.`,
      },
      { h: 'Polysorbate 80 in Quell, at a glance' },
      {
        list: [
          `Listed as: {polysorbate}.`,
          `Purpose on the label: lubricant.`,
          `Listed in FDA’s ophthalmic demulcents at 21 CFR 349.12, within a set concentration range.`,
          `Works alongside {glycerol} (lubricant) and {mineralOil} (emollient).`,
          `Part of a preservative-free, milky formula; the label notes it {milky}.`,
        ],
      },
      {
        p: `The complete panel, with all actives, inactives and warnings, is on the [Drug Facts](/drug-facts) page.`,
      },
    ],
    faq: [
      {
        q: 'Why is polysorbate 80 used in eye drops?',
        a: `On the label it’s a lubricant: FDA lists it among the ophthalmic demulcents in 21 CFR 349.12. Chemically it’s also an emulsifier, which helps oil and water ingredients stay mixed.`,
      },
      {
        q: 'What are the side effects of polysorbate 80 eye drops?',
        a: `A product’s Drug Facts panel lists what to watch for, and Quell’s is specific: {stopUse} If you’ve reacted to polysorbates before, ask a doctor or pharmacist first.`,
      },
      {
        q: 'Is polysorbate 80 an active or inactive ingredient in eye drops?',
        a: `It can be either, depending on the product. In Quell it’s an active ingredient, listed as {polysorbate} with the purpose “lubricant.”`,
      },
      {
        q: 'Is polysorbate 80 allowed in over-the-counter eye drops?',
        a: `Yes. FDA’s ophthalmic monograph, 21 CFR 349.12, lists polysorbate 80 as a demulcent that nonprescription eye drops may use within an established concentration range.`,
      },
    ],
  },

  /*
   * Checked 2026-11-12 on ecfr.gov (renderer API, current text):
   * 21 CFR 201.60 principal display panel; 201.61 statement of identity (bold,
   * established name plus pharmacological category or principal intended action;
   * mixtures without an established name may state the general action; examples
   * "antacid", "analgesic", "decongestant"); 201.62 net quantity (liquids in fluid
   * measure, U.S. gallon/quart/pint/fluid ounce at 68 F; distinct item in the bottom
   * 30 percent of the panel; panels of 5 square inches or less exempt from that
   * placement; metric statement may also appear); 201.66 Drug Facts format.
   */
  {
    slug: 'what-the-front-of-an-eye-drop-box-tells-you',
    title: 'What the front of an eye drop box tells you',
    description:
      'The front of an eye drop box is its principal display panel. What FDA requires there, such as identity and net quantity, and what it leaves to the back.',
    category: 'label',
    addedOn: '2026-11-12',
    body: [
      {
        p: `The front of an eye drop box, which FDA calls the principal display panel, has to tell you two things: what the product is, in a bold statement of identity, and how much is inside, as a net quantity. Everything else on the front is the brand’s choice. The rules for using the drop, its ingredients and warnings, live in the Drug Facts panel, usually on the back or side.`,
      },
      { h: 'The principal display panel' },
      {
        p: `FDA’s labeling rules for over-the-counter drugs, at 21 CFR 201.60, define the principal display panel as the part of the label most likely to be displayed or examined when the product sits on a store shelf. For a box, that’s the front face. The rule says the panel must be big enough to carry the required information clearly, without crowding, and if a package has two equally prominent faces, the required information goes on both.`,
      },
      {
        p: `Online, you rarely see the box on a shelf, so the product photo stands in for it. That’s one reason a clear photo of the actual carton is worth looking for when you shop online: it shows you the same panel the rules were written around.`,
      },
      { h: 'The statement of identity' },
      {
        p: `Section 201.61 requires the front panel to carry a statement of identity as one of its main features. For a single-ingredient drug, that’s the drug’s established name plus its general category or main intended action. For a mixture with no single established name, like most lubricating eye drops, the rule allows a prominent statement of what the mixture does, in terms ordinary shoppers understand. The regulation’s own examples include “antacid,” “analgesic” and “decongestant.”`,
      },
      {
        list: [
          `It must be in bold type.`,
          `Its size must be reasonably related to the most prominent text on the panel, so it can’t be tucked away in fine print.`,
          `It runs parallel to the base of the package as it’s meant to stand on a shelf.`,
          `It sits close to the brand name, so the brand and what the product is appear together.`,
        ],
      },
      {
        p: `On Quell’s carton, the brand name is paired with a description of the product type: preservative-free lubricating eye drops. “Lubricating eye drops” tells you the category at a glance; the details of how it’s used come later, on the Drug Facts panel.`,
      },
      { h: 'Net quantity: how much is in the box' },
      {
        p: `Section 201.62 requires a declaration of net quantity of contents. For a liquid, it’s stated in fluid measure using US units, fluid ounces for a small bottle, measured at 68°F. A metric amount may appear alongside it. The declaration has to stand apart as a distinct item, with space around it, and on most packages it belongs in the bottom 30 percent of the front panel. Very small panels, five square inches or less, are exempt from that placement rule.`,
      },
      {
        p: `Quell’s net quantity is {size}. Knowing where to look for it makes comparison easier: the amount sits near the bottom of the front panel on most boxes, separate from the claims and the artwork. [What size is a bottle of Quell?](/guides/what-size-is-a-bottle-of-quell) goes into what that volume means in practice.`,
      },
      { h: 'Everything else on the front' },
      {
        p: `Beyond identity and quantity, the front of a box is the brand’s space: the logo, colors, artwork and short claims. On Quell’s carton you’ll find “Preservative-Free” and “Patented MD Formula,” among others. Those phrases are meant to catch your eye, and they’re short by design. They aren’t a substitute for the Uses statement, and a front-panel phrase never overrides the directions or warnings on the back.`,
      },
      {
        list: [
          `Read a front claim as a headline, then look for its support on the Drug Facts panel.`,
          `Check that the product type on the front matches what you’re looking for, such as lubricating drops rather than another kind.`,
          `Look for the net quantity before comparing prices between brands.`,
          `Turn the box over before you buy, or open the Drug Facts link if you’re shopping online.`,
        ],
      },
      {
        p: `[What “Patented MD Formula” means](/guides/what-patented-md-formula-means) and [what preservative-free means](/guides/what-does-preservative-free-mean) explain two of Quell’s front-panel phrases in detail.`,
      },
      { h: 'The back of the box: the Drug Facts panel' },
      {
        p: `A separate regulation, 21 CFR 201.66, sets the format for the Drug Facts panel. It uses a fixed order of headings: active ingredients with their purposes, uses, warnings, directions, other information and inactive ingredients. On Quell’s carton, that panel says the product’s Uses are {uses}, and its directions are {directions}. The panel also carries the caution {warnings}.`,
      },
      {
        p: `That’s the part to read before you use any eye drop. The full Quell panel is reproduced on the [Drug Facts](/drug-facts) page, and [how to read an eye drop Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label) walks through each section.`,
      },
      { h: 'Front and back, side by side' },
      {
        list: [
          `Front: brand name, statement of identity, net quantity, brand claims and artwork.`,
          `Back: Drug Facts panel, with actives, uses, warnings, directions, other information and inactives.`,
          `Sides or flaps: often the lot number, expiration date, barcode and the company’s name and address.`,
          `Bottle: a smaller label that repeats key information, since the carton may be thrown away.`,
        ],
      },
      {
        p: `Keep the carton while you’re using a bottle. The front tells you what you bought and how much; the back tells you how to use it and when to stop. Quell’s label is direct on that last point: {stopUse}.`,
      },
    ],
    faq: [
      {
        q: 'What is the principal display panel on a drug label?',
        a: `It’s the part of the label most likely to be seen on a store shelf, usually the front of the box. FDA’s rules, at 21 CFR 201.60, require key information such as the statement of identity and net quantity there.`,
      },
      {
        q: 'What is a statement of identity on an eye drop box?',
        a: `It’s the bold phrase on the front that says what the product is, such as “lubricating eye drops.” Under 21 CFR 201.61 it must be prominent and sit with the brand name.`,
      },
      {
        q: 'Where is the net quantity on an eye drop box?',
        a: `On the front panel, as a separate item, usually in the bottom 30 percent of the panel. For a liquid it’s in fluid ounces, often with milliliters as well. Quell’s is {size}.`,
      },
      {
        q: 'Is the front or the back of an eye drop box more important?',
        a: `Read both, but the back matters more for use. The front says what the product is and how much is inside; the Drug Facts panel on the back gives the uses, directions and warnings.`,
      },
    ],
  },

  /*
   * Checked 2026-11-12 on tsa.gov:
   * - https://www.tsa.gov/travel/security-screening/liquids-aerosols-gels-rule
   *   (quart-sized bag; 3.4 ounces (100 milliliters) or less per item; items that
   *   alarm require additional screening; medications listed as an exemption)
   * - https://www.tsa.gov/travel/tsa-cares/disabilities-and-medical-conditions
   *   (Medications: may undergo visual or X-ray screening and may be tested for traces
   *   of explosives; inform the officer before screening; place in a separate bin;
   *   larger amounts in reasonable quantities if declared; officers may ask to open
   *   for vapor analysis; "Screening will never include placing anything into the
   *   medically necessary liquid"; tell the officer if you don't want it X-rayed or
   *   opened, and additional screening of you and your property will follow)
   * - https://www.tsa.gov/travel/frequently-asked-questions/i-am-traveling-medication-are-there-any-requirements-i-should-be
   *   (clearly labeled medication facilitates screening; all items screened)
   * - https://www.tsa.gov/travel/security-screening/whatcanibring/items/medications-liquid
   *   ("The final decision rests with the TSA officer")
   */
  {
    slug: 'can-eye-drops-go-through-airport-x-ray',
    title: 'Can eye drops go through airport X-ray?',
    description:
      'Yes. TSA screens medications by X-ray, and you can ask for a different check. How screening of eye drops works, declaring them, and keeping the bottle sealed.',
    category: 'using',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Yes. Eye drops in your carry-on go through the airport X-ray like everything else, and TSA says medications can be screened by X-ray or visually. A small bottle fits in your quart-size liquids bag. If you’d rather it not be X-rayed or opened, tell the TSA officer before screening starts; they’ll clear it another way, which means extra screening for you and your bag.`,
      },
      { h: 'How TSA screens medications' },
      {
        p: `TSA’s page on disabilities and medical conditions has a section on medications. It says medications must go through security screening, that they can undergo visual or X-ray screening, and that they may be tested for traces of explosives. That applies to pills and liquids alike. TSA also notes that clearly labeled medication makes screening easier.`,
      },
      {
        p: `For eye drops, that usually means the bottle rides through the X-ray tunnel in your liquids bag, and nothing more happens. If the image raises a question, an officer may take a closer look or swab the outside of the container. TSA’s liquids rule adds that any liquid that alarms during screening requires additional screening.`,
      },
      { h: 'Do eye drops count toward the 3-1-1 bag?' },
      {
        p: `Under TSA’s liquids rule, you can carry a quart-size bag of liquids, gels and creams in containers of 3.4 ounces, or 100 milliliters, or less each. A bottle of Quell is {size}, well under that limit, so it can simply go in your quart bag. Medications are also exempt from the size limit: TSA allows larger amounts of medically necessary liquids in reasonable quantities for your trip, as long as you declare them at the checkpoint. Most people traveling with a small bottle of drops never need that exemption. [Dry eyes on a plane](/guides/dry-eyes-on-a-plane) covers using drops in the air.`,
      },
      { h: 'Declaring eye drops at the checkpoint' },
      {
        p: `You don’t have to declare a small bottle that’s already in your quart bag. Declaring makes sense when you’re carrying more than the liquids rule allows, or when you want the drops handled differently. TSA’s guidance for medically necessary liquids is:`,
      },
      {
        list: [
          `Before screening begins, tell the TSA officer you have medically necessary liquids.`,
          `Take them out of your carry-on and place them in a separate bin, along with any related accessories.`,
          `If a liquid alarms, expect additional screening. If the alarm can’t be resolved, the item may not be allowed.`,
          `The final decision on whether an item goes through rests with the TSA officer.`,
        ],
      },
      { h: 'Can you refuse X-ray for eye drops?' },
      {
        p: `Yes. TSA’s page says to tell the officer if you don’t want your liquid medication screened by X-ray or opened. Officers will then take additional steps to clear the liquid, and you’ll go through additional screening yourself, which may include the body scanner, a pat-down and a closer search of your carry-on. It takes longer, so allow time if you plan to ask.`,
      },
      {
        p: `Quell’s label says nothing about X-ray screening either way, so whether to ask for an alternative is your call. You can read the whole panel on the [Drug Facts](/drug-facts) page before you fly. If you have a question about it, the company’s line is {phone}, {hours}.`,
      },
      { h: 'Will TSA open a sealed bottle?' },
      {
        p: `Sometimes officers can’t clear a liquid with their screening technology. TSA’s page says that in that case you may be asked to open the container for vapor analysis, and that screening will never include placing anything into a medically necessary liquid. If you don’t want a new, sealed bottle opened, say so before screening, and the officer will use other steps along with extra screening of you and your bags.`,
      },
      {
        p: `A sealed bottle is worth protecting for practical reasons. The tamper seal is how you know a bottle hasn’t been opened since it left the maker, and unopened Quell bottles can be refunded within {returnDays} days of delivery. Packing a spare in its carton, with the seal intact, makes it easy to identify.`,
      },
      { h: 'Packing eye drops for screening' },
      {
        list: [
          `Keep the bottle in its original carton or with its original label, so officers can see what it is.`,
          `Put the bottle you’re using in your quart bag where you can reach it quickly.`,
          `Pack spares in their sealed cartons; declare them if you’re carrying more than the liquids rule allows.`,
          `Keep the cap closed tightly so a bag squeeze doesn’t push liquid onto the tip.`,
          `Carry drops in your carry-on so they stay with you.`,
        ],
      },
      { h: 'Temperature and timing on travel days' },
      {
        p: `Screening itself isn’t the only thing a bottle goes through on a trip. The label’s storage range is {storage}, and a bag left in a hot car in an airport garage or on a cold jet bridge in January can drift outside it. Keep the bottle with you as much as possible. Use your drop before you get in the security line or after you’re through, with clean hands; the label’s handling rule still applies in an airport: {tip}. [Traveling with eye drops](/guides/traveling-with-eye-drops) has a full packing checklist.`,
      },
      { h: 'International flights' },
      {
        p: `TSA’s rules cover US airports. Security screening abroad follows the rules of the country you’re leaving, and they can differ. If you’re flying home from another country, check that airport’s guidance before you pack. Quell ships only within the United States, so bring enough for the whole trip.`,
      },
    ],
    faq: [
      {
        q: 'Does airport X-ray affect eye drops?',
        a: `TSA routinely screens medications, including liquids, by X-ray. If you’d rather your eye drops not be X-rayed, tell the officer before screening; they’ll clear the bottle another way.`,
      },
      {
        q: 'Do I have to take eye drops out of my bag at airport security?',
        a: `A small bottle goes in your quart-size liquids bag, which you take out under TSA’s liquids rule. Larger medically necessary liquids should be declared and placed in a separate bin.`,
      },
      {
        q: 'Can TSA open my eye drops?',
        a: `TSA says officers may ask you to open a liquid medication for vapor analysis if they can’t clear it otherwise. Tell them before screening if you don’t want it opened; they’ll use other steps.`,
      },
      {
        q: 'Should I declare eye drops at airport security?',
        a: `For a small bottle already in your quart bag, you don’t need to. Declare them if you’re carrying more than 3.4 ounces, or if you want them screened without X-ray.`,
      },
    ],
  },
]
