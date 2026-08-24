import { beforeEach, describe, expect, it, vi } from 'vitest'

// getCurrentUser reaches the database and the session cookie, neither of which
// belongs in a unit test. Only the allowlist decision is under test here.
const getCurrentUser = vi.fn()
vi.mock('@/lib/auth', () => ({ getCurrentUser }))

const { adminEmails, getAdminUser, isAdminEmail } = await import('./admin')

/**
 * Admin access is the boundary between "can see every customer's name, email,
 * address and lifetime spend" and "cannot". It is an environment allowlist
 * rather than a database flag specifically so that nothing inside the app can
 * escalate an account -- which puts the whole decision in these few functions.
 */

beforeEach(() => {
  vi.clearAllMocks()
})

describe('adminEmails', () => {
  it('splits a comma-separated list and lowercases it', () => {
    vi.stubEnv('ADMIN_EMAILS', 'A@Example.com,b@example.com')
    expect(adminEmails()).toEqual(['a@example.com', 'b@example.com'])
  })

  it('tolerates the spacing a human actually types', () => {
    vi.stubEnv('ADMIN_EMAILS', ' a@example.com ,  b@example.com,')
    expect(adminEmails()).toEqual(['a@example.com', 'b@example.com'])
  })

  it('is empty when unset or blank', () => {
    // This is the fail-closed case, and it is a real operational scenario:
    // if ADMIN_EMAILS is missing from Vercel, the admin tabs 404 for
    // everyone, including Phillip. Wrong, but safe.
    vi.stubEnv('ADMIN_EMAILS', '')
    expect(adminEmails()).toEqual([])

    vi.stubEnv('ADMIN_EMAILS', ',, ,')
    expect(adminEmails()).toEqual([])
  })
})

describe('isAdminEmail', () => {
  beforeEach(() => {
    vi.stubEnv('ADMIN_EMAILS', 'moorerevenue@outlook.com')
  })

  it('matches regardless of the case the account was created with', () => {
    expect(isAdminEmail('moorerevenue@outlook.com')).toBe(true)
    expect(isAdminEmail('MooreRevenue@Outlook.com')).toBe(true)
    expect(isAdminEmail('MOOREREVENUE@OUTLOOK.COM')).toBe(true)
  })

  it('rejects anyone not on the list', () => {
    expect(isAdminEmail('someone@example.com')).toBe(false)
    // Test signups that exist in the database today.
    expect(isAdminEmail('kokkpokpopo@gmail.com')).toBe(false)
  })

  it('rejects a missing email rather than treating it as a wildcard', () => {
    expect(isAdminEmail(null)).toBe(false)
    expect(isAdminEmail(undefined)).toBe(false)
    expect(isAdminEmail('')).toBe(false)
  })

  it('does not match on a substring or a lookalike domain', () => {
    // `.includes()` on the joined string instead of the array would let
    // every one of these through.
    expect(isAdminEmail('moorerevenue@outlook.com.attacker.test')).toBe(false)
    expect(isAdminEmail('xmoorerevenue@outlook.com')).toBe(false)
    expect(isAdminEmail('moorerevenue@outlook.co')).toBe(false)
  })

  it('admits nobody at all when the allowlist is unset', () => {
    vi.stubEnv('ADMIN_EMAILS', '')
    expect(isAdminEmail('moorerevenue@outlook.com')).toBe(false)
  })
})

describe('getAdminUser', () => {
  beforeEach(() => {
    vi.stubEnv('ADMIN_EMAILS', 'moorerevenue@outlook.com')
  })

  it('returns the user when they are on the allowlist', async () => {
    const user = { id: 'u1', email: 'moorerevenue@outlook.com', name: 'Phillip' }
    getCurrentUser.mockResolvedValue(user)

    await expect(getAdminUser()).resolves.toBe(user)
  })

  it('returns null for a signed-in non-admin', async () => {
    // The callers turn null into a 404, not a 403 -- an admin area that
    // answers "forbidden" has confirmed it exists.
    getCurrentUser.mockResolvedValue({ id: 'u2', email: 'guest@example.com' })

    await expect(getAdminUser()).resolves.toBeNull()
  })

  it('returns null when nobody is signed in', async () => {
    getCurrentUser.mockResolvedValue(null)

    await expect(getAdminUser()).resolves.toBeNull()
  })

  it('returns null when the allowlist is unset, even for a real account', async () => {
    vi.stubEnv('ADMIN_EMAILS', '')
    getCurrentUser.mockResolvedValue({
      id: 'u1',
      email: 'moorerevenue@outlook.com',
    })

    await expect(getAdminUser()).resolves.toBeNull()
  })
})
