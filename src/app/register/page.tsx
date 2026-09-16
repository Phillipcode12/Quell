import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { AuthForm } from '@/components/AuthForm'
import { getCurrentUser } from '@/lib/auth'
import { REGISTRATION_CLOSED_MESSAGE, registrationOpen } from '@/lib/registration'

export const metadata: Metadata = { title: 'Create an account' }

/**
 * The page is dynamic because `registrationOpen()` reads an environment
 * variable that is meant to be flipped in Vercel without a redeploy. A static
 * page would bake today's answer into the build and keep serving it.
 */
export const dynamic = 'force-dynamic'

export default async function RegisterPage() {
  if (await getCurrentUser()) redirect('/account')

  if (!registrationOpen()) {
    return (
      <div className="mx-auto max-w-md px-6 py-20">
        <h1 className="text-2xl font-semibold tracking-tight text-white">
          New accounts are paused
        </h1>
        <p className="mt-4 leading-relaxed text-muted">
          {REGISTRATION_CLOSED_MESSAGE}
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <Link
            href="/#buy"
            className="inline-flex justify-center rounded-lg bg-brand px-5 py-3 font-semibold text-black transition hover:bg-brand-light"
          >
            Buy Quell as a guest
          </Link>
          {/* Sign-in stays open: existing customers, and the admin area, both
              depend on it. */}
          <Link
            href="/login"
            className="inline-flex justify-center rounded-lg border border-line px-5 py-3 font-semibold text-white transition hover:border-brand"
          >
            Sign in to an existing account
          </Link>
        </div>

        <p className="mt-8 text-sm text-muted">
          Already ordered without an account? You can look it up on the{' '}
          <Link href="/orders" className="text-brand-light hover:underline">
            order lookup page
          </Link>
          .
        </p>
      </div>
    )
  }

  return (
    <Suspense>
      <AuthForm
        mode="register"
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
      />
    </Suspense>
  )
}
