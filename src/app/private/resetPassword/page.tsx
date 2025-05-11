//Next.
import Link from "next/link";
//Components.
import { FormMessage } from "@/auth/components/ui/formMessage";
import { Button } from "@/core/components/ui/Button";
import { Input } from "@/core/components/ui/Input";
//Utils(Interfaces).
import type { Message } from "@/auth/lib/interfaces/components";
//Supabase.
import { resetPasswordAction } from "@/auth/lib/actions";

//Reset Password Page.
export default async function ResetPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  return (
    <div className="flex-1 w-full flex items-center justify-center min-h-screen">
      <form className="flex flex-col min-w-64 max-w-64">
        <h1 className="text-2xl font-medium">Reset password</h1>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <label htmlFor="password">New password</label>
          <Input
            type="password"
            name="password"
            placeholder="New password"
            required
          />
          
          <label htmlFor="confirmPassword">Confirm password</label>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            required
          />

          <Button
            type="submit"
            pendingText="Resetting password..."
            formAction={resetPasswordAction}
          >
            Reset Password
          </Button>

          <p className="text-sm text-foreground">
            Remember your password?{" "}
            <Link
              className="text-foreground font-medium underline"
              href="/auth/signIn"
            >
              Sign in
            </Link>
          </p>
          <FormMessage message={searchParams} />
        </div>
      </form>
    </div>
  );
}
