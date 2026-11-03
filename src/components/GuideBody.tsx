import Link from 'next/link'
import { fillTokens, parseInline, type GuideBlock } from '@/lib/guides'

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
