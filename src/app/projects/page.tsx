const projects = [
  {
    name: "Data Pipeline Portfolio Dashboard",
    problem: "Recruiters and peers needed a concise view of project outcomes and metrics.",
    process: "Designed modular UI sections, reusable data cards, and API-ready data boundaries.",
    stack: "Next.js, TypeScript, Tailwind CSS, Snowflake integration-ready architecture",
    result: "Created a clean portfolio that highlights both technical depth and impact quickly.",
  },
  {
    name: "Operations Workflow Tracker",
    problem: "Manual process tracking created delays and unclear ownership.",
    process: "Mapped workflow states and built a task-oriented interface with predictable state transitions.",
    stack: "React, Node.js, SQL, REST APIs",
    result: "Reduced coordination overhead and improved completion visibility.",
  },
  {
    name: "Student Success Insights Tool",
    problem: "Teams lacked a simple interface to inspect engagement and performance trends.",
    process: "Implemented dashboard composition patterns and role-aligned information hierarchy.",
    stack: "Next.js, Charting libraries, TypeScript, API adapters",
    result: "Improved decision speed with clearer, shareable metrics.",
  },
];

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-600">Projects</p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Built work and engineering process
        </h2>
        <p className="max-w-3xl text-lg leading-8 text-slate-700">
          Each project summarizes what was built, how it was built, technologies
          used, and measurable outcomes.
        </p>
      </header>

      <div className="space-y-4">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-slate-900">{project.name}</h3>
            <p className="mt-3 text-slate-700">
              <span className="font-medium text-slate-900">Problem:</span> {project.problem}
            </p>
            <p className="mt-2 text-slate-700">
              <span className="font-medium text-slate-900">Process:</span> {project.process}
            </p>
            <p className="mt-2 text-slate-700">
              <span className="font-medium text-slate-900">Stack:</span> {project.stack}
            </p>
            <p className="mt-2 text-sky-700">
              <span className="font-medium text-slate-900">Result:</span> {project.result}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}