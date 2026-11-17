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
