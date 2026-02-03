"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AvatarGroup } from "@/components/ui/avatar";
import { mockStaffMembers } from "@/data/mock-data";
import { MessageCircle } from "lucide-react";

export function StaffMembersCard() {
    const staffAvatars = mockStaffMembers.slice(0, 5).map(() => ({
        src: "/33.jpg",
        fallback: "", // required by type, visually unused
    }));

    return (
        <Card className="bg-white border-[#e2e8f0] hover:shadow-lg transition-all duration-200">
            <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <AvatarGroup avatars={staffAvatars} max={3} size="md" />
                    <span className="text-sm text-[#64748b] font-medium">
                        +{mockStaffMembers.length} staff members
                    </span>
                </div>

                <Button variant="outline" size="sm" className="text-xs gap-2">
                    VIEW
                </Button>
            </CardContent>

            {/* Chat FAB */}
            <div className="absolute -bottom-3 -right-3">
                <button className="w-12 h-12 rounded-full bg-[#7c3aed] text-white shadow-lg hover:bg-[#6d28d9] transition-colors flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                </button>
            </div>
        </Card>
    );
}
