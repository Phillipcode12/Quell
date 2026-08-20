import { NextResponse } from 'next/server'
import { appUrl } from '@/lib/site'

/**
 * Where the hosted payment page sends the customer back to.
 *
 * Two things make this an API route rather than a page:
 *
 *  1. The gateway returns the customer by POST when the receipt page is
 *     suppressed, and an App Router page only answers GET.
 *  2. Whatever that POST contains is unverified browser input. It is ignored
 *     entirely — the order is identified from the query string we set when the
 *     payment page was created, and payment itself is recorded only by the
 *     signed webhook.
 *
 * So this does one job: bounce the customer to the success page.
 */

function redirectToSuccess(request: Request) {
  const order = new URL(request.url).searchParams.get('order')
  const destination = new URL('/checkout/success', appUrl())
  if (order) destination.searchParams.set('order', order)
  // 303 so the browser follows a POST with a GET.
  return NextResponse.redirect(destination, 303)
}

export async function POST(request: Request) {
  return redirectToSuccess(request)
}

export async function GET(request: Request) {
  return redirectToSuccess(request)
}
