import type { Metadata } from 'next'
import Link from 'next/link'
import { ClearCartOnMount } from '@/components/ClearCartOnMount'
import { QuellLogo } from '@/components/Logo'
import { PostPurchaseSignup } from '@/components/PostPurchaseSignup'
import { getCurrentUser } from '@/lib/auth'

export const metadata: Metadata = {
  title: 'Thanks for your order',
  // A receipt page has no business in search results.
  robots: { index: false, follow: false },
}

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  // Async in this version of Next — awaiting is required, not optional.
  searchParams: Promise<{ order?: string }>
}) {
  const { order } = await searchParams

  // Without an order number there is nothing to attach, so the component is
  // not rendered at all. Whether a *signed-in* buyer sees it is decided inside
  // the component instead -- see the note on its `signedIn` prop.
  const user = await getCurrentUser()

  return (
    <div className="mx-auto max-w-xl px-6 py-20 text-center">
      <ClearCartOnMount />

      <div className="rounded-3xl border border-line bg-surface p-10">
        {/* Full lockup with tagline: a receipt page gets revisited and
            screenshotted, so it should carry the brand properly. */}
        <QuellLogo size="md" className="mx-auto" />

        <h1 className="mt-7 text-3xl font-semibold tracking-tight">
          Thanks for your order
        </h1>

        {order && (
          <p className="mt-5">
            <span className="block text-xs uppercase tracking-wide text-muted">
              Order number
            </span>
            <span className="mt-1 block font-mono text-2xl font-semibold text-brand-light">
              {order}
            </span>
          </p>
        )}

        {/*
          Careful with the wording here. Payment is confirmed by the gateway
          webhook, not by this page — the browser landing here proves the
          customer came back, nothing more, and the webhook may not have
          arrived yet. Claiming "payment went through" would sometimes be a
          lie, so this says what is actually known.
        */}
        <p className="mt-6 leading-relaxed text-muted">
          We&apos;re confirming your payment now. As soon as it clears you&apos;ll
          get a receipt by email, and another message when your Quell ships.
        </p>

        <p className="mt-3 text-sm leading-relaxed text-muted">
          Keep your order number — it&apos;s how you track this order, with or
          without an account.
        </p>

        {order && (
          <PostPurchaseSignup orderNumber={order} signedIn={Boolean(user)} />
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href={order ? `/orders?number=${encodeURIComponent(order)}` : '/orders'}
            className="rounded-lg bg-brand px-5 py-3 font-semibold text-black transition hover:bg-brand-light"
          >
            Track your order
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
