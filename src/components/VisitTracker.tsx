'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { captureCampaign } from '@/lib/campaign-client'
import type { CampaignTags } from '@/lib/campaign'

/**
 * Tells /api/track that a visit is happening, and that it is still happening.
 *
 * It reports the path, and **only the path** — no query string, ever. The shop
 * still counts visits rather than following what anyone reads: the server
 * stores this on create only, so what lands in the database is the page a visit
 * *arrived* on and not a trail through the site.
 *
 * That one field is the difference between knowing a visit came from Google and
 * knowing which of 1,451 generated pages earned it, which is the only question
 * worth asking of them.
 *
 * Two rules shaped the rest:
 *
 * **No cookie.** The id lives in sessionStorage, so it is per-tab and dies when
 * the tab closes. It cannot follow anyone between visits, which is what lets
 * the privacy policy keep saying we set no third-party cookies. Storage can
 * throw outright in a locked-down browser, so every access is guarded and the
 * tracker simply does nothing when it fails.
 *
 * **Never get in the visitor's way.** Reporting is fire-and-forget with
 * keepalive, errors are swallowed, and nothing here can block a render or a
 * navigation. A missed visit is always preferable to a broken page.
 */

const STORAGE_KEY = 'quell.vid'

/**
 * **There is deliberately no heartbeat any more. Do not add one back.**
 *
 * This component used to re-report every 60 seconds so the admin could show a
 * "visitors here now" count. On 2026-10-19 that took the whole shop offline.
 *
 * Neon's free tier suspends the database after about five minutes idle, which
 * is how a month's compute allowance is meant to last a month. A write every
 * sixty seconds means it **never** suspends: one browser tab left open on the
 * site bills compute around the clock. The quota ran out, every database read
 * started failing, and `/` and `/cart` returned 500 — for a live-visitor
 * counter on a shop taking about thirteen visits a week.
 *
 * A visit is still recorded on arrival and on each client-side navigation, so
 * the visit counts, sources and landing pages are unaffected. What is gone is
 * only the resolution of `lastSeenAt` between page loads, which makes the
 * admin's "here now" figure mean "loaded a page in the last five minutes"
 * rather than "has a tab open". That is a fair description of a visitor and it
 * costs nothing.
 */

function visitId(): string | null {
  try {
    const existing = sessionStorage.getItem(STORAGE_KEY)
    if (existing) return existing
    const id = crypto.randomUUID()
    sessionStorage.setItem(STORAGE_KEY, id)
    return id
  } catch {
    // Private mode, blocked storage, or a browser that throws on access.
    return null
  }
}

function report(id: string, campaign: CampaignTags, path: string) {
  try {
    void fetch('/api/track', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      // Campaign tags are sent on every report, not only the first. The server
      // writes them on create only — the same rule that protects `source` —
      // so this costs nothing and means the tags still land if the very first
      // report is the one that got dropped.
      //
      // `referrer` has to travel in the body, and this is the whole reason
      // the source numbers were wrong for the first month. The server used
      // to read the `Referer` header of *this* request, which the browser
      // sets to the page the fetch was made from — always our own site. It
      // was recording us, `referrerHost` correctly stripped it as internal,
      // and every visitor on record came out "direct".
      // `document.referrer` is the only place the arriving referrer
      // survives, and only the client can read it.
      //
      // Sent on every report for the same reason as the tags: it does not
      // change on client-side navigation, and the server ignores it after
      // create.
      // `path` travels with every report and the server keeps the first, the
      // same create-only rule as `source` and the campaign tags -- so a visit
      // is filed under where it arrived, not wherever it wandered to.
      body: JSON.stringify({
        visitId: id,
        referrer: document.referrer,
        path,
        ...campaign,
      }),
      keepalive: true,
    }).catch(() => {})
  } catch {
    // Nothing to do, and nothing worth telling the visitor.
  }
}

export function VisitTracker() {
  const pathname = usePathname()

  /**
   * The last path we reported on.
   *
   * React runs effects twice in development and a re-render can fire this one
   * again in any environment. The upsert makes a duplicate harmless to the
   * counts, but this keeps it from being two requests where one will do.
   */
  const reported = useRef<string | null>(null)

  useEffect(() => {
    const id = visitId()
    if (!id || !pathname) return

    // Reads the tags off the landing URL and holds them for this tab. After
    // the first page the URL has none and the stored value comes back
    // unchanged, so this is safe to call on every navigation.
    const campaign = captureCampaign()

    if (reported.current !== pathname) {
      reported.current = pathname
      report(id, campaign, pathname)
    }

  }, [pathname])

  return null
}
