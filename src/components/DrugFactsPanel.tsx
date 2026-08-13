import { DRUG_FACTS } from '@/lib/product-content'

/**
 * The OTC Drug Facts panel, set as real text rather than a photo of the carton
 * back: selectable, searchable, screen-reader accessible, and legible on a
 * phone. Content comes from src/lib/product-content.ts and must match the
 * printed carton.
 */

function Row({
  heading,
  children,
}: {
  heading: string
  children: React.ReactNode
}) {
  return (
    <div className="border-t border-black/25 py-3">
      <h3 className="font-bold text-black">{heading}</h3>
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

export function DrugFactsPanel() {
  return (
    <div className="rounded-2xl bg-white p-7 text-black sm:p-9">
      <h2 className="text-2xl font-bold">Drug Facts</h2>

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
  )
}
