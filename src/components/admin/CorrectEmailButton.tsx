'use client'

import { useState, useTransition } from 'react'
import { correctEmailAndResend } from '@/app/admin/orders/actions'
import { suggestEmail } from '@/lib/email-address'

/**
 * Corrects a mistyped address on an order and resends the confirmation.
 *
 * Opens closed, because this is not part of the normal flow — it exists for
 * the case where a customer's receipt bounced and they are sitting there
 * wondering whether their money went anywhere.
 *
 * It shows the same "did you mean?" suggestion the checkout does, since an
 * admin fixing a typo by hand can make the same one.
 */
export function CorrectEmailButton({
  orderId,
  currentEmail,
}: {
  orderId: string
  currentEmail: string
}) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState(currentEmail)
  const [pending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)
  const [sentTo, setSentTo] = useState<string | null>(null)

  const suggestion = suggestEmail(email)

  function submit() {
    setError(null)
    startTransition(async () => {
      try {
        const result = await correctEmailAndResend(orderId, email)
        setSentTo(result.email)
        setOpen(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'That didn’t send.')
      }
    })
  }

  if (sentTo) {
    return (
      <p className="mt-3 text-xs text-brand-light">
        Confirmation resent to {sentTo}, and the order now uses that address.
      </p>
    )
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-3 rounded-md border border-line px-2.5 py-1 text-xs font-medium text-white transition hover:border-brand hover:bg-brand/10"
      >
        Fix email &amp; resend confirmation
      </button>
    )
  }

  return (
    <div className="mt-3 rounded-lg border border-line bg-surface-2 p-3">
      <label className="block">
        <span className="mb-1 block text-xs text-muted">
          Correct email for this order
        </span>
        <input
          type="email"
          inputMode="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-line bg-surface px-2.5 py-1.5 text-sm text-white outline-none focus:border-brand"
        />
      </label>

      {suggestion && (
        <p className="mt-1.5 text-xs text-brand-light">
          Did you mean{' '}
          <button
            type="button"
            onClick={() => setEmail(suggestion)}
            className="font-semibold underline underline-offset-2"
          >
            {suggestion}
          </button>
          ?
        </p>
      )}

      <p className="mt-2 text-xs leading-relaxed text-muted">
        This changes the address on the order, so the shipping notice and order
        lookup use it too — not just this one email.
      </p>

      {error && <p className="mt-2 text-xs text-red-300">{error}</p>}

      <div className="mt-2.5 flex gap-2">
        <button
          type="button"
          onClick={submit}
          disabled={pending || email.trim().toLowerCase() === currentEmail}
          className="rounded-md bg-brand px-3 py-1.5 text-xs font-semibold text-black transition hover:bg-brand-light disabled:opacity-60"
        >
          {pending ? 'Sending…' : 'Save & resend'}
        </button>
        <button
          type="button"
          onClick={() => {
            setOpen(false)
            setEmail(currentEmail)
            setError(null)
          }}
          className="rounded-md border border-line px-3 py-1.5 text-xs font-medium text-white transition hover:border-brand"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
