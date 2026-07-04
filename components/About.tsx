import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="bg-navy py-20 lg:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[0.95fr_1.35fr_1fr] gap-12 lg:gap-10 xl:gap-12 items-start">
          {/* Left — copy */}
          <div className="order-2 lg:order-1 lg:pt-1">
            <h2 className="font-serif text-5xl md:text-6xl lg:text-[4.15rem] font-light text-white uppercase tracking-normal leading-[0.82] mb-5">
              Meet
              <br />
              Jemma
            </h2>
            <p className="font-serif text-lg md:text-xl text-white/75 uppercase leading-tight mb-9">
              The Financial Advisor
            </p>

            <div className="space-y-5 text-white/58 text-sm leading-relaxed font-light max-w-[16rem]">
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
              className="inline-flex items-center gap-3 mt-10 px-7 py-3.5 bg-teal text-navy text-[0.72rem] font-semibold tracking-[0.18em] uppercase hover:bg-white transition-all duration-300"
            >
              Read More
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Center — primary portrait */}
          <div className="order-1 lg:order-2 relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Circular badge */}
            <div
              className="absolute -top-8 -left-5 lg:-left-10 z-20 w-24 h-24 lg:w-28 lg:h-28"
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

            <div className="relative aspect-[3/4] w-full overflow-hidden">
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
          <div className="order-3 flex flex-col gap-8 lg:gap-9 lg:pt-0">
            <div className="relative aspect-square w-full max-w-xs lg:max-w-none mx-auto lg:mx-0 overflow-hidden">
              <Image
                src="/jemma5.jpeg"
                alt="Jemma Daley – Hong Kong"
                fill
                className="object-cover object-left"
                sizes="(max-width: 1024px) 80vw, 25vw"
              />
            </div>

            <div className="text-center lg:text-left max-w-xs mx-auto lg:mx-0">
              <p className="font-serif text-base text-white uppercase leading-tight mb-2">
                Empowering your vision
              </p>
              <p className="font-serif text-lg italic text-white/55 font-light leading-tight">
                Transforming complexity into clarity
              </p>
              <p className="mt-5 text-sm font-light leading-relaxed text-white/45">
                Jemma helps expats turn scattered financial questions into a
                calm, practical plan for life in Hong Kong and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
