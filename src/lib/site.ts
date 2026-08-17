/**
 * Site-level config with no external dependencies, so metadata, sitemap, and
 * robots can import it without pulling in the payment client.
 */
export function appUrl() {
  return process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'
}
