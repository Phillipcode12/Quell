/**
 * After the deploy: confirms a day's guides are live on quelldrop.com.
 *
 *   npx tsx scripts/guides-verify-live.ts 2026-11-12
 *
 * Fetches every guide dated <date> and checks for a 200 with its title in the
 * page, then checks the guide sitemap lists them, and that llms.txt answers.
 * Exits non-zero if anything is missing, so the job reports it.
 */
import { allGuides, guidePath } from '../src/lib/guides'

const BASE = 'https://quelldrop.com'
const date = process.argv[2]
if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
  console.error('Usage: npx tsx scripts/guides-verify-live.ts YYYY-MM-DD')
  process.exit(1)
}

/** React escapes these in text nodes; compare like with like. */
const escape = (t: string) =>
  t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#x27;').replace(/"/g, '&quot;')

async function main() {
  const todays = allGuides().filter((g) => g.addedOn === date)
  if (todays.length === 0) {
    console.error(`No guides dated ${date}.`)
    process.exit(1)
  }
  const failures: string[] = []
  const queue = [...todays]
  async function worker() {
    for (let g = queue.shift(); g; g = queue.shift()) {
      const url = `${BASE}${guidePath(g.slug)}`
      try {
        const res = await fetch(url, { redirect: 'manual' })
        const html = res.status === 200 ? await res.text() : ''
        if (res.status !== 200) failures.push(`${res.status} ${url}`)
        else if (!html.includes(escape(g.title)) && !html.includes(g.title)) {
          failures.push(`title missing ${url}`)
        }
      } catch (err) {
        failures.push(`error ${url}: ${(err as Error).message}`)
      }
    }
  }
  await Promise.all(Array.from({ length: 6 }, worker))

  const sitemap = await (await fetch(`${BASE}/sitemap-guides.xml`)).text()
  const missing = todays.filter((g) => !sitemap.includes(`${guidePath(g.slug)}<`))
  for (const g of missing) failures.push(`not in sitemap: ${g.slug}`)

  const llms = await fetch(`${BASE}/llms.txt`)
  if (llms.status !== 200) failures.push(`llms.txt answered ${llms.status}`)

  console.log(`${todays.length - failures.length}/${todays.length} checks passed for ${date}.`)
  if (failures.length) {
    for (const f of failures) console.log(`FAIL ${f}`)
    process.exit(1)
  }
  console.log('OK — every guide is live, titled and in the sitemap.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
