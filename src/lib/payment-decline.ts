/**
 * Plain words for a card attempt that didn't go through, for the admin.
 *
 * Added 2026-11-21. Order Q-5R997H9N's buyer had their card declined by their
 * bank, left, and came back two days later through the abandoned-cart email.
 * Learning that meant signing in to Authorize.net. The webhook already
 * receives every attempt; this turns the gateway's codes into a sentence the
 * admin Abandoned page can show next to the order.
 *
 * Codes are Authorize.net's documented response and reason codes. Anything
 * not listed falls back to the gateway's own description, so an unexpected
 * code still says something true rather than nothing.
 *
 * It says why the payment failed, never anything about the customer or the
 * card itself.
 */

/** Gateway response codes: 1 approved, 2 declined, 3 error, 4 held for review. */
export const RESPONSE = { APPROVED: 1, DECLINED: 2, ERROR: 3, HELD: 4 } as const

const BY_REASON: Record<number, string> = {
  // Declined by the issuer. Code 2 is the one seen on Q-5R997H9N.
  2: 'Declined by the card’s bank',
  3: 'Declined by the card’s bank',
  4: 'Declined by the card’s bank (card flagged by the bank)',
  // Address and security-code checks.
  27: 'Billing address didn’t match the card',
  127: 'Billing address didn’t match the card',
  44: 'Card security code didn’t match',
  65: 'Card security code didn’t match',
  45: 'Billing address and security code didn’t match',
  // Card problems the customer can fix.
  6: 'Card number was invalid',
  8: 'Card has expired',
  37: 'Card number was invalid',
  // Gateway-side blocks.
  11: 'Blocked as a duplicate of a payment just tried',
  250: 'Blocked by the payment fraud filter',
  251: 'Blocked by the payment fraud filter',
  254: 'Blocked by the payment fraud filter',
  252: 'Held for review in Authorize.net',
  253: 'Held for review in Authorize.net',
}

export function describeDecline(input: {
  responseCode: number | null
  reasonCode: number | null
  reasonDescription: string | null
}): string {
  if (input.reasonCode !== null && BY_REASON[input.reasonCode]) {
    return BY_REASON[input.reasonCode]
  }
  if (input.responseCode === RESPONSE.HELD) return 'Held for review in Authorize.net'

  const prefix =
    input.responseCode === RESPONSE.ERROR ? 'Payment error' : 'Payment declined'
  const detail = input.reasonDescription?.trim()
  // Capped: the description is the gateway's text and is stored on the order.
  return detail ? `${prefix}: ${detail.slice(0, 160)}` : prefix
}
