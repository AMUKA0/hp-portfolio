import { Reveal } from "@/components/reveal";

const experiences = [
  {
    title: "Computer Science Department Leadership Student Representative",
    organization: "The University of Manchester",
    period: "11/2025 - Present",
    location: "Manchester, England, United Kingdom",
    stack: "Student Leadership, Communication, Stakeholder Management",
    points: [
      "Volunteering as an undergraduate student representative in the Department Leadership Committee.",
      "Identifying student queries, questions, and suggestions and presenting them to department leadership in meetings.",
    ],
  },
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

export default function ExperiencePage() {
  return (
    <section className="space-y-8">
      <Reveal>
        <header className="space-y-4">
          <p className="section-kicker">Experience</p>
          <h2 className="section-title">Professional and placement experience</h2>
          <p className="section-copy text-lg">
            Real-world work experience across data engineering, software
            development, cyber security exposure, and analytics problem solving.
          </p>
        </header>
      </Reveal>

      <div className="space-y-4">
        {experiences.map((item, idx) => (
          <Reveal key={`${item.title}-${item.organization}`} delayMs={idx * 70}>
            <article className="surface-card rounded-2xl p-6">
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-600">
                <span className="font-semibold text-slate-700">{item.organization}</span> | {item.period} | {item.location}
              </p>
              <p className="mt-3 text-sm text-slate-700">
                <span className="font-semibold text-slate-900">Technologies:</span>{" "}
                <span className="accent-chip rounded-full px-3 py-1 text-xs font-semibold">
                  {item.stack}
                </span>
              </p>
              <ul className="mt-4 space-y-2 text-slate-700">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
