"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockApprovals } from "@/data/mock-data";
import { ArrowRight, ChevronDown, MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

type FilterType = "Flights" | "Rides" | "Bus";

export function ApprovalsCard() {
    const [filter, setFilter] = useState<FilterType>("Flights");
    const [showFilterMenu, setShowFilterMenu] = useState(false);

    return (
        <Card className="bg-white border-[#e2e8f0] hover:shadow-lg transition-all duration-200 rounded-[5px] -mt-10 mb-8">
            <CardContent className="p-5">
                {/* Count with Label */}
                <div className="flex items-start gap-2 mb-4">
                    <span className="text-6xl font-bold text-[#1c293c]">
                        {mockApprovals.count}
                    </span>
                    <div className="pt-1">
                        <span className="text-sm font-semibold text-[#1c293c]">Approvals</span>
                        <p className="text-sm text-[#1c293c] font-semibold">Pending</p>
                    </div>
                </div>

                {/* Route */}
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-semibold text-[#1a1f36]">
                        {mockApprovals.route.from}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#64748b]" />
                    <span className="text-lg font-semibold text-[#1a1f36]">
                        {mockApprovals.route.to}
                    </span>
                </div>

                {/* Booked By */}
                <p className="text-sm text-[#64748b] mb-2">
                    Booked by {mockApprovals.bookedBy}
                </p>

                {/* View Request Button */}
                <Button variant="outline" size="sm" className="text-xs mb-2">
                    VIEW REQUEST
                </Button>

                {/* Divider */}

            </CardContent>
            <div className="border-t border-[#e2e8f0] my-4"></div>
            {/* View All and Filter */}
            <div className="flex items-center justify-between px-5">
                <button className="text-sm text-[#1a1f36] font-light hover:text-[#4a7fff] transition-colors flex items-center gap-2">
                    View all requests
                    <MoveRight className="w-3 h-3 " />
                </button>

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
                            {(["Flights", "Rides", "Bus"] as FilterType[]).map((option) => (
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
        </Card>
    );
}
