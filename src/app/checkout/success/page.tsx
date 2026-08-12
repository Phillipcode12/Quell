import Link from 'next/link'
import { ClearCartOnMount } from '@/components/ClearCartOnMount'

export default async function CheckoutSuccessPage() {
  return (
    <div className="mx-auto max-w-xl px-6 py-16 text-center">
      <ClearCartOnMount />

      <div className="rounded-2xl border border-line bg-surface p-10">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent text-2xl">
          ✓
        </div>

        <h1 className="mt-5 text-2xl font-semibold tracking-tight">
          Payment received
        </h1>

        <p className="mt-3 text-muted">
          Your order is now held for pharmacist review. It will not ship until a
          valid prescription is verified against it.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/account"
            className="rounded-md bg-brand px-4 py-2.5 font-medium text-white hover:bg-brand-dark"
          >
            View your orders
          </Link>
          <Link
            href="/"
            className="rounded-md border border-line px-4 py-2.5 font-medium hover:bg-accent"
          >
            Keep browsing
          </Link>
        </div>
      </div>
    </div>
  )
}
