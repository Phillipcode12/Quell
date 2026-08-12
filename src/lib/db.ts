import { PrismaLibSql } from '@prisma/adapter-libsql'
import { PrismaClient } from '@/generated/prisma/client'

// Prisma 7 talks to SQLite through a driver adapter. libsql is used here instead
// of better-sqlite3 because it ships prebuilt binaries and needs no C toolchain.
const createPrismaClient = () =>
  new PrismaClient({
    adapter: new PrismaLibSql({
      url: process.env.DATABASE_URL ?? 'file:./prisma/dev.db',
    }),
  })

// Reuse the client across dev hot reloads so we don't exhaust connections.
const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
