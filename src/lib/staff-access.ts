/**
 * Who can sign in to the admin area, and what is missing for each of them.
 *
 * ### The two halves, and why they drift
 *
 * Admin access needs **both**:
 *
 * 1. the address listed in `ADMIN_EMAILS`, which is authorization, and
 * 2. a `User` row with a password, which is a credential.
 *
 * `lib/admin.ts` keeps (1) in an environment variable deliberately — there is
 * no in-app way to make an account an admin, so a compromised admin session
 * cannot mint another one. That is worth keeping, and it is also why the halves
 * drift silently: on 2026-10-06 `ADMIN_EMAILS` was set, Phillip had an account,
 * and **Ryan had no account at all** — production held exactly one user row.
 * Each half looked fine on its own and nothing put them side by side.
 *
 * This does.
 *
 * ### Why an invite cannot be sent to an arbitrary address
 *
 * An address not in `ADMIN_EMAILS` cannot be invited. Public registration is
 * closed because the site was used as a free mailer (`lib/registration.ts`), and
 * an admin button that created an account for anything typed into a box would
 * hand that capability back, just behind a login. Requiring the allowlist first
 * means an invite only ever sets up a credential for someone already authorized
 * in config — and that config change is what actually grants access anyway, so
 * nothing is added to the job, only ordered.
 *
 * ### What "ready" can and cannot know
 *
 * **There is no column saying whether a password was ever chosen**, and
 * `User.passwordHash` is not nullable, so an invited account holds a hash of
 * random bytes that nothing can match. Rather than add a migration for a flag —
 * migrations here are applied by hand before the referencing code deploys, which
 * is a real hazard for a cosmetic field — the state is derived from the invite
 * itself: a setup link that is still live and unused means the person has not
 * finished. Once it is used or expired, there is nothing further to report.
 *
 * So `ready` means "nothing is outstanding", not "has definitely signed in".
 * The one case it reads optimistically is an invite that expired unused, and
 * the page says plainly that a fresh link can be sent at any time.
 */

export type StaffStatus =
  /** Allowlisted, has an account, no invite outstanding. */
  | 'ready'
  /** A setup link is live and unused — they have not chosen a password yet. */
  | 'invite-pending'
  /** Allowlisted with no account. Cannot sign in at all until invited. */
  | 'needs-account'
  /** Has an account but is not in ADMIN_EMAILS, so the admin area is closed. */
  | 'not-allowed'

export type StaffRow = {
  email: string
  allowed: boolean
  hasAccount: boolean
  status: StaffStatus
}

export type StaffUser = {
  email: string
  /** True when an unused, unexpired setup link exists for this account. */
  invitePending: boolean
}

export const STAFF_STATUS_LABELS: Record<StaffStatus, string> = {
  ready: 'Can sign in',
  'invite-pending': 'Setup link sent — not used yet',
  'needs-account': 'No account yet',
  'not-allowed': 'Not an admin',
}

export function staffRows(
  allowedEmails: string[],
  users: StaffUser[],
): StaffRow[] {
  const byEmail = new Map(
    users.map((u) => [u.email.trim().toLowerCase(), u] as const),
  )

  const allowed = allowedEmails
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean)

  const rows: StaffRow[] = allowed.map((email) => {
    const user = byEmail.get(email)
    return {
      email,
      allowed: true,
      hasAccount: Boolean(user),
      status: !user
        ? 'needs-account'
        : user.invitePending
          ? 'invite-pending'
          : 'ready',
    }
  })

  /**
   * Accounts that exist but are not on the allowlist are listed too.
   *
   * They are not staff and the page says so, but leaving them out would make
   * this a view of the allowlist rather than of who can sign in — and the 122
   * bot accounts of 2026-09 are exactly the kind of thing that should not be
   * able to sit in the user table unseen.
   */
  const extras: StaffRow[] = users
    .map((u) => u.email.trim().toLowerCase())
    .filter((email) => email && !allowed.includes(email))
    .map((email) => ({
      email,
      allowed: false,
      hasAccount: true,
      status: 'not-allowed' as const,
    }))

  return [...rows, ...extras]
}

/** Whether an invite may be sent to this address. Decided from config, not UI. */
export function canInvite(
  email: string,
  allowedEmails: string[],
): { ok: true } | { ok: false; reason: string } {
  const wanted = email.trim().toLowerCase()
  if (!wanted) return { ok: false, reason: 'No address given.' }

  const allowed = allowedEmails.map((e) => e.trim().toLowerCase())
  if (!allowed.includes(wanted)) {
    return {
      ok: false,
      reason:
        'That address is not in ADMIN_EMAILS. Add it there and redeploy first — an account on its own cannot reach the admin area.',
    }
  }

  return { ok: true }
}

/**
 * How long a setup link lasts.
 *
 * Three days rather than the hour a password reset gets. A reset is asked for by
 * someone sitting at the form; an invite arrives unannounced at someone who may
 * be packing orders, and a link that expired before it was read turns a one-step
 * job into a conversation.
 */
export const INVITE_TTL_MS = 72 * 60 * 60_000
export const INVITE_TTL_HOURS = 72
