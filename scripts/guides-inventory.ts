/**
 * What already exists, for the daily guide job. Run before choosing topics:
 *
 *   npx tsx scripts/guides-inventory.ts            # summary + every guide
 *   npx tsx scripts/guides-inventory.ts --faq      # also every FAQ question
 *
 * Prints the count per category, every published guide (slug | title), the
 * city-page ramp, and which daily files exist. Never write a guide whose
 * question is already answered here, even under a different slug.
 */
import { readdirSync } from 'node:fs'
import { join } from 'node:path'
import { GUIDE_CATEGORIES, allGuides, guideDate } from '../src/lib/guides'
import {
  PUBLISHED_LOCATION_COUNT,
  allLocations,
  locationPath,
  publishedLocations,
  publishedStates,
  statePath,
} from '../src/lib/locations'

const showFaq = process.argv.includes('--faq')
const guides = allGuides()

console.log(`GUIDES: ${guides.length} total (${guides.filter((g) => g.addedOn).length} from the daily job)\n`)
for (const c of GUIDE_CATEGORIES) {
  const n = guides.filter((g) => g.category === c.key).length
  console.log(`  ${c.key.padEnd(9)} ${String(n).padStart(5)}  ${c.name}`)
}

const all = allLocations()
const live = publishedLocations()
console.log(
  `\nCITY PAGES: ${PUBLISHED_LOCATION_COUNT} published of ${all.length} in the dataset; ` +
    `${all.length - PUBLISHED_LOCATION_COUNT} left to publish.`,
)
const next = all.slice(PUBLISHED_LOCATION_COUNT, PUBLISHED_LOCATION_COUNT + 25)
if (next.length) {
  console.log(`  Next ${next.length}: ${next.map((l) => `${l.city}, ${l.stateCode}`).join('; ')}`)
}
console.log(`  State pages (linkable): ${publishedStates().map((s) => statePath(s.slug)).join(' ')}`)
console.log(`  Example city link: ${live[0] ? locationPath(live[0]) : '(none)'}`)

const dailyDir = join(process.cwd(), 'src', 'lib', 'guide-articles', 'daily')
const files = readdirSync(dailyDir).filter((f) => /^\d{4}-\d{2}-\d{2}-[a-z]\.ts$/.test(f))
console.log(`\nDAILY FILES: ${files.length ? files.join(', ') : '(none yet)'}`)

console.log('\nEVERY GUIDE (category | date | slug | title):')
for (const g of guides) {
  console.log(`  ${g.category} | ${guideDate(g)} | ${g.slug} | ${g.title}`)
}

if (showFaq) {
  console.log('\nEVERY FAQ QUESTION (must stay unique site-wide):')
  for (const g of guides) for (const f of g.faq ?? []) console.log(`  ${g.slug}: ${f.q}`)
}
