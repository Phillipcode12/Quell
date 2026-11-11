import type { Guide } from '@/lib/guide-types'
// imports:start
import { DAILY_20261111_A } from './2026-11-11-a'
import { DAILY_20261111_B } from './2026-11-11-b'
import { DAILY_20261111_C } from './2026-11-11-c'
import { DAILY_20261111_D } from './2026-11-11-d'
import { DAILY_20261111_E } from './2026-11-11-e'
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
  // spread:end
]
