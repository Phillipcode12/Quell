'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

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

function report(id: string) {
  try {
    void fetch('/api/track', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ visitId: id }),
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

    if (reported.current !== pathname) {
      reported.current = pathname
      report(id)
    }

    const beat = setInterval(() => {
      // A background tab is not someone looking at the site.
      if (document.visibilityState === 'visible') report(id)
    }, HEARTBEAT_MS)

    return () => clearInterval(beat)
  }, [pathname])

  return null
}
