import Link from "next/link";

export default function BestKnownFor() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="section-label text-navy/50 mb-8">Best Known For</p>
        <h2 className="font-serif text-[clamp(2.5rem,6vw,56px)] font-normal uppercase tracking-normal leading-[0.95] lg:leading-[3.8rem] text-navy mb-8">
          Helping expats in Hong Kong{" "}
          <span className="text-teal">get their finances in order</span>
        </h2>
        <p className="text-navy/60 text-lg leading-relaxed max-w-2xl mx-auto mb-12 font-light">
          If you&apos;re navigating life abroad and want a clear, confident path
          for your wealth — from retirement planning to tax-efficient strategies
          — you&apos;re in the right place. I specialise in making financial
          planning approachable, personal, and stress-free.
        </p>
        <Link
          href="#contact"
          className="inline-flex items-center px-10 py-4 bg-navy text-white text-xs tracking-[0.2em] uppercase hover:bg-teal hover:text-navy transition-all duration-300"
        >
          Inquire Today
        </Link>
      </div>
    </section>
  );
}
