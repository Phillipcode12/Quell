'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useCart } from '@/components/CartProvider'
import { ArrowRight, Droplet, ShieldCheck, Truck } from '@/components/icons'
import { CartEmu } from '@/components/CartEmu'
import { formatUsd } from '@/lib/money'
import { DRUG_FACTS, RETURNS_SUMMARY } from '@/lib/product-content'
import {
  FREE_SHIPPING_THRESHOLD_CENTS,
  STANDARD_SHIPPING_CENTS,
  remainingForFreeShipping,
} from '@/lib/shipping'

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
  // Incremented on every add, so the emu restarts even on a repeat click.
  const [emuTrigger, setEmuTrigger] = useState(0)
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

  /**
   * Worded "normally $6.95" rather than "saves $6.95": spending $29.99 more to
   * avoid $6.95 of shipping is not a saving unless two bottles were already
   * wanted. Standard retail says it anyway; nothing else on this site claims
   * more than it can support, and this is not the place to start.
   *
   * The free-shipping threshold is $59.00 against a $29.99 bottle, which is a
   * two-pack by design — and the page never said so. The cart worked this out
   * only after someone had already committed to one.
   */
  const shortfall = remainingForFreeShipping(priceCents * quantity)
  const qualifyingQuantity = Math.ceil(FREE_SHIPPING_THRESHOLD_CENTS / priceCents)
  const canQualify =
    shortfall > 0 &&
    qualifyingQuantity > quantity &&
    qualifyingQuantity <= options.length

  function addToCart() {
    add(productId, quantity)
    // A counter rather than a boolean, so adding twice in a row restarts the
    // emu instead of being swallowed as "already true".
    setEmuTrigger((n) => n + 1)
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

      {canQualify && (
        <button
          onClick={() => setQuantity(qualifyingQuantity)}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-brand/40 bg-brand/10 px-4 py-3 text-sm text-brand-light transition hover:border-brand hover:bg-brand/20"
        >
          <Truck className="h-4 w-4 shrink-0" />
          <span>
            Make it {qualifyingQuantity} and shipping is free — normally{' '}
            {formatUsd(STANDARD_SHIPPING_CENTS)}
          </span>
        </button>
      )}

      {/* Tied to the cart having contents, not to the click, so it persists
          for as long as there is something to go and check out — including
          after a reload.

          Styled as a full-width secondary button rather than a text link. It
          was a small `text-sm` link before, which was easy to miss at the
          moment it matters most, and `hover:underline` on an inline-flex
          underlined the gaps between the label, the count and the arrow too —
          so the rule arrived in three disconnected pieces. A bordered button
          has no underline to break. */}
      {count > 0 && (
        <Link
          href="/cart"
          className="mt-4 flex w-full items-center justify-center gap-2.5 rounded-lg border-2 border-brand bg-brand/10 px-6 py-3.5 text-base font-semibold text-brand-light transition hover:bg-brand hover:text-black"
        >
          Go to cart
          <span className="font-normal opacity-80">
            ({count} {count === 1 ? 'item' : 'items'})
          </span>
          <ArrowRight className="h-5 w-5" />
        </Link>
      )}

      {/*
        The three things a first-time buyer of an unfamiliar eye drop wants to
        know at the moment they decide, none of which were visible here before:
        what shipping costs, whether they can send it back, and — the one that
        otherwise becomes a support call — that the liquid really is meant to
        look like that.
      */}
      <ul className="mt-5 space-y-2.5 border-t border-line pt-4 text-sm text-muted">
        <li className="flex items-start gap-2.5">
          <Truck className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
          <span>
            Free shipping over {formatUsd(FREE_SHIPPING_THRESHOLD_CENTS)},
            otherwise a flat {formatUsd(STANDARD_SHIPPING_CENTS)}. US only.
          </span>
        </li>
        <li className="flex items-start gap-2.5">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
          <span>
            {RETURNS_SUMMARY} —{' '}
            <Link href="/terms" className="underline hover:text-white">
              see terms
            </Link>
            .
          </span>
        </li>
        <li className="flex items-start gap-2.5">
          <Droplet className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
          {/* Straight from the Drug Facts panel rather than paraphrased, so
              the reassurance cannot drift from what the label says. */}
          <span>
            {DRUG_FACTS.otherInformation[0]} — that is expected, not a fault.
          </span>
        </li>
      </ul>

      <CartEmu trigger={emuTrigger} />
    </div>
  )
}
