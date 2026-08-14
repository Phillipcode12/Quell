'use client'

import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export function AuthForm({ mode }: { mode: 'login' | 'register' }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const isRegister = mode === 'register'

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setLoading(true)

    const form = new FormData(event.currentTarget)
    const payload = Object.fromEntries(form) as Record<string, string>

    try {
      const res = await fetch(
        isRegister ? '/api/auth/register' : '/api/auth/login',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        },
      )
      const data = await res.json()

      if (!res.ok) {
        setError(data.error ?? 'Something went wrong.')
        return
      }

      // Only allow same-site relative paths, so ?next= can't send users off-site.
      const next = searchParams.get('next')
      const target = next?.startsWith('/') && !next.startsWith('//') ? next : '/account'

      router.push(target)
      router.refresh()
    } catch {
      setError('Could not reach the server.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-md px-6 py-12">
      <div className="rounded-2xl border border-line bg-surface p-8">
        <h1 className="text-2xl font-semibold tracking-tight">
          {isRegister ? 'Create your account' : 'Sign in'}
        </h1>
        <p className="mt-2 text-sm text-muted">
          {isRegister
            ? 'An account lets you track your orders and reorder in one click.'
            : 'Welcome back.'}
        </p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          {isRegister && (
            <Field
              label="Full name"
              name="name"
              type="text"
              autoComplete="name"
              required
            />
          )}

          <Field
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />

          <Field
            label="Password"
            name="password"
            type="password"
            autoComplete={isRegister ? 'new-password' : 'current-password'}
            required
            hint={isRegister ? 'At least 8 characters.' : undefined}
          />

          {!isRegister && (
            <p className="text-right text-sm">
              <Link
                href="/forgot-password"
                className="text-muted hover:text-brand-light hover:underline"
              >
                Forgot your password?
              </Link>
            </p>
          )}

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
            {loading
              ? 'Working…'
              : isRegister
                ? 'Create account'
                : 'Sign in'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted">
          {isRegister ? 'Already have an account? ' : "Don't have an account? "}
          <Link
            href={isRegister ? '/login' : '/register'}
            className="font-medium text-brand hover:underline"
          >
            {isRegister ? 'Sign in' : 'Create one'}
          </Link>
        </p>
      </div>
    </div>
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
      <span className="text-sm font-medium">{label}</span>
      <input
        {...props}
        className="mt-1.5 w-full rounded-md border border-line bg-surface-2 px-3 py-2.5 text-white outline-none focus:border-brand"
      />
      {hint && <span className="mt-1 block text-xs text-muted">{hint}</span>}
    </label>
  )
}
