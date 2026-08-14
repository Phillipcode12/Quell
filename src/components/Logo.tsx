/**
 * Quell logo, rebuilt as inline SVG.
 *
 * The supplied logo PNG sits on a grey gradient with a glow, so it can't be
 * placed on the black theme directly. This redraws the eye mark as vector so it
 * scales, stays crisp, and inherits theme colors.
 */

/**
 * Quell eye mark, traced from the print artwork.
 *
 * Construction matters: the droplet and Q are thick WHITE BANDS drawn over the
 * teal lens, so the shapes read as teal-filled with white outlines rather than
 * white-filled. The Q's tail deliberately breaks out past the lens' lower-right
 * edge, which is why the viewBox extends beyond the eye itself.
 *
 * `currentColor` drives the band colour, so the mark inverts correctly by
 * setting a text colour on the parent.
 */
export function QuellMark({
  className = 'h-8 w-8',
  tealClassName = 'fill-brand',
}: {
  className?: string
  tealClassName?: string
}) {
  return (
    <svg
      viewBox="0 0 100 56"
      className={className}
      aria-hidden
      focusable="false"
    >
      {/* Lens: sharp points left and right, symmetric curves top and bottom. */}
      <path
        d="M0 26.8 Q25 0 50 0 Q75 0 100 26.8 Q75 53.4 50 53.4 Q25 53.4 0 26.8 Z"
        className={tealClassName}
      />
      {/* Teardrop band — narrow through the shoulders, flaring late into the
          bottom circle, with a sharp mitred point at the top. */}
      <path
        d="M49.4 5.6 C53.2 16 65.4 26.4 65.4 33.4 A16 16 0 1 1 33.4 33.4 C33.4 26.4 45.6 16 49.4 5.6 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="4.1"
        strokeLinejoin="miter"
        strokeMiterlimit="8"
      />
      {/* Q bowl: smaller than the teardrop's circle and offset right, so a ring
          of teal stays visible between the two bands. */}
      <circle
        cx="50.6"
        cy="35.6"
        r="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="4.1"
      />
      {/* Q tail, breaking out through the lens edge at the lower right. */}
      <path
        d="M55.8 40.4 L71 51.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="4.6"
      />
    </svg>
  )
}

export function QuellLogo({
  className = '',
  showTagline = true,
  size = 'md',
}: {
  className?: string
  showTagline?: boolean
  size?: 'sm' | 'md' | 'lg'
}) {
  const marks = {
    sm: { mark: 'h-6 w-10', word: 'text-lg', tag: 'text-[7px] tracking-[0.35em]' },
    md: { mark: 'h-8 w-13', word: 'text-2xl', tag: 'text-[8px] tracking-[0.38em]' },
    lg: { mark: 'h-14 w-24', word: 'text-5xl', tag: 'text-xs tracking-[0.42em]' },
  }[size]

  return (
    <span className={`inline-flex flex-col items-center text-white ${className}`}>
      <QuellMark className={marks.mark} />
      <span className="mt-1 flex items-start leading-none">
        <span className={`${marks.word} font-semibold tracking-tight`}>Quell</span>
        <span className="ml-0.5 mt-0.5 text-[0.5em] leading-none text-white/70">
          ™
        </span>
      </span>
      {showTagline && (
        <span className={`${marks.tag} mt-1 font-medium uppercase text-brand`}>
          Quiet the Storm
        </span>
      )}
    </span>
  )
}

/**
 * Horizontal lockup for the site header. Sized up on tablet and desktop; kept
 * moderate on phones so it doesn't crowd the cart and buy controls beside it.
 */
export function QuellLogoInline({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-white sm:gap-3.5 ${className}`}
    >
      <QuellMark className="h-9 w-14 shrink-0 sm:h-13 sm:w-21" />
      <span className="flex flex-col leading-none">
        <span className="flex items-start">
          <span className="text-[26px] font-semibold tracking-tight sm:text-[38px]">
            Quell
          </span>
          <span className="ml-1 mt-0.5 text-[11px] leading-none text-white/70 sm:text-[13px]">
            ™
          </span>
        </span>
        {/* Hidden on the narrowest screens so the lockup stays compact. */}
        <span className="mt-2 hidden whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.3em] text-brand sm:block sm:text-[11px]">
          Quiet the Storm
        </span>
      </span>
    </span>
  )
}
