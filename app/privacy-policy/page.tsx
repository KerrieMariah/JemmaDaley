import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Jemma Daley",
  description:
    "Privacy policy for Jemma Daley's website, including contact forms, newsletter signups, analytics, and third-party services.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="bg-white text-navy">
        <section className="relative overflow-hidden bg-navy px-6 pb-16 pt-32 text-white lg:px-10 lg:pb-24 lg:pt-40">
          <div
            className="absolute -right-12 top-20 hidden font-serif text-[10rem] font-light leading-none text-white/[0.035] lg:block"
            aria-hidden="true"
          >
            Privacy
          </div>
          <div className="relative mx-auto max-w-4xl">
            <Link
              href="/"
              className="section-label mb-10 inline-flex text-white/45 transition-colors hover:text-teal"
            >
              Back to Home
            </Link>
            <p className="section-label mb-5 text-teal">Privacy Policy</p>
            <h1 className="font-serif text-[clamp(3rem,7vw,72px)] font-medium uppercase leading-[0.88] tracking-[-0.02em] text-white">
              How your
              <br />
              <span className="text-teal">information is used</span>
            </h1>
            <p className="mt-8 max-w-2xl text-sm font-light leading-relaxed text-white/60 md:text-base">
              This policy explains how information submitted through this
              website may be collected, used, and protected.
            </p>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-3xl space-y-10 text-sm font-light leading-relaxed text-navy/65 md:text-base">
            <div>
              <h2 className="mb-4 font-serif text-3xl font-light text-navy">
                Information We Collect
              </h2>
              <p>
                When you submit a contact form or newsletter form, we may collect
                details such as your name, email address, message, and the date
                of submission. We only collect information that you choose to
                provide.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-3xl font-light text-navy">
                How We Use It
              </h2>
              <p>
                Your information may be used to respond to your enquiry, provide
                requested information, send occasional newsletter updates if you
                subscribe, and improve the website experience.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-3xl font-light text-navy">
                Newsletter Signups
              </h2>
              <p>
                Newsletter submissions may be stored in a Google Sheet or similar
                service for simple list management. You can request removal from
                the list at any time by contacting Jemma directly.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-3xl font-light text-navy">
                Analytics
              </h2>
              <p>
                This website uses Google Analytics to understand general website
                usage, such as page visits and traffic sources. Analytics data is
                used in aggregate and helps improve the site.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-3xl font-light text-navy">
                Third-Party Links
              </h2>
              <p>
                This website may link to third-party websites, including St.
                James&apos;s Place, LinkedIn, Instagram, and Google services.
                Those websites have their own privacy practices and policies.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-3xl font-light text-navy">
                Contact
              </h2>
              <p>
                For privacy-related requests, including updating or removing your
                details, email{" "}
                <a
                  href="mailto:jemma.daley@sjpp.asia"
                  className="text-navy transition-colors hover:text-teal"
                >
                  jemma.daley@sjpp.asia
                </a>
                .
              </p>
            </div>

            <p className="border-t border-navy/10 pt-8 text-xs uppercase tracking-[0.22em] text-navy/35">
              Last updated July 2026
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
