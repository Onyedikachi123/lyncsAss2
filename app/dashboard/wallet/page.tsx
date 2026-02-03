"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useUIStore } from "@/stores/ui-store";
import { mockWalletData } from "@/data/mock-data";
import { Wallet, Eye, EyeOff, ArrowUpRight, ArrowDownLeft, Plus } from "lucide-react";

export default function WalletPage() {
    const { walletBalanceVisible, toggleWalletVisibility } = useUIStore();
    const { balance, currency } = mockWalletData;

    const formattedBalance = walletBalanceVisible
        ? `${currency}${balance.toLocaleString()}`
        : `${currency}******`;

    return (
        <div className="space-y-6 animate-fade-in">
            <h1 className="text-2xl font-semibold text-[#1a1f36]">Wallet</h1>

            {/* Balance Card */}
            <Card className="bg-gradient-to-br from-[#1a1f36] to-[#334155] text-white border-0">
                <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <Wallet className="w-5 h-5" />
                            <span className="text-white/80">Available Balance</span>
                        </div>
                        <button
                            onClick={toggleWalletVisibility}
                            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                        >
                            {walletBalanceVisible ? (
                                <EyeOff className="w-5 h-5" />
                            ) : (
                                <Eye className="w-5 h-5" />
                            )}
                        </button>
                    </div>

                    <p className="text-4xl font-bold mb-6">{formattedBalance}</p>

                    <div className="flex gap-3">
                        <Button className="flex-1 bg-white text-[#1a1f36] hover:bg-white/90">
                            <Plus className="w-4 h-4 mr-2" />
                            Add Funds
                        </Button>
                        <Button variant="outline" className="flex-1 border-white/30 text-white hover:bg-white/10">
                            <ArrowUpRight className="w-4 h-4 mr-2" />
                            Transfer
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Transactions */}
            <Card className="bg-white border-[#e2e8f0]">
                <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {[
                            { type: "debit", amount: 30000, desc: "Flight booking - LOS to ABV", date: "Jan 15, 2026" },
                            { type: "credit", amount: 500000, desc: "Wallet funding", date: "Jan 10, 2026" },
                            { type: "debit", amount: 15000, desc: "Ride booking - Staff pickup", date: "Jan 8, 2026" },
                        ].map((tx, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-[#f8fafc]">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg ${tx.type === "credit" ? "bg-[#dcfce7]" : "bg-[#fee2e2]"}`}>
                                        {tx.type === "credit" ? (
                                            <ArrowDownLeft className={`w-4 h-4 text-[#22c55e]`} />
                                        ) : (
                                            <ArrowUpRight className={`w-4 h-4 text-[#ef4444]`} />
                                        )}
                                    </div>
                                    <div>
                                        <p className="font-medium text-[#1a1f36]">{tx.desc}</p>
                                        <p className="text-sm text-[#94a3b8]">{tx.date}</p>
                                    </div>
                                </div>
                                <span className={`font-semibold ${tx.type === "credit" ? "text-[#22c55e]" : "text-[#ef4444]"}`}>
                                    {tx.type === "credit" ? "+" : "-"}{currency}{tx.amount.toLocaleString()}
                                </span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
