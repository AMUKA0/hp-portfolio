import { Reveal } from "@/components/reveal";
import { TransitionLink } from "@/components/transition-link";
import { projectTemplate, projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <Reveal>
        <header className="space-y-4">
          <p className="section-kicker">Projects</p>
          <h2 className="section-title">
            {projects.length > 0 ? "Project examples" : "Project examples coming soon"}
          </h2>
          <p className="section-copy text-lg">
            {projects.length > 0
              ? "Dedicated project write-ups with architecture, implementation details, and measurable outcomes."
              : "This section is reserved for dedicated project write-ups with code links, architecture diagrams, and measurable outcomes."}
          </p>
        </header>
      </Reveal>

      {projects.length === 0 ? (
        <Reveal delayMs={90}>
          <article className="surface-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-slate-900">Current Status</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>No standalone project case studies published yet.</li>
              <li>Experience details are available on the Experience page.</li>
              <li>Project documentation and repositories will be added next.</li>
            </ul>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Project Entry Template</p>
              <p className="mt-2 text-sm text-slate-700">
                Add entries in <code>src/lib/projects.ts</code> using the
                <code> ProjectEntry</code> type.
              </p>
              <pre className="mt-3 overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700">
{`{
  slug: "${projectTemplate.slug}",
  title: "${projectTemplate.title}",
  summary: "${projectTemplate.summary}",
  problem: "${projectTemplate.problem}",
  approach: "${projectTemplate.approach}",
  impact: "${projectTemplate.impact}",
  stack: ["${projectTemplate.stack.join('", "')}"],
  githubUrl: "${projectTemplate.githubUrl}",
  liveUrl: "${projectTemplate.liveUrl}"
}`}
              </pre>
            </div>

            <TransitionLink
              href="/experience"
              className="interactive-button mt-5 inline-flex rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-800 hover:border-sky-500 hover:bg-sky-50 hover:text-sky-800"
            >
              View Experience Instead
            </TransitionLink>
          </article>
        </Reveal>
      ) : (
        <div className="space-y-4">
          {projects.map((project, idx) => (
            <Reveal key={project.slug} delayMs={idx * 70}>
              <article className="surface-card relative rounded-2xl p-6">
                {project.awardLabel ? (
                  <span className="project-winner-stripe mb-4 inline-flex rounded-md px-4 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                    {project.awardLabel}
                  </span>
                ) : null}
                <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                <p className="mt-2 text-slate-700">{project.summary}</p>
                <p className="mt-3 text-sm text-slate-700">
                  <span className="font-semibold text-slate-900">Problem:</span> {project.problem}
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  <span className="font-semibold text-slate-900">Approach:</span> {project.approach}
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  <span className="font-semibold text-slate-900">Impact:</span> {project.impact}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="accent-chip rounded-full px-3 py-1 text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.devpostUrl ? (
                    <a
                      href={project.devpostUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive-button rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-800 hover:border-sky-500 hover:bg-sky-50 hover:text-sky-800"
                    >
                      Devpost
                    </a>
                  ) : null}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive-button rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-800 hover:border-sky-500 hover:bg-sky-50 hover:text-sky-800"
                    >
                      GitHub
                    </a>
                  ) : null}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive-button rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-800 hover:border-sky-500 hover:bg-sky-50 hover:text-sky-800"
                    >
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
