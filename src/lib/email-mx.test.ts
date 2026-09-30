import { describe, expect, it } from 'vitest'
import { domainAcceptsMail } from './email-mx'

/**
 * These do real DNS lookups, deliberately.
 *
 * The first two versions of this module passed every check I reasoned about
 * and failed in production both times — first because an A-record fallback
 * let parked domains through, then because `resolveMx` throws **ENODATA** for
 * a domain with no MX and the catch only handled ENOTFOUND. Mocking the
 * resolver would have reproduced my assumptions, not the resolver's behaviour.
 *
 * The cost is that these need a network. That is the right trade for the one
 * check standing between a customer and a receipt they never get.
 */

describe('domains that cannot receive mail', () => {
  it('rejects the typo that cost the first real order', async () => {
    // chasebecker27@gmal.com, 2026-09-30.
    expect(await domainAcceptsMail('chasebecker27@gmal.com')).toBe(false)
  }, 15_000)

  it('rejects parked typo domains that have an A record but no MX', async () => {
    // Both resolve to advertising pages. An earlier version allowed them.
    expect(await domainAcceptsMail('t@gmial.com')).toBe(false)
    expect(await domainAcceptsMail('t@yaho.com')).toBe(false)
  }, 15_000)
})

describe('domains that can', () => {
  it('accepts the big providers', async () => {
    for (const address of ['a@gmail.com', 'a@outlook.com', 'a@yahoo.com']) {
      expect(await domainAcceptsMail(address), address).toBe(true)
    }
  }, 20_000)

  it('accepts the addresses this business actually uses', async () => {
    // A false positive here refuses a real customer at the last step of
    // checkout, which is worse than any typo getting through.
    for (const address of [
      'phillip@blephex.com',
      'a@meibum.com',
      'a@comcast.net',
      'a@sbcglobal.net',
    ]) {
      expect(await domainAcceptsMail(address), address).toBe(true)
    }
  }, 20_000)

  it('accepts unusual but real domains, which is the property that matters', async () => {
    /**
     * **A false positive here loses a paying customer.** That is a worse
     * outcome than any typo getting through, so this list is deliberately
     * long and deliberately odd: corporate domains seen in real signups on
     * this site, older ISPs, international providers, privacy mailers, and
     * eye-care practices — the audience this shop actually has.
     *
     * Checked 2026-09-30 across 45 such domains with zero blocked. This is the
     * subset kept as a regression guard.
     */
    const real = [
      'a@house-of-communication.com',
      'a@dss.virginia.gov',
      'a@hellweg.de',
      'a@rutgers.edu',
      'a@mandelynvicandsons.onmicrosoft.com',
      'a@sbcglobal.net',
      'a@mtaonline.net',
      'a@earthlink.net',
      'a@gmx.de',
      't-online@t-online.de',
      'a@fastmail.com',
      'a@proton.me',
      'a@pm.me',
      'a@zoho.com',
      'a@visionsource.com',
    ]
    for (const address of real) {
      expect(await domainAcceptsMail(address), address).toBe(true)
    }
  }, 30_000)

  it('accepts a typo-squatter that does run a mail server', async () => {
    /**
     * hotnail.com is registered and publishes MX, so this check cannot refuse
     * it — that is a fact, not a judgement. Catching it is the client-side
     * "did you mean?" suggestion's job, and the split between the two is the
     * whole design.
     */
    expect(await domainAcceptsMail('t@hotnail.com')).toBe(true)
  }, 15_000)
})

describe('failing open', () => {
  it('allows anything it cannot parse rather than blocking a sale', async () => {
    for (const odd of ['', 'no-at-sign', '@', 'a@']) {
      expect(await domainAcceptsMail(odd), JSON.stringify(odd)).toBe(true)
    }
  }, 15_000)
})
