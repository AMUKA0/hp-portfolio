const skillGroups = [
  {
    title: "Frontend",
    items: ["Next.js App Router", "React 19", "TypeScript", "Tailwind CSS v4"],
  },
  {
    title: "Backend and Data",
    items: ["REST API integration", "Node.js", "SQL fundamentals", "Snowflake-ready design"],
  },
  {
    title: "Engineering Practices",
    items: ["Git workflow", "ESLint", "Component architecture", "Technical documentation"],
  },
];

export default function SkillsPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-600">Skills</p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Technical toolkit
        </h2>
        <p className="max-w-3xl text-lg leading-8 text-slate-700">
          Skills are organized for quick recruiter review and aligned to how I build,
          integrate, and ship software.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">{group.title}</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}