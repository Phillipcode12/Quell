'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '@/components/CartProvider'
import { formatUsd } from '@/lib/money'
import {
  FREE_SHIPPING_LABEL,
  SHIPPING_LABEL,
  remainingForFreeShipping,
  shippingCentsFor,
} from '@/lib/shipping'

type Product = {
  id: string
  name: string
  tagline: string
  sizeLabel: string
  priceCents: number
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs text-muted">{label}</span>
      <input
        {...props}
        className="w-full rounded-md border border-line bg-surface-2 px-3 py-2 text-white outline-none focus:border-brand"
      />
    </label>
  )
}

/**
 * The hosted payment page is reached by POSTing the one-time token to it —
 * there is no URL to redirect to, so the navigation has to be a form submit.
 */
function redirectToHostedPayment(formUrl: string, token: string) {
  const form = document.createElement('form')
  form.method = 'POST'
  form.action = formUrl

  const input = document.createElement('input')
  input.type = 'hidden'
  input.name = 'token'
  input.value = token

  form.appendChild(input)
  document.body.appendChild(form)
  form.submit()
}

const EMPTY_ADDRESS = {
  firstName: '',
  lastName: '',
  line1: '',
  line2: '',
  city: '',
  state: '',
  postalCode: '',
}

export function CartView({
  products,
  isSignedIn,
  paymentsReady,
}: {
  products: Product[]
  isSignedIn: boolean
  paymentsReady: boolean
}) {
  const { lines, setQuantity, remove } = useCart()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [address, setAddress] = useState(EMPTY_ADDRESS)
  const [email, setEmail] = useState('')

  function field(name: keyof typeof EMPTY_ADDRESS) {
    return {
      value: address[name],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setAddress((prev) => ({ ...prev, [name]: e.target.value })),
    }
  }

  const rows = lines
    .map((line) => {
      const product = products.find((p) => p.id === line.productId)
      return product ? { ...line, product } : null
    })
    .filter((r): r is NonNullable<typeof r> => r !== null)

  // Mirrors the server calculation in /api/checkout. The server still decides
  // what is actually charged; this is only so the cart shows the same numbers.
  const subtotal = rows.reduce(
    (sum, r) => sum + r.product.priceCents * r.quantity,
    0,
  )
  const shipping = shippingCentsFor(subtotal)
  const remaining = remainingForFreeShipping(subtotal)
  const total = subtotal + shipping

  async function checkout(event: React.FormEvent) {
    event.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: rows.map((r) => ({
            productId: r.productId,
            quantity: r.quantity,
          })),
          shipTo: { ...address, country: 'US' },
          // Ignored by the server when signed in — the account address wins.
          ...(isSignedIn ? {} : { email }),
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? 'Checkout failed.')
        return
      }
      redirectToHostedPayment(data.formUrl, data.token)
    } catch {
      setError('Could not reach the server. Is the dev server running?')
    } finally {
      setLoading(false)
    }
  }

  if (rows.length === 0) {
    return (
      <div className="mt-8 rounded-2xl border border-line bg-surface p-10 text-center">
        <p className="text-muted">Your cart is empty.</p>
        <Link
          href="/#buy"
          className="mt-5 inline-block rounded-lg bg-brand px-5 py-3 font-semibold text-black transition hover:bg-brand-light"
        >
          Shop Quell
        </Link>
      </div>
    )
  }

  return (
    <div className="mt-8 space-y-4">
      <ul className="divide-y divide-line rounded-2xl border border-line bg-surface">
        {/* Rows wrap below sm: at 375px the name, quantity, price and Remove
            together need more room than the padding box has, so on a phone the
            name takes its own line and the controls sit under it. */}
        {rows.map((row) => (
          <li
            key={row.productId}
            className="flex flex-wrap items-center gap-4 p-5"
          >
            <div className="min-w-0 basis-full sm:flex-1 sm:basis-auto">
              <p className="font-medium text-white">{row.product.name}</p>
              <p className="text-sm text-muted">
                {row.product.tagline} · {row.product.sizeLabel}
              </p>
            </div>

            <input
              type="number"
              min={1}
              max={10}
              value={row.quantity}
              onChange={(e) => setQuantity(row.productId, Number(e.target.value))}
              className="w-16 rounded-md border border-line bg-surface-2 px-2 py-1.5 text-center text-white outline-none focus:border-brand"
              aria-label={`Quantity for ${row.product.name}`}
            />

            <p className="ml-auto w-24 text-right font-semibold text-white">
              {formatUsd(row.product.priceCents * row.quantity)}
            </p>

            <button
              onClick={() => remove(row.productId)}
              className="text-sm text-muted hover:text-white"
              aria-label={`Remove ${row.product.name}`}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {remaining > 0 && (
        <p className="rounded-xl border border-brand/40 bg-brand/10 p-4 text-sm text-brand-light">
          Add <strong className="font-semibold">{formatUsd(remaining)}</strong>{' '}
          more to qualify for free shipping.
        </p>
      )}

      <div className="rounded-2xl border border-line bg-surface p-6">
        <dl className="space-y-2.5 text-sm">
          <div className="flex items-center justify-between">
            <dt className="text-muted">Subtotal</dt>
            <dd className="text-white">{formatUsd(subtotal)}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-muted">
              Shipping{' '}
              <span className="text-xs">
                ({shipping === 0 ? FREE_SHIPPING_LABEL : SHIPPING_LABEL})
              </span>
            </dt>
            <dd className={shipping === 0 ? 'text-brand-light' : 'text-white'}>
              {shipping === 0 ? 'Free' : formatUsd(shipping)}
            </dd>
          </div>
        </dl>

        <div className="mt-4 flex items-center justify-between border-t border-line pt-4 text-lg">
          <span className="font-medium">Total</span>
          <span className="font-semibold text-white">{formatUsd(total)}</span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted">
          Quell is an over-the-counter lubricating eye drop — no prescription
          needed. Read the Drug Facts panel before use. Card details are entered
          on our payment provider&apos;s secure page.
        </p>

        {error && (
          <p className="mt-4 rounded-lg border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300">
            {error}
          </p>
        )}

        <form onSubmit={checkout} className="mt-6">
          {!isSignedIn && (
            <>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                  Contact
                </h2>
                <Link
                  href="/login?next=/cart"
                  className="text-sm text-brand-light hover:underline"
                >
                  Have an account? Sign in
                </Link>
              </div>

              <div className="mt-3">
                <Field
                  label="Email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className="mt-1.5 text-xs text-muted">
                  Your receipt and tracking go here. No account needed.
                </p>
              </div>
            </>
          )}

          <h2 className="mt-6 text-sm font-semibold uppercase tracking-wide text-muted">
            Ship to
          </h2>

          <div className="mt-3 grid grid-cols-2 gap-3">
            <Field
              label="First name"
              required
              autoComplete="given-name"
              {...field('firstName')}
            />
            <Field
              label="Last name"
              required
              autoComplete="family-name"
              {...field('lastName')}
            />
            <div className="col-span-2">
              <Field
                label="Street address"
                required
                autoComplete="address-line1"
                {...field('line1')}
              />
            </div>
            <div className="col-span-2">
              <Field
                label="Apt, suite (optional)"
                autoComplete="address-line2"
                {...field('line2')}
              />
            </div>
            <div className="col-span-2">
              <Field
                label="City"
                required
                autoComplete="address-level2"
                {...field('city')}
              />
            </div>
            <Field
              label="State"
              required
              maxLength={2}
              placeholder="TN"
              autoComplete="address-level1"
              {...field('state')}
            />
            <Field
              label="ZIP"
              required
              inputMode="numeric"
              placeholder="37027"
              autoComplete="postal-code"
              {...field('postalCode')}
            />
          </div>

          <p className="mt-3 text-xs text-muted">
            We ship within the United States only.
          </p>

          <button
            type="submit"
            disabled={loading}
            className="mt-5 w-full rounded-lg bg-brand px-4 py-3 font-semibold text-black transition hover:bg-brand-light disabled:opacity-60"
          >
            {loading ? 'Redirecting…' : `Continue to payment · ${formatUsd(total)}`}
          </button>

          {!paymentsReady && (
            <p className="mt-3 text-center text-xs text-muted">
              Payment keys are not set yet — add AUTHORIZENET_API_LOGIN_ID and
              AUTHORIZENET_TRANSACTION_KEY to .env to enable checkout.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
