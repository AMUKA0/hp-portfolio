const projects = [
  {
    name: "Data Intelligence Dashboard",
    summary:
      "Designed and shipped an analytics platform with role-based access and near real-time KPI monitoring.",
    stack: "Next.js, TypeScript, Tailwind, Snowflake, REST APIs",
    impact: "Reduced manual reporting by 70%.",
  },
  {
    name: "Workflow Automation Portal",
    summary:
      "Built a portal for operations teams to orchestrate recurring tasks and approvals.",
    stack: "React, Node.js, PostgreSQL, Redis",
    impact: "Cut processing time from days to hours.",
  },
  {
    name: "Customer Success Command Center",
    summary:
      "Implemented unified account views, alerting, and health scoring across multiple systems.",
    stack: "Next.js, GraphQL, Python services",
    impact: "Improved retention decision speed across CS teams.",
  },
];

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Projects</p>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Selected work
        </h2>
      </header>

      <div className="space-y-4">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
          >
            <h3 className="text-xl font-semibold text-white">{project.name}</h3>
            <p className="mt-3 text-slate-300">{project.summary}</p>
            <p className="mt-3 text-sm text-slate-400">Stack: {project.stack}</p>
            <p className="mt-2 text-sm font-medium text-sky-300">{project.impact}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
