import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sam Bardwell",
    template: "%s | Sam Bardwell",
  },
  description: "Sam Bardwell – personal site, blog, resume.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Sam Bardwell",
    description: "Personal site, blog, resume.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam Bardwell",
    description: "Personal site, blog, resume.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-zinc-900 text-white px-3 py-2 rounded"
        >
          Skip to content
        </a>
        <header className="border-b border-zinc-800">
          <Nav />
        </header>
        <main id="main" className="py-8">
          {children}
        </main>
        <footer className="mt-16 py-8 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Sam Bardwell
        </footer>
      </body>
    </html>
  );
}