'use client'

import { useState, useTransition } from 'react'
import { deleteContact } from '@/app/admin/emails/actions'

/**
 * Removes a junk address from the Emails tab.
 *
 * Two clicks, not one, and the second step names what is about to go.
 * `confirm()` would have been shorter, but a browser dialog appears detached
 * from the row that triggered it -- and the whole risk with a delete button in
 * a long table is clicking it on the wrong line.
 *
 * **`canDelete` is a convenience, not a guard.** It hides the button for
 * addresses that have paid so nobody tries; the server decides for real, from
 * its own fresh read. See `app/admin/emails/actions.ts`.
 */
export function DeleteContactButton({
  email,
  canDelete,
  summary,
}: {
  email: string
  canDelete: boolean
  /** What this row is made of, e.g. "account + abandoned cart". */
  summary: string
}) {
  const [confirming, setConfirming] = useState(false)
  const [pending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)

  if (!canDelete) {
    return (
      <span
        className="text-xs text-muted"
        title="An address with a paid order cannot be deleted here — an order is a financial record."
      >
        Paid
      </span>
    )
  }

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

  if (!confirming) {
    return (
      <button
        type="button"
        onClick={() => setConfirming(true)}
        className="whitespace-nowrap text-xs text-muted transition hover:text-red-300"
      >
        Delete
      </button>
    )
  }

  return (
    <span className="flex items-center gap-2 whitespace-nowrap">
      {/* Names what is going, because the risk with a delete button in a long
          table is clicking it on the wrong row. */}
      <span className="text-xs text-muted">Delete {summary}?</span>
      <button
        type="button"
        disabled={pending}
        onClick={() =>
          startTransition(async () => {
            try {
              await deleteContact(email)
              // No success state: the row this button lives in is gone once the
              // page revalidates, so anything set here would unmount anyway.
            } catch (cause) {
              setError(
                cause instanceof Error ? cause.message : 'Could not delete.',
              )
            }
          })
        }
        className="rounded-md border border-red-500/40 bg-red-500/10 px-2 py-1 text-xs font-medium text-red-300 transition hover:bg-red-500/20 disabled:opacity-60"
      >
        {pending ? 'Deleting…' : 'Confirm'}
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
