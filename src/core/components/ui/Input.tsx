// Utils(Interfaces)
import { InputHTMLAttributes } from "react";
import { InputProps } from "@/core/lib/interfaces/components";

// Input
export function Input({
  variant = "default",
  label,
  startIcon,
  endIcon,
  fullWidth = false,
  ...props
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={`flex flex-col ${fullWidth ? "w-full" : "w-auto"}`}>
      {label && (
        <label className="block text-sm font-medium text-muted-foreground mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        {startIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {startIcon}
          </div>
        )}
        <input
          {...props}
          className={`
            block w-full rounded-lg px-4 py-2.5 
            border transition-colors 
            bg-background text-foreground
            ${startIcon ? "pl-10" : ""}
            ${endIcon ? "pr-10" : ""}
            ${
              variant === "default"
                ? "border-input hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary"
                : variant === "outline"
                ? "border-border hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary"
                : "bg-muted border-transparent"
            }
          `}
        />
        {endIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            {endIcon}
          </div>
        )}
      </div>
    </div>
  );
}
