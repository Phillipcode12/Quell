import type { Guide } from '@/lib/guide-types'

export const DAILY_20261111_C: Guide[] = [
  /*
   * Sources, all fetched 2026-11-11:
   * - NOAA NCEI 1991–2020 annual/seasonal normals, Reno Tahoe Intl Ap (USW00023185):
   *   https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00023185.csv
   *   (elevation 1344.2 m; ANN-PRCP 7.35 in; DJF-PRCP 3.38; JJA-PRCP 0.85; JJA-TMAX 90.2;
   *   DJF-TMIN 26.9; 50.5 days with 0.01 in or more)
   * - NOAA NCEI Comparative Climatic Data, relative humidity (POR 1949–2018):
   *   https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (Jul and Aug afternoon 18; annual afternoon 31, morning 63)
   * - NOAA NCEI Comparative Climatic Data, clear/partly cloudy/cloudy days:
   *   https://www.ncei.noaa.gov/sites/default/files/2024-11/clpcdy23.txt (158 clear days)
   * - NWS Reno, Western Region Technical Attachment 07-01 (Wallmann and Milne, 2007):
   *   https://www.weather.gov/media/wrh/online_publications/TAs/ta0701.pdf
   *   (rain shadow; windward slopes 50 to 75 in a year; Reno metro 7 to 14 in; downslope winds)
   * - NWS Reno, Climate of Reno, Nevada (records from 1893, averages 1991–2020):
   *   https://www.weather.gov/media/rev/Climate/renoclimateupdate.pdf
   */
  {
    slug: 'dry-eyes-in-reno',
    title: 'Dry eyes in Reno, Nevada',
    description:
      'Reno sits in the Sierra Nevada’s rain shadow and gets about 7 inches of rain a year. What NOAA’s records show, and using eye drops there.',
    category: 'local',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Reno’s air is dry most of the year because the city sits in the rain shadow of the Sierra Nevada. NOAA’s 1991–2020 normals give Reno-Tahoe International Airport 7.35 inches of precipitation a year, and summer afternoons there average 18 percent relative humidity. Dry, moving air pulls moisture off the eye faster, so many people notice it. Quell is used the same way there as anywhere: {directions}.`,
      },
      { h: 'Why Reno is so dry: the Sierra rain shadow' },
      {
        p: `The National Weather Service office in Reno has written about this directly. In a 2007 technical paper on forecasting storms east of the mountains, two of its forecasters called the Sierra Nevada an excellent example of the rain shadow effect. The windward slopes in California average 50 to 75 inches of precipitation a year. The Reno metro area, in the lee of the range, averages 7 to 14 inches.`,
      },
      {
        p: `The mechanism is simple enough. Pacific storms are forced up the west side of the range and drop most of their water there. By the time the air sinks into the Truckee Meadows, much of it has been wrung out. The same NWS paper describes mountain waves bringing strong downslope winds into the valleys east of the crest when storms cross. Low humidity plus wind is the pairing the site’s guide to [dry air, wind and altitude](/guides/dry-air-wind-and-altitude) describes: moving air carries water off the surface of the eye faster than still air does.`,
      },
      { h: 'What NOAA’s numbers show for Reno' },
      {
        list: [
          `Precipitation: NOAA’s 1991–2020 climate normals for the airport give 7.35 inches a year. Of that, 3.38 inches falls from December through February, and only 0.85 inch across June, July and August combined.`,
          `Wet days: the same normals count about 50 days a year with at least a hundredth of an inch of precipitation. The other 300-plus days have none worth measuring.`,
          `Humidity: NOAA’s Comparative Climatic Data tables, built from the airport’s record from 1949 to 2018, list average afternoon relative humidity of 18 percent in July and in August, and 31 percent across the whole year. Mornings run higher, at 63 percent on the annual average.`,
          `Clear skies: the same tables count an average of 158 clear days a year.`,
          `Elevation: NOAA lists the airport weather station at 1,344 meters, about 4,410 feet above sea level.`,
          `Summer heat: the 1991–2020 normals give an average June-to-August high of 90.2°F.`,
        ],
      },
      {
        p: `Those are airport readings. Homes up in the foothills, out in Sparks or north in the valleys toward the state line will run a little different, but the broad pattern holds across the area: high desert, low rainfall, big swings between morning and afternoon humidity.`,
      },
      { h: 'Reno’s seasons and your eyes' },
      {
        p: `Winter is the wettest season on paper, and it’s also when furnaces run in nearly every house. NOAA’s normals put the average December-to-February low at 26.9°F, so the heat stays on for months. Forced-air heat dries indoor air on top of a climate that is already dry, which is why some people in Reno notice their eyes more in a warm living room in January than out on a cold sidewalk.`,
      },
      {
        p: `Summer brings the lowest humidity of the year. With afternoon readings around 18 percent and highs near 90, most people drive with the air conditioning on and spend the hot part of the day in cooled offices, stores and casinos. Air conditioning dries a room too. Put a phone or a monitor in front of you and the picture gets worse, since people blink less while they read a screen, and blinking is what spreads the tear film back across the eye.`,
      },
      {
        p: `Wind can show up in any season. It comes with the storms that cross the Sierra, which the NWS paper ties to strong gusts east of the crest. On a gusty afternoon along the Truckee River or on a foothill trail, wraparound sunglasses block some of it before it reaches your eyes.`,
      },
      { h: 'Day trips up to Lake Tahoe' },
      {
        p: `Plenty of Reno weekends end up at the lake or on the ski slopes, which means more altitude, more sun off the water or snow, and a car parked for hours. A bottle in the glove box can spend that time outside the label’s range, hot in July and cold in January. Quell’s storage line reads: {storage}. Carry the bottle in the bag you take with you. The guide to [eye drops in a hot car](/guides/eye-drops-in-a-hot-car) explains why the car is the problem.`,
      },
      { h: 'Using Quell in a dry climate' },
      {
        p: `The directions don’t change with the weather. The label says: {directions}. It doesn’t say to add drops in a dry place, and the guide to [using more than three drops a day](/guides/can-i-use-more-than-three-drops-a-day) explains why that question goes to a doctor or pharmacist rather than to a shop.`,
      },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. That oily outer layer sits over the watery middle layer and slows evaporation, which is exactly what Reno’s air works against. The label’s Uses line reads: {uses}.`,
      },
      {
        p: `Dust and wind make two label rules worth repeating. Wash your hands before you open the bottle, and keep the tip off everything: {tip}. Look at the liquid before each dose, too, because the Do not use line reads: {doNotUse}. {appearance}`,
      },
      { h: 'When to see a doctor in Reno' },
      {
        p: `Dry weather explains a lot of mild discomfort, but not all of it. {stopUse} An optometrist or ophthalmologist in Washoe County can examine what a drop can’t. If you’d like a list of questions to bring, the [dry eye self-check](/self-check) takes a few minutes and is not a diagnosis.`,
      },
      { h: 'Ordering Quell to a Reno address' },
      {
        p: `Quell ships from Brentwood, Tennessee to Reno, Sparks and the rest of Nevada. Shipping is {shipping} per order, and it’s free on {freeBottles} or more bottles. The [Reno page](/eye-drops/reno-nv) and the [Nevada page](/eye-drops/state/nevada) cover local ordering, and checkout works as a guest. In July and August, bring the package in soon after it lands on the step rather than leaving it in the afternoon sun.`,
      },
    ],
    faq: [
      {
        q: 'Why is the air in Reno so dry?',
        a: `Reno sits in the lee of the Sierra Nevada. A National Weather Service Reno paper calls the range an excellent example of a rain shadow: 50 to 75 inches a year on the windward slopes, against 7 to 14 inches in the Reno area.`,
      },
      {
        q: 'What is the average humidity in Reno in the summer?',
        a: `NOAA’s Comparative Climatic Data tables list average afternoon relative humidity of 18 percent at Reno-Tahoe International Airport in July and August, from records covering 1949 to 2018. Mornings are noticeably more humid.`,
      },
      {
        q: 'Does Quell ship to Reno, Nevada?',
        a: `Yes. Quell ships to US addresses, Reno and the rest of Nevada included, from Brentwood, Tennessee. Shipping is {shipping} per order and free on {freeBottles} or more bottles.`,
      },
      {
        q: 'Should I use more eye drops because Reno is so dry?',
        a: `The label’s dose doesn’t change with the climate: {directions}. If that doesn’t feel like enough, ask an eye doctor or pharmacist before changing anything.`,
      },
    ],
  },

  /*
   * Sources, all fetched 2026-11-11:
   * - NOAA NCEI 1991–2020 annual/seasonal normals, Salt Lake City Intl Ap (USW00024127):
   *   https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00024127.csv
   *   (elevation 1287.8 m; ANN-PRCP 15.52 in; MAM-PRCP 5.73; JJA-PRCP 2.02; ANN-SNOW 51.9 in;
   *   DJF-TMAX 40.8; DJF-TMIN 26.0; JJA-TMAX 89.9)
   * - NOAA NCEI Comparative Climatic Data, relative humidity (POR 1948–2018):
   *   https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (afternoon: Jan 70, Dec 72, Jul 21, Aug 23, annual 43)
   * - NOAA NCEI Comparative Climatic Data, percent of possible sunshine (1965–1983):
   *   https://www.ncei.noaa.gov/sites/default/files/2024-11/pctpos23.txt (Dec 39, Jul 85)
   * - Utah Department of Environmental Quality, Inversions:
   *   https://deq.utah.gov/air-quality/inversions
   *   (cold air trapped under warmer air; Wasatch, Oquirrh and Traverse Mountain basin;
   *   strongest in winter; five to six multi-day episodes in a typical winter; storms clear them)
   */
  {
    slug: 'dry-eyes-in-salt-lake-city',
    title: 'Dry eyes in Salt Lake City',
    description:
      'Summer afternoons in Salt Lake City average 21 percent humidity; winter brings inversions and furnace heat. Using and storing eye drops in the valley.',
    category: 'local',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Salt Lake City’s driest air comes in summer: NOAA’s Comparative Climatic Data list July afternoon relative humidity at the airport at 21 percent, against 70 percent in January. Winter brings a different problem, inversions that keep people indoors under the furnace. Both settings can leave eyes feeling dry. Through either one, Quell’s directions stay the same: {directions}.`,
      },
      { h: 'A valley at 4,200 feet' },
      {
        p: `NOAA lists the weather station at Salt Lake City International Airport at 1,288 meters, about 4,225 feet above sea level. The city sits on the floor of a basin, with the Wasatch Range rising to the east, the Oquirrh Mountains to the west and the Great Salt Lake to the northwest. That bowl shape matters for more than the views. It decides how air moves, or doesn’t, through the valley in winter, and it puts the ski canyons of the Wasatch within a short drive of downtown.`,
      },
      {
        p: `NOAA’s 1991–2020 normals give the airport 15.52 inches of precipitation a year, about twice Reno’s total, and 51.9 inches of snow. So Salt Lake isn’t dry in the way a low desert is. Its dryness comes in seasons, and the seasons pull in opposite directions.`,
      },
      { h: 'Summer: the driest air of the year' },
      {
        list: [
          `Afternoon humidity: NOAA’s tables, drawn from the airport’s 1948–2018 record, average 21 percent in July and 23 percent in August.`,
          `Rain: the 1991–2020 normals put June-through-August precipitation at 2.02 inches, the smallest of the four seasons.`,
          `Heat: the same normals average a summer high of 89.9°F.`,
          `Sun: NOAA’s sunshine table gives July 85 percent of possible sunshine, based on 1965–1983 records.`,
        ],
      },
      {
        p: `That combination of heat, sun and low humidity means air conditioning in cars, offices and homes from June into September, and air conditioning dries indoor air further. Afternoons on a trail up Millcreek or Big Cottonwood Canyon add altitude and wind. Sunglasses help with both glare and wind, and a hat brim shades the eyes. None of it changes the label’s dose.`,
      },
      { h: 'Winter inversions and indoor heat' },
      {
        p: `The Utah Department of Environmental Quality explains inversions plainly. Normally the air near the ground is warmer than the air above it. In an inversion that flips: cold air at the surface gets trapped under a layer of warmer air. The Wasatch Mountains, the Oquirrh Mountains and Traverse Mountain form a basin that holds the cold air in the Salt Lake Valley and shields it from the stronger winds aloft that would clear it out.`,
      },
      {
        p: `The DEQ says a typical Utah winter has about five to six multi-day inversion episodes, that they are strongest in winter, and that a strong storm or low-pressure system is often what it takes to clear one. While one lasts, the valley can sit under a gray lid for days. NOAA’s sunshine table shows how dim the season gets: December averages 39 percent of possible sunshine, less than half of July’s figure.`,
      },
      {
        p: `For eyes, the inversion itself isn’t the issue so much as what people do during one. They stay inside. Furnaces run around the clock, NOAA’s normals put the average winter high at just 40.8°F and the low at 26.0°F, and evenings go to screens. Outdoor air in January is humid on paper, near 70 percent in the afternoon, but indoor air warmed from freezing holds far less moisture relative to what it could, so a heated home or office can feel much drier than the weather report suggests.`,
      },
      { h: 'Ski days and canyon drives' },
      {
        p: `A day in the Cottonwood canyons mixes cold wind, bright snow and a car parked in a lot for hours. Below freezing, a bottle left in the car or in an outside pocket of a pack drops under the bottom of the label’s range. Quell’s storage line reads: {storage}. An inside jacket pocket keeps it close to body heat. The site’s guide on [ski trips, cold wind and dry eyes](/guides/ski-trips-and-dry-eyes) covers goggles and using drops on the mountain.`,
      },
      { h: 'Using and storing Quell in Salt Lake City' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label’s Uses line reads: {uses}. The active ingredients are {actives}.`,
      },
      {
        list: [
          `Use it as directed, the same dose in July and January: {directions}.`,
          `Keep the tip clean, which matters with gloves, ski gear and car consoles around: {tip}.`,
          `Check the color after a bottle has been cold. The Do not use line reads: {doNotUse}. {milky}, which is normal.`,
          `Keep the bottle in the house or on you, not in the car through a January cold snap.`,
        ],
      },
      { h: 'When a drop isn’t the answer' },
      {
        p: `Seasonal dryness is common, and it isn’t the only reason eyes can hurt. {stopUse} The [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) guide goes through the signs the label points to. For a medical emergency, call 911.`,
      },
      { h: 'Getting Quell delivered in Utah' },
      {
        p: `Quell ships from Brentwood, Tennessee to Salt Lake City and every other Utah address. The [Salt Lake City page](/eye-drops/salt-lake-city-ut) and the [Utah page](/eye-drops/state/utah) have local ordering details. Shipping is {shipping} per order and free on {freeBottles} or more bottles. Unopened bottles can be refunded within {returnDays} days of delivery without sending them back.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel dry during a Salt Lake City inversion?',
        a: `Inversions keep people indoors, where furnaces run for days and screens fill the evenings. Heated indoor air is drier than the weather report suggests, and heating and screens both speed evaporation from the eye.`,
      },
      {
        q: 'What is an inversion in Salt Lake City?',
        a: `The Utah Department of Environmental Quality describes it as cold air trapped near the ground under a layer of warmer air. The mountains around the valley form a basin that holds the cold air in place until a storm clears it.`,
      },
      {
        q: 'How dry is Salt Lake City in the summer?',
        a: `NOAA’s Comparative Climatic Data list average afternoon relative humidity of 21 percent in July and 23 percent in August at the airport, based on records from 1948 to 2018.`,
      },
      {
        q: 'Can I get Quell shipped to Salt Lake City?',
        a: `Yes. Quell ships to any US address, including Salt Lake City and the rest of Utah. Shipping is {shipping} per order, or free on {freeBottles} or more bottles.`,
      },
    ],
  },

  /*
   * Sources, all fetched 2026-11-11:
   * - NOAA NCEI 1991–2020 annual/seasonal normals, Albuquerque Intl Ap (USW00023050):
   *   https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW00023050.csv
   *   (elevation 1618.5 m; ANN-PRCP 8.84 in; JJA-PRCP 3.52; MAM-PRCP 1.41; ANN-SNOW 7.9 in;
   *   JJA-TMAX 90.1; 56.1 days with 0.01 in or more)
   * - NOAA NCEI Comparative Climatic Data, relative humidity (POR 1948–2018):
   *   https://www.ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt
   *   (afternoon: Apr 19, May 19, Jun 17, annual 29)
   * - NOAA NCEI Comparative Climatic Data, clear days and sunshine:
   *   https://www.ncei.noaa.gov/sites/default/files/2024-11/clpcdy23.txt (167 clear days)
   *   https://www.ncei.noaa.gov/sites/default/files/2024-11/pctpos23.txt (76 percent of possible)
   * - NWS Albuquerque, high wind climatology:
   *   https://www.weather.gov/abq/features_highwind
   *   (April and May windiest, March and June close behind; blowing dust; mixing 7,500–10,000 ft)
   */
  {
    slug: 'dry-eyes-in-albuquerque',
    title: 'Dry eyes in Albuquerque',
    description:
      'Albuquerque sits at about 5,300 feet, with spring winds and afternoon humidity under 20 percent. What the records show, and using eye drops there.',
    category: 'local',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Albuquerque is high, sunny and dry, and spring is the hardest season on the eyes. NOAA lists the airport at about 5,310 feet, its tables put April and May afternoon humidity at 19 percent, and the National Weather Service names April and May as New Mexico’s windiest months. Wind plus dry air speeds evaporation from the eye. Quell’s label directions hold all year: {directions}.`,
      },
      { h: 'High desert on the Rio Grande' },
      {
        p: `The city spreads up from the Rio Grande toward the Sandia Mountains on its east side, and the airport sits on the higher ground south of downtown. NOAA records that weather station at 1,618 meters, roughly 5,310 feet above sea level. At that height the air holds less moisture, and the sun is strong.`,
      },
      {
        p: `NOAA’s Comparative Climatic Data count an average of 167 clear days a year at the airport and 76 percent of possible sunshine across the year. NOAA’s 1991–2020 normals give it 8.84 inches of precipitation annually and just under 8 inches of snow. Rain is measurable on about 56 days a year.`,
      },
      { h: 'Spring wind and blowing dust' },
      {
        p: `The NWS Albuquerque office has published a climatology of high winds across the state. It says the windiest time of year is April and May, with March and June close behind. Its explanation: the polar jet stream is moving north in spring but can still reach the Southwest, and as the ground heats, rising air mixes those faster winds down to the surface, often from heights of 7,500 to 10,000 feet.`,
      },
      {
        p: `The same page warns that high winds can raise blowing dust thick enough to cut visibility on the roads. For eyes, that means two things at once: wind carrying moisture off the surface, and grit in the air. Wraparound sunglasses help on a gusty walk across a parking lot. Closing car vents to outside air helps on a dusty drive along I-25 or I-40.`,
      },
      { h: 'What NOAA’s humidity tables show' },
      {
        list: [
          `April and May: average afternoon relative humidity of 19 percent at the airport, in NOAA’s Comparative Climatic Data from the 1948–2018 record.`,
          `June: 17 percent, the lowest month of the year.`,
          `July and August: 28 and 30 percent, as the summer rains arrive.`,
          `December: 43 percent in the afternoon, the most humid month.`,
          `Year round: 29 percent in the afternoon, 53 percent in the morning.`,
        ],
      },
      {
        p: `The jump between June and July is the summer rain season showing up in the numbers. NOAA’s normals put June-through-August precipitation at 3.52 inches, close to two-fifths of the year’s total, mostly in afternoon storms. Even then, afternoon humidity stays near 30 percent, so July is only less dry, not damp.`,
      },
      { h: 'Daily life that dries eyes in Albuquerque' },
      {
        p: `Summer highs average 90.1°F in NOAA’s 1991–2020 normals, so cars and buildings run cooling for months. Air conditioning in offices, stores and cars takes moisture out of the air it cools. Winter mornings are cold enough for the furnace, and heated air indoors dries further. Screens slow blinking anywhere, at a desk in a lab or a phone on a long drive.`,
      },
      {
        p: `If you hike the Sandia foothills or drive up toward the crest, you climb thousands of feet higher still, into thinner, windier air. Carry the bottle with you rather than leaving it in a car at a trailhead in the June sun. Quell’s storage line reads: {storage}.`,
      },
      { h: 'Using Quell in a high, dry city' },
      {
        p: `Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its Uses statement reads: {uses}. The label gives one dose for every climate, {directions}, and doesn’t add drops for altitude or wind. Questions about using more go to a doctor or pharmacist; [how to use eye drops as directed](/guides/how-to-use-eye-drops-as-directed) walks through the label’s steps.`,
      },
      {
        p: `On dusty days, wash your hands before you open the bottle and keep the tip from touching anything: {tip}. Check the liquid before each use. {appearance} The label’s Do not use line reads: {doNotUse}.`,
      },
      { h: 'When to stop and see a doctor' },
      {
        p: `Dust in the eye, a scratch from blowing grit or pain that doesn’t settle aren’t things a lubricating drop is meant for. {stopUse} The site’s guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) goes through those signs.`,
      },
      { h: 'Ordering Quell in Albuquerque' },
      {
        p: `Quell ships from Brentwood, Tennessee to Albuquerque, Rio Rancho and every other New Mexico address. See the [Albuquerque page](/eye-drops/albuquerque-nm) and the [New Mexico page](/eye-drops/state/new-mexico) for local ordering. Shipping is {shipping} per order and free on {freeBottles} or more bottles. In June, when afternoons are hottest and driest, bring a delivered box indoors promptly.`,
      },
    ],
    faq: [
      {
        q: 'When is the windiest time of year in Albuquerque?',
        a: `The National Weather Service office in Albuquerque says April and May are the windiest months in New Mexico, with March and June close behind. Spring winds can also raise blowing dust.`,
      },
      {
        q: 'How low is the humidity in Albuquerque?',
        a: `NOAA’s Comparative Climatic Data put average afternoon relative humidity at the airport at 17 percent in June and 19 percent in April and May. Across the year the afternoon average is 29 percent.`,
      },
      {
        q: 'Does altitude in Albuquerque make eyes drier?',
        a: `The airport sits at about 5,310 feet, and higher, drier air plus wind speeds evaporation from the eye. Quell’s dose doesn’t change with altitude: {directions}.`,
      },
      {
        q: 'Does Quell deliver to Albuquerque, New Mexico?',
        a: `Yes. Quell ships to any US address, including Albuquerque and the rest of New Mexico, from Brentwood, Tennessee. Orders of {freeBottles} or more bottles ship free.`,
      },
    ],
  },

  /*
   * TSA pages fetched 2026-11-11:
   * https://www.tsa.gov/travel/security-screening/whatcanibring/items/eye-drops
   * https://www.tsa.gov/travel/security-screening/liquids-aerosols-gels-rule
   * https://www.tsa.gov/travel/security-screening/whatcanibring/medical
   */
  {
    slug: 'thanksgiving-travel-with-eye-drops',
    title: 'Thanksgiving travel with eye drops',
    description:
      'Flying or driving for Thanksgiving? What TSA allows for eye drops, where to pack the bottle, and why to order before the holiday week.',
    category: 'seasonal',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Put your eye drops in your carry-on. TSA’s page on eye drops allows them in carry-on bags at 3.4 ounces (100 milliliters) or less, and a bottle of Quell holds {size}. Driving instead? Keep the bottle in the car’s cabin with you, not in the trunk. If you need more, order before the holiday week, since the site doesn’t promise a delivery date.`,
      },
      { h: 'Can you bring eye drops through airport security at Thanksgiving?' },
      {
        p: `Yes. TSA’s “What Can I Bring?” entry for eye drops answers yes for carry-on bags when the container is 3.4 ounces (100 milliliters) or smaller, and yes for checked bags. Its liquids page asks travelers to keep travel-size liquids together in a quart-sized bag in the carry-on. A Quell bottle is a small fraction of the size limit, so it goes in that bag with your toothpaste and contact solution. TSA adds that the final call on any item belongs to the officer at the checkpoint.`,
      },
      {
        p: `Larger containers are handled differently. TSA’s page on medications says medically necessary liquids over 3.4 ounces must be declared to officers at the checkpoint for inspection, and it recommends, without requiring, that medications be labeled. A bottle Quell’s size never gets near that line, but the rule matters if someone in your group flies with bigger liquids.`,
      },
      { h: 'Packing for the long weekend' },
      {
        list: [
          `The open bottle you’re using now, in the quart bag if you’re flying, or in a bag that rides up front if you’re driving.`,
          `A sealed spare if the current bottle is running low. The Wednesday before Thanksgiving is a bad day to find it empty.`,
          `The carton, if there’s room. It carries the full Drug Facts panel, which is handy for rereading the directions at someone else’s house.`,
          `A small pack of tissues, so you have somewhere clean to set the cap down.`,
          `Your order confirmation email, if you ordered a spare that hasn’t arrived, so you can check its status from the road.`,
        ],
      },
      { h: 'Crowded airports and long travel days' },
      {
        p: `Holiday travel means longer lines, packed gate areas and, often, a delay spent on a phone. Two things work against your eyes there. Terminals are heated or cooled for thousands of people, and heated or air-conditioned air speeds evaporation from the eye. And people blink less while staring at a screen, so the tear film gets refreshed less often.`,
      },
      {
        p: `If you need a dose before boarding, use it in a restroom where you can wash your hands first, rather than at a crowded gate. Tilt your head back, pull the lower lid down, and let one drop fall without the bottle touching anything. The label is firm on that point: {tip}. Recap it right away so it doesn’t get knocked into a seat pocket full of crumbs.`,
      },
      { h: 'Driving to Thanksgiving dinner' },
      {
        p: `By late November, a trunk in much of the country is colder than the bottom of Quell’s storage range. The label reads: {storage}. That lower figure is room temperature on the cool side, and a car parked outside a relative’s house in the evening can fall well below it. Keep the bottle in a bag on the seat or in your coat, and carry it inside when you arrive.`,
      },
      {
        p: `On the road, heater vents aimed at the face dry the eyes, so point them at your feet or the windshield. If your eyes need a drop, pull over somewhere safe first. Never use eye drops while the car is moving, and give your vision a moment to clear before you drive on.`,
      },
      { h: 'At the host’s house' },
      {
        p: `A holiday kitchen runs the oven for hours, and the guest room may be the warmest or coldest room in the house. Keep the bottle away from the stove and the fireplace, and somewhere small children and pets can’t reach it. The label is plain about the risk: {swallowed}. For more on staying with relatives, the guide to [visiting family with eye drops](/guides/visiting-family-with-eye-drops) covers the rest of the stay.`,
      },
      { h: 'Ordering before the holiday week' },
      {
        p: `Orders ship from Brentwood, Tennessee, and the site doesn’t promise a delivery date, so order with room to spare rather than counting on a box arriving the day before you leave. Shipping is {shipping} per order and free on {freeBottles} or more bottles. If you’ll be away when it arrives, you can [ship it to the holiday address](/guides/shipping-to-a-holiday-address) instead, as long as it’s in the US. You can follow any order on the [order tracking page](/orders).`,
      },
      { h: 'If your eyes bother you while you’re away' },
      {
        p: `Travel and dry air explain a lot, but they don’t explain everything. {stopUse} Being away from home doesn’t change that; urgent care or the local emergency room can see you if it can’t wait. For questions about an order rather than your eyes, call {phone}, {hours}.`,
      },
    ],
    faq: [
      {
        q: 'Can I take eye drops in my carry-on for Thanksgiving?',
        a: `Yes. TSA allows eye drops in carry-on bags at 3.4 ounces (100 milliliters) or less, and a bottle of Quell is {size}. The officer at the checkpoint makes the final call on any item.`,
      },
      {
        q: 'Do eye drops have to go in the quart-size bag?',
        a: `TSA’s liquids page asks for travel-size liquids, each 3.4 ounces or less, to go in a quart-sized bag in your carry-on. Packing a small eye drop bottle there keeps screening simple.`,
      },
      {
        q: 'Will Quell arrive before Thanksgiving if I order now?',
        a: `The site doesn’t promise delivery dates, so order as early as you can. Every order gets a shipping email, and you can check its status on the order tracking page.`,
      },
      {
        q: 'Can I leave eye drops in a cold car during a holiday visit?',
        a: `Better not. Quell’s storage line reads: {storage}. A car parked outside in late November can fall below that, so carry the bottle into the house.`,
      },
    ],
  },

  /*
   * TSA page fetched 2026-11-11:
   * https://www.tsa.gov/travel/security-screening/whatcanibring/items/eye-drops
   * No FAA cabin-humidity figure could be verified on faa.gov, so none is given.
   */
  {
    slug: 'dry-eyes-on-a-plane',
    title: 'Dry eyes on a plane',
    description:
      'Why eyes feel dry on flights, what to do about the overhead vent and screens, and TSA’s rule for carrying eye drops on board.',
    category: 'using',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Eyes dry out on planes because cabin air is dry, the overhead vent blows across your face, and hours of screens slow your blinking. You can bring eye drops on board: TSA allows them in carry-on bags at 3.4 ounces (100 milliliters) or less. Keep Quell in the bag under the seat in front of you and use it as the label directs: {directions}.`,
      },
      { h: 'Why dry eyes on a flight happen' },
      {
        p: `The surface of the eye is covered by the tear film, which has three layers: mucus against the eye, water in the middle, and a thin layer of oil on the outside that slows evaporation. Every blink spreads a fresh coat. Anything that dries the air around you or moves it across your face pulls water off that film faster, and a cabin does both for hours on end.`,
      },
      {
        p: `Cabin air is dry, and you sit in it for the whole flight with no way to step outside. Add a seat by the window with sun on your face, or a long stretch reading a tablet, and many people notice their eyes long before landing. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is why people pack it for flights.`,
      },
      { h: 'The overhead air vent' },
      {
        p: `The little nozzle above your seat is the easiest thing on the plane to change. A stream of air aimed at your face works like a breeze on the eye’s surface. Twist it toward your chest or lap, angle it toward the aisle, or close it. If your neighbor’s vent hits you, it’s fine to ask them to angle it away.`,
      },
      { h: 'Screens and sleeping on flights' },
      {
        p: `Seatback screens, phones and laptops all cut down how often you blink, and a movie marathon on a long flight can mean hours of it. Every so often, look away down the aisle or out the window and blink a few times on purpose. Dimming the screen helps you look away more often in a dark cabin.`,
      },
      {
        p: `Sleeping upright with the vent running can leave eyes feeling scratchy when you wake. Closing the vent before you nod off, or wearing a sleep mask, keeps the draft off your face. If you wake up dry and it’s time for a dose, the label’s directions still apply.`,
      },
      { h: 'Can you bring eye drops on a plane?' },
      {
        p: `Yes. TSA’s entry for eye drops says they’re allowed in carry-on bags in containers of 3.4 ounces (100 milliliters) or less, and in checked bags too. A {size} bottle is far under the limit. Pack it in your quart-size liquids bag for screening, then move it to the bag at your feet once you’re through, so you aren’t opening the overhead bin mid-flight. A bottle in a checked bag is out of reach until baggage claim, and checked bags are sometimes delayed.`,
      },
      {
        p: `Flying outside the US? Security rules abroad are set by each country, so check the rules for any airport you depart from. The [traveling with eye drops](/guides/traveling-with-eye-drops) guide covers packing beyond the flight.`,
      },
      { h: 'Using eye drops in your seat' },
      {
        list: [
          `Wash your hands in the restroom first, or before boarding. A tray table and an armrest are not clean.`,
          `Wait for smooth air. Turbulence is when a bottle tip bumps your eye or your lap.`,
          `Lean your head back against the headrest and look up.`,
          `Pull your lower lid down and let one drop fall in. {tip}.`,
          `Close the eye gently for a moment, then do the other eye.`,
          `Cap the bottle at once and put it back in your bag.`,
        ],
      },
      {
        p: `{appearance} That milky look is normal and isn’t a sign that the flight did anything to the bottle.`,
      },
      { h: 'Dry eyes after flying' },
      {
        p: `Eyes can still feel dry for a while after landing, especially after a long flight or one with little sleep. The label doesn’t change the dose for that: {directions}. Don’t add extra drops to catch up. The guide to [using more than three drops a day](/guides/can-i-use-more-than-three-drops-a-day) explains who to ask if you think you need more.`,
      },
      {
        p: `Some feelings after a flight are not dryness. {stopUse}`,
      },
      { h: 'Time zones and long-haul flights' },
      {
        p: `Quell’s label says three times per day. It doesn’t mention time zones, flights that cross the night, or which clock to count by. Spacing the three doses across your waking hours at the destination is one way to read it, but the label doesn’t say, so a pharmacist is the person to check a schedule with.`,
      },
      { h: 'Before you fly' },
      {
        p: `Check how much is left in your bottle a week or two ahead. Quell is sold online, ships only to US addresses, and the site doesn’t promise a delivery date, so ordering in the last few days is a gamble. The guide to [buying eye drops before a trip abroad](/guides/buying-eye-drops-before-a-trip-abroad) covers the international case.`,
      },
    ],
    faq: [
      {
        q: 'Can you bring eye drops on a plane?',
        a: `Yes. TSA allows eye drops in carry-on bags in containers of 3.4 ounces (100 milliliters) or less, and in checked bags. A bottle of Quell is {size}.`,
      },
      {
        q: 'Why do my eyes get so dry on airplanes?',
        a: `Cabin air is dry, the overhead vent moves air across your face, and screens make you blink less. All three speed evaporation from the tear film.`,
      },
      {
        q: 'Should I point the plane’s air vent away from my face?',
        a: `If your eyes feel dry, yes. Aim it at your chest, toward the aisle, or close it, so the stream of air isn’t blowing across the surface of your eyes.`,
      },
      {
        q: 'Why are my eyes dry after flying?',
        a: `Hours in dry cabin air, with little blinking and often little sleep, can leave eyes feeling dry for a while after landing. Keep to the label’s dose; if discomfort persists, the label’s stop-use warning applies.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-in-a-hotel-room',
    title: 'Dry eyes in a hotel room',
    description:
      'Hotel heating and cooling units dry the air in a small, closed room. The thermostat, where to keep your eye drops, and using them away from home.',
    category: 'using',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Hotel rooms often feel dry because a heating and cooling unit runs hard in a small, closed space, and the windows rarely open. Heated or air-conditioned air speeds evaporation from the eye. Set a moderate temperature, keep the unit’s airflow off the bed, and keep Quell on the nightstand, not on top of the unit or in the car. The label’s storage line reads: {storage}.`,
      },
      { h: 'Why hotel rooms feel so dry' },
      {
        p: `Most hotel rooms are heated and cooled by a single unit, either under the window or in the wall, that blows air straight into a room of a few hundred square feet. When it’s cold outside it heats; when it’s hot it cools. Either way it moves a lot of air past whoever is in the room, and much of that air is the same room air going around again.`,
      },
      {
        p: `The tear film’s outer oil layer slows evaporation, its watery middle keeps the eye’s surface wet, and each blink spreads a fresh coat. Dry air and moving air both pull water off that film faster. Put the two together in a sealed room for eight hours of sleep, and it’s easy to see why some travelers wake up with eyes that feel gritty.`,
      },
      { h: 'Setting the thermostat and the fan' },
      {
        list: [
          `Pick a moderate temperature rather than blasting heat or cold. The unit runs less often, so it pushes less air across the room.`,
          `If the fan has an “auto” setting, use it. On “on” or “continuous,” the fan blows even when the unit isn’t heating or cooling.`,
          `Check where the louvers point. If they aim at the bed or the desk chair, angle them toward the ceiling or the far wall.`,
          `Use a low fan speed when you can. High is louder and moves more air.`,
          `Close the bathroom door during a hot shower if you want the bedroom to stay cooler, and open it afterward if the room feels dry.`,
        ],
      },
      {
        p: `None of these settings replace eye drops, and none are on Quell’s label. They’re just ways to make the room less hard on your eyes while you’re in it.`,
      },
      { h: 'Where to keep the bottle in a hotel room' },
      {
        p: `The top of the heating unit is the warmest spot in the room in winter, and the sill above it gets direct sun in summer. Neither is a good home for a bottle. The nightstand, a drawer or your toiletry bag on a shelf keeps it at room temperature. Avoid the space beside a coffee maker, too.`,
      },
      {
        p: `Leaving the bottle in a rental car or your own car until morning is the more common mistake. In winter the car drops below the bottom of the range on the label, and in summer a parked car climbs above the top. If a bottle has been somewhere too hot or too cold, look at it before using it. The label’s Do not use line reads: {doNotUse}. {milky} is what you should see.`,
      },
      { h: 'Using drops in a hotel bathroom' },
      {
        p: `Hotel counters are shared surfaces, cleaned between guests but not between your uses. Wash your hands first, set the cap on a clean tissue rather than the counter, and keep the tip in the air. The label puts it plainly: {tip}. The mirror makes it easier to aim. The directions don’t change on the road: {directions}.`,
      },
      { h: 'Work trips and longer stays' },
      {
        p: `Count how many days you’ll be away before you pack and bring the open bottle plus a sealed spare if it’s getting low. If you’re staying a week or more somewhere in the US and need more, Quell can be shipped to a hotel. Ask the front desk first whether they accept packages for guests, and put your name on the order exactly as it appears on the reservation. Some hotels ask you to add your arrival date to the address line. The guide to [getting the shipping address right](/guides/getting-the-address-right) covers the address details.`,
      },
      {
        p: `Shipping is {shipping} per order, or free on {freeBottles} or more bottles, and you can follow the package on the [order tracking page](/orders). The site doesn’t promise a delivery date, so leave time before your checkout day.`,
      },
      { h: 'Waking up with dry eyes in a hotel' },
      {
        p: `If you wake with dry eyes, a glass of water on the nightstand and a few slow blinks are a start. Quell’s label gives the same dose at home and away. It doesn’t say what time of day to use each of the three drops, so spacing is up to you within the directions, and a pharmacist can help if you’re unsure. Eyes that still hurt after a day or two in a dry room aren’t something to wait out. {stopUse}`,
      },
      { h: 'Away from home and need help' },
      {
        p: `For an eye emergency, call 911 or ask the front desk for the nearest emergency room. For a question about an order, call {phone}, {hours}. The [traveling with eye drops](/guides/traveling-with-eye-drops) guide covers the trip around the hotel stay, and [how to store eye drops](/guides/how-to-store-eye-drops) covers the storage range in more detail.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel dry in hotel rooms?',
        a: `Hotel rooms are small and closed, and a heating and cooling unit pushes dry, moving air through them for hours. Both speed evaporation from the tear film, especially while you sleep.`,
      },
      {
        q: 'Where should I keep eye drops in a hotel room?',
        a: `On the nightstand, in a drawer or in your toiletry bag. Avoid the top of the heating unit, a sunny windowsill and the car. Quell’s storage line reads: {storage}.`,
      },
      {
        q: 'Can I have Quell shipped to my hotel?',
        a: `Quell ships to US addresses, and a hotel is an address. Check with the front desk that they accept guest packages, and use the name on your reservation.`,
      },
      {
        q: 'Does turning down the hotel fan help dry eyes?',
        a: `A lower fan speed and the “auto” setting mean less air blowing across the room, and less air moving across your eyes. It doesn’t replace following the label’s directions.`,
      },
    ],
  },

  {
    slug: 'packing-eye-drops-for-a-cruise',
    title: 'Packing eye drops for a cruise',
    description:
      'Keep eye drops in your carry-on for embarkation day, out of hot beach bags on shore, and buy enough before you sail. Cruise rules vary by line.',
    category: 'using',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Pack your eye drops in the bag you carry aboard on embarkation day, not in the suitcase you hand over at the terminal, so the bottle stays with you. On the ship and on shore, keep it out of the sun: a beach bag in the heat can pass the top of the label’s range, {storage}. Cruise lines set their own packing rules, so check yours.`,
      },
      { h: 'Embarkation day: keep it with you' },
      {
        p: `At most terminals you hand your large bags to porters, and they reach your cabin some time later, sometimes not until the evening. Anything you’ll need in the first hours on board belongs in your carry-on: medicines, documents, a swimsuit and your eye drops. If the bottle is in a suitcase that’s sitting in a hot staging area, you have no control over it.`,
      },
      {
        p: `If you fly to the port, TSA allows eye drops in carry-on bags at 3.4 ounces (100 milliliters) or less. A bottle of Quell is {size}, so it goes in the quart bag with your other liquids and stays in the same carry-on all the way to the ship.`,
      },
      { h: 'Check your cruise line’s rules' },
      {
        p: `Cruise lines publish their own lists of what guests may and may not bring aboard, and the lists differ from line to line and change from time to time. Over-the-counter eye drops are an everyday item, but the line’s current rules are the ones that count, so read them before you pack. If your itinerary stops in other countries, those countries’ rules apply on shore, and each publishes them on its own official customs site.`,
      },
      { h: 'Sun, wind and air conditioning at sea' },
      {
        p: `Open decks are windy. Even on a calm day, a ship moving through the water makes its own breeze, and the top decks catch the most of it. Wind speeds evaporation from the eye. Add bright sun reflecting off the water and a long afternoon by the pool reading a phone, and eyes can feel it by dinner.`,
      },
      {
        list: [
          `Wraparound sunglasses block wind and glare at once.`,
          `A hat with a brim keeps direct sun off your face.`,
          `Sitting on the sheltered side of the deck cuts the wind.`,
          `Cabins are air-conditioned, which dries the air too. Point the vent away from the bed if you can adjust it.`,
        ],
      },
      { h: 'Shore days and beach bags' },
      {
        p: `Port days are where bottles get too hot. A tote on the sand, a backpack on a tour bus with the windows closed, or a locker by the beach can all go past the top of Quell’s range on a tropical afternoon. Keep the bottle in a shaded, inner pocket of the bag you carry, or leave it in your cabin if you won’t need a dose before you’re back on board.`,
      },
      {
        p: `If a bottle has spent time in the heat, look at it before the next dose. The [Drug Facts panel](/drug-facts) has the full label, and its Do not use line reads: {doNotUse}. {appearance}`,
      },
      { h: 'How many bottles to pack' },
      {
        p: `Quell is sold online, and the site ships only to US addresses, so you can’t have a bottle delivered to the ship or to a port abroad. Bring what you’ll need from home. The label’s directions are {directions}, which works out to six drops a day across both eyes. Multiply by the number of nights you’ll be away and compare that with what’s left in your open bottle. The guide to [how long a bottle of eye drops lasts](/guides/how-long-does-a-bottle-of-eye-drops-last) helps with the math.`,
      },
      {
        p: `Then add a sealed spare. Ships run late, flights home get canceled, and a bottle can roll off a balcony table. If you come home with the spare unopened, unopened bottles can be refunded within {returnDays} days of delivery without sending them back. Orders of {freeBottles} or more bottles ship free.`,
      },
      { h: 'Using drops in a cabin' },
      {
        p: `Cabin bathrooms are small, and a ship moves. Sit on the bed or a chair rather than standing at the sink in rough water, so a sudden roll doesn’t bump the bottle tip against your eye. Wash your hands first, keep the cap on a clean tissue, and remember the label’s instruction: {tip}.`,
      },
      { h: 'If something feels wrong at sea' },
      {
        p: `Most ships have a medical center on board for problems that come up during the voyage. Use it rather than waiting until you’re home if your eyes hurt or your vision changes. {stopUse} For order questions before you sail, call {phone}, {hours}. The guide to [traveling with eye drops](/guides/traveling-with-eye-drops) covers the trip to and from the port.`,
      },
    ],
    faq: [
      {
        q: 'Can I bring eye drops on a cruise?',
        a: `Over-the-counter eye drops are a common item to pack, but each cruise line publishes its own rules on what guests may bring. Check your line’s current list before you go.`,
      },
      {
        q: 'Should eye drops go in my carry-on bag for a cruise?',
        a: `Yes. Checked luggage handed to porters can take hours to reach your cabin, so keep eye drops and other daily items in the bag you carry aboard.`,
      },
      {
        q: 'Can Quell be shipped to a cruise ship or a foreign port?',
        a: `No. Quell ships only to US addresses, so buy enough for the whole trip, plus a sealed spare, before you leave home.`,
      },
      {
        q: 'Is it OK to keep eye drops in a beach bag?',
        a: `Only if the bag stays out of the sun. A tote on hot sand can pass the top of Quell’s storage range, {storage}. A shaded inner pocket or your cabin is a better place.`,
      },
    ],
  },

  {
    slug: 'buying-eye-drops-before-a-trip-abroad',
    title: 'Buying eye drops before a trip abroad',
    description:
      'Quell ships only to US addresses, so order before you leave. How to work out how many bottles to pack, customs, TSA, and storing them on the trip.',
    category: 'ordering',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Buy them before you leave, and have them shipped to your US address. Quell ships only within the United States, so it can’t follow you to a hotel abroad. Work out how many bottles you need from the label’s directions, {directions}, and the length of your trip, then add a sealed spare. Check your destination’s official customs site for its rules on medicines.`,
      },
      { h: 'Why order before you go' },
      {
        p: `Quell is sold on quelldrop.com, and the site ships to US addresses only. Once you’re overseas, there’s no way to have a bottle sent to you, and you may not find the same product in a pharmacy there. The guide on whether [Quell ships outside the United States](/guides/does-quell-ship-outside-the-us) explains the rule. In practice it means everything you’ll use on the trip has to leave home with you.`,
      },
      { h: 'How many bottles to take on a trip abroad' },
      {
        p: `The label gives the dose as {directions}. That is six drops a day in total. The arithmetic for your trip is short:`,
      },
      {
        list: [
          `Count the days from the morning you leave to the evening you get home.`,
          `Multiply by six. A 10-day trip is 60 drops; a three-week trip is 126.`,
          `Compare that with how much is left in your open bottle, and how long a full one usually takes you. The guide to [how long a bottle of eye drops lasts](/guides/how-long-does-a-bottle-of-eye-drops-last) helps with that part.`,
          `Add one sealed spare on top, for lost luggage, a knocked-over bottle or a delayed flight home.`,
        ],
      },
      {
        p: `Splitting bottles between two bags is a good idea on longer trips. If one bag goes missing, the other still has a bottle in it.`,
      },
      { h: 'When to order' },
      {
        p: `Orders ship from Brentwood, Tennessee, and the site doesn’t promise a delivery date. Order a few weeks before you leave, not the week of. You’ll get a confirmation email, then a shipping email with tracking when it’s available, and the [order tracking page](/orders) shows where it is. Shipping is {shipping} per order, and orders of {freeBottles} or more bottles ship free, which often covers a long trip plus a spare.`,
      },
      {
        p: `Send it to the address you’ll be at when it arrives. If you’re leaving from a relative’s house or a work address, use that, and add any suite or apartment number. Checkout works as a guest, and buyers must be 18 or older.`,
      },
      {
        p: `What about the spare you don’t use? Unopened bottles can be refunded within {returnDays} days of delivery without being sent back. On a long trip that window may close before you’re home, so think of the spare as something you’ll keep, not something you’ll return.`,
      },
      { h: 'Getting through airport security' },
      {
        p: `Leaving the US, TSA’s rule applies: eye drops are allowed in carry-on bags at 3.4 ounces (100 milliliters) or less, and a bottle of Quell is {size}. On the way home, the airport you depart from sets its own security rules, so look them up before your return flight. Keep the bottle in your carry-on on every leg so it doesn’t sit in a cargo hold or go missing with a checked bag.`,
      },
      { h: 'Customs at your destination' },
      {
        p: `Every country sets its own rules on bringing in medicines, including over-the-counter ones, and they differ widely. The only reliable source is the destination’s official customs or health ministry website, or its embassy in the US. Look it up before you pack rather than at the arrivals hall.`,
      },
      {
        p: `Whatever the rules say, keep the bottle in its original carton. The carton carries the full Drug Facts panel, with the active ingredients, {actives}, and the inactive ingredients listed in English. If anyone asks what it is, you can show them.`,
      },
      { h: 'Storing eye drops on the trip' },
      {
        p: `Other climates and other kinds of travel bring their own temperature problems: a hot train, a rental car parked in the sun, an unheated guesthouse in winter. Quell’s storage line reads: {storage}. Keep the bottle in a bag you carry, and look at it before using it if it’s been anywhere extreme. The Do not use line reads: {doNotUse}.`,
      },
      { h: 'If you run out while abroad' },
      {
        p: `You can’t order Quell to a foreign address, so a local pharmacist is the person to ask.`,
      },
      {
        p: `Show them the carton or a photo of the Drug Facts panel and ask what they have. Don’t mix in a different drop without asking; the label doesn’t cover using Quell with other eye drops, and a pharmacist or doctor is the right person to ask. {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Can I order Quell to a hotel outside the US?',
        a: `No. Quell ships only to US addresses. Order before you leave, have it delivered to your US address, and pack it with you.`,
      },
      {
        q: 'How many bottles of eye drops should I pack for an international trip?',
        a: `The label’s directions work out to six drops a day. Multiply by the days you’ll be away, compare that with what your bottles hold, and add one sealed spare.`,
      },
      {
        q: 'Can I bring eye drops through customs in another country?',
        a: `Rules on medicines differ by country. Check the destination’s official customs or health ministry website before you travel, and keep the bottle in its labeled carton.`,
      },
      {
        q: 'How far ahead should I order eye drops before traveling abroad?',
        a: `The site doesn’t promise a delivery date, so order a few weeks ahead rather than the week you leave. You can follow the package on the order tracking page.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-when-driving-in-winter',
    title: 'Dry eyes when driving in winter',
    description:
      'Heater vents, defrost air and snow glare can dry your eyes on winter drives. Aiming the vents, blinking on long stretches, and when to pull over.',
    category: 'seasonal',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Winter driving dries the eyes because the heater and defroster push warm, dry air through the car, often straight at your face, while snow glare makes you squint and long stretches of highway cut down on blinking. Aim the vents at your feet and the windshield, take breaks, and pull over before using eye drops. Never put them in while the car is moving.`,
      },
      { h: 'Why your eyes feel dry driving in winter' },
      {
        p: `Cold outdoor air holds little moisture. When the car’s heater warms that air, it doesn’t add any water, so the air coming out of the vents is warm and very dry. Then the fan pushes it across the cabin. The tear film covering your eye has an oily outer layer that slows evaporation, but dry air moving across its surface for an hour still pulls water off faster than usual. Each blink lays down a fresh coat, so anything that makes you blink less adds to the effect.`,
      },
      { h: 'Heater vents aimed at your face' },
      {
        list: [
          `Turn the dashboard vents down or sideways so they aim at your chest or hands, not your eyes.`,
          `Use the floor setting once the cabin is warm. Warm air rises from the footwell without blowing in your face.`,
          `Lower the fan speed after the first few minutes. The temperature stays the same with less air moving.`,
          `If the car has heated seats or a heated steering wheel, they warm you without blowing any air at all.`,
          `Check the passenger’s vents, too. A vent aimed at the person beside you can end up blowing across your face.`,
        ],
      },
      { h: 'Defrost and the windshield' },
      {
        p: `Defrost sends a strong stream of air up the windshield, and much of it rolls back toward the front seats. Visibility comes first: if the glass is fogging or icing, keep the defroster running. Once the windshield is clear, a mixed floor-and-defrost setting usually keeps it clear with less air coming at you. Cracking a rear window for a minute can also help a fogged car clear, though it brings in cold air.`,
      },
      { h: 'Glare off snow' },
      {
        p: `Fresh snow reflects sunlight back up at you, and the low winter sun can sit right in your line of sight in the morning and late afternoon. People squint against it, and a squint is not a full blink. Keep a pair of sunglasses in the car for winter as well as summer. Polarized lenses cut reflected glare off snow and wet roads, and wraparound frames keep the vent’s airflow off your eyes, too.`,
      },
      { h: 'Long drives and blinking' },
      {
        p: `Staring at something for a long stretch, whether it’s a screen or a straight, empty highway, tends to mean fewer blinks. On a long winter drive, make a point of blinking fully every so often, especially when the road is quiet. Plan a break every couple of hours. Getting out of the car, walking around and looking at something other than the road gives your eyes a rest from the heater as well.`,
      },
      { h: 'When to pull over and use eye drops' },
      {
        list: [
          `Find a safe place to stop: a rest area, a gas station or a parking lot, not the shoulder of a busy road.`,
          `Put the car in park. Never use eye drops while driving or while stopped in traffic.`,
          `Clean your hands. Steering wheels and gas pumps are among the dirtiest things you touch on a trip.`,
          `Tilt your head back against the headrest, pull the lower lid down, and let one drop fall: {directions}.`,
          `Keep the tip clear of your eye, your fingers and the car’s interior. {tip}.`,
          `Wait until your vision is completely clear before you drive again.`,
        ],
      },
      { h: 'Don’t leave the bottle in a cold car' },
      {
        p: `A car parked outside on a winter evening falls well below the bottom of the label’s range. Quell’s storage line reads: {storage}. Bring the bottle in with you when you get home, to the office or to a restaurant. If it has been left in a cold car, let it come back to room temperature and look at it before using it. The Do not use line reads: {doNotUse}. The guide on [eye drops in a hot car](/guides/eye-drops-in-a-hot-car) covers the summer side of the same problem.`,
      },
      {
        p: `If you’re heading out on a longer trip rather than a daily commute, the guide to [eye drops for a winter road trip](/guides/eye-drops-for-a-winter-road-trip) covers packing and planning.`,
      },
      { h: 'When it’s more than dry eyes' },
      {
        p: `If your vision blurs or changes while you’re driving, pull over and don’t drive on until it clears. {stopUse} The guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) goes through the signs the label points to.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry when I drive in winter?',
        a: `The heater warms cold outdoor air without adding moisture, and the fan blows it across your face. Dry, moving air speeds evaporation from the tear film, and long drives can mean fewer blinks.`,
      },
      {
        q: 'Should car heater vents point at your face?',
        a: `Not if your eyes feel dry. Aim the dashboard vents at your chest or hands, or use the floor setting once the car is warm, so the airflow isn’t crossing your eyes.`,
      },
      {
        q: 'Can I put in eye drops while I’m driving?',
        a: `No. Pull over somewhere safe and put the car in park first, then wait until your vision is fully clear before driving again.`,
      },
      {
        q: 'Does the car defroster dry out your eyes?',
        a: `Defrost sends a strong stream of air up the windshield, and some of it rolls back toward the front seats. Keep it on while you need it to see, then switch to a gentler setting.`,
      },
    ],
  },

  {
    slug: 'eye-drops-for-a-winter-road-trip',
    title: 'Eye drops for a winter road trip',
    description:
      'Planning a winter road trip? Where to pack eye drops so they don’t sit in a freezing trunk, checking the bottle before use, and planning stops.',
    category: 'seasonal',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Pack eye drops in a bag that rides in the car’s cabin with you, not in the trunk, and carry that bag into wherever you sleep each night. A trunk on a winter trip can drop far below the bottom of Quell’s storage range, {storage}. Before each dose, check that the liquid looks the way it should, and plan doses around your stops.`,
      },
      { h: 'Packing list for a winter road trip' },
      {
        list: [
          `The open bottle, in a small pouch in the bag you keep at your feet or on the back seat.`,
          `A sealed spare, packed in a different bag, in case one goes missing or the trip runs long.`,
          `The carton, which carries the full Drug Facts panel, including the warnings: {warnings}.`,
          `Tissues and hand sanitizer for stops without a clean sink.`,
          `Sunglasses for snow glare and low sun.`,
          `A note of your order number, if you have a delivery on the way while you’re traveling.`,
        ],
      },
      { h: 'Cabin, not trunk' },
      {
        p: `The trunk isn’t heated, and luggage can sit there for hours while you drive and for the whole evening once you stop. Anything inside the passenger area stays near the temperature you set. That makes the back seat, the passenger footwell or a door pocket on the inside a better home for the bottle than the cargo area.`,
      },
      {
        p: `One exception: the floor right in front of a heater outlet can get hot after a few hours of driving. Keep the bag on the seat or away from the vent’s direct stream. The aim is ordinary room temperature, not warm.`,
      },
      { h: 'Motels, cabins and the car until morning' },
      {
        p: `Every time you stop for the night, the bag with your eye drops comes inside with you. A car left in a motel lot until morning in January is well outside the label’s range by the time you come back to it. That’s easy to forget when you’re tired and only bring one bag in, so make the eye drops part of that bag.`,
      },
      {
        p: `A rental cabin or a vacation house may be cold when you arrive if the heat was turned down between guests. Keep the bottle in your coat pocket until the place warms up. In a motel room, set it on the nightstand rather than on top of the heating unit under the window.`,
      },
      { h: 'Check the bottle before you use it' },
      {
        p: `If the bottle has gotten cold, let it come back to room temperature before you use it, and then look at it. {appearance} The label’s Do not use line reads: {doNotUse}. If the color looks different from usual, set it aside and open the spare. A pharmacist can tell you what to do with the old one, and the guide to [how to dispose of eye drops](/guides/how-to-dispose-of-eye-drops) covers the basics.`,
      },
      { h: 'Planning stops around your doses' },
      {
        p: `Quell’s label says: {directions}. On a road trip, the easiest way to keep to that is to tie each dose to a stop you were making anyway, such as breakfast before you leave, a lunch break, and the evening when you check in. Rest areas and restaurants have sinks, which makes keeping your hands and the bottle tip clean easier: {tip}.`,
      },
      {
        p: `Don’t try to fit a dose in while the car is rolling. Use eye drops only when you’re parked, and let your vision clear before you get back on the road.`,
      },
      { h: 'Ordering before you leave' },
      {
        p: `Check how much is left a week or two before the trip. The site ships from Brentwood, Tennessee and doesn’t promise a delivery date, so ordering the day before you leave is a gamble. Shipping is {shipping} per order and free on {freeBottles} or more bottles. If you won’t be home when it arrives, you can [ship it to a holiday address](/guides/shipping-to-a-holiday-address) anywhere in the US and follow it on the [order tracking page](/orders).`,
      },
      { h: 'If the weather keeps you longer' },
      {
        p: `Winter trips run long. A closed pass or a storm can add days, which is where the spare earns its place. If you’re stuck in a stalled car or waiting out a road closure, keep the bottle in an inside coat pocket where your body heat keeps it closer to room temperature.`,
      },
      {
        p: `Dry heater air on a long trip explains some eye discomfort, but not all of it. {stopUse} The guide to [dry eyes when driving in winter](/guides/dry-eyes-when-driving-in-winter) covers the vents, glare and the drive itself.`,
      },
    ],
    faq: [
      {
        q: 'Can eye drops stay in the trunk on a winter road trip?',
        a: `No. A trunk in winter can fall well below the bottom of Quell’s storage range, {storage}. Keep the bottle in the cabin and carry it inside each night.`,
      },
      {
        q: 'What should I check if my eye drops got cold in the car?',
        a: `Let the bottle return to room temperature, then look at it. The label’s Do not use line reads: {doNotUse}. Quell normally looks milky brown.`,
      },
      {
        q: 'How many eye drops should I bring on a road trip?',
        a: `The label’s directions add up to six drops a day across both eyes. Count the days you’ll be away, compare that with what your bottle has left, and pack a sealed spare.`,
      },
    ],
  },

  /*
   * Federal driver qualification rule fetched 2026-11-11 from the eCFR (fmcsa.dot.gov
   * returned 403 to every request): 49 CFR 391.41(b)(10), vision standard.
   * https://www.ecfr.gov/api/renderer/v1/content/enhanced/current/title-49?part=391&section=391.41
   * No vision numbers are given in the text, only that the standard exists.
   */
  {
    slug: 'eye-drops-for-truck-drivers',
    title: 'Eye drops for truck drivers',
    description:
      'Long hauls, cab heat and air conditioning, sleeper berths and dusty docks: keeping eye drops in range in a truck, and using them off the road.',
    category: 'using',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Truck drivers spend long hours in a cab where heat or air conditioning runs constantly and the vents blow toward the face, and dock work adds dust and wind. Keep eye drops in the cab or the sleeper, inside the label’s range of {storage}. Use them only when the truck is parked, and follow the label: {directions}.`,
      },
      { h: 'What dries the eyes on a long haul' },
      {
        p: `A cab is a small space with a big climate system. In winter the heater runs for hundreds of miles, and in summer the air conditioning does. Both dry the air, and the dash vents sit a couple of feet from the driver’s face. Add hours of watching the road, a logging device or phone to check at every stop, and nights in a sleeper berth with the bunk heater or air conditioning running, and the tear film gets little rest.`,
      },
      {
        p: `The tear film has three layers: mucus on the eye, water in the middle, and an oil layer on top that slows evaporation. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label’s Uses line reads: {uses}.`,
      },
      { h: 'Vents, the bunk and the cab climate' },
      {
        list: [
          `Turn the dash vents away from your face and toward your chest or the windshield.`,
          `Run the fan on a lower setting once the cab is at temperature.`,
          `In the sleeper, aim the bunk vent at the wall or your feet, not your pillow.`,
          `Wear sunglasses for low-sun hours and glare off wet roads and snow.`,
        ],
      },
      { h: 'Dust at docks and yards' },
      {
        p: `Walking a yard to find a trailer, sliding tandems, or waiting at a dock door puts you in wind and dust that the cab keeps out. Grit on your hands and around the cab is the bigger issue for the bottle. Wash or sanitize your hands before you open it, and keep the tip away from everything, including the dash and the steering wheel. The label is direct about it: {tip}.`,
      },
      { h: 'Keeping the bottle in the right temperature range' },
      {
        p: `Quell’s storage range is {storage}. A dash in summer sun goes well above that, and a cab with the engine and the bunk heater off in winter can drop well below it. Side boxes and outside compartments aren’t heated or cooled at all.`,
      },
      {
        list: [
          `Keep the bottle in a closed cabinet or bag inside the sleeper, out of direct sun.`,
          `Don’t leave it on the dash, in a cup holder by the windshield, or in a side box.`,
          `When you leave the truck for long, take it with you in your shower bag or backpack.`,
          `If it has been too hot or too cold, look at it before the next dose. The Do not use line reads: {doNotUse}.`,
        ],
      },
      { h: 'Using eye drops on the road' },
      {
        p: `Only when the truck is parked and the brakes are set: at a rest area, a fuel stop, a shipper’s lot or during your break. Never while moving, and never in stop-and-go traffic. After the drop, give your vision time to clear completely before you pull out. Spreading the three daily doses across a shift is easy to tie to stops you already make: the pre-trip inspection, a fuel stop and the end of the day.`,
      },
      { h: 'DOT medical exams and your eyes' },
      {
        p: `Federal driver qualification rules (49 CFR 391.41) include a vision standard that the certified medical examiner checks at your DOT physical. This site can’t tell you how any eye drop relates to that exam. Questions about medications, your vision or your medical card belong with the medical examiner or your eye doctor, and the label doesn’t address them.`,
      },
      { h: 'Ordering when you’re rarely home' },
      {
        p: `Quell ships to any US address, so order it to wherever someone will take it in: home, a family member’s house, or a company terminal if your carrier accepts personal packages. Ask dispatch or the terminal office first. Put your name exactly as the terminal knows it, and use the [order tracking page](/orders) to see where it is. Shipping is {shipping} per order and free on {freeBottles} or more bottles. The guide to [getting the shipping address right](/guides/getting-the-address-right) covers suites and unit lines.`,
      },
      { h: 'When to get off the road' },
      {
        p: `If your vision blurs, doubles or changes while you’re driving, pull over at the next safe place and don’t drive on until it’s cleared. {stopUse} The guide to [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) lists the signs the label points to.`,
      },
    ],
    faq: [
      {
        q: 'What eye drops can truck drivers use?',
        a: `Truck drivers use lubricating eye drops like anyone else. Quell’s label reads: {uses}. Whether a drop suits you, and any question about your DOT medical exam, is one for your eye doctor or medical examiner.`,
      },
      {
        q: 'Can truck drivers use eye drops while driving?',
        a: `No. Use eye drops only when the truck is parked, and wait until your vision is fully clear before pulling out again.`,
      },
      {
        q: 'Where should a truck driver keep eye drops?',
        a: `Inside the cab or sleeper, in a closed cabinet or bag out of the sun. Not on the dash or in a side box. Quell’s storage line reads: {storage}.`,
      },
      {
        q: 'Do eye drops affect a DOT physical?',
        a: `The label doesn’t address it, and this site can’t answer it. Ask the certified medical examiner who does your exam, or your eye doctor, about any medication you use.`,
      },
    ],
  },

  /*
   * FAA page fetched 2026-11-11:
   * https://www.faa.gov/pilots/medical_certification/medications
   * ("For questions regarding specific medications or conditions, consult your AME
   * (Aviation Medical Examiner)"; OTC Medications Reference Guide; references are not
   * all-inclusive and don't replace consulting a PCP or AME; discuss options before taking.)
   * No statement is made about whether Quell is acceptable for pilots.
   */
  {
    slug: 'eye-drops-for-pilots-and-flight-crews',
    title: 'Eye drops for pilots and flight crews',
    description:
      'Dry cabin and cockpit air, long duty days and screens: what flight crews should know about eye drops, and why pilots should ask their AME first.',
    category: 'using',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Pilots and flight attendants work long duty days in dry cabin and cockpit air, often with vents and screens close to their faces, so dry eyes are common on the job. Before using any medication, over-the-counter eye drops included, pilots should follow the FAA’s advice: consult your Aviation Medical Examiner (AME) about specific medications. This site can’t say whether Quell is acceptable for flying.`,
      },
      { h: 'Why flight crews notice dry eyes' },
      {
        p: `Cabin and cockpit air is dry, and crews breathe it for a whole duty day rather than a single flight. A cockpit puts the gasper vents, the displays and an electronic flight bag tablet within arm’s reach, all of which work against the tear film: moving air pulls water off it, and screens cut down blinking. Early report times and short layovers mean less sleep, and the hotel room at the end of the day often has its own dry heat or air conditioning.`,
      },
      {
        p: `The tear film’s outer oil layer slows evaporation from the watery layer beneath it. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its label’s Uses line reads: {uses}.`,
      },
      { h: 'What the FAA says about pilots and medications' },
      {
        p: `The FAA’s page on medications for pilots says pilots must carefully consider both the medication and the underlying condition, because either can affect safety of flight. For questions about specific medications or conditions, it tells pilots to consult their AME. It links an over-the-counter medications reference guide and other documents on side effects and wait times, and it notes that these references are not all-inclusive and don’t replace a conversation with a primary care physician or AME.`,
      },
      {
        p: `The same page points out that most physicians aren’t trained in aviation medicine, and it strongly recommends talking through medication options with a doctor before taking anything. Put together, the FAA’s message is clear: the AME is the person to ask about any eye drop you plan to use while holding a medical certificate. This site sells Quell; it can’t make that call for you.`,
      },
      { h: 'Questions to bring to your AME' },
      {
        list: [
          `The product name and the carton, which lists the active ingredients, {actives}, and the {inactiveCount} inactive ingredients.`,
          `The label’s directions: {directions}.`,
          `Its warnings: {warnings}.`,
          `How long before a flight, if at all, you could use it.`,
          `Whether anything about your own eyes or history changes the answer.`,
        ],
      },
      { h: 'Flight attendants and other crew' },
      {
        p: `Cabin crew, dispatchers and maintenance staff face the same dry air, but the FAA’s pilot medication guidance is written for pilots. Check your employer’s policies on medications at work, and ask your own doctor or pharmacist about any eye drop. The label’s directions are the same for everyone: {directions}. It says nothing about contact lenses or using Quell alongside other drops, so ask an eye doctor or pharmacist about either.`,
      },
      { h: 'Using drops between legs' },
      {
        p: `Use drops when you have a few minutes with nothing that needs your eyes, such as on the ground between flights, and wait until your vision is fully clear before returning to any task that depends on it. Wash your hands in the lavatory or the crew room first. Galley counters, yokes and armrests are all surfaces, and the label is plain: {tip}. If something feels wrong rather than dry, the label is just as clear: {stopUse}`,
      },
      { h: 'Carrying the bottle in a crew bag' },
      {
        p: `A {size} bottle fits in a quart-size liquids bag; TSA allows eye drops in carry-on bags at 3.4 ounces (100 milliliters) or less. The bigger risk is temperature. A crew bag left in a car at an employee lot can go above or below the label’s storage range, {storage}, between trips. Take the bottle with you, and check it before use if it was left behind. The Do not use line reads: {doNotUse}.`,
      },
      { h: 'Layovers and hotel rooms' },
      {
        p: `Layover hotels are their own dry environment. The guide to [dry eyes in a hotel room](/guides/dry-eyes-in-a-hotel-room) covers the heating unit, the fan and where to keep the bottle. For flights as a passenger, see [dry eyes on a plane](/guides/dry-eyes-on-a-plane).`,
      },
      { h: 'Ordering around a schedule' },
      {
        p: `Quell ships to US addresses only, from Brentwood, Tennessee, and the site doesn’t promise a delivery date. Order to your home or another address where someone takes packages, ahead of a long trip pairing. You’ll get one reorder reminder email after an order, with no subscription. You can follow any order on the [order tracking page](/orders).`,
      },
    ],
    faq: [
      {
        q: 'Can pilots use over-the-counter eye drops?',
        a: `The FAA tells pilots to consult their Aviation Medical Examiner about specific medications and publishes guidance on over-the-counter medicines. This site can’t say whether any eye drop is acceptable for you; your AME can.`,
      },
      {
        q: 'Who should a pilot ask about using eye drops?',
        a: `Your Aviation Medical Examiner. The FAA’s medications page says to consult your AME with questions about specific medications or conditions.`,
      },
      {
        q: 'Why do flight attendants get dry eyes?',
        a: `Long duty days in dry cabin air, overhead vents, little sleep and dry hotel rooms on layovers all speed evaporation from the tear film.`,
      },
      {
        q: 'Can I keep eye drops in my crew bag?',
        a: `Yes, but take the bag with you rather than leaving it in a car at the employee lot, where it can go outside the label’s storage range: {storage}.`,
      },
    ],
  },

  {
    slug: 'can-you-mail-eye-drops',
    title: 'Can you mail eye drops to someone?',
    description:
      'The easy route is ordering Quell online with their address. If you mail a bottle yourself, check your carrier’s liquids rules and pack it well.',
    category: 'shipping',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Usually yes, but the simplest way is not to mail it yourself: order Quell on quelldrop.com and enter their US address at checkout. If you do mail a bottle, carriers set their own rules for liquids, so check with the one you use. Send it unopened if you can, and pack it upright in a sealed plastic bag with cushioning around it.`,
      },
      { h: 'The easier route: order it to their address' },
      {
        p: `Checkout works as a guest. Enter the recipient’s name and shipping address, and your own email, so the confirmation and shipping emails come to you. The bottle leaves Brentwood, Tennessee sealed, in its carton, with nothing for you to wrap, weigh or drop off. Shipping is {shipping} per order and free on {freeBottles} or more bottles.`,
      },
      {
        p: `The guides to [ordering eye drops for someone else](/guides/ordering-eye-drops-for-someone-else) and [sending Quell as a gift](/guides/sending-quell-as-a-gift) go through the details, including whose name goes on the package. Quell orders ship only to US addresses, so this works for anyone in the country, but not for someone abroad.`,
      },
      { h: 'Can you send eye drops in the mail yourself?' },
      {
        p: `Generally, a small bottle of over-the-counter eye drops is an ordinary item to mail within the US, but each carrier has its own rules for liquids: how they must be packed, how much you can send, and whether anything is restricted. Those rules change, so look them up on your carrier’s site or ask at the counter before you pack. Mailing outside the US adds the destination country’s customs rules on top, and those differ from country to country.`,
      },
      { h: 'How to pack eye drops for mailing' },
      {
        list: [
          `Leave the bottle in its carton if you have it. The carton protects the bottle and carries the Drug Facts label.`,
          `Make sure the cap is screwed on tight.`,
          `Put the bottle or carton upright in a zip-top plastic bag and seal it, so any leak stays in the bag.`,
          `Use a small box rather than a padded envelope. A box resists crushing.`,
          `Fill the space around it with bubble wrap or crumpled paper so the bottle can’t slide or roll.`,
          `Mark which way is up on the outside if you like, and write the address clearly, with any apartment or suite number.`,
        ],
      },
      { h: 'Opened or unopened?' },
      {
        p: `Send an unopened bottle if you can. A sealed bottle arrives with its tamper seal intact, so the recipient knows nobody has used it. An opened bottle has had its tip near someone’s eye, and the label’s rule about the tip is there for a reason: {tip}. If what you have on hand is an opened bottle, ordering a fresh one to their address is usually the better gift.`,
      },
      { h: 'Temperature in transit' },
      {
        p: `A box spends time in trucks, sorting facilities and on a doorstep, and you can’t control any of it. Quell’s storage line reads: {storage}. During a heat wave or a hard freeze, it may make sense to wait a few days, or to tell the recipient when to expect it so they can bring it in promptly. The guide to [eye drops shipped in hot or cold weather](/guides/eye-drops-shipped-in-hot-or-cold-weather) covers what to check when it arrives.`,
      },
      { h: 'Make sure the label goes with it' },
      {
        p: `Whoever receives eye drops should be able to read the label, because some of it is about them, not the product. Quell’s warnings include: {warnings}. The directions are {directions}. If the carton is lost, send a printout of the [Drug Facts](/drug-facts) page with the bottle so they have the full panel.`,
      },
      {
        p: `The label also says {swallowed}, so if the recipient lives with small children, a note to keep the package somewhere out of reach is worth adding.`,
      },
      { h: 'Mailing to a dorm or a care facility' },
      {
        p: `College mailrooms and senior living communities each have their own way of receiving packages, and some have rules about medicines residents keep in their rooms. Ask the building or the facility before you send anything, and address the box exactly as they tell you, often with a room or box number. The guide to [eye drops in a college care package](/guides/college-care-package-eye-drops) covers the student side, and the same advice about a sealed bottle in its carton applies.`,
      },
      { h: 'Can you ship eye drops to another country?' },
      {
        p: `Not through quelldrop.com, which ships to US addresses only. Mailing a bottle abroad yourself means meeting both your carrier’s international rules and the destination’s customs rules on medicines. Check the destination country’s official customs site before you send anything.`,
      },
    ],
    faq: [
      {
        q: 'Can you send eye drops in the mail?',
        a: `Within the US, a small bottle of over-the-counter eye drops is usually an ordinary item to mail, but each carrier sets its own rules for liquids. Check with yours before you pack.`,
      },
      {
        q: 'How do I pack eye drops to mail them?',
        a: `Keep the bottle in its carton with the cap tight, seal it upright in a plastic bag, and pack it in a small box with cushioning so it can’t slide around.`,
      },
      {
        q: 'Can I ship eye drops to someone in another state?',
        a: `Yes. The easiest way is to order Quell with their name and address at checkout. Quell ships to every US state from Brentwood, Tennessee.`,
      },
      {
        q: 'Is it better to mail an opened or unopened bottle of eye drops?',
        a: `Unopened. A sealed bottle arrives with its tamper seal intact and nothing has touched the tip. If you only have an opened bottle, ordering a fresh one to their address is simpler.`,
      },
    ],
  },

  {
    slug: 'shipping-eye-drops-to-your-work-address',
    title: 'Can I ship eye drops to my work address?',
    description:
      'Yes, Quell ships to any US address, your office included. Adding the company name and suite, mailroom delays, and what coworkers can see.',
    category: 'shipping',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Yes. Quell ships to any US address, and an office counts. Put the company name and the suite or floor on checkout’s apartment and suite line so the mailroom knows where it goes, and use your own email so the order and shipping emails reach you. Allow for mailroom delays, and collect the box promptly so it doesn’t sit in a hot or cold loading dock.`,
      },
      { h: 'How to write a work address at checkout' },
      {
        list: [
          `Name: your name as the front desk and mailroom know it. If everyone at work calls you by a nickname, the name on your badge is usually the safer choice.`,
          `Street address: the building’s street address, the one deliveries go to. Some campuses have a separate receiving address; ask facilities if you’re not sure.`,
          `Apartment, suite or unit line: the company name plus the suite, floor or department, for example “Acme Corp, Suite 400.”`,
          `City, state and ZIP: check the ZIP against the city. A mismatch can send a box the wrong way.`,
          `Phone: your own mobile number, not the main switchboard, so any question about the delivery reaches you.`,
        ],
      },
      {
        p: `The guide to [getting the shipping address right](/guides/getting-the-address-right) covers the same lines for home addresses. If checkout fills in an old address from a previous order on this browser, change it before you pay.`,
      },
      { h: 'Mailrooms and front desks' },
      {
        p: `In a large building, the delivery driver usually stops at a loading dock, a mailroom or a front desk, not at your desk. Tracking then shows the package as delivered, because it reached the building. From there, the mailroom sorts it and either sends it up with the internal mail run or holds it for pickup. That can add hours, or a day, depending on how your building works.`,
      },
      {
        p: `If tracking says delivered and nothing has turned up, ask the mailroom or front desk before anything else. Often a “missing” office package is sitting on a cart or a shelf with everyone else’s. The guide for when [tracking says delivered but there’s no package](/guides/tracking-says-delivered-but-no-parcel) walks through the rest.`,
      },
      { h: 'Loading docks, lobbies and temperature' },
      {
        p: `Loading docks and receiving rooms often aren’t heated or cooled the way offices are, and a box can wait there for a while. Quell’s storage line reads: {storage}. In summer and winter, watch the tracking link and collect the package on the day it arrives. A delivery that lands on a Friday afternoon can sit through the weekend if no one picks it up, and some buildings turn the heat or air conditioning down when they’re closed.`,
      },
      {
        p: `If the box has sat somewhere very hot or cold, let the bottle reach room temperature and look at it before using it. The label’s Do not use line reads: {doNotUse}. {milky} is what you should see.`,
      },
      { h: 'Privacy: what coworkers can see' },
      {
        p: `Whoever handles the mail will see the shipping label, which has your name and the delivery address on it. If you’d rather not have personal packages pass through work at all, ship to home or to a family member’s address instead. Eye drops are an everyday item, but where your packages go is your call.`,
      },
      {
        p: `Your order details stay between you and the shop. The [privacy policy](/privacy) explains what is collected at checkout and how it’s used.`,
      },
      { h: 'The emails still come to you' },
      {
        p: `The email you enter at checkout gets the order confirmation, the shipping email with tracking when it’s available, and, later, one reorder reminder. A personal email is usually the better choice than a work one: it keeps your receipts if you change jobs, and work filters sometimes catch order emails. If you plan to use the receipt for an HSA or FSA claim, the guide to [HSA and FSA funds for eye drops](/guides/hsa-fsa-and-eye-drops) explains what to keep.`,
      },
      { h: 'Coworking spaces and shared offices' },
      {
        p: `In a coworking space, put the space’s name and your company or desk number on the suite line, and your own name on the name line. Front desks at shared spaces often log packages and send a notice; ask how yours works so you know where to look. If the space is only staffed during certain hours, a box delivered after hours may wait at the door or in a locker until morning staff arrive.`,
      },
      { h: 'When work isn’t the right address' },
      {
        list: [
          `You’re about to leave the job or change offices.`,
          `The office will be closed for a holiday week or you’ll be on vacation. The guide to [shipping to a holiday address](/guides/shipping-to-a-holiday-address) covers sending it where you’ll be.`,
          `Your building doesn’t accept personal deliveries. Some do not, so check first.`,
          `You work remotely most days and only go in now and then.`,
        ],
      },
      { h: 'If you entered the wrong address' },
      {
        p: `Read the address in the confirmation email as soon as it arrives. If the suite or company name is missing or wrong, call {phone}, {hours}, with your order number. The earlier you call, the better the chance of catching it before the box ships. Orders ship from Brentwood, Tennessee, and the site doesn’t promise a delivery date. Shipping is {shipping} per order and free on {freeBottles} or more bottles.`,
      },
    ],
    faq: [
      {
        q: 'Can I get eye drops delivered to my office?',
        a: `Yes. Quell ships to any US address, including offices. Add the company name and suite or floor on the apartment and suite line at checkout so the mailroom can route it.`,
      },
      {
        q: 'How do I put a company name in a shipping address?',
        a: `Put your own name on the name line and the company name with the suite or floor on the apartment and suite line, for example “Acme Corp, Suite 400.”`,
      },
      {
        q: 'Why does tracking say delivered when the package isn’t at my desk?',
        a: `Tracking marks a package delivered when it reaches the building. In offices with a mailroom or front desk, it can take a while longer to reach you, so check there first.`,
      },
      {
        q: 'Should I use my work email when ordering to my office?',
        a: `Either works, but a personal email keeps your receipts if you change jobs and avoids work filters catching order emails. The confirmation, shipping email and one reorder reminder go there.`,
      },
    ],
  },

  {
    slug: 'eye-drops-delivered-to-an-apartment',
    title: 'Getting eye drops delivered to an apartment',
    description:
      'Unit numbers, package rooms and lockers, hot or cold lobbies, and what to do if tracking says your eye drops were delivered but you can’t find them.',
    category: 'shipping',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Put your unit number on checkout’s separate apartment line, watch the tracking link in the shipping email so you know when the box lands, and collect it from the package room, locker or lobby on the day it arrives. Lobbies and mail areas aren’t always heated or cooled, and Quell’s storage range is {storage}. If tracking says delivered and it isn’t there, check the building’s usual drop spots first.`,
      },
      { h: 'Unit numbers at checkout' },
      {
        p: `Checkout has a separate, optional line for an apartment, suite or unit number. Use it every time, even if your building is small and the driver knows it. A box with only a street address can end up on the wrong floor, at the leasing office or in a pile in the lobby with no clear owner.`,
      },
      {
        list: [
          `Write the unit the way the building labels it: “Apt 4B,” “Unit 212” or “#7.”`,
          `In a complex with several buildings, include the building number or letter too, for example “Bldg C, Apt 204.”`,
          `Use the name on the lease or the mailbox, so the package room or locker system can match it to you.`,
          `Add your mobile number, so a question about the delivery reaches you.`,
        ],
      },
      { h: 'Package rooms, lockers and leasing offices' },
      {
        p: `Apartment buildings handle deliveries in different ways, and knowing yours saves a search later. Some have a locked package room that residents open with a code or a fob. Others use smart lockers that send you a code by text or email when something arrives. Many hold boxes at the leasing office, which means you can only collect during office hours, and weekends may wait until Monday. In smaller buildings, packages may just be left at your door or in a shared hallway.`,
      },
      {
        p: `If you’re not sure how your building works, ask the management office before you order. It also tells you where to look first if a package goes quiet.`,
      },
      { h: 'Hot and cold lobbies' },
      {
        p: `Vestibules, mail alcoves and outdoor package lockers are often not climate controlled, and a locker in afternoon sun or an unheated entryway in January can sit well outside the label’s range. Quell’s storage line reads: {storage}. Collect the box the day it’s delivered when you can, and bring it straight inside.`,
      },
      {
        p: `If it sat out in heat or cold for a long time, let the bottle reach room temperature and check it before you use it. {appearance} The label’s Do not use line reads: {doNotUse}. The guide on [eye drops shipped in hot or cold weather](/guides/eye-drops-shipped-in-hot-or-cold-weather) has more on what to look for.`,
      },
      { h: 'Using the tracking link' },
      {
        p: `When the order ships, you get an email saying so, with a tracking number when one is available. That link shows when the package is out for delivery and when it’s marked delivered. You can also look the order up anytime on the [order tracking page](/orders). The site doesn’t promise a delivery date, so tracking is the thing to watch.`,
      },
      { h: 'If it says delivered but isn’t there' },
      {
        list: [
          `Check every place your building puts packages: the package room, the lockers, the leasing office, the lobby and the mail area.`,
          `Look outside the doors of the units above and below yours, and next door. A digit off is the most common mix-up.`,
          `Read the address in your confirmation email. If the unit number is missing or wrong, that explains where it went.`,
          `Ask the management office whether they signed for it or moved it.`,
          `Give it a little time. A package can be scanned as delivered a little before it reaches the door.`,
          `Still nothing? Call {phone}, {hours}, with your order number.`,
        ],
      },
      {
        p: `The guide for when [tracking says delivered but there’s no package](/guides/tracking-says-delivered-but-no-parcel) goes through these steps in more detail. If the box arrives damaged, the bottle is broken or the seal isn’t intact, the order is replaced.`,
      },
      { h: 'Moving apartments' },
      {
        p: `If you’ve ordered as a guest from this browser before, checkout fills in the last address you used. After a move, that is the old apartment, and a new tenant may end up with your box. Change the street and unit before you pay. If you move between ordering and delivery, call as soon as you can rather than waiting for it to arrive at the old place.`,
      },
      { h: 'Roommates and shared units' },
      {
        p: `If you share an apartment, put your own name on the order so the right person picks it up, and keep the bottle somewhere that’s yours. The label notes {swallowed}, so if anyone in the household has small children visiting, keep it out of reach. Shipping is {shipping} per order and free on {freeBottles} or more bottles, so roommates who both use Quell can combine an order.`,
      },
    ],
    faq: [
      {
        q: 'How do I add my apartment number when ordering Quell?',
        a: `Checkout has a separate, optional line for an apartment, suite or unit number. Enter it there, with a building number too if your complex has several.`,
      },
      {
        q: 'Is it OK if my eye drops sit in the package room for a while?',
        a: `It depends on the room. If it isn’t heated or cooled, a long wait can take the bottle outside Quell’s storage range, {storage}. Pick it up on the day it arrives when you can.`,
      },
      {
        q: 'My eye drops say delivered but they aren’t in my building. What now?',
        a: `Check the package room, lockers, leasing office and neighboring doors, and confirm the unit number in your confirmation email. If it still hasn’t turned up, call {phone} with your order number.`,
      },
      {
        q: 'Where do apartment packages go if no one is home?',
        a: `That depends on the building: a package room, a smart locker, the leasing office or your door. Ask your management office how they handle deliveries so you know where to look.`,
      },
    ],
  },
]
