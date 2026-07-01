import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="bg-navy py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center">
          {/* Left — copy */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] font-light text-white uppercase tracking-wide leading-tight mb-3">
              Meet Jemma
            </h2>
            <p className="font-serif text-sm md:text-base text-white/70 uppercase tracking-[0.2em] mb-8 lg:mb-10">
              The Financial Advisor
            </p>

            <div className="space-y-5 text-white/55 text-sm leading-relaxed font-light max-w-sm">
              <p>
                My advising journey has deep roots in my personal path abroad.
                Originally from Scotland, I moved to Hong Kong in 2018 and
                experienced firsthand the unique challenges of international
                life.
              </p>
              <p>
                Once, I too faced uncertainty navigating entrepreneurship and
                finances abroad — which inspired my transition into financial
                advising, where I now help expats achieve clarity and
                confidence in their future.
              </p>
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 bg-teal text-black text-[0.75rem] tracking-[0.2em] uppercase hover:bg-white hover:text-navy transition-all duration-300"
            >
              Read More
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Center — primary portrait */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Circular badge */}
            <div
              className="absolute -top-6 -left-4 lg:-left-8 z-20 w-24 h-24 lg:w-28 lg:h-28"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full animate-[spin_20s_linear_infinite]"
              >
                <defs>
                  <path
                    id="about-badge-circle"
                    d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                  />
                </defs>
                <circle
                  cx="50"
                  cy="50"
                  r="36"
                  fill="none"
                  stroke="rgba(255,255,255,0.25)"
                  strokeWidth="0.5"
                />
                <text
                  fill="white"
                  fontSize="7.5"
                  letterSpacing="2.5"
                  className="uppercase"
                >
                  <textPath href="#about-badge-circle" startOffset="0%">
                    Work With Me • Work With Me •
                  </textPath>
                </text>
              </svg>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white" />
            </div>

            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/jemma4.jpeg"
                alt="Meet Jemma Daley"
                fill
                className="object-cover object-[center_15%]"
                sizes="(max-width: 1024px) 90vw, 42vw"
              />
            </div>
          </div>

          {/* Right — secondary image + tagline */}
          <div className="lg:col-span-3 order-3 flex flex-col gap-10 lg:gap-16">
            <div className="relative aspect-square w-full max-w-xs lg:max-w-none mx-auto lg:mx-0">
              <Image
                src="/jemma5.jpeg"
                alt="Jemma Daley – Hong Kong"
                fill
                className="object-cover object-left"
                sizes="(max-width: 1024px) 80vw, 25vw"
              />
            </div>

            <div className="text-center lg:text-left max-w-xs mx-auto lg:mx-0">
              <p className="font-serif text-sm text-white uppercase tracking-[0.15em] mb-2">
                Empowering your vision
              </p>
              <p className="font-serif text-sm italic text-white/50 font-light">
                Transforming complexity into clarity
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
