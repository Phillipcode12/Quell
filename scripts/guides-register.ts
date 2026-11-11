/**
 * Registers a day's guide files with the site.
 *
 *   npx tsx scripts/guides-register.ts 2026-11-12
 *
 * Finds src/lib/guide-articles/daily/<date>-a.ts, -b.ts … and adds each one's
 * import and spread to daily/index.ts, between the marked blocks. Safe to run
 * twice: a file already registered is left alone. Each file must export one
 * array named DAILY_<YYYYMMDD>_<LETTER>, e.g. DAILY_20261112_A, and every
 * guide in it must carry `addedOn: '<date>'`.
 */
import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const date = process.argv[2]
if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
  console.error('Usage: npx tsx scripts/guides-register.ts YYYY-MM-DD')
  process.exit(1)
}

const dir = join(process.cwd(), 'src', 'lib', 'guide-articles', 'daily')
const indexPath = join(dir, 'index.ts')
const files = readdirSync(dir)
  .filter((f) => f.startsWith(`${date}-`) && /^\d{4}-\d{2}-\d{2}-[a-z]\.ts$/.test(f))
  .sort()

if (files.length === 0) {
  console.error(`No files named ${date}-<letter>.ts in ${dir}`)
  process.exit(1)
}

let index = readFileSync(indexPath, 'utf8')
const eol = index.includes('\r\n') ? '\r\n' : '\n'
const stamp = date.replace(/-/g, '')
let added = 0

for (const file of files) {
  const letter = file.slice(11, 12)
  const name = `DAILY_${stamp}_${letter.toUpperCase()}`
  const source = readFileSync(join(dir, file), 'utf8')
  if (!new RegExp(`export const ${name}\\s*:\\s*Guide\\[\\]`).test(source)) {
    console.error(`${file} must export \`export const ${name}: Guide[] = [...]\``)
    process.exit(1)
  }
  const wrongDate = [...source.matchAll(/addedOn:\s*'([^']*)'/g)].filter((m) => m[1] !== date)
  if (wrongDate.length > 0) {
    console.error(`${file} has addedOn values other than '${date}': ${wrongDate.map((m) => m[1]).join(', ')}`)
    process.exit(1)
  }
  const importLine = `import { ${name} } from './${file.replace(/\.ts$/, '')}'`
  if (index.includes(importLine)) continue
  index = index.replace(`// imports:end`, `${importLine}${eol}// imports:end`)
  index = index.replace(`  // spread:end`, `  ...${name},${eol}  // spread:end`)
  added += 1
}

writeFileSync(indexPath, index)
console.log(`Registered ${added} new file(s) for ${date} (${files.length} found): ${files.join(', ')}`)
