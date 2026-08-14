# Quell — project state

Written as a handoff so work can resume cold, without the prior conversation.
Update it when something here stops being true.

---

## 1. Start it up

```powershell
powershell -ExecutionPolicy Bypass -File scripts\start-local.ps1
```

Then open http://localhost:3000

Stop before shutting the machine down:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\stop-local.ps1
```

**Neither Postgres nor the dev server survives a reboot.** Postgres is a
portable install (the normal Windows installer needs admin elevation, which was
not available), so it is *not* a Windows service and will not auto-start.

If `npm` is "not recognised", the shell predates the Node install — open a new
terminal. The scripts already pull the machine PATH in themselves.

---

## 2. What this is

A single-product storefront for **Quell**, a preservative-free over-the-counter
lubricating eye drop. `.33 fl oz (10 mL)`, $29.99.

**Quell is OTC, not prescription.** There is no prescription gating anywhere in
the app by design. The project began as a prescription pharmacy template
(`ClearSight Rx`) and was rebuilt when the packaging showed a standard OTC Drug
Facts panel with no "Rx only" legend.

- **Brand owner / trademark:** BlephEx®, LLC — 500 Wilson Pike Circle, Suite
  103, Brentwood, TN 37027. Phone 615.465.6041 (the number printed on the
  carton).
- **Manufacturer:** Aurora Pharmaceuticals, Inc.
- Both live in `src/lib/product-content.ts` as `COMPANY` and `MANUFACTURER`.

---

## 3. Stack

| Layer    | Choice                                                     |
| -------- | ---------------------------------------------------------- |
| Framework| Next.js 16 (App Router) + React 19 + Tailwind v4           |
| Database | PostgreSQL 17 via Prisma 7 (`@prisma/adapter-pg`)          |
| Auth     | Email + password, bcrypt, JWT session cookie (jose)        |
| Payments | Stripe Checkout — one-time and subscription                |
| Email    | Resend, or console output when no API key is set           |

**Next.js 16 differences that bite:** `cookies()`/`headers()` are async-only,
`middleware` is renamed `proxy`, Turbopack is the default. Version-matched docs
are bundled at `node_modules/next/dist/docs/` — read those, not memory.

---

## 4. Where things live

```
src/lib/product-content.ts   ALL label copy: Drug Facts, warnings, directions,
                             ingredients, emu oil panel, company details, FAQ.
                             Single source of truth — change packaging, change
                             this one file. DRUG_FACTS must match the carton.
src/lib/shipping.ts          Free over $59, else flat $6.95, US only
src/lib/subscription.ts      Monthly refill, 15% off, always free shipping
src/lib/inventory.ts         Conditional stock decrement (cannot oversell)
src/lib/rate-limit.ts        In-process limiter (see caveat below)
src/lib/email.ts             Resend or console fallback
src/lib/admin.ts             ADMIN_EMAILS allowlist
src/components/Logo.tsx      Real logo vector — see below
src/app/admin/orders/        Admin order view + fulfilment actions
```

---

## 5. The logo — do not redraw it

`src/components/Logo.tsx` contains the **actual production vector**, extracted
from page 5 of `Quell Packaging - Print Ready.pdf` (Illustrator source) using
`pdftocairo`, cropped to the mark. Three earlier hand-traced attempts were all
wrong. To update, re-extract from the PDF; do not hand-edit the path data.

Two things about it are load-bearing and easy to break:

1. **The droplet and Q are `evenodd` knockouts**, not white shapes. Their
   interiors show whatever is behind the mark, which is why it blends onto the
   black theme with no masking.
2. **Paint order:** the white keyline path sits *underneath* the teal lens so it
   reads as a rim. Drawn on top it floods the mark white.

Lockups: `QuellLogoInline` (horizontal, `md` for header / `lg` for the closing
CTA), `QuellLogo` (stacked), `QuellMark` (bare). The bare mark is used **only**
in the buy card, where the heading beside it already says "Quell
Preservative-Free" — everywhere else names the brand.

`icon.tsx` and `opengraph-image.tsx` carry their own copy of the path because
Satori has no `<mask>` support; the favicon drops the keyline as it is
sub-pixel at 64px.

Brand teal is `#00A7B5` (site token). The print file converts to `#4AC1A8` —
greener. Unresolved: see open questions.

---

## 6. Order flow

1. Cart lives in `localStorage`; the client posts only product IDs and quantities.
2. `POST /api/checkout` re-reads prices **and shipping** from the server, checks
   stock, creates a `pending` order, opens a Stripe Checkout Session.
3. `POST /api/webhooks/stripe` verifies the signature, marks the order `paid`,
   draws down stock, emails confirmation.
4. Admin marks it shipped, which emails the customer.

Statuses: `pending` → `paid` → `shipped` | `cancelled`.

**Payment is recorded from the webhook, never the success page** — the browser
may never load it. Stock is decremented on payment, not at session creation, so
abandoned checkouts do not hold inventory. Renewals arrive as `invoice.paid`
and create a fresh order; `Order.stripeInvoiceId` is unique so replays cannot
duplicate.

Stripe API gotchas found the hard way:
- Shipping address is at `session.collected_information.shipping_details`, not
  the older `session.shipping_details`.
- Subscription ref is at `invoice.parent.subscription_details.subscription`,
  not `invoice.subscription`.

---

## 7. Admin

`/admin/orders` — orders with customer, items, totals, shipping address;
counters; inline stock editor; mark shipped / cancel.

Access is the `ADMIN_EMAILS` allowlist in `.env` (comma separated). **Unset
means nobody** — it fails closed. Not a database flag, so nothing in the app can
escalate an account. Non-admins get 404, not 403. Requires a restart to change.

Current admin: `moorerevenue@outlook.com` (Phillip Moore).

Other accounts in the database are throwaway test signups:
`kokkpokpopo@gmail.com`, `ewrgwgr@gmail.com`, `sfgnsfbgnsf@yahoo.com`.

---

## 8. Verified vs unverified

**Verified working:** registration, login, duplicate rejection, rate limiting
(429 + Retry-After), password reset end to end (single-use, expiry, old password
dead), inventory gating and the conditional decrement never going negative,
cart totals and the free-shipping threshold, admin access control, mark-shipped
flipping status and sending mail, all routes 200, zero console errors, no
horizontal overflow at 360/375px, production build of all 22 routes.

**Never verified — the one real gap:** a live Stripe payment. Everything up to
the API call is exercised (orders are written, then rolled back to `cancelled`
when Stripe rejects a bad key), but the real
payment → webhook → paid → email → stock chain has never run. It needs test keys.

---

## 9. Open questions and placeholders

| Item | Status |
|---|---|
| `$6.95` shipping rate | **My assumption.** You gave the $59 threshold, not the rate. Confirm against real carrier cost. |
| `15%` subscription discount | **My placeholder.** Margin decision — `src/lib/subscription.ts`. |
| `$29.99` price | Matches the Dry Eye Rescue retail listing as of 2026-08-13. |
| Brand teal | Site uses `#00A7B5`; print file converts to `#4AC1A8`. One token change if you want to match print. |
| Legal pages | Unreviewed boilerplate with bracketed placeholders, and say so in a banner. |
| **Front-panel claims** | The carton advertises **redness relief**, but the Drug Facts *Uses* section does not cover it and the formula has no vasoconstrictor. FDA expects front-panel claims to match Uses. Affects packaging, not just the site. Needs regulatory review. |

---

## 10. Known limitations before launch

- **Rate limiting is in-process.** Effective on one instance; on serverless the
  limit is multiplied by instance count. Move to Redis/Upstash — the call
  signature can stay.
- **No email verification** on signup, and **no automated tests**.
- Stripe requires **pre-approval** for OTC drug sales (restricted business);
  underwriting takes days. Start that early.
- No error tracking — a production crash is currently invisible.

---

## 11. Environment

`.env` (gitignored; `.env.example` is the template):

```
DATABASE_URL="postgresql://postgres:quelldev@localhost:5433/quell"
AUTH_SECRET="..."                 # 32+ random chars
STRIPE_SECRET_KEY=""              # empty -> checkout returns a clean 503
STRIPE_WEBHOOK_SECRET=""
NEXT_PUBLIC_APP_URL="http://localhost:3000"
RESEND_API_KEY=""                 # empty -> emails print to the console
EMAIL_FROM="Quell <orders@example.com>"
ADMIN_EMAILS="moorerevenue@outlook.com"
```

Postgres lives at `C:\Users\phill\AppData\Local\QuellPostgres` (binaries and
`data\`), port **5433**, user `postgres`, password `quelldev`, database `quell`.
It was moved out of `%TEMP%` because Windows disk cleanup targets that folder.

To rebuild the database from nothing:

```powershell
npx prisma migrate deploy
npm run db:seed
```

That restores the schema and the product, but **not** user accounts.

---

## 12. Gotchas that cost time

- **OneDrive locks `.next`.** A build can fail with `EPERM: unlink` even with
  no server running. Delete `.next` and rebuild.
- **`prisma migrate dev` is interactive** and fails in this environment. Use
  `prisma migrate diff --from-config-datasource --to-schema ... --script` to
  generate SQL into a migration folder, then `prisma migrate deploy`.
- **PowerShell mangles UTF-8** when splicing files — it turned `™` into
  mojibake. Use the editor tools for files containing non-ASCII.
- **Satori (`ImageResponse`) rejects multi-child nodes** without an explicit
  `display`, which JSX interpolation silently creates.
