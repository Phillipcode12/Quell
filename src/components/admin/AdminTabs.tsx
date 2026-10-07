import Link from 'next/link'

/**
 * Navigation between admin views.
 *
 * Takes the active tab as a prop rather than reading usePathname, so this stays
 * a server component and the admin pages don't ship it to the browser.
 */

const TABS = [
  { key: 'orders', label: 'Orders', href: '/admin/orders' },
  { key: 'customers', label: 'Customers', href: '/admin/customers' },
  // People who got as far as an address and no further. Closer to a customer
  // than anyone on the Self-check tab, which is why it sits next to Customers.
  { key: 'abandoned', label: 'Abandoned', href: '/admin/abandoned' },
  // Distinct from Customers on purpose: these people gave an email, not money.
  { key: 'subscribers', label: 'Self-check', href: '/admin/subscribers' },
  // Cuts across all of the above: one row per address, however we got it. Sits
  // after them because it is the summary of those tabs, not another source.
  { key: 'emails', label: 'Emails', href: '/admin/emails' },
  { key: 'analytics', label: 'Traffic', href: '/admin/analytics' },
  // Last because it is about the people running the shop rather than the
  // people buying from it, and it is the only tab nobody needs day to day.
  { key: 'staff', label: 'Staff', href: '/admin/staff' },
] as const

export type AdminTab = (typeof TABS)[number]['key']

export function AdminTabs({ current }: { current: AdminTab }) {
  return (
    <nav className="mt-6 flex gap-1 border-b border-line">
      {TABS.map((tab) => {
        const active = tab.key === current
        return (
          <Link
            key={tab.key}
            href={tab.href}
            aria-current={active ? 'page' : undefined}
            className={`-mb-px border-b-2 px-4 py-2.5 text-sm font-medium transition ${
              active
                ? 'border-brand text-white'
                : 'border-transparent text-muted hover:border-line hover:text-white'
            }`}
          >
            {tab.label}
          </Link>
        )
      })}
    </nav>
  )
}
