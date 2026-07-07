"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import AjaxLoader from "@/components/AjaxLoader";
import Reveal from "@/components/Reveal";

type SubmitStatus = "idle" | "loading" | "success" | "error";

type ContactResponse = {
  ok?: boolean;
  code?: string;
  error?: string;
  requestId?: string;
};

export default function Contact() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorInfo, setErrorInfo] = useState<ContactResponse | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorInfo(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    let serverError: ContactResponse | null = null;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const result = (await response.json()) as ContactResponse;

      if (!response.ok || !result.ok) {
        serverError = result;
        throw new Error(result.code || "Unable to send message");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setErrorInfo(
        serverError || {
          code: "CONTACT_CLIENT_ERROR",
          error:
            error instanceof Error
              ? error.message
              : "Unable to send message from browser.",
        },
      );
      setStatus("error");
    }
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

            <div className="flex items-center justify-center gap-5 sm:hidden">
              <a
                href="mailto:jemma.daley@sjpp.asia"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:border-teal hover:bg-teal"
                aria-label="Email Jemma"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/jemmadaley"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:border-teal hover:bg-teal"
                aria-label="View Jemma on LinkedIn"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www-fallback.instagram.com/jemmadaley/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:border-teal hover:bg-teal"
                aria-label="View Jemma on Instagram"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>

            <div className="hidden space-y-4 break-words text-sm text-navy/70 sm:block sm:text-base">
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

            {status === "success" ? (
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
                    name="privacy"
                    className="mt-1 accent-teal"
                  />
                  I have read and agree to the Privacy Policy
                </label>
                {status === "error" && (
                  <p className="text-sm font-light text-navy/60">
                    Something went wrong. Please try again or email Jemma
                    directly.
                    {errorInfo?.code && (
                      <span className="mt-2 block text-xs uppercase tracking-[0.18em] text-navy/40">
                        Error code: {errorInfo.code}
                        {errorInfo.requestId
                          ? ` / Ref: ${errorInfo.requestId.slice(0, 8)}`
                          : ""}
                      </span>
                    )}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex w-full items-center justify-center gap-3 bg-navy py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-teal hover:text-navy disabled:cursor-wait disabled:opacity-70 sm:tracking-[0.2em]"
                >
                  {status === "loading" && (
                    <AjaxLoader label="Sending message" />
                  )}
                  {status === "loading" ? "Sending" : "Send Message"}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
