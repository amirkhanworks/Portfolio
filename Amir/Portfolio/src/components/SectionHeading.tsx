import { ReactNode } from "react";

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  label,
  title,
  description
}: SectionHeadingProps) {
  return (
    <header className="space-y-1">
      {label ? (
        <p className="text-label text-[var(--muted-fg)]">{label}</p>
      ) : null}
      <h2 className="text-h2 text-[var(--fg)]">{title}</h2>
      {description ? (
        <p className="text-body text-[var(--muted-fg)] max-w-2xl">{description}</p>
      ) : null}
    </header>
  );
}
