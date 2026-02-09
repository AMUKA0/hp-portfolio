const workStyle = [
  "Break requirements into small, testable deliveries.",
  "Document architecture decisions and tradeoffs.",
  "Prioritize maintainable code and predictable UI behavior.",
  "Use feedback loops with teammates and stakeholders.",
];

export default function AboutPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-600">About</p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          How I approach software engineering
        </h2>
        <p className="max-w-3xl text-lg leading-8 text-slate-700">
          I am a student developer focused on building software that is useful,
          understandable, and measurable. My work emphasizes delivery quality,
          collaboration, and engineering discipline.
        </p>
      </header>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900">Engineering Process</h3>
        <ul className="mt-4 grid gap-3 text-slate-700">
          {workStyle.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}