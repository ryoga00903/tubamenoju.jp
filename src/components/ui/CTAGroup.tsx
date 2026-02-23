import { Phone, MessageCircle, FileText } from "lucide-react";
import { COMPANY } from "@/lib/constants";

interface CTAGroupProps {
  size?: "sm" | "md" | "lg";
  layout?: "horizontal" | "vertical";
  className?: string;
}

export default function CTAGroup({
  size = "md",
  layout = "horizontal",
  className = "",
}: CTAGroupProps) {
  const isLg = size === "lg";
  const isSm = size === "sm";

  const btnBase = "inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-200 ease-out shadow-md hover:shadow-lg active:scale-[0.98]";
  const btnSize = isLg
    ? "px-8 py-4 text-lg"
    : isSm
      ? "px-4 py-2.5 text-sm"
      : "px-6 py-3 text-base";

  const containerClass =
    layout === "vertical"
      ? "flex flex-col gap-3"
      : "flex flex-col sm:flex-row gap-3";

  return (
    <div className={`${containerClass} ${className}`}>
      <a
        href={COMPANY.phoneHref}
        className={`${btnBase} ${btnSize} bg-accent text-white hover:bg-accent-dark`}
      >
        <Phone size={isLg ? 22 : 18} />
        {COMPANY.phone}
      </a>
      <a
        href={COMPANY.lineUrl}
        className={`${btnBase} ${btnSize} bg-secondary text-white hover:bg-secondary-dark`}
      >
        <MessageCircle size={isLg ? 22 : 18} />
        LINEで相談する
      </a>
      <a
        href="/#contact"
        className={`${btnBase} ${btnSize} border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white`}
      >
        <FileText size={isLg ? 22 : 18} />
        無料見積もり
      </a>
    </div>
  );
}
