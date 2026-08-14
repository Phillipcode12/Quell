'use client'

import Link from 'next/link'
import { useCart } from '@/components/CartProvider'
import { QuellLogoInline } from '@/components/Logo'
import { SignOutButton } from '@/components/SignOutButton'

type HeaderUser = { id: string; email: string; name: string } | null

const navLinks = [
  { label: 'Why Quell', href: '/#science' },
  { label: 'How to use', href: '/#how-to-use' },
  { label: 'Drug Facts', href: '/drug-facts' },
  { label: 'FAQ', href: '/#faq' },
]

export function Header({
  user,
  isAdmin = false,
}: {
  user: HeaderUser
  isAdmin?: boolean
}) {
  const { count } = useCart()

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:gap-6 sm:px-6 sm:py-4">
        <Link href="/" aria-label="Quell home">
          <QuellLogoInline />
        </Link>

        <nav className="ml-auto hidden items-center gap-6 text-sm text-muted lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-3 text-sm sm:gap-4 lg:ml-0">
          <Link href="/cart" className="text-muted hover:text-white">
            Cart
            {count > 0 && (
              <span className="ml-1.5 rounded-full bg-brand px-2 py-0.5 text-xs font-semibold text-black">
                {count}
              </span>
            )}
          </Link>

          {/* Account controls are hidden on phones so the header stays on one
              line; they live on the account page and in the footer instead. */}
          {isAdmin && (
            <Link
              href="/admin/orders"
              className="hidden font-medium text-brand-light hover:text-white sm:inline"
            >
              Admin
            </Link>
          )}

          {user ? (
            <>
              <Link
                href="/account"
                className="hidden text-muted hover:text-white sm:inline"
              >
                Orders
              </Link>
              <SignOutButton className="hidden rounded-md border border-line px-3 py-1.5 text-muted transition hover:border-brand hover:text-white sm:block" />
            </>
          ) : (
            <Link
              href="/login"
              className="hidden text-muted hover:text-white sm:inline"
            >
              Sign in
            </Link>
          )}

          <Link
            href="/#buy"
            className="whitespace-nowrap rounded-md bg-brand px-3 py-2 font-semibold text-black transition hover:bg-brand-light sm:px-4"
          >
            Buy<span className="hidden sm:inline"> now</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
