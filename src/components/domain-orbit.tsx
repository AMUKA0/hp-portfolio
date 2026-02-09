export function DomainOrbit() {
  const domains = [
    { label: "Cyber Security", position: "top-4 left-1/2 -translate-x-1/2" },
    { label: "Software Dev", position: "bottom-8 left-8" },
    { label: "Data Science", position: "bottom-8 right-8" },
  ];

  return (
    <div className="surface-card relative h-72 rounded-2xl p-6">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="orbit-ring h-52 w-52 rounded-full border border-sky-200/80" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="orbit-ring orbit-delay h-36 w-36 rounded-full border border-sky-100" />
      </div>

      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-sky-300 bg-sky-50 px-4 py-2 text-center shadow-sm">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-sky-700">
          Placement Focus
        </p>
        <p className="text-sm font-bold text-slate-900">Summer 2026</p>
      </div>

      {domains.map((domain) => (
        <div
          key={domain.label}
          className={`absolute ${domain.position} orbit-node rounded-full border border-sky-300 bg-white px-3 py-1 text-xs font-semibold text-sky-900 shadow-sm`}
        >
          {domain.label}
        </div>
      ))}
    </div>
  );
}
