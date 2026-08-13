'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '@/components/CartProvider'
import { formatUsd } from '@/lib/money'

type Product = {
  id: string
  name: string
  tagline: string
  sizeLabel: string
  priceCents: number
}

export function CartView({
  products,
  isSignedIn,
  stripeReady,
}: {
  products: Product[]
  isSignedIn: boolean
  stripeReady: boolean
}) {
  const { lines, setQuantity, remove } = useCart()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const rows = lines
    .map((line) => {
      const product = products.find((p) => p.id === line.productId)
      return product ? { ...line, product } : null
    })
    .filter((r): r is NonNullable<typeof r> => r !== null)

  const total = rows.reduce(
    (sum, r) => sum + r.product.priceCents * r.quantity,
    0,
  )

  async function checkout() {
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
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? 'Checkout failed.')
        return
      }
      window.location.href = data.url
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
        {rows.map((row) => (
          <li key={row.productId} className="flex items-center gap-4 p-5">
            <div className="flex-1">
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

            <p className="w-24 text-right font-semibold text-white">
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

      <div className="rounded-2xl border border-line bg-surface p-6">
        <div className="flex items-center justify-between text-lg">
          <span className="font-medium">Total</span>
          <span className="font-semibold text-white">{formatUsd(total)}</span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted">
          Quell is an over-the-counter lubricating eye drop — no prescription
          needed. Read the Drug Facts panel before use.
        </p>

        {error && (
          <p className="mt-4 rounded-lg border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300">
            {error}
          </p>
        )}

        {!isSignedIn ? (
          <Link
            href="/login?next=/cart"
            className="mt-5 block rounded-lg bg-brand px-4 py-3 text-center font-semibold text-black transition hover:bg-brand-light"
          >
            Sign in to check out
          </Link>
        ) : (
          <>
            <button
              onClick={checkout}
              disabled={loading}
              className="mt-5 w-full rounded-lg bg-brand px-4 py-3 font-semibold text-black transition hover:bg-brand-light disabled:opacity-60"
            >
              {loading ? 'Redirecting…' : 'Checkout with Stripe'}
            </button>
            {!stripeReady && (
              <p className="mt-3 text-center text-xs text-muted">
                Stripe keys are not set yet — add STRIPE_SECRET_KEY to .env to
                enable payment.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  )
}
