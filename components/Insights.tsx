import Link from "next/link";

const reels = [
  {
    id: "DaB1c2nvLgt",
    url: "https://www.instagram.com/reel/DaB1c2nvLgt/",
  },
  {
    id: "DYWgg9nCm3S",
    url: "https://www.instagram.com/reel/DYWgg9nCm3S/",
  },
  {
    id: "DVSaQIKidn3",
    url: "https://www.instagram.com/reel/DVSaQIKidn3/",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <p className="section-label text-navy/50 mb-4">Watch &amp; Learn</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-navy">
              On <span className="italic">Instagram</span>
            </h2>
          </div>
          <Link
            href="https://www.instagram.com/jemmadaley"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase text-navy/50 hover:text-teal transition-colors border-b border-navy/20 pb-1 self-start"
          >
            Follow @jemmadaley
          </Link>
        </div>

        <div className="instagram-reels-grid">
          {reels.map((reel) => (
            <div key={reel.id} className="instagram-reel-card">
              <iframe
                src={`https://www.instagram.com/reel/${reel.id}/embed`}
                className="instagram-reel-iframe"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                title="Instagram reel by Jemma Daley"
                scrolling="no"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
