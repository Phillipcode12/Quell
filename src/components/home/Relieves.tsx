import { RELIEVES } from '@/lib/product-content'

export function Relieves() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          Relieves
        </h2>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RELIEVES.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-line bg-surface-2 px-5 py-6 text-center"
            >
              <span className="text-2xl font-semibold tracking-tight text-white">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
