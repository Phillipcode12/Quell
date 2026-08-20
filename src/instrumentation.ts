import * as Sentry from '@sentry/nextjs'

/**
 * Server-side error reporting.
 *
 * Inert unless SENTRY_DSN is set, matching how Resend and Authorize.net are
 * handled — the app runs fine locally with no account, and switches on when a
 * credential appears. Without it a production crash is invisible: Vercel keeps
 * the log, but nobody is told.
 *
 * Next.js calls register() once per runtime at startup.
 */
export async function register() {
  const dsn = process.env.SENTRY_DSN
  if (!dsn) return

  Sentry.init({
    dsn,
    environment: process.env.VERCEL_ENV ?? process.env.NODE_ENV,

    // Full error capture, sampled tracing. Traces are the expensive part and
    // this site's value is in knowing something broke, not in latency graphs.
    tracesSampleRate: 0.1,

    // The payment webhook and checkout carry card-adjacent context. Sentry
    // does not send request bodies or headers unless asked, and this keeps it
    // that way explicitly rather than by default.
    sendDefaultPii: false,
  })
}

/**
 * Reports errors thrown inside server components and route handlers, which
 * otherwise never reach Sentry.init's global handlers.
 */
export const onRequestError = Sentry.captureRequestError
