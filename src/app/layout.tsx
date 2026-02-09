import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteNav } from "@/components/site-nav";
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
  title: "Harry Porter | Developer Portfolio",
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
        <div className="relative min-h-screen overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.12),transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.08),transparent_44%)]"
          />
          <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 sm:px-10">
            <header className="mb-12 border-b border-slate-200 pb-6">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-600">
                    Harry Porter
                  </p>
                  <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Student Software Developer Portfolio
                  </h1>
                  <p className="max-w-2xl text-sm text-slate-600">
                    Built to support job applications with clear project evidence,
                    technical depth, and recruiter-friendly navigation.
                  </p>
                </div>
                <SiteNav />
              </div>
            </header>

            <main className="flex-1">{children}</main>

            <footer className="mt-16 flex flex-col gap-2 border-t border-slate-200 pt-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
              <p>Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.</p>
              <a
                href="/resume-dummy.txt"
                download
                className="font-medium text-slate-900 underline underline-offset-4 transition hover:text-sky-700"
              >
                Download Resume (Dummy)
              </a>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}