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
  | 'local'

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
  /**
   * The day it went live (YYYY-MM-DD). Set on every guide from the daily job
   * (2026-11-12 on); older guides fall back to `GUIDES_PUBLISHED_ON`. Used for
   * the Article markup, the sitemap's `lastmod` and newest-first ordering.
   */
  addedOn?: string
  /**
   * Questions and short answers, shown at the end as "Frequently asked
   * questions" and emitted as FAQPage markup — the question → answer shape
   * that search engines and AI assistants quote. Same rules as the body:
   * tokens and `[label](/path)` links allowed, nothing else.
   */
  faq?: GuideFaq[]
}

export type GuideFaq = { q: string; a: string }
