# Quell — project state

Written as a handoff so work can resume cold, without the prior conversation.
Update it when something here stops being true.

---

## 0. Deployed

**https://quelldrop.com** — the canonical address since 2026-08-20 (§18).
Vercel project `quell1/quell`, Neon Postgres, Authorize.net **sandbox**.
`quelleye.com`, `quelleyes.com` and `quelltears.com` all 308 to it, and
**https://quell-six.vercel.app still works as a fallback** — deliberately not
redirected, so the site stays reachable if DNS is ever misconfigured.

**Not indexed, deliberately.** Indexing requires `ALLOW_INDEXING="true"` *and* a
non-staging origin; the flag is off. `NEXT_PUBLIC_APP_URL` is already
`https://quelldrop.com`, so canonical tags, OpenGraph URLs and the sitemap are
correct while the site stays out of search. Set the flag when the store can
actually sell — see the end of §18.

Webhook registered on the sandbox account (id `9a679451-e09e-44b5-add9-5f2edb28d4fb`)
for `net.authorize.payment.authcapture.created`. Registered through the REST API
rather than the Merchant Interface:

```
POST https://apitest.authorize.net/rest/v1/webhooks
Authorization: Basic base64(apiLoginId:transactionKey)
```

Before going live: swap to production credentials, register the webhook against
the production host, and set `AUTHORIZENET_ENVIRONMENT=production`.

> **PUSHING TO `main` NOW DEPLOYS.** GitHub was connected to the `quell` project
> on 2026-08-20 and it deploys on push, with no token and no manual step. Treat
> a push as a publishing action, not a save — anything committed to `main` is
> live within a couple of minutes.
>
> **The site is current as of 2026-08-20** and was verified against the live URL,
> not assumed: the template banners, `[State]`, `[X] days` and the retention
> placeholder are all gone; Aurora Pharmaceuticals, LLC, the 30-day returns
> policy, limitation of liability, State of Tennessee, US-only shipping and the
> privacy policy's no-analytics statement are all present; every public route
> returns 200 and `/admin/customers` correctly 404s when signed out.
>
> **The CLI is signed in** (`npx vercel login --github`, 2026-08-20), so
> `npx vercel deploy --prod --yes` works with no token. That is the fallback if
> a push ever fails to trigger a build. Any tokens created during setup can be
> revoked at <https://vercel.com/account/tokens>.
>
> Getting here took a detour worth recording. Vercel's Settings → Git offered
> only "Connect an Origin team", and that consent screen was `cursor.com` asking
> for `contents:write`, `pull_requests:write` and `checks:write` on the
> repository. It was declined — broad write access to a third party, to connect
> something other than the GitHub repo the code lives in. **If that screen
> appears again, it is not the GitHub connection.** The working route was the
> ordinary GitHub option.
>
> One trap if a *new* Vercel project is ever created instead of reusing `quell`:
> it would have none of the environment variables, and the Neon `DATABASE_URL`
> exists only in the existing project — it is not in local `.env`, which points
> at the portable Postgres. A new URL would also orphan the registered webhook.

> **Git remote: <https://github.com/Phillipcode12/Quell> (private).** Added
> 2026-08-19. Everything is pushed and `main` is the trunk — the payments branch
> was merged in, so work continues on `main` rather than on a feature branch.
> Credentials are cached in Windows Credential Manager, so `git push` works
> without a prompt.

### Local and deployed are separate. Editing one does not change the other.

Running the site locally touches nothing on Vercel, and the two use different
databases — local uses the portable Postgres on this machine, the deployed site
uses Neon. Test data written locally never reaches the live site.

**But the deployed site is no longer manual.** Since the GitHub connection on
2026-08-20, pushing to `main` deploys. Committing is still local; *pushing* is
what publishes.

**To deploy:** `git push origin main`. That is it.

If a push ever fails to trigger a build, deploy by hand — the CLI is signed in,
so no token is needed:

```
npx vercel deploy --prod --yes
```

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

> **Fixed 2026-08-20 — `stop-local.ps1` no longer kills every `node` process.**
> It used to be `Get-Process node | Stop-Process -Force`, which took down any
> other project's dev server, editor language servers, and — verified on this
> machine — Adobe Creative Cloud's helper. It now finds the dev server by the
> port it listens on and walks the process tree from there: up while the parent
> is still Node (so `npm` goes too, and the walk stops at the shell, which is
> not Node), and down to catch Turbopack workers.
>
> Verified rather than assumed: with a decoy Node process and Adobe's Node
> running alongside, a real dev server was started and stopped by the script.
> It killed 3 processes — the listener, its `next` parent and one worker —
> freed port 3000, and left both unrelated Node processes alive.
>
> Takes `-Port` if the server is ever moved off 3000.
>
> Stopping the dev server cleanly still matters for a second reason — see the
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

- **Brand owner / seller of record:** Aurora Pharmaceuticals, LLC — 330 Franklin
  Road, Suite 135A, #117, Brentwood, TN 37027. Phone 615.465.6041 (the number
  printed on the carton, shared with BlephEx).
  *Changed 2026-08-19 — it was BlephEx®, LLC until Ryan confirmed Quell sits
  under Aurora. See §9 and §13.*
- **Manufacturer:** Aurora Pharmaceuticals, **Inc** — as printed on the carton,
  and deliberately left that way even though the confirmed entity is an LLC.
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
src/app/api/auth/claim-order/  Post-purchase signup: creates an account and
                             attaches exactly one order (§17)
src/components/PostPurchaseSignup.tsx  The card that drives it, on the receipt
src/**/*.test.ts             Vitest unit tests, alongside what they cover (§16)
vitest.config.mts            Test config. The .mts extension is deliberate.
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

Payments run through **Authorize.net**, the gateway. Not Stripe — the project
was moved off Stripe to settle into the company's existing StaxPay merchant
account. That premise has since changed (§13: Quell gets its own merchant
account), but the integration does not: **Authorize.net is the gateway, the
merchant account is whoever holds the money, and the code only ever talks to the
gateway.** Whichever processor ends up behind it, only credentials change.

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

Two tabs, linked by `components/admin/AdminTabs.tsx`:

**`/admin/orders`** — orders with customer, items, totals, shipping address;
counters; inline stock editor; mark shipped / cancel.

**`/admin/customers`** — added 2026-08-19. Everyone who has actually bought,
with name, email, order count, lifetime spend and last order date. Keyed on
**email, not the User table**: guest checkout is the default path, so a list of
registered users would show a fraction of real customers. Each row is labelled
Account or Guest. "Bought" means paid or shipped — a pending order is a checkout
that may never complete, and a cancelled one is not a customer. Emails are
grouped case-insensitively.

> Using that list to service orders is covered by the privacy policy as written.
> **Exporting it to send marketing email is not** — the marketing-email
> disclosures were removed because no such system exists, and the policy now
> states the site uses no advertising trackers. A mailing list means updating
> the policy and adding consent first.

Access is the `ADMIN_EMAILS` allowlist (comma separated) — in `.env` locally,
in the Vercel dashboard for the deployed site. **Unset means nobody** — it fails
closed, so if it is missing in Vercel the admin tabs 404 even for Phillip. Not a
database flag, so nothing in the app can escalate an account. Non-admins get
404, not 403.

**To add an admin:** the person registers a normal account, their email is added
to `ADMIN_EMAILS`, and the app is restarted (locally) or redeployed (Vercel —
env changes are baked into a deployment and do not reach running functions).

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
| Authorize.net credentials | **Sandbox is done and working.** Production credentials wait on a **new merchant account** — Quell is no longer sharing BlephEx's. See §13. |
| Merchant account | **Decided 2026-08-19: Quell gets its own.** Ryan ruled out sharing BlephEx's Stax account because the two companies are taxed and reported separately. Open: Stax's low-volume tier (Nick is quoting) vs Authorize.net's own All-in-One at ~$25/mo + 2.9% + 30¢. Either way the code is unchanged — Authorize.net stays the gateway. |
| Domain | **Done 2026-08-20 — https://quelldrop.com is live and canonical** (§18). The other three redirect to it. `NEXT_PUBLIC_APP_URL` still points at the vercel.app host on purpose, so the site stays out of search until it can actually sell; flipping it turns indexing on. |
| Customer email address | **None exists yet, but the plan changed on 2026-08-20 and got simpler.** `EMAIL_FROM` is still `orders@example.com`, a reserved domain that cannot send or receive. **The sender should now be `orders@quelldrop.com`, not `Quell@meibum.com`** — Quell owns its own domain, whose DNS zone has no MX and no TXT records at all, so Resend's DKIM and SPF records go onto a clean zone. **This removes the meibum.com SPF hazard entirely**: no edit to BlephEx's single existing SPF record, so no way to break their mail. A monitored *inbox* is still needed for replies and returns, and that can still be a Microsoft 365 shared mailbox — but it is no longer on the critical path for *sending*. |
| Fulfilment | **Decided 2026-08-20: packed and posted by hand from the office**, not pushed to XPSShipper. The app now supports that — a paid order emails a fulfilment list, and marking it shipped captures a carrier and tracking number that reach the customer (§20). What is still open is the human side: **who** packs and posts, and who receives returns, since the terms accept unopened returns for 30 days. |
| Card statement descriptor | **Resolves with the separate merchant account** — Quell sets its own rather than showing BlephEx's. Still needs choosing, and it affects packaging and email copy, so it has the longest lead time. |
| `$29.99` price | Matches the Dry Eye Rescue retail listing as of 2026-08-13. |
| Brand teal | Site uses `#00A7B5`; print file converts to `#4AC1A8`. One token change if you want to match print. |
| Legal pages | **Rewritten 2026-08-18/19 and reviewed.** No placeholders, no template banners, every claim checked against the code. Three false statements were fixed: the cart is `localStorage` and never reaches the server, there is no marketing email, and the site runs no analytics at all — the policy now says so. Governing law is **Tennessee**; shipping is **US-only**, matching `SHIPPABLE_COUNTRIES`. Note the privacy policy now states the site uses no advertising trackers — **installing a Meta Pixel makes that false and must be changed in the same release.** |
| Returns policy | **Decided 2026-08-19.** Unopened, original packaging, 30 days, refund of product price; original shipping not refunded. Opened drops never returnable (sterility). Damaged, incorrect or broken-seal orders replaced free within 30 days. Refunds are achievable today through the Authorize.net merchant interface; store credit was considered and dropped because no credit or coupon mechanism exists anywhere in the codebase. |
| Seller of record | **Changed 2026-08-19 to Aurora Pharmaceuticals, LLC**, confirmed by Ryan against the IRS letter and articles of organization. `COMPANY` now carries Aurora's name and its 330 Franklin Road address; the phone is shared with BlephEx and stays. `MANUFACTURER` is deliberately left as **Aurora Pharmaceuticals, Inc** because that is what the carton prints — the suffix is wrong on the box and is a packaging correction, not a site edit. |
| **Front-panel claims** | The carton advertises **redness relief**, but the Drug Facts *Uses* section does not cover it and the formula has no vasoconstrictor. FDA expects front-panel claims to match Uses. Affects packaging, not just the site. Needs regulatory review. |

---

## 10. Known limitations before launch

- **Rate limiting is Redis-capable but running in-process.** `lib/rate-limit.ts`
  uses Upstash when `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` are
  set and falls back to the old in-memory map otherwise. **No Upstash database
  exists**, so production is still on the per-instance fallback, where the limit
  is multiplied by the instance count. The fallback is tested and enforces
  correctly; the Redis path is written but has never run. `rateLimit` is now
  async — await it.
- **No email verification** on signup. This is load-bearing elsewhere — it is
  the reason signing in does not adopt guest orders (§8), and the reason the
  post-purchase signup below attaches exactly one order.
- **Automated tests exist as of 2026-08-20, and cover `lib/` and one route.**
  See §16. They are unit tests: no test touches the database, the network or
  the real gateway. The page components and the remaining API routes have no
  coverage.
- **Guest checkout has no account barrier**, which makes card testing easier.
  Checkout and order lookup are both rate limited per IP, but turn on
  Authorize.net's velocity filters too before going live — and remember the
  limiter is in-process (see the first bullet).
- ~~**No post-purchase account creation yet.**~~ **Built 2026-08-20** — see
  §17. Still worth knowing what it deliberately does *not* do: it never links
  more than the single order whose number was presented, so it is not a route
  into someone else's order history.
- **Sentry is wired but dormant.** `src/instrumentation.ts` and
  `src/instrumentation-client.ts` initialise only when `SENTRY_DSN` /
  `NEXT_PUBLIC_SENTRY_DSN` are set, and **no Sentry project exists**, so a
  production crash is still invisible. `sendDefaultPii` is off and session
  replay is disabled — card entry is on Authorize.net's page, but the billing
  address and email are typed on ours. `withSentryConfig` is deliberately *not*
  applied: it exists for source-map upload, needs an auth token, and is the most
  likely thing to break a Next 16 build. Server errors report without it;
  minified client stack traces are the cost.
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
EMAIL_FROM="Quell <orders@example.com>"   # PLACEHOLDER — see below
ADMIN_EMAILS="moorerevenue@outlook.com"

UPSTASH_REDIS_REST_URL=""            # empty -> rate limiting falls back
UPSTASH_REDIS_REST_TOKEN=""          #          to the in-process map
SENTRY_DSN=""                        # empty -> no error reporting
NEXT_PUBLIC_SENTRY_DSN=""            # public by design, inlined into the bundle
```

> **`EMAIL_FROM` is a live bug waiting to arm.** `example.com` is IANA's
> reserved example domain — it cannot send or receive. Today nothing sends
> because `RESEND_API_KEY` is empty, so the placeholder is harmless. **The
> moment a Resend key is added, every receipt goes out from a dead address** and
> a drug-purchase confirmation from `example.com` reads as phishing. Fix both in
> the same change.
>
> **Intended value as of 2026-08-20: `Quell <orders@quelldrop.com>`** — not the
> meibum.com address previously planned. Quell owns its own domain now (§18) and
> its DNS zone is empty, so Resend's DKIM and SPF records land on a clean zone
> and BlephEx's single SPF record is never touched. A monitored inbox for
> replies and returns is still needed, but no longer gates sending.

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
- **Vercel answered non-GET requests to unmatched routes with HTTP 200.**
  Found 2026-08-20 while verifying a deploy. A `POST`, `PUT` or `DELETE` to a
  path with no route was handled by Next's `/_not-found` page and came back
  **200 with an HTML body**; `GET` correctly returned 404. Every caller here
  decides success with `if (!res.ok)`, so a mistyped endpoint looked like it
  worked and failed later as a confusing parse error.

  **It cannot be reproduced locally.** The same build under `next start`
  returns 404 on all four methods — it is Vercel's routing layer, not Next.
  That is the transferable lesson: routing and status-code behaviour is one of
  the things where local and deployed genuinely differ, so check the deployed
  site rather than assuming parity.

  Fixed by `src/app/api/[...unmatched]/route.ts`, a catch-all returning JSON
  404 for every method, so unmatched API paths never reach the fallback.
  Concrete routes still win — Next matches specific segments before a
  catch-all — and that was verified by calling every real endpoint with the
  catch-all in place. If it is ever touched, re-check `/api/orders/lookup` **by
  response body, not status**: it legitimately answers 404 too, and only the
  message distinguishes a working endpoint from a shadowed one.

---

## 13. Blocked on other people

Everything here needs someone outside this project. Nothing in the codebase
unblocks them.

### Payment credentials — the shared-account plan is dead

**Superseded 2026-08-19.** Everything previously written here assumed Quell would
share BlephEx's Authorize.net account and Stax merchant account, and worked
through the 24-hour key-rotation window that sharing would have required.

Ryan ruled it out: Quell and BlephEx are separate companies, kept and taxed
separately, and BlephEx's account is already awkward to disentangle because
OptiVize sales run through it too. **Quell gets its own merchant account and
therefore its own Authorize.net account.**

That removes three problems at once — no shared keys, no coordinated redeploy
with BlephEx.com, no 24-hour rotation window, and chargebacks land on Quell's
account rather than Ryan's.

What is left is a pricing decision, not an engineering one:

| Route | Cost | Notes |
|---|---|---|
| **New Stax account** | Ryan pays $489/mo on the existing BlephEx account; Nick has confirmed lower tiers exist and asked for a volume estimate | That $489 is BlephEx's number for different volume — **not a quote for Quell.** Do not compare against it. |
| **Authorize.net All-in-One** | ~$25/mo + 2.9% + 30¢, gateway and merchant account bundled | Excludes high-risk businesses, and it is unclear how they classify an OTC eye drop. Free to apply and they say which plan you qualify for. |

### Applying for the Authorize.net account

Decided 2026-08-20 to open a new account under Phillip's work email so
colleagues can be given access.

**Applying is free and there is no charge before approval** — the application
*is* the signup, and a decline leaves no account and no bill. There is no free
tier to create first; the only free thing is the developer sandbox, which
already exists and is what the site currently runs against.

**The $25/month starts on approval**, processing or not. That is the actual
cost risk, given fulfilment and the mailbox are still open and could take
weeks. *(The domain was one of these until 2026-08-20 — it is now done, §18.)*

**Apply anyway.** Whether an OTC drug making health claims is classified
high-risk is the largest unresolved unknown in the payment path, Authorize.net's
own pricing says card processing is "subject to eligibility", and finding out
takes one to five business days. A decline means a different processor with its
own lead time — far better known now than during launch week. Two or three
idle months is $50–75 to settle it.

> **Do not share one login.** Authorize.net supports multiple users with
> separate credentials under Account → User Administration. Create the account
> on an address that will outlast any one person, then add colleagues as
> individual users. That mailbox receives password resets and security alerts
> for a system that moves money, and a shared login leaves no audit trail.

Unconfirmed: exactly when billing starts relative to approval. Worth checking
during signup rather than assuming.

**Either route changes only four environment variables** — `AUTHORIZENET_API_LOGIN_ID`,
`AUTHORIZENET_TRANSACTION_KEY`, `AUTHORIZENET_SIGNATURE_KEY`,
`AUTHORIZENET_ENVIRONMENT` — plus registering the webhook URL in the new
account's merchant interface. Authorize.net is the *gateway*; the merchant
account is who holds the money. The code only ever talks to the gateway, so
swapping processors costs nothing. Switching *gateways* is the expensive move
and is not being contemplated.

Volume estimate for the application, derived from the site: ~$50 average order
(free shipping at $59 pulls orders to two bottles), highest ticket ~$300 at the
ten-unit cart cap, 100% card-not-present. Only *website* sales flow through this
account — Amazon processes its own, and Ryan expects Amazon to carry the volume.

### Ryan — the other questions

1. ~~Descriptor~~ — resolves with the separate account; Quell sets its own.
2. ~~How does a Quell order reach fulfilment — XPSShipper or by hand?~~
   **Answered 2026-08-20: by hand from the office**, and the app now supports
   it (§20). What is still needed from Ryan is **who** does the packing and
   posting, **which address** receives the order notifications, and **who
   receives returns** — the terms promise unopened returns for 30 days.
3. ~~What domain should Quell use?~~ **Answered 2026-08-20** — Dr. Rynerson
   already owned four Quell domains on the company GoDaddy account.
   `quelldrop.com` is live and canonical; the rest redirect to it (§18).
4. ~~Book separation~~ — answered, and it is what forced the separate account.
5. ~~New underwriting to add Quell~~ — moot; a new account means new underwriting
   regardless, and a signing officer with a personal guarantee is required.
6. **Revised 2026-08-20 — the sending half of this is solved.** The site will
   send as `orders@quelldrop.com`, whose DNS zone is Quell's own and empty, so
   **no SPF edit to meibum.com is needed and BlephEx's mail is never at risk**.
   What is still wanted from Ryan is a **monitored inbox** for customer replies
   and returns — a Microsoft 365 shared mailbox is free, needs no licence and
   access is grantable. It no longer blocks launch, but the 30-day returns
   promise means someone has to be reading something.
7. **New:** confirm the seller of record. Ryan confirmed Aurora Pharmaceuticals
   is an **LLC**, but not explicitly that Aurora — rather than BlephEx — is the
   selling entity. The site now says Aurora on that basis. The merchant account
   must be opened in the same name.

### Who is who

**Dr. Rynerson is the owner.** Confirmed 2026-08-19. That puts him on the
critical path for two unrelated things — the regulatory claim below, *and* the
merchant application, which needs a personal guarantee, SSN, date of birth,
home address and signature from an owner. Nothing about that application can be
completed without him personally, so his availability sets the timeline. Worth
one conversation covering both rather than two approaches weeks apart.

**Ryan** holds the business registration and banking, and is the route to
whoever operates the meibum.com domain and mail tenant.

### Merchant application — what is needed and from whom

Phillip drives the form; Dr. Rynerson enters the ownership section in person so
the SSN never routes through anyone else. Business banking details are
comparatively low-sensitivity — routing and account numbers are printed on every
cheque the company writes — so Ryan can send those normally.

| Needed | From |
|---|---|
| EIN | Ryan — it is on the IRS letter he already pulled |
| State and date of formation | Ryan — on the articles of organization; also public record. **Confirm it is Tennessee**; if the LLC was formed elsewhere, the Tennessee governing-law clause in the terms deserves a second look. |
| Business bank account | Ryan |
| SSN, DOB, home address, signature | Dr. Rynerson, in person |
| Volume, average ticket, product description, URL | Derivable from the site — see §13 above |

**All of it for Aurora Pharmaceuticals, LLC, not BlephEx.** Ryan handles both
companies daily and BlephEx is the reflex answer; if BlephEx's EIN or bank
account goes on the form, the deposits, the card descriptor and both legal
pages end up disagreeing with each other. Opening the account in Aurora's name
also settles the seller-of-record question definitively — the entity holding the
account is the entity taking the money.

### Not a developer question

**The redness claim.** The carton advertises redness relief; the Drug Facts
*Uses* panel does not cover it and the formula contains no vasoconstrictor.
This affects the printed carton, not just the site, and needs Dr. Rynerson or
a regulatory reviewer. The claim currently appears on the homepage hero and the
buy card.

**The legal pages** have been rewritten and reviewed — see §9. They still name
Authorize.net as the processor, which stays accurate whichever merchant account
is chosen, because Authorize.net remains the gateway either way.

**The carton says Aurora Pharmaceuticals, Inc.** Ryan confirmed against the IRS
letter and articles of organization that the entity is an **LLC**. The printed
suffix is therefore wrong on an FDA-regulated drug label, which is required to
identify the manufacturer accurately. Minor, but it belongs in the next print
run, and `MANUFACTURER` deliberately still mirrors the box rather than quietly
diverging from it.

---

## 14. Suggested order of work

1. ~~**Copy edits.**~~ Done 2026-08-18/19 — homepage, about, and both legal pages.
2. ~~**Push to a private GitHub repo.**~~ Done 2026-08-19 — see §0.
3. ~~**Review pass.**~~ Done 2026-08-19. Two real findings, both fixed and
   verified against the database: a login timing side channel that disclosed
   which emails had accounts, and a stale status read in `markCancelled` that
   could silently strand stock. Detail in the commit messages.
4. ~~**Deploy.**~~ Done 2026-08-20. GitHub is connected and pushes deploy; the
   live site was verified current against the URL. This unblocked the merchant
   application and any Meta ad review, both of which check the destination.
5. **Send Ryan and Dr. Rynerson the questions in §13.** The merchant account has
   the longest lead time. Two items are now the blockers rather than the
   domain: **fulfilment**, and **Aurora's ownership structure** — the
   application needs full details for every owner with 25%+ equity (§19), and
   nobody has confirmed whether Dr. Rynerson is the sole owner.
6. **`RESEND_API_KEY`** *and* fix `EMAIL_FROM` — it is still
   `orders@example.com`, a reserved domain that cannot send. The moment a Resend
   key appears, that becomes a live bug rather than a dormant one. **Send from
   `orders@quelldrop.com`**: the DKIM and SPF records go on Quell's own zone,
   which is empty, so meibum.com is never touched (§9).
6b. ~~**Domain.**~~ Done 2026-08-20 — `quelldrop.com` is live and canonical
   (§18). This unblocked the merchant application and Meta domain verification.
7. **Create the Upstash database and the Sentry project.** Both integrations are
   written and dormant; each needs an account and a credential, nothing more
   (§10).
8. ~~**Automated tests.**~~ Started 2026-08-20 — 122 tests over `lib/` and the
   new claim-order route (§16). The gap that remains is integration coverage:
   the checkout and webhook routes, and anything that needs a database.
9. **Production cutover:** production keys, webhook re-registered against the
   real host, `AUTHORIZENET_ENVIRONMENT=production`, real domain. Make the
   first production transaction a small real purchase and refund it —
   settlement has never been exercised, since the sandbox simulates the
   processor entirely.

### Smaller things left on the floor

- ~~`scripts\stop-local.ps1` kills every `node` process.~~ Fixed and verified
  2026-08-20 (§1).
- ~~Post-purchase account creation.~~ Built 2026-08-20 (§17).
- `TemplateNotice` was deleted when both legal banners went; if a banner is ever
  wanted again it needs rewriting.
- ~~`npm audit` reports 3 high-severity advisories from Prisma's
  `deepmerge-ts`.~~ Cleared 2026-08-20 — `npm audit` now reports zero. The
  advisory was a stack exhaustion in `deepmerge-ts <8`, reached only through
  `prisma` → `@prisma/config`, which is a **devDependency** that merges
  `prisma.config.ts` at CLI time; `@prisma/client` never depends on it, so it
  never shipped to production. `npm audit fix --force` wanted to *downgrade*
  Prisma 7.9.1 to 6.12.0, which is worse than the problem. Prisma pins
  `deepmerge-ts` at exactly `7.1.5` and 7.9.1 is the latest stable, so the fix
  is an `overrides` entry in `package.json` forcing `^8.0.1`. Safe because
  `@prisma/config` uses only the `deepmerge` export, which v8 still has —
  verified by running `prisma validate`, `prisma generate` and
  `prisma migrate status` afterwards, all of which load `prisma.config.ts`
  through the merge path. Remove the override once Prisma 8 lands: it drops
  `@prisma/config` from the tree entirely.
- The Meta ad account is not created. Groundwork in §15.

---

## 15. Advertising groundwork (Meta / Facebook)

Nothing built. Recorded so the constraints are known before money is spent.

**The site cannot receive paid traffic yet.** Checkout cannot complete without
production credentials, no receipt sends, and the deployed build is three days
stale. Driving paid clicks at that is money spent showing people a broken shop.

**Meta reviews the ad *and* the landing page as one unit** — its MARS system
scans the destination URL, so the site is in scope, not just the creative.

**The personal-attributes rule is the one that will bite.** Ads may not imply the
viewer has a medical condition. Naming the condition is fine; second-person
possession is not.

- Fine: "Preservative-free relief for dry eye"
- Not: "Do you suffer from dry eye?", "Tired of your dry eyes?"

> **The slogan is affected.** "Give **your** dry eye the bird" attaches a
> condition to the viewer, which is close to a textbook violation. Dropping one
> word — **"Give dry eye the bird"** — keeps the joke and the brand without
> asserting anything about the person watching. Use the possessive on packaging
> and the site; use the shorter form in ad copy. Secondary risk: "the bird" is a
> vulgar gesture — mild as written, riskier if the creative *shows* it.

**Account setup**, all free: a Facebook Page, Business Manager, an ad account,
a payment method, business verification (1–3 business days; the document name
must match the legal entity **exactly**, and the articles of organization Ryan
already pulled are an accepted document), and domain verification — **now
unblocked**: `quelldrop.com` went live 2026-08-20 and can be verified, where
`vercel.app` could not (§18).

**Register the business as Aurora Pharmaceuticals, LLC**, not Quell, not
BlephEx.

**The economics are tight and worth facing.** At $29.99 a bottle, contribution
is roughly $18–20 per single-unit order, while typical Facebook acquisition cost
for a $30 DTC health product runs $25–60. That is why Ryan expects Amazon to
carry volume. The one real lever is already built in: free shipping at $59 makes
a two-bottle order $59.98, so pointing ads at the 2-pack roughly doubles AOV and
contribution. If ads run at all, run them at the 2-pack.

**Pixel work, when it happens:** Meta Pixel plus the Conversions API — the
webhook already knows when payment succeeds, which is the right place to fire a
trustworthy server-side `Purchase`. But installing a pixel **contradicts the
privacy policy as written** (§9) and needs a consent mechanism the site does not
have. Policy and pixel ship together or not at all.

---

## 16. Tests

```
npm test          # once
npm run test:watch
```

Vitest, added 2026-08-20. **163 tests, all passing.** Config lives in
`vitest.config.mts` — note the extension: as `.ts` it is loaded as CommonJS and
Vite warns about ESM syntax on every run.

| File | What it covers |
|---|---|
| `lib/shipping.test.ts` | The `>=` boundary at exactly $59, the two-bottle free-shipping case the ad plan depends on, and the $36.94 total two real sandbox orders were charged |
| `lib/order-number.test.ts` | Format, the confusable characters the alphabet drops, the 20-character gateway cap, and the collision retry |
| `lib/inventory.test.ts` | That the decrement stays conditional (`gte`), and that an oversell logs rather than throws — throwing would make the gateway retry a webhook that already took a payment |
| `lib/rate-limit.test.ts` | The in-process limiter for real; the Upstash wire protocol and every fallback path against a mocked fetch |
| `lib/authorizenet.test.ts` | The BOM, HTTP-200 failures, field truncation, amount formatting, and every rejection case in signature verification |
| `lib/session.test.ts` | Cookie flags, tampered tokens, wrong secret, expiry, and `alg: none` |
| `lib/auth.test.ts` | bcrypt round-trip, cost factor, and that the decoy hash keeps the absent-user branch slow |
| `lib/admin.test.ts` | The allowlist, including that an unset `ADMIN_EMAILS` admits nobody |
| `lib/money.test.ts` | Cents-to-dollars, including negatives for refunds |
| `api/auth/claim-order/route.test.ts` | The new route (§17), including that it links exactly one order |
| `app/robots.test.ts` | Both indexing guards, including that a missing flag fails closed |
| `lib/carriers.test.ts` | Tracking URLs, and that an unknown carrier links nowhere rather than wrongly |
| `lib/fulfilment.test.ts` | Who receives order notifications, and the ADMIN_EMAILS fallback |
| `lib/email.test.ts` | The pack-this-order and shipping notices, including tracking |

### Two things to know before trusting them

**These are unit tests. Nothing here touches the database, the network or the
real gateway.** Every Prisma call and every `fetch` is mocked. The rate limiter
is the one exception — the in-process backend genuinely runs.

**Read the header comment in `authorizenet.test.ts` before adding to it.** The
two worst bugs this project has had — the element ordering and the signature key
derivation — were *both invisible to unit tests*, because a test that computes
an HMAC the same way the code does agrees with itself whichever reading is
wrong. Both facts were established against the live sandbox. The ordering test
is therefore a **regression latch on a verified fact, not a verification of
it**: it stops a refactor or an "alphabetise these keys" tidy-up from silently
undoing the fix. Do not let it create the impression the ordering is proven
correct here.

The suite was itself checked by mutation rather than assumed to work: changing
`>=` to `>` in `shippingCentsFor`, dropping the `gte` guard from the stock
decrement, and swapping two keys in the gateway request each made the relevant
tests fail, and only those.

### Resolution gotcha, if a new test file fails to import

`import 'server-only'` sits at the top of most of `lib/`. That package's default
export **throws on purpose** — it exists to fail the build when a server module
is pulled into a client bundle. Next satisfies it through the `react-server`
export condition; Vitest does not, so without help every server module fails to
import with *"This module cannot be imported from a Client Component module"*,
which reads like a bug in the code under test.

`vitest.config.mts` aliases `server-only` to the no-op entry the package ships
for that condition. **Setting `resolve.conditions` instead does not work** —
Vitest resolves test modules through its SSR pipeline, which reads
`ssr.resolve.conditions`, so the plain list is ignored and the failure looks
identical. That cost a cycle; do not undo the alias.

---

## 17. Post-purchase account creation

Built 2026-08-20. Guest checkout is the default path, so most buyers reach the
receipt page with no account — and that is the one moment their email and
address are already in hand, so signing up costs them a password and nothing
else.

- `src/components/PostPurchaseSignup.tsx` — the card on the receipt page.
- `src/app/api/auth/claim-order/route.ts` — creates the account and attaches
  the order.
- `src/app/checkout/success/page.tsx` renders it whenever there is an `order`
  in the query string.

### Why it is not a back door into someone else's order history

§8 records a deliberate choice: **signing in does not adopt guest orders that
share your email address**, because there is no email verification on signup, so
anyone could register with someone else's address and inherit their history.
This route does not weaken that.

It attaches **exactly one order** — the one whose number was presented — and the
proof required is order number *plus* email, the identical pair guest lookup
already accepts. Nobody gains access to anything they could not already read at
`/orders`. In particular it does **not** sweep up other orders sharing the
email: possession was proven for one order, so one order is what gets linked.
There is a test named for that property; if it ever passes while more than one
order is linked, the property is gone.

Other behaviours worth not rediscovering:

- A wrong email and a made-up order number return an **identical 404**, same as
  `/api/orders/lookup`. Distinguishing them would confirm which order numbers
  are real, and 8 characters is short enough that confirmation is the expensive
  half of the attack.
- An order already linked to an account is refused. So is an email that already
  has an account — holding the order number does not prove you hold the
  account, so it cannot attach the order to one it cannot authenticate as.
- The link is a conditional `updateMany` on `userId: null`, inside a
  transaction with the user creation. Two requests racing the same order cannot
  both claim it, and the loser's account is rolled back rather than left over
  promising an order it never got.
- Rate limited to **5 per hour per IP**, matching `/api/auth/register`. It
  creates accounts *and* is a second place an order number can be guessed at.
- Already signed in returns 409 rather than creating a second account.

### One UI trap, already hit and fixed

Creating the account signs the customer in and calls `router.refresh()`. The
first version decided *in the page* whether to render the card, so the refresh
re-ran the server component, found a session, and unmounted the component at
the exact moment it had something to say — the card silently vanished instead of
confirming. The page now always renders it when there is an order number and
passes `signedIn` as a prop, so the component survives the refresh and keeps its
own state. Do not move that condition back up into the page.

### Verified against the real system, not just mocks

Run locally against the real Postgres on 2026-08-20, with **two guest orders
sharing one email**:

| Check | Result |
|---|---|
| Card shown to a guest, hidden when signed in | both correct |
| Wrong email | generic 404 message, no account created |
| Correct email | account created, bcrypt `$2b$10$` hash |
| Order linked | `Q-CLAIM001` → new user id |
| **Second order, same email** | **`userId` still null** — §8 holds |
| `/account` | shows one order, not two |
| Already-linked order | 409 |
| Already signed in | 409 |
| Console | no errors |
| 375px | no horizontal overflow with the form open |

**Not exercised:** the real path into this page. Checkout cannot complete on
localhost (§6), so the orders were written directly to the database. The first
production purchase is the first time the whole sequence runs for real.

---

## 18. The domain

**Live on https://quelldrop.com as of 2026-08-20** — see the end of this
section for the verified state. The reasoning that led there is kept below so
it is not re-derived from scratch.

### Where to buy it

**On the company's existing GoDaddy / Name.com account.** Confirmed 2026-08-20
that it is a *company* account, not a personal one, which is what makes this
the right answer: Dr. Rynerson owns both BlephEx and Aurora, Phillip operates
the site now but the rights go to Dr. Rynerson, and buying it on an account the
company already controls means **there is never a transfer to do.** Phillip
takes delegate access for day-to-day DNS.

> **A correction worth keeping.** An earlier version of this advice said "not
> GoDaddy." That was overstated. The real concern was never the registrar — it
> was not putting Quell's records inside *meibum.com's zone*, where a botched
> SPF edit breaks BlephEx's mail. That risk comes from sharing a **domain**,
> not a **registrar**. A separate domain has its own zone and carries none of
> it.

**Never register it personally and plan to transfer later.** Most registrars
lock transfers for **60 days** after registration and after a registrant
change, so "I'll move it later" can mean two months of being unable to. The
classic failure is a personal registration on a personal card that nobody can
renew once that person moves on.

### Registration settings — all of these matter

| Setting | Value | Why |
|---|---|---|
| Registrant Organization | **Aurora Pharmaceuticals, LLC** | The legally meaningful field. Must match the merchant application, the bank and the site's legal pages |
| Account email | A **company-controlled** address, not a personal one | Access has to survive any one person |
| Payment method | **Company card** | A personal card fails at renewal after handover |
| Auto-renew, registrar lock, WHOIS privacy | All on | Expiry takes down site *and* email at once; privacy keeps the owner's details off scrapers |
| 2FA | On, recovery codes where the company can reach them | This account controls the brand |
| Term | 2–3 years | Cheap, removes a renewal cliff, reads as more established to an underwriter |

Get the owner's legal name letter-perfect. It has been written both
"Rynerson" and "Meynerson" in conversation; confirm the spelling before
anything legal is typed, since it must match across domain, merchant account
and bank.

### Recommendation: quelleyedrops.com, with quelldrops.com as backup

Three reasons:

1. **"Quell" alone does not survive the phone.** It is a homophone for
   "quill". The carton prints a phone number and customers call. "Quell eye
   drops dot com" is self-correcting; "quell dot com" gets spelled wrong.
2. **There is already an established Quell in health** — `quellrelief.com` is
   a nerve-stimulation pain wearable, and `quellfitness.com` is a third Quell.
   An eye-specific domain separates Quell from a different medical product,
   which helps customers and reduces trademark friction.
3. **It matches how people search.** Amazon is expected to carry volume, so
   the site is partly a credential someone checks after seeing the product.
   "Quell eye drops" is the phrase they type.

It also feeds two open decisions: a clean **DBA** ("Quell Eye Drops") for the
merchant application, and a **statement descriptor** customers recognise —
`QUELL EYE DROPS` produces far fewer "what is this charge?" chargebacks than
`AURORA PHARM`.

**Avoid anything containing `rx`.** It looks appealing for a pharma product
and would contradict the product's own regulatory status: Quell is OTC, with
no prescription gating anywhere in the app by design (§2).

### Availability, checked 2026-08-20

Checked by NS lookup. **A nameserver record proves a domain is registered; its
absence strongly suggests available but is not proof** — confirm in the
registrar's cart, and watch for premium pricing on the short ones.

**Taken:** `quell.com`, `quell.co`, `getquell.com`, `tryquell.com`,
`myquell.com`, `usequell.com`, `buyquell.com`, `shopquell.com`,
`quelleye.com`, `quelleyes.com`, `quelltears.com`, `quellhealth.com`,
`quellcare.com`

**Appeared free:** `quelleyedrops.com`, `quelldrops.com`, `quelleyecare.com`,
`quelldryeye.com`, `quelleyedrop.com`, `quelleyerelief.com`, `quellotc.com`

> **Ask Ryan first: does the company already own a Quell domain?**
> `quelleye.com`, `quelleyes.com`, `quelltears.com`, `getquell.com` and
> `tryquell.com` are all registered on GoDaddy nameservers. Most are probably
> squatters, but someone at BlephEx or Aurora may have grabbed one and
> forgotten — `quelleye.com` would be a genuinely good domain to already own.
> Not conclusive either way: meibum.com sits on `ns57`/`ns58` and these are on
> different numbers, but GoDaddy assigns those semi-randomly.

### Once it is bought

1. Add it in Vercel, project `quell`, Settings then Domains.
2. **Keep DNS at the registrar**, adding Vercel's records, rather than moving
   nameservers — the same zone is needed shortly for Resend's DKIM records.
3. **Update `NEXT_PUBLIC_APP_URL` in the Vercel dashboard** and redeploy. Not
   optional: it builds the Authorize.net return URL, and it is what flips
   `robots.ts` from `Disallow: /` to allowing indexing.
4. Confirm HTTPS serves on the real domain and the vercel.app URL still works.
5. Record registrar, account and renewal date here so it is not tribal
   knowledge.

### The account-email question — mostly moot now

**The registrar half solved itself:** the domains were already on the company
GoDaddy account, so no new registrar account was created and no personal
address is attached to one.

What remains is the **Authorize.net** account email, which should be an address
that outlasts any one person — password resets and security alerts for a system
that moves money should not land in an individual's inbox. Any
company-controlled address does, e.g. `admin@meibum.com`; that is a far smaller
ask than a whole new shared mailbox.

Separately, and no longer connected to the above: the site will *send* as
`orders@quelldrop.com` (§9), and a monitored inbox is still wanted for customer
replies and returns.

---


### Live on the real domain, 2026-08-20

**https://quelldrop.com is the canonical address and serves the site.** DNS was
pointed at Vercel and verified end to end; the vercel.app URL still works as a
fallback and is deliberately not redirected.

Dr. Rynerson holds all four domains on the company GoDaddy account. Auto-renew
is on.

| Domain | Expires | Role |
|---|---|---|
| **quelldrop.com** | 2027-04-11 | **Canonical** |
| quelleye.com | ⚠️ 2026-10-09 | 308 → quelldrop.com |
| quelleyes.com | ⚠️ 2026-10-09 | 308 → quelldrop.com |
| quelltears.com | 2028-01-28 | 308 → quelldrop.com |

> Note the two October expiries. Auto-renew is on, but a card that expires
> before then fails silently — the renewal notice is the only warning.

**DNS at GoDaddy, not Vercel nameservers.** Deliberate: the same zone is needed
for Resend's DKIM records when email is set up. Each domain has two apex A
records — `216.198.79.1` and `64.29.17.1` — and keeps its original
`CNAME www -> <domain>` plus GoDaddy's `_domainconnect` record, both of which
are fine and were left alone.

> Vercel's `domains inspect` recommends `76.76.21.21`, but `domains verify`
> returns that as **rank 2**. Rank 1 for this account is the pair above. Use
> the verify output, not inspect.

### Certificates do not issue on their own — this will bite again

**Vercel verified each domain's DNS as correct and then did not issue a
certificate for it.** `quelldrop.com` served a certificate whose only SAN was
`www.quelldrop.com`, so typing the bare domain produced a browser security
warning that looked like a DNS mistake and was not one. The same thing happened
to all three secondary domains.

The fix is one command per domain, covering apex and www together:

```
npx vercel certs issue quelldrop.com www.quelldrop.com
```

Check what is actually being served before believing a warning:

```
echo | openssl s_client -connect quelldrop.com:443 -servername quelldrop.com \
  | openssl x509 -noout -subject -ext subjectAltName
```

If the SAN list does not contain the exact host being typed, it is a missing
certificate, not a DNS problem.

### Verified, not assumed

All eight hosts (four apex, four www) return `configured_correctly` from
Vercel, serve valid TLS (`ssl_verify_result=0`), and the seven aliases all 308
to `quelldrop.com` with the path preserved. Confirmed in a real browser:
`quelleye.com/drug-facts` lands on `quelldrop.com/drug-facts` with the page
intact and no console errors. Every public route returns 200 on the new domain,
`/admin/orders` still 404s signed out, and `robots.txt` still returns
`Disallow: /`.

### Indexing is a separate switch from the URL

**Fixed 2026-08-20.** `NEXT_PUBLIC_APP_URL` is now `https://quelldrop.com` in
Vercel, and indexing is gated by its own flag.

The original design decided indexing from that value's hostname, which coupled
two unrelated questions and produced a measured defect. With the variable left
on the old host so the site would stay unindexed, quelldrop.com was serving:

```
<link rel="canonical" href="https://quell-six.vercel.app">
og:url    -> https://quell-six.vercel.app
og:image  -> https://quell-six.vercel.app
sitemap.xml listing only vercel.app URLs
```

So every shared link previewed as vercel.app, and the canonical tag pointed
search engines at a host that is itself `Disallow`.

Indexing now needs **two independent guards**, and either one alone blocks it:

- `ALLOW_INDEXING` must be exactly `"true"`. Unset or anything else disallows,
  so a missing variable can never quietly publish the site.
- The staging-host check stays as belt and braces: a `*.vercel.app` or
  localhost origin is never indexable even with the flag on, so a preview
  deployment cannot leak into search results.

**To go live in search: set `ALLOW_INDEXING=true` in Vercel and redeploy.** Do
it when the store can actually sell — env changes are baked into a deployment
and do not reach running functions.

Verified on the live site after the change: canonical, `og:url`, `og:image` and
every sitemap entry are on `quelldrop.com`, while `robots.txt` still returns
`Disallow: /`.

> **`NEXT_PUBLIC_` variables cannot use sensitive visibility on Production.**
> `vercel env add` defaults to sensitive and fails with a confusing message
> about framework prefixes. It needs `--visibility config --no-sensitive`. And
> still never pipe the value — use `--value` (§12).

---

## 19. Authorize.net application — what the form actually asks

The All-in-One plan ($25/mo + 2.9% + 30¢) is the right one, because Quell needs
its own merchant account. "Gateway Only" would be the pick if the Stax route
had been taken instead. Pricing confirmed against the live plan page 2026-08-20.

**Clicking the plan *is* the application.** There is no account to create and
configure afterwards — you are approved and have one, or declined and have
nothing (and no bill). So do not start it until Dr. Rynerson can sit down with
you; the ownership section cannot be completed by anyone else and a
half-finished application cannot be parked.

### Things the form asks that were not on the earlier checklist

- **"Complete information on all owners with 25% or greater equity."** A
  Treasury requirement, and it is plural. **Aurora's ownership structure has
  never been established** — the assumption has been Dr. Rynerson alone. If
  there is a second 25%+ owner, their name, address, DOB and SSN are needed
  too. Confirm before sitting down or the application stalls.
- **"Primary owner must be a US Citizen with a Social Security Number."**
  Confirms this is Dr. Rynerson's section, not Phillip's.
- **Doing Business As.** Where "Quell Eye Drops" belongs, with Aurora
  Pharmaceuticals, LLC as the legal name. Tends to drive the card statement
  descriptor — decide it deliberately here rather than discovering it on
  customers' statements.
- **Business Address (No PO Boxes).** Aurora's address is *330 Franklin Road,
  Suite 135A, **#117***. That `#117` reads like a mailbox within a suite.
  Check with Ryan it will not trip the no-PO-box rule.
- **Industry / product description** — *"so Authorize.net can match your
  business to an appropriate acquiring bank."* **This is the high-risk
  determination**, and how an OTC drug making health claims gets categorised
  is the single biggest unknown in the payment path. Word it deliberately.
- **"I confirm that I am authorized to submit this application."** If Phillip
  clicks submit for Aurora, Ryan and Dr. Rynerson need to have actually said so.

### Confirm before committing

The plan page lists Virtual Terminal features, not API ones. Quell uses
**Accept Hosted**, **webhooks**, and the **webhook Signature Key** — all
standard gateway features, none of them mentioned on that page. Worth one call
to 1-888-323-4289: *"Does All-in-One include full API access — Accept Hosted,
webhooks, and the webhook signature key?"*

Also worth noting: the **redness claim** (§9) is on the homepage hero and the
buy card, and an underwriter reviewing a health product will read it while
deciding whether Quell is high-risk. It is no longer only a packaging issue.

**Fees at real cart totals:** one bottle ($36.94) costs $1.37; two bottles
($59.98) costs $2.04. Against roughly $18–20 contribution on a single bottle
that is comfortable, and about two orders a month covers the $25.

**Code impact of going live: four environment variables plus registering the
webhook against the new account.** Authorize.net stays the gateway either way.

---

## 20. Fulfilment — packed by hand from the office

Decided 2026-08-20 and built the same day. Orders are picked, packed and posted
by hand rather than pushed into XPSShipper. That is the right shape at this
volume — Amazon is expected to carry the volume and the website is low-volume,
so paying for an integration would buy nothing.

Two things had to exist for it to actually work, and neither did.

### The office is now told when an order is paid

Before this, the paid webhook emailed the **customer** a confirmation and
stopped. The only signal that something needed shipping was remembering to open
`/admin/orders`. The first missed order is a week-late shipment and an
apologetic email.

A paid order now emails everyone in `FULFILMENT_EMAILS`. The message is written
to be *worked from*, not read: units to pack, items, the full shipping address,
the customer's email, and a link into admin. It prints as a usable packing slip.

- **One message per recipient**, not one message with several addresses, so
  nobody can reply-all into a customer thread and no colleague's address is
  disclosed to the others.
- **Inside the same status guard as the confirmation**, so a replayed webhook
  cannot make the office pack the same order twice.
- **Failures are logged, never thrown.** The customer has paid; a mail problem
  must not fail the webhook and risk Authorize.net reprocessing the payment.
  The order is still in `/admin/orders` either way, so the worst case is a
  missed nudge rather than a lost order.
- `FULFILMENT_EMAILS` is comma separated and **falls back to `ADMIN_EMAILS`**,
  so notifications work the moment email is configured without a second
  variable having to be remembered. With neither set it logs loudly, naming the
  order — a paid order nobody was told about is the worst outcome here.

### Tracking numbers reach the customer

There was no tracking field anywhere. Marking an order shipped emailed the
customer a notice containing nothing they could act on, which for hand-packed
orders generates a support request per order.

`Order` now carries `shippedAt`, `trackingCarrier` and `trackingNumber`. The
admin form takes a carrier and a number when marking shipped, and the customer's
notice carries both as a clickable link.

**Tracking is optional throughout.** The number is not always to hand when
someone clicks, and refusing to ship without it would leave orders stuck in the
wrong state. Without one, the email reads exactly as it did before.

> **`lib/carriers.ts` returns null for an unrecognised carrier, on purpose.**
> The email then shows the bare number with no link. A link to the *wrong*
> carrier's site returns "not found", and the customer concludes the parcel is
> lost — worse than no link at all. Carrier is only stored alongside a number,
> and an invalid key is dropped rather than saved.

Carrier detection is deliberately **not** inferred from the number's shape.
USPS and FedEx formats overlap and both have changed; the person who packed the
parcel already knows which carrier they used, so the form asks.

### Verified against the real system

Run against the local Postgres and the real admin UI, not just mocks:

| Check | Result |
|---|---|
| Notification renders for every configured recipient | both, with correct address and totals |
| Marking shipped through the form | `status=shipped`, `shippedAt` set |
| A deliberately whitespace-padded UPS number | stored trimmed, carrier `ups` |
| Customer email | carried the working UPS tracking link |
| No recipients configured | logged loudly, naming the order |

### Nothing sends yet

`RESEND_API_KEY` is still unset, so all of this prints to the server console
instead of being delivered. It starts working when Resend is configured and
`EMAIL_FROM` becomes `orders@quelldrop.com` (§9) — those genuinely ship
together.

### Migrations do not run on deploy

**The build is `prisma generate && next build`. It does not run
`prisma migrate deploy`.** Pushing a schema change without applying it to Neon
first would deploy code whose queries reference columns that do not exist.

The order used for this change, and the one to repeat:

1. Apply the migration to Neon **first** — additive, nullable columns are safe
   ahead of the code, which simply ignores them.
2. Then push.

To run a migration against production, pull the connection string, use it for
one command, and delete it again:

```
npx vercel env pull <tmpfile> --environment production
DATABASE_URL="<from tmpfile>" npx prisma migrate deploy
```

Delete the file immediately afterwards — it contains every production secret,
not just the database URL.

### Still open, and it is a people question

- **Who** packs and posts the parcels.
- **Which address** receives the order notifications. An internal distribution
  list is better than one person's mailbox.
- **Who receives returns.** The terms accept unopened returns for 30 days, so
  someone has to be at the other end of that.
