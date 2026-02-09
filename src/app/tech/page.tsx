const technologies = [
  {
    category: "Frontend",
    items: ["Next.js App Router", "React 19", "TypeScript", "Tailwind CSS v4"],
  },
  {
    category: "Data and APIs",
    items: ["Snowflake", "REST APIs", "API integration patterns"],
  },
  {
    category: "Engineering",
    items: ["ESLint", "Git workflow", "Modular architecture"],
  },
];

export default function TechPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Tech Stack</p>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Technologies used in this portfolio
        </h2>
        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          This site is intentionally lightweight and maintainable, with a clean
          separation of presentation, content, and future data integration.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {technologies.map((group) => (
          <article
            key={group.category}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
          >
            <h3 className="text-lg font-semibold text-white">{group.category}</h3>
            <ul className="mt-4 space-y-2 text-slate-300">
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
