export default function ContactPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-600">Contact</p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Recruiter and hiring manager contact
        </h2>
        <p className="max-w-3xl text-lg leading-8 text-slate-700">
          Use this page as a quick handoff point for interviews, follow-ups,
          and portfolio review requests.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Direct channels</h3>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>Email: your.email@example.com</li>
            <li>LinkedIn: linkedin.com/in/your-profile</li>
            <li>GitHub: github.com/your-handle</li>
            <li>Location: United States</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Resume</h3>
          <p className="mt-3 text-slate-700">
            Download the current placeholder resume link. Replace this file with
            your production resume before sharing broadly.
          </p>
          <a
            href="/resume-dummy.txt"
            download
            className="mt-4 inline-flex rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Download Resume (Dummy)
          </a>
        </article>
      </div>
    </section>
  );
}