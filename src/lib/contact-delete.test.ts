import { describe, expect, it } from 'vitest'
import {
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
    ...over,
  })

describe('planContactDeletion', () => {
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
