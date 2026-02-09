import { profile } from "@/lib/profile";

const strengths = [
  "Production data pipeline delivery with Snowflake, dbt Cloud, and Apache Airflow.",
  "Cross-functional collaboration with business stakeholders to translate analytics requirements into engineering solutions.",
  "Early career experience across cyber security, software development, cloud, and big data problem solving.",
];

export default function AboutPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-600">About</p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {profile.name}
        </h2>
        <p className="max-w-3xl text-lg leading-8 text-slate-700">
          I am a first year student at the University of Manchester studying
          Computer Science (BSc). I have a long-standing interest in technology
          and I am currently exploring summer placements focused on cyber
          security and data science.
        </p>
      </header>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900">Professional Summary</h3>
        <ul className="mt-4 grid gap-3 text-slate-700">
          {strengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}