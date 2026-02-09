import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/achievements", label: "Achievements" },
  { href: "/qualifications", label: "Qualifications" },
  { href: "/tech", label: "Tech Stack" },
];

export const metadata: Metadata = {
  title: "HP Portfolio",
  description: "Portfolio website built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        <div className="relative min-h-screen overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),transparent_45%),radial-gradient(circle_at_bottom,_rgba(99,102,241,0.1),transparent_40%)]"
          />
          <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 sm:px-10">
            <header className="mb-12 flex flex-col gap-6 border-b border-slate-800 pb-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                  Harry Porter
                </p>
                <h1 className="text-xl font-semibold tracking-tight text-white">
                  Software Engineering Portfolio
                </h1>
              </div>
              <nav aria-label="Main navigation" className="flex flex-wrap gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-sky-400 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="mt-16 border-t border-slate-800 pt-6 text-sm text-slate-400">
              Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
