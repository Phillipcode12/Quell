'use client'

import { useEffect, useId, useRef, useState } from 'react'

/**
 * The Turnstile widget.
 *
 * Rendered explicitly rather than by putting `class="cf-turnstile"` in the
 * markup and letting Cloudflare scan for it. The implicit mode scans the DOM
 * once on script load, which in an app that mounts forms client-side means it
 * frequently finds nothing and the widget silently never appears — the worst
 * possible failure for something whose absence blocks submission.
 *
 * The token is exposed through `onToken` rather than read out of the hidden
 * input Cloudflare creates, because these forms submit with `fetch` and a
 * JSON body, not a native form post.
 */

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        options: {
          sitekey: string
          callback: (token: string) => void
          'error-callback'?: () => void
          'expired-callback'?: () => void
          theme?: 'auto' | 'light' | 'dark'
          size?: 'normal' | 'flexible' | 'compact'
        },
      ) => string | undefined
      reset: (widgetId?: string) => void
      remove: (widgetId: string) => void
    }
  }
}

const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'

/** Loads the script once per page, however many widgets ask for it. */
let scriptPromise: Promise<void> | null = null

function loadTurnstile(): Promise<void> {
  if (window.turnstile) return Promise.resolve()
  if (scriptPromise) return scriptPromise

  scriptPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement('script')
    script.src = SCRIPT_SRC
    script.async = true
    script.defer = true
    script.onload = () => resolve()
    script.onerror = () => {
      // Let a later mount retry rather than caching the failure forever.
      scriptPromise = null
      reject(new Error('Turnstile script failed to load'))
    }
    document.head.appendChild(script)
  })
  return scriptPromise
}

export function Turnstile({
  siteKey,
  onToken,
}: {
  siteKey: string
  /** Called with a token, or null when it expires or errors. */
  onToken: (token: string | null) => void
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | undefined>(undefined)
  const [failed, setFailed] = useState(false)
  // Stable across re-renders so the effect below never re-runs on a new
  // closure and mounts a second widget on top of the first.
  const onTokenRef = useRef(onToken)
  onTokenRef.current = onToken

  const id = useId()

  useEffect(() => {
    let cancelled = false
    const container = containerRef.current
    if (!container) return

    loadTurnstile()
      .then(() => {
        if (cancelled || !window.turnstile) return
        widgetIdRef.current = window.turnstile.render(container, {
          sitekey: siteKey,
          callback: (token) => onTokenRef.current(token),
          // A token is only good for five minutes. When it lapses the widget
          // tells us, and clearing it here means the form disables itself
          // rather than submitting something the server will reject.
          'expired-callback': () => onTokenRef.current(null),
          'error-callback': () => {
            onTokenRef.current(null)
            setFailed(true)
          },
          theme: 'dark',
          size: 'flexible',
        })
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })

    return () => {
      cancelled = true
      const widgetId = widgetIdRef.current
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId)
      widgetIdRef.current = undefined
    }
    // siteKey is configuration and does not change within a page's life.
  }, [siteKey])

  return (
    <div>
      <div ref={containerRef} id={id} />
      {failed && (
        <p className="mt-2 text-sm text-red-400">
          The human check could not load. Disable any ad blocker for this page,
          or reload and try again.
        </p>
      )}
    </div>
  )
}

/** Clears the widget so a new token can be issued after a failed submit. */
export function resetTurnstile() {
  window.turnstile?.reset()
}
