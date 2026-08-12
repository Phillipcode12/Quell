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

/** Returns the signed-in user, or null. Safe fields only — never the hash. */
export async function getCurrentUser() {
  const session = await readSession()
  if (!session) return null

  return prisma.user.findUnique({
    where: { id: session.userId },
    select: { id: true, email: true, name: true, createdAt: true },
  })
}
