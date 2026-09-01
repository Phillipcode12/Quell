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

> **The production account is not settled.** The application was submitted
> 2026-08-20, and Authorize.net **referred it to Zen Payments** — a high-risk
> ISO — rather than underwriting it directly. Nothing has been signed. **Read
> §21 before acting on anything from them**, including the question that decides
> whether going live is ten minutes or a rebuild: does the account keep the
> Authorize.net gateway?

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
src/lib/shipping.ts          Free over $59, else flat $10.00, US only
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

**THE WHOLE ORDER CHAIN, INCLUDING EMAIL, WAS RE-PROVEN 2026-08-31** on the
live site with Resend configured — the first time the receipt and the pack
notice have ever actually been delivered. Detail in §20.

**Still not exercised:** settlement. The sandbox simulates the processor
entirely, so money has never actually moved. The first production transaction
should be a small real purchase you make and then refund.

---

## 9. Open questions and placeholders

| Item | Status |
|---|---|
| `$10.00` shipping rate | **Settled 2026-09-01 — Phillip set it.** It was $6.95, which was my assumption rather than a quoted rate. The two sandbox orders of 2026-08-17 were charged $36.94 under the old figure, so the records of them below keep that number; a single-bottle order is now $39.99. |
| `15%` subscription discount | **My placeholder**, and now dormant — subscriptions are deferred. Still a margin decision before they return. |
| Authorize.net credentials | **Sandbox is done and working. Applied 2026-08-20 (§19); Authorize.net referred it to Zen Payments, a high-risk ISO — nothing signed, see §21.** Production credentials wait on a **new merchant account** — Quell is no longer sharing BlephEx's. See §13. |
| Merchant account | **Decided 2026-08-19: Quell gets its own.** Ryan ruled out sharing BlephEx's Stax account because the two companies are taxed and reported separately. Open: Stax's low-volume tier (Nick is quoting) vs Authorize.net's own All-in-One at ~$25/mo + 2.9% + 30¢. Either way the code is unchanged — Authorize.net stays the gateway. |
| Domain | **Done 2026-08-20 — https://quelldrop.com is live and canonical** (§18). The other three redirect to it. `NEXT_PUBLIC_APP_URL` is set to `https://quelldrop.com` in Vercel production, so canonical tags, OpenGraph URLs and the sitemap are all correct; indexing is held off separately by `ALLOW_INDEXING`, which is what `robots.txt` reflects. *(Corrected 2026-08-28 — this row previously said the variable still pointed at the vercel.app host, which was no longer true. Verified against `vercel env ls production` and the live canonical tag.)* |
| Customer email address | **Settled and working, 2026-08-31 (§20).** Quell has no mailbox of its own yet, so Phillip's is used for everything inbound: `FULFILMENT_EMAILS` and `EMAIL_REPLY_TO` are both `Phillip.moore@meibum.com`, in `.env` and in Vercel production. **The sender is unchanged and must stay `orders@quelldrop.com`** — see the From/Reply-To split below, which is what keeps meibum.com out of it. `EMAIL_FROM` was still `orders@example.com` in Vercel until 2026-08-31 and has been corrected. **The sender should now be `orders@quelldrop.com`, not `Quell@meibum.com`** — Quell owns its own domain, whose DNS zone has no MX and no TXT records at all, so Resend's DKIM and SPF records go onto a clean zone. **This removes the meibum.com SPF hazard entirely**: no edit to BlephEx's single existing SPF record, so no way to break their mail. A Quell-branded mailbox is still wanted eventually — receipts arriving from `orders@quelldrop.com` but answered by a person at meibum.com is a seam customers can see — but nothing is blocked on it. |
| Fulfilment | **Decided 2026-08-20: packed and posted by hand from the office**, not pushed to XPSShipper. The app now supports that — a paid order emails a fulfilment list, and marking it shipped captures a carrier and tracking number that reach the customer (§20). What is still open is the human side: **who** packs and posts, and who receives returns, since the terms accept unopened returns for 30 days. |
| Card statement descriptor | **Resolves with the separate merchant account** — Quell sets its own rather than showing BlephEx's. Still needs choosing, and it affects packaging and email copy, so it has the longest lead time. |
| `$29.99` price | Matches the Dry Eye Rescue retail listing as of 2026-08-13. |
| Brand teal | Site uses `#00A7B5`; print file converts to `#4AC1A8`. One token change if you want to match print. |
| Legal pages | **Rewritten 2026-08-18/19 and reviewed.** No placeholders, no template banners, every claim checked against the code. Three false statements were fixed: the cart is `localStorage` and never reaches the server, there is no marketing email, and the site runs no analytics at all — the policy now says so. Governing law is **Tennessee**; shipping is **US-only**, matching `SHIPPABLE_COUNTRIES`. Note the privacy policy now states the site uses no advertising trackers — **installing a Meta Pixel makes that false and must be changed in the same release.** |
| Returns policy | **Decided 2026-08-19.** Unopened, original packaging, 30 days, refund of product price; original shipping not refunded. Opened drops never returnable (sterility). Damaged, incorrect or broken-seal orders replaced free within 30 days. Refunds are achievable today through the Authorize.net merchant interface; store credit was considered and dropped because no credit or coupon mechanism exists anywhere in the codebase. |
| Seller of record | **Changed 2026-08-19 to Aurora Pharmaceuticals, LLC**, confirmed by Ryan against the IRS letter and articles of organization. `COMPANY` now carries Aurora's name and its 330 Franklin Road address; the phone is shared with BlephEx and stays. `MANUFACTURER` is deliberately left as **Aurora Pharmaceuticals, Inc** because that is what the carton prints — the suffix is wrong on the box and is a packaging correction, not a site edit. |
| **Front-panel claims** | The carton advertises **redness relief**, but the Drug Facts *Uses* section does not cover it and the formula has no vasoconstrictor. FDA expects front-panel claims to match Uses. Affects packaging, not just the site. Needs regulatory review. |

---

### From and Reply-To are different questions — 2026-08-31

**The From address must be a domain verified with the mail provider**, because
that is what SPF and DKIM authenticate. That is `orders@quelldrop.com` and it
should not change: sending as `meibum.com` would mean editing BlephEx's live
SPF record, and a domain may hold only one. Theirs is
`v=spf1 include:spf.protection.outlook.com -all` — a hard fail, on mail that
runs the company. A typo there breaks BlephEx's email, company-wide, with
nothing pointing at DNS as the cause.

**Reply-To carries no such requirement.** It is a header saying where answers
go. Any address, any domain, no authentication, no DNS. So receipts send as
Quell and replies land in a mailbox that exists, with meibum.com's zone
untouched — which is the whole reason the two are configured separately.

This matters because **quelldrop.com has no MX record and cannot receive mail**
(verified 2026-08-31: no MX, no TXT, nameservers at GoDaddy). Without a
Reply-To, a customer answering their receipt writes into a void and nobody ever
learns they tried.

`EMAIL_REPLY_TO` is omitted from the payload entirely when unset rather than
sent empty, and `lib/email.test.ts` covers both. Checked by mutation: deleting
the header from the request failed 2 tests.

---

### Passwords — show/hide and confirm, 2026-08-31

`components/PasswordField.tsx` is a password input with a reveal toggle, used
by `AuthForm` (login and registration) and `ResetPasswordForm`. Registration
now asks for the password twice, matching what the reset form already did.

Three things in it are load-bearing:

- **`type="button"` on the toggle.** A bare `<button>` inside a form defaults
  to submit, so revealing the password would submit the form.
- **`autoComplete` is passed through, never overridden** — password managers
  key off `new-password` versus `current-password` to decide between offering
  to generate and offering to fill.
- **The confirmation is checked in the client and stripped before the request.**
  It is a typing aid, not a credential; the API only ever receives one
  password, so there is nothing for it to compare.

Verified in a browser rather than assumed: revealing flips the input to text
and the label to "Hide password" without submitting the form, and a mismatch
shows the error with no API call made at all.

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
- **Vercel "Sensitive" environment variables are write-only, and `vercel env
  add` defaults to them.** Nothing can read the value back — not the
  dashboard, not `vercel env pull`, not the CLI. A pull returns the literal
  string `[SENSITIVE]` for every one of them, which is 11 characters, so even
  a length check tells you nothing. **A wrong value is therefore
  undiagnosable**: the only move is to overwrite and retest, and any evidence
  of what was actually stored is destroyed in the process.

  This cost a cycle on 2026-08-31. `EMAIL_REPLY_TO` was set, `env ls` showed
  it present, and replies still went to the unmonitored `orders@quelldrop.com`
  — with no way to see what was stored. Re-adding it readably and redeploying
  fixed it, but which of the two was the cause can no longer be established.

  **Store as Sensitive only what is genuinely a credential.** An email address
  that appears in the headers of every message sent is not a secret, and making
  it unreadable buys nothing while costing the ability to verify it:

  ```
  vercel env add EMAIL_REPLY_TO production --value '...' --no-sensitive --force
  ```

  `RESEND_API_KEY`, `AUTH_SECRET`, `DATABASE_URL` and the Authorize.net keys
  stay Sensitive. `EMAIL_FROM`, `EMAIL_REPLY_TO` and `FULFILMENT_EMAILS` are
  Config, and were each verified against the expected string after the change.
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

**These are modelled from pricing, not measured — the site has never taken a
real order.** Normal for a new account, but say "projected" if asked. The
arithmetic: 1 bottle = $36.94, 2 bottles = $59.98 (clears the $59 threshold),
10 bottles = $299.90. A second bottle costs only $23.04 more than a one-bottle
order total, which pulls a large share of orders to two and puts the average
near $51.

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
| **Physical business address** | **Answered 2026-08-20: 500 Wilson Pike Circle, Suite 103, Brentwood, TN 37027** — the address on the IRS EIN record and a real leased office, shared with the Eye Center of Brentwood (§19). This goes in the no-PO-boxes field. **Not** the carton address, which is a UPS Store mailbox |
| The address on the articles of organization | Ryan — unchecked. Tidiness rather than a blocker: the EIN record is the one an underwriter matches against, and it already shows Wilson Pike |
| State and date of formation | Ryan — on the articles of organization; also public record. **Confirm it is Tennessee**; if the LLC was formed elsewhere, the Tennessee governing-law clause in the terms deserves a second look. |
| Business bank account | Ryan |
| SSN, DOB, home address, signature | Dr. Rynerson, in person. **Sole owner, confirmed 2026-08-20** — one person to disclose, no second owner section |
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
5. **Decide whether to proceed with Zen Payments (§21).** The application was
   submitted 2026-08-20 and referred to a high-risk ISO; nothing is signed. Get
   the rate, the reserve, the contract terms, and above all **whether the
   Authorize.net gateway is retained** — in writing. Chase Nick's Stax quote in
   parallel, since this changes that comparison.
5b. **Send Ryan the remaining questions in §13.** **Fulfilment** is the open
   one: who packs and posts, which address receives the order notifications,
   and who receives returns. *(Ownership is answered — Dr. Rynerson is the sole
   owner of Aurora.)*
6. ~~**`RESEND_API_KEY` and the sender address.**~~ **Done 2026-08-31 —
   email works, verified against a real inbox and Resend's delivery log (§20).**
   `EMAIL_FROM` is `orders@quelldrop.com` (it was the unsendable
   `orders@example.com`), and `FULFILMENT_EMAILS` and `EMAIL_REPLY_TO` both
   point at `Phillip.moore@meibum.com`, so paid orders and customer replies
   reach a mailbox that exists. **Not yet exercised: the order emails
   themselves** — the receipt and the pack notice have never been sent by a
   real order, only rendered (`npx tsx scripts/preview-emails.ts`).
6b. ~~**Domain.**~~ Done 2026-08-20 — `quelldrop.com` is live and canonical
   (§18). This unblocked the merchant application and Meta domain verification.
7. **Create the Upstash database and the Sentry project.** Both integrations are
   written and dormant; each needs an account and a credential, nothing more
   (§10).
8. ~~**Automated tests.**~~ Started 2026-08-20, 215 tests as of 2026-08-31
   (§16). The webhook route — the money path — was covered on 2026-08-31 and
   the tests were checked by mutation; writing them found and fixed a real
   defect in how the two post-payment emails were sequenced. **The gap that
   remains is anything needing a real database**: every Prisma call in the
   suite is still mocked.
9. **Production cutover:** production keys, webhook re-registered against the
   real host, `AUTHORIZENET_ENVIRONMENT=production`, real domain. Make the
   first production transaction a small real purchase and refund it —
   settlement has never been exercised, since the sandbox simulates the
   processor entirely.

### Storefront review — the agreed list, 2026-08-31

A full pass over the live site produced seven items. **Phillip agreed to all
seven**, to be worked in this order. They are conversion and trust work, not
defects: nothing here is broken.

1. ~~**The buy control is four screens down.**~~ **Done 2026-08-31.** The
   homepage runs to ~9,350px on a phone — about twelve screens — and the buy
   panel did not start until 3,214px. Someone who arrived already sold had to
   scroll past two thousand pixels of science to spend money. The hero now
   carries the price and a real add-to-cart (`home/HeroBuy.tsx`); the panel
   below keeps the quantity selector, stock badge and detail. **No second
   quantity selector in the hero on purpose** — two on one page is a question
   asked twice, and the cart can change quantity anyway.
2. **No social proof anywhere.** No reviews, ratings, testimonials or
   practitioner endorsement. For a $29.99 unknown-brand OTC drug bought online
   this is the largest single gap on the site, and it is worth more than any
   design change. **Blocked on real content** — it cannot be invented, and on a
   drug site a fabricated testimonial is a regulatory problem as well as a
   dishonest one. Three genuine customer quotes would do.
3. **Nothing prompts the second bottle.** Free shipping begins at $59.00 and the
   product is $29.99, so the threshold is built for a two-pack that is never
   offered. The cart already computes "add $29.01 more"; the same prompt belongs
   at the buy panel.
4. **"Milky brown solution" is buried** in the FAQ and step 3 of How to Use. It
   is the most likely "is this spoiled?" support call and return on this
   product, and it belongs beside the buy button.
5. **The returns policy is not visible where the decision is made.** Free
   shipping shows at the buy panel; 30-day returns do not. First purchase from
   an unfamiliar brand is exactly when that matters.
6. **The helper nudge covers the hero's "Why it works" button** on a phone. Same
   family as the checkout-button defect already fixed — see §22.
7. **Two credibility snags on /about.** Aurora Pharmaceuticals **LLC** owns the
   trademark while Aurora Pharmaceuticals **Inc** manufactures — accurate, and
   recorded in §9, but one sentence apart it reads as a typo. And "Online:
   meibum.com" sends Quell customers to BlephEx's site, the same brand seam as
   the email address.

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

Vitest, added 2026-08-20. **218 tests on `main`, all passing.** Config lives in
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
| `api/webhooks/authorizenet/route.test.ts` | **The money path.** Every refusal before a payload is read, the events it ignores, the amount-mismatch guard, the pending-scoped update that makes a replay safe, and that every downstream failure still answers 200 |
| `components/SiteHelper.test.ts` | That the helper can only say reviewed sentences, and stays off the checkout form (§22) |
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

### The webhook tests, added 2026-08-31

**This was the largest gap in the suite and the least comfortable one.** The
route decides whether money that has already moved is recorded, whether stock
leaves the shelf, and whether anyone is told to pack a box — and the only
evidence it behaved was one live sandbox run and one accidental replay (§8).

21 tests now cover its decisions. **Still unit tests**: Prisma, the gateway
lookup, stock and mail are mocked, so the database is not covered and neither
is the signature maths, which no unit test can prove (see above). Signature
verification is stubbed deliberately — what is under test is what the route
does with the answer.

**Checked by mutation, not assumed.** Four guarantees were each broken in turn
and the suite caught all four:

| Mutation | Tests that failed |
|---|---|
| Drop `status: 'pending'` from the update — the replay defence | 2 |
| Stop comparing the charged amount to the order total | 1 |
| Await the two sends in sequence rather than settling them apart | 1 |
| Return 500 on a downstream failure, so the gateway would retry | 3 |

**Writing them found one real defect, since fixed.** The confirmation and the
office notification were awaited in sequence, so a rejected send of the first
would skip the second entirely — mail sending is written not to throw on a
rejected *send*, but a DNS failure or socket reset rejects the fetch itself.
The asymmetry is the point: a missing receipt is a support call, an unshipped
paid order that has been charged for is a refund. They are now settled
independently inside the same replay guard, and each failure is logged by name.

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

- ~~**"Complete information on all owners with 25% or greater equity."**~~
  **Answered 2026-08-20: Dr. Rynerson is the sole owner of Aurora.** The
  Treasury requirement is plural, but there is only one person to disclose, so
  no second set of SSN/DOB details is needed. This was the item most likely to
  stall the application mid-form; it no longer does.
- **"Primary owner must be a US Citizen with a Social Security Number."**
  Confirms this is Dr. Rynerson's section, not Phillip's.
- **Doing Business As.** Where "Quell Eye Drops" belongs, with Aurora
  Pharmaceuticals, LLC as the legal name. Tends to drive the card statement
  descriptor — decide it deliberately here rather than discovering it on
  customers' statements.
- **Business Address (No PO Boxes) — CONFIRMED PROBLEM, do not use the address
  on the carton.** Researched 2026-08-20: **330 Franklin Road, Suite 135A is
  The UPS Store** in Brentwood Place Shopping Center, and Aurora's `#117` is a
  rented private mailbox there. The UPS Store's own site documents the format —
  `[Name] PMB XXX or # XXX, 330 Franklin Rd Ste #135A`. Corroborated by a
  spread of unrelated businesses at the same suite with different sub-numbers:
  a café at `135A-389`, a pool company at `135A-201`, a nonprofit at `135A-538`.

  It is not literally a USPS PO Box, but it is a **CMRA** — a commercial mail
  receiving agency — which is precisely what a "no PO boxes" rule targets, and
  USPS requires the `#`/`PMB` marker to identify it as one. Expect it to be
  flagged, on an application that already carries an uncertain high-risk
  classification.

  **Aurora's physical address is the same office as the Dry Eye Center of
  Brentwood** (confirmed by Phillip, 2026-08-20). That is what belongs in this
  field. Sharing premises with a related business under the same owner is
  ordinary and not disqualifying.

  **RESOLVED 2026-08-20. Use the EIN address:**

  > **500 Wilson Pike Circle, Suite 103, Brentwood, TN 37027**

  This is the address on Aurora's **IRS EIN record**, which is the strongest
  possible answer: it is not an address asserted only on the application, it is
  the one the IRS already associates with the entity — and the EIN record is
  what an underwriter checks a business address against.

  Verified independently: 500 Wilson Pike Circle is the **Brentwood Business
  Center**, a professionally managed 106,000 sq ft flex-office building in
  Maryland Farms, built 1985. **Suite 103 is the Eye Center of Brentwood's
  corporate office** — a leased tenant suite, with none of the sub-numbering or
  unrelated-tenant clustering that gives away the UPS Store address.

  | Field | Use |
  |---|---|
  | Business Address (No PO Boxes) | 500 Wilson Pike Circle, Suite 103 |
  | Mailing address, if offered | 330 Franklin Road, Suite 135A, #117 |

  **The website and carton showing the mailbox is fine and needs no change.**
  The intuitive worry — that the physical address appears nowhere public — is
  the wrong one. Underwriters check the business address against EIN and
  Secretary of State records, not marketing copy, and the form has separate
  physical and mailing fields precisely because most businesses differ. The
  record that matters already carries the Wilson Pike address.

  Two loose ends, neither blocking:

  - An underwriter looking up Wilson Pike will find the **Eye Center of
    Brentwood**, not Aurora. Normal for related businesses under one owner
    sharing premises, and the EIN association explains it.
  - **Unchecked:** whether the *articles of organization* show Wilson Pike or
    the UPS Store. The EIN is the more important record, so this is tidiness
    rather than a blocker — but if both agree, every record lines up.

  FDA wants a place of business where the firm can be reached, so the carton's
  mailing address is fine there too.
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


### SUBMITTED 2026-08-20 — awaiting the underwriting decision

The application was completed and filed. Expect a decision in **one to five
business days**, and remember the **$25/month starts on approval** whether or
not anything is processed.

> **Account access is gated on Dr. Rynerson, and that is expected.** Logging in
> after submission triggers identity verification, and the PIN is sent to
> **Dr. Rynerson** — they are the owner of record, with the SSN and the personal
> guarantee, so Authorize.net verifies against them rather than whoever filled
> the form in. Nothing is wrong and nothing is blocked by it: underwriting
> proceeds without anyone logging in.
>
> Account access is only genuinely needed **after approval**, to pull the API
> Login ID, Transaction Key and Signature Key and to register the webhook.
>
> **First thing to do once inside: Account → User Administration, and add
> Phillip as a separate user.** Today access depends on Dr. Rynerson being
> reachable, which is fine for a one-time verification and wrong as a permanent
> arrangement — a system that moves money should not run on one shared login
> with no audit trail.

If they come back with questions, the likely subjects are the
Other/Miscellaneous industry code, the shared Wilson Pike address, or the OTC
drug classification. Answers to all three are in this section.

### What was actually submitted

Recorded verbatim so a later dispute, review or renewal can be answered from
the same facts.

| Field | Submitted |
|---|---|
| Legal Business Name | Aurora Pharmaceuticals, LLC |
| Business Address | 500 Wilson Pike Circle, Suite 103, Brentwood, TN 37027 |
| Mailing address | 330 Franklin Road, Suite 135A, #117 (UPS Store mailbox) |
| Website URL | https://quelldrop.com |
| Industry | **Other / Miscellaneous** |
| Average ticket | $50 (projected) |
| Highest ticket | $300 (projected) |

**Business description, as entered:**

> Online retail of one over-the-counter lubricating eye drop (artificial
> tears), sold direct to consumers on our website. Not a pharmacy; no
> prescriptions or dispensing. One-time purchases only, no recurring billing.
> Shipped from TN, US only.

### Why Other rather than a specific code

The industry field maps to **MCC codes**. Three options were considered and
rejected, and the reasoning is worth keeping because it will recur at Meta and
at any future processor:

- **Health & beauty spas (7298)** — a *services* code for salons. Inaccurate,
  and a category with elevated chargeback rates that would have worsened the
  risk profile for no reason.
- **Optometry / ophthalmology (8042/8043)** — healthcare *services*. Quell
  provides no clinical care; being coded as a provider creates a permanent
  mismatch between the category and the actual transactions.
- **Online marketplace** — means a platform moving money for *third-party
  sellers*. Quell sells its own product first-party. Marketplaces attract
  payment-facilitation and money-transmission requirements that do not apply.
  Being sold *on* Amazon does not make Quell a marketplace, and Amazon's sales
  never touch this account anyway.

**Drug Stores and Pharmacies (5912)** was the closest real code — its
definition explicitly covers retail sale of OTC medications — but was rejected
on two grounds. Its definition centres on *prescription dispensing*, which
Quell does not do, so it describes a store format Quell is not. And online
pharmacy is a recognised high-risk vertical: a card-not-present merchant on
5912 can be asked for pharmacy licensing or LegitScript certification, neither
of which applies to an artificial tear. A short delay from a catch-all code is
cheaper than pharmacy-tier review.

The form warned that Other/Miscellaneous may delay the application. Accepted
deliberately: a delay means a human reads a clear description of an ordinary
product. A wrong code is not fixable later without consequences.

### The description was verified against the live site

An underwriter reads the description and then visits the URL, so every claim
was checked against what quelldrop.com actually serves:

| Claim | Corroboration on the site |
|---|---|
| One OTC lubricating eye drop | Single product, OTC stated throughout |
| Direct to consumers on our website | First-party storefront |
| Not a pharmacy, no prescriptions | "Over-the-counter drug — no prescription needed", plus a FAQ answering it directly |
| One-time purchases only | Buy panel reads "One-time purchase"; no subscription, refill or auto-ship anywhere |
| Shipped from TN | Brentwood, TN in the footer |
| US only | Terms: "We ship within the United States only" |

Nothing on the site over-claims against the label either, after the redness
claim was withheld (§21). The description, the site and the Drug Facts panel
all agree.

### Words deliberately avoided in the description

"Pharmaceuticals" (reads as pharmacy or distributor), "supplement" and
"nutraceutical" (among the most scrutinised words in card processing, and
inaccurate — this is a monograph drug), "medical device" (it is not one), and
any claim beyond the Drug Facts *Uses* panel, including redness.

"FDA approved" was also avoided as **false** — monograph drugs are not
approved, they conform to a monograph. An earlier draft used "FDA-monograph",
which is accurate, but it was dropped for length.

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

A paid order now emails everyone in `FULFILMENT_EMAILS`, which is
`Phillip.moore@meibum.com` as of 2026-08-31 — an interim answer to the people
question below, not a resolution of it. The message is written
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

### Email works — verified 2026-08-31

**Resend is configured and mail is being delivered for real.** Proven end to
end rather than assumed: a password reset was triggered against the live site,
it arrived in the recipient's inbox, and it appears in Resend's own delivery
log. Both halves matter — the inbox proves delivery, the Resend log proves the
send actually left the application.

Setup, for the record: Resend account on the work address, domain
`quelldrop.com` verified with three DNS records at GoDaddy (DKIM `TXT` on
`resend._domainkey`, SPF `TXT` and a bounce `MX` on `send`), added by hand
rather than through the auto-configure integration — that integration wants
write access to the GoDaddy account, which also holds **meibum.com**, and the
whole point of sending as quelldrop.com is that BlephEx's zone is never
touched. All three were checked from an outside resolver before verifying, and
the DKIM key was compared character by character rather than by eye.

**No tracking records.** Resend issued no tracking CNAME, so links in emails
are not rewritten and no open-tracking pixel is embedded. That keeps the
privacy policy true as written.

**Reply-To is proven, not merely configured.** The first delivered email still
replied to `orders@quelldrop.com`, which has no inbox — the exact black hole
the setting exists to prevent. Cause was the Vercel Sensitive-variable trap in
§12; after re-storing the value readably and redeploying, replying to a real
received email fills in `Phillip.moore@meibum.com`. Verified by replying to a
message in a real mail client, not by reading configuration.

**Proven end to end by a real order, 2026-08-31.** A sandbox purchase was put
through the live site — order `Q-9BEE9NJD`, transaction `120089508321`,
$29.99 + $6.95 = $36.94:

| Step | Evidence |
|---|---|
| Server-side pricing | $36.94, computed from the database, not trusted from the browser |
| Stock held only on payment | 248 before *and during* checkout; 247 after |
| Webhook signature | verified, using the **"text"** key derivation (§6) |
| Order `pending` → `paid` | with the real transaction id |
| Replay safety | **several deliveries arrived**; the order paid once and stock moved once |
| Receipt | delivered to the customer address given at checkout |
| **Pack notice** | **delivered to `Phillip.moore@meibum.com`** |

The two emails were sent to *different* addresses deliberately, so each path
was proven separately rather than one standing in for the other.

**The pack notice landed in junk.** That is reputation, not configuration:
`quelldrop.com` carries GoDaddy's default DMARC record —
`v=DMARC1; p=reject; adkim=r; aspf=r` — the strictest policy there is, and the
mail passes it. DKIM signs as `quelldrop.com` and the `send.quelldrop.com`
return path aligns under relaxed mode, which is *why* it was delivered rather
than bounced. A new sending domain with no history gets filtered; marking the
sender safe and accumulating volume is the fix. **Nothing to add to DNS** — and
note `p=reject` means anything that ever sends as quelldrop.com without
alignment will be rejected outright, so a second sending service would need its
own DKIM before it could send at all.

**Two test orders are deliberately left in production:** `Q-9BEE9NJD` (paid,
the successful test) and `Q-6DFPFKZD` (pending, an abandoned checkout from the
same session — it holds no stock). Kept as a record rather than cancelled.

> **The first send appeared to fail and had not.** A password reset was
> triggered before any account existed *in the production database* — local and
> deployed have separate databases, and the account had only ever been created
> locally. `forgot-password` only sends when the user exists, and returns the
> same neutral message either way, so nothing was sent and nothing was logged.
> Resend's empty log was the evidence that settled it. **Production had zero
> accounts**, which also meant nobody could open `/admin/orders` on the live
> site — admin needs a signed-in session as well as the allowlist.

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

### When the account is approved — the cutover, step by step

Written 2026-08-28, assuming the answer to the gateway question above is
**yes, Authorize.net stays**. If it is no, none of this applies and the
integration is a rebuild.

**Nothing here is code.** The gateway is already integrated, tested against the
live sandbox and proven end to end (§8). What changes is four environment
variables, one webhook registration and a redeploy.

1. **Get the production credentials** from the new merchant account's
   Authorize.net Merchant Interface: **Account → Settings → API Credentials &
   Keys**. You need the **API Login ID** and a **new Transaction Key**. The
   Transaction Key is displayed **once** — if it is lost, it has to be
   regenerated, which invalidates the old one.
2. **Generate a Signature Key** in the same screen. It is a separate value from
   the Transaction Key and it is what the webhook route verifies with. 128 hex
   characters; the code accepts both derivations and logs which one matched
   (§6), so a wrong reading shows up in the logs rather than as silence.
3. **Set four variables on Vercel production**, then redeploy:

   ```
   AUTHORIZENET_API_LOGIN_ID
   AUTHORIZENET_TRANSACTION_KEY
   AUTHORIZENET_SIGNATURE_KEY
   AUTHORIZENET_ENVIRONMENT = production
   ```

   > **Use `--value '...'`, never a pipe.** Piping appends a newline that
   > becomes part of the secret; it cost a whole debugging cycle once already,
   > and the symptom never points at whitespace (§12).

   > **Environment changes only reach a new deployment.** Existing running
   > functions keep the old values, so a redeploy is part of the step, not an
   > afterthought.

4. **Register the webhook against the production host** — the sandbox
   registration does not carry over:

   ```
   POST https://api.authorize.net/rest/v1/webhooks
   Authorization: Basic base64(apiLoginId:transactionKey)
   ```

   Event `net.authorize.payment.authcapture.created`, URL
   `https://quelldrop.com/api/webhooks/authorizenet`. Note the host is
   `api.` not `apitest.`, and the credentials are the production pair.
5. **Turn on the fraud filters** in the Merchant Interface before taking real
   money: AVS, CVV and **velocity**. Guest checkout has no account barrier by
   design, and the app's own rate limiter is still in-process rather than
   Redis-backed (§10), so the gateway's filters are the real control.
6. **Make the first live transaction a small real purchase, then refund it.**
   **Settlement has never been exercised** — the sandbox simulates the
   processor entirely, so money has never actually moved. This is the step that
   proves funding, the statement descriptor and the refund path, and it is
   cheap. Check the descriptor on the real card statement, because that is
   where a wrong one turns into chargebacks.
7. **Only then flip `ALLOW_INDEXING` to `true`** and redeploy, so search
   traffic arrives at a store that can actually take money.

**Do not go live without email.** A card-not-present order with no receipt is a
chargeback waiting to happen, and the customer has no record of what they
bought. `RESEND_API_KEY` is unset in Vercel production, so today nothing sends
at all — no confirmation, no shipping notice, no password reset, and no pack
notice to the office. See §14 item 6; it is an account and a DNS record, not
code.


### Still open, and it is a people question

- **Who** packs and posts the parcels.
- **Which address** receives the order notifications. An internal distribution
  list is better than one person's mailbox.
- **Who receives returns.** The terms accept unopened returns for 30 days, so
  someone has to be at the other end of that.

---

## 21. Zen Payments — where the application actually went

**Authorize.net did not underwrite the account themselves. They referred it to
Zen Payments**, an ISO that specialises in **high-risk** merchant accounts and
places files across a network of partner banks.

Read that referral for what it is: the *"subject to eligibility"* footnote
resolving, and not in Quell's favour. An OTC drug making health claims is the
classification risk that was flagged before submitting, and this is what it
looks like when it lands.

Not a disaster — high-risk processing is a real, workable business — but **it is
no longer the product that was applied for**, and nothing should be signed on
the strength of a friendly onboarding call.

### The question that matters most

**Does the account use the Authorize.net gateway?**

- **Yes** → the integration is untouched. Going live is four environment
  variables and a webhook registration, about ten minutes.
- **No** → the whole payment integration needs rebuilding. Weeks, not minutes.

The referral came *from* Authorize.net so the gateway almost certainly stays,
but get it stated explicitly, because everything in this codebase assumes it.

### Get in writing before signing

1. **What the form actually is** — the merchant processing agreement, or an
   authorisation for underwriting? The agreement carries the personal guarantee.
2. **The actual rate** — percentage and per-transaction, plus every recurring
   fee and the chargeback fee.
3. **Reserve** — is there one, what percentage, what hold period, what release
   schedule? *This is the one that hurts most:* a rolling reserve ties up
   working capital on a product with roughly $18–20 contribution per order.
4. **Contract length, cancellation, renewal.**
5. **Funding timeline** — transaction to deposit.
6. **Credit check** — does the process involve one, soft or hard, and **if the
   file goes to more than one partner bank, does each pull separately?** That
   last clause matters specifically because Zen places across many banks;
   several hard inquiries is very different from one.

Published figures suggest a monthly fee plus PCI fee and a per-chargeback fee,
with rates quoted individually by risk profile — but **none of that came from
Zen about this account**, so treat it as background, not as terms. One review
source flags that final contract terms have differed from initial sales quotes,
which is reason enough to read what is actually signed.

### Verification done on the contact, 2026-08-20

Worth recording because the pattern — an unexpected third party asking for a
signature and part of an SSN — is exactly what phishing looks like.

- **Mickey Robertson is a real Account Executive at Zen Payments** (Provo,
  Utah). Consistent LinkedIn, ZoomInfo and org-chart presence, and named
  positively in Trustpilot reviews.
- **`zenpayments.com` has actively managed email authentication** — DMARC at
  `p=quarantine` with reporting to EasyDMARC, SPF covering Microsoft 365,
  Salesforce and Trustpilot, mail handled by Microsoft 365. So a spoofed
  message from that domain should land in spam rather than the inbox, which
  makes mail arriving normally meaningfully more likely to be genuine.
- **`zendashboard.com`** — the portal the signature form lives on — was
  registered in 2017, serves a real login app with a valid certificate. But
  **`zenpayments.com` does not link to it publicly** and its login page carries
  no Zen branding, so the connection could not be confirmed from outside. Not
  evidence of anything wrong; simply unverified.

> **Verify a portal out-of-band, never by asking the person who sent it.** Call
> Zen on a number from `zenpayments.com` itself. None of the reassuring signals
> above are hard to fake — certificates are free, aged domains can be bought,
> branding can be copied.

### On the SSN

Being asked for the owner's Social Security number is **normal and legally
required** — personal guarantee, beneficial-ownership rules for anyone with 25%
or more equity, and OFAC screening. A provider that did *not* ask would be the
odd one.

What matters is *how*: **Dr. Rynerson enters it himself, into the provider's own
form.** Never relayed through Phillip, never by email or text. Note also that
last-four-digits requests are materially less sensitive than a full SSN.

### Still open

- Whether to proceed with Zen at all. **Nick's Stax quote was never
  delivered**, and this changes the comparison — worth chasing now that
  Authorize.net has classified Quell as high-risk.
- Worth asking Zen directly how the business was classified and what drove the
  referral. If it is something on the site, that is actionable; and if the file
  is ever shopped elsewhere, knowing what a processor sees is useful.

---

## 22. Storefront UI — cart, the emu, and the helper

### Shipped

**The cart is findable now** (`5f99702`). The "Go to cart" link after adding was
a small text link with a broken hover state — `hover:underline` on an
`inline-flex` underlines the *gaps* between the label, the count and the arrow,
so the rule arrived in three disconnected pieces. It is now a full-width
bordered button. The header cart gained an icon and its own bordered chip with
the count as a corner badge, plus an `aria-label` carrying the count.

**An emu walks across the bottom of the screen when something is added to the
cart** (`src/components/CartEmu.tsx`). On-brand rather than random: the formula
contains emu oil and the slogan is "give dry eye the bird".

Three constraints on it, all verified in a browser rather than assumed:

- **It cannot block the page.** `pointer-events: none`, z-index 40 — under the
  sticky header's 50 — so the cart link it draws attention to stays clickable.
- **It respects `prefers-reduced-motion`**, handled in CSS (`display: none`
  under `reduce`) rather than by sniffing the media query in JavaScript. No
  state, no effect, and it responds if the preference changes mid-session.
- **It cannot stack.** The trigger is a counter rather than a boolean, passed as
  a `key`, so adding three times restarts one emu instead of starting three.

**The hand-drawn bird was replaced on 2026-08-31** with Phillip's artwork,
rigged. The drawing's lessons are kept below because they still apply to any
future vector work, but the SVG itself is gone.

#### The running emu — two frames, 2026-08-31

**The animation is two whole-bird frames swapped at the step rate.** Frame 1 is
Phillip's drawing as supplied: one leg extended behind, one tucked forward.
Frame 2 is the same two legs with their **hip anchors exchanged**, so the bird
is caught in the opposite half of its stride. Nothing else moves except a small
body bob. `emu-run-1.png` and `emu-run-2.png`, 512x336, ~46KB each.

Three things that matter about how the frames were made:

- **The white background is keyed out by flooding inward from the border**, the
  same technique as the helper avatar — a luminance threshold punches holes
  through the beak and the pale neck feathers.
- **The legs are removed from the body along a curve following the belly**, not
  a rectangle. A rectangle leaves two tells, both of which appeared on the first
  attempt: a dead-straight horizontal edge where it crosses feathers, and a
  notch wherever two rectangles fail to meet. The drawn speed lines and the
  ground smear are erased too — they are *drawn* motion and would sit frozen
  while the bird moves.
- **Frame 2 exchanges the legs; it does not mirror them.** Mirroring would point
  the toes backwards, which is instantly wrong on a bird. Both frames are then
  cropped to **one shared bounding box**, so the swap cannot shift the bird by a
  pixel.

**The cart came back with it.** Replacing the SVG bird quietly dropped the
shopping cart it had been pushing, which is the whole point of the animation —
it fires on *add to cart*. The original teal outline cart is carried over from
that drawing and refitted to the artwork, kept in brand teal so the bird stays
the subject. **The handle has to run back and meet the chest**: without it the
two shapes read as a bird walking *beside* a trolley rather than pushing one.
It is drawn in a widened stage coordinate space shared with the frames, so cart
and bird scale as one, and its wheels sit on the same ground line the feet run
along.

The swap uses `steps(1)`, deliberately: a cross-fade between two leg positions
reads as a ghost rather than a stride. Frame 2 is `opacity: 0` in the base
style, so a browser running no animations shows one bird rather than two
overlaid.

> **A rigged version was built first and thrown away.** Each leg was cut into
> thigh and shank and rotated about hip and knee, with the gait written as
> world angles. It worked — but Phillip's instruction was that the drawing
> already contains both poses and swapping them is enough, which is true, and
> it is a great deal less machinery. **Do not rebuild the rig.** If more
> fluidity is ever wanted, the cheaper answer is a third frame, not joints.

Two traps from the rig attempt worth keeping, because both cost real time:

> **A lazily-loaded image inside a zero-sized or transformed container is never
> fetched at all.** `next/image` defaults to `loading="lazy"`, and the
> intersection observer sees no area to intersect, so it never triggers. The
> rigged version shipped to production with **no legs** for exactly this
> reason, and it looked fine locally because dev does not lazy-load the same
> way. Both frames now carry `priority`. They also carry `unoptimized`,
> because the optimizer cannot see the CSS size these are drawn at and
> under-resolves them.

> **To verify a CSS animation, read `document.getAnimations()`, not
> `getComputedStyle`.** Transform and opacity animations run on the
> compositor, and sampling computed style from the main thread returns the same
> value every time — which reads exactly like a frozen animation and sent me
> hunting a bug that did not exist. `getAnimations()` reports `playState`
> and a `currentTime` that actually advances.

**Lessons from the drawing it replaced**, still true for vector work: an outline
drawing (`fill:none` plus a stroke) reads as a stick figure; a circular body
reads as a ball; a short neck reads as a goose, because emus are mostly neck;
evenly spaced parallel feather strokes read as a ribcage, because regularity is
what gives them away; and a neck drawn *after* the body sits on top as a visible
seam.

### Not shipped — the site helper, work in progress

**Uncommitted and deliberately held back.** Phillip is not happy with it yet.

```
src/components/SiteHelper.tsx        the widget
src/components/SiteHelper.test.ts    14 content tests
src/components/EmuFace.tsx           the avatar
public/images/emu-helper.png         428x700, keyed out of the artwork below
art/emu-helper-source.png            the 1122x1402 original, outside public/
src/app/globals.css                  MODIFIED — the nudge animation
src/app/layout.tsx                   MODIFIED — mounts <SiteHelper />
```

> **`layout.tsx` is modified to mount it.** Committing that file without the
> component files breaks the Vercel build on a missing import. When shipping
> anything else, either exclude `layout.tsx` or stash the helper and build
> against exactly what will deploy — which is how `8c303c6` was verified.

**What it is:** a corner widget with a fixed list of questions, each giving a
one-line answer and a link to the right page, plus a "Something else" option
that refuses and hands over to the Drug Facts and the phone number. Since
2026-08-28 it also speaks first, once, after 10 seconds — see below.

**Deliberately not an AI chatbot, and that is the design.** Quell is an
FDA-regulated drug. A language model on this domain could be asked "will this
help my blepharitis?" and produce something helpful-sounding — a medical claim,
on our own site, at scale, unreviewed. That is a worse version of the redness
problem in §9. This can only emit sentences a human wrote: no model, no API
call, **no network request at all**, verified by checking the browser's resource
list. It is also self-hosted rather than Tidio/Crisp/Intercom, because those
load third-party scripts and set cookies, and the privacy policy states the
site runs no third-party trackers.

**The tests guard content, not clicking** — that the helper never says
"redness" (cross-checked against `RELIEVES_WITHHELD`), makes no treatment
claims, matches `DRUG_FACTS.directions` exactly rather than paraphrasing, that
the refusal names a doctor or pharmacist without hedging into an opinion, and
that the nudge is still a verbatim quotation of `EMU_OIL.after`. The guarantee
is that only reviewed sentences ship; those tests stop someone adding a topic
that quietly makes a claim.

#### The artwork, replaced 2026-08-28

**The avatar is now the illustration Phillip supplied**, not the old crop from
the carton photograph. The original is kept at `art/emu-helper-source.png` —
deliberately *outside* `public/`, so 1.4MB of source artwork is in the
repository to regenerate from without being served to every visitor.

The bird stands free in the corner now rather than inside a teal-ringed tile:
the tile only ever existed because the old crop arrived on a black rectangle,
and a frame around a keyed-out image would put that rectangle back.

> **The white background is keyed out by flooding inward from the border, not
> by thresholding.** A luminance threshold is the obvious approach and it is
> wrong here — the beak highlights and the eye glints are white too, so it
> punches holes straight through the face. Flooding from the edge treats only
> white *connected to the border* as background. The full recipe, including the
> feathered edge that stops a white rim appearing on the near-black page, is in
> the comment at the top of `EmuFace.tsx`.

#### The nudge — the one thing on the site that speaks unprompted

After 10 seconds a speech bubble rises out of the emu: **"Did you know? Quell
reinforces the tear film's oil layer to help reduce moisture loss."**

**The claim is not written in the component.** It is `EMU_OIL.after`,
interpolated — the sentence already on the carton panel and the about page,
reused verbatim so the site holds exactly one copy of it. A second, slightly
reworded copy is how a claim drifts, and the one line that speaks without being
asked is the worst place for that to happen. The test asserts the two still
match.

Mechanics, all verified in the browser rather than assumed:

- **The clock is time on the site, not time on the page.** The visit start is
  in `sessionStorage`, so a reload at 8 seconds does not restart it; the
  helper is mounted in the root layout, so client-side navigation never
  remounts it at all. Verified from a cleared session at a 50ms poll: nothing
  at 2.07 seconds, bubble at 10.06 seconds.
- **It speaks once per visit.** Dismissing it, or opening the helper, sets the
  seen flag; every `sessionStorage` access is wrapped, because it throws
  outright in some privacy configurations and a nicety must not take the page
  down with it.
- **The whole bubble is the button** — clicking it opens the helper, which is
  the action it is inviting — with a separate ✕ for dismissal.
- **Reduced motion keeps the bubble.** Only the entrance animation sits inside
  `prefers-reduced-motion: no-preference`. Unlike the walking emu, this one is
  not hidden under `reduce`: it carries a sentence, and someone who asked for
  less movement did not ask for less information.
- **`role="status"`**, so a screen reader is told politely instead of having
  focus taken mid-sentence.

#### It stays off any page you fill in — 2026-08-28, widened 2026-08-31

**The helper was taking taps meant for Continue to payment.** On a 375px
screen the cart's fields scroll up through the bottom-right corner, and the
widget is fixed there. Measured on the live site with `elementFromPoint`, each
field scrolled to the bottom of the viewport: the emu was the top element at
the right-hand end of the email, last name, street, apt, city and ZIP fields —
and of **Continue to payment**, the one button on the site that takes money.

Reserving space at the foot of the page does not fix it. The widget is fixed to
the viewport rather than the document, so mid-scroll positions still pass
underneath it. Not being there is the fix, which is also what serious
storefronts do with a chat widget on checkout.

**It happened again on 2026-08-31, which is why the rule is now the category
rather than the measurement.** Adding the confirm-password field to
registration made that form taller and pushed **Create account** under the
nudge bubble: only the leftmost 12px of the button was still clickable.
`/register` had measured clear before that field existed.

So `HIDDEN_ON` now carries `/cart`, `/login`, `/register`,
`/forgot-password` and `/reset-password` — every page whose whole job is
being filled in and submitted. `/login` and `/reset-password` measure clear
today; they are on the list because a pixel margin is not a property worth
defending one page at a time. Nothing is lost, since no topic answers a
question about accounts or checkout.

`/orders` deliberately stays off the list: the helper's own tracking answer
links there, and a test asserts no topic points at a page the helper has hidden
itself from — an answer that leads somewhere it cannot be reached from is a
dead end.

> **Do not write `**/cart**` in a block comment.** The `*/` inside it closes
> the comment early and the rest of the file becomes syntax errors. That cost a
> cycle while writing the comment above.


**Reviewed with Phillip 2026-08-28.** The artwork and the nudge are approved.
Two things were tried and rejected, so they do not need proposing again: an
empty bubble that appeared 700ms ahead of the sentence (built, looked at, cut —
he did not like it), and typing dots inside it (never built; they would claim a
reply is being composed on a site with nobody at the other end). The delay was
30 seconds and is now 10 at his request.

**Next step:** the question list, the tone, and the shape of the panel are
still open. The production build has not been run against any of this — tests,
`tsc` and `eslint` are clean, and it has only been exercised under `next dev`.
