/**
 * Quell logo.
 *
 * The eye mark below is the ACTUAL production artwork, not a recreation:
 * extracted as vector from page 5 of "Quell Packaging - Print Ready.pdf"
 * (Adobe Illustrator source) via pdftocairo, then cropped to the mark.
 *
 * It is two paths. The teal path carries the droplet and Q as evenodd
 * knockouts, so their interiors show whatever is behind the mark — which is
 * why it blends onto the black theme with no masking. The white path is the
 * keyline that separates the knockouts from the teal on the carton.
 *
 * Do not hand-edit the path data. To update, re-extract from the PDF.
 *
 * The print file's teal converts to #4ac1a8. The site renders the mark in the
 * brand token instead, so it matches the rest of the UI.
 */

const MARK_VIEWBOX = '38.46 24.86 169.61 117.14'

const MARK_TEAL =
  'M 138.132812 100.265625 C 142.015625 93.292969 140.5 82.742188 134.816406 76.183594 L 121.765625 61.425781 L 109.183594 76.183594 C 102.171875 84.273438 102.171875 97.644531 109.183594 105.734375 C 112.695312 109.777344 117.347656 111.800781 122 111.800781 C 124.542969 111.800781 127.085938 111.199219 129.441406 109.992188 L 119.925781 98.414062 L 117.851562 96.019531 L 117.730469 95.882812 C 115.429688 93.230469 115.332031 91.082031 117.632812 88.429688 L 121.871094 84.125 L 124.003906 86.546875 C 124.371094 86.96875 127.324219 89.789062 127.570312 90.289062 L 137.761719 100.800781 Z M 207.578125 87.738281 C 156.71875 26.566406 89.824219 26.566406 38.964844 87.738281 C 72.125 127.621094 112.105469 141.5 150.007812 129.375 L 137.6875 116.375 C 136.996094 116.808594 136.285156 117.210938 135.554688 117.582031 C 131.613281 119.574219 127.410156 120.507812 123.273438 120.496094 C 119.132812 120.507812 114.933594 119.574219 110.992188 117.582031 C 104.324219 114.195312 99.210938 108.125 97.136719 100.644531 C 94.625 91.519531 97.160156 81.277344 104.296875 74.140625 L 123.273438 54.976562 L 142.46875 74.175781 C 149.609375 81.3125 151.921875 91.519531 149.410156 100.644531 C 148.558594 103.71875 147.191406 106.554688 145.414062 109.0625 L 160.730469 125.222656 C 177.15625 117.738281 193.023438 105.242188 207.578125 87.738281 '

const MARK_KEYLINE =
  'M 136.019531 102.667969 C 142.058594 97.957031 138.222656 88.714844 133.113281 83.605469 L 121.589844 72.082031 L 110.066406 83.605469 C 103.761719 89.910156 103.761719 100.335938 110.066406 106.644531 C 113.222656 109.796875 117.40625 111.375 121.589844 111.375 C 123.875 111.375 126.160156 110.902344 128.277344 109.960938 L 119.722656 100.9375 L 117.859375 99.070312 L 117.746094 98.960938 C 115.679688 96.894531 115.679688 93.351562 117.746094 91.28125 L 121.503906 87.328125 L 125.332031 91.472656 C 125.660156 91.800781 125.996094 92.027344 126.261719 92.371094 Z M 201.535156 86.460938 C 146.105469 31.640625 106.699219 25.359375 55.839844 86.53125 C 89 126.414062 105.855469 141.1875 143.761719 129.058594 L 136.003906 118.117188 C 135.3125 118.546875 134.601562 118.953125 133.871094 119.324219 C 129.929688 121.3125 125.730469 122.246094 121.589844 122.238281 C 117.449219 122.246094 113.25 121.3125 109.308594 119.324219 C 102.644531 115.9375 97.527344 109.867188 95.453125 102.386719 C 92.941406 93.261719 95.253906 83.054688 102.390625 75.917969 L 121.765625 56.488281 L 140.785156 75.917969 C 147.925781 83.054688 150.238281 93.261719 147.726562 102.386719 C 146.875 105.460938 145.507812 108.296875 143.730469 110.804688 L 159.046875 126.964844 C 170.722656 116.066406 184.410156 106.082031 198.96875 88.578125 Z M 201.535156 86.460938 '

export function QuellMark({
  className = 'h-8 w-8',
  tealClassName = 'fill-brand',
  showKeyline = true,
}: {
  className?: string
  tealClassName?: string
  /** The hairline reads as noise at favicon sizes; drop it when tiny. */
  showKeyline?: boolean
}) {
  return (
    <svg
      viewBox={MARK_VIEWBOX}
      className={className}
      aria-hidden
      focusable="false"
    >
      {/* Paint order matters and is easy to get wrong: in the source art the
          white shape sits UNDERNEATH the lens, so it reads as a rim. Drawn on
          top it floods the mark instead. */}
      {showKeyline && (
        <path fillRule="evenodd" d={MARK_KEYLINE} fill="#ffffff" />
      )}
      <path fillRule="evenodd" d={MARK_TEAL} className={tealClassName} />
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
    sm: { mark: 'h-7 w-10', word: 'text-lg', tag: 'text-[7px] tracking-[0.35em]' },
    md: { mark: 'h-9 w-13', word: 'text-2xl', tag: 'text-[8px] tracking-[0.38em]' },
    lg: { mark: 'h-16 w-23', word: 'text-5xl', tag: 'text-xs tracking-[0.42em]' },
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
 * Horizontal lockup: mark on the left, name and tagline stacked to its right.
 *
 * `lg` is the same lockup at roughly 1.4x, for hero and CTA use. Every value
 * scales together so the spacing relationships stay identical to the header.
 */
const INLINE_SIZES = {
  md: {
    gap: 'gap-2.5 sm:gap-3.5',
    mark: 'h-9 w-13 sm:h-13 sm:w-19',
    word: 'text-[26px] sm:text-[38px]',
    tm: 'ml-1 mt-0.5 text-[11px] sm:text-[13px]',
    // Header hides the tagline on the narrowest screens so the lockup
    // doesn't crowd the cart and buy controls beside it.
    tagline: 'mt-2 hidden text-[9px] sm:block sm:text-[11px]',
  },
  lg: {
    gap: 'gap-3.5 sm:gap-5',
    mark: 'h-13 w-19 sm:h-18 sm:w-26',
    word: 'text-[38px] sm:text-[53px]',
    tm: 'ml-1.5 mt-1 text-[13px] sm:text-[18px]',
    // Nothing competes for space here, so the tagline always shows.
    tagline: 'mt-2.5 block text-[11px] sm:mt-3 sm:text-[15px]',
  },
} as const

export function QuellLogoInline({
  className = '',
  size = 'md',
}: {
  className?: string
  size?: keyof typeof INLINE_SIZES
}) {
  const s = INLINE_SIZES[size]

  return (
    <span
      className={`inline-flex items-center text-white ${s.gap} ${className}`}
    >
      {/* Sized to the artwork's 1.45:1 aspect so it doesn't letterbox. */}
      <QuellMark className={`shrink-0 ${s.mark}`} />
      <span className="flex flex-col leading-none">
        <span className="flex items-start">
          <span className={`font-semibold tracking-tight ${s.word}`}>
            Quell
          </span>
          <span className={`leading-none text-white/70 ${s.tm}`}>™</span>
        </span>
        <span
          className={`whitespace-nowrap font-medium uppercase tracking-[0.3em] text-brand ${s.tagline}`}
        >
          Quiet the Storm
        </span>
      </span>
    </span>
  )
}
