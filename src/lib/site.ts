/**
 * Site-level config with no external dependencies, so metadata, sitemap, and
 * robots can import it without pulling in the payment client.
 */

const FALLBACK_ORIGIN = 'http://localhost:3000'

/**
 * The site's origin, always a valid absolute URL.
 *
 * Defensive on purpose. `layout.tsx` feeds this straight into `new URL()` for
 * metadataBase, so anything unparseable takes the entire build down with
 * "Invalid URL" and no clue which value caused it. Two ways that happened:
 *
 *  - An env var set to an empty string. `??` does not catch that, because ''
 *    is neither null nor undefined, so the fallback never fired.
 *  - A value carrying a stray newline or quote from however it was set.
 *
 * Anything unusable falls back to localhost rather than failing the build.
 * Normalising through `.origin` also strips a trailing slash, so callers can
 * concatenate paths without doubling up.
 */
export function appUrl(): string {
  const raw = process.env.NEXT_PUBLIC_APP_URL?.trim().replace(/^["']|["']$/g, '')
  if (!raw) return FALLBACK_ORIGIN

  try {
    return new URL(raw).origin
  } catch {
    return FALLBACK_ORIGIN
  }
}
