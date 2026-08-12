# ClearSight Rx

A local development template for a prescription ophthalmic storefront: accounts,
a product catalog, a cart, and Stripe Checkout, backed by a local SQLite database.

> **This is a template, not a pharmacy.** It does not verify prescriptions,
> dispense medication, or provide medical advice. See
> [Before this can go live](#before-this-can-go-live).

## Stack

| Layer    | Choice                                                      |
| -------- | ----------------------------------------------------------- |
| Frontend | Next.js 16 (App Router) + React 19 + Tailwind CSS v4        |
| Backend  | Next.js Route Handlers (Node runtime) — one app, one deploy |
| Database | SQLite via Prisma 7 (libsql driver adapter)                 |
| Auth     | Email + password, bcrypt hashes, JWT session cookie (jose)  |
| Payments | Stripe Checkout + webhook                                   |

The backend is Node rather than Python so the whole app is one TypeScript
project — shared types between client and server, one dev command, one deploy.
A separate Python service would be worth it only if you need its ML or
data-science ecosystem.

## Setup

```bash
npm install
```

Create `.env` from the template and set a session secret:

```bash
cp .env.example .env
```

Generate a value for `AUTH_SECRET`:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Create the database and load the sample catalog:

```bash
npm run db:migrate
```

```bash
npm run db:seed
```

Start it:

```bash
npm run dev
```

Open http://localhost:3000.

## Enabling payments

The app runs without Stripe keys — checkout returns a clear "not configured"
message until you add them.

1. Get your **test** keys from https://dashboard.stripe.com/test/apikeys and set
   `STRIPE_SECRET_KEY` in `.env`.
2. Install the [Stripe CLI](https://docs.stripe.com/stripe-cli) and forward
   webhooks to your local server:

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

3. Copy the `whsec_...` value it prints into `STRIPE_WEBHOOK_SECRET`.
4. Restart `npm run dev` — env vars are read at boot.

Test card `4242 4242 4242 4242`, any future expiry, any CVC.

## How checkout works

1. The cart lives in `localStorage`; the client posts only product IDs and
   quantities.
2. `POST /api/checkout` re-reads every price from the database — client-supplied
   prices are never trusted — creates a `pending` order, and opens a Stripe
   Checkout Session.
3. Stripe redirects the shopper to `/checkout/success`.
4. `POST /api/webhooks/stripe` verifies the signature and moves the order to
   `rx_review`. **Payment status is recorded from the webhook, not the success
   page**, because the browser may never load that page.

Orders land in `rx_review`, not `shipped`. Nothing in this template performs
prescription verification.

## Scripts

| Command              | Does                                    |
| -------------------- | --------------------------------------- |
| `npm run dev`        | Dev server on :3000                     |
| `npm run build`      | Production build                        |
| `npm run db:migrate` | Create/apply a migration                |
| `npm run db:seed`    | Load the sample catalog                 |
| `npm run db:studio`  | Browse the database in Prisma Studio    |
| `npm run db:reset`   | Drop, re-migrate, and re-seed           |

## Layout

```
prisma/schema.prisma        Data model (User, Product, Order, OrderItem)
prisma/seed.ts              Sample formulary
src/lib/db.ts               Prisma client + libsql adapter
src/lib/session.ts          JWT cookie sessions
src/lib/auth.ts             Password hashing, getCurrentUser()
src/lib/stripe.ts           Stripe client (optional at boot)
src/app/api/auth/*          register / login / logout
src/app/api/checkout        Creates the order + Stripe session
src/app/api/webhooks/stripe Payment confirmation
src/app/page.tsx            Catalog
src/app/cart, login, register, account, checkout/success
```

## Before this can go live

Selling prescription medication is regulated. This template deliberately does
not implement any of it:

- **Pharmacy licensure** in every state you ship to, plus NABP/`.pharmacy`
  verification.
- **A real prescription** per order, from a licensed prescriber, verified by a
  licensed pharmacist before fulfillment. `Order.prescriptionRef` and
  `prescriptionStatus` are placeholders marking where that belongs.
- **Stripe approval.** Pharmaceutical sales fall under Stripe's restricted
  businesses; the account needs pre-approval before it can accept live payments.
- **HIPAA.** The moment you store prescription data this becomes PHI: encryption
  at rest, access logging, retention policies, and a BAA with every vendor
  touching it.
- **Production hardening.** Swap SQLite for Postgres, add rate limiting on the
  auth routes, email verification, and password reset.
