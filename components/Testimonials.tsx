"use client";

import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "My first 30 minutes with Jemma changed my life. She didn't just think outside the box, she didn't even see a box to begin with. She took me and my story as an individual, and found not only what I was looking for, but so much more. And she showed she cared, which I honestly never expected to find in the financial sector.",
    name: "Astrid H.",
    role: "Urban Economist",
  },
  {
    quote:
      "As a widow, I felt I was drowning in financial confusion. Jemma was my lifeline. Her expert guidance made the complex simple, but her compassionate, woman-to-woman support gave me clarity and strength when I needed it most. I now understand my finances and feel confident and secure. I cannot recommend her highly enough.",
    name: "Susannah P.",
    role: "Educator",
  },
  {
    quote:
      "Jemma has been an absolute pleasure to work with and has given us confidence that we are in the right financial structure for our needs. She always follows up on our meetings with comprehensive notes which summarise our discussions clearly and concisely. I would highly recommend reaching out to Jemma even just for an initial discussion if you are on the fence or unsure about whether financial planning is required for you.",
    name: "Anonymous Client",
    role: "Client",
  },
  {
    quote:
      "I find the world of investments quite intimidating and had many questions. Jemma took the time to really listen and understand our personal and financial goals. She helped us develop a clear investment plan aligned with our life objectives. Most importantly, she gave me the clarity and confidence I needed to make informed decisions. I'm extremely happy with the investment strategy we put in place and would confidently recommend Jemma to anyone looking for thoughtful, transparent and approachable financial advice.",
    name: "Elise W.",
    role: "Interior Design Project Lead",
  },
  {
    quote:
      "Jemma has been an exceptional financial adviser. She is easily accessible and always takes great care in explaining all aspects of my finances. Her advice is not only clear and sound, but I've been able to see the direct benefits of it. I would strongly recommend Jemma to anyone looking for top tier financial advice.",
    name: "Jenning L.",
    role: "Athlete",
  },
  {
    quote:
      "From our very first meeting, Jemma took the time to understand my goals and financial situation before recommending anything - no pressure, just clear, tailored advice. What stands out most is her down to earth style, and responsiveness whenever I have questions. I'd recommend Jemma to anyone in Hong Kong looking for a financial planner who is knowledgeable, trustworthy and easy to work with.",
    name: "Lisa S.",
    role: "HR",
  },
  {
    quote:
      "I have a finance degree but coming to Jemma when I needed help regarding all things money logistics was one of the best decisions I've ever made. She's been so accommodating in explaining everything to me and even guided me to alter my portfolio risk profile to achieve my goals. I've already recommended her to a few people. You definitely want her on your side - especially financially!",
    name: "Anonymous Client",
    role: "Client",
  },
];

const BG_IMAGE = "url('/testimonial.png')";
const MOBILE_PARALLAX_RANGE = 90;
const SLIDE_DURATION = 8000;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [parallaxY, setParallaxY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number>(0);
  const [manualAdvanceKey, setManualAdvanceKey] = useState(0);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateParallax = () => {
      const section = sectionRef.current;
      if (!section || motionQuery.matches) return;

      const rect = section.getBoundingClientRect();
      const progress =
        (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const clampedProgress = Math.min(1, Math.max(0, progress));

      setParallaxY((0.5 - clampedProgress) * MOBILE_PARALLAX_RANGE);
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

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
    }, SLIDE_DURATION);

    return () => window.clearInterval(timer);
  }, [manualAdvanceKey]);

  const prev = () => {
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
    setManualAdvanceKey((key) => key + 1);
  };

  const next = () => {
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
    setManualAdvanceKey((key) => key + 1);
  };

  const goTo = (index: number) => {
    setCurrent(index);
    setManualAdvanceKey((key) => key + 1);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24"
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

      {/* Mobile + fallback: subtle scroll-driven parallax */}
      <div className="absolute inset-0 z-0 lg:hidden" aria-hidden="true">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-[15%] left-0 h-[130%] w-full bg-cover bg-no-repeat"
            style={{
              backgroundImage: BG_IMAGE,
              backgroundPosition: "center center",
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
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="section-label mb-7 text-white/50 lg:mb-9">
          Testimonials
        </p>

        <div className="grid">
          {testimonials.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              aria-hidden={current !== i}
              className={`col-start-1 row-start-1 flex flex-col justify-center transition-all duration-700 ${
                current === i
                  ? "relative z-[1] opacity-100 translate-y-0"
                  : "pointer-events-none z-0 opacity-0 translate-y-4"
              }`}
            >
              <p className="mb-5 font-serif text-[1.4rem] font-light italic leading-snug text-white sm:text-[1.65rem] md:text-3xl lg:mb-6 lg:text-[2.15rem]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-white font-medium tracking-wide">{t.name}</p>
              <p className="mt-0.5 text-sm text-white/50">{t.role}</p>
            </div>
          ))}
        </div>

        <div className="relative z-10 mt-6 flex items-center justify-center gap-4 sm:gap-5 lg:mt-8">
          <button
            type="button"
            onClick={prev}
            className="w-10 h-10 border border-white/25 text-white flex items-center justify-center hover:border-teal hover:text-teal transition-colors"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                type="button"
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === i ? "bg-teal w-6" : "bg-white/25 w-2"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
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
