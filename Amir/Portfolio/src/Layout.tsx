import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Container } from "./components/Container";

const TITLES: Record<string, string> = {
  "/": "Amir Khan – Technical Product Manager & Product Analyst",
  "/about": "About – Amir Khan",
  "/case-studies": "Case Studies – Amir Khan",
  "/resume": "Resume – Amir Khan",
  "/contact": "Contact – Amir Khan",
};

function getPageTitle(pathname: string): string {
  if (pathname in TITLES) return TITLES[pathname];
  if (pathname.startsWith("/case-studies/")) return "Case Study – Amir Khan";
  return "Amir Khan – Technical Product Manager & Product Analyst";
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
