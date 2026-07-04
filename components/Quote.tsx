export default function Quote() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <p className="font-serif text-3xl md:text-4xl lg:text-[3.25rem] font-semibold text-navy leading-tight mb-10">
          <span className="quote-mark block mb-4 font-semibold">&ldquo;</span>
          Financial planning illuminates the path to confidence, transforming
          complexity into a clear vision for your future
          <span className="quote-mark block mt-4 font-semibold">&rdquo;</span>
        </p>
        <p className="section-label text-navy/60 font-semibold tracking-[0.3em]">
          — Jemma Daley
        </p>
      </div>
    </section>
  );
}
