"use client";

import { usePathname } from "next/navigation";
import { TransitionLink } from "@/components/transition-link";
import { profile } from "@/lib/profile";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
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
            className={`interactive-button rounded-full border px-4 py-2 text-sm font-semibold ${
              isActive
                ? "border-sky-800 bg-sky-800 text-white shadow-[0_6px_16px_rgba(3,105,161,0.28)]"
                : "border-slate-300 bg-white text-slate-700 hover:border-sky-500 hover:bg-sky-50 hover:text-sky-800"
            }`}
          >
            {item.label}
          </TransitionLink>
        );
      })}

      <a
        href={profile.resumeFile}
        download
        className="interactive-button rounded-full border border-sky-700 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-900 hover:border-sky-600 hover:bg-sky-100"
      >
        Resume
      </a>
    </nav>
  );
}
