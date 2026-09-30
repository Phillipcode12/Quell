/**
 * Does this domain have a mail server at all?
 *
 * A domain with no MX record cannot receive email. That is a fact about the
 * internet rather than a guess about the typist, which is what makes it safe
 * to refuse an order over — and it is what would have caught the first real
 * order's `gmal.com` (§35).
 *
 * ### Why DNS-over-HTTPS instead of `node:dns`
 *
 * The first implementation used `dns.resolveMx`. It worked perfectly on a
 * developer machine and did nothing at all on Vercel: serverless sandboxes
 * frequently cannot make direct UDP queries to a resolver, the lookup fails
 * with a transport error rather than a DNS answer, and this module's
 * fail-open then allows every address. **Two deploys passed their tests and
 * blocked nothing.**
 *
 * DoH is an ordinary HTTPS request. It works anywhere the app can already
 * reach the internet — which it must, since it talks to Authorize.net and
 * Resend — so it cannot fail for environmental reasons the tests will not see.
 *
 * ### It fails OPEN, and that is deliberate
 *
 * Every other guard in this codebase fails closed. This one does not.
 *
 * The others protect the shop from an attacker; this protects a customer from
 * a typo. Refusing a paying customer at the last step of checkout because a
 * resolver was slow is a worse outcome than an undeliverable receipt, so only
 * a definitive "this domain publishes no MX" refuses the order.
 */

/**
 * Two resolvers, asked in turn.
 *
 * Not redundancy for its own sake — they genuinely disagree. Measured
 * 2026-09-30 for `gmial.com`, a parked typo of gmail.com:
 *
 *   Cloudflare  SERVFAIL (status 2)      ← ambiguous, so this module allows it
 *   Google      NOERROR, zero MX records ← definitive: no mail server
 *
 * A broken or DNSSEC-failing nameserver makes one resolver give up while
 * another answers plainly. Asking only Cloudflare meant a whole class of
 * typo domain came back "unknown" and sailed through.
 */
const RESOLVERS = [
  (domain: string) =>
    `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(domain)}&type=MX`,
  (domain: string) =>
    `https://dns.google/resolve?name=${encodeURIComponent(domain)}&type=MX`,
]

/** Long enough for a real lookup, short enough not to stall a checkout. */
const TIMEOUT_MS = 2500

/** Cheap in-process memo. Checkout is bursty and domains repeat. */
const cache = new Map<string, boolean>()
const MAX_CACHED = 500

/** DNS RCODEs that mean "this name does not exist". */
const NXDOMAIN = 3

type DohAnswer = { type: number; data: string }
type DohResponse = { Status?: number; Answer?: DohAnswer[] }

export async function domainAcceptsMail(email: string): Promise<boolean> {
  const at = email.lastIndexOf('@')
  if (at < 1) return true // Shape is someone else's problem; do not block here.

  const domain = email.slice(at + 1).trim().toLowerCase()
  if (!domain || !domain.includes('.')) return true

  const cached = cache.get(domain)
  if (cached !== undefined) return cached

  /**
   * Ask each resolver until one gives a definitive answer.
   *
   * `null` means "this resolver could not say" — a transport failure, a
   * non-200, or a status like SERVFAIL. Only a definitive answer decides;
   * if neither resolver manages one, the order goes through.
   */
  async function ask(url: string): Promise<boolean | null> {
    try {
      const res = await fetch(url, {
        headers: { accept: 'application/dns-json' },
        signal: AbortSignal.timeout(TIMEOUT_MS),
      })
      if (!res.ok) return null

      const body = (await res.json()) as DohResponse

      // The domain does not exist, so it certainly has no mail server.
      if (body.Status === NXDOMAIN) return false

      /**
       * NOERROR. Type 15 is MX, and an empty answer is the case that matters:
       * the domain exists and publishes no mail server, which is exactly what
       * a squatted typo domain looks like.
       */
      if (body.Status === 0) return (body.Answer ?? []).some((a) => a.type === 15)

      return null
    } catch {
      return null
    }
  }

  let accepts = true
  for (const buildUrl of RESOLVERS) {
    const answer = await ask(buildUrl(domain))
    if (answer !== null) {
      accepts = answer
      break
    }
  }

  if (cache.size >= MAX_CACHED) cache.clear()
  cache.set(domain, accepts)
  return accepts
}

export const UNDELIVERABLE_MESSAGE =
  'We can’t find a mail server for that address, so your receipt wouldn’t reach you. Please check it and try again.'
