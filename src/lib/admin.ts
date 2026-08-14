import 'server-only'
import { getCurrentUser } from '@/lib/auth'

/**
 * Admin access is an email allowlist in ADMIN_EMAILS (comma separated), rather
 * than a database role, so granting access is a config change and there is no
 * in-app way to escalate a normal account to admin.
 *
 * If ADMIN_EMAILS is unset, nobody is an admin — it fails closed.
 */
export function adminEmails(): string[] {
  return (process.env.ADMIN_EMAILS ?? '')
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean)
}

export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false
  return adminEmails().includes(email.toLowerCase())
}

/** Returns the signed-in admin, or null if the caller isn't one. */
export async function getAdminUser() {
  const user = await getCurrentUser()
  return user && isAdminEmail(user.email) ? user : null
}
