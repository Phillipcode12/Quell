import type { Metadata } from 'next'
import { ForgotPasswordForm } from '@/components/ForgotPasswordForm'

export const metadata: Metadata = { title: 'Reset your password' }

export default function ForgotPasswordPage() {
  // Read here rather than inside the client component so that a build without
  // the key produces a form with no widget and no disabled button, instead of
  // a widget that can never issue a token. The server skips its own check in
  // the same situation, so the two stay in step.
  return (
    <ForgotPasswordForm siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} />
  )
}
