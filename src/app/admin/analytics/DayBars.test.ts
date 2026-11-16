import { describe, expect, it } from 'vitest'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { DayBars, barHeightPct } from './DayBars'

const bar = (day: string, value: number) => ({ day, value, title: `${day}: ${value}` })

function render(values: number[]) {
  return renderToStaticMarkup(
    createElement(DayBars, {
      title: 'Visits per day',
      tone: 'bg-brand',
      bars: values.map((v, i) => bar(`2026-11-${String(i + 1).padStart(2, '0')}`, v)),
    }),
  )
}

/** The count shown for each bar, in order, and where it sits. */
function labels(html: string) {
  const out: { value: string; inside: boolean }[] = []
  for (const m of html.matchAll(/<span class="([^"]*)">(\d+)<\/span>/g)) {
    const cls = m[1]
    // The day-of-month labels under the bars use plain text-muted, no font weight.
    if (!cls.includes('font-')) continue
    out.push({ value: m[2], inside: cls.includes('text-black') })
  }
  return out
}

describe('DayBars counts', () => {
  it('shows every day’s number', () => {
    expect(labels(render([12, 0, 3, 40])).map((l) => l.value)).toEqual(['12', '0', '3', '40'])
  })

  it('puts the number inside a tall bar and above a short one', () => {
    // Peak 40: 12 is 30% (inside), 3 is 7.5% (too short, above), 0 is above.
    const placed = labels(render([12, 0, 3, 40]))
    expect(placed).toEqual([
      { value: '12', inside: true },
      { value: '0', inside: false },
      { value: '3', inside: false },
      { value: '40', inside: true },
    ])
  })

  it('keeps a single-visit day readable when it is the only one', () => {
    // 1 is the peak here, so its bar is full height and holds its number.
    expect(labels(render([0, 1, 0]))).toContainEqual({ value: '1', inside: true })
  })

  it('leaves an all-zero chart without a row of zeros', () => {
    expect(labels(render([0, 0, 0]))).toEqual([])
  })

  it('keeps the bar heights it had before', () => {
    expect(barHeightPct(0, 10)).toBe(2)
    expect(barHeightPct(10, 10)).toBe(100)
    expect(barHeightPct(1, 1000)).toBe(4)
  })
})
