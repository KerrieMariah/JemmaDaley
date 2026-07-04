"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#insights", label: "Insights" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <Link
          href="#home"
          className={`font-serif text-xl lg:text-2xl tracking-[0.15em] font-medium uppercase transition-colors duration-500 ${
            scrolled || menuOpen ? "text-navy" : "text-white"
          }`}
        >
          Jemma Daley
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-widest uppercase hover:text-teal transition-colors duration-300 ${
                scrolled ? "text-navy/70" : "text-white/75"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className={`hidden lg:inline-flex items-center px-6 py-2.5 border text-xs tracking-widest uppercase transition-all duration-300 ${
            scrolled
              ? "border-navy text-navy hover:bg-navy hover:text-white"
              : "border-white/60 text-white hover:bg-teal hover:border-teal hover:text-navy"
          }`}
        >
          Inquire Today
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-px transition-all duration-300 ${scrolled || menuOpen ? "bg-navy" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`}
          />
          <span
            className={`block w-6 h-px transition-all duration-300 ${scrolled || menuOpen ? "bg-navy" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px transition-all duration-300 ${scrolled || menuOpen ? "bg-navy" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-100 px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-navy/70 hover:text-teal transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center px-6 py-3 border border-navy text-navy text-xs tracking-widest uppercase"
          >
            Inquire Today
          </Link>
        </nav>
      )}
    </header>
  );
}
