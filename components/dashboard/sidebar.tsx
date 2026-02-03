"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { useUIStore } from "@/stores/ui-store";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
    LayoutDashboard,
    Plane,
    Car,
    Bus,
    Wallet,
    Users,
    UserCog,
    X,
    TrendingUp,
} from "lucide-react";

const navItems = [
    {
        label: "Overview",
        href: "/dashboard",
        icon: TrendingUp,
    },
    {
        label: "Flights",
        href: "/dashboard/flights",
        icon: Plane,
    },
    {
        label: "Rides",
        href: "/dashboard/rides",
        icon: Car,
    },
    {
        label: "Bus & Transit",
        href: "/dashboard/bus-transit",
        icon: Bus,
    },
    {
        label: "Wallet",
        href: "/dashboard/wallet",
        icon: Wallet,
    },
    {
        label: "Staff usage limit",
        href: "/dashboard/staff-usage",
        icon: Users,
    },
    {
        label: "My Staff",
        href: "/dashboard/my-staff",
        icon: UserCog,
    },
];

export function Sidebar() {
    const pathname = usePathname();
    const { sidebarOpen, setSidebarOpen } = useUIStore();

    return (
        <>
            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed left-0 top-0  w-64 bg-[#1d2a3d] my-3 mx-3 rounded-2xl z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static",
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex flex-col h-full px-7 pt-10 pb-36">
                    {/* Header with Logo and Close Button */}
                    <div className="flex items-center justify-between mb-8">
                        <Image
                            src="/logo-white.png"
                            alt="Company Logo"
                            width={100}
                            height={100}
                            priority
                        />
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
                            aria-label="Close menu"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 space-y-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setSidebarOpen(false)}
                                    className={cn(
                                        "flex items-center gap-3 py-4 rounded-md text-[13px] font-light transition-all duration-200 relative pl-6", // added pl-6 for more left padding
                                        isActive
                                            ? "bg-[#4f586a] text-white shadow-lg before:absolute before:left-3 before:top-2/6 before:h-2/5 before:w-0.5 before:bg-white" // shorter left border
                                            : "px-4 text-white/70 hover:bg-white/10 hover:text-white"
                                    )}
                                >
                                    <Icon className="w-5 h-5 shrink-0" />
                                    <span>{item.label}</span>
                                </Link>

                            );
                        })}
                    </nav>


                </div>
            </aside>
        </>
    );
}
