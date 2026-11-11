import Link from 'next/link'
import {
  fillTokens,
  parseInline,
  type GuideBlock,
  type GuideFaq,
} from '@/lib/guides'

/**
 * Renders a guide's blocks.
 *
 * Text goes through `fillTokens` first, so label wording is read from the same
 * constants as the Drug Facts page, then through `parseInline` for links. No
 * HTML is ever interpreted from the content: every piece of text reaches the
 * page as a React text node.
 */
function Inline({ text }: { text: string }) {
  return (
    <>
      {parseInline(fillTokens(text)).map((segment, i) =>
        segment.href ? (
          <Link
            key={i}
            href={segment.href}
            className="text-brand-light hover:underline"
          >
            {segment.text}
          </Link>
        ) : (
          <span key={i}>{segment.text}</span>
        ),
      )}
    </>
  )
}

/**
 * The "Frequently asked questions" block at the end of a guide. The same
 * strings feed `guideFaqSchema`, so the page and the markup cannot disagree —
 * Google requires the marked-up answers to be visible on the page.
 */
export function GuideFaqList({ items }: { items: GuideFaq[] }) {
  return (
    <section className="mt-12">
      <h2 className="text-lg font-semibold text-white">
        Frequently asked questions
      </h2>
      <div className="mt-2">
        {items.map((item, i) => (
          <div key={i} className="mt-6">
            <h3 className="font-semibold text-white">
              <Inline text={item.q} />
            </h3>
            <p className="mt-2 leading-relaxed text-muted">
              <Inline text={item.a} />
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function GuideBody({ blocks }: { blocks: GuideBlock[] }) {
  return (
    <div className="mt-8">
      {blocks.map((block, i) => {
        if ('h' in block) {
          return (
            <h2 key={i} className="mt-10 text-lg font-semibold text-white">
              <Inline text={block.h} />
            </h2>
          )
        }
        if ('p' in block) {
          return (
            <p key={i} className="mt-4 leading-relaxed text-muted">
              <Inline text={block.p} />
            </p>
          )
        }
        return (
          <ul key={i} className="mt-4 space-y-2">
            {block.list.map((item, j) => (
              <li key={j} className="flex items-start gap-2.5 text-muted">
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                />
                <span className="leading-relaxed">
                  <Inline text={item} />
                </span>
              </li>
            ))}
          </ul>
        )
      })}
    </div>
  )
}
