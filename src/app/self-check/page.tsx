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
 * **Not in the nav and not in the sitemap yet.** The wording is regulated copy
 * awaiting Dr. Rynerson's review, so until that is signed off this is reachable
 * only by typing the URL.
 */
export const dynamic = 'force-dynamic'

export default function SelfCheckPage() {
  return <SelfCheck siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} />
}
