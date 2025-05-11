//Utils(Icons & Interfaces).
import type { Message } from "@/auth/lib/interfaces/components";
import { CheckCircle2, AlertCircle, Info } from "lucide-react";

export function FormMessage({ message }: { message: Message }) {
    return (
      <div className="flex flex-col gap-3 w-full max-w-md text-sm">
        {"success" in message && (
          <div className="bg-success/20 text-success-foreground border-l-4 border-success rounded-lg p-4 flex items-center gap-3 transition-colors shadow-sm">
            <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
            {message.success}
          </div>
        )}
        {"error" in message && (
          <div className="bg-destructive/20 text-destructive-foreground border-l-4 border-destructive rounded-lg p-4 flex items-center gap-3 transition-colors shadow-sm">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            {message.error}
          </div>
        )}
        {"message" in message && (
          <div className="bg-muted/20 text-foreground border-l-4 border-muted rounded-lg p-4 flex items-center gap-3 transition-colors shadow-sm">
            <Info className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
            {message.message}
          </div>
        )}
      </div>
    );
  }
  