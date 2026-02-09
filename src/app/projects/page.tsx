const experiences = [
  {
    title: "Data Engineer",
    organization: "Aviva",
    period: "06/2025 - 09/2025",
    location: "Norwich",
    stack: "Snowflake, dbt Cloud, Apache Airflow, SQL",
    points: [
      "Maintained data pipelines in the Motor Insurance team.",
      "Built a standardized data quality checking system used across pipelines to improve governance and data cleanliness.",
      "Translated business analytical requirements into actionable data engineering solutions with stakeholders.",
      "Optimized dbt model transformations to improve scalability and downstream analytics speed.",
    ],
  },
  {
    title: "Continuous Software Development Work Experience",
    organization: "University of Cambridge",
    period: "08/2022 - 08/2022",
    location: "Cambridge",
    stack: "Git, Java, Jenkins, C#",
    points: [
      "Developed software engineering skills while working in a collaborative development team.",
      "Achieved Bronze place in the Cambridge Computer Science Competition with a team C# entry.",
      "Improved coding practices through peer review and continuous integration workflows.",
    ],
  },
  {
    title: "Technology Work Experience",
    organization: "Aviva",
    period: "08/2022 - 08/2022",
    location: "Norwich",
    stack: "Cyber Security, Cloud, Software Development",
    points: [
      "Completed structured training in cyber security, cloud computing, and software development.",
      "Shadowed teams and scrum masters across UK and India based functions.",
      "Delivered a technical IoT presentation to directors and divisional leads.",
    ],
  },
  {
    title: "Big Data Work Experience",
    organization: "DigData",
    period: "02/2022 - 03/2022",
    location: "London",
    stack: "Data Analysis, Pattern Discovery",
    points: [
      "Learned pattern discovery techniques for large datasets.",
      "Applied analysis to identify theoretically optimal ice cream stall locations from training scenarios.",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-600">Projects and Experience</p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          What I have built and delivered
        </h2>
        <p className="max-w-3xl text-lg leading-8 text-slate-700">
          This section maps CV experience into recruiter-friendly evidence of
          engineering process, technologies used, and measurable impact.
        </p>
      </header>

      <div className="space-y-4">
        {experiences.map((item) => (
          <article
            key={`${item.title}-${item.organization}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-1 text-sm text-slate-600">
              {item.organization} | {item.period} | {item.location}
            </p>
            <p className="mt-3 text-sm text-slate-700">
              <span className="font-medium text-slate-900">Technologies:</span> {item.stack}
            </p>
            <ul className="mt-4 space-y-2 text-slate-700">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}