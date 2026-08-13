export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-line py-16 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(700px 320px at 25% 10%, rgba(0,167,181,0.25), transparent 65%)',
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          {eyebrow}
        </span>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}

/** Banner marking a page as unreviewed boilerplate. */
export function TemplateNotice({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-10 rounded-xl border border-amber-500/40 bg-amber-500/10 p-5 text-sm leading-relaxed text-amber-200">
      <p className="font-semibold">Template content — not legal advice</p>
      <p className="mt-2">{children}</p>
    </div>
  )
}
