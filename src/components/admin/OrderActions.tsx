'use client'

import { useState, useTransition } from 'react'
import {
  markCancelled,
  markShipped,
  updateStock,
} from '@/app/admin/orders/actions'
import { CARRIERS } from '@/lib/carriers'

export function OrderActions({
  orderId,
  status,
}: {
  orderId: string
  status: string
}) {
  const [pending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)
  const [carrier, setCarrier] = useState<string>('usps')
  const [trackingNumber, setTrackingNumber] = useState('')

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
    <div className="mt-5 border-t border-line pt-4">
      {canShip && (
        <div className="mb-3 flex flex-wrap items-end gap-2">
          <label className="block">
            <span className="mb-1 block text-xs text-muted">Carrier</span>
            <select
              value={carrier}
              onChange={(e) => setCarrier(e.target.value)}
              className="rounded-md border border-line bg-surface-2 px-2 py-1.5 text-sm text-white outline-none focus:border-brand"
            >
              {CARRIERS.map((c) => (
                <option key={c.key} value={c.key}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>
          <label className="block flex-1 min-w-[12rem]">
            <span className="mb-1 block text-xs text-muted">
              Tracking number{' '}
              <span className="text-muted/70">— optional</span>
            </span>
            <input
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="Paste from the label"
              className="w-full rounded-md border border-line bg-surface-2 px-2 py-1.5 text-sm text-white outline-none focus:border-brand"
            />
          </label>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3">
      {canShip && (
        <button
          onClick={() =>
            run(() =>
              markShipped(orderId, { carrier, number: trackingNumber }),
            )
          }
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
                'Cancel this order? If it was paid, the stock goes back on the shelf. Refunding is done in the Authorize.net merchant interface.',
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
          Marking shipped emails the customer
          {trackingNumber.trim() ? ' with this tracking number' : ''}.
        </span>
      )}

      {error && <span className="text-xs text-red-300">{error}</span>}
      </div>
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
