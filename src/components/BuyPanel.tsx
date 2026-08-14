'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '@/components/CartProvider'
import { ArrowRight } from '@/components/icons'

export function BuyPanel({
  productId,
  maxQuantity = 10,
  soldOut = false,
}: {
  productId: string
  maxQuantity?: number
  soldOut?: boolean
}) {
  const { add } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  function addToCart() {
    add(productId, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

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

  return (
    <div className="mt-8">
      <div className="flex flex-wrap items-center gap-4">
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
          {added ? 'Added to cart ✓' : 'Add to cart'}
        </button>
      </div>

      {added && (
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
