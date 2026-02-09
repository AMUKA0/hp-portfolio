import { TransitionLink } from "@/components/transition-link";
import { profile } from "@/lib/profile";

const highlights = [
  {
    title: "Data Engineering",
    description:
      "Built and maintained production pipelines with Snowflake, dbt Cloud, and Apache Airflow.",
  },
  {
    title: "Software Delivery",
    description:
      "Worked in collaborative development environments using Git, Java, C#, and CI tooling.",
  },
  {
    title: "Technology Breadth",
    description:
      "Experience across cyber security, cloud, software engineering, and big data work placements.",
  },
  {
    title: "Award",
    description:
      "Best Implementation of Snowflake API at Major League Hacking (GreatUniHack).",
  },
];

export default function Home() {
  return (
    <section className="space-y-12">
      <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-end">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-700">
            {profile.name} | {profile.role}
          </p>
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Student developer portfolio focused on real engineering outcomes.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-700">
            First year Computer Science student at the University of Manchester
            with hands-on data engineering experience and technology placements
            across cyber security, cloud, and software development.
          </p>
          <div className="flex flex-wrap gap-3">
            <TransitionLink
              href="/projects"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              View Experience
            </TransitionLink>
            <TransitionLink
              href="/qualifications"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-800 transition hover:border-sky-500 hover:text-sky-700"
            >
              View Qualifications
            </TransitionLink>
          </div>
        </div>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Current Focus</p>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>{profile.focus}</li>
            <li>{profile.location}</li>
            <li>
              <a href={`mailto:${profile.email}`} className="hover:text-sky-700">
                {profile.email}
              </a>
            </li>
          </ul>
        </article>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {highlights.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}