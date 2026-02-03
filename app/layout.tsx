import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

// Global font configuration changes were made here
// Added: Quicksand font-family with sans-serif fallback
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Lyncs - Business Travel Management Platform",
  description: "Manage corporate travel, flights, rides, and staff bookings with Lyncs Africa's premium business travel platform.",
  keywords: ["business travel", "corporate travel", "flight booking", "staff management", "Lyncs Africa"],
  authors: [{ name: "Lyncs Africa" }],
  openGraph: {
    title: "Lyncs - Business Travel Management Platform",
    description: "Manage corporate travel, flights, rides, and staff bookings with Lyncs Africa's premium business travel platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
