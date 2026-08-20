import 'server-only'

/**
 * Fixed-window rate limiter.
 *
 * Two backends, chosen at call time:
 *
 *   Upstash Redis  when UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN
 *                  are both set. Shared across every serverless instance, so
 *                  the limit is the limit.
 *   In-process     otherwise. Counts per instance, which is fine for local
 *                  development and useless behind several Vercel instances,
 *                  where an attacker gets the limit multiplied by the instance
 *                  count.
 *
 * Talks to Upstash over its REST API with plain fetch rather than a client
 * library, matching how lib/authorizenet.ts handles its gateway. One less
 * dependency, and the wire format is two lines of JSON.
 */

export type RateLimitResult = {
  ok: boolean
  remaining: number
  /** Seconds until the window resets. */
  retryAfter: number
}

type Options = { limit: number; windowMs: number }

// --- in-process fallback ----------------------------------------------------

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

function rateLimitInProcess(key: string, { limit, windowMs }: Options): RateLimitResult {
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

// --- Upstash backend --------------------------------------------------------

function upstashConfig() {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  return url && token ? { url: url.replace(/\/$/, ''), token } : null
}

export function isDistributedRateLimitConfigured() {
  return upstashConfig() !== null
}

/**
 * INCR then EXPIRE-on-first-hit is the standard atomic fixed window. Sent as a
 * pipeline so it is one round trip; INCR is atomic, so two instances racing the
 * same key still produce one winner per count.
 *
 * EXPIRE is set only when INCR returns 1 — the first request of a window. Doing
 * it every time would slide the window forward on each request and a steady
 * stream of traffic would never reset.
 */
async function rateLimitUpstash(
  key: string,
  { limit, windowMs }: Options,
  config: { url: string; token: string },
): Promise<RateLimitResult> {
  const windowSeconds = Math.max(1, Math.ceil(windowMs / 1000))
  const namespaced = `rl:${key}`

  const res = await fetch(`${config.url}/pipeline`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([
      ['INCR', namespaced],
      ['TTL', namespaced],
    ]),
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error(`upstash ${res.status}: ${await res.text()}`)
  }

  const body = (await res.json()) as Array<{ result?: number; error?: string }>
  const count = body[0]?.result
  let ttl = body[1]?.result

  if (typeof count !== 'number') {
    throw new Error(`upstash returned no count: ${JSON.stringify(body)}`)
  }

  // First request in this window — start the clock.
  if (count === 1 || typeof ttl !== 'number' || ttl < 0) {
    await fetch(`${config.url}/expire/${encodeURIComponent(namespaced)}/${windowSeconds}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${config.token}` },
      cache: 'no-store',
    })
    ttl = windowSeconds
  }

  const retryAfter = Math.max(1, ttl)

  if (count > limit) {
    return { ok: false, remaining: 0, retryAfter }
  }

  return { ok: true, remaining: limit - count, retryAfter: 0 }
}

// --- public API -------------------------------------------------------------

/**
 * Async because the Redis backend is a network call. Callers must await.
 *
 * If Upstash is configured but unreachable, this falls back to the in-process
 * limiter rather than throwing. A Redis outage should degrade protection, not
 * take down sign-in and checkout — but it is logged, because silently running
 * on the weaker backend in production is exactly the thing you want to know
 * about.
 */
export async function rateLimit(key: string, options: Options): Promise<RateLimitResult> {
  const config = upstashConfig()
  if (!config) return rateLimitInProcess(key, options)

  try {
    return await rateLimitUpstash(key, options, config)
  } catch (error) {
    console.error('[rate-limit] Upstash unavailable, falling back in-process:', error)
    return rateLimitInProcess(key, options)
  }
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
