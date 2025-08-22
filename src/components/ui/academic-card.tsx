import * as React from "react";
import { cn } from "@/lib/utils";

interface AcademicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "highlighted";
}

const AcademicCard = React.forwardRef<HTMLDivElement, AcademicCardProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-none border bg-card text-card-foreground transition-smooth hover:shadow-elegant border-l-4 border-l-primary",
        variant === "highlighted" && "bg-gradient-to-r from-accent/10 to-transparent border-primary/30",
        className
      )}
      {...props}
    />
  )
);
AcademicCard.displayName = "AcademicCard";

const AcademicCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
AcademicCardHeader.displayName = "AcademicCardHeader";

const AcademicCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-playfair text-2xl font-semibold leading-tight tracking-tight", className)}
    {...props}
  />
));
AcademicCardTitle.displayName = "AcademicCardTitle";

const AcademicCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
AcademicCardDescription.displayName = "AcademicCardDescription";

const AcademicCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
AcademicCardContent.displayName = "AcademicCardContent";

export {
  AcademicCard,
  AcademicCardHeader,
  AcademicCardTitle,
  AcademicCardDescription,
  AcademicCardContent,
};