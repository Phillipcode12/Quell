/**
 * Shapes for the guide articles, kept apart from `lib/guides.ts` so the
 * article files can import them without a cycle (guides.ts imports the
 * articles).
 */

export type GuideCategory =
  | 'ordering'
  | 'shipping'
  | 'returns'
  | 'label'
  | 'using'
  | 'formula'
  | 'choosing'
  | 'seasonal'

/**
 * One block of an article body.
 *
 * Text may carry `{token}` placeholders, filled from the same constants the
 * rest of the site renders (see `GUIDE_TOKENS`), and inline links written as
 * `[label](/path)`. Nothing else is interpreted — no HTML, no markdown beyond
 * the link.
 */
export type GuideBlock = { h: string } | { p: string } | { list: string[] }

export type Guide = {
  slug: string
  /** The H1 and the page title. The layout appends "— Quell". */
  title: string
  /** Meta description, also shown under the title on the index. */
  description: string
  category: GuideCategory
  /** The ten longer cornerstone guides, listed first on the index. */
  featured?: true
  body: GuideBlock[]
}
