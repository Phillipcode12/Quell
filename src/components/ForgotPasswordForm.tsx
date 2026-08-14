'use client'

import Link from 'next/link'
import { useState } from 'react'

export function ForgotPasswordForm() {
  const [sent, setSent] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setLoading(true)

    const form = new FormData(event.currentTarget)

    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.get('email') }),
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error ?? 'Something went wrong.')
        return
      }
      setSent(data.message)
    } catch {
      setError('Could not reach the server.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-md px-6 py-16">
      <div className="rounded-2xl border border-line bg-surface p-8">
        <h1 className="text-2xl font-semibold tracking-tight">
          Reset your password
        </h1>

        {sent ? (
          <>
            <p className="mt-4 rounded-lg border border-brand/40 bg-brand/10 p-4 text-sm leading-relaxed text-brand-light">
              {sent}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              The link works once and expires in 60 minutes.
            </p>
            <Link
              href="/login"
              className="mt-6 inline-block text-sm font-medium text-brand-light hover:underline"
            >
              Back to sign in
            </Link>
          </>
        ) : (
          <>
            <p className="mt-2 text-sm text-muted">
              Enter your email and we’ll send you a link to set a new password.
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <label className="block">
                <span className="text-sm font-medium">Email</span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1.5 w-full rounded-md border border-line bg-surface-2 px-3 py-2.5 text-white outline-none focus:border-brand"
                />
              </label>

              {error && (
                <p className="rounded-lg border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-brand px-4 py-3 font-semibold text-black transition hover:bg-brand-light disabled:opacity-60"
              >
                {loading ? 'Sending…' : 'Send reset link'}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-muted">
              Remembered it?{' '}
              <Link
                href="/login"
                className="font-medium text-brand-light hover:underline"
              >
                Sign in
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  )
}
