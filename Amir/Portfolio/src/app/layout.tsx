import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const siteUrl = "https://amir-khan-product.com";
const siteTitle =
  "Amir Khan – Technical Product Manager & Product Analyst";
const siteDescription =
  "Technical Product Manager and Product Analyst in London with experience across AI recruitment SaaS, Azure migration, IoT product launches.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    type: "website",
    siteName: "Amir Khan – Product",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amir Khan – Technical Product Manager & Product Analyst"
      }
    ]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `
          }}
        />
      </head>
      <body className="min-h-screen bg-bg text-fg antialiased flex flex-col">
        <Header />
        <main className="flex-1 w-full py-12 sm:py-16">
          <Container>{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
