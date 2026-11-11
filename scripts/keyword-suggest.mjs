/**
 * What people actually type, straight from Google's autocomplete.
 *
 *   node scripts/keyword-suggest.mjs "eye drops for" "dry eyes in winter"
 *   node scripts/keyword-suggest.mjs --file terms.txt
 *   node scripts/keyword-suggest.mjs --expand "eye drops"   # seed + a..z, who/what/how/can/is…
 *
 * Written 2026-11-11 for the Quell daily guide job. No credentials, no
 * quota, no cost: the endpoint behind the suggestion dropdown is public and
 * returns real completions ranked by how often they are searched. It is an
 * ordering, not a volume number, which is enough to answer the question that
 * matters when titling a page: is this what anyone calls the thing?
 *
 * Completions often include condition and brand phrases ("eye drops for pink
 * eye", prescription brand names). Those are claims or competitors; never
 * write them. Use the phrase people type, not ours.
 */

import { readFileSync } from 'node:fs'

const ENDPOINT = 'https://suggestqueries.google.com/complete/search'

/** Google rate-limits a fast loop. A beat between terms costs nothing. */
const PAUSE_MS = 400

const MODIFIERS = [
  'how', 'what', 'why', 'can', 'is', 'do', 'does', 'should', 'when', 'where',
  'which', 'vs', 'for', 'with', 'without', 'after', 'before', 'during', 'in', 'near',
]

async function suggest(term) {
  const url = `${ENDPOINT}?client=firefox&hl=en&gl=us&q=${encodeURIComponent(term)}`
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; quell-keyword-check)' },
  })
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for "${term}"`)
  const [, completions] = await res.json()
  return completions ?? []
}

function termsFromArgs(argv) {
  const fileFlag = argv.indexOf('--file')
  if (fileFlag !== -1) {
    const path = argv[fileFlag + 1]
    if (!path) throw new Error('--file needs a path.')
    return readFileSync(path, 'utf8')
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter((l) => l && !l.startsWith('#'))
  }
  const expandFlag = argv.indexOf('--expand')
  if (expandFlag !== -1) {
    const seed = argv[expandFlag + 1]
    if (!seed) throw new Error('--expand needs a seed.')
    return [
      seed,
      ...MODIFIERS.map((m) => `${m} ${seed}`),
      ...MODIFIERS.map((m) => `${seed} ${m}`),
      ...'abcdefghijklmnopqrstuvwxyz'.split('').map((c) => `${seed} ${c}`),
    ]
  }
  return argv.filter((a) => !a.startsWith('--'))
}

async function main() {
  const terms = termsFromArgs(process.argv.slice(2))
  if (terms.length === 0) {
    console.error(
      'Usage: node scripts/keyword-suggest.mjs "eye drops for" ...\n' +
        '       node scripts/keyword-suggest.mjs --file terms.txt\n' +
        '       node scripts/keyword-suggest.mjs --expand "eye drops"',
    )
    process.exitCode = 1
    return
  }

  for (const term of terms) {
    let completions
    try {
      completions = await suggest(term)
    } catch (err) {
      console.log(`\n**${term}**\n- (failed: ${err.message})`)
      continue
    }
    console.log(`\n**${term}**`)
    if (completions.length === 0) console.log('- (no completions — nobody searches this)')
    else for (const c of completions) console.log(`- ${c}`)
    await new Promise((r) => setTimeout(r, PAUSE_MS))
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
