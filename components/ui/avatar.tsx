"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
    React.ComponentRef<typeof AvatarPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Root
        ref={ref}
        className={cn(
            "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
            className
        )}
        {...props}
    />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
    React.ComponentRef<typeof AvatarPrimitive.Image>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Image
        ref={ref}
        className={cn("aspect-square h-full w-full", className)}
        {...props}
    />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
    React.ComponentRef<typeof AvatarPrimitive.Fallback>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
        ref={ref}
        className={cn(
            "flex h-full w-full items-center justify-center rounded-full bg-[#1a1f36] text-white text-sm font-medium",
            className
        )}
        {...props}
    />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

interface AvatarGroupProps {
    avatars: { src?: string; fallback: string }[];
    max?: number;
    size?: "sm" | "md" | "lg";
    className?: string;
    avatarClassName?: string;
}

function AvatarGroup({
    avatars,
    max = 4,
    size = "md",
    className,
    avatarClassName,
}: AvatarGroupProps) {
    const displayed = avatars.slice(0, max);
    const remaining = avatars.length - max;

    const sizeClasses = {
        sm: "h-8 w-8 text-xs",
        md: "h-10 w-10 text-sm",
        lg: "h-12 w-12 text-base",
    };

    return (
        <div className={cn("flex -space-x-3", className)}>
            {displayed.map((avatar, index) => (
                <Avatar
                    key={index}
                    className={cn(
                        sizeClasses[size],
                        "border-2 border-white ring-0",
                        avatarClassName
                    )}
                >
                    {avatar.src && <AvatarImage src={avatar.src} />}
                    <AvatarFallback className={sizeClasses[size]}>
                        {avatar.fallback}
                    </AvatarFallback>
                </Avatar>
            ))}
            {remaining > 0 && (
                <div
                    className={cn(
                        sizeClasses[size],
                        "flex items-center justify-center rounded-full bg-[#f1f5f9] text-[#475569] border-2 border-white font-medium",
                        avatarClassName
                    )}
                >
                    +{remaining}
                </div>
            )}
        </div>
    );
}

export { Avatar, AvatarImage, AvatarFallback, AvatarGroup };
