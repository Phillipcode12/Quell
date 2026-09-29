import { describe, expect, it } from 'vitest'
import { MIN_ACCOUNT_AGE_MS, resetDecision } from './reset-guard'

const NOW = new Date('2026-09-30T12:00:00Z')
const ago = (ms: number) => new Date(NOW.getTime() - ms)

describe('the chain this exists to break', () => {
  /**
   * Register with a stranger's address, then immediately ask for a reset so
   * the site mails the stranger. Seen twice — §26 and §32 — and on 2026-09-30
   * the gap between the two steps was under a minute.
   */
  it('refuses a reset seconds after the account was created', () => {
    expect(
      resetDecision({
        accountCreatedAt: ago(30_000),
        withinEmailLimit: true,
        now: NOW,
      }),
    ).toEqual({ send: false, reason: 'account-too-new' })
  })

  it('refuses right up to the age limit and allows immediately after', () => {
    // The boundary, because an off-by-one here is either a permanently broken
    // reset or a permanently open hole, and neither announces itself.
    const justUnder = resetDecision({
      accountCreatedAt: ago(MIN_ACCOUNT_AGE_MS - 1000),
      withinEmailLimit: true,
      now: NOW,
    })
    const justOver = resetDecision({
      accountCreatedAt: ago(MIN_ACCOUNT_AGE_MS + 1000),
      withinEmailLimit: true,
      now: NOW,
    })
    expect(justUnder).toEqual({ send: false, reason: 'account-too-new' })
    expect(justOver).toEqual({ send: true })
  })

  it('refuses an account dated in the future', () => {
    // Clock skew between instances, or a bad import. A future date must not
    // read as "very old" and wave the request through.
    expect(
      resetDecision({
        accountCreatedAt: new Date(NOW.getTime() + 86_400_000),
        withinEmailLimit: true,
        now: NOW,
      }).send,
    ).toBe(false)
  })
})

describe('protecting the person being mailed', () => {
  it('refuses once the address has had its share this hour', () => {
    // The IP limit protects the server. This protects the inbox: a rotating
    // botnet is many hosts and one victim.
    expect(
      resetDecision({
        accountCreatedAt: ago(30 * 86_400_000),
        withinEmailLimit: false,
        now: NOW,
      }),
    ).toEqual({ send: false, reason: 'rate-limited' })
  })

  it('reports a flood as a flood even when the account is also new', () => {
    // Order matters only for the log line, and "rate-limited" is the more
    // useful signal when both are true.
    expect(
      resetDecision({
        accountCreatedAt: ago(1000),
        withinEmailLimit: false,
        now: NOW,
      }).send === false &&
        resetDecision({
          accountCreatedAt: ago(1000),
          withinEmailLimit: false,
          now: NOW,
        }),
    ).toEqual({ send: false, reason: 'rate-limited' })
  })
})

describe('the ordinary case still works', () => {
  it('sends for an established account within its limit', () => {
    expect(
      resetDecision({
        accountCreatedAt: ago(30 * 86_400_000),
        withinEmailLimit: true,
        now: NOW,
      }),
    ).toEqual({ send: true })
  })

  it('sends for an account created yesterday', () => {
    // The realistic forgotten-password case: signed up, came back, cannot
    // remember. This must not be collateral damage.
    expect(
      resetDecision({
        accountCreatedAt: ago(86_400_000),
        withinEmailLimit: true,
        now: NOW,
      }).send,
    ).toBe(true)
  })

  it('says no-account when there is none, without implying anything else', () => {
    expect(
      resetDecision({ accountCreatedAt: null, withinEmailLimit: true, now: NOW }),
    ).toEqual({ send: false, reason: 'no-account' })
  })
})
