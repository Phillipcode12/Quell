/**
 * Before/after tear film diagram.
 *
 * Replaces a photograph of the carton's side panel. The original was text and
 * line art printed on cardboard — tall, unreadable on small screens, and
 * invisible to screen readers. Drawn as SVG it scales, matches the theme, and
 * the labels are real text.
 */

function Panel({
  variant,
}: {
  variant: 'before' | 'after'
}) {
  const isAfter = variant === 'after'

  return (
    <svg
      viewBox="0 0 320 150"
      className="h-auto w-full"
      role="img"
      aria-label={
        isAfter
          ? 'After using Quell: a thick, continuous oil layer holds the water layer in place'
          : 'Before: a thin, broken oil layer lets the water layer evaporate'
      }
    >
      {/* Evaporating moisture — heavy before, minimal after */}
      {(isAfter ? [110, 210] : [60, 110, 160, 210, 260]).map((x, i) => (
        <g
          key={x}
          stroke={isAfter ? 'var(--brand-dark)' : 'var(--muted)'}
          strokeWidth="2"
          strokeLinecap="round"
          opacity={isAfter ? 0.35 : 0.9}
        >
          <path d={`M${x} ${isAfter ? 34 : 20 + (i % 2) * 6} L${x} 62`} />
          <path
            d={`M${x - 5} ${isAfter ? 40 : 26 + (i % 2) * 6} L${x} ${
              isAfter ? 33 : 19 + (i % 2) * 6
            } L${x + 5} ${isAfter ? 40 : 26 + (i % 2) * 6}`}
            fill="none"
          />
        </g>
      ))}

      {/* Oil (meibum) layer — broken and thin, or continuous and thick */}
      {isAfter ? (
        <>
          <path
            d="M10 78 q20 -9 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0"
            fill="none"
            stroke="var(--brand)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M10 90 q20 -9 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0"
            fill="none"
            stroke="var(--brand)"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.55"
          />
        </>
      ) : (
        <path
          d="M10 82 q18 -8 36 0 t36 0 t36 0 t36 0 t36 0 t36 0 t36 0"
          fill="none"
          stroke="var(--muted)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="14 12"
          opacity="0.8"
        />
      )}

      {/* Water (aqueous) layer beneath */}
      {(isAfter
        ? [30, 62, 94, 126, 158, 190, 222, 254, 286]
        : [46, 110, 174, 238]
      ).map((x) => (
        <circle
          key={x}
          cx={x}
          cy={isAfter ? 116 : 118}
          r={isAfter ? 7 : 5}
          fill="var(--brand)"
          opacity={isAfter ? 0.9 : 0.4}
        />
      ))}

      <line
        x1="10"
        y1="138"
        x2="310"
        y2="138"
        stroke="var(--border)"
        strokeWidth="2"
      />
    </svg>
  )
}

export function TearFilmDiagram({
  beforeLabel,
  afterLabel,
}: {
  beforeLabel: string
  afterLabel: string
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <figure className="rounded-2xl border border-line bg-surface-2 p-6">
        <figcaption className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Before
        </figcaption>
        <div className="mt-4">
          <Panel variant="before" />
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted">{beforeLabel}</p>
      </figure>

      <figure className="rounded-2xl border border-brand/40 bg-brand/10 p-6">
        <figcaption className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          After
        </figcaption>
        <div className="mt-4">
          <Panel variant="after" />
        </div>
        <p className="mt-4 text-sm leading-relaxed text-white">{afterLabel}</p>
      </figure>
    </div>
  )
}
