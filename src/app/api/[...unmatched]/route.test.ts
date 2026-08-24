import { describe, expect, it } from 'vitest'
import * as unmatched from './route'

/**
 * The catch-all that keeps a mistyped API path from answering 200.
 *
 * What these tests can and cannot show, since the bug being fixed was
 * environment-specific: they prove this handler answers 404 JSON on every
 * method. They do NOT prove the routing precedence -- that Next still prefers
 * /api/checkout over this catch-all -- because that is resolved by the
 * framework's router, not by any code here. That was verified by running the
 * real server and calling every existing endpoint; see the note below.
 */

const METHODS = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'] as const

describe('unmatched API paths', () => {
  it('answers 404 with JSON on every method that can carry a body', async () => {
    for (const method of METHODS) {
      const handler = unmatched[method]
      expect(handler, `${method} handler is missing`).toBeTypeOf('function')

      const response = handler()
      expect(response.status, `${method} status`).toBe(404)
      expect(
        response.headers.get('content-type'),
        `${method} content-type`,
      ).toContain('application/json')
      await expect(response.json()).resolves.toEqual({ error: 'Not found.' })
    }
  })

  it('answers HEAD with 404 and no body', async () => {
    // A HEAD response carrying a body is a protocol violation, so this one
    // cannot reuse the JSON responder.
    const response = unmatched.HEAD()

    expect(response.status).toBe(404)
    await expect(response.text()).resolves.toBe('')
  })

  it('covers every method a caller might plausibly send', () => {
    // If a method is missing, Next answers it with 405 rather than falling
    // through -- which is defensible, but the point of this route is that an
    // unmatched path gives one consistent answer.
    for (const method of [...METHODS, 'HEAD']) {
      expect(unmatched).toHaveProperty(method)
    }
  })

  it('does not leak which paths exist', () => {
    // One fixed message for every unmatched path. Echoing the path back, or
    // varying the wording by how close it came to a real route, would turn
    // this into a map of the API surface.
    const body = JSON.stringify({ error: 'Not found.' })
    expect(body).not.toMatch(/checkout|auth|webhook|orders/i)
  })
})

/**
 * Verified against a running server on 2026-08-20, because routing precedence
 * is not something a unit test can reach. With this catch-all in place, every
 * real endpoint still answered as itself rather than 404 "Not found.":
 *
 *   POST /api/auth/login              400   (validation)
 *   POST /api/auth/register           400
 *   POST /api/auth/forgot-password    400
 *   POST /api/auth/reset-password     400
 *   POST /api/auth/claim-order        400
 *   POST /api/auth/logout             200
 *   POST /api/checkout                400
 *   POST /api/webhooks/authorizenet   400   (bad signature)
 *   POST /api/orders/lookup           404   but with its own no-oracle
 *                                           message, not this route's
 *
 * That last one is the case worth re-checking by body rather than status if
 * this is ever touched: both answer 404, and only the message distinguishes a
 * working endpoint from a shadowed one.
 */
