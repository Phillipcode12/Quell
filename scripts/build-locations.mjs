/**
 * Builds the city dataset the location pages are generated from.
 *
 * Run: node scripts/build-locations.mjs [count]
 *
 * ### Why this is a committed script and not a one-off
 *
 * The pages name real places. A city filed under the wrong state is a page that
 * is simply wrong, published at scale, about somewhere a reader lives — so the
 * data has to come from an authoritative source and the derivation has to be
 * re-runnable and reviewable. Both inputs are **US Census Bureau, public
 * domain**:
 *
 * - `national_place2020.txt` — place names, state, county
 * - `sub-est2024.csv`        — population estimates, used only to decide which
 *                              places are worth a page at all
 *
 * Population is **not** published on the pages. It is a selection key, not
 * content: padding a page with a number nobody asked for is exactly the kind of
 * filler that makes these pages worse.
 *
 * ### The name cleaning is the fiddly part
 *
 * Census names are legal entity names, not what anyone calls the place:
 *
 * ```
 * New York city                                        -> New York
 * Indianapolis city (balance)                          -> Indianapolis
 * Nashville-Davidson metropolitan government (balance) -> Nashville
 * Louisville/Jefferson County metro government         -> Louisville
 * Winston-Salem city                                   -> Winston-Salem   (hyphen kept!)
 * ```
 *
 * The hyphen rule only applies to consolidated city-county governments. Applying
 * it generally would publish a thousand pages about "Winston, North Carolina".
 */

import fs from 'node:fs'
import path from 'node:path'

const SOURCES = {
  places:
    'https://www2.census.gov/geo/docs/reference/codes2020/national_place2020.txt',
  population:
    'https://www2.census.gov/programs-surveys/popest/datasets/2020-2024/cities/totals/sub-est2024.csv',
}

const CACHE = path.join(process.cwd(), '.census-cache')
const OUT = path.join(process.cwd(), 'src', 'lib', 'locations.generated.ts')

/** Places smaller than this get no page. See the note in lib/locations.ts. */
const MIN_POPULATION = 20_000

const STATE_CODES = {
  Alabama: 'AL', Alaska: 'AK', Arizona: 'AZ', Arkansas: 'AR',
  California: 'CA', Colorado: 'CO', Connecticut: 'CT', Delaware: 'DE',
  'District of Columbia': 'DC', Florida: 'FL', Georgia: 'GA', Hawaii: 'HI',
  Idaho: 'ID', Illinois: 'IL', Indiana: 'IN', Iowa: 'IA', Kansas: 'KS',
  Kentucky: 'KY', Louisiana: 'LA', Maine: 'ME', Maryland: 'MD',
  Massachusetts: 'MA', Michigan: 'MI', Minnesota: 'MN', Mississippi: 'MS',
  Missouri: 'MO', Montana: 'MT', Nebraska: 'NE', Nevada: 'NV',
  'New Hampshire': 'NH', 'New Jersey': 'NJ', 'New Mexico': 'NM',
  'New York': 'NY', 'North Carolina': 'NC', 'North Dakota': 'ND', Ohio: 'OH',
  Oklahoma: 'OK', Oregon: 'OR', Pennsylvania: 'PA', 'Rhode Island': 'RI',
  'South Carolina': 'SC', 'South Dakota': 'SD', Tennessee: 'TN', Texas: 'TX',
  Utah: 'UT', Vermont: 'VT', Virginia: 'VA', Washington: 'WA',
  'West Virginia': 'WV', Wisconsin: 'WI', Wyoming: 'WY',
}

async function cached(name, url) {
  fs.mkdirSync(CACHE, { recursive: true })
  const file = path.join(CACHE, name)
  if (fs.existsSync(file)) return fs.readFileSync(file, 'utf8')
  process.stdout.write(`downloading ${name}… `)
  const res = await fetch(url)
  if (!res.ok) throw new Error(`${name}: HTTP ${res.status}`)
  const text = await res.text()
  fs.writeFileSync(file, text, 'utf8')
  console.log(`${text.length} bytes`)
  return text
}

/**
 * Known special cases, where no rule would be honest.
 *
 * Keyed on the raw Census name so a change upstream fails loudly rather than
 * silently reverting to the legal name.
 */
const OVERRIDES = {
  // The Census calls Honolulu's urban core "Urban Honolulu". Nobody else does,
  // and "Urban Honolulu, Hawaii" on a page is plainly wrong to a local.
  'Urban Honolulu CDP': 'Honolulu',
}

const ENTITY_TYPE =
  /\s+(city|town|village|borough|municipality|township|plantation|CDP)\s*$/i

/**
 * Consolidated city-county governments, in all the shapes the Census files
 * them under. `urban county` is Lexington, Kentucky, which carries no
 * "government" and no "(balance)" and so matched nothing else.
 */
const CONSOLIDATED =
  /\s+((metropolitan|metro|consolidated|unified)\s+government|urban\s+county)\s*$/i

/**
 * Legal entity name -> what people call the place.
 *
 * Every branch here exists because a real name broke without it. The order
 * matters; the cases it is pinned against are in `build-locations.test.ts`.
 */
export function cleanPlaceName(raw) {
  if (OVERRIDES[raw]) return OVERRIDES[raw]

  const hadBalance = /\(balance\)\s*$/i.test(raw)
  let name = raw.replace(/\s*\(balance\)\s*$/i, '').trim()

  // "Nashville-Davidson metropolitan government" -> "Nashville"
  // "Louisville/Jefferson County metro government" -> "Louisville"
  if (CONSOLIDATED.test(name)) {
    return name.replace(CONSOLIDATED, '').trim().split(/[/-]/)[0].trim()
  }

  const stripped = name.replace(ENTITY_TYPE, '').trim()

  /**
   * A consolidated government that does not say so: "Butte-Silver Bow
   * (balance)" carries no entity type at all, so nothing was stripped and the
   * hyphen is a county name rather than part of the city's.
   *
   * **This test is why the hyphen rule is not applied generally.** Doing that
   * would publish a thousand pages about "Winston, North Carolina".
   */
  if (hadBalance && stripped === name) {
    return name.split(/[/-]/)[0].trim()
  }

  name = stripped

  /**
   * California files some places under a formal name with the usual one in
   * brackets: "El Paso de Robles (Paso Robles)", "San Buenaventura (Ventura)".
   * The bracketed name is the one people search for.
   */
  const alias = name.match(/\(([^)]+)\)\s*$/)
  if (alias) return alias[1].trim()

  /**
   * New England towns are filed as "Agawam Town city" — two entity types, and
   * only the first comes off above. Matched case-sensitively on "Town" so that
   * "Atlantic City", "Boise City" and "Elk Grove Village" keep their real
   * names.
   */
  return name.replace(/\s+Town$/, '').trim()
}

export function slugFor(city, stateCode) {
  const citySlug = city
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
  return `${citySlug}-${stateCode.toLowerCase()}`
}

async function main() {
  const limit = Number(process.argv[2]) || Infinity

  const [placesText, popText] = await Promise.all([
    cached('places.txt', SOURCES.places),
    cached('pop.csv', SOURCES.population),
  ])

  // state FIPS + place FIPS -> county, from the geography file.
  const counties = new Map()
  for (const line of placesText.split(/\r?\n/).slice(1)) {
    const parts = line.split('|')
    if (parts.length < 9) continue
    counties.set(`${parts[1]}:${parts[2]}`, parts[8])
  }

  const rows = []
  const lines = popText.split(/\r?\n/)
  const header = lines[0].split(',')
  const popColumn = header.lastIndexOf('POPESTIMATE2024')

  for (const line of lines.slice(1)) {
    if (!line) continue
    // NAME may be quoted and contain commas.
    const cells = line.match(/("[^"]*"|[^,]*)(,|$)/g)?.map((c) =>
      c.replace(/,$/, '').replace(/^"|"$/g, ''),
    )
    if (!cells || cells[0] !== '162') continue

    const stateFips = cells[1]
    const placeFips = cells[3]
    const stname = cells[9]
    const stateCode = STATE_CODES[stname]
    // Territories have no two-letter code here and no US shipping, so they are
    // dropped rather than guessed at.
    if (!stateCode) continue

    const population = Number(cells[popColumn])
    if (!Number.isFinite(population) || population < MIN_POPULATION) continue

    const city = cleanPlaceName(cells[8])
    if (!city) continue

    rows.push({
      slug: slugFor(city, stateCode),
      city,
      state: stname,
      stateCode,
      // Multi-county places are filed as "Aiken County~~~Edgefield County".
      // The first is the primary one; the rest are noise on a page like this.
      county: (counties.get(`${stateFips}:${placeFips}`) ?? '').split('~~~')[0],
      population,
    })
  }

  rows.sort((a, b) => b.population - a.population)

  // Two real places can clean to the same slug. First (largest) wins; the rest
  // are dropped rather than published at a colliding URL.
  const seen = new Set()
  const unique = []
  const collisions = []
  for (const row of rows) {
    if (seen.has(row.slug)) {
      collisions.push(row)
      continue
    }
    seen.add(row.slug)
    unique.push(row)
  }

  const selected = unique.slice(0, limit)

  const body = selected
    .map(
      (r) =>
        `  { slug: ${JSON.stringify(r.slug)}, city: ${JSON.stringify(r.city)}, state: ${JSON.stringify(r.state)}, stateCode: ${JSON.stringify(r.stateCode)}, county: ${JSON.stringify(r.county)} },`,
    )
    .join('\n')

  fs.writeFileSync(
    OUT,
    `// GENERATED by scripts/build-locations.mjs — do not edit by hand.
//
// Source: US Census Bureau, public domain.
//   national_place2020.txt (names, state, county)
//   sub-est2024.csv        (population estimates, used only for selection)
//
// ${selected.length} places, population >= ${MIN_POPULATION.toLocaleString('en-US')},
// largest first. Population is deliberately not carried through: it decides
// which places get a page, it is not content for one.

export type GeneratedLocation = {
  slug: string
  city: string
  state: string
  stateCode: string
  county: string
}

export const GENERATED_LOCATIONS: GeneratedLocation[] = [
${body}
]
`,
    'utf8',
  )

  console.log(`\nwrote ${selected.length} places to ${path.relative(process.cwd(), OUT)}`)
  console.log(`dropped ${collisions.length} slug collisions`)
  console.log('\nfirst 10:')
  for (const r of selected.slice(0, 10)) console.log(`  ${r.slug.padEnd(24)} ${r.city}, ${r.state}`)
  console.log('\nlast 5:')
  for (const r of selected.slice(-5)) console.log(`  ${r.slug.padEnd(24)} ${r.city}, ${r.state}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
