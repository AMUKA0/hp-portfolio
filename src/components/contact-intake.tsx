"use client";

import { useMemo, useState } from "react";
import { profile } from "@/lib/profile";

const opportunities = [
  "Cyber Security Placement",
  "Software Development Placement",
  "Data Science Placement",
  "General Recruiter Inquiry",
];

export function ContactIntake() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [opportunity, setOpportunity] = useState(opportunities[0]);
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`${opportunity} | ${name || "Recruiter"}`);
    const body = encodeURIComponent(
      `Recruiter Name: ${name || "N/A"}\nRecruiter Email: ${email || "N/A"}\nOpportunity Type: ${opportunity}\n\nMessage:\n${message || "Please share role details and expected next steps."}`,
    );

    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }, [email, message, name, opportunity]);

  return (
    <article className="surface-card rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-slate-900">Quick Inquiry</h3>
      <p className="mt-2 text-sm text-slate-700">
        Share role details and open a prefilled email draft in one click.
      </p>

      <form className="mt-5 grid gap-3">
        <label className="grid gap-1 text-sm font-medium text-slate-800">
          Recruiter Name
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-sky-600"
            placeholder="Jane Smith"
          />
        </label>

        <label className="grid gap-1 text-sm font-medium text-slate-800">
          Recruiter Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-sky-600"
            placeholder="jane@company.com"
          />
        </label>

        <label className="grid gap-1 text-sm font-medium text-slate-800">
          Opportunity Type
          <select
            value={opportunity}
            onChange={(event) => setOpportunity(event.target.value)}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-sky-600"
          >
            {opportunities.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-1 text-sm font-medium text-slate-800">
          Message
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={4}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-sky-600"
            placeholder="Role details, expected start date, and interview process..."
          />
        </label>

        <a
          href={mailtoHref}
          className="interactive-button mt-2 inline-flex items-center justify-center rounded-full bg-sky-800 px-5 py-2 text-sm font-semibold text-white hover:bg-sky-700"
        >
          Open Prefilled Email
        </a>
      </form>
    </article>
  );
}
