import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car } from "lucide-react";

export default function RidesPage() {
    return (
        <div className="space-y-6 animate-fade-in">
            <h1 className="text-2xl font-semibold text-[#1a1f36]">Rides</h1>

            <Card className="bg-white border-[#e2e8f0]">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-[#22c55e]/10">
                            <Car className="w-6 h-6 text-[#22c55e]" />
                        </div>
                        <span>Ride Bookings</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-[#64748b]">
                        Book and manage rides for your staff members. Track active rides and view ride history.
                    </p>
                    <div className="mt-6 p-8 rounded-xl bg-[#f8fafc] border border-dashed border-[#e2e8f0] text-center">
                        <Car className="w-12 h-12 text-[#cbd5e1] mx-auto mb-4" />
                        <p className="text-[#94a3b8]">No rides booked yet</p>
                        <p className="text-sm text-[#cbd5e1] mt-1">Book a ride for your staff members</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
