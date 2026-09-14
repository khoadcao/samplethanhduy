import { content } from "@/lib/content";

export function Programs() {
  const { programs } = content;

  return (
    <section id="programs" className="scroll-mt-20 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            <span className="accent-text">{programs.heading}</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base" style={{ color: "rgb(var(--muted))" }}>
            {programs.intro}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.cards.map((card) => (
            <div key={card.title} className="glow-card flex flex-col gap-4">
              <h3 className="text-lg font-bold">
                <span className="accent-text">{card.title}</span>
              </h3>
              <ul className="flex flex-col gap-2">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-gradient"
                      aria-hidden="true"
                    />
                    <span style={{ color: "rgb(var(--muted))" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Card CTA */}
          <div className="glow-card flex flex-col items-start justify-center gap-4 shadow-glow-lg">
            <h3 className="text-lg font-bold">{programs.ctaCard.title}</h3>
            <p className="text-sm" style={{ color: "rgb(var(--muted))" }}>
              {programs.ctaCard.description}
            </p>
            <a href="#hero" className="btn-primary">
              {programs.ctaCard.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
