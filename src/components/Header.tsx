'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCart } from '@/components/CartProvider'
import { ShoppingCart } from '@/components/icons'
import { QuellLogoInline } from '@/components/Logo'
import { SignOutButton } from '@/components/SignOutButton'

type HeaderUser = { id: string; email: string; name: string } | null

/**
 * `mobile: true` keeps a link in the bar on a phone.
 *
 * Only two qualify, and the rest wait for a wide screen. A 375px header has
 * room for roughly two text links beside the logo, the cart and the buy
 * button — cram in five and they either overflow or shrink to the point of
 * being unreadable, which is worse than not showing them.
 *
 * These two earn it for different reasons. **Reviews** is reachable from
 * nowhere else on the site by design, so hiding it on mobile hides the page
 * outright. **Drug Facts** is the label panel for an over-the-counter drug,
 * and someone reaching for it on a phone is usually reaching for it in a
 * hurry.
 */
const navLinks = [
  { label: 'Why Quell', href: '/#science' },
  { label: 'How to use', href: '/#how-to-use' },
  { label: 'Reviews', href: '/reviews', mobile: true },
  { label: 'Drug Facts', href: '/drug-facts', mobile: true },
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center gap-3 py-3 sm:gap-6 sm:py-4">
          <Link href="/" aria-label="Quell home">
            <QuellLogoInline />
          </Link>

          {/* Hidden below lg, where these move to the second row below.
              Measured: logo 133 + these two 110 + cart, sign-in and Checkout
              189, plus gaps and padding, needs 489px. A phone gives 375. One
              row only fits by cutting the wordmark down to the eye mark AND
              dropping sign-in, which is worse than using the space. */}
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
            /* Hidden on phones because it sits in the second row instead —
               grouped with Reviews and Drug Facts, where it belongs, and
               where it does not cost the first row any width. */
            <Link
              href="/login"
              className="hidden whitespace-nowrap text-muted hover:text-white sm:inline"
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

        {/*
          The mobile nav row.

          Below lg these links get their own line rather than competing for the
          first one. Everything asked for stays full size and legible, at the
          cost of about thirty pixels of header height — a better trade than a
          cramped single row, and better than hiding the pages.

          Reviews especially: it is linked from nowhere else on the site, so if
          it is not here on a phone it does not exist on a phone.
        */}
        <nav className="flex items-center gap-5 border-t border-line/60 py-2.5 text-sm text-muted lg:hidden">
          {navLinks
            .filter((link) => link.mobile)
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap hover:text-white"
              >
                {link.label}
              </Link>
            ))}

          {/* The account link rides here too, which is what keeps the first
              row inside 360px — a width common enough on Android that
              overflowing it is not an option. */}
          <Link
            href={user ? '/account' : '/login'}
            className="whitespace-nowrap hover:text-white"
          >
            {user ? 'Orders' : 'Sign in'}
          </Link>
        </nav>
      </div>
    </header>
  )
}
