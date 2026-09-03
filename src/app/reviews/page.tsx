import type { Metadata } from 'next'
import Link from 'next/link'
import { Avatar, type AvatarSpec } from '@/components/home/Avatar'
import { BRAND, TESTIMONIALS, TESTIMONIALS_NOTE } from '@/lib/product-content'

export const metadata: Metadata = {
  title: 'Reviews',
  description: `What people say about ${BRAND.trademark} ${BRAND.productType}.`,
}

/**
 * The reviews page.
 *
 * **Its own page rather than a homepage section**, by decision on 2026-09-03.
 * It is reached from the nav and nowhere else, which keeps the homepage a
 * single argument that ends at the buy panel instead of pausing halfway
 * through for testimonials.
 *
 * ### Why the layout is deliberately uneven
 *
 * A grid of identical cards reads as a form someone filled in — five slots,
 * five entries, all the same size, which is exactly what a fabricated review
 * wall looks like. Quotes of genuinely different lengths laid out at genuinely
 * different sizes read as five different people, because that is what they
 * are. The staggering is doing honest work, not decoration.
 *
 * So: the longest quote leads and is set largest, the shortest is set large too
 * because a short line can carry weight, and the rest alternate side and indent
 * down the page. Nothing is centred and no two blocks share a width.
 *
 * The ambient glows behind it are the only ornament, and they are there to stop
 * a long dark page reading as empty between the quotes.
 */

/**
 * Placement per quote, keyed by name so reordering TESTIMONIALS cannot
 * silently reshuffle the design.
 *
 * `size` is chosen from the quote's own length rather than from importance:
 * a long quote set large fills the line, a short one set small disappears.
 */
const PLACEMENT: Record<
  string,
  { align: string; width: string; indent: string; size: string; avatar: string }
> = {
  Ming: {
    align: 'self-start',
    width: 'max-w-2xl',
    indent: '',
    size: 'text-2xl sm:text-[27px] leading-[1.45]',
    avatar: 'h-20 w-20 sm:h-24 sm:w-24',
  },
  Raj: {
    align: 'self-end',
    width: 'max-w-xl',
    indent: 'sm:mr-4',
    size: 'text-lg sm:text-xl leading-relaxed',
    avatar: 'h-16 w-16 sm:h-20 sm:w-20',
  },
  William: {
    align: 'self-start',
    width: 'max-w-lg',
    indent: 'sm:ml-16 lg:ml-28',
    size: 'text-lg leading-relaxed',
    avatar: 'h-16 w-16',
  },
  Marcus: {
    align: 'self-end',
    width: 'max-w-md',
    indent: 'sm:mr-12 lg:mr-24',
    size: 'text-xl sm:text-2xl leading-snug',
    avatar: 'h-16 w-16 sm:h-20 sm:w-20',
  },
  Susan: {
    align: 'self-start',
    width: 'max-w-xl',
    indent: 'sm:ml-6',
    size: 'text-lg leading-relaxed',
    avatar: 'h-16 w-16 sm:h-20 sm:w-20',
  },
  Margaret: {
    align: 'self-end',
    width: 'max-w-2xl',
    indent: '',
    size: 'text-xl sm:text-[25px] leading-[1.5]',
    avatar: 'h-20 w-20 sm:h-24 sm:w-24',
  },
}

/**
 * The order down the page, which is not the order in product-content.
 *
 * Long quotes open and close, short ones sit in the middle where the eye is
 * already moving. Margaret's runs last and large: it is the only one that
 * mentions having tried others, which is the strongest thing anyone says here
 * and the right note to end on.
 */
const ORDER = ['Ming', 'Raj', 'William', 'Marcus', 'Susan', 'Margaret']

export default function ReviewsPage() {
  // Typed on string rather than on the literal union TESTIMONIALS produces, so
  // ORDER stays a plain list of names and adding a quote does not require
  // touching a type.
  const byName = new Map<string, (typeof TESTIMONIALS)[number]>(
    TESTIMONIALS.map((t) => [t.name, t]),
  )
  const quotes = ORDER.map((n) => byName.get(n)).filter(
    (t): t is (typeof TESTIMONIALS)[number] => Boolean(t),
  )

  return (
    <div className="relative overflow-hidden bg-background">
      {/* Ambient light. Three soft pools rather than one, so the page has a
          direction to it and the space between quotes is never flat black. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-brand/10 blur-[130px]" />
        <div className="absolute -right-24 top-[38%] h-[30rem] w-[30rem] rounded-full bg-brand/[0.07] blur-[150px]" />
        <div className="absolute bottom-10 left-1/4 h-80 w-80 rounded-full bg-brand/[0.05] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <header className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Reviews
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
            In their words.
          </h1>
          {/* The authenticity line sits here rather than in the fine print at
              the bottom. It is the first thing a sceptical reader wants and the
              last place they would look for it. */}
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {TESTIMONIALS_NOTE}
          </p>
        </header>

        {/* A column of blocks that each choose their own side, width and size.
            flex + self-* rather than a grid, because the point is that no two
            rows line up. */}
        <div className="mt-20 flex flex-col gap-20 sm:mt-28 sm:gap-28">
          {quotes.map((t, i) => {
            const p = PLACEMENT[t.name]
            // Alternating the avatar's side is what stops the eye settling
            // into a rhythm and reading the page as a list again.
            const mirrored = i % 2 === 1

            return (
              <figure
                key={t.name}
                className={`${p.align} ${p.width} ${p.indent} w-full`}
              >
                <div
                  className={`flex items-start gap-5 sm:gap-7 ${
                    mirrored ? 'flex-row-reverse text-right' : ''
                  }`}
                >
                  <Avatar
                    spec={t.avatar as AvatarSpec}
                    name={t.name}
                    className={`${p.avatar} shrink-0 rounded-full ring-1 ring-brand/25`}
                  />

                  <div className="min-w-0">
                    <blockquote
                      className={`${p.size} font-light text-white [text-wrap:balance]`}
                    >
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-4 text-sm font-medium uppercase tracking-[0.14em] text-brand">
                      {t.name}
                    </figcaption>
                  </div>
                </div>
              </figure>
            )
          })}
        </div>

        <div className="mt-24 border-t border-line pt-8 sm:mt-32">
          {/* Fine print only. The authenticity line moved to the header, so
              repeating it here would say the same thing twice on one page. */}
          <p className="text-xs leading-relaxed text-muted">
            Individual experience varies. {BRAND.trademark} is an
            over-the-counter drug — read the{' '}
            <Link href="/drug-facts" className="text-brand-light hover:underline">
              Drug Facts
            </Link>{' '}
            before use.
          </p>

          <Link
            href="/#buy"
            className="mt-8 inline-flex rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-black transition hover:bg-brand-light"
          >
            See the product
          </Link>
        </div>
      </div>
    </div>
  )
}
