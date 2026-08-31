'use client'

import { useId, useState } from 'react'

/**
 * A password input with a show/hide toggle.
 *
 * Typing a password you cannot see is the reason people mistype one, and on a
 * phone it is the reason they give up and leave. Being able to reveal it is
 * now the expected behaviour rather than a risk: the threat it guards against
 * is someone reading over your shoulder, which the person typing is far better
 * placed to judge than we are. It starts hidden and every toggle is deliberate.
 *
 * Details that matter, and are easy to get wrong:
 *
 *  - **`type="button"`.** A bare `<button>` inside a form defaults to submit,
 *    so revealing the password would submit the form instead.
 *  - **`autoComplete` is passed through, never overridden.** Password managers
 *    key off `new-password` and `current-password` to decide between offering
 *    to generate one and offering to fill one. Getting it wrong silently
 *    breaks them.
 *  - **The toggle is not a form field**, so it carries `aria-pressed` and a
 *    label that says what it will do next, not what state it is in.
 *  - The input keeps `minLength` and `required` so the browser's own
 *    validation still runs before any request is made.
 */
export function PasswordField({
  label,
  hint,
  name,
  autoComplete,
  minLength,
  required,
}: {
  label: string
  hint?: string
  name: string
  autoComplete: 'new-password' | 'current-password'
  minLength?: number
  required?: boolean
}) {
  const [revealed, setRevealed] = useState(false)
  const hintId = useId()

  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      <div className="relative mt-1.5">
        <input
          name={name}
          type={revealed ? 'text' : 'password'}
          autoComplete={autoComplete}
          minLength={minLength}
          required={required}
          aria-describedby={hint ? hintId : undefined}
          // Right padding leaves room for the toggle so a long password never
          // runs underneath it.
          className="w-full rounded-md border border-line bg-surface-2 px-3 py-2.5 pr-12 text-white outline-none focus:border-brand"
        />
        <button
          type="button"
          onClick={() => setRevealed((v) => !v)}
          aria-label={revealed ? 'Hide password' : 'Show password'}
          aria-pressed={revealed}
          className="absolute inset-y-0 right-0 flex w-12 items-center justify-center rounded-r-md text-muted transition hover:text-white focus:outline-none focus-visible:text-white focus-visible:ring-2 focus-visible:ring-brand"
        >
          {revealed ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </div>
      {hint && (
        <span id={hintId} className="mt-1 block text-xs text-muted">
          {hint}
        </span>
      )}
    </label>
  )
}

/** Decorative: the button that holds these carries the label. */
const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'h-5 w-5',
  'aria-hidden': true,
}

function EyeIcon() {
  return (
    <svg {...iconProps}>
      <path d="M2.5 12s3.5-6.5 9.5-6.5S21.5 12 21.5 12s-3.5 6.5-9.5 6.5S2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function EyeOffIcon() {
  return (
    <svg {...iconProps}>
      <path d="M10.6 6.1A9.9 9.9 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a17.6 17.6 0 0 1-2.7 3.6M6.2 7.9A17.4 17.4 0 0 0 2.5 12S6 18.5 12 18.5c1.6 0 3-.4 4.2-1.1" />
      <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
      <path d="m3 3 18 18" />
    </svg>
  )
}
