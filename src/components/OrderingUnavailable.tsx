import Link from 'next/link'
import { BRAND, COMPANY } from '@/lib/product-content'

/**
 * Shown when the database cannot be reached, in place of a 500.
 *
 * **Added 2026-10-19, during the outage.** The Neon free tier's compute quota
 * was exhausted, so `/` and `/cart` — the only two customer pages that read the
 * database — were returning **500** while every static page served normally.
 *
 * A 500 is the worst available answer here, for a reason beyond looking broken:
 * **Googlebot treats repeated 500s on a home page as a reason to drop it**, and
 * search engines had only just started sending real visitors (§52). An outage
 * that costs a day of orders is recoverable; one that costs the index is not.
 *
 * So this returns **200** with an honest explanation and the phone number. It
 * does not pretend the shop is working, and it does not invite anyone to try a
 * checkout that cannot complete.
 */
export function OrderingUnavailable() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20 text-center">
      <h1 className="text-3xl font-semibold tracking-tight text-white">
        Ordering is temporarily unavailable
      </h1>

      <p className="mt-5 text-lg leading-relaxed text-muted">
        {BRAND.trademark} {BRAND.productType.toLowerCase()} are still available
        — we just cannot take an order through the website at this moment. This
        is a problem at our end and we are working on it.
      </p>

      <p className="mt-6 leading-relaxed text-muted">
        To order, or to ask about an order you have already placed, call{' '}
        <a
          href={`tel:${COMPANY.phoneHref}`}
          className="font-semibold text-brand-light hover:underline"
        >
          {COMPANY.phone}
        </a>{' '}
        {COMPANY.hours}.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
        <Link href="/drug-facts" className="text-brand-light hover:underline">
          Drug Facts
        </Link>
        <Link href="/self-check" className="text-brand-light hover:underline">
          Dry eye self-check
        </Link>
        <Link href="/about" className="text-brand-light hover:underline">
          About us
        </Link>
      </div>
    </div>
  )
}
