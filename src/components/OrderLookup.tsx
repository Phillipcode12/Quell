'use client'

import { useState } from 'react'
import { formatUsd } from '@/lib/money'

type FoundOrder = {
  orderNumber: string
  status: string
  createdAt: string
  subtotalCents: number
  shippingCents: number
  totalCents: number
  shippingName: string | null
  shippingLine1: string | null
  shippingLine2: string | null
  shippingCity: string | null
  shippingState: string | null
  shippingPostalCode: string | null
  items: {
    quantity: number
    unitPriceCents: number
    product: { name: string; sizeLabel: string }
  }[]
}

const STATUS: Record<string, { label: string; className: string; note: string }> =
  {
    pending: {
      label: 'Awaiting payment',
      className: 'border-amber-500/40 bg-amber-500/10 text-amber-200',
      note: 'We have not received payment yet. If you just paid, this can take a moment to update.',
    },
    paid: {
      label: 'Paid — preparing',
      className: 'border-brand/40 bg-brand/10 text-brand-light',
      note: 'Payment received. We are getting your order ready to ship.',
    },
    shipped: {
      label: 'Shipped',
      className: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200',
      note: 'On its way. Check your email for tracking details.',
    },
    cancelled: {
      label: 'Cancelled',
      className: 'border-red-500/40 bg-red-500/10 text-red-300',
      note: 'This order was cancelled. You were not charged, or you were refunded.',
    },
  }

export function OrderLookup({ initialOrderNumber = '' }: { initialOrderNumber?: string }) {
  const [orderNumber, setOrderNumber] = useState(initialOrderNumber)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [order, setOrder] = useState<FoundOrder | null>(null)

  async function lookup(event: React.FormEvent) {
    event.preventDefault()
    setLoading(true)
    setError(null)
    setOrder(null)
    try {
      const res = await fetch('/api/orders/lookup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderNumber, email }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? 'Could not look that order up.')
        return
      }
      setOrder(data.order)
    } catch {
      setError('Could not reach the server. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const status = order ? (STATUS[order.status] ?? STATUS.pending) : null

  return (
    <div className="mt-8">
      <form
        onSubmit={lookup}
        className="rounded-2xl border border-line bg-surface p-6"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1 block text-xs text-muted">Order number</span>
            <input
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              required
              placeholder="Q-7F3K9M2A"
              className="w-full rounded-md border border-line bg-surface-2 px-3 py-2 uppercase text-white outline-none focus:border-brand"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs text-muted">
              Email used at checkout
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              placeholder="you@example.com"
              className="w-full rounded-md border border-line bg-surface-2 px-3 py-2 text-white outline-none focus:border-brand"
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-5 w-full rounded-lg bg-brand px-4 py-3 font-semibold text-black transition hover:bg-brand-light disabled:opacity-60 sm:w-auto sm:px-8"
        >
          {loading ? 'Looking…' : 'Find my order'}
        </button>

        {error && (
          <p className="mt-4 rounded-lg border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300">
            {error}
          </p>
        )}
      </form>

      {order && status && (
        <div className="mt-6 rounded-2xl border border-line bg-surface p-6">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-lg font-semibold text-white">
              Order {order.orderNumber}
            </h2>
            <span
              className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${status.className}`}
            >
              {status.label}
            </span>
            <span className="ml-auto text-sm text-muted">
              {new Date(order.createdAt).toLocaleDateString()}
            </span>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-muted">
            {status.note}
          </p>

          <ul className="mt-5 space-y-1 border-t border-line pt-4 text-sm text-muted">
            {order.items.map((item, i) => (
              <li key={i}>
                {item.quantity} × {item.product.name} —{' '}
                {formatUsd(item.unitPriceCents * item.quantity)}
              </li>
            ))}
          </ul>

          <dl className="mt-4 space-y-1.5 border-t border-line pt-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted">Subtotal</dt>
              <dd className="text-white">{formatUsd(order.subtotalCents)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted">Shipping</dt>
              <dd className="text-white">
                {order.shippingCents === 0
                  ? 'Free'
                  : formatUsd(order.shippingCents)}
              </dd>
            </div>
            <div className="flex justify-between border-t border-line pt-2 font-semibold">
              <dt>Total</dt>
              <dd className="text-white">{formatUsd(order.totalCents)}</dd>
            </div>
          </dl>

          {order.shippingLine1 && (
            <div className="mt-5 border-t border-line pt-4 text-sm text-muted">
              <p className="font-semibold text-white">Shipping to</p>
              <p className="mt-1 leading-relaxed">
                {order.shippingName}
                <br />
                {order.shippingLine1}
                {order.shippingLine2 && (
                  <>
                    <br />
                    {order.shippingLine2}
                  </>
                )}
                <br />
                {[order.shippingCity, order.shippingState]
                  .filter(Boolean)
                  .join(', ')}{' '}
                {order.shippingPostalCode}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
