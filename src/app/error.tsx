'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { QuellLogo } from '@/components/Logo'

/**
 * Catches runtime errors below the root layout so a crash shows a branded page
 * with a way out, rather than Next's default error screen.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Replace with your error reporting service when you have one.
    console.error(error)
  }, [error])

  return (
    <div className="mx-auto max-w-xl px-6 py-24 text-center">
      {/* Named lockup: a crash is disorienting, so say where you are. */}
      <QuellLogo size="sm" showTagline={false} className="mx-auto" />

      <h1 className="mt-8 text-3xl font-semibold tracking-tight sm:text-4xl">
        Something went wrong
      </h1>
      <p className="mt-4 leading-relaxed text-muted">
        Sorry — that didn’t load. Try again, and if it keeps happening please
        get in touch.
      </p>

      {error.digest && (
        <p className="mt-4 font-mono text-xs text-muted">
          Reference: {error.digest}
        </p>
      )}

      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <button
          onClick={reset}
          className="rounded-lg bg-brand px-5 py-3 font-semibold text-black transition hover:bg-brand-light"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-lg border border-line px-5 py-3 font-medium text-white transition hover:border-brand hover:bg-white/5"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}
