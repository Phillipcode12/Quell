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
  // spread:end
]
