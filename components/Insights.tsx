import Image from "next/image";
import Link from "next/link";

const reels = [
  {
    id: "DaB1c2nvLgt",
    url: "https://www.instagram.com/reel/DaB1c2nvLgt/",
    title: "Defining What Success Looks Like",
    description:
      "A practical reminder that financial planning starts with knowing what you're actually building toward.",
    image: "/insta1.png",
  },
  {
    id: "DYWgg9nCm3S",
    url: "https://www.instagram.com/reel/DYWgg9nCm3S/",
    title: "Beyond the Numbers",
    description:
      "A conversation on clarity, confidence, and the deeper questions behind meaningful financial decisions.",
    image: "/insta2.png",
  },
  {
    id: "DVSaQIKidn3",
    url: "https://www.instagram.com/reel/DVSaQIKidn3/",
    title: "Planning for Life in Hong Kong",
    description:
      "Educational guidance for expats balancing family, career, and long-term financial responsibility.",
    image: "/insta3.png",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 text-center">
          <p className="section-label text-navy/50 mb-4">Watch &amp; Learn</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-navy leading-none">
            From <span className="italic">the Videos</span>
          </h2>
          <Link
            href="https://www.instagram.com/jemmadaley"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex text-xs tracking-[0.24em] uppercase text-navy/55 hover:text-teal transition-colors border-b border-navy/20 pb-1"
          >
            Follow @jemmadaley
          </Link>
        </div>

        <div className="grid gap-16 md:grid-cols-3 md:gap-10 lg:gap-12">
          {reels.map((reel) => (
            <Link
              key={reel.id}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group mx-auto block max-w-sm text-center md:max-w-none"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-white">
                <Image
                  src={reel.image}
                  alt={reel.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-navy/10 transition-colors duration-500 group-hover:bg-navy/25" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-navy shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-teal">
                    <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-current" />
                  </span>
                </div>
              </div>

              <div className="px-3 pt-5 md:px-5 md:pt-9">
                <p className="section-label mb-4 hidden text-teal md:block">
                  Instagram Reel
                </p>
                <h3 className="font-serif text-2xl md:text-[1.7rem] font-normal leading-tight text-navy group-hover:text-teal transition-colors duration-300">
                  {reel.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xs text-sm font-light leading-relaxed text-navy/55 md:mt-5">
                  {reel.description}
                </p>
                <p className="mt-4 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-navy/45 transition-colors duration-300 group-hover:text-teal md:mt-6">
                  Watch on Instagram →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
