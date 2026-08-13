import Link from 'next/link'
import { QuellLogoInline } from '@/components/Logo'
import { BRAND, COMPANY } from '@/lib/product-content'
import { formatUsd } from '@/lib/money'
import { FREE_SHIPPING_THRESHOLD_CENTS, SHIPPING_LABEL } from '@/lib/shipping'

const columns = [
  {
    heading: 'Product',
    links: [
      { label: 'Buy Quell', href: '/#buy' },
      { label: 'Why Quell works', href: '/#science' },
      { label: 'How to use', href: '/#how-to-use' },
      { label: 'Drug Facts', href: '/#drug-facts' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Contact', href: '/about#contact' },
      { label: 'FAQ', href: '/#faq' },
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
            <Link href="/" aria-label="Quell home">
              <QuellLogoInline />
            </Link>
            <p className="mt-5 max-w-xs leading-relaxed text-muted">
              {BRAND.slogan}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              {BRAND.productType} · {BRAND.size}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-brand-light">
              Free {SHIPPING_LABEL} shipping over{' '}
              {formatUsd(FREE_SHIPPING_THRESHOLD_CENTS)}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold text-white">{col.heading}</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted hover:text-brand-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 border-t border-line pt-8 text-sm text-muted sm:grid-cols-2">
          <div>
            <p className="font-semibold text-white">{COMPANY.name}</p>
            {COMPANY.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="sm:text-right">
            <p>
              Questions? Call{' '}
              <a
                href={`tel:${COMPANY.phoneHref}`}
                className="text-brand-light hover:underline"
              >
                {COMPANY.phone}
              </a>{' '}
              {COMPANY.hours}
            </p>
            <p className="mt-1">
              <a
                href={COMPANY.websiteHref}
                className="text-brand-light hover:underline"
                rel="noreferrer noopener"
              >
                {COMPANY.website}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-line bg-surface-2 p-5 text-sm leading-relaxed text-muted">
          <p>
            These statements have not been evaluated by the Food and Drug
            Administration. Quell is an over-the-counter lubricating eye drop for
            use in the eyes only. Read and follow the Drug Facts panel before
            use. This site does not provide medical advice — if you have eye
            pain, changes in vision, or symptoms that persist beyond 72 hours,
            stop use and see a doctor.
          </p>
        </div>

        <p className="mt-8 text-sm text-muted">
          © {new Date().getFullYear()} {COMPANY.name}. {BRAND.trademark} and{' '}
          {BRAND.tagline} are trademarks of {COMPANY.name}.
        </p>
      </div>
    </footer>
  )
}
