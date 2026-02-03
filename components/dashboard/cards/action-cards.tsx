"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { mockStaffMembers } from "@/data/mock-data";
import { AvatarGroup } from "@/components/ui/avatar"

interface ActionCardProps {
    title: string;
    description: string;
    buttonText: string;
    variant?: "flights" | "rides" | "bus";
    imageSrc?: string;
    onClick?: () => void;
    className?: string; // Added for flexibility
}

const staffAvatars = mockStaffMembers.slice(0, 5).map(() => ({
    src: "/33.jpg",
    fallback: "", // required by type, visually unused
}));

export function ActionCard({
    title,
    description,
    buttonText,
    variant = "flights",
    imageSrc,
    onClick,
    className,
}: ActionCardProps) {
    const gradients = {
        flights: "from-[#7c3aed] via-[#a855f7] to-[#c084fc]",
        rides: "from-[#1a1f36] to-[#334155]",
        bus: "from-[#1a1f36] to-[#475569]",
    };

    return (
        <Card
            className={cn(
                "relative overflow-hidden border-0 rounded-[5px]",
                !imageSrc && "bg-[#1c293c]",
                className
            )}
        >
            {/* ActionCard image overlay changes were made here */}
            {imageSrc && (
                <>
                    {/* Background Image */}
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-[#1c293c]/80" />
                </>
            )}
            <CardContent className="p-5 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-white/80 text-sm mb-5 line-clamp-2">
                    {description}
                </p>
                <Button
                    variant="outline"
                    size="sm"
                    className={cn(
                        "bg-transparent border border-white text-white font-light rounded-[5px] px-5 py-5 text-base flex items-center gap-2 hover:bg-white/10",
                        variant === "flights" && "bg-white text-[#1a1f36] hover:bg-white/90"
                    )}
                    onClick={() => onClick?.()}
                >
                    <span>{buttonText}</span>

                    {(variant === "rides" || variant === "bus") && (
                        <ChevronRight className="w-4 h-4" />
                    )}
                </Button>

            </CardContent>

            {/* Decorative Elements - Simulating image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

            {/* Abstract Pattern */}
            <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white/10 blur-xl" />
            <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-white/5 blur-lg" />
        </Card>
    );
}

// function Marquee({ children }: { children: React.ReactNode }) {
//     return (
//         <div className="overflow-hidden whitespace-nowrap">
//             <div className="flex gap-4 animate-marquee">
//                 {children}
//                 {children}
//             </div>
//         </div>
//     );
// }

export function FlightsBookingCard() {
    return (
        <ActionCard
            title="Flights booking"
            description="Book a flight for your staff members"
            buttonText="Book now"
            imageSrc="/booking-img.jpg"
            variant="flights"
        />
    );
}

// 🔧 CHANGED: BookRidesCard now in marquee
export function BookRidesCard() {
    return (
        <ActionCard
            title="Book rides"
            description="Arrange rides for staff members when needed."
            buttonText="Book a ride"
            variant="rides"
            className="h-full"
        />
    );
}

// 🔧 CHANGED: BusTripsCard now in marquee
export function BusTripsCard() {
    return (
        <ActionCard
            title="Bus trips"
            description="Book bus tickets for staff members."
            buttonText="Book bus"
            variant="bus"
            className="h-full"
        />
    );
}

// 🔧 NEW: Combined Marquee for Rides and Bus
// 🔧 NEW: Combined Marquee for Rides and Bus
// Updated with JS-based scrolling and navigation buttons
export function RidesBusMarquee() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId: number;

        /*
           Infinite Scroll Logic:
           We duplicate the content (Cards A, B -> Cards A, B, A, B).
           When scrollLeft reaches the start of the second set (approx halfway),
           we instantly reset to 0 to create a seamless loop.
        */
        const scroll = () => {
            if (!isPaused) {
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                } else {
                    scrollContainer.scrollLeft += 0.5; // Smooth slow speed
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    const handleScroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;
        const scrollAmount = 320; // Approx card width + gap

        scrollRef.current.scrollBy({
            left: direction === "right" ? scrollAmount : -scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <div
            className="group relative w-full border border-white rounded-[5px] bg-transparent overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Navigation Buttons */}
            <div className="absolute inset-y-0 left-0 z-20 flex items-center pl-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                    onClick={() => handleScroll("left")}
                    className="p-1 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
            </div>
            <div className="absolute inset-y-0 right-0 z-20 flex items-center pr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                    onClick={() => handleScroll("right")}
                    className="p-1 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Scroll Container */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-hidden no-scrollbar py-0.5" // py-0.5 to prevent border clip
            >
                {/* Set 1 */}
                <div className="w-[200px] sm:w-[300px] flex-shrink-0">
                    <BookRidesCard />
                </div>
                <div className="w-[200px] sm:w-[300px] flex-shrink-0">
                    <BusTripsCard />
                </div>

                {/* Set 2 (Duplicate for Loop) */}
                <div className="w-[200px] sm:w-[300px] flex-shrink-0">
                    <BookRidesCard />
                </div>
                <div className="w-[200px] sm:w-[300px] flex-shrink-0">
                    <BusTripsCard />
                </div>
            </div>
            <div className="mt-5 py-4 px-3 border border-[#e2e8f1] bg-[#faf5ff] rounded-[5px]">
                <div className="flex items-center gap-3">
                    {/* AvatarGroup border added here */}
                    <AvatarGroup
                        avatars={staffAvatars}
                        max={1}
                        size="md"
                        className="gap-2"
                        avatarClassName="border-2 border-[#ad46ff] p-[1px] rounded-full"
                    // share-connection-card component changes: added 1px purple border to each avatar
                    />
                    <span className="text-sm text-[#64748b]">
                        staff memebers                    </span>
                </div>
            </div>
        </div>
    );
}

