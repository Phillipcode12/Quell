'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '@/components/CartProvider'
import { ArrowRight } from '@/components/icons'
import { formatUsd } from '@/lib/money'
import {
  SUBSCRIPTION_DISCOUNT_PERCENT,
  subscriptionPriceCents,
  type PurchaseMode,
} from '@/lib/subscription'

export function BuyPanel({
  productId,
  priceCents,
  maxQuantity = 10,
  soldOut = false,
  isSignedIn = false,
}: {
  productId: string
  priceCents: number
  maxQuantity?: number
  soldOut?: boolean
  isSignedIn?: boolean
}) {
  const { add } = useCart()
  const [mode, setMode] = useState<PurchaseMode>('one_time')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const subPrice = subscriptionPriceCents(priceCents)
  const discounted = SUBSCRIPTION_DISCOUNT_PERCENT > 0

  if (soldOut) {
    return (
      <div className="mt-8 rounded-lg border border-line bg-surface-2 px-6 py-4 text-center">
        <p className="font-semibold text-white">Currently out of stock</p>
        <p className="mt-1 text-sm text-muted">
          Check back soon — we restock regularly.
        </p>
      </div>
    )
  }

  const options = Array.from(
    { length: Math.max(1, Math.min(10, maxQuantity)) },
    (_, i) => i + 1,
  )

  function addToCart() {
    add(productId, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  // Subscriptions skip the cart: they're a single recurring line, and mixing
  // them with one-time items in one Checkout Session isn't supported.
  async function startSubscription() {
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode: 'subscription',
          items: [{ productId, quantity }],
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? 'Could not start checkout.')
        return
      }
      window.location.href = data.url
    } catch {
      setError('Could not reach the server.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-8">
      <fieldset className="space-y-3">
        <legend className="sr-only">Purchase options</legend>

        <PurchaseOption
          checked={mode === 'one_time'}
          onSelect={() => setMode('one_time')}
          title="One-time purchase"
          price={formatUsd(priceCents)}
          detail="Ships once."
        />

        <PurchaseOption
          checked={mode === 'subscription'}
          onSelect={() => setMode('subscription')}
          title={
            discounted
              ? `Subscribe & save ${SUBSCRIPTION_DISCOUNT_PERCENT}%`
              : 'Subscribe monthly'
          }
          price={formatUsd(subPrice)}
          detail="Delivered monthly, free shipping. Cancel anytime."
          badge={discounted ? 'Best value' : undefined}
          strikethrough={discounted ? formatUsd(priceCents) : undefined}
        />
      </fieldset>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <label className="flex items-center gap-3">
          <span className="text-sm font-medium text-muted">Quantity</span>
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="rounded-md border border-line bg-surface-2 px-3 py-2.5 text-white outline-none focus:border-brand"
          >
            {options.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>

        {mode === 'one_time' ? (
          <button
            onClick={addToCart}
            className="flex-1 rounded-lg bg-brand px-6 py-3.5 font-semibold text-black transition hover:bg-brand-light"
          >
            {added ? 'Added to cart ✓' : 'Add to cart'}
          </button>
        ) : isSignedIn ? (
          <button
            onClick={startSubscription}
            disabled={loading}
            className="flex-1 rounded-lg bg-brand px-6 py-3.5 font-semibold text-black transition hover:bg-brand-light disabled:opacity-60"
          >
            {loading ? 'Redirecting…' : 'Subscribe'}
          </button>
        ) : (
          <Link
            href="/login?next=/%23buy"
            className="flex-1 rounded-lg bg-brand px-6 py-3.5 text-center font-semibold text-black transition hover:bg-brand-light"
          >
            Sign in to subscribe
          </Link>
        )}
      </div>

      {error && (
        <p className="mt-4 rounded-lg border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300">
          {error}
        </p>
      )}

      {added && mode === 'one_time' && (
        <Link
          href="/cart"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-light hover:underline"
        >
          Go to cart
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  )
}

function PurchaseOption({
  checked,
  onSelect,
  title,
  price,
  detail,
  badge,
  strikethrough,
}: {
  checked: boolean
  onSelect: () => void
  title: string
  price: string
  detail: string
  badge?: string
  strikethrough?: string
}) {
  return (
    <label
      className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition ${
        checked
          ? 'border-brand bg-brand/10'
          : 'border-line bg-surface-2 hover:border-brand/50'
      }`}
    >
      <input
        type="radio"
        name="purchase-mode"
        checked={checked}
        onChange={onSelect}
        className="mt-1 h-4 w-4 accent-[color:var(--brand)]"
      />
      <span className="flex-1">
        <span className="flex flex-wrap items-center gap-2">
          <span className="font-semibold text-white">{title}</span>
          {badge && (
            <span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-black">
              {badge}
            </span>
          )}
        </span>
        <span className="mt-1 block text-sm text-muted">{detail}</span>
      </span>
      <span className="text-right">
        <span className="block font-semibold text-white">{price}</span>
        {strikethrough && (
          <span className="block text-xs text-muted line-through">
            {strikethrough}
          </span>
        )}
      </span>
    </label>
  )
}
