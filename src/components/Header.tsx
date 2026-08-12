'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCart } from '@/components/CartProvider'

type HeaderUser = { id: string; email: string; name: string } | null

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
    <header className="border-b border-line bg-surface">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-lg font-bold text-white">
            C
          </span>
          <span className="text-lg font-semibold tracking-tight">
            ClearSight Rx
          </span>
        </Link>

        <nav className="ml-auto flex items-center gap-5 text-sm">
          <Link href="/" className="hover:text-brand">
            Catalog
          </Link>

          <Link href="/cart" className="hover:text-brand">
            Cart
            {count > 0 && (
              <span className="ml-1.5 rounded-full bg-brand px-2 py-0.5 text-xs font-semibold text-white">
                {count}
              </span>
            )}
          </Link>

          {user ? (
            <>
              <Link href="/account" className="hover:text-brand">
                Orders
              </Link>
              <span className="hidden text-muted sm:inline">{user.name}</span>
              <button
                onClick={signOut}
                className="rounded-md border border-line px-3 py-1.5 hover:bg-accent"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-brand">
                Sign in
              </Link>
              <Link
                href="/register"
                className="rounded-md bg-brand px-3 py-1.5 font-medium text-white hover:bg-brand-dark"
              >
                Create account
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
