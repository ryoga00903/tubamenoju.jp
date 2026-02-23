import { Phone, MessageCircle, FileText } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "accent" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: "phone" | "line" | "document";
  href?: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg",
  secondary:
    "bg-secondary text-white hover:bg-secondary-dark shadow-md hover:shadow-lg",
  accent:
    "bg-accent text-white hover:bg-accent-dark shadow-md hover:shadow-lg",
  outline:
    "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const iconMap = {
  phone: Phone,
  line: MessageCircle,
  document: FileText,
};

export default function Button({
  variant = "primary",
  size = "md",
  icon,
  href,
  children,
  className = "",
  fullWidth = false,
}: ButtonProps) {
  const IconComponent = icon ? iconMap[icon] : null;
  const classes = `
    inline-flex items-center justify-center gap-2 rounded-xl font-bold
    transition-all duration-200 ease-out active:scale-[0.98]
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `.trim();

  const content = (
    <>
      {IconComponent && <IconComponent size={size === "lg" ? 22 : 18} />}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes}>
      {content}
    </button>
  );
}
