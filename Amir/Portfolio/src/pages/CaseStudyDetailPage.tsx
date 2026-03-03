import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { SectionHeading } from "@/components/SectionHeading";
import { Tag } from "@/components/Tag";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Prose } from "@/components/Prose";
import { getCaseStudyBySlug } from "@/data/caseStudies";

export function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const cs = slug ? getCaseStudyBySlug(slug) : undefined;

  useEffect(() => {
    if (cs) document.title = `${cs.title} – Case Study – Amir Khan`;
  }, [cs]);

  if (!cs) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <article className="space-y-12">
      <header className="space-y-4">
        <p className="text-label text-[var(--muted-fg)]">
          {cs.client} · {cs.role} · {cs.timeframe}
        </p>
        <h1 className="text-display text-[var(--fg)]">{cs.title}</h1>
        <p className="max-w-2xl text-body text-[var(--muted-fg)]">
          {cs.headline}
        </p>
        <div className="flex flex-wrap gap-2">
          {cs.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </header>

      <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
        <div className="min-w-0 space-y-12">
          <section aria-label="Executive summary">
            <SectionHeading label="Overview" title="Executive summary" />
            <ul
              className="mt-4 space-y-2 text-body text-[var(--muted-fg)]"
              role="list"
            >
              {cs.executiveSummary.map((item) => (
                <li key={item} className="flex gap-2">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <Divider />

          <section aria-label="Problem and stakeholders">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <SectionHeading title="Problem" />
                <Prose className="mt-3">
                  <p>{cs.problem}</p>
                </Prose>
              </div>
              <div>
                <SectionHeading title="Users & stakeholders" />
                <ul className="mt-3 list-disc space-y-1 pl-5 text-body text-[var(--muted-fg)]">
                  {cs.usersStakeholders.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <Divider />

          <section aria-label="Constraints and approach">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <SectionHeading title="Constraints" />
                <ul className="mt-3 list-disc space-y-1 pl-5 text-body text-[var(--muted-fg)]">
                  {cs.constraints.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <SectionHeading title="Approach" />
                <ul className="mt-3 list-disc space-y-1 pl-5 text-body text-[var(--muted-fg)]">
                  {cs.approach.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <Divider />

          <section aria-label="Delivered and impact">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <SectionHeading title="What I delivered" />
                <ul className="mt-3 list-disc space-y-1 pl-5 text-body text-[var(--muted-fg)]">
                  {cs.delivered.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <SectionHeading title="Impact" />
                <ul className="mt-3 list-disc space-y-1 pl-5 text-body text-[var(--muted-fg)]">
                  {cs.impact.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <Divider />

          <section aria-label="Learnings">
            <SectionHeading title="Learnings" />
            <ul className="mt-3 list-disc space-y-1 pl-5 text-body text-[var(--muted-fg)]">
              {cs.learnings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <Divider />

          <section aria-label="Artifacts">
            <SectionHeading title="Artifacts" />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {cs.artifacts.map((artifact) => (
                <Card key={artifact.label} className="space-y-2">
                  <p className="text-h3 text-[var(--fg)]">{artifact.label}</p>
                  <p className="text-label text-[var(--muted-fg)]">
                    {artifact.type}
                  </p>
                  <a
                    href={artifact.href}
                    className="text-label font-medium text-[var(--accent)] hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
                    aria-label={`${artifact.label} (placeholder)`}
                  >
                    View placeholder
                  </a>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <aside
          className="lg:sticky lg:top-24 lg:self-start"
          aria-label="Quick facts"
        >
          <Card className="space-y-5">
            <h2 className="text-label text-[var(--muted-fg)]">Quick facts</h2>
            <dl className="space-y-4 text-small">
              <div>
                <dt className="text-label text-[var(--muted-fg)]">Role</dt>
                <dd className="mt-0.5 text-[var(--fg)]">{cs.role}</dd>
              </div>
              <div>
                <dt className="text-label text-[var(--muted-fg)]">Timeline</dt>
                <dd className="mt-0.5 text-[var(--fg)]">{cs.timeframe}</dd>
              </div>
              <div>
                <dt className="text-label text-[var(--muted-fg)]">Domains</dt>
                <dd className="mt-1 flex flex-wrap gap-1.5">
                  {cs.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-label text-[var(--muted-fg)]">
                  Stakeholders
                </dt>
                <dd className="mt-0.5 text-[var(--fg)]">
                  {cs.usersStakeholders.length} groups (recruiters, engineering,
                  commercial, etc.)
                </dd>
              </div>
            </dl>
            <div className="pt-2 border-t border-[var(--border)]">
              <Link
                to="/case-studies"
                className="text-label font-medium text-[var(--accent)] hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
              >
                ← All case studies
              </Link>
            </div>
          </Card>
        </aside>
      </div>
    </article>
  );
}
