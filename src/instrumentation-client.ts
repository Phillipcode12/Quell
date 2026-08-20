import * as Sentry from '@sentry/nextjs'

/**
 * Browser-side error reporting. Inert unless NEXT_PUBLIC_SENTRY_DSN is set.
 *
 * Deliberately a separate variable from the server's SENTRY_DSN: this one is
 * inlined into the JavaScript bundle and is public by definition. Keeping the
 * names distinct stops a server-only secret being reached for by mistake.
 */
const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN

if (dsn) {
  Sentry.init({
    dsn,
    environment: process.env.NEXT_PUBLIC_VERCEL_ENV ?? process.env.NODE_ENV,
    tracesSampleRate: 0.1,

    // No session replay. It would record the checkout form, and card entry
    // happens on Authorize.net's page rather than ours — but the billing
    // address and email are typed here.
    replaysSessionSampleRate: 0,
    replaysOnErrorSampleRate: 0,
    sendDefaultPii: false,
  })
}

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart
