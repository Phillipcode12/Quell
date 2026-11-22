import { describe, expect, it } from 'vitest'
import { describeDecline } from './payment-decline'

describe('describeDecline', () => {
  it('names the case seen on Q-5R997H9N: declined by the bank', () => {
    expect(
      describeDecline({ responseCode: 2, reasonCode: 2, reasonDescription: 'This transaction has been declined.' }),
    ).toBe('Declined by the card’s bank')
  })

  it('tells address and security-code mismatches apart', () => {
    expect(describeDecline({ responseCode: 2, reasonCode: 27, reasonDescription: null })).toBe(
      'Billing address didn’t match the card',
    )
    expect(describeDecline({ responseCode: 2, reasonCode: 65, reasonDescription: null })).toBe(
      'Card security code didn’t match',
    )
  })

  it('says a held payment is held, not declined', () => {
    expect(describeDecline({ responseCode: 4, reasonCode: null, reasonDescription: null })).toBe(
      'Held for review in Authorize.net',
    )
  })

  it('falls back to the gateway’s own words for an unlisted code', () => {
    expect(
      describeDecline({ responseCode: 3, reasonCode: 999, reasonDescription: 'Something unusual.' }),
    ).toBe('Payment error: Something unusual.')
    expect(describeDecline({ responseCode: 2, reasonCode: null, reasonDescription: null })).toBe(
      'Payment declined',
    )
  })
})
