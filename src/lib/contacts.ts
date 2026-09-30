/**
 * Every email address the shop holds, merged into one person per address.
 *
 * The addresses live in three tables for three different reasons -- `Order`
 * (anyone who reached checkout, guests included), `User` (accounts) and
 * `Subscriber` (the self-check quiz) -- so the same person can appear three
 * times with a different subset of their details in each. This reduces them to
 * one row carrying whatever is known.
 *
 * ### Why `consent` is a first-class field and not a footnote
 *
 * These addresses are **not interchangeable**, and a single undifferentiated
 * list is exactly how somebody ends up sending a marketing email to a person
 * who never asked for one.
 *
 * - Self-check subscribers **asked** to hear from us. They can be emailed.
 * - A customer gave their address to receive a receipt. Under US CAN-SPAM a
 *   business may still email its own customers, but that is a different footing
 *   and it is not an opt-in.
 *
 * So the distinction travels with every row, in the table and in the export,
 * for the same reason the self-check safety flag does: dropping it would make
 * this a worse record than the database it came from, and getting it back would
 * take a second decision that nobody can see being made.
 *
 * **Phone numbers are never a marketing channel.** Texting a number needs
 * separate express consent under US TCPA rules and nobody has given it. The
 * number is here so a human can ring a paying customer whose receipt bounced,
 * which is the only reason the field exists (PROJECT_STATE section 36).
 */

/** What we know about how an address reached us. A person can be several. */
export type ContactSource = 'customer' | 'abandoned' | 'account' | 'self-check'

/**
 * What an address may be used for.
 *
 * `opted-in` beats `customer` when someone is both: they asked, which is the
 * stronger permission of the two.
 */
export type ContactConsent = 'opted-in' | 'customer' | 'none'

export type OrderRow = {
  email: string
  shippingName: string | null
  phone: string | null
  status: string
  totalCents: number
  createdAt: Date
}

export type UserRow = { email: string; name: string | null; createdAt: Date }

export type SubscriberRow = { email: string; createdAt: Date }

export type Contact = {
  /** Lowercased. The dedupe key, and what the CSV carries. */
  email: string
  name: string | null
  phone: string | null
  /** Sorted for a stable render, so the column does not reshuffle per query. */
  sources: ContactSource[]
  consent: ContactConsent
  /** Paid or shipped only. An abandoned cart is not an order. */
  orders: number
  spentCents: number
  firstSeen: Date
  lastSeen: Date
}

/** Orders that represent money actually taken. */
const PAID = new Set(['paid', 'shipped'])

/** Rendering order for the source chips: strongest relationship first. */
const SOURCE_ORDER: ContactSource[] = [
  'customer',
  'account',
  'abandoned',
  'self-check',
]

/**
 * Trim to a usable name, or null.
 *
 * A whitespace-only shipping name is worse than nothing: it renders as a blank
 * where the UI promises a name, which reads as a bug rather than as absence.
 */
function cleanName(value: string | null | undefined): string | null {
  const trimmed = value?.trim()
  return trimmed ? trimmed : null
}

/**
 * Normalise an address for grouping.
 *
 * Lowercasing only. The local part of an address is technically
 * case-sensitive, and no further "helpful" normalisation happens here:
 * stripping dots or plus-tags the way some providers do would merge two people
 * at any provider that treats them as distinct, and merging two people is far
 * worse than listing one twice.
 */
function key(email: string): string {
  return email.trim().toLowerCase()
}

type Bucket = {
  email: string
  names: { at: Date; name: string }[]
  phones: { at: Date; phone: string }[]
  sources: Set<ContactSource>
  orders: number
  spentCents: number
  seen: Date[]
}

/**
 * The largest date JavaScript can hold, used to rank account names above
 * shipping names without inventing a plausible-looking timestamp.
 */
const ALWAYS_WINS = new Date(8640000000000000)

/**
 * Merge the three tables into one row per address.
 *
 * Pure and synchronous: the page does the querying, this does the deciding, and
 * every rule above is testable without a database.
 */
export function mergeContacts(input: {
  orders: OrderRow[]
  users: UserRow[]
  subscribers: SubscriberRow[]
}): Contact[] {
  const buckets = new Map<string, Bucket>()

  const bucket = (email: string): Bucket | null => {
    const k = key(email)
    // An address that is empty after trimming is not a contact. It should not
    // be reachable, but a blank row in this list would be untraceable.
    if (!k) return null
    const existing = buckets.get(k)
    if (existing) return existing
    const fresh: Bucket = {
      email: k,
      names: [],
      phones: [],
      sources: new Set(),
      orders: 0,
      spentCents: 0,
      seen: [],
    }
    buckets.set(k, fresh)
    return fresh
  }

  for (const order of input.orders) {
    const b = bucket(order.email)
    if (!b) continue
    b.seen.push(order.createdAt)

    const name = cleanName(order.shippingName)
    if (name) b.names.push({ at: order.createdAt, name })
    const phone = cleanName(order.phone)
    if (phone) b.phones.push({ at: order.createdAt, phone })

    if (PAID.has(order.status)) {
      b.sources.add('customer')
      b.orders += 1
      b.spentCents += order.totalCents
    } else if (order.status === 'pending') {
      // Cancelled orders add nothing: neither money nor a live lead.
      b.sources.add('abandoned')
    }
  }

  for (const user of input.users) {
    const b = bucket(user.email)
    if (!b) continue
    b.sources.add('account')
    b.seen.push(user.createdAt)
    const name = cleanName(user.name)
    // An account name always outranks a shipping name: it is what the person
    // called themselves, where a shipping name may be whoever the parcel is
    // addressed to.
    if (name) b.names.push({ at: ALWAYS_WINS, name })
  }

  for (const sub of input.subscribers) {
    const b = bucket(sub.email)
    if (!b) continue
    b.sources.add('self-check')
    b.seen.push(sub.createdAt)
  }

  const latest = <T extends { at: Date }>(rows: T[]): T | null =>
    rows.length === 0
      ? null
      : rows.reduce((a, c) => (c.at.getTime() >= a.at.getTime() ? c : a))

  const contacts: Contact[] = []
  for (const b of buckets.values()) {
    const times = b.seen.map((d) => d.getTime())
    contacts.push({
      email: b.email,
      name: latest(b.names)?.name ?? null,
      phone: latest(b.phones)?.phone ?? null,
      sources: SOURCE_ORDER.filter((s) => b.sources.has(s)),
      consent: b.sources.has('self-check')
        ? 'opted-in'
        : b.sources.has('customer')
          ? 'customer'
          : 'none',
      orders: b.orders,
      spentCents: b.spentCents,
      firstSeen: new Date(Math.min(...times)),
      lastSeen: new Date(Math.max(...times)),
    })
  }

  // Most recent contact first, then by address so the order is deterministic
  // when timestamps tie -- which they do for rows created in one transaction.
  return contacts.sort(
    (a, b) =>
      b.lastSeen.getTime() - a.lastSeen.getTime() ||
      a.email.localeCompare(b.email),
  )
}

/** Human label for a source chip. */
export const SOURCE_LABELS: Record<ContactSource, string> = {
  customer: 'Customer',
  account: 'Account',
  abandoned: 'Abandoned cart',
  'self-check': 'Self-check',
}

/** Human label for the consent column, phrased as what it permits. */
export const CONSENT_LABELS: Record<ContactConsent, string> = {
  'opted-in': 'Opted in',
  customer: 'Customer only',
  none: 'Do not email',
}
