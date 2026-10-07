import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/db'
import { getAdminUser, isAdminEmail } from '@/lib/admin'
import { formatUsd } from '@/lib/money'
import {
  CONSENT_LABELS,
  SOURCE_LABELS,
  mergeContacts,
  type Contact,
} from '@/lib/contacts'
import { AdminTabs } from '@/components/admin/AdminTabs'
import { DeleteContactButton } from '@/components/admin/DeleteContactButton'
import {
  AdminHeader,
  AdminPage,
  AdminStats,
  AdminToolbar,
  Chip,
  DataTable,
  TruncationNote,
  formatAdminDate,
  type Column,
} from '@/components/admin/AdminLayout'

export const metadata: Metadata = { title: 'Emails' }

/**
 * Every address the shop holds, in one place.
 *
 * The other tabs each answer a question -- who bought, who left a cart, who
 * took the quiz. This one answers "who do we have a way of contacting", which
 * none of them could, because the addresses are spread across three tables and
 * the same person can be in all three.
 *
 * ### It reads every row rather than a page of each
 *
 * Deduplication cannot be done in SQL across three tables without either a
 * union view or three round trips plus a join, and it cannot be done correctly
 * on a page at a time at all: the account row that supplies someone's name may
 * be on page four while their order is on page one. So the merge happens in
 * `lib/contacts` over the full set, and only the *display* is capped.
 *
 * That is the right trade at this shop's size and for a long way past it. If it
 * ever is not, the symptom is a slow admin page rather than a wrong list.
 *
 * ### What is deliberately not here
 *
 * No "email everyone" button. The list mixes people who opted in with people
 * who only ever gave an address to get a receipt, and the `Use` column is the
 * whole reason it is safe to keep them in one table -- see `lib/contacts`.
 */

export const dynamic = 'force-dynamic'

const DISPLAY_LIMIT = 500

const CONSENT_TONE = {
  'opted-in': 'good',
  customer: 'brand',
  none: 'neutral',
} as const

/**
 * Built per render rather than at module scope, because the Delete column has to
 * know who is an admin and that comes from `ADMIN_EMAILS` at request time.
 *
 * Ryan's account was deleted from this table (see `lib/contact-delete`), and an
 * admin who has never ordered looks exactly like junk here. The server refuses
 * now; this is so nobody reaches for the button in the first place.
 */
const columnsFor = (isAdmin: (email: string) => boolean): Column<Contact>[] => [
  {
    header: 'Email',
    cell: (c) => (
      <a
        href={`mailto:${c.email}`}
        className="text-brand-light hover:underline"
      >
        {c.email}
      </a>
    ),
  },
  { header: 'Name', cell: (c) => c.name ?? <span className="text-muted">—</span> },
  {
    header: 'Phone',
    cell: (c) =>
      c.phone ? (
        <a
          href={`tel:${c.phone.replace(/[^\d+]/g, '')}`}
          className="text-brand-light hover:underline"
        >
          {c.phone}
        </a>
      ) : (
        <span className="text-muted">—</span>
      ),
  },
  {
    header: 'Known from',
    cell: (c) =>
      c.sources.length === 0 ? (
        <span className="text-muted">—</span>
      ) : (
        <span className="flex flex-wrap gap-1">
          {c.sources.map((s) => (
            <Chip key={s}>{SOURCE_LABELS[s]}</Chip>
          ))}
        </span>
      ),
  },
  {
    header: 'Use',
    cell: (c) => (
      <Chip tone={CONSENT_TONE[c.consent]}>{CONSENT_LABELS[c.consent]}</Chip>
    ),
  },
  {
    // Orders and spend share a cell so the table fits without sideways
    // scrolling. Both are still separate columns in the CSV, where width is
    // free and a spreadsheet needs them apart to sum.
    header: 'Orders',
    align: 'right',
    cell: (c) =>
      c.orders === 0 ? (
        <span className="text-muted">—</span>
      ) : (
        <>
          {c.orders} · {formatUsd(c.spentCents)}
        </>
      ),
  },
  {
    // `firstSeen` is dropped from the table for the same reason, and kept in
    // the CSV. Day to day the useful question is when someone was last here.
    header: 'Last seen',
    cell: (c) => (
      <span className="tabular-nums text-muted">
        {formatAdminDate(c.lastSeen)}
      </span>
    ),
  },
  {
    header: '',
    align: 'right',
    cell: (c) => (
      <DeleteContactButton
        email={c.email}
        // Hiding it is a courtesy to whoever is clicking; the server refuses
        // regardless, from its own fresh read. See app/admin/emails/actions.ts.
        canDelete={c.orders === 0 && !isAdmin(c.email)}
        blockedBecause={isAdmin(c.email) ? 'admin' : 'paid'}
        summary={
          c.sources.length
            ? c.sources.map((s) => SOURCE_LABELS[s].toLowerCase()).join(' + ')
            : 'this address'
        }
      />
    ),
  },
]

export default async function AdminEmailsPage() {
  const admin = await getAdminUser()

  // 404 rather than 403: don't confirm the route exists to non-admins.
  if (!admin) notFound()

  const [orders, users, subscribers] = await Promise.all([
    prisma.order.findMany({
      select: {
        email: true,
        shippingName: true,
        phone: true,
        status: true,
        totalCents: true,
        createdAt: true,
      },
    }),
    prisma.user.findMany({
      select: { email: true, name: true, createdAt: true },
    }),
    prisma.subscriber.findMany({ select: { email: true, createdAt: true } }),
  ])

  const contacts = mergeContacts({ orders, users, subscribers })
  const shown = contacts.slice(0, DISPLAY_LIMIT)

  const optedIn = contacts.filter((c) => c.consent === 'opted-in').length
  const customers = contacts.filter((c) => c.orders > 0).length
  const withPhone = contacts.filter((c) => c.phone).length

  return (
    <AdminPage>
      <AdminHeader title="Emails" subtitle={`Signed in as ${admin.email}`} />
      <AdminTabs current="emails" />

      <AdminStats
        stats={[
          { label: 'Addresses', value: contacts.length },
          { label: 'Opted in', value: optedIn },
          { label: 'Customers', value: customers },
          { label: 'With a phone', value: withPhone },
        ]}
      />

      <AdminToolbar
        description="Every address from orders, accounts and the self-check, one row per person. Name and phone are filled in where we have them. Check the Use column before emailing anyone: only Opted in asked to hear from us. Junk and test rows can be deleted; an address that has paid cannot, because an order is a financial record."
        exportHref="/admin/emails/export"
      />

      <DataTable
        columns={columnsFor(isAdminEmail)}
        rows={shown}
        rowKey={(c) => c.email}
        empty="No addresses yet."
        // Sized to fit inside the page rather than force sideways scrolling on
        // a desktop. It is still a minimum, not a fixed width: on a phone the
        // wrapper scrolls, which is better than eight columns squashed to
        // unreadable.
        minWidth="48rem"
      />

      <TruncationNote shown={shown.length} total={contacts.length} />

      <p className="mt-4 max-w-2xl text-xs leading-relaxed text-muted">
        Phone numbers are for reaching a customer about their own order — a
        bounced receipt, a delivery problem. Text-message marketing needs
        separate written consent under US TCPA rules and nobody on this list has
        given it.
      </p>
    </AdminPage>
  )
}
