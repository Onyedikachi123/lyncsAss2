"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { loginSchema, type LoginFormData } from "@/schemas/auth-schema";
import { useAuthStore } from "@/stores/auth-store";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useState } from "react";
import {
    TrendingUp,
    FileEdit,
    Users,
    List,
    Bell,
    Settings,
} from "lucide-react";

export function LoginForm() {
    const router = useRouter();
    const { login, isLoading, error, clearError } = useAuthStore();
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: LoginFormData) => {
        try {
            clearError();
            await login(data.email, data.password);
            router.push("/dashboard");
        } catch {
            // Error is handled in the store
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Login Form */}
            <div className="flex-1 flex items-center justify-center bg-white px-52">
                <div className="w-full max-w-[500px]">
                    {/* Logo */}
                    <div>
                        <Logo size="md" />
                    </div>

                    {/* Heading */}
                    {/* Heading */}
                    <h1 className="text-[20px] font-light text-[#1a1f36] mb-4">
                        Log in to your account
                    </h1>


                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Email Field */}
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Email address"
                                {...register("email")}
                                disabled={isLoading}
                                className="w-full h-[52px] px-5 rounded-lg border border-[#e2e8f0] bg-[#f8fafc] text-[13px] placeholder:text-[#94a3b8] focus:outline-none focus:ring-4 focus:ring-[#4a7fff]/10 focus:border-[#4a7fff]"
                            />
                            {errors.email && (
                                <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Forgot Password Link */}
                        <div className="flex justify-end mb-2">
                            <Link
                                href="#"
                                className="text-[15px] font-medium text-[#4a7fff]"
                            >
                                Forgot your password?
                            </Link>
                        </div>


                        {/* PASSWORD */}
                        <div className="mb-6">
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    {...register("password")}
                                    disabled={isLoading}
                                    className="w-full h-[52px] px-5 pr-12 rounded-lg border border-[#e2e8f0] bg-[#f8fafc] text-[13px] placeholder:text-[#94a3b8] focus:outline-none focus:ring-4 focus:ring-[#4a7fff]/10 focus:border-[#4a7fff]"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94a3b8]"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        {/* ERROR */}
                        {error && (
                            <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
                                {error}
                            </div>
                        )}

                        {/* BUTTON */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-[45px] mt-8 rounded-full bg-[#4a7fff] text-white text-[16px] font-semibold hover:bg-[#3a6ae8] transition-colors shadow-md flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Logging in...
                                </>
                            ) : (
                                "Login"
                            )}
                        </button>
                    </form>

                    {/* Create Account Link */}
                    <p className="mt-8 text-[15px] text-[#64748b]">
                        Don’t have an account?{" "}
                        <Link href="#" className="text-[#4a7fff] font-medium">
                            Create an account
                        </Link>
                    </p>
                </div>
            </div>

            {/* Right Side - Dashboard Preview */}
            {/* Right Side - Dashboard Preview */}
            <div className="hidden lg:flex flex-1 bg-[#1d2a3d] items-center justify-center p-8 xl:p-12 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#4a7fff]/10 blur-[100px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#7c3aed]/10 blur-[100px]" />
                </div>

                {/* Dashboard Mockup Container */}
                <div className="relative w-full max-w-[700px] aspect-[4/3] z-10 flex items-center justify-center">

                    {/* Floating Layout */}
                    <div className="relative w-full h-full">

                        {/* Sidebar */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#fff] border border-white/5 rounded-md p-4 w-[72px] flex flex-col items-center  shadow-2xl backdrop-blur-sm">
                            {/* Avatar */}
                            <div className="w-10 h-10 rounded-full bg-[#1a1f36]  flex items-center justify-center text-white text-xs font-bold mt-3 mb-24 shadow-lg">
                                SS
                            </div>

                            {/* Nav Icons */}
                            <div className="flex flex-col">
                                <div className="p-2 text-[#000] bg-white/10 rounded-xl">
                                    <TrendingUp className="w-5 h-5" />
                                </div>
                                <div className="p-2 text-[#000]  rounded-xl transition-colors cursor-pointer">
                                    <FileEdit className="w-5 h-5" />
                                </div>
                                <div className="p-2 text-[#000]  rounded-xl transition-colors cursor-pointer">
                                    <Users className="w-5 h-5" />
                                </div>
                                <div className="p-2 text-[#000]  rounded-xl transition-colors cursor-pointer">
                                    <List className="w-5 h-5" />
                                </div>
                                <div className="p-2 text-[#000]  rounded-xl transition-colors cursor-pointer">
                                    <Bell className="w-5 h-5" />
                                </div>
                                <div className="p-2 text-[#000]  rounded-xl transition-colors cursor-pointer">
                                    <Settings className="w-5 h-5" />
                                </div>
                            </div>
                        </div>

                        {/* Cards Container */}
                        <div className="absolute left-24 top-1/2 -translate-y-1/2 flex flex-col gap-5">
                            {/* Flight Bookings */}
                            <div className="bg-white rounded-md shadow-xl p-5 w-[260px] transform hover:-translate-y-1 transition-transform duration-300">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-bold text-[#1a1f36] text-[15px]">Flight bookings</h3>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-2.5 bg-[#f1f5f9] rounded-full w-full" />
                                    <div className="h-2.5 bg-[#f1f5f9] rounded-full w-3/4" />
                                </div>
                            </div>

                            {/* Staff List - Indented */}
                            <div className="bg-white rounded-md shadow-2xl p-5 w-[150px] ml-28 transform hover:-translate-y-1 transition-transform duration-300 relative z-20 ">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-bold text-[#1a1f36] text-[15px]">Staff list</h3>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-2.5 bg-[#f1f5f9] rounded-full w-full" />
                                    <div className="h-2.5 bg-[#f1f5f9] rounded-full w-2/3" />
                                </div>
                            </div>

                            {/* Booking Requests */}
                            <div className="bg-white rounded-md shadow-xl p-5 w-[260px] transform hover:-translate-y-1 transition-transform duration-300">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-bold text-[#1a1f36] text-[15px]">Booking requests</h3>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-2.5 bg-[#f1f5f9] rounded-full w-full" />
                                    <div className="h-2.5 bg-[#f1f5f9] rounded-full w-1/2" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
