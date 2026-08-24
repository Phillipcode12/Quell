import 'server-only'
import { adminEmails } from '@/lib/admin'

/**
 * Who gets told when an order needs packing.
 *
 * Orders are picked, packed and posted by hand from the office, so the paid
 * webhook has to actively tell someone. Before this existed, the only signal
 * was remembering to open /admin/orders — and the first missed order is a
 * week-late shipment and an apologetic email.
 *
 * A list rather than a single address, so several people can receive it
 * without anyone sharing a mailbox. Comma separated, same shape as
 * ADMIN_EMAILS.
 */
export function fulfilmentEmails(): string[] {
  const configured = (process.env.FULFILMENT_EMAILS ?? '')
    .split(',')
    .map((e) => e.trim())
    .filter(Boolean)

  if (configured.length > 0) return configured

  // Falling back to the admin allowlist means notifications work the moment
  // email is configured, without a second variable having to be remembered.
  // The admins are the people who can act on an order anyway.
  return adminEmails()
}
