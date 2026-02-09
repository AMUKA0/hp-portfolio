const qualifications = [
  {
    title: "B.S. in Computer Science",
    details: "Strong foundation in algorithms, systems, and software design.",
  },
  {
    title: "Cloud and Data Engineering Certifications",
    details: "Hands-on capability with cloud infrastructure and data platforms.",
  },
  {
    title: "Agile Product Delivery Experience",
    details: "Experienced in iterative delivery, planning, and stakeholder alignment.",
  },
];

export default function QualificationsPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Qualifications</p>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Education and credentials
        </h2>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {qualifications.map((qualification) => (
          <article
            key={qualification.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
          >
            <h3 className="text-lg font-semibold text-white">{qualification.title}</h3>
            <p className="mt-3 text-slate-300">{qualification.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
