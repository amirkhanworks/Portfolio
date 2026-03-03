import { Link } from "react-router-dom";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  disabled?: boolean;
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-label font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-[var(--accent)] text-[var(--accent-fg)] hover:opacity-90 active:opacity-95",
  secondary:
    "border border-[var(--border)] bg-transparent text-[var(--fg)] hover:bg-[var(--muted)] active:bg-[var(--border)] dark:border-[var(--border)]",
  ghost:
    "text-[var(--muted-fg)] hover:bg-[var(--muted)] hover:text-[var(--fg)] active:bg-[var(--border)]",
};

function isExternal(href: string): boolean {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export function Button({
  href,
  type = "button",
  variant = "primary",
  children,
  className,
  onClick,
  target,
  rel,
  disabled,
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className ?? ""}`;

  if (href && !disabled) {
    if (isExternal(href)) {
      return (
        <a href={href} className={classes} target={target} rel={rel}>
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
