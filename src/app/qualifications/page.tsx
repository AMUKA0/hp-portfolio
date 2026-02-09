const qualifications = [
  {
    title: "Bachelor of Science, Computer Science",
    details: "University of Manchester | Expected 06/2028 | 87% average",
  },
  {
    title: "A-level",
    details: "Wymondham High Academy | Computer Science (A), Mathematics (A), Physics (B) | 2023",
  },
  {
    title: "GCSE",
    details: "Wymondham High Academy | Five grade 9s and six grade 8s",
  },
  {
    title: "Award",
    details: "Best Implementation of Snowflake API | Major League Hacking (GreatUniHack) | 09/11/2025",
  },
];

export default function QualificationsPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-600">Qualifications</p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Education and awards
        </h2>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
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