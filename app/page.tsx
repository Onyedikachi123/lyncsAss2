import { LoginForm } from "@/components/auth/login-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | Lyncs - Business Travel Management",
  description: "Sign in to your Lyncs account to manage corporate travel, flights, and staff bookings.",
};

export default function HomePage() {
  return <LoginForm />;
}
