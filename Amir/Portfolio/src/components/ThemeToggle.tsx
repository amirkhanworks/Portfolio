import { useEffect, useState } from "react";

function getTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme") as "light" | "dark" | null;
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setTheme(theme: "light" | "dark") {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}

export function ThemeToggle() {
  const [theme, setThemeState] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = getTheme();
    setThemeState(t);
    setTheme(t);
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setThemeState(next);
    setTheme(next);
  };

  if (!mounted) {
    return (
      <span
        className="inline-block h-8 w-14 rounded-full border border-[var(--border)] bg-[var(--muted)]"
        aria-hidden
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className="inline-flex h-8 w-14 items-center rounded-full border border-[var(--border)] bg-[var(--muted)] p-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
    >
      <span
        className={`h-6 w-6 rounded-full bg-[var(--card)] shadow-[var(--shadow-sm)] transition-transform ${
          theme === "dark" ? "translate-x-6" : "translate-x-0"
        }`}
        aria-hidden
      />
    </button>
  );
}
