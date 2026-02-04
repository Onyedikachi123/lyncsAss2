"use client";

import { useAuthStore } from "@/stores/auth-store";
import { useUIStore } from "@/stores/ui-store";
import { Logo } from "@/components/logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
    const { user } = useAuthStore();
    const { notificationCount, toggleSidebar } = useUIStore();

    const firstName = user?.firstName || "Oluwaseun";
    // const initials = user
    //     ? `${user.firstName[0]}${user.lastName[0]}`
    //     : "G";

    return (
        <header className="sticky top-0 z-30 bg-white border border-[#e2e8f0] px-4 lg:px-6 py-2 rounded-2xl mt-3 mx-3 lg:mx-5">
            <div className="flex items-center justify-between">
                {/* Left Side - Mobile Menu + Title */}
                <div className="flex items-center gap-4">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleSidebar}
                        className="lg:hidden p-2 rounded-lg hover:bg-[#f1f5f9] transition-colors"
                        aria-label="Open menu"
                    >
                        <Menu className="w-6 h-6 text-[#1a1f36]" />
                    </button>

                    {/* Mobile Logo */}
                    <div className="lg:hidden">
                        <Logo size="md" />
                    </div>

                    {/* Title - Desktop Only */}
                    <h1 className="hidden lg:block text-xl font-normal text-[#1a1f36]">
                        Welcome to your dashboard
                    </h1>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-4">
                    {/* Notification Bell */}
                    <button
                        className="relative p-2 rounded-lg hover:bg-[#f1f5f9] transition-colors group"
                        aria-label={`${notificationCount} notifications`}
                    >
                        <Bell className="w-5 h-5 text-[#64748b] group-hover:text-[#1a1f36] transition-colors" />
                        {notificationCount > 0 && (
                            <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-red-500 text-white text-[10px] font-bold px-1">
                                {notificationCount > 99 ? "99+" : notificationCount}
                            </span>
                        )}
                    </button>

                    {/* User Info */}
                    <div className="flex items-center gap-3">
                        {/* Logo beside name - matching design */}
                        <div className="hidden sm:block">
                            <Logo size="sm" />
                        </div>

                        <span className="hidden sm:block text-sm font-medium text-[#1a1f36]">
                            Hi, {firstName}
                        </span>

                        {/* <button className="flex items-center gap-2 p-1 rounded-full hover:bg-[#f1f5f9] transition-colors">
                            <Avatar className="w-9 h-9">
                                <AvatarImage src={user?.avatarUrl} />
                                <AvatarFallback className="bg-[#1a1f36] text-white text-sm">
                                    {initials}
                                </AvatarFallback>
                            </Avatar>
                        </button> */}
                    </div>
                </div>
            </div>
        </header>
    );
}
