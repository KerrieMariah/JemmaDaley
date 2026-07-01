const affiliations = [
  "St. James's Place",
  "SFC Licensed",
  "ImpactHK",
  "The Impact Collective",
  "Women of Hong Kong",
  "Outward Bound HK",
];

export default function Affiliations() {
  return (
    <section className="py-16 bg-cream border-y border-gray-100 overflow-hidden">
      <p className="section-label text-navy/40 text-center mb-10">
        Affiliated With
      </p>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...affiliations, ...affiliations].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="mx-12 font-sans text-lg md:text-xl font-bold text-black uppercase tracking-wide"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
