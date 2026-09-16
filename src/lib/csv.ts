/**
 * CSV writing.
 *
 * ### Two escaping problems, and they are different
 *
 * **RFC 4180 quoting** stops a comma or a newline inside a value from becoming
 * a new column or a new row. That is the obvious one.
 *
 * **Formula injection** is the one that gets missed. A spreadsheet treats a
 * cell starting with `=`, `+`, `-`, `@`, tab or carriage return as a formula,
 * so a campaign name like `=HYPERLINK("http://evil","click")` becomes a live
 * link the moment someone opens the export. The values here come from a public
 * form — campaign tags arrive in a URL anyone can craft — so this is reachable,
 * not theoretical. Prefixing with an apostrophe makes the cell text; Excel and
 * Sheets both strip it on display.
 */

const RISKY_PREFIX = /^[=+\-@\t\r]/

function cell(value: unknown): string {
  if (value === null || value === undefined) return ''

  let text = String(value)
  if (RISKY_PREFIX.test(text)) text = `'${text}`

  // Quote when the value contains a delimiter, a quote or a line break; escape
  // embedded quotes by doubling them.
  if (/[",\r\n]/.test(text)) {
    return `"${text.replaceAll('"', '""')}"`
  }
  return text
}

/**
 * Builds a CSV from headers and rows.
 *
 * CRLF line endings and a UTF-8 BOM: without the BOM, Excel on Windows reads
 * the file as the system codepage and mangles any non-ASCII character in a
 * name or campaign label.
 */
export function toCsv(headers: string[], rows: unknown[][]): string {
  const lines = [
    headers.map(cell).join(','),
    ...rows.map((row) => row.map(cell).join(',')),
  ]
  return `﻿${lines.join('\r\n')}\r\n`
}

/** `quell-subscribers-2026-09-16.csv` */
export function csvFilename(prefix: string, now = new Date()): string {
  return `${prefix}-${now.toISOString().slice(0, 10)}.csv`
}
