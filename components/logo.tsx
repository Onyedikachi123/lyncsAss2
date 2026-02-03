import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
    variant?: "dark" | "light";
    size?: "sm" | "md" | "lg";
    className?: string;
}

export function Logo({ variant = "dark", size = "md", className }: LogoProps) {
    const sizeClasses = {
        sm: { width: 80, height: 26 },
        md: { width: 120, height: 40 },
        lg: { width: 160, height: 53 },
    };

    const dimensions = sizeClasses[size];

    return (
        <div className={cn("relative", className)}>
            <Image
                src="/logo.png"
                alt="Lyncs Logo"
                width={dimensions.width}
                height={dimensions.height}
                className={cn(
                    "object-contain",
                    variant === "light" && "brightness-0 invert"
                )}
                priority
            />
        </div>
    );
}
