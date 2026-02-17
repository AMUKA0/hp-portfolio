import { profile } from "@/lib/profile";
import { Reveal } from "@/components/reveal";

const summaryPoints = [
  "First-year Computer Science (BSc) student at the University of Manchester with practical engineering experience.",
  "Built production-oriented data workflows using Snowflake, dbt Cloud, and Apache Airflow.",
  "Collaborated in team hackathon and work-placement environments across data science, quant-oriented tooling, and cyber-focused contexts.",
];

const capabilityGroups = [
  {
    title: "Data Science Foundations",
    items: [
      "Snowflake schema and staging design",
      "SQL transformation pipelines",
      "Data quality and governance checks",
    ],
  },
  {
    title: "Quant Role Alignment",
    items: [
      "CLI/data tooling design for deterministic outputs",
      "Signal and indicator-oriented workflow thinking",
      "Automation-first engineering approach",
    ],
  },
  {
    title: "Cyber and Cloud Exposure",
    items: [
      "Cyber-security concepts through structured placement work",
      "Cloud and DevOps tooling familiarity",
      "Secure data-access and credential handling awareness",
    ],
  },
];

const workingStyle = [
  {
    step: "Understand",
    details:
      "Clarify user and stakeholder needs before implementing solutions.",
  },
  {
    step: "Build",
    details:
      "Develop iteratively with maintainable code and clear handoffs between frontend, backend, and data.",
  },
  {
    step: "Validate",
    details:
      "Check outcomes against reliability, usability, and measurable impact.",
  },
];

const interests = ["Data Science", "Quant Roles", "Cyber Security"];
const placementFocus = [
  {
    track: "Data Science",
    fit: "Data pipeline foundations, analytics workflows, and insight-driven engineering.",
  },
  {
    track: "Quant Roles",
    fit: "Quant development and analysis pathway through market-style data tooling and strategy logic.",
  },
  {
    track: "Cyber Security",
    fit: "Security-aware engineering, authentication flow awareness, and secure data handling.",
  },
];

export default function AboutPage() {
  return (
    <section className="space-y-12">
      <Reveal>
        <header className="space-y-4">
          <p className="section-kicker">About</p>
          <h2 className="section-title">{profile.name}</h2>
          <p className="section-copy text-lg">
            I am building toward roles where I can combine strong engineering
            fundamentals with analytical problem solving. I am currently looking
            for placements in data science, quant roles, and cyber security.
          </p>
        </header>
      </Reveal>

      <Reveal delayMs={100}>
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <div className="surface-card rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-slate-900">Professional Summary</h3>
            <ul className="mt-4 grid gap-3 text-slate-700">
              {summaryPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                Looking For
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="accent-chip rounded-full px-3 py-1 text-xs font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <aside className="surface-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-slate-900">Placement Focus</h3>
            <p className="mt-2 text-sm text-slate-700">
              Role areas I am actively targeting and how my current skillset aligns.
            </p>
            <div className="mt-4 space-y-3">
              {placementFocus.map((item) => (
                <article key={item.track} className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.track}</p>
                  <p className="mt-1 text-sm text-slate-700">{item.fit}</p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-3">
        {capabilityGroups.map((group, idx) => (
          <Reveal key={group.title} delayMs={150 + idx * 70}>
            <article className="surface-card rounded-2xl p-5">
              <h3 className="text-lg font-semibold text-slate-900">{group.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delayMs={280}>
        <article className="surface-card rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-slate-900">How I Work</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {workingStyle.map((item) => (
              <div key={item.step} className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
                  {item.step}
                </p>
                <p className="mt-2 text-sm text-slate-700">{item.details}</p>
              </div>
            ))}
          </div>
        </article>
      </Reveal>
    </section>
  );
}
