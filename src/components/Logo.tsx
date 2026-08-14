/**
 * Quell logo, rebuilt as inline SVG. The supplied logo PNG sits on a light
 * background with a glow and a white-filled wordmark, so it can't be dropped
 * onto the black theme or background-removed — hence a vector rebuild.
 */

// Geometry traced from the carton (public/images/product-box-bottle-white.jpg),
// which is the definitive rendering. Lens is 1.61:1.
const MASK_ID = 'quell-mark-knockout'
const LENS = 'M0 31 Q25 0 50 0 Q75 0 100 31 Q75 62 50 62 Q25 62 0 31 Z'

// Band widths and radii below are the measured carton values converted to this
// viewBox. The stroke straddles the path, so path radii are the outer radius
// minus half the band width.
const BAND = 5.7
const Q_BAND = 6

// Teardrop: point at y≈11, bottom circle centred (49.5, 44.6), path radius 14.6.
const DROPLET =
  'M49.5 11 C53 23 64.1 34 64.1 44.6 A14.6 14.6 0 1 1 34.9 44.6 C34.9 34 46 23 49.5 11 Z'

// The Q sits right of centre and is tangent to the teardrop's right edge.
const Q = { cx: 58, cy: 42.2, r: 6.4 }
const TAIL = 'M62.5 46.6 L79 60'

/**
 * Quell eye mark.
 *
 * The construction is the important part, and it is counter-intuitive: on the
 * carton the droplet and Q are NOT white shapes. They are knocked out to the
 * background colour, with the teal lens showing through their interiors. A
 * pixel scan across the carton reads teal → background → teal → background →
 * teal. Only the "Quell" wordmark is solid white.
 *
 * Implemented as a mask so the cut-outs show whatever the mark is sitting on,
 * which is what makes it work on black, on the surface panels, and on white.
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
      viewBox="0 0 100 62"
      className={className}
      aria-hidden
      focusable="false"
    >
      <defs>
        {/* Black in a mask = removed. Stroking the droplet and Q here cuts
            those bands out of the lens so the page background shows through —
            which is how the carton reads: the background fills the mark, and
            only the wordmark is solid white. */}
        <mask id={MASK_ID} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="62">
          <rect x="0" y="0" width="100" height="62" fill="#fff" />
          <g fill="none" stroke="#000" strokeLinejoin="miter" strokeMiterlimit="8">
            <path d={DROPLET} strokeWidth={BAND} />
            <circle cx={Q.cx} cy={Q.cy} r={Q.r} strokeWidth={Q_BAND} />
            <path d={TAIL} strokeWidth={Q_BAND} strokeLinecap="butt" />
          </g>
        </mask>
      </defs>

      <path d={LENS} className={tealClassName} mask={`url(#${MASK_ID})`} />
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
