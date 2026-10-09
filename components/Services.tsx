import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { CALENDLY_URL } from "@/lib/links";

const services = [
  {
    title: "Wealth Management",
    accent: "& Portfolio Structuring",
    intro: "For expats who want their wealth organised, invested, and working internationally.",
    description:
      "Living internationally means your money rarely sits in one place. I help you structure investments that respect your residency, currency exposure, and long-term ambitions without the jargon or overwhelm.",
    highlights: [
      "Tax-efficient international portfolios",
      "Currency & diversification strategy",
      "Ongoing reviews as your life evolves",
    ],
    image: "/services1.webp",
    imagePosition: "object-center",
    imageAlt: "Financial charts and portfolio analysis",
    disclaimers: [
      "The value of an investment with St. James's Place will be directly linked to the performance of the funds selected and may fall as well as rise. You may get back less than the amount invested.",
      "St. James's Place (Hong Kong) Limited is not licensed to provide tax advice. Any information provided is for general information purposes only and should not be relied upon as tax advice. You should seek independent advice from a suitably qualified tax advisor in relation to your specific circumstances before taking any action.",
      "Recommendation relating to currency, foreign exchange and international money transfers involves a referral to a service provider that is separate and distinct from St. James's Place.",
    ],
  },
  {
    title: "Retirement",
    accent: "& Protection Planning",
    intro: "For families and professionals who want security now and flexibility later.",
    description:
      "From funding your children's education to securing the retirement you actually want, the right plan gives you options, not anxiety. We'll map out protection and savings that fit your family's real life abroad.",
    highlights: [
      "Retirement & education funding",
      "Life and income protection",
      "Reserves for the unexpected",
    ],
    image: "/services5.jpg",
    desktopImage: "/service2.png",
    imagePosition: "object-[right_center]",
    desktopImagePosition: "object-[right_center]",
    imageAlt: "Family enjoying time together outdoors",
    disclaimers: [
      "The value of an investment with St. James's Place will be directly linked to the performance of the funds selected and may fall as well as rise. You may get back less than the amount invested.",
    ],
  },
  {
    title: "Tax, Trust",
    accent: "& Estate Planning",
    intro: "For cross-border lives where tax, legacy, and long-term decisions need clarity.",
    description:
      "Expat wealth comes with layers, multiple jurisdictions, shifting rules, and big decisions about what you leave behind. I help you navigate trust and estate planning with clarity, so your legacy is handled on your terms.",
    highlights: [
      "Cross-border tax-efficient structuring",
      "Trust & estate planning",
      "Legacy planning for your family",
    ],
    image: "/estate.png",
    imagePosition: "object-center",
    imageAlt: "Professional reviewing financial documents at a desk",
    disclaimers: [
      "The value of an investment with St. James's Place will be directly linked to the performance of the funds selected and may fall as well as rise. You may get back less than the amount invested.",
      "St. James's Place (Hong Kong) Limited is not licensed to provide tax advice. Any information provided is for general information purposes only and should not be relied upon as tax advice. You should seek independent advice from a suitably qualified tax advisor in relation to your specific circumstances before taking any action.",
      "Please note your home or other property may be repossessed if you do not keep up repayments on your mortgage.",
      "Recommendation relating to a Will, matters of guardianship, trust, Lasting Power of Attorney or mortgages involves a referral to a service provider that is separate and distinct from St. James's Place.",
    ],
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
            Every expat story is different. Whether you&apos;re building wealth
            from scratch, planning a major career transition, or protecting what
            you have already achieved, these are the calm, practical
            conversations where we start.
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
                  className={`relative min-h-[240px] overflow-hidden bg-navy sm:min-h-[280px] md:min-h-[360px] lg:row-start-1 lg:min-h-full ${
                    index % 2 === 1 ? "lg:col-start-2" : "lg:col-start-1"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className={`object-cover ${service.imagePosition} transition-transform duration-700 group-hover:scale-[1.04] ${
                      service.desktopImage ? "lg:hidden" : ""
                    }`}
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  {service.desktopImage ? (
                    <Image
                      src={service.desktopImage}
                      alt={service.imageAlt}
                      fill
                      className={`hidden object-cover ${service.desktopImagePosition ?? "object-center"} transition-transform duration-700 group-hover:scale-[1.04] lg:block`}
                      sizes="42vw"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-navy/10 transition-colors duration-500 group-hover:bg-navy/20" />
                </div>

                <div
                  className={`flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:row-start-1 lg:p-14 ${
                    index % 2 === 1 ? "lg:col-start-1" : "lg:col-start-2"
                  }`}
                >
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
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-9 inline-flex items-center border border-white/30 px-6 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-teal hover:bg-teal hover:text-navy sm:px-7 sm:tracking-[0.24em]"
                      >
                        Enquire Today
                        <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 border-t border-white/10 px-6 py-5 text-[0.65rem] leading-relaxed text-white/35 sm:px-8 sm:text-xs md:px-10 lg:col-span-2 lg:row-start-2 lg:px-14">
                  {service.disclaimers.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-[0.65rem] leading-relaxed text-white/35 sm:mt-16 sm:text-xs">
          The value of an investment with St. James&apos;s Place will be directly
          linked to the performance of the funds selected and may fall as well
          as rise. You may get back less than the amount invested.
        </p>
      </div>
    </section>
  );
}
