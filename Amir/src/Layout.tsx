import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Container } from "./components/Container";

const DEFAULT_TITLE = "Amir Khan – Technical Product Manager & Product Analyst";
const TITLES: Record<string, string> = {
  "/": DEFAULT_TITLE,
  "/about": "About – Amir Khan",
  "/case-studies": "Case Studies – Amir Khan",
  "/resume": "Resume – Amir Khan",
  "/contact": "Contact – Amir Khan",
};

function getPageTitle(pathname: string): string {
  return TITLES[pathname] ?? (pathname.startsWith("/case-studies/") ? "Case Study – Amir Khan" : DEFAULT_TITLE);
}

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = getPageTitle(pathname);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-bg text-fg antialiased flex flex-col">
      <Header />
      <main className="flex-1 w-full py-12 sm:py-16">
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
}
