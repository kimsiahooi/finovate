import type { VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { Button, type buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CustomButton({
	children,
	className,
	variant,
}: {
	children: ReactNode;
	className?: string;
	variant?: VariantProps<typeof buttonVariants>["variant"];
}) {
	return (
		<Button
			className={cn("h-auto py-4 px-6 leading-none!", className)}
			variant={variant}
		>
			{children}
		</Button>
	);
}
