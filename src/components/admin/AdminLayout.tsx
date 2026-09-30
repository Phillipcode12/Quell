import Link from 'next/link'
import type { ReactNode } from 'react'

/**
 * The shared furniture every admin tab is built from.
 *
 * It exists because the tabs had drifted: different page widths, two different
 * page headers, one tab rendering cards where the others rendered tables, and a
 * "Download CSV" link that only three of them had. That is fine to read one tab
 * at a time and annoying to use as a set -- which is what it actually is.
 *
 * **The rule these impose: every tab is a real `<table>` with a CSV.** Both
 * matter for getting the data into a spreadsheet, and for different reasons. A
 * table selects and pastes into Excel as cells, because browsers put HTML on
 * the clipboard and Excel reads it; a card list pastes as one mangled column.
 * The CSV is the reliable path for the whole list rather than the page's worth
 * that happens to be on screen.
 */

/** Consistent page shell: one width for every tab. */
export function AdminPage({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-6xl px-6 py-10">{children}</div>
}

/**
 * Page title, with the way back to the shop.
 *
 * `subtitle` is for the signed-in address and anything else about the viewer
 * rather than about the data -- the data gets described in the toolbar.
 */
export function AdminHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-white">
          {title}
        </h1>
        {subtitle && <p className="mt-1.5 text-sm text-muted">{subtitle}</p>}
      </div>
      <Link
        href="/"
        className="rounded-md border border-line px-3 py-1.5 text-sm text-muted transition hover:border-brand hover:text-white"
      >
        Back to site
      </Link>
    </div>
  )
}

export type Stat = { label: string; value: ReactNode }

/**
 * The row of figures above a table.
 *
 * Columns come from the count so four stats do not leave a gap where a fifth
 * would go, which is what a hardcoded `sm:grid-cols-4` did on the tabs that
 * only had three.
 */
export function AdminStats({ stats }: { stats: Stat[] }) {
  const columns =
    stats.length >= 4
      ? 'sm:grid-cols-2 lg:grid-cols-4'
      : stats.length === 3
        ? 'sm:grid-cols-3'
        : 'sm:grid-cols-2'

  return (
    <dl className={`mt-8 grid gap-4 ${columns}`}>
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-line bg-surface p-5"
        >
          <dt className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
            {stat.label}
          </dt>
          <dd className="mt-2 text-2xl font-semibold tabular-nums text-white">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}

/**
 * What the table below is, and the way to get all of it.
 *
 * `exportHref` is not optional by accident -- every tab has one now, and making
 * it required is what keeps the next tab from quietly shipping without.
 */
export function AdminToolbar({
  description,
  exportHref,
  children,
}: {
  description: string
  exportHref: string
  children?: ReactNode
}) {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
      <p className="max-w-2xl text-sm leading-relaxed text-muted">
        {description}
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {children}
        <a
          href={exportHref}
          className="rounded-lg border border-line px-4 py-2.5 text-sm font-medium text-white transition hover:border-brand hover:bg-brand/10"
        >
          Download CSV
        </a>
      </div>
    </div>
  )
}

export type Column<T> = {
  header: string
  /** Right-align numbers so columns of figures line up. */
  align?: 'left' | 'right'
  cell: (row: T) => ReactNode
}

/**
 * One table, used by every tab.
 *
 * Generic rather than copied per page: the point of this refactor is that the
 * tabs cannot drift apart again, and they cannot if there is only one set of
 * `<th>` classes in the codebase.
 */
export function DataTable<T>({
  columns,
  rows,
  rowKey,
  empty,
  minWidth = '56rem',
}: {
  columns: Column<T>[]
  rows: T[]
  rowKey: (row: T) => string
  empty: string
  minWidth?: string
}) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-line">
      <table
        className="w-full text-left text-sm"
        style={{ minWidth }}
      >
        <thead className="border-b border-line bg-surface-2 text-muted">
          <tr>
            {columns.map((column) => (
              <th
                key={column.header}
                className={`px-4 py-3 font-medium ${
                  column.align === 'right' ? 'text-right' : ''
                }`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td className="px-4 py-4 text-muted" colSpan={columns.length}>
                {empty}
              </td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr key={rowKey(row)} className="border-b border-line last:border-0">
                {columns.map((column) => (
                  <td
                    key={column.header}
                    className={`px-4 py-3 ${
                      column.align === 'right'
                        ? 'text-right tabular-nums'
                        : ''
                    }`}
                  >
                    {column.cell(row)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

/**
 * Said under a truncated table, so "showing 500" can never be mistaken for
 * "there are 500".
 */
export function TruncationNote({
  shown,
  total,
}: {
  shown: number
  total: number
}) {
  if (total <= shown) return null
  return (
    <p className="mt-3 text-xs text-muted">
      Showing the most recent {shown} of {total}. The CSV contains all of them.
    </p>
  )
}

/**
 * Dates render as `YYYY-MM-DD HH:MM` everywhere.
 *
 * Not `toLocaleString()`, which the Orders tab used: that formats on the server
 * in whatever timezone the serverless region happens to be, so the same row
 * could read differently from one request to the next. A fixed format is also
 * the one a spreadsheet will parse as a date rather than as text.
 */
export function formatAdminDate(date: Date): string {
  return date.toISOString().slice(0, 16).replace('T', ' ')
}

/** A small neutral chip, for statuses and source labels. */
export function Chip({
  children,
  tone = 'neutral',
}: {
  children: ReactNode
  tone?: 'neutral' | 'brand' | 'good' | 'warn' | 'bad'
}) {
  const tones = {
    neutral: 'border-line bg-surface-2 text-muted',
    brand: 'border-brand/40 bg-brand/10 text-brand-light',
    good: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
    warn: 'border-amber-500/40 bg-amber-500/10 text-amber-200',
    bad: 'border-red-500/40 bg-red-500/10 text-red-300',
  }
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  )
}
