import heroPhoto from "../assets/keila-santos-hero.jpeg";

export function HeroPhoto() {
  return (
    <div className="hero-photo reveal relative mx-auto w-full max-w-[410px] lg:max-w-none">
      <div
        className="absolute -inset-3 translate-x-2 translate-y-2 border border-accent/15"
        aria-hidden="true"
      />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] border border-border/80 bg-card shadow-[var(--shadow-deep)]">
        <img
          src={heroPhoto}
          alt="Retrato de Keila Santos"
          width={720}
          height={1280}
          fetchPriority="high"
          className="h-full w-full object-cover object-[center_32%]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_72%,var(--background)_118%)] opacity-35"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}