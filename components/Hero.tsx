"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    src: "/jemma1hero.png",
    mobileSrc: "/jemma1heromobile.png",
    alt: "Jemma Daley – Financial Adviser",
    position: "right center",
    mobilePosition: "right center",
  },
  // {
  //   src: "/jemma21hero.png",
  //   alt: "Jemma Daley – Financial Adviser",
  //   position: "right center",
  // },
];

const SLIDE_DURATION = 6500;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setProgress(0);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((p) => {
        const step = 100 / (SLIDE_DURATION / 50);
        return p + step >= 100 ? 100 : p + step;
      });
    }, 50);

    const slideInterval = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
      setProgress(0);
    }, SLIDE_DURATION);

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-navy"
    >
      {/* Background slides */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[1600ms] ease-in-out ${
              current === i ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.mobileSrc}
              alt={slide.alt}
              fill
              className={`object-cover transition-transform ease-out sm:hidden ${
                current === i
                  ? "scale-[1.04] duration-[7000ms]"
                  : "scale-100 duration-[1600ms]"
              }`}
              style={{ objectPosition: slide.mobilePosition }}
              priority={i < 2}
              sizes="100vw"
            />
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className={`hidden object-cover transition-transform ease-out sm:block ${
                current === i
                  ? "scale-[1.04] duration-[7000ms]"
                  : "scale-100 duration-[1600ms]"
              }`}
              style={{ objectPosition: slide.position }}
              priority={i < 2}
              sizes="100vw"
            />
          </div>
        ))}

        {/* Subtle left-side vignette for text readability only */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-navy/85 via-navy/45 to-navy/5 lg:from-navy/70 lg:from-0% lg:via-navy/25 lg:via-35% lg:to-transparent lg:to-65%" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-navy/70 via-transparent to-navy/20 lg:from-transparent" />
      </div>

      {/* Decorative watermark */}
      <div
        className="absolute top-[12%] left-[4%] lg:left-[6%] z-10 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className={`block font-serif text-[clamp(5rem,18vw,14rem)] font-light leading-none text-white/[0.04] transition-all duration-[1200ms] ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Jemma
        </span>
      </div>

      <div className="relative z-30 flex min-h-[100svh] flex-col justify-end px-6 pb-20 pt-32 sm:px-10 sm:pb-24 lg:justify-center lg:px-16 lg:pb-20 xl:px-24">
        <div className="w-full max-w-7xl mx-auto">
          <div className="max-w-xl lg:max-w-3xl text-left">
            {/* Eyebrow */}
            <div
              className={`flex items-center gap-4 mb-6 lg:mb-8 transition-all duration-700 delay-100 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <span className="text-xs sm:text-sm font-bold tracking-[0.22em] uppercase text-teal">
                Financial Advice
                <br className="sm:hidden" />
                <span className="sm:hidden"> &amp; Wealth Management</span>
                <span className="hidden sm:inline">
                  {" "}
                  &amp; Wealth Management
                </span>
              </span>
              <span className="hidden sm:block w-8 h-px bg-white/20" />
              <span className="hidden sm:block text-[0.65rem] tracking-[0.2em] uppercase text-white/50">
                Hong Kong
              </span>
            </div>

            {/* Name */}
            <h1
              className={`font-serif font-normal text-white tracking-normal leading-[0.825] mb-7 lg:mb-9 lg:h-[160px] transition-all duration-700 delay-200 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <span className="block text-[clamp(2.75rem,11vw,97px)]">
                Jemma
              </span>
              <span className="block text-[clamp(2.75rem,11vw,97px)] italic">
                Daley
              </span>
            </h1>

            {/* Accent rule */}
            <div
              className={`flex items-center gap-5 mb-8 lg:mb-10 transition-all duration-700 delay-300 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <div className="w-14 h-px bg-teal" />
              <div className="w-1.5 h-1.5 rounded-full bg-teal" />
            </div>

            {/* Headlines */}
            <div
              className={`mb-10 lg:mb-12 transition-all duration-700 delay-[400ms] ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <h2 className="font-serif text-[clamp(1.5rem,3.5vw,2.5rem)] font-light text-white tracking-tight leading-snug mb-2">
                Empowering your financial future
              </h2>
              <p className="font-serif text-[clamp(1.1rem,2.5vw,1.65rem)] italic font-light text-white/55">
                Transforming complexity into clarity
              </p>
            </div>

            {/* CTAs */}
            <div
              className={`transition-all duration-700 delay-500 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 bg-teal px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-navy transition-all duration-400 hover:bg-white hover:text-navy sm:px-8 sm:tracking-[0.2em]"
              >
                Inquire Today
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar: slide controls + scroll */}


      <div
        className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 z-30 w-[3px] h-24 bg-gradient-to-b from-transparent via-teal/70 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
