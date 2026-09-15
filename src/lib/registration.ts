/**
 * Whether the public can create accounts.
 *
 * ### Why this switch exists
 *
 * Between 2026-09-05 and 2026-09-15 a bot created **122 accounts** on a store
 * that had never taken a real order. Every registration name was a random
 * string (`BcmEuMKPmMbEoaHJUYeRMqC`), and the email addresses were harvested
 * from the web — five people at one agency, a university, a bank, and a
 * software company's published legal contact — plus Gmail dot-variants of each
 * other, which are all the same mailbox wearing different masks.
 *
 * The accounts were never the point. `/api/auth/forgot-password` only emails
 * an address that already has an account, so planting one here is how the bot
 * got quelldrop.com to send **75 password-reset emails to strangers**. The
 * site was being used as a free mailer, and the cost lands on the sending
 * domain: every recipient who marks one as spam teaches the filters that
 * quelldrop.com sends junk, which is paid back later by real order receipts
 * going to the spam folder.
 *
 * Closing registration cuts the chain at its first link, because the bot
 * cannot request a reset for an address it cannot register.
 *
 * ### This is a stopgap
 *
 * It is not a product decision, and nothing else depends on it: checkout has
 * always worked for guests (`userId` is nullable on Order), `/orders` looks up
 * an order without an account, and `/api/auth/claim-order` attaches a guest
 * order to an account afterwards. So a customer who buys while this is closed
 * loses nothing and can still claim the order later.
 *
 * **Sign-in is deliberately untouched.** `/login` also carries admin access —
 * `getAdminUser` checks the signed-in user's email against `ADMIN_EMAILS` —
 * so disabling it would lock the admin area out along with the bot.
 *
 * ### Reopening
 *
 * Set `ALLOW_REGISTRATION=1` in Vercel. It is read per request, so the change
 * takes effect on the next request with **no redeploy**. Reopen once the bot
 * defences are in front of the form (see §26 in PROJECT_STATE.md).
 *
 * ### Missing means closed
 *
 * Same reasoning as `robots.ts`: the variable being absent is indistinguishable
 * from a misconfiguration, and of the two ways to be wrong, quietly accepting
 * bot signups is the one that damages something outside our control. Local
 * development sets it in `.env`.
 */
export function registrationOpen(): boolean {
  const flag = process.env.ALLOW_REGISTRATION?.trim().toLowerCase()
  return flag === '1' || flag === 'true'
}

/** Shown on the closed form and returned by the API, so they cannot drift. */
export const REGISTRATION_CLOSED_MESSAGE =
  'New accounts are paused while we deal with automated signups. You can still order as a guest — checkout does not need an account.'
