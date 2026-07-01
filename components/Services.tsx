import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Wealth Management",
    subtitle: "& Portfolio Structuring",
    hook: "Build wealth that works as hard as you do — wherever life takes you.",
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
    subtitle: "& Protection Planning",
    hook: "Protect what you've built. Plan confidently for what comes next.",
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
    subtitle: "& Estate Planning",
    hook: "Cross-border finances shouldn't keep you up at night.",
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
    <section id="services" className="py-24 lg:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 lg:mb-24 max-w-2xl mx-auto">
          <p className="section-label text-white/50 mb-4">The Services</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-6">
            How I Can <span className="italic">Help</span>
          </h2>
          <p className="text-white/55 font-light leading-relaxed">
            Every expat story is different. Whether you&apos;re building from
            scratch, planning a major transition, or protecting what you&apos;ve
            already achieved — here&apos;s where we start.
          </p>
        </div>

        <div className="space-y-20 lg:space-y-28">
          {services.map((service, index) => {
            const reversed = index % 2 === 1;

            return (
              <article
                key={service.number}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="relative group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <span className="absolute -bottom-4 -right-4 lg:-bottom-5 lg:-right-5 font-serif text-7xl lg:text-8xl font-light text-teal/25 leading-none select-none pointer-events-none">
                    {service.number}
                  </span>
                  <div
                    className={`absolute top-0 w-12 h-12 border border-teal/40 hidden lg:block ${
                      reversed ? "right-0 -translate-y-6 translate-x-6" : "left-0 -translate-y-6 -translate-x-6"
                    }`}
                    aria-hidden="true"
                  />
                </div>

                {/* Copy */}
                <div className={reversed ? "lg:pr-8" : "lg:pl-8"}>
                  <p className="section-label text-teal mb-4">
                    Service {service.number}
                  </p>
                  <h3 className="font-serif text-3xl md:text-4xl font-light text-white leading-tight mb-1">
                    {service.title}
                  </h3>
                  <p className="font-serif text-2xl md:text-3xl italic text-white/40 font-light mb-6">
                    {service.subtitle}
                  </p>

                  <p className="font-serif text-lg italic text-white/70 mb-5 leading-relaxed">
                    {service.hook}
                  </p>
                  <p className="text-white/55 font-light leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-10">
                    {service.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-white/60 font-light"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.2em] uppercase text-white/70 hover:text-teal transition-colors duration-300 group/link"
                  >
                    Read More
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                      →
                    </span>
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
