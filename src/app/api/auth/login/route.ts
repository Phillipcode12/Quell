import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import { verifyPassword } from '@/lib/auth'
import { createSession } from '@/lib/session'

const schema = z.object({
  email: z.string().trim().toLowerCase().pipe(z.email('Enter a valid email')),
  password: z.string().min(1, 'Password is required'),
})

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const parsed = schema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? 'Invalid input' },
      { status: 400 },
    )
  }

  const { email, password } = parsed.data
  const user = await prisma.user.findUnique({ where: { email } })

  // Same message and roughly the same work either way, so this doesn't
  // reveal which emails have accounts.
  const ok = user ? await verifyPassword(password, user.passwordHash) : false
  if (!user || !ok) {
    return NextResponse.json(
      { error: 'Incorrect email or password.' },
      { status: 401 },
    )
  }

  await createSession({ userId: user.id, email: user.email })

  return NextResponse.json({
    user: { id: user.id, email: user.email, name: user.name },
  })
}
