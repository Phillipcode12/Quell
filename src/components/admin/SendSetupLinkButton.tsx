'use client'

import { useState, useTransition } from 'react'
import { sendStaffSetupLink } from '@/app/admin/staff/actions'

/**
 * Emails one allowlisted address a link to choose a password.
 *
 * **Two clicks, like the delete button, for a different reason.** Nothing is
 * destroyed here, but the click puts mail in someone's inbox, and the second
 * step names the address so it cannot be sent to the wrong row of the table.
 *
 * **`label` differs by row state** — "Send setup link" for someone with no
 * account, "Send a new link" when one is already outstanding or has lapsed —
 * because the two read very differently to the person clicking even though the
 * server does the same thing.
 *
 * The result is reported rather than assumed. `delivered: false` means the row
 * was created and the token issued but the mail did not go, which is the one
 * outcome that would otherwise leave someone waiting for a link forever.
 */
export function SendSetupLinkButton({
  email,
  label,
}: {
  email: string
  label: string
}) {
  const [confirming, setConfirming] = useState(false)
  const [pending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState<'ok' | 'not-delivered' | null>(null)

  if (error) {
    return (
      <span className="text-xs text-red-300">
        {error}{' '}
        <button
          type="button"
          onClick={() => {
            setError(null)
            setConfirming(false)
          }}
          className="underline underline-offset-2"
        >
          Dismiss
        </button>
      </span>
    )
  }

  if (sent === 'ok') {
    return (
      <span className="whitespace-nowrap text-xs text-brand-light">
        Link sent to {email}
      </span>
    )
  }

  if (sent === 'not-delivered') {
    return (
      <span className="text-xs text-red-300">
        The link was created but the email did not send. Check Resend, then send
        a new link.
      </span>
    )
  }

  if (!confirming) {
    return (
      <button
        type="button"
        onClick={() => setConfirming(true)}
        className="whitespace-nowrap rounded-md border border-line px-2.5 py-1 text-xs font-medium text-muted transition hover:border-brand hover:text-white"
      >
        {label}
      </button>
    )
  }

  return (
    <span className="flex flex-wrap items-center gap-2">
      <span className="text-xs text-muted">Email {email} a setup link?</span>
      <button
        type="button"
        disabled={pending}
        onClick={() =>
          startTransition(async () => {
            try {
              const result = await sendStaffSetupLink(email)
              setSent(result.delivered ? 'ok' : 'not-delivered')
            } catch (cause) {
              setError(
                cause instanceof Error
                  ? cause.message
                  : 'Could not send the link.',
              )
            }
          })
        }
        className="rounded-md bg-brand px-2.5 py-1 text-xs font-semibold text-black transition hover:bg-brand-light disabled:opacity-60"
      >
        {pending ? 'Sending…' : 'Send'}
      </button>
      <button
        type="button"
        disabled={pending}
        onClick={() => setConfirming(false)}
        className="text-xs text-muted hover:text-white"
      >
        Cancel
      </button>
    </span>
  )
}
