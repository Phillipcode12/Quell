import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import { clientIp, rateLimit, tooManyRequests } from '@/lib/rate-limit'

/**
 * Guest order lookup: order number plus the email the order was placed with.
 *
 * Guests have no account, so this is how they check status. That makes it an
 * unauthenticated read of someone's name and address, so two things matter:
 *
 *  1. **It must not confirm what exists.** A wrong email on a real order and a
 *     made-up order number return exactly the same response. Otherwise this
 *     becomes an oracle for which order numbers are real.
 *  2. **It must be rate limited.** The order number is only 8 characters from a
 *     30-character alphabet; unlimited guessing paired with a known email
 *     address is the realistic attack.
 */

const schema = z.object({
  orderNumber: z.string().trim().toUpperCase().min(3).max(20),
  email: z.string().trim().toLowerCase().email(),
})

const NOT_FOUND = {
  error:
    'No order found with that number and email. Check both against your confirmation email.',
}

export async function POST(request: Request) {
  const limit = rateLimit(`order-lookup:${clientIp(request)}`, {
    limit: 10,
    windowMs: 10 * 60 * 1000,
  })
  if (!limit.ok) {
    return tooManyRequests(
      limit.retryAfter,
      'Too many lookups. Please wait and try again.',
    )
  }

  const parsed = schema.safeParse(await request.json().catch(() => null))
  // Deliberately the same message as a genuine miss, so malformed input reveals
  // nothing either.
  if (!parsed.success) {
    return NextResponse.json(NOT_FOUND, { status: 404 })
  }

  const order = await prisma.order.findFirst({
    where: {
      orderNumber: parsed.data.orderNumber,
      email: parsed.data.email,
    },
    select: {
      orderNumber: true,
      status: true,
      createdAt: true,
      subtotalCents: true,
      shippingCents: true,
      totalCents: true,
      shippingName: true,
      shippingLine1: true,
      shippingLine2: true,
      shippingCity: true,
      shippingState: true,
      shippingPostalCode: true,
      items: {
        select: {
          quantity: true,
          unitPriceCents: true,
          product: { select: { name: true, sizeLabel: true } },
        },
      },
    },
  })

  if (!order) {
    return NextResponse.json(NOT_FOUND, { status: 404 })
  }

  return NextResponse.json({ order })
}
