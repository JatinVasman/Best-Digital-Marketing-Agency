"use client";

const clientNames = [
  "Taste of Punjab",
  "Priya's Boutique",
  "FitZone Gym",
  "Decor by Sonya Mehta",
  "Vasoo Bamboo Arts",
  "Vihaara",
  "Layers Clothing",
  "SmileCare Dental",
  "PhysioLife Clinic",
];

export default function TrustStrip() {
  const marqueeContent = clientNames.join(" • ") + " • ";
  const repeated = marqueeContent.repeat(4);

  return (
    <section className="section-contained py-8 border-y border-white/5 overflow-hidden">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        <span className="text-sm md:text-base text-[var(--text-muted)]/60 tracking-widest uppercase font-medium">
          {repeated}
        </span>
      </div>
    </section>
  );
}
