import SectionLabel from "./SectionLabel";

interface SectionHeadingProps {
  label?: string;
  engLabel?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
}

export default function SectionHeading({
  label,
  engLabel,
  title,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-10 md:mb-12 lg:mb-14 ${alignClass}`}>
      {engLabel && (
        <p className={`mb-2 text-[11px] font-semibold tracking-[0.2em] uppercase ${dark ? "text-white/50" : "text-accent"}`}>
          {engLabel}
        </p>
      )}
      {label && (
        <div className="mb-3">
          {dark ? (
            <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-medium tracking-wide text-white">
              {label}
            </span>
          ) : (
            <SectionLabel>{label}</SectionLabel>
          )}
        </div>
      )}
      <h2 className={`font-display text-2xl font-bold leading-snug md:text-[28px] lg:text-[32px] ${dark ? "text-white" : "text-text"}`}>
        {title}
      </h2>
      <span className={`accent-bar ${align === "center" ? "accent-bar-center" : ""}`} />
      {subtitle && (
        <p className={`mt-4 text-sm leading-relaxed md:text-base ${dark ? "text-white/70" : "text-text-muted"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
