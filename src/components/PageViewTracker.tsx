'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Reports the current page to /api/track.
 *
 * Two rules shaped this:
 *
 * **No cookie.** The session id lives in sessionStorage, so it is per-tab and
 * dies when the tab closes. It cannot follow anyone between visits, which is
 * what lets the privacy policy keep saying we set no tracking cookies. Storage
 * can throw outright in a locked-down browser, so every access is guarded and
 * the tracker simply does nothing when it fails.
 *
 * **Never get in the visitor's way.** Reporting is fire-and-forget with
 * keepalive, errors are swallowed, and nothing here can block a render or a
 * navigation. A missed view is always preferable to a broken page.
 *
 * The heartbeat is what makes the live count work: an open tab re-reports every
 * minute while it is visible, so "here now" means a tab that is genuinely open
 * and in front of someone, not one abandoned an hour ago.
 */

const STORAGE_KEY = 'quell.sid'
const HEARTBEAT_MS = 60 * 1000

function sessionId(): string | null {
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

function report(path: string, id: string, ping: boolean) {
  try {
    void fetch('/api/track', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ path, sessionId: id, ping }),
      keepalive: true,
    }).catch(() => {})
  } catch {
    // Nothing to do, and nothing worth telling the visitor.
  }
}

export function PageViewTracker() {
  const pathname = usePathname()

  /**
   * The last path actually reported as a view.
   *
   * Without this every page is counted twice, because React runs effects twice
   * in development and a re-render can fire this one again in any environment.
   * Verified against the database before the guard existed: three pages
   * produced six rows. A ref survives the remount, so the second call is a
   * no-op rather than a second row.
   */
  const reported = useRef<string | null>(null)

  useEffect(() => {
    const id = sessionId()
    if (!id || !pathname) return

    if (reported.current !== pathname) {
      reported.current = pathname
      report(pathname, id, false)
    }

    const beat = setInterval(() => {
      // A background tab is not someone looking at the site.
      // Sent as a ping: it proves the tab is still here, but reading one page
      // for ten minutes is one view, not ten.
      if (document.visibilityState === 'visible') report(pathname, id, true)
    }, HEARTBEAT_MS)

    return () => clearInterval(beat)
  }, [pathname])

  return null
}
