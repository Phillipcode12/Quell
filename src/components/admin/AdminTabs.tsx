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
