'use client'

import { useState, useTransition } from 'react'
import { resendShippingNotice } from '@/app/admin/orders/actions'

/**
 * Whether the customer was actually told their parcel shipped.
 *
 * Two states, and the second is the reason this exists.
 *
 * - **Sent** — the provider accepted it, with the time.
 * - **Not sent** — `shippedAt` is set and `shippingEmailSentAt` is not, so the
 *   send failed. Before 2026-10-02 this looked identical to success: the order
 *   read "shipped" and nothing recorded that nobody had been told.
 *
 * There is deliberately **no third "we cannot tell" state** for orders that
 * shipped before the column existed. A draft had one, gated on a hardcoded
 * cutoff date, which is a constant that has to be guessed correctly and was
 * wrong the first time — it read every freshly shipped order as "too old to
 * know". The one order that predated the column had its notice confirmed by
 * hand in Resend and was backfilled instead, so the ambiguous case has no
 * members and needs no branch.
 *
 * > **"Sent" means the email provider accepted the message.** A bounce happens
 * > after that and only the provider sees it, so this is not a substitute for
 * > the Resend dashboard when an address looks wrong — it answers "did we try
 * > and did it leave", which is the question that used to need a trip there.
 */
export function ShippingNoticeStatus({
  orderId,
  shippedAt,
  shippingEmailSentAt,
}: {
  orderId: string
  shippedAt: string | null
  shippingEmailSentAt: string | null
}) {
  const [pending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)
  const [resent, setResent] = useState(false)

  if (!shippedAt) return null

  const resend = (
    <button
      type="button"
      disabled={pending}
      onClick={() =>
        startTransition(async () => {
          setError(null)
          try {
            await resendShippingNotice(orderId)
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
  )

  if (shippingEmailSentAt || resent) {
    return (
      <p className="mt-3 text-xs text-emerald-300">
        Tracking emailed{' '}
        {shippingEmailSentAt
          ? new Date(shippingEmailSentAt).toISOString().slice(0, 16).replace('T', ' ')
          : 'just now'}
        {error && <span className="ml-2 text-red-300">{error}</span>}
      </p>
    )
  }

  return (
    <p className="mt-3 text-xs text-red-300">
      <strong className="font-semibold">
        Tracking email was not sent.
      </strong>{' '}
      The parcel is marked shipped but the customer was not told. {resend}
      {error && <span className="ml-2">{error}</span>}
    </p>
  )
}
