'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Turnstile, resetTurnstile } from '@/components/Turnstile'
import { readCampaign } from '@/lib/campaign-client'
import {
  DISCLAIMER,
  MAX_SCORE,
  QUESTIONS,
  SAFETY_BODY,
  SAFETY_NOTE,
  SAFETY_TITLE,
  type SelfCheckResult,
} from '@/lib/self-check'

/**
 * The self-check.
 *
 * Every word shown comes from `lib/self-check.ts`, which is the reviewable
 * copy. Nothing here invents a sentence.
 *
 * **Red appears on the safety screen and nowhere else in this flow.** That is
 * what makes the colour information rather than decoration — it says "this one
 * is not about scoring" before a word is read. It is kept to a label, a rule
 * and a footnote: a red-washed panel would read as an alarm, and most people
 * answering it have perfectly ordinary mild dryness.
 */

type Stage = 'gate' | 'questions' | 'result'

export function SelfCheck({ siteKey }: { siteKey?: string }) {
  const [stage, setStage] = useState<Stage>('gate')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState<string | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [at, setAt] = useState(0)
  const [answers, setAnswers] = useState<Record<string, unknown>>({})
  const [result, setResult] = useState<SelfCheckResult | null>(null)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState<string | null>(null)

  const question = QUESTIONS[at]
  const isSafety = Boolean(question?.safety)

  function startQuiz(event: React.FormEvent) {
    event.preventDefault()
    // Deliberately forgiving. This is a mailing list, and refusing an unusual
    // but valid address costs more than accepting an odd one.
    if (!/^[^@\s]+@[^@\s.]+\.[^@\s]{2,}$/.test(email.trim())) {
      setEmailError('That doesn’t look like an email address.')
      return
    }
    setEmailError(null)
    setStage('questions')
  }

  async function choose(value: unknown) {
    const next = { ...answers, [question.id]: value }
    setAnswers(next)

    if (at < QUESTIONS.length - 1) {
      setAt(at + 1)
      return
    }

    setSending(true)
    setSendError(null)
    try {
      const res = await fetch('/api/self-check', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          answers: next,
          turnstileToken: token,
          ...readCampaign(),
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        setSendError(data.error ?? 'Something went wrong.')
        // The token is single-use; without this a retry always fails.
        resetTurnstile()
        setToken(null)
        return
      }
      setResult(data.result as SelfCheckResult)
      setStage('result')
    } catch {
      setSendError('Could not reach the server. Please try again.')
    } finally {
      setSending(false)
    }
  }

  const progress =
    stage === 'result' ? 100 : stage === 'gate' ? 0 : (at / QUESTIONS.length) * 100

  return (
    <div className="relative overflow-hidden bg-background">
      {/* Same ambient treatment as the reviews page, so this reads as part of
          the site rather than a bolted-on tool. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-brand/10 blur-[140px]" />
        <div className="absolute -right-32 top-1/3 h-[32rem] w-[32rem] rounded-full bg-brand/[0.06] blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-2xl px-6 py-16 sm:py-24">
        <header className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Dry eye self-check
          </span>
          <h1 className="mt-4 text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl">
            Find out what your eyes are telling you
          </h1>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-muted">
            Eight questions, about ninety seconds. You’ll get a symptom score
            and whether your answers fit the pattern of a tear film that
            evaporates too quickly.
          </p>
        </header>

        <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/40">
          {/* Progress. Hidden on the gate, where there is no progress to show. */}
          {stage !== 'gate' && (
            <div className="h-0.5 bg-surface-2">
              <div
                className={`h-full transition-[width] duration-500 ease-out ${
                  isSafety && stage === 'questions' ? 'bg-red-400' : 'bg-brand'
                }`}
                style={{ width: `${progress}%` }}
              />
            </div>
          )}

          <div className="p-7 sm:p-9">
            {stage === 'gate' && (
              <form onSubmit={startQuiz}>
                <label className="block">
                  <span className="text-sm font-medium text-white">
                    Where should we send your result?
                  </span>
                  <input
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-lg border border-line bg-surface-2 px-4 py-3 text-white outline-none transition focus:border-brand"
                  />
                </label>
                {emailError && (
                  <p className="mt-2 text-sm text-red-300">{emailError}</p>
                )}

                {siteKey && (
                  <div className="mt-4">
                    <Turnstile siteKey={siteKey} onToken={setToken} />
                  </div>
                )}

                <button
                  type="submit"
                  disabled={Boolean(siteKey) && !token}
                  className="mt-5 w-full rounded-lg bg-brand px-5 py-3.5 font-semibold text-black transition hover:bg-brand-light disabled:opacity-60"
                >
                  Start the self-check
                </button>
                <p className="mt-4 text-xs leading-relaxed text-muted">
                  We’ll email your result and occasional dry eye information.
                  Unsubscribe any time. We never sell your address.
                </p>
              </form>
            )}

            {stage === 'questions' && question && (
              <div>
                <span
                  className={`text-xs font-semibold uppercase tracking-[0.14em] ${
                    isSafety ? 'text-red-400' : 'text-muted'
                  }`}
                >
                  {isSafety
                    ? 'Safety check · please read'
                    : `Question ${at + 1} of ${QUESTIONS.length}`}
                </span>

                <h2 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl [text-wrap:balance]">
                  {question.prompt}
                </h2>

                {isSafety && <div className="mt-4 h-0.5 rounded-full bg-red-400" />}

                <div className="mt-6 grid gap-2.5">
                  {question.choices.map((choice) => (
                    <button
                      key={choice.label}
                      type="button"
                      disabled={sending}
                      onClick={() => choose(choice.value)}
                      className={`rounded-lg border border-line bg-surface-2 px-4 py-3.5 text-left text-white transition disabled:opacity-60 ${
                        isSafety
                          ? 'hover:border-red-400 hover:bg-red-500/10'
                          : 'hover:border-brand hover:bg-brand/10'
                      }`}
                    >
                      {choice.label}
                    </button>
                  ))}
                </div>

                {isSafety && (
                  <p className="mt-5 border-l-2 border-red-400 pl-4 text-sm leading-relaxed text-muted">
                    {SAFETY_NOTE}
                  </p>
                )}

                {sending && (
                  <p className="mt-5 text-sm text-muted">Working out your result…</p>
                )}
                {sendError && (
                  <p className="mt-5 rounded-lg border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300">
                    {sendError}
                  </p>
                )}
              </div>
            )}

            {stage === 'result' && result && (
              <div>
                {result.safety ? (
                  <>
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-red-400">
                      Please read this
                    </span>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {SAFETY_TITLE}
                    </h2>
                    <div className="mt-4 h-0.5 rounded-full bg-red-400" />
                    <p className="mt-5 leading-relaxed text-muted">{SAFETY_BODY}</p>
                  </>
                ) : (
                  <>
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      Your score · {result.score} of {MAX_SCORE}
                    </span>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {result.band.title}
                    </h2>
                    <p className="mt-3 leading-relaxed text-muted">
                      {result.band.summary}
                    </p>

                    <p className="mt-6 rounded-r-lg border-l-2 border-brand bg-brand/10 py-4 pl-5 pr-4 leading-relaxed text-white">
                      {result.pattern}
                    </p>

                    <div className="mt-7 border-t border-line pt-6">
                      <p className="text-sm text-muted">
                        <span className="font-semibold text-white">
                          On its way to {email.trim()}
                        </span>
                        <br />
                        Your answers, what the pattern usually means, and the
                        questions worth asking an eye doctor.
                      </p>
                    </div>
                  </>
                )}

                <p className="mt-6 text-xs leading-relaxed text-muted">
                  {DISCLAIMER}
                </p>

                {/* The product appears once, after the result, as an option —
                    never as the answer to a score. It is omitted entirely when
                    the safety check fired. */}
                {!result.safety && (
                  <Link
                    href="/#buy"
                    className="mt-7 inline-flex rounded-lg border-2 border-brand bg-brand/10 px-6 py-3 font-semibold text-white transition hover:bg-brand/20"
                  >
                    See how Quell works
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>

        <p className="mt-8 text-center text-xs leading-relaxed text-muted">
          Quell™ is an over-the-counter lubricating eye drop — read the{' '}
          <Link href="/drug-facts" className="text-brand-light hover:underline">
            Drug Facts
          </Link>{' '}
          before use.
        </p>
      </div>
    </div>
  )
}
