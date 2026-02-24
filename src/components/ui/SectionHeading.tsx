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
    <div className={`mb-12 md:mb-14 lg:mb-16 ${alignClass}`}>
      {engLabel && (
        <p className={`mb-2 text-xs font-semibold tracking-[0.25em] uppercase ${dark ? "text-white/50" : "text-accent"}`}>
          {engLabel}
        </p>
      )}
      {label && (
        <div className="mb-3">
          {dark ? (
            <span className="inline-block rounded-full bg-white/20 px-5 py-2 text-sm font-medium tracking-wide text-white">
              {label}
            </span>
          ) : (
            <SectionLabel>{label}</SectionLabel>
          )}
        </div>
      )}
      <h2 className={`font-display text-[26px] font-bold leading-snug md:text-[32px] lg:text-[36px] ${dark ? "text-white" : "text-text"}`}>
        {title}
      </h2>
      <span className={`accent-bar ${align === "center" ? "accent-bar-center" : ""}`} />
      {subtitle && (
        <p className={`mt-5 text-base leading-relaxed md:text-lg ${dark ? "text-white/70" : "text-text-muted"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
