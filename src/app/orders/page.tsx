import type { Metadata } from 'next'
import Link from 'next/link'
import { OrderLookup } from '@/components/OrderLookup'
import { COMPANY } from '@/lib/product-content'

export const metadata: Metadata = {
  title: 'Track your order',
  description:
    'Check the status of a Quell order using your order number and the email you checked out with.',
}

export default async function OrdersPage({
  searchParams,
}: {
  // Async in this version of Next — awaiting is required, not optional.
  searchParams: Promise<{ number?: string }>
}) {
  const { number } = await searchParams

  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <h1 className="text-3xl font-semibold tracking-tight">Track your order</h1>
      <p className="mt-3 leading-relaxed text-muted">
        Enter your order number and the email address you used at checkout. Both
        are on your confirmation email.
      </p>

      <OrderLookup initialOrderNumber={number ?? ''} />

      <p className="mt-8 text-sm leading-relaxed text-muted">
        Have an account?{' '}
        <Link href="/account" className="text-brand-light hover:underline">
          Sign in to see all your orders
        </Link>
        . Still stuck? Call {COMPANY.phone} ({COMPANY.hours}).
      </p>
    </div>
  )
}
