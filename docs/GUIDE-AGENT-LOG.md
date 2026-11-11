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
