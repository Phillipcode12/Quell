/**
 * Catching mistyped email addresses before they cost an order.
 *
 * ### Why this exists
 *
 * The first real order, on 2026-09-30, was placed with
 * `chasebecker27@gmal.com` — `gmal`, not `gmail`. Syntactically perfect, so
 * every validator on the page accepted it, and the confirmation email went
 * nowhere. **A customer paid $39.99 and received no record of it**, which is
 * the worst possible first impression and impossible for him to diagnose.
 *
 * ### Two different problems, two different answers
 *
 * Measured on 2026-09-30, and the split is the whole design:
 *
 *   gmal.com     no MX record   ← cannot receive mail. A fact.
 *   gmial.com    no MX record
 *   yaho.com     no MX record
 *   hotnail.com  HAS MX         ← typo-squatter. Accepts mail.
 *   outlok.com   HAS MX
 *
 * **A domain with no mail server is a fact, so it can be refused outright.**
 * A domain that merely *looks like* a typo is a guess, so it can only be
 * questioned — refusing it would eventually block somebody's real and unusual
 * address, and losing a genuine sale is worse than accepting a suspect one.
 *
 * So: this module suggests, `email-mx.ts` refuses.
 */

/**
 * Domains common enough that a near-miss is almost certainly a typo.
 *
 * Deliberately short. Every entry here is a domain with millions of users, so
 * a one-character difference from it is far more likely to be a slip than a
 * real address. Adding niche domains would start producing suggestions that
 * insult people who typed their own address correctly.
 */
const COMMON_DOMAINS = [
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'aol.com',
  'icloud.com',
  'comcast.net',
  'att.net',
  'sbcglobal.net',
  'verizon.net',
  'msn.com',
  'live.com',
  'me.com',
  'protonmail.com',
]

/**
 * Real domains that sit one edit from a common one and must never be
 * "corrected".
 *
 * `mail.com` is the reason this exists: it is one inserted character from
 * `gmail.com` and it is a genuine provider with millions of mailboxes.
 * Suggesting a correction to someone who typed their own address correctly is
 * worse than saying nothing, so anything here is left alone.
 */
const NEVER_CORRECT = new Set([
  'mail.com',
  'email.com',
  'inbox.com',
  'gmx.com',
  'gmx.de',
  'aim.com',
  'mac.com',
])

/**
 * Damerau-Levenshtein distance, capped.
 *
 * **Damerau, not plain Levenshtein**, because the difference decides whether
 * this feature works. A transposition — `gmial` for `gmail` — is the single
 * most common way people mistype a domain, and plain edit distance scores it
 * as **two** substitutions. With a threshold of one, the most frequent typo of
 * all would sail straight through. Damerau counts an adjacent swap as one.
 */
function distance(a: string, b: string, cap: number): number {
  if (Math.abs(a.length - b.length) > cap) return cap + 1

  const rows: number[][] = [Array.from({ length: b.length + 1 }, (_, i) => i)]

  for (let i = 1; i <= a.length; i++) {
    const row = [i]
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      let best = Math.min(
        rows[i - 1][j] + 1, // deletion
        row[j - 1] + 1, // insertion
        rows[i - 1][j - 1] + cost, // substitution
      )
      // Transposition of two adjacent characters.
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        best = Math.min(best, rows[i - 2][j - 2] + 1)
      }
      row[j] = best
    }
    rows.push(row)
  }

  return rows[a.length][b.length]
}

/**
 * A corrected address, when the domain looks like a near-miss of a common one.
 *
 * Returns null when there is nothing to suggest — including when the domain is
 * already correct, which matters: suggesting `gmail.com` to someone who typed
 * `gmail.com` would be a bug that makes the whole feature look broken.
 */
export function suggestEmail(input: string): string | null {
  const value = input.trim().toLowerCase()
  const at = value.lastIndexOf('@')
  if (at < 1 || at === value.length - 1) return null

  const local = value.slice(0, at)
  const domain = value.slice(at + 1)

  if (COMMON_DOMAINS.includes(domain)) return null
  if (NEVER_CORRECT.has(domain)) return null

  for (const candidate of COMMON_DOMAINS) {
    // One edit only. Two edits starts matching genuinely different domains —
    // "mail.com" is two from "gmail.com" and is somebody's real provider.
    if (distance(domain, candidate, 1) <= 1) {
      return `${local}@${candidate}`
    }
  }
  return null
}

/**
 * Obvious structural problems, checked before anything hits the network.
 *
 * Deliberately permissive: the email specification allows far stranger
 * addresses than most validators admit, and every rule added here is a chance
 * to reject a real customer. This catches only what cannot be an address.
 */
export function emailLooksWrong(input: string): string | null {
  const value = input.trim()

  if (!value.includes('@')) return 'That address is missing an @.'
  if (value.split('@').length > 2) return 'That address has more than one @.'

  const [local, domain] = value.split('@')
  if (!local) return 'That address is missing the part before the @.'
  if (!domain) return 'That address is missing the part after the @.'
  if (!domain.includes('.')) return 'That domain is missing a dot — did you mean .com?'
  if (domain.startsWith('.') || domain.endsWith('.')) return 'That domain looks wrong.'
  if (domain.includes('..')) return 'That domain looks wrong.'
  if (/\s/.test(value)) return 'That address contains a space.'

  return null
}
