import { describe, expect, it } from 'vitest'
import { INVITE_TTL_HOURS, canInvite, staffRows } from './staff-access'

const ADMINS = ['phillip@example.com', 'ryan@example.com']

describe('staffRows', () => {
  it('shows an allowlisted person with no account as the gap that it is', () => {
    // The real 2026-10-06 state: ADMIN_EMAILS named two people and the database
    // held one user. Nothing in the app said so, which is why this page exists.
    const rows = staffRows(ADMINS, [
      { email: 'phillip@example.com', invitePending: false },
    ])

    expect(rows).toHaveLength(2)
    expect(rows[0]).toMatchObject({ email: 'phillip@example.com', status: 'ready' })
    expect(rows[1]).toMatchObject({
      email: 'ryan@example.com',
      hasAccount: false,
      status: 'needs-account',
    })
  })

  it('reports an outstanding invite as unfinished, not as access', () => {
    const [row] = staffRows(['ryan@example.com'], [
      { email: 'ryan@example.com', invitePending: true },
    ])
    expect(row.status).toBe('invite-pending')
    // The account exists, so "no account" would be wrong too.
    expect(row.hasAccount).toBe(true)
  })

  it('lists accounts that are not on the allowlist rather than hiding them', () => {
    // 122 bot accounts were created in September before anyone noticed. An
    // admin view that only showed the allowlist could not have shown that.
    const rows = staffRows(['phillip@example.com'], [
      { email: 'phillip@example.com', invitePending: false },
      { email: 'BcmEuMKPmMbEoaHJUYeRMqC@example.com', invitePending: false },
    ])

    expect(rows).toHaveLength(2)
    const stranger = rows.find((r) => !r.allowed)
    expect(stranger?.status).toBe('not-allowed')
  })

  it('matches addresses case-insensitively', () => {
    // ADMIN_EMAILS is typed by hand into Vercel; User.email is stored lowercase.
    // A capital letter in the variable must not read as "no account".
    const [row] = staffRows(['Phillip@Example.com'], [
      { email: 'phillip@example.com', invitePending: false },
    ])
    expect(row.status).toBe('ready')
  })

  it('ignores blank entries from a trailing comma', () => {
    const rows = staffRows(['phillip@example.com', '', '  '], [])
    expect(rows).toHaveLength(1)
  })

  it('says nobody has access when the allowlist is empty', () => {
    // Fails closed, like adminEmails() itself.
    expect(staffRows([], [])).toEqual([])
  })
})

describe('canInvite', () => {
  it('allows an address on the allowlist', () => {
    expect(canInvite('ryan@example.com', ADMINS)).toEqual({ ok: true })
  })

  it('refuses anyone not on it, and says what to do instead', () => {
    const result = canInvite('stranger@example.com', ADMINS)
    expect(result.ok).toBe(false)
    if (!result.ok) expect(result.reason).toContain('ADMIN_EMAILS')
  })

  it('refuses everything when the allowlist is empty', () => {
    // Otherwise a missing variable would turn this into an open invite button —
    // the mailer capability that closing registration was meant to remove.
    expect(canInvite('ryan@example.com', []).ok).toBe(false)
  })

  it('refuses an empty address', () => {
    expect(canInvite('   ', ADMINS).ok).toBe(false)
  })

  it('is not fooled by case or surrounding space', () => {
    expect(canInvite(' RYAN@example.com ', ADMINS)).toEqual({ ok: true })
  })
})

describe('INVITE_TTL_HOURS', () => {
  it('outlasts a password reset, because an invite is unexpected', () => {
    // A reset is asked for by someone at the form; an invite arrives at someone
    // who may be packing orders. One hour would expire before it was read.
    expect(INVITE_TTL_HOURS).toBeGreaterThan(1)
  })
})
