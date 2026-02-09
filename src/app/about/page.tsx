const strengths = [
  "Full-stack web engineering with a focus on quality and maintainability",
  "Strong collaboration with product, design, and data teams",
  "Clear communication and ownership from planning to delivery",
];

export default function AboutPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">About</p>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Professional profile
        </h2>
        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          I am a software engineer focused on building scalable products that
          solve meaningful business problems. I value clean architecture,
          thoughtful user experience, and measurable impact.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {strengths.map((item) => (
          <article
            key={item}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-slate-200"
          >
            {item}
          </article>
        ))}
      </div>
    </section>
  );
}
