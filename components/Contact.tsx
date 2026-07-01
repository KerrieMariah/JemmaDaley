"use client";

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
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="section-label text-teal mb-4">Get In Touch</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-navy mb-6">
              Let&apos;s start the{" "}
              <span className="italic">conversation</span>
            </h2>
            <p className="text-navy/60 font-light leading-relaxed mb-10">
              I&apos;m based in Hong Kong and available for in-person or virtual
              consultations. Reach out to discuss your financial goals — no
              obligation, just clarity.
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
                <span className="section-label text-navy/40 mr-4">L.</span>
                Hong Kong SAR
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
            </div>
          </div>

          <div className="bg-cream p-8 lg:p-12">
            <p className="section-label text-navy/50 mb-2">Join Our List</p>
            <p className="text-navy/60 text-sm font-light mb-8">
              Receive updates on financial insights, events, and exclusive
              resources for expats in Hong Kong.
            </p>

            {submitted ? (
              <div className="text-center py-12">
                <p className="font-serif text-2xl text-navy mb-2">Thank you!</p>
                <p className="text-navy/60 font-light">
                  We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="section-label text-navy/40 block mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full bg-white border border-gray-200 px-4 py-3 text-navy text-sm focus:outline-none focus:border-teal transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="section-label text-navy/40 block mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-white border border-gray-200 px-4 py-3 text-navy text-sm focus:outline-none focus:border-teal transition-colors"
                  />
                </div>
                <label className="flex items-start gap-3 text-sm text-navy/50 font-light cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 accent-teal"
                  />
                  I have read and agree to the Privacy Policy
                </label>
                <button
                  type="submit"
                  className="w-full py-4 bg-navy text-white text-xs tracking-[0.2em] uppercase hover:bg-teal hover:text-navy transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
