import Image from "next/image";
import Link from "next/link";

export default function Consultation() {
  return (
    <section className="py-24 lg:py-32 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label text-teal mb-4">Get Started</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 leading-snug">
              Book a{" "}
              <span className="italic text-teal">Consultation</span>
            </h2>
            <p className="text-white/60 font-light leading-relaxed mb-10 max-w-md">
              Whether you&apos;re building wealth from scratch, planning for
              retirement, or navigating a major life transition we can
              create a plan that aligns with what matters most to you.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center px-10 py-4 bg-teal text-navy text-xs tracking-[0.2em] uppercase hover:bg-white transition-all duration-300"
            >
              Schedule a Call
            </Link>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/jemma3.jpeg"
              alt="Book a consultation with Jemma Daley"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-navy/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
