"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/Container";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--card)]/80 backdrop-blur-md supports-[backdrop-filter]:bg-[var(--card)]/70"
      role="banner"
      aria-label="Main navigation"
    >
      <Container className="flex items-center justify-between py-3 sm:py-4">
        <Link
          href="/"
          className="text-label font-semibold tracking-tight text-[var(--fg)] hover:text-[var(--accent)] focus-visible:rounded-md"
        >
          Amir Khan
        </Link>
        <nav className="flex items-center gap-1 sm:gap-6" aria-label="Primary">
          <ul className="flex items-center gap-1 sm:gap-6">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative px-2 py-1.5 text-label font-medium transition-colors focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] ${
                      isActive
                        ? "text-[var(--fg)]"
                        : "text-[var(--muted-fg)] hover:text-[var(--fg)]"
                    }`}
                  >
                    {item.label}
                    {isActive ? (
                      <span
                        className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-[var(--accent)]"
                        aria-hidden
                      />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
        </nav>
      </Container>
    </header>
  );
}
