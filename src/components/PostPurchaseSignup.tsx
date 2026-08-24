'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

/**
 * Offered on the receipt page to a customer who checked out as a guest.
 *
 * The pitch has to be honest about what an account currently does. Orders can
 * already be tracked without one, and subscriptions are deferred, so the real
 * benefit today is not re-typing an address and not needing the order number.
 * Overselling it here would be the kind of copy that gets fixed later at the
 * cost of trust now.
 */
export function PostPurchaseSignup({
  orderNumber,
  signedIn,
}: {
  orderNumber: string
  /**
   * Whether the server saw a session on this request.
   *
   * The offer is hidden for a signed-in buyer, but that decision is made HERE
   * rather than by the page not rendering this component at all. Creating the
   * account signs the customer in and calls router.refresh(), which re-runs
   * the server component -- so a page-level condition would unmount this
   * component at the exact moment it has something to say, and the card would
   * silently disappear instead of confirming. Keeping the component mounted
   * and letting it decide keeps `created` alive across that refresh.
   */
  signedIn: boolean
}) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [created, setCreated] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setLoading(true)

    const form = new FormData(event.currentTarget)

    try {
      const res = await fetch('/api/auth/claim-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderNumber,
          email: form.get('email'),
          name: form.get('name'),
          password: form.get('password'),
        }),
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error ?? 'Could not create your account.')
        return
      }

      setCreated(true)
      // The header renders differently once signed in, and it was rendered on
      // the server before this request existed.
      router.refresh()
    } catch {
      setError('Could not reach the server. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (created) {
    return (
      <div className="mt-6 rounded-2xl border border-brand/40 bg-brand/10 p-6 text-left">
        <p className="font-semibold text-brand-light">
          Account created — you&apos;re signed in
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          This order is saved to your account. Your address is filled in next
          time, and you won&apos;t need the order number to check on it.
        </p>
        <Link
          href="/account"
          className="mt-4 inline-block rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-brand-light"
        >
          Go to your orders
        </Link>
      </div>
    )
  }

  // Someone who arrived already signed in has this order on their account
  // and needs no offer. Checked after `created` so the confirmation above
  // survives the refresh that signing in triggers.
  if (signedIn) return null

  if (!open) {
    return (
      <div className="mt-6 rounded-2xl border border-line bg-surface-2 p-6 text-left">
        <p className="font-semibold text-white">Save this order to an account?</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          We already have your email and address from this order. Add a password
          and next time is one step shorter — and you won&apos;t need the order
          number to check on this one.
        </p>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-4 rounded-lg border border-brand px-4 py-2.5 text-sm font-semibold text-brand-light transition hover:bg-brand/10"
        >
          Set a password
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-6 rounded-2xl border border-line bg-surface-2 p-6 text-left"
    >
      <p className="font-semibold text-white">Save this order to an account</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Use the same email you gave at checkout — that&apos;s how we match this
        order to you.
      </p>

      <div className="mt-5 space-y-4">
        <Field label="Full name" name="name" type="text" autoComplete="name" />
        <Field
          label="Email used at checkout"
          name="email"
          type="email"
          autoComplete="email"
        />
        <Field
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          minLength={8}
          hint="At least 8 characters."
        />
      </div>

      {error && (
        <p className="mt-4 rounded-lg border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300">
          {error}
        </p>
      )}

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-brand-light disabled:opacity-60"
        >
          {loading ? 'Creating…' : 'Create account'}
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="rounded-lg border border-line px-5 py-2.5 text-sm font-medium text-muted transition hover:border-brand hover:text-white"
        >
          Not now
        </button>
      </div>
    </form>
  )
}

function Field({
  label,
  hint,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  hint?: string
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs text-muted">{label}</span>
      <input
        required
        {...props}
        className="w-full rounded-md border border-line bg-surface px-3 py-2 text-white outline-none focus:border-brand"
      />
      {hint && <span className="mt-1 block text-xs text-muted">{hint}</span>}
    </label>
  )
}
