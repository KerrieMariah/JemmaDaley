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
    <section className="py-16 bg-cream border-y border-gray-100 overflow-hidden">
      <p className="section-label text-navy/40 text-center mb-10">
        Affiliated With
      </p>
      <div className="relative">
        <div className="flex animate-marquee items-center whitespace-nowrap">
          {[...affiliations, ...affiliations].map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="mx-8 flex h-28 w-64 items-center justify-center "
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
      </div>
    </section>
  );
}
