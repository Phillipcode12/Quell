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

    /**
     * MX is required. No fallback to an A record, deliberately.
     *
     * RFC 5321 does allow implicit MX — a host with only an address record is
     * technically a valid mail destination — and an earlier version of this
     * honoured that. **It defeated the entire feature.** Measured 2026-09-30:
     *
     *   gmial.com  no MX, HAS A (51.79.68.169)   ← parked, would have passed
     *   yaho.com   no MX, HAS A (13.248.158.7)   ← parked, would have passed
     *
     * Squatted typo domains overwhelmingly publish an A record pointing at an
     * advertising page, while domains that genuinely receive mail publish MX.
     * Honouring the RFC here protects a near-extinct configuration at the cost
     * of letting through exactly the addresses this exists to catch.
     */
    accepts = Array.isArray(result) && result.length > 0
  } catch (error) {
    const code = (error as NodeJS.ErrnoException)?.code
    /**
     * Three codes are a definitive "no mail here". Everything else —
     * SERVFAIL, timeouts, rate limits — is unknown, so the order goes through.
     *
     * **`ENODATA` is the one that matters, and omitting it broke this
     * entirely.** It means the domain exists but publishes no MX record, which
     * is precisely what a squatted typo domain looks like. Measured, after the
     * first version silently allowed all of them:
     *
     *   gmal.com   ENODATA      gmial.com  ENODATA      yaho.com  ENODATA
     *   gmail.com  5 records    hotnail.com  1 record
     *
     * ENOTFOUND is for a domain that does not resolve at all — rarer for a
     * typo, since most near-miss domains are registered by squatters.
     */
    accepts = !(
      code === 'ENODATA' ||
      code === 'ENOTFOUND' ||
      code === 'NXDOMAIN'
    )
  }

  if (cache.size >= MAX_CACHED) cache.clear()
  cache.set(domain, accepts)
  return accepts
}

export const UNDELIVERABLE_MESSAGE =
  'We can’t find a mail server for that address, so your receipt wouldn’t reach you. Please check it and try again.'
