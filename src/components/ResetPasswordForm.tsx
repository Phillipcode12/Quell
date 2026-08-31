'use client'

import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { PasswordField } from '@/components/PasswordField'

export function ResetPasswordForm() {
  const router = useRouter()
  const token = useSearchParams().get('token') ?? ''
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    const form = new FormData(event.currentTarget)
    const password = String(form.get('password') ?? '')
    const confirm = String(form.get('confirm') ?? '')

    if (password !== confirm) {
      setError('Those passwords don’t match.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error ?? 'Something went wrong.')
        return
      }

      router.push('/account')
      router.refresh()
    } catch {
      setError('Could not reach the server.')
    } finally {
      setLoading(false)
    }
  }

  if (!token) {
    return (
      <div className="mx-auto max-w-md px-6 py-16">
        <div className="rounded-2xl border border-line bg-surface p-8">
          <h1 className="text-2xl font-semibold tracking-tight">
            This link is incomplete
          </h1>
          <p className="mt-3 leading-relaxed text-muted">
            The reset link is missing its token. Request a new one.
          </p>
          <Link
            href="/forgot-password"
            className="mt-6 inline-block rounded-lg bg-brand px-5 py-3 font-semibold text-black transition hover:bg-brand-light"
          >
            Request a new link
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-md px-6 py-16">
      <div className="rounded-2xl border border-line bg-surface p-8">
        <h1 className="text-2xl font-semibold tracking-tight">
          Choose a new password
        </h1>
        <p className="mt-2 text-sm text-muted">
          You’ll be signed in once it’s saved.
        </p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <PasswordField
            label="New password"
            name="password"
            autoComplete="new-password"
            minLength={8}
            required
            hint="At least 8 characters."
          />

          <PasswordField
            label="Confirm password"
            name="confirm"
            autoComplete="new-password"
            minLength={8}
            required
          />

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
            {loading ? 'Saving…' : 'Save new password'}
          </button>
        </form>
      </div>
    </div>
  )
}
