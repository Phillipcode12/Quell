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
| Payments | Authorize.net Accept Hosted — one-time only (see §6)      |
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
src/lib/authorizenet.ts      Gateway client: hosted page token, transaction
                             lookup, webhook signature verification
src/lib/order-number.ts      Short public reference, e.g. "Q-7F3K9M2A"
src/app/orders/             Guest order tracking — number + email, no login
src/lib/subscription.ts      DORMANT. Monthly refill pricing, kept for the
                             deferred ARB phase. Nothing imports it today.
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

Payments run through **Authorize.net**, the gateway in front of the company's
**StaxPay** merchant account. Not Stripe — the project was moved off Stripe so
Quell settles into the same account as BlephEx. Integrate against Authorize.net;
Stax sits behind it and is not called directly.

**No account is required to buy.** Guest checkout is the default path; forcing
signup is a well-known source of cart abandonment, and with subscriptions
deferred an account buys the customer nothing at purchase time. `Order.userId`
is nullable and `Order.email` is always populated — the account's address when
signed in, the one typed at checkout when not.

1. Cart lives in `localStorage`; the client posts only product IDs and quantities.
2. The cart collects the **email and shipping address** — see the gotcha below.
3. `POST /api/checkout` re-reads prices **and shipping** from the server, checks
   stock, creates a `pending` order with a short `orderNumber`, and requests a
   hosted-payment-page token.
4. The browser **POSTs that token** to the gateway's hosted form. There is no
   URL to redirect to, so the client submits a generated form.
5. The customer is returned by POST to `/api/checkout/return`, which only
   bounces to the success page. It reads nothing from that POST body.
6. `POST /api/webhooks/authorizenet` verifies the signature, looks the
   transaction up, marks the order `paid`, draws down stock, emails confirmation.
7. Admin marks it shipped, which emails the customer.

Statuses: `pending` → `paid` → `shipped` | `cancelled`.

**Payment is recorded from the webhook, never the return page** — the browser
may never load it. Stock is decremented on payment, not at token creation, so
abandoned checkouts do not hold inventory. `Order.paymentTransactionId` is
unique and the update is scoped to `status: 'pending'`, so a replayed webhook
cannot pay or decrement twice.

**Subscriptions are deferred.** One-time purchases only. Recurring billing needs
Authorize.net ARB, which has no hosted billing portal and no renewal webhook —
see §10. `lib/subscription.ts` and the reserved `payment*` columns are kept for
that phase.

**Checkout cannot be completed on localhost.** Authorize.net rejects a
`localhost` return URL when creating the hosted payment page — the error is
`E00013 ... must begin with http:// or https://`, which is misleading, since the
URL does. Point `NEXT_PUBLIC_APP_URL` at the deployed origin to get past it.
This blocks the whole payment path locally, not just the webhook.

Authorize.net gotchas, all already handled in `lib/authorizenet.ts`:
- **Key order in the request is load-bearing.** The JSON API is a shim over the
  XML service and the XSD validates element *sequence*, so object key order
  becomes element order. The correct run is `transactionType, amount, order,
  lineItems, tax, duty, shipping, taxExempt, poNumber, customer, billTo,
  shipTo`. Getting it wrong returns `E00003 invalid child element`, naming the
  element that appeared too late rather than the one that came too early. Do
  not alphabetise or reorder those keys.
- Responses carry a **UTF-8 BOM** that makes `JSON.parse` throw.
- Failures return **HTTP 200** with `resultCode: "Error"`, so the status code
  never tells you whether the call worked.
- The Signature Key is displayed as 128 hex characters but must be used as the
  **decoded bytes**; hashing the string silently never matches.
- `invoiceNumber` is capped at **20 characters**, which is why orders carry a
  short `orderNumber` — a 25-character cuid does not fit.
- The hosted page **only pre-populates** an address, it does not collect one.
  That is why the cart now has its own shipping-address form.
- Line item `name` is capped at 31 characters and is truncated before sending.

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

**Verified on the Authorize.net move (2026-08-17):** webhook signature
verification against the real route — valid signatures accepted in all three
header spellings (`sha512=`, `SHA512=`, bare), and tampered bodies, wrong keys
and missing headers all rejected with 400. Those valid calls then reached the
**live sandbox endpoint** and returned a real gateway error, which confirms the
BOM handling, the `resultCode` error detection, and the webhook's
log-and-200 containment all work against the actual API. Checkout returns 401
signed out and a clean 503 with no keys; the old Stripe endpoints 404.

**Verified on guest checkout (2026-08-17):** a signed-out order runs end to end
into the database — `userId` null, email lower-cased, $29.99 + $6.95 = $36.94,
full address stored, and rolled back to `cancelled` when the gateway rejected.
Nine validation cases return the right 400s. Guest lookup finds the order by
number + email, normalises case and whitespace, and returns an identical 404 for
a wrong email, a fake number, and malformed input — no oracle. Rate limiting
trips on the 11th lookup with `Retry-After`. All 11 pages render at 375px with
no overflow.

**A deliberate security choice:** signing in does **not** adopt guest orders that
share your email address. There is no email verification on signup (§10), so
anyone could register with someone else's address and inherit their order
history. Guest orders stay reachable only via order number + email.

**Verified against the live sandbox gateway (2026-08-17):** with real sandbox
credentials, `createHostedPaymentPageToken` returns a valid ~3,250-character
token. That proves the credentials, the request shape, the element ordering, the
line items, the shipping amount and the hosted-page settings are all accepted by
Authorize.net. Two real defects were found and fixed this way — the element
ordering, and the localhost return URL — neither of which any amount of local
testing would have surfaced.

**Never verified — the remaining gap:** an actual payment. No card has been
charged. The chain from hosted page → approval → webhook → `paid` → email →
stock draw-down still has not run, and cannot on localhost (see §6). It needs
the Vercel deployment.

---

## 9. Open questions and placeholders

| Item | Status |
|---|---|
| `$6.95` shipping rate | **My assumption.** You gave the $59 threshold, not the rate. Confirm against real carrier cost. |
| `15%` subscription discount | **My placeholder**, and now dormant — subscriptions are deferred. Still a margin decision before they return. |
| Authorize.net credentials | **Blocking a live payment test.** Need API Login ID, Transaction Key and Signature Key from the Merchant Interface. Sandbox is enough to finish verification. |
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
- **Guest checkout has no account barrier**, which makes card testing easier.
  Checkout and order lookup are both rate limited per IP, but turn on
  Authorize.net's velocity filters too before going live — and remember the
  limiter is in-process (see the first bullet).
- **No post-purchase account creation yet.** Offering to save details on the
  success page — when the email and address are already in hand — is the
  obvious follow-up, and the natural on-ramp for when subscriptions return.
- No error tracking — a production crash is currently invisible.
- **Subscriptions are gone from the UI** and need real work to return. ARB has
  no hosted billing portal, so pause / cancel / update-card must be built by
  hand, and there is no renewal webhook: renewals arrive as generic
  `net.authorize.payment.authcapture.created` events that have to be correlated
  back to a subscription. Budget for that, not a switch flip.
- Stripe's OTC pre-approval problem is **gone** — the company's merchant
  account already sells this product category. Confirm with Ryan and Nick that
  adding Quell needs no new underwriting.

---

## 11. Environment

`.env` (gitignored; `.env.example` is the template):

```
DATABASE_URL="postgresql://postgres:quelldev@localhost:5433/quell"
AUTH_SECRET="..."                    # 32+ random chars
AUTHORIZENET_API_LOGIN_ID=""         # empty -> checkout returns a clean 503
AUTHORIZENET_TRANSACTION_KEY=""
AUTHORIZENET_SIGNATURE_KEY=""        # 128 hex chars, required for webhooks
AUTHORIZENET_ENVIRONMENT="sandbox"   # never point local dev at production
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
