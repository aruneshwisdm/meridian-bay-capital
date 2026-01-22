"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "accent" | "success" | "warning" | "error";
  size?: "sm" | "md";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center font-medium rounded-full";

    const variants = {
      primary: "bg-primary-50 text-primary",
      secondary: "bg-secondary-50 text-secondary",
      accent: "bg-accent-50 text-accent-700",
      success: "bg-success-50 text-success",
      warning: "bg-yellow-50 text-yellow-700",
      error: "bg-red-50 text-red-700",
    };

    const sizes = {
      sm: "px-2 py-0.5 text-caption",
      md: "px-3 py-1 text-body-sm",
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
