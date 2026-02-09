import Link from "next/link";

const highlightStats = [
  { label: "Projects Completed", value: "12+" },
  { label: "Years in Software", value: "5" },
  { label: "Certifications", value: "6" },
  { label: "Core Technologies", value: "15+" },
];

export default function Home() {
  return (
    <section className="space-y-12">
      <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-end">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-300">
            Engineer | Builder | Collaborator
          </p>
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            I build reliable, human-centered software products.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            This portfolio highlights my professional projects, measurable
            achievements, technical qualifications, and the modern stack used
            to build this site.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-sky-400 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-300"
            >
              View Projects
            </Link>
            <Link
              href="/qualifications"
              className="rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-sky-400"
            >
              See Qualifications
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Current Focus
          </p>
          <ul className="mt-4 space-y-3 text-slate-200">
            <li>Building full-stack data-driven applications</li>
            <li>Designing robust API integrations</li>
            <li>Delivering clean and maintainable UI systems</li>
          </ul>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {highlightStats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5"
          >
            <p className="text-sm text-slate-400">{stat.label}</p>
            <p className="mt-2 text-3xl font-semibold text-white">{stat.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
