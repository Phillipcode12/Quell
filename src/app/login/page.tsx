import type { Metadata } from 'next'
import { Suspense } from 'react'
import { redirect } from 'next/navigation'
import { AuthForm } from '@/components/AuthForm'
import { getCurrentUser } from '@/lib/auth'
import { registrationOpen } from '@/lib/registration'

export const metadata: Metadata = { title: 'Sign in' }

/** Dynamic for the same reason /register is: the flag is meant to be flipped
 *  in Vercel without a redeploy, and a static page would bake in today's
 *  answer. Sign-in itself is unaffected by the flag and always available. */
export const dynamic = 'force-dynamic'

export default async function LoginPage() {
  if (await getCurrentUser()) redirect('/account')

  return (
    <Suspense>
      <AuthForm mode="login" canRegister={registrationOpen()} />
    </Suspense>
  )
}
