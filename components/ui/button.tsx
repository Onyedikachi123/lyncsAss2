import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default:
                    "bg-[#4a7fff] text-white hover:bg-[#3a6ae8] focus-visible:ring-[#4a7fff] shadow-md hover:shadow-lg active:scale-[0.98]",
                destructive:
                    "bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500",
                outline:
                    "border border-[#e2e8f0] bg-white hover:bg-[#f8fafc] hover:text-[#1a1f36] focus-visible:ring-[#4a7fff]",
                secondary:
                    "bg-[#1a1f36] text-white hover:bg-[#252b48] focus-visible:ring-[#1a1f36]",
                ghost:
                    "hover:bg-[#f1f5f9] hover:text-[#1a1f36] focus-visible:ring-[#4a7fff]",
                link:
                    "text-[#4a7fff] underline-offset-4 hover:underline focus-visible:ring-[#4a7fff]",
            },
            size: {
                default: "h-11 px-5 py-2",
                sm: "h-9 rounded-md px-3 text-xs",
                lg: "h-12 rounded-xl px-8 text-base",
                icon: "h-10 w-10 rounded-lg",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, isLoading = false, children, disabled, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading ? (
                    <>
                        <Loader2 className="animate-spin" />
                        <span>Loading...</span>
                    </>
                ) : (
                    children
                )}
            </Comp>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
