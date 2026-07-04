import Image from "next/image";

const affiliations = [
  {
    name: "St. James's Place",
    src: "/logos/stjamesplace.png",
    className: "h-20 w-40",
  },
  {
    name: "ImpactHK",
    src: "/logos/impacth.png",
    className: "h-20 w-52",
  },
  {
    name: "Outward Bound Hong Kong",
    src: "/logos/outwardbound.png",
    className: "h-24 w-44",
  },
  {
    name: "Women of Hong Kong",
    src: "/logos/wohk.jpeg",
    className: "h-20 w-56",
  },
];

export default function Affiliations() {
  return (
    <section className="overflow-hidden border-y border-gray-100 bg-cream py-16">
      <p className="section-label mb-10 text-center text-navy/40">
        Affiliated With
      </p>
      <div className="relative">
        <div className="flex w-max animate-marquee items-center">
          {[0, 1].map((group) => (
            <div
              key={group}
              className="flex min-w-screen shrink-0 items-center justify-around gap-12 px-8"
              aria-hidden={group === 1}
            >
              {affiliations.map((logo) => (
                <div
                  key={`${logo.name}-${group}`}
                  className="flex h-28 w-64 shrink-0 items-center justify-center"
                >
                  <div className={`relative ${logo.className}`}>
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      className="object-contain"
                      sizes="256px"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cream to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-cream to-transparent"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
