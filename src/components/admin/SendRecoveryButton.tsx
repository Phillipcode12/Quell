'use client'

import { useState, useTransition } from 'react'
import { sendRecoveryEmail } from '@/app/admin/abandoned/actions'

/**
 * Sends the recovery email for one cart, by hand.
 *
 * **Confirms first when one has already gone out.** The automatic run can
 * never send twice, so a second email is only ever a person deciding to — and
 * that decision should be deliberate rather than one stray click on a row that
 * already says "sent".
 */
export function SendRecoveryButton({
  orderId,
  alreadySent,
}: {
  orderId: string
  alreadySent: boolean
}) {
  const [pending, startTransition] = useTransition()
  const [done, setDone] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function send() {
    if (
      alreadySent &&
      !window.confirm(
        'A recovery email has already been sent for this cart. Send another?',
      )
    ) {
      return
    }

    setError(null)
    startTransition(async () => {
      try {
        await sendRecoveryEmail(orderId)
        setDone(true)
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'That didn’t send. Try again.',
        )
      }
    })
  }

  if (done) {
    return <span className="text-xs font-medium text-brand-light">Sent ✓</span>
  }

  return (
    <span className="inline-flex flex-col items-start gap-1">
      <button
        type="button"
        onClick={send}
        disabled={pending}
        className="rounded-md border border-line px-2.5 py-1 text-xs font-medium text-white transition hover:border-brand hover:bg-brand/10 disabled:opacity-60"
      >
        {pending ? 'Sending…' : alreadySent ? 'Send again' : 'Send now'}
      </button>
      {error && <span className="text-xs text-red-300">{error}</span>}
    </span>
  )
}
