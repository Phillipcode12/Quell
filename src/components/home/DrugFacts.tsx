import Image from 'next/image'
import { DRUG_FACTS } from '@/lib/product-content'

function Row({
  heading,
  children,
}: {
  heading: string
  children: React.ReactNode
}) {
  return (
    <div className="border-t border-black/25 py-3">
      <h4 className="font-bold text-black">{heading}</h4>
      <div className="mt-1 text-[15px] leading-relaxed text-black/80">
        {children}
      </div>
    </div>
  )
}

function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul className="list-disc space-y-1 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export function DrugFacts() {
  return (
    <section
      id="drug-facts"
      className="scroll-mt-24 border-b border-line bg-surface py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Drug Facts
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything on the label
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            This is the full over-the-counter Drug Facts panel exactly as it is
            printed on the carton. Read it before use.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Rendered as real text so it is selectable, searchable, and screen-reader accessible. */}
          <div className="rounded-2xl bg-white p-7 text-black">
            <h3 className="text-2xl font-bold">Drug Facts</h3>

            <div className="mt-4 border-t-2 border-black">
              <div className="flex items-baseline justify-between border-t border-black/25 py-3 font-bold italic">
                <span>Active Ingredients</span>
                <span>Purpose</span>
              </div>
              {DRUG_FACTS.activeIngredients.map((ing) => (
                <div
                  key={ing.name}
                  className="flex items-baseline justify-between gap-4 border-t border-black/10 py-2 text-[15px]"
                >
                  <span className="text-black/85">{ing.name}</span>
                  <span className="shrink-0 text-black/70">{ing.purpose}</span>
                </div>
              ))}

              <Row heading="Uses">{DRUG_FACTS.uses}</Row>

              <Row heading="Warnings">
                <strong className="font-semibold text-black">
                  {DRUG_FACTS.warnings}
                </strong>
              </Row>

              <Row heading="Do Not Use">
                <Bullets items={DRUG_FACTS.doNotUse} />
              </Row>

              <Row heading="When Using This Product">
                <Bullets items={DRUG_FACTS.whenUsing} />
              </Row>

              <Row heading="Stop use and ask a doctor if">
                <Bullets items={DRUG_FACTS.stopUseAndAskDoctorIf} />
              </Row>

              <Row heading="KEEP OUT OF REACH OF CHILDREN">
                {DRUG_FACTS.keepOutOfReach}
              </Row>

              <Row heading="Directions">
                <Bullets items={[DRUG_FACTS.directions]} />
              </Row>

              <Row heading="Other Information">
                <Bullets items={DRUG_FACTS.otherInformation} />
              </Row>

              <Row heading="Inactive Ingredients">
                {DRUG_FACTS.inactiveIngredients.join(', ')}
              </Row>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white">
            <Image
              src="/images/box-back-drug-facts.png"
              alt="Back of the Quell carton showing the printed Drug Facts panel"
              width={1086}
              height={1448}
              sizes="(max-width: 1024px) 100vw, 440px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
