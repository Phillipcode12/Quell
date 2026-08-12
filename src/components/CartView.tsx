'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '@/components/CartProvider'
import { formatUsd } from '@/lib/money'

type Product = {
  id: string
  name: string
  strength: string
  priceCents: number
  volumeMl: number
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
      <div className="mt-6 rounded-xl border border-line bg-surface p-8 text-center">
        <p className="text-muted">Your cart is empty.</p>
        <Link
          href="/"
          className="mt-4 inline-block rounded-md bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-dark"
        >
          Browse the formulary
        </Link>
      </div>
    )
  }

  return (
    <div className="mt-6 space-y-4">
      <ul className="divide-y divide-line rounded-xl border border-line bg-surface">
        {rows.map((row) => (
          <li key={row.productId} className="flex items-center gap-4 p-4">
            <div className="flex-1">
              <p className="font-medium">{row.product.name}</p>
              <p className="font-mono text-sm text-brand-dark">
                {row.product.strength} · {row.product.volumeMl} mL
              </p>
            </div>

            <input
              type="number"
              min={1}
              max={10}
              value={row.quantity}
              onChange={(e) => setQuantity(row.productId, Number(e.target.value))}
              className="w-16 rounded-md border border-line px-2 py-1.5 text-center"
              aria-label={`Quantity for ${row.product.name}`}
            />

            <p className="w-24 text-right font-semibold">
              {formatUsd(row.product.priceCents * row.quantity)}
            </p>

            <button
              onClick={() => remove(row.productId)}
              className="text-sm text-muted hover:text-foreground"
              aria-label={`Remove ${row.product.name}`}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="rounded-xl border border-line bg-surface p-5">
        <div className="flex items-center justify-between text-lg">
          <span className="font-medium">Total</span>
          <span className="font-semibold">{formatUsd(total)}</span>
        </div>

        <p className="mt-3 rounded-md bg-accent p-3 text-sm text-brand-dark">
          These are prescription-only products. Payment does not complete your
          order — it is held for pharmacist review until a valid prescription is
          verified.
        </p>

        {error && (
          <p className="mt-3 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {error}
          </p>
        )}

        {!isSignedIn ? (
          <Link
            href="/login?next=/cart"
            className="mt-4 block rounded-md bg-brand px-4 py-2.5 text-center font-medium text-white hover:bg-brand-dark"
          >
            Sign in to check out
          </Link>
        ) : (
          <>
            <button
              onClick={checkout}
              disabled={loading}
              className="mt-4 w-full rounded-md bg-brand px-4 py-2.5 font-medium text-white hover:bg-brand-dark disabled:opacity-60"
            >
              {loading ? 'Redirecting…' : 'Checkout with Stripe'}
            </button>
            {!stripeReady && (
              <p className="mt-2 text-center text-xs text-muted">
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
