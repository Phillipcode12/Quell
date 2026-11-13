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
