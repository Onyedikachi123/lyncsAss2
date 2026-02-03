import * as React from "react";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    showPasswordToggle?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, error, showPasswordToggle, ...props }, ref) => {
        const [showPassword, setShowPassword] = React.useState(false);
        const isPassword = type === "password";
        const inputType = isPassword && showPassword ? "text" : type;

        return (
            <div className="w-full space-y-1.5">
                {label && (
                    <label className="block text-sm font-medium text-[#475569]">
                        {label}
                    </label>
                )}
                <div className="relative">
                    <input
                        type={inputType}
                        className={cn(
                            "flex h-12 w-full rounded-lg border border-[#e2e8f0] bg-white px-4 py-3 text-sm text-[#1a1f36] placeholder:text-[#94a3b8] transition-all duration-200",
                            "focus:border-[#4a7fff] focus:outline-none focus:ring-2 focus:ring-[#4a7fff]/20",
                            "hover:border-[#cbd5e1]",
                            "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[#f8fafc]",
                            error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
                            isPassword && showPasswordToggle && "pr-12",
                            className
                        )}
                        ref={ref}
                        {...props}
                    />
                    {isPassword && showPasswordToggle && (
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94a3b8] hover:text-[#64748b] transition-colors p-1"
                            tabIndex={-1}
                        >
                            {showPassword ? (
                                <EyeOff className="h-5 w-5" />
                            ) : (
                                <Eye className="h-5 w-5" />
                            )}
                        </button>
                    )}
                </div>
                {error && (
                    <p className="text-sm text-red-500 animate-fade-in">{error}</p>
                )}
            </div>
        );
    }
);
Input.displayName = "Input";

export { Input };
