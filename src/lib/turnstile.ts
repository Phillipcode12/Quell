import 'server-only'

/**
 * Cloudflare Turnstile — server-side verification.
 *
 * ### What this is actually stopping
 *
 * The bot described in §26 never loaded a page. It posted straight to
 * `/api/auth/register` and `/api/auth/forgot-password`, which is why the rate
 * limit did nothing useful: a limit counts requests per address, and the bot
 * answered that by rotating addresses. Turnstile asks a different question —
 * *was there a browser here at all* — and a token can only be minted by a real
 * browser that loaded the real page.
 *
 * ### The rules that matter
 *
 *  - **A token is single-use.** Verifying the same one twice returns
 *    `timeout-or-duplicate`, so a route must call this exactly once and must
 *    not retry with the same token after a failure.
 *  - **A token lives five minutes.** Someone who leaves the form open longer
 *    gets a fresh one from the widget's own refresh, not from us.
 *  - **Test keys and live keys do not mix.** A test secret accepts only the
 *    dummy token and rejects real ones; a live secret does the reverse. So a
 *    half-swapped configuration fails closed rather than silently passing
 *    everything, which is the right way round.
 *
 * ### Missing configuration fails closed, deliberately
 *
 * If `TURNSTILE_SECRET_KEY` is absent this returns false rather than true. The
 * alternative — treating "not configured" as "allowed" — is precisely the
 * failure that lets a protection disappear without anything breaking, and a
 * silently unprotected reset endpoint is what this whole exercise is about.
 *
 * **The cost of that choice, stated plainly:** if Cloudflare is unreachable or
 * the keys are wrong, password reset and registration stop working rather than
 * letting everyone through. That is the correct trade for two endpoints nobody
 * uses in an emergency — but it is a trade, and it is why failures here are
 * distinguishable in the return value instead of collapsing into one `false`.
 */

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

/** How long to wait on Cloudflare before giving up. */
const TIMEOUT_MS = 5_000

export type TurnstileResult =
  | { ok: true }
  | { ok: false; reason: 'missing-token' | 'not-configured' | 'unreachable' | 'rejected'; codes?: string[] }

/**
 * Whether these endpoints should demand a Turnstile token.
 *
 * Keyed on the **site key**, not the secret, and that is the important part.
 *
 * The obvious implementation — "verify only if a secret is set" — has a hole
 * you could drive the original attack through: set the site key and forget the
 * secret, and the widget appears on the form, visitors solve it, everything
 * looks protected, and the server checks nothing. It would take an incident to
 * notice.
 *
 * The site key is the thing that says *we intend this form to be protected*.
 * Once it is set, a missing secret makes `verifyTurnstile` return
 * `not-configured`, which the routes treat as a refusal. A half-finished
 * configuration therefore breaks loudly and immediately instead of quietly
 * removing the protection — and the one that breaks is a form nobody needs in
 * an emergency.
 *
 * With neither key set (local work, and any environment that has not been
 * configured) the check is skipped entirely and the forms render without a
 * widget, so development does not need a Cloudflare account.
 */
export function turnstileEnabled(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim())
}

export async function verifyTurnstile(
  token: unknown,
  remoteIp?: string,
): Promise<TurnstileResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY?.trim()
  if (!secret) return { ok: false, reason: 'not-configured' }

  // Checked before the network call: an empty token is the shape a bot that
  // ignores the widget sends, and it is not worth a round trip.
  if (typeof token !== 'string' || token.length === 0) {
    return { ok: false, reason: 'missing-token' }
  }

  const body = new URLSearchParams({ secret, response: token })
  // Cloudflare uses this to sharpen its own scoring. Omitted rather than sent
  // empty when we cannot determine it.
  if (remoteIp) body.set('remoteip', remoteIp)

  let payload: { success?: boolean; 'error-codes'?: string[] }
  try {
    const res = await fetch(VERIFY_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body,
      signal: AbortSignal.timeout(TIMEOUT_MS),
    })
    // A non-200 from Cloudflare is an outage, not a verdict on the visitor.
    if (!res.ok) return { ok: false, reason: 'unreachable' }
    payload = await res.json()
  } catch {
    // Network error or the timeout above.
    return { ok: false, reason: 'unreachable' }
  }

  if (payload.success === true) return { ok: true }
  return { ok: false, reason: 'rejected', codes: payload['error-codes'] ?? [] }
}

/**
 * What to tell the visitor. Deliberately vague about *why*: a bot that learns
 * it failed because its token was replayed learns something useful, and a
 * person only needs to know that trying again will work.
 */
export const TURNSTILE_FAILED_MESSAGE =
  'We could not confirm you are a real visitor. Please reload the page and try again.'
