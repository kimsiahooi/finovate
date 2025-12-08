import type { VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Badge, type badgeVariants } from "../ui/badge";

export default function CustomBadge({
  children,
  variant,
  className,
}: {
  children: ReactNode;
  variant?: VariantProps<typeof badgeVariants>["variant"];
  className?: string;
}) {
  return (
    <Badge
      variant={variant}
      className={cn(
        "bg-transparent text-primary py-2 px-5 border-border",
        className
      )}>
      {children}
    </Badge>
  );
}
