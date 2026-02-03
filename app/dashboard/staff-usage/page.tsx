import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function StaffUsagePage() {
    return (
        <div className="space-y-6 animate-fade-in">
            <h1 className="text-2xl font-semibold text-[#1a1f36]">Staff Usage Limit</h1>

            <Card className="bg-white border-[#e2e8f0]">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-[#7c3aed]/10">
                            <Users className="w-6 h-6 text-[#7c3aed]" />
                        </div>
                        <span>Usage Limits</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-[#64748b] mb-6">
                        Set and manage spending limits for your staff members. Control budgets and track usage.
                    </p>

                    {/* Usage Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 rounded-xl bg-[#f8fafc]">
                            <p className="text-sm text-[#64748b]">Monthly Budget</p>
                            <p className="text-2xl font-bold text-[#1a1f36]">₦2,000,000</p>
                        </div>
                        <div className="p-4 rounded-xl bg-[#f8fafc]">
                            <p className="text-sm text-[#64748b]">Used This Month</p>
                            <p className="text-2xl font-bold text-[#f59e0b]">₦450,000</p>
                        </div>
                        <div className="p-4 rounded-xl bg-[#f8fafc]">
                            <p className="text-sm text-[#64748b]">Remaining</p>
                            <p className="text-2xl font-bold text-[#22c55e]">₦1,550,000</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
