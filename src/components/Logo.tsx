/**
 * Quell logo, rebuilt as inline SVG.
 *
 * The supplied logo PNG sits on a grey gradient with a glow, so it can't be
 * placed on the black theme directly. This redraws the eye mark as vector so it
 * scales, stays crisp, and inherits theme colors.
 */

export function QuellMark({
  className = 'h-8 w-8',
  tealClassName = 'fill-brand',
}: {
  className?: string
  tealClassName?: string
}) {
  return (
    <svg viewBox="0 0 64 40" className={className} aria-hidden focusable="false">
      {/* Eye / lens shape */}
      <path
        d="M1.5 20C12 4.5 52 4.5 62.5 20C52 35.5 12 35.5 1.5 20Z"
        className={tealClassName}
      />
      {/* Droplet outline */}
      <path
        d="M32 7.5c0 0 11 12.2 11 17.4a11 11 0 1 1-22 0C21 19.7 32 7.5 32 7.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      {/* Q bowl */}
      <circle
        cx="31"
        cy="23.5"
        r="7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      {/* Q tail */}
      <path
        d="M33.5 27.5 42 35.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
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

/** Compact horizontal lockup for the site header. */
export function QuellLogoInline({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 text-white ${className}`}>
      <QuellMark className="h-7 w-11 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="flex items-start">
          <span className="text-xl font-semibold tracking-tight">Quell</span>
          <span className="ml-0.5 text-[9px] leading-none text-white/70">™</span>
        </span>
        <span className="mt-1 text-[7px] font-medium uppercase tracking-[0.3em] text-brand">
          Quiet the Storm
        </span>
      </span>
    </span>
  )
}
