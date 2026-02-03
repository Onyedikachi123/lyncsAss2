import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
    {
        variants: {
            variant: {
                default: "bg-[#1a1f36] text-white",
                secondary: "bg-[#f1f5f9] text-[#475569]",
                success: "bg-[#dcfce7] text-[#16a34a]",
                warning: "bg-[#fef3c7] text-[#d97706]",
                destructive: "bg-[#fee2e2] text-[#dc2626]",
                outline: "border border-[#e2e8f0] text-[#475569]",
                info: "bg-[#dbeafe] text-[#2563eb]",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    );
}

export { Badge, badgeVariants };
