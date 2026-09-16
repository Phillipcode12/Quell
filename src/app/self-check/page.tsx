import type { Metadata } from 'next'
import { SelfCheck } from '@/components/SelfCheck'
import { BRAND } from '@/lib/product-content'

export const metadata: Metadata = {
  title: 'Dry eye self-check',
  description: `Eight questions, about ninety seconds. Get a symptom score and find out whether your answers fit the pattern of a tear film that evaporates too quickly. From the makers of ${BRAND.trademark}.`,
}

/**
 * Dynamic because the Turnstile site key is read at request time, the same as
 * `/register` and `/login`.
 *
 * **Approved by Dr. Rynerson on 2026-09-16** and in the sitemap from that date.
 * Every word shown lives in `lib/self-check.ts`, which is what he reviewed —
 * so a change to the questions, the bands or the pattern text is a change to
 * approved regulated copy and needs him again, not just a commit.
 *
 * Not in the header nav yet: the mobile header was measured and fitted at 375px
 * (§21), and adding an item is a layout decision rather than a content one.
 */
export const dynamic = 'force-dynamic'

export default function SelfCheckPage() {
  return <SelfCheck siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} />
}
