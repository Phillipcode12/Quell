import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'

/**
 * Guards the defect found 2026-11-03 (§56): a canonical in the root layout is
 * inherited by every page that does not set its own, and for two months it told
 * Google that Drug Facts, About, Reviews, the self-check, Terms and Privacy were
 * all the home page. Only the home page was indexed.
 *
 * Read as text rather than imported, because the layout pulls in fonts, CSS and
 * components that have no business loading in a unit test.
 */
const appDir = join(__dirname)
const source = (rel: string) => readFileSync(join(appDir, rel), 'utf8')

describe('canonical URLs', () => {
  it('are never set in the root layout', () => {
    // Strip comments so the explanation in the layout does not trip this.
    const code = source('layout.tsx')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\/\/.*$/gm, '')
    expect(code).not.toMatch(/canonical\s*:/)
    expect(code).not.toMatch(/openGraph\s*:\s*\{[^}]*\burl\s*:/)
  })

  it.each([
    ['page.tsx', '/'],
    ['drug-facts/page.tsx', '/drug-facts'],
    ['about/page.tsx', '/about'],
    ['reviews/page.tsx', '/reviews'],
    ['self-check/page.tsx', '/self-check'],
    ['terms/page.tsx', '/terms'],
    ['privacy/page.tsx', '/privacy'],
  ])('%s declares itself as %s', (file, path) => {
    expect(source(file)).toContain(`alternates: { canonical: '${path}' }`)
  })
})
