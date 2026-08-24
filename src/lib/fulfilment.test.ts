import { beforeEach, describe, expect, it, vi } from 'vitest'
import { fulfilmentEmails } from './fulfilment'

/**
 * Who gets told to pack an order. If this returns nothing, a paid order sits
 * unnoticed until someone happens to open the admin screen — which is exactly
 * the failure the notification exists to prevent.
 */

beforeEach(() => {
  vi.stubEnv('FULFILMENT_EMAILS', '')
  vi.stubEnv('ADMIN_EMAILS', '')
})

describe('fulfilmentEmails', () => {
  it('splits a comma-separated list', () => {
    vi.stubEnv('FULFILMENT_EMAILS', 'a@example.com,b@example.com')
    expect(fulfilmentEmails()).toEqual(['a@example.com', 'b@example.com'])
  })

  it('tolerates the spacing a human types', () => {
    vi.stubEnv('FULFILMENT_EMAILS', ' a@example.com ,  b@example.com,')
    expect(fulfilmentEmails()).toEqual(['a@example.com', 'b@example.com'])
  })

  it('preserves case, unlike the admin allowlist', () => {
    // ADMIN_EMAILS is lower-cased because it is compared against an account's
    // email. This one is only ever a destination, and some mail systems treat
    // the local part as case sensitive, so it is passed through as written.
    vi.stubEnv('FULFILMENT_EMAILS', 'Orders@Example.com')
    expect(fulfilmentEmails()).toEqual(['Orders@Example.com'])
  })

  it('falls back to the admin allowlist when unset', () => {
    // So notifications work the moment email is configured, without a second
    // variable having to be remembered. Admins can act on an order anyway.
    vi.stubEnv('FULFILMENT_EMAILS', '')
    vi.stubEnv('ADMIN_EMAILS', 'moorerevenue@outlook.com')
    expect(fulfilmentEmails()).toEqual(['moorerevenue@outlook.com'])
  })

  it('prefers its own list over the fallback when both are set', () => {
    vi.stubEnv('FULFILMENT_EMAILS', 'warehouse@example.com')
    vi.stubEnv('ADMIN_EMAILS', 'admin@example.com')
    expect(fulfilmentEmails()).toEqual(['warehouse@example.com'])
  })

  it('returns empty when neither is configured', () => {
    // The caller turns this into a loud error rather than silently sending
    // nowhere — an order nobody was told about is the worst outcome here.
    expect(fulfilmentEmails()).toEqual([])
  })

  it('ignores a list of only separators', () => {
    vi.stubEnv('FULFILMENT_EMAILS', ', , ,')
    vi.stubEnv('ADMIN_EMAILS', 'admin@example.com')
    expect(fulfilmentEmails()).toEqual(['admin@example.com'])
  })
})
