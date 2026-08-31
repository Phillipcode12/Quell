'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useCart } from '@/components/CartProvider'
import { ArrowRight } from '@/components/icons'
import { CartEmu } from '@/components/CartEmu'
import { formatUsd } from '@/lib/money'
import { BRAND } from '@/lib/product-content'

/**
 * Price and a real add-to-cart control, in the hero.
 *
 * **The homepage buries the transaction.** It runs to roughly twelve screens on
 * a phone, and the buy panel does not begin until about four screens down — so
 * a visitor who arrives already sold has to scroll past two thousand pixels of
 * science before anything will take their money. The hero's old primary button
 * was an anchor to that panel, which is one tap, but only for someone who
 * notices it and is willing to travel.
 *
 * So the hero sells directly. The panel further down keeps the quantity
 * selector, the stock badge and the detail; this is the one-bottle path, which
 * is the overwhelmingly common order.
 *
 * It deliberately does **not** duplicate the quantity selector. Two of them on
 * one page is a question the visitor has to answer twice, and the cart can
 * change quantity anyway.
 */
export function HeroBuy({
  productId,
  priceCents,
  soldOut,
}: {
  productId: string
  priceCents: number
  soldOut: boolean
}) {
  const { add, count } = useCart()
  const [justAdded, setJustAdded] = useState(false)
  // A counter rather than a boolean, so adding twice in a row restarts the emu
  // instead of being swallowed as "already true".
  const [emuTrigger, setEmuTrigger] = useState(0)
  const confirmTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Stop the pending confirmation from firing into an unmounted component.
  useEffect(
    () => () => {
      if (confirmTimer.current) clearTimeout(confirmTimer.current)
    },
    [],
  )

  function addToCart() {
    add(productId, 1)
    setEmuTrigger((n) => n + 1)
    setJustAdded(true)
    if (confirmTimer.current) clearTimeout(confirmTimer.current)
    confirmTimer.current = setTimeout(() => setJustAdded(false), 2000)
  }

  if (soldOut) {
    return (
      <div className="mt-8">
        <p className="text-2xl font-semibold text-white">
          {formatUsd(priceCents)}{' '}
          <span className="text-base font-normal text-muted">{BRAND.size}</span>
        </p>
        <p className="mt-3 rounded-lg border border-line bg-surface-2 px-5 py-3 text-sm text-muted">
          Currently out of stock — check back soon.
        </p>
      </div>
    )
  }

  return (
    <div className="mt-8">
      <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="text-3xl font-semibold text-white">
          {formatUsd(priceCents)}
        </span>
        <span className="text-sm text-muted">{BRAND.size}</span>
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          onClick={addToCart}
          className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3.5 font-semibold text-black transition hover:bg-brand-light"
        >
          {justAdded ? 'Added to cart ✓' : 'Add to cart'}
          {!justAdded && <ArrowRight className="h-4 w-4" />}
        </button>
        <Link
          href="#science"
          className="rounded-lg border border-line px-6 py-3.5 font-medium text-white transition hover:border-brand hover:bg-white/5"
        >
          Why it works
        </Link>
      </div>

      {/* Driven by the cart rather than by the click, so it stays put once
          something is in there — unlike the button's transient tick. */}
      {count > 0 && (
        <Link
          href="/cart"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-light hover:text-white hover:underline"
        >
          Go to cart ({count} {count === 1 ? 'item' : 'items'})
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}

      <CartEmu trigger={emuTrigger} />
    </div>
  )
}
