import type { Metadata } from 'next'
import { Suspense } from 'react'
import { ResetPasswordForm } from '@/components/ResetPasswordForm'

// Not content: kept out of search results, links still followed.
export const metadata: Metadata = {
  title: 'Choose a new password',
  robots: { index: false, follow: true },
}

export default function ResetPasswordPage() {
  return (
    <Suspense>
      <ResetPasswordForm />
    </Suspense>
  )
}
