"use client";

import { usePathname } from "next/navigation";
import { TransitionLink } from "@/components/transition-link";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
  { href: "/qualifications", label: "Qualifications" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className="flex flex-wrap gap-2">
      {navigation.map((item) => {
        const isActive = pathname === item.href;

        return (
          <TransitionLink
            key={item.href}
            href={item.href}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              isActive
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-300 bg-white text-slate-700 hover:border-sky-500 hover:text-sky-700"
            }`}
          >
            {item.label}
          </TransitionLink>
        );
      })}

      <a
        href="/resume-dummy.txt"
        download
        className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-500 hover:text-sky-700"
      >
        Resume
      </a>
    </nav>
  );
}