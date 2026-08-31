/**
 * Renders every transactional email to an HTML file you can open in a browser.
 *
 *   npx tsx scripts/preview-emails.ts [outDir]
 *
 * Nothing is sent. The transport is stubbed the same way the tests stub it —
 * a fake key so the Resend branch is taken, and a fake `fetch` that captures
 * the payload instead of making a request. So what you see is the exact body
 * that would go to Resend, not an approximation of it.
 *
 * This exists because the templates could not otherwise be looked at before
 * an account exists, and "does the receipt read right" is a question worth
 * answering before customers are the ones answering it.
 */
import { Module } from 'node:module'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * `import 'server-only'` sits at the top of lib/email.ts, and that package's
 * default export throws on purpose — it exists to fail the build when a server
 * module is pulled into a client bundle. Next satisfies it through the
 * "react-server" export condition and Vitest is aliased to the same no-op
 * entry (see vitest.config.mts); plain tsx is neither, so without this the
 * import dies with "cannot be imported from a Client Component module", which
 * reads like a bug in the code rather than in how this script runs it.
 */
const emptyModule = join(process.cwd(), 'node_modules', 'server-only', 'empty.js')
const resolveFilename = (Module as unknown as {
  _resolveFilename: (request: string, ...rest: unknown[]) => string
})._resolveFilename
;(Module as unknown as { _resolveFilename: unknown })._resolveFilename =
  function (this: unknown, request: string, ...rest: unknown[]) {
    // By absolute path: the package's exports map does not expose './empty.js'
    // as a subpath, so resolving it by specifier fails.
    if (request === 'server-only') return emptyModule
    return resolveFilename.call(this, request, ...rest)
  }

/**
 * Load .env by hand.
 *
 * Next loads it; tsx does not. Without this the preview would render with
 * EMAIL_REPLY_TO and FULFILMENT_EMAILS unset and quietly show you a message
 * that is not the one your configuration would actually produce — which is
 * worse than no preview at all.
 */
for (const line of readFileSync(join(process.cwd(), '.env'), 'utf8').split(/\r?\n/)) {
  const match = line.match(/^([A-Z0-9_]+)=(.*)$/)
  if (!match) continue
  const value = match[2].trim().replace(/^["']|["']$/g, '')
  if (value) process.env[match[1]] ??= value
}

// Never the real key: the transport is stubbed below and nothing is sent.
process.env.RESEND_API_KEY = 'preview-only-never-sent'
process.env.EMAIL_FROM ||= 'Quell <orders@quelldrop.com>'
process.env.NEXT_PUBLIC_APP_URL ||= 'https://quelldrop.com'

type Captured = { from: string; to: string[]; reply_to?: string; subject: string; html: string }
const captured: Captured[] = []

globalThis.fetch = (async (_url: string, init: { body: string }) => {
  captured.push(JSON.parse(init.body))
  return { ok: true, text: async () => '' }
}) as unknown as typeof fetch

const ORDER = {
  id: 'order_preview',
  orderNumber: 'Q-7F3K9M2A',
  email: 'customer@example.com',
  subtotalCents: 5998,
  shippingCents: 0,
  totalCents: 5998,
  shippingName: 'Ada Lovelace',
  shippingLine1: '412 Woodmont Blvd',
  shippingLine2: 'Apt 3',
  shippingCity: 'Nashville',
  shippingState: 'TN',
  shippingPostalCode: '37205',
  shippingCountry: 'US',
  createdAt: new Date(),
  trackingCarrier: 'usps',
  trackingNumber: '9400111899223197428490',
  items: [
    {
      quantity: 2,
      unitPriceCents: 2999,
      product: { name: 'Quell Preservative-Free Lubricating Eye Drops' },
    },
  ],
}

async function main() {
  const outDir = process.argv[2] ?? join(process.cwd(), 'email-preview')
  mkdirSync(outDir, { recursive: true })

  const {
    sendOrderConfirmationEmail,
    sendShippingNoticeEmail,
    sendNewOrderNotificationEmail,
    sendPasswordResetEmail,
  } = await import('../src/lib/email')

  const jobs: [string, () => Promise<unknown>][] = [
    ['1-order-confirmation', () => sendOrderConfirmationEmail(ORDER)],
    ['2-shipping-notice', () => sendShippingNoticeEmail(ORDER)],
    [
      '3-pack-this-order',
      () =>
        sendNewOrderNotificationEmail(ORDER, [
          process.env.FULFILMENT_EMAILS?.split(',')[0]?.trim() ||
            'fulfilment@example.com',
        ]),
    ],
    [
      '4-password-reset',
      () =>
        sendPasswordResetEmail(
          'customer@example.com',
          'https://quelldrop.com/reset-password?token=preview',
        ),
    ],
  ]

  for (const [name, run] of jobs) {
    captured.length = 0
    await run()
    const message = captured[0]
    if (!message) {
      console.error(`${name}: nothing was sent`)
      continue
    }
    const file = join(outDir, `${name}.html`)
    writeFileSync(file, message.html)
    console.log(
      [
        file,
        `  From:     ${message.from}`,
        `  To:       ${message.to.join(', ')}`,
        `  Reply-To: ${message.reply_to ?? '(none set)'}`,
        `  Subject:  ${message.subject}`,
      ].join('\n'),
    )
  }
}

main()
