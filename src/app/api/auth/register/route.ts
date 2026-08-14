import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import { hashPassword } from '@/lib/auth'
import { createSession } from '@/lib/session'
import { clientIp, rateLimit, tooManyRequests } from '@/lib/rate-limit'

const schema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  // Normalize before validating so " Me@Example.com " is accepted and stored lowercase.
  email: z.string().trim().toLowerCase().pipe(z.email('Enter a valid email')),
  password: z.string().min(8, 'Password must be at least 8 characters').max(200),
})

export async function POST(request: Request) {
  // Slows down bulk account creation from a single host.
  const ip = clientIp(request)
  const limited = rateLimit(`register:ip:${ip}`, {
    limit: 5,
    windowMs: 60 * 60_000,
  })
  if (!limited.ok) {
    return tooManyRequests(
      limited.retryAfter,
      'Too many accounts created from this location. Please try again later.',
    )
  }

  const body = await request.json().catch(() => null)
  const parsed = schema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? 'Invalid input' },
      { status: 400 },
    )
  }

  const { name, email, password } = parsed.data

  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) {
    return NextResponse.json(
      { error: 'An account with that email already exists.' },
      { status: 409 },
    )
  }

  const user = await prisma.user.create({
    data: { name, email, passwordHash: await hashPassword(password) },
    select: { id: true, email: true, name: true },
  })

  await createSession({ userId: user.id, email: user.email })

  return NextResponse.json({ user }, { status: 201 })
}
