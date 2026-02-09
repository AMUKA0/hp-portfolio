const qualifications = [
  {
    title: "Computer Science Education",
    details: "Foundation in data structures, algorithms, and software architecture.",
  },
  {
    title: "Hands-on Full-Stack Practice",
    details: "Built and iterated on real projects using modern frontend and backend tooling.",
  },
  {
    title: "Data Platform Readiness",
    details: "Prepared for Snowflake-based integrations and production-oriented API workflows.",
  },
];

export default function QualificationsPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-600">Qualifications</p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Education and credibility markers
        </h2>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {qualifications.map((qualification) => (
          <article
            key={qualification.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">{qualification.title}</h3>
            <p className="mt-3 text-slate-700">{qualification.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
}