import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { getAdminUser } from '@/lib/admin'
import { getCurrentUser } from '@/lib/auth'
import {
  AdminHeader,
  AdminPage,
} from '@/components/admin/AdminLayout'

/**
 * The admin home, and the door Ryan and Phillip come in through.
 *
 * **Why this page was missing and why that mattered.** Admin access has always
 * worked — `/login` is public, and `getAdminUser` checks the signed-in address
 * against `ADMIN_EMAILS`. But there was no `/admin`, only `/admin/orders` and
 * its siblings, so getting in meant knowing a sub-path by heart. When accounts
 * were closed to customers the "Sign in" link came out of the header too
 * (deliberately — it is a door to a locked room for anyone who cannot create
 * an account), which left the staff way in undiscoverable by design rather
 * than on purpose.
 *
 * So `/admin` is now one address that always does the right thing.
 *
 * ### The three cases, and why they differ
 *
 * | Visitor | Response | Why |
 * | --- | --- | --- |
 * | An admin | this page | What it is for. |
 * | Signed in, not an admin | **404** | Matches every other admin route: a 403 would confirm the area exists to someone who has already proven they are not in it. |
 * | Signed out | **redirect to `/login?next=/admin`** | The only case that discloses anything. |
 *
 * > **That redirect is a deliberate, small disclosure.** A stranger can learn
 * > that `/admin` exists. That is worth it because `/login` is already public
 * > and already the only credential endpoint — the redirect adds a signpost,
 * > not a surface — and because the alternative is two people guessing URLs.
 * > The sub-pages still 404 for non-admins, so knowing the path gets nobody in.
 */

export const metadata: Metadata = { title: 'Admin' }

/** Reads the session cookie and ADMIN_EMAILS, so it can never be prerendered. */
export const dynamic = 'force-dynamic'

const SECTIONS = [
  {
    href: '/admin/orders',
    label: 'Orders',
    blurb: 'Every order, its status, and the tracking number.',
  },
  {
    href: '/admin/customers',
    label: 'Customers',
    blurb: 'Who has bought, and what they spent.',
  },
  {
    href: '/admin/abandoned',
    label: 'Abandoned',
    blurb: 'Reached an address and stopped.',
  },
  {
    href: '/admin/subscribers',
    label: 'Self-check',
    blurb: 'Gave an email to the dry eye quiz.',
  },
  {
    href: '/admin/emails',
    label: 'Emails',
    blurb: 'One row per address, however we got it. Exportable.',
  },
  {
    href: '/admin/analytics',
    label: 'Traffic',
    blurb: 'Visits, and where they came from.',
  },
  {
    href: '/admin/staff',
    label: 'Staff access',
    blurb: 'Who can sign in here, and how to add someone.',
  },
] as const

export default async function AdminHomePage() {
  const admin = await getAdminUser()

  if (!admin) {
    // Distinguishes "nobody is signed in" from "signed in and not an admin".
    // Only the first gets sent to the sign-in form; the second is told nothing.
    const user = await getCurrentUser()
    if (!user) redirect('/login?next=/admin')
    notFound()
  }

  return (
    <AdminPage>
      <AdminHeader title="Admin" subtitle={`Signed in as ${admin.email}`} />

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SECTIONS.map((section) => (
          <li key={section.href}>
            <Link
              href={section.href}
              className="block h-full rounded-xl border border-line bg-surface p-5 transition hover:border-brand"
            >
              <p className="font-semibold text-white">{section.label}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {section.blurb}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </AdminPage>
  )
}
