import { serializeJsonLd, type JsonLd as JsonLdData } from '@/lib/structured-data'

/**
 * Renders one JSON-LD block.
 *
 * A server component with no interactivity, so this ships zero JavaScript to
 * the browser — the script tag is inert data that only crawlers read.
 *
 * `dangerouslySetInnerHTML` is the documented way to emit JSON-LD in React:
 * putting the JSON in as a child would have React escape the quotes and
 * produce something no parser accepts. The value is escaped in
 * `serializeJsonLd` before it gets here.
 */
export function JsonLd({ data }: { data: JsonLdData | null }) {
  if (!data) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  )
}
