import type { ReactNode, ComponentPropsWithoutRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface BaseProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  icon?: boolean;
  className?: string;
}

const variants: Record<string, string> = {
  primary:
    "bg-brand-orange text-white hover:bg-brand-orange-dark shadow-[0_1px_0_rgba(0,0,0,0.05)]",
  secondary:
    "bg-transparent text-ink-900 dark:text-mist-100 border border-ink-900/15 dark:border-mist-100/20 hover:border-brand-orange hover:text-brand-orange",
  ghost: "bg-white/10 text-white border border-white/25 hover:bg-white/20 backdrop-blur",
};

const sizes: Record<string, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-[15px]",
};

type Props = BaseProps &
  (
    | ({ href: string; external?: boolean } & Omit<ComponentPropsWithoutRef<"a">, "href">)
    | ({ href?: undefined } & ComponentPropsWithoutRef<"button">)
  );

export function CTAButton({
  children,
  variant = "primary",
  size = "md",
  icon = true,
  className = "",
  ...rest
}: Props) {
  const classes = `group inline-flex items-center gap-2 rounded-md font-medium tracking-tight transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in rest && rest.href) {
    const { href, external, ...anchorProps } = rest as {
      href: string;
      external?: boolean;
    } & ComponentPropsWithoutRef<"a">;
    if (external || href.startsWith("http")) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...anchorProps}>
          {children}
          {icon && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
        </a>
      );
    }
    return (
      <Link to={href} className={classes} {...anchorProps}>
        {children}
        {icon && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentPropsWithoutRef<"button">)}>
      {children}
      {icon && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
    </button>
  );
}
