import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        // ✅ Changed: added min-h-screen to ensure wrapper fills viewport,
        // ✅ overflow-y-auto on main content prevents hidden scroll
        <div className="bg-[#f8fafc] min-h-screen flex overflow-y-hidden -pt-[100px]">
            <div className="flex w-full">
                {/* Sidebar - Wrapped to extend clipping context on desktop without affecting mobile fixed layout */}
                <div className="shrink-0 lg:overflow-hidden lg:sticky lg:top-0">
                    <Sidebar />
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col lg:ml-0 overflow-y-hidden">
                    {/* Header stays sticky if needed */}
                    <Header />

                    {/* Main content wrapper */}
                    <main className="flex-1 p-2 lg:p-3 overflow-y-auto">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
