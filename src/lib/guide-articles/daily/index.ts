import type { Guide } from '@/lib/guide-types'
// imports:start
import { DAILY_20261111_A } from './2026-11-11-a'
import { DAILY_20261111_B } from './2026-11-11-b'
import { DAILY_20261111_C } from './2026-11-11-c'
import { DAILY_20261111_D } from './2026-11-11-d'
import { DAILY_20261111_E } from './2026-11-11-e'
import { DAILY_20261112_A } from './2026-11-12-a'
import { DAILY_20261112_B } from './2026-11-12-b'
import { DAILY_20261112_C } from './2026-11-12-c'
import { DAILY_20261112_D } from './2026-11-12-d'
import { DAILY_20261112_E } from './2026-11-12-e'
import { DAILY_20261113_A } from './2026-11-13-a'
import { DAILY_20261113_B } from './2026-11-13-b'
import { DAILY_20261113_C } from './2026-11-13-c'
import { DAILY_20261113_D } from './2026-11-13-d'
import { DAILY_20261113_E } from './2026-11-13-e'
import { DAILY_20261114_A } from './2026-11-14-a'
import { DAILY_20261114_B } from './2026-11-14-b'
import { DAILY_20261114_C } from './2026-11-14-c'
import { DAILY_20261114_D } from './2026-11-14-d'
import { DAILY_20261114_E } from './2026-11-14-e'
import { DAILY_20261115_A } from './2026-11-15-a'
import { DAILY_20261115_B } from './2026-11-15-b'
import { DAILY_20261115_C } from './2026-11-15-c'
import { DAILY_20261115_D } from './2026-11-15-d'
import { DAILY_20261115_E } from './2026-11-15-e'
import { DAILY_20261116_A } from './2026-11-16-a'
import { DAILY_20261116_B } from './2026-11-16-b'
import { DAILY_20261116_C } from './2026-11-16-c'
import { DAILY_20261116_D } from './2026-11-16-d'
import { DAILY_20261116_E } from './2026-11-16-e'
import { DAILY_20261117_A } from './2026-11-17-a'
import { DAILY_20261117_B } from './2026-11-17-b'
import { DAILY_20261117_C } from './2026-11-17-c'
import { DAILY_20261117_D } from './2026-11-17-d'
import { DAILY_20261117_E } from './2026-11-17-e'
import { DAILY_20261118_A } from './2026-11-18-a'
import { DAILY_20261118_B } from './2026-11-18-b'
import { DAILY_20261118_C } from './2026-11-18-c'
import { DAILY_20261118_D } from './2026-11-18-d'
import { DAILY_20261118_E } from './2026-11-18-e'
import { DAILY_20261119_A } from './2026-11-19-a'
import { DAILY_20261119_B } from './2026-11-19-b'
import { DAILY_20261119_C } from './2026-11-19-c'
import { DAILY_20261119_D } from './2026-11-19-d'
import { DAILY_20261119_E } from './2026-11-19-e'
import { DAILY_20261120_A } from './2026-11-20-a'
import { DAILY_20261120_B } from './2026-11-20-b'
import { DAILY_20261120_C } from './2026-11-20-c'
import { DAILY_20261120_D } from './2026-11-20-d'
import { DAILY_20261120_E } from './2026-11-20-e'
import { DAILY_20261121_A } from './2026-11-21-a'
import { DAILY_20261121_B } from './2026-11-21-b'
import { DAILY_20261121_C } from './2026-11-21-c'
import { DAILY_20261121_D } from './2026-11-21-d'
import { DAILY_20261121_E } from './2026-11-21-e'
import { DAILY_20261122_A } from './2026-11-22-a'
import { DAILY_20261122_B } from './2026-11-22-b'
import { DAILY_20261122_C } from './2026-11-22-c'
import { DAILY_20261122_D } from './2026-11-22-d'
import { DAILY_20261122_E } from './2026-11-22-e'
import { DAILY_20261123_A } from './2026-11-23-a'
import { DAILY_20261123_B } from './2026-11-23-b'
import { DAILY_20261123_C } from './2026-11-23-c'
import { DAILY_20261123_D } from './2026-11-23-d'
import { DAILY_20261123_E } from './2026-11-23-e'
import { DAILY_20261124_A } from './2026-11-24-a'
import { DAILY_20261124_B } from './2026-11-24-b'
import { DAILY_20261124_C } from './2026-11-24-c'
import { DAILY_20261124_D } from './2026-11-24-d'
import { DAILY_20261124_E } from './2026-11-24-e'
import { DAILY_20261125_A } from './2026-11-25-a'
import { DAILY_20261125_B } from './2026-11-25-b'
import { DAILY_20261125_C } from './2026-11-25-c'
import { DAILY_20261125_D } from './2026-11-25-d'
import { DAILY_20261125_E } from './2026-11-25-e'
// imports:end

/**
 * Guides written by the daily 11 a.m. job (set up 2026-11-11, Phillip:
 * "100 no matter what"). Each run writes `YYYY-MM-DD-a.ts`, `-b.ts` … next to
 * this file and registers them with `npx tsx scripts/guides-register.ts
 * YYYY-MM-DD`, which edits the two marked blocks. Do not edit them by hand.
 *
 * A slug is a live URL: never rename or delete a published one.
 */
export const DAILY_GUIDES: Guide[] = [
  // spread:start
  ...DAILY_20261111_A,
  ...DAILY_20261111_B,
  ...DAILY_20261111_C,
  ...DAILY_20261111_D,
  ...DAILY_20261111_E,
  ...DAILY_20261112_A,
  ...DAILY_20261112_B,
  ...DAILY_20261112_C,
  ...DAILY_20261112_D,
  ...DAILY_20261112_E,
  ...DAILY_20261113_A,
  ...DAILY_20261113_B,
  ...DAILY_20261113_C,
  ...DAILY_20261113_D,
  ...DAILY_20261113_E,
  ...DAILY_20261114_A,
  ...DAILY_20261114_B,
  ...DAILY_20261114_C,
  ...DAILY_20261114_D,
  ...DAILY_20261114_E,
  ...DAILY_20261115_A,
  ...DAILY_20261115_B,
  ...DAILY_20261115_C,
  ...DAILY_20261115_D,
  ...DAILY_20261115_E,
  ...DAILY_20261116_A,
  ...DAILY_20261116_B,
  ...DAILY_20261116_C,
  ...DAILY_20261116_D,
  ...DAILY_20261116_E,
  ...DAILY_20261117_A,
  ...DAILY_20261117_B,
  ...DAILY_20261117_C,
  ...DAILY_20261117_D,
  ...DAILY_20261117_E,
  ...DAILY_20261118_A,
  ...DAILY_20261118_B,
  ...DAILY_20261118_C,
  ...DAILY_20261118_D,
  ...DAILY_20261118_E,
  ...DAILY_20261119_A,
  ...DAILY_20261119_B,
  ...DAILY_20261119_C,
  ...DAILY_20261119_D,
  ...DAILY_20261119_E,
  ...DAILY_20261120_A,
  ...DAILY_20261120_B,
  ...DAILY_20261120_C,
  ...DAILY_20261120_D,
  ...DAILY_20261120_E,
  ...DAILY_20261121_A,
  ...DAILY_20261121_B,
  ...DAILY_20261121_C,
  ...DAILY_20261121_D,
  ...DAILY_20261121_E,
  ...DAILY_20261122_A,
  ...DAILY_20261122_B,
  ...DAILY_20261122_C,
  ...DAILY_20261122_D,
  ...DAILY_20261122_E,
  ...DAILY_20261123_A,
  ...DAILY_20261123_B,
  ...DAILY_20261123_C,
  ...DAILY_20261123_D,
  ...DAILY_20261123_E,
  ...DAILY_20261124_A,
  ...DAILY_20261124_B,
  ...DAILY_20261124_C,
  ...DAILY_20261124_D,
  ...DAILY_20261124_E,
  ...DAILY_20261125_A,
  ...DAILY_20261125_B,
  ...DAILY_20261125_C,
  ...DAILY_20261125_D,
  ...DAILY_20261125_E,
  // spread:end
]
