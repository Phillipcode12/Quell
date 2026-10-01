import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  clearSavedCheckout,
  readSavedCheckout,
  saveCheckout,
  type SavedCheckout,
} from './checkout-memory'

/**
 * A form convenience that must never break the form.
 *
 * The cases that matter are the hostile ones: storage that throws instead of
 * returning null, and a stored value that someone has edited by hand. Both are
 * real, and in both the right answer is an empty form rather than an exception
 * on the page where people pay.
 */

/** A working in-memory stand-in for `localStorage`. */
function fakeStorage(initial: Record<string, string> = {}) {
  const data = new Map(Object.entries(initial))
  return {
    getItem: (k: string) => data.get(k) ?? null,
    setItem: (k: string, v: string) => void data.set(k, v),
    removeItem: (k: string) => void data.delete(k),
    clear: () => data.clear(),
    key: (i: number) => [...data.keys()][i] ?? null,
    get length() {
      return data.size
    },
    _dump: () => Object.fromEntries(data),
  } as unknown as Storage & { _dump: () => Record<string, string> }
}

/** What a locked-down or private browser does: throws on access. */
function throwingStorage() {
  return {
    getItem: () => {
      throw new Error('blocked')
    },
    setItem: () => {
      throw new Error('blocked')
    },
    removeItem: () => {
      throw new Error('blocked')
    },
  } as unknown as Storage
}

const FULL: SavedCheckout = {
  email: 'chase@example.com',
  firstName: 'Chase',
  lastName: 'Becker',
  line1: '14 Oak Street',
  line2: 'Apt 3',
  city: 'Bettendorf',
  state: 'IA',
  postalCode: '52722',
  phone: '563-555-0142',
}

beforeEach(() => vi.restoreAllMocks())

describe('saveCheckout / readSavedCheckout', () => {
  it('remembers everything that was typed', () => {
    const storage = fakeStorage()
    saveCheckout(FULL, storage)
    expect(readSavedCheckout(storage)).toEqual(FULL)
  })

  it('round-trips a partially filled form', () => {
    const storage = fakeStorage()
    saveCheckout({ email: 'a@example.com' }, storage)
    expect(readSavedCheckout(storage)).toMatchObject({
      email: 'a@example.com',
      line1: '',
      phone: '',
    })
  })

  it('returns null when nothing has been saved', () => {
    expect(readSavedCheckout(fakeStorage())).toBeNull()
  })

  it('never stores an all-empty record', () => {
    const storage = fakeStorage()
    saveCheckout({ email: '', line1: '' }, storage)
    expect(storage._dump()).toEqual({})
    expect(readSavedCheckout(storage)).toBeNull()
  })

  it('caps absurdly long values instead of storing them', () => {
    const storage = fakeStorage()
    saveCheckout({ email: 'a'.repeat(5000) }, storage)
    expect(readSavedCheckout(storage)!.email).toHaveLength(200)
  })

  it('never writes card-shaped fields, because it is only given these nine', () => {
    const storage = fakeStorage()
    // A caller handing over extra keys must not get them persisted.
    saveCheckout(
      { email: 'a@example.com', cardNumber: '4111111111111111' } as never,
      storage,
    )
    expect(storage._dump()[Object.keys(storage._dump())[0]]).not.toContain(
      '4111',
    )
  })

  it('forgets on request', () => {
    const storage = fakeStorage()
    saveCheckout(FULL, storage)
    clearSavedCheckout(storage)
    expect(readSavedCheckout(storage)).toBeNull()
  })
})

describe('when the browser fights back', () => {
  it('reads as null rather than throwing', () => {
    expect(() => readSavedCheckout(throwingStorage())).not.toThrow()
    expect(readSavedCheckout(throwingStorage())).toBeNull()
  })

  it('saves silently rather than throwing', () => {
    expect(() => saveCheckout(FULL, throwingStorage())).not.toThrow()
  })

  it('clears silently rather than throwing', () => {
    expect(() => clearSavedCheckout(throwingStorage())).not.toThrow()
  })

  it('does nothing at all when there is no storage', () => {
    expect(readSavedCheckout(null)).toBeNull()
    expect(() => saveCheckout(FULL, null)).not.toThrow()
    expect(() => clearSavedCheckout(null)).not.toThrow()
  })
})

describe('a stored value is untrusted input', () => {
  it('ignores a value that is not JSON', () => {
    const storage = fakeStorage({ 'quell.checkout.v1': 'not json{' })
    expect(readSavedCheckout(storage)).toBeNull()
  })

  it('ignores an array', () => {
    const storage = fakeStorage({ 'quell.checkout.v1': '["chase@example.com"]' })
    expect(readSavedCheckout(storage)).toBeNull()
  })

  it('ignores null stored as JSON', () => {
    const storage = fakeStorage({ 'quell.checkout.v1': 'null' })
    expect(readSavedCheckout(storage)).toBeNull()
  })

  it('discards non-string fields rather than putting objects in the form', () => {
    const storage = fakeStorage({
      'quell.checkout.v1': JSON.stringify({
        email: 'chase@example.com',
        city: { toString: 'nope' },
        phone: 42,
      }),
    })
    expect(readSavedCheckout(storage)).toMatchObject({
      email: 'chase@example.com',
      city: '',
      phone: '',
    })
  })

  it('keeps only the fields it knows about', () => {
    const storage = fakeStorage({
      'quell.checkout.v1': JSON.stringify({
        email: 'chase@example.com',
        cardNumber: '4111111111111111',
      }),
    })
    const result = readSavedCheckout(storage)!
    expect(result).not.toHaveProperty('cardNumber')
  })
})
