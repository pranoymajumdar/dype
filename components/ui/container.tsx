import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "small" | "large";
  as?: React.ElementType;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    { children, className, size = "default", as: Component = "div", ...props },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "mx-auto px-4 w-full relative",
          {
            "max-w-screen-sm": size === "small",
            "max-w-screen-xl": size === "default",
            "max-w-screen-2xl": size === "large",
          },
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = "Container";
