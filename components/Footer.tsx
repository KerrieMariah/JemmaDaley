import Link from "next/link";

const footerNav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
  { href: "#insights", label: "Insights" },
];

const footerLinks = [
  { href: "https://www.linkedin.com/in/jemmadaley", label: "LinkedIn", external: true },
  { href: "#insights", label: "Podcast", external: false },
  { href: "#contact", label: "Newsletter", external: false },
  { href: "#contact", label: "Legal", external: false },
  { href: "#contact", label: "Privacy Policy", external: false },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
        <div className="grid md:grid-cols-[1fr_1.35fr_1fr] gap-12 lg:gap-10 items-start">
          {/* Left nav */}
          <nav className="flex flex-col gap-3 order-2 md:order-1 md:pt-[7.25rem]">
            {footerNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 hover:text-teal transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Center — brand & contact */}
          <div className="text-center order-1 md:order-2">
            <p className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-light uppercase tracking-[0.12em] leading-tight mb-8">
              Jemma
              <br />
              Daley
            </p>

            <p className="text-sm text-white/70 font-light leading-relaxed max-w-xs mx-auto mb-6">
              I&apos;m based in Hong Kong but available for consultations
              worldwide.
            </p>

            <p className="text-sm text-white/70 font-light mb-1">
              E.{" "}
              <a
                href="mailto:jemma.daley@sjpp.asia"
                className="hover:text-teal transition-colors duration-300"
              >
                jemma.daley@sjpp.asia
              </a>
            </p>

            <div className="flex items-center justify-center gap-5 mt-8">
              <a
                href="https://www.linkedin.com/in/jemmadaley"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-teal transition-colors duration-300"
                aria-label="LinkedIn"
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
                className="text-white/70 hover:text-teal transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163Zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right nav */}
          <nav className="flex flex-col gap-3 md:items-end order-3 md:pt-[7.25rem]">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-sm text-white/80 hover:text-teal transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="text-center text-xs text-white/30 mt-16 lg:mt-20">
          &copy; Jemma Daley {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
