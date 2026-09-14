import { content } from "@/lib/content";
import { SkillBar } from "@/components/SkillBar";

export function About() {
  const { about } = content;

  return (
    <section id="about" className="scroll-mt-20 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Ảnh + tiêu đề phụ + tiểu sử */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              {about.heading}
            </p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              <span className="accent-text">{about.subtitle}</span>
            </h2>
            <div className="mt-6 flex flex-col gap-6 sm:flex-row">
              <div className="glow-card w-full max-w-[220px] shrink-0 overflow-hidden p-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/portrait.svg"
                  alt="Ảnh chân dung ThS. Phạm Lâm Tùng"
                  className="h-auto w-full"
                />
              </div>
              <div
                className="flex flex-col gap-4 text-sm sm:text-base"
                style={{ color: "rgb(var(--muted))" }}
              >
                {about.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Cột chuyên môn */}
          <div className="glow-card">
            <h3 className="text-xl font-bold sm:text-2xl">
              {about.skillsHeading}
            </h3>
            <div className="mt-6 flex flex-col gap-5">
              {about.skills.map((skill) => (
                <SkillBar
                  key={skill.label}
                  label={skill.label}
                  percent={skill.percent}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
