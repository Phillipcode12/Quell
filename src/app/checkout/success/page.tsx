import Link from 'next/link'
import { ClearCartOnMount } from '@/components/ClearCartOnMount'
import { QuellLogo } from '@/components/Logo'

export default async function CheckoutSuccessPage() {
  return (
    <div className="mx-auto max-w-xl px-6 py-20 text-center">
      <ClearCartOnMount />

      <div className="rounded-3xl border border-line bg-surface p-10">
        {/* Full lockup with tagline: a receipt page gets revisited and
            screenshotted, so it should carry the brand properly. */}
        <QuellLogo size="md" className="mx-auto" />

        <h1 className="mt-7 text-3xl font-semibold tracking-tight">
          Order confirmed
        </h1>

        <p className="mt-4 leading-relaxed text-muted">
          Thanks — your payment went through and your Quell is on its way. A
          receipt is on its way to your email.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/account"
            className="rounded-lg bg-brand px-5 py-3 font-semibold text-black transition hover:bg-brand-light"
          >
            View your orders
          </Link>
          <Link
            href="/"
            className="rounded-lg border border-line px-5 py-3 font-medium text-white transition hover:border-brand hover:bg-white/5"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
