// Mock data for dashboard

export interface Trip {
    id: string;
    route: {
        from: string;
        to: string;
    };
    bookedBy: string;
    date: string;
    status: "Approved" | "Pending" | "Rejected";
    type: "Flight" | "Ride" | "Bus";
}

export interface Approval {
    id: string;
    count: number;
    route: {
        from: string;
        to: string;
    };
    bookedBy: string;
    type: "Flight" | "Ride" | "Bus";
}

export interface StaffMember {
    id: string;
    name: string;
    initials: string;
    avatarUrl?: string;
}

export interface WalletData {
    balance: number;
    currency: string;
    lastTransaction: {
        description: string;
        amount: number;
        staff: number;
    };
    accountNumber: string;
}

// Mock Trips
export const mockTrips: Trip[] = [
    {
        id: "1",
        route: { from: "LOS", to: "ABV" },
        bookedBy: "Faithful Odigbo",
        date: "15th January, 2026",
        status: "Approved",
        type: "Flight",
    },
    {
        id: "2",
        route: { from: "LOS", to: "PHC" },
        bookedBy: "John Doe",
        date: "18th January, 2026",
        status: "Pending",
        type: "Flight",
    },
    {
        id: "3",
        route: { from: "ABV", to: "KAN" },
        bookedBy: "Jane Smith",
        date: "20th January, 2026",
        status: "Approved",
        type: "Flight",
    },
];

// Mock Approvals
export const mockApprovals: Approval = {
    id: "1",
    count: 24,
    route: { from: "LOS", to: "ABV" },
    bookedBy: "Faithful Odigbo",
    type: "Flight",
};

// Mock Staff Members
export const mockStaffMembers = [
    { id: "1", avatarUrl: "/33.jpg" },
    { id: "2", avatarUrl: "/33.jpg" },
    { id: "3", avatarUrl: "/33.jpg" },
    { id: "4", avatarUrl: "/33.jpg" },
    { id: "5", avatarUrl: "/33.jpg" },
    { id: "6", avatarUrl: "/33.jpg" },
    { id: "7", avatarUrl: "/33.jpg" },
    { id: "8", avatarUrl: "/33.jpg" },
];

// Mock Wallet Data
export const mockWalletData: WalletData = {
    balance: 2450000,
    currency: "₦",
    lastTransaction: {
        description: "You last spent ₦30,000 on Reimbursement - PUL increment for staff 77",
        amount: 30000,
        staff: 77,
    },
    accountNumber: "029762",
};

// Company link
export const companyLink = "https://lyncs.africa/join/techcorp-ng";
