import { ContactIntake } from "@/components/contact-intake";
import { profile } from "@/lib/profile";
import { Reveal } from "@/components/reveal";

export default function ContactPage() {
  return (
    <section className="space-y-8">
      <Reveal>
        <header className="space-y-4">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">
            Recruiter and hiring manager contact
          </h2>
          <p className="section-copy text-lg">
            Open to summer placements across cyber security, software
            development, and data science.
          </p>
        </header>
      </Reveal>

      <div className="grid gap-4 lg:grid-cols-[1fr_1.08fr]">
        <Reveal delayMs={70}>
          <article className="surface-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-slate-900">Direct channels</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>
                Email: <a className="interactive-link hover:text-sky-700" href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                LinkedIn: <a className="interactive-link hover:text-sky-700" href={profile.linkedin} target="_blank" rel="noopener noreferrer">{profile.linkedin.replace("https://", "")}</a>
              </li>
              <li>Location: {profile.location}</li>
            </ul>

            <div className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-800">
                Recruiter Notes
              </p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>Preferred opportunities: Cyber Security, Software Development, Data Science</li>
                <li>Typical response time: within 48 hours</li>
                <li>Resume and profile links are available directly on this site</li>
              </ul>
            </div>
          </article>
        </Reveal>

        <Reveal delayMs={140}>
          <div className="space-y-4">
            <ContactIntake />
            <article className="surface-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-slate-900">Resume</h3>
              <p className="mt-3 text-slate-700">
                Download my latest CV.
              </p>
              <a
                href={profile.resumeFile}
                download
                className="interactive-button mt-4 inline-flex rounded-full bg-sky-800 px-5 py-2 text-sm font-semibold text-white hover:bg-sky-700"
              >
                Download Hector-Pearson-CV.pdf
              </a>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
