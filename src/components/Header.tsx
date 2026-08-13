'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCart } from '@/components/CartProvider'
import { QuellLogoInline } from '@/components/Logo'

type HeaderUser = { id: string; email: string; name: string } | null

const navLinks = [
  { label: 'Why Quell', href: '/#science' },
  { label: 'How to use', href: '/#how-to-use' },
  { label: 'Drug Facts', href: '/#drug-facts' },
  { label: 'FAQ', href: '/#faq' },
]

export function Header({ user }: { user: HeaderUser }) {
  const { count, clear } = useCart()
  const router = useRouter()

  async function signOut() {
    await fetch('/api/auth/logout', { method: 'POST' })
    clear()
    router.push('/')
    router.refresh()
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-3.5">
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

        <div className="ml-auto flex items-center gap-4 text-sm lg:ml-0">
          <Link href="/cart" className="text-muted hover:text-white">
            Cart
            {count > 0 && (
              <span className="ml-1.5 rounded-full bg-brand px-2 py-0.5 text-xs font-semibold text-black">
                {count}
              </span>
            )}
          </Link>

          {user ? (
            <>
              <Link href="/account" className="text-muted hover:text-white">
                Orders
              </Link>
              <button
                onClick={signOut}
                className="rounded-md border border-line px-3 py-1.5 text-muted transition hover:border-brand hover:text-white"
              >
                Sign out
              </button>
            </>
          ) : (
            <Link href="/login" className="text-muted hover:text-white">
              Sign in
            </Link>
          )}

          <Link
            href="/#buy"
            className="rounded-md bg-brand px-4 py-2 font-semibold text-black transition hover:bg-brand-light"
          >
            Buy now
          </Link>
        </div>
      </div>
    </header>
  )
}
