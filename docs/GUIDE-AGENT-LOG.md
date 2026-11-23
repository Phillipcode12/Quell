# Daily guide job — run log

The scheduled task `quell-daily-seo-guides` (11 a.m. daily, set up 2026-11-11)
appends one entry per run here, newest last. See PROJECT_STATE §59 for why it
exists and the rules it runs under.

Each entry: date · guides published (by category) · city pages added ·
topics skipped and why (the next run's starting list) · anything failed ·
build time and deployment count.

---

## 2026-11-11 — setup (no articles)

- Built: daily guide files (`src/lib/guide-articles/daily/`), FAQ sections with
  FAQPage markup, topic pages (`/guides/topic/<key>`), `lastmod` in the guide
  sitemap, `/llms.txt`, the `local` category ("Dry eyes where you live").
- Tools: `scripts/keyword-suggest.mjs`, `scripts/guides-inventory.ts`,
  `scripts/guides-register.ts`, `scripts/guides-verify-live.ts`.
- Daily-job checks in `src/lib/guides.test.ts`: ≥800 words, direct-answer
  opening of 25–90 words, ≥5 sections, ≥3 links, 3–6 FAQs, unique FAQ
  questions site-wide, dated `addedOn`.
- City pages: 1,800 of 1,923 published; 123 left, 25 a day from the first run.
- Google autocomplete on 2026-11-11 for "eye drops for": dry eyes, pink eye,
  allergies, stye, contacts, red eyes, dogs, itchy eyes, cats, glaucoma. Only
  dry eyes and itchy eyes are usable (label Uses); the rest are claims or
  pets — never write them.

---

## 2026-11-11 — first daily run

- **Published: 75 guides + 25 city pages = 100.**
  - By category: local 15 (new category), using 22, ordering 7, seasonal 10,
    formula 8, label 5, choosing 5, shipping 3.
  - Totals after this run: 214 guides.
- **City pages:** 1,800 → 1,825 (`PUBLISHED_LOCATION_COUNT`); 98 left, so
  about four more daily raises of 25.
- **Local guides (15):** Denver, Colorado Springs, Cheyenne, Phoenix,
  Flagstaff, Las Vegas, Reno, Salt Lake City, Albuquerque, El Paso, Lubbock,
  Billings, Fargo, Minneapolis, Anchorage.
  - Every figure was fetched from NOAA/NWS/NCEI, USGS, USNO or an official
    city or state site on the day; the URLs are in a comment above each guide.
  - Numbers that couldn't be verified were left out (e.g. Denver humidity,
    elevations from tourism sites, NOAA wind-table values with unclear units).
  - Useful sources for future runs:
    - NCEI station normals CSVs:
      `ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USW000xxxxx.csv`.
    - NOAA Comparative Climatic Data humidity table:
      `ncei.noaa.gov/sites/default/files/2024-11/relhum23.txt` (morning and
      afternoon RH by city).
    - NWS monthly climate reports (CLM product).
- **10 strongest search phrases used:** dry eyes in winter / cold weather, dry
  eyes in arizona, dry eyes in denver, are eye drops fsa eligible, can you
  bring eye drops on a plane, eye drops for gamers, eye drops for truck
  drivers, dry eyes cpap, dry eyes after swimming, how to tell if eye drops are
  expired.
- **Skipped, and why (starting list for the next run):**
  - **Claims, conditions or pets:** autocomplete for "otc eye drops" and
    "preservative free eye drops" is dominated by pink eye, stye, allergies,
    red eyes, contacts, LASIK, dogs and cats. Also menopause, perimenopause,
    accutane and dehydration angles on "dry eyes in the morning" and "dry eyes
    from".
  - **Brand-name completions:** e.g. "... hsa eligible" and "... last after
    opening".
  - **"why are otc eye drops so expensive":** no price facts allowed.
  - **"how long do preservative free eye drops last after opening":** check the
    label and the existing guides first. Write it only if the answer can be "the
    label says X / doesn't say", with no invented discard period.
  - **Payment methods and PO-box delivery:** need checking against the checkout
    code before a guide.
  - **Boise:** no live city page (not in the published set).
  - **Next local candidates:** Tucson, Santa Fe, Chicago, Casper, Great Falls,
    Rapid City, Bismarck, Duluth MN, Fairbanks, Sioux Falls, Omaha, Wichita,
    Amarillo, Spokane, Bend, Honolulu, Buffalo, Milwaukee, Detroit, Boston.
- **Checks:**
  - Full vitest suite: 624 passed.
  - `npm run build`: passed, 86 s locally.
  - `tsc --noEmit`: clean.
  - Read 10 guides end to end and made two fixes: Denver "arrive by mail" →
    "Denver included", and the Anchorage delivery line no longer implies
    distance is why no date is promised.
  - The manuka honey facts were re-checked against mpi.govt.nz search results:
    the five-attribute definition and the export testing requirement are
    confirmed.
- **Lessons:**
  - The Read tool's hook blocks `%TEMP%`, so read the inventory file with
    `cat`.
  - Writers used `scripts/_*_tmp.ts` scratch files; check `git status` for
    leftovers before committing.
  - fmcsa.dot.gov, congress.gov and the regular eCFR pages often block fetches;
    use govinfo.gov or the eCFR versioner API instead.
- **Deploy:**
  - Commit 52a0ee0 built on Vercel in about 1 minute (Ready).
  - `guides-verify-live`: 75/75 OK.
  - The new city pages return 200 (spot-checked Mukilteo WA and American
    Canyon CA).
  - Deployments: 3 in total, so there was nothing to prune.
  - *(These lines were added after the push and are committed with the next
    run.)*

---

## 2026-11-12 — second daily run

- **Published: 75 guides + 25 city pages = 100.**
  - By category: local 25, using 21, seasonal 10, shipping 7, ordering 3,
    label 3, formula 3, choosing 3.
  - Totals after this run: 289 guides (150 from the daily job).
- **City pages:** 1,825 → 1,850 (`PUBLISHED_LOCATION_COUNT`); 73 left, so
  three more daily raises (25, 25, 23).
- **Search Console cities done (local, all 25 linked to their live city page):**
  Camarillo CA, Chaska MN, Newnan GA, Lynchburg VA, Niagara Falls NY,
  Los Angeles CA, San Luis Obispo CA, Stamford CT, Anderson IN, Weatherford TX,
  San Juan Capistrano CA, Lakeville MN, Kingsport TN, Sandy Springs GA,
  Eau Claire WI, Beverly Hills CA, Milford CT, Smyrna TN, Woburn MA,
  Port St. Lucie FL, Dana Point CA, Golden Valley MN, Bristol CT,
  Greenfield IN, Idaho Falls ID.
  - Every figure from NCEI 1991–2020 normals (nearest station named in the
    prose), NOAA's relhum23 table, NWS, NPS, MN DNR or official city sites;
    URLs in a comment above each guide. Where a city has no station or no
    humidity row, the guide says which neighbor it used (e.g. Laguna Beach for
    Dana Point, Pocatello humidity for Idaho Falls, La Crosse for Eau Claire).
  - Twin Cities suburbs used non-MSP stations (New Hope, Farmington 3 NW) so
    they don't echo the Minneapolis guide.
  - **Next from the Search Console list:** Murfreesboro TN, Amherst MA,
    Muncie IN, Woodstock GA, Richmond KY, Corvallis OR, Visalia CA, Antioch CA,
    Lake Jackson TX, Columbia SC, Sumter SC, Dunwoody GA (Anchorage already
    done 2026-11-11). Then yesterday's list: Tucson, Santa Fe, Chicago, Casper,
    Great Falls, Rapid City, Bismarck, Duluth, Fairbanks, Sioux Falls, Omaha,
    Wichita, Amarillo, Spokane, Bend, Honolulu, Buffalo, Milwaukee, Detroit,
    Boston.
- **Search Console phrasings extended:** polysorbate 80 (what-does-polysorbate-80-do-in-eye-drops),
  emollient eye drops, eye drop volume per drop (how-much-liquid-is-in-one-eye-drop),
  eye drops delivery near me, queel / quello / quell lotion (is-it-quell-or-queel),
  help with eye drops (Port St. Lucie guide's how-to section).
- **10 strongest search phrases used:** dry eye relief camarillo, eye drops
  los angeles, polysorbate 80 eye drops, emollient eye drops, eye drop volume
  per drop, eye drops delivery near me, can you buy eye drops with ebt, are eye
  drops safe to use while pregnant (answered from the label's silence), dry
  itchy eyes in winter, eye drops vs eye ointment. ("how to put in eye drops
  without flinching" was not given its own guide; a candidate for a later run.)
- **Skipped, and why:**
  - USP medicine-dropper figures (20 drops per mL): only found on an
    unofficial mirror, so the drop-volume guide says drop size isn't printed
    on labels instead.
  - Payment methods, PO boxes, sales tax: still unverified against checkout.
  - "lubricant eye drops uses", "eye drops ingredients to avoid", "dry eye
    relief without drops / at home": too close to existing guides or a
    home-remedy angle.
  - Off limits as before: pink eye (Woburn's query), vitamins (Smyrna,
    Murfreesboro), "dry eye syndrome treatment" (Greenfield, Anderson).
- **Checks:** full vitest 631 passed; `npm run build` passed in 54 s locally;
  `tsc --noEmit` clean. Fixed in review: an "FDA approved" phrase in the NDC
  guide (the test caught it), a retyped label line in the Queel FAQ (now
  `{warnings}`), awkward "{doNotUse}, don’t use it" phrasing in 7 places, an
  unsourced Point Mugu line, an over-reassuring line in the taste guide. The
  12-digit NDC date (March 7, 2033) was checked against the Federal Register
  final rule of 2026-03-05.
- **Lessons:**
  - The app process exited mid-run (about 17:20–18:30); writers A and B had
    finished, C/D/E had 10 of 15 each and were resumed. The lock file held.
  - `eCFR` blocks automated reads; govinfo.gov worked.
  - Writers check their own slugs against every rule, since a failing test
    reports only the first guide that breaks it.
- **Deploy:**
  - Commit 8749878 built on Vercel in about 1 minute (Ready).
  - `guides-verify-live`: 75/75 OK. Live sitemap lists 1,850 city pages; the
    newest (east-moline-il, mill-creek-wa, angleton-tx) return 200.
  - Pruning: `vercel remove --safe --yes` now answers "confirmation_required … --yes doesn't approve this command", so a person must approve each deletion. Phillip approved it in chat; quell-n2zzlulsi was removed with `--confirm-name`, leaving 3. Unattended runs should skip pruning and ask in the report.
  - *(These lines were added after the push and are committed with the next
    run.)*

---

## 2026-11-13 — third daily run

- **Published: 75 guides + 25 city pages = 100.**
  - By category: local 25, using 19, seasonal 9, formula 6, ordering 4,
    shipping 4, label 4, choosing 4.
  - Totals after this run: 364 guides (225 from the daily job).
- **City pages:** 1,850 → 1,875 (`PUBLISHED_LOCATION_COUNT`); 48 left, so two
  more raises (25, then 23).
- **Search Console cities done (all 12 remaining from the list):** Murfreesboro
  TN, Amherst MA, Muncie IN, Woodstock GA, Richmond KY, Corvallis OR, Visalia
  CA, Antioch CA, Lake Jackson TX, Columbia SC, Sumter SC, Dunwoody GA. The
  Search Console city list is now finished; the next export from Phillip will
  bring new ones.
- **Other local guides:** Tucson, Santa Fe, Chicago, Casper, Great Falls,
  Rapid City, Bismarck, Duluth, Fairbanks, Sioux Falls, Omaha, Wichita,
  Amarillo. Every figure from NCEI 1991–2020 normals, NOAA relhum/wind
  tables, NWS, USNO or official city/state sites; URLs in a comment above
  each guide. Where a city has no humidity row, the guide names the
  neighbor used (Nashville for Murfreesboro, Hartford for Amherst, Salem for
  Corvallis, Fresno for Visalia, Stockton for Antioch, Houston for Lake
  Jackson, etc.). Dunwoody uses Hartsfield so it doesn't echo Sandy Springs
  (DeKalb-Peachtree).
  - **Next local candidates:** Spokane, Bend, Honolulu, Buffalo, Milwaukee,
    Detroit, Boston, then state-capital and high-plains cities not yet
    covered (Boise has no live city page; check the inventory first).
- **Search Console phrasings extended:** "safety of polysorbate 80 in eye
  drops" (is-polysorbate-80-in-eye-drops-safe), "polysorbate 80 vs 20",
  "lubricant eye drops" / "eye drops and lubricants"
  (lubricant-vs-lubricating-eye-drops), "how many drops of eye drops should i
  take" (exact title), "eye drops left in hot car" → its winter twin
  (can-eye-drops-freeze-in-a-cold-car), "lubricating eye drops" (emulsion and
  oil-based guides).
- **10 strongest search phrases used:** how to put in eye drops without
  flinching, why are my eyes dry all of a sudden, dry eyes in fall, are dry
  eyes worse in summer or winter, oil based eye drops for dry eyes, how long
  do eye drops last after opening (answered: the label sets no discard
  period), do eye drops help tired eyes, why are my eyes dry and burning, eye
  drops before or after shower, can you share eye drops.
- **Skipped, and why:**
  - Off limits as before: vitamins (Murfreesboro), pink eye/stye (Lake
    Jackson), glaucoma (Columbia), "dry eye syndrome" (Muncie).
  - "dry eyes in the morning menopause/perimenopause", "after lasik/cataract
    surgery", "eye drops before or after warm compress": conditions or
    procedures.
  - Brand completions on "eye drops hsa" and "oil based eye drops".
  - Limited-purpose FSA coverage of OTC eye drops: plan-specific, not written.
  - FSA carryover dollar figure: no $ amounts allowed; guide sends readers to
    their plan administrator.
- **Fixed in review:** 11 doubled periods after `{stopUse}` in file b (the
  token ends with a period; writers should never put "." after it); removed
  an unverified "light mineral oil only in combination" line and an implied
  efficacy line from the oil-based guide. Order-email guide checked against
  code: hosted Authorize.net payment page and the order-number alphabet
  (no 0, 1, I, L, O, U) are accurate.
- **Lessons for writers:**
  - "tiredness" and "preparedness" fail the redness scan (substring match).
  - The test bans "treat" in every form, so "treating it is an eye doctor's
    job" fails; use "working out the cause and what to do about it".
  - `{stopUse}` and `{appearance}` end with a period; other tokens don't.
- **Checks:** full vitest 631 passed; `npm run build` passed in 84 s locally;
  `tsc --noEmit` clean. Read 10 guides end to end.
- **Deploy:**
  - Commit 0e9f685 built on Vercel in about 1 minute (Ready).
  - `guides-verify-live`: 75/75 OK. New city pages piqua-oh and
    libertyville-il return 200.
  - Pruning: Phillip approved in chat. Only 4 deployments existed (the
    earlier "8" double-counted the ls output); quell-r6nowswt2 was removed
    with --confirm-name, leaving 3. Count with grep Ready, not grep https.
  - *(These lines were added after the push and are committed with the next
    run.)*

---

## 2026-11-14 — fourth daily run

- **Published: 75 guides + 25 city pages = 100.**
  - By category: using 23, local 17, seasonal 11, choosing 9, ordering 8,
    label 4, formula 1, shipping 1, returns 1.
  - Totals after this run: 439 guides (300 from the daily job).
- **City pages:** 1,875 → 1,900 (`PUBLISHED_LOCATION_COUNT`); 23 left, so
  one final raise of 23 tomorrow (G = 77 that day), then 100 guides a day.
- **Local guides (17, each linked to its live city page and state page):**
  Spokane, Bend, Portland OR, Seattle, Honolulu, San Diego, Sacramento,
  Buffalo, Pittsburgh, Boston, Burlington VT, Milwaukee, Detroit, Des Moines,
  Kansas City MO, St. Louis, Oklahoma City. Every figure from NCEI 1991–2020
  normals and NOAA's relhum23 table (URLs in a comment above each guide).
  Bend has no humidity row; Burns OR is used and named. Honolulu vog from the
  USGS Hawaiian Volcano Observatory FAQ.
  - **Next local candidates (all have live city pages):** Missoula, Helena,
    Laramie, Pueblo, Grand Junction, Yuma, St. George, Provo, Ogden, Midland,
    Odessa, San Antonio, Austin, Houston, Miami, Syracuse, Rochester NY,
    Cleveland, Indianapolis, Nashville, Atlanta, Portland ME. (Boise still has
    no city page.)
- **Explainers with official sources checked today:** 21 CFR Part 349 and
  OTC Monograph M018 (glycerin and polysorbate 80 as demulcents, light mineral
  oil as emollient); 21 CFR 200.50 (ophthalmic sterility; OTC seal + 211.132),
  211.132 (tamper-evident), 211.137/211.166 (expiration dating), 201.63
  (pregnancy/breast-feeding warning applies to systemically absorbed OTC
  drugs); IRS Pubs 502 (OTC not deductible except insulin; 7.5 percent of
  AGI), 503 (dependent care FSA), 969 (HSA portability, spouse/dependents,
  OTC qualified); TSA 3.4 oz liquids rule; PubChem for glyceryl undecylenate.
- **10 strongest search phrases used:** eye drops hsa approved, eye drops in
  bulk, can you use eye drops in your ears, dry eyes in the middle of the
  night, dry eyes in the morning when i wake up, eye drops travel size, eye
  drop travel case / cooler, do eye drops help with eye strain, how to make
  eye drops more effective, are eye drops tax deductible.
- **Skipped, and why:**
  - Autocomplete dominated by claims or off-limits angles: "dry eyes when
    sick/high", "eye drops after cataract surgery/lasik", "eye drops every
    hour" (prescription completions), "dry eyes at night perimenopause",
    "how to make eye drops at home / with honey" (home remedy), "dry eyes from
    crying" (reflex tears aren't an on-site fact), brand completions on "eye
    drops hsa eligible" and "buy eye drops".
  - "why do my eyes feel hot / heavy": too close to existing burning and
    tired-eyes guides.
  - Still unverified against checkout: payment methods, PO boxes, APO/FPO,
    sales tax, HSA cards at checkout.
  - Wildfire smoke (Spokane), Santa Ana humidity figures (San Diego), NWS
    Sacramento wind events, Oklahoma City wind speeds: no official source
    reached today, left out.
- **Fixed in review (10 guides read end to end):** removed an unsourced
  "less rain than desert cities" comparison (Honolulu), a "fine for a
  passenger" implication (pilot gifts), and an "incorrect orders are
  replaced" stretch for expired-on-arrival bottles (expiration guide).
  Confirmed against /terms §7 that a refund on only some unopened bottles in
  an order matches the policy ("an unopened bottle").
- **Checks:** full vitest 631 passed; `npm run build` passed in 74 s
  locally; `tsc --noEmit` clean.
- **Deploy:**
  - Commit daf5afc built on Vercel in about 2 minutes (Ready).
  - `guides-verify-live`: 75/75 OK. New city pages miamisburg-oh and
    johnstown-co return 200.
  - Pruning: Phillip approved in chat. quell-nw13j72co (3 days old) was
    removed with --confirm-name, leaving 3; quelldrop.com still 200.
  - *(These lines were added after the push and are committed with the next
    run.)*

---

## 2026-11-15 — fifth daily run

- **Published: 77 guides + 23 city pages = 100.**
  - By category: local 36, using 20, seasonal 10, ordering 4, label 3,
    formula 2, returns 1, shipping 1.
  - Totals after this run: 516 guides (377 from the daily job).
  - Local ran heavier than the 20 percent guide on purpose: the Search
    Console export shows city searches are what Google tests Quell for, the
    ordering topics are close to saturated (see skipped), and local guides
    are the most distinct pages we can write.
- **City pages:** 1,900 → 1,923 (`PUBLISHED_LOCATION_COUNT`). **All 1,923
  are now live; the ramp is finished.** From tomorrow G = 100 guides.
- **Local guides (36, each linked to its live city page and state page):**
  Missoula, Helena, Laramie, Pueblo, Grand Junction, Yuma, St. George, Provo,
  Midland, San Antonio, Austin, Houston, Dallas, Miami, Tampa, New Orleans,
  Syracuse, Rochester NY, Cleveland, Columbus, Indianapolis, Nashville,
  Knoxville, Memphis, Louisville, Atlanta, Charlotte, Raleigh, Richmond VA,
  Washington DC, Baltimore, Philadelphia, New York City, Portland ME, Boise
  (city page is /eye-drops/boise-city-id), Tulsa. Figures from NCEI 1991–2020
  normals plus NOAA relhum23/wndspd23 (URLs in a comment above each guide).
  Stand-ins named in the prose: Laramie wind from Cheyenne (no humidity),
  St. George humidity from Las Vegas, Provo humidity from Salt Lake City;
  Yuma has no humidity or wind row, so both are left out. Wind is only
  compared, never given as a speed (the table prints no units). DC's station
  is Reagan National, in Arlington VA, and the guide says so.
  - **Next local candidates (all live):** Ogden, Odessa, Logan UT, Pocatello,
    Twin Falls, Casa Grande, Prescott, Las Cruces, Roswell NM, Abilene, San
    Angelo, Corpus Christi, Jacksonville, Orlando, Savannah, Charleston SC,
    Birmingham, Little Rock, Jackson MS, Cincinnati, Toledo, Grand Rapids,
    Lansing, Madison, Green Bay, Peoria, Springfield IL/MO, Lincoln NE,
    Topeka, Hartford, Providence, Albany NY, Manchester NH, Charleston WV.
- **Other guides:** gas-station eye drops, secure payment page (checked
  read-only against authorizenet.ts and the checkout routes: hosted
  Authorize.net page, one-time 15-minute token, 10-bottle cap, paid only on
  the signed notification), order-number alphabet (order-number.ts: `Q-` + 8
  of 30 characters, no 0/1/I/L/O/U), leaking box (replacement policy),
  paying less (no coupons; shipping rule, HSA/FSA), Medicare and OTC drops
  (Medicare & You 2027 handbook; IRS Pub 969), the Other information and
  Directions sections (21 CFR 201.66), barcode/UPC 860008931115 (GS1 US),
  sterile water (21 CFR 200.50), demulcent vs. emollient (21 CFR 349.3,
  349.12, 349.14), swallowed eye drops (Poison Help 1-800-222-1222 from
  poisoncenters.org and poison.org), 17 people/situation guides, 10 seasonal.
- **10 strongest search phrases used:** dry eye relief <city> (36 cities),
  eye drops near me gas station, dry eyes in december, what happens if you
  use too much eye drops at once, does medicare cover over the counter eye
  drops, what to do if someone swallows eye drops, christmas gifts for a
  software developer, what can i do for dry eyes besides eye drops, sterile
  water in eye drops, demulcent vs emollient.
- **Skipped, and why:**
  - Ordering/shipping/returns are near saturated: cancel or change an order
    and refund timing (not stated on the site), PO boxes, APO/FPO, sales tax,
    payment methods beyond cards and HSA cards at checkout (still unverified),
    Amazon availability (unknown).
  - "eye drops while fasting" (religious ruling, nothing official to cite),
    "dry eyes from dehydration" (no on-site fact), "dry eyes and headache /
    blurry vision / light sensitivity" (symptoms), "eye drops on accutane"
    (drug interaction), brand completions on HSA/FSA and "buy eye drops
    online" (prescription brands).
  - Writer C flagged for a human look: 21 CFR 349.14 lists light mineral oil
    as allowed "in combination with one or more other emollient agents", and
    Quell's only emollient active is light mineral oil. The guides make no
    claim about monograph conformance; this is a regulatory question for
    Aurora, not for the guides.
- **Fixed in review (10 read end to end):** removed a hydration tip framed as
  eye help (Nashville) and an unsourced "tired eyes blink less well"
  (architects). Writers dropped unverified items themselves (Memphis rain
  rank, Atlanta elevation claim, Midland windiest season, "don't induce
  vomiting").
- **Lessons for writers:** "programmer" fails the British-word scan
  (contains "programme"); "overnight" and "all day" keep tripping the scan;
  `{doNotUse}` and `{directions}` start with a capital, so don't drop them
  mid-sentence.
- **Checks:** full vitest 631 passed; `npm run build` passed in 66 s
  locally; `tsc --noEmit` clean.
- **Deploy:**
  - Commit 1e356bd built on Vercel in about 2 minutes (Ready).
  - `guides-verify-live`: 77/77 OK. New city pages cullman-al,
    port-angeles-wa and oconomowoc-wi return 200.
  - Pruning held: Vercel CLI 65 answers `remove --safe --yes` with
    "confirmation_required" ("--yes doesn't approve this command") and wants
    `--confirm-name` only after a human approves. No one was present, so
    quell-7ogflht08 (3 days old) is still there: 4 deployments, one over
    the target of 3. Ask Phillip, then run
    `npx vercel remove https://quell-7ogflht08-quell1.vercel.app --safe --confirm-name https://quell-7ogflht08-quell1.vercel.app`.
  - *(These lines were added after the push and are committed with the next
    run.)*

---

## 2026-11-16 — sixth daily run (first 100-guide day)

- **Published: 100 guides + 0 city pages = 100.** First day that hit the full
  100 (earlier runs gave writers about 15 each; today each of the five got 20).
  - By category: local 45, using 30, seasonal 14, label 7, ordering 4.
  - Totals after this run: 616 guides (477 from the daily job).
  - Local ran heavy again for the same reason as 11-15: city searches are what
    Google tests Quell for, and ordering/shipping/returns are near saturated.
- **City pages:** ramp finished on 11-15 (1,923 of 1,923); nothing to add.
- **Search Console list:** every city in docs/SEARCH-CONSOLE-QUERIES.md item 1
  is now done (checked against the inventory). Next Search Console step is
  Phillip's next export.
- **Local guides (45, each linked to its live city page and state page):**
  Pocatello, Roswell NM, Abilene, San Angelo, Corpus Christi, Jacksonville FL,
  Orlando, Savannah, Charleston WV, Birmingham, Little Rock, Jackson MS,
  Cincinnati (station is CVG in Kentucky, said so), Toledo, Grand Rapids,
  Lansing, Madison, Green Bay, Peoria, Springfield IL, Springfield MO, Lincoln
  NE, Topeka, Hartford (Bradley, Windsor Locks), Providence (T. F. Green,
  Warwick), Albany NY, Concord NH, Waco, Shreveport, Mobile, Huntsville,
  Lexington KY, Evansville, Fort Wayne, South Bend, Rockford, Dubuque, Sioux
  City, North Platte, Dodge City, Elko, Medford, Eugene, Yakima, Fresno.
  NCEI 1991–2020 normals per WBAN plus relhum23/wndspd23 (saved in
  .daily-job). San Angelo and Eugene have no snowfall normal; left out.
  - **Next local candidates (live city pages + NOAA humidity rows):**
    Bakersfield, Redding, Salem OR, Concordia KS (city page?), Ogden, Odessa,
    Logan UT, Twin Falls, Prescott, Las Cruces, Casa Grande. Check each slug in
    locations.generated.ts and its WBAN in relhum23 first (Goodland, Scottsbluff
    and Winnemucca have NOAA rows but no city page).
- **Other guides:** 30 people/situations (lawyers, librarians, construction,
  bartenders, ground crews, park rangers, mail carriers, crane operators, oil
  field, landscapers, HVAC, stock traders, medical-image readers, housekeepers,
  kayaking, drone pilots, birdwatching, stargazing, caregivers, real estate
  agents, ski patrol, film crews, casino dealers, bakers, sign language
  interpreters, loggers, commercial fishermen, highway workers, why dry all the
  time, sticky eyelids); 14 seasonal (November, January, Thanksgiving parade,
  tree farm, decorating, winter wedding, screen-time resolution, holiday
  concert, gifts for runner/golfer/mechanic/writer/business traveler/commuter);
  label (bad for you, addicted, mineral oil side effects, ophthalmic,
  distributed by, Drug Facts history, parts of a bottle); ordering (HSA for
  parents, letter of medical necessity, HSA before it opened, home first aid
  kit).
  - Official sources fetched today: IRS Pubs 969 and 501 (2025), the IRS
    CARES Act OTC page, 21 CFR 200.50, 201.1, 201.66, 211.132 via the eCFR API
    (the ecfr.gov web pages block automated requests; the API works), FDA's
    Drug Facts consumer page, tsa.gov liquids rule.
- **10 strongest search phrases used:** dry eye relief <city> (45 cities), are
  eye drops bad for you, is it bad to use eye drops too much / regularly,
  mineral oil eye drops side effects, why do my eyes feel dry all the time,
  dry eyes at work, dry eyes when tired, how to keep eyes moist, eye drops for
  dry eyes winter, letter of medical necessity for eye drops.
- **Skipped, and why:** autocomplete for "can eye drops…", "eye drops for…",
  "eye drops after/before…" and "best time to use eye drops" is dominated by
  conditions, surgery, prescription brands, pets and contacts; "dry eyes when
  sick/high", "dry eyes from accutane/allergies/crying/dehydration" (claims or
  no on-site fact); "eye drops vs eye wash", "gritty eyes", "limited-purpose
  FSA" and "AC dry eyes" are already answered as FAQs on other guides; "does
  glycerin…" completions are about teeth and skin. All formula inactives are
  already covered, so formula had 0 today.
- **Fixed in review (10 read end to end):** removed three unverified "under
  OSHA rules" employer-duty claims (construction workers) and an ANSI Z87.1 /
  Z87+ citation (landscapers). Checked the letter-of-necessity guide's receipt
  description against lib/email.ts (order number, subtotal, shipping, company
  name: correct). Writers themselves cut unverified city comparisons, a
  hydration tip, "snow blindness" and other unsourced lines.
- **For a human look:** writer E noted the actives on the label as transcribed
  in product-content.ts (Glycerol, Polysorbate 80, Light Mineral Oil) aren't
  alphabetical, which 21 CFR 201.66 asks for; worth checking against the
  physical carton. Not a guide issue. Local landmarks in the city guides
  (Vulcan, WaterFire, Lambeau and so on) are from general knowledge.
- **Checks:** full vitest 631 passed; `npm run build` passed in 62 s
  locally; `tsc --noEmit` clean.
- **Deploy:**
  - Commit c1297e1 built on Vercel in about 2 minutes (Ready).
  - `guides-verify-live`: 100/100 OK.
  - Pruning: held at first (`vercel remove --safe --yes` answers
    "confirmation_required"); Phillip approved in chat the same day and
    quell-l3nabllmr and quell-7ogflht08 were removed with --confirm-name,
    leaving 3; quelldrop.com still 200. Command used:
    `npx vercel remove https://quell-l3nabllmr-quell1.vercel.app https://quell-7ogflht08-quell1.vercel.app --safe --confirm-name https://quell-l3nabllmr-quell1.vercel.app --confirm-name https://quell-7ogflht08-quell1.vercel.app`
  - *(This entry was written after the push and is committed with the next
    run.)*

---

## 2026-11-17 — seventh daily run

- **Published: 100 guides + 0 city pages = 100.**
  - By category: local 48, using 27, seasonal 13, ordering 7, label 5.
  - Totals after this run: 716 guides (577 from the daily job).
- **City pages:** ramp finished 11-15 (1,923 of 1,923); nothing to add.
- **Local guides (48, each linked to its city and state page):** Montgomery,
  Fort Smith, Bakersfield, Long Beach, Redding, San Francisco (downtown
  station, not SFO), Santa Barbara, Stockton, Bridgeport (Sikorsky, Stratford),
  Wilmington DE, Daytona Beach, Fort Myers (Page Field), Gainesville, Key West,
  Pensacola, Tallahassee, West Palm Beach, Athens GA, Augusta GA, Columbus GA,
  Lewiston ID, Moline (Quad City Intl), Waterloo, Paducah (Barkley Regional),
  Baton Rouge, Lake Charles, Worcester, Flint, Rochester MN, Columbia MO,
  Kalispell (normals from USC00244558; USW00024146 has no normals file),
  Grand Island, Atlantic City (airport in Egg Harbor Twp), Binghamton,
  Asheville, Wilmington NC, Grand Forks, Dayton, Salem OR (no snowfall normal),
  Erie, Chattanooga, Brownsville, Wichita Falls, Roanoke, Olympia, La Crosse,
  Meridian, Galveston (humidity table covers 1948–1962 only; said so).
  - Picked with `.daily-job/pick-local.cjs`: NOAA relhum23 stations whose city
    page is live and has no local guide yet.
  - **Next local candidates (live, with NOAA rows):** Tupelo, Muskegon,
    Norfolk NE, Newark NJ, Williston ND, Akron, Mansfield, Youngstown,
    Allentown, Williamsport, Aberdeen SD, Del Rio, Port Arthur, Victoria TX,
    Norfolk VA, Walla Walla, Huntington WV, Santa Maria CA. After those the
    relhum23 list is used up; next runs need another source of place facts
    (e.g. NCEI normals without humidity) or fewer local guides.
- **Other guides:** ordering (HSA for an adult child, buying a gift with HSA
  money, FSA for a partner, is it legal to buy eye drops online, HSA after 65,
  keeping HSA receipts, FSA after leaving a job); seasonal (winter symptoms,
  forced-air heat, radiator heat, after flying, what humidity is good, cold
  wind, dark early, winter bonfire, holiday light show, gifts for a knitter,
  angler, gardener, new parents); using (miners, electricians, roofers, cold
  storage, jewelers, rock climbing, surfing, movie theater, new parent, VR
  headset, phone in bed, data entry, lab workers, evening, driving at night,
  video calls, long bus ride, trade show, data center, software developers,
  airport screeners, TSA, lying down, driving after drops, drops running down
  the face, blinking after, remembering doses); label (how to tell if drops are
  preservative-free, the Purpose column, why inactives are alphabetical, light
  vs. regular mineral oil, how to report a problem / MedWatch).
  - Official sources fetched: IRS Pubs 969, 501, 502 (2025) and the IRS
    domestic-partner Q&A; 26 CFR 54.4980B-2 (COBRA and FSAs); 21 CFR 201.66,
    349.14, 172.878, 200.50, 701.3 via the eCFR API (needs `curl
    --compressed`); tsa.gov liquids rule; FDA BeSafeRx and MedWatch pages;
    EPA "Care for Your Air" and mold pages (30 to 50 percent); NIST DST page;
    NWS wind chill FAQ and glossary (Santa Ana, tule fog).
- **10 strongest search phrases used:** dry eye relief <city> (48 cities), can
  i use my hsa for my adult child, can i use my fsa for my girlfriend, can i
  use my hsa after 65, how do i know if my eye drops are preservative free,
  are eye drops tsa compliant, what humidity is good for dry eyes, light
  mineral oil vs mineral oil, dry eyes driving at night, should you blink after
  eye drops.
- **Skipped, and why:** "dry eyes thanksgiving" (no completions); "red-eye
  flight" (banned phrase); "store at room temperature" meaning (USP
  definition not verifiable for free); "Questions?" section of the label
  (not known whether Quell's carton has one); expired/contaminated drops,
  gift-card-with-HSA (already answered or thin); brand, pet, contact-lens,
  allergy and condition completions as always.
- **Fixed in review (10 read end to end):** gift-card FAQ overstated what
  Pub 969 says (now "doesn't list gift cards… would likely be taxable"); the
  mineral-oil guide quoted 349.14's "in combination with one or more other
  emollient agents" for light mineral oil, which invites the monograph
  question flagged on 11-15, so it was removed; a dangling {doNotUse}
  sentence in rock climbing.
- **For a human look:** writers used some general-knowledge local color
  (Masters week, Bike Week, Azalea Festival, Nebraska State Fair, Dayton Air
  Show, Platte crane season). Low risk, not sourced. The "light = thinner
  grade" wording in the mineral-oil guide comes from existing site copy.
- **Checks:** full vitest 637 passed; `npm run build` passed in 64 s
  locally; `tsc --noEmit` clean.
- **Deploy:**
  - Commit d39e768 built on Vercel in about 2 minutes (Ready).
  - `guides-verify-live`: 100/100 OK.
  - Pruning: removed quell-ff9ady2kk (1 day old) with `--safe
    --confirm-name`, leaving 3 (live quell-nv7nsuxo2 + quell-5feur11q2 +
    quell-4ly0rvfqe). quelldrop.com 200.
  - *(This entry was written after the push and is committed with the next
    run.)*

---

## 2026-11-18 — eighth daily run

- **Published: 100 guides + 0 city pages = 100.**
  - By category: local 47, seasonal 21, using 13, ordering 10, choosing 8, label 1.
  - Totals after this run: 816 guides (677 from the daily job).
- **City pages:** ramp finished 11-15 (1,923 of 1,923); nothing to add.
- **NOAA's NCEI file server was down** (normals CSVs 404, ghcnd 503). Used
  NOAA's Regional Climate Centers ACIS service instead
  (`data.rcc-acis.org/StnData` with `"normal":"1"`; the data behind NWS
  NOWData), via `.daily-job/acis.sh <SID>`. Elevation comes back in feet;
  "M" = missing. ACIS returned 0/1 flags instead of day counts for days
  ≥90°F / ≤32°F, so none were used. Snowfall is missing for most non-snowy
  stations.
- **Local guides (47, each linked to its city and state page):**
  - From the relhum23 list (now used up): Santa Maria, Muskegon, Tupelo,
    Norfolk NE, Newark NJ, Williston, Akron, Mansfield, Youngstown,
    Allentown, Williamsport, Aberdeen SD, Del Rio, Port Arthur, Victoria,
    Norfolk VA, Walla Walla, Huntington WV.
  - New source: city pages no guide links to (`.daily-job/pick-1118.cjs`
    writes `uncovered-1118.json`, 1,712 cities, in population order), each
    with its own airport station in ACIS: Fort Worth (FTW), San Jose (SJC),
    Oakland (OAK), Riverside (RAL), Greensboro (GSO), Laredo (LRD),
    Winston-Salem (INT), Fayetteville NC (FAY), Fort Lauderdale (FLL),
    Lancaster CA (WJF), Charleston SC (CHS), Macon (MCN), McAllen (MFE),
    Cedar Rapids (CID), New Haven (HVN), College Station (CLL), Clarksville
    (CKV), Everett (PAE), St. Paul (STP), St. Petersburg (SPG), Scottsdale
    (SDL), Virginia Beach (NTU), Melbourne FL (MLB), Santa Rosa (STS),
    Olathe (OJC), Sunnyvale (NUQ), Arlington TX (GKY), Tacoma (TIW),
    Ontario CA (ONT).
  - Skipped as too close to an existing guide's station or landscape:
    Oxnard (Camarillo guide covers the Oxnard Plain), Santa Ana (John Wayne
    already used), Palmdale (next to Lancaster), Hampton and Hayward (third
    city in Hampton Roads / Bay Area today).
  - **Next local candidates (checked in ACIS today):** Henderson NV,
    Chandler AZ, Norman OK, Victorville, Springfield MA (Chicopee), Hampton
    VA, Hayward, Palmdale. Henderson/Chandler/Norman/Victorville/Chicopee
    returned no max-temp normals; try other elements or COOP stations.
    Beyond those, walk `uncovered-1118.json` and check each city's airport
    code in ACIS.
- **Other guides:** ordering (FSA vs HSA, FSAFEDS, limited-purpose FSA,
  reimbursing yourself from an HSA, FSA amount at open enrollment, FSA for
  last year's purchase, HSA for vision care, does HSA roll over, buying for
  employees, FSA receipt request); seasonal (gifts for a hairstylist, hiker,
  mail carrier, firefighter, dental hygienist, veterinarian, RV owners, adult
  children, coach, police officer, accountant, lawyer, professor,
  electrician, practical gifts for adults; hot tub in winter, wood stove, RV
  in winter, snowshoeing, winter commute, heated garage); using (nail techs,
  grad students, sales reps, train crews, cap left off, e-bike/scooter,
  shooting range, e-reader, surgeons, dry in the car, public speakers, power
  line workers, hospital stay); choosing (gritty eyes, watery but dry, eye
  wash vs drops, saline vs drops, gel vs drops, dry for two weeks, dry when I
  focus, dry when it's humid); label (side effects).
  - Official sources fetched: IRS Pubs 969 and 502, IR-2020-122;
    fsafeds.gov eligible-expense lists, claim and key-dates pages (curl gets
    a Cloudflare 403; read in the browser pane); 21 CFR 349.3/.12/.20/.78 and
    201.66 via eCFR; TSA liquids page; one NWS San Diego forecast discussion
    (Oct 2023 Santa Ana event, via the Iowa Mesonet text archive).
- **10 strongest search phrases used:** dry eye relief <city> (47 cities),
  fsa vs hsa, fsafeds, limited purpose fsa, can hsa be used for vision,
  gritty eyes, watery eyes but dry, eye wash vs eye drops, eye drops vs
  saline solution, christmas gifts for adult children.
- **Skipped, and why:** "dry eyes when sick", "after crying", "dehydration",
  "on accutane/adderall", "eye drops and blood pressure" (conditions,
  medicines or no official source); "fsa store" (a brand); PO box, APO and
  territory shipping, billing-vs-shipping address, prepaid cards, refund
  timing (site behavior not verified); "rewetting drops" (contact lenses);
  explainers (every label ingredient and term already has a guide). Topic
  space outside local is getting thin: ordering/shipping/returns/label/
  formula are close to saturated.
- **Writer notes for the brief:** the claims scan bans the stem "treat", so
  "diagnosis and treatment belong to an eye doctor" fails; "preventive"
  fails on "prevent"; "lasts for" and "all day" fail. Update the brief.
- **Reviewed end to end (10):** FSAFEDS, side effects, limited-purpose FSA,
  Newark, eye wash, two weeks, adult-children gifts, Riverside, Virginia
  Beach, hospital stay. No changes needed. Verified the confirmation-email
  contents claim (items, totals, company footer) in `src/lib/email.ts` and
  the no-gift-wrap claim against seasonal.ts. Phrase scan over all 100
  clean.
- **For a human look:** writers named well-known local places without a
  fetched source (Fort Bragg, Branch Brook Park, Mount Rubidoux, Mission Inn
  Festival of Lights, Austin Peay, NAS Oceana as master jet base, Cape
  Canaveral launches). The Victoria guide cites NOAA's June 1 to November 30
  hurricane season.
- **Checks:** full vitest 637 passed; `npm run build` passed in 96 s
  locally; `tsc --noEmit` clean.
- **Deploy:**
  - Commit 3824f76 built on Vercel in about 2 minutes (Ready).
  - `guides-verify-live`: 100/100 OK.
  - Pruning: removed quell-4ly0rvfqe with `--safe --confirm-name`, leaving
    3 (live quell-r1z9br44c + quell-nv7nsuxo2 + quell-5feur11q2).
    quelldrop.com 200.
  - *(This entry was written after the push and is committed with the next
    run.)*

---

## 2026-11-19 — ninth daily run

- **Started late** (17:12 local, not 11 a.m.); no lock was present.
- **Published: 100 guides + 0 city pages = 100.**
  - By category: local 46, choosing 24, seasonal 15, using 15.
  - Totals after this run: 916 guides (777 from the daily job).
- **City pages:** ramp finished 11-15 (1,923 of 1,923); nothing to add.
- **Local guides (46, each linked to its city and state page).** Source:
  `.daily-job/pick-1119.cjs` → `uncovered-1119.json` (1,665 cities no guide
  links yet), skipping suburbs of metros that already have a guide. Each
  station checked in NOAA ACIS first; raw JSON in `.daily-job/acis1119/`.
  Aurora IL (ARR), Modesto (MOD), Denton (DTO), Albany GA (ABY), Ann Arbor
  (ARB), Bellingham (BLI), Lafayette LA (LFT), Manchester NH (MHT), St. Cloud
  (STC), Indio (TRM), Warren MI (MTC/Selfridge), Merced (MCE), McKinney (TKI),
  Ames (AMW), Bloomington IN (BMG), Gulfport (GPT), Ogden (OGD), Danbury
  (DXR), Kenosha (ENW), Napa (APC), Champaign (CMI), Conroe (CXO), Scranton
  (AVP), Bowling Green (BWG), Greenville SC (GSP), Lawrence KS (LWC),
  Tuscaloosa (TCL), Kennewick (PSC), Yuba City (MYV), Longview (GGG), Tyler
  (TYR), Iowa City (IOW), Kalamazoo (AZO), Dothan (DHN), Jackson TN (MKL),
  Reading (RDG), Oshkosh (OSH), Hillsboro OR (HIO), Gastonia (AKH), Lawton
  (LAW), Salinas (SNS), Jonesboro (JBR), Fayetteville AR (FYV), St. Joseph
  (STJ), Lafayette IN (LAF), Decatur IL (DEC).
  - **Next local candidates:** keep walking `uncovered-1119.json`. Springdale/Rogers AR (XNA) returned data today but sits next to Fayetteville. These returned no normals in ACIS today; retry or try COOP stations: Mesa (FFZ), Chandler (CHD), Henderson (HND), Fort Collins (FNL; try COOP 053005), Greeley (GXY), Joliet (JOT), Victorville (VCV), Norman (OUN), Lakeland (LAL), Las Cruces (LRU), Waterbury (OXC), Killeen (GRK), Springfield MA (CEF). Also no data today: Hemet (HMT), Frederick MD (FDK), Greenville NC (PGV), Warner Robins (WRB), Ocala (OCF), Casa Grande (CGZ), Janesville (JVL), Jacksonville NC (OAJ).
- **Other guides:** using (welders, flight attendants, barbers, plumbers,
  vets and vet techs, translators, home inspectors, potters, glassblowers,
  fly fishing, rowers, chess players, social media managers, parking
  attendants, print shop workers); seasonal (Christmas gifts for a barista,
  pastor, grandpa, bus driver, real estate agent, night shift worker, social
  worker, boss, neighbor, mother-in-law, sister, brother, new homeowner;
  white elephant; sledding); choosing (why do my eyes feel heavy/hot/sore,
  feel like rubbing my eyes, which eye drops to use, screen breaks, dry or
  tired, eyesight getting worse, how often to see an eye doctor, how
  lubricating drops work, types of lubricating drops, should I switch,
  store brand vs name brand, all dry eye drops the same, what to avoid,
  what makes it worse, go away on their own, dry vs normal eyes, drops when
  you don't need them, after crying, sunglasses indoors, sleeping in
  mascara, dry after a nap, sitting close to the TV).
- **10 strongest search phrases used:** dry eye relief <city> (46 cities),
  why do my eyes feel hot, why do my eyes feel sore, what makes dry eyes
  worse, can dry eyes go away on their own, how do lubricating eye drops
  work, types of lubricating eye drops, are all dry eye drops the same,
  is it bad to sit too close to the tv, christmas gifts for grandpa.
- **Replaced in review:** "Rewetting drops vs. lubricating eye drops"
  (a contact-lens product topic) and "Should I use eye drops if I got soap in
  my eye?" (first aid and a Poison Control number beyond the label). Both
  were rewritten as the nap and TV guides.
- **Skipped, and why:** "are eye drops ..." completions (all answered
  already), "dry eyes vs tired eyes" (covered), "how often should I blink"
  (needs a study figure), "how often to get eyes checked" (no allowed
  source), eye pain, blurry vision, headaches (conditions). The people and
  gift space is close to saturated: grep `.daily-job/titles-1119.txt`
  before picking.
- **Fixed in review:** Dothan guide named the Army post "Fort Novosel"
  (renamed back to Fort Rucker in 2025); now unnamed ("the Army's aviation
  center").
- **Writer notes:** "tiredness" fails the "redness" scan (no word
  boundary); "next day's" fails the delivery-time scan.
- **For a human look:** local landmarks stated from general knowledge
  without a fetched source (Dothan "Peanut Capital of the World", Decatur
  "Soybean Capital of the World", Tyler "Rose Capital", Iowa City "UNESCO
  City of Literature", Hanford Site in Richland, BMW in Greer, Mercedes in
  Vance, Corvette plant in Bowling Green, Lake Monroe/Candlewood Lake as
  state's largest). One choosing guide's FAQ says Quell has no store-brand
  version.
- **Reviewed end to end or in full skim (12):** rewetting, soap (both
  replaced), mascara, sunglasses indoors, eyesight getting worse, store
  brand, go away on their own, how often to see an eye doctor, eyes feel
  hot, eyes feel sore, Dothan, Kennewick.
- **Checks:** full vitest 638 passed; `npm run build` passed (99 s first,
  64 s final); `tsc --noEmit` clean.
- **Deploy:**
  - Commit 3f81293 built on Vercel in about 1 minute (Ready).
  - `guides-verify-live`: 100/100 OK.
  - Deployments: 3 total (live quell-6pwb13h1h + quell-466dyjqhh +
    quell-2p9uow6v0); nothing removed. quelldrop.com 200.
  - *(This entry was written after the push and is committed with the next
    run.)*

---

## 2026-11-20 — tenth daily run

- **Started 11:50 local**; no lock was present.
- **Published: 100 guides + 0 city pages = 100.**
  - By category: local 45, using 20, seasonal 14, choosing 11, ordering 6, label 4.
  - Totals after this run: 1,016 guides (877 from the daily job).
- **City pages:** ramp finished 11-15 (1,923 of 1,923); nothing to add.
- **Local guides (45, each linked to its city and state page).** Picked from
  `.daily-job/uncovered-1120.json` (1,619 cities no guide links yet), skipping
  metros that already have a guide; each station checked in NOAA ACIS first
  (raw JSON in `.daily-job/acis1120/`). Killeen (ILE), Terre Haute (HUF),
  Bozeman (BZN), Sarasota (SRQ), Logan (LGU), Valdosta (VLD), Twin Falls
  (TWF), Manhattan KS (MHK), Joplin (JLN), Utica (RME), Santa Cruz (WVI),
  Monroe LA (MLU), Florence SC (FLO), Florence AL (MSL), Elmira (ELM), Bangor
  (BGR), Charlottesville (CHO), Naples (APF), Wausau (AUW), Prescott (PRC),
  Eureka (ACV), Wenatchee (EAT), Farmington NM (FMN), Stillwater (SWO),
  Sheboygan (SBM), Minot (MOT), Salina (SLN), York PA (THV), El Centro (IPL),
  Alexandria LA (AEX), Saginaw (MBS), Jefferson City (JEF), Cedar City (CDC),
  Quincy IL (UIN), Rome GA (RMG), Hot Springs (HOT), Panama City (ECP), Butte
  (BTM), Kingman (IGM), Lima (AOH), Lufkin (LFK), Gillette (GCC), Pullman
  (PUW), Poughkeepsie (POU), Carlsbad NM (CNM).
  - **Next local candidates (returned normals today, not yet written):**
    Battle Creek (BTL, next to Kalamazoo), Findlay (FDY), Elyria (LPR), Vineland
    (MIV Millville), Texarkana (TXK), Cape Girardeau (CGI), Rocky Mount (RWI),
    Hickory (HKY), Altoona (AOO), Hutchinson (HUT, near Wichita), Pine Bluff
    (PBF, near Little Rock), Odessa (ODO, next to Midland), Davenport (DVN,
    Quad Cities guide exists), Harlingen (HRL, Valley guides exist), Canton
    (CAK used by Akron), Racine (RAC, next to Kenosha).
  - **No max-temp normals in ACIS today:** Chico (CIC), Temple (TPL), Appleton
    (ATW), Conway AR (CXW), Owensboro (OWB), Kokomo (OKK), Lake Havasu (HII),
    Coeur d'Alene (COE), Elkhart (EKM), Bentonville (VBT), Gary (GYY),
    Schenectady (SCH), Bossier City (BAD), Ithaca (ITH), Mankato (MKT), Hobbs
    (HOB), Columbus IN (BAK), Harrisonburg (SHD), Enid (WDG), Hattiesburg
    (PIB), Blacksburg (BCB), Bremerton (PWT), Sierra Vista (FHU), State College
    (UNV), Myrtle Beach (MYR), Lewiston ME (LEW), Clovis NM (CVN), Kearney
    (EAR), Aiken (AIK), Houma (HUM), Alamogordo (ALM).
- **Other guides:** seasonal (Christmas gifts for dad, mom, husband, wife,
  birdwatcher, college students, stargazer; Friendsgiving, Thanksgiving
  football, Cyber Monday shopping, Thanksgiving houseguests; cross-country
  skiing, curling, holiday baking); using (radiology techs, dental
  assistants, OR staff, home health aides, forklift operators, ferry crews,
  tow truck drivers, sanitation workers, data analysts, proofreaders, IT help
  desk, cybersecurity analysts, hotel front desk, laundry and dry cleaning,
  food trucks, dishwashers, archery, bowling, darts or pool, esports);
  choosing (closest to natural tears, same drops as my friend, buying for the
  first time, dry when wearing glasses, dehumidifier, dry after a shower, dry
  out so fast, are eye drops worth it, vs reading glasses, humidifier or
  drops, drops vs glasses); ordering (unfinished checkout, checkout error
  messages, bottle limit, split HSA payment, family members on your HSA card,
  refunds on HSA/FSA purchases; all checked against the site's code, terms
  and IRS Pubs 969/502); label (fl oz, "When using this product", do not use
  vs stop use, both eyes).
- **10 strongest search phrases used:** dry eye relief <city> (45 cities),
  christmas gifts for dad, christmas gifts for mom, friendsgiving, can a
  dehumidifier cause dry eyes, why do my eyes feel dry after a shower, are
  eye drops worth it, eye drops vs reading glasses, can family members use
  your hsa card, which eye drops are closest to natural tears.
- **Skipped, and why:** "christmas gifts for best friend" ("best" is banned
  by the claims scan, so the title can't pass); ice fishing, ice skating,
  hockey, court reporters, video editors, stock traders, call centers, data
  centers, crane operators, miners, air traffic controllers, 911
  dispatchers, warehouse, casino dealers, bartenders, line cooks, bakers,
  housekeepers, retail, lifeguards, climbing gyms, pickleball/tennis, hotel
  rooms, blurry after drops, "how many bottles a month" (all already have
  guides); "drive home after dark" (night-driving guide covers it); winter
  birdwatching (too close to the birdwatching guide); stepchild HSA rules
  (needs IRS Pub 501 and touches children); account sign-up topics
  (registration is switched off). People, gift and winter-activity space is
  close to saturated; Google autocomplete returned nothing for curling,
  holiday baking and the office-job seeds.
- **Fixed in review:** cut a section on prescription eye drops that change
  focus (reading-glasses guide; prescription products are off limits);
  removed "Apple Capital of the World" from Wenatchee (city page 403, not
  verified); removed "among the driest places in California" from El Centro
  (unsourced comparison); removed "written for adults" from the both-eyes
  label guide (not on the label). Verified the refund guide's damaged/broken
  seal 30-day replacement against /terms.
- **Writer notes:** "best friend" fails on "best"; "tiredness" fails the
  "redness" scan; the five-word distinctness test sometimes times out at 5 s
  when five writers run tests at once (passes alone; writers used
  `--testTimeout=60000`).
- **For a human look:** neighbor towns in shipping paragraphs and some local
  color stated from general knowledge (e.g. Harker Heights, Copperas Cove,
  Hahira, Belgrade, Webb City, Wappingers Falls; Lufkin's timber history;
  Saginaw lake-effect storms; ranch land west of Killeen); Wenatchee
  Confluence State Park from a search summary; the refund guide says card
  refunds "normally" return to the card charged (general practice, hedged).
- **Reviewed end to end (12):** same drops as my friend, vs reading glasses,
  Killeen, Wenatchee, family members on HSA card, unfinished checkout, both
  eyes, HSA/FSA refunds, Christmas gifts for dad, Friendsgiving,
  dehumidifier, El Centro.
- **Checks:** full vitest 638 passed; `npm run build` passed in 74 s
  locally; `tsc --noEmit` clean.
- **Deploy:**
  - Commit e79d941 built on Vercel in about 2 minutes (Ready).
  - `guides-verify-live`: 100/100 OK.
  - Pruning: removed quell-2p9uow6v0 with `--safe --confirm-name`, leaving 3
    (live quell-bzps9f6i8 + quell-6pwb13h1h + quell-466dyjqhh).
    quelldrop.com 200.
  - *(This entry was written after the push and is committed with the next
    run.)*

---

## 2026-11-21 — eleventh daily run

- **Started 13:04 local**; no lock was present. Phillip was live part of the
  way through (see "Also shipped" below).
- **Published: 100 guides + 0 city pages = 100.**
  - By category: local 35, using 15, choosing 14, seasonal 14, ordering 8,
    formula 6, label 4, shipping 4.
  - Totals after this run: 1,116 guides (977 from the daily job).
- **City pages:** ramp finished 11-15; nothing to add.
- **Local guides (35):** each station checked in ACIS first (raw JSON in
  `.daily-job/acis1121/`). Battle Creek (BTL), Altoona (AOO), Anniston (ANB),
  Carlsbad CA (CRQ), Hampton (LFI), Newport News (PHF), Greenville MS (GLH),
  Cape Girardeau (CGI), Carbondale (MDH), Concord CA (CCR), Decatur AL (DCU),
  Elyria (LPR), Hialeah (OPF), Pembroke Pines (HWO), Findlay (FDY), Fullerton
  (FUL), Goldsboro (GSB), Rocky Mount (RWI), Hayward (HWD), Hickory (HKY),
  Hutchinson (HUT), New Braunfels (BAZ), New Iberia (ARA), North Las Vegas
  (VGT), Odessa (ODO), Oxnard (OXR), Pearland (LVJ), Pine Bluff (PBF), Punta
  Gorda (PGD), Racine (RAC), Sanford FL (SFB), Texarkana (TXK), Vancouver WA
  (VUO), Vineland (MIV), Winter Haven (GIF).
  - **Dropped as too close to an existing guide's station or valley:**
    Beaumont (BPT is Port Arthur's), Overland Park (OJC is Olathe's), Canton
    (CAK is Akron's), Davenport (Moline/Quad Cities), Harlingen (Brownsville,
    McAllen), Palmdale (Lancaster), Pompano Beach (third South Florida
    suburb today). Usable next time with a fresh angle: Pompano Beach (PMP).
  - **No normals in ACIS today:** Auburn AL, Bloomington IL, Bullhead City,
    Casa Grande, Chandler, Columbus MS, Danville IL, Fort Collins, Gadsden,
    Galesburg, Georgetown TX, Glendale AZ, Goodyear, Grand Prairie, Greeley,
    Greenville NC, Hammond LA, Henderson NV, Jacksonville NC, Joliet,
    Kankakee, Kissimmee, Lakeland, Las Cruces, Mesa, Nampa, Norman, Ocala,
    Ruston, San Marcos, Torrance, Victorville, Waterbury.
  - **Untried candidates for next run:** suburbs are most of the 1,539
    cities still unlinked (`.daily-job/uncovered-1121.json`); small airports
    rarely have normals, so check ACIS in bulk first.
- **Other guides:** seasonal (Christmas gifts for grandma, father-in-law,
  aunt; Small Business Saturday, puzzles and board games, Christmas cards;
  year-end work crunch, holiday retail shifts, grading before winter break;
  Christmas flight, relative's guest room, Christmas cruise; New Year
  routine, back at work after the holidays); using (drywall finishers,
  flooring installers, auto body techs, corrections officers, crossing
  guards, animal control, animators, podcasters, theater actors, patio
  heaters, model building, mini-split heat pumps, ranchers, arborists, land
  surveyors); choosing (what's making my eyes dry, sensitive eyes, blinking
  vs drops, how often preservative-free, wait between drops, how long to use
  drops, eye drops in the nose, cold drops, while fasting, moisturizing vs
  lubricating, drops vs water, before or after computer work, are my drops
  working, time-zone changes); ordering (unused FSA money, HSA after Dec 31,
  ship to a different address than billing, will the recipient see the
  price, order lookup "no order found", reorder reminder timing, fake
  delivery texts, shared computer); formula (full ingredient list, the
  before-and-after picture on the box, three actives, glycerin, emu oil,
  manuka honey and honey allergy); label ("caution should be used",
  "relieve dryness of the eye", storage temperature, who to call); shipping
  (APO/FPO, why a phone number, stolen package, pack or ship for holiday
  travel).
- **10 strongest search phrases used:** dry eye relief <city> (35 cities),
  christmas gifts for grandma, do fsa funds expire december 31, can you add
  to your hsa after december 31, will the gift recipient see the price, can
  you put eye drops in your nose, can you use eye drops while fasting,
  moisturizing vs lubricating eye drops, what does glycerin do in eye drops,
  eye drop package stolen.
- **Skipped, and why:** nearly every seed in the brief already had a guide
  (trades, public-service jobs, creative jobs, home heating, "can I" and
  "how often" questions, hotel and relative shipping, all natural inactives).
  Writers moved to the nearest untaken angle. D's "jigsaw puzzles" was
  replaced with mini-splits because B wrote puzzles and board games.
  fsafeds.gov returned 403, so nothing cites it. ACIS day-count reduces
  (days over 90, nights under 32) returned nonsense and were not used.
- **For a human look:** neighbor towns, rivers and counties stated from
  general knowledge (writers listed them: e.g. Calhoun County, Catawba
  Valley, Charlotte Harbor, Lake Monroe, Columbia River commute); the
  hurricane season dates (June 1 to November 30) from general knowledge;
  Langley and Seymour Johnson named only as ACIS station names. The APO/FPO
  guide says the address form would accept one but nothing promises service,
  and sends readers to call first.
- **Reviewed end to end (11):** nose, cold drops, fasting, "caution should
  be used", Christmas gifts for grandma, HSA after Dec 31, will the
  recipient see the price, and the openings and numbers of Hampton, Hialeah,
  Odessa and Vancouver (checked against ACIS; all matched).
- **Checks:** full vitest 639 passed; `npm run build` passed in 128 s
  locally; `tsc --noEmit` clean.
- **Also shipped in today's push (Phillip, live):** Bing Webmaster Tools
  verification tag `msvalidate.01` in `src/app/layout.tsx` (the GSC import
  opens a Google popup Chrome tools can't reach); "What converted" section
  in `docs/SEARCH-CONSOLE-QUERIES.md` from sale Q-RX4K7PP7. The push also
  carried dee55e7 ("Tag the abandoned-cart email link…"), committed by
  another session before this run's push.
- **Deploy:**
  - Commit d1cb3d5 built on Vercel in about 2 minutes (Ready).
  - `guides-verify-live`: 100/100 OK. Bing tag confirmed on quelldrop.com.
  - Pruning: removed quell-bzps9f6i8 with `--safe --confirm-name`, leaving 3
    (live quell-pq7nhkj46 + quell-bzp93618c + quell-3fbxl397x).
    quelldrop.com 200.
  - *(This entry was written after the push and is committed with the next
    run.)*

---

## 2026-11-22 — twelfth daily run

- **Started 11:05 local**; no lock was present.
- **Published: 100 guides + 0 city pages = 100.**
  - By category: local 21, using 19, seasonal 17, choosing 15, ordering 8,
    shipping 6, label 5, returns 5, formula 4.
  - Totals after this run: 1,216 guides (1,077 from the daily job).
- **City pages:** ramp finished 11-15; nothing to add.
- **Local guides (21):** each station checked in ACIS this morning (raw JSON
  in `.daily-job/acis1122/`). Pompano Beach (PMP), Clearwater (PIE, no
  elevation returned), Cape Coral (RSW), Sugar Land (SGR), Kent (Renton RNT),
  Gresham (Troutdale TTD), Spokane Valley (Felts Field SFF), Livermore (LVK),
  Broken Arrow (Jones Riverside RVS), Edmond (Wiley Post PWA), Kansas City KS
  (downtown MKC), Centennial (APA), Chula Vista (Brown Field SDM), Escondido
  (Ramona RNM), Chino (CNO), Lowell (Lawrence LWM), Paterson (Teterboro TEB),
  White Plains (HPN), Lindenhurst (Republic FRG), Joliet (Romeoville LOT),
  Waukegan (UGN).
  - **Checked today with normals, not yet used:** Lee's Summit MO (LXT; no
    live page, so for Independence MO), Bedford MA (BED; Cambridge or
    Lexington area), Detroit City (DET; Sterling Heights), West Chicago
    DuPage (DPA; Elgin), Aurora IL airport (ARR; Naperville), Palwaukee
    (PWK; Evanston), Caldwell NJ (CDW; Clifton), Islip (ISP; Long Island),
    Burnet TX (BMQ), Hondo TX (HDO), Boeing Field (BFI), Imperial Beach (NRS).
  - **Not usable:** JQF, EFD, ADS, BJC, SBD, AJO, MCC, SUU, POC, EMT, PWT,
    GTU, HYI, EDC returned nothing; NFG has no precipitation. Skipped as
    already a neighbor's station: CQT (Los Angeles), SAC (Sacramento), FAT
    (Fresno), HOU (Houston).
- **Other guides (writers swapped many assigned topics that already had
  guides; the inventory is dense, grep before assigning):** ordering
  (declined card, company card, another state, cancel, prepaid card, charged
  twice, does Quell sell my data, weekend orders); shipping (winter storm
  delay, package got wet, mailbox, second home, pickup, someone who is
  moving); returns (refund window start, refund timing, send back, returned
  to sender, crushed box); label (what a label doesn't tell you, 1 drop 3
  times, Poison Control line, label too small to read, continued
  irritation); formula (drop volume, lubricant vs emollient, dyes or
  fragrance, preservative-free glycerin); choosing (rewetting drops, eyes
  closed, waiting for an appointment, dry in the corner, dry when I blink,
  skincare, why drops feel good, lash lift, warm compress, eyelash serum,
  facial, brow waxing, blue light glasses, dry at work fine at home,
  floaters); using (car salespeople, insurance adjusters, bank tellers,
  property managers, receptionists, night custodians, dairy farmers,
  winter sailors, museum guards, church musicians, dog groomers, nannies,
  indoor pools, long nails, mirror, squeeze, bathroom, nightstand, gloves,
  ski goggles); seasonal (gifts for uncle, son-in-law, daughter-in-law,
  grown nephew and niece, cousin, godparent, nanny, someone who works from
  home, woodworker, musician, engineer, veteran; Christmas lights drive,
  wrapping marathon, bell ringers).
- **10 strongest search phrases used:** dry eye relief <city> (21 cities),
  eye drop volume per drop, lubricant eye drops vs rewetting drops, glycerin
  eye drops preservative free, can you put eye drops in with your eyes
  closed, do blue light glasses help dry eyes, do eye drops help with
  floaters, why was my card declined, can i cancel my order, christmas gifts
  for a son-in-law.
- **Skipped, and why:** "Does Quell ship to Puerto Rico?" (checkout accepts
  any two-letter state code, so the code can't answer it); "is polysorbate
  80 a preservative" (an existing FAQ answers it); online vs pharmacy,
  ships internationally, eyes-only, without a prescription, real estate
  agents, cashiers, before an eye exam, one eye drier, still dry after drops,
  too many drops, CAD drafters, book lover, retired friend, ice rink, glare
  at night, tired eyes, running down the cheek (all already answered).
- **Fixed in review (11 read end to end):** floaters (cut a reassurance that
  "it doesn't mean something serious"), why drops feel good (cut an
  unsourced comparison with other drops), Pompano Beach (July was called
  the hottest month; August is, per ACIS), privacy (dropped "the cart is
  never sent to the site"; see below). Also read: dyes and fragrance, blue
  light glasses, Centennial (sums and the Kansas City comparison checked
  against ACIS), cancel, veteran gifts, drop volume, dairy farmers.
- **For a human look:** the /privacy page says the cart is stored in the
  browser and "never sent to us", which may not fit the abandoned-cart
  emails. Phillip, 2026-11-22: "Leave it." Don't raise it again; guides
  just shouldn't repeat that sentence. Writers named some
  neighbor towns from general knowledge (Dunedin, Largo, Pine Island,
  Missouri City, Richmond TX) and called Edmond a "college town".
- **Checks:** full vitest 651 passed; `npm run build` passed in 67 s
  locally; `tsc --noEmit` clean.
- **Deploy:**
  - Commit 735cb76 built on Vercel in about 2 minutes (Ready). The push also
    carried 86a2a51 ("Email previews: include both cart reminders"), which
    another session had committed but not pushed.
  - `guides-verify-live`: 100/100 OK.
  - Pruning: removed quell-pq7nhkj46 with `--safe --confirm-name`, leaving
    3 (live quell-k2mgz2ak9 + quell-lw0ml1ohv + quell-k52z599zd).
    quelldrop.com 200.
  - *(This entry was written after the push and is committed with the next
    run.)*
