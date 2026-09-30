import 'server-only'
import { promises as dns } from 'node:dns'

/**
 * Does this domain have a mail server at all?
 *
 * A domain with no MX record — and no A record to fall back on — **cannot
 * receive email**. That is a fact about the internet rather than a guess about
 * the typist, which is what makes it safe to refuse an order over.
 *
 * It is what would have caught the first real order's `gmal.com` (§35).
 *
 * ### It fails OPEN, and that is deliberate
 *
 * Every other guard in this codebase fails closed. This one does not.
 *
 * The others protect us from an attacker; this one protects a customer from a
 * typo. If DNS is slow, rate-limited, or briefly unreachable, failing closed
 * would refuse a paying customer at the last step of checkout over an
 * infrastructure hiccup they cannot see or fix. **A lost sale is worse than an
 * undeliverable receipt**, so anything other than a definitive "this domain
 * has no mail server" lets the order through.
 */

/** Long enough for a real lookup, short enough not to stall a checkout. */
const TIMEOUT_MS = 2500

/** Cheap in-process memo. Checkout is bursty and domains repeat. */
const cache = new Map<string, boolean>()
const MAX_CACHED = 500

export async function domainAcceptsMail(email: string): Promise<boolean> {
  const at = email.lastIndexOf('@')
  if (at < 1) return true // Shape is someone else's problem; do not block here.

  const domain = email.slice(at + 1).trim().toLowerCase()
  if (!domain) return true

  const cached = cache.get(domain)
  if (cached !== undefined) return cached

  const timeout = new Promise<'timeout'>((resolve) =>
    setTimeout(() => resolve('timeout'), TIMEOUT_MS),
  )

  let accepts = true
  try {
    const result = await Promise.race([dns.resolveMx(domain), timeout])

    if (result === 'timeout') {
      // Unknown, not bad. Fail open.
      return true
    }

    if (Array.isArray(result) && result.length > 0) {
      accepts = true
    } else {
      /**
       * No MX. Before refusing, check for an A record: RFC 5321 says a host
       * with an address record but no MX is still a valid mail destination,
       * and a few small domains genuinely rely on that.
       */
      try {
        const a = await Promise.race([dns.resolve4(domain), timeout])
        accepts = Array.isArray(a) && a.length > 0
      } catch {
        accepts = false
      }
    }
  } catch (error) {
    const code = (error as NodeJS.ErrnoException)?.code
    // ENOTFOUND / NXDOMAIN: the domain does not exist. Definitive.
    // Anything else — SERVFAIL, timeouts, rate limits — is unknown, so allow.
    accepts = !(code === 'ENOTFOUND' || code === 'NXDOMAIN')
  }

  if (cache.size >= MAX_CACHED) cache.clear()
  cache.set(domain, accepts)
  return accepts
}

export const UNDELIVERABLE_MESSAGE =
  'We can’t find a mail server for that address, so your receipt wouldn’t reach you. Please check it and try again.'
