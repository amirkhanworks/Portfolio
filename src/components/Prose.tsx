import { ReactNode } from "react";

type ProseProps = {
  children: ReactNode;
  className?: string;
};

/** Wrapper for body copy: consistent text color and spacing */
export function Prose({ children, className }: ProseProps) {
  return (
    <div className={`text-body text-[var(--muted-fg)] [&_strong]:text-[var(--fg)] ${className ?? ""}`}>
      {children}
    </div>
  );
}
