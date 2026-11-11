import type { Guide } from '@/lib/guide-types'

export const DAILY_20261111_A: Guide[] = [
  /*
   * Sources fetched 2026-11-11:
   * - https://www.weather.gov/bou/Denver_Monthly_Extremes (1991–2020 monthly normals, DIA; snowfall from Stapleton)
   * - https://forecast.weather.gov/product.php?site=BOU&product=CLA&issuedby=DEN (2025 annual climate summary)
   * - https://forecast.weather.gov/product.php?site=BOU&product=CLM&issuedby=DEN (October 2026 monthly summary)
   * - https://www.usgs.gov/media/images/colorado-landsat-state-mosaic (Capitol's 13th step at 5,280 feet)
   * Dropped: Denver relative humidity (no official NWS figure found), citywide elevation range (only on tourism sites).
   */
  {
    slug: 'dry-eyes-in-denver',
    title: 'Dry eyes in Denver',
    description:
      'Denver’s mile-high air, Front Range wind and long heating season can leave eyes feeling dry. What NWS records show, and a routine that fits.',
    category: 'local',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Denver is an easy place to end up with dry-feeling eyes. The city sits a mile above sea level, its air holds little moisture for much of the year, and wind off the Front Range plus months of furnace heat both pull water off the surface of the eye. A few changes to the air around you, more deliberate blinking at screens, and a lubricating drop used as its label directs make a practical plan.`,
      },
      { h: 'Dry eyes in Denver: what the weather records show' },
      {
        p: `The National Weather Service’s Denver/Boulder office lists 1991–2020 monthly normals for Denver International Airport. On that table, December’s normal precipitation is 0.35 inches and January’s is 0.38 inches, the two lowest figures of the year. July, by contrast, runs to 2.14 inches. So the months when the furnace runs longest are also the months with the least water arriving from the sky.`,
      },
      {
        p: `The same office’s annual climate summary for 2025 recorded 15.42 inches of precipitation at Denver against a normal of 14.48, an average wind speed of 9.9 mph, and a peak gust of 70 mph on July 10. A year that came in wetter than normal still added up to about fifteen inches, which tells you how little the baseline is.`,
      },
      {
        p: `October 2026 was another example. The office’s monthly summary logged 0.44 inches of precipitation against a normal of 0.99, and a mean temperature of 59.3°F against a normal of 51.1°F. Warm, dry fall weeks like that are pleasant for a walk around Sloan’s Lake and hard on eyes at the same time.`,
      },
      { h: 'Does altitude affect your eyes?' },
      {
        p: `Altitude works on your eyes mostly through the air it brings. Higher up, the air tends to be thinner and drier, and moisture leaves any wet surface faster, including the film of tears that coats the front of the eye. According to the U.S. Geological Survey, the thirteenth step of the Colorado State Capitol sits exactly one mile, 5,280 feet, above sea level, which is the mile in the Mile High City.`,
      },
      {
        p: `That tear film has three parts: a mucus layer against the eye, a watery middle, and a thin oil layer on top that slows evaporation. Every blink spreads a fresh film. Dry air speeds up the loss between blinks, and a long stretch of reading or screen work slows blinking down, so the two stack. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, the layer that matters most when the air itself is dry.`,
      },
      { h: 'Dry eyes at high altitude: arriving versus living here' },
      {
        p: `If you’ve just moved from somewhere humid, or flown in for a conference at the Colorado Convention Center, your eyes may be among the first things to notice the change, along with chapped lips and dry skin. Hotel rooms add their own dry, heated or cooled air on top.`,
      },
      {
        p: `People who’ve lived here for years tend to notice it in other ways: on a drive west on I-70 into the mountains, on a windy day at a Rockies game, or after a full workday in an office where the heat runs from October to April. A ski day in the high country takes all of it a step further; [ski trips, cold wind and dry eyes](/guides/ski-trips-and-dry-eyes) covers that.`,
      },
      { h: 'Dry eyes in Colorado: how Denver’s seasons play out' },
      {
        list: [
          `Winter: the driest months on the NWS normals table, and the furnace on most of the day. Warming that air without adding water lowers its relative humidity further.`,
          `Spring: April and May bring more precipitation, but weather swings quickly and windy days are part of the season along the Front Range.`,
          `Summer: the wettest stretch, yet much of that water arrives in short storms, with dry, sunny hours in between and air conditioning running indoors.`,
          `Fall: October’s normal is under an inch of precipitation, and the heating season starts up again before the month is out.`,
        ],
      },
      { h: 'A Denver routine that fits the label' },
      {
        p: `Quell’s directions are the same in any city: {directions}. Spacing those three drops across your day, rather than bunching them, means each one meets a different stretch of dry air. One way to lay it out in Denver:`,
      },
      {
        list: [
          `Morning, after the furnace has run all night and before the commute on I-25 or the light rail.`,
          `Midday, at lunch, when screen time and office air have had a few hours to work.`,
          `Evening, after dinner, once the house heat is back on and the day’s wind is behind you.`,
        ],
      },
      {
        p: `Around those drops, small habits help the air. Aim the car’s vents at your chest, not your face. Run a humidifier in the bedroom and clean it as its maker says; [does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) explains the humidity range to aim for. Wraparound sunglasses cut wind on a bike ride along the Cherry Creek Trail. And at a screen, look away across the room now and then and take a few full blinks.`,
      },
      { h: 'Keeping the bottle in range through a Denver year' },
      {
        p: `The label’s storage line is {storage}. Denver weather can push a bottle outside that range quickly. A bottle left in a parked car through a January night can drop well below it, and a dashboard in July can climb well above it. Keep the bottle you’re using in a coat pocket or bag that comes indoors with you, and keep spares in a drawer, away from radiators and sunny windowsills. If a bottle has been through a cold snap, let it come back to room temperature and look at it first. {appearance}`,
      },
      { h: 'Getting Quell in Denver' },
      {
        p: `Quell is ordered online and shipped from Brentwood, Tennessee, to addresses anywhere in the United States, Denver included. Shipping is a flat {shipping}, and orders of {freeBottles} bottles or more ship free. No delivery date is promised, so order before your current bottle runs low. The [Denver page](/eye-drops/denver-co) and the [Colorado page](/eye-drops/state/colorado) have the local ordering details, and checkout works as a guest.`,
      },
      { h: 'When it’s more than the air' },
      {
        p: `Dry weather explains a lot of eye discomfort in Denver, but not all of it. The label is clear about where a drop stops and a doctor starts: {stopUse} If you’re unsure what you’re feeling, the [dry eye self-check](/self-check) can help you put it into words for an eye doctor. It is not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Denver?',
        a: `Denver’s air is dry for much of the year, the city sits a mile up, and wind plus long months of indoor heating speed evaporation from the eye’s surface. Screens add to it by slowing your blink rate.`,
      },
      {
        q: 'Does Denver’s altitude make your eyes drier?',
        a: `Altitude matters mainly because the air up here tends to be drier, so the tear film loses water faster between blinks. Wind and indoor heat make the effect stronger.`,
      },
      {
        q: 'What is the driest month in Denver?',
        a: `On the National Weather Service’s 1991–2020 normals for Denver International Airport, December has the lowest normal precipitation at 0.35 inches, with January close behind at 0.38 inches.`,
      },
      {
        q: 'Can I get Quell eye drops delivered in Denver?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Denver and the rest of the United States for a flat {shipping}, or free on orders of {freeBottles} or more bottles. No delivery date is promised.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-11:
   * - https://weather.gov/pub/climateCosDailyNormalsRecords (1991–2020 normals for Colorado Springs, NWS Pueblo)
   * - https://www.weather.gov/pub/climateCOS2025 (2025 annual summary: average RH, wind, gust, precipitation)
   * - https://coloradosprings.gov/Media (city elevation 6,035 feet; Pikes Peak 14,115 feet)
   * Dropped: monthly wind normals (only on third-party sites), the city's land area.
   */
  {
    slug: 'dry-eyes-in-colorado-springs',
    title: 'Dry eyes in Colorado Springs',
    description:
      'At 6,035 feet under Pikes Peak, Colorado Springs pairs dry air with wind and a long heating season. What the NWS numbers say and how to manage it.',
    category: 'local',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Colorado Springs sits higher than Denver, at 6,035 feet by the city’s own count, and its air is dry for much of the year. Add wind off the foothills, long winters of indoor heat and plenty of outdoor training at altitude, and eyes can feel dry or gritty here even when nothing else has changed. Adjusting the air you sit in, blinking on purpose, and a lubricating drop used as labeled cover most of it.`,
      },
      { h: 'Dry eyes in Colorado Springs: the numbers' },
      {
        p: `The National Weather Service office in Pueblo keeps the climate records for Colorado Springs. Its 1991–2020 normals put annual precipitation at 15.91 inches and annual snowfall at 32.5 inches, with a normal annual mean temperature of 50.4°F. Winter is the driest stretch on that table: 0.37 inches in November, 0.23 inches in December, 0.29 inches in January and 0.32 inches in February.`,
      },
      {
        p: `The office’s annual summary for 2025 gives a feel for an actual year. It recorded 16.28 inches of precipitation against that 15.91-inch normal, an average wind speed of 9.1 mph, a highest gust of 64 mph on March 4, and an average relative humidity of 52 percent. That humidity figure is a yearly average across day and night; dry winter afternoons indoors with the furnace running sit far below it.`,
      },
      { h: 'Why 6,035 feet matters for your eyes' },
      {
        p: `Altitude shapes the air more than it shapes the eye itself. The higher you go, the thinner and usually drier the air, and the faster water evaporates from any exposed surface. The front of your eye is one of those surfaces, covered by a tear film only a few layers deep: mucus against the eye, water in the middle and a thin film of oil on top that slows evaporation. Each blink lays down a new film, and dry air takes it apart a little faster between blinks.`,
      },
      {
        p: `The city’s media page describes that 6,035-foot elevation as an ideal training location for athletes. The same thin, dry air that makes it useful for training also means anyone running, cycling or hiking hard here is breathing and blinking in it for long stretches.`,
      },
      { h: 'Pikes Peak days and the drive up' },
      {
        p: `Pikes Peak, which the city calls America’s Mountain, tops out at 14,115 feet, more than 8,000 feet above downtown. A trip up the mountain, whether by the highway, the cog railway or on foot, moves you into colder, windier air in a short time. Wraparound sunglasses help on the summit, and keeping the car’s vents off your face on the drive helps on the way.`,
      },
      {
        p: `Bring your drops, but keep the bottle somewhere sheltered. On a cold summit or a hot parking lot at the base, a bottle in a door pocket can end up outside the label’s range, {storage}. An inside jacket pocket keeps it close to body temperature.`,
      },
      { h: 'Dry eyes in Colorado: daily life around the Springs' },
      {
        list: [
          `Garden of the Gods and Red Rock Canyon trails: open, sunny ground where wind meets you head-on. Sunglasses and a hat brim help.`,
          `Long commutes on I-25 or Powers Boulevard: the car heater or air conditioning blows straight at the driver unless you angle the vents down.`,
          `Base life and shift work: early starts, late finishes and time in heated or cooled buildings mean a drop schedule has to fit an unusual day, not a nine-to-five one.`,
          `Winter at home: furnace heat from fall into spring dries the indoor air further, especially in a bedroom with the door closed.`,
        ],
      },
      { h: 'Fitting the label’s directions into a Springs day' },
      {
        p: `Quell’s label gives one schedule: {directions}. It doesn’t change with the weather, so the work is in spacing. Tie each drop to something you already do: one after the morning coffee, one at lunch, and one in the evening before you settle in for the night. If you train early, a drop before you head out and another once you’re back indoors can be two of the three. When applying any drop, follow the label’s handling line: {tip}.`,
      },
      {
        p: `Around the drops, work on the air. A humidifier in the room where you sleep, cleaned the way its maker says, raises the moisture you spend eight hours in. Screens deserve a pause: look out the window toward the mountains for a little while and blink fully a few times. And if you’ve got a space heater in a basement office, point it at your legs, not your face; [dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) goes into that.`,
      },
      { h: 'Ordering Quell to Colorado Springs' },
      {
        p: `Quell ships from Brentwood, Tennessee, to any address in the United States, including homes on and around the city’s bases. Shipping is a flat {shipping}, and orders of {freeBottles} bottles or more ship free. The site doesn’t promise a delivery date, so order while you still have a week or two left. See the [Colorado Springs page](/eye-drops/colorado-springs-co) and the [Colorado page](/eye-drops/state/colorado) for the local details.`,
      },
      { h: 'When dry air isn’t the whole story' },
      {
        p: `The label sets the limit on what a drop is for: {uses}. If things don’t settle, it also says when to stop: {stopUse} An eye doctor in town can look at what’s going on. If it helps to sort out what you’re noticing first, try the [self-check](/self-check); it is not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes feel dry in Colorado Springs?',
        a: `The city sits at 6,035 feet, where the air is usually thin and dry, and wind, long heating seasons and outdoor activity all speed evaporation from the tear film between blinks.`,
      },
      {
        q: 'How much precipitation does Colorado Springs get a year?',
        a: `The National Weather Service’s 1991–2020 normals for Colorado Springs list 15.91 inches of precipitation and 32.5 inches of snowfall a year, with December the driest month at 0.23 inches.`,
      },
      {
        q: 'What is the average humidity in Colorado Springs?',
        a: `The NWS Pueblo office’s 2025 annual summary for Colorado Springs recorded an average relative humidity of 52 percent. That averages day and night together; heated indoor air in winter is often much drier.`,
      },
      {
        q: 'Does Quell ship to Colorado Springs?',
        a: `Yes. Orders ship from Brentwood, Tennessee, for a flat {shipping}, or free when you order {freeBottles} or more bottles. No delivery date is promised, so order ahead.`,
      },
    ],
  },

  /*
   * Sources fetched 2026-11-11:
   * - https://www.weather.gov/cys/information (elevation 6,120 feet; Laramie Range about 8,700 feet, ~30 miles west; rolling prairie)
   * - https://forecast.weather.gov/product.php?site=CYS&product=CLA&issuedby=CYS (2025 annual summary, Cheyenne airport)
   * - https://forecast.weather.gov/product.php?site=CYS&product=CLM&issuedby=CYS (October 2026 monthly summary)
   * - https://www.weather.gov/cys/highwind (wind-prone guidance points on I-80 and I-25)
   * - https://forecast.weather.gov/product.php?site=BOU&product=CLA&issuedby=DEN (Denver 2025 average wind, for comparison)
   * Dropped: 1991–2020 wind normals and the "windiest months" claim (only found on news and third-party sites).
   */
  {
    slug: 'dry-eyes-in-cheyenne',
    title: 'Dry eyes in Cheyenne, Wyoming',
    description:
      'In Cheyenne, wind does more to dry your eyes than humidity does. What the National Weather Service recorded, and how to plan your day and drops around it.',
    category: 'local',
    addedOn: '2026-11-11',
    body: [
      {
        p: `In Cheyenne, wind is the main thing working against your eyes. The National Weather Service recorded an average wind speed of 11.3 mph at the airport in 2025, higher than Denver’s, with a gust of 75 mph in December. At 6,120 feet, the air also runs thin and cool. Shielding your eyes from the wind, keeping indoor air moist, and a lubricating drop used as labeled are the practical answers.`,
      },
      { h: 'Is Cheyenne windy? What the records say' },
      {
        p: `The NWS Cheyenne office’s annual climate summary for 2025, issued on January 1, 2026, recorded an average wind speed of 11.3 mph at the Cheyenne airport and a highest gust of 75 mph on December 19. For comparison, the Denver/Boulder office’s summary for the same year put Denver’s average wind at 9.9 mph. That difference sounds small until you remember it’s an average across every calm night and still morning of the year.`,
      },
      {
        p: `Recent months follow the same pattern. October 2026’s monthly summary for the airport logged an average wind of 9.3 mph and a gust of 51 mph on October 15, in what was otherwise a mild month: the mean temperature came in at 54.6°F, well above the normal of 46.5°F.`,
      },
      { h: 'Wind matters more here than humidity' },
      {
        p: `Here is the part that surprises people. The same 2025 summary lists Cheyenne’s average relative humidity at 54 percent, which is not desert-dry. What dries eyes in Cheyenne is moving air. Wind strips moisture off the surface of the eye between blinks, and it can make your eyes water and sting at the same time. Watering from wind isn’t the same as a well-spread tear film, and once the wind stops, eyes can feel drier than before.`,
      },
      {
        p: `The tear film has a mucus layer against the eye, a watery layer over it, and a thin oil layer on top that slows evaporation. Steady wind works against all of it. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the layer that bears the brunt when air keeps moving across the eye.`,
      },
      { h: 'High plains elevation and the Laramie Range' },
      {
        p: `The NWS Cheyenne office describes the city as sitting in the southeastern corner of Wyoming at 6,120 feet, with rolling prairie around it and the Laramie Mountain Range rising to about 8,700 feet roughly 30 miles west. There is little between the prairie and the wind to slow it down, and that open ground is a big part of why gusts reach town at full strength.`,
      },
      {
        p: `Snow tells a similar story. The 2025 summary recorded 35.1 inches of snowfall against a normal of 62.9, while total precipitation of 15.39 inches landed almost exactly on the normal of 15.41. Snow that does fall here often moves sideways, and blowing snow plus wind is about as hard on eyes as weather gets.`,
      },
      { h: 'Driving I-80 and I-25 with dry eyes' },
      {
        p: `The NWS Cheyenne office runs a high wind page with hourly guidance for the stretches it considers wind-prone, including Interstate 80 at Arlington and at Buford, and Interstate 25 at Bordeaux and at Wyo Hill. Anyone commuting to Laramie or down to Fort Collins knows those names. A long drive into a crosswind tends to mean a tight grip, a steady stare and fewer blinks, with the heater blowing on your face the whole way.`,
      },
      {
        list: [
          `Angle the dashboard vents toward your chest or the windshield, not your eyes.`,
          `Wear sunglasses on bright days; low winter sun off snow makes you squint and blink less.`,
          `Pull over somewhere safe before using a drop. Never apply one while driving.`,
          `Keep the bottle in your coat, not the door pocket, so it doesn’t freeze in a parked truck.`,
        ],
      },
      { h: 'Working and living outdoors in the wind' },
      {
        p: `Ranch work, construction, base duty at F.E. Warren and plain errands across a parking lot all put you in the wind more than you’d plan for. Wraparound safety glasses or sunglasses break the airflow before it reaches your eyes. A hat brim helps with blowing grit. Indoors, keep the humidity up in the rooms where you spend the most hours, and clean any humidifier the way its maker says.`,
      },
      { h: 'Fitting Quell into a Cheyenne day' },
      {
        p: `The label’s directions don’t change with the forecast: {directions}. A practical spacing is one drop before you head out, one midday, and one in the evening once you’re in for good. On a windy day, timing a drop for when you’re back indoors makes more sense than using one just before you step into a gale. Handle the bottle with care in cold, stiff fingers: {tip}.`,
      },
      {
        p: `Storage needs some thought in a Wyoming winter. The label’s range is {storage}, and a bottle left in a vehicle through a cold night can fall well below it. If that happens, let it warm up indoors and check it before use. The label’s Do not use line reads: {doNotUse}.`,
      },
      { h: 'Ordering Quell to Cheyenne' },
      {
        p: `Quell ships from Brentwood, Tennessee, to addresses across the United States, and Cheyenne orders go out the same way as any other. Shipping is a flat {shipping}, free on {freeBottles} or more bottles, and no delivery date is promised, so order before you run low. The [Cheyenne page](/eye-drops/cheyenne-wy) and the [Wyoming page](/eye-drops/state/wyoming) have the local details.`,
      },
      {
        p: `If your eyes don’t settle once you’re out of the wind, the label’s limit applies: {stopUse} Not sure what you’re noticing? The [self-check](/self-check) can help you describe it to an eye doctor. It is not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why are my eyes so dry in Cheyenne?',
        a: `Mostly wind. The NWS recorded an average wind speed of 11.3 mph at the Cheyenne airport in 2025, and moving air pulls moisture off the eye between blinks. Indoor heating and the city’s 6,120-foot elevation add to it.`,
      },
      {
        q: 'How windy is Cheyenne, Wyoming?',
        a: `The National Weather Service’s 2025 annual summary for the Cheyenne airport recorded an average wind speed of 11.3 mph and a highest gust of 75 mph on December 19, compared with a 9.9 mph average in Denver that year.`,
      },
      {
        q: 'Is Cheyenne humid or dry?',
        a: `By humidity alone, not extremely dry: the 2025 NWS summary lists an average relative humidity of 54 percent. Wind is what makes the air feel harsh on the eyes.`,
      },
      {
        q: 'Can I order Quell to Cheyenne?',
        a: `Yes. Quell ships from Brentwood, Tennessee, to Cheyenne for a flat {shipping}, or free with {freeBottles} or more bottles. The site doesn’t promise a delivery date.`,
      },
    ],
  },

  {
    slug: 'how-to-file-an-fsa-claim-for-eye-drops',
    title: 'How to file an FSA claim for eye drops',
    description:
      'Filing an FSA claim for eye drops: the itemized receipt to keep, what claim forms usually ask, and what to do if your FSA card is declined at checkout.',
    category: 'ordering',
    addedOn: '2026-11-11',
    body: [
      {
        p: `To claim eye drops from a flexible spending account, pay for the order, keep the itemized receipt, then submit it to your plan administrator through its website, app or paper form, with the date, the merchant, what you bought and the amount. For a Quell order, the confirmation email serves as that receipt. Each plan sets its own rules, so check yours before you buy.`,
      },
      { h: 'Before you order: three things to ask your plan' },
      {
        p: `A few minutes with your plan’s website or member line saves a rejected claim later. Most of what decides a claim is set by the plan, not by the store.`,
      },
      {
        list: [
          `Does the plan reimburse over-the-counter medicines without a prescription? Federal rules allow it, but plans can set their own lists and conditions.`,
          `What deadline applies? Many FSAs have a plan-year end date and a separate, later deadline for submitting claims for that year.`,
          `Does it want anything beyond an itemized receipt, such as a product description or a note on who the purchase was for?`,
        ],
      },
      { h: 'Paying with an FSA card versus paying and claiming' },
      {
        p: `There are two routes. With an FSA debit card, you pay at checkout and the plan may later ask you to back up the purchase with a receipt. Without one, you pay with your own card and file a claim to be paid back.`,
      },
      {
        p: `On quelldrop.com, card payment is handled on the payment provider’s secure page. Whether an FSA card goes through there depends on the card and your plan, and the site can’t tell you ahead of time. If it’s declined, pay with another card and use the reimbursement route instead, where your plan permits it.`,
      },
      { h: 'The receipt: what your order email contains' },
      {
        p: `The confirmation email arrives once payment goes through. It is your receipt, and it carries what a claim usually needs:`,
      },
      {
        list: [
          `The order number.`,
          `Each item with its quantity and price, so the claim shows exactly what was bought.`,
          `The subtotal, the shipping charge and the total.`,
          `The address the order is going to.`,
          `The seller’s name, {company}, and the date you paid.`,
        ],
      },
      {
        p: `Save the email as a PDF from your email program, or take a screenshot, so you have a file ready to upload. [Getting a receipt for your order](/guides/getting-a-receipt-for-your-order) covers finding it again if it goes missing.`,
      },
      { h: 'Filing the claim, step by step' },
      {
        list: [
          `Sign in to your FSA administrator’s website or app, or download its claim form.`,
          `Choose a new claim for a medical or over-the-counter expense, if it asks for a type.`,
          `Enter the date of purchase from the confirmation email.`,
          `Enter the merchant as it appears on the receipt: {company}.`,
          `Describe the item plainly, for example “Quell lubricating eye drops, over-the-counter, {size}.”`,
          `Enter the amount. If your plan doesn’t reimburse shipping, enter the product subtotal rather than the total.`,
          `Upload the receipt file and submit. Keep a note of the claim number your plan gives you.`,
        ],
      },
      { h: 'What about shipping charges?' },
      {
        p: `Whether shipping counts is your plan’s call. Some administrators reimburse only the product line, so separating it on the claim avoids a partial rejection. You can sidestep the question: orders of {freeBottles} bottles or more ship free, so the receipt shows product only. Below that, shipping is a flat {shipping}.`,
      },
      { h: 'If your plan asks for more' },
      {
        p: `Occasionally an administrator wants proof that an item is a medicine. Quell is an over-the-counter drug with a Drug Facts panel, and its Uses section reads: {uses}. The full panel is on the [Drug Facts](/drug-facts) page, and printing it or saving it as a PDF gives you something to attach if asked. Some plans also accept a short letter from your doctor; that is a question for the plan.`,
      },
      {
        p: `If a claim comes back denied, read the reason before resubmitting. Common fixes are a clearer item description, a receipt with item-level detail rather than a card statement, or a separate line for shipping.`,
      },
      { h: 'Timing around the plan year' },
      {
        p: `Your plan decides whether it goes by the order date or the delivery date, and how long you have after the year ends to file. The confirmation email shows the date you paid. The site doesn’t promise delivery dates, so if your plan counts delivery, order well before the cutoff. [Spending FSA money before the year ends](/guides/spending-fsa-money-before-year-end) covers the year-end rush.`,
      },
      { h: 'If you need the receipt again' },
      {
        p: `Search your inbox for “Quell,” including spam and archive folders. With your order number and email, the [order lookup page](/orders) still finds the order. Otherwise call {phone}, {hours}, and have the name and address the order went to.`,
      },
    ],
    faq: [
      {
        q: 'What receipt do I need for an FSA claim on eye drops?',
        a: `An itemized receipt showing the date, the seller, the product and the amount. For a Quell order, the confirmation email lists the order number, each item and price, the subtotal, shipping and total, and names {company} as the seller.`,
      },
      {
        q: 'Can I submit an FSA claim for eye drops bought online?',
        a: `Generally yes, if your plan reimburses over-the-counter medicines. Pay for the order, save the confirmation email as your receipt, and submit it through your administrator’s site, app or claim form.`,
      },
      {
        q: 'Will my FSA card work on quelldrop.com?',
        a: `It depends on the card and your plan; the site can’t confirm it in advance. If the card is declined at the payment page, pay another way and file a claim for reimbursement if your plan allows it.`,
      },
      {
        q: 'Does FSA reimburse shipping on eye drops?',
        a: `That is up to your plan. To keep it simple, enter only the product subtotal if your plan excludes shipping, or order {freeBottles} or more bottles so the order ships free.`,
      },
    ],
  },

  {
    slug: 'why-otc-eye-drops-count-for-hsa-and-fsa',
    title: 'Why OTC eye drops count for HSA and FSA',
    description:
      'The CARES Act of 2020 let HSA and FSA funds pay for over-the-counter medicines without a prescription. What changed, what the IRS says, and the limits.',
    category: 'ordering',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Over-the-counter eye drops count for HSA and FSA spending because of the CARES Act, signed in March 2020. Its section 3702 made over-the-counter medicines qualified medical expenses for these accounts without a prescription, for amounts paid after December 31, 2019, according to the IRS. Quell is an over-the-counter drug, so it generally qualifies, though your plan still sets its own rules.`,
      },
      { h: 'What the CARES Act changed' },
      {
        p: `The Coronavirus Aid, Relief, and Economic Security Act became Public Law 116-136 in March 2020. Section 3702 of the law is titled “Inclusion of certain over-the-counter medical products as qualified medical expenses.” It covers health savings accounts and the related accounts employers offer, including health flexible spending arrangements and health reimbursement arrangements.`,
      },
      {
        p: `The IRS explained the change in news release IR-2020-122, issued June 17, 2020: over-the-counter products and medications became reimbursable without a prescription, and the new rules apply to amounts paid after December 31, 2019. Before that, a prescription was the gate. An eye drop off the shelf needed a doctor’s note to be paid from one of these accounts; now it doesn’t.`,
      },
      { h: 'Are eye drops FSA eligible?' },
      {
        p: `Over-the-counter medicine is, under federal rules. IRS Publication 969, the guide to HSAs and other tax-favored health plans for 2025 returns, lists expenses incurred for over-the-counter medicine, whether or not prescribed, as covered expenses for health FSAs and HRAs.`,
      },
      {
        p: `Federal eligibility sets the outer edge. Your employer’s plan can be narrower. Some administrators keep their own lists of eligible items, and some ask for more paperwork than others. [How to file an FSA claim for eye drops](/guides/how-to-file-an-fsa-claim-for-eye-drops) walks through the receipt and the claim itself.`,
      },
      { h: 'Can I buy eye drops with an HSA?' },
      {
        p: `Generally yes. A health savings account follows the same CARES Act rule on over-the-counter medicines, and unlike an FSA, an HSA balance doesn’t expire at the end of the year. You can pay with an HSA card if it’s accepted, or pay another way and take a distribution to reimburse yourself, keeping the receipt in case you ever need to show what the money paid for.`,
      },
      {
        p: `On this site, whether a particular HSA or FSA card is accepted at the payment page depends on the card and the plan. The confirmation email is the receipt either way.`,
      },
      { h: 'Why an eye drop is a “medicine” for these rules' },
      {
        p: `The CARES Act wording is about over-the-counter medicines and drugs, not about general wellness products. An over-the-counter drug in the United States carries a standardized Drug Facts panel, with active ingredients, a stated use, warnings and directions. Quell’s panel lists {actives} as its actives, and its Uses section reads: {uses}.`,
      },
      {
        p: `That panel is what tells a plan administrator the product is a drug, not a cosmetic or a gadget. It is reproduced word for word on the [Drug Facts](/drug-facts) page if you ever need to show it.`,
      },
      { h: 'The tax deduction is a different rule' },
      {
        p: `One point catches people out. Paying from an HSA or FSA is not the same as claiming an itemized medical deduction on your tax return. IRS Publication 502, which covers that deduction for 2025 returns, still says that except for insulin, you can’t include in medical expenses the cost of a drug that isn’t prescribed. So an over-the-counter eye drop can be eligible for your FSA or HSA and still not be deductible on its own. If that distinction matters for your return, a tax professional can tell you how it applies to you.`,
      },
      { h: 'Is shipping covered?' },
      {
        p: `The law speaks to the medicine; shipping is the plan’s decision. Some reimburse it as part of the purchase and some don’t. Orders of {freeBottles} bottles or more ship free from this site, which takes the question off the table; otherwise shipping is a flat {shipping} and shows as its own line on the receipt.`,
      },
      { h: 'What hasn’t changed' },
      {
        list: [
          `The label still governs how you use the product: {directions}.`,
          `An account paying for it doesn’t make it right for every eye. If you use other drops or wear contact lenses, the label doesn’t cover that; ask your eye doctor or pharmacist.`,
          `The stop-use warning applies whoever paid: {stopUse}`,
        ],
      },
      {
        p: `For the shorter version of all this, see [can I use HSA or FSA funds for eye drops?](/guides/hsa-fsa-and-eye-drops)`,
      },
    ],
    faq: [
      {
        q: 'Are OTC eye drops FSA eligible?',
        a: `Under federal rules, yes. Since the CARES Act, over-the-counter medicines can be reimbursed from health FSAs without a prescription for amounts paid after December 31, 2019. Your plan can still set its own conditions.`,
      },
      {
        q: 'Are eye drops HSA eligible without a prescription?',
        a: `Generally yes. Section 3702 of the CARES Act made over-the-counter medicines qualified medical expenses for HSAs, so a prescription is no longer needed. Keep the receipt with your records.`,
      },
      {
        q: 'When did OTC medicine become HSA and FSA eligible?',
        a: `The CARES Act was signed in March 2020, and the IRS said in release IR-2020-122 that the new rules apply to amounts paid after December 31, 2019.`,
      },
      {
        q: 'Can I deduct over-the-counter eye drops on my taxes?',
        a: `Not on their own, according to IRS Publication 502: except for insulin, a drug that isn’t prescribed can’t be included in the itemized medical deduction. That is separate from paying with HSA or FSA funds.`,
      },
    ],
  },

  {
    slug: 'do-you-need-id-to-buy-eye-drops',
    title: 'Do you need ID to buy eye drops?',
    description:
      'Over-the-counter eye drops don’t need a prescription, and Quell’s checkout asks for no ID. What it does ask for, and the 18-and-over rule in the terms.',
    category: 'ordering',
    addedOn: '2026-11-11',
    body: [
      {
        p: `No. Over-the-counter lubricating eye drops are sold without a prescription, and buying Quell online takes no photo ID, no ID upload and no prescription. Checkout asks for your email, name, U.S. shipping address and phone number, and your card goes to the payment provider. The site’s terms do require the buyer to be at least 18.`,
      },
      { h: 'Why there’s no prescription or pharmacy check' },
      {
        p: `Quell is an over-the-counter drug. That category exists for products a person can choose and use by following the label, without a doctor writing an order or a pharmacist dispensing it. The label does the job a prescription would otherwise do: it lists the active ingredients, says what the product is for, and spells out the warnings and directions. Quell’s directions read: {directions}.`,
      },
      {
        p: `Because of that, there is no pharmacy to name, no doctor’s details to enter and no file to upload when you order. [What over-the-counter means](/guides/what-over-the-counter-means) explains the category in more detail.`,
      },
      { h: 'In a store versus online' },
      {
        p: `At a store register, an over-the-counter eye drop is usually rung up like any other shelf item. Individual stores set their own policies for certain products, and a cashier may ask for ID on things the store has decided to restrict, but that is store policy rather than something written on an eye drop’s label.`,
      },
      {
        p: `Online, there is no cashier to look at a card. Quell is sold through this site and shipped to you, so the checks happen in different ways: the terms you agree to, the payment provider verifying your card, and a shipping address in the United States.`,
      },
      { h: 'What Quell’s checkout asks for' },
      {
        list: [
          `An email address, for the confirmation and shipping emails.`,
          `Your name and a shipping address in the United States.`,
          `A phone number, used for the order and its delivery.`,
          `Payment, entered on the payment provider’s own secure page rather than on this site.`,
        ],
      },
      {
        p: `There is no account to create; guest checkout is the default. [What checkout asks for, and why](/guides/what-checkout-asks-for) goes through each field.`,
      },
      { h: 'What it doesn’t ask for' },
      {
        list: [
          `No driver’s license, passport or other photo ID.`,
          `No scan or upload of any identity document.`,
          `No prescription, insurance card or doctor’s information.`,
          `No password, unless you choose to make an account.`,
        ],
      },
      {
        p: `If a site claiming to sell Quell ever asks you to upload identity documents, stop and call {phone} to check before going further.`,
      },
      { h: 'The 18-and-over rule' },
      {
        p: `The [terms](/terms) say you must be at least 18 years old to buy from this site. Nobody checks a card at the door, so the rule rests on the buyer being honest about it. An adult can order for anyone in the household and have it shipped to any U.S. address; the age rule is about who pays. [Do you have to be 18 to order?](/guides/do-you-have-to-be-18-to-order) covers buying for family.`,
      },
      { h: 'Buying for someone else' },
      {
        p: `Ordering for a parent, partner or roommate doesn’t need their ID either. Put their name and address on the order and your own email if you want the receipts. The label still applies to whoever uses the drops, and Quell’s carries this caution: {warnings}. If the person is a child, wears contact lenses or uses other eye drops, the label doesn’t give directions for that, so ask their eye doctor or pharmacist first.`,
      },
      { h: 'Why prescription sites ask for more' },
      {
        p: `If you’ve bought prescription eye drops online, you may remember being asked for a prescription, a doctor’s name or a date of birth. Those checks belong to prescription medicines, which a pharmacy can only dispense against a valid order. An over-the-counter drop has no such order behind it, so a site selling one has nothing of that kind to verify. A seller asking for far more than an OTC purchase needs is worth a second look.`,
      },
      { h: 'What happens to the details you do give' },
      {
        p: `Fewer questions also means less information about you in one place. The [privacy policy](/privacy) says order details are used to take payment and ship the order, that card details never pass through or rest on this site’s servers, and that the site doesn’t sell personal information. That’s a short list, and it’s meant to be.`,
      },
      { h: 'Why age matters even without an ID check' },
      {
        p: `Medicines in the home are a responsibility as well as a purchase. Every bottle carries the instruction to keep it out of reach of children, and Quell’s adds: {swallowed}. The 18-and-over rule keeps the purchase with an adult who can see to that.`,
      },
    ],
    faq: [
      {
        q: 'Do you need ID to buy eye drops online?',
        a: `Not on this site. Quell’s checkout asks for your email, name, U.S. address and phone, with payment on the provider’s secure page. There is no ID upload and no prescription.`,
      },
      {
        q: 'Do you need a prescription to buy lubricating eye drops?',
        a: `Not for an over-the-counter product like Quell. Its Drug Facts label carries the directions and warnings, so you order it the way you’d buy any other OTC medicine.`,
      },
      {
        q: 'Can a store ask for ID when you buy eye drops?',
        a: `A store can set its own policies for items it chooses to restrict. That is a decision by the store, not a requirement printed on an over-the-counter eye drop’s label.`,
      },
      {
        q: 'How old do you have to be to buy eye drops on quelldrop.com?',
        a: `At least 18. The site’s terms set that age for buyers, and an adult can order for anyone in the household and ship to any U.S. address.`,
      },
    ],
  },

  {
    slug: 'is-it-safe-to-buy-eye-drops-from-overseas-websites',
    title: 'Buying eye drops from overseas websites',
    description:
      'Thinking of buying eye drops from a site abroad? The checks FDA’s BeSafeRx campaign points to, the label language to look for, and who to call.',
    category: 'ordering',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Buying eye drops from a website outside the United States carries more unknowns: who made the product, how it was stored, whether the label is in English and meets U.S. rules, and who answers if something goes wrong. FDA’s BeSafeRx campaign points buyers to sellers with a U.S. street address and phone number. Quell ships from Brentwood, Tennessee, to U.S. addresses only.`,
      },
      { h: 'What BeSafeRx is' },
      {
        p: `BeSafeRx is a public awareness campaign run by the U.S. Food and Drug Administration to help consumers buy medicines online more safely. It is aimed mainly at prescription medicines, but the signs it teaches carry over to any drug product you put in your eye, because they’re about the seller, not the prescription.`,
      },
      { h: 'The signs FDA lists for a trustworthy online seller' },
      {
        p: `FDA’s “Considering an Online Pharmacy?” page, part of BeSafeRx, lists signs of a legitimate online pharmacy. Several apply directly to buying eye drops:`,
      },
      {
        list: [
          `A U.S. street address and a phone number you can call.`,
          `A license from a state board of pharmacy, for sites that operate as pharmacies.`,
          `A licensed pharmacist available to answer questions, again for pharmacies.`,
          `A requirement for a valid prescription, for prescription drugs. Over-the-counter drops like Quell don’t need one, so that sign doesn’t apply to them.`,
        ],
      },
      { h: 'Warning signs FDA lists' },
      {
        p: `The same page lists warning signs, and several are exactly what can go wrong with a package from abroad:`,
      },
      {
        list: [
          `The seller isn’t licensed in the United States or by your state board of pharmacy.`,
          `The product looks different from what you’d get locally, or arrives damaged or expired.`,
          `There is no expiration date, or the packaging is in a foreign language.`,
          `Prices seem far too low to be real.`,
          `You’re charged for orders you didn’t place or never received.`,
          `There is no clear privacy policy, or the site sells your personal and financial information.`,
        ],
      },
      { h: 'Why the label language matters for eye drops' },
      {
        p: `An over-the-counter drug sold in the United States carries a Drug Facts panel in English, set out in a fixed order: active ingredients, uses, warnings, directions, other information and inactive ingredients. If a bottle arrives with a label you can’t read, you can’t check what’s in it or how to use it, and you can’t follow its warnings. It also leaves you nothing to show a pharmacist: asking about an ingredient starts with being able to read its name, and a translated listing on a website isn’t the same as the label on the bottle in your hand.`,
      },
      {
        p: `Quell’s panel is reproduced word for word on the [Drug Facts](/drug-facts) page. Its actives are {actives}, and its inactive ingredients are {inactives}. Its warnings begin: {warnings}. You can read every line before you pay.`,
      },
      { h: 'Storage and transit' },
      {
        p: `Eye drops have a storage range, and a long international journey through warehouses and cargo holds is hard to account for. Quell’s label reads {storage}. When a bottle arrives, check it against the label: {appearance} The Do not use line is short and firm: {doNotUse}.`,
      },
      { h: 'If something goes wrong' },
      {
        p: `A seller abroad may be hard to reach and outside the reach of U.S. consumer protections. BeSafeRx points people to FDA’s MedWatch program to report unexpected side effects, and to FDA’s form for reporting websites that appear to sell medicine illegally.`,
      },
      {
        p: `Quell, for comparison, is sold by {company}, {address}, with a phone line at {phone}, {hours}. Damaged, incorrect or broken-seal orders are replaced, and the refund policy is written down: {returns}.`,
      },
      { h: 'A short check before you buy from any site' },
      {
        list: [
          `Find the seller’s company name, a U.S. street address and a working phone number.`,
          `Read the full Drug Facts panel on the listing before paying.`,
          `Look for a written returns policy and a privacy policy.`,
          `Be wary of a price far below what U.S. stores charge.`,
          `When the bottle arrives, check the seal, the expiration date and the label language.`,
        ],
      },
      {
        p: `[How to buy eye drops online safely](/guides/how-to-buy-eye-drops-online-safely) covers the same checks for U.S. sites. If you live outside the United States, note that Quell doesn’t ship abroad; [does Quell ship outside the US?](/guides/does-quell-ship-outside-the-us) explains.`,
      },
    ],
    faq: [
      {
        q: 'Is it safe to buy eye drops from overseas websites?',
        a: `It carries more unknowns. FDA’s BeSafeRx campaign lists warning signs such as no U.S. license, packaging in a foreign language, missing expiration dates and prices that look too low.`,
      },
      {
        q: 'What is FDA BeSafeRx?',
        a: `BeSafeRx is an FDA public awareness campaign that helps consumers buy medicines online more safely, with lists of signs of a legitimate online pharmacy and warning signs of an unsafe one.`,
      },
      {
        q: 'How can I tell if an eye drop website is in the US?',
        a: `Look for a company name, a U.S. street address and a phone number that someone answers. FDA’s BeSafeRx materials list a U.S. street address and phone number among the signs of a legitimate seller.`,
      },
      {
        q: 'Where does Quell ship from?',
        a: `Quell ships from Brentwood, Tennessee, and only to addresses in the United States. The seller is {company}, reachable at {phone}, {hours}.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-from-cold-air',
    title: 'Dry eyes from cold air',
    description:
      'Cold outdoor air and wind chill can leave eyes stinging, watering and then dry. Why it happens outside, and what to do on the walk, the commute and the run.',
    category: 'seasonal',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Yes, cold air can make your eyes feel dry. Cold outdoor air holds little water vapor, and wind or your own speed on a run or bike moves it across the eye, pulling moisture off the tear film between blinks. Eyes may sting and water in the cold, then feel dry once you’re back inside. Shielding them from the wind and using a lubricating drop as labeled both help.`,
      },
      { h: 'Can you get dry eyes from cold weather?' },
      {
        p: `Cold weather on its own doesn’t change the eye; it changes the air the eye sits in. The colder the air, the less water vapor it can hold. So a still winter morning can feel crisp rather than harsh, while the same temperature with a stiff breeze feels raw on your face and eyes. What matters for the eye is how much moisture leaves its surface, and both dry air and moving air push that up.`,
      },
      {
        p: `The tear film is what loses the water. It has a mucus layer against the eye, a watery layer over it and a thin oily layer on top that slows evaporation. In cold wind, the whole film thins faster than a normal blink rate can replace it.`,
      },
      { h: 'Why eyes water in the cold and still feel dry' },
      {
        p: `Teary eyes on a cold walk seem like the opposite of dryness. Often they’re a reaction to it: the surface of the eye is irritated by the wind, and a rush of watery tears follows. Those tears run down your cheek instead of forming an even film, and when you step indoors the eye can feel gritty or tight. That pattern is a hint that the outdoor air, not a lack of tears, is the problem.`,
      },
      { h: 'Are dry eyes worse in cold weather?' },
      {
        p: `For many people they are, because winter stacks two things. Outside, there’s cold, dry, often windy air. Inside, there’s heating. This guide is about the outdoor half; [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) covers furnaces and radiators.`,
      },
      {
        p: `The jump between the two can be what you notice most. Coming in from a cold commute to a warm office gives the eye no break, and the stinging from the wind can turn into a dry, tired feeling by mid-morning.`,
      },
      { h: 'Wind chill and your eyes' },
      {
        p: `Wind chill describes how cold it feels on exposed skin when wind is added to low temperature. Your eyes are exposed too, and they have no layer of skin to protect them, only the tear film and your eyelids. You can’t do much about the wind itself, but you can control how much of it reaches your eyes.`,
      },
      {
        list: [
          `Wraparound sunglasses or clear wraparound glasses block wind from the sides as well as the front.`,
          `A hat with a brim, or a hood pulled forward, cuts the wind on your brow.`,
          `Standing with your back to the wind when you can, at a bus stop or a crosswalk, gives your eyes a rest.`,
          `A scarf or neck gaiter pulled too high can push your warm breath up into your glasses; keep it below the nose if it fogs your lenses.`,
        ],
      },
      { h: 'Running, cycling and shoveling in the cold' },
      {
        p: `Speed makes your own wind. A run at a steady pace or a bike commute on a cold morning moves air across your eyes even on a calm day, and the harder you work, the less you tend to blink. Sport glasses with a wrap help a lot. So does turning your head away from the wind on the return leg, or planning a route with some shelter. Skiing adds altitude and speed on top; [ski trips, cold wind and dry eyes](/guides/ski-trips-and-dry-eyes) covers the slopes.`,
      },
      {
        p: `Shoveling snow is slower but long: you’re bent over, facing into whatever breeze there is, and blowing snow lands in your face. Taking breaks inside every so often gives the eye time to recover.`,
      },
      { h: 'Using drops around time outdoors' },
      {
        p: `Quell’s Uses section reads: {uses}. The directions are {directions}. The full panel is on the [Drug Facts](/drug-facts) page. On a cold day, a drop applied indoors once you’re back from the cold is easier to manage than one applied on a windy sidewalk with gloves on. If you’re heading out for a long stretch, one drop before you go and another when you return can be two of the three.`,
      },
      {
        p: `Take gloves off before you open the bottle, and follow the label: {tip}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which is the layer cold, moving air works against.`,
      },
      { h: 'Keeping the bottle from freezing' },
      {
        p: `A bottle in an outer coat pocket, a car door or a bike bag on a freezing day can fall far below the label’s range of {storage}. Carry it in an inside pocket close to your body, or leave it at home or at your desk. If a bottle gets very cold, let it come back to room temperature and look at it before use. If it looks different from usual, don’t use it. The label’s Do not use line reads: {doNotUse}.`,
      },
      { h: 'When cold isn’t the explanation' },
      {
        p: `If your eyes stay uncomfortable well after you’re warm and indoors, cold air may not be the reason. The label’s stop-use line applies: {stopUse} The [self-check](/self-check) can help you describe what you’re noticing to an eye doctor. It is not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Why do my eyes get dry in cold weather?',
        a: `Cold outdoor air holds little moisture, and wind moves it across the eye, so the tear film evaporates faster between blinks. Indoor heating on the same days adds to it.`,
      },
      {
        q: 'Why do my eyes water in the cold?',
        a: `Cold wind irritates the surface of the eye, and a rush of watery tears can follow. Those tears tend to spill rather than spread evenly, so eyes can feel dry again once you’re indoors.`,
      },
      {
        q: 'How do I protect my eyes from cold wind?',
        a: `Wraparound sunglasses or clear wraparound glasses block wind from the front and sides. A brimmed hat or hood helps too, and turning your back to the wind while you wait gives your eyes a break.`,
      },
      {
        q: 'Can eye drops freeze in a coat pocket?',
        a: `A bottle in an outer pocket on a freezing day can drop far below the label’s storage range of {storage}. Keep it in an inside pocket, and let a chilled bottle warm up and check it before use.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-from-a-space-heater',
    title: 'Dry eyes from a space heater',
    description:
      'A space heater aimed at your face dries the air you breathe and blink in. Where to place it, bedroom habits, and keeping your eye drops away from it.',
    category: 'seasonal',
    addedOn: '2026-11-11',
    body: [
      {
        p: `A space heater can dry your eyes because it warms air without adding moisture, and many push that warm, drier air straight at you. When the stream reaches face level, it speeds evaporation from the tear film. Aiming the heater at your feet or legs, moving it a few feet away, adding humidity to the room and keeping your eye drops well clear of it all help.`,
      },
      { h: 'Dry eyes due to a heater: what’s happening' },
      {
        p: `Warming air lowers its relative humidity unless water is added at the same time. A space heater does the warming without the water, so the air around it is drier than the rest of the room. Fan-forced heaters then blow that air in a stream, which works on your eyes the way a breeze does outdoors: it moves dry air across the eye’s surface between every blink.`,
      },
      {
        p: `The tear film is the part that loses out. It’s made of a mucus layer, a watery layer and a thin oil layer on top that slows evaporation. A steady stream of warm, dry air thins it faster than usual, and the eye can start to feel gritty, tired or tight within an hour or two.`,
      },
      { h: 'Placement: where the heater goes matters most' },
      {
        list: [
          `Aim it low. Pointing the heater at your feet and legs warms you without sending air past your face.`,
          `Put some distance in. A heater a few feet away, angled across the room, warms the space with far less airflow on your eyes than one right beside your chair.`,
          `Use oscillation thoughtfully. A heater that sweeps back and forth at head height sends a pulse of air at your face on every pass.`,
          `Check the manufacturer’s instructions for clearances. Distance from furniture, bedding and curtains is set by the maker for safety, and that comes before comfort.`,
        ],
      },
      { h: 'Airflow at face level' },
      {
        p: `A simple test: sit where you normally sit and hold the back of your hand in front of your eyes. If you can feel moving air there, so can your eyes. Lower the heater, turn it, or change the fan setting until the air at face height is still. A radiant or oil-filled heater that warms without a fan tends to move less air, though it still dries the room over time.`,
      },
      { h: 'Under-desk heaters and home offices' },
      {
        p: `Under-desk heaters are popular in cold home offices, and they’re usually low enough to keep air off the face. The trouble starts when the heater sits on the desk or a shelf and blows at you while you’re at a screen. Screen work already slows blinking, so dry air from the side plus fewer blinks hits the eye twice. Keep the heater at floor level and look away from the screen every so often; [screens and your tear film](/guides/screens-and-your-tear-film) has more on the blinking side.`,
      },
      { h: 'Running a space heater in the bedroom' },
      {
        p: `Bedrooms are where a heater runs longest with the door closed, so the air gets driest there. If you wake up with eyes that feel dry, look at where the heater points relative to the pillow. Aim it toward the foot of the bed or across the room, not at your head.`,
      },
      {
        list: [
          `Follow the maker’s instructions about running the heater while you sleep, timers and auto shut-off.`,
          `A humidifier in the same room adds back what the heater takes away. [Does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) covers the humidity range EPA recommends.`,
          `A small hygrometer on the nightstand shows whether the room is getting too dry.`,
          `A heater on a timer that stops before morning lets the air recover a bit before you wake.`,
        ],
      },
      { h: 'Keep the bottle away from the heater' },
      {
        p: `Eye drops have a storage range printed on the label. Quell’s reads: {storage}. A bottle on the desk next to the heater, on the floor in its path or on top of it can warm far past the top of that range. Keep it in a drawer or on a shelf on the other side of the room, out of the heater’s airflow and out of reach of children. The storage line sits under Other information on the [Drug Facts](/drug-facts) page.`,
      },
      {
        p: `If a bottle has been sitting near the heat, look at it before using it. {appearance} The label’s Do not use line is clear: {doNotUse}.`,
      },
      { h: 'Using drops when the heater’s on' },
      {
        p: `The label’s directions don’t change in winter: {directions}. On heater days, saving one drop for after you’ve been sitting near it for a while, rather than using all three early in the day, matches the drop to the drier air. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, the layer that slows evaporation in warm, dry air. Keep the tip clean: {tip}.`,
      },
      {
        p: `If your eyes stay uncomfortable even with the heater moved and the room more humid, something else may be going on. The label sets the line: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'Can a space heater cause dry eyes?',
        a: `It can make eyes feel dry. A space heater warms air without adding moisture, and a fan-forced one blows that drier air across your face, speeding evaporation from the tear film.`,
      },
      {
        q: 'Where should I put a space heater so it doesn’t dry my eyes?',
        a: `Low and a few feet away, aimed at your feet or legs rather than your face, while keeping the clearances the manufacturer specifies. If you can feel air moving in front of your eyes, adjust it.`,
      },
      {
        q: 'Is it bad to sleep with a space heater on for your eyes?',
        a: `A heater aimed at your pillow dries the air you sleep in. Point it away from the bed, add a humidifier, and follow the maker’s instructions for use while you sleep.`,
      },
      {
        q: 'Can I keep eye drops near a heater?',
        a: `No. A bottle beside or in front of a heater can warm past the label’s range of {storage}. Keep it in a drawer or across the room.`,
      },
    ],
  },

  {
    slug: 'does-a-humidifier-help-dry-eyes',
    title: 'Does a humidifier help dry eyes?',
    description:
      'A humidifier can ease dry eyes caused by dry indoor air. The EPA’s 30 to 50 percent humidity range, how to measure it, and keeping the machine clean.',
    category: 'using',
    addedOn: '2026-11-11',
    body: [
      {
        p: `A humidifier can help when dry indoor air is part of why your eyes feel dry. Moister air slows evaporation from the tear film between blinks. The EPA recommends keeping indoor humidity between 30 and 50 percent, so measure the room with a hygrometer, run the humidifier until you’re in that range, and clean it as its maker directs.`,
      },
      { h: 'Can low humidity cause dry eyes?' },
      {
        p: `Low humidity makes it easier for eyes to feel dry. The tear film covering the eye has three layers: mucus against the surface, water in the middle and a thin oil layer on top. Between blinks, water evaporates from it. The drier the air, the faster that happens, so in a room at low humidity the film can thin out before the next blink restores it.`,
      },
      {
        p: `Low humidity isn’t the only reason eyes feel dry, and a humidifier won’t change the others, such as long screen sessions that cut down your blink rate. It deals with one part of the picture: the air.`,
      },
      { h: 'Dry eyes humidity level: what to aim for' },
      {
        p: `The U.S. Environmental Protection Agency’s guide to indoor air quality, “Care for Your Air,” says to keep indoor humidity between 30 and 50 percent. The EPA’s mold guidance gives the same 30 to 50 percent as the ideal and says to keep humidity below 60 percent if possible, because high humidity raises the chance of mold.`,
      },
      {
        p: `That gives you a target from both directions. Below 30 percent, the air is dry enough that you may feel it in your eyes, nose and skin. Above 50 percent, you start trading eye comfort for damp problems in the house. More moisture isn’t always better.`,
      },
      { h: 'Measuring it with a hygrometer' },
      {
        p: `The EPA suggests a moisture or humidity gauge, available at most hardware stores, to see where your home stands. These hygrometers are small and inexpensive. Put one in the room where you spend the most time, away from the humidifier’s mist, and check it at different times of day.`,
      },
      {
        list: [
          `Read it first thing in the morning, before the humidifier has run, to see your baseline.`,
          `Read it again after the humidifier has been on for an hour or two.`,
          `Check on a cold, windy day and on a mild one; outdoor weather changes indoor readings.`,
          `If the reading climbs past 50 percent, turn the humidifier down or off for a while.`,
        ],
      },
      { h: 'Does humidity make your eyes dry?' },
      {
        p: `High humidity doesn’t dry the eyes; it slows evaporation. But very humid rooms bring their own problems for the house, and a humidifier pointed straight at your face can feel cold and damp rather than soothing. Set it a few feet away, with the mist directed into the room rather than at you.`,
      },
      { h: 'Where a humidifier helps most' },
      {
        list: [
          `The bedroom, where you spend hours with the door shut and furnace air building up.`,
          `A home office, especially with a space heater in it.`,
          `Any room where the hygrometer reads below 30 percent in winter.`,
        ],
      },
      {
        p: `Heated air is the usual culprit in winter; [winter heating and dry eyes](/guides/winter-heating-and-dry-eyes) covers the furnace side, and [dry eyes from a space heater](/guides/dry-eyes-from-a-space-heater) covers portable heaters.`,
      },
      { h: 'Keeping the humidifier clean' },
      {
        p: `A humidifier holds standing water, so cleaning matters. Follow the manufacturer’s instructions for how often to empty, rinse and disinfect the tank, what kind of water to use, and when to replace any filter or wick. Don’t leave water sitting in the tank for days, and dry the parts before storing it at the end of the season.`,
      },
      { h: 'Where eye drops fit alongside it' },
      {
        p: `A humidifier changes the air; a lubricating drop works on the eye itself. Quell’s Uses section reads: {uses}. The directions are {directions}. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss, which works alongside moister air rather than replacing it.`,
      },
      {
        p: `Keep the bottle out of the humidifier’s path, too. Damp air won’t matter to a closed bottle, but the tip should stay clean: {tip}. Store it in its range, {storage}. The full label is on the [Drug Facts](/drug-facts) page.`,
      },
      { h: 'If the air isn’t the answer' },
      {
        p: `If your eyes still feel dry with the room in the 30 to 50 percent range, the air probably isn’t the whole story. The label says when to stop and see a doctor: {stopUse}`,
      },
    ],
    faq: [
      {
        q: 'What humidity level is good for dry eyes?',
        a: `The EPA recommends keeping indoor humidity between 30 and 50 percent. That range keeps the air from being so dry that eyes feel it, without raising the risk of mold that comes with higher humidity.`,
      },
      {
        q: 'Can low humidity cause dry eyes?',
        a: `Low humidity makes the tear film evaporate faster between blinks, so eyes are more likely to feel dry. It’s one factor among several, alongside things like screen time and wind.`,
      },
      {
        q: 'Should I sleep with a humidifier for dry eyes?',
        a: `Many people run one in the bedroom, where heated air builds up with the door closed. Use a hygrometer to keep the room in the EPA’s 30 to 50 percent range and clean the humidifier as its maker says.`,
      },
      {
        q: 'How do I know if my room is too dry?',
        a: `Use a hygrometer, a small humidity gauge the EPA notes is sold at most hardware stores. A reading below 30 percent is below the EPA’s recommended range.`,
      },
    ],
  },

  {
    slug: 'dry-eyes-from-cpap',
    title: 'Dry eyes from a CPAP mask',
    description:
      'Waking with dry eyes on CPAP? Air escaping at the top of a mask can blow across your eyes as you sleep. What to check, and who to ask about the fit.',
    category: 'using',
    addedOn: '2026-11-11',
    body: [
      {
        p: `CPAP can leave eyes feeling dry when air escapes from the top edge of the mask and blows across your eyes while you sleep. A steady stream of air for hours dries the tear film, and your eyes are closed or nearly closed, so you don’t notice until morning. Mask fit is a question for the doctor or sleep provider who set up your machine; an eye drop’s label doesn’t cover CPAP use.`,
      },
      { h: 'Dry eyes from a CPAP mask: why it happens' },
      {
        p: `A CPAP machine pushes air through a hose into a mask at steady pressure. The air is meant to go into your nose or mouth. When the seal isn’t complete, some of it finds the easiest way out, and on many masks the easiest way out is along the bridge of the nose, right below the eyes.`,
      },
      {
        p: `That leak is a small, constant breeze aimed at the eye for as long as you sleep. The tear film has a watery layer under a thin oily layer that slows evaporation, and moving air speeds it up. Eyelids don’t always close completely during sleep, either, so some of the eye’s surface can be exposed to that airflow. The result can be eyes that feel gritty, dry or tired on waking.`,
      },
      { h: 'Waking up with dry eyes on CPAP: signs it’s the mask' },
      {
        list: [
          `Your eyes feel dry in the morning but improve as the day goes on.`,
          `One eye is worse than the other, often on the side you sleep on.`,
          `You or a partner notice air hissing or a draft near your eyes at night.`,
          `The dryness started around when you began CPAP, changed masks or changed cushion sizes.`,
          `Pressure lines on the bridge of your nose shift from night to night.`,
        ],
      },
      {
        p: `None of these proves the cause, but they’re worth noting down before you talk to your provider. A short log of which nights felt worse helps; [keeping a simple eye drop log](/guides/keeping-an-eye-drop-log) has a format you can borrow.`,
      },
      { h: 'Who to ask about mask fit' },
      {
        p: `The mask, its size, its cushion and the machine’s settings were chosen by the doctor who prescribed the machine and the sleep provider or equipment supplier who fitted it. They’re the right people to look at a leak. Mask style, cushion size and machine settings are part of the therapy, so changing them on your own isn’t something an eye drop guide should advise.`,
      },
      {
        p: `When you call, be specific. Say that you think air is escaping toward your eyes, describe which side and when you notice it, and mention any change in mask or equipment. Many machines record data about leaks, so your provider may be able to see it on their end.`,
      },
      { h: 'The bedroom air still matters' },
      {
        p: `Separate from the mask, the room you sleep in affects how dry your eyes feel. Furnace heat in winter or air conditioning in summer dries the air further. A humidifier in the bedroom, kept in the EPA’s recommended range of 30 to 50 percent, helps the room; [does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) explains the details. A space heater aimed at the bed adds to the problem, so point it away.`,
      },
      { h: 'Using eye drops when you’re on CPAP' },
      {
        p: `Quell’s label doesn’t mention CPAP. Its directions are the same for everyone: {directions}. Its Uses section reads: {uses}. If you’re thinking about timing a drop around putting on the mask or taking it off, ask the doctor who manages your CPAP or your eye doctor how that fits with your therapy; the label doesn’t address it.`,
      },
      {
        p: `Within the label’s directions, many people place their three drops across the day, with one in the morning after they’ve taken the mask off and are up. Quell is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Follow the label’s handling line every time: {tip}.`,
      },
      { h: 'Keeping the bottle on your nightstand' },
      {
        p: `If you keep the bottle by the bed, keep it within the label’s range, {storage}, and away from the CPAP machine’s heated humidifier if yours has one, a space heater or a sunny windowsill. Put it where you won’t knock it off reaching for the mask in the dark, and out of reach of children and pets. If it looks different from usual, check the label’s Do not use line: {doNotUse}.`,
      },
      { h: 'When to see a doctor' },
      {
        p: `Eyes that feel dry after a night of air blowing on them are one thing. Pain, changes in vision or discomfort that doesn’t ease during the day are another. The label is plain about it: {stopUse} Tell your eye doctor you use CPAP; it’s useful context for them. The [questions to ask your eye doctor](/guides/questions-to-ask-your-eye-doctor) guide can help you prepare.`,
      },
    ],
    faq: [
      {
        q: 'Can a CPAP mask cause dry eyes?',
        a: `It can contribute. If air escapes from the top of the mask, it can blow across your eyes for hours while you sleep and dry the tear film. Ask the doctor or sleep provider who fitted the mask to check for a leak.`,
      },
      {
        q: 'Why do I wake up with dry eyes since starting CPAP?',
        a: `One possible reason is air leaking from the mask toward your eyes. Note when and on which side it happens, and tell the doctor who prescribed your machine or your sleep provider.`,
      },
      {
        q: 'Can I use eye drops with CPAP?',
        a: `Quell’s label doesn’t address CPAP use. Its directions are {directions}. Ask the doctor who manages your CPAP or your eye doctor how to fit drops around your therapy.`,
      },
      {
        q: 'Who do I call about a CPAP mask leaking into my eyes?',
        a: `The doctor who prescribed the machine or the sleep provider or equipment supplier who fitted the mask. Mask size, style and settings are part of the therapy, so they should make any change.`,
      },
    ],
  },

  {
    slug: 'is-it-okay-to-use-eye-drops-every-day',
    title: 'Is it okay to use eye drops every day?',
    description:
      'Quell’s label directs use every day: one drop three times a day in each eye. What the label says about daily use, when to stop, and what it leaves to a doctor.',
    category: 'using',
    addedOn: '2026-11-11',
    body: [
      {
        p: `For Quell, daily use is what the label describes. Its directions are: {directions}. That’s an everyday schedule, not an occasional one. The label sets one limit on how long to keep going without help: stop and ask a doctor if you have eye pain, vision changes, irritation that continues, or symptoms that worsen or last more than 72 hours.`,
      },
      { h: 'What the label says about daily use' },
      {
        p: `Over-the-counter drugs carry their directions on the Drug Facts panel, and those directions are the instructions for using the product without a doctor’s order. Quell’s say {directions}. There’s no line limiting it to a certain number of days, and no instruction to take breaks. Used as directed, every day is the intended pattern.`,
      },
      {
        p: `“Three times per day in each eye” works out to six drops a day across both eyes. At that rate, one {size} bottle runs about a month, which is why many people keep a spare; [how long does a bottle of eye drops last?](/guides/how-long-does-a-bottle-of-eye-drops-last) works through the math.`,
      },
      { h: 'Why preservative-free matters for an everyday drop' },
      {
        p: `When a drop goes in six times a day, every ingredient gets that many exposures. Quell has no preservative. Its inactive ingredients are {inactives}, and its actives are {actives}. You can read the full list on the [Drug Facts](/drug-facts) page and take it to a pharmacist if you have questions about any of them.`,
      },
      { h: 'The stop-use rule' },
      {
        p: `Daily use doesn’t mean using it no matter what. The label lists exactly when to stop: {stopUse}`,
      },
      {
        p: `The 72-hour part is the one people most often miss. If your eyes haven’t settled after three days, or they’re getting worse, the label wants a doctor involved rather than more drops. [Why the label mentions 72 hours](/guides/why-the-label-mentions-72-hours) explains that line in more detail.`,
      },
      { h: 'Using it more or less than three times' },
      {
        p: `More is not on the label. If three drops a day aren’t enough to keep you comfortable, that’s worth raising with an eye doctor rather than adding a fourth or fifth on your own; [can I use more than three drops a day?](/guides/can-i-use-more-than-three-drops-a-day) covers it.`,
      },
      {
        p: `Fewer is a gray area the label doesn’t address. Some people find they reach for a drop mainly on dry or windy days. The label gives one schedule, so if you’re thinking about using it differently, ask your pharmacist or eye doctor how they’d approach it for you.`,
      },
      { h: 'What the label leaves to a doctor' },
      {
        list: [
          `Contact lenses: the label doesn’t give directions for using Quell with lenses in. Ask your eye doctor.`,
          `Other eye drops: if you use prescription or other over-the-counter drops, the label doesn’t cover combining them. Ask your eye doctor or pharmacist about order and timing.`,
          `Children: there are no separate directions for children. A pediatrician or eye doctor should decide.`,
          `Months or years of use: the label doesn’t set a long-term limit, but if you’ve needed drops every day for a long time, an eye exam is a reasonable step to understand why.`,
          `Allergies: the label cautions, {warnings}. If that applies to you, talk to a doctor first.`,
        ],
      },
      { h: 'Good habits for an everyday drop' },
      {
        list: [
          `Wash your hands before each use.`,
          `Follow the label’s handling line: {tip}.`,
          `Look at the drop before you use it. {milky}, and the label’s Do not use line reads: {doNotUse}.`,
          `Store the bottle {storage}, and close it after each use.`,
          `Tie the three drops to fixed points in the day, such as breakfast, lunch and dinner, so none get skipped or doubled.`,
        ],
      },
      { h: 'If daily drops feel like a lot' },
      {
        p: `Needing drops every day often comes down to your surroundings: screens, heated or air-conditioned rooms, wind, or a dry climate. Changes there can help alongside the drop. [Screens and your tear film](/guides/screens-and-your-tear-film) and [does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) cover two common causes. If you’d like to put what you’re noticing into words before seeing a doctor, the [self-check](/self-check) is a place to start; it is not a diagnosis.`,
      },
    ],
    faq: [
      {
        q: 'Can you use lubricating eye drops every day?',
        a: `Quell’s label directs daily use: {directions}. It doesn’t limit the number of days, but says to stop and ask a doctor if symptoms worsen or persist for 72 hours, or with eye pain or vision changes.`,
      },
      {
        q: 'Is it bad to use eye drops every day?',
        a: `Not when the label calls for it. Quell’s directions are an everyday schedule. If you’ve needed drops daily for a long time, an eye doctor can help work out why.`,
      },
      {
        q: 'How many times a day can you use Quell?',
        a: `The label says {directions}. Using more than that isn’t covered by the label, so ask an eye doctor if three times a day doesn’t feel like enough.`,
      },
      {
        q: 'How long can you use eye drops before seeing a doctor?',
        a: `Quell’s label says to stop use and ask a doctor if the condition worsens or persists for 72 hours, or right away for eye pain, vision changes, or irritation that continues.`,
      },
    ],
  },

  {
    slug: 'can-you-use-eye-drops-before-bed',
    title: 'Can you use eye drops before bed?',
    description:
      'Yes. Quell’s label calls for a drop three times a day, and bedtime can be one of them. How to space them, and what the label leaves to a doctor.',
    category: 'using',
    addedOn: '2026-11-11',
    body: [
      {
        p: `Yes. Quell’s label says {directions}, and it doesn’t say when in the day those three drops go, so bedtime can be one of them. Many people space the drops through the day, with the last one just before sleep. The label doesn’t give separate instructions for use while you sleep, so for anything beyond that, ask your eye doctor.`,
      },
      { h: 'Making bedtime one of your three drops' },
      {
        p: `Three times a day breaks naturally into morning, midday and evening. Moving the evening drop to the moment you turn out the light changes nothing about the dose. It just ties it to a habit you already have, which makes it hard to forget.`,
      },
      {
        list: [
          `Morning: after you’re up and have washed your face.`,
          `Midday: at lunch, or at the halfway point of a work shift.`,
          `Bedtime: after brushing your teeth, as the last thing before lights out.`,
        ],
      },
      {
        p: `If you work nights, the same pattern applies to your own day. “Before bed” is whenever you go to sleep, whether that’s 10 p.m. or 9 a.m.`,
      },
      { h: 'Spacing the drops through the day' },
      {
        p: `Bunching all three drops close together leaves long gaps with nothing in between. Spreading them out means each one meets a different part of the day: the morning commute, afternoon screen time, the heated house in the evening. Roughly even gaps across your waking hours is a sensible way to read “3 times per day,” though the label doesn’t specify hours.`,
      },
      { h: 'Why a bedtime drop appeals to people' },
      {
        p: `The hours before sleep are often when eyes feel driest. You’ve had a full day of screens, the heat or air conditioning has been running, and evening reading or phone time keeps blink rates down. A drop at that point fits the label and matches when people tend to notice dryness most.`,
      },
      {
        p: `Bedroom air plays a part, too. A dry bedroom with the furnace on or a space heater running can make eyes feel worse by morning; [does a humidifier help dry eyes?](/guides/does-a-humidifier-help-dry-eyes) covers the humidity side, and [dry eyes from a CPAP mask](/guides/dry-eyes-from-cpap) covers air leaks for people on CPAP.`,
      },
      { h: 'How to put a drop in at bedtime' },
      {
        list: [
          `Wash your hands. Bedtime routines can be rushed, but clean hands matter more than speed.`,
          `Check the bottle: {milky}. The label’s Do not use line reads: {doNotUse}.`,
          `Tilt your head back, or lie back on the bed, and look up.`,
          `Gently pull down your lower lid to make a small pocket.`,
          `Squeeze one drop into the pocket, without the tip touching your eye, lashes or fingers. The label says: {tip}.`,
          `Close your eyes gently for a moment, then repeat in the other eye.`,
          `Cap the bottle right away and put it back in its usual place.`,
        ],
      },
      { h: 'What the label doesn’t cover about nighttime' },
      {
        p: `Quell’s label gives one set of directions and no separate guidance about sleep, eye masks or night-time products. If you use another eye product at night, such as a prescription drop, the label doesn’t cover combining them; ask your eye doctor or pharmacist about the order and spacing. The same goes for contact lenses: the label doesn’t give directions for using Quell with lenses, so ask your eye doctor how drops and lenses fit together for you.`,
      },
      {
        p: `If you wake up with eyes that feel dry or uncomfortable night after night, mention that pattern to your eye doctor. It’s useful information on its own.`,
      },
      { h: 'Where to keep the bottle by the bed' },
      {
        p: `A nightstand drawer works well, as long as the room stays in the label’s range: {storage}. Keep it away from a radiator, a space heater or a sunny window, and out of reach of children; the label adds, {swallowed}. If you’d rather keep it next to your toothbrush, think about the bathroom itself: a hot shower can leave the room warm and steamy, and a medicine cabinet above a sink stays cooler than a shelf beside the shower. Either way, close the cap fully before you put it down.`,
      },
      { h: 'When to stop' },
      {
        p: `A bedtime drop is still subject to the same limits as any other. The label says: {stopUse} The full panel is on the [Drug Facts](/drug-facts) page.`,
      },
    ],
    faq: [
      {
        q: 'Is it okay to put eye drops in before bed?',
        a: `Yes. Quell’s directions are {directions}, and bedtime can be one of those three. The label doesn’t give separate directions for use while you sleep, so ask your eye doctor about anything beyond that.`,
      },
      {
        q: 'What time of day should I use eye drops?',
        a: `The label says three times per day but doesn’t name times. Spacing them roughly evenly, such as morning, midday and bedtime, means each drop covers a different part of the day.`,
      },
      {
        q: 'Should I use eye drops at night or in the morning?',
        a: `Within Quell’s directions you can do both: one drop in the morning, one midday and one at night still adds up to the labeled three times per day.`,
      },
      {
        q: 'Can I use Quell with a nighttime eye ointment?',
        a: `Quell’s label doesn’t cover using it with other eye products. Ask your eye doctor or pharmacist about the order and spacing before combining them.`,
      },
    ],
  },

  {
    slug: 'what-does-protectant-mean-on-eye-drops',
    title: 'What does “protectant” mean on eye drops?',
    description:
      '“Protectant” comes from the FDA’s rules for over-the-counter eye drops. Where the word comes from, what Quell’s Uses line says, and what it doesn’t claim.',
    category: 'label',
    addedOn: '2026-11-11',
    body: [
      {
        p: `On an eye drop label, “protectant” describes the drop’s role in shielding the surface of an eye that’s already irritated. The word comes from FDA’s rules for over-the-counter eye drops, 21 CFR part 349, which list approved Uses statements. Quell’s reads: {uses}. It describes a supportive role on the eye’s surface, not a fix for whatever caused the irritation.`,
      },
      { h: 'Where the word comes from' },
      {
        p: `Over-the-counter drugs in the United States are mostly sold under monographs: rules that set out which active ingredients a category may use, in what amounts, and what the label may say. Eye drops fall under the ophthalmic monograph in Title 21 of the Code of Federal Regulations, part 349, “Ophthalmic Drug Products for Over-the-Counter Human Use.” Its definitions section, 349.3, describes an ophthalmic drug product as one applied to the eyelid or put into the eye, and says it should be sterile. Everything else in the part builds on that starting point.`,
      },
      {
        p: `Part 349 lists the categories of active ingredient it covers: astringents, demulcents, emollients, a hypertonicity agent, vasoconstrictors and eyewashes. Each category gets its own labeling section. For demulcents, section 349.60, and for emollients, section 349.65, the regulation gives four permitted indication statements. One of them is, word for word, the Uses line on Quell’s carton.`,
      },
      { h: 'Quell’s Uses line, read closely' },
      {
        p: `{uses}. The sentence has two halves joined by “or,” and they say different things.`,
      },
      {
        list: [
          `“For use as a protectant against further irritation” is about an eye that’s already irritated. The word “further” matters: the drop’s role is to shield the surface from more of it, not to undo what’s already there.`,
          `“To relieve dryness of the eye” is a relief statement about dryness.`,
        ],
      },
      {
        p: `Those words were written into federal regulation, which is why they appear on more than one product. A drop using this wording is telling you it belongs to the demulcent and emollient categories of the monograph. [The Uses section on an eye drop label](/guides/the-uses-section) covers that part of the panel more broadly.`,
      },
      { h: 'What “protectant” doesn’t mean' },
      {
        list: [
          `It isn’t a promise about any particular cause of irritation. The Uses line doesn’t name causes.`,
          `It isn’t a shield against wind, smoke or allergens in the air. It’s about the eye’s surface.`,
          `It doesn’t mean the drop replaces seeing a doctor. The label’s stop-use line still applies.`,
          `It doesn’t speak to contact lenses, children or use with other drops; the label gives no directions for those.`,
        ],
      },
      { h: 'How a lubricant can protect' },
      {
        p: `Part 349 defines a demulcent as an agent applied to the eye “to protect and lubricate mucous membrane surfaces and relieve dryness and irritation.” It describes an emollient, usually a fat or oil, as an agent used “to protect or soften tissues.” In both definitions, protection comes from coating and lubricating: a layer between the eye’s surface and whatever is irritating it.`,
      },
      {
        p: `That fits Quell’s design. It is designed to reinforce the tear film’s oil layer to help reduce moisture loss. Its actives are {actives}; the label lists the first two with the purpose “lubricant” and the mineral oil as an emollient. [What is a demulcent in eye drops?](/guides/what-is-a-demulcent-in-eye-drops) goes into the ingredient side.`,
      },
      { h: 'Other wordings you might see on eye drops' },
      {
        p: `The same regulation allows a few other indication statements for these categories, such as relief of burning and irritation due to dryness, or of discomfort from minor irritations or exposure to wind or sun. Different products pick different ones. Comparing the Uses lines on two boxes tells you which permitted claim each maker chose, and nothing beyond it.`,
      },
      { h: 'Why the exact wording matters' },
      {
        p: `Because the Uses statement comes from federal regulation, it is the most reliable description of what an over-the-counter eye drop is for. Marketing copy can be broader; the Uses line can’t. When a website or ad seems to promise more than the Uses line, trust the label. Quell’s full panel is on the [Drug Facts](/drug-facts) page.`,
      },
      { h: 'When protection isn’t enough' },
      {
        p: `If irritation keeps coming back, or a drop doesn’t seem to be doing its job, the label says to stop and get help: {stopUse} The [eye symptoms that need a doctor](/guides/eye-symptoms-that-need-a-doctor) guide lists warning signs worth knowing.`,
      },
    ],
    faq: [
      {
        q: 'What does protectant mean on eye drops?',
        a: `It means the drop is meant to shield the surface of an already irritated eye from further irritation. The wording comes from FDA’s over-the-counter ophthalmic rules in 21 CFR part 349.`,
      },
      {
        q: 'What does “protectant against further irritation” mean?',
        a: `“Further” is the key word: the drop’s stated role is to protect an irritated eye’s surface from more irritation. It doesn’t claim to address what caused the irritation in the first place.`,
      },
      {
        q: 'Where does the Uses wording on eye drops come from?',
        a: `For lubricating eye drops, it comes from FDA’s ophthalmic monograph, 21 CFR part 349, which lists permitted indication statements for demulcents and emollients in sections 349.60 and 349.65.`,
      },
      {
        q: 'Is a protectant eye drop the same as a lubricant?',
        a: `They overlap. The regulation defines demulcents as agents that protect and lubricate the eye’s surface, so a lubricating drop can be labeled as a protectant against further irritation.`,
      },
    ],
  },

  {
    slug: 'what-is-a-demulcent-in-eye-drops',
    title: 'What is a demulcent in eye drops?',
    description:
      'A demulcent is the regulatory term for a lubricating ingredient in eye drops. How FDA defines it, which ingredients qualify, and where Quell’s fit.',
    category: 'label',
    addedOn: '2026-11-11',
    body: [
      {
        p: `A demulcent is a lubricating ingredient in an eye drop. FDA’s over-the-counter ophthalmic rules, 21 CFR 349.3, define it as an agent, usually a water-soluble polymer, applied to the eye to protect and lubricate its surface and relieve dryness and irritation. Section 349.12 lists the approved ones, including glycerin and polysorbate 80, two of Quell’s three actives.`,
      },
      { h: 'The definition in the regulation' },
      {
        p: `The rules for over-the-counter eye drops are in Title 21 of the Code of Federal Regulations, part 349. Section 349.3 holds the definitions. It describes a demulcent as “an agent, usually a water-soluble polymer, which is applied topically to the eye” to “protect and lubricate mucous membrane surfaces and relieve dryness and irritation.”`,
      },
      {
        p: `In plain terms, a demulcent is a soothing, slippery ingredient that sits on the eye’s surface. On a Drug Facts panel, the purpose column usually says “lubricant” rather than “demulcent,” because that’s the word most people know.`,
      },
      { h: 'Which ingredients count as demulcents' },
      {
        p: `Section 349.12, “Ophthalmic demulcents,” lists the active ingredients a lubricating eye drop may use under the monograph, each with its own allowed concentration range. They fall into a few groups:`,
      },
      {
        list: [
          `Cellulose derivatives: carboxymethylcellulose sodium, hydroxyethyl cellulose, hypromellose and methylcellulose.`,
          `Dextran 70, allowed only together with another polymer demulcent.`,
          `Gelatin.`,
          `Liquid polyols: glycerin, polyethylene glycol 300, polyethylene glycol 400, polysorbate 80 and propylene glycol.`,
          `Polyvinyl alcohol.`,
          `Povidone.`,
        ],
      },
      {
        p: `If you turn over a box of lubricating eye drops and read the active ingredients, you’ll almost always find something from this list.`,
      },
      { h: 'Quell’s demulcents' },
      {
        p: `Two of Quell’s actives come from the liquid polyols group: {glycerol} and {polysorbate}. Glycerol is another name for glycerin, the name the regulation uses. Quell’s label gives both the purpose “lubricant.” [Glycerol in eye drops](/guides/glycerol-in-eye-drops) and [polysorbate 80 in eye drops](/guides/polysorbate-80-in-eye-drops) cover each one.`,
      },
      { h: 'Demulcent vs. emollient' },
      {
        p: `The third active in Quell, {mineralOil}, isn’t a demulcent. It falls under a separate section, 349.14, “Ophthalmic emollients.” Section 349.3 describes an emollient as an agent, “usually a fat or oil,” used “to protect or soften tissues.” Light mineral oil appears in 349.14’s list of oleaginous, or oily, ingredients, alongside mineral oil, paraffin, petrolatum and waxes. Lanolin preparations make up the other emollient group.`,
      },
      {
        p: `So a lubricating eye drop can carry two kinds of ingredient: water-friendly demulcents and oily emollients. Quell carries both, which suits its design: it is designed to reinforce the tear film’s oil layer to help reduce moisture loss, and the tear film itself has a watery layer under an oily one.`,
      },
      { h: 'Why demulcents are active ingredients' },
      {
        p: `On a Drug Facts panel, an ingredient listed under Active ingredients is one that does the drug’s stated job. For a lubricating eye drop, the demulcents and emollients are that job. Everything else is listed under Inactive ingredients; Quell’s are {inactives}. [The active ingredients section](/guides/the-active-ingredients-section) explains how that part of the label is laid out.`,
      },
      { h: 'What the Uses line says demulcents are for' },
      {
        p: `The monograph also sets the wording a demulcent product may use to describe its purpose, in section 349.60. Quell’s Uses line is one of those permitted statements: {uses}. [What does “protectant” mean on eye drops?](/guides/what-does-protectant-mean-on-eye-drops) unpacks that wording.`,
      },
      { h: 'Questions worth asking a pharmacist' },
      {
        list: [
          `Which demulcent is in each drop I’m comparing, and does the difference matter for me?`,
          `Does this drop also contain an emollient, and what does that add?`,
          `Is there anything in the inactive ingredients I should watch for, given my allergies?`,
          `How should I space this drop around any other eye products I use?`,
        ],
      },
      {
        p: `A pharmacist can read a Drug Facts panel with you in a minute or two, and these questions turn a list of chemical names into something you can act on. Bring the bottle or a photo of the label so they can see the exact wording.`,
      },
      { h: 'Reading demulcents on any label' },
      {
        list: [
          `Look at the Active ingredients box first. Lubricating drops list their demulcents there, each with a concentration.`,
          `Compare concentrations only for the same ingredient; different demulcents work in different amounts.`,
          `Check whether the drop also lists an emollient, which tells you it includes an oily component.`,
          `Read the Inactive ingredients for preservatives if that matters to you. Quell has none.`,
        ],
      },
      {
        p: `If you have questions about whether a particular demulcent suits you, or how it fits with other drops you use, ask your pharmacist or eye doctor. Quell’s full panel is on the [Drug Facts](/drug-facts) page.`,
      },
    ],
    faq: [
      {
        q: 'What is a demulcent in eye drops?',
        a: `A lubricating active ingredient. FDA’s rules for over-the-counter eye drops, 21 CFR 349.3, define it as an agent, usually a water-soluble polymer, that protects and lubricates the eye’s surface and relieves dryness and irritation.`,
      },
      {
        q: 'Is glycerin a demulcent?',
        a: `Yes. Glycerin is listed among the liquid polyol demulcents in 21 CFR 349.12. Quell lists it as glycerol, another name for the same substance, with the purpose “lubricant.”`,
      },
      {
        q: 'Is polysorbate 80 a demulcent?',
        a: `Yes. Polysorbate 80 is one of the liquid polyols listed as ophthalmic demulcents in 21 CFR 349.12, alongside glycerin, propylene glycol and two polyethylene glycols.`,
      },
      {
        q: 'What is the difference between a demulcent and an emollient?',
        a: `A demulcent is usually a water-soluble polymer that lubricates the eye’s surface. An emollient is usually a fat or oil. Quell has two demulcents and one emollient, light mineral oil.`,
      },
    ],
  },
]
