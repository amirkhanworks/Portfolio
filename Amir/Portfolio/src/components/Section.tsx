import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
};

export function Section({
  children,
  className,
  "aria-label": ariaLabel
}: SectionProps) {
  return (
    <section className={className ?? ""} aria-label={ariaLabel}>
      {children}
    </section>
  );
}
