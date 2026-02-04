"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { mockStaffMembers } from "@/data/mock-data";
import { UserCog, Plus, Mail, Phone } from "lucide-react";

export default function MyStaffPage() {
    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-[#1a1f36]">My Staff</h1>
                <Button className="gap-2">
                    <Plus className="w-4 h-4" />
                    Add Staff
                </Button>
            </div>

            <Card className="bg-white border-[#e2e8f0]">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-[#4a7fff]/10">
                            <UserCog className="w-6 h-6 text-[#4a7fff]" />
                        </div>
                        <span>Staff Members ({mockStaffMembers.length})</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        {mockStaffMembers.map((staff) => (
                            <div
                                key={staff.id}
                                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-[#f8fafc] hover:bg-[#f1f5f9] transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <Avatar className="w-12 h-12">
                                        <AvatarFallback className="bg-[#1a1f36] text-white text-sm font-medium">
                                            {staff.initials}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium text-[#1a1f36]">{staff.name}</p>
                                        <p className="text-sm text-[#64748b]">Staff Member</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 mt-4 sm:mt-0 self-end sm:self-auto">
                                    <Badge variant="success">Active</Badge>
                                    <div className="flex gap-2">
                                        <Button variant="ghost" size="icon" className="w-9 h-9">
                                            <Mail className="w-4 h-4 text-[#64748b]" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="w-9 h-9">
                                            <Phone className="w-4 h-4 text-[#64748b]" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
