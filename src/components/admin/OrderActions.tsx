'use client'

import { useState, useTransition } from 'react'
import {
  markCancelled,
  markShipped,
  updateStock,
} from '@/app/admin/orders/actions'

export function OrderActions({
  orderId,
  status,
}: {
  orderId: string
  status: string
}) {
  const [pending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)

  const canShip = status === 'paid'
  const canCancel = status === 'pending' || status === 'paid'

  if (!canShip && !canCancel) return null

  function run(action: () => Promise<{ ok: boolean }>) {
    setError(null)
    startTransition(async () => {
      try {
        await action()
      } catch {
        setError('That didn’t go through. Refresh and try again.')
      }
    })
  }

  return (
    <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-line pt-4">
      {canShip && (
        <button
          onClick={() => run(() => markShipped(orderId))}
          disabled={pending}
          className="rounded-md bg-brand px-4 py-2 text-sm font-semibold text-black transition hover:bg-brand-light disabled:opacity-60"
        >
          {pending ? 'Working…' : 'Mark shipped'}
        </button>
      )}

      {canCancel && (
        <button
          onClick={() => {
            if (
              confirm(
                'Cancel this order? If it was paid, the stock goes back on the shelf. Refunding is done in Stripe.',
              )
            ) {
              run(() => markCancelled(orderId))
            }
          }}
          disabled={pending}
          className="rounded-md border border-line px-4 py-2 text-sm text-muted transition hover:border-red-500/50 hover:text-red-300 disabled:opacity-60"
        >
          Cancel order
        </button>
      )}

      {canShip && (
        <span className="text-xs text-muted">
          Marking shipped emails the customer.
        </span>
      )}

      {error && <span className="text-xs text-red-300">{error}</span>}
    </div>
  )
}

export function StockEditor({
  productId,
  stockQuantity,
}: {
  productId: string
  stockQuantity: number
}) {
  const [value, setValue] = useState(stockQuantity)
  const [pending, startTransition] = useTransition()
  const [saved, setSaved] = useState(false)

  const dirty = value !== stockQuantity

  return (
    <div className="flex items-center gap-2">
      <label className="text-sm text-muted" htmlFor={`stock-${productId}`}>
        On hand
      </label>
      <input
        id={`stock-${productId}`}
        type="number"
        min={0}
        value={value}
        onChange={(e) => {
          setValue(Number(e.target.value))
          setSaved(false)
        }}
        className="w-24 rounded-md border border-line bg-surface-2 px-2 py-1.5 text-center text-white outline-none focus:border-brand"
      />
      <button
        onClick={() =>
          startTransition(async () => {
            await updateStock(productId, value)
            setSaved(true)
          })
        }
        disabled={pending || !dirty}
        className="rounded-md border border-line px-3 py-1.5 text-sm text-muted transition hover:border-brand hover:text-white disabled:opacity-40"
      >
        {pending ? 'Saving…' : saved && !dirty ? 'Saved ✓' : 'Save'}
      </button>
    </div>
  )
}
