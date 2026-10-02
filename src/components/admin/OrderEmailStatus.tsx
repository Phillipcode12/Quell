'use client'

import { useState, useTransition } from 'react'
import {
  resendOrderConfirmation,
  resendShippingNotice,
} from '@/app/admin/orders/actions'

/**
 * Whether an order's email actually reached the email provider.
 *
 * Two states, and the second is the reason this exists.
 *
 * - **Sent** — the provider accepted it, with the time.
 * - **Not sent** — the thing that triggers the email happened and nothing was
 *   recorded, so the send failed. Before 2026-10-02 this was indistinguishable
 *   from success: the order looked normal and nothing anywhere said the
 *   customer had been told nothing.
 *
 * One component for both emails rather than two near-identical ones, because
 * the pair would drift — and a third (the fulfilment notification) has the same
 * shape again if it is ever wanted.
 *
 * There is deliberately **no "we cannot tell" state** for orders predating the
 * columns. A draft had one, gated on a hardcoded cutoff date, which is a
 * constant that has to be guessed right and was wrong the first time. The
 * handful of older orders had their sends confirmed by hand and were
 * backfilled, so the ambiguous case has no members and needs no branch.
 *
 * > **"Sent" means the provider accepted the message.** A bounce happens after
 * > that and only the provider sees it, so this is not a substitute for the
 * > Resend dashboard when an address looks wrong — it answers "did we try, and
 * > did it leave", which is the question that used to require a trip there.
 */

type Kind = 'confirmation' | 'shipping'

const COPY: Record<
  Kind,
  { sent: string; missing: string; explain: string; action: (id: string) => Promise<unknown> }
> = {
  confirmation: {
    sent: 'Receipt emailed',
    missing: 'Receipt was not sent.',
    explain: 'This order is paid but the customer has no record of it.',
    action: resendOrderConfirmation,
  },
  shipping: {
    sent: 'Tracking emailed',
    missing: 'Tracking email was not sent.',
    explain: 'The parcel is marked shipped but the customer was not told.',
    action: resendShippingNotice,
  },
}

export function OrderEmailStatus({
  orderId,
  kind,
  sentAt,
  applicable,
}: {
  orderId: string
  kind: Kind
  sentAt: string | null
  /**
   * Whether this email should have gone at all — paid for a receipt, shipped
   * for a tracking notice. Nothing is shown when it should not have.
   */
  applicable: boolean
}) {
  const [pending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)
  const [resent, setResent] = useState(false)

  if (!applicable) return null

  const copy = COPY[kind]

  if (sentAt || resent) {
    return (
      <p className="mt-2 text-xs text-emerald-300">
        {copy.sent}{' '}
        {sentAt
          ? new Date(sentAt).toISOString().slice(0, 16).replace('T', ' ')
          : 'just now'}
        {error && <span className="ml-2 text-red-300">{error}</span>}
      </p>
    )
  }

  return (
    <p className="mt-2 text-xs text-red-300">
      <strong className="font-semibold">{copy.missing}</strong> {copy.explain}{' '}
      <button
        type="button"
        disabled={pending}
        onClick={() =>
          startTransition(async () => {
            setError(null)
            try {
              await copy.action(orderId)
              setResent(true)
            } catch (cause) {
              setError(
                cause instanceof Error ? cause.message : 'Could not send it.',
              )
            }
          })
        }
        className="underline underline-offset-2 hover:text-white disabled:opacity-60"
      >
        {pending ? 'Sending…' : 'Send it now'}
      </button>
      {error && <span className="ml-2">{error}</span>}
    </p>
  )
}
