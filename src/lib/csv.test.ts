import { describe, expect, it } from 'vitest'
import { csvFilename, toCsv } from './csv'

describe('escaping that keeps the columns lined up', () => {
  it('quotes values containing a comma', () => {
    const csv = toCsv(['a', 'b'], [['one, two', 'three']])
    expect(csv).toContain('"one, two",three')
  })

  it('doubles embedded quotes', () => {
    const csv = toCsv(['a'], [['she said "hello"']])
    expect(csv).toContain('"she said ""hello"""')
  })

  it('quotes values containing newlines', () => {
    // Otherwise one value becomes two rows and every column after it shifts.
    const csv = toCsv(['a', 'b'], [['line one\nline two', 'x']])
    expect(csv).toContain('"line one\nline two",x')
  })

  it('writes empty cells for null and undefined', () => {
    // "null" and "undefined" as literal text in a spreadsheet is worse than a
    // blank, because it looks like data.
    const csv = toCsv(['a', 'b', 'c'], [[null, undefined, 0]])
    expect(csv.split('\r\n')[1]).toBe(',,0')
  })
})

describe('formula injection', () => {
  /**
   * The values in this export come from a public form — campaign tags arrive
   * in a URL anyone can craft — so a cell that a spreadsheet executes is
   * reachable rather than theoretical.
   */
  it('neutralises every character a spreadsheet treats as a formula', () => {
    for (const dangerous of [
      '=HYPERLINK("http://evil","click")',
      '+1+1',
      '-1+1',
      '@SUM(A1:A9)',
      '\tstartswithtab',
      '\rstartswithcr',
    ]) {
      const csv = toCsv(['x'], [[dangerous]])
      const line = csv.split('\r\n')[1]
      expect(line.startsWith("'") || line.startsWith('"\''), dangerous).toBe(true)
    }
  })

  it('leaves ordinary values alone', () => {
    const csv = toCsv(['x'], [['facebook'], ['dry-eye-launch'], ['18']])
    expect(csv).toContain('facebook')
    expect(csv).not.toContain("'facebook")
  })

  it('still escapes a value that is both dangerous and contains a comma', () => {
    const csv = toCsv(['x'], [['=A1,B1']])
    // Prefixed first, then quoted, so neither protection cancels the other.
    expect(csv).toContain(`"'=A1,B1"`)
  })
})

describe('the file itself', () => {
  it('starts with a UTF-8 BOM so Excel reads it correctly', () => {
    // Without this, Excel on Windows uses the system codepage and mangles any
    // accented character in a name or campaign label.
    expect(toCsv(['a'], [])).toMatch(/^﻿/)
  })

  it('uses CRLF line endings and ends with one', () => {
    const csv = toCsv(['a', 'b'], [['1', '2']])
    expect(csv).toBe('﻿a,b\r\n1,2\r\n')
  })

  it('names the file with the date it was taken', () => {
    expect(csvFilename('quell-subscribers', new Date('2026-09-16T09:12:00Z'))).toBe(
      'quell-subscribers-2026-09-16.csv',
    )
  })
})
