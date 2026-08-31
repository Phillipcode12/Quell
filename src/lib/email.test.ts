import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  sendNewOrderNotificationEmail,
  sendShippingNoticeEmail,
} from './email'

/**
 * The two emails that make hand-fulfilment work: one telling the office to
 * pack, one telling the customer it is on the way.
 *
 * Driven against a mocked Resend transport. That proves what each message
 * contains and who it goes to; it does not prove Resend accepts it, since no
 * API key exists yet and nothing has ever been delivered for real.
 */

const ORDER = {
  id: 'order_1',
  orderNumber: 'Q-7F3K9M2A',
  email: 'ada@example.com',
  subtotalCents: 5998,
  shippingCents: 0,
  totalCents: 5998,
  shippingName: 'Ada Lovelace',
  shippingLine1: '412 Woodmont Blvd',
  shippingLine2: null,
  shippingCity: 'Nashville',
  shippingState: 'TN',
  shippingPostalCode: '37205',
  shippingCountry: 'US',
  createdAt: new Date('2026-08-20T15:04:00Z'),
  trackingCarrier: null,
  trackingNumber: null,
  items: [
    { quantity: 2, unitPriceCents: 2999, product: { name: 'Quell Eye Drops' } },
  ],
}

let fetchMock: ReturnType<typeof vi.fn>

/** Every message handed to the transport, as Resend would receive it. */
const sent = () =>
  fetchMock.mock.calls.map((c) => JSON.parse(c[1].body as string))

beforeEach(() => {
  vi.stubEnv('RESEND_API_KEY', 'test-key')
  vi.stubEnv('EMAIL_FROM', 'Quell <orders@quelldrop.com>')
  vi.stubEnv('NEXT_PUBLIC_APP_URL', 'https://quelldrop.com')
  fetchMock = vi.fn().mockResolvedValue({ ok: true, text: async () => '' })
  vi.stubGlobal('fetch', fetchMock)
})

describe('sendNewOrderNotificationEmail', () => {
  it('sends one message per recipient, not one with several', async () => {
    // Separate messages so nobody can reply-all into a customer thread, and
    // no colleague's address is disclosed to the others.
    await sendNewOrderNotificationEmail(ORDER, [
      'warehouse@example.com',
      'phillip@example.com',
    ])

    expect(fetchMock).toHaveBeenCalledTimes(2)
    expect(sent().map((m) => m.to)).toEqual([
      ['warehouse@example.com'],
      ['phillip@example.com'],
    ])
  })

  it('puts the order number and unit count in the subject', async () => {
    // The office searches their inbox by order number when a customer calls.
    await sendNewOrderNotificationEmail(ORDER, ['w@example.com'])

    const subject = sent()[0].subject
    expect(subject).toContain('Q-7F3K9M2A')
    expect(subject).toContain('2 units')
  })

  it('carries everything needed to pack without opening the admin', async () => {
    await sendNewOrderNotificationEmail(ORDER, ['w@example.com'])
    const { text } = sent()[0]

    expect(text).toContain('2 × Quell Eye Drops')
    expect(text).toContain('Ada Lovelace')
    expect(text).toContain('412 Woodmont Blvd')
    expect(text).toContain('Nashville, TN 37205')
    // So a query can be answered without a lookup.
    expect(text).toContain('ada@example.com')
    expect(text).toContain('https://quelldrop.com/admin/orders')
  })

  it('singularises a one-unit order', async () => {
    await sendNewOrderNotificationEmail(
      { ...ORDER, items: [{ quantity: 1, unitPriceCents: 2999, product: { name: 'Quell' } }] },
      ['w@example.com'],
    )
    expect(sent()[0].subject).toContain('1 unit')
    expect(sent()[0].subject).not.toContain('1 units')
  })

  it('says so loudly when nobody is configured to receive it', async () => {
    // A paid order that nobody was told about is the worst outcome here, so
    // it must not fail silently.
    const error = vi.spyOn(console, 'error').mockImplementation(() => {})

    const result = await sendNewOrderNotificationEmail(ORDER, [])

    expect(result.delivered).toBe(false)
    expect(fetchMock).not.toHaveBeenCalled()
    const logged = String(error.mock.calls[0][0])
    expect(logged).toContain('Q-7F3K9M2A')
    expect(logged).toContain('FULFILMENT_EMAILS')
  })

  it('still renders when the order has no address', async () => {
    // Should be unreachable — checkout requires an address — but this must
    // not throw and lose the notification entirely.
    const noAddress = {
      ...ORDER,
      shippingName: null,
      shippingLine1: null,
      shippingCity: null,
      shippingState: null,
      shippingPostalCode: null,
      shippingCountry: null,
    }

    await expect(
      sendNewOrderNotificationEmail(noAddress, ['w@example.com']),
    ).resolves.toMatchObject({ delivered: true })
    expect(sent()[0].text).toContain('no address')
  })
})

describe('sendShippingNoticeEmail', () => {
  it('includes the tracking number and a clickable link', async () => {
    await sendShippingNoticeEmail({
      ...ORDER,
      trackingCarrier: 'usps',
      trackingNumber: '9400111899223197428490',
    })

    const { text, html } = sent()[0]
    expect(text).toContain('9400111899223197428490')
    expect(text).toContain('USPS')
    expect(text).toContain('tools.usps.com')
    expect(html).toContain('href="https://tools.usps.com')
  })

  it('shows the number without a link for an unrecognised carrier', async () => {
    // A link to the wrong carrier returns "not found" and reads as a lost
    // parcel, so an unknown carrier degrades to the bare number.
    await sendShippingNoticeEmail({
      ...ORDER,
      trackingCarrier: 'other',
      trackingNumber: 'ABC123',
    })

    const { text, html } = sent()[0]
    expect(text).toContain('ABC123')
    expect(html).toContain('ABC123')
    expect(html).not.toContain('<a href="http')
  })

  it('omits the tracking section entirely when there is none', async () => {
    // Marking shipped without a number stays allowed, and the email reads
    // exactly as it did before tracking existed.
    await sendShippingNoticeEmail(ORDER)

    const { text } = sent()[0]
    expect(text).not.toMatch(/tracking/i)
    expect(text).toContain('has shipped')
  })

  it('ignores a whitespace-only tracking number', async () => {
    await sendShippingNoticeEmail({
      ...ORDER,
      trackingCarrier: 'usps',
      trackingNumber: '   ',
    })

    expect(sent()[0].text).not.toMatch(/tracking/i)
  })

  it('goes to the address on the order, not an account', async () => {
    // Guests have no account, and a signed-in buyer may change their address
    // after ordering.
    await sendShippingNoticeEmail(ORDER)
    expect(sent()[0].to).toEqual(['ada@example.com'])
  })
})

describe('the reply-to address', () => {
  /**
   * From and Reply-To answer different questions, and conflating them is what
   * would have forced an edit to BlephEx's live SPF record.
   *
   * From has to be a domain verified with the provider, because that is what
   * SPF and DKIM authenticate — quelldrop.com. Reply-To is only a header
   * saying where answers go: it needs no authentication and may be any address
   * on any domain. That separation is what lets receipts come from Quell while
   * replies reach a mailbox that actually exists, without meibum.com's DNS
   * being touched at all.
   *
   * It matters because quelldrop.com has no MX record and cannot receive mail.
   * With no Reply-To, a customer answering their receipt writes into a void
   * and nobody ever learns they tried.
   */
  it('sends replies to the configured address while sending from Quell', async () => {
    vi.stubEnv('EMAIL_REPLY_TO', 'Phillip.moore@meibum.com')
    await sendShippingNoticeEmail(ORDER)

    const body = sent()[0]
    expect(body.reply_to).toBe('Phillip.moore@meibum.com')
    // The sender is unchanged: it must stay on the verified domain.
    expect(body.from).toContain('orders@quelldrop.com')
  })

  it('omits reply_to entirely when unset, rather than sending it empty', async () => {
    vi.stubEnv('EMAIL_REPLY_TO', '')
    await sendShippingNoticeEmail(ORDER)

    expect('reply_to' in sent()[0]).toBe(false)
  })

  it('applies to the pack notice too, so the office can answer a customer', async () => {
    vi.stubEnv('EMAIL_REPLY_TO', 'Phillip.moore@meibum.com')
    await sendNewOrderNotificationEmail(ORDER, ['warehouse@example.com'])

    expect(sent()[0].reply_to).toBe('Phillip.moore@meibum.com')
  })
})
