import { NextResponse } from 'next/server'
import { createHash, randomBytes } from 'node:crypto'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import { sendPasswordResetEmail } from '@/lib/email'
import { clientIp, rateLimit, tooManyRequests } from '@/lib/rate-limit'
import { appUrl } from '@/lib/site'

const schema = z.object({
  email: z.string().trim().toLowerCase().pipe(z.email('Enter a valid email')),
})

const TOKEN_TTL_MS = 60 * 60_000 // 1 hour

export async function POST(request: Request) {
  const ip = clientIp(request)
  const limited = rateLimit(`forgot:ip:${ip}`, {
    limit: 5,
    windowMs: 15 * 60_000,
  })
  if (!limited.ok) {
    return tooManyRequests(
      limited.retryAfter,
      'Too many reset requests. Please wait a few minutes and try again.',
    )
  }

  const parsed = schema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? 'Invalid input' },
      { status: 400 },
    )
  }

  const { email } = parsed.data
  const user = await prisma.user.findUnique({ where: { email } })

  if (user) {
    // Invalidate any outstanding tokens so only the newest link works.
    await prisma.passwordResetToken.updateMany({
      where: { userId: user.id, usedAt: null },
      data: { usedAt: new Date() },
    })

    const rawToken = randomBytes(32).toString('hex')
    const tokenHash = createHash('sha256').update(rawToken).digest('hex')

    await prisma.passwordResetToken.create({
      data: {
        userId: user.id,
        tokenHash,
        expiresAt: new Date(Date.now() + TOKEN_TTL_MS),
      },
    })

    const resetUrl = `${appUrl()}/reset-password?token=${rawToken}`
    await sendPasswordResetEmail(user.email, resetUrl)
  }

  // Always the same response, so this can't be used to discover which email
  // addresses have accounts.
  return NextResponse.json({
    ok: true,
    message:
      'If an account exists for that email, we have sent a reset link. Check your inbox.',
  })
}
