/**
 * `compact` shrinks the whole banner for legal pages, where a full-height
 * display header oversells a reference document. Opt-in, so About and
 * Drug Facts keep the original size.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  compact = false,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  compact?: boolean
}) {
  return (
    <section
      className={`relative overflow-hidden border-b border-line text-white ${
        compact ? 'py-9' : 'py-16'
      }`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(700px 320px at 25% 10%, rgba(0,167,181,0.25), transparent 65%)',
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6">
        <span
          className={`font-semibold uppercase tracking-[0.2em] text-brand ${
            compact ? 'text-xs' : 'text-sm'
          }`}
        >
          {eyebrow}
        </span>
        <h1
          className={`mt-3 font-semibold tracking-tight ${
            compact ? 'text-2xl' : 'text-4xl sm:text-5xl'
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-3 max-w-2xl leading-relaxed text-white/70 ${
              compact ? 'text-xs' : 'mt-4 text-lg'
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
