import { NextResponse } from 'next/server'
import * as Sentry from '@sentry/nextjs'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import { campaignFromInput } from '@/lib/campaign'
import { clientIp, rateLimit, tooManyRequests } from '@/lib/rate-limit'
import { score } from '@/lib/self-check'
import {
  TURNSTILE_FAILED_MESSAGE,
  turnstileEnabled,
  verifyTurnstile,
} from '@/lib/turnstile'

/**
 * Records a self-check submission and the email that went with it.
 *
 * ### Protected, because this is exactly the shape of endpoint that was abused
 *
 * A public form that accepts an arbitrary email address and writes it to a
 * table is the same surface the signup bot used in §26 — and there it was
 * `/register` feeding `/forgot-password`. Turnstile guards this one from the
 * start rather than after an incident.
 *
 * ### The safety answer is honoured here too, not only in the UI
 *
 * When the safety check is triggered there is no score to record, and the row
 * is written with `safetyFlag` so nobody ever sends that person a marketing
 * email about symptom relief. That has to be enforced server-side: a client
 * can be edited, and this is the one piece of state with a duty attached.
 */

const schema = z.object({
  email: z.string().trim().toLowerCase().pipe(z.email('Enter a valid email address.')),
  // The answers are validated by shape rather than by content: `score()`
  // ignores anything it does not recognise, and a wrong answer key should cost
  // the answer, not the submission.
  answers: z.record(z.string(), z.unknown()).default({}),
  // Accepted as unknown for the reason recorded in §29 — z.string().optional()
  // rejects the nulls the browser actually sends.
  utmSource: z.unknown().optional(),
  utmMedium: z.unknown().optional(),
  utmCampaign: z.unknown().optional(),
  utmContent: z.unknown().optional(),
  turnstileToken: z.unknown().optional(),
})

export async function POST(request: Request) {
  const ip = clientIp(request)
  const limited = await rateLimit(`self-check:${ip}`, {
    limit: 10,
    windowMs: 15 * 60_000,
  })
  if (!limited.ok) {
    return tooManyRequests(
      limited.retryAfter,
      'Too many submissions. Please wait a few minutes and try again.',
    )
  }

  const parsed = schema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? 'Invalid input' },
      { status: 400 },
    )
  }

  if (turnstileEnabled()) {
    const check = await verifyTurnstile(parsed.data.turnstileToken, ip)
    if (!check.ok) {
      return NextResponse.json({ error: TURNSTILE_FAILED_MESSAGE }, { status: 403 })
    }
  }

  const { email, answers } = parsed.data
  const result = score(answers)

  /**
   * Prisma types a Json column as `InputJsonValue`, which `Record<string,
   * unknown>` does not satisfy — `unknown` could hold a function or a symbol,
   * neither of which survives serialisation.
   *
   * Re-parsing through JSON rather than casting means the value written is
   * provably serialisable, and anything that could not survive the round trip
   * is dropped here instead of throwing inside the driver.
   */
  const answersJson = JSON.parse(JSON.stringify(answers)) as Record<string, string | number | boolean | null>


  const record = result.safety
    ? { score: null, band: null, evaporative: null, safetyFlag: true }
    : {
        score: result.score,
        band: result.band.id,
        evaporative: result.evaporative,
        safetyFlag: false,
      }

  try {
    await prisma.subscriber.upsert({
      where: { email },
      // Retaking the quiz replaces the previous result rather than adding a
      // row. The campaign is written on create only, matching Visit and Order:
      // the first thing that brought someone keeps the credit.
      create: {
        email,
        source: 'self-check',
        answers: answersJson,
        ...record,
        ...campaignFromInput(parsed.data),
      },
      update: { answers: answersJson, ...record },
    })
  } catch (error) {
    /**
     * The visitor still gets their result. They have answered nine questions,
     * there is nothing they could do about a database problem, and an error
     * page instead of their score helps nobody.
     *
     * **But it is reported.** An earlier version swallowed this silently, and
     * the first time it fired — a stale Prisma client in dev — the page looked
     * completely correct while every single signup was being thrown away. A
     * capture endpoint that fails invisibly is worse than one that is down,
     * because nobody goes looking.
     */
    console.error('[self-check] failed to save subscriber', {
      email,
      error: error instanceof Error ? error.message : String(error),
    })
    Sentry.captureException(error, { tags: { route: 'self-check' } })
  }

  return NextResponse.json({ ok: true, result })
}
