import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import { getCurrentUser } from '@/lib/auth'
import {
  createHostedPaymentPageToken,
  hostedFormUrl,
  isGatewayConfigured,
} from '@/lib/authorizenet'
import { generateUniqueOrderNumber } from '@/lib/order-number'
import { clientIp, rateLimit, tooManyRequests } from '@/lib/rate-limit'
import { appUrl } from '@/lib/site'
import { BRAND } from '@/lib/product-content'
import { SHIPPABLE_COUNTRIES, shippingCentsFor } from '@/lib/shipping'

/**
 * Starts a hosted-payment checkout.
 *
 * Unlike Stripe Checkout, the hosted page does not collect a destination
 * address — it only pre-populates one. So the address is gathered by our own
 * form and arrives here, is validated, and is stored on the order before the
 * customer ever reaches the gateway.
 */

const addressSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required.').max(50),
  lastName: z.string().trim().min(1, 'Last name is required.').max(50),
  line1: z.string().trim().min(1, 'Street address is required.').max(60),
  line2: z.string().trim().max(60).optional().default(''),
  city: z.string().trim().min(1, 'City is required.').max(40),
  // Two-letter USPS code. The gateway rejects anything longer.
  state: z
    .string()
    .trim()
    .toUpperCase()
    .regex(/^[A-Z]{2}$/, 'Use the two-letter state code.'),
  postalCode: z
    .string()
    .trim()
    .regex(/^\d{5}(-\d{4})?$/, 'Enter a valid ZIP code.'),
  country: z.enum(SHIPPABLE_COUNTRIES).default('US'),
})

/** Units of any one product a single order may contain. */
const MAX_UNITS_PER_PRODUCT = 10

/**
 * Distinct lines a single order may contain.
 *
 * There is one product, so a real cart never sends more than one. The cap
 * exists because the array had no length limit at all, which is what let the
 * per-line quantity cap be bypassed.
 */
const MAX_LINE_ITEMS = 20

const schema = z.object({
  items: z
    .array(
      z.object({
        productId: z.string().min(1),
        // Messages are written out because these surface directly to the
        // customer; the default Zod text ("Too big: expected number to be
        // <=10") reads like a stack trace.
        quantity: z
          .number()
          .int('Choose a whole number of bottles.')
          .min(1, 'Choose at least one bottle.')
          .max(MAX_UNITS_PER_PRODUCT, 'Maximum 10 bottles per order.'),
      }),
    )
    .min(1, 'Your cart is empty.')
    .max(MAX_LINE_ITEMS, 'Too many items in this order.')
    /**
     * "Maximum 10 bottles per order" has to be checked across the whole order,
     * not line by line.
     *
     * The `.max()` above caps a single line. Nothing stopped the same
     * productId appearing on many lines, each within the cap — and the stock
     * check downstream is also per line, so with 250 units on hand a request
     * posted straight at this endpoint could put roughly $7,500 through as one
     * order. The cart UI cannot produce that, because one product means one
     * line, but the API is a public surface and the UI is not what enforces
     * this.
     *
     * It matters beyond the stated rule: the merchant application declares a
     * ~$300 maximum ticket, and a transaction far outside the declared profile
     * is what triggers a fraud hold on a new account.
     */
    .superRefine((items, ctx) => {
      const perProduct = new Map<string, number>()
      for (const item of items) {
        perProduct.set(
          item.productId,
          (perProduct.get(item.productId) ?? 0) + item.quantity,
        )
      }

      for (const total of perProduct.values()) {
        if (total > MAX_UNITS_PER_PRODUCT) {
          ctx.addIssue({
            code: 'custom',
            message: 'Maximum 10 bottles per order.',
          })
          return
        }
      }
    }),
  shipTo: addressSchema,
  /// Only read when signed out. A signed-in buyer's own address always wins,
  /// so a spoofed value cannot redirect someone else's receipt.
  email: z.string().trim().toLowerCase().email('Enter a valid email address.').optional(),
})

export async function POST(request: Request) {
  // Guest checkout removed the sign-in wall, and with it the thing that made
  // card testing awkward here. Each attempt creates an order row and a gateway
  // token, so this is capped per IP. Generous enough that a real customer
  // retrying a typo never notices.
  const limit = await rateLimit(`checkout:${clientIp(request)}`, {
    limit: 15,
    windowMs: 10 * 60 * 1000,
  })
  if (!limit.ok) {
    return tooManyRequests(
      limit.retryAfter,
      'Too many checkout attempts. Please wait a few minutes and try again.',
    )
  }

  const user = await getCurrentUser()

  if (!isGatewayConfigured()) {
    return NextResponse.json(
      {
        error:
          'Payments are not configured. Add AUTHORIZENET_API_LOGIN_ID and AUTHORIZENET_TRANSACTION_KEY to .env and restart the dev server.',
      },
      { status: 503 },
    )
  }

  const parsed = schema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? 'Invalid checkout details.' },
      { status: 400 },
    )
  }

  const { shipTo } = parsed.data

  // Signed in: the account address, always, ignoring whatever was posted.
  // Signed out: the address typed at checkout, which is required.
  const email = user?.email ?? parsed.data.email
  if (!email) {
    return NextResponse.json(
      { error: 'Enter an email address so we can send your receipt.' },
      { status: 400 },
    )
  }

  // Prices always come from the database, never from the client payload.
  const products = await prisma.product.findMany({
    where: {
      id: { in: parsed.data.items.map((i) => i.productId) },
      active: true,
    },
  })

  // Collapse repeated lines for the same product into one. The schema already
  // refuses an order whose combined quantity exceeds the cap, so this is about
  // shape rather than safety: without it, a payload repeating a product would
  // write two OrderItem rows for the same thing and send the gateway two line
  // items, which then reads oddly on the packing email and the receipt.
  const merged = new Map<string, number>()
  for (const item of parsed.data.items) {
    merged.set(item.productId, (merged.get(item.productId) ?? 0) + item.quantity)
  }

  const lineItems = [...merged].map(([productId, quantity]) => {
    const product = products.find((p) => p.id === productId)
    return product ? { product, quantity } : null
  })

  if (lineItems.some((l) => l === null)) {
    return NextResponse.json(
      { error: 'One or more items are no longer available.' },
      { status: 400 },
    )
  }

  const resolved = lineItems as {
    product: (typeof products)[number]
    quantity: number
  }[]

  // Stock is checked here and decremented again atomically when payment lands,
  // so a sold-out product can't be sent to the payment page.
  const short = resolved.find(
    ({ product, quantity }) => product.stockQuantity < quantity,
  )
  if (short) {
    return NextResponse.json(
      {
        error:
          short.product.stockQuantity === 0
            ? `${short.product.name} is out of stock.`
            : `Only ${short.product.stockQuantity} left of ${short.product.name}.`,
      },
      { status: 409 },
    )
  }

  const subtotalCents = resolved.reduce(
    (sum, { product, quantity }) => sum + product.priceCents * quantity,
    0,
  )
  const shippingCents = shippingCentsFor(subtotalCents)
  const totalCents = subtotalCents + shippingCents

  const orderNumber = await generateUniqueOrderNumber(
    async (candidate) =>
      (await prisma.order.count({ where: { orderNumber: candidate } })) > 0,
  )

  const order = await prisma.order.create({
    data: {
      userId: user?.id ?? null,
      email,
      orderNumber,
      status: 'pending',
      purchaseMode: 'one_time',
      subtotalCents,
      shippingCents,
      totalCents,
      shippingName: `${shipTo.firstName} ${shipTo.lastName}`,
      shippingLine1: shipTo.line1,
      shippingLine2: shipTo.line2 || null,
      shippingCity: shipTo.city,
      shippingState: shipTo.state,
      shippingPostalCode: shipTo.postalCode,
      shippingCountry: shipTo.country,
      items: {
        create: resolved.map(({ product, quantity }) => ({
          productId: product.id,
          quantity,
          unitPriceCents: product.priceCents,
        })),
      },
    },
  })

  try {
    const token = await createHostedPaymentPageToken({
      orderNumber,
      description: resolved
        .map(({ product, quantity }) => `${quantity}× ${product.name}`)
        .join(', '),
      amountCents: totalCents,
      shippingCents,
      lineItems: resolved.map(({ product, quantity }) => ({
        id: product.slug,
        name: product.name,
        quantity,
        unitPriceCents: product.priceCents,
      })),
      shipTo: {
        firstName: shipTo.firstName,
        lastName: shipTo.lastName,
        address: [shipTo.line1, shipTo.line2].filter(Boolean).join(', '),
        city: shipTo.city,
        state: shipTo.state,
        zip: shipTo.postalCode,
        country: shipTo.country,
      },
      email,
      // The gateway POSTs the customer back, which a page route cannot accept,
      // so the return lands on an API route that redirects. The order travels
      // in the query string rather than being read out of the POST body — the
      // browser is never trusted to report payment, only to say where to look.
      returnUrl: `${appUrl()}/api/checkout/return?order=${orderNumber}`,
      cancelUrl: `${appUrl()}/cart?canceled=1`,
      merchantName: BRAND.name,
    })

    return NextResponse.json({ formUrl: hostedFormUrl(), token })
  } catch (err) {
    // The gateway never took a payment, so don't leave a pending order behind.
    await prisma.order.update({
      where: { id: order.id },
      data: { status: 'cancelled' },
    })

    console.error('Hosted payment page request failed:', err)
    return NextResponse.json(
      { error: 'Could not start checkout. Please try again.' },
      { status: 502 },
    )
  }
}
