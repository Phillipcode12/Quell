import Image from 'next/image'

const scenes = [
  {
    src: '/images/lifestyle-gamer-2.png',
    alt: 'Quell carton and bottle on a desk in front of a gaming PC with neon lighting',
    width: 1086,
    height: 1448,
    eyebrow: 'Screen time',
    title: 'For eyes that forget to blink',
    body: 'Long sessions in front of a monitor cut your blink rate and let the tear film evaporate. Quell reinforces the oil layer that slows it down.',
  },
  {
    src: '/images/lifestyle-model-2.png',
    alt: 'A person outdoors in snowy mountains holding a bottle of Quell up beside their eye',
    width: 1086,
    height: 1448,
    eyebrow: 'Harsh conditions',
    title: 'For wind, cold, and dry air',
    body: 'Cold air, altitude, and indoor heat all pull moisture off the ocular surface. A preservative-free drop is one you can reach for as often as the label allows.',
  },
]

export function Lifestyle() {
  return (
    <section className="border-b border-line py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {scenes.map((scene) => (
            <article
              key={scene.src}
              className="overflow-hidden rounded-3xl border border-line bg-surface"
            >
              <Image
                src={scene.src}
                alt={scene.alt}
                width={scene.width}
                height={scene.height}
                sizes="(max-width: 768px) 100vw, 560px"
                className="h-auto w-full"
              />
              <div className="p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  {scene.eyebrow}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {scene.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{scene.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
