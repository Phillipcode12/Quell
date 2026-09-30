import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/db'
import { getAdminUser } from '@/lib/admin'
import { formatUsd } from '@/lib/money'
import {
  CONSENT_LABELS,
  SOURCE_LABELS,
  mergeContacts,
  type Contact,
} from '@/lib/contacts'
import { AdminTabs } from '@/components/admin/AdminTabs'
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

const columns: Column<Contact>[] = [
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
  { header: 'Orders', align: 'right', cell: (c) => c.orders || '—' },
  {
    header: 'Spent',
    align: 'right',
    cell: (c) => (c.spentCents ? formatUsd(c.spentCents) : '—'),
  },
  {
    header: 'First seen',
    cell: (c) => (
      <span className="tabular-nums text-muted">
        {formatAdminDate(c.firstSeen)}
      </span>
    ),
  },
  {
    header: 'Last seen',
    cell: (c) => (
      <span className="tabular-nums text-muted">
        {formatAdminDate(c.lastSeen)}
      </span>
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
        description="Every address from orders, accounts and the self-check, one row per person. Name and phone are filled in where we have them. Check the Use column before emailing anyone: only Opted in asked to hear from us."
        exportHref="/admin/emails/export"
      />

      <DataTable
        columns={columns}
        rows={shown}
        rowKey={(c) => c.email}
        empty="No addresses yet."
        minWidth="72rem"
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
