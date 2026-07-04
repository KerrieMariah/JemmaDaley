import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="overflow-hidden bg-navy py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid items-start gap-10 sm:gap-12 lg:grid-cols-[0.95fr_1.35fr_1fr] lg:gap-10 xl:gap-12">
          {/* Left — copy */}
          <div className="order-2 text-center lg:order-1 lg:pt-1 lg:text-left">
            <h2 className="mb-5 font-serif text-5xl font-light uppercase leading-[0.82] tracking-normal text-white md:text-6xl lg:text-[4.15rem]">
              Meet
              <br />
              Jemma
            </h2>
            <p className="mb-8 font-serif text-lg uppercase leading-tight text-white/75 md:text-xl lg:mb-9">
              The Financial Advisor
            </p>

            <div className="mx-auto max-w-md space-y-5 text-sm font-light leading-relaxed text-white/58 lg:mx-0 lg:max-w-[16rem]">
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
              className="mt-10 inline-flex items-center gap-3 bg-teal px-7 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-navy transition-all duration-300 hover:bg-white"
            >
              Read More
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Center — primary portrait */}
          <div className="relative order-1 mx-auto w-full max-w-sm sm:max-w-md lg:order-2 lg:max-w-none">
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
            <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden sm:max-w-sm lg:mx-0 lg:max-w-none">
              <Image
                src="/meetjemma.png"
                alt="Jemma Daley – Hong Kong"
                fill
                className="object-cover object-left"
                sizes="(max-width: 1024px) 80vw, 25vw"
              />
            </div>

            <div className="mx-auto max-w-sm text-center lg:mx-0 lg:max-w-xs lg:text-left">
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
