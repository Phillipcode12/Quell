'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCart } from '@/components/CartProvider'
import { ShoppingCart } from '@/components/icons'
import { QuellLogoInline } from '@/components/Logo'
import { SignOutButton } from '@/components/SignOutButton'

type HeaderUser = { id: string; email: string; name: string } | null

const navLinks = [
  { label: 'Why Quell', href: '/#science' },
  { label: 'How to use', href: '/#how-to-use' },
  // The only route to the reviews page — it is deliberately not linked from
  // the homepage, so the homepage stays one argument ending at the buy panel.
  { label: 'Reviews', href: '/reviews' },
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
  const pathname = usePathname()

  /**
   * The primary button changes job once there is something in the cart.
   *
   * Empty, "Buy now" sends people down to the buy panel, which is where the
   * decision gets made. With something in the cart that is the wrong
   * destination — they have already decided, and the useful action is
   * finishing.
   *
   * **The label changes with it, deliberately.** The cart icon beside this
   * already goes to /cart, so a second button with the same destination and a
   * different promise would read as a bug. "Checkout" says what this one is
   * for: the icon is "show me my cart", this is "take my money".
   *
   * Hidden on /cart itself, where it would point at the page you are on.
   */
  const hasItems = count > 0
  const onCart = pathname === '/cart'

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
          {/* Given its own bordered chip and an icon rather than sitting as
              plain text among the nav links. This is where people go to check
              out, so it should be findable at a glance — the icon is what the
              eye actually scans for, and the count badge sits on it so a full
              cart reads as full without needing to be parsed. */}
          <Link
            href="/cart"
            aria-label={
              count > 0
                ? `Cart, ${count} ${count === 1 ? 'item' : 'items'}`
                : 'Cart'
            }
            className="relative flex items-center gap-2 rounded-lg border border-line px-3 py-2 font-medium text-white transition hover:border-brand hover:bg-brand/10"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden sm:inline">Cart</span>
            {count > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1 text-xs font-bold text-black">
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

          {!onCart && (
            <Link
              href={hasItems ? '/cart' : '/#buy'}
              className="whitespace-nowrap rounded-md bg-brand px-3 py-2 font-semibold text-black transition hover:bg-brand-light sm:px-4"
            >
              {hasItems ? (
                'Checkout'
              ) : (
                <>
                  Buy<span className="hidden sm:inline"> now</span>
                </>
              )}
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
