import type { Guide } from '@/lib/guide-types'

export const DAILY_20261111_E: Guide[] = [
  /*
   * Sources fetched 2026-11-11 for dry-eyes-in-fargo:
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00014914.csv
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014914.csv
   *   (Fargo Hector Intl AP: Jan high 18.2 / low 0.2 F; Nov high 38.1 / low 20.9 F;
   *   annual snow 51.4 in; precip 23.95 in; 8,805 heating degree days; 41.7 days
   *   with a low at or below 0 F; 172.4 nights at or below 32 F; 92.7 days with a
   *   high at or below 32 F)
   * - https://www.ndstudies.gov/gr4/node/250 (Lake Agassiz, flat lakebed, river flows north)
   * - https://www.dwr.nd.gov/basins/red_river/red_river.html (former lakebed "very flat",
   *   river flows north for nearly 400 river miles)
   * Dropped: wind speed figures (no official wind normal fetched today).
   */
  {
    slug: 'dry-eyes-in-fargo',
    title: 'Dry eyes in Fargo, North Dakota',
    description:
      'Flat open land, hard wind and one of the longest heating seasons in the lower 48: why eyes run dry in Fargo, and how to use Quell as the label directs.',
    category: 'local',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Fargo sits on the floor of an old glacial lake, so wind crosses the Red River Valley with almost nothing to slow it, and NOAA’s climate normals put January highs below 20°F. Cold outdoor air, gusts on open ground and months of furnace heat all speed up tear evaporation. Shielding your eyes outside, managing indoor air, and using a lubricating drop as its label directs are the practical answers.`,
      },
      { h: 'Why the Red River Valley is so open' },
      {
        p: `The valley isn’t a river valley in the usual sense. North Dakota’s state studies site explains that the region lay under glacial Lake Agassiz, and that once the water drained, the land left behind was nearly as flat as a floor. The state Department of Water Resources calls the old lakebed very flat and notes that the Red River runs north for nearly 400 river miles along the Minnesota line.`,
      },
      {
        p: `For your eyes, that geography matters more than it sounds. Hills, ridges and forest break up wind in most of the country. Around Fargo, a breeze that starts out west has miles of plowed fields and shelterbelts to cross, and in winter much of that ground is bare or snow-covered. Air moving across the surface of the eye carries moisture away faster than still air does, which is why a walk across a big parking lot in West Fargo can leave your eyes stinging in a way a walk of the same length in a sheltered town might not.`,
      },
      { h: 'What NOAA’s numbers say about a Fargo winter' },
      {
        p: `NOAA’s 1991–2020 climate normals for Fargo’s Hector International Airport give a clear picture of how long the cold season runs:`,
      },
      {
        list: [
          `January’s normal high is 18.2°F and its normal low is 0.2°F.`,
          `An average year brings about 42 days when the low reaches zero or colder.`,
          `About 93 days a year never get above freezing at all.`,
          `Normal annual snowfall is 51.4 inches, and November already averages 6.8 inches.`,
          `The station logs about 8,805 heating degree days a year, a NOAA measure of how far daily temperatures fall below 65°F and so of how hard furnaces work.`,
        ],
      },
      {
        p: `That heating figure is the one to notice. Cold air holds very little water vapor, and when your furnace warms it to 68 or 70 degrees, its relative humidity drops sharply. Fargo homes run that heat from fall into spring, so the dry indoor stretch lasts far longer than the snow cover in many other cities.`,
      },
      { h: 'Daily life that dries the eyes here' },
      {
        list: [
          `Scraping the windshield at 7 a.m. with your face turned into a north wind.`,
          `Long drives on straight, open roads with the defroster aimed at the glass and spilling onto your face.`,
          `Harvest season in September and October, when field work kicks up dust across the valley.`,
          `Indoor hockey rinks and big-box stores where heated, recirculated air blows from overhead units.`,
          `Evenings of screen time once it’s dark by late afternoon, which tends to cut down how often you blink.`,
        ],
      },
      { h: 'Habits that help in a prairie winter' },
      {
        list: [
          `Wear wraparound sunglasses or ski goggles on windy days, especially when sun reflects off snow-covered fields.`,
          `Point car vents at your chest and feet, not your eyes, and use recirculate sparingly so the cabin isn’t baking dry.`,
          `Run a humidifier in the bedroom and clean it as the maker instructs.`,
          `Take short breaks from screens and blink fully; [screens and your tear film](/guides/screens-and-your-tear-film) explains why.`,
          `Keep a bottle at work and one at home so you aren’t carrying it through a cold parking lot twice a day.`,
        ],
      },
      { h: 'Where Quell fits for Fargo households' },
      {
        p: `Quell’s Uses read: {uses}. It is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and that oil layer is the part of your tears that slows evaporation when air is cold, dry and moving. The label’s directions are simple: {directions}.`,
      },
      {
        p: `The active ingredients are {actives}. You can read the whole panel on the [Drug Facts page](/drug-facts) before you order.`,
      },
      { h: 'Keeping a bottle usable through a North Dakota January' },
      {
        p: `The label says {storage}. A glove box in Fargo can sit well below the bottom of that range for weeks on end, so the car isn’t a place to keep drops from November to March. A coat pocket close to your body is fine for the trip from the house to the office. If a bottle has gotten very cold, let it return to room temperature and check it. Under “Do not use,” the label lists: {doNotUse}.`,
      },
      { h: 'Ordering from Fargo' },
      {
        p: `Quell ships to North Dakota addresses from Brentwood, Tennessee, at {shipping} per order, with free shipping once you order {freeBottles} bottles. There’s no subscription; you’ll get one reminder email when you might be running low. The [Fargo page](/eye-drops/fargo-nd) and the [North Dakota page](/eye-drops/state/north-dakota) cover ordering to the area.`,
      },
      { h: 'When dryness isn’t just the weather' },
      {
        p: `Winter air explains a lot of eye discomfort on the northern plains, but not all of it. {stopUse} A local optometrist or ophthalmologist can look at what’s going on.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Fargo in the winter?',
        a: `Fargo’s cold air carries little moisture, and furnace heat lowers its relative humidity further. Wind crossing the flat valley then pulls water off the eye’s surface faster than calm air does.`,
      },
      {
        q: 'Can I keep eye drops in my car in North Dakota?',
        a: `Not through the winter. The label says {storage}, and a parked car in Fargo regularly falls far below that, so keep the bottle indoors or in an inside pocket.`,
      },
      {
        q: 'Does Quell ship to Fargo, ND?',
        a: `Yes. Orders ship from Brentwood, Tennessee, to North Dakota addresses at {shipping}, and shipping is free at {freeBottles} bottles. No delivery date is promised.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-11 for dry-eyes-in-minneapolis:
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00014922.csv
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00014922.csv
   *   (Minneapolis/St Paul AP: Jan high 23.6 / low 8.8 F; Jul high 83.4 F; Dec snow
   *   11.4 in; annual snow 51.2 in; precip 31.62 in; 7,399 heating degree days;
   *   22.1 days with a low at or below 0 F; 147.3 nights at or below 32 F;
   *   72.3 days with a high at or below 32 F)
   * - https://www2.minneapolismn.gov/media/content-assets/www2-documents/business/Skyways-(PDF),wcmsp-206051.pdf
   *   (city skyway bulletin: 2nd floor, bottom at least 16 ft 6 in above the street,
   *   at least 80 percent of sidewalls glazing, pedestrian movement only)
   * Dropped: skyway total mileage (only non-city sources found), lake counts.
   */
  {
    slug: 'dry-eyes-in-minneapolis',
    title: 'Dry eyes in Minneapolis',
    description:
      'Skyways, forced-air heat and long freezing months: what a Minneapolis winter does to tired, dry eyes, with NOAA numbers and practical habits.',
    category: 'local',
    addedOn: '2026-11-11',
    body: [
      {
        p: `In Minneapolis, dry eyes usually come from spending the cold months indoors in heated air, then stepping into wind that’s often well below freezing. NOAA’s normals show 72 days a year that never climb above 32°F, and downtown workers can go from parking ramp to desk through heated skyways without breathing outdoor air. Managing indoor air, blinking during screen work and using a lubricating drop as labeled all help.`,
      },
      { h: 'A city built to stay inside' },
      {
        p: `Few American downtowns are designed around avoiding winter the way Minneapolis is. The city’s own zoning bulletin on skyways describes enclosed bridges placed at the second floor, with the bottom at least 16 feet 6 inches above the street, walls that must be mostly glass, and use limited to people walking. In practice that means an office worker can park, eat lunch, run errands and get back to the car without a coat.`,
      },
      {
        p: `That comfort has a cost your eyes notice. Skyways, lobbies and the buildings they link share heated, recirculated air. In January, that air started out cold and dry before the building warmed it, so the relative humidity indoors can fall low enough that contact with it for eight or nine hours leaves eyes gritty by late afternoon. You don’t feel wind, but you also never get a break from dry heat.`,
      },
      { h: 'Minneapolis winters by NOAA’s numbers' },
      {
        p: `NOAA’s 1991–2020 climate normals for Minneapolis–St. Paul International Airport list:`,
      },
      {
        list: [
          `A January normal high of 23.6°F and a normal low of 8.8°F.`,
          `About 147 nights a year at or below freezing.`,
          `Around 22 nights a year at zero or colder.`,
          `Normal snowfall of 51.2 inches a year, with December averaging 11.4 inches.`,
          `About 7,399 heating degree days a year, NOAA’s yardstick for how much heating a climate demands.`,
        ],
      },
      {
        p: `Summer looks nothing like that. The July normal high is 83.4°F, so air conditioning takes over from the furnace for a few months. Both systems dry indoor air, which is why some people in the Twin Cities notice their eyes in August as much as in February.`,
      },
      { h: 'Where Minneapolis eyes get the most wear' },
      {
        list: [
          `Desk work in towers connected by skyways, where you may not step outside from morning until evening.`,
          `Light rail platforms and bus stops in a crosswind, waiting with your face exposed.`,
          `Watching a game in an enclosed arena with blowers overhead.`,
          `Lake walks and cross-country skiing on cold, bright days when snow glare makes you squint and wind finds every gap.`,
          `Long evenings on a laptop after dark comes early in December.`,
        ],
      },
      { h: 'Habits for office workers and skyway commuters' },
      {
        list: [
          `Set a desk humidifier away from your keyboard, and clean it on the schedule its maker gives.`,
          `Move your monitor slightly below eye level so your lids cover more of each eye while you read.`,
          `Every 20 minutes or so, look out a skyway window at something distant and blink slowly a few times.`,
          `Angle desk fans and space heaters away from your face.`,
          `Drink water through the day; heated buildings dry you out in general, not just your eyes.`,
        ],
      },
      {
        p: `For the reasons blinking matters so much at a screen, see [screens and your tear film](/guides/screens-and-your-tear-film).`,
      },
      { h: 'Outdoors on a Minnesota winter day' },
      {
        p: `The skyways cover downtown, not the whole city. Shoveling a south Minneapolis sidewalk, walking a dog around a frozen lake, or waiting for a hockey practice to end in an outdoor rink all put your face in air that NOAA’s normals say stays below freezing for the whole day on about 72 days a year. Cold wind and low sun bouncing off snow make people squint, and squinting pairs with less complete blinking. Sunglasses with wraparound frames cut both the glare and the wind, and a scarf or gaiter pulled up to the cheekbones keeps the lower face warmer so you’re less tempted to turn away from the breeze with your eyes half shut.`,
      },
      { h: 'How Quell is meant to help' },
      {
        p: `The label’s Uses are {uses}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which suits the problem of tears evaporating into dry office air. Follow the label: {directions}. It’s a multi-dose bottle, so the label’s handling line matters every time: {tip}.`,
      },
      {
        p: `If you work downtown, a bottle in your desk drawer stays at room temperature, which keeps it inside the label’s storage range, {storage}. A car parked in a surface lot through a January workday doesn’t.`,
      },
      { h: 'Getting Quell in the Twin Cities' },
      {
        p: `Orders ship from Brentwood, Tennessee, to Minnesota at {shipping}, and orders of {freeBottles} or more bottles ship free. You can check out as a guest, and unopened bottles can be refunded within {returnDays} days of delivery without being sent back. The [Minneapolis page](/eye-drops/minneapolis-mn) and the [Minnesota page](/eye-drops/state/minnesota) cover the details.`,
      },
      { h: 'When to see someone in person' },
      {
        p: `If dryness hangs on after the furnace goes off in spring, or it comes with pain or blurred vision, it needs more than a drop. {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel dry in the Minneapolis skyways?',
        a: `The skyways and the buildings they connect share heated air that started out cold and dry, so its humidity is low. Spending a whole workday in it, often at a screen, lets tears evaporate faster.`,
      },
      {
        q: 'How cold does it get in Minneapolis in January?',
        a: `NOAA’s 1991–2020 normals for the Minneapolis–St. Paul airport give a January normal high of 23.6°F and a normal low of 8.8°F.`,
      },
      {
        q: 'Can I order Quell to Minneapolis?',
        a: `Yes. Quell ships to Minnesota from Brentwood, Tennessee, at {shipping} per order, or free with {freeBottles} bottles. Checkout works without an account.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-11 for dry-eyes-in-anchorage:
   * - https://www.ncei.noaa.gov/data/normals-monthly/1991-2020/access/USW00026451.csv
   * - https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00026451.csv
   *   (Anchorage Intl AP: Jan high 22.7 / low 11.0 F; Jul high 66.2 F; Dec snow 18.2 in;
   *   annual snow 77.9 in; annual precip 16.42 in; 9,979 heating degree days;
   *   7.6 cooling degree days; 186.2 nights at or below 32 F)
   * - https://aa.usno.navy.mil/api/rstt/oneday?date=2026-12-21&coords=61.2181,-149.9003&tz=-9
   *   (sunrise 10:14, sunset 15:41 on 2026-12-21)
   * - https://aa.usno.navy.mil/api/rstt/oneday?date=2026-06-21&coords=61.2181,-149.9003&tz=-8
   *   (sunrise 04:20, sunset 23:43 on 2026-06-21)
   * - https://www.weather.gov/afc/spssouthcentralak (NWS Anchorage: gusts as high as
   *   70 mph along Turnagain Arm and Portage Valley; statement undated)
   * Dropped: Knik wind figures (no official page found); typical wind normals.
   */
  {
    slug: 'dry-eyes-in-anchorage',
    title: 'Dry eyes in Anchorage',
    description:
      'Five and a half hours of December daylight, gap winds off Turnagain Arm and a heating season that barely ends: dry eyes in Anchorage, explained.',
    category: 'local',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Anchorage eyes deal with a heating season that runs most of the year, a dry climate by precipitation, strong gap winds near Turnagain Arm, and winter days so short that much of life moves indoors under lights and screens. Those conditions speed up tear evaporation. Protecting your eyes from wind, adding moisture to indoor air and using a lubricating drop as its label directs are reasonable steps.`,
      },
      { h: 'How short the winter days are' },
      {
        p: `The U.S. Naval Observatory’s sun calculator gives Anchorage a sunrise of 10:14 a.m. and a sunset of 3:41 p.m. on December 21, 2026. That’s about five and a half hours between sunrise and sunset. On June 21 the same calculator shows the sun rising at 4:20 a.m. and setting at 11:43 p.m.`,
      },
      {
        p: `The dark months shape eye habits in ways people don’t always connect to dryness. Commutes happen in the dark under headlights and streetlights. Evenings are long, so reading, gaming and streaming fill more hours. Focused screen work tends to lower how often you blink, and every skipped blink leaves the tear film exposed a little longer.`,
      },
      { h: 'Turnagain Arm and the wind' },
      {
        p: `Anchorage sits between the Chugach Mountains and the water, and wind gets funneled through gaps in that terrain. One National Weather Service Anchorage outlook warned of gusts as high as 70 mph along Turnagain Arm and Portage Valley. You don’t need a storm to feel it, though: a steady breeze along the Seward Highway pullouts, the Coastal Trail or the Hillside is enough to dry the surface of your eyes within minutes if you’re facing into it.`,
      },
      { h: 'NOAA’s normals for Anchorage' },
      {
        p: `The 1991–2020 climate normals for Ted Stevens Anchorage International Airport put the city’s weather in numbers:`,
      },
      {
        list: [
          `Normal January high 22.7°F, low 11.0°F.`,
          `July’s normal high is just 66.2°F.`,
          `About 186 nights a year at or below freezing.`,
          `Annual precipitation of only 16.42 inches, which is low for a coastal city.`,
          `Normal snowfall of 77.9 inches, with December the snowiest month at 18.2 inches.`,
          `About 9,979 heating degree days against fewer than 8 cooling degree days a year.`,
        ],
      },
      {
        p: `That last pair is the telling one. Anchorage barely needs cooling at all, but heating demand runs from early fall well into spring, and many homes run some heat even on summer nights. Indoor air in a heated house is drier than the air it came from, so for much of the year your eyes spend their indoor hours in it.`,
      },
      { h: 'Anchorage routines that wear on the eyes' },
      {
        list: [
          `Warming up the car in a dark driveway, then driving with the heater blowing at your face.`,
          `Skiing or fat-tire biking on groomed trails in the cold, where your own speed adds to the wind.`,
          `Hours in a heated office where the windows show only dark for most of the workday.`,
          `Summer nights with daylight past 11 p.m., when people stay out later and sleep less.`,
          `Flying out of Ted Stevens to the Lower 48, since cabin air is dry too; [traveling with eye drops](/guides/traveling-with-eye-drops) covers packing a bottle.`,
        ],
      },
      { h: 'Practical steps' },
      {
        list: [
          `Wear wraparound glasses or goggles on windy days and on trails.`,
          `Run a humidifier in the room you sleep in, and keep it clean.`,
          `Turn car vents down toward your hands and feet.`,
          `Break up screen sessions with a deliberate few slow blinks and a look across the room.`,
          `Keep your bottle indoors, not in the truck. The label says {storage}, and an Anchorage vehicle sits below that range for months.`,
        ],
      },
      { h: 'Where Quell comes in' },
      {
        p: `The label’s Uses read: {uses}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its active ingredients are {actives}, and its directions are {directions}. Read the full [Drug Facts](/drug-facts) before your first drop, including the caution about egg or bird allergies.`,
      },
      { h: 'Ordering to Alaska' },
      {
        p: `Quell ships to Alaska addresses from Brentwood, Tennessee. Shipping is {shipping} per order, and {freeBottles} bottles qualify for free shipping. No delivery date is promised for any order, so ordering before you’re down to your last few drops gives the package room. See the [Anchorage page](/eye-drops/anchorage-ak) and the [Alaska page](/eye-drops/state/alaska).`,
      },
      { h: 'Know when it’s more than dry air' },
      {
        p: `{stopUse} In Anchorage, as anywhere, a local eye doctor is the right call for symptoms that don’t fit the weather.`,
      },
      {
        p: `It also helps to notice when the dryness shows up. If it’s worst after a February commute, the heater and the dark are likely factors. If it lingers through June, when the sun is up for more than 19 hours and the furnace is mostly idle, mention that to the eye doctor too, because the usual winter explanations don’t fit as neatly.`,
      },
    ],
    faq: [
      {
        q: 'How much daylight does Anchorage get in December?',
        a: `The U.S. Naval Observatory lists a 10:14 a.m. sunrise and a 3:41 p.m. sunset for Anchorage on December 21, 2026, about five and a half hours of daylight.`,
      },
      {
        q: 'Why do my eyes feel dry in Anchorage?',
        a: `Anchorage needs heat for most of the year, and heated indoor air is dry. Gap winds near Turnagain Arm and long hours of screen use in the dark months add to the evaporation.`,
      },
      {
        q: 'Does Quell ship to Alaska?',
        a: `Yes. Orders ship to Alaska from Brentwood, Tennessee, for {shipping}, or free with {freeBottles} bottles. No arrival date is promised, so order ahead of running out.`,
      },
    ],
  },

  {
    slug: 'fireplaces-candles-and-dry-eyes',
    title: 'Fireplaces, candles and dry eyes',
    description:
      'Wood smoke and radiant heat can leave eyes dry and stinging on winter evenings. Where to sit, how to burn cleaner, and where the drops should live.',
    category: 'seasonal',
    addedOn: '2026-11-11',
    body: [
      {
        p: `A fireplace, wood stove or cluster of candles can dry and irritate your eyes in two ways: radiant heat warms the surface of the eye and speeds evaporation, and smoke carries particles that sting. Sitting farther back, burning dry wood, ventilating the room and keeping drops away from the heat all reduce the problem without giving up the fire.`,
      },
      { h: 'Why a fire dries your eyes' },
      {
        p: `Radiant heat is the warmth you feel on your face from a fire even when the room itself is cool. It heats whatever it hits, including the thin layer of tears over your eyes, and warmer tears evaporate faster. A wood stove or insert also warms the air around it, and warmer air at the same moisture content has a lower relative humidity, so the room dries out the longer the fire burns.`,
      },
      {
        p: `Then there’s smoke. Even a fire that’s drawing well puts a little into the room when you open the door to add a log or when a downdraft hits the chimney. Fine particles land on the eye’s surface and make you blink, rub and tear up. Candles add a smaller version of the same thing, especially scented ones and ones with long, untrimmed wicks that flicker and soot.`,
      },
      { h: 'How far to sit from the fire' },
      {
        p: `There’s no official distance, but a practical test works: if your face feels hot after a few minutes, you’re too close. Pull the chair back until the warmth is pleasant on your hands rather than your face, and angle it so you see the fire from the side rather than staring straight into it. Kids and pets crowding the hearth push adults into the closest seats, so set up seating before the fire is lit.`,
      },
      { h: 'What EPA’s Burn Wise advice says about smoke' },
      {
        p: `The U.S. Environmental Protection Agency’s Burn Wise program gives wood-burning guidance aimed at cleaner fires. Its pages say:`,
      },
      {
        list: [
          `Burn only dry, split, well-seasoned wood, and season it at least six months.`,
          `Wood burns most cleanly at a moisture content below 20 percent; a wood moisture meter checks it.`,
          `Don’t burn wet or green wood.`,
          `Keep household trash, cardboard, plastics and painted or coated wood out of the fire.`,
          `A correctly installed and used appliance should make very little smoke, and regularly seeing or smelling smoke may point to a problem.`,
        ],
      },
      {
        p: `Following those steps is mostly about air quality and the chimney, but less smoke in the room is also less for your eyes to deal with.`,
      },
      { h: 'Candles and tabletop fires' },
      {
        list: [
          `Trim wicks short before lighting so the flame stays small and steady.`,
          `Keep candles out of drafts from vents, fans and doors, which make them smoke.`,
          `Put them below eye level on a table rather than at face height on a shelf beside you.`,
          `Snuff, don’t blow, at the end of the night to cut the smoke trail.`,
          `If several are lit in a small room, crack a door to bring in fresh air.`,
        ],
      },
      { h: 'Keeping the bottle away from the hearth' },
      {
        p: `The label’s storage line reads {storage}. The stone ledge above a fireplace or the top of a wood stove can get well past the upper end of that range during a long evening, even if it doesn’t feel hot when you touch it in the morning. A side table across the room, a kitchen drawer or a bathroom cabinet keeps the bottle at room temperature, and [how to store eye drops](/guides/how-to-store-eye-drops) covers the rest of the house. If it ever does get warmed by mistake, look at it before using it: {appearance} Its “Do not use” line reads: {doNotUse}.`,
      },
      { h: 'Using drops on a fireside evening' },
      {
        list: [
          `Wash the soot and ash off your hands first; firewood and kindling leave a residue.`,
          `Step away from the fire so heat and smoke aren’t on your face while you tilt your head back.`,
          `Follow the label: {directions}.`,
          `Keep the tip clean. The label says: {tip}.`,
          `Put the cap back on and return the bottle to its spot away from the hearth.`,
        ],
      },
      {
        p: `Quell’s Uses are {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, the same evaporation that radiant heat speeds up. For more on dry winter air in general, see [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes).`,
      },
      { h: 'When smoke irritation should be checked' },
      {
        p: `Brief stinging that settles once you leave the smoke is common. Pain, changes in vision, or irritation that lingers are different. {stopUse} Anything that lands in the eye from the fire, such as an ember or ash, is a reason to get medical help rather than reach for drops.`,
      },
      {
        p: `The [Drug Facts page](/drug-facts) has the label in full if you want to read the warnings before the season starts.`,
      },
    ],
    faq: [
      {
        q: 'Can a fireplace make your eyes dry?',
        a: `It can. Radiant heat warms the tear film so it evaporates faster, a burning stove lowers the room’s relative humidity, and smoke particles irritate the eye’s surface.`,
      },
      {
        q: 'Do candles irritate your eyes?',
        a: `Candles can put soot and scent into the air, especially with long wicks or in a draft. Trimming wicks, keeping candles below eye level and ventilating a small room all reduce it.`,
      },
      {
        q: 'Where should I keep eye drops in a room with a fireplace?',
        a: `Somewhere that stays at room temperature, away from the mantel and the stove. The label says {storage}.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-on-a-hunting-trip',
    title: 'Dry eyes on a hunting trip',
    description:
      'Cold mornings in a stand, wind in a blind and hours behind binoculars can dry your eyes. How to pack, carry and use drops on a hunting trip.',
    category: 'seasonal',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Hunting trips are hard on eyes because you sit still for hours in cold, moving air while staring through binoculars or a scope and blinking less than usual. To keep dryness down, shield your face from the wind, rest your eyes between glassing sessions, carry drops in an inside pocket so the bottle stays within its storage range, and clean your hands before using them.`,
      },
      { h: 'Why sitting still in the cold is so drying' },
      {
        p: `Walking warms you and makes you blink. Sitting in a tree stand or ground blind does neither. Dawn and dusk, when most hunters are settled in, are often the coldest hours, and cold air holds little water. A light breeze crossing a field or ridge keeps replacing the air in front of your face, so tears evaporate steadily for as long as you sit.`,
      },
      {
        p: `A stand puts you higher, where the wind usually runs stronger than at ground level. A blind blocks more of it, but the shooting windows tend to face into the breeze, and that’s exactly where your face is pointed for hours.`,
      },
      { h: 'Glassing and the blink problem' },
      {
        p: `When you look hard at something, you blink less, and few activities involve looking harder than scanning a tree line through binoculars or holding a scope on one spot. Every blink spreads a fresh layer of tears across the eye, so long stretches of concentrated looking let the surface dry. Hunters often notice it as blurry, tired eyes partway through a morning sit.`,
      },
      {
        list: [
          `Lower the binoculars every few minutes and blink slowly several times.`,
          `Scan with your naked eye between glassing passes to give your focus a rest.`,
          `Close your eyes for a few seconds when nothing is moving; you can still listen.`,
          `Keep lenses clean so you’re not straining through smudges.`,
        ],
      },
      { h: 'Gear that blocks the wind' },
      {
        list: [
          `A face mask or gaiter pulled up under your eyes stops your breath fogging glasses and cuts wind on the lower face.`,
          `Clear or lightly tinted shooting glasses give wind protection in low light without hiding much.`,
          `A brimmed cap under the hood shades your eyes from low sun on snow.`,
          `Set a stand or blind so the prevailing wind is at your side, not in your face, when scouting allows it.`,
        ],
      },
      { h: 'Carrying the bottle so it stays usable' },
      {
        p: `The label’s storage line reads {storage}. A pack hanging on a hook in the stand, a truck left at a trailhead all night, or a camp tent at freezing all fall below that range. The fix is to carry the bottle the way you carry your phone battery in cold weather: in an inside chest pocket against your base layer, where body heat keeps it close to room temperature.`,
      },
      {
        p: `At camp, keep it in the cabin or tent area that stays heated, not beside the woodstove and not in the cooler. If it did get very cold, let it come up to room temperature and look at it first. The label’s “Do not use” line is {doNotUse}, and its description of a normal bottle reads: {milky}.`,
      },
      { h: 'Clean hands before drops in the field' },
      {
        p: `Hunting hands touch dirt, bark, field dressing gear, scent cover and fuel. None of that should go near your eyes. Before you use drops:`,
      },
      {
        list: [
          `Wash with soap and water at camp if you can; in the stand, at least use a clean wipe on your fingers.`,
          `Take gloves off. A glove can’t tell where the tip is, and it’s easy to brush it.`,
          `Get out of the wind, or turn your back to it, before tilting your head.`,
          `Follow the label: {directions}.`,
          `Don’t let the tip touch your lashes, glove or anything else. The label states: {tip}.`,
        ],
      },
      { h: 'Where Quell fits' },
      {
        p: `Quell’s Uses read: {uses}. It is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the loss a cold breeze speeds up. It comes in a {size} multi-dose bottle, small enough for a chest pocket. If you hunt with a partner who also uses drops, each person should carry their own bottle rather than share one.`,
      },
      { h: 'If something gets in your eye' },
      {
        p: `Seeds, bark, dust and twigs are part of moving through cover. Lubricating drops aren’t meant for removing debris, and something stuck in the eye, an eye injury, or anything that hits the eye at speed needs medical attention, not a drop. For ordinary dryness that won’t settle, the label says: {stopUse}`,
      },
      {
        p: `Before a long trip, read the whole [Drug Facts](/drug-facts), and if you’ll be gone a while, see [keeping spare bottles](/guides/keeping-spare-bottles) and [traveling with eye drops](/guides/traveling-with-eye-drops).`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry in a deer stand?',
        a: `You sit still for hours in cold, moving air, often higher than the ground where wind is stronger, and you blink less while watching closely. All of that lets tears evaporate faster.`,
      },
      {
        q: 'How do I keep eye drops from freezing while hunting?',
        a: `Carry the bottle in an inside chest pocket next to your base layer, not in a pack or a truck. The label says {storage}.`,
      },
      {
        q: 'Can staring through binoculars dry your eyes?',
        a: `Long stretches of focused looking reduce how often you blink, and blinking is what spreads tears across the eye. Lowering the binoculars to blink every few minutes helps.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-when-shoveling-snow',
    title: 'Dry eyes when shoveling snow',
    description:
      'Wind, cold, glare off fresh snow and snowblower exhaust can leave eyes dry after clearing the driveway. What to wear, and when to use drops.',
    category: 'seasonal',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Shoveling snow dries your eyes because you work hard in cold, often windy air while squinting against glare, and a snowblower adds exhaust and blowing powder. Wraparound sunglasses or goggles, turning the chute and your face away from the wind, and taking breaks help. If your eyes still feel dry afterward, use a lubricating drop indoors, as its label directs, once your hands are clean.`,
      },
      { h: 'What happens to your eyes on the driveway' },
      {
        p: `The morning after a storm stacks several drying factors at once. Air behind a cold front is usually dry and moving. You’re breathing hard, so you may keep your mouth and face uncovered. Fresh snow throws back a lot of sunlight, and squinting into it narrows the eye opening and tends to make blinks shallower. Snow kicked up by the shovel, or by the wind off a drift, hits your face as fine, cold grit.`,
      },
      {
        p: `None of that is a problem for most people for ten minutes. A long driveway, a corner lot or a sidewalk you’re responsible for can take an hour or more, and that’s when eyes start to feel gritty or water heavily, which is often the eye’s reaction to drying out.`,
      },
      { h: 'Snowblowers bring their own issues' },
      {
        list: [
          `Exhaust from a gas engine rises toward the operator, particularly when you walk slowly behind it into a breeze.`,
          `The discharge chute can throw powder back at you if the wind shifts; check the wind and aim downwind before you start each pass.`,
          `Run the machine outdoors only, and never start it inside a closed garage.`,
          `Electric and battery models skip the exhaust but still throw snow, so eye protection still matters.`,
        ],
      },
      { h: 'What to wear' },
      {
        list: [
          `Ski goggles are the most protective option for blowing snow and heavy wind.`,
          `Wraparound sunglasses work on calm, bright mornings and cut glare off fresh snow.`,
          `A hat with a brim, or a hood with a stiff edge, shades the eyes from low winter sun.`,
          `A neck gaiter pulled up over the nose keeps your face warmer, but leave a gap at the top so your breath doesn’t fog your lenses.`,
        ],
      },
      { h: 'Pace the job' },
      {
        p: `Splitting a big job into two or three shorter sessions gives your eyes, back and heart a break. Between sessions, go inside, take off the goggles and blink normally for a few minutes. On days with heavy wind, clear the area right around the doors first, then wait for the wind to ease before tackling an exposed stretch along the street.`,
      },
      { h: 'Using drops after you come inside' },
      {
        p: `Drops belong indoors, not on the driveway with wet gloves. Once you’re back in:`,
      },
      {
        list: [
          `Take off gloves and wash your hands; snow, salt and shovel handles leave grime.`,
          `Give your face a minute to warm up so you’re not squinting.`,
          `Follow the label: {directions}.`,
          `Keep the tip from touching your eye, your lashes or anything else. The label says: {tip}.`,
          `Cap the bottle and put it back at room temperature.`,
        ],
      },
      {
        p: `Quell’s Uses are {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, which suits eyes that have been out in cold wind. If you already use drops, a session of shoveling is a good reason to time one of the label’s three daily drops for after you come in rather than before you go out.`,
      },
      { h: 'Where to keep the bottle in snow season' },
      {
        p: `The label’s storage range is {storage}. A garage shelf next to the snowblower, a coat hanging in an unheated mudroom, or the car’s door pocket can all drop below it in a cold snap. A bathroom cabinet or kitchen drawer is a steadier spot. More detail is in [how to store eye drops](/guides/how-to-store-eye-drops).`,
      },
      { h: 'When it’s more than dryness' },
      {
        p: `Salt spray, sand and ice chips can end up in the eye. If something is stuck, or an eye was hit, see a doctor rather than relying on drops. Ongoing dryness has its own threshold on the label: {stopUse} You can also run through the [dry eye self-check](/self-check), which is not a diagnosis but can help you describe what you notice to a doctor.`,
      },
      {
        p: `Shoveling can be strenuous work in cold air, and anyone with health concerns about heavy exertion should ask their own doctor about it. For general winter-air habits indoors, [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) picks up where this leaves off.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes water after shoveling snow?',
        a: `Cold wind and glare dry the surface of the eye, and watering is a common response to that dryness. Eye protection and shorter shoveling sessions reduce how much drying happens.`,
      },
      {
        q: 'Should I wear goggles to shovel snow?',
        a: `Goggles are the most protective choice when snow is blowing or the wind is strong. On calm, bright mornings, wraparound sunglasses can be enough to cut glare and breeze.`,
      },
      {
        q: 'When should I use eye drops after being out in the snow?',
        a: `Once you’re back inside with clean, dry hands, following the label: {directions}. Avoid using them outdoors with gloves on.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-after-swimming',
    title: 'Dry eyes after swimming in a pool',
    description:
      'Pool water and indoor pool air can leave eyes feeling dry or irritated. Goggles, rinsing, and what the Quell label does and doesn’t say about swimming.',
    category: 'using',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Eyes can feel dry or irritated after swimming because pool water washes over the tear film and the chemicals that form in chlorinated water can sting. The CDC says chloramines irritate the eyes, especially around indoor pools. Well-fitting goggles, rinsing your face after you get out and giving your eyes a break help. The Quell label doesn’t mention swimming, so follow its directions and ask an eye doctor for specifics.`,
      },
      { h: 'Does swimming cause dry eyes?' },
      {
        p: `Swimming doesn’t change how your eyes make tears, but it can leave them feeling dry for a while afterward. Your tear film is a thin layer of oil, water and mucus that sits on the eye’s surface. When you open your eyes underwater, pool water mixes with it and rinses some of it away. Once you’re out, your eyes have to rebuild that layer, and if you climb out into a breezy deck or dry locker room, evaporation adds to the effect.`,
      },
      { h: 'Can chlorine cause dry eyes?' },
      {
        p: `Chlorine is the disinfectant, but the sting most people blame on it comes from what it reacts with. The CDC’s guidance for pool operators says chloramines, which form when chlorine combines with sweat, urine and other body waste, irritate skin, eyes and the respiratory tract. It adds that they can turn into gas in the air above the water, particularly indoors.`,
      },
      {
        p: `So an eye that feels irritated after a swim may be reacting to chloramines in the water or the air, not just to having been wet. The CDC’s advice to pools includes having swimmers rinse off before getting in, noting that even a quick shower removes much of what helps form chloramines. That’s one small thing every swimmer can do for the pool as a whole.`,
      },
      { h: 'Dry eyes after swimming in a pool: what helps' },
      {
        list: [
          `Wear goggles that seal around the eye socket; adjust the strap and nosepiece until water stays out for a full length.`,
          `Shower before you swim, which the CDC recommends to cut down on chloramine formation.`,
          `Rinse your face, closed eyelids included, with clean tap water after you get out.`,
          `Pat around your eyes with a clean towel instead of rubbing.`,
          `Keep your eyes closed when you dive in or push off the wall if your goggles tend to shift.`,
          `Spend less time sitting on the deck of an indoor pool, where irritants can build up in the air.`,
        ],
      },
      { h: 'Indoor pool air' },
      {
        p: `Natatoriums are warm and humid, which sounds like the opposite of dry-eye weather. The issue is the quality of the air rather than its moisture. When ventilation is poor, the air over the water carries the chloramines that the CDC describes, and swim meets, with lots of swimmers and spectators, make it worse. If your eyes sting more in one facility than another, it’s worth mentioning to the pool staff.`,
      },
      { h: 'Using drops around swimming' },
      {
        p: `The Quell label is silent about swimming. It doesn’t say to use drops before swimming, after it, or with goggles, so there’s no swim-specific instruction to follow. What the label does give you is the general routine: {directions}. Its Uses are {uses}, and it’s designed to reinforce the tear film’s oil layer to help reduce moisture loss.`,
      },
      {
        p: `If you want to know whether a drop before or after laps makes sense for you, ask your eye doctor or pharmacist; [questions to ask your pharmacist](/guides/questions-to-ask-your-pharmacist) has a starter list. Contact lens wearers who swim should ask too, because the label doesn’t cover contact lenses either. See [contact lenses and Quell](/guides/contact-lenses-and-quell) for what that means.`,
      },
      { h: 'Handling the bottle at the pool' },
      {
        list: [
          `Leave it in your bag in the locker, not on the hot deck in direct sun. The label’s storage range is {storage}.`,
          `Dry and wash your hands before touching your eyes; pool water on your fingers defeats the point of rinsing.`,
          `Watch the tip. The label says: {tip}.`,
          `Don’t share a bottle with a teammate or swim partner.`,
        ],
      },
      { h: 'Outdoor pools, lakes and the beach' },
      {
        p: `Outdoor swimming adds sun glare off the water and wind on the deck. Tinted goggles and a brimmed hat between swims help with both. Natural water doesn’t have chloramines but can carry sand and debris, and your tear film still gets rinsed away. Rinsing your face with clean water afterward applies there too.`,
      },
      { h: 'When to see a doctor' },
      {
        p: `Brief stinging that eases within an hour or so of leaving the pool is common. Pain, a change in vision, discharge, or irritation that keeps going needs an eye doctor’s attention, and [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists more. The label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Does swimming cause dry eyes?',
        a: `Swimming with your eyes open rinses away part of the tear film, so eyes can feel dry until it rebuilds. Goggles that seal well keep most pool water off the eye.`,
      },
      {
        q: 'Can chlorine cause dry eyes?',
        a: `The CDC says chloramines, which form when chlorine reacts with sweat, urine and other body waste, irritate the eyes, especially around indoor pools. That irritation can feel like dryness after a swim.`,
      },
      {
        q: 'Can I use Quell after swimming?',
        a: `The label doesn’t address swimming. Its general directions are {directions}; for advice on timing drops around swimming, ask your eye doctor or pharmacist.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-when-cycling',
    title: 'Dry eyes when cycling',
    description:
      'Headwind at speed dries your eyes on a bike. Choosing wraparound glasses, stopping safely for drops, cold rides, and where to carry the bottle.',
    category: 'using',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Cycling dries your eyes because riding creates its own headwind, even on a calm day, and that moving air strips moisture from the tear film. Wraparound cycling glasses block most of it. If you use drops, stop and get off the bike first; never use them while riding. On cold rides, carry the bottle in a jersey pocket close to your body rather than a saddle bag.`,
      },
      { h: 'Why riding is like standing in a wind tunnel' },
      {
        p: `At walking pace, the air around your face barely moves. On a bike, you’re pushing through it, so your eyes face a steady breeze equal to your speed plus any real headwind. A descent doubles it. Air flowing across an open eye carries off tear moisture far faster than still air, which is why riders often notice watering, blurry vision or a gritty feeling partway through a ride.`,
      },
      {
        p: `Riding position matters too. In the drops or on aero bars you look up from under your brows, which tends to open the eyes wider and expose more surface to the wind.`,
      },
      { h: 'Choosing eyewear for the bike' },
      {
        list: [
          `Wraparound frames that curve close to the temples stop air from sneaking in at the sides.`,
          `Lenses large enough to cover your line of sight in your riding position, not just when you stand upright.`,
          `Clear or low-tint lenses for dawn, dusk and overcast days; darker ones for bright sun.`,
          `Vents or anti-fog coating so you’re not lifting them at every climb.`,
          `A snug fit under the helmet straps so they don’t bounce.`,
        ],
      },
      {
        p: `Prescription wearers can ask an optician about prescription cycling glasses or inserts. The Quell label doesn’t cover contact lenses, so riders who wear them should ask their eye doctor about drops.`,
      },
      { h: 'Using drops on a ride: stop first' },
      {
        p: `Tilting your head back and aiming a drop takes both hands and your eyes off the road, so it’s strictly a stopped-and-off-the-bike task. Pick a spot well off the road or trail, clip out, and lean the bike somewhere stable. Then:`,
      },
      {
        list: [
          `Pull off your gloves and clean your fingers with a wipe; handlebar tape and chain grease travel.`,
          `Turn your back to the wind and take your glasses off.`,
          `Follow the label: {directions}.`,
          `Keep the tip clear of everything. The label states: {tip}.`,
          `Blink a few times and give your vision a moment to settle before you ride on.`,
        ],
      },
      {
        p: `A café stop or regroup at the top of a climb is a natural time. Quell’s directions call for three drops a day per eye, so on most rides you can plan one around the start or a midride break instead of improvising.`,
      },
      { h: 'Cold-weather rides' },
      {
        p: `Fall and winter riding add cold to the speed. Cold air holds little moisture, and at speed it stings. Full-coverage glasses or even ski-style goggles under a winter helmet help on raw days. A thin balaclava protects the face but can push warm, damp breath up into your lenses, so pick one with a mouth vent.`,
      },
      { h: 'Saddle bag or jersey pocket?' },
      {
        p: `The label’s storage range is {storage}. On a winter ride, a saddle bag sits in the coldest, windiest place on the bike, so a bottle there can fall below the range. A rear jersey pocket, or better a chest pocket under a jacket, stays closer to body temperature. On a hot summer day, the opposite applies: a dark saddle bag in full sun can heat up, and a bike left leaning in a sunny parking lot can heat it further. Taking the bottle with you when you leave the bike avoids both.`,
      },
      {
        p: `If the bottle did get very cold or hot, check it before using. The label’s Do not use line says: {doNotUse}.`,
      },
      { h: 'Where Quell fits' },
      {
        p: `Quell’s Uses read: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, and evaporation is what a headwind speeds up. The {size} bottle fits easily in a jersey pocket. You can read the whole label on the [Drug Facts page](/drug-facts), and [dry air, wind and altitude](/guides/dry-air-wind-and-altitude) covers the same drying factors off the bike.`,
      },
      { h: 'Indoor riding' },
      {
        p: `Trainer and spin-class riders aren’t immune. A fan aimed at your face to keep you cool is a headwind in a different form, and staring at a screen for a virtual ride cuts down on blinking. Angle the fan at your chest and blink deliberately between intervals; [screens and your tear film](/guides/screens-and-your-tear-film) explains why that matters.`,
      },
      { h: 'Grit, bugs and when to stop riding' },
      {
        p: `A bug or bit of road grit in the eye is common on a bike and is a reason to stop and rinse with clean water, not to use a lubricating drop. If something stays stuck, the eye hurts, or vision changes, get medical help. For dryness that doesn’t settle, the label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes water when I ride a bike?',
        a: `Riding creates a headwind equal to your speed, which dries the eye’s surface quickly, and watering is a common response. Wraparound cycling glasses block much of that air.`,
      },
      {
        q: 'Can I use eye drops while cycling?',
        a: `Not while riding. Stop somewhere off the road, get off the bike, clean your hands and then use the drops as the label directs.`,
      },
      {
        q: 'Where should I carry eye drops on a bike ride?',
        a: `In a jersey or jacket pocket close to your body, not a saddle bag exposed to cold wind or hot sun. The label says {storage}.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-for-outdoor-workers',
    title: 'Dry eyes for outdoor workers',
    description:
      'Dust, wind and sun on a job site, farm or utility crew can dry your eyes. Eye protection, hand washing, and keeping drops out of a hot or frozen cab.',
    category: 'using',
    addedOn: '2026-11-11',
    body: [
      {
        p: `People who work outside, in construction, farming, landscaping or on utility crews, deal with dust, wind and sun for whole shifts, and all three dry or irritate the eyes. Proper eye protection comes first. If you use lubricating drops, wash your hands before each use and keep the bottle somewhere that stays within the label’s storage range, which a truck cab often doesn’t.`,
      },
      { h: 'What wears on the eyes at work' },
      {
        list: [
          `Construction: concrete and drywall dust, saw cutting, demolition and wind across open lots.`,
          `Farming: field dust at planting and harvest, chaff, hay, and hours in a tractor cab with the fan running.`,
          `Landscaping: mowers, blowers and trimmers throwing grit and clippings at face height.`,
          `Utility and line work: wind at height in a bucket truck, sun glare, and long shifts after storms.`,
          `Road crews: hot asphalt, traffic wash from passing vehicles and dust from milling.`,
        ],
      },
      {
        p: `On top of the airborne material, most of these jobs involve looking intently at something, a level, a cut line, a row, a meter, which tends to cut down how often you blink. Fewer blinks means the tear film gets renewed less often while dust and wind keep working on it.`,
      },
      { h: 'What OSHA says about eye protection' },
      {
        p: `The Occupational Safety and Health Administration states that eye and face protection must be provided whenever necessary to protect against chemical, environmental, radiological or mechanical irritants and hazards, and that the requirements appear in specific OSHA standards for general industry, maritime and construction. In other words, safety glasses, goggles or face shields on the job are your employer’s responsibility to provide where the hazard calls for them. Ask your supervisor or safety lead what’s required for your tasks.`,
      },
      {
        p: `Eye protection is also the most effective thing you can do about dryness at work, because it blocks the wind and dust before they ever reach the tear film. Wraparound safety glasses with side coverage, or sealed goggles for very dusty work, do more than any drop.`,
      },
      { h: 'Hand washing before drops' },
      {
        p: `Work hands carry concrete, fertilizer, fuel, oil, plant sap and soil. None of that belongs anywhere near an eye. Before using drops on a shift:`,
      },
      {
        list: [
          `Wash with soap and water at a wash station, or use the cleanest water and soap you have on site.`,
          `Dry your hands on a clean paper towel, not a rag from the truck.`,
          `Take off safety glasses and step out of the wind and dust.`,
          `Follow the label: {directions}.`,
          `Don’t let the tip touch anything. The label says: {tip}.`,
          `Put your eye protection back on before you return to work.`,
        ],
      },
      {
        p: `Hand sanitizer alone doesn’t remove grit, and alcohol on your fingertips can sting if it gets near your eye. Soap and water is the better choice when it’s available.`,
      },
      { h: 'The truck cab problem' },
      {
        p: `The label’s storage range is {storage}. A pickup on a summer job site can bake well above that range by midmorning, and the dash is hotter still. In January the same cab sits far below it from the end of one shift to the start of the next. A lunch cooler without ice, an insulated pouch or your own jacket pocket keeps a bottle closer to room temperature. Taking it home at the end of the day beats leaving it in the truck. The guide on [eye drops in a hot car](/guides/eye-drops-in-a-hot-car) goes into more detail.`,
      },
      {
        p: `If a bottle got very hot or very cold, check it before use. The normal appearance is described on the label: {milky}. The Do not use line reads: {doNotUse}.`,
      },
      { h: 'Where Quell fits on a work day' },
      {
        p: `Quell’s Uses read: {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss. With three drops a day per eye in the directions, many workers plan one before the shift, one at lunch, and one at home, using the clean-hands routine for the midday drop. The full label is on the [Drug Facts page](/drug-facts).`,
      },
      { h: 'Things a drop isn’t for' },
      {
        p: `A lubricating drop isn’t an eyewash and isn’t meant to flush out chemicals or debris. If dust, a chip or a splash gets into an eye, use the site’s eyewash station or clean running water as your training directs and get medical help. Anything that strikes the eye needs a doctor. For ongoing dryness, the label’s line is clear: {stopUse}`,
      },
      { h: 'Ordering for a crew or keeping a spare' },
      {
        p: `Quell ships to US addresses from Brentwood, Tennessee, at {shipping} per order, and orders of {freeBottles} bottles ship free. Each person should use their own bottle. If you want one at home and one in your lunch bag, [keeping spare bottles](/guides/keeping-spare-bottles) covers how to rotate them.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working outside?',
        a: `Wind, dust and sun all dry or irritate the eye’s surface, and concentrating on a task tends to lower your blink rate. Proper eye protection blocks much of it.`,
      },
      {
        q: 'Can I keep eye drops in my work truck?',
        a: `A truck cab often goes above or below the label’s range, {storage}. Keep the bottle in a pocket or insulated pouch and take it home at night.`,
      },
      {
        q: 'Do I have to wash my hands before using eye drops at work?',
        a: `Yes, it’s the sensible step. Work hands carry dust, fuel, soil and chemicals, so wash with soap and water and dry with a clean towel before touching near your eyes.`,
      },
    ],
  },

  {
    slug: 'what-eye-drops-can-i-buy-without-a-prescription',
    title: 'What eye drops can you buy without a prescription?',
    description:
      'Which eye drops are sold over the counter in the US, the FDA rule they follow, how to spot one by its Drug Facts panel, and what still needs a prescription.',
    category: 'choosing',
    addedOn: '2026-11-11',
    body: [
      {
        p: `In the US, you can buy eye drops without a prescription when their active ingredients and labeling fit the FDA’s rule for over-the-counter ophthalmic products, 21 CFR part 349. That covers lubricant and protectant drops (demulcents and emollients), plus astringents, hypertonicity agents, vasoconstrictors and eyewashes. You can recognize one by its Drug Facts panel. Eye medicines outside that rule generally need a prescription.`,
      },
      { h: 'The rule behind over-the-counter eye drops' },
      {
        p: `The FDA sets the conditions for nonprescription eye products in Title 21 of the Code of Federal Regulations, part 349, titled “Ophthalmic Drug Products for Over-the-Counter Human Use.” It works like a recipe book rather than an approval for each brand. It lists which active ingredients are allowed in each category, what combinations are permitted, and what the label must say. A product that meets those conditions can be sold without a prescription.`,
      },
      { h: 'The categories in part 349' },
      {
        p: `Part 349’s active ingredient sections cover:`,
      },
      {
        list: [
          `Ophthalmic demulcents, which include glycerin, polysorbate 80, several cellulose derivatives, polyethylene glycols, propylene glycol, polyvinyl alcohol and povidone.`,
          `Ophthalmic emollients, which include lanolin, light mineral oil, mineral oil, paraffin, petrolatum and certain waxes.`,
          `An ophthalmic astringent.`,
          `An ophthalmic hypertonicity agent.`,
          `Ophthalmic vasoconstrictors.`,
          `Eyewashes.`,
        ],
      },
      {
        p: `Lubricating drops, the kind most people mean by “eye drops for dryness,” fall into the first two groups. Quell is an example: its active ingredients are {actives}. Glycerol is another name for glycerin, and polysorbate 80 sits in the demulcent list, while light mineral oil appears among the emollients.`,
      },
      { h: 'How to recognize an OTC eye drop on the shelf' },
      {
        p: `A separate FDA regulation, 21 CFR 201.66, sets the format for over-the-counter drug labels. It requires a box headed Drug Facts with sections in a fixed order:`,
      },
      {
        list: [
          `Active ingredient(s), with the amount of each.`,
          `Purpose(s), such as “lubricant.”`,
          `Use(s), the conditions the product is labeled for.`,
          `Warning(s).`,
          `Directions.`,
          `Other information, such as storage.`,
          `Inactive ingredients.`,
          `Questions?, with a phone number.`,
        ],
      },
      {
        p: `If a box has that panel, it’s being sold as an OTC drug. A prescription medicine is labeled for dispensing by a pharmacist and doesn’t carry a Drug Facts panel. Our guide on [how to read an eye drop Drug Facts label](/guides/how-to-read-an-eye-drop-drug-facts-label) walks through each section on a real carton.`,
      },
      { h: 'Read the Uses line to know what kind of drop it is' },
      {
        p: `Part 349 also limits what a demulcent or emollient product may say it’s for. The allowed indications talk about relieving dryness, discomfort from minor irritation, or exposure to wind or sun, and protecting against further irritation. Quell’s Uses line is one of those: {uses}. If a drop’s Uses line is about something else, it’s a different kind of product, and comparing it to a lubricant isn’t like-for-like. [The Uses section on an eye drop label](/guides/the-uses-section) goes deeper.`,
      },
      { h: 'What kinds of eye products need a prescription' },
      {
        p: `Broadly, anything whose active ingredient isn’t in part 349, or whose intended use goes beyond what the monograph allows, has to reach the market another way, typically through an FDA application for that specific drug, and many of those are prescription-only. That includes eye medicines meant to address a specific medical condition rather than temporary dryness or minor irritation. Only an eye doctor can decide whether you need one, and they’ll write the prescription if so.`,
      },
      {
        p: `If you aren’t sure which you need, the [dry eye self-check](/self-check) is a starting point for a conversation with your doctor. It’s not a diagnosis.`,
      },
      { h: 'Buying OTC drops online' },
      {
        list: [
          `Look for the full Drug Facts panel on the product page or a link to it; on this site it’s at [Drug Facts](/drug-facts).`,
          `Check the size and the price per bottle, including shipping. Quell is {size}, and shipping is {shipping} or free at {freeBottles} bottles.`,
          `Check who makes it and where to call. Quell is made by {company}, and the label’s Questions number is {phone}.`,
          `Read the return terms. Here, it’s {returns}.`,
        ],
      },
      { h: 'What OTC doesn’t mean' },
      {
        p: `Nonprescription doesn’t mean a drop is right for everyone or every situation. The label still has warnings, and Quell’s include {warnings}. The label is also silent on contact lenses, children and use with other drops, so those questions belong with your eye doctor or pharmacist. And if symptoms persist, the label sets the limit: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What eye drops can I buy without a prescription?',
        a: `Drops whose active ingredients and labels meet the FDA’s OTC ophthalmic rule, 21 CFR part 349. That includes lubricant and protectant drops made with demulcents or emollients, plus a few other categories such as eyewashes.`,
      },
      {
        q: 'How can I tell if eye drops are over the counter?',
        a: `Look for a Drug Facts box on the carton. FDA rules require it on OTC drugs, with sections from Active ingredients through Questions in a set order.`,
      },
      {
        q: 'Is glycerin an OTC eye drop ingredient?',
        a: `Yes. 21 CFR 349.12 lists glycerin among the ophthalmic demulcents allowed in nonprescription eye drops. Quell’s label lists {glycerol} as one of its actives.`,
      },
    ],
  },

  {
    slug: 'are-preservative-free-eye-drops-worth-it',
    title: 'Are preservative-free eye drops worth it?',
    description:
      'An honest look at preservative-free eye drops: who looks for them, what they mean in a multi-dose bottle, the extra care they need, and how to compare cost.',
    category: 'choosing',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Preservative-free eye drops are worth it mainly for people who use drops several times a day and would rather keep a preservative out of what goes in their eyes. The trade-offs are more careful handling, attention to storage and sometimes a higher price per use. Whether that’s worth it for you depends on how often you use drops, and your eye doctor can weigh in on your situation.`,
      },
      { h: 'What do preservative-free eye drops do?' },
      {
        p: `They do the same job as any lubricating drop with the same kind of active ingredients. “Preservative-free” describes what’s missing from the formula, not an extra effect. A preservative is added to multi-use solutions to keep microbes from growing once the bottle is open. Leaving it out doesn’t change what the label’s Uses say the drop is for. In Quell’s case, those Uses are {uses}, and its active ingredients are {actives}.`,
      },
      {
        p: `If you want to read more about what a preservative is and how to find one on a label, see [what preservative-free means](/guides/what-does-preservative-free-mean).`,
      },
      { h: 'Who tends to look for them' },
      {
        list: [
          `People who use drops on a schedule every day rather than once in a while, because the number of times an ingredient touches the eye adds up.`,
          `People who have noticed that a particular drop stings or bothers them and want to compare formulas.`,
          `People whose eye doctor has told them to choose a preservative-free product.`,
          `Shoppers who read inactive ingredient lists closely and prefer shorter or simpler ones.`,
        ],
      },
      {
        p: `None of those reasons makes one kind of drop right for everyone. Someone who uses a drop twice a month during allergy season has a different calculation from someone following Quell’s directions, which read {directions}. At that rate, a bottle is in daily use for weeks.`,
      },
      { h: 'Preservative free eye drops vs regular' },
      {
        p: `Comparing the two fairly means looking at more than one word on the front of the box:`,
      },
      {
        list: [
          `Active ingredients: if two drops share the same kinds of actives, they’re aiming at similar uses, preservative or not.`,
          `Inactive ingredients: a preservative would appear here. Quell lists {inactiveCount} inactive ingredients and none of them is a preservative.`,
          `Package: preservative-free drops come either in single-use vials meant to be thrown away after one use, or in multi-dose bottles like Quell’s.`,
          `Handling: without a preservative, keeping the bottle clean depends more on you.`,
          `Price per use, including shipping.`,
        ],
      },
      { h: 'What preservative-free means in a multi-dose bottle' },
      {
        p: `A multi-dose bottle is opened, used and recapped many times. FDA’s rule for over-the-counter eye products, 21 CFR part 349, requires multi-use containers to carry a warning against touching the tip to any surface and to tell you to replace the cap after use. Quell’s version of the tip warning reads: {tip}. With no preservative in the formula, that instruction is the main line of defense, so it’s worth building a routine around it:`,
      },
      {
        list: [
          `Wash and dry your hands first.`,
          `Hold the bottle so the tip points down and stays clear of your lashes, eyelid and fingers.`,
          `Cap it as soon as you’re done, and never set it down uncapped.`,
          `Use your own bottle only; don’t share it, even within a household.`,
        ],
      },
      { h: 'How to store preservative free eye drops' },
      {
        p: `Follow the label, not a general rule of thumb. Quell’s storage line is {storage}. That’s ordinary room temperature, so a bathroom drawer, nightstand or desk works. Avoid a hot car, a sunny windowsill and a freezing glove box. Before each use, a quick look at the bottle tells you whether anything has changed: {appearance} The label also lists one Do not use condition: {doNotUse}. Our guide on [how to store eye drops](/guides/how-to-store-eye-drops) has more on spots to avoid.`,
      },
      { h: 'Comparing the cost per use' },
      {
        p: `Prices on single bottles can mislead, because sizes, directions and shipping all differ. A fairer number is what you pay per day of use:`,
      },
      {
        list: [
          `Add the bottle price to your share of shipping. Here, shipping is {shipping} per order, and an order of {freeBottles} bottles ships free.`,
          `Estimate how many days a bottle lasts you at the label’s directions; [how long a bottle lasts](/guides/how-long-does-a-bottle-of-eye-drops-last) explains how to work it out.`,
          `Divide the first number by the second.`,
          `Do the same for any drop you’re comparing, using its own size and directions.`,
        ],
      },
      {
        p: `Single-use vials usually involve opening a new one each time, which can change the math considerably. A multi-dose preservative-free bottle can sit between the two. There’s no universal answer; it depends on the products and how you use them.`,
      },
      { h: 'What it doesn’t promise' },
      {
        p: `Preservative-free is a description of a formula, not a promise about how your eyes will feel. A drop without a preservative can still contain an ingredient you react to; Quell’s label, for example, warns: {warnings}. And no drop is a substitute for an exam when symptoms don’t settle. {stopUse}`,
      },
      {
        p: `If you want a professional view on whether preservative-free makes sense for you, your eye doctor or pharmacist is the right person to ask, and [questions to ask your eye doctor](/guides/questions-to-ask-your-eye-doctor) can help you prepare.`,
      },
    ],
    faq: [
      {
        q: 'What is the difference between preservative-free and regular eye drops?',
        a: `Regular multi-use drops usually contain a preservative to limit microbial growth after opening. Preservative-free drops leave it out, which puts more weight on clean handling and correct storage.`,
      },
      {
        q: 'Are preservative-free eye drops more expensive?',
        a: `Sometimes, but compare cost per day of use rather than bottle price. Add shipping, estimate how long a bottle lasts at the label’s directions, and divide.`,
      },
      {
        q: 'How do you keep preservative-free eye drops clean?',
        a: `Wash your hands, keep the tip from touching anything and recap right away. The label puts it plainly: {tip}.`,
      },
    ],
  },

  {
    slug: 'are-natural-eye-drops-better',
    title: 'Are natural eye drops better than regular ones?',
    description:
      'What “natural” means, and doesn’t, on an eye drop. Why the active ingredients carry the label’s Uses, and why natural ingredients have their own cautions.',
    category: 'choosing',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Not automatically. “Natural” isn’t a regulatory category for over-the-counter eye drops, so the word on a box doesn’t tell you how a drop works or whether it suits you. What the label’s Uses rest on are the active ingredients, which follow FDA’s rule for OTC eye products. Natural inactive ingredients can be a reason to prefer a drop, but they come with their own cautions.`,
      },
      { h: 'What “natural” means on an eye drop box' },
      {
        p: `There’s no FDA definition of “natural” for eye drops. The federal rule that governs over-the-counter eye products, 21 CFR part 349, sorts drops by their active ingredients, such as demulcents and emollients, and spells out the allowed label claims for each. It says nothing about natural versus synthetic. So when a maker calls a drop natural, it’s a description of some of its ingredients, not a separate class of product with its own standard.`,
      },
      { h: 'Where the label’s Uses come from' },
      {
        p: `The Drug Facts panel separates active ingredients, which carry the drop’s labeled purpose, from inactive ones, which make up the rest of the formula. In Quell, the actives are {actives}. Those are the ingredients the Uses line stands on: {uses}.`,
      },
      {
        p: `None of the three actives is what most people picture when they hear “natural,” and that’s typical. A lubricating drop sold over the counter relies on actives named in FDA’s rule, whatever else it contains. See [the active ingredients section](/guides/the-active-ingredients-section) for how that part of a label reads.`,
      },
      { h: 'What natural ingredients are in Quell' },
      {
        p: `Quell’s natural ingredients are in its inactive list, which reads {inactives}. The ingredient the brand is built around is emu oil, and the carton describes it this way: {emuOil}`,
      },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and the emu oil is part of the formula that gives it its oil content. [The natural ingredients in Quell](/guides/natural-ingredients-in-quell) goes through them one at a time.`,
      },
      { h: 'Natural ingredients have their own cautions' },
      {
        p: `“Natural” and “gentle” aren’t the same thing. Ingredients from animals, plants and minerals can still cause reactions in some people, and the label reflects that. Quell’s warning reads: {warnings}. The first half of that line exists because of an animal-derived ingredient. Anyone with an egg or bird allergy should read [egg or bird allergy and Quell](/guides/egg-or-bird-allergy-and-quell) and talk with a doctor before using it.`,
      },
      {
        p: `The same logic applies to any natural ingredient in any product. Honey, botanical oils and mineral salts are familiar from food and cosmetics, but your eye’s surface is far more sensitive than your skin or your stomach. Familiarity in the kitchen doesn’t carry over automatically.`,
      },
      { h: 'Natural doesn’t mean homemade' },
      {
        p: `Some people reason that if natural ingredients are good, mixing their own drops at home must be better. It isn’t a sensible step. Commercial eye drops are made under drug manufacturing rules and packaged to stay clean until opened, with labels that tell you how to use and store them. A kitchen mixture has none of that, and putting it in your eye risks contamination and irritation. Stick to products made for the eye and labeled for it.`,
      },
      { h: 'How to compare natural and conventional drops fairly' },
      {
        list: [
          `Start with the Uses line on each box. If it’s the same kind of use, you’re comparing like with like.`,
          `Compare the active ingredients next; they carry that use.`,
          `Then read the inactive ingredients. That’s where natural ingredients, preservatives and anything you’d rather avoid appear.`,
          `Read the warnings for each, especially any allergy cautions.`,
          `Look at the bottle type and storage needs, since they affect daily use.`,
          `Count price per use including shipping, not price per bottle.`,
        ],
      },
      { h: 'Who might prefer a drop with natural inactives' },
      {
        p: `Some shoppers simply like knowing what’s in a formula and recognizing the names on the list. Others choose a drop because its oil-based approach fits what their eye doctor has said about their tear film. And some have tried several drops and settled on the one that feels right to them. All of those are personal reasons, and none depends on “natural” being better in general. Quell doesn’t make that claim either.`,
      },
      { h: 'Questions to bring to a doctor or pharmacist' },
      {
        list: [
          `Is any ingredient on this label one I should avoid?`,
          `Does an oil-based lubricant make sense for what you’ve seen in my eyes?`,
          `Can I use this alongside other drops or contact lenses? The Quell label doesn’t cover either.`,
          `What should make me stop and come back in?`,
        ],
      },
      {
        p: `On that last question, the label already gives an answer: {stopUse} For a structured starting point, the [dry eye self-check](/self-check) can help you describe what you notice. It’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Are natural eye drops safer?',
        a: `Not by definition. Natural ingredients can still cause reactions, which is why Quell’s label warns: {warnings}. Read every warning and ask a doctor if you’re unsure.`,
      },
      {
        q: 'Is natural a regulated term for eye drops?',
        a: `No. FDA’s rule for over-the-counter eye drops, 21 CFR part 349, sorts them by active ingredients and allowed label claims, not by whether they’re natural.`,
      },
      {
        q: 'Can I make my own natural eye drops at home?',
        a: `That isn’t a good idea. Homemade mixtures aren’t made or packaged to stay clean, and putting them in your eye risks contamination and irritation. Use a product made and labeled for the eye.`,
      },
    ],
  },

  {
    slug: 'what-does-for-use-in-the-eyes-only-mean',
    title: 'What does “for use in the eyes only” mean?',
    description:
      'The eyes-only line on an eye drop label means the drop isn’t for ears, nose, mouth or skin. Why labels say it, and what to do if some is swallowed.',
    category: 'label',
    addedOn: '2026-11-11',
    body: [
      {
        p: `It means the drop is made and labeled only for putting in your eyes, not in your ears, nose or mouth, on your skin, or into a wound. On Quell’s label it’s the second half of the warning, which reads: {warnings}. The line tells you the route the product was formulated, tested and labeled for, and that any other use is outside what the label covers.`,
      },
      { h: 'Where it appears on the label' },
      {
        p: `Look in the Warnings section of the Drug Facts panel. Quell’s warning is two short instructions joined together: an allergy caution about eggs and birds, and the eyes-only line. Reading the panel top to bottom, it comes after Active ingredients, Purpose and Uses, and before Directions. The [Drug Facts page](/drug-facts) shows the full panel.`,
      },
      { h: 'Why labels state a route of use' },
      {
        p: `The FDA’s regulation on over-the-counter label format, 21 CFR 201.66, lays out the Drug Facts panel and what the Warnings section must contain. For topical products that aren’t meant to be swallowed, it requires the bold statement “For external use only.” The idea behind it is simple: a label should tell you plainly which part of the body a product is for. An eye drop’s eyes-only line does that job for the eye.`,
      },
      {
        p: `A drug is designed around where it goes. An eye drop’s ingredients, strength, bottle and directions all assume the surface of the eye. Directions written as {directions} make sense for an eye and nowhere else. Putting the same liquid somewhere else means using it in a way nobody has labeled.`,
      },
      { h: 'Things the line rules out' },
      {
        list: [
          `Ears: an eye drop isn’t an ear drop, even though the bottles can look alike. Ear problems need ear products and a doctor’s advice.`,
          `Nose: a dropper bottle isn’t a nasal spray, and the nose has its own products.`,
          `Mouth: an eye drop isn’t meant to be swallowed; see the swallowing section below.`,
          `Skin, cuts or burns: the label gives no directions for any of them.`,
          `Pets: the label is written for people. Ask a veterinarian about an animal’s eyes.`,
        ],
      },
      { h: 'Mix-ups to watch for at home' },
      {
        p: `Small dropper bottles are easy to confuse, especially at night or when you’re in a hurry. Ear drops, nasal drops, liquid bandages and even some glues come in similar sizes. A few habits keep the wrong bottle out of your eye and the eye drop out of somewhere else:`,
      },
      {
        list: [
          `Keep eye drops in their own spot, apart from ear and nose products.`,
          `Read the label every time, in good light, before you open the cap.`,
          `Keep bottles in their cartons if they look alike.`,
          `Don’t move drops into an unlabeled container or a pill organizer.`,
          `Keep them away from tubes of glue or nail products that might be grabbed by mistake.`,
        ],
      },
      { h: 'If some is swallowed' },
      {
        p: `The label covers this directly: {swallowed}. That applies whether an adult swallowed some by mistake or a child got hold of the bottle. Don’t wait for symptoms. Have the bottle in hand when you call, so you can read the ingredient list to the person on the line. [Keeping eye drops out of children’s reach](/guides/keep-out-of-reach-of-children) has more on storing drops where kids can’t get them.`,
      },
      { h: 'If it gets on skin or in the wrong place' },
      {
        p: `The label doesn’t give instructions for skin contact or for drops put in an ear or nose by mistake. For anything beyond an ordinary rinse with water, call a pharmacist, a doctor or Poison Control and describe what happened. Don’t guess.`,
      },
      { h: 'How the line works with the rest of the warnings' },
      {
        p: `The eyes-only line sits alongside the other parts of the panel. The When using section says {tip}, so even within the eye, the bottle tip shouldn’t touch your eye or lashes. The Stop use section draws the limit for the eye itself: {stopUse} And the Do not use line reads {doNotUse}. Together they describe how to use the product inside its intended route. [The warnings on an eye drop label](/guides/the-warnings-section) covers the rest of that section.`,
      },
      { h: 'Questions about uses the label doesn’t cover' },
      {
        p: `If you’re wondering whether an eye drop could help with something other than your eyes, the answer from the label is no, and the person to ask about the other problem is a doctor or pharmacist. Questions about the product itself can go to {company} at {phone}, {hours}.`,
      },
    ],
    faq: [
      {
        q: 'Can you put eye drops in your ears?',
        a: `No. The label limits the drop to the eyes, and ears need products made and labeled for them. Ask a doctor or pharmacist about anything to do with your ears.`,
      },
      {
        q: 'What happens if you swallow eye drops?',
        a: `The label says: {swallowed}. Keep the bottle with you when you call so you can read out the ingredients.`,
      },
      {
        q: 'Why do eye drop labels say for the eyes only?',
        a: `FDA’s Drug Facts rules expect a label to say plainly which route a product is for. An eye drop is formulated and directed for the surface of the eye, so any other use falls outside its label.`,
      },
    ],
  },

  {
    slug: 'what-is-the-tear-film',
    title: 'What is the tear film?',
    description:
      'The tear film is the thin layer of oil, water and mucus covering your eye. How its three layers work together, how blinking renews it, and what dries it.',
    category: 'formula',
    addedOn: '2026-11-11',
    body: [
      {
        p: `The tear film is the thin, clear coating that covers the front of your eye between blinks. It has three layers: mucus closest to the eye, which helps tears cling; a watery middle layer, which makes up most of the film; and a thin oil layer on top, which slows evaporation. Every blink spreads a fresh film, and dry, moving or heated air thins it faster.`,
      },
      { h: 'Why the eye needs a coating at all' },
      {
        p: `The front of the eye is living tissue exposed to air, which is unusual for the body. Skin has a tough outer layer; the inside of your mouth is constantly bathed in saliva. The eye’s answer is a liquid film that has to be renewed every few seconds. It keeps the surface moist and smooth, washes away dust, and gives light a clear, even surface to pass through, which is part of why vision blurs when the film breaks up.`,
      },
      { h: 'The three layers, from the eye outward' },
      {
        list: [
          `Mucus layer: the innermost layer, lying against the surface of the eye. It helps the watery tears spread out evenly instead of beading up, the way a wet surface takes a coat of water more easily than a waxy one.`,
          `Water layer: the thick middle of the film. It carries moisture and keeps the surface wet, and it’s what you notice when your eyes water.`,
          `Oil layer: the outermost, thinnest layer, made by tiny glands along the edges of the eyelids. It sits on top of the water and slows how fast it evaporates into the air.`,
        ],
      },
      {
        p: `The layers aren’t sealed apart like the layers of a cake; they blend into one another and work as a single film. But thinking of them separately helps explain why different things make eyes feel dry. A film can run short on water, or have too little oil on top to hold that water in, or fail to spread evenly.`,
      },
      { h: 'How blinking renews it' },
      {
        p: `Each blink pulls the upper lid down over the eye and back up again. On the way, it sweeps the old film toward the inner corner, where tears drain away, and spreads fresh tears across the surface. Pressure from the lids also helps move oil from the glands at the lid edges onto the top of the film. The result is a new, even coating after every complete blink. [How blinking spreads tears across the eye](/guides/how-blinking-spreads-tears) goes through it step by step.`,
      },
      { h: 'What dries the tear film' },
      {
        list: [
          `Low humidity, from winter heating, air conditioning, desert air or airplane cabins.`,
          `Moving air, from wind, fans, car vents or riding a bike.`,
          `Heat near the face, from a fireplace, space heater or hair dryer.`,
          `Fewer or incomplete blinks during reading, screen work or driving.`,
          `Long days with eyes open, especially late at night.`,
        ],
      },
      {
        p: `Most of these speed up evaporation from the top of the film. That’s why the oil layer gets so much attention: it’s the part that slows water loss into the air. For more on that single layer, see [the tear film’s oil layer](/guides/the-tear-films-oil-layer). For screens in particular, [screens and your tear film](/guides/screens-and-your-tear-film) explains the blinking side.`,
      },
      { h: 'What happens when the film breaks up' },
      {
        p: `Between blinks, the film thins. If you keep your eyes open long enough, it begins to break apart in spots, leaving small dry areas on the surface. People notice that as stinging, a gritty or sandy feeling, a need to blink hard, or vision that blurs and then clears after a blink. Watery eyes can be part of it too, because the eye may respond to dryness by producing a rush of watery tears that lack the balance of the full film.`,
      },
      { h: 'Where Quell fits' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses read: {uses}. The active ingredients are {actives}, and the formula includes emu oil among its inactives. The directions are {directions}. The [Drug Facts page](/drug-facts) has the complete label.`,
      },
      {
        p: `A drop adds to the film from outside; it doesn’t change how your glands make tears. The habits that protect the film, like blinking fully, cutting down on moving air at your face and adding moisture to dry rooms, work alongside it.`,
      },
      { h: 'When the tear film needs a professional look' },
      {
        p: `Eye doctors have ways to examine each part of the tear film and see which, if any, is falling short. That’s worth doing if dryness is frequent or doesn’t ease with simple changes. The label’s threshold is clear: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What are the three layers of the tear film?',
        a: `A mucus layer against the eye that helps tears spread, a watery middle layer that keeps the surface moist, and a thin oil layer on top that slows evaporation.`,
      },
      {
        q: 'What does the tear film do?',
        a: `It keeps the front of the eye moist and smooth, rinses away small particles, and gives light an even surface to pass through. Blinking renews it every few seconds.`,
      },
      {
        q: 'What causes the tear film to evaporate?',
        a: `Dry, moving or heated air speeds evaporation, and blinking less often gives it more time to happen. The oil layer on top is what slows it down.`,
      },
    ],
  },

  {
    slug: 'how-blinking-spreads-tears',
    title: 'How blinking spreads tears across the eye',
    description:
      'What a blink actually does: sweeping old tears away, laying down a fresh film and spreading oil. Why partial blinks and screens matter, and blink breaks.',
    category: 'formula',
    addedOn: '2026-11-11',
    body: [
      {
        p: `A blink works like a windshield wiper with a built-in washer. As the upper lid closes, it pushes old tears toward the inner corner to drain, and as it opens, it lays down a fresh, even film of water, mucus and oil across the eye. Complete blinks renew the whole surface; partial blinks, common when you concentrate or look at screens, leave the lower part to dry.`,
      },
      { h: 'A blink, step by step' },
      {
        list: [
          `The upper lid starts to fall. The lower lid barely moves; most of the work is done from above.`,
          `As the lids close, the upper lid’s edge sweeps across the eye, moving the old tear film and any dust with it.`,
          `When the lids meet, gentle pressure squeezes a little oil from the glands along their edges.`,
          `The used tears move toward small openings near the inner corner of each eye, where they drain toward the nose.`,
          `As the upper lid lifts, it draws a new layer of tears up over the eye, with oil spreading over the top.`,
          `For a moment the film is even and complete, then it starts to thin until the next blink.`,
        ],
      },
      {
        p: `All of that happens in a fraction of a second, mostly without your noticing. You blink without thinking about it, although you can also choose to blink, which matters for the habits further down.`,
      },
      { h: 'Why blinking matters for the oil layer' },
      {
        p: `The tear film’s outermost layer is a thin coat of oil that slows evaporation. That oil comes from tiny glands in the lids, and the blink itself is part of how it gets out of those glands and onto the film. A full, firm closure helps express it; a flutter that doesn’t bring the lids together helps less. So blinking does two jobs at once: it replaces water and it refreshes the oil that keeps that water from evaporating. [The tear film’s oil layer](/guides/the-tear-films-oil-layer) covers what that oil does once it’s there.`,
      },
      { h: 'Partial blinks while concentrating' },
      {
        p: `When you focus hard on something, reading, threading a needle, driving in traffic, the brain tends to hold off on blinking so you don’t miss anything. Many of the blinks that do happen are incomplete: the upper lid comes partway down and goes back up without meeting the lower lid. That leaves a strip along the bottom of the eye that doesn’t get a fresh film. People who notice dryness or a burning feeling mainly along the lower edge of the eye after reading are often noticing that strip.`,
      },
      { h: 'Why screens reduce blinking' },
      {
        p: `Screens combine several things that work against a healthy blink. You concentrate, which reduces blinking. You often look straight ahead or slightly up at a monitor, so the eye opening is wider and more surface is exposed. Rooms with computers tend to have heating or air conditioning blowing, which speeds evaporation from a film that’s already being renewed less often. [Screens and your tear film](/guides/screens-and-your-tear-film) covers the setup side of this.`,
      },
      { h: 'Blink breaks: a simple routine' },
      {
        p: `You can’t stop concentrating, but you can build complete blinks into your day on purpose:`,
      },
      {
        list: [
          `Set a reminder on your phone or computer to go off at regular intervals during long screen sessions.`,
          `When it goes off, look away from the screen at something across the room or out a window.`,
          `Close your eyes gently and fully, hold for a second or two, then open. Repeat a few times.`,
          `Check that your lids actually meet; a light squeeze at the end confirms it.`,
          `Go back to work and let your blinking return to normal.`,
        ],
      },
      {
        p: `Lowering your monitor so you look slightly down also helps, because the lids then cover more of the eye even between blinks. Keeping fans and vents from blowing at your face gives each fresh film longer before it thins.`,
      },
      { h: 'When blinking feels different' },
      {
        p: `Blinking more than usual, a feeling that you have to blink hard to clear your vision, or twitching lids are things people often notice when their eyes are dry or tired. They can also have other causes. If changes in blinking come with pain, vision changes or don’t ease, an eye doctor should take a look. The label’s guidance on that is: {stopUse}`,
      },
      { h: 'Where drops fit in' },
      {
        p: `A lubricating drop adds to the tear film from the outside, and blinking is what spreads it. After putting a drop in, close your eyes gently and blink a few times so it covers the eye evenly, rather than squeezing hard, which can push it out. Quell’s directions are {directions}, and its Uses are {uses}. It’s designed to reinforce the tear film’s oil layer to help reduce moisture loss, which works alongside the oil your own blinks deliver. See [how to use eye drops as directed](/guides/how-to-use-eye-drops-as-directed) for the full routine, and keep the tip clean: {tip}.`,
      },
    ],
    faq: [
      {
        q: 'How does blinking keep your eyes moist?',
        a: `Each blink sweeps old tears toward the inner corner to drain and spreads a fresh film of water, mucus and oil over the eye. A firm, complete blink also helps release oil from the lid glands.`,
      },
      {
        q: 'What is a partial blink?',
        a: `A partial blink is one where the upper lid comes down only partway and doesn’t meet the lower lid. It leaves the lower part of the eye without a fresh tear film, which can make that area feel dry.`,
      },
      {
        q: 'Why do I blink less when looking at a screen?',
        a: `Concentrating tends to hold off blinking, and many screen-time blinks are incomplete. Short, deliberate blink breaks and a slightly lower monitor help.`,
      },
    ],
  },
]
