import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bus } from "lucide-react";

export default function BusTransitPage() {
    return (
        <div className="space-y-6 animate-fade-in">
            <h1 className="text-2xl font-semibold text-[#1a1f36]">Bus & Transit</h1>

            <Card className="bg-white border-[#e2e8f0]">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-[#f59e0b]/10">
                            <Bus className="w-6 h-6 text-[#f59e0b]" />
                        </div>
                        <span>Bus Bookings</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-[#64748b]">
                        Book bus tickets and manage transit for your organization. View schedules and booking history.
                    </p>
                    <div className="mt-6 p-8 rounded-xl bg-[#f8fafc] border border-dashed border-[#e2e8f0] text-center">
                        <Bus className="w-12 h-12 text-[#cbd5e1] mx-auto mb-4" />
                        <p className="text-[#94a3b8]">No bus tickets booked yet</p>
                        <p className="text-sm text-[#cbd5e1] mt-1">Book bus tickets for your staff</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
