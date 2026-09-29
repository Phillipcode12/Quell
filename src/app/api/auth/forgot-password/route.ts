import { NextResponse } from 'next/server'
import { createHash, randomBytes } from 'node:crypto'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import { sendPasswordResetEmail } from '@/lib/email'
import { clientIp, rateLimit, tooManyRequests } from '@/lib/rate-limit'
import { appUrl } from '@/lib/site'
import { resetDecision } from '@/lib/reset-guard'
import {
  TURNSTILE_FAILED_MESSAGE,
  turnstileEnabled,
  verifyTurnstile,
} from '@/lib/turnstile'

const schema = z.object({
  email: z.string().trim().toLowerCase().pipe(z.email('Enter a valid email')),
  turnstileToken: z.string().optional(),
})

const TOKEN_TTL_MS = 60 * 60_000 // 1 hour


export async function POST(request: Request) {
  const ip = clientIp(request)
  const limited = await rateLimit(`forgot:ip:${ip}`, {
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

  // This is the endpoint the bot was actually after: it is the one that makes
  // the site send mail to an arbitrary address. Checked after parsing so a
  // malformed body still gets its 400, but before any database work or email.
  if (turnstileEnabled()) {
    const check = await verifyTurnstile(parsed.data.turnstileToken, ip)
    if (!check.ok) {
      return NextResponse.json({ error: TURNSTILE_FAILED_MESSAGE }, { status: 403 })
    }
  }

  const { email } = parsed.data

  /**
   * A second limit, keyed on the address rather than the caller.
   *
   * The IP limit above stops one host hammering the endpoint. It does nothing
   * about the same *victim* being mailed repeatedly from many hosts, which is
   * exactly what a rotating botnet does — and the mail lands in one inbox
   * however many machines sent it. Keyed on the address so the person being
   * mailed is the thing being protected.
   *
   * Counted before the account lookup, so it costs a bot nothing to learn
   * from: the response is identical either way.
   */
  const byEmail = await rateLimit(`forgot:email:${email}`, {
    limit: 3,
    windowMs: 60 * 60_000,
  })

  const user = await prisma.user.findUnique({ where: { email } })

  /**
   * Whether this request is allowed to put mail in someone's inbox.
   *
   * Two reasons it might not be, and **neither changes the response** — the
   * body below is identical in every case, so this cannot be used to discover
   * which addresses have accounts or which are being throttled.
   *
   * **The account is brand new.** The bot's whole play is: register with a
   * stranger's address, then immediately ask for a reset, so the site mails
   * the stranger. On 2026-09-30 the gap between the two was under a minute
   * (§32). Nobody genuinely forgets a password they chose seconds ago, so a
   * reset for an account this young is far more likely to be that chain than
   * a real person.
   *
   * **The address has already been mailed three times this hour.**
   *
   * A determined bot can wait out the age check, and that is understood — it
   * is not a wall, it is a cost. The wall is that registration is closed
   * (§32), and this exists so that reopening it later is safe by default
   * rather than by someone remembering.
   */
  const decision = resetDecision({
    accountCreatedAt: user?.createdAt ?? null,
    withinEmailLimit: byEmail.ok,
  })

  if (!decision.send && decision.reason !== 'no-account') {
    // Invisible to the caller, but it is the signal that the chain is being
    // attempted again -- and last time nobody noticed for three days.
    console.warn('[forgot-password] suppressed', { email, reason: decision.reason })
  }

  if (user && decision.send) {
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
