"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-start gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="section-label mb-4 text-teal">Get In Touch</p>
            <h2 className="mb-6 font-serif text-4xl font-light leading-tight text-navy sm:text-5xl">
              Let&apos;s start the{" "}
              <span className="italic text-teal">conversation</span>
            </h2>

            <p className="mb-10 max-w-md font-light leading-relaxed text-navy/60">
              Whether you&apos;re building wealth from scratch, planning for
              retirement, or navigating a major life transition, let&apos;s
              create a plan that aligns with what matters most to you.
            </p>

            <div className="relative mb-10 max-w-md">
              <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                <Image
                  src="/jemma3.jpeg"
                  alt="Jemma Daley"
                  fill
                  className="object-cover object-[center_48%]"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
              </div>
              <div
                className="absolute -bottom-3 -right-3 h-20 w-20 border border-teal/70"
                aria-hidden="true"
              />
            </div>

            <div className="space-y-4 break-words text-sm text-navy/70 sm:text-base">
              <p className="flex flex-wrap gap-x-4 gap-y-1">
                <span className="section-label mr-4 text-navy/40">E.</span>
                <a
                  href="mailto:jemma.daley@sjpp.asia"
                  className="transition-colors hover:text-teal"
                >
                  jemma.daley@sjpp.asia
                </a>
              </p>
              <p className="flex flex-wrap gap-x-4 gap-y-1">
                <span className="section-label mr-4 text-navy/40">In.</span>
                <a
                  href="https://www.linkedin.com/in/jemmadaley"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-teal"
                >
                  linkedin.com/in/jemmadaley
                </a>
              </p>
              <p className="flex flex-wrap gap-x-4 gap-y-1">
                <span className="section-label mr-4 text-navy/40">Ig.</span>
                <a
                  href="https://www-fallback.instagram.com/jemmadaley/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-teal"
                >
                  instagram.com/jemmadaley
                </a>
              </p>
            </div>
          </Reveal>

          <Reveal
            className="self-center border border-navy/10 bg-cream p-6 sm:p-8 lg:p-12"
            delay={120}
          >
            <p className="section-label mb-2 text-teal">Contact Form</p>
            <p className="mb-8 text-sm font-light text-navy/60">
              Tell me a little about what you&apos;re looking for, and I&apos;ll
              come back to you with the next best step.
            </p>

            {submitted ? (
              <div className="py-12 text-center">
                <p className="mb-2 font-serif text-2xl text-navy">Thank you!</p>
                <p className="font-light text-navy/60">
                  We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="section-label mb-2 block text-navy/45"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border border-navy/12 bg-white px-4 py-3 text-base text-navy transition-colors focus:border-teal focus:outline-none sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="section-label mb-2 block text-navy/45"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-navy/12 bg-white px-4 py-3 text-base text-navy transition-colors focus:border-teal focus:outline-none sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="section-label mb-2 block text-navy/45"
                  >
                    How Can I Help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full resize-none border border-navy/12 bg-white px-4 py-3 text-base text-navy transition-colors focus:border-teal focus:outline-none sm:text-sm"
                  />
                </div>
                <label className="flex cursor-pointer items-start gap-3 text-sm font-light text-navy/55">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 accent-teal"
                  />
                  I have read and agree to the Privacy Policy
                </label>
                <button
                  type="submit"
                  className="w-full bg-navy py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-teal hover:text-navy sm:tracking-[0.2em]"
                >
                  Send Message
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
