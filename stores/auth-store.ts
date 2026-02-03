import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    avatarUrl?: string;
    company?: string;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;

    // Actions
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    clearError: () => void;
}

// Mock user data
const mockUser: User = {
    id: "1",
    email: "oluwaseun@example.com",
    firstName: "Oluwaseun",
    lastName: "Adeyemi",
    company: "TechCorp Nigeria",
};

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,

            login: async (email: string, password: string) => {
                set({ isLoading: true, error: null });

                // Simulate API call delay
                await new Promise((resolve) => setTimeout(resolve, 1500));

                // Mock validation
                if (email && password.length >= 8) {
                    set({
                        user: { ...mockUser, email },
                        isAuthenticated: true,
                        isLoading: false,
                        error: null,
                    });
                } else {
                    set({
                        isLoading: false,
                        error: "Invalid credentials. Please try again.",
                    });
                    throw new Error("Invalid credentials");
                }
            },

            logout: () => {
                set({
                    user: null,
                    isAuthenticated: false,
                    error: null,
                });
            },

            clearError: () => {
                set({ error: null });
            },
        }),
        {
            name: "lyncs-auth-storage",
            partialize: (state) => ({
                user: state.user,
                isAuthenticated: state.isAuthenticated,
            }),
        }
    )
);
