import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/db'
import { adminEmails, getAdminUser } from '@/lib/admin'
import {
  STAFF_STATUS_LABELS,
  staffRows,
  type StaffRow,
} from '@/lib/staff-access'
import { SendSetupLinkButton } from '@/components/admin/SendSetupLinkButton'
import { AdminTabs } from '@/components/admin/AdminTabs'
import {
  AdminHeader,
  AdminPage,
  AdminStats,
  Chip,
  DataTable,
  type Column,
} from '@/components/admin/AdminLayout'

/**
 * Who can sign in here, and what each person is still missing.
 *
 * **Built 2026-10-06, when Phillip asked for an admin login "so that Ryan and I
 * can still log in".** Signing in had never stopped working — `/login` is
 * public and always has been — but a check of production found **one user row**,
 * his. Ryan had no account, public registration is closed, and nothing anywhere
 * said so. The ask was for a door; the actual problem was that one of the two
 * people had no key and there was no way to see that.
 *
 * So this page exists to make the state legible, and it carries the one action
 * that changes it.
 *
 * ### It is not a user manager
 *
 * No creating accounts for arbitrary addresses, no editing, no granting admin.
 * Admin rights stay in `ADMIN_EMAILS` — see `lib/admin.ts` for why that is
 * worth the inconvenience — so the only button here sends someone **already on
 * that list** a link to choose their own password. `lib/staff-access.ts` holds
 * the rule and the reasoning.
 */

export const metadata: Metadata = { title: 'Staff access' }

/** Reads ADMIN_EMAILS and the user table on every view. */
export const dynamic = 'force-dynamic'

const STATUS_TONE = {
  ready: 'good',
  'invite-pending': 'brand',
  'needs-account': 'warn',
  'not-allowed': 'neutral',
} as const

const columns: Column<StaffRow>[] = [
  {
    header: 'Email',
    cell: (row) => <span className="text-white">{row.email}</span>,
  },
  {
    header: 'Status',
    cell: (row) => (
      <Chip tone={STATUS_TONE[row.status]}>
        {STAFF_STATUS_LABELS[row.status]}
      </Chip>
    ),
  },
  {
    header: 'In ADMIN_EMAILS',
    cell: (row) => (
      <span className={row.allowed ? 'text-white' : 'text-muted'}>
        {row.allowed ? 'Yes' : 'No'}
      </span>
    ),
  },
  {
    header: '',
    cell: (row) => {
      // Nothing to offer someone who is not authorized: a link would create a
      // credential for an account that can reach nothing. The fix is config.
      if (!row.allowed) {
        return <span className="text-xs text-muted">Not in ADMIN_EMAILS</span>
      }

      return (
        <SendSetupLinkButton
          email={row.email}
          label={
            row.status === 'needs-account'
              ? 'Send setup link'
              : 'Send a new link'
          }
        />
      )
    },
  },
]

export default async function StaffPage() {
  const admin = await getAdminUser()

  // 404 rather than 403: don't confirm the route exists to non-admins.
  if (!admin) notFound()

  const allowed = adminEmails()

  const users = await prisma.user.findMany({
    select: {
      email: true,
      passwordResetTokens: {
        where: { usedAt: null, expiresAt: { gt: new Date() } },
        select: { id: true },
        take: 1,
      },
    },
    orderBy: { createdAt: 'asc' },
  })

  const rows = staffRows(
    allowed,
    users.map((u) => ({
      email: u.email,
      invitePending: u.passwordResetTokens.length > 0,
    })),
  )

  const ready = rows.filter((r) => r.status === 'ready').length
  const missing = rows.filter((r) => r.status === 'needs-account').length

  return (
    <AdminPage>
      <AdminHeader
        title="Staff access"
        subtitle={`Signed in as ${admin.email}`}
      />

      <AdminTabs current="staff" />

      <AdminStats
        stats={[
          { label: 'On the allowlist', value: allowed.length },
          { label: 'Can sign in', value: ready },
          { label: 'Waiting on a password', value: rows.length - ready - missing },
          { label: 'No account yet', value: missing },
        ]}
      />

      {allowed.length === 0 && (
        <p className="mt-6 rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm leading-relaxed text-red-300">
          <strong className="font-semibold">ADMIN_EMAILS is empty.</strong>{' '}
          Nobody is an admin — including whoever is reading this, which means
          this page is being served from a deployment where the variable is set
          but the build serving it is not. Check Vercel and redeploy.
        </p>
      )}

      <div className="mt-6">
        <DataTable
          rows={rows}
          columns={columns}
          rowKey={(row) => row.email}
          empty="Nobody has access."
          minWidth="48rem"
        />
      </div>

      <div className="mt-8 space-y-4 rounded-xl border border-line bg-surface p-5 text-sm leading-relaxed text-muted">
        <div>
          <p className="font-semibold text-white">Adding someone</p>
          <p className="mt-1.5">
            Two steps, in this order. Add their address to{' '}
            <code className="text-brand-light">ADMIN_EMAILS</code> in Vercel
            (comma separated) and <strong>redeploy</strong> — environment
            variables are bound at build time, so the running deployment will not
            see the change on its own. They then appear here, and{' '}
            <em>Send setup link</em> emails them a link to choose their own
            password.
          </p>
        </div>

        <div>
          <p className="font-semibold text-white">
            Why it is not one button
          </p>
          <p className="mt-1.5">
            Admin rights live in config so that nothing inside the app can grant
            them — a stolen admin session cannot create another admin. The
            trade is this extra step, which is the step that actually grants
            access anyway.
          </p>
        </div>

        <div>
          <p className="font-semibold text-white">Links and passwords</p>
          <p className="mt-1.5">
            A setup link works once and lasts three days; sending a new one
            cancels any earlier link. Nobody here ever sees or sets another
            person&apos;s password — the link is the only way in, and they
            choose it themselves. Anyone who already has an account can also
            use{' '}
            <Link href="/login" className="text-brand-light hover:underline">
              the sign-in page
            </Link>{' '}
            and <em>Forgot password</em>.
          </p>
        </div>
      </div>
    </AdminPage>
  )
}
