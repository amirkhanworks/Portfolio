import { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
};

export function Tag({ children }: TagProps) {
  return (
    <span
      className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--muted)] px-2.5 py-0.5 text-label text-[var(--muted-fg)]"
      role="listitem"
    >
      {children}
    </span>
  );
}
