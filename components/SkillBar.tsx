type SkillBarProps = {
  label: string;
  percent: number;
};

export function SkillBar({ label, percent }: SkillBarProps) {
  const width = Math.max(0, Math.min(100, percent));

  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm font-medium">
        <span>{label}</span>
        <span style={{ color: "rgb(var(--muted))" }}>{width}%</span>
      </div>
      <div
        className="h-2.5 w-full overflow-hidden rounded-full"
        style={{ backgroundColor: "rgb(var(--border))" }}
        role="progressbar"
        aria-valuenow={width}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div
          className="h-full rounded-full bg-accent-gradient shadow-glow"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
