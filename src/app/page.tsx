import { TransitionLink } from "@/components/transition-link";

const portfolioGoals = [
  {
    title: "What I Have Built",
    description:
      "Production-focused applications with clear business outcomes and maintainable architecture.",
  },
  {
    title: "How I Work",
    description:
      "Plan clearly, build iteratively, communicate early, and ship with testing and documentation.",
  },
  {
    title: "Technologies Used",
    description:
      "Modern JavaScript stack with strong TypeScript practices, UI systems, and API integrations.",
  },
  {
    title: "Impact and Results",
    description:
      "Projects measured by speed improvements, quality gains, and better user outcomes.",
  },
];

export default function Home() {
  return (
    <section className="space-y-12">
      <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-end">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-700">
            Student Developer | Portfolio Overview
          </p>
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Professional portfolio built for recruiters, engineers, and hiring teams.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-700">
            This site is focused on clarity: projects, technical process, skills,
            qualifications, and concrete impact from the software I build.
          </p>
          <div className="flex flex-wrap gap-3">
            <TransitionLink
              href="/projects"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Explore Projects
            </TransitionLink>
            <TransitionLink
              href="/skills"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-800 transition hover:border-sky-500 hover:text-sky-700"
            >
              View Skills
            </TransitionLink>
          </div>
        </div>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Job Search Focus</p>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>Recruiter-friendly structure</li>
            <li>Minimal and readable presentation</li>
            <li>Evidence-based project outcomes</li>
          </ul>
        </article>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {portfolioGoals.map((goal) => (
          <article
            key={goal.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">{goal.title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">{goal.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}