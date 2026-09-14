import { content } from "@/lib/content";

const tagPositions = [
  "left-2 top-8 sm:-left-6",
  "right-2 top-1/2 sm:-right-6",
  "bottom-8 left-1/2 -translate-x-1/2",
];

export function Hero() {
  const { hero } = content;

  return (
    <section id="hero" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(600px circle at 15% 20%, rgba(45,212,191,0.18), transparent 55%), radial-gradient(600px circle at 85% 30%, rgba(59,130,246,0.18), transparent 55%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        {/* Cột nội dung */}
        <div className="text-center lg:text-left">
          <p
            className="text-sm font-semibold tracking-widest sm:text-base"
            style={{ color: "rgb(var(--muted))" }}
          >
            {hero.greeting}
          </p>
          <h1 className="mt-2 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl xl:text-6xl">
            <span className="accent-text">{hero.highlightName}</span>
          </h1>
          <p
            className="mx-auto mt-6 max-w-xl text-base sm:text-lg lg:mx-0"
            style={{ color: "rgb(var(--muted))" }}
          >
            {hero.intro}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a href="#about" className="btn-primary">
              {hero.profileButton}
            </a>
            <a href="#programs" className="btn-ghost">
              {content.ctaLabel}
            </a>
          </div>

          {/* Thống kê */}
          <dl className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {hero.stats.map((stat) => (
              <div key={stat.value} className="text-center lg:text-left">
                <dt className="accent-text text-3xl font-extrabold sm:text-4xl">
                  {stat.value}
                </dt>
                <dd
                  className="mt-1 text-sm"
                  style={{ color: "rgb(var(--muted))" }}
                >
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Cột ảnh chân dung + tag nổi */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="glow-card overflow-hidden p-0 shadow-glow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/portrait.svg"
              alt="Ảnh chân dung Vũ Thành Duy"
              className="h-auto w-full"
            />
          </div>
          {hero.tags.map((tag, index) => (
            <span
              key={tag}
              className={`absolute rounded-full border px-3 py-1.5 text-xs font-semibold shadow-glow backdrop-blur ${tagPositions[index]}`}
              style={{
                borderColor: "rgb(var(--border))",
                backgroundColor: "rgb(var(--card) / 0.9)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
