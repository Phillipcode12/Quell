# Quell — Give your dry eye the bird!

Single-product storefront for **Quell™**, a preservative-free lubricating eye
drop. Accounts, cart, and Stripe Checkout, backed by a local SQLite database.

**Quell is a brand of BlephEx®, LLC** (Brentwood, TN), which owns the trademark.
The drops are manufactured by Aurora Pharmaceuticals, Inc. Both are defined in
`src/lib/product-content.ts` as `COMPANY` and `MANUFACTURER`.

> Quell is an **over-the-counter** drug, not a prescription product. There is no
> prescription gating anywhere in this app by design.

## Stack

| Layer    | Choice                                                      |
| -------- | ----------------------------------------------------------- |
| Frontend | Next.js 16 (App Router) + React 19 + Tailwind CSS v4        |
| Backend  | Next.js Route Handlers (Node runtime)                       |
| Database | PostgreSQL via Prisma 7 (`@prisma/adapter-pg`)              |
| Auth     | Email + password, bcrypt hashes, JWT session cookie (jose)  |
| Payments | Stripe Checkout + webhook, one-time and subscription        |
| Email    | Resend, or console output when no API key is set            |

## Setup

```bash
npm install
```

### Database

You need a PostgreSQL instance. Any will do — a local install, Docker, or a
managed one (Neon, Supabase, RDS). Point `DATABASE_URL` at it.

With Docker:

```bash
docker run --name quell-pg -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=quell -p 5432:5432 -d postgres:17
```

> The instance used during development was the PostgreSQL 17 **portable
> binaries** (`postgresql-17.x-windows-x64-binaries.zip`), unzipped and started
> with `initdb` + `pg_ctl` on port 5433. That needs no administrator rights,
> which matters on a locked-down Windows machine where the normal installer
> can't elevate.

Copy `.env.example` to `.env`, then generate a session secret:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Create the database and seed the product:

```bash
npm run db:migrate
```

```bash
npm run db:seed
```

Run it:

```bash
npm run dev
```

Open http://localhost:3000.

## Brand

Sampled from the print-ready packaging and defined in `src/app/globals.css`:

| Token   | Value     | Use                                  |
| ------- | --------- | ------------------------------------ |
| `brand` | `#00A7B5` | Quell teal — logo eye mark, CTAs     |
| `background` | `#060606` | Carton black — page background  |

The site is dark-only, to match the carton. The logo is drawn as inline SVG in
`src/components/Logo.tsx`, because the supplied logo PNG sits on a grey gradient
with a glow and cannot be placed on black directly.

## Where the copy lives

**`src/lib/product-content.ts` is the single source of truth** for everything
printed on the packaging — Drug Facts, warnings, directions, ingredients, the
emu oil panel, company contact details, and the FAQ. Every page reads from it.
Change the packaging, change that one file.

The `DRUG_FACTS` block must match the printed carton exactly. Do not edit it for
marketing reasons.

## Enabling payments

The app runs without Stripe keys — checkout returns a clear "not configured"
message until you add them.

1. Set `STRIPE_SECRET_KEY` in `.env` from
   https://dashboard.stripe.com/test/apikeys
2. Forward webhooks locally:

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

3. Copy the `whsec_...` value into `STRIPE_WEBHOOK_SECRET`.
4. Restart `npm run dev` — env vars are read at boot.

Test card `4242 4242 4242 4242`, any future expiry, any CVC.

## Shipping

Rules live in **`src/lib/shipping.ts`** and drive the cart, the FAQ, and the
Stripe Checkout Session from one place:

| Rule                | Value           |
| ------------------- | --------------- |
| Free shipping at    | $59.00 subtotal |
| Flat rate below     | $6.95           |
| Ships to            | US only         |

The offer is stated as plain "free shipping over $59" — no carrier name and no
delivery window, since either would be a promise to honour.

Checkout collects a shipping address, and the address is stored on the order
from the webhook so you know where to ship. Shipping is calculated server-side
in `/api/checkout` — the client never decides it, same as prices.

> The **$6.95 rate is an assumption**, not a quoted carrier price. Confirm what
> FedEx 2-Day actually costs you and update `STANDARD_SHIPPING_CENTS`.
> `SHIPPABLE_COUNTRIES` is US-only; add countries there if you ship wider.

## Order flow

1. Cart lives in `localStorage`; the client posts only product IDs and quantities.
2. `POST /api/checkout` re-reads the price from the database — client prices are
   never trusted — creates a `pending` order, and opens a Stripe Checkout Session.
3. `POST /api/webhooks/stripe` verifies the signature and moves the order to
   `paid`. **Payment is recorded from the webhook, not the success page**,
   because the browser may never load that page.

Statuses: `pending` → `paid` → `shipped` | `cancelled`.

## Scripts

| Command              | Does                                 |
| -------------------- | ------------------------------------ |
| `npm run dev`        | Dev server on :3000                  |
| `npm run build`      | Production build                     |
| `npm run db:migrate` | Create/apply a migration             |
| `npm run db:seed`    | Seed the Quell product               |
| `npm run db:studio`  | Browse the database in Prisma Studio |
| `npm run db:reset`   | Drop, re-migrate, and re-seed        |

## Admin

`/admin/orders` lists every order with customer, items, totals and shipping
address, and lets you mark orders shipped (which emails the customer) or
cancel them (which returns stock). It also has an inline stock editor.

Access is the `ADMIN_EMAILS` allowlist — comma separated, and **unset means
nobody**. Non-admins get a 404 rather than a 403 so the route isn't advertised.

## Subscriptions

A 10 mL bottle at the labelled dose is roughly a month's supply, so the buy
panel offers a monthly refill alongside one-time purchase. Rules live in
`src/lib/subscription.ts`:

| Rule                | Value                                  |
| ------------------- | -------------------------------------- |
| Discount            | 15% off the one-time price (a placeholder — set your own margin) |
| Shipping            | Always free on subscriptions           |
| Interval            | Monthly                                |

Renewals arrive as `invoice.paid` webhooks and create a fresh order to fulfil,
copying the previous order's items and address. `Order.stripeInvoiceId` is
unique, so a replayed invoice can't duplicate an order.

Customers manage or cancel through the Stripe billing portal, which must be
enabled once at
https://dashboard.stripe.com/test/settings/billing/portal

## Before launch

- **Confirm the price.** `priceCents` in `prisma/seed.ts` is $29.99, which
  matches the retail listing at dryeyerescue.com as of 2026-08-13. Re-check
  before launch, and decide whether you are matching or undercutting retail.
- **Front-panel vs Drug Facts claims.** The carton front says the product
  relieves "Dryness, Irritation, Redness, Itching," but the Drug Facts *Uses*
  section is narrower: a protectant against further irritation, or to relieve
  dryness. FDA OTC labeling expects front-panel claims to match the Uses
  statement, and redness relief normally implies a vasoconstrictor active
  ingredient, which this formula does not contain. Have regulatory counsel
  reconcile the two before publishing.
- **Legal pages** (`/privacy`, `/terms`) are unreviewed boilerplate with
  bracketed placeholders, and say so in a banner.
- **Rate limiting is in-process.** Effective on one instance; on serverless the
  limit is multiplied by the instance count. Move `src/lib/rate-limit.ts` to
  Redis (Upstash) before real traffic — the call signature can stay.
- **Still missing:** email verification on signup, and automated tests.
