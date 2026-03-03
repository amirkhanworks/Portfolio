import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/SectionHeading";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Tag } from "@/components/Tag";
import { caseStudies } from "@/data/caseStudies";

export function CaseStudiesPage() {
  return (
    <div className="space-y-16">
      <Section>
        <SectionHeading
          label="Case studies"
          title="How I work on complex products"
          description="A sample of problems I've worked on across AI, cloud, and IoT."
        />
      </Section>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((cs) => (
          <Card
            key={cs.slug}
            as="article"
            className="flex min-h-[220px] flex-col justify-between transition-colors hover:border-[var(--accent)]/30"
          >
            <div>
              <p className="text-label text-[var(--muted-fg)]">{cs.client}</p>
              <h2 className="mt-1 text-h3 text-[var(--fg)]">{cs.title}</h2>
              <p className="mt-2 text-small text-[var(--muted-fg)]">
                {cs.headline}
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {cs.tags.slice(0, 4).map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <div className="mt-4">
              <Link
                to={`/case-studies/${cs.slug}`}
                className="text-label font-medium text-[var(--accent)] hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
              >
                Read case study →
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
