"use client";

import { forwardRef, cloneElement, isValidElement, ReactElement } from "react";
import { cn } from "@/lib/utils/cn";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "ghost" | "outline-white";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      "inline-flex items-center justify-center gap-2",
      "font-heading font-semibold rounded-lg",
      "transition-all duration-300 ease-smooth",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      "disabled:opacity-50 disabled:cursor-not-allowed"
    );

    const variants = {
      primary: cn(
        "bg-primary text-white",
        "hover:bg-primary-600 active:bg-primary-800",
        "focus-visible:ring-primary"
      ),
      secondary: cn(
        "bg-white text-primary border-2 border-primary",
        "hover:bg-primary-50 active:bg-primary-100",
        "focus-visible:ring-primary"
      ),
      accent: cn(
        "bg-accent text-text",
        "hover:bg-accent-600 active:bg-accent-700",
        "focus-visible:ring-accent shadow-glow-gold"
      ),
      ghost: cn(
        "bg-transparent text-primary",
        "hover:bg-primary-50 active:bg-primary-100",
        "focus-visible:ring-primary"
      ),
      "outline-white": cn(
        "bg-transparent text-white border-2 border-white",
        "hover:bg-white/10 active:bg-white/20",
        "focus-visible:ring-white"
      ),
    };

    const sizes = {
      sm: "px-4 py-2 text-body-sm",
      md: "px-6 py-3 text-body-md",
      lg: "px-8 py-4 text-body-lg",
    };

    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

    // If asChild is true, clone the child element with button styles
    if (asChild && isValidElement(children)) {
      return cloneElement(children as ReactElement<{ className?: string }>, {
        className: cn(combinedClassName, (children as ReactElement<{ className?: string }>).props.className),
        ...props,
      });
    }

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : leftIcon ? (
          <span className="shrink-0">{leftIcon}</span>
        ) : null}
        {children}
        {rightIcon && !loading && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
