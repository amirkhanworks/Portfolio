import { SectionHeading } from "@/components/SectionHeading";
import { Section } from "@/components/Section";
import { Divider } from "@/components/Divider";
import { Prose } from "@/components/Prose";

export function AboutPage() {
  return (
    <div className="space-y-16">
      <Section>
        <SectionHeading
          label="About"
          title="Amir Khan"
          description="Technical Product Manager and Product Analyst with experience across AI recruitment, Azure managed services, and IoT smart home products."
        />
      </Section>

      <Section aria-label="Background">
        <Prose className="space-y-4">
          <p>
            I work best in environments where the problem is ambiguous, the
            constraints are real, and the expectation is that product decisions
            stand up to scrutiny. I partner closely with engineering, operations,
            and commercial teams to move from unclear requests to measurable
            outcomes.
          </p>
          <p>
            My background spans AI-enabled recruitment SaaS, Azure managed
            services and migrations, and IoT smart home launches. Across these,
            the common thread is designing products and runbooks that balance
            reliability, user experience, and commercial reality.
          </p>
          <p>
            I am comfortable owning the detail—requirements, edge cases,
            runbooks, and instrumentation—while keeping a clear narrative for
            stakeholders who care about risk, cost, and impact.
          </p>
        </Prose>
      </Section>

      <Divider />

      <Section aria-label="Principles">
        <SectionHeading title="Principles" />
        <ul className="mt-4 list-disc space-y-3 pl-5 text-body text-[var(--muted-fg)] [&_strong]:text-[var(--fg)]">
          <li>
            <strong>Evidence before opinions.</strong> Start from data, real
            workflows, and constraints rather than preference.
          </li>
          <li>
            <strong>Design for operations.</strong> Products are only real when
            they can be operated, supported, and evolved without heroics.
          </li>
          <li>
            <strong>Clarity beats volume.</strong> Simple narratives, short
            documents, and explicit trade-offs scale better than long decks.
          </li>
          <li>
            <strong>Shared ownership.</strong> The best outcomes come when
            engineering, product, and operations share the same definition of
            success.
          </li>
          <li>
            <strong>Ruthless prioritisation.</strong> Say no to the right things
            so the team can ship what actually moves the needle.
          </li>
        </ul>
      </Section>
    </div>
  );
}
