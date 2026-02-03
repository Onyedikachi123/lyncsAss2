"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AvatarGroup } from "@/components/ui/avatar";
import { mockTrips, mockStaffMembers } from "@/data/mock-data";
import { Settings2, ArrowRight, ChevronDown, MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

type TripFilter = "Flights" | "Rides" | "Bus";

export function TripsCard() {
    const [filter, setFilter] = useState<TripFilter>("Flights");
    const [showFilterMenu, setShowFilterMenu] = useState(false);

    const filteredTrips = mockTrips.filter(
        (trip) => filter === "Flights" ? trip.type === "Flight" : trip.type === filter
    );
    const displayTrip = filteredTrips[0] || mockTrips[0];


    const staffAvatars = mockStaffMembers.slice(0, 5).map(() => ({
        src: "/33.jpg",
        fallback: "", // required by type, visually unused
    }));

    const getStatusVariant = (status: string) => {
        switch (status) {
            case "Approved":
                return "success";
            case "Pending":
                return "warning";
            case "Rejected":
                return "destructive";
            default:
                return "secondary";
        }
    };

    return (
        <Card className="bg-white border-[#e2e8f0] hover:shadow-lg transition-all duration-200 -mt-24 rounded-[5px] mb-8">
            <CardContent className="px-5 pt-5">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <Settings2 className="w-4 h-4 text-[#64748b]" />
                        <span className="text-sm font-medium text-[#1a1f36]">Trips</span>
                    </div>

                    {/* Filter Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setShowFilterMenu(!showFilterMenu)}
                            className="flex items-center gap-2 px-3 py-1.5 text-sm text-[#64748b] hover:text-[#1a1f36] border border-[#e2e8f0] rounded-lg hover:bg-[#f8fafc] transition-colors"
                        >
                            {filter}
                            <ChevronDown className={cn("w-4 h-4 transition-transform", showFilterMenu && "rotate-180")} />
                        </button>

                        {showFilterMenu && (
                            <div className="absolute right-0 mt-1 w-32 bg-white border border-[#e2e8f0] rounded-lg shadow-lg z-10 py-1">
                                {(["Flights", "Rides", "Bus"] as TripFilter[]).map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => {
                                            setFilter(option);
                                            setShowFilterMenu(false);
                                        }}
                                        className={cn(
                                            "w-full px-3 py-2 text-left text-sm hover:bg-[#f8fafc] transition-colors",
                                            filter === option ? "text-[#4a7fff] font-medium" : "text-[#64748b]"
                                        )}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Trip Details */}
                <div className="space-y-3 border border-[#e2e8f1] rounded-[5px] p-3">
                    {/* Route */}
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-[#1a1f36]">
                            {displayTrip.route.from}
                        </span>
                        <MoveRight className="w-5 h-5 text-[#193cb8]" />
                        <span className="text-xl font-bold text-[#1a1f36]">
                            {displayTrip.route.to}
                        </span>
                    </div>

                    {/* Booked By */}
                    <p className="text-sm text-[#64748b] -mt-2">
                        Booked by {displayTrip.bookedBy}
                    </p>

                    {/* Date */}
                    <p className="text-sm text-[#94a3b8] -mt-2">{displayTrip.date}</p>

                    {/* Status and View Button */}
                    <div className="flex items-center justify-between pt-2 -mt-4">
                        <Badge
                            variant={getStatusVariant(displayTrip.status)}
                            className="bg-transparent p-0"
                        >
                            {displayTrip.status}
                        </Badge>

                        <Button variant="outline" size="sm" className="text-xs">
                            VIEW TRIP
                        </Button>
                    </div>
                </div>

                {/* Staff Avatars */}
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
                            also booked for you
                        </span>
                    </div>
                </div>



                {/* View All Link Footer */}


            </CardContent>
            <div className="py-5 px-5 border-t border-[#e2e8f1] ">
                {/* Footer border added here */}
                <button className="text-sm text-[#1a1f36] font-light transition-colors flex items-center gap-2 -pb-5">
                    View all trips
                    <MoveRight className="w-3 h-3" />
                </button>
            </div>
        </Card>
    );
}
