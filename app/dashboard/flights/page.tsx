import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane } from "lucide-react";

export default function FlightsPage() {
    return (
        <div className="space-y-6 animate-fade-in">
            <h1 className="text-2xl font-semibold text-[#1a1f36]">Flights</h1>

            <Card className="bg-white border-[#e2e8f0]">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-[#4a7fff]/10">
                            <Plane className="w-6 h-6 text-[#4a7fff]" />
                        </div>
                        <span>Flight Bookings</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-[#64748b]">
                        Manage and track all flight bookings for your organization. View upcoming flights, booking history, and more.
                    </p>
                    <div className="mt-6 p-8 rounded-xl bg-[#f8fafc] border border-dashed border-[#e2e8f0] text-center">
                        <Plane className="w-12 h-12 text-[#cbd5e1] mx-auto mb-4" />
                        <p className="text-[#94a3b8]">No flights booked yet</p>
                        <p className="text-sm text-[#cbd5e1] mt-1">Book your first flight to get started</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
