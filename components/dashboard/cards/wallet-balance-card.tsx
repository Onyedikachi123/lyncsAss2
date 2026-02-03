"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useUIStore } from "@/stores/ui-store";
import { mockWalletData } from "@/data/mock-data";
import { Eye, EyeOff, RefreshCw, ArrowRight, ArrowUpRight, Landmark } from "lucide-react";

export function WalletBalanceCard() {
    const { walletBalanceVisible, toggleWalletVisibility } = useUIStore();
    const { balance, currency, lastTransaction, accountNumber } = mockWalletData;

    const formattedBalance = walletBalanceVisible
        ? `${currency}${balance.toLocaleString()}`
        : `${currency}******`;

    return (
        <Card className="bg-[#fcf4ff] border-[#e2e8f0] rounded-[5px] shadow-none " style={{ height: "184px" }}>
            <CardContent className="p-5">
                <div className="flex items-center justify-between mb-0">
                    <p className="text-xs text-[#64748b]">Wallet balance</p>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="w-7 h-7 text-[#4a7fff] bg-[#8ec5ff] py-4 rounded-none"
                    >
                        <ArrowUpRight className="w-4 h-4" />
                    </Button>
                </div>

                {/* Balance */}
                <div className="flex items-center gap-3 mb-1">
                    <span className="text-2xl font-bold text-[#1a1f36]">
                        {formattedBalance}
                    </span>
                    <button
                        onClick={toggleWalletVisibility}
                        className="p-1.5 rounded-md hover:bg-[#f1f5f9] transition-colors text-[#64748b] hover:text-[#1a1f36]"
                        aria-label={walletBalanceVisible ? "Hide balance" : "Show balance"}
                    >
                        {walletBalanceVisible ? (
                            <EyeOff className="w-4 h-4" />
                        ) : (
                            <Eye className="w-4 h-4" />
                        )}
                    </button>
                </div>

                {/* Last Transaction */}
                <p className="text-xs text-[#64748b] mb-2 line-clamp-2">
                    {lastTransaction.description}
                </p>

                {/* Account Number and Actions */}
                <div className="flex items-center gap-2 ">
                    <div className="flex w-[60%] items-center gap-3 bg-[#4b004f] text-white px-4 py-3 rounded-[5px]">
                        <Landmark className="w-4 h-4 shrink-0" />
                        <span className="text-sm font-medium tracking-wide flex items-center gap-2">
                            <span className="tracking-widest">****</span>
                            <span>{accountNumber}</span>
                        </span>

                        <ArrowRight className="w-4 h-4 shrink-0 ml-auto" />
                    </div>

                    <Button
                        variant="outline"
                        size="icon"
                        className="w-16 h-9.5 border-[#4b004f] rounded-[5px] "
                    >
                        <RefreshCw className="w-4 h-4 text-[#4b004f]" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
