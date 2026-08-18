# Quell — project state

Written as a handoff so work can resume cold, without the prior conversation.
Update it when something here stops being true.

---

## 0. Deployed

**https://quell-six.vercel.app** — Vercel project `quell1/quell`, Neon Postgres,
Authorize.net **sandbox**. Not indexed: `robots.ts` returns `Disallow: /` for
any `*.vercel.app` host and switches itself on when `NEXT_PUBLIC_APP_URL` points
at the real domain.

Webhook registered on the sandbox account (id `9a679451-e09e-44b5-add9-5f2edb28d4fb`)
for `net.authorize.payment.authcapture.created`. Registered through the REST API
rather than the Merchant Interface:

```
POST https://apitest.authorize.net/rest/v1/webhooks
Authorization: Basic base64(apiLoginId:transactionKey)
```

Before going live: swap to production credentials, register the webhook against
the production host, and set `AUTHORIZENET_ENVIRONMENT=production`.

### Local and deployed are separate. Editing one does not change the other.

Running the site locally touches nothing on Vercel. The deployed site changes
**only** when someone runs a deploy. There is no automatic pipeline — the
project was created with the Vercel CLI rather than connected to GitHub, so
nothing deploys on commit.

They also use different databases. Local uses the portable Postgres on this
machine; the deployed site uses Neon. Test data written locally never reaches
the live site, and vice versa.

**To deploy a change** you need a Vercel token. The one used for setup was
deliberately revoked afterwards, so there is currently no way to deploy without
creating a new one:

1. Create one at <https://vercel.com/account/tokens>
2. From the project folder:
   `npx vercel deploy --prod --yes --token <TOKEN>`

If deploying becomes routine, connect the repo to GitHub and let Vercel build on
push instead. That removes the token step entirely.

**Environment variables live in two places and must be kept in step:** `.env`
for local, the Vercel dashboard for the deployed site. Changing one does not
change the other. When setting them from the CLI use
`vercel env add NAME production --value 'x'` — piping the value appends a
newline and corrupts the credential (§12).

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

> **Warning — `stop-local.ps1` kills every `node` process on the machine**, not
> just this dev server. Anything else running on Node dies with it. Until that
> line is narrowed, stopping by hand is safer:
>
> ```powershell
> Get-NetTCPConnection -LocalPort 3000 -State Listen |
>   ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }
> & "$env:LOCALAPPDATA\QuellPostgres\bin\pg_ctl.exe" `
>   -D "$env:LOCALAPPDATA\QuellPostgres\data" -m fast stop
> ```
>
> Stopping the dev server cleanly matters for a second reason too — see the
> `.next` note in §12.

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
- **The webhook Signature Key is used as TEXT, not decoded hex.** It is
  displayed as 128 hex characters, so decoding it to 64 bytes is the intuitive
  reading — and it is wrong. Measured against real sandbox webhooks. No unit
  test can catch this: a test that computes the HMAC the same way the code does
  agrees with itself whichever reading is wrong. Both are accepted now, and the
  handler logs which one matched.
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

**THE PAYMENT CHAIN NOW WORKS END TO END (2026-08-17).** Two sandbox card
payments ran the whole way through on the deployed site:

| Step | Evidence |
|---|---|
| Guest checkout, no account | both orders have `userId` null |
| Server-side pricing | $29.99 + $6.95 = $36.94 on both |
| Hosted page took the card | real transaction ids `120088547461`, `120088547612` |
| Signed webhook accepted | verified using the **"text"** key derivation |
| Order `pending` → `paid` | both |
| Stock drawn down | 250 → 248, exactly one per paid order |
| Confirmation email rendered | correct order number and tracking link |
| Guest lookup finds it | 200 for the right pair, 404 for a wrong email |

**Replay safety was proven by accident, which is the best way.** The first
webhook was rejected (signature bug), Authorize.net retried it after the fix,
and it settled correctly — the order moved `pending` → `paid` once and stock
decremented once, despite two deliveries of the same event.

**The failure was also safe.** While the signature check was wrong, the order
sat at `pending` rather than being wrongly marked paid. Payment recorded only
from a verified webhook is what made that the outcome.

**Still not exercised:** Stax settlement. The sandbox simulates the processor
entirely, so money has never actually moved. The first production transaction
should be a small real purchase you make and then refund.

---

## 9. Open questions and placeholders

| Item | Status |
|---|---|
| `$6.95` shipping rate | **My assumption.** You gave the $59 threshold, not the rate. Confirm against real carrier cost. |
| `15%` subscription discount | **My placeholder**, and now dormant — subscriptions are deferred. Still a margin decision before they return. |
| Authorize.net credentials | **Sandbox is done and working.** Production credentials are still needed — see §13, and read it before anyone touches the production account. |
| Domain | Not chosen. Lives on `quell-six.vercel.app`. Own domain or a subdomain? Ryan controls DNS and warned the BlephEx records are tangled, so a separate domain sidesteps that. |
| Fulfilment | **Unanswered and blocking real orders.** Admin marks orders shipped by hand. Nobody has said how a Quell order physically reaches XPSShipper and gets picked, packed and posted. |
| Card statement descriptor | Quell shares BlephEx's merchant account, so charges show BlephEx's descriptor. Unrecognised descriptors cause chargebacks. Ask whether Stax allows a per-transaction descriptor like `BLEPHEX*QUELL`. Affects packaging and email copy, so it has the longest lead time. |
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
- **A killed dev server can corrupt `.next` into serving 404s.** Not the
  documented `EPERM` — a subtler failure where `/` renders fine and *every other
  route* 404s, while all the route files sit untouched on disk. It looks like
  deleted code. It is a stale cache. Delete `.next` and restart. Stopping the
  server cleanly avoids it.
- **Piping a value into `vercel env add` appends a newline**, and the newline
  becomes part of the stored secret. This burned an entire debugging cycle: the
  Transaction Key was rejected as "length is greater than MaxLength" (17 chars
  instead of 16), and `NEXT_PUBLIC_APP_URL` broke the production build outright.
  Always use `--value '...'` instead. Symptoms are wildly varied and never point
  at whitespace.
- **PowerShell here-strings mangle `git commit -m`** when the message contains
  quotes — it word-splits and git reads fragments as pathspecs. Write the
  message to a file and use `git commit -F <file>`.
- **`prisma migrate dev` is interactive** and fails in this environment. Use
  `prisma migrate diff --from-config-datasource --to-schema ... --script` to
  generate SQL into a migration folder, then `prisma migrate deploy`.
- **PowerShell mangles UTF-8** when splicing files — it turned `™` into
  mojibake. Use the editor tools for files containing non-ASCII.
- **Satori (`ImageResponse`) rejects multi-child nodes** without an explicit
  `display`, which JSX interpolation silently creates.

---

## 13. Blocked on other people

Everything here needs someone outside this project. Nothing in the codebase
unblocks them.

### Ryan — payment credentials

Quell will use **the same Authorize.net account as BlephEx**, settling into the
same StaxPay merchant account. Sharing the account needs **no change to
BlephEx.com** — two sites can use one set of credentials.

The difficulty is retrieval, not sharing:

- **API Login ID** is viewable in the Merchant Interface.
- **Transaction Key** and **Signature Key** are shown once at creation and
  **never displayed again** — not to Ryan, not to the account owner, not to
  Authorize.net support.

So the deciding question is: **does Rohit's team still have the current values
saved in the BlephEx site config?**

| | Consequence |
|---|---|
| **Yes** | Use the same values. Nothing changes on BlephEx. No downtime. |
| **No** | New keys must be generated. Old ones stop working, so BlephEx.com must be updated at the same time or its checkout breaks. |

> **If new keys are generated, leave "Disable Old Transaction/Signature Key
> Immediately" UNCHECKED.** The old key then keeps working for **24 hours**,
> which is the window for updating both sites. Ticking that box takes
> BlephEx.com's checkout down instantly — and it is the option that looks
> tidier, so it needs saying out loud.

The **Signature Key is only used for webhooks.** If BlephEx does not use
Authorize.net webhooks, regenerating that one is free. Worth establishing —
it may reduce the risky item to the Transaction Key alone.

### Ryan — the other questions

1. What descriptor do BlephEx charges show on card statements, and can Stax
   send a per-transaction one for Quell?
2. How does a Quell order reach fulfilment — does it push into XPSShipper, or
   does someone key it in?
3. What domain should Quell use?
4. How should Quell's revenue be separated in the books from BlephEx's?
5. Confirm no new underwriting is needed to add Quell to the merchant account.

### Not a developer question

**The redness claim.** The carton advertises redness relief; the Drug Facts
*Uses* panel does not cover it and the formula contains no vasoconstrictor.
This affects the printed carton, not just the site, and needs Dr. Rynerson or
a regulatory reviewer. The claim currently appears on the homepage hero and the
buy card.

**The legal pages** are unreviewed boilerplate and say so in a banner. They
name Authorize.net as the processor, which is accurate as of this work.

---

## 14. Suggested order of work

1. **Copy edits.** Independent of everything else; redeploy takes a minute.
2. **Send Ryan the questions in §13.** Credentials have the longest lead time.
3. **Review pass** — `/security-review` and `/code-review` over the branch. It
   handles money, sessions and an unauthenticated webhook.
4. **`RESEND_API_KEY`**, so confirmation emails actually send rather than
   printing to the Vercel logs.
5. **Error tracking** (Sentry). A production crash is currently invisible.
6. **Automated tests.** Still the largest structural gap — though note that the
   two worst bugs found so far, the element ordering and the signature key
   derivation, were both invisible to unit tests and only a live gateway
   exposed them.
7. **Production cutover:** production keys, webhook re-registered against the
   real host, `AUTHORIZENET_ENVIRONMENT=production`, real domain. Make the
   first production transaction a small real purchase and refund it — Stax
   settlement has never been exercised, since the sandbox simulates the
   processor entirely.

### Smaller things left on the floor

- `scripts\stop-local.ps1` kills every `node` process (§1).
- The branch `payments/authorizenet-guest-checkout` is unmerged; `main` is the
  pre-Authorize.net fallback.
- Post-purchase account creation — offering to save details on the success page,
  where the email and address are already known.
- Rate limiting is in-process, which on Vercel means per-instance (§10).
