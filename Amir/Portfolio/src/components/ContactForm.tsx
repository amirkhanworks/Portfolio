"use client";

import { useCallback } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Prose } from "@/components/Prose";

const EMAIL = "mailto:amir@example.com";

const inputBase =
  "w-full rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-2.5 text-body text-[var(--fg)] placeholder:text-[var(--muted-fg)] transition-colors focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]/30 focus:ring-offset-2 focus:ring-offset-[var(--bg)] invalid:border-red-500 invalid:focus:ring-red-500/30";

export function ContactForm() {
  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.currentTarget;
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const formData = new FormData(form);
      const name = formData.get("name")?.toString() ?? "";
      const email = formData.get("email")?.toString() ?? "";
      const company = formData.get("company")?.toString() ?? "";
      const message = formData.get("message")?.toString() ?? "";

      const subject = encodeURIComponent("Portfolio contact – Amir Khan");
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`
      );

      window.location.href = `${EMAIL}?subject=${subject}&body=${body}`;
    },
    []
  );

  return (
    <div className="space-y-10">
      <SectionHeading
        label="Contact"
        title="Get in touch"
        description="For Technical Product Manager or Product Analyst roles, or to discuss problems in AI recruitment, Azure, or IoT."
      />

      <div className="space-y-4">
        <Prose className="text-body text-[var(--muted-fg)]">
          <p>
            I&apos;m based in London and open to relocation. The best conversations
            start with a specific problem or mandate, not a generic job
            description.
          </p>
        </Prose>
        <div className="flex flex-wrap gap-3">
          <Button href={EMAIL}>Email</Button>
          <Button
            href="https://www.linkedin.com/in/amirkhan"
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-sm)]"
        aria-label="Contact form"
        noValidate
      >
        <h2 className="text-label text-[var(--muted-fg)] mb-4">
          Send a message
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label
              htmlFor="contact-name"
              className="text-label font-medium text-[var(--fg)]"
            >
              Name <span className="text-[var(--muted-fg)]">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className={inputBase}
              aria-required="true"
            />
            <p className="text-small text-[var(--muted-fg)]" role="status">
              Required
            </p>
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="contact-email"
              className="text-label font-medium text-[var(--fg)]"
            >
              Email <span className="text-[var(--muted-fg)]">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={inputBase}
              aria-required="true"
            />
            <p className="text-small text-[var(--muted-fg)]" role="status">
              Required · Valid email
            </p>
          </div>
        </div>
        <div className="mt-5 space-y-1.5">
          <label
            htmlFor="contact-company"
            className="text-label font-medium text-[var(--fg)]"
          >
            Company <span className="text-[var(--muted-fg)]">(optional)</span>
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            className={inputBase}
          />
        </div>
        <div className="mt-5 space-y-1.5">
          <label
            htmlFor="contact-message"
            className="text-label font-medium text-[var(--fg)]"
          >
            Message <span className="text-[var(--muted-fg)]">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            className={`${inputBase} resize-y min-h-[100px]`}
            aria-required="true"
          />
          <p className="text-small text-[var(--muted-fg)]" role="status">
            Required
          </p>
        </div>
        <div className="mt-6">
          <Button type="submit">Send via email</Button>
        </div>
      </form>
    </div>
  );
}
