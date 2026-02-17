import { TransitionLink } from "@/components/transition-link";
import { Reveal } from "@/components/reveal";
import { profile } from "@/lib/profile";

const highlights = [
  {
    title: "Data Science Pipeline Work",
    description:
      "Built and maintained production data pipelines with Snowflake, dbt Cloud, and Apache Airflow for analytics-ready outputs.",
  },
  {
    title: "Quant-Oriented Engineering",
    description:
      "Developed tools and workflows aligned with quant development and quant analysis pathways.",
  },
  {
    title: "Cyber Security Exposure",
    description:
      "Gained practical cyber-security and cloud exposure through structured placements and team projects.",
  },
  {
    title: "Award",
    description:
      "Best Implementation of Snowflake API at Major League Hacking (GreatUniHack).",
  },
];

export default function Home() {
  const focusAreas = profile.focus.split(",").map((item) => item.trim());
  const techRibbon = [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Snowflake",
    "dbt Cloud",
    "Apache Airflow",
    "Python",
    "CI/CD",
    "Azure DevOps",
    "SQL",
  ];

  return (
    <section className="space-y-14">
      <Reveal>
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-end">
          <div className="space-y-6">
            <p className="section-kicker">
              {profile.name} | {profile.role}
            </p>
            <h2 className="section-title max-w-3xl">
              Student developer portfolio focused on real engineering outcomes.
            </h2>
            <p className="section-copy text-lg">
              First year Computer Science student at the University of Manchester
              with hands-on data engineering experience and technology placements
              across data science, quant-oriented development, and cyber security.
            </p>
            <div className="flex flex-wrap gap-3">
              <TransitionLink
                href="/experience"
                className="interactive-button rounded-full bg-sky-800 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(3,105,161,0.28)] hover:bg-sky-700"
              >
                View Experience
              </TransitionLink>
              <TransitionLink
                href="/projects"
                className="interactive-button rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:border-sky-500 hover:bg-sky-50 hover:text-sky-800"
              >
                View Projects
              </TransitionLink>
            </div>
          </div>

          <article className="surface-card rounded-2xl p-6">
            <p className="section-kicker">Current Focus</p>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>
                <div className="flex flex-wrap gap-2">
                  {focusAreas.map((area) => (
                    <span
                      key={area}
                      className="accent-chip rounded-full px-3 py-1 text-xs font-semibold"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </li>
              <li className="font-medium text-slate-800">{profile.location}</li>
              <li>
                <a href={`mailto:${profile.email}`} className="interactive-link hover:text-sky-700">
                  {profile.email}
                </a>
              </li>
            </ul>
          </article>
        </div>
      </Reveal>

      <Reveal delayMs={90}>
        <div className="surface-card tech-ribbon overflow-hidden rounded-2xl py-3">
          <div className="tech-ribbon-track flex w-max gap-3 px-3">
            {[...techRibbon, ...techRibbon].map((item, idx) => (
              <span
                key={`${item}-${idx}`}
                className="rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-xs font-semibold text-sky-900"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {highlights.map((item, idx) => (
          <Reveal key={item.title} delayMs={idx * 70}>
            <article className="surface-card rounded-2xl p-5">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
