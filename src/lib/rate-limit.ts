import 'server-only'

/**
 * Fixed-window rate limiter held in process memory.
 *
 * LIMITATION: this counts per server instance. On a single container it is
 * effective; behind several serverless instances an attacker gets the limit
 * multiplied by the instance count. Before you take real traffic, back this
 * with Redis (Upstash) or the database and keep the same call signature.
 */

type Bucket = { count: number; resetAt: number }

const buckets = new Map<string, Bucket>()

// Stop the map growing without bound on a long-lived server.
const MAX_TRACKED_KEYS = 10_000

function sweep(now: number) {
  if (buckets.size < MAX_TRACKED_KEYS) return
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key)
  }
}

export type RateLimitResult = {
  ok: boolean
  remaining: number
  /** Seconds until the window resets. */
  retryAfter: number
}

export function rateLimit(
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number },
): RateLimitResult {
  const now = Date.now()
  sweep(now)

  const existing = buckets.get(key)

  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return { ok: true, remaining: limit - 1, retryAfter: 0 }
  }

  existing.count += 1
  const retryAfter = Math.max(1, Math.ceil((existing.resetAt - now) / 1000))

  if (existing.count > limit) {
    return { ok: false, remaining: 0, retryAfter }
  }

  return { ok: true, remaining: limit - existing.count, retryAfter }
}

/**
 * Best-effort client IP. Trusts proxy headers, which is correct behind a
 * platform like Vercel that overwrites them, but means the value is
 * spoofable if you ever run this without a trusted proxy in front.
 */
export function clientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return request.headers.get('x-real-ip')?.trim() || 'unknown'
}

export function tooManyRequests(retryAfter: number, message: string) {
  return Response.json(
    { error: message },
    { status: 429, headers: { 'Retry-After': String(retryAfter) } },
  )
}
