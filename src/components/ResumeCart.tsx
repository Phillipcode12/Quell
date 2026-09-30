'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useCart, type CartLine } from '@/components/CartProvider'

/**
 * Restores an abandoned order into the cart, then sends the visitor there.
 *
 * **Replaces rather than merges.** If someone still has items on this device,
 * adding the emailed order on top would silently double their quantities —
 * they clicked a link about one specific order and should get exactly that.
 *
 * ### Why the navigation waits
 *
 * The obvious version — apply the lines and call `router.replace` in the same
 * effect — does not work, and fails in a way that looks like success: the
 * visitor lands on `/cart` and it is empty.
 *
 * `clear()` and `add()` only *queue* state updates. React has not flushed them
 * when the next statement runs, and a child's effect fires before the
 * provider's own effect that writes the cart. Navigating there and then means
 * arriving before the cart exists.
 *
 * So the write and the navigation are separate effects, and the second waits
 * until the cart genuinely holds what the order held. Nothing is trusted to
 * have happened; it is observed.
 */
export function ResumeCart({ lines }: { lines: CartLine[] }) {
  const router = useRouter()
  const { lines: cartLines, clear, add } = useCart()
  const applied = useRef(false)
  const navigated = useRef(false)

  useEffect(() => {
    if (applied.current) return
    applied.current = true

    clear()
    for (const line of lines) add(line.productId, line.quantity)
  }, [lines, clear, add])

  useEffect(() => {
    if (!applied.current || navigated.current) return

    // Compared on total units rather than array identity: the provider may
    // merge or reorder lines, and what matters is that the order arrived.
    const wanted = lines.reduce((sum, l) => sum + l.quantity, 0)
    const inCart = cartLines.reduce((sum, l) => sum + l.quantity, 0)
    if (inCart < wanted) return

    navigated.current = true
    // replace, not push: the back button should return to wherever they came
    // from, not to a page that immediately rewrites the cart again.
    router.replace('/cart')
  }, [cartLines, lines, router])

  return (
    <div className="mx-auto max-w-md px-6 py-24 text-center">
      <p className="text-lg font-medium text-white">Getting your cart…</p>
      <p className="mt-2 text-sm text-muted">
        One moment — we&rsquo;re putting your order back together.
      </p>
    </div>
  )
}
