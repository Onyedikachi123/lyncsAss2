import { create } from "zustand";

interface UIState {
    // Sidebar
    sidebarOpen: boolean;
    sidebarCollapsed: boolean;

    // Wallet
    walletBalanceVisible: boolean;

    // Notifications
    notificationCount: number;

    // Actions
    toggleSidebar: () => void;
    setSidebarOpen: (open: boolean) => void;
    toggleSidebarCollapsed: () => void;
    toggleWalletVisibility: () => void;
    setNotificationCount: (count: number) => void;
    decrementNotifications: () => void;
}

export const useUIStore = create<UIState>()((set) => ({
    sidebarOpen: false,
    sidebarCollapsed: false,
    walletBalanceVisible: false,
    notificationCount: 47,

    toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),

    setSidebarOpen: (open) => set({ sidebarOpen: open }),

    toggleSidebarCollapsed: () =>
        set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),

    toggleWalletVisibility: () =>
        set((state) => ({ walletBalanceVisible: !state.walletBalanceVisible })),

    setNotificationCount: (count) => set({ notificationCount: count }),

    decrementNotifications: () =>
        set((state) => ({
            notificationCount: Math.max(0, state.notificationCount - 1),
        })),
}));
