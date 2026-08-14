'use client'

import { useState } from 'react'

export function ManageSubscriptionButton() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function open() {
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('/api/billing-portal', { method: 'POST' })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? 'Could not open billing portal.')
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
    <div>
      <button
        onClick={open}
        disabled={loading}
        className="rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-brand-light disabled:opacity-60"
      >
        {loading ? 'Opening…' : 'Manage subscription'}
      </button>
      {error && <p className="mt-2 text-sm text-red-300">{error}</p>}
    </div>
  )
}
