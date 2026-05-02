import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "dark" | "light" | "ghost";
  className?: string;
  type?: "button" | "submit";
}

export function Button({ href, children, variant = "dark", className, type = "button" }: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-bronze focus:ring-offset-2",
    variant === "dark" && "bg-charcoal text-ivory hover:-translate-y-0.5 hover:bg-black",
    variant === "light" && "bg-ivory text-charcoal hover:-translate-y-0.5 hover:bg-white",
    variant === "ghost" && "border border-charcoal/15 bg-white/70 text-charcoal hover:-translate-y-0.5 hover:bg-white",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
