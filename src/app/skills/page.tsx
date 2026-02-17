import { Reveal } from "@/components/reveal";

const skillGroups = [
  {
    title: "Programming",
    items: ["Python", "C++", "JavaScript", "SQL", "Bash"],
  },
  {
    title: "Data and Cloud",
    items: ["Snowflake", "Apache Airflow", "dbt Cloud", "Azure DevOps"],
  },
  {
    title: "Engineering Workflow",
    items: ["Git", "CI/CD", "Data Pipeline Development", "Data Quality Automation"],
  },
];

const skillSignals = [
  { name: "Snowflake + SQL", rank: 4 },
  { name: "Full-Stack Web", rank: 3 },
  { name: "Data Pipelines", rank: 4 },
  { name: "CI/CD", rank: 4 },
  { name: "CS Foundations", rank: 4 },
  { name: "Data Analytics", rank: 3 },
  { name: "Python", rank: 3.5 },
];

const engineeringDisplay = [
  "pipeline.health = stable",
  "deployment.mode = iterative",
  "data.quality_checks = automated",
  "market_data = cURLed",
  "focus.domains = [data_science, quant, cyber]",
];

export default function SkillsPage() {
  return (
    <section className="space-y-10">
      <Reveal>
        <header className="space-y-4">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">
            Technical skills from CV
          </h2>
          <p className="section-copy text-lg">
            Core technologies and engineering practices used in work placements
            and project delivery, aligned to data science, quant roles, and
            cyber security pathways.
          </p>
        </header>
      </Reveal>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
        <Reveal delayMs={70}>
          <article className="surface-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-slate-900">Technical Signal</h3>
            <p className="mt-2 text-sm text-slate-700">
              Ranked confidence across key placement-relevant capabilities.
            </p>
            <div className="mt-4 space-y-3">
              {skillSignals.map((signal) => (
                <div key={signal.name} className="space-y-1">
                  <div className="flex items-center justify-between text-sm text-slate-700">
                    <span>{signal.name}</span>
                    <span className="font-semibold text-slate-900">{signal.rank}/5</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${(signal.rank / 5) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>
        </Reveal>

        <Reveal delayMs={130}>
          <article className="surface-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-slate-900">Engineering Console</h3>
            <p className="mt-2 text-sm text-slate-700">
              Live profile snapshot styled as a technical status panel.
            </p>
            <div className="mt-4 rounded-xl border border-slate-200 bg-slate-950 p-4 font-mono text-xs text-slate-200">
              {engineeringDisplay.map((line) => (
                <p key={line} className="leading-6">
                  <span className="text-sky-300">$</span> {line}
                </p>
              ))}
            </div>
          </article>
        </Reveal>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {skillGroups.map((group, idx) => (
          <Reveal key={group.title} delayMs={200 + idx * 70}>
            <article className="surface-card rounded-2xl p-5">
              <h3 className="text-lg font-semibold text-slate-900">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-slate-700">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
