"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/auth-store";
import { ShareConnectionCard } from "@/components/dashboard/cards/share-connection-card";
import { WalletBalanceCard } from "@/components/dashboard/cards/wallet-balance-card";
import { TripsCard } from "@/components/dashboard/cards/trips-card";
import { ApprovalsCard } from "@/components/dashboard/cards/approvals-card";
import {
    FlightsBookingCard,
    RidesBusMarquee,
} from "@/components/dashboard/cards/action-cards";
import { StaffMembersCard } from "@/components/dashboard/cards/staff-members-card";

export default function DashboardPage() {
    const router = useRouter();
    const { isAuthenticated, user } = useAuthStore();

    // Redirect to login if not authenticated
    // Disabled for demo purposes - uncomment for production
    // useEffect(() => {
    //   if (!isAuthenticated) {
    //     router.push("/");
    //   }
    // }, [isAuthenticated, router]);

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Mobile Title */}
            <h1 className="lg:hidden text-xl font-semibold text-[#1a1f36]">
                Welcome to your dashboard
            </h1>

            {/* Top Row - Share Connection + Wallet + Flights Booking */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-3">
                <ShareConnectionCard />
                <WalletBalanceCard />
                <FlightsBookingCard />
            </div>

            {/* Middle Row - Trips + Approvals + Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-3">
                {/* Trips Card */}
                <TripsCard />

                {/* Approvals Card */}
                <ApprovalsCard />

                {/* Ride & Bus Action Cards - Marquee */}
                <RidesBusMarquee />
            </div>

            {/* Bottom Row - Staff Members */}
            {/* <div className="relative max-w-md">
                <StaffMembersCard />
            </div> */}
        </div>
    );
}
