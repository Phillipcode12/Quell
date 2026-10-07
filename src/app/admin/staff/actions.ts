'use server'

import { createHash, randomBytes } from 'node:crypto'
import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/db'
import { adminEmails, getAdminUser } from '@/lib/admin'
import { hashPassword } from '@/lib/auth'
import { sendStaffInviteEmail } from '@/lib/email'
import { appUrl } from '@/lib/site'
import { INVITE_TTL_HOURS, INVITE_TTL_MS, canInvite } from '@/lib/staff-access'

/**
 * Server actions are a public HTTP surface, so each one re-checks admin access.
 * Never rely on the page having rendered for an admin.
 */
async function assertAdmin() {
  const admin = await getAdminUser()
  if (!admin) throw new Error('Not authorized')
  return admin
}

/**
 * Sends someone on the `ADMIN_EMAILS` allowlist a link to choose a password.
 *
 * This is how a second person gets in without reopening public registration.
 * The existing `/reset-password` page does the work — setting a first password
 * and replacing a forgotten one are the same operation — so this creates the
 * account shell and the token, and nothing else.
 *
 * ### It deliberately does not go through `/api/auth/forgot-password`
 *
 * That endpoint refuses to mail an account created in the last few minutes
 * (`lib/reset-guard.ts`), because register-then-reset is precisely the chain the
 * bot used to make the site mail strangers. A fresh invite is that exact shape,
 * and it should be: the check is right, and it is why this path exists
 * separately. **The trust here comes from an authenticated admin plus the
 * config allowlist, not from the request**, so the anti-bot age check has
 * nothing to decide and is not consulted.
 *
 * ### The placeholder password
 *
 * `User.passwordHash` is not nullable, so the row is created with a bcrypt hash
 * of 32 random bytes that are then discarded. It is a real hash, so
 * `verifyPasswordOrDecoy` behaves exactly as it does for any other account and
 * the timing is unchanged — it simply can never match anything. **No password
 * is chosen for anyone and none is ever transmitted**; the only way into the
 * account is the emailed link, and the person at the other end picks their own.
 *
 * ### The name
 *
 * `User.name` is required and nobody has asked the invitee anything yet, so it
 * is the local part of their address. That is a fact rather than a guess at
 * someone's name, and it only ever appears in the admin tables.
 */
export async function sendStaffSetupLink(rawEmail: string) {
  const admin = await assertAdmin()

  const email = rawEmail.trim().toLowerCase()

  // Read from config on the server, not from whatever the page rendered with.
  const allowed = canInvite(email, adminEmails())
  if (!allowed.ok) throw new Error(allowed.reason)

  const existing = await prisma.user.findUnique({
    where: { email },
    select: { id: true },
  })

  const user =
    existing ??
    (await prisma.user.create({
      data: {
        email,
        name: email.split('@')[0] ?? 'Admin',
        passwordHash: await hashPassword(randomBytes(32).toString('hex')),
      },
      select: { id: true },
    }))

  // Only the newest link works. Re-sending invalidates whatever was sent before,
  // so a forwarded or stale email cannot still be used.
  await prisma.passwordResetToken.updateMany({
    where: { userId: user.id, usedAt: null },
    data: { usedAt: new Date() },
  })

  const rawToken = randomBytes(32).toString('hex')

  await prisma.passwordResetToken.create({
    data: {
      userId: user.id,
      // The raw token is never stored, so a leaked database cannot be used to
      // take over the account.
      tokenHash: createHash('sha256').update(rawToken).digest('hex'),
      expiresAt: new Date(Date.now() + INVITE_TTL_MS),
    },
  })

  const sent = await sendStaffInviteEmail({
    to: email,
    setupUrl: `${appUrl()}/reset-password?token=${rawToken}`,
    invitedBy: admin.email,
    expiresInHours: INVITE_TTL_HOURS,
  })

  revalidatePath('/admin/staff')

  /**
   * Whether the mail actually went out is returned rather than swallowed.
   *
   * Both order emails used to fail silently and it cost a day of not knowing
   * whether a customer had their tracking number (sections 44 and 45). The same
   * mistake here would leave someone waiting for a link that was never sent, so
   * the page says which happened.
   */
  return { delivered: sent.delivered, created: !existing }
}
