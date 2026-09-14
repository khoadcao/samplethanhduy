import { content } from "@/lib/content";

export function Experience() {
  const { experience } = content;

  return (
    <section id="experience" className="scroll-mt-20 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold sm:text-4xl lg:text-left">
          <span className="accent-text">{experience.heading}</span>
        </h2>

        {/* Timeline: ngang trên desktop, dọc trên mobile */}
        <ol className="mt-10 flex flex-col gap-6 lg:flex-row lg:gap-0">
          {experience.milestones.map((milestone, index) => (
            <li key={milestone.period + milestone.org} className="lg:flex-1">
              <div className="relative lg:pr-6">
                {/* Đường nối trên desktop */}
                <span
                  className="absolute left-0 top-2 hidden h-0.5 w-full bg-accent-gradient lg:block"
                  aria-hidden="true"
                />
                <span
                  className="absolute left-0 top-0.5 hidden h-4 w-4 rounded-full bg-accent-gradient shadow-glow lg:block"
                  aria-hidden="true"
                />
                <div className="glow-card lg:mt-8">
                  <p className="text-sm font-semibold text-cyan-400">
                    {milestone.period}
                  </p>
                  <p className="mt-2 font-bold">{milestone.role}</p>
                  <p
                    className="mt-1 text-sm"
                    style={{ color: "rgb(var(--muted))" }}
                  >
                    {milestone.org}
                  </p>
                  <span className="sr-only">
                    {`${milestone.period}: ${milestone.role} tại ${milestone.org}`}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* Highlights */}
        <ul className="mt-10 flex flex-col gap-3">
          {experience.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-3">
              <span
                className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-gradient text-white"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span className="text-sm sm:text-base">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
