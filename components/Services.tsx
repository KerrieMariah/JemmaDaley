import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Wealth Management",
    accent: "& Portfolio Structuring",
    description:
      "Living internationally means your money rarely sits in one place. I help you structure investments that respect your residency, currency exposure, and long-term ambitions — without the jargon or overwhelm.",
    highlights: [
      "Tax-efficient international portfolios",
      "Currency & diversification strategy",
      "Ongoing reviews as your life evolves",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
    imageAlt: "Financial charts and portfolio analysis",
  },
  {
    number: "02",
    title: "Retirement",
    accent: "& Protection Planning",
    description:
      "From funding your children's education to securing the retirement you actually want, the right plan gives you options — not anxiety. We'll map out protection and savings that fit your family's real life abroad.",
    highlights: [
      "Retirement & education funding",
      "Life and income protection",
      "Reserves for the unexpected",
    ],
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80",
    imageAlt: "Family enjoying time together outdoors",
  },
  {
    number: "03",
    title: "Tax, Trust",
    accent: "& Estate Planning",
    description:
      "Expat wealth comes with layers — multiple jurisdictions, shifting rules, and big decisions about what you leave behind. I help you navigate trust and estate planning with clarity, so your legacy is handled on your terms.",
    highlights: [
      "Cross-border tax-efficient structuring",
      "Trust & estate planning",
      "Legacy planning for your family",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80",
    imageAlt: "Professional reviewing financial documents at a desk",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <p className="section-label text-teal mb-4">The Services</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-snug mb-6">
            How I Can <span className="italic text-teal">Help</span>
          </h2>
          <p className="text-white/60 font-light leading-relaxed">
            Every expat story is different. Whether you&apos;re building from
            scratch, planning a major transition, or protecting what you&apos;ve
            already achieved — here&apos;s where we start.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {services.map((service, index) => {
            const reversed = index % 2 === 1;

            return (
              <article
                key={service.number}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center pb-16 lg:pb-20 border-b border-white/10 last:border-0 last:pb-0 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative group">
                  <div className="relative aspect-[5/4] overflow-hidden border border-white/10">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-navy/15 group-hover:bg-navy/5 transition-colors duration-500" />
                  </div>
                  <div
                    className={`absolute -bottom-3 h-px w-16 bg-teal hidden lg:block ${
                      reversed ? "right-0" : "left-0"
                    }`}
                    aria-hidden="true"
                  />
                </div>

                <div className={reversed ? "lg:pr-6" : "lg:pl-6"}>
                  <h3 className="font-serif text-3xl md:text-4xl font-light leading-snug mb-6">
                    {service.title}{" "}
                    <span className="italic text-teal">{service.accent}</span>
                  </h3>

                  <p className="text-white/60 font-light leading-relaxed mb-8 max-w-lg">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {service.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-white/80 font-medium"
                      >
                        <span className="w-8 h-px bg-teal shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#contact"
                    className="inline-flex items-center px-8 py-3.5 bg-teal text-navy text-xs font-semibold tracking-[0.2em] uppercase hover:bg-white transition-all duration-300"
                  >
                    Inquire Today
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
