import { profile } from "@/lib/profile";

export default function ContactPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-600">Contact</p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Recruiter and hiring manager contact
        </h2>
        <p className="max-w-3xl text-lg leading-8 text-slate-700">
          Open to summer technology placements with a focus on cyber security
          and data science.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Direct channels</h3>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>
              Email: <a className="hover:text-sky-700" href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              Phone: <a className="hover:text-sky-700" href={`tel:${profile.phone}`}>{profile.phone}</a>
            </li>
            <li>
              LinkedIn: <a className="hover:text-sky-700" href={profile.linkedin} target="_blank" rel="noopener noreferrer">{profile.linkedin.replace("https://", "")}</a>
            </li>
            <li>Location: {profile.location}</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Resume</h3>
          <p className="mt-3 text-slate-700">
            Download my latest CV.
          </p>
          <a
            href={profile.resumeFile}
            download
            className="mt-4 inline-flex rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Download Hector-Pearson-CV.pdf
          </a>
        </article>
      </div>
    </section>
  );
}