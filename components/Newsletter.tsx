"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "missing-endpoint" | "error";

export default function Newsletter() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const endpoint = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT;

    if (!endpoint) {
      setStatus("missing-endpoint");
      return;
    }

    setStatus("loading");

    try {
      const form = event.currentTarget;
      const data = new FormData(form);
      data.append("source", "Jemma Daley website");

      await fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="mx-auto mt-14 max-w-2xl border-y border-white/10 py-8 text-center lg:mt-16">
      <p className="section-label mb-4 text-teal">Newsletter</p>
      <h2 className="font-serif text-2xl font-light leading-tight text-white md:text-3xl">
        Notes on wealth,
        <span className="italic text-white/70"> life abroad</span>
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-sm font-light leading-relaxed text-white/55">
        Occasional insights for expats building clarity around money, family,
        and long-term financial decisions.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-7 grid max-w-xl gap-3 sm:grid-cols-[1fr_auto]"
      >
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="Email address"
          className="w-full border border-white/15 bg-white/8 px-4 py-3 text-base text-white transition-colors placeholder:text-white/35 focus:border-teal focus:outline-none sm:text-sm"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-teal px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-navy transition-all duration-300 hover:bg-white disabled:cursor-wait disabled:opacity-70"
        >
          {status === "loading" ? "Joining" : "Join"}
        </button>
      </form>

      {status === "success" && (
        <p className="mt-4 text-sm font-light text-white/60">
          Thank you, you&apos;re on the list.
        </p>
      )}
      {status === "missing-endpoint" && (
        <p className="mt-4 text-sm font-light text-white/60">
          Newsletter signups are ready to connect. Add your Google Sheet
          endpoint to enable submissions.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm font-light text-white/60">
          Something went wrong. Please try again in a moment.
        </p>
      )}
    </div>
  );
}
