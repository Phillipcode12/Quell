'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { captureCampaign } from '@/lib/campaign-client'
import type { CampaignTags } from '@/lib/campaign'

/**
 * Tells /api/track that a visit is happening, and that it is still happening.
 *
 * It reports no page path. That is the point: the shop counts visits, not what
 * anyone read. This component watches the pathname only so it can re-report on
 * navigation, which keeps a long visit alive without waiting for the next
 * heartbeat.
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
const HEARTBEAT_MS = 60 * 1000

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

function report(id: string, campaign: CampaignTags) {
  try {
    void fetch('/api/track', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      // Campaign tags are sent on every report, not only the first. The server
      // writes them on create only — the same rule that protects `source` —
      // so this costs nothing and means the tags still land if the very first
      // report is the one that got dropped.
      body: JSON.stringify({ visitId: id, ...campaign }),
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
      report(id, campaign)
    }

    const beat = setInterval(() => {
      // A background tab is not someone looking at the site.
      if (document.visibilityState === 'visible') report(id, campaign)
    }, HEARTBEAT_MS)

    return () => clearInterval(beat)
  }, [pathname])

  return null
}
