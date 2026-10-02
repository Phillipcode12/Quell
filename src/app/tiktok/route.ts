import { NextResponse } from 'next/server'
import { channelDestination } from '@/lib/channel-links'
import { appUrl } from '@/lib/site'

/**
 * `quelldrop.com/tiktok` → the homepage, tagged for the Campaigns report.
 *
 * ### 307, not 308, and this matters
 *
 * A permanent redirect is cached by browsers more or less forever. The tags on
 * the far side are marketing copy that will be edited — a new campaign name, a
 * different medium — and anyone who had visited once would keep being sent to
 * the old destination with no way to clear it but their own browser settings.
 * A temporary redirect costs nothing here and stays changeable.
 *
 * `no-store` for the same reason, one layer up: nothing in between should hold
 * on to this either.
 *
 * ### Adding another channel
 *
 * Add it to `CHANNELS` in `lib/channel-links.ts` and copy this file to
 * `src/app/<channel>/route.ts`. Not a catch-all `src/app/[channel]/route.ts`,
 * which at the root would shadow every real page on the site.
 */

export const dynamic = 'force-dynamic'

export function GET(request: Request) {
  const incoming = new URL(request.url).searchParams
  const destination = new URL(
    channelDestination('tiktok', incoming),
    appUrl(),
  )

  return NextResponse.redirect(destination, {
    status: 307,
    headers: { 'cache-control': 'no-store' },
  })
}
