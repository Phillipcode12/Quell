import { describe, expect, it } from 'vitest'
import {
  ADMIN_REFUSAL,
  NOTHING_REFUSAL,
  PAID_REFUSAL,
  planContactDeletion,
} from './contact-delete'

/**
 * The one property worth protecting: **a paid order cannot be deleted from a
 * screen whose job is tidying up email addresses.**
 *
 * If the first test in this file ever starts passing while deletion is
 * allowed, the Emails tab has become capable of destroying a financial record.
 */

const plan = (over: Partial<Parameters<typeof planContactDeletion>[0]> = {}) =>
  planContactDeletion({
    orders: [],
    hasAccount: false,
    hasSubscriber: false,
    isAdmin: false,
    ...over,
  })

describe('planContactDeletion', () => {
  describe('an admin account', () => {
    it('refuses to delete an admin who has never ordered', () => {
      // The case that actually happened. Ryan registered, was an admin because
      // his address is in ADMIN_EMAILS, and had bought nothing -- so from the
      // Emails tab his row was indistinguishable from junk, and the paid-order
      // rule had no money to protect. By 2026-10-06 the account was gone.
      const result = plan({ hasAccount: true, isAdmin: true })
      expect(result.allowed).toBe(false)
      if (!result.allowed) expect(result.reason).toBe(ADMIN_REFUSAL)
    })

    it('refuses even when there is nothing else to delete', () => {
      // An allowlisted address with no rows at all still must not report a
      // successful deletion of an admin.
      const result = plan({ isAdmin: true })
      expect(result.allowed).toBe(false)
    })

    it('says the admin thing rather than the paid thing', () => {
      // Both rules apply to an admin who has bought a bottle. The useful
      // message is the one that is unusual about them.
      const result = plan({
        isAdmin: true,
        hasAccount: true,
        orders: [{ id: 'o1', status: 'paid' }],
      })
      expect(result.allowed).toBe(false)
      if (!result.allowed) expect(result.reason).toBe(ADMIN_REFUSAL)
    })

    it('still allows deleting a non-admin account', () => {
      // The guard must not quietly turn the Delete button off for everyone --
      // clearing junk addresses is what the button is for.
      expect(plan({ hasAccount: true, isAdmin: false }).allowed).toBe(true)
    })
  })

  it.each(['paid', 'shipped'])('refuses an address with a %s order', (status) => {
    const result = plan({ orders: [{ id: 'o1', status }] })
    expect(result).toEqual({ allowed: false, reason: PAID_REFUSAL })
  })

  it('refuses even when only one of several orders was paid', () => {
    const result = plan({
      orders: [
        { id: 'o1', status: 'pending' },
        { id: 'o2', status: 'paid' },
        { id: 'o3', status: 'cancelled' },
      ],
      hasAccount: true,
      hasSubscriber: true,
    })
    // Deliberately all-or-nothing: removing the account while keeping the paid
    // order would leave a customer who can no longer be looked up by email.
    expect(result.allowed).toBe(false)
  })

  it('allows a pending order, which is a checkout that never paid', () => {
    const result = plan({ orders: [{ id: 'o1', status: 'pending' }] })
    expect(result).toMatchObject({
      allowed: true,
      orderIds: ['o1'],
      summary: '1 unpaid order',
    })
  })

  it('allows a cancelled order', () => {
    const result = plan({ orders: [{ id: 'o1', status: 'cancelled' }] })
    expect(result.allowed).toBe(true)
  })

  it('allows an account with no orders at all', () => {
    // What the signup bot left behind.
    const result = plan({ hasAccount: true })
    expect(result).toMatchObject({
      allowed: true,
      orderIds: [],
      account: true,
      summary: 'the account',
    })
  })

  it('allows a self-check signup on its own', () => {
    const result = plan({ hasSubscriber: true })
    expect(result).toMatchObject({ allowed: true, summary: 'the self-check signup' })
  })

  it('describes everything it is about to remove', () => {
    const result = plan({
      orders: [
        { id: 'o1', status: 'pending' },
        { id: 'o2', status: 'pending' },
      ],
      hasAccount: true,
      hasSubscriber: true,
    })
    expect(result).toMatchObject({
      allowed: true,
      orderIds: ['o1', 'o2'],
      summary: '2 unpaid orders, the account, the self-check signup',
    })
  })

  it('refuses when there is nothing to delete rather than reporting success', () => {
    expect(plan()).toEqual({ allowed: false, reason: NOTHING_REFUSAL })
  })
})
