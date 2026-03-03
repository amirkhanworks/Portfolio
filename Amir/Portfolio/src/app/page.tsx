import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { MetricCard } from "@/components/MetricCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Tag } from "@/components/Tag";
import { Divider } from "@/components/Divider";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Amir Khan – Technical Product Manager & Product Analyst",
  description:
    "Amir Khan is a Technical Product Manager and Product Analyst in London, focusing on AI recruitment SaaS, Azure delivery, and IoT products."
};

export default function HomePage() {
  const featured = caseStudies.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-20">
      <Section aria-label="Hero and proof">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-start lg:gap-16">
          <div className="space-y-5">
            <h1 className="text-display text-[var(--fg)]">Amir Khan</h1>
            <p className="text-label text-[var(--muted-fg)]">
              Technical Product Manager · Product Analyst
            </p>
            <p className="text-body max-w-xl text-[var(--muted-fg)]">
              I help teams move from ambiguity to measurable, reliable
              outcomes—across AI recruitment SaaS, Azure delivery, and IoT.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Button href="/case-studies">View Case Studies</Button>
              <Button href="/resume" variant="secondary">
                Download Resume
              </Button>
            </div>
            <p className="text-label text-[var(--muted-fg)]">
              London · Open to relocate · Technical Product Manager & Product Analyst
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-label text-[var(--muted-fg)]">
              Proof, not promises
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <MetricCard
                label="Reliability"
                value="99.95% SLA"
                description="Azure managed services and migration with strict uptime targets."
              />
              <MetricCard
                label="Team leadership"
                value="12+ engineers"
                description="Led cross-functional squads across infra, app, and data."
              />
              <MetricCard
                label="Data discipline"
                value="400+ matches / 98% QC"
                description="Hands-on analysis of recruitment matches and quality checks."
              />
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      <Section aria-label="What I do">
        <div className="space-y-6">
          <SectionHeading
            label="What I do"
            title="Operator-style product leadership"
            description="I work across discovery, delivery, and measurement so product decisions hold up under scrutiny."
          />
          <div className="grid gap-5 md:grid-cols-3">
            <Card className="flex flex-col">
              <h3 className="text-h3 text-[var(--fg)]">Product discovery</h3>
              <p className="mt-2 flex-1 text-body text-[var(--muted-fg)]">
                Clarifying problems, users, and constraints before solutioning.
                I align stakeholders on hypotheses, not roadmaps.
              </p>
            </Card>
            <Card className="flex flex-col">
              <h3 className="text-h3 text-[var(--fg)]">Execution with engineers</h3>
              <p className="mt-2 flex-1 text-body text-[var(--muted-fg)]">
                Partnering with engineering on PRDs, runbooks, and integration
                plans that respect real-world constraints.
              </p>
            </Card>
            <Card className="flex flex-col">
              <h3 className="text-h3 text-[var(--fg)]">Data-driven prioritisation</h3>
              <p className="mt-2 flex-1 text-body text-[var(--muted-fg)]">
                Using instrumentation, baselines, and counterfactual thinking to
                decide what to ship next and how to call success.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Divider />

      <Section aria-label="Selected experience">
        <div className="space-y-6">
          <SectionHeading
            label="Selected experience"
            title="Where I've operated"
            description="A sample of work across AI recruitment SaaS, Azure cloud services, and IoT launches."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {featured.map((cs) => (
              <Card
                key={cs.slug}
                className="flex min-h-[200px] flex-col justify-between"
              >
                <div>
                  <p className="text-label text-[var(--muted-fg)]">{cs.client}</p>
                  <h3 className="mt-1 text-h3 text-[var(--fg)]">{cs.title}</h3>
                  <p className="mt-2 text-small text-[var(--muted-fg)]">
                    {cs.headline}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cs.tags.slice(0, 3).map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                <div className="mt-4">
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="text-label font-medium text-[var(--accent)] hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
                  >
                    Read case study →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
