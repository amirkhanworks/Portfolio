import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
};

export function Card({
  children,
  className,
  as: Component = "div"
}: CardProps) {
  return (
    <Component
      className={`rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 shadow-[var(--shadow-sm)] transition-colors ${className ?? ""}`}
    >
      {children}
    </Component>
  );
}
