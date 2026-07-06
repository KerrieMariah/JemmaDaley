import Image from "next/image";

const affiliations = [
  {
    name: "St. James's Place",
    src: "/logos/stjamesplace.png",
    className: "h-14 w-32 sm:h-20 sm:w-40",
  },
  {
    name: "ImpactHK",
    src: "/logos/impacth.png",
    className: "h-14 w-36 sm:h-20 sm:w-52",
  },
  {
    name: "Outward Bound Hong Kong",
    src: "/logos/outwardbound.png",
    className: "h-16 w-36 sm:h-24 sm:w-44",
  },
  {
    name: "Women of Hong Kong",
    src: "/logos/wohk.jpeg",
    className: "h-14 w-40 sm:h-20 sm:w-56",
  },
];

export default function Affiliations() {
  return (
    <section className="overflow-hidden border-y border-gray-100 bg-cream py-8 sm:py-16">
      <p className="section-label mb-5 text-center text-navy/40 sm:mb-10">
        Affiliated With
      </p>
      <div className="relative">
        <div className="flex w-max animate-marquee items-center">
          {[0, 1].map((group) => (
            <div
              key={group}
              className="flex min-w-screen shrink-0 items-center justify-around gap-3 px-3 sm:gap-8 sm:px-6 lg:gap-12 lg:px-8"
              aria-hidden={group === 1}
            >
              {affiliations.map((logo) => (
                <div
                  key={`${logo.name}-${group}`}
                  className="flex h-20 w-40 shrink-0 items-center justify-center sm:h-28 sm:w-64"
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
