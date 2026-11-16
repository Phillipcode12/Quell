export type Bar = { day: string; value: number; title: string }

/**
 * Below this share of the tallest bar, a bar is too short to hold its number
 * (the chart is 160px tall, so 14% is about 22px: one line of 10px text plus
 * padding). Shorter bars carry the number just above them instead.
 */
const LABEL_INSIDE_MIN_PCT = 14

/** The bar's height as a share of the chart, in percent. */
export function barHeightPct(value: number, peak: number): number {
  return value === 0 ? 2 : Math.max(4, (value / peak) * 100)
}

/**
 * A bar per day.
 *
 * Plain divs rather than a charting library: one series, the page is already a
 * server component, and a dependency to draw fourteen rectangles would ship
 * more JavaScript than the whole admin section.
 *
 * Generalised over the series rather than written twice. The height trick
 * below is the kind of thing that gets fixed in one copy and left broken in
 * the other, and it already went wrong once.
 *
 * **Each bar shows its count** (Phillip, 2026-11-16: "add a number inside the
 * bar so that we know how many were actually visiting that day"). It sits
 * inside the top of the bar when the bar is tall enough to hold it, and just
 * above the bar when it isn't, so a 1-visit day still reads "1" rather than
 * a number squeezed into a sliver. The hover title still gives the full day.
 */
export function DayBars({
  title,
  bars,
  tone,
  empty,
}: {
  title: string
  bars: Bar[]
  tone: string
  empty?: string
}) {
  const peak = Math.max(1, ...bars.map((b) => b.value))
  const allZero = bars.every((b) => b.value === 0)

  return (
    <div className="mt-4 rounded-xl border border-line bg-surface-2 p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-sm font-medium text-muted">{title}</h2>
        {allZero && empty && <p className="text-xs text-muted">{empty}</p>}
      </div>
      <div className="mt-5 flex gap-1.5">
        {bars.map((bar) => {
          const height = barHeightPct(bar.value, peak)
          const inside = bar.value > 0 && height >= LABEL_INSIDE_MIN_PCT
          return (
            <div key={bar.day} className="flex min-w-0 flex-1 flex-col items-center gap-2">
              {/*
                The fixed height lives on this wrapper, not on the row. A
                percentage height only resolves against a parent with a
                definite one, and a column flex item sized by its content is
                not definite — every bar rendered at zero pixels before this
                wrapper existed, which looked exactly like "no data".

                A column ending at the bottom, so a label above a short bar
                sits directly on top of it.
              */}
              <div className="flex h-40 w-full flex-col justify-end">
                {/* An all-zero chart already says so in its note; fourteen
                    "0"s would only repeat it. */}
                {!inside && !allZero && (
                  <span className="mb-0.5 text-center text-[10px] font-medium leading-none tabular-nums text-muted">
                    {bar.value}
                  </span>
                )}
                <div
                  className={`flex w-full justify-center rounded-sm ${bar.value === 0 ? 'bg-line' : tone}`}
                  style={{ height: `${height}%` }}
                  title={bar.title}
                >
                  {inside && (
                    <span className="pt-1 text-[10px] font-semibold leading-none tabular-nums text-black">
                      {bar.value}
                    </span>
                  )}
                </div>
              </div>
              <span className="text-[10px] tabular-nums text-muted">
                {bar.day.slice(8)}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
