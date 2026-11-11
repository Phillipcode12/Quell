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
