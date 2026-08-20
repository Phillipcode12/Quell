import 'server-only'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/db'
import { readSession } from '@/lib/session'

const SALT_ROUNDS = 10

export async function hashPassword(plain: string) {
  return bcrypt.hash(plain, SALT_ROUNDS)
}

export async function verifyPassword(plain: string, hash: string) {
  return bcrypt.compare(plain, hash)
}

/**
 * A real bcrypt hash of a fixed string, at the same cost factor as a live one.
 * Nothing hashes to it in practice — it exists to be compared against when no
 * user was found, so that branch does the same work as the branch that did.
 *
 * Computed once at module load rather than per request; bcrypt.hash at cost 10
 * takes ~100ms and doing it on every failed login would be its own signal.
 */
const ABSENT_USER_HASH = bcrypt.hashSync(
  'no user with this email address exists',
  SALT_ROUNDS,
)

/**
 * Password check that costs the same whether or not the account exists.
 *
 * `verifyPassword` alone leaks account existence through timing: bcrypt is
 * deliberately slow, so skipping it when the user is missing returns in
 * milliseconds while a real account takes hundreds. Same response body, very
 * different clock — which is enough to enumerate registered emails.
 *
 * Always returns false when `hash` is null, regardless of the comparison.
 */
export async function verifyPasswordOrDecoy(
  plain: string,
  hash: string | null | undefined,
) {
  if (!hash) {
    await bcrypt.compare(plain, ABSENT_USER_HASH)
    return false
  }
  return bcrypt.compare(plain, hash)
}

/** Returns the signed-in user, or null. Safe fields only — never the hash. */
export async function getCurrentUser() {
  const session = await readSession()
  if (!session) return null

  return prisma.user.findUnique({
    where: { id: session.userId },
    select: {
      id: true,
      email: true,
      name: true,
      createdAt: true,
      paymentProfileId: true,
    },
  })
}
