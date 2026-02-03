"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { companyLink } from "@/data/mock-data";
import { cn } from "@/lib/utils";

export function ShareConnectionCard() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(companyLink);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        // share-connection-card component changes were made here
        // Added: rounded-none to remove border radius completely
        // Removed: default roundin
        <Card className="bg-[#f0f6ff] border-[#e2e8f0] transition-all duration-200 rounded-[5px] shadow-none mb-[90px]">
            {/* 
                share-connection-card component changes were made here
                Added: px-5 py-3 to reduce vertical size
                Removed: p-5
            */}
            <CardContent className="px-5 py-3">
                <p className="text-sm font-light text-[#64748b]">Connect team</p>
                {/* 
                    share-connection-card component changes were made here
                    Added: mb-2 for tighter spacing
                    Removed: mb-4
                */}
                <h3 className="text-lg font-normal text-[#1a1f36] mb-3">
                    Share connection link
                </h3>

                <Button
                    variant="secondary"
                    className=" px-8 flex items-center justify-between rounded-[5px]"
                >
                    <span className="flex items-center gap-5">Copy company link <Copy className="w-4 h-4" /></span>

                </Button>

            </CardContent>
        </Card>
    );
}
