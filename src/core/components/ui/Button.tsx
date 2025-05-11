//Utils(Interfaces).
import { ButtonProps } from "@/core/lib/interfaces/components";

//Button.
export function Button({
  variant = "primary",
  children,
  onClick,
  startIcon,
  endIcon,
  fullWidth = false,
  type = "button",
  pendingText,
  pending = false,
  formAction,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      formAction={formAction}
      aria-disabled={Boolean(pending)}
      disabled={Boolean(pending)}
      className={`
        inline-flex items-center justify-center gap-2
        px-6 py-2.5 rounded-lg font-medium transition-colors
        ${fullWidth ? "w-full" : "w-auto"}
        ${
          variant === "primary"
            ? "bg-primary text-primaryforeground hover:bg-primary/90"
            : variant === "secondary"
            ? "border border-secondaryforeground text-secondaryforeground hover:bg-secondary/70"
            : "hover:bg-accent/80"
        }
      `}
      {...props}
    >
      {!pending && startIcon && <span className="inline-flex">{startIcon}</span>}
      {pending ? pendingText : children}
      {!pending && endIcon && <span className="inline-flex">{endIcon}</span>}
    </button>
  );
}
