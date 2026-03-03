import { SectionHeading } from "@/components/SectionHeading";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Prose } from "@/components/Prose";

const resumePath = "/resume.pdf";

export function ResumePage() {
  return (
    <div className="space-y-16">
      <Section>
        <SectionHeading
          label="Resume"
          title="Amir Khan"
          description="View the PDF below or download it. Replace public/resume.pdf to update."
        />
      </Section>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-12">
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 shadow-[var(--shadow-sm)]">
            <h2 className="text-label text-[var(--muted-fg)]">
              Quick summary
            </h2>
            <Prose className="mt-3 space-y-2">
              <p>
                Technical Product Manager & Product Analyst. AI recruitment SaaS,
                Azure delivery, IoT product launch. Evidence-first, operator
                mindset.
              </p>
            </Prose>
          </div>
          <Button href={resumePath} className="w-full sm:w-auto">
            Download resume (PDF)
          </Button>
          <p className="text-small text-[var(--muted-fg)]">
            Place your PDF at{" "}
            <code className="rounded bg-[var(--muted)] px-1.5 py-0.5 text-[0.7rem]">
              public/resume.pdf
            </code>{" "}
            to update.
          </p>
        </aside>

        <div className="min-w-0">
          <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)] p-3 shadow-[var(--shadow-sm)]">
            <object
              data={`${resumePath}#view=FitH`}
              type="application/pdf"
              aria-label="Embedded resume PDF"
              className="min-h-[60vh] w-full rounded border-0 sm:min-h-[75vh]"
            >
              <div className="flex min-h-[400px] flex-col items-center justify-center rounded border border-[var(--border)] bg-[var(--muted)] p-8 text-center">
                <p className="text-body text-[var(--muted-fg)]">
                  Your browser could not display the PDF.
                </p>
                <Button href={resumePath} className="mt-4">
                  Download resume
                </Button>
              </div>
            </object>
          </div>
        </div>
      </div>
    </div>
  );
}
