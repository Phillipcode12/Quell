import Link from 'next/link'

const columns = [
  {
    heading: 'Shop',
    links: [
      { label: 'Formulary', href: '/#catalog' },
      { label: 'How it works', href: '/#how-it-works' },
      { label: 'Your cart', href: '/cart' },
      { label: 'Your orders', href: '/account' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Contact', href: '/about#contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-lg font-bold text-white">
                C
              </span>
              <span className="text-lg font-semibold tracking-tight">
                ClearSight Rx
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Prescription ophthalmic care, verified by licensed pharmacists and
              delivered to your door.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold">{col.heading}</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-muted hover:text-brand">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-line bg-background p-5 text-sm text-muted">
          <p className="font-medium text-foreground">
            Development template — not a real pharmacy.
          </p>
          <p className="mt-2 max-w-3xl leading-relaxed">
            This project is a local demo. It does not verify prescriptions,
            dispense medication, or provide medical advice. Dispensing
            prescription ophthalmics requires state pharmacy licensure, a valid
            prescription from a licensed prescriber, and pharmacist review
            before fulfillment.
          </p>
        </div>

        <p className="mt-8 text-sm text-muted">
          © {new Date().getFullYear()} ClearSight Rx. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
