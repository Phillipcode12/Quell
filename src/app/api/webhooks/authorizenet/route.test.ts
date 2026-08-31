import { beforeEach, describe, expect, it, vi } from 'vitest'

/**
 * The webhook is where a payment becomes an order that someone ships.
 *
 * It was the largest gap in the suite, and the least comfortable one: this
 * route decides whether money that has already moved is recorded, whether
 * stock leaves the shelf, and whether anyone is told to pack a box. Until now
 * the only evidence it behaved was a live sandbox run and one accidental
 * replay (PROJECT_STATE §8).
 *
 * **These are still unit tests.** Prisma, the gateway lookup, stock and mail
 * are all mocked, so what is covered is this route's decisions — not the
 * database, and not the signature maths, which cannot be proven by a test that
 * computes the HMAC the same way the code does (see the header of
 * `lib/authorizenet.test.ts`). Signature verification is stubbed on purpose:
 * what is under test is what the route does with the answer.
 *
 * The rule the whole file exists to hold: **never make the gateway retry.** A
 * non-2xx is a redelivery, and a redelivery of a payment already processed is
 * the one failure this design cannot tolerate. Every error path answers 200.
 */

const ORDER = {
  id: 'order_1',
  orderNumber: 'Q-TEST0001',
  status: 'pending',
  totalCents: 3694,
}

const prisma = {
  order: { findUnique: vi.fn(), updateMany: vi.fn() },
}
const getTransactionDetails = vi.fn()
const isGatewayConfigured = vi.fn()
const isWebhookConfigured = vi.fn()
const verifyWebhookSignatureDetailed = vi.fn()
const drawDownStock = vi.fn()
const sendOrderConfirmation = vi.fn()
const sendNewOrderNotification = vi.fn()

vi.mock('@/lib/db', () => ({ prisma }))
vi.mock('@/lib/authorizenet', () => ({
  getTransactionDetails,
  isGatewayConfigured,
  isWebhookConfigured,
  verifyWebhookSignatureDetailed,
}))
vi.mock('@/lib/inventory', () => ({ drawDownStock }))
vi.mock('@/lib/orders', () => ({
  sendOrderConfirmation,
  sendNewOrderNotification,
}))

const { POST } = await import('./route')

const AUTH_CAPTURE = 'net.authorize.payment.authcapture.created'
const TRANSACTION_ID = '120088547461'

function post(body: unknown, signature: string | null = 'sha512=abc') {
  return POST(
    new Request('https://quelldrop.com/api/webhooks/authorizenet', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        ...(signature ? { 'x-anet-signature': signature } : {}),
      },
      body: typeof body === 'string' ? body : JSON.stringify(body),
    }),
  )
}

const authCapture = (payload: Record<string, unknown> = {}) => ({
  eventType: AUTH_CAPTURE,
  payload: { id: TRANSACTION_ID, responseCode: 1, ...payload },
})

/** Nothing recorded, nothing shipped, nobody emailed. */
function expectNothingHappened() {
  expect(prisma.order.updateMany).not.toHaveBeenCalled()
  expect(drawDownStock).not.toHaveBeenCalled()
  expect(sendOrderConfirmation).not.toHaveBeenCalled()
  expect(sendNewOrderNotification).not.toHaveBeenCalled()
}

beforeEach(() => {
  vi.clearAllMocks()
  vi.spyOn(console, 'error').mockImplementation(() => {})
  vi.spyOn(console, 'info').mockImplementation(() => {})
  isGatewayConfigured.mockReturnValue(true)
  isWebhookConfigured.mockReturnValue(true)
  verifyWebhookSignatureDetailed.mockReturnValue({ valid: true, mode: 'text' })
  getTransactionDetails.mockResolvedValue({
    invoiceNumber: ORDER.orderNumber,
    amountCents: ORDER.totalCents,
  })
  prisma.order.findUnique.mockResolvedValue({ ...ORDER })
  prisma.order.updateMany.mockResolvedValue({ count: 1 })
  drawDownStock.mockResolvedValue(undefined)
  sendOrderConfirmation.mockResolvedValue(undefined)
  sendNewOrderNotification.mockResolvedValue(undefined)
})

describe('before it will look at a payload at all', () => {
  it('refuses when the gateway is not configured', async () => {
    isGatewayConfigured.mockReturnValue(false)
    const res = await post(authCapture())

    expect(res.status).toBe(503)
    expectNothingHappened()
  })

  it('refuses when the webhook signature key is missing', async () => {
    // Without the key, every check would be guesswork. Answering 503 says
    // "not configured" rather than "forged".
    isWebhookConfigured.mockReturnValue(false)
    const res = await post(authCapture())

    expect(res.status).toBe(503)
    expectNothingHappened()
  })

  it('rejects an unsigned or badly signed delivery with 400', async () => {
    verifyWebhookSignatureDetailed.mockReturnValue({ valid: false, mode: null })
    const res = await post(authCapture(), null)

    expect(res.status).toBe(400)
    expectNothingHappened()
    // The gateway is never consulted about a payload we could not authenticate.
    expect(getTransactionDetails).not.toHaveBeenCalled()
  })

  it('verifies against the raw body, not a re-serialised one', async () => {
    // Re-serialising changes bytes — key order, whitespace — and the HMAC is
    // over bytes. If this regresses, every real webhook fails as forged.
    const raw = `{"eventType":"${AUTH_CAPTURE}","payload":{"id":"1","responseCode":1}}`
    await post(raw)

    expect(verifyWebhookSignatureDetailed).toHaveBeenCalledWith(raw, 'sha512=abc')
  })

  it('rejects a signed but malformed body with 400', async () => {
    const res = await post('{not json')

    expect(res.status).toBe(400)
    expectNothingHappened()
  })
})

describe('events it deliberately ignores', () => {
  it('acknowledges an event type it does not handle', async () => {
    // Refunds and voids are reconciled by hand. Ignoring must still be a 200,
    // or the gateway redelivers something nobody intends to process.
    const res = await post({ eventType: 'net.authorize.payment.refund.created' })

    expect(res.status).toBe(200)
    expectNothingHappened()
  })

  it('ignores a declined transaction', async () => {
    const res = await post(authCapture({ responseCode: 2 }))

    expect(res.status).toBe(200)
    expectNothingHappened()
  })

  it('ignores a payload with no transaction id', async () => {
    const res = await post({ eventType: AUTH_CAPTURE, payload: {} })

    expect(res.status).toBe(200)
    expectNothingHappened()
  })
})

describe('matching the payment to an order', () => {
  it('asks the gateway rather than trusting the payload', async () => {
    // The event carries a transaction id but not our invoice number, and a
    // forged id that is not a real transaction dies at this lookup. It is
    // authentication as much as it is data.
    await post(authCapture())

    expect(getTransactionDetails).toHaveBeenCalledWith(TRANSACTION_ID)
  })

  it('does nothing when the transaction carries no invoice number', async () => {
    getTransactionDetails.mockResolvedValue({
      invoiceNumber: null,
      amountCents: ORDER.totalCents,
    })
    const res = await post(authCapture())

    expect(res.status).toBe(200)
    expectNothingHappened()
  })

  it('does nothing when no order matches the invoice number', async () => {
    prisma.order.findUnique.mockResolvedValue(null)
    const res = await post(authCapture())

    expect(res.status).toBe(200)
    expectNothingHappened()
  })

  it('refuses to settle an order for the wrong amount', async () => {
    // A mismatch means the hosted page was tampered with or the wrong invoice
    // number came back. Either way a human looks; the order stays pending.
    getTransactionDetails.mockResolvedValue({
      invoiceNumber: ORDER.orderNumber,
      amountCents: 100,
    })
    const res = await post(authCapture())

    expect(res.status).toBe(200)
    expectNothingHappened()
  })

  it('settles when the gateway does not report an amount', async () => {
    // Absent is not the same as different: the guard is about a contradiction,
    // and refusing on a missing field would strand real payments.
    getTransactionDetails.mockResolvedValue({
      invoiceNumber: ORDER.orderNumber,
      amountCents: null,
    })
    await post(authCapture())

    expect(prisma.order.updateMany).toHaveBeenCalled()
    expect(drawDownStock).toHaveBeenCalledWith(ORDER.id)
  })
})

describe('the happy path', () => {
  it('marks it paid, records the transaction, draws down stock and tells everyone', async () => {
    const res = await post(authCapture())

    expect(res.status).toBe(200)
    expect(prisma.order.updateMany).toHaveBeenCalledWith({
      where: { orderNumber: ORDER.orderNumber, status: 'pending' },
      data: { status: 'paid', paymentTransactionId: TRANSACTION_ID },
    })
    expect(drawDownStock).toHaveBeenCalledWith(ORDER.id)
    expect(sendOrderConfirmation).toHaveBeenCalledWith(ORDER.id)
    expect(sendNewOrderNotification).toHaveBeenCalledWith(ORDER.id)
  })

  it('scopes the update to pending, which is what makes a replay safe', async () => {
    // Not decoration: this where-clause is the whole replay defence. Without
    // `status: 'pending'` a redelivery would re-pay a shipped order.
    await post(authCapture())

    const where = prisma.order.updateMany.mock.calls[0][0].where
    expect(where.status).toBe('pending')
  })
})

describe('a redelivery of a payment already processed', () => {
  it('draws no stock and sends no mail when the update matched nothing', async () => {
    // This happened for real: the first delivery was rejected by a signature
    // bug, Authorize.net retried after the fix, and the order settled once.
    prisma.order.updateMany.mockResolvedValue({ count: 0 })
    const res = await post(authCapture())

    expect(res.status).toBe(200)
    expect(drawDownStock).not.toHaveBeenCalled()
    expect(sendOrderConfirmation).not.toHaveBeenCalled()
    expect(sendNewOrderNotification).not.toHaveBeenCalled()
  })
})

describe('when something downstream fails', () => {
  it('still answers 200 when the gateway lookup throws', async () => {
    // A 500 here would make Authorize.net redeliver a payment that may already
    // be recorded. Failures in this route need a human, not a retry.
    getTransactionDetails.mockRejectedValue(new Error('gateway down'))
    const res = await post(authCapture())

    expect(res.status).toBe(200)
  })

  it('still answers 200 when the database throws', async () => {
    prisma.order.updateMany.mockRejectedValue(new Error('connection lost'))
    const res = await post(authCapture())

    expect(res.status).toBe(200)
  })

  it('tells the office even when the customer receipt fails', async () => {
    // The asymmetry that matters: a missing receipt is a support call, an
    // unshipped paid order is a refund. One failing send must not suppress
    // the other.
    sendOrderConfirmation.mockRejectedValue(new Error('mail host unreachable'))
    const res = await post(authCapture())

    expect(res.status).toBe(200)
    expect(sendNewOrderNotification).toHaveBeenCalledWith(ORDER.id)
  })

  it('still sends the receipt when the office notification fails', async () => {
    sendNewOrderNotification.mockRejectedValue(new Error('mail host unreachable'))
    const res = await post(authCapture())

    expect(res.status).toBe(200)
    expect(sendOrderConfirmation).toHaveBeenCalledWith(ORDER.id)
  })

  it('records the payment even if stock cannot be drawn down', async () => {
    // Money has moved. Never unwind a payment over an inventory problem — an
    // oversell is a phone call, a lost payment record is a chargeback.
    drawDownStock.mockRejectedValue(new Error('stock row locked'))
    const res = await post(authCapture())

    expect(res.status).toBe(200)
    expect(prisma.order.updateMany).toHaveBeenCalled()
  })
})
