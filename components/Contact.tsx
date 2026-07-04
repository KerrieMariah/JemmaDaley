"use client";

import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
          <div>
            <p className="section-label text-teal mb-4">Get In Touch</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-navy mb-6 leading-tight">
              Let&apos;s start the{" "}
              <span className="italic text-teal">conversation</span>
            </h2>

            <div className="relative max-w-md mb-10">
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

            <p className="text-navy/60 font-light leading-relaxed mb-10 max-w-md">
            Whether you&apos;re building wealth from scratch, planning for
              retirement, or navigating a major life transition — let&apos;s
              create a plan that aligns with what matters most to you. 
            </p>




            <div className="space-y-4 text-navy/70">
              <p>
                <span className="section-label text-navy/40 mr-4">E.</span>
                <a
                  href="mailto:jemma.daley@sjpp.asia"
                  className="hover:text-teal transition-colors"
                >
                  jemma.daley@sjpp.asia
                </a>
              </p>
              <p>
                <span className="section-label text-navy/40 mr-4">In.</span>
                <a
                  href="https://www.linkedin.com/in/jemmadaley"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal transition-colors"
                >
                  linkedin.com/in/jemmadaley
                </a>
              </p>
              <p>
                <span className="section-label text-navy/40 mr-4">Ig.</span>
                <a
                  href="https://www-fallback.instagram.com/jemmadaley/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal transition-colors"
                >
                  instagram.com/jemmadaley
                </a>
              </p>
            </div>
          </div>

          <div className="bg-navy p-8 lg:p-12 self-center text-white">
            <p className="section-label text-teal mb-2">Contact Form</p>
            <p className="text-white/65 text-sm font-light mb-8">
              Tell me a little about what you&apos;re looking for, and I&apos;ll
              come back to you with the next best step.
            </p>

            {submitted ? (
              <div className="text-center py-12">
                <p className="font-serif text-2xl text-white mb-2">Thank you!</p>
                <p className="text-white/65 font-light">
                  We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="section-label text-teal block mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-white/10 border border-white/15 px-4 py-3 text-white text-sm focus:outline-none focus:border-teal transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="section-label text-teal block mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-white/10 border border-white/15 px-4 py-3 text-white text-sm focus:outline-none focus:border-teal transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="section-label text-teal block mb-2"
                  >
                    How Can I Help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full resize-none bg-white/10 border border-white/15 px-4 py-3 text-white text-sm focus:outline-none focus:border-teal transition-colors"
                  />
                </div>
                <label className="flex items-start gap-3 text-sm text-white/55 font-light cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 accent-teal"
                  />
                  I have read and agree to the Privacy Policy
                </label>
                <button
                  type="submit"
                  className="w-full py-4 bg-teal text-navy text-xs font-semibold tracking-[0.2em] uppercase hover:bg-white transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
