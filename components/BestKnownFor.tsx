import Link from "next/link";
import Reveal from "@/components/Reveal";
import { CALENDLY_URL } from "@/lib/links";

export default function BestKnownFor() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <Reveal className="max-w-4xl mx-auto px-6 text-center">
        <p className="section-label text-navy/60 mb-5">Best Known For</p>
        <h2 className="mx-auto max-w-4xl font-serif text-[clamp(3rem,7vw,72px)] font-medium uppercase tracking-[-0.02em] leading-[0.88] lg:leading-[4.25rem] text-navy mb-8">
          Helping expats in Hong Kong
          <br />
          <span className="text-teal">get their finances in order</span>
        </h2>
        <div className="mx-auto mb-12 max-w-2xl space-y-4 text-sm font-normal leading-relaxed text-navy/70 md:text-base">
          <p>
            If you&apos;re navigating life abroad and want a clear, confident
            path to managing your wealth, then you&apos;re in the right place.
          </p>
          <p>
            Backed by a FTSE 100 company, I specialise in making financial
            planning approachable, personal, and stress-free.
          </p>
        </div>
        <Link
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-3.5 border border-navy/35 text-navy text-[0.65rem] font-semibold tracking-[0.24em] uppercase hover:border-teal hover:bg-teal hover:text-navy transition-all duration-300"
        >
          <span className="mr-3 h-3 w-3 rounded-full border border-current" />
          Enquire Today
        </Link>
      </Reveal>
    </section>
  );
}
