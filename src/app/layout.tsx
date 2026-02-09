import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ScrollProgress } from "@/components/scroll-progress";
import { SiteNav } from "@/components/site-nav";
import { profile } from "@/lib/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} | Developer Portfolio`,
  description:
    "Professional student developer portfolio showcasing projects, process, skills, and measurable impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-50 text-slate-900 antialiased`}
      >
        <ScrollProgress />
        <div className="relative min-h-screen overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:34px_34px] opacity-35"
          />
          <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 sm:px-10">
            <header className="sticky top-4 z-40 mb-12 rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-4 backdrop-blur">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-2">
                  <p className="section-kicker">
                    {profile.name}
                  </p>
                  <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                    {profile.role} Portfolio
                  </h1>
                  <p className="max-w-2xl text-sm text-slate-700">
                    Built to support job applications with clear project evidence,
                    technical depth, and recruiter-friendly navigation.
                  </p>
                </div>
                <SiteNav />
              </div>
            </header>

            <main className="flex-1">{children}</main>

            <footer className="mt-16 flex flex-col gap-2 border-t border-slate-300 pt-6 text-sm text-slate-700 sm:flex-row sm:items-center sm:justify-between">
              <p>Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.</p>
              <a
                href={profile.resumeFile}
                download
                className="interactive-link font-semibold text-sky-800 underline underline-offset-4 hover:text-sky-700"
              >
                Download Resume (PDF)
              </a>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
