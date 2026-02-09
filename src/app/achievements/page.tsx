const achievements = [
  "Led migration of a legacy reporting suite to a modern cloud-based analytics platform.",
  "Established frontend standards that reduced UI regressions across releases.",
  "Mentored junior engineers through onboarding and delivery cycles.",
  "Consistently delivered high-priority features within target timelines.",
];

export default function AchievementsPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Achievements</p>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Outcomes and impact
        </h2>
      </header>

      <ul className="grid gap-4">
        {achievements.map((item) => (
          <li
            key={item}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-slate-200"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
