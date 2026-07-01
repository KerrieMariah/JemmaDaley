"use client";

import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "Jemma truly invested in my development beyond the office. Her guidance demonstrated how building authentic relationships are fundamental to financial planning. She leads with integrity and enthusiasm.",
    name: "Gurjot Singh Gill",
    role: "Mentee, St. James's Place",
  },
  {
    quote:
      "Jemma made financial planning feel approachable and stress-free. Her human-centred approach and expat expertise gave me the clarity and confidence I needed to plan for my family's future.",
    name: "Sarah M.",
    role: "Expat Client, Hong Kong",
  },
  {
    quote:
      "Coming from a non-financial background, I was intimidated by wealth management. Jemma broke everything down into clear, practical steps. I finally feel in control of my finances.",
    name: "David L.",
    role: "Expat Client, Hong Kong",
  },
  {
    quote:
      "Jemma's tailored tax-efficient strategies transformed how I think about my wealth. Her expertise in cross-border planning is unmatched — I couldn't recommend her more highly.",
    name: "Emma R.",
    role: "Expat Client, Hong Kong",
  },
];

const BG_IMAGE = "url('/jemma6.jpeg')";
const PARALLAX_SPEED = 0.5;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [parallaxY, setParallaxY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateParallax = () => {
      const section = sectionRef.current;
      if (!section || motionQuery.matches) return;

      const rect = section.getBoundingClientRect();
      const scrolledPast = window.scrollY + rect.top - window.innerHeight;
      setParallaxY(scrolledPast * -PARALLAX_SPEED);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section
      ref={sectionRef}
      className="relative py-28 lg:py-36 min-h-[520px] lg:min-h-[600px]"
    >
      {/* Desktop: fixed-background parallax */}
      <div
        className="absolute inset-0 z-0 hidden lg:block bg-cover bg-no-repeat"
        style={{
          backgroundImage: BG_IMAGE,
          backgroundPosition: "left 25% center",
          backgroundAttachment: "fixed",
        }}
        aria-hidden="true"
      />

      {/* Mobile + fallback: scroll-driven transform parallax */}
      <div className="absolute inset-0 z-0 lg:hidden" aria-hidden="true">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute left-0 w-full h-[180%] -top-[40%] bg-cover bg-no-repeat"
            style={{
              backgroundImage: BG_IMAGE,
              backgroundPosition: "left 25% center",
              transform: `translate3d(0, ${parallaxY}px, 0)`,
              willChange: "transform",
            }}
          />
        </div>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 z-[1] bg-navy/78" aria-hidden="true" />
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-navy/40 via-transparent to-navy/60"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="section-label text-white/50 mb-16">Testimonials</p>

        <div className="relative min-h-[220px] lg:min-h-[200px]">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`transition-all duration-700 ${
                current === i
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 absolute inset-0"
              }`}
            >
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed italic mb-10">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-white font-medium tracking-wide">{t.name}</p>
              <p className="text-white/50 text-sm mt-1">{t.role}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="w-10 h-10 border border-white/25 text-white flex items-center justify-center hover:border-teal hover:text-teal transition-colors"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === i ? "bg-teal w-6" : "bg-white/25 w-2"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 border border-white/25 text-white flex items-center justify-center hover:border-teal hover:text-teal transition-colors"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
