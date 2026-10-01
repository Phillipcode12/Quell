/**
 * Remembers what a returning guest typed at checkout, in their own browser.
 *
 * ### Why this is not stored on our side
 *
 * It could not be, usefully. Without a login there is nothing to key it to but
 * the device, which would mean keeping someone's name, address and phone number
 * on a server against a browser id — building a profile of a person who never
 * asked for an account and cannot sign in to delete it. The whole point of
 * guest checkout is that we hold no standing record of anybody.
 *
 * In `localStorage` the data **never leaves the machine that typed it**. It is
 * already theirs, it is readable and clearable by them, and it reaches us only
 * when they submit the form again — exactly as if they had retyped it. That is
 * also what keeps the privacy policy's claim true.
 *
 * ### What is not kept
 *
 * **No card details, ever.** They are typed on the payment provider's own page
 * and this code never sees them. Nothing here should ever be extended to.
 *
 * ### Every access is guarded
 *
 * `localStorage` throws outright in some locked-down and private modes rather
 * than returning null, and the stored value is a string a person can edit. So
 * reads validate field by field and every call is wrapped: the worst outcome is
 * an empty form, which is where it started.
 */

const KEY = 'quell.checkout.v1'

/** Generous but bounded. Long enough for any real address line. */
const MAX_LENGTH = 200

/**
 * Versioned in the key rather than inside the value. Adding a field later means
 * `v2` and an old `v1` entry that is simply ignored, which is cheaper than
 * migration code for a form convenience.
 */
const FIELDS = [
  'email',
  'firstName',
  'lastName',
  'line1',
  'line2',
  'city',
  'state',
  'postalCode',
  'phone',
] as const

export type SavedCheckout = Record<(typeof FIELDS)[number], string>

/**
 * The browser's store, or null when there isn't one.
 *
 * Wrapped because merely *touching* `window.localStorage` can throw when site
 * data is blocked — it is not enough to check that `window` exists.
 */
function defaultStorage(): Storage | null {
  try {
    return typeof window === 'undefined' ? null : window.localStorage
  } catch {
    return null
  }
}

/** Anything that is not a string becomes empty; strings are capped. */
function clean(value: unknown): string {
  return typeof value === 'string' ? value.slice(0, MAX_LENGTH) : ''
}

/**
 * What was saved last time, or null if there is nothing usable.
 *
 * Null rather than a blank record when every field is empty, so the caller can
 * tell "nothing remembered" from "remembered, and it was blank" — the first
 * should not show a "not you?" prompt.
 */
export function readSavedCheckout(
  storage: Storage | null = defaultStorage(),
): SavedCheckout | null {
  if (!storage) return null

  let raw: string | null
  try {
    raw = storage.getItem(KEY)
  } catch {
    return null
  }
  if (!raw) return null

  let parsed: unknown
  try {
    parsed = JSON.parse(raw)
  } catch {
    // Hand-edited, truncated, or written by a different version.
    return null
  }
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return null

  const record = parsed as Record<string, unknown>
  const result = {} as SavedCheckout
  for (const field of FIELDS) result[field] = clean(record[field])

  return FIELDS.some((field) => result[field]) ? result : null
}

/**
 * Remembers this checkout.
 *
 * Called when the form is submitted rather than after payment succeeds, on
 * purpose: someone whose card is declined is exactly who should not have to
 * retype an address.
 */
export function saveCheckout(
  value: Partial<SavedCheckout>,
  storage: Storage | null = defaultStorage(),
): void {
  if (!storage) return

  const result = {} as SavedCheckout
  for (const field of FIELDS) result[field] = clean(value[field])

  // Writing an all-empty record would leave a stored value that `read` then
  // rejects, which is just a confusing entry in someone's browser storage.
  if (!FIELDS.some((field) => result[field])) return

  try {
    storage.setItem(KEY, JSON.stringify(result))
  } catch {
    // Full, blocked, or private. A missed convenience is not worth an error.
  }
}

/**
 * Forgets it.
 *
 * Needed, not optional: a shared or family computer will prefill one person's
 * name and address for the next, and the only acceptable answer to that is a
 * visible way to clear it.
 */
export function clearSavedCheckout(
  storage: Storage | null = defaultStorage(),
): void {
  if (!storage) return
  try {
    storage.removeItem(KEY)
  } catch {
    // Nothing to do and nothing worth telling anyone.
  }
}
