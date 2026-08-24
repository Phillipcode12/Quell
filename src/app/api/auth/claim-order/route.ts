import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import { getCurrentUser, hashPassword } from '@/lib/auth'
import { createSession } from '@/lib/session'
import { clientIp, rateLimit, tooManyRequests } from '@/lib/rate-limit'

/**
 * Creates an account straight after checkout and attaches the order that was
 * just placed.
 *
 * Guest checkout is the default path, so most buyers arrive at the success
 * page with no account. Their email and address are already in hand at that
 * moment, which makes it the one point where signing up costs them a password
 * and nothing else.
 *
 * WHY THIS IS NOT A BACK DOOR INTO SOMEONE ELSE'S ORDER HISTORY
 *
 * Signing in deliberately does NOT adopt guest orders that share your email
 * address (see PROJECT_STATE §8): there is no email verification on signup, so
 * anyone could register with someone else's address and inherit their history.
 * This route does not weaken that. It attaches exactly one order -- the one
 * whose number was presented -- and the proof required is order number plus
 * email, the identical pair that guest order lookup already accepts. Nobody
 * gains access to anything they could not already read at /orders.
 *
 * In particular it does not sweep up other orders sharing the email. Possession
 * was proven for one order, so one order is what gets linked.
 */

const schema = z.object({
  orderNumber: z.string().trim().toUpperCase().min(3).max(20),
  // Normalize before validating so " Me@Example.com " is accepted and stored
  // lowercase, matching how checkout wrote it.
  email: z.string().trim().toLowerCase().pipe(z.email('Enter a valid email')),
  name: z.string().trim().min(1, 'Name is required').max(100),
  password: z.string().min(8, 'Password must be at least 8 characters').max(200),
})

/**
 * Deliberately identical for "no such order number" and "that email is not the
 * one on this order". Distinguishing them would turn this into an oracle for
 * which order numbers exist -- the same reasoning as /api/orders/lookup, and
 * the same wording.
 */
const NO_MATCH = {
  error:
    'No order found with that number and email. Check both against your confirmation email.',
}

export async function POST(request: Request) {
  // This creates accounts, so it carries the same per-IP cap as registration.
  // It is also the second place an order number can be guessed at, and the
  // limit is what makes an 8-character reference impractical to brute force.
  const limited = await rateLimit(`claim-order:${clientIp(request)}`, {
    limit: 5,
    windowMs: 60 * 60_000,
  })
  if (!limited.ok) {
    return tooManyRequests(
      limited.retryAfter,
      'Too many attempts from this location. Please try again later.',
    )
  }

  // Someone already signed in has no use for this and would end up with a
  // second account. The success page hides the form in that case; this is the
  // matching server-side answer.
  if (await getCurrentUser()) {
    return NextResponse.json(
      { error: 'You are already signed in.' },
      { status: 409 },
    )
  }

  const parsed = schema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? 'Invalid details.' },
      { status: 400 },
    )
  }

  const { orderNumber, email, name, password } = parsed.data

  const order = await prisma.order.findFirst({
    where: { orderNumber, email },
    select: { id: true, userId: true },
  })

  if (!order) {
    return NextResponse.json(NO_MATCH, { status: 404 })
  }

  if (order.userId) {
    return NextResponse.json(
      {
        error:
          'This order is already linked to an account. Sign in to see it.',
      },
      { status: 409 },
    )
  }

  // Reveals that an account exists for this email -- but /api/auth/register
  // already answers the same question the same way, so this adds no new
  // disclosure. It cannot link the order to that account: proving you hold the
  // order number is not proving you hold the account.
  if (await prisma.user.findUnique({ where: { email }, select: { id: true } })) {
    return NextResponse.json(
      {
        error:
          'An account already uses that email. Sign in to that account instead.',
      },
      { status: 409 },
    )
  }

  const passwordHash = await hashPassword(password)

  let user: { id: string; email: string; name: string }

  try {
    user = await prisma.$transaction(async (tx) => {
      const created = await tx.user.create({
        data: { name, email, passwordHash },
        select: { id: true, email: true, name: true },
      })

      // Conditional on userId still being null, exactly like the stock
      // decrement: two requests racing the same order cannot both claim it,
      // and the loser attaches nothing rather than overwriting the winner.
      const linked = await tx.order.updateMany({
        where: { id: order.id, userId: null },
        data: { userId: created.id },
      })

      if (linked.count === 0) {
        // Claimed between the read above and here. Throwing rolls the whole
        // transaction back, so no account is left over from a signup that
        // could not deliver what it promised.
        throw new OrderAlreadyClaimedError()
      }

      return created
    })
  } catch (err) {
    if (err instanceof OrderAlreadyClaimedError) {
      return NextResponse.json(
        { error: 'This order is already linked to an account. Sign in to see it.' },
        { status: 409 },
      )
    }

    // The unique constraint on User.email is the other way this transaction
    // legitimately fails: two signups for the same address at once, where the
    // findUnique above saw nothing for either.
    if (isUniqueConstraintError(err)) {
      return NextResponse.json(
        {
          error:
            'An account already uses that email. Sign in to that account instead.',
        },
        { status: 409 },
      )
    }

    console.error('[claim-order] failed to create account:', err)
    return NextResponse.json(
      { error: 'Could not create your account. Please try again.' },
      { status: 500 },
    )
  }

  await createSession({ userId: user.id, email: user.email })

  return NextResponse.json({ user }, { status: 201 })
}

class OrderAlreadyClaimedError extends Error {}

/** Prisma's P2002. Matched structurally so this does not import the error class. */
function isUniqueConstraintError(err: unknown): boolean {
  return (
    typeof err === 'object' &&
    err !== null &&
    'code' in err &&
    (err as { code?: unknown }).code === 'P2002'
  )
}
