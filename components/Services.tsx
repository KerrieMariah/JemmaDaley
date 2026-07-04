import Image from "next/image";
import Link from "next/link";

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
    image:
      "/wealthmanagement.png",
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
    image:
      "/retirement.png",
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
    image:
      "/estate.png",
    imageAlt: "Professional reviewing financial documents at a desk",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-24 lg:py-32 bg-navy text-white"
    >
      <div
        className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-teal/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-teal/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-[100rem] mx-auto px-6 lg:px-10 xl:px-12">
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <p className="section-label text-teal mb-4">The Services</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] mb-6">
            How I Can <span className="italic text-teal">Help</span>
          </h2>
          <p className="text-white/60 font-light leading-relaxed">
            Every expat story is different. Whether you&apos;re building from
            scratch, planning a major transition, or protecting what you&apos;ve
            already achieved — here&apos;s where we start.
          </p>
        </div>

        <div className="mx-auto max-w-6xl space-y-14 lg:space-y-16">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative overflow-hidden border border-white/12 bg-white/[0.035] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur-sm transition-all duration-500 hover:border-teal/55 hover:bg-white/[0.05] md:p-4"
            >
              <div className="relative min-h-[360px] overflow-hidden bg-white/5 md:min-h-[430px] lg:min-h-[500px]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  sizes="(max-width: 1024px) 100vw, 72rem"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy to-transparent" />

                <div className="absolute left-6 top-6 flex items-center gap-4 md:left-8 md:top-8">
                  <span className="h-px w-14 bg-teal" />
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="absolute bottom-7 left-6 right-6 max-w-3xl font-serif text-4xl font-light leading-[0.98] text-white md:bottom-9 md:left-8 md:right-8 md:text-5xl lg:text-6xl">
                  {service.title}
                  <br />
                  <span className="italic text-teal">{service.accent}</span>
                </h3>
              </div>

              <div className="grid gap-8 px-5 pb-7 pt-8 md:px-8 md:pb-9 md:pt-9 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:px-10 lg:py-10">
                <div>
                  <p className="max-w-md text-sm font-bold uppercase leading-relaxed tracking-[0.18em] text-white/80">
                    {service.intro}
                  </p>
                  <div className="mt-7 hidden h-px w-24 bg-teal lg:block" />
                </div>

                <div>
                  <p className="mb-8 text-base font-light leading-relaxed text-white/62">
                    {service.description}
                  </p>

                  <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {service.highlights.map((item) => (
                      <li
                        key={item}
                        className="border-l border-teal/70 pl-4 text-sm font-semibold leading-relaxed text-white/88"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#contact"
                    className="mt-9 inline-flex items-center bg-teal px-8 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-navy transition-all duration-300 hover:bg-white"
                  >
                    Inquire Today
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
