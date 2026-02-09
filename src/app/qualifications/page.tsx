import { Reveal } from "@/components/reveal";

const qualifications = [
  {
    type: "Education",
    title: "Bachelor of Science, Computer Science",
    details: "University of Manchester",
    meta: "Expected 06/2028 | 87% average",
  },
  {
    type: "Education",
    title: "A-level",
    details: "Wymondham High Academy",
    meta: "Computer Science (A), Mathematics (A), Physics (B) | 2023",
  },
  {
    type: "Education",
    title: "GCSE",
    details: "Wymondham High Academy",
    meta: "Five grade 9s and six grade 8s",
  },
  {
    type: "Award",
    title: "Award",
    details: "Best Implementation of Snowflake API",
    meta: "Major League Hacking (GreatUniHack) | 09/11/2025",
  },
];

const focusTracks = ["Cyber Security", "Software Development", "Data Science"];

export default function QualificationsPage() {
  return (
    <section className="space-y-10">
      <Reveal>
        <header className="space-y-4">
          <p className="section-kicker">Qualifications</p>
          <h2 className="section-title">
            Education and awards
          </h2>
          <p className="section-copy text-lg">
            Academic performance, technical recognition, and specialization
            areas aligned to placement roles.
          </p>
        </header>
      </Reveal>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
        <div className="surface-card rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-slate-900">Credentials Overview</h3>
          <div className="mt-5 grid gap-3">
            {qualifications.map((qualification, idx) => (
              <Reveal key={qualification.title} delayMs={idx * 60}>
                <article className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">
                    {qualification.type}
                  </p>
                  <h4 className="mt-1 text-base font-semibold text-slate-900">{qualification.title}</h4>
                  <p className="mt-1 text-sm font-medium text-slate-700">{qualification.details}</p>
                  <p className="mt-1 text-sm text-slate-600">{qualification.meta}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Reveal delayMs={80}>
            <article className="surface-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-slate-900">Target Domains</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {focusTracks.map((item) => (
                  <span
                    key={item}
                    className="accent-chip rounded-full px-3 py-1 text-xs font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
          <Reveal delayMs={140}>
            <article className="surface-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-slate-900">Portfolio Strength</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>Data engineering delivery in production settings</li>
                <li>Cross-functional collaboration and communication</li>
                <li>Award-backed implementation quality</li>
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
