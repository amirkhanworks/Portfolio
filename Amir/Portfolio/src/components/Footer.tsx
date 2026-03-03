import { Link } from "react-router-dom";
import { Container } from "@/components/Container";

const footerLinks = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer
      className="border-t border-[var(--border)] bg-[var(--card)]"
      role="contentinfo"
      aria-label="Site footer"
    >
      <Container className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-small text-[var(--muted-fg)]">
          © {new Date().getFullYear()} Amir Khan.
        </p>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            {footerLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  to={href}
                  className="text-small text-[var(--muted-fg)] hover:text-[var(--accent)] focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
