import type { Metadata } from 'next'
import { SelfCheck } from '@/components/SelfCheck'
import { BRAND } from '@/lib/product-content'

export const metadata: Metadata = {
  title: 'Dry eye self-check',
  description: `Eight questions, about ninety seconds. Get a symptom score and find out whether your answers fit the pattern of a tear film that evaporates too quickly. From the makers of ${BRAND.trademark}.`,
}

/**
 * **Approved by Dr. Rynerson on 2026-09-16** and in the sitemap from that date.
 * Every word shown lives in `lib/self-check.ts`, which is what he reviewed —
 * so a change to the questions, the bands or the pattern text is a change to
 * approved regulated copy and needs him again, not just a commit.
 *
 * Not in the header nav yet: the mobile header was measured and fitted at 375px
 * (§21), and adding an item is a layout decision rather than a content one.
 *
 * ### This page used to be pinned `force-dynamic`, on a false premise
 *
 * The note said it was dynamic "because the Turnstile site key is read at
 * request time, the same as /register and /login". **`NEXT_PUBLIC_` variables
 * are not read at request time** — Next.js inlines them at build, which is the
 * whole reason they are safe to ship to a browser. So the pin bought nothing
 * and cost the page any chance of being cached.
 *
 * That mattered more than it looks: this is a real search landing page. Someone
 * typing "dry eye test" or "dry eye quiz" has symptoms and no brand in mind,
 * which is better intent than most of what the city pages chase.
 *
 * Changing the site key still needs a redeploy. That was already true — the key
 * is baked into the client bundle either way — so nothing is lost. `/register`
 * and `/login` stay dynamic for a different and real reason: they read the
 * session.
 */

export default function SelfCheckPage() {
  return <SelfCheck siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} />
}
