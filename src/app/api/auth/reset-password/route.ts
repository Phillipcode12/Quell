import { NextResponse } from 'next/server'
import { createHash } from 'node:crypto'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import { hashPassword } from '@/lib/auth'
import { createSession } from '@/lib/session'
import { clientIp, rateLimit, tooManyRequests } from '@/lib/rate-limit'

const schema = z.object({
  token: z.string().min(16, 'Invalid reset link'),
  password: z.string().min(8, 'Password must be at least 8 characters').max(200),
})

export async function POST(request: Request) {
  const ip = clientIp(request)
  const limited = await rateLimit(`reset:ip:${ip}`, {
    limit: 10,
    windowMs: 15 * 60_000,
  })
  if (!limited.ok) {
    return tooManyRequests(
      limited.retryAfter,
      'Too many attempts. Please wait a few minutes and try again.',
    )
  }

  const parsed = schema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? 'Invalid input' },
      { status: 400 },
    )
  }

  const { token, password } = parsed.data
  const tokenHash = createHash('sha256').update(token).digest('hex')

  const record = await prisma.passwordResetToken.findUnique({
    where: { tokenHash },
    include: { user: true },
  })

  const invalid =
    !record || record.usedAt !== null || record.expiresAt.getTime() < Date.now()

  if (invalid) {
    return NextResponse.json(
      { error: 'That reset link is invalid or has expired. Request a new one.' },
      { status: 400 },
    )
  }

  // Mark used first, and only if it is still unused, so two concurrent
  // submissions can't both reset the password.
  const claimed = await prisma.passwordResetToken.updateMany({
    where: { id: record.id, usedAt: null },
    data: { usedAt: new Date() },
  })

  if (claimed.count === 0) {
    return NextResponse.json(
      { error: 'That reset link has already been used. Request a new one.' },
      { status: 400 },
    )
  }

  await prisma.user.update({
    where: { id: record.userId },
    data: { passwordHash: await hashPassword(password) },
  })

  // Sign them straight in — they've just proven control of the inbox.
  await createSession({ userId: record.userId, email: record.user.email })

  return NextResponse.json({ ok: true })
}
