import { content } from "@/lib/content";

export function Footer() {
  const { footer, name, subtitle } = content;

  return (
    <footer
      className="border-t"
      style={{ borderColor: "rgb(var(--border))" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Logo" width={36} height={36} className="h-9 w-9" />
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-bold">{name}</span>
              {subtitle && (
                <span
                  className="text-[10px] font-semibold tracking-widest"
                  style={{ color: "rgb(var(--muted))" }}
                >
                  {subtitle}
                </span>
              )}
            </span>
          </div>
          <p className="mt-4 text-sm" style={{ color: "rgb(var(--muted))" }}>
            {footer.tagline}
          </p>
        </div>

        <nav className="flex flex-col gap-2">
          {footer.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div
        className="border-t py-4 text-center text-xs"
        style={{
          borderColor: "rgb(var(--border))",
          color: "rgb(var(--muted))",
        }}
      >
        {footer.copyright}
      </div>
    </footer>
  );
}
