'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useCart } from '@/components/CartProvider'
import { ArrowRight } from '@/components/icons'
import { formatUsd } from '@/lib/money'

/**
 * Buy controls for the single SKU.
 *
 * Purchases are one-time only. The monthly refill option is deferred until
 * recurring billing is built on the gateway's ARB API — the pricing rules for
 * it still live in lib/subscription.ts, unused, ready for that phase.
 */
export function BuyPanel({
  productId,
  priceCents,
  maxQuantity = 10,
  soldOut = false,
}: {
  productId: string
  priceCents: number
  maxQuantity?: number
  soldOut?: boolean
}) {
  const { add, count } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [justAdded, setJustAdded] = useState(false)
  const confirmTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Stop the pending confirmation from firing into an unmounted component.
  useEffect(
    () => () => {
      if (confirmTimer.current) clearTimeout(confirmTimer.current)
    },
    [],
  )

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
    // Only the button's tick is transient — it confirms *this* click. The link
    // below is driven by the cart itself, so it stays put.
    setJustAdded(true)
    if (confirmTimer.current) clearTimeout(confirmTimer.current)
    confirmTimer.current = setTimeout(() => setJustAdded(false), 2000)
  }

  return (
    <div className="mt-8">
      <div className="flex items-baseline justify-between rounded-xl border border-line bg-surface-2 p-4">
        <span className="font-semibold text-white">One-time purchase</span>
        <span className="font-semibold text-white">
          {formatUsd(priceCents)}
        </span>
      </div>

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

        <button
          onClick={addToCart}
          className="flex-1 rounded-lg bg-brand px-6 py-3.5 font-semibold text-black transition hover:bg-brand-light"
        >
          {justAdded ? 'Added to cart ✓' : 'Add to cart'}
        </button>
      </div>

      {/* Tied to the cart having contents, not to the click, so it persists
          for as long as there is something to go and check out — including
          after a reload. */}
      {count > 0 && (
        <Link
          href="/cart"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-light hover:underline"
        >
          Go to cart
          <span className="text-muted">
            ({count} {count === 1 ? 'item' : 'items'})
          </span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  )
}
