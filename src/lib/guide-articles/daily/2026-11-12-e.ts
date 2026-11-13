import type { Guide } from '@/lib/guide-types'

export const DAILY_20261112_E: Guide[] = [
  /*
   * Sources fetched 2026-11-12 for dry-eye-relief-in-dana-point:
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USC00044647.csv
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USC00044647.csv
   *   (Laguna Beach co-op station, the nearest NOAA normals station to Dana Point:
   *   Jan high 68.4 / low 44.2 F; Aug high 81.2 F; annual precip 12.68 in; Feb 3.39 in;
   *   Jun 0.11, Jul 0.11, Aug 0.02 in; 1.0 night a year at or below 32 F;
   *   4.4 days a year at or above 90 F)
   * - https://www.weather.gov/safety/wind-mountain-valley (NWS: Santa Ana air comes from
   *   high pressure over the dry desert Southwest, flows west to low pressure off the coast,
   *   most common September through May, warms as it descends and feels warm or hot)
   * - https://danapointharbor.com/dana-point-festival-of-whales/ (Festival of Whales in
   *   March at the harbor, marking the California gray whale migration)
   * Dropped: humidity (no Dana Point or Orange County coastal row in NOAA's table),
   * dolphin counts and trademark claims (operator marketing, not official).
   */
  {
    slug: 'dry-eye-relief-in-dana-point',
    title: 'Dry eye relief in Dana Point, California',
    description:
      'Ocean wind, salt spray, harbor glare and the odd Santa Ana: what dries eyes in Dana Point, with NOAA numbers and habits that help.',
    category: 'local',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Dry eyes in Dana Point usually trace back to steady onshore breeze, salt spray, glare off the harbor and, a few times a year, hot and very dry Santa Ana winds from the desert. Relief starts with wraparound sunglasses on the water, turning away from gusts, blinking fully during screen work and a lubricating drop used as its label directs. Working out what’s behind eye symptoms that don’t settle is an eye doctor’s job.`,
      },
      { h: 'Dana Point weather by NOAA’s numbers' },
      {
        p: `Dana Point doesn’t have its own long-term NOAA climate station, so the closest one with 1991–2020 normals is the cooperative station just up Coast Highway in Laguna Beach. Its record describes the coast you live on:`,
      },
      {
        list: [
          `A January normal high of 68.4°F and a low of 44.2°F.`,
          `August is the warmest month, with a normal high of 81.2°F.`,
          `About 12.68 inches of precipitation a year, most of it from December through March. February is the wettest month at 3.39 inches.`,
          `Almost nothing falls in summer: 0.11 inch in June, 0.11 in July and 0.02 in August.`,
          `Roughly one night a year at or below freezing, and about four days a year that reach 90°F.`,
        ],
      },
      {
        p: `Mild temperatures hide the eye side of that picture. A climate with very little rain for half the year and an ocean breeze nearly every afternoon is one where tears get steady, gentle wind across them. You won’t notice it the way you’d notice a blizzard, but a full afternoon on the bluffs or the jetty can leave eyes tight and scratchy by dinner.`,
      },
      { h: 'What Santa Ana winds do to your eyes' },
      {
        p: `The National Weather Service describes Santa Ana winds as air from high pressure over the dry desert Southwest flowing west toward low pressure off the California coast. The air warms as it drops out of the mountains, so it often feels warm or even hot, and the NWS says these events are most common from September through May. In Dana Point that means a fall or winter morning can swap the usual damp marine air for a dry wind blowing out to sea.`,
      },
      {
        p: `Santa Ana days are when local eyes tend to complain the most. The air pulls moisture from every surface, including the tear film, and the wind carries fine dust and ash from inland. On those days:`,
      },
      {
        list: [
          `Keep windows closed and let the home or car recirculate its air.`,
          `Wear glasses with side coverage if you walk the dog or ride along Del Obispo or the PCH bike lane.`,
          `Point car vents at your chest, not your face.`,
          `Run a clean humidifier in the bedroom; [does a humidifier help dry eyes](/guides/does-a-humidifier-help-dry-eyes) covers how.`,
        ],
      },
      { h: 'Out on the harbor: boating, paddling and whale watching' },
      {
        p: `Dana Point Harbor is the center of a lot of local life, and Dana Point Harbor’s own event pages describe the Festival of Whales each March as a celebration of the California gray whale migration along this coast. A whale watching trip, a morning on a paddleboard or an afternoon sail all put your face in moving air for hours, with sunlight bouncing up off the water at the same time. People squint against that glare, and a squint is a half-blink: the lids never fully close, so tears don’t get spread evenly.`,
      },
      {
        list: [
          `Polarized sunglasses cut reflected glare from the water and let you stop squinting.`,
          `A strap keeps them on when you lean over the rail to look for a spout.`,
          `Salt spray dries on lashes and lids. Rinse your face with fresh water back at the dock rather than rubbing your eyes on the boat.`,
          `Wash or sanitize your hands before you touch the bottle or your eyes. Rope, bait and sunscreen all end up on fingers.`,
        ],
      },
      { h: 'Daily routines on the coast that wear on eyes' },
      {
        list: [
          `Surf sessions at Doheny and Salt Creek, where wind and water both hit your face.`,
          `Walking the Headlands trails on a breezy afternoon.`,
          `Commuting up the I-5 with the air conditioning on high.`,
          `Working from home at a laptop on a bright patio, where screen focus cuts down your blink rate.`,
          `Evening bonfires on the beach, where smoke drifts straight across the circle.`,
        ],
      },
      {
        p: `None of these needs a drastic change. Sitting upwind of the fire pit, breaking up screen time with a look at the horizon and a few slow blinks, and keeping sunglasses in the car so they’re always at hand go a long way. For more on why screens matter, see [screens and your tear film](/guides/screens-and-your-tear-film).`,
      },
      { h: 'Where a lubricating drop fits' },
      {
        p: `Quell’s Drug Facts list its Uses as {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, which matters in a breeze that keeps pulling water off the eye. The active ingredients are {actives}, and the directions are {directions}. Read the full [Drug Facts](/drug-facts) first, including the caution about egg or bird allergies, because the formula contains emu oil.`,
      },
      {
        p: `On the water, the label’s handling line matters even more than at home: {tip}. Hold the bottle so it never brushes a deck, a cooler lid or the inside of a beach bag. Keep it in the shade, too. The label says {storage}, and a dark dry bag on a sunny deck can go past that. [Can you leave eye drops in a hot car](/guides/eye-drops-in-a-hot-car) covers the parking lot version of the same problem.`,
      },
      { h: 'Ordering to a Dana Point address' },
      {
        p: `Quell ships from Brentwood, Tennessee, to addresses in Dana Point and the rest of California. Shipping is {shipping} per order and free once you buy {freeBottles} bottles; no delivery date is promised, so reorder before the last bottle runs low. If you live in the harbor area or Capistrano Beach, include your unit or space number so the package doesn’t wander. The [Dana Point page](/eye-drops/dana-point-ca) and the [California page](/eye-drops/state/california) have the details.`,
      },
      { h: 'When to see an eye doctor instead' },
      {
        p: `Weather explains a lot, but not everything. If your eyes stay dry after a calm, damp week, if one eye feels much worse than the other, or if you get sand or a fish hook scrape that won’t settle, see an eye doctor rather than reaching for another drop. The label is plain about when to stop: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel dry in Dana Point?',
        a: `Near-constant ocean breeze, glare off the water and a summer with almost no rain all speed up tear evaporation. NOAA’s Laguna Beach normals show just 0.02 inch of rain in a typical August.`,
      },
      {
        q: 'Do Santa Ana winds dry out your eyes?',
        a: `They can. The National Weather Service describes Santa Ana air as coming from the dry desert Southwest and warming as it descends, so it pulls moisture from the eye’s surface faster than the usual marine air.`,
      },
      {
        q: 'What sunglasses help on a whale watching trip?',
        a: `Polarized, wraparound lenses cut the glare off the water and block wind from the sides. A retainer strap keeps them on while you lean over the rail.`,
      },
      {
        q: 'Does Quell ship to Dana Point, CA?',
        a: `Yes. Orders ship to California from Brentwood, Tennessee, for {shipping}, or free with {freeBottles} bottles. You can check out as a guest, and no arrival date is promised.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-12 for dry-eye-relief-in-golden-valley:
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USC00215838.csv
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USC00215838.csv
   *   (New Hope co-op station, at 45.01 N 93.38 W on Golden Valley's northern edge:
   *   Jan high 23.6 / low 7.0 F; Jul high 82.3 F; Dec snow 12.3 in; annual snow 54.3 in;
   *   156.0 nights at or below 32 F; 24.6 nights at or below 0 F; 71.7 days with a high
   *   at or below 32 F; 103.5 winter days with 1 in or more of snow on the ground;
   *   7,683 heating degree days)
   * - https://www.minneapolisparks.org/parks-destinations/parks-lakes/theodore_wirth_regional_park/
   *   (740.29 acres incl. 82.99 acres of water and 280 acres of golf; nearly two-thirds of
   *   the park lay in Golden Valley after the 1909 expansion; cross-country skiing,
   *   snowboarding, snowshoeing, sledding/tubing; more than five miles of off-road trails;
   *   Eloise Butler Wildflower Garden, the first public wildflower garden in the US)
   * Dropped: Golden Valley population and employer counts (no official figure checked today).
   */
  {
    slug: 'dry-eye-relief-in-golden-valley',
    title: 'Dry eye relief in Golden Valley, Minnesota',
    description:
      'Trail wind at Theodore Wirth, heated office air off I-394 and 156 freezing nights a year: dry eye relief for Golden Valley, MN.',
    category: 'local',
    addedOn: '2026-11-12',
    body: [
      {
        p: `In Golden Valley, dry, irritated eyes mostly come from winter: months of furnace-dried air at home and in the office, then cold wind on the ski trails or a snowy walk to the car. Relief means adding moisture indoors, shielding your eyes outside, blinking deliberately at a screen and using a lubricating drop as labeled. If symptoms persist, figuring out the cause and what to do about it belongs to an eye doctor.`,
      },
      { h: 'Golden Valley’s own weather record' },
      {
        p: `NOAA keeps a cooperative weather station in New Hope, right at Golden Valley’s northern edge, and its 1991–2020 normals describe the suburb more closely than an airport across the river would. They show:`,
      },
      {
        list: [
          `A January normal high of 23.6°F and a normal low of 7.0°F.`,
          `About 156 nights a year at or below freezing, and roughly 25 at zero or colder.`,
          `Around 72 days a year when the temperature never gets above 32°F.`,
          `54.3 inches of snow in a normal year, with December the snowiest month at 12.3 inches.`,
          `About 104 days a year with at least an inch of snow on the ground.`,
          `Roughly 7,683 heating degree days a year, NOAA’s measure of how hard furnaces have to work.`,
        ],
      },
      {
        p: `That last number is the one your eyes feel. Heating a house or office from single digits to 70°F lowers the air’s relative humidity sharply, because cold outdoor air holds very little water to begin with. Months of that air are why a lot of people here notice gritty eyes from Thanksgiving to March, then forget about it by June, when the July normal high is 82.3°F and the windows are open.`,
      },
      { h: 'Theodore Wirth Park in winter' },
      {
        p: `The Minneapolis Park and Recreation Board lists Theodore Wirth Regional Park at about 740 acres and notes that nearly two-thirds of it ended up in Golden Valley after the 1909 expansion. In winter it becomes the neighborhood’s ski area: the Park Board lists cross-country skiing, snowboarding, snowshoeing and sledding or tubing, plus more than five miles of off-road trails for biking, walking or snowshoes.`,
      },
      {
        p: `Skate skiing up and down the hills of a groomed loop is a great way to get through February, and it’s also a steady blast of cold air into open eyes. Your own speed adds to whatever wind is blowing, and bright snow makes you squint. A few habits help:`,
      },
      {
        list: [
          `Wear wraparound sunglasses or clear goggles even on gray days; they block wind as much as light.`,
          `Pull a buff or gaiter up to your cheekbones so you’re not turning your head to dodge the breeze.`,
          `When you stop at the top of a climb, close your eyes for a few seconds and blink slowly before setting off again.`,
          `Leave the eye drops in the car only if the car’s warm. Otherwise keep them in an inside pocket.`,
        ],
      },
      { h: 'Office parks along I-394 and Highway 55' },
      {
        p: `Plenty of Golden Valley’s workdays happen in the office buildings near I-394 and Highway 55, where sealed windows and forced-air heat are the norm. A desk under a ceiling diffuser gets a steady downdraft of warm, dry air from morning to evening. Pair that with spreadsheets or video calls, which reduce how often you blink, and the tear film has every reason to thin out by mid-afternoon.`,
      },
      {
        list: [
          `Ask facilities whether the vent above your desk can be redirected, or move your chair out of its path.`,
          `Set your monitor slightly below eye level so your lids cover more of the eye.`,
          `Take a lap of the building every hour; standing up resets your blinking.`,
          `Keep a small humidifier at the desk if your workplace allows one, and clean it on schedule.`,
        ],
      },
      {
        p: `The [screens and your tear film](/guides/screens-and-your-tear-film) guide explains why focused screen work matters so much.`,
      },
      { h: 'The winter commute' },
      {
        p: `Golden Valley sits just west of Minneapolis, and most commutes are short drives on Highway 100, Highway 55 or I-394. Short trips mean the car rarely warms up fully, so the defroster and heater run on high with the vents aimed at the windshield and your face. Once the glass clears, drop the airflow to the floor. If you scrape ice in the driveway at 7°F, give your eyes a minute to recover in the car before you start driving.`,
      },
      { h: 'How Quell fits in' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. The label’s Uses read {uses}, and its directions are {directions}. Look at the full [Drug Facts](/drug-facts) before you start; the caution about egg or bird allergies matters because one ingredient is emu oil.`,
      },
      {
        p: `Minnesota cold is a storage issue as much as an eye issue. The label says {storage}, and the New Hope normals put January lows well below that. A purse, desk drawer or nightstand is a better home than the glovebox from November to March.`,
      },
      { h: 'Getting Quell delivered in Golden Valley' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Minnesota addresses for {shipping} per order, with free shipping at {freeBottles} bottles. There’s no account to create, and unopened bottles can be refunded within {returnDays} days of delivery without being mailed back. In January, bring the box inside soon after it lands on the step. See the [Golden Valley page](/eye-drops/golden-valley-mn) and the [Minnesota page](/eye-drops/state/minnesota).`,
      },
      { h: 'When it’s time for an eye doctor' },
      {
        p: `If your eyes still feel dry once the furnace is off in May, or if dryness comes with pain, light sensitivity or blurred vision, book a visit with an eye doctor. The label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Golden Valley in the winter?',
        a: `Heated indoor air has low humidity, and NOAA’s New Hope normals show about 72 days a year that never climb above freezing, so furnaces run for months. Cold wind outdoors adds to the evaporation.`,
      },
      {
        q: 'How much snow does Golden Valley, MN get?',
        a: `NOAA’s 1991–2020 normals for the New Hope station, on Golden Valley’s northern edge, list 54.3 inches of snow a year, with December the snowiest month at 12.3 inches.`,
      },
      {
        q: 'Should I wear goggles cross-country skiing at Theodore Wirth?',
        a: `Wraparound sunglasses or clear goggles help on windy or bright days, because they block the air rushing past your face as well as the glare off the snow.`,
      },
      {
        q: 'Can I get Quell shipped to Golden Valley?',
        a: `Yes. Quell ships to Golden Valley from Brentwood, Tennessee, for {shipping}, or free with {freeBottles} bottles, and checkout doesn’t require an account.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-12 for dry-eye-relief-in-bristol-ct:
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USC00060973.csv
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USC00060973.csv
   *   (Burlington, CT co-op station, the town bordering Bristol to the north: elevation
   *   153.9 m; Jan high 36.3 / low 17.0 F; Jul high 83.7 F; annual snow 38.6 in, Feb 11.8,
   *   Jan 11.1; annual precip 53.46 in; 141.8 nights at or below 32 F; 27.0 days with a high
   *   at or below 32 F; 6,107 heating degree days)
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014740.csv
   *   (Hartford Bradley: annual snow 51.7 in)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (Hartford: Jan morning 73 / afternoon 57; Apr afternoon 45, the lowest month;
   *   annual afternoon 53)
   * - https://connecticuthistory.org/lake-compounce-bringing-amusements-to-the-states-residents-since-1846
   *   (opened to the public 1846; oldest continually operating amusement park in the US)
   * Dropped: Bristol's own elevation (no USGS figure fetched), ESPN staff numbers.
   */
  {
    slug: 'dry-eye-relief-in-bristol-ct',
    title: 'Dry eye relief in Bristol, Connecticut',
    description:
      'Hilltop winters, dry April afternoons, long screen shifts and summer days at Lake Compounce: dry eye relief for Bristol, CT, with NOAA data.',
    category: 'local',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Bristol’s dry-eye seasons are winter, when furnaces and woodstoves run for months in the hills of central Connecticut, and spring, when NOAA’s records show the region’s driest afternoons. Long screen shifts at local employers add to it. Relief comes from humidifying indoor air, blinking fully at work, shielding eyes outdoors and using a lubricating drop as labeled. Anything persistent is for an eye doctor to sort out.`,
      },
      { h: 'Bristol’s winters, from the station next door' },
      {
        p: `Bristol sits higher and farther west than Hartford, so the airport at Bradley isn’t a perfect match. NOAA’s cooperative station in Burlington, the town just to the north, sits about 154 meters up in the same hills, and its 1991–2020 normals show:`,
      },
      {
        list: [
          `A January normal high of 36.3°F and a low of 17.0°F.`,
          `About 142 nights a year at or below freezing.`,
          `27 days a year, on average, that never get above 32°F.`,
          `38.6 inches of snow a year, with February the snowiest month at 11.8 inches.`,
          `About 53.5 inches of total precipitation, spread fairly evenly through the year.`,
          `Roughly 6,107 heating degree days, a long, steady heating season.`,
        ],
      },
      {
        p: `That combination is a wet climate outdoors and a dry one indoors. Snow and rain keep the ground damp, but the air your furnace pulls in from a 17°F night holds very little moisture, and heating it makes the relative humidity inside drop further. By February, a lot of Bristol homes are dry enough that eyes, lips and skin all notice.`,
      },
      { h: 'Why April can feel worse than January' },
      {
        p: `NOAA’s comparative humidity table for Hartford, the nearest city it lists, shows an average afternoon relative humidity of 45 percent in April, the lowest of any month, against 57 percent in January. Spring sun warms the afternoon air faster than moisture arrives, and the March and April winds that dry out the yard dry out the surface of your eyes too. Pollen season overlaps with this stretch, and the irritation people feel then is often a mix of dust, wind and dryness.`,
      },
      {
        list: [
          `Keep a pair of sunglasses by the door for windy spring walks around Rockwell Park or the Federal Hill neighborhood.`,
          `Shower or wash your face after yard work so dust and pollen don’t sit on your lids while you sleep.`,
          `Don’t switch off the bedroom humidifier the minute the heat goes off; April afternoons are still dry.`,
        ],
      },
      { h: 'Screen-heavy jobs in Bristol' },
      {
        p: `ESPN’s campus is one of Bristol’s most familiar employers, and production, editing and broadcast work means hours of focused attention on monitors in climate-controlled rooms. The same pattern applies to manufacturing offices, healthcare billing and remote work at a kitchen table. When you concentrate on a screen, you blink less often and less completely, so the tear film has more time to thin between blinks.`,
      },
      {
        list: [
          `Every 20 minutes, look at something 20 feet away for about 20 seconds and blink slowly a few times.`,
          `Lower your monitor so your eyes look slightly down; more of the eye stays covered.`,
          `Turn the desk fan so it blows on your hands, not your face.`,
          `Use break time to walk outside, even in cold air, so you’re not in one room for eight hours.`,
        ],
      },
      {
        p: `More on this in [eye drops for computer users](/guides/eye-drops-for-computer-users).`,
      },
      { h: 'Summer at Lake Compounce' },
      {
        p: `Connecticut History, the state humanities council’s site, calls Bristol’s Lake Compounce the oldest continually operating amusement park in the United States, open every summer since 1846. A summer day there means sun, chlorinated water at the water park, and roller coaster wind in your face. NOAA’s Burlington normals put the July high at 83.7°F, so heat plays a part too.`,
      },
      {
        list: [
          `Wear goggles in the wave pool and on slides if water stings your eyes.`,
          `Rinse your face with fresh water after you leave the water park side.`,
          `Strap sunglasses on for rides where they’re allowed, or close your eyes on the fastest drops.`,
          `Don’t leave eye drops in a car baking in the parking lot all afternoon.`,
        ],
      },
      { h: 'How Quell can help' },
      {
        p: `The Uses on Quell’s label are {uses}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its active ingredients are {actives}. The directions say {directions}. Before your first drop, read the [Drug Facts](/drug-facts), including the line about egg or bird allergies.`,
      },
      {
        p: `In a Connecticut winter, the safest place for the bottle is indoors at room temperature; the label says {storage}. A car left out through the night on a hilly Bristol street in January will be far below that range.`,
      },
      { h: 'Ordering Quell to Bristol' },
      {
        p: `Quell ships to Connecticut from Brentwood, Tennessee. Each order is {shipping}, or free at {freeBottles} bottles, and you can check out as a guest. No delivery date is promised, so give yourself a margin before you run out. The [Bristol page](/eye-drops/bristol-ct) and the [Connecticut page](/eye-drops/state/connecticut) have more.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `Dryness that tracks the furnace or a long edit session is common. Dryness that sticks around in July, comes with pain or light sensitivity, or affects your vision is something to have looked at by an optometrist or ophthalmologist. {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry in Bristol, CT in the winter?',
        a: `Bristol’s heating season is long: NOAA’s normals for neighboring Burlington show about 142 nights a year at or below freezing. Heated indoor air has low relative humidity, which speeds up tear evaporation.`,
      },
      {
        q: 'What is the driest month in Hartford County?',
        a: `NOAA’s humidity table for Hartford shows April with the lowest average afternoon relative humidity, about 45 percent, compared with 57 percent in January.`,
      },
      {
        q: 'Is Lake Compounce the oldest amusement park in the US?',
        a: `Connecticut History, the state humanities council’s site, describes Lake Compounce in Bristol as the oldest continually operating amusement park in the United States, open every summer since 1846.`,
      },
      {
        q: 'Does Quell ship to Bristol, Connecticut?',
        a: `Yes. Orders ship to Connecticut from Brentwood, Tennessee, at {shipping} each, or free with {freeBottles} bottles. No delivery date is promised.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-12 for dry-eye-relief-in-greenfield-indiana:
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USC00123527.csv
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USC00123527.csv
   *   (Greenfield, IN co-op station: Jan high 34.8 / low 18.5 F; Jul high 84.3 F;
   *   annual precip 47.77 in; Jun wettest 5.69 in; annual snow 20.2 in; Jan 7.4 in;
   *   119.0 nights at or below 32 F; 34.0 days with a high at or below 32 F;
   *   5.4 nights at or below 0 F; 15.5 days at or above 90 F; 84.9 days with 0.1 in or more)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (Indianapolis: Jan morning 81 / afternoon 70; Apr afternoon 55; annual 82 / 60)
   * - https://www.greenfieldin.gov/278/History-of-Greenfield (county seat chosen
   *   April 11, 1828; town placed on the National Road; Riley statue in front of the
   *   courthouse, unveiled 1918; Riley born in Greenfield in 1849; school children
   *   parade to the statue with flowers during the October Riley Festival)
   * Dropped: wind speed normals (not in the co-op file), farm acreage.
   */
  {
    slug: 'dry-eye-relief-in-greenfield-indiana',
    title: 'Dry eye relief in Greenfield, Indiana',
    description:
      'Open-field wind, harvest dust and a furnace season that runs from October to April: dry eye relief for Greenfield and Hancock County, IN.',
    category: 'local',
    addedOn: '2026-11-12',
    body: [
      {
        p: `In Greenfield, dry eyes tend to follow the furnace from late fall to spring, plus the wind and dust that sweep across the open farm fields of Hancock County at planting and harvest. Relief comes from adding moisture indoors, shielding your eyes from wind and grit, taking blink breaks at screens and using a lubricating drop as the label directs. An eye doctor is the person to work out anything that lingers.`,
      },
      { h: 'Greenfield’s climate, from its own station' },
      {
        p: `Greenfield has a NOAA cooperative weather station of its own, so there’s no need to borrow numbers from Indianapolis. Its 1991–2020 normals say:`,
      },
      {
        list: [
          `January’s normal high is 34.8°F and its normal low is 18.5°F.`,
          `About 119 nights a year reach freezing, and around five drop to zero or below.`,
          `Some 34 days a year never climb above 32°F.`,
          `20.2 inches of snow fall in a normal winter, most of it in January.`,
          `47.77 inches of precipitation come in a year, with June the wettest month.`,
          `July’s normal high is 84.3°F, and about 15 days a year hit 90°F.`,
        ],
      },
      {
        p: `So Greenfield isn’t a dry place by rainfall. The issue is the long heating season. When 18°F air comes inside and the furnace warms it, the relative humidity in the room drops, and you spend most of the winter in that air. NOAA’s humidity table for Indianapolis, the nearest city it lists, puts the average January afternoon at 70 percent outdoors, but that moisture doesn’t survive being heated to 70°F.`,
      },
      { h: 'Wind and dust across Hancock County fields' },
      {
        p: `Head out of town on any county road and the land opens into flat fields of corn and soybeans with very little to break the wind. In spring, tillage and planting lift fine soil into the air; in fall, combines throw chaff and dust across the roads. Anyone who farms, drives a tractor, coaches outdoor sports or just walks the Pennsy Trail on a breezy day gets that grit at eye level.`,
      },
      {
        list: [
          `Close the cab or truck windows when you pass a working field.`,
          `Wear safety glasses with side shields for anything that kicks up dust, including mowing.`,
          `Rinse your face with clean water after a dusty job before you touch your eyes.`,
          `Wash your hands before you handle eye drops, every time.`,
        ],
      },
      {
        p: `If dust is part of your workday, [dry eyes for outdoor workers](/guides/dry-eyes-for-outdoor-workers) goes further.`,
      },
      { h: 'The National Road commute' },
      {
        p: `The city’s own history notes that Greenfield was placed on the National Road, today’s US 40, and many residents now drive west along it or I-70 into Indianapolis every morning. Thirty minutes or more with the heater on high, the low winter sun in your eyes on the way home, and the concentration of highway driving all lower your blink rate. Aim the vents at the floor and the windshield, keep sunglasses in the car for the evening drive west into the sunset, and pull over rather than fiddling with a bottle at 70 mph.`,
      },
      { h: 'Riley Festival weekend and fall outdoors' },
      {
        p: `James Whitcomb Riley was born in Greenfield in 1849, and the city’s history page describes school children parading to his statue in front of the courthouse with flowers during the Riley Festival each October. Festival weekend means hours outdoors on Main Street, often in a cool, breezy fall wind, with smoke from food vendors drifting through the crowd. Sunglasses, standing upwind of the grills and a break indoors now and then make the day easier on your eyes.`,
      },
      { h: 'How Quell fits a Greenfield routine' },
      {
        p: `Quell’s label lists its Uses as {uses}. The formula is designed to reinforce the tear film’s oil layer to help reduce moisture loss, with {actives} as its active ingredients. Follow the directions: {directions}. The full [Drug Facts](/drug-facts) include a caution about egg or bird allergies, worth reading before the first drop.`,
      },
      {
        p: `Storage matters in a Hancock County winter. The label says {storage}, and a pickup parked at a job site through a January day will get colder than that. Keep the bottle in a coat’s inner pocket, a lunch bag in the cab, or at home on the nightstand.`,
      },
      { h: 'Ordering to Greenfield and Hancock County' },
      {
        p: `Quell is sent from Brentwood, Tennessee, to Indiana addresses. Shipping costs {shipping} per order and is free with {freeBottles} bottles. Rural route and farm addresses work as long as the street address is complete, and no arrival date is promised. The [Greenfield page](/eye-drops/greenfield-in) and the [Indiana page](/eye-drops/state/indiana) have the details.`,
      },
      { h: 'Signs it’s more than the weather' },
      {
        p: `Grit that keeps scratching after you’ve rinsed, a sudden change in vision, or dryness that carries on into the humid days of June all mean it’s time to see an optometrist or ophthalmologist, not to keep adding drops. {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes dry in Greenfield, Indiana?',
        a: `Most of it is the heating season: NOAA’s Greenfield normals show about 119 nights a year at or below freezing, so furnaces run for months and dry the indoor air. Wind and field dust add to it at planting and harvest.`,
      },
      {
        q: 'How cold does Greenfield, Indiana get in January?',
        a: `NOAA’s 1991–2020 normals for the Greenfield station give a January normal high of 34.8°F and a normal low of 18.5°F.`,
      },
      {
        q: 'How do I keep field dust out of my eyes?',
        a: `Close vehicle windows near working fields, wear safety glasses with side shields for dusty jobs, and rinse your face with clean water before touching your eyes.`,
      },
      {
        q: 'Can I order Quell to Greenfield, IN?',
        a: `Yes. Quell ships to Indiana from Brentwood, Tennessee, for {shipping}, or free with {freeBottles} bottles. You don’t need an account to check out.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-12 for dry-eye-relief-in-idaho-falls:
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00024145.csv
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00024145.csv
   *   (Idaho Falls Fanning Field: station elevation 1,441.4 m; Jan high 28.7 / low 12.1 F;
   *   Jul high 86.6 / low 49.3 F; annual precip 10.07 in; Jul 0.46 in; 182.3 nights at or
   *   below 32 F; 14.8 nights at or below 0 F; 56.2 days with a high at or below 32 F;
   *   26.4 days at or above 90 F; 7,792 heating degree days)
   * - https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (Pocatello, nearest Idaho city listed: Jul afternoon 23, Aug afternoon 22,
   *   Jan afternoon 73)
   * - https://visitidaho.org/things-to-do/rail-to-trail/idaho-falls-greenbelt/ (falls
   *   about 600 feet wide across the Snake River; greenbelt on both banks)
   * Dropped: wind speed figures (no official normals page fetched); USGS city elevation
   * (sources disagreed; used NOAA's station elevation instead).
   */
  {
    slug: 'dry-eye-relief-in-idaho-falls',
    title: 'Dry eye relief in Idaho Falls, Idaho',
    description:
      'High-desert air, 10 inches of rain a year and afternoons near 22 percent humidity in summer: dry and itchy eye relief for Idaho Falls.',
    category: 'local',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Idaho Falls sits on the high desert of the upper Snake River Plain, where the air is thin, dry for most of the year and often windy. Eyes feel dry and itchy in the low-humidity summer afternoons and again in winter, when furnaces run for months. Relief means protecting eyes from sun and wind, adding indoor moisture, blinking fully at screens and using a lubricating drop as labeled. Persistent symptoms belong with an eye doctor.`,
      },
      { h: 'How dry Idaho Falls really is' },
      {
        p: `NOAA’s 1991–2020 normals for the Idaho Falls airport at Fanning Field put the station about 1,441 meters, or roughly 4,730 feet, above sea level, and describe a climate that’s dry in every season:`,
      },
      {
        list: [
          `Just 10.07 inches of precipitation in a normal year.`,
          `July, the hottest month, averages only 0.46 inch, with a normal high of 86.6°F.`,
          `July nights fall to a normal low of 49.3°F, a daily swing of more than 37 degrees.`,
          `January’s normal high is 28.7°F and its normal low is 12.1°F.`,
          `About 182 nights a year at or below freezing, and close to 15 at zero or colder.`,
          `Around 56 days a year when the high stays at or below 32°F.`,
        ],
      },
      {
        p: `NOAA’s comparative humidity table doesn’t list Idaho Falls, but Pocatello, the nearest Idaho city it does list, averages an afternoon relative humidity of 23 percent in July and 22 percent in August. Air that dry pulls water from the surface of your eyes from sunrise to sunset, which is why itchy, scratchy eyes are so common here in summer even for people who never noticed them elsewhere.`,
      },
      { h: 'What to do for itchy eyes in Idaho Falls' },
      {
        p: `Itching that comes with dry, windy days is often the eye’s surface reacting to dryness and the dust that rides along with the wind. Rubbing feels good for a moment but makes things worse. Instead:`,
      },
      {
        list: [
          `Rinse your face with cool water after time outdoors, eyes closed.`,
          `Hold a clean, cool, damp washcloth over closed lids for a few minutes.`,
          `Wash your hands before touching your eyes or the bottle.`,
          `Change pillowcases more often in dusty or windy stretches.`,
          `See an eye doctor if itching comes with discharge, swelling, pain or vision changes.`,
        ],
      },
      { h: 'Altitude, sun and the Snake River' },
      {
        p: `The city grew up around the river, and Visit Idaho, the state tourism site, describes the falls as about 600 feet wide across the Snake, with the greenbelt running along both banks. Walking or biking the greenbelt is one of the easiest ways to get outside here, and it also puts you in direct sun with water reflecting light back up at you. At more than 4,700 feet, there’s less atmosphere overhead to soften that sunlight.`,
      },
      {
        list: [
          `Wear sunglasses with UV protection, even on cool spring days.`,
          `Pick wraparound frames for biking, where your speed adds to the wind.`,
          `Bring water; general dehydration on hot, dry days doesn’t help your eyes.`,
        ],
      },
      {
        p: `For more on why thin, dry air matters, see [dry air, wind and altitude](/guides/dry-air-wind-and-altitude).`,
      },
      { h: 'Winter in eastern Idaho' },
      {
        p: `NOAA counts about 7,792 heating degree days a year at Fanning Field, a heating season that starts in fall and runs deep into spring. Heated air that began at 12°F holds very little water, so homes and offices get very dry. Many people here also work long hours indoors at screens, whether at a desk in town or out at the Idaho National Laboratory site. Indoors, a clean humidifier in the bedroom, monitor placement slightly below eye level and regular blink breaks make a difference. Outdoors, ski goggles at Kelly Canyon or on a snowmobile trail block wind that would otherwise go straight across your eyes.`,
      },
      { h: 'Using Quell in a high-desert climate' },
      {
        p: `Quell’s Uses are {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the problem dry desert air creates. The directions are {directions}; the label doesn’t ask for more drops because the air is drier. The active ingredients are {actives}, and the full [Drug Facts](/drug-facts) include a caution for anyone with egg or bird allergies.`,
      },
      {
        p: `Idaho Falls is hard on storage at both ends of the year. The label says {storage}. A truck in a July parking lot climbs above that range, and a January night drops far below it, so carry the bottle with you rather than leaving it in the vehicle.`,
      },
      { h: 'Getting Quell in Idaho Falls' },
      {
        p: `Quell ships from Brentwood, Tennessee, to Idaho addresses. It’s {shipping} per order, or free with {freeBottles} bottles, with guest checkout and no promised delivery date. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back. The [Idaho Falls page](/eye-drops/idaho-falls-id) and the [Idaho page](/eye-drops/state/idaho) have the details.`,
      },
      { h: 'When to call an eye doctor' },
      {
        p: `Dryness that follows the wind and the furnace is expected here. Eyes that stay irritated after a calm, cool week, eye pain, or any change in your vision call for an optometrist or ophthalmologist. The label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Idaho Falls?',
        a: `Idaho Falls gets about 10 inches of precipitation a year, by NOAA’s normals, and sits above 4,700 feet. Summer afternoons in nearby Pocatello average about 22 to 23 percent humidity, and long winters bring dry, heated indoor air.`,
      },
      {
        q: 'What can I do for itchy eyes in Idaho Falls?',
        a: `Avoid rubbing, rinse your face with cool water after time in wind and dust, and use a cool, damp washcloth over closed lids. If itching comes with pain, swelling, discharge or vision changes, see an eye doctor.`,
      },
      {
        q: 'What is the elevation of Idaho Falls?',
        a: `NOAA lists its Idaho Falls weather station at Fanning Field at about 1,441 meters, roughly 4,730 feet above sea level.`,
      },
      {
        q: 'Does Quell ship to Idaho Falls, ID?',
        a: `Yes. Quell ships to Idaho from Brentwood, Tennessee, for {shipping}, or free with {freeBottles} bottles. No arrival date is promised, so order before you run out.`,
      },
    ],
  },

  /*
   * Source checked 2026-11-12: https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.151
   * (b) first aid supplies readily available; (c) eye and body flushing facilities where
   * injurious corrosive materials are used.
   */
  {
    slug: 'eye-drops-for-an-office-first-aid-kit',
    title: 'Eye drops for an office first aid kit',
    description:
      'Should a workplace first aid kit hold eye drops? How lubricating drops differ from eyewash, why bottles shouldn’t be shared, and how to stock them.',
    category: 'ordering',
    addedOn: '2026-11-12',
    body: [
      {
        p: `An office first aid kit can include lubricating eye drops, but only as sealed, single-person bottles that each employee keeps once opened, never as one shared bottle. Drops like Quell are for dryness and irritation, not for flushing chemicals or debris out of an eye; that’s the job of eyewash, which OSHA requires near corrosive materials. Store the spare bottles at room temperature and check the label’s cautions before handing one out.`,
      },
      { h: 'Are there eye drops in a first aid kit?' },
      {
        p: `Often not. A typical workplace kit is built around cuts, burns and sprains: bandages, gauze, antiseptic wipes, gloves, cold packs, maybe a small bottle of sterile eyewash. Lubricating drops are a comfort item rather than a first aid one, so they’re usually added by whoever manages the office supplies after people start asking for them, especially once the heat comes on in winter.`,
      },
      {
        p: `OSHA’s first aid rule for general industry, 29 CFR 1910.151, says that where there’s no infirmary, clinic or hospital close by, someone must be trained to give first aid and “adequate first aid supplies” must be readily available. The rule doesn’t list specific items, so whether drops belong in your kit is a decision for your employer, not a legal requirement either way.`,
      },
      { h: 'First aid eye wash solution vs. lubricating drops' },
      {
        p: `These two products sit near each other on a pharmacy shelf and do completely different jobs.`,
      },
      {
        list: [
          `Eyewash is a large volume of sterile solution meant to flush something out of the eye: dust, a splash of cleaner, a speck of debris. You pour it, often a lot of it.`,
          `A lubricating drop is a single drop placed in the eye to ease dryness or irritation. Quell’s label lists its Uses as {uses}.`,
          `Section (c) of the same OSHA rule says that where eyes may be exposed to injurious corrosive materials, suitable facilities for quick drenching or flushing must be provided in the work area. A bottle of lubricating drops is never a substitute for that.`,
        ],
      },
      {
        p: `If someone gets a chemical in their eye, flush first and get medical help. If someone has something stuck in the eye, or the eye is injured, don’t put drops in it; get them to a doctor.`,
      },
      { h: 'Why one shared bottle doesn’t work' },
      {
        p: `A multi-dose bottle is meant for one person. Quell’s label instruction is {tip}, and in practice tips do brush lashes and lids, especially when people put drops in at a desk in a hurry. Once a tip has touched one person’s eye area, passing it to a coworker spreads whatever was on it. Quell is preservative-free, so keeping each tip clean and each bottle with one person matters all the more.`,
      },
      {
        p: `The fix is simple: stock sealed bottles, and when someone needs drops, they take a whole bottle and keep it. Ask them to write their name on the carton. The [why you should never touch the bottle tip](/guides/do-not-touch-the-tip) guide explains the contamination problem in more detail.`,
      },
      { h: 'How many bottles to buy for an office' },
      {
        p: `There’s no formula, but a few questions get you close:`,
      },
      {
        list: [
          `How many people have asked? Start with that number plus one or two.`,
          `Is it winter? Heated offices and screen-heavy work bring more requests.`,
          `Are you buying for a satellite office or a warehouse break room too? Each location needs its own supply.`,
        ],
      },
      {
        p: `Each Quell bottle holds {size}. Shipping is {shipping} per order, and an order of {freeBottles} or more bottles ships free, so a single larger order usually costs less to ship than several small ones. There are no promo codes or subscriptions, and one optional reminder email may arrive later when it might be time to reorder. [How many bottles of eye drops should I order?](/guides/how-many-bottles-to-order) covers household quantities.`,
      },
      { h: 'Ordering for the office' },
      {
        list: [
          `Use guest checkout; no business account is needed. The buyer must be 18 or older.`,
          `Put the company name on the address line meant for the suite or unit, next to the suite number, so the box reaches the right desk.`,
          `Use an email address you check, since the order confirmation and shipping updates go there.`,
          `Quell ships only within the US, from Brentwood, Tennessee, and no delivery date is promised.`,
        ],
      },
      {
        p: `If you’re shipping to the office for the first time, [can I ship eye drops to my work address](/guides/shipping-eye-drops-to-your-work-address) covers mailrooms and front desks.`,
      },
      { h: 'Storing eye drops at the office' },
      {
        p: `The label says {storage}. Most offices sit comfortably in that range, but a few spots don’t:`,
      },
      {
        list: [
          `A sunny windowsill in summer.`,
          `The shelf above the coffee maker or next to a microwave.`,
          `A supply closet that shares a wall with a server room.`,
          `A loading dock or unheated storage room in winter.`,
          `A company vehicle’s glovebox.`,
        ],
      },
      {
        p: `A closed drawer or cabinet in a regular room is the easy answer. Keep the bottles in their cartons so the Drug Facts stay with them, and don’t keep using a bottle if it looks different from how it arrived. The label says {doNotUse}.`,
      },
      { h: 'Before you hand a bottle to a coworker' },
      {
        p: `Quell carries a caution that matters in a workplace where you don’t know everyone’s history: {warnings}. The formula contains emu oil. Point anyone who takes a bottle to the [Drug Facts](/drug-facts) so they can check for themselves. The label also doesn’t cover contact lenses or use with other eye drops; anyone in that situation should ask their eye doctor or pharmacist first.`,
      },
      {
        p: `And the stop-use line is worth repeating to the person who asked: {stopUse} A coworker whose eye is painful, injured or suddenly not seeing clearly needs a doctor, not a drop from the supply cabinet.`,
      },
      { h: 'If the office doesn’t use them' },
      {
        p: `Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. Opened bottles can’t be refunded. If an order arrives damaged, wrong or with a broken seal, it’s replaced; call {phone} during {hours}.`,
      },
    ],
    faq: [
      {
        q: 'Are there eye drops in a first aid kit?',
        a: `Usually not. Standard workplace kits tend to carry sterile eyewash for flushing the eye, if anything. Lubricating drops are something an employer can add for comfort, ideally as sealed bottles each person keeps.`,
      },
      {
        q: 'Is eyewash the same as eye drops?',
        a: `No. Eyewash is a larger amount of sterile solution for flushing something out of the eye. Lubricating eye drops are used a drop at a time to ease dryness or irritation and are not for flushing chemicals.`,
      },
      {
        q: 'Does OSHA require eye drops at work?',
        a: `OSHA’s 29 CFR 1910.151 requires adequate first aid supplies and, where corrosive materials could reach the eyes, facilities for quickly flushing them. It doesn’t require lubricating eye drops.`,
      },
      {
        q: 'Can coworkers share a bottle of eye drops?',
        a: `They shouldn’t. A multi-dose bottle’s tip can pick up germs from one person’s eye area and pass them on. Stock sealed bottles and let each person keep their own.`,
      },
    ],
  },

  {
    slug: 'ordering-eye-drops-after-you-move',
    title: 'Ordering eye drops after you move',
    description:
      'Just moved? How to make sure your next eye drop order goes to the new address, not the old one, and what to do if you catch a mistake late.',
    category: 'shipping',
    addedOn: '2026-11-12',
    body: [
      {
        p: `After a move, the main risk with an eye drop order is the old address coming back. Quell’s checkout remembers guest details in the browser you used before, so it may fill in your previous address. Type the new street address, unit number, city, state and ZIP before you pay, check the confirmation email, and call right away if anything’s wrong.`,
      },
      { h: 'Why your old address shows up at checkout' },
      {
        p: `Quell doesn’t use customer accounts. When you check out as a guest, your name, address, email and phone are saved in your own browser, on your own device, so the next order fills them in for you. That’s handy until you move. The browser has no idea you’ve changed addresses, so it offers the last one you typed.`,
      },
      {
        p: `Because the details live on each device separately, your phone may remember one address and your laptop another, depending on which you ordered from last. [Why checkout remembers your details](/guides/checkout-remembers-your-details) explains how that storage works and what’s never kept, like card numbers.`,
      },
      { h: 'How to update your shipping address on a new order' },
      {
        list: [
          `Add your bottles to the cart as usual.`,
          `On the checkout form, clear the remembered street address and type the new one.`,
          `Put any apartment, unit or suite number on its own line, not squeezed onto the street line.`,
          `Change the city, state and ZIP; checkout asks for the state and ZIP separately, and a ZIP from the old town is an easy slip.`,
          `Update your phone number if it changed with the move.`,
          `Read the whole address once more before you pay.`,
        ],
      },
      {
        p: `If someone else ordered from that browser before you, or you want a clean slate, use the “Not you? Clear details” link on the cart page. It wipes the remembered details so you start fresh.`,
      },
      { h: 'Mail forwarding isn’t a backup plan' },
      {
        p: `Setting up mail forwarding is worth doing when you move, but don’t rely on it for a package you need. Forwarding adds steps, and not every package is handled the same way. Put the new address on the order itself. If a box does go to the old place, the people who live there now may or may not pass it along, and the [terms](/terms) say the shop isn’t responsible for delays caused by an incorrect address.`,
      },
      { h: 'New apartments and new buildings' },
      {
        p: `Moving into an apartment adds a few details people forget in the first weeks:`,
      },
      {
        list: [
          `The unit number, including any letter or floor prefix the building uses.`,
          `Your name on the mailbox or the building’s package system, so a box with your name gets matched to your unit.`,
          `Brand-new construction: some new addresses take time to show up in mapping and delivery systems. If that’s you, add a nearby cross street to the second line.`,
          `A package room or locker: check where deliveries land in your building so you’re not hunting for a box later.`,
        ],
      },
      {
        p: `[Getting eye drops delivered to an apartment](/guides/eye-drops-delivered-to-an-apartment) goes further on lockers and package rooms.`,
      },
      { h: 'Check the confirmation email' },
      {
        p: `As soon as you pay, a confirmation email arrives at the address you gave. It shows where the order is going. Reading that one email is the quickest way to catch an old address. If your email changed in the move too, make sure you typed the current one, because the confirmation, shipping updates and any reorder reminder all go there.`,
      },
      { h: 'What if I already ordered to my old address?' },
      {
        p: `Call {phone} as soon as you notice, during {hours}, with your order number ready. The earlier you call, the better the chance of catching it before the package leaves Brentwood, Tennessee. Once it’s with the carrier, it goes where the label says. [What if I entered the wrong shipping address?](/guides/wrong-shipping-address) covers what happens next, including following it with the tracking link.`,
      },
      { h: 'Moving to a different state' },
      {
        p: `Quell ships to addresses in the United States, so a move from one state to another doesn’t change whether you can order. Shipping is {shipping} per order wherever you are, or free with {freeBottles} or more bottles. No delivery date is promised, and a new town can mean a different route and different timing than you’re used to, so order with a little more margin than usual for the first few months.`,
      },
      {
        p: `Moving abroad is different: Quell doesn’t ship outside the US. Stock up before you go, and check the destination country’s rules on bringing medicine with you.`,
      },
      { h: 'Your eye drops during the move itself' },
      {
        p: `Moving days are hard on eyes: dust from boxes and closets, long drives, late nights unpacking with a box cutter in one hand and your phone flashlight in the other. They’re also hard on bottles. The label says {storage}, and a moving truck or a car packed for a cross-country drive can go well outside that range in summer or winter.`,
      },
      {
        list: [
          `Pack the bottle you’re using in a bag that rides with you, not in a box on the truck.`,
          `Label one box “open first” with the toothbrushes, chargers and eye drops.`,
          `Wash your hands before using drops after a day of handling dusty boxes.`,
          `Don’t use a bottle that’s changed color; the label says {doNotUse}.`,
        ],
      },
      { h: 'When the box arrives at the new place' },
      {
        p: `Open it and check that the bottles look the way they should. {appearance} If the order is damaged, wrong or has a broken seal, it’s replaced, and unopened bottles can be refunded within {returnDays} days of delivery without being sent back.`,
      },
    ],
    faq: [
      {
        q: 'Why does checkout still show my old address?',
        a: `Guest details are saved in your browser from your last order, so checkout fills in the address you used then. Clear it and type your new address before you pay.`,
      },
      {
        q: 'How do I change my shipping address on an eye drop order?',
        a: `Before paying, replace the remembered address on the checkout form with your new one, including unit, city, state and ZIP. If you’ve already paid, call {phone} during {hours} with your order number as soon as possible.`,
      },
      {
        q: 'Will mail forwarding send my eye drops to my new address?',
        a: `Don’t count on it. Put the new address on the order itself, because forwarding can add steps and delay, and a package sent to the old address may not reach you.`,
      },
      {
        q: 'Can I order Quell if I moved out of the country?',
        a: `No. Quell ships only to US addresses. If you’re moving abroad, buy what you need before you leave and check the new country’s rules for bringing medicine in.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-when-cooking-holiday-dinner',
    title: 'Dry eyes when cooking holiday dinner',
    description:
      'Oven blasts, smoke, steam and onion fumes: why a long day of holiday cooking leaves eyes dry and stinging, and how to get through it comfortably.',
    category: 'seasonal',
    addedOn: '2026-11-12',
    body: [
      {
        p: `A holiday cooking day dries and irritates eyes in several ways at once: blasts of hot, dry air every time the oven opens, smoke from roasting and searing, fumes from chopped onions, and hours in a warm, crowded kitchen. Stand to the side of the oven door, run the range hood, wash your hands before touching your eyes, and keep eye drops well away from the stove.`,
      },
      { h: 'Can cooking cause dry eyes?' },
      {
        p: `Cooking doesn’t change your eyes, but it changes the air right in front of them. Opening a 350°F oven to baste a turkey sends a wave of very hot, very dry air straight up to face height. Heat speeds evaporation, so the thin film of tears on your eyes thins out faster for a few moments every time. Do that every 30 minutes across a six-hour roast and you can end the afternoon with eyes that feel gritty and tired.`,
      },
      {
        p: `A holiday kitchen also tends to run hot for hours with the house heating on, the oven on, several burners going and a dozen people breathing in the same few rooms. Warm air holds more moisture, but in winter the air started out dry, and the kitchen often doesn’t feel humid until the pasta water comes to a boil.`,
      },
      { h: 'Dry heat vs. steam' },
      {
        p: `Not all kitchen heat is the same for your eyes.`,
      },
      {
        list: [
          `Oven and broiler heat is dry. It feels like a hair dryer to the face and pulls moisture off your eyes.`,
          `Steam from pots and kettles is moist, but it’s also hot, and a face full of steam when you lift a lid can sting. Tilt lids away from you.`,
          `Searing, roasting and frying put smoke and fine droplets of oil into the air, which irritate the eye’s surface even when the air isn’t dry.`,
        ],
      },
      { h: 'Habits that help on a big cooking day' },
      {
        list: [
          `Step to the side and look away for a second when you open the oven, letting the first rush of heat pass.`,
          `Turn the range hood on before you start searing, not after the kitchen is already smoky.`,
          `Crack a window if the weather allows, or open a door to another room so air can move.`,
          `Take short breaks out of the kitchen; a few minutes in a cooler room lets your eyes recover.`,
          `Blink deliberately while you’re focused on knife work or reading a recipe on your phone, both of which lower your blink rate.`,
          `Drink water through the day; cooks often forget to.`,
        ],
      },
      { h: 'Why onions make your eyes sting' },
      {
        p: `Cutting an onion breaks open its cells and releases an irritant into the air that reaches your eyes within seconds. Your eyes respond the way they do to any irritant: stinging, then tears. That’s a reflex, not dryness, and lubricating drops aren’t labeled for it. Quell’s label lists its Uses as {uses}, which doesn’t include onion sting.`,
      },
      {
        p: `What does help with onions is ordinary kitchen practice: a sharp knife that cuts cleanly instead of crushing, chilling the onion for a while before you cut it, cutting near the range hood with the fan on, and keeping your face back from the board. The sting fades on its own within a few minutes once you step away.`,
      },
      { h: 'Washing your hands before eye drops' },
      {
        p: `Cooking puts everything on your fingers: raw poultry, hot peppers, garlic, butter, onion juice. Touching your eyes, or the bottle, with any of that on your hands is a bad idea. Hot pepper oil in particular can burn for a long time and is hard to rinse off skin.`,
      },
      {
        list: [
          `Wash your hands with soap and water, not just a rinse, before touching your eyes or the bottle.`,
          `Dry them on a clean towel, not the one you’ve been wiping the counters with.`,
          `Follow the label: {tip}. A kitchen counter is exactly the kind of surface it means.`,
          `Put drops in somewhere away from the cooking, like the bathroom, then go back to work.`,
        ],
      },
      {
        p: `[How to use eye drops as directed](/guides/how-to-use-eye-drops-as-directed) walks through the steps if you want a refresher.`,
      },
      { h: 'Keep the bottle away from the stove' },
      {
        p: `Quell’s label says {storage}. The area near a range or on top of a fridge can run warmer than the rest of the room, and the shelf above a stove gets hotter still. A bottle left on the counter beside the oven all afternoon may go above that range without you noticing. Keep it in your bag, in a bedroom or in a bathroom drawer while you cook. The same goes for the dining table if candles are lit nearby; [fireplaces, candles and dry eyes](/guides/fireplaces-candles-and-dry-eyes) covers that side of the evening.`,
      },
      { h: 'When a drop fits the day' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. If your eyes feel dry after a long cooking session, wash your hands, step out of the kitchen and follow the directions: {directions}. Read the [Drug Facts](/drug-facts) first if you haven’t, including the caution about egg or bird allergies.`,
      },
      {
        p: `Don’t use drops to rinse out something that splashed into your eye, such as hot oil, a cleaning product or pepper juice. Flush the eye with clean, lukewarm water and get medical help if pain or blurriness continues. And if a spatter burns your eye, that’s a job for a doctor, not for a lubricating drop. {stopUse}`,
      },
      { h: 'Planning ahead for the holidays' },
      {
        p: `If you know you’ll be cooking for a crowd, check that you have a bottle before the week of the meal. Quell ships from Brentwood, Tennessee, for {shipping}, or free with {freeBottles} bottles, and no delivery date is promised, so order early in the season. [Ordering eye drops early for the holidays](/guides/ordering-eye-drops-early-for-the-holidays) has more on timing.`,
      },
    ],
    faq: [
      {
        q: 'Can cooking cause dry eyes?',
        a: `Cooking can make eyes feel dry for a while. Hot, dry air from an open oven speeds tear evaporation, and smoke from roasting or frying irritates the eye’s surface.`,
      },
      {
        q: 'Do eye drops help when cutting onions?',
        a: `Lubricating eye drops aren’t labeled for onion sting, which is a reflex to an irritant released by the cut onion. A sharp knife, a chilled onion and a running range hood help more, and the sting passes in a few minutes.`,
      },
      {
        q: 'Should I wash my hands before putting in eye drops after cooking?',
        a: `Yes. Wash with soap and water first, especially after handling raw meat or hot peppers, and don’t let the bottle tip touch the counter or your fingers.`,
      },
      {
        q: 'Is it okay to keep eye drops in the kitchen?',
        a: `Keep them away from the stove, oven and the top of the fridge, which run warm. Quell’s label gives a storage range of {storage}.`,
      },
    ],
  },

  {
    slug: 'eye-drops-as-a-secret-santa-gift',
    title: 'Eye drops as a Secret Santa gift',
    description:
      'Thinking of eye drops for an office Secret Santa? When a bottle lands well, when it lands badly, what to pair it with, and what to check first.',
    category: 'seasonal',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Eye drops can work as a Secret Santa gift if the person you drew has mentioned dry or tired eyes, and if you add something more festive alongside. Without that hint, a health product can come across as a comment on how they look. Check the price against your group’s limit, and since you can’t ask about allergies without giving yourself away, include a note pointing to the label.`,
      },
      { h: 'Secret Santa is a different kind of gift' },
      {
        p: `Giving eye drops to a parent or a close friend is one thing: you know their habits, and they know you mean well. A Secret Santa draw often hands you someone you know only from meetings or the break room. The gift is anonymous, opened in front of coworkers, and usually comes with a spending limit. Each of those changes whether a bottle of eye drops is a good idea.`,
      },
      {
        p: `The general question of eye drops as a present is covered in [are eye drops a good gift?](/guides/are-eye-drops-a-good-gift). This guide is about the office exchange.`,
      },
      { h: 'When it lands well' },
      {
        list: [
          `They’ve said out loud, more than once, that their eyes are dry, especially near a vent or after long video calls.`,
          `You’ve seen them use eye drops at their desk.`,
          `The group has a “practical gifts” culture where people swap hand cream, good pens and desk snacks.`,
          `It’s one item in a small themed bundle, not the whole gift.`,
        ],
      },
      { h: 'When it lands badly' },
      {
        list: [
          `You don’t know them, and picked it because they “look tired.” That’s how they’ll read it.`,
          `The exchange is a White Elephant or Yankee Swap, where gifts get stolen and could end up with someone who has no use for drops.`,
          `They wear contact lenses. Quell’s label doesn’t cover lenses, so it may sit unused.`,
          `They’re under a doctor’s care for their eyes and already have prescribed drops. Adding another product is a question for their doctor.`,
        ],
      },
      { h: 'The allergy problem with anonymous gifts' },
      {
        p: `Quell’s label carries this caution: {warnings}. The formula contains emu oil. With a family gift you’d just ask. With a Secret Santa, asking “do you have an egg or bird allergy?” gives the game away. Two ways around it:`,
      },
      {
        list: [
          `Ask the organizer to check quietly, the way they might for food allergies before a cookie swap.`,
          `Include a card that says the drops contain emu oil and points them to the [Drug Facts](/drug-facts) before first use.`,
        ],
      },
      {
        p: `[Egg or bird allergy? Read this before Quell](/guides/egg-or-bird-allergy-and-quell) explains the label wording, if you want to read it yourself before deciding.`,
      },
      { h: 'Staying under the spending limit' },
      {
        p: `Most office exchanges set a cap. Check the current price of a {size} bottle on the [product page](/#buy) against yours. Shipping is {shipping} per order and free at {freeBottles} or more bottles, and that charge counts toward what you spend. If you’re ordering for more than one exchange, or picking up a bottle for yourself too, combining them into one order can make the shipping free. There are no promo codes or gift cards.`,
      },
      { h: 'What to pair it with' },
      {
        p: `A bottle on its own is small and a bit clinical. A little bundle makes it feel like a present:`,
      },
      {
        list: [
          `A soft microfiber cloth for glasses or screens.`,
          `A holiday mug and a few tea bags for the afternoon break.`,
          `A small desk plant or a pocket calendar.`,
          `A sleep mask for someone who mentions bad sleep and long screen hours.`,
          `A handwritten tag: “For the end of a long day of screens. Check the label before you use it.”`,
        ],
      },
      { h: 'Getting it to the office in time' },
      {
        p: `Quell ships from Brentwood, Tennessee, and no delivery date is promised, so order well before the exchange date rather than the week of. Shipping to your home and bringing it in keeps the surprise intact; a box addressed to the recipient at work does not. If you do ship to the office, put your own name on it. [Can I ship eye drops to my work address?](/guides/shipping-eye-drops-to-your-work-address) covers mailrooms.`,
      },
      { h: 'Wrapping and the color note' },
      {
        p: `Leave the carton sealed and wrap it as it came, so the recipient sees the full label. Quell’s solution is milky brown, which surprises people who expect clear drops. {appearance} A line on the card saying so saves an awkward moment if they open it at their desk.`,
      },
      {
        p: `Keep the wrapped gift at room temperature until the party. The label says {storage}, and a car trunk in December, or a box left in a cold lobby over the weekend, can fall below that.`,
      },
      { h: 'If it isn’t wanted' },
      {
        p: `Unopened bottles can be refunded within {returnDays} days of delivery without being sent back, but the refund goes to the person who paid, which is you. Since the recipient can’t do that anonymously, a short note like “happy to swap it for something else” gives them a way out. [What if they don’t want the gift?](/guides/if-a-gift-of-quell-is-not-wanted) has more.`,
      },
    ],
    faq: [
      {
        q: 'Is eye drops a good Secret Santa gift?',
        a: `It can be if the person has mentioned dry or tired eyes and you add something festive with it. If you don’t know them well, a health product can be read as a comment, so pick something else.`,
      },
      {
        q: 'What should I write on a card with eye drops as a gift?',
        a: `Keep it light and practical, and mention that the drops contain emu oil and that they should read the Drug Facts label before using them, because of the egg and bird allergy caution.`,
      },
      {
        q: 'Are eye drops okay for a White Elephant exchange?',
        a: `They’re a poor fit, because gifts in a White Elephant or Yankee Swap get traded and may end up with someone who wears contacts, has an allergy or just doesn’t need them.`,
      },
      {
        q: 'Can I get Quell in time for an office gift exchange?',
        a: `Order well ahead of the date. Quell ships from Brentwood, Tennessee, for {shipping}, or free with {freeBottles} bottles, and no delivery date is promised.`,
      },
    ],
  },

  /*
   * Source checked 2026-11-12: https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.1030
   * (d)(3)(x): masks with eye protection (goggles or glasses with solid side shields) or
   * chin-length face shields wherever splashes, spray, spatter or droplets of blood or
   * other potentially infectious materials may be generated.
   */
  {
    slug: 'dry-eyes-for-dental-hygienists',
    title: 'Dry eyes for dental hygienists and dentists',
    description:
      'Loupes, masks, bright operatory lights and hours of fixed focus: why dental hygienists and dentists get dry eyes, and how to use drops between patients.',
    category: 'using',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Dental hygienists and dentists often get dry, tired eyes because the work combines hours of close, magnified focus through loupes, which cuts down blinking, with bright operatory lights, masks that push exhaled air upward, and eyewear that traps warm air. A lubricating drop between patients, after gloves come off and hands are washed, plus deliberate blink breaks and good loupe fit, can make long clinic days more comfortable.`,
      },
      { h: 'Why dental work is hard on the eyes' },
      {
        p: `Few jobs ask the eyes to hold one focal distance as precisely as chairside dentistry. Scaling, probing and restorative work keep your gaze locked on a small, bright, wet field a short distance away for most of an hour, then the next patient sits down and it starts again. Concentration lowers the blink rate, and the blinks you do make tend to be partial, so the tear film isn’t refreshed as often or as completely as it would be in conversation.`,
      },
      { h: 'Loupes and magnification' },
      {
        p: `Loupes make the field bigger and let you sit up straighter, which is good for your neck. They also fix your working distance and your gaze direction, so you stare through the same window for long stretches. Through-the-lens loupes put the optics close to your eyes, and the frame can limit airflow around them.`,
      },
      {
        list: [
          `Have loupes fitted to your real working distance and declination angle, so you’re not straining or leaning to find focus.`,
          `Look up from the loupes between steps, at something across the room, and blink fully a few times.`,
          `Clean the lenses with the method the maker recommends; smudges make you squint and concentrate harder.`,
          `If you change prescriptions, have the loupes checked too.`,
        ],
      },
      { h: 'Masks, shields and warm, moving air' },
      {
        p: `OSHA’s bloodborne pathogens standard, 29 CFR 1910.1030, requires masks together with eye protection, such as goggles or glasses with solid side shields, or chin-length face shields, wherever splashes, spray, spatter or droplets of blood or other body fluids may be generated. In dentistry, that’s most procedures. The protection is essential, and it changes the air around your eyes.`,
      },
      {
        p: `A mask that doesn’t seal across the bridge of the nose sends warm exhaled air up behind your glasses or shield and across the eyes with every breath. Over a full schedule, that steady flow can dry the surface. A mask with a moldable nose wire, pinched to fit, keeps more of that air down. A face shield over loupes adds another layer of trapped, warm air.`,
      },
      { h: 'Operatory lights and screens' },
      {
        p: `The overhead operatory light is bright by design, and the loupe headlight many clinicians wear adds more. Bright light at close range encourages squinting, and a squint is a half-closed eye that doesn’t blink cleanly. Between patients, many offices now have you charting at a monitor, reviewing X-rays on screen or updating a periodontal chart, which is more focused screen time with fewer blinks. [Screens and your tear film](/guides/screens-and-your-tear-film) explains why that matters.`,
      },
      { h: 'When to use eye drops on a clinic day' },
      {
        p: `Never with gloves on, and never in the operatory with a patient in the chair. The sequence that fits a clinic’s hygiene routine is simple:`,
      },
      {
        list: [
          `Finish with the patient and remove gloves and eyewear following your office’s protocol.`,
          `Wash your hands with soap and water, or use hand sanitizer as your protocol allows, and let them dry.`,
          `Step to the staff area or a restroom, away from the aerosols of the operatory.`,
          `Put in your drop following the label, keeping the tip from touching your eye, lashes or fingers.`,
          `Give it a moment, then put on fresh PPE for the next patient.`,
        ],
      },
      {
        p: `Quell’s directions are {directions}, so plan them around natural gaps in the day: before the first patient, at lunch and near the end of the schedule. The label’s handling line is {tip}, which is second nature in a clinic but worth remembering when you’re rushing between rooms.`,
      },
      { h: 'Where to keep the bottle at work' },
      {
        p: `Not in the operatory, where it can pick up spatter and aerosol, and not near the sterilization area, where autoclaves and dryers run hot. The label says {storage}. A staff locker or a bag in the break room usually fits that range. Keep your bottle labeled with your name, and don’t share it with coworkers; a multi-dose tip that’s been near one person’s eye shouldn’t go near another’s.`,
      },
      { h: 'What Quell is and isn’t for' },
      {
        p: `The label lists Quell’s Uses as {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its active ingredients are {actives}. It isn’t eyewash. If something splashes into your eye during a procedure, such as a prophy paste spray, an etchant or a disinfectant, flush with the eyewash station right away and follow your office’s exposure protocol. The label doesn’t cover contact lenses or use with other eye drops; ask your own eye doctor or a pharmacist if either applies to you.`,
      },
      {
        p: `Read the full [Drug Facts](/drug-facts) before you start, including the caution about egg or bird allergies. If dryness keeps up on your days off, or your eyes hurt or your vision changes, stop and get it looked at: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists what not to wait on.`,
      },
      { h: 'Small habits that add up' },
      {
        list: [
          `Run a desk or counter humidifier in the break room in winter, if the office allows.`,
          `Point the operatory’s air vents away from your side of the chair.`,
          `Use the time while a patient rinses to close your eyes for a couple of seconds.`,
          `Drink water through the day; masks make it easy to forget.`,
        ],
      },
    ],
    faq: [
      {
        q: 'Why do dental hygienists get dry eyes?',
        a: `Long periods of focused, magnified work through loupes lower the blink rate, and masks, face shields and bright operatory lights add warm moving air and glare around the eyes.`,
      },
      {
        q: 'Can dental loupes cause eye strain?',
        a: `Loupes that don’t match your working distance or angle can make you strain to focus. A proper fit and regular breaks to look up and blink fully help.`,
      },
      {
        q: 'When can a dental hygienist use eye drops at work?',
        a: `Between patients, after removing gloves and washing your hands, away from the operatory. Then put on fresh PPE before the next patient.`,
      },
      {
        q: 'Should I use eye drops if something splashes in my eye during a procedure?',
        a: `No. Flush the eye at the eyewash station right away and follow your office’s exposure protocol. Lubricating drops aren’t for flushing an eye.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-when-gardening',
    title: 'Dry eyes when gardening',
    description:
      'Wind, dust, sun and soil on your hands: why a morning in the garden leaves eyes dry and gritty, and simple ways to keep them comfortable outdoors.',
    category: 'using',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Gardening can leave eyes dry and irritated because you spend hours outside in wind and sun, bent over beds where dust and pollen rise toward your face, often rubbing your eyes with soil on your hands. Wraparound sunglasses, a brimmed hat, working with the wind at your back and washing your hands before touching your eyes all help, and a lubricating drop used as labeled can ease dryness afterward.`,
      },
      { h: 'Why gardening dries out your eyes' },
      {
        p: `A garden bed looks calm, but your eyes are dealing with several things at once. Breeze moves across the eye’s surface and speeds up evaporation of the tear film. Sun makes you squint, and squinting means fewer complete blinks. Digging, raking, turning compost and running a leaf blower lift fine particles into the air at exactly the height of your face when you’re kneeling or bent over. And because your hands are busy, you tend to wipe your eyes with the back of a dirty glove.`,
      },
      { h: 'Bending over beds: dust at face level' },
      {
        p: `Standing up, your face is five feet above the soil. Kneeling at a raised bed or bending to weed puts it a foot or two away, right where loosened dirt, mulch dust and dried leaf bits drift. Dry soil in late summer is the worst, because it lifts with every pull of a weed.`,
      },
      {
        list: [
          `Water dry beds lightly the evening before you weed, so the soil holds together.`,
          `Turn so the breeze carries dust away from you rather than into your face.`,
          `Wear safety glasses or wraparound sunglasses when you dig, chip, trim hedges or use any power tool.`,
          `Open bags of potting mix, mulch or compost at arm’s length and away from your face.`,
          `Use a mower or blower with your back to the wind, and wear eye protection with side coverage.`,
        ],
      },
      { h: 'Sun, glare and the time of day' },
      {
        p: `Midday sun is hard on eyes in a garden: bright light from above, more bouncing off pale gravel, patio stone or water features. A wide-brimmed hat shades your eyes from above, and sunglasses with UV protection cut the rest. Working in the early morning or late afternoon helps twice over, since the light is gentler and the air is often calmer and cooler.`,
      },
      { h: 'Soil on your hands, then your eyes' },
      {
        p: `Garden soil carries everything you’d expect: compost, manure, bits of plant, fertilizer residue and whatever the neighbor’s cat left behind. Rubbing an itchy eye with a soil-covered finger pushes that onto the eye’s surface. Some plants, like euphorbias, have sap that irritates skin and eyes; wear gloves when you cut them.`,
      },
      {
        list: [
          `Keep a clean, damp cloth in your pocket for wiping sweat, instead of your sleeve or glove.`,
          `Wash your hands with soap and water before touching your eyes, your face or an eye drop bottle.`,
          `Scrub under your nails; soil hides there even after a rinse.`,
          `If soil or grit does get in your eye, rinse it with clean, lukewarm water rather than rubbing.`,
        ],
      },
      { h: 'Pollen season and irritated eyes' },
      {
        p: `Spring and early summer fill the air with pollen from trees, grasses and flowers, and gardeners are in the middle of it. Pollen and dust can leave eyes itchy and scratchy. Lubricating drops like Quell aren’t antihistamines, and their label doesn’t claim to address pollen. Quell’s label lists its Uses as {uses}, so it fits the dryness and irritation side of a day outdoors, not the allergic side.`,
      },
      {
        p: `A few habits keep pollen off your eyes: change clothes and wash your face when you come in, rinse your hair before bed after a long garden day, and keep sunglasses on outside. If itching is a regular seasonal problem, a pharmacist or doctor can suggest what fits. [Eye drops for itchy eyes](/guides/eye-drops-for-itchy-eyes) covers the label side of that question.`,
      },
      { h: 'Fertilizers, sprays and splashes' },
      {
        p: `Many garden products, from liquid fertilizer to weed killer and insecticidal sprays, can sting or harm eyes. Read each product’s own label before you use it, wear the eye protection it calls for, and spray on a calm day so drift doesn’t blow back at you. If something splashes into your eye, follow the first aid directions on that product’s label and flush with clean water; get medical help if pain or blurriness continues. Lubricating drops aren’t for rinsing chemicals out.`,
      },
      { h: 'Using eye drops after a garden session' },
      {
        list: [
          `Come inside, wash your hands and face, and let your eyes rest for a few minutes.`,
          `Follow the label directions: {directions}.`,
          `Follow the label’s handling line: {tip}. A potting bench is just the kind of surface it means.`,
          `Read the [Drug Facts](/drug-facts) first, including the caution about egg or bird allergies; Quell contains emu oil.`,
        ],
      },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the kind of loss wind and sun cause. For more on wind in particular, see [dry air, wind and altitude](/guides/dry-air-wind-and-altitude).`,
      },
      { h: 'Where to keep the bottle in summer' },
      {
        p: `Not in the garden shed, a greenhouse or a tote left in the sun. Sheds and greenhouses get hot fast, and the label says {storage}. Keep the bottle indoors and use it after you come in, with clean hands.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If you feel something stuck under your lid that rinsing doesn’t clear, if an eye was scratched by a branch or thorn, or if pain or blurriness follows a splash, see a doctor promptly. The label adds: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel gritty after gardening?',
        a: `Digging and weeding lift fine soil and plant dust toward your face, and wind and sun dry the eye’s surface at the same time. Rubbing with dirty hands adds to it.`,
      },
      {
        q: 'Should I wear safety glasses when gardening?',
        a: `For digging, hedge trimming, mowing, blowing leaves and spraying, yes. Wraparound glasses with side coverage keep out dust, chips and drift.`,
      },
      {
        q: 'Can I use lubricating eye drops for pollen?',
        a: `Lubricating drops are labeled for dryness and irritation, not for pollen. Quell’s label doesn’t claim to address allergies, so ask a pharmacist or doctor about seasonal itching.`,
      },
      {
        q: 'What should I do if soil gets in my eye?',
        a: `Don’t rub it. Rinse the eye with clean, lukewarm water, and see a doctor if it still feels like something is stuck or the eye hurts.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-for-lifeguards',
    title: 'Dry eyes for lifeguards',
    description:
      'Glare off the water, pool air, sun and hours of constant scanning: why lifeguards get dry eyes, and how to stay comfortable without losing focus.',
    category: 'using',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Lifeguards get dry, tired eyes because the job asks them to scan water without a break for long shifts, often while facing glare off the surface, outdoor sun and wind, or the warm, chemical-heavy air of an indoor pool. Polarized sunglasses, a hat, short rotations, a water bottle and a lubricating drop on breaks, used as labeled, help keep eyes comfortable without taking attention off the water.`,
      },
      { h: 'Scanning is hard work for the eyes' },
      {
        p: `Swimmers think of a lifeguard as someone sitting in a chair. Lifeguards know it’s steady, deliberate watching: sweeping the zone, counting heads, checking the bottom, then sweeping again. That kind of focus lowers the blink rate in the same way reading or screen work does, and an open, staring eye loses moisture faster. Add the pressure of knowing you can’t look away, and many guards hold their eyes wide open far longer than they would anywhere else.`,
      },
      {
        list: [
          `Blink deliberately at the end of each scan cycle, without breaking the pattern.`,
          `Keep your scanning pattern moving; fixed staring is harder on eyes than active sweeping.`,
          `Use your rotation off the stand to close your eyes briefly and look at something distant.`,
        ],
      },
      { h: 'Glare off the water' },
      {
        p: `Sunlight reflecting off a pool or lake comes back up at your eyes from below, where a cap brim can’t block it. Glare also hides what’s under the surface, which is a safety problem as much as a comfort one. People squint against it, and a squinting eye doesn’t blink fully.`,
      },
      {
        list: [
          `Polarized sunglasses cut reflected glare and let you see into the water more clearly.`,
          `Pick lenses that don’t distort color or depth, and test them from your stand before a full shift.`,
          `A brimmed hat handles light from above while the lenses handle light from the water.`,
          `Use a retainer strap so glasses stay on during a rescue.`,
          `Follow your facility’s rules on eyewear on the stand; some have specific policies.`,
        ],
      },
      { h: 'Outdoor pools and beaches' },
      {
        p: `Outdoor shifts add sun, heat and wind. A breeze across an open deck or a beach dries the eye’s surface continually, and sand or grit can blow into your eyes at the waterline. Rotating stands that face into the afternoon sun are especially tough. Drinking water through the shift helps your whole body cope with heat, and a wet towel over closed eyes during a break feels good and gives the eyes a rest.`,
      },
      { h: 'Indoor pool air' },
      {
        p: `Indoor pools have their own problems. The air is warm, and in many facilities it carries a sharp chemical smell from the chemicals used to keep the water clean, which can sting the eyes. Guards working indoors for a full shift often notice eye irritation more than swimmers who spend an hour there. If the air at your facility makes your eyes burn, tell a supervisor; ventilation and water chemistry are things the facility can check. Step outside or into a staff room on breaks for fresher air.`,
      },
      { h: 'Goggles vs. sunglasses for lifeguards' },
      {
        p: `On the stand, sunglasses are the usual choice because they let you see the whole zone and keep your peripheral vision. Swim goggles narrow your view and fog up out of the water. In the water, during training, in-water rotations or a rescue, goggles keep pool water out of your eyes and let you see underwater, so many guards keep a pair at the stand. [Dry eyes after swimming in a pool](/guides/dry-eyes-after-swimming) covers the swimmer’s side of chlorine and goggles.`,
      },
      { h: 'Lifeguard eyesight requirements' },
      {
        p: `Certification courses and employers set their own vision and fitness standards, and they vary. If you wear glasses or contacts, ask your training program or employer what they expect on the stand and in the water. Quell’s label doesn’t cover use with contact lenses, so if you wear them, ask your eye doctor before using any drop with them in.`,
      },
      { h: 'Using eye drops on a lifeguard shift' },
      {
        p: `Never on the stand. Putting in a drop takes your eyes off the water for several seconds and blurs your vision briefly, which no guard should do while on duty. Use your break or rotation instead:`,
      },
      {
        list: [
          `Get off the stand and out of your zone, with coverage handed over.`,
          `Rinse off sunscreen and pool water, and wash your hands with soap.`,
          `Follow the directions: {directions}.`,
          `Keep the tip clean: {tip}. A wet deck or lifeguard chair is exactly the kind of surface to avoid.`,
          `Give your vision a moment to settle before you go back up.`,
        ],
      },
      {
        p: `Quell’s Uses are {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, which suits long hours in sun and moving air. Read the full [Drug Facts](/drug-facts) before using it, including the caution about egg or bird allergies.`,
      },
      { h: 'Where to keep drops at the pool' },
      {
        p: `The guard room or a bag in the shade, not the stand, a deck chest in the sun or a car in the parking lot. The label says {storage}, and a lifeguard stand on a summer afternoon can get much hotter than that. [Can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car) covers the parking lot.`,
      },
      { h: 'When it’s more than a long shift' },
      {
        p: `Sand or grit that won’t rinse out, an eye that hurts, or vision that stays blurry after you’re out of the sun and water need a doctor’s look. {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do lifeguards get dry eyes?',
        a: `Constant scanning lowers the blink rate, and glare, sun, wind or warm indoor pool air all speed up tear evaporation over a long shift.`,
      },
      {
        q: 'Should lifeguards wear polarized sunglasses?',
        a: `Polarized lenses cut glare off the water, which makes it easier to see below the surface and reduces squinting. Check your facility’s eyewear rules first.`,
      },
      {
        q: 'Can a lifeguard use eye drops while on the stand?',
        a: `No. A drop briefly blurs vision and takes your eyes off the water. Use drops on a break or rotation, after handing over your zone and washing your hands.`,
      },
      {
        q: 'Can you be a lifeguard if you wear glasses?',
        a: `Vision standards are set by training programs and employers, and they vary, so ask yours what they require on the stand and in the water.`,
      },
    ],
  },

  {
    slug: 'eye-drops-before-or-after-makeup',
    title: 'Eye drops before or after makeup?',
    description:
      'Should eye drops go in before or after makeup? Put drops in first, wait a few minutes, then apply makeup, and keep the bottle tip away from your products.',
    category: 'using',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Put eye drops in before makeup. Start with clean hands and a bare face, use the drop as the label directs, then wait a few minutes so extra moisture can settle and any blur can clear before you apply eye makeup. If you need a drop later in the day, keep the bottle tip away from your lashes and makeup, and dab away any overflow gently rather than rubbing.`,
      },
      { h: 'Eye drops before makeup' },
      {
        p: `Doing drops first has a few practical advantages. A drop can make the eye water slightly or spill onto the lid and lashes, and on a bare face that just gets dabbed away. Applied over fresh liner or mascara, the same overflow can smudge, run or carry flecks of makeup into the eye. Drops can also blur your vision briefly, which is the last thing you want while drawing a line on your lid.`,
      },
      {
        list: [
          `Wash your hands with soap and water.`,
          `Put in your drop following the label: {directions}.`,
          `Close your eyes gently for a moment; don’t squeeze.`,
          `Blot any overflow from the lid with a clean tissue.`,
          `Wait a few minutes, until vision is clear and the lid feels dry, then start with eye makeup.`,
        ],
      },
      { h: 'Eye drops after makeup' },
      {
        p: `Sometimes you need a drop at 3 p.m. with a full face on. That’s fine with some care:`,
      },
      {
        list: [
          `Wash your hands first; makeup sponges and brushes leave residue on fingers too.`,
          `Tilt your head back and look up, so the drop lands on the eye rather than the lashes.`,
          `Hold the bottle far enough away that the tip can’t brush mascara or liner.`,
          `Dab the outer corner with the tip of a clean tissue if any drop runs; don’t wipe across the lid.`,
        ],
      },
      { h: 'Keep the bottle tip away from makeup' },
      {
        p: `The most important rule on Quell’s label for this situation is {tip}. Mascara wands, eyeliner pencils, makeup brushes and the inside of a cosmetic bag all count as surfaces. A tip that brushes a lash coated in mascara picks up product and whatever’s on it, then carries that back into the bottle and onto your eye next time. [Why you should never touch the bottle tip](/guides/do-not-touch-the-tip) explains more.`,
      },
      {
        p: `Store the bottle with its cap on, and keep it in a clean pocket of your bag rather than loose among compacts and pencils. If makeup ever gets on the tip, don’t wipe it with a tissue or your finger, which can make it worse. Ask a pharmacist whether that bottle is still okay to use.`,
      },
      { h: 'What the label says, and what it doesn’t' },
      {
        p: `Quell’s Drug Facts give its Uses as {uses} and its directions as {directions}. The label says nothing about makeup: not about timing, not about specific products, not about removing it. Anything in this guide beyond the directions and the tip warning is general, practical sense rather than label instruction. If you have questions about a specific cosmetic and your eyes, an eye doctor or pharmacist is the person to ask. The full [Drug Facts](/drug-facts) also carry a caution about egg or bird allergies, worth reading before you start.`,
      },
      { h: 'What to apply before eye makeup' },
      {
        p: `People often ask about the order of products around the eyes. A simple routine keeps the eye area clean: drops first on a bare face, then any eye cream or primer you use, kept on the lid and away from the lash line, then shadow, liner and mascara. Products applied right at the inner rim of the lid, the waterline, sit where tears flow, and flakes from them can end up in the eye. If your eyes feel dry or gritty, that’s a spot to keep clear.`,
      },
      { h: 'Removing makeup before bed' },
      {
        p: `Taking makeup off every night matters for eyes that feel dry. Mascara and liner left on through the night can flake into the eye while you sleep, and residue along the lash line is uncomfortable by morning.`,
      },
      {
        list: [
          `Use a gentle remover meant for the eye area and a soft pad.`,
          `Hold the pad on closed lids for a few seconds to loosen mascara, then wipe down and outward.`,
          `Rinse with lukewarm water afterward.`,
          `Wash your hands again before any evening drop.`,
        ],
      },
      {
        p: `If your eyes feel dry at night, [can you use eye drops before bed?](/guides/can-you-use-eye-drops-before-bed) covers timing.`,
      },
      { h: 'Don’t share makeup or drops' },
      {
        p: `Eye makeup and eye drops are both personal items. A mascara wand or liner pencil passed between friends, or a tester at a store counter, carries whatever was on the last person’s lashes. The same goes for a bottle of drops. Keep your own, replace mascara regularly, and stop using any eye product that’s been dropped on the floor or left open.`,
      },
      { h: 'When irritation isn’t just dryness' },
      {
        p: `If your eyes sting, swell or itch right after you try a new product, take it off, rinse your face, and stop using that product. Lubricating drops aren’t a fix for a reaction to cosmetics. If symptoms continue, see an eye doctor. The label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Should I put in eye drops before or after makeup?',
        a: `Before. Put in your drop with clean hands on a bare face, wait a few minutes for vision to clear and the lid to dry, then apply eye makeup.`,
      },
      {
        q: 'Can I use eye drops with mascara on?',
        a: `Yes, with care. Wash your hands, look up so the drop lands on the eye, keep the tip away from your lashes, and dab away any overflow instead of rubbing.`,
      },
      {
        q: 'How long should I wait after eye drops to put on makeup?',
        a: `A few minutes is usually enough for blur to clear and any overflow to be blotted dry. The Quell label doesn’t give a waiting time, so this is practical guidance, not a label instruction.`,
      },
      {
        q: 'Does the Quell label say anything about makeup?',
        a: `No. The label gives directions, the tip warning and storage, but it doesn’t mention makeup. Ask an eye doctor or pharmacist about a specific product.`,
      },
    ],
  },

  {
    slug: 'can-you-use-eye-drops-with-eyelash-extensions',
    title: 'Can you use eye drops with eyelash extensions?',
    description:
      'The eye drop label doesn’t mention lash extensions. What to ask your technician about aftercare and oils, and how to use drops without disturbing lashes.',
    category: 'using',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Quell’s label doesn’t mention eyelash extensions, so it neither approves nor rules them out. Your lash technician knows the adhesive and its aftercare, and Quell contains oils, so ask whether oil-based products near the lashes are okay, and how soon after an appointment you can use drops. If your eyes are irritated after a lash appointment, see an eye doctor rather than relying on a drop.`,
      },
      { h: 'What the label says about lash extensions' },
      {
        p: `Nothing. Quell’s Drug Facts give its Uses as {uses}, its directions as {directions}, and a handling line, {tip}. They don’t address lash extensions, adhesives or any cosmetic procedure. That silence isn’t permission and it isn’t a warning: it’s simply outside what the label covers. For the questions that fall into that gap, your technician and your eye doctor are the people to ask.`,
      },
      { h: 'Why the oils matter' },
      {
        p: `Quell is an oil-based lubricating drop. Its active ingredients are {actives}, and one of them is {mineralOil}, listed on the label as an emollient. Its inactive ingredients include emu oil; the carton describes it this way: {emuOil} Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss.`,
      },
      {
        p: `Lash technicians often give aftercare instructions about keeping oils and certain products away from the lash line, because they can affect how well the bond holds. Instructions vary by adhesive and by salon, so the useful question isn’t general. Ask your own technician: “Are oil-based eye drops okay with the adhesive you used?” and “How long after an appointment should I wait before using them?”`,
      },
      { h: 'Using eye drops after eyelash extensions' },
      {
        p: `If your technician says oil-containing drops are fine, the main goal is getting the drop onto the eye, not onto the lashes:`,
      },
      {
        list: [
          `Wash your hands with soap and water.`,
          `Tilt your head back and look up toward the ceiling.`,
          `Gently pull down the lower lid to make a small pocket, and aim the drop there.`,
          `Hold the bottle so the tip can’t brush your extensions or lids.`,
          `Close your eyes gently; don’t squeeze or rub.`,
          `Dab any overflow from the skin below the eye with a clean tissue, moving away from the lashes.`,
        ],
      },
      { h: 'Eye drops before lash extensions' },
      {
        p: `On the day of an appointment, the technician will usually want clean, dry, product-free lashes and lids. Ask ahead whether you should skip drops that morning or how long before the appointment to use them. If your eyes are dry enough that lying with them closed for an hour is uncomfortable, mention it when you book; the technician may want you to talk to an eye doctor first.`,
      },
      { h: 'Eye drops burn after eyelash extensions' },
      {
        p: `Some people notice stinging, watering or irritation after a lash appointment, and then notice it again when they use drops. A lubricating drop isn’t designed for a reaction to adhesive fumes or products, and Quell’s label doesn’t cover that situation. If your eyes burn, swell, itch badly or look different after an appointment, contact your technician and see an eye doctor promptly. Don’t keep putting drops in to manage it. The label is direct about when to stop: {stopUse}`,
      },
      { h: 'Medicated or allergy drops and extensions' },
      {
        p: `If you use other eye drops, such as medicated or allergy drops, the question of combining them with a lubricating drop, or with your extensions, is outside Quell’s label. It doesn’t give directions for use with other drops. Ask the doctor or pharmacist who recommended the other drops, and let your lash technician know what you use.`,
      },
      { h: 'Contact lenses and extensions' },
      {
        p: `Quell’s label doesn’t cover use with contact lenses either. If you wear contacts and have extensions, both your eye doctor and your technician should know, since lens handling means touching the lid area every day. [Can I use Quell with contact lenses?](/guides/contact-lenses-and-quell) explains what the label says and doesn’t say.`,
      },
      { h: 'Everyday care with extensions and dry eyes' },
      {
        list: [
          `Follow your technician’s cleaning instructions so residue doesn’t build up at the lash line.`,
          `Keep screens slightly below eye level and take blink breaks; extensions don’t change how often you blink.`,
          `Point car and desk vents away from your face.`,
          `Don’t share drops, mascara or lash brushes.`,
          `Read the [Drug Facts](/drug-facts) before first use, including the caution about egg or bird allergies.`,
        ],
      },
      {
        p: `If you’re unsure whether your symptoms are dryness or something else, the [dry eye self-check](/self-check) can help you organize what you’re noticing before you talk to a professional. It’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Can you use eye drops with eyelash extensions?',
        a: `The Quell label doesn’t address extensions. Because Quell contains oils, ask your lash technician whether oil-based drops are okay with the adhesive they used, and when you can start using them.`,
      },
      {
        q: 'Are oil-based eye drops bad for lash extensions?',
        a: `It depends on the adhesive and the salon’s aftercare advice. Ask your technician directly whether oil-based products near the lash line are okay for your set.`,
      },
      {
        q: 'Why do my eyes burn after eyelash extensions?',
        a: `Burning after an appointment isn’t something a lubricating drop is designed for. Contact your technician and see an eye doctor, especially if there’s swelling, pain or vision changes.`,
      },
      {
        q: 'How do I put eye drops in without getting my lashes wet?',
        a: `Wash your hands, tilt your head back, look up, pull down the lower lid gently and aim the drop into that pocket, keeping the tip away from your lashes. Dab overflow from below the eye.`,
      },
    ],
  },

  /*
   * Source checked 2026-11-12: 21 CFR part 349 via the eCFR API
   * (https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-349):
   * title "Ophthalmic Drug Products for Over-the-Counter Human Use"; 349.3 definitions of
   * demulcent (usually a water-soluble polymer) and emollient (usually a fat or oil applied
   * to eyelids to protect or soften tissues); 349.14 emollients incl. lanolin, light mineral
   * oil, mineral oil, paraffin, petrolatum, white ointment, white petrolatum, white and
   * yellow wax; 349.60 emollient labeling, dosage form "e.g., ointment", directions to apply
   * a small amount (one-fourth inch) of ointment to the inside of the eyelid.
   */
  {
    slug: 'eye-drops-vs-eye-ointment',
    title: 'Eye drops vs. eye ointment: what’s the difference?',
    description:
      'Drops are liquid and quick to use; ointments are thicker, often used at night, and can blur vision. How the two compare, and who should advise on them.',
    category: 'choosing',
    addedOn: '2026-11-12',
    body: [
      {
        p: `Eye drops are liquids you place in the eye one drop at a time; they spread quickly and usually blur vision only briefly. Eye ointments are thicker, greasy preparations squeezed as a thin ribbon inside the lower lid; they stay longer but blur vision, so they’re often used at bedtime. Both can be sold over the counter under the same FDA rules. Quell is a drop, not an ointment.`,
      },
      { h: 'Difference between eye drops and eye ointment' },
      {
        list: [
          `Form: drops are a liquid solution or emulsion; ointments are a semisolid, like a very soft salve.`,
          `How you use them: drops go in one at a time from a bottle; ointments come in a small tube and are applied as a short ribbon along the inside of the lower lid.`,
          `Vision: drops may blur for a moment; ointments usually blur for longer, which is why many people save them for night.`,
          `Feel: drops feel light and wet; ointments feel heavy and can leave lids and lashes greasy.`,
          `Timing: drops are easy to use during the day; ointments fit times when you won’t need sharp vision, like before sleep.`,
        ],
      },
      { h: 'How the FDA groups them' },
      {
        p: `Over-the-counter eye products in the US follow the FDA’s monograph for ophthalmic drug products, 21 CFR part 349. It covers drops and ointments alike, and it sorts active ingredients by what they do. Two groups matter here:`,
      },
      {
        list: [
          `Demulcents, which the rule describes as agents, usually water-soluble polymers, that protect and lubricate the eye’s surface. Glycerin and polysorbate 80 are on that list.`,
          `Emollients, which the rule describes as agents, usually a fat or oil, applied to the eyelids to protect or soften tissues. The list includes lanolin, mineral oil, light mineral oil, paraffin, petrolatum, white petrolatum and white or yellow wax.`,
        ],
      },
      {
        p: `The emollient labeling section of the same rule uses ointment as its example dosage form, and its directions describe applying a small amount, about one-fourth inch, of ointment to the inside of the eyelid. That’s the classic eye ointment: mostly petrolatum and mineral oil. Drops, by contrast, are mostly water.`,
      },
      { h: 'Emollient eye ointment ingredients' },
      {
        p: `If you read the Drug Facts on a lubricating ointment, the active ingredients are usually emollients from that list, often white petrolatum together with mineral oil, sometimes with lanolin. Inactive ingredients are often few, because a petrolatum base doesn’t need much else. If you have a sensitivity to lanolin or another ingredient, the Drug Facts panel is where to check. [The active ingredients on an eye drop label](/guides/the-active-ingredients-section) explains how that section reads.`,
      },
      { h: 'Where Quell sits: a drop with an emollient' },
      {
        p: `Quell is a liquid drop, a milky brown solution in a {size} bottle. Its active ingredients are {actives}. Two of them, glycerol and polysorbate 80, are listed on its label as lubricants, and the third, light mineral oil, as an emollient, which is the same kind of ingredient an ointment relies on, in a drop you can use during the day. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss.`,
      },
      {
        p: `Its label lists Uses as {uses} and directions as {directions}. It isn’t an ointment and doesn’t come in a tube, so ointment directions don’t apply to it.`,
      },
      { h: 'Is eye ointment better than drops?' },
      {
        p: `Neither is better in general; they suit different situations. Some people prefer the convenience of drops during the day. Others are told by a doctor to use an ointment at night when their eyes feel driest on waking. Some ointments also carry prescription medicine, which is a different product entirely from an over-the-counter lubricant.`,
      },
      {
        p: `Whether you need an ointment at all, and when, is a question for your eye doctor or pharmacist. They can look at your symptoms, your other medicines and how your eyes feel at different times of day. [Questions to ask your eye doctor about dry eyes](/guides/questions-to-ask-your-eye-doctor) can help you prepare.`,
      },
      { h: 'Using drops and ointment together' },
      {
        p: `Quell’s label doesn’t give directions for use with other eye products, ointments included. If you already use an ointment, or a doctor has suggested one, ask that doctor or your pharmacist whether and how to combine it with a drop. Don’t work out an order or spacing on your own from general advice.`,
      },
      { h: 'Practical differences day to day' },
      {
        list: [
          `Driving: blurred vision from an ointment makes it a poor choice right before you drive.`,
          `Makeup and lashes: ointment can smear onto lids and lashes and leave them greasy.`,
          `Travel: TSA counts both as liquids, gels or creams for carry-on purposes, and medically necessary ones can exceed the usual size limit if you declare them.`,
          `Hygiene: for both, don’t let the tip of the tube or bottle touch your eye or any surface. Quell’s label puts it as {tip}.`,
          `Storage: follow each product’s label. Quell’s says {storage}.`,
        ],
      },
      { h: 'When neither is the answer' },
      {
        p: `Lubricating drops and ointments are for dryness and minor irritation. They aren’t for eye pain, sudden changes in vision, an injury or something stuck in the eye. Those need a doctor. Quell’s label says: {stopUse} [Eye symptoms that need a doctor, not a drop](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs.`,
      },
    ],
    faq: [
      {
        q: 'What is the difference between eye drops and eye ointment?',
        a: `Drops are liquid, spread quickly and blur vision only briefly. Ointments are thick and greasy, applied as a ribbon inside the lower lid, and blur vision longer, so they’re often used at night.`,
      },
      {
        q: 'Is eye ointment better than drops?',
        a: `Not in general. They suit different times and needs, and whether you need an ointment is a question for your eye doctor or pharmacist.`,
      },
      {
        q: 'What is an emollient eye ointment?',
        a: `It’s an ointment whose active ingredients are emollients, which the FDA’s rule for OTC eye products describes as agents, usually fats or oils, that protect or soften tissues. White petrolatum and mineral oil are common examples.`,
      },
      {
        q: 'Is Quell an eye drop or an ointment?',
        a: `Quell is a liquid eye drop in a {size} bottle. It contains light mineral oil, an emollient, alongside two lubricants, glycerol and polysorbate 80.`,
      },
    ],
  },
]
