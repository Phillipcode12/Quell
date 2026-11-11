import type { Guide } from '@/lib/guide-types'

export const DAILY_20261111_D: Guide[] = [
  /*
   * dry-eyes-in-el-paso. Sources fetched 2026-11-11:
   * - https://www.weather.gov/epz/elpaso_norm_jan (Jan normal high 58.9, low 33.7)
   * - https://www.weather.gov/epz/elpaso_norm_mar (March precipitation 0.24 in)
   * - https://www.weather.gov/epz/elpaso_norm_apr (April precipitation 0.17 in)
   * - https://www.weather.gov/epz/elpaso_norm_jun (June normal high 97.4)
   * - https://forecast.weather.gov/product.php?site=NWS&product=CLM&issuedby=ELP&version=9
   *   (March 2026: RH 23, 0.01 in vs 0.24 normal, gust 51 mph on 3/14)
   * - https://forecast.weather.gov/product.php?site=NWS&product=CLM&issuedby=ELP&version=7
   *   (May 2026: RH 28, average wind 9.8 mph, gust 48 mph on 5/14)
   * Dropped: elevation (no official page fetched), dust-storm frequency by
   * month (only in an NWS research PDF that could not be read).
   */
  {
    slug: 'dry-eyes-in-el-paso',
    title: 'Dry eyes in El Paso',
    description:
      'Desert air, spring wind and blowing dust make El Paso hard on the tear film. What the National Weather Service records show, and how drops fit in.',
    category: 'local',
    addedOn: '2026-11-11',
    body: [
      {
        p: `El Paso sits in the Chihuahuan Desert, and its air is often very dry: the National Weather Service’s March 2026 report for the city logged an average relative humidity of 23 percent. Dry air, spring wind and dust all pull moisture off the surface of the eye. Quell’s label lists it {uses}, and the directions don’t change with the weather: {directions}.`,
      },
      { h: 'What the weather records say about El Paso air' },
      {
        p: `The National Weather Service office that covers El Paso sits just over the state line in Santa Teresa, New Mexico, and it publishes a climate report at the end of each month. Two recent ones show how little moisture there is to go around.`,
      },
      {
        list: [
          `March 2026: average relative humidity of 23 percent, and 0.01 inches of rain against a 1991–2020 normal of 0.24 inches. The strongest gust of the month was 51 mph, on March 14.`,
          `May 2026: average relative humidity of 28 percent, an average wind speed of 9.8 mph, and a peak gust of 48 mph on May 14.`,
        ],
      },
      {
        p: `The office’s monthly normals pages fill in the rest of the year. April’s normal rainfall is just 0.17 inches. January’s normal high is 58.9°F with a normal low of 33.7°F, so winter mornings are cold enough that most homes run the heat. By June the normal high reaches 97.4°F, and evaporative coolers and air conditioners take over.`,
      },
      { h: 'Why spring is the season people notice' },
      {
        p: `Late winter and spring bring the strong westerly winds El Pasoans know well, the kind that turn the sky over the Franklin Mountains tan with dust. Wind moves air across the eye faster, and the faster air moves over a wet surface, the faster that surface dries. Add grit in the air and a humidity reading in the 20s, and a walk across a parking lot on a March afternoon can leave your eyes feeling scratchy before you reach the door.`,
      },
      {
        p: `On a windy afternoon, a few small habits cut down how much of it reaches your eyes:`,
      },
      {
        list: [
          `Wraparound sunglasses block more side wind than flat lenses, which helps on the walk from the car or across a campus.`,
          `Keep car windows up when dust is blowing on I-10 or Loop 375, and set the vents so they don’t aim at your face.`,
          `Check the forecast before an early hike in the Franklins or a long afternoon outdoors; a wind advisory day is a day to plan around.`,
          `Rinse your hands after being out in dust before you go anywhere near your eyes or the bottle.`,
        ],
      },
      { h: 'Summer heat and the bottle itself' },
      {
        p: `A normal June high of 97.4°F is well above the top of Quell’s storage range: {storage}. A parked car in El Paso gets much hotter than the air outside it, so a bottle left in the console or a door pocket can spend hours out of range. Carry it in a bag that comes inside with you, and keep the spare in a closet or drawer rather than in the garage. [Can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car) goes into the details.`,
      },
      {
        p: `Indoors in summer, swamp coolers add moisture to the air while refrigerated air conditioning tends to remove it, so the same person can feel different depending on which kind of system a building runs. Sitting directly in the stream of a vent dries the eyes either way.`,
      },
      { h: 'Where Quell fits into an El Paso day' },
      {
        p: `The tear film has an oil layer on top, a water layer beneath it and mucus closest to the eye. The oil slows evaporation of the water underneath, and Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. [The tear film’s oil layer](/guides/the-tear-films-oil-layer) explains how those layers work together.`,
      },
      {
        p: `Spacing the three daily drops around the parts of the day that are hardest on your eyes is one way to use the directions. Someone who commutes across town and works outdoors in the afternoon might use one at breakfast, one before heading back out after lunch, and one in the early evening. The label sets the number of drops, not the clock times, so pick times you’ll remember. {tip}, which matters more on a dusty day when grit can settle on a bottle left open on a desk.`,
      },
      { h: 'Ordering to El Paso' },
      {
        p: `Quell ships within the United States from Brentwood, Tennessee, and El Paso addresses are no exception. Standard shipping is {shipping}, and an order of {freeBottles} bottles ships free. There’s no delivery date promised, so order before your last bottle runs out rather than after. The [El Paso page](/eye-drops/el-paso-tx) and the [Texas page](/eye-drops/state/texas) have more on ordering from the area.`,
      },
      { h: 'When the dryness isn’t just the weather' },
      {
        p: `Desert air explains a lot, but not everything. If your eyes still bother you after a calm, still week, or if anything changes in how you see, that’s a reason to see an eye doctor rather than wait for the wind to drop. The label is specific: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in El Paso?',
        a: 'El Paso’s air carries very little moisture, and the National Weather Service’s March 2026 report logged an average relative humidity of 23 percent. Spring wind and blowing dust speed up evaporation from the eye on top of that.',
      },
      {
        q: 'What is the windiest time of year in El Paso?',
        a: 'Late winter and spring are when strong westerly winds and blowing dust are most familiar in El Paso. In March 2026, the National Weather Service recorded a peak gust of 51 mph on March 14.',
      },
      {
        q: 'Can I keep eye drops in my car in El Paso?',
        a: 'Not in summer. June’s normal high in El Paso is 97.4°F according to the National Weather Service, and a parked car runs hotter still. Quell’s label reads: {storage}.',
      },
      {
        q: 'Does Quell ship to El Paso, Texas?',
        a: 'Yes. Quell ships to addresses across the United States from Brentwood, Tennessee, and an order of {freeBottles} bottles ships free. No delivery date is promised, so it’s worth ordering a little ahead.',
      },
    ],
  },

  /*
   * dry-eyes-in-lubbock. Sources fetched 2026-11-11:
   * - https://forecast.weather.gov/product.php?site=NWS&product=CLM&issuedby=LBB&version=7
   *   (April 2026: average wind 13.7 mph, peak gust 64 mph from 240 on 4/1,
   *   0.16 in vs 1.33 in normal, RH 45, normal mean 61.2)
   * - https://forecast.weather.gov/product.php?site=NWS&product=CLM&issuedby=LBB
   *   (October 2026: average wind 9.8 mph, gust 43 mph from 010 on 10/16,
   *   RH 70, normal precipitation 1.53 in, normal mean 61.8)
   * Dropped: elevation and January normal highs/lows (only seen in search
   * snippets, not on a fetched page); cotton acreage (no official page fetched).
   */
  {
    slug: 'dry-eyes-in-lubbock',
    title: 'Dry eyes in Lubbock',
    description:
      'South Plains wind and spring dust are hard on the eyes in Lubbock. What NWS Lubbock’s monthly reports show, and where eye drops fit in a windy week.',
    category: 'local',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Lubbock’s eyes have wind to contend with more than anything. The National Weather Service office in Lubbock recorded an average wind speed of 13.7 mph across April 2026, with a gust of 64 mph on April 1, in a month that saw 0.16 inches of rain. Moving, dry air speeds evaporation from the eye. Quell’s directions stay the same: {directions}.`,
      },
      { h: 'Wind on the South Plains' },
      {
        p: `The Llano Estacado is about as flat as land gets, and there’s nothing between Lubbock and the horizon to slow the wind down. That shapes daily life: trash cans get weighed down, trampolines get staked, and anyone who has lived through a spring here knows the sound of grit against a window.`,
      },
      {
        p: `NWS Lubbock’s monthly climate reports put numbers to it. Here’s how two recent months compare:`,
      },
      {
        list: [
          `April 2026: average wind 13.7 mph; strongest gust 64 mph out of the southwest on April 1; 0.16 inches of rain against a 1991–2020 normal of 1.33 inches; average relative humidity 45 percent.`,
          `October 2026: average wind 9.8 mph; strongest gust 43 mph out of the north on October 16; average relative humidity 70 percent; normal rainfall for the month 1.53 inches.`,
        ],
      },
      {
        p: `So spring runs windier and drier than fall, and that matches what people notice in their eyes. An April afternoon with a southwest wind and humidity in the 40s is a very different day from a damp October morning after a front comes through.`,
      },
      { h: 'Dust from open fields' },
      {
        p: `Lubbock is surrounded by cotton country, and in late winter and spring much of that farmland lies bare between harvest and planting. A strong wind over open ground lifts dust into the air, and on the worst days visibility on the Marsha Sharp Freeway drops and the sky goes brown. Dust doesn’t just dry the eye; it adds particles to a surface that’s already short on moisture.`,
      },
      {
        list: [
          `On high-wind days, keep your face out of the wind where you can: park so you walk with the wind at your back, and use building entrances on the sheltered side.`,
          `Glasses or sunglasses with wide frames block some of the grit; wraparound styles block more.`,
          `Set the car to recirculate when you’re driving through blowing dust, and aim the vents at your chest instead of your eyes.`,
          `Wash your hands after time outdoors before using your drops, and keep the cap on the bottle whenever it isn’t in your hand.`,
        ],
      },
      { h: 'Game days, harvest and long outdoor hours' },
      {
        p: `Fall in Lubbock means Texas Tech football at Jones AT&T Stadium, tailgates in open parking lots, and for many families, cotton harvest. All of it means hours outside with the wind on your face. A dose of Quell before you head out is a reasonable use of one of your three drops, and a second when you’re back inside lines up with the directions. Bring the bottle in a pocket or bag rather than leaving it in the truck, because a cab sitting in the sun can climb past {storage}.`,
      },
      { h: 'Inside, the air works against you too' },
      {
        p: `Winter fronts drop temperatures fast on the plains, and once the furnace kicks on, indoor air dries out. Classrooms, dorms and offices around town run forced-air heat for months. If your desk sits under a vent, ask whether it can be redirected, or move the chair a little. [Winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) covers the home side.`,
      },
      { h: 'What Quell does and what the label says' },
      {
        p: `The tear film’s outer oil layer slows evaporation from the watery layer beneath it. Quell is designed to reinforce that oil layer to help reduce moisture loss, using {actives} as its active ingredients. Its label says it’s {uses}.`,
      },
      {
        p: `Before a first bottle, read the caution that matters most for some people: {warnings}. Quell contains emu oil, and the [Drug Facts](/drug-facts) page has the full panel.`,
      },
      { h: 'Getting Quell in Lubbock' },
      {
        p: `Orders ship from Brentwood, Tennessee, to addresses anywhere in the United States, Lubbock included. Shipping is {shipping} on smaller orders and free once you buy {freeBottles} bottles. See the [Lubbock page](/eye-drops/lubbock-tx) and the [Texas page](/eye-drops/state/texas) for local details.`,
      },
      { h: 'If your eyes don’t settle after the wind does' },
      {
        p: `A windy week can leave your eyes uncomfortable, and they usually feel better once the air calms. If they don’t, see an optometrist or ophthalmologist. The label lays out when to stop: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes hurt when it’s windy in Lubbock?',
        a: 'Wind speeds up evaporation from the surface of the eye, and Lubbock gets a lot of it: NWS Lubbock recorded an average wind of 13.7 mph in April 2026. Eye pain, though, is one of the label’s reasons to stop and see a doctor, so don’t write it off as weather.',
      },
      {
        q: 'Is spring or fall drier in Lubbock?',
        a: 'In 2026, spring was. NWS Lubbock logged an average relative humidity of 45 percent in April, with 0.16 inches of rain, compared with 70 percent in October.',
      },
      {
        q: 'How do I keep dust out of my eyes in Lubbock?',
        a: 'Wraparound glasses, recirculated air in the car and keeping your back to the wind all help on dusty days. Wash your hands before touching anywhere near your eyes or your eye drops.',
      },
      {
        q: 'Can I order Quell to a Lubbock address?',
        a: 'Yes. Quell ships across the United States from Brentwood, Tennessee, with standard shipping at {shipping} and free shipping on {freeBottles} bottles.',
      },
    ],
  },

  /*
   * dry-eyes-in-billings. Sources fetched 2026-11-11:
   * - https://forecast.weather.gov/glossary.php?word=chinook (definition)
   * - https://forecast.weather.gov/product.php?site=NWS&product=CLM&issuedby=BIL&version=14
   *   (January 2026: normal mean 27.0, high 66 on 1/14, low -6 on 1/23,
   *   average wind 14.1 mph, gust 59 mph from 330 on 1/15, precip 0.07 vs
   *   0.55 normal, snow 1.0 vs 10.6 normal, RH 50)
   * - https://forecast.weather.gov/product.php?site=NWS&product=CLM&issuedby=BIL&version=10
   *   (May 2026: gust 61 mph on 5/13, RH 48)
   * - https://forecast.weather.gov/product.php?site=NWS&product=CLM&issuedby=BIL
   *   (October 2026: average wind 8.3 mph, RH 60, snow trace vs 4.5 normal)
   * Dropped: elevation (no official page fetched); any claim that the
   * January 14 high was a chinook (the report does not say what caused it).
   */
  {
    slug: 'dry-eyes-in-billings',
    title: 'Dry eyes in Billings, Montana',
    description:
      'Chinook winds, cold dry winters and big temperature swings in Billings. What the NWS reports show and how eye drops fit a Yellowstone Valley winter.',
    category: 'local',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Billings winters bring cold air that holds little moisture, long stretches of indoor heat, and gusty winds off the Rockies that the National Weather Service calls chinooks. In January 2026, NWS Billings recorded an average wind of 14.1 mph and a gust of 59 mph. Those conditions speed evaporation from the eye. Quell’s directions are simple: {directions}.`,
      },
      { h: 'What a chinook is' },
      {
        p: `The National Weather Service glossary describes a chinook as the regional name for foehn winds in the lee of the Rocky Mountains: warm, dry gusts that form downwind of high ranges and are common in winter across the mountainous West. In Billings, that means a frigid week can give way to a mild, blustery one with very little warning.`,
      },
      { h: 'January 2026 in Billings, by the numbers' },
      {
        p: `The NWS Billings monthly report for January 2026 shows how much a single winter month can swing.`,
      },
      {
        list: [
          `Highest temperature: 66°F on January 14. Lowest: −6°F on January 23. That’s a 72-degree spread inside ten days.`,
          `Average wind speed: 14.1 mph, with the strongest gust, 59 mph out of the north-northwest, on January 15.`,
          `Precipitation: 0.07 inches against a 1991–2020 normal of 0.55 inches, and 1.0 inch of snow against a normal of 10.6 inches.`,
          `Normal monthly mean temperature: 27.0°F.`,
        ],
      },
      {
        p: `The report doesn’t say what drove the January 14 warmth, so don’t read every warm day as a chinook. What matters for your eyes is the combination: a dry month, a lot of wind, and air that’s either bitterly cold outside or heated hard indoors.`,
      },
      { h: 'Cold outside, furnace inside' },
      {
        p: `Cold air can’t carry much water, and when a furnace warms it to room temperature its relative humidity falls further. A house in the Heights or on the West End running forced-air heat from November into April can feel parched by February. A few things help in the rooms where you spend the most time:`,
      },
      {
        list: [
          `Turn floor and ceiling registers so they don’t blow toward the couch or the bed.`,
          `Keep your car’s defrost aimed at the windshield, not at your face, on the drive down 27th Street or out to the Heights.`,
          `A humidifier in the bedroom adds moisture back; clean it as the manufacturer says.`,
          `Keep the bottle in a drawer or cabinet, not on a windowsill that drops toward freezing at night or on top of a baseboard heater.`,
        ],
      },
      {
        p: `That last point is about the drops themselves: {storage}. A truck left parked outside through a Billings January night falls far below that, so bring the bottle in with you.`,
      },
      { h: 'Wind in other seasons' },
      {
        p: `Winter isn’t the only windy stretch. NWS Billings recorded a 61 mph gust on May 13, 2026, and an average relative humidity of 48 percent that month. October was calmer, averaging 8.3 mph of wind with humidity around 60 percent, and only a trace of snow against a normal of 4.5 inches. Spring wind along the Yellowstone River valley and up on the Rimrocks catches people hiking, fishing or watching a game outdoors.`,
      },
      { h: 'Outdoors around Billings' },
      {
        p: `Ice fishing, a ski day at Red Lodge Mountain, a drive toward Yellowstone, or a cold walk along the river trail all put moving, dry air on your eyes. Goggles or wraparound sunglasses help on the slopes and the ice. If you’re heading up the Beartooth Highway in summer, remember the bottle in the glove box: cars get hot in a sunny lot even in Montana. [Ski trips, cold wind and dry eyes](/guides/ski-trips-and-dry-eyes) has more for the mountains.`,
      },
      { h: 'Where Quell fits' },
      {
        p: `The tear film’s outer oil layer slows evaporation from the water layer beneath it. Quell is designed to reinforce that oil layer to help reduce moisture loss, and its label lists it {uses}. Three drops a day can be timed around your hardest hours: before a cold commute, midday at a heated desk, and early evening after time outside. {tip}.`,
      },
      { h: 'Ordering to Billings' },
      {
        p: `Quell ships from Brentwood, Tennessee, to addresses throughout the United States. Shipping is {shipping}, free on {freeBottles} bottles, and no delivery date is promised, so winter storms on the way are worth planning for. See the [Billings page](/eye-drops/billings-mt) and the [Montana page](/eye-drops/state/montana) for local information.`,
      },
      { h: 'When to call an eye doctor' },
      {
        p: `A dry, windy winter is a common reason for eyes to feel uncomfortable. If yours don’t improve when the weather turns, or your vision changes, see an eye doctor. From the label: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What is a chinook wind in Montana?',
        a: 'The National Weather Service glossary describes a chinook as the regional name for foehn winds east of the Rocky Mountains: warm, dry, gusty winds that come down the lee side of the range, most often in winter.',
      },
      {
        q: 'Why are my eyes dry in Billings in winter?',
        a: 'Cold outdoor air holds little moisture, furnaces dry indoor air further, and Billings winters are windy: NWS Billings recorded an average wind of 14.1 mph in January 2026. All three speed evaporation from the eye.',
      },
      {
        q: 'Can eye drops freeze in a car in Montana?',
        a: 'A parked car in a Billings winter gets far colder than the range on Quell’s label ({storage}). Keep the bottle in a coat pocket or bring it indoors instead of leaving it in the vehicle.',
      },
      {
        q: 'Does Quell ship to Billings, MT?',
        a: 'Yes, Quell ships to Montana addresses from Brentwood, Tennessee. Shipping is {shipping}, or free when you order {freeBottles} bottles.',
      },
    ],
  },

  {
    slug: 'eye-drops-for-gamers',
    title: 'Eye drops for gamers',
    description:
      'Long sessions mean fewer blinks and drier eyes. How to set up the room, pace breaks between matches and fit drops into the label’s directions.',
    category: 'using',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Gamers stare hard at a screen for hours, and concentration cuts how often you blink, so the tear film has longer to evaporate between blinks. Lubricating drops can help when eyes feel dry. Quell’s label lists it {uses}, and its directions are {directions}, so plan them around sessions rather than adding more during a long night.`,
      },
      { h: 'Eye strain from video games: what’s going on' },
      {
        p: `Each blink spreads a fresh layer of tears across the eye. When you’re tracking enemies across a map or reading a fast-scrolling raid chat, you blink less often and sometimes only halfway. The surface of the eye dries out a little between those blinks, and over a three-hour session that adds up to the gritty, tired feeling that sends people searching for answers.`,
      },
      {
        p: `Competitive play makes it worse than casual play. A tense ranked match or a speedrun attempt holds your gaze rigidly on one spot; a relaxed open-world session lets your eyes wander more. If your eyes feel worst after ranked nights, that’s probably why.`,
      },
      { h: 'Set up the rig for your eyes' },
      {
        list: [
          `Sit far enough back. A monitor that fills your entire field of view forces more eye movement and less blinking. If you’re on a big TV, sit farther from it than you would a desk monitor.`,
          `Put the top of the monitor at or slightly below eye level, so you look a little downward. Your lids cover more of the eye that way, and less surface is exposed to the air.`,
          `Match screen brightness to the room. A bright screen in a dark bedroom makes you squint; a lamp behind the monitor evens it out.`,
          `Turn PC fans, desk fans and air-conditioning vents so they don’t blow across your face.`,
          `Keep a glass of water on the desk; you’ll reach for it during loading screens.`,
        ],
      },
      { h: 'Breaks between matches' },
      {
        p: `The natural pauses in a game are your breaks. Lobby queues, respawn timers, cutscenes you’ve already seen and the walk to the fridge all count. Use them to look across the room or out a window, which relaxes the focusing muscles, and to blink deliberately a few times. A full, slow blink does more to spread the tear film than a dozen fast half-blinks.`,
      },
      {
        p: `A simple routine for a long session might look like this:`,
      },
      {
        list: [
          `Before you start, take one of your three daily drops, then give it a minute before you put the headset on.`,
          `Between every match or two, look away from the screen for twenty seconds and blink slowly.`,
          `Every hour or so, stand up, stretch and leave the room for a few minutes.`,
          `After a long session, use another of your daily drops if your eyes feel dry, and keep the third for whatever part of the day is hardest on them.`,
        ],
      },
      { h: 'Eye drops for gaming: how to use them well' },
      {
        p: `The label doesn’t change for gamers, and it doesn’t allow extra drops for long sessions. Three drops a day is the direction; if you find yourself wanting more, that’s a question for an eye doctor. [Can I use more than three drops a day?](/guides/can-i-use-more-than-three-drops-a-day) explains why.`,
      },
      {
        p: `Hands that have been on a controller or a mouse for hours aren’t clean. Wash them before using drops, and remember the label’s instruction: {tip}. Don’t set the open bottle down on the desk next to the keyboard while you tilt your head back.`,
      },
      {
        p: `Quell is a milky brown emulsion. {appearance} It may blur your view for a moment after a drop, so put one in between matches, not mid-fight.`,
      },
      { h: 'Keep the bottle off the console' },
      {
        p: `Consoles and gaming PCs push warm air out of their vents, and the top of a console or the shelf behind a tower is often the warmest spot in the room. Quell’s label says {storage}. A drawer in the desk or a shelf across the room keeps it in range. The same goes for a gaming laptop bag left in a hot car, which [can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car) covers.`,
      },
      { h: 'Eye drops for video games and LAN events' },
      {
        p: `At a tournament or LAN party, the air in a hall full of machines tends to be warm and dry, and the sessions run long. Pack the bottle in a pocket of your backpack, not loose next to your laptop charger. If you’re flying to an event, [traveling with eye drops](/guides/traveling-with-eye-drops) covers what airport security allows.`,
      },
      { h: 'What drops can’t fix' },
      {
        p: `Drops address dryness. They won’t fix a screen that’s too close, a room that’s too dark or a session that’s simply too long. If your eyes ache, your vision blurs and doesn’t clear, or the discomfort follows you into days you don’t play, see an eye doctor. The label is clear: {stopUse}`,
      },
      {
        p: `Players under 18 can’t order from this site and should talk to a parent and a doctor before using any eye drops. The label doesn’t cover contact lenses either, and plenty of gamers wear them; [contact lenses and Quell](/guides/contact-lenses-and-quell) explains what to ask your eye doctor.`,
      },
    ],
    faq: [
      {
        q: 'Do gamers need eye drops?',
        a: 'Not necessarily, but long sessions reduce blinking and can leave eyes feeling dry. Lubricating drops like Quell are for relieving dryness, used as the label directs, alongside regular breaks and a sensible screen setup.',
      },
      {
        q: 'How often can I use eye drops while gaming?',
        a: 'Quell’s label directs {directions}, whatever you’re doing. Gaming doesn’t change that; if you want more, ask an eye doctor first.',
      },
      {
        q: 'Why do my eyes hurt after gaming?',
        a: 'Concentration reduces blinking, so the eye’s surface dries between blinks, and long focus at one distance tires the eyes. Pain specifically is one of the label’s reasons to stop using drops and see a doctor.',
      },
      {
        q: 'Where should I keep eye drops in my gaming setup?',
        a: 'Away from console vents, PC exhaust and sunny windowsills. A desk drawer or shelf at room temperature keeps the bottle within the label’s storage range.',
      },
    ],
  },

  {
    slug: 'eye-drops-for-computer-users',
    title: 'Eye drops for computer users',
    description:
      'Working at a computer cuts your blink rate. How to set up the desk, use the AAO’s 20-20-20 habit and space three drops across a workday as the label directs.',
    category: 'using',
    addedOn: '2026-11-11',
    body: [
      {
        p: `If you work at a computer, your eyes can feel dry by mid-afternoon because you blink less while concentrating on a screen. Lubricating drops are one part of the answer: Quell’s directions read {directions}, which fits neatly into a workday as a morning, midday and late-afternoon drop. Desk setup and regular breaks do the rest.`,
      },
      { h: 'Eye drops for computer users: building them into a workday' },
      {
        p: `The label sets how many drops you use, not when. Tying each one to something you already do every workday is the easiest way to remember them. One schedule that suits an office job:`,
      },
      {
        list: [
          `Morning: after you sit down and before you open your inbox. Your eyes start the day at their freshest, and the first hour of email is often the most intense screen time.`,
          `Midday: when you step away for lunch. Using a drop away from the desk gives your eyes a minute to settle before you look at a screen again.`,
          `Late afternoon: around 3 or 4 o’clock, when the long stretch of meetings and spreadsheets tends to catch up with people.`,
        ],
      },
      {
        p: `If you work remotely, attach the drops to fixed points in your home routine instead, like the first coffee, the lunch break and the school pickup. A [simple eye drop log](/guides/keeping-an-eye-drop-log) helps for the first couple of weeks, until the habit sticks.`,
      },
      { h: 'Where to put the monitor' },
      {
        p: `The American Academy of Ophthalmology advises adjusting your screen so that your eyes gaze slightly downward. Looking down means your eyelids cover more of the eye, and less of its surface is exposed to the air. Practically, that puts the top edge of the monitor at or a little below eye level.`,
      },
      {
        list: [
          `On a laptop, a stand plus a separate keyboard lets you raise the screen without hunching.`,
          `With two monitors, put the one you use most directly in front of you, so you aren’t holding your head turned for hours.`,
          `Cut glare: windows behind you reflect off the screen, and you’ll squint into it without noticing. Turn the desk or close a blind.`,
          `Bump up the text size. If you lean in to read, the screen is too small or too far for the font you’re using.`,
        ],
      },
      { h: 'The 20-20-20 habit' },
      {
        p: `The American Academy of Ophthalmology’s guidance on eye strain says that every 20 minutes you should shift your eyes to look at something at least 20 feet away, for at least 20 seconds. A window works well; so does the far wall of an open-plan office. Many people set a recurring timer, or tie the habit to something that already happens often, like sending a message or finishing a spreadsheet tab.`,
      },
      {
        p: `While you’re looking away, blink a few times on purpose. Full blinks spread the tear film across the eye in a way the quick half-blinks you make while typing don’t.`,
      },
      { h: 'Eye drops for screen strain vs. screen habits' },
      {
        p: `Strain and dryness overlap but aren’t the same thing. Tired, achy eyes after a long day of close focus are partly about the focusing muscles, which breaks address. Dry, gritty or burning eyes are about the tear film evaporating, which is where a lubricating drop fits. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss; [the tear film’s oil layer](/guides/the-tear-films-oil-layer) explains why that layer matters.`,
      },
      {
        p: `Neither drops nor breaks fix a prescription that’s out of date. If you’re squinting at the screen or the text looks soft, an eye exam is the next step, and you can say you spend most of the day at a computer so the eye doctor can account for that distance.`,
      },
      { h: 'Eye drops for computer screen use at the desk' },
      {
        p: `Keeping the bottle in a desk drawer is fine as long as the office stays within the label’s range: {storage}. A drawer is better than the desktop by a sunny window or under a heater. Before each drop, wash your hands; keyboards and mice collect more than most people realize. Then: {tip}.`,
      },
      {
        p: `Quell may blur your view briefly, so wait a moment before you look back at the screen and keep typing.`,
      },
      { h: 'Eye drops for screen time on top of the workday' },
      {
        p: `Many people finish eight hours at a computer and then spend the evening on a phone or tablet. The label still allows three drops in total, not three per screen. If your eyes feel dry well into the evening on a regular basis, it’s worth mentioning to an eye doctor rather than stretching the directions.`,
      },
      { h: 'When it’s more than a long day at the screen' },
      {
        p: `Screens explain a lot of end-of-day dryness, not all of it. If the discomfort continues on weekends away from a computer, or your vision changes, stop and get it checked. The label says: {stopUse} [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists what to watch for.`,
      },
    ],
    faq: [
      {
        q: 'Are eye drops good for computer users?',
        a: 'Lubricating drops can relieve dryness that builds up from reduced blinking at a computer. Quell’s label directs {directions}, and those three can be spaced across a workday.',
      },
      {
        q: 'What is the 20-20-20 rule for eyes?',
        a: 'The American Academy of Ophthalmology advises that every 20 minutes you look at something at least 20 feet away for at least 20 seconds. It gives the focusing muscles a break and is a good moment to blink fully.',
      },
      {
        q: 'When should I use eye drops during the workday?',
        a: 'Quell’s label sets three drops a day without fixed times. Morning, midday and late afternoon is one easy pattern for an office job, tied to arriving, lunch and the mid-afternoon slump.',
      },
      {
        q: 'Should my computer monitor be at eye level?',
        a: 'The American Academy of Ophthalmology suggests positioning the screen so your eyes look slightly downward, which usually means the top of the monitor sits at or just below eye level.',
      },
    ],
  },

  {
    slug: 'dry-eyes-when-reading',
    title: 'Dry eyes when reading',
    description:
      'Get lost in a book and you blink less. Why reading dries the eyes, how print, e-readers and tablets differ, and where lubricating drops fit in.',
    category: 'using',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Reading dries the eyes for a simple reason: when you’re absorbed in a page, you blink less, and the tear film evaporates between blinks. A low reading position helps, because looking down narrows the eye opening. Regular pauses, a good light and lubricating drops used as the label directs, {directions}, cover the rest.`,
      },
      { h: 'Why a good book makes you blink less' },
      {
        p: `Blinking slows down whenever attention locks onto something, and a gripping chapter is about as locked-on as attention gets. Each skipped blink leaves the surface of the eye exposed a little longer. Readers often notice it as a scratchy or heavy feeling after an hour or two, sometimes with the words starting to swim, and the urge to rub their eyes when they close the book.`,
      },
      { h: 'Looking down vs. looking straight ahead' },
      {
        p: `Where the page sits matters more than most readers expect. When you look down at a book in your lap, your upper lids drop and cover more of the eye, so less of it meets the air. Hold a tablet up at eye level, or prop a book on a stand in front of your face, and the eye opens wider.`,
      },
      {
        list: [
          `In a chair, rest the book on a pillow in your lap so you’re reading slightly downward.`,
          `At a table, a low book stand angled toward you keeps the page below eye level without hunching.`,
          `In bed, lying flat on your back with the book held overhead opens the eyes wide; sitting up against pillows is gentler on them.`,
        ],
      },
      { h: 'Print, e-readers and tablets' },
      {
        p: `All three involve the same reduced blinking, but they differ in other ways. Paper and e-ink screens don’t give off light of their own, so you depend on the lamp in the room. Backlit tablets and phones carry their own light, which makes reading in the dark possible and also tempts people to read far later than they would with a paperback.`,
      },
      {
        list: [
          `Print: choose editions with larger type when you can; squinting at small print is tiring.`,
          `E-ink readers: raise the font size and line spacing instead of pulling the device closer.`,
          `Tablets and phones: match brightness to the room, and hold the screen at a comfortable distance instead of right under your nose.`,
        ],
      },
      { h: 'Getting the light right' },
      {
        p: `A reading light should land on the page, not in your eyes. A lamp over your shoulder, on the side opposite your writing hand if you take notes, lights the page without glare. In a dim room your eyes work harder to make out the text, and a single bright spot in a dark room is uncomfortable too, so keep some general light on as well.`,
      },
      {
        p: `Watch where the air comes from as well. A favorite reading chair beside a heating register, under a ceiling fan or by a window air conditioner puts moving air across your eyes for the whole chapter. Moving the chair a few feet can make a noticeable difference.`,
      },
      { h: 'Use the book’s own breaks' },
      {
        p: `Books come with natural stopping points. At the end of each chapter, or every few pages if the chapters are long, look up and across the room for a moment and blink slowly a few times. A page turn can be a cue too: blink fully each time you turn one. It sounds fussy, but it quickly becomes automatic.`,
      },
      { h: 'Long reading sessions: where drops fit' },
      {
        p: `If you settle in for an afternoon with a novel, or spend a long evening with a stack of work documents, plan your drops around it. One before you start and one when you stop is a reasonable use of two of the three daily drops. Quell may blur things for a short moment, so read the next sentence after your vision clears rather than straight away.`,
      },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. That outer layer is what slows evaporation while your blinks are spaced out, and [the tear film’s oil layer](/guides/the-tear-films-oil-layer) explains how it works. Keep the bottle on a shelf near your reading spot rather than on a radiator cover or a sunny windowsill; the label says {storage}.`,
      },
      { h: 'Reading on trips' },
      {
        p: `Planes, trains and cars are dry places to read. Cabin air is dry, and car vents aimed at your face make it worse. If you read in transit, point the overhead vent or the dashboard vent away and take more breaks than you would at home. [Traveling with eye drops](/guides/traveling-with-eye-drops) covers packing the bottle.`,
      },
      { h: 'When reading isn’t the whole story' },
      {
        p: `If print looks blurry, if you hold books farther and farther away, or if headaches come with reading, an eye exam makes more sense than drops; many people simply need reading glasses or an updated prescription at some point. And if dryness continues even on days you barely read, see an eye doctor. The label is clear: {stopUse} You can also take the [dry eye self-check](/self-check) to organize what you notice before an appointment; it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when I read?',
        a: 'Concentrating on text slows your blinking, so the tear film has longer to evaporate between blinks. Reading with the book held up at eye level, near a vent or in poor light makes it more noticeable.',
      },
      {
        q: 'Is it better to read looking down?',
        a: 'For dryness, a slightly downward gaze helps, because your upper eyelids cover more of the eye. Resting a book in your lap or on a low stand does that naturally.',
      },
      {
        q: 'Do e-readers cause dry eyes?',
        a: 'Any kind of absorbed reading reduces blinking, whether it’s paper, e-ink or a tablet. Larger fonts, sensible brightness and regular breaks matter more than the format.',
      },
      {
        q: 'Can I use eye drops before reading?',
        a: 'Yes, within the label’s directions of three drops a day. Give your vision a moment to clear before you start reading, since a drop of Quell can blur things briefly.',
      },
    ],
  },

  {
    slug: 'dry-eyes-while-studying',
    title: 'Dry eyes while studying for exams',
    description:
      'Finals, library hours and late nights on a laptop leave eyes dry and tired. How students can set up study sessions, and who can order lubricating drops.',
    category: 'using',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Studying for exams means long hours of focused reading and screen work, often in dry, heated buildings and late into the night, and all of it slows blinking. Spacing study blocks with short breaks, keeping a laptop at a sensible height and using lubricating drops as directed, {directions}, all help. Buyers here must be 18 or older.`,
      },
      { h: 'Why exam season is hard on your eyes' },
      {
        p: `Exam prep stacks several things that dry the eyes at once. You’re reading dense material that demands concentration, switching between a laptop, a textbook and handwritten notes, and doing it for many more hours a day than usual. Libraries and dorms in late fall run their heat high, and the stretch before finals is also when sleep tends to get cut short.`,
      },
      { h: 'Structure the study session' },
      {
        p: `Breaking work into blocks helps your memory and your eyes at the same time. One pattern many students use:`,
      },
      {
        list: [
          `Study for 25 to 50 minutes on one topic.`,
          `Stop for five to ten minutes. Stand up, look out a window or down a long hallway, and blink slowly a few times.`,
          `After three or four blocks, take a longer break away from screens and paper altogether: a walk, a meal, a conversation.`,
          `Switch subjects or formats between blocks, from reading to practice problems or from screen to flashcards, so your eyes aren’t doing exactly the same task for hours.`,
        ],
      },
      {
        p: `The American Academy of Ophthalmology’s eye strain guidance suggests looking at something at least 20 feet away for at least 20 seconds every 20 minutes. A library reading room, with its long sightlines, makes that easy.`,
      },
      { h: 'Laptops, libraries and dorm rooms' },
      {
        list: [
          `Laptop height: a stack of textbooks under the laptop and a cheap external keyboard bring the screen to a better height, with your eyes looking slightly downward.`,
          `Library seats: carrels near heating vents or under air returns are warmer and drier. If your eyes bother you, try a different floor or a seat away from the vents.`,
          `Dorm rooms: radiators and forced-air heat in older residence halls can make a small room very dry by midwinter. Keep your desk out of the direct airflow and keep the bottle off the radiator.`,
          `Study lamps: light the page or keyboard, not your face, and avoid working on a bright screen in an otherwise dark room.`,
        ],
      },
      { h: 'Late nights and early exams' },
      {
        p: `Studying until the small hours adds waking hours, and every extra hour with your eyes open is another hour of evaporation, usually in front of a screen. If you’re going to run late, close the laptop for the last half hour and review from paper notes or flashcards, then give your eyes a rest. Your exam the next morning will also go better on some sleep. [Dry eyes from lack of sleep](/guides/dry-eyes-from-lack-of-sleep) goes further into tired eyes.`,
      },
      { h: 'Where lubricating drops fit in a study day' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Three drops a day can line up with a study schedule: one when you start in the morning, one at the midpoint, and one before your longest evening session. Don’t add extra drops before an exam because the day feels important; the label doesn’t allow for that, and [can I use more than three drops a day?](/guides/can-i-use-more-than-three-drops-a-day) explains what to do instead.`,
      },
      {
        p: `In a shared study space or a library, wash your hands first, then follow the label: {tip}. Don’t share a bottle with a roommate or study partner, however friendly the offer. Quell may blur your vision for a moment, so use it before you sit down to read, not in the middle of a timed practice test.`,
      },
      { h: 'Bringing drops to campus' },
      {
        p: `A bottle fits in a backpack pocket. Keep it away from the laptop charger brick and out of a car parked in the sun; the label says {storage}. Quell ships to US addresses, including campus mailing addresses, from Brentwood, Tennessee, with no delivery date promised, so order well before finals week. Check your school’s rules on mail and package pickup.`,
      },
      { h: 'Students under 18' },
      {
        p: `You have to be 18 to order from this site, so high school students and younger college students can’t buy here themselves. If you’re under 18 and your eyes feel dry while studying, talk to a parent or guardian, and have them talk to your doctor before you use any eye drops. Quell’s label doesn’t give directions for children, and [eye drops and children](/guides/eye-drops-and-children) explains what it does and doesn’t say. Parents ordering for a college student can read [do you have to be 18 to order?](/guides/do-you-have-to-be-18-to-order) for the rules.`,
      },
      { h: 'When to get your eyes checked' },
      {
        p: `If you’re squinting at slides from the back of a lecture hall, getting headaches while reading, or still feeling discomfort on days off, book an eye exam; many campuses have a student health center that can point you to one. The label lists when to stop: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when I study?',
        a: 'Focused reading and laptop work slow your blinking, so the eye surface dries between blinks. Long study hours, heated libraries and dorms, and late nights add to it.',
      },
      {
        q: 'Can college students order Quell?',
        a: 'Yes, if they’re 18 or older. Quell ships to US addresses, including campus addresses, though no delivery date is promised, so order ahead of finals.',
      },
      {
        q: 'Can a 16-year-old use eye drops for studying?',
        a: 'Quell’s label doesn’t give directions for children, and buyers on this site must be 18. A teenager with dry eyes should talk to a parent and a doctor before using any drops.',
      },
      {
        q: 'How do I rest my eyes while studying?',
        a: 'Study in blocks with short breaks, look at something far away and blink slowly during them, and keep your laptop slightly below eye level. The American Academy of Ophthalmology suggests a 20-second look at something 20 feet away every 20 minutes.',
      },
    ],
  },

  {
    slug: 'dry-eyes-from-lack-of-sleep',
    title: 'Dry eyes from lack of sleep',
    description:
      'Short nights mean long days with your eyes open, often on screens. Why tired eyes feel dry, what helps, and when to talk to a doctor.',
    category: 'using',
    addedOn: '2026-11-11',
    body: [
      {
        p: `When you sleep less, you spend more hours with your eyes open, and every waking hour lets the tear film evaporate, especially in front of a screen or in dry indoor air. Tired eyes also tend to feel heavy and gritty. Lubricating drops can relieve dryness within the label’s directions, but if poor sleep is ongoing, talk to a doctor.`,
      },
      { h: 'More waking hours, more time drying out' },
      {
        p: `While your eyes are closed, they aren’t exposed to the air in the room. Cut a night from eight hours to five, and you’ve added three hours to the day in which the tear film is working against evaporation. Those extra hours usually aren’t spent outdoors in fresh air, either: they’re late evenings on a phone, a laptop or a TV, all of which slow blinking.`,
      },
      { h: 'Where the extra hours go' },
      {
        list: [
          `Scrolling in bed after the lights are out, with a bright screen close to your face.`,
          `A late night of work or study at a desk under a heating vent.`,
          `Long drives, late flights and early starts, often with car or cabin air blowing on you.`,
          `Night feeds and wake-ups with a new baby, followed by a full day.`,
        ],
      },
      {
        p: `None of these is unusual, and each is manageable on its own. When they stack up for a week or two, many people notice their eyes feel drier and more tired than usual.`,
      },
      { h: 'Why tired eyes feel the way they do' },
      {
        p: `Tired eyes are a common, general complaint: heavy lids, a gritty feeling, the urge to rub them, trouble keeping focus on small text. Rubbing can feel good for a second, but it’s rough on the eyes and moves whatever’s on your fingers onto them, so try to keep your hands away. A cool, clean washcloth over closed eyes for a few minutes is a gentler break.`,
      },
      { h: 'Small changes on short-sleep days' },
      {
        list: [
          `Turn screen brightness down in the evening and hold the phone farther away.`,
          `Take short breaks from screens through the day and look into the distance for a few seconds.`,
          `Keep your bedroom air from getting too dry in winter; a humidifier helps some people.`,
          `Point car vents and desk fans away from your face.`,
          `If you can, protect at least one longer night a week.`,
        ],
      },
      {
        p: `These aren’t sleep advice, which is a doctor’s territory. They’re ways to take some of the load off your eyes during the hours you are awake.`,
      },
      {
        p: `Shift workers face a version of this every week. Sleeping in daylight, then working through the night under fluorescent lights and in climate-controlled air, stretches the eyes’ open hours in an unusual pattern. If that’s your schedule, tie your three drops to points in your shift rather than to the clock, so the routine stays the same whether you start at 7 a.m. or 7 p.m. A [simple eye drop log](/guides/keeping-an-eye-drop-log) makes it easier to keep count across odd hours.`,
      },
      { h: 'Using eye drops on a tired day' },
      {
        p: `Quell’s label lists it {uses}, and the directions are {directions}. A long day doesn’t change the number. One way to cover a day that starts early and ends late is to spread the three drops farther apart: one in the morning, one mid-afternoon, and one in the evening before the last stretch of screen time. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is what slows evaporation over those added hours.`,
      },
      {
        p: `When you’re exhausted it’s easy to get careless. Wash your hands, and keep the label’s instruction in mind: {tip}. Put the cap back on before you set the bottle down, and keep it somewhere you won’t knock it off a nightstand. Store it as the label says: {storage}.`,
      },
      { h: 'What the label doesn’t cover' },
      {
        p: `Quell’s label doesn’t say anything about using drops right before sleep or while sleeping. If you wake with dry eyes regularly, ask your eye doctor what to do at night rather than improvising. [Waking up with dry eyes in winter](/guides/waking-up-with-dry-eyes-in-winter) covers the bedroom side.`,
      },
      { h: 'When to see a doctor' },
      {
        p: `Ongoing trouble sleeping is something to raise with your primary care doctor, both for its own sake and because it affects so much else. For your eyes, the label sets the line: {stopUse} Sudden changes in vision or eye pain shouldn’t be put down to a bad night. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the warning signs, and the [self-check](/self-check) can help you describe what you notice.`,
      },
    ],
    faq: [
      {
        q: 'Can lack of sleep cause dry eyes?',
        a: 'Sleeping less means more hours with your eyes open, often on screens or in dry indoor air, and more time for the tear film to evaporate. If short sleep or dry eyes continue, talk to a doctor.',
      },
      {
        q: 'Why do my eyes feel gritty when I’m tired?',
        a: 'Long waking hours, reduced blinking at screens and dry room air all leave the surface of the eye drier. Gritty, heavy-feeling eyes are common after short nights, but eye pain or vision changes need a doctor.',
      },
      {
        q: 'Can I use eye drops when I haven’t slept?',
        a: 'Yes, as the label directs: {directions}. A long day doesn’t change that number, so spread the three drops across your waking hours.',
      },
      {
        q: 'Should I put eye drops in before bed?',
        a: 'Quell’s label doesn’t address using drops at bedtime or during sleep. Ask your eye doctor if you’re thinking about a nighttime routine.',
      },
    ],
  },

  {
    slug: 'waking-up-with-dry-eyes-in-winter',
    title: 'Waking up with dry eyes in winter',
    description:
      'Dry, scratchy eyes first thing in the morning? How bedroom heat, fans and vents dry the air while you sleep, and how to start the day with your first drop.',
    category: 'seasonal',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Eyes often feel driest on waking in winter because the heating has been drying the bedroom air for hours, and a fan or a vent near the bed moves that air across your face. Changing the bedroom’s airflow and humidity can help. A lubricating drop can be your first of the day, within the label’s directions: {directions}.`,
      },
      { h: 'Why are my eyes dry in winter?' },
      {
        p: `Cold winter air holds very little moisture. Once a furnace, heat pump or radiator warms it, the relative humidity indoors drops sharply, and that drier air pulls water from anything wet, including the surface of your eyes. Bedrooms are often the worst room in the house, because the door is closed, the heat runs for hours, and nobody notices the air until morning.`,
      },
      {
        p: `Your eyes are mostly closed while you sleep, but the air still matters: the moment you open them, they meet whatever the room has become. The tear film’s outer oil layer is what slows evaporation once you’re up and blinking, and Quell is designed to reinforce that oil layer to help reduce moisture loss. [The tear film’s oil layer](/guides/the-tear-films-oil-layer) explains the three layers. Winter mornings bring their own extra drying, too, like a hot shower followed by a blow dryer aimed near your face, or scraping the car windshield in a cold wind.`,
      },
      { h: 'Dry eyes in the morning: what in the bedroom is drying them' },
      {
        list: [
          `A heating vent next to or above the bed blowing warm air toward your pillow.`,
          `A ceiling fan left on from summer, or switched on in winter to push warm air down.`,
          `A space heater pointed at the bed.`,
          `An electric blanket set high, which warms the air right around your face.`,
          `A bed pushed against an outside wall with a drafty window.`,
        ],
      },
      { h: 'Rearranging the room for winter' },
      {
        p: `Small changes to the room usually do more than any single product. Try them one at a time, so you can tell which made a difference.`,
      },
      {
        list: [
          `Close or redirect the register nearest the bed, or fit a simple vent deflector so the air goes along the floor.`,
          `Turn the ceiling fan off at night, or at least to its lowest setting.`,
          `Set the bedroom thermostat a few degrees cooler at night, so the furnace cycles less often and pushes less hot air into the room.`,
          `Run a bedroom humidifier and clean it as the manufacturer says, since a dirty tank isn’t something you want to breathe.`,
          `Move the bed or the pillow end away from the vent if the layout allows.`,
        ],
      },
      { h: 'Dry eyes in the morning when I wake up: the first drop of the day' },
      {
        p: `Quell’s directions are three drops a day, and the label doesn’t set the times. Using the first one shortly after you get up is a sensible way to start a winter morning. A few steps make it go smoothly:`,
      },
      {
        list: [
          `Wash your hands before you touch anywhere near your eyes.`,
          `Blink a few times and give your eyes a minute to adjust to the light.`,
          `Tilt your head back, pull down the lower lid gently and let one drop fall into the pocket.`,
          `{tip}.`,
          `Close your eyes for a moment, then repeat in the other eye.`,
        ],
      },
      {
        p: `Quell may blur things for a moment. Put it in before you read your phone or start the coffee, not on the way out the door to drive.`,
      },
      { h: 'What about using drops at night?' },
      {
        p: `The label doesn’t say anything about using Quell at bedtime or while sleeping. If you wake up with dry eyes most mornings even after changing the room, ask your eye doctor what they suggest for the night. It’s also worth mentioning if anyone has told you your eyes don’t fully close when you sleep, since that’s something the doctor can look at.`,
      },
      { h: 'Keep the bottle out of the bedroom cold and heat' },
      {
        p: `A nightstand by a drafty window can get cold on a January night, and a shelf above a baseboard heater can get warm. The label says {storage}. A drawer in an inside wall of the room is usually the steadiest spot. [How to store eye drops](/guides/how-to-store-eye-drops) covers more.`,
      },
      { h: 'When morning dryness needs a doctor' },
      {
        p: `Waking up with mildly dry eyes in a heated bedroom is common. Waking up with painful eyes, with lids stuck together, or with vision that doesn’t clear after a few blinks is different and needs an eye doctor. The label puts it this way: {stopUse} For the rest of the house, see [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes).`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes dry when I wake up in winter?',
        a: 'Heating dries bedroom air for hours while you sleep, and vents, fans or space heaters can move that air across your face. Redirecting airflow and adding humidity often helps.',
      },
      {
        q: 'Should I turn off the ceiling fan if my eyes are dry in the morning?',
        a: 'It’s worth trying. A fan moves air across your face for hours while you sleep, which speeds evaporation; turning it off or down for a week shows whether it’s part of the cause.',
      },
      {
        q: 'Can I use eye drops as soon as I wake up?',
        a: 'Yes. Quell’s directions are three drops a day without fixed times, so the first one can come right after you get up. Wash your hands first.',
      },
      {
        q: 'Can I use Quell while I sleep?',
        a: 'The label doesn’t address using Quell at bedtime or during sleep. Ask your eye doctor about a nighttime routine if morning dryness keeps happening.',
      },
    ],
  },

  {
    slug: 'dry-eyes-in-a-heated-office',
    title: 'Dry eyes in a heated office in winter',
    description:
      'Forced-air heat, a desk under a vent and a thermostat nobody controls. How to cut the dry air at work in winter and keep eye drops at your desk.',
    category: 'seasonal',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Office buildings in winter run forced-air heat for most of the workday, and warming cold outside air lowers its relative humidity, so the air at your desk can be very dry. Sitting in a vent’s airflow makes it worse. Moving out of the airflow, asking facilities for help and using drops within the label’s directions, {directions}, all help.`,
      },
      { h: 'How office heating dries the air' },
      {
        p: `Most commercial buildings heat by pulling in outside air, warming it and blowing it through ducts. On a January day, that outside air arrives holding very little water, and heating it doesn’t add any. By the time it comes out of the diffuser above your desk, it’s warm and dry, and it keeps coming for hours. Older buildings with steam radiators dry the air too, just with less moving air.`,
      },
      { h: 'Is your desk under a vent?' },
      {
        p: `Look up. If there’s a ceiling diffuser directly over your chair, or a floor vent by your feet blowing upward, your eyes are in the path of a steady breeze of heated air. A strip of tissue held near the vent shows which way the air goes. Some fixes to try:`,
      },
      {
        list: [
          `Turn your desk or monitor so the airflow hits your back instead of your face.`,
          `Ask facilities whether the diffuser’s louvers can be adjusted to throw air away from your workstation.`,
          `If hot-desking, pick a seat away from vents and away from the glass of exterior windows, where drafts are common.`,
          `Turn off a personal desk fan in winter; many people forget it from summer.`,
        ],
      },
      { h: 'Shared thermostats and facilities requests' },
      {
        p: `In most offices, one person’s comfort setting is another person’s complaint, and the thermostat may be locked anyway. Asking to change the temperature tends to go nowhere. Asking facilities about airflow, a vent deflector or whether a small humidifier is allowed at your desk is a more specific request and more likely to get a yes. Some buildings restrict personal space heaters and humidifiers, so ask before bringing one in.`,
      },
      { h: 'Meetings, conference rooms and the commute' },
      {
        p: `Conference rooms are often small, packed and overheated, with a projector or a large display adding to the screen time. If you know a long meeting is coming, a drop before it is a reasonable use of one of your three. Sit away from the room’s vent if you can choose a seat.`,
      },
      {
        p: `The commute adds its own dry air: a car heater on high, or a cold wind on the walk from the train. Arriving from freezing wind straight into a warm, dry lobby is a lot for the eyes in a short space of time. Aiming the car vents at the windshield and wearing glasses or sunglasses outside take some of the edge off.`,
      },
      { h: 'Keeping a bottle at your desk' },
      {
        p: `A desk drawer is a fine place for an eye drop bottle in most offices, because the building stays at an ordinary indoor temperature. Quell’s label says {storage}. Watch for the exceptions:`,
      },
      {
        list: [
          `A desk pushed against a radiator or heating unit, where the drawer can run warm.`,
          `A windowsill or ledge in direct winter sun.`,
          `An office that turns its heat far down on nights and weekends; if the building gets cold over a long weekend, take the bottle home.`,
          `A coat pocket left in a car during the workday, where the bottle can get very cold.`,
        ],
      },
      {
        p: `At your desk, wash your hands before each drop and remember: {tip}. Keep the cap on and the bottle in the drawer rather than loose among pens and papers. [How to store eye drops](/guides/how-to-store-eye-drops) has more on finding the right spot.`,
      },
      { h: 'Where Quell fits on a winter workday' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and its label lists it {uses}. With three drops a day, one at the start of the workday, one after lunch and one before a long afternoon meeting covers the hours you spend in the building. [The tear film’s oil layer](/guides/the-tear-films-oil-layer) explains why the oil layer matters in dry air.`,
      },
      { h: 'If it doesn’t get better in spring' },
      {
        p: `Office heat explains a lot of winter dryness, and many people notice an improvement when the heating season ends; [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) covers the same problem at home. If your eyes still bother you after the heat goes off, or on weekends at home, it’s worth an eye exam. The label lists when to stop: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry at work in winter?',
        a: 'Office heating warms cold outdoor air without adding moisture, so the air indoors is very dry, and vents blow it across desks for hours. Sitting in that airflow speeds evaporation from the eyes.',
      },
      {
        q: 'How do I stop the vent at work from blowing on me?',
        a: 'Turn your desk so the air reaches your back, or ask facilities whether the diffuser’s louvers can be adjusted or a deflector fitted. A specific airflow request is usually easier to grant than a thermostat change.',
      },
      {
        q: 'Can I keep eye drops in my desk drawer at work?',
        a: 'In most offices, yes, since the building stays at room temperature. Avoid drawers next to radiators or in direct sun, and take the bottle home if the heat is turned down over a long weekend.',
      },
      {
        q: 'Is a humidifier allowed at an office desk?',
        a: 'It depends on the building. Some workplaces restrict personal appliances, so ask facilities first rather than plugging one in.',
      },
    ],
  },

  {
    slug: 'dry-eyes-on-long-nursing-shifts',
    title: 'Dry eyes on long nursing shifts',
    description:
      'Twelve-hour shifts, hospital air, masks and charting screens add up for nurses’ eyes. Where drops fit on a break, and how to keep the bottle clean.',
    category: 'using',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Nurses’ eyes take a lot on a 12-hour shift: dry, climate-controlled hospital air, masks that can push exhaled air upward, face shields, and hours of charting at a screen. Lubricating drops belong on a scheduled break, after washing your hands, away from patient care. Quell’s directions, {directions}, line up well with the start, middle and end of a shift.`,
      },
      { h: 'What a shift does to your eyes' },
      {
        p: `Hospitals keep their air tightly controlled, and in many units that means air that’s cool, constantly moving and low in moisture. Add the length of the shift and the eyes are exposed to it far longer than in a typical workday. The pattern is familiar to a lot of nurses: fine at the 7 o’clock huddle, gritty by the afternoon med pass, and heavy-lidded on the drive home.`,
      },
      { h: 'Masks, shields and goggles' },
      {
        list: [
          `Surgical masks and respirators that don’t seal well over the bridge of the nose let exhaled air escape upward and across the eyes with every breath. Pinching the nose wire snugly so the mask hugs the bridge keeps more of that air down.`,
          `Face shields and goggles block splashes, and they also block some airflow from the room. They can trap warmth and fog up, which leads to adjusting them with gloved hands; try to set them once and leave them.`,
          `When you take PPE off, follow your unit’s doffing order and perform hand hygiene before touching your face or eyes.`,
        ],
      },
      { h: 'Charting screens and workstations on wheels' },
      {
        p: `Documentation pulls nurses to screens for a large share of each shift, often at a workstation on wheels set to someone else’s height. Concentrating on a screen slows blinking. Lower the screen so you look slightly down at it, if the cart allows, and look across the unit for a few seconds when you finish each note. Small habits add up over 12 hours.`,
      },
      { h: 'When to use drops during a shift' },
      {
        p: `Three drops a day lines up naturally with a three-part shift. A pattern that suits a day shift:`,
      },
      {
        list: [
          `Before you leave home or in the locker room before report.`,
          `At your meal break, roughly halfway through the shift.`,
          `In the locker room at the end of the shift, before the drive home.`,
        ],
      },
      {
        p: `Night shift flips the clock, not the count. Use the same three anchors (before report, meal break, end of shift), so that the routine holds whether you work days, nights or a rotating schedule. The label sets three drops a day, and a 12-hour shift doesn’t extend it. [Can I use more than three drops a day?](/guides/can-i-use-more-than-three-drops-a-day) covers what to do if three don’t feel like enough.`,
      },
      { h: 'Hand hygiene before your own drops' },
      {
        p: `Nurses know hand hygiene better than anyone, but personal drops are easy to rush on a short break. Wash with soap and water rather than relying only on a rub, since alcohol-based sanitizer left on fingers stings near the eyes. Use your drops in a break room or locker room, not at the nurses’ station or in a patient area. The label’s instruction applies: {tip}. Don’t share a bottle with a coworker, even on a hard night.`,
      },
      { h: 'Where to keep the bottle at work' },
      {
        p: `A scrub pocket gets warm against your body and also goes everywhere you go, including patient rooms. A locker or a bag in the break room is a better home for it. The label says {storage}, and most break rooms sit comfortably in that range. Don’t leave it in a car in the staff lot during a summer shift; [can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car) explains why.`,
      },
      {
        p: `Check whether your facility has a policy on personal medications at work; some ask staff to keep them in lockers rather than on the unit.`,
      },
      { h: 'Days off and the drive home' },
      {
        p: `After a run of three or four shifts, tired eyes can carry into the first day off. Point the car vents away from your face on the drive home, especially after a night shift when you’re already worn out. If your eyes feel dry even on days you haven’t worked, that’s worth noting for your eye doctor. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss; [the tear film’s oil layer](/guides/the-tear-films-oil-layer) explains how that layer works.`,
      },
      { h: 'Contact lenses and other drops' },
      {
        p: `Many nurses wear contacts under goggles or masks. Quell’s label doesn’t cover use with contact lenses or alongside other eye drops, so ask your eye doctor or a pharmacist before combining them; [contact lenses and Quell](/guides/contact-lenses-and-quell) has the questions to ask.`,
      },
      { h: 'When to step back and see a doctor' },
      {
        p: `Nurses are good at spotting warning signs in patients and often slower to act on their own. The label is explicit: {stopUse} Don’t talk yourself out of an appointment because you’re used to tired eyes at the end of a shift.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry at work as a nurse?',
        a: 'Long shifts in dry, climate-controlled hospital air, masks that can push exhaled air toward the eyes, and hours of charting at screens all speed evaporation and reduce blinking.',
      },
      {
        q: 'Can masks make your eyes dry?',
        a: 'A mask that doesn’t seal well over the nose can send exhaled air up across your eyes with every breath. Shaping the nose wire snugly to the bridge of your nose keeps more of it down.',
      },
      {
        q: 'When should nurses use eye drops on a 12-hour shift?',
        a: 'Quell’s directions are three drops a day, which fit before report, at the meal break and at the end of the shift. Use them in a break room after washing your hands.',
      },
      {
        q: 'Can I keep eye drops in my scrub pocket?',
        a: 'A locker or a bag in the break room is a better place. A scrub pocket gets warm against your body and goes into patient rooms with you, and the label sets a storage range of {storage}.',
      },
    ],
  },

  {
    slug: 'dry-eyes-in-a-hot-workplace',
    title: 'Dry eyes in a hot, dry workplace',
    description:
      'Kitchens, bakeries, foundries, heated warehouses and salons dry the eyes fast. How to cut the heat at your face and keep eye drops out of the heat too.',
    category: 'using',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Hot workplaces dry the eyes quickly because heated air carries moisture away from the eye’s surface, and ovens, furnaces, heaters and blow dryers push that air straight at your face. Stepping out of the heat on breaks, using protective eyewear your employer provides, and using lubricating drops as directed, {directions}, all help. Keep the bottle in a locker, not near the heat.`,
      },
      { h: 'Which jobs this covers' },
      {
        list: [
          `Restaurant kitchens: ovens, fryers, grills and dish machines, all within a few feet of each other.`,
          `Bakeries: deck ovens and proofers, and the blast of heat each time a door opens.`,
          `Foundries, forges and glass shops: radiant heat from molten metal or glass, often for most of a shift.`,
          `Warehouses and loading docks heated by overhead gas units in winter, which blow hot, dry air down onto the floor.`,
          `Salons and barbershops, where blow dryers run within inches of a stylist’s face for hours.`,
          `Laundries and dry cleaners, with dryers and presses venting warm air.`,
        ],
      },
      { h: 'Why heat dries the eyes' },
      {
        p: `Warm air can hold more water than cool air, so when air is heated without adding moisture its relative humidity falls and it pulls water from whatever it touches. Moving air speeds that up, and many hot jobs come with fans and exhaust hoods running constantly. The tear film’s oil layer slows evaporation from the watery layer beneath it; Quell is designed to reinforce that oil layer to help reduce moisture loss.`,
      },
      { h: 'Reducing the heat at your face' },
      {
        list: [
          `Step back from an oven door as it opens and let the first rush of heat clear before you lean in.`,
          `In a salon, hold the dryer so the airflow points away from your own face, and turn the chair rather than leaning across the client.`,
          `Under overhead warehouse heaters, pick work spots between units rather than directly beneath them when you can.`,
          `Point any cooling fan at your body, not your face.`,
          `Wipe sweat with a clean towel instead of the back of your hand, so it doesn’t run into or get rubbed near your eyes.`,
        ],
      },
      { h: 'Eye protection is your employer’s job' },
      {
        p: `The Occupational Safety and Health Administration says eye and face protection must be provided whenever necessary to guard against chemical, environmental, radiological or mechanical hazards. In a foundry or a glass shop, that usually means safety glasses, goggles or face shields chosen for the work. If you think your job needs protective eyewear and doesn’t have it, raise it with your supervisor or safety officer. Protective eyewear also takes some of the hot air off your eyes, which is a useful side effect.`,
      },
      { h: 'Using drops on a hot shift' },
      {
        p: `Plan your three drops around breaks, when you’re away from the heat and can wash up. Before your shift, at a midshift break and after you clock out is one easy pattern. Wash your hands and face first: flour, grease, hair product and metal dust are all things you don’t want near your eyes. Then follow the label: {tip}.`,
      },
      {
        p: `The label doesn’t allow extra drops on a hot day. If three don’t feel like enough, ask an eye doctor rather than adding more. [Can I use more than three drops a day?](/guides/can-i-use-more-than-three-drops-a-day) covers that conversation.`,
      },
      { h: 'Keep the bottle out of the heat' },
      {
        p: `Quell’s label says {storage}. A hot kitchen line, a bakery near the ovens or a foundry floor can easily run above 86°F, and an apron pocket rides along with you into all of it. Leave the bottle in your locker, in a bag in the break room, or in a cooler part of the building, and use it there. Avoid the dashboard of a car parked in the sun as well; [can you leave eye drops in a hot car?](/guides/eye-drops-in-a-hot-car) covers that.`,
      },
      {
        p: `If a bottle has been somewhere hot, look at it before you use it. The label says not to use it {doNotUse}. {appearance}`,
      },
      { h: 'Sparks, splashes and particles' },
      {
        p: `Heat is one thing; something in your eye is another. Hot oil, chemical splashes, metal fragments or a chemical cleaner in the eye aren’t a job for lubricating drops. Follow your workplace’s first-aid procedure, use the eyewash station if there is one, and get medical help. [Eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists signs that shouldn’t wait.`,
      },
      { h: 'When to see an eye doctor' },
      {
        p: `If your eyes stay dry or uncomfortable on days off, or the discomfort is getting worse, book an eye exam and describe your workplace. The label is clear: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry working in a hot kitchen?',
        a: 'Heated air is low in relative humidity and pulls moisture from the eye’s surface, and ovens, fryers and exhaust hoods keep that air moving across your face for the whole shift.',
      },
      {
        q: 'Can I keep eye drops in my apron at work?',
        a: 'Not in a hot workplace. A kitchen or bakery can run above the label’s storage range, so keep the bottle in a locker or a cooler room and use it on breaks.',
      },
      {
        q: 'Does my employer have to provide eye protection?',
        a: 'OSHA says eye and face protection must be provided whenever necessary to guard against chemical, environmental, radiological or mechanical hazards. Raise it with your supervisor or safety officer if you think your job needs it.',
      },
      {
        q: 'Do blow dryers dry out a hairstylist’s eyes?',
        a: 'They can, because they push hot air close to the stylist’s face for hours. Angling the airflow away from yourself and taking breaks away from the dryers both help.',
      },
    ],
  },

  {
    slug: 'why-do-my-eyes-still-feel-dry-after-eye-drops',
    title: 'Why do my eyes still feel dry after eye drops?',
    description:
      'If drops aren’t helping, look at the air around you, whether the drop reaches your eye, and how you space doses. And when it’s time to see a doctor.',
    category: 'using',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Eyes can still feel dry after drops when the air around you keeps pulling moisture away, when the drop misses the eye, or when all three daily doses are used early and the evening goes uncovered. Check those first. Don’t add extra drops beyond the label’s directions without asking a doctor, and if dryness persists, see one.`,
      },
      { h: 'Reason 1: your surroundings are winning' },
      {
        p: `A drop adds to the tear film for a while, but it doesn’t change the room you’re sitting in. If a heater vent blows on your face, a fan runs all afternoon, or you’re in a car with the air on high, the air keeps working on your eyes after the drop has gone in. Look for the source:`,
      },
      {
        list: [
          `Vents, fans and space heaters aimed at where you sit.`,
          `Long screen sessions without breaks, which slow blinking.`,
          `Wind, outdoor work or long drives with the windows down.`,
          `Very dry seasons or climates; [dry air, wind and altitude](/guides/dry-air-wind-and-altitude) covers how they work.`,
        ],
      },
      { h: 'Reason 2: the drop isn’t landing' },
      {
        p: `Many people miss more often than they think. A drop that hits an eyelash, runs down the cheek or lands on a closed lid doesn’t do its job, and it can feel as if the drop “didn’t work”. A technique check:`,
      },
      {
        list: [
          `Wash your hands, then sit or lie back with your head tilted, looking up at the ceiling.`,
          `Pull your lower lid down gently with one finger to make a small pocket.`,
          `Hold the bottle above the eye, close but not touching. {tip}.`,
          `Squeeze gently so one drop falls into the pocket. You should feel it land.`,
          `Close your eye for a moment without squeezing it shut or blinking hard, then do the other eye.`,
        ],
      },
      {
        p: `Practicing in front of a mirror for a few days helps, and so does resting your hand on your forehead to steady the bottle. [How to use eye drops as directed](/guides/how-to-use-eye-drops-as-directed) has more on the steps.`,
      },
      { h: 'Reason 3: the timing leaves gaps' },
      {
        p: `Quell’s directions are {directions}. If you use all three by noon, the afternoon and evening, often the hardest part of the day for dry eyes, go uncovered. Spreading them out usually works better: one in the morning, one around midday, and one in the late afternoon or early evening. Try timing one before the situation you know is hardest, such as a long meeting, a commute or an evening of reading, rather than after it.`,
      },
      { h: 'Reason 4: the bottle itself' },
      {
        p: `A bottle that’s been stored outside the label’s range or has changed color may not be one to use. The label’s storage line reads: {storage}. And it says not to use it {doNotUse}. {appearance} If yours looks different from that, don’t use it, and contact {company} at {phone} ({hours}).`,
      },
      { h: 'Don’t answer it with more drops' },
      {
        p: `It’s tempting to reach for a fourth or fifth drop when the first three haven’t done enough. The label doesn’t say to, and only a doctor can tell you whether more is appropriate for you. The same goes for adding a second product: Quell’s label doesn’t cover use alongside other eye drops, so ask your eye doctor or pharmacist first. [Using Quell with other eye drops](/guides/using-quell-with-other-eye-drops) explains what to ask.`,
      },
      { h: 'Give it a fair trial, then reassess' },
      {
        p: `Change one thing at a time: fix the vent, then the technique, then the timing. A few days of a [simple eye drop log](/guides/keeping-an-eye-drop-log), noting when you used each drop and how your eyes felt a few hours later, makes the pattern much easier to see and gives you something concrete to show a doctor.`,
      },
      { h: 'When dryness that doesn’t improve needs a doctor' },
      {
        p: `Persistent dryness despite drops is exactly the kind of thing an eye doctor should look at, since dryness has more than one possible cause and a drop can only address some of them. The label gives the line clearly: {stopUse} The [dry eye self-check](/self-check) can help you put words to your symptoms before the appointment. It’s not a diagnosis, just a way to organize what you’ve noticed.`,
      },
    ],
    faq: [
      {
        q: 'Why are eye drops not helping my dry eyes?',
        a: 'Common reasons are dry or moving air that keeps evaporating the tear film, drops that miss the eye, and doses bunched together early in the day. If none of those explain it, see an eye doctor.',
      },
      {
        q: 'How do I know if an eye drop went in?',
        a: 'You should feel a cool drop land in the pocket of your lower lid. If it runs down your cheek or hits your lashes, it missed; a mirror and a steadying hand on your forehead help.',
      },
      {
        q: 'Should I use more drops if my eyes are still dry?',
        a: 'Not without asking a doctor. Quell’s label directs {directions}, and going beyond that is a question for your eye doctor.',
      },
      {
        q: 'How long should dry eyes last before seeing a doctor?',
        a: 'Don’t wait it out on drops alone. The label puts it this way: {stopUse}',
      },
    ],
  },

  {
    slug: 'what-to-do-when-you-run-out-of-eye-drops',
    title: 'What to do when you run out of eye drops',
    description:
      'Out of eye drops, or about to be? What to do today, why not to borrow an open bottle, and how to plan your next order so it doesn’t happen again.',
    category: 'ordering',
    addedOn: '2026-11-11',
    body: [
      {
        p: `If you’ve run out of eye drops, order a replacement now and ease your eyes’ load while you wait: avoid vents and fans on your face, and take regular screen breaks. Don’t borrow someone else’s open bottle. Then plan so it doesn’t happen again: learn how long a bottle covers your use, and keep a spare on hand.`,
      },
      { h: 'Today: order the next bottle' },
      {
        p: `Go to [the order page](/#buy) and check out as a guest; no account is needed. Quell ships within the United States from Brentwood, Tennessee. There’s no promised delivery date, so place the order as soon as you notice, not when you’re down to the last drop. If you’re ordering anyway, an order of {freeBottles} bottles ships free; smaller orders pay {shipping} for shipping.`,
      },
      { h: 'While you wait for it to arrive' },
      {
        list: [
          `Turn vents, fans and car heater outlets away from your face.`,
          `Take short breaks from screens and look into the distance, blinking fully.`,
          `Wear glasses or sunglasses outdoors on windy days.`,
          `Run a humidifier in the room where you spend the most time, if you have one.`,
          `If you need something in the meantime, a pharmacist can talk through options with you, and with the label of any product you’re considering.`,
        ],
      },
      { h: 'Why not to borrow someone’s open bottle' },
      {
        p: `A friend or partner offering their bottle means well, but an opened bottle has been near another person’s eyes and handled by their hands. The label’s instruction, {tip}, exists because the tip is the part that can pick things up. Using someone else’s open bottle undoes that care. It’s also a different product, possibly with different directions and cautions; if it isn’t Quell, read its own label, or ask a pharmacist. Quell’s label includes {warnings}, which matters if you’re switching between products.`,
      },
      { h: 'Work out how long a bottle covers you' },
      {
        p: `Bottle life depends on how you use it, so the most useful number is your own. Here’s a simple way to find it:`,
      },
      {
        list: [
          `When you open a new bottle, write the date on the carton or in your phone.`,
          `Use it as the label directs: {directions}.`,
          `When it runs out, note that date too.`,
          `The gap between the two is how many days a bottle covers for you. Use that to plan your next order.`,
        ],
      },
      {
        p: `[How long does a bottle of eye drops last?](/guides/how-long-does-a-bottle-of-eye-drops-last) goes into what affects that number. Each bottle is {size}.`,
      },
      { h: 'Use the reorder reminder' },
      {
        p: `After an order, Quell sends one reorder reminder email. It isn’t a subscription and nothing is charged automatically; it’s a nudge to check your supply. When it arrives, compare it with what’s left in your current bottle. [Why did I get a “Running low?” email?](/guides/the-reorder-reminder-email) explains what it is, and since it comes only once, a calendar reminder of your own, set from the number of days you worked out above, is a good backup.`,
      },
      { h: 'Keep one spare' },
      {
        p: `A single unopened spare turns running out into a minor event: you open the spare, then order its replacement. Store it as the label says, {storage}, somewhere you’ll remember, like a bathroom cabinet away from the shower or a bedroom drawer. [Keeping spare bottles of eye drops](/guides/keeping-spare-bottles) covers where and how many.`,
      },
      {
        p: `Ordering {freeBottles} at a time builds a spare in automatically and gets you free shipping. If you end up with more than you need, {returns}, within {returnDays} days of delivery.`,
      },
      { h: 'Running out while traveling' },
      {
        p: `Away from home, the order still ships to any US address, including a hotel or a family member’s house; [shipping to a holiday address](/guides/shipping-to-a-holiday-address) covers getting the address right. Because no delivery date is promised, it’s often simpler to carry a spare in your bag when you travel.`,
      },
      { h: 'If running out was a relief' },
      {
        p: `Sometimes a gap without drops shows that you didn’t need them as much as you thought, and that’s fine. Other times it shows how much you’d been relying on them. If your eyes became very uncomfortable while you were out, mention it to an eye doctor. The label says: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What can I do if I run out of eye drops?',
        a: 'Order a replacement right away, then reduce the load on your eyes while you wait by avoiding vents and fans on your face and taking screen breaks. A pharmacist can talk through options if you need something in the meantime.',
      },
      {
        q: 'Can I use someone else’s eye drops?',
        a: 'It’s not a good idea to borrow an opened bottle. It has been handled and used by another person, and it may be a different product with different directions and cautions.',
      },
      {
        q: 'How do I know when to reorder eye drops?',
        a: 'Note the date you open a bottle and the date it runs out; the gap tells you how many days one covers for you. Reorder a little before that, or keep a spare.',
      },
      {
        q: 'Does Quell send a reminder when I’m running low?',
        a: 'Quell sends one reorder reminder email after an order. It’s not a subscription and nothing is charged; it’s simply a prompt to check your supply.',
      },
    ],
  },

  {
    slug: 'dry-eyes-at-the-end-of-the-day',
    title: 'Why do my eyes feel dry at the end of the day?',
    description:
      'Eyes that start the day fine and feel dry by evening are adding up hours of screens, indoor air and wind. How to spread drops out and when to see a doctor.',
    category: 'using',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Eyes often feel driest in the evening because the day’s exposures add up: hours of screen work that slow blinking, indoor heating or air conditioning, wind or car vents on the commute. By evening the tear film has spent hours fighting evaporation. Spacing drops through the day, {directions}, with one saved for later, can help.`,
      },
      { h: 'Why do my eyes get dry in the evening?' },
      {
        p: `In the morning your eyes have just had hours closed. From then on, every waking hour adds a little more strain: each long stretch of concentration, each room with forced air, each walk into the wind. None of it is dramatic on its own. By 6 p.m. the total is what you feel, which is why the same eyes can be comfortable at breakfast and scratchy by dinner.`,
      },
      {
        p: `Fatigue plays a part as well. Late in the day, people tend to blink less fully and rub their eyes more, and focusing up close for hours leaves the eyes feeling tired on top of dry. Weekends can look completely different: if your eyes feel fine on a Saturday spent outdoors and dry after every workday, that contrast is a strong hint that the workday’s conditions are what’s building up.`,
      },
      { h: 'Map your day' },
      {
        p: `It helps to see where the hours go. A typical office worker’s day might look like this:`,
      },
      {
        list: [
          `7:30 a.m.: shower, coffee, a few minutes on the phone. Eyes feel fine.`,
          `8:15 a.m.: commute, with the car heater or air conditioning blowing toward the face.`,
          `9 a.m. to noon: email and documents at a monitor, in a building with forced-air heat or cooling.`,
          `Noon: lunch at the desk, still looking at a screen.`,
          `1 to 5 p.m.: more screen work and video meetings.`,
          `5:30 p.m.: commute home, windy walk to the car.`,
          `7 to 10 p.m.: TV, phone or tablet on the couch, possibly under a ceiling fan.`,
        ],
      },
      {
        p: `That’s more than twelve hours of conditions that dry the eyes, with very few real breaks. Writing out your own version for a day or two often shows one or two stretches that are doing most of the damage.`,
      },
      { h: 'Dry eyes in evening: spread your drops out' },
      {
        p: `A common mistake is using drops early, when your eyes are fine, and having none left when they need them. The label sets three drops a day and leaves the times to you. Try this instead:`,
      },
      {
        list: [
          `First drop: mid-morning, once screen work is well underway.`,
          `Second drop: early afternoon, after lunch.`,
          `Third drop: late afternoon or early evening, before the commute home or before your evening screen time.`,
        ],
      },
      {
        p: `Saving the last one for later in the day covers the hours when your eyes feel worst. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and that oil layer is what slows evaporation during those long late-day stretches. [The tear film’s oil layer](/guides/the-tear-films-oil-layer) explains it.`,
      },
      {
        p: `If your last drop comes before the drive home, keep the bottle in your bag rather than the car, since a parked car can sit well outside the label’s range of {storage}. Give your vision a moment to clear after the drop before you start driving. Some people also find it easier to remember the late dose by pairing it with something fixed, like shutting the laptop or setting an alarm for the end of the workday.`,
      },
      { h: 'Cut the load in the afternoon and evening' },
      {
        list: [
          `Take a real lunch away from your screen, outside if the weather allows.`,
          `Turn the car vents toward the windshield or your chest on the drive home.`,
          `In the evening, sit farther from the TV and lower the brightness on phones and tablets.`,
          `Turn the ceiling fan down or off while you’re sitting under it.`,
          `If you read in the evening, use a good lamp and look up from the page every few pages.`,
        ],
      },
      { h: 'Contact lenses at the end of the day' },
      {
        p: `People who wear contacts often notice dryness most in the evening. Quell’s label doesn’t cover use with contact lenses, so talk to your eye doctor about how long you wear them and what drops, if any, are suitable with them. [Contact lenses and Quell](/guides/contact-lenses-and-quell) has more.`,
      },
      { h: 'When evening dryness is worth a doctor’s visit' },
      {
        p: `Eyes that feel a little tired after a long day are common. See an eye doctor if evening dryness is getting worse over weeks, if it’s affecting your sleep or your ability to drive at night, or if your vision changes. The label puts it plainly: {stopUse} The [dry eye self-check](/self-check) can help you describe your pattern, though it’s not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry in the evening?',
        a: 'A full day of screens, indoor heating or cooling and wind on the commute adds up. By evening the tear film has spent hours losing moisture to evaporation, so dryness is most noticeable then.',
      },
      {
        q: 'Should I save an eye drop for the evening?',
        a: 'If evenings are when your eyes feel worst, it makes sense. Quell’s label sets three drops a day without fixed times, so spacing them with the last one late in the afternoon or early evening is a reasonable pattern.',
      },
      {
        q: 'Is it normal for eyes to feel tired at night?',
        a: 'Mildly tired eyes after a long day are common. Worsening dryness over weeks, pain or changes in vision are reasons to see an eye doctor.',
      },
    ],
  },
]
