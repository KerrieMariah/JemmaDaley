import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const services = [
  {
    title: "Wealth Management",
    accent: "& Portfolio Structuring",
    intro: "For expats who want their wealth organized, invested, and working internationally.",
    description:
      "Living internationally means your money rarely sits in one place. I help you structure investments that respect your residency, currency exposure, and long-term ambitions — without the jargon or overwhelm.",
    highlights: [
      "Tax-efficient international portfolios",
      "Currency & diversification strategy",
      "Ongoing reviews as your life evolves",
    ],
    image: "/services1.webp",
    imageAlt: "Financial charts and portfolio analysis",
  },
  {
    title: "Retirement",
    accent: "& Protection Planning",
    intro: "For families and professionals who want security now and flexibility later.",
    description:
      "From funding your children's education to securing the retirement you actually want, the right plan gives you options — not anxiety. We'll map out protection and savings that fit your family's real life abroad.",
    highlights: [
      "Retirement & education funding",
      "Life and income protection",
      "Reserves for the unexpected",
    ],
    image: "/services5.jpg",
    imageAlt: "Family enjoying time together outdoors",
  },
  {
    title: "Tax, Trust",
    accent: "& Estate Planning",
    intro: "For cross-border lives where tax, legacy, and long-term decisions need clarity.",
    description:
      "Expat wealth comes with layers — multiple jurisdictions, shifting rules, and big decisions about what you leave behind. I help you navigate trust and estate planning with clarity, so your legacy is handled on your terms.",
    highlights: [
      "Cross-border tax-efficient structuring",
      "Trust & estate planning",
      "Legacy planning for your family",
    ],
    image: "/estate.png",
    imageAlt: "Professional reviewing financial documents at a desk",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-navy py-20 text-white lg:py-32"
    >
      <div
        className="absolute -right-16 top-12 hidden font-serif text-[12rem] font-light leading-none text-white/[0.035] lg:block"
        aria-hidden="true"
      >
        Services
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-12 grid gap-6 sm:mb-16 lg:mb-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-label mb-5 text-teal">My Services</p>
            <h2 className="font-serif text-[clamp(3rem,7vw,72px)] font-medium uppercase leading-[0.88] tracking-[-0.02em] text-white">
              Guidance for
              <br />
              <span className="text-teal">life abroad</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm font-light leading-relaxed text-white/62 md:text-base lg:ml-auto">
            Every expat story is different. Whether you&apos;re building from
            scratch, planning a major transition, or protecting what you&apos;ve
            already achieved, these are the calm, practical conversations where
            we start.
          </p>
        </Reveal>

        <div className="space-y-8 lg:space-y-10">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 90}>
              <article
                className={`group grid overflow-hidden border border-white/12 bg-white/[0.045] shadow-[0_28px_80px_rgba(0,0,0,0.22)] backdrop-blur-sm transition-all duration-500 hover:border-teal/60 hover:bg-white/[0.065] ${
                  index % 2 === 1
                    ? "lg:grid-cols-[1.15fr_0.85fr]"
                    : "lg:grid-cols-[0.9fr_1.1fr]"
                }`}
              >
                <div
                  className={`relative min-h-[240px] overflow-hidden bg-navy sm:min-h-[280px] md:min-h-[360px] lg:min-h-full ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-navy/10 transition-colors duration-500 group-hover:bg-navy/20" />
                </div>

                <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-14">
                  <div className="mb-7 flex items-center gap-5 sm:mb-8">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                    <span className="h-px flex-1 bg-white/12" />
                  </div>

                  <div className="grid gap-8 2xl:grid-cols-[0.85fr_1.15fr] 2xl:gap-12">
                    <div>
                      <h3 className="font-serif text-3xl font-light leading-[0.95] text-white sm:text-4xl md:text-5xl">
                        {service.title}
                        <br />
                        <span className="italic text-teal">
                          {service.accent}
                        </span>
                      </h3>
                      <p className="mt-6 text-xs font-bold uppercase leading-relaxed tracking-[0.16em] text-white/70 sm:mt-7 sm:tracking-[0.2em]">
                        {service.intro}
                      </p>
                    </div>

                    <div>
                      <p className="mb-8 text-sm font-light leading-relaxed text-white/60 md:text-base">
                        {service.description}
                      </p>

                      <ul className="divide-y divide-white/10 border-y border-white/10">
                        {service.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-4 py-3 text-sm font-semibold leading-relaxed text-white/78"
                          >
                            <span className="mt-2 h-px w-6 shrink-0 bg-teal" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="#contact"
                        className="mt-9 inline-flex items-center border border-white/30 px-6 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-teal hover:bg-teal hover:text-navy sm:px-7 sm:tracking-[0.24em]"
                      >
                        Inquire Today
                        <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
